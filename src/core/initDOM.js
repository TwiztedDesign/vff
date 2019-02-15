import {getByPath, parseRJSON} from '../utils/helpers';
import {vffData} from './vffData';
import {EXPOSE_DELIMITER, ATTRIBUTE} from './consts';
// import {bindSyncEvents} from './interactionEvents';



function initDOM() {
    let controls = document.querySelectorAll(`[${ATTRIBUTE.CONTROL}]`);
    controls.forEach(control => {

        let name = control.getAttribute(ATTRIBUTE.CONTROL);

/*********************************************************************************************/
        //TODO handle options
        let options = control.getAttribute(ATTRIBUTE.OPTIONS) || '{}';
        try {
            //TODO test it
            options = parseRJSON(options);
        } catch (err){
            options = {};
        }

        //TODO what is this and why do i need this?
        if(control.options && typeof control.options === 'function'){
            options = Object.assign({}, control.options(), options);
        }
        // options.element = control;
/*********************************************************************************************/
        let exposedAttr = control.getAttribute(ATTRIBUTE.EXPOSE);
        if(exposedAttr){
            try {
                exposedAttr = parseRJSON(exposedAttr);
            } catch (err){
                if(!exposedAttr.match("{|}")){
                    exposedAttr = {[exposedAttr] : exposedAttr};
                } else {
                    exposedAttr = null;
                }
            }
        }
/*********************************************************************************************/


        let exposed = exposedAttr? exposedAttr : (control.expose? control.expose() : {});

        for (let prop in exposed) {
            if (exposed.hasOwnProperty(prop)) {


                let path = exposed[prop], ui, attribute;
                if(typeof exposed[prop] === 'object'){
                    path = exposed[prop].path;
                    ui = exposed[prop].ui;
                    attribute = exposed[prop].attribute;
                }

                let ctrl = vffData.registerControl(name + EXPOSE_DELIMITER + prop,
                    attribute? control.getAttribute(path) : getByPath(control, path),
                    Object.assign({bindTo : path, ui, attribute},options));

                let bindName = name.indexOf('.') > -1 ? name.split('.')[1] : name;
                control.setAttribute(ATTRIBUTE.BIND, ctrl.getGroup() + '.' + bindName);
            }
        }
        if(control instanceof HTMLTextAreaElement || control instanceof HTMLInputElement){
            vffData.registerControl(name, control.value);
        }

    });
    let binds = document.querySelectorAll(`[${ATTRIBUTE.BIND}]`);
    binds.forEach(controlEl => {
        if(controlEl instanceof HTMLTextAreaElement || controlEl instanceof HTMLInputElement){
            controlEl.addEventListener('keyup', () => {
                let control = vffData.getControl(controlEl.getAttribute(ATTRIBUTE.BIND));
                if(control){
                    control.updateValue(controlEl.value);
                }
            });
        }
    });
}

// function closest(element, selector){
//
//     while (element) {
//         if (element.matches(selector)) {
//             return element;
//         }
//         element = element.parentElement;
//     }
//
// }
//
// function initSync(){
//     let elements = document.querySelectorAll('[vff-sync]');
//     elements.forEach((element) => {
//         bindSyncEvents(element);
//     });
// }


module.exports = {
    init : () => {
        window.addEventListener('load', function(){
            initDOM();
        });
    },
    _init : initDOM
};


import {getByPath, setByPath, deepExtend} from '../utils/helpers';
import {vffData} from './vffData';
import {EXPOSE_DELIMITER} from './consts';

function initDOM(){
    let untitledTemplateCount = 0;
    let templates = {};


    document.querySelectorAll('[vff-template]').forEach(function(template){
        if(!template.hasAttribute('vff-name') && !template.querySelector('[vff-name]')){
            template.setAttribute('vff-name', '');
        }
    });

    let controls = document.querySelectorAll('[vff-name]');

    controls.forEach((control) => {
        let template = closest(control, '[vff-template]');
        if(!template) {
            control.setAttribute('vff-template', 'Untitled Template ' + (++untitledTemplateCount));
        }
        let options = (template || control).getAttribute('vff-options') || '{}';
        if(options){
            options = JSON.parse(options.replace((/'/g), "\""));
            options.element = (template || control);
        }
        let templateName = (template || control).getAttribute('vff-template');
        let controlName = control.getAttribute('vff-name');
        let exposed = control.expose? control.expose() : {};
        let data = {};
        for (let prop in exposed) {
            if (exposed.hasOwnProperty(prop)) {
                let path = typeof exposed[prop] === 'object'? exposed[prop].path : exposed[prop];
                data[controlName + EXPOSE_DELIMITER + prop] = getByPath(control, path);

                Object.defineProperty(control, prop, {
                    get (){
                        return getByPath(this, path);
                    },
                    set (newVal){
                        setByPath(this, path, newVal);
                    },
                    configurable : true,
                });
            }
        }
        if(!templates[templateName]){
            templates[templateName] = {data : data, options : options};
        } else {
            deepExtend(templates[templateName], {data : data, options : options});
        }
    });
    for (let template in templates) {
        vffData.registerTemplate(template, templates[template].data, templates[template].options);
    }
}

function closest(element, selector){

    while (element) {
        if (element.matches(selector)) {
            return element;
        }
        element = element.parentElement;
    }

}


module.exports = {
    init : () => {
        window.addEventListener('load', function(){
            initDOM();
        });
    },
    _init : initDOM
};


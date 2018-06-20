import {getByPath, setByPath, deepExtend} from '../utils/helpers';
import {EXPOSE_DELIMITER} from './consts';

function init(){
    let untitledTemplateCount = 0;
    let templates = {};
    let controls = document.querySelectorAll('[vff-name]');
    controls.forEach((control) => {
        if(control.expose){
            let template = control.closest('[vff-template]');
            if(!template) {
                control.setAttribute('vff-template', 'Untitled Template ' + (++untitledTemplateCount));
            }
            let templateName = (template || control).getAttribute('vff-template');
            let controlName = control.getAttribute('vff-name');
            let exposed = control.expose();

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
                templates[templateName] = data;
            } else {
                deepExtend(templates[templateName], data);
            }
        }

    });
    for (let template in templates) {
        window.vff.addTemplate(template, templates[template]);
    }
}

module.exports = {
    init : () => {
        window.addEventListener('load', function(){
            init();
        });
    }
};


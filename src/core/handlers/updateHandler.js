import {setByPath} from '../../utils/helpers.js';
import {vffData} from '../vffData.js';
import {EXPOSE_DELIMITER} from '../consts';
import {VFF_EVENT} from '../../utils/events';

function update(data){
    let isDataChanged;

    document.dispatchEvent(new CustomEvent(VFF_EVENT, { detail: data }));


    for(let templateName in data){
        let template = vffData.getTemplate(templateName);
        if(template){
            vffData.registerTemplate(templateName, data[templateName]);
            isDataChanged = true;
            for(let key in data[templateName]){
                updateDom(templateName, key, data[templateName][key], data[templateName].__timecode__);
            }
        }
    }

    if(isDataChanged) {
        vffData.updateCB();
    }
}

window.update = update;
function updateDom(template, control, value, timecode){
    let templateSelector = '[vff-template="' + template + '" i]';
    let controlSelector = '[vff-name="' + control.split(EXPOSE_DELIMITER)[0] + '" i]';
    let selector = templateSelector + ' ' + controlSelector + ',' + templateSelector + controlSelector;
    let dom = document.querySelector(selector);
    if(dom){
        if(timecode !== undefined){
            setByPath(dom, "__timecode__", timecode);
        }
        setByPath(dom, control.split(EXPOSE_DELIMITER)[1], value);
    }
}

module.exports = {
    update : update
};


/** to update angular *****

    let $body = angular.element(document.body);
    let $rootScope =  $body.injector().get('$rootScope');
    $rootScope.$appy();

 ************************/
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
                updateDom(template, key, data[templateName][key], data[templateName].__timecode__);
            }
        }
    }

    if(isDataChanged) {
        vffData.updateCB();
    }
}

function updateDom(template, control, value, timecode){
    let dom = template.$element(control.split(EXPOSE_DELIMITER)[0]);
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
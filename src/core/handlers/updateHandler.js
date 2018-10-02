import {setByPath, defer} from '../../utils/helpers.js';
import {vffData} from '../vffData.js';
import {EXPOSE_DELIMITER} from '../consts';
import {VFF_EVENT} from '../../utils/events';
import {lookupElementByXPath} from '../../utils/xpath';
import {isInteractionEvent} from '../interactionEvents';

function update(data){
    
    let promises = [];
    for(let templateName in data){
        let template = vffData.getTemplate(templateName);
        if(template){
            let deferred = defer();
            template._runMiddleware(data[templateName]).then((result) => {
                vffData.registerTemplate(templateName, result);
                for(let key in result){
                    updateDom(template, key, result[key], result.__timecode__);
                }
                vffData.updateCB();
                deferred.resolve();
            });
            promises.push(deferred.promise);
        } else if(isInteractionEvent(templateName)){
            updateInteraction(templateName, data[templateName]);
        }
    }

    document.dispatchEvent(new CustomEvent(VFF_EVENT, { detail: data }));
    return Promise.all(promises);
}

function updateInteraction(event, data){

    let target = lookupElementByXPath(data.target);
    data.bubbles = true;
    data.cancelable = true;
    data.ctrlKey = data.metaKey = data.altKey = data.shiftKey = true; //Distinct the event to avoid looping

    if(target){
        target.dispatchEvent(new MouseEvent(event, data));
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
    $rootScope.$apply();

 ************************/
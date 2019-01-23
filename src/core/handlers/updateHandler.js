import {broadcast} from '../../utils/helpers.js';
import {vffData} from '../vffData.js';
import {isInteractionEvent, dispatchEvent} from '../interactionEvents';
import {VFF_EVENT} from '../../utils/events';
import {NAMESPACE_DELIMITER} from '../consts';


function update(data){
    let timecode, changed = false;
    for(let templateName in data){
        for(let key in data[templateName]) {
            if(key !== '__timecode__'){
                if(!timecode) timecode = data[templateName].__timecode__;
                changed = vffData.updateControl(`${templateName}${NAMESPACE_DELIMITER}${key}`, data[templateName][key], {timecode}) || changed;
            }
            broadcast(`${VFF_EVENT}${templateName}${NAMESPACE_DELIMITER}${key}`, { dataChanged: changed ,timecode});
        }
        broadcast(VFF_EVENT + templateName, {dataChanged: changed ,timecode});
    }
    broadcast(VFF_EVENT, {dataChanged: changed, timecode});
}

function updateInteraction(data){
    for(let event in data){
        if(isInteractionEvent(event)){
            dispatchEvent(event, data[event]);
        }
    }
}

module.exports = {
    update : update,
    updateInteraction : updateInteraction
};
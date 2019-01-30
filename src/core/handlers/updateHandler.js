import {broadcast} from '../../utils/helpers.js';
import {vffData} from '../vffData.js';
import {isInteractionEvent, dispatchEvent} from '../interactionEvents';
import {VFF_EVENT} from '../../utils/events';
import {NAMESPACE_DELIMITER, TIMECODE} from '../consts';


async function update(data){
    let timecode, globalChange = false, promises = [], templateChange = {};
    return new Promise((resolve, reject) => {
        for(let templateName in data){
            for(let key in data[templateName]) {
                if(key !== TIMECODE){
                    if(!timecode) timecode = data[templateName].__timecode__;
                    promises.push(new Promise((resolve, reject) => {
                        let controlName = `${templateName}${NAMESPACE_DELIMITER}${key}`;

                        vffData._updateControl(controlName, data[templateName][key], {timecode}).then(controlChange => {
                            templateChange[templateName] = controlChange || templateChange[templateName];
                            globalChange = controlChange || globalChange;
                            broadcast(controlName, { dataChanged: controlChange ,timecode});
                            resolve();
                        }, reject);
                    }));
                }
            }
        }

        Promise.all(promises).then(()=>{
            for(let templateName in data){
                broadcast(VFF_EVENT + templateName, {dataChanged: templateChange[templateName] ,timecode});
            }
            broadcast(VFF_EVENT, {dataChanged: globalChange, timecode});
            resolve();
        }, reject);
    });
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
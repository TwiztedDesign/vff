import {request} from '../../utils/messenger.js';

const api = {};




async function currentTime(){
    return new Promise((resolve) => {
        request('vff-current-time',{}, res => {
            resolve(res.payload.currentTime);
        })
    });
}

api.currentTime = currentTime;

module.exports = {api};
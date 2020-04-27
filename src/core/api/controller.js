// import {update} from '../controllerDOM';
import {UPLOAD} from "../../utils/events";
import {request,send} from '../../utils/messenger.js';


function upload(asset, cb){
    request(UPLOAD, {asset : {name :asset.name, type : asset.type}}, res => {
        cb(res.payload);
    });
}

async function currentTime(){
    return new Promise((resolve) => {
        request('vff-current-time',{}, res => {
            resolve(res.payload.currentTime);
        });
    });
}

function go(time){
    send('vff-video-go', {time});
}


module.exports = {
    // update,
    upload,
    currentTime,
    go
};

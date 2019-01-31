// import {updateInteraction} from './updateHandler';
// import WebRTC from '../webrtc/webrtc';
import {vffData} from '../vffData.js';

function handleVFData(data) {
    // if(data.settings.sync && !window.webrtc) {
        // window.webrtc.close();
        // window.webrtc = new WebRTC(data.token, 'sync', {
        //     onMessage: function (message) {
        //         updateInteraction(message);
        //     }
        // });
    // }
    if(data.mode){
        window.vff.mode = data.mode;
    }

    vffData.onReady();

}

module.exports = {
    handleVFData : handleVFData
};


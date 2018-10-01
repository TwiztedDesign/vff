import {update} from './updateHandler';
import WebRTC from '../webrtc/webrtc';

function handleVFData(/*data*/) {
    if(window.webrtc) window.webrtc.close();
    window.webrtc = new WebRTC('vff', 'sync', {
        onMessage: function (message) {
            update(message);
        }
    });
}

module.exports = {
    handleVFData : handleVFData
};


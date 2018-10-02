import {updateInteraction} from './updateHandler';
import WebRTC from '../webrtc/webrtc';
import {isInteractionEvent} from "../interactionEvents";

function handleVFData(data) {
    if(data.settings.sync && !window.webrtc) {
        // window.webrtc.close();
        window.webrtc = new WebRTC(data.token, 'sync', {
            onMessage: function (message) {
                if(isInteractionEvent(event)) {
                    updateInteraction(message);
                }
            }
        });
    }

}

module.exports = {
    handleVFData : handleVFData
};


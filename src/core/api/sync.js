import WebRTC from "../webrtc/webrtc";
import {update} from '../handlers/updateHandler';

module.exports = {
    syncStart : () => {
        if(window.webrtc) window.webrtc.close();
        window.webrtc = new WebRTC('vff', 'sync', {
            onMessage: function (message) {
                update(message);
                console.log('WebRTC Message:', message);

            }
        });
    },
    syncSend : (data) => {
        // window.webrtc.webrtc.sendDataChannelMessageToPeer(window.webrtc.target, JSON.stringify(msg));
        window.webrtc.webrtc.sendDirectlyToAll('chat', 'custommessage', JSON.stringify(data));
    }
};

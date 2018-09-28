import * as handlers from '../core/handlers';
import {ACK} from './events';


function messageHandler(message){
    try{
        let messageData = JSON.parse(message.data);
        let type = messageData.type;
        let handler = handlers[type];
        if(messageData.cid && message.source && message.source.postMessage){
            message.source.postMessage(JSON.stringify({type : ACK, cid: messageData.cid}),'*');
        }
        if(handler){
            handler(messageData.payload);
        }
    } catch(err){
        //Malformed JSON
    }

}

module.exports = {
    start : () => {
        if(window && window.addEventListener){
            window.addEventListener('message', messageHandler, false);
        }
    }
};


import {VFF_EVENT, OUTGOING_EVENT} from '../../utils/events.js';
import {findKey} from '../../utils/helpers';
import {send} from '../../utils/messenger';
import {vffData} from '../../core/vffData';
let timeouts = {};


module.exports = {

    onEvent : (arg1, arg2, arg3) => {

        let template, callback, options;
        switch (arguments.length){
            case 0:
                throw new Error("onEvent was called without arguments");
            case 1:
                callback = arg1;
                break;
            default:
                if(typeof arg1 === 'string'){
                    template = arg1;
                    callback = arg2;
                    options = arg3 || {};
                } else if(typeof arg1 === 'function'){
                    callback = arg1;
                    options = arg2 || {};
                }
                break;
        }

        function runCB(data){
            if(options.consolidate || options.throttle){
                clearTimeout(timeouts[template || '__global_event__']);
                timeouts[template || '__global_event__'] = setTimeout(function(){
                    callback(data);
                }, (typeof options.throttle === 'number')? options.throttle : 50);
            } else {
                callback(data);
            }
        }

        function listener(event){
            if(template){
                let key = findKey(event.detail, template);
                if(key){
                    runCB(event.detail[key]);
                }
            } else {
                runCB(event.detail);
            }
        }

        document.addEventListener(VFF_EVENT, listener);
    },


    emit : (data) => {
        let payload = {};
        payload.data = data;
        payload.query = vffData.getQueryParams();
        send(OUTGOING_EVENT, payload);
    }

};


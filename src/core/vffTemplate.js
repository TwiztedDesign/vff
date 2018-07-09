import {USER_UPDATE} from "../utils/events";
import {ADD} from "../utils/events";
import {findKey, deepProxy} from '../utils/helpers.js';
import {send} from '../utils/messenger';

class VffTemplate {
    constructor(name, data){

        let self = this;

        this._onChangeFunc = function(name){
            return {
                set: function (target, prop, value) {

                    self.setByPath(target, prop, value);
                    let payload = {};
                    payload[name] = {};
                    self.setByPath(payload[name], prop, value);
                    send(USER_UPDATE, payload);

                    return true;

                }
            };

        };

        this._proxy = deepProxy(data, this._onChangeFunc(name));

    }


}


export let vffTemplate = new VffTemplate();
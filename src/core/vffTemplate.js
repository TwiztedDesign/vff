import {USER_UPDATE, VFF_EVENT} from "../utils/events";
import {findKey, deepExtend} from '../utils/helpers.js';
import {send} from '../utils/messenger';
const bypassPrefix = '___';


class Template{
    constructor(name, data) {
        this._name = name;
        this._proxy = new Proxy(data, this._traps(name));
    }
    update(data){
        let toUpdate = this._copy(data, bypassPrefix);
        deepExtend(this._proxy, toUpdate);
    }

    _copy(o, prefix) {
        prefix = prefix || '';
        let output, v, key;
        output = Array.isArray(o) ? [] : {};
        for (key in o) {
            v = o[key];
            if(Array.isArray(output)){
                output[key] = (typeof v === "object") ? this._copy(v, prefix) : v;
            } else {
                output[prefix + key] = (typeof v === "object") ? this._copy(v, prefix) : v;
            }
        }
        return output;
    }

    show(){
        this._setValue("visibility", true);
    }
    hide(){
        this._setValue("visibility", false);
    }
    toggle(){
        let visibility = this._getValue('visibility');
        if(visibility !== undefined){
            this._setValue('visibility', !visibility);
        }
    }

    onData(arg1, arg2, arg3){
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

        let self = this;
        function listener(event){
            let key = findKey(event.detail, self._name);
            if(key) {
                callback(template ? event.detail[key][template] : event.detail[key]);
            }
        }
        document.addEventListener(VFF_EVENT, listener);
    }

    _traps(name){
        let self = this;
        let traps = {
            set: function (target, key, value) {

                let bypass = key.startsWith(bypassPrefix);
                if(bypass && !target.__isProxy){
                    key = key.substr(bypassPrefix.length);
                }
                target[key] = value;
                if(!bypass && !target.__isProxy && typeof value !== 'object'){
                    let payload = {};
                    payload[name] = self._proxy;
                    send(USER_UPDATE, payload);
                }
                return true;
            },
            get: function (target, key) {
                if(key === '__isProxy'){return true;}
                if(key.startsWith && key.startsWith(bypassPrefix))  key = key.substr(bypassPrefix.length);
                if (typeof target[key] === 'object' && target[key] !== null && !target[key].__isProxy) {
                    return new Proxy(target[key], traps);
                } else {
                    return target[key];
                }
            }
        };

        return traps;
    }
    _setValue(key, value){
        key = findKey(this._proxy, key);
        if(key){
            this._proxy[key] = value;
        }
    }

    _getValue(key){
        return this._proxy[findKey(this._proxy, key)];
    }

}

export default class VffTemplate extends Template {
    constructor(name, data){
        super(name, data);

        let self = this;
        return new Proxy(this, {
            get : function(target, prop){
                if(prop in target){
                    return target[prop];
                }
                return self._proxy[prop];
            },
            set : function(target, prop, value){
                if(prop in target){
                    return target[prop] = value;
                }
                else {
                    target._proxy[prop] = value;
                }
                return true;
            }
        });
    }
}
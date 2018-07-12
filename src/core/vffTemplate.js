import {USER_UPDATE, VFF_EVENT} from "../utils/events";
import {findKey, deepExtend, getByPath} from '../utils/helpers.js';
import {send} from '../utils/messenger';
const bypassPrefix = '___bypass___', parentObject = '__parent_object__', parentKey = '__parent_key__';
const timeouts = {};

class Template{
    constructor(name, data) {
        this._name = name;
        this._proxy = new Proxy(data, this._traps(name));
    }
    update(data){
        let toUpdate = this._copy(data, bypassPrefix);
        deepExtend(this._proxy, toUpdate);
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
        let template, callback, options = options || {};
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
            let key = findKey(event.detail, self._name);
            if(key) {
                if(template && getByPath(event.detail[key], template)){
                    runCB(getByPath(event.detail[key], template));
                } else if(!template){
                    runCB(event.detail[key]);
                }

            }
        }
        document.addEventListener(VFF_EVENT, listener);
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

    _sendUserUpdateEvent(name, target, key, value){
        let payload = {}, po, pk, originalTarget = target;
        payload[name] = {};


        if(!target[parentObject]){
            payload[name][key] = value;
        } else {
            let ancestors = [];
            while(target[parentObject]){
                ancestors.unshift(target[parentKey]);
                target = target[parentObject];
            }

            let ancestor = '',
                tmp = payload[name];
            for(ancestor of ancestors) {
                tmp[ancestor] = {};
                if(ancestors[ancestors.length -1 !== ancestor]){
                    tmp = tmp[ancestor];
                }

            }

            po = originalTarget[parentObject];
            pk = originalTarget[parentKey];
            delete originalTarget[parentObject];
            delete originalTarget[parentKey];
            tmp[ancestor] = originalTarget;
        }

        send(USER_UPDATE, payload);

        if(po) originalTarget[parentObject] = po;
        if(pk) originalTarget[parentKey] = pk;
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
                    self._sendUserUpdateEvent(name, target, key, value);
                }
                return true;
            },
            get: function (target, key) {
                if(key === '__isProxy'){return true;}
                if(key.startsWith && key.startsWith(bypassPrefix))  key = key.substr(bypassPrefix.length);
                if (typeof target[key] === 'object' && target[key] !== null && !target[key].__isProxy) {
                    let proxy = new Proxy(target[key], traps);
                    proxy[bypassPrefix + parentObject] = target;
                    proxy[bypassPrefix + parentKey] = key;
                    return proxy;
                }
                else {
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
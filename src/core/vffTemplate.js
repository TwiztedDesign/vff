import {USER_UPDATE, VFF_EVENT} from "../utils/events";
import {findKey, deepProxy, deepExtend} from '../utils/helpers.js';
import {send} from '../utils/messenger';
const bypassPrefix = '___';


class Template{
    constructor(name, data) {
        this._name = name;
        this._data = data;

        // this._proxy = deepProxy(data, this._onChangeFunc(name));
        this._proxy = new Proxy(data, this._traps(name));
    }
    updateData(data){
        let toUpdate = this._copy(data, bypassPrefix);
        deepExtend(this._proxy, toUpdate);
    }

    _copy(o, prefix) {
        var output, v, key;
        output = Array.isArray(o) ? [] : {};
        for (key in o) {
            v = o[key];
            output[prefix + key] = (typeof v === "object") ? this._copy(v, prefix) : v;
        }
        return output;
    }

    addData(data){
        this.updateData(data);
        // deepExtend(this._data, data);
        // this._proxy = deepProxy(this._data, this._onChangeFunc(this._name));
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
                    console.log('user update', payload);
                    send(USER_UPDATE, payload);
                }
                return true;
            },
            get: function (target, key) {
                if(key === '__isProxy'){return true;}
                if(key.startsWith && key.startsWith(bypassPrefix))  key = key.substr(bypassPrefix.length);
                if (typeof target[key] === 'object' && target[key] !== null) {
                    return new Proxy(target[key], traps)
                } else {
                    return target[key];
                }
            }
        };

        return traps;
    }


    _onChangeFunc(name){
        let self = this;
        return {
            set: function (target, prop, value) {
                let bypass = prop[prop.length - 1].startsWith(bypassPrefix);
                if(bypass) prop[prop.length - 1] = prop[prop.length - 1].substr(bypass.length);
                self._setByPath(target, prop, value);
                let payload = {};
                payload[name] = {};
                self._setByPath(payload[name], prop, value);
                if(!bypass){
                    send(USER_UPDATE, payload);
                }
                return true;
            },
            get: function (target, prop) {
                if (prop !== "__isProxy") {
                    return target[prop];
                }
                return true;
            }
        };

    }
    _setByPath(obj, path, value) {
        for (let i = 0; i < path.length - 1; i++) {
            let prop = path[i];
            if (prop in obj) {
                obj = obj[prop];
            } else {
                obj[prop] = {};
                obj = obj[prop];
            }
        }
        if(typeof value === 'object'){
            value = deepProxy(value, this._onChangeFunc(path[0]));
        }
        obj[path[path.length - 1]] = value;
    }
    _setValue(key, value){
        key = findKey(this._data, key);

        if(key){
            this._data[key] = value;
            this._proxy[key] = deepProxy(value, this._onChangeFunc(this._name));
        }
    }

    _getValue(key){
        return this._data[findKey(this._data, key)];
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
                if(typeof prop === 'string' && prop.startsWith("__")){
                    return self._data[prop.substr(2)];
                }
                return self._proxy[prop];
            },
            set : function(target, prop, value){
                if(prop in target){
                    return target[prop] = value;
                } else if (typeof prop === 'string' && prop.startsWith("__")){
                    target._data[prop.substr(2)] = value;
                }
                else {
                    target._proxy[prop] = value;
                }
                return true;
            }
        });
    }
}
import {uuid, findKey} from '../utils/helpers.js';
const internal = {
    bypassPrefix    : '__bypass__',
    parentObject    : '__parent_object__',
    parentKey       : '__parent_key__',
    proxy           : '__proxy__',
    isProxy         : '__isProxy__',
    self            : '__self__'

};
const isInternalProperty = function(prop){
    return prop.startsWith('__') && prop.endsWith('__') && prop !== '__proxy__';
};
const cleanInternal = function(object){
    Object.keys(object).forEach((key) => {
        if(isInternalProperty(key)){
            delete object[key];
        } if(typeof object[key] === 'object'){
            cleanInternal(object[key]);
        }
    })
};
const getPath = (obj, key) => {
    let path = key? [key] : [];
    while(obj[internal.parentObject]){
        path.unshift(obj[internal.parentKey]);
        obj = obj[internal.parentObject];
    }
    return path;
};
const noBypass = (key) => {
    return typeof key === 'string'? key.replace(internal.bypassPrefix ,'') : '';
};

export default class SuperProxy {
    constructor(data, traps) {
        this._proxies = {};
        traps = traps || {};
        this._proxy = new Proxy(data, this._traps(traps));

        let self = this;

        return new Proxy(this, {
            get : function(target, prop){

                if(prop in target){
                    return target[prop];
                }
                let key = findKey(self._proxy, noBypass(prop));
                prop = key || prop;
                return self._proxy[prop];
            },
            set : function(target, prop, value){
                if(prop in target){
                    throw  new Error("Override Error: " + prop + " is an internal vff property and can't be overridden");
                    // return target[prop] = value;
                } else {
                    target._proxy[prop] = value;
                }
                return true;
            }
        });

    }

    findKey(key){
        return findKey(this._proxy, key);
    }

    _copy(o, prefix) {
        prefix = prefix || '';
        let output, v, key;
        output = Array.isArray(o) ? [] : {};
        for (key in o) {
            v = o[key];
            if (Array.isArray(output)) {
                output[key] = (typeof v === "object") ? this._copy(v, prefix) : v;
            } else {
                output[prefix + key] = (typeof v === "object") ? this._copy(v, prefix) : v;
            }
        }
        return output;
    }

    _set(target, key, value){
        target[internal.bypassPrefix + key] = value;
    }

    _traps(trapFuncs) {
        let self = this;

        let traps = {
            set: (target, key, value) => {
                let bypass = key.startsWith(internal.bypassPrefix);
                if (bypass && !target[internal.isProxy]) {
                    key = key.substr(internal.bypassPrefix.length);
                }
                target[key] = value;
                if (!bypass && !target[internal.isProxy] && typeof value !== 'object') {
                    if (trapFuncs.set) {
                        //set with parent object, path array, value
                        let path = getPath(target, key);
                        cleanInternal(target);
                        trapFuncs.set(target, path, value);
                    }
                }
                return true;
            },
            get: (target, key) => {
                if (key === internal.isProxy) {
                    return true;
                }
                if (key === internal.self) {
                    cleanInternal(target);
                    return target;
                }
                if (key.startsWith && key.startsWith(internal.bypassPrefix)) {
                    key = key.substr(internal.bypassPrefix.length);
                }

                if (typeof target[key] === 'object' && target[key] !== null && !target[key][internal.isProxy] && !isInternalProperty(key)) {
                    if (target[key][internal.proxy]) {
                        return self._proxies[target[key][internal.proxy]];
                    } else {
                        let proxy = new Proxy(target[key], traps);
                        self._set(proxy, internal.parentObject, target);
                        self._set(proxy, internal.parentKey, key);
                        let proxyID = uuid();
                        self._proxies[proxyID] = proxy;
                        target[key][internal.proxy] = proxyID;
                        return proxy;
                    }
                }
                else {
                    return target[key];
                }

            }
        };
        return traps;
    }
}
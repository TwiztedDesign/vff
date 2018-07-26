import {USER_UPDATE, VFF_EVENT, OUTGOING_EVENT} from "../utils/events";
import {findKey, deepExtend, getByPath, uuid} from '../utils/helpers.js';
import {send} from '../utils/messenger';
import {vffData} from './vffData';
const bypassPrefix = '___bypass___', parentObject = '__parent_object__', parentKey = '__parent_key__';
const timeouts = {};
const defaults = {
  changeOnly : true
};
//getElement, update, show, hide, toggle, onData, emit
class Template{
    constructor(name, data, element) {
        this._name = name;
        this._proxy = new Proxy(data, this._traps(name));
        this._element = element;
        this._proxies = {};
    }
    $element(control){
        if(this._element && control){
            return this._element.getAttribute('vff-name') === control?
                this._element : this._element.querySelector('[vff-name=' + control +']');
        }
        return this._element;
    }
    $show(){
        this._setValue("visibility", true);
    }
    $hide(){
        this._setValue("visibility", false);
    }
    $toggle(){
        let visibility = this._getValue('visibility');
        if(visibility !== undefined){
            this._setValue('visibility', !visibility);
        }
    }
    $emit(data){
        let payload = {};
        payload.data = data;
        payload.query = vffData.getQueryParams();
        payload.channel = this._name;
        send(OUTGOING_EVENT, payload);
    }
    $on(arg1, arg2, arg3){
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

        options = Object.assign({}, defaults, options);

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

                if(options.changeOnly && getByPath(event.detail[key], template) === getByPath(self._proxy, template)){
                    return;
                }

                if(template && getByPath(event.detail[key], template) !== undefined){
                    runCB(getByPath(event.detail[key], template));
                } else if(!template){
                    runCB(event.detail[key]);
                }
            }
        }
        document.addEventListener(VFF_EVENT, listener);
    }


    getElement(){ return this.$element(); }
    show(){ return this.$show(); }
    hide(){ return this.$hide(); }
    toggle(){ return this.$toggle(); }
    onData(arg1, arg2, arg3){ return this.$on(arg1, arg2, arg3); }
    emit(data){ return this.$emit(data); }

    _update(data){
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
    _set(target, key, value){
        target[bypassPrefix + key] = value;
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
                    if(target[key]._proxy){
                        return self._proxies[target[key]._proxy];
                    } else {
                        let proxy = new Proxy(target[key], traps);
                        self._set(proxy, parentObject, target);
                        self._set(proxy, parentKey, key);
                        let proxyID = uuid();
                        self._proxies[proxyID] = proxy;
                        target[key]._proxy = proxyID;
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
    constructor(name, data, element){
        super(name, data, element);

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
                    throw  new Error("Override Error: " + prop + " is an internal vff property and can't be overridden");
                    // return target[prop] = value;
                }
                else {
                    target._proxy[prop] = value;
                }
                return true;
            }
        });
    }
}
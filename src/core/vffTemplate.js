import {USER_UPDATE, VFF_EVENT, OUTGOING_EVENT} from "../utils/events";
import {EXPOSE_DELIMITER} from './consts';
import {findKey, getByPath} from '../utils/helpers.js';
import {send} from '../utils/messenger';
import {vffData} from './vffData';
import SuperProxy from "../utils/super-proxy";
const defaultListenerOptions = {
    changeOnly  : true,
    throttle    : true
};
const defaultTemplateOptions = {
    updateOn : 'all' // all, template, control
};
//getElement, update, show, hide, toggle, onData, emit
class Template{
    constructor(name, data, options) {
        this._name = name;
        this._options = Object.assign({}, defaultTemplateOptions, options);
        this._proxy = new SuperProxy(data, this._traps(name));
        this._element = this._options.element;
        this._proxies = {};
        this._timeouts = {};
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
                throw new Error("$on was called without arguments");
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

        options = Object.assign({}, defaultListenerOptions, options);

        let self = this;

        function runCB(data){
            if(options.consolidate || options.throttle){
                clearTimeout(self._timeouts[template || '__global_event__']);
                self._timeouts[template || '__global_event__'] = setTimeout(function(){
                    callback(data);
                }, (typeof options.throttle === 'number')? options.throttle : 50);
            } else {
                callback(data);
            }
        }

        function listener(event){
            let key = findKey(event.detail, self._name);
            if(key) {

                if(template && options.changeOnly && (getByPath(event.detail[key], template) === getByPath(self._proxy, template) || getByPath(event.detail[key], template) === undefined )){
                    return;
                } else if (!template && options.changeOnly && self._proxy.equals(event.detail[key])){
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
        this._proxy.update(data);
    }

    _sendUserUpdateEvent(name, target, path, value){
        let payload = {};
        payload[name] = {};
        if(path.length === 1){
            payload[name][path[0]] = value;
        } else {
            let tmp = payload[name];
            for (let i = 0; i < path.length -1; i++) {
                const key = path[i];

                if(i === path.length - 2){
                    tmp[key] = target;
                } else {
                    tmp[key] = {};
                    tmp = tmp[key];
                }

            }
        }
        send(USER_UPDATE, payload);
    }

    _traps(name) {
        let self = this;
        let traps = {
            set: (target, key, value) => {
                self._sendUserUpdateEvent(name, target, key, value);
            }
        };
        return traps;
    }
    _setValue(key, value){
        key = this._proxy.findKey(key);
        if(key){
            this._proxy[key] = value;
        }
    }
    _getValue(key){
        return this._proxy[key];
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
                } else if(target._element && target._element.expose && findExposed(prop, target._proxy)){
                    return target._proxy[findExposed(prop, target._proxy)];
                }
                return self._proxy[prop];
            },
            set : function(target, prop, value){
                if(prop in target){
                    throw  new Error("Override Error: " + prop + " is an internal vff property and can't be overridden");
                    // return target[prop] = value;
                }
                else if(target._element && target._element.expose && findExposed(prop, target._proxy)){
                    target._proxy[findExposed(prop, target._proxy)] = value;
                }
                else {
                    target._proxy[prop] = value;
                }
                return true;
            }
        });
    }
}


function findExposed(key, values){
    values = Object.keys(values);
    for (let i = 0; i < values.length; i++) {
        const prop = values[i].split(EXPOSE_DELIMITER)[1];
        if(prop && prop.toLowerCase() === key.toLowerCase()){
            return values[i];
        }

    }
}
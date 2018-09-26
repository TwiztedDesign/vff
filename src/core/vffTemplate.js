import {USER_UPDATE, VFF_EVENT, OUTGOING_EVENT} from "../utils/events";
import {EXPOSE_DELIMITER, UI} from './consts';
import {findKey, getByPath, defer} from '../utils/helpers.js';
import {send} from '../utils/messenger';
import {vffData} from './vffData';
import SuperProxy from "../utils/super-proxy";
import UIMultiselect from './ui/uiMultiselect';
import UIDropdown from './ui/uiDropdown';
import UIRadio from './ui/uiRadio';
import UIRange from './ui/uiRange';

const defaultListenerOptions = {
    changeOnly  : true,
    throttle    : true
};
const defaultTemplateOptions = {
    updateOn : 'all', // all, template, control
    global   : false
};
//getElement, update, show, hide, toggle, onData, emit
class Template{
    constructor(name, data, options) {
        this._name = name;
        this._options = Object.assign({}, defaultTemplateOptions, options);
        this._middleware = [];
        this._createUIElements(data);
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
    $before(...args){
        args = this._arguments(...args);
        args.options = Object.assign({}, defaultListenerOptions, args.options);
        this._middleware.push(args);
    }
    $on(...args){
        args = this._arguments(...args);
        let path = args.path, callback = args.callback, options = args.options;

        options = Object.assign({}, defaultListenerOptions, options);

        let self = this;

        function runCB(data){
            self._runCallback(callback, path, options, data);
        }

        function listener(event){
            let key = findKey(event.detail, self._name);
            if(key) {

                if(path && options.changeOnly && (getByPath(event.detail[key], path) === getByPath(self._proxy, path) || getByPath(event.detail[key], path) === undefined )){
                    return;
                } else if (!path && options.changeOnly && self._proxy.equals(event.detail[key])){
                    return;
                }

                if(path && getByPath(event.detail[key], path) !== undefined){
                    runCB(getByPath(event.detail[key], path));
                } else if(!path){
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
    onData(...args){ return this.$on(...args); }
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
    _runMiddleware(data){
        let self = this;
        return this._middleware.reduce((prev, curr) => {
            return prev.then((data) => {
                let d = defer();

                if(!curr.path || (curr.path && getByPath(data, curr.path) !== undefined)){
                    self._runCallback(curr.callback, curr.path, curr.options || {}, data, d.resolve);
                } else {
                    d.resolve(data);
                }

                return d.promise;
            });
        }, Promise.resolve(data));
    }

    _arguments(arg1, arg2, arg3){
        let path, callback, options;
        switch (arguments.length){
            case 0:
                throw new Error("No arguments error");
            case 1:
                callback = arg1;
                break;
            default:
                if(typeof arg1 === 'string'){
                    path = arg1;
                    callback = arg2;
                    options = arg3 || {};
                } else if(typeof arg1 === 'function'){
                    callback = arg1;
                    options = arg2 || {};
                }
                break;
        }
        return {
            path : path,
            callback : callback,
            options : options
        };
    }

    _runCallback(callback, path, options, ...data){
        if(options.consolidate || options.throttle){

            let callbacks = this._timeouts[path || '__global_event__'];
            if(!callbacks){
                this._timeouts[path || '__global_event__'] = new WeakMap();
            }

            clearTimeout(this._timeouts[path || '__global_event__'].get(callback));
            this._timeouts[path || '__global_event__'].set(callback, setTimeout(function(){
                callback(...data);
            }, (typeof options.throttle === 'number')? options.throttle : 50));
        } else {
            callback(...data);
        }
    }

    _createUIElements(data){
        Object.keys(data).forEach(function(key){
            if(data[key] && data[key].constructor && data[key].constructor === Object){
                switch(data[key].ui){
                    case UI.MULTISELECT : data[key] = new UIMultiselect(data[key]); break;
                    case UI.DROPDOWN    : data[key] = new UIDropdown(data[key]); break;
                    case UI.RADIO       : data[key] = new UIRadio(data[key]); break;
                    case UI.RANGE       : data[key] = new UIRange(data[key]); break;
                }
            }
        });
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
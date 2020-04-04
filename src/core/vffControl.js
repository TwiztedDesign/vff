import {defer, setByPath, deepCompare} from "../utils/helpers";
import {EXPOSE_DELIMITER, NAMESPACE_DELIMITER, ATTRIBUTE, DEFAULT_GROUP_NAME} from "./consts";
import {send} from "../utils/messenger";
import {OUTGOING_EVENT, USER_UPDATE} from "../utils/events";
import {vffData} from "./vffData";
import VFFEvent from "./vffEvent";


const DEFAULT_OPTIONS = {
    group   : DEFAULT_GROUP_NAME,
    global  : false,
    bindTo  : undefined,
    updateOn: 'control'
};

const DEFAULT_ON_OPTIONS = {
    throttle : true,
    changeOnly : true
};
const DEFAULT_BEFORE_OPTIONS = {
    throttle : true,
};
export default class VFFControl {
    constructor(name, value, options){

        let group;
        let parts = name.split(NAMESPACE_DELIMITER);
        if(parts.length > 1){
            name = parts[parts.length - 1];
            group = parts.slice(0,-1).join(NAMESPACE_DELIMITER);
        }

        this._name = name;
        this._options = Object.assign({}, DEFAULT_OPTIONS, options || {});
        if(group && this._options.group === DEFAULT_OPTIONS.group) this._options.group = group;
        this._group = this._options.group; //for querying purposes

        this._listeners = [];
        this._middleware = [];
        this._timeouts = new WeakMap();


        if(value && value.value){
            value = value.value;
        }
        this._value = value;
        this._updateBoundElements();
    }

    getGroup(){ return this._options.group; }
    getName(){ return this._name; }
    getNamespace(){ return this.getGroup() + NAMESPACE_DELIMITER + this.getName() ;}
    getOptions(){ return this._options; }
    getValue(){ return this._value; }
    getBindProp(){ return this.getOptions().bindTo; }
    isBoundToAttribute(){ return !!this.getOptions().attribute; }

    _updateBoundElements(){
        let elements = document.querySelectorAll(this._bindSelector());
        elements.forEach(el => {
            if(this.getBindProp()){
                if(this.isBoundToAttribute()){
                    el.setAttribute(this.getBindProp(), this._value);
                } else {
                    setByPath(el, this.getBindProp(), this._value);
                }

            }
            else if(el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement){
                el.value = this._value;
            } else {
                el.innerHTML = this._value;
            }
        });

    }
    _runListeners(valueChanged){
        this._listeners.forEach(listener => {
            if(!listener.options.changeOnly || valueChanged){
                this._runCallback(listener.fn, listener.options, new VFFEvent({
                    data : this._value,
                    timecode : this.timecode,
                    changed : valueChanged
                }));
            }
        });
    }
    _setValue(value){
        if(value && value.value){
            value = value.value;
        }
        let valueChanged = !deepCompare(this._value,value);
        return new Promise((resolve, reject) => {
            this._runMiddleware(this._middleware, value).then(value => {
                let oldVal = this._value;
                this._value = value;
                this._updateBoundElements();
                this._runListeners(valueChanged);
                resolve({controlChange : valueChanged, oldVal});
            }, reject);
        });


    }

    updateValue(value, options = {}){
        if(value && value.value){
            value = value.value;
        }
        let valueChanged = !deepCompare(this._value,value);
        if(value !== null && value !== undefined) this._value = value;
        Object.assign(this._options, options);
        this._updateBoundElements();
        this._runListeners(valueChanged);

        send(USER_UPDATE, {[this.getGroup()] : this.getValueObject()});
        return valueChanged;
    }


    getValueObject(){
        let data;
        if(this.getOptions().ui && typeof this.getOptions().ui.type){
            data = {
                [this.getName()] : {
                    ui : this.getOptions().ui.type,
                    options : this.getOptions().ui.options,
                    value : this.getValue(),
                    label   : this.getOptions().ui.label,
                    config  : this.getOptions().ui.config
                }
            };
        } else {
            data = {[this.getName()]: this.getValue()};
        }
        return data;
    }

    on(fn, options){
        options = Object.assign({}, DEFAULT_ON_OPTIONS, options || {});
        this._listeners.push({fn, options});
        return this;
    }
    emit(data){
        send(OUTGOING_EVENT, {
            data    : data,
            query   : vffData.getQueryParams(),
            channel : this.getGroup()
        });
    }
    before(fn, options){
        options = Object.assign({}, DEFAULT_BEFORE_OPTIONS, options || {});
        this._middleware.push({fn, options});
        return this;
    }

    _bindSelector(){
        // let group = this.getGroup() === DEFAULT_OPTIONS.group? '' : (this.getGroup() + NAMESPACE_DELIMITER);
        let group = this.getGroup() + NAMESPACE_DELIMITER;
        let name = `${this.getName().split(EXPOSE_DELIMITER)[0]}`;
        return `[${ATTRIBUTE.BIND}="${group}${name}"]`;
    }

    _runCallback(callback, options, ...data){
        if(options.consolidate || options.throttle){
            clearTimeout(this._timeouts.get(callback));
            this._timeouts.set(callback, setTimeout(() => {
                callback(...data);
            },(typeof options.throttle === 'number')? options.throttle : 50));
        } else {
            callback(...data);
        }
    }
    _runMiddleware(functions, data){
        let self = this;
        return functions.reduce((prev, curr) => {
            return prev.then((data) => {
                let d = defer();
                self._runCallback(curr.fn, curr.options, data, d.resolve);
                return d.promise;
            });
        }, Promise.resolve(data));
    }



}

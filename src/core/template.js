import SuperProxy from '../utils/super-proxy';
import {OUTGOING_EVENT} from "../utils/events";
import {vffData} from "./vffData";
import {deepExtend, findKey} from "../utils/helpers";
const bypassPrefix = '__bypass__';

class Template {
    constructor(name, data, options) {
        this._name = name;
        this._options = Object.assign({}, defaultTemplateOptions, options);
        this._proxy = new SuperProxy(this._copy(data), this._traps(name)); //TODO add traps
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
        this._setValue("visibility", true); //TODO add setValue, getValue
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
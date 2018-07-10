import {USER_UPDATE} from "../utils/events";
import {findKey, deepProxy, deepExtend} from '../utils/helpers.js';
import {send} from '../utils/messenger';


class Template{
    constructor(name, data) {
        this._name = name;
        this._data = data;
        this._proxy = deepProxy(data, this._onChangeFunc(name));
    }
    addData(data){
        deepExtend(this._data, data);
        // let proxy = deepProxy(this._data, this._onChangeFunc(this._name));
        this._proxy = deepProxy(this._data, this._onChangeFunc(this._name));
        // deepExtend(this._proxy, proxy);
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


    _onChangeFunc(name){
        let self = this;
        return {
            set: function (target, prop, value) {

                self._setByPath(target, prop, value);
                let payload = {};
                payload[name] = {};
                self._setByPath(payload[name], prop, value);
                send(USER_UPDATE, payload);

                return true;

            },
            get: function (target, prop) {
                return self._proxy[prop];
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
            get(target, prop){
                if(prop in target){
                    return target[prop];
                }
                return self._proxy[prop];
            }
        });
    }
}

import {ADD, PAGES_UPDATE, VFF_EVENT} from "../utils/events";
import {docRef, broadcast, on, defer, queryOne, query, filter} from '../utils/helpers.js';
import {send} from '../utils/messenger';
import {REGISTER_TEMPLATE} from '../utils/docRefs';

import {NAMESPACE_DELIMITER} from "../core/consts";
import VFFControl from './vffControl';
import VFFEvent from './vffEvent';

const ADD_CONTROL_TIMEOUT = 3000;

const DEFAULT_ON_OPTIONS = {
    throttle : true,
    changeOnly : true
};

class VffData {
    constructor(){
        this._controls = [];
        this._pages = [];
        this._pagesDefer = defer();
        this._registerControlTimeouts = {};
        this._listeners = {};
        this._readyCallbacks = [];
        this._timeouts = new WeakMap();
    }

    registerControl(name, value, options){

        if(arguments.length < 2){
            //TODO change ref
            throw new Error('Missing Arguments, please refer to: ' + docRef(REGISTER_TEMPLATE));
        }

        let control = new VFFControl(name, value, options);
        let existingControl = queryOne(this._controls, {_group : control.getGroup(), _name: control.getName()}, {insensitive : true});
        if(existingControl){
            existingControl.updateValue(value);
        } else {
            this._controls.push(control);
        }


        clearTimeout(this._registerControlTimeouts[control.getGroup()]);
        this._registerControlTimeouts[control.getGroup()] = setTimeout(() => {
            let controls = filter(this._controls, c => {
                return c.getGroup() === control.getGroup();
            });

            let data = {};
            controls.forEach(control => {
                Object.assign(data, control.getValueObject());
            });

            send(ADD,{
                channel : control.getGroup(),
                options : options,
                data    : data
            });

        }, ADD_CONTROL_TIMEOUT);

        return control;
    }

    registerControls(object, options){
        for(let name in object){
            if(object.hasOwnProperty(name)){
                let value = object[name];
                let opts = Object.assign({}, options);

                if(typeof value === 'object' && value.ui){
                    opts.ui = value.ui;
                    value = value.value !== undefined? value.value : value.ui.value;
                }

                this.registerControl(name, value, opts);
            }
        }
    }

    _updateControl(name, value, options) {
        let control = this.getControl(name);
        if (control) {
            //TODO make better
            if(options && options.timecode){
                control.timecode = options.timecode;
            }
            return control._setValue(value);
        }
        return Promise.resolve(false);
    }

    updateControl(name, value) {
        let control = this.getControl(name);
        if (control) {
            return control.updateValue(value);
        }
    }

    getControl(name){
        if(!name){
            //TODO correct ref
            throw new Error('Missing Arguments, please refer to: ' + docRef(REGISTER_TEMPLATE));
        }
        let parts = name.split(NAMESPACE_DELIMITER);
        if(parts.length > 1){
            return queryOne(this._controls, {_name : parts[parts.length - 1], _group : parts.slice(0,-1).join(NAMESPACE_DELIMITER)}, {insensitive : true});
        } else {
            return queryOne(this._controls, {_name : name}, {insensitive : true});
        }
    }
    getControls(namespace){
        if(!namespace){
            return this._controls;
        }
        let parts = namespace.split(NAMESPACE_DELIMITER);
        if(parts.length > 1){
            return query(this._controls, {_name : parts[parts.length - 1], _group : parts.slice(0,-1).join(NAMESPACE_DELIMITER)}, {insensitive : true});
        } else {
            let controls = query(this._controls, {_group : parts[0]}, {insensitive : true});
            if(!controls.length){
                controls = query(this._controls, {_name : parts[0]}, {insensitive : true});
            }
            return controls;
        }
    }
    getControlsData(namespace){
        let data = {};
        let controls = this.getControls(namespace);
        controls.forEach(control => {
            let name = control.getNamespace().substr(namespace.length);
            if(name.startsWith(NAMESPACE_DELIMITER)) name = name.substr(1);
            if(name){
                data[name] = control.getValue();
            } else {
                data = control.getValue();
            }

        });
        return data;
    }

    on(namespace, cb, options) {
        options = Object.assign({}, DEFAULT_ON_OPTIONS, options || {});
        //TODO handle no namespace
        on(VFF_EVENT + namespace, event => {
            if(!options.changeOnly || event.dataChanged){
                this._runCallback(cb, options, new VFFEvent({
                    timecode : event.timecode,
                    changed : event.dataChanged,
                    data: this.getControlsData(namespace)
                }));
            }
        });
    }
    before(){
        //TODO
    }
    emit(){
        //TODO
    }

    addPages(pages){
        if(pages && pages.length){
            while (this._pages.length) { this._pages.pop(); }
            this._pages = this._pages.concat(pages);
            this._pagesDefer.resolve(pages);
            broadcast(PAGES_UPDATE, this._pages);
            // this.updateCB();
        }
    }
    getPages(){
        return this._pagesDefer.promise;
    }
    onPages(cb){
        if(this._pages.length){
            cb(this._pages);
        }
        on(PAGES_UPDATE, (event) => {
            cb(event.detail);
        });
    }
    addQueryParams(params){
        this._queryParams = params;
        // this.updateCB();
    }
    getQueryParams(){
        return this._queryParams;
    }
    clear(){
        this._controls = [];
        this._registerControlTimeouts = {};
        this._listeners = {};
        this._timeouts = new WeakMap();
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

    ready(cb){
        this._readyCallbacks.push(cb);
    }
    onReady(){
        this._readyCallbacks.forEach(cb => {cb();});
    }

}


export let vffData = new VffData();
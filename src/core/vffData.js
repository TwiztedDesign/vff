import {ADD, PAGES_UPDATE, VFF_EVENT} from "../utils/events";
import {docRef, broadcast, on, defer, queryOne, query, isFunction, isObject, findKey, deepCompare, getByPath} from '../utils/helpers.js';
import {send} from '../utils/messenger';
import {REGISTER_TEMPLATE} from '../utils/docRefs';
import {DEFAULT_GROUP_NAME} from "./consts";

import {NAMESPACE_DELIMITER} from "../core/consts";
import VFFControl from './vffControl';
import VFFEvent from './vffEvent';

const DEFAULT_ON_OPTIONS = {
    throttle : true,
    changeOnly : true
};

class VffData {
    constructor(){
        this._controls = [];
        this._pages = [];
        this._pagesDefer = defer();
        this._listeners = {};
        this._readyCallbacks = [];
        this._timeouts = new WeakMap();
        this._eventQueue = {};
        this._nameMap = {};
    }


    _addToNameMap(name){
        this._nameMap[name] = name;
        this._nameMap[name.toLowerCase()] = name;
    }
    _getFromNameMap(name){
        return this._nameMap[name] || name;
    }
    registerControl(name, value, options){

        if(arguments.length < 2){
            //TODO change ref
            throw new Error('Missing Arguments, please refer to: ' + docRef(REGISTER_TEMPLATE));
        }

        let control = new VFFControl(name, value, options);
        let existingControl = queryOne(this._controls, {_group : control.getGroup(), _name: control.getName()}, {insensitive : true});
        if(existingControl){
            existingControl.updateValue(value, options);
        } else {
            this._addToNameMap(control.getGroup());
            this._controls.push(control);
        }

        send(ADD,{
            channel : control.getGroup(),
            options : control.getOptions(),
            data    : control.getValueObject()
        });

        return control;
    }

    registerController(url){
        this._controller = this._controller || new VFFControl('controller.main', {}, {ui : {type : 'custom', url}});
        this._controls.push(this._controller);
        send(ADD,{
            channel : this._controller.getGroup(),
            options : this._controller.getOptions(),
            data    : this._controller.getValueObject()
        });
        return this._controller;
    }
    updateController(value, options){
        if(!this._controller) return;
        this._controller.updateValue(value, options);
    }
    getControllerData(){
        return (this._controller? this._controller.getValue() : {});
    }


    registerControls(namespace, object, options){
        if(isObject(namespace)){
            options = object || {}, object = namespace, namespace = options.group || DEFAULT_GROUP_NAME; }
        for(let name in object){
            if(object.hasOwnProperty(name)){
                let value = object[name];
                let opts = Object.assign({}, options);
                opts.group = opts.group || namespace;

                if(typeof value === 'object' && value.ui){
                    opts.ui = value.ui;
                    value = value.value !== undefined? value.value : value.ui.value;
                }

                this.registerControl(name, value, opts);
            }
        }
        return {

            on : (() => {
                let group = namespace;
                return (namespace , cb, options) => {
                    if(isFunction(namespace)){
                        options = cb; cb = namespace; namespace = '';
                    }
                    let ns = namespace? group + '.' + namespace : group;
                    this.on(ns, cb, options);
                };
            })()
        };
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
        return Promise.resolve({controlChange: true});
    }

    updateControl(name, value, options) {
        let control = this.getControl(name);
        if (control) {
            return control.updateValue(value, options);
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
    getControlsData(namespace, fallback){
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

        if(namespace){
            if(namespace.indexOf(NAMESPACE_DELIMITER) > -1){
                return controls.length? data : fallback;
            } else {
                return Object.assign({}, fallback, data);
            }
        } else {
            for(let group in fallback){
                for( let control in fallback[group]){
                    let key = findKey(data, group + NAMESPACE_DELIMITER + control);
                    if(!key){
                        data[this._getFromNameMap(group) + NAMESPACE_DELIMITER + control] = fallback[group][control];
                    }
                }
            }
        }
        return data;
    }


    on(namespace, cb, options) {
        if(isFunction(namespace)){
            options = cb; cb = namespace; namespace = '';
        }
        options = Object.assign({}, DEFAULT_ON_OPTIONS, options || {});
        on(VFF_EVENT + namespace.toLowerCase(), event => {
            if(!options.changeOnly || event.dataChanged){
                this._runCallback(cb, options, new VFFEvent({
                    timecode : event.timecode,
                    changed : event.dataChanged,
                    data: this.getControlsData(namespace, event.data),
                    namespace
                }));
            }
        });
    }
    onController(namespace, cb, options){
        if(isFunction(namespace)){
            options = cb; cb = namespace; namespace = '';
        }
        options = Object.assign({}, DEFAULT_ON_OPTIONS, options || {});
        on(VFF_EVENT + 'controller.main', event => {
            if(event.data.value && (event.data.value[namespace] || getByPath(event.data.value, namespace) || !namespace)){
                let dataChanged = !event.oldValue || !deepCompare(getByPath(event.data.value, namespace), getByPath(event.oldValue, namespace));
                if(!options.changeOnly || dataChanged) {
                    this._runCallback(cb, options, new VFFEvent({
                        timecode: event.timecode,
                        changed: dataChanged,
                        data: namespace ? getByPath(event.data.value, namespace) : event.data.value,
                        namespace
                    }));
                }
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
        this._listeners = {};
        this._timeouts = new WeakMap();
        this._eventQueue = {};
    }


    _runCallback(callback, options, ...data){
        if(options.consolidate || options.throttle){
            clearTimeout(this._timeouts.get(callback));
            //todo add data to queue
            data.forEach(event => {
                let queue = this._eventQueue[event.namespace] || [];
                queue.push(event);
                this._eventQueue[event.namespace] = queue;
            });

            this._timeouts.set(callback, setTimeout(() => {

                function rec(events, agg){
                    if(!events.length){
                        return agg;
                    }
                    let event = events.shift();
                    if(isObject(event.data) && isObject(agg)){
                        Object.assign(agg, event.data);
                    } else {
                        agg = event.data;
                    }
                    return rec(events, agg);
                }

                data.forEach(event => {
                    if(!isObject(event.data)){
                        this._eventQueue[event.namespace] = [];
                    } else {
                        let events = this._eventQueue[event.namespace];
                        let agg = rec(events, {});
                        event.data = Object.assign(agg, event.data);
                    }
                    callback(event);
                });
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
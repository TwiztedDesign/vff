import {isFunction, on} from '../utils/helpers.js';
import {request, send} from '../utils/messenger';
import {UPLOAD_ASSET, VFF_EVENT} from "../utils/events";
import VFFEvent from "./vffEvent";


const styleHandler = {
    get: function(target, name) {
        return target[name];
    },
    set: function(target, prop, value) {
        let cssVar = '--' + prop.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
        document.documentElement.style.setProperty(cssVar, value);
        target[prop] = value;
        return true;
    }
};


class VffState {

    constructor(){
        let style = {};
        this.data  = {};
        this.data.__style = new Proxy(style, styleHandler);
    }


    add(key, value){
        this.data[key] = value;
    }
    remove(key){
        delete this.data[key];
    }
    get(key){
        return this.data[key];
    }
    extend(obj){
        for (let key in obj) {
            this.add(key, obj[key]);
        }
    }
    has(key){
        return this.data.hasOwnProperty(key);
    }
    reset(){
        this.data = {};
    }

    sync(){
        console.log("SYNC"); // eslint-disable-line
    }
    take(path){
        console.log("TAKE"); // eslint-disable-line
        send('vff-state', {data : this.data, path});
    }
    upload(asset, cb){
        request(UPLOAD_ASSET , {asset : {name :asset.name, type : asset.type}}, res => {
            cb(res.payload);
        });
    }
    on(namespace, cb, options){
        if(isFunction(namespace)){
            options = cb; cb = namespace; namespace = '';
        }
        on(VFF_EVENT + namespace.toLowerCase(), event => {
            let e = new VFFEvent({
                timecode : event.timecode,
                changed : event.dataChanged,
                data: event.data,
                oldVal : event.oldVal,
                options,
                namespace
            });
            cb(e);
        });
    }
}


export let vffState = new VffState();
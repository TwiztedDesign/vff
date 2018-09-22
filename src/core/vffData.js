import {ADD, PAGES_UPDATE} from "../utils/events";
import {docRef, broadcast, on, defer} from '../utils/helpers.js';
import {send} from '../utils/messenger';
import {REGISTER_TEMPLATE} from '../utils/docRefs';
import VffTemplate from './vffTemplate';

class VffData {
    constructor(){
        this._templates = {};
        this._pages = [];
        this._pagesDefer = defer();
    }

    updateCB(){
        if(this._updateCB) {
            this._updateCB();
        } else if(window.angular){
            let $body = window.angular.element(document.body);
            let $injector = $body.injector();
            if($injector){
                $injector.get('$rootScope').$apply();
            }
        }
    }

    onUpdate(cb){
        this._updateCB = cb;
    }

    registerTemplate(name, data, element){
        if(arguments.length < 2){
            throw new Error('Missing Arguments, please refer to: ' + docRef(REGISTER_TEMPLATE));
        }

        data = data || {};
        name = name.toLowerCase();

        if(this._templates[name]){
            this._templates[name]._update(data);
        } else {
            this._templates[name] = new VffTemplate(name, data, element);
        }

        send(ADD,{
            channel : name,
            options : this._templates[name]._options,
            data    : data
        });

        return this._templates[name];
    }

    getTemplate(name){
        return this._templates[name.toLowerCase()];
    }
    getTemplates(){
        return Object.values(this._templates);
    }

    show(template){
        this.getTemplate(template).show();
    }
    hide(template){
        this.getTemplate(template).hide();
    }
    toggle(template){
        this.getTemplate(template).toggle();
    }
    clear(){
        this._templates = {};
    }
    addPages(pages){
        if(pages && pages.length){
            while (this._pages.length) { this._pages.pop(); }
            this._pages = this._pages.concat(pages);
            this._pagesDefer.resolve(pages);
            broadcast(PAGES_UPDATE, this._pages);
            this.updateCB();
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
        this.updateCB();
    }
    getQueryParams(){
        return this._queryParams;
    }
    getTargetGeo(){
        return this._queryParams && this._queryParams._targetgeo;
    }
}


export let vffData = new VffData();
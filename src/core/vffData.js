import {ADD} from "../utils/events";
import {docRef} from '../utils/helpers.js';
import {send} from '../utils/messenger';
import {REGISTER_TEMPLATE} from '../utils/docRefs';
import VffTemplate from './vffTemplate';

class VffData {
    constructor(){
        let self = this;
        this._templates = {};
        this._pages = [];

        this._pagesPromise = new Promise(function(resolve, reject){
            self._pagesResolve = resolve;
            self._pagesReject = reject;
        });
        this._queryParamsPromise = new Promise(function(resolve, reject){
            self._quaryParamsResolve = resolve;
            self._quaryParamsReject = reject;
        });
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
            this._pagesResolve(pages);
            this.updateCB();
        }
    }
    getPages(){
        return this._pagesPromise;
    }
    addQueryParams(params){
        this._quaryParamsResolve(params);
        this.updateCB();
    }
    getQueryParams(){
        return this._queryParamsPromise;
    }
}


export let vffData = new VffData();
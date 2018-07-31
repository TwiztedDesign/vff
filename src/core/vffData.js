import {ADD} from "../utils/events";
import {docRef} from '../utils/helpers.js';
import {send} from '../utils/messenger';
import {REGISTER_TEMPLATE} from '../utils/docRefs';
import VffTemplate from './vffTemplate';

class VffData {
    constructor(){
        this._templates = {};
        this._pages = [];
    }

    updateCB(){
        if(this._updateCB) {
            this._updateCB();
        }
        if(window.angular){
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
            this.updateCB();
        }
    }
    getPages(){
        return this._pages;
    }
    addQueryParams(params){
        this._queryParams = params;
        this.updateCB();
    }
    getQueryParams(){
        return this._queryParams;
    }
    _getCleanData(obj){
        var cleanObj = Object.assign({}, obj);
        delete cleanObj.__parent_object__;
        delete cleanObj.__parent_key__;
        delete cleanObj._proxies;
        for(let key in cleanObj._proxy){
            delete cleanObj._proxy[key].__parent_object__;
            delete cleanObj._proxy[key].__parent_key__;
            delete cleanObj._proxy[key]._proxies;
            cleanObj[key] = cleanObj._proxy[key];
            if(typeof cleanObj._proxy[key] === 'object') {
                this._getCleanData(cleanObj._proxy[key]);
            }
        }
        return cleanObj;
    }
    getTemplatesData(){
        var templates = this.getTemplates();
        var data = [];
        templates.forEach((template) =>{
            var templateCopy = Object.assign({}, template);
            var obj = {name: templateCopy._name};
            this._getCleanData(obj);

            for(let key in templateCopy._proxy){
                delete templateCopy._proxy[key].__parent_object__;
                delete templateCopy._proxy[key].__parent_key__;
                delete templateCopy._proxy[key]._proxies;

                obj[key] = templateCopy._proxy[key];
                data.push(obj);
            }
        });
        return data;
    }
}


export let vffData = new VffData();
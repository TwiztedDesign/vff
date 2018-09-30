import {send, request} from './utils/messenger.js';
import {READY} from './utils/events.js';
import {vffData} from './core/vffData.js';
import {start as startListener} from './utils/listener';
import {init as initVffDom} from './core/initDOM';
import vffElement from './core/vffElement';
import './core/defaultExpose';
import "./components/components.js";
import {isMobile, isController, mode, extend, defer} from './utils/helpers';
import * as eventsApi from './core/api/events';
import * as playerApi from './core/api/player';
import * as visibilityApi from './core/api/visibility';
import * as httpApi from './core/api/http';
import * as syncApi from './core/api/sync';

require('./core/interactionEvents');

startListener();
initVffDom();

window.addEventListener('load', () => {
    send(READY);
});


let vff = (selector) => {
    return new vffElement(selector);
};

vff.addTemplate         = (name, data, options) => {return vffData.registerTemplate(name, data, options);};
vff.registerTemplate    = (name, data, options) => {return vffData.registerTemplate(name, data, options);};
vff.getTemplate         = (name) => {return vffData.getTemplate(name);};
vff.getTemplates        = () => {return vffData.getTemplates();};
vff.onUpdate            = (cb) => {return vffData.onUpdate(cb);};
vff.getPages            = () => {return vffData.getPages();};
vff.onPages             = (cb) => {return vffData.onPages(cb);};
vff.getQueryParams      = () => {return vffData.getQueryParams();};
vff.send                = (type, payload) => { send(type, payload); };
vff.request             = (type, payload, cb) => { request(type, payload, cb); };
vff.isMobile            = isMobile;
vff.isController        = isController;
vff.mode                = mode;
vff.defer               = defer;
vff.extend              = (name, extension) => { vff[name] = extension; };
vff.define              = (name, element) => { customElements.define(name, element); };

extend(vff, playerApi);
extend(vff, visibilityApi);
extend(vff, eventsApi);
extend(vff, syncApi);

window.onload = function(){
    // setTimeout(function(){
        vff.syncStart();
    // },3000 +  (Math.random() * 5000));

};



vff.extend('http', httpApi);


module.exports = vff;
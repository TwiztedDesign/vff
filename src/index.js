import {send, request} from './utils/messenger.js';
import {setup} from './core/vffSetup';
import {READY, CUSTOM_READY} from './utils/events.js';
import {vffData} from './core/vffData.js';
import {vffState} from './core/vffState.js';
import {start as startListener} from './utils/listener';
import {init as initVffDom} from './core/initDOM';
import {init as initControllerDom} from './core/controllerDOM2';
import {init as initResizeHandler} from './utils/resizeHandler';
import vffElement from './core/vffElement';
import './core/defaultExpose';
// import "../scripts/custom-elements.min";
// import "../scripts/custom-elements-es5-adapter.exec";
import {isMobile, extend, defer, uuid} from './utils/helpers';
import * as eventsApi from './core/api/events';
import * as playerApi from './core/api/player';
import * as controllerApi from './core/api/controller';
import {api as videoApi} from './core/api/video';
import * as httpApi from './core/api/http';
import {bindSyncEvents} from './core/interactionEvents';
import {MODE} from './core/consts';
import * as noOverScroll from './utils/noOverscroll';

startListener();
initVffDom();
initControllerDom();


window.addEventListener('load', () => {
    initResizeHandler();
    isMobile ? window.document.body.classList.add('vff-mobile') : window.document.body.classList.remove('vff-mobile');
    send(READY);
});


let vff = (selector) => {
    return new vffElement(selector);
};


vff.registerControl     = (name, value, options) => {return vffData.registerControl(name, value, options);};
vff.registerControls    = (object, options) => {return vffData.registerControls(object, options);};
vff.updateControl       = (name, value, options) => {return vffData.updateControl(name, value, options);};
vff.getControl          = (name) => {return vffData.getControl(name);};
vff.ready               = (cb) => {return vffData.ready(cb);};
vff.customReady         = () => {send(CUSTOM_READY);};

vff.onUpdate            = (cb) => {return vffData.onUpdate(cb);};
vff.getPages            = () => {return vffData.getPages();};
vff.onPages             = (cb) => {return vffData.onPages(cb);};
vff.on                  = (namespace, cb, options) => {return vffData.on(namespace, cb, options);};
vff.onController        = (namespace, cb, options) => {return vffData.onController(namespace, cb, options);};
vff.getQueryParams      = () => {return vffData.getQueryParams();};
vff.send                = (type, payload) => { send(type, payload); };
vff.request             = (type, payload, cb) => { request(type, payload, cb); };
vff.setup               = (options) => {return setup(options);};
vff.isMobile            = isMobile;
vff.isController        = () => {return vff.mode === MODE.PREVIEW || vff.mode === MODE.PROGRAM;};
vff.data                = () => {return vffData.getControllerData();};
vff.mode                = MODE.NORMAL;
vff.MODE                = MODE; //Enum
vff.defer               = defer;
vff.extend              = (name, extension) => { vff[name] = extension; };

//Deprecated
vff.define              = (name, element) => {
    if('customElements' in window){
        customElements.define(name, element);
    }
};
vff.uuid                = uuid();
vff.sync                = (element) => { bindSyncEvents(element); };
vff.enableOverscroll    = () => {noOverScroll.disable();}; //Enabled by default
vff.disableOverscroll   = () => {noOverScroll.enable();}; //When disabled, body is not scrollable


extend(vff, playerApi);
extend(vff, eventsApi);

vff._playerStatus = {};
/*** State ***/
vff.state = vffState.data;
vff.take = vffState.take;
vff.style = vffState.style();
vff.onStateChange = vffState.on;
/*************/


vff.extend('controller', controllerApi);
vff.extend('video', videoApi);
vff.extend('http', httpApi);


module.exports = vff;
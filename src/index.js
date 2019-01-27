import {send, request} from './utils/messenger.js';
import {setup} from './core/vffSetup';
import {READY} from './utils/events.js';
import {vffData} from './core/vffData.js';
import {start as startListener} from './utils/listener';
import {init as initVffDom} from './core/initDOM';
import vffElement from './core/vffElement';
import './core/defaultExpose';
import "./components/components.js";
import {isMobile, isController, mode, extend, defer, uuid} from './utils/helpers';
import * as eventsApi from './core/api/events';
import * as playerApi from './core/api/player';
import * as visibilityApi from './core/api/visibility';
import * as httpApi from './core/api/http';
import {bindSyncEvents} from './core/interactionEvents';
import {MODE} from './core/consts';

startListener();
initVffDom();

window.addEventListener('load', () => {
    send(READY);
});


let vff = (selector) => {
    return new vffElement(selector);
};


vff.registerControl     = (name, value, options) => {return vffData.registerControl(name, value, options);};
vff.registerControls    = (object, options) => {return vffData.registerControls(object, options);};
vff.updateControl       = (name, value, options) => {return vffData.updateControl(name, value, options);};
vff.getControl          = (name) => {return vffData.getControl(name);};


vff.onUpdate            = (cb) => {return vffData.onUpdate(cb);};
vff.getPages            = () => {return vffData.getPages();};
vff.onPages             = (cb) => {return vffData.onPages(cb);};
vff.on                  = (namespace, cb) => {return vffData.on(namespace, cb);};
vff.getQueryParams      = () => {return vffData.getQueryParams();};
vff.send                = (type, payload) => { send(type, payload); };
vff.request             = (type, payload, cb) => { request(type, payload, cb); };
vff.setup               = (options) => {return setup(options);};
vff.isMobile            = isMobile;
vff.isController        = isController;
vff.mode                = mode; //Current
vff.MODE                = MODE; //Enum
vff.defer               = defer;
vff.extend              = (name, extension) => { vff[name] = extension; };
vff.define              = (name, element) => { customElements.define(name, element); };
vff.uuid                = uuid();
vff.sync                = (element) => { bindSyncEvents(element); };

extend(vff, playerApi);
extend(vff, visibilityApi);
extend(vff, eventsApi);




vff.extend('http', httpApi);


module.exports = vff;
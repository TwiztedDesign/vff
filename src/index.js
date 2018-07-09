import {send, request} from './utils/messenger.js';
import {READY} from './utils/events.js';
import {vffData} from './core/vffdata.js';
import {start as startListener} from './utils/listener';
import {init as initVffDom} from './core/init';
import vffElement from './core/vffElement';
import './core/defaultExpose';
import "./components/components.js";
import {isMobile, isController, mode, extend} from './utils/helpers';
import * as eventsApi from './core/api/events';
import * as playerApi from './core/api/player';
import * as visibilityApi from './core/api/visibility';
require('./core/interactionEvents');

startListener();
initVffDom();

window.addEventListener('load', () => {
    send(READY);
});


let vff = (selector) => {
    return new vffElement(selector);
};

vff.addTemplate    = (name, data) => {return vffData.addTemplate(name, data);};
vff.onUpdate       = (cb) => {return vffData.onUpdate(cb);};
vff.getPages       = () => {return vffData.getPages();};
vff.getQueryParams = () => {return vffData.getQueryParams();};
vff.send           = (type, payload) => { send(type, payload); };
vff.request        = (type, payload, cb) => { request(type, payload, cb); };
vff.isMobile       = isMobile;
vff.isController   = isController;
vff.mode           = mode;
vff.extend         = (name, extension) => { vff[name] = extension; };
vff.define         = (name, element) => { customElements.define(name, element); };

extend(vff, playerApi);
extend(vff, visibilityApi);
extend(vff, eventsApi);


module.exports = vff;
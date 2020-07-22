import {send} from "../utils/messenger";
let events = require("../utils/events.js");
import {update, update2, updateStyles} from "./handlers/updateHandler.js";
import {pages} from "./handlers/pagesHandler.js";
import {queryParams} from "./handlers/queryParamsHandler.js";
import {reload} from "./handlers/reloadHandler.js";
import {handleVFData} from './handlers/vfDataHandler';
import {deviceChange, playerStatus} from './handlers/playerHandler';

let dataReady = false;
let handlers = {};
handlers['vff-update'] = (e) => {
    update2(e.event.data);
};

handlers[events.UPDATE] = (e) => {
    if(!dataReady) {
        dataReady = true;
        send(events.DATA_READY);
    }
    updateStyles(e);
    update(e);
};
handlers[events.PAGES] = pages;
handlers[events.QUERY_PARAMS] = queryParams;
handlers[events.RELOAD] = reload;
handlers[events.VF_DATA] = handleVFData;
handlers[events.DEVICE_CHANGE] = deviceChange;
handlers[events.PLAYER_STATUS] = playerStatus;


module.exports = handlers;
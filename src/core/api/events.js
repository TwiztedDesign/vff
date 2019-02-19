import {TRACK_EVENT} from '../../utils/events.js';
import {send} from '../../utils/messenger';
import {vffData} from '../../core/vffData';

module.exports = {

    track : (name, data) => {
        let payload = {};
        payload.name = name;
        payload.data = data;
        payload.query = vffData.getQueryParams();
        send(TRACK_EVENT, payload);
    }
};


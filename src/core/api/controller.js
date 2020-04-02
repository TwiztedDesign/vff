import {update} from '../controllerDOM';
import {UPLOAD} from "../../utils/events";
import {request} from '../../utils/messenger.js';


function upload(asset, cb){
    request(UPLOAD, {asset}, res => {
        cb(res.payload);
    });
}


module.exports = {
    update,
    upload
};

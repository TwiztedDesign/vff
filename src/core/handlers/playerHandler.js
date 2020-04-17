import {broadcast} from '../../utils/helpers';
import {VIDEO_TIME_UPDATE} from '../../utils/events';

function deviceChange(data){
    window.vff.isMobile = data.device === 'mobile';
    if(window.vff.isMobile){
        window.document.body.classList.add('vff-mobile');
    } else {
        window.document.body.classList.remove('vff-mobile');
    }
}

function playerStatus(data){
    if(!window.vff._playerStatus || data.timecode !== window.vff._playerStatus.timecode){
        broadcast(VIDEO_TIME_UPDATE, data.timecode);
    }
    window.vff._playerStatus = data;
    //TODO handle status change
}

module.exports = {
    deviceChange,
    playerStatus
};


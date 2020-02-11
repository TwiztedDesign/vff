import {send} from '../../utils/messenger.js';
import {GO, CROP, AUDIO_TRACK, TRANSFORM} from '../../utils/events.js';
import {noop} from '../../utils/helpers';


function go(target, time){
    send(GO,{
        target  : target,
        time    : time
    });
}
function crop(top, left, width, height){
    if(top === undefined){
        throw new Error("vff.crop incorrect usage, please pass width, height, top and left values");
    } else {
        if(height === undefined) {height = width;}
        send(CROP, left === undefined? {crop : top} : {top, left, width, height});
    }
}
function transform(fromTopLeftX, fromTopLeftY, fromBottomRightX, fromBottomRightY, toTopLeftX, toTopLeftY, toBottomRightX, toBottomRightY, options){
    send(TRANSFORM, {fromTopLeftX, fromTopLeftY, fromBottomRightX, fromBottomRightY, toTopLeftX, toTopLeftY, toBottomRightX, toBottomRightY, options});
}

function switchAudioTrack(channel){
    send(AUDIO_TRACK, channel);
}


module.exports = {
    go              : go,
    crop            : crop,
    transform       : transform,
    audioTrack      : switchAudioTrack,
    videoTransform  : crop,
    next            : noop,
    previous        : noop,
    home            : noop,
};

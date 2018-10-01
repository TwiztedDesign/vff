import {createXPathFromElement} from '../utils/xpath';


const events = ['mouseup', 'mousedown', 'mousemove', 'click', 'touchstart', 'touchend', 'touchmove'];

function touchesToJson(touches){
    if(!touches) return touches;
    var touchArray = [];

    for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        touchArray.push({
            clientX : touch.clientX,
            clientY : touch.clientY,
            pageX   : touch.pageX,
            pageY   : touch.pageY
        });
    }
    return touchArray;
}

function sync(e){
    if(window.webrtc && !e.ctrlKey) {
        let msg = {};
        msg[e.type] = {
            pageX: e.pageX,
            pageY: e.pageY,
            clientX: e.clientX,
            clientY: e.clientY,
            target: createXPathFromElement(e.target),
            touches: touchesToJson(e.touches),
            targetTouches: touchesToJson(e.targetTouches),
            changedTouches: touchesToJson(e.changedTouches)
        };

        window.webrtc.send(msg);
    }
}

function bindSyncEvents(element){
    events.forEach((event) => {
        element.addEventListener(event, sync, false);
    });
}

function isInteractionEvent(event){
    return events.indexOf(event) > -1;
}

window.addEventListener('load', () => {
    bindSyncEvents(document);
});


module.exports = {
    "sync" : sync,
    "events" : events,
    "bindSyncEvents" : bindSyncEvents,
    "isInteractionEvent" : isInteractionEvent
};

import {createXPathFromElement, lookupElementByXPath} from '../utils/xpath';


const events = ['__mouseup__', '__mousedown__', '__mousemove__', '__click__', '__touchstart__', '__touchend__', '__touchmove__'];

function touchesToJson(touches){
    if(!touches) return touches;
    var touchArray = [];

    for (let i = 0; i < touches.length; i++) {
        let touch = touches[i];
        let touchData = {
            clientX : touch.clientX,
            clientY : touch.clientY,
            pageX   : touch.pageX,
            pageY   : touch.pageY
        };
        touchArray.push(window.Touch? new Touch(touchData) : touchData);
    }
    return touchArray;
}

function sync(e){
    if(e.ctrlKey && e.metaKey && e.altKey && e.shiftKey) return;
    if(window.webrtc) {
        let msg = {};
        msg["__" + e.type + "__"] = {
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
        event = event.replace(/__/g, '');
        element.addEventListener(event, sync, false);
    });
}

function dispatchEvent(event, data){
    let target = lookupElementByXPath(data.target);
    data.bubbles = true;
    data.cancelable = true;
    data.ctrlKey = data.metaKey = data.altKey = data.shiftKey = true; //Distinct the event to avoid looping
    // data.detail = {"test" : true};

    if(target){
        if(['__touchstart__', '__touchend__', '__touchmove__'].indexOf(event) > -1){
            target.dispatchEvent(new TouchEvent(event.slice(2, -2), data));
        } else {
            target.dispatchEvent(new MouseEvent(event.slice(2, -2), data));
        }

    }
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
    "isInteractionEvent" : isInteractionEvent,
    "dispatchEvent" : dispatchEvent
};

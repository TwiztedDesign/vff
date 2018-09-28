import {send} from '../utils/messenger';
import {TOUCH, MOUSE_MOVE, BUBBLE_UP} from '../utils/events';
import {uuid} from '../utils/helpers';


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

function bubbleUpMouseEvent(e){
    if(!e.ctrlKey){
        // console.log(e.type);
        send(BUBBLE_UP,{
            event : e.type,
            data  : {
                uid   : vff.uuid,
                pageX : e.pageX,
                pageY : e.pageY,
                clientX : e.clientX,
                clientY : e.clientY,
                target : createXPathFromElement(e.target),
                touches : touchesToJson(e.touches),
                targetTouches : touchesToJson(e.targetTouches),
                changedTouches : touchesToJson(e.changedTouches)

            }
        });
    } 

}




function createXPathFromElement(elm) {
    var allNodes = document.getElementsByTagName('*');
    for (var segs = []; elm && elm.nodeType == 1; elm = elm.parentNode)
    {
        if (elm.hasAttribute('id')) {
            var uniqueIdCount = 0;
            for (var n=0;n < allNodes.length;n++) {
                if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++;
                if (uniqueIdCount > 1) break;
            };
            if ( uniqueIdCount == 1) {
                segs.unshift('id("' + elm.getAttribute('id') + '")');
                return segs.join('/');
            } else {
                segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
            }
        } else if (elm.hasAttribute('class')) {
            segs.unshift(elm.localName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]');
        } else {
            for (var i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
                if (sib.localName == elm.localName)  i++; };
            segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
        };
    };
    return segs.length ? '/' + segs.join('/') : null;
};




function onTouchStart(e){
    send(TOUCH, e.target.tagName);
}


let lastMouseMoveTime = 0;
function onMouseMove(e){
    send(BUBBLE_UP,{
        event : 'mousemove',
        data  : {
            pageX : e.pageX,
            pageY : e.pageY,
            clientX : e.clientX,
            clientY : e.clientY,
        }
    });
    let mouseMoveTime = Date.now();
    if(mouseMoveTime - lastMouseMoveTime < 100) {
        send(MOUSE_MOVE);
    }
    lastMouseMoveTime = mouseMoveTime;
}



window.addEventListener('load', () => {


    document.body.addEventListener('touchstart', onTouchStart);
    document.body.addEventListener('mousemove', onMouseMove);


    document.body.addEventListener('touchstart', bubbleUpMouseEvent);
    document.body.addEventListener('touchend', bubbleUpMouseEvent);
    // document.body.addEventListener('touchmove', bubbleUpMouseEvent);

    // document.body.addEventListener('mousemove', bubbleUpMouseEvent);
    // document.body.addEventListener("mousedown", bubbleUpMouseEvent);
    // document.body.addEventListener("mouseup", bubbleUpMouseEvent);
    document.body.addEventListener("click", bubbleUpMouseEvent);


});

import {broadcast, searchAttribute, trim} from "../utils/helpers";
import {vffData} from "./vffData";
import {ATTRIBUTE} from './consts';
import {VFF_EVENT} from "../utils/events";
let root = {};



// function debounce(func, wait, immediate) {
//     let timeout;
//
//     return function executedFunction() {
//         let context = this;
//         let args = arguments;
//
//         let later = function() {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//
//         let callNow = immediate && !timeout;
//
//         clearTimeout(timeout);
//
//         timeout = setTimeout(later, wait);
//
//         if (callNow) func.apply(context, args);
//     };
// }
function setByPath(obj, path, value){
    if(arguments.length !== 3){
        throw new Error('Missing Arguments!');
    }
    path = path.replace(/\[/g,".").replace(/\]/g,".").replace(/\.\./g, ".").replace(/\.$/, "");
    path = path? trim(path, '.').split('.') : [""];
    let result = obj;
    for (let i = 0; i < path.length; i++) {
        if(i === path.length -1){
            result[path[i]] = value;
            result.__isArray = !isNaN(path[i]);
        } else {
            if(result[path[i]] === undefined){
                result[path[i]] = {};
                result.__isArray = !isNaN(path[i]);
            }
            result = result[path[i]];
        }
    }
}
function getByPath(obj, path){
    path = path.replace(/\[/g,".").replace(/\]/g,".").replace(/\.\./g, ".").replace(/\.$/, "");
    path = path? trim(path, '.').split('.') : [""];

    let result = obj;
    for (let i = 0; i < path.length; i++) {
        if(result.__isArray){

            result = Object.keys(result).sort().reduce((res, key)=>{
                if(!isNaN(key)){
                    res.push(result[key]);
                }
                return res;
            },[]);
            result = result.map(item => item[path[i]]);
        } else if(Array.isArray(result)){
            result = result.map(item => item[path[i]]);
        } else {
            result = result[path[i]];
        }

        if(result === undefined){
            return result;
        }

    }
    return result;
}
function convertObjectsToArrays(obj) {
    delete obj.__isArray;
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object"){
                if(obj[property].__isArray){
                    obj[property] = objToArr(obj[property]);
                }
                convertObjectsToArrays(obj[property]);

            }
            else{
//                 console.log(property + "   " + obj[property]);
            }
            delete obj[property].__isArray;
        }
    }
}
function objToArr(obj){
    let arr = [];
    Object.keys(obj).forEach(key => {
        if(!isNaN(key)){
            arr[key] = obj[key];
        }
    });
    return arr;
}
function handleSelect(el, data){
    let selectionPath = el.getAttribute(ATTRIBUTE.SELECTION);
    let selection = getByPath(data, selectionPath) || [];
    let val = getValue(el);
    let length = el.options.length;
    let index = el.selectedIndex;
    el.innerHTML = '';
    selection.forEach(s => {
        var option = document.createElement("option");
        option.text = s;
        el.add(option);

    });
    if(length === el.options.length && el.options[index]){
        el.value = el.options[index].value;
    } else if (val){
        el.value = val;
    }

    setByPath(data, el.getAttribute(ATTRIBUTE.DATA), getValue(el));
}
function getValue(el){
    switch (el.constructor.name){
        case 'HTMLSelectElement':
        case 'HTMLInputElement':
            return el.value;
        default:
            return el.value;
    }
}
function setValue(el, value){
    switch (el.constructor.name){
        case 'HTMLSelectElement':
        case 'HTMLInputElement':
            el.value = value;
            break;
        default:
            el.value = value;
    }
}

function flatten(data) {
    const result = {};

    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            let l = cur.length;
            for (let i = 0 ; i < l; i++)
                recurse(cur[i], prop + "." + i);
            if (l === 0) result[prop] = [];
        } else {
            let isEmpty = true;
            for (let p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty && prop) result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}

function scanVffData(){
    root = {};
    let elements = searchAttribute(ATTRIBUTE.DATA);
    elements.forEach(element => {
        let path = element.getAttribute(ATTRIBUTE.DATA);
        let value = getValue(element);
        setByPath(root, path, value);
    });
    convertObjectsToArrays(root);
}
function scanSelectFrom(){
    let selectElements = searchAttribute(ATTRIBUTE.SELECTION);
    selectElements.forEach(element => {
        handleSelect(element, root);
    });
}

function gatherData(){
    // console.log('Gather data');
    scanVffData();
    scanSelectFrom();
    vffData.updateController(root);
    broadcast(VFF_EVENT, { dataChanged: true, root});
}

function updateListener(event){
    // console.log('Update Listener');
    setByPath(root, event.target.getAttribute(ATTRIBUTE.DATA), getValue(event.target));
    convertObjectsToArrays(root);
    searchAttribute(ATTRIBUTE.DATA, event.target.getAttribute(ATTRIBUTE.DATA)).forEach(el => {
        setValue(el, getValue(event.target));
    });
    scanSelectFrom();
    vffData.updateController(root);
    broadcast(VFF_EVENT, { dataChanged: true, root});

}

function attachListeners(element){
    element.removeEventListener('input', updateListener);
    element.addEventListener('input', updateListener);
}

let mutationObserver = new MutationObserver(function(mutations) {
    let change = false;
    mutations.forEach(function(mutation) {
        if(mutation.type === 'attributes' && mutation.target.hasAttribute(ATTRIBUTE.DATA)){
            change = true;
            attachListeners(mutation.target);
        }
        if(mutation.type === 'childList' && mutation.removedNodes.length){
            mutation.removedNodes.forEach(node => {
                if(searchAttribute(ATTRIBUTE.DATA, undefined, node).length){
                    change = true;
                }
            });
        }
    });
    if(change){
        setTimeout(gatherData, 100);
    }
});

function startDomObeserver(){
    mutationObserver.observe(document.documentElement, {
        attributeFilter: [ATTRIBUTE.DATA],
        // attributes: false,
        attributeOldValue: false,
        characterData: false,
        characterDataOldValue: false,
        childList: true,
        subtree: true
    });
}
// function stopDomObeserver(){
//     mutationObserver.disconnect();
// }

function observe(){
    startDomObeserver();
    searchAttribute(ATTRIBUTE.DATA).forEach(element => attachListeners(element));
    setTimeout(gatherData, 100);

}


async function controllerExists(url){
    return new Promise((resolve, reject) => {
        url = url ||  new URL("/controller.html", document.baseURI).href;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(url);
                } else {
                    reject();

                }
            }
        };
        xhr.onerror = function () {
            reject();
        };
        xhr.send(null);
    });
}

//
// function setValues(){
//     searchAttribute(ATTRIBUTE.DATA).forEach(el => {
//        let path = el.getAttribute(ATTRIBUTE.DATA);
//        setValue(el, getByPath(root ,path));
//     });
// }
//
// function repeat(){
//     searchAttribute(ATTRIBUTE.REPEAT).forEach(el => {
//         let repeatPath = el.getAttribute(ATTRIBUTE.REPEAT);
//         el.removeAttribute(ATTRIBUTE.REPEAT);
//         let content = el.outerHTML;
//         let repeatFrom = getByPath(vffData.getControllerData(), repeatPath) || [];
//
//
//         repeatFrom.forEach((repeatFromItem, index) => {
//             let c = content.replace(/vff-data="(.*)"/ig,  `vff-data="${repeatPath}.${index}.$1"`);
//             el.insertAdjacentHTML("afterend", c);
//         });
//         el.parentNode.removeChild(el);
//
//     });
//     setValues();
// }


module.exports = {
    init : () => {
        window.addEventListener('load', function(){
            if(searchAttribute(ATTRIBUTE.CONTROLLER).length){
                // registerController();
                vffData.registerController().on(e => {
                    setTimeout(()=>{
                        let flat = flatten(e.data);
                        Object.keys(flat).forEach(key => {
                            searchAttribute(ATTRIBUTE.DATA, key).forEach(el => {
                                if(el.hasAttribute(ATTRIBUTE.SELECTION)){
                                    handleSelect(el, e.data);
                                }
                                setValue(el, flat[key]);
                            });
                        });
                    });

                }, {changeOnly : false});
                observe();
            } else {
                controllerExists().then(url => {
                    vffData.registerController(url);
                    // registerController(url);
                }, () => {
                    // console.log('No custom controller');
                });
            }
        });
    },
    update : () => {setTimeout(gatherData, 100);}
};
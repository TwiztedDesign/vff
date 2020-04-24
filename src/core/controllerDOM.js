import {broadcast, searchAttribute, trim} from "../utils/helpers";
import {vffData} from "./vffData";
import {ATTRIBUTE} from './consts';
import {VFF_EVENT} from "../utils/events";
import {uploadFile} from "../utils/uploader";
let root = {};
let style = {};

const gatherDataTimeout = 300;
const initialDataTimeout = 150;

function debounce(func, wait, immediate) {
    let timeout;

    return function executedFunction() {
        let context = this;
        let args = arguments;

        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        let callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}
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
            if(obj[property]) delete obj[property].__isArray;
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


function getSelectedIndices(options, selected){
    return selected.map(selection => options.findIndex(options => options.key === selection.key)).filter(i => i >= 0);
}
function pickIndices(arr, indices){
    return arr.reduce((res, val, index) => {
        if(indices.includes(index)){
            res.push(val);
        }
        return res;
    }, []);
}
function pickByKeys(arr, keys) {
    keys = keys.map(o => o['key']);
    return arr.filter(item => keys.includes(item.key));
}

function handleSelect(el, data){
    let selectionPath = el.getAttribute(ATTRIBUTE.SELECTION);

    let val = getValue(el);
    if(el.tagName === 'VFF-SELECT'){
        let split = selectionPath.split(',');
        let keyPath = split[0];
        let valuePath = split[1] || split[0];
        let selectionKeys = getByPath(data, keyPath) || [];
        let selectionValues = getByPath(data, valuePath) || [];
        let options = selectionKeys.map((key, i) => {
            return {
                key, value: selectionValues[i]
            };
        });
        let previousOptions = el.options;
        let length = previousOptions? previousOptions.length : 0;
        let selectedIndices = getSelectedIndices(previousOptions, el.value);
        el.options = options;
        //if length didnt change, set same options by index
        if(length === options.length){
            // if(pickIndices(options, selectedIndices).length === 0 ) debugger;
            el.value = pickIndices(options, selectedIndices);
        }
        // else set same options by key
        else {
            el.value = pickByKeys(options, previousOptions);
        }

        setByPath(data, el.getAttribute(ATTRIBUTE.DATA), getValue(el));

        // else set same options by key
        // debugger;

    } else {
        let selection = getByPath(data, selectionPath) || [];
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

}
function getValue(el){
    let suffix = el.getAttribute(ATTRIBUTE.SUFFIX);
    let value;
    switch (el.constructor.name){
        case 'HTMLSelectElement':
        case 'HTMLInputElement':
            value = el.value;
            break;
        default:
            value = el.value;
            break;
    }
    switch (el.tagName){
        case 'VFF-RADIO-BUTTON':
            value = el.checked;
            break;
    }
    return suffix? (value + suffix) : value;
}
function setValue(el, value){
    let suffix = el.getAttribute(ATTRIBUTE.SUFFIX) || '';
    value = suffix? value.slice(0, -suffix.length) : value;
    switch (el.tagName){
        case 'VFF-RADIO-BUTTON':
            el.checked = value;
            return;
    }
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
            result[prop] = cur;
            for (let i = 0 ; i < l; i++)
                recurse(cur[i], prop + "." + i);
            if (l === 0) result[prop] = [];
        } else {
            let isEmpty = true;
            for (let p in cur) {
                isEmpty = false;
                result[prop ? prop + "." + p : p] = cur[p];
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
    style = {};
    let elements = searchAttribute([ATTRIBUTE.DATA, ATTRIBUTE.STYLE]);
    elements.forEach(element => {
        if(element.hasAttribute(ATTRIBUTE.DATA)){
            let path = element.getAttribute(ATTRIBUTE.DATA);
            element.setAttribute(ATTRIBUTE.DATA, path.replace(/\[/g,".").replace(/\]/g,".").replace(/\.\./g, ".").replace(/\.$/, ""));
            let value = getValue(element);
            setByPath(root, path, value);
        }
        if(element.hasAttribute(ATTRIBUTE.STYLE)){
            let path = element.getAttribute(ATTRIBUTE.STYLE);
            let value = getValue(element);
            setByPath(style, path, value);
        }
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
    root.__style = style;
    vffData.updateController(root);
    broadcast(VFF_EVENT, { dataChanged: true, root});
}

function updateListener(event){
    setTimeout(() => {
        if(event.target.hasAttribute(ATTRIBUTE.DATA)){
            setByPath(root, event.target.getAttribute(ATTRIBUTE.DATA), getValue(event.target));
        }
        if(event.target.hasAttribute(ATTRIBUTE.STYLE)){
            setByPath(style, event.target.getAttribute(ATTRIBUTE.STYLE), getValue(event.target));
        }

        convertObjectsToArrays(root);
        searchAttribute(ATTRIBUTE.DATA, event.target.getAttribute(ATTRIBUTE.DATA)).forEach(el => {
            setValue(el, getValue(event.target));
        });
        searchAttribute(ATTRIBUTE.STYLE, event.target.getAttribute(ATTRIBUTE.STYLE)).forEach(el => {
            setValue(el, getValue(event.target));
        });
        scanSelectFrom();
        root.__style = style;
        vffData.updateController(root);
        broadcast(VFF_EVENT, { dataChanged: true, root});
    });
}
const debouncedUpdateListener = debounce(updateListener, 200);

function imageBrowserListener(event){
    if(event.target.selectedFiles.length){
        window.vff.controller.upload(event.target.selectedFiles[0], (e)=>{
            // eslint-disable-next-line
            console.log("upload file");
            uploadFile(event.target.selectedFiles[0],e.urls.uploadUrl, {
                onSuccess : ()=> {
                    event.target.value = e.urls.cdnUrl;
                    updateListener(event);
                }
            });

        });
    } else {
        event.target.value = '';
        updateListener(event);
    }
}

function attachListeners(element){
    if(element.tagName === 'VFF-RADIO-BUTTON'){
        element.removeEventListener('click', updateListener, false);
        element.addEventListener('click', updateListener, false);

    }
    else if(element.tagName === 'VFF-IMAGE-BROWSER'){
        element.removeEventListener('vff:change', imageBrowserListener, false);
        element.addEventListener('vff:change', imageBrowserListener, false);
    }
    else if(element.tagName === 'VFF-COLOR-PICKER'){
        element.removeEventListener('vff:change', debouncedUpdateListener);
        element.addEventListener('vff:change', debouncedUpdateListener);
    }
    else {
        element.removeEventListener('input', updateListener);
        element.addEventListener('input', updateListener);
        element.removeEventListener('vff:change', updateListener);
        element.addEventListener('vff:change', updateListener);
    }
}

let mutationObserver = new MutationObserver(function(mutations) {
    let change = false;
    mutations.forEach(function(mutation) {
        if(mutation.type === 'attributes' && (mutation.target.hasAttribute(ATTRIBUTE.DATA) || mutation.target.hasAttribute(ATTRIBUTE.STYLE)) &&
                mutation.target.getAttribute(mutation.attributeName) !== mutation.oldValue){
            change = true;
            attachListeners(mutation.target);
        }
        if(mutation.type === 'childList' && mutation.removedNodes.length){
            mutation.removedNodes.forEach(node => {
                if(searchAttribute([ATTRIBUTE.DATA, ATTRIBUTE.STYLE], undefined, node).length){
                    change = true;
                }
            });
        }
    });
    if(change){
        setTimeout(gatherData, gatherDataTimeout);
    }
});

function startDomObeserver(){
    mutationObserver.observe(document.documentElement, {
        attributeFilter: [ATTRIBUTE.DATA, ATTRIBUTE.STYLE],
        // attributes: false,
        attributeOldValue: true,
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
    searchAttribute([ATTRIBUTE.DATA, ATTRIBUTE.STYLE]).forEach(element => attachListeners(element));
    setTimeout(gatherData, gatherDataTimeout);

}


async function controllerExists(url){
    return new Promise((resolve, reject) => {
        url = url ||  new URL("./controller.html", document.baseURI).href;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 && xhr.response && new DOMParser().parseFromString(xhr.response, 'text/html').querySelector('[vff-controller]')) {
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


// function registerControls(){
//     let elements = searchAttribute([ATTRIBUTE.DATA, ATTRIBUTE.STYLE]);
//     elements.forEach(element => {
//         if(element.hasAttribute(ATTRIBUTE.DATA)){
//             let path = element.getAttribute(ATTRIBUTE.DATA);
//             let value = getValue(element);
//             vffData.registerControl(path.replace(/\./g,'-'), value, {group : 'controller'}).on(e => {
//                 // console.log(e);
//             });
//         }
//         if(element.hasAttribute(ATTRIBUTE.STYLE)){
//             let path = element.getAttribute(ATTRIBUTE.STYLE);
//             let value = getValue(element);
//             vffData.registerControl(path.replace(/\./g,'-'), value, {group : 'style'}).on(e => {
//                 // console.log(e);
//             });
//         }
//     });
// }


module.exports = {
    init : () => {
        window.addEventListener('load', function(){
            if(searchAttribute(ATTRIBUTE.CONTROLLER).length){
                // registerControls();
                vffData.registerController().on(e => {
                    setTimeout(()=>{
                        let flat = flatten(e.data);
                        Object.keys(flat).forEach(key => {
                            searchAttribute([ATTRIBUTE.DATA, ATTRIBUTE.STYLE], key.replace('__style.', '')).forEach(el => {
                                if(el.hasAttribute(ATTRIBUTE.SELECTION)){
                                    handleSelect(el, e.data);
                                }
                                setValue(el, flat[key]);
                            });
                        });
                    }, initialDataTimeout);

                }, {changeOnly : false, throttle : 0});
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
    update : () => {setTimeout(gatherData, gatherDataTimeout);}
};

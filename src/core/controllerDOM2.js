import {broadcast, searchAttribute, trim, debounce, flatten, unflatten} from "../utils/helpers";
import {vffData} from "./vffData";
import {ATTRIBUTE} from './consts';
import {VFF_EVENT} from "../utils/events";
import {uploadFile} from "../utils/uploader";
let root = {};
let style = {};
let _data = {};
let _style = {};
let _initial = {};


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

function getArray(object, path){
	let arrPath = path.substr(0, path.lastIndexOf('.'))
	let keyPath = path.substr(path.lastIndexOf('.')+1, path.length)
	let arr = [];
	for(let key in object){
		let regex = new RegExp(`${arrPath}\\.\\d+\\.${keyPath}`)
		if(key.match(regex)){
			arr.push(object[key]);
		}
	}
	return arr;
}

function handleSelect(el, data){
	let selectionPath = el.getAttribute(ATTRIBUTE.SELECTION);

	let val = getValue(el) || [];
	if(el.tagName === 'VFF-SELECT'){
		let split = selectionPath.split(',');
		let keyPath = split[0];
		let valuePath = split[1] || split[0];
		let selectionKeys = getArray(data, keyPath);
		let selectionValues = getArray(data, valuePath);
		let options = selectionKeys.map((key, i) => {
			return {
				key, value: selectionValues[i]
			};
		});
		// let previousOptions = el.options || [];
		// let length = previousOptions? previousOptions.length : 0;
		// let selectedIndices = getSelectedIndices(previousOptions, val);
		// console.log('Set Options', options );
		el.options = options;
		//if length didnt change, set same options by index
		// if(length === options.length){
		// 	// if(pickIndices(options, selectedIndices).length === 0 ) debugger;
		// 	el.value = pickIndices(options, selectedIndices);
		// }
		// // else set same options by key
		// else {
		// 	el.value = pickByKeys(options, previousOptions);
		// }
		data[el.getAttribute(ATTRIBUTE.DATA)] = getValue(el);
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
function scanSelectFrom(){
	let selectElements = searchAttribute(ATTRIBUTE.SELECTION);
	selectElements.forEach(element => {
		handleSelect(element, _data);
	});
}

function imageBrowserListener(event){
	if(event.target.selectedFiles.length){
		window.vff.controller.upload(event.target.selectedFiles[0], (e)=>{
			// eslint-disable-next-line
			console.log("upload file");
			uploadFile(event.target.selectedFiles[0],e.urls.uploadUrl, {
				onSuccess : ()=> {
					event.target.value = e.urls.cdnUrl;
					_update(event);
				}
			});

		});
	} else {
		event.target.value = '';
		// updateListener(event);
	}
}

function getVFFAttributes(el){
	return [ATTRIBUTE.DATA, ATTRIBUTE.STYLE].reduce((res, attr) => {
		if(el.hasAttribute(attr)){
			res[attr] = el.getAttribute(attr);
		}
		return res;
	}, {});
}

function onVFFInit(event){
	let attrs = getVFFAttributes(event.target);
	for(let key in attrs){
		if(_initial[attrs[key]] !== undefined){
			setValue(event.target, _initial[attrs[key]]);
		}
		let value = getValue(event.target);
		_data[(key === 'vff-style'? '__style.' : '') + attrs[key]] = value;

	}
	// console.log("vff:init", getVFFAttributes(event.target));
	switch (event.target.tagName) {
		case 'VFF-IMAGE-BROWSER':
			// imageBrowserListener(event)
			break;
		default:
			let val = _data[event.target.getAttribute(ATTRIBUTE.DATA)];
			if(val !== undefined){
				event.target.value = val;
			}
			break;
	}
	let d = unflatten(_data);
	scanSelectFrom();
	vffData.updateController(d);
}

function onVFFRemove(event){
	// console.log('vff:remove');
	let attrs = getVFFAttributes(event.detail.el);
	for(let attr in attrs){
		delete _data[attrs[attr]];
		delete _data['__style.' + attrs[attr]];

	}
}

function _update(event){
	if(event.target.hasAttribute(ATTRIBUTE.DATA)){
		_data[event.target.getAttribute(ATTRIBUTE.DATA)] = getValue(event.target);
	}

	if(event.target.hasAttribute(ATTRIBUTE.STYLE)){
		_data['__style.' + event.target.getAttribute(ATTRIBUTE.STYLE)] = getValue(event.target);
	}
	//todo handle elements with same vff-data ot vff-style
	// scanSelectFrom(); //todo handle select-from
	//todo handle style

	let d = unflatten(_data);
	vffData.updateController(d);
	broadcast(VFF_EVENT, { dataChanged: true, d});
	// broadcast("vff:update", { vffData: event.target.getAttribute(ATTRIBUTE.DATA), data: d});
}


function onVFFChange(event){
	// console.log("vff:change", event);
	switch (event.target.tagName) {
		case 'VFF-IMAGE-BROWSER':
			imageBrowserListener(event)
			if(event.target.selectedFiles.length) break;
		case 'VFF-RADIO-BUTTON':

		default:
			_update(event);

			break;
	}

}

window.addEventListener('vff:init', onVFFInit);
window.addEventListener('vff:remove', onVFFRemove);
window.addEventListener('vff:change', onVFFChange);

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


module.exports = {
	init : () => {
		window.addEventListener('load', function(){
			if(searchAttribute(ATTRIBUTE.CONTROLLER).length){
				// registerControls();
				vffData.registerController().on(e => {

					let flat = flatten(e.data);
					Object.assign(_data, flat);
					Object.assign(_initial, flat);
					// console.log("Controller:", flat);
					Object.keys(flat).forEach(key => {
						if(key.startsWith('__style.')){
							broadcast("vff:update", {dataAttrName : 'vff-style', dataAttrValue: key.substr(8), value: flat[key]});
						} else {
							broadcast("vff:update", {dataAttrName : 'vff-data', dataAttrValue: key, value: flat[key]});
						}

					});
				}, {changeOnly : false, throttle : 0});

			} else {
				controllerExists().then(url => {
					vffData.registerController(url);

				}, () => {
					// console.log('No custom controller');
				});
			}
		});
	}
};

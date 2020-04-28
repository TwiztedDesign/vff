import {broadcast, searchAttribute, flatten, unflatten, debounce} from "../utils/helpers";
import {vffData} from "./vffData";
import {ATTRIBUTE} from './consts';
import {VFF_EVENT} from "../utils/events";
import {uploadFile} from "../utils/uploader";

let _data = {};
let __initial = {
	data : {},
	keys : new Set(),
	add  : function(key, value){
		if(!this.keys.has(key)){
			this.data[key] = value;
			this.keys.add(key);
		}
	},
	remove : function(key){
		delete this.data[key];
	},
	get : function(key, remove){
		let value = this.data[key];
		if(remove) this.remove(key);
		return value;
	},
	extend : function(obj){
		for(let key in obj){
			this.add(key, obj[key]);
		}
	},
	has : function (key){
		return this.data.hasOwnProperty(key);
	},
	reset : function(){
		this.data = {};
		this.keys = new Set();
	}
};


function getArray(object, path){
	let arrPath = path.substr(0, path.lastIndexOf('.'));
	let keyPath = path.substr(path.lastIndexOf('.')+1, path.length);
	let arr = [];
	for(let key in object){
		let regex = new RegExp(`${arrPath}\\.\\d+\\.${keyPath}`);
		if(key.match(regex)){
			arr.push(object[key]);
		}
	}
	return arr;
}

function handleSelect(el, data){
	let selectionPath = el.getAttribute(ATTRIBUTE.SELECTION);

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

		el.options = options;

		data[el.getAttribute(ATTRIBUTE.DATA)] = getValue(el);
	}
}
function getValue(el){
	let event;
	if(!(el instanceof HTMLElement) && el.target){
		event = el;
		el = el.target;
	}
	let suffix = el.getAttribute(ATTRIBUTE.SUFFIX);
	let value;
	switch (el.constructor.name){
		case 'HTMLSelectElement':
		case 'HTMLInputElement':
			value = el.value;
			break;
		default:
			value = (event && event.detail && event.detail.data !== undefined)? event.detail.data : el.value;
			break;
	}
	switch (el.tagName){
		case 'VFF-RADIO-BUTTON':
			value = el.checked;
			break;
		case 'VFF-SELECT':
			value = JSON.stringify(el.value);
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
		case 'VFF-SELECT':
			el.value = JSON.parse(value);
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

function updateController(){
	let d = unflatten(_data);
	scanSelectFrom();
	vffData.updateController(d);
	broadcast(VFF_EVENT, { dataChanged: true, d});
}

let updateControllerLongDebounce = debounce(updateController,500);
let updateControllerLShortDebounce = debounce(updateController,50);

function onVFFInit(event){
	let attrs = getVFFAttributes(event.target);
	for(let key in attrs){

		if(__initial.has(attrs[key])){
			setValue(event.target, __initial.get(attrs[key], true));
		}

		let value = getValue(event.target);
		_data[(key === 'vff-style'? '__style.' : '') + attrs[key]] = value;

	}
	// console.log("vff:init", getVFFAttributes(event.target));
	let val;
	switch (event.target.tagName) {
		case 'VFF-IMAGE-BROWSER':
			// imageBrowserListener(event)
			break;
		default:
			val = _data[event.target.getAttribute(ATTRIBUTE.DATA)];
			if(val !== undefined){
				setValue(event.target, val);
			}
			break;
	}

	updateControllerLongDebounce();
	// let d = unflatten(_data);
	// scanSelectFrom();
	// vffData.updateController(d);
}

function onVFFRemove(event){
	// console.log('vff:remove');
	let attrs = getVFFAttributes(event.detail.el);
	for(let attr in attrs){
		delete _data[attrs[attr]];
		delete _data['__style.' + attrs[attr]];

	}
	scanSelectFrom();
}

function _update(event){
	let value = getValue(event);
	if(event.target.hasAttribute(ATTRIBUTE.DATA)){
		_data[event.target.getAttribute(ATTRIBUTE.DATA)] = value;
	}

	if(event.target.hasAttribute(ATTRIBUTE.STYLE)){
		_data['__style.' + event.target.getAttribute(ATTRIBUTE.STYLE)] = value;
	}
	//todo handle elements with same vff-data ot vff-style
	updateControllerLShortDebounce();
	// scanSelectFrom(); //todo handle select-from
	// let d = unflatten(_data);
	// vffData.updateController(d);
	// broadcast(VFF_EVENT, { dataChanged: true, d});


	// broadcast("vff:update", { vffData: event.target.getAttribute(ATTRIBUTE.DATA), data: d});
}


function onVFFChange(event){
	// console.log("vff:change", event);
	switch (event.target.tagName) {
		case 'VFF-IMAGE-BROWSER':
			imageBrowserListener(event);
			if(!event.target.selectedFiles.length){
				_update(event);
			}
			break;
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
					if(e.data.__initial){
						delete e.data.__initial;
						__initial.reset();
					}
					let flat = flatten(e.data);
					console.log("Controller update");
					Object.assign(_data, flat);
					__initial.extend(flat);
					// Object.assign(_initial, flat);
					// console.log("Controller:", flat);
					Object.keys(flat).forEach(key => {
						let val = flat[key];
						try {val = JSON.parse(val);} catch (e) {  /*do nothing*/ }
						if(key.startsWith('__style.')){
							broadcast("vff:update", {dataAttrName : 'vff-style', dataAttrValue: key.substr(8), value: val});
						} else {
							broadcast("vff:update", {dataAttrName : 'vff-data', dataAttrValue: key, value: val});
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

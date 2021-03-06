(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vff"] = factory();
	else
		root["vff"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(71);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(22);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findKey(data, keyToFind) {
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
        if (keys[i].toLowerCase() === keyToFind.toLowerCase()) {
            return keys[i];
        }
    }
}
function trim(str, charList) {
    if (charList === undefined) {
        charList = "\\s";
    }
    return str.replace(new RegExp("^[" + charList + "]+"), "").replace(new RegExp("[" + charList + "]+$"), "");
}

function isObject(obj) {
    return obj === Object(obj) && !Array.isArray(obj) && !(obj instanceof HTMLElement);
}

function getByPath(obj, path) {
    path = path ? trim(path, '.').split('.') : [""];

    var result = obj;
    for (var i = 0; i < path.length; i++) {
        result = result[path[i]];
        if (result === undefined) {
            return result;
        }
    }

    return result;
}
function setByPath(obj, path, value) {
    if (arguments.length !== 3) {
        throw new Error('Missing Arguments!');
    }
    path = path ? trim(path, '.').split('.') : [""];
    var result = obj;
    for (var i = 0; i < path.length; i++) {
        if (i === path.length - 1) {
            result[path[i]] = value;
        } else {
            if (result[path[i]] !== undefined) {
                result = result[path[i]];
            } else {
                return;
            }
        }
    }
}

function isFunction(functionToCheck) {
    return !!functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function camelize(str) {
    return str.replace(/\s(.)/g, function ($1) {
        return $1.toUpperCase();
    }).replace(/\s/g, '').replace(/^(.)/, function ($1) {
        return $1.toLowerCase();
    });
    // return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    //     return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    // }).replace(/\s+/g, '');
}
function decamelize(str) {
    return str.replace(/([A-Z])/g, ' $1').trim();
}

function uuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

function mobilecheck() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|Tablet|iPad|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; // eslint-disable-line no-useless-escape
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
function controllerCheck() {
    try {
        return window.frameElement.ownerDocument.defaultView.frameElement.hasAttribute('controller');
    } catch (err) {
        return false;
    }
}

function extend(a, b) {
    for (var key in b) {
        if (b.hasOwnProperty(key)) a[key] = b[key];
    }return a;
}

function deepExtend(destination, source) {
    for (var property in source) {
        // if (source[property] && source[property].constructor && source[property].constructor === Object) {
        if (source[property] && isObject(source[property])) {
            destination[property] = destination[property] && isObject(destination[property]) ? destination[property] : {};
            deepExtend(destination[property], source[property]);
        } else {
            destination[property] = source[property];
        }
    }
    return destination;
}

// function modeCheck(){
//     //"controller_preview" "controller_program" "editor" "player_external" "player_internal"
//     let mode = 'normal';
//
//     try{
//         let frame = window.frameElement.ownerDocument.defaultView.frameElement;
//         mode = frame.getAttribute('vff-mode') || mode;
//     } catch (err){
//         // not in iframe
//     }
//     return mode;
// }
function docRef(anchor) {
    return 'https://www.videoflow.io/documentation/api/vff?id=' + anchor;
}

//compares only properties from lhs and ignores properties that start with _
function deepCompare() {
    var i, l, leftChain, rightChain;

    function compare2Objects(x, y) {
        var p;

        // remember that NaN === NaN returns false
        // and isNaN(undefined) returns true
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
            return true;
        }

        // Compare primitives and functions.
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        if (x === y) {
            return true;
        }

        // Works in case when functions are created in constructor.
        // Comparing dates is a common scenario. Another built-ins?
        // We can even handle functions passed across iframes
        if (typeof x === 'function' && typeof y === 'function' || x instanceof Date && y instanceof Date || x instanceof RegExp && y instanceof RegExp || x instanceof String && y instanceof String || x instanceof Number && y instanceof Number) {
            return x.toString() === y.toString();
        }

        // At last checking prototypes as good as we can
        if (!(x instanceof Object && y instanceof Object)) {
            return false;
        }

        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
            return false;
        }

        if (x.constructor !== y.constructor) {
            return false;
        }

        if (x.prototype !== y.prototype) {
            return false;
        }

        if (x instanceof Array && y instanceof Array && x.length !== y.length) {
            return false;
        }

        // Check for infinitive linking loops
        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
            return false;
        }

        // Quick checking of one object being a subset of another.
        // todo: cache the structure of arguments[0] for performance
        // for (p in y) {
        //     if(!p.startsWith('_')){
        //         if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        //             return false;
        //         }
        //         else if (typeof y[p] !== typeof x[p]) {
        //             return false;
        //         }
        //     }
        //
        // }

        for (p in x) {
            if (!p.startsWith('_')) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                } else if ((0, _typeof3.default)(y[p]) !== (0, _typeof3.default)(x[p])) {
                    return false;
                }

                switch ((0, _typeof3.default)(x[p])) {
                    case 'object':
                    case 'function':

                        leftChain.push(x);
                        rightChain.push(y);

                        if (!compare2Objects(x[p], y[p])) {
                            return false;
                        }

                        leftChain.pop();
                        rightChain.pop();
                        break;

                    default:
                        if (x[p] !== y[p]) {
                            return false;
                        }
                        break;
                }
            }
        }

        return true;
    }

    if (arguments.length < 1) {
        return true;
    }

    for (i = 1, l = arguments.length; i < l; i++) {

        leftChain = []; //Todo: this can be cached
        rightChain = [];

        if (!compare2Objects(arguments[0], arguments[i])) {
            return false;
        }
    }

    return true;
}
function broadcast(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
}
function on(event, listener) {

    document.addEventListener(event, function (e) {
        listener(e.detail);
    });
}
function off(event, listener) {
    document.removeEventListener(event, listener);
}
function defer() {
    var resolve = noop,
        reject = noop;
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    return {
        promise: promise,
        resolve: resolve,
        reject: reject
    };
}
function getQueryParams(queryString) {

    var search = queryString || location.href.split("?")[1] || location.search.substring(1);
    try {
        return JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
            return key === "" ? value : decodeURIComponent(value);
        });
    } catch (err) {
        return {};
    }
}

var queryDefaultOptions = {
    insensitive: false
};
function lower(str) {
    if (str && str.toLowerCase) {
        return str.toLowerCase();
    }
    return str;
}

function query(collection, query, options) {
    options = Object.assign({}, queryDefaultOptions, options || {});
    var found = [];
    collection.forEach(function (item) {
        var match = true;
        for (var key in query) {
            if (options.insensitive && lower(query[key]) !== lower(item[findKey(item, key)])) {
                match = false;
            } else if (!options.insensitive && query[key] !== item[key]) {
                match = false;
            }
        }
        if (match) {
            found.push(item);
        }
    });
    return found;
}
function queryOne(collection, q, options) {
    var found = query(collection, q, options);
    return found.length ? found[0] : undefined;
}
function filter(collection, fn) {
    var filtered = [];
    collection.forEach(function (item) {
        if (fn(item)) {
            filtered.push(item);
        }
    });
    return filtered;
}
function parseRJSON(json) {
    return JSON.parse(json.replace(/:\s*"([^"]*)"/g, function (match, p1) {
        return ': "' + p1.replace(/:/g, '@colon@') + '"';
    })

    // Replace all single quotes with double quotes - this is correct only because this function is used only to parse html attributes
    .replace(/'/g, '"')

    // Replace ":" with "@colon@" if it's between single-quotes
    .replace(/:\s*'([^']*)'/g, function (match, p1) {
        return ': "' + p1.replace(/:/g, '@colon@') + '"';
    })

    // Add double-quotes around any tokens before the remaining ":"
    .replace(/(['"])?([a-z0-9A-Z_]+)(['"])?\s*:/g, '"$2": ')

    // Turn "@colon@" back into ":"
    .replace(/@colon@/g, ':'));
}

function overlaod(object, name, fn) {
    var old = object[name];
    if (old) {
        object[name] = function () {
            if (fn.length == arguments.length) return fn.apply(this, arguments);else if (typeof old == 'function') return old.apply(this, arguments);
        };
    } else {
        object[name] = fn;
    }
}

function getAllChildrenIncludinShadowDOM(el) {
    var shadow = el.shadowRoot;
    var children = Array.from(el.children || []);
    if (shadow) {
        children = children.concat(Array.from(shadow.children || []));
    }
    return children;
}

function searchAttributeHelper(acc, element, attr, value) {
    if (element.hasAttribute && element.hasAttribute(attr) && (value === undefined || element.getAttribute(attr).replace(/\[/g, ".").replace(/\]/g, ".").replace(/\.\./g, ".").replace(/\.$/, "") === value)) {
        acc.push(element);
    }
    if (!element.shadowRoot && (!element.children || !element.children.length)) {
        return acc;
    } else {
        var children = getAllChildrenIncludinShadowDOM(element);

        for (var i = 0; i < children.length; i++) {
            searchAttributeHelper(acc, children[i], attr, value);
        }
    }
    return acc;
}

function searchAttribute(attr, value, element) {
    if (Array.isArray(attr)) {
        return [].concat((0, _toConsumableArray3.default)(new Set(attr.map(function (att) {
            return searchAttributeHelper([], element || document, att, value);
        }).flat())));
    } else {
        return searchAttributeHelper([], element || document, attr, value);
    }
}

function debounce(func, wait, immediate) {
    var timeout = void 0;

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function later() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

function flatten(data, keepObjects) {
    var result = {};

    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            var l = cur.length;
            if (keepObjects) result[prop] = cur; //add for full array reference
            for (var i = 0; i < l; i++) {
                recurse(cur[i], prop + "." + i);
            }if (l === 0) result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                if (keepObjects) result[prop ? prop + "." + p : p] = cur[p]; //add for full object reference
                recurse(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty && prop) result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}
function unflatten(data) {
    if (Object(data) !== data || Array.isArray(data)) return data;
    var result = {},
        cur,
        prop,
        idx,
        last,
        temp;
    for (var p in data) {
        cur = result, prop = "", last = 0;
        do {
            idx = p.indexOf(".", last);
            temp = p.substring(last, idx !== -1 ? idx : undefined);
            cur = cur[prop] || (cur[prop] = !isNaN(parseInt(temp)) ? [] : {});
            prop = temp;
            last = idx + 1;
        } while (idx >= 0);
        cur[prop] = data[p];
    }
    return result[""];
}

function format(string) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return string.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^$(){}|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
function unformat(string, pattern) {
    var r = new RegExp(escapeRegExp(pattern).replace(/\\{(\d+)\\}/g, "(.*)"));
    var match = string.match(r);
    if (match && match.length > 1) {
        return match[1];
    }
}

function noop() {}

module.exports = {
    findKey: findKey,
    trim: trim,
    getByPath: getByPath,
    setByPath: setByPath,
    camelize: camelize,
    decamelize: decamelize,
    uuid: uuid,
    extend: extend,
    deepExtend: deepExtend,
    deepCompare: deepCompare,
    isMobile: mobilecheck(),
    isController: controllerCheck(),
    // mode            : modeCheck(),
    docRef: docRef,
    broadcast: broadcast,
    on: on,
    off: off,
    defer: defer,
    noop: noop,
    query: query,
    queryOne: queryOne,
    filter: filter,
    getQueryParams: getQueryParams,
    parseRJSON: parseRJSON,
    isFunction: isFunction,
    isObject: isObject,
    overlaod: overlaod,
    searchAttribute: searchAttribute,
    debounce: debounce,
    flatten: flatten,
    unflatten: unflatten,
    format: format,
    unformat: unformat
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "READY": "taco-ready",
    "GO": "taco-go",
    "CROP": "vff-crop",
    "TRANSFORM": "vff-transform",
    "UPLOAD": "vff-upload-asset",
    "UPLOAD_ASSET": "vff-upload",
    "AUDIO_TRACK": "vff-audio-track",
    "NEXT": "taco-next",
    "PREV": "taco-previous",
    "ADD": "taco-addtemplate",
    "UPDATE": "taco-update",
    "PAGES": "taco-pages",
    "USER_UPDATE": "taco-user-update",
    "QUERY_PARAMS": "taco-query-params",
    "OUTGOING_EVENT": "taco-event-sent",
    "VFF_EVENT": "taco-event-received",
    "ACK": "taco-ack",
    "TRACK_EVENT": "vff-track-event",
    "RELOAD": "vff-reload",
    "VF_DATA": "vff-vf-data",
    "VF_SETUP": "vff-vf-setup",

    "DATA_READY": "vff-data-ready",
    "CUSTOM_READY": "vff-custom-ready",

    "PLAYER_STATUS": "vff-player-status",
    "VIDEO_PLAYING": "vff-video-playing",
    "VIDEO_STARTED": "vff-video-started",
    "VIDEO_PAUSED": "vff-video-paused",
    "VIDEO_TIME_UPDATE": "vff-time-update",

    "DEVICE_CHANGE": "vff-device-change",

    "INTERACTION": "vff-interaction",
    "TOUCH": "taco-touch-element",
    "MOUSE_MOVE": "taco-mouse-move",
    "BUBBLE_UP": "taco-bubble-up",

    "PAGES_UPDATE": "vff-pages-update"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(37)('wks');
var uid = __webpack_require__(26);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _helpers = __webpack_require__(0);

var window = window || global.window;
var REQUEST_TIMEOUT = 20000;

function sendMessage(type, payload) {
    var message = {
        type: type,
        payload: payload
    };
    postMessage(message);
}

function request(type, payload, cb) {
    var rid = (0, _helpers.uuid)();
    payload._rid = rid;
    var message = {
        type: type,
        payload: payload
    };
    var timeout;
    var handler = function handler(message) {
        message = JSON.parse(message.data);
        if (message.payload && message.payload._rid === rid) {
            removeHandler();
            cb(message);
        }
    };
    var removeHandler = function removeHandler() {
        clearTimeout(timeout);
        window.removeEventListener('message', handler, false);
    };

    window.addEventListener('message', handler, false);
    timeout = setTimeout(function () {
        //Request Timeout
        removeHandler();
    }, REQUEST_TIMEOUT);

    postMessage(message);
}

function postMessage(message) {
    var w = window || global.window;
    if (w && w.parent) {
        w.parent.postMessage(JSON.stringify(message), '*');
    }
}

module.exports = {
    send: sendMessage,
    request: request
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(50);
var toPrimitive = __webpack_require__(33);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vffData = undefined;

var _typeof2 = __webpack_require__(22);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(23);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(29);

var _createClass3 = _interopRequireDefault(_createClass2);

var _events = __webpack_require__(1);

var _helpers = __webpack_require__(0);

var _messenger = __webpack_require__(5);

var _docRefs = __webpack_require__(101);

var _consts = __webpack_require__(14);

var _consts2 = __webpack_require__(14);

var _vffControl = __webpack_require__(102);

var _vffControl2 = _interopRequireDefault(_vffControl);

var _vffEvent = __webpack_require__(45);

var _vffEvent2 = _interopRequireDefault(_vffEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_ON_OPTIONS = {
    throttle: true,
    changeOnly: true
};

var VffData = function () {
    function VffData() {
        (0, _classCallCheck3.default)(this, VffData);

        this._controls = [];
        this._pages = [];
        this._pagesDefer = (0, _helpers.defer)();
        this._listeners = {};
        this._readyCallbacks = [];
        this._timeouts = new WeakMap();
        this._eventQueue = {};
        this._nameMap = {};
    }

    (0, _createClass3.default)(VffData, [{
        key: '_addToNameMap',
        value: function _addToNameMap(name) {
            this._nameMap[name] = name;
            this._nameMap[name.toLowerCase()] = name;
        }
    }, {
        key: '_getFromNameMap',
        value: function _getFromNameMap(name) {
            return this._nameMap[name] || name;
        }
    }, {
        key: 'registerControl',
        value: function registerControl(name, value, options) {

            if (arguments.length < 2) {
                //TODO change ref
                throw new Error('Missing Arguments, please refer to: ' + (0, _helpers.docRef)(_docRefs.REGISTER_TEMPLATE));
            }

            var control = new _vffControl2.default(name, value, options);
            var existingControl = (0, _helpers.queryOne)(this._controls, { _group: control.getGroup(), _name: control.getName() }, { insensitive: true });
            if (existingControl) {
                existingControl.updateValue(value, options);
            } else {
                this._addToNameMap(control.getGroup());
                this._controls.push(control);
            }

            (0, _messenger.send)(_events.ADD, {
                channel: control.getGroup(),
                options: control.getOptions(),
                data: control.getValueObject()
            });

            return control;
        }
    }, {
        key: 'registerController',
        value: function registerController(url) {
            this._controller = this._controller || new _vffControl2.default('controller.main', {}, { ui: { type: 'custom', url: url } });
            this._controls.push(this._controller);
            (0, _messenger.send)(_events.ADD, {
                channel: this._controller.getGroup(),
                options: this._controller.getOptions(),
                data: this._controller.getValueObject()
            });
            return this._controller;
        }
    }, {
        key: 'updateController',
        value: function updateController(value, options) {
            if (!this._controller) return;
            this._controller.updateValue(value, options);
        }
    }, {
        key: 'getControllerData',
        value: function getControllerData() {
            return this._controller ? this._controller.getValue() : {};
        }
    }, {
        key: 'registerControls',
        value: function registerControls(namespace, object, options) {
            var _this = this;

            if ((0, _helpers.isObject)(namespace)) {
                options = object || {}, object = namespace, namespace = options.group || _consts.DEFAULT_GROUP_NAME;
            }
            for (var name in object) {
                if (object.hasOwnProperty(name)) {
                    var value = object[name];
                    var opts = Object.assign({}, options);
                    opts.group = opts.group || namespace;

                    if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && value.ui) {
                        opts.ui = value.ui;
                        value = value.value !== undefined ? value.value : value.ui.value;
                    }

                    this.registerControl(name, value, opts);
                }
            }
            return {

                on: function () {
                    var group = namespace;
                    return function (namespace, cb, options) {
                        if ((0, _helpers.isFunction)(namespace)) {
                            options = cb;cb = namespace;namespace = '';
                        }
                        var ns = namespace ? group + '.' + namespace : group;
                        _this.on(ns, cb, options);
                    };
                }()
            };
        }
    }, {
        key: '_updateControl',
        value: function _updateControl(name, value, options) {
            var control = this.getControl(name);
            if (control) {
                //TODO make better
                if (options && options.timecode) {
                    control.timecode = options.timecode;
                }
                return control._setValue(value);
            }
            return Promise.resolve({ controlChange: true });
        }
    }, {
        key: 'updateControl',
        value: function updateControl(name, value, options) {
            var control = this.getControl(name);
            if (control) {
                return control.updateValue(value, options);
            }
        }
    }, {
        key: 'getControl',
        value: function getControl(name) {
            if (!name) {
                //TODO correct ref
                throw new Error('Missing Arguments, please refer to: ' + (0, _helpers.docRef)(_docRefs.REGISTER_TEMPLATE));
            }
            var parts = name.split(_consts2.NAMESPACE_DELIMITER);
            if (parts.length > 1) {
                return (0, _helpers.queryOne)(this._controls, { _name: parts[parts.length - 1], _group: parts.slice(0, -1).join(_consts2.NAMESPACE_DELIMITER) }, { insensitive: true });
            } else {
                return (0, _helpers.queryOne)(this._controls, { _name: name }, { insensitive: true });
            }
        }
    }, {
        key: 'getControls',
        value: function getControls(namespace) {
            if (!namespace) {
                return this._controls;
            }
            var parts = namespace.split(_consts2.NAMESPACE_DELIMITER);
            if (parts.length > 1) {
                return (0, _helpers.query)(this._controls, { _name: parts[parts.length - 1], _group: parts.slice(0, -1).join(_consts2.NAMESPACE_DELIMITER) }, { insensitive: true });
            } else {
                var controls = (0, _helpers.query)(this._controls, { _group: parts[0] }, { insensitive: true });
                if (!controls.length) {
                    controls = (0, _helpers.query)(this._controls, { _name: parts[0] }, { insensitive: true });
                }
                return controls;
            }
        }
    }, {
        key: 'getControlsData',
        value: function getControlsData(namespace, fallback) {
            var data = {};
            var controls = this.getControls(namespace);
            controls.forEach(function (control) {
                var name = control.getNamespace().substr(namespace.length);
                if (name.startsWith(_consts2.NAMESPACE_DELIMITER)) name = name.substr(1);
                if (name) {
                    data[name] = control.getValue();
                } else {
                    data = control.getValue();
                }
            });

            if (namespace) {
                if (namespace.indexOf(_consts2.NAMESPACE_DELIMITER) > -1) {
                    return controls.length ? data : fallback;
                } else {
                    return Object.assign({}, fallback, data);
                }
            } else {
                for (var group in fallback) {
                    for (var control in fallback[group]) {
                        var key = (0, _helpers.findKey)(data, group + _consts2.NAMESPACE_DELIMITER + control);
                        if (!key) {
                            data[this._getFromNameMap(group) + _consts2.NAMESPACE_DELIMITER + control] = fallback[group][control];
                        }
                    }
                }
            }
            return data;
        }
    }, {
        key: 'on',
        value: function on(namespace, cb, options) {
            var _this2 = this;

            if ((0, _helpers.isFunction)(namespace)) {
                options = cb;cb = namespace;namespace = '';
            }
            options = Object.assign({}, DEFAULT_ON_OPTIONS, options || {});
            (0, _helpers.on)(_events.VFF_EVENT + namespace.toLowerCase(), function (event) {
                if (!options.changeOnly || event.dataChanged) {
                    _this2._runCallback(cb, options, new _vffEvent2.default({
                        timecode: event.timecode,
                        changed: event.dataChanged,
                        data: _this2.getControlsData(namespace, event.data),
                        namespace: namespace
                    }));
                }
            });
        }
    }, {
        key: 'onController',
        value: function onController(namespace, cb, options) {
            var _this3 = this;

            if ((0, _helpers.isFunction)(namespace)) {
                options = cb;cb = namespace;namespace = '';
            }
            options = Object.assign({}, DEFAULT_ON_OPTIONS, options || {});
            (0, _helpers.on)(_events.VFF_EVENT + 'controller.main', function (event) {
                if (event.data.value && (event.data.value[namespace] || (0, _helpers.getByPath)(event.data.value, namespace) || !namespace)) {
                    var dataChanged = !event.oldValue || !(0, _helpers.deepCompare)((0, _helpers.getByPath)(event.data.value, namespace), (0, _helpers.getByPath)(event.oldValue, namespace));
                    if (!options.changeOnly || dataChanged) {
                        _this3._runCallback(cb, options, new _vffEvent2.default({
                            timecode: event.timecode,
                            changed: dataChanged,
                            data: namespace ? (0, _helpers.getByPath)(event.data.value, namespace) : event.data.value,
                            namespace: namespace
                        }));
                    }
                }
            });
        }
    }, {
        key: 'before',
        value: function before() {
            //TODO
        }
    }, {
        key: 'emit',
        value: function emit() {
            //TODO
        }
    }, {
        key: 'addPages',
        value: function addPages(pages) {
            if (pages && pages.length) {
                while (this._pages.length) {
                    this._pages.pop();
                }
                this._pages = this._pages.concat(pages);
                this._pagesDefer.resolve(pages);
                (0, _helpers.broadcast)(_events.PAGES_UPDATE, this._pages);
                // this.updateCB();
            }
        }
    }, {
        key: 'getPages',
        value: function getPages() {
            return this._pagesDefer.promise;
        }
    }, {
        key: 'onPages',
        value: function onPages(cb) {
            if (this._pages.length) {
                cb(this._pages);
            }
            (0, _helpers.on)(_events.PAGES_UPDATE, function (event) {
                cb(event.detail);
            });
        }
    }, {
        key: 'addQueryParams',
        value: function addQueryParams(params) {
            this._queryParams = params;
            // this.updateCB();
        }
    }, {
        key: 'getQueryParams',
        value: function getQueryParams() {
            return this._queryParams;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._controls = [];
            this._listeners = {};
            this._timeouts = new WeakMap();
            this._eventQueue = {};
        }
    }, {
        key: '_runCallback',
        value: function _runCallback(callback, options) {
            for (var _len = arguments.length, data = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                data[_key - 2] = arguments[_key];
            }

            var _this4 = this;

            if (options.consolidate || options.throttle) {
                clearTimeout(this._timeouts.get(callback));
                //todo add data to queue
                data.forEach(function (event) {
                    var queue = _this4._eventQueue[event.namespace] || [];
                    queue.push(event);
                    _this4._eventQueue[event.namespace] = queue;
                });

                this._timeouts.set(callback, setTimeout(function () {

                    function rec(events, agg) {
                        if (!events.length) {
                            return agg;
                        }
                        var event = events.shift();
                        if ((0, _helpers.isObject)(event.data) && (0, _helpers.isObject)(agg)) {
                            Object.assign(agg, event.data);
                        } else {
                            agg = event.data;
                        }
                        return rec(events, agg);
                    }

                    data.forEach(function (event) {
                        if (!(0, _helpers.isObject)(event.data)) {
                            _this4._eventQueue[event.namespace] = [];
                        } else {
                            var events = _this4._eventQueue[event.namespace];
                            var agg = rec(events, {});
                            event.data = Object.assign(agg, event.data);
                        }
                        callback(event);
                    });
                }, typeof options.throttle === 'number' ? options.throttle : 50));
            } else {
                callback.apply(undefined, data);
            }
        }
    }, {
        key: '_runMiddleware',
        value: function _runMiddleware(functions, data) {
            var self = this;
            return functions.reduce(function (prev, curr) {
                return prev.then(function (data) {
                    var d = (0, _helpers.defer)();
                    self._runCallback(curr.fn, curr.options, data, d.resolve);
                    return d.promise;
                });
            }, Promise.resolve(data));
        }
    }, {
        key: 'ready',
        value: function ready(cb) {
            this._readyCallbacks.push(cb);
        }
    }, {
        key: 'onReady',
        value: function onReady() {
            this._readyCallbacks.forEach(function (cb) {
                cb();
            });
        }
    }]);
    return VffData;
}();

var vffData = exports.vffData = new VffData();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(25)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(4);
var ctx = __webpack_require__(19);
var hide = __webpack_require__(11);
var has = __webpack_require__(13);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    EXPOSE_DELIMITER: " ",
    NAMESPACE_DELIMITER: ".",
    DEFAULT_GROUP_NAME: "untitled template",
    TIMECODE: "__timecode__",
    UI: {
        MULTISELECT: 'multiselect',
        DROPDOWN: 'dropdown',
        RADIO: 'radio',
        RANGE: 'range'
    },
    ATTRIBUTE: {
        CONTROL: "vff-control",
        BIND: "vff-bind",
        OPTIONS: "vff-options",
        EXPOSE: "vff-expose",
        CONTROLLER: "vff-controller",
        DATA: "vff-data",
        STYLE: "vff-style",
        SELECTION: "vff-select-from",
        SUFFIX: "vff-suffix",
        FORMAT: "vff-format"
    },
    MODE: {
        NORMAL: "normal",
        PREVIEW: "controller-preview",
        PROGRAM: "controller-program"
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(77);
var defined = __webpack_require__(31);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(74)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(49)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(83);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(88);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(15);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(62);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(53);
var enumBugKeys = __webpack_require__(38);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(30);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(37)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(4);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(18) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(40);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(4).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(21);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(4);
var LIBRARY = __webpack_require__(18);
var wksExt = __webpack_require__(41);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(62);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(23);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VFFEvent = function VFFEvent(data) {
    (0, _classCallCheck3.default)(this, VFFEvent);

    //namespace, data, timecode, changed
    Object.assign(this, data);
};

exports.default = VFFEvent;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(113);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(115);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(24);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(51);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(15);
var $iterCreate = __webpack_require__(75);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(80);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(25)(function () {
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(76);
var enumBugKeys = __webpack_require__(38);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(54).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(16);
var arrayIndexOf = __webpack_require__(78)(false);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(15);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(53);
var hiddenKeys = __webpack_require__(38).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vffState = undefined;

var _classCallCheck2 = __webpack_require__(23);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(29);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helpers = __webpack_require__(0);

var _messenger = __webpack_require__(5);

var _events = __webpack_require__(1);

var _vffEvent = __webpack_require__(45);

var _vffEvent2 = _interopRequireDefault(_vffEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleHandler = {
    get: function get(target, name) {
        return target[name];
    },
    set: function set(target, prop, value) {
        var cssVar = '--' + prop.replace(/([A-Z])/g, function (g) {
            return '-' + g[0].toLowerCase();
        });
        document.documentElement.style.setProperty(cssVar, value);
        target[prop] = value;
        return true;
    }
};

var VffState = function () {
    function VffState() {
        (0, _classCallCheck3.default)(this, VffState);

        var style = {};
        this.data = {};
        this.data.__style = new Proxy(style, styleHandler);
    }

    (0, _createClass3.default)(VffState, [{
        key: 'add',
        value: function add(key, value) {
            this.data[key] = value;
        }
    }, {
        key: 'remove',
        value: function remove(key) {
            delete this.data[key];
        }
    }, {
        key: 'get',
        value: function get(key) {
            return this.data[key];
        }
    }, {
        key: 'extend',
        value: function extend(obj) {
            for (var key in obj) {
                this.add(key, obj[key]);
            }
        }
    }, {
        key: 'has',
        value: function has(key) {
            return this.data.hasOwnProperty(key);
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.data = {};
        }
    }, {
        key: 'sync',
        value: function sync() {
            console.log("SYNC"); // eslint-disable-line
        }
    }, {
        key: 'take',
        value: function take(path) {
            console.log("TAKE"); // eslint-disable-line
            (0, _messenger.send)('vff-state', { data: this.data, path: path });
        }
    }, {
        key: 'upload',
        value: function upload(asset, cb) {
            (0, _messenger.request)(_events.UPLOAD_ASSET, { asset: { name: asset.name, type: asset.type } }, function (res) {
                cb(res.payload);
            });
        }
    }, {
        key: 'on',
        value: function on(namespace, cb, options) {
            if ((0, _helpers.isFunction)(namespace)) {
                options = cb;cb = namespace;namespace = '';
            }
            (0, _helpers.on)(_events.VFF_EVENT + namespace.toLowerCase(), function (event) {
                var e = new _vffEvent2.default({
                    timecode: event.timecode,
                    changed: event.dataChanged,
                    data: event.data,
                    oldVal: event.oldVal,
                    options: options,
                    namespace: namespace
                });
                cb(e);
            });
        }
    }]);
    return VffState;
}();

var vffState = exports.vffState = new VffState();

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(7);
var aFunction = __webpack_require__(24);
var SPECIES = __webpack_require__(3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(120);
var html = __webpack_require__(54);
var cel = __webpack_require__(32);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(21)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var isObject = __webpack_require__(12);
var newPromiseCapability = __webpack_require__(48);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xpath = __webpack_require__(127);

var _messenger = __webpack_require__(5);

var _events = __webpack_require__(1);

var events = ['__mouseup__', '__mousedown__', '__mousemove__', '__mouseover__', '__mouseout__', '__mouseenter__', '__mouseleave__', '__click__', '__dblclick__', '__touchstart__', '__touchend__', '__touchmove__', '__drag__', '__dragstart__', '__dragend__', '__dragover__', '__dragenter__', '__dragleave__', '__dragexit__', '__drop__', '__wheel__'];

function touchesToJson(touches) {
    if (!touches) return touches;
    var touchArray = [];

    for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        var touchData = {
            clientX: touch.clientX,
            clientY: touch.clientY,
            pageX: touch.pageX,
            pageY: touch.pageY
        };
        touchArray.push(touchData);
    }
    return touchArray;
}

function sync(e) {
    if (e.ctrlKey && e.metaKey && e.altKey && e.shiftKey) return;
    var msg = {};
    msg["__" + e.type + "__"] = {
        pageX: e.pageX,
        pageY: e.pageY,
        clientX: e.clientX,
        clientY: e.clientY,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        deltaZ: e.deltaZ,
        deltaMode: e.deltaMode,
        target: (0, _xpath.createXPathFromElement)(e.target),
        touches: touchesToJson(e.touches),
        targetTouches: touchesToJson(e.targetTouches),
        changedTouches: touchesToJson(e.changedTouches)
    };
    (0, _messenger.send)(_events.INTERACTION, msg);
}

function bindSyncEvents(element) {
    events.forEach(function (event) {
        event = event.replace(/__/g, '');
        element.addEventListener(event, sync, true);
    });
}

function dispatchEvent(event, data) {
    var target = void 0;
    if (['__click__'].indexOf(event) > -1) {
        target = document.elementFromPoint(data.pageX, data.pageY);
    } else {
        target = (0, _xpath.lookupElementByXPath)(data.target);
    }
    data.bubbles = true;
    data.cancelable = true;
    data.ctrlKey = data.metaKey = data.altKey = data.shiftKey = true; //Distinct the event to avoid looping
    data.view = window;
    // data.detail = {"test" : true};

    if (target) {
        if (['__touchstart__', '__touchend__', '__touchmove__'].indexOf(event) > -1) {
            target.dispatchEvent(new TouchEvent(event.slice(2, -2), handleTouchEvent(data, target)));
        } else if (event === '__wheel__') {
            target.dispatchEvent(new WheelEvent(event.slice(2, -2), data));
        } else {
            target.dispatchEvent(new MouseEvent(event.slice(2, -2), data));
        }
    } else {
        window.console.log('cannot find target:', data.target);
    }
}

function handleTouchEvent(data, target) {
    data.changedTouches = createTouchArray(data.changedTouches, target);
    data.targetTouches = createTouchArray(data.targetTouches, target);
    data.touches = createTouchArray(data.touches, target);
    return data;
}

function createTouchArray(touches, target) {
    return touches.map(function (touch) {
        touch.identifier = Date.now();
        touch.target = target;
        return new Touch(touch);
    });
}

function isInteractionEvent(event) {
    return events.indexOf(event) > -1;
}

window.addEventListener('load', function () {
    bindSyncEvents(window);
});

module.exports = {
    "sync": sync,
    "events": events,
    "bindSyncEvents": bindSyncEvents,
    "isInteractionEvent": isInteractionEvent,
    "dispatchEvent": dispatchEvent
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(5);

var _vffSetup = __webpack_require__(98);

var _events = __webpack_require__(1);

var _vffData = __webpack_require__(8);

var _vffState = __webpack_require__(63);

var _listener = __webpack_require__(103);

var _initDOM = __webpack_require__(133);

var _controllerDOM = __webpack_require__(134);

var _resizeHandler = __webpack_require__(136);

var _vffElement = __webpack_require__(137);

var _vffElement2 = _interopRequireDefault(_vffElement);

__webpack_require__(139);

var _helpers = __webpack_require__(0);

var _events2 = __webpack_require__(140);

var eventsApi = _interopRequireWildcard(_events2);

var _player = __webpack_require__(141);

var playerApi = _interopRequireWildcard(_player);

var _controller = __webpack_require__(142);

var controllerApi = _interopRequireWildcard(_controller);

var _video = __webpack_require__(143);

var _http = __webpack_require__(144);

var httpApi = _interopRequireWildcard(_http);

var _interactionEvents = __webpack_require__(68);

var _consts = __webpack_require__(14);

var _noOverscroll = __webpack_require__(145);

var noOverScroll = _interopRequireWildcard(_noOverscroll);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _listener.start)();
// import "../scripts/custom-elements.min";
// import "../scripts/custom-elements-es5-adapter.exec";

(0, _initDOM.init)();
(0, _controllerDOM.init)();

window.addEventListener('load', function () {
    (0, _resizeHandler.init)();
    _helpers.isMobile ? window.document.body.classList.add('vff-mobile') : window.document.body.classList.remove('vff-mobile');
    (0, _messenger.send)(_events.READY);
});

var vff = function vff(selector) {
    return new _vffElement2.default(selector);
};

vff.registerControl = function (name, value, options) {
    return _vffData.vffData.registerControl(name, value, options);
};
vff.registerControls = function (object, options) {
    return _vffData.vffData.registerControls(object, options);
};
vff.updateControl = function (name, value, options) {
    return _vffData.vffData.updateControl(name, value, options);
};
vff.getControl = function (name) {
    return _vffData.vffData.getControl(name);
};
vff.ready = function (cb) {
    return _vffData.vffData.ready(cb);
};
vff.customReady = function () {
    (0, _messenger.send)(_events.CUSTOM_READY);
};

vff.onUpdate = function (cb) {
    return _vffData.vffData.onUpdate(cb);
};
vff.getPages = function () {
    return _vffData.vffData.getPages();
};
vff.onPages = function (cb) {
    return _vffData.vffData.onPages(cb);
};
vff.on = function (namespace, cb, options) {
    return _vffData.vffData.on(namespace, cb, options);
};
vff.onController = function (namespace, cb, options) {
    return _vffData.vffData.onController(namespace, cb, options);
};
vff.getQueryParams = function () {
    return _vffData.vffData.getQueryParams();
};
vff.send = function (type, payload) {
    (0, _messenger.send)(type, payload);
};
vff.request = function (type, payload, cb) {
    (0, _messenger.request)(type, payload, cb);
};
vff.setup = function (options) {
    return (0, _vffSetup.setup)(options);
};
vff.isMobile = _helpers.isMobile;
vff.isController = function () {
    return vff.mode === _consts.MODE.PREVIEW || vff.mode === _consts.MODE.PROGRAM;
};
vff.data = function () {
    return _vffData.vffData.getControllerData();
};
vff.mode = _consts.MODE.NORMAL;
vff.MODE = _consts.MODE; //Enum
vff.defer = _helpers.defer;
vff.extend = function (name, extension) {
    vff[name] = extension;
};

//Deprecated
vff.define = function (name, element) {
    if ('customElements' in window) {
        customElements.define(name, element);
    }
};
vff.uuid = (0, _helpers.uuid)();
vff.sync = function (element) {
    (0, _interactionEvents.bindSyncEvents)(element);
};
vff.enableOverscroll = function () {
    noOverScroll.disable();
}; //Enabled by default
vff.disableOverscroll = function () {
    noOverScroll.enable();
}; //When disabled, body is not scrollable


(0, _helpers.extend)(vff, playerApi);
(0, _helpers.extend)(vff, eventsApi);

vff._playerStatus = {};
vff.state = _vffState.vffState;

vff.extend('controller', controllerApi);
vff.extend('video', _video.api);
vff.extend('http', httpApi);

module.exports = vff;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(72);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
__webpack_require__(81);
module.exports = __webpack_require__(4).Array.from;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);
var defined = __webpack_require__(31);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(52);
var descriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(34);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16);
var toLength = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(79);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(30);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(55);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(19);
var $export = __webpack_require__(10);
var toObject = __webpack_require__(55);
var call = __webpack_require__(56);
var isArrayIter = __webpack_require__(57);
var toLength = __webpack_require__(35);
var createProperty = __webpack_require__(82);
var getIterFn = __webpack_require__(39);

$export($export.S + $export.F * !__webpack_require__(58)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6);
var createDesc = __webpack_require__(20);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
__webpack_require__(28);
module.exports = __webpack_require__(41).f('iterator');


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(86);
var step = __webpack_require__(87);
var Iterators = __webpack_require__(15);
var toIObject = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(49)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
__webpack_require__(61);
__webpack_require__(96);
__webpack_require__(97);
module.exports = __webpack_require__(4).Symbol;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(51);
var META = __webpack_require__(91).KEY;
var $fails = __webpack_require__(25);
var shared = __webpack_require__(37);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(26);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(41);
var wksDefine = __webpack_require__(42);
var enumKeys = __webpack_require__(92);
var isArray = __webpack_require__(93);
var anObject = __webpack_require__(7);
var isObject = __webpack_require__(12);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(33);
var createDesc = __webpack_require__(20);
var _create = __webpack_require__(52);
var gOPNExt = __webpack_require__(94);
var $GOPD = __webpack_require__(95);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(34);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(60).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(43).f = $propertyIsEnumerable;
  __webpack_require__(59).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(18)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(26)('meta');
var isObject = __webpack_require__(12);
var has = __webpack_require__(13);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(25)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(59);
var pIE = __webpack_require__(43);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(21);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16);
var gOPN = __webpack_require__(60).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(43);
var createDesc = __webpack_require__(20);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(33);
var has = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(50);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('asyncIterator');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('observable');


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(5);

var _events = __webpack_require__(1);

function setup(options) {
    if (options) {
        (0, _messenger.send)(_events.VF_SETUP, options);
    }
}

module.exports = {
    setup: setup
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "REGISTER_TEMPLATE": 'register-template'
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(22);

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__(44);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(23);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(29);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helpers = __webpack_require__(0);

var _consts = __webpack_require__(14);

var _messenger = __webpack_require__(5);

var _events = __webpack_require__(1);

var _vffData = __webpack_require__(8);

var _vffEvent = __webpack_require__(45);

var _vffEvent2 = _interopRequireDefault(_vffEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
    group: _consts.DEFAULT_GROUP_NAME,
    global: false,
    bindTo: undefined,
    updateOn: 'control'
};

var DEFAULT_ON_OPTIONS = {
    throttle: true,
    changeOnly: true
};
var DEFAULT_BEFORE_OPTIONS = {
    throttle: true
};

var VFFControl = function () {
    function VFFControl(name, value, options) {
        (0, _classCallCheck3.default)(this, VFFControl);


        var group = void 0;
        var parts = name.split(_consts.NAMESPACE_DELIMITER);
        if (parts.length > 1) {
            name = parts[parts.length - 1];
            group = parts.slice(0, -1).join(_consts.NAMESPACE_DELIMITER);
        }

        this._name = name;
        this._options = Object.assign({}, DEFAULT_OPTIONS, options || {});
        if (group && this._options.group === DEFAULT_OPTIONS.group) this._options.group = group;
        this._group = this._options.group; //for querying purposes

        this._listeners = [];
        this._middleware = [];
        this._timeouts = new WeakMap();

        if (value && value.value) {
            value = value.value;
        }
        this._value = value;
        this._updateBoundElements();
    }

    (0, _createClass3.default)(VFFControl, [{
        key: "getGroup",
        value: function getGroup() {
            return this._options.group;
        }
    }, {
        key: "getName",
        value: function getName() {
            return this._name;
        }
    }, {
        key: "getNamespace",
        value: function getNamespace() {
            return this.getGroup() + _consts.NAMESPACE_DELIMITER + this.getName();
        }
    }, {
        key: "getOptions",
        value: function getOptions() {
            return this._options;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this._value;
        }
    }, {
        key: "getBindProp",
        value: function getBindProp() {
            return this.getOptions().bindTo;
        }
    }, {
        key: "isBoundToAttribute",
        value: function isBoundToAttribute() {
            return !!this.getOptions().attribute;
        }
    }, {
        key: "_updateBoundElements",
        value: function _updateBoundElements() {
            var _this = this;

            var elements = document.querySelectorAll(this._bindSelector());
            elements.forEach(function (el) {
                if (_this.getBindProp()) {
                    if (_this.isBoundToAttribute()) {
                        el.setAttribute(_this.getBindProp(), _this._value);
                    } else {
                        (0, _helpers.setByPath)(el, _this.getBindProp(), _this._value);
                    }
                } else if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) {
                    el.value = _this._value;
                } else {
                    el.innerHTML = _this._value;
                }
            });
        }
    }, {
        key: "_runListeners",
        value: function _runListeners(valueChanged) {
            var _this2 = this;

            this._listeners.forEach(function (listener) {
                if (!listener.options.changeOnly || valueChanged) {
                    _this2._runCallback(listener.fn, listener.options, new _vffEvent2.default({
                        data: _this2._value,
                        timecode: _this2.timecode,
                        changed: valueChanged
                    }));
                }
            });
        }
    }, {
        key: "_setValue",
        value: function _setValue(value) {
            var _this3 = this;

            if (value && value.value) {
                value = value.value;
            }
            var valueChanged = !(0, _helpers.deepCompare)(this._value, value);
            return new Promise(function (resolve, reject) {
                _this3._runMiddleware(_this3._middleware, value).then(function (value) {
                    var oldVal = _this3._value;
                    _this3._value = value;
                    _this3._updateBoundElements();
                    _this3._runListeners(valueChanged);
                    resolve({ controlChange: valueChanged, oldVal: oldVal });
                }, reject);
            });
        }
    }, {
        key: "updateValue",
        value: function updateValue(value) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (value && value.value) {
                value = value.value;
            }
            var valueChanged = !(0, _helpers.deepCompare)(this._value, value);
            if (value !== null && value !== undefined) this._value = value;
            Object.assign(this._options, options);
            this._updateBoundElements();
            this._runListeners(valueChanged);

            (0, _messenger.send)(_events.USER_UPDATE, (0, _defineProperty3.default)({}, this.getGroup(), this.getValueObject()));
            return valueChanged;
        }
    }, {
        key: "getValueObject",
        value: function getValueObject() {
            var data = void 0;
            if (this.getOptions().ui && (0, _typeof3.default)(this.getOptions().ui.type)) {
                data = (0, _defineProperty3.default)({}, this.getName(), {
                    ui: this.getOptions().ui.type,
                    options: this.getOptions().ui.options,
                    value: this.getValue(),
                    label: this.getOptions().ui.label,
                    config: this.getOptions().ui.config
                });
            } else {
                data = (0, _defineProperty3.default)({}, this.getName(), this.getValue());
            }
            return data;
        }
    }, {
        key: "on",
        value: function on(fn, options) {
            options = Object.assign({}, DEFAULT_ON_OPTIONS, options || {});
            this._listeners.push({ fn: fn, options: options });
            return this;
        }
    }, {
        key: "emit",
        value: function emit(data) {
            (0, _messenger.send)(_events.OUTGOING_EVENT, {
                data: data,
                query: _vffData.vffData.getQueryParams(),
                channel: this.getGroup()
            });
        }
    }, {
        key: "before",
        value: function before(fn, options) {
            options = Object.assign({}, DEFAULT_BEFORE_OPTIONS, options || {});
            this._middleware.push({ fn: fn, options: options });
            return this;
        }
    }, {
        key: "_bindSelector",
        value: function _bindSelector() {
            // let group = this.getGroup() === DEFAULT_OPTIONS.group? '' : (this.getGroup() + NAMESPACE_DELIMITER);
            var group = this.getGroup() + _consts.NAMESPACE_DELIMITER;
            var name = "" + this.getName().split(_consts.EXPOSE_DELIMITER)[0];
            return "[" + _consts.ATTRIBUTE.BIND + "=\"" + group + name + "\"]";
        }
    }, {
        key: "_runCallback",
        value: function _runCallback(callback, options) {
            for (var _len = arguments.length, data = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                data[_key - 2] = arguments[_key];
            }

            if (options.consolidate || options.throttle) {
                clearTimeout(this._timeouts.get(callback));
                this._timeouts.set(callback, setTimeout(function () {
                    callback.apply(undefined, data);
                }, typeof options.throttle === 'number' ? options.throttle : 50));
            } else {
                callback.apply(undefined, data);
            }
        }
    }, {
        key: "_runMiddleware",
        value: function _runMiddleware(functions, data) {
            var self = this;
            return functions.reduce(function (prev, curr) {
                return prev.then(function (data) {
                    var d = (0, _helpers.defer)();
                    self._runCallback(curr.fn, curr.options, data, d.resolve);
                    return d.promise;
                });
            }, Promise.resolve(data));
        }
    }]);
    return VFFControl;
}();

exports.default = VFFControl;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _handlers = __webpack_require__(104);

var handlers = _interopRequireWildcard(_handlers);

var _events = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function messageHandler(message) {
    try {
        var messageData = JSON.parse(message.data);
        var type = messageData.type;
        var handler = handlers[type];
        if (messageData.cid && message.source && message.source.postMessage) {
            var msg = { type: _events.ACK, cid: messageData.cid };
            message.source.postMessage(JSON.stringify(msg), '*');
        }
        if (handler) {
            handler(messageData.payload);
        }
    } catch (err) {
        //Malformed JSON
    }
}

module.exports = {
    start: function start() {
        if (window && window.addEventListener) {
            window.addEventListener('message', messageHandler, false);
        }
    }
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(5);

var _updateHandler = __webpack_require__(105);

var _pagesHandler = __webpack_require__(128);

var _queryParamsHandler = __webpack_require__(129);

var _reloadHandler = __webpack_require__(130);

var _vfDataHandler = __webpack_require__(131);

var _playerHandler = __webpack_require__(132);

var events = __webpack_require__(1);


var dataReady = false;
var handlers = {};
handlers['vff-update'] = function (e) {
    (0, _updateHandler.update2)(e.event.data);
};

handlers[events.UPDATE] = function (e) {
    if (!dataReady) {
        dataReady = true;
        (0, _messenger.send)(events.DATA_READY);
    }
    (0, _updateHandler.updateStyles)(e);
    (0, _updateHandler.update)(e);
};
handlers[events.PAGES] = _pagesHandler.pages;
handlers[events.QUERY_PARAMS] = _queryParamsHandler.queryParams;
handlers[events.RELOAD] = _reloadHandler.reload;
handlers[events.VF_DATA] = _vfDataHandler.handleVFData;
handlers[events.DEVICE_CHANGE] = _playerHandler.deviceChange;
handlers[events.PLAYER_STATUS] = _playerHandler.playerStatus;

module.exports = handlers;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(44);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = __webpack_require__(106);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = __webpack_require__(46);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(47);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var update = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
        var timecode, globalChange, promises, templateChange;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        timecode = void 0, globalChange = false, promises = [], templateChange = {};
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                            var _loop = function _loop(templateName) {
                                var _loop2 = function _loop2(key) {
                                    if (key !== _consts.TIMECODE) {
                                        if (!timecode) timecode = data[templateName].__timecode__;
                                        promises.push(new Promise(function (resolve, reject) {
                                            var controlName = '' + templateName + _consts.NAMESPACE_DELIMITER + key;

                                            _vffData.vffData._updateControl(controlName, data[templateName][key], { timecode: timecode }).then(function (res) {
                                                templateChange[templateName] = res.controlChange || templateChange[templateName];
                                                if (controlName.includes(_consts.EXPOSE_DELIMITER)) {
                                                    templateChange[controlName.split(_consts.EXPOSE_DELIMITER)[0]] = res.controlChange || templateChange[controlName.split(_consts.EXPOSE_DELIMITER)[0]];
                                                }
                                                globalChange = res.controlChange || globalChange;
                                                (0, _helpers.broadcast)(_events.VFF_EVENT + controlName.toLowerCase(), { dataChanged: res.controlChange, timecode: timecode, data: data[templateName][key], oldValue: res.oldVal });
                                                resolve();
                                            }, reject);
                                        }));
                                    }
                                };

                                for (var key in data[templateName]) {
                                    _loop2(key);
                                }
                            };

                            for (var templateName in data) {
                                _loop(templateName);
                            }

                            Promise.all(promises).then(function () {
                                for (var templateName in data) {
                                    (0, _helpers.broadcast)(_events.VFF_EVENT + templateName.toLowerCase(), { dataChanged: templateChange[templateName], timecode: timecode, data: data[templateName] });

                                    var exposed = groupExposedControls(data[templateName]);
                                    for (var key in exposed) {
                                        (0, _helpers.broadcast)(_events.VFF_EVENT + templateName.toLowerCase() + _consts.NAMESPACE_DELIMITER + key.toLowerCase(), { dataChanged: templateChange[templateName + _consts.NAMESPACE_DELIMITER + key], timecode: timecode, data: exposed[key] });
                                    }
                                }
                                (0, _helpers.broadcast)(_events.VFF_EVENT, { dataChanged: globalChange, timecode: timecode, data: data });
                                resolve();
                            }, reject);
                        }));

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function update(_x) {
        return _ref.apply(this, arguments);
    };
}();

var update2 = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(data) {
        var oldVal, noStyle;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        oldVal = JSON.parse(JSON.stringify(_vffState.vffState.data || {}));
                        noStyle = Object.keys(data).filter(function (key) {
                            return ['__style'].indexOf(key) < 0;
                        }).reduce(function (newObj, key) {
                            return Object.assign(newObj, (0, _defineProperty3.default)({}, key, data[key]));
                        }, {});


                        Object.assign(_vffState.vffState.data, noStyle);
                        Object.assign(_vffState.vffState.data.__style, data.__style);
                        (0, _helpers.broadcast)(_events.VFF_EVENT, { dataChanged: true, data: _vffState.vffState.data, oldVal: oldVal });

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function update2(_x2) {
        return _ref4.apply(this, arguments);
    };
}();

var _helpers = __webpack_require__(0);

var _vffData = __webpack_require__(8);

var _vffState = __webpack_require__(63);

var _interactionEvents = __webpack_require__(68);

var _events = __webpack_require__(1);

var _consts = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateStyles(data) {
    try {
        var d = data.controller.main.value.__style;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.entries(d)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _ref2 = _step.value;

                var _ref3 = (0, _slicedToArray3.default)(_ref2, 2);

                var key = _ref3[0];
                var value = _ref3[1];

                var prop = '--' + key.replace(/([A-Z])/g, function (g) {
                    return '-' + g[0].toLowerCase();
                });
                document.documentElement.style.setProperty(prop, value);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    } catch (e) {
        //
    }
}

function groupExposedControls(data) {
    var exposed = {};
    for (var key in data) {
        if (key.includes(_consts.EXPOSE_DELIMITER)) {
            var parts = key.split(_consts.EXPOSE_DELIMITER);
            var name = parts[0],
                prop = parts[1];
            exposed[name] = exposed[name] || {};
            exposed[name][prop] = data[key];
        }
    }
    return exposed;
}

function updateInteraction(data) {
    for (var event in data) {
        if ((0, _interactionEvents.isInteractionEvent)(event)) {
            (0, _interactionEvents.dispatchEvent)(event, data[event]);
        }
    }
}

module.exports = {
    update2: update2,
    update: update,
    updateInteraction: updateInteraction,
    updateStyles: updateStyles
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(107);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(110);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
__webpack_require__(17);
module.exports = __webpack_require__(109);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(40);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(4).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
__webpack_require__(17);
module.exports = __webpack_require__(112);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var get = __webpack_require__(39);
module.exports = __webpack_require__(4).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(114);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(17);
__webpack_require__(28);
__webpack_require__(117);
__webpack_require__(125);
__webpack_require__(126);
module.exports = __webpack_require__(4).Promise;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var global = __webpack_require__(2);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(40);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(12);
var aFunction = __webpack_require__(24);
var anInstance = __webpack_require__(118);
var forOf = __webpack_require__(119);
var speciesConstructor = __webpack_require__(64);
var task = __webpack_require__(65).set;
var microtask = __webpack_require__(121)();
var newPromiseCapabilityModule = __webpack_require__(48);
var perform = __webpack_require__(66);
var userAgent = __webpack_require__(122);
var promiseResolve = __webpack_require__(67);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(123)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(124)(PROMISE);
Wrapper = __webpack_require__(4)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(58)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(56);
var isArrayIter = __webpack_require__(57);
var anObject = __webpack_require__(7);
var toLength = __webpack_require__(35);
var getIterFn = __webpack_require__(39);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(65).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(21)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(11);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var core = __webpack_require__(4);
var dP = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(9);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(4);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(64);
var promiseResolve = __webpack_require__(67);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(48);
var perform = __webpack_require__(66);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isSVGChild(elm) {
    while (elm) {
        if (elm.tagName === 'svg') return true;
        elm = elm.parentNode;
    }
}

module.exports = {

    createXPathFromElement: function createXPathFromElement(elm) {
        var allNodes = document.getElementsByTagName('*');
        var segs = void 0,
            sib = void 0,
            i = void 0,
            svg = void 0;
        for (segs = []; elm && elm.nodeType == 1; elm = elm.parentNode) {
            svg = isSVGChild(elm);
            if (elm.hasAttribute('id') & !svg) {
                var uniqueIdCount = 0;
                for (var n = 0; n < allNodes.length; n++) {
                    if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++;
                    if (uniqueIdCount > 1) break;
                }
                if (uniqueIdCount == 1) {
                    segs.unshift('id("' + elm.getAttribute('id') + '")');
                    return segs.join('/');
                } else {
                    segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
                }
            } else if (elm.hasAttribute('class') && !svg) {
                segs.unshift(elm.localName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]');
            } else {
                for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
                    if (sib.localName == elm.localName) i++;
                }
                if (svg) {
                    segs.unshift("*[name()='" + elm.localName.toLowerCase() + "'][" + i + ']');
                } else {
                    segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
                }
            }
        }
        return segs.length ? '/' + segs.join('/') : null;
    },

    lookupElementByXPath: function lookupElementByXPath(path) {
        if (path) {
            var evaluator = new XPathEvaluator();
            var result = evaluator.evaluate(path, document.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            return result.singleNodeValue;
        }
    },
    getElementByXpath: function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vffData = __webpack_require__(8);

function pages(data) {
    _vffData.vffData.addPages(data);
}

module.exports = {
    pages: pages
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vffData = __webpack_require__(8);

function queryParams(data) {
    _vffData.vffData.addQueryParams(data);
}

module.exports = {
    queryParams: queryParams
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function reload(w) {
    (w || window).location.reload();
}

module.exports = {
    reload: reload
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vffData = __webpack_require__(8);

function handleVFData(data) {
    if (data.mode) {
        window.vff.mode = data.mode;
    }
    _vffData.vffData.onReady();
}

module.exports = {
    handleVFData: handleVFData
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

var _events = __webpack_require__(1);

function deviceChange(data) {
    window.vff.isMobile = data.device === 'mobile';
    if (window.vff.isMobile) {
        window.document.body.classList.add('vff-mobile');
    } else {
        window.document.body.classList.remove('vff-mobile');
    }
}

function playerStatus(data) {
    if (!window.vff._playerStatus || data.timecode !== window.vff._playerStatus.timecode) {
        (0, _helpers.broadcast)(_events.VIDEO_TIME_UPDATE, data.timecode);
    }
    window.vff._playerStatus = data;
    //TODO handle status change
}

module.exports = {
    deviceChange: deviceChange,
    playerStatus: playerStatus
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(22);

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__(44);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _helpers = __webpack_require__(0);

var _vffData = __webpack_require__(8);

var _consts = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initDOM() {
    var controls = document.querySelectorAll('[' + _consts.ATTRIBUTE.CONTROL + ']');
    // let controls = searchAttribute(ATTRIBUTE.CONTROL);
    controls.forEach(function (control) {

        var name = control.getAttribute(_consts.ATTRIBUTE.CONTROL);

        /*********************************************************************************************/
        //TODO handle options
        var options = control.getAttribute(_consts.ATTRIBUTE.OPTIONS) || '{}';
        try {
            //TODO test it
            options = (0, _helpers.parseRJSON)(options);
        } catch (err) {
            options = {};
        }

        //TODO what is this and why do i need this?
        if (control.options && typeof control.options === 'function') {
            options = Object.assign({}, control.options(), options);
        }
        // options.element = control;
        /*********************************************************************************************/
        var exposedAttr = control.getAttribute(_consts.ATTRIBUTE.EXPOSE);
        if (exposedAttr) {
            try {
                exposedAttr = (0, _helpers.parseRJSON)(exposedAttr);
            } catch (err) {
                if (!exposedAttr.match("{|}")) {
                    exposedAttr = (0, _defineProperty3.default)({}, exposedAttr, exposedAttr);
                } else {
                    exposedAttr = null;
                }
            }
        }
        /*********************************************************************************************/

        var exposed = exposedAttr ? exposedAttr : control.expose ? control.expose() : {};

        for (var prop in exposed) {
            if (exposed.hasOwnProperty(prop)) {

                var path = exposed[prop],
                    ui = void 0,
                    attribute = void 0,
                    value = void 0;
                if ((0, _typeof3.default)(exposed[prop]) === 'object') {
                    path = exposed[prop].path;
                    ui = exposed[prop].ui;
                    attribute = exposed[prop].attribute;
                    value = exposed[prop].value;
                }

                var ctrl = _vffData.vffData.registerControl(name + _consts.EXPOSE_DELIMITER + prop, value ? value : attribute ? control.getAttribute(path) : (0, _helpers.getByPath)(control, path), Object.assign({ bindTo: path, ui: ui, attribute: attribute }, options));

                var bindName = name.indexOf('.') > -1 ? name.split('.')[1] : name;
                control.setAttribute(_consts.ATTRIBUTE.BIND, ctrl.getGroup() + '.' + bindName);
            }
        }
        if (control instanceof HTMLTextAreaElement || control instanceof HTMLInputElement) {
            var _ctrl = _vffData.vffData.registerControl(name, control.value);
            var _bindName = name.indexOf('.') > -1 ? name.split('.')[1] : name;
            control.setAttribute(_consts.ATTRIBUTE.BIND, _ctrl.getGroup() + '.' + _bindName);
        }
    });
    var binds = document.querySelectorAll('[' + _consts.ATTRIBUTE.BIND + ']');
    binds.forEach(function (controlEl) {
        if (controlEl instanceof HTMLTextAreaElement || controlEl instanceof HTMLInputElement) {
            controlEl.addEventListener('keyup', function () {
                var control = _vffData.vffData.getControl(controlEl.getAttribute(_consts.ATTRIBUTE.BIND));
                if (control) {
                    control.updateValue(controlEl.value);
                }
            });
        }
    });
}

module.exports = {
    init: function init() {
        window.addEventListener('load', function () {
            initDOM();
        });
    },
    _init: initDOM
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(46);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(47);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var controllerExists = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						return _context.abrupt("return", new Promise(function (resolve, reject) {
							url = url || new URL("./controller.html", document.baseURI).href;
							var xhr = new XMLHttpRequest();
							xhr.open("GET", url, true);
							xhr.onload = function () {
								if (xhr.readyState === 4) {
									if (xhr.status === 200 && xhr.response && new DOMParser().parseFromString(xhr.response, 'text/html').querySelector("[" + _consts.ATTRIBUTE.CONTROLLER + "]")) {
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
						}));

					case 1:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function controllerExists(_x) {
		return _ref.apply(this, arguments);
	};
}();

var _helpers = __webpack_require__(0);

var _vffData = __webpack_require__(8);

var _consts = __webpack_require__(14);

var _events = __webpack_require__(1);

var _uploader = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylePrefix = "__style.";
var EVENT = {
	UPDATE: 'vff:update',
	INIT: 'vff:init',
	REMOVE: 'vff:remove',
	CHANGE: 'vff:change'
};
var TAG = {
	IMAGE: 'VFF-IMAGE-BROWSER',
	TABLE: 'VFF-TABLE',
	RADIO: 'VFF-RADIO-BUTTON',
	SELECT: 'VFF-SELECT',
	TEXT: 'VFF-TEXT',
	CHECKBOX: 'VFF-CHECKBOX',
	COLOR: 'VFF-COLOR-PICKER'
};

var _data = {};
var __initial = {
	data: {},
	keys: new Set(),
	add: function add(key, value) {
		if (!this.keys.has(key)) {
			this.data[key] = value;
			this.keys.add(key);
		}
	},
	remove: function remove(key) {
		delete this.data[key];
	},
	get: function get(key, remove) {
		var value = this.data[key];
		if (remove) this.remove(key);
		return value;
	},
	extend: function extend(obj) {
		for (var key in obj) {
			this.add(key, obj[key]);
		}
	},
	has: function has(key) {
		return this.data.hasOwnProperty(key);
	},
	reset: function reset() {
		this.data = {};
		this.keys = new Set();
	}
};
// const __selectFrom = {
// 	data : {},
// 	set : function(key, value){
// 		let set = this.data[key] || new Set();
// 		set.add(value);
// 		this.data[key] = set;
// 	},
// 	get : function(key){
// 		return this.data[key];
// 	}
// };


function getArray(object, path) {
	var arrPath = path.substr(0, path.lastIndexOf('.'));
	var keyPath = path.substr(path.lastIndexOf('.') + 1, path.length);
	var arr = [];
	for (var key in object) {
		var regex = new RegExp(arrPath + "\\.\\d+\\." + keyPath);
		if (key.match(regex)) {
			arr.push(object[key]);
		}
	}
	return arr;
}

function handleSelect(el, data) {
	var selectionPath = el.getAttribute(_consts.ATTRIBUTE.SELECTION);

	if (el.tagName === TAG.SELECT) {
		var split = selectionPath.split(',');
		var keyPath = split[0];
		var valuePath = split[1] || split[0];
		var selectionKeys = getArray(data, keyPath);
		var selectionValues = getArray(data, valuePath);
		var options = selectionKeys.map(function (key, i) {
			return {
				key: key, value: selectionValues[i]
			};
		});

		el.options = options;

		data[el.getAttribute(_consts.ATTRIBUTE.DATA)] = getValue(el);
	}
}
function getValue(el) {
	var event = void 0;
	if (!(el instanceof HTMLElement) && el.target) {
		event = el;
		el = el.target;
	}
	var suffix = el.getAttribute(_consts.ATTRIBUTE.SUFFIX);
	var pattern = el.getAttribute(_consts.ATTRIBUTE.FORMAT);
	var value = void 0;
	switch (el.constructor.name) {
		case 'HTMLSelectElement':
		case 'HTMLInputElement':
			value = el.value;
			break;
		default:
			value = event && event.detail && event.detail.data !== undefined ? event.detail.data : el.value;
			break;
	}
	switch (el.tagName) {
		case TAG.RADIO:
			value = el.checked;
			break;
		case TAG.SELECT:
			value = JSON.stringify(el.value);
			break;
	}
	if (pattern) {
		value = (0, _helpers.format)(pattern, value);
	}
	return suffix ? value + suffix : value;
}
function setValue(el, value) {
	var suffix = el.getAttribute(_consts.ATTRIBUTE.SUFFIX) || '';
	var pattern = el.getAttribute(_consts.ATTRIBUTE.FORMAT) || '';
	value = pattern ? (0, _helpers.unformat)(value, pattern) : value;
	value = suffix ? value.slice(0, -suffix.length) : value;
	switch (el.tagName) {
		case TAG.RADIO:
			el.checked = value;
			return;
		case TAG.SELECT:
			el.value = JSON.parse(value);
			return;
	}
	switch (el.constructor.name) {
		case 'HTMLSelectElement':
		case 'HTMLInputElement':
			el.value = value;
			break;
		default:
			el.value = value;
	}
}
function scanSelectFrom() {
	var selectElements = (0, _helpers.searchAttribute)(_consts.ATTRIBUTE.SELECTION);
	selectElements.forEach(function (element) {
		handleSelect(element, _data);
	});
}

// function scanTable(table){
// 	let elements = searchAttribute([ATTRIBUTE.DATA, ATTRIBUTE.STYLE], undefined, table);
// 	elements.forEach(el => {
// 		onVFFInit2(el);
// 	});
// }

// function onVFFInit2(el){
// 	let attrs = getVFFAttributes(el);
// 	for(let key in attrs){
//
// 		if(__initial.has(attrs[key])){
// 			setValue(el, __initial.get(attrs[key], true));
// 		}
//
// 		let value = getValue(el);
// 		_data[(key === ATTRIBUTE.STYLE? stylePrefix : '') + attrs[key]] = value;
//
// 	}
// 	// console.log("vff:init", getVFFAttributes(event.target));
// 	let val;
// 	switch (el.tagName) {
// 		case TAG.IMAGE:
// 			// imageBrowserListener(event)
// 			break;
// 		default:
// 			val = _data[el.getAttribute(ATTRIBUTE.DATA)];
// 			if(val !== undefined){
// 				setValue(el, val);
// 			}
// 			break;
// 	}
//
// 	updateControllerLongDebounce();
// 	// let d = unflatten(_data);
// 	// scanSelectFrom();
// 	// vffData.updateController(d);
// }

function imageBrowserListener(event) {
	if (event.target.selectedFiles.length) {
		window.vff.controller.upload(event.target.selectedFiles[0], function (e) {
			// eslint-disable-next-line
			console.log("upload file");
			(0, _uploader.uploadFile)(event.target.selectedFiles[0], e.urls.uploadUrl, {
				onSuccess: function onSuccess() {
					event.target.value = e.urls.cdnUrl;
					event.detail.data = undefined;
					_update(event);
				}
			});
		});
	} else {
		event.target.value = '';
		// updateListener(event);
	}
}

function getVFFAttributes(el) {
	return [_consts.ATTRIBUTE.DATA, _consts.ATTRIBUTE.STYLE].reduce(function (res, attr) {
		if (el.hasAttribute(attr)) {
			res[attr] = el.getAttribute(attr);
		}
		return res;
	}, {});
}

function updateController() {
	var d = (0, _helpers.unflatten)(_data);
	scanSelectFrom();
	_vffData.vffData.updateController(d);
	(0, _helpers.broadcast)(_events.VFF_EVENT, { dataChanged: true, d: d });
}

var updateControllerLongDebounce = (0, _helpers.debounce)(updateController, 500);
var updateControllerLShortDebounce = (0, _helpers.debounce)(updateController, 50);

function onVFFInit(event) {
	var attrs = getVFFAttributes(event.target);
	for (var key in attrs) {

		if (__initial.has(attrs[key])) {
			setValue(event.target, __initial.get(attrs[key], true));
		}

		var value = getValue(event.target);
		_data[(key === _consts.ATTRIBUTE.STYLE ? stylePrefix : '') + attrs[key]] = value;
	}
	// console.log("vff:init", getVFFAttributes(event.target));
	var val = void 0;
	switch (event.target.tagName) {
		case TAG.IMAGE:
			// imageBrowserListener(event)
			break;
		default:
			val = _data[event.target.getAttribute(_consts.ATTRIBUTE.DATA)];
			if (val !== undefined) {
				setValue(event.target, val);
			}
			break;
	}

	updateControllerLongDebounce();
	// let d = unflatten(_data);
	// scanSelectFrom();
	// vffData.updateController(d);
}

function onVFFRemove(event) {
	// console.log('vff:remove');
	var attrs = getVFFAttributes(event.detail.el);
	for (var attr in attrs) {
		delete _data[attrs[attr]];
		delete _data[stylePrefix + attrs[attr]];
	}
	scanSelectFrom();
}

function _update(event) {
	var value = getValue(event);
	if (event.target.hasAttribute(_consts.ATTRIBUTE.DATA)) {
		_data[event.target.getAttribute(_consts.ATTRIBUTE.DATA)] = value;
	}

	if (event.target.hasAttribute(_consts.ATTRIBUTE.STYLE)) {
		_data[stylePrefix + event.target.getAttribute(_consts.ATTRIBUTE.STYLE)] = value;
	}
	//todo handle elements with same vff-data ot vff-style
	updateControllerLShortDebounce();
	// scanSelectFrom(); //todo handle select-from
	// let d = unflatten(_data);
	// vffData.updateController(d);
	// broadcast(VFF_EVENT, { dataChanged: true, d});


	// broadcast("vff:update", { vffData: event.target.getAttribute(ATTRIBUTE.DATA), data: d});
}

function onVFFChange(event) {
	// console.log("vff:change", event);
	switch (event.target.tagName) {
		case TAG.IMAGE:
			imageBrowserListener(event);
			if (!event.target.selectedFiles.length) {
				event.detail.data = undefined;
				_update(event);
			}
			break;
		default:
			_update(event);
			break;
	}
}

window.addEventListener(EVENT.INIT, onVFFInit);
window.addEventListener(EVENT.REMOVE, onVFFRemove);
window.addEventListener(EVENT.CHANGE, onVFFChange);

module.exports = {
	init: function init() {
		window.addEventListener('load', function () {
			if ((0, _helpers.searchAttribute)(_consts.ATTRIBUTE.CONTROLLER).length) {

				// registerControls();

				_vffData.vffData.registerController().on(function (e) {
					if (e.data.__initial) {
						delete e.data.__initial;
						__initial.reset();
					}
					var flat = (0, _helpers.flatten)(e.data);
					Object.assign(_data, flat);
					__initial.extend(flat);
					// Object.assign(_initial, flat);
					// console.log("Controller:", flat);
					Object.keys(flat).forEach(function (key) {
						var val = flat[key];
						try {
							val = JSON.parse(val);
						} catch (e) {/*do nothing*/}
						if (key.startsWith(stylePrefix)) {
							(0, _helpers.broadcast)(EVENT.UPDATE, { dataAttrName: _consts.ATTRIBUTE.STYLE, dataAttrValue: key.substr(8), value: val });
						} else {
							(0, _helpers.broadcast)(EVENT.UPDATE, { dataAttrName: _consts.ATTRIBUTE.DATA, dataAttrValue: key, value: val });
						}
					});
				}, { changeOnly: false, throttle: 0 });
			} else {
				controllerExists().then(function (url) {
					_vffData.vffData.registerController(url);
				}, function () {
					// console.log('No custom controller');
				});
			}
		});
	}
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

var uploads = {};

// import Worker from './webworkers/fileupload.worker.js';
//
// let worker = new Worker();
// // let worker = new Worker('./webworkers/fileupload.js', { type: "module" });
//
// worker.onerror = function (e) {
//     console.log('ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message);
// };
//


function _upload(file, url, options) {

    var uid = (0, _helpers.uuid)();
    options = options || {};
    var req = new XMLHttpRequest();
    uploads[uid] = req;
    req.open("PUT", url, true);
    req.setRequestHeader('Content-type', file.type);
    req.upload.onprogress = function () {
        if (options.onProgress) {
            options.onProgress(event.loaded / event.total);
        }
        // console.log(JSON.stringify({uuid, type: 'progress', progress : event.loaded / event.total, loaded : event.loaded, total : event.total}));
    };
    req.onreadystatechange = function () {
        if (req.readyState !== 4) return;
        if (req.status >= 200 && req.status < 300) {
            if (options.onSuccess) {
                options.onSuccess();
            }
            // console.log(JSON.stringify({uuid, type: 'success', filename : file.name}));
            delete uploads[_helpers.uuid];
        } else {
            // console.log(JSON.stringify({uuid, type: 'error', data: {
            //         status: req.status,
            //         statusText: req.statusText
            //     }}));
            if (options.onError) {
                options.onError({
                    status: req.status,
                    statusText: req.statusText
                });
            }
            delete uploads[_helpers.uuid];
        }
    };
    req.send(file);
}

// function uploadFile(file, uploadUrl){
//     let uid = uuid();
//     let handler = function(e){
//         let msg = JSON.parse(e.data);
//         if(msg.uuid !== uid) return;
//         switch (msg.type){
//             case 'progress':
//                 // console.log(`${(msg.progress*100).toFixed(0)}%`);
//                 break;
//
//             case 'success':
//                 worker.removeEventListener('message', handler);
//                 delete uploads[uid];
//                 break;
//             case 'error':
//                 if(msg.data.status !== 0 || msg.data.statusText){
//                     // console.log('Failed to upload file - error ', msg.data.statusText);
//                 }
//                 worker.removeEventListener('message', handler);
//
//                 delete uploads[uid];
//                 break;
//             default:
//                 break;
//         }
//     };
//
//     worker.addEventListener('message', handler);
//
//     uploads[uid] = true;
//     worker.postMessage({
//         cmd     : 'upload',
//         file,
//         url     : uploadUrl,
//         uuid: uid
//     });
// }

module.exports = {
    uploadFile: _upload
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

var classes = {
    'overlay-fill': 'vff-overlay-fill',
    'overlay-fit': 'vff-overlay-fit',
    'video-fit': 'vff-video-fit',
    'video-fill': 'vff-video-fill',
    'video-fitTop': 'vff-video-fit-top',
    'video-fitBottom': 'vff-video-fit-bottom'
};

function readDeviceOrientation() {
    //We are using this method in order no to use window.orientation
    //window.orientation gives different results on Android and iOS
    var screenOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    var orientation = window.screen.orientation && window.screen.orientation.type.indexOf('portrait') >= 0 || screenOrientation === 'portrait' ? 'Portrait' : 'Landscape';
    return orientation;
}

function resizeHandler() {
    var overlaySizing = '';
    var videoSizing = '';
    try {
        overlaySizing = window.vff._playerStatus['overlaySizing' + (_helpers.isMobile ? readDeviceOrientation() : '')];
        videoSizing = window.vff._playerStatus['contentSizing' + (_helpers.isMobile ? readDeviceOrientation() : '')];
    } catch (e) {
        //no status yet
    }
    Object.values(classes).forEach(function (c) {
        window.document.body.classList.remove(c);
    });
    window.document.body.classList.add(classes['overlay-' + overlaySizing]);
    window.document.body.classList.add(classes['video-' + videoSizing]);
}

module.exports = {
    init: function init() {
        window.addEventListener('resize', function () {
            resizeHandler();
        });
        resizeHandler();
    }
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(23);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(29);

var _createClass3 = _interopRequireDefault(_createClass2);

var _htmlAccessorObserver = __webpack_require__(138);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VffElement = function () {
    function VffElement(selector) {
        (0, _classCallCheck3.default)(this, VffElement);

        this.selector = selector;
        this.element = null;
        this._init();
        this._observe();
    }

    (0, _createClass3.default)(VffElement, [{
        key: '_init',
        value: function _init() {
            switch (this.selector[0]) {
                case '<':
                    {
                        //create element
                        var matches = this.selector.match(/<([\w-]*)>/);
                        if (matches === null || matches === undefined) {
                            throw 'Invalid Selector / Node';
                        }
                        var nodeName = matches[0].replace('<', '').replace('>', '');
                        this.element = document.createElement(nodeName);
                        break;
                    }
                default:
                    {
                        this.element = document.querySelector(this.selector);
                    }
            }
        }
    }, {
        key: 'on',
        value: function on() {
            var prop = arguments.length > 1 ? arguments[0] : null;
            var cb = arguments.length > 1 ? arguments[1] : arguments[0];
            var event = prop ? "vff-change-" + prop : 'vff-change';
            var listener = function listener(e) {
                if (prop) {
                    cb(e.detail.value);
                } else {
                    cb(e.detail.property, e.detail.value, e.detail.path);
                }
            };
            this.element.addEventListener(event, listener, false);
            var self = this;
            return function () {
                self.element.removeEventListener(event, listener, false);
            };
        }
    }, {
        key: '_observe',
        value: function _observe() {
            var self = this;
            (0, _htmlAccessorObserver.observe)(this.element, null, function (event, data) {
                self.element.dispatchEvent(new CustomEvent(event, data));
            });
            return this;
        }
    }]);
    return VffElement;
}();

exports.default = VffElement;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(22);

var _typeof3 = _interopRequireDefault(_typeof2);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getExposed(provider, prop) {
    if (provider.expose) {
        return (0, _typeof3.default)(provider.expose()[prop]) === 'object' ? provider.expose()[prop].path : provider.expose()[prop];
    }
}

function stringifyPath(path) {
    var str = '';
    for (var i = 0; i < path.length; i++) {
        str += (0, _helpers.trim)(path[i], "_") + '.';
    }
    return str;
}

function observePrimitive(provider, prop, path, dispatcher) {
    var value = provider[prop];
    var pathString = stringifyPath(path);
    var exposedPath = getExposed(provider, prop);
    Object.defineProperty(provider, prop, {
        get: function get() {
            if (exposedPath) {
                return (0, _helpers.getByPath)(provider, exposedPath);
            }
            return value;
        },
        set: function set(newValue) {
            if (newValue !== provider[prop]) {
                if (dispatcher) {
                    var event = 'vff-change-' + pathString + (0, _helpers.trim)(prop, "_");
                    dispatcher(event, { detail: { value: newValue } });
                    dispatcher('vff-change', { detail: { value: newValue, property: prop, path: path } });
                }
                if (exposedPath) {
                    (0, _helpers.setByPath)(provider, exposedPath, newValue);
                } else {
                    value = newValue;
                }
            }
        }
    });
}

function observeObject(provider, path, dispatcher) {
    path = path || [];
    var props = Object.getOwnPropertyNames(provider);
    for (var i = 0; i < props.length; i++) {

        if ((0, _typeof3.default)(provider[props[i]]) === 'object') {
            path.push(props[i]);
            observeObject(provider[props[i]], path.slice(), dispatcher);
        } else {
            observePrimitive(provider, props[i], path.slice(), dispatcher);
        }
    }
}

module.exports = {
    observe: observeObject
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


HTMLHeadingElement.prototype.expose = function () {
    return { text: 'innerText', color: { path: 'style.color', ui: { type: 'color' } } };
};
HTMLSpanElement.prototype.expose = function () {
    return { text: 'innerText' };
};
HTMLParagraphElement.prototype.expose = function () {
    return { text: 'innerText' };
};
HTMLImageElement.prototype.expose = function () {
    return { src: { path: 'src', attribute: true } };
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _events = __webpack_require__(1);

var _messenger = __webpack_require__(5);

var _vffData = __webpack_require__(8);

module.exports = {

    track: function track(name, data) {
        var payload = {};
        payload.name = name;
        payload.data = data;
        payload.query = _vffData.vffData.getQueryParams();
        (0, _messenger.send)(_events.TRACK_EVENT, payload);
    }
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(5);

var _events = __webpack_require__(1);

var _helpers = __webpack_require__(0);

function go(target, time) {
    (0, _messenger.send)(_events.GO, {
        target: target,
        time: time
    });
}
function crop(top, left, width, height) {
    if (top === undefined) {
        throw new Error("vff.crop incorrect usage, please pass width, height, top and left values");
    } else {
        if (height === undefined) {
            height = width;
        }
        (0, _messenger.send)(_events.CROP, left === undefined ? { crop: top } : { top: top, left: left, width: width, height: height });
    }
}

function transform(fromTopLeftX, fromTopLeftY, fromBottomRightX, fromBottomRightY, toTopLeftX, toTopLeftY, toBottomRightX, toBottomRightY, options) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var arg = _step.value;

            if (arg === undefined) {
                throw new Error("vff.transform incorrect usage, please pass fromTopLeftX, fromTopLeftY, fromBottomRightX, fromBottomRightY, toTopLeftX, toTopLeftY, toBottomRightX and toBottomRightY values");
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    (0, _messenger.send)(_events.TRANSFORM, { fromTopLeftX: fromTopLeftX, fromTopLeftY: fromTopLeftY, fromBottomRightX: fromBottomRightX, fromBottomRightY: fromBottomRightY, toTopLeftX: toTopLeftX, toTopLeftY: toTopLeftY, toBottomRightX: toBottomRightX, toBottomRightY: toBottomRightY, options: options });
}
var transformFunctions = {};
(0, _helpers.overlaod)(transformFunctions, 'transform', function () {
    transform();
});
(0, _helpers.overlaod)(transformFunctions, 'transform', function (x0, y0, x1, y1) {
    transform(x0, y0, x1, y1, 0, 0, 1, 1, {});
});
(0, _helpers.overlaod)(transformFunctions, 'transform', function (x0, y0, x1, y1, options) {
    transform(x0, y0, x1, y1, 0, 0, 1, 1, options);
});
(0, _helpers.overlaod)(transformFunctions, 'transform', function (x0, y0, x1, y1, x00, y00, x11, y11) {
    transform(x0, y0, x1, y1, x00, y00, x11, y11, {});
});
(0, _helpers.overlaod)(transformFunctions, 'transform', function (x0, y0, x1, y1, x00, y00, x11, y11, options) {
    transform(x0, y0, x1, y1, x00, y00, x11, y11, options);
});

function switchAudioTrack(channel) {
    (0, _messenger.send)(_events.AUDIO_TRACK, channel);
}

module.exports = {
    go: go,
    crop: crop,
    transform: transformFunctions.transform,
    audioTrack: switchAudioTrack,
    videoTransform: crop,
    next: _helpers.noop,
    previous: _helpers.noop,
    home: _helpers.noop
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(46);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(47);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var currentTime = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', new Promise(function (resolve) {
                            (0, _messenger.request)('vff-current-time', {}, function (res) {
                                var time = res.payload.currentTime;
                                try {
                                    time = parseFloat(res.payload.currentTime).toFixed(3);
                                } catch (e) {
                                    time = 0;
                                }
                                resolve(time);
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function currentTime() {
        return _ref.apply(this, arguments);
    };
}();

var _events = __webpack_require__(1);

var _messenger = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {update} from '../controllerDOM';
function upload(asset, cb) {
    (0, _messenger.request)(_events.UPLOAD, { asset: { name: asset.name, type: asset.type } }, function (res) {
        cb(res.payload);
    });
}

function go(time) {
    (0, _messenger.send)('vff-video-go', { time: time });
}

module.exports = {
    // update,
    upload: upload,
    currentTime: currentTime,
    go: go
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(5);

var _helpers = __webpack_require__(0);

var _events = __webpack_require__(1);

var api = {};

Object.defineProperty(api, 'currentTime', {
    get: function get() {
        return window.vff._playerStatus.timecode;
    }
});

Object.defineProperty(api, 'src', {
    get: function get() {
        return window.vff._playerStatus.src;
    }
});

Object.defineProperty(api, 'duration', {
    get: function get() {
        return window.vff._playerStatus.duration;
    }
});

Object.defineProperty(api, 'paused', {
    get: function get() {
        return window.vff._playerStatus.paused;
    }
});

Object.defineProperty(api, 'muted', {
    get: function get() {
        return window.vff._playerStatus.muted;
    }
});

api.play = function () {
    (0, _messenger.send)('vff-play');
};

api.pause = function () {
    (0, _messenger.send)('vff-pause');
};

api.goTo = function () {
    (0, _messenger.send)('taco-go', {});
};

api.onTimeUpdate = function (fn) {
    (0, _helpers.on)(_events.VIDEO_TIME_UPDATE, fn);
};

/*
-- isPlaying //(paused)
-- currentTime
-- length //(duration)
gotTo(time, play)
-- play()
-- pause()
onProgress //timeupdate
onsStateChange(state=>{})
-- src
 */

module.exports = { api: api };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

function get(url, callback) {
    var deferred = (0, _helpers.defer)();
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        //TODO handle reject on callback
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                if (callback) {
                    callback(xmlHttp.responseText);
                }
                deferred.resolve(xmlHttp.responseText);
            } else {
                deferred.reject(xmlHttp.status);
            }
        }
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
    return deferred.promise;
}

module.exports = {
    get: get

};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    // Stores the Y position where the touch started
    var startY = 0;

    // Store enabled status
    var enabled = false;

    var supportsPassiveOption = false;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
                supportsPassiveOption = true;
            }
        });
        window.addEventListener('test', null, opts);
    } catch (e) {
        //
    }

    var handleTouchmove = function handleTouchmove(evt) {
        // Get the element that was scrolled upon
        var el = evt.target;

        // Allow zooming
        var zoom = window.innerWidth / window.document.documentElement.clientWidth;
        if (evt.touches.length > 1 || zoom !== 1) {
            return;
        }

        // Check all parent elements for scrollability
        while (el !== document.body && el !== document) {
            // Get some style properties
            var style = window.getComputedStyle(el);

            if (!style) {
                // If we've encountered an element we can't compute the style for, get out
                break;
            }

            // Ignore range input element
            if (el.nodeName === 'INPUT' && el.getAttribute('type') === 'range') {
                return;
            }

            //let scrolling = style.getPropertyValue('-webkit-overflow-scrolling');
            var overflowY = style.getPropertyValue('overflow-y');
            var height = parseInt(style.getPropertyValue('height'), 10);

            // Determine if the element should scroll
            //let isScrollable = scrolling === 'touch' && (overflowY === 'auto' || overflowY === 'scroll');
            var isScrollable = overflowY === 'auto' || overflowY === 'scroll';
            var canScroll = el.scrollHeight > el.offsetHeight;

            if (isScrollable && canScroll) {
                // Get the current Y position of the touch
                var curY = evt.touches ? evt.touches[0].screenY : evt.screenY;

                // Determine if the user is trying to scroll past the top or bottom
                // In this case, the window will bounce, so we have to prevent scrolling completely
                var isAtTop = startY <= curY && el.scrollTop === 0;
                var isAtBottom = startY >= curY && el.scrollHeight - el.scrollTop === height;

                // Stop a bounce bug when at the bottom or top of the scrollable element
                if (isAtTop || isAtBottom) {
                    evt.preventDefault();
                }

                // No need to continue up the DOM, we've done our job
                return;
            }

            // Test the next parent
            el = el.parentNode;
        }

        // Stop the bouncing -- no parents are scrollable
        evt.preventDefault();
    };

    var handleTouchstart = function handleTouchstart(evt) {
        // Store the first Y position of the touch
        startY = evt.touches ? evt.touches[0].screenY : evt.screenY;
    };

    var enable = function enable() {
        // Listen to a couple key touch events

        if (scrollSupport) {
            window.addEventListener('touchstart', handleTouchstart, supportsPassiveOption ? { passive: false } : false);
            window.addEventListener('touchmove', handleTouchmove, supportsPassiveOption ? { passive: false } : false);
            enabled = true;
        }
    };

    var disable = function disable() {
        // Stop listening
        window.removeEventListener('touchstart', handleTouchstart, false);
        window.removeEventListener('touchmove', handleTouchmove, false);
        enabled = false;
    };

    var isEnabled = function isEnabled() {
        return enabled;
    };

    // Enable by default if the browser supports -webkit-overflow-scrolling
    // Test this by setting the property with JavaScript on an element that exists in the DOM
    // Then, see if the property is reflected in the computed style
    var testDiv = document.createElement('div');
    document.documentElement.appendChild(testDiv);
    testDiv.style.WebkitOverflowScrolling = 'touch';
    var scrollSupport = 'getComputedStyle' in window && window.getComputedStyle(testDiv)['-webkit-overflow-scrolling'] === 'touch';
    document.documentElement.removeChild(testDiv);

    // A module to support enabling/disabling iNoBounce
    var noOverScroll = {
        enable: enable,
        disable: disable,
        isEnabled: isEnabled
    };

    if (typeof module !== 'undefined' && module.exports) {
        // Node.js Support
        module.exports = noOverScroll;
    }
})();

/***/ })
/******/ ]);
});
//# sourceMappingURL=vff.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
                } else if (_typeof(y[p]) !== _typeof(x[p])) {
                    return false;
                }

                switch (_typeof(x[p])) {
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

function query(collection, query) {
    var found = [];
    collection.forEach(function (item) {
        var match = true;
        for (var key in query) {
            if (query[key] !== item[key]) {
                //TODO handle case sensitivity
                match = false;
            }
        }
        if (match) {
            found.push(item);
        }
    });
    return found;
}
function queryOne(collection, q) {
    var found = query(collection, q);
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

    // Replace ":" with "@colon@" if it's between single-quotes
    .replace(/:\s*'([^']*)'/g, function (match, p1) {
        return ': "' + p1.replace(/:/g, '@colon@') + '"';
    })

    // Add double-quotes around any tokens before the remaining ":"
    .replace(/(['"])?([a-z0-9A-Z_]+)(['"])?\s*:/g, '"$2": ')

    // Turn "@colon@" back into ":"
    .replace(/@colon@/g, ':'));
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
    parseRJSON: parseRJSON
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "READY": "taco-ready",
    "GO": "taco-go",
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

    "INTERACTION": "vff-interaction",
    "TOUCH": "taco-touch-element",
    "MOUSE_MOVE": "taco-mouse-move",
    "BUBBLE_UP": "taco-bubble-up",

    "PAGES_UPDATE": "vff-pages-update"
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vffData = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(1);

var _helpers = __webpack_require__(0);

var _messenger = __webpack_require__(3);

var _docRefs = __webpack_require__(11);

var _consts = __webpack_require__(4);

var _vffControl = __webpack_require__(12);

var _vffControl2 = _interopRequireDefault(_vffControl);

var _vffEvent = __webpack_require__(6);

var _vffEvent2 = _interopRequireDefault(_vffEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ADD_CONTROL_TIMEOUT = 3000;

var DEFAULT_ON_OPTIONS = {
    throttle: true,
    changeOnly: true
};

var VffData = function () {
    function VffData() {
        _classCallCheck(this, VffData);

        this._controls = [];
        this._pages = [];
        this._pagesDefer = (0, _helpers.defer)();
        this._registerControlTimeouts = {};
        this._listeners = {};
        this._readyCallbacks = [];
        this._timeouts = new WeakMap();
    }

    _createClass(VffData, [{
        key: 'registerControl',
        value: function registerControl(name, value, options) {
            var _this = this;

            if (arguments.length < 2) {
                //TODO change ref
                throw new Error('Missing Arguments, please refer to: ' + (0, _helpers.docRef)(_docRefs.REGISTER_TEMPLATE));
            }

            var control = new _vffControl2.default(name, value, options);
            var existingControl = (0, _helpers.queryOne)(this._controls, { _group: control.getGroup(), _name: control.getName() });
            if (existingControl) {
                existingControl.updateValue(value);
            } else {
                this._controls.push(control);
            }

            clearTimeout(this._registerControlTimeouts[control.getGroup()]);
            this._registerControlTimeouts[control.getGroup()] = setTimeout(function () {
                var controls = (0, _helpers.filter)(_this._controls, function (c) {
                    return c.getGroup() === control.getGroup();
                });

                var data = {};
                controls.forEach(function (control) {
                    Object.assign(data, control.getValueObject());
                });

                (0, _messenger.send)(_events.ADD, {
                    channel: control.getGroup(),
                    options: options,
                    data: data
                });
            }, ADD_CONTROL_TIMEOUT);

            return control;
        }
    }, {
        key: 'registerControls',
        value: function registerControls(object, options) {
            for (var name in object) {
                if (object.hasOwnProperty(name)) {
                    var value = object[name];
                    var opts = Object.assign({}, options);

                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.ui) {
                        opts.ui = value.ui;
                        value = value.value !== undefined ? value.value : value.ui.value;
                    }

                    this.registerControl(name, value, opts);
                }
            }
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
            return Promise.resolve(false);
        }
    }, {
        key: 'updateControl',
        value: function updateControl(name, value) {
            var control = this.getControl(name);
            if (control) {
                return control.updateValue(value);
            }
        }
    }, {
        key: 'getControl',
        value: function getControl(name) {
            if (!name) {
                //TODO correct ref
                throw new Error('Missing Arguments, please refer to: ' + (0, _helpers.docRef)(_docRefs.REGISTER_TEMPLATE));
            }
            var parts = name.split(_consts.NAMESPACE_DELIMITER);
            if (parts.length > 1) {
                return (0, _helpers.queryOne)(this._controls, { _name: parts[parts.length - 1], _group: parts.slice(0, -1).join(_consts.NAMESPACE_DELIMITER) });
            } else {
                return (0, _helpers.queryOne)(this._controls, { _name: name });
            }
        }
    }, {
        key: 'getControls',
        value: function getControls(namespace) {
            if (!namespace) {
                return this._controls;
            }
            var parts = namespace.split(_consts.NAMESPACE_DELIMITER);
            if (parts.length > 1) {
                return (0, _helpers.query)(this._controls, { _name: parts[parts.length - 1], _group: parts.slice(0, -1).join(_consts.NAMESPACE_DELIMITER) });
            } else {
                var controls = (0, _helpers.query)(this._controls, { _group: parts[0] });
                if (!controls.length) {
                    controls = (0, _helpers.query)(this._controls, { _name: parts[0] });
                }
                return controls;
            }
        }
    }, {
        key: 'getControlsData',
        value: function getControlsData(namespace) {
            var data = {};
            var controls = this.getControls(namespace);
            controls.forEach(function (control) {
                var name = control.getNamespace().substr(namespace.length);
                if (name.startsWith(_consts.NAMESPACE_DELIMITER)) name = name.substr(1);
                if (name) {
                    data[name] = control.getValue();
                } else {
                    data = control.getValue();
                }
            });
            return data;
        }
    }, {
        key: 'on',
        value: function on(namespace, cb, options) {
            var _this2 = this;

            options = Object.assign({}, DEFAULT_ON_OPTIONS, options || {});
            //TODO handle no namespace
            (0, _helpers.on)(_events.VFF_EVENT + namespace, function (event) {
                if (!options.changeOnly || event.dataChanged) {
                    _this2._runCallback(cb, options, new _vffEvent2.default({
                        timecode: event.timecode,
                        changed: event.dataChanged,
                        data: _this2.getControlsData(namespace)
                    }));
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
            this._registerControlTimeouts = {};
            this._listeners = {};
            this._timeouts = new WeakMap();
        }
    }, {
        key: '_runCallback',
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
/* 3 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 4 */
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
        OPTIONS: "vff-options"
    },
    MODE: {
        NORMAL: "normal",
        PREVIEW: "controller-preview",
        PROGRAM: "controller-program"
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Interval = __webpack_require__(39);

var BasicClock = function (_HTMLElement) {
    _inherits(BasicClock, _HTMLElement);

    function BasicClock() {
        _classCallCheck(this, BasicClock);

        var _this = _possibleConstructorReturn(this, (BasicClock.__proto__ || Object.getPrototypeOf(BasicClock)).call(this));

        var self = _this;
        _this._time = _this.init();
        _this.running = false;
        _this._visibility = true;
        _this.interval = new Interval(function (interval) {
            self.onInterval(interval);
            self._update();
        });
        return _this;
    }

    _createClass(BasicClock, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.style.display = 'block';
            this.innerHTML = this._time;
            if (this.autorun) {
                this.start();
            }
            this._update();
        }
    }, {
        key: '_update',
        value: function _update() {
            this.innerHTML = this.format(this._time);
        }
    }, {
        key: 'start',
        value: function start() {
            this.interval.start();
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.interval.stop();
        }
    }, {
        key: 'set',
        value: function set(time) {
            this._time = time;
        }
    }, {
        key: 'get',
        value: function get() {
            return this._time;
        }
    }, {
        key: 'format',
        value: function format() {
            return this._time;
        }
    }, {
        key: 'init',
        value: function init() {
            return 0;
        }
    }, {
        key: 'onInterval',
        value: function onInterval(i) {
            this._time += i;
        }
    }, {
        key: 'expose',
        value: function expose() {
            return {
                visibility: 'show',
                run: 'run'
            };
        }
    }, {
        key: 'options',
        value: function options() {
            return {
                updateOn: 'control'
            };
        }
    }, {
        key: 'autorun',
        get: function get() {
            return this.getAttribute("autorun") === 'true' || this.getAttribute("autorun") === '';
        }
    }, {
        key: 'run',
        get: function get() {
            return this.running;
        },
        set: function set(value) {
            this.running = value;
            this.running ? this.start() : this.stop();
            this.dispatchEvent(new Event(value ? "start" : "stop"));
        }
    }, {
        key: 'show',
        get: function get() {
            return this._visibility;
        },
        set: function set(value) {
            this._visibility = value;
            this.style.display = value ? 'block' : 'none';
        }
    }]);

    return BasicClock;
}(HTMLElement);

exports.default = BasicClock;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VFFEvent = function VFFEvent(data) {
    _classCallCheck(this, VFFEvent);

    //namespace, data, timecode, changed
    Object.assign(this, data);
};

exports.default = VFFEvent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xpath = __webpack_require__(16);

var _messenger = __webpack_require__(3);

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
    if (window.webrtc) {
        window.webrtc.send(msg);
    }
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(3);

var _vffSetup = __webpack_require__(10);

var _events = __webpack_require__(1);

var _vffData = __webpack_require__(2);

var _listener = __webpack_require__(13);

var _initDOM = __webpack_require__(21);

var _vffElement = __webpack_require__(22);

var _vffElement2 = _interopRequireDefault(_vffElement);

__webpack_require__(24);

__webpack_require__(25);

var _helpers = __webpack_require__(0);

var _events2 = __webpack_require__(42);

var eventsApi = _interopRequireWildcard(_events2);

var _player = __webpack_require__(43);

var playerApi = _interopRequireWildcard(_player);

var _visibility = __webpack_require__(44);

var visibilityApi = _interopRequireWildcard(_visibility);

var _http = __webpack_require__(45);

var httpApi = _interopRequireWildcard(_http);

var _interactionEvents = __webpack_require__(7);

var _consts = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _listener.start)();
(0, _initDOM.init)();

window.addEventListener('load', function () {
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

vff.onUpdate = function (cb) {
    return _vffData.vffData.onUpdate(cb);
};
vff.getPages = function () {
    return _vffData.vffData.getPages();
};
vff.onPages = function (cb) {
    return _vffData.vffData.onPages(cb);
};
vff.on = function (namespace, cb) {
    return _vffData.vffData.on(namespace, cb);
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
vff.mode = _consts.MODE.NORMAL;
vff.MODE = _consts.MODE; //Enum
vff.defer = _helpers.defer;
vff.extend = function (name, extension) {
    vff[name] = extension;
};
vff.define = function (name, element) {
    customElements.define(name, element);
};
vff.uuid = (0, _helpers.uuid)();
vff.sync = function (element) {
    (0, _interactionEvents.bindSyncEvents)(element);
};

(0, _helpers.extend)(vff, playerApi);
(0, _helpers.extend)(vff, visibilityApi);
(0, _helpers.extend)(vff, eventsApi);

vff.extend('http', httpApi);

module.exports = vff;

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(3);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "REGISTER_TEMPLATE": 'register-template'
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

var _consts = __webpack_require__(4);

var _messenger = __webpack_require__(3);

var _events = __webpack_require__(1);

var _vffData = __webpack_require__(2);

var _vffEvent = __webpack_require__(6);

var _vffEvent2 = _interopRequireDefault(_vffEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_OPTIONS = {
    group: _consts.DEFAULT_GROUP_NAME,
    global: false,
    bindTo: undefined
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
        _classCallCheck(this, VFFControl);

        var group = void 0;
        var parts = name.split(_consts.NAMESPACE_DELIMITER);
        if (parts.length > 1) {
            name = parts[parts.length - 1];
            group = parts.slice(0, -1).join('.');
        }

        this._name = name;
        this._options = Object.assign({}, DEFAULT_OPTIONS, options || {});
        if (group) this._options.group = group;
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

    _createClass(VFFControl, [{
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
            return this.getGroup() + '.' + this.getName();
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
                    _this3._value = value;
                    _this3._updateBoundElements();
                    _this3._runListeners(valueChanged);
                    resolve(valueChanged);
                }, reject);
            });
        }
    }, {
        key: "updateValue",
        value: function updateValue(value) {
            if (value && value.value) {
                value = value.value;
            }
            var valueChanged = !(0, _helpers.deepCompare)(this._value, value);
            this._value = value;
            this._updateBoundElements();
            this._runListeners(valueChanged);

            (0, _messenger.send)(_events.USER_UPDATE, _defineProperty({}, this.getGroup(), this.getValueObject()));
            return valueChanged;
        }
    }, {
        key: "getValueObject",
        value: function getValueObject() {
            var data = void 0;
            if (this.getOptions().ui && _typeof(this.getOptions().ui.type)) {
                data = _defineProperty({}, this.getName(), {
                    ui: this.getOptions().ui.type,
                    options: this.getOptions().ui.options,
                    value: this.getValue(),
                    label: this.getOptions().ui.label,
                    config: this.getOptions().ui.config
                });
            } else {
                data = _defineProperty({}, this.getName(), this.getValue());
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
            var group = this.getGroup() === DEFAULT_OPTIONS.group ? '' : this.getGroup() + _consts.NAMESPACE_DELIMITER;
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _handlers = __webpack_require__(14);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _updateHandler = __webpack_require__(15);

var _pagesHandler = __webpack_require__(17);

var _queryParamsHandler = __webpack_require__(18);

var _reloadHandler = __webpack_require__(19);

var _vfDataHandler = __webpack_require__(20);

var events = __webpack_require__(1);


var handlers = {};
handlers[events.UPDATE] = _updateHandler.update;
handlers[events.PAGES] = _pagesHandler.pages;
handlers[events.QUERY_PARAMS] = _queryParamsHandler.queryParams;
handlers[events.RELOAD] = _reloadHandler.reload;
handlers[events.VF_DATA] = _vfDataHandler.handleVFData;

module.exports = handlers;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

var _vffData = __webpack_require__(2);

var _interactionEvents = __webpack_require__(7);

var _events = __webpack_require__(1);

var _consts = __webpack_require__(4);

function update(data) {
    var timecode = void 0,
        globalChange = false,
        promises = [],
        templateChange = {};
    return new Promise(function (resolve, reject) {
        var _loop = function _loop(templateName) {
            var _loop2 = function _loop2(key) {
                if (key !== _consts.TIMECODE) {
                    if (!timecode) timecode = data[templateName].__timecode__;
                    promises.push(new Promise(function (resolve, reject) {
                        var controlName = '' + templateName + _consts.NAMESPACE_DELIMITER + key;

                        _vffData.vffData._updateControl(controlName, data[templateName][key], { timecode: timecode }).then(function (controlChange) {
                            templateChange[templateName] = controlChange || templateChange[templateName];
                            globalChange = controlChange || globalChange;
                            (0, _helpers.broadcast)(controlName, { dataChanged: controlChange, timecode: timecode });
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
                (0, _helpers.broadcast)(_events.VFF_EVENT + templateName, { dataChanged: templateChange[templateName], timecode: timecode });
            }
            (0, _helpers.broadcast)(_events.VFF_EVENT, { dataChanged: globalChange, timecode: timecode });
            resolve();
        }, reject);
    });
}

function updateInteraction(data) {
    for (var event in data) {
        if ((0, _interactionEvents.isInteractionEvent)(event)) {
            (0, _interactionEvents.dispatchEvent)(event, data[event]);
        }
    }
}

module.exports = {
    update: update,
    updateInteraction: updateInteraction
};

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vffData = __webpack_require__(2);

function pages(data) {
    _vffData.vffData.addPages(data);
}

module.exports = {
    pages: pages
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vffData = __webpack_require__(2);

function queryParams(data) {
    _vffData.vffData.addQueryParams(data);
}

module.exports = {
    queryParams: queryParams
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function reload() {
    window.location.reload();
}

module.exports = {
    reload: reload
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vffData = __webpack_require__(2);

function handleVFData(data) {
    // if(data.settings.sync && !window.webrtc) {
    // window.webrtc.close();
    // window.webrtc = new WebRTC(data.token, 'sync', {
    //     onMessage: function (message) {
    //         updateInteraction(message);
    //     }
    // });
    // }
    if (data.mode) {
        window.vff.mode = data.mode;
    }

    _vffData.vffData.onReady();
} // import {updateInteraction} from './updateHandler';
// import WebRTC from '../webrtc/webrtc';


module.exports = {
    handleVFData: handleVFData
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _helpers = __webpack_require__(0);

var _vffData = __webpack_require__(2);

var _consts = __webpack_require__(4);

// import {bindSyncEvents} from './interactionEvents';


function initDOM() {
    var controls = document.querySelectorAll('[' + _consts.ATTRIBUTE.CONTROL + ']');
    controls.forEach(function (control) {

        var name = control.getAttribute(_consts.ATTRIBUTE.CONTROL);
        control.setAttribute(_consts.ATTRIBUTE.BIND, name);

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

        var exposed = control.expose ? control.expose() : {};

        for (var prop in exposed) {
            if (exposed.hasOwnProperty(prop)) {

                var path = exposed[prop],
                    ui = void 0,
                    attribute = void 0;
                if (_typeof(exposed[prop]) === 'object') {
                    path = exposed[prop].path;
                    ui = exposed[prop].ui;
                    attribute = exposed[prop].attribute;
                }

                _vffData.vffData.registerControl(name + _consts.EXPOSE_DELIMITER + prop, attribute ? control.getAttribute(path) : (0, _helpers.getByPath)(control, path), Object.assign({ bindTo: path, ui: ui, attribute: attribute }, options));
            }
        }
        if (control instanceof HTMLTextAreaElement || control instanceof HTMLInputElement) {
            _vffData.vffData.registerControl(name, control.value);
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

// function closest(element, selector){
//
//     while (element) {
//         if (element.matches(selector)) {
//             return element;
//         }
//         element = element.parentElement;
//     }
//
// }
//
// function initSync(){
//     let elements = document.querySelectorAll('[vff-sync]');
//     elements.forEach((element) => {
//         bindSyncEvents(element);
//     });
// }


module.exports = {
    init: function init() {
        window.addEventListener('load', function () {
            initDOM();
        });
    },
    _init: initDOM
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _htmlAccessorObserver = __webpack_require__(23);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VffElement = function () {
    function VffElement(selector) {
        _classCallCheck(this, VffElement);

        this.selector = selector;
        this.element = null;
        this._init();
        this._observe();
    }

    _createClass(VffElement, [{
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
        key: 'onChange',
        value: function onChange() {
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _helpers = __webpack_require__(0);

function getExposed(provider, prop) {
    if (provider.expose) {
        return _typeof(provider.expose()[prop]) === 'object' ? provider.expose()[prop].path : provider.expose()[prop];
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

        if (_typeof(provider[props[i]]) === 'object') {
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


HTMLHeadingElement.prototype.expose = function () {
    return { text: 'innerText', color: { path: 'style.color' } };
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(27);

var _emoji = __webpack_require__(28);

var _emoji2 = _interopRequireDefault(_emoji);

var _dragArea = __webpack_require__(29);

var _dragArea2 = _interopRequireDefault(_dragArea);

var _telestratorElement = __webpack_require__(30);

var _telestratorElement2 = _interopRequireDefault(_telestratorElement);

var _clockSimple = __webpack_require__(36);

var _clockSimple2 = _interopRequireDefault(_clockSimple);

var _systemClock = __webpack_require__(38);

var _systemClock2 = _interopRequireDefault(_systemClock);

var _countdown = __webpack_require__(40);

var _countdown2 = _interopRequireDefault(_countdown);

var _stopwatch = __webpack_require__(41);

var _stopwatch2 = _interopRequireDefault(_stopwatch);

var _basicClock = __webpack_require__(5);

var _basicClock2 = _interopRequireDefault(_basicClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function define(name, element) {
    customElements.define(name, element);
}

define('drag-area', _dragArea2.default);
define('my-element', _emoji2.default);
define('telestrator-element', _telestratorElement2.default);
define('clock-element', _clockSimple2.default);
define('system-clock', _systemClock2.default);
define('countdown-clock', _countdown2.default);
define('stopwatch-clock', _stopwatch2.default);
define('basic-clock', _basicClock2.default);

// function isDefined(name) {
//     return document.createElement(name).constructor !== HTMLElement;
// }

/***/ }),
/* 26 */
/***/ (function(module, exports) {

(function(){
    'use strict';var h=new function(){};var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function m(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return!a&&b}function n(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}
    function p(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}
    function t(b,a,c){c=c?c:new Set;for(var d=b;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;a(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)t(d,a,c);d=p(b,e);continue}else if("template"===f){d=p(b,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)t(e,a,c)}d=d.firstChild?d.firstChild:p(b,d)}}function u(b,a,c){b[a]=c};function v(){this.a=new Map;this.s=new Map;this.f=[];this.b=!1}function ba(b,a,c){b.a.set(a,c);b.s.set(c.constructor,c)}function w(b,a){b.b=!0;b.f.push(a)}function x(b,a){b.b&&t(a,function(a){return y(b,a)})}function y(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var c=0;c<b.f.length;c++)b.f[c](a)}}function z(b,a){var c=[];t(a,function(b){return c.push(b)});for(a=0;a<c.length;a++){var d=c[a];1===d.__CE_state?b.connectedCallback(d):A(b,d)}}
    function B(b,a){var c=[];t(a,function(b){return c.push(b)});for(a=0;a<c.length;a++){var d=c[a];1===d.__CE_state&&b.disconnectedCallback(d)}}
    function C(b,a,c){c=c?c:{};var d=c.w||new Set,e=c.i||function(a){return A(b,a)},f=[];t(a,function(a){if("link"===a.localName&&"import"===a.getAttribute("rel")){var c=a.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:a.addEventListener("load",function(){var c=a.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);C(b,c,{w:f,i:e})}})}else f.push(a)},d);if(b.b)for(a=0;a<
    f.length;a++)y(b,f[a]);for(a=0;a<f.length;a++)e(f[a])}
    function A(b,a){if(void 0===a.__CE_state){var c=a.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=b.a.get(a.localName)){c.constructionStack.push(a);var d=c.constructor;try{try{if(new d!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(r){throw a.__CE_state=2,r;}a.__CE_state=1;a.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
        f=a.getAttribute(e);null!==f&&b.attributeChangedCallback(a,e,null,f,null)}n(a)&&b.connectedCallback(a)}}}v.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};v.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};
    v.prototype.attributeChangedCallback=function(b,a,c,d,e){var f=b.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(a)&&f.attributeChangedCallback.call(b,a,c,d,e)};function D(b,a){this.c=b;this.a=a;this.b=void 0;C(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function E(b){b.b&&b.b.disconnect()}D.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||E(this);for(a=0;a<b.length;a++)for(var c=b[a].addedNodes,d=0;d<c.length;d++)C(this.c,c[d])};function ca(){var b=this;this.b=this.a=void 0;this.f=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function F(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function G(b){this.j=!1;this.c=b;this.o=new Map;this.l=function(b){return b()};this.g=!1;this.m=[];this.u=new D(b,document)}
    G.prototype.define=function(b,a){var c=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!m(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(this.c.a.get(b))throw Error("A custom element with name '"+b+"' has already been defined.");if(this.j)throw Error("A custom element is already being defined.");this.j=!0;var d,e,f,r,k;try{var g=function(b){var a=l[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
        return a},l=a.prototype;if(!(l instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");d=g("connectedCallback");e=g("disconnectedCallback");f=g("adoptedCallback");r=g("attributeChangedCallback");k=a.observedAttributes||[]}catch(q){return}finally{this.j=!1}a={localName:b,constructor:a,connectedCallback:d,disconnectedCallback:e,adoptedCallback:f,attributeChangedCallback:r,observedAttributes:k,constructionStack:[]};ba(this.c,b,a);this.m.push(a);this.g||
    (this.g=!0,this.l(function(){return da(c)}))};G.prototype.i=function(b){C(this.c,b)};function da(b){if(!1!==b.g){b.g=!1;for(var a=b.m,c=[],d=new Map,e=0;e<a.length;e++)d.set(a[e].localName,[]);C(b.c,document,{i:function(a){if(void 0===a.__CE_state){var e=a.localName,f=d.get(e);f?f.push(a):b.c.a.get(e)&&c.push(a)}}});for(e=0;e<c.length;e++)A(b.c,c[e]);for(;0<a.length;){for(var f=a.shift(),e=f.localName,f=d.get(f.localName),r=0;r<f.length;r++)A(b.c,f[r]);(e=b.o.get(e))&&F(e)}}}
    G.prototype.get=function(b){if(b=this.c.a.get(b))return b.constructor};G.prototype.whenDefined=function(b){if(!m(b))return Promise.reject(new SyntaxError("'"+b+"' is not a valid custom element name."));var a=this.o.get(b);if(a)return a.f;a=new ca;this.o.set(b,a);this.c.a.get(b)&&!this.m.some(function(a){return a.localName===b})&&F(a);return a.f};G.prototype.v=function(b){E(this.u);var a=this.l;this.l=function(c){return b(function(){return a(c)})}};window.CustomElementRegistry=G;
    G.prototype.define=G.prototype.define;G.prototype.upgrade=G.prototype.i;G.prototype.get=G.prototype.get;G.prototype.whenDefined=G.prototype.whenDefined;G.prototype.polyfillWrapFlushCallback=G.prototype.v;var H=window.Document.prototype.createElement,I=window.Document.prototype.createElementNS,ea=window.Document.prototype.importNode,fa=window.Document.prototype.prepend,ga=window.Document.prototype.append,ha=window.DocumentFragment.prototype.prepend,ia=window.DocumentFragment.prototype.append,J=window.Node.prototype.cloneNode,K=window.Node.prototype.appendChild,L=window.Node.prototype.insertBefore,M=window.Node.prototype.removeChild,N=window.Node.prototype.replaceChild,O=Object.getOwnPropertyDescriptor(window.Node.prototype,
        "textContent"),P=window.Element.prototype.attachShadow,Q=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),R=window.Element.prototype.getAttribute,S=window.Element.prototype.setAttribute,T=window.Element.prototype.removeAttribute,U=window.Element.prototype.getAttributeNS,ja=window.Element.prototype.setAttributeNS,ka=window.Element.prototype.removeAttributeNS,la=window.Element.prototype.insertAdjacentElement,ma=window.Element.prototype.insertAdjacentHTML,na=window.Element.prototype.prepend,
        oa=window.Element.prototype.append,V=window.Element.prototype.before,pa=window.Element.prototype.after,qa=window.Element.prototype.replaceWith,ra=window.Element.prototype.remove,sa=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ta=window.HTMLElement.prototype.insertAdjacentElement,ua=window.HTMLElement.prototype.insertAdjacentHTML;function va(){var b=X;window.HTMLElement=function(){function a(){var a=this.constructor,d=b.s.get(a);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(!e.length)return e=H.call(document,d.localName),Object.setPrototypeOf(e,a.prototype),e.__CE_state=1,e.__CE_definition=d,y(b,e),e;var d=e.length-1,f=e[d];if(f===h)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
        e[d]=h;Object.setPrototypeOf(f,a.prototype);y(b,f);return f}a.prototype=sa.prototype;Object.defineProperty(a.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:a});return a}()};function Y(b,a,c){function d(a){return function(c){for(var e=[],d=0;d<arguments.length;++d)e[d-0]=arguments[d];for(var d=[],f=[],l=0;l<e.length;l++){var q=e[l];q instanceof Element&&n(q)&&f.push(q);if(q instanceof DocumentFragment)for(q=q.firstChild;q;q=q.nextSibling)d.push(q);else d.push(q)}a.apply(this,e);for(e=0;e<f.length;e++)B(b,f[e]);if(n(this))for(e=0;e<d.length;e++)f=d[e],f instanceof Element&&z(b,f)}}c.h&&(a.prepend=d(c.h));c.append&&(a.append=d(c.append))};function wa(){var b=X;u(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var c=b.a.get(a);if(c)return new c.constructor}a=H.call(this,a);y(b,a);return a});u(Document.prototype,"importNode",function(a,c){a=ea.call(this,a,c);this.__CE_hasRegistry?C(b,a):x(b,a);return a});u(Document.prototype,"createElementNS",function(a,c){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var d=b.a.get(c);if(d)return new d.constructor}a=I.call(this,a,c);y(b,a);return a});
        Y(b,Document.prototype,{h:fa,append:ga})};function xa(){var b=X;function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var e=void 0;if(this.firstChild){var c=this.childNodes,k=c.length;if(0<k&&n(this))for(var e=Array(k),g=0;g<k;g++)e[g]=c[g]}d.set.call(this,a);if(e)for(a=0;a<e.length;a++)B(b,e[a])}}})}u(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);
        a=L.call(this,a,d);if(n(this))for(d=0;d<e.length;d++)z(b,e[d]);return a}e=n(a);d=L.call(this,a,d);e&&B(b,a);n(this)&&z(b,a);return d});u(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=K.call(this,a);if(n(this))for(var e=0;e<c.length;e++)z(b,c[e]);return a}c=n(a);e=K.call(this,a);c&&B(b,a);n(this)&&z(b,a);return e});u(Node.prototype,"cloneNode",function(a){a=J.call(this,a);this.ownerDocument.__CE_hasRegistry?C(b,a):x(b,a);
        return a});u(Node.prototype,"removeChild",function(a){var c=n(a),e=M.call(this,a);c&&B(b,a);return e});u(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);a=N.call(this,a,d);if(n(this))for(B(b,d),d=0;d<e.length;d++)z(b,e[d]);return a}var e=n(a),f=N.call(this,a,d),c=n(this);c&&B(b,d);e&&B(b,a);c&&z(b,a);return f});O&&O.get?a(Node.prototype,O):w(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],b=
        0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)M.call(this,this.firstChild);K.call(this,document.createTextNode(a))}})})};function ya(b){var a=Element.prototype;function c(a){return function(e){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];for(var d=[],k=[],g=0;g<c.length;g++){var l=c[g];l instanceof Element&&n(l)&&k.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)d.push(l);else d.push(l)}a.apply(this,c);for(c=0;c<k.length;c++)B(b,k[c]);if(n(this))for(c=0;c<d.length;c++)k=d[c],k instanceof Element&&z(b,k)}}V&&(a.before=c(V));V&&(a.after=c(pa));qa&&u(a,"replaceWith",function(a){for(var e=
        [],c=0;c<arguments.length;++c)e[c-0]=arguments[c];for(var c=[],d=[],k=0;k<e.length;k++){var g=e[k];g instanceof Element&&n(g)&&d.push(g);if(g instanceof DocumentFragment)for(g=g.firstChild;g;g=g.nextSibling)c.push(g);else c.push(g)}k=n(this);qa.apply(this,e);for(e=0;e<d.length;e++)B(b,d[e]);if(k)for(B(b,this),e=0;e<c.length;e++)d=c[e],d instanceof Element&&z(b,d)});ra&&u(a,"remove",function(){var a=n(this);ra.call(this);a&&B(b,this)})};function za(){var b=X;function a(a,c){Object.defineProperty(a,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){var e=this,d=void 0;n(this)&&(d=[],t(this,function(a){a!==e&&d.push(a)}));c.set.call(this,a);if(d)for(var f=0;f<d.length;f++){var r=d[f];1===r.__CE_state&&b.disconnectedCallback(r)}this.ownerDocument.__CE_hasRegistry?C(b,this):x(b,this);return a}})}function c(a,c){u(a,"insertAdjacentElement",function(a,e){var d=n(e);a=c.call(this,a,e);d&&B(b,e);n(a)&&z(b,e);
        return a})}function d(a,c){function e(a,e){for(var c=[];a!==e;a=a.nextSibling)c.push(a);for(e=0;e<c.length;e++)C(b,c[e])}u(a,"insertAdjacentHTML",function(a,b){a=a.toLowerCase();if("beforebegin"===a){var d=this.previousSibling;c.call(this,a,b);e(d||this.parentNode.firstChild,this)}else if("afterbegin"===a)d=this.firstChild,c.call(this,a,b),e(this.firstChild,d);else if("beforeend"===a)d=this.lastChild,c.call(this,a,b),e(d||this.firstChild,null);else if("afterend"===a)d=this.nextSibling,c.call(this,
        a,b),e(this.nextSibling,d);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}P&&u(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=P.call(this,a)});Q&&Q.get?a(Element.prototype,Q):W&&W.get?a(HTMLElement.prototype,W):w(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return J.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,e=b?this.content:this,
        c=I.call(document,this.namespaceURI,this.localName);for(c.innerHTML=a;0<e.childNodes.length;)M.call(e,e.childNodes[0]);for(a=b?c.content:c;0<a.childNodes.length;)K.call(e,a.childNodes[0])}})});u(Element.prototype,"setAttribute",function(a,c){if(1!==this.__CE_state)return S.call(this,a,c);var e=R.call(this,a);S.call(this,a,c);c=R.call(this,a);b.attributeChangedCallback(this,a,e,c,null)});u(Element.prototype,"setAttributeNS",function(a,c,d){if(1!==this.__CE_state)return ja.call(this,a,c,d);var e=U.call(this,
        a,c);ja.call(this,a,c,d);d=U.call(this,a,c);b.attributeChangedCallback(this,c,e,d,a)});u(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return T.call(this,a);var c=R.call(this,a);T.call(this,a);null!==c&&b.attributeChangedCallback(this,a,c,null,null)});u(Element.prototype,"removeAttributeNS",function(a,c){if(1!==this.__CE_state)return ka.call(this,a,c);var d=U.call(this,a,c);ka.call(this,a,c);var e=U.call(this,a,c);d!==e&&b.attributeChangedCallback(this,c,d,e,a)});ta?c(HTMLElement.prototype,
        ta):la?c(Element.prototype,la):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");ua?d(HTMLElement.prototype,ua):ma?d(Element.prototype,ma):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Y(b,Element.prototype,{h:na,append:oa});ya(b)};/*
     Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var X=new v;va();wa();Y(X,DocumentFragment.prototype,{h:ha,append:ia});xa();za();document.__CE_hasRegistry=!0;var customElements=new G(X);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};
}).call(self);


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/* eslint-disable */
(function () {
'use strict';

(()=>{'use strict';if(!window.customElements)return;const a=window.HTMLElement,b=window.customElements.define,c=window.customElements.get,d=new Map,e=new Map;let f=!1,g=!1;window.HTMLElement=function(){if(!f){const a=d.get(this.constructor),b=c.call(window.customElements,a);g=!0;const e=new b;return e}f=!1;},window.HTMLElement.prototype=a.prototype;Object.defineProperty(window,'customElements',{value:window.customElements,configurable:!0,writable:!0}),Object.defineProperty(window.customElements,'define',{value:(c,h)=>{const i=h.prototype,j=class extends a{constructor(){super(),Object.setPrototypeOf(this,i),g||(f=!0,h.call(this)),g=!1;}},k=j.prototype;j.observedAttributes=h.observedAttributes,k.connectedCallback=i.connectedCallback,k.disconnectedCallback=i.disconnectedCallback,k.attributeChangedCallback=i.attributeChangedCallback,k.adoptedCallback=i.adoptedCallback,d.set(h,c),e.set(c,h),b.call(window.customElements,c,j);},configurable:!0,writable:!0}),Object.defineProperty(window.customElements,'get',{value:(a)=>e.get(a),configurable:!0,writable:!0});})();

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

}());

/* eslint-enable */

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyElement = function (_HTMLElement) {
    _inherits(MyElement, _HTMLElement);

    function MyElement() {
        _classCallCheck(this, MyElement);

        return _possibleConstructorReturn(this, (MyElement.__proto__ || Object.getPrototypeOf(MyElement)).call(this));
    }

    _createClass(MyElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.style.cursor = 'pointer';
            this.style.userSelect = 'none';
            this.render();

            this.addEventListener('click', this.onClick);
        }
    }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
            this.removeEventListener('click', this.onClick);
        }

        /**
         * Render the content. Will render a
         * happy face if the `happy` attribute
         * is set, sad otherwise.
         */

    }, {
        key: 'render',
        value: function render() {
            this.innerHTML = this.happy ? '&#x1f603;' : '&#x1f620;';
        }

        /**
         * Click handler. Toggles the `happy`
         * property.
         */

    }, {
        key: 'onClick',
        value: function onClick() {
            this.happy = !this.happy;
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback() {
            this.render();
        }
    }, {
        key: 'happy',
        get: function get() {
            return this.hasAttribute('happy');
        },
        set: function set(value) {
            if (value) {
                this.setAttribute('happy', '');
            } else {
                this.removeAttribute('happy');
            }
        }
    }], [{
        key: 'observedAttributes',
        get: function get() {
            return ['happy'];
        }
    }]);

    return MyElement;
}(HTMLElement);

exports.default = MyElement;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DragArea = function (_HTMLElement) {
    _inherits(DragArea, _HTMLElement);

    function DragArea() {
        _classCallCheck(this, DragArea);

        var _this = _possibleConstructorReturn(this, (DragArea.__proto__ || Object.getPrototypeOf(DragArea)).call(this));

        _this._dragging = false;
        _this._result = { x: 0, y: 0 };
        return _this;
    }

    _createClass(DragArea, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.style.cursor = 'pointer';
            this.style.userSelect = 'none';
            this.addEventListener('mousedown', this.mouseDown);
            this.addEventListener('touchstart', this.touchStart);
            this.addEventListener('mouseup', this.mouseUp);
            this.addEventListener('touchend', this.touchEnd);
            this.addEventListener('mousemove', this.mouseMove);
            this.addEventListener('touchmove', this.touchMove);
        }
    }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
            this.removeEventListener('mousedown', this.mouseDown);
            this.removeEventListener('touchstart', this.touchStart);
            this.removeEventListener('mouseup', this.mouseUp);
            this.removeEventListener('touchend', this.touchEnd);
            this.removeEventListener('mousemove', this.mouseMove);
            this.removeEventListener('touchmove', this.touchMove);
        }
    }, {
        key: 'calc',
        value: function calc(e) {
            if (this._dragging) {
                var bounds = this.getBoundingClientRect();
                var x = 0;
                var y = 0;
                if (this.mode === "screen") {
                    x = e.screenX;
                    y = e.screenY;
                } else if (this.mode === "linear") {

                    x = this.minValueX + (e.clientX - bounds.left) / bounds.width * (this.maxValueX - this.minValueX);
                    y = this.minValueY + (e.clientY - bounds.top) / bounds.height * (this.maxValueY - this.minValueY);
                } else {
                    x = e.clientX - bounds.left;
                    y = e.clientY - bounds.top;
                }

                if (this.precision === "int") {
                    x = Math.floor(x);
                    y = Math.floor(y);
                }

                this._result.x = x;
                this._result.y = y;

                // console.log(x + " : " + y);
            }
        }
    }, {
        key: 'mouseDown',
        value: function mouseDown(e) {
            this._dragging = true;
            this.calc(e);
        }
    }, {
        key: 'touchStart',
        value: function touchStart(e) {
            this._dragging = true;
            this.calc(e.originalEvent.touches[0]);
        }
    }, {
        key: 'mouseUp',
        value: function mouseUp() {
            this._dragging = false;
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd() {
            this._dragging = false;
        }
    }, {
        key: 'mouseMove',
        value: function mouseMove(e) {
            this.calc(e);
        }
    }, {
        key: 'touchMove',
        value: function touchMove(e) {
            this.calc(e.originalEvent.touches[0]);
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback() {}
    }, {
        key: 'expose',
        value: function expose() {
            return {
                xValue: {
                    path: 'result.x'
                },
                yValue: 'result.y'
            };
        }
    }, {
        key: 'isDragging',
        get: function get() {
            return this._dragging;
        }
    }, {
        key: 'result',
        get: function get() {
            return this._result;
        }
    }, {
        key: 'mode',
        get: function get() {
            return this.getAttribute("mode");
        }
    }, {
        key: 'minValueX',
        get: function get() {
            return parseInt(this.getAttribute("min-value-x"));
        }
    }, {
        key: 'minValueY',
        get: function get() {
            return parseInt(this.getAttribute("min-value-y"));
        }
    }, {
        key: 'maxValueX',
        get: function get() {
            return parseInt(this.getAttribute("max-value-x"));
        }
    }, {
        key: 'maxValueY',
        get: function get() {
            return parseInt(this.getAttribute("max-value-y"));
        }
    }, {
        key: 'precision',
        get: function get() {
            return this.getAttribute("precision");
        }
    }], [{
        key: 'observedAttributes',
        get: function get() {
            return ['result', 'mode', 'minValueX', 'minValueY', 'maxValueX', 'maxValueY', 'precision'];
        }
    }]);

    return DragArea;
}(HTMLElement);

exports.default = DragArea;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(31);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Telestrator = function (_HTMLElement) {
    _inherits(Telestrator, _HTMLElement);

    function Telestrator() {
        _classCallCheck(this, Telestrator);

        var _this = _possibleConstructorReturn(this, (Telestrator.__proto__ || Object.getPrototypeOf(Telestrator)).call(this));

        _this.clickX = [];
        _this.clickY = [];
        _this.clickDrag = [];
        _this.lastStroke = 0;
        return _this;
    }

    _createClass(Telestrator, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.innerHTML = '<canvas id="telestrator-canvas" width="1920" height="1080"></canvas>';
            this.canvas = this.querySelector('#telestrator-canvas');
            this.context = this.canvas.getContext("2d");

            this.canvas.addEventListener('mousedown', this.mouseDown);
            this.canvas.addEventListener('touchstart', this.touchStart);
            this.canvas.addEventListener('mouseup', this.mouseUp);
            this.canvas.addEventListener('touchend', this.touchEnd);
            this.canvas.addEventListener('mousemove', this.mouseMove);
            this.canvas.addEventListener('touchmove', this.touchMove);
            this.canvas.addEventListener('mouseleave', this.mouseLeave);
        }
    }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
            this.canvas.removeEventListener('mousedown', this.mouseDown);
            this.canvas.removeEventListener('touchstart', this.touchStart);
            this.canvas.removeEventListener('mouseup', this.mouseUp);
            this.canvas.removeEventListener('touchend', this.touchEnd);
            this.canvas.removeEventListener('mousemove', this.mouseMove);
            this.canvas.removeEventListener('touchmove', this.touchMove);
            this.canvas.removeEventListener('mouseleave', this.mouseLeave);
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.clickX = [];
            this.clickY = [];
            this.clickDrag = [];
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
            this.lastStroke = 0;
        }
    }, {
        key: 'addClick',
        value: function addClick(x, y, dragging) {
            this.clickX.push(x);
            this.clickY.push(y);
            this.clickDrag.push(dragging);
        }
    }, {
        key: 'redraw',
        value: function redraw() {
            this.context.strokeStyle = this.color;
            this.context.lineJoin = "round";
            this.context.lineCap = "round";
            this.context.lineWidth = this.size;

            for (var i = this.lastStroke; i < this.clickX.length; i++) {
                this.context.beginPath();
                if (this.clickDrag[i] && i) {
                    this.context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
                } else {
                    this.context.moveTo(this.clickX[i] - 1, this.clickY[i]);
                }
                this.context.lineTo(this.clickX[i], this.clickY[i]);
                this.context.closePath();
                this.context.stroke();
            }
            this.lastStroke = this.clickX.length;
        }
    }, {
        key: 'mouseDown',
        value: function mouseDown(e) {
            var bounds = this.getBoundingClientRect();
            var mouseX = (e.clientX - bounds.left) / bounds.width * this.width;
            var mouseY = (e.clientY - bounds.top) / bounds.height * this.height;

            this.parentElement.paint = true;
            this.parentElement.addClick(mouseX, mouseY);
            this.parentElement.redraw();
        }
    }, {
        key: 'touchStart',
        value: function touchStart(e) {
            var bounds = this.getBoundingClientRect();
            var mouseX = (e.originalEvent.touches[0].clientX - bounds.left) / bounds.width * this.width;
            var mouseY = (e.originalEvent.touches[0].clientY - bounds.top) / bounds.height * this.height;

            this.parentElement.paint = true;
            this.parentElement.addClick(mouseX, mouseY);
            this.parentElement.redraw();
        }
    }, {
        key: 'mouseUp',
        value: function mouseUp() {
            this.parentElement.paint = false;
            this.parentElement.context.closePath();
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd() {
            this.parentElement.paint = false;
            this.parentElement.context.closePath();
        }
    }, {
        key: 'mouseLeave',
        value: function mouseLeave() {
            this.parentElement.paint = false;
            this.parentElement.context.closePath();
        }
    }, {
        key: 'mouseMove',
        value: function mouseMove(e) {
            if (this.parentElement.paint) {
                var bounds = this.getBoundingClientRect();
                var mouseX = (e.clientX - bounds.left) / bounds.width * this.width;
                var mouseY = (e.clientY - bounds.top) / bounds.height * this.height;

                this.parentElement.addClick(mouseX, mouseY, true);
                this.parentElement.redraw();
            }
        }
    }, {
        key: 'touchMove',
        value: function touchMove(e) {
            if (this.parentElement.paint) {
                var bounds = this.getBoundingClientRect();
                var mouseX = (e.originalEvent.touches[0].clientX - bounds.left) / bounds.width * this.width;
                var mouseY = (e.originalEvent.touches[0].clientY - bounds.top) / bounds.height * this.height;

                this.parentElement.addClick(mouseX, mouseY, true);
                this.parentElement.redraw();
            }
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback() {}
    }, {
        key: 'expose',
        value: function expose() {
            return {
                Color: "color",
                Size: {
                    path: "size"
                }
            };
        }
    }, {
        key: 'color',
        get: function get() {
            return this.getAttribute("color") || 'black';
        },
        set: function set(value) {
            this.setAttribute('color', value);
        }
    }, {
        key: 'size',
        get: function get() {
            return parseInt(this.getAttribute("size")) || 5;
        },
        set: function set(value) {
            this.setAttribute('size', value);
        }
    }], [{
        key: 'observedAttributes',
        get: function get() {
            return [];
        }
    }]);

    return Telestrator;
}(HTMLElement);

exports.default = Telestrator;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(32);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(34)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./telestrator-element.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./telestrator-element.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "telestrator-element #telestrator-canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(35);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 35 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var work = __webpack_require__(37);

function createWorker() {
    var blobURL = URL.createObjectURL(new Blob(['(', work.toString(), ')()'], { type: 'application/javascript' }));
    var worker = new Worker(blobURL);
    URL.revokeObjectURL(blobURL);
    return worker;
}

var Clock = function (_HTMLElement) {
    _inherits(Clock, _HTMLElement);

    function Clock() {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this));

        var self = _this;
        _this._worker = createWorker();
        _this._time = 0 + _this.initial;
        _this._memo = _this._time;
        _this._worker.onmessage = function (e) {

            if (!self.running) {
                return;
            }

            if (self.limit >= 0 && e.data - self.interval > self.limit) {
                self.pause();
                self._time = self.limit;
                self.update();
                var event = new Event('limit-reached');
                self.dispatchEvent(event);
            } else {
                self._time = e.data;
                self.update();
            }
        };
        _this.running = false;
        return _this;
    }

    _createClass(Clock, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.innerHTML = '<div class="clock"></div>';
            this.update();
        }
    }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
            this.running = false;
        }
    }, {
        key: 'pad',
        value: function pad(num) {
            return ('0' + num).slice(-2);
        }
    }, {
        key: 'limitReached',
        value: function limitReached() {
            return this.limit >= 0 && this._time >= this.limit;
        }
    }, {
        key: 'formatTime',
        value: function formatTime() {
            return this._time;
        }
    }, {
        key: 'update',
        value: function update() {
            this.querySelector('.clock').innerHTML = this.formatTime();
        }
    }, {
        key: 'pause',
        value: function pause() {
            this._worker.postMessage({ cmd: 'pause' });
            this.running = false;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this._worker.postMessage({ cmd: 'stop' });
            this._time = this.initial;
            this.running = false;
            this.update();
        }
    }, {
        key: 'start',
        value: function start() {
            this.initial = this._time || this.initial;
            this._memo = this._time || this.initial;
            this._time = 0;
            this.running = true;
            this._worker.postMessage({ cmd: 'start', interval: this.interval, offset: this.__timecode__ || 0, initial: this._memo });
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback() {}
    }, {
        key: 'expose',
        value: function expose() {
            return {
                Run: 'run',
                Reset: 'reset',
                Initial: 'initial',
                Limit: 'limit',
                Show: 'show'
            };
        }
    }, {
        key: 'type',
        get: function get() {
            return this.getAttribute("type") || 'system';
        },
        set: function set(value) {
            this.setAttribute('type', value);
        }
    }, {
        key: 'format',
        get: function get() {
            return this.getAttribute("format") || 'hh:mm:ss';
        },
        set: function set(value) {
            this.setAttribute('format', value);
        }
    }, {
        key: 'countFrom',
        get: function get() {
            return this.getAttribute("count-from") || 60000;
        },
        set: function set(value) {
            this.setAttribute('count-from', value);
        }
    }, {
        key: 'interval',
        get: function get() {
            return parseInt(this.getAttribute("interval")) || 100;
        },
        set: function set(value) {
            this.setAttribute('interval', value);
        }
    }, {
        key: 'run',
        get: function get() {
            return this.running;
        },
        set: function set(value) {
            if (this.running !== value) {
                this.running = value;
                this.running ? this.start() : this.pause();
            }
        }
    }, {
        key: 'reset',
        get: function get() {
            return false;
        },
        set: function set(value) {
            if (value) {
                var wasRunning = this.running;
                this.stop();
                if (wasRunning) {
                    this.start();
                }
            }
        }
    }, {
        key: 'initial',
        get: function get() {
            return parseInt(this.getAttribute("initial")) || 0;
        },
        set: function set(value) {
            if (this.initial !== value) {
                this.setAttribute('initial', value);
                this._time = value;
                this.update();
            }
        }
    }, {
        key: 'limit',
        get: function get() {
            var limit = parseInt(this.getAttribute("limit"));
            return Number.isInteger(limit) ? limit : -1;
        },
        set: function set(value) {
            this.setAttribute('limit', value);
        }
    }, {
        key: 'show',
        get: function get() {
            var vis = this.getAttribute("show");
            if (vis !== null) {
                return vis === 'true';
            } else {
                return true;
            }
        },
        set: function set(value) {
            if (value) {
                this.style.visibility = 'visible';
            } else {
                this.style.visibility = 'hidden';
            }
            this.setAttribute('show', value);
        }
    }], [{
        key: 'observedAttributes',
        get: function get() {
            return [];
        }
    }]);

    return Clock;
}(HTMLElement);

exports.default = Clock;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function worker() {
    var now = Date.now || function () {
        return new Date().getTime();
    };
    var delay;
    var startedAt;
    var delayed;
    var timeoutId = null;
    var offset;

    self.onmessage = function (event) {

        var data = event.data;

        switch (data.cmd) {

            case 'stop':

                clearTimeout(timeoutId);
                timeoutId = null;
                break;
            case 'pause':
                clearTimeout(timeoutId);
                timeoutId = null;
                break;
            case 'resume':
                break;
            case 'reset':
                break;
            case 'start':

                delay = data.interval;
                offset = data.offset || 0;
                var isLive = data.offset > 100000000;
                var initial = data.initial || 0;

                startedAt = isLive ? new Date(offset - initial) : now() - initial;
                delayed = 0;
                timeoutId = self.setTimeout(tick, delay);

                break;
        }
    };

    function tick() {
        delayed += delay;
        var tickedAt = now();
        var elapsed = tickedAt - startedAt;
        var drifted = elapsed - delayed;
        self.postMessage(elapsed);
        timeoutId = self.setTimeout(tick, delay - drifted);
    }
}

module.exports = worker;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _basicClock = __webpack_require__(5);

var _basicClock2 = _interopRequireDefault(_basicClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countdown = function (_BasicClock) {
    _inherits(Countdown, _BasicClock);

    function Countdown() {
        _classCallCheck(this, Countdown);

        return _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this));
    }

    _createClass(Countdown, [{
        key: "connectedCallback",
        value: function connectedCallback() {
            _get(Countdown.prototype.__proto__ || Object.getPrototypeOf(Countdown.prototype), "connectedCallback", this).call(this);
        }
    }, {
        key: "init",
        value: function init() {
            return Date.now();
        }
    }, {
        key: "onInterval",
        value: function onInterval() {
            this.set(Date.now());
        }
    }, {
        key: "_pad",
        value: function _pad(num) {
            return ('0' + num).slice(-2);
        }
    }, {
        key: "format",
        value: function format(timestamp) {
            var seconds = parseInt(timestamp / 1000 % 60),
                minutes = parseInt(timestamp / (1000 * 60) % 60),
                hours = parseInt(timestamp / (1000 * 60 * 60) % 24),
                milliseconds = parseInt(timestamp % 1000 / 100);

            return this._pad(hours) + ":" + this._pad(minutes) + ":" + this._pad(seconds) + '.' + milliseconds;
        }
    }]);

    return Countdown;
}(_basicClock2.default);

exports.default = Countdown;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function work() {

    var now = Date.now || function () {
        return new Date().getTime();
    };
    var interval, delayed, startedAt;
    var timeoutId = null;

    self.onmessage = function (event) {
        var data = event.data;

        switch (data.cmd) {

            case 'stop':
                clearTimeout(timeoutId);
                timeoutId = null;
                break;
            case 'start':
                if (!timeoutId) {
                    interval = data.interval || 30;
                    startedAt = now();
                    delayed = 0;
                    timeoutId = self.setTimeout(tick, interval);
                }
                break;
        }
    };

    function tick() {
        delayed += interval;
        var tickedAt = now();
        var elapsed = tickedAt - startedAt;
        var drifted = elapsed - delayed;
        self.postMessage(interval);
        timeoutId = self.setTimeout(tick, interval - drifted);
    }
}

function createWorker() {
    var blobURL = URL.createObjectURL(new Blob(['(', work.toString(), ')()'], { type: 'application/javascript' }));
    var worker = new Worker(blobURL);
    URL.revokeObjectURL(blobURL);
    return worker;
}

var Interval = function () {
    function Interval(cb, options) {
        _classCallCheck(this, Interval);

        this._options = options || {};
        this._worker = createWorker();
        this._worker.onmessage = function (e) {
            cb(e.data);
        };
    }

    _createClass(Interval, [{
        key: 'start',
        value: function start() {
            this._worker.postMessage({ cmd: 'start', interval: this._options.interval });
        }
    }, {
        key: 'stop',
        value: function stop() {
            this._worker.postMessage({ cmd: 'stop', interval: this._options.interval });
        }
    }]);

    return Interval;
}();

module.exports = Interval;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _basicClock = __webpack_require__(5);

var _basicClock2 = _interopRequireDefault(_basicClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countdown = function (_BasicClock) {
    _inherits(Countdown, _BasicClock);

    function Countdown() {
        _classCallCheck(this, Countdown);

        return _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this));
    }

    _createClass(Countdown, [{
        key: "connectedCallback",
        value: function connectedCallback() {
            _get(Countdown.prototype.__proto__ || Object.getPrototypeOf(Countdown.prototype), "connectedCallback", this).call(this);
        }
    }, {
        key: "init",
        value: function init() {
            return 15000;
        }
    }, {
        key: "onInterval",
        value: function onInterval(i) {
            if (this.get() - i > 0) {
                this.set(this.get() - i);
            } else {
                this.set(0);
                this.stop();
            }
        }
    }]);

    return Countdown;
}(_basicClock2.default);

exports.default = Countdown;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _basicClock = __webpack_require__(5);

var _basicClock2 = _interopRequireDefault(_basicClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_BasicClock) {
    _inherits(Stopwatch, _BasicClock);

    function Stopwatch() {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

        _this._limit = '';
        _this._initial = '';
        _this._reset = {
            ui: 'pulse',
            value: true,
            label: 'Click to reset'
        };
        return _this;
    }

    _createClass(Stopwatch, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            _get(Stopwatch.prototype.__proto__ || Object.getPrototypeOf(Stopwatch.prototype), 'connectedCallback', this).call(this);
        }
    }, {
        key: '_pad',
        value: function _pad(num) {
            return ('0' + num).slice(-2);
        }
    }, {
        key: '_update',
        value: function _update() {
            _get(Stopwatch.prototype.__proto__ || Object.getPrototypeOf(Stopwatch.prototype), '_update', this).call(this);
            if (this._limit !== '' && this._limit > 0 && this._time >= this._limit * 1000) {
                this.run = false;
                this.dispatchEvent(new Event("limit"));
            }
        }
    }, {
        key: 'format',
        value: function format(timecode) {

            var seconds = parseInt(timecode / 1000 % 60),
                minutes = parseInt(timecode / (1000 * 60));

            return this._pad(minutes) + ":" + this._pad(seconds);
        }
    }, {
        key: 'expose',
        value: function expose() {
            var exposed = _get(Stopwatch.prototype.__proto__ || Object.getPrototypeOf(Stopwatch.prototype), 'expose', this).call(this);
            exposed['fromTime'] = "initial";
            exposed['toTime'] = "limit";
            exposed.Reset = 'reset';
            return exposed;
        }
    }, {
        key: 'limit',
        get: function get() {
            return this._limit;
        },
        set: function set(value) {
            this._limit = value;
        }
    }, {
        key: 'initial',
        get: function get() {
            return this._initial;
        },
        set: function set(value) {
            if (value !== undefined) {
                this._initial = parseInt(value) || 0;
                // this._time = this._initial;
                // this._update();
            }
        }
    }, {
        key: 'reset',
        get: function get() {
            return this._reset;
        },
        set: function set(value) {
            this._time = this._initial * 1000 || 0;
            this._update();
        }
    }]);

    return Stopwatch;
}(_basicClock2.default);

exports.default = Stopwatch;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _arguments = arguments;

var _events = __webpack_require__(1);

var _helpers = __webpack_require__(0);

var _messenger = __webpack_require__(3);

var _vffData = __webpack_require__(2);

var timeouts = {};

module.exports = {

    onEvent: function onEvent(arg1, arg2, arg3) {

        var template = void 0,
            callback = void 0,
            options = void 0;
        switch (_arguments.length) {
            case 0:
                throw new Error("onEvent was called without arguments");
            case 1:
                callback = arg1;
                break;
            default:
                if (typeof arg1 === 'string') {
                    template = arg1;
                    callback = arg2;
                    options = arg3 || {};
                } else if (typeof arg1 === 'function') {
                    callback = arg1;
                    options = arg2 || {};
                }
                break;
        }

        function runCB(data) {
            if (options.consolidate || options.throttle) {
                clearTimeout(timeouts[template || '__global_event__']);
                timeouts[template || '__global_event__'] = setTimeout(function () {
                    callback(data);
                }, typeof options.throttle === 'number' ? options.throttle : 50);
            } else {
                callback(data);
            }
        }

        function listener(event) {
            if (template) {
                var key = (0, _helpers.findKey)(event.detail, template);
                if (key) {
                    runCB(event.detail[key]);
                }
            } else {
                runCB(event.detail);
            }
        }

        document.addEventListener(_events.VFF_EVENT, listener);
    },

    track: function track(name, data) {
        var payload = {};
        payload.name = name;
        payload.data = data;
        payload.query = _vffData.vffData.getQueryParams();
        (0, _messenger.send)(_events.TRACK_EVENT, payload);
    }

    // emit : (data) => {
    //     let payload = {};
    //     payload.data = data;
    //     payload.query = vffData.getQueryParams();
    //     send(OUTGOING_EVENT, payload);
    // }

};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(3);

var _events = __webpack_require__(1);

var _helpers = __webpack_require__(0);

function go(target, time) {
    (0, _messenger.send)(_events.GO, {
        target: target,
        time: time
    });
}

module.exports = {
    go: go,
    next: _helpers.noop,
    previous: _helpers.noop,
    home: _helpers.noop
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vffData = __webpack_require__(2);

module.exports = {
    show: function show(template) {
        return _vffData.vffData.show(template);
    },
    hide: function hide(template) {
        return _vffData.vffData.hide(template);
    },
    toggle: function toggle(template) {
        return _vffData.vffData.toggle(template);
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

function get(url, callback) {
    var deferred = (0, _helpers.defer)();
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=vff.js.map
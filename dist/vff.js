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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(35)('wks');
var uid = __webpack_require__(26);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(12);

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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(19);
var hide = __webpack_require__(13);
var has = __webpack_require__(14);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(45);
var toPrimitive = __webpack_require__(31);
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
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(24)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vffData = undefined;

var _typeof2 = __webpack_require__(12);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _events = __webpack_require__(4);

var _helpers = __webpack_require__(3);

var _messenger = __webpack_require__(11);

var _docRefs = __webpack_require__(90);

var _consts = __webpack_require__(22);

var _vffControl = __webpack_require__(91);

var _vffControl2 = _interopRequireDefault(_vffControl);

var _vffEvent = __webpack_require__(56);

var _vffEvent2 = _interopRequireDefault(_vffEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_CONTROL_TIMEOUT = 3000;

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
        this._registerControlTimeouts = {};
        this._listeners = {};
        this._readyCallbacks = [];
        this._timeouts = new WeakMap();
    }

    (0, _createClass3.default)(VffData, [{
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

                    if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && value.ui) {
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _helpers = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(65);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(78);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(70);
var defined = __webpack_require__(29);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(55);

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
/* 18 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);
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

module.exports = {};


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
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 25 */
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

var def = __webpack_require__(7).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(69);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(49).appendChild(iframe);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(47);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(35)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(0);
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
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(18);
var wksExt = __webpack_require__(37);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(23);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(12);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(129);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(133);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(12);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(67)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(44)(String, 'String', function (iterated) {
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(46);
var hide = __webpack_require__(13);
var Iterators = __webpack_require__(20);
var $iterCreate = __webpack_require__(68);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(73);
var ITERATOR = __webpack_require__(1)('iterator');
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(24)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(14);
var toIObject = __webpack_require__(16);
var arrayIndexOf = __webpack_require__(71)(false);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
var global = __webpack_require__(0);
var hide = __webpack_require__(13);
var Iterators = __webpack_require__(20);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

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
/* 51 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(47);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(39);
var createDesc = __webpack_require__(25);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(31);
var has = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(45);
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
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VFFEvent = function VFFEvent(data) {
    (0, _classCallCheck3.default)(this, VFFEvent);

    //namespace, data, timecode, changed
    Object.assign(this, data);
};

exports.default = VFFEvent;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(21);
var TAG = __webpack_require__(1)('toStringTag');
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(23);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(108);
var html = __webpack_require__(49);
var cel = __webpack_require__(30);
var global = __webpack_require__(0);
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
/* 60 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(40);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xpath = __webpack_require__(116);

var _messenger = __webpack_require__(11);

var _events = __webpack_require__(4);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(11);

var _vffSetup = __webpack_require__(87);

var _events = __webpack_require__(4);

var _vffData = __webpack_require__(10);

var _listener = __webpack_require__(93);

var _initDOM = __webpack_require__(121);

var _vffElement = __webpack_require__(122);

var _vffElement2 = _interopRequireDefault(_vffElement);

__webpack_require__(124);

__webpack_require__(125);

var _helpers = __webpack_require__(3);

var _events2 = __webpack_require__(143);

var eventsApi = _interopRequireWildcard(_events2);

var _player = __webpack_require__(144);

var playerApi = _interopRequireWildcard(_player);

var _http = __webpack_require__(145);

var httpApi = _interopRequireWildcard(_http);

var _interactionEvents = __webpack_require__(62);

var _consts = __webpack_require__(22);

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
(0, _helpers.extend)(vff, eventsApi);

vff.extend('http', httpApi);

module.exports = vff;

/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(50);
module.exports = __webpack_require__(37).f('iterator');


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);
var defined = __webpack_require__(29);
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(32);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(13)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(33);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16);
var toLength = __webpack_require__(48);
var toAbsoluteIndex = __webpack_require__(72);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(14);
var toObject = __webpack_require__(74);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(29);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(76);
var step = __webpack_require__(77);
var Iterators = __webpack_require__(20);
var toIObject = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(44)(Array, 'Array', function (iterated, kind) {
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
/* 76 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
__webpack_require__(54);
__webpack_require__(85);
__webpack_require__(86);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(46);
var META = __webpack_require__(81).KEY;
var $fails = __webpack_require__(24);
var shared = __webpack_require__(35);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(26);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(37);
var wksDefine = __webpack_require__(38);
var enumKeys = __webpack_require__(82);
var isArray = __webpack_require__(83);
var anObject = __webpack_require__(5);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(31);
var createDesc = __webpack_require__(25);
var _create = __webpack_require__(32);
var gOPNExt = __webpack_require__(84);
var $GOPD = __webpack_require__(53);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(33);
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
  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(39).f = $propertyIsEnumerable;
  __webpack_require__(51).f = $getOwnPropertySymbols;

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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(26)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(14);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(24)(function () {
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(33);
var gOPS = __webpack_require__(51);
var pIE = __webpack_require__(39);
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(21);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16);
var gOPN = __webpack_require__(52).f;
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('asyncIterator');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('observable');


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(11);

var _events = __webpack_require__(4);

function setup(options) {
    if (options) {
        (0, _messenger.send)(_events.VF_SETUP, options);
    }
}

module.exports = {
    setup: setup
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "REGISTER_TEMPLATE": 'register-template'
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(12);

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__(92);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helpers = __webpack_require__(3);

var _consts = __webpack_require__(22);

var _messenger = __webpack_require__(11);

var _events = __webpack_require__(4);

var _vffData = __webpack_require__(10);

var _vffEvent = __webpack_require__(56);

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
            group = parts.slice(0, -1).join('.');
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(55);

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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _handlers = __webpack_require__(94);

var handlers = _interopRequireWildcard(_handlers);

var _events = __webpack_require__(4);

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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _updateHandler = __webpack_require__(95);

var _pagesHandler = __webpack_require__(117);

var _queryParamsHandler = __webpack_require__(118);

var _reloadHandler = __webpack_require__(119);

var _vfDataHandler = __webpack_require__(120);

var events = __webpack_require__(4);


var handlers = {};
handlers[events.UPDATE] = _updateHandler.update;
handlers[events.PAGES] = _pagesHandler.pages;
handlers[events.QUERY_PARAMS] = _queryParamsHandler.queryParams;
handlers[events.RELOAD] = _reloadHandler.reload;
handlers[events.VF_DATA] = _vfDataHandler.handleVFData;

module.exports = handlers;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(96);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(99);

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

var _helpers = __webpack_require__(3);

var _vffData = __webpack_require__(10);

var _interactionEvents = __webpack_require__(62);

var _events = __webpack_require__(4);

var _consts = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),
/* 97 */
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

module.exports = __webpack_require__(98);

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
/* 98 */
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(100);

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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(43);
__webpack_require__(50);
__webpack_require__(102);
__webpack_require__(114);
__webpack_require__(115);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var global = __webpack_require__(0);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(57);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(23);
var anInstance = __webpack_require__(103);
var forOf = __webpack_require__(104);
var speciesConstructor = __webpack_require__(58);
var task = __webpack_require__(59).set;
var microtask = __webpack_require__(109)();
var newPromiseCapabilityModule = __webpack_require__(40);
var perform = __webpack_require__(60);
var userAgent = __webpack_require__(110);
var promiseResolve = __webpack_require__(61);
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
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
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
  Internal.prototype = __webpack_require__(111)($Promise.prototype, {
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
__webpack_require__(112)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(113)(function (iter) {
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
/* 103 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(105);
var isArrayIter = __webpack_require__(106);
var anObject = __webpack_require__(5);
var toLength = __webpack_require__(48);
var getIterFn = __webpack_require__(107);
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(20);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(57);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(20);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 108 */
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(59).set;
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(13);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(9);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(6);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(58);
var promiseResolve = __webpack_require__(61);

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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(40);
var perform = __webpack_require__(60);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 116 */
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vffData = __webpack_require__(10);

function pages(data) {
    _vffData.vffData.addPages(data);
}

module.exports = {
    pages: pages
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vffData = __webpack_require__(10);

function queryParams(data) {
    _vffData.vffData.addQueryParams(data);
}

module.exports = {
    queryParams: queryParams
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function reload() {
    window.location.reload();
}

module.exports = {
    reload: reload
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vffData = __webpack_require__(10);

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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(12);

var _typeof3 = _interopRequireDefault(_typeof2);

var _helpers = __webpack_require__(3);

var _vffData = __webpack_require__(10);

var _consts = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {bindSyncEvents} from './interactionEvents';


function initDOM() {
    var controls = document.querySelectorAll('[' + _consts.ATTRIBUTE.CONTROL + ']');
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

        var exposed = control.expose ? control.expose() : {};

        for (var prop in exposed) {
            if (exposed.hasOwnProperty(prop)) {

                var path = exposed[prop],
                    ui = void 0,
                    attribute = void 0;
                if ((0, _typeof3.default)(exposed[prop]) === 'object') {
                    path = exposed[prop].path;
                    ui = exposed[prop].ui;
                    attribute = exposed[prop].attribute;
                }

                var ctrl = _vffData.vffData.registerControl(name + _consts.EXPOSE_DELIMITER + prop, attribute ? control.getAttribute(path) : (0, _helpers.getByPath)(control, path), Object.assign({ bindTo: path, ui: ui, attribute: attribute }, options));

                var bindName = name.indexOf('.') > -1 ? name.split('.')[1] : name;
                control.setAttribute(_consts.ATTRIBUTE.BIND, ctrl.getGroup() + '.' + bindName);
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _htmlAccessorObserver = __webpack_require__(123);

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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(12);

var _typeof3 = _interopRequireDefault(_typeof2);

var _helpers = __webpack_require__(3);

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
/* 124 */
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(126);

__webpack_require__(127);

var _emoji = __webpack_require__(128);

var _emoji2 = _interopRequireDefault(_emoji);

var _dragArea = __webpack_require__(136);

var _dragArea2 = _interopRequireDefault(_dragArea);

var _telestratorElement = __webpack_require__(137);

var _telestratorElement2 = _interopRequireDefault(_telestratorElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function define(name, element) {
    customElements.define(name, element);
}

define('drag-area', _dragArea2.default);
define('my-element', _emoji2.default);
define('telestrator-element', _telestratorElement2.default);

/***/ }),
/* 126 */
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
/* 127 */
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
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(42);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyElement = function (_HTMLElement) {
    (0, _inherits3.default)(MyElement, _HTMLElement);

    function MyElement() {
        (0, _classCallCheck3.default)(this, MyElement);
        return (0, _possibleConstructorReturn3.default)(this, (MyElement.__proto__ || Object.getPrototypeOf(MyElement)).call(this));
    }

    (0, _createClass3.default)(MyElement, [{
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
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(130), __esModule: true };

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(6);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(132).set });


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8);
var anObject = __webpack_require__(5);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(19)(Function.call, __webpack_require__(53).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(32) });


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(42);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DragArea = function (_HTMLElement) {
    (0, _inherits3.default)(DragArea, _HTMLElement);

    function DragArea() {
        (0, _classCallCheck3.default)(this, DragArea);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DragArea.__proto__ || Object.getPrototypeOf(DragArea)).call(this));

        _this._dragging = false;
        _this._result = { x: 0, y: 0 };
        return _this;
    }

    (0, _createClass3.default)(DragArea, [{
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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(42);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(138);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Telestrator = function (_HTMLElement) {
    (0, _inherits3.default)(Telestrator, _HTMLElement);

    function Telestrator() {
        (0, _classCallCheck3.default)(this, Telestrator);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Telestrator.__proto__ || Object.getPrototypeOf(Telestrator)).call(this));

        _this.clickX = [];
        _this.clickY = [];
        _this.clickDrag = [];
        _this.lastStroke = 0;
        return _this;
    }

    (0, _createClass3.default)(Telestrator, [{
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(139);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(141)(content, options);

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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)(false);
// imports


// module
exports.push([module.i, "telestrator-element #telestrator-canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/***/ }),
/* 140 */
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
/* 141 */
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

var	fixUrls = __webpack_require__(142);

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
/* 142 */
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _arguments = arguments;

var _events = __webpack_require__(4);

var _helpers = __webpack_require__(3);

var _messenger = __webpack_require__(11);

var _vffData = __webpack_require__(10);

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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(11);

var _events = __webpack_require__(4);

var _helpers = __webpack_require__(3);

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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(3);

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
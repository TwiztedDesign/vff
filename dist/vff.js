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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

function modeCheck() {
    //"controller_preview" "controller_program" "editor" "player_external" "player_internal"
    var mode = 'normal';

    try {
        var frame = window.frameElement.ownerDocument.defaultView.frameElement;
        mode = frame.getAttribute('vff-mode') || mode;
    } catch (err) {
        // not in iframe
    }
    return mode;
}
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
    document.addEventListener(event, listener);
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
    mode: modeCheck(),
    docRef: docRef,
    broadcast: broadcast,
    on: on,
    off: off,
    defer: defer,
    noop: noop,
    getQueryParams: getQueryParams
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(1);

var _helpers = __webpack_require__(0);

var _messenger = __webpack_require__(3);

var _docRefs = __webpack_require__(12);

var _vffTemplate = __webpack_require__(13);

var _vffTemplate2 = _interopRequireDefault(_vffTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VffData = function () {
    function VffData() {
        _classCallCheck(this, VffData);

        this._templates = {};
        this._pages = [];
        this._pagesDefer = (0, _helpers.defer)();
    }

    _createClass(VffData, [{
        key: 'updateCB',
        value: function updateCB() {
            if (this._updateCB) {
                this._updateCB();
            } else if (window.angular) {
                var $body = window.angular.element(document.body);
                var $injector = $body.injector();
                if ($injector) {
                    $injector.get('$rootScope').$apply();
                }
            }
        }
    }, {
        key: 'onUpdate',
        value: function onUpdate(cb) {
            this._updateCB = cb;
        }
    }, {
        key: 'registerTemplate',
        value: function registerTemplate(name, data, element) {
            if (arguments.length < 2) {
                throw new Error('Missing Arguments, please refer to: ' + (0, _helpers.docRef)(_docRefs.REGISTER_TEMPLATE));
            }

            data = data || {};
            name = name.toLowerCase();

            if (this._templates[name]) {
                this._templates[name]._update(data);
            } else {
                this._templates[name] = new _vffTemplate2.default(name, data, element);
            }

            (0, _messenger.send)(_events.ADD, {
                channel: name,
                options: this._templates[name]._options,
                data: data
            });

            return this._templates[name];
        }
    }, {
        key: 'getTemplate',
        value: function getTemplate(name) {
            return this._templates[name.toLowerCase()];
        }
    }, {
        key: 'getTemplates',
        value: function getTemplates() {
            return Object.values(this._templates);
        }
    }, {
        key: 'show',
        value: function show(template) {
            this.getTemplate(template).show();
        }
    }, {
        key: 'hide',
        value: function hide(template) {
            this.getTemplate(template).hide();
        }
    }, {
        key: 'toggle',
        value: function toggle(template) {
            this.getTemplate(template).toggle();
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._templates = {};
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
                this.updateCB();
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
            this.updateCB();
        }
    }, {
        key: 'getQueryParams',
        value: function getQueryParams() {
            return this._queryParams;
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIElement = function UIElement(data, defaults) {
    _classCallCheck(this, UIElement);

    defaults = defaults || {};
    Object.assign(this, defaults);
    (0, _helpers.deepExtend)(this, data);
};

exports.default = UIElement;

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

var Interval = __webpack_require__(46);

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


module.exports = {
    "EXPOSE_DELIMITER": " ",
    UI: {
        MULTISELECT: 'multiselect',
        DROPDOWN: 'dropdown',
        RADIO: 'radio',
        RANGE: 'range'
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xpath = __webpack_require__(21);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

var _vffData = __webpack_require__(2);

var _consts = __webpack_require__(6);

var _events = __webpack_require__(1);

var _interactionEvents = __webpack_require__(7);

function update(data) {

    var promises = [];

    var _loop = function _loop(templateName) {
        var template = _vffData.vffData.getTemplate(templateName);
        if (template) {
            var deferred = (0, _helpers.defer)();
            template._runMiddleware(data[templateName]).then(function (result) {
                _vffData.vffData.registerTemplate(templateName, result);
                for (var key in result) {
                    updateDom(template, key, result[key], result.__timecode__);
                }
                _vffData.vffData.updateCB();
                deferred.resolve();
            });
            promises.push(deferred.promise);
        }
    };

    for (var templateName in data) {
        _loop(templateName);
    }

    document.dispatchEvent(new CustomEvent(_events.VFF_EVENT, { detail: data }));
    return Promise.all(promises);
}

function updateInteraction(data) {
    for (var event in data) {
        if ((0, _interactionEvents.isInteractionEvent)(event)) {
            (0, _interactionEvents.dispatchEvent)(event, data[event]);
        }
    }
}

function updateDom(template, control, value, timecode) {
    var dom = template.$element(control.split(_consts.EXPOSE_DELIMITER)[0]);
    if (dom) {
        if (timecode !== undefined) {
            (0, _helpers.setByPath)(dom, "__timecode__", timecode);
        }
        (0, _helpers.setByPath)(dom, control.split(_consts.EXPOSE_DELIMITER)[1], value);
    }
}

module.exports = {
    update: update,
    updateInteraction: updateInteraction
};

/** to update angular *****

    let $body = angular.element(document.body);
    let $rootScope =  $body.injector().get('$rootScope');
    $rootScope.$apply();

 ************************/

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _messenger = __webpack_require__(3);

var _vffSetup = __webpack_require__(11);

var _events = __webpack_require__(1);

var _vffData = __webpack_require__(2);

var _listener = __webpack_require__(19);

var _initDOM = __webpack_require__(28);

var _vffElement = __webpack_require__(29);

var _vffElement2 = _interopRequireDefault(_vffElement);

__webpack_require__(31);

__webpack_require__(32);

var _helpers = __webpack_require__(0);

var _events2 = __webpack_require__(49);

var eventsApi = _interopRequireWildcard(_events2);

var _player = __webpack_require__(50);

var playerApi = _interopRequireWildcard(_player);

var _visibility = __webpack_require__(51);

var visibilityApi = _interopRequireWildcard(_visibility);

var _http = __webpack_require__(52);

var httpApi = _interopRequireWildcard(_http);

var _interactionEvents = __webpack_require__(7);

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

vff.addTemplate = function (name, data, options) {
    return _vffData.vffData.registerTemplate(name, data, options);
};
vff.registerTemplate = function (name, data, options) {
    return _vffData.vffData.registerTemplate(name, data, options);
};
vff.getTemplate = function (name) {
    return _vffData.vffData.getTemplate(name);
};
vff.getTemplates = function () {
    return _vffData.vffData.getTemplates();
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
vff.isController = _helpers.isController;
vff.mode = _helpers.mode;
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "REGISTER_TEMPLATE": 'register-template'
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(1);

var _consts = __webpack_require__(6);

var _helpers = __webpack_require__(0);

var _messenger = __webpack_require__(3);

var _vffData = __webpack_require__(2);

var _superProxy = __webpack_require__(14);

var _superProxy2 = _interopRequireDefault(_superProxy);

var _uiMultiselect = __webpack_require__(15);

var _uiMultiselect2 = _interopRequireDefault(_uiMultiselect);

var _uiDropdown = __webpack_require__(16);

var _uiDropdown2 = _interopRequireDefault(_uiDropdown);

var _uiRadio = __webpack_require__(17);

var _uiRadio2 = _interopRequireDefault(_uiRadio);

var _uiRange = __webpack_require__(18);

var _uiRange2 = _interopRequireDefault(_uiRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultListenerOptions = {
    changeOnly: true,
    throttle: true
};
var defaultTemplateOptions = {
    updateOn: 'all', // all, template, control
    global: false
};
//getElement, update, show, hide, toggle, onData, emit

var Template = function () {
    function Template(name, data, options) {
        _classCallCheck(this, Template);

        this._name = name;
        this._options = Object.assign({}, defaultTemplateOptions, options);
        this._middleware = [];
        this._createUIElements(data);
        this._proxy = new _superProxy2.default(data, this._traps(name));
        this._element = this._options.element;
        this._proxies = {};
        this._timeouts = {};
    }

    _createClass(Template, [{
        key: '$element',
        value: function $element(control) {
            if (this._element && control) {
                return this._element.getAttribute('vff-name') === control ? this._element : this._element.querySelector('[vff-name=' + control + ']');
            }
            return this._element;
        }
    }, {
        key: '$show',
        value: function $show() {
            this._setValue("visibility", true);
        }
    }, {
        key: '$hide',
        value: function $hide() {
            this._setValue("visibility", false);
        }
    }, {
        key: '$toggle',
        value: function $toggle() {
            var visibility = this._getValue('visibility');
            if (visibility !== undefined) {
                this._setValue('visibility', !visibility);
            }
        }
    }, {
        key: '$emit',
        value: function $emit(data) {
            var payload = {};
            payload.data = data;
            payload.query = _vffData.vffData.getQueryParams();
            payload.channel = this._name;
            (0, _messenger.send)(_events.OUTGOING_EVENT, payload);
        }
    }, {
        key: '$before',
        value: function $before() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            args = this._arguments.apply(this, _toConsumableArray(args));
            args.options = Object.assign({}, defaultListenerOptions, args.options);
            this._middleware.push(args);
        }
    }, {
        key: '$on',
        value: function $on() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            args = this._arguments.apply(this, _toConsumableArray(args));
            var path = args.path,
                callback = args.callback,
                options = args.options;

            options = Object.assign({}, defaultListenerOptions, options);

            var self = this;

            function runCB(data) {
                self._runCallback(callback, path, options, data);
            }

            function listener(event) {
                var key = (0, _helpers.findKey)(event.detail, self._name);
                if (key) {

                    if (path && options.changeOnly && ((0, _helpers.getByPath)(event.detail[key], path) === (0, _helpers.getByPath)(self._proxy, path) || (0, _helpers.getByPath)(event.detail[key], path) === undefined)) {
                        return;
                    } else if (!path && options.changeOnly && self._proxy.equals(event.detail[key])) {
                        return;
                    }

                    if (path && (0, _helpers.getByPath)(event.detail[key], path) !== undefined) {
                        runCB((0, _helpers.getByPath)(event.detail[key], path));
                    } else if (!path) {
                        runCB(event.detail[key]);
                    }
                }
            }
            document.addEventListener(_events.VFF_EVENT, listener);
        }
    }, {
        key: 'getElement',
        value: function getElement() {
            return this.$element();
        }
    }, {
        key: 'show',
        value: function show() {
            return this.$show();
        }
    }, {
        key: 'hide',
        value: function hide() {
            return this.$hide();
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            return this.$toggle();
        }
    }, {
        key: 'onData',
        value: function onData() {
            return this.$on.apply(this, arguments);
        }
    }, {
        key: 'emit',
        value: function emit(data) {
            return this.$emit(data);
        }
    }, {
        key: '_update',
        value: function _update(data) {
            this._proxy.update(data);
        }
    }, {
        key: '_sendUserUpdateEvent',
        value: function _sendUserUpdateEvent(name, target, path, value) {
            var payload = {};
            payload[name] = {};
            if (path.length === 1) {
                payload[name][path[0]] = value;
            } else {
                var tmp = payload[name];
                for (var i = 0; i < path.length - 1; i++) {
                    var key = path[i];

                    if (i === path.length - 2) {
                        tmp[key] = target;
                    } else {
                        tmp[key] = {};
                        tmp = tmp[key];
                    }
                }
            }
            (0, _messenger.send)(_events.USER_UPDATE, payload);
        }
    }, {
        key: '_traps',
        value: function _traps(name) {
            var self = this;
            var traps = {
                set: function set(target, key, value) {
                    self._sendUserUpdateEvent(name, target, key, value);
                }
            };
            return traps;
        }
    }, {
        key: '_setValue',
        value: function _setValue(key, value) {
            key = this._proxy.findKey(key);
            if (key) {
                this._proxy[key] = value;
            }
        }
    }, {
        key: '_getValue',
        value: function _getValue(key) {
            return this._proxy[key];
        }
    }, {
        key: '_runMiddleware',
        value: function _runMiddleware(data) {
            var self = this;
            return this._middleware.reduce(function (prev, curr) {
                return prev.then(function (data) {
                    var d = (0, _helpers.defer)();

                    if (!curr.path || curr.path && (0, _helpers.getByPath)(data, curr.path) !== undefined) {
                        self._runCallback(curr.callback, curr.path, curr.options || {}, data, d.resolve);
                    } else {
                        d.resolve(data);
                    }

                    return d.promise;
                });
            }, Promise.resolve(data));
        }
    }, {
        key: '_arguments',
        value: function _arguments(arg1, arg2, arg3) {
            var path = void 0,
                callback = void 0,
                options = void 0;
            switch (arguments.length) {
                case 0:
                    throw new Error("No arguments error");
                case 1:
                    callback = arg1;
                    break;
                default:
                    if (typeof arg1 === 'string') {
                        path = arg1;
                        callback = arg2;
                        options = arg3 || {};
                    } else if (typeof arg1 === 'function') {
                        callback = arg1;
                        options = arg2 || {};
                    }
                    break;
            }
            return {
                path: path,
                callback: callback,
                options: options
            };
        }
    }, {
        key: '_runCallback',
        value: function _runCallback(callback, path, options) {
            for (var _len3 = arguments.length, data = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
                data[_key3 - 3] = arguments[_key3];
            }

            if (options.consolidate || options.throttle) {

                var callbacks = this._timeouts[path || '__global_event__'];
                if (!callbacks) {
                    this._timeouts[path || '__global_event__'] = new WeakMap();
                }

                clearTimeout(this._timeouts[path || '__global_event__'].get(callback));
                this._timeouts[path || '__global_event__'].set(callback, setTimeout(function () {
                    callback.apply(undefined, data);
                }, typeof options.throttle === 'number' ? options.throttle : 50));
            } else {
                callback.apply(undefined, data);
            }
        }
    }, {
        key: '_createUIElements',
        value: function _createUIElements(data) {
            Object.keys(data).forEach(function (key) {
                if (data[key] && data[key].constructor && data[key].constructor === Object) {
                    switch (data[key].ui) {
                        case _consts.UI.MULTISELECT:
                            data[key] = new _uiMultiselect2.default(data[key]);break;
                        case _consts.UI.DROPDOWN:
                            data[key] = new _uiDropdown2.default(data[key]);break;
                        case _consts.UI.RADIO:
                            data[key] = new _uiRadio2.default(data[key]);break;
                        case _consts.UI.RANGE:
                            data[key] = new _uiRange2.default(data[key]);break;
                    }
                }
            });
        }
    }]);

    return Template;
}();

var VffTemplate = function (_Template) {
    _inherits(VffTemplate, _Template);

    function VffTemplate(name, data, element) {
        var _ret;

        _classCallCheck(this, VffTemplate);

        var _this = _possibleConstructorReturn(this, (VffTemplate.__proto__ || Object.getPrototypeOf(VffTemplate)).call(this, name, data, element));

        var self = _this;
        return _ret = new Proxy(_this, {
            get: function get(target, prop) {
                if (prop in target) {
                    return target[prop];
                } else if (target._element && target._element.expose && findExposed(prop, target._proxy)) {
                    return target._proxy[findExposed(prop, target._proxy)];
                }
                return self._proxy[prop];
            },
            set: function set(target, prop, value) {
                if (prop in target) {
                    throw new Error("Override Error: " + prop + " is an internal vff property and can't be overridden");
                    // return target[prop] = value;
                } else if (target._element && target._element.expose && findExposed(prop, target._proxy)) {
                    target._proxy[findExposed(prop, target._proxy)] = value;
                } else {
                    target._proxy[prop] = value;
                }
                return true;
            }
        }), _possibleConstructorReturn(_this, _ret);
    }

    return VffTemplate;
}(Template);

exports.default = VffTemplate;


function findExposed(key, values) {
    values = Object.keys(values);
    for (var i = 0; i < values.length; i++) {
        var prop = values[i].split(_consts.EXPOSE_DELIMITER)[1];
        if (prop && prop.toLowerCase() === key.toLowerCase()) {
            return values[i];
        }
    }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BYPASS_PREFIX = '__bypass__',
    PARENT_ID = '__parent_id__',
    PARENT_KEY = '__parent_key__',
    PROXY_ID = '__proxy__',
    IS_PROXY = '__isProxy__',
    SELF = '__self__';

var isInternalName = function isInternalName(name) {
    return name.startsWith('__') && name.endsWith('__');
};
var isInternalProperty = function isInternalProperty(prop) {
    return isInternalName(prop) && prop !== '__proxy__';
};
var cleanInternal = function cleanInternal(object) {
    Object.keys(object).forEach(function (key) {
        if (isInternalProperty(key)) {
            delete object[key];
        }if (_typeof(object[key]) === 'object') {
            cleanInternal(object[key]);
        }
    });
};
var noBypass = function noBypass(key) {
    return typeof key === 'string' ? key.replace(BYPASS_PREFIX, '') : '';
};

var SuperProxy = function () {
    function SuperProxy(data, traps) {
        _classCallCheck(this, SuperProxy);

        this._proxies = {};

        this._parents = new WeakMap();
        this._parentIDs = {};

        traps = traps || {};
        this._proxy = new Proxy(this._copy(data), this._traps(traps));

        var self = this;

        return new Proxy(this, {
            get: function get(target, prop) {

                if (prop in target) {
                    return target[prop];
                }
                var key = (0, _helpers.findKey)(self._proxy, noBypass(prop));
                prop = key || prop;
                return self._proxy[prop];
            },
            set: function set(target, prop, value) {
                if (prop in target) {
                    throw new Error("Override Error: " + prop + " is an internal vff property and can't be overridden");
                    // return target[prop] = value;
                } else {
                    target._proxy[prop] = value;
                }
                return true;
            }
        });
    }
    /************************* PUBLIC *****************************/


    _createClass(SuperProxy, [{
        key: 'findKey',
        value: function findKey(key) {
            return (0, _helpers.findKey)(this._proxy, key);
        }
    }, {
        key: 'update',
        value: function update(data) {
            var toUpdate = this._copy(data, BYPASS_PREFIX);
            (0, _helpers.deepExtend)(this._proxy, toUpdate);
        }
    }, {
        key: 'equals',
        value: function equals(data) {
            return (0, _helpers.deepCompare)(this._proxy, data);
        }

        /************************* PRIVATE *****************************/

    }, {
        key: '_copy',
        value: function _copy(o, prefix) {
            prefix = prefix || '';
            var output = void 0,
                v = void 0,
                key = void 0;
            output = Array.isArray(o) ? [] : {};
            for (key in o) {
                v = o[key];
                if (Array.isArray(output)) {
                    output[key] = (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === "object" ? this._copy(v, prefix) : v;
                } else if (!isInternalName(key)) {
                    output[prefix + key] = (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === "object" ? this._copy(v, prefix) : v;
                }
            }
            return output;
        }
    }, {
        key: '_set',
        value: function _set(target, key, value) {
            target[BYPASS_PREFIX + key] = value;
        }
    }, {
        key: '_getPath',
        value: function _getPath(obj, key) {
            var path = key ? [key] : [];
            var tmp = obj;
            while (tmp[PARENT_ID]) {
                path.unshift(tmp[PARENT_KEY]);
                tmp = this._parentIDs[tmp[PARENT_ID]];
            }
            return path;
        }
    }, {
        key: '_traps',
        value: function _traps(trapFuncs) {
            var self = this;

            var traps = {
                set: function set(target, key, value) {
                    var bypass = key.startsWith(BYPASS_PREFIX);
                    // if (bypass && !target[IS_PROXY]) {
                    if (bypass) {
                        key = key.substr(BYPASS_PREFIX.length);
                    }
                    target[key] = value;
                    // if (!bypass && !target[IS_PROXY] && typeof value !== 'object') {
                    if (!bypass) {
                        if (trapFuncs.set) {
                            //set with parent object, path array, value
                            var path = self._getPath(target, key);
                            // cleanInternal(target);
                            trapFuncs.set(target, path, value);
                        }
                    }
                    return true;
                },
                get: function get(target, key) {
                    if (key === IS_PROXY) {
                        return true;
                    }
                    if (key === SELF) {
                        cleanInternal(target);
                        return target;
                    }
                    if (key.startsWith && key.startsWith(BYPASS_PREFIX)) {
                        key = key.substr(BYPASS_PREFIX.length);
                    }

                    // if (typeof target[key] === 'object' && target[key] !== null && !target[key][IS_PROXY] && !isInternalProperty(key)) {
                    if (_typeof(target[key]) === 'object' && target[key] !== null && !isInternalProperty(key)) {
                        if (target[key][PROXY_ID]) {
                            return self._proxies[target[key][PROXY_ID]];
                        } else {
                            var proxy = new Proxy(target[key], traps);

                            var parentID = void 0;
                            if (!self._parents.has(target)) {
                                parentID = (0, _helpers.uuid)();
                                self._parents.set(target, parentID);
                                self._parentIDs[parentID] = target;
                            }
                            parentID = parentID || self._parents.get(target);

                            self._set(proxy, PARENT_KEY, key);
                            self._set(proxy, PARENT_ID, parentID);
                            var proxyID = (0, _helpers.uuid)();
                            self._proxies[proxyID] = proxy;
                            target[key][PROXY_ID] = proxyID;
                            return proxy;
                        }
                    } else {
                        return target[key];
                    }
                }
            };
            return traps;
        }
    }]);

    return SuperProxy;
}();

exports.default = SuperProxy;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uiElement = __webpack_require__(4);

var _uiElement2 = _interopRequireDefault(_uiElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {
    value: [],
    options: [],
    config: {
        search: false,
        clearOnChange: false,
        itemsInView: 5
    }
};

var UIMultiselect = function (_UIElement) {
    _inherits(UIMultiselect, _UIElement);

    function UIMultiselect(data) {
        _classCallCheck(this, UIMultiselect);

        return _possibleConstructorReturn(this, (UIMultiselect.__proto__ || Object.getPrototypeOf(UIMultiselect)).call(this, data, defaults));
    }

    return UIMultiselect;
}(_uiElement2.default);

exports.default = UIMultiselect;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uiElement = __webpack_require__(4);

var _uiElement2 = _interopRequireDefault(_uiElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {
    value: '',
    options: []
};

var UIDropdown = function (_UIElement) {
    _inherits(UIDropdown, _UIElement);

    function UIDropdown(data) {
        _classCallCheck(this, UIDropdown);

        var _this = _possibleConstructorReturn(this, (UIDropdown.__proto__ || Object.getPrototypeOf(UIDropdown)).call(this, data, defaults));

        if (!_this.value && _this.options.length) _this.value = _this.options[0];
        return _this;
    }

    return UIDropdown;
}(_uiElement2.default);

exports.default = UIDropdown;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uiElement = __webpack_require__(4);

var _uiElement2 = _interopRequireDefault(_uiElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {
    value: '',
    options: []
};

var UIRadio = function (_UIElement) {
    _inherits(UIRadio, _UIElement);

    function UIRadio(data) {
        _classCallCheck(this, UIRadio);

        var _this = _possibleConstructorReturn(this, (UIRadio.__proto__ || Object.getPrototypeOf(UIRadio)).call(this, data, defaults));

        if (!_this.value && _this.options.length) _this.value = _this.options[0];
        return _this;
    }

    return UIRadio;
}(_uiElement2.default);

exports.default = UIRadio;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uiElement = __webpack_require__(4);

var _uiElement2 = _interopRequireDefault(_uiElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {
    value: '0',
    min: 0,
    max: 0,
    step: 1
};

var UIRange = function (_UIElement) {
    _inherits(UIRange, _UIElement);

    function UIRange(data) {
        _classCallCheck(this, UIRange);

        return _possibleConstructorReturn(this, (UIRange.__proto__ || Object.getPrototypeOf(UIRange)).call(this, data, defaults));
    }

    return UIRange;
}(_uiElement2.default);

exports.default = UIRange;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _handlers = __webpack_require__(20);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _updateHandler = __webpack_require__(9);

var _pagesHandler = __webpack_require__(22);

var _queryParamsHandler = __webpack_require__(23);

var _reloadHandler = __webpack_require__(24);

var _vfDataHandler = __webpack_require__(25);

var events = __webpack_require__(1);


var handlers = {};
handlers[events.UPDATE] = _updateHandler.update;
handlers[events.PAGES] = _pagesHandler.pages;
handlers[events.QUERY_PARAMS] = _queryParamsHandler.queryParams;
handlers[events.RELOAD] = _reloadHandler.reload;
handlers[events.VF_DATA] = _vfDataHandler.handleVFData;

module.exports = handlers;

/***/ }),
/* 21 */
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
        var evaluator = new XPathEvaluator();
        var result = evaluator.evaluate(path, document.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return result.singleNodeValue;
    },
    getElementByXpath: function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

};

/***/ }),
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function reload() {
    window.location.reload();
}

module.exports = {
    reload: reload
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _updateHandler = __webpack_require__(9);

var _webrtc = __webpack_require__(26);

var _webrtc2 = _interopRequireDefault(_webrtc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleVFData(data) {
    if (data.settings.sync && !window.webrtc) {
        // window.webrtc.close();
        window.webrtc = new _webrtc2.default(data.token, 'sync', {
            onMessage: function onMessage(message) {
                (0, _updateHandler.updateInteraction)(message);
            }
        });
    }
}

module.exports = {
    handleVFData: handleVFData
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleWebRTC = __webpack_require__(27);
var noop = function noop() {};
var defaults = {
    signalingServer: "https://rtc.videoflow.io",
    maxParticipants: 5,
    onVideoAdded: noop,
    onVideoRemoved: noop,
    onMessage: noop,
    onCreatedPeer: noop
};

var WebRTC = function () {
    function WebRTC(room, target, options) {
        _classCallCheck(this, WebRTC);

        this.options = Object.assign({}, defaults, options || {});
        this.connected = false;
        this.room = room;
        this.target = target;
        this.init();
    }

    _createClass(WebRTC, [{
        key: 'init',
        value: function init() {
            var self = this;

            self.webrtc = new SimpleWebRTC({
                // target: this.target,
                url: this.options.signalingServer,
                stunServer: [{ urls: 'stun:stun.l.google.com:19302' }, {
                    username: 'user',
                    credential: 'pass',
                    urls: 'turn:54.198.120.75:3478'
                }],
                localVideoEl: '',
                remoteVideosEl: '',
                autoRequestMedia: false,
                debug: false,
                detectSpeakingEvents: true,
                autoAdjustMic: false
            });

            self.webrtc.on('readyToCall', function () {
                // console.log('Client StrongID', self.webrtc.connection.connection.id);
                self.webrtc.setInfo('vf' + Math.random().toString().substr(2), self.webrtc.connection.connection.id, ''); // Store strongId

                if (self.room) {
                    self.webrtc.joinRoom(self.room, function (err, room) {
                        var participants = Object.keys(room.clients);
                        if (participants.length + 1 > self.options.maxParticipants) {
                            self.close();
                        }
                    });
                    // self.webrtc.createRoom(self.room, function(){
                    //     self.webrtc.joinRoom(self.room);
                    // });
                }
            });

            self.webrtc.on('joinedRoom', function () /*room*/{
                // console.log('WebRTC - Joined Room: ' + room);
            });

            //Handle incoming video from target peer
            self.webrtc.on('videoAdded', function (video, peer) {
                // console.log('WebRTC - Video added');
                self.options.onVideoAdded(video, peer);
            });

            //Handle removing video by target peer
            self.webrtc.on('videoRemoved', function (video, peer) {
                // console.log('WebRTC - Video removed');
                if (peer.id === self.target || peer.strongId === self.target || peer.nickName === self.target) {
                    self.options.onVideoRemoved(video, peer);
                }
            });

            self.webrtc.on('createdPeer', function (peer) {
                // window.console.log('WebRTC - Peer Created');
                self.options.onCreatedPeer(peer);
            });

            self.webrtc.on('channelMessage', function (peer, label, data) {
                // console.log('WebRTC - Channel message');
                if (data.type === 'custommessage') {
                    var msg = JSON.parse(data.payload);
                    self.options.onMessage(msg);
                }
            });
        }
    }, {
        key: 'close',
        value: function close() {
            try {
                if (this.webrtc.connection) {
                    this.webrtc.leaveRoom();
                    this.webrtc.disconnect();
                }
            } catch (err) {/**/}
        }
    }, {
        key: 'send',
        value: function send(data) {
            this.webrtc.sendDirectlyToAll(this.target, 'custommessage', JSON.stringify(data));
        }
    }]);

    return WebRTC;
}();

exports.default = WebRTC;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};(function(f){if(( false?"undefined":_typeof(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.adapter=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(require,module,exports){/* eslint-env node */'use strict';// SDP helpers.
var SDPUtils={};// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier=function(){return Math.random().toString(36).substr(2,10);};// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName=SDPUtils.generateIdentifier();// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines=function(blob){return blob.trim().split('\n').map(function(line){return line.trim();});};// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections=function(blob){var parts=blob.split('\nm=');return parts.map(function(part,index){return(index>0?'m='+part:part).trim()+'\r\n';});};// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix=function(blob,prefix){return SDPUtils.splitLines(blob).filter(function(line){return line.indexOf(prefix)===0;});};// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate=function(line){var parts;// Parse both variants.
if(line.indexOf('a=candidate:')===0){parts=line.substring(12).split(' ');}else{parts=line.substring(10).split(' ');}var candidate={foundation:parts[0],component:parseInt(parts[1],10),protocol:parts[2].toLowerCase(),priority:parseInt(parts[3],10),ip:parts[4],port:parseInt(parts[5],10),// skip parts[6] == 'typ'
type:parts[7]};for(var i=8;i<parts.length;i+=2){switch(parts[i]){case'raddr':candidate.relatedAddress=parts[i+1];break;case'rport':candidate.relatedPort=parseInt(parts[i+1],10);break;case'tcptype':candidate.tcpType=parts[i+1];break;default:// extension handling, in particular ufrag
candidate[parts[i]]=parts[i+1];break;}}return candidate;};// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate=function(candidate){var sdp=[];sdp.push(candidate.foundation);sdp.push(candidate.component);sdp.push(candidate.protocol.toUpperCase());sdp.push(candidate.priority);sdp.push(candidate.ip);sdp.push(candidate.port);var type=candidate.type;sdp.push('typ');sdp.push(type);if(type!=='host'&&candidate.relatedAddress&&candidate.relatedPort){sdp.push('raddr');sdp.push(candidate.relatedAddress);// was: relAddr
sdp.push('rport');sdp.push(candidate.relatedPort);// was: relPort
}if(candidate.tcpType&&candidate.protocol.toLowerCase()==='tcp'){sdp.push('tcptype');sdp.push(candidate.tcpType);}return'candidate:'+sdp.join(' ');};// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions=function(line){return line.substr(14).split(' ');};// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap=function(line){var parts=line.substr(9).split(' ');var parsed={payloadType:parseInt(parts.shift(),10)// was: id
};parts=parts[0].split('/');parsed.name=parts[0];parsed.clockRate=parseInt(parts[1],10);// was: clockrate
// was: channels
parsed.numChannels=parts.length===3?parseInt(parts[2],10):1;return parsed;};// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap=function(codec){var pt=codec.payloadType;if(codec.preferredPayloadType!==undefined){pt=codec.preferredPayloadType;}return'a=rtpmap:'+pt+' '+codec.name+'/'+codec.clockRate+(codec.numChannels!==1?'/'+codec.numChannels:'')+'\r\n';};// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap=function(line){var parts=line.substr(9).split(' ');return{id:parseInt(parts[0],10),direction:parts[0].indexOf('/')>0?parts[0].split('/')[1]:'sendrecv',uri:parts[1]};};// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap=function(headerExtension){return'a=extmap:'+(headerExtension.id||headerExtension.preferredId)+(headerExtension.direction&&headerExtension.direction!=='sendrecv'?'/'+headerExtension.direction:'')+' '+headerExtension.uri+'\r\n';};// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp=function(line){var parsed={};var kv;var parts=line.substr(line.indexOf(' ')+1).split(';');for(var j=0;j<parts.length;j++){kv=parts[j].trim().split('=');parsed[kv[0].trim()]=kv[1];}return parsed;};// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp=function(codec){var line='';var pt=codec.payloadType;if(codec.preferredPayloadType!==undefined){pt=codec.preferredPayloadType;}if(codec.parameters&&Object.keys(codec.parameters).length){var params=[];Object.keys(codec.parameters).forEach(function(param){params.push(param+'='+codec.parameters[param]);});line+='a=fmtp:'+pt+' '+params.join(';')+'\r\n';}return line;};// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb=function(line){var parts=line.substr(line.indexOf(' ')+1).split(' ');return{type:parts.shift(),parameter:parts.join(' ')};};// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb=function(codec){var lines='';var pt=codec.payloadType;if(codec.preferredPayloadType!==undefined){pt=codec.preferredPayloadType;}if(codec.rtcpFeedback&&codec.rtcpFeedback.length){// FIXME: special handling for trr-int?
codec.rtcpFeedback.forEach(function(fb){lines+='a=rtcp-fb:'+pt+' '+fb.type+(fb.parameter&&fb.parameter.length?' '+fb.parameter:'')+'\r\n';});}return lines;};// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia=function(line){var sp=line.indexOf(' ');var parts={ssrc:parseInt(line.substr(7,sp-7),10)};var colon=line.indexOf(':',sp);if(colon>-1){parts.attribute=line.substr(sp+1,colon-sp-1);parts.value=line.substr(colon+1);}else{parts.attribute=line.substr(sp+1);}return parts;};// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid=function(mediaSection){var mid=SDPUtils.matchPrefix(mediaSection,'a=mid:')[0];if(mid){return mid.substr(6);}};SDPUtils.parseFingerprint=function(line){var parts=line.substr(14).split(' ');return{algorithm:parts[0].toLowerCase(),// algorithm is case-sensitive in Edge.
value:parts[1]};};// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters=function(mediaSection,sessionpart){var lines=SDPUtils.matchPrefix(mediaSection+sessionpart,'a=fingerprint:');// Note: a=setup line is ignored since we use the 'auto' role.
// Note2: 'algorithm' is not case sensitive except in Edge.
return{role:'auto',fingerprints:lines.map(SDPUtils.parseFingerprint)};};// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters=function(params,setupType){var sdp='a=setup:'+setupType+'\r\n';params.fingerprints.forEach(function(fp){sdp+='a=fingerprint:'+fp.algorithm+' '+fp.value+'\r\n';});return sdp;};// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters=function(mediaSection,sessionpart){var lines=SDPUtils.splitLines(mediaSection);// Search in session part, too.
lines=lines.concat(SDPUtils.splitLines(sessionpart));var iceParameters={usernameFragment:lines.filter(function(line){return line.indexOf('a=ice-ufrag:')===0;})[0].substr(12),password:lines.filter(function(line){return line.indexOf('a=ice-pwd:')===0;})[0].substr(10)};return iceParameters;};// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters=function(params){return'a=ice-ufrag:'+params.usernameFragment+'\r\n'+'a=ice-pwd:'+params.password+'\r\n';};// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters=function(mediaSection){var description={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]};var lines=SDPUtils.splitLines(mediaSection);var mline=lines[0].split(' ');for(var i=3;i<mline.length;i++){// find all codecs from mline[3..]
var pt=mline[i];var rtpmapline=SDPUtils.matchPrefix(mediaSection,'a=rtpmap:'+pt+' ')[0];if(rtpmapline){var codec=SDPUtils.parseRtpMap(rtpmapline);var fmtps=SDPUtils.matchPrefix(mediaSection,'a=fmtp:'+pt+' ');// Only the first a=fmtp:<pt> is considered.
codec.parameters=fmtps.length?SDPUtils.parseFmtp(fmtps[0]):{};codec.rtcpFeedback=SDPUtils.matchPrefix(mediaSection,'a=rtcp-fb:'+pt+' ').map(SDPUtils.parseRtcpFb);description.codecs.push(codec);// parse FEC mechanisms from rtpmap lines.
switch(codec.name.toUpperCase()){case'RED':case'ULPFEC':description.fecMechanisms.push(codec.name.toUpperCase());break;default:// only RED and ULPFEC are recognized as FEC mechanisms.
break;}}}SDPUtils.matchPrefix(mediaSection,'a=extmap:').forEach(function(line){description.headerExtensions.push(SDPUtils.parseExtmap(line));});// FIXME: parse rtcp.
return description;};// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription=function(kind,caps){var sdp='';// Build the mline.
sdp+='m='+kind+' ';sdp+=caps.codecs.length>0?'9':'0';// reject if no codecs.
sdp+=' UDP/TLS/RTP/SAVPF ';sdp+=caps.codecs.map(function(codec){if(codec.preferredPayloadType!==undefined){return codec.preferredPayloadType;}return codec.payloadType;}).join(' ')+'\r\n';sdp+='c=IN IP4 0.0.0.0\r\n';sdp+='a=rtcp:9 IN IP4 0.0.0.0\r\n';// Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
caps.codecs.forEach(function(codec){sdp+=SDPUtils.writeRtpMap(codec);sdp+=SDPUtils.writeFmtp(codec);sdp+=SDPUtils.writeRtcpFb(codec);});var maxptime=0;caps.codecs.forEach(function(codec){if(codec.maxptime>maxptime){maxptime=codec.maxptime;}});if(maxptime>0){sdp+='a=maxptime:'+maxptime+'\r\n';}sdp+='a=rtcp-mux\r\n';caps.headerExtensions.forEach(function(extension){sdp+=SDPUtils.writeExtmap(extension);});// FIXME: write fecMechanisms.
return sdp;};// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters=function(mediaSection){var encodingParameters=[];var description=SDPUtils.parseRtpParameters(mediaSection);var hasRed=description.fecMechanisms.indexOf('RED')!==-1;var hasUlpfec=description.fecMechanisms.indexOf('ULPFEC')!==-1;// filter a=ssrc:... cname:, ignore PlanB-msid
var ssrcs=SDPUtils.matchPrefix(mediaSection,'a=ssrc:').map(function(line){return SDPUtils.parseSsrcMedia(line);}).filter(function(parts){return parts.attribute==='cname';});var primarySsrc=ssrcs.length>0&&ssrcs[0].ssrc;var secondarySsrc;var flows=SDPUtils.matchPrefix(mediaSection,'a=ssrc-group:FID').map(function(line){var parts=line.split(' ');parts.shift();return parts.map(function(part){return parseInt(part,10);});});if(flows.length>0&&flows[0].length>1&&flows[0][0]===primarySsrc){secondarySsrc=flows[0][1];}description.codecs.forEach(function(codec){if(codec.name.toUpperCase()==='RTX'&&codec.parameters.apt){var encParam={ssrc:primarySsrc,codecPayloadType:parseInt(codec.parameters.apt,10),rtx:{ssrc:secondarySsrc}};encodingParameters.push(encParam);if(hasRed){encParam=JSON.parse(JSON.stringify(encParam));encParam.fec={ssrc:secondarySsrc,mechanism:hasUlpfec?'red+ulpfec':'red'};encodingParameters.push(encParam);}}});if(encodingParameters.length===0&&primarySsrc){encodingParameters.push({ssrc:primarySsrc});}// we support both b=AS and b=TIAS but interpret AS as TIAS.
var bandwidth=SDPUtils.matchPrefix(mediaSection,'b=');if(bandwidth.length){if(bandwidth[0].indexOf('b=TIAS:')===0){bandwidth=parseInt(bandwidth[0].substr(7),10);}else if(bandwidth[0].indexOf('b=AS:')===0){bandwidth=parseInt(bandwidth[0].substr(5),10);}encodingParameters.forEach(function(params){params.maxBitrate=bandwidth;});}return encodingParameters;};// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters=function(mediaSection){var rtcpParameters={};var cname;// Gets the first SSRC. Note that with RTX there might be multiple
// SSRCs.
var remoteSsrc=SDPUtils.matchPrefix(mediaSection,'a=ssrc:').map(function(line){return SDPUtils.parseSsrcMedia(line);}).filter(function(obj){return obj.attribute==='cname';})[0];if(remoteSsrc){rtcpParameters.cname=remoteSsrc.value;rtcpParameters.ssrc=remoteSsrc.ssrc;}// Edge uses the compound attribute instead of reducedSize
// compound is !reducedSize
var rsize=SDPUtils.matchPrefix(mediaSection,'a=rtcp-rsize');rtcpParameters.reducedSize=rsize.length>0;rtcpParameters.compound=rsize.length===0;// parses the rtcp-mux attrіbute.
// Note that Edge does not support unmuxed RTCP.
var mux=SDPUtils.matchPrefix(mediaSection,'a=rtcp-mux');rtcpParameters.mux=mux.length>0;return rtcpParameters;};// parses either a=msid: or a=ssrc:... msid lines an returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid=function(mediaSection){var parts;var spec=SDPUtils.matchPrefix(mediaSection,'a=msid:');if(spec.length===1){parts=spec[0].substr(7).split(' ');return{stream:parts[0],track:parts[1]};}var planB=SDPUtils.matchPrefix(mediaSection,'a=ssrc:').map(function(line){return SDPUtils.parseSsrcMedia(line);}).filter(function(parts){return parts.attribute==='msid';});if(planB.length>0){parts=planB[0].value.split(' ');return{stream:parts[0],track:parts[1]};}};SDPUtils.writeSessionBoilerplate=function(){// FIXME: sess-id should be an NTP timestamp.
return'v=0\r\n'+'o=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\n'+'s=-\r\n'+'t=0 0\r\n';};SDPUtils.writeMediaSection=function(transceiver,caps,type,stream){var sdp=SDPUtils.writeRtpDescription(transceiver.kind,caps);// Map ICE parameters (ufrag, pwd) to SDP.
sdp+=SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());// Map DTLS parameters to SDP.
sdp+=SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(),type==='offer'?'actpass':'active');sdp+='a=mid:'+transceiver.mid+'\r\n';if(transceiver.direction){sdp+='a='+transceiver.direction+'\r\n';}else if(transceiver.rtpSender&&transceiver.rtpReceiver){sdp+='a=sendrecv\r\n';}else if(transceiver.rtpSender){sdp+='a=sendonly\r\n';}else if(transceiver.rtpReceiver){sdp+='a=recvonly\r\n';}else{sdp+='a=inactive\r\n';}if(transceiver.rtpSender){// spec.
var msid='msid:'+stream.id+' '+transceiver.rtpSender.track.id+'\r\n';sdp+='a='+msid;// for Chrome.
sdp+='a=ssrc:'+transceiver.sendEncodingParameters[0].ssrc+' '+msid;if(transceiver.sendEncodingParameters[0].rtx){sdp+='a=ssrc:'+transceiver.sendEncodingParameters[0].rtx.ssrc+' '+msid;sdp+='a=ssrc-group:FID '+transceiver.sendEncodingParameters[0].ssrc+' '+transceiver.sendEncodingParameters[0].rtx.ssrc+'\r\n';}}// FIXME: this should be written by writeRtpDescription.
sdp+='a=ssrc:'+transceiver.sendEncodingParameters[0].ssrc+' cname:'+SDPUtils.localCName+'\r\n';if(transceiver.rtpSender&&transceiver.sendEncodingParameters[0].rtx){sdp+='a=ssrc:'+transceiver.sendEncodingParameters[0].rtx.ssrc+' cname:'+SDPUtils.localCName+'\r\n';}return sdp;};// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection=function(mediaSection,sessionpart){// Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
var lines=SDPUtils.splitLines(mediaSection);for(var i=0;i<lines.length;i++){switch(lines[i]){case'a=sendrecv':case'a=sendonly':case'a=recvonly':case'a=inactive':return lines[i].substr(2);default:// FIXME: What should happen here?
}}if(sessionpart){return SDPUtils.getDirection(sessionpart);}return'sendrecv';};SDPUtils.getKind=function(mediaSection){var lines=SDPUtils.splitLines(mediaSection);var mline=lines[0].split(' ');return mline[0].substr(2);};SDPUtils.isRejected=function(mediaSection){return mediaSection.split(' ',2)[1]==='0';};// Expose public methods.
module.exports=SDPUtils;},{}],2:[function(require,module,exports){(function(global){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var adapterFactory=require('./adapter_factory.js');module.exports=adapterFactory({window:global.window});}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./adapter_factory.js":3}],3:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';// Shimming starts here.
module.exports=function(dependencies){var window=dependencies&&dependencies.window;// Utils.
var utils=require('./utils');var logging=utils.log;var browserDetails=utils.detectBrowser(window);// Export to the adapter global object visible in the browser.
var adapter={browserDetails:browserDetails,extractVersion:utils.extractVersion,disableLog:utils.disableLog};// Uncomment the line below if you want logging to occur, including logging
// for the switch statement below. Can also be turned on in the browser via
// adapter.disableLog(false), but then logging from the switch statement below
// will not appear.
// require('./utils').disableLog(false);
// Browser shims.
var chromeShim=require('./chrome/chrome_shim')||null;var edgeShim=require('./edge/edge_shim')||null;var firefoxShim=require('./firefox/firefox_shim')||null;var safariShim=require('./safari/safari_shim')||null;// Shim browser if found.
switch(browserDetails.browser){case'chrome':if(!chromeShim||!chromeShim.shimPeerConnection){logging('Chrome shim is not included in this adapter release.');return adapter;}logging('adapter.js shimming chrome.');// Export to the adapter global object visible in the browser.
adapter.browserShim=chromeShim;chromeShim.shimGetUserMedia(window);chromeShim.shimMediaStream(window);utils.shimCreateObjectURL(window);chromeShim.shimSourceObject(window);chromeShim.shimPeerConnection(window);chromeShim.shimOnTrack(window);chromeShim.shimGetSendersWithDtmf(window);break;case'firefox':if(!firefoxShim||!firefoxShim.shimPeerConnection){logging('Firefox shim is not included in this adapter release.');return adapter;}logging('adapter.js shimming firefox.');// Export to the adapter global object visible in the browser.
adapter.browserShim=firefoxShim;firefoxShim.shimGetUserMedia(window);utils.shimCreateObjectURL(window);firefoxShim.shimSourceObject(window);firefoxShim.shimPeerConnection(window);firefoxShim.shimOnTrack(window);break;case'edge':if(!edgeShim||!edgeShim.shimPeerConnection){logging('MS edge shim is not included in this adapter release.');return adapter;}logging('adapter.js shimming edge.');// Export to the adapter global object visible in the browser.
adapter.browserShim=edgeShim;edgeShim.shimGetUserMedia(window);utils.shimCreateObjectURL(window);edgeShim.shimPeerConnection(window);edgeShim.shimReplaceTrack(window);break;case'safari':if(!safariShim){logging('Safari shim is not included in this adapter release.');return adapter;}logging('adapter.js shimming safari.');// Export to the adapter global object visible in the browser.
adapter.browserShim=safariShim;safariShim.shimCallbacksAPI(window);safariShim.shimAddStream(window);safariShim.shimOnAddStream(window);safariShim.shimGetUserMedia(window);break;default:logging('Unsupported browser!');break;}return adapter;};},{"./chrome/chrome_shim":4,"./edge/edge_shim":6,"./firefox/firefox_shim":9,"./safari/safari_shim":11,"./utils":12}],4:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var utils=require('../utils.js');var logging=utils.log;var chromeShim={shimMediaStream:function shimMediaStream(window){window.MediaStream=window.MediaStream||window.webkitMediaStream;},shimOnTrack:function shimOnTrack(window){if((typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window.RTCPeerConnection&&!('ontrack'in window.RTCPeerConnection.prototype)){Object.defineProperty(window.RTCPeerConnection.prototype,'ontrack',{get:function get(){return this._ontrack;},set:function set(f){var self=this;if(this._ontrack){this.removeEventListener('track',this._ontrack);this.removeEventListener('addstream',this._ontrackpoly);}this.addEventListener('track',this._ontrack=f);this.addEventListener('addstream',this._ontrackpoly=function(e){// onaddstream does not fire when a track is added to an existing
// stream. But stream.onaddtrack is implemented so we use that.
e.stream.addEventListener('addtrack',function(te){var receiver;if(window.RTCPeerConnection.prototype.getReceivers){receiver=self.getReceivers().find(function(r){return r.track.id===te.track.id;});}else{receiver={track:te.track};}var event=new Event('track');event.track=te.track;event.receiver=receiver;event.streams=[e.stream];self.dispatchEvent(event);});e.stream.getTracks().forEach(function(track){var receiver;if(window.RTCPeerConnection.prototype.getReceivers){receiver=self.getReceivers().find(function(r){return r.track.id===track.id;});}else{receiver={track:track};}var event=new Event('track');event.track=track;event.receiver=receiver;event.streams=[e.stream];this.dispatchEvent(event);}.bind(this));}.bind(this));}});}},shimGetSendersWithDtmf:function shimGetSendersWithDtmf(window){if((typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window.RTCPeerConnection&&!('getSenders'in window.RTCPeerConnection.prototype)&&'createDTMFSender'in window.RTCPeerConnection.prototype){window.RTCPeerConnection.prototype.getSenders=function(){return this._senders||[];};var origAddStream=window.RTCPeerConnection.prototype.addStream;var origRemoveStream=window.RTCPeerConnection.prototype.removeStream;if(!window.RTCPeerConnection.prototype.addTrack){window.RTCPeerConnection.prototype.addTrack=function(track,stream){var pc=this;if(pc.signalingState==='closed'){throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.','InvalidStateError');}var streams=[].slice.call(arguments,1);if(streams.length!==1||!streams[0].getTracks().find(function(t){return t===track;})){// this is not fully correct but all we can manage without
// [[associated MediaStreams]] internal slot.
throw new DOMException('The adapter.js addTrack polyfill only supports a single '+' stream which is associated with the specified track.','NotSupportedError');}pc._senders=pc._senders||[];var alreadyExists=pc._senders.find(function(t){return t.track===track;});if(alreadyExists){throw new DOMException('Track already exists.','InvalidAccessError');}pc._streams=pc._streams||{};var oldStream=pc._streams[stream.id];if(oldStream){oldStream.addTrack(track);pc.removeStream(oldStream);pc.addStream(oldStream);}else{var newStream=new window.MediaStream([track]);pc._streams[stream.id]=newStream;pc.addStream(newStream);}var sender={track:track,get dtmf(){if(this._dtmf===undefined){if(track.kind==='audio'){this._dtmf=pc.createDTMFSender(track);}else{this._dtmf=null;}}return this._dtmf;}};pc._senders.push(sender);return sender;};}window.RTCPeerConnection.prototype.addStream=function(stream){var pc=this;pc._senders=pc._senders||[];origAddStream.apply(pc,[stream]);stream.getTracks().forEach(function(track){pc._senders.push({track:track,get dtmf(){if(this._dtmf===undefined){if(track.kind==='audio'){this._dtmf=pc.createDTMFSender(track);}else{this._dtmf=null;}}return this._dtmf;}});});};window.RTCPeerConnection.prototype.removeStream=function(stream){var pc=this;pc._senders=pc._senders||[];origRemoveStream.apply(pc,[stream]);stream.getTracks().forEach(function(track){var sender=pc._senders.find(function(s){return s.track===track;});if(sender){pc._senders.splice(pc._senders.indexOf(sender),1);// remove sender
}});};}},shimSourceObject:function shimSourceObject(window){var URL=window&&window.URL;if((typeof window==="undefined"?"undefined":_typeof(window))==='object'){if(window.HTMLMediaElement&&!('srcObject'in window.HTMLMediaElement.prototype)){// Shim the srcObject property, once, when HTMLMediaElement is found.
Object.defineProperty(window.HTMLMediaElement.prototype,'srcObject',{get:function get(){return this._srcObject;},set:function set(stream){var self=this;// Use _srcObject as a private property for this shim
this._srcObject=stream;if(this.src){URL.revokeObjectURL(this.src);}if(!stream){this.src='';return undefined;}this.src=URL.createObjectURL(stream);// We need to recreate the blob url when a track is added or
// removed. Doing it manually since we want to avoid a recursion.
stream.addEventListener('addtrack',function(){if(self.src){URL.revokeObjectURL(self.src);}self.src=URL.createObjectURL(stream);});stream.addEventListener('removetrack',function(){if(self.src){URL.revokeObjectURL(self.src);}self.src=URL.createObjectURL(stream);});}});}}},shimPeerConnection:function shimPeerConnection(window){var browserDetails=utils.detectBrowser(window);// The RTCPeerConnection object.
if(!window.RTCPeerConnection){window.RTCPeerConnection=function(pcConfig,pcConstraints){// Translate iceTransportPolicy to iceTransports,
// see https://code.google.com/p/webrtc/issues/detail?id=4869
// this was fixed in M56 along with unprefixing RTCPeerConnection.
logging('PeerConnection');if(pcConfig&&pcConfig.iceTransportPolicy){pcConfig.iceTransports=pcConfig.iceTransportPolicy;}return new window.webkitRTCPeerConnection(pcConfig,pcConstraints);};window.RTCPeerConnection.prototype=window.webkitRTCPeerConnection.prototype;// wrap static methods. Currently just generateCertificate.
if(window.webkitRTCPeerConnection.generateCertificate){Object.defineProperty(window.RTCPeerConnection,'generateCertificate',{get:function get(){return window.webkitRTCPeerConnection.generateCertificate;}});}}else{// migrate from non-spec RTCIceServer.url to RTCIceServer.urls
var OrigPeerConnection=window.RTCPeerConnection;window.RTCPeerConnection=function(pcConfig,pcConstraints){if(pcConfig&&pcConfig.iceServers){var newIceServers=[];for(var i=0;i<pcConfig.iceServers.length;i++){var server=pcConfig.iceServers[i];if(!server.hasOwnProperty('urls')&&server.hasOwnProperty('url')){console.warn('RTCIceServer.url is deprecated! Use urls instead.');server=JSON.parse(JSON.stringify(server));server.urls=server.url;newIceServers.push(server);}else{newIceServers.push(pcConfig.iceServers[i]);}}pcConfig.iceServers=newIceServers;}return new OrigPeerConnection(pcConfig,pcConstraints);};window.RTCPeerConnection.prototype=OrigPeerConnection.prototype;// wrap static methods. Currently just generateCertificate.
Object.defineProperty(window.RTCPeerConnection,'generateCertificate',{get:function get(){return OrigPeerConnection.generateCertificate;}});}var origGetStats=window.RTCPeerConnection.prototype.getStats;window.RTCPeerConnection.prototype.getStats=function(selector,successCallback,errorCallback){var self=this;var args=arguments;// If selector is a function then we are in the old style stats so just
// pass back the original getStats format to avoid breaking old users.
if(arguments.length>0&&typeof selector==='function'){return origGetStats.apply(this,arguments);}// When spec-style getStats is supported, return those when called with
// either no arguments or the selector argument is null.
if(origGetStats.length===0&&(arguments.length===0||typeof arguments[0]!=='function')){return origGetStats.apply(this,[]);}var fixChromeStats_=function fixChromeStats_(response){var standardReport={};var reports=response.result();reports.forEach(function(report){var standardStats={id:report.id,timestamp:report.timestamp,type:{localcandidate:'local-candidate',remotecandidate:'remote-candidate'}[report.type]||report.type};report.names().forEach(function(name){standardStats[name]=report.stat(name);});standardReport[standardStats.id]=standardStats;});return standardReport;};// shim getStats with maplike support
var makeMapStats=function makeMapStats(stats){return new Map(Object.keys(stats).map(function(key){return[key,stats[key]];}));};if(arguments.length>=2){var successCallbackWrapper_=function successCallbackWrapper_(response){args[1](makeMapStats(fixChromeStats_(response)));};return origGetStats.apply(this,[successCallbackWrapper_,arguments[0]]);}// promise-support
return new Promise(function(resolve,reject){origGetStats.apply(self,[function(response){resolve(makeMapStats(fixChromeStats_(response)));},reject]);}).then(successCallback,errorCallback);};// add promise support -- natively available in Chrome 51
if(browserDetails.version<51){['setLocalDescription','setRemoteDescription','addIceCandidate'].forEach(function(method){var nativeMethod=window.RTCPeerConnection.prototype[method];window.RTCPeerConnection.prototype[method]=function(){var args=arguments;var self=this;var promise=new Promise(function(resolve,reject){nativeMethod.apply(self,[args[0],resolve,reject]);});if(args.length<2){return promise;}return promise.then(function(){args[1].apply(null,[]);},function(err){if(args.length>=3){args[2].apply(null,[err]);}});};});}// promise support for createOffer and createAnswer. Available (without
// bugs) since M52: crbug/619289
if(browserDetails.version<52){['createOffer','createAnswer'].forEach(function(method){var nativeMethod=window.RTCPeerConnection.prototype[method];window.RTCPeerConnection.prototype[method]=function(){var self=this;if(arguments.length<1||arguments.length===1&&_typeof(arguments[0])==='object'){var opts=arguments.length===1?arguments[0]:undefined;return new Promise(function(resolve,reject){nativeMethod.apply(self,[resolve,reject,opts]);});}return nativeMethod.apply(this,arguments);};});}// shim implicit creation of RTCSessionDescription/RTCIceCandidate
['setLocalDescription','setRemoteDescription','addIceCandidate'].forEach(function(method){var nativeMethod=window.RTCPeerConnection.prototype[method];window.RTCPeerConnection.prototype[method]=function(){arguments[0]=new(method==='addIceCandidate'?window.RTCIceCandidate:window.RTCSessionDescription)(arguments[0]);return nativeMethod.apply(this,arguments);};});// support for addIceCandidate(null or undefined)
var nativeAddIceCandidate=window.RTCPeerConnection.prototype.addIceCandidate;window.RTCPeerConnection.prototype.addIceCandidate=function(){if(!arguments[0]){if(arguments[1]){arguments[1].apply(null);}return Promise.resolve();}return nativeAddIceCandidate.apply(this,arguments);};}};// Expose public methods.
module.exports={shimMediaStream:chromeShim.shimMediaStream,shimOnTrack:chromeShim.shimOnTrack,shimGetSendersWithDtmf:chromeShim.shimGetSendersWithDtmf,shimSourceObject:chromeShim.shimSourceObject,shimPeerConnection:chromeShim.shimPeerConnection,shimGetUserMedia:require('./getusermedia')};},{"../utils.js":12,"./getusermedia":5}],5:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var utils=require('../utils.js');var logging=utils.log;// Expose public methods.
module.exports=function(window){var browserDetails=utils.detectBrowser(window);var navigator=window&&window.navigator;var constraintsToChrome_=function constraintsToChrome_(c){if((typeof c==="undefined"?"undefined":_typeof(c))!=='object'||c.mandatory||c.optional){return c;}var cc={};Object.keys(c).forEach(function(key){if(key==='require'||key==='advanced'||key==='mediaSource'){return;}var r=_typeof(c[key])==='object'?c[key]:{ideal:c[key]};if(r.exact!==undefined&&typeof r.exact==='number'){r.min=r.max=r.exact;}var oldname_=function oldname_(prefix,name){if(prefix){return prefix+name.charAt(0).toUpperCase()+name.slice(1);}return name==='deviceId'?'sourceId':name;};if(r.ideal!==undefined){cc.optional=cc.optional||[];var oc={};if(typeof r.ideal==='number'){oc[oldname_('min',key)]=r.ideal;cc.optional.push(oc);oc={};oc[oldname_('max',key)]=r.ideal;cc.optional.push(oc);}else{oc[oldname_('',key)]=r.ideal;cc.optional.push(oc);}}if(r.exact!==undefined&&typeof r.exact!=='number'){cc.mandatory=cc.mandatory||{};cc.mandatory[oldname_('',key)]=r.exact;}else{['min','max'].forEach(function(mix){if(r[mix]!==undefined){cc.mandatory=cc.mandatory||{};cc.mandatory[oldname_(mix,key)]=r[mix];}});}});if(c.advanced){cc.optional=(cc.optional||[]).concat(c.advanced);}return cc;};var shimConstraints_=function shimConstraints_(constraints,func){constraints=JSON.parse(JSON.stringify(constraints));if(constraints&&_typeof(constraints.audio)==='object'){var remap=function remap(obj,a,b){if(a in obj&&!(b in obj)){obj[b]=obj[a];delete obj[a];}};constraints=JSON.parse(JSON.stringify(constraints));remap(constraints.audio,'autoGainControl','googAutoGainControl');remap(constraints.audio,'noiseSuppression','googNoiseSuppression');constraints.audio=constraintsToChrome_(constraints.audio);}if(constraints&&_typeof(constraints.video)==='object'){// Shim facingMode for mobile & surface pro.
var face=constraints.video.facingMode;face=face&&((typeof face==="undefined"?"undefined":_typeof(face))==='object'?face:{ideal:face});var getSupportedFacingModeLies=browserDetails.version<61;if(face&&(face.exact==='user'||face.exact==='environment'||face.ideal==='user'||face.ideal==='environment')&&!(navigator.mediaDevices.getSupportedConstraints&&navigator.mediaDevices.getSupportedConstraints().facingMode&&!getSupportedFacingModeLies)){delete constraints.video.facingMode;var matches;if(face.exact==='environment'||face.ideal==='environment'){matches=['back','rear'];}else if(face.exact==='user'||face.ideal==='user'){matches=['front'];}if(matches){// Look for matches in label, or use last cam for back (typical).
return navigator.mediaDevices.enumerateDevices().then(function(devices){devices=devices.filter(function(d){return d.kind==='videoinput';});var dev=devices.find(function(d){return matches.some(function(match){return d.label.toLowerCase().indexOf(match)!==-1;});});if(!dev&&devices.length&&matches.indexOf('back')!==-1){dev=devices[devices.length-1];// more likely the back cam
}if(dev){constraints.video.deviceId=face.exact?{exact:dev.deviceId}:{ideal:dev.deviceId};}constraints.video=constraintsToChrome_(constraints.video);logging('chrome: '+JSON.stringify(constraints));return func(constraints);});}}constraints.video=constraintsToChrome_(constraints.video);}logging('chrome: '+JSON.stringify(constraints));return func(constraints);};var shimError_=function shimError_(e){return{name:{PermissionDeniedError:'NotAllowedError',InvalidStateError:'NotReadableError',DevicesNotFoundError:'NotFoundError',ConstraintNotSatisfiedError:'OverconstrainedError',TrackStartError:'NotReadableError',MediaDeviceFailedDueToShutdown:'NotReadableError',MediaDeviceKillSwitchOn:'NotReadableError'}[e.name]||e.name,message:e.message,constraint:e.constraintName,toString:function toString(){return this.name+(this.message&&': ')+this.message;}};};var getUserMedia_=function getUserMedia_(constraints,onSuccess,onError){shimConstraints_(constraints,function(c){navigator.webkitGetUserMedia(c,onSuccess,function(e){onError(shimError_(e));});});};navigator.getUserMedia=getUserMedia_;// Returns the result of getUserMedia as a Promise.
var getUserMediaPromise_=function getUserMediaPromise_(constraints){return new Promise(function(resolve,reject){navigator.getUserMedia(constraints,resolve,reject);});};if(!navigator.mediaDevices){navigator.mediaDevices={getUserMedia:getUserMediaPromise_,enumerateDevices:function enumerateDevices(){return new Promise(function(resolve){var kinds={audio:'audioinput',video:'videoinput'};return window.MediaStreamTrack.getSources(function(devices){resolve(devices.map(function(device){return{label:device.label,kind:kinds[device.kind],deviceId:device.id,groupId:''};}));});});},getSupportedConstraints:function getSupportedConstraints(){return{deviceId:true,echoCancellation:true,facingMode:true,frameRate:true,height:true,width:true};}};}// A shim for getUserMedia method on the mediaDevices object.
// TODO(KaptenJansson) remove once implemented in Chrome stable.
if(!navigator.mediaDevices.getUserMedia){navigator.mediaDevices.getUserMedia=function(constraints){return getUserMediaPromise_(constraints);};}else{// Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
// function which returns a Promise, it does not accept spec-style
// constraints.
var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(cs){return shimConstraints_(cs,function(c){return origGetUserMedia(c).then(function(stream){if(c.audio&&!stream.getAudioTracks().length||c.video&&!stream.getVideoTracks().length){stream.getTracks().forEach(function(track){track.stop();});throw new DOMException('','NotFoundError');}return stream;},function(e){return Promise.reject(shimError_(e));});});};}// Dummy devicechange event methods.
// TODO(KaptenJansson) remove once implemented in Chrome stable.
if(typeof navigator.mediaDevices.addEventListener==='undefined'){navigator.mediaDevices.addEventListener=function(){logging('Dummy mediaDevices.addEventListener called.');};}if(typeof navigator.mediaDevices.removeEventListener==='undefined'){navigator.mediaDevices.removeEventListener=function(){logging('Dummy mediaDevices.removeEventListener called.');};}};},{"../utils.js":12}],6:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var utils=require('../utils');var shimRTCPeerConnection=require('./rtcpeerconnection_shim');module.exports={shimGetUserMedia:require('./getusermedia'),shimPeerConnection:function shimPeerConnection(window){var browserDetails=utils.detectBrowser(window);if(window.RTCIceGatherer){// ORTC defines an RTCIceCandidate object but no constructor.
// Not implemented in Edge.
if(!window.RTCIceCandidate){window.RTCIceCandidate=function(args){return args;};}// ORTC does not have a session description object but
// other browsers (i.e. Chrome) that will support both PC and ORTC
// in the future might have this defined already.
if(!window.RTCSessionDescription){window.RTCSessionDescription=function(args){return args;};}// this adds an additional event listener to MediaStrackTrack that signals
// when a tracks enabled property was changed. Workaround for a bug in
// addStream, see below. No longer required in 15025+
if(browserDetails.version<15025){var origMSTEnabled=Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype,'enabled');Object.defineProperty(window.MediaStreamTrack.prototype,'enabled',{set:function set(value){origMSTEnabled.set.call(this,value);var ev=new Event('enabled');ev.enabled=value;this.dispatchEvent(ev);}});}}window.RTCPeerConnection=shimRTCPeerConnection(window,browserDetails.version);},shimReplaceTrack:function shimReplaceTrack(window){// ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
if(window.RTCRtpSender&&!('replaceTrack'in window.RTCRtpSender.prototype)){window.RTCRtpSender.prototype.replaceTrack=window.RTCRtpSender.prototype.setTrack;}}};},{"../utils":12,"./getusermedia":7,"./rtcpeerconnection_shim":8}],7:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';// Expose public methods.
module.exports=function(window){var navigator=window&&window.navigator;var shimError_=function shimError_(e){return{name:{PermissionDeniedError:'NotAllowedError'}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function toString(){return this.name;}};};// getUserMedia error shim.
var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(c){return origGetUserMedia(c).catch(function(e){return Promise.reject(shimError_(e));});};};},{}],8:[function(require,module,exports){/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var SDPUtils=require('sdp');// sort tracks such that they follow an a-v-a-v...
// pattern.
function sortTracks(tracks){var audioTracks=tracks.filter(function(track){return track.kind==='audio';});var videoTracks=tracks.filter(function(track){return track.kind==='video';});tracks=[];while(audioTracks.length||videoTracks.length){if(audioTracks.length){tracks.push(audioTracks.shift());}if(videoTracks.length){tracks.push(videoTracks.shift());}}return tracks;}// Edge does not like
// 1) stun:
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers,edgeVersion){var hasTurn=false;iceServers=JSON.parse(JSON.stringify(iceServers));return iceServers.filter(function(server){if(server&&(server.urls||server.url)){var urls=server.urls||server.url;if(server.url&&!server.urls){console.warn('RTCIceServer.url is deprecated! Use urls instead.');}var isString=typeof urls==='string';if(isString){urls=[urls];}urls=urls.filter(function(url){var validTurn=url.indexOf('turn:')===0&&url.indexOf('transport=udp')!==-1&&url.indexOf('turn:[')===-1&&!hasTurn;if(validTurn){hasTurn=true;return true;}return url.indexOf('stun:')===0&&edgeVersion>=14393;});delete server.url;server.urls=isString?urls[0]:urls;return!!urls.length;}return false;});}// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities,remoteCapabilities){var commonCapabilities={codecs:[],headerExtensions:[],fecMechanisms:[]};var findCodecByPayloadType=function findCodecByPayloadType(pt,codecs){pt=parseInt(pt,10);for(var i=0;i<codecs.length;i++){if(codecs[i].payloadType===pt||codecs[i].preferredPayloadType===pt){return codecs[i];}}};var rtxCapabilityMatches=function rtxCapabilityMatches(lRtx,rRtx,lCodecs,rCodecs){var lCodec=findCodecByPayloadType(lRtx.parameters.apt,lCodecs);var rCodec=findCodecByPayloadType(rRtx.parameters.apt,rCodecs);return lCodec&&rCodec&&lCodec.name.toLowerCase()===rCodec.name.toLowerCase();};localCapabilities.codecs.forEach(function(lCodec){for(var i=0;i<remoteCapabilities.codecs.length;i++){var rCodec=remoteCapabilities.codecs[i];if(lCodec.name.toLowerCase()===rCodec.name.toLowerCase()&&lCodec.clockRate===rCodec.clockRate){if(lCodec.name.toLowerCase()==='rtx'&&lCodec.parameters&&rCodec.parameters.apt){// for RTX we need to find the local rtx that has a apt
// which points to the same local codec as the remote one.
if(!rtxCapabilityMatches(lCodec,rCodec,localCapabilities.codecs,remoteCapabilities.codecs)){continue;}}rCodec=JSON.parse(JSON.stringify(rCodec));// deepcopy
// number of channels is the highest common number of channels
rCodec.numChannels=Math.min(lCodec.numChannels,rCodec.numChannels);// push rCodec so we reply with offerer payload type
commonCapabilities.codecs.push(rCodec);// determine common feedback mechanisms
rCodec.rtcpFeedback=rCodec.rtcpFeedback.filter(function(fb){for(var j=0;j<lCodec.rtcpFeedback.length;j++){if(lCodec.rtcpFeedback[j].type===fb.type&&lCodec.rtcpFeedback[j].parameter===fb.parameter){return true;}}return false;});// FIXME: also need to determine .parameters
//  see https://github.com/openpeer/ortc/issues/569
break;}}});localCapabilities.headerExtensions.forEach(function(lHeaderExtension){for(var i=0;i<remoteCapabilities.headerExtensions.length;i++){var rHeaderExtension=remoteCapabilities.headerExtensions[i];if(lHeaderExtension.uri===rHeaderExtension.uri){commonCapabilities.headerExtensions.push(rHeaderExtension);break;}}});// FIXME: fecMechanisms
return commonCapabilities;}// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action,type,signalingState){return{offer:{setLocalDescription:['stable','have-local-offer'],setRemoteDescription:['stable','have-remote-offer']},answer:{setLocalDescription:['have-remote-offer','have-local-pranswer'],setRemoteDescription:['have-local-offer','have-remote-pranswer']}}[type][action].indexOf(signalingState)!==-1;}module.exports=function(window,edgeVersion){var RTCPeerConnection=function RTCPeerConnection(config){var self=this;var _eventTarget=document.createDocumentFragment();['addEventListener','removeEventListener','dispatchEvent'].forEach(function(method){self[method]=_eventTarget[method].bind(_eventTarget);});this.needNegotiation=false;this.onicecandidate=null;this.onaddstream=null;this.ontrack=null;this.onremovestream=null;this.onsignalingstatechange=null;this.oniceconnectionstatechange=null;this.onicegatheringstatechange=null;this.onnegotiationneeded=null;this.ondatachannel=null;this.canTrickleIceCandidates=null;this.localStreams=[];this.remoteStreams=[];this.getLocalStreams=function(){return self.localStreams;};this.getRemoteStreams=function(){return self.remoteStreams;};this.localDescription=new window.RTCSessionDescription({type:'',sdp:''});this.remoteDescription=new window.RTCSessionDescription({type:'',sdp:''});this.signalingState='stable';this.iceConnectionState='new';this.iceGatheringState='new';this.iceOptions={gatherPolicy:'all',iceServers:[]};if(config&&config.iceTransportPolicy){switch(config.iceTransportPolicy){case'all':case'relay':this.iceOptions.gatherPolicy=config.iceTransportPolicy;break;default:// don't set iceTransportPolicy.
break;}}this.usingBundle=config&&config.bundlePolicy==='max-bundle';if(config&&config.iceServers){this.iceOptions.iceServers=filterIceServers(config.iceServers,edgeVersion);}this._config=config||{};// per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
// everything that is needed to describe a SDP m-line.
this.transceivers=[];// since the iceGatherer is currently created in createOffer but we
// must not emit candidates until after setLocalDescription we buffer
// them in this array.
this._localIceCandidatesBuffer=[];};RTCPeerConnection.prototype._emitGatheringStateChange=function(){var event=new Event('icegatheringstatechange');this.dispatchEvent(event);if(this.onicegatheringstatechange!==null){this.onicegatheringstatechange(event);}};RTCPeerConnection.prototype._emitBufferedCandidates=function(){var self=this;var sections=SDPUtils.splitSections(self.localDescription.sdp);// FIXME: need to apply ice candidates in a way which is async but
// in-order
this._localIceCandidatesBuffer.forEach(function(event){var end=!event.candidate||Object.keys(event.candidate).length===0;if(end){for(var j=1;j<sections.length;j++){if(sections[j].indexOf('\r\na=end-of-candidates\r\n')===-1){sections[j]+='a=end-of-candidates\r\n';}}}else{sections[event.candidate.sdpMLineIndex+1]+='a='+event.candidate.candidate+'\r\n';}self.localDescription.sdp=sections.join('');self.dispatchEvent(event);if(self.onicecandidate!==null){self.onicecandidate(event);}if(!event.candidate&&self.iceGatheringState!=='complete'){var complete=self.transceivers.every(function(transceiver){return transceiver.iceGatherer&&transceiver.iceGatherer.state==='completed';});if(complete&&self.iceGatheringStateChange!=='complete'){self.iceGatheringState='complete';self._emitGatheringStateChange();}}});this._localIceCandidatesBuffer=[];};RTCPeerConnection.prototype.getConfiguration=function(){return this._config;};// internal helper to create a transceiver object.
// (whih is not yet the same as the WebRTC 1.0 transceiver)
RTCPeerConnection.prototype._createTransceiver=function(kind){var hasBundleTransport=this.transceivers.length>0;var transceiver={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:kind,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,wantReceive:true};if(this.usingBundle&&hasBundleTransport){transceiver.iceTransport=this.transceivers[0].iceTransport;transceiver.dtlsTransport=this.transceivers[0].dtlsTransport;}else{var transports=this._createIceAndDtlsTransports();transceiver.iceTransport=transports.iceTransport;transceiver.dtlsTransport=transports.dtlsTransport;}this.transceivers.push(transceiver);return transceiver;};RTCPeerConnection.prototype.addTrack=function(track,stream){var transceiver;for(var i=0;i<this.transceivers.length;i++){if(!this.transceivers[i].track&&this.transceivers[i].kind===track.kind){transceiver=this.transceivers[i];}}if(!transceiver){transceiver=this._createTransceiver(track.kind);}transceiver.track=track;transceiver.stream=stream;transceiver.rtpSender=new window.RTCRtpSender(track,transceiver.dtlsTransport);this._maybeFireNegotiationNeeded();return transceiver.rtpSender;};RTCPeerConnection.prototype.addStream=function(stream){var self=this;if(edgeVersion>=15025){this.localStreams.push(stream);stream.getTracks().forEach(function(track){self.addTrack(track,stream);});}else{// Clone is necessary for local demos mostly, attaching directly
// to two different senders does not work (build 10547).
// Fixed in 15025 (or earlier)
var clonedStream=stream.clone();stream.getTracks().forEach(function(track,idx){var clonedTrack=clonedStream.getTracks()[idx];track.addEventListener('enabled',function(event){clonedTrack.enabled=event.enabled;});});clonedStream.getTracks().forEach(function(track){self.addTrack(track,clonedStream);});this.localStreams.push(clonedStream);}this._maybeFireNegotiationNeeded();};RTCPeerConnection.prototype.removeStream=function(stream){var idx=this.localStreams.indexOf(stream);if(idx>-1){this.localStreams.splice(idx,1);this._maybeFireNegotiationNeeded();}};RTCPeerConnection.prototype.getSenders=function(){return this.transceivers.filter(function(transceiver){return!!transceiver.rtpSender;}).map(function(transceiver){return transceiver.rtpSender;});};RTCPeerConnection.prototype.getReceivers=function(){return this.transceivers.filter(function(transceiver){return!!transceiver.rtpReceiver;}).map(function(transceiver){return transceiver.rtpReceiver;});};// Create ICE gatherer and hook it up.
RTCPeerConnection.prototype._createIceGatherer=function(mid,sdpMLineIndex){var self=this;var iceGatherer=new window.RTCIceGatherer(self.iceOptions);iceGatherer.onlocalcandidate=function(evt){var event=new Event('icecandidate');event.candidate={sdpMid:mid,sdpMLineIndex:sdpMLineIndex};var cand=evt.candidate;var end=!cand||Object.keys(cand).length===0;// Edge emits an empty object for RTCIceCandidateComplete‥
if(end){// polyfill since RTCIceGatherer.state is not implemented in
// Edge 10547 yet.
if(iceGatherer.state===undefined){iceGatherer.state='completed';}}else{// RTCIceCandidate doesn't have a component, needs to be added
cand.component=1;event.candidate.candidate=SDPUtils.writeCandidate(cand);}// update local description.
var sections=SDPUtils.splitSections(self.localDescription.sdp);if(!end){sections[event.candidate.sdpMLineIndex+1]+='a='+event.candidate.candidate+'\r\n';}else{sections[event.candidate.sdpMLineIndex+1]+='a=end-of-candidates\r\n';}self.localDescription.sdp=sections.join('');var transceivers=self._pendingOffer?self._pendingOffer:self.transceivers;var complete=transceivers.every(function(transceiver){return transceiver.iceGatherer&&transceiver.iceGatherer.state==='completed';});// Emit candidate if localDescription is set.
// Also emits null candidate when all gatherers are complete.
switch(self.iceGatheringState){case'new':if(!end){self._localIceCandidatesBuffer.push(event);}if(end&&complete){self._localIceCandidatesBuffer.push(new Event('icecandidate'));}break;case'gathering':self._emitBufferedCandidates();if(!end){self.dispatchEvent(event);if(self.onicecandidate!==null){self.onicecandidate(event);}}if(complete){self.dispatchEvent(new Event('icecandidate'));if(self.onicecandidate!==null){self.onicecandidate(new Event('icecandidate'));}self.iceGatheringState='complete';self._emitGatheringStateChange();}break;case'complete':// should not happen... currently!
break;default:// no-op.
break;}};return iceGatherer;};// Create ICE transport and DTLS transport.
RTCPeerConnection.prototype._createIceAndDtlsTransports=function(){var self=this;var iceTransport=new window.RTCIceTransport(null);iceTransport.onicestatechange=function(){self._updateConnectionState();};var dtlsTransport=new window.RTCDtlsTransport(iceTransport);dtlsTransport.ondtlsstatechange=function(){self._updateConnectionState();};dtlsTransport.onerror=function(){// onerror does not set state to failed by itself.
Object.defineProperty(dtlsTransport,'state',{value:'failed',writable:true});self._updateConnectionState();};return{iceTransport:iceTransport,dtlsTransport:dtlsTransport};};// Destroy ICE gatherer, ICE transport and DTLS transport.
// Without triggering the callbacks.
RTCPeerConnection.prototype._disposeIceAndDtlsTransports=function(sdpMLineIndex){var iceGatherer=this.transceivers[sdpMLineIndex].iceGatherer;if(iceGatherer){delete iceGatherer.onlocalcandidate;delete this.transceivers[sdpMLineIndex].iceGatherer;}var iceTransport=this.transceivers[sdpMLineIndex].iceTransport;if(iceTransport){delete iceTransport.onicestatechange;delete this.transceivers[sdpMLineIndex].iceTransport;}var dtlsTransport=this.transceivers[sdpMLineIndex].dtlsTransport;if(dtlsTransport){delete dtlsTransport.ondtlssttatechange;delete dtlsTransport.onerror;delete this.transceivers[sdpMLineIndex].dtlsTransport;}};// Start the RTP Sender and Receiver for a transceiver.
RTCPeerConnection.prototype._transceive=function(transceiver,send,recv){var params=getCommonCapabilities(transceiver.localCapabilities,transceiver.remoteCapabilities);if(send&&transceiver.rtpSender){params.encodings=transceiver.sendEncodingParameters;params.rtcp={cname:SDPUtils.localCName,compound:transceiver.rtcpParameters.compound};if(transceiver.recvEncodingParameters.length){params.rtcp.ssrc=transceiver.recvEncodingParameters[0].ssrc;}transceiver.rtpSender.send(params);}if(recv&&transceiver.rtpReceiver){// remove RTX field in Edge 14942
if(transceiver.kind==='video'&&transceiver.recvEncodingParameters&&edgeVersion<15019){transceiver.recvEncodingParameters.forEach(function(p){delete p.rtx;});}params.encodings=transceiver.recvEncodingParameters;params.rtcp={cname:transceiver.rtcpParameters.cname,compound:transceiver.rtcpParameters.compound};if(transceiver.sendEncodingParameters.length){params.rtcp.ssrc=transceiver.sendEncodingParameters[0].ssrc;}transceiver.rtpReceiver.receive(params);}};RTCPeerConnection.prototype.setLocalDescription=function(description){var self=this;if(!isActionAllowedInSignalingState('setLocalDescription',description.type,this.signalingState)){var e=new Error('Can not set local '+description.type+' in state '+this.signalingState);e.name='InvalidStateError';if(arguments.length>2&&typeof arguments[2]==='function'){window.setTimeout(arguments[2],0,e);}return Promise.reject(e);}var sections;var sessionpart;if(description.type==='offer'){// FIXME: What was the purpose of this empty if statement?
// if (!this._pendingOffer) {
// } else {
if(this._pendingOffer){// VERY limited support for SDP munging. Limited to:
// * changing the order of codecs
sections=SDPUtils.splitSections(description.sdp);sessionpart=sections.shift();sections.forEach(function(mediaSection,sdpMLineIndex){var caps=SDPUtils.parseRtpParameters(mediaSection);self._pendingOffer[sdpMLineIndex].localCapabilities=caps;});this.transceivers=this._pendingOffer;delete this._pendingOffer;}}else if(description.type==='answer'){sections=SDPUtils.splitSections(self.remoteDescription.sdp);sessionpart=sections.shift();var isIceLite=SDPUtils.matchPrefix(sessionpart,'a=ice-lite').length>0;sections.forEach(function(mediaSection,sdpMLineIndex){var transceiver=self.transceivers[sdpMLineIndex];var iceGatherer=transceiver.iceGatherer;var iceTransport=transceiver.iceTransport;var dtlsTransport=transceiver.dtlsTransport;var localCapabilities=transceiver.localCapabilities;var remoteCapabilities=transceiver.remoteCapabilities;var rejected=SDPUtils.isRejected(mediaSection);if(!rejected&&!transceiver.isDatachannel){var remoteIceParameters=SDPUtils.getIceParameters(mediaSection,sessionpart);var remoteDtlsParameters=SDPUtils.getDtlsParameters(mediaSection,sessionpart);if(isIceLite){remoteDtlsParameters.role='server';}if(!self.usingBundle||sdpMLineIndex===0){iceTransport.start(iceGatherer,remoteIceParameters,isIceLite?'controlling':'controlled');dtlsTransport.start(remoteDtlsParameters);}// Calculate intersection of capabilities.
var params=getCommonCapabilities(localCapabilities,remoteCapabilities);// Start the RTCRtpSender. The RTCRtpReceiver for this
// transceiver has already been started in setRemoteDescription.
self._transceive(transceiver,params.codecs.length>0,false);}});}this.localDescription={type:description.type,sdp:description.sdp};switch(description.type){case'offer':this._updateSignalingState('have-local-offer');break;case'answer':this._updateSignalingState('stable');break;default:throw new TypeError('unsupported type "'+description.type+'"');}// If a success callback was provided, emit ICE candidates after it
// has been executed. Otherwise, emit callback after the Promise is
// resolved.
var hasCallback=arguments.length>1&&typeof arguments[1]==='function';if(hasCallback){var cb=arguments[1];window.setTimeout(function(){cb();if(self.iceGatheringState==='new'){self.iceGatheringState='gathering';self._emitGatheringStateChange();}self._emitBufferedCandidates();},0);}var p=Promise.resolve();p.then(function(){if(!hasCallback){if(self.iceGatheringState==='new'){self.iceGatheringState='gathering';self._emitGatheringStateChange();}// Usually candidates will be emitted earlier.
window.setTimeout(self._emitBufferedCandidates.bind(self),500);}});return p;};RTCPeerConnection.prototype.setRemoteDescription=function(description){var self=this;if(!isActionAllowedInSignalingState('setRemoteDescription',description.type,this.signalingState)){var e=new Error('Can not set remote '+description.type+' in state '+this.signalingState);e.name='InvalidStateError';if(arguments.length>2&&typeof arguments[2]==='function'){window.setTimeout(arguments[2],0,e);}return Promise.reject(e);}var streams={};var receiverList=[];var sections=SDPUtils.splitSections(description.sdp);var sessionpart=sections.shift();var isIceLite=SDPUtils.matchPrefix(sessionpart,'a=ice-lite').length>0;var usingBundle=SDPUtils.matchPrefix(sessionpart,'a=group:BUNDLE ').length>0;this.usingBundle=usingBundle;var iceOptions=SDPUtils.matchPrefix(sessionpart,'a=ice-options:')[0];if(iceOptions){this.canTrickleIceCandidates=iceOptions.substr(14).split(' ').indexOf('trickle')>=0;}else{this.canTrickleIceCandidates=false;}sections.forEach(function(mediaSection,sdpMLineIndex){var lines=SDPUtils.splitLines(mediaSection);var kind=SDPUtils.getKind(mediaSection);var rejected=SDPUtils.isRejected(mediaSection);var protocol=lines[0].substr(2).split(' ')[2];var direction=SDPUtils.getDirection(mediaSection,sessionpart);var remoteMsid=SDPUtils.parseMsid(mediaSection);var mid=SDPUtils.getMid(mediaSection)||SDPUtils.generateIdentifier();// Reject datachannels which are not implemented yet.
if(kind==='application'&&protocol==='DTLS/SCTP'){self.transceivers[sdpMLineIndex]={mid:mid,isDatachannel:true};return;}var transceiver;var iceGatherer;var iceTransport;var dtlsTransport;var rtpReceiver;var sendEncodingParameters;var recvEncodingParameters;var localCapabilities;var track;// FIXME: ensure the mediaSection has rtcp-mux set.
var remoteCapabilities=SDPUtils.parseRtpParameters(mediaSection);var remoteIceParameters;var remoteDtlsParameters;if(!rejected){remoteIceParameters=SDPUtils.getIceParameters(mediaSection,sessionpart);remoteDtlsParameters=SDPUtils.getDtlsParameters(mediaSection,sessionpart);remoteDtlsParameters.role='client';}recvEncodingParameters=SDPUtils.parseRtpEncodingParameters(mediaSection);var rtcpParameters=SDPUtils.parseRtcpParameters(mediaSection);var isComplete=SDPUtils.matchPrefix(mediaSection,'a=end-of-candidates',sessionpart).length>0;var cands=SDPUtils.matchPrefix(mediaSection,'a=candidate:').map(function(cand){return SDPUtils.parseCandidate(cand);}).filter(function(cand){return cand.component==='1'||cand.component===1;});// Check if we can use BUNDLE and dispose transports.
if((description.type==='offer'||description.type==='answer')&&!rejected&&usingBundle&&sdpMLineIndex>0&&self.transceivers[sdpMLineIndex]){self._disposeIceAndDtlsTransports(sdpMLineIndex);self.transceivers[sdpMLineIndex].iceGatherer=self.transceivers[0].iceGatherer;self.transceivers[sdpMLineIndex].iceTransport=self.transceivers[0].iceTransport;self.transceivers[sdpMLineIndex].dtlsTransport=self.transceivers[0].dtlsTransport;if(self.transceivers[sdpMLineIndex].rtpSender){self.transceivers[sdpMLineIndex].rtpSender.setTransport(self.transceivers[0].dtlsTransport);}if(self.transceivers[sdpMLineIndex].rtpReceiver){self.transceivers[sdpMLineIndex].rtpReceiver.setTransport(self.transceivers[0].dtlsTransport);}}if(description.type==='offer'&&!rejected){transceiver=self.transceivers[sdpMLineIndex]||self._createTransceiver(kind);transceiver.mid=mid;if(!transceiver.iceGatherer){transceiver.iceGatherer=usingBundle&&sdpMLineIndex>0?self.transceivers[0].iceGatherer:self._createIceGatherer(mid,sdpMLineIndex);}if(isComplete&&(!usingBundle||sdpMLineIndex===0)){transceiver.iceTransport.setRemoteCandidates(cands);}localCapabilities=window.RTCRtpReceiver.getCapabilities(kind);// filter RTX until additional stuff needed for RTX is implemented
// in adapter.js
if(edgeVersion<15019){localCapabilities.codecs=localCapabilities.codecs.filter(function(codec){return codec.name!=='rtx';});}sendEncodingParameters=[{ssrc:(2*sdpMLineIndex+2)*1001}];if(direction==='sendrecv'||direction==='sendonly'){rtpReceiver=new window.RTCRtpReceiver(transceiver.dtlsTransport,kind);track=rtpReceiver.track;// FIXME: does not work with Plan B.
if(remoteMsid){if(!streams[remoteMsid.stream]){streams[remoteMsid.stream]=new window.MediaStream();Object.defineProperty(streams[remoteMsid.stream],'id',{get:function get(){return remoteMsid.stream;}});}Object.defineProperty(track,'id',{get:function get(){return remoteMsid.track;}});streams[remoteMsid.stream].addTrack(track);receiverList.push([track,rtpReceiver,streams[remoteMsid.stream]]);}else{if(!streams.default){streams.default=new window.MediaStream();}streams.default.addTrack(track);receiverList.push([track,rtpReceiver,streams.default]);}}transceiver.localCapabilities=localCapabilities;transceiver.remoteCapabilities=remoteCapabilities;transceiver.rtpReceiver=rtpReceiver;transceiver.rtcpParameters=rtcpParameters;transceiver.sendEncodingParameters=sendEncodingParameters;transceiver.recvEncodingParameters=recvEncodingParameters;// Start the RTCRtpReceiver now. The RTPSender is started in
// setLocalDescription.
self._transceive(self.transceivers[sdpMLineIndex],false,direction==='sendrecv'||direction==='sendonly');}else if(description.type==='answer'&&!rejected){transceiver=self.transceivers[sdpMLineIndex];iceGatherer=transceiver.iceGatherer;iceTransport=transceiver.iceTransport;dtlsTransport=transceiver.dtlsTransport;rtpReceiver=transceiver.rtpReceiver;sendEncodingParameters=transceiver.sendEncodingParameters;localCapabilities=transceiver.localCapabilities;self.transceivers[sdpMLineIndex].recvEncodingParameters=recvEncodingParameters;self.transceivers[sdpMLineIndex].remoteCapabilities=remoteCapabilities;self.transceivers[sdpMLineIndex].rtcpParameters=rtcpParameters;if((isIceLite||isComplete)&&cands.length){iceTransport.setRemoteCandidates(cands);}if(!usingBundle||sdpMLineIndex===0){iceTransport.start(iceGatherer,remoteIceParameters,'controlling');dtlsTransport.start(remoteDtlsParameters);}self._transceive(transceiver,direction==='sendrecv'||direction==='recvonly',direction==='sendrecv'||direction==='sendonly');if(rtpReceiver&&(direction==='sendrecv'||direction==='sendonly')){track=rtpReceiver.track;if(remoteMsid){if(!streams[remoteMsid.stream]){streams[remoteMsid.stream]=new window.MediaStream();}streams[remoteMsid.stream].addTrack(track);receiverList.push([track,rtpReceiver,streams[remoteMsid.stream]]);}else{if(!streams.default){streams.default=new window.MediaStream();}streams.default.addTrack(track);receiverList.push([track,rtpReceiver,streams.default]);}}else{// FIXME: actually the receiver should be created later.
delete transceiver.rtpReceiver;}}});this.remoteDescription={type:description.type,sdp:description.sdp};switch(description.type){case'offer':this._updateSignalingState('have-remote-offer');break;case'answer':this._updateSignalingState('stable');break;default:throw new TypeError('unsupported type "'+description.type+'"');}Object.keys(streams).forEach(function(sid){var stream=streams[sid];if(stream.getTracks().length){self.remoteStreams.push(stream);var event=new Event('addstream');event.stream=stream;self.dispatchEvent(event);if(self.onaddstream!==null){window.setTimeout(function(){self.onaddstream(event);},0);}receiverList.forEach(function(item){var track=item[0];var receiver=item[1];if(stream.id!==item[2].id){return;}var trackEvent=new Event('track');trackEvent.track=track;trackEvent.receiver=receiver;trackEvent.streams=[stream];self.dispatchEvent(trackEvent);if(self.ontrack!==null){window.setTimeout(function(){self.ontrack(trackEvent);},0);}});}});// check whether addIceCandidate({}) was called within four seconds after
// setRemoteDescription.
window.setTimeout(function(){if(!(self&&self.transceivers)){return;}self.transceivers.forEach(function(transceiver){if(transceiver.iceTransport&&transceiver.iceTransport.state==='new'&&transceiver.iceTransport.getRemoteCandidates().length>0){console.warn('Timeout for addRemoteCandidate. Consider sending '+'an end-of-candidates notification');transceiver.iceTransport.addRemoteCandidate({});}});},4000);if(arguments.length>1&&typeof arguments[1]==='function'){window.setTimeout(arguments[1],0);}return Promise.resolve();};RTCPeerConnection.prototype.close=function(){this.transceivers.forEach(function(transceiver){/* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */if(transceiver.iceTransport){transceiver.iceTransport.stop();}if(transceiver.dtlsTransport){transceiver.dtlsTransport.stop();}if(transceiver.rtpSender){transceiver.rtpSender.stop();}if(transceiver.rtpReceiver){transceiver.rtpReceiver.stop();}});// FIXME: clean up tracks, local streams, remote streams, etc
this._updateSignalingState('closed');};// Update the signaling state.
RTCPeerConnection.prototype._updateSignalingState=function(newState){this.signalingState=newState;var event=new Event('signalingstatechange');this.dispatchEvent(event);if(this.onsignalingstatechange!==null){this.onsignalingstatechange(event);}};// Determine whether to fire the negotiationneeded event.
RTCPeerConnection.prototype._maybeFireNegotiationNeeded=function(){var self=this;if(this.signalingState!=='stable'||this.needNegotiation===true){return;}this.needNegotiation=true;window.setTimeout(function(){if(self.needNegotiation===false){return;}self.needNegotiation=false;var event=new Event('negotiationneeded');self.dispatchEvent(event);if(self.onnegotiationneeded!==null){self.onnegotiationneeded(event);}},0);};// Update the connection state.
RTCPeerConnection.prototype._updateConnectionState=function(){var self=this;var newState;var states={'new':0,closed:0,connecting:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};this.transceivers.forEach(function(transceiver){states[transceiver.iceTransport.state]++;states[transceiver.dtlsTransport.state]++;});// ICETransport.completed and connected are the same for this purpose.
states.connected+=states.completed;newState='new';if(states.failed>0){newState='failed';}else if(states.connecting>0||states.checking>0){newState='connecting';}else if(states.disconnected>0){newState='disconnected';}else if(states.new>0){newState='new';}else if(states.connected>0||states.completed>0){newState='connected';}if(newState!==self.iceConnectionState){self.iceConnectionState=newState;var event=new Event('iceconnectionstatechange');this.dispatchEvent(event);if(this.oniceconnectionstatechange!==null){this.oniceconnectionstatechange(event);}}};RTCPeerConnection.prototype.createOffer=function(){var self=this;if(this._pendingOffer){throw new Error('createOffer called while there is a pending offer.');}var offerOptions;if(arguments.length===1&&typeof arguments[0]!=='function'){offerOptions=arguments[0];}else if(arguments.length===3){offerOptions=arguments[2];}var numAudioTracks=this.transceivers.filter(function(t){return t.kind==='audio';}).length;var numVideoTracks=this.transceivers.filter(function(t){return t.kind==='video';}).length;// Determine number of audio and video tracks we need to send/recv.
if(offerOptions){// Reject Chrome legacy constraints.
if(offerOptions.mandatory||offerOptions.optional){throw new TypeError('Legacy mandatory/optional constraints not supported.');}if(offerOptions.offerToReceiveAudio!==undefined){if(offerOptions.offerToReceiveAudio===true){numAudioTracks=1;}else if(offerOptions.offerToReceiveAudio===false){numAudioTracks=0;}else{numAudioTracks=offerOptions.offerToReceiveAudio;}}if(offerOptions.offerToReceiveVideo!==undefined){if(offerOptions.offerToReceiveVideo===true){numVideoTracks=1;}else if(offerOptions.offerToReceiveVideo===false){numVideoTracks=0;}else{numVideoTracks=offerOptions.offerToReceiveVideo;}}}this.transceivers.forEach(function(transceiver){if(transceiver.kind==='audio'){numAudioTracks--;if(numAudioTracks<0){transceiver.wantReceive=false;}}else if(transceiver.kind==='video'){numVideoTracks--;if(numVideoTracks<0){transceiver.wantReceive=false;}}});// Create M-lines for recvonly streams.
while(numAudioTracks>0||numVideoTracks>0){if(numAudioTracks>0){this._createTransceiver('audio');numAudioTracks--;}if(numVideoTracks>0){this._createTransceiver('video');numVideoTracks--;}}// reorder tracks
var transceivers=sortTracks(this.transceivers);var sdp=SDPUtils.writeSessionBoilerplate();transceivers.forEach(function(transceiver,sdpMLineIndex){// For each track, create an ice gatherer, ice transport,
// dtls transport, potentially rtpsender and rtpreceiver.
var track=transceiver.track;var kind=transceiver.kind;var mid=SDPUtils.generateIdentifier();transceiver.mid=mid;if(!transceiver.iceGatherer){transceiver.iceGatherer=self.usingBundle&&sdpMLineIndex>0?transceivers[0].iceGatherer:self._createIceGatherer(mid,sdpMLineIndex);}var localCapabilities=window.RTCRtpSender.getCapabilities(kind);// filter RTX until additional stuff needed for RTX is implemented
// in adapter.js
if(edgeVersion<15019){localCapabilities.codecs=localCapabilities.codecs.filter(function(codec){return codec.name!=='rtx';});}localCapabilities.codecs.forEach(function(codec){// work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
// by adding level-asymmetry-allowed=1
if(codec.name==='H264'&&codec.parameters['level-asymmetry-allowed']===undefined){codec.parameters['level-asymmetry-allowed']='1';}});// generate an ssrc now, to be used later in rtpSender.send
var sendEncodingParameters=[{ssrc:(2*sdpMLineIndex+1)*1001}];if(track){// add RTX
if(edgeVersion>=15019&&kind==='video'){sendEncodingParameters[0].rtx={ssrc:(2*sdpMLineIndex+1)*1001+1};}}if(transceiver.wantReceive){transceiver.rtpReceiver=new window.RTCRtpReceiver(transceiver.dtlsTransport,kind);}transceiver.localCapabilities=localCapabilities;transceiver.sendEncodingParameters=sendEncodingParameters;});// always offer BUNDLE and dispose on return if not supported.
if(this._config.bundlePolicy!=='max-compat'){sdp+='a=group:BUNDLE '+transceivers.map(function(t){return t.mid;}).join(' ')+'\r\n';}sdp+='a=ice-options:trickle\r\n';transceivers.forEach(function(transceiver,sdpMLineIndex){sdp+=SDPUtils.writeMediaSection(transceiver,transceiver.localCapabilities,'offer',transceiver.stream);sdp+='a=rtcp-rsize\r\n';});this._pendingOffer=transceivers;var desc=new window.RTCSessionDescription({type:'offer',sdp:sdp});if(arguments.length&&typeof arguments[0]==='function'){window.setTimeout(arguments[0],0,desc);}return Promise.resolve(desc);};RTCPeerConnection.prototype.createAnswer=function(){var sdp=SDPUtils.writeSessionBoilerplate();if(this.usingBundle){sdp+='a=group:BUNDLE '+this.transceivers.map(function(t){return t.mid;}).join(' ')+'\r\n';}this.transceivers.forEach(function(transceiver,sdpMLineIndex){if(transceiver.isDatachannel){sdp+='m=application 0 DTLS/SCTP 5000\r\n'+'c=IN IP4 0.0.0.0\r\n'+'a=mid:'+transceiver.mid+'\r\n';return;}// FIXME: look at direction.
if(transceiver.stream){var localTrack;if(transceiver.kind==='audio'){localTrack=transceiver.stream.getAudioTracks()[0];}else if(transceiver.kind==='video'){localTrack=transceiver.stream.getVideoTracks()[0];}if(localTrack){// add RTX
if(edgeVersion>=15019&&transceiver.kind==='video'){transceiver.sendEncodingParameters[0].rtx={ssrc:(2*sdpMLineIndex+2)*1001+1};}}}// Calculate intersection of capabilities.
var commonCapabilities=getCommonCapabilities(transceiver.localCapabilities,transceiver.remoteCapabilities);var hasRtx=commonCapabilities.codecs.filter(function(c){return c.name.toLowerCase()==='rtx';}).length;if(!hasRtx&&transceiver.sendEncodingParameters[0].rtx){delete transceiver.sendEncodingParameters[0].rtx;}sdp+=SDPUtils.writeMediaSection(transceiver,commonCapabilities,'answer',transceiver.stream);if(transceiver.rtcpParameters&&transceiver.rtcpParameters.reducedSize){sdp+='a=rtcp-rsize\r\n';}});var desc=new window.RTCSessionDescription({type:'answer',sdp:sdp});if(arguments.length&&typeof arguments[0]==='function'){window.setTimeout(arguments[0],0,desc);}return Promise.resolve(desc);};RTCPeerConnection.prototype.addIceCandidate=function(candidate){if(!candidate){for(var j=0;j<this.transceivers.length;j++){this.transceivers[j].iceTransport.addRemoteCandidate({});if(this.usingBundle){return Promise.resolve();}}}else{var mLineIndex=candidate.sdpMLineIndex;if(candidate.sdpMid){for(var i=0;i<this.transceivers.length;i++){if(this.transceivers[i].mid===candidate.sdpMid){mLineIndex=i;break;}}}var transceiver=this.transceivers[mLineIndex];if(transceiver){var cand=Object.keys(candidate.candidate).length>0?SDPUtils.parseCandidate(candidate.candidate):{};// Ignore Chrome's invalid candidates since Edge does not like them.
if(cand.protocol==='tcp'&&(cand.port===0||cand.port===9)){return Promise.resolve();}// Ignore RTCP candidates, we assume RTCP-MUX.
if(cand.component&&!(cand.component==='1'||cand.component===1)){return Promise.resolve();}transceiver.iceTransport.addRemoteCandidate(cand);// update the remoteDescription.
var sections=SDPUtils.splitSections(this.remoteDescription.sdp);sections[mLineIndex+1]+=(cand.type?candidate.candidate.trim():'a=end-of-candidates')+'\r\n';this.remoteDescription.sdp=sections.join('');}}if(arguments.length>1&&typeof arguments[1]==='function'){window.setTimeout(arguments[1],0);}return Promise.resolve();};RTCPeerConnection.prototype.getStats=function(){var promises=[];this.transceivers.forEach(function(transceiver){['rtpSender','rtpReceiver','iceGatherer','iceTransport','dtlsTransport'].forEach(function(method){if(transceiver[method]){promises.push(transceiver[method].getStats());}});});var cb=arguments.length>1&&typeof arguments[1]==='function'&&arguments[1];var fixStatsType=function fixStatsType(stat){return{inboundrtp:'inbound-rtp',outboundrtp:'outbound-rtp',candidatepair:'candidate-pair',localcandidate:'local-candidate',remotecandidate:'remote-candidate'}[stat.type]||stat.type;};return new Promise(function(resolve){// shim getStats with maplike support
var results=new Map();Promise.all(promises).then(function(res){res.forEach(function(result){Object.keys(result).forEach(function(id){result[id].type=fixStatsType(result[id]);results.set(id,result[id]);});});if(cb){window.setTimeout(cb,0,results);}resolve(results);});});};return RTCPeerConnection;};},{"sdp":1}],9:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var utils=require('../utils');var firefoxShim={shimOnTrack:function shimOnTrack(window){if((typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window.RTCPeerConnection&&!('ontrack'in window.RTCPeerConnection.prototype)){Object.defineProperty(window.RTCPeerConnection.prototype,'ontrack',{get:function get(){return this._ontrack;},set:function set(f){if(this._ontrack){this.removeEventListener('track',this._ontrack);this.removeEventListener('addstream',this._ontrackpoly);}this.addEventListener('track',this._ontrack=f);this.addEventListener('addstream',this._ontrackpoly=function(e){e.stream.getTracks().forEach(function(track){var event=new Event('track');event.track=track;event.receiver={track:track};event.streams=[e.stream];this.dispatchEvent(event);}.bind(this));}.bind(this));}});}},shimSourceObject:function shimSourceObject(window){// Firefox has supported mozSrcObject since FF22, unprefixed in 42.
if((typeof window==="undefined"?"undefined":_typeof(window))==='object'){if(window.HTMLMediaElement&&!('srcObject'in window.HTMLMediaElement.prototype)){// Shim the srcObject property, once, when HTMLMediaElement is found.
Object.defineProperty(window.HTMLMediaElement.prototype,'srcObject',{get:function get(){return this.mozSrcObject;},set:function set(stream){this.mozSrcObject=stream;}});}}},shimPeerConnection:function shimPeerConnection(window){var browserDetails=utils.detectBrowser(window);if((typeof window==="undefined"?"undefined":_typeof(window))!=='object'||!(window.RTCPeerConnection||window.mozRTCPeerConnection)){return;// probably media.peerconnection.enabled=false in about:config
}// The RTCPeerConnection object.
if(!window.RTCPeerConnection){window.RTCPeerConnection=function(pcConfig,pcConstraints){if(browserDetails.version<38){// .urls is not supported in FF < 38.
// create RTCIceServers with a single url.
if(pcConfig&&pcConfig.iceServers){var newIceServers=[];for(var i=0;i<pcConfig.iceServers.length;i++){var server=pcConfig.iceServers[i];if(server.hasOwnProperty('urls')){for(var j=0;j<server.urls.length;j++){var newServer={url:server.urls[j]};if(server.urls[j].indexOf('turn')===0){newServer.username=server.username;newServer.credential=server.credential;}newIceServers.push(newServer);}}else{newIceServers.push(pcConfig.iceServers[i]);}}pcConfig.iceServers=newIceServers;}}return new window.mozRTCPeerConnection(pcConfig,pcConstraints);};window.RTCPeerConnection.prototype=window.mozRTCPeerConnection.prototype;// wrap static methods. Currently just generateCertificate.
if(window.mozRTCPeerConnection.generateCertificate){Object.defineProperty(window.RTCPeerConnection,'generateCertificate',{get:function get(){return window.mozRTCPeerConnection.generateCertificate;}});}window.RTCSessionDescription=window.mozRTCSessionDescription;window.RTCIceCandidate=window.mozRTCIceCandidate;}// shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
['setLocalDescription','setRemoteDescription','addIceCandidate'].forEach(function(method){var nativeMethod=window.RTCPeerConnection.prototype[method];window.RTCPeerConnection.prototype[method]=function(){arguments[0]=new(method==='addIceCandidate'?window.RTCIceCandidate:window.RTCSessionDescription)(arguments[0]);return nativeMethod.apply(this,arguments);};});// support for addIceCandidate(null or undefined)
var nativeAddIceCandidate=window.RTCPeerConnection.prototype.addIceCandidate;window.RTCPeerConnection.prototype.addIceCandidate=function(){if(!arguments[0]){if(arguments[1]){arguments[1].apply(null);}return Promise.resolve();}return nativeAddIceCandidate.apply(this,arguments);};// shim getStats with maplike support
var makeMapStats=function makeMapStats(stats){var map=new Map();Object.keys(stats).forEach(function(key){map.set(key,stats[key]);map[key]=stats[key];});return map;};var modernStatsTypes={inboundrtp:'inbound-rtp',outboundrtp:'outbound-rtp',candidatepair:'candidate-pair',localcandidate:'local-candidate',remotecandidate:'remote-candidate'};var nativeGetStats=window.RTCPeerConnection.prototype.getStats;window.RTCPeerConnection.prototype.getStats=function(selector,onSucc,onErr){return nativeGetStats.apply(this,[selector||null]).then(function(stats){if(browserDetails.version<48){stats=makeMapStats(stats);}if(browserDetails.version<53&&!onSucc){// Shim only promise getStats with spec-hyphens in type names
// Leave callback version alone; misc old uses of forEach before Map
try{stats.forEach(function(stat){stat.type=modernStatsTypes[stat.type]||stat.type;});}catch(e){if(e.name!=='TypeError'){throw e;}// Avoid TypeError: "type" is read-only, in old versions. 34-43ish
stats.forEach(function(stat,i){stats.set(i,Object.assign({},stat,{type:modernStatsTypes[stat.type]||stat.type}));});}}return stats;}).then(onSucc,onErr);};}};// Expose public methods.
module.exports={shimOnTrack:firefoxShim.shimOnTrack,shimSourceObject:firefoxShim.shimSourceObject,shimPeerConnection:firefoxShim.shimPeerConnection,shimGetUserMedia:require('./getusermedia')};},{"../utils":12,"./getusermedia":10}],10:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var utils=require('../utils');var logging=utils.log;// Expose public methods.
module.exports=function(window){var browserDetails=utils.detectBrowser(window);var navigator=window&&window.navigator;var MediaStreamTrack=window&&window.MediaStreamTrack;var shimError_=function shimError_(e){return{name:{InternalError:'NotReadableError',NotSupportedError:'TypeError',PermissionDeniedError:'NotAllowedError',SecurityError:'NotAllowedError'}[e.name]||e.name,message:{'The operation is insecure.':'The request is not allowed by the '+'user agent or the platform in the current context.'}[e.message]||e.message,constraint:e.constraint,toString:function toString(){return this.name+(this.message&&': ')+this.message;}};};// getUserMedia constraints shim.
var getUserMedia_=function getUserMedia_(constraints,onSuccess,onError){var constraintsToFF37_=function constraintsToFF37_(c){if((typeof c==="undefined"?"undefined":_typeof(c))!=='object'||c.require){return c;}var require=[];Object.keys(c).forEach(function(key){if(key==='require'||key==='advanced'||key==='mediaSource'){return;}var r=c[key]=_typeof(c[key])==='object'?c[key]:{ideal:c[key]};if(r.min!==undefined||r.max!==undefined||r.exact!==undefined){require.push(key);}if(r.exact!==undefined){if(typeof r.exact==='number'){r.min=r.max=r.exact;}else{c[key]=r.exact;}delete r.exact;}if(r.ideal!==undefined){c.advanced=c.advanced||[];var oc={};if(typeof r.ideal==='number'){oc[key]={min:r.ideal,max:r.ideal};}else{oc[key]=r.ideal;}c.advanced.push(oc);delete r.ideal;if(!Object.keys(r).length){delete c[key];}}});if(require.length){c.require=require;}return c;};constraints=JSON.parse(JSON.stringify(constraints));if(browserDetails.version<38){logging('spec: '+JSON.stringify(constraints));if(constraints.audio){constraints.audio=constraintsToFF37_(constraints.audio);}if(constraints.video){constraints.video=constraintsToFF37_(constraints.video);}logging('ff37: '+JSON.stringify(constraints));}return navigator.mozGetUserMedia(constraints,onSuccess,function(e){onError(shimError_(e));});};// Returns the result of getUserMedia as a Promise.
var getUserMediaPromise_=function getUserMediaPromise_(constraints){return new Promise(function(resolve,reject){getUserMedia_(constraints,resolve,reject);});};// Shim for mediaDevices on older versions.
if(!navigator.mediaDevices){navigator.mediaDevices={getUserMedia:getUserMediaPromise_,addEventListener:function addEventListener(){},removeEventListener:function removeEventListener(){}};}navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(resolve){var infos=[{kind:'audioinput',deviceId:'default',label:'',groupId:''},{kind:'videoinput',deviceId:'default',label:'',groupId:''}];resolve(infos);});};if(browserDetails.version<41){// Work around http://bugzil.la/1169665
var orgEnumerateDevices=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);navigator.mediaDevices.enumerateDevices=function(){return orgEnumerateDevices().then(undefined,function(e){if(e.name==='NotFoundError'){return[];}throw e;});};}if(browserDetails.version<49){var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(c){return origGetUserMedia(c).then(function(stream){// Work around https://bugzil.la/802326
if(c.audio&&!stream.getAudioTracks().length||c.video&&!stream.getVideoTracks().length){stream.getTracks().forEach(function(track){track.stop();});throw new DOMException('The object can not be found here.','NotFoundError');}return stream;},function(e){return Promise.reject(shimError_(e));});};}if(!(browserDetails.version>55&&'autoGainControl'in navigator.mediaDevices.getSupportedConstraints())){var remap=function remap(obj,a,b){if(a in obj&&!(b in obj)){obj[b]=obj[a];delete obj[a];}};var nativeGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(c){if((typeof c==="undefined"?"undefined":_typeof(c))==='object'&&_typeof(c.audio)==='object'){c=JSON.parse(JSON.stringify(c));remap(c.audio,'autoGainControl','mozAutoGainControl');remap(c.audio,'noiseSuppression','mozNoiseSuppression');}return nativeGetUserMedia(c);};if(MediaStreamTrack&&MediaStreamTrack.prototype.getSettings){var nativeGetSettings=MediaStreamTrack.prototype.getSettings;MediaStreamTrack.prototype.getSettings=function(){var obj=nativeGetSettings.apply(this,arguments);remap(obj,'mozAutoGainControl','autoGainControl');remap(obj,'mozNoiseSuppression','noiseSuppression');return obj;};}if(MediaStreamTrack&&MediaStreamTrack.prototype.applyConstraints){var nativeApplyConstraints=MediaStreamTrack.prototype.applyConstraints;MediaStreamTrack.prototype.applyConstraints=function(c){if(this.kind==='audio'&&(typeof c==="undefined"?"undefined":_typeof(c))==='object'){c=JSON.parse(JSON.stringify(c));remap(c,'autoGainControl','mozAutoGainControl');remap(c,'noiseSuppression','mozNoiseSuppression');}return nativeApplyConstraints.apply(this,[c]);};}}navigator.getUserMedia=function(constraints,onSuccess,onError){if(browserDetails.version<44){return getUserMedia_(constraints,onSuccess,onError);}// Replace Firefox 44+'s deprecation warning with unprefixed version.
console.warn('navigator.getUserMedia has been replaced by '+'navigator.mediaDevices.getUserMedia');navigator.mediaDevices.getUserMedia(constraints).then(onSuccess,onError);};};},{"../utils":12}],11:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */'use strict';var safariShim={// TODO: DrAlex, should be here, double check against LayoutTests
// TODO: once the back-end for the mac port is done, add.
// TODO: check for webkitGTK+
// shimPeerConnection: function() { },
shimAddStream:function shimAddStream(window){if((typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window.RTCPeerConnection&&!('addStream'in window.RTCPeerConnection.prototype)){window.RTCPeerConnection.prototype.addStream=function(stream){var self=this;stream.getTracks().forEach(function(track){self.addTrack(track,stream);});};}},shimOnAddStream:function shimOnAddStream(window){if((typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window.RTCPeerConnection&&!('onaddstream'in window.RTCPeerConnection.prototype)){Object.defineProperty(window.RTCPeerConnection.prototype,'onaddstream',{get:function get(){return this._onaddstream;},set:function set(f){if(this._onaddstream){this.removeEventListener('addstream',this._onaddstream);this.removeEventListener('track',this._onaddstreampoly);}this.addEventListener('addstream',this._onaddstream=f);this.addEventListener('track',this._onaddstreampoly=function(e){var stream=e.streams[0];if(!this._streams){this._streams=[];}if(this._streams.indexOf(stream)>=0){return;}this._streams.push(stream);var event=new Event('addstream');event.stream=e.streams[0];this.dispatchEvent(event);}.bind(this));}});}},shimCallbacksAPI:function shimCallbacksAPI(window){if((typeof window==="undefined"?"undefined":_typeof(window))!=='object'||!window.RTCPeerConnection){return;}var prototype=window.RTCPeerConnection.prototype;var createOffer=prototype.createOffer;var createAnswer=prototype.createAnswer;var setLocalDescription=prototype.setLocalDescription;var setRemoteDescription=prototype.setRemoteDescription;var addIceCandidate=prototype.addIceCandidate;prototype.createOffer=function(successCallback,failureCallback){var options=arguments.length>=2?arguments[2]:arguments[0];var promise=createOffer.apply(this,[options]);if(!failureCallback){return promise;}promise.then(successCallback,failureCallback);return Promise.resolve();};prototype.createAnswer=function(successCallback,failureCallback){var options=arguments.length>=2?arguments[2]:arguments[0];var promise=createAnswer.apply(this,[options]);if(!failureCallback){return promise;}promise.then(successCallback,failureCallback);return Promise.resolve();};var withCallback=function withCallback(description,successCallback,failureCallback){var promise=setLocalDescription.apply(this,[description]);if(!failureCallback){return promise;}promise.then(successCallback,failureCallback);return Promise.resolve();};prototype.setLocalDescription=withCallback;withCallback=function withCallback(description,successCallback,failureCallback){var promise=setRemoteDescription.apply(this,[description]);if(!failureCallback){return promise;}promise.then(successCallback,failureCallback);return Promise.resolve();};prototype.setRemoteDescription=withCallback;withCallback=function withCallback(candidate,successCallback,failureCallback){var promise=addIceCandidate.apply(this,[candidate]);if(!failureCallback){return promise;}promise.then(successCallback,failureCallback);return Promise.resolve();};prototype.addIceCandidate=withCallback;},shimGetUserMedia:function shimGetUserMedia(window){var navigator=window&&window.navigator;if(!navigator.getUserMedia){if(navigator.webkitGetUserMedia){navigator.getUserMedia=navigator.webkitGetUserMedia.bind(navigator);}else if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){navigator.getUserMedia=function(constraints,cb,errcb){navigator.mediaDevices.getUserMedia(constraints).then(cb,errcb);}.bind(navigator);}}}};// Expose public methods.
module.exports={shimCallbacksAPI:safariShim.shimCallbacksAPI,shimAddStream:safariShim.shimAddStream,shimOnAddStream:safariShim.shimOnAddStream,shimGetUserMedia:safariShim.shimGetUserMedia// TODO
// shimPeerConnection: safariShim.shimPeerConnection
};},{}],12:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var logDisabled_=true;// Utility methods.
var utils={disableLog:function disableLog(bool){if(typeof bool!=='boolean'){return new Error('Argument type: '+(typeof bool==="undefined"?"undefined":_typeof(bool))+'. Please use a boolean.');}logDisabled_=bool;return bool?'adapter.js logging disabled':'adapter.js logging enabled';},log:function log(){if((typeof window==="undefined"?"undefined":_typeof(window))==='object'){if(logDisabled_){return;}if(typeof console!=='undefined'&&typeof console.log==='function'){console.log.apply(console,arguments);}}},/**
             * Extract browser version out of the provided user agent string.
             *
             * @param {!string} uastring userAgent string.
             * @param {!string} expr Regular expression used as match criteria.
             * @param {!number} pos position in the version string to be returned.
             * @return {!number} browser version.
             */extractVersion:function extractVersion(uastring,expr,pos){var match=uastring.match(expr);return match&&match.length>=pos&&parseInt(match[pos],10);},/**
             * Browser detector.
             *
             * @return {object} result containing browser and version
             *     properties.
             */detectBrowser:function detectBrowser(window){var navigator=window&&window.navigator;// Returned result object.
var result={};result.browser=null;result.version=null;// Fail early if it's not a browser
if(typeof window==='undefined'||!window.navigator){result.browser='Not a browser.';return result;}// Firefox.
if(navigator.mozGetUserMedia){result.browser='firefox';result.version=this.extractVersion(navigator.userAgent,/Firefox\/(\d+)\./,1);}else if(navigator.webkitGetUserMedia){// Chrome, Chromium, Webview, Opera, all use the chrome shim for now
if(window.webkitRTCPeerConnection){result.browser='chrome';result.version=this.extractVersion(navigator.userAgent,/Chrom(e|ium)\/(\d+)\./,2);}else{// Safari (in an unpublished version) or unknown webkit-based.
if(navigator.userAgent.match(/Version\/(\d+).(\d+)/)){result.browser='safari';result.version=this.extractVersion(navigator.userAgent,/AppleWebKit\/(\d+)\./,1);}else{// unknown webkit-based browser.
result.browser='Unsupported webkit-based browser '+'with GUM support but no WebRTC support.';return result;}}}else if(navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)){// Edge.
result.browser='edge';result.version=this.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2);}else if(navigator.mediaDevices&&navigator.userAgent.match(/AppleWebKit\/(\d+)\./)){// Safari, with webkitGetUserMedia removed.
result.browser='safari';result.version=this.extractVersion(navigator.userAgent,/AppleWebKit\/(\d+)\./,1);}else{// Default fallthrough: not supported.
result.browser='Not a supported browser.';return result;}return result;},// shimCreateObjectURL must be called before shimSourceObject to avoid loop.
shimCreateObjectURL:function shimCreateObjectURL(window){var URL=window&&window.URL;if(!((typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window.HTMLMediaElement&&'srcObject'in window.HTMLMediaElement.prototype)){// Only shim CreateObjectURL using srcObject if srcObject exists.
return undefined;}var nativeCreateObjectURL=URL.createObjectURL.bind(URL);var nativeRevokeObjectURL=URL.revokeObjectURL.bind(URL);var streams=new Map(),newId=0;URL.createObjectURL=function(stream){if('getTracks'in stream){var url='polyblob:'+ ++newId;streams.set(url,stream);console.log('URL.createObjectURL(stream) is deprecated! '+'Use elem.srcObject = stream instead!');return url;}return nativeCreateObjectURL(stream);};URL.revokeObjectURL=function(url){nativeRevokeObjectURL(url);streams.delete(url);};var dsc=Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,'src');Object.defineProperty(window.HTMLMediaElement.prototype,'src',{get:function get(){return dsc.get.apply(this);},set:function set(url){this.srcObject=streams.get(url)||null;return dsc.set.apply(this,[url]);}});var nativeSetAttribute=window.HTMLMediaElement.prototype.setAttribute;window.HTMLMediaElement.prototype.setAttribute=function(){if(arguments.length===2&&(''+arguments[0]).toLowerCase()==='src'){this.srcObject=streams.get(arguments[1])||null;}return nativeSetAttribute.apply(this,arguments);};}};// Export.
module.exports={log:utils.log,disableLog:utils.disableLog,extractVersion:utils.extractVersion,shimCreateObjectURL:utils.shimCreateObjectURL,detectBrowser:utils.detectBrowser.bind(utils)};},{}]},{},[2])(2);});(function(f){if(( false?"undefined":_typeof(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.SimpleWebRTC=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(require,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count<=0){throw new Error('after called too many times');}--proxy.count;// after first error, rest are passed to err_cb
if(err){bail=true;callback(err);// future error callbacks will go to error handler
callback=err_cb;}else if(proxy.count===0&&!bail){callback(null,result);}}}function noop(){}},{}],2:[function(require,module,exports){/**
         * An abstraction for slicing an arraybuffer even when
         * ArrayBuffer.prototype.slice is not supported
         *
         * @api public
         */module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end);}if(start<0){start+=bytes;}if(end<0){end+=bytes;}if(end>bytes){end=bytes;}if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0);}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i];}return result.buffer;};},{}],3:[function(require,module,exports){var adapter=require('webrtc-adapter');module.exports=function(stream,el,options){var item;var URL=window.URL;var element=el;var opts={autoplay:true,mirror:false,muted:false,audio:false,disableContextMenu:false};if(options){for(item in options){opts[item]=options[item];}}if(!element){element=document.createElement(opts.audio?'audio':'video');}else if(element.tagName.toLowerCase()==='audio'){opts.audio=true;}if(opts.disableContextMenu){element.oncontextmenu=function(e){e.preventDefault();};}if(opts.autoplay)element.autoplay='autoplay';if(opts.muted)element.muted=true;if(!opts.audio&&opts.mirror){['','moz','webkit','o','ms'].forEach(function(prefix){var styleName=prefix?prefix+'Transform':'transform';element.style[styleName]='scaleX(-1)';});}element.srcObject=stream;return element;};},{"webrtc-adapter":4}],4:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';// Shimming starts here.
(function(){// Utils.
var logging=require('./utils').log;var browserDetails=require('./utils').browserDetails;// Export to the adapter global object visible in the browser.
module.exports.browserDetails=browserDetails;module.exports.extractVersion=require('./utils').extractVersion;module.exports.disableLog=require('./utils').disableLog;// Uncomment the line below if you want logging to occur, including logging
// for the switch statement below. Can also be turned on in the browser via
// adapter.disableLog(false), but then logging from the switch statement below
// will not appear.
// require('./utils').disableLog(false);
// Browser shims.
var chromeShim=require('./chrome/chrome_shim')||null;var edgeShim=require('./edge/edge_shim')||null;var firefoxShim=require('./firefox/firefox_shim')||null;var safariShim=require('./safari/safari_shim')||null;// Shim browser if found.
switch(browserDetails.browser){case'opera':// fallthrough as it uses chrome shims
case'chrome':if(!chromeShim||!chromeShim.shimPeerConnection){logging('Chrome shim is not included in this adapter release.');return;}logging('adapter.js shimming chrome.');// Export to the adapter global object visible in the browser.
module.exports.browserShim=chromeShim;chromeShim.shimGetUserMedia();chromeShim.shimMediaStream();chromeShim.shimSourceObject();chromeShim.shimPeerConnection();chromeShim.shimOnTrack();break;case'firefox':if(!firefoxShim||!firefoxShim.shimPeerConnection){logging('Firefox shim is not included in this adapter release.');return;}logging('adapter.js shimming firefox.');// Export to the adapter global object visible in the browser.
module.exports.browserShim=firefoxShim;firefoxShim.shimGetUserMedia();firefoxShim.shimSourceObject();firefoxShim.shimPeerConnection();firefoxShim.shimOnTrack();break;case'edge':if(!edgeShim||!edgeShim.shimPeerConnection){logging('MS edge shim is not included in this adapter release.');return;}logging('adapter.js shimming edge.');// Export to the adapter global object visible in the browser.
module.exports.browserShim=edgeShim;edgeShim.shimGetUserMedia();edgeShim.shimPeerConnection();break;case'safari':if(!safariShim){logging('Safari shim is not included in this adapter release.');return;}logging('adapter.js shimming safari.');// Export to the adapter global object visible in the browser.
module.exports.browserShim=safariShim;safariShim.shimGetUserMedia();break;default:logging('Unsupported browser!');}})();},{"./chrome/chrome_shim":5,"./edge/edge_shim":7,"./firefox/firefox_shim":9,"./safari/safari_shim":11,"./utils":12}],5:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var logging=require('../utils.js').log;var browserDetails=require('../utils.js').browserDetails;var chromeShim={shimMediaStream:function shimMediaStream(){window.MediaStream=window.MediaStream||window.webkitMediaStream;},shimOnTrack:function shimOnTrack(){if((typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window.RTCPeerConnection&&!('ontrack'in window.RTCPeerConnection.prototype)){Object.defineProperty(window.RTCPeerConnection.prototype,'ontrack',{get:function get(){return this._ontrack;},set:function set(f){var self=this;if(this._ontrack){this.removeEventListener('track',this._ontrack);this.removeEventListener('addstream',this._ontrackpoly);}this.addEventListener('track',this._ontrack=f);this.addEventListener('addstream',this._ontrackpoly=function(e){// onaddstream does not fire when a track is added to an existing
// stream. But stream.onaddtrack is implemented so we use that.
e.stream.addEventListener('addtrack',function(te){var event=new Event('track');event.track=te.track;event.receiver={track:te.track};event.streams=[e.stream];self.dispatchEvent(event);});e.stream.getTracks().forEach(function(track){var event=new Event('track');event.track=track;event.receiver={track:track};event.streams=[e.stream];this.dispatchEvent(event);}.bind(this));}.bind(this));}});}},shimSourceObject:function shimSourceObject(){if((typeof window==="undefined"?"undefined":_typeof(window))==='object'){if(window.HTMLMediaElement&&!('srcObject'in window.HTMLMediaElement.prototype)){// Shim the srcObject property, once, when HTMLMediaElement is found.
Object.defineProperty(window.HTMLMediaElement.prototype,'srcObject',{get:function get(){return this._srcObject;},set:function set(stream){var self=this;// Use _srcObject as a private property for this shim
this._srcObject=stream;if(this.src){URL.revokeObjectURL(this.src);}if(!stream){this.src='';return;}this.src=URL.createObjectURL(stream);// We need to recreate the blob url when a track is added or
// removed. Doing it manually since we want to avoid a recursion.
stream.addEventListener('addtrack',function(){if(self.src){URL.revokeObjectURL(self.src);}self.src=URL.createObjectURL(stream);});stream.addEventListener('removetrack',function(){if(self.src){URL.revokeObjectURL(self.src);}self.src=URL.createObjectURL(stream);});}});}}},shimPeerConnection:function shimPeerConnection(){// The RTCPeerConnection object.
window.RTCPeerConnection=function(pcConfig,pcConstraints){// Translate iceTransportPolicy to iceTransports,
// see https://code.google.com/p/webrtc/issues/detail?id=4869
logging('PeerConnection');if(pcConfig&&pcConfig.iceTransportPolicy){pcConfig.iceTransports=pcConfig.iceTransportPolicy;}var pc=new webkitRTCPeerConnection(pcConfig,pcConstraints);var origGetStats=pc.getStats.bind(pc);pc.getStats=function(selector,successCallback,errorCallback){var self=this;var args=arguments;// If selector is a function then we are in the old style stats so just
// pass back the original getStats format to avoid breaking old users.
if(arguments.length>0&&typeof selector==='function'){return origGetStats(selector,successCallback);}var fixChromeStats_=function fixChromeStats_(response){var standardReport={};var reports=response.result();reports.forEach(function(report){var standardStats={id:report.id,timestamp:report.timestamp,type:report.type};report.names().forEach(function(name){standardStats[name]=report.stat(name);});standardReport[standardStats.id]=standardStats;});return standardReport;};// shim getStats with maplike support
var makeMapStats=function makeMapStats(stats,legacyStats){var map=new Map(Object.keys(stats).map(function(key){return[key,stats[key]];}));legacyStats=legacyStats||stats;Object.keys(legacyStats).forEach(function(key){map[key]=legacyStats[key];});return map;};if(arguments.length>=2){var successCallbackWrapper_=function successCallbackWrapper_(response){args[1](makeMapStats(fixChromeStats_(response)));};return origGetStats.apply(this,[successCallbackWrapper_,arguments[0]]);}// promise-support
return new Promise(function(resolve,reject){if(args.length===1&&(typeof selector==="undefined"?"undefined":_typeof(selector))==='object'){origGetStats.apply(self,[function(response){resolve(makeMapStats(fixChromeStats_(response)));},reject]);}else{// Preserve legacy chrome stats only on legacy access of stats obj
origGetStats.apply(self,[function(response){resolve(makeMapStats(fixChromeStats_(response),response.result()));},reject]);}}).then(successCallback,errorCallback);};return pc;};window.RTCPeerConnection.prototype=webkitRTCPeerConnection.prototype;// wrap static methods. Currently just generateCertificate.
if(webkitRTCPeerConnection.generateCertificate){Object.defineProperty(window.RTCPeerConnection,'generateCertificate',{get:function get(){return webkitRTCPeerConnection.generateCertificate;}});}['createOffer','createAnswer'].forEach(function(method){var nativeMethod=webkitRTCPeerConnection.prototype[method];webkitRTCPeerConnection.prototype[method]=function(){var self=this;if(arguments.length<1||arguments.length===1&&_typeof(arguments[0])==='object'){var opts=arguments.length===1?arguments[0]:undefined;return new Promise(function(resolve,reject){nativeMethod.apply(self,[resolve,reject,opts]);});}return nativeMethod.apply(this,arguments);};});// add promise support -- natively available in Chrome 51
if(browserDetails.version<51){['setLocalDescription','setRemoteDescription','addIceCandidate'].forEach(function(method){var nativeMethod=webkitRTCPeerConnection.prototype[method];webkitRTCPeerConnection.prototype[method]=function(){var args=arguments;var self=this;var promise=new Promise(function(resolve,reject){nativeMethod.apply(self,[args[0],resolve,reject]);});if(args.length<2){return promise;}return promise.then(function(){args[1].apply(null,[]);},function(err){if(args.length>=3){args[2].apply(null,[err]);}});};});}// shim implicit creation of RTCSessionDescription/RTCIceCandidate
['setLocalDescription','setRemoteDescription','addIceCandidate'].forEach(function(method){var nativeMethod=webkitRTCPeerConnection.prototype[method];webkitRTCPeerConnection.prototype[method]=function(){arguments[0]=new(method==='addIceCandidate'?RTCIceCandidate:RTCSessionDescription)(arguments[0]);return nativeMethod.apply(this,arguments);};});// support for addIceCandidate(null or undefined)
var nativeAddIceCandidate=RTCPeerConnection.prototype.addIceCandidate;RTCPeerConnection.prototype.addIceCandidate=function(){if(!arguments[0]){if(arguments[1]){arguments[1].apply(null);}return Promise.resolve();}return nativeAddIceCandidate.apply(this,arguments);};}};// Expose public methods.
module.exports={shimMediaStream:chromeShim.shimMediaStream,shimOnTrack:chromeShim.shimOnTrack,shimSourceObject:chromeShim.shimSourceObject,shimPeerConnection:chromeShim.shimPeerConnection,shimGetUserMedia:require('./getusermedia')};},{"../utils.js":12,"./getusermedia":6}],6:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var logging=require('../utils.js').log;// Expose public methods.
module.exports=function(){var constraintsToChrome_=function constraintsToChrome_(c){if((typeof c==="undefined"?"undefined":_typeof(c))!=='object'||c.mandatory||c.optional){return c;}var cc={};Object.keys(c).forEach(function(key){if(key==='require'||key==='advanced'||key==='mediaSource'){return;}var r=_typeof(c[key])==='object'?c[key]:{ideal:c[key]};if(r.exact!==undefined&&typeof r.exact==='number'){r.min=r.max=r.exact;}var oldname_=function oldname_(prefix,name){if(prefix){return prefix+name.charAt(0).toUpperCase()+name.slice(1);}return name==='deviceId'?'sourceId':name;};if(r.ideal!==undefined){cc.optional=cc.optional||[];var oc={};if(typeof r.ideal==='number'){oc[oldname_('min',key)]=r.ideal;cc.optional.push(oc);oc={};oc[oldname_('max',key)]=r.ideal;cc.optional.push(oc);}else{oc[oldname_('',key)]=r.ideal;cc.optional.push(oc);}}if(r.exact!==undefined&&typeof r.exact!=='number'){cc.mandatory=cc.mandatory||{};cc.mandatory[oldname_('',key)]=r.exact;}else{['min','max'].forEach(function(mix){if(r[mix]!==undefined){cc.mandatory=cc.mandatory||{};cc.mandatory[oldname_(mix,key)]=r[mix];}});}});if(c.advanced){cc.optional=(cc.optional||[]).concat(c.advanced);}return cc;};var shimConstraints_=function shimConstraints_(constraints,func){constraints=JSON.parse(JSON.stringify(constraints));if(constraints&&constraints.audio){constraints.audio=constraintsToChrome_(constraints.audio);}if(constraints&&_typeof(constraints.video)==='object'){// Shim facingMode for mobile, where it defaults to "user".
var face=constraints.video.facingMode;face=face&&((typeof face==="undefined"?"undefined":_typeof(face))==='object'?face:{ideal:face});if(face&&(face.exact==='user'||face.exact==='environment'||face.ideal==='user'||face.ideal==='environment')&&!(navigator.mediaDevices.getSupportedConstraints&&navigator.mediaDevices.getSupportedConstraints().facingMode)){delete constraints.video.facingMode;if(face.exact==='environment'||face.ideal==='environment'){// Look for "back" in label, or use last cam (typically back cam).
return navigator.mediaDevices.enumerateDevices().then(function(devices){devices=devices.filter(function(d){return d.kind==='videoinput';});var back=devices.find(function(d){return d.label.toLowerCase().indexOf('back')!==-1;})||devices.length&&devices[devices.length-1];if(back){constraints.video.deviceId=face.exact?{exact:back.deviceId}:{ideal:back.deviceId};}constraints.video=constraintsToChrome_(constraints.video);logging('chrome: '+JSON.stringify(constraints));return func(constraints);});}}constraints.video=constraintsToChrome_(constraints.video);}logging('chrome: '+JSON.stringify(constraints));return func(constraints);};var shimError_=function shimError_(e){return{name:{PermissionDeniedError:'NotAllowedError',ConstraintNotSatisfiedError:'OverconstrainedError'}[e.name]||e.name,message:e.message,constraint:e.constraintName,toString:function toString(){return this.name+(this.message&&': ')+this.message;}};};var getUserMedia_=function getUserMedia_(constraints,onSuccess,onError){shimConstraints_(constraints,function(c){navigator.webkitGetUserMedia(c,onSuccess,function(e){onError(shimError_(e));});});};navigator.getUserMedia=getUserMedia_;// Returns the result of getUserMedia as a Promise.
var getUserMediaPromise_=function getUserMediaPromise_(constraints){return new Promise(function(resolve,reject){navigator.getUserMedia(constraints,resolve,reject);});};if(!navigator.mediaDevices){navigator.mediaDevices={getUserMedia:getUserMediaPromise_,enumerateDevices:function enumerateDevices(){return new Promise(function(resolve){var kinds={audio:'audioinput',video:'videoinput'};return MediaStreamTrack.getSources(function(devices){resolve(devices.map(function(device){return{label:device.label,kind:kinds[device.kind],deviceId:device.id,groupId:''};}));});});}};}// A shim for getUserMedia method on the mediaDevices object.
// TODO(KaptenJansson) remove once implemented in Chrome stable.
if(!navigator.mediaDevices.getUserMedia){navigator.mediaDevices.getUserMedia=function(constraints){return getUserMediaPromise_(constraints);};}else{// Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
// function which returns a Promise, it does not accept spec-style
// constraints.
var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(cs){return shimConstraints_(cs,function(c){return origGetUserMedia(c).then(function(stream){if(c.audio&&!stream.getAudioTracks().length||c.video&&!stream.getVideoTracks().length){stream.getTracks().forEach(function(track){track.stop();});throw new DOMException('','NotFoundError');}return stream;},function(e){return Promise.reject(shimError_(e));});});};}// Dummy devicechange event methods.
// TODO(KaptenJansson) remove once implemented in Chrome stable.
if(typeof navigator.mediaDevices.addEventListener==='undefined'){navigator.mediaDevices.addEventListener=function(){logging('Dummy mediaDevices.addEventListener called.');};}if(typeof navigator.mediaDevices.removeEventListener==='undefined'){navigator.mediaDevices.removeEventListener=function(){logging('Dummy mediaDevices.removeEventListener called.');};}};},{"../utils.js":12}],7:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var SDPUtils=require('sdp');var browserDetails=require('../utils').browserDetails;var edgeShim={shimPeerConnection:function shimPeerConnection(){if(window.RTCIceGatherer){// ORTC defines an RTCIceCandidate object but no constructor.
// Not implemented in Edge.
if(!window.RTCIceCandidate){window.RTCIceCandidate=function(args){return args;};}// ORTC does not have a session description object but
// other browsers (i.e. Chrome) that will support both PC and ORTC
// in the future might have this defined already.
if(!window.RTCSessionDescription){window.RTCSessionDescription=function(args){return args;};}// this adds an additional event listener to MediaStrackTrack that signals
// when a tracks enabled property was changed.
var origMSTEnabled=Object.getOwnPropertyDescriptor(MediaStreamTrack.prototype,'enabled');Object.defineProperty(MediaStreamTrack.prototype,'enabled',{set:function set(value){origMSTEnabled.set.call(this,value);var ev=new Event('enabled');ev.enabled=value;this.dispatchEvent(ev);}});}window.RTCPeerConnection=function(config){var self=this;var _eventTarget=document.createDocumentFragment();['addEventListener','removeEventListener','dispatchEvent'].forEach(function(method){self[method]=_eventTarget[method].bind(_eventTarget);});this.onicecandidate=null;this.onaddstream=null;this.ontrack=null;this.onremovestream=null;this.onsignalingstatechange=null;this.oniceconnectionstatechange=null;this.onnegotiationneeded=null;this.ondatachannel=null;this.localStreams=[];this.remoteStreams=[];this.getLocalStreams=function(){return self.localStreams;};this.getRemoteStreams=function(){return self.remoteStreams;};this.localDescription=new RTCSessionDescription({type:'',sdp:''});this.remoteDescription=new RTCSessionDescription({type:'',sdp:''});this.signalingState='stable';this.iceConnectionState='new';this.iceGatheringState='new';this.iceOptions={gatherPolicy:'all',iceServers:[]};if(config&&config.iceTransportPolicy){switch(config.iceTransportPolicy){case'all':case'relay':this.iceOptions.gatherPolicy=config.iceTransportPolicy;break;case'none':// FIXME: remove once implementation and spec have added this.
throw new TypeError('iceTransportPolicy "none" not supported');default:// don't set iceTransportPolicy.
break;}}this.usingBundle=config&&config.bundlePolicy==='max-bundle';if(config&&config.iceServers){// Edge does not like
// 1) stun:
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
var iceServers=JSON.parse(JSON.stringify(config.iceServers));this.iceOptions.iceServers=iceServers.filter(function(server){if(server&&server.urls){var urls=server.urls;if(typeof urls==='string'){urls=[urls];}urls=urls.filter(function(url){return url.indexOf('turn:')===0&&url.indexOf('transport=udp')!==-1&&url.indexOf('turn:[')===-1||url.indexOf('stun:')===0&&browserDetails.version>=14393;})[0];return!!urls;}return false;});}this._config=config;// per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
// everything that is needed to describe a SDP m-line.
this.transceivers=[];// since the iceGatherer is currently created in createOffer but we
// must not emit candidates until after setLocalDescription we buffer
// them in this array.
this._localIceCandidatesBuffer=[];};window.RTCPeerConnection.prototype._emitBufferedCandidates=function(){var self=this;var sections=SDPUtils.splitSections(self.localDescription.sdp);// FIXME: need to apply ice candidates in a way which is async but
// in-order
this._localIceCandidatesBuffer.forEach(function(event){var end=!event.candidate||Object.keys(event.candidate).length===0;if(end){for(var j=1;j<sections.length;j++){if(sections[j].indexOf('\r\na=end-of-candidates\r\n')===-1){sections[j]+='a=end-of-candidates\r\n';}}}else if(event.candidate.candidate.indexOf('typ endOfCandidates')===-1){sections[event.candidate.sdpMLineIndex+1]+='a='+event.candidate.candidate+'\r\n';}self.localDescription.sdp=sections.join('');self.dispatchEvent(event);if(self.onicecandidate!==null){self.onicecandidate(event);}if(!event.candidate&&self.iceGatheringState!=='complete'){var complete=self.transceivers.every(function(transceiver){return transceiver.iceGatherer&&transceiver.iceGatherer.state==='completed';});if(complete){self.iceGatheringState='complete';}}});this._localIceCandidatesBuffer=[];};window.RTCPeerConnection.prototype.getConfiguration=function(){return this._config;};window.RTCPeerConnection.prototype.addStream=function(stream){// Clone is necessary for local demos mostly, attaching directly
// to two different senders does not work (build 10547).
var clonedStream=stream.clone();stream.getTracks().forEach(function(track,idx){var clonedTrack=clonedStream.getTracks()[idx];track.addEventListener('enabled',function(event){clonedTrack.enabled=event.enabled;});});this.localStreams.push(clonedStream);this._maybeFireNegotiationNeeded();};window.RTCPeerConnection.prototype.removeStream=function(stream){var idx=this.localStreams.indexOf(stream);if(idx>-1){this.localStreams.splice(idx,1);this._maybeFireNegotiationNeeded();}};window.RTCPeerConnection.prototype.getSenders=function(){return this.transceivers.filter(function(transceiver){return!!transceiver.rtpSender;}).map(function(transceiver){return transceiver.rtpSender;});};window.RTCPeerConnection.prototype.getReceivers=function(){return this.transceivers.filter(function(transceiver){return!!transceiver.rtpReceiver;}).map(function(transceiver){return transceiver.rtpReceiver;});};// Determines the intersection of local and remote capabilities.
window.RTCPeerConnection.prototype._getCommonCapabilities=function(localCapabilities,remoteCapabilities){var commonCapabilities={codecs:[],headerExtensions:[],fecMechanisms:[]};localCapabilities.codecs.forEach(function(lCodec){for(var i=0;i<remoteCapabilities.codecs.length;i++){var rCodec=remoteCapabilities.codecs[i];if(lCodec.name.toLowerCase()===rCodec.name.toLowerCase()&&lCodec.clockRate===rCodec.clockRate){// number of channels is the highest common number of channels
rCodec.numChannels=Math.min(lCodec.numChannels,rCodec.numChannels);// push rCodec so we reply with offerer payload type
commonCapabilities.codecs.push(rCodec);// determine common feedback mechanisms
rCodec.rtcpFeedback=rCodec.rtcpFeedback.filter(function(fb){for(var j=0;j<lCodec.rtcpFeedback.length;j++){if(lCodec.rtcpFeedback[j].type===fb.type&&lCodec.rtcpFeedback[j].parameter===fb.parameter){return true;}}return false;});// FIXME: also need to determine .parameters
//  see https://github.com/openpeer/ortc/issues/569
break;}}});localCapabilities.headerExtensions.forEach(function(lHeaderExtension){for(var i=0;i<remoteCapabilities.headerExtensions.length;i++){var rHeaderExtension=remoteCapabilities.headerExtensions[i];if(lHeaderExtension.uri===rHeaderExtension.uri){commonCapabilities.headerExtensions.push(rHeaderExtension);break;}}});// FIXME: fecMechanisms
return commonCapabilities;};// Create ICE gatherer, ICE transport and DTLS transport.
window.RTCPeerConnection.prototype._createIceAndDtlsTransports=function(mid,sdpMLineIndex){var self=this;var iceGatherer=new RTCIceGatherer(self.iceOptions);var iceTransport=new RTCIceTransport(iceGatherer);iceGatherer.onlocalcandidate=function(evt){var event=new Event('icecandidate');event.candidate={sdpMid:mid,sdpMLineIndex:sdpMLineIndex};var cand=evt.candidate;var end=!cand||Object.keys(cand).length===0;// Edge emits an empty object for RTCIceCandidateComplete‥
if(end){// polyfill since RTCIceGatherer.state is not implemented in
// Edge 10547 yet.
if(iceGatherer.state===undefined){iceGatherer.state='completed';}// Emit a candidate with type endOfCandidates to make the samples
// work. Edge requires addIceCandidate with this empty candidate
// to start checking. The real solution is to signal
// end-of-candidates to the other side when getting the null
// candidate but some apps (like the samples) don't do that.
event.candidate.candidate='candidate:1 1 udp 1 0.0.0.0 9 typ endOfCandidates';}else{// RTCIceCandidate doesn't have a component, needs to be added
cand.component=iceTransport.component==='RTCP'?2:1;event.candidate.candidate=SDPUtils.writeCandidate(cand);}// update local description.
var sections=SDPUtils.splitSections(self.localDescription.sdp);if(event.candidate.candidate.indexOf('typ endOfCandidates')===-1){sections[event.candidate.sdpMLineIndex+1]+='a='+event.candidate.candidate+'\r\n';}else{sections[event.candidate.sdpMLineIndex+1]+='a=end-of-candidates\r\n';}self.localDescription.sdp=sections.join('');var complete=self.transceivers.every(function(transceiver){return transceiver.iceGatherer&&transceiver.iceGatherer.state==='completed';});// Emit candidate if localDescription is set.
// Also emits null candidate when all gatherers are complete.
switch(self.iceGatheringState){case'new':self._localIceCandidatesBuffer.push(event);if(end&&complete){self._localIceCandidatesBuffer.push(new Event('icecandidate'));}break;case'gathering':self._emitBufferedCandidates();self.dispatchEvent(event);if(self.onicecandidate!==null){self.onicecandidate(event);}if(complete){self.dispatchEvent(new Event('icecandidate'));if(self.onicecandidate!==null){self.onicecandidate(new Event('icecandidate'));}self.iceGatheringState='complete';}break;case'complete':// should not happen... currently!
break;default:// no-op.
break;}};iceTransport.onicestatechange=function(){self._updateConnectionState();};var dtlsTransport=new RTCDtlsTransport(iceTransport);dtlsTransport.ondtlsstatechange=function(){self._updateConnectionState();};dtlsTransport.onerror=function(){// onerror does not set state to failed by itself.
dtlsTransport.state='failed';self._updateConnectionState();};return{iceGatherer:iceGatherer,iceTransport:iceTransport,dtlsTransport:dtlsTransport};};// Start the RTP Sender and Receiver for a transceiver.
window.RTCPeerConnection.prototype._transceive=function(transceiver,send,recv){var params=this._getCommonCapabilities(transceiver.localCapabilities,transceiver.remoteCapabilities);if(send&&transceiver.rtpSender){params.encodings=transceiver.sendEncodingParameters;params.rtcp={cname:SDPUtils.localCName};if(transceiver.recvEncodingParameters.length){params.rtcp.ssrc=transceiver.recvEncodingParameters[0].ssrc;}transceiver.rtpSender.send(params);}if(recv&&transceiver.rtpReceiver){// remove RTX field in Edge 14942
if(transceiver.kind==='video'&&transceiver.recvEncodingParameters){transceiver.recvEncodingParameters.forEach(function(p){delete p.rtx;});}params.encodings=transceiver.recvEncodingParameters;params.rtcp={cname:transceiver.cname};if(transceiver.sendEncodingParameters.length){params.rtcp.ssrc=transceiver.sendEncodingParameters[0].ssrc;}transceiver.rtpReceiver.receive(params);}};window.RTCPeerConnection.prototype.setLocalDescription=function(description){var self=this;var sections;var sessionpart;if(description.type==='offer'){// FIXME: What was the purpose of this empty if statement?
// if (!this._pendingOffer) {
// } else {
if(this._pendingOffer){// VERY limited support for SDP munging. Limited to:
// * changing the order of codecs
sections=SDPUtils.splitSections(description.sdp);sessionpart=sections.shift();sections.forEach(function(mediaSection,sdpMLineIndex){var caps=SDPUtils.parseRtpParameters(mediaSection);self._pendingOffer[sdpMLineIndex].localCapabilities=caps;});this.transceivers=this._pendingOffer;delete this._pendingOffer;}}else if(description.type==='answer'){sections=SDPUtils.splitSections(self.remoteDescription.sdp);sessionpart=sections.shift();var isIceLite=SDPUtils.matchPrefix(sessionpart,'a=ice-lite').length>0;sections.forEach(function(mediaSection,sdpMLineIndex){var transceiver=self.transceivers[sdpMLineIndex];var iceGatherer=transceiver.iceGatherer;var iceTransport=transceiver.iceTransport;var dtlsTransport=transceiver.dtlsTransport;var localCapabilities=transceiver.localCapabilities;var remoteCapabilities=transceiver.remoteCapabilities;var rejected=mediaSection.split('\n',1)[0].split(' ',2)[1]==='0';if(!rejected&&!transceiver.isDatachannel){var remoteIceParameters=SDPUtils.getIceParameters(mediaSection,sessionpart);if(isIceLite){var cands=SDPUtils.matchPrefix(mediaSection,'a=candidate:').map(function(cand){return SDPUtils.parseCandidate(cand);}).filter(function(cand){return cand.component==='1';});// ice-lite only includes host candidates in the SDP so we can
// use setRemoteCandidates (which implies an
// RTCIceCandidateComplete)
if(cands.length){iceTransport.setRemoteCandidates(cands);}}var remoteDtlsParameters=SDPUtils.getDtlsParameters(mediaSection,sessionpart);if(isIceLite){remoteDtlsParameters.role='server';}if(!self.usingBundle||sdpMLineIndex===0){iceTransport.start(iceGatherer,remoteIceParameters,isIceLite?'controlling':'controlled');dtlsTransport.start(remoteDtlsParameters);}// Calculate intersection of capabilities.
var params=self._getCommonCapabilities(localCapabilities,remoteCapabilities);// Start the RTCRtpSender. The RTCRtpReceiver for this
// transceiver has already been started in setRemoteDescription.
self._transceive(transceiver,params.codecs.length>0,false);}});}this.localDescription={type:description.type,sdp:description.sdp};switch(description.type){case'offer':this._updateSignalingState('have-local-offer');break;case'answer':this._updateSignalingState('stable');break;default:throw new TypeError('unsupported type "'+description.type+'"');}// If a success callback was provided, emit ICE candidates after it
// has been executed. Otherwise, emit callback after the Promise is
// resolved.
var hasCallback=arguments.length>1&&typeof arguments[1]==='function';if(hasCallback){var cb=arguments[1];window.setTimeout(function(){cb();if(self.iceGatheringState==='new'){self.iceGatheringState='gathering';}self._emitBufferedCandidates();},0);}var p=Promise.resolve();p.then(function(){if(!hasCallback){if(self.iceGatheringState==='new'){self.iceGatheringState='gathering';}// Usually candidates will be emitted earlier.
window.setTimeout(self._emitBufferedCandidates.bind(self),500);}});return p;};window.RTCPeerConnection.prototype.setRemoteDescription=function(description){var self=this;var stream=new MediaStream();var receiverList=[];var sections=SDPUtils.splitSections(description.sdp);var sessionpart=sections.shift();var isIceLite=SDPUtils.matchPrefix(sessionpart,'a=ice-lite').length>0;this.usingBundle=SDPUtils.matchPrefix(sessionpart,'a=group:BUNDLE ').length>0;sections.forEach(function(mediaSection,sdpMLineIndex){var lines=SDPUtils.splitLines(mediaSection);var mline=lines[0].substr(2).split(' ');var kind=mline[0];var rejected=mline[1]==='0';var direction=SDPUtils.getDirection(mediaSection,sessionpart);var mid=SDPUtils.matchPrefix(mediaSection,'a=mid:');if(mid.length){mid=mid[0].substr(6);}else{mid=SDPUtils.generateIdentifier();}// Reject datachannels which are not implemented yet.
if(kind==='application'&&mline[2]==='DTLS/SCTP'){self.transceivers[sdpMLineIndex]={mid:mid,isDatachannel:true};return;}var transceiver;var iceGatherer;var iceTransport;var dtlsTransport;var rtpSender;var rtpReceiver;var sendEncodingParameters;var recvEncodingParameters;var localCapabilities;var track;// FIXME: ensure the mediaSection has rtcp-mux set.
var remoteCapabilities=SDPUtils.parseRtpParameters(mediaSection);var remoteIceParameters;var remoteDtlsParameters;if(!rejected){remoteIceParameters=SDPUtils.getIceParameters(mediaSection,sessionpart);remoteDtlsParameters=SDPUtils.getDtlsParameters(mediaSection,sessionpart);remoteDtlsParameters.role='client';}recvEncodingParameters=SDPUtils.parseRtpEncodingParameters(mediaSection);var cname;// Gets the first SSRC. Note that with RTX there might be multiple
// SSRCs.
var remoteSsrc=SDPUtils.matchPrefix(mediaSection,'a=ssrc:').map(function(line){return SDPUtils.parseSsrcMedia(line);}).filter(function(obj){return obj.attribute==='cname';})[0];if(remoteSsrc){cname=remoteSsrc.value;}var isComplete=SDPUtils.matchPrefix(mediaSection,'a=end-of-candidates',sessionpart).length>0;var cands=SDPUtils.matchPrefix(mediaSection,'a=candidate:').map(function(cand){return SDPUtils.parseCandidate(cand);}).filter(function(cand){return cand.component==='1';});if(description.type==='offer'&&!rejected){var transports=self.usingBundle&&sdpMLineIndex>0?{iceGatherer:self.transceivers[0].iceGatherer,iceTransport:self.transceivers[0].iceTransport,dtlsTransport:self.transceivers[0].dtlsTransport}:self._createIceAndDtlsTransports(mid,sdpMLineIndex);if(isComplete){transports.iceTransport.setRemoteCandidates(cands);}localCapabilities=RTCRtpReceiver.getCapabilities(kind);// filter RTX until additional stuff needed for RTX is implemented
// in adapter.js
localCapabilities.codecs=localCapabilities.codecs.filter(function(codec){return codec.name!=='rtx';});sendEncodingParameters=[{ssrc:(2*sdpMLineIndex+2)*1001}];rtpReceiver=new RTCRtpReceiver(transports.dtlsTransport,kind);track=rtpReceiver.track;receiverList.push([track,rtpReceiver]);// FIXME: not correct when there are multiple streams but that is
// not currently supported in this shim.
stream.addTrack(track);// FIXME: look at direction.
if(self.localStreams.length>0&&self.localStreams[0].getTracks().length>=sdpMLineIndex){var localTrack;if(kind==='audio'){localTrack=self.localStreams[0].getAudioTracks()[0];}else if(kind==='video'){localTrack=self.localStreams[0].getVideoTracks()[0];}if(localTrack){rtpSender=new RTCRtpSender(localTrack,transports.dtlsTransport);}}self.transceivers[sdpMLineIndex]={iceGatherer:transports.iceGatherer,iceTransport:transports.iceTransport,dtlsTransport:transports.dtlsTransport,localCapabilities:localCapabilities,remoteCapabilities:remoteCapabilities,rtpSender:rtpSender,rtpReceiver:rtpReceiver,kind:kind,mid:mid,cname:cname,sendEncodingParameters:sendEncodingParameters,recvEncodingParameters:recvEncodingParameters};// Start the RTCRtpReceiver now. The RTPSender is started in
// setLocalDescription.
self._transceive(self.transceivers[sdpMLineIndex],false,direction==='sendrecv'||direction==='sendonly');}else if(description.type==='answer'&&!rejected){transceiver=self.transceivers[sdpMLineIndex];iceGatherer=transceiver.iceGatherer;iceTransport=transceiver.iceTransport;dtlsTransport=transceiver.dtlsTransport;rtpSender=transceiver.rtpSender;rtpReceiver=transceiver.rtpReceiver;sendEncodingParameters=transceiver.sendEncodingParameters;localCapabilities=transceiver.localCapabilities;self.transceivers[sdpMLineIndex].recvEncodingParameters=recvEncodingParameters;self.transceivers[sdpMLineIndex].remoteCapabilities=remoteCapabilities;self.transceivers[sdpMLineIndex].cname=cname;if((isIceLite||isComplete)&&cands.length){iceTransport.setRemoteCandidates(cands);}if(!self.usingBundle||sdpMLineIndex===0){iceTransport.start(iceGatherer,remoteIceParameters,'controlling');dtlsTransport.start(remoteDtlsParameters);}self._transceive(transceiver,direction==='sendrecv'||direction==='recvonly',direction==='sendrecv'||direction==='sendonly');if(rtpReceiver&&(direction==='sendrecv'||direction==='sendonly')){track=rtpReceiver.track;receiverList.push([track,rtpReceiver]);stream.addTrack(track);}else{// FIXME: actually the receiver should be created later.
delete transceiver.rtpReceiver;}}});this.remoteDescription={type:description.type,sdp:description.sdp};switch(description.type){case'offer':this._updateSignalingState('have-remote-offer');break;case'answer':this._updateSignalingState('stable');break;default:throw new TypeError('unsupported type "'+description.type+'"');}if(stream.getTracks().length){self.remoteStreams.push(stream);window.setTimeout(function(){var event=new Event('addstream');event.stream=stream;self.dispatchEvent(event);if(self.onaddstream!==null){window.setTimeout(function(){self.onaddstream(event);},0);}receiverList.forEach(function(item){var track=item[0];var receiver=item[1];var trackEvent=new Event('track');trackEvent.track=track;trackEvent.receiver=receiver;trackEvent.streams=[stream];self.dispatchEvent(event);if(self.ontrack!==null){window.setTimeout(function(){self.ontrack(trackEvent);},0);}});},0);}if(arguments.length>1&&typeof arguments[1]==='function'){window.setTimeout(arguments[1],0);}return Promise.resolve();};window.RTCPeerConnection.prototype.close=function(){this.transceivers.forEach(function(transceiver){/* not yet
        if (transceiver.iceGatherer) {
          transceiver.iceGatherer.close();
        }
        */if(transceiver.iceTransport){transceiver.iceTransport.stop();}if(transceiver.dtlsTransport){transceiver.dtlsTransport.stop();}if(transceiver.rtpSender){transceiver.rtpSender.stop();}if(transceiver.rtpReceiver){transceiver.rtpReceiver.stop();}});// FIXME: clean up tracks, local streams, remote streams, etc
this._updateSignalingState('closed');};// Update the signaling state.
window.RTCPeerConnection.prototype._updateSignalingState=function(newState){this.signalingState=newState;var event=new Event('signalingstatechange');this.dispatchEvent(event);if(this.onsignalingstatechange!==null){this.onsignalingstatechange(event);}};// Determine whether to fire the negotiationneeded event.
window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded=function(){// Fire away (for now).
var event=new Event('negotiationneeded');this.dispatchEvent(event);if(this.onnegotiationneeded!==null){this.onnegotiationneeded(event);}};// Update the connection state.
window.RTCPeerConnection.prototype._updateConnectionState=function(){var self=this;var newState;var states={'new':0,closed:0,connecting:0,checking:0,connected:0,completed:0,failed:0};this.transceivers.forEach(function(transceiver){states[transceiver.iceTransport.state]++;states[transceiver.dtlsTransport.state]++;});// ICETransport.completed and connected are the same for this purpose.
states.connected+=states.completed;newState='new';if(states.failed>0){newState='failed';}else if(states.connecting>0||states.checking>0){newState='connecting';}else if(states.disconnected>0){newState='disconnected';}else if(states.new>0){newState='new';}else if(states.connected>0||states.completed>0){newState='connected';}if(newState!==self.iceConnectionState){self.iceConnectionState=newState;var event=new Event('iceconnectionstatechange');this.dispatchEvent(event);if(this.oniceconnectionstatechange!==null){this.oniceconnectionstatechange(event);}}};window.RTCPeerConnection.prototype.createOffer=function(){var self=this;if(this._pendingOffer){throw new Error('createOffer called while there is a pending offer.');}var offerOptions;if(arguments.length===1&&typeof arguments[0]!=='function'){offerOptions=arguments[0];}else if(arguments.length===3){offerOptions=arguments[2];}var tracks=[];var numAudioTracks=0;var numVideoTracks=0;// Default to sendrecv.
if(this.localStreams.length){numAudioTracks=this.localStreams[0].getAudioTracks().length;numVideoTracks=this.localStreams[0].getVideoTracks().length;}// Determine number of audio and video tracks we need to send/recv.
if(offerOptions){// Reject Chrome legacy constraints.
if(offerOptions.mandatory||offerOptions.optional){throw new TypeError('Legacy mandatory/optional constraints not supported.');}if(offerOptions.offerToReceiveAudio!==undefined){numAudioTracks=offerOptions.offerToReceiveAudio;}if(offerOptions.offerToReceiveVideo!==undefined){numVideoTracks=offerOptions.offerToReceiveVideo;}}if(this.localStreams.length){// Push local streams.
this.localStreams[0].getTracks().forEach(function(track){tracks.push({kind:track.kind,track:track,wantReceive:track.kind==='audio'?numAudioTracks>0:numVideoTracks>0});if(track.kind==='audio'){numAudioTracks--;}else if(track.kind==='video'){numVideoTracks--;}});}// Create M-lines for recvonly streams.
while(numAudioTracks>0||numVideoTracks>0){if(numAudioTracks>0){tracks.push({kind:'audio',wantReceive:true});numAudioTracks--;}if(numVideoTracks>0){tracks.push({kind:'video',wantReceive:true});numVideoTracks--;}}var sdp=SDPUtils.writeSessionBoilerplate();var transceivers=[];tracks.forEach(function(mline,sdpMLineIndex){// For each track, create an ice gatherer, ice transport,
// dtls transport, potentially rtpsender and rtpreceiver.
var track=mline.track;var kind=mline.kind;var mid=SDPUtils.generateIdentifier();var transports=self.usingBundle&&sdpMLineIndex>0?{iceGatherer:transceivers[0].iceGatherer,iceTransport:transceivers[0].iceTransport,dtlsTransport:transceivers[0].dtlsTransport}:self._createIceAndDtlsTransports(mid,sdpMLineIndex);var localCapabilities=RTCRtpSender.getCapabilities(kind);// filter RTX until additional stuff needed for RTX is implemented
// in adapter.js
localCapabilities.codecs=localCapabilities.codecs.filter(function(codec){return codec.name!=='rtx';});localCapabilities.codecs.forEach(function(codec){// work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
// by adding level-asymmetry-allowed=1
if(codec.name==='H264'&&codec.parameters['level-asymmetry-allowed']===undefined){codec.parameters['level-asymmetry-allowed']='1';}});var rtpSender;var rtpReceiver;// generate an ssrc now, to be used later in rtpSender.send
var sendEncodingParameters=[{ssrc:(2*sdpMLineIndex+1)*1001}];if(track){rtpSender=new RTCRtpSender(track,transports.dtlsTransport);}if(mline.wantReceive){rtpReceiver=new RTCRtpReceiver(transports.dtlsTransport,kind);}transceivers[sdpMLineIndex]={iceGatherer:transports.iceGatherer,iceTransport:transports.iceTransport,dtlsTransport:transports.dtlsTransport,localCapabilities:localCapabilities,remoteCapabilities:null,rtpSender:rtpSender,rtpReceiver:rtpReceiver,kind:kind,mid:mid,sendEncodingParameters:sendEncodingParameters,recvEncodingParameters:null};});if(this.usingBundle){sdp+='a=group:BUNDLE '+transceivers.map(function(t){return t.mid;}).join(' ')+'\r\n';}tracks.forEach(function(mline,sdpMLineIndex){var transceiver=transceivers[sdpMLineIndex];sdp+=SDPUtils.writeMediaSection(transceiver,transceiver.localCapabilities,'offer',self.localStreams[0]);});this._pendingOffer=transceivers;var desc=new RTCSessionDescription({type:'offer',sdp:sdp});if(arguments.length&&typeof arguments[0]==='function'){window.setTimeout(arguments[0],0,desc);}return Promise.resolve(desc);};window.RTCPeerConnection.prototype.createAnswer=function(){var self=this;var sdp=SDPUtils.writeSessionBoilerplate();if(this.usingBundle){sdp+='a=group:BUNDLE '+this.transceivers.map(function(t){return t.mid;}).join(' ')+'\r\n';}this.transceivers.forEach(function(transceiver){if(transceiver.isDatachannel){sdp+='m=application 0 DTLS/SCTP 5000\r\n'+'c=IN IP4 0.0.0.0\r\n'+'a=mid:'+transceiver.mid+'\r\n';return;}// Calculate intersection of capabilities.
var commonCapabilities=self._getCommonCapabilities(transceiver.localCapabilities,transceiver.remoteCapabilities);sdp+=SDPUtils.writeMediaSection(transceiver,commonCapabilities,'answer',self.localStreams[0]);});var desc=new RTCSessionDescription({type:'answer',sdp:sdp});if(arguments.length&&typeof arguments[0]==='function'){window.setTimeout(arguments[0],0,desc);}return Promise.resolve(desc);};window.RTCPeerConnection.prototype.addIceCandidate=function(candidate){if(!candidate){this.transceivers.forEach(function(transceiver){transceiver.iceTransport.addRemoteCandidate({});});}else{var mLineIndex=candidate.sdpMLineIndex;if(candidate.sdpMid){for(var i=0;i<this.transceivers.length;i++){if(this.transceivers[i].mid===candidate.sdpMid){mLineIndex=i;break;}}}var transceiver=this.transceivers[mLineIndex];if(transceiver){var cand=Object.keys(candidate.candidate).length>0?SDPUtils.parseCandidate(candidate.candidate):{};// Ignore Chrome's invalid candidates since Edge does not like them.
if(cand.protocol==='tcp'&&(cand.port===0||cand.port===9)){return;}// Ignore RTCP candidates, we assume RTCP-MUX.
if(cand.component!=='1'){return;}// A dirty hack to make samples work.
if(cand.type==='endOfCandidates'){cand={};}transceiver.iceTransport.addRemoteCandidate(cand);// update the remoteDescription.
var sections=SDPUtils.splitSections(this.remoteDescription.sdp);sections[mLineIndex+1]+=(cand.type?candidate.candidate.trim():'a=end-of-candidates')+'\r\n';this.remoteDescription.sdp=sections.join('');}}if(arguments.length>1&&typeof arguments[1]==='function'){window.setTimeout(arguments[1],0);}return Promise.resolve();};window.RTCPeerConnection.prototype.getStats=function(){var promises=[];this.transceivers.forEach(function(transceiver){['rtpSender','rtpReceiver','iceGatherer','iceTransport','dtlsTransport'].forEach(function(method){if(transceiver[method]){promises.push(transceiver[method].getStats());}});});var cb=arguments.length>1&&typeof arguments[1]==='function'&&arguments[1];return new Promise(function(resolve){// shim getStats with maplike support
var results=new Map();Promise.all(promises).then(function(res){res.forEach(function(result){Object.keys(result).forEach(function(id){results.set(id,result[id]);results[id]=result[id];});});if(cb){window.setTimeout(cb,0,results);}resolve(results);});});};}};// Expose public methods.
module.exports={shimPeerConnection:edgeShim.shimPeerConnection,shimGetUserMedia:require('./getusermedia')};},{"../utils":12,"./getusermedia":8,"sdp":59}],8:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';// Expose public methods.
module.exports=function(){var shimError_=function shimError_(e){return{name:{PermissionDeniedError:'NotAllowedError'}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function toString(){return this.name;}};};// getUserMedia error shim.
var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(c){return origGetUserMedia(c).catch(function(e){return Promise.reject(shimError_(e));});};};},{}],9:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var browserDetails=require('../utils').browserDetails;var firefoxShim={shimOnTrack:function shimOnTrack(){if((typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window.RTCPeerConnection&&!('ontrack'in window.RTCPeerConnection.prototype)){Object.defineProperty(window.RTCPeerConnection.prototype,'ontrack',{get:function get(){return this._ontrack;},set:function set(f){if(this._ontrack){this.removeEventListener('track',this._ontrack);this.removeEventListener('addstream',this._ontrackpoly);}this.addEventListener('track',this._ontrack=f);this.addEventListener('addstream',this._ontrackpoly=function(e){e.stream.getTracks().forEach(function(track){var event=new Event('track');event.track=track;event.receiver={track:track};event.streams=[e.stream];this.dispatchEvent(event);}.bind(this));}.bind(this));}});}},shimSourceObject:function shimSourceObject(){// Firefox has supported mozSrcObject since FF22, unprefixed in 42.
if((typeof window==="undefined"?"undefined":_typeof(window))==='object'){if(window.HTMLMediaElement&&!('srcObject'in window.HTMLMediaElement.prototype)){// Shim the srcObject property, once, when HTMLMediaElement is found.
Object.defineProperty(window.HTMLMediaElement.prototype,'srcObject',{get:function get(){return this.mozSrcObject;},set:function set(stream){this.mozSrcObject=stream;}});}}},shimPeerConnection:function shimPeerConnection(){if((typeof window==="undefined"?"undefined":_typeof(window))!=='object'||!(window.RTCPeerConnection||window.mozRTCPeerConnection)){return;// probably media.peerconnection.enabled=false in about:config
}// The RTCPeerConnection object.
if(!window.RTCPeerConnection){window.RTCPeerConnection=function(pcConfig,pcConstraints){if(browserDetails.version<38){// .urls is not supported in FF < 38.
// create RTCIceServers with a single url.
if(pcConfig&&pcConfig.iceServers){var newIceServers=[];for(var i=0;i<pcConfig.iceServers.length;i++){var server=pcConfig.iceServers[i];if(server.hasOwnProperty('urls')){for(var j=0;j<server.urls.length;j++){var newServer={url:server.urls[j]};if(server.urls[j].indexOf('turn')===0){newServer.username=server.username;newServer.credential=server.credential;}newIceServers.push(newServer);}}else{newIceServers.push(pcConfig.iceServers[i]);}}pcConfig.iceServers=newIceServers;}}return new mozRTCPeerConnection(pcConfig,pcConstraints);};window.RTCPeerConnection.prototype=mozRTCPeerConnection.prototype;// wrap static methods. Currently just generateCertificate.
if(mozRTCPeerConnection.generateCertificate){Object.defineProperty(window.RTCPeerConnection,'generateCertificate',{get:function get(){return mozRTCPeerConnection.generateCertificate;}});}window.RTCSessionDescription=mozRTCSessionDescription;window.RTCIceCandidate=mozRTCIceCandidate;}// shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
['setLocalDescription','setRemoteDescription','addIceCandidate'].forEach(function(method){var nativeMethod=RTCPeerConnection.prototype[method];RTCPeerConnection.prototype[method]=function(){arguments[0]=new(method==='addIceCandidate'?RTCIceCandidate:RTCSessionDescription)(arguments[0]);return nativeMethod.apply(this,arguments);};});// support for addIceCandidate(null or undefined)
var nativeAddIceCandidate=RTCPeerConnection.prototype.addIceCandidate;RTCPeerConnection.prototype.addIceCandidate=function(){if(!arguments[0]){if(arguments[1]){arguments[1].apply(null);}return Promise.resolve();}return nativeAddIceCandidate.apply(this,arguments);};if(browserDetails.version<48){// shim getStats with maplike support
var makeMapStats=function makeMapStats(stats){var map=new Map();Object.keys(stats).forEach(function(key){map.set(key,stats[key]);map[key]=stats[key];});return map;};var nativeGetStats=RTCPeerConnection.prototype.getStats;RTCPeerConnection.prototype.getStats=function(selector,onSucc,onErr){return nativeGetStats.apply(this,[selector||null]).then(function(stats){return makeMapStats(stats);}).then(onSucc,onErr);};}}};// Expose public methods.
module.exports={shimOnTrack:firefoxShim.shimOnTrack,shimSourceObject:firefoxShim.shimSourceObject,shimPeerConnection:firefoxShim.shimPeerConnection,shimGetUserMedia:require('./getusermedia')};},{"../utils":12,"./getusermedia":10}],10:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var logging=require('../utils').log;var browserDetails=require('../utils').browserDetails;// Expose public methods.
module.exports=function(){var shimError_=function shimError_(e){return{name:{SecurityError:'NotAllowedError',PermissionDeniedError:'NotAllowedError'}[e.name]||e.name,message:{'The operation is insecure.':'The request is not allowed by the '+'user agent or the platform in the current context.'}[e.message]||e.message,constraint:e.constraint,toString:function toString(){return this.name+(this.message&&': ')+this.message;}};};// getUserMedia constraints shim.
var getUserMedia_=function getUserMedia_(constraints,onSuccess,onError){var constraintsToFF37_=function constraintsToFF37_(c){if((typeof c==="undefined"?"undefined":_typeof(c))!=='object'||c.require){return c;}var require=[];Object.keys(c).forEach(function(key){if(key==='require'||key==='advanced'||key==='mediaSource'){return;}var r=c[key]=_typeof(c[key])==='object'?c[key]:{ideal:c[key]};if(r.min!==undefined||r.max!==undefined||r.exact!==undefined){require.push(key);}if(r.exact!==undefined){if(typeof r.exact==='number'){r.min=r.max=r.exact;}else{c[key]=r.exact;}delete r.exact;}if(r.ideal!==undefined){c.advanced=c.advanced||[];var oc={};if(typeof r.ideal==='number'){oc[key]={min:r.ideal,max:r.ideal};}else{oc[key]=r.ideal;}c.advanced.push(oc);delete r.ideal;if(!Object.keys(r).length){delete c[key];}}});if(require.length){c.require=require;}return c;};constraints=JSON.parse(JSON.stringify(constraints));if(browserDetails.version<38){logging('spec: '+JSON.stringify(constraints));if(constraints.audio){constraints.audio=constraintsToFF37_(constraints.audio);}if(constraints.video){constraints.video=constraintsToFF37_(constraints.video);}logging('ff37: '+JSON.stringify(constraints));}return navigator.mozGetUserMedia(constraints,onSuccess,function(e){onError(shimError_(e));});};// Returns the result of getUserMedia as a Promise.
var getUserMediaPromise_=function getUserMediaPromise_(constraints){return new Promise(function(resolve,reject){getUserMedia_(constraints,resolve,reject);});};// Shim for mediaDevices on older versions.
if(!navigator.mediaDevices){navigator.mediaDevices={getUserMedia:getUserMediaPromise_,addEventListener:function addEventListener(){},removeEventListener:function removeEventListener(){}};}navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(resolve){var infos=[{kind:'audioinput',deviceId:'default',label:'',groupId:''},{kind:'videoinput',deviceId:'default',label:'',groupId:''}];resolve(infos);});};if(browserDetails.version<41){// Work around http://bugzil.la/1169665
var orgEnumerateDevices=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);navigator.mediaDevices.enumerateDevices=function(){return orgEnumerateDevices().then(undefined,function(e){if(e.name==='NotFoundError'){return[];}throw e;});};}if(browserDetails.version<49){var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(c){return origGetUserMedia(c).then(function(stream){// Work around https://bugzil.la/802326
if(c.audio&&!stream.getAudioTracks().length||c.video&&!stream.getVideoTracks().length){stream.getTracks().forEach(function(track){track.stop();});throw new DOMException('The object can not be found here.','NotFoundError');}return stream;},function(e){return Promise.reject(shimError_(e));});};}navigator.getUserMedia=function(constraints,onSuccess,onError){if(browserDetails.version<44){return getUserMedia_(constraints,onSuccess,onError);}// Replace Firefox 44+'s deprecation warning with unprefixed version.
console.warn('navigator.getUserMedia has been replaced by '+'navigator.mediaDevices.getUserMedia');navigator.mediaDevices.getUserMedia(constraints).then(onSuccess,onError);};};},{"../utils":12}],11:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */'use strict';var safariShim={// TODO: DrAlex, should be here, double check against LayoutTests
// shimOnTrack: function() { },
// TODO: once the back-end for the mac port is done, add.
// TODO: check for webkitGTK+
// shimPeerConnection: function() { },
shimGetUserMedia:function shimGetUserMedia(){navigator.getUserMedia=navigator.webkitGetUserMedia;}};// Expose public methods.
module.exports={shimGetUserMedia:safariShim.shimGetUserMedia// TODO
// shimOnTrack: safariShim.shimOnTrack,
// shimPeerConnection: safariShim.shimPeerConnection
};},{}],12:[function(require,module,exports){/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 *//* eslint-env node */'use strict';var logDisabled_=true;// Utility methods.
var utils={disableLog:function disableLog(bool){if(typeof bool!=='boolean'){return new Error('Argument type: '+(typeof bool==="undefined"?"undefined":_typeof(bool))+'. Please use a boolean.');}logDisabled_=bool;return bool?'adapter.js logging disabled':'adapter.js logging enabled';},log:function log(){if((typeof window==="undefined"?"undefined":_typeof(window))==='object'){if(logDisabled_){return;}if(typeof console!=='undefined'&&typeof console.log==='function'){console.log.apply(console,arguments);}}},/**
             * Extract browser version out of the provided user agent string.
             *
             * @param {!string} uastring userAgent string.
             * @param {!string} expr Regular expression used as match criteria.
             * @param {!number} pos position in the version string to be returned.
             * @return {!number} browser version.
             */extractVersion:function extractVersion(uastring,expr,pos){var match=uastring.match(expr);return match&&match.length>=pos&&parseInt(match[pos],10);},/**
             * Browser detector.
             *
             * @return {object} result containing browser and version
             *     properties.
             */detectBrowser:function detectBrowser(){// Returned result object.
var result={};result.browser=null;result.version=null;// Fail early if it's not a browser
if(typeof window==='undefined'||!window.navigator){result.browser='Not a browser.';return result;}// Firefox.
if(navigator.mozGetUserMedia){result.browser='firefox';result.version=this.extractVersion(navigator.userAgent,/Firefox\/([0-9]+)\./,1);// all webkit-based browsers
}else if(navigator.webkitGetUserMedia){// Chrome, Chromium, Webview, Opera, all use the chrome shim for now
if(window.webkitRTCPeerConnection){result.browser='chrome';result.version=this.extractVersion(navigator.userAgent,/Chrom(e|ium)\/([0-9]+)\./,2);// Safari or unknown webkit-based
// for the time being Safari has support for MediaStreams but not webRTC
}else{// Safari UA substrings of interest for reference:
// - webkit version:           AppleWebKit/602.1.25 (also used in Op,Cr)
// - safari UI version:        Version/9.0.3 (unique to Safari)
// - safari UI webkit version: Safari/601.4.4 (also used in Op,Cr)
//
// if the webkit version and safari UI webkit versions are equals,
// ... this is a stable version.
//
// only the internal webkit version is important today to know if
// media streams are supported
//
if(navigator.userAgent.match(/Version\/(\d+).(\d+)/)){result.browser='safari';result.version=this.extractVersion(navigator.userAgent,/AppleWebKit\/([0-9]+)\./,1);// unknown webkit-based browser
}else{result.browser='Unsupported webkit-based browser '+'with GUM support but no WebRTC support.';return result;}}// Edge.
}else if(navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)){result.browser='edge';result.version=this.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2);// Default fallthrough: not supported.
}else{result.browser='Not a supported browser.';return result;}return result;}};// Export.
module.exports={log:utils.log,disableLog:utils.disableLog,browserDetails:utils.detectBrowser(),extractVersion:utils.extractVersion};},{}],13:[function(require,module,exports){/**
         * Expose `Backoff`.
         */module.exports=Backoff;/**
         * Initialize backoff timer with `opts`.
         *
         * - `min` initial timeout in milliseconds [100]
         * - `max` max timeout [10000]
         * - `jitter` [0]
         * - `factor` [2]
         *
         * @param {Object} opts
         * @api public
         */function Backoff(opts){opts=opts||{};this.ms=opts.min||100;this.max=opts.max||10000;this.factor=opts.factor||2;this.jitter=opts.jitter>0&&opts.jitter<=1?opts.jitter:0;this.attempts=0;}/**
         * Return the backoff duration.
         *
         * @return {Number}
         * @api public
         */Backoff.prototype.duration=function(){var ms=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var rand=Math.random();var deviation=Math.floor(rand*this.jitter*ms);ms=(Math.floor(rand*10)&1)==0?ms-deviation:ms+deviation;}return Math.min(ms,this.max)|0;};/**
         * Reset the number of attempts.
         *
         * @api public
         */Backoff.prototype.reset=function(){this.attempts=0;};/**
         * Set the minimum duration
         *
         * @api public
         */Backoff.prototype.setMin=function(min){this.ms=min;};/**
         * Set the maximum duration
         *
         * @api public
         */Backoff.prototype.setMax=function(max){this.max=max;};/**
         * Set the jitter
         *
         * @api public
         */Backoff.prototype.setJitter=function(jitter){this.jitter=jitter;};},{}],14:[function(require,module,exports){/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */(function(chars){"use strict";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64="";for(i=0;i<len;i+=3){base64+=chars[bytes[i]>>2];base64+=chars[(bytes[i]&3)<<4|bytes[i+1]>>4];base64+=chars[(bytes[i+1]&15)<<2|bytes[i+2]>>6];base64+=chars[bytes[i+2]&63];}if(len%3===2){base64=base64.substring(0,base64.length-1)+"=";}else if(len%3===1){base64=base64.substring(0,base64.length-2)+"==";}return base64;};exports.decode=function(base64){var bufferLength=base64.length*0.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]==="="){bufferLength--;if(base64[base64.length-2]==="="){bufferLength--;}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63;}return arraybuffer;};})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");},{}],15:[function(require,module,exports){(function(global){/**
             * Create a blob builder even when vendor prefixes exist
             */var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;/**
             * Check if Blob constructor is supported
             */var blobSupported=function(){try{var a=new Blob(['hi']);return a.size===2;}catch(e){return false;}}();/**
             * Check if Blob constructor supports ArrayBufferViews
             * Fails in Safari 6, so we need to map to ArrayBuffers there.
             */var blobSupportsArrayBufferView=blobSupported&&function(){try{var b=new Blob([new Uint8Array([1,2])]);return b.size===2;}catch(e){return false;}}();/**
             * Check if BlobBuilder is supported
             */var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;/**
             * Helper function that maps ArrayBufferViews to ArrayBuffers
             * Used by BlobBuilder constructor and old browsers that didn't
             * support it in the Blob constructor.
             */function mapArrayBufferViews(ary){for(var i=0;i<ary.length;i++){var chunk=ary[i];if(chunk.buffer instanceof ArrayBuffer){var buf=chunk.buffer;// if this is a subarray, make a copy so we only
// include the subarray region from the underlying buffer
if(chunk.byteLength!==buf.byteLength){var copy=new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf,chunk.byteOffset,chunk.byteLength));buf=copy.buffer;}ary[i]=buf;}}}function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder();mapArrayBufferViews(ary);for(var i=0;i<ary.length;i++){bb.append(ary[i]);}return options.type?bb.getBlob(options.type):bb.getBlob();};function BlobConstructor(ary,options){mapArrayBufferViews(ary);return new Blob(ary,options||{});};module.exports=function(){if(blobSupported){return blobSupportsArrayBufferView?global.Blob:BlobConstructor;}else if(blobBuilderSupported){return BlobBuilderConstructor;}else{return undefined;}}();}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],16:[function(require,module,exports){/**
         * Slice reference.
         */var slice=[].slice;/**
         * Bind `obj` to `fn`.
         *
         * @param {Object} obj
         * @param {Function|String} fn or string
         * @return {Function}
         * @api public
         */module.exports=function(obj,fn){if('string'==typeof fn)fn=obj[fn];if('function'!=typeof fn)throw new Error('bind() requires a function');var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)));};};},{}],17:[function(require,module,exports){/**
         * Expose `Emitter`.
         */module.exports=Emitter;/**
         * Initialize a new `Emitter`.
         *
         * @api public
         */function Emitter(obj){if(obj)return mixin(obj);};/**
         * Mixin the emitter properties.
         *
         * @param {Object} obj
         * @return {Object}
         * @api private
         */function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key];}return obj;}/**
         * Listen on the given `event` with `fn`.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this;};/**
         * Adds an `event` listener that will be invoked a single
         * time then automatically removed.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments);}on.fn=fn;this.on(event,on);return this;};/**
         * Remove the given callback for `event` or all
         * registered callbacks.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};// all
if(0==arguments.length){this._callbacks={};return this;}// specific event
var callbacks=this._callbacks[event];if(!callbacks)return this;// remove all handlers
if(1==arguments.length){delete this._callbacks[event];return this;}// remove specific handler
var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break;}}return this;};/**
         * Emit `event` with the given args.
         *
         * @param {String} event
         * @param {Mixed} ...
         * @return {Emitter}
         */Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args);}}return this;};/**
         * Return array of callbacks for `event`.
         *
         * @param {String} event
         * @return {Array}
         * @api public
         */Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[];};/**
         * Check if this emitter has `event` handlers.
         *
         * @param {String} event
         * @return {Boolean}
         * @api public
         */Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length;};},{}],18:[function(require,module,exports){module.exports=function(a,b){var fn=function fn(){};fn.prototype=b.prototype;a.prototype=new fn();a.prototype.constructor=a;};},{}],19:[function(require,module,exports){/**
         * Expose `debug()` as the module.
         */module.exports=debug;/**
         * Create a debugger with the given `name`.
         *
         * @param {String} name
         * @return {Type}
         * @api public
         */function debug(name){if(!debug.enabled(name))return function(){};return function(fmt){fmt=coerce(fmt);var curr=new Date();var ms=curr-(debug[name]||curr);debug[name]=curr;fmt=name+' '+fmt+' +'+debug.humanize(ms);// This hackery is required for IE8
// where `console.log` doesn't have 'apply'
window.console&&console.log&&Function.prototype.apply.call(console.log,console,arguments);};}/**
         * The currently active debug mode names.
         */debug.names=[];debug.skips=[];/**
         * Enables a debug mode by name. This can include modes
         * separated by a colon and wildcards.
         *
         * @param {String} name
         * @api public
         */debug.enable=function(name){try{localStorage.debug=name;}catch(e){}var split=(name||'').split(/[\s,]+/),len=split.length;for(var i=0;i<len;i++){name=split[i].replace('*','.*?');if(name[0]==='-'){debug.skips.push(new RegExp('^'+name.substr(1)+'$'));}else{debug.names.push(new RegExp('^'+name+'$'));}}};/**
         * Disable debug output.
         *
         * @api public
         */debug.disable=function(){debug.enable('');};/**
         * Humanize the given `ms`.
         *
         * @param {Number} m
         * @return {String}
         * @api private
         */debug.humanize=function(ms){var sec=1000,min=60*1000,hour=60*min;if(ms>=hour)return(ms/hour).toFixed(1)+'h';if(ms>=min)return(ms/min).toFixed(1)+'m';if(ms>=sec)return(ms/sec|0)+'s';return ms+'ms';};/**
         * Returns true if the given mode name is enabled, false otherwise.
         *
         * @param {String} name
         * @return {Boolean}
         * @api public
         */debug.enabled=function(name){for(var i=0,len=debug.skips.length;i<len;i++){if(debug.skips[i].test(name)){return false;}}for(var i=0,len=debug.names.length;i<len;i++){if(debug.names[i].test(name)){return true;}}return false;};/**
         * Coerce `val`.
         */function coerce(val){if(val instanceof Error)return val.stack||val.message;return val;}// persist
try{if(window.localStorage)debug.enable(localStorage.debug);}catch(e){}},{}],20:[function(require,module,exports){module.exports=require('./lib/');},{"./lib/":21}],21:[function(require,module,exports){module.exports=require('./socket');/**
         * Exports parser
         *
         * @api public
         *
         */module.exports.parser=require('engine.io-parser');},{"./socket":22,"engine.io-parser":33}],22:[function(require,module,exports){(function(global){/**
             * Module dependencies.
             */var transports=require('./transports');var Emitter=require('component-emitter');var debug=require('debug')('engine.io-client:socket');var index=require('indexof');var parser=require('engine.io-parser');var parseuri=require('parseuri');var parsejson=require('parsejson');var parseqs=require('parseqs');/**
             * Module exports.
             */module.exports=Socket;/**
             * Noop function.
             *
             * @api private
             */function noop(){}/**
             * Socket constructor.
             *
             * @param {String|Object} uri or options
             * @param {Object} options
             * @api public
             */function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&'object'==(typeof uri==="undefined"?"undefined":_typeof(uri))){opts=uri;uri=null;}if(uri){uri=parseuri(uri);opts.host=uri.host;opts.secure=uri.protocol=='https'||uri.protocol=='wss';opts.port=uri.port;if(uri.query)opts.query=uri.query;}this.secure=null!=opts.secure?opts.secure:global.location&&'https:'==location.protocol;if(opts.host){var pieces=opts.host.split(':');opts.hostname=pieces.shift();if(pieces.length){opts.port=pieces.pop();}else if(!opts.port){// if no port is specified manually, use the protocol default
opts.port=this.secure?'443':'80';}}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:'localhost');this.port=opts.port||(global.location&&location.port?location.port:this.secure?443:80);this.query=opts.query||{};if('string'==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||'/engine.io').replace(/\/$/,'')+'/';this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||'t';this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||['polling','websocket'];this.readyState='';this.writeBuffer=[];this.callbackBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;// SSL options for Node.js client
this.pfx=opts.pfx||null;this.key=opts.key||null;this.passphrase=opts.passphrase||null;this.cert=opts.cert||null;this.ca=opts.ca||null;this.ciphers=opts.ciphers||null;this.rejectUnauthorized=opts.rejectUnauthorized||null;this.open();}Socket.priorWebsocketSuccess=false;/**
             * Mix in `Emitter`.
             */Emitter(Socket.prototype);/**
             * Protocol version.
             *
             * @api public
             */Socket.protocol=parser.protocol;// this is an int
/**
             * Expose deps for legacy compatibility
             * and standalone browser access.
             */Socket.Socket=Socket;Socket.Transport=require('./transport');Socket.transports=require('./transports');Socket.parser=require('engine.io-parser');/**
             * Creates transport of the given type.
             *
             * @param {String} transport name
             * @return {Transport}
             * @api private
             */Socket.prototype.createTransport=function(name){debug('creating transport "%s"',name);var query=clone(this.query);// append engine.io protocol identifier
query.EIO=parser.protocol;// transport name
query.transport=name;// session id if we already have one
if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized});return transport;};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i];}}return o;}/**
             * Initializes transport to use and starts probe.
             *
             * @api private
             */Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf('websocket')!=-1){transport='websocket';}else if(0==this.transports.length){// Emit error on next tick so it can be listened to
var self=this;setTimeout(function(){self.emit('error','No transports available');},0);return;}else{transport=this.transports[0];}this.readyState='opening';// Retry with the next transport if the transport is disabled (jsonp: false)
var transport;try{transport=this.createTransport(transport);}catch(e){this.transports.shift();this.open();return;}transport.open();this.setTransport(transport);};/**
             * Sets the current transport. Disables the existing one (if any).
             *
             * @api private
             */Socket.prototype.setTransport=function(transport){debug('setting transport %s',transport.name);var self=this;if(this.transport){debug('clearing existing transport %s',this.transport.name);this.transport.removeAllListeners();}// set up transport
this.transport=transport;// set up transport listeners
transport.on('drain',function(){self.onDrain();}).on('packet',function(packet){self.onPacket(packet);}).on('error',function(e){self.onError(e);}).on('close',function(){self.onClose('transport close');});};/**
             * Probes a transport.
             *
             * @param {String} transport name
             * @api private
             */Socket.prototype.probe=function(name){debug('probing transport "%s"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary;}if(failed)return;debug('probe transport "%s" opened',name);transport.send([{type:'ping',data:'probe'}]);transport.once('packet',function(msg){if(failed)return;if('pong'==msg.type&&'probe'==msg.data){debug('probe transport "%s" pong',name);self.upgrading=true;self.emit('upgrading',transport);if(!transport)return;Socket.priorWebsocketSuccess='websocket'==transport.name;debug('pausing current transport "%s"',self.transport.name);self.transport.pause(function(){if(failed)return;if('closed'==self.readyState)return;debug('changing transport and sending upgrade packet');cleanup();self.setTransport(transport);transport.send([{type:'upgrade'}]);self.emit('upgrade',transport);transport=null;self.upgrading=false;self.flush();});}else{debug('probe transport "%s" failed',name);var err=new Error('probe error');err.transport=transport.name;self.emit('upgradeError',err);}});}function freezeTransport(){if(failed)return;// Any callback called by transport should be ignored since now
failed=true;cleanup();transport.close();transport=null;}//Handle any error that happens while probing
function onerror(err){var error=new Error('probe error: '+err);error.transport=transport.name;freezeTransport();debug('probe transport "%s" failed because of error: %s',name,err);self.emit('upgradeError',error);}function onTransportClose(){onerror("transport closed");}//When the socket is closed while we're probing
function onclose(){onerror("socket closed");}//When the socket is upgraded while we're probing
function onupgrade(to){if(transport&&to.name!=transport.name){debug('"%s" works - aborting "%s"',to.name,transport.name);freezeTransport();}}//Remove all listeners on the transport and on self
function cleanup(){transport.removeListener('open',onTransportOpen);transport.removeListener('error',onerror);transport.removeListener('close',onTransportClose);self.removeListener('close',onclose);self.removeListener('upgrading',onupgrade);}transport.once('open',onTransportOpen);transport.once('error',onerror);transport.once('close',onTransportClose);this.once('close',onclose);this.once('upgrading',onupgrade);transport.open();};/**
             * Called when connection is deemed open.
             *
             * @api public
             */Socket.prototype.onOpen=function(){debug('socket open');this.readyState='open';Socket.priorWebsocketSuccess='websocket'==this.transport.name;this.emit('open');this.flush();// we check for `readyState` in case an `open`
// listener already closed the socket
if('open'==this.readyState&&this.upgrade&&this.transport.pause){debug('starting upgrade probes');for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i]);}}};/**
             * Handles a packet.
             *
             * @api private
             */Socket.prototype.onPacket=function(packet){if('opening'==this.readyState||'open'==this.readyState){debug('socket receive: type "%s", data "%s"',packet.type,packet.data);this.emit('packet',packet);// Socket is live - any packet counts
this.emit('heartbeat');switch(packet.type){case'open':this.onHandshake(parsejson(packet.data));break;case'pong':this.setPing();break;case'error':var err=new Error('server error');err.code=packet.data;this.emit('error',err);break;case'message':this.emit('data',packet.data);this.emit('message',packet.data);break;}}else{debug('packet received with socket readyState "%s"',this.readyState);}};/**
             * Called upon handshake completion.
             *
             * @param {Object} handshake obj
             * @api private
             */Socket.prototype.onHandshake=function(data){this.emit('handshake',data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();// In case open handler closes socket
if('closed'==this.readyState)return;this.setPing();// Prolong liveness of socket on heartbeat
this.removeListener('heartbeat',this.onHeartbeat);this.on('heartbeat',this.onHeartbeat);};/**
             * Resets ping timeout.
             *
             * @api private
             */Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if('closed'==self.readyState)return;self.onClose('ping timeout');},timeout||self.pingInterval+self.pingTimeout);};/**
             * Pings server every `this.pingInterval` and expects response
             * within `this.pingTimeout` or closes connection.
             *
             * @api private
             */Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug('writing ping packet - expecting pong within %sms',self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout);},self.pingInterval);};/**
             * Sends a ping packet.
             *
             * @api public
             */Socket.prototype.ping=function(){this.sendPacket('ping');};/**
             * Called on `drain` event
             *
             * @api private
             */Socket.prototype.onDrain=function(){for(var i=0;i<this.prevBufferLen;i++){if(this.callbackBuffer[i]){this.callbackBuffer[i]();}}this.writeBuffer.splice(0,this.prevBufferLen);this.callbackBuffer.splice(0,this.prevBufferLen);// setting prevBufferLen = 0 is very important
// for example, when upgrading, upgrade packet is sent over,
// and a nonzero prevBufferLen could cause problems on `drain`
this.prevBufferLen=0;if(this.writeBuffer.length==0){this.emit('drain');}else{this.flush();}};/**
             * Flush write buffers.
             *
             * @api private
             */Socket.prototype.flush=function(){if('closed'!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug('flushing %d packets in socket',this.writeBuffer.length);this.transport.send(this.writeBuffer);// keep track of current length of writeBuffer
// splice writeBuffer and callbackBuffer on `drain`
this.prevBufferLen=this.writeBuffer.length;this.emit('flush');}};/**
             * Sends a message.
             *
             * @param {String} message.
             * @param {Function} callback function.
             * @return {Socket} for chaining.
             * @api public
             */Socket.prototype.write=Socket.prototype.send=function(msg,fn){this.sendPacket('message',msg,fn);return this;};/**
             * Sends a packet.
             *
             * @param {String} packet type.
             * @param {String} data.
             * @param {Function} callback function.
             * @api private
             */Socket.prototype.sendPacket=function(type,data,fn){if('closing'==this.readyState||'closed'==this.readyState){return;}var packet={type:type,data:data};this.emit('packetCreate',packet);this.writeBuffer.push(packet);this.callbackBuffer.push(fn);this.flush();};/**
             * Closes the connection.
             *
             * @api private
             */Socket.prototype.close=function(){if('opening'==this.readyState||'open'==this.readyState){var close=function close(){self.onClose('forced close');debug('socket closing - telling transport to close');self.transport.close();};var cleanupAndClose=function cleanupAndClose(){self.removeListener('upgrade',cleanupAndClose);self.removeListener('upgradeError',cleanupAndClose);close();};var waitForUpgrade=function waitForUpgrade(){// wait for upgrade to finish since we can't send packets while pausing a transport
self.once('upgrade',cleanupAndClose);self.once('upgradeError',cleanupAndClose);};this.readyState='closing';var self=this;if(this.writeBuffer.length){this.once('drain',function(){if(this.upgrading){waitForUpgrade();}else{close();}});}else if(this.upgrading){waitForUpgrade();}else{close();}}return this;};/**
             * Called upon transport error
             *
             * @api private
             */Socket.prototype.onError=function(err){debug('socket error %j',err);Socket.priorWebsocketSuccess=false;this.emit('error',err);this.onClose('transport error',err);};/**
             * Called upon transport close.
             *
             * @api private
             */Socket.prototype.onClose=function(reason,desc){if('opening'==this.readyState||'open'==this.readyState||'closing'==this.readyState){debug('socket close with reason: "%s"',reason);var self=this;// clear timers
clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);// clean buffers in next tick, so developers can still
// grab the buffers on `close` event
setTimeout(function(){self.writeBuffer=[];self.callbackBuffer=[];self.prevBufferLen=0;},0);// stop event from firing again for transport
this.transport.removeAllListeners('close');// ensure transport won't stay open
this.transport.close();// ignore further transport communication
this.transport.removeAllListeners();// set ready state
this.readyState='closed';// clear session id
this.id=null;// emit close event
this.emit('close',reason,desc);}};/**
             * Filters upgrades, returning only those matching client transports.
             *
             * @param {Array} server upgrades
             * @api private
             *
             */Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i]);}return filteredUpgrades;};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./transport":23,"./transports":24,"component-emitter":17,"debug":30,"engine.io-parser":33,"indexof":41,"parsejson":49,"parseqs":50,"parseuri":32}],23:[function(require,module,exports){/**
         * Module dependencies.
         */var parser=require('engine.io-parser');var Emitter=require('component-emitter');/**
         * Module exports.
         */module.exports=Transport;/**
         * Transport abstract constructor.
         *
         * @param {Object} options.
         * @api private
         */function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState='';this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR;// SSL options for Node.js client
this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;}/**
         * Mix in `Emitter`.
         */Emitter(Transport.prototype);/**
         * A counter used to prevent collisions in the timestamps used
         * for cache busting.
         */Transport.timestamps=0;/**
         * Emits an error.
         *
         * @param {String} str
         * @return {Transport} for chaining
         * @api public
         */Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type='TransportError';err.description=desc;this.emit('error',err);return this;};/**
         * Opens the transport.
         *
         * @api public
         */Transport.prototype.open=function(){if('closed'==this.readyState||''==this.readyState){this.readyState='opening';this.doOpen();}return this;};/**
         * Closes the transport.
         *
         * @api private
         */Transport.prototype.close=function(){if('opening'==this.readyState||'open'==this.readyState){this.doClose();this.onClose();}return this;};/**
         * Sends multiple packets.
         *
         * @param {Array} packets
         * @api private
         */Transport.prototype.send=function(packets){if('open'==this.readyState){this.write(packets);}else{throw new Error('Transport not open');}};/**
         * Called upon open
         *
         * @api private
         */Transport.prototype.onOpen=function(){this.readyState='open';this.writable=true;this.emit('open');};/**
         * Called with data.
         *
         * @param {String} data
         * @api private
         */Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet);};/**
         * Called with a decoded packet.
         */Transport.prototype.onPacket=function(packet){this.emit('packet',packet);};/**
         * Called upon close.
         *
         * @api private
         */Transport.prototype.onClose=function(){this.readyState='closed';this.emit('close');};},{"component-emitter":17,"engine.io-parser":33}],24:[function(require,module,exports){(function(global){/**
             * Module dependencies
             */var XMLHttpRequest=require('xmlhttprequest');var XHR=require('./polling-xhr');var JSONP=require('./polling-jsonp');var websocket=require('./websocket');/**
             * Export transports.
             */exports.polling=polling;exports.websocket=websocket;/**
             * Polling transport polymorphic constructor.
             * Decides on xhr vs jsonp based on feature detection.
             *
             * @api private
             */function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL='https:'==location.protocol;var port=location.port;// some user agents have empty `location.port`
if(!port){port=isSSL?443:80;}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL;}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if('open'in xhr&&!opts.forceJSONP){return new XHR(opts);}else{if(!jsonp)throw new Error('JSONP disabled');return new JSONP(opts);}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./polling-jsonp":25,"./polling-xhr":26,"./websocket":28,"xmlhttprequest":29}],25:[function(require,module,exports){(function(global){/**
             * Module requirements.
             */var Polling=require('./polling');var inherit=require('component-inherit');/**
             * Module exports.
             */module.exports=JSONPPolling;/**
             * Cached regular expressions.
             */var rNewline=/\n/g;var rEscapedNewline=/\\n/g;/**
             * Global JSONP callbacks.
             */var callbacks;/**
             * Callbacks count.
             */var index=0;/**
             * Noop.
             */function empty(){}/**
             * JSONP Polling constructor.
             *
             * @param {Object} opts.
             * @api public
             */function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};// define global callbacks array if not present
// we do this here (lazily) to avoid unneeded global pollution
if(!callbacks){// we need to consider multiple engines in the same page
if(!global.___eio)global.___eio=[];callbacks=global.___eio;}// callback identifier
this.index=callbacks.length;// add callback to jsonp global
var self=this;callbacks.push(function(msg){self.onData(msg);});// append to query string
this.query.j=this.index;// prevent spurious errors from being emitted when the window is unloaded
if(global.document&&global.addEventListener){global.addEventListener('beforeunload',function(){if(self.script)self.script.onerror=empty;},false);}}/**
             * Inherits from Polling.
             */inherit(JSONPPolling,Polling);/*
 * JSONP only supports binary as base64 encoded strings
 */JSONPPolling.prototype.supportsBinary=false;/**
             * Closes the socket.
             *
             * @api private
             */JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null;}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null;}Polling.prototype.doClose.call(this);};/**
             * Starts a poll cycle.
             *
             * @api private
             */JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement('script');if(this.script){this.script.parentNode.removeChild(this.script);this.script=null;}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError('jsonp poll error',e);};var insertAt=document.getElementsByTagName('script')[0];insertAt.parentNode.insertBefore(script,insertAt);this.script=script;var isUAgecko='undefined'!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement('iframe');document.body.appendChild(iframe);document.body.removeChild(iframe);},100);}};/**
             * Writes with a hidden iframe.
             *
             * @param {String} data to send
             * @param {Function} called upon flush.
             * @api private
             */JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement('form');var area=document.createElement('textarea');var id=this.iframeId='eio_iframe_'+this.index;var iframe;form.className='socketio';form.style.position='absolute';form.style.top='-1000px';form.style.left='-1000px';form.target=id;form.method='POST';form.setAttribute('accept-charset','utf-8');area.name='d';form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area;}this.form.action=this.uri();function complete(){initIframe();fn();}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe);}catch(e){self.onError('jsonp polling iframe removal error',e);}}try{// ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
var html='<iframe src="javascript:0" name="'+self.iframeId+'">';iframe=document.createElement(html);}catch(e){iframe=document.createElement('iframe');iframe.name=self.iframeId;iframe.src='javascript:0';}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe;}initIframe();// escape \n to prevent it from being converted into \r\n by some UAs
// double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
data=data.replace(rEscapedNewline,'\\\n');this.area.value=data.replace(rNewline,'\\n');try{this.form.submit();}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState=='complete'){complete();}};}else{this.iframe.onload=complete;}};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./polling":27,"component-inherit":18}],26:[function(require,module,exports){(function(global){/**
             * Module requirements.
             */var XMLHttpRequest=require('xmlhttprequest');var Polling=require('./polling');var Emitter=require('component-emitter');var inherit=require('component-inherit');var debug=require('debug')('engine.io-client:polling-xhr');/**
             * Module exports.
             */module.exports=XHR;module.exports.Request=Request;/**
             * Empty function
             */function empty(){}/**
             * XHR Polling constructor.
             *
             * @param {Object} opts
             * @api public
             */function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL='https:'==location.protocol;var port=location.port;// some user agents have empty `location.port`
if(!port){port=isSSL?443:80;}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL;}}/**
             * Inherits from Polling.
             */inherit(XHR,Polling);/**
             * XHR supports binary
             */XHR.prototype.supportsBinary=true;/**
             * Creates a request.
             *
             * @param {String} method
             * @api private
             */XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;// SSL options for Node.js client
opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;return new Request(opts);};/**
             * Sends data.
             *
             * @param {String} data to send.
             * @param {Function} called upon flush.
             * @api private
             */XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!=='string'&&data!==undefined;var req=this.request({method:'POST',data:data,isBinary:isBinary});var self=this;req.on('success',fn);req.on('error',function(err){self.onError('xhr post error',err);});this.sendXhr=req;};/**
             * Starts a poll cycle.
             *
             * @api private
             */XHR.prototype.doPoll=function(){debug('xhr poll');var req=this.request();var self=this;req.on('data',function(data){self.onData(data);});req.on('error',function(err){self.onError('xhr poll error',err);});this.pollXhr=req;};/**
             * Request constructor
             *
             * @param {Object} options
             * @api public
             */function Request(opts){this.method=opts.method||'GET';this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;// SSL options for Node.js client
this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.create();}/**
             * Mix in `Emitter`.
             */Emitter(Request.prototype);/**
             * Creates the XHR object and sends the request.
             *
             * @api private
             */Request.prototype.create=function(){var opts={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};// SSL options for Node.js client
opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;var xhr=this.xhr=new XMLHttpRequest(opts);var self=this;try{debug('xhr open %s: %s',this.method,this.uri);xhr.open(this.method,this.uri,this.async);if(this.supportsBinary){// This has to be done after open because Firefox is stupid
// http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
xhr.responseType='arraybuffer';}if('POST'==this.method){try{if(this.isBinary){xhr.setRequestHeader('Content-type','application/octet-stream');}else{xhr.setRequestHeader('Content-type','text/plain;charset=UTF-8');}}catch(e){}}// ie6 check
if('withCredentials'in xhr){xhr.withCredentials=true;}if(this.hasXDR()){xhr.onload=function(){self.onLoad();};xhr.onerror=function(){self.onError(xhr.responseText);};}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad();}else{// make sure the `error` event handler that's user-set
// does not throw in the same tick and gets caught here
setTimeout(function(){self.onError(xhr.status);},0);}};}debug('xhr data %s',this.data);xhr.send(this.data);}catch(e){// Need to defer since .create() is called directly fhrom the constructor
// and thus the 'error' event can only be only bound *after* this exception
// occurs.  Therefore, also, we cannot throw here at all.
setTimeout(function(){self.onError(e);},0);return;}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this;}};/**
             * Called upon successful response.
             *
             * @api private
             */Request.prototype.onSuccess=function(){this.emit('success');this.cleanup();};/**
             * Called if we have data.
             *
             * @api private
             */Request.prototype.onData=function(data){this.emit('data',data);this.onSuccess();};/**
             * Called upon error.
             *
             * @api private
             */Request.prototype.onError=function(err){this.emit('error',err);this.cleanup(true);};/**
             * Cleans up house.
             *
             * @api private
             */Request.prototype.cleanup=function(fromError){if('undefined'==typeof this.xhr||null===this.xhr){return;}// xmlhttprequest
if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty;}else{this.xhr.onreadystatechange=empty;}if(fromError){try{this.xhr.abort();}catch(e){}}if(global.document){delete Request.requests[this.index];}this.xhr=null;};/**
             * Called upon load.
             *
             * @api private
             */Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader('Content-Type').split(';')[0];}catch(e){}if(contentType==='application/octet-stream'){data=this.xhr.response;}else{if(!this.supportsBinary){data=this.xhr.responseText;}else{data='ok';}}}catch(e){this.onError(e);}if(null!=data){this.onData(data);}};/**
             * Check if it has XDomainRequest.
             *
             * @api private
             */Request.prototype.hasXDR=function(){return'undefined'!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR;};/**
             * Aborts the request.
             *
             * @api public
             */Request.prototype.abort=function(){this.cleanup();};/**
             * Aborts pending requests when unloading the window. This is needed to prevent
             * memory leaks (e.g. when using IE) and to ensure that no spurious error is
             * emitted.
             */if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent('onunload',unloadHandler);}else if(global.addEventListener){global.addEventListener('beforeunload',unloadHandler,false);}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort();}}}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./polling":27,"component-emitter":17,"component-inherit":18,"debug":30,"xmlhttprequest":29}],27:[function(require,module,exports){/**
         * Module dependencies.
         */var Transport=require('../transport');var parseqs=require('parseqs');var parser=require('engine.io-parser');var inherit=require('component-inherit');var debug=require('debug')('engine.io-client:polling');/**
         * Module exports.
         */module.exports=Polling;/**
         * Is XHR2 supported?
         */var hasXHR2=function(){var XMLHttpRequest=require('xmlhttprequest');var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType;}();/**
         * Polling interface.
         *
         * @param {Object} opts
         * @api private
         */function Polling(opts){var forceBase64=opts&&opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false;}Transport.call(this,opts);}/**
         * Inherits from Transport.
         */inherit(Polling,Transport);/**
         * Transport name.
         */Polling.prototype.name='polling';/**
         * Opens the socket (triggers polling). We write a PING message to determine
         * when the transport is open.
         *
         * @api private
         */Polling.prototype.doOpen=function(){this.poll();};/**
         * Pauses polling.
         *
         * @param {Function} callback upon buffers are flushed and transport is paused
         * @api private
         */Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState='pausing';function pause(){debug('paused');self.readyState='paused';onPause();}if(this.polling||!this.writable){var total=0;if(this.polling){debug('we are currently polling - waiting to pause');total++;this.once('pollComplete',function(){debug('pre-pause polling complete');--total||pause();});}if(!this.writable){debug('we are currently writing - waiting to pause');total++;this.once('drain',function(){debug('pre-pause writing complete');--total||pause();});}}else{pause();}};/**
         * Starts polling cycle.
         *
         * @api public
         */Polling.prototype.poll=function(){debug('polling');this.polling=true;this.doPoll();this.emit('poll');};/**
         * Overloads onData to detect payloads.
         *
         * @api private
         */Polling.prototype.onData=function(data){var self=this;debug('polling got data %s',data);var callback=function callback(packet,index,total){// if its the first message we consider the transport open
if('opening'==self.readyState){self.onOpen();}// if its a close packet, we close the ongoing requests
if('close'==packet.type){self.onClose();return false;}// otherwise bypass onData and handle the message
self.onPacket(packet);};// decode payload
parser.decodePayload(data,this.socket.binaryType,callback);// if an event did not trigger closing
if('closed'!=this.readyState){// if we got data we're not polling
this.polling=false;this.emit('pollComplete');if('open'==this.readyState){this.poll();}else{debug('ignoring poll - transport state "%s"',this.readyState);}}};/**
         * For polling, send a close packet.
         *
         * @api private
         */Polling.prototype.doClose=function(){var self=this;function close(){debug('writing close packet');self.write([{type:'close'}]);}if('open'==this.readyState){debug('transport open - closing');close();}else{// in case we're trying to close while
// handshaking is in progress (GH-164)
debug('transport not open - deferring close');this.once('open',close);}};/**
         * Writes a packets payload.
         *
         * @param {Array} data packets
         * @param {Function} drain callback
         * @api private
         */Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function callbackfn(){self.writable=true;self.emit('drain');};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn);});};/**
         * Generates uri for connection.
         *
         * @api private
         */Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?'https':'http';var port='';// cache busting is forced
if(false!==this.timestampRequests){query[this.timestampParam]=+new Date()+'-'+Transport.timestamps++;}if(!this.supportsBinary&&!query.sid){query.b64=1;}query=parseqs.encode(query);// avoid port if default for schema
if(this.port&&('https'==schema&&this.port!=443||'http'==schema&&this.port!=80)){port=':'+this.port;}// prepend ? to query
if(query.length){query='?'+query;}return schema+'://'+this.hostname+port+this.path+query;};},{"../transport":23,"component-inherit":18,"debug":30,"engine.io-parser":33,"parseqs":50,"xmlhttprequest":29}],28:[function(require,module,exports){/**
         * Module dependencies.
         */var Transport=require('../transport');var parser=require('engine.io-parser');var parseqs=require('parseqs');var inherit=require('component-inherit');var debug=require('debug')('engine.io-client:websocket');/**
         * `ws` exposes a WebSocket-compatible interface in
         * Node, or the `WebSocket` or `MozWebSocket` globals
         * in the browser.
         */var WebSocket=require('ws');/**
         * Module exports.
         */module.exports=WS;/**
         * WebSocket transport constructor.
         *
         * @api {Object} connection options
         * @api public
         */function WS(opts){var forceBase64=opts&&opts.forceBase64;if(forceBase64){this.supportsBinary=false;}Transport.call(this,opts);}/**
         * Inherits from Transport.
         */inherit(WS,Transport);/**
         * Transport name.
         *
         * @api public
         */WS.prototype.name='websocket';/*
 * WebSockets support binary
 */WS.prototype.supportsBinary=true;/**
         * Opens socket.
         *
         * @api private
         */WS.prototype.doOpen=function(){if(!this.check()){// let probe timeout
return;}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent};// SSL options for Node.js client
opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;this.ws=new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false;}this.ws.binaryType='arraybuffer';this.addEventListeners();};/**
         * Adds event listeners to the socket
         *
         * @api private
         */WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen();};this.ws.onclose=function(){self.onClose();};this.ws.onmessage=function(ev){self.onData(ev.data);};this.ws.onerror=function(e){self.onError('websocket error',e);};};/**
         * Override `onData` to use a timer on iOS.
         * See: https://gist.github.com/mloughran/2052006
         *
         * @api private
         */if('undefined'!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data);},0);};}/**
         * Writes data to socket.
         *
         * @param {Array} array of packets.
         * @api private
         */WS.prototype.write=function(packets){var self=this;this.writable=false;// encodePacket efficient as it uses WS framing
// no need for encodePayload
for(var i=0,l=packets.length;i<l;i++){parser.encodePacket(packets[i],this.supportsBinary,function(data){//Sometimes the websocket has already been closed but the browser didn't
//have a chance of informing us about it yet, in that case send will
//throw an error
try{self.ws.send(data);}catch(e){debug('websocket closed before onclose event');}});}function ondrain(){self.writable=true;self.emit('drain');}// fake drain
// defer to next tick to allow Socket to clear writeBuffer
setTimeout(ondrain,0);};/**
         * Called upon close
         *
         * @api private
         */WS.prototype.onClose=function(){Transport.prototype.onClose.call(this);};/**
         * Closes socket.
         *
         * @api private
         */WS.prototype.doClose=function(){if(typeof this.ws!=='undefined'){this.ws.close();}};/**
         * Generates uri for connection.
         *
         * @api private
         */WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?'wss':'ws';var port='';// avoid port if default for schema
if(this.port&&('wss'==schema&&this.port!=443||'ws'==schema&&this.port!=80)){port=':'+this.port;}// append timestamp to URI
if(this.timestampRequests){query[this.timestampParam]=+new Date();}// communicate binary support capabilities
if(!this.supportsBinary){query.b64=1;}query=parseqs.encode(query);// prepend ? to query
if(query.length){query='?'+query;}return schema+'://'+this.hostname+port+this.path+query;};/**
         * Feature detection for WebSocket.
         *
         * @return {Boolean} whether this transport is available.
         * @api public
         */WS.prototype.check=function(){return!!WebSocket&&!('__initialize'in WebSocket&&this.name===WS.prototype.name);};},{"../transport":23,"component-inherit":18,"debug":30,"engine.io-parser":33,"parseqs":50,"ws":76}],29:[function(require,module,exports){// browser shim for xmlhttprequest module
var hasCORS=require('has-cors');module.exports=function(opts){var xdomain=opts.xdomain;// scheme must be same when usign XDomainRequest
// http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
var xscheme=opts.xscheme;// XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
// https://github.com/Automattic/engine.io-client/pull/217
var enablesXDR=opts.enablesXDR;// XMLHttpRequest can be disabled on IE
try{if('undefined'!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest();}}catch(e){}// Use XDomainRequest for IE8 if enablesXDR is true
// because loading bar keeps flashing when using jsonp-polling
// https://github.com/yujiosaka/socke.io-ie8-loading-example
try{if('undefined'!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest();}}catch(e){}if(!xdomain){try{return new ActiveXObject('Microsoft.XMLHTTP');}catch(e){}}};},{"has-cors":40}],30:[function(require,module,exports){/**
         * This is the web browser implementation of `debug()`.
         *
         * Expose `debug()` as the module.
         */exports=module.exports=require('./debug');exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;/**
         * Colors.
         */exports.colors=['lightseagreen','forestgreen','goldenrod','dodgerblue','darkorchid','crimson'];/**
         * Currently only WebKit-based Web Inspectors, Firefox >= v31,
         * and the Firebug extension (any Firefox version) are known
         * to support "%c" CSS customizations.
         *
         * TODO: add a `localStorage` variable to explicitly enable/disable colors
         */function useColors(){// is webkit? http://stackoverflow.com/a/16459606/376773
return'WebkitAppearance'in document.documentElement.style||// is firebug? http://stackoverflow.com/a/398120/376773
window.console&&(console.firebug||console.exception&&console.table)||// is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31;}/**
         * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
         */exports.formatters.j=function(v){return JSON.stringify(v);};/**
         * Colorize log arguments if enabled.
         *
         * @api public
         */function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?'%c':'')+this.namespace+(useColors?' %c':' ')+args[0]+(useColors?'%c ':' ')+'+'+exports.humanize(this.diff);if(!useColors)return args;var c='color: '+this.color;args=[args[0],c,'color: inherit'].concat(Array.prototype.slice.call(args,1));// the final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into
var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if('%%'===match)return;index++;if('%c'===match){// we only are interested in the *last* %c
// (the user may have provided their own)
lastC=index;}});args.splice(lastC,0,c);return args;}/**
         * Invokes `console.log()` when available.
         * No-op when `console.log` is not a "function".
         *
         * @api public
         */function log(){// This hackery is required for IE8,
// where the `console.log` function doesn't have 'apply'
return'object'==(typeof console==="undefined"?"undefined":_typeof(console))&&'function'==typeof console.log&&Function.prototype.apply.call(console.log,console,arguments);}/**
         * Save `namespaces`.
         *
         * @param {String} namespaces
         * @api private
         */function save(namespaces){try{if(null==namespaces){localStorage.removeItem('debug');}else{localStorage.debug=namespaces;}}catch(e){}}/**
         * Load `namespaces`.
         *
         * @return {String} returns the previously persisted debug modes
         * @api private
         */function load(){var r;try{r=localStorage.debug;}catch(e){}return r;}/**
         * Enable namespaces listed in `localStorage.debug` initially.
         */exports.enable(load());},{"./debug":31}],31:[function(require,module,exports){/**
         * This is the common logic for both the Node.js and web browser
         * implementations of `debug()`.
         *
         * Expose `debug()` as the module.
         */exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=require('ms');/**
         * The currently active debug mode names, and names to skip.
         */exports.names=[];exports.skips=[];/**
         * Map of special "%n" handling functions, for the debug "format" argument.
         *
         * Valid key names are a single, lowercased letter, i.e. "n".
         */exports.formatters={};/**
         * Previously assigned color.
         */var prevColor=0;/**
         * Previous log timestamp.
         */var prevTime;/**
         * Select a color.
         *
         * @return {Number}
         * @api private
         */function selectColor(){return exports.colors[prevColor++%exports.colors.length];}/**
         * Create a debugger with the given `namespace`.
         *
         * @param {String} namespace
         * @return {Function}
         * @api public
         */function debug(namespace){// define the `disabled` version
function disabled(){}disabled.enabled=false;// define the `enabled` version
function enabled(){var self=enabled;// set `diff` timestamp
var curr=+new Date();var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;// add the `color` if not set
if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if('string'!==typeof args[0]){// anything else let's inspect with %o
args=['%o'].concat(args);}// apply any `formatters` transformations
var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){// if we encounter an escaped % then don't increase the array index
if(match==='%%')return match;index++;var formatter=exports.formatters[format];if('function'===typeof formatter){var val=args[index];match=formatter.call(self,val);// now we need to remove `args[index]` since it's inlined in the `format`
args.splice(index,1);index--;}return match;});if('function'===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args);}var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args);}enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn;}/**
         * Enables a debug mode by namespaces. This can include modes
         * separated by a colon and wildcards.
         *
         * @param {String} namespaces
         * @api public
         */function enable(namespaces){exports.save(namespaces);var split=(namespaces||'').split(/[\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;// ignore empty strings
namespaces=split[i].replace(/\*/g,'.*?');if(namespaces[0]==='-'){exports.skips.push(new RegExp('^'+namespaces.substr(1)+'$'));}else{exports.names.push(new RegExp('^'+namespaces+'$'));}}}/**
         * Disable debug output.
         *
         * @api public
         */function disable(){exports.enable('');}/**
         * Returns true if the given mode name is enabled, false otherwise.
         *
         * @param {String} name
         * @return {Boolean}
         * @api public
         */function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false;}}for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true;}}return false;}/**
         * Coerce `val`.
         *
         * @param {Mixed} val
         * @return {Mixed}
         * @api private
         */function coerce(val){if(val instanceof Error)return val.stack||val.message;return val;}},{"ms":47}],32:[function(require,module,exports){/**
         * Parses an URI
         *
         * @author Steven Levithan <stevenlevithan.com> (MIT license)
         * @api private
         */var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'];module.exports=function parseuri(str){var src=str,b=str.indexOf('['),e=str.indexOf(']');if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,';')+str.substring(e,str.length);}var m=re.exec(str||''),uri={},i=14;while(i--){uri[parts[i]]=m[i]||'';}if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,':');uri.authority=uri.authority.replace('[','').replace(']','').replace(/;/g,':');uri.ipv6uri=true;}return uri;};},{}],33:[function(require,module,exports){(function(global){/**
             * Module dependencies.
             */var keys=require('./keys');var hasBinary=require('has-binary');var sliceBuffer=require('arraybuffer.slice');var base64encoder=require('base64-arraybuffer');var after=require('after');var utf8=require('utf8');/**
             * Check if we are running an android browser. That requires us to use
             * ArrayBuffer with polling transports...
             *
             * http://ghinda.net/jpeg-blob-ajax-android/
             */var isAndroid=navigator.userAgent.match(/Android/i);/**
             * Check if we are running in PhantomJS.
             * Uploading a Blob with PhantomJS does not work correctly, as reported here:
             * https://github.com/ariya/phantomjs/issues/11395
             * @type boolean
             */var isPhantomJS=/PhantomJS/i.test(navigator.userAgent);/**
             * When true, avoids using Blobs to encode payloads.
             * @type boolean
             */var dontSendBlobs=isAndroid||isPhantomJS;/**
             * Current protocol version.
             */exports.protocol=3;/**
             * Packet types.
             */var packets=exports.packets={open:0// non-ws
,close:1// non-ws
,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);/**
             * Premade error packet.
             */var err={type:'error',data:'parser error'};/**
             * Create a blob api even for blob builder when vendor prefixes exist
             */var Blob=require('blob');/**
             * Encodes a packet.
             *
             *     <packet type id> [ <data> ]
             *
             * Example:
             *
             *     5hello world
             *     3
             *     4
             *
             * Binary is encoded in an identical principle
             *
             * @api private
             */exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if('function'==typeof supportsBinary){callback=supportsBinary;supportsBinary=false;}if('function'==typeof utf8encode){callback=utf8encode;utf8encode=null;}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback);}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback);}// might be an object with { base64: true, data: dataAsBase64String }
if(data&&data.base64){return encodeBase64Object(packet,callback);}// Sending data as a utf-8 string
var encoded=packets[packet.type];// data fragment is optional
if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data);}return callback(''+encoded);};function encodeBase64Object(packet,callback){// packet data is an object { base64: true, data: dataAsBase64String }
var message='b'+exports.packets[packet.type]+packet.data.data;return callback(message);}/**
             * Encode packet helpers for binary types
             */function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i];}return callback(resultBuffer.buffer);}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}var fr=new FileReader();fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback);};return fr.readAsArrayBuffer(packet.data);}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback);}if(dontSendBlobs){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback);}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob);}/**
             * Encodes a packet with binary data in a base64 string
             *
             * @param {Object} packet, has `type` and `data`
             * @return {String} base64 encoded message
             */exports.encodeBase64Packet=function(packet,callback){var message='b'+exports.packets[packet.type];if(Blob&&packet.data instanceof Blob){var fr=new FileReader();fr.onload=function(){var b64=fr.result.split(',')[1];callback(message+b64);};return fr.readAsDataURL(packet.data);}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data));}catch(e){// iPhone Safari doesn't let you apply with typed arrays
var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i];}b64data=String.fromCharCode.apply(null,basic);}message+=global.btoa(b64data);return callback(message);};/**
             * Decodes a packet. Changes format to Blob if requested.
             *
             * @return {Object} with `type` and `data` (if any)
             * @api private
             */exports.decodePacket=function(data,binaryType,utf8decode){// String data
if(typeof data=='string'||data===undefined){if(data.charAt(0)=='b'){return exports.decodeBase64Packet(data.substr(1),binaryType);}if(utf8decode){try{data=utf8.decode(data);}catch(e){return err;}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err;}if(data.length>1){return{type:packetslist[type],data:data.substring(1)};}else{return{type:packetslist[type]};}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType==='blob'){rest=new Blob([rest]);}return{type:packetslist[type],data:rest};};/**
             * Decodes a packet encoded in a base64 string
             *
             * @param {String} base64 encoded message
             * @return {Object} with `type` and `data` (if any)
             */exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}};}var data=base64encoder.decode(msg.substr(1));if(binaryType==='blob'&&Blob){data=new Blob([data]);}return{type:type,data:data};};/**
             * Encodes multiple messages (payload).
             *
             *     <length>:data
             *
             * Example:
             *
             *     11:hello world2:hi
             *
             * If any contents are binary, they will be encoded as base64 strings. Base64
             * encoded strings are marked with a b before the length specifier
             *
             * @param {Array} packets
             * @api private
             */exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary=='function'){callback=supportsBinary;supportsBinary=null;}var isBinary=hasBinary(packets);if(supportsBinary&&isBinary){if(Blob&&!dontSendBlobs){return exports.encodePayloadAsBlob(packets,callback);}return exports.encodePayloadAsArrayBuffer(packets,callback);}if(!packets.length){return callback('0:');}function setLengthHeader(message){return message.length+':'+message;}function encodeOne(packet,doneCallback){exports.encodePacket(packet,!isBinary?false:supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message));});}map(packets,encodeOne,function(err,results){return callback(results.join(''));});};/**
             * Async array map using after
             */function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function eachWithIndex(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result);});};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next);}}/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */exports.decodePayload=function(data,binaryType,callback){if(typeof data!='string'){return exports.decodePayloadAsBinary(data,binaryType,callback);}if(typeof binaryType==='function'){callback=binaryType;binaryType=null;}var packet;if(data==''){// parser error - ignoring payload
return callback(err,0,1);}var length='',n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(':'!=chr){length+=chr;}else{if(''==length||length!=(n=Number(length))){// parser error - ignoring payload
return callback(err,0,1);}msg=data.substr(i+1,n);if(length!=msg.length){// parser error - ignoring payload
return callback(err,0,1);}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){// parser error in individual packet - ignoring payload
return callback(err,0,1);}var ret=callback(packet,i+n,l);if(false===ret)return;}// advance cursor
i+=n;length='';}}if(length!=''){// parser error - ignoring payload
return callback(err,0,1);}};/**
             * Encodes multiple messages (payload) as binary.
             *
             * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
             * 255><data>
             *
             * Example:
             * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
             *
             * @param {Array} packets
             * @return {ArrayBuffer} encoded payload
             * @api private
             */exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0));}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data);});}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p==='string'){len=p.length;}else{len=p.byteLength;}return acc+len.toString().length+len+2;// string/binary identifier + separator = 2
},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p==='string';var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i);}ab=view.buffer;}if(isString){// not true binary
resultArray[bufferIndex++]=0;}else{// true binary
resultArray[bufferIndex++]=1;}var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i]);}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i];}});return callback(resultArray.buffer);});};/**
             * Encode as Blob
             */exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded==='string'){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i);}encoded=view.buffer;binaryIdentifier[0]=0;}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i]);}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob);}});}map(packets,encodeOne,function(err,results){return callback(new Blob(results));});};/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType==='function'){callback=binaryType;binaryType=null;}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength='';for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break;}msgLength+=tailArray[i];}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg));}catch(e){// iPhone Safari doesn't let you apply to typed arrays
var typed=new Uint8Array(msg);msg='';for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i]);}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength);}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total);});};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./keys":34,"after":1,"arraybuffer.slice":2,"base64-arraybuffer":14,"blob":15,"has-binary":39,"utf8":70}],34:[function(require,module,exports){/**
         * Gets the keys for an object.
         *
         * @return {Array} keys
         * @api private
         */module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i);}}return arr;};},{}],35:[function(require,module,exports){var WildEmitter=require('wildemitter');var util=require('util');function Sender(opts){WildEmitter.call(this);var options=opts||{};this.config={chunksize:16384,pacing:0};// set our config from options
var item;for(item in options){this.config[item]=options[item];}this.file=null;this.channel=null;}util.inherits(Sender,WildEmitter);Sender.prototype.send=function(file,channel){var self=this;this.file=file;this.channel=channel;var usePoll=typeof channel.bufferedAmountLowThreshold!=='number';var offset=0;var sliceFile=function sliceFile(){var reader=new window.FileReader();reader.onload=function(){return function(e){self.channel.send(e.target.result);self.emit('progress',offset,file.size,e.target.result);if(file.size>offset+e.target.result.byteLength){if(usePoll){window.setTimeout(sliceFile,self.config.pacing);}else if(channel.bufferedAmount<=channel.bufferedAmountLowThreshold){window.setTimeout(sliceFile,0);}else{// wait for bufferedAmountLow to fire
}}else{self.emit('progress',file.size,file.size,null);self.emit('sentFile');}offset=offset+self.config.chunksize;};}(file);var slice=file.slice(offset,offset+self.config.chunksize);reader.readAsArrayBuffer(slice);};if(!usePoll){channel.bufferedAmountLowThreshold=8*this.config.chunksize;channel.addEventListener('bufferedamountlow',sliceFile);}window.setTimeout(sliceFile,0);};function Receiver(){WildEmitter.call(this);this.receiveBuffer=[];this.received=0;this.metadata={};this.channel=null;}util.inherits(Receiver,WildEmitter);Receiver.prototype.receive=function(metadata,channel){var self=this;if(metadata){this.metadata=metadata;}this.channel=channel;// chrome only supports arraybuffers and those make it easier to calc the hash
channel.binaryType='arraybuffer';this.channel.onmessage=function(event){var len=event.data.byteLength;self.received+=len;self.receiveBuffer.push(event.data);self.emit('progress',self.received,self.metadata.size,event.data);if(self.received===self.metadata.size){self.emit('receivedFile',new window.Blob(self.receiveBuffer),self.metadata);self.receiveBuffer=[];// discard receivebuffer
}else if(self.received>self.metadata.size){// FIXME
console.error('received more than expected, discarding...');self.receiveBuffer=[];// just discard...
}};};module.exports={};module.exports.support=typeof window!=='undefined'&&window&&window.File&&window.FileReader&&window.Blob;module.exports.Sender=Sender;module.exports.Receiver=Receiver;},{"util":73,"wildemitter":75}],36:[function(require,module,exports){// cache for constraints and callback
var cache={};module.exports=function(constraints,cb){var hasConstraints=arguments.length===2;var callback=hasConstraints?cb:constraints;var error;if(typeof window==='undefined'||window.location.protocol==='http:'){error=new Error('NavigatorUserMediaError');error.name='HTTPS_REQUIRED';return callback(error);}if(window.navigator.userAgent.match('Chrome')){var chromever=parseInt(window.navigator.userAgent.match(/Chrome\/(.*) /)[1],10);var maxver=33;var isCef=!window.chrome.webstore;// "known" crash in chrome 34 and 35 on linux
if(window.navigator.userAgent.match('Linux'))maxver=35;// check that the extension is installed by looking for a
// sessionStorage variable that contains the extension id
// this has to be set after installation unless the contest
// script does that
if(sessionStorage.getScreenMediaJSExtensionId){chrome.runtime.sendMessage(sessionStorage.getScreenMediaJSExtensionId,{type:'getScreen',id:1},null,function(data){if(!data||data.sourceId===''){// user canceled
var error=new Error('NavigatorUserMediaError');error.name='NotAllowedError';callback(error);}else{constraints=hasConstraints&&constraints||{audio:false,video:{mandatory:{chromeMediaSource:'desktop',maxWidth:window.screen.width,maxHeight:window.screen.height,maxFrameRate:3}}};constraints.video.mandatory.chromeMediaSourceId=data.sourceId;window.navigator.mediaDevices.getUserMedia(constraints).then(function(stream){callback(null,stream);}).catch(function(err){callback(err);});}});}else if(window.cefGetScreenMedia){//window.cefGetScreenMedia is experimental - may be removed without notice
window.cefGetScreenMedia(function(sourceId){if(!sourceId){var error=new Error('cefGetScreenMediaError');error.name='CEF_GETSCREENMEDIA_CANCELED';callback(error);}else{constraints=hasConstraints&&constraints||{audio:false,video:{mandatory:{chromeMediaSource:'desktop',maxWidth:window.screen.width,maxHeight:window.screen.height,maxFrameRate:3},optional:[{googLeakyBucket:true},{googTemporalLayeredScreencast:true}]}};constraints.video.mandatory.chromeMediaSourceId=sourceId;window.navigator.mediaDevices.getUserMedia(constraints).then(function(stream){callback(null,stream);}).catch(function(err){callback(err);});}});}else if(isCef||chromever>=26&&chromever<=maxver){// chrome 26 - chrome 33 way to do it -- requires bad chrome://flags
// note: this is basically in maintenance mode and will go away soon
constraints=hasConstraints&&constraints||{video:{mandatory:{googLeakyBucket:true,maxWidth:window.screen.width,maxHeight:window.screen.height,maxFrameRate:3,chromeMediaSource:'screen'}}};window.navigator.mediaDevices.getUserMedia(constraints).then(function(stream){callback(null,stream);}).catch(function(err){callback(err);});}else{// chrome 34+ way requiring an extension
var pending=window.setTimeout(function(){error=new Error('NavigatorUserMediaError');error.name='EXTENSION_UNAVAILABLE';return callback(error);},1000);cache[pending]=[callback,hasConstraints?constraints:null];window.postMessage({type:'getScreen',id:pending},'*');}}else if(window.navigator.userAgent.match('Firefox')){var ffver=parseInt(window.navigator.userAgent.match(/Firefox\/(.*)/)[1],10);if(ffver>=33){constraints=hasConstraints&&constraints||{video:{mozMediaSource:'window',mediaSource:'window'}};window.navigator.mediaDevices.getUserMedia(constraints).then(function(stream){callback(null,stream);var lastTime=stream.currentTime;var polly=window.setInterval(function(){if(!stream)window.clearInterval(polly);if(stream.currentTime==lastTime){window.clearInterval(polly);if(stream.onended){stream.onended();}}lastTime=stream.currentTime;},500);}).catch(function(err){callback(err);});}else{error=new Error('NavigatorUserMediaError');error.name='EXTENSION_UNAVAILABLE';// does not make much sense but...
}}};typeof window!=='undefined'&&window.addEventListener('message',function(event){if(event.origin!=window.location.origin){return;}if(event.data.type=='gotScreen'&&cache[event.data.id]){var data=cache[event.data.id];var constraints=data[1];var callback=data[0];delete cache[event.data.id];if(event.data.sourceId===''){// user canceled
var error=new Error('NavigatorUserMediaError');error.name='NotAllowedError';callback(error);}else{constraints=constraints||{audio:false,video:{mandatory:{chromeMediaSource:'desktop',maxWidth:window.screen.width,maxHeight:window.screen.height,maxFrameRate:3},optional:[{googLeakyBucket:true},{googTemporalLayeredScreencast:true}]}};constraints.video.mandatory.chromeMediaSourceId=event.data.sourceId;window.navigator.mediaDevices.getUserMedia(constraints).then(function(stream){callback(null,stream);}).catch(function(err){callback(err);});}}else if(event.data.type=='getScreenPending'){window.clearTimeout(event.data.id);}});},{}],37:[function(require,module,exports){/**
         * Returns `this`. Execute this without a "context" (i.e. without it being
         * attached to an object of the left-hand side), and `this` points to the
         * "global" scope of the current JS execution.
         */module.exports=function(){return this;}();},{}],38:[function(require,module,exports){var WildEmitter=require('wildemitter');function getMaxVolume(analyser,fftBins){var maxVolume=-Infinity;analyser.getFloatFrequencyData(fftBins);for(var i=4,ii=fftBins.length;i<ii;i++){if(fftBins[i]>maxVolume&&fftBins[i]<0){maxVolume=fftBins[i];}};return maxVolume;}var audioContextType;if(typeof window!=='undefined'){audioContextType=window.AudioContext||window.webkitAudioContext;}// use a single audio context due to hardware limits
var audioContext=null;module.exports=function(stream,options){var harker=new WildEmitter();// make it not break in non-supported browsers
if(!audioContextType)return harker;//Config
var options=options||{},smoothing=options.smoothing||0.1,interval=options.interval||50,threshold=options.threshold,play=options.play,history=options.history||10,running=true;//Setup Audio Context
if(!audioContext){audioContext=new audioContextType();}var sourceNode,fftBins,analyser;analyser=audioContext.createAnalyser();analyser.fftSize=512;analyser.smoothingTimeConstant=smoothing;fftBins=new Float32Array(analyser.frequencyBinCount);if(stream.jquery)stream=stream[0];if(stream instanceof HTMLAudioElement||stream instanceof HTMLVideoElement){//Audio Tag
sourceNode=audioContext.createMediaElementSource(stream);if(typeof play==='undefined')play=true;threshold=threshold||-50;}else{//WebRTC Stream
sourceNode=audioContext.createMediaStreamSource(stream);threshold=threshold||-50;}sourceNode.connect(analyser);if(play)analyser.connect(audioContext.destination);harker.speaking=false;harker.setThreshold=function(t){threshold=t;};harker.setInterval=function(i){interval=i;};harker.stop=function(){running=false;harker.emit('volume_change',-100,threshold);if(harker.speaking){harker.speaking=false;harker.emit('stopped_speaking');}analyser.disconnect();sourceNode.disconnect();};harker.speakingHistory=[];for(var i=0;i<history;i++){harker.speakingHistory.push(0);}// Poll the analyser node to determine if speaking
// and emit events if changed
var looper=function looper(){setTimeout(function(){//check if stop has been called
if(!running){return;}var currentVolume=getMaxVolume(analyser,fftBins);harker.emit('volume_change',currentVolume,threshold);var history=0;if(currentVolume>threshold&&!harker.speaking){// trigger quickly, short history
for(var i=harker.speakingHistory.length-3;i<harker.speakingHistory.length;i++){history+=harker.speakingHistory[i];}if(history>=2){harker.speaking=true;harker.emit('speaking');}}else if(currentVolume<threshold&&harker.speaking){for(var i=0;i<harker.speakingHistory.length;i++){history+=harker.speakingHistory[i];}if(history==0){harker.speaking=false;harker.emit('stopped_speaking');}}harker.speakingHistory.shift();harker.speakingHistory.push(0+(currentVolume>threshold));looper();},interval);};looper();return harker;};},{"wildemitter":75}],39:[function(require,module,exports){(function(global){/*
 * Module requirements.
 */var isArray=require('isarray');/**
             * Module exports.
             */module.exports=hasBinary;/**
             * Checks for binary data.
             *
             * Right now only Buffer and ArrayBuffer are supported..
             *
             * @param {Object} anything
             * @api public
             */function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true;}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true;}}}else if(obj&&'object'==(typeof obj==="undefined"?"undefined":_typeof(obj))){if(obj.toJSON){obj=obj.toJSON();}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true;}}}return false;}return _hasBinary(data);}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"isarray":42}],40:[function(require,module,exports){/**
         * Module dependencies.
         */var global=require('global');/**
         * Module exports.
         *
         * Logic borrowed from Modernizr:
         *
         *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
         */try{module.exports='XMLHttpRequest'in global&&'withCredentials'in new global.XMLHttpRequest();}catch(err){// if XMLHttp support is disabled in IE then it will throw
// when trying to create
module.exports=false;}},{"global":37}],41:[function(require,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i;}return-1;};},{}],42:[function(require,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)=='[object Array]';};},{}],43:[function(require,module,exports){/*! JSON v3.2.6 | http://bestiejs.github.io/json3 | Copyright 2012-2013, Kit Cambridge | http://kit.mit-license.org */;(function(window){// Convenience aliases.
var getClass={}.toString,_isProperty,_forEach,undef;// Detect the `define` function exposed by asynchronous module loaders. The
// strict `define` check is necessary for compatibility with `r.js`.
var isLoader=typeof define==="function"&&define.amd;// Detect native implementations.
var nativeJSON=(typeof JSON==="undefined"?"undefined":_typeof(JSON))=="object"&&JSON;// Set up the JSON 3 namespace, preferring the CommonJS `exports` object if
// available.
var JSON3=(typeof exports==="undefined"?"undefined":_typeof(exports))=="object"&&exports&&!exports.nodeType&&exports;if(JSON3&&nativeJSON){// Explicitly delegate to the native `stringify` and `parse`
// implementations in CommonJS environments.
JSON3.stringify=nativeJSON.stringify;JSON3.parse=nativeJSON.parse;}else{// Export for web browsers, JavaScript engines, and asynchronous module
// loaders, using the global `JSON` object if available.
JSON3=window.JSON=nativeJSON||{};}// Test the `Date#getUTC*` methods. Based on work by @Yaffle.
var isExtended=new Date(-3509827334573292);try{// The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
// results for certain dates in Opera >= 10.53.
isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&// Safari < 2.0.2 stores the internal millisecond time value correctly,
// but clips the values returned by the date methods to the range of
// signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708;}catch(exception){}// Internal: Determines whether the native `JSON.stringify` and `parse`
// implementations are spec-compliant. Based on work by Ken Snyder.
function has(name){if(has[name]!==undef){// Return cached feature test result.
return has[name];}var isSupported;if(name=="bug-string-char-index"){// IE <= 7 doesn't support accessing string characters using square
// bracket notation. IE 8 only supports this for primitives.
isSupported="a"[0]!="a";}else if(name=="json"){// Indicates whether both `JSON.stringify` and `JSON.parse` are
// supported.
isSupported=has("json-stringify")&&has("json-parse");}else{var value,serialized="{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";// Test `JSON.stringify`.
if(name=="json-stringify"){var stringify=JSON3.stringify,stringifySupported=typeof stringify=="function"&&isExtended;if(stringifySupported){// A test function object with a custom `toJSON` method.
(value=function value(){return 1;}).toJSON=value;try{stringifySupported=// Firefox 3.1b1 and b2 serialize string, number, and boolean
// primitives as object literals.
stringify(0)==="0"&&// FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
// literals.
stringify(new Number())==="0"&&stringify(new String())=='""'&&// FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
// does not define a canonical JSON representation (this applies to
// objects with `toJSON` properties as well, *unless* they are nested
// within an object or array).
stringify(getClass)===undef&&// IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
// FF 3.1b3 pass this test.
stringify(undef)===undef&&// Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
// respectively, if the value is omitted entirely.
stringify()===undef&&// FF 3.1b1, 2 throw an error if the given value is not a number,
// string, array, object, Boolean, or `null` literal. This applies to
// objects with custom `toJSON` methods as well, unless they are nested
// inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
// methods entirely.
stringify(value)==="1"&&stringify([value])=="[1]"&&// Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
// `"[null]"`.
stringify([undef])=="[null]"&&// YUI 3.0.0b1 fails to serialize `null` literals.
stringify(null)=="null"&&// FF 3.1b1, 2 halts serialization if an array contains a function:
// `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
// elides non-JSON values from objects and arrays, unless they
// define custom `toJSON` methods.
stringify([undef,getClass,null])=="[null,null,null]"&&// Simple serialization test. FF 3.1b1 uses Unicode escape sequences
// where character escape codes are expected (e.g., `\b` => `\u0008`).
stringify({"a":[value,true,false,null,"\x00\b\n\f\r\t"]})==serialized&&// FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
stringify(null,value)==="1"&&stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&// JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
// serialize extended years.
stringify(new Date(-8.64e15))=='"-271821-04-20T00:00:00.000Z"'&&// The milliseconds are optional in ES 5, but required in 5.1.
stringify(new Date(8.64e15))=='"+275760-09-13T00:00:00.000Z"'&&// Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
// four-digit years instead of six-digit years. Credits: @Yaffle.
stringify(new Date(-621987552e5))=='"-000001-01-01T00:00:00.000Z"'&&// Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
// values less than 1000. Credits: @Yaffle.
stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"';}catch(exception){stringifySupported=false;}}isSupported=stringifySupported;}// Test `JSON.parse`.
if(name=="json-parse"){var parse=JSON3.parse;if(typeof parse=="function"){try{// FF 3.1b1, b2 will throw an exception if a bare literal is provided.
// Conforming implementations should also coerce the initial argument to
// a string prior to parsing.
if(parse("0")===0&&!parse(false)){// Simple parsing test.
value=parse(serialized);var parseSupported=value["a"].length==5&&value["a"][0]===1;if(parseSupported){try{// Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
parseSupported=!parse('"\t"');}catch(exception){}if(parseSupported){try{// FF 4.0 and 4.0.1 allow leading `+` signs and leading
// decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
// certain octal literals.
parseSupported=parse("01")!==1;}catch(exception){}}if(parseSupported){try{// FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
// points. These environments, along with FF 3.1b1 and 2,
// also allow trailing commas in JSON objects and arrays.
parseSupported=parse("1.")!==1;}catch(exception){}}}}}catch(exception){parseSupported=false;}}isSupported=parseSupported;}}return has[name]=!!isSupported;}if(!has("json")){// Common `[[Class]]` name aliases.
var functionClass="[object Function]";var dateClass="[object Date]";var numberClass="[object Number]";var stringClass="[object String]";var arrayClass="[object Array]";var booleanClass="[object Boolean]";// Detect incomplete support for accessing string characters by index.
var charIndexBuggy=has("bug-string-char-index");// Define additional utility methods if the `Date` methods are buggy.
if(!isExtended){var floor=Math.floor;// A mapping between the months of the year and the number of days between
// January 1st and the first of the respective month.
var Months=[0,31,59,90,120,151,181,212,243,273,304,334];// Internal: Calculates the number of days between the Unix epoch and the
// first day of the given month.
var getDay=function getDay(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400);};}// Internal: Determines if a property is a direct property of the given
// object. Delegates to the native `Object#hasOwnProperty` method.
if(!(_isProperty={}.hasOwnProperty)){_isProperty=function isProperty(property){var members={},constructor;if((members.__proto__=null,members.__proto__={// The *proto* property cannot be set multiple times in recent
// versions of Firefox and SeaMonkey.
"toString":1},members).toString!=getClass){// Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
// supports the mutable *proto* property.
_isProperty=function isProperty(property){// Capture and break the object's prototype chain (see section 8.6.2
// of the ES 5.1 spec). The parenthesized expression prevents an
// unsafe transformation by the Closure Compiler.
var original=this.__proto__,result=property in(this.__proto__=null,this);// Restore the original prototype chain.
this.__proto__=original;return result;};}else{// Capture a reference to the top-level `Object` constructor.
constructor=members.constructor;// Use the `constructor` property to simulate `Object#hasOwnProperty` in
// other environments.
_isProperty=function isProperty(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property]);};}members=null;return _isProperty.call(this,property);};}// Internal: A set of primitive types used by `isHostType`.
var PrimitiveTypes={'boolean':1,'number':1,'string':1,'undefined':1};// Internal: Determines if the given object `property` value is a
// non-primitive.
var isHostType=function isHostType(object,property){var type=_typeof(object[property]);return type=='object'?!!object[property]:!PrimitiveTypes[type];};// Internal: Normalizes the `for...in` iteration algorithm across
// environments. Each enumerated key is yielded to a `callback` function.
_forEach=function forEach(object,callback){var size=0,Properties,members,property;// Tests for bugs in the current environment's `for...in` algorithm. The
// `valueOf` property inherits the non-enumerable flag from
// `Object.prototype` in older versions of IE, Netscape, and Mozilla.
(Properties=function Properties(){this.valueOf=0;}).prototype.valueOf=0;// Iterate over a new instance of the `Properties` class.
members=new Properties();for(property in members){// Ignore all properties inherited from `Object.prototype`.
if(_isProperty.call(members,property)){size++;}}Properties=members=null;// Normalize the iteration algorithm.
if(!size){// A list of non-enumerable properties inherited from `Object.prototype`.
members=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];// IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
// properties.
_forEach=function forEach(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!='function'&&isHostType(object,'hasOwnProperty')?object.hasOwnProperty:_isProperty;for(property in object){// Gecko <= 1.0 enumerates the `prototype` property of functions under
// certain conditions; IE does not.
if(!(isFunction&&property=="prototype")&&hasProperty.call(object,property)){callback(property);}}// Manually invoke the callback for each non-enumerable property.
for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property)){}};}else if(size==2){// Safari <= 2.0.4 enumerates shadowed properties twice.
_forEach=function forEach(object,callback){// Create a set of iterated properties.
var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){// Store each property name to prevent double enumeration. The
// `prototype` property of functions is not enumerated due to cross-
// environment inconsistencies.
if(!(isFunction&&property=="prototype")&&!_isProperty.call(members,property)&&(members[property]=1)&&_isProperty.call(object,property)){callback(property);}}};}else{// No bugs detected; use the standard `for...in` algorithm.
_forEach=function forEach(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property=="prototype")&&_isProperty.call(object,property)&&!(isConstructor=property==="constructor")){callback(property);}}// Manually invoke the callback for the `constructor` property due to
// cross-environment inconsistencies.
if(isConstructor||_isProperty.call(object,property="constructor")){callback(property);}};}return _forEach(object,callback);};// Public: Serializes a JavaScript `value` as a JSON string. The optional
// `filter` argument may specify either a function that alters how object and
// array members are serialized, or an array of strings and numbers that
// indicates which properties should be serialized. The optional `width`
// argument may be either a string or number that specifies the indentation
// level of the output.
if(!has("json-stringify")){// Internal: A map of control characters and their escaped equivalents.
var Escapes={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"};// Internal: Converts `value` into a zero-padded string such that its
// length is at least equal to `width`. The `width` must be <= 6.
var leadingZeroes="000000";var toPaddedString=function toPaddedString(width,value){// The `|| 0` expression is necessary to work around a bug in
// Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
return(leadingZeroes+(value||0)).slice(-width);};// Internal: Double-quotes a string `value`, replacing all ASCII control
// characters (characters with code unit values between 0 and 31) with
// their escaped equivalents. This is an implementation of the
// `Quote(value)` operation defined in ES 5.1 section 15.12.3.
var unicodePrefix="\\u00";var quote=function quote(value){var result='"',index=0,length=value.length,isLarge=length>10&&charIndexBuggy,symbols;if(isLarge){symbols=value.split("");}for(;index<length;index++){var charCode=value.charCodeAt(index);// If the character is a control character, append its Unicode or
// shorthand escape sequence; otherwise, append the character as-is.
switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break;}result+=isLarge?symbols[index]:charIndexBuggy?value.charAt(index):value[index];}}return result+'"';};// Internal: Recursively serializes an object. Implements the
// `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
var serialize=function serialize(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{// Necessary for host object support.
value=object[property];}catch(exception){}if((typeof value==="undefined"?"undefined":_typeof(value))=="object"&&value){className=getClass.call(value);if(className==dateClass&&!_isProperty.call(value,"toJSON")){if(value>-1/0&&value<1/0){// Dates are serialized according to the `Date#toJSON` method
// specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
// for the ISO 8601 date time string format.
if(getDay){// Manually compute the year, month, date, hours, minutes,
// seconds, and milliseconds if the `getUTC*` methods are
// buggy. Adapted from @Yaffle's `date-shim` project.
date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++){}for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++){}date=1+date-getDay(year,month);// The `time` value specifies the time within the day (see ES
// 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
// to compute `A modulo B`, as the `%` operator does not
// correspond to the `modulo` operation for negative numbers.
time=(value%864e5+864e5)%864e5;// The hours, minutes, seconds, and milliseconds are obtained by
// decomposing the time within the day. See section 15.9.1.10.
hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3;}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds();}// Serialize extended years correctly.
value=(year<=0||year>=1e4?(year<0?"-":"+")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+"-"+toPaddedString(2,month+1)+"-"+toPaddedString(2,date)+// Months, dates, hours, minutes, and seconds should have two
// digits; milliseconds should have three.
"T"+toPaddedString(2,hours)+":"+toPaddedString(2,minutes)+":"+toPaddedString(2,seconds)+// Milliseconds are optional in ES 5.0, but required in 5.1.
"."+toPaddedString(3,milliseconds)+"Z";}else{value=null;}}else if(typeof value.toJSON=="function"&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||_isProperty.call(value,"toJSON"))){// Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
// `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
// ignores all `toJSON` methods on these objects unless they are
// defined directly on an instance.
value=value.toJSON(property);}}if(callback){// If a replacement function was provided, call it to obtain the value
// for serialization.
value=callback.call(object,property,value);}if(value===null){return"null";}className=getClass.call(value);if(className==booleanClass){// Booleans are represented literally.
return""+value;}else if(className==numberClass){// JSON numbers must be finite. `Infinity` and `NaN` are serialized as
// `"null"`.
return value>-1/0&&value<1/0?""+value:"null";}else if(className==stringClass){// Strings are double-quoted and escaped.
return quote(""+value);}// Recursively serialize objects and arrays.
if((typeof value==="undefined"?"undefined":_typeof(value))=="object"){// Check for cyclic structures. This is a linear search; performance
// is inversely proportional to the number of unique nested objects.
for(length=stack.length;length--;){if(stack[length]===value){// Cyclic structures cannot be serialized by `JSON.stringify`.
throw TypeError();}}// Add the object to the stack of traversed objects.
stack.push(value);results=[];// Save the current indentation level and indent one additional level.
prefix=indentation;indentation+=whitespace;if(className==arrayClass){// Recursively serialize array elements.
for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?"null":element);}result=results.length?whitespace?"[\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"]":"["+results.join(",")+"]":"[]";}else{// Recursively serialize object members. Members are selected from
// either a user-specified list of property names, or the object
// itself.
_forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){// According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
// is not the empty string, let `member` {quote(property) + ":"}
// be the concatenation of `member` and the `space` character."
// The "`space` character" refers to the literal space
// character, not the `space` {width} argument provided to
// `JSON.stringify`.
results.push(quote(property)+":"+(whitespace?" ":"")+element);}});result=results.length?whitespace?"{\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"}":"{"+results.join(",")+"}":"{}";}// Remove the object from the traversed object stack.
stack.pop();return result;}};// Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
JSON3.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(typeof filter=="function"||(typeof filter==="undefined"?"undefined":_typeof(filter))=="object"&&filter){if((className=getClass.call(filter))==functionClass){callback=filter;}else if(className==arrayClass){// Convert the property names array into a makeshift set.
properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&&(properties[value]=1)){}}}if(width){if((className=getClass.call(width))==numberClass){// Convert the `width` to an integer and create a string containing
// `width` number of space characters.
if((width-=width%1)>0){for(whitespace="",width>10&&(width=10);whitespace.length<width;whitespace+=" "){}}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10);}}// Opera <= 7.54u2 discards the values associated with empty string keys
// (`""`) only if they are used directly within an object member list
// (e.g., `!("" in { "": 1})`).
return serialize("",(value={},value[""]=source,value),callback,properties,whitespace,"",[]);};}// Public: Parses a JSON source string.
if(!has("json-parse")){var fromCharCode=String.fromCharCode;// Internal: A map of escaped control characters and their unescaped
// equivalents.
var Unescapes={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"};// Internal: Stores the parser state.
var Index,Source;// Internal: Resets the parser state and throws a `SyntaxError`.
var abort=function abort(){Index=Source=null;throw SyntaxError();};// Internal: Returns the next token, or `"$"` if the parser has reached
// the end of the source string. A token may be a string, number, `null`
// literal, or Boolean literal.
var lex=function lex(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:// Skip whitespace tokens, including tabs, carriage returns, line
// feeds, and space characters.
Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:// Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
// the current position.
value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:// `"` delimits a JSON string; advance to the next character and
// begin parsing the string. String tokens are prefixed with the
// sentinel `@` character to distinguish them from punctuators and
// end-of-string tokens.
for(value="@",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){// Unescaped ASCII control characters (those with a code unit
// less than the space character) are not permitted.
abort();}else if(charCode==92){// A reverse solidus (`\`) marks the beginning of an escaped
// control character (including `"`, `\`, and `/`) or Unicode
// escape sequence.
charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:// Revive escaped control characters.
value+=Unescapes[charCode];Index++;break;case 117:// `\u` marks the beginning of a Unicode escape sequence.
// Advance to the first character and validate the
// four-digit code point.
begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);// A valid sequence comprises four hexdigits (case-
// insensitive) that form a single hexadecimal value.
if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){// Invalid Unicode escape sequence.
abort();}}// Revive the escaped character.
value+=fromCharCode("0x"+source.slice(begin,Index));break;default:// Invalid escape sequence.
abort();}}else{if(charCode==34){// An unescaped double-quote character marks the end of the
// string.
break;}charCode=source.charCodeAt(Index);begin=Index;// Optimize for the common case where a string is valid.
while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index);}// Append the string as-is.
value+=source.slice(begin,Index);}}if(source.charCodeAt(Index)==34){// Advance to the next character and return the revived string.
Index++;return value;}// Unterminated string.
abort();default:// Parse numbers and literals.
begin=Index;// Advance past the negative sign, if one is specified.
if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index);}// Parse an integer or floating-point value.
if(charCode>=48&&charCode<=57){// Leading zeroes are interpreted as octal literals.
if(charCode==48&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)){// Illegal octal literal.
abort();}isSigned=false;// Parse the integer component.
for(;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++){}// Floats cannot contain a leading decimal point; however, this
// case is already accounted for by the parser.
if(source.charCodeAt(Index)==46){position=++Index;// Parse the decimal component.
for(;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++){}if(position==Index){// Illegal trailing decimal.
abort();}Index=position;}// Parse exponents. The `e` denoting the exponent is
// case-insensitive.
charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);// Skip past the sign following the exponent, if one is
// specified.
if(charCode==43||charCode==45){Index++;}// Parse the exponential component.
for(position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++){}if(position==Index){// Illegal empty exponent.
abort();}Index=position;}// Coerce the parsed value to a JavaScript number.
return+source.slice(begin,Index);}// A negative sign may only precede numbers.
if(isSigned){abort();}// `true`, `false`, and `null` literals.
if(source.slice(Index,Index+4)=="true"){Index+=4;return true;}else if(source.slice(Index,Index+5)=="false"){Index+=5;return false;}else if(source.slice(Index,Index+4)=="null"){Index+=4;return null;}// Unrecognized token.
abort();}}// Return the sentinel `$` character if the parser has reached the end
// of the source string.
return"$";};// Internal: Parses a JSON `value` token.
var get=function get(value){var results,hasMembers;if(value=="$"){// Unexpected end of input.
abort();}if(typeof value=="string"){if((charIndexBuggy?value.charAt(0):value[0])=="@"){// Remove the sentinel `@` character.
return value.slice(1);}// Parse object and array literals.
if(value=="["){// Parses a JSON array, returning a new JavaScript array.
results=[];for(;;hasMembers||(hasMembers=true)){value=lex();// A closing square bracket marks the end of the array literal.
if(value=="]"){break;}// If the array literal contains elements, the current token
// should be a comma separating the previous element from the
// next.
if(hasMembers){if(value==","){value=lex();if(value=="]"){// Unexpected trailing `,` in array literal.
abort();}}else{// A `,` must separate each array element.
abort();}}// Elisions and leading commas are not permitted.
if(value==","){abort();}results.push(get(value));}return results;}else if(value=="{"){// Parses a JSON object, returning a new JavaScript object.
results={};for(;;hasMembers||(hasMembers=true)){value=lex();// A closing curly brace marks the end of the object literal.
if(value=="}"){break;}// If the object literal contains members, the current token
// should be a comma separator.
if(hasMembers){if(value==","){value=lex();if(value=="}"){// Unexpected trailing `,` in object literal.
abort();}}else{// A `,` must separate each object member.
abort();}}// Leading commas are not permitted, object property names must be
// double-quoted strings, and a `:` must separate each property
// name and value.
if(value==","||typeof value!="string"||(charIndexBuggy?value.charAt(0):value[0])!="@"||lex()!=":"){abort();}results[value.slice(1)]=get(lex());}return results;}// Unexpected token encountered.
abort();}return value;};// Internal: Updates a traversed object member.
var update=function update(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property];}else{source[property]=element;}};// Internal: Recursively traverses a parsed JSON object, invoking the
// `callback` function for each value. This is an implementation of the
// `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
var walk=function walk(source,property,callback){var value=source[property],length;if((typeof value==="undefined"?"undefined":_typeof(value))=="object"&&value){// `forEach` can't be used to traverse an array in Opera <= 8.54
// because its `Object#hasOwnProperty` implementation returns `false`
// for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback);}}else{_forEach(value,function(property){update(value,property,callback);});}}return callback.call(source,property,value);};// Public: `JSON.parse`. See ES 5.1 section 15.12.2.
JSON3.parse=function(source,callback){var result,value;Index=0;Source=""+source;result=get(lex());// If a JSON string contains multiple tokens, it is invalid.
if(lex()!="$"){abort();}// Reset the parser state.
Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[""]=result,value),"",callback):result;};}}// Export for asynchronous module loaders.
if(isLoader){define(function(){return JSON3;});}})(this);},{}],44:[function(require,module,exports){var util=require('util');var hark=require('hark');var getScreenMedia=require('getscreenmedia');var WildEmitter=require('wildemitter');var mockconsole=require('mockconsole');function isAllTracksEnded(stream){var isAllTracksEnded=true;stream.getTracks().forEach(function(t){isAllTracksEnded=t.readyState==='ended'&&isAllTracksEnded;});return isAllTracksEnded;}function shouldWorkAroundFirefoxStopStream(){if(typeof window==='undefined'){return false;}if(!window.navigator.mozGetUserMedia){return false;}var match=window.navigator.userAgent.match(/Firefox\/(\d+)\./);var version=match&&match.length>=1&&parseInt(match[1],10);return version<50;}function LocalMedia(opts){WildEmitter.call(this);var config=this.config={detectSpeakingEvents:false,audioFallback:false,media:{audio:true,video:true},harkOptions:null,logger:mockconsole};var item;for(item in opts){if(opts.hasOwnProperty(item)){this.config[item]=opts[item];}}this.logger=config.logger;this._log=this.logger.log.bind(this.logger,'LocalMedia:');this._logerror=this.logger.error.bind(this.logger,'LocalMedia:');this.localStreams=[];this.localScreens=[];if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){this._logerror('Your browser does not support local media capture.');}this._audioMonitors=[];this.on('localStreamStopped',this._stopAudioMonitor.bind(this));this.on('localScreenStopped',this._stopAudioMonitor.bind(this));}util.inherits(LocalMedia,WildEmitter);LocalMedia.prototype.start=function(mediaConstraints,cb){var self=this;var constraints=mediaConstraints||this.config.media;this.emit('localStreamRequested',constraints);navigator.mediaDevices.getUserMedia(constraints).then(function(stream){if(constraints.audio&&self.config.detectSpeakingEvents){self._setupAudioMonitor(stream,self.config.harkOptions);}self.localStreams.push(stream);stream.getTracks().forEach(function(track){track.addEventListener('ended',function(){if(isAllTracksEnded(stream)){self._removeStream(stream);}});});self.emit('localStream',stream);if(cb){return cb(null,stream);}}).catch(function(err){// Fallback for users without a camera
if(self.config.audioFallback&&err.name==='DevicesNotFoundError'&&constraints.video!==false){constraints.video=false;self.start(constraints,cb);return;}self.emit('localStreamRequestFailed',constraints);if(cb){return cb(err,null);}});};LocalMedia.prototype.stop=function(stream){this.stopStream(stream);this.stopScreenShare(stream);};LocalMedia.prototype.stopStream=function(stream){var self=this;if(stream){var idx=this.localStreams.indexOf(stream);if(idx>-1){stream.getTracks().forEach(function(track){track.stop();});//Half-working fix for Firefox, see: https://bugzilla.mozilla.org/show_bug.cgi?id=1208373
if(shouldWorkAroundFirefoxStopStream()){this._removeStream(stream);}}}else{this.localStreams.forEach(function(stream){stream.getTracks().forEach(function(track){track.stop();});//Half-working fix for Firefox, see: https://bugzilla.mozilla.org/show_bug.cgi?id=1208373
if(shouldWorkAroundFirefoxStopStream()){self._removeStream(stream);}});}};LocalMedia.prototype.startScreenShare=function(constraints,cb){var self=this;this.emit('localScreenRequested');if(typeof constraints==='function'&&!cb){cb=constraints;constraints=null;}getScreenMedia(constraints,function(err,stream){if(!err){self.localScreens.push(stream);stream.getTracks().forEach(function(track){track.addEventListener('ended',function(){var isAllTracksEnded=true;stream.getTracks().forEach(function(t){isAllTracksEnded=t.readyState==='ended'&&isAllTracksEnded;});if(isAllTracksEnded){self._removeStream(stream);}});});self.emit('localScreen',stream);}else{self.emit('localScreenRequestFailed');}// enable the callback
if(cb){return cb(err,stream);}});};LocalMedia.prototype.stopScreenShare=function(stream){var self=this;if(stream){var idx=this.localScreens.indexOf(stream);if(idx>-1){stream.getTracks().forEach(function(track){track.stop();});//Half-working fix for Firefox, see: https://bugzilla.mozilla.org/show_bug.cgi?id=1208373
if(shouldWorkAroundFirefoxStopStream()){this._removeStream(stream);}}}else{this.localScreens.forEach(function(stream){stream.getTracks().forEach(function(track){track.stop();});//Half-working fix for Firefox, see: https://bugzilla.mozilla.org/show_bug.cgi?id=1208373
if(shouldWorkAroundFirefoxStopStream()){self._removeStream(stream);}});}};// Audio controls
LocalMedia.prototype.mute=function(){this._audioEnabled(false);this.emit('audioOff');};LocalMedia.prototype.unmute=function(){this._audioEnabled(true);this.emit('audioOn');};// Video controls
LocalMedia.prototype.pauseVideo=function(){this._videoEnabled(false);this.emit('videoOff');};LocalMedia.prototype.resumeVideo=function(){this._videoEnabled(true);this.emit('videoOn');};// Combined controls
LocalMedia.prototype.pause=function(){this.mute();this.pauseVideo();};LocalMedia.prototype.resume=function(){this.unmute();this.resumeVideo();};// Internal methods for enabling/disabling audio/video
LocalMedia.prototype._audioEnabled=function(bool){this.localStreams.forEach(function(stream){stream.getAudioTracks().forEach(function(track){track.enabled=!!bool;});});};LocalMedia.prototype._videoEnabled=function(bool){this.localStreams.forEach(function(stream){stream.getVideoTracks().forEach(function(track){track.enabled=!!bool;});});};// check if all audio streams are enabled
LocalMedia.prototype.isAudioEnabled=function(){var enabled=true;this.localStreams.forEach(function(stream){stream.getAudioTracks().forEach(function(track){enabled=enabled&&track.enabled;});});return enabled;};// check if all video streams are enabled
LocalMedia.prototype.isVideoEnabled=function(){var enabled=true;this.localStreams.forEach(function(stream){stream.getVideoTracks().forEach(function(track){enabled=enabled&&track.enabled;});});return enabled;};LocalMedia.prototype._removeStream=function(stream){var idx=this.localStreams.indexOf(stream);if(idx>-1){this.localStreams.splice(idx,1);this.emit('localStreamStopped',stream);}else{idx=this.localScreens.indexOf(stream);if(idx>-1){this.localScreens.splice(idx,1);this.emit('localScreenStopped',stream);}}};LocalMedia.prototype._setupAudioMonitor=function(stream,harkOptions){this._log('Setup audio');var audio=hark(stream,harkOptions);var self=this;var timeout;audio.on('speaking',function(){self.emit('speaking');});audio.on('stopped_speaking',function(){if(timeout){clearTimeout(timeout);}timeout=setTimeout(function(){self.emit('stoppedSpeaking');},1000);});audio.on('volume_change',function(volume,threshold){self.emit('volumeChange',volume,threshold);});this._audioMonitors.push({audio:audio,stream:stream});};LocalMedia.prototype._stopAudioMonitor=function(stream){var idx=-1;this._audioMonitors.forEach(function(monitors,i){if(monitors.stream===stream){idx=i;}});if(idx>-1){this._audioMonitors[idx].audio.stop();this._audioMonitors.splice(idx,1);}};module.exports=LocalMedia;},{"getscreenmedia":36,"hark":38,"mockconsole":46,"util":73,"wildemitter":75}],45:[function(require,module,exports){(function(global){/**
             * lodash (Custom Build) <https://lodash.com/>
             * Build: `lodash modularize exports="npm" -o ./`
             * Copyright jQuery Foundation and other contributors <https://jquery.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             *//** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
             * Used to match `RegExp`
             * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
             */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=(typeof exports==="undefined"?"undefined":_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==="undefined"?"undefined":_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/**
             * Adds the key-value `pair` to `map`.
             *
             * @private
             * @param {Object} map The map to modify.
             * @param {Array} pair The key-value pair to add.
             * @returns {Object} Returns `map`.
             */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}/**
             * Adds `value` to `set`.
             *
             * @private
             * @param {Object} set The set to modify.
             * @param {*} value The value to add.
             * @returns {Object} Returns `set`.
             */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}/**
             * A specialized version of `_.forEach` for arrays without support for
             * iteratee shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array} Returns `array`.
             */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
             * Appends the elements of `values` to `array`.
             *
             * @private
             * @param {Array} array The array to modify.
             * @param {Array} values The values to append.
             * @returns {Array} Returns `array`.
             */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
             * A specialized version of `_.reduce` for arrays without support for
             * iteratee shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @param {*} [accumulator] The initial value.
             * @param {boolean} [initAccum] Specify using the first element of `array` as
             *  the initial value.
             * @returns {*} Returns the accumulated value.
             */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
             * The base implementation of `_.times` without support for iteratee shorthands
             * or max array length checks.
             *
             * @private
             * @param {number} n The number of times to invoke `iteratee`.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array} Returns the array of results.
             */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
             * Gets the value at `key` of `object`.
             *
             * @private
             * @param {Object} [object] The object to query.
             * @param {string} key The key of the property to get.
             * @returns {*} Returns the property value.
             */function getValue(object,key){return object==null?undefined:object[key];}/**
             * Checks if `value` is a host object in IE < 9.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
             */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
             * Converts `map` to its key-value pairs.
             *
             * @private
             * @param {Object} map The map to convert.
             * @returns {Array} Returns the key-value pairs.
             */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
             * Creates a unary function that invokes `func` with its argument transformed.
             *
             * @private
             * @param {Function} func The function to wrap.
             * @param {Function} transform The argument transform.
             * @returns {Function} Returns the new function.
             */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
             * Converts `set` to an array of its values.
             *
             * @private
             * @param {Object} set The set to convert.
             * @returns {Array} Returns the values.
             */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol=root.Symbol,Uint8Array=root.Uint8Array,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView'),Map=getNative(root,'Map'),Promise=getNative(root,'Promise'),Set=getNative(root,'Set'),WeakMap=getNative(root,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
             * Creates a hash object.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
             * Removes all key-value entries from the hash.
             *
             * @private
             * @name clear
             * @memberOf Hash
             */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
             * Removes `key` and its value from the hash.
             *
             * @private
             * @name delete
             * @memberOf Hash
             * @param {Object} hash The hash to modify.
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
             * Gets the hash value for `key`.
             *
             * @private
             * @name get
             * @memberOf Hash
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
             * Checks if a hash value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf Hash
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
             * Sets the hash `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf Hash
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the hash instance.
             */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
             * Creates an list cache object.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
             * Removes all key-value entries from the list cache.
             *
             * @private
             * @name clear
             * @memberOf ListCache
             */function listCacheClear(){this.__data__=[];}/**
             * Removes `key` and its value from the list cache.
             *
             * @private
             * @name delete
             * @memberOf ListCache
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
             * Gets the list cache value for `key`.
             *
             * @private
             * @name get
             * @memberOf ListCache
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
             * Checks if a list cache value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf ListCache
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
             * Sets the list cache `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf ListCache
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the list cache instance.
             */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
             * Creates a map cache object to store key-value pairs.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
             * Removes all key-value entries from the map.
             *
             * @private
             * @name clear
             * @memberOf MapCache
             */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
             * Removes `key` and its value from the map.
             *
             * @private
             * @name delete
             * @memberOf MapCache
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
             * Gets the map value for `key`.
             *
             * @private
             * @name get
             * @memberOf MapCache
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
             * Checks if a map value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf MapCache
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
             * Sets the map `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf MapCache
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the map cache instance.
             */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
             * Creates a stack cache object to store key-value pairs.
             *
             * @private
             * @constructor
             * @param {Array} [entries] The key-value pairs to cache.
             */function Stack(entries){this.__data__=new ListCache(entries);}/**
             * Removes all key-value entries from the stack.
             *
             * @private
             * @name clear
             * @memberOf Stack
             */function stackClear(){this.__data__=new ListCache();}/**
             * Removes `key` and its value from the stack.
             *
             * @private
             * @name delete
             * @memberOf Stack
             * @param {string} key The key of the value to remove.
             * @returns {boolean} Returns `true` if the entry was removed, else `false`.
             */function stackDelete(key){return this.__data__['delete'](key);}/**
             * Gets the stack value for `key`.
             *
             * @private
             * @name get
             * @memberOf Stack
             * @param {string} key The key of the value to get.
             * @returns {*} Returns the entry value.
             */function stackGet(key){return this.__data__.get(key);}/**
             * Checks if a stack value for `key` exists.
             *
             * @private
             * @name has
             * @memberOf Stack
             * @param {string} key The key of the entry to check.
             * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
             */function stackHas(key){return this.__data__.has(key);}/**
             * Sets the stack `key` to `value`.
             *
             * @private
             * @name set
             * @memberOf Stack
             * @param {string} key The key of the value to set.
             * @param {*} value The value to set.
             * @returns {Object} Returns the stack cache instance.
             */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache){var pairs=cache.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);return this;}cache=this.__data__=new MapCache(pairs);}cache.set(key,value);return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
             * Creates an array of the enumerable property names of the array-like `value`.
             *
             * @private
             * @param {*} value The value to query.
             * @param {boolean} inherited Specify returning inherited property names.
             * @returns {Array} Returns the array of property names.
             */function arrayLikeKeys(value,inherited){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}/**
             * Assigns `value` to `key` of `object` if the existing value is not equivalent
             * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
             * for equality comparisons.
             *
             * @private
             * @param {Object} object The object to modify.
             * @param {string} key The key of the property to assign.
             * @param {*} value The value to assign.
             */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}/**
             * Gets the index at which the `key` is found in `array` of key-value pairs.
             *
             * @private
             * @param {Array} array The array to inspect.
             * @param {*} key The key to search for.
             * @returns {number} Returns the index of the matched value, else `-1`.
             */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
             * The base implementation of `_.assign` without support for multiple sources
             * or `customizer` functions.
             *
             * @private
             * @param {Object} object The destination object.
             * @param {Object} source The source object.
             * @returns {Object} Returns `object`.
             */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
             * The base implementation of `_.clone` and `_.cloneDeep` which tracks
             * traversed objects.
             *
             * @private
             * @param {*} value The value to clone.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @param {boolean} [isFull] Specify a clone including symbols.
             * @param {Function} [customizer] The function to customize cloning.
             * @param {string} [key] The key of `value`.
             * @param {Object} [object] The parent object of `value`.
             * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
             * @returns {*} Returns the cloned value.
             */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){if(isHostObject(value)){return object?value:{};}result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}/**
             * The base implementation of `_.create` without support for assigning
             * properties to the created object.
             *
             * @private
             * @param {Object} prototype The object to inherit from.
             * @returns {Object} Returns the new object.
             */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}/**
             * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
             * `keysFunc` and `symbolsFunc` to get the enumerable property names and
             * symbols of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {Function} keysFunc The function to get the keys of `object`.
             * @param {Function} symbolsFunc The function to get the symbols of `object`.
             * @returns {Array} Returns the array of property names and symbols.
             */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
             * The base implementation of `getTag`.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */function baseGetTag(value){return objectToString.call(value);}/**
             * The base implementation of `_.isNative` without bad shim checks.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a native function,
             *  else `false`.
             */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
             * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names.
             */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
             * Creates a clone of  `buffer`.
             *
             * @private
             * @param {Buffer} buffer The buffer to clone.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @returns {Buffer} Returns the cloned buffer.
             */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}/**
             * Creates a clone of `arrayBuffer`.
             *
             * @private
             * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
             * @returns {ArrayBuffer} Returns the cloned array buffer.
             */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
             * Creates a clone of `dataView`.
             *
             * @private
             * @param {Object} dataView The data view to clone.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @returns {Object} Returns the cloned data view.
             */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
             * Creates a clone of `map`.
             *
             * @private
             * @param {Object} map The map to clone.
             * @param {Function} cloneFunc The function to clone values.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @returns {Object} Returns the cloned map.
             */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
             * Creates a clone of `regexp`.
             *
             * @private
             * @param {Object} regexp The regexp to clone.
             * @returns {Object} Returns the cloned regexp.
             */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
             * Creates a clone of `set`.
             *
             * @private
             * @param {Object} set The set to clone.
             * @param {Function} cloneFunc The function to clone values.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @returns {Object} Returns the cloned set.
             */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
             * Creates a clone of the `symbol` object.
             *
             * @private
             * @param {Object} symbol The symbol object to clone.
             * @returns {Object} Returns the cloned symbol object.
             */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
             * Creates a clone of `typedArray`.
             *
             * @private
             * @param {Object} typedArray The typed array to clone.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @returns {Object} Returns the cloned typed array.
             */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
             * Copies the values of `source` to `array`.
             *
             * @private
             * @param {Array} source The array to copy values from.
             * @param {Array} [array=[]] The array to copy values to.
             * @returns {Array} Returns `array`.
             */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
             * Copies properties of `source` to `object`.
             *
             * @private
             * @param {Object} source The object to copy properties from.
             * @param {Array} props The property identifiers to copy.
             * @param {Object} [object={}] The object to copy properties to.
             * @param {Function} [customizer] The function to customize copied values.
             * @returns {Object} Returns `object`.
             */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;assignValue(object,key,newValue===undefined?source[key]:newValue);}return object;}/**
             * Copies own symbol properties of `source` to `object`.
             *
             * @private
             * @param {Object} source The object to copy symbols from.
             * @param {Object} [object={}] The object to copy symbols to.
             * @returns {Object} Returns `object`.
             */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
             * Creates an array of own enumerable property names and symbols of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names and symbols.
             */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
             * Gets the data for `map`.
             *
             * @private
             * @param {Object} map The map to query.
             * @param {string} key The reference key.
             * @returns {*} Returns the map data.
             */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
             * Gets the native function at `key` of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @param {string} key The key of the method to get.
             * @returns {*} Returns the function if it's native, else `undefined`.
             */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
             * Creates an array of the own enumerable symbol properties of `object`.
             *
             * @private
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of symbols.
             */var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;/**
             * Gets the `toStringTag` of `value`.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
             * Initializes an array clone.
             *
             * @private
             * @param {Array} array The array to clone.
             * @returns {Array} Returns the initialized clone.
             */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
             * Initializes an object clone.
             *
             * @private
             * @param {Object} object The object to clone.
             * @returns {Object} Returns the initialized clone.
             */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
             * Initializes an object clone based on its `toStringTag`.
             *
             * **Note:** This function only supports cloning values with tags of
             * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
             *
             * @private
             * @param {Object} object The object to clone.
             * @param {string} tag The `toStringTag` of the object to clone.
             * @param {Function} cloneFunc The function to clone values.
             * @param {boolean} [isDeep] Specify a deep clone.
             * @returns {Object} Returns the initialized clone.
             */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
             * Checks if `value` is a valid array-like index.
             *
             * @private
             * @param {*} value The value to check.
             * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
             * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
             */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
             * Checks if `value` is suitable for use as unique object key.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
             */function isKeyable(value){var type=typeof value==="undefined"?"undefined":_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
             * Checks if `func` has its source masked.
             *
             * @private
             * @param {Function} func The function to check.
             * @returns {boolean} Returns `true` if `func` is masked, else `false`.
             */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
             * Checks if `value` is likely a prototype object.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
             */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
             * Converts `func` to its source code.
             *
             * @private
             * @param {Function} func The function to process.
             * @returns {string} Returns the source code.
             */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
             * This method is like `_.clone` except that it recursively clones `value`.
             *
             * @static
             * @memberOf _
             * @since 1.0.0
             * @category Lang
             * @param {*} value The value to recursively clone.
             * @returns {*} Returns the deep cloned value.
             * @see _.clone
             * @example
             *
             * var objects = [{ 'a': 1 }, { 'b': 2 }];
             *
             * var deep = _.cloneDeep(objects);
             * console.log(deep[0] === objects[0]);
             * // => false
             */function cloneDeep(value){return baseClone(value,true,true);}/**
             * Performs a
             * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
             * comparison between two values to determine if they are equivalent.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to compare.
             * @param {*} other The other value to compare.
             * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
             * @example
             *
             * var object = { 'a': 1 };
             * var other = { 'a': 1 };
             *
             * _.eq(object, object);
             * // => true
             *
             * _.eq(object, other);
             * // => false
             *
             * _.eq('a', 'a');
             * // => true
             *
             * _.eq('a', Object('a'));
             * // => false
             *
             * _.eq(NaN, NaN);
             * // => true
             */function eq(value,other){return value===other||value!==value&&other!==other;}/**
             * Checks if `value` is likely an `arguments` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an `arguments` object,
             *  else `false`.
             * @example
             *
             * _.isArguments(function() { return arguments; }());
             * // => true
             *
             * _.isArguments([1, 2, 3]);
             * // => false
             */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
             * Checks if `value` is classified as an `Array` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an array, else `false`.
             * @example
             *
             * _.isArray([1, 2, 3]);
             * // => true
             *
             * _.isArray(document.body.children);
             * // => false
             *
             * _.isArray('abc');
             * // => false
             *
             * _.isArray(_.noop);
             * // => false
             */var isArray=Array.isArray;/**
             * Checks if `value` is array-like. A value is considered array-like if it's
             * not a function and has a `value.length` that's an integer greater than or
             * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
             * @example
             *
             * _.isArrayLike([1, 2, 3]);
             * // => true
             *
             * _.isArrayLike(document.body.children);
             * // => true
             *
             * _.isArrayLike('abc');
             * // => true
             *
             * _.isArrayLike(_.noop);
             * // => false
             */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
             * This method is like `_.isArrayLike` except that it also checks if `value`
             * is an object.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an array-like object,
             *  else `false`.
             * @example
             *
             * _.isArrayLikeObject([1, 2, 3]);
             * // => true
             *
             * _.isArrayLikeObject(document.body.children);
             * // => true
             *
             * _.isArrayLikeObject('abc');
             * // => false
             *
             * _.isArrayLikeObject(_.noop);
             * // => false
             */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
             * Checks if `value` is a buffer.
             *
             * @static
             * @memberOf _
             * @since 4.3.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
             * @example
             *
             * _.isBuffer(new Buffer(2));
             * // => true
             *
             * _.isBuffer(new Uint8Array(2));
             * // => false
             */var isBuffer=nativeIsBuffer||stubFalse;/**
             * Checks if `value` is classified as a `Function` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a function, else `false`.
             * @example
             *
             * _.isFunction(_);
             * // => true
             *
             * _.isFunction(/abc/);
             * // => false
             */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
             * Checks if `value` is a valid array-like length.
             *
             * **Note:** This method is loosely based on
             * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
             * @example
             *
             * _.isLength(3);
             * // => true
             *
             * _.isLength(Number.MIN_VALUE);
             * // => false
             *
             * _.isLength(Infinity);
             * // => false
             *
             * _.isLength('3');
             * // => false
             */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
             * Checks if `value` is the
             * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
             * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an object, else `false`.
             * @example
             *
             * _.isObject({});
             * // => true
             *
             * _.isObject([1, 2, 3]);
             * // => true
             *
             * _.isObject(_.noop);
             * // => true
             *
             * _.isObject(null);
             * // => false
             */function isObject(value){var type=typeof value==="undefined"?"undefined":_typeof(value);return!!value&&(type=='object'||type=='function');}/**
             * Checks if `value` is object-like. A value is object-like if it's not `null`
             * and has a `typeof` result of "object".
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
             * @example
             *
             * _.isObjectLike({});
             * // => true
             *
             * _.isObjectLike([1, 2, 3]);
             * // => true
             *
             * _.isObjectLike(_.noop);
             * // => false
             *
             * _.isObjectLike(null);
             * // => false
             */function isObjectLike(value){return!!value&&(typeof value==="undefined"?"undefined":_typeof(value))=='object';}/**
             * Creates an array of the own enumerable property names of `object`.
             *
             * **Note:** Non-object values are coerced to objects. See the
             * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
             * for more details.
             *
             * @static
             * @since 0.1.0
             * @memberOf _
             * @category Object
             * @param {Object} object The object to query.
             * @returns {Array} Returns the array of property names.
             * @example
             *
             * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
             *
             * Foo.prototype.c = 3;
             *
             * _.keys(new Foo);
             * // => ['a', 'b'] (iteration order is not guaranteed)
             *
             * _.keys('hi');
             * // => ['0', '1']
             */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
             * This method returns a new empty array.
             *
             * @static
             * @memberOf _
             * @since 4.13.0
             * @category Util
             * @returns {Array} Returns the new empty array.
             * @example
             *
             * var arrays = _.times(2, _.stubArray);
             *
             * console.log(arrays);
             * // => [[], []]
             *
             * console.log(arrays[0] === arrays[1]);
             * // => false
             */function stubArray(){return[];}/**
             * This method returns `false`.
             *
             * @static
             * @memberOf _
             * @since 4.13.0
             * @category Util
             * @returns {boolean} Returns `false`.
             * @example
             *
             * _.times(2, _.stubFalse);
             * // => [false, false]
             */function stubFalse(){return false;}module.exports=cloneDeep;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],46:[function(require,module,exports){var methods="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(",");var l=methods.length;var fn=function fn(){};var mockconsole={};while(l--){mockconsole[methods[l]]=fn;}module.exports=mockconsole;},{}],47:[function(require,module,exports){/**
         * Helpers.
         */var s=1000;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;/**
         * Parse or format the given `val`.
         *
         * Options:
         *
         *  - `long` verbose formatting [false]
         *
         * @param {String|Number} val
         * @param {Object} options
         * @return {String|Number}
         * @api public
         */module.exports=function(val,options){options=options||{};if('string'==typeof val)return parse(val);return options.long?long(val):short(val);};/**
         * Parse the given `str` and return milliseconds.
         *
         * @param {String} str
         * @return {Number}
         * @api private
         */function parse(str){var match=/^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||'ms').toLowerCase();switch(type){case'years':case'year':case'y':return n*y;case'days':case'day':case'd':return n*d;case'hours':case'hour':case'h':return n*h;case'minutes':case'minute':case'm':return n*m;case'seconds':case'second':case's':return n*s;case'ms':return n;}}/**
         * Short format for `ms`.
         *
         * @param {Number} ms
         * @return {String}
         * @api private
         */function short(ms){if(ms>=d)return Math.round(ms/d)+'d';if(ms>=h)return Math.round(ms/h)+'h';if(ms>=m)return Math.round(ms/m)+'m';if(ms>=s)return Math.round(ms/s)+'s';return ms+'ms';}/**
         * Long format for `ms`.
         *
         * @param {Number} ms
         * @return {String}
         * @api private
         */function long(ms){return plural(ms,d,'day')||plural(ms,h,'hour')||plural(ms,m,'minute')||plural(ms,s,'second')||ms+' ms';}/**
         * Pluralization helper.
         */function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+' '+name;return Math.ceil(ms/n)+' '+name+'s';}},{}],48:[function(require,module,exports){/**
         * HOP ref.
         */var has=Object.prototype.hasOwnProperty;/**
         * Return own keys in `obj`.
         *
         * @param {Object} obj
         * @return {Array}
         * @api public
         */exports.keys=Object.keys||function(obj){var keys=[];for(var key in obj){if(has.call(obj,key)){keys.push(key);}}return keys;};/**
         * Return own values in `obj`.
         *
         * @param {Object} obj
         * @return {Array}
         * @api public
         */exports.values=function(obj){var vals=[];for(var key in obj){if(has.call(obj,key)){vals.push(obj[key]);}}return vals;};/**
         * Merge `b` into `a`.
         *
         * @param {Object} a
         * @param {Object} b
         * @return {Object} a
         * @api public
         */exports.merge=function(a,b){for(var key in b){if(has.call(b,key)){a[key]=b[key];}}return a;};/**
         * Return length of `obj`.
         *
         * @param {Object} obj
         * @return {Number}
         * @api public
         */exports.length=function(obj){return exports.keys(obj).length;};/**
         * Check if `obj` is empty.
         *
         * @param {Object} obj
         * @return {Boolean}
         * @api public
         */exports.isEmpty=function(obj){return 0==exports.length(obj);};},{}],49:[function(require,module,exports){(function(global){/**
             * JSON parse.
             *
             * @see Based on jQuery#parseJSON (MIT) and JSON2
             * @api private
             */var rvalidchars=/^[\],:{}\s]*$/;var rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g;var rtrimLeft=/^\s+/;var rtrimRight=/\s+$/;module.exports=function parsejson(data){if('string'!=typeof data||!data){return null;}data=data.replace(rtrimLeft,'').replace(rtrimRight,'');// Attempt to parse using the native JSON parser first
if(global.JSON&&JSON.parse){return JSON.parse(data);}if(rvalidchars.test(data.replace(rvalidescape,'@').replace(rvalidtokens,']').replace(rvalidbraces,''))){return new Function('return '+data)();}};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],50:[function(require,module,exports){/**
         * Compiles a querystring
         * Returns string representation of the object
         *
         * @param {Object}
         * @api private
         */exports.encode=function(obj){var str='';for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+='&';str+=encodeURIComponent(i)+'='+encodeURIComponent(obj[i]);}}return str;};/**
         * Parses a simple querystring into an object
         *
         * @param {String} qs
         * @api private
         */exports.decode=function(qs){var qry={};var pairs=qs.split('&');for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split('=');qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]);}return qry;};},{}],51:[function(require,module,exports){/**
         * Parses an URI
         *
         * @author Steven Levithan <stevenlevithan.com> (MIT license)
         * @api private
         */var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'];module.exports=function parseuri(str){var m=re.exec(str||''),uri={},i=14;while(i--){uri[parts[i]]=m[i]||'';}return uri;};},{}],52:[function(require,module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],53:[function(require,module,exports){var util=require('util');var SJJ=require('sdp-jingle-json');var WildEmitter=require('wildemitter');var cloneDeep=require('lodash.clonedeep');function PeerConnection(config,constraints,params){var self=this;var item;WildEmitter.call(this);config=config||{};config.iceServers=config.iceServers||[];// make sure this only gets enabled in Google Chrome
// EXPERIMENTAL FLAG, might get removed without notice
this.enableChromeNativeSimulcast=false;if(constraints&&constraints.optional&&window.chrome&&navigator.appVersion.match(/Chromium\//)===null){constraints.optional.forEach(function(constraint){if(constraint.enableChromeNativeSimulcast){self.enableChromeNativeSimulcast=true;}});}// EXPERIMENTAL FLAG, might get removed without notice
this.enableMultiStreamHacks=false;if(constraints&&constraints.optional&&window.chrome){constraints.optional.forEach(function(constraint){if(constraint.enableMultiStreamHacks){self.enableMultiStreamHacks=true;}});}// EXPERIMENTAL FLAG, might get removed without notice
this.restrictBandwidth=0;if(constraints&&constraints.optional){constraints.optional.forEach(function(constraint){if(constraint.andyetRestrictBandwidth){self.restrictBandwidth=constraint.andyetRestrictBandwidth;}});}// EXPERIMENTAL FLAG, might get removed without notice
// bundle up ice candidates, only works for jingle mode
// number > 0 is the delay to wait for additional candidates
// ~20ms seems good
this.batchIceCandidates=0;if(constraints&&constraints.optional){constraints.optional.forEach(function(constraint){if(constraint.andyetBatchIce){self.batchIceCandidates=constraint.andyetBatchIce;}});}this.batchedIceCandidates=[];// EXPERIMENTAL FLAG, might get removed without notice
// this attemps to strip out candidates with an already known foundation
// and type -- i.e. those which are gathered via the same TURN server
// but different transports (TURN udp, tcp and tls respectively)
if(constraints&&constraints.optional&&window.chrome){constraints.optional.forEach(function(constraint){if(constraint.andyetFasterICE){self.eliminateDuplicateCandidates=constraint.andyetFasterICE;}});}// EXPERIMENTAL FLAG, might get removed without notice
// when using a server such as the jitsi videobridge we don't need to signal
// our candidates
if(constraints&&constraints.optional){constraints.optional.forEach(function(constraint){if(constraint.andyetDontSignalCandidates){self.dontSignalCandidates=constraint.andyetDontSignalCandidates;}});}// EXPERIMENTAL FLAG, might get removed without notice
this.assumeSetLocalSuccess=false;if(constraints&&constraints.optional){constraints.optional.forEach(function(constraint){if(constraint.andyetAssumeSetLocalSuccess){self.assumeSetLocalSuccess=constraint.andyetAssumeSetLocalSuccess;}});}// EXPERIMENTAL FLAG, might get removed without notice
// working around https://bugzilla.mozilla.org/show_bug.cgi?id=1087551
// pass in a timeout for this
if(window.navigator.mozGetUserMedia){if(constraints&&constraints.optional){this.wtFirefox=0;constraints.optional.forEach(function(constraint){if(constraint.andyetFirefoxMakesMeSad){self.wtFirefox=constraint.andyetFirefoxMakesMeSad;if(self.wtFirefox>0){self.firefoxcandidatebuffer=[];}}});}}this.pc=new RTCPeerConnection(config,constraints);///MLUpdate///
this.vidEncoder=params.vidEncoder;this.vidBitrate=params.vidBitrate;this.audEncode=params.audEncoder;this.audBitrate=params.audBitrate;///MLUpdate///
if(typeof this.pc.getLocalStreams==='function'){this.getLocalStreams=this.pc.getLocalStreams.bind(this.pc);}else{this.getLocalStreams=function(){return[];};}this.getRemoteStreams=this.pc.getRemoteStreams.bind(this.pc);this.addStream=this.pc.addStream.bind(this.pc);this.removeStream=function(stream){if(typeof self.pc.removeStream==='function'){self.pc.removeStream.apply(self.pc,arguments);}else if(typeof self.pc.removeTrack==='function'){stream.getTracks().forEach(function(track){self.pc.removeTrack(track);});}};if(typeof this.pc.removeTrack==='function'){this.removeTrack=this.pc.removeTrack.bind(this.pc);}// proxy some events directly
this.pc.onremovestream=this.emit.bind(this,'removeStream');this.pc.onremovetrack=this.emit.bind(this,'removeTrack');this.pc.onaddstream=this.emit.bind(this,'addStream');this.pc.onnegotiationneeded=this.emit.bind(this,'negotiationNeeded');this.pc.oniceconnectionstatechange=this.emit.bind(this,'iceConnectionStateChange');this.pc.onsignalingstatechange=this.emit.bind(this,'signalingStateChange');// handle ice candidate and data channel events
this.pc.onicecandidate=this._onIce.bind(this);this.pc.ondatachannel=this._onDataChannel.bind(this);this.localDescription={contents:[]};this.remoteDescription={contents:[]};this.config={debug:false,sid:'',isInitiator:true,sdpSessionID:Date.now(),useJingle:false};this.iceCredentials={local:{},remote:{}};// apply our config
for(item in config){this.config[item]=config[item];}if(this.config.debug){this.on('*',function(){var logger=config.logger||console;logger.log('PeerConnection event:',arguments);});}this.hadLocalStunCandidate=false;this.hadRemoteStunCandidate=false;this.hadLocalRelayCandidate=false;this.hadRemoteRelayCandidate=false;this.hadLocalIPv6Candidate=false;this.hadRemoteIPv6Candidate=false;// keeping references for all our data channels
// so they dont get garbage collected
// can be removed once the following bugs have been fixed
// https://crbug.com/405545
// https://bugzilla.mozilla.org/show_bug.cgi?id=964092
// to be filed for opera
this._remoteDataChannels=[];this._localDataChannels=[];this._candidateBuffer=[];}util.inherits(PeerConnection,WildEmitter);Object.defineProperty(PeerConnection.prototype,'signalingState',{get:function get(){return this.pc.signalingState;}});Object.defineProperty(PeerConnection.prototype,'iceConnectionState',{get:function get(){return this.pc.iceConnectionState;}});PeerConnection.prototype._role=function(){return this.isInitiator?'initiator':'responder';};// Add a stream to the peer connection object
PeerConnection.prototype.addStream=function(stream){this.localStream=stream;this.pc.addStream(stream);};// helper function to check if a remote candidate is a stun/relay
// candidate or an ipv6 candidate
PeerConnection.prototype._checkLocalCandidate=function(candidate){var cand=SJJ.toCandidateJSON(candidate);if(cand.type=='srflx'){this.hadLocalStunCandidate=true;}else if(cand.type=='relay'){this.hadLocalRelayCandidate=true;}if(cand.ip.indexOf(':')!=-1){this.hadLocalIPv6Candidate=true;}};// helper function to check if a remote candidate is a stun/relay
// candidate or an ipv6 candidate
PeerConnection.prototype._checkRemoteCandidate=function(candidate){var cand=SJJ.toCandidateJSON(candidate);if(cand.type=='srflx'){this.hadRemoteStunCandidate=true;}else if(cand.type=='relay'){this.hadRemoteRelayCandidate=true;}if(cand.ip.indexOf(':')!=-1){this.hadRemoteIPv6Candidate=true;}};// Init and add ice candidate object with correct constructor
PeerConnection.prototype.processIce=function(update,cb){cb=cb||function(){};var self=this;// ignore any added ice candidates to avoid errors. why does the
// spec not do this?
if(this.pc.signalingState==='closed')return cb();if(update.contents||update.jingle&&update.jingle.contents){var contentNames=this.remoteDescription.contents.map(function(c){return c.name;});var contents=update.contents||update.jingle.contents;contents.forEach(function(content){var transport=content.transport||{};var candidates=transport.candidates||[];var mline=contentNames.indexOf(content.name);var mid=content.name;var remoteContent=self.remoteDescription.contents.find(function(c){return c.name===content.name;});// process candidates as a callback, in case we need to
// update ufrag and pwd with offer/answer
var processCandidates=function processCandidates(){candidates.forEach(function(candidate){var iceCandidate=SJJ.toCandidateSDP(candidate);self.pc.addIceCandidate(new RTCIceCandidate({candidate:iceCandidate,sdpMLineIndex:mline,sdpMid:mid}),function(){// well, this success callback is pretty meaningless
},function(err){self.emit('error',err);});self._checkRemoteCandidate(iceCandidate);});cb();};if(self.iceCredentials.remote[content.name]&&transport.ufrag&&self.iceCredentials.remote[content.name].ufrag!==transport.ufrag){if(remoteContent){remoteContent.transport.ufrag=transport.ufrag;remoteContent.transport.pwd=transport.pwd;var offer={type:'offer',jingle:self.remoteDescription};offer.sdp=SJJ.toSessionSDP(offer.jingle,{sid:self.config.sdpSessionID,role:self._role(),direction:'incoming'});self.pc.setRemoteDescription(new RTCSessionDescription(offer),function(){processCandidates();},function(err){self.emit('error',err);});}else{self.emit('error','ice restart failed to find matching content');}}else{processCandidates();}});}else{// working around https://code.google.com/p/webrtc/issues/detail?id=3669
if(update.candidate&&update.candidate.candidate.indexOf('a=')!==0){update.candidate.candidate='a='+update.candidate.candidate;}if(this.wtFirefox&&this.firefoxcandidatebuffer!==null){// we cant add this yet due to https://bugzilla.mozilla.org/show_bug.cgi?id=1087551
if(this.pc.localDescription&&this.pc.localDescription.type==='offer'){this.firefoxcandidatebuffer.push(update.candidate);return cb();}}self.pc.addIceCandidate(new RTCIceCandidate(update.candidate),function(){},function(err){self.emit('error',err);});self._checkRemoteCandidate(update.candidate.candidate);cb();}};// Generate and emit an offer with the given constraints
PeerConnection.prototype.offer=function(constraints,cb){var self=this;var hasConstraints=arguments.length===2;var mediaConstraints=hasConstraints&&constraints?constraints:{offerToReceiveAudio:1,offerToReceiveVideo:1};cb=hasConstraints?cb:constraints;cb=cb||function(){};if(this.pc.signalingState==='closed')return cb('Already closed');///MLUpdate
//RTCOfferOptions doesn'y work in Safari. Using transceivers instead
var ua=navigator.userAgent.toLowerCase();if(ua.indexOf('safari')!=-1){if(ua.indexOf('chrome')>-1){}else{this.pc.addTransceiver('audio');this.pc.addTransceiver('video');}}///MLUpdate
// Actually generate the offer
this.pc.createOffer(function(offer){// does not work for jingle, but jingle.js doesn't need
// this hack...
var expandedOffer={type:'offer',sdp:offer.sdp};if(self.assumeSetLocalSuccess){self.emit('offer',expandedOffer);cb(null,expandedOffer);}self._candidateBuffer=[];self.pc.setLocalDescription(offer,function(){var jingle;if(self.config.useJingle){jingle=SJJ.toSessionJSON(offer.sdp,{role:self._role(),direction:'outgoing'});jingle.sid=self.config.sid;self.localDescription=jingle;// Save ICE credentials
jingle.contents.forEach(function(content){var transport=content.transport||{};if(transport.ufrag){self.iceCredentials.local[content.name]={ufrag:transport.ufrag,pwd:transport.pwd};}});expandedOffer.jingle=jingle;}expandedOffer.sdp.split('\r\n').forEach(function(line){if(line.indexOf('a=candidate:')===0){self._checkLocalCandidate(line);}});if(!self.assumeSetLocalSuccess){//Trickle encoders
if(self.vidEncoder&&self.vidEncoder.toUpperCase()!='VP8'){//Find codec id
var strCodecId='';var nFound=-1;var nFound=expandedOffer.sdp.indexOf(self.vidEncoder.toUpperCase());if(nFound==-1)nFound=expandedOffer.sdp.indexOf(self.vidEncoder.toLowerCase());if(nFound!=-1){var strCodecId=expandedOffer.sdp.substr(nFound-10,10);nFound=strCodecId.indexOf(':');if(nFound!=-1){strCodecId=strCodecId.substr(nFound+1,strCodecId.length-nFound);strCodecId=strCodecId.replace(' ','');}}if(strCodecId){//Find codecs string
var nFound=expandedOffer.sdp.indexOf('m=video');if(nFound!=-1){var strBegin=expandedOffer.sdp.substr(0,nFound);var strSDP=expandedOffer.sdp.substr(nFound,expandedOffer.sdp.length-nFound);nFound=strSDP.indexOf('\r\n');var strEnd=strSDP.substr(nFound,strSDP.length-nFound);strSDP=strSDP.substr(0,nFound);var strSAVPF='SAVPF';nFound=strSDP.indexOf(strSAVPF);if(nFound==-1){strSAVPF=strSAVPF.toLowerCase();nFound=strSDP.indexOf(strSAVPF);}if(nFound!=-1){//Modify codecs string
strSDP=strSDP.replace(strCodecId+' ','');strSDP=strSDP.replace('SAVPF','SAVPF '+strCodecId);expandedOffer.sdp=strBegin+strSDP+strEnd;}}}}if(self.audEncoder&&self.audEncoder.toUpperCase()!='OPUS'){//Find codec id
var strCodecId='';var nFound=-1;var nFound=expandedOffer.sdp.indexOf(self.audEncoder.toUpperCase());if(nFound==-1)nFound=expandedOffer.sdp.indexOf(self.audEncoder.toLowerCase());if(nFound!=-1){var strCodecId=expandedOffer.sdp.substr(nFound-10,10);nFound=strCodecId.indexOf(':');if(nFound!=-1){strCodecId=strCodecId.substr(nFound+1,strCodecId.length-nFound);strCodecId=strCodecId.replace(' ','');}}if(strCodecId){//Find codecs string
var nFound=expandedOffer.sdp.indexOf('m=audio');if(nFound!=-1){var strBegin=expandedOffer.sdp.substr(0,nFound);var strSDP=expandedOffer.sdp.substr(nFound,expandedOffer.sdp.length-nFound);nFound=strSDP.indexOf('\r\n');var strEnd=strSDP.substr(nFound,strSDP.length-nFound);strSDP=strSDP.substr(0,nFound);var strSAVPF='SAVPF';nFound=strSDP.indexOf(strSAVPF);if(nFound==-1){strSAVPF=strSAVPF.toLowerCase();nFound=strSDP.indexOf(strSAVPF);}if(nFound!=-1){//Modify codecs string
strSDP=strSDP.replace(strCodecId+' ','');strSDP=strSDP.replace('SAVPF','SAVPF '+strCodecId);expandedOffer.sdp=strBegin+strSDP+strEnd;}}}}if(self.audBitrate&&self.audBitrate.toLowerCase()!='default'){var audBitrate=parseInt(self.audBitrate);if(audBitrate>0){if(self.audBitrate.includes("K")||self.audBitrate.includes("k"))audBitrate=audBitrate*1000;if(self.audBitrate.includes("M")||self.audBitrate.includes("M"))audBitrate=audBitrate*1000000;expandedOffer.sdp=expandedOffer.sdp.replace(/a=fmtp:111 minptime=10;useinbandfec=1\r\n/g,'a=fmtp:111 minptime=10;useinbandfec=1;maxplaybackrate=48000;sprop-maxcapturerate=48000;maxaveragebitrate='+audBitrate+';sprop-stereo=1;stereo=1\r\n');}}if(self.vidBitrate&&self.vidBitrate.toLowerCase()!='default'){var vidBitrate=parseInt(self.vidBitrate);if(vidBitrate>0){if(self.vidBitrate.includes("K")||self.vidBitrate.includes("k"))vidBitrate=vidBitrate*1000;if(self.vidBitrate.includes("M")||self.vidBitrate.includes("M"))vidBitrate=vidBitrate*1000000;expandedOffer.sdp=expandedOffer.sdp.replace(/a=mid:video\r\n/g,'a=mid:video\r\nb=AS:'+vidBitrate/1000+'\r\n');}}self.emit('offer',expandedOffer);cb(null,expandedOffer);}},function(err){self.emit('error',err);cb(err);});},function(err){self.emit('error',err);cb(err);},mediaConstraints);};// Process an incoming offer so that ICE may proceed before deciding
// to answer the request.
PeerConnection.prototype.handleOffer=function(offer,cb){cb=cb||function(){};var self=this;offer.type='offer';if(offer.jingle){if(this.enableChromeNativeSimulcast){offer.jingle.contents.forEach(function(content){if(content.name==='video'){content.application.googConferenceFlag=true;}});}if(this.enableMultiStreamHacks){// add a mixed video stream as first stream
offer.jingle.contents.forEach(function(content){if(content.name==='video'){var sources=content.application.sources||[];if(sources.length===0||sources[0].ssrc!=="3735928559"){sources.unshift({ssrc:"3735928559",// 0xdeadbeef
parameters:[{key:"cname",value:"deadbeef"},{key:"msid",value:"mixyourfecintothis please"}]});content.application.sources=sources;}}});}if(self.restrictBandwidth>0){if(offer.jingle.contents.length>=2&&offer.jingle.contents[1].name==='video'){var content=offer.jingle.contents[1];var hasBw=content.application&&content.application.bandwidth&&content.application.bandwidth.bandwidth;if(!hasBw){offer.jingle.contents[1].application.bandwidth={type:'AS',bandwidth:self.restrictBandwidth.toString()};offer.sdp=SJJ.toSessionSDP(offer.jingle,{sid:self.config.sdpSessionID,role:self._role(),direction:'outgoing'});}}}// Save ICE credentials
offer.jingle.contents.forEach(function(content){var transport=content.transport||{};if(transport.ufrag){self.iceCredentials.remote[content.name]={ufrag:transport.ufrag,pwd:transport.pwd};}});offer.sdp=SJJ.toSessionSDP(offer.jingle,{sid:self.config.sdpSessionID,role:self._role(),direction:'incoming'});self.remoteDescription=offer.jingle;}offer.sdp.split('\r\n').forEach(function(line){if(line.indexOf('a=candidate:')===0){self._checkRemoteCandidate(line);}});self.pc.setRemoteDescription(new RTCSessionDescription(offer),function(){cb();},cb);};// Answer an offer with audio only
PeerConnection.prototype.answerAudioOnly=function(cb){var mediaConstraints={mandatory:{OfferToReceiveAudio:true,OfferToReceiveVideo:false}};this._answer(mediaConstraints,cb);};// Answer an offer without offering to recieve
PeerConnection.prototype.answerBroadcastOnly=function(cb){var mediaConstraints={mandatory:{OfferToReceiveAudio:false,OfferToReceiveVideo:false}};this._answer(mediaConstraints,cb);};// Answer an offer with given constraints default is audio/video
PeerConnection.prototype.answer=function(constraints,cb){var hasConstraints=arguments.length===2;var callback=hasConstraints?cb:constraints;var mediaConstraints=hasConstraints&&constraints?constraints:{mandatory:{OfferToReceiveAudio:true,OfferToReceiveVideo:true}};this._answer(mediaConstraints,callback);};// Process an answer
PeerConnection.prototype.handleAnswer=function(answer,cb){cb=cb||function(){};var self=this;if(answer.jingle){answer.sdp=SJJ.toSessionSDP(answer.jingle,{sid:self.config.sdpSessionID,role:self._role(),direction:'incoming'});self.remoteDescription=answer.jingle;// Save ICE credentials
answer.jingle.contents.forEach(function(content){var transport=content.transport||{};if(transport.ufrag){self.iceCredentials.remote[content.name]={ufrag:transport.ufrag,pwd:transport.pwd};}});}answer.sdp.split('\r\n').forEach(function(line){if(line.indexOf('a=candidate:')===0){self._checkRemoteCandidate(line);}});self.pc.setRemoteDescription(new RTCSessionDescription(answer),function(){if(self.wtFirefox){window.setTimeout(function(){self.firefoxcandidatebuffer.forEach(function(candidate){// add candidates later
self.pc.addIceCandidate(new RTCIceCandidate(candidate),function(){},function(err){self.emit('error',err);});self._checkRemoteCandidate(candidate.candidate);});self.firefoxcandidatebuffer=null;},self.wtFirefox);}cb(null);},cb);};// Close the peer connection
PeerConnection.prototype.close=function(){if(this._localDataChannels&&this._localDataChannels.length>0){for(var z=0;z<this._localDataChannels.length;z++){this._localDataChannels[z].close();}}if(this._remoteDataChannels&&this._remoteDataChannels.length>0){for(var z=0;z<this._remoteDataChannels.length;z++){this._remoteDataChannels[z].close();}}// proxy some events directly
this.pc.onremovestream=null;this.pc.onremovetrack=null;this.pc.onaddstream=null;this.pc.onnegotiationneeded=null;this.pc.oniceconnectionstatechange=null;this.pc.onsignalingstatechange=null;// handle ice candidate and data channel events
this.pc.onicecandidate=null;this.pc.ondatachannel=null;this.pc.close();this._localDataChannels=[];this._remoteDataChannels=[];this.emit('close');};// Internal code sharing for various types of answer methods
PeerConnection.prototype._answer=function(constraints,cb){cb=cb||function(){};var self=this;if(!this.pc.remoteDescription){// the old API is used, call handleOffer
throw new Error('remoteDescription not set');}if(this.pc.signalingState==='closed')return cb('Already closed');self.pc.createAnswer(function(answer){var sim=[];if(self.enableChromeNativeSimulcast){// native simulcast part 1: add another SSRC
answer.jingle=SJJ.toSessionJSON(answer.sdp,{role:self._role(),direction:'outgoing'});if(answer.jingle.contents.length>=2&&answer.jingle.contents[1].name==='video'){var groups=answer.jingle.contents[1].application.sourceGroups||[];var hasSim=false;groups.forEach(function(group){if(group.semantics=='SIM')hasSim=true;});if(!hasSim&&answer.jingle.contents[1].application.sources.length){var newssrc=JSON.parse(JSON.stringify(answer.jingle.contents[1].application.sources[0]));newssrc.ssrc=''+Math.floor(Math.random()*0xffffffff);// FIXME: look for conflicts
answer.jingle.contents[1].application.sources.push(newssrc);sim.push(answer.jingle.contents[1].application.sources[0].ssrc);sim.push(newssrc.ssrc);groups.push({semantics:'SIM',sources:sim});// also create an RTX one for the SIM one
var rtxssrc=JSON.parse(JSON.stringify(newssrc));rtxssrc.ssrc=''+Math.floor(Math.random()*0xffffffff);// FIXME: look for conflicts
answer.jingle.contents[1].application.sources.push(rtxssrc);groups.push({semantics:'FID',sources:[newssrc.ssrc,rtxssrc.ssrc]});answer.jingle.contents[1].application.sourceGroups=groups;answer.sdp=SJJ.toSessionSDP(answer.jingle,{sid:self.config.sdpSessionID,role:self._role(),direction:'outgoing'});}}}if(self.audBitrate&&self.audBitrate>0)answer.sdp=answer.sdp.replace(/a=fmtp:111 minptime=10;useinbandfec=1\r\n/g,'a=fmtp:111 minptime=10;useinbandfec=1;maxplaybackrate=48000;sprop-maxcapturerate=48000;maxaveragebitrate='+self.audBitrate+';sprop-stereo=1;stereo=1\r\n');if(self.vidBitrate&&self.vidBitrate>0)answer.sdp=answer.sdp.replace(/a=mid:video\r\n/g,'a=mid:video\r\nb=AS:'+self.vidBitrate/1000+'\r\n');var expandedAnswer={type:'answer',sdp:answer.sdp};if(self.assumeSetLocalSuccess){// not safe to do when doing simulcast mangling
var copy=cloneDeep(expandedAnswer);self.emit('answer',copy);cb(null,copy);}self._candidateBuffer=[];self.pc.setLocalDescription(answer,function(){if(self.config.useJingle){var jingle=SJJ.toSessionJSON(answer.sdp,{role:self._role(),direction:'outgoing'});jingle.sid=self.config.sid;self.localDescription=jingle;expandedAnswer.jingle=jingle;}if(self.enableChromeNativeSimulcast){// native simulcast part 2:
// signal multiple tracks to the receiver
// for anything in the SIM group
if(!expandedAnswer.jingle){expandedAnswer.jingle=SJJ.toSessionJSON(answer.sdp,{role:self._role(),direction:'outgoing'});}expandedAnswer.jingle.contents[1].application.sources.forEach(function(source,idx){// the floor idx/2 is a hack that relies on a particular order
// of groups, alternating between sim and rtx
source.parameters=source.parameters.map(function(parameter){if(parameter.key==='msid'){parameter.value+='-'+Math.floor(idx/2);}return parameter;});});expandedAnswer.sdp=SJJ.toSessionSDP(expandedAnswer.jingle,{sid:self.sdpSessionID,role:self._role(),direction:'outgoing'});}expandedAnswer.sdp.split('\r\n').forEach(function(line){if(line.indexOf('a=candidate:')===0){self._checkLocalCandidate(line);}});if(!self.assumeSetLocalSuccess){var copy=cloneDeep(expandedAnswer);self.emit('answer',copy);cb(null,copy);}},function(err){self.emit('error',err);cb(err);});},function(err){self.emit('error',err);cb(err);},constraints);};// Internal method for emitting ice candidates on our peer object
PeerConnection.prototype._onIce=function(event){var self=this;if(event.candidate){if(this.dontSignalCandidates)return;var ice=event.candidate;var expandedCandidate={candidate:{candidate:ice.candidate,sdpMid:ice.sdpMid,sdpMLineIndex:ice.sdpMLineIndex}};this._checkLocalCandidate(ice.candidate);var cand=SJJ.toCandidateJSON(ice.candidate);var already;var idx;if(this.eliminateDuplicateCandidates&&cand.type==='relay'){// drop candidates with same foundation, component
// take local type pref into account so we don't ignore udp
// ones when we know about a TCP one. unlikely but...
already=this._candidateBuffer.filter(function(c){return c.type==='relay';}).map(function(c){return c.foundation+':'+c.component;});idx=already.indexOf(cand.foundation+':'+cand.component);// remember: local type pref of udp is 0, tcp 1, tls 2
if(idx>-1&&cand.priority>>24>=already[idx].priority>>24){// drop it, same foundation with higher (worse) type pref
return;}}if(this.config.bundlePolicy==='max-bundle'){// drop candidates which are duplicate for audio/video/data
// duplicate means same host/port but different sdpMid
already=this._candidateBuffer.filter(function(c){return cand.type===c.type;}).map(function(cand){return cand.address+':'+cand.port;});idx=already.indexOf(cand.address+':'+cand.port);if(idx>-1)return;}// also drop rtcp candidates since we know the peer supports RTCP-MUX
// this is a workaround until browsers implement this natively
if(this.config.rtcpMuxPolicy==='require'&&cand.component==='2'){return;}this._candidateBuffer.push(cand);if(self.config.useJingle){if(!ice.sdpMid){// firefox doesn't set this
if(self.pc.remoteDescription&&self.pc.remoteDescription.type==='offer'){// preserve name from remote
ice.sdpMid=self.remoteDescription.contents[ice.sdpMLineIndex].name;}else{ice.sdpMid=self.localDescription.contents[ice.sdpMLineIndex].name;}}if(!self.iceCredentials.local[ice.sdpMid]){var jingle=SJJ.toSessionJSON(self.pc.localDescription.sdp,{role:self._role(),direction:'outgoing'});jingle.contents.forEach(function(content){var transport=content.transport||{};if(transport.ufrag){self.iceCredentials.local[content.name]={ufrag:transport.ufrag,pwd:transport.pwd};}});}expandedCandidate.jingle={contents:[{name:ice.sdpMid,creator:self._role(),transport:{transportType:'iceUdp',ufrag:self.iceCredentials.local[ice.sdpMid].ufrag,pwd:self.iceCredentials.local[ice.sdpMid].pwd,candidates:[cand]}}]};if(self.batchIceCandidates>0){if(self.batchedIceCandidates.length===0){window.setTimeout(function(){var contents={};self.batchedIceCandidates.forEach(function(content){content=content.contents[0];if(!contents[content.name])contents[content.name]=content;contents[content.name].transport.candidates.push(content.transport.candidates[0]);});var newCand={jingle:{contents:[]}};Object.keys(contents).forEach(function(name){newCand.jingle.contents.push(contents[name]);});self.batchedIceCandidates=[];self.emit('ice',newCand);},self.batchIceCandidates);}self.batchedIceCandidates.push(expandedCandidate.jingle);return;}}this.emit('ice',expandedCandidate);}else{this.emit('endOfCandidates');}};// Internal method for processing a new data channel being added by the
// other peer.
PeerConnection.prototype._onDataChannel=function(event){// make sure we keep a reference so this doesn't get garbage collected
var channel=event.channel;this._remoteDataChannels.push(channel);this.emit('addChannel',channel);};// Create a data channel spec reference:
// http://dev.w3.org/2011/webrtc/editor/webrtc.html#idl-def-RTCDataChannelInit
PeerConnection.prototype.createDataChannel=function(name,opts){var channel=this.pc.createDataChannel(name,opts);// make sure we keep a reference so this doesn't get garbage collected
this._localDataChannels.push(channel);return channel;};PeerConnection.prototype.getStats=function(){if(typeof arguments[0]==='function'){var cb=arguments[0];this.pc.getStats().then(function(res){cb(null,res);},function(err){cb(err);});}else{return this.pc.getStats.apply(this.pc,arguments);}};module.exports=PeerConnection;},{"lodash.clonedeep":45,"sdp-jingle-json":54,"util":73,"wildemitter":75}],54:[function(require,module,exports){var toSDP=require('./lib/tosdp');var toJSON=require('./lib/tojson');// Converstion from JSON to SDP
exports.toIncomingSDPOffer=function(session){return toSDP.toSessionSDP(session,{role:'responder',direction:'incoming'});};exports.toOutgoingSDPOffer=function(session){return toSDP.toSessionSDP(session,{role:'initiator',direction:'outgoing'});};exports.toIncomingSDPAnswer=function(session){return toSDP.toSessionSDP(session,{role:'initiator',direction:'incoming'});};exports.toOutgoingSDPAnswer=function(session){return toSDP.toSessionSDP(session,{role:'responder',direction:'outgoing'});};exports.toIncomingMediaSDPOffer=function(media){return toSDP.toMediaSDP(media,{role:'responder',direction:'incoming'});};exports.toOutgoingMediaSDPOffer=function(media){return toSDP.toMediaSDP(media,{role:'initiator',direction:'outgoing'});};exports.toIncomingMediaSDPAnswer=function(media){return toSDP.toMediaSDP(media,{role:'initiator',direction:'incoming'});};exports.toOutgoingMediaSDPAnswer=function(media){return toSDP.toMediaSDP(media,{role:'responder',direction:'outgoing'});};exports.toCandidateSDP=toSDP.toCandidateSDP;exports.toMediaSDP=toSDP.toMediaSDP;exports.toSessionSDP=toSDP.toSessionSDP;// Conversion from SDP to JSON
exports.toIncomingJSONOffer=function(sdp,creators){return toJSON.toSessionJSON(sdp,{role:'responder',direction:'incoming',creators:creators});};exports.toOutgoingJSONOffer=function(sdp,creators){return toJSON.toSessionJSON(sdp,{role:'initiator',direction:'outgoing',creators:creators});};exports.toIncomingJSONAnswer=function(sdp,creators){return toJSON.toSessionJSON(sdp,{role:'initiator',direction:'incoming',creators:creators});};exports.toOutgoingJSONAnswer=function(sdp,creators){return toJSON.toSessionJSON(sdp,{role:'responder',direction:'outgoing',creators:creators});};exports.toIncomingMediaJSONOffer=function(sdp,creator){return toJSON.toMediaJSON(sdp,{role:'responder',direction:'incoming',creator:creator});};exports.toOutgoingMediaJSONOffer=function(sdp,creator){return toJSON.toMediaJSON(sdp,{role:'initiator',direction:'outgoing',creator:creator});};exports.toIncomingMediaJSONAnswer=function(sdp,creator){return toJSON.toMediaJSON(sdp,{role:'initiator',direction:'incoming',creator:creator});};exports.toOutgoingMediaJSONAnswer=function(sdp,creator){return toJSON.toMediaJSON(sdp,{role:'responder',direction:'outgoing',creator:creator});};exports.toCandidateJSON=toJSON.toCandidateJSON;exports.toMediaJSON=toJSON.toMediaJSON;exports.toSessionJSON=toJSON.toSessionJSON;},{"./lib/tojson":57,"./lib/tosdp":58}],55:[function(require,module,exports){exports.lines=function(sdp){return sdp.split('\r\n').filter(function(line){return line.length>0;});};exports.findLine=function(prefix,mediaLines,sessionLines){var prefixLength=prefix.length;for(var i=0;i<mediaLines.length;i++){if(mediaLines[i].substr(0,prefixLength)===prefix){return mediaLines[i];}}// Continue searching in parent session section
if(!sessionLines){return false;}for(var j=0;j<sessionLines.length;j++){if(sessionLines[j].substr(0,prefixLength)===prefix){return sessionLines[j];}}return false;};exports.findLines=function(prefix,mediaLines,sessionLines){var results=[];var prefixLength=prefix.length;for(var i=0;i<mediaLines.length;i++){if(mediaLines[i].substr(0,prefixLength)===prefix){results.push(mediaLines[i]);}}if(results.length||!sessionLines){return results;}for(var j=0;j<sessionLines.length;j++){if(sessionLines[j].substr(0,prefixLength)===prefix){results.push(sessionLines[j]);}}return results;};exports.mline=function(line){var parts=line.substr(2).split(' ');var parsed={media:parts[0],port:parts[1],proto:parts[2],formats:[]};for(var i=3;i<parts.length;i++){if(parts[i]){parsed.formats.push(parts[i]);}}return parsed;};exports.rtpmap=function(line){var parts=line.substr(9).split(' ');var parsed={id:parts.shift()};parts=parts[0].split('/');parsed.name=parts[0];parsed.clockrate=parts[1];parsed.channels=parts.length==3?parts[2]:'1';return parsed;};exports.sctpmap=function(line){// based on -05 draft
var parts=line.substr(10).split(' ');var parsed={number:parts.shift(),protocol:parts.shift(),streams:parts.shift()};return parsed;};exports.fmtp=function(line){var kv,key,value;var parts=line.substr(line.indexOf(' ')+1).split(';');var parsed=[];for(var i=0;i<parts.length;i++){kv=parts[i].split('=');key=kv[0].trim();value=kv[1];if(key&&value){parsed.push({key:key,value:value});}else if(key){parsed.push({key:'',value:key});}}return parsed;};exports.crypto=function(line){var parts=line.substr(9).split(' ');var parsed={tag:parts[0],cipherSuite:parts[1],keyParams:parts[2],sessionParams:parts.slice(3).join(' ')};return parsed;};exports.fingerprint=function(line){var parts=line.substr(14).split(' ');return{hash:parts[0],value:parts[1]};};exports.extmap=function(line){var parts=line.substr(9).split(' ');var parsed={};var idpart=parts.shift();var sp=idpart.indexOf('/');if(sp>=0){parsed.id=idpart.substr(0,sp);parsed.senders=idpart.substr(sp+1);}else{parsed.id=idpart;parsed.senders='sendrecv';}parsed.uri=parts.shift()||'';return parsed;};exports.rtcpfb=function(line){var parts=line.substr(10).split(' ');var parsed={};parsed.id=parts.shift();parsed.type=parts.shift();if(parsed.type==='trr-int'){parsed.value=parts.shift();}else{parsed.subtype=parts.shift()||'';}parsed.parameters=parts;return parsed;};exports.candidate=function(line){var parts;if(line.indexOf('a=candidate:')===0){parts=line.substring(12).split(' ');}else{// no a=candidate
parts=line.substring(10).split(' ');}var candidate={foundation:parts[0],component:parts[1],protocol:parts[2].toLowerCase(),priority:parts[3],ip:parts[4],port:parts[5],// skip parts[6] == 'typ'
type:parts[7],generation:'0'};for(var i=8;i<parts.length;i+=2){if(parts[i]==='raddr'){candidate.relAddr=parts[i+1];}else if(parts[i]==='rport'){candidate.relPort=parts[i+1];}else if(parts[i]==='generation'){candidate.generation=parts[i+1];}else if(parts[i]==='tcptype'){candidate.tcpType=parts[i+1];}}candidate.network='1';return candidate;};exports.sourceGroups=function(lines){var parsed=[];for(var i=0;i<lines.length;i++){var parts=lines[i].substr(13).split(' ');parsed.push({semantics:parts.shift(),sources:parts});}return parsed;};exports.sources=function(lines){// http://tools.ietf.org/html/rfc5576
var parsed=[];var sources={};for(var i=0;i<lines.length;i++){var parts=lines[i].substr(7).split(' ');var ssrc=parts.shift();if(!sources[ssrc]){var source={ssrc:ssrc,parameters:[]};parsed.push(source);// Keep an index
sources[ssrc]=source;}parts=parts.join(' ').split(':');var attribute=parts.shift();var value=parts.join(':')||null;sources[ssrc].parameters.push({key:attribute,value:value});}return parsed;};exports.groups=function(lines){// http://tools.ietf.org/html/rfc5888
var parsed=[];var parts;for(var i=0;i<lines.length;i++){parts=lines[i].substr(8).split(' ');parsed.push({semantics:parts.shift(),contents:parts});}return parsed;};exports.bandwidth=function(line){var parts=line.substr(2).split(':');var parsed={};parsed.type=parts.shift();parsed.bandwidth=parts.shift();return parsed;};exports.msid=function(line){var data=line.substr(7);var parts=data.split(' ');return{msid:data,mslabel:parts[0],label:parts[1]};};},{}],56:[function(require,module,exports){module.exports={initiator:{incoming:{initiator:'recvonly',responder:'sendonly',both:'sendrecv',none:'inactive',recvonly:'initiator',sendonly:'responder',sendrecv:'both',inactive:'none'},outgoing:{initiator:'sendonly',responder:'recvonly',both:'sendrecv',none:'inactive',recvonly:'responder',sendonly:'initiator',sendrecv:'both',inactive:'none'}},responder:{incoming:{initiator:'sendonly',responder:'recvonly',both:'sendrecv',none:'inactive',recvonly:'responder',sendonly:'initiator',sendrecv:'both',inactive:'none'},outgoing:{initiator:'recvonly',responder:'sendonly',both:'sendrecv',none:'inactive',recvonly:'initiator',sendonly:'responder',sendrecv:'both',inactive:'none'}}};},{}],57:[function(require,module,exports){var SENDERS=require('./senders');var parsers=require('./parsers');var idCounter=Math.random();exports._setIdCounter=function(counter){idCounter=counter;};exports.toSessionJSON=function(sdp,opts){var i;var creators=opts.creators||[];var role=opts.role||'initiator';var direction=opts.direction||'outgoing';// Divide the SDP into session and media sections.
var media=sdp.split('\r\nm=');for(i=1;i<media.length;i++){media[i]='m='+media[i];if(i!==media.length-1){media[i]+='\r\n';}}var session=media.shift()+'\r\n';var sessionLines=parsers.lines(session);var parsed={};var contents=[];for(i=0;i<media.length;i++){contents.push(exports.toMediaJSON(media[i],session,{role:role,direction:direction,creator:creators[i]||'initiator'}));}parsed.contents=contents;var groupLines=parsers.findLines('a=group:',sessionLines);if(groupLines.length){parsed.groups=parsers.groups(groupLines);}return parsed;};exports.toMediaJSON=function(media,session,opts){var creator=opts.creator||'initiator';var role=opts.role||'initiator';var direction=opts.direction||'outgoing';var lines=parsers.lines(media);var sessionLines=parsers.lines(session);var mline=parsers.mline(lines[0]);var content={creator:creator,name:mline.media,application:{applicationType:'rtp',media:mline.media,payloads:[],encryption:[],feedback:[],headerExtensions:[]},transport:{transportType:'iceUdp',candidates:[],fingerprints:[]}};if(mline.media=='application'){// FIXME: the description is most likely to be independent
// of the SDP and should be processed by other parts of the library
content.application={applicationType:'datachannel'};content.transport.sctp=[];}var desc=content.application;var trans=content.transport;// If we have a mid, use that for the content name instead.
var mid=parsers.findLine('a=mid:',lines);if(mid){content.name=mid.substr(6);}if(parsers.findLine('a=sendrecv',lines,sessionLines)){content.senders='both';}else if(parsers.findLine('a=sendonly',lines,sessionLines)){content.senders=SENDERS[role][direction].sendonly;}else if(parsers.findLine('a=recvonly',lines,sessionLines)){content.senders=SENDERS[role][direction].recvonly;}else if(parsers.findLine('a=inactive',lines,sessionLines)){content.senders='none';}if(desc.applicationType=='rtp'){var bandwidth=parsers.findLine('b=',lines);if(bandwidth){desc.bandwidth=parsers.bandwidth(bandwidth);}var ssrc=parsers.findLine('a=ssrc:',lines);if(ssrc){desc.ssrc=ssrc.substr(7).split(' ')[0];}var rtpmapLines=parsers.findLines('a=rtpmap:',lines);rtpmapLines.forEach(function(line){var payload=parsers.rtpmap(line);payload.parameters=[];payload.feedback=[];var fmtpLines=parsers.findLines('a=fmtp:'+payload.id,lines);// There should only be one fmtp line per payload
fmtpLines.forEach(function(line){payload.parameters=parsers.fmtp(line);});var fbLines=parsers.findLines('a=rtcp-fb:'+payload.id,lines);fbLines.forEach(function(line){payload.feedback.push(parsers.rtcpfb(line));});desc.payloads.push(payload);});var cryptoLines=parsers.findLines('a=crypto:',lines,sessionLines);cryptoLines.forEach(function(line){desc.encryption.push(parsers.crypto(line));});if(parsers.findLine('a=rtcp-mux',lines)){desc.mux=true;}var fbLines=parsers.findLines('a=rtcp-fb:*',lines);fbLines.forEach(function(line){desc.feedback.push(parsers.rtcpfb(line));});var extLines=parsers.findLines('a=extmap:',lines);extLines.forEach(function(line){var ext=parsers.extmap(line);ext.senders=SENDERS[role][direction][ext.senders];desc.headerExtensions.push(ext);});var ssrcGroupLines=parsers.findLines('a=ssrc-group:',lines);desc.sourceGroups=parsers.sourceGroups(ssrcGroupLines||[]);var ssrcLines=parsers.findLines('a=ssrc:',lines);var sources=desc.sources=parsers.sources(ssrcLines||[]);var msidLine=parsers.findLine('a=msid:',lines);if(msidLine){var msid=parsers.msid(msidLine);['msid','mslabel','label'].forEach(function(key){for(var i=0;i<sources.length;i++){var found=false;for(var j=0;j<sources[i].parameters.length;j++){if(sources[i].parameters[j].key===key){found=true;}}if(!found){sources[i].parameters.push({key:key,value:msid[key]});}}});}if(parsers.findLine('a=x-google-flag:conference',lines,sessionLines)){desc.googConferenceFlag=true;}}// transport specific attributes
var fingerprintLines=parsers.findLines('a=fingerprint:',lines,sessionLines);var setup=parsers.findLine('a=setup:',lines,sessionLines);fingerprintLines.forEach(function(line){var fp=parsers.fingerprint(line);if(setup){fp.setup=setup.substr(8);}trans.fingerprints.push(fp);});var ufragLine=parsers.findLine('a=ice-ufrag:',lines,sessionLines);var pwdLine=parsers.findLine('a=ice-pwd:',lines,sessionLines);if(ufragLine&&pwdLine){trans.ufrag=ufragLine.substr(12);trans.pwd=pwdLine.substr(10);trans.candidates=[];var candidateLines=parsers.findLines('a=candidate:',lines,sessionLines);candidateLines.forEach(function(line){trans.candidates.push(exports.toCandidateJSON(line));});}if(desc.applicationType=='datachannel'){var sctpmapLines=parsers.findLines('a=sctpmap:',lines);sctpmapLines.forEach(function(line){var sctp=parsers.sctpmap(line);trans.sctp.push(sctp);});}return content;};exports.toCandidateJSON=function(line){var candidate=parsers.candidate(line.split('\r\n')[0]);candidate.id=(idCounter++).toString(36).substr(0,12);return candidate;};},{"./parsers":55,"./senders":56}],58:[function(require,module,exports){var SENDERS=require('./senders');exports.toSessionSDP=function(session,opts){var role=opts.role||'initiator';var direction=opts.direction||'outgoing';var sid=opts.sid||session.sid||Date.now();var time=opts.time||Date.now();var sdp=['v=0','o=- '+sid+' '+time+' IN IP4 0.0.0.0','s=-','t=0 0'];var contents=session.contents||[];var hasSources=false;contents.forEach(function(content){if(content.application.sources&&content.application.sources.length){hasSources=true;}});if(hasSources){sdp.push('a=msid-semantic: WMS *');}var groups=session.groups||[];groups.forEach(function(group){sdp.push('a=group:'+group.semantics+' '+group.contents.join(' '));});contents.forEach(function(content){sdp.push(exports.toMediaSDP(content,opts));});return sdp.join('\r\n')+'\r\n';};exports.toMediaSDP=function(content,opts){var sdp=[];var role=opts.role||'initiator';var direction=opts.direction||'outgoing';var desc=content.application;var transport=content.transport;var payloads=desc.payloads||[];var fingerprints=transport&&transport.fingerprints||[];var mline=[];if(desc.applicationType=='datachannel'){mline.push('application');mline.push('1');mline.push('DTLS/SCTP');if(transport.sctp){transport.sctp.forEach(function(map){mline.push(map.number);});}}else{mline.push(desc.media);mline.push('1');if(fingerprints.length>0){mline.push('UDP/TLS/RTP/SAVPF');}else if(desc.encryption&&desc.encryption.length>0){mline.push('RTP/SAVPF');}else{mline.push('RTP/AVPF');}payloads.forEach(function(payload){mline.push(payload.id);});}sdp.push('m='+mline.join(' '));sdp.push('c=IN IP4 0.0.0.0');if(desc.bandwidth&&desc.bandwidth.type&&desc.bandwidth.bandwidth){sdp.push('b='+desc.bandwidth.type+':'+desc.bandwidth.bandwidth);}if(desc.applicationType=='rtp'){sdp.push('a=rtcp:1 IN IP4 0.0.0.0');}if(transport){if(transport.ufrag){sdp.push('a=ice-ufrag:'+transport.ufrag);}if(transport.pwd){sdp.push('a=ice-pwd:'+transport.pwd);}var pushedSetup=false;fingerprints.forEach(function(fingerprint){sdp.push('a=fingerprint:'+fingerprint.hash+' '+fingerprint.value);if(fingerprint.setup&&!pushedSetup){sdp.push('a=setup:'+fingerprint.setup);}});if(transport.sctp){transport.sctp.forEach(function(map){sdp.push('a=sctpmap:'+map.number+' '+map.protocol+' '+map.streams);});}}if(desc.applicationType=='rtp'){sdp.push('a='+(SENDERS[role][direction][content.senders]||'sendrecv'));}sdp.push('a=mid:'+content.name);if(desc.sources&&desc.sources.length){(desc.sources[0].parameters||[]).forEach(function(param){if(param.key==='msid'){sdp.push('a=msid:'+param.value);}});}if(desc.mux){sdp.push('a=rtcp-mux');}var encryption=desc.encryption||[];encryption.forEach(function(crypto){sdp.push('a=crypto:'+crypto.tag+' '+crypto.cipherSuite+' '+crypto.keyParams+(crypto.sessionParams?' '+crypto.sessionParams:''));});if(desc.googConferenceFlag){sdp.push('a=x-google-flag:conference');}payloads.forEach(function(payload){var rtpmap='a=rtpmap:'+payload.id+' '+payload.name+'/'+payload.clockrate;if(payload.channels&&payload.channels!='1'){rtpmap+='/'+payload.channels;}sdp.push(rtpmap);if(payload.parameters&&payload.parameters.length){var fmtp=['a=fmtp:'+payload.id];var parameters=[];payload.parameters.forEach(function(param){parameters.push((param.key?param.key+'=':'')+param.value);});fmtp.push(parameters.join(';'));sdp.push(fmtp.join(' '));}if(payload.feedback){payload.feedback.forEach(function(fb){if(fb.type==='trr-int'){sdp.push('a=rtcp-fb:'+payload.id+' trr-int '+(fb.value?fb.value:'0'));}else{sdp.push('a=rtcp-fb:'+payload.id+' '+fb.type+(fb.subtype?' '+fb.subtype:''));}});}});if(desc.feedback){desc.feedback.forEach(function(fb){if(fb.type==='trr-int'){sdp.push('a=rtcp-fb:* trr-int '+(fb.value?fb.value:'0'));}else{sdp.push('a=rtcp-fb:* '+fb.type+(fb.subtype?' '+fb.subtype:''));}});}var hdrExts=desc.headerExtensions||[];hdrExts.forEach(function(hdr){sdp.push('a=extmap:'+hdr.id+(hdr.senders?'/'+SENDERS[role][direction][hdr.senders]:'')+' '+hdr.uri);});var ssrcGroups=desc.sourceGroups||[];ssrcGroups.forEach(function(ssrcGroup){sdp.push('a=ssrc-group:'+ssrcGroup.semantics+' '+ssrcGroup.sources.join(' '));});var ssrcs=desc.sources||[];ssrcs.forEach(function(ssrc){for(var i=0;i<ssrc.parameters.length;i++){var param=ssrc.parameters[i];sdp.push('a=ssrc:'+(ssrc.ssrc||desc.ssrc)+' '+param.key+(param.value?':'+param.value:''));}});var candidates=transport.candidates||[];candidates.forEach(function(candidate){sdp.push(exports.toCandidateSDP(candidate));});return sdp.join('\r\n');};exports.toCandidateSDP=function(candidate){var sdp=[];sdp.push(candidate.foundation);sdp.push(candidate.component);sdp.push(candidate.protocol.toUpperCase());sdp.push(candidate.priority);sdp.push(candidate.ip);sdp.push(candidate.port);var type=candidate.type;sdp.push('typ');sdp.push(type);if(type==='srflx'||type==='prflx'||type==='relay'){if(candidate.relAddr&&candidate.relPort){sdp.push('raddr');sdp.push(candidate.relAddr);sdp.push('rport');sdp.push(candidate.relPort);}}if(candidate.tcpType&&candidate.protocol.toUpperCase()=='TCP'){sdp.push('tcptype');sdp.push(candidate.tcpType);}sdp.push('generation');sdp.push(candidate.generation||'0');// FIXME: apparently this is wrong per spec
// but then, we need this when actually putting this into
// SDP so it's going to stay.
// decision needs to be revisited when browsers dont
// accept this any longer
return'a=candidate:'+sdp.join(' ');};},{"./senders":56}],59:[function(require,module,exports){/* eslint-env node */'use strict';// SDP helpers.
var SDPUtils={};// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier=function(){return Math.random().toString(36).substr(2,10);};// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName=SDPUtils.generateIdentifier();// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines=function(blob){return blob.trim().split('\n').map(function(line){return line.trim();});};// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections=function(blob){var parts=blob.split('\nm=');return parts.map(function(part,index){return(index>0?'m='+part:part).trim()+'\r\n';});};// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix=function(blob,prefix){return SDPUtils.splitLines(blob).filter(function(line){return line.indexOf(prefix)===0;});};// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate=function(line){var parts;// Parse both variants.
if(line.indexOf('a=candidate:')===0){parts=line.substring(12).split(' ');}else{parts=line.substring(10).split(' ');}var candidate={foundation:parts[0],component:parts[1],protocol:parts[2].toLowerCase(),priority:parseInt(parts[3],10),ip:parts[4],port:parseInt(parts[5],10),// skip parts[6] == 'typ'
type:parts[7]};for(var i=8;i<parts.length;i+=2){switch(parts[i]){case'raddr':candidate.relatedAddress=parts[i+1];break;case'rport':candidate.relatedPort=parseInt(parts[i+1],10);break;case'tcptype':candidate.tcpType=parts[i+1];break;default:// extension handling, in particular ufrag
candidate[parts[i]]=parts[i+1];break;}}return candidate;};// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate=function(candidate){var sdp=[];sdp.push(candidate.foundation);sdp.push(candidate.component);sdp.push(candidate.protocol.toUpperCase());sdp.push(candidate.priority);sdp.push(candidate.ip);sdp.push(candidate.port);var type=candidate.type;sdp.push('typ');sdp.push(type);if(type!=='host'&&candidate.relatedAddress&&candidate.relatedPort){sdp.push('raddr');sdp.push(candidate.relatedAddress);// was: relAddr
sdp.push('rport');sdp.push(candidate.relatedPort);// was: relPort
}if(candidate.tcpType&&candidate.protocol.toLowerCase()==='tcp'){sdp.push('tcptype');sdp.push(candidate.tcpType);}return'candidate:'+sdp.join(' ');};// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions=function(line){return line.substr(14).split(' ');};// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap=function(line){var parts=line.substr(9).split(' ');var parsed={payloadType:parseInt(parts.shift(),10)// was: id
};parts=parts[0].split('/');parsed.name=parts[0];parsed.clockRate=parseInt(parts[1],10);// was: clockrate
// was: channels
parsed.numChannels=parts.length===3?parseInt(parts[2],10):1;return parsed;};// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap=function(codec){var pt=codec.payloadType;if(codec.preferredPayloadType!==undefined){pt=codec.preferredPayloadType;}return'a=rtpmap:'+pt+' '+codec.name+'/'+codec.clockRate+(codec.numChannels!==1?'/'+codec.numChannels:'')+'\r\n';};// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap=function(line){var parts=line.substr(9).split(' ');return{id:parseInt(parts[0],10),direction:parts[0].indexOf('/')>0?parts[0].split('/')[1]:'sendrecv',uri:parts[1]};};// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap=function(headerExtension){return'a=extmap:'+(headerExtension.id||headerExtension.preferredId)+(headerExtension.direction&&headerExtension.direction!=='sendrecv'?'/'+headerExtension.direction:'')+' '+headerExtension.uri+'\r\n';};// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp=function(line){var parsed={};var kv;var parts=line.substr(line.indexOf(' ')+1).split(';');for(var j=0;j<parts.length;j++){kv=parts[j].trim().split('=');parsed[kv[0].trim()]=kv[1];}return parsed;};// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp=function(codec){var line='';var pt=codec.payloadType;if(codec.preferredPayloadType!==undefined){pt=codec.preferredPayloadType;}if(codec.parameters&&Object.keys(codec.parameters).length){var params=[];Object.keys(codec.parameters).forEach(function(param){params.push(param+'='+codec.parameters[param]);});line+='a=fmtp:'+pt+' '+params.join(';')+'\r\n';}return line;};// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb=function(line){var parts=line.substr(line.indexOf(' ')+1).split(' ');return{type:parts.shift(),parameter:parts.join(' ')};};// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb=function(codec){var lines='';var pt=codec.payloadType;if(codec.preferredPayloadType!==undefined){pt=codec.preferredPayloadType;}if(codec.rtcpFeedback&&codec.rtcpFeedback.length){// FIXME: special handling for trr-int?
codec.rtcpFeedback.forEach(function(fb){lines+='a=rtcp-fb:'+pt+' '+fb.type+(fb.parameter&&fb.parameter.length?' '+fb.parameter:'')+'\r\n';});}return lines;};// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia=function(line){var sp=line.indexOf(' ');var parts={ssrc:parseInt(line.substr(7,sp-7),10)};var colon=line.indexOf(':',sp);if(colon>-1){parts.attribute=line.substr(sp+1,colon-sp-1);parts.value=line.substr(colon+1);}else{parts.attribute=line.substr(sp+1);}return parts;};// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid=function(mediaSection){var mid=SDPUtils.matchPrefix(mediaSection,'a=mid:')[0];if(mid){return mid.substr(6);}};SDPUtils.parseFingerprint=function(line){var parts=line.substr(14).split(' ');return{algorithm:parts[0].toLowerCase(),// algorithm is case-sensitive in Edge.
value:parts[1]};};// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters=function(mediaSection,sessionpart){var lines=SDPUtils.matchPrefix(mediaSection+sessionpart,'a=fingerprint:');// Note: a=setup line is ignored since we use the 'auto' role.
// Note2: 'algorithm' is not case sensitive except in Edge.
return{role:'auto',fingerprints:lines.map(SDPUtils.parseFingerprint)};};// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters=function(params,setupType){var sdp='a=setup:'+setupType+'\r\n';params.fingerprints.forEach(function(fp){sdp+='a=fingerprint:'+fp.algorithm+' '+fp.value+'\r\n';});return sdp;};// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters=function(mediaSection,sessionpart){var lines=SDPUtils.splitLines(mediaSection);// Search in session part, too.
lines=lines.concat(SDPUtils.splitLines(sessionpart));var iceParameters={usernameFragment:lines.filter(function(line){return line.indexOf('a=ice-ufrag:')===0;})[0].substr(12),password:lines.filter(function(line){return line.indexOf('a=ice-pwd:')===0;})[0].substr(10)};return iceParameters;};// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters=function(params){return'a=ice-ufrag:'+params.usernameFragment+'\r\n'+'a=ice-pwd:'+params.password+'\r\n';};// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters=function(mediaSection){var description={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]};var lines=SDPUtils.splitLines(mediaSection);var mline=lines[0].split(' ');for(var i=3;i<mline.length;i++){// find all codecs from mline[3..]
var pt=mline[i];var rtpmapline=SDPUtils.matchPrefix(mediaSection,'a=rtpmap:'+pt+' ')[0];if(rtpmapline){var codec=SDPUtils.parseRtpMap(rtpmapline);var fmtps=SDPUtils.matchPrefix(mediaSection,'a=fmtp:'+pt+' ');// Only the first a=fmtp:<pt> is considered.
codec.parameters=fmtps.length?SDPUtils.parseFmtp(fmtps[0]):{};codec.rtcpFeedback=SDPUtils.matchPrefix(mediaSection,'a=rtcp-fb:'+pt+' ').map(SDPUtils.parseRtcpFb);description.codecs.push(codec);// parse FEC mechanisms from rtpmap lines.
switch(codec.name.toUpperCase()){case'RED':case'ULPFEC':description.fecMechanisms.push(codec.name.toUpperCase());break;default:// only RED and ULPFEC are recognized as FEC mechanisms.
break;}}}SDPUtils.matchPrefix(mediaSection,'a=extmap:').forEach(function(line){description.headerExtensions.push(SDPUtils.parseExtmap(line));});// FIXME: parse rtcp.
return description;};// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription=function(kind,caps){var sdp='';// Build the mline.
sdp+='m='+kind+' ';sdp+=caps.codecs.length>0?'9':'0';// reject if no codecs.
sdp+=' UDP/TLS/RTP/SAVPF ';sdp+=caps.codecs.map(function(codec){if(codec.preferredPayloadType!==undefined){return codec.preferredPayloadType;}return codec.payloadType;}).join(' ')+'\r\n';sdp+='c=IN IP4 0.0.0.0\r\n';sdp+='a=rtcp:9 IN IP4 0.0.0.0\r\n';// Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
caps.codecs.forEach(function(codec){sdp+=SDPUtils.writeRtpMap(codec);sdp+=SDPUtils.writeFmtp(codec);sdp+=SDPUtils.writeRtcpFb(codec);});var maxptime=0;caps.codecs.forEach(function(codec){if(codec.maxptime>maxptime){maxptime=codec.maxptime;}});if(maxptime>0){sdp+='a=maxptime:'+maxptime+'\r\n';}sdp+='a=rtcp-mux\r\n';caps.headerExtensions.forEach(function(extension){sdp+=SDPUtils.writeExtmap(extension);});// FIXME: write fecMechanisms.
return sdp;};// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters=function(mediaSection){var encodingParameters=[];var description=SDPUtils.parseRtpParameters(mediaSection);var hasRed=description.fecMechanisms.indexOf('RED')!==-1;var hasUlpfec=description.fecMechanisms.indexOf('ULPFEC')!==-1;// filter a=ssrc:... cname:, ignore PlanB-msid
var ssrcs=SDPUtils.matchPrefix(mediaSection,'a=ssrc:').map(function(line){return SDPUtils.parseSsrcMedia(line);}).filter(function(parts){return parts.attribute==='cname';});var primarySsrc=ssrcs.length>0&&ssrcs[0].ssrc;var secondarySsrc;var flows=SDPUtils.matchPrefix(mediaSection,'a=ssrc-group:FID').map(function(line){var parts=line.split(' ');parts.shift();return parts.map(function(part){return parseInt(part,10);});});if(flows.length>0&&flows[0].length>1&&flows[0][0]===primarySsrc){secondarySsrc=flows[0][1];}description.codecs.forEach(function(codec){if(codec.name.toUpperCase()==='RTX'&&codec.parameters.apt){var encParam={ssrc:primarySsrc,codecPayloadType:parseInt(codec.parameters.apt,10),rtx:{ssrc:secondarySsrc}};encodingParameters.push(encParam);if(hasRed){encParam=JSON.parse(JSON.stringify(encParam));encParam.fec={ssrc:secondarySsrc,mechanism:hasUlpfec?'red+ulpfec':'red'};encodingParameters.push(encParam);}}});if(encodingParameters.length===0&&primarySsrc){encodingParameters.push({ssrc:primarySsrc});}// we support both b=AS and b=TIAS but interpret AS as TIAS.
var bandwidth=SDPUtils.matchPrefix(mediaSection,'b=');if(bandwidth.length){if(bandwidth[0].indexOf('b=TIAS:')===0){bandwidth=parseInt(bandwidth[0].substr(7),10);}else if(bandwidth[0].indexOf('b=AS:')===0){bandwidth=parseInt(bandwidth[0].substr(5),10);}encodingParameters.forEach(function(params){params.maxBitrate=bandwidth;});}return encodingParameters;};// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters=function(mediaSection){var rtcpParameters={};var cname;// Gets the first SSRC. Note that with RTX there might be multiple
// SSRCs.
var remoteSsrc=SDPUtils.matchPrefix(mediaSection,'a=ssrc:').map(function(line){return SDPUtils.parseSsrcMedia(line);}).filter(function(obj){return obj.attribute==='cname';})[0];if(remoteSsrc){rtcpParameters.cname=remoteSsrc.value;rtcpParameters.ssrc=remoteSsrc.ssrc;}// Edge uses the compound attribute instead of reducedSize
// compound is !reducedSize
var rsize=SDPUtils.matchPrefix(mediaSection,'a=rtcp-rsize');rtcpParameters.reducedSize=rsize.length>0;rtcpParameters.compound=rsize.length===0;// parses the rtcp-mux attrіbute.
// Note that Edge does not support unmuxed RTCP.
var mux=SDPUtils.matchPrefix(mediaSection,'a=rtcp-mux');rtcpParameters.mux=mux.length>0;return rtcpParameters;};// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid=function(mediaSection){var parts;var spec=SDPUtils.matchPrefix(mediaSection,'a=msid:');if(spec.length===1){parts=spec[0].substr(7).split(' ');return{stream:parts[0],track:parts[1]};}var planB=SDPUtils.matchPrefix(mediaSection,'a=ssrc:').map(function(line){return SDPUtils.parseSsrcMedia(line);}).filter(function(parts){return parts.attribute==='msid';});if(planB.length>0){parts=planB[0].value.split(' ');return{stream:parts[0],track:parts[1]};}};SDPUtils.writeSessionBoilerplate=function(){// FIXME: sess-id should be an NTP timestamp.
return'v=0\r\n'+'o=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\n'+'s=-\r\n'+'t=0 0\r\n';};SDPUtils.writeMediaSection=function(transceiver,caps,type,stream){var sdp=SDPUtils.writeRtpDescription(transceiver.kind,caps);// Map ICE parameters (ufrag, pwd) to SDP.
sdp+=SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());// Map DTLS parameters to SDP.
sdp+=SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(),type==='offer'?'actpass':'active');sdp+='a=mid:'+transceiver.mid+'\r\n';if(transceiver.direction){sdp+='a='+transceiver.direction+'\r\n';}else if(transceiver.rtpSender&&transceiver.rtpReceiver){sdp+='a=sendrecv\r\n';}else if(transceiver.rtpSender){sdp+='a=sendonly\r\n';}else if(transceiver.rtpReceiver){sdp+='a=recvonly\r\n';}else{sdp+='a=inactive\r\n';}if(transceiver.rtpSender){// spec.
var msid='msid:'+stream.id+' '+transceiver.rtpSender.track.id+'\r\n';sdp+='a='+msid;// for Chrome.
sdp+='a=ssrc:'+transceiver.sendEncodingParameters[0].ssrc+' '+msid;if(transceiver.sendEncodingParameters[0].rtx){sdp+='a=ssrc:'+transceiver.sendEncodingParameters[0].rtx.ssrc+' '+msid;sdp+='a=ssrc-group:FID '+transceiver.sendEncodingParameters[0].ssrc+' '+transceiver.sendEncodingParameters[0].rtx.ssrc+'\r\n';}}// FIXME: this should be written by writeRtpDescription.
sdp+='a=ssrc:'+transceiver.sendEncodingParameters[0].ssrc+' cname:'+SDPUtils.localCName+'\r\n';if(transceiver.rtpSender&&transceiver.sendEncodingParameters[0].rtx){sdp+='a=ssrc:'+transceiver.sendEncodingParameters[0].rtx.ssrc+' cname:'+SDPUtils.localCName+'\r\n';}return sdp;};// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection=function(mediaSection,sessionpart){// Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
var lines=SDPUtils.splitLines(mediaSection);for(var i=0;i<lines.length;i++){switch(lines[i]){case'a=sendrecv':case'a=sendonly':case'a=recvonly':case'a=inactive':return lines[i].substr(2);default:// FIXME: What should happen here?
}}if(sessionpart){return SDPUtils.getDirection(sessionpart);}return'sendrecv';};SDPUtils.getKind=function(mediaSection){var lines=SDPUtils.splitLines(mediaSection);var mline=lines[0].split(' ');return mline[0].substr(2);};SDPUtils.isRejected=function(mediaSection){return mediaSection.split(' ',2)[1]==='0';};// Expose public methods.
module.exports=SDPUtils;},{}],60:[function(require,module,exports){module.exports=require('./lib/');},{"./lib/":61}],61:[function(require,module,exports){/**
         * Module dependencies.
         */var url=require('./url');var parser=require('socket.io-parser');var Manager=require('./manager');var debug=require('debug')('socket.io-client');/**
         * Module exports.
         */module.exports=exports=lookup;/**
         * Managers cache.
         */var cache=exports.managers={};/**
         * Looks up an existing `Manager` for multiplexing.
         * If the user summons:
         *
         *   `io('http://localhost/a');`
         *   `io('http://localhost/b');`
         *
         * We reuse the existing instance based on same scheme/port/host,
         * and we initialize sockets for each namespace.
         *
         * @api public
         */function lookup(uri,opts){if((typeof uri==="undefined"?"undefined":_typeof(uri))=='object'){opts=uri;uri=undefined;}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var io;if(opts.forceNew||opts['force new connection']||false===opts.multiplex){debug('ignoring socket cache for %s',source);io=Manager(source,opts);}else{if(!cache[id]){debug('new io instance for %s',source);cache[id]=Manager(source,opts);}io=cache[id];}return io.socket(parsed.path);}/**
         * Protocol version.
         *
         * @api public
         */exports.protocol=parser.protocol;/**
         * `connect`.
         *
         * @param {String} uri
         * @api public
         */exports.connect=lookup;/**
         * Expose constructors for standalone build.
         *
         * @api public
         */exports.Manager=require('./manager');exports.Socket=require('./socket');},{"./manager":62,"./socket":64,"./url":65,"debug":19,"socket.io-parser":67}],62:[function(require,module,exports){/**
         * Module dependencies.
         */var url=require('./url');var eio=require('engine.io-client');var Socket=require('./socket');var Emitter=require('component-emitter');var parser=require('socket.io-parser');var on=require('./on');var bind=require('component-bind');var object=require('object-component');var debug=require('debug')('socket.io-client:manager');var indexOf=require('indexof');var Backoff=require('backo2');/**
         * Module exports
         */module.exports=Manager;/**
         * `Manager` constructor.
         *
         * @param {String} engine instance or engine uri/opts
         * @param {Object} options
         * @api public
         */function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&'object'==(typeof uri==="undefined"?"undefined":_typeof(uri))){opts=uri;uri=undefined;}opts=opts||{};opts.path=opts.path||'/socket.io';this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1000);this.reconnectionDelayMax(opts.reconnectionDelayMax||5000);this.randomizationFactor(opts.randomizationFactor||0.5);this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()});this.timeout(null==opts.timeout?20000:opts.timeout);this.readyState='closed';this.uri=uri;this.connected=[];this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder();this.decoder=new parser.Decoder();this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open();}/**
         * Propagate given event to sockets and emit on `this`
         *
         * @api private
         */Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments);}};/**
         * Update `socket.id` of all sockets
         *
         * @api private
         */Manager.prototype.updateSocketIds=function(){for(var nsp in this.nsps){this.nsps[nsp].id=this.engine.id;}};/**
         * Mix in `Emitter`.
         */Emitter(Manager.prototype);/**
         * Sets the `reconnection` config.
         *
         * @param {Boolean} true/false if it should automatically reconnect
         * @return {Manager} self or value
         * @api public
         */Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this;};/**
         * Sets the reconnection attempts config.
         *
         * @param {Number} max reconnection attempts before giving up
         * @return {Manager} self or value
         * @api public
         */Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this;};/**
         * Sets the delay between reconnections.
         *
         * @param {Number} delay
         * @return {Manager} self or value
         * @api public
         */Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;this.backoff&&this.backoff.setMin(v);return this;};Manager.prototype.randomizationFactor=function(v){if(!arguments.length)return this._randomizationFactor;this._randomizationFactor=v;this.backoff&&this.backoff.setJitter(v);return this;};/**
         * Sets the maximum delay between reconnections.
         *
         * @param {Number} delay
         * @return {Manager} self or value
         * @api public
         */Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;this.backoff&&this.backoff.setMax(v);return this;};/**
         * Sets the connection timeout. `false` to disable
         *
         * @return {Manager} self or value
         * @api public
         */Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this;};/**
         * Starts trying to reconnect if reconnection is enabled and we have not
         * started reconnecting yet
         *
         * @api private
         */Manager.prototype.maybeReconnectOnOpen=function(){// Only try to reconnect if it's the first time we're connecting
if(!this.reconnecting&&this._reconnection&&this.backoff.attempts===0){// keeps reconnection from firing twice for the same reconnection loop
this.reconnect();}};/**
         * Sets the current transport `socket`.
         *
         * @param {Function} optional, callback
         * @return {Manager} self
         * @api public
         */Manager.prototype.open=Manager.prototype.connect=function(fn){debug('readyState %s',this.readyState);if(~this.readyState.indexOf('open'))return this;debug('opening %s',this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState='opening';this.skipReconnect=false;// emit `open`
var openSub=on(socket,'open',function(){self.onopen();fn&&fn();});// emit `connect_error`
var errorSub=on(socket,'error',function(data){debug('connect_error');self.cleanup();self.readyState='closed';self.emitAll('connect_error',data);if(fn){var err=new Error('Connection error');err.data=data;fn(err);}else{// Only do this if there is no fn to handle the error
self.maybeReconnectOnOpen();}});// emit `connect_timeout`
if(false!==this._timeout){var timeout=this._timeout;debug('connect attempt will timeout after %d',timeout);// set timer
var timer=setTimeout(function(){debug('connect attempt timed out after %d',timeout);openSub.destroy();socket.close();socket.emit('error','timeout');self.emitAll('connect_timeout',timeout);},timeout);this.subs.push({destroy:function destroy(){clearTimeout(timer);}});}this.subs.push(openSub);this.subs.push(errorSub);return this;};/**
         * Called upon transport open.
         *
         * @api private
         */Manager.prototype.onopen=function(){debug('open');// clear old subs
this.cleanup();// mark as open
this.readyState='open';this.emit('open');// add new subs
var socket=this.engine;this.subs.push(on(socket,'data',bind(this,'ondata')));this.subs.push(on(this.decoder,'decoded',bind(this,'ondecoded')));this.subs.push(on(socket,'error',bind(this,'onerror')));this.subs.push(on(socket,'close',bind(this,'onclose')));};/**
         * Called with data.
         *
         * @api private
         */Manager.prototype.ondata=function(data){this.decoder.add(data);};/**
         * Called when parser fully decodes a packet.
         *
         * @api private
         */Manager.prototype.ondecoded=function(packet){this.emit('packet',packet);};/**
         * Called upon socket error.
         *
         * @api private
         */Manager.prototype.onerror=function(err){debug('error',err);this.emitAll('error',err);};/**
         * Creates a new socket for the given `nsp`.
         *
         * @return {Socket}
         * @api public
         */Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on('connect',function(){socket.id=self.engine.id;if(!~indexOf(self.connected,socket)){self.connected.push(socket);}});}return socket;};/**
         * Called upon a socket close.
         *
         * @param {Socket} socket
         */Manager.prototype.destroy=function(socket){var index=indexOf(this.connected,socket);if(~index)this.connected.splice(index,1);if(this.connected.length)return;this.close();};/**
         * Writes a packet.
         *
         * @param {Object} packet
         * @api private
         */Manager.prototype.packet=function(packet){debug('writing packet %j',packet);var self=this;if(!self.encoding){// encode, then write to engine with result
self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i]);}self.encoding=false;self.processPacketQueue();});}else{// add packet to the queue
self.packetBuffer.push(packet);}};/**
         * If packet buffer is non-empty, begins encoding the
         * next packet in line.
         *
         * @api private
         */Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack);}};/**
         * Clean up transport subscriptions and packet buffer.
         *
         * @api private
         */Manager.prototype.cleanup=function(){var sub;while(sub=this.subs.shift()){sub.destroy();}this.packetBuffer=[];this.encoding=false;this.decoder.destroy();};/**
         * Close the current socket.
         *
         * @api private
         */Manager.prototype.close=Manager.prototype.disconnect=function(){this.skipReconnect=true;this.backoff.reset();this.readyState='closed';this.engine&&this.engine.close();};/**
         * Called upon engine close.
         *
         * @api private
         */Manager.prototype.onclose=function(reason){debug('close');this.cleanup();this.backoff.reset();this.readyState='closed';this.emit('close',reason);if(this._reconnection&&!this.skipReconnect){this.reconnect();}};/**
         * Attempt a reconnection.
         *
         * @api private
         */Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;if(this.backoff.attempts>=this._reconnectionAttempts){debug('reconnect failed');this.backoff.reset();this.emitAll('reconnect_failed');this.reconnecting=false;}else{var delay=this.backoff.duration();debug('will wait %dms before reconnect attempt',delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug('attempting reconnect');self.emitAll('reconnect_attempt',self.backoff.attempts);self.emitAll('reconnecting',self.backoff.attempts);// check again for the case socket closed in above events
if(self.skipReconnect)return;self.open(function(err){if(err){debug('reconnect attempt error');self.reconnecting=false;self.reconnect();self.emitAll('reconnect_error',err.data);}else{debug('reconnect success');self.onreconnect();}});},delay);this.subs.push({destroy:function destroy(){clearTimeout(timer);}});}};/**
         * Called upon successful reconnect.
         *
         * @api private
         */Manager.prototype.onreconnect=function(){var attempt=this.backoff.attempts;this.reconnecting=false;this.backoff.reset();this.updateSocketIds();this.emitAll('reconnect',attempt);};},{"./on":63,"./socket":64,"./url":65,"backo2":13,"component-bind":16,"component-emitter":17,"debug":19,"engine.io-client":20,"indexof":41,"object-component":48,"socket.io-parser":67}],63:[function(require,module,exports){/**
         * Module exports.
         */module.exports=on;/**
         * Helper for subscriptions.
         *
         * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
         * @param {String} event name
         * @param {Function} callback
         * @api public
         */function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function destroy(){obj.removeListener(ev,fn);}};}},{}],64:[function(require,module,exports){/**
         * Module dependencies.
         */var parser=require('socket.io-parser');var Emitter=require('component-emitter');var toArray=require('to-array');var on=require('./on');var bind=require('component-bind');var debug=require('debug')('socket.io-client:socket');var hasBin=require('has-binary');/**
         * Module exports.
         */module.exports=exports=Socket;/**
         * Internal events (blacklisted).
         * These events can't be emitted by the user.
         *
         * @api private
         */var events={connect:1,connect_error:1,connect_timeout:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1};/**
         * Shortcut to `Emitter#emit`.
         */var emit=Emitter.prototype.emit;/**
         * `Socket` constructor.
         *
         * @api public
         */function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;// compat
this.ids=0;this.acks={};if(this.io.autoConnect)this.open();this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true;}/**
         * Mix in `Emitter`.
         */Emitter(Socket.prototype);/**
         * Subscribe to open, close and packet events
         *
         * @api private
         */Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,'open',bind(this,'onopen')),on(io,'packet',bind(this,'onpacket')),on(io,'close',bind(this,'onclose'))];};/**
         * "Opens" the socket.
         *
         * @api public
         */Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();// ensure open
if('open'==this.io.readyState)this.onopen();return this;};/**
         * Sends a `message` event.
         *
         * @return {Socket} self
         * @api public
         */Socket.prototype.send=function(){var args=toArray(arguments);args.unshift('message');this.emit.apply(this,args);return this;};/**
         * Override `emit`.
         * If the event is in `events`, it's emitted normally.
         *
         * @param {String} event name
         * @return {Socket} self
         * @api public
         */Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this;}var args=toArray(arguments);var parserType=parser.EVENT;// default
if(hasBin(args)){parserType=parser.BINARY_EVENT;}// binary
var packet={type:parserType,data:args};// event ack callback
if('function'==typeof args[args.length-1]){debug('emitting packet with ack id %d',this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++;}if(this.connected){this.packet(packet);}else{this.sendBuffer.push(packet);}return this;};/**
         * Sends a packet.
         *
         * @param {Object} packet
         * @api private
         */Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet);};/**
         * Called upon engine `open`.
         *
         * @api private
         */Socket.prototype.onopen=function(){debug('transport is open - connecting');// write connect packet if necessary
if('/'!=this.nsp){this.packet({type:parser.CONNECT});}};/**
         * Called upon engine `close`.
         *
         * @param {String} reason
         * @api private
         */Socket.prototype.onclose=function(reason){debug('close (%s)',reason);this.connected=false;this.disconnected=true;delete this.id;this.emit('disconnect',reason);};/**
         * Called with socket packet.
         *
         * @param {Object} packet
         * @api private
         */Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit('error',packet.data);break;}};/**
         * Called upon a server event.
         *
         * @param {Object} packet
         * @api private
         */Socket.prototype.onevent=function(packet){var args=packet.data||[];debug('emitting event %j',args);if(null!=packet.id){debug('attaching ack callback to event');args.push(this.ack(packet.id));}if(this.connected){emit.apply(this,args);}else{this.receiveBuffer.push(args);}};/**
         * Produces an ack callback to emit with an event.
         *
         * @api private
         */Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){// prevent double callbacks
if(sent)return;sent=true;var args=toArray(arguments);debug('sending ack %j',args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args});};};/**
         * Called upon a server acknowlegement.
         *
         * @param {Object} packet
         * @api private
         */Socket.prototype.onack=function(packet){debug('calling ack %s with %j',packet.id,packet.data);var fn=this.acks[packet.id];fn.apply(this,packet.data);delete this.acks[packet.id];};/**
         * Called upon server connect.
         *
         * @api private
         */Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit('connect');this.emitBuffered();};/**
         * Emit buffered events (received and emitted).
         *
         * @api private
         */Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i]);}this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i]);}this.sendBuffer=[];};/**
         * Called upon server disconnect.
         *
         * @api private
         */Socket.prototype.ondisconnect=function(){debug('server disconnect (%s)',this.nsp);this.destroy();this.onclose('io server disconnect');};/**
         * Called upon forced client/server side disconnections,
         * this method ensures the manager stops tracking us and
         * that reconnections don't get triggered for this.
         *
         * @api private.
         */Socket.prototype.destroy=function(){if(this.subs){// clean subscriptions to avoid reconnections
for(var i=0;i<this.subs.length;i++){this.subs[i].destroy();}this.subs=null;}this.io.destroy(this);};/**
         * Disconnects the socket manually.
         *
         * @return {Socket} self
         * @api public
         */Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug('performing disconnect (%s)',this.nsp);this.packet({type:parser.DISCONNECT});}// remove socket from pool
this.destroy();if(this.connected){// fire events
this.onclose('io client disconnect');}return this;};},{"./on":63,"component-bind":16,"component-emitter":17,"debug":19,"has-binary":39,"socket.io-parser":67,"to-array":69}],65:[function(require,module,exports){(function(global){/**
             * Module dependencies.
             */var parseuri=require('parseuri');var debug=require('debug')('socket.io-client:url');/**
             * Module exports.
             */module.exports=url;/**
             * URL parser.
             *
             * @param {String} url
             * @param {Object} An object meant to mimic window.location.
             *                 Defaults to window.location.
             * @api public
             */function url(uri,loc){var obj=uri;// default to window.location
var loc=loc||global.location;if(null==uri)uri=loc.protocol+'//'+loc.host;// relative path support
if('string'==typeof uri){if('/'==uri.charAt(0)){if('/'==uri.charAt(1)){uri=loc.protocol+uri;}else{uri=loc.hostname+uri;}}if(!/^(https?|wss?):\/\//.test(uri)){debug('protocol-less url %s',uri);if('undefined'!=typeof loc){uri=loc.protocol+'//'+uri;}else{uri='https://'+uri;}}// parse
debug('parse %s',uri);obj=parseuri(uri);}// make sure we treat `localhost:80` and `localhost` equally
if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port='80';}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port='443';}}obj.path=obj.path||'/';// define unique id
obj.id=obj.protocol+'://'+obj.host+':'+obj.port;// define href
obj.href=obj.protocol+'://'+obj.host+(loc&&loc.port==obj.port?'':':'+obj.port);return obj;}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"debug":19,"parseuri":51}],66:[function(require,module,exports){(function(global){/*global Blob,File*//**
             * Module requirements
             */var isArray=require('isarray');var isBuf=require('./is-buffer');/**
             * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
             * Anything with blobs or files should be fed through removeBlobs before coming
             * here.
             *
             * @param {Object} packet - socket.io event packet
             * @return {Object} with deconstructed packet and list of buffers
             * @api public
             */exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder;}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i]);}return newData;}else if('object'==(typeof data==="undefined"?"undefined":_typeof(data))&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key]);}return newData;}return data;}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;// number of binary 'attachments'
return{packet:pack,buffers:buffers};};/**
             * Reconstructs a binary packet from its placeholder packet and buffers
             *
             * @param {Object} packet - event packet with placeholders
             * @param {Array} buffers - binary buffers to put in placeholder positions
             * @return {Object} reconstructed packet
             * @api public
             */exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];// appropriate buffer (should be natural order anyway)
return buf;}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i]);}return data;}else if(data&&'object'==(typeof data==="undefined"?"undefined":_typeof(data))){for(var key in data){data[key]=_reconstructPacket(data[key]);}return data;}return data;}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;// no longer useful
return packet;};/**
             * Asynchronously removes Blobs or Files from data via
             * FileReader's readAsArrayBuffer method. Used before encoding
             * data as msgpack. Calls callback with the blobless data.
             *
             * @param {Object} data
             * @param {Function} callback
             * @api private
             */exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;// convert any blob
if(global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){pendingBlobs++;// async filereader
var fileReader=new FileReader();fileReader.onload=function(){// this.result == arraybuffer
if(containingObject){containingObject[curKey]=this.result;}else{bloblessData=this.result;}// if nothing pending its callback time
if(! --pendingBlobs){callback(bloblessData);}};fileReader.readAsArrayBuffer(obj);// blob -> arraybuffer
}else if(isArray(obj)){// handle array
for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj);}}else if(obj&&'object'==(typeof obj==="undefined"?"undefined":_typeof(obj))&&!isBuf(obj)){// and object
for(var key in obj){_removeBlobs(obj[key],key,obj);}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData);}};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./is-buffer":68,"isarray":42}],67:[function(require,module,exports){/**
         * Module dependencies.
         */var debug=require('debug')('socket.io-parser');var json=require('json3');var isArray=require('isarray');var Emitter=require('component-emitter');var binary=require('./binary');var isBuf=require('./is-buffer');/**
         * Protocol version.
         *
         * @api public
         */exports.protocol=4;/**
         * Packet types.
         *
         * @api public
         */exports.types=['CONNECT','DISCONNECT','EVENT','BINARY_EVENT','ACK','BINARY_ACK','ERROR'];/**
         * Packet type `connect`.
         *
         * @api public
         */exports.CONNECT=0;/**
         * Packet type `disconnect`.
         *
         * @api public
         */exports.DISCONNECT=1;/**
         * Packet type `event`.
         *
         * @api public
         */exports.EVENT=2;/**
         * Packet type `ack`.
         *
         * @api public
         */exports.ACK=3;/**
         * Packet type `error`.
         *
         * @api public
         */exports.ERROR=4;/**
         * Packet type 'binary event'
         *
         * @api public
         */exports.BINARY_EVENT=5;/**
         * Packet type `binary ack`. For acks with binary arguments.
         *
         * @api public
         */exports.BINARY_ACK=6;/**
         * Encoder constructor.
         *
         * @api public
         */exports.Encoder=Encoder;/**
         * Decoder constructor.
         *
         * @api public
         */exports.Decoder=Decoder;/**
         * A socket.io Encoder instance
         *
         * @api public
         */function Encoder(){}/**
         * Encode a packet as a single string if non-binary, or as a
         * buffer sequence, depending on packet type.
         *
         * @param {Object} obj - packet object
         * @param {Function} callback - function to handle encodings (likely engine.write)
         * @return Calls callback with Array of encodings
         * @api public
         */Encoder.prototype.encode=function(obj,callback){debug('encoding packet %j',obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback);}else{var encoding=encodeAsString(obj);callback([encoding]);}};/**
         * Encode packet as string.
         *
         * @param {Object} packet
         * @return {String} encoded
         * @api private
         */function encodeAsString(obj){var str='';var nsp=false;// first is type
str+=obj.type;// attachments if we have them
if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+='-';}// if we have a namespace other than `/`
// we append it followed by a comma `,`
if(obj.nsp&&'/'!=obj.nsp){nsp=true;str+=obj.nsp;}// immediately followed by the id
if(null!=obj.id){if(nsp){str+=',';nsp=false;}str+=obj.id;}// json data
if(null!=obj.data){if(nsp)str+=',';str+=json.stringify(obj.data);}debug('encoded %j as %s',obj,str);return str;}/**
         * Encode packet as 'buffer sequence' by removing blobs, and
         * deconstructing packet into object with placeholders and
         * a list of buffers.
         *
         * @param {Object} packet
         * @return {Buffer} encoded
         * @api private
         */function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);// add packet info to beginning of data list
callback(buffers);// write all the buffers
}binary.removeBlobs(obj,writeEncoding);}/**
         * A socket.io Decoder instance
         *
         * @return {Object} decoder
         * @api public
         */function Decoder(){this.reconstructor=null;}/**
         * Mix in `Emitter` with Decoder.
         */Emitter(Decoder.prototype);/**
         * Decodes an ecoded packet string into packet JSON.
         *
         * @param {String} obj - encoded packet
         * @return {Object} packet
         * @api public
         */Decoder.prototype.add=function(obj){var packet;if('string'==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){// binary packet's json
this.reconstructor=new BinaryReconstructor(packet);// no attachments, labeled binary but no binary data to follow
if(this.reconstructor.reconPack.attachments===0){this.emit('decoded',packet);}}else{// non-binary full packet
this.emit('decoded',packet);}}else if(isBuf(obj)||obj.base64){// raw binary data
if(!this.reconstructor){throw new Error('got binary data when not reconstructing a packet');}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){// received final buffer
this.reconstructor=null;this.emit('decoded',packet);}}}else{throw new Error('Unknown type: '+obj);}};/**
         * Decode a packet String (JSON data)
         *
         * @param {String} str
         * @return {Object} packet
         * @api private
         */function decodeString(str){var p={};var i=0;// look up type
p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();// look up attachments if type binary
if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){var buf='';while(str.charAt(++i)!='-'){buf+=str.charAt(i);if(i==str.length)break;}if(buf!=Number(buf)||str.charAt(i)!='-'){throw new Error('Illegal attachments');}p.attachments=Number(buf);}// look up namespace (if any)
if('/'==str.charAt(i+1)){p.nsp='';while(++i){var c=str.charAt(i);if(','==c)break;p.nsp+=c;if(i==str.length)break;}}else{p.nsp='/';}// look up id
var next=str.charAt(i+1);if(''!==next&&Number(next)==next){p.id='';while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break;}p.id+=str.charAt(i);if(i==str.length)break;}p.id=Number(p.id);}// look up json data
if(str.charAt(++i)){try{p.data=json.parse(str.substr(i));}catch(e){return error();}}debug('decoded %s as %j',str,p);return p;}/**
         * Deallocates a parser's resources
         *
         * @api public
         */Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction();}};/**
         * A manager of a binary event's 'buffer sequence'. Should
         * be constructed whenever a packet of type BINARY_EVENT is
         * decoded.
         *
         * @param {Object} packet
         * @return {BinaryReconstructor} initialized reconstructor
         * @api private
         */function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[];}/**
         * Method to be called when binary data received from connection
         * after a BINARY_EVENT packet.
         *
         * @param {Buffer | ArrayBuffer} binData - the raw binary data received
         * @return {null | Object} returns null if more binary data is expected or
         *   a reconstructed packet object if all buffers have been received.
         * @api private
         */BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){// done with buffer list
var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet;}return null;};/**
         * Cleans up binary packet reconstruction variables.
         *
         * @api private
         */BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[];};function error(data){return{type:exports.ERROR,data:'parser error'};}},{"./binary":66,"./is-buffer":68,"component-emitter":17,"debug":19,"isarray":42,"json3":43}],68:[function(require,module,exports){(function(global){module.exports=isBuf;/**
             * Returns true if obj is a buffer or an arraybuffer.
             *
             * @api private
             */function isBuf(obj){return global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer;}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],69:[function(require,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i<list.length;i++){array[i-index]=list[i];}return array;}},{}],70:[function(require,module,exports){(function(global){/*! https://mths.be/utf8js v2.0.0 by @mathias */;(function(root){// Detect free variables `exports`
var freeExports=(typeof exports==="undefined"?"undefined":_typeof(exports))=='object'&&exports;// Detect free variable `module`
var freeModule=(typeof module==="undefined"?"undefined":_typeof(module))=='object'&&module&&module.exports==freeExports&&module;// Detect free variable `global`, from Node.js or Browserified code,
// and use it as `root`
var freeGlobal=(typeof global==="undefined"?"undefined":_typeof(global))=='object'&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal;}/*--------------------------------------------------------------------------*/var stringFromCharCode=String.fromCharCode;// Taken from https://mths.be/punycode
function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=0xD800&&value<=0xDBFF&&counter<length){// high surrogate, and there is a next character
extra=string.charCodeAt(counter++);if((extra&0xFC00)==0xDC00){// low surrogate
output.push(((value&0x3FF)<<10)+(extra&0x3FF)+0x10000);}else{// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
output.push(value);counter--;}}else{output.push(value);}}return output;}// Taken from https://mths.be/punycode
function ucs2encode(array){var length=array.length;var index=-1;var value;var output='';while(++index<length){value=array[index];if(value>0xFFFF){value-=0x10000;output+=stringFromCharCode(value>>>10&0x3FF|0xD800);value=0xDC00|value&0x3FF;}output+=stringFromCharCode(value);}return output;}function checkScalarValue(codePoint){if(codePoint>=0xD800&&codePoint<=0xDFFF){throw Error('Lone surrogate U+'+codePoint.toString(16).toUpperCase()+' is not a scalar value');}}/*--------------------------------------------------------------------------*/function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&0x3F|0x80);}function encodeCodePoint(codePoint){if((codePoint&0xFFFFFF80)==0){// 1-byte sequence
return stringFromCharCode(codePoint);}var symbol='';if((codePoint&0xFFFFF800)==0){// 2-byte sequence
symbol=stringFromCharCode(codePoint>>6&0x1F|0xC0);}else if((codePoint&0xFFFF0000)==0){// 3-byte sequence
checkScalarValue(codePoint);symbol=stringFromCharCode(codePoint>>12&0x0F|0xE0);symbol+=createByte(codePoint,6);}else if((codePoint&0xFFE00000)==0){// 4-byte sequence
symbol=stringFromCharCode(codePoint>>18&0x07|0xF0);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6);}symbol+=stringFromCharCode(codePoint&0x3F|0x80);return symbol;}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString='';while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint);}return byteString;}/*--------------------------------------------------------------------------*/function readContinuationByte(){if(byteIndex>=byteCount){throw Error('Invalid byte index');}var continuationByte=byteArray[byteIndex]&0xFF;byteIndex++;if((continuationByte&0xC0)==0x80){return continuationByte&0x3F;}// If we end up here, it’s not a continuation byte
throw Error('Invalid continuation byte');}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error('Invalid byte index');}if(byteIndex==byteCount){return false;}// Read first byte
byte1=byteArray[byteIndex]&0xFF;byteIndex++;// 1-byte sequence (no continuation bytes)
if((byte1&0x80)==0){return byte1;}// 2-byte sequence
if((byte1&0xE0)==0xC0){var byte2=readContinuationByte();codePoint=(byte1&0x1F)<<6|byte2;if(codePoint>=0x80){return codePoint;}else{throw Error('Invalid continuation byte');}}// 3-byte sequence (may include unpaired surrogates)
if((byte1&0xF0)==0xE0){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&0x0F)<<12|byte2<<6|byte3;if(codePoint>=0x0800){checkScalarValue(codePoint);return codePoint;}else{throw Error('Invalid continuation byte');}}// 4-byte sequence
if((byte1&0xF8)==0xF0){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&0x0F)<<0x12|byte2<<0x0C|byte3<<0x06|byte4;if(codePoint>=0x010000&&codePoint<=0x10FFFF){return codePoint;}}throw Error('Invalid UTF-8 detected');}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp);}return ucs2encode(codePoints);}/*--------------------------------------------------------------------------*/var utf8={'version':'2.0.0','encode':utf8encode,'decode':utf8decode};// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(typeof define=='function'&&_typeof(define.amd)=='object'&&define.amd){define(function(){return utf8;});}else if(freeExports&&!freeExports.nodeType){if(freeModule){// in Node.js or RingoJS v0.8.0+
freeModule.exports=utf8;}else{// in Narwhal or RingoJS v0.7.0-
var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key]);}}}else{// in Rhino or a web browser
root.utf8=utf8;}})(this);}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],71:[function(require,module,exports){if(typeof Object.create==='function'){// implementation from standard node.js 'util' module
module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}});};}else{// old school shim for old browsers
module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function TempCtor(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor();ctor.prototype.constructor=ctor;};}},{}],72:[function(require,module,exports){module.exports=function isBuffer(arg){return arg&&(typeof arg==="undefined"?"undefined":_typeof(arg))==='object'&&typeof arg.copy==='function'&&typeof arg.fill==='function'&&typeof arg.readUInt8==='function';};},{}],73:[function(require,module,exports){(function(process,global){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp=/%[sdj%]/g;exports.format=function(f){if(!isString(f)){var objects=[];for(var i=0;i<arguments.length;i++){objects.push(inspect(arguments[i]));}return objects.join(' ');}var i=1;var args=arguments;var len=args.length;var str=String(f).replace(formatRegExp,function(x){if(x==='%%')return'%';if(i>=len)return x;switch(x){case'%s':return String(args[i++]);case'%d':return Number(args[i++]);case'%j':try{return JSON.stringify(args[i++]);}catch(_){return'[Circular]';}default:return x;}});for(var x=args[i];i<len;x=args[++i]){if(isNull(x)||!isObject(x)){str+=' '+x;}else{str+=' '+inspect(x);}}return str;};// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate=function(fn,msg){// Allow for deprecating things in the process of starting up.
if(isUndefined(global.process)){return function(){return exports.deprecate(fn,msg).apply(this,arguments);};}if(process.noDeprecation===true){return fn;}var warned=false;function deprecated(){if(!warned){if(process.throwDeprecation){throw new Error(msg);}else if(process.traceDeprecation){console.trace(msg);}else{console.error(msg);}warned=true;}return fn.apply(this,arguments);}return deprecated;};var debugs={};var debugEnviron;exports.debuglog=function(set){if(isUndefined(debugEnviron))debugEnviron=process.env.NODE_DEBUG||'';set=set.toUpperCase();if(!debugs[set]){if(new RegExp('\\b'+set+'\\b','i').test(debugEnviron)){var pid=process.pid;debugs[set]=function(){var msg=exports.format.apply(exports,arguments);console.error('%s %d: %s',set,pid,msg);};}else{debugs[set]=function(){};}}return debugs[set];};/**
             * Echos the value of a value. Trys to print the value out
             * in the best way possible given the different types.
             *
             * @param {Object} obj The object to print out.
             * @param {Object} opts Optional options object that alters the output.
             *//* legacy: obj, showHidden, depth, colors*/function inspect(obj,opts){// default options
var ctx={seen:[],stylize:stylizeNoColor};// legacy...
if(arguments.length>=3)ctx.depth=arguments[2];if(arguments.length>=4)ctx.colors=arguments[3];if(isBoolean(opts)){// legacy...
ctx.showHidden=opts;}else if(opts){// got an "options" object
exports._extend(ctx,opts);}// set default options
if(isUndefined(ctx.showHidden))ctx.showHidden=false;if(isUndefined(ctx.depth))ctx.depth=2;if(isUndefined(ctx.colors))ctx.colors=false;if(isUndefined(ctx.customInspect))ctx.customInspect=true;if(ctx.colors)ctx.stylize=stylizeWithColor;return formatValue(ctx,obj,ctx.depth);}exports.inspect=inspect;// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors={'bold':[1,22],'italic':[3,23],'underline':[4,24],'inverse':[7,27],'white':[37,39],'grey':[90,39],'black':[30,39],'blue':[34,39],'cyan':[36,39],'green':[32,39],'magenta':[35,39],'red':[31,39],'yellow':[33,39]};// Don't use 'blue' not visible on cmd.exe
inspect.styles={'special':'cyan','number':'yellow','boolean':'yellow','undefined':'grey','null':'bold','string':'green','date':'magenta',// "name": intentionally not styling
'regexp':'red'};function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];if(style){return"\x1B["+inspect.colors[style][0]+'m'+str+"\x1B["+inspect.colors[style][1]+'m';}else{return str;}}function stylizeNoColor(str,styleType){return str;}function arrayToHash(array){var hash={};array.forEach(function(val,idx){hash[val]=true;});return hash;}function formatValue(ctx,value,recurseTimes){// Provide a hook for user-specified inspect functions.
// Check that value is an object with an inspect function on it
if(ctx.customInspect&&value&&isFunction(value.inspect)&&// Filter out the util module, it's inspect function is special
value.inspect!==exports.inspect&&// Also filter out any prototype objects using the circular check.
!(value.constructor&&value.constructor.prototype===value)){var ret=value.inspect(recurseTimes,ctx);if(!isString(ret)){ret=formatValue(ctx,ret,recurseTimes);}return ret;}// Primitive types cannot have properties
var primitive=formatPrimitive(ctx,value);if(primitive){return primitive;}// Look up the keys of the object.
var keys=Object.keys(value);var visibleKeys=arrayToHash(keys);if(ctx.showHidden){keys=Object.getOwnPropertyNames(value);}// IE doesn't make error fields non-enumerable
// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
if(isError(value)&&(keys.indexOf('message')>=0||keys.indexOf('description')>=0)){return formatError(value);}// Some type of object without properties can be shortcutted.
if(keys.length===0){if(isFunction(value)){var name=value.name?': '+value.name:'';return ctx.stylize('[Function'+name+']','special');}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');}if(isDate(value)){return ctx.stylize(Date.prototype.toString.call(value),'date');}if(isError(value)){return formatError(value);}}var base='',array=false,braces=['{','}'];// Make Array say that they are Array
if(isArray(value)){array=true;braces=['[',']'];}// Make functions say that they are functions
if(isFunction(value)){var n=value.name?': '+value.name:'';base=' [Function'+n+']';}// Make RegExps say that they are RegExps
if(isRegExp(value)){base=' '+RegExp.prototype.toString.call(value);}// Make dates with properties first say the date
if(isDate(value)){base=' '+Date.prototype.toUTCString.call(value);}// Make error with message first say the error
if(isError(value)){base=' '+formatError(value);}if(keys.length===0&&(!array||value.length==0)){return braces[0]+base+braces[1];}if(recurseTimes<0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');}else{return ctx.stylize('[Object]','special');}}ctx.seen.push(value);var output;if(array){output=formatArray(ctx,value,recurseTimes,visibleKeys,keys);}else{output=keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array);});}ctx.seen.pop();return reduceToSingleString(output,base,braces);}function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize('undefined','undefined');if(isString(value)){var simple='\''+JSON.stringify(value).replace(/^"|"$/g,'').replace(/'/g,"\\'").replace(/\\"/g,'"')+'\'';return ctx.stylize(simple,'string');}if(isNumber(value))return ctx.stylize(''+value,'number');if(isBoolean(value))return ctx.stylize(''+value,'boolean');// For some reason typeof null is "object", so special case here.
if(isNull(value))return ctx.stylize('null','null');}function formatError(value){return'['+Error.prototype.toString.call(value)+']';}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i<l;++i){if(hasOwnProperty(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true));}else{output.push('');}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true));}});return output;}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]};if(desc.get){if(desc.set){str=ctx.stylize('[Getter/Setter]','special');}else{str=ctx.stylize('[Getter]','special');}}else{if(desc.set){str=ctx.stylize('[Setter]','special');}}if(!hasOwnProperty(visibleKeys,key)){name='['+key+']';}if(!str){if(ctx.seen.indexOf(desc.value)<0){if(isNull(recurseTimes)){str=formatValue(ctx,desc.value,null);}else{str=formatValue(ctx,desc.value,recurseTimes-1);}if(str.indexOf('\n')>-1){if(array){str=str.split('\n').map(function(line){return'  '+line;}).join('\n').substr(2);}else{str='\n'+str.split('\n').map(function(line){return'   '+line;}).join('\n');}}}else{str=ctx.stylize('[Circular]','special');}}if(isUndefined(name)){if(array&&key.match(/^\d+$/)){return str;}name=JSON.stringify(''+key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name=name.substr(1,name.length-2);name=ctx.stylize(name,'name');}else{name=name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");name=ctx.stylize(name,'string');}}return name+': '+str;}function reduceToSingleString(output,base,braces){var numLinesEst=0;var length=output.reduce(function(prev,cur){numLinesEst++;if(cur.indexOf('\n')>=0)numLinesEst++;return prev+cur.replace(/\u001b\[\d\d?m/g,'').length+1;},0);if(length>60){return braces[0]+(base===''?'':base+'\n ')+' '+output.join(',\n  ')+' '+braces[1];}return braces[0]+base+' '+output.join(', ')+' '+braces[1];}// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar){return Array.isArray(ar);}exports.isArray=isArray;function isBoolean(arg){return typeof arg==='boolean';}exports.isBoolean=isBoolean;function isNull(arg){return arg===null;}exports.isNull=isNull;function isNullOrUndefined(arg){return arg==null;}exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return typeof arg==='number';}exports.isNumber=isNumber;function isString(arg){return typeof arg==='string';}exports.isString=isString;function isSymbol(arg){return(typeof arg==="undefined"?"undefined":_typeof(arg))==='symbol';}exports.isSymbol=isSymbol;function isUndefined(arg){return arg===void 0;}exports.isUndefined=isUndefined;function isRegExp(re){return isObject(re)&&objectToString(re)==='[object RegExp]';}exports.isRegExp=isRegExp;function isObject(arg){return(typeof arg==="undefined"?"undefined":_typeof(arg))==='object'&&arg!==null;}exports.isObject=isObject;function isDate(d){return isObject(d)&&objectToString(d)==='[object Date]';}exports.isDate=isDate;function isError(e){return isObject(e)&&(objectToString(e)==='[object Error]'||e instanceof Error);}exports.isError=isError;function isFunction(arg){return typeof arg==='function';}exports.isFunction=isFunction;function isPrimitive(arg){return arg===null||typeof arg==='boolean'||typeof arg==='number'||typeof arg==='string'||(typeof arg==="undefined"?"undefined":_typeof(arg))==='symbol'||// ES6 symbol
typeof arg==='undefined';}exports.isPrimitive=isPrimitive;exports.isBuffer=require('./support/isBuffer');function objectToString(o){return Object.prototype.toString.call(o);}function pad(n){return n<10?'0'+n.toString(10):n.toString(10);}var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];// 26 Feb 16:19:34
function timestamp(){var d=new Date();var time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(':');return[d.getDate(),months[d.getMonth()],time].join(' ');}// log is just a thin wrapper to console.log that prepends a timestamp
exports.log=function(){console.log('%s - %s',timestamp(),exports.format.apply(exports,arguments));};/**
             * Inherit the prototype methods from one constructor into another.
             *
             * The Function.prototype.inherits from lang.js rewritten as a standalone
             * function (not on Function.prototype). NOTE: If this file is to be loaded
             * during bootstrapping this function needs to be rewritten using some native
             * functions as prototype setup using normal JavaScript does not work as
             * expected during bootstrapping (see mirror.js in r114903).
             *
             * @param {function} ctor Constructor function which needs to inherit the
             *     prototype.
             * @param {function} superCtor Constructor function to inherit prototype from.
             */exports.inherits=require('inherits');exports._extend=function(origin,add){// Don't do anything if add isn't an object
if(!add||!isObject(add))return origin;var keys=Object.keys(add);var i=keys.length;while(i--){origin[keys[i]]=add[keys[i]];}return origin;};function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./support/isBuffer":72,"_process":52,"inherits":71}],74:[function(require,module,exports){// created by @HenrikJoreteg
var prefix;var version;if(window.mozRTCPeerConnection||navigator.mozGetUserMedia){prefix='moz';version=parseInt(navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1],10);}else if(window.webkitRTCPeerConnection||navigator.webkitGetUserMedia){prefix='webkit';version=navigator.userAgent.match(/Chrom(e|ium)/)&&parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2],10);}var PC=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;var IceCandidate=window.mozRTCIceCandidate||window.RTCIceCandidate;var SessionDescription=window.mozRTCSessionDescription||window.RTCSessionDescription;var MediaStream=window.webkitMediaStream||window.MediaStream;var screenSharing=window.location.protocol==='https:'&&(prefix==='webkit'&&version>=26||prefix==='moz'&&version>=33);var AudioContext=window.AudioContext||window.webkitAudioContext;var videoEl=document.createElement('video');var supportVp8=videoEl&&videoEl.canPlayType&&videoEl.canPlayType('video/webm; codecs="vp8", vorbis')==="probably";var getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia;// export support flags and constructors.prototype && PC
module.exports={prefix:prefix,browserVersion:version,support:!!PC&&!!getUserMedia,// new support style
supportRTCPeerConnection:!!PC,supportVp8:supportVp8,supportGetUserMedia:!!getUserMedia,supportDataChannel:!!(PC&&PC.prototype&&PC.prototype.createDataChannel),supportWebAudio:!!(AudioContext&&AudioContext.prototype.createMediaStreamSource),supportMediaStream:!!(MediaStream&&MediaStream.prototype.removeTrack),supportScreenSharing:!!screenSharing,// constructors
AudioContext:AudioContext,PeerConnection:PC,SessionDescription:SessionDescription,IceCandidate:IceCandidate,MediaStream:MediaStream,getUserMedia:getUserMedia};},{}],75:[function(require,module,exports){/*
WildEmitter.js is a slim little event emitter by @henrikjoreteg largely based
on @visionmedia's Emitter from UI Kit.

Why? I wanted it standalone.

I also wanted support for wildcard emitters like this:

emitter.on('*', function (eventName, other, event, payloads) {

});

emitter.on('somenamespace*', function (eventName, payloads) {

});

Please note that callbacks triggered by wildcard registered events also get
the event name as the first argument.
*/module.exports=WildEmitter;function WildEmitter(){}WildEmitter.mixin=function(constructor){var prototype=constructor.prototype||constructor;prototype.isWildEmitter=true;// Listen on the given `event` with `fn`. Store a group name if present.
prototype.on=function(event,groupName,fn){this.callbacks=this.callbacks||{};var hasGroup=arguments.length===3,group=hasGroup?arguments[1]:undefined,func=hasGroup?arguments[2]:arguments[1];func._groupName=group;(this.callbacks[event]=this.callbacks[event]||[]).push(func);return this;};// Adds an `event` listener that will be invoked a single
// time then automatically removed.
prototype.once=function(event,groupName,fn){var self=this,hasGroup=arguments.length===3,group=hasGroup?arguments[1]:undefined,func=hasGroup?arguments[2]:arguments[1];function on(){self.off(event,on);func.apply(this,arguments);}this.on(event,group,on);return this;};// Unbinds an entire group
prototype.releaseGroup=function(groupName){this.callbacks=this.callbacks||{};var item,i,len,handlers;for(item in this.callbacks){handlers=this.callbacks[item];for(i=0,len=handlers.length;i<len;i++){if(handlers[i]._groupName===groupName){//console.log('removing');
// remove it and shorten the array we're looping through
handlers.splice(i,1);i--;len--;}}}return this;};// Remove the given callback for `event` or all
// registered callbacks.
prototype.off=function(event,fn){this.callbacks=this.callbacks||{};var callbacks=this.callbacks[event],i;if(!callbacks)return this;// remove all handlers
if(arguments.length===1){delete this.callbacks[event];return this;}// remove specific handler
i=callbacks.indexOf(fn);callbacks.splice(i,1);if(callbacks.length===0){delete this.callbacks[event];}return this;};/// Emit `event` with the given args.
// also calls any `*` handlers
prototype.emit=function(event){this.callbacks=this.callbacks||{};var args=[].slice.call(arguments,1),callbacks=this.callbacks[event],specialCallbacks=this.getWildcardCallbacks(event),i,len,item,listeners;if(callbacks){listeners=callbacks.slice();for(i=0,len=listeners.length;i<len;++i){if(!listeners[i]){break;}listeners[i].apply(this,args);}}if(specialCallbacks){len=specialCallbacks.length;listeners=specialCallbacks.slice();for(i=0,len=listeners.length;i<len;++i){if(!listeners[i]){break;}listeners[i].apply(this,[event].concat(args));}}return this;};// Helper for for finding special wildcard event handlers that match the event
prototype.getWildcardCallbacks=function(eventName){this.callbacks=this.callbacks||{};var item,split,result=[];for(item in this.callbacks){split=item.split('*');if(item==='*'||split.length===2&&eventName.slice(0,split[0].length)===split[0]){result=result.concat(this.callbacks[item]);}}return result;};};WildEmitter.mixin(WildEmitter);},{}],76:[function(require,module,exports){/**
         * Module dependencies.
         */var global=window;//(function() { return this; })();
/**
         * WebSocket constructor.
         */var WebSocket=global.WebSocket||global.MozWebSocket;/**
         * Module exports.
         */module.exports=WebSocket?ws:null;/**
         * WebSocket constructor.
         *
         * The third `opts` options object gets ignored in web browsers, since it's
         * non-standard, and throws a TypeError if passed to the constructor.
         * See: https://github.com/einaros/ws/issues/227
         *
         * @param {String} uri
         * @param {Array} protocols (optional)
         * @param {Object) opts (optional)
         * @api public
         */function ws(uri,protocols,opts){var instance;if(protocols){instance=new WebSocket(uri,protocols);}else{instance=new WebSocket(uri);}return instance;}if(WebSocket)ws.prototype=WebSocket.prototype;},{}],77:[function(require,module,exports){var util=require('util');var webrtcSupport=require('webrtcsupport');var PeerConnection=require('rtcpeerconnection');var WildEmitter=require('wildemitter');var FileTransfer=require('filetransfer');// the inband-v1 protocol is sending metadata inband in a serialized JSON object
// followed by the actual data. Receiver closes the datachannel upon completion
var INBAND_FILETRANSFER_V1='https://simplewebrtc.com/protocol/filetransfer#inband-v1';function isAllTracksEnded(stream){var isAllTracksEnded=true;stream.getTracks().forEach(function(t){isAllTracksEnded=t.readyState==='ended'&&isAllTracksEnded;});return isAllTracksEnded;}function Peer(options){///MLUpdate///
this.chunkedMessages=new Object();this.nickName=options.nickName;this.mode=options.mode;///MLUpdate///
var self=this;// call emitter constructor
WildEmitter.call(this);this.id=options.id;this.parent=options.parent;this.type=options.type||'video';this.oneway=options.oneway||false;this.sharemyscreen=options.sharemyscreen||false;this.browserPrefix=options.prefix;this.stream=options.stream;this.enableDataChannels=options.enableDataChannels===undefined?this.parent.config.enableDataChannels:options.enableDataChannels;this.receiveMedia=options.receiveMedia||this.parent.config.receiveMedia;this.channels={};this.sid=options.sid||Date.now().toString();// Create an RTCPeerConnection via the polyfill
///MLUpdate///
var params={vidEncoder:options.vidEncoder,vidBitrate:options.vidBitrate,audEncoder:options.audEncoder,audBitrate:options.audBitrate///MLUpdate///
};this.pc=new PeerConnection(this.parent.config.peerConnectionConfig,this.parent.config.peerConnectionConstraints,params);this.pc.on('ice',this.onIceCandidate.bind(this));this.pc.on('endOfCandidates',function(event){self.send('endOfCandidates',event);});this.pc.on('offer',function(offer){if(self.parent.config.nick)offer.nick=self.parent.config.nick;self.send('offer',offer);});this.pc.on('answer',function(answer){if(self.parent.config.nick)answer.nick=self.parent.config.nick;self.send('answer',answer);});this.pc.on('addStream',this.handleRemoteStreamAdded.bind(this));this.pc.on('addChannel',this.handleDataChannelAdded.bind(this));this.pc.on('removeStream',this.handleStreamRemoved.bind(this));// Just fire negotiation needed events for now
// When browser re-negotiation handling seems to work
// we can use this as the trigger for starting the offer/answer process
// automatically. We'll just leave it be for now while this stabalizes.
this.pc.on('negotiationNeeded',this.emit.bind(this,'negotiationNeeded'));this.pc.on('iceConnectionStateChange',this.emit.bind(this,'iceConnectionStateChange'));this.pc.on('iceConnectionStateChange',function(){switch(self.pc.iceConnectionState){case'failed':// currently, in chrome only the initiator goes to failed
// so we need to signal this to the peer
if(self.pc.pc.localDescription.type==='offer'){self.parent.emit('iceFailed',self);self.send('connectivityError');}break;}});this.pc.on('signalingStateChange',this.emit.bind(this,'signalingStateChange'));this.logger=this.parent.logger;// handle screensharing/broadcast mode
if(options.type==='screen'){if(this.parent.localScreens&&this.parent.localScreens[0]&&this.sharemyscreen){this.logger.log('adding local screen stream to peer connection');this.pc.addStream(this.parent.localScreens[0]);this.broadcaster=options.broadcaster;}}else{this.parent.localStreams.forEach(function(stream){self.pc.addStream(stream);});}this.on('channelOpen',function(channel){///MLUpdate///
this.parent.emit('dataChannelOpened',channel,this);///MLUpdate///
if(channel.protocol===INBAND_FILETRANSFER_V1){channel.onmessage=function(event){var metadata=JSON.parse(event.data);var receiver=new FileTransfer.Receiver();receiver.receive(metadata,channel);self.emit('fileTransfer',metadata,receiver);receiver.on('receivedFile',function(file,metadata){receiver.channel.close();});};}});// proxy events to parent
this.on('*',function(){self.parent.emit.apply(self.parent,arguments);});}util.inherits(Peer,WildEmitter);Peer.prototype.handleMessage=function(message){var self=this;this.logger.log('getting',message.type,message);if(message.prefix)this.browserPrefix=message.prefix;if(message.type==='offer'){if(!this.nick)this.nick=message.payload.nick;delete message.payload.nick;this.pc.handleOffer(message.payload,function(err){if(err){return;}// auto-accept
self.pc.answer(function(err,sessionDescription){//self.send('answer', sessionDescription);
});});}else if(message.type==='answer'){if(!this.nick)this.nick=message.payload.nick;delete message.payload.nick;this.pc.handleAnswer(message.payload);}else if(message.type==='candidate'){this.pc.processIce(message.payload);}else if(message.type==='connectivityError'){this.parent.emit('connectivityError',self);}else if(message.type==='mute'){this.parent.emit('mute',{id:message.from,name:message.payload.name});}else if(message.type==='unmute'){this.parent.emit('unmute',{id:message.from,name:message.payload.name});}else if(message.type==='endOfCandidates'){// Edge requires an end-of-candidates. Since only Edge will have mLines or tracks on the
// shim this will only be called in Edge.
var mLines=this.pc.pc.transceivers||[];mLines.forEach(function(mLine){if(mLine.iceTransport){mLine.iceTransport.addRemoteCandidate({});}});}else if(message.type==='customMessage'){this.parent.emit('customMessage',{id:message.from,message:message.payload});}};// send via signalling channel
Peer.prototype.send=function(messageType,payload){var message={to:this.id,sid:this.sid,broadcaster:this.broadcaster,roomType:this.type,type:messageType,payload:payload,prefix:webrtcSupport.prefix};this.logger.log('sending',messageType,message);this.parent.emit('message',message);};// send via data channel
// returns true when message was sent and false if channel is not open
Peer.prototype.sendDirectly=function(channel,messageType,payload){var message={type:messageType,payload:payload};this.logger.log('sending via datachannel',channel,messageType,message);var dc=this.getDataChannel(channel);if(dc.readyState!='open')return false;var splitted=message.payload.match(/(.|[\r\10000]){1,10000}/g);function guid(){function s4(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);}return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4();}//Chunkify message and send through datachannel
var guid=guid();for(var i=0;i<splitted.length;i++){message.payload=splitted[i];message.messageId=guid;message.chunk=i;message.chunksCount=splitted.length;dc.send(JSON.stringify(message));}return true;};// Internal method registering handlers for a data channel and emitting events on the peer
Peer.prototype._observeDataChannel=function(channel){var self=this;channel.onclose=this.emit.bind(this,'channelClose',channel);channel.onerror=this.emit.bind(this,'channelError',channel);channel.onmessage=function(event){var message=JSON.parse(event.data);var nChunksCount=parseInt(message.chunksCount,10);var nChunk=parseInt(message.chunk,10);if(message.chunksCount&&nChunksCount>1){if(self.chunkedMessages[message.messageId]){var temp=self.chunkedMessages[message.messageId];self.chunkedMessages[message.messageId]=temp+message.payload;if(nChunksCount==nChunk+1){message.payload=self.chunkedMessages[message.messageId];delete self.chunkedMessages[message.messageId];}else return;}else if(message.chunk==0){self.chunkedMessages[message.messageId]=message.payload;return;}}self.emit('channelMessage',self,channel.label,message,channel,event);};channel.onopen=this.emit.bind(this,'channelOpen',channel);};// Fetch or create a data channel by the given name
Peer.prototype.getDataChannel=function(name,opts){if(!webrtcSupport.supportDataChannel)return this.emit('error',new Error('createDataChannel not supported'));var channel=this.channels[name];opts||(opts={});if(channel)return channel;// if we don't have one by this label, create it
channel=this.channels[name]=this.pc.createDataChannel(name,opts);this._observeDataChannel(channel);return channel;};Peer.prototype.onIceCandidate=function(candidate){if(this.closed)return;if(candidate){var pcConfig=this.parent.config.peerConnectionConfig;if(webrtcSupport.prefix==='moz'&&pcConfig&&pcConfig.iceTransports&&candidate.candidate&&candidate.candidate.candidate&&candidate.candidate.candidate.indexOf(pcConfig.iceTransports)<0){this.logger.log('Ignoring ice candidate not matching pcConfig iceTransports type: ',pcConfig.iceTransports);}else{this.send('candidate',candidate);}}else{this.logger.log("End of candidates.");}};Peer.prototype.start=function(){var self=this;// well, the webrtc api requires that we either
// a) create a datachannel a priori
// b) do a renegotiation later to add the SCTP m-line
// Let's do (a) first...
if(this.enableDataChannels){this.getDataChannel('simplewebrtc');}this.pc.offer(this.receiveMedia,function(err,sessionDescription){//self.send('offer', sessionDescription);
});};Peer.prototype.icerestart=function(){var constraints=this.receiveMedia;constraints.mandatory.IceRestart=true;this.pc.offer(constraints,function(err,success){});};Peer.prototype.end=function(){if(this.closed)return;this.pc.close();this.handleStreamRemoved();};Peer.prototype.handleRemoteStreamAdded=function(event){var self=this;if(this.stream){this.logger.warn('Already have a remote stream');}else{this.stream=event.stream;this.stream.getTracks().forEach(function(track){track.addEventListener('ended',function(){if(isAllTracksEnded(self.stream)){self.end();}});});this.parent.emit('peerStreamAdded',this);}};Peer.prototype.handleStreamRemoved=function(){var peerIndex=this.parent.peers.indexOf(this);if(peerIndex>-1){this.parent.peers.splice(peerIndex,1);this.closed=true;this.parent.emit('peerStreamRemoved',this);this.pc=null;}};Peer.prototype.handleDataChannelAdded=function(channel){this.channels[channel.label]=channel;this._observeDataChannel(channel);};Peer.prototype.sendFile=function(file){var sender=new FileTransfer.Sender();var dc=this.getDataChannel('filetransfer'+new Date().getTime(),{protocol:INBAND_FILETRANSFER_V1});// override onopen
dc.onopen=function(){dc.send(JSON.stringify({size:file.size,name:file.name}));sender.send(file,dc);};// override onclose
dc.onclose=function(){console.log('sender received transfer');sender.emit('complete');};return sender;};module.exports=Peer;},{"filetransfer":35,"rtcpeerconnection":53,"util":73,"webrtcsupport":74,"wildemitter":75}],78:[function(require,module,exports){var WebRTC=require('./webrtc');var WildEmitter=require('wildemitter');var webrtcSupport=require('webrtcsupport');var attachMediaStream=require('attachmediastream');var mockconsole=require('mockconsole');var SocketIoConnection=require('./socketioconnection');function SimpleWebRTC(opts){var self=this;var options=opts||{};var config=this.config={target:'',url:'https://sandbox.simplewebrtc.com:443/',socketio:{/* 'force new connection':true*/},connection:null,debug:false,localVideoEl:'',remoteVideosEl:'',enableDataChannels:true,autoRequestMedia:false,autoRemoveVideos:true,adjustPeerVolume:false,peerVolumeWhenSpeaking:0.25,media:{video:true,audio:true},receiveMedia:{offerToReceiveAudio:1,offerToReceiveVideo:1},localVideo:{autoplay:true,mirror:true,muted:true}};var item,connection;// We also allow a 'logger' option. It can be any object that implements
// log, warn, and error methods.
// We log nothing by default, following "the rule of silence":
// http://www.linfo.org/rule_of_silence.html
this.logger=function(){// we assume that if you're in debug mode and you didn't
// pass in a logger, you actually want to log as much as
// possible.
if(opts.debug){return opts.logger||console;}else{// or we'll use your logger which should have its own logic
// for output. Or we'll return the no-op.
return opts.logger||mockconsole;}}();// set our config from options
for(item in options){if(options.hasOwnProperty(item)){this.config[item]=options[item];}}// attach detected support for convenience
this.capabilities=webrtcSupport;// call WildEmitter constructor
WildEmitter.call(this);// create default SocketIoConnection if it's not passed in
if(this.config.connection===null){connection=this.connection=new SocketIoConnection(this.config);}else{connection=this.connection=this.config.connection;}connection.on('connect',function(){self.emit('connectionReady',connection.getSessionid());self.sessionReady=true;self.testReadiness();});connection.on('message',function(message){var peers=self.webrtc.getPeers(message.from,message.roomType);var peer;if(message.type==='offer'){if(peers.length){peers.forEach(function(p){if(p.sid==message.sid)peer=p;});//if (!peer) peer = peers[0]; // fallback for old protocol versions
}if(!peer){peer=self.webrtc.createPeer({id:message.from,sid:message.sid,nickName:message.fromNickName,type:message.roomType,enableDataChannels:self.config.enableDataChannels&&message.roomType!=='screen',sharemyscreen:message.roomType==='screen'&&!message.broadcaster,broadcaster:message.roomType==='screen'&&!message.broadcaster?self.connection.getSessionid():null});self.emit('createdPeer',peer);}peer.handleMessage(message);}else if(peers.length){peers.forEach(function(peer){if(message.sid){if(peer.sid===message.sid){peer.handleMessage(message);}}else{peer.handleMessage(message);}});}});connection.on('remove',function(room){if(room.id!==self.connection.getSessionid()){self.webrtc.removePeers(room.id,room.type);}});// instantiate our main WebRTC helper
// using same logger from logic here
opts.logger=this.logger;opts.debug=false;this.webrtc=new WebRTC(opts);// attach a few methods from underlying lib to simple.
['mute','unmute','pauseVideo','resumeVideo','pause','resume','sendToAll','sendDirectlyToAll','getPeers'].forEach(function(method){self[method]=self.webrtc[method].bind(self.webrtc);});// proxy events from WebRTC
this.webrtc.on('*',function(){self.emit.apply(self,arguments);});// log all events in debug mode
if(config.debug){this.on('*',this.logger.log.bind(this.logger,'SimpleWebRTC event:'));}// check for readiness
this.webrtc.on('localStream',function(){self.testReadiness();});this.webrtc.on('message',function(payload){self.connection.emit('message',payload);});this.webrtc.on('peerStreamAdded',this.handlePeerStreamAdded.bind(this));this.webrtc.on('peerStreamRemoved',this.handlePeerStreamRemoved.bind(this));// echo cancellation attempts
if(this.config.adjustPeerVolume){this.webrtc.on('speaking',this.setVolumeForAll.bind(this,this.config.peerVolumeWhenSpeaking));this.webrtc.on('stoppedSpeaking',this.setVolumeForAll.bind(this,1));}connection.on('stunservers',function(args){// resets/overrides the config
//Changes url to urls
var length=args.length;if(length>0){self.webrtc.config.peerConnectionConfig.iceServers=[];for(var i=0;i<length;i++){if(args[i].url)self.webrtc.config.peerConnectionConfig.iceServers.push({"urls":args[i].url});else self.webrtc.config.peerConnectionConfig.iceServers.push(args[i]);}}self.emit('stunservers',self.webrtc.config.peerConnectionConfig.iceServers);});connection.on('turnservers',function(args){// appends to the config
self.webrtc.config.peerConnectionConfig.iceServers=self.webrtc.config.peerConnectionConfig.iceServers.concat(args);self.emit('turnservers',args);});connection.on('loginjanusrequest',function(args){var peer=self.webrtc.createPeer({id:'janus',type:'video',// nickName: client.nickName,
mode:'sender',//vidEncoder: client.vidEncoder,
//vidBitrate: client.vidBitrate,
//audEncoder: client.audEncoder,
//audBitrate: client.audBitrate,
enableDataChannels:false,receiveMedia:{offerToReceiveAudio:1,offerToReceiveVideo:1}});self.emit('createdPeer',peer);peer.start();});this.webrtc.on('iceFailed',function(peer){// local ice failure
});this.webrtc.on('connectivityError',function(peer){// remote ice failure
});// sending mute/unmute to all peers
this.webrtc.on('audioOn',function(){self.webrtc.sendToAll('unmute',{name:'audio'});});this.webrtc.on('audioOff',function(){self.webrtc.sendToAll('mute',{name:'audio'});});this.webrtc.on('videoOn',function(){self.webrtc.sendToAll('unmute',{name:'video'});});this.webrtc.on('videoOff',function(){self.webrtc.sendToAll('mute',{name:'video'});});// screensharing events
this.webrtc.on('localScreen',function(stream){var item,el=document.createElement('video'),container=self.getRemoteVideoContainer();el.oncontextmenu=function(){return false;};el.id='localScreen';attachMediaStream(stream,el);if(container){container.appendChild(el);}self.emit('localScreenAdded',el);self.connection.emit('shareScreen');self.webrtc.peers.forEach(function(existingPeer){var peer;if(existingPeer.type==='video'){peer=self.webrtc.createPeer({id:existingPeer.id,nickName:existingPeer.nickName,mode:existingPeer.mode,type:'screen',sharemyscreen:true,enableDataChannels:false,receiveMedia:{offerToReceiveAudio:0,offerToReceiveVideo:0},broadcaster:self.connection.getSessionid()});self.emit('createdPeer',peer);peer.start();}});});this.webrtc.on('localScreenStopped',function(stream){if(self.getLocalScreen()){self.stopScreenShare();}/*
        self.connection.emit('unshareScreen');
        self.webrtc.peers.forEach(function (peer) {
            if (peer.sharemyscreen) {
                peer.end();
            }
        });
        */});this.webrtc.on('channelMessage',function(peer,label,data){if(data.type=='volume'){self.emit('remoteVolumeChange',peer,data.volume);}});if(this.config.autoRequestMedia)this.startLocalVideo();}SimpleWebRTC.prototype=Object.create(WildEmitter.prototype,{constructor:{value:SimpleWebRTC}});SimpleWebRTC.prototype.leaveRoom=function(){if(this.roomName){this.connection.emit('leave');while(this.webrtc.peers.length){this.webrtc.peers[0].end();}if(this.getLocalScreen()){this.stopScreenShare();}this.emit('leftRoom',this.roomName);this.roomName=undefined;}};SimpleWebRTC.prototype.disconnect=function(){this.connection.disconnect();delete this.connection;};///MLUpdate///
SimpleWebRTC.prototype.sendDataChannelMessageToAll=function(message){this.webrtc.sendDirectlyToAll('simplewebrtc','custommessage',message);};SimpleWebRTC.prototype.sendDataChannelMessageToPeer=function(peerId,message){var foundId=false;this.webrtc.peers.forEach(function(peer){if(peer.enableDataChannels&&peer.id==peerId){peer.sendDirectly('simplewebrtc','custommessage',message);foundId=true;}});//Try to find peer by name
if(!foundId){this.webrtc.peers.forEach(function(peer){if(peer.enableDataChannels&&peer.nickName==peerId){peer.sendDirectly('simplewebrtc','custommessage',message);}});}};///MLUpdate///
SimpleWebRTC.prototype.handlePeerStreamAdded=function(peer){var self=this;var container=this.getRemoteVideoContainer();var video=attachMediaStream(peer.stream);// store video element as part of peer for easy removal
peer.videoEl=video;video.id=this.getDomId(peer);if(container)container.appendChild(video);this.emit('videoAdded',video,peer);// send our mute status to new peer if we're muted
// currently called with a small delay because it arrives before
// the video element is created otherwise (which happens after
// the async setRemoteDescription-createAnswer)
window.setTimeout(function(){if(!self.webrtc.isAudioEnabled()){peer.send('mute',{name:'audio'});}if(!self.webrtc.isVideoEnabled()){peer.send('mute',{name:'video'});}},250);};SimpleWebRTC.prototype.handlePeerStreamRemoved=function(peer){var container=this.getRemoteVideoContainer();var videoEl=peer.videoEl;if(this.config.autoRemoveVideos&&container&&videoEl){container.removeChild(videoEl);}if(videoEl)this.emit('videoRemoved',videoEl,peer);};SimpleWebRTC.prototype.getDomId=function(peer){return[peer.id,peer.type,peer.broadcaster?'broadcasting':'incoming'].join('_');};// set volume on video tag for all peers takse a value between 0 and 1
SimpleWebRTC.prototype.setVolumeForAll=function(volume){this.webrtc.peers.forEach(function(peer){if(peer.videoEl)peer.videoEl.volume=volume;});};SimpleWebRTC.prototype.joinRoom=function(name,cb){var self=this;this.roomName=name;this.connection.emit('join',name,function(err,roomDescription){console.log('join CB',err,roomDescription);if(err){self.emit('error',err);}else{var id,client,type,peer;for(id in roomDescription.clients){client=roomDescription.clients[id];for(type in client){if(self.config.target){if(typeof client[type]==='boolean'&&client[type]&&(id==self.config.target||client.nickName==self.config.target)){peer=self.webrtc.createPeer({id:id,type:type,nickName:client.nickName,mode:client.mode,vidEncoder:client.vidEncoder,vidBitrate:client.vidBitrate,audEncoder:client.audEncoder,audBitrate:client.audBitrate,enableDataChannels:self.config.enableDataChannels&&type!=='screen',receiveMedia:{offerToReceiveAudio:type!=='screen'&&self.config.receiveMedia.offerToReceiveAudio?1:0,offerToReceiveVideo:self.config.receiveMedia.offerToReceiveVideo}});self.emit('createdPeer',peer);if(client.multicastType&&client.multicastType=='janus'){var janusLisnterMsg={to:id,toName:client.nickName,type:'januslistner'};self.connection.emit('message',janusLisnterMsg);}else peer.start();}}else{if(typeof client[type]==='boolean'&&client[type]){peer=self.webrtc.createPeer({id:id,type:type,nickName:client.nickName,mode:client.mode,vidEncoder:client.vidEncoder,vidBitrate:client.vidBitrate,audEncoder:client.audEncoder,audBitrate:client.audBitrate,enableDataChannels:self.config.enableDataChannels&&type!=='screen',receiveMedia:{offerToReceiveAudio:type!=='screen'&&self.config.receiveMedia.offerToReceiveAudio?1:0,offerToReceiveVideo:self.config.receiveMedia.offerToReceiveVideo}});self.emit('createdPeer',peer);peer.start();}}}}}if(cb)cb(err,roomDescription);self.emit('joinedRoom',name);});};SimpleWebRTC.prototype.getEl=function(idOrEl){if(typeof idOrEl==='string'){return document.getElementById(idOrEl);}else{return idOrEl;}};SimpleWebRTC.prototype.startLocalVideo=function(){var self=this;this.webrtc.start(this.config.media,function(err,stream){if(err){self.emit('localMediaError',err);}else{attachMediaStream(stream,self.getLocalVideoContainer(),self.config.localVideo);}});};SimpleWebRTC.prototype.stopLocalVideo=function(){this.webrtc.stop();};// this accepts either element ID or element
// and either the video tag itself or a container
// that will be used to put the video tag into.
SimpleWebRTC.prototype.getLocalVideoContainer=function(){var el=this.getEl(this.config.localVideoEl);if(el&&el.tagName==='VIDEO'){el.oncontextmenu=function(){return false;};return el;}else if(el){var video=document.createElement('video');video.oncontextmenu=function(){return false;};el.appendChild(video);return video;}else{return;}};SimpleWebRTC.prototype.getRemoteVideoContainer=function(){return this.getEl(this.config.remoteVideosEl);};SimpleWebRTC.prototype.shareScreen=function(cb){this.webrtc.startScreenShare(cb);};SimpleWebRTC.prototype.getLocalScreen=function(){return this.webrtc.localScreens&&this.webrtc.localScreens[0];};SimpleWebRTC.prototype.stopScreenShare=function(){this.connection.emit('unshareScreen');var videoEl=document.getElementById('localScreen');var container=this.getRemoteVideoContainer();if(this.config.autoRemoveVideos&&container&&videoEl){container.removeChild(videoEl);}// a hack to emit the event the removes the video
// element that we want
if(videoEl){this.emit('videoRemoved',videoEl);}if(this.getLocalScreen()){this.webrtc.stopScreenShare();}this.webrtc.peers.forEach(function(peer){if(peer.broadcaster){peer.end();}});};SimpleWebRTC.prototype.testReadiness=function(){var self=this;if(this.sessionReady){self.emit('readyToCall',self.connection.getSessionid());//if (!this.config.media.video && !this.config.media.audio) {
//    self.emit('readyToCall', self.connection.getSessionid());
//} else if (this.webrtc.localStreams.length > 0) {
//    self.emit('readyToCall', self.connection.getSessionid());
//}
}};SimpleWebRTC.prototype.createRoom=function(name,cb){this.roomName=name;if(arguments.length===2){this.connection.emit('create',name,cb);}else{this.connection.emit('create',name);}};SimpleWebRTC.prototype.sendFile=function(){if(!webrtcSupport.dataChannel){return this.emit('error',new Error('DataChannelNotSupported'));}};SimpleWebRTC.prototype.getNickName=function(){if(this.nickName){return this.nickName;}};SimpleWebRTC.prototype.setNickName=function(nickName){if(nickName&&typeof nickName==='string'){this.nickName=nickName;this.connection.emit('nickname',nickName);}};SimpleWebRTC.prototype.setInfo=function(nickName,strongId,mode,multicast){if(arguments.length>1){var nick=nickName||'';var sId=strongId||'';var mod=mode||'';var mc=multicast||'';if(nickName)this.nickName=nickName;if(strongId&&!this.strongId)this.strongId=strongId;if(mode)this.mode=mode;if(multicast)this.multicastType=multicast;this.connection.emit('setinfo',{nickName:nick,strongId:sId,mode:mod,multicastType:mc});}else if(arguments.length==1&&(typeof nickName==="undefined"?"undefined":_typeof(nickName))=='object'){this.connection.emit('setinfo',nickName);}};module.exports=SimpleWebRTC;},{"./socketioconnection":79,"./webrtc":80,"attachmediastream":3,"mockconsole":46,"webrtcsupport":74,"wildemitter":75}],79:[function(require,module,exports){var io=require('socket.io-client');function SocketIoConnection(config){this.connection=io.connect(config.url,config.socketio);}SocketIoConnection.prototype.on=function(ev,fn){this.connection.on(ev,fn);};SocketIoConnection.prototype.emit=function(){this.connection.emit.apply(this.connection,arguments);};SocketIoConnection.prototype.getSessionid=function(){return this.connection.id;};SocketIoConnection.prototype.disconnect=function(){return this.connection.disconnect();};module.exports=SocketIoConnection;},{"socket.io-client":60}],80:[function(require,module,exports){var util=require('util');var webrtcSupport=require('webrtcsupport');var mockconsole=require('mockconsole');var localMedia=require('localmedia');var Peer=require('./peer');function WebRTC(opts){var self=this;var options=opts||{};var config=this.config={debug:false,// makes the entire PC config overridable
peerConnectionConfig:{},peerConnectionConstraints:{optional:[]},receiveMedia:{offerToReceiveAudio:1,offerToReceiveVideo:1},enableDataChannels:true};var item;if(options.iceServers){config.peerConnectionConfig.iceServersiceServers=options.iceServers;}// We also allow a 'logger' option. It can be any object that implements
// log, warn, and error methods.
// We log nothing by default, following "the rule of silence":
// http://www.linfo.org/rule_of_silence.html
this.logger=function(){// we assume that if you're in debug mode and you didn't
// pass in a logger, you actually want to log as much as
// possible.
if(opts.debug){return opts.logger||console;}else{// or we'll use your logger which should have its own logic
// for output. Or we'll return the no-op.
return opts.logger||mockconsole;}}();// set options
for(item in options){if(options.hasOwnProperty(item)){this.config[item]=options[item];}}// check for support
if(!webrtcSupport.support){this.logger.error('Your browser doesn\'t seem to support WebRTC');}// where we'll store our peer connections
this.peers=[];// call localMedia constructor
localMedia.call(this,this.config);this.on('speaking',function(){if(!self.hardMuted){// FIXME: should use sendDirectlyToAll, but currently has different semantics wrt payload
self.peers.forEach(function(peer){if(peer.enableDataChannels){var dc=peer.getDataChannel('hark');if(dc.readyState!='open')return;dc.send(JSON.stringify({type:'speaking'}));}});}});this.on('stoppedSpeaking',function(){if(!self.hardMuted){// FIXME: should use sendDirectlyToAll, but currently has different semantics wrt payload
self.peers.forEach(function(peer){if(peer.enableDataChannels){var dc=peer.getDataChannel('hark');if(dc.readyState!='open')return;dc.send(JSON.stringify({type:'stoppedSpeaking'}));}});}});this.on('volumeChange',function(volume,treshold){if(!self.hardMuted){// FIXME: should use sendDirectlyToAll, but currently has different semantics wrt payload
self.peers.forEach(function(peer){if(peer.enableDataChannels){var dc=peer.getDataChannel('hark');if(dc.readyState!='open')return;dc.send(JSON.stringify({type:'volume',volume:volume}));}});}});// log events in debug mode
if(this.config.debug){this.on('*',function(event,val1,val2){var logger;// if you didn't pass in a logger and you explicitly turning on debug
// we're just going to assume you're wanting log output with console
if(self.config.logger===mockconsole){logger=console;}else{logger=self.logger;}logger.log('event:',event,val1,val2);});}}util.inherits(WebRTC,localMedia);WebRTC.prototype.createPeer=function(opts){var peer;opts.parent=this;peer=new Peer(opts);this.peers.push(peer);return peer;};// removes peers
WebRTC.prototype.removePeers=function(id,type){this.getPeers(id,type).forEach(function(peer){peer.end();});};// fetches all Peer objects by session id and/or type
WebRTC.prototype.getPeers=function(sessionId,type){return this.peers.filter(function(peer){return(!sessionId||peer.id===sessionId)&&(!type||peer.type===type);});};// sends message to all
WebRTC.prototype.sendToAll=function(message,payload){this.peers.forEach(function(peer){peer.send(message,payload);});};// sends message to all using a datachannel
// only sends to anyone who has an open datachannel
WebRTC.prototype.sendDirectlyToAll=function(channel,message,payload){this.peers.forEach(function(peer){if(peer.enableDataChannels){peer.sendDirectly(channel,message,payload);}});};module.exports=WebRTC;},{"./peer":77,"localmedia":44,"mockconsole":46,"util":73,"webrtcsupport":74}]},{},[78])(78);});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _helpers = __webpack_require__(0);

var _vffData = __webpack_require__(2);

var _consts = __webpack_require__(6);

var _interactionEvents = __webpack_require__(7);

function initDOM() {
    var untitledTemplateCount = 0;
    var templates = {};

    document.querySelectorAll('[vff-template]').forEach(function (template) {
        if (!template.hasAttribute('vff-name') && !template.querySelector('[vff-name]')) {
            template.setAttribute('vff-name', '');
        }
    });

    var controls = document.querySelectorAll('[vff-name]');

    controls.forEach(function (control) {
        var template = closest(control, '[vff-template]');
        if (!template) {
            control.setAttribute('vff-template', 'Untitled Template ' + ++untitledTemplateCount);
        }
        //Set options object
        var options = (template || control).getAttribute('vff-options') || '{}';
        try {
            options = JSON.parse(options.replace(/'/g, "\""));
        } catch (err) {
            options = {};
        }
        if (control.options && typeof control.options === 'function') {
            options = Object.assign({}, control.options(), options);
        }
        options.element = template || control;

        var templateName = (template || control).getAttribute('vff-template');
        var controlName = control.getAttribute('vff-name');
        var exposed = control.expose ? control.expose() : {};
        var data = {};
        for (var prop in exposed) {
            if (exposed.hasOwnProperty(prop)) {
                (function () {

                    var path = _typeof(exposed[prop]) === 'object' ? exposed[prop].path : exposed[prop];

                    if (prop === path) {
                        //Slightly change the name of the property to avoid infinite looping
                        prop = prop[0] === prop[0].toUpperCase() ? prop.charAt(0).toLowerCase() + prop.substr(1) : prop.charAt(0).toUpperCase() + prop.substr(1);
                    }

                    data[controlName + _consts.EXPOSE_DELIMITER + prop] = (0, _helpers.getByPath)(control, path);

                    Object.defineProperty(control, prop, {
                        get: function get() {
                            return (0, _helpers.getByPath)(this, path);
                        },
                        set: function set(newVal) {
                            (0, _helpers.setByPath)(this, path, newVal);
                        },

                        configurable: true
                    });
                })();
            }
        }
        if (!templates[templateName]) {
            templates[templateName] = { data: data, options: options };
        } else {
            (0, _helpers.deepExtend)(templates[templateName], { data: data, options: options });
        }
    });
    for (var template in templates) {
        _vffData.vffData.registerTemplate(template, templates[template].data, templates[template].options);
    }
    initSync();
}

function closest(element, selector) {

    while (element) {
        if (element.matches(selector)) {
            return element;
        }
        element = element.parentElement;
    }
}

function initSync() {
    var elements = document.querySelectorAll('[vff-sync]');
    elements.forEach(function (element) {
        (0, _interactionEvents.bindSyncEvents)(element);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _htmlAccessorObserver = __webpack_require__(30);

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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


HTMLElement.prototype.expose = function () {
    return { text: 'innerText' };
};
HTMLHeadingElement.prototype.expose = function () {
    return { text: 'innerText', color: { path: 'style.color', ui: 'color' } };
};
HTMLSpanElement.prototype.expose = function () {
    return { text: 'innerText' };
};
HTMLParagraphElement.prototype.expose = function () {
    return { text: 'innerText' };
};
HTMLImageElement.prototype.expose = function () {
    return { source: 'src' };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(33);

__webpack_require__(34);

var _emoji = __webpack_require__(35);

var _emoji2 = _interopRequireDefault(_emoji);

var _dragArea = __webpack_require__(36);

var _dragArea2 = _interopRequireDefault(_dragArea);

var _telestratorElement = __webpack_require__(37);

var _telestratorElement2 = _interopRequireDefault(_telestratorElement);

var _clockSimple = __webpack_require__(43);

var _clockSimple2 = _interopRequireDefault(_clockSimple);

var _systemClock = __webpack_require__(45);

var _systemClock2 = _interopRequireDefault(_systemClock);

var _countdown = __webpack_require__(47);

var _countdown2 = _interopRequireDefault(_countdown);

var _stopwatch = __webpack_require__(48);

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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(38);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(39);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(41)(content, options);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)(false);
// imports


// module
exports.push([module.i, "telestrator-element #telestrator-canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/***/ }),
/* 40 */
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
/* 41 */
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

var	fixUrls = __webpack_require__(42);

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
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var work = __webpack_require__(44);

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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
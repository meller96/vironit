/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Atm.js":
/*!*******************!*\
  !*** ./js/Atm.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Atm; });\nfunction Atm() {\r\n  class Atm extends EventEmmiter {\r\n    constructor(atm, count) {\r\n      super();\r\n      this.isFree = true;\r\n      this.atm = atm;\r\n      this.count = count;\r\n    }\r\n\r\n    setFree() {\r\n      this.emit(\"Free\");\r\n      this.isFree = true;\r\n      this.atm.style.backgroundColor = \"greenyellow\";\r\n    }\r\n\r\n    setBusy() {\r\n      this.count++;\r\n      this.isFree = false;\r\n      this.atm.style.backgroundColor = \"red\";\r\n      this.atm.innerHTML = this.count;\r\n      this.emit(\"Busy\");\r\n      setTimeout(this.setFree.bind(this), randomInteger(1000, 3000));\r\n    }\r\n  }\r\n  let count1 = 0;\r\n  let count2 = 0;\r\n  let atm1_elem = document.getElementById(\"atm-1\");\r\n  let atm2_elem = document.getElementById(\"atm-2\");\r\n  let atm1 = new Atm(atm1_elem, count1);\r\n  let atm2 = new Atm(atm2_elem, count2);\r\n  let atms = [atm1, atm2];\r\n}\r\n\n\n//# sourceURL=webpack:///./js/Atm.js?");

/***/ }),

/***/ "./js/EventEmmiter.js":
/*!****************************!*\
  !*** ./js/EventEmmiter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventEmmiter; });\nfunction EventEmmiter() {\r\n  class EventEmmiter {\r\n    constructor() {\r\n      this.eventTable = {};\r\n    }\r\n    on(str, callback) {\r\n      if (!this.eventTable[str]) {\r\n        this.eventTable[str] = [];\r\n      }\r\n      this.eventTable[str].push(callback);\r\n    }\r\n    emit(str) {\r\n      this.eventTable[str].forEach(callback => {\r\n        callback();\r\n      });\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/EventEmmiter.js?");

/***/ }),

/***/ "./js/Que.js":
/*!*******************!*\
  !*** ./js/Que.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Que; });\nfunction Que() {\r\n  let queueCounter = document.getElementById(\"count\");\r\n  class Que extends EventEmmiter {\r\n    constructor() {\r\n      super();\r\n      this.queueCount = 0;\r\n    }\r\n    addPerson() {\r\n      this.queueCount++;\r\n      queueCounter.innerHTML = this.queueCount;\r\n      this.emit(\"add person\");\r\n    }\r\n    lessPerson() {\r\n      this.queueCount--;\r\n      queueCounter.innerHTML = this.queueCount;\r\n    }\r\n  }\r\n\r\n  let q = new Que();\r\n}\r\n\n\n//# sourceURL=webpack:///./js/Que.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Que__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Que */ \"./js/Que.js\");\n/* harmony import */ var _Atm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Atm */ \"./js/Atm.js\");\n/* harmony import */ var _EventEmmiter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventEmmiter */ \"./js/EventEmmiter.js\");\n\r\n\r\n\r\n\r\nfunction randomInteger(min, max) {\r\n  let rand = min - 0.5 + Math.random() * (max - min + 1);\r\n  rand = Math.round(rand);\r\n  return rand;\r\n}\r\natm1.on(\"Free\", function() {\r\n  console.log(\"Is free\");\r\n});\r\natm2.on(\"Free\", function() {\r\n  console.log(\"Is free\");\r\n});\r\natm1.on(\"Busy\", function() {\r\n  console.log(\"Is busy\");\r\n});\r\natm2.on(\"Busy\", function() {\r\n  console.log(\"Is busy\");\r\n});\r\nq.on(\"add person\", function() {\r\n  foundAtm = atms.find(function(atm) {\r\n    return atm.isFree;\r\n  });\r\n\r\n  if (foundAtm) {\r\n    setTimeout(\r\n      function(atm) {\r\n        q.lessPerson();\r\n        atm.setBusy();\r\n      }.bind(null, foundAtm),\r\n      1000\r\n    );\r\n  }\r\n});\r\nlet func = function() {\r\n  q.addPerson();\r\n  setTimeout(func, randomInteger(500, 1000));\r\n};\r\nfunc();\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });
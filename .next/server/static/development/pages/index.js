module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-integer */ "core-js/library/fn/number/is-integer");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/lodash-es/_DataView.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var DataView = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');

/* harmony default export */ __webpack_exports__["default"] = (DataView);


/***/ }),

/***/ "./node_modules/lodash-es/_Hash.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_Hash.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ "./node_modules/lodash-es/_hashClear.js");
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ "./node_modules/lodash-es/_hashDelete.js");
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ "./node_modules/lodash-es/_hashGet.js");
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ "./node_modules/lodash-es/_hashHas.js");
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ "./node_modules/lodash-es/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Hash);


/***/ }),

/***/ "./node_modules/lodash-es/_ListCache.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_ListCache.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ "./node_modules/lodash-es/_listCacheClear.js");
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ "./node_modules/lodash-es/_listCacheDelete.js");
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ "./node_modules/lodash-es/_listCacheGet.js");
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ "./node_modules/lodash-es/_listCacheHas.js");
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ "./node_modules/lodash-es/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (ListCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Map.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Map = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');

/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "./node_modules/lodash-es/_MapCache.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_MapCache.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ "./node_modules/lodash-es/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ "./node_modules/lodash-es/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ "./node_modules/lodash-es/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ "./node_modules/lodash-es/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ "./node_modules/lodash-es/_mapCacheSet.js");






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (MapCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Promise.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Promise = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');

/* harmony default export */ __webpack_exports__["default"] = (Promise);


/***/ }),

/***/ "./node_modules/lodash-es/_Set.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Set = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');

/* harmony default export */ __webpack_exports__["default"] = (Set);


/***/ }),

/***/ "./node_modules/lodash-es/_SetCache.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_SetCache.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");
/* harmony import */ var _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setCacheAdd.js */ "./node_modules/lodash-es/_setCacheAdd.js");
/* harmony import */ var _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setCacheHas.js */ "./node_modules/lodash-es/_setCacheHas.js");




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__["default"];
SetCache.prototype.has = _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ __webpack_exports__["default"] = (SetCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Stack.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_Stack.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ "./node_modules/lodash-es/_stackClear.js");
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ "./node_modules/lodash-es/_stackDelete.js");
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ "./node_modules/lodash-es/_stackGet.js");
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ "./node_modules/lodash-es/_stackHas.js");
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ "./node_modules/lodash-es/_stackSet.js");







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Stack);


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_Uint8Array.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_Uint8Array.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;

/* harmony default export */ __webpack_exports__["default"] = (Uint8Array);


/***/ }),

/***/ "./node_modules/lodash-es/_WeakMap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var WeakMap = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');

/* harmony default export */ __webpack_exports__["default"] = (WeakMap);


/***/ }),

/***/ "./node_modules/lodash-es/_apply.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_apply.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ __webpack_exports__["default"] = (apply);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayEvery.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEvery.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayEvery);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayFilter.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayFilter);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayLikeKeys.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseTimes.js */ "./node_modules/lodash-es/_baseTimes.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
      isArg = !isArr && Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
      isBuff = !isArr && !isArg && Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
      isType = !isArr && !isArg && !isBuff && Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? Object(_baseTimes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           Object(_isIndex_js__WEBPACK_IMPORTED_MODULE_4__["default"])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayLikeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayMap.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_arrayMap.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayMap);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayPush.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayPush);


/***/ }),

/***/ "./node_modules/lodash-es/_arraySome.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arraySome.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (arraySome);


/***/ }),

/***/ "./node_modules/lodash-es/_asciiToArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_asciiToArray.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/* harmony default export */ __webpack_exports__["default"] = (asciiToArray);


/***/ }),

/***/ "./node_modules/lodash-es/_assignMergeValue.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_assignMergeValue.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !Object(_eq_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object[key], value)) ||
      (value === undefined && !(key in object))) {
    Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, value);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (assignMergeValue);


/***/ }),

/***/ "./node_modules/lodash-es/_assignValue.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_assignValue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && Object(_eq_js__WEBPACK_IMPORTED_MODULE_1__["default"])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, value);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (assignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_assocIndexOf.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_assocIndexOf.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (Object(_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["default"] = (assocIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignValue.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/lodash-es/_defineProperty.js");


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_baseCreate.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseCreate.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (baseCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_baseEach.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseEach.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseForOwn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseForOwn.js */ "./node_modules/lodash-es/_baseForOwn.js");
/* harmony import */ var _createBaseEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createBaseEach.js */ "./node_modules/lodash-es/_createBaseEach.js");



/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = Object(_createBaseEach_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_baseForOwn_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (baseEach);


/***/ }),

/***/ "./node_modules/lodash-es/_baseEvery.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseEvery.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseEach.js */ "./node_modules/lodash-es/_baseEach.js");


/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  Object(_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseEvery);


/***/ }),

/***/ "./node_modules/lodash-es/_baseFindIndex.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseFindIndex.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["default"] = (baseFindIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_baseFor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseFor.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createBaseFor.js */ "./node_modules/lodash-es/_createBaseFor.js");


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = Object(_createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/* harmony default export */ __webpack_exports__["default"] = (baseFor);


/***/ }),

/***/ "./node_modules/lodash-es/_baseForOwn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseForOwn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFor.js */ "./node_modules/lodash-es/_baseFor.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && Object(_baseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, iteratee, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (baseForOwn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseGet.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/lodash-es/_castPath.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = Object(_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[Object(_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (baseGet);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetAllKeys.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) ? result : Object(_arrayPush_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, symbolsFunc(object));
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetAllKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_baseHasIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseHasIn.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseHasIn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIndexOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIndexOf.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseFindIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFindIndex.js */ "./node_modules/lodash-es/_baseFindIndex.js");
/* harmony import */ var _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNaN.js */ "./node_modules/lodash-es/_baseIsNaN.js");
/* harmony import */ var _strictIndexOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_strictIndexOf.js */ "./node_modules/lodash-es/_strictIndexOf.js");




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? Object(_strictIndexOf_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, value, fromIndex)
    : Object(_baseFindIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_1__["default"], fromIndex);
}

/* harmony default export */ __webpack_exports__["default"] = (baseIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsArguments.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == argsTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsArguments);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsEqual.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqual.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsEqualDeep.js */ "./node_modules/lodash-es/_baseIsEqualDeep.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && !Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other))) {
    return value !== value && other !== other;
  }
  return Object(_baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsEqual);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsEqualDeep.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqualDeep.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/lodash-es/_Stack.js");
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_equalArrays.js */ "./node_modules/lodash-es/_equalArrays.js");
/* harmony import */ var _equalByTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_equalByTag.js */ "./node_modules/lodash-es/_equalByTag.js");
/* harmony import */ var _equalObjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_equalObjects.js */ "./node_modules/lodash-es/_equalObjects.js");
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");









/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object),
      othIsArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(other),
      objTag = objIsArr ? arrayTag : Object(_getTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object),
      othTag = othIsArr ? arrayTag : Object(_getTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(object)) {
    if (!Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return (objIsArr || Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(object))
      ? Object(_equalArrays_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, other, bitmask, customizer, equalFunc, stack)
      : Object(_equalByTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return Object(_equalObjects_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsEqualDeep);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsMatch.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMatch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/lodash-es/_Stack.js");
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqual.js */ "./node_modules/lodash-es/_baseIsEqual.js");



/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"];
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? Object(_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsMatch);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsNaN.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNaN.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsNaN);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsNative.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ "./node_modules/lodash-es/_isMasked.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test(Object(_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsNative);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsTypedArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) &&
    Object(_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)];
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIteratee.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIteratee.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseMatches_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseMatches.js */ "./node_modules/lodash-es/_baseMatches.js");
/* harmony import */ var _baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseMatchesProperty.js */ "./node_modules/lodash-es/_baseMatchesProperty.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property.js */ "./node_modules/lodash-es/property.js");






/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  if (typeof value == 'object') {
    return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)
      ? Object(_baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value[0], value[1])
      : Object(_baseMatches_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  }
  return Object(_property_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseIteratee);


/***/ }),

/***/ "./node_modules/lodash-es/_baseKeys.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ "./node_modules/lodash-es/_nativeKeys.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return Object(_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_baseKeysIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeysIn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nativeKeysIn.js */ "./node_modules/lodash-es/_nativeKeysIn.js");




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return Object(_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
  }
  var isProto = Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseMap.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseEach.js */ "./node_modules/lodash-es/_baseEach.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection) ? Array(collection.length) : [];

  Object(_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseMap);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMatches.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseMatches.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsMatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsMatch.js */ "./node_modules/lodash-es/_baseIsMatch.js");
/* harmony import */ var _getMatchData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getMatchData.js */ "./node_modules/lodash-es/_getMatchData.js");
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ "./node_modules/lodash-es/_matchesStrictComparable.js");




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = Object(_getMatchData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return Object(_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__["default"])(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || Object(_baseIsMatch_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, source, matchData);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseMatches);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMatchesProperty.js":
/*!********************************************************!*\
  !*** ./node_modules/lodash-es/_baseMatchesProperty.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsEqual.js */ "./node_modules/lodash-es/_baseIsEqual.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./node_modules/lodash-es/get.js");
/* harmony import */ var _hasIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasIn.js */ "./node_modules/lodash-es/hasIn.js");
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isKey.js */ "./node_modules/lodash-es/_isKey.js");
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_isStrictComparable.js */ "./node_modules/lodash-es/_isStrictComparable.js");
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ "./node_modules/lodash-es/_matchesStrictComparable.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");








/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (Object(_isKey_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path) && Object(_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_4__["default"])(srcValue)) {
    return Object(_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_toKey_js__WEBPACK_IMPORTED_MODULE_6__["default"])(path), srcValue);
  }
  return function(object) {
    var objValue = Object(_get_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? Object(_hasIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, path)
      : Object(_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_0__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseMatchesProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMerge.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseMerge.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/lodash-es/_Stack.js");
/* harmony import */ var _assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignMergeValue.js */ "./node_modules/lodash-es/_assignMergeValue.js");
/* harmony import */ var _baseFor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseFor.js */ "./node_modules/lodash-es/_baseFor.js");
/* harmony import */ var _baseMergeDeep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseMergeDeep.js */ "./node_modules/lodash-es/_baseMergeDeep.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");
/* harmony import */ var _safeGet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_safeGet.js */ "./node_modules/lodash-es/_safeGet.js");








/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  Object(_baseFor_js__WEBPACK_IMPORTED_MODULE_2__["default"])(source, function(srcValue, key) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(srcValue)) {
      Object(_baseMergeDeep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(Object(_safeGet_js__WEBPACK_IMPORTED_MODULE_6__["default"])(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      Object(_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    }
  }, _keysIn_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (baseMerge);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMergeDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseMergeDeep.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignMergeValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assignMergeValue.js */ "./node_modules/lodash-es/_assignMergeValue.js");
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneBuffer.js */ "./node_modules/lodash-es/_cloneBuffer.js");
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneTypedArray.js */ "./node_modules/lodash-es/_cloneTypedArray.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_copyArray.js */ "./node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_initCloneObject.js */ "./node_modules/lodash-es/_initCloneObject.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isArrayLikeObject.js */ "./node_modules/lodash-es/isArrayLikeObject.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isPlainObject.js */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");
/* harmony import */ var _safeGet_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_safeGet.js */ "./node_modules/lodash-es/_safeGet.js");
/* harmony import */ var _toPlainObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./toPlainObject.js */ "./node_modules/lodash-es/toPlainObject.js");
















/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = Object(_safeGet_js__WEBPACK_IMPORTED_MODULE_13__["default"])(object, key),
      srcValue = Object(_safeGet_js__WEBPACK_IMPORTED_MODULE_13__["default"])(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    Object(_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(srcValue),
        isBuff = !isArr && Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_8__["default"])(srcValue),
        isTyped = !isArr && !isBuff && Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(objValue)) {
        newValue = objValue;
      }
      else if (Object(_isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(objValue)) {
        newValue = Object(_copyArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = Object(_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = Object(_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (Object(_isPlainObject_js__WEBPACK_IMPORTED_MODULE_11__["default"])(srcValue) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_5__["default"])(srcValue)) {
      newValue = objValue;
      if (Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_5__["default"])(objValue)) {
        newValue = Object(_toPlainObject_js__WEBPACK_IMPORTED_MODULE_14__["default"])(objValue);
      }
      else if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_10__["default"])(objValue) || Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_9__["default"])(objValue)) {
        newValue = Object(_initCloneObject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  Object(_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
}

/* harmony default export */ __webpack_exports__["default"] = (baseMergeDeep);


/***/ }),

/***/ "./node_modules/lodash-es/_baseOrderBy.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseOrderBy.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseMap.js */ "./node_modules/lodash-es/_baseMap.js");
/* harmony import */ var _baseSortBy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseSortBy.js */ "./node_modules/lodash-es/_baseSortBy.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _compareMultiple_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_compareMultiple.js */ "./node_modules/lodash-es/_compareMultiple.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");








/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees.length ? iteratees : [_identity_js__WEBPACK_IMPORTED_MODULE_6__["default"]], Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

  var result = Object(_baseMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(collection, function(value, key, collection) {
    var criteria = Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return Object(_baseSortBy_js__WEBPACK_IMPORTED_MODULE_3__["default"])(result, function(object, other) {
    return Object(_compareMultiple_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, other, orders);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (baseOrderBy);


/***/ }),

/***/ "./node_modules/lodash-es/_baseProperty.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseProperty.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_basePropertyDeep.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_basePropertyDeep.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/lodash-es/_baseGet.js");


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return Object(_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (basePropertyDeep);


/***/ }),

/***/ "./node_modules/lodash-es/_baseRest.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseRest.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");
/* harmony import */ var _overRest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_overRest.js */ "./node_modules/lodash-es/_overRest.js");
/* harmony import */ var _setToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setToString.js */ "./node_modules/lodash-es/_setToString.js");




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return Object(_setToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_overRest_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, start, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"]), func + '');
}

/* harmony default export */ __webpack_exports__["default"] = (baseRest);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSetToString.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseSetToString.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/lodash-es/constant.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/lodash-es/_defineProperty.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"] : function(func, string) {
  return Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string),
    'writable': true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (baseSetToString);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSlice.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseSlice.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseSlice);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSortBy.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseSortBy.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (baseSortBy);


/***/ }),

/***/ "./node_modules/lodash-es/_baseTimes.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseTimes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseTimes);


/***/ }),

/***/ "./node_modules/lodash-es/_baseToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseToString.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, baseToString) + '';
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseToString);


/***/ }),

/***/ "./node_modules/lodash-es/_baseUnary.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseUnary);


/***/ }),

/***/ "./node_modules/lodash-es/_baseValues.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseValues.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");


/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(props, function(key) {
    return object[key];
  });
}

/* harmony default export */ __webpack_exports__["default"] = (baseValues);


/***/ }),

/***/ "./node_modules/lodash-es/_cacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_cacheHas.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (cacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_castPath.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_castPath.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isKey.js */ "./node_modules/lodash-es/_isKey.js");
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToPath.js */ "./node_modules/lodash-es/_stringToPath.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  return Object(_isKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, object) ? [value] : Object(_stringToPath_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ __webpack_exports__["default"] = (castPath);


/***/ }),

/***/ "./node_modules/lodash-es/_castSlice.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_castSlice.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSlice.js */ "./node_modules/lodash-es/_baseSlice.js");


/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : Object(_baseSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, start, end);
}

/* harmony default export */ __webpack_exports__["default"] = (castSlice);


/***/ }),

/***/ "./node_modules/lodash-es/_charsEndIndex.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_charsEndIndex.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIndexOf.js */ "./node_modules/lodash-es/_baseIndexOf.js");


/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && Object(_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/* harmony default export */ __webpack_exports__["default"] = (charsEndIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_charsStartIndex.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_charsStartIndex.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIndexOf.js */ "./node_modules/lodash-es/_baseIndexOf.js");


/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && Object(_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/* harmony default export */ __webpack_exports__["default"] = (charsStartIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneArrayBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ "./node_modules/lodash-es/_Uint8Array.js");


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneArrayBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneBuffer.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneBuffer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash-es/_cloneTypedArray.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneTypedArray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_compareAscending.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_compareAscending.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");


/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/* harmony default export */ __webpack_exports__["default"] = (compareAscending);


/***/ }),

/***/ "./node_modules/lodash-es/_compareMultiple.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_compareMultiple.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compareAscending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_compareAscending.js */ "./node_modules/lodash-es/_compareAscending.js");


/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = Object(_compareAscending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/* harmony default export */ __webpack_exports__["default"] = (compareMultiple);


/***/ }),

/***/ "./node_modules/lodash-es/_copyArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_copyArray.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (copyArray);


/***/ }),

/***/ "./node_modules/lodash-es/_copyObject.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_copyObject.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    } else {
      Object(_assignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ __webpack_exports__["default"] = (copyObject);


/***/ }),

/***/ "./node_modules/lodash-es/_coreJsData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]['__core-js_shared__'];

/* harmony default export */ __webpack_exports__["default"] = (coreJsData);


/***/ }),

/***/ "./node_modules/lodash-es/_createAssigner.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_createAssigner.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ "./node_modules/lodash-es/_baseRest.js");
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isIterateeCall.js */ "./node_modules/lodash-es/_isIterateeCall.js");



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return Object(_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && Object(_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createAssigner);


/***/ }),

/***/ "./node_modules/lodash-es/_createBaseEach.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_createBaseEach.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");


/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createBaseEach);


/***/ }),

/***/ "./node_modules/lodash-es/_createBaseFor.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_createBaseFor.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createBaseFor);


/***/ }),

/***/ "./node_modules/lodash-es/_createCaseFirst.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_createCaseFirst.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _castSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castSlice.js */ "./node_modules/lodash-es/_castSlice.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasUnicode.js */ "./node_modules/lodash-es/_hasUnicode.js");
/* harmony import */ var _stringToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToArray.js */ "./node_modules/lodash-es/_stringToArray.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");





/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string);

    var strSymbols = Object(_hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string)
      ? Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? Object(_castSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createCaseFirst);


/***/ }),

/***/ "./node_modules/lodash-es/_defineProperty.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


var defineProperty = (function() {
  try {
    var func = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["default"] = (defineProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_equalArrays.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_equalArrays.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_SetCache.js */ "./node_modules/lodash-es/_SetCache.js");
/* harmony import */ var _arraySome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arraySome.js */ "./node_modules/lodash-es/_arraySome.js");
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cacheHas.js */ "./node_modules/lodash-es/_cacheHas.js");




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!Object(_arraySome_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other, function(othValue, othIndex) {
            if (!Object(_cacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"])(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (equalArrays);


/***/ }),

/***/ "./node_modules/lodash-es/_equalByTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_equalByTag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Uint8Array.js */ "./node_modules/lodash-es/_Uint8Array.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_equalArrays.js */ "./node_modules/lodash-es/_equalArrays.js");
/* harmony import */ var _mapToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapToArray.js */ "./node_modules/lodash-es/_mapToArray.js");
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_setToArray.js */ "./node_modules/lodash-es/_setToArray.js");







/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](object), new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return Object(_eq_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"];

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = Object(_equalArrays_js__WEBPACK_IMPORTED_MODULE_3__["default"])(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (equalByTag);


/***/ }),

/***/ "./node_modules/lodash-es/_equalObjects.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_equalObjects.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getAllKeys.js */ "./node_modules/lodash-es/_getAllKeys.js");


/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = Object(_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
      objLength = objProps.length,
      othProps = Object(_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (equalObjects);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);


/***/ }),

/***/ "./node_modules/lodash-es/_getAllKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return Object(_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_2__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (getAllKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_getMapData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getMapData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ "./node_modules/lodash-es/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return Object(_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ __webpack_exports__["default"] = (getMapData);


/***/ }),

/***/ "./node_modules/lodash-es/_getMatchData.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getMatchData.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isStrictComparable.js */ "./node_modules/lodash-es/_isStrictComparable.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, Object(_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)];
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getMatchData);


/***/ }),

/***/ "./node_modules/lodash-es/_getNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsNative.js */ "./node_modules/lodash-es/_baseIsNative.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getValue.js */ "./node_modules/lodash-es/_getValue.js");



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = Object(_getValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key);
  return Object(_baseIsNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? value : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (getNative);


/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["default"] = (getPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getSymbols.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayFilter.js */ "./node_modules/lodash-es/_arrayFilter.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubArray.js */ "./node_modules/lodash-es/stubArray.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return Object(_arrayFilter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getSymbols);


/***/ }),

/***/ "./node_modules/lodash-es/_getTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_DataView.js */ "./node_modules/lodash-es/_DataView.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Promise.js */ "./node_modules/lodash-es/_Promise.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Set.js */ "./node_modules/lodash-es/_Set.js");
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_WeakMap.js */ "./node_modules/lodash-es/_WeakMap.js");
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
    mapCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    promiseCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    setCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
    weakMapCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"](new ArrayBuffer(1))) != dataViewTag) ||
    (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_1__["default"]) != mapTag) ||
    (_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"].resolve()) != promiseTag) ||
    (_Set_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_3__["default"]) != setTag) ||
    (_WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"]) != weakMapTag)) {
  getTag = function(value) {
    var result = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ __webpack_exports__["default"] = (getValue);


/***/ }),

/***/ "./node_modules/lodash-es/_hasPath.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hasPath.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/lodash-es/_castPath.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");







/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = Object(_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = Object(_toKey_js__WEBPACK_IMPORTED_MODULE_5__["default"])(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && Object(_isLength_js__WEBPACK_IMPORTED_MODULE_4__["default"])(length) && Object(_isIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, length) &&
    (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object));
}

/* harmony default export */ __webpack_exports__["default"] = (hasPath);


/***/ }),

/***/ "./node_modules/lodash-es/_hasUnicode.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hasUnicode.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/* harmony default export */ __webpack_exports__["default"] = (hasUnicode);


/***/ }),

/***/ "./node_modules/lodash-es/_hashClear.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_hashClear.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? Object(_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (hashClear);


/***/ }),

/***/ "./node_modules/lodash-es/_hashDelete.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hashDelete.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (hashDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_hashGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashGet.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (hashGet);


/***/ }),

/***/ "./node_modules/lodash-es/_hashHas.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashHas.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ __webpack_exports__["default"] = (hashHas);


/***/ }),

/***/ "./node_modules/lodash-es/_hashSet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashSet.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (hashSet);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneObject.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneObject.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/lodash-es/_baseCreate.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object))
    ? Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object))
    : {};
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneObject);


/***/ }),

/***/ "./node_modules/lodash-es/_isIndex.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_isIndex.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ __webpack_exports__["default"] = (isIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_isIterateeCall.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_isIterateeCall.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) && Object(_isIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return Object(_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object[index], value);
  }
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (isIterateeCall);


/***/ }),

/***/ "./node_modules/lodash-es/_isKey.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_isKey.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ __webpack_exports__["default"] = (isKey);


/***/ }),

/***/ "./node_modules/lodash-es/_isKeyable.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_isKeyable.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ __webpack_exports__["default"] = (isKeyable);


/***/ }),

/***/ "./node_modules/lodash-es/_isMasked.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ "./node_modules/lodash-es/_coreJsData.js");


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ __webpack_exports__["default"] = (isMasked);


/***/ }),

/***/ "./node_modules/lodash-es/_isPrototype.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ __webpack_exports__["default"] = (isPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_isStrictComparable.js":
/*!*******************************************************!*\
  !*** ./node_modules/lodash-es/_isStrictComparable.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isStrictComparable);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheClear.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheClear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheDelete.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheDelete.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheGet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheGet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheHas.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheHas.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheSet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheSet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheClear.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheClear.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ "./node_modules/lodash-es/_Hash.js");
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheDelete.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheDelete.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheGet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheGet.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheHas.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheHas.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheSet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheSet.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_mapToArray.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (mapToArray);


/***/ }),

/***/ "./node_modules/lodash-es/_matchesStrictComparable.js":
/*!************************************************************!*\
  !*** ./node_modules/lodash-es/_matchesStrictComparable.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (matchesStrictComparable);


/***/ }),

/***/ "./node_modules/lodash-es/_memoizeCapped.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_memoizeCapped.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoize.js */ "./node_modules/lodash-es/memoize.js");


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = Object(_memoize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeCapped);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeCreate.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeCreate.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');

/* harmony default export */ __webpack_exports__["default"] = (nativeCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);

/* harmony default export */ __webpack_exports__["default"] = (nativeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeysIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeysIn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (nativeKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_nodeUtil.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["default"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (overArg);


/***/ }),

/***/ "./node_modules/lodash-es/_overRest.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_overRest.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_apply.js */ "./node_modules/lodash-es/_apply.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return Object(_apply_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, this, otherArgs);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (overRest);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "./node_modules/lodash-es/_safeGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_safeGet.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/* harmony default export */ __webpack_exports__["default"] = (safeGet);


/***/ }),

/***/ "./node_modules/lodash-es/_setCacheAdd.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheAdd.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (setCacheAdd);


/***/ }),

/***/ "./node_modules/lodash-es/_setCacheHas.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheHas.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/* harmony default export */ __webpack_exports__["default"] = (setCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_setToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_setToArray.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (setToArray);


/***/ }),

/***/ "./node_modules/lodash-es/_setToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setToString.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSetToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSetToString.js */ "./node_modules/lodash-es/_baseSetToString.js");
/* harmony import */ var _shortOut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_shortOut.js */ "./node_modules/lodash-es/_shortOut.js");



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = Object(_shortOut_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_baseSetToString_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (setToString);


/***/ }),

/***/ "./node_modules/lodash-es/_shortOut.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_shortOut.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (shortOut);


/***/ }),

/***/ "./node_modules/lodash-es/_stackClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stackClear.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (stackClear);


/***/ }),

/***/ "./node_modules/lodash-es/_stackDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_stackDelete.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (stackDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_stackGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackGet.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackGet);


/***/ }),

/***/ "./node_modules/lodash-es/_stackHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackHas.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackHas);


/***/ }),

/***/ "./node_modules/lodash-es/_stackSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackSet.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (stackSet);


/***/ }),

/***/ "./node_modules/lodash-es/_strictIndexOf.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_strictIndexOf.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["default"] = (strictIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_stringToArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_stringToArray.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asciiToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_asciiToArray.js */ "./node_modules/lodash-es/_asciiToArray.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasUnicode.js */ "./node_modules/lodash-es/_hasUnicode.js");
/* harmony import */ var _unicodeToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_unicodeToArray.js */ "./node_modules/lodash-es/_unicodeToArray.js");




/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return Object(_hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string)
    ? Object(_unicodeToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string)
    : Object(_asciiToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string);
}

/* harmony default export */ __webpack_exports__["default"] = (stringToArray);


/***/ }),

/***/ "./node_modules/lodash-es/_stringToPath.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_stringToPath.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_memoizeCapped.js */ "./node_modules/lodash-es/_memoizeCapped.js");


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = Object(_memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (stringToPath);


/***/ }),

/***/ "./node_modules/lodash-es/_toKey.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_toKey.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["default"] = (toKey);


/***/ }),

/***/ "./node_modules/lodash-es/_toSource.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ __webpack_exports__["default"] = (toSource);


/***/ }),

/***/ "./node_modules/lodash-es/_unicodeToArray.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_unicodeToArray.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/* harmony default export */ __webpack_exports__["default"] = (unicodeToArray);


/***/ }),

/***/ "./node_modules/lodash-es/assignIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/assignIn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/lodash-es/_createAssigner.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");




/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function(object, source) {
  Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_keysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(source), object);
});

/* harmony default export */ __webpack_exports__["default"] = (assignIn);


/***/ }),

/***/ "./node_modules/lodash-es/constant.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/constant.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (constant);


/***/ }),

/***/ "./node_modules/lodash-es/eq.js":
/*!**************************************!*\
  !*** ./node_modules/lodash-es/eq.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
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
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ __webpack_exports__["default"] = (eq);


/***/ }),

/***/ "./node_modules/lodash-es/every.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/every.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayEvery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayEvery.js */ "./node_modules/lodash-es/_arrayEvery.js");
/* harmony import */ var _baseEvery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseEvery.js */ "./node_modules/lodash-es/_baseEvery.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_isIterateeCall.js */ "./node_modules/lodash-es/_isIterateeCall.js");






/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection) ? _arrayEvery_js__WEBPACK_IMPORTED_MODULE_0__["default"] : _baseEvery_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  if (guard && Object(_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_4__["default"])(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"])(predicate, 3));
}

/* harmony default export */ __webpack_exports__["default"] = (every);


/***/ }),

/***/ "./node_modules/lodash-es/extend.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/extend.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignIn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignIn.js */ "./node_modules/lodash-es/assignIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assignIn_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/lodash-es/get.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/get.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/lodash-es/_baseGet.js");


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : Object(_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ __webpack_exports__["default"] = (get);


/***/ }),

/***/ "./node_modules/lodash-es/hasIn.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/hasIn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseHasIn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseHasIn.js */ "./node_modules/lodash-es/_baseHasIn.js");
/* harmony import */ var _hasPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasPath.js */ "./node_modules/lodash-es/_hasPath.js");



/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && Object(_hasPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, path, _baseHasIn_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (hasIn);


/***/ }),

/***/ "./node_modules/lodash-es/identity.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/identity.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ __webpack_exports__["default"] = (identity);


/***/ }),

/***/ "./node_modules/lodash-es/isArguments.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ "./node_modules/lodash-es/_baseIsArguments.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
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
 */
var isArguments = Object(_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() { return arguments; }()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ __webpack_exports__["default"] = (isArguments);


/***/ }),

/***/ "./node_modules/lodash-es/isArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
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
 */
var isArray = Array.isArray;

/* harmony default export */ __webpack_exports__["default"] = (isArray);


/***/ }),

/***/ "./node_modules/lodash-es/isArrayLike.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");



/**
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
 */
function isArrayLike(value) {
  return value != null && Object(_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isArrayLike);


/***/ }),

/***/ "./node_modules/lodash-es/isArrayLikeObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/isArrayLikeObject.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/**
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
 */
function isArrayLikeObject(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isArrayLikeObject);


/***/ }),

/***/ "./node_modules/lodash-es/isBuffer.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ "./node_modules/lodash-es/stubFalse.js");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
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
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash-es/isEmpty.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isEmpty.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseKeys.js */ "./node_modules/lodash-es/_baseKeys.js");
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");









/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value) &&
      (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value) || Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value))) {
    return !value.length;
  }
  var tag = Object(_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value)) {
    return !Object(_baseKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (isEmpty);


/***/ }),

/***/ "./node_modules/lodash-es/isEqual.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isEqual.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsEqual.js */ "./node_modules/lodash-es/_baseIsEqual.js");


/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return Object(_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, other);
}

/* harmony default export */ __webpack_exports__["default"] = (isEqual);


/***/ }),

/***/ "./node_modules/lodash-es/isFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
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
 */
function isFunction(value) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__["default"] = (isFunction);


/***/ }),

/***/ "./node_modules/lodash-es/isLength.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
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
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ __webpack_exports__["default"] = (isLength);


/***/ }),

/***/ "./node_modules/lodash-es/isMatch.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isMatch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsMatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsMatch.js */ "./node_modules/lodash-es/_baseIsMatch.js");
/* harmony import */ var _getMatchData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getMatchData.js */ "./node_modules/lodash-es/_getMatchData.js");



/**
 * Performs a partial deep comparison between `object` and `source` to
 * determine if `object` contains equivalent property values.
 *
 * **Note:** This method is equivalent to `_.matches` when `source` is
 * partially applied.
 *
 * Partial comparisons will match empty array and empty object `source`
 * values against any array or object value, respectively. See `_.isEqual`
 * for a list of supported value comparisons.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 *
 * _.isMatch(object, { 'b': 2 });
 * // => true
 *
 * _.isMatch(object, { 'b': 1 });
 * // => false
 */
function isMatch(object, source) {
  return object === source || Object(_baseIsMatch_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, source, Object(_getMatchData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source));
}

/* harmony default export */ __webpack_exports__["default"] = (isMatch);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
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
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
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
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) != objectTag) {
    return false;
  }
  var proto = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);


/***/ }),

/***/ "./node_modules/lodash-es/isString.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isString.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == stringTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isString);


/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/isTypedArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ "./node_modules/lodash-es/_baseIsTypedArray.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/keys.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseKeys.js */ "./node_modules/lodash-es/_baseKeys.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");




/**
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
 */
function keys(object) {
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) ? Object(_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) : Object(_baseKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
}

/* harmony default export */ __webpack_exports__["default"] = (keys);


/***/ }),

/***/ "./node_modules/lodash-es/keysIn.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/keysIn.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseKeysIn.js */ "./node_modules/lodash-es/_baseKeysIn.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) ? Object(_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, true) : Object(_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
}

/* harmony default export */ __webpack_exports__["default"] = (keysIn);


/***/ }),

/***/ "./node_modules/lodash-es/memoize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/memoize.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/lodash-es/merge.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/merge.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseMerge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseMerge.js */ "./node_modules/lodash-es/_baseMerge.js");
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/lodash-es/_createAssigner.js");



/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function(object, source, srcIndex) {
  Object(_baseMerge_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, source, srcIndex);
});

/* harmony default export */ __webpack_exports__["default"] = (merge);


/***/ }),

/***/ "./node_modules/lodash-es/orderBy.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/orderBy.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseOrderBy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseOrderBy.js */ "./node_modules/lodash-es/_baseOrderBy.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");



/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return Object(_baseOrderBy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, iteratees, orders);
}

/* harmony default export */ __webpack_exports__["default"] = (orderBy);


/***/ }),

/***/ "./node_modules/lodash-es/property.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/property.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseProperty.js */ "./node_modules/lodash-es/_baseProperty.js");
/* harmony import */ var _basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_basePropertyDeep.js */ "./node_modules/lodash-es/_basePropertyDeep.js");
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isKey.js */ "./node_modules/lodash-es/_isKey.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");





/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return Object(_isKey_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path) ? Object(_baseProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_toKey_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path)) : Object(_basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
}

/* harmony default export */ __webpack_exports__["default"] = (property);


/***/ }),

/***/ "./node_modules/lodash-es/stubArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
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
 */
function stubArray() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (stubArray);


/***/ }),

/***/ "./node_modules/lodash-es/stubFalse.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
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
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (stubFalse);


/***/ }),

/***/ "./node_modules/lodash-es/toPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/toPlainObject.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");



/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, Object(_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value));
}

/* harmony default export */ __webpack_exports__["default"] = (toPlainObject);


/***/ }),

/***/ "./node_modules/lodash-es/toString.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toString.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (toString);


/***/ }),

/***/ "./node_modules/lodash-es/trim.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/trim.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");
/* harmony import */ var _castSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_castSlice.js */ "./node_modules/lodash-es/_castSlice.js");
/* harmony import */ var _charsEndIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_charsEndIndex.js */ "./node_modules/lodash-es/_charsEndIndex.js");
/* harmony import */ var _charsStartIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_charsStartIndex.js */ "./node_modules/lodash-es/_charsStartIndex.js");
/* harmony import */ var _stringToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stringToArray.js */ "./node_modules/lodash-es/_stringToArray.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");







/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_5__["default"])(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(chars))) {
    return string;
  }
  var strSymbols = Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(string),
      chrSymbols = Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(chars),
      start = Object(_charsStartIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"])(strSymbols, chrSymbols),
      end = Object(_charsEndIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"])(strSymbols, chrSymbols) + 1;

  return Object(_castSlice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(strSymbols, start, end).join('');
}

/* harmony default export */ __webpack_exports__["default"] = (trim);


/***/ }),

/***/ "./node_modules/lodash-es/trimEnd.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/trimEnd.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");
/* harmony import */ var _castSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_castSlice.js */ "./node_modules/lodash-es/_castSlice.js");
/* harmony import */ var _charsEndIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_charsEndIndex.js */ "./node_modules/lodash-es/_charsEndIndex.js");
/* harmony import */ var _stringToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stringToArray.js */ "./node_modules/lodash-es/_stringToArray.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");






/** Used to match leading and trailing whitespace. */
var reTrimEnd = /\s+$/;

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimEnd('  abc  ');
 * // => '  abc'
 *
 * _.trimEnd('-_-abc-_-', '_-');
 * // => '-_-abc'
 */
function trimEnd(string, chars, guard) {
  string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_4__["default"])(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrimEnd, '');
  }
  if (!string || !(chars = Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(chars))) {
    return string;
  }
  var strSymbols = Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string),
      end = Object(_charsEndIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"])(strSymbols, Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(chars)) + 1;

  return Object(_castSlice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(strSymbols, 0, end).join('');
}

/* harmony default export */ __webpack_exports__["default"] = (trimEnd);


/***/ }),

/***/ "./node_modules/lodash-es/trimStart.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/trimStart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");
/* harmony import */ var _castSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_castSlice.js */ "./node_modules/lodash-es/_castSlice.js");
/* harmony import */ var _charsStartIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_charsStartIndex.js */ "./node_modules/lodash-es/_charsStartIndex.js");
/* harmony import */ var _stringToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stringToArray.js */ "./node_modules/lodash-es/_stringToArray.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");






/** Used to match leading and trailing whitespace. */
var reTrimStart = /^\s+/;

/**
 * Removes leading whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimStart('  abc  ');
 * // => 'abc  '
 *
 * _.trimStart('-_-abc-_-', '_-');
 * // => 'abc-_-'
 */
function trimStart(string, chars, guard) {
  string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_4__["default"])(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrimStart, '');
  }
  if (!string || !(chars = Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(chars))) {
    return string;
  }
  var strSymbols = Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string),
      start = Object(_charsStartIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"])(strSymbols, Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(chars));

  return Object(_castSlice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(strSymbols, start).join('');
}

/* harmony default export */ __webpack_exports__["default"] = (trimStart);


/***/ }),

/***/ "./node_modules/lodash-es/upperFirst.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/upperFirst.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCaseFirst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createCaseFirst.js */ "./node_modules/lodash-es/_createCaseFirst.js");


/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = Object(_createCaseFirst_js__WEBPACK_IMPORTED_MODULE_0__["default"])('toUpperCase');

/* harmony default export */ __webpack_exports__["default"] = (upperFirst);


/***/ }),

/***/ "./node_modules/lodash-es/values.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/values.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseValues.js */ "./node_modules/lodash-es/_baseValues.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");



/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : Object(_baseValues_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object));
}

/* harmony default export */ __webpack_exports__["default"] = (values);


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/yii-steroids/actions/auth.js":
/*!***************************************************!*\
  !*** ./node_modules/yii-steroids/actions/auth.js ***!
  \***************************************************/
/*! exports provided: AUTH_INIT_USER, AUTH_SET_DATA, AUTH_ADD_SOCIAL, init, login, addSocial, setUser, setData, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_INIT_USER", function() { return AUTH_INIT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SET_DATA", function() { return AUTH_SET_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ADD_SOCIAL", function() { return AUTH_ADD_SOCIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSocial", function() { return addSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/isFunction */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/isObject */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var lodash_es_upperFirst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/upperFirst */ "./node_modules/lodash-es/upperFirst.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash-es/merge.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fields */ "./node_modules/yii-steroids/actions/fields.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation */ "./node_modules/yii-steroids/actions/navigation.js");








const AUTH_INIT_USER = 'AUTH_INIT_USER';
const AUTH_SET_DATA = 'AUTH_SET_DATA';
const AUTH_ADD_SOCIAL = 'AUTH_ADD_SOCIAL';
let lastInitAction = null;
const init = initAction => (dispatch, getState) => {
  lastInitAction = initAction;
  return initAction(getState()).then(data => {
    // Configure components
    if (Object(lodash_es_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(data.config)) {
      const components = __webpack_require__(/*! components */ "./src/components/index.ts");

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data.config).map(name => {
        if (components[name]) {
          _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data.config[name]).map(key => {
            const value = data.config[name][key];

            const setter = 'set' + Object(lodash_es_upperFirst__WEBPACK_IMPORTED_MODULE_3__["default"])(key);

            if (Object(lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_1__["default"])(components[name][setter])) {
              components[name][setter](value);
            } else if (Object(lodash_es_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(components[name][key]) && Object(lodash_es_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
              Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_4__["default"])(components[name][key], value);
            } else {
              components[name][key] = value;
            }
          });
        }
      });
    }

    return dispatch([// User auth
    setUser(data.user), // Meta models & enums
    data.meta && Object(_fields__WEBPACK_IMPORTED_MODULE_6__["setMeta"])(data.meta), // User auth
    setData(data)].filter(Boolean));
  });
};
const login = (token, redirectPageId = 'root') => dispatch => {
  components__WEBPACK_IMPORTED_MODULE_5__["http"].setAccessToken(token);
  return dispatch(init(lastInitAction)).then(() => dispatch(Object(_navigation__WEBPACK_IMPORTED_MODULE_7__["goToPage"])(redirectPageId)));
};
const addSocial = social => ({
  type: AUTH_ADD_SOCIAL,
  social
});
const setUser = user => ({
  type: AUTH_INIT_USER,
  user: user || null
});
const setData = data => ({
  type: AUTH_SET_DATA,
  data
});
const logout = () => dispatch => {
  components__WEBPACK_IMPORTED_MODULE_5__["http"].setAccessToken(null);
  return dispatch([setUser(null), Object(_navigation__WEBPACK_IMPORTED_MODULE_7__["goToPage"])('root')]);
};

/***/ }),

/***/ "./node_modules/yii-steroids/actions/fields.js":
/*!*****************************************************!*\
  !*** ./node_modules/yii-steroids/actions/fields.js ***!
  \*****************************************************/
/*! exports provided: FIELDS_BEFORE_FETCH, FIELDS_AFTER_FETCH, FIELDS_SET_META, FIELDS_ADD_SECURITY, FIELDS_REMOVE_SECURITY, normalizeName, fetch, fetchMeta, setMeta, addSecurity, removeSecurity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELDS_BEFORE_FETCH", function() { return FIELDS_BEFORE_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELDS_AFTER_FETCH", function() { return FIELDS_AFTER_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELDS_SET_META", function() { return FIELDS_SET_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELDS_ADD_SECURITY", function() { return FIELDS_ADD_SECURITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELDS_REMOVE_SECURITY", function() { return FIELDS_REMOVE_SECURITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeName", function() { return normalizeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMeta", function() { return fetchMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMeta", function() { return setMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSecurity", function() { return addSecurity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSecurity", function() { return removeSecurity; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/isArray */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./src/components/index.ts");




const FIELDS_BEFORE_FETCH = 'FIELDS_BEFORE_FETCH';
const FIELDS_AFTER_FETCH = 'FIELDS_AFTER_FETCH';
const FIELDS_SET_META = 'FIELDS_SET_META';
const FIELDS_ADD_SECURITY = 'FIELDS_ADD_SECURITY';
const FIELDS_REMOVE_SECURITY = 'FIELDS_REMOVE_SECURITY';
let timer = null;
let queue = [];
const normalizeName = name => name.replace(/\\/g, '.').replace(/^\./, '');
const fetch = (fieldId, model, attribute, params = {}) => dispatch => {
  model = Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_1__["default"])(model, 'className', String(model)); // Mark loading

  dispatch({
    type: FIELDS_BEFORE_FETCH,
    fieldId,
    model,
    attribute
  }); // Add to queue

  queue.push({
    fieldId,
    model,
    attribute,
    params
  }); // Lazy send request

  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    // Send request
    components__WEBPACK_IMPORTED_MODULE_3__["http"].post('/api/steroids/fields-fetch', {
      fields: queue
    }).then(fields => dispatch({
      type: FIELDS_AFTER_FETCH,
      fields
    })); // Clean queue

    queue = [];
  }, 10);
};
const fetchMeta = (names, force = false) => (dispatch, getState) => {
  if (Object(lodash_es_isArray__WEBPACK_IMPORTED_MODULE_2__["default"])(names)) {
    throw new Error('This format is deprecated, use {models: ..., enums: ...} format.');
  } // Normalize names


  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(names).forEach(key => {
    names[key] = names[key].map(normalizeName);
  });

  const isMetaFetched = getState().fields.meta !== null;

  if (isMetaFetched && !force) {
    return;
  } // Send request


  return components__WEBPACK_IMPORTED_MODULE_3__["http"].post('/api/steroids/meta-fetch', names).then(meta => setMeta(meta));
};
const setMeta = meta => ({
  type: FIELDS_SET_META,
  meta
});
const addSecurity = (formId, params) => ({
  type: FIELDS_ADD_SECURITY,
  formId,
  params
});
const removeSecurity = formId => ({
  type: FIELDS_REMOVE_SECURITY,
  formId
});

/***/ }),

/***/ "./node_modules/yii-steroids/actions/list.js":
/*!***************************************************!*\
  !*** ./node_modules/yii-steroids/actions/list.js ***!
  \***************************************************/
/*! exports provided: LIST_INIT, LIST_BEFORE_FETCH, LIST_AFTER_FETCH, LIST_ITEM_ADD, LIST_ITEM_UPDATE, LIST_DESTROY, LIST_TOGGLE_ITEM, LIST_TOGGLE_ALL, LIST_SET_LAYOUT, init, fetch, lazyFetch, setPage, setPageSize, setSort, refresh, add, update, destroy, toggleItem, toggleAll, setLayoutName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_INIT", function() { return LIST_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_BEFORE_FETCH", function() { return LIST_BEFORE_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_AFTER_FETCH", function() { return LIST_AFTER_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_ITEM_ADD", function() { return LIST_ITEM_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_ITEM_UPDATE", function() { return LIST_ITEM_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_DESTROY", function() { return LIST_DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_TOGGLE_ITEM", function() { return LIST_TOGGLE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_TOGGLE_ALL", function() { return LIST_TOGGLE_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_SET_LAYOUT", function() { return LIST_SET_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyFetch", function() { return lazyFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPage", function() { return setPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPageSize", function() { return setPageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSort", function() { return setSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refresh", function() { return refresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleItem", function() { return toggleItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAll", function() { return toggleAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLayoutName", function() { return setLayoutName; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components */ "./src/components/index.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const LIST_INIT = 'LIST_INIT';
const LIST_BEFORE_FETCH = 'LIST_BEFORE_FETCH';
const LIST_AFTER_FETCH = 'LIST_AFTER_FETCH';
const LIST_ITEM_ADD = 'LIST_ITEM_ADD';
const LIST_ITEM_UPDATE = 'LIST_ITEM_UPDATE';
const LIST_DESTROY = 'LIST_DESTROY';
const LIST_TOGGLE_ITEM = 'LIST_TOGGLE_ITEM';
const LIST_TOGGLE_ALL = 'LIST_TOGGLE_ALL';
const LIST_SET_LAYOUT = 'LIST_SET_LAYOUT';
const STORAGE_LAYOUT_KEY_PREFIX = 'listLayout_';
const lazyTimers = {};

const defaultFetchHandler = list => {
  let url = list.action;

  if (list.scope) {
    url += (url.indexOf('?') !== -1 ? '&' : '?') + 'scope=' + list.scope.join(',');
  }

  return components__WEBPACK_IMPORTED_MODULE_8__["http"].send(list.actionMethod, url || location.pathname, _objectSpread({}, list.query, {
    page: list.page,
    pageSize: list.pageSize,
    sort: list.sort
  })).then(response => response.data);
};

const init = (listId, props) => dispatch => dispatch({
  action: props.action || props.action === '' ? props.action : null,
  actionMethod: props.actionMethod || 'post',
  onFetch: props.onFetch,
  scope: props.scope,
  page: props.defaultPage,
  pageSize: props.defaultPageSize,
  sort: props.defaultSort || null,
  total: props.total || null,
  query: props.query || null,
  items: props.items || null,
  loadMore: props.loadMore,
  primaryKey: props.primaryKey,
  layoutName: components__WEBPACK_IMPORTED_MODULE_8__["clientStorage"].get(STORAGE_LAYOUT_KEY_PREFIX + listId) || props.selectedLayoutName || Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(props, 'layoutNames.0.id') || null,
  listId,
  type: LIST_INIT
});
const fetch = (listId, params = {}) => (dispatch, getState) => {
  const list = _objectSpread({}, Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(getState(), ['list', 'lists', listId]), {}, params);

  if (!list.action && list.action !== '') {
    return;
  }

  const onFetch = list.onFetch || defaultFetchHandler;
  return dispatch([_objectSpread({}, params, {
    listId,
    type: LIST_BEFORE_FETCH
  }), onFetch(list).then(data => {
    if (!getState().list.lists[listId]) {
      return [];
    }

    return _objectSpread({}, data, {
      listId,
      type: LIST_AFTER_FETCH
    });
  })]);
};
const lazyFetch = (listId, params) => dispatch => {
  if (lazyTimers[listId]) {
    clearTimeout(lazyTimers[listId]);
  }

  lazyTimers[listId] = setTimeout(() => dispatch(fetch(listId, params)), 200);
};
const setPage = (listId, page, loadMore) => fetch(listId, {
  page,
  loadMore
});
const setPageSize = (listId, pageSize) => fetch(listId, {
  page: 1,
  pageSize
});
const setSort = (listId, sort) => fetch(listId, {
  sort
});
const refresh = listId => fetch(listId);
const add = (listId, item) => ({
  item,
  listId,
  type: LIST_ITEM_ADD
});
const update = (listId, item, condition) => ({
  item,
  condition,
  listId,
  type: LIST_ITEM_UPDATE
});
const destroy = listId => {
  if (lazyTimers[listId]) {
    clearTimeout(lazyTimers[listId]);
  }

  return {
    listId,
    type: LIST_DESTROY
  };
};
const toggleItem = (listId, itemId) => ({
  listId,
  itemId,
  type: LIST_TOGGLE_ITEM
});
const toggleAll = listId => ({
  listId,
  type: LIST_TOGGLE_ALL
});
const setLayoutName = (listId, layoutName) => {
  components__WEBPACK_IMPORTED_MODULE_8__["clientStorage"].set(STORAGE_LAYOUT_KEY_PREFIX + listId, layoutName);
  return {
    listId,
    layoutName,
    type: LIST_SET_LAYOUT
  };
};

/***/ }),

/***/ "./node_modules/yii-steroids/actions/modal.js":
/*!****************************************************!*\
  !*** ./node_modules/yii-steroids/actions/modal.js ***!
  \****************************************************/
/*! exports provided: OPEN_MODAL, CLOSE_MODAL, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MODAL", function() { return OPEN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_MODAL", function() { return CLOSE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
let idCounter = 0;
const openModal = (modal, props) => {
  let id = props ? props.modalId : null;

  if (!id) {
    modal._modalId = modal._modalId || 'modal-' + ++idCounter;
    id = modal._modalId;
  }

  return {
    type: OPEN_MODAL,
    id,
    modal,
    props
  };
};
const closeModal = id => ({
  type: CLOSE_MODAL,
  id
});

/***/ }),

/***/ "./node_modules/yii-steroids/actions/navigation.js":
/*!*********************************************************!*\
  !*** ./node_modules/yii-steroids/actions/navigation.js ***!
  \*********************************************************/
/*! exports provided: NAVIGATION_INIT_ROUTES, NAVIGATION_SET_PARAMS, NAVIGATION_ADD_CONFIGS, NAVIGATION_REMOVE_CONFIGS, NAVIGATION_SET_DATA, initRoutes, initParams, goToPage, getConfigId, navigationAddConfigs, navigationRemoveConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_INIT_ROUTES", function() { return NAVIGATION_INIT_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_SET_PARAMS", function() { return NAVIGATION_SET_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_ADD_CONFIGS", function() { return NAVIGATION_ADD_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_REMOVE_CONFIGS", function() { return NAVIGATION_REMOVE_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_SET_DATA", function() { return NAVIGATION_SET_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRoutes", function() { return initRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initParams", function() { return initParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToPage", function() { return goToPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigId", function() { return getConfigId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationAddConfigs", function() { return navigationAddConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationRemoveConfigs", function() { return navigationRemoveConfigs; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_es_isArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/isArray */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var lodash_es_trim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/trim */ "./node_modules/lodash-es/trim.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components */ "./src/components/index.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const NAVIGATION_INIT_ROUTES = 'NAVIGATION_INIT_ROUTES';
const NAVIGATION_SET_PARAMS = 'NAVIGATION_SET_PARAMS';
const NAVIGATION_ADD_CONFIGS = 'NAVIGATION_ADD_CONFIGS';
const NAVIGATION_REMOVE_CONFIGS = 'NAVIGATION_REMOVE_CONFIGS';
const NAVIGATION_SET_DATA = 'NAVIGATION_SET_DATA';

const normalizeConfigs = configs => {
  if (!configs) {
    configs = [];
  }

  if (!Object(lodash_es_isArray__WEBPACK_IMPORTED_MODULE_7__["default"])(configs)) {
    configs = [configs];
  }

  configs.forEach((config, index) => {
    if (!config.key || !config.url) {
      throw new Error('key and url is required');
    }

    configs[index] = _objectSpread({
      method: 'get',
      params: {}
    }, config);
  });
  return configs;
};

const fetch = config => components__WEBPACK_IMPORTED_MODULE_10__["http"].send(config.method, config.url, config.params).then(result => result.data);

const initRoutes = routesTree => ({
  type: NAVIGATION_INIT_ROUTES,
  routesTree
});
const initParams = params => ({
  type: NAVIGATION_SET_PARAMS,
  params
});
const goToPage = (pageId, params) => (dispatch, getState) => {
  const getNavUrl = __webpack_require__(/*! ../reducers/navigation */ "./node_modules/yii-steroids/reducers/navigation.js").getNavUrl;

  return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_9__["push"])(getNavUrl(getState(), pageId, params)));
};
const getConfigId = config => config.id || Object(lodash_es_trim__WEBPACK_IMPORTED_MODULE_8__["default"])(config.url, '/');
const navigationAddConfigs = configs => dispatch => {
  configs = normalizeConfigs(configs);
  dispatch({
    type: NAVIGATION_ADD_CONFIGS,
    configs
  });
  configs.forEach(config => {
    fetch(config).then(data => dispatch({
      type: NAVIGATION_SET_DATA,
      config,
      data
    }));
  });
};
const navigationRemoveConfigs = configs => {
  configs = normalizeConfigs(configs);
  return {
    type: NAVIGATION_REMOVE_CONFIGS,
    configs
  };
};

/***/ }),

/***/ "./node_modules/yii-steroids/actions/notifications.js":
/*!************************************************************!*\
  !*** ./node_modules/yii-steroids/actions/notifications.js ***!
  \************************************************************/
/*! exports provided: NOTIFICATIONS_SHOW, NOTIFICATIONS_CLOSING, NOTIFICATIONS_CLOSE, showNotification, setClosing, closeNotification, setFlashes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATIONS_SHOW", function() { return NOTIFICATIONS_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATIONS_CLOSING", function() { return NOTIFICATIONS_CLOSING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATIONS_CLOSE", function() { return NOTIFICATIONS_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNotification", function() { return showNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClosing", function() { return setClosing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeNotification", function() { return closeNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFlashes", function() { return setFlashes; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

let ID_COUNTER = 0;
const NOTIFICATIONS_SHOW = 'NOTIFICATIONS_SHOW';
const NOTIFICATIONS_CLOSING = 'NOTIFICATIONS_CLOSING';
const NOTIFICATIONS_CLOSE = 'NOTIFICATIONS_CLOSE';
const showNotification = (message, level = 'warning') => dispatch => {
  const id = ++ID_COUNTER;
  dispatch({
    type: NOTIFICATIONS_SHOW,
    id,
    message,
    level
  });
  setTimeout(() => dispatch({
    type: NOTIFICATIONS_CLOSE,
    id
  }), 10000);
};
const setClosing = (id = null) => ({
  type: NOTIFICATIONS_CLOSING,
  id
});
const closeNotification = (id = null) => ({
  type: NOTIFICATIONS_CLOSE,
  id
});
const setFlashes = flashes => _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(flashes).map(level => {
  return [].concat(flashes[level] || []).map(message => showNotification(message, level));
});

/***/ }),

/***/ "./node_modules/yii-steroids/actions/routing.js":
/*!******************************************************!*\
  !*** ./node_modules/yii-steroids/actions/routing.js ***!
  \******************************************************/
/*! exports provided: ROUTING_REGISTER, registerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING_REGISTER", function() { return ROUTING_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRoutes", function() { return registerRoutes; });
const ROUTING_REGISTER = 'ROUTING_REGISTER';
const registerRoutes = routes => ({
  type: ROUTING_REGISTER,
  routes
});

/***/ }),

/***/ "./node_modules/yii-steroids/actions/screen.js":
/*!*****************************************************!*\
  !*** ./node_modules/yii-steroids/actions/screen.js ***!
  \*****************************************************/
/*! exports provided: SCREEN_SET_WIDTH, SCREEN_SET_MEDIA, setMedia, setWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_SET_WIDTH", function() { return SCREEN_SET_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_SET_MEDIA", function() { return SCREEN_SET_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMedia", function() { return setMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWidth", function() { return setWidth; });
const SCREEN_SET_WIDTH = 'SCREEN_SET_WIDTH';
const SCREEN_SET_MEDIA = 'SCREEN_SET_MEDIA';
const setMedia = media => ({
  type: SCREEN_SET_MEDIA,
  media
});
let timer = null;
const setWidth = width => dispatch => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    dispatch({
      type: SCREEN_SET_WIDTH,
      width
    });
  }, 100);
};

/***/ }),

/***/ "./node_modules/yii-steroids/components/ClientStorageComponent.js":
/*!************************************************************************!*\
  !*** ./node_modules/yii-steroids/components/ClientStorageComponent.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClientStorageComponent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


class ClientStorageComponent {
  constructor() {
    this.localStorageAvailable = true;
    this.sessionStorageAvailable = true;

    try {
      window.localStorage.setItem('localStorageAvailable', true);
      window.localStorage.removeItem('localStorageAvailable');
    } catch (e) {
      this.localStorageAvailable = false;
    }

    try {
      window.sessionStorage.setItem('sessionStorageAvailable', true);
      window.sessionStorage.removeItem('sessionStorageAvailable');
    } catch (e) {
      this.sessionStorageAvailable = false;
    }
  }
  /**
   * @param {string} name
   * @param {string} [storageName]
   * @returns {*}
   */


  get(name, storageName) {
    storageName = storageName || this.STORAGE_LOCAL;

    if (this.localStorageAvailable && storageName === this.STORAGE_LOCAL) {
      return window.localStorage.getItem(name);
    } else if (this.sessionStorageAvailable && storageName === this.STORAGE_SESSION) {
      return window.sessionStorage.getItem(name);
    }

    return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(name);
  }
  /**
   * @param {string} name
   * @param {*} value
   * @param {string} [storageName]
   * @param {number|null} [expires]
   */


  set(name, value, storageName, expires = null) {
    storageName = storageName || this.STORAGE_LOCAL;

    if (this.localStorageAvailable && storageName === this.STORAGE_LOCAL) {
      window.localStorage.setItem(name, value);
    } else if (this.sessionStorageAvailable && storageName === this.STORAGE_SESSION) {
      window.sessionStorage.setItem(name, value);
    } else {
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(name, value, {
        expires,
        domain: this._getDomain()
      });
    }
  }
  /**
   *
   * @param {string} name
   * @param {string} [storageName]
   */


  remove(name, storageName) {
    storageName = storageName || this.STORAGE_LOCAL;

    if (this.localStorageAvailable && storageName === this.STORAGE_LOCAL) {
      window.localStorage.removeItem(name);
    } else if (this.sessionStorageAvailable && storageName === this.STORAGE_SESSION) {
      window.sessionStorage.removeItem(name);
    } else {
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(name, {
        domain: this._getDomain()
      });
    }
  }

  _getDomain() {
    const host = typeof location !== 'undefined' && location.hostname || '';
    return host.split('.').slice(-2).join('.') || host;
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ClientStorageComponent, "STORAGE_SESSION", 'session');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ClientStorageComponent, "STORAGE_LOCAL", 'local');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ClientStorageComponent, "STORAGE_COOKIE", 'cookie');

/***/ }),

/***/ "./node_modules/yii-steroids/components/HtmlComponent.js":
/*!***************************************************************!*\
  !*** ./node_modules/yii-steroids/components/HtmlComponent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HtmlComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es_isString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/isString */ "./node_modules/lodash-es/isString.js");


class HtmlComponent {
  constructor() {
    this.namespace = '';
  }

  bem(blockName) {
    const bem = function () {
      return this.classNames(...arguments);
    }.bind(this);

    bem.block = modifiers => {
      return this._applyModifiers(blockName, modifiers);
    };

    bem.element = (elementName, modifiers) => {
      return this._applyModifiers(blockName + '__' + elementName, modifiers);
    };

    return bem;
  }

  classNames() {
    return Array.prototype.slice.call(arguments).filter(v => v).join(' ');
  }

  addClass(node, className) {
    if (node && Object(lodash_es_isString__WEBPACK_IMPORTED_MODULE_1__["default"])(node.className)) {
      const classes = node.className.split(' ');

      if (classes.indexOf(className) === -1) {
        classes.push(className);
        node.className = classes.join(' ');
      }
    }
  }

  removeClass(node, className) {
    if (node && Object(lodash_es_isString__WEBPACK_IMPORTED_MODULE_1__["default"])(node.className)) {
      const classes = node.className.split(' ');
      const index = classes.indexOf(className);

      if (index !== -1) {
        classes.splice(index, 1);
        node.className = classes.join(' ');
      }
    }
  }

  closest(element, className) {
    while ((element = element.parentElement) && !element.classList.contains(className)) {} // eslint-disable-line no-empty


    return element;
  }

  _applyModifiers(entity, modifiers) {
    let result = [];
    result.push(entity);

    if (typeof modifiers === 'string') {
      result.push(entity + (modifiers ? '_' + modifiers : ''));
    } else if (modifiers) {
      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(modifiers).forEach(key => {
        const value = modifiers[key];

        if (!value) {// Skip
        } else if (value === true) {
          result.push(entity + '_' + key);
        } else {
          result.push(entity + '_' + key + '_' + value);
        }
      });
    } // Append namespace


    result = result.map(cl => this.namespace + cl);
    return result.join(' ');
  }

}
;

/***/ }),

/***/ "./node_modules/yii-steroids/components/HttpComponent.js":
/*!***************************************************************!*\
  !*** ./node_modules/yii-steroids/components/HttpComponent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HttpComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_es_trimStart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es/trimStart */ "./node_modules/lodash-es/trimStart.js");
/* harmony import */ var lodash_es_trimEnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es/trimEnd */ "./node_modules/lodash-es/trimEnd.js");
/* harmony import */ var _actions_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/notifications */ "./node_modules/yii-steroids/actions/notifications.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash-es/isFunction */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es_isObject__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash-es/isObject */ "./node_modules/lodash-es/isObject.js");









var _jsxFileName = "/usr/local/var/www/neutrino-web/node_modules/yii-steroids/components/HttpComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








class HttpComponent {
  constructor() {
    this.apiUrl = location.protocol + '//' + location.host;
    this.accessTokenKey = 'accessToken';
    this._lazyRequests = {};
    this._axios = null;
    this._csrfToken = null;
    this._accessToken = false;
  }

  getAxiosConfig() {
    const config = {
      withCredentials: true,
      headers: {
        // Add XMLHttpRequest header for detect ajax requests
        'X-Requested-With': 'XMLHttpRequest',
        // Add Content-Type
        'Content-Type': 'application/json'
      }
    }; // Add CSRF header

    if (!this._csrfToken && !process.env.IS_NODE) {
      const metaElement = document.querySelector('meta[name=csrf-token]');

      if (metaElement) {
        this._csrfToken = metaElement.getAttribute('content');
      }
    }

    if (this._csrfToken) {
      config.headers['X-CSRF-Token'] = this._csrfToken;
    } // Set access token


    const clientStorage = __webpack_require__(/*! components */ "./src/components/index.ts").clientStorage;

    if (this._accessToken === false) {
      this._accessToken = clientStorage.get(this.accessTokenKey) || null;
    }

    if (this._accessToken) {
      config.headers['Authorization'] = 'Bearer ' + this._accessToken;
    }

    return config;
  }
  /**
   * @param value
   */


  setCsrfToken(value) {
    this._csrfToken = value;
    this.resetConfig();
  }
  /**
   * @param value
   */


  setAccessToken(value) {
    this._accessToken = value;
    this.resetConfig();

    const clientStorage = __webpack_require__(/*! components */ "./src/components/index.ts").clientStorage;

    clientStorage.set(this.accessTokenKey, value);
  }
  /**
   * @returns {string}
   */


  getAccessToken() {
    if (this._accessToken === false) {
      const clientStorage = __webpack_require__(/*! components */ "./src/components/index.ts").clientStorage;

      this._accessToken = clientStorage.get(this.accessTokenKey) || null;
    }

    return this._accessToken;
  }

  resetConfig() {
    this._axios = null;
  }

  getAxiosInstance() {
    if (!this._axios) {
      this._axios = axios__WEBPACK_IMPORTED_MODULE_13___default.a.create(this.getAxiosConfig());
    }

    return this._axios;
  }

  getUrl(method) {
    if (method === null) {
      method = location.pathname;
    }

    if (method.indexOf('://') === -1) {
      method = `${Object(lodash_es_trimEnd__WEBPACK_IMPORTED_MODULE_11__["default"])(this.apiUrl, '/')}/${Object(lodash_es_trimStart__WEBPACK_IMPORTED_MODULE_10__["default"])(method, '/')}`;
    }

    return method;
  }

  get(url, params = {}, options = {}) {
    return this._send(url, {
      method: 'get',
      params: params
    }, options).then(response => response.data);
  }

  post(url, params = {}, options = {}) {
    return this._send(url, {
      method: 'post',
      data: params
    }, options).then(response => response.data);
  }

  delete(url, params = {}, options = {}) {
    return this._send(url, {
      method: 'delete',
      data: params
    }, options).then(response => response.data);
  }

  send(method, url, params = {}, options = {}) {
    method = method.toLowerCase();
    return this._send(url, {
      method,
      [method === 'get' ? 'params' : 'data']: params
    }, options, true);
  }

  hoc(requestFunc) {
    return WrappedComponent => {
      var _class, _temp;

      return _temp = _class = class HttpHOC extends react__WEBPACK_IMPORTED_MODULE_9___default.a.Component {
        constructor() {
          super(...arguments);
          this.state = {
            data: null
          };
          this._isRendered = false;
          this._cancels = [];
          this._fetch = this._fetch.bind(this);
          this._createCancelToken = this._createCancelToken.bind(this);
        }

        componentDidMount() {
          this._isRendered = true;

          this._fetch();
        }

        componentWillUnmount() {
          this._isRendered = false;

          this._cancels.forEach(cancel => cancel('Canceled on unmount component'));
        }

        render() {
          return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, this.props, this.state.data, {
            fetch: this._fetch,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }));
        }

        _createCancelToken() {
          return new axios__WEBPACK_IMPORTED_MODULE_13___default.a.CancelToken(cancel => {
            this._cancels.push(cancel);
          });
        }

        _fetch(params) {
          const result = requestFunc(_objectSpread({}, this.props, {}, params, {
            createCancelToken: this._createCancelToken
          }));

          if (Object(lodash_es_isObject__WEBPACK_IMPORTED_MODULE_15__["default"])(result)) {
            if (Object(lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_14__["default"])(result.then)) {
              return result.then(data => {
                if (this._isRendered) {
                  this.setState({
                    data
                  });
                }

                return data;
              });
            } else {
              this.setState({
                data: result
              });
            }
          }

          return result;
        }

      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_class, "WrappedComponent", WrappedComponent), _temp;
    };
  }

  _send(method, config, options) {
    const axiosConfig = _objectSpread({}, config, {
      url: this.getUrl(method)
    });

    if (options.cancelToken) {
      axiosConfig.cancelToken = options.cancelToken;
    }

    if (options.lazy) {
      if (this._lazyRequests[method]) {
        clearTimeout(this._lazyRequests[method]);
      }

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a((resolve, reject) => {
        const timeout = options.lazy !== true ? options.lazy : 200;
        this._lazyRequests[method] = setTimeout(() => {
          this._sendAxios(axiosConfig).then(result => resolve(result)).catch(result => reject(result));
        }, timeout);
      });
    }

    return this._sendAxios(axiosConfig);
  }

  _sendAxios(config) {
    return this.getAxiosInstance()(config).then(response => {
      this.afterRequest(response);
      return response;
    });
  }

  afterRequest(response) {
    const store = __webpack_require__(/*! components */ "./src/components/index.ts").store; // Flash


    if (response.data.flashes) {
      store.dispatch(Object(_actions_notifications__WEBPACK_IMPORTED_MODULE_12__["setFlashes"])(response.data.flashes));
    } // Ajax redirect


    if (response.data.redirectUrl) {
      if (location.href === response.data.redirectUrl.split('#')[0]) {
        window.location.href = response.data.redirectUrl;
        window.location.reload();
      } else {
        window.location.href = response.data.redirectUrl;
      }
    }
  }

}

/***/ }),

/***/ "./node_modules/yii-steroids/components/ResourceComponent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/yii-steroids/components/ResourceComponent.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResourceComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/yii-steroids/node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_es_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/isArray */ "./node_modules/lodash-es/isArray.js");





class ResourceComponent {
  constructor() {
    this.googleApiKey = '';
    this.googleCaptchaSiteKey = '';
    this._callbacks = {};
  }

  loadGoogleMapApi() {
    const locale = __webpack_require__(/*! components */ "./src/components/index.ts").locale;

    if (window.google && window.google.maps) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(window.google.maps);
    }

    return this.loadScript(ResourceComponent.RESOURCE_GOOGLE_MAP_API, {
      libraries: 'places',
      key: this.googleApiKey,
      language: locale.language
    }, () => window.google.maps);
  }

  loadYandexMap() {
    const locale = __webpack_require__(/*! components */ "./src/components/index.ts").locale;

    if (window.ymaps) {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(resolve => window.ymaps.ready(() => resolve(window.ymaps)));
    }

    return this.loadScript(ResourceComponent.RESOURCE_YANDEX_MAP_API, {
      lang: locale.language
    }, () => new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(resolve => window.ymaps.ready(() => resolve(window.ymaps))));
  }

  loadTwitterWidget() {
    if (window.twttr) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(window.twttr);
    }

    return this.loadScript(ResourceComponent.RESOURCE_TWITTER_WIDGET, {}, () => new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(resolve => window.twttr.ready(() => resolve(window.twttr))));
  }

  loadGeetest() {
    if (window.initGeetest) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(window.initGeetest);
    }

    return this.loadScript(ResourceComponent.RESOURCE_GEETEST_API + '?_t=' + new Date().getTime(), {}, () => window.initGeetest);
  }

  loadScript(url, params, firstResolver) {
    if (this._callbacks[url] === true) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(firstResolver());
    }

    if (Object(lodash_es_isArray__WEBPACK_IMPORTED_MODULE_4__["default"])(this._callbacks[url])) {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(resolve => {
        this._callbacks[url].push(resolve);
      });
    }

    this._callbacks[url] = []; // Append script to page

    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
      let script = document.createElement('script');
      script.async = true;

      script.onload = () => {
        setTimeout(() => {
          _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(firstResolver()).then(result => {
            // Resolve current
            resolve(result); // Resolve queue promises after current

            const callbacks = this._callbacks[url];
            this._callbacks[url] = true;
            callbacks.forEach(callback => callback(result));
          }).catch(reject);
        });
      };

      script.src = url + (params ? '?' + query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params) : '');
      document.body.appendChild(script);
    });
  }

  wait(condition, timeout = 5000) {
    const start = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();

    const checker = (resolve, reject) => {
      const result = condition();

      if (result) {
        resolve(result);
      } else if (start + timeout > _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()) {
        reject();
      } else {
        setTimeout(() => checker(resolve, reject), 500);
      }
    };

    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(checker);
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceComponent, "RESOURCE_GOOGLE_MAP_API", '//maps.googleapis.com/maps/api/js');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceComponent, "RESOURCE_YANDEX_MAP_API", 'https://api-maps.yandex.ru/2.1/');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceComponent, "RESOURCE_TWITTER_WIDGET", 'https://platform.twitter.com/widgets.js');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceComponent, "RESOURCE_GEETEST_API", '//static.geetest.com/static/tools/gt.js');

/***/ }),

/***/ "./node_modules/yii-steroids/components/StoreComponent.js":
/*!****************************************************************!*\
  !*** ./node_modules/yii-steroids/components/StoreComponent.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoreComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es_merge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es/merge */ "./node_modules/lodash-es/merge.js");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reducers */ "./src/reducers/index.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








class StoreComponent {
  constructor(lazyInit = false) {
    this.history = null;
    this.store = null;
    this._asyncReducers = {};

    if (!lazyInit) {
      this.initStore();
    }
  }

  init(config = {}) {
    this.initStore(config);
    this.configurate();
  }

  initStore(config = {}) {
    const initialState = _objectSpread({}, !process.env.IS_NODE ? Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_12__["default"])(...(window.APP_REDUX_PRELOAD_STATES || [{}])) : {}, {}, config.initialState);

    const createHistory = process.env.IS_NODE ? history__WEBPACK_IMPORTED_MODULE_10__["createMemoryHistory"] : history__WEBPACK_IMPORTED_MODULE_10__["createBrowserHistory"];
    this.history = createHistory(_objectSpread({}, Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_11__["default"])(initialState, 'config.store.history', {}), {}, config.history));
    this.store = Object(redux__WEBPACK_IMPORTED_MODULE_8__["createStore"])(Object(reducers__WEBPACK_IMPORTED_MODULE_14__["default"])(), initialState, Object(redux__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_8__["applyMiddleware"])(({
      getState
    }) => next => action => this._prepare(action, next, getState)), Object(redux__WEBPACK_IMPORTED_MODULE_8__["applyMiddleware"])(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_9__["routerMiddleware"])(this.history)), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));
  }

  configurate() {
    // Apply configuration
    const customConfig = this.getState().config || {};

    const components = __webpack_require__(/*! components */ "./src/components/index.ts");

    Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_12__["default"])(components.clientStorage, customConfig.clientStorage);

    Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_12__["default"])(components.html, customConfig.html);

    Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_12__["default"])(components.http, customConfig.http);

    Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_12__["default"])(components.locale, customConfig.locale);

    Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_12__["default"])(components.resource, customConfig.resource);

    Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_12__["default"])(components.store, customConfig.store);

    Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_12__["default"])(components.ui, customConfig.ui);

    Object(lodash_es_merge__WEBPACK_IMPORTED_MODULE_12__["default"])(components.widget, customConfig.widget);
  }

  dispatch(action) {
    return this.store.dispatch(action);
  }

  getState() {
    return this.store.getState();
  }

  addReducers(asyncReducers) {
    this._asyncReducers = _objectSpread({}, this._asyncReducers, {}, asyncReducers);
    this.store.replaceReducer(Object(reducers__WEBPACK_IMPORTED_MODULE_14__["default"])(this._asyncReducers));
  }

  errorHandler(error) {
    throw error;
  }

  _prepare(action, dispatch, getState) {
    // Multiple dispatch (redux-multi)
    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_6___default()(action)) {
      return action.filter(v => v).map(p => this._prepare(p, dispatch, getState));
    } // Function wraper (redux-thunk)


    if (typeof action === 'function') {
      return action(p => this._prepare(p, dispatch, getState), getState);
    } // Promise, detect errors on rejects
    // Detect action through instanceof Promise is not working in production mode, then used single detection by type


    if (typeof action === 'object' && typeof action.then === 'function' && typeof action.catch === 'function') {
      return action.then(payload => this._prepare(payload, dispatch, getState)).catch(e => {
        this.errorHandler(e, p => this._prepare(p, dispatch, getState));
      });
    } // Default case


    if (Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_13__["default"])(action) && action.type) {
      if (true) {
        window.__snapshot = (window.__snapshot || []).concat({
          action
        });
      }

      try {
        return dispatch(action);
      } catch (e) {
        this.errorHandler(e, p => this._prepare(p, dispatch, getState));
      }
    }

    return action;
  }

}

/***/ }),

/***/ "./node_modules/yii-steroids/components/UiComponent.js":
/*!*************************************************************!*\
  !*** ./node_modules/yii-steroids/components/UiComponent.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UiComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/isFunction */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es_isObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/isObject */ "./node_modules/lodash-es/isObject.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



class UiComponent {
  constructor() {
    this.fields = {};
    this.formatters = {};
    this.security = {};
    this._components = {};
  }

  addViews(components) {
    this._add('views', components);
  }

  getView(path) {
    return this._getComponent('views', path);
  }

  addFields(components) {
    this._add('fields', components);
  }

  getField(path) {
    return this._getComponent('fields', path);
  }

  getFieldProps(path) {
    return this._getPropsConfig('fields', path);
  }

  addFormatters(components) {
    this._add('formatters', components);
  }

  getFormatter(path) {
    return this._getComponent('formatters', path);
  }

  getFormatterProps(path) {
    return this._getPropsConfig('formatters', path);
  }

  addSecurity(components) {
    this._add('security', components);
  }

  getSecurity(path) {
    return this._getComponent('security', path);
  }

  getSecurityProps(path) {
    return this._getPropsConfig('security', path);
  }

  _add(group, items) {
    // require.context()
    if (Object(lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_7__["default"])(items) && Object(lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_7__["default"])(items.keys)) {
      items.keys().forEach(fileName => {
        const matches = fileName.match(/^\.\/(.*\/)?[^\/]+\/([^\/]+)\.js$/);
        const path = (matches[1] || '').replace(/\//g, '.') + matches[2];
        this._components[group] = this._components[group] || {};
        this._components[group][path] = items(fileName).default;
      });
    } else if (Object(lodash_es_isObject__WEBPACK_IMPORTED_MODULE_8__["default"])(items)) {
      // object
      this._components[group] = _objectSpread({}, this._components[group], {}, items);
    } else {
      throw new Error(`Unsupported ${group} format for add component.`);
    }
  }

  _getComponent(group, path) {
    if (!this._components[group] || !this._components[group][path]) {
      throw new Error(`Not found '${group}' by path '${path}'.`);
    }

    return this._components[group][path];
  }

  _getPropsConfig(group, path) {
    return this[group] && this[group][path] || null;
  }

}

/***/ }),

/***/ "./node_modules/yii-steroids/node_modules/path-to-regexp/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/yii-steroids/node_modules/path-to-regexp/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var whitelist = (options && options.whitelist) || undefined
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1
      var c = path[k]
      var matches = whitelist ? whitelist.indexOf(c) > -1 : true

      if (matches) {
        prev = c
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var pattern = capture || group
    var delimiter = prev || defaultDelimiter

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: pattern
        ? escapeGroup(pattern)
        : '[^' + escapeString(delimiter === defaultDelimiter ? delimiter : (delimiter + defaultDelimiter)) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) continue

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var start = options.start !== false
  var end = options.end !== false
  var delimiter = options.delimiter || DEFAULT_DELIMITER
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = start ? '^' : ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (!token.prefix) {
          route += '(' + capture + ')?'
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?'
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + escapeString(delimiter) + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    var endToken = tokens[tokens.length - 1]
    var isEndDelimited = typeof endToken === 'string'
      ? endToken[endToken.length - 1] === delimiter
      : endToken === undefined

    if (!strict) route += '(?:' + escapeString(delimiter) + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + escapeString(delimiter) + '|' + endsWith + ')'
  }

  return new RegExp(route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),

/***/ "./node_modules/yii-steroids/node_modules/query-string/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/yii-steroids/node_modules/query-string/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/yii-steroids/node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "decode-uri-component");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "split-on-first");

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;
				if (value === undefined) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (value === undefined) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
			return key => (result, value, index) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (index === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(',')];
			};

		default:
			return key => (result, value) => {
				if (value === undefined) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(',') > -1;
				const newValue = isArray ? value.split(',') : value;
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(param.replace(/\+/g, ' '), '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : decode(value, options);

		if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
			value = Number(value);
		} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
			value = value.toLowerCase() === 'true';
		}

		formatter(decode(key, options), value, ret);
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none'
	}, options);

	const formatter = encoderForArrayFormat(options);
	const keys = Object.keys(object);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	return {
		url: removeHash(input).split('?')[0] || '',
		query: parse(extract(input), options)
	};
};


/***/ }),

/***/ "./node_modules/yii-steroids/node_modules/strict-uri-encode/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/yii-steroids/node_modules/strict-uri-encode/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "./node_modules/yii-steroids/reducers/auth.js":
/*!****************************************************!*\
  !*** ./node_modules/yii-steroids/reducers/auth.js ***!
  \****************************************************/
/*! exports provided: default, isInitialized, isAuthorized, getUser, getUserId, getUserRole, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInitialized", function() { return isInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuthorized", function() { return isAuthorized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserId", function() { return getUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserRole", function() { return getUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/auth */ "./node_modules/yii-steroids/actions/auth.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialState = {
  isInitialized: false,
  user: null,
  data: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_auth__WEBPACK_IMPORTED_MODULE_7__["AUTH_INIT_USER"]:
      return _objectSpread({}, state, {
        isInitialized: true,
        user: action.user
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_7__["AUTH_SET_DATA"]:
      return _objectSpread({}, state, {
        isInitialized: true,
        data: action.data
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_7__["AUTH_ADD_SOCIAL"]:
      return _objectSpread({}, state, {
        user: _objectSpread({}, state.user, {
          socials: [...state.user.socials, action.social]
        })
      });
  }

  return state;
});
const isInitialized = state => state.auth.isInitialized;
const isAuthorized = state => !!state.auth.user;
const getUser = state => state.auth.user;
const getUserId = state => state.auth.user && state.auth.user.id || null;
const getUserRole = state => state.auth.user && state.auth.user.role || null;
const getData = state => state.auth.data;

/***/ }),

/***/ "./node_modules/yii-steroids/reducers/config.js":
/*!******************************************************!*\
  !*** ./node_modules/yii-steroids/reducers/config.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((state = {}) => {
  return state;
});

/***/ }),

/***/ "./node_modules/yii-steroids/reducers/fields.js":
/*!******************************************************!*\
  !*** ./node_modules/yii-steroids/reducers/fields.js ***!
  \******************************************************/
/*! exports provided: default, getFieldProps, isFieldLoading, isMetaFetched, getEnumLabels, getSecurity, getMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldProps", function() { return getFieldProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFieldLoading", function() { return isFieldLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMetaFetched", function() { return isMetaFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumLabels", function() { return getEnumLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecurity", function() { return getSecurity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeta", function() { return getMeta; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");
/* harmony import */ var _actions_fields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/fields */ "./node_modules/yii-steroids/actions/fields.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const initialState = {
  props: {},
  security: {},
  meta: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_fields__WEBPACK_IMPORTED_MODULE_8__["FIELDS_BEFORE_FETCH"]:
      return _objectSpread({}, state, {
        props: _objectSpread({}, state.props, {
          [action.fieldId]: _objectSpread({
            props: null
          }, state[action.fieldId], {
            model: action.model,
            attribute: action.attribute,
            isLoading: true
          })
        })
      });

    case _actions_fields__WEBPACK_IMPORTED_MODULE_8__["FIELDS_AFTER_FETCH"]:
      action.fields.forEach(field => {
        state.props[field.fieldId] = _objectSpread({}, state[field.fieldId], {
          isLoading: false,
          props: _objectSpread({}, Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, `${field.fieldId}.props`), {}, field.props)
        });
      });
      return _objectSpread({}, state, {
        props: _objectSpread({}, state.props)
      });

    case _actions_fields__WEBPACK_IMPORTED_MODULE_8__["FIELDS_ADD_SECURITY"]:
      return _objectSpread({}, state, {
        security: _objectSpread({}, state.security, {
          [action.formId]: action.params
        })
      });

    case _actions_fields__WEBPACK_IMPORTED_MODULE_8__["FIELDS_REMOVE_SECURITY"]:
      return _objectSpread({}, state, {
        security: _objectSpread({}, state.security, {
          [action.formId]: null
        })
      });

    case _actions_fields__WEBPACK_IMPORTED_MODULE_8__["FIELDS_SET_META"]:
      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(action.meta).forEach(name => {
        action.meta[name].className = name;
      });

      return _objectSpread({}, state, {
        meta: _objectSpread({}, state.meta, {}, action.meta)
      });
  }

  return state;
});
const getFieldProps = (state, fieldId) => Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, ['fields', 'props', fieldId, 'props']);
const isFieldLoading = (state, fieldId) => !!Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, ['fields', 'props', fieldId, 'isLoading']);
const isMetaFetched = state => Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, ['fields', 'meta']) !== null;
const getEnumLabels = (state, name) => Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, ['fields', 'meta', name, 'labels']) || null;
const getSecurity = (state, formId) => Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, ['fields', 'security', formId]);
const warnings = {};
const getMeta = (state, name) => {
  name = Object(_actions_fields__WEBPACK_IMPORTED_MODULE_8__["normalizeName"])(name);
  const meta = Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, ['fields', 'meta', name]) || null;

  if (!meta && isMetaFetched(state) && !warnings[name]) {
    warnings[name] = true;
    console.warn('Steroids: Not found model meta:', name);
  }

  return meta;
};

/***/ }),

/***/ "./node_modules/yii-steroids/reducers/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/yii-steroids/reducers/index.js ***!
  \*****************************************************/
/*! exports provided: form, auth, fields, list, config, notifications, modal, routing, navigation, screen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "form", function() { return redux_form__WEBPACK_IMPORTED_MODULE_8__["reducer"]; });

/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth */ "./node_modules/yii-steroids/reducers/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return _auth__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fields */ "./node_modules/yii-steroids/reducers/fields.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fields", function() { return _fields__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list */ "./node_modules/yii-steroids/reducers/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "list", function() { return _list__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config */ "./node_modules/yii-steroids/reducers/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notifications */ "./node_modules/yii-steroids/reducers/notifications.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return _notifications__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal */ "./node_modules/yii-steroids/reducers/modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return _modal__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routing */ "./node_modules/yii-steroids/reducers/routing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return _routing__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation */ "./node_modules/yii-steroids/reducers/navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return _navigation__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./screen */ "./node_modules/yii-steroids/reducers/screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "screen", function() { return _screen__WEBPACK_IMPORTED_MODULE_17__["default"]; });









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }













/* harmony default export */ __webpack_exports__["default"] = (asyncReducers => Object(redux__WEBPACK_IMPORTED_MODULE_7__["combineReducers"])(_objectSpread({
  form: redux_form__WEBPACK_IMPORTED_MODULE_8__["reducer"],
  auth: _auth__WEBPACK_IMPORTED_MODULE_9__["default"],
  fields: _fields__WEBPACK_IMPORTED_MODULE_10__["default"],
  list: _list__WEBPACK_IMPORTED_MODULE_11__["default"],
  config: _config__WEBPACK_IMPORTED_MODULE_12__["default"],
  notifications: _notifications__WEBPACK_IMPORTED_MODULE_13__["default"],
  modal: _modal__WEBPACK_IMPORTED_MODULE_14__["default"],
  routing: _routing__WEBPACK_IMPORTED_MODULE_15__["default"],
  navigation: _navigation__WEBPACK_IMPORTED_MODULE_16__["default"],
  screen: _screen__WEBPACK_IMPORTED_MODULE_17__["default"]
}, asyncReducers)));

/***/ }),

/***/ "./node_modules/yii-steroids/reducers/list.js":
/*!****************************************************!*\
  !*** ./node_modules/yii-steroids/reducers/list.js ***!
  \****************************************************/
/*! exports provided: default, getList, getIds, getCheckedIds, isChecked, isCheckedAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIds", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckedIds", function() { return getCheckedIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChecked", function() { return isChecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCheckedAll", function() { return isCheckedAll; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es_isMatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/isMatch */ "./node_modules/lodash-es/isMatch.js");
/* harmony import */ var lodash_es_every__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/every */ "./node_modules/lodash-es/every.js");
/* harmony import */ var lodash_es_extend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es/extend */ "./node_modules/lodash-es/extend.js");
/* harmony import */ var _actions_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/list */ "./node_modules/yii-steroids/actions/list.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const initialState = {
  lists: {},
  selectedIds: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_list__WEBPACK_IMPORTED_MODULE_11__["LIST_INIT"]:
      return _objectSpread({}, state, {
        lists: _objectSpread({}, state.lists, {
          [action.listId]: _objectSpread({
            meta: {},
            layoutName: null,
            total: action.total || (action.items ? action.items.length : 0),
            isFetched: !!action.items,
            isLoading: false
          }, action)
        })
      });

    case _actions_list__WEBPACK_IMPORTED_MODULE_11__["LIST_BEFORE_FETCH"]:
      return _objectSpread({}, state, {
        lists: _objectSpread({}, state.lists, {
          [action.listId]: _objectSpread({}, state.lists[action.listId], {}, action, {
            isLoading: true
          })
        })
      });

    case _actions_list__WEBPACK_IMPORTED_MODULE_11__["LIST_AFTER_FETCH"]:
      let items;
      const list = state.lists[action.listId];

      if (list && list.items && list.loadMore && list.page > 1) {
        items = [].concat(list.items);
        action.items.forEach((entry, i) => {
          const index = (list.page - 1) * list.pageSize + i;
          items[index] = entry;
        });
      } else {
        items = [].concat(action.items);
      }

      return _objectSpread({}, state, {
        lists: _objectSpread({}, state.lists, {
          [action.listId]: _objectSpread({}, list, {}, action, {
            items,
            isFetched: true,
            isLoading: false
          })
        })
      });

    case _actions_list__WEBPACK_IMPORTED_MODULE_11__["LIST_ITEM_ADD"]:
      if (state.lists[action.listId]) {
        return _objectSpread({}, state, {
          lists: _objectSpread({}, state.lists, {
            [action.listId]: _objectSpread({}, state.lists[action.listId], {
              items: action.prepend ? [].concat(action.item).concat(state.lists[action.listId].items) : [].concat(state.lists[action.listId].items).concat(action.item)
            })
          })
        });
      }

      break;

    case _actions_list__WEBPACK_IMPORTED_MODULE_11__["LIST_ITEM_UPDATE"]:
      return _objectSpread({}, state, {
        lists: _objectSpread({}, state.lists, {
          [action.listId]: _objectSpread({}, state.lists[action.listId], {
            items: state.lists[action.listId].items.map(item => {
              if (Object(lodash_es_isMatch__WEBPACK_IMPORTED_MODULE_8__["default"])(item, action.condition)) {
                item = Object(lodash_es_extend__WEBPACK_IMPORTED_MODULE_10__["default"])({}, item, action.item);
              }

              return item;
            })
          })
        })
      });

    case _actions_list__WEBPACK_IMPORTED_MODULE_11__["LIST_DESTROY"]:
      delete state.lists[action.listId];
      return _objectSpread({}, state, {
        lists: _objectSpread({}, state.lists)
      });

    case _actions_list__WEBPACK_IMPORTED_MODULE_11__["LIST_TOGGLE_ITEM"]:
      const selectedIds = Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, ['selectedIds', action.listId]) || [];
      const index = selectedIds.indexOf(action.itemId);

      if (index === -1) {
        selectedIds.push(action.itemId);
      } else {
        selectedIds.splice(index, 1);
      }

      return _objectSpread({}, state, {
        selectedIds: _objectSpread({}, state.selectedIds, {
          [action.listId]: [].concat(selectedIds)
        })
      });

    case _actions_list__WEBPACK_IMPORTED_MODULE_11__["LIST_TOGGLE_ALL"]:
      const list4 = state.lists[action.listId];

      if (list4) {
        const ids = list4.items.map(item => item[list4.primaryKey]) || [];

        const isAll = state.selectedIds[action.listId] && Object(lodash_es_every__WEBPACK_IMPORTED_MODULE_9__["default"])(ids.map(id => state.selectedIds[action.listId].includes(id)));

        return _objectSpread({}, state, {
          selectedIds: _objectSpread({}, state.selectedIds, {
            [action.listId]: isAll ? [] : ids
          })
        });
      }

      break;

    case _actions_list__WEBPACK_IMPORTED_MODULE_11__["LIST_SET_LAYOUT"]:
      return _objectSpread({}, state, {
        lists: _objectSpread({}, state.lists, {
          [action.listId]: _objectSpread({}, state.lists[action.listId], {
            layoutName: action.layoutName
          })
        })
      });
  }

  return state;
});
const getList = (state, listId) => Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, ['list', 'lists', listId]) || null;
const getIds = (state, listId) => {
  const list = getList(state, listId);
  return list && list.items && list.items.map(item => item[list.primaryKey]) || [];
};
const getCheckedIds = (state, listId) => {
  return Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, ['list', 'selectedIds', listId]) || [];
};
const isChecked = (state, listId, itemId) => getCheckedIds(state, listId).includes(itemId);
const isCheckedAll = (state, listId) => {
  const selectedIds = getCheckedIds(state, listId);
  return selectedIds.length > 0 && Object(lodash_es_every__WEBPACK_IMPORTED_MODULE_9__["default"])(getIds(state, listId).map(id => selectedIds.includes(id)));
};

/***/ }),

/***/ "./node_modules/yii-steroids/reducers/modal.js":
/*!*****************************************************!*\
  !*** ./node_modules/yii-steroids/reducers/modal.js ***!
  \*****************************************************/
/*! exports provided: default, getOpened */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpened", function() { return getOpened; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es_values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/values */ "./node_modules/lodash-es/values.js");
/* harmony import */ var _actions_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/modal */ "./node_modules/yii-steroids/actions/modal.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




const initialState = {
  opened: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_modal__WEBPACK_IMPORTED_MODULE_9__["OPEN_MODAL"]:
      return {
        opened: _objectSpread({}, state.opened, {
          [action.id]: {
            id: action.id,
            modal: action.modal,
            props: _objectSpread({}, Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, `opened.${action.id}.props`), {}, action.props)
          }
        })
      };

    case _actions_modal__WEBPACK_IMPORTED_MODULE_9__["CLOSE_MODAL"]:
      if (action.id) {
        const opened = state.opened;
        delete opened[action.id];
        return {
          opened
        };
      } else {
        return {
          opened: {}
        };
      }

    default:
      return state;
  }
});
const getOpened = state => Object(lodash_es_values__WEBPACK_IMPORTED_MODULE_8__["default"])(state.modal.opened);

/***/ }),

/***/ "./node_modules/yii-steroids/reducers/navigation.js":
/*!**********************************************************!*\
  !*** ./node_modules/yii-steroids/reducers/navigation.js ***!
  \**********************************************************/
/*! exports provided: default, isInitialized, getBreadcrumbs, getNavItem, getNavUrl, getRoute, getCurrentItem, getCurrentItemParam, getNavItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInitialized", function() { return isInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreadcrumbs", function() { return getBreadcrumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavItem", function() { return getNavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavUrl", function() { return getNavUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoute", function() { return getRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentItem", function() { return getCurrentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentItemParam", function() { return getCurrentItemParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavItems", function() { return getNavItems; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/yii-steroids/node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");
/* harmony import */ var _actions_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/navigation */ "./node_modules/yii-steroids/actions/navigation.js");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routing */ "./node_modules/yii-steroids/reducers/routing.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const initialState = {
  routesTree: null,
  params: {},
  configs: [],
  data: {},
  counters: {}
};

const findRecursive = (items, pageId, pathItems) => {
  let finedItem = null;
  (items || []).forEach(item => {
    if (item.id === pageId) {
      finedItem = item;
    }

    if (!finedItem) {
      finedItem = findRecursive(item.items, pageId, pathItems);

      if (finedItem && pathItems) {
        pathItems.push(item);
      }
    }
  });
  return finedItem;
};

const checkActiveRecursive = (pathname, item) => {
  const match = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["matchPath"])(pathname, {
    exact: !!item.exact,
    strict: !!item.strict,
    path: item.path
  });

  if (!match) {
    return !!(item.items || []).find(sub => checkActiveRecursive(pathname, sub));
  }

  return true;
};

const buildNavItem = (state, item, params) => {
  const pathname = Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_9__["default"])(state, 'routing.location.pathname');

  let url = item.path;

  try {
    url = path_to_regexp__WEBPACK_IMPORTED_MODULE_7___default.a.compile(item.path)(_objectSpread({}, state.navigation.params, {}, params));
  } catch (e) {// eslint-disable-line no-empty
  }

  return _objectSpread({}, item, {
    id: item.id,
    title: item.title,
    label: item.label,
    url: url,
    icon: item.icon || null,
    // you can set icon property to route in routes tree
    isVisible: item.isVisible,
    isActive: checkActiveRecursive(pathname, item)
  });
};

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_navigation__WEBPACK_IMPORTED_MODULE_10__["NAVIGATION_INIT_ROUTES"]:
      return _objectSpread({}, state, {
        routesTree: action.routesTree
      });

    case _actions_navigation__WEBPACK_IMPORTED_MODULE_10__["NAVIGATION_SET_PARAMS"]:
      return _objectSpread({}, state, {
        params: _objectSpread({}, state.params, {}, action.params)
      });

    case _actions_navigation__WEBPACK_IMPORTED_MODULE_10__["NAVIGATION_ADD_CONFIGS"]:
      const configs = [].concat(state.configs);

      const counters = _objectSpread({}, state.counters);

      action.configs.forEach(config => {
        const id = Object(_actions_navigation__WEBPACK_IMPORTED_MODULE_10__["getConfigId"])(config);

        if (counters[id]) {
          counters[id]++;
        } else {
          counters[id] = 1;
          configs.push(config);
        }
      });
      return _objectSpread({}, state, {
        configs,
        counters
      });

    case _actions_navigation__WEBPACK_IMPORTED_MODULE_10__["NAVIGATION_REMOVE_CONFIGS"]:
      let configs2 = [].concat(state.configs);

      const counters2 = _objectSpread({}, state.counters);

      action.configs.forEach(config => {
        const id = Object(_actions_navigation__WEBPACK_IMPORTED_MODULE_10__["getConfigId"])(config);

        if (counters2[id]) {
          counters2[id]--;

          if (counters2[id] <= 0) {
            configs2 = configs2.filter(item => Object(_actions_navigation__WEBPACK_IMPORTED_MODULE_10__["getConfigId"])(item) !== id);
          }
        }
      });
      return _objectSpread({}, state, {
        configs: configs2,
        counters: counters2
      });

    case _actions_navigation__WEBPACK_IMPORTED_MODULE_10__["NAVIGATION_SET_DATA"]:
      return _objectSpread({}, state, {
        data: _objectSpread({}, state.data, {
          [Object(_actions_navigation__WEBPACK_IMPORTED_MODULE_10__["getConfigId"])(action.config)]: action.data
        })
      });
  }

  return state;
});
const isInitialized = state => !!state.navigation.routesTree;
const getBreadcrumbs = (state, pageId = null, params = {}) => {
  const items = [];
  const root = state.navigation.routesTree;

  if (root) {
    if (root.id !== pageId) {
      const route = findRecursive(root.items, pageId, items);
      items.push(root);
      items.reverse();
      items.push(route);
    } else {
      items.push(root);
    }
  }

  return items.filter(item => item.isVisible !== false).map(route => buildNavItem(state, route, params));
};
const getNavItem = (state, pageId, params = {}) => {
  const route = getRoute(state, pageId);
  return route ? buildNavItem(state, route, params) : null;
};
const getNavUrl = (state, pageId, params = {}) => {
  const navItem = getNavItem(state, pageId, params);
  return navItem ? navItem.url : '';
};
const getRoute = (state, pageId) => {
  const root = state.navigation.routesTree;

  if (!root) {
    return null;
  }

  return root.id === pageId ? root : findRecursive(root.items, pageId);
};
const getCurrentItem = state => {
  const route = Object(_routing__WEBPACK_IMPORTED_MODULE_11__["getCurrentRoute"])(state);
  return route && getRoute(state, route.id) || null;
};
const getCurrentItemParam = (state, param) => {
  const item = getCurrentItem(state);
  return item && item[param] || null;
};
const getNavItems = (state, parentPageId = null, params = {}) => {
  const route = getRoute(state, parentPageId);
  return route ? (route.items || []).filter(item => item.isVisible !== false).map(item => buildNavItem(state, item, params)) : [];
};

/***/ }),

/***/ "./node_modules/yii-steroids/reducers/notifications.js":
/*!*************************************************************!*\
  !*** ./node_modules/yii-steroids/reducers/notifications.js ***!
  \*************************************************************/
/*! exports provided: default, getNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotifications", function() { return getNotifications; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/notifications */ "./node_modules/yii-steroids/actions/notifications.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialState = {
  items: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_notifications__WEBPACK_IMPORTED_MODULE_7__["NOTIFICATIONS_SHOW"]:
      return _objectSpread({}, state, {
        items: [].concat(state.items).filter(item => item.level !== action.level || item.message !== action.message) // unique
        .concat([{
          id: action.id,
          level: action.level || 'info',
          message: action.message,
          isClosing: false
        }])
      });

    case _actions_notifications__WEBPACK_IMPORTED_MODULE_7__["NOTIFICATIONS_CLOSING"]:
      return _objectSpread({}, state, {
        items: [].concat(state.items).map(item => {
          if (item.id === action.id) {
            item.isClosing = true;
          }

          return item;
        })
      });

    case _actions_notifications__WEBPACK_IMPORTED_MODULE_7__["NOTIFICATIONS_CLOSE"]:
      return _objectSpread({}, state, {
        items: state.items.filter(item => item.id !== action.id)
      });

    default:
      return state;
  }
});
const getNotifications = state => state.notifications.items;

/***/ }),

/***/ "./node_modules/yii-steroids/reducers/routing.js":
/*!*******************************************************!*\
  !*** ./node_modules/yii-steroids/reducers/routing.js ***!
  \*******************************************************/
/*! exports provided: LOCATION_CHANGE, default, getCurrentRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_CHANGE", function() { return LOCATION_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentRoute", function() { return getCurrentRoute; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/isEmpty */ "./node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/isEqual */ "./node_modules/lodash-es/isEqual.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/routing */ "./node_modules/yii-steroids/actions/routing.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
const initialState = {
  location: null,
  action: null,
  routes: []
};
const routesCache = {};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return _objectSpread({}, state, {
        location: action.payload
      });

    case _actions_routing__WEBPACK_IMPORTED_MODULE_11__["ROUTING_REGISTER"]:
      return _objectSpread({}, state, {
        routes: action.routes.map(item => ({
          id: item.id,
          exact: item.exact,
          strict: item.strict,
          path: item.path
        }))
      });
  }

  return state;
});
const getCurrentRoute = state => {
  if (!state || Object(lodash_es_isEmpty__WEBPACK_IMPORTED_MODULE_8__["default"])(state)) {
    return null;
  }

  let currentRoute = null;

  const pathname = Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, 'routing.location.pathname');

  state.routing.routes.forEach(route => {
    if (currentRoute) {
      return;
    }

    const match = Object(react_router__WEBPACK_IMPORTED_MODULE_10__["matchPath"])(pathname, route);

    const finedRoute = match && _objectSpread({
      id: route.id
    }, match);

    if (finedRoute) {
      if (!routesCache[route.id] || !Object(lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_9__["default"])(routesCache[route.id], finedRoute)) {
        routesCache[route.id] = finedRoute;
      }

      currentRoute = routesCache[route.id];
    }
  });
  return currentRoute;
};

/***/ }),

/***/ "./node_modules/yii-steroids/reducers/screen.js":
/*!******************************************************!*\
  !*** ./node_modules/yii-steroids/reducers/screen.js ***!
  \******************************************************/
/*! exports provided: SCREE_PHONE, SCREEN_TABLET, SCREEN_DESKTOP, default, getDeviceType, isPhone, isTablet, isDesktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREE_PHONE", function() { return SCREE_PHONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_TABLET", function() { return SCREEN_TABLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_DESKTOP", function() { return SCREEN_DESKTOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeviceType", function() { return getDeviceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPhone", function() { return isPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTablet", function() { return isTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return isDesktop; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/screen */ "./node_modules/yii-steroids/actions/screen.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const SCREE_PHONE = 'phone';
const SCREEN_TABLET = 'tablet';
const SCREEN_DESKTOP = 'desktop';
const initialState = {
  width: 1280,
  media: {
    [SCREE_PHONE]: 320,
    [SCREEN_TABLET]: 768,
    [SCREEN_DESKTOP]: 1024
  }
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_screen__WEBPACK_IMPORTED_MODULE_7__["SCREEN_SET_WIDTH"]:
      return _objectSpread({}, state, {
        width: action.width
      });

    case _actions_screen__WEBPACK_IMPORTED_MODULE_7__["SCREEN_SET_MEDIA"]:
      return _objectSpread({}, state, {
        media: _objectSpread({}, state.media, {}, action.media)
      });
  }

  return state;
});
const getDeviceType = state => {
  if (state.screen.width < state.screen.media[SCREEN_TABLET]) {
    return SCREE_PHONE;
  }

  if (state.screen.width < state.screen.media[SCREEN_DESKTOP]) {
    return SCREEN_TABLET;
  }

  return SCREEN_DESKTOP;
};
const isPhone = state => getDeviceType(state) === SCREE_PHONE;
const isTablet = state => getDeviceType(state) === SCREEN_TABLET;
const isDesktop = state => getDeviceType(state) === SCREEN_DESKTOP;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style/index.scss */ "./src/style/index.scss");
/* harmony import */ var style_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(style_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_Layout_Layout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/Layout/Layout.scss */ "./src/shared/Layout/Layout.scss");
/* harmony import */ var shared_Layout_Layout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shared_Layout_Layout_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var routes_LandingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! routes/LandingPage */ "./src/routes/LandingPage/index.tsx");
var _jsxFileName = "/usr/local/var/www/neutrino-web/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "Layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(routes_LandingPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
});
;

/***/ }),

/***/ "./src/actions/api.js":
/*!****************************!*\
  !*** ./src/actions/api.js ***!
  \****************************/
/*! exports provided: API_ADD_CONFIGS, API_REMOVE_CONFIGS, API_SET_DATA, getConfigId, apiAddConfigs, apiRemoveConfigs, apiWsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ADD_CONFIGS", function() { return API_ADD_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_REMOVE_CONFIGS", function() { return API_REMOVE_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_SET_DATA", function() { return API_SET_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigId", function() { return getConfigId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiAddConfigs", function() { return apiAddConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRemoveConfigs", function() { return apiRemoveConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiWsHandler", function() { return apiWsHandler; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_es_isArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/isArray */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var lodash_es_trim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/trim */ "./node_modules/lodash-es/trim.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var reducers_currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reducers/currency */ "./src/reducers/currency.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const API_ADD_CONFIGS = 'API_ADD_CONFIGS';
const API_REMOVE_CONFIGS = 'API_REMOVE_CONFIGS';
const API_SET_DATA = 'API_SET_DATA';

const normalizeConfigs = configs => {
  if (!configs) {
    configs = [];
  }

  if (!Object(lodash_es_isArray__WEBPACK_IMPORTED_MODULE_7__["default"])(configs)) {
    configs = [configs];
  }

  configs.forEach((config, index) => {
    if (!config.key || !config.url) {
      throw new Error('key and url is required');
    }

    configs[index] = _objectSpread({
      method: 'get',
      params: {}
    }, config);
  });
  return configs;
};

const fetch = config => components__WEBPACK_IMPORTED_MODULE_9__["http"].send(config.method, config.url, config.params).then(result => result.data);

const getConfigId = config => config.id || Object(lodash_es_trim__WEBPACK_IMPORTED_MODULE_8__["default"])(config.url, '/');
const apiAddConfigs = configs => dispatch => {
  configs = normalizeConfigs(configs);
  dispatch({
    type: API_ADD_CONFIGS,
    configs
  });
  configs.forEach(config => {
    fetch(config).then(data => dispatch({
      type: API_SET_DATA,
      config,
      data
    }));
  });
};
const apiRemoveConfigs = configs => {
  configs = normalizeConfigs(configs);
  return {
    type: API_REMOVE_CONFIGS,
    configs
  };
};
const apiWsHandler = event => (dispatch, getState) => {
  if (event.stream === 'collections') {
    const state = getState();
    const configs = state.api.configs;

    if (event.data.pairName === Object(reducers_currency__WEBPACK_IMPORTED_MODULE_10__["getPairName"])(state)) {
      configs.forEach(config => {
        if ([].concat(config.collection).includes(event.data.collectionName)) {
          fetch(config).then(data => dispatch({
            type: API_SET_DATA,
            config,
            data
          }));
        }
      });
    }
  }
};

/***/ }),

/***/ "./src/actions/contract.ts":
/*!*********************************!*\
  !*** ./src/actions/contract.ts ***!
  \*********************************/
/*! exports provided: UPDATE_CONTRACT_ADDRESS_INFO, DROP_CONTRACT_ADDRESS_INFO, CREATE_CONTRACT_ADDRESS_INFO, SET_CONTRACT_PRICE, SET_TOTAL_ISSUED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONTRACT_ADDRESS_INFO", function() { return UPDATE_CONTRACT_ADDRESS_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROP_CONTRACT_ADDRESS_INFO", function() { return DROP_CONTRACT_ADDRESS_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CONTRACT_ADDRESS_INFO", function() { return CREATE_CONTRACT_ADDRESS_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CONTRACT_PRICE", function() { return SET_CONTRACT_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOTAL_ISSUED", function() { return SET_TOTAL_ISSUED; });
const UPDATE_CONTRACT_ADDRESS_INFO = 'UPDATE_CONTRACT_ADDRESS_INFO';
const DROP_CONTRACT_ADDRESS_INFO = 'DROP_CONTRACT_ADDRESS_INFO';
const CREATE_CONTRACT_ADDRESS_INFO = 'CREATE_CONTRACT_ADDRESS_INFO';
const SET_CONTRACT_PRICE = 'SET_CONTRACT_PRICE';
const SET_TOTAL_ISSUED = 'SET_TOTAL_ISSUED';

/***/ }),

/***/ "./src/actions/currency.js":
/*!*********************************!*\
  !*** ./src/actions/currency.js ***!
  \*********************************/
/*! exports provided: CURRENCY_SET_CURRENT, CURRENCY_SET_PRICES, currencySetCurrent, currencyWsHandler, currencySetPrices, currencyFetchPrices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_SET_CURRENT", function() { return CURRENCY_SET_CURRENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_SET_PRICES", function() { return CURRENCY_SET_PRICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencySetCurrent", function() { return currencySetCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyWsHandler", function() { return currencyWsHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencySetPrices", function() { return currencySetPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyFetchPrices", function() { return currencyFetchPrices; });
/* harmony import */ var enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enums/CurrencyEnum */ "./src/enums/CurrencyEnum.js");
/* harmony import */ var enums_CollectionEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! enums/CollectionEnum */ "./src/enums/CollectionEnum.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./src/components/index.ts");



const CURRENCY_SET_CURRENT = 'CURRENCY_SET_CURRENT';
const CURRENCY_SET_PRICES = 'CURRENCY_SET_PRICES';
const currencySetCurrent = (quote, base = null, source = null) => {
  base = base || enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_0__["default"].getBaseCurrency(quote);
  source = source || enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_0__["default"].getSourceCurrency(quote);
  return {
    type: CURRENCY_SET_CURRENT,
    source,
    base,
    quote
  };
};
const currencyWsHandler = event => dispatch => {
  if (event.stream === 'collections' && event.data.collectionName === enums_CollectionEnum__WEBPACK_IMPORTED_MODULE_1__["default"].NEUTRINO_PRICES) {
    dispatch(currencyFetchPrices());
  }
};
const currencySetPrices = prices => ({
  type: CURRENCY_SET_PRICES,
  prices
});
const currencyFetchPrices = () => components__WEBPACK_IMPORTED_MODULE_2__["http"].get('/api/v1/prices').then(prices => currencySetPrices(prices));

/***/ }),

/***/ "./src/components/DalComponent.js":
/*!****************************************!*\
  !*** ./src/components/DalComponent.js ***!
  \****************************************/
/*! exports provided: STORAGE_AUTH_KEY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_AUTH_KEY", function() { return STORAGE_AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DalComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-integer */ "./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yii_steroids_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yii-steroids/actions/auth */ "./node_modules/yii-steroids/actions/auth.js");
/* harmony import */ var _dal_apiHoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dal/apiHoc */ "./src/components/dal/apiHoc.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var _contractControllers_BalanceController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contractControllers/BalanceController */ "./src/contractControllers/BalanceController.ts");
/* harmony import */ var _dal_Keeper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dal/Keeper */ "./src/components/dal/Keeper.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/ContractEnum */ "./src/enums/ContractEnum.js");
/* harmony import */ var enums_UserRole__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! enums/UserRole */ "./src/enums/UserRole.js");
/* harmony import */ var enums_OrderTypeEnum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! enums/OrderTypeEnum */ "./src/enums/OrderTypeEnum.js");












const STORAGE_AUTH_KEY = 'isAuth';
class DalComponent {
  constructor() {
    this.network = null;
    this.nodeUrl = null;
    this.assets = null;
    this.contracts = null;
    this.hoc = _dal_apiHoc__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.balance = new _contractControllers_BalanceController__WEBPACK_IMPORTED_MODULE_6__["default"]({
      dalRef: this
    });
    this.balance.onUpdate = this.login.bind(this);
    this.keeper = new _dal_Keeper__WEBPACK_IMPORTED_MODULE_7__["default"](this);
    this.keeper.onUpdate = this.login.bind(this);

    if (false) {}
  }
  /**
   * Auth current user and return it data
   * @returns {Promise}
   */


  async login() {
    // Start keeper listener, fetch balances
    const account = await this.keeper.getAccount();
    await this.keeper.start();
    await this.balance.start(account.address); // Keeper user

    const user = account ? {
      role: enums_UserRole__WEBPACK_IMPORTED_MODULE_10__["default"].REGISTERED,
      address: account.address,
      network: account.network,
      balances: this.balance.getBalances()
    } : null; // Mark logged

    if (account && !this.isLogged()) {
      components__WEBPACK_IMPORTED_MODULE_5__["clientStorage"].set(STORAGE_AUTH_KEY, '1');
    } // Update redux store


    const store = __webpack_require__(/*! components */ "./src/components/index.ts").store;

    const storeUser = store.getState().auth.user || null;

    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(storeUser, user)) {
      store.dispatch(Object(yii_steroids_actions_auth__WEBPACK_IMPORTED_MODULE_3__["setUser"])(user));
    }

    return user;
  }
  /**
   * Check is logged flag
   * @returns {boolean}
   */


  isLogged() {
    return components__WEBPACK_IMPORTED_MODULE_5__["clientStorage"].get(STORAGE_AUTH_KEY) === '1';
  }
  /**
   * Logout user
   * @returns {Promise<void>}
   */


  async logout() {
    __webpack_require__(/*! components */ "./src/components/index.ts").store.dispatch(Object(yii_steroids_actions_auth__WEBPACK_IMPORTED_MODULE_3__["setUser"])(null));

    components__WEBPACK_IMPORTED_MODULE_5__["clientStorage"].remove(STORAGE_AUTH_KEY);
    this.keeper.stop();
    this.balance.stop();
  }

  async swapWavesToNeutrino(pairName, amount) {
    await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].NEUTRINO, 'swapWavesToNeutrino', [], 'WAVES', amount);
  }

  async swapNeutrinoToWaves(pairName, paymentCurrency, amount) {
    await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].NEUTRINO, 'swapNeutrinoToWaves', [], this.assets[paymentCurrency], amount);
  }

  async withdraw(pairName, address, index) {
    await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].NEUTRINO, 'withdraw', [address, index], 'WAVES', 0);
  }

  async setBondOrder(pairName, price, paymentCurrency, bondsAmount) {
    if (price <= 0 || price >= 1) {
      return;
    }

    price = Math.round(price * 100) / 100;
    const contractPrice = price * 100;

    let position = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()((await axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(`/api/v1/bonds/${pairName}/position`, {
      params: {
        price: contractPrice
      }
    })), 'data.position');

    if (price > 0 && bondsAmount > 0 && _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0___default()(position)) {
      await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].AUCTION, 'addBuyBondOrder', [contractPrice, position], this.assets[paymentCurrency], bondsAmount * price);
    }
  }

  async setLiquidateOrder(pairName, paymentCurrency, total) {
    await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].LIQUIDATION, 'addLiquidationOrder', [], this.assets[paymentCurrency], total);
  }

  async cancelOrder(pairName, type, hash) {
    switch (type) {
      case enums_OrderTypeEnum__WEBPACK_IMPORTED_MODULE_11__["default"].BUY:
        await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].AUCTION, 'cancelOrder', [hash], 'WAVES', 0);
        break;

      case enums_OrderTypeEnum__WEBPACK_IMPORTED_MODULE_11__["default"].LIQUIDATE:
        await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].LIQUIDATION, 'cancelOrder', [hash], 'WAVES', 0);
        break;
    }
  } //RPD


  async lockNeutrino(pairName, paymentCurrency, amount) {
    await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].RPD, 'lockNeutrino', [], this.assets[paymentCurrency], amount);
  }

  async unlockNeutrino(pairName, paymentCurrency, amount) {
    await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].RPD, 'unlockNeutrino', [amount, this.assets[paymentCurrency]], 'WAVES', 0);
  }

  async checkWithdraw(pairName, index, historyIndex) {
    await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].RPD, 'withdraw', [index, historyIndex], 'WAVES', 0);
  }

  async transferFunds(pairName, paymentCurrency, address, amount) {
    await this.keeper.sendTransaction(pairName, _enums_ContractEnum__WEBPACK_IMPORTED_MODULE_9__["default"].NEUTRINO, 'transfer', [address], this.assets[paymentCurrency], amount);
  }

}

/***/ }),

/***/ "./src/components/WebSocketClient.js":
/*!*******************************************!*\
  !*** ./src/components/WebSocketClient.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebSocketClient; });
class WebSocketClient {
  constructor(params = {}) {
    this.wsUrl = params.wsUrl || null;
    this.onOpen = params.onOpen || null;
    this.onClose = params.onClose || null;
    this.onMessage = params.onMessage || null;
    this._connection = null;
    this._tryCount = null;
    this._connect = this._connect.bind(this);
    this._onOpen = this._onOpen.bind(this);
    this._onMessage = this._onMessage.bind(this);
    this._onClose = this._onClose.bind(this);
  }

  open() {
    // Close previous
    this.close();

    this._connect();
  }

  close() {
    if (this._connection) {
      this._connection.close();
    }
  }

  _connect() {
    this._connection = new WebSocket(this.wsUrl);
    this._connection.onopen = this._onOpen;
    this._connection.onmessage = this._onMessage;
    this._connection.onclose = this._onClose;
  }

  _reConnect() {
    let delay = 1000;

    if (this._tryCount > 10) {
      delay = 2000;
    }

    if (this._tryCount > 50) {
      delay = 5000;
    }

    if (this._tryCount > 100) {
      delay = 15000;
    }

    this._tryCount++;
    setTimeout(this._connect, delay);
  }

  _onOpen() {
    this._tryCount = 0;

    if (this.onOpen) {
      this.onOpen();
    }
  }

  _onMessage(message) {
    if (this.onMessage) {
      this.onMessage(JSON.parse(message.data));
    }
  }

  _onClose(event) {
    if (this.onClose) {
      this.onClose(event);
    }

    this._reConnect();
  }

}
;

/***/ }),

/***/ "./src/components/dal/Keeper.js":
/*!**************************************!*\
  !*** ./src/components/dal/Keeper.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keeper; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);




const {
  waitForTx,
  broadcast
} = __webpack_require__(/*! @waves/waves-transactions */ "@waves/waves-transactions");

const _isString = __webpack_require__(/*! lodash/isString */ "lodash/isString");

const _isInteger = __webpack_require__(/*! lodash/isInteger */ "lodash/isInteger");

const _isObject = __webpack_require__(/*! lodash/isObject */ "lodash/isObject");

class Keeper {
  constructor(dal) {
    this.dal = dal;
    this.onUpdate = null;
    this.fee = 0.009;
    this._isAvailable = null;
    this._address = null;
    this._pageStart = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()();
    this._checkerInterval = null;
    this._addressChecker = this._addressChecker.bind(this);
  }

  async start() {
    if (this._checkerInterval) {
      clearInterval(this._checkerInterval);
    }

    this._address = await this.getAddress();
    this._checkerInterval = setInterval(this._addressChecker, 1000);
  }

  stop() {
    this._address = null;

    if (this._checkerInterval) {
      clearInterval(this._checkerInterval);
    }
  }

  async isInstalled() {
    const keeper = await this.getPlugin();
    return !!keeper;
  }

  async getAccount() {
    const keeper = await this.getPlugin();

    if (!keeper) {
      return null;
    }

    try {
      const userData = await keeper.publicState();
      return userData.account;
    } catch {
      return null;
    }
  }

  async getAddress() {
    const account = await this.getAccount();

    if (!account) {
      return null;
    }

    return account.address;
  }
  /**
   * Get WavesKeeper from window
   * @returns {Promise}
   */


  async getPlugin() {
    const checker = resolve => {
      if (this._isAvailable === true || _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()() - this._pageStart > 2000 && window.WavesKeeper && window.WavesKeeper.publicState) {
        this._isAvailable = true;
        setTimeout(() => resolve(window.WavesKeeper));
      } else if (this._isAvailable === false || _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()() - this._pageStart > 5000) {
        this._isAvailable = false;
        resolve(null);
      } else if (this._isAvailable === null) {
        setTimeout(() => checker(resolve), 100);
      }
    };

    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(checker);
  }
  /**
   *
   * @param {string} pairName
   * @param {string} contractName
   * @param {string} method
   * @param {array} args
   * @param {string} paymentCurrency
   * @param {number} paymentAmount
   * @param {boolean} waitTx
   * @returns {Promise}
   */


  async sendTransaction(pairName, contractName, method, args, paymentCurrency, paymentAmount, waitTx = true) {
    const keeper = await this.getPlugin();
    const dApp = this.dal.contracts[pairName][contractName];
    console.log(this.dal.contracts);
    const result = await keeper.signAndPublishTransaction(this._buildTransaction(dApp, method, args, paymentCurrency, paymentAmount));

    if (result) {
      if (!waitTx) {
        return result;
      }

      const tx = JSON.parse(result);
      return waitForTx(tx.id, {
        apiBase: this.dal.nodeUrl,
        timeout: 10000
      }).then(() => result);
    }

    return result;
  }

  async signTransaction(pairName, contractName, method, args, paymentCurrency, paymentAmount) {
    const keeper = await this.getPlugin();
    const dApp = this.dal.contracts[pairName][contractName];
    return keeper.signTransaction(this._buildTransaction(dApp, method, args, paymentCurrency, paymentAmount));
  }

  _buildTransaction(dApp, method, args, paymentCurrency, paymentAmount) {
    const transaction = {
      type: 16,
      data: {
        fee: {
          assetId: 'WAVES',
          tokens: String(this.fee)
        },
        dApp,
        call: {
          args: args.map(item => ({
            type: _isInteger(item) ? 'integer' : 'string',
            value: _isObject(item) ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(item) : item
          })),
          function: method
        },
        payment: !paymentAmount ? [] : [{
          assetId: paymentCurrency || 'WAVES',
          tokens: String(paymentAmount)
        }]
      }
    };

    if (true) {
      console.log('Transaction:', transaction); // eslint-disable-line no-console
    }

    return transaction;
  }

  async broadcastAndWait(tx) {
    if (_isString(tx)) {
      tx = JSON.parse(tx);
    }

    await broadcast(tx, this.dal.nodeUrl);
    await waitForTx(tx.id, {
      apiBase: this.dal.nodeUrl
    });
  }

  async broadcast(tx) {
    if (_isString(tx)) {
      tx = JSON.parse(tx);
    }

    return broadcast(tx, this.dal.nodeUrl);
  }

  async waitForTx(tx) {
    if (_isString(tx)) {
      tx = JSON.parse(tx);
    }

    return waitForTx(tx.id, {
      apiBase: this.dal.nodeUrl
    });
  }

  async _addressChecker() {
    // Get next address
    const address = await this.getAddress();

    if (this._address && address && this._address !== address) {
      this._address = address;

      if (this.onUpdate) {
        this.onUpdate(this._address);
      }
    }
  }

}

/***/ }),

/***/ "./src/components/dal/apiHoc.js":
/*!**************************************!*\
  !*** ./src/components/dal/apiHoc.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/isEqual */ "./node_modules/lodash-es/isEqual.js");
/* harmony import */ var _actions_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/api */ "./src/actions/api.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "/usr/local/var/www/neutrino-web/src/components/dal/apiHoc.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






const stateMap = state => ({
  apiData: state.api && state.api.data || null
});

/* harmony default export */ __webpack_exports__["default"] = (configsFunc => WrappedComponent => {
  var _class, _temp;

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(stateMap)((_temp = _class = class ApiHOC extends react__WEBPACK_IMPORTED_MODULE_8___default.a.Component {
    constructor() {
      super(...arguments);
      this.state = {
        overwritedProps: null
      };
      this._onUpdate = this._onUpdate.bind(this);
    }

    componentDidMount() {
      this.props.dispatch(Object(_actions_api__WEBPACK_IMPORTED_MODULE_10__["apiAddConfigs"])(configsFunc(_objectSpread({}, this.props, {}, this.state.overwritedProps))));
    }

    componentWillUnmount() {
      this.props.dispatch(Object(_actions_api__WEBPACK_IMPORTED_MODULE_10__["apiRemoveConfigs"])(configsFunc(_objectSpread({}, this.props, {}, this.state.overwritedProps))));
    }

    componentDidUpdate(prevProps, prevState) {
      const prevConfigs = [].concat(configsFunc(_objectSpread({}, prevProps, {}, prevState.overwritedProps)));
      const nextConfigs = [].concat(configsFunc(_objectSpread({}, this.props, {}, this.state.overwritedProps)));

      for (let i = 0; i < Math.max(prevConfigs.length, nextConfigs.length); i++) {
        if (!Object(lodash_es_isEqual__WEBPACK_IMPORTED_MODULE_9__["default"])(prevConfigs[i], nextConfigs[i])) {
          this.props.dispatch([Object(_actions_api__WEBPACK_IMPORTED_MODULE_10__["apiRemoveConfigs"])(prevConfigs[i]), Object(_actions_api__WEBPACK_IMPORTED_MODULE_10__["apiAddConfigs"])(nextConfigs[i])]);
        }
      }
    }

    render() {
      const data = {};

      if (this.props.apiData) {
        [].concat(configsFunc(_objectSpread({}, this.props, {}, this.state.overwritedProps))).forEach(config => {
          data[config.key] = this.props.apiData[Object(_actions_api__WEBPACK_IMPORTED_MODULE_10__["getConfigId"])(config)];
        });
      }

      return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.props, this.state.overwritedProps, data, {
        updateApiConfig: this._onUpdate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }));
    }

    _onUpdate(overwritedProps) {
      this.setState({
        overwritedProps
      });
    }

  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_class, "WrappedComponent", WrappedComponent), _temp));
});

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: clientStorage, http, html, resource, store, ui, dal, ws */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientStorage", function() { return clientStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resource", function() { return resource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return ui; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dal", function() { return dal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ws", function() { return ws; });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yii_steroids_components_ClientStorageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yii-steroids/components/ClientStorageComponent */ "./node_modules/yii-steroids/components/ClientStorageComponent.js");
/* harmony import */ var yii_steroids_components_HttpComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yii-steroids/components/HttpComponent */ "./node_modules/yii-steroids/components/HttpComponent.js");
/* harmony import */ var yii_steroids_components_HtmlComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yii-steroids/components/HtmlComponent */ "./node_modules/yii-steroids/components/HtmlComponent.js");
/* harmony import */ var yii_steroids_components_ResourceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yii-steroids/components/ResourceComponent */ "./node_modules/yii-steroids/components/ResourceComponent.js");
/* harmony import */ var yii_steroids_components_StoreComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yii-steroids/components/StoreComponent */ "./node_modules/yii-steroids/components/StoreComponent.js");
/* harmony import */ var yii_steroids_components_UiComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yii-steroids/components/UiComponent */ "./node_modules/yii-steroids/components/UiComponent.js");
/* harmony import */ var _DalComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DalComponent */ "./src/components/DalComponent.js");
/* harmony import */ var _WebSocketClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebSocketClient */ "./src/components/WebSocketClient.js");




// import LocaleComponent from './LocaleComponent';
 // import StoreComponent from 'yii-steroids/components/StoreComponent';

 // import StoreComponent from './StoreComponent';



 // Create instances

const clientStorage = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => new yii_steroids_components_ClientStorageComponent__WEBPACK_IMPORTED_MODULE_1__["default"](), {
  ssr: false
});
const http = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => new yii_steroids_components_HttpComponent__WEBPACK_IMPORTED_MODULE_2__["default"](), {
  ssr: false
});
const html = new yii_steroids_components_HtmlComponent__WEBPACK_IMPORTED_MODULE_3__["default"](); // const html = dynamic(() => new HtmlComponent(), { ssr: false }) as any;
// const locale = new LocaleComponent();
// const locale = dynamic(() => typeof window !== 'undefined' ? new LocaleComponent() : null, { ssr: false }) as any;
// const resource = new ResourceComponent();

const resource = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => new yii_steroids_components_ResourceComponent__WEBPACK_IMPORTED_MODULE_4__["default"](), {
  ssr: false
}); // const store = new StoreComponent();

const store = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => new yii_steroids_components_StoreComponent__WEBPACK_IMPORTED_MODULE_5__["default"](), {
  ssr: false
});
const ui = new yii_steroids_components_UiComponent__WEBPACK_IMPORTED_MODULE_6__["default"](); // const ui = dynamic(() => new UiComponent(), { ssr: false }) as any;
// @ts-ignore
// const dal = dynamic(() => new DalComponent(), { ssr: false }) as any;

const dal = new _DalComponent__WEBPACK_IMPORTED_MODULE_7__["default"](); // @ts-ignore

const ws = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => new _WebSocketClient__WEBPACK_IMPORTED_MODULE_8__["default"](), {
  ssr: false
});


/***/ }),

/***/ "./src/contractControllers/BalanceController.ts":
/*!******************************************************!*\
  !*** ./src/contractControllers/BalanceController.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BalanceController; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/CurrencyEnum */ "./src/enums/CurrencyEnum.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/contractControllers/helpers.ts");





class BalanceController {
  constructor({
    dalRef
  }) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dal", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "_timer", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "_address", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "_balances", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "_lastTransactionId", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onUpdate", void 0);

    this.dal = dalRef;
    this.onUpdate = null;
    this._timer = null;
    this._address = null;
    this._balances = null;
    this._lastTransactionId = null;
    this._next = this._next.bind(this);
  }

  getBalances() {
    return this._balances;
  }

  async start(address) {
    if (this._address === address || !address) {
      return;
    }

    this._address = address;
    this._balances = null;
    this._lastTransactionId = null; // if (!this._address) {
    //     return;
    // }

    return await this._next();
  }

  stop() {
    this._address = null;
    this._balances = null;
    this._lastTransactionId = null;

    if (this._timer) {
      clearTimeout(this._timer);
    }
  }

  async _next() {
    /*let transactionId = null;
    if (this._address) {
        try {
            const result = await this._request(`transactions/address/${this._address}/limit/1`);
            transactionId = result && result.length > 0 ? result[0].id : null;
        } catch (e) {
            console.error('BalanceListener error:', e);
        }
    }
     if (transactionId !== this._lastTransactionId) {
        this._lastTransactionId = transactionId;
        await this._refreshBalance();
    }*/
    await this._refreshBalance(); // @ts-ignore

    this._timer = setTimeout(this._next, 5000);
  }

  async _refreshBalance() {
    const {
      _address: address
    } = this;

    if (!address || !this.dal) {
      return;
    }

    const balanceDict = {};
    const wavesBalanceRes = await Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getAddressDefaultBalance"])({
      nodeUrl: this.dal.nodeUrl,
      address
    });
    balanceDict[_enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_3__["default"].WAVES] = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(wavesBalanceRes.data, 'balance', null);

    for (const currency in this.dal.assets) {
      if (this.dal.assets.hasOwnProperty(currency)) {
        const assetId = this.dal.assets[currency];
        const newBalanceRes = await Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getAssetBalanceInfo"])({
          nodeUrl: this.dal.nodeUrl,
          address,
          assetId
        });
        balanceDict[currency] = newBalanceRes.data.balance || null;
      }
    } // Normalize


    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(balanceDict).forEach(currency => {
      balanceDict[currency] = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["round"])(balanceDict[currency] / _enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_3__["default"].getContractPow(currency), 2);
    });

    if (address === this._address) {
      this._balances = balanceDict;

      if (this.onUpdate) {
        this.onUpdate(balanceDict);
      }
    }
  }

}

/***/ }),

/***/ "./src/contractControllers/helpers.ts":
/*!********************************************!*\
  !*** ./src/contractControllers/helpers.ts ***!
  \********************************************/
/*! exports provided: getAddressInfo, getAddressDefaultBalance, getAddressDataByKey, getAssetDetails, getAssetBalanceInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressInfo", function() { return getAddressInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressDefaultBalance", function() { return getAddressDefaultBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressDataByKey", function() { return getAddressDataByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetDetails", function() { return getAssetDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetBalanceInfo", function() { return getAssetBalanceInfo; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getAddressInfo = async (nodeUrl, address, params) => {
  const url = `${nodeUrl}/addresses/data/${address}`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, params);
  return response;
};
const getAddressDefaultBalance = async (params, axiosConfig) => {
  const {
    nodeUrl,
    address
  } = params;
  const url = `${nodeUrl}/addresses/balance/${address}`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, axiosConfig || {});
  return response;
};
const getAddressDataByKey = async (params, axiosConfig) => {
  const {
    nodeUrl,
    address,
    key
  } = params;
  const url = `${nodeUrl}/addresses/data/${address}/${key}`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, axiosConfig || {});
  return response;
};
const getAssetDetails = async (params, axiosConfig) => {
  const {
    nodeUrl,
    assetId
  } = params;
  const url = `${nodeUrl}/assets/details/${assetId}`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, axiosConfig || {});
  return response;
};
const getAssetBalanceInfo = async (params, axiosConfig) => {
  const {
    nodeUrl,
    address,
    assetId
  } = params;
  const url = `${nodeUrl}/assets/balance/${address}/${assetId}`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, axiosConfig || {});
  return response;
};

/***/ }),

/***/ "./src/enums/CollectionEnum.js":
/*!*************************************!*\
  !*** ./src/enums/CollectionEnum.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollectionEnum; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _Enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum */ "./src/enums/Enum.js");


class CollectionEnum extends _Enum__WEBPACK_IMPORTED_MODULE_1__["default"] {
  // static NEUTRINO_PRICES = 'neutrino_prices';
  static getKeys() {
    return [this.BONDS_ORDERS, this.BONDS_ORDERS_HISTORY, // this.NEUTRINO_PRICES,
    this.NEUTRINO_BALANCES, this.NEUTRINO_WITHDRAW, this.RPD_HISTORY_BALANCES, this.RPD_USER_BALANCES, this.RPD_USER_HISTORY_BALANCES, this.RPD_PROFIT, this.RPD_NEXT_INDEX, this.RPD_INDEX_NUMBERS, this.RPD_IS_CLAIMED, this.CONTROL_CONFIG];
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "BONDS_ORDERS", 'bonds_orders');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "BONDS_ORDERS_HISTORY", 'bonds_orders_history');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "NEUTRINO_ORDERS", 'neutrino_orders');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "NEUTRINO_BALANCES", 'neutrino_balances');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "NEUTRINO_WITHDRAW", 'neutrino_withdraw');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "RPD_BALANCES", 'rpd_balances');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "RPD_HISTORY_BALANCES", 'rpd_history_balances');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "RPD_USER_BALANCES", 'rpd_user_balances');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "RPD_USER_HISTORY_BALANCES", 'rpd_user_history_balances');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "RPD_PROFIT", 'rpd_profit');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "RPD_NEXT_INDEX", 'rpd_next_index');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "RPD_INDEX_NUMBERS", 'rpd_index_numbers');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "RPD_IS_CLAIMED", 'rpd_is_claimed');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CollectionEnum, "CONTROL_CONFIG", 'control_config');

/***/ }),

/***/ "./src/enums/ContractEnum.js":
/*!***********************************!*\
  !*** ./src/enums/ContractEnum.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContractEnum; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _Enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum */ "./src/enums/Enum.js");


class ContractEnum extends _Enum__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static getKeys() {
    return [this.NEUTRINO, this.AUCTION, this.RPD, this.LIQUIDATION];
  }

  static getLabels() {
    return {
      [this.NEUTRINO]: 'neutrino',
      [this.AUCTION]: 'auction',
      [this.RPD]: 'rpd',
      [this.LIQUIDATION]: 'liquidation'
    };
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ContractEnum, "NEUTRINO", 'neutrino');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ContractEnum, "AUCTION", 'auction');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ContractEnum, "RPD", 'rpd');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ContractEnum, "LIQUIDATION", "liquidation");

/***/ }),

/***/ "./src/enums/CurrencyEnum.js":
/*!***********************************!*\
  !*** ./src/enums/CurrencyEnum.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CurrencyEnum; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _Enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum */ "./src/enums/Enum.js");


class CurrencyEnum extends _Enum__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static getKeys() {
    return [this.USD_N];
  }

  static getContractPow(name) {
    const map = {
      [this.WAVES]: Math.pow(10, 8),
      [this.USD_N]: Math.pow(10, 6),
      [this.USD_NB]: 1,
      [this.EUR_N]: Math.pow(10, 2),
      [this.EUR_NB]: 1
    };
    return map[name] || null;
  }

  static getBaseCurrency(id) {
    const map = {
      [this.USD_N]: this.USD_NB,
      [this.EUR_N]: this.EUR_NB //[this.BTC_N]: this.BTC_NB,

    };
    return map[id] || null;
  }

  static getSourceCurrency(id) {
    const map = {
      [this.USD_N]: this.USD,
      [this.USD_NB]: this.USD,
      [this.EUR_N]: this.EUR,
      [this.EUR_NB]: this.EUR //[this.BTC_N]: this.BTC,
      //[this.BTC_NB]: this.BTC,

    };
    return map[id] || null;
  }

  static getSign(id) {
    const map = {
      [this.USD]: '$',
      [this.EUR]: '€'
    };
    return map[id] || null;
  }

  static getLabels() {
    return {
      [this.WAVES]: 'WAVES',
      [this.USD_N]: 'USD-N',
      [this.USD_NB]: 'USD-NB',
      [this.EUR_N]: 'EUR-N',
      [this.EUR_NB]: 'EUR-NB' //[this.BTC_N]: ('BTC-N'),
      //[this.BTC_NB]: ('BTC-NB'),

    };
  }

  static getIconClasses() {
    return {
      [this.WAVES]: 'Icon__wave',
      [this.USD_N]: 'Icon__usd-n',
      [this.USD_NB]: 'Icon__usd-nb',
      [this.EUR_N]: 'Icon__eur-n',
      [this.EUR_NB]: 'Icon__eur-nb'
    };
  }

  static getIconClass(id) {
    return this.getIconClasses()[id] || '';
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CurrencyEnum, "WAVES", 'waves');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CurrencyEnum, "USD", 'usd');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CurrencyEnum, "USD_N", 'usd-n');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CurrencyEnum, "USD_NB", 'usd-nb');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CurrencyEnum, "EUR", 'eur');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CurrencyEnum, "EUR_N", 'eur-n');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CurrencyEnum, "EUR_NB", 'eur-nb');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CurrencyEnum, "BTC", 'btc');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CurrencyEnum, "BTC_N", 'btc-n');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(CurrencyEnum, "BTC_NB", 'btc-nb');

/***/ }),

/***/ "./src/enums/Enum.js":
/*!***************************!*\
  !*** ./src/enums/Enum.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enum; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);


class Enum {
  static getLabels() {
    return {};
  }

  static getKeys() {
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.getLabels());
  }

  static getLabel(id) {
    return this.getLabels()[id] || '';
  }

  static getCssClasses() {
    return {};
  }

  static getCssClass(id) {
    return this.getCssClasses()[id] || '';
  }

  static getDropdownItems() {
    return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(this.getLabels()).map(([id, label]) => ({
      label,
      id
    }));
  }

}

/***/ }),

/***/ "./src/enums/OrderTypeEnum.js":
/*!************************************!*\
  !*** ./src/enums/OrderTypeEnum.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderTypeEnum; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _Enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum */ "./src/enums/Enum.js");


class OrderTypeEnum extends _Enum__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static getKeys() {
    return [this.BUY, this.LIQUIDATE];
  }

  static getLabels() {
    return {
      [this.BUY]: 'Buy',
      [this.LIQUIDATE]: 'Liquidate'
    };
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(OrderTypeEnum, "BUY", 'buy');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(OrderTypeEnum, "LIQUIDATE", 'liquidate');

;

/***/ }),

/***/ "./src/enums/UserRole.js":
/*!*******************************!*\
  !*** ./src/enums/UserRole.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserRole; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _Enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum */ "./src/enums/Enum.js");


class UserRole extends _Enum__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static getKeys() {
    return [this.GUEST, this.REGISTERED, this.ADMIN];
  }

  static getAuth() {
    return [this.REGISTERED, this.ADMIN];
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(UserRole, "GUEST", null);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(UserRole, "REGISTERED", 'registered');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(UserRole, "ADMIN", 'admin');

/***/ }),

/***/ "./src/reducers/api.js":
/*!*****************************!*\
  !*** ./src/reducers/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var actions_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/api */ "./src/actions/api.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialState = {
  configs: [],
  data: {},
  counters: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case actions_api__WEBPACK_IMPORTED_MODULE_7__["API_ADD_CONFIGS"]:
      const configs = [].concat(state.configs);

      const counters = _objectSpread({}, state.counters);

      action.configs.forEach(config => {
        const id = Object(actions_api__WEBPACK_IMPORTED_MODULE_7__["getConfigId"])(config);

        if (counters[id]) {
          counters[id]++;
        } else {
          counters[id] = 1;
          configs.push(config);
        }
      });
      return _objectSpread({}, state, {
        configs,
        counters
      });

    case actions_api__WEBPACK_IMPORTED_MODULE_7__["API_REMOVE_CONFIGS"]:
      let configs2 = [].concat(state.configs);

      const counters2 = _objectSpread({}, state.counters);

      action.configs.forEach(config => {
        const id = Object(actions_api__WEBPACK_IMPORTED_MODULE_7__["getConfigId"])(config);

        if (counters2[id]) {
          counters2[id]--;

          if (counters2[id] <= 0) {
            configs2 = configs2.filter(item => Object(actions_api__WEBPACK_IMPORTED_MODULE_7__["getConfigId"])(item) !== id);
          }
        }
      });
      return _objectSpread({}, state, {
        configs: configs2,
        counters: counters2
      });

    case actions_api__WEBPACK_IMPORTED_MODULE_7__["API_SET_DATA"]:
      return _objectSpread({}, state, {
        data: _objectSpread({}, state.data, {
          [Object(actions_api__WEBPACK_IMPORTED_MODULE_7__["getConfigId"])(action.config)]: action.data
        })
      });
  }

  return state;
});

/***/ }),

/***/ "./src/reducers/contract/index.ts":
/*!****************************************!*\
  !*** ./src/reducers/contract/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_contract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/contract */ "./src/actions/contract.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const initialState = {
  contractData: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_contract__WEBPACK_IMPORTED_MODULE_8__["CREATE_CONTRACT_ADDRESS_INFO"]:
      return _objectSpread({}, state, {
        contractData: _objectSpread({}, state.contractData, {
          [action.address]: action.data || []
        })
      });

    case _actions_contract__WEBPACK_IMPORTED_MODULE_8__["UPDATE_CONTRACT_ADDRESS_INFO"]:
      const oldData = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(state.contractData, `${action.address}`, []);

      return _objectSpread({}, state, {
        contractData: _objectSpread({}, state.contractData, {
          [action.address]: action.data ? [...oldData, ...action.data] : []
        })
      });

    case _actions_contract__WEBPACK_IMPORTED_MODULE_8__["DROP_CONTRACT_ADDRESS_INFO"]:
      return _objectSpread({}, state, {
        contractData: _objectSpread({}, state.contractData, {
          [action.address]: []
        })
      });
  }

  return state;
});

/***/ }),

/***/ "./src/reducers/contract/prices.ts":
/*!*****************************************!*\
  !*** ./src/reducers/contract/prices.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_contract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/contract */ "./src/actions/contract.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const initialState = {
  contractPrices: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_contract__WEBPACK_IMPORTED_MODULE_7__["SET_CONTRACT_PRICE"]:
      return _objectSpread({}, state, {
        contractPrices: _objectSpread({}, state.contractPrices, {
          [action.name]: action.value
        })
      });

    case _actions_contract__WEBPACK_IMPORTED_MODULE_7__["SET_TOTAL_ISSUED"]:
      return _objectSpread({}, state, {
        contractPrices: _objectSpread({}, state.contractPrices, {
          totalIssued: action.value
        })
      });
  }

  return state;
});

/***/ }),

/***/ "./src/reducers/currency.js":
/*!**********************************!*\
  !*** ./src/reducers/currency.js ***!
  \**********************************/
/*! exports provided: default, getBaseCurrency, getQuoteCurrency, getSourceCurrency, getPairName, getPrices, getWavesExchanges, getLastWavesExchange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseCurrency", function() { return getBaseCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuoteCurrency", function() { return getQuoteCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSourceCurrency", function() { return getSourceCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPairName", function() { return getPairName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrices", function() { return getPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWavesExchanges", function() { return getWavesExchanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastWavesExchange", function() { return getLastWavesExchange; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es_orderBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/orderBy */ "./node_modules/lodash-es/orderBy.js");
/* harmony import */ var actions_currency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/currency */ "./src/actions/currency.js");
/* harmony import */ var enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! enums/CurrencyEnum */ "./src/enums/CurrencyEnum.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const initialState = {
  base: enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_10__["default"].getBaseCurrency(enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_10__["default"].USD_N),
  source: enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_10__["default"].getSourceCurrency(enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_10__["default"].USD_N),
  quote: enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_10__["default"].USD_N,
  prices: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case actions_currency__WEBPACK_IMPORTED_MODULE_9__["CURRENCY_SET_CURRENT"]:
      return _objectSpread({}, state, {
        base: action.base,
        quote: action.quote,
        source: action.source
      });

    case actions_currency__WEBPACK_IMPORTED_MODULE_9__["CURRENCY_SET_PRICES"]:
      return _objectSpread({}, state, {
        prices: action.prices
      });
  }

  return state;
});
const getBaseCurrency = state => Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, 'currency.base');
const getQuoteCurrency = state => Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, 'currency.quote');
const getSourceCurrency = state => Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_7__["default"])(state, 'currency.source');
const getPairName = state => getBaseCurrency(state) + '_' + getQuoteCurrency(state);
const getPrices = state => state.currency.prices;
const getWavesExchanges = (state, currency) => state.currency.prices[currency] || [];
const getLastWavesExchange = (state, currency) => {
  let prices = getWavesExchanges(state, currency);

  if (prices.length > 0) {
    prices = Object(lodash_es_orderBy__WEBPACK_IMPORTED_MODULE_8__["default"])(prices, 'height', 'desc');
    return prices[0].price;
  } else {
    return 0;
  }
};

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yii_steroids_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yii-steroids/reducers */ "./node_modules/yii-steroids/reducers/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api */ "./src/reducers/api.js");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./currency */ "./src/reducers/currency.js");
/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contract */ "./src/reducers/contract/index.ts");
/* harmony import */ var _contract_prices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contract/prices */ "./src/reducers/contract/prices.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







/* harmony default export */ __webpack_exports__["default"] = (asyncReducers => Object(redux__WEBPACK_IMPORTED_MODULE_7__["combineReducers"])(_objectSpread({
  api: _api__WEBPACK_IMPORTED_MODULE_9__["default"],
  currency: _currency__WEBPACK_IMPORTED_MODULE_10__["default"]
}, yii_steroids_reducers__WEBPACK_IMPORTED_MODULE_8__, {}, asyncReducers, {
  contractData: _contract__WEBPACK_IMPORTED_MODULE_11__["default"],
  contractPrices: _contract_prices__WEBPACK_IMPORTED_MODULE_12__["default"]
})));

/***/ }),

/***/ "./src/routes/LandingPage/LandingHeader/index.tsx":
/*!********************************************************!*\
  !*** ./src/routes/LandingPage/LandingHeader/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var yii_steroids_actions_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yii-steroids/actions/navigation */ "./node_modules/yii-steroids/actions/navigation.js");
/* harmony import */ var ui_global_OutsideAlerter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ui/global/OutsideAlerter */ "./src/ui/global/OutsideAlerter/index.tsx");
/* harmony import */ var enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! enums/CurrencyEnum */ "./src/enums/CurrencyEnum.js");
/* harmony import */ var shared_Layout_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/Layout/context */ "./src/shared/Layout/context.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style.scss */ "./src/routes/LandingPage/LandingHeader/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_15__);









var _jsxFileName = "/usr/local/var/www/neutrino-web/src/routes/LandingPage/LandingHeader/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







const mainLogo = '/static/images/logo.svg';
const arrowDown = '/static/images/landing/arrow-down.svg';
const burgerIcon = '/static/images/landing/burger.svg';
const crossIcon = '/static/images/landing/cross-icon.svg';

const bem = components__WEBPACK_IMPORTED_MODULE_10__["html"].bem('LandingHeader');

class LandingHeader extends react__WEBPACK_IMPORTED_MODULE_9___default.a.Component {
  // productLinks!: Link[];
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "learnLinks", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "links", void 0);

    this.mapLink = this.mapLink.bind(this);
    this.outsideHandler = this.outsideHandler.bind(this);
    this.triggerLearnList = this.triggerLearnList.bind(this);
    this.triggerProductsList = this.triggerProductsList.bind(this);
    this.hideMobileMenu = this.hideMobileMenu.bind(this);
    this.openMobileMenu = this.openMobileMenu.bind(this);
    this.onErrorLogin = this.onErrorLogin.bind(this);
    this.onSuccessLogin = this.onSuccessLogin.bind(this); // this.productLinks = [
    //     {
    //         label: 'Neutrino dashboard',
    //         url: '/neutrino/usd-n',
    //     },
    //     {
    //         label: 'Staking dashboard',
    //         url: 'rpd/usd-n',
    //     },
    //     {
    //         label: 'Bonds dashboard',
    //         url: '/bonds/usd-n',
    //     },
    //     {
    //         label: 'Exchange',
    //         url:
    //             'https://dex.wavesplatform.com/dex-demo?assetId2=DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p&assetId1=WAVES',
    //     },
    //     {
    //         label: 'Transfers',
    //         url: '/transfers/usd-n',
    //     },
    //     {
    //         label: 'Invoice Generator',
    //         url: '/invoices/usd-n',
    //     },
    // ];

    this.links = [{
      label: 'Products',
      onClick: this.triggerProductsList,
      icon: arrowDown
    }, {
      label: 'Learn',
      onClick: this.triggerLearnList,
      icon: arrowDown
    }, {
      label: 'Login'
    }];
    this.state = {
      isProductsListVisible: false,
      isLearnListVisible: false,
      isMobileMenuVisible: false
    };
  }

  hideMobileMenu() {
    this.setState({
      isMobileMenuVisible: false
    });
  }

  openMobileMenu() {
    this.setState({
      isMobileMenuVisible: true
    });
  }

  triggerLearnList() {
    this.setState(prevState => ({
      isProductsListVisible: false,
      isLearnListVisible: !prevState.isLearnListVisible
    }));
  }

  triggerProductsList() {
    this.setState(prevState => ({
      isLearnListVisible: false,
      isProductsListVisible: !prevState.isProductsListVisible
    }));
  }

  mapLink(_ref) {
    let {
      onClick = () => {},
      label,
      icon,
      url
    } = _ref,
        restProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["onClick", "label", "icon", "url"]);

    const {
      isProductsListVisible,
      isLearnListVisible
    } = this.state;
    const isChecked = label === 'Products' && isProductsListVisible || label === 'Learn' && isLearnListVisible ? 'opened' : '';
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, restProps, {
      href: url || '#',
      onClick: onClick,
      className: bem.element('h-link', isChecked),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, label), icon && __jsx("img", {
      src: icon,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    })));
  }

  onSuccessLogin() {
    components__WEBPACK_IMPORTED_MODULE_10__["store"].dispatch(Object(yii_steroids_actions_navigation__WEBPACK_IMPORTED_MODULE_11__["goToPage"])('neutrino', {
      currency: enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_13__["default"].USD_N
    }));
  }

  onErrorLogin() {}

  outsideHandler() {
    this.setState({
      isProductsListVisible: false,
      isLearnListVisible: false
    });
  }

  render() {
    // const productLinks = this.productLinks.map(this.mapLink);
    const {
      isProductsListVisible,
      isLearnListVisible,
      isMobileMenuVisible
    } = this.state;
    return __jsx("div", {
      className: bem.element('main'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx(shared_Layout_context__WEBPACK_IMPORTED_MODULE_14__["GlobalLinksContext"].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, context => __jsx(shared_Layout_context__WEBPACK_IMPORTED_MODULE_14__["InstallKeeperModalContext"].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, installKeeperContext => {
      const {
        links: currentLinks
      } = this;
      currentLinks[currentLinks.length - 1] = _objectSpread({}, currentLinks[currentLinks.length - 1], {
        onClick: async () => {
          try {
            await components__WEBPACK_IMPORTED_MODULE_10__["dal"].login();
            components__WEBPACK_IMPORTED_MODULE_10__["store"].dispatch(Object(yii_steroids_actions_navigation__WEBPACK_IMPORTED_MODULE_11__["goToPage"])('neutrino', {
              currency: enums_CurrencyEnum__WEBPACK_IMPORTED_MODULE_13__["default"].USD_N
            }));
          } finally {
            installKeeperContext.openModal();
          }
        }
      });
      const links = currentLinks.map(this.mapLink);
      const productLinks = context.product.map(this.mapLink);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("div", {
        className: bem.element('burger'),
        onClick: this.openMobileMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("img", {
        src: burgerIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      })), __jsx("div", {
        className: bem.element('logo'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, __jsx("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, __jsx("img", {
        src: mainLogo,
        alt: "neutrino",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "beta")), isMobileMenuVisible && __jsx("div", {
        className: bem.element('mobile-menu'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("img", {
        src: crossIcon,
        alt: "",
        onClick: this.hideMobileMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      })), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, links[links.length - 1], productLinks, context.links.map(this.mapLink))), __jsx(ui_global_OutsideAlerter__WEBPACK_IMPORTED_MODULE_12__["default"], {
        handler: this.outsideHandler,
        className: bem.element('actions'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, isProductsListVisible && __jsx("div", {
        className: bem.element('sub-dp', 'products'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, productLinks)), isLearnListVisible && __jsx("div", {
        className: bem.element('sub-dp', 'learn'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, context.links.map(this.mapLink))), __jsx("ul", {
        className: bem.element('links'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, links)));
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LandingHeader);

/***/ }),

/***/ "./src/routes/LandingPage/LandingHeader/style.scss":
/*!*********************************************************!*\
  !*** ./src/routes/LandingPage/LandingHeader/style.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/routes/LandingPage/index.tsx":
/*!******************************************!*\
  !*** ./src/routes/LandingPage/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var _LandingHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LandingHeader */ "./src/routes/LandingPage/LandingHeader/index.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/routes/LandingPage/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/usr/local/var/www/neutrino-web/src/routes/LandingPage/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const backgroundImage = '/static/images/landing/background.png';
const usdnLogo = '/static/icons/usd-n.svg';
const boxesImage = '/static/images/landing/boxes.svg';
const coloredBoxesImage = '/static/images/landing/colored_boxes.svg';
const fbIcon = '/static/images/landing/socials/fb-icon.svg';
const mediumIcon = '/static/images/landing/socials/medium-icon.svg';
const tgIcon = '/static/images/landing/socials/tg-icon.svg';
const twitterIcon = '/static/images/landing/socials/twitter.svg';
const poweredByWavesLogo = '/static/images/landing/powered_by_waves.svg';

const bem = components__WEBPACK_IMPORTED_MODULE_1__["html"].bem('LandingPage');

class LandingPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    (async () => {
      try {
        await components__WEBPACK_IMPORTED_MODULE_1__["dal"].logout();
      } catch (err) {}
    })();
  }

  render() {
    const boxes = Array(2).fill(__jsx("img", {
      src: boxesImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
    const coloredBoxes = Array(2).fill(__jsx("img", {
      src: coloredBoxesImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
    const socLinks = [{
      icon: fbIcon,
      route: 'https://www.facebook.com/Neutrino-Protocol-106351204088941/'
    }, {
      icon: mediumIcon,
      route: 'https://medium.com/@neutrinoteam'
    }, {
      icon: tgIcon,
      route: 'https://t.me/neutrino_protocol_group'
    }, {
      icon: twitterIcon,
      route: 'https://twitter.com/neutrino_proto'
    }].map(item => __jsx("a", {
      href: item.route,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("img", {
      src: item.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })));

    const paragraph = __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Dollar neutrino (USD-N) is a crypto-collateralized token pegged to US dollar."), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "The first stablecoin protocol which gives holders the ability of staking with rewards generated by the Waves Platform\u2019s economy."));

    return __jsx("div", {
      className: bem.element('main'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("div", {
      className: bem.element('first-part'),
      style: {
        backgroundImage: `url('${backgroundImage}')`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(_LandingHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), __jsx("div", {
      className: bem.element('txt-body'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Decentralized price stable currency"), paragraph)), __jsx("div", {
      className: bem.element('second-part'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("div", {
      className: bem.element('abs-boxes', 'top'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, boxes), __jsx("div", {
      className: bem.element('abs-boxes', 'bottom'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, coloredBoxes), __jsx("div", {
      className: bem.element('romb'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: bem.element('inner-romb'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: bem.element('romb-text'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("img", {
      src: usdnLogo,
      className: bem.element('usdn-logo'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "1")), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "="), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "$1")))), __jsx("div", {
      className: bem.element('action-buttons'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("a", {
      className: "base-button",
      target: "_blank",
      href: "/neutrino/usd-n",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Buy USD-N"), __jsx("a", {
      className: "base-button alt",
      target: "_blank",
      href: "https://medium.com/@neutrinoteam/neutrino-protocol-faq-bf19c79eb354",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "How it works")), __jsx("div", {
      className: bem.element('mobile-info'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, paragraph), __jsx("div", {
      className: bem.element('tos'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("a", {
      href: "https://docs.google.com/document/d/1gQPtVj5LZ9tbZlyBUYlSYvqAjPpKmEH3ksfiIYlp5CM/edit?usp=sharing",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Terms of Service")), __jsx("div", {
      className: bem.element('soc-links'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, socLinks), __jsx("div", {
      className: bem.element('powered-by-waves'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("img", {
      src: poweredByWavesLogo,
      alt: "powered by waves",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./src/routes/LandingPage/style.scss":
/*!*******************************************!*\
  !*** ./src/routes/LandingPage/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/Layout/Layout.scss":
/*!***************************************!*\
  !*** ./src/shared/Layout/Layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/Layout/context.ts":
/*!**************************************!*\
  !*** ./src/shared/Layout/context.ts ***!
  \**************************************/
/*! exports provided: ConfigContext, InstallKeeperModalContext, BlurContext, defaultProductLinks, defaultLearnLinks, GlobalLinksContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigContext", function() { return ConfigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallKeeperModalContext", function() { return InstallKeeperModalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurContext", function() { return BlurContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProductLinks", function() { return defaultProductLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLearnLinks", function() { return defaultLearnLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalLinksContext", function() { return GlobalLinksContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  config: null
});
const InstallKeeperModalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  onLogin: () => {},
  onLogout: () => {},
  openModal: () => {},
  isVisible: false
});
const BlurContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  blur: null,
  unblur: null,
  checkIsBlurred: null
});
const defaultProductLinks = [{
  label: 'Neutrino dashboard',
  url: '/neutrino/usd-n'
}, {
  label: 'Staking dashboard',
  url: 'rpd/usd-n'
}, {
  label: 'Exchange',
  url: 'https://dex.wavesplatform.com/dex-demo?assetId2=DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p&assetId1=WAVES'
}, {
  label: 'Transfers',
  url: '/transfers/usd-n'
}, {
  label: 'Invoice Generator',
  url: '/invoices/usd-n'
}, {
  label: 'Bonds dashboard',
  url: '/bonds/usd-n'
}];
const defaultLearnLinks = [{
  label: 'White paper',
  url: 'https://docs.google.com/document/d/1eyUnLZB1HE2uYx4UNyakaecW9FR9n-yJkTjZJ85MVPo/edit',
  target: '_blank'
}, {
  label: 'FAQ',
  url: 'https://medium.com/@neutrinoteam/neutrino-protocol-faq-bf19c79eb354',
  target: '_blank'
}, {
  label: 'Blog',
  url: 'https://twitter.com/neutrino_proto',
  target: '_blank'
}, {
  label: 'Discussions',
  url: 'https://t.me/neutrino_protocol_group',
  target: '_blank'
}, {
  label: 'GitHub',
  url: 'https://github.com/ventuary-lab',
  target: '_blank'
}, {
  label: 'Smart Contract',
  url: 'https://wavesexplorer.com/address/3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo/script',
  target: '_blank'
}, {
  label: 'Terms of Service',
  url: 'https://docs.google.com/document/d/1gQPtVj5LZ9tbZlyBUYlSYvqAjPpKmEH3ksfiIYlp5CM/edit#heading=h.lvi5m440j6n3',
  target: '_blank'
}];
const GlobalLinksContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  links: defaultLearnLinks,
  product: defaultProductLinks
});

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ui/global/OutsideAlerter/index.tsx":
/*!************************************************!*\
  !*** ./src/ui/global/OutsideAlerter/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/usr/local/var/www/neutrino-web/src/ui/global/OutsideAlerter/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


class OutsideAlerter extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "wrapperRef", void 0);

    this.wrapperRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.onClickOutside = this.onClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClickOutside);
  }

  onClickOutside(event) {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
      this.props.handler();
    }
  }

  render() {
    return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
      ref: this.wrapperRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OutsideAlerter);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/local/var/www/neutrino-web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@waves/waves-transactions":
/*!********************************************!*\
  !*** external "@waves/waves-transactions" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@waves/waves-transactions");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/number/is-integer":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/number/is-integer" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/number/is-integer");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "decode-uri-component":
/*!***************************************!*\
  !*** external "decode-uri-component" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("decode-uri-component");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ "lodash/isInteger":
/*!***********************************!*\
  !*** external "lodash/isInteger" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isInteger");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isString");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "split-on-first":
/*!*********************************!*\
  !*** external "split-on-first" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("split-on-first");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
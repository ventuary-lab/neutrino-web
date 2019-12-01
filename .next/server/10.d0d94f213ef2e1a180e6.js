exports.ids = [10];
exports.modules = {

/***/ "/1FC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isArray);


/***/ }),

/***/ "/UAK":
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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("RVZ8");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MGin");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("7EGn");
/* harmony import */ var _actions_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("NAx7");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("9P7v");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






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
  const pathname = Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(state, 'routing.location.pathname');

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
    case _actions_navigation__WEBPACK_IMPORTED_MODULE_10__[/* NAVIGATION_INIT_ROUTES */ "b"]:
      return _objectSpread({}, state, {
        routesTree: action.routesTree
      });

    case _actions_navigation__WEBPACK_IMPORTED_MODULE_10__[/* NAVIGATION_SET_PARAMS */ "e"]:
      return _objectSpread({}, state, {
        params: _objectSpread({}, state.params, {}, action.params)
      });

    case _actions_navigation__WEBPACK_IMPORTED_MODULE_10__[/* NAVIGATION_ADD_CONFIGS */ "a"]:
      const configs = [].concat(state.configs);

      const counters = _objectSpread({}, state.counters);

      action.configs.forEach(config => {
        const id = Object(_actions_navigation__WEBPACK_IMPORTED_MODULE_10__[/* getConfigId */ "f"])(config);

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

    case _actions_navigation__WEBPACK_IMPORTED_MODULE_10__[/* NAVIGATION_REMOVE_CONFIGS */ "c"]:
      let configs2 = [].concat(state.configs);

      const counters2 = _objectSpread({}, state.counters);

      action.configs.forEach(config => {
        const id = Object(_actions_navigation__WEBPACK_IMPORTED_MODULE_10__[/* getConfigId */ "f"])(config);

        if (counters2[id]) {
          counters2[id]--;

          if (counters2[id] <= 0) {
            configs2 = configs2.filter(item => Object(_actions_navigation__WEBPACK_IMPORTED_MODULE_10__[/* getConfigId */ "f"])(item) !== id);
          }
        }
      });
      return _objectSpread({}, state, {
        configs: configs2,
        counters: counters2
      });

    case _actions_navigation__WEBPACK_IMPORTED_MODULE_10__[/* NAVIGATION_SET_DATA */ "d"]:
      return _objectSpread({}, state, {
        data: _objectSpread({}, state.data, {
          [Object(_actions_navigation__WEBPACK_IMPORTED_MODULE_10__[/* getConfigId */ "f"])(action.config)]: action.data
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
  const route = Object(_routing__WEBPACK_IMPORTED_MODULE_11__[/* getCurrentRoute */ "b"])(state);
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

/***/ "/qiE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eba9f4483d72c934c36a913a9c1245c3.svg";

/***/ }),

/***/ "0R7w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSlice.js
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

/* harmony default export */ var _baseSlice = (baseSlice);

// CONCATENATED MODULE: ./node_modules/lodash-es/_castSlice.js


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
  return (!start && end >= length) ? array : _baseSlice(array, start, end);
}

/* harmony default export */ var _castSlice = __webpack_exports__["a"] = (castSlice);


/***/ }),

/***/ "11ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "3/ER":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ju5/");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined,
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

/* harmony default export */ __webpack_exports__["a"] = (cloneBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("BKcT")(module)))

/***/ }),

/***/ "3IU+":
/***/ (function(module, exports) {



/***/ }),

/***/ "3cmB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y7yP");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ju5/");



/* Built-in method references that are verified to be native. */
var Map = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_root_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'Map');

/* harmony default export */ __webpack_exports__["a"] = (Map);


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5RsX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "db1d25d32ef79bf0681d36b878548c74.svg";

/***/ }),

/***/ "5WsY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vJtL");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Js68");



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
  return value != null && Object(_isLength_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value.length) && !Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (isArrayLike);


/***/ }),

/***/ "7EGn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UTJH");


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
  var result = object == null ? undefined : Object(_baseGet_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ __webpack_exports__["a"] = (get);


/***/ }),

/***/ "7gMY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTimes.js
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

/* harmony default export */ var _baseTimes = (baseTimes);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js + 1 modules
var isArguments = __webpack_require__("9f76");

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__("/1FC");

// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__("WOAq");

// EXTERNAL MODULE: ./node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__("cSlR");

// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js + 1 modules
var isTypedArray = __webpack_require__("oYcn");

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = Object(isArray["a" /* default */])(value),
      isArg = !isArr && Object(isArguments["a" /* default */])(value),
      isBuff = !isArr && !isArg && Object(isBuffer["a" /* default */])(value),
      isType = !isArr && !isArg && !isBuff && Object(isTypedArray["a" /* default */])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           Object(_isIndex["a" /* default */])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _arrayLikeKeys = __webpack_exports__["a"] = (arrayLikeKeys);


/***/ }),

/***/ "8M4i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__("ylTp");

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol["a" /* default */] ? _Symbol["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
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

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol["a" /* default */] ? _Symbol["a" /* default */].toStringTag : undefined;

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
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = __webpack_exports__["a"] = (baseGetTag);


/***/ }),

/***/ "8nPw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c017d852119be23234c5f18845c2b6e8.svg";

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9P7v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/lodash-es/get.js
var get = __webpack_require__("7EGn");

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseKeys.js + 1 modules
var _baseKeys = __webpack_require__("jMTf");

// EXTERNAL MODULE: ./node_modules/lodash-es/_getTag.js + 4 modules
var _getTag = __webpack_require__("YM6B");

// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js + 1 modules
var isArguments = __webpack_require__("9f76");

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__("/1FC");

// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__("5WsY");

// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__("WOAq");

// EXTERNAL MODULE: ./node_modules/lodash-es/_isPrototype.js
var _isPrototype = __webpack_require__("pyRK");

// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js + 1 modules
var isTypedArray = __webpack_require__("oYcn");

// CONCATENATED MODULE: ./node_modules/lodash-es/isEmpty.js









/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isEmpty_hasOwnProperty = objectProto.hasOwnProperty;

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
  if (Object(isArrayLike["a" /* default */])(value) &&
      (Object(isArray["a" /* default */])(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        Object(isBuffer["a" /* default */])(value) || Object(isTypedArray["a" /* default */])(value) || Object(isArguments["a" /* default */])(value))) {
    return !value.length;
  }
  var tag = Object(_getTag["a" /* default */])(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (Object(_isPrototype["a" /* default */])(value)) {
    return !Object(_baseKeys["a" /* default */])(value).length;
  }
  for (var key in value) {
    if (isEmpty_hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/* harmony default export */ var lodash_es_isEmpty = (isEmpty);

// EXTERNAL MODULE: ./node_modules/lodash-es/isEqual.js
var isEqual = __webpack_require__("Muja");

// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__("MGin");

// CONCATENATED MODULE: ./node_modules/yii-steroids/actions/routing.js
const ROUTING_REGISTER = 'ROUTING_REGISTER';
const registerRoutes = routes => ({
  type: ROUTING_REGISTER,
  routes
});
// CONCATENATED MODULE: ./node_modules/yii-steroids/reducers/routing.js
/* unused harmony export LOCATION_CHANGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentRoute; });








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }






const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
const initialState = {
  location: null,
  action: null,
  routes: []
};
const routesCache = {};
/* harmony default export */ var routing = __webpack_exports__["a"] = ((state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return _objectSpread({}, state, {
        location: action.payload
      });

    case ROUTING_REGISTER:
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
  if (!state || lodash_es_isEmpty(state)) {
    return null;
  }

  let currentRoute = null;

  const pathname = Object(get["a" /* default */])(state, 'routing.location.pathname');

  state.routing.routes.forEach(route => {
    if (currentRoute) {
      return;
    }

    const match = Object(external_react_router_["matchPath"])(pathname, route);

    const finedRoute = match && _objectSpread({
      id: route.id
    }, match);

    if (finedRoute) {
      if (!routesCache[route.id] || !Object(isEqual["a" /* default */])(routesCache[route.id], finedRoute)) {
        routesCache[route.id] = finedRoute;
      }

      currentRoute = routesCache[route.id];
    }
  });
  return currentRoute;
};

/***/ }),

/***/ "9f76":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__("8M4i");

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__("EUcb");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsArguments.js



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
  return Object(isObjectLike["a" /* default */])(value) && Object(_baseGetTag["a" /* default */])(value) == argsTag;
}

/* harmony default export */ var _baseIsArguments = (baseIsArguments);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = objectProto.hasOwnProperty;

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
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return Object(isObjectLike["a" /* default */])(value) && isArguments_hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ var lodash_es_isArguments = __webpack_exports__["a"] = (isArguments);


/***/ }),

/***/ "AUh1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFindIndex.js
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

/* harmony default export */ var _baseFindIndex = (baseFindIndex);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNaN.js
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

/* harmony default export */ var _baseIsNaN = (baseIsNaN);

// CONCATENATED MODULE: ./node_modules/lodash-es/_strictIndexOf.js
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

/* harmony default export */ var _strictIndexOf = (strictIndexOf);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIndexOf.js




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
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

/* harmony default export */ var _baseIndexOf = __webpack_exports__["a"] = (baseIndexOf);


/***/ }),

/***/ "BKcT":
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

/***/ "Ce4a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ju5/");


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Uint8Array;

/* harmony default export */ __webpack_exports__["a"] = (Uint8Array);


/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "DDCU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AUh1");


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

  while (++index < length && Object(_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/* harmony default export */ __webpack_exports__["a"] = (charsStartIndex);


/***/ }),

/***/ "DlmY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_getNative.js + 4 modules
var _getNative = __webpack_require__("Y7yP");

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = Object(_getNative["a" /* default */])(Object, 'create');

/* harmony default export */ var _nativeCreate = (nativeCreate);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ var _hashClear = (hashClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashDelete.js
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

/* harmony default export */ var _hashDelete = (hashDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = objectProto.hasOwnProperty;

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
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ var _hashGet = (hashGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

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
  return _nativeCreate ? (data[key] !== undefined) : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ var _hashHas = (hashHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

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
  data[key] = (_nativeCreate && value === undefined) ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ var _hashSet = (hashSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Hash.js






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
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

/* harmony default export */ var _Hash = (Hash);

// EXTERNAL MODULE: ./node_modules/lodash-es/_ListCache.js + 6 modules
var _ListCache = __webpack_require__("nLtN");

// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__("3cmB");

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheClear.js




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
    'hash': new _Hash,
    'map': new (_Map["a" /* default */] || _ListCache["a" /* default */]),
    'string': new _Hash
  };
}

/* harmony default export */ var _mapCacheClear = (mapCacheClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isKeyable.js
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

/* harmony default export */ var _isKeyable = (isKeyable);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getMapData.js


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
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ var _getMapData = (getMapData);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheDelete.js


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
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _mapCacheDelete = (mapCacheDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheGet.js


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
  return _getMapData(this, key).get(key);
}

/* harmony default export */ var _mapCacheGet = (mapCacheGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheHas.js


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
  return _getMapData(this, key).has(key);
}

/* harmony default export */ var _mapCacheHas = (mapCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheSet.js


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
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ var _mapCacheSet = (mapCacheSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_MapCache.js






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
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

/* harmony default export */ var _MapCache = __webpack_exports__["a"] = (MapCache);


/***/ }),

/***/ "EUcb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),

/***/ "EoCt":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6d8b06a5a2facd2f1a9cd2144481cf3d.png";

/***/ }),

/***/ "EqEh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_Stack.js + 5 modules
var _Stack = __webpack_require__("oSzE");

// EXTERNAL MODULE: ./node_modules/lodash-es/_MapCache.js + 14 modules
var _MapCache = __webpack_require__("DlmY");

// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheAdd.js
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

/* harmony default export */ var _setCacheAdd = (setCacheAdd);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheHas.js
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

/* harmony default export */ var _setCacheHas = (setCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_SetCache.js




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

  this.__data__ = new _MapCache["a" /* default */];
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

/* harmony default export */ var _SetCache = (SetCache);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arraySome.js
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

/* harmony default export */ var _arraySome = (arraySome);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cacheHas.js
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

/* harmony default export */ var _cacheHas = (cacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_equalArrays.js




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
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

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
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
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

/* harmony default export */ var _equalArrays = (equalArrays);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__("ylTp");

// EXTERNAL MODULE: ./node_modules/lodash-es/_Uint8Array.js
var _Uint8Array = __webpack_require__("Ce4a");

// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__("YHEm");

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapToArray.js
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

/* harmony default export */ var _mapToArray = (mapToArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setToArray.js
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

/* harmony default export */ var _setToArray = (setToArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_equalByTag.js







/** Used to compose bitmasks for value comparisons. */
var _equalByTag_COMPARE_PARTIAL_FLAG = 1,
    _equalByTag_COMPARE_UNORDERED_FLAG = 2;

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
var symbolProto = _Symbol["a" /* default */] ? _Symbol["a" /* default */].prototype : undefined,
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
          !equalFunc(new _Uint8Array["a" /* default */](object), new _Uint8Array["a" /* default */](other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return Object(eq["a" /* default */])(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & _equalByTag_COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= _equalByTag_COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ var _equalByTag = (equalByTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayPush.js
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

/* harmony default export */ var _arrayPush = (arrayPush);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__("/1FC");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetAllKeys.js



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
  return Object(isArray["a" /* default */])(object) ? result : _arrayPush(result, symbolsFunc(object));
}

/* harmony default export */ var _baseGetAllKeys = (baseGetAllKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayFilter.js
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

/* harmony default export */ var _arrayFilter = (arrayFilter);

// CONCATENATED MODULE: ./node_modules/lodash-es/stubArray.js
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

/* harmony default export */ var lodash_es_stubArray = (stubArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getSymbols.js



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
var getSymbols = !nativeGetSymbols ? lodash_es_stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ var _getSymbols = (getSymbols);

// EXTERNAL MODULE: ./node_modules/lodash-es/keys.js
var keys = __webpack_require__("mkut");

// CONCATENATED MODULE: ./node_modules/lodash-es/_getAllKeys.js




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys["a" /* default */], _getSymbols);
}

/* harmony default export */ var _getAllKeys = (getAllKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_equalObjects.js


/** Used to compose bitmasks for value comparisons. */
var _equalObjects_COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var _equalObjects_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _equalObjects_hasOwnProperty = _equalObjects_objectProto.hasOwnProperty;

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
  var isPartial = bitmask & _equalObjects_COMPARE_PARTIAL_FLAG,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) {
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

/* harmony default export */ var _equalObjects = (equalObjects);

// EXTERNAL MODULE: ./node_modules/lodash-es/_getTag.js + 4 modules
var _getTag = __webpack_require__("YM6B");

// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__("WOAq");

// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js + 1 modules
var isTypedArray = __webpack_require__("oYcn");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqualDeep.js









/** Used to compose bitmasks for value comparisons. */
var _baseIsEqualDeep_COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var _baseIsEqualDeep_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseIsEqualDeep_hasOwnProperty = _baseIsEqualDeep_objectProto.hasOwnProperty;

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
  var objIsArr = Object(isArray["a" /* default */])(object),
      othIsArr = Object(isArray["a" /* default */])(other),
      objTag = objIsArr ? arrayTag : Object(_getTag["a" /* default */])(object),
      othTag = othIsArr ? arrayTag : Object(_getTag["a" /* default */])(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && Object(isBuffer["a" /* default */])(object)) {
    if (!Object(isBuffer["a" /* default */])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack["a" /* default */]);
    return (objIsArr || Object(isTypedArray["a" /* default */])(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & _baseIsEqualDeep_COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack["a" /* default */]);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack["a" /* default */]);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ var _baseIsEqualDeep = (baseIsEqualDeep);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__("EUcb");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqual.js



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
  if (value == null || other == null || (!Object(isObjectLike["a" /* default */])(value) && !Object(isObjectLike["a" /* default */])(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ var _baseIsEqual = __webpack_exports__["a"] = (baseIsEqual);


/***/ }),

/***/ "FQsW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AUh1");


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

  while (index-- && Object(_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/* harmony default export */ __webpack_exports__["a"] = (charsEndIndex);


/***/ }),

/***/ "G8aS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8M4i");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EUcb");



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
    (Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["a"] = (isSymbol);


/***/ }),

/***/ "Ga8Z":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a47f38802e68628af91157df3cb3ef2.svg";

/***/ }),

/***/ "IgkM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/index.js + 106 modules
var components = __webpack_require__("Kvkj");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/yii-steroids/actions/navigation.js
var navigation = __webpack_require__("NAx7");

// CONCATENATED MODULE: ./src/ui/global/OutsideAlerter/index.tsx


var __jsx = external_react_default.a.createElement;


class OutsideAlerter_OutsideAlerter extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "wrapperRef", void 0);

    this.wrapperRef = external_react_default.a.createRef();
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
    return __jsx("div", Object(esm_extends["a" /* default */])({}, this.props, {
      ref: this.wrapperRef
    }), this.props.children);
  }

}

/* harmony default export */ var global_OutsideAlerter = (OutsideAlerter_OutsideAlerter);
// EXTERNAL MODULE: ./src/enums/CurrencyEnum.js
var CurrencyEnum = __webpack_require__("Zj1l");

// CONCATENATED MODULE: ./src/shared/Layout/context.ts

const ConfigContext = Object(external_react_["createContext"])({
  config: null
});
const InstallKeeperModalContext = Object(external_react_["createContext"])({
  onLogin: () => {},
  onLogout: () => {},
  openModal: () => {},
  isVisible: false
});
const BlurContext = Object(external_react_["createContext"])({
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
const GlobalLinksContext = Object(external_react_["createContext"])({
  links: defaultLearnLinks,
  product: defaultProductLinks
});
// EXTERNAL MODULE: ./src/static/images/logo.svg
var logo = __webpack_require__("Ga8Z");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./src/static/images/landing/arrow-down.svg
var arrow_down = __webpack_require__("d2rQ");
var arrow_down_default = /*#__PURE__*/__webpack_require__.n(arrow_down);

// EXTERNAL MODULE: ./src/static/images/landing/burger.svg
var burger = __webpack_require__("QRgY");
var burger_default = /*#__PURE__*/__webpack_require__.n(burger);

// EXTERNAL MODULE: ./src/static/images/landing/cross-icon.svg
var cross_icon = __webpack_require__("aRtx");
var cross_icon_default = /*#__PURE__*/__webpack_require__.n(cross_icon);

// EXTERNAL MODULE: ./src/routes/LandingPage/LandingHeader/style.scss
var style = __webpack_require__("vMRZ");

// CONCATENATED MODULE: ./src/routes/LandingPage/LandingHeader/index.tsx









var LandingHeader_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }












const bem = components["html"].bem('LandingHeader');

class LandingHeader_LandingHeader extends external_react_default.a.Component {
  // productLinks!: Link[];
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "learnLinks", void 0);

    Object(defineProperty["a" /* default */])(this, "links", void 0);

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
      icon: arrow_down_default.a
    }, {
      label: 'Learn',
      onClick: this.triggerLearnList,
      icon: arrow_down_default.a
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
        restProps = _objectWithoutProperties(_ref, ["onClick", "label", "icon", "url"]);

    const {
      isProductsListVisible,
      isLearnListVisible
    } = this.state;
    const isChecked = label === 'Products' && isProductsListVisible || label === 'Learn' && isLearnListVisible ? 'opened' : '';
    return LandingHeader_jsx("li", null, LandingHeader_jsx("a", Object(esm_extends["a" /* default */])({}, restProps, {
      href: url || '#',
      onClick: onClick,
      className: bem.element('h-link', isChecked)
    }), LandingHeader_jsx("span", null, label), icon && LandingHeader_jsx("img", {
      src: icon,
      alt: ""
    })));
  }

  onSuccessLogin() {
    components["store"].dispatch(Object(navigation["g" /* goToPage */])('neutrino', {
      currency: CurrencyEnum["a" /* default */].USD_N
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
    return LandingHeader_jsx("div", {
      className: bem.element('main')
    }, LandingHeader_jsx(GlobalLinksContext.Consumer, null, context => LandingHeader_jsx(InstallKeeperModalContext.Consumer, null, installKeeperContext => {
      const {
        links: currentLinks
      } = this;
      currentLinks[currentLinks.length - 1] = _objectSpread({}, currentLinks[currentLinks.length - 1], {
        onClick: async () => {
          try {
            await components["dal"].login();
            components["store"].dispatch(Object(navigation["g" /* goToPage */])('neutrino', {
              currency: CurrencyEnum["a" /* default */].USD_N
            }));
          } finally {
            installKeeperContext.openModal();
          }
        }
      });
      const links = currentLinks.map(this.mapLink);
      const productLinks = context.product.map(this.mapLink);
      return LandingHeader_jsx(external_react_default.a.Fragment, null, LandingHeader_jsx("div", {
        className: bem.element('burger'),
        onClick: this.openMobileMenu
      }, LandingHeader_jsx("img", {
        src: burger_default.a
      })), LandingHeader_jsx("div", {
        className: bem.element('logo')
      }, LandingHeader_jsx("a", {
        href: "/"
      }, LandingHeader_jsx("img", {
        src: logo_default.a,
        alt: "neutrino"
      })), LandingHeader_jsx("span", null, "beta")), isMobileMenuVisible && LandingHeader_jsx("div", {
        className: bem.element('mobile-menu')
      }, LandingHeader_jsx("div", null, LandingHeader_jsx("img", {
        src: cross_icon_default.a,
        alt: "",
        onClick: this.hideMobileMenu
      })), LandingHeader_jsx("ul", null, links[links.length - 1], productLinks, context.links.map(this.mapLink))), LandingHeader_jsx(global_OutsideAlerter, {
        handler: this.outsideHandler,
        className: bem.element('actions')
      }, isProductsListVisible && LandingHeader_jsx("div", {
        className: bem.element('sub-dp', 'products')
      }, LandingHeader_jsx("ul", null, productLinks)), isLearnListVisible && LandingHeader_jsx("div", {
        className: bem.element('sub-dp', 'learn')
      }, LandingHeader_jsx("ul", null, context.links.map(this.mapLink))), LandingHeader_jsx("ul", {
        className: bem.element('links')
      }, links)));
    })));
  }

}

/* harmony default export */ var LandingPage_LandingHeader = (LandingHeader_LandingHeader);
// EXTERNAL MODULE: ./src/static/images/landing/background.png
var background = __webpack_require__("EoCt");
var background_default = /*#__PURE__*/__webpack_require__.n(background);

// EXTERNAL MODULE: ./src/static/icons/usd-n.svg
var usd_n = __webpack_require__("TIGo");
var usd_n_default = /*#__PURE__*/__webpack_require__.n(usd_n);

// EXTERNAL MODULE: ./src/static/images/landing/boxes.svg
var landing_boxes = __webpack_require__("/qiE");
var boxes_default = /*#__PURE__*/__webpack_require__.n(landing_boxes);

// EXTERNAL MODULE: ./src/static/images/landing/colored_boxes.svg
var colored_boxes = __webpack_require__("TYIf");
var colored_boxes_default = /*#__PURE__*/__webpack_require__.n(colored_boxes);

// EXTERNAL MODULE: ./src/static/images/landing/socials/fb-icon.svg
var fb_icon = __webpack_require__("gmA9");
var fb_icon_default = /*#__PURE__*/__webpack_require__.n(fb_icon);

// EXTERNAL MODULE: ./src/static/images/landing/socials/medium-icon.svg
var medium_icon = __webpack_require__("m+yH");
var medium_icon_default = /*#__PURE__*/__webpack_require__.n(medium_icon);

// EXTERNAL MODULE: ./src/static/images/landing/socials/tg-icon.svg
var tg_icon = __webpack_require__("5RsX");
var tg_icon_default = /*#__PURE__*/__webpack_require__.n(tg_icon);

// EXTERNAL MODULE: ./src/static/images/landing/socials/twitter.svg
var twitter = __webpack_require__("8nPw");
var twitter_default = /*#__PURE__*/__webpack_require__.n(twitter);

// EXTERNAL MODULE: ./src/static/images/landing/powered_by_waves.svg
var powered_by_waves = __webpack_require__("JqXz");
var powered_by_waves_default = /*#__PURE__*/__webpack_require__.n(powered_by_waves);

// EXTERNAL MODULE: ./src/routes/LandingPage/style.scss
var LandingPage_style = __webpack_require__("3IU+");

// CONCATENATED MODULE: ./src/routes/LandingPage/index.tsx
var LandingPage_jsx = external_react_default.a.createElement;



 // import { InstallKeeperModalContext } from 'shared/Layout/context';











const LandingPage_bem = components["html"].bem('LandingPage');

class LandingPage_LandingPage extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    (async () => {
      await components["dal"].logout();
    })();
  }

  render() {
    const boxes = Array(2).fill(LandingPage_jsx("img", {
      src: boxes_default.a
    }));
    const coloredBoxes = Array(2).fill(LandingPage_jsx("img", {
      src: colored_boxes_default.a
    }));
    const socLinks = [{
      icon: fb_icon_default.a,
      route: 'https://www.facebook.com/Neutrino-Protocol-106351204088941/'
    }, {
      icon: medium_icon_default.a,
      route: 'https://medium.com/@neutrinoteam'
    }, {
      icon: tg_icon_default.a,
      route: 'https://t.me/neutrino_protocol_group'
    }, {
      icon: twitter_default.a,
      route: 'https://twitter.com/neutrino_proto'
    }].map(item => LandingPage_jsx("a", {
      href: item.route,
      target: "_blank"
    }, LandingPage_jsx("img", {
      src: item.icon
    })));

    const paragraph = LandingPage_jsx("p", null, LandingPage_jsx("span", null, "Dollar neutrino (USD-N) is a crypto-collateralized token pegged to US dollar."), LandingPage_jsx("span", null, "The first stablecoin protocol which gives holders the ability of staking with rewards generated by the Waves Platform\u2019s economy."));

    return LandingPage_jsx("div", {
      className: LandingPage_bem.element('main')
    }, LandingPage_jsx("div", {
      className: LandingPage_bem.element('first-part'),
      style: {
        backgroundImage: `url('${background_default.a}')`
      }
    }, LandingPage_jsx(LandingPage_LandingHeader, null), LandingPage_jsx("div", {
      className: LandingPage_bem.element('txt-body')
    }, LandingPage_jsx("span", null, "Decentralized price stable currency"), paragraph)), LandingPage_jsx("div", {
      className: LandingPage_bem.element('second-part')
    }, LandingPage_jsx("div", {
      className: LandingPage_bem.element('abs-boxes', 'top')
    }, boxes), LandingPage_jsx("div", {
      className: LandingPage_bem.element('abs-boxes', 'bottom')
    }, coloredBoxes), LandingPage_jsx("div", {
      className: LandingPage_bem.element('romb')
    }, LandingPage_jsx("div", {
      className: LandingPage_bem.element('inner-romb')
    }, LandingPage_jsx("div", {
      className: LandingPage_bem.element('romb-text')
    }, LandingPage_jsx("span", null, LandingPage_jsx("img", {
      src: usd_n_default.a,
      className: LandingPage_bem.element('usdn-logo')
    }), LandingPage_jsx("span", null, "1")), LandingPage_jsx("span", null, "="), LandingPage_jsx("span", null, "$1")))), LandingPage_jsx("div", {
      className: LandingPage_bem.element('action-buttons')
    }, LandingPage_jsx("a", {
      className: "base-button",
      target: "_blank",
      href: "/neutrino/usd-n"
    }, "Buy USD-N"), LandingPage_jsx("a", {
      className: "base-button alt",
      target: "_blank",
      href: "https://medium.com/@neutrinoteam/neutrino-protocol-faq-bf19c79eb354"
    }, "How it works")), LandingPage_jsx("div", {
      className: LandingPage_bem.element('mobile-info')
    }, paragraph), LandingPage_jsx(GlobalLinksContext.Consumer, null, context => {
      const tosLink = context.links.find(link => link.label === 'Terms of Service').url;
      return LandingPage_jsx("div", {
        className: LandingPage_bem.element('tos')
      }, LandingPage_jsx("a", {
        href: tosLink,
        target: "_blank"
      }, "Terms of Service"));
    }), LandingPage_jsx("div", {
      className: LandingPage_bem.element('soc-links')
    }, socLinks), LandingPage_jsx("div", {
      className: LandingPage_bem.element('powered-by-waves')
    }, LandingPage_jsx("img", {
      src: powered_by_waves_default.a,
      alt: "powered by waves"
    }))));
  }

}

/* harmony default export */ var routes_LandingPage = __webpack_exports__["default"] = (LandingPage_LandingPage);

/***/ }),

/***/ "IlA0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__("/1FC");

// EXTERNAL MODULE: ./node_modules/lodash-es/_isKey.js
var _isKey = __webpack_require__("vY+C");

// EXTERNAL MODULE: ./node_modules/lodash-es/_MapCache.js + 14 modules
var _MapCache = __webpack_require__("DlmY");

// CONCATENATED MODULE: ./node_modules/lodash-es/memoize.js


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
  memoized.cache = new (memoize.Cache || _MapCache["a" /* default */]);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache["a" /* default */];

/* harmony default export */ var lodash_es_memoize = (memoize);

// CONCATENATED MODULE: ./node_modules/lodash-es/_memoizeCapped.js


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
  var result = lodash_es_memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ var _memoizeCapped = (memoizeCapped);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stringToPath.js


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
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ var _stringToPath = (stringToPath);

// EXTERNAL MODULE: ./node_modules/lodash-es/toString.js
var lodash_es_toString = __webpack_require__("efZk");

// CONCATENATED MODULE: ./node_modules/lodash-es/_castPath.js





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (Object(isArray["a" /* default */])(value)) {
    return value;
  }
  return Object(_isKey["a" /* default */])(value, object) ? [value] : _stringToPath(Object(lodash_es_toString["a" /* default */])(value));
}

/* harmony default export */ var _castPath = __webpack_exports__["a"] = (castPath);


/***/ }),

/***/ "IzLi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isObject);


/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "JqXz":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2a128b982156c1b230754a3a78c570c.svg";

/***/ }),

/***/ "Js68":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isLength);


/***/ }),

/***/ "Ju5/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XqMk");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),

/***/ "KiMO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/lodash-es/_asciiToArray.js
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

/* harmony default export */ var _asciiToArray = (asciiToArray);

// EXTERNAL MODULE: ./node_modules/lodash-es/_hasUnicode.js
var _hasUnicode = __webpack_require__("e1lX");

// CONCATENATED MODULE: ./node_modules/lodash-es/_unicodeToArray.js
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

/* harmony default export */ var _unicodeToArray = (unicodeToArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stringToArray.js




/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return Object(_hasUnicode["a" /* default */])(string)
    ? _unicodeToArray(string)
    : _asciiToArray(string);
}

/* harmony default export */ var _stringToArray = __webpack_exports__["a"] = (stringToArray);


/***/ }),

/***/ "Kvkj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reducers_namespaceObject = {};
__webpack_require__.r(reducers_namespaceObject);
__webpack_require__.d(reducers_namespaceObject, "form", function() { return external_redux_form_["reducer"]; });
__webpack_require__.d(reducers_namespaceObject, "auth", function() { return auth; });
__webpack_require__.d(reducers_namespaceObject, "fields", function() { return fields; });
__webpack_require__.d(reducers_namespaceObject, "list", function() { return reducers_list; });
__webpack_require__.d(reducers_namespaceObject, "config", function() { return reducers_config; });
__webpack_require__.d(reducers_namespaceObject, "notifications", function() { return notifications; });
__webpack_require__.d(reducers_namespaceObject, "modal", function() { return modal; });
__webpack_require__.d(reducers_namespaceObject, "routing", function() { return routing["a" /* default */]; });
__webpack_require__.d(reducers_namespaceObject, "navigation", function() { return reducers_navigation["default"]; });
__webpack_require__.d(reducers_namespaceObject, "screen", function() { return screen; });
__webpack_require__.d(reducers_namespaceObject, "default", function() { return reducers; });

// EXTERNAL MODULE: ./node_modules/lodash-es/_Stack.js + 5 modules
var _Stack = __webpack_require__("oSzE");

// EXTERNAL MODULE: ./node_modules/lodash-es/_getNative.js + 4 modules
var _getNative = __webpack_require__("Y7yP");

// CONCATENATED MODULE: ./node_modules/lodash-es/_defineProperty.js


var defineProperty = (function() {
  try {
    var func = Object(_getNative["a" /* default */])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ var _defineProperty = (defineProperty);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssignValue.js


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
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ var _baseAssignValue = (baseAssignValue);

// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__("YHEm");

// CONCATENATED MODULE: ./node_modules/lodash-es/_assignMergeValue.js



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
  if ((value !== undefined && !Object(eq["a" /* default */])(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ var _assignMergeValue = (assignMergeValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseFor.js
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

/* harmony default export */ var _createBaseFor = (createBaseFor);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFor.js


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
var baseFor = _createBaseFor();

/* harmony default export */ var _baseFor = (baseFor);

// EXTERNAL MODULE: ./node_modules/lodash-es/_cloneBuffer.js
var _cloneBuffer = __webpack_require__("3/ER");

// EXTERNAL MODULE: ./node_modules/lodash-es/_Uint8Array.js
var _Uint8Array = __webpack_require__("Ce4a");

// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneArrayBuffer.js


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array["a" /* default */](result).set(new _Uint8Array["a" /* default */](arrayBuffer));
  return result;
}

/* harmony default export */ var _cloneArrayBuffer = (cloneArrayBuffer);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneTypedArray.js


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ var _cloneTypedArray = (cloneTypedArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_copyArray.js
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

/* harmony default export */ var _copyArray = (copyArray);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__("IzLi");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseCreate.js


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
    if (!Object(isObject["a" /* default */])(proto)) {
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

/* harmony default export */ var _baseCreate = (baseCreate);

// EXTERNAL MODULE: ./node_modules/lodash-es/_overArg.js
var _overArg = __webpack_require__("U6JX");

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = Object(_overArg["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// EXTERNAL MODULE: ./node_modules/lodash-es/_isPrototype.js
var _isPrototype = __webpack_require__("pyRK");

// CONCATENATED MODULE: ./node_modules/lodash-es/_initCloneObject.js




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !Object(_isPrototype["a" /* default */])(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

/* harmony default export */ var _initCloneObject = (initCloneObject);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js + 1 modules
var isArguments = __webpack_require__("9f76");

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__("/1FC");

// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__("5WsY");

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__("EUcb");

// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLikeObject.js



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
  return Object(isObjectLike["a" /* default */])(value) && Object(isArrayLike["a" /* default */])(value);
}

/* harmony default export */ var lodash_es_isArrayLikeObject = (isArrayLikeObject);

// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__("WOAq");

// EXTERNAL MODULE: ./node_modules/lodash-es/isFunction.js
var isFunction = __webpack_require__("vJtL");

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__("8M4i");

// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = objectProto.hasOwnProperty;

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
  if (!Object(isObjectLike["a" /* default */])(value) || Object(_baseGetTag["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);

// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js + 1 modules
var isTypedArray = __webpack_require__("oYcn");

// CONCATENATED MODULE: ./node_modules/lodash-es/_safeGet.js
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

/* harmony default export */ var _safeGet = (safeGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_assignValue.js



/** Used for built-in method references. */
var _assignValue_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _assignValue_hasOwnProperty = _assignValue_objectProto.hasOwnProperty;

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
  if (!(_assignValue_hasOwnProperty.call(object, key) && Object(eq["a" /* default */])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ var _assignValue = (assignValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_copyObject.js



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
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ var _copyObject = (copyObject);

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js + 1 modules
var _arrayLikeKeys = __webpack_require__("7gMY");

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeysIn.js
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

/* harmony default export */ var _nativeKeysIn = (nativeKeysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var _baseKeysIn_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeysIn_hasOwnProperty = _baseKeysIn_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!Object(isObject["a" /* default */])(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = Object(_isPrototype["a" /* default */])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeysIn = (baseKeysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/keysIn.js




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
  return Object(isArrayLike["a" /* default */])(object) ? Object(_arrayLikeKeys["a" /* default */])(object, true) : _baseKeysIn(object);
}

/* harmony default export */ var lodash_es_keysIn = (keysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/toPlainObject.js



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
  return _copyObject(value, lodash_es_keysIn(value));
}

/* harmony default export */ var lodash_es_toPlainObject = (toPlainObject);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMergeDeep.js
















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
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = Object(isArray["a" /* default */])(srcValue),
        isBuff = !isArr && Object(isBuffer["a" /* default */])(srcValue),
        isTyped = !isArr && !isBuff && Object(isTypedArray["a" /* default */])(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (Object(isArray["a" /* default */])(objValue)) {
        newValue = objValue;
      }
      else if (lodash_es_isArrayLikeObject(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = Object(_cloneBuffer["a" /* default */])(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (lodash_es_isPlainObject(srcValue) || Object(isArguments["a" /* default */])(srcValue)) {
      newValue = objValue;
      if (Object(isArguments["a" /* default */])(objValue)) {
        newValue = lodash_es_toPlainObject(objValue);
      }
      else if (!Object(isObject["a" /* default */])(objValue) || Object(isFunction["a" /* default */])(objValue)) {
        newValue = _initCloneObject(srcValue);
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
  _assignMergeValue(object, key, newValue);
}

/* harmony default export */ var _baseMergeDeep = (baseMergeDeep);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMerge.js








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
  _baseFor(source, function(srcValue, key) {
    stack || (stack = new _Stack["a" /* default */]);
    if (Object(isObject["a" /* default */])(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, lodash_es_keysIn);
}

/* harmony default export */ var _baseMerge = (baseMerge);

// CONCATENATED MODULE: ./node_modules/lodash-es/identity.js
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

/* harmony default export */ var lodash_es_identity = (identity);

// CONCATENATED MODULE: ./node_modules/lodash-es/_apply.js
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

/* harmony default export */ var _apply = (apply);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overRest.js


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
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ var _overRest = (overRest);

// CONCATENATED MODULE: ./node_modules/lodash-es/constant.js
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

/* harmony default export */ var lodash_es_constant = (constant);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? lodash_es_identity : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ var _baseSetToString = (baseSetToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_shortOut.js
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

/* harmony default export */ var _shortOut = (shortOut);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

/* harmony default export */ var _setToString = (setToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, lodash_es_identity), func + '');
}

/* harmony default export */ var _baseRest = (baseRest);

// EXTERNAL MODULE: ./node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__("cSlR");

// CONCATENATED MODULE: ./node_modules/lodash-es/_isIterateeCall.js





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
  if (!Object(isObject["a" /* default */])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (Object(isArrayLike["a" /* default */])(object) && Object(_isIndex["a" /* default */])(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return Object(eq["a" /* default */])(object[index], value);
  }
  return false;
}

/* harmony default export */ var _isIterateeCall = (isIterateeCall);

// CONCATENATED MODULE: ./node_modules/lodash-es/_createAssigner.js



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
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

/* harmony default export */ var _createAssigner = (createAssigner);

// CONCATENATED MODULE: ./node_modules/lodash-es/merge.js



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
var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

/* harmony default export */ var lodash_es_merge = (merge);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var esm_defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./node_modules/yii-steroids/components/ClientStorageComponent.js


class ClientStorageComponent_ClientStorageComponent {
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

    return external_js_cookie_default.a.get(name);
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
      external_js_cookie_default.a.set(name, value, {
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
      external_js_cookie_default.a.remove(name, {
        domain: this._getDomain()
      });
    }
  }

  _getDomain() {
    const host = typeof location !== 'undefined' && location.hostname || '';
    return host.split('.').slice(-2).join('.') || host;
  }

}

Object(esm_defineProperty["a" /* default */])(ClientStorageComponent_ClientStorageComponent, "STORAGE_SESSION", 'session');

Object(esm_defineProperty["a" /* default */])(ClientStorageComponent_ClientStorageComponent, "STORAGE_LOCAL", 'local');

Object(esm_defineProperty["a" /* default */])(ClientStorageComponent_ClientStorageComponent, "STORAGE_COOKIE", 'cookie');
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseToString.js
var _baseToString = __webpack_require__("LFf6");

// EXTERNAL MODULE: ./node_modules/lodash-es/_castSlice.js + 1 modules
var _castSlice = __webpack_require__("0R7w");

// EXTERNAL MODULE: ./node_modules/lodash-es/_charsStartIndex.js
var _charsStartIndex = __webpack_require__("DDCU");

// EXTERNAL MODULE: ./node_modules/lodash-es/_stringToArray.js + 2 modules
var _stringToArray = __webpack_require__("KiMO");

// EXTERNAL MODULE: ./node_modules/lodash-es/toString.js
var lodash_es_toString = __webpack_require__("efZk");

// CONCATENATED MODULE: ./node_modules/lodash-es/trimStart.js






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
  string = Object(lodash_es_toString["a" /* default */])(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrimStart, '');
  }
  if (!string || !(chars = Object(_baseToString["a" /* default */])(chars))) {
    return string;
  }
  var strSymbols = Object(_stringToArray["a" /* default */])(string),
      start = Object(_charsStartIndex["a" /* default */])(strSymbols, Object(_stringToArray["a" /* default */])(chars));

  return Object(_castSlice["a" /* default */])(strSymbols, start).join('');
}

/* harmony default export */ var lodash_es_trimStart = (trimStart);

// EXTERNAL MODULE: ./node_modules/lodash-es/_charsEndIndex.js
var _charsEndIndex = __webpack_require__("FQsW");

// CONCATENATED MODULE: ./node_modules/lodash-es/trimEnd.js






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
  string = Object(lodash_es_toString["a" /* default */])(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrimEnd, '');
  }
  if (!string || !(chars = Object(_baseToString["a" /* default */])(chars))) {
    return string;
  }
  var strSymbols = Object(_stringToArray["a" /* default */])(string),
      end = Object(_charsEndIndex["a" /* default */])(strSymbols, Object(_stringToArray["a" /* default */])(chars)) + 1;

  return Object(_castSlice["a" /* default */])(strSymbols, 0, end).join('');
}

/* harmony default export */ var lodash_es_trimEnd = (trimEnd);

// CONCATENATED MODULE: ./node_modules/yii-steroids/actions/notifications.js

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
const setFlashes = flashes => keys_default()(flashes).map(level => {
  return [].concat(flashes[level] || []).map(message => showNotification(message, level));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/yii-steroids/components/HttpComponent.js









var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }








class HttpComponent_HttpComponent {
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


    const clientStorage = __webpack_require__("Kvkj").clientStorage;

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

    const clientStorage = __webpack_require__("Kvkj").clientStorage;

    clientStorage.set(this.accessTokenKey, value);
  }
  /**
   * @returns {string}
   */


  getAccessToken() {
    if (this._accessToken === false) {
      const clientStorage = __webpack_require__("Kvkj").clientStorage;

      this._accessToken = clientStorage.get(this.accessTokenKey) || null;
    }

    return this._accessToken;
  }

  resetConfig() {
    this._axios = null;
  }

  getAxiosInstance() {
    if (!this._axios) {
      this._axios = external_axios_default.a.create(this.getAxiosConfig());
    }

    return this._axios;
  }

  getUrl(method) {
    if (method === null) {
      method = location.pathname;
    }

    if (method.indexOf('://') === -1) {
      method = `${lodash_es_trimEnd(this.apiUrl, '/')}/${lodash_es_trimStart(method, '/')}`;
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

      return _temp = _class = class HttpHOC extends external_react_default.a.Component {
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
          return __jsx(WrappedComponent, Object(esm_extends["a" /* default */])({}, this.props, this.state.data, {
            fetch: this._fetch
          }));
        }

        _createCancelToken() {
          return new external_axios_default.a.CancelToken(cancel => {
            this._cancels.push(cancel);
          });
        }

        _fetch(params) {
          const result = requestFunc(_objectSpread({}, this.props, {}, params, {
            createCancelToken: this._createCancelToken
          }));

          if (Object(isObject["a" /* default */])(result)) {
            if (Object(isFunction["a" /* default */])(result.then)) {
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

      }, Object(esm_defineProperty["a" /* default */])(_class, "WrappedComponent", WrappedComponent), _temp;
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

      return new promise_default.a((resolve, reject) => {
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
    const store = __webpack_require__("Kvkj").store; // Flash


    if (response.data.flashes) {
      store.dispatch(setFlashes(response.data.flashes));
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
// CONCATENATED MODULE: ./node_modules/lodash-es/isString.js




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
    (!Object(isArray["a" /* default */])(value) && Object(isObjectLike["a" /* default */])(value) && Object(_baseGetTag["a" /* default */])(value) == stringTag);
}

/* harmony default export */ var lodash_es_isString = (isString);

// CONCATENATED MODULE: ./node_modules/yii-steroids/components/HtmlComponent.js


class HtmlComponent_HtmlComponent {
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
    if (node && lodash_es_isString(node.className)) {
      const classes = node.className.split(' ');

      if (classes.indexOf(className) === -1) {
        classes.push(className);
        node.className = classes.join(' ');
      }
    }
  }

  removeClass(node, className) {
    if (node && lodash_es_isString(node.className)) {
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
      keys_default()(modifiers).forEach(key => {
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
// EXTERNAL MODULE: external "intl-messageformat"
var external_intl_messageformat_ = __webpack_require__("HEAg");
var external_intl_messageformat_default = /*#__PURE__*/__webpack_require__.n(external_intl_messageformat_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "moment/locale/it"
var it_ = __webpack_require__("AMKw");

// EXTERNAL MODULE: external "moment/locale/ru"
var ru_ = __webpack_require__("gvj5");

// CONCATENATED MODULE: ./node_modules/yii-steroids/components/LocaleComponent.js

var LocaleComponent_jsx = external_react_default.a.createElement;





 // Fix load locale data

window.IntlMessageFormat = external_intl_messageformat_default.a;

__webpack_require__("qR67");

delete window.IntlMessageFormat;
/**
 * @example
 *  {__('{count} {count, plural, one{день} few{дня} many{дней}}', {count: 2})}
 */

class LocaleComponent_LocaleComponent {
  constructor() {
    this.language = 'en';
    this.sourceLanguage = 'ru';
    this.backendTimeZone = null;
    this.backendTimeDiff = null; // in microseconds

    this.translations = {}; // Publish to global

    if (process.env.IS_NODE) {
      global.__ = this.translate.bind(this);
    } else {
      window.__ = this.translate.bind(this);
    }
  }

  moment(date, format) {
    if (this.backendTimeZone && date && date.length === 19 && external_moment_default()(date, 'YYYY-MM-DD HH:mm:ss').isValid()) {
      date = date + this.backendTimeZone;
    }

    return external_moment_default()(date, format).locale(this.language);
  }

  t(message, params = {}) {
    return this.translate(message, params);
  }

  translate(message, params = {}) {
    // Translate
    const hasTranslate = !!this.translations[message];
    message = this.translations[message] || message; // Cut react components

    const components = {};

    keys_default()(params).map(key => {
      if (Object(isObject["a" /* default */])(params[key])) {
        components[key] = params[key];
        params[key] = `!!${key}!!`;
      }
    }); // Format message (params, plural, etc..)


    const language = hasTranslate ? this.language : this.sourceLanguage;
    const formatter = new external_intl_messageformat_default.a(message, language);
    message = formatter.format(params); // Paste react components

    message = this._pasteComponents(message, components);
    return message;
  }

  _pasteComponents(message, components) {
    if (keys_default()(components).length === 0) {
      return message;
    } // Index components


    const indexedComponents = [];

    keys_default()(components).map(key => {
      const index = message.indexOf(`!!${key}!!`);

      if (index !== -1) {
        indexedComponents.push({
          index: index,
          component: components[key]
        });
      }

      message = message.replace(`!!${key}!!`, '!!component!!');
    });

    indexedComponents.sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      } else if (a.index > b.index) {
        return 1;
      }

      return 0;
    }); // Split text to array, paste components

    const result = [];
    const textParts = message.split('!!component!!');

    for (let i = 0, j = 0; i < textParts.length; i++) {
      let isComponentAdded = false;

      if (j === 0 && j < indexedComponents.length && indexedComponents[j].index === 0) {
        result.push(LocaleComponent_jsx("span", {
          key: `element-${j}`
        }, indexedComponents[j].component));
        isComponentAdded = true;
        j++;
      }

      result.push(LocaleComponent_jsx("span", {
        key: `text-${i}`
      }, textParts[i]));

      if (!isComponentAdded && j < indexedComponents.length) {
        result.push(LocaleComponent_jsx("span", {
          key: `element${j}`
        }, indexedComponents[j].component));
        j++;
      }
    }

    return LocaleComponent_jsx("span", null, result);
  }

}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__("Cg2A");
var now_default = /*#__PURE__*/__webpack_require__.n(now);

// EXTERNAL MODULE: ./node_modules/yii-steroids/node_modules/query-string/index.js
var query_string = __webpack_require__("M6cj");
var query_string_default = /*#__PURE__*/__webpack_require__.n(query_string);

// CONCATENATED MODULE: ./node_modules/yii-steroids/components/ResourceComponent.js





class ResourceComponent_ResourceComponent {
  constructor() {
    this.googleApiKey = '';
    this.googleCaptchaSiteKey = '';
    this._callbacks = {};
  }

  loadGoogleMapApi() {
    const locale = __webpack_require__("Kvkj").locale;

    if (window.google && window.google.maps) {
      return promise_default.a.resolve(window.google.maps);
    }

    return this.loadScript(ResourceComponent_ResourceComponent.RESOURCE_GOOGLE_MAP_API, {
      libraries: 'places',
      key: this.googleApiKey,
      language: locale.language
    }, () => window.google.maps);
  }

  loadYandexMap() {
    const locale = __webpack_require__("Kvkj").locale;

    if (window.ymaps) {
      return new promise_default.a(resolve => window.ymaps.ready(() => resolve(window.ymaps)));
    }

    return this.loadScript(ResourceComponent_ResourceComponent.RESOURCE_YANDEX_MAP_API, {
      lang: locale.language
    }, () => new promise_default.a(resolve => window.ymaps.ready(() => resolve(window.ymaps))));
  }

  loadTwitterWidget() {
    if (window.twttr) {
      return promise_default.a.resolve(window.twttr);
    }

    return this.loadScript(ResourceComponent_ResourceComponent.RESOURCE_TWITTER_WIDGET, {}, () => new promise_default.a(resolve => window.twttr.ready(() => resolve(window.twttr))));
  }

  loadGeetest() {
    if (window.initGeetest) {
      return promise_default.a.resolve(window.initGeetest);
    }

    return this.loadScript(ResourceComponent_ResourceComponent.RESOURCE_GEETEST_API + '?_t=' + new Date().getTime(), {}, () => window.initGeetest);
  }

  loadScript(url, params, firstResolver) {
    if (this._callbacks[url] === true) {
      return promise_default.a.resolve(firstResolver());
    }

    if (Object(isArray["a" /* default */])(this._callbacks[url])) {
      return new promise_default.a(resolve => {
        this._callbacks[url].push(resolve);
      });
    }

    this._callbacks[url] = []; // Append script to page

    return new promise_default.a((resolve, reject) => {
      let script = document.createElement('script');
      script.async = true;

      script.onload = () => {
        setTimeout(() => {
          promise_default.a.resolve(firstResolver()).then(result => {
            // Resolve current
            resolve(result); // Resolve queue promises after current

            const callbacks = this._callbacks[url];
            this._callbacks[url] = true;
            callbacks.forEach(callback => callback(result));
          }).catch(reject);
        });
      };

      script.src = url + (params ? '?' + query_string_default.a.stringify(params) : '');
      document.body.appendChild(script);
    });
  }

  wait(condition, timeout = 5000) {
    const start = now_default()();

    const checker = (resolve, reject) => {
      const result = condition();

      if (result) {
        resolve(result);
      } else if (start + timeout > now_default()()) {
        reject();
      } else {
        setTimeout(() => checker(resolve, reject), 500);
      }
    };

    return new promise_default.a(checker);
  }

}

Object(esm_defineProperty["a" /* default */])(ResourceComponent_ResourceComponent, "RESOURCE_GOOGLE_MAP_API", '//maps.googleapis.com/maps/api/js');

Object(esm_defineProperty["a" /* default */])(ResourceComponent_ResourceComponent, "RESOURCE_YANDEX_MAP_API", 'https://api-maps.yandex.ru/2.1/');

Object(esm_defineProperty["a" /* default */])(ResourceComponent_ResourceComponent, "RESOURCE_TWITTER_WIDGET", 'https://platform.twitter.com/widgets.js');

Object(esm_defineProperty["a" /* default */])(ResourceComponent_ResourceComponent, "RESOURCE_GEETEST_API", '//static.geetest.com/static/tools/gt.js');
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "react-router-redux"
var external_react_router_redux_ = __webpack_require__("nNRk");

// EXTERNAL MODULE: external "history"
var external_history_ = __webpack_require__("ZFcg");

// EXTERNAL MODULE: ./node_modules/lodash-es/get.js
var get = __webpack_require__("7EGn");

// EXTERNAL MODULE: external "redux-form"
var external_redux_form_ = __webpack_require__("eLzx");

// EXTERNAL MODULE: ./node_modules/lodash-es/_hasUnicode.js
var _hasUnicode = __webpack_require__("e1lX");

// CONCATENATED MODULE: ./node_modules/lodash-es/_createCaseFirst.js





/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = Object(lodash_es_toString["a" /* default */])(string);

    var strSymbols = Object(_hasUnicode["a" /* default */])(string)
      ? Object(_stringToArray["a" /* default */])(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? Object(_castSlice["a" /* default */])(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/* harmony default export */ var _createCaseFirst = (createCaseFirst);

// CONCATENATED MODULE: ./node_modules/lodash-es/upperFirst.js


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
var upperFirst = _createCaseFirst('toUpperCase');

/* harmony default export */ var lodash_es_upperFirst = (upperFirst);

// CONCATENATED MODULE: ./node_modules/yii-steroids/actions/fields.js




const FIELDS_BEFORE_FETCH = 'FIELDS_BEFORE_FETCH';
const FIELDS_AFTER_FETCH = 'FIELDS_AFTER_FETCH';
const FIELDS_SET_META = 'FIELDS_SET_META';
const FIELDS_ADD_SECURITY = 'FIELDS_ADD_SECURITY';
const FIELDS_REMOVE_SECURITY = 'FIELDS_REMOVE_SECURITY';
let timer = null;
let queue = [];
const normalizeName = name => name.replace(/\\/g, '.').replace(/^\./, '');
const fetch = (fieldId, model, attribute, params = {}) => dispatch => {
  model = Object(get["a" /* default */])(model, 'className', String(model)); // Mark loading

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
    http.post('/api/steroids/fields-fetch', {
      fields: queue
    }).then(fields => dispatch({
      type: FIELDS_AFTER_FETCH,
      fields
    })); // Clean queue

    queue = [];
  }, 10);
};
const fetchMeta = (names, force = false) => (dispatch, getState) => {
  if (Object(isArray["a" /* default */])(names)) {
    throw new Error('This format is deprecated, use {models: ..., enums: ...} format.');
  } // Normalize names


  keys_default()(names).forEach(key => {
    names[key] = names[key].map(normalizeName);
  });

  const isMetaFetched = getState().fields.meta !== null;

  if (isMetaFetched && !force) {
    return;
  } // Send request


  return http.post('/api/steroids/meta-fetch', names).then(meta => setMeta(meta));
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
// EXTERNAL MODULE: ./node_modules/yii-steroids/actions/navigation.js
var navigation = __webpack_require__("NAx7");

// CONCATENATED MODULE: ./node_modules/yii-steroids/actions/auth.js








const AUTH_INIT_USER = 'AUTH_INIT_USER';
const AUTH_SET_DATA = 'AUTH_SET_DATA';
const AUTH_ADD_SOCIAL = 'AUTH_ADD_SOCIAL';
let lastInitAction = null;
const init = initAction => (dispatch, getState) => {
  lastInitAction = initAction;
  return initAction(getState()).then(data => {
    // Configure components
    if (Object(isObject["a" /* default */])(data.config)) {
      const components = __webpack_require__("Kvkj");

      keys_default()(data.config).map(name => {
        if (components[name]) {
          keys_default()(data.config[name]).map(key => {
            const value = data.config[name][key];

            const setter = 'set' + lodash_es_upperFirst(key);

            if (Object(isFunction["a" /* default */])(components[name][setter])) {
              components[name][setter](value);
            } else if (Object(isObject["a" /* default */])(components[name][key]) && Object(isObject["a" /* default */])(value)) {
              lodash_es_merge(components[name][key], value);
            } else {
              components[name][key] = value;
            }
          });
        }
      });
    }

    return dispatch([// User auth
    setUser(data.user), // Meta models & enums
    data.meta && setMeta(data.meta), // User auth
    setData(data)].filter(Boolean));
  });
};
const login = (token, redirectPageId = 'root') => dispatch => {
  http.setAccessToken(token);
  return dispatch(init(lastInitAction)).then(() => dispatch(Object(navigation["g" /* goToPage */])(redirectPageId)));
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
  http.setAccessToken(null);
  return dispatch([setUser(null), Object(navigation["g" /* goToPage */])('root')]);
};
// CONCATENATED MODULE: ./node_modules/yii-steroids/reducers/auth.js








function auth_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { auth_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const auth_initialState = {
  isInitialized: false,
  user: null,
  data: null
};
/* harmony default export */ var auth = ((state = auth_initialState, action) => {
  switch (action.type) {
    case AUTH_INIT_USER:
      return auth_objectSpread({}, state, {
        isInitialized: true,
        user: action.user
      });

    case AUTH_SET_DATA:
      return auth_objectSpread({}, state, {
        isInitialized: true,
        data: action.data
      });

    case AUTH_ADD_SOCIAL:
      return auth_objectSpread({}, state, {
        user: auth_objectSpread({}, state.user, {
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
// CONCATENATED MODULE: ./node_modules/yii-steroids/reducers/fields.js








function fields_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function fields_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { fields_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { fields_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }



const fields_initialState = {
  props: {},
  security: {},
  meta: null
};
/* harmony default export */ var fields = ((state = fields_initialState, action) => {
  switch (action.type) {
    case FIELDS_BEFORE_FETCH:
      return fields_objectSpread({}, state, {
        props: fields_objectSpread({}, state.props, {
          [action.fieldId]: fields_objectSpread({
            props: null
          }, state[action.fieldId], {
            model: action.model,
            attribute: action.attribute,
            isLoading: true
          })
        })
      });

    case FIELDS_AFTER_FETCH:
      action.fields.forEach(field => {
        state.props[field.fieldId] = fields_objectSpread({}, state[field.fieldId], {
          isLoading: false,
          props: fields_objectSpread({}, Object(get["a" /* default */])(state, `${field.fieldId}.props`), {}, field.props)
        });
      });
      return fields_objectSpread({}, state, {
        props: fields_objectSpread({}, state.props)
      });

    case FIELDS_ADD_SECURITY:
      return fields_objectSpread({}, state, {
        security: fields_objectSpread({}, state.security, {
          [action.formId]: action.params
        })
      });

    case FIELDS_REMOVE_SECURITY:
      return fields_objectSpread({}, state, {
        security: fields_objectSpread({}, state.security, {
          [action.formId]: null
        })
      });

    case FIELDS_SET_META:
      keys_default()(action.meta).forEach(name => {
        action.meta[name].className = name;
      });

      return fields_objectSpread({}, state, {
        meta: fields_objectSpread({}, state.meta, {}, action.meta)
      });
  }

  return state;
});
const getFieldProps = (state, fieldId) => Object(get["a" /* default */])(state, ['fields', 'props', fieldId, 'props']);
const isFieldLoading = (state, fieldId) => !!Object(get["a" /* default */])(state, ['fields', 'props', fieldId, 'isLoading']);
const fields_isMetaFetched = state => Object(get["a" /* default */])(state, ['fields', 'meta']) !== null;
const getEnumLabels = (state, name) => Object(get["a" /* default */])(state, ['fields', 'meta', name, 'labels']) || null;
const getSecurity = (state, formId) => Object(get["a" /* default */])(state, ['fields', 'security', formId]);
const warnings = {};
const getMeta = (state, name) => {
  name = normalizeName(name);
  const meta = Object(get["a" /* default */])(state, ['fields', 'meta', name]) || null;

  if (!meta && fields_isMetaFetched(state) && !warnings[name]) {
    warnings[name] = true;
    console.warn('Steroids: Not found model meta:', name);
  }

  return meta;
};
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseIsEqual.js + 17 modules
var _baseIsEqual = __webpack_require__("EqEh");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsMatch.js



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
      var stack = new _Stack["a" /* default */];
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? Object(_baseIsEqual["a" /* default */])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/* harmony default export */ var _baseIsMatch = (baseIsMatch);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isStrictComparable.js


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !Object(isObject["a" /* default */])(value);
}

/* harmony default export */ var _isStrictComparable = (isStrictComparable);

// EXTERNAL MODULE: ./node_modules/lodash-es/keys.js
var lodash_es_keys = __webpack_require__("mkut");

// CONCATENATED MODULE: ./node_modules/lodash-es/_getMatchData.js



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = Object(lodash_es_keys["a" /* default */])(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

/* harmony default export */ var _getMatchData = (getMatchData);

// CONCATENATED MODULE: ./node_modules/lodash-es/isMatch.js



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
  return object === source || _baseIsMatch(object, source, _getMatchData(source));
}

/* harmony default export */ var lodash_es_isMatch = (isMatch);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayEvery.js
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

/* harmony default export */ var _arrayEvery = (arrayEvery);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseForOwn.js



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, lodash_es_keys["a" /* default */]);
}

/* harmony default export */ var _baseForOwn = (baseForOwn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseEach.js


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
    if (!Object(isArrayLike["a" /* default */])(collection)) {
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

/* harmony default export */ var _createBaseEach = (createBaseEach);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseEach.js



/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

/* harmony default export */ var _baseEach = (baseEach);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseEvery.js


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
  _baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

/* harmony default export */ var _baseEvery = (baseEvery);

// CONCATENATED MODULE: ./node_modules/lodash-es/_matchesStrictComparable.js
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

/* harmony default export */ var _matchesStrictComparable = (matchesStrictComparable);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMatches.js




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

/* harmony default export */ var _baseMatches = (baseMatches);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseHasIn.js
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

/* harmony default export */ var _baseHasIn = (baseHasIn);

// EXTERNAL MODULE: ./node_modules/lodash-es/_castPath.js + 3 modules
var _castPath = __webpack_require__("IlA0");

// EXTERNAL MODULE: ./node_modules/lodash-es/isLength.js
var isLength = __webpack_require__("Js68");

// EXTERNAL MODULE: ./node_modules/lodash-es/_toKey.js
var _toKey = __webpack_require__("Tchk");

// CONCATENATED MODULE: ./node_modules/lodash-es/_hasPath.js







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
  path = Object(_castPath["a" /* default */])(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = Object(_toKey["a" /* default */])(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && Object(isLength["a" /* default */])(length) && Object(_isIndex["a" /* default */])(key, length) &&
    (Object(isArray["a" /* default */])(object) || Object(isArguments["a" /* default */])(object));
}

/* harmony default export */ var _hasPath = (hasPath);

// CONCATENATED MODULE: ./node_modules/lodash-es/hasIn.js



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
  return object != null && _hasPath(object, path, _baseHasIn);
}

/* harmony default export */ var lodash_es_hasIn = (hasIn);

// EXTERNAL MODULE: ./node_modules/lodash-es/_isKey.js
var _isKey = __webpack_require__("vY+C");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMatchesProperty.js








/** Used to compose bitmasks for value comparisons. */
var _baseMatchesProperty_COMPARE_PARTIAL_FLAG = 1,
    _baseMatchesProperty_COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (Object(_isKey["a" /* default */])(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(Object(_toKey["a" /* default */])(path), srcValue);
  }
  return function(object) {
    var objValue = Object(get["a" /* default */])(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? lodash_es_hasIn(object, path)
      : Object(_baseIsEqual["a" /* default */])(srcValue, objValue, _baseMatchesProperty_COMPARE_PARTIAL_FLAG | _baseMatchesProperty_COMPARE_UNORDERED_FLAG);
  };
}

/* harmony default export */ var _baseMatchesProperty = (baseMatchesProperty);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseProperty.js
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

/* harmony default export */ var _baseProperty = (baseProperty);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGet.js
var _baseGet = __webpack_require__("UTJH");

// CONCATENATED MODULE: ./node_modules/lodash-es/_basePropertyDeep.js


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return Object(_baseGet["a" /* default */])(object, path);
  };
}

/* harmony default export */ var _basePropertyDeep = (basePropertyDeep);

// CONCATENATED MODULE: ./node_modules/lodash-es/property.js





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
  return Object(_isKey["a" /* default */])(path) ? _baseProperty(Object(_toKey["a" /* default */])(path)) : _basePropertyDeep(path);
}

/* harmony default export */ var lodash_es_property = (property);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIteratee.js






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
    return lodash_es_identity;
  }
  if (typeof value == 'object') {
    return Object(isArray["a" /* default */])(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return lodash_es_property(value);
}

/* harmony default export */ var _baseIteratee = (baseIteratee);

// CONCATENATED MODULE: ./node_modules/lodash-es/every.js






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
  var func = Object(isArray["a" /* default */])(collection) ? _arrayEvery : _baseEvery;
  if (guard && _isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, _baseIteratee(predicate, 3));
}

/* harmony default export */ var lodash_es_every = (every);

// CONCATENATED MODULE: ./node_modules/lodash-es/assignIn.js




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
var assignIn = _createAssigner(function(object, source) {
  _copyObject(source, lodash_es_keysIn(source), object);
});

/* harmony default export */ var lodash_es_assignIn = (assignIn);

// CONCATENATED MODULE: ./node_modules/yii-steroids/actions/list.js








function list_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { list_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }



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

  return http.send(list.actionMethod, url || location.pathname, list_objectSpread({}, list.query, {
    page: list.page,
    pageSize: list.pageSize,
    sort: list.sort
  })).then(response => response.data);
};

const list_init = (listId, props) => dispatch => dispatch({
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
  layoutName: clientStorage.get(STORAGE_LAYOUT_KEY_PREFIX + listId) || props.selectedLayoutName || Object(get["a" /* default */])(props, 'layoutNames.0.id') || null,
  listId,
  type: LIST_INIT
});
const list_fetch = (listId, params = {}) => (dispatch, getState) => {
  const list = list_objectSpread({}, Object(get["a" /* default */])(getState(), ['list', 'lists', listId]), {}, params);

  if (!list.action && list.action !== '') {
    return;
  }

  const onFetch = list.onFetch || defaultFetchHandler;
  return dispatch([list_objectSpread({}, params, {
    listId,
    type: LIST_BEFORE_FETCH
  }), onFetch(list).then(data => {
    if (!getState().list.lists[listId]) {
      return [];
    }

    return list_objectSpread({}, data, {
      listId,
      type: LIST_AFTER_FETCH
    });
  })]);
};
const lazyFetch = (listId, params) => dispatch => {
  if (lazyTimers[listId]) {
    clearTimeout(lazyTimers[listId]);
  }

  lazyTimers[listId] = setTimeout(() => dispatch(list_fetch(listId, params)), 200);
};
const setPage = (listId, page, loadMore) => list_fetch(listId, {
  page,
  loadMore
});
const setPageSize = (listId, pageSize) => list_fetch(listId, {
  page: 1,
  pageSize
});
const setSort = (listId, sort) => list_fetch(listId, {
  sort
});
const refresh = listId => list_fetch(listId);
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
  clientStorage.set(STORAGE_LAYOUT_KEY_PREFIX + listId, layoutName);
  return {
    listId,
    layoutName,
    type: LIST_SET_LAYOUT
  };
};
// CONCATENATED MODULE: ./node_modules/yii-steroids/reducers/list.js








function reducers_list_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducers_list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_list_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { reducers_list_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }






const list_initialState = {
  lists: {},
  selectedIds: {}
};
/* harmony default export */ var reducers_list = ((state = list_initialState, action) => {
  switch (action.type) {
    case LIST_INIT:
      return reducers_list_objectSpread({}, state, {
        lists: reducers_list_objectSpread({}, state.lists, {
          [action.listId]: reducers_list_objectSpread({
            meta: {},
            layoutName: null,
            total: action.total || (action.items ? action.items.length : 0),
            isFetched: !!action.items,
            isLoading: false
          }, action)
        })
      });

    case LIST_BEFORE_FETCH:
      return reducers_list_objectSpread({}, state, {
        lists: reducers_list_objectSpread({}, state.lists, {
          [action.listId]: reducers_list_objectSpread({}, state.lists[action.listId], {}, action, {
            isLoading: true
          })
        })
      });

    case LIST_AFTER_FETCH:
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

      return reducers_list_objectSpread({}, state, {
        lists: reducers_list_objectSpread({}, state.lists, {
          [action.listId]: reducers_list_objectSpread({}, list, {}, action, {
            items,
            isFetched: true,
            isLoading: false
          })
        })
      });

    case LIST_ITEM_ADD:
      if (state.lists[action.listId]) {
        return reducers_list_objectSpread({}, state, {
          lists: reducers_list_objectSpread({}, state.lists, {
            [action.listId]: reducers_list_objectSpread({}, state.lists[action.listId], {
              items: action.prepend ? [].concat(action.item).concat(state.lists[action.listId].items) : [].concat(state.lists[action.listId].items).concat(action.item)
            })
          })
        });
      }

      break;

    case LIST_ITEM_UPDATE:
      return reducers_list_objectSpread({}, state, {
        lists: reducers_list_objectSpread({}, state.lists, {
          [action.listId]: reducers_list_objectSpread({}, state.lists[action.listId], {
            items: state.lists[action.listId].items.map(item => {
              if (lodash_es_isMatch(item, action.condition)) {
                item = lodash_es_assignIn({}, item, action.item);
              }

              return item;
            })
          })
        })
      });

    case LIST_DESTROY:
      delete state.lists[action.listId];
      return reducers_list_objectSpread({}, state, {
        lists: reducers_list_objectSpread({}, state.lists)
      });

    case LIST_TOGGLE_ITEM:
      const selectedIds = Object(get["a" /* default */])(state, ['selectedIds', action.listId]) || [];
      const index = selectedIds.indexOf(action.itemId);

      if (index === -1) {
        selectedIds.push(action.itemId);
      } else {
        selectedIds.splice(index, 1);
      }

      return reducers_list_objectSpread({}, state, {
        selectedIds: reducers_list_objectSpread({}, state.selectedIds, {
          [action.listId]: [].concat(selectedIds)
        })
      });

    case LIST_TOGGLE_ALL:
      const list4 = state.lists[action.listId];

      if (list4) {
        const ids = list4.items.map(item => item[list4.primaryKey]) || [];

        const isAll = state.selectedIds[action.listId] && lodash_es_every(ids.map(id => state.selectedIds[action.listId].includes(id)));

        return reducers_list_objectSpread({}, state, {
          selectedIds: reducers_list_objectSpread({}, state.selectedIds, {
            [action.listId]: isAll ? [] : ids
          })
        });
      }

      break;

    case LIST_SET_LAYOUT:
      return reducers_list_objectSpread({}, state, {
        lists: reducers_list_objectSpread({}, state.lists, {
          [action.listId]: reducers_list_objectSpread({}, state.lists[action.listId], {
            layoutName: action.layoutName
          })
        })
      });
  }

  return state;
});
const getList = (state, listId) => Object(get["a" /* default */])(state, ['list', 'lists', listId]) || null;
const getIds = (state, listId) => {
  const list = getList(state, listId);
  return list && list.items && list.items.map(item => item[list.primaryKey]) || [];
};
const getCheckedIds = (state, listId) => {
  return Object(get["a" /* default */])(state, ['list', 'selectedIds', listId]) || [];
};
const isChecked = (state, listId, itemId) => getCheckedIds(state, listId).includes(itemId);
const isCheckedAll = (state, listId) => {
  const selectedIds = getCheckedIds(state, listId);
  return selectedIds.length > 0 && lodash_es_every(getIds(state, listId).map(id => selectedIds.includes(id)));
};
// CONCATENATED MODULE: ./node_modules/yii-steroids/reducers/config.js
/* harmony default export */ var reducers_config = ((state = {}) => {
  return state;
});
// CONCATENATED MODULE: ./node_modules/yii-steroids/reducers/notifications.js








function notifications_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function notifications_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { notifications_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { notifications_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const notifications_initialState = {
  items: []
};
/* harmony default export */ var notifications = ((state = notifications_initialState, action) => {
  switch (action.type) {
    case NOTIFICATIONS_SHOW:
      return notifications_objectSpread({}, state, {
        items: [].concat(state.items).filter(item => item.level !== action.level || item.message !== action.message) // unique
        .concat([{
          id: action.id,
          level: action.level || 'info',
          message: action.message,
          isClosing: false
        }])
      });

    case NOTIFICATIONS_CLOSING:
      return notifications_objectSpread({}, state, {
        items: [].concat(state.items).map(item => {
          if (item.id === action.id) {
            item.isClosing = true;
          }

          return item;
        })
      });

    case NOTIFICATIONS_CLOSE:
      return notifications_objectSpread({}, state, {
        items: state.items.filter(item => item.id !== action.id)
      });

    default:
      return state;
  }
});
const getNotifications = state => state.notifications.items;
// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayMap.js
var _arrayMap = __webpack_require__("twO/");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseValues.js


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
  return Object(_arrayMap["a" /* default */])(props, function(key) {
    return object[key];
  });
}

/* harmony default export */ var _baseValues = (baseValues);

// CONCATENATED MODULE: ./node_modules/lodash-es/values.js



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
  return object == null ? [] : _baseValues(object, Object(lodash_es_keys["a" /* default */])(object));
}

/* harmony default export */ var lodash_es_values = (values);

// CONCATENATED MODULE: ./node_modules/yii-steroids/actions/modal.js
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
// CONCATENATED MODULE: ./node_modules/yii-steroids/reducers/modal.js








function modal_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { modal_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }




const modal_initialState = {
  opened: {}
};
/* harmony default export */ var modal = ((state = modal_initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        opened: modal_objectSpread({}, state.opened, {
          [action.id]: {
            id: action.id,
            modal: action.modal,
            props: modal_objectSpread({}, Object(get["a" /* default */])(state, `opened.${action.id}.props`), {}, action.props)
          }
        })
      };

    case CLOSE_MODAL:
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
const getOpened = state => lodash_es_values(state.modal.opened);
// EXTERNAL MODULE: ./node_modules/yii-steroids/reducers/routing.js + 2 modules
var routing = __webpack_require__("9P7v");

// EXTERNAL MODULE: ./node_modules/yii-steroids/reducers/navigation.js
var reducers_navigation = __webpack_require__("/UAK");

// CONCATENATED MODULE: ./node_modules/yii-steroids/actions/screen.js
const SCREEN_SET_WIDTH = 'SCREEN_SET_WIDTH';
const SCREEN_SET_MEDIA = 'SCREEN_SET_MEDIA';
const setMedia = media => ({
  type: SCREEN_SET_MEDIA,
  media
});
let screen_timer = null;
const setWidth = width => dispatch => {
  if (screen_timer) {
    clearTimeout(screen_timer);
  }

  screen_timer = setTimeout(() => {
    dispatch({
      type: SCREEN_SET_WIDTH,
      width
    });
  }, 100);
};
// CONCATENATED MODULE: ./node_modules/yii-steroids/reducers/screen.js








function screen_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function screen_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { screen_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { screen_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const SCREE_PHONE = 'phone';
const SCREEN_TABLET = 'tablet';
const SCREEN_DESKTOP = 'desktop';
const screen_initialState = {
  width: 1280,
  media: {
    [SCREE_PHONE]: 320,
    [SCREEN_TABLET]: 768,
    [SCREEN_DESKTOP]: 1024
  }
};
/* harmony default export */ var screen = ((state = screen_initialState, action) => {
  switch (action.type) {
    case SCREEN_SET_WIDTH:
      return screen_objectSpread({}, state, {
        width: action.width
      });

    case SCREEN_SET_MEDIA:
      return screen_objectSpread({}, state, {
        media: screen_objectSpread({}, state.media, {}, action.media)
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
// CONCATENATED MODULE: ./node_modules/yii-steroids/reducers/index.js








function reducers_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { reducers_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }













/* harmony default export */ var reducers = (asyncReducers => Object(external_redux_["combineReducers"])(reducers_objectSpread({
  form: external_redux_form_["reducer"],
  auth: auth,
  fields: fields,
  list: reducers_list,
  config: reducers_config,
  notifications: notifications,
  modal: modal,
  routing: routing["a" /* default */],
  navigation: reducers_navigation["default"],
  screen: screen
}, asyncReducers)));
// EXTERNAL MODULE: ./node_modules/lodash-es/trim.js
var trim = __webpack_require__("Vfgr");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMap.js



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
      result = Object(isArrayLike["a" /* default */])(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/* harmony default export */ var _baseMap = (baseMap);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSortBy.js
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

/* harmony default export */ var _baseSortBy = (baseSortBy);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseUnary.js
var _baseUnary = __webpack_require__("ovuK");

// EXTERNAL MODULE: ./node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__("G8aS");

// CONCATENATED MODULE: ./node_modules/lodash-es/_compareAscending.js


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
        valIsSymbol = Object(isSymbol["a" /* default */])(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = Object(isSymbol["a" /* default */])(other);

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

/* harmony default export */ var _compareAscending = (compareAscending);

// CONCATENATED MODULE: ./node_modules/lodash-es/_compareMultiple.js


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
    var result = _compareAscending(objCriteria[index], othCriteria[index]);
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

/* harmony default export */ var _compareMultiple = (compareMultiple);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseOrderBy.js








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
  iteratees = Object(_arrayMap["a" /* default */])(iteratees.length ? iteratees : [lodash_es_identity], Object(_baseUnary["a" /* default */])(_baseIteratee));

  var result = _baseMap(collection, function(value, key, collection) {
    var criteria = Object(_arrayMap["a" /* default */])(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return _baseSortBy(result, function(object, other) {
    return _compareMultiple(object, other, orders);
  });
}

/* harmony default export */ var _baseOrderBy = (baseOrderBy);

// CONCATENATED MODULE: ./node_modules/lodash-es/orderBy.js



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
  if (!Object(isArray["a" /* default */])(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!Object(isArray["a" /* default */])(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return _baseOrderBy(collection, iteratees, orders);
}

/* harmony default export */ var lodash_es_orderBy = (orderBy);

// EXTERNAL MODULE: ./src/enums/CurrencyEnum.js
var CurrencyEnum = __webpack_require__("Zj1l");

// EXTERNAL MODULE: ./src/enums/Enum.js
var Enum = __webpack_require__("cKQt");

// CONCATENATED MODULE: ./src/enums/CollectionEnum.js


class CollectionEnum_CollectionEnum extends Enum["a" /* default */] {
  // static NEUTRINO_PRICES = 'neutrino_prices';
  static getKeys() {
    return [this.BONDS_ORDERS, this.BONDS_ORDERS_HISTORY, // this.NEUTRINO_PRICES,
    this.NEUTRINO_BALANCES, this.NEUTRINO_WITHDRAW, this.RPD_HISTORY_BALANCES, this.RPD_USER_BALANCES, this.RPD_USER_HISTORY_BALANCES, this.RPD_PROFIT, this.RPD_NEXT_INDEX, this.RPD_INDEX_NUMBERS, this.RPD_IS_CLAIMED, this.CONTROL_CONFIG];
  }

}

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "BONDS_ORDERS", 'bonds_orders');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "BONDS_ORDERS_HISTORY", 'bonds_orders_history');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "NEUTRINO_ORDERS", 'neutrino_orders');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "NEUTRINO_BALANCES", 'neutrino_balances');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "NEUTRINO_WITHDRAW", 'neutrino_withdraw');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "RPD_BALANCES", 'rpd_balances');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "RPD_HISTORY_BALANCES", 'rpd_history_balances');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "RPD_USER_BALANCES", 'rpd_user_balances');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "RPD_USER_HISTORY_BALANCES", 'rpd_user_history_balances');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "RPD_PROFIT", 'rpd_profit');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "RPD_NEXT_INDEX", 'rpd_next_index');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "RPD_INDEX_NUMBERS", 'rpd_index_numbers');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "RPD_IS_CLAIMED", 'rpd_is_claimed');

Object(esm_defineProperty["a" /* default */])(CollectionEnum_CollectionEnum, "CONTROL_CONFIG", 'control_config');
// CONCATENATED MODULE: ./src/actions/currency.js



const CURRENCY_SET_CURRENT = 'CURRENCY_SET_CURRENT';
const CURRENCY_SET_PRICES = 'CURRENCY_SET_PRICES';
const currencySetCurrent = (quote, base = null, source = null) => {
  base = base || CurrencyEnum["a" /* default */].getBaseCurrency(quote);
  source = source || CurrencyEnum["a" /* default */].getSourceCurrency(quote);
  return {
    type: CURRENCY_SET_CURRENT,
    source,
    base,
    quote
  };
};
const currencyWsHandler = event => dispatch => {
  if (event.stream === 'collections' && event.data.collectionName === CollectionEnum_CollectionEnum.NEUTRINO_PRICES) {
    dispatch(currencyFetchPrices());
  }
};
const currencySetPrices = prices => ({
  type: CURRENCY_SET_PRICES,
  prices
});
const currencyFetchPrices = () => http.get('/api/v1/prices').then(prices => currencySetPrices(prices));
// CONCATENATED MODULE: ./src/reducers/currency.js








function currency_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function currency_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { currency_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { currency_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }





const currency_initialState = {
  base: CurrencyEnum["a" /* default */].getBaseCurrency(CurrencyEnum["a" /* default */].USD_N),
  source: CurrencyEnum["a" /* default */].getSourceCurrency(CurrencyEnum["a" /* default */].USD_N),
  quote: CurrencyEnum["a" /* default */].USD_N,
  prices: null
};
/* harmony default export */ var reducers_currency = ((state = currency_initialState, action) => {
  switch (action.type) {
    case CURRENCY_SET_CURRENT:
      return currency_objectSpread({}, state, {
        base: action.base,
        quote: action.quote,
        source: action.source
      });

    case CURRENCY_SET_PRICES:
      return currency_objectSpread({}, state, {
        prices: action.prices
      });
  }

  return state;
});
const getBaseCurrency = state => Object(get["a" /* default */])(state, 'currency.base');
const getQuoteCurrency = state => Object(get["a" /* default */])(state, 'currency.quote');
const getSourceCurrency = state => Object(get["a" /* default */])(state, 'currency.source');
const getPairName = state => getBaseCurrency(state) + '_' + getQuoteCurrency(state);
const getPrices = state => state.currency.prices;
const getWavesExchanges = (state, currency) => state.currency.prices[currency] || [];
const getLastWavesExchange = (state, currency) => {
  let prices = getWavesExchanges(state, currency);

  if (prices.length > 0) {
    prices = lodash_es_orderBy(prices, 'height', 'desc');
    return prices[0].price;
  } else {
    return 0;
  }
};
// CONCATENATED MODULE: ./src/actions/api.js








function api_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function api_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { api_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }





const API_ADD_CONFIGS = 'API_ADD_CONFIGS';
const API_REMOVE_CONFIGS = 'API_REMOVE_CONFIGS';
const API_SET_DATA = 'API_SET_DATA';

const normalizeConfigs = configs => {
  if (!configs) {
    configs = [];
  }

  if (!Object(isArray["a" /* default */])(configs)) {
    configs = [configs];
  }

  configs.forEach((config, index) => {
    if (!config.key || !config.url) {
      throw new Error('key and url is required');
    }

    configs[index] = api_objectSpread({
      method: 'get',
      params: {}
    }, config);
  });
  return configs;
};

const api_fetch = config => http.send(config.method, config.url, config.params).then(result => result.data);

const getConfigId = config => config.id || Object(trim["a" /* default */])(config.url, '/');
const apiAddConfigs = configs => dispatch => {
  configs = normalizeConfigs(configs);
  dispatch({
    type: API_ADD_CONFIGS,
    configs
  });
  configs.forEach(config => {
    api_fetch(config).then(data => dispatch({
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

    if (event.data.pairName === getPairName(state)) {
      configs.forEach(config => {
        if ([].concat(config.collection).includes(event.data.collectionName)) {
          api_fetch(config).then(data => dispatch({
            type: API_SET_DATA,
            config,
            data
          }));
        }
      });
    }
  }
};
// CONCATENATED MODULE: ./src/reducers/api.js








function reducers_api_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducers_api_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_api_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { reducers_api_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const api_initialState = {
  configs: [],
  data: {},
  counters: {}
};
/* harmony default export */ var api = ((state = api_initialState, action) => {
  switch (action.type) {
    case API_ADD_CONFIGS:
      const configs = [].concat(state.configs);

      const counters = reducers_api_objectSpread({}, state.counters);

      action.configs.forEach(config => {
        const id = getConfigId(config);

        if (counters[id]) {
          counters[id]++;
        } else {
          counters[id] = 1;
          configs.push(config);
        }
      });
      return reducers_api_objectSpread({}, state, {
        configs,
        counters
      });

    case API_REMOVE_CONFIGS:
      let configs2 = [].concat(state.configs);

      const counters2 = reducers_api_objectSpread({}, state.counters);

      action.configs.forEach(config => {
        const id = getConfigId(config);

        if (counters2[id]) {
          counters2[id]--;

          if (counters2[id] <= 0) {
            configs2 = configs2.filter(item => getConfigId(item) !== id);
          }
        }
      });
      return reducers_api_objectSpread({}, state, {
        configs: configs2,
        counters: counters2
      });

    case API_SET_DATA:
      return reducers_api_objectSpread({}, state, {
        data: reducers_api_objectSpread({}, state.data, {
          [getConfigId(action.config)]: action.data
        })
      });
  }

  return state;
});
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./src/actions/contract.ts
const UPDATE_CONTRACT_ADDRESS_INFO = 'UPDATE_CONTRACT_ADDRESS_INFO';
const DROP_CONTRACT_ADDRESS_INFO = 'DROP_CONTRACT_ADDRESS_INFO';
const CREATE_CONTRACT_ADDRESS_INFO = 'CREATE_CONTRACT_ADDRESS_INFO';
const SET_CONTRACT_PRICE = 'SET_CONTRACT_PRICE';
const SET_TOTAL_ISSUED = 'SET_TOTAL_ISSUED';
// CONCATENATED MODULE: ./src/reducers/contract/index.ts








function contract_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function contract_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contract_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { contract_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }



const contract_initialState = {
  contractData: {}
};
/* harmony default export */ var contract = ((state = contract_initialState, action) => {
  switch (action.type) {
    case CREATE_CONTRACT_ADDRESS_INFO:
      return contract_objectSpread({}, state, {
        contractData: contract_objectSpread({}, state.contractData, {
          [action.address]: action.data || []
        })
      });

    case UPDATE_CONTRACT_ADDRESS_INFO:
      const oldData = external_lodash_default.a.get(state.contractData, `${action.address}`, []);

      return contract_objectSpread({}, state, {
        contractData: contract_objectSpread({}, state.contractData, {
          [action.address]: action.data ? [...oldData, ...action.data] : []
        })
      });

    case DROP_CONTRACT_ADDRESS_INFO:
      return contract_objectSpread({}, state, {
        contractData: contract_objectSpread({}, state.contractData, {
          [action.address]: []
        })
      });
  }

  return state;
});
// CONCATENATED MODULE: ./src/reducers/contract/prices.ts








function prices_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function prices_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { prices_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { prices_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const prices_initialState = {
  contractPrices: {}
};
/* harmony default export */ var contract_prices = ((state = prices_initialState, action) => {
  switch (action.type) {
    case SET_CONTRACT_PRICE:
      return prices_objectSpread({}, state, {
        contractPrices: prices_objectSpread({}, state.contractPrices, {
          [action.name]: action.value
        })
      });

    case SET_TOTAL_ISSUED:
      return prices_objectSpread({}, state, {
        contractPrices: prices_objectSpread({}, state.contractPrices, {
          totalIssued: action.value
        })
      });
  }

  return state;
});
// CONCATENATED MODULE: ./src/reducers/index.js








function src_reducers_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function src_reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { src_reducers_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { src_reducers_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }







/* harmony default export */ var src_reducers = (asyncReducers => Object(external_redux_["combineReducers"])(src_reducers_objectSpread({
  api: api,
  currency: reducers_currency
}, reducers_namespaceObject, {}, asyncReducers, {
  contractData: contract,
  contractPrices: contract_prices
})));
// CONCATENATED MODULE: ./node_modules/yii-steroids/components/StoreComponent.js









function StoreComponent_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function StoreComponent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { StoreComponent_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { StoreComponent_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }








class StoreComponent_StoreComponent {
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
    const initialState = StoreComponent_objectSpread({}, !process.env.IS_NODE ? lodash_es_merge(...(window.APP_REDUX_PRELOAD_STATES || [{}])) : {}, {}, config.initialState);

    const createHistory = process.env.IS_NODE ? external_history_["createMemoryHistory"] : external_history_["createBrowserHistory"];
    this.history = createHistory(StoreComponent_objectSpread({}, Object(get["a" /* default */])(initialState, 'config.store.history', {}), {}, config.history));
    this.store = Object(external_redux_["createStore"])(src_reducers(), initialState, Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(({
      getState
    }) => next => action => this._prepare(action, next, getState)), Object(external_redux_["applyMiddleware"])(Object(external_react_router_redux_["routerMiddleware"])(this.history)), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));
  }

  configurate() {
    // Apply configuration
    const customConfig = this.getState().config || {};

    const components = __webpack_require__("Kvkj");

    lodash_es_merge(components.clientStorage, customConfig.clientStorage);

    lodash_es_merge(components.html, customConfig.html);

    lodash_es_merge(components.http, customConfig.http);

    lodash_es_merge(components.locale, customConfig.locale);

    lodash_es_merge(components.resource, customConfig.resource);

    lodash_es_merge(components.store, customConfig.store);

    lodash_es_merge(components.ui, customConfig.ui);

    lodash_es_merge(components.widget, customConfig.widget);
  }

  dispatch(action) {
    return this.store.dispatch(action);
  }

  getState() {
    return this.store.getState();
  }

  addReducers(asyncReducers) {
    this._asyncReducers = StoreComponent_objectSpread({}, this._asyncReducers, {}, asyncReducers);
    this.store.replaceReducer(src_reducers(this._asyncReducers));
  }

  errorHandler(error) {
    throw error;
  }

  _prepare(action, dispatch, getState) {
    // Multiple dispatch (redux-multi)
    if (is_array_default()(action)) {
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


    if (lodash_es_isPlainObject(action) && action.type) {
      if (false) {}

      try {
        return dispatch(action);
      } catch (e) {
        this.errorHandler(e, p => this._prepare(p, dispatch, getState));
      }
    }

    return action;
  }

}
// CONCATENATED MODULE: ./node_modules/yii-steroids/components/UiComponent.js








function UiComponent_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UiComponent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UiComponent_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { UiComponent_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }



class UiComponent_UiComponent {
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
    if (Object(isFunction["a" /* default */])(items) && Object(isFunction["a" /* default */])(items.keys)) {
      items.keys().forEach(fileName => {
        const matches = fileName.match(/^\.\/(.*\/)?[^\/]+\/([^\/]+)\.js$/);
        const path = (matches[1] || '').replace(/\//g, '.') + matches[2];
        this._components[group] = this._components[group] || {};
        this._components[group][path] = items(fileName).default;
      });
    } else if (Object(isObject["a" /* default */])(items)) {
      // object
      this._components[group] = UiComponent_objectSpread({}, this._components[group], {}, items);
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js
var is_integer = __webpack_require__("O+LL");
var is_integer_default = /*#__PURE__*/__webpack_require__.n(is_integer);

// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__("lCf4");
var get_default = /*#__PURE__*/__webpack_require__.n(get_);

// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__("zgRa");
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);

// EXTERNAL MODULE: ./node_modules/lodash-es/isEqual.js
var isEqual = __webpack_require__("Muja");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./src/components/dal/apiHoc.js








var apiHoc_jsx = external_react_default.a.createElement;

function apiHoc_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function apiHoc_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { apiHoc_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { apiHoc_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }






const stateMap = state => ({
  apiData: state.api && state.api.data || null
});

/* harmony default export */ var apiHoc = (configsFunc => WrappedComponent => {
  var _class, _temp;

  return Object(external_react_redux_["connect"])(stateMap)((_temp = _class = class ApiHOC extends external_react_default.a.Component {
    constructor() {
      super(...arguments);
      this.state = {
        overwritedProps: null
      };
      this._onUpdate = this._onUpdate.bind(this);
    }

    componentDidMount() {
      this.props.dispatch(apiAddConfigs(configsFunc(apiHoc_objectSpread({}, this.props, {}, this.state.overwritedProps))));
    }

    componentWillUnmount() {
      this.props.dispatch(apiRemoveConfigs(configsFunc(apiHoc_objectSpread({}, this.props, {}, this.state.overwritedProps))));
    }

    componentDidUpdate(prevProps, prevState) {
      const prevConfigs = [].concat(configsFunc(apiHoc_objectSpread({}, prevProps, {}, prevState.overwritedProps)));
      const nextConfigs = [].concat(configsFunc(apiHoc_objectSpread({}, this.props, {}, this.state.overwritedProps)));

      for (let i = 0; i < Math.max(prevConfigs.length, nextConfigs.length); i++) {
        if (!Object(isEqual["a" /* default */])(prevConfigs[i], nextConfigs[i])) {
          this.props.dispatch([apiRemoveConfigs(prevConfigs[i]), apiAddConfigs(nextConfigs[i])]);
        }
      }
    }

    render() {
      const data = {};

      if (this.props.apiData) {
        [].concat(configsFunc(apiHoc_objectSpread({}, this.props, {}, this.state.overwritedProps))).forEach(config => {
          data[config.key] = this.props.apiData[getConfigId(config)];
        });
      }

      return apiHoc_jsx(WrappedComponent, Object(esm_extends["a" /* default */])({}, this.props, this.state.overwritedProps, data, {
        updateApiConfig: this._onUpdate
      }));
    }

    _onUpdate(overwritedProps) {
      this.setState({
        overwritedProps
      });
    }

  }, Object(esm_defineProperty["a" /* default */])(_class, "WrappedComponent", WrappedComponent), _temp));
});
// CONCATENATED MODULE: ./src/contractControllers/helpers.ts

const getAddressInfo = async (nodeUrl, address, params) => {
  const url = `${nodeUrl}/addresses/data/${address}`;
  const response = await external_axios_default.a.get(url, params);
  return response;
};
const getAddressDefaultBalance = async (params, axiosConfig) => {
  const {
    nodeUrl,
    address
  } = params;
  const url = `${nodeUrl}/addresses/balance/${address}`;
  const response = await external_axios_default.a.get(url, axiosConfig || {});
  return response;
};
const getAddressDataByKey = async (params, axiosConfig) => {
  const {
    nodeUrl,
    address,
    key
  } = params;
  const url = `${nodeUrl}/addresses/data/${address}/${key}`;
  const response = await external_axios_default.a.get(url, axiosConfig || {});
  return response;
};
const getAssetDetails = async (params, axiosConfig) => {
  const {
    nodeUrl,
    assetId
  } = params;
  const url = `${nodeUrl}/assets/details/${assetId}`;
  const response = await external_axios_default.a.get(url, axiosConfig || {});
  return response;
};
const getAssetBalanceInfo = async (params, axiosConfig) => {
  const {
    nodeUrl,
    address,
    assetId
  } = params;
  const url = `${nodeUrl}/assets/balance/${address}/${assetId}`;
  const response = await external_axios_default.a.get(url, axiosConfig || {});
  return response;
};
// CONCATENATED MODULE: ./src/contractControllers/BalanceController.ts





class BalanceController_BalanceController {
  constructor({
    dalRef
  }) {
    Object(esm_defineProperty["a" /* default */])(this, "dal", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "_timer", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "_address", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "_balances", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "_lastTransactionId", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "onUpdate", void 0);

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
    const wavesBalanceRes = await getAddressDefaultBalance({
      nodeUrl: this.dal.nodeUrl,
      address
    });
    balanceDict[CurrencyEnum["a" /* default */].WAVES] = Object(external_lodash_["get"])(wavesBalanceRes.data, 'balance', null);

    for (const currency in this.dal.assets) {
      if (this.dal.assets.hasOwnProperty(currency)) {
        const assetId = this.dal.assets[currency];
        const newBalanceRes = await getAssetBalanceInfo({
          nodeUrl: this.dal.nodeUrl,
          address,
          assetId
        });
        balanceDict[currency] = newBalanceRes.data.balance || null;
      }
    } // Normalize


    keys_default()(balanceDict).forEach(currency => {
      balanceDict[currency] = Object(external_lodash_["round"])(balanceDict[currency] / CurrencyEnum["a" /* default */].getContractPow(currency), 2);
    });

    if (address === this._address) {
      this._balances = balanceDict;

      if (this.onUpdate) {
        this.onUpdate(balanceDict);
      }
    }
  }

}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./src/components/dal/Keeper.ts





const {
  waitForTx,
  broadcast
} = __webpack_require__("d5um");

const _isString = __webpack_require__("5vqK");

const _isInteger = __webpack_require__("dm47");

const _isObject = __webpack_require__("4oMP");

class Keeper_Keeper {
  constructor(dal) {
    Object(esm_defineProperty["a" /* default */])(this, "dal", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "onUpdate", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "fee", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "_isAvailable", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "_address", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "_pageStart", void 0);

    Object(esm_defineProperty["a" /* default */])(this, "_checkerInterval", void 0);

    this.dal = dal;
    this.onUpdate = null;
    this.fee = 0.009;
    this._isAvailable = null;
    this._address = null;
    this._pageStart = now_default()();
    this._checkerInterval = null;
    this._buildTransaction = this._buildTransaction.bind(this);
    this._addressChecker = this._addressChecker.bind(this);
  }

  async start() {
    if (this._checkerInterval) {
      clearInterval(this._checkerInterval);
    }

    this._address = await this.getAddress(); // @ts-ignore

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

  async getPlugin() {
    const checker = resolve => {
      if (this._isAvailable === true || now_default()() - this._pageStart > 2000 && window.WavesKeeper && window.WavesKeeper.publicState) {
        this._isAvailable = true;
        setTimeout(() => resolve(window.WavesKeeper));
      } else if (this._isAvailable === false || now_default()() - this._pageStart > 5000) {
        this._isAvailable = false;
        resolve(null);
      } else if (this._isAvailable === null) {
        setTimeout(() => checker(resolve), 100);
      }
    };

    return new promise_default.a(checker);
  }

  async sendTransaction(pairName, contractName, method, args, paymentCurrency, paymentAmount, waitTx = true) {
    const keeper = await this.getPlugin();
    const dApp = this.dal.contracts[pairName][contractName];
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
            value: _isObject(item) ? stringify_default()(item) : `${item}`
          })),
          function: method
        },
        payment: !paymentAmount ? [] : [{
          assetId: paymentCurrency || 'WAVES',
          tokens: String(paymentAmount)
        }]
      }
    };

    if (false) {}

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

  async _buildTransferTransaction() {}

  async transfer(pairName, recipient, amount, assetId, fee) {
    const tx = {
      type: 4,
      data: {
        amount: {
          assetId: assetId,
          tokens: amount
        },
        fee: {
          assetId: 'WAVES',
          tokens: '0.001'
        },
        recipient: recipient
      }
    };
    const keeper = await this.getPlugin();
    const result = await keeper.signAndPublishTransaction(tx);
    console.log({
      result
    });
  }

}
// CONCATENATED MODULE: ./src/enums/ContractEnum.js


class ContractEnum_ContractEnum extends Enum["a" /* default */] {
  static getKeys() {
    return [this.NEUTRINO, this.AUCTION, this.RPD, this.LIQUIDATION];
  }

  static getLabels() {
    return {
      [this.NEUTRINO]: __('neutrino'),
      [this.AUCTION]: __('auction'),
      [this.RPD]: __('rpd'),
      [this.LIQUIDATION]: __('liquidation')
    };
  }

}

Object(esm_defineProperty["a" /* default */])(ContractEnum_ContractEnum, "NEUTRINO", 'neutrino');

Object(esm_defineProperty["a" /* default */])(ContractEnum_ContractEnum, "AUCTION", 'auction');

Object(esm_defineProperty["a" /* default */])(ContractEnum_ContractEnum, "RPD", 'rpd');

Object(esm_defineProperty["a" /* default */])(ContractEnum_ContractEnum, "LIQUIDATION", "liquidation");
// CONCATENATED MODULE: ./src/enums/UserRole.js


class UserRole_UserRole extends Enum["a" /* default */] {
  static getKeys() {
    return [this.GUEST, this.REGISTERED, this.ADMIN];
  }

  static getAuth() {
    return [this.REGISTERED, this.ADMIN];
  }

}

Object(esm_defineProperty["a" /* default */])(UserRole_UserRole, "GUEST", null);

Object(esm_defineProperty["a" /* default */])(UserRole_UserRole, "REGISTERED", 'registered');

Object(esm_defineProperty["a" /* default */])(UserRole_UserRole, "ADMIN", 'admin');
// CONCATENATED MODULE: ./src/enums/OrderTypeEnum.js


class OrderTypeEnum_OrderTypeEnum extends Enum["a" /* default */] {
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

Object(esm_defineProperty["a" /* default */])(OrderTypeEnum_OrderTypeEnum, "BUY", 'buy');

Object(esm_defineProperty["a" /* default */])(OrderTypeEnum_OrderTypeEnum, "LIQUIDATE", 'liquidate');

;
// CONCATENATED MODULE: ./src/components/DalComponent.js












const STORAGE_AUTH_KEY = 'isAuth';
class DalComponent_DalComponent {
  constructor() {
    this.network = null;
    this.nodeUrl = null;
    this.assets = null;
    this.contracts = null;
    this.hoc = apiHoc;
    this.balance = new BalanceController_BalanceController({
      dalRef: this
    });
    this.balance.onUpdate = this.login.bind(this);
    this.keeper = new Keeper_Keeper(this);
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
      role: UserRole_UserRole.REGISTERED,
      address: account.address,
      network: account.network,
      balances: this.balance.getBalances()
    } : null; // Mark logged

    if (account && !this.isLogged()) {
      clientStorage.set(STORAGE_AUTH_KEY, '1');
    } // Update redux store


    const store = __webpack_require__("Kvkj").store;

    const storeUser = store.getState().auth.user || null;

    if (!isEqual_default()(storeUser, user)) {
      store.dispatch(setUser(user));
    }

    return user;
  }
  /**
   * Check is logged flag
   * @returns {boolean}
   */


  isLogged() {
    return clientStorage.get(STORAGE_AUTH_KEY) === '1';
  }
  /**
   * Logout user
   * @returns {Promise<void>}
   */


  async logout() {
    __webpack_require__("Kvkj").store.dispatch(setUser(null));

    clientStorage.remove(STORAGE_AUTH_KEY);
    this.keeper.stop();
    this.balance.stop();
  }

  async swapWavesToNeutrino(pairName, amount) {
    await this.keeper.sendTransaction(pairName, ContractEnum_ContractEnum.NEUTRINO, 'swapWavesToNeutrino', [], 'WAVES', amount);
  }

  async swapNeutrinoToWaves(pairName, paymentCurrency, amount) {
    await this.keeper.sendTransaction(pairName, ContractEnum_ContractEnum.NEUTRINO, 'swapNeutrinoToWaves', [], this.assets[paymentCurrency], amount);
  }

  async withdraw(pairName, address, index) {
    await this.keeper.sendTransaction(pairName, ContractEnum_ContractEnum.NEUTRINO, 'withdraw', [address, index], 'WAVES', 0);
  }

  async setBondOrder(pairName, price, paymentCurrency, bondsAmount) {
    if (price <= 0 || price >= 1) {
      return;
    }

    price = Math.round(price * 100) / 100;
    const contractPrice = price * 100;

    let position = get_default()((await external_axios_default.a.get(`/api/v1/bonds/${pairName}/position`, {
      params: {
        price: contractPrice
      }
    })), 'data.position');

    if (price > 0 && bondsAmount > 0 && is_integer_default()(position)) {
      await this.keeper.sendTransaction(pairName, ContractEnum_ContractEnum.AUCTION, 'addBuyBondOrder', [contractPrice, position], this.assets[paymentCurrency], bondsAmount * price);
    }
  }

  async setLiquidateOrder(pairName, paymentCurrency, total) {
    await this.keeper.sendTransaction(pairName, ContractEnum_ContractEnum.LIQUIDATION, 'addLiquidationOrder', [], this.assets[paymentCurrency], total);
  }

  async cancelOrder(pairName, type, hash) {
    switch (type) {
      case OrderTypeEnum_OrderTypeEnum.BUY:
        await this.keeper.sendTransaction(pairName, ContractEnum_ContractEnum.AUCTION, 'cancelOrder', [hash], 'WAVES', 0);
        break;

      case OrderTypeEnum_OrderTypeEnum.LIQUIDATE:
        await this.keeper.sendTransaction(pairName, ContractEnum_ContractEnum.LIQUIDATION, 'cancelOrder', [hash], 'WAVES', 0);
        break;
    }
  } //RPD


  async lockNeutrino(pairName, paymentCurrency, amount) {
    await this.keeper.sendTransaction(pairName, ContractEnum_ContractEnum.RPD, 'lockNeutrino', [], this.assets[paymentCurrency], amount);
  }

  async unlockNeutrino(pairName, paymentCurrency, amount) {
    await this.keeper.sendTransaction(pairName, ContractEnum_ContractEnum.RPD, 'unlockNeutrino', [amount, this.assets[paymentCurrency]], 'WAVES', 0);
  }

  async checkWithdraw(pairName, index, historyIndex) {
    await this.keeper.sendTransaction(pairName, ContractEnum_ContractEnum.RPD, 'withdraw', [index, historyIndex], 'WAVES', 0);
  }

  async transferFunds(pairName, paymentCurrency, address, amount) {
    await this.keeper.transfer(pairName, address, amount, this.assets[paymentCurrency] || 'WAVES');
  }

}
// CONCATENATED MODULE: ./src/components/WebSocketClient.js
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
// CONCATENATED MODULE: ./src/components/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientStorage", function() { return clientStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return components_locale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resource", function() { return resource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return components_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return ui; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dal", function() { return components_dal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ws", function() { return ws; });









 // Create instances

const clientStorage = new ClientStorageComponent_ClientStorageComponent();
const http = new HttpComponent_HttpComponent();
const html = new HtmlComponent_HtmlComponent();
const components_locale = new LocaleComponent_LocaleComponent();
const resource = new ResourceComponent_ResourceComponent();
const components_store = new StoreComponent_StoreComponent();
const ui = new UiComponent_UiComponent();
const components_dal = new DalComponent_DalComponent();
const ws = new WebSocketClient(); // Apply configuration

const components_customConfig = components_store.getState().config || {};

lodash_es_merge(clientStorage, components_customConfig.clientStorage);

lodash_es_merge(http, components_customConfig.http);

lodash_es_merge(html, components_customConfig.html);

lodash_es_merge(components_locale, components_customConfig.locale);

lodash_es_merge(resource, components_customConfig.resource);

lodash_es_merge(components_store, components_customConfig.store);

lodash_es_merge(ui, components_customConfig.ui);

lodash_es_merge(components_dal, components_customConfig.dal);

lodash_es_merge(ws, components_customConfig.dal);



/***/ }),

/***/ "L3Qv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (stubFalse);


/***/ }),

/***/ "LFf6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ylTp");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("twO/");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/1FC");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("G8aS");





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].prototype : undefined,
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
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value, baseToString) + '';
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseToString);


/***/ }),

/***/ "LR/J":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SWa5");

/***/ }),

/***/ "M6cj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__("11ad");
const decodeComponent = __webpack_require__("d07I");
const splitOnFirst = __webpack_require__("Zos+");

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

/***/ "Muja":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EqEh");


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
  return Object(_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value, other);
}

/* harmony default export */ __webpack_exports__["a"] = (isEqual);


/***/ }),

/***/ "NAx7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NAVIGATION_INIT_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NAVIGATION_SET_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAVIGATION_ADD_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NAVIGATION_REMOVE_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NAVIGATION_SET_DATA; });
/* unused harmony export initRoutes */
/* unused harmony export initParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return goToPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getConfigId; });
/* unused harmony export navigationAddConfigs */
/* unused harmony export navigationRemoveConfigs */
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var lodash_es_isArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/1FC");
/* harmony import */ var lodash_es_trim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Vfgr");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nNRk");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Kvkj");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const NAVIGATION_INIT_ROUTES = 'NAVIGATION_INIT_ROUTES';
const NAVIGATION_SET_PARAMS = 'NAVIGATION_SET_PARAMS';
const NAVIGATION_ADD_CONFIGS = 'NAVIGATION_ADD_CONFIGS';
const NAVIGATION_REMOVE_CONFIGS = 'NAVIGATION_REMOVE_CONFIGS';
const NAVIGATION_SET_DATA = 'NAVIGATION_SET_DATA';

const normalizeConfigs = configs => {
  if (!configs) {
    configs = [];
  }

  if (!Object(lodash_es_isArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(configs)) {
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
  const getNavUrl = __webpack_require__("/UAK").getNavUrl;

  return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_9__["push"])(getNavUrl(getState(), pageId, params)));
};
const getConfigId = config => config.id || Object(lodash_es_trim__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(config.url, '/');
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

/***/ "O+LL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("btkE");

/***/ }),

/***/ "QRgY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9f7cb5a1c44e4c37304fb829412c183a.svg";

/***/ }),

/***/ "RVZ8":
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

/***/ "TIGo":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7eb17ababbd788c43f09bb5ec1377d4c.svg";

/***/ }),

/***/ "TYIf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0c80f56c57536a6029abc5168806c3ef.svg";

/***/ }),

/***/ "Tchk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("G8aS");


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
  if (typeof value == 'string' || Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["a"] = (toKey);


/***/ }),

/***/ "U6JX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),

/***/ "UTJH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IlA0");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tchk");



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = Object(_castPath_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[Object(_toKey_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = (baseGet);


/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Vfgr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LFf6");
/* harmony import */ var _castSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0R7w");
/* harmony import */ var _charsEndIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FQsW");
/* harmony import */ var _charsStartIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("DDCU");
/* harmony import */ var _stringToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KiMO");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("efZk");







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
  string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(chars))) {
    return string;
  }
  var strSymbols = Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(string),
      chrSymbols = Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(chars),
      start = Object(_charsStartIndex_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(strSymbols, chrSymbols),
      end = Object(_charsEndIndex_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(strSymbols, chrSymbols) + 1;

  return Object(_castSlice_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(strSymbols, start, end).join('');
}

/* harmony default export */ __webpack_exports__["a"] = (trim);


/***/ }),

/***/ "WOAq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ju5/");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("L3Qv");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined;

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
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];

/* harmony default export */ __webpack_exports__["a"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("BKcT")(module)))

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "XqMk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);


/***/ }),

/***/ "Y7yP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/isFunction.js
var isFunction = __webpack_require__("vJtL");

// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__("Ju5/");

// CONCATENATED MODULE: ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root["a" /* default */]['__core-js_shared__'];

/* harmony default export */ var _coreJsData = (coreJsData);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
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

/* harmony default export */ var _isMasked = (isMasked);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__("IzLi");

// EXTERNAL MODULE: ./node_modules/lodash-es/_toSource.js
var _toSource = __webpack_require__("dLWn");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNative.js





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
var _baseIsNative_hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&')
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
  if (!Object(isObject["a" /* default */])(value) || _isMasked(value)) {
    return false;
  }
  var pattern = Object(isFunction["a" /* default */])(value) ? reIsNative : reIsHostCtor;
  return pattern.test(Object(_toSource["a" /* default */])(value));
}

/* harmony default export */ var _baseIsNative = (baseIsNative);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getValue.js
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

/* harmony default export */ var _getValue = (getValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ var _getNative = __webpack_exports__["a"] = (getNative);


/***/ }),

/***/ "YHEm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (eq);


/***/ }),

/***/ "YM6B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_getNative.js + 4 modules
var _getNative = __webpack_require__("Y7yP");

// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__("Ju5/");

// CONCATENATED MODULE: ./node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = Object(_getNative["a" /* default */])(_root["a" /* default */], 'DataView');

/* harmony default export */ var _DataView = (DataView);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__("3cmB");

// CONCATENATED MODULE: ./node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var Promise = Object(_getNative["a" /* default */])(_root["a" /* default */], 'Promise');

/* harmony default export */ var _Promise = (Promise);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Set.js



/* Built-in method references that are verified to be native. */
var Set = Object(_getNative["a" /* default */])(_root["a" /* default */], 'Set');

/* harmony default export */ var _Set = (Set);

// CONCATENATED MODULE: ./node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var WeakMap = Object(_getNative["a" /* default */])(_root["a" /* default */], 'WeakMap');

/* harmony default export */ var _WeakMap = (WeakMap);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__("8M4i");

// EXTERNAL MODULE: ./node_modules/lodash-es/_toSource.js
var _toSource = __webpack_require__("dLWn");

// CONCATENATED MODULE: ./node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = Object(_toSource["a" /* default */])(_DataView),
    mapCtorString = Object(_toSource["a" /* default */])(_Map["a" /* default */]),
    promiseCtorString = Object(_toSource["a" /* default */])(_Promise),
    setCtorString = Object(_toSource["a" /* default */])(_Set),
    weakMapCtorString = Object(_toSource["a" /* default */])(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag["a" /* default */];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (_Map["a" /* default */] && getTag(new _Map["a" /* default */]) != mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = Object(_baseGetTag["a" /* default */])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? Object(_toSource["a" /* default */])(Ctor) : '';

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

/* harmony default export */ var _getTag = __webpack_exports__["a"] = (getTag);


/***/ }),

/***/ "Zj1l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyEnum; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var _Enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cKQt");


class CurrencyEnum extends _Enum__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
  static getKeys() {
    return [this.USD_N //this.EUR_N,
    //this.BTC_N,
    ];
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
      [this.WAVES]: __('WAVES'),
      [this.USD_N]: __('USD-N'),
      [this.USD_NB]: __('USD-NB'),
      [this.EUR_N]: __('EUR-N'),
      [this.EUR_NB]: __('EUR-NB') //[this.BTC_N]: __('BTC-N'),
      //[this.BTC_NB]: __('BTC-NB'),

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

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CurrencyEnum, "WAVES", 'waves');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CurrencyEnum, "USD", 'usd');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CurrencyEnum, "USD_N", 'usd-n');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CurrencyEnum, "USD_NB", 'usd-nb');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CurrencyEnum, "EUR", 'eur');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CurrencyEnum, "EUR_N", 'eur-n');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CurrencyEnum, "EUR_NB", 'eur-nb');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CurrencyEnum, "BTC", 'btc');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CurrencyEnum, "BTC_N", 'btc-n');

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(CurrencyEnum, "BTC_NB", 'btc-nb');

/***/ }),

/***/ "aRtx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a9edf293d53fbfd0c9e220215d7b4793.svg";

/***/ }),

/***/ "cKQt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Enum; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LR/J");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pLtp");
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

/***/ "cSlR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isIndex);


/***/ }),

/***/ "d2rQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "29ef1dccbf3622c6de3ebe32bff4ca7c.svg";

/***/ }),

/***/ "dLWn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (toSource);


/***/ }),

/***/ "e1lX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (hasUnicode);


/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "efZk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LFf6");


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
  return value == null ? '' : Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (toString);


/***/ }),

/***/ "gmA9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5c828aca450f4b63ed3d42a709fcc951.svg";

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "jMTf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_isPrototype.js
var _isPrototype = __webpack_require__("pyRK");

// EXTERNAL MODULE: ./node_modules/lodash-es/_overArg.js
var _overArg = __webpack_require__("U6JX");

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = Object(_overArg["a" /* default */])(Object.keys, Object);

/* harmony default export */ var _nativeKeys = (nativeKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!Object(_isPrototype["a" /* default */])(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeys = __webpack_exports__["a"] = (baseKeys);


/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
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

/***/ "m+yH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "26319ba0cdc19da29f4d564d489db3fb.svg";

/***/ }),

/***/ "mkut":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7gMY");
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jMTf");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5WsY");




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
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(object) ? Object(_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object) : Object(_baseKeys_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object);
}

/* harmony default export */ __webpack_exports__["a"] = (keys);


/***/ }),

/***/ "nLtN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheClear.js
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

/* harmony default export */ var _listCacheClear = (listCacheClear);

// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__("YHEm");

// CONCATENATED MODULE: ./node_modules/lodash-es/_assocIndexOf.js


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
    if (Object(eq["a" /* default */])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ var _assocIndexOf = (assocIndexOf);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheDelete.js


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
      index = _assocIndexOf(data, key);

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

/* harmony default export */ var _listCacheDelete = (listCacheDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheGet.js


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
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ var _listCacheGet = (listCacheGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheHas.js


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
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ var _listCacheHas = (listCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheSet.js


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
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ var _listCacheSet = (listCacheSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_ListCache.js






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
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

/* harmony default export */ var _ListCache = __webpack_exports__["a"] = (ListCache);


/***/ }),

/***/ "oSzE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_ListCache.js + 6 modules
var _ListCache = __webpack_require__("nLtN");

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache["a" /* default */];
  this.size = 0;
}

/* harmony default export */ var _stackClear = (stackClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackDelete.js
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

/* harmony default export */ var _stackDelete = (stackDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackGet.js
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

/* harmony default export */ var _stackGet = (stackGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackHas.js
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

/* harmony default export */ var _stackHas = (stackHas);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__("3cmB");

// EXTERNAL MODULE: ./node_modules/lodash-es/_MapCache.js + 14 modules
var _MapCache = __webpack_require__("DlmY");

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackSet.js




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
  if (data instanceof _ListCache["a" /* default */]) {
    var pairs = data.__data__;
    if (!_Map["a" /* default */] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache["a" /* default */](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ var _stackSet = (stackSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache["a" /* default */](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

/* harmony default export */ var _Stack = __webpack_exports__["a"] = (Stack);


/***/ }),

/***/ "oYcn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__("8M4i");

// EXTERNAL MODULE: ./node_modules/lodash-es/isLength.js
var isLength = __webpack_require__("Js68");

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__("EUcb");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsTypedArray.js




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
  return Object(isObjectLike["a" /* default */])(value) &&
    Object(isLength["a" /* default */])(value.length) && !!typedArrayTags[Object(_baseGetTag["a" /* default */])(value)];
}

/* harmony default export */ var _baseIsTypedArray = (baseIsTypedArray);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseUnary.js
var _baseUnary = __webpack_require__("ovuK");

// EXTERNAL MODULE: ./node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__("xutz");

// CONCATENATED MODULE: ./node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isTypedArray;

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
var isTypedArray = nodeIsTypedArray ? Object(_baseUnary["a" /* default */])(nodeIsTypedArray) : _baseIsTypedArray;

/* harmony default export */ var lodash_es_isTypedArray = __webpack_exports__["a"] = (isTypedArray);


/***/ }),

/***/ "ovuK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (baseUnary);


/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pyRK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (isPrototype);


/***/ }),

/***/ "twO/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (arrayMap);


/***/ }),

/***/ "vJtL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8M4i");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IzLi");



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
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__["a"] = (isFunction);


/***/ }),

/***/ "vMRZ":
/***/ (function(module, exports) {



/***/ }),

/***/ "vY+C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/1FC");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("G8aS");



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
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ __webpack_exports__["a"] = (isKey);


/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "xutz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XqMk");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].process;

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

/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("BKcT")(module)))

/***/ }),

/***/ "ylTp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ju5/");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ })

};;
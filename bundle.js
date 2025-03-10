/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./project-root/style.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./project-root/style.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
    font-size: 62.5% ;
    background-color: #f1f0f0;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 100vh;
    gap: 4rem;
}     
/* Контейнер прогресс-бара */
.progress-ring-container {
    display: flex;
    justify-content: space-between;
}
/* Панель управления */
.toggle-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
}
/* Прогресс-бар */
.progress-ring__circle {
    transform-origin: center;
    transform: rotate(-90deg);
    transition: stroke-dashoffset 2s;
}

/* Прогресс-бар - анимация */
.progress-ring {
    transition: opacity 0.3s ease-out;
}

.progress-ring__circle::before {
    transform-origin: center;
    transform: rotate(-90deg);
    transition: stroke-dashoffset 0.3s;
}

.progress-ring__circle::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: blue;
    opacity: 0;
}

/* Поле ввода процентов */
.percent {
    display: flex;
    text-align: center;
    width: 4.7rem;
    height: 2.7rem;
    border-radius: 10rem;
    border: 1px solid #74777a; 
    -moz-appearance: textfield;
    appearance: textfield;
}
/* Название поля ввода процентов */
.toggle-bar__label {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 1.5rem;
}

/* ПЕРЕМЕННЫЕ / параметры трека */
.gui-switch {
    --track-size: 5.1rem;
    --track-inactive: #dee5ea;
    --track-active: blue;
    --track-color-inactive: var(--track-inactive);
    --track-color-active: var(--track-active);
    --track-padding: .2rem;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 1.5rem;
}

/* Ползунок */
.gui-switch > input {
    --thumb-size: 2.7rem;
    --thumb-position: 0; 

    appearance: none;
    border: none;
    padding: .2rem;
    outline-offset: .5rem;
    box-sizing: content-box;
    inline-size: var(--track-size);
    block-size: var(--thumb-size);
    background-color: #dee5ea;
    border-radius: 10rem;
    flex-shrink: 0;
    display: grid;
    align-items: center;
    grid: [track] 1fr / [track] 1fr;
    margin: 0;
}


/* Стили для сенсорного экрана */
.gui-switch {
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

/*  Ползунок - начальное состояние */
.gui-switch > input::before {   
    content: "";
    border: none;
    grid-area: track;
    inline-size:  var(--thumb-size);
    block-size: var(--thumb-size);
    background-color: #ffffff;
    transition: .4s;
    border-radius: 10rem;
    transform: translateX(var(--thumb-position));
    box-shadow: 0 0 .1rem 0 rgba(0, 0, 0, 0.5);
}

/* Ползунок - состояние "включено" */
.gui-switch > input:checked {
    --thumb-position: calc(var(--track-size) - 100%);
    background-color: blue;
}

/* Убираем стрелочки у input[type="number"] в WebKit браузерах */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Убираем стрелочки у input[type="number"] в Firefox */
input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
}

@media (max-width: 568px) {
  .container {
    gap: 4rem;
    padding: 1rem;
  }

  .toggle-bar {
    gap: 1rem;
  }

  .toggle-bar__label {
    font-size: 1.2rem;
  }
  
  .gui-switch {
    font-size: 1.2rem;
  } 
}

@media (max-width: 480px) {
    .container {
        gap: 2rem;
    }
    
    
}       

@media (max-width: 320px) {
    .container {
        flex-direction: column;
        gap: 4rem;
    }

    .toggle-bar {   
        gap: 1rem;
    }

    .toggle-bar__label {
        font-size: 1.2rem;
    }
    
}`, "",{"version":3,"sources":["webpack://./project-root/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;AACb;AACA,4BAA4B;AAC5B;IACI,aAAa;IACb,8BAA8B;AAClC;AACA,sBAAsB;AACtB;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;AACA,iBAAiB;AACjB;IACI,wBAAwB;IACxB,yBAAyB;IACzB,gCAAgC;AACpC;;AAEA,4BAA4B;AAC5B;IACI,iCAAiC;AACrC;;AAEA;IACI,wBAAwB;IACxB,yBAAyB;IACzB,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,sBAAsB;IACtB,UAAU;AACd;;AAEA,yBAAyB;AACzB;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,oBAAoB;IACpB,yBAAyB;IACzB,0BAA0B;IAC1B,qBAAqB;AACzB;AACA,kCAAkC;AAClC;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,iBAAiB;AACrB;;AAEA,iCAAiC;AACjC;IACI,oBAAoB;IACpB,yBAAyB;IACzB,oBAAoB;IACpB,6CAA6C;IAC7C,yCAAyC;IACzC,sBAAsB;;IAEtB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,iBAAiB;AACrB;;AAEA,aAAa;AACb;IACI,oBAAoB;IACpB,mBAAmB;;IAEnB,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,qBAAqB;IACrB,uBAAuB;IACvB,8BAA8B;IAC9B,6BAA6B;IAC7B,yBAAyB;IACzB,oBAAoB;IACpB,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,+BAA+B;IAC/B,SAAS;AACb;;;AAGA,gCAAgC;AAChC;IACI,eAAe;IACf,iBAAiB;IACjB,wCAAwC;AAC5C;;AAEA,oCAAoC;AACpC;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,+BAA+B;IAC/B,6BAA6B;IAC7B,yBAAyB;IACzB,eAAe;IACf,oBAAoB;IACpB,4CAA4C;IAC5C,0CAA0C;AAC9C;;AAEA,oCAAoC;AACpC;IACI,gDAAgD;IAChD,sBAAsB;AAC1B;;AAEA,gEAAgE;AAChE;;IAEI,wBAAwB;IACxB,SAAS;AACb;;AAEA,uDAAuD;AACvD;IACI,0BAA0B;IAC1B,qBAAqB;AACzB;;AAEA;EACE;IACE,SAAS;IACT,aAAa;EACf;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;IACI;QACI,SAAS;IACb;;;AAGJ;;AAEA;IACI;QACI,sBAAsB;QACtB,SAAS;IACb;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,iBAAiB;IACrB;;AAEJ","sourcesContent":["html, body {\n    font-size: 62.5% ;\n    background-color: #f1f0f0;\n}\n\n.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    min-height: 100vh;\n    gap: 4rem;\n}     \n/* Контейнер прогресс-бара */\n.progress-ring-container {\n    display: flex;\n    justify-content: space-between;\n}\n/* Панель управления */\n.toggle-bar {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 2rem;\n}\n/* Прогресс-бар */\n.progress-ring__circle {\n    transform-origin: center;\n    transform: rotate(-90deg);\n    transition: stroke-dashoffset 2s;\n}\n\n/* Прогресс-бар - анимация */\n.progress-ring {\n    transition: opacity 0.3s ease-out;\n}\n\n.progress-ring__circle::before {\n    transform-origin: center;\n    transform: rotate(-90deg);\n    transition: stroke-dashoffset 0.3s;\n}\n\n.progress-ring__circle::after {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background-color: blue;\n    opacity: 0;\n}\n\n/* Поле ввода процентов */\n.percent {\n    display: flex;\n    text-align: center;\n    width: 4.7rem;\n    height: 2.7rem;\n    border-radius: 10rem;\n    border: 1px solid #74777a; \n    -moz-appearance: textfield;\n    appearance: textfield;\n}\n/* Название поля ввода процентов */\n.toggle-bar__label {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    font-size: 1.5rem;\n}\n\n/* ПЕРЕМЕННЫЕ / параметры трека */\n.gui-switch {\n    --track-size: 5.1rem;\n    --track-inactive: #dee5ea;\n    --track-active: blue;\n    --track-color-inactive: var(--track-inactive);\n    --track-color-active: var(--track-active);\n    --track-padding: .2rem;\n\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    font-size: 1.5rem;\n}\n\n/* Ползунок */\n.gui-switch > input {\n    --thumb-size: 2.7rem;\n    --thumb-position: 0; \n\n    appearance: none;\n    border: none;\n    padding: .2rem;\n    outline-offset: .5rem;\n    box-sizing: content-box;\n    inline-size: var(--track-size);\n    block-size: var(--thumb-size);\n    background-color: #dee5ea;\n    border-radius: 10rem;\n    flex-shrink: 0;\n    display: grid;\n    align-items: center;\n    grid: [track] 1fr / [track] 1fr;\n    margin: 0;\n}\n\n\n/* Стили для сенсорного экрана */\n.gui-switch {\n    cursor: pointer;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n}\n\n/*  Ползунок - начальное состояние */\n.gui-switch > input::before {   \n    content: \"\";\n    border: none;\n    grid-area: track;\n    inline-size:  var(--thumb-size);\n    block-size: var(--thumb-size);\n    background-color: #ffffff;\n    transition: .4s;\n    border-radius: 10rem;\n    transform: translateX(var(--thumb-position));\n    box-shadow: 0 0 .1rem 0 rgba(0, 0, 0, 0.5);\n}\n\n/* Ползунок - состояние \"включено\" */\n.gui-switch > input:checked {\n    --thumb-position: calc(var(--track-size) - 100%);\n    background-color: blue;\n}\n\n/* Убираем стрелочки у input[type=\"number\"] в WebKit браузерах */\ninput[type=\"number\"]::-webkit-outer-spin-button,\ninput[type=\"number\"]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/* Убираем стрелочки у input[type=\"number\"] в Firefox */\ninput[type=\"number\"] {\n    -moz-appearance: textfield;\n    appearance: textfield;\n}\n\n@media (max-width: 568px) {\n  .container {\n    gap: 4rem;\n    padding: 1rem;\n  }\n\n  .toggle-bar {\n    gap: 1rem;\n  }\n\n  .toggle-bar__label {\n    font-size: 1.2rem;\n  }\n  \n  .gui-switch {\n    font-size: 1.2rem;\n  } \n}\n\n@media (max-width: 480px) {\n    .container {\n        gap: 2rem;\n    }\n    \n    \n}       \n\n@media (max-width: 320px) {\n    .container {\n        flex-direction: column;\n        gap: 4rem;\n    }\n\n    .toggle-bar {   \n        gap: 1rem;\n    }\n\n    .toggle-bar__label {\n        font-size: 1.2rem;\n    }\n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./project-root/style.css":
/*!********************************!*\
  !*** ./project-root/style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./project-root/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./project-root/components/progress.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./project-root/style.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

document.addEventListener('DOMContentLoaded', function () {
  var circle = document.querySelector('.progress-ring__circle');
  var input = document.getElementById('rangeInput');
  var visibilitySwitch = document.getElementById('switch');
  var animationSwitch = document.getElementById('animate');
  var percentDisplay = document.querySelector('.percent');
  var progressRing = document.querySelector('.progress-ring');
  if (!circle || !input || !visibilitySwitch || !animationSwitch || !percentDisplay || !progressRing) {
    console.error('Элемент не найден');
    return;
  }
  var Progress = /*#__PURE__*/function () {
    function Progress(circle, input, visibilitySwitch, animationSwitch, percentDisplay, progressRing) {
      _classCallCheck(this, Progress);
      this.circle = circle;
      this.input = input;
      this.visibilitySwitch = visibilitySwitch;
      this.animationSwitch = animationSwitch;
      this.percentDisplay = percentDisplay;
      this.progressRing = progressRing;

      // Получаем радиус круга
      this.radius = this.circle.r.baseVal.value;
      // Вычисляем длину окружности
      this.circumference = 2 * Math.PI * this.radius;
      // Устанавливаем длину окружности в strokeDasharray
      this.circle.style.strokeDasharray = "".concat(this.circumference, " ").concat(this.circumference);
      // Устанавливаем смещение окружности
      this.circle.style.strokeDashoffset = this.circumference;

      // Идентификатор для анимационного интервала
      this.animationInterval = null;
      this.init();
    }
    return _createClass(Progress, [{
      key: "init",
      value: function init() {
        var _this = this;
        // Загрузка сохранённого прогресса
        this.loadProgress();

        // Привязываем обработчики событий
        this.input.addEventListener('input', function () {
          _this.setProgress(_this.input.value);
          _this.saveProgress();
          _this.updatePercentDisplay(_this.input.value);
        });
        this.visibilitySwitch.addEventListener('change', function () {
          return _this.toggleVisibility();
        });
        this.animationSwitch.addEventListener('change', function () {
          return _this.toggleAnimation();
        });
      }
    }, {
      key: "setProgress",
      value: function setProgress(percent) {
        var value = Number(percent);
        var offset = this.circumference - value / 100 * this.circumference;
        this.circle.style.strokeDashoffset = offset;
      }
    }, {
      key: "updatePercentDisplay",
      value: function updatePercentDisplay(percent) {
        this.percentDisplay.textContent = percent + '%';
      }
    }, {
      key: "saveProgress",
      value: function saveProgress() {
        localStorage.setItem('progress', this.input.value);
      }
    }, {
      key: "loadProgress",
      value: function loadProgress() {
        var progress = localStorage.getItem('progress');
        if (progress !== null) {
          this.input.value = progress;
          this.setProgress(progress);
          this.updatePercentDisplay(progress);
        }
      }
    }, {
      key: "toggleVisibility",
      value: function toggleVisibility() {
        if (this.visibilitySwitch.checked) {
          this.progressRing.style.opacity = "0";
        } else {
          this.progressRing.style.opacity = "1";
          //Загружаем сохранённое значение
          this.loadProgress();
        }
      }
    }, {
      key: "animateProgress",
      value: function animateProgress() {
        var _this2 = this;
        // Останавливаем предыдущую анимацию, если она запущена
        if (this.animationInterval) {
          clearInterval(this.animationInterval);
        }
        var start = Date.now(); //фиксируем время начала анимации
        this.animationInterval = setInterval(function () {
          var timePassed = Date.now() - start;
          if (timePassed >= 10000) {
            clearInterval(_this2.animationInterval);
            _this2.animationInterval = null;
            _this2.setProgress(100);
            _this2.updatePercentDisplay(100);
          } else {
            var progressValue = (timePassed / 100).toFixed(0);
            _this2.setProgress(progressValue);
            _this2.updatePercentDisplay(progressValue);
          }
        }, 10);
      }
    }, {
      key: "toggleAnimation",
      value: function toggleAnimation() {
        if (this.animationSwitch.checked) {
          this.animateProgress();
        } else {
          if (this.animationInterval) {
            clearInterval(this.animationInterval);
            this.animationInterval = null;
          }
        }
      }
    }]);
  }(); // Инициализация компонента Progress
  var progressComponent = new Progress(circle, input, visibilitySwitch, animationSwitch, percentDisplay, progressRing);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
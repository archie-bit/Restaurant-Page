/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! petr-sevcovic-qE1jxYXiwOA-unsplash.jpg */ \"./src/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\r\n    --navBar-height: 100px;\r\n    --color-for-background: #30494b;\r\n}\r\n\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n@keyframes slideIn {\r\n    from {\r\n        transform: translateY(10%) scale(.9); /* Start off-screen */\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        transform: translateY(0)scale(1);   /* End in place */\r\n        opacity: 1;\r\n\r\n    }\r\n}\r\n\r\n@keyframes slideFromLeft {\r\n    from {\r\n        transform: translate(10%, 10%) scale(.9);\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        transform: translate(0, 0) scale(1);\r\n        opacity: 1;\r\n\r\n    }\r\n}\r\n\r\n@keyframes slideFromRight {\r\n    from {\r\n        transform: translate(-10%, 10%) scale(.9);\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        transform: translate(0, 0) scale(1);\r\n        opacity: 1;\r\n\r\n    }\r\n}\r\n\r\nbody{\r\n    height: 100vh;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    display: grid;\r\n    grid-template-rows: var(--navBar-height) 1fr ;\r\n}\r\nheader{\r\n    grid-row: 1/ 2;\r\n}\r\n\r\n.navBar {\r\n    height: 100%;\r\n    display: flex;\r\n    gap: 20px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.navBar > button{\r\n    background: none;\r\n    border: none;\r\n    /* background-image: linear-gradient(90deg, #354f52 , #52796f, #cad2c5); */\r\n    background-image: linear-gradient(90deg, var(--color-for-background) , #5d887d);\r\n    background-clip: content-box;\r\n    border-radius: 10px;\r\n    width: 180px;\r\n    height: 50px;\r\n    font-size: 25px;\r\n    cursor: pointer;\r\n    color: white;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    box-shadow: 0px 5px 6px rgb(0 0 0 / 30%);\r\n}\r\n\r\n\r\n\r\n#content{\r\n    grid-row: 2;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.homeContainer{\r\n    backdrop-filter: blur(80px) brightness(1.3);\r\n    padding: 60px;\r\n    border-radius: 40px;\r\n    height: 80%;\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    text-transform: capitalize;\r\n    color: #172526;\r\n    animation: slideIn .4s ease-out forwards;\r\n    box-shadow: 0px 5px 6px rgb(0 0 0 / 30%);\r\n    /* animation: .3s ease-out 0s 1 moveup; */\r\n}\r\n\r\n/* .homeContainer > p:first-child{\r\n    font-size: 3rem;\r\n    background-color: var(--color-for-background);\r\n    border-radius: 10px;\r\n    color: white;\r\n    padding: 10px;\r\n} */\r\n\r\n.homeContainer > p:last-child{\r\n    font-size: 1.7rem;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    color: white;\r\n    /* color: #2a3536; */\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: var(--color-for-background);\r\n    box-shadow: 0px 5px 10px rgb(0 0 0 / 40%);\r\n}\r\n\r\n\r\n.menuContainer{\r\n    max-height: 600px;\r\n    width: 50%;\r\n    backdrop-filter: blur(80px) brightness(1.5);\r\n    border-radius: 40px;\r\n    overflow: auto;\r\n    display: grid;\r\n    grid-template-columns: 220px 1fr;\r\n    grid-template-rows: 1fr;\r\n    gap:10px;\r\n    box-shadow: 0px 5px 6px rgb(0 0 0 / 30%);\r\n    animation: slideIn .4s ease-out forwards;\r\n}\r\n\r\n.menuSide{\r\n    background-color: var(--color-for-background);\r\n    grid-column: 1;\r\n    grid-row: 1;\r\n}\r\n.menuMain{\r\n    grid-column: 2;\r\n    color: #172526;\r\n    font-size:20px;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n    padding-right: 20px;\r\n    padding-top: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n}\r\n.itemContainer{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.itemContainer > p:first-child{\r\n    flex: 1 0 auto;\r\n}\r\n.itemContainer>p:last-child{\r\n    color: #2a3536;\r\n    padding-top: 10px;\r\n    font-size:17px;\r\n    font-weight:400;\r\n}\r\n\r\n\r\n.contactContainer{\r\n    height: 600px;\r\n    width: 60%;\r\n    display: grid;\r\n    grid-template-columns: .5fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    gap: 10px;\r\n}\r\n\r\n.contactSide{\r\n    padding: 20px;\r\n    background-color: rgb(48 73 75/ 70%);\r\n    backdrop-filter: blur(10px) brightness(1.5);\r\n    border-radius: 40px;\r\n    box-shadow: 0px 5px 6px rgb(0 0 0 / 30%);\r\n    grid-column: 1;\r\n    grid-row: 1;\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    animation: slideFromRight .4s ease-out forwards;\r\n}\r\n\r\n.getInTouch{\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.phoneContainer,\r\n.adressContainer,\r\n.emailContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    gap: 2px;\r\n}\r\n\r\n.phoneContainer > p:first-child,\r\n.adressContainer > p:first-child,\r\n.emailContainer > p:first-child{\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.contactMain{\r\n    grid-column: 2;\r\n    backdrop-filter: blur(80px) brightness(1.5);\r\n    border-radius: 40px;\r\n    box-shadow: 0px 5px 6px rgb(0 0 0 / 30%);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    animation: slideFromLeft .4s ease-out forwards;\r\n}\r\n\r\n.contactForm{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n    gap: 25px;\r\n}\r\n\r\n.contactForm input{\r\n    outline: none;\r\n    border: none;\r\n    width: 280px;\r\n    height: 30px;\r\n    text-indent:5px;\r\n    border-radius: 4px;\r\n    border: #30494b 3px solid;\r\n    box-shadow: 0px 5px 10px rgb(0 0 0 / 30%);\r\n\r\n}\r\n.contactForm input:invalid:focus{\r\n    border: rgb(216, 52, 52) 2px solid;\r\n}\r\n\r\n.contactForm textarea{\r\n    resize: none;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding:5px;\r\n    border: #30494b 3px solid;\r\n    box-shadow: 0px 5px 10px rgb(0 0 0 / 30%);\r\n\r\n}\r\n\r\n.contactForm button{\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 4px;\r\n    width: 200px;\r\n    height: 50px;\r\n    background-image: linear-gradient(90deg, var(--color-for-background) , #5d887d);\r\n    box-shadow: 0px 5px 10px rgb(0 0 0 / 40%);\r\n    /* border: #30494b 2px solid; */\r\n    color: white;\r\n    font-size: 1.3rem;\r\n    align-self: center;\r\n}\r\n\r\n\r\n.contactForm label{\r\n    margin-bottom: 5px;\r\n    display: block;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\r\n    const content = document.querySelector(\"#content\");\r\n    content.textContent=\"\";\r\n\r\n    const  contactContainer= document.createElement(\"div\");\r\n    contactContainer.classList.add(\"contactContainer\");\r\n\r\n    const contactMain = document.createElement(\"div\");\r\n    contactMain.classList.add(\"contactMain\");\r\n    contactContainer.appendChild(contactMain);\r\n\r\n    const contactSide = document.createElement(\"div\");\r\n    contactSide.classList.add(\"contactSide\");\r\n    contactContainer.appendChild(contactSide);\r\n\r\n\r\n\r\n    const getInTouch = document.createElement(\"H1\");\r\n    getInTouch.classList.add(\"getInTouch\")\r\n    getInTouch.textContent=\"GET IN TOUCH\";\r\n\r\n    const adressContainer = document.createElement(\"div\");\r\n    adressContainer.classList.add(\"adressContainer\");\r\n    const addressTitle= document.createElement(\"p\");\r\n    addressTitle.textContent=\"ADDRESS\";\r\n    const adressInfo = document.createElement(\"p\");\r\n    adressInfo.textContent = \"123 Main Street, apt 4B San Diego CA, 91911\"\r\n    adressContainer.append(addressTitle, adressInfo)\r\n\r\n    const phoneContainer = document.createElement(\"div\");\r\n    phoneContainer.classList.add(\"phoneContainer\");\r\n    const phoneTitle= document.createElement(\"p\");\r\n    phoneTitle.textContent=\"PHONE NUMBER\";\r\n    const phoneNum = document.createElement(\"p\");\r\n    phoneNum.textContent=\"+445 444 554\";\r\n    phoneContainer.append(phoneTitle, phoneNum)\r\n\r\n    const emailContainer = document.createElement(\"div\");\r\n    emailContainer.classList.add(\"emailContainer\");\r\n    const emailTitle= document.createElement(\"p\");\r\n    emailTitle.textContent=\"Email\";\r\n    const emailInfo = document.createElement(\"p\");\r\n    emailInfo.textContent = \"notfake@email.com\"\r\n    emailContainer.append(emailTitle, emailInfo)\r\n\r\n    contactSide.append(getInTouch, adressContainer, phoneContainer, emailContainer);\r\n\r\n    \r\n\r\n    const contactForm = document.createElement(\"form\");\r\n    contactForm.classList.add(\"contactForm\")\r\n\r\n    const inputs = {\r\n        name : {\r\n            elementType: \"input\",\r\n            label: \"Name\",\r\n            idValue:\"name\",\r\n            nameValue:\"name\",\r\n            inputType:\"text\",\r\n        },\r\n        email : {\r\n            elementType: \"input\",\r\n            label: \"Email\",\r\n            idValue:\"email\",\r\n            nameValue:\"email\",\r\n            inputType:\"email\",\r\n        },\r\n        textField : {\r\n            elementType: \"textarea\",\r\n            label: \"Comment\",\r\n            idValue:\"comment\",\r\n            nameValue:\"comment\",  \r\n            rows: 15,\r\n            cols: 70,\r\n        },\r\n\r\n        \r\n    };\r\n\r\n    for (let key in inputs){\r\n        const label = document.createElement(\"label\");\r\n        label.textContent = inputs[key].label;\r\n        label.setAttribute(\"for\", inputs[key].idValue);\r\n        \r\n        const input = document.createElement(inputs[key].elementType);\r\n        input.setAttribute(\"id\", inputs[key].idValue);\r\n        input.setAttribute(\"name\", inputs[key].nameValue);\r\n        input.setAttribute(\"required\", \"\");\r\n        input.required=true\r\n        if(inputs[key].elementType === \"input\"){\r\n            input.setAttribute(\"type\", inputs[key].inputType);\r\n        }\r\n        if(inputs[key].elementType === \"textarea\"){\r\n            input.setAttribute(\"rows\", inputs[key].rows);\r\n            input.setAttribute(\"cols\", inputs[key].cols);\r\n        }\r\n\r\n        const container = document.createElement(\"div\");\r\n        container.append(label, input);\r\n        contactForm.appendChild(container);\r\n    }\r\n\r\n    const submitButton = document.createElement(\"button\");\r\n    submitButton.textContent=\"SUBMIT\"\r\n    submitButton.setAttribute(\"type\", \"submit\");\r\n    contactForm.appendChild(submitButton);\r\n\r\n    contactMain.appendChild(contactForm);\r\n\r\n\r\n    content.appendChild(contactContainer);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n\r\nfunction home(){\r\n    const content = document.querySelector(\"#content\");\r\n    content.textContent=\"\";\r\n    const homeContainer = document.createElement(\"div\");\r\n    homeContainer.classList.add(\"homeContainer\");\r\n    const welcome = document.createElement(\"h1\");\r\n    welcome.textContent = \"Welcome to our restaurant!\";\r\n    const homeText= document.createElement(\"p\");\r\n    homeText.textContent = \"we believe that great meals are meant to be shared with the ones you love. Whether you’re stopping by for a family dinner or celebrating a special occasion, we offer a fun, warm, and welcoming environment for all ages. Enjoy hearty meals, kid-friendly options, and memories that will last a lifetime!\"\r\n\r\n    homeContainer.appendChild(welcome);\r\n    homeContainer.appendChild(homeText);\r\n    content.appendChild(homeContainer);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();\r\nconst homeButton = document.querySelector(\".homeButton\");\r\nconst menuButton = document.querySelector(\".menuButton\");\r\nconst contactButton = document.querySelector(\".contactButton\");\r\n\r\nhomeButton.addEventListener(\"click\", ()=>{\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();\r\n});\r\n\r\nmenuButton.addEventListener(\"click\", ()=>{\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)();\r\n});\r\n\r\ncontactButton.addEventListener(\"click\", ()=>{\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.contact)();\r\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\r\n    const content = document.querySelector(\"#content\");\r\n    content.textContent=\"\";\r\n\r\n    const menuContainer = document.createElement(\"div\");\r\n    menuContainer.classList.add(\"menuContainer\");\r\n    \r\n    const menuMain = document.createElement(\"div\");\r\n    menuMain.classList.add(\"menuMain\");\r\n    menuContainer.appendChild(menuMain);\r\n\r\n    const menuSide = document.createElement(\"div\");\r\n    menuSide.classList.add(\"menuSide\");\r\n    menuContainer.appendChild(menuSide);\r\n\r\n\r\n\r\n    const items = {\r\n        grilledRibeyeSteak: {\r\n            name: \"Grilled Ribeye Steak\",\r\n            description : \"A perfectly grilled 12 oz ribeye steak, seasoned with sea salt and cracked pepper. Served with a side of creamy mashed potatoes and seasonal vegetables, finished with a rich red wine reduction.\",\r\n            price: \"29.95\",\r\n        },\r\n        eggplantParmesan: {\r\n            name: \"Eggplant Parmesan\",\r\n            description: \"Crispy breaded eggplant slices baked with marinara sauce and melted mozzarella cheese. Served with a side of spaghetti and garnished with fresh basil. A vegetarian classic with a hearty touch.\",\r\n            price:\"$18.95\",\r\n        },\r\n        lobsterMacCheese: {\r\n            name: \"Lobster Mac & Cheese\",\r\n            description:\"Lobster meat and tender elbow pasta smothered in a creamy, four-cheese sauce, topped with a crispy breadcrumb crust. Decadent, rich, and guaranteed to satisfy.\",\r\n            price:\"$24.95\",\r\n        },\r\n        misoGlazedSalmon:{\r\n            name: \"Miso-Glazed Salmon\",\r\n            description:\"Fresh salmon fillet glazed with a sweet and savory miso sauce, grilled to perfection and served over a bed of steamed jasmine rice and sautéed bok choy. Light yet packed with flavor.\",\r\n            price:\"$22.50\",\r\n        },\r\n        pulledPorkTacos: {\r\n            name: \"Pulled Pork Tacos\",\r\n            description:\"Slow-cooked, tender pulled pork topped with tangy slaw, pickled onions, and a squeeze of lime on soft corn tortillas. Served with a side of house-made salsa and chips.\",\r\n            price:\"$13.50 (3 tacos)\",\r\n        },\r\n        buffaloCauliflowerBites: {\r\n            name: \"Buffalo Cauliflower Bites\",\r\n            description:\"Crispy, battered cauliflower florets tossed in spicy buffalo sauce. Served with a cooling side of creamy ranch dip for the ultimate balance of heat and flavor.\",\r\n            price:\"$9.50\",\r\n        },\r\n    }\r\n\r\n\r\n\r\n    for(let key in items){\r\n        const itemContainer = document.createElement(\"div\");\r\n        itemContainer.classList.add(\"itemContainer\");\r\n\r\n        const itemName = document.createElement(\"p\");\r\n        itemName.textContent=items[key].name;\r\n\r\n        const itemPrice = document.createElement(\"p\");\r\n        itemPrice.textContent=items[key].price;\r\n\r\n        const itemDescription = document.createElement(\"p\");\r\n        itemDescription.textContent=items[key].description;\r\n\r\n        itemContainer.append(itemName, itemPrice, itemDescription);\r\n        menuMain.appendChild(itemContainer);\r\n    }\r\n    \r\n    content.appendChild(menuContainer);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg":
/*!****************************************************!*\
  !*** ./src/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a78522a4f6ba3b8ea76.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
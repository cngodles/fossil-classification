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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    EditableText = _wp$editor.EditableText,
    ColorPalette = _wp$editor.ColorPalette,
    MediaUpload = _wp$editor.MediaUpload,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    LinkControl = _wp$blockEditor.__experimentalLinkControl,
    URLInputButton = _wp$blockEditor.URLInputButton,
    URLInput = _wp$blockEditor.URLInput,
    URLPopover = _wp$blockEditor.URLPopover;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    IconButton = _wp$components.IconButton,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select;
var ALLOWED_BLOCKS = ['core/button'];

function cssClass() {
  for (var _len = arguments.length, c = new Array(_len), _key = 0; _key < _len; _key++) {
    c[_key] = arguments[_key];
  }

  return c.join(" ");
}

registerBlockType('fossil-id/fossil-id-box', {
  title: 'Fossil ID Box',
  description: 'A box to display name, scientific classification and temporal range.',
  icon: 'analytics',
  category: 'common',
  supports: {
    align: ['left', 'right', 'center']
  },
  attributes: {
    name: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    temporalRange: {
      source: 'html',
      selector: 'p.temporal-range'
    },
    kingdom: {
      source: 'html',
      selector: '[data-g="k"] p.fc-val'
    },
    phylum: {
      source: 'html',
      selector: '[data-g="p"] p.fc-val'
    },
    className: {
      source: 'html',
      selector: '[data-g="c"] p.fc-val'
    },
    order: {
      source: 'html',
      selector: '[data-g="o"] p.fc-val'
    },
    family: {
      source: 'html',
      selector: '[data-g="f"] p.fc-val'
    },
    genus: {
      source: 'html',
      selector: '[data-g="g"] p.fc-val'
    },
    species: {
      source: 'html',
      selector: '[data-g="s"] p.fc-val'
    },
    holoType: {
      source: 'html',
      selector: 'p.holotype'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;
    var name = attributes.name,
        temporalRange = attributes.temporalRange,
        kingdom = attributes.kingdom,
        phylum = attributes.phylum,
        className = attributes.className,
        order = attributes.order,
        family = attributes.family,
        genus = attributes.genus,
        species = attributes.species,
        holoType = attributes.holoType;

    function onChangeName(x) {
      setAttributes({
        name: x
      });
    }

    function onChangeTemporalRange(x) {
      setAttributes({
        temporalRange: x
      });
    }

    function onChangeKingdom(x) {
      setAttributes({
        kingdom: x
      });
    }

    function onChangePhylum(x) {
      setAttributes({
        phylum: x
      });
    }

    function onChangeClass(x) {
      setAttributes({
        className: x
      });
    }

    function onChangeOrder(x) {
      setAttributes({
        order: x
      });
    }

    function onChangeFamily(x) {
      setAttributes({
        family: x
      });
    }

    function onChangeGenus(x) {
      setAttributes({
        genus: x
      });
    }

    function onChangeSpecies(x) {
      setAttributes({
        species: x
      });
    }

    function onChangeHoloType(x) {
      setAttributes({
        holoType: x
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Background Image Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Alignment?")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fossil-classification"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "Genus & Species",
      value: name,
      onChange: onChangeName
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      className: "temporal-range",
      placeholder: "Temporal Range (Ex: 300 - 100MYA)",
      value: temporalRange,
      onChange: onChangeTemporalRange
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Scientific Classification"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "fossil-classification--chart"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "k"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Kingdom:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      className: "fc-val",
      placeholder: "Kingdom (eg. Animalia)",
      value: kingdom,
      onChange: onChangeKingdom
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "p"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Phylum:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      className: "fc-val",
      placeholder: "Phylum",
      value: phylum,
      onChange: onChangePhylum
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "c"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Class:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      className: "fc-val",
      placeholder: "Class",
      value: className,
      onChange: onChangeClass
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "o"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Order:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      className: "fc-val",
      placeholder: "Order",
      value: order,
      onChange: onChangeOrder
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "f"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Family:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      className: "fc-val",
      placeholder: "Family",
      value: family,
      onChange: onChangeFamily
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "g"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Genus:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      className: "fc-val",
      placeholder: "Genus",
      value: genus,
      onChange: onChangeGenus
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "s"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Species:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      className: "fc-val",
      placeholder: "Species",
      value: species,
      onChange: onChangeSpecies
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      className: "holotype",
      placeholder: "Holotype (eg. Godlesky 2020)",
      value: holoType,
      onChange: onChangeHoloType
    }))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var name = attributes.name,
        temporalRange = attributes.temporalRange,
        kingdom = attributes.kingdom,
        phylum = attributes.phylum,
        className = attributes.className,
        order = attributes.order,
        family = attributes.family,
        genus = attributes.genus,
        species = attributes.species,
        holoType = attributes.holoType;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fossil-classification"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h2",
      value: name
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "p",
      className: "temporal-range",
      value: temporalRange
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Scientific Classification"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fossil-classification--chart"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "k"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Kingdom:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-val"
    }, kingdom)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "p"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Phylum:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-val"
    }, phylum)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "c"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Class:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-val"
    }, className)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "o"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Order:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-val"
    }, order)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "f"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Family:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-val"
    }, family)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "g"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Genus:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-val"
    }, genus)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      "data-g": "s"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-label"
    }, "Species:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "fc-val"
    }, species))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "holotype"
    }, holoType));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	  * Arrow functions have shorter syntax than function expressions.
	  * These functions also lexically bind `this` value and are always anonymous.
	  */

	var Point = function () {
	    function Point(x, y) {
	        _classCallCheck(this, Point);

	        this.x = x;
	        this.y = y;
	    }

	    _createClass(Point, [{
	        key: 'toString',
	        value: function toString() {
	            return '(' + this.x + ', ' + this.y + ')';
	        }
	    }]);

	    return Point;
	}();

	var ColorPoint = function (_Point) {
	    _inherits(ColorPoint, _Point);

	    function ColorPoint(x, y, color) {
	        _classCallCheck(this, ColorPoint);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPoint).call(this, x, y));

	        _this.color = color;
	        return _this;
	    }

	    _createClass(ColorPoint, [{
	        key: 'toString',
	        value: function toString() {
	            return _get(Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this) + ' in ' + this.color;
	        }
	    }]);

	    return ColorPoint;
	}(Point);

	var cp = new ColorPoint(25, 8, 'green');
	cp.toString(); // '(25, 8) in green'

	console.log(cp instanceof ColorPoint); // true
	console.log(cp instanceof Point); // true

/***/ }
/******/ ]);
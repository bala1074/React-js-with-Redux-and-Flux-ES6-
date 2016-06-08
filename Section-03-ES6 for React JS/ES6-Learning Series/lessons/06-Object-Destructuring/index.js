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

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	/**
	  * Arrow functions have shorter syntax than function expressions.
	  * These functions also lexically bind `this` value and are always anonymous.
	  */
	var a = 1;
	var b = 2;

	console.log(a, b);
	//=> 1 2

	// Use from functions, only select from pattern
	var foo = function foo() {
	  return [1, 2, 3];
	};

	var _foo = foo();

	var _foo2 = _slicedToArray(_foo, 5);

	var a = _foo2[0];
	var c = _foo2[2];
	var d = _foo2[3];
	var e = _foo2[4];

	console.log(a, b);
	console.log(b);
	console.log(a);
	// => 1 2

	// Omit certain values
	var _ref = [1, 2, 3];
	var a = _ref[0];
	var b = _ref[2];

	console.log(a, b);
	// => 1 3

	//spread operator
	// Combine with spread/rest operator (accumulates the rest of the values)
	var a = 1;
	var b = [2, 3];

	console.log(a, b);

/***/ }
/******/ ]);
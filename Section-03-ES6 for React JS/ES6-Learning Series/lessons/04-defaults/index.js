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

	/**
	  * Arrow functions have shorter syntax than function expressions.
	  * These functions also lexically bind `this` value and are always anonymous.
	  */

	var foo = ["Hello", "World"];
	//default arguments
	function f(x) {
	  var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];
	  var z = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];

	  // y is 12 if not passed (or passed as undefined)
	  //argument
	  return x + y + z;
	}
	f(3) == 25;
	f(4, 5);
	f(4, 4, 4);

	function foo(x) {
	  var y = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];
	}
	function foo() {
	  var x = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
	  var y = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];
	}
	function foo(x) {
	  var y = arguments.length <= 1 || arguments[1] === undefined ? "hello" : arguments[1];
	  var z = arguments.length <= 2 || arguments[2] === undefined ? this : arguments[2];
	}

	//ES5

/***/ }
/******/ ]);
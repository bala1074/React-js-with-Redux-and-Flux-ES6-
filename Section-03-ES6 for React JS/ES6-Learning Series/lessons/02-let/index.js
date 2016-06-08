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

	function getValue(condition) {
	    if (condition) {
	        var value = 'blue';
	        return value;
	    } else {
	        // value doesn't exist here
	        return null;
	    }
	    // value doesn't exist here
	}

	function f() {
	    var x = void 0;
	    console.log(x);
	    {
	        // okay, block scoped name
	        var _x = "sneaky";
	        // error, const
	        // x = "foo";
	    }
	    // error, already declared in block
	    x = "inner";
	}

	function foo() {
	    console.log(a); // undefined
	    a = 1; // careful, `a` has been hoisted!

	    if (a) {
	        var a; // hoisted to function scope!
	        var _b = a + 2; // `b` block-scoped to `if` block!
	        console.log(_b); // 3 
	    }
	    console.log(a); // 1   // block level scoping
	    console.log(b); // ReferenceError: `b` is not defined
	}

/***/ }
/******/ ]);
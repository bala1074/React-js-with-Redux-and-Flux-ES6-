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

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	  * Arrow functions have shorter syntax than function expressions.
	  * These functions also lexically bind `this` value and are always anonymous.
	  */

	//Object Assign
	var obj = { a: 1 };
	var copy = Object.assign({}, obj);
	console.log(copy); // { a: 1 }

	var o1 = { a: 1 };
	var o2 = _defineProperty({}, Symbol('foo'), 2);

	var obj = Object.assign({}, o1, o2);
	console.log(obj); // { a: 1, [Symbol("foo")]: 2 }

	// Merge an object
	var first = { name: 'Tony' };
	var last = { lastName: 'Stark' };
	var person = Object.assign(first, last);
	ChromeSamples.log(person);
	var name = person.name;
	var lastName = person.lastName;

	// Merge and overwrite equal keys

	var b = Object.assign({ foo: 0 }, { foo: 1 }, { foo: 2 });
	ChromeSamples.log(b); // {foo: 2}

	//Now lets see what we can solve using obj.assign // 10
	function spinner(target) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


	  // 20
	  var defaults = {
	    message: "Please wait",
	    spinningSpeed: 5,
	    cssClass: ".is-spinning"
	  };

	  //ES5

	  var settings = Object.assign({}, defaults, options);

	  console.log('Message: ' + settings.message);
	  console.log('spinningSpeed: ' + settings.spinningSpeed);
	  console.log('cssClass: ' + settings.cssClass);
	}

/***/ }
/******/ ]);
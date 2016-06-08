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

	//Spread/Rest Operator ...
	//This operator, '...', has two uses, depending on the context. In the first case we'll cover the usage as a spread operator.
	//Rest parameter
	// ECMAScript 2015
	function pick(object) {
	  var result = Object.create(null);

	  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    keys[_key - 1] = arguments[_key];
	  }

	  for (var i = 0, len = keys.length; i < len; i++) {
	    result[keys[i]] = object[keys[i]];
	  }

	  return result;
	}

	function sum() {
	  for (var _len2 = arguments.length, number = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    number[_key2] = arguments[_key2];
	  }

	  var result = 0;
	  numbers.forEach(function (number) {
	    result += number;
	  });
	  return result;
	}
	console.log(sum(1)); // 1
	console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8)); // 15

	function sum(a, b, c) {
	  return a + b + c;
	}
	var args = [1, 2, 3];
	console.log(sum.apply(undefined, args)); // 6

	//passing y as Array
	function f(x) {
	  for (var _len3 = arguments.length, y = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    y[_key3 - 1] = arguments[_key3];
	  }

	  y = ['hello', true];
	  // y is an Array
	  return x * y.length;
	}
	f(3, "hello", true) == 6;

	//passing param as var arguments
	function f(x) {
	  var y = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];
	  var z = arguments.length <= 2 || arguments[2] === undefined ? 9 : arguments[2];

	  return x + y + z;
	}
	// Pass each elem of array as argument spread operator
	var x = [2, 3, 4];
	f.apply(undefined, x) == 6;
	f.apply(undefined, [1, 2, 4, 5]) == 6;

	function myFunction(x, y, z) {}
	var args = [0, 1, 2];
	myFunction.apply(undefined, args);

	function myFunction(v, w, x, y, z) {}
	var args = [0, 1];
	myFunction.apply(undefined, [-1].concat(args, [2], [3]));

/***/ }
/******/ ]);
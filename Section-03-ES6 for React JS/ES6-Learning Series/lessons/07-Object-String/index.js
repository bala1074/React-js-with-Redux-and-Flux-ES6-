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
	//obj String

	var x1 = 5;
	var x2 = 40;
	var usr = { x1: x1, x2: x2 };

	function buildObj(x, y) {
	  return { x: x, y: y };
	}
	var a = 1;
	var b = 2;

	console.log(a, b);
	//=> 1 2

	var person = {
	  name: "Nicholas",
	  password: "*****",
	  sayName: function sayName() {
	    console.log(this.name);
	  }
	};

	// Use from functions, only select from pattern
	var foo = function foo() {
	  return [1, 2, 3];
	};

	var _foo = foo();

	var _foo2 = _slicedToArray(_foo, 2);

	var a = _foo2[0];
	var b = _foo2[1];

	console.log(a, b);
	// => 1 2

	// Omit certain values
	var _ref = [1, 2, 3];
	var a = _ref[0];
	var b = _ref[2];

	console.log(a, b);
	// => 1 3

	// Combine with spread/rest operator (accumulates the rest of the values)
	var a = 1;
	var b = [2, 3];

	console.log(a, b);
	// => 1 [ 2, 3 ]

	// Fail-safe.
	var _ref2 = [1, 2, 3];
	var a = _ref2[3];
	var b = _ref2[4];

	console.log(a, b);
	// => undefined undefined

	// Swap variables easily without temp
	var a = 1,
	    b = 2;
	var _ref3 = [a, b];
	b = _ref3[0];
	a = _ref3[1];

	console.log(a, b);
	// => 2 1

	// Advance deep arrays
	var a = 1;
	var b = 2;
	var c = [[3, 4], 5];
	var d = 6;

	console.log("a:", a, "b:", b, "c:", c, "d:", d);
	// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6

	// === Objects

	var _user = { user: 5 };
	var x = _user.user;

	console.log(x);
	// => 5

	// Fail-safe
	var _user2 = { user2: 5 };
	var x = _user2.user;

	console.log(x);
	// => undefined

	// More values
	var _prop$prop = { prop: 5, prop2: 10 };
	var x = _prop$prop.prop;
	var y = _prop$prop.prop2;

	console.log(x, y);
	// => 5 10

	// Short-hand syntax
	var _prop$prop2 = { prop: 5, prop2: 10 };
	var prop = _prop$prop2.prop;
	var prop2 = _prop$prop2.prop2;

	console.log(prop, prop2);
	// => 5 10

	// Equal to:
	var _prop$prop3 = { prop: 5, prop2: 10 };
	var prop = _prop$prop3.prop;
	var prop2 = _prop$prop3.prop2;

	console.log(prop, prop2);
	// => 5 10

	/*function BuildUser(first,last){
	     let fullname =first +""+ last;
	     return {first,last,fullname};
	}

	let  {first,last,full} = BuildUser("tarun","sharma");
	console.log(first);*/

/***/ }
/******/ ]);
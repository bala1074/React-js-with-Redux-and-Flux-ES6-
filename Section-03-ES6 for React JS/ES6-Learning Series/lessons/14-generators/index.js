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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var fs = __webpack_require__(2);

	function readFile(filename) {
	    return new Promise(function (resolve, reject) {
	        //resolve(55);
	        fs.readFile(filename, { encoding: "utf8" }, function (err, contents) {
	            if (err) {
	                reject(err);
	                return;
	            }
	            resolve(contents);
	        });
	    });
	}
	var promise = readFile("example.txt");
	// listen for both fulfillment and rejection
	promise.then(function (contents) {

	    var promise1 = readFile("example.txt");
	    promise1.then(function (contents) {}, function (error) {});
	}, function (err) {
	    console.error(err.message);
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	console.log("I'm `fs` modules");


/***/ }
/******/ ]);
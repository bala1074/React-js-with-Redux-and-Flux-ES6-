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

	/**
	  * Arrow functions have shorter syntax than function expressions.
	  * These functions also lexically bind `this` value and are always anonymous.
	  */

	var p = new Promise(function (resolve, reject) {
	  // Do an async task async task and then...
	  if (true) {
	    resolve('Success!');
	  } else {
	    reject('Failure!');
	  }
	});

	p.then(function () {
	  // success
	}).catch(function () {
	  // failure
	});

	// From Jake Archibald's Promises and Back:
	// http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promisifying-xmlhttprequest

	function getJSON(url) {
	  // Return a new promise.
	  return new Promise(function (resolve, reject) {
	    // Do the usual XHR stuff
	    var req = new XMLHttpRequest();
	    req.open('GET', url);

	    req.onload = function () {
	      // This is called even on 404 etc
	      // so check the status
	      if (req.status == 200) {
	        // Resolve the promise with the response text
	        resolve(req.response);
	      } else {
	        // Otherwise reject with the status text
	        // which will hopefully be a meaningful error
	        reject(Error(req.statusText));
	      }
	    };

	    // Handle network errors
	    req.onerror = function () {
	      reject(Error("Network Error"));
	    };

	    // Make the request
	    req.send();
	  });
	}

	// Use it!
	getJSON('story.json').then(function (response) {
	  console.log("Success!", response);
	}, function (error) {
	  console.error("Failed!", error);
	});

	/*var p1 = new Promise((resolve, reject) => setTimeout(resolve, 400, "one"));
	var p2 = new Promise((resolve, reject) => setTimeout(resolve, 200, "two"));
	Promise.all([p1, p2]).then(function(value) {
	    console.log(value); //one, two
	});*/

	//Promises are a library for asynchronous programming. Promises are a first class representation of a value that may be made available in the future. Promises are used in many existing JavaScript libraries.

	function timeout() {
	  var duration = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	  return new Promise(function (resolve, reject) {
	    setTimeout(resolve, duration);
	  });
	}

	var p = timeout(1000).then(function () {
	  return timeout(2000);
	}).then(function () {
	  throw new Error("hmm");
	}).catch(function (err) {
	  return Promise.all([timeout(100), timeout(200)]);
	});

/***/ }
/******/ ]);
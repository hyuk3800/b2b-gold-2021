/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/quote.js":
/*!********************************!*\
  !*** ./src/client/js/quote.js ***!
  \********************************/
/***/ (() => {

eval("var openButton = document.querySelector(\"#openButton\");\nvar postForm = document.querySelector(\"#postForm\");\nvar bgOff = document.querySelector(\"#bgOff\");\nvar offButton = document.querySelector(\"#offButton\");\n\nvar postBoxOn = function postBoxOn() {\n  postForm.classList.add(\"on\");\n  postForm.style.transition = \"\";\n};\n\nvar postBoxOff = function postBoxOff() {\n  postForm.classList.remove(\"on\");\n  postForm.style.transition = \"height 0s .5s\";\n};\n\nopenButton.addEventListener(\"click\", postBoxOn);\nbgOff.addEventListener(\"click\", postBoxOff);\noffButton.addEventListener(\"click\", postBoxOff);\n\n//# sourceURL=webpack://dd/./src/client/js/quote.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/quote.js"]();
/******/ 	
/******/ })()
;
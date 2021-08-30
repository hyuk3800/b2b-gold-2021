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

/***/ "./src/client/js/hambutton.js":
/*!************************************!*\
  !*** ./src/client/js/hambutton.js ***!
  \************************************/
/***/ (() => {

eval("var ham = document.getElementById(\"ham\");\nvar hamMenu = document.querySelector(\".hammn\"); // console.log(ham);\n\nvar hamListClick = function hamListClick() {\n  hamMenu.classList.toggle(\"on\");\n};\n\nham.addEventListener(\"click\", hamListClick);\n\n//# sourceURL=webpack://dd/./src/client/js/hambutton.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/hambutton.js"]();
/******/ 	
/******/ })()
;
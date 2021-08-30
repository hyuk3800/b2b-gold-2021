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

/***/ "./src/client/js/catalogeMain.js":
/*!***************************************!*\
  !*** ./src/client/js/catalogeMain.js ***!
  \***************************************/
/***/ (() => {

eval("var cardBro = document.querySelector(\".card_bro\");\nvar tableBro = document.querySelector(\".table_bro\");\nvar on = \"on\";\nvar mainContainerCard = document.querySelector(\".mainContainerCard\");\nvar mainContTable = document.querySelector(\".mainContTable\");\nconsole.log(cardBro, tableBro, on, mainContainerCard, mainContTable);\n\nvar cardBroBtnClick = function cardBroBtnClick() {\n  if (!cardBro.classList.contains(on)) {\n    cardBro.classList.toggle(on);\n    tableBro.classList.toggle(on);\n    mainContainerCard.classList.toggle(on);\n    mainContTable.classList.toggle(on);\n  }\n};\n\nvar tableBroBtnClick = function tableBroBtnClick() {\n  if (!tableBro.classList.contains(on)) {\n    cardBro.classList.toggle(on);\n    tableBro.classList.toggle(on);\n    mainContainerCard.classList.toggle(on);\n    mainContTable.classList.toggle(on);\n  }\n};\n\ncardBro.addEventListener(\"click\", cardBroBtnClick);\ntableBro.addEventListener(\"click\", tableBroBtnClick);\n\n//# sourceURL=webpack://dd/./src/client/js/catalogeMain.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/catalogeMain.js"]();
/******/ 	
/******/ })()
;
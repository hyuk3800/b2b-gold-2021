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

eval("var cardBro = document.querySelector(\".card_bro\");\nvar tableBro = document.querySelector(\".table_bro\");\nvar on = \"on\";\nvar mainContainerCard = document.querySelector(\".mainContainerCard\");\nvar mainContTable = document.querySelector(\".mainContTable\");\nvar wageboxcent = document.querySelector(\"#wageboxcent\");\nvar offbutton = document.querySelector(\"#offbutton\");\nvar onbutton = document.querySelector(\"#onbutton\");\nvar wagebox = document.querySelector(\"#wagebox\");\nvar clickAndChack = document.querySelector(\".clickAndChack\");\nvar clickThis = document.getElementsByClassName('clickThis'); // console.log(\n//     cardBro,\n//     tableBro,\n//     on,\n//     mainContainerCard,\n//     mainContTable,\n// );\n\nvar cardBroBtnClick = function cardBroBtnClick() {\n  if (!cardBro.classList.contains(on)) {\n    cardBro.classList.toggle(on);\n    tableBro.classList.toggle(on);\n    mainContainerCard.classList.toggle(on);\n    mainContTable.classList.toggle(on);\n    clickAndChack.classList.toggle(\"off\");\n  }\n};\n\nvar tableBroBtnClick = function tableBroBtnClick() {\n  if (!tableBro.classList.contains(on)) {\n    cardBro.classList.toggle(on);\n    tableBro.classList.toggle(on);\n    mainContainerCard.classList.toggle(on);\n    mainContTable.classList.toggle(on);\n    clickAndChack.classList.toggle(\"off\");\n  }\n};\n\ncardBro.addEventListener(\"click\", cardBroBtnClick);\ntableBro.addEventListener(\"click\", tableBroBtnClick); // 체크박스 체크가 있을시에만 공임변경창 나오게하기\n\nfor (var i = 0; i < clickThis.length; i++) {\n  var checkedTrueFalse = function checkedTrueFalse(e) {\n    // console.log(clickThis[i].value);\n    console.log(e.target.checked); // console.log(e, \"이거슨\");\n\n    if (e.target.checked) {\n      //    console.log(clickThis.value.find(e.target.value));\n      var wageBoxOnOff = function wageBoxOnOff() {\n        wagebox.classList.toggle(\"on\");\n        console.log(\"hihi\"); // if(e.target.value === clickThis[i].value){\n        // }\n      };\n\n      offbutton.addEventListener(\"click\", wageBoxOnOff);\n      onbutton.addEventListener(\"click\", wageBoxOnOff);\n      wageboxcent.addEventListener(\"click\", wageBoxOnOff);\n    }\n\n    console.log(\"hi\");\n  }; // console.log(clickThis.length);\n\n\n  clickThis[i].addEventListener(\"click\", checkedTrueFalse);\n}\n\nvar checkThisAll = function checkThisAll() {\n  // console.log(\"누름\");\n  if (clickAndChack.classList.contains(\"on\") === false) {\n    clickAndChack.classList.toggle(\"on\");\n\n    for (var _i = 0; _i < clickThis.length; _i++) {\n      clickThis[_i].checked = true;\n    }\n  } else {\n    // console.log(\"안녕?\")\n    clickAndChack.classList.toggle(\"on\");\n\n    for (var _i2 = 0; _i2 < clickThis.length; _i2++) {\n      clickThis[_i2].checked = false;\n    }\n  }\n};\n\nclickAndChack.addEventListener(\"click\", checkThisAll);\nallClickBtnOff();\n\n//# sourceURL=webpack://dd/./src/client/js/catalogeMain.js?");

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
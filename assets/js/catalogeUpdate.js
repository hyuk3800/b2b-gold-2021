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

/***/ "./src/client/js/catalogeUpdate.js":
/*!*****************************************!*\
  !*** ./src/client/js/catalogeUpdate.js ***!
  \*****************************************/
/***/ (() => {

eval("window.onload = function () {\n  var stoneBtn = document.querySelector(\"#stoneClickBtn\");\n  var stoneTbody = document.querySelector(\"#stoneTbody\");\n  var stoneDelete = document.querySelector(\"#stoneDelete\");\n\n  var stoneTableUp = function stoneTableUp() {\n    console.log(\"시작한다\");\n    var newRow = stoneTbody.insertRow();\n    var newCell1 = newRow.insertCell(0);\n    var newCell2 = newRow.insertCell(1);\n    var newCell3 = newRow.insertCell(2);\n    var newCell4 = newRow.insertCell(3);\n    var newCell5 = newRow.insertCell(4);\n    var newCell6 = newRow.insertCell(5);\n    var newCell7 = newRow.insertCell(6);\n    var newCell8 = newRow.insertCell(7);\n    var newCell9 = newRow.insertCell(8);\n    var newCell10 = newRow.insertCell(9);\n    newCell1.innerHTML = \"<div><input type='text' placeholder='스톤명'><img class='sltImg' src='../../../../static/images/ic-zoom-in-24-px@3x.png' alt='검색'></div>\";\n    newCell2.innerHTML = '<div><input type=\"text\" placeholder=\"수량\"></div>';\n    newCell3.innerHTML = '<div><input type=\"text\" placeholder=\"설명\"></div>';\n    newCell4.innerHTML = '<div><input type=\"text\" placeholder=\"중량(개당)\"></div>';\n    newCell5.innerHTML = '<div><input type=\"text\" placeholder=\"중량(총중량)\"></div>';\n    newCell6.innerHTML = '<div><input type=\"text\" placeholder=\"매입단가(개당)\"></div>';\n    newCell7.innerHTML = '<div><input type=\"text\" placeholder=\"매입단가(총가격)\"></div>';\n    newCell8.innerHTML = '<div><input type=\"text\" placeholder=\"판매단가(개당)\"></div>';\n    newCell9.innerHTML = '<div><input type=\"text\" placeholder=\"판매단가(총가격)\"></div>';\n    newCell10.innerHTML = '<button type=\"button\", onclick=\"dd(e)\" id=\"stoneDelete\">삭제</button>';\n  }; // const stoneTableDel = (-1) => {\n  //     console.log(\"지운다!\");\n  //     stoneTbody.deleteRow(-1);\n  // };\n\n\n  stoneBtn.addEventListener(\"click\", stoneTableUp); //  stoneDelete.addEventListener(\"click\", stoneTableDel);\n}; // function stoneTableDel(){\n//     console.log(\"지운다!\");\n// function dd() {console.log(\"되라씨\"); }\n//     // stoneTbody.deleteRow(e);\n// };\n// table element 찾기\n// const table = document.getElementById('stoneTbody');\n// // 새 행(Row) 추가\n// const newRow = table.insertRow();\n// // 새 행(Row)에 Cell 추가\n// const newCell1 = newRow.insertCell(0);\n// const newCell2 = newRow.insertCell(1);\n// // Cell에 텍스트 추가\n// newCell1.innerText = '새 과일';\n// newCell2.innerText = 'New Fruit';\n\n//# sourceURL=webpack://dd/./src/client/js/catalogeUpdate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/catalogeUpdate.js"]();
/******/ 	
/******/ })()
;
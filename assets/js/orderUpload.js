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

/***/ "./src/client/js/orderUpload.js":
/*!**************************************!*\
  !*** ./src/client/js/orderUpload.js ***!
  \**************************************/
/***/ (() => {

eval("window.onload = function () {\n  var plsbtn = document.querySelector('#plsbtn');\n  var tbody = document.querySelector('#tbody');\n\n  var plsbtnClick = function plsbtnClick() {\n    console.log(\"hi\");\n    var newRow = tbody.insertRow();\n    var newCell1 = newRow.insertCell(0);\n    var newCell2 = newRow.insertCell(1);\n    var newCell3 = newRow.insertCell(2);\n    var newCell4 = newRow.insertCell(3);\n    var newCell5 = newRow.insertCell(4);\n    var newCell6 = newRow.insertCell(5);\n    var newCell7 = newRow.insertCell(6);\n    var newCell8 = newRow.insertCell(7);\n    var newCell9 = newRow.insertCell(8);\n    var newCell10 = newRow.insertCell(9);\n    var newCell11 = newRow.insertCell(10);\n    var newCell12 = newRow.insertCell(11);\n    var newCell13 = newRow.insertCell(12);\n    var newCell14 = newRow.insertCell(13);\n    var newCell15 = newRow.insertCell(14);\n    var newCell16 = newRow.insertCell(15);\n    var newCell17 = newRow.insertCell(16);\n    var newCell18 = newRow.insertCell(17);\n    var newCell19 = newRow.insertCell(18);\n    newCell1.innerHTML = '<button class=\"trsBTN\"></button>';\n    newCell2.innerHTML = '<input type=\"text\"><button class=\"secbtn\"></button>';\n    newCell3.innerHTML = '<input type=\"text\"><button class=\"secbtn\"></button>';\n    newCell4.innerHTML = '<input type=\"text\"><button class=\"secbtn\"></button>';\n    newCell5.innerHTML = '<select name=\"gramBox\" id=\"gramBox\"><option value=\"\"></option><option value=\"10K\">10K</option><option value=\"14K\">14K</option><option value=\"18K\">18K</option><option value=\"22K\">22K</option><option value=\"순금-995\">순금-995</option><option value=\"순금-999\">순금-999</option><option value=\"실버\">실버</option><option value=\"PT\">PT</option><option value=\"기타\">기타</option></select>';\n    newCell6.innerHTML = '<select name=\"color\" id=\"color\"><option value=\"\"></option><option value=\"G\">G</option><option value=\"G/B\">G/B</option><option value=\"G/P\">G/P</option><option value=\"G/R/W\">G/R/W</option><option value=\"G/W\">G/W</option><option value=\"P\">P</option><option value=\"P/W\">P/W</option><option value=\"P/블랙도금\">P/블랙도금</option><option value=\"W\">W</option><option value=\"W/B\">W/B</option><option value=\"W/G\">W/G</option><option value=\"W/P\">W/P</option><option value=\"블랙\">블랙</option></select>';\n    newCell7.innerHTML = '<input type=\"text\">';\n    newCell8.innerHTML = '<input type=\"text\">';\n    newCell9.innerHTML = '<input type=\"text\">';\n    newCell10.innerHTML = '<input type=\"text\">';\n    newCell11.innerHTML = '<input type=\"text\">';\n    newCell12.innerHTML = '<input type=\"text\">';\n    newCell13.innerHTML = '<input type=\"text\">';\n    newCell14.innerHTML = '<input type=\"text\">';\n    newCell15.innerHTML = '<input type=\"text\">';\n    newCell16.innerHTML = '<input type=\"text\">';\n    newCell17.innerHTML = '<input type=\"text\">';\n    newCell18.innerHTML = '<input type=\"text\">';\n    newCell19.innerHTML = '<input type=\"text\" class=\"cldbox1111\" autocomplete=\"off\" disabled><div class=\"calinder2\"><img src=\"../../../../static/images/calendar.png\" alt=\"calendar\"></div>';\n  };\n\n  plsbtn.addEventListener(\"click\", plsbtnClick);\n  var calData = document.querySelector(\".calData\");\n  var cldbox = document.getElementsByClassName(\"cldbox1111\");\n  console.log(cldbox);\n  var today = new Date();\n  var KRDay = today.toLocaleDateString('ko-KR');\n  calData.innerText = KRDay;\n  var tomorrow = new Date(today.setDate(today.getDate() + 7)); // console.log(\"내일 : \", tomorrow.toLocaleDateString('ko-KR'));\n\n  for (var i = 0; i < cldbox.length; i++) {\n    cldbox[i].value = tomorrow.toLocaleDateString('ko-KR');\n  }\n};\n\n$(function () {\n  $(\".cldbox\").datepicker({});\n});\n\n//# sourceURL=webpack://dd/./src/client/js/orderUpload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/orderUpload.js"]();
/******/ 	
/******/ })()
;
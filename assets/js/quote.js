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

eval("var openButton = document.querySelector(\"#openButton\");\nvar postForm = document.querySelector(\"#postForm\");\nvar bgOff = document.querySelector(\"#bgOff\");\nvar offButton = document.querySelector(\"#offButton\");\n\nvar postBoxOn = function postBoxOn() {\n  postForm.classList.add(\"on\");\n  postForm.style.transition = \"\";\n};\n\nvar postBoxOff = function postBoxOff() {\n  postForm.classList.remove(\"on\");\n  postForm.style.transition = \"height 0s .5s\";\n};\n\nopenButton.addEventListener(\"click\", postBoxOn);\nbgOff.addEventListener(\"click\", postBoxOff);\noffButton.addEventListener(\"click\", postBoxOff);\nvar quoteNum = document.querySelectorAll(\".quoteNum\");\n\nfor (var i = 0; i < quoteNum.length; i++) {\n  quoteNum[i].innerText = i + 1;\n}\n\nvar calD1 = document.querySelector(\"#calD1\");\nvar calD2 = document.querySelector(\"#calD2\");\nvar today = new Date();\nvar KRDay = today.toLocaleDateString('ko-KR');\ncalD1.value = KRDay;\ncalD2.value = KRDay;\n$(function () {\n  ////////// jQ\n  $.datepicker.setDefaults({\n    dateFormat: 'yy. m. d.',\n    prevText: '이전 달',\n    nextText: '다음 달',\n    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],\n    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],\n    dayNames: ['일', '월', '화', '수', '목', '금', '토'],\n    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],\n    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],\n    showMonthAfterYear: true,\n    yearSuffix: '년'\n  });\n  $(\"#calD1\").datepicker({\n    beforeShow: function beforeShow(input, inst) {\n      var offset = $(input).offset();\n      window.setTimeout(function () {\n        $(inst.dpDiv).css({\n          \"top\": offset.top - 120 + \"px\"\n        });\n      }, 1); ///setTimeout\n    } /// beforeShow\n\n  });\n  $(\"#calD2\").datepicker({\n    beforeShow: function beforeShow(input, inst) {\n      var offset = $(input).offset();\n      window.setTimeout(function () {\n        $(inst.dpDiv).css({\n          \"top\": offset.top - 120 + \"px\"\n        });\n      }, 1); ///setTimeout\n    } /// beforeShow\n\n  });\n}); /////// jQ\n\n//# sourceURL=webpack://dd/./src/client/js/quote.js?");

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
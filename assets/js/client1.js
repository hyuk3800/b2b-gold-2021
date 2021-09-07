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

/***/ "./src/client/js/client.js":
/*!*********************************!*\
  !*** ./src/client/js/client.js ***!
  \*********************************/
/***/ (() => {

eval("function sample4_execDaumPostcode() {\n  new daum.Postcode({\n    oncomplete: function oncomplete(data) {\n      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.\n      // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.\n      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.\n      var roadAddr = data.roadAddress; // 도로명 주소 변수\n\n      var extraRoadAddr = ''; // 참고 항목 변수\n      // 법정동명이 있을 경우 추가한다. (법정리는 제외)\n      // 법정동의 경우 마지막 문자가 \"동/로/가\"로 끝난다.\n\n      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {\n        extraRoadAddr += data.bname;\n      } // 건물명이 있고, 공동주택일 경우 추가한다.\n\n\n      if (data.buildingName !== '' && data.apartment === 'Y') {\n        extraRoadAddr += extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName;\n      } // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.\n\n\n      if (extraRoadAddr !== '') {\n        extraRoadAddr = ' (' + extraRoadAddr + ')';\n      } // 우편번호와 주소 정보를 해당 필드에 넣는다.\n\n\n      document.getElementById('sample4_postcode').value = data.zonecode;\n      document.getElementById(\"sample4_roadAddress\").value = roadAddr;\n      document.getElementById(\"sample4_jibunAddress\").value = data.jibunAddress; // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.\n\n      if (roadAddr !== '') {\n        document.getElementById(\"sample4_extraAddress\").value = extraRoadAddr;\n      } else {\n        document.getElementById(\"sample4_extraAddress\").value = '';\n      }\n\n      var guideTextBox = document.getElementById(\"guide\"); // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.\n\n      if (data.autoRoadAddress) {\n        var expRoadAddr = data.autoRoadAddress + extraRoadAddr;\n        guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';\n        guideTextBox.style.display = 'block';\n      } else if (data.autoJibunAddress) {\n        var expJibunAddr = data.autoJibunAddress;\n        guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';\n        guideTextBox.style.display = 'block';\n      } else {\n        guideTextBox.innerHTML = '';\n        guideTextBox.style.display = 'none';\n      }\n    }\n  }).open();\n}\n\nvar startingsearch = document.querySelector(\"#startingsearch\");\nstartingsearch.addEventListener(\"click\", sample4_execDaumPostcode);\n\n//# sourceURL=webpack://dd/./src/client/js/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/client.js"]();
/******/ 	
/******/ })()
;
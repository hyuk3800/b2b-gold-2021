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

/***/ "./src/client/js/repairUpload.js":
/*!***************************************!*\
  !*** ./src/client/js/repairUpload.js ***!
  \***************************************/
/***/ (() => {

eval("window.onload = function () {\n  var account = document.querySelectorAll(\".account\");\n  var modelNumber = document.querySelectorAll(\".modelNumber\");\n  var manufacturer = document.querySelectorAll(\".manufacturer\");\n  var startsearch = document.querySelector(\".startsearch\");\n  var orderClose = document.querySelectorAll(\".orderClose\");\n  var bgBg = document.querySelector(\"#bgBg\");\n  var searcOrderhBox = document.querySelector(\".searcOrderhBox\");\n  var searcModelhBox = document.querySelector(\".searcModelhBox\");\n  var searchManuBox = document.querySelector(\".searchManuBox\");\n  var clientNum = document.querySelectorAll(\".clientNum\");\n  var clientNum2 = document.querySelectorAll(\".clientNum2\");\n\n  for (var i = 0; i < clientNum.length; i++) {\n    clientNum[i].innerText = i + 1;\n  }\n\n  for (var _i = 0; _i < clientNum2.length; _i++) {\n    clientNum2[_i].innerText = _i + 1;\n  }\n\n  for (var _i2 = 0; _i2 < account.length; _i2++) {\n    var accountOpen = function accountOpen() {\n      searcModelhBox.style.display = \"none\";\n      searchManuBox.style.display = \"none\";\n      startsearch.classList.add(\"on\");\n      searcOrderhBox.classList.add(\"on\");\n      startsearch.style.transition = \"\";\n    };\n\n    account[_i2].addEventListener(\"click\", accountOpen);\n  }\n\n  ;\n\n  for (var _i3 = 0; _i3 < account.length; _i3++) {\n    var modelNumberOpen = function modelNumberOpen() {\n      searcOrderhBox.style.display = \"none\";\n      searchManuBox.style.display = \"none\";\n      startsearch.classList.add(\"on\");\n      searcModelhBox.classList.add(\"on\");\n      startsearch.style.transition = \"\";\n    };\n\n    modelNumber[_i3].addEventListener(\"click\", modelNumberOpen);\n  }\n\n  ;\n\n  for (var _i4 = 0; _i4 < manufacturer.length; _i4++) {\n    var manufacturerOpen = function manufacturerOpen() {\n      searcOrderhBox.style.display = \"none\";\n      searcModelhBox.style.display = \"none\";\n      startsearch.classList.add(\"on\");\n      searchManuBox.classList.add(\"on\");\n      startsearch.style.transition = \"\";\n    };\n\n    manufacturer[_i4].addEventListener(\"click\", manufacturerOpen);\n  }\n\n  ;\n\n  var allCloseBtn = function allCloseBtn() {\n    startsearch.style.transition = \"height 0s .5s\";\n    startsearch.classList.remove(\"on\");\n    searcOrderhBox.classList.remove(\"on\");\n    searcModelhBox.classList.remove(\"on\");\n    searchManuBox.classList.remove(\"on\");\n    setTimeout(function () {\n      searcOrderhBox.style.display = \"block\";\n      searcModelhBox.style.display = \"block\";\n      searchManuBox.style.display = \"block\";\n    }, 1000);\n  };\n\n  for (var _i5 = 0; _i5 < orderClose.length; _i5++) {\n    var closeOrderRemove = function closeOrderRemove() {\n      startsearch.style.transition = \"height 0s .5s\";\n      startsearch.classList.remove(\"on\");\n      searcOrderhBox.classList.remove(\"on\");\n      searcModelhBox.classList.remove(\"on\");\n      searchManuBox.classList.remove(\"on\");\n      setTimeout(function () {\n        searcOrderhBox.style.display = \"block\";\n        searcModelhBox.style.display = \"block\";\n        searchManuBox.style.display = \"block\";\n      }, 1000);\n    };\n\n    orderClose[_i5].addEventListener(\"click\", closeOrderRemove);\n  }\n\n  ;\n  bgBg.addEventListener(\"click\", allCloseBtn);\n  var goClient = document.querySelectorAll(\".goClient\");\n\n  for (var _i6 = 0; _i6 < goClient.length; _i6++) {\n    var goClientGO = function goClientGO() {\n      location.href = \"/client\";\n    };\n\n    goClient[_i6].addEventListener(\"click\", goClientGO);\n  }\n\n  var plsbtn = document.querySelector(\"#plsbtn\");\n  var tbody = document.querySelector(\"#tbody\");\n\n  var plsbtnClick = function plsbtnClick() {\n    console.log(\"안녕하신가? 후후후후후\");\n    var newRow = tbody.insertRow();\n    var newCell1 = newRow.insertCell(0);\n    var newCell2 = newRow.insertCell(1);\n    var newCell3 = newRow.insertCell(2);\n    var newCell4 = newRow.insertCell(3);\n    var newCell5 = newRow.insertCell(4);\n    var newCell6 = newRow.insertCell(5);\n    var newCell7 = newRow.insertCell(6);\n    var newCell8 = newRow.insertCell(7);\n    var newCell9 = newRow.insertCell(8);\n    var newCell10 = newRow.insertCell(9);\n    var newCell11 = newRow.insertCell(10);\n    var newCell12 = newRow.insertCell(11);\n    var newCell13 = newRow.insertCell(12);\n    var newCell14 = newRow.insertCell(13);\n    var newCell15 = newRow.insertCell(14);\n    var newCell16 = newRow.insertCell(15);\n    var newCell17 = newRow.insertCell(16);\n    var newCell18 = newRow.insertCell(17);\n    var newCell19 = newRow.insertCell(18);\n    newCell19.classList = \"rightbutton\";\n    newCell1.innerHTML = '<button type=\"button\" class=\"trsBTN\"></button>';\n    newCell2.innerHTML = '<input type=\"text\" name=\"account\"><button type=\"button\" class=\"secbtn account\"></button>';\n    newCell3.innerHTML = '<input type=\"text\" name=\"modelNumber\"><button type=\"button\" class=\"secbtn modelNumber\"></button>';\n    newCell4.innerHTML = '<input type=\"text\" name=\"manufacturer\"><button type=\"button\" class=\"secbtn manufacturer\"></button>';\n    newCell5.innerHTML = '<select name=\"material\" id=\"gramBox\"><option value=\"\"></option><option value=\"10K\">10K</option><option value=\"14K\">14K</option><option value=\"18K\">18K</option><option value=\"22K\">22K</option><option value=\"순금-995\">순금-995</option><option value=\"순금-999\">순금-999</option><option value=\"실버\">실버</option><option value=\"PT\">PT</option><option value=\"기타\">기타</option></select>';\n    newCell6.innerHTML = '<select name=\"color\" id=\"color\"><option value=\"\"></option><option value=\"G\">G</option><option value=\"G/B\">G/B</option><option value=\"G/P\">G/P</option><option value=\"G/R/W\">G/R/W</option><option value=\"G/W\">G/W</option><option value=\"P\">P</option><option value=\"P/W\">P/W</option><option value=\"P/블랙도금\">P/블랙도금</option><option value=\"W\">W</option><option value=\"W/B\">W/B</option><option value=\"W/G\">W/G</option><option value=\"W/P\">W/P</option><option value=\"블랙\">블랙</option></select>';\n    newCell7.innerHTML = '<input type=\"number\" name=\"quantity\">';\n    newCell8.innerHTML = '<input type=\"number\" name=\"basicWage\">';\n    newCell9.innerHTML = '<input type=\"number\" name=\"additionWage\">';\n    newCell10.innerHTML = '<input type=\"number\" name=\"stoneWage1\">';\n    newCell11.innerHTML = '<input type=\"number\" name=\"stoneWage2\">';\n    newCell12.innerHTML = '<input type=\"number\" name=\"stoneQuantity\">';\n    newCell13.innerHTML = '<input type=\"number\" name=\"stoneQuantity2\">';\n    newCell14.innerHTML = '<input type=\"number\" name=\"stoneWeight3\">';\n    newCell15.innerHTML = '<input type=\"text\" name=\"stoneName\">';\n    newCell16.innerHTML = '<input type=\"text\" name=\"stoneName2\">';\n    newCell17.innerHTML = '<input type=\"text\" name=\"size\">';\n    newCell18.innerHTML = '<input type=\"text\" name=\"description\">';\n    newCell19.innerHTML = '<input type=\"text\" class=\"cldbox1111\" autocomplete=\"off\" disabled><div class=\"calinder2\">';\n  };\n\n  plsbtn.addEventListener(\"click\", plsbtnClick);\n  window.plsbtnClick = plsbtnClick;\n  var formPOST = document.querySelector(\"#formPOST\");\n\n  var submitPOST = function submitPOST() {\n    // event.preventDefault();\n    var trLength = document.querySelectorAll(\"#tbody tr\");\n    console.log(\"이거\", trLength);\n    typeinput = '<input name=\"dbtype\" style=\"display: none\" type=\"text\" value=\"repair\">';\n    lengthinput = '<input name=\"lengthset\" style=\"display: none\" type=\"Number\" value=\"' + trLength.length + '\">';\n    formPOST.insertAdjacentHTML('beforeEnd', lengthinput);\n    formPOST.insertAdjacentHTML('beforeEnd', typeinput);\n  };\n\n  formPOST.addEventListener(\"submit\", submitPOST); // window.submitPost = submitPost;\n\n  var calDeta = document.querySelector(\"#calDeta\");\n  var cldbox1 = document.getElementsByClassName(\"cldbox1111\");\n  var cldbox = document.querySelector(\"#cldbox\");\n  var today = new Date();\n  var KRDay = today.toLocaleDateString('ko-KR');\n  calDeta.value = KRDay;\n  console.log(cldbox1);\n\n  var inputDisabledOff = function inputDisabledOff() {\n    // event.preventDefault();\n    for (var _i7 = 0; _i7 < cldbox1.length; _i7++) {\n      cldbox1[_i7].disabled = false;\n    }\n  };\n\n  formPOST.addEventListener(\"click\", inputDisabledOff);\n  var tomorrow = new Date(today.setDate(today.getDate() + 7));\n  cldbox.value = tomorrow.toLocaleDateString('ko-KR');\n  var cldboxval = cldbox.value;\n\n  for (var _i8 = 0; _i8 < cldbox1.length; _i8++) {\n    cldbox1[_i8].value = cldboxval;\n  }\n\n  $(function () {\n    ////// jQ 시작\n    $.datepicker.setDefaults({\n      dateFormat: 'yy. m. d.',\n      prevText: '이전 달',\n      nextText: '다음 달',\n      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],\n      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],\n      dayNames: ['일', '월', '화', '수', '목', '금', '토'],\n      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],\n      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],\n      showMonthAfterYear: true,\n      yearSuffix: '년'\n    });\n    $('.ui-datepicker ').css({\n      \"margin-left\": \"141px\",\n      \"margin-top\": \"-223px\"\n    }); //달력(calendar) 위치\n    // $(function () {\n    // });\n\n    $(\"#calDeta\").datepicker({\n      beforeShow: function beforeShow(input, inst) {\n        var offset = $(input).offset();\n        window.setTimeout(function () {\n          $(inst.dpDiv).css({\n            \"top\": offset.top - 70 + \"px\"\n          });\n        }, 1); ///setTimeout\n      } /// beforeShow\n\n    }); /// datepicker\n    // $(\".cldbox1111\").datepicker(\"setDate\", \"+7d\");\n\n    $(\".cldbox1111\").datepicker({\n      showOn: \"button\",\n      buttonImage: \"../../../../static/images/calendar.png\",\n      beforeShow: function beforeShow(input, inst) {\n        var offset = $(input).offset();\n        var height = $(input).height();\n        window.setTimeout(function () {\n          $(inst.dpDiv).css({\n            \"top\": offset.top - 77 + \"px\"\n          });\n        }, 1); ///setTimeout\n      } /// beforeShow\n\n    }); // datepicker\n\n    $(\".cldbox\").datepicker({\n      showOn: \"button\",\n      buttonImage: \"../../../../static/images/calendar.png\",\n      beforeShow: function beforeShow(input, inst) {\n        var offset = $(input).offset();\n        var height = $(input).height();\n        window.setTimeout(function () {\n          $(inst.dpDiv).css({\n            \"top\": offset.top - 77 + \"px\"\n          });\n        }, 1); ///setTimeout\n      } /// beforeShow\n\n    }); // datepicker\n  }); //// jQ 끝\n}; /////// window.onload\n\n//# sourceURL=webpack://dd/./src/client/js/repairUpload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/repairUpload.js"]();
/******/ 	
/******/ })()
;
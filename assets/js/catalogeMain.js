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

eval("var cardBro = document.querySelector(\".card_bro\");\nvar tableBro = document.querySelector(\".table_bro\");\nvar on = \"on\";\nvar mainContainerCard = document.querySelector(\".mainContainerCard\");\nvar mainContTable = document.querySelector(\".mainContTable\");\nvar wageboxcent = document.querySelector(\"#wageboxcent\");\nvar offbutton = document.querySelector(\"#offbutton\");\nvar onbutton = document.querySelector(\"#onbutton\");\nvar wagebox = document.querySelector(\"#wagebox\");\nvar clickAndChack = document.querySelector(\".clickAndChack\");\nvar clickThis = document.getElementsByClassName('clickThis'); // console.log(\n//     cardBro,\n//     tableBro,\n//     on,\n//     mainContainerCard,\n//     mainContTable,\n// );\n\nvar cardBroBtnClick = function cardBroBtnClick() {\n  if (!cardBro.classList.contains(on)) {\n    cardBro.classList.toggle(on);\n    tableBro.classList.toggle(on);\n    mainContainerCard.classList.toggle(on);\n    mainContTable.classList.toggle(on);\n    clickAndChack.classList.toggle(\"off\");\n  }\n};\n\nvar tableBroBtnClick = function tableBroBtnClick() {\n  if (!tableBro.classList.contains(on)) {\n    cardBro.classList.toggle(on);\n    tableBro.classList.toggle(on);\n    mainContainerCard.classList.toggle(on);\n    mainContTable.classList.toggle(on);\n    clickAndChack.classList.toggle(\"off\");\n  }\n};\n\ncardBro.addEventListener(\"click\", cardBroBtnClick);\ntableBro.addEventListener(\"click\", tableBroBtnClick); // 체크박스 체크가 있을시에만 공임변경창 나오게하기\n\nfor (var i = 0; i < clickThis.length; i++) {\n  var checkedTrueFalse = function checkedTrueFalse(e) {\n    // console.log(clickThis[i].value);\n    console.log(e.target.checked); // console.log(e, \"이거슨\");\n\n    if (e.target.checked) {\n      //    console.log(clickThis.value.find(e.target.value));\n      var wageBoxOnOff = function wageBoxOnOff() {\n        wagebox.classList.toggle(\"on\");\n        console.log(\"hihi\"); // if(e.target.value === clickThis[i].value){\n        // }\n      };\n\n      offbutton.addEventListener(\"click\", wageBoxOnOff);\n      onbutton.addEventListener(\"click\", wageBoxOnOff);\n      wageboxcent.addEventListener(\"click\", wageBoxOnOff);\n    }\n\n    console.log(\"hi\");\n  }; // console.log(clickThis.length);\n\n\n  clickThis[i].addEventListener(\"click\", checkedTrueFalse);\n}\n\nvar checkThisAll = function checkThisAll() {\n  // console.log(\"누름\");\n  if (clickAndChack.classList.contains(\"on\") === false) {\n    clickAndChack.classList.toggle(\"on\");\n\n    for (var _i = 0; _i < clickThis.length; _i++) {\n      clickThis[_i].checked = true;\n    }\n  } else {\n    // console.log(\"안녕?\")\n    clickAndChack.classList.toggle(\"on\");\n\n    for (var _i2 = 0; _i2 < clickThis.length; _i2++) {\n      clickThis[_i2].checked = false;\n    }\n  }\n};\n\nclickAndChack.addEventListener(\"click\", checkThisAll);\nvar ageBoxButton = document.querySelectorAll(\".ageBox button\");\nvar ageConter = [];\n\nfor (var _i3 = 0; _i3 < ageBoxButton.length; _i3++) {\n  var ageButtonClickOnOff = function ageButtonClickOnOff(e) {\n    if (!e.target.classList.contains(\"on\")) {\n      e.target.classList.add(\"on\");\n      ageConter.push(e.target.value);\n      console.log(ageConter);\n    } else {\n      e.target.classList.remove(\"on\");\n      ageConter.splice(ageConter.indexOf(e.target.value), 1);\n      console.log(ageConter);\n    }\n  };\n\n  ageBoxButton[_i3].addEventListener(\"click\", ageButtonClickOnOff);\n}\n\n; /////// for문\n\nvar necklaceBtn = document.querySelector(\"#necklace\");\nvar earringBtn = document.querySelector(\"#earring\");\nvar braceletBtn = document.querySelector(\"#bracelet\");\nvar ankletBtn = document.querySelector(\"#anklet\");\nvar ringBtn = document.querySelector(\"#ring\");\nvar etcBtn = document.querySelector(\"#etc\");\nvar necklaceSt = document.querySelector(\"#necklaceSt\");\nvar earringSt = document.querySelector(\"#earringSt\");\nvar braceletSt = document.querySelector(\"#braceletSt\");\nvar ankletSt = document.querySelector(\"#ankletSt\");\nvar ringSt = document.querySelector(\"#ringSt\");\nvar etcSt = document.querySelector(\"#etcSt\");\nvar styleBox = document.querySelectorAll(\".styleBox\");\nvar styleBoxButton = document.querySelectorAll(\".styleBox button\"); // const styleOnBoxButton = document.querySelectorAll(\".styleBox.on button\");\n\nvar partConter = [];\nvar styleConter = [];\n\nvar neckOn = function neckOn() {\n  for (var _i4 = 0; _i4 < styleBoxButton.length; _i4++) {\n    if (necklaceBtn.classList.contains(\"on\")) {\n      necklaceSt.classList.add(\"on\");\n      earringSt.classList.remove(\"on\");\n      braceletSt.classList.remove(\"on\");\n      ankletSt.classList.remove(\"on\");\n      ringSt.classList.remove(\"on\");\n      etcSt.classList.remove(\"on\");\n\n      styleBoxButton[_i4].classList.remove(\"on\");\n\n      styleConter = [];\n    } else {\n      necklaceSt.classList.remove(\"on\");\n\n      styleBoxButton[_i4].classList.remove(\"on\");\n\n      styleConter = [];\n    }\n  }\n\n  ; ////////for\n};\n\nvar earringOn = function earringOn() {\n  for (var _i5 = 0; _i5 < styleBoxButton.length; _i5++) {\n    if (earringBtn.classList.contains(\"on\")) {\n      earringSt.classList.add(\"on\");\n      necklaceSt.classList.remove(\"on\");\n      braceletSt.classList.remove(\"on\");\n      ankletSt.classList.remove(\"on\");\n      ringSt.classList.remove(\"on\");\n      etcSt.classList.remove(\"on\");\n\n      styleBoxButton[_i5].classList.remove(\"on\");\n\n      styleConter = [];\n    } else {\n      earringSt.classList.remove(\"on\");\n\n      styleBoxButton[_i5].classList.remove(\"on\");\n\n      styleConter = [];\n    }\n  }\n\n  ; ////////for\n};\n\nvar bracelOn = function bracelOn() {\n  for (var _i6 = 0; _i6 < styleBoxButton.length; _i6++) {\n    if (braceletBtn.classList.contains(\"on\")) {\n      braceletSt.classList.add(\"on\");\n      earringSt.classList.remove(\"on\");\n      necklaceSt.classList.remove(\"on\");\n      ankletSt.classList.remove(\"on\");\n      ringSt.classList.remove(\"on\");\n      etcSt.classList.remove(\"on\");\n\n      styleBoxButton[_i6].classList.remove(\"on\");\n\n      styleConter = [];\n    } else {\n      braceletSt.classList.remove(\"on\");\n\n      styleBoxButton[_i6].classList.remove(\"on\");\n\n      styleConter = [];\n    }\n  }\n\n  ; ////////for\n};\n\nvar ankletOn = function ankletOn() {\n  for (var _i7 = 0; _i7 < styleBoxButton.length; _i7++) {\n    if (ankletBtn.classList.contains(\"on\")) {\n      ankletSt.classList.add(\"on\");\n      earringSt.classList.remove(\"on\");\n      braceletSt.classList.remove(\"on\");\n      necklaceSt.classList.remove(\"on\");\n      ringSt.classList.remove(\"on\");\n      etcSt.classList.remove(\"on\");\n\n      styleBoxButton[_i7].classList.remove(\"on\");\n\n      styleConter = [];\n    } else {\n      ankletSt.classList.remove(\"on\");\n\n      styleBoxButton[_i7].classList.remove(\"on\");\n\n      styleConter = [];\n    }\n  }\n\n  ; //////for\n};\n\nvar ringOn = function ringOn() {\n  for (var _i8 = 0; _i8 < styleBoxButton.length; _i8++) {\n    if (ringBtn.classList.contains(\"on\")) {\n      ringSt.classList.add(\"on\");\n      earringSt.classList.remove(\"on\");\n      braceletSt.classList.remove(\"on\");\n      ankletSt.classList.remove(\"on\");\n      necklaceSt.classList.remove(\"on\");\n      etcSt.classList.remove(\"on\");\n\n      styleBoxButton[_i8].classList.remove(\"on\");\n\n      styleConter = [];\n    } else {\n      ringSt.classList.remove(\"on\");\n\n      styleBoxButton[_i8].classList.remove(\"on\");\n\n      styleConter = [];\n    }\n  }\n\n  ; /////////for\n};\n\nvar etcOn = function etcOn() {\n  for (var _i9 = 0; _i9 < styleBoxButton.length; _i9++) {\n    if (etcBtn.classList.contains(\"on\")) {\n      etcSt.classList.add(\"on\");\n      earringSt.classList.remove(\"on\");\n      braceletSt.classList.remove(\"on\");\n      ankletSt.classList.remove(\"on\");\n      ringSt.classList.remove(\"on\");\n      necklaceSt.classList.remove(\"on\");\n\n      styleBoxButton[_i9].classList.remove(\"on\");\n\n      styleConter = [];\n    } else {\n      etcSt.classList.remove(\"on\");\n\n      styleBoxButton[_i9].classList.remove(\"on\");\n\n      styleConter = [];\n    }\n  }\n\n  ; //////// for\n};\n\nvar necklaceBtnClick = function necklaceBtnClick(e) {\n  if (!e.target.classList.contains(\"on\")) {\n    e.target.classList.add(\"on\");\n    earringBtn.classList.remove(\"on\");\n    braceletBtn.classList.remove(\"on\");\n    ankletBtn.classList.remove(\"on\");\n    ringBtn.classList.remove(\"on\");\n    etcBtn.classList.remove(\"on\");\n    partConter = [];\n    partConter.push(e.target.value);\n    console.log(partConter);\n  }\n\n  neckOn();\n};\n\nvar earringBtnClick = function earringBtnClick(e) {\n  if (!e.target.classList.contains(\"on\")) {\n    e.target.classList.add(\"on\");\n    necklaceBtn.classList.remove(\"on\");\n    braceletBtn.classList.remove(\"on\");\n    ankletBtn.classList.remove(\"on\");\n    ringBtn.classList.remove(\"on\");\n    etcBtn.classList.remove(\"on\");\n    partConter = [];\n    partConter.push(e.target.value);\n    console.log(partConter);\n  }\n\n  earringOn();\n};\n\nvar braceletBtnClick = function braceletBtnClick(e) {\n  if (!e.target.classList.contains(\"on\")) {\n    e.target.classList.add(\"on\");\n    earringBtn.classList.remove(\"on\");\n    necklaceBtn.classList.remove(\"on\");\n    ankletBtn.classList.remove(\"on\");\n    ringBtn.classList.remove(\"on\");\n    etcBtn.classList.remove(\"on\");\n    partConter = [];\n    partConter.push(e.target.value);\n    console.log(partConter);\n  }\n\n  bracelOn();\n};\n\nvar ankletBtnClick = function ankletBtnClick(e) {\n  if (!e.target.classList.contains(\"on\")) {\n    e.target.classList.add(\"on\");\n    earringBtn.classList.remove(\"on\");\n    braceletBtn.classList.remove(\"on\");\n    necklaceBtn.classList.remove(\"on\");\n    ringBtn.classList.remove(\"on\");\n    etcBtn.classList.remove(\"on\");\n    partConter = [];\n    partConter.push(e.target.value);\n    console.log(partConter);\n  }\n\n  ankletOn();\n};\n\nvar ringBtnClick = function ringBtnClick(e) {\n  if (!e.target.classList.contains(\"on\")) {\n    e.target.classList.add(\"on\");\n    earringBtn.classList.remove(\"on\");\n    braceletBtn.classList.remove(\"on\");\n    ankletBtn.classList.remove(\"on\");\n    necklaceBtn.classList.remove(\"on\");\n    etcBtn.classList.remove(\"on\");\n    partConter = [];\n    partConter.push(e.target.value);\n    console.log(partConter);\n  }\n\n  ringOn();\n};\n\nvar etcBtnClick = function etcBtnClick(e) {\n  if (!e.target.classList.contains(\"on\")) {\n    e.target.classList.add(\"on\");\n    earringBtn.classList.remove(\"on\");\n    braceletBtn.classList.remove(\"on\");\n    ankletBtn.classList.remove(\"on\");\n    ringBtn.classList.remove(\"on\");\n    necklaceBtn.classList.remove(\"on\");\n    partConter = [];\n    partConter.push(e.target.value);\n    console.log(partConter);\n  }\n\n  etcOn();\n};\n\nnecklaceBtn.addEventListener(\"click\", necklaceBtnClick);\nearringBtn.addEventListener(\"click\", earringBtnClick);\nbraceletBtn.addEventListener(\"click\", braceletBtnClick);\nankletBtn.addEventListener(\"click\", ankletBtnClick);\nringBtn.addEventListener(\"click\", ringBtnClick);\netcBtn.addEventListener(\"click\", etcBtnClick);\n\nfor (var _i10 = 0; _i10 < styleBoxButton.length; _i10++) {\n  var styleBtnOnOff = function styleBtnOnOff(e) {\n    if (!e.target.classList.contains(\"on\")) {\n      // console.log(\"안녕하세요\");\n      e.target.classList.add(\"on\");\n      styleConter.push(e.target.value);\n      console.log(styleConter);\n    } else {\n      e.target.classList.remove(\"on\");\n      styleConter.splice(styleConter.indexOf(e.target.value), 1);\n      console.log(styleConter); // console.log(\"삭제한다\");\n      // styleBoxButton[i].classList.remove(\"on\");\n    }\n  }; /////////styleBtnOnOff\n\n\n  styleBoxButton[_i10].addEventListener(\"click\", styleBtnOnOff);\n}\n\n; ///////// fot문///////////////////////\n\nvar materialBtn = document.querySelectorAll(\".materialBox button\");\nvar weightBox = document.querySelector(\".weightBox\");\nconsole.log(materialBtn);\nvar materialConter = [];\n\nvar weightBoxOn = function weightBoxOn() {\n  weightBox.classList.add(\"on\");\n};\n\nvar weightBoxOff = function weightBoxOff() {\n  weightBox.classList.remove(\"on\");\n};\n\nfor (var _i11 = 0; _i11 < materialBtn.length; _i11++) {\n  var materialOnOff = function materialOnOff(e) {\n    if (!e.target.classList.contains(\"on\")) {\n      e.target.classList.add(\"on\");\n      materialConter.push(e.target.value);\n      console.log(materialConter);\n\n      if (materialBtn[5].classList.contains(\"on\") || materialBtn[6].classList.contains(\"on\")) {\n        weightBoxOn();\n      }\n    } else {\n      e.target.classList.remove(\"on\");\n      materialConter.splice(materialConter.indexOf(e.target.value), 1);\n      console.log(materialConter);\n\n      if (!materialBtn[5].classList.contains(\"on\") || !materialBtn[6].classList.contains(\"on\")) {\n        weightBoxOff();\n      }\n    }\n  };\n\n  materialBtn[_i11].addEventListener(\"click\", materialOnOff);\n}\n\n; /////// for 문\n\nvar weightBtn = document.querySelectorAll(\".weightBox button\");\nconsole.log(weightBtn);\nvar weightConter = [];\n\nfor (var _i12 = 0; _i12 < weightBtn.length; _i12++) {\n  var weightBtnClick = function weightBtnClick(e) {\n    if (!e.target.classList.contains(\"on\")) {\n      e.target.classList.add(\"on\");\n      weightConter.push(e.target.value);\n      console.log(weightConter);\n    } else {\n      e.target.classList.remove(\"on\");\n      weightConter.splice(weightConter.indexOf(e.target.value), 1);\n      console.log(weightConter);\n    }\n  };\n\n  weightBtn[_i12].addEventListener(\"click\", weightBtnClick);\n}\n\n; //////for문\n\nvar filterButton = document.querySelector(\"#filterButton\");\nvar mainck = document.querySelector(\".mainck\");\nconsole.log(filterButton);\n\nvar filterOnOff = function filterOnOff() {\n  mainck.classList.toggle(\"on\");\n};\n\nfilterButton.addEventListener(\"click\", filterOnOff);\n\n//# sourceURL=webpack://dd/./src/client/js/catalogeMain.js?");

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
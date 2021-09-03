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

/***/ "./src/client/js/home1.js":
/*!********************************!*\
  !*** ./src/client/js/home1.js ***!
  \********************************/
/***/ (() => {

eval("var ham = document.querySelector(\".ham\");\nvar hammenu = document.querySelector(\".mbmenu\");\nvar hamlist = document.querySelector(\".mbmenu li\");\nvar hamListAll = document.querySelectorAll(\".mbmenu li\");\n\nfunction moveMenu() {\n  console.log(hamlist);\n  ham.classList.toggle(\"on\");\n  hammenu.classList.toggle(\"on\");\n  console.log(hamlist);\n} //console.log(hamListAll);\n// 안됌;;\n\n\nfunction moveMenu2() {\n  console.log(\"눌림\");\n  ham.classList.toggle(\"on\");\n  hammenu.classList.toggle(\"on\");\n}\n\nham.addEventListener(\"click\", moveMenu);\n\nfor (var i = 0; i < hamListAll.length; i++) {\n  hamListAll[i].addEventListener(\"click\", moveMenu2);\n} // 제고관리 클릭시 on되면서 박스 생성(아직 안함)\n\n\n$('.autoplay1').slick({\n  slidesToShow: 1,\n  slidesToScroll: 1,\n  autoplay: true,\n  autoplaySpeed: 5000,\n  arrows: true,\n  prevArrow: \"<button type='button' class='slick-prev'><i class='las la-angle-left'></i></button>\",\n  nextArrow: \"<button type='button' class='slick-next'><i class='las la-angle-right'></i></button>\",\n  dots: true,\n  dotsClass: \"slick-dots\",\n  responsive: [{\n    // 반응형 구현 옵션\n    breakpoint: 950,\n    settings: {}\n  }, {\n    breakpoint: 665,\n    settings: {\n      dots: false\n    }\n  }]\n});\n$('.autoplay').slick({\n  slidesToShow: 3,\n  slidesToScroll: 1,\n  autoplay: true,\n  autoplaySpeed: 2000,\n  arrows: false,\n  responsive: [{\n    // 반응형 구현 옵션\n    breakpoint: 950,\n    settings: {\n      slidesToShow: 2\n    }\n  }, {\n    breakpoint: 665,\n    settings: {\n      slidesToShow: 1\n    }\n  }]\n});\n$('.autoplay2').slick({\n  slidesToShow: 3,\n  slidesToScroll: 1,\n  autoplay: true,\n  autoplaySpeed: 4000,\n  arrows: false,\n  responsive: [{\n    // 반응형 구현 옵션\n    breakpoint: 950,\n    settings: {\n      slidesToShow: 2\n    }\n  }, {\n    breakpoint: 665,\n    settings: {\n      slidesToShow: 1\n    }\n  }]\n}); //   $('.autoplay').slick({\n//     slidesToShow: 3,\n//     slidesToScroll: 1,\n//     autoplay: true,\n//     autoplaySpeed: 2000,\n// });\n///////////// 어렵다. 표 //////////////////\n\n//# sourceURL=webpack://dd/./src/client/js/home1.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/home1.js"]();
/******/ 	
/******/ })()
;
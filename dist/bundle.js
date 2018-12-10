/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function () {\r\n  \"use strict\";\r\n\r\n  let tabs = __webpack_require__(/*! ./parts/tabs.js */ \"./src/parts/tabs.js\"),\r\n  timer = __webpack_require__(/*! ./parts/timer.js */ \"./src/parts/timer.js\"),\r\n  calc = __webpack_require__(/*! ./parts/calc.js */ \"./src/parts/calc.js\"),\r\n  slider = __webpack_require__(/*! ./parts/slider.js */ \"./src/parts/slider.js\"),\r\n  modal = __webpack_require__(/*! ./parts/modal.js */ \"./src/parts/modal.js\"),\r\n  form = __webpack_require__(/*! ./parts/form.js */ \"./src/parts/form.js\");\r\n\r\n  tabs();\r\n  timer();\r\n  calc();\r\n  slider();\r\n  modal();\r\n  form();\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction calc(){\r\n  let persons = document.querySelectorAll('.counter-block-input')[0],\r\n    restDays = document.querySelectorAll('.counter-block-input')[1],\r\n    place = document.getElementById('select'),\r\n    totalValue = document.getElementById('total'),\r\n    personsSum = 0,\r\n    daysSum = 0,\r\n    total = 0;\r\n  totalValue.innerHTML = 0;\r\n\r\n  persons.addEventListener('change', function () {\r\n    personsSum = +this.value;\r\n    total = (daysSum + personsSum) * 4000;\r\n\r\n    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {\r\n      totalValue.innerHTML = 0;\r\n    } else {\r\n      let a = total;\r\n      totalValue.innerHTML = a * place.options[place.selectedIndex].value;\r\n    }\r\n  });\r\n\r\n  restDays.addEventListener('change', function () {\r\n    daysSum = +this.value;\r\n    total = (daysSum + personsSum) * 4000;\r\n\r\n    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {\r\n      totalValue.innerHTML = 0;\r\n    } else {\r\n      let a = total;\r\n      totalValue.innerHTML = a * place.options[place.selectedIndex].value;\r\n    }\r\n  });\r\n\r\n  place.addEventListener('change', function () {\r\n    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {\r\n      totalValue.innerHTML = 0;\r\n    } else {\r\n      let a = total;\r\n      totalValue.innerHTML = a * this.options[this.selectedIndex].value;\r\n    }\r\n  });\r\n\r\n  persons.addEventListener('keypress', (e) => {\r\n    if (!/\\d/.test(e.key)) {\r\n      e.preventDefault();\r\n    }\r\n  });\r\n\r\n  restDays.addEventListener('keypress', (e) => {\r\n    if (!/\\d/.test(e.key)) {\r\n      e.preventDefault();\r\n    }\r\n  });\r\n\r\n\r\n}\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/parts/calc.js?");

/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nfunction form() {\r\n  let message = {\r\n    loadding: 'Загррузка...',\r\n    soccess: 'Спасибо! Скоро мы с вами свяжемся!',\r\n    failure: 'Что-то пошло не так...'\r\n  };\r\n\r\n  let form = document.querySelector('.main-form'),\r\n    formF = document.querySelector('#form'),\r\n    input = form.getElementsByTagName('input'),\r\n    statusMessege = document.createElement('div'),\r\n    inputFormB = formF.getElementsByTagName('input');\r\n    statusMessege.classList.add('status');\r\n    \r\n\r\n  input[0].addEventListener('keypress', (e) => {\r\n    if (!/\\d/.test(e.key) && !/\\+/.test(e.key)) {\r\n      e.preventDefault();\r\n    }\r\n  });\r\n  inputFormB[1].addEventListener('keypress', (e) => {\r\n    if (!/\\d/.test(e.key) && !/\\+/.test(e.key)) {\r\n      e.preventDefault();\r\n    }\r\n  });\r\n\r\n  function sendForm(a) {\r\n    a.addEventListener('submit', function (event) {\r\n      event.preventDefault();\r\n      a.appendChild(statusMessege);\r\n      let formData = new FormData(a);\r\n\r\n      function postData(data) {\r\n        return new Promise(function (resolve, reject) {\r\n          let request = new XMLHttpRequest();\r\n          request.open('POST', 'server.php');\r\n          request.setRequestHeader('Content-Type', 'application/x-www-form-urrlencoded');\r\n\r\n          request.onreadystatechange = function () {\r\n            if (request.readyState < 4) {\r\n              //\r\n              resolve();\r\n            } else if (request.readyState === 4 && request.status == 200) {\r\n              // \r\n              resolve();\r\n            } else {\r\n              // \r\n              reject();\r\n            }\r\n          };\r\n          request.send(formData);\r\n        });\r\n      }\r\n\r\n      function clearInput() {\r\n        for (let i = 0; i < input.length; i++) {\r\n          input[i].value = '';\r\n        }\r\n        setTimeout(function(){\r\n          statusMessege.innerHTML = '';\r\n        }, 2000);\r\n      }\r\n      \r\n\r\n      postData(formData)\r\n        .then(() => statusMessege.innerHTML = message.loadding)\r\n        .then(() => statusMessege.innerHTML = message.soccess)\r\n        .catch(() => statusMessege.innerHTML = message.failure)\r\n        .then(clearInput);\r\n    });\r\n  }\r\n  sendForm(form);\r\n  sendForm(formF);\r\n\r\n}\r\n\r\nmodule.exports = form;\n\n//# sourceURL=webpack:///./src/parts/form.js?");

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nfunction modal() {\r\n  //вызываем поп ап\r\n  let more = document.querySelector('.more'),\r\n    overlay = document.querySelector('.overlay'),\r\n    close = document.querySelector('.popup-close'),\r\n    btn = document.querySelectorAll('.description-btn');\r\n\r\n  more.addEventListener('click', function () {\r\n    overlay.style.display = 'block';\r\n    this.classList.add('more-splash');\r\n    document.body.style.overflow = 'hidden';\r\n  });\r\n\r\n  close.addEventListener('click', () => {\r\n    overlay.style.display = 'none';\r\n    more.classList.remove('more-splash');\r\n    document.body.style.overflow = '';\r\n\r\n  });\r\n\r\n  for (let i = 0; i < btn.length; i++) {\r\n    btn[i].addEventListener('click', function () {\r\n      overlay.style.display = 'block';\r\n      this.classList.add('more-splash');\r\n      document.body.style.overflow = 'hidden';\r\n    });\r\n  }\r\n  //первая попытка\r\n  // for (let i in btn){\r\n  //   btn[i].addEventListener('click',  () => {\r\n  //     overlay.style.display = 'block';\r\n  //     this.classList.add('more-splash');\r\n  //     document.body.style.overflow = 'hidden';\r\n  //   });\r\n  // }\r\n\r\n  //2я попытка\r\n  // for (let i of btn) {\r\n  //   i.addEventListener('ckick', () => {\r\n  //     console.log('done');\r\n  //   });\r\n\r\n  // }\r\n}\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/parts/modal.js?");

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nfunction slider(){\r\n  let slideIndex = 1, //первый слайд\r\n\r\n    slides = document.querySelectorAll('.slider-item'),\r\n    prev = document.querySelector('.prev'),\r\n    next = document.querySelector('.next'),\r\n    dotsWrap = document.querySelector('.slider-dots'),\r\n    dots = document.querySelectorAll('.dot');\r\n  //функция скрытия все слайды, и показывала только один слайд. \r\n  //можно в аргумент передавать номер слайда, который будет показываться на странице\r\n  showSlides(slideIndex);\r\n\r\n  function showSlides(n) {\r\n    if (n > slides.length) {\r\n      slideIndex = 1;\r\n    }\r\n    if (n < 1) {\r\n      slideIndex = slides.length;\r\n    }\r\n    slides.forEach((item) => item.style.display = 'none');\r\n\r\n    // for (let i = 0; i < slides.length; i++) {\r\n    //   slides[i].style.display = 'none';\r\n    // }\r\n    dots.forEach((item) => item.classList.remove('dot-active'));\r\n    slides[slideIndex - 1].style.display = 'block';\r\n    dots[slideIndex - 1].classList.add('dot-active');\r\n  }\r\n\r\n  function plusSlides(n) {\r\n    showSlides(slideIndex += n);\r\n  }\r\n\r\n  function currentSlide(n) {\r\n    showSlides(slideIndex = n);\r\n  }\r\n  prev.addEventListener('click', function () {\r\n    plusSlides(-1);\r\n  });\r\n\r\n  next.addEventListener('click', function () {\r\n    plusSlides(1);\r\n  });\r\n\r\n  dotsWrap.addEventListener('click', function (event) {\r\n    for (let i = 0; i < dots.length + 1; i++) {\r\n      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {\r\n        currentSlide(i);\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/parts/slider.js?");

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction tabs() {\r\n  let tab = document.querySelectorAll('.info-header-tab'),\r\n    info = document.querySelector('.info-header'),\r\n    tabContent = document.querySelectorAll('.info-tabcontent'),\r\n    btn = document.querySelectorAll('.description-btn');\r\n\r\n  // console.log(tab);\r\n  // console.log(info);\r\n  // console.log(tabContent);\r\n  // console.log(btn);\r\n\r\n\r\n  function hideTabContent(a) {\r\n    for (let i = a; i < tabContent.length; i++) {\r\n      tabContent[i].classList.remove('show');\r\n      tabContent[i].classList.add('hide');\r\n    }\r\n  }\r\n  hideTabContent(1);\r\n\r\n  function showTabContent(b) {\r\n    if (tabContent[b].classList.contains('hide')) {\r\n      tabContent[b].classList.remove('hide');\r\n      tabContent[b].classList.add('show');\r\n    }\r\n  }\r\n\r\n  info.addEventListener('click', function (event) {\r\n    let target = event.target;\r\n    if (target && target.classList.contains('info-header-tab')) {\r\n      for (let i = 0; i < tab.length; i++) {\r\n        if (target == tab[i]) {\r\n          hideTabContent(0);\r\n          showTabContent(i);\r\n          break;\r\n        }\r\n      }\r\n    }\r\n  });\r\n}\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/parts/tabs.js?");

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction timer(){\r\n  let deadLine = '2018-12-12';\r\n\r\n  function getTimeRemeining(endtime) {\r\n    let t = Date.parse(endtime) - Date.parse(new Date()), //разница между датами. кол-во миллисекун,\r\n      s = Math.floor((t / 1000) % 60).toString(),\r\n      m = Math.floor((t / 1000 / 60) % 60).toString(),\r\n      // h = Math.floor((t / (1000 * 60 * 60)));\r\n      h = Math.floor((t / 1000 / 60 / 60) % 24).toString();\r\n    // d = Math.floor(t / (1000 * 60 * 60 * 24));\r\n\r\n    return {\r\n      'total': t,\r\n      'h': h,\r\n      'm': m,\r\n      's': s,\r\n      // 'd': d\r\n    };\r\n\r\n  }\r\n\r\n  function setClock(id, endtime) {\r\n    let timer = document.getElementById(id),\r\n      // days = timer.querySelector('.days'),\r\n      hours = timer.querySelector('.hours'),\r\n      minutes = timer.querySelector('.minutes'),\r\n      seconds = timer.querySelector('.seconds'),\r\n      timeInterval = setInterval(updateClock, 1000);\r\n\r\n    function updateClock() {\r\n      let t = getTimeRemeining(endtime);\r\n      // days.textContent = t.d;\r\n      // console.log(t.h);\r\n      if (t.h.length < 2) {\r\n        hours.textContent = '0' + t.h;\r\n      } else {\r\n        hours.textContent = t.h;\r\n      }\r\n      if (t.m.length < 2) {\r\n        minutes.textContent = '0' + t.m;\r\n      } else {\r\n        minutes.textContent = t.m;\r\n      }\r\n      if (t.s.length < 2) {\r\n        seconds.textContent = '0' + t.s;\r\n      } else {\r\n        seconds.textContent = t.s;\r\n      }\r\n\r\n      if (t.total <= 0) {\r\n        clearInterval(timeInterval);\r\n        hours.textContent = '00';\r\n        minutes.textContent = '00';\r\n        seconds.textContent = '00';\r\n\r\n      }\r\n    }\r\n  }\r\n  setClock('timer', deadLine);\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/parts/timer.js?");

/***/ })

/******/ });
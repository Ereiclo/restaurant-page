/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/createElements.js");


function displayAbout(){

    let contentAbout = _createElements__WEBPACK_IMPORTED_MODULE_0__["default"].newDiv();

    contentAbout.classList.add('about');


    for(let i = 0; i < 500;++i){

        contentAbout.innerText += 'esto es la about';

    }


    return contentAbout;


}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAbout);

/***/ }),

/***/ "./src/createElements.js":
/*!*******************************!*\
  !*** ./src/createElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let element = (function(){


    function createElement(elemName){
        return document.createElement(elemName);
    }

    function  newDiv(){
        return createElement('div');
    }

    function newButton(){
        return createElement('button');
    }

    function newLi(){
        return createElement('li');
    }

    function newUl(){
        return createElement('ul');
    }

    function delElem(selector){
        document.querySelector(selector).remove();
    }



    return {newDiv,newButton,newLi,newUl,delElem};

})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/createElements.js");


function displayHome(){

    let contentHome = _createElements__WEBPACK_IMPORTED_MODULE_0__["default"].newDiv();

    contentHome.classList.add('home');


    for(let i = 0; i < 500;++i){

        contentHome.innerText += 'esto es la home';

    }


    return contentHome;


}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/createElements.js");


function displayMenu(){

    let contentMenu = _createElements__WEBPACK_IMPORTED_MODULE_0__["default"].newDiv();

    contentMenu.classList.add('.menu')


    for(let i = 0; i < 500;++i){

        contentMenu.innerText += 'esto es el menu';

    }


    return contentMenu;


}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/createElements.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");

 




function loadPage(){
    let createDisplayFunctions = [_home__WEBPACK_IMPORTED_MODULE_1__["default"],_menu__WEBPACK_IMPORTED_MODULE_2__["default"],_about__WEBPACK_IMPORTED_MODULE_3__["default"]];

    let content = document.querySelector('#content');
    let hero = _createElements__WEBPACK_IMPORTED_MODULE_0__["default"].newDiv();
    let displayContent = _createElements__WEBPACK_IMPORTED_MODULE_0__["default"].newDiv();

    hero.classList.add('hero');
    displayContent.classList.add('displayContent')
    content.appendChild(hero);
    content.appendChild(displayContent);

    let homeButton = _createElements__WEBPACK_IMPORTED_MODULE_0__["default"].newDiv();
    let menuButton = _createElements__WEBPACK_IMPORTED_MODULE_0__["default"].newDiv();
    let aboutButton = _createElements__WEBPACK_IMPORTED_MODULE_0__["default"].newDiv();


    homeButton.innerText = 'Home';
    homeButton.setAttribute('data-display',0);

    menuButton.innerText = 'Menu';
    menuButton.setAttribute('data-display',1);

    aboutButton.innerText = 'About';
    aboutButton.setAttribute('data-display',2);



    let buttonArray = [homeButton,menuButton,aboutButton];



    buttonArray.forEach((but) =>{
        let displayData = but.getAttribute('data-display');
        but.classList.add('button');
        hero.appendChild(but);

        but.addEventListener('click',(e)=>{
            _createElements__WEBPACK_IMPORTED_MODULE_0__["default"].delElem('.displayContent > div');
            let newDisplay = createDisplayFunctions[displayData]();
            displayContent.appendChild(newDisplay);

        });
    })



    let homeDisplay =  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    

    displayContent.appendChild(homeDisplay);



    


}


loadPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDOztBQUVBLHVCQUF1Qiw4REFBb0I7O0FBRTNDOzs7QUFHQSxtQkFBbUIsUUFBUTs7QUFFM0I7O0FBRUE7OztBQUdBOzs7QUFHQTs7O0FBR0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUN0QjNCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBLFlBQVk7O0FBRVosQ0FBQzs7QUFFRCxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ3NCOztBQUU1Qzs7QUFFQSxzQkFBc0IsOERBQW9COztBQUUxQzs7O0FBR0EsbUJBQW1CLFFBQVE7O0FBRTNCOztBQUVBOzs7QUFHQTs7O0FBR0E7OztBQUdBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ3RCa0I7O0FBRTVDOztBQUVBLHNCQUFzQiw4REFBb0I7O0FBRTFDOzs7QUFHQSxtQkFBbUIsUUFBUTs7QUFFM0I7O0FBRUE7OztBQUdBOzs7QUFHQTs7O0FBR0EsaUVBQWUsV0FBVzs7Ozs7O1VDdEIxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0w7QUFDRDtBQUNHOzs7QUFHbkM7QUFDQSxrQ0FBa0MsNkNBQVcsQ0FBQyw2Q0FBVyxDQUFDLDhDQUFZOztBQUV0RTtBQUNBLGVBQWUsOERBQWM7QUFDN0IseUJBQXlCLDhEQUFjOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsOERBQWM7QUFDbkMscUJBQXFCLDhEQUFjO0FBQ25DLHNCQUFzQiw4REFBYzs7O0FBR3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0RBQWU7QUFDM0I7QUFDQTs7QUFFQSxTQUFTO0FBQ1QsS0FBSzs7OztBQUlMLHVCQUF1QixpREFBVztBQUNsQzs7QUFFQTs7OztBQUlBOzs7QUFHQTs7O0FBR0EsVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudHMnXG5cbmZ1bmN0aW9uIGRpc3BsYXlBYm91dCgpe1xuXG4gICAgbGV0IGNvbnRlbnRBYm91dCA9IGNyZWF0ZUVsZW1lbnQubmV3RGl2KCk7XG5cbiAgICBjb250ZW50QWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcblxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDUwMDsrK2kpe1xuXG4gICAgICAgIGNvbnRlbnRBYm91dC5pbm5lclRleHQgKz0gJ2VzdG8gZXMgbGEgYWJvdXQnO1xuXG4gICAgfVxuXG5cbiAgICByZXR1cm4gY29udGVudEFib3V0O1xuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5QWJvdXQ7IiwibGV0IGVsZW1lbnQgPSAoZnVuY3Rpb24oKXtcblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtTmFtZSl7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1OYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAgbmV3RGl2KCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdCdXR0b24oKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0xpKCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1VsKCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbEVsZW0oc2VsZWN0b3Ipe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmUoKTtcbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIHtuZXdEaXYsbmV3QnV0dG9uLG5ld0xpLG5ld1VsLGRlbEVsZW19O1xuXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnQ7IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50cydcblxuZnVuY3Rpb24gZGlzcGxheUhvbWUoKXtcblxuICAgIGxldCBjb250ZW50SG9tZSA9IGNyZWF0ZUVsZW1lbnQubmV3RGl2KCk7XG5cbiAgICBjb250ZW50SG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1MDA7KytpKXtcblxuICAgICAgICBjb250ZW50SG9tZS5pbm5lclRleHQgKz0gJ2VzdG8gZXMgbGEgaG9tZSc7XG5cbiAgICB9XG5cblxuICAgIHJldHVybiBjb250ZW50SG9tZTtcblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhvbWU7IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50cydcblxuZnVuY3Rpb24gZGlzcGxheU1lbnUoKXtcblxuICAgIGxldCBjb250ZW50TWVudSA9IGNyZWF0ZUVsZW1lbnQubmV3RGl2KCk7XG5cbiAgICBjb250ZW50TWVudS5jbGFzc0xpc3QuYWRkKCcubWVudScpXG5cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1MDA7KytpKXtcblxuICAgICAgICBjb250ZW50TWVudS5pbm5lclRleHQgKz0gJ2VzdG8gZXMgZWwgbWVudSc7XG5cbiAgICB9XG5cblxuICAgIHJldHVybiBjb250ZW50TWVudTtcblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnRzJ1xuaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gJy4vaG9tZSc7IFxuaW1wb3J0IGRpc3BsYXlNZW51IGZyb20gJy4vbWVudSdcbmltcG9ydCBkaXNwbGF5QWJvdXQgZnJvbSAnLi9hYm91dCc7XG5cblxuZnVuY3Rpb24gbG9hZFBhZ2UoKXtcbiAgICBsZXQgY3JlYXRlRGlzcGxheUZ1bmN0aW9ucyA9IFtkaXNwbGF5SG9tZSxkaXNwbGF5TWVudSxkaXNwbGF5QWJvdXRdO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGxldCBoZXJvID0gZWxlbWVudC5uZXdEaXYoKTtcbiAgICBsZXQgZGlzcGxheUNvbnRlbnQgPSBlbGVtZW50Lm5ld0RpdigpO1xuXG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gICAgZGlzcGxheUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheUNvbnRlbnQnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGVudCk7XG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGVsZW1lbnQubmV3RGl2KCk7XG4gICAgbGV0IG1lbnVCdXR0b24gPSBlbGVtZW50Lm5ld0RpdigpO1xuICAgIGxldCBhYm91dEJ1dHRvbiA9IGVsZW1lbnQubmV3RGl2KCk7XG5cblxuICAgIGhvbWVCdXR0b24uaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICAgIGhvbWVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWRpc3BsYXknLDApO1xuXG4gICAgbWVudUJ1dHRvbi5pbm5lclRleHQgPSAnTWVudSc7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzcGxheScsMSk7XG5cbiAgICBhYm91dEJ1dHRvbi5pbm5lclRleHQgPSAnQWJvdXQnO1xuICAgIGFib3V0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5JywyKTtcblxuXG5cbiAgICBsZXQgYnV0dG9uQXJyYXkgPSBbaG9tZUJ1dHRvbixtZW51QnV0dG9uLGFib3V0QnV0dG9uXTtcblxuXG5cbiAgICBidXR0b25BcnJheS5mb3JFYWNoKChidXQpID0+e1xuICAgICAgICBsZXQgZGlzcGxheURhdGEgPSBidXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRpc3BsYXknKTtcbiAgICAgICAgYnV0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgICAgICBoZXJvLmFwcGVuZENoaWxkKGJ1dCk7XG5cbiAgICAgICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgICAgIGVsZW1lbnQuZGVsRWxlbSgnLmRpc3BsYXlDb250ZW50ID4gZGl2Jyk7XG4gICAgICAgICAgICBsZXQgbmV3RGlzcGxheSA9IGNyZWF0ZURpc3BsYXlGdW5jdGlvbnNbZGlzcGxheURhdGFdKCk7XG4gICAgICAgICAgICBkaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZChuZXdEaXNwbGF5KTtcblxuICAgICAgICB9KTtcbiAgICB9KVxuXG5cblxuICAgIGxldCBob21lRGlzcGxheSA9ICBkaXNwbGF5SG9tZSgpO1xuICAgIFxuXG4gICAgZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpc3BsYXkpO1xuXG5cblxuICAgIFxuXG5cbn1cblxuXG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
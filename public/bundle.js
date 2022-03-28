/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"recordCollection\": () => (/* binding */ recordCollection)\n/* harmony export */ });\nconst recordCollection = [\"Nirvana\", \"The Beastie Boys\", \"Sonic Youth\", \"Guided by Voices\"];\nconsole.log(\"This is the original record collection: \" + recordCollection);\nfor (let i = 0; i < recordCollection.length; i++) {\n    recordCollection[i] = recordCollection[i] + \"_copy\";\n}\nlet copy = recordCollection;\nconsole.log(\"This is a copy of the record collection: \" + copy);\nconsole.log(\"This is the original record collection after the copy has happened. OH NO!! It has MUTATED!: \" + recordCollection);\nlet recordCollection2 = [\"Belle and Sebastian\", \"Jeff Buckley\", \"Autechre\"];\nlet modifiedCollection = recordCollection2.map(function (element) {\n    return element + \"_copy\";\n});\nconsole.log(\"This is our original new record collection: \" + recordCollection2);\nconsole.log(\"This is the copy of the original array \" + modifiedCollection);\nconsole.log(\"This is the original record collection 2, before copying. It hasn't mutated: \" + recordCollection2);\n//Spread operator method of shallow copying \nlet recordCollection3 = [\"Beatles\", \"Phil Collins\", \"U2\"];\nlet recordCollection3Copy = [...recordCollection3];\nconsole.log(\"After changing some values \");\n//change values\nrecordCollection3[2] = \"Moloko\";\nrecordCollection3Copy[0] = \"Guided by Voices\";\nrecordCollection3;\nrecordCollection3Copy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQSxnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZV9vcGVuX3NvdXJjZS8uL3NyYy9pbmRleC50cz9lOTRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWNvcmRDb2xsZWN0aW9uID0gW1wiTmlydmFuYVwiLCBcIlRoZSBCZWFzdGllIEJveXNcIiwgXCJTb25pYyBZb3V0aFwiLCBcIkd1aWRlZCBieSBWb2ljZXNcIl07XG5jb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIG9yaWdpbmFsIHJlY29yZCBjb2xsZWN0aW9uOiBcIiArIHJlY29yZENvbGxlY3Rpb24pO1xuZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmRDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVjb3JkQ29sbGVjdGlvbltpXSA9IHJlY29yZENvbGxlY3Rpb25baV0gKyBcIl9jb3B5XCI7XG59XG5sZXQgY29weSA9IHJlY29yZENvbGxlY3Rpb247XG5jb25zb2xlLmxvZyhcIlRoaXMgaXMgYSBjb3B5IG9mIHRoZSByZWNvcmQgY29sbGVjdGlvbjogXCIgKyBjb3B5KTtcbmNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgb3JpZ2luYWwgcmVjb3JkIGNvbGxlY3Rpb24gYWZ0ZXIgdGhlIGNvcHkgaGFzIGhhcHBlbmVkLiBPSCBOTyEhIEl0IGhhcyBNVVRBVEVEITogXCIgKyByZWNvcmRDb2xsZWN0aW9uKTtcbmxldCByZWNvcmRDb2xsZWN0aW9uMiA9IFtcIkJlbGxlIGFuZCBTZWJhc3RpYW5cIiwgXCJKZWZmIEJ1Y2tsZXlcIiwgXCJBdXRlY2hyZVwiXTtcbmxldCBtb2RpZmllZENvbGxlY3Rpb24gPSByZWNvcmRDb2xsZWN0aW9uMi5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCArIFwiX2NvcHlcIjtcbn0pO1xuY29uc29sZS5sb2coXCJUaGlzIGlzIG91ciBvcmlnaW5hbCBuZXcgcmVjb3JkIGNvbGxlY3Rpb246IFwiICsgcmVjb3JkQ29sbGVjdGlvbjIpO1xuY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBjb3B5IG9mIHRoZSBvcmlnaW5hbCBhcnJheSBcIiArIG1vZGlmaWVkQ29sbGVjdGlvbik7XG5jb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIG9yaWdpbmFsIHJlY29yZCBjb2xsZWN0aW9uIDIsIGJlZm9yZSBjb3B5aW5nLiBJdCBoYXNuJ3QgbXV0YXRlZDogXCIgKyByZWNvcmRDb2xsZWN0aW9uMik7XG4vL1NwcmVhZCBvcGVyYXRvciBtZXRob2Qgb2Ygc2hhbGxvdyBjb3B5aW5nIFxubGV0IHJlY29yZENvbGxlY3Rpb24zID0gW1wiQmVhdGxlc1wiLCBcIlBoaWwgQ29sbGluc1wiLCBcIlUyXCJdO1xubGV0IHJlY29yZENvbGxlY3Rpb24zQ29weSA9IFsuLi5yZWNvcmRDb2xsZWN0aW9uM107XG5jb25zb2xlLmxvZyhcIkFmdGVyIGNoYW5naW5nIHNvbWUgdmFsdWVzIFwiKTtcbi8vY2hhbmdlIHZhbHVlc1xucmVjb3JkQ29sbGVjdGlvbjNbMl0gPSBcIk1vbG9rb1wiO1xucmVjb3JkQ29sbGVjdGlvbjNDb3B5WzBdID0gXCJHdWlkZWQgYnkgVm9pY2VzXCI7XG5yZWNvcmRDb2xsZWN0aW9uMztcbnJlY29yZENvbGxlY3Rpb24zQ29weTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
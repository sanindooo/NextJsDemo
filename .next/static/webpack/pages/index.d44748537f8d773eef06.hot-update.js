webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ \"./node_modules/next/dist/next-server/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcz84MzhhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFGQUE2QiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar _jsxFileName = \"/Users/sanindo/Desktop/Files/courses/react/code/06-onwards-to-a-bigger-project-starting-project/pages/index.js\";\n// lets us add head elements to head of the page\n // when you import a package and only use it in getServerProps or getStaticProps, the\n// imported package is only availbale in server side. Next JS feature\n\n// these components aren't rendered as pages\n // const DUMMY_MEETUPS = [\n// \t{\n// \t\tid: \"m1\",\n// \t\ttitle: \"A First Meetup\",\n// \t\timage:\n// \t\t\t\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg\",\n// \t\taddress: \"Some address 5, 12345 Some City\",\n// \t\tdescription: \"This is a first meetup!\",\n// \t},\n// \t{\n// \t\tid: \"m2\",\n// \t\ttitle: \"A Second Meetup\",\n// \t\timage:\n// \t\t\t\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg\",\n// \t\taddress: \"Some address 5, 12345 Some City\",\n// \t\tdescription: \"This is a Second meetup!\",\n// \t},\n// \t{\n// \t\tid: \"m3\",\n// \t\ttitle: \"A Third Meetup\",\n// \t\timage:\n// \t\t\t\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg\",\n// \t\taddress: \"Some address 5, 12345 Some City\",\n// \t\tdescription: \"This is a Third meetup!\",\n// \t},\n// ];\n\nfunction HomePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"React meetups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      meetups: props.meetups\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n} // render the component for each request.\n// this only runs on the server after deployment.\n// only use if your data updates every second or it'll slow down your website.\n// export async function getServerSideProps(context) {\n// \t// can get access to request and response object\n// \tconst req = context.req;\n// \tconst res = context.res;\n// \t// fetch data from API\n// \t// can run operations that contain credentials that shouldn't be exposed\n// \treturn {\n// \t\tprops: {\n// \t\t\tmeetups: DUMMY_MEETUPS,\n// \t\t},\n// \t};\n// }\n// only works in page component files\n// executes function during prerendering process - runs this before calling component function\n// it can return promises which causes next to wait for data before rendering component\n// you can access code that can execute on a server, this code never executes on the client-side\n\n\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0NBR0E7QUFDQTs7QUFHQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDeEIsc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBSUMscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpEO0FBQUEsa0JBREQ7QUFRQSxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztLQWhDU0YsUTs7QUF3RU1BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXRzIHVzIGFkZCBoZWFkIGVsZW1lbnRzIHRvIGhlYWQgb2YgdGhlIHBhZ2VcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuLy8gd2hlbiB5b3UgaW1wb3J0IGEgcGFja2FnZSBhbmQgb25seSB1c2UgaXQgaW4gZ2V0U2VydmVyUHJvcHMgb3IgZ2V0U3RhdGljUHJvcHMsIHRoZVxuLy8gaW1wb3J0ZWQgcGFja2FnZSBpcyBvbmx5IGF2YWlsYmFsZSBpbiBzZXJ2ZXIgc2lkZS4gTmV4dCBKUyBmZWF0dXJlXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbi8vIHRoZXNlIGNvbXBvbmVudHMgYXJlbid0IHJlbmRlcmVkIGFzIHBhZ2VzXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcblxuLy8gY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcbi8vIFx0e1xuLy8gXHRcdGlkOiBcIm0xXCIsXG4vLyBcdFx0dGl0bGU6IFwiQSBGaXJzdCBNZWV0dXBcIixcbi8vIFx0XHRpbWFnZTpcbi8vIFx0XHRcdFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzgwMHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXG4vLyBcdFx0YWRkcmVzczogXCJTb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5XCIsXG4vLyBcdFx0ZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCFcIixcbi8vIFx0fSxcbi8vIFx0e1xuLy8gXHRcdGlkOiBcIm0yXCIsXG4vLyBcdFx0dGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXG4vLyBcdFx0aW1hZ2U6XG4vLyBcdFx0XHRcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy84MDBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxuLy8gXHRcdGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxuLy8gXHRcdGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBTZWNvbmQgbWVldHVwIVwiLFxuLy8gXHR9LFxuLy8gXHR7XG4vLyBcdFx0aWQ6IFwibTNcIixcbi8vIFx0XHR0aXRsZTogXCJBIFRoaXJkIE1lZXR1cFwiLFxuLy8gXHRcdGltYWdlOlxuLy8gXHRcdFx0XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvODAwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcbi8vIFx0XHRhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcbi8vIFx0XHRkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgVGhpcmQgbWVldHVwIVwiLFxuLy8gXHR9LFxuLy8gXTtcblxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5SZWFjdCBtZWV0dXBzPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8vIHJlbmRlciB0aGUgY29tcG9uZW50IGZvciBlYWNoIHJlcXVlc3QuXG4vLyB0aGlzIG9ubHkgcnVucyBvbiB0aGUgc2VydmVyIGFmdGVyIGRlcGxveW1lbnQuXG4vLyBvbmx5IHVzZSBpZiB5b3VyIGRhdGEgdXBkYXRlcyBldmVyeSBzZWNvbmQgb3IgaXQnbGwgc2xvdyBkb3duIHlvdXIgd2Vic2l0ZS5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gXHQvLyBjYW4gZ2V0IGFjY2VzcyB0byByZXF1ZXN0IGFuZCByZXNwb25zZSBvYmplY3Rcbi8vIFx0Y29uc3QgcmVxID0gY29udGV4dC5yZXE7XG4vLyBcdGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xuXG4vLyBcdC8vIGZldGNoIGRhdGEgZnJvbSBBUElcbi8vIFx0Ly8gY2FuIHJ1biBvcGVyYXRpb25zIHRoYXQgY29udGFpbiBjcmVkZW50aWFscyB0aGF0IHNob3VsZG4ndCBiZSBleHBvc2VkXG5cbi8vIFx0cmV0dXJuIHtcbi8vIFx0XHRwcm9wczoge1xuLy8gXHRcdFx0bWVldHVwczogRFVNTVlfTUVFVFVQUyxcbi8vIFx0XHR9LFxuLy8gXHR9O1xuLy8gfVxuXG4vLyBvbmx5IHdvcmtzIGluIHBhZ2UgY29tcG9uZW50IGZpbGVzXG4vLyBleGVjdXRlcyBmdW5jdGlvbiBkdXJpbmcgcHJlcmVuZGVyaW5nIHByb2Nlc3MgLSBydW5zIHRoaXMgYmVmb3JlIGNhbGxpbmcgY29tcG9uZW50IGZ1bmN0aW9uXG4vLyBpdCBjYW4gcmV0dXJuIHByb21pc2VzIHdoaWNoIGNhdXNlcyBuZXh0IHRvIHdhaXQgZm9yIGRhdGEgYmVmb3JlIHJlbmRlcmluZyBjb21wb25lbnRcbi8vIHlvdSBjYW4gYWNjZXNzIGNvZGUgdGhhdCBjYW4gZXhlY3V0ZSBvbiBhIHNlcnZlciwgdGhpcyBjb2RlIG5ldmVyIGV4ZWN1dGVzIG9uIHRoZSBjbGllbnQtc2lkZVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cdC8vIGFsd2F5cyByZXR1cm5zIGFuIG9iamVjdFxuXG5cdC8vIHdlIGRvbid0IG5lZWQgdG8gdXNlIGZldGNoIGJlY2F1c2UgaXQncyByZWR1bmRhbnQuIEluc3RlYWQgd2UgY2FuIGRpcmVjdGx5IGNvbm5lY3QgdG8gdGhlIERCXG5cdGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG5cdFx0XCJtb25nb2RiK3NydjovL3NhbmluZG86aGFuc2FAY2x1c3RlcjAuaDI2aGZ2Zi5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXG5cdCk7XG5cblx0Y29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuXHRjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuXG5cdC8vIGZpZG5zIGFsbCBkb2N1bWVudHMgaW4gY29sbGVjdGlvbiBhc3luY2hyb25vdXNseS5cblx0Ly8gdG9BcnJheSAtIGVuc3VyZSB3ZSBnZXQgYW4gYXJyYXkgb2YgZG9jdW1lbnRzXG5cdGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuXG5cdGNsaWVudC5jbG9zZSgpO1xuXG5cdHJldHVybiB7XG5cdFx0Ly8gc2V0IGFzIHByb3BzIGZvciBwYWdlIGNvbXBvbmVudCAoSG9tZVBhZ2UocHJvcHMpIHsuLi59KVxuXHRcdHByb3BzOiB7XG5cdFx0XHQvLyB0cmFuc2Zvcm0gZGF0YWEgdG8gbWF0Y2ggcHJvcHNcblx0XHRcdG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XG5cdFx0XHRcdHRpdGxlOiBtZWV0dXAudGl0bGUsXG5cdFx0XHRcdGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxuXHRcdFx0XHRpbWFnZTogbWVldHVwLmltYWdlLFxuXHRcdFx0XHQvLyBjb252ZXJ0cyBvYmplY3QgdG8gc3RyaW5nIHdoaWNoIGlzIHVzYWJsZVxuXHRcdFx0XHRpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuXHRcdFx0fSkpLFxuXHRcdH0sXG5cdFx0Ly8gYWRkcyBpbmNyZW1lbnRhbCBzdGF0aWMgZ2VuZXJhdGlvbi5cblx0XHQvLyBudW1iZXIgb2Ygc2Vjb25kcyBuZXh0IHdhaXRzIGJlZm9yZSByZWdlbmVyYXRpbmcgdGhlIHJlc3VsdHMuXG5cdFx0Ly8gc2VydmVyIHJlZ2VuZXJhdGVzIHRoaXMgZXZlcnkgMTAgc2Vjb25kcyBpZiByZXF1ZXN0cyBhcmUgY29taW5nIGZvciB0aGlzIHBhZ2UuXG5cdFx0Ly8geW91IG5vdyBkb24ndCBoYXZlIHRvIHJlZGVwbG95IGFuZCByZWJ1aWxkIGZvciBlYWNoIHRpbWUgZGF0YSBjaGFuZ2VzLlxuXHRcdHJldmFsaWRhdGU6IDEwLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
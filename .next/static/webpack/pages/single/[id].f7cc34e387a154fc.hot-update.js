"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/single/[id]",{

/***/ "./axiosCalls/productsAxiosCalls.ts":
/*!******************************************!*\
  !*** ./axiosCalls/productsAxiosCalls.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchProducts: function() { return /* binding */ fetchProducts; },\n/* harmony export */   fetchSingleProduct: function() { return /* binding */ fetchSingleProduct; }\n/* harmony export */ });\n/* harmony import */ var _axiosInstances_fetchProducrts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axiosInstances/fetchProducrts */ \"./axiosInstances/fetchProducrts.ts\");\n\nconst fetchProducts = async ()=>{\n    const res = await _axiosInstances_fetchProducrts__WEBPACK_IMPORTED_MODULE_0__.axiosProductInstance.get(\"/products\");\n    return res.data;\n};\nconst fetchSingleProduct = async (id)=>{\n    const res = await _axiosInstances_fetchProducrts__WEBPACK_IMPORTED_MODULE_0__.axiosProductInstance.get(\"/products/\".concat(id));\n    return res.data;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9heGlvc0NhbGxzL3Byb2R1Y3RzQXhpb3NDYWxscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0U7QUFRL0QsTUFBTUMsZ0JBQWdCO0lBQ3pCLE1BQU1DLE1BQU0sTUFBTUYsZ0ZBQW9CQSxDQUFDRyxHQUFHLENBQUM7SUFDM0MsT0FBT0QsSUFBSUUsSUFBSTtBQUNuQixFQUFDO0FBRU0sTUFBTUMscUJBQXFCLE9BQU1DO0lBQ3BDLE1BQU1KLE1BQU0sTUFBTUYsZ0ZBQW9CQSxDQUFDRyxHQUFHLENBQUMsYUFBZ0IsT0FBSEc7SUFDeEQsT0FBT0osSUFBSUUsSUFBSTtBQUNuQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2F4aW9zQ2FsbHMvcHJvZHVjdHNBeGlvc0NhbGxzLnRzPzIwMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXhpb3NQcm9kdWN0SW5zdGFuY2UgfSBmcm9tIFwiQC9heGlvc0luc3RhbmNlcy9mZXRjaFByb2R1Y3J0c1wiXG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZSB9IGZyb20gXCJheGlvc1wiXG5cbmludGVyZmFjZSBCYXNlQXBpUmVzcG9uc2Uge1xuICAgIHN0YXR1czpIdHRwU3RhdHVzQ29kZVxuICAgIGRhdGE6YW55XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NQcm9kdWN0SW5zdGFuY2UuZ2V0KFwiL3Byb2R1Y3RzXCIpXG4gICAgcmV0dXJuIHJlcy5kYXRhXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNpbmdsZVByb2R1Y3QgPSBhc3luYyhpZCA6IG51bWJlcnxzdHJpbmd8c3RyaW5nW118dW5kZWZpbmVkKSA9PntcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvc1Byb2R1Y3RJbnN0YW5jZS5nZXQoYC9wcm9kdWN0cy8ke2lkfWApXG4gICAgcmV0dXJuIHJlcy5kYXRhXG59Il0sIm5hbWVzIjpbImF4aW9zUHJvZHVjdEluc3RhbmNlIiwiZmV0Y2hQcm9kdWN0cyIsInJlcyIsImdldCIsImRhdGEiLCJmZXRjaFNpbmdsZVByb2R1Y3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./axiosCalls/productsAxiosCalls.ts\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_temmyscope_Desktop_datamax_ui_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_temmyscope_Desktop_datamax_ui_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_temmyscope_Desktop_datamax_ui_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_temmyscope_Desktop_datamax_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_LeftSideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LeftSideBar */ \"./components/LeftSideBar.jsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var _components_SeoHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SeoHead */ \"./components/SeoHead.jsx\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Main */ \"./components/Main.jsx\");\n/* harmony import */ var _components_AdBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AdBar */ \"./components/AdBar.jsx\");\n/* harmony import */ var _components_BottomBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BottomBar */ \"./components/BottomBar.jsx\");\n/* harmony import */ var _api_book__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/book */ \"./pages/api/book.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/temmyscope/Desktop/datamax-ui/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n //import Footer from \"../components/Footer\";\n\nfunction Index() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      books = _useState[0],\n      setBooks = _useState[1];\n\n  var remove = function remove() {};\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_temmyscope_Desktop_datamax_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_temmyscope_Desktop_datamax_ui_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var books;\n    return _Users_temmyscope_Desktop_datamax_ui_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _api_book__WEBPACK_IMPORTED_MODULE_10__.Api.get('https://datamax-api.herokuapp.com/api/');\n\n          case 2:\n            books = _context.sent;\n            console.log(books);\n            setBooks(books);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SeoHead__WEBPACK_IMPORTED_MODULE_6__.default, {\n      siteTitle: \"Welcome\",\n      description: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"main\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LeftSideBar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_7__.default, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"capitalize w-full font-bold\",\n          children: \"List Of Ten Books\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n          className: \"h-5\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n          className: \"w-full\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: books.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No books are currently available\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this) : books.map(function (book, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"book-card\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center space-y-2 sm:text-center\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  className: \"text-lg text-black font-semibold\",\n                  children: book.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 52,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  className: \"text-gray-500 font-medium\",\n                  children: book.authors.join(', ').trim()\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"button-remove\",\n                children: \"Remove\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                  href: \"/book/{book.id}\",\n                  className: \"button-update\",\n                  children: \"Update\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AdBar__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BottomBar__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Index, \"ww1JAI05mMsgubm5EIyBKqdj5S0=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUEsVUFERjtBQXdERDs7R0F0RXVCZDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExlZnRTaWRlQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0xlZnRTaWRlQmFyXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IFNlb0hlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VvSGVhZFwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblwiO1xuaW1wb3J0IEFkQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0FkQmFyXCI7XG5pbXBvcnQgQm90dG9tQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0JvdHRvbUJhclwiO1xuaW1wb3J0IHsgQXBpIH0gZnJvbSBcIi4vYXBpL2Jvb2tcIjtcbi8vaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiAgY29uc3QgW2Jvb2tzLCBzZXRCb29rc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuXG4gIH1cblxuICB1c2VFZmZlY3QoYXN5bmMoKT0+e1xuICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQXBpLmdldCgnaHR0cHM6Ly9kYXRhbWF4LWFwaS5oZXJva3VhcHAuY29tL2FwaS8nKTtcbiAgICBjb25zb2xlLmxvZyhib29rcyk7XG4gICAgc2V0Qm9va3MoYm9va3MpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICBcbiAgICAgIDxTZW9IZWFkIHNpdGVUaXRsZT1cIldlbGNvbWVcIiBkZXNjcmlwdGlvbj1cIlwiIC8+XG4gICAgICBcbiAgICAgIDxOYXZCYXIgLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuXG4gICAgICAgIDxMZWZ0U2lkZUJhciAvPlxuXG4gICAgICAgIDxNYWluPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSB3LWZ1bGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICBMaXN0IE9mIFRlbiBCb29rc1xuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJyIGNsYXNzTmFtZT1cImgtNVwiIC8+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIChib29rcy5sZW5ndGggPT09IDApID9cbiAgICAgICAgICAgIDxwPk5vIGJvb2tzIGFyZSBjdXJyZW50bHkgYXZhaWxhYmxlPC9wPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgYm9va3MubWFwKChib29rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3BhY2UteS0yIHNtOnRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtYmxhY2sgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICB7Ym9vay5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICB7Ym9vay5hdXRob3JzLmpvaW4oJywgJykudHJpbSgpfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXJlbW92ZVwiPlxuICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPExpbms+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL2Jvb2sve2Jvb2suaWR9YH0gY2xhc3NOYW1lPVwiYnV0dG9uLXVwZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01haW4+XG5cbiAgICAgICAgPEFkQmFyIC8+XG4gICAgICAgIFxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Qm90dG9tQmFyIC8+XG5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMZWZ0U2lkZUJhciIsIk5hdkJhciIsIlNlb0hlYWQiLCJNYWluIiwiQWRCYXIiLCJCb3R0b21CYXIiLCJBcGkiLCJJbmRleCIsImJvb2tzIiwic2V0Qm9va3MiLCJyZW1vdmUiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiYm9vayIsImluZGV4IiwibmFtZSIsImF1dGhvcnMiLCJqb2luIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
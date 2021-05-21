self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Copyright */ "./components/Copyright.js");
/* harmony import */ var _helpers_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/Dashboard */ "./helpers/Dashboard.js");
/* harmony import */ var _helpers_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/Login */ "./helpers/Login.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Aish\\Documents\\Edvora_Assessment01\\pages\\index.js",
    _s = $RefreshSig$();





 // export async function getServerSideProps(ctx) {
//   // let loginUrlObj = {
//   //   url: `${apiService.BASE}${apiService.LOGIN}`,
//   //   body: {
//   //     company_id: "hello",
//   //     access_key: "world",
//   //   },
//   //   type: "post",
//   // };
//   // let responseData = await networkCallService.commonApiService(loginUrlObj);
//   // return {
//   //   props: {
//   //     responseData: responseData,
//   //   },
//   // };
// }

function Home(props) {
  _s();

  // let responseData = props.responseData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      loggedInData = _useState2[0],
      setLoggedInData = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (localStorage.getItem("loggedIn")) {
      setLoggedInData(JSON.parse(localStorage.getItem("loggedIn")));
    }

    setLoading(false);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "layout primary2Background",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Edvora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Edvora Assessment01 - Aish Gopalia"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: loggedInData ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_Dashboard__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: loggedInData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_Login__WEBPACK_IMPORTED_MODULE_5__.default, {
        containerData: {
          setLoggedInData: setLoggedInData
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Home, "7+oOiBQlApO21Q2l2RNPJBbgx5c=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvZ2dlZEluRGF0YSIsInNldExvZ2dlZEluRGF0YSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNsQztBQURrQyxrQkFFSkMsK0NBQVEsQ0FBQyxJQUFELENBRko7QUFBQSxNQUUzQkMsT0FGMkI7QUFBQSxNQUVsQkMsVUFGa0I7O0FBQUEsbUJBR01GLCtDQUFRLENBQUMsS0FBRCxDQUhkO0FBQUEsTUFHM0JHLFlBSDJCO0FBQUEsTUFHYkMsZUFIYTs7QUFLbENDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFKLEVBQXNDO0FBQ3BDSCxxQkFBZSxDQUFDSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQVgsQ0FBRCxDQUFmO0FBQ0Q7O0FBQ0RMLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUNFLFlBQUksRUFBQyw4REFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQVVHLENBQUNELE9BQUQsaUJBQ0MsOERBQUMsMkNBQUQ7QUFBQSxnQkFDR0UsWUFBWSxnQkFDWCw4REFBQywyQ0FBRDtBQUFBLCtCQUNFLDhEQUFDLHVEQUFEO0FBQVcsY0FBSSxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURXLGdCQU1YLDhEQUFDLG1EQUFEO0FBQU8scUJBQWEsRUFBRTtBQUFFQyx5QkFBZSxFQUFFQTtBQUFuQjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEOztHQXJDdUJOLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmVjYWExNDM5N2FkMmYwODI5MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcHlyaWdodFwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi4vaGVscGVycy9EYXNoYm9hcmRcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vaGVscGVycy9Mb2dpblwiO1xuXG5cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcbi8vICAgLy8gbGV0IGxvZ2luVXJsT2JqID0ge1xuLy8gICAvLyAgIHVybDogYCR7YXBpU2VydmljZS5CQVNFfSR7YXBpU2VydmljZS5MT0dJTn1gLFxuLy8gICAvLyAgIGJvZHk6IHtcbi8vICAgLy8gICAgIGNvbXBhbnlfaWQ6IFwiaGVsbG9cIixcbi8vICAgLy8gICAgIGFjY2Vzc19rZXk6IFwid29ybGRcIixcbi8vICAgLy8gICB9LFxuLy8gICAvLyAgIHR5cGU6IFwicG9zdFwiLFxuLy8gICAvLyB9O1xuXG4vLyAgIC8vIGxldCByZXNwb25zZURhdGEgPSBhd2FpdCBuZXR3b3JrQ2FsbFNlcnZpY2UuY29tbW9uQXBpU2VydmljZShsb2dpblVybE9iaik7XG5cbi8vICAgLy8gcmV0dXJuIHtcbi8vICAgLy8gICBwcm9wczoge1xuLy8gICAvLyAgICAgcmVzcG9uc2VEYXRhOiByZXNwb25zZURhdGEsXG4vLyAgIC8vICAgfSxcbi8vICAgLy8gfTtcbi8vIH1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgLy8gbGV0IHJlc3BvbnNlRGF0YSA9IHByb3BzLnJlc3BvbnNlRGF0YTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2dnZWRJbkRhdGEsIHNldExvZ2dlZEluRGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dnZWRJblwiKSkge1xuICAgICAgc2V0TG9nZ2VkSW5EYXRhKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dnZWRJblwiKSkpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQgcHJpbWFyeTJCYWNrZ3JvdW5kXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVkdm9yYTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFZHZvcmEgQXNzZXNzbWVudDAxIC0gQWlzaCBHb3BhbGlhXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICA+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgeyFsb2FkaW5nICYmIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIHtsb2dnZWRJbkRhdGEgPyAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxEYXNoYm9hcmQgZGF0YT17bG9nZ2VkSW5EYXRhfSAvPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExvZ2luIGNvbnRhaW5lckRhdGE9e3sgc2V0TG9nZ2VkSW5EYXRhOiBzZXRMb2dnZWRJbkRhdGEgfX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
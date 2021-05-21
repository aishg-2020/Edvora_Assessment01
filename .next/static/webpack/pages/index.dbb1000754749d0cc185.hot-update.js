self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./helpers/Login.js":
/*!**************************!*\
  !*** ./helpers/Login.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/apiService */ "./services/apiService.js");
/* harmony import */ var _services_networkCallService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/networkCallService */ "./services/networkCallService.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Aish\\Documents\\Edvora_Assessment01\\helpers\\Login.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Login(props) {
  _s();

  var containerData = props.containerData;
  var setLoggedInData = containerData.setLoggedInData;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      showError = _useState[0],
      setShowError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    company_id: "",
    access_key: ""
  }),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var company_id = formData.company_id,
      access_key = formData.access_key;

  var _onChange = function onChange(e) {
    return setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, e.target.name, e.target.value)));
  };

  var _onSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      return C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              loginNetworkCall(formData);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var loginNetworkCall = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(body) {
      var loginUrlObj, responseData;
      return C_Users_Aish_Documents_Edvora_Assessment01_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              loginUrlObj = {
                url: "".concat(_services_apiService__WEBPACK_IMPORTED_MODULE_5__.default.BASE).concat(_services_apiService__WEBPACK_IMPORTED_MODULE_5__.default.LOGIN),
                body: body,
                type: "post"
              };
              _context2.next = 3;
              return _services_networkCallService__WEBPACK_IMPORTED_MODULE_6__.default.commonApiService(loginUrlObj);

            case 3:
              responseData = _context2.sent;
              console.log(responseData);

              if (responseData.success) {
                setLoggedInData(responseData);
                setShowError(false);
                localStorage.setItem("loggedIn", JSON.stringify(responseData));
              } else {
                setShowError("Invalid Credentials");
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function loginNetworkCall(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "40%",
        padding: "4rem 1rem"
      },
      className: "marginAuto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "primaryFont",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        className: "flexColStart paddingTopBottom1",
        onSubmit: function onSubmit(e) {
          return _onSubmit(e);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "font20 primaryFont paddingTopBottom1",
            children: "Company ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "textInput",
            type: "text",
            placeholder: "Company ID",
            name: "company_id",
            value: company_id,
            onChange: function onChange(e) {
              return _onChange(e);
            },
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "font20 primaryFont paddingTopBottom1",
            children: "Access Key"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "textInput",
            type: "text",
            placeholder: "Access Key",
            name: "access_key",
            value: access_key,
            onChange: function onChange(e) {
              return _onChange(e);
            },
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "btn marginTB1",
          value: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), showError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " textCenter primaryFont font17",
          children: showError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

_s(Login, "CpFlFf6hkat/u0eg8RDS7EZ1LVY=");

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiY29udGFpbmVyRGF0YSIsInNldExvZ2dlZEluRGF0YSIsInVzZVN0YXRlIiwic2hvd0Vycm9yIiwic2V0U2hvd0Vycm9yIiwiY29tcGFueV9pZCIsImFjY2Vzc19rZXkiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ2luTmV0d29ya0NhbGwiLCJib2R5IiwibG9naW5VcmxPYmoiLCJ1cmwiLCJhcGlTZXJ2aWNlIiwidHlwZSIsIm5ldHdvcmtDYWxsU2VydmljZSIsInJlc3BvbnNlRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNuQyxNQUFNQyxhQUFhLEdBQUdELEtBQUssQ0FBQ0MsYUFBNUI7QUFDQSxNQUFNQyxlQUFlLEdBQUdELGFBQWEsQ0FBQ0MsZUFBdEM7O0FBRm1DLGtCQUdEQywrQ0FBUSxDQUFDLEtBQUQsQ0FIUDtBQUFBLE1BRzVCQyxTQUg0QjtBQUFBLE1BR2pCQyxZQUhpQjs7QUFBQSxtQkFLSEYsK0NBQVEsQ0FBQztBQUN2Q0csY0FBVSxFQUFFLEVBRDJCO0FBRXZDQyxjQUFVLEVBQUU7QUFGMkIsR0FBRCxDQUxMO0FBQUEsTUFLNUJDLFFBTDRCO0FBQUEsTUFLbEJDLFdBTGtCOztBQUFBLE1BVTNCSCxVQVYyQixHQVVBRSxRQVZBLENBVTNCRixVQVYyQjtBQUFBLE1BVWZDLFVBVmUsR0FVQUMs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RSxrQkFBQ0ksQ0FBRDtBQUFBLHFCQUFPRCxTQUFRLENBQUNDLENBQUQsQ0FBZjtBQUFBLGFBTlo7QUFPRSxvQkFBUTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCRixlQWdDRTtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLG1CQUFTLEVBQUMsZUFBL0I7QUFBK0MsZUFBSyxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaENGLEVBaUNHUCxTQUFTLGlCQUNSO0FBQUssbUJBQVMsRUFBQyxnQ0FBZjtBQUFBLG9CQUFpREE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0REOztHQXJGdUJMLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGJiMTAwMDc1NDc0OWQwY2MxODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBpU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXBpU2VydmljZVwiO1xyXG5pbXBvcnQgbmV0d29ya0NhbGxTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9uZXR3b3JrQ2FsbFNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XHJcbiAgY29uc3QgY29udGFpbmVyRGF0YSA9IHByb3BzLmNvbnRhaW5lckRhdGE7XHJcbiAgY29uc3Qgc2V0TG9nZ2VkSW5EYXRhID0gY29udGFpbmVyRGF0YS5zZXRMb2dnZWRJbkRhdGE7XHJcbiAgY29uc3QgW3Nob3dFcnJvciwgc2V0U2hvd0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb21wYW55X2lkOiBcIlwiLFxyXG4gICAgYWNjZXNzX2tleTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBjb21wYW55X2lkLCBhY2Nlc3Nfa2V5IH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT5cclxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9naW5OZXR3b3JrQ2FsbChmb3JtRGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9naW5OZXR3b3JrQ2FsbCA9IGFzeW5jIChib2R5KSA9PiB7XHJcbiAgICBsZXQgbG9naW5VcmxPYmogPSB7XHJcbiAgICAgIHVybDogYCR7YXBpU2VydmljZS5CQVNFfSR7YXBpU2VydmljZS5MT0dJTn1gLFxyXG4gICAgICBib2R5OiBib2R5LFxyXG4gICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IG5ldHdvcmtDYWxsU2VydmljZS5jb21tb25BcGlTZXJ2aWNlKGxvZ2luVXJsT2JqKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICBpZiAocmVzcG9uc2VEYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgc2V0TG9nZ2VkSW5EYXRhKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIHNldFNob3dFcnJvcihmYWxzZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9nZ2VkSW5cIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93RXJyb3IoXCJJbnZhbGlkIENyZWRlbnRpYWxzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNDAlXCIsIHBhZGRpbmc6IFwiNHJlbSAxcmVtXCIgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtYXJnaW5BdXRvXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwcmltYXJ5Rm9udFwiPkxvZ2luPC9oMT5cclxuXHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXhDb2xTdGFydCBwYWRkaW5nVG9wQm90dG9tMVwiXHJcbiAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQyMCBwcmltYXJ5Rm9udCBwYWRkaW5nVG9wQm90dG9tMVwiPlxyXG4gICAgICAgICAgICAgIENvbXBhbnkgSURcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRJbnB1dFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29tcGFueSBJRFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlfaWRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X2lkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udDIwIHByaW1hcnlGb250IHBhZGRpbmdUb3BCb3R0b20xXCI+XHJcbiAgICAgICAgICAgICAgQWNjZXNzIEtleVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dElucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBY2Nlc3MgS2V5XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYWNjZXNzX2tleVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2FjY2Vzc19rZXl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBtYXJnaW5UQjFcIiB2YWx1ZT1cIlJlZ2lzdGVyXCIgLz5cclxuICAgICAgICAgIHtzaG93RXJyb3IgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0Q2VudGVyIHByaW1hcnlGb250IGZvbnQxN1wiPntzaG93RXJyb3J9PC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
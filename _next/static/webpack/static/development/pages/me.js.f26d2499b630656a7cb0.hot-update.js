webpackHotUpdate("static/development/pages/me.js",{

/***/ "./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/mnt/c/_code/marikino-web/components/Nav.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Nav = function Nav(_ref) {
  var page = _ref.page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var menuItems = [{
    value: 'raster',
    label: 'raster'
  }, {
    value: 'vector',
    label: 'vector'
  }, {
    value: 'sketch',
    label: 'sketch'
  }, {
    value: 'me',
    label: 'me'
  }];
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("nav", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      open: open
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "toggle-nav",
    onClick: function onClick(evt) {
      return setOpen(!open);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 16
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "floater",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "toggle-nav",
    onClick: function onClick(evt) {
      return setOpen(!open);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, menuItems.map(function (item, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/".concat(item.value),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        active: item.value === page
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 80
      }
    }, item.label))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false

})
//# sourceMappingURL=me.js.f26d2499b630656a7cb0.hot-update.js.map
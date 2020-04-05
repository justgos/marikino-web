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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
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
  var pageTitle = '';
  var pageDesc = '';
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
    name: "title",
    content: pageTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
    name: "description",
    content: pageDesc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("link", {
    rel: "image_src",
    href: "/img/me.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
    property: "og:title",
    content: pageTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
    property: "og:description",
    content: pageDesc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
    property: "og:image",
    content: "/img/me.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
    property: "twitter:title",
    content: pageTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
    property: "twitter:description",
    content: pageDesc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
    property: "twitter:image",
    content: "/img/me.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("nav", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      open: open
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "toggle-nav",
    onClick: function onClick(evt) {
      return setOpen(!open);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 16
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "floater",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: "toggle-nav",
    onClick: function onClick(evt) {
      return setOpen(!open);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, menuItems.map(function (item, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/".concat(item.value),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: item.value === page
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 80
      }
    }, item.label))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=me.js.fa58e5d176917bc744b5.hot-update.js.map
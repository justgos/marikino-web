webpackHotUpdate("static/development/pages/raster.js",{

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

  var distStart = 80;
  var distEnd = 20;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(distStart),
      distTop = _useState2[0],
      setDistTop = _useState2[1];

  var menuItems = [{
    value: 'raster',
    label: 'raster'
  }, {
    value: 'vector',
    label: 'vector'
  }, // { value: 'sketch', label: 'sketch' },
  {
    value: 'me',
    label: 'me'
  }];

  function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // const scrollThreshold = 200;

    var moveInterval = 200;
    var dist = distStart + (distEnd - distStart) * Math.min(scrollTop / moveInterval, 1.0);
    if (dist != distTop) setDistTop(dist); // if(scrollTop >= scrollThreshold && !lone)
    //   setLone(true);
    // if(scrollTop < scrollThreshold && lone)
    //   setLone(false);
  }

  ;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [distTop]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("nav", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      open: open
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "open-nav",
    onClick: function onClick(evt) {
      return setOpen(!open);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 16
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("floater"),
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("top:", distTop, "px;@include media(\"<=tablet\"){top:0;};label:Nav;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9fY29kZS9tYXJpa2luby13ZWIvY29tcG9uZW50cy9OYXYudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEb0IiLCJmaWxlIjoiL21udC9jL19jb2RlL21hcmlraW5vLXdlYi9jb21wb25lbnRzL05hdi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHBhZ2U/IDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBOYXYgPSAoeyBwYWdlIH0gOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFsgb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGRpc3RTdGFydCA9IDgwO1xyXG4gIGNvbnN0IGRpc3RFbmQgPSAyMDtcclxuICBjb25zdCBbIGRpc3RUb3AsIHNldERpc3RUb3AgXSA9IHVzZVN0YXRlKGRpc3RTdGFydCk7XHJcblxyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICAgIHsgdmFsdWU6ICdyYXN0ZXInLCBsYWJlbDogJ3Jhc3RlcicgfSxcclxuICAgIHsgdmFsdWU6ICd2ZWN0b3InLCBsYWJlbDogJ3ZlY3RvcicgfSxcclxuICAgIC8vIHsgdmFsdWU6ICdza2V0Y2gnLCBsYWJlbDogJ3NrZXRjaCcgfSxcclxuICAgIHsgdmFsdWU6ICdtZScsIGxhYmVsOiAnbWUnIH0sXHJcbiAgXTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAvLyBjb25zdCBzY3JvbGxUaHJlc2hvbGQgPSAyMDA7XHJcbiAgICBjb25zdCBtb3ZlSW50ZXJ2YWwgPSAyMDA7XHJcbiAgICBjb25zdCBkaXN0ID0gZGlzdFN0YXJ0ICsgKGRpc3RFbmQgLSBkaXN0U3RhcnQpICogTWF0aC5taW4oc2Nyb2xsVG9wIC8gbW92ZUludGVydmFsLCAxLjApO1xyXG4gICAgaWYoZGlzdCAhPSBkaXN0VG9wKVxyXG4gICAgICBzZXREaXN0VG9wKGRpc3QpO1xyXG4gICAgLy8gaWYoc2Nyb2xsVG9wID49IHNjcm9sbFRocmVzaG9sZCAmJiAhbG9uZSlcclxuICAgIC8vICAgc2V0TG9uZSh0cnVlKTtcclxuICAgIC8vIGlmKHNjcm9sbFRvcCA8IHNjcm9sbFRocmVzaG9sZCAmJiBsb25lKVxyXG4gICAgLy8gICBzZXRMb25lKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2Rpc3RUb3BdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgb3BlbiB9KX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj4gICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3Blbi1uYXZcIiBvbkNsaWNrPXtldnQgPT4gc2V0T3Blbighb3Blbil9IC8+XHJcblxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgPGE+PGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJmbG9hdGVyXCIpfVxyXG4gICAgICAgICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgICB0b3A6ICR7ZGlzdFRvcH1weDtcclxuXHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW5hdlwiIG9uQ2xpY2s9e2V2dCA9PiBzZXRPcGVuKCFvcGVuKX0gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSwgaSkgPT5cclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7aXRlbS52YWx1ZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGl0ZW0udmFsdWUgPT09IHBhZ2UgfSl9PjxzcGFuPntpdGVtLmxhYmVsfTwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdfQ== */"), ";label:Nav;"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "close-nav",
    onClick: function onClick(evt) {
      return setOpen(!open);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, menuItems.map(function (item, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/".concat(item.value),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        active: item.value === page
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 80
      }
    }, item.label))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=raster.js.39f00db0062485bb8532.hot-update.js.map
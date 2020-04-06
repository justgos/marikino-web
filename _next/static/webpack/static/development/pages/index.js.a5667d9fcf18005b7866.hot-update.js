webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _this = undefined,
    _jsxFileName = "/mnt/c/_code/marikino-web/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var IndexPage = function IndexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    left: false,
    right: false,
    _: 1.0
  }),
      eyeState = _useState[0],
      setEyeState = _useState[1];

  function updateAccel(x, y, dx, dy, dz) {
    if (x == null || y == null || dx == null || dy == null) return;
    var sumThreshold = 1.2;

    var newEyeState = _objectSpread({}, eyeState, {
      _: 1.0
    });

    if (Math.abs(dx) > Math.abs(dy) && dx > sumThreshold && (!eyeState.left || eyeState.right)) {
      // console.log('updateAccel left', dx, dy)
      newEyeState.left = true;
      newEyeState.right = false;
    }

    if (Math.abs(dx) > Math.abs(dy) && dx < -sumThreshold && (eyeState.left || !eyeState.right)) {
      // console.log('updateAccel right', dx, dy)
      newEyeState.left = false;
      newEyeState.right = true;
    }

    if (dy < -sumThreshold && (!eyeState.left || !eyeState.right)) {
      // console.log('updateAccel up', dx, dy)
      newEyeState.left = true;
      newEyeState.right = true;
    }

    if (dy > sumThreshold) {
      //  || (dy > -sumThreshold && Math.abs(x) < threshold)  //  && (eyeState.left || eyeState.right)
      // console.log('updateAccel down', dx, dy)
      newEyeState.left = false;
      newEyeState.right = false;
      newEyeState._ = 2.0;
    }

    if (newEyeState.left !== eyeState.left || newEyeState.right !== eyeState.right || newEyeState._ !== eyeState._) setEyeState(newEyeState);
  }

  var accelState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      landscape: false,
      x: 0,
      y: 0,
      z: 0,
      dx: 0,
      dy: 0,
      dz: 0,
      dxSum: 0,
      dySum: 0
    };
  }, []);

  var handleOrientation = function handleOrientation(event) {
    var _window = window,
        orientation = _window.orientation;
    accelState.landscape = orientation === 90 || orientation === -90;
  };

  var handleAcceleration = function handleAcceleration(event) {
    var landscape = accelState.landscape;
    var _useGravity$multiplie = {
      useGravity: true,
      multiplier: 1.0
    },
        useGravity = _useGravity$multiplie.useGravity,
        multiplier = _useGravity$multiplie.multiplier;
    var acceleration = useGravity ? event.accelerationIncludingGravity : event.acceleration;
    var rotation = event.rotationRate || null;

    var _ref = acceleration || {
      x: 0,
      y: 0,
      z: 0
    },
        x = _ref.x,
        y = _ref.y,
        z = _ref.z; // console.log('handleAcceleration', x, y, z)


    if (x == null || y == null || z == null) return;
    accelState.dx = (landscape ? y : x) * multiplier - accelState.x;
    accelState.dy = (landscape ? x : y) * multiplier - accelState.y;
    accelState.dz = z * multiplier - accelState.x;
    accelState.x = (landscape ? y : x) * multiplier;
    accelState.y = (landscape ? x : y) * multiplier;
    accelState.z = z * multiplier;
    accelState.dxSum = accelState.dxSum * 0.9 + accelState.dx;
    accelState.dySum = accelState.dySum * 0.9 + accelState.dy;
    updateAccel(accelState.x, accelState.y, accelState.dxSum, accelState.dySum, accelState.dz);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('devicemotion', handleAcceleration);
    window.addEventListener('orientationchange', handleOrientation);
    return function () {
      window.removeEventListener('devicemotion', handleAcceleration);
      window.removeEventListener('orientationchange', handleOrientation);
    };
  }, []); // console.log('eyeState', eyeState)

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "index-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "eye-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 28
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/raster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 32
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("eye-raster", {
      active: eyeState.left
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/vector",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 32
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("eye-vector", {
      active: eyeState.right
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.a5667d9fcf18005b7866.hot-update.js.map
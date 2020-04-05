webpackHotUpdate("static/development/pages/raster.js",{

/***/ "./components/WorkTiles.tsx":
/*!**********************************!*\
  !*** ./components/WorkTiles.tsx ***!
  \**********************************/
/*! exports provided: ContainerWidths, ImageGap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerWidths", function() { return ContainerWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGap", function() { return ImageGap; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WorkTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkTile */ "./components/WorkTile.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");




var _this = undefined,
    _jsxFileName = "/mnt/c/_code/marikino-web/components/WorkTiles.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




;
;
;
var ContainerWidths = {
  'desktop': 1200,
  'laptop': 1000,
  'tablet': 900
};
var ImageGap = 20;

var WorkTiles = function WorkTiles(_ref) {
  var rootPath = _ref.rootPath,
      works = _ref.works,
      _ref$aspectRatioPerRo = _ref.aspectRatioPerRow,
      aspectRatioPerRow = _ref$aspectRatioPerRo === void 0 ? 3.0 : _ref$aspectRatioPerRo;
  var workTiles = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return works.map(function (w) {
      return _objectSpread({}, w, {
        aspectRatio: w.size[0] / w.size[1],
        idx: -1,
        width: {},
        path: rootPath + w.path
      });
    });
  }, [rootPath, works]);
  var tiledWorks = [];
  var currentRow = [];
  workTiles.forEach(function (work, i) {
    var currentRowAspectRatioSum = currentRow.reduce(function (a, b) {
      return a + b.aspectRatio;
    }, 0);
    if (i === workTiles.length - 1) currentRow.push(work);

    if (currentRowAspectRatioSum + work.aspectRatio > aspectRatioPerRow || i === workTiles.length - 1) {
      console.log('width', Object.keys(ContainerWidths).map(function (device) {
        return [device, w.aspectRatio / currentRowAspectRatioSum * ContainerWidths[device] / (ContainerWidths[device] + (currentRow.length - 1) * (ImageGap + 1))];
      }).reduce(function (obj, x) {
        return obj[x[0]] = x[1];
      }, {})); // The row is complete

      currentRowAspectRatioSum = currentRow.reduce(function (a, b) {
        return a + b.aspectRatio;
      }, 0);
      tiledWorks.push.apply(tiledWorks, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(currentRow.map(function (w, j) {
        return _objectSpread({}, w, {
          idx: j,
          width: Object.keys(ContainerWidths).map(function (device) {
            return [device, w.aspectRatio / currentRowAspectRatioSum * ContainerWidths[device] / (ContainerWidths[device] + (currentRow.length - 1) * (ImageGap + 1))];
          }).reduce(function (obj, x) {
            return obj[x[0]] = x[1];
          }, {})
        });
      })));
      currentRow = [];
    }

    if (i < workTiles.length - 1) {
      currentRow.push(work);
    }
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "container works-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, tiledWorks.map(function (work, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_WorkTile__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, work, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkTiles);

/***/ })

})
//# sourceMappingURL=raster.js.37bc82f7e3bb0c0015aa.hot-update.js.map
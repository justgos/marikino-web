webpackHotUpdate("static/development/pages/raster.js",{

/***/ "./components/WorkTile.tsx":
/*!*********************************!*\
  !*** ./components/WorkTile.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _WorkTiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkTiles */ "./components/WorkTiles.tsx");
var _this = undefined,
    _jsxFileName = "/mnt/c/_code/marikino-web/components/WorkTile.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





;

var WorkTile = function WorkTile(_ref) {
  var _baseImgRef$current, _baseImgRef$current2, _baseImgRef$current3, _baseImgRef$current4, _baseImgRef$current5, _baseImgRef$current6;

  var path = _ref.path,
      size = _ref.size,
      aspectRatio = _ref.aspectRatio,
      idx = _ref.idx,
      width = _ref.width;
  var baseImgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      zoomed = _useState2[0],
      setZoomed = _useState2[1];

  var ESCAPE_KEY = 27;
  var zoomDuration = 250;

  function zoomOutOnEscape(evt) {
    if (evt.keyCode === ESCAPE_KEY) zoomOut();
  }

  ;

  var zoomIn = function zoomIn() {
    // if(active)
    //   return;
    setActive(true);
    setTimeout(function () {
      return setZoomed(true);
    }, 10);
    document.addEventListener("keydown", zoomOutOnEscape);
  };

  var zoomOut = function zoomOut() {
    // if(!active)
    //   return;
    setZoomed(false);
    setTimeout(function () {
      return setActive(false);
    }, zoomDuration);
    document.removeEventListener("keydown", zoomOutOnEscape);
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    ref: baseImgRef,
    className: "work",
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("width:", width * 100, "%;padding-top:", 1.0 / aspectRatio * 100 * width, "%;background-image:url(", path, ");margin-left:", idx === 0 ? 0 : _WorkTiles__WEBPACK_IMPORTED_MODULE_3__["ImageGap"], "px;visibility:", active ? 'hidden' : 'visible', ";@media (max-width:768px){width:100%;padding-top:", 1.0 / aspectRatio * 100, "%;margin-left:0;};label:WorkTile;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9fY29kZS9tYXJpa2luby13ZWIvY29tcG9uZW50cy9Xb3JrVGlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENnQiIsImZpbGUiOiIvbW50L2MvX2NvZGUvbWFyaWtpbm8td2ViL2NvbXBvbmVudHMvV29ya1RpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmltcG9ydCB7IElXb3JrVGlsZSwgSW1hZ2VHYXAgfSBmcm9tICcuL1dvcmtUaWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJV29ya1RpbGUge1xyXG4gIC8vXHJcbn07XHJcblxyXG5jb25zdCBXb3JrVGlsZSA9ICh7IHBhdGgsIHNpemUsIGFzcGVjdFJhdGlvLCBpZHgsIHdpZHRoIH0gOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGJhc2VJbWdSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIHpvb21lZCwgc2V0Wm9vbWVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgRVNDQVBFX0tFWSA9IDI3O1xyXG4gIGNvbnN0IHpvb21EdXJhdGlvbiA9IDI1MDtcclxuICBmdW5jdGlvbiB6b29tT3V0T25Fc2NhcGUoZXZ0IDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYoZXZ0LmtleUNvZGUgPT09IEVTQ0FQRV9LRVkpXHJcbiAgICAgIHpvb21PdXQoKTtcclxuICB9O1xyXG4gIGNvbnN0IHpvb21JbiA9ICgpID0+IHtcclxuICAgIC8vIGlmKGFjdGl2ZSlcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRab29tZWQodHJ1ZSksIDEwKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHpvb21PdXRPbkVzY2FwZSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB6b29tT3V0ID0gKCkgPT4ge1xyXG4gICAgLy8gaWYoIWFjdGl2ZSlcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgc2V0Wm9vbWVkKGZhbHNlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QWN0aXZlKGZhbHNlKSwgem9vbUR1cmF0aW9uKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHpvb21PdXRPbkVzY2FwZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2Jhc2VJbWdSZWZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwid29ya1wiXHJcbiAgICAgICAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAvLyB3aWR0aDogY2FsYygke3dpZHRoICogMTAwfSUgLSAke2lkeCA9PT0gMCA/IDAgOiAyMH1weCk7XHJcbiAgICAgICAgICB3aWR0aDogJHt3aWR0aCAqIDEwMH0lO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6ICR7MS4wIC8gYXNwZWN0UmF0aW8gKiAxMDAgKiB3aWR0aH0lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cGF0aH0pO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6ICR7aWR4ID09PSAwID8gMCA6IEltYWdlR2FwfXB4O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJHthY3RpdmUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ307XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJHsxLjAgLyBhc3BlY3RSYXRpbyAqIDEwMH0lO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIG9uQ2xpY2s9e2V2dCA9PiB6b29tSW4oKX1cclxuICAgICAgLz5cclxuICAgICAge2FjdGl2ZSAmJlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInpvb21lZC13b3JrLWJhY2tncm91bmRcIil9XHJcbiAgICAgICAgICBvbkNsaWNrPXtldnQgPT4gem9vbU91dCgpfVxyXG4gICAgICAgICAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAke3pvb21EdXJhdGlvbiAvIDEwMDB9cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgb3BhY2l0eTogJHt6b29tZWQgPyAwLjIgOiAwLjB9O1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInpvb21lZC13b3JrXCIsIHsgem9vbWVkIH0pfVxyXG4gICAgICAgICAgb25DbGljaz17ZXZ0ID0+IHpvb21PdXQoKX1cclxuICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHt6b29tRHVyYXRpb24gLyAxMDAwfXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGxlZnQ6ICR7em9vbWVkID8gJzUwJScgOiBgJHsoKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCB8fCAwKSArIChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHx8IDApIC8gMil9cHhgfTtcclxuICAgICAgICAgICAgdG9wOiAke3pvb21lZCA/ICc1MCUnIDogYCR7KChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCB8fCAwKSArIChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCB8fCAwKSAvIDIpfXB4YH07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB3aWR0aDogJHt6b29tZWQgPyAnODB2dycgOiBgJHsoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB8fCAwKX1weGB9O1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7em9vbWVkID8gJzgwdmgnIDogYCR7KGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8IDApfXB4YH07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3BhdGh9KTtcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrVGlsZTsgXHJcbiJdfQ== */"), ";label:WorkTile;"),
    onClick: function onClick(evt) {
      return zoomIn();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), active && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("zoomed-work-background"),
    onClick: function onClick(evt) {
      return zoomOut();
    },
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("transition:all ", zoomDuration / 1000, "s ease-in-out;opacity:", zoomed ? 0.2 : 0.0, ";;label:WorkTile;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9fY29kZS9tYXJpa2luby13ZWIvY29tcG9uZW50cy9Xb3JrVGlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVrQiIsImZpbGUiOiIvbW50L2MvX2NvZGUvbWFyaWtpbm8td2ViL2NvbXBvbmVudHMvV29ya1RpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmltcG9ydCB7IElXb3JrVGlsZSwgSW1hZ2VHYXAgfSBmcm9tICcuL1dvcmtUaWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJV29ya1RpbGUge1xyXG4gIC8vXHJcbn07XHJcblxyXG5jb25zdCBXb3JrVGlsZSA9ICh7IHBhdGgsIHNpemUsIGFzcGVjdFJhdGlvLCBpZHgsIHdpZHRoIH0gOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGJhc2VJbWdSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIHpvb21lZCwgc2V0Wm9vbWVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgRVNDQVBFX0tFWSA9IDI3O1xyXG4gIGNvbnN0IHpvb21EdXJhdGlvbiA9IDI1MDtcclxuICBmdW5jdGlvbiB6b29tT3V0T25Fc2NhcGUoZXZ0IDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYoZXZ0LmtleUNvZGUgPT09IEVTQ0FQRV9LRVkpXHJcbiAgICAgIHpvb21PdXQoKTtcclxuICB9O1xyXG4gIGNvbnN0IHpvb21JbiA9ICgpID0+IHtcclxuICAgIC8vIGlmKGFjdGl2ZSlcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRab29tZWQodHJ1ZSksIDEwKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHpvb21PdXRPbkVzY2FwZSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB6b29tT3V0ID0gKCkgPT4ge1xyXG4gICAgLy8gaWYoIWFjdGl2ZSlcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgc2V0Wm9vbWVkKGZhbHNlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QWN0aXZlKGZhbHNlKSwgem9vbUR1cmF0aW9uKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHpvb21PdXRPbkVzY2FwZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2Jhc2VJbWdSZWZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwid29ya1wiXHJcbiAgICAgICAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAvLyB3aWR0aDogY2FsYygke3dpZHRoICogMTAwfSUgLSAke2lkeCA9PT0gMCA/IDAgOiAyMH1weCk7XHJcbiAgICAgICAgICB3aWR0aDogJHt3aWR0aCAqIDEwMH0lO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6ICR7MS4wIC8gYXNwZWN0UmF0aW8gKiAxMDAgKiB3aWR0aH0lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cGF0aH0pO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6ICR7aWR4ID09PSAwID8gMCA6IEltYWdlR2FwfXB4O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJHthY3RpdmUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ307XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJHsxLjAgLyBhc3BlY3RSYXRpbyAqIDEwMH0lO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIG9uQ2xpY2s9e2V2dCA9PiB6b29tSW4oKX1cclxuICAgICAgLz5cclxuICAgICAge2FjdGl2ZSAmJlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInpvb21lZC13b3JrLWJhY2tncm91bmRcIil9XHJcbiAgICAgICAgICBvbkNsaWNrPXtldnQgPT4gem9vbU91dCgpfVxyXG4gICAgICAgICAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAke3pvb21EdXJhdGlvbiAvIDEwMDB9cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgb3BhY2l0eTogJHt6b29tZWQgPyAwLjIgOiAwLjB9O1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInpvb21lZC13b3JrXCIsIHsgem9vbWVkIH0pfVxyXG4gICAgICAgICAgb25DbGljaz17ZXZ0ID0+IHpvb21PdXQoKX1cclxuICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHt6b29tRHVyYXRpb24gLyAxMDAwfXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGxlZnQ6ICR7em9vbWVkID8gJzUwJScgOiBgJHsoKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCB8fCAwKSArIChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHx8IDApIC8gMil9cHhgfTtcclxuICAgICAgICAgICAgdG9wOiAke3pvb21lZCA/ICc1MCUnIDogYCR7KChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCB8fCAwKSArIChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCB8fCAwKSAvIDIpfXB4YH07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB3aWR0aDogJHt6b29tZWQgPyAnODB2dycgOiBgJHsoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB8fCAwKX1weGB9O1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7em9vbWVkID8gJzgwdmgnIDogYCR7KGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8IDApfXB4YH07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3BhdGh9KTtcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrVGlsZTsgXHJcbiJdfQ== */"), ";label:WorkTile;"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("zoomed-work", {
      zoomed: zoomed
    }),
    onClick: function onClick(evt) {
      return zoomOut();
    },
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("transition:all ", zoomDuration / 1000, "s ease-in-out;left:", zoomed ? '50%' : "".concat((((_baseImgRef$current = baseImgRef.current) === null || _baseImgRef$current === void 0 ? void 0 : _baseImgRef$current.getBoundingClientRect().left) || 0) + (((_baseImgRef$current2 = baseImgRef.current) === null || _baseImgRef$current2 === void 0 ? void 0 : _baseImgRef$current2.getBoundingClientRect().width) || 0) / 2, "px"), ";top:", zoomed ? '50%' : "".concat((((_baseImgRef$current3 = baseImgRef.current) === null || _baseImgRef$current3 === void 0 ? void 0 : _baseImgRef$current3.getBoundingClientRect().top) || 0) + (((_baseImgRef$current4 = baseImgRef.current) === null || _baseImgRef$current4 === void 0 ? void 0 : _baseImgRef$current4.getBoundingClientRect().height) || 0) / 2, "px"), ";transform:translate(-50%,-50%);width:", zoomed ? '80vw' : "".concat(((_baseImgRef$current5 = baseImgRef.current) === null || _baseImgRef$current5 === void 0 ? void 0 : _baseImgRef$current5.getBoundingClientRect().width) || 0, "px"), ";height:", zoomed ? '80vh' : "".concat(((_baseImgRef$current6 = baseImgRef.current) === null || _baseImgRef$current6 === void 0 ? void 0 : _baseImgRef$current6.getBoundingClientRect().height) || 0, "px"), ";background-image:url(", path, ");;label:WorkTile;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9fY29kZS9tYXJpa2luby13ZWIvY29tcG9uZW50cy9Xb3JrVGlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVrQiIsImZpbGUiOiIvbW50L2MvX2NvZGUvbWFyaWtpbm8td2ViL2NvbXBvbmVudHMvV29ya1RpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmltcG9ydCB7IElXb3JrVGlsZSwgSW1hZ2VHYXAgfSBmcm9tICcuL1dvcmtUaWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJV29ya1RpbGUge1xyXG4gIC8vXHJcbn07XHJcblxyXG5jb25zdCBXb3JrVGlsZSA9ICh7IHBhdGgsIHNpemUsIGFzcGVjdFJhdGlvLCBpZHgsIHdpZHRoIH0gOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGJhc2VJbWdSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIHpvb21lZCwgc2V0Wm9vbWVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgRVNDQVBFX0tFWSA9IDI3O1xyXG4gIGNvbnN0IHpvb21EdXJhdGlvbiA9IDI1MDtcclxuICBmdW5jdGlvbiB6b29tT3V0T25Fc2NhcGUoZXZ0IDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYoZXZ0LmtleUNvZGUgPT09IEVTQ0FQRV9LRVkpXHJcbiAgICAgIHpvb21PdXQoKTtcclxuICB9O1xyXG4gIGNvbnN0IHpvb21JbiA9ICgpID0+IHtcclxuICAgIC8vIGlmKGFjdGl2ZSlcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRab29tZWQodHJ1ZSksIDEwKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHpvb21PdXRPbkVzY2FwZSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB6b29tT3V0ID0gKCkgPT4ge1xyXG4gICAgLy8gaWYoIWFjdGl2ZSlcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgc2V0Wm9vbWVkKGZhbHNlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QWN0aXZlKGZhbHNlKSwgem9vbUR1cmF0aW9uKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHpvb21PdXRPbkVzY2FwZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2Jhc2VJbWdSZWZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwid29ya1wiXHJcbiAgICAgICAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAvLyB3aWR0aDogY2FsYygke3dpZHRoICogMTAwfSUgLSAke2lkeCA9PT0gMCA/IDAgOiAyMH1weCk7XHJcbiAgICAgICAgICB3aWR0aDogJHt3aWR0aCAqIDEwMH0lO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6ICR7MS4wIC8gYXNwZWN0UmF0aW8gKiAxMDAgKiB3aWR0aH0lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cGF0aH0pO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6ICR7aWR4ID09PSAwID8gMCA6IEltYWdlR2FwfXB4O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJHthY3RpdmUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ307XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJHsxLjAgLyBhc3BlY3RSYXRpbyAqIDEwMH0lO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIG9uQ2xpY2s9e2V2dCA9PiB6b29tSW4oKX1cclxuICAgICAgLz5cclxuICAgICAge2FjdGl2ZSAmJlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInpvb21lZC13b3JrLWJhY2tncm91bmRcIil9XHJcbiAgICAgICAgICBvbkNsaWNrPXtldnQgPT4gem9vbU91dCgpfVxyXG4gICAgICAgICAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAke3pvb21EdXJhdGlvbiAvIDEwMDB9cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgb3BhY2l0eTogJHt6b29tZWQgPyAwLjIgOiAwLjB9O1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInpvb21lZC13b3JrXCIsIHsgem9vbWVkIH0pfVxyXG4gICAgICAgICAgb25DbGljaz17ZXZ0ID0+IHpvb21PdXQoKX1cclxuICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHt6b29tRHVyYXRpb24gLyAxMDAwfXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGxlZnQ6ICR7em9vbWVkID8gJzUwJScgOiBgJHsoKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCB8fCAwKSArIChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHx8IDApIC8gMil9cHhgfTtcclxuICAgICAgICAgICAgdG9wOiAke3pvb21lZCA/ICc1MCUnIDogYCR7KChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCB8fCAwKSArIChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCB8fCAwKSAvIDIpfXB4YH07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB3aWR0aDogJHt6b29tZWQgPyAnODB2dycgOiBgJHsoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB8fCAwKX1weGB9O1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7em9vbWVkID8gJzgwdmgnIDogYCR7KGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8IDApfXB4YH07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3BhdGh9KTtcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrVGlsZTsgXHJcbiJdfQ== */"), ";label:WorkTile;"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkTile);

/***/ })

})
//# sourceMappingURL=raster.js.555c222fe90be299aecd.hot-update.js.map
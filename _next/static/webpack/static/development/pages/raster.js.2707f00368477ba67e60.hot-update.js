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

  var zoomOutOnEscape = function zoomOutOnEscape(evt) {
    console.log('zoomOutOnEscape', evt.keyCode, active);
    if (evt.keyCode === ESCAPE_KEY) zoomOut();
  };

  var zoomIn = function zoomIn() {
    if (active) return;
    setActive(true);
    setTimeout(function () {
      return setZoomed(true);
    }, 10);
    document.addEventListener("keydown", zoomOutOnEscape);
  };

  var zoomOut = function zoomOut() {
    console.log('zoomOut', active);
    if (!active) return;
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
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("width:", width * 100, "%;padding-top:", 1.0 / aspectRatio * 100 * width, "%;background-image:url(", path, ");margin-left:", idx === 0 ? 0 : _WorkTiles__WEBPACK_IMPORTED_MODULE_3__["ImageGap"], "px;visibility:", active ? 'hidden' : 'visible', ";@media (max-width:767px){width:100%;padding-top:", 1.0 / aspectRatio * 100, "%;margin-left:0;};label:WorkTile;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9fY29kZS9tYXJpa2luby13ZWIvY29tcG9uZW50cy9Xb3JrVGlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENnQiIsImZpbGUiOiIvbW50L2MvX2NvZGUvbWFyaWtpbm8td2ViL2NvbXBvbmVudHMvV29ya1RpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmltcG9ydCB7IElXb3JrVGlsZSwgSW1hZ2VHYXAgfSBmcm9tICcuL1dvcmtUaWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJV29ya1RpbGUge1xyXG4gIC8vXHJcbn07XHJcblxyXG5jb25zdCBXb3JrVGlsZSA9ICh7IHBhdGgsIHNpemUsIGFzcGVjdFJhdGlvLCBpZHgsIHdpZHRoIH0gOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGJhc2VJbWdSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIHpvb21lZCwgc2V0Wm9vbWVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgRVNDQVBFX0tFWSA9IDI3O1xyXG4gIGNvbnN0IHpvb21EdXJhdGlvbiA9IDI1MDtcclxuICBjb25zdCB6b29tT3V0T25Fc2NhcGUgPSAoZXZ0IDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3pvb21PdXRPbkVzY2FwZScsIGV2dC5rZXlDb2RlLCBhY3RpdmUpXHJcbiAgICBpZihldnQua2V5Q29kZSA9PT0gRVNDQVBFX0tFWSlcclxuICAgICAgem9vbU91dCgpO1xyXG4gIH07XHJcbiAgY29uc3Qgem9vbUluID0gKCkgPT4ge1xyXG4gICAgaWYoYWN0aXZlKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFpvb21lZCh0cnVlKSwgMTApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgem9vbU91dE9uRXNjYXBlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHpvb21PdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnem9vbU91dCcsIGFjdGl2ZSlcclxuICAgIGlmKCFhY3RpdmUpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHNldFpvb21lZChmYWxzZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFjdGl2ZShmYWxzZSksIHpvb21EdXJhdGlvbik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB6b29tT3V0T25Fc2NhcGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXtiYXNlSW1nUmVmfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIndvcmtcIlxyXG4gICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgLy8gd2lkdGg6IGNhbGMoJHt3aWR0aCAqIDEwMH0lIC0gJHtpZHggPT09IDAgPyAwIDogMjB9cHgpO1xyXG4gICAgICAgICAgd2lkdGg6ICR7d2lkdGggKiAxMDB9JTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAkezEuMCAvIGFzcGVjdFJhdGlvICogMTAwICogd2lkdGh9JTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3BhdGh9KTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAke2lkeCA9PT0gMCA/IDAgOiBJbWFnZUdhcH1weDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6ICR7YWN0aXZlID8gJ2hpZGRlbicgOiAndmlzaWJsZSd9O1xyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7MS4wIC8gYXNwZWN0UmF0aW8gKiAxMDB9JTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICBvbkNsaWNrPXtldnQgPT4gem9vbUluKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIHthY3RpdmUgJiZcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJ6b29tZWQtd29yay1iYWNrZ3JvdW5kXCIpfVxyXG4gICAgICAgICAgb25DbGljaz17ZXZ0ID0+IHpvb21PdXQoKX1cclxuICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHt6b29tRHVyYXRpb24gLyAxMDAwfXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6ICR7em9vbWVkID8gMC4yIDogMC4wfTtcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJ6b29tZWQtd29ya1wiLCB7IHpvb21lZCB9KX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2V2dCA9PiB6b29tT3V0KCl9XHJcbiAgICAgICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7em9vbUR1cmF0aW9uIC8gMTAwMH1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBsZWZ0OiAke3pvb21lZCA/ICc1MCUnIDogYCR7KChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgfHwgMCkgKyAoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB8fCAwKSAvIDIpfXB4YH07XHJcbiAgICAgICAgICAgIHRvcDogJHt6b29tZWQgPyAnNTAlJyA6IGAkeygoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgfHwgMCkgKyAoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgfHwgMCkgLyAyKX1weGB9O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgd2lkdGg6ICR7em9vbWVkID8gJzgwdncnIDogYCR7KGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfHwgMCl9cHhgfTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAke3pvb21lZCA/ICc4MHZoJyA6IGAkeyhiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCB8fCAwKX1weGB9O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwYXRofSk7XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya1RpbGU7IFxyXG4iXX0= */"), ";label:WorkTile;"),
    onClick: function onClick(evt) {
      return zoomIn();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("transition:all ", zoomDuration / 1000, "s ease-in-out;opacity:", zoomed ? 0.2 : 0.0, ";;label:WorkTile;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9fY29kZS9tYXJpa2luby13ZWIvY29tcG9uZW50cy9Xb3JrVGlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVrQiIsImZpbGUiOiIvbW50L2MvX2NvZGUvbWFyaWtpbm8td2ViL2NvbXBvbmVudHMvV29ya1RpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmltcG9ydCB7IElXb3JrVGlsZSwgSW1hZ2VHYXAgfSBmcm9tICcuL1dvcmtUaWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJV29ya1RpbGUge1xyXG4gIC8vXHJcbn07XHJcblxyXG5jb25zdCBXb3JrVGlsZSA9ICh7IHBhdGgsIHNpemUsIGFzcGVjdFJhdGlvLCBpZHgsIHdpZHRoIH0gOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGJhc2VJbWdSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIHpvb21lZCwgc2V0Wm9vbWVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgRVNDQVBFX0tFWSA9IDI3O1xyXG4gIGNvbnN0IHpvb21EdXJhdGlvbiA9IDI1MDtcclxuICBjb25zdCB6b29tT3V0T25Fc2NhcGUgPSAoZXZ0IDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3pvb21PdXRPbkVzY2FwZScsIGV2dC5rZXlDb2RlLCBhY3RpdmUpXHJcbiAgICBpZihldnQua2V5Q29kZSA9PT0gRVNDQVBFX0tFWSlcclxuICAgICAgem9vbU91dCgpO1xyXG4gIH07XHJcbiAgY29uc3Qgem9vbUluID0gKCkgPT4ge1xyXG4gICAgaWYoYWN0aXZlKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFpvb21lZCh0cnVlKSwgMTApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgem9vbU91dE9uRXNjYXBlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHpvb21PdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnem9vbU91dCcsIGFjdGl2ZSlcclxuICAgIGlmKCFhY3RpdmUpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHNldFpvb21lZChmYWxzZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFjdGl2ZShmYWxzZSksIHpvb21EdXJhdGlvbik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB6b29tT3V0T25Fc2NhcGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXtiYXNlSW1nUmVmfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIndvcmtcIlxyXG4gICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgLy8gd2lkdGg6IGNhbGMoJHt3aWR0aCAqIDEwMH0lIC0gJHtpZHggPT09IDAgPyAwIDogMjB9cHgpO1xyXG4gICAgICAgICAgd2lkdGg6ICR7d2lkdGggKiAxMDB9JTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAkezEuMCAvIGFzcGVjdFJhdGlvICogMTAwICogd2lkdGh9JTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3BhdGh9KTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAke2lkeCA9PT0gMCA/IDAgOiBJbWFnZUdhcH1weDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6ICR7YWN0aXZlID8gJ2hpZGRlbicgOiAndmlzaWJsZSd9O1xyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7MS4wIC8gYXNwZWN0UmF0aW8gKiAxMDB9JTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICBvbkNsaWNrPXtldnQgPT4gem9vbUluKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIHthY3RpdmUgJiZcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJ6b29tZWQtd29yay1iYWNrZ3JvdW5kXCIpfVxyXG4gICAgICAgICAgb25DbGljaz17ZXZ0ID0+IHpvb21PdXQoKX1cclxuICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHt6b29tRHVyYXRpb24gLyAxMDAwfXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6ICR7em9vbWVkID8gMC4yIDogMC4wfTtcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJ6b29tZWQtd29ya1wiLCB7IHpvb21lZCB9KX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2V2dCA9PiB6b29tT3V0KCl9XHJcbiAgICAgICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7em9vbUR1cmF0aW9uIC8gMTAwMH1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBsZWZ0OiAke3pvb21lZCA/ICc1MCUnIDogYCR7KChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgfHwgMCkgKyAoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB8fCAwKSAvIDIpfXB4YH07XHJcbiAgICAgICAgICAgIHRvcDogJHt6b29tZWQgPyAnNTAlJyA6IGAkeygoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgfHwgMCkgKyAoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgfHwgMCkgLyAyKX1weGB9O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgd2lkdGg6ICR7em9vbWVkID8gJzgwdncnIDogYCR7KGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfHwgMCl9cHhgfTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAke3pvb21lZCA/ICc4MHZoJyA6IGAkeyhiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCB8fCAwKX1weGB9O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwYXRofSk7XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya1RpbGU7IFxyXG4iXX0= */"), ";label:WorkTile;"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("transition:all ", zoomDuration / 1000, "s ease-in-out;left:", zoomed ? '50%' : "".concat((((_baseImgRef$current = baseImgRef.current) === null || _baseImgRef$current === void 0 ? void 0 : _baseImgRef$current.getBoundingClientRect().left) || 0) + (((_baseImgRef$current2 = baseImgRef.current) === null || _baseImgRef$current2 === void 0 ? void 0 : _baseImgRef$current2.getBoundingClientRect().width) || 0) / 2, "px"), ";top:", zoomed ? '50%' : "".concat((((_baseImgRef$current3 = baseImgRef.current) === null || _baseImgRef$current3 === void 0 ? void 0 : _baseImgRef$current3.getBoundingClientRect().top) || 0) + (((_baseImgRef$current4 = baseImgRef.current) === null || _baseImgRef$current4 === void 0 ? void 0 : _baseImgRef$current4.getBoundingClientRect().height) || 0) / 2, "px"), ";transform:translate(-50%,-50%);width:", zoomed ? '80vw' : "".concat(((_baseImgRef$current5 = baseImgRef.current) === null || _baseImgRef$current5 === void 0 ? void 0 : _baseImgRef$current5.getBoundingClientRect().width) || 0, "px"), ";height:", zoomed ? '80vh' : "".concat(((_baseImgRef$current6 = baseImgRef.current) === null || _baseImgRef$current6 === void 0 ? void 0 : _baseImgRef$current6.getBoundingClientRect().height) || 0, "px"), ";background-image:url(", path, ");;label:WorkTile;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9fY29kZS9tYXJpa2luby13ZWIvY29tcG9uZW50cy9Xb3JrVGlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVrQiIsImZpbGUiOiIvbW50L2MvX2NvZGUvbWFyaWtpbm8td2ViL2NvbXBvbmVudHMvV29ya1RpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmltcG9ydCB7IElXb3JrVGlsZSwgSW1hZ2VHYXAgfSBmcm9tICcuL1dvcmtUaWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJV29ya1RpbGUge1xyXG4gIC8vXHJcbn07XHJcblxyXG5jb25zdCBXb3JrVGlsZSA9ICh7IHBhdGgsIHNpemUsIGFzcGVjdFJhdGlvLCBpZHgsIHdpZHRoIH0gOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGJhc2VJbWdSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIHpvb21lZCwgc2V0Wm9vbWVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgRVNDQVBFX0tFWSA9IDI3O1xyXG4gIGNvbnN0IHpvb21EdXJhdGlvbiA9IDI1MDtcclxuICBjb25zdCB6b29tT3V0T25Fc2NhcGUgPSAoZXZ0IDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3pvb21PdXRPbkVzY2FwZScsIGV2dC5rZXlDb2RlLCBhY3RpdmUpXHJcbiAgICBpZihldnQua2V5Q29kZSA9PT0gRVNDQVBFX0tFWSlcclxuICAgICAgem9vbU91dCgpO1xyXG4gIH07XHJcbiAgY29uc3Qgem9vbUluID0gKCkgPT4ge1xyXG4gICAgaWYoYWN0aXZlKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFpvb21lZCh0cnVlKSwgMTApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgem9vbU91dE9uRXNjYXBlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHpvb21PdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnem9vbU91dCcsIGFjdGl2ZSlcclxuICAgIGlmKCFhY3RpdmUpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHNldFpvb21lZChmYWxzZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEFjdGl2ZShmYWxzZSksIHpvb21EdXJhdGlvbik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB6b29tT3V0T25Fc2NhcGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXtiYXNlSW1nUmVmfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIndvcmtcIlxyXG4gICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgLy8gd2lkdGg6IGNhbGMoJHt3aWR0aCAqIDEwMH0lIC0gJHtpZHggPT09IDAgPyAwIDogMjB9cHgpO1xyXG4gICAgICAgICAgd2lkdGg6ICR7d2lkdGggKiAxMDB9JTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAkezEuMCAvIGFzcGVjdFJhdGlvICogMTAwICogd2lkdGh9JTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3BhdGh9KTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAke2lkeCA9PT0gMCA/IDAgOiBJbWFnZUdhcH1weDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6ICR7YWN0aXZlID8gJ2hpZGRlbicgOiAndmlzaWJsZSd9O1xyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7MS4wIC8gYXNwZWN0UmF0aW8gKiAxMDB9JTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICBvbkNsaWNrPXtldnQgPT4gem9vbUluKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIHthY3RpdmUgJiZcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJ6b29tZWQtd29yay1iYWNrZ3JvdW5kXCIpfVxyXG4gICAgICAgICAgb25DbGljaz17ZXZ0ID0+IHpvb21PdXQoKX1cclxuICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHt6b29tRHVyYXRpb24gLyAxMDAwfXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6ICR7em9vbWVkID8gMC4yIDogMC4wfTtcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJ6b29tZWQtd29ya1wiLCB7IHpvb21lZCB9KX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2V2dCA9PiB6b29tT3V0KCl9XHJcbiAgICAgICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7em9vbUR1cmF0aW9uIC8gMTAwMH1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBsZWZ0OiAke3pvb21lZCA/ICc1MCUnIDogYCR7KChiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgfHwgMCkgKyAoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB8fCAwKSAvIDIpfXB4YH07XHJcbiAgICAgICAgICAgIHRvcDogJHt6b29tZWQgPyAnNTAlJyA6IGAkeygoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgfHwgMCkgKyAoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgfHwgMCkgLyAyKX1weGB9O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgd2lkdGg6ICR7em9vbWVkID8gJzgwdncnIDogYCR7KGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfHwgMCl9cHhgfTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAke3pvb21lZCA/ICc4MHZoJyA6IGAkeyhiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCB8fCAwKX1weGB9O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwYXRofSk7XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya1RpbGU7IFxyXG4iXX0= */"), ";label:WorkTile;"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkTile);

/***/ })

})
//# sourceMappingURL=raster.js.2707f00368477ba67e60.hot-update.js.map
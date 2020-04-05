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
  var zoomOutOnEscape = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (evt) {
    console.log('zoomOutOnEscape', evt.keyCode);
    if (evt.keyCode === ESCAPE_KEY) zoomOut();
  }, []);

  var zoomIn = function zoomIn() {
    if (active) return;
    setActive(true);
    setTimeout(function () {
      return setZoomed(true);
    }, 10);
    document.addEventListener("keydown", zoomOutOnEscape);
  };

  var zoomOut = function zoomOut() {
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
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("width:", width * 100, "%;padding-top:", 1.0 / aspectRatio * 100 * width, "%;background-image:url(", path, ");margin-left:", idx === 0 ? 0 : _WorkTiles__WEBPACK_IMPORTED_MODULE_3__["ImageGap"], "px;visibility:", active ? 'hidden' : 'visible', ";@media (max-width:767px){width:100%;padding-top:", 1.0 / aspectRatio * 100, "%;margin-left:0;};label:WorkTile;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9fY29kZS9tYXJpa2luby13ZWIvY29tcG9uZW50cy9Xb3JrVGlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNnQiIsImZpbGUiOiIvbW50L2MvX2NvZGUvbWFyaWtpbm8td2ViL2NvbXBvbmVudHMvV29ya1RpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmltcG9ydCB7IElXb3JrVGlsZSwgSW1hZ2VHYXAgfSBmcm9tICcuL1dvcmtUaWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJV29ya1RpbGUge1xyXG4gIC8vXHJcbn07XHJcblxyXG5jb25zdCBXb3JrVGlsZSA9ICh7IHBhdGgsIHNpemUsIGFzcGVjdFJhdGlvLCBpZHgsIHdpZHRoIH0gOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGJhc2VJbWdSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIHpvb21lZCwgc2V0Wm9vbWVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgRVNDQVBFX0tFWSA9IDI3O1xyXG4gIGNvbnN0IHpvb21EdXJhdGlvbiA9IDI1MDtcclxuICBjb25zdCB6b29tT3V0T25Fc2NhcGUgPSB1c2VDYWxsYmFjaygoZXZ0IDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3pvb21PdXRPbkVzY2FwZScsIGV2dC5rZXlDb2RlKVxyXG4gICAgaWYoZXZ0LmtleUNvZGUgPT09IEVTQ0FQRV9LRVkpXHJcbiAgICAgIHpvb21PdXQoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgem9vbUluID0gKCkgPT4ge1xyXG4gICAgaWYoYWN0aXZlKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFpvb21lZCh0cnVlKSwgMTApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgem9vbU91dE9uRXNjYXBlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHpvb21PdXQgPSAoKSA9PiB7XHJcbiAgICBpZighYWN0aXZlKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBzZXRab29tZWQoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRBY3RpdmUoZmFsc2UpLCB6b29tRHVyYXRpb24pO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgem9vbU91dE9uRXNjYXBlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17YmFzZUltZ1JlZn1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3b3JrXCJcclxuICAgICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAgIC8vIHdpZHRoOiBjYWxjKCR7d2lkdGggKiAxMDB9JSAtICR7aWR4ID09PSAwID8gMCA6IDIwfXB4KTtcclxuICAgICAgICAgIHdpZHRoOiAke3dpZHRoICogMTAwfSU7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogJHsxLjAgLyBhc3BlY3RSYXRpbyAqIDEwMCAqIHdpZHRofSU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwYXRofSk7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogJHtpZHggPT09IDAgPyAwIDogSW1hZ2VHYXB9cHg7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAke2FjdGl2ZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnfTtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkezEuMCAvIGFzcGVjdFJhdGlvICogMTAwfSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgb25DbGljaz17ZXZ0ID0+IHpvb21JbigpfVxyXG4gICAgICAvPlxyXG4gICAgICB7YWN0aXZlICYmXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiem9vbWVkLXdvcmstYmFja2dyb3VuZFwiKX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2V2dCA9PiB6b29tT3V0KCl9XHJcbiAgICAgICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7em9vbUR1cmF0aW9uIC8gMTAwMH1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAke3pvb21lZCA/IDAuMiA6IDAuMH07XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiem9vbWVkLXdvcmtcIiwgeyB6b29tZWQgfSl9XHJcbiAgICAgICAgICBvbkNsaWNrPXtldnQgPT4gem9vbU91dCgpfVxyXG4gICAgICAgICAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAke3pvb21EdXJhdGlvbiAvIDEwMDB9cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgbGVmdDogJHt6b29tZWQgPyAnNTAlJyA6IGAkeygoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IHx8IDApICsgKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfHwgMCkgLyAyKX1weGB9O1xyXG4gICAgICAgICAgICB0b3A6ICR7em9vbWVkID8gJzUwJScgOiBgJHsoKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIHx8IDApICsgKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8IDApIC8gMil9cHhgfTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3pvb21lZCA/ICc4MHZ3JyA6IGAkeyhiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHx8IDApfXB4YH07XHJcbiAgICAgICAgICAgIGhlaWdodDogJHt6b29tZWQgPyAnODB2aCcgOiBgJHsoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgfHwgMCl9cHhgfTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cGF0aH0pO1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtUaWxlOyBcclxuIl19 */"), ";label:WorkTile;"),
    onClick: function onClick(evt) {
      return zoomIn();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("transition:all ", zoomDuration / 1000, "s ease-in-out;opacity:", zoomed ? 0.2 : 0.0, ";;label:WorkTile;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9fY29kZS9tYXJpa2luby13ZWIvY29tcG9uZW50cy9Xb3JrVGlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VrQiIsImZpbGUiOiIvbW50L2MvX2NvZGUvbWFyaWtpbm8td2ViL2NvbXBvbmVudHMvV29ya1RpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmltcG9ydCB7IElXb3JrVGlsZSwgSW1hZ2VHYXAgfSBmcm9tICcuL1dvcmtUaWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJV29ya1RpbGUge1xyXG4gIC8vXHJcbn07XHJcblxyXG5jb25zdCBXb3JrVGlsZSA9ICh7IHBhdGgsIHNpemUsIGFzcGVjdFJhdGlvLCBpZHgsIHdpZHRoIH0gOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGJhc2VJbWdSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIHpvb21lZCwgc2V0Wm9vbWVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgRVNDQVBFX0tFWSA9IDI3O1xyXG4gIGNvbnN0IHpvb21EdXJhdGlvbiA9IDI1MDtcclxuICBjb25zdCB6b29tT3V0T25Fc2NhcGUgPSB1c2VDYWxsYmFjaygoZXZ0IDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3pvb21PdXRPbkVzY2FwZScsIGV2dC5rZXlDb2RlKVxyXG4gICAgaWYoZXZ0LmtleUNvZGUgPT09IEVTQ0FQRV9LRVkpXHJcbiAgICAgIHpvb21PdXQoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgem9vbUluID0gKCkgPT4ge1xyXG4gICAgaWYoYWN0aXZlKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFpvb21lZCh0cnVlKSwgMTApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgem9vbU91dE9uRXNjYXBlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHpvb21PdXQgPSAoKSA9PiB7XHJcbiAgICBpZighYWN0aXZlKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBzZXRab29tZWQoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRBY3RpdmUoZmFsc2UpLCB6b29tRHVyYXRpb24pO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgem9vbU91dE9uRXNjYXBlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17YmFzZUltZ1JlZn1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3b3JrXCJcclxuICAgICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAgIC8vIHdpZHRoOiBjYWxjKCR7d2lkdGggKiAxMDB9JSAtICR7aWR4ID09PSAwID8gMCA6IDIwfXB4KTtcclxuICAgICAgICAgIHdpZHRoOiAke3dpZHRoICogMTAwfSU7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogJHsxLjAgLyBhc3BlY3RSYXRpbyAqIDEwMCAqIHdpZHRofSU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwYXRofSk7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogJHtpZHggPT09IDAgPyAwIDogSW1hZ2VHYXB9cHg7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAke2FjdGl2ZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnfTtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkezEuMCAvIGFzcGVjdFJhdGlvICogMTAwfSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgb25DbGljaz17ZXZ0ID0+IHpvb21JbigpfVxyXG4gICAgICAvPlxyXG4gICAgICB7YWN0aXZlICYmXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiem9vbWVkLXdvcmstYmFja2dyb3VuZFwiKX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2V2dCA9PiB6b29tT3V0KCl9XHJcbiAgICAgICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7em9vbUR1cmF0aW9uIC8gMTAwMH1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAke3pvb21lZCA/IDAuMiA6IDAuMH07XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiem9vbWVkLXdvcmtcIiwgeyB6b29tZWQgfSl9XHJcbiAgICAgICAgICBvbkNsaWNrPXtldnQgPT4gem9vbU91dCgpfVxyXG4gICAgICAgICAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAke3pvb21EdXJhdGlvbiAvIDEwMDB9cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgbGVmdDogJHt6b29tZWQgPyAnNTAlJyA6IGAkeygoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IHx8IDApICsgKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfHwgMCkgLyAyKX1weGB9O1xyXG4gICAgICAgICAgICB0b3A6ICR7em9vbWVkID8gJzUwJScgOiBgJHsoKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIHx8IDApICsgKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8IDApIC8gMil9cHhgfTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3pvb21lZCA/ICc4MHZ3JyA6IGAkeyhiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHx8IDApfXB4YH07XHJcbiAgICAgICAgICAgIGhlaWdodDogJHt6b29tZWQgPyAnODB2aCcgOiBgJHsoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgfHwgMCl9cHhgfTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cGF0aH0pO1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtUaWxlOyBcclxuIl19 */"), ";label:WorkTile;"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("transition:all ", zoomDuration / 1000, "s ease-in-out;left:", zoomed ? '50%' : "".concat((((_baseImgRef$current = baseImgRef.current) === null || _baseImgRef$current === void 0 ? void 0 : _baseImgRef$current.getBoundingClientRect().left) || 0) + (((_baseImgRef$current2 = baseImgRef.current) === null || _baseImgRef$current2 === void 0 ? void 0 : _baseImgRef$current2.getBoundingClientRect().width) || 0) / 2, "px"), ";top:", zoomed ? '50%' : "".concat((((_baseImgRef$current3 = baseImgRef.current) === null || _baseImgRef$current3 === void 0 ? void 0 : _baseImgRef$current3.getBoundingClientRect().top) || 0) + (((_baseImgRef$current4 = baseImgRef.current) === null || _baseImgRef$current4 === void 0 ? void 0 : _baseImgRef$current4.getBoundingClientRect().height) || 0) / 2, "px"), ";transform:translate(-50%,-50%);width:", zoomed ? '80vw' : "".concat(((_baseImgRef$current5 = baseImgRef.current) === null || _baseImgRef$current5 === void 0 ? void 0 : _baseImgRef$current5.getBoundingClientRect().width) || 0, "px"), ";height:", zoomed ? '80vh' : "".concat(((_baseImgRef$current6 = baseImgRef.current) === null || _baseImgRef$current6 === void 0 ? void 0 : _baseImgRef$current6.getBoundingClientRect().height) || 0, "px"), ";background-image:url(", path, ");;label:WorkTile;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9fY29kZS9tYXJpa2luby13ZWIvY29tcG9uZW50cy9Xb3JrVGlsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVrQiIsImZpbGUiOiIvbW50L2MvX2NvZGUvbWFyaWtpbm8td2ViL2NvbXBvbmVudHMvV29ya1RpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmltcG9ydCB7IElXb3JrVGlsZSwgSW1hZ2VHYXAgfSBmcm9tICcuL1dvcmtUaWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJV29ya1RpbGUge1xyXG4gIC8vXHJcbn07XHJcblxyXG5jb25zdCBXb3JrVGlsZSA9ICh7IHBhdGgsIHNpemUsIGFzcGVjdFJhdGlvLCBpZHgsIHdpZHRoIH0gOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGJhc2VJbWdSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFsgYWN0aXZlLCBzZXRBY3RpdmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbIHpvb21lZCwgc2V0Wm9vbWVkIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgRVNDQVBFX0tFWSA9IDI3O1xyXG4gIGNvbnN0IHpvb21EdXJhdGlvbiA9IDI1MDtcclxuICBjb25zdCB6b29tT3V0T25Fc2NhcGUgPSB1c2VDYWxsYmFjaygoZXZ0IDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3pvb21PdXRPbkVzY2FwZScsIGV2dC5rZXlDb2RlKVxyXG4gICAgaWYoZXZ0LmtleUNvZGUgPT09IEVTQ0FQRV9LRVkpXHJcbiAgICAgIHpvb21PdXQoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgem9vbUluID0gKCkgPT4ge1xyXG4gICAgaWYoYWN0aXZlKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFpvb21lZCh0cnVlKSwgMTApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgem9vbU91dE9uRXNjYXBlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHpvb21PdXQgPSAoKSA9PiB7XHJcbiAgICBpZighYWN0aXZlKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBzZXRab29tZWQoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRBY3RpdmUoZmFsc2UpLCB6b29tRHVyYXRpb24pO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgem9vbU91dE9uRXNjYXBlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17YmFzZUltZ1JlZn1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3b3JrXCJcclxuICAgICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAgIC8vIHdpZHRoOiBjYWxjKCR7d2lkdGggKiAxMDB9JSAtICR7aWR4ID09PSAwID8gMCA6IDIwfXB4KTtcclxuICAgICAgICAgIHdpZHRoOiAke3dpZHRoICogMTAwfSU7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogJHsxLjAgLyBhc3BlY3RSYXRpbyAqIDEwMCAqIHdpZHRofSU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwYXRofSk7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogJHtpZHggPT09IDAgPyAwIDogSW1hZ2VHYXB9cHg7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAke2FjdGl2ZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnfTtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkezEuMCAvIGFzcGVjdFJhdGlvICogMTAwfSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgb25DbGljaz17ZXZ0ID0+IHpvb21JbigpfVxyXG4gICAgICAvPlxyXG4gICAgICB7YWN0aXZlICYmXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiem9vbWVkLXdvcmstYmFja2dyb3VuZFwiKX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2V2dCA9PiB6b29tT3V0KCl9XHJcbiAgICAgICAgICBjc3M9e2Nzc2BcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsICR7em9vbUR1cmF0aW9uIC8gMTAwMH1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAke3pvb21lZCA/IDAuMiA6IDAuMH07XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiem9vbWVkLXdvcmtcIiwgeyB6b29tZWQgfSl9XHJcbiAgICAgICAgICBvbkNsaWNrPXtldnQgPT4gem9vbU91dCgpfVxyXG4gICAgICAgICAgY3NzPXtjc3NgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAke3pvb21EdXJhdGlvbiAvIDEwMDB9cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgbGVmdDogJHt6b29tZWQgPyAnNTAlJyA6IGAkeygoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IHx8IDApICsgKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfHwgMCkgLyAyKX1weGB9O1xyXG4gICAgICAgICAgICB0b3A6ICR7em9vbWVkID8gJzUwJScgOiBgJHsoKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIHx8IDApICsgKGJhc2VJbWdSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8IDApIC8gMil9cHhgfTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3pvb21lZCA/ICc4MHZ3JyA6IGAkeyhiYXNlSW1nUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHx8IDApfXB4YH07XHJcbiAgICAgICAgICAgIGhlaWdodDogJHt6b29tZWQgPyAnODB2aCcgOiBgJHsoYmFzZUltZ1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgfHwgMCl9cHhgfTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cGF0aH0pO1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtUaWxlOyBcclxuIl19 */"), ";label:WorkTile;"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkTile);

/***/ })

})
//# sourceMappingURL=raster.js.5f81beb091bc3f0aa6b7.hot-update.js.map
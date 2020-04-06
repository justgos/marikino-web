webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/react-accelerometer.js":
/*!*******************************************!*\
  !*** ./components/react-accelerometer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/**
 * @usage
 *    <ReactAccelerometer useGravity multiplier={3}>
 *      {(position, rotation) => (
 *        <div style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)`}}>
 *          Hello there
 *        </div>
 *      )}
 *    </ReactAccelerometer>
 */


var ReactAccelerometer = /*#__PURE__*/function (_React$Component) {
  "use strict";

  _inherits(ReactAccelerometer, _React$Component);

  var _super = _createSuper(ReactAccelerometer);

  function ReactAccelerometer(props) {
    var _this;

    _classCallCheck(this, ReactAccelerometer);

    _this = _super.call(this, props);
    _this.state = {
      x: null,
      y: null,
      z: null,
      rotation: null,
      landscape: false
    };
    _this.handleAcceleration = _this.handleAcceleration.bind(_assertThisInitialized(_this));
    _this.handleOrientation = _this.handleOrientation.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ReactAccelerometer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleOrientation();
      console.log("window.addEventListener('devicemotion', this.handleAcceleration)");
      window.addEventListener('devicemotion', this.handleAcceleration);
      window.addEventListener('orientationchange', this.handleOrientation);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('devicemotion', this.handleAcceleration);
      window.removeEventListener('orientationchange', this.handleOrientation);
    }
  }, {
    key: "handleOrientation",
    value: function handleOrientation(event) {
      var _window = window,
          orientation = _window.orientation;
      this.setState({
        landscape: orientation === 90 || orientation === -90
      });
    }
  }, {
    key: "handleAcceleration",
    value: function handleAcceleration(event) {
      console.log('handleAcceleration', event);
      var landscape = this.state.landscape;
      var _this$props = this.props,
          useGravity = _this$props.useGravity,
          multiplier = _this$props.multiplier;
      var acceleration = useGravity ? event.accelerationIncludingGravity : event.acceleration;
      var rotation = event.rotationRate || null;
      var x = acceleration.x,
          y = acceleration.y,
          z = acceleration.z;
      this.setState({
        rotation: rotation,
        x: (landscape ? y : x) * multiplier,
        y: (landscape ? x : y) * multiplier,
        z: z * multiplier
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
          x = _this$state.x,
          y = _this$state.y,
          z = _this$state.z,
          rotation = _this$state.rotation;
      /**
       * We have to detect if one of the values was ever set by the 'devicemotion' event,
       * as some browsers implement the API, but the device itself doesn't support.
       */

      if (x || y || z) {
        return children({
          x: x,
          y: y,
          z: z
        }, rotation);
      }

      return children();
    }
  }]);

  return ReactAccelerometer;
}(React.Component); // ReactAccelerometer.propTypes = {
//   children: React.PropTypes.func.isRequired,
//   multiplier: React.PropTypes.number,
//   useGravity: React.PropTypes.bool
// }


ReactAccelerometer.defaultProps = {
  multiplier: 1,
  useGravity: true
};
module.exports = ReactAccelerometer;

/***/ })

})
//# sourceMappingURL=index.js.00081e745bee6bcd9068.hot-update.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o),i=n("YFqc"),a=n.n(i),c=n("mCIp"),u=n.n(c),l=(n("kxKB"),n("3bhu")),s=n("qKvR");r.a.createElement;e.default=function(){return Object(s.b)(r.a.Fragment,null,Object(s.b)(l.a,null),Object(s.b)("div",{className:"index-container"},Object(s.b)("div",{className:"eye-container"},Object(s.b)(a.a,{href:"/raster"},Object(s.b)("a",null,Object(s.b)("div",{className:"logo"}))),Object(s.b)(u.a,null,(function(t,e,n){return console.log(null===e||void 0===e?void 0:e.dx,null===e||void 0===e?void 0:e.dy,null===e||void 0===e?void 0:e.dz,n),Object(s.b)(r.a.Fragment,null)})),Object(s.b)(u.a,null,(function(t,e){return Object(s.b)(r.a.Fragment,null,Object(s.b)(a.a,{href:"/raster"},Object(s.b)("a",null,Object(s.b)("div",{className:"eye-raster"}))),Object(s.b)(a.a,{href:"/vector"},Object(s.b)("a",null,Object(s.b)("div",{className:"eye-vector"}))))})))))}},"7W2i":function(t,e,n){var o=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},SksO:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},a1gu:function(t,e,n){var o=n("cDf5"),r=n("PJYZ");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},mCIp:function(t,e,n){var o=n("lwsE"),r=n("W8MJ"),i=n("PJYZ"),a=n("a1gu"),c=n("Nsbk"),u=n("7W2i");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=function(t){"use strict";u(s,t);var e,n=(e=s,function(){var t,n=c(e);if(l()){var o=c(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return a(this,t)});function s(t){var e;return o(this,s),(e=n.call(this,t)).state={x:null,y:null,z:null,dx:null,dy:null,dz:null,rotation:null,landscape:!1},e.handleAcceleration=e.handleAcceleration.bind(i(e)),e.handleOrientation=e.handleOrientation.bind(i(e)),e}return r(s,[{key:"componentDidMount",value:function(){this.handleOrientation(),window.addEventListener("devicemotion",this.handleAcceleration),window.addEventListener("orientationchange",this.handleOrientation)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("devicemotion",this.handleAcceleration),window.removeEventListener("orientationchange",this.handleOrientation)}},{key:"handleOrientation",value:function(t){var e=window.orientation;this.setState({landscape:90===e||-90===e})}},{key:"handleAcceleration",value:function(t){var e=this.state.landscape,n=this.props,o=n.useGravity,r=n.multiplier,i=o?t.accelerationIncludingGravity:t.acceleration,a=t.rotationRate||null,c=i.x,u=i.y,l=i.z;this.setState({rotation:a,x:(e?u:c)*r,y:(e?c:u)*r,z:l*r,dx:(e?u:c)*r-(this.state.x||0),dy:(e?c:u)*r-(this.state.y||0),dz:l*r-(this.state.z||0)})}},{key:"render",value:function(){var t=this.props.children,e=this.state,n=e.x,o=e.y,r=e.z,i=e.rotation;return n||o||r?t({x:n,y:o,z:r},i):t()}}]),s}(n("q1tI").Component);s.defaultProps={multiplier:1,useGravity:!0},t.exports=s}},[["/EDR",0,2,1,3,4]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{HT0l:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),c=n("TSYQ"),u=n.n(c),l=n("qKvR");o.a.createElement;e.a=function(t){var e=t.page,n=Object(r.useState)(!1),o=n[0],a=n[1];return Object(l.b)("nav",{className:u()({open:o})},Object(l.b)("div",{className:"container"},Object(l.b)("div",{className:"toggle-nav",onClick:function(t){return a(!o)}}),Object(l.b)(i.a,{href:"/"},Object(l.b)("a",null,Object(l.b)("div",{className:"logo"}))),Object(l.b)("div",{className:"floater"},Object(l.b)("div",{className:"toggle-nav",onClick:function(t){return a(!o)}}),Object(l.b)("ul",null,[{value:"raster",label:"raster"},{value:"vector",label:"vector"},{value:"sketch",label:"sketch"},{value:"me",label:"me"}].map((function(t,n){return Object(l.b)("li",{key:n},Object(l.b)(i.a,{href:"/".concat(t.value)},Object(l.b)("a",{className:u()({active:t.value===e})},Object(l.b)("span",null,t.label))))}))))))}},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},h2HZ:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return v}));var c=n("q1tI"),u=n.n(c),l=n("TSYQ"),s=n.n(l),b=n("qKvR"),p=(u.a.createElement,function(t){var e,n,r,o,a,i,l=t.path,p=(t.size,t.aspectRatio),f=t.idx,d=t.width,g=Object(c.useRef)(null),m=Object(c.useState)(!1),O=m[0],h=m[1],j=Object(c.useState)(!1),y=j[0],w=j[1],k=27;function R(t){t.keyCode===k&&x()}var x=function(){w(!1),setTimeout((function(){return h(!1)}),250),document.removeEventListener("keydown",R)};return Object(b.b)(u.a.Fragment,null,Object(b.b)("div",{ref:g,className:"work",css:Object(b.a)("width:",100*d,"%;padding-top:",1/p*100*d,"%;background-image:url(",l,");margin-left:",0===f?0:v,"px;visibility:",O?"hidden":"visible",";@media (max-width:768px){width:100%;padding-top:",1/p*100,"%;margin-left:0;}"),onClick:function(t){return h(!0),setTimeout((function(){return w(!0)}),10),void document.addEventListener("keydown",R)}}),O&&Object(b.b)(u.a.Fragment,null,Object(b.b)("div",{className:s()("zoomed-work-background"),onClick:function(t){return x()},css:Object(b.a)("transition:all ",.25,"s ease-in-out;opacity:",y?.2:0,";")}),Object(b.b)("div",{className:s()("zoomed-work",{zoomed:y}),onClick:function(t){return x()},css:Object(b.a)("transition:all ",.25,"s ease-in-out;left:",y?"50%":"".concat(((null===(e=g.current)||void 0===e?void 0:e.getBoundingClientRect().left)||0)+((null===(n=g.current)||void 0===n?void 0:n.getBoundingClientRect().width)||0)/2,"px"),";top:",y?"50%":"".concat(((null===(r=g.current)||void 0===r?void 0:r.getBoundingClientRect().top)||0)+((null===(o=g.current)||void 0===o?void 0:o.getBoundingClientRect().height)||0)/2,"px"),";transform:translate(-50%,-50%);width:",y?"80vw":"".concat((null===(a=g.current)||void 0===a?void 0:a.getBoundingClientRect().width)||0,"px"),";height:",y?"80vh":"".concat((null===(i=g.current)||void 0===i?void 0:i.getBoundingClientRect().height)||0,"px"),";background-image:url(",l,");")})))});u.a.createElement;function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=20;e.b=function(t){var e=t.rootPath,n=t.works,o=t.aspectRatioPerRow,i=void 0===o?3:o,l=Object(c.useMemo)((function(){return n.map((function(t){return d({},t,{aspectRatio:t.size[0]/t.size[1],idx:-1,width:0,path:e+t.path})}))}),[e,n]),s=[],f=[];return l.forEach((function(t,e){var n=f.reduce((function(t,e){return t+e.aspectRatio}),0);e===l.length-1&&f.push(t),(n+t.aspectRatio>i||e===l.length-1)&&(n=f.reduce((function(t,e){return t+e.aspectRatio}),0),s.push.apply(s,a(f.map((function(t,e){return d({},t,{idx:e,width:t.aspectRatio/n*1200/(1200+(f.length-1)*(v+1))})})))),f=[]),e<l.length-1&&f.push(t)})),Object(b.b)(u.a.Fragment,null,Object(b.b)("div",{className:"container works-container"},s.map((function(t,e){return Object(b.b)(p,r({key:e},t))}))))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("rePB"),c=n("q1tI"),i=n.n(c),o=n("YFqc"),a=n.n(o),l=n("TSYQ"),u=n.n(l),b=(n("kxKB"),n("3bhu")),f=n("qKvR");i.a.createElement;function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.default=function(){var e=Object(c.useState)({left:!1,right:!1}),t=e[0],n=e[1],o=function(e,c,i){if(console.log("updateAccel",e,c),e&&c){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t);e>.2&&(!t.left||t.right)&&(o.left=!0,o.right=!1),e<-.2&&(t.left||!t.right)&&(o.left=!1,o.right=!0),!(c<-.2)||t.left&&t.right||(o.left=!0,o.right=!0),c>.2&&(t.left||t.right)&&(o.left=!1,o.right=!1),o.left===t.left&&o.right===t.right||n(o)}},l=Object(c.useMemo)((function(){return{landscape:!1,x:0,y:0,z:0,dx:0,dy:0,dz:0}}),[]),d=function(e){var t=window.orientation;l.landscape=90===t||-90===t},O=function(e){var t=l.landscape,n=1,r=!1?e.accelerationIncludingGravity:e.acceleration,c=(e.rotationRate,r||{x:0,y:0,z:0}),i=c.x,a=c.y,u=c.z;console.log("handleAcceleration",i,a,u),null!=i&&null!=a&&null!=u&&(l.x=(t?a:i)*n,l.y=(t?i:a)*n,l.z=u*n,l.dx=(t?a:i)*n-l.x,l.dy=(t?i:a)*n-l.y,l.dz=u*n-l.x,o(l.dx,l.dy,l.dz))};return Object(c.useEffect)((function(){return window.addEventListener("devicemotion",O),window.addEventListener("orientationchange",d),function(){window.removeEventListener("devicemotion",O),window.removeEventListener("orientationchange",d)}}),[]),Object(f.b)(i.a.Fragment,null,Object(f.b)(b.a,null),Object(f.b)("div",{className:"index-container"},Object(f.b)("div",{className:"eye-container"},Object(f.b)(a.a,{href:"/raster"},Object(f.b)("a",null,Object(f.b)("div",{className:"logo"}))),Object(f.b)(a.a,{href:"/raster"},Object(f.b)("a",null,Object(f.b)("div",{className:u()("eye-raster",{active:t.left})}))),Object(f.b)(a.a,{href:"/vector"},Object(f.b)("a",null,Object(f.b)("div",{className:u()("eye-vector",{active:t.right})}))))))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["/EDR",0,2,1,3,4]]]);
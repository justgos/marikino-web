(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("rePB"),c=n("q1tI"),i=n.n(c),a=n("YFqc"),o=n.n(a),u=n("TSYQ"),l=n.n(u),b=(n("kxKB"),n("3bhu")),d=n("qKvR");i.a.createElement;function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.default=function(){var e=Object(c.useState)({left:!1,right:!1}),t=e[0],n=e[1],a=function(e,c,i){if(console.log("updateAccel",e,c),e&&c){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t);Math.abs(e)>Math.abs(c)&&e>.7&&(!t.left||t.right)&&(a.left=!0,a.right=!1),Math.abs(e)>Math.abs(c)&&e<-.7&&(t.left||!t.right)&&(a.left=!1,a.right=!0),!(c<-.7)||t.left&&t.right||(a.left=!0,a.right=!0),c>.7&&(t.left||t.right)&&(a.left=!1,a.right=!1),a.left===t.left&&a.right===t.right||n(a)}},u=Object(c.useMemo)((function(){return{landscape:!1,x:0,y:0,z:0,dx:0,dy:0,dz:0,dxSum:0,dySum:0}}),[]),f=function(e){var t=window.orientation;u.landscape=90===t||-90===t},O=function(e){var t=u.landscape,n=1,r=!1?e.accelerationIncludingGravity:e.acceleration,c=(e.rotationRate,r||{x:0,y:0,z:0}),i=c.x,o=c.y,l=c.z;null!=i&&null!=o&&null!=l&&(u.dx=(t?o:i)*n-u.x,u.dy=(t?i:o)*n-u.y,u.dz=l*n-u.x,u.x=(t?o:i)*n,u.y=(t?i:o)*n,u.z=l*n,u.dxSum=.9*u.dxSum+u.dx,u.dySum=.9*u.dySum+u.dy,a(u.dxSum,u.dxSum,u.dz))};return Object(c.useEffect)((function(){return window.addEventListener("devicemotion",O),window.addEventListener("orientationchange",f),function(){window.removeEventListener("devicemotion",O),window.removeEventListener("orientationchange",f)}}),[]),Object(d.b)(i.a.Fragment,null,Object(d.b)(b.a,null),Object(d.b)("div",{className:"index-container"},Object(d.b)("div",{className:"eye-container"},Object(d.b)(o.a,{href:"/raster"},Object(d.b)("a",null,Object(d.b)("div",{className:"logo"}))),Object(d.b)(o.a,{href:"/raster"},Object(d.b)("a",null,Object(d.b)("div",{className:l()("eye-raster",{active:t.left})}))),Object(d.b)(o.a,{href:"/vector"},Object(d.b)("a",null,Object(d.b)("div",{className:l()("eye-vector",{active:t.right})}))))))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["/EDR",0,2,1,3,4]]]);
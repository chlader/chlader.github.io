(function(t){function e(e){for(var a,i,c=e[0],l=e[1],s=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0367":function(t,e,n){},5104:function(t,e,n){t.exports=n.p+"img/chi.f63ebd13.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),n("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),n("router-view")],1)},o=[],i={name:"App"},c=i,l=(n("034f"),n("2877")),s=Object(l["a"])(c,r,o,!1,null,null,null),u=s.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticStyle:{height:"300px"},attrs:{src:n("5104"),alt:""}}),a("h2",[t._v("Hello my name is Ryan")]),a("h4",[t._v("I am a software developer located in Chicago, Illinois")])])}],v={name:"Home"},m=v,d=Object(l["a"])(m,p,h,!1,null,null,null),b=d.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"50px"}},[n("h1",{staticStyle:{"margin-bottom":"75px"}},[t._v("About Me")]),n("p",{staticStyle:{"font-size":"24px"}},[t._v("I "),n("span",{staticStyle:{"font-weight":"bolder"}},[t._v("DESIGN")]),t._v(" & "),n("span",{staticStyle:{"font-weight":"bolder"}},[t._v("GROW")]),t._v(" products that people love!")]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column-1"},[n("p",{staticStyle:{"margin-left":"100px"}},[t._v("I am a software devloper born & raised in the Chicagoland area. I recently graduated from the University of Iowa in 2019 with a BA in Computer Science. Web development is one of my big passions that I enjoy doing in & out of the office! My goals are to expand my brand & become the best programmer I could be.")])]),n("div",{staticClass:"column-2"},[n("p",{staticStyle:{"margin-right":"100px"}},[t._v("I currently work for a healthcare company working in Angular and C#! I love learning new languages and frameworks (this site is in VueJS). I enjoy making the user interface & user experience as comfortable for the user as it can be! Check out my "),n("a",{staticClass:"link",attrs:{href:"#",target:"_blank"}},[t._v("project portfolio")]),t._v(" & "),n("a",{staticClass:"link",attrs:{href:"https://github.com/chlader",target:"_blank"}},[t._v("my Github.")])])])])])}],y={},_=y,x=(n("b8ab"),Object(l["a"])(_,g,w,!1,null,null,null)),k=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"50px"}},[n("h1",{staticStyle:{"margin-bottom":"75px"}},[t._v("Contact Me")]),t._m(0),n("div",{staticStyle:{display:"flex","justify-content":"space-evenly","margin-top":"75px"}},[n("a",{attrs:{href:"https://github.com/chlader",target:"_blank"}},[n("svg",{staticClass:"svg-inline--fa fa-github fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"}},[n("path",{attrs:{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}})])]),n("a",{attrs:{href:"https://www.linkedin.com/in/ryan-chladek/",target:"_blank"}},[n("svg",{staticClass:"svg-inline--fa fa-linkedin-in fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}})])]),n("a",{attrs:{href:"https://www.facebook.com/ryan.chladek/",target:"_blank"}},[n("svg",{staticClass:"svg-inline--fa fa-facebook fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}})])])])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{"font-size":"24px"}},[t._v(" I am "),n("span",{staticStyle:{"font-weight":"bolder"}},[t._v("ALWAYS")]),t._v(" looking for more work. Connect with me for more! ")])}],j={},O=j,z=(n("610c"),Object(l["a"])(O,C,S,!1,null,null,null)),M=z.exports;a["a"].use(f["a"]);var I=new f["a"]({routes:[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:k},{path:"/contact",name:"Contact",component:M}]});a["a"].config.productionTip=!1,new a["a"]({router:I,render:function(t){return t(u)}}).$mount("#app")},"610c":function(t,e,n){"use strict";var a=n("0367"),r=n.n(a);r.a},"85ec":function(t,e,n){},"98e0":function(t,e,n){},b8ab:function(t,e,n){"use strict";var a=n("98e0"),r=n.n(a);r.a}});
//# sourceMappingURL=app.5cc3b3c6.js.map
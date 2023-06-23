(function(){"use strict";var t={7281:function(t,e,n){var r=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("b-container",{attrs:{fluid:""}},[e("header",["home"!==t.currentRouteName?e("HeaderPage"):t._e()],1),e("router-view")],1)],1)},a=[],i=function(){var t=this,e=t._self._c;return e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/taskList"}},[t._v("Task list")])],1)},u=[],s={name:"HeaderPage"},c=s,l=n(1001),f=(0,l.Z)(c,i,u,!1,null,null,null),d=f.exports,m={components:{HeaderPage:d},computed:{currentRouteName(){return this.$route.name}}},p=m,v=(0,l.Z)(p,o,a,!1,null,null,null),h=v.exports,g=n(2631),k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("b-button",{attrs:{variant:"primary",to:"/taskList"}},[t._v("Go to task list")])],1)},b=[],y={name:"HomeView",components:{}},T=y,_=(0,l.Z)(T,k,b,!1,null,null,null),E=_.exports;r["default"].use(g.ZP);const S=[{path:"/",name:"home",component:E},{path:"/taskList",name:"taskList",component:()=>n.e(443).then(n.bind(n,2416))}],w=new g.ZP({mode:"history",base:"/task-manager/",routes:S});var A=w,O=n(3822),C=(n(7658),{SET_TASK:"SET_TASK",DELETE_TASK:"DELETE_TASK",EDIT_TASK:"EDIT_TASK"});const{SET_TASK:P,DELETE_TASK:j,EDIT_TASK:L}=C,x={state:{tasks:[]},getters:{tasks:({tasks:t})=>t},mutations:{[P](t,e){t.tasks.push(e)},[j](t,e){t.tasks=t.tasks.filter((t=>t.id!==e))},[L](t,e){const n=t.tasks.findIndex((t=>t.id===e.id));-1!==n&&(t.tasks=[...t.tasks.slice(0,n),e,...t.tasks.slice(n+1)])}},actions:{setTask({commit:t},e){t(P,e)},deleteTask({commit:t},e){t(j,e)},editTask({commit:t},e){t(L,e)}}};var N=x,K=n(2415);r["default"].use(O.ZP);const D=new O.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{tasks:N},plugins:[(0,K.Z)({storage:window.sessionStorage})]});var Z=D,H=n(6681),I=n(9425);n(7024);r["default"].use(H.XG7),r["default"].use(I.A7),r["default"].config.productionTip=!1,new r["default"]({router:A,store:Z,render:t=>t(h)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.769ebc36.js"}}(),function(){n.miniCssF=function(t){return"css/about.72532d3c.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="task-manager:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[o];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/task-manager/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode&&a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(e(i,u))return o();t(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={443:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),u=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7281)}));r=n.O(r)})();
//# sourceMappingURL=app.ed811661.js.map
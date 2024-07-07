(function(){"use strict";var t={7172:function(t,e,a){var r=a(5471),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"overflow-auto scroll-smooth",attrs:{id:"app"}},[e("AppHeader",{staticClass:"w-full h-16 px-28 md:px-4 z-50"}),e("div",{staticClass:"flex w-10/12 m-auto"},[e("router-view")],1),e("portal-target",{attrs:{name:"modal",multiple:""}})],1)},o=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center w-full mb-6 border-b-3 shadow-lg border-gradient border-gradient-blue bg-white dark:bg-slate-900 z-50"},[e("div",{staticClass:"w-48 mr-2 text-slate-800 dark:text-slate-50 text-5xl header-font",on:{click:function(e){return t.toHome()}}},[t._v(" COOLPC ")]),e("div",{staticClass:"flex items-center mx-4 my-2 dark:text-neutral-100"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputSearch,expression:"inputSearch"}],staticClass:"w-full px-4 py-2 border rounded-lg focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-700",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.inputSearch},on:{input:[function(e){e.target.composing||(t.inputSearch=e.target.value)},t.handleSearch],focus:t.expandSearch,blur:t.collapseSearch}})]),e("transition",{attrs:{name:"fade"}},[t.showResults?e("div",{staticClass:"absolute top-16 left-0 w-full bg-white dark:bg-slate-700 dark:text-neutral-50 shadow-lg py-8 z-50"},[e("div",{staticClass:"w-10/12 mx-auto"},[e("h2",{staticClass:"text-xl italic font-light mb-4"},[t._v(' Results for "'+t._s(t.inputSearch)+'..." ')]),e("div",{staticClass:"overflow-x-auto overflow-y-hidden"},[0!==t.filteredItems.length?e("div",{staticClass:"flex space-x-7"},t._l(t.filteredItems,(function(a){return e("div",{key:a.id,staticClass:"flex min-w-72 max-w-72 h-28 bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-400 shadow-sm rounded-lg cursor-pointer",on:{click:function(e){return t.toItemDetail(a.id)}}},[e("img",{staticClass:"w-1/2 h-auto object-cover border-r border-gray-400",attrs:{src:"https://dlcdnwebimgs.asus.com/gain/ac709e89-8fca-4cf5-b63b-f0426714078b/w185/fwebp",alt:a.title}}),e("div",{staticClass:"w-1/2 p-2 text-sm flex flex-col justify-between text-neutral-900 dark:text-neutral-50"},[e("p",{staticClass:"font-bold overflow-hidden h-10 leading-tight"},[e("span",{staticClass:"line-clamp-2"},[t._v(t._s(a.title))])]),e("span",{staticClass:"font-semibold mt-auto"},[t._v("$"+t._s(a.price))])])])})),0):e("div",[e("p",[t._v("No Matching Result!")])])])])]):t._e()]),e("div",{staticClass:"ml-auto flex space-x-3 dark:text-slate-200"},[e("DarkModeToggle"),e("button",{staticClass:"text-xs my-auto",on:{click:t.openCartModal}},[e("svg",{staticClass:"size-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"}})])])],1),e("ShoppingCartModal",{attrs:{isOpen:t.cartModal},on:{"close-modal":()=>{t.cartModal=!1}}})],1)},i=[],l=(a(4114),function(){var t=this,e=t._self._c;return e("div",{staticClass:"dark-mode-toggle",on:{click:t.toggleTheme}},[e("div",{staticClass:"icon-container"},[e("span",{staticClass:"tooltip"},[t.isDarkMode?e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}})]):t._e(),e("span",{staticClass:"tooltiptext text-xs"},[t._v("Switch to Dark Mode")])]),e("span",{staticClass:"tooltip"},[t.isDarkMode?t._e():e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}})]),e("span",{staticClass:"tooltiptext text-xs"},[t._v("Switch to Light Mode")])])])])}),c=[],u={name:"DarkModeToggle",setup(){const t=(0,r.ref)(!1),e=()=>{t.value=!t.value,t.value?(document.body.classList.add("dark"),document.body.classList.remove("light"),localStorage.setItem("theme","dark")):(document.body.classList.add("light"),document.body.classList.remove("dark"),localStorage.setItem("theme","light"))};return(0,r.onMounted)((()=>{const e=localStorage.getItem("theme");e?(document.body.classList.add(e),t.value="dark"===e):window.matchMedia("(prefers-color-scheme: dark)").matches?(document.body.classList.add("dark"),t.value=!0):document.body.classList.add("light")})),{isDarkMode:t,toggleTheme:e}}},d=u,m=a(1656),f=(0,m.A)(d,l,c,!1,null,"1bb00a3e",null),p=f.exports,h=function(){var t=this,e=t._self._c;return t.isOpen?e("div",{staticClass:"fixed inset-0 flex justify-end z-50"},[e("div",{staticClass:"absolute inset-0 bg-black opacity-50",on:{click:function(e){return t.$emit("close-modal")}}}),e("transition",{attrs:{name:"slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"relative w-full max-w-2xl bg-white dark:bg-slate-700 h-full shadow-lg transform transition-transform duration-300 ease-in-out"},[e("button",{staticClass:"absolute top-4 right-4 text-4xl text-slate-600 hover:text-slate-800 dark:text-slate-100",on:{click:function(e){return t.$emit("close-modal")}}},[t._v(" × ")]),e("h2",{staticClass:"text-xl font-semibold mb-4 p-6 dark:text-white border-b dark:border-slate-500 shadow-sm"},[t._v(" Shopping Cart ")]),e("div",{staticClass:"px-6 overflow-y-auto h-3/4"},[e("ul",t._l(t.cartItems,(function(a){return e("li",{key:a.id,staticClass:"flex items-center justify-between py-4 border-b dark:bg-slate-700 dark:border-slate-300"},[e("div",{staticClass:"flex items-center w-full dark:text-neutral-50"},[e("img",{staticClass:"w-28 h-28 object-cover",attrs:{src:"https://dlcdnwebimgs.asus.com/gain/ac709e89-8fca-4cf5-b63b-f0426714078b/w185/fwebp",alt:"item-img"}}),e("div",{staticClass:"flex-col w-full"},[e("div",{staticClass:"flex justify-between items-start"},[e("h3",{staticClass:"flex-grow text-ellipsis overflow-hidden"},[t._v(" "+t._s(a.title)+" ")]),e("button",{staticClass:"w-8 h-8 px-3 -translate-y-1.5 text-3xl text-neutral-400 dark:text-neutral-200 hover:text-red-500",on:{click:function(e){return t.removeFromCart(a.id)}}},[t._v(" × ")])]),e("div",{staticClass:"w-full flex justify-between mt-2 text-right dark:text-slate-900"},[e("select",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"item.quantity"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(a,"quantity",e.target.multiple?r:r[0])},function(e){return t.updateQuantity(a)}]}},t._l(10,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(" "+t._s(a)+" ")])})),0),e("p",{staticClass:"mt-auto dark:text-neutral-50"},[t._v(" $ "+t._s(a.price*a.quantity)+" ")])])])])])})),0),e("button",{staticClass:"flex justify-between w-full absolute bottom-0 right-0 bg-orange-500 text-white font-bold p-4 hover:bg-orange-600",on:{click:t.continueToPayment}},[e("p",[t._v("Proceed to checkout")]),e("p",{staticClass:"tracking-wide"},[t._v("$ "+t._s(t.orderTotal))])])])])])],1):t._e()},v=[],g=a(5353),b={props:{isOpen:{type:Boolean,default:!1}},computed:{...(0,g.L8)(["cartItems","cartTotal"]),cartSubtotal(){return this.cartItems.reduce(((t,e)=>t+e.price*e.quantity),0)},orderTotal(){return this.cartSubtotal}},methods:{...(0,g.i0)(["removeFromCart","updateQuantity"]),continueToPayment(){alert("Continue to payment")}}},w=b,C=(0,m.A)(w,h,v,!1,null,"480c6d42",null),x=C.exports,y=a(2401),k={name:"AppHeader",components:{DarkModeToggle:p,ShoppingCartModal:x},data(){return{inputSearch:"",showResults:!1,filteredItems:[],items:[],cartModal:!1}},methods:{fetchData(){this.items=y.A,this.filteredItems=this.items.flatMap((t=>t.items))},handleSearch(){this.fetchData(),this.filterItems(this.inputSearch)},filterItems(t){const e=[];this.items.forEach((t=>{e.push(...t.items)})),this.filteredItems=t?e.filter((e=>e.title&&e.title.toLowerCase().includes(t.toLowerCase())||e.brand&&e.brand.toLowerCase().includes(t.toLowerCase()))):e},expandSearch(){this.showResults=!0},collapseSearch(){setTimeout((()=>{this.showResults=!1}),200)},toItemDetail(t){this.$router.push({name:"ItemDetail",params:{itemId:t}})},toHome(){this.$router.push({name:"AppHome"})},openCartModal(){this.cartModal=!0}},watch:{inputSearch(t){this.handleSearch(t)}}},_=k,A=(0,m.A)(_,s,i,!1,null,"70c9f3fc",null),T=A.exports,S={name:"App",components:{AppHeader:T}},M=S,O=(0,m.A)(M,n,o,!1,null,null,null),I=O.exports,E=a(2197),L=a(173);r["default"].use(L.A);const j=[{path:"*",redirect:{name:"AppHome"}},{path:"/",name:"AppHome",component:()=>a.e(795).then(a.bind(a,795))},{path:"/category/:categoryName",name:"Category",component:()=>a.e(795).then(a.bind(a,795)),props:t=>({categoryName:t.params.categoryName})},{path:"/item/:itemId",name:"ItemDetail",component:()=>a.e(680).then(a.bind(a,9680)),props:t=>({itemId:t.params.itemId})}],D=new L.A({mode:"history",routes:j});var R=D;r["default"].use(g.Ay);const N=new g.Ay.Store({state:{cart:[],activeCategory:null},mutations:{ADD_TO_CART(t,e){const a=t.cart.find((t=>t.id===e.id));a?a.quantity+=e.quantity:t.cart.push(e)},REMOVE_FROM_CART(t,e){t.cart=t.cart.filter((t=>t.id!==e))},UPDATE_QUANTITY(t,{id:e,quantity:a}){const r=t.cart.find((t=>t.id===e));r&&(r.quantity=a)},SET_ACTIVE_CATEGORY(t,e){t.activeCategory=e}},actions:{addToCart({commit:t},e){t("ADD_TO_CART",e)},removeFromCart({commit:t},e){t("REMOVE_FROM_CART",e)},updateQuantity({commit:t},e){t("UPDATE_QUANTITY",e)},setActiveCategory({commit:t},e){t("SET_ACTIVE_CATEGORY",e)}},getters:{cartItems:t=>t.cart,cartItemCount:t=>t.cart.length,cartTotal:t=>t.cart.reduce(((t,e)=>t+e.price*e.quantity),0),activeCategory:t=>t.activeCategory}});var P=N;r["default"].config.productionTip=!1,r["default"].use(E.Ay),new r["default"]({router:R,store:P,render:t=>t(I)}).$mount("#app")},2401:function(t,e,a){var r=a(1315),n=a.n(r);const o=["LENOVO","ACER","微星","華碩","雷蛇","DELL","技嘉","威剛","三星"];n().Random.extend({brand:function(){return this.pick(o)}}),n().Random.extend({photo:function(){return`https://picsum.photos/200?random=${n().Random.integer(1,1e3)}`}});const s=n().mock({"categories|1-20":[{id:"@increment",name:"@title(1, 3)",icon:"@image('24x24', '#000', '#fff', 'icon')",limit:4,"items|4-56":[{id:"@increment",title:"@title(8, 13)",imgSrc:"@photo",price:"@integer(100, 20000)",isHotItem:"@boolean",size:"@sentence(1, 5)",cpu:"@sentence(1, 2)",ram:"@sentence(1, 3)",ssd:"@sentence(1, 2)",vga:"@sentence(1, 4)",lan:"@sentence(1, 3)",other:"@string(1, 2)",os:"@sentence(1, 3)",brand:"@brand"}]}]});e.A=s.categories}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,o){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],o=t[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(i=!1,o<s&&(s=o));if(i){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,n,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{680:"ba04aa97",795:"bd441e62"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{680:"3cec4334",795:"1c654bc1"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="my-cool-pc:";a.l=function(r,n,o,s){if(t[r])t[r].push(n);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+o),i.src=r),t[r]=[n];var m=function(e,a){i.onerror=i.onload=null,clearTimeout(f);var n=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(t){return t(a)})),e)return e(a)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/my-cool-pc/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,n,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",a.nc&&(s.nonce=a.nc);var i=function(a){if(s.onerror=s.onload=null,"load"===a.type)n();else{var r=a&&a.type,i=a&&a.target&&a.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+i+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,s.parentNode&&s.parentNode.removeChild(s),o(l)}};return s.onerror=s.onload=i,s.href=e,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=a[r],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===t||o===e))return n}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){n=s[r],o=n.getAttribute("data-href");if(o===t||o===e)return n}},r=function(r){return new Promise((function(n,o){var s=a.miniCssF(r),i=a.p+s;if(e(s,i))return n();t(r,i,null,n,o)}))},n={524:0};a.f.miniCss=function(t,e){var a={680:1,795:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=r(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}}(),function(){var t={524:0};a.f.j=function(e,r){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(a,r){n=t[e]=[a,r]}));r.push(n[2]=o);var s=a.p+a.u(e),i=new Error,l=function(r){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}};a.l(s,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,o,s=r[0],i=r[1],l=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(e&&e(r);c<s.length;c++)o=s[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},r=self["webpackChunkmy_cool_pc"]=self["webpackChunkmy_cool_pc"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(7172)}));r=a.O(r)})();
//# sourceMappingURL=app.5f0cc4d7.js.map
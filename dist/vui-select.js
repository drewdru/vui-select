!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuiSelect=t():e.VuiSelect=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(10).default)("32954798",r,!0,{})},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";var r=n(1);n.n(r).a},function(e,t,n){(t=n(8)(!1)).push([e.i,".vui-select[data-v-360ff44d] {\n  position: relative;\n}\n.vui-select .hidden[data-v-360ff44d] {\n  display: none;\n}\n.vui-select .vui-select-search[data-v-360ff44d] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid var(--shadow, #2c3e507F);\n  box-shadow: inset 0 0 1px var(--shadow, #2c3e507F);\n  background-color: var(--control, #ffffff);\n  color: var(--control-text, #2c3e50);\n  margin: 0;\n  padding: 10px;\n  border-radius: 4px;\n  width: 100%;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.vui-select .vui-select-container[data-v-360ff44d] {\n  border: 1px solid var(--shadow, #2c3e507F);\n  box-shadow: inset 0 0 1px var(--shadow, #2c3e507F);\n  border-radius: 4px;\n  background-color: var(--control, #ffffff);\n  color: var(--control-text, #2c3e50);\n  box-sizing: border-box;\n  padding: 10px;\n  cursor: pointer;\n  overflow-x: auto;\n  white-space: nowrap;\n  -ms-overflow-style: none;\n  -moz-overflow-style: none;\n}\n.vui-select .vui-select-container[data-v-360ff44d]::-webkit-scrollbar {\n  display: none;\n}\n.vui-select .vui-select-options[data-v-360ff44d] {\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n  width: fill-available;\n  width: stretch;\n  position: absolute;\n  background-color: white;\n  border: solid 1px var(--shadow, #2c3e507F);\n  box-shadow: var(--shadow, #2c3e507F);\n  background-color: var(--control, #ffffff);\n  color: var(--control-text, #2c3e50);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  overflow-y: auto;\n  max-height: 120px;\n  max-width: stretch;\n}\n.vui-select .vui-select-options .vui-select-option[data-v-360ff44d] {\n  padding: 5px;\n  cursor: pointer;\n  background-color: var(--control, #ffffff);\n  color: var(--control-text, #2c3e50);\n}\n.vui-select .vui-select-options .vui-select-option[data-v-360ff44d]:hover {\n  background-color: var(--accent, #82B1FF);\n  color: var(--accent-text, #043381);\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var s,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(3),s=n.n(i),a=n(0),c=n.n(a);var u=n(4),l=n.n(u),f={props:{id:{type:String},name:{type:String},items:{type:Array},searchKeys:{type:Array},required:{type:Boolean}},data:function(){return{isOpened:!1,selected:{},search:null}},computed:{searchItems:{get:function(){return this.searchFilter(this.items)},set:function(e){}},searchText:{get:function(){return this.search},set:function(e){this.search=e}},isRequired:{get:function(){return this.required||!1}}},methods:{fetchFromObject:function(e,t){if(void 0===e)return!1;var n=t.indexOf(".");return n>-1?this.fetchFromObject(e[t.substring(0,n)],t.substr(n+1)):e[t]},searchFilter:function(e){var t=this,n=e;if(!this.searchText)return n;var r=this.searchText.toLowerCase();return n.filter((function(e){if(null==e)return!1;if("object"===l()(e)){for(var n=0;n<t.searchKeys.length;++n){var o=t.fetchFromObject(e,t.searchKeys[n]);if(o&&o.toString().toLowerCase().includes(r))return!0}return!1}return e.toString().toLowerCase().includes(r)}))},selectItem:function(e){this.selected=e,this.isOpened=!1},openSelect:function(){var e=this;this.isOpened=!this.isOpened,this.$nextTick((function(){e.$refs.selectSearch.focus()}))},onSearch:function(e){this.searchText=e.target.value}},mounted:function(){this.isRequired&&this.items.length>0&&0===Object.keys(this.selected).length&&(this.selected=this.items[0])}};n(6);var d=function(e,t,n,r,o,i,s,a){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:u}}(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vui-select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"hidden",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.items,(function(e,t){return n("option",{key:"item-"+t,domProps:{value:e}})})),0),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isOpened,expression:"!isOpened"}],staticClass:"vui-select-container",on:{click:function(t){return e.openSelect()}}},[e._t("vui-select-match",[e._v(" ")],{selected:e.selected})],2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"},{name:"show",rawName:"v-show",value:e.isOpened,expression:"isOpened"}],ref:"selectSearch",staticClass:"vui-select-search",domProps:{value:e.searchText},on:{input:[function(t){t.target.composing||(e.searchText=t.target.value)},function(t){return e.onSearch(t)}]}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpened,expression:"isOpened"}],staticClass:"vui-select-options"},e._l(e.searchItems,(function(t,r){return n("div",{key:"item-"+r,staticClass:"vui-select-option",attrs:{value:t},on:{click:function(n){return e.selectItem(t)}}},[e._t("vui-select-options",null,{item:t})],2)})),0)])}),[],!1,null,"360ff44d",null).exports;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"default",(function(){return h})),n.d(t,"install",(function(){return m}));var h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o()(this,e),c()(this,"initialized",!1);var n={accessorName:"$vuiSelect"};this.options=v({},n,{},t)}return s()(e,[{key:"world",value:function(){return"world"}},{key:"init",value:function(t,n){this.initialized||(e.register(t,this.options,n),this.initialized=!0)}}]),e}();function m(e){m.installed&&e||(e.mixin(v({beforeCreate:function(){var t=this.$options,n=t.vuiSelectSettings,r=t.store,o=t.parent,i=null;n?(i="function"==typeof n?new n:new h(n)).init(e,r):o&&o.__$VuiSelectInstance&&(i=o.__$VuiSelectInstance).init(e,o.$store),i&&(this.__$VuiSelectInstance=i,this[i.options.accessorName]=i)}},h.mixin())),m.installed=!0)}c()(h,"register",(function(e,t,n){console.log("Here is the options of the component",t),console.log("Here is the store of the app",n),e.component("VuiSelect",d)})),c()(h,"mixin",(function(){return{mounted:function(){console.log("Hey! I am running on every mount, please remove me!"),console.log(this.$store)}}})),h.install=m},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,l=function(){},f=null,d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,o){u=n,f=o||{};var s=r(e,t);return v(s),function(t){for(var n=[],o=0;o<s.length;o++){var a=s[o];(c=i[a.id]).refs--,n.push(c)}t?v(s=r(e,t)):s=[];for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:s}}}}function h(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(d){var o=c++;r=a||(a=h()),t=y.bind(null,r,o,!1),n=y.bind(null,r,o,!0)}else r=h(),t=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function x(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}])}));
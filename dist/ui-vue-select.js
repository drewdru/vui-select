!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.UiVueSelect=t():e.UiVueSelect=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(10).default)("d6fd150a",r,!0,{})},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";var r=n(1);n.n(r).a},function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".ui-vue-select[data-v-421018b2] {\n  position: relative;\n}\n.ui-vue-select .hidden[data-v-421018b2] {\n  display: none;\n}\n.ui-vue-select .ui-vue-select-match-arrow[data-v-421018b2] {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 40px;\n}\n.ui-vue-select .ui-vue-select-match-arrow .arrow[data-v-421018b2] {\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  position: absolute;\n  top: 40%;\n  right: 15px;\n}\n.ui-vue-select .ui-vue-select-match-arrow .arrow.up[data-v-421018b2] {\n  -webkit-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n.ui-vue-select .ui-vue-select-match-arrow .arrow.down[data-v-421018b2] {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.ui-vue-select .ui-vue-select-match-open .ui-vue-select-search[data-v-421018b2] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid var(--shadow, #2c3e507F);\n  box-shadow: inset 0 0 1px var(--shadow, #2c3e507F);\n  background-color: var(--control, #ffffff);\n  color: var(--control-text, #2c3e50);\n  margin: 0;\n  padding: 10px;\n  padding-right: 40px;\n  border-radius: 4px;\n  width: 100%;\n  height: 100%;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.ui-vue-select .ui-vue-select-container[data-v-421018b2] {\n  border: 1px solid var(--shadow, #2c3e507F);\n  box-shadow: inset 0 0 1px var(--shadow, #2c3e507F);\n  border-radius: 4px;\n  background-color: var(--control, #ffffff);\n  color: var(--control-text, #2c3e50);\n  box-sizing: border-box;\n  padding: 10px;\n  cursor: pointer;\n}\n.ui-vue-select .ui-vue-select-container.open[data-v-421018b2] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.ui-vue-select .ui-vue-select-container .ui-vue-select-match-selected[data-v-421018b2] {\n  margin-right: 30px;\n  overflow-x: auto;\n  white-space: nowrap;\n  -ms-overflow-style: none;\n  -moz-overflow-style: none;\n}\n.ui-vue-select .ui-vue-select-container .ui-vue-select-match-selected[data-v-421018b2]::-webkit-scrollbar {\n  display: none;\n}\n.ui-vue-select .ui-vue-select-options[data-v-421018b2] {\n  z-index: 9;\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n  width: fill-available;\n  width: stretch;\n  position: absolute;\n  background-color: white;\n  border: solid 1px var(--shadow, #2c3e507F);\n  box-shadow: var(--shadow, #2c3e507F);\n  background-color: var(--control, #ffffff);\n  color: var(--control-text, #2c3e50);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  overflow-y: auto;\n  max-height: 120px;\n  max-width: stretch;\n}\n.ui-vue-select .ui-vue-select-options .ui-vue-select-option[data-v-421018b2] {\n  padding: 5px;\n  cursor: pointer;\n  background-color: var(--control, #ffffff);\n  color: var(--control-text, #2c3e50);\n}\n.ui-vue-select .ui-vue-select-options .ui-vue-select-option[data-v-421018b2]:hover {\n  background-color: var(--accent, #82B1FF);\n  color: var(--accent-text, #043381);\n}\n.ui-vue-select .ui-vue-select-options .ui-vue-select-option.active[data-v-421018b2] {\n  background-color: var(--active, #82B1FFAA);\n  color: var(--active-text, #043381AA);\n}\n.ui-vue-select .ui-vue-select-options .ui-vue-select-option.active[data-v-421018b2]:hover {\n  background-color: var(--accent, #82B1FF);\n  color: var(--accent-text, #043381);\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),o=n(3),s=n.n(o),a=n(0),c=n.n(a);var u=n(4),l=n.n(u),d={model:{event:"change"},props:{id:{type:String},name:{type:String},items:{type:Array},searchKeys:{type:Array},required:{type:Boolean},multiple:{type:Boolean},limit:{type:Number},value:{type:null},isSearch:{type:Boolean,default:!0}},data:function(){return{isOpened:!1,selected:new Set,search:null}},computed:{searchItems:{get:function(){return this.searchFilter(this.items)},set:function(e){}},searchText:{get:function(){return this.search},set:function(e){this.search=e}},isRequired:{get:function(){return this.required||!1}}},methods:{fetchFromObject:function(e,t){if(void 0===e)return!1;var n=t.indexOf(".");return n>-1?this.fetchFromObject(e[t.substring(0,n)],t.substr(n+1)):e[t]},searchFilter:function(e){var t=this,n=e;if(!this.searchText||!this.isSearch)return n;var r=this.searchText.toLowerCase();return n.filter((function(e){if(null==e)return!1;if("object"===l()(e)){for(var n=0;n<t.searchKeys.length;++n){var i=t.fetchFromObject(e,t.searchKeys[n]);if(i&&i.toString().toLowerCase().includes(r))return!0}return!1}return e.toString().toLowerCase().includes(r)}))},selectItem:function(e){this.multiple?this.selected.has(e)?(this.selected.delete(e),this.$emit("change",Array.from(this.selected)),this.isOpened=!1):(!this.limit||this.selected.size<this.limit)&&(this.selected.add(e),this.$emit("change",Array.from(this.selected)),this.isOpened=!1):(this.selected=e,this.$emit("change",this.selected),this.isOpened=!1)},openSelect:function(){var e=this;this.isOpened=!this.isOpened,this.$nextTick((function(){e.$refs.selectSearch.focus()}))},onSearch:function(e){this.searchText=e.target.value},checkActive:function(e){return this.multiple?this.selected.has(e):this.selected==e}},mounted:function(){var e=this;this.value?this.multiple?(this.value.forEach((function(t){e.items.some((function(n,r){Object.entries(n).toString()===Object.entries(t).toString()&&e.selected.add(n)}))})),this.$forceUpdate()):this.items.some((function(t,n){Object.entries(t).toString()===Object.entries(e.value).toString()&&(e.selected=t)})):this.isRequired&&this.items.length>0&&(this.multiple?(this.selected.add(this.items[0]),this.$emit("change",Array.from(this.selected)),this.$forceUpdate()):(this.selected=this.items[0],this.$emit("change",this.selected)))}};n(6);var f=function(e,t,n,r,i,o,s,a){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui-vue-select"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isOpened||!e.isSearch,expression:"!isOpened || !isSearch"}],staticClass:"ui-vue-select-container",class:{open:e.isOpened},on:{click:function(t){return e.openSelect()}}},[n("div",{staticClass:"ui-vue-select-match-selected"},[e.multiple?e._e():e._t("ui-vue-select-match",[e._v("\n          "+e._s(e.selected)+"\n      ")],{selected:e.selected}),e._v(" "),e.multiple?e._t("ui-vue-select-match",[0==e.selected.size?n("span",[e._v("\n             \n          ")]):e._e(),e._v(" "),e._l(e.selected,(function(t,r){return n("span",{key:"item-"+r},[e._v("\n            "+e._s(t)+"\n          ")])}))],{selected:e.selected}):e._e()],2),e._v(" "),e._t("ui-vue-select-match-arrow",[n("div",{staticClass:"ui-vue-select-match-arrow"},[n("i",{staticClass:"arrow",class:{down:!e.isOpened,up:e.isOpened}})])])],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpened&&e.isSearch,expression:"isOpened && isSearch"}],staticClass:"ui-vue-select-match-open"},[e._t("ui-vue-select-match-open",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],ref:"selectSearch",staticClass:"ui-vue-select-search",domProps:{value:e.searchText},on:{input:[function(t){t.target.composing||(e.searchText=t.target.value)},function(t){return e.onSearch(t)}]}})],{selected:e.selected,onSearch:e.onSearch,searchText:e.searchText}),e._v(" "),e._t("ui-vue-select-match-arrow",[n("div",{staticClass:"ui-vue-select-match-arrow",on:{click:function(t){e.isOpened=!1}}},[n("i",{staticClass:"arrow",class:{down:!e.isOpened,up:e.isOpened}})])])],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpened,expression:"isOpened"}],staticClass:"ui-vue-select-options",on:{mouseleave:function(t){e.isOpened=!1}}},e._l(e.searchItems,(function(t,r){return n("div",{key:"item-"+r,staticClass:"ui-vue-select-option",class:{active:e.checkActive(t)},attrs:{value:t},on:{click:function(n){return e.selectItem(t)}}},[e._t("ui-vue-select-options",null,{item:t})],2)})),0)])}),[],!1,null,"421018b2",null).exports;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"default",(function(){return v})),n.d(t,"install",(function(){return m}));var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i()(this,e),c()(this,"initialized",!1);var n={accessorName:"$uiVueSelect"};this.options=h({},n,{},t)}return s()(e,[{key:"init",value:function(t,n){this.initialized||(e.register(t,this.options,n),this.initialized=!0)}}]),e}();function m(e){m.installed&&e||(e.mixin(h({beforeCreate:function(){var t=this.$options,n=t.uiVueSelect,r=t.store,i=t.parent,o=null;n?(o="function"==typeof n?new n:new v(n)).init(e,r):i&&i.__$UiVueSelectInstance&&(o=i.__$UiVueSelectInstance).init(e,i.$store),o&&(this.__$UiVueSelectInstance=o,this[o.options.accessorName]=o)}},v.mixin())),m.installed=!0)}c()(v,"register",(function(e,t,n){e.component("UiVueSelect",f)})),c()(v,"mixin",(function(){return{}})),v.install=m},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,l=function(){},d=null,f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,i){u=n,d=i||{};var s=r(e,t);return h(s),function(t){for(var n=[],i=0;i<s.length;i++){var a=s[i];(c=o[a.id]).refs--,n.push(c)}t?h(s=r(e,t)):s=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(m(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(m(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:s}}}}function v(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(f){var i=c++;r=a||(a=v()),t=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=v(),t=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function y(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function x(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}])}));
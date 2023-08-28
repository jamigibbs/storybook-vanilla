/*! For license information please see 9446.2f119794.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook_vanilla=self.webpackChunkstorybook_vanilla||[]).push([[9446,1566],{"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-3c78bcaf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=function createCommonjsModule(r,e,o){return r(o={path:e,exports:{},require:function(r,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}((function(r){!function(){var e={}.hasOwnProperty;function o(){for(var r=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)r.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&r.push(i)}}else if("object"===s)if(t.toString===Object.prototype.toString)for(var u in t)e.call(t,u)&&t[u]&&r.push(u);else r.push(t.toString())}}return r.join(" ")}r.exports?(o.default=o,r.exports=o):window.classNames=o}()}))},"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-additional-info.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{va_additional_info:()=>VaAdditionalInfo});var _index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-5ed038a1.js"),_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-3c78bcaf.js"),VaAdditionalInfo=function(){function t(t){(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.componentLibraryAnalytics=(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"component-library-analytics",7),this.open=void 0,this.trigger=void 0,this.uswds=!1,this.disableAnalytics=!1,this.disableBorder=!1}return t.prototype.handleResize=function(){this.updateInfoMaxHeight()},t.prototype.toggleOpen=function(){this.disableAnalytics||this.componentLibraryAnalytics.emit({componentName:"va-additional-info",action:this.open?"collapse":"expand",details:{triggerText:this.trigger}}),this.open=!this.open},t.prototype.handleKeydown=function(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),this.toggleOpen())},t.prototype.updateInfoMaxHeight=function(){var t=this.el.shadowRoot.getElementById("info"),o=t.scrollHeight+"px";t.style.setProperty("--calc-max-height","calc("+o+" + 2rem)")},t.prototype.componentDidLoad=function(){this.updateInfoMaxHeight()},t.prototype.render=function(){if(this.uswds){var t=(0,_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__.c)({open:this.open,closed:!this.open});return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{role:"button","aria-controls":"info","aria-expanded":this.open?"true":"false",tabIndex:0,onClick:this.toggleOpen.bind(this),onKeyDown:this.handleKeydown.bind(this)},(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"additional-info-title"},this.trigger),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",{class:"fa-angle-down",role:"presentation"}))),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"info",class:t},(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{role:"button","aria-controls":"info","aria-expanded":this.open?"true":"false",tabIndex:0,onClick:this.toggleOpen.bind(this),onKeyDown:this.handleKeydown.bind(this)},(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"additional-info-title"},this.trigger),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",{class:"fa-angle-down",role:"presentation"}))),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"info",class:this.open?"open":"closed"},(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)},enumerable:!1,configurable:!0}),t}();VaAdditionalInfo.style="button:not([disabled]):focus,:host(:not([uswds])) button:not([disabled]):active,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,[role='option']:focus{outline:2px solid var(--color-gold-light);outline-offset:2px}a{text-decoration:none;color:var(--color-link-default);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--color-link-visited)}:host{display:block}:host(:not([disable-border])) a[aria-expanded='true']~#info,:host([disable-border='false']) a[aria-expanded='true']~#info{padding-left:calc(20px - 7px);border-left:7px solid transparent;border-left-color:var(--color-primary-alt-darkest)}#info{overflow:hidden}#info.closed{visibility:hidden}a{-ms-flex-align:start;align-items:flex-start;cursor:pointer;display:-ms-flexbox;display:flex}.additional-info-title{border-bottom-right-radius:1px;border-bottom:2px dotted var(--color-primary-alt-darkest);color:var(--color-gray-dark);cursor:pointer}.closed{opacity:0;max-height:0}.open{height:auto;opacity:1;-webkit-transition:max-height 700ms 0ms, opacity 500ms 200ms, visibility 500ms 200ms;transition:max-height 700ms 0ms, opacity 500ms 200ms, visibility 500ms 200ms;max-height:var(--calc-max-height);margin-bottom:16px;margin-top:16px}i{font-family:'Font Awesome 5 Free';font-style:normal;font-weight:900;line-height:1}i.fa-angle-down{display:inline-block;color:var(--color-primary-alt-darkest);font-size:16px;margin:5px;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform 0.15s linear;transition:-webkit-transform 0.15s linear;transition:transform 0.15s linear;transition:transform 0.15s linear, -webkit-transform 0.15s linear}i.fa-angle-down::before{content:'\\F107';}a[aria-expanded='true'] i.fa-angle-down{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:-webkit-transform 0.15s linear;transition:-webkit-transform 0.15s linear;transition:transform 0.15s linear;transition:transform 0.15s linear, -webkit-transform 0.15s linear}::slotted(*){margin-bottom:0 !important;margin-top:0 !important}"}}]);
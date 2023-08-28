/*! For license information please see 8125.67ab187f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook_vanilla=self.webpackChunkstorybook_vanilla||[]).push([[8125,1566],{"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-3c78bcaf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=function createCommonjsModule(r,e,o){return r(o={path:e,exports:{},require:function(r,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}((function(r){!function(){var e={}.hasOwnProperty;function o(){for(var r=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)r.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&r.push(i)}}else if("object"===s)if(t.toString===Object.prototype.toString)for(var u in t)e.call(t,u)&&t[u]&&r.push(u);else r.push(t.toString())}}return r.join(" ")}r.exports?(o.default=o,r.exports=o):window.classNames=o}()}))},"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-alert-expandable.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{va_alert_expandable:()=>VaAlertExpandable});var _index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-5ed038a1.js"),_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-3c78bcaf.js"),VaAlertExpandable=function(){function t(t){(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.componentLibraryAnalytics=(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"component-library-analytics",7),this.open=void 0,this.status=void 0,this.trigger=void 0,this.disableAnalytics=!1,this.iconless=!1}return t.prototype.handleResize=function(){this.updateAlertBodyMaxHeight()},t.prototype.toggleOpen=function(){this.disableAnalytics||this.componentLibraryAnalytics.emit({componentName:"va-alert-expandable",action:this.open?"collapse":"expand",details:{triggerText:this.trigger}}),this.open=!this.open},t.prototype.handleKeydown=function(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),this.toggleOpen())},t.prototype.updateAlertBodyMaxHeight=function(){var t=this.el.shadowRoot.getElementById("alert-body"),e=t.scrollHeight+"px";t.style.setProperty("--calc-max-height","calc("+e+" + 2rem)")},t.prototype.componentDidLoad=function(){this.updateAlertBodyMaxHeight()},t.prototype.render=function(){var t=this,e=t.status,r=t.open,o=t.iconless,a=(0,_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__.c)("alert-expandable",e,{"hide-icon":o}),i=(0,_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__.c)("alert-expandable-body",{open:r,closed:!r}),n="error"===e?"alert":null,s="error"===e?"assertive":null;return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{role:n,"aria-live":s,class:a},(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{role:"button","aria-controls":"alert-body","aria-expanded":this.open?"true":"false",tabIndex:0,onClick:this.toggleOpen.bind(this),onKeyDown:this.handleKeydown.bind(this),class:"alert-expandable-trigger"},(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",{class:"alert-status-icon","aria-hidden":"true",role:"img"}),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"alert-expandable-title"},(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"sr-only"},"Alert: "),this.trigger),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",{class:"fa-angle-down",role:"presentation"}))),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"alert-body",class:i},(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"slot-wrap"},(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)},enumerable:!1,configurable:!0}),t}();VaAlertExpandable.style=".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}button:not([disabled]):focus,:host(:not([uswds])) button:not([disabled]):active,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,[role='option']:focus{outline:2px solid var(--color-gold-light);outline-offset:2px}a{text-decoration:none;color:var(--color-link-default);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--color-link-visited)}:host{display:block}:host([status='warning']){background-color:var(--color-gold-lightest)}:host([status='info']){background-color:var(--color-primary-alt-lightest)}:host([status='error']){background-color:var(--color-secondary-lightest)}:host([status='success']){background-color:var(--color-green-lightest)}:host([status='continue']){background-color:var(--color-gray-lightest)}.alert-expandable-trigger{-ms-flex-align:start;align-items:flex-start;cursor:pointer;display:-ms-flexbox;display:flex;padding:1.2rem}div.warning .alert-expandable-trigger:hover{background-color:var(--color-gold-lighter)}div.info .alert-expandable-trigger:hover{background-color:var(--color-primary-alt-light)}div.error .alert-expandable-trigger:hover{background-color:var(--color-secondary-light)}div.success .alert-expandable-trigger:hover{background-color:var(--color-green-lighter)}div.continue .alert-expandable-trigger:hover{background-color:var(--color-gray-lighter)}.alert-expandable-title{border-bottom-right-radius:1px;border-bottom:2px dotted var(--color-primary-alt-dark);color:var(--color-gray-dark);cursor:pointer;font-weight:600}.alert-expandable-body{overflow:hidden}.alert-expandable-body.closed{opacity:0;max-height:0;visibility:hidden;overflow:hidden}.alert-expandable-body.open{height:auto;opacity:1;-webkit-transition:max-height 700ms 0ms, opacity 500ms 200ms, visibility 500ms 200ms;transition:max-height 700ms 0ms, opacity 500ms 200ms, visibility 500ms 200ms;max-height:var(--calc-max-height)}#slot-wrap{margin:1.2rem}i{font-family:'Font Awesome 5 Free';font-style:normal;font-weight:900;line-height:1}i.fa-angle-down{display:inline-block;color:var(--color-gray-dark);font-size:1.6rem;margin:0.5rem;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform 0.15s linear;transition:-webkit-transform 0.15s linear;transition:transform 0.15s linear;transition:transform 0.15s linear, -webkit-transform 0.15s linear}i.fa-angle-down::before{content:'\\F107';}a[aria-expanded='true'] i.fa-angle-down{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:-webkit-transform 0.15s linear;transition:-webkit-transform 0.15s linear;transition:transform 0.15s linear;transition:transform 0.15s linear, -webkit-transform 0.15s linear}i.alert-status-icon{color:var(--color-gray-dark);margin-top:0.4rem;margin-right:1.2rem}div.hide-icon i.alert-status-icon{display:none}div.info i.alert-status-icon::before{content:'\\F05A'}div.continue i.alert-status-icon::before{content:'\\F023'}div.success i.alert-status-icon::before{content:'\\F00C'}div.warning i.alert-status-icon::before{content:'\\F071'}div.error i.alert-status-icon::before{content:'\\F06A'}::slotted(*){margin-bottom:0 !important;margin-top:0 !important}"}}]);
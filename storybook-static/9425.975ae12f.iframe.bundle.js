/*! For license information please see 9425.975ae12f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook_vanilla=self.webpackChunkstorybook_vanilla||[]).push([[9425,1566],{"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-3c78bcaf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=function createCommonjsModule(r,e,o){return r(o={path:e,exports:{},require:function(r,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}((function(r){!function(){var e={}.hasOwnProperty;function o(){for(var r=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)r.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&r.push(i)}}else if("object"===s)if(t.toString===Object.prototype.toString)for(var u in t)e.call(t,u)&&t[u]&&r.push(u);else r.push(t.toString())}}return r.join(" ")}r.exports?(o.default=o,r.exports=o):window.classNames=o}()}))},"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{va_button:()=>VaButton});var _index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-5ed038a1.js"),_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-3c78bcaf.js"),VaButton=function(){function t(t){var o=this;(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.componentLibraryAnalytics=(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"component-library-analytics",7),this.handleClick=function(){if(!o.disableAnalytics){var t={componentName:"va-button",action:"click",details:{type:o.secondary?"secondary":"primary",label:o.getButtonText()}};o.componentLibraryAnalytics.emit(t)}},this.getButtonText=function(){return o.continue?"Continue":o.back?"Back":o.text},this.back=!1,this.big=!1,this.continue=!1,this.disableAnalytics=!1,this.disabled=!1,this.label=void 0,this.primaryAlternate=!1,this.secondary=!1,this.submit=!1,this.text=void 0,this.uswds=!1}return t.prototype.handleClickOverride=function(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.handleClick()},t.prototype.render=function(){var t=this,o=t.back,a=t.continue,e=t.disabled,s=t.getButtonText,u=t.label,n=t.submit,i=t.secondary,r=t.primaryAlternate,d=t.big,b=t.uswds,l=e?"true":void 0,c=s(),p=n?"submit":"button";if(b){var x=(0,_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__.c)({"usa-button":!0,"usa-button--big":d,"usa-button--outline":o||i,"va-button-primary--alternate":r});return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:x,"aria-disabled":l,"aria-label":u,type:p,part:"button"},o&&!a&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",{"aria-hidden":"true",class:"fa fa-angles-left"}),c,a&&!o&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",{"aria-hidden":"true",class:"fa fa-angles-right"})))}x=(0,_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__.c)({"va-button-primary--alternate":r});return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:x,"aria-disabled":l,"aria-label":u,type:p,part:"button"},o&&!a&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",{"aria-hidden":"true",class:"fa fa-angles-left"}),c,a&&!o&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",{"aria-hidden":"true",class:"fa fa-angles-right"})))},t}();VaButton.style='button:not([disabled]):focus,:host(:not([uswds])) button:not([disabled]):active,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,[role=\'option\']:focus{outline:2px solid var(--color-gold-light);outline-offset:2px}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-radius:5px;color:var(--color-white);cursor:pointer;display:inline-block;font-family:var(--font-source-sans);font-size:1.6rem;font-weight:700;line-height:1;padding:1rem 2rem;text-align:center;text-decoration:none}.usa-button{font-family:Source Sans Pro Web, "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans;font-size:1.06rem;line-height:0.9;color:white;background-color:#005ea2;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-radius:0.25rem;cursor:pointer;display:inline-block;font-weight:700;margin-right:0.5rem;padding:0.75rem 1.25rem;text-align:center;text-decoration:none;width:100%}@media all and (min-width: 30em){.usa-button{width:auto}}.usa-button:visited{color:white}.usa-button:hover,.usa-button.usa-button--hover{color:white;background-color:#1a4480;border-bottom:0;text-decoration:none}.usa-button:active,.usa-button.usa-button--active{color:white;background-color:#162e51}.usa-button:not([disabled]):focus,.usa-button:not([disabled]).usa-focus{outline-offset:0.25rem}.usa-button:disabled,.usa-button[aria-disabled=true]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background-color:#c9c9c9;color:white;cursor:auto}.usa-button:disabled:hover,.usa-button:disabled.usa-button--hover,.usa-button:disabled:active,.usa-button:disabled.usa-button--active,.usa-button:disabled:focus,.usa-button:disabled.usa-focus,.usa-button[aria-disabled=true]:hover,.usa-button[aria-disabled=true].usa-button--hover,.usa-button[aria-disabled=true]:active,.usa-button[aria-disabled=true].usa-button--active,.usa-button[aria-disabled=true]:focus,.usa-button[aria-disabled=true].usa-focus{background-color:#c9c9c9;border:0;-webkit-box-shadow:none;box-shadow:none}.usa-button--accent-cool{color:#1b1b1b;background-color:#00bde3}.usa-button--accent-cool:visited{color:#1b1b1b;background-color:#00bde3}.usa-button--accent-cool:hover,.usa-button--accent-cool.usa-button--hover{color:#1b1b1b;background-color:#28a0cb}.usa-button--accent-cool:active,.usa-button--accent-cool.usa-button--active{color:white;background-color:#07648d}.usa-button--accent-cool:disabled:hover,.usa-button--accent-cool[aria-disabled=true]:hover{color:white}.usa-button--accent-warm{color:#1b1b1b;background-color:#fa9441}.usa-button--accent-warm:visited{color:#1b1b1b;background-color:#fa9441}.usa-button--accent-warm:hover,.usa-button--accent-warm.usa-button--hover{color:white;background-color:#c05600}.usa-button--accent-warm:active,.usa-button--accent-warm.usa-button--active{color:white;background-color:#775540}.usa-button--outline{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #005ea2;box-shadow:inset 0 0 0 2px #005ea2;color:#005ea2}.usa-button--outline:visited{color:#005ea2}.usa-button--outline:hover,.usa-button--outline.usa-button--hover{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #1a4480;box-shadow:inset 0 0 0 2px #1a4480;color:#1a4480}.usa-button--outline:active,.usa-button--outline.usa-button--active{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #162e51;box-shadow:inset 0 0 0 2px #162e51;color:#162e51}.usa-button--outline.usa-button--inverse{-webkit-box-shadow:inset 0 0 0 2px #dfe1e2;box-shadow:inset 0 0 0 2px #dfe1e2;color:#dfe1e2}.usa-button--outline.usa-button--inverse:visited{color:#dfe1e2}.usa-button--outline.usa-button--inverse:hover,.usa-button--outline.usa-button--inverse.usa-button--hover{-webkit-box-shadow:inset 0 0 0 2px #f0f0f0;box-shadow:inset 0 0 0 2px #f0f0f0;color:#f0f0f0}.usa-button--outline.usa-button--inverse:active,.usa-button--outline.usa-button--inverse.usa-button--active{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px white;box-shadow:inset 0 0 0 2px white;color:white}.usa-button--outline.usa-button--inverse.usa-button--unstyled{-moz-osx-font-smoothing:inherit;-webkit-font-smoothing:inherit;color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;margin:0;padding:0;text-align:left;color:#dfe1e2}.usa-button--outline.usa-button--inverse.usa-button--unstyled:visited{color:#54278f}.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover{color:#1a4480}.usa-button--outline.usa-button--inverse.usa-button--unstyled:active{color:#162e51}.usa-button--outline.usa-button--inverse.usa-button--unstyled:focus{outline:0.25rem solid #2491ff;outline-offset:0}.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-button--hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-button--hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled.usa-button--hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-button--active,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-button--active,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled.usa-button--active,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled:focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled.usa-focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled{-moz-osx-font-smoothing:inherit;-webkit-font-smoothing:inherit;background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover{color:#1a4480}.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active{color:#162e51}.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled{color:#c9c9c9}.usa-button--outline.usa-button--inverse.usa-button--unstyled:visited{color:#dfe1e2}.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover{color:#f0f0f0}.usa-button--outline.usa-button--inverse.usa-button--unstyled:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active{color:white}.usa-button--base{color:white;background-color:#71767a}.usa-button--base:hover,.usa-button--base.usa-button--hover{color:white;background-color:#565c65}.usa-button--base:active,.usa-button--base.usa-button--active{color:white;background-color:#3d4551}.usa-button--secondary{color:white;background-color:#d83933}.usa-button--secondary:hover,.usa-button--secondary.usa-button--hover{color:white;background-color:#b50909}.usa-button--secondary:active,.usa-button--secondary.usa-button--active{color:white;background-color:#8b0a03}.usa-button--big{border-radius:0.25rem;font-size:1.46rem;padding:1rem 1.5rem}.usa-button--disabled{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background-color:#c9c9c9;color:white;cursor:auto}.usa-button--disabled:hover,.usa-button--disabled.usa-button--hover,.usa-button--disabled:active,.usa-button--disabled.usa-button--active,.usa-button--disabled:focus,.usa-button--disabled.usa-focus{background-color:#c9c9c9;border:0;-webkit-box-shadow:none;box-shadow:none}.usa-button--outline-disabled,.usa-button--outline-inverse-disabled,.usa-button--outline:disabled,.usa-button--outline[aria-disabled=true],.usa-button--outline-inverse:disabled,.usa-button--outline-inverse[aria-disabled=true]{background-color:transparent}.usa-button--outline-disabled:hover,.usa-button--outline-disabled.usa-button--hover,.usa-button--outline-disabled:active,.usa-button--outline-disabled.usa-button--active,.usa-button--outline-disabled:focus,.usa-button--outline-disabled.usa-focus,.usa-button--outline-inverse-disabled:hover,.usa-button--outline-inverse-disabled.usa-button--hover,.usa-button--outline-inverse-disabled:active,.usa-button--outline-inverse-disabled.usa-button--active,.usa-button--outline-inverse-disabled:focus,.usa-button--outline-inverse-disabled.usa-focus,.usa-button--outline:disabled:hover,.usa-button--outline:disabled.usa-button--hover,.usa-button--outline:disabled:active,.usa-button--outline:disabled.usa-button--active,.usa-button--outline:disabled:focus,.usa-button--outline:disabled.usa-focus,.usa-button--outline[aria-disabled=true]:hover,.usa-button--outline[aria-disabled=true].usa-button--hover,.usa-button--outline[aria-disabled=true]:active,.usa-button--outline[aria-disabled=true].usa-button--active,.usa-button--outline[aria-disabled=true]:focus,.usa-button--outline[aria-disabled=true].usa-focus,.usa-button--outline-inverse:disabled:hover,.usa-button--outline-inverse:disabled.usa-button--hover,.usa-button--outline-inverse:disabled:active,.usa-button--outline-inverse:disabled.usa-button--active,.usa-button--outline-inverse:disabled:focus,.usa-button--outline-inverse:disabled.usa-focus,.usa-button--outline-inverse[aria-disabled=true]:hover,.usa-button--outline-inverse[aria-disabled=true].usa-button--hover,.usa-button--outline-inverse[aria-disabled=true]:active,.usa-button--outline-inverse[aria-disabled=true].usa-button--active,.usa-button--outline-inverse[aria-disabled=true]:focus,.usa-button--outline-inverse[aria-disabled=true].usa-focus{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #c9c9c9;box-shadow:inset 0 0 0 2px #c9c9c9}.usa-button--outline-disabled,.usa-button--outline:disabled,.usa-button--outline[aria-disabled=true]{-webkit-box-shadow:inset 0 0 0 2px #c9c9c9;box-shadow:inset 0 0 0 2px #c9c9c9;color:#c9c9c9}.usa-button--outline-disabled.usa-button--inverse,.usa-button--outline:disabled.usa-button--inverse,.usa-button--outline[aria-disabled=true].usa-button--inverse{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #71767a;box-shadow:inset 0 0 0 2px #71767a;color:#71767a}.usa-button--unstyled{-moz-osx-font-smoothing:inherit;-webkit-font-smoothing:inherit;color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;margin:0;padding:0;text-align:left}.usa-button--unstyled:visited{color:#54278f}.usa-button--unstyled:hover{color:#1a4480}.usa-button--unstyled:active{color:#162e51}.usa-button--unstyled:focus{outline:0.25rem solid #2491ff;outline-offset:0}.usa-button--unstyled:hover,.usa-button--unstyled.usa-button--hover,.usa-button--unstyled:disabled:hover,.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--unstyled:disabled.usa-button--hover,.usa-button--unstyled[aria-disabled=true].usa-button--hover,.usa-button--unstyled.usa-button--disabled:hover,.usa-button--unstyled.usa-button--disabled.usa-button--hover,.usa-button--unstyled:active,.usa-button--unstyled.usa-button--active,.usa-button--unstyled:disabled:active,.usa-button--unstyled[aria-disabled=true]:active,.usa-button--unstyled:disabled.usa-button--active,.usa-button--unstyled[aria-disabled=true].usa-button--active,.usa-button--unstyled.usa-button--disabled:active,.usa-button--unstyled.usa-button--disabled.usa-button--active,.usa-button--unstyled:disabled:focus,.usa-button--unstyled[aria-disabled=true]:focus,.usa-button--unstyled:disabled.usa-focus,.usa-button--unstyled[aria-disabled=true].usa-focus,.usa-button--unstyled.usa-button--disabled:focus,.usa-button--unstyled.usa-button--disabled.usa-focus,.usa-button--unstyled:disabled,.usa-button--unstyled[aria-disabled=true],.usa-button--unstyled.usa-button--disabled{-moz-osx-font-smoothing:inherit;-webkit-font-smoothing:inherit;background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-button--unstyled.usa-button--hover{color:#1a4480}.usa-button--unstyled.usa-button--active{color:#162e51}.usa-button--unstyled:disabled,.usa-button--unstyled[aria-disabled=true],.usa-button--unstyled.usa-button--disabled{color:#c9c9c9}.usa-form{font-size:16px}@media (min-width: 30em){.usa-form{max-width:320px}}.usa-fieldset,.usa-hint,.usa-input,.usa-label,.usa-legend,.usa-radio__label,.usa-textarea,.usa-modal,.usa-select{font-size:16.96px}.usa-label,.usa-legend{margin-top:24px;max-width:480px}.usa-radio__label{margin-top:12px;padding-left:32px}.usa-radio__label::before{height:20px;border-radius:1584px;width:20px;margin-top:1.024px}.usa-radio__label-description{font-size:14.88px;margin-top:8px}.usa-radio__input{font-size:25.6px;border-width:1.6px;height:67.2px;max-width:736px;padding:16px 0.7em}.usa-radio__input--tile+[class*=__label]{border-radius:4px;margin-top:8px;padding:12px 16px 12px 40px}.usa-radio__input--tile+[class*=__label]::before{left:8px}.usa-input,.usa-select,.usa-textarea{height:40px;margin-top:8px;max-width:480px;padding:8px}.usa-input--success,.usa-input--error,.usa-select--success,.usa-select--error,.usa-textarea--success,.usa-textarea--error{padding-top:4px;padding-bottom:4px;border-width:4px}.usa-checkbox__label{margin-top:12px;padding-left:32px;font-size:16.96px}.usa-checkbox__label::before{height:20px;width:20px;margin-top:1.024px}.usa-checkbox__input--tile+[class*=__label]{border-radius:4px;margin-top:8px;padding:12px 16px 12px 40px}.usa-checkbox__input--tile+[class*=__label]::before{left:8px}.usa-checkbox__label-description{font-size:14.88px;margin-top:8px}.usa-error-message{padding-bottom:4px;padding-top:4px}.usa-legend{color:#1B1B1B}.usa-select{background-size:20px;background-position:right 8px center}.usa-memorable-date .usa-form-group{margin-top:0px}.usa-form-group--day,.usa-form-group--month,.usa-form-group--year{margin-right:16px}.usa-form-group--day-input,.usa-form-group--month-input{width:48px}.usa-form-group--year-input{width:72px}.usa-form-group--month-select{width:240px}.usa-textarea{height:160px}.usa-button{font-size:16.96px;border-radius:4px;margin-right:8px;padding:12px 20px}.usa-button--big{border-radius:4px;font-size:23.36px;padding:16px 24px}.usa-button i{font-size:16px}.usa-button-group{margin:0px -8px}.usa-button-group__item{margin:4px}.usa-modal{border-radius:8px;margin:20px auto;max-width:480px}.usa-modal__content{padding-top:32px}.usa-modal--lg .usa-modal__main{padding-bottom:64px;padding-top:20px;max-width:640px}.usa-modal__main{padding:8px 32px 32px}.usa-modal__heading{font-size:21.44px}.usa-modal__footer{margin-top:24px}.usa-modal__close{font-size:14.88px;margin:-32px 0 0 auto;padding:4px}.usa-modal__close .usa-icon{height:32px;width:32px}.usa-modal--lg{max-width:880px}.usa-step-indicator{font-size:16.96px;margin-bottom:32px}.usa-step-indicator__segment{max-width:240px;min-height:8px}.usa-step-indicator__segment::after{height:8px}.usa-step-indicator__heading{font-size:18.08px;margin:16px 0px 0px}.usa-step-indicator__current-step{height:40px;border-radius:1584px;width:40px;padding:calc((40px - 2.2ex) * 0.5);-webkit-box-sizing:border-box;box-sizing:border-box}.usa-step-indicator__total-steps{margin-right:8px}@media (min-width: 40em){.usa-step-indicator--counters .usa-step-indicator__segment,.usa-step-indicator--counters-sm .usa-step-indicator__segment{margin-top:20px}.usa-step-indicator--counters-sm .usa-step-indicator__segment{margin-top:12px}.usa-step-indicator--counters .usa-step-indicator__segment::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{height:40px;border-radius:1584px;width:40px;padding:calc((40px - 1.8ex) * 0.5);top:-16px}.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{height:24px;border-radius:1584px;width:24px;font-size:14.88px;padding:5px;top:-8px}.usa-step-indicator__segment-label{font-size:16.96px;margin-top:16px;padding-right:32px}.usa-step-indicator--counters .usa-step-indicator__segment-label,.usa-step-indicator--counters-sm .usa-step-indicator__segment-label{margin-top:32px}.usa-step-indicator--center .usa-step-indicator__segment::before{left:calc(50% - 22px)}.usa-step-indicator__segment::after{height:8px}.usa-step-indicator--counters .usa-step-indicator__segment::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 0 4px #919191, 0 0 0 4px #fff;box-shadow:inset 0 0 0 4px #919191, 0 0 0 4px #fff}.usa-step-indicator--counters .usa-step-indicator__segment--current::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment--current::before,.usa-step-indicator--counters .usa-step-indicator__segment--complete::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment--complete::before{-webkit-box-shadow:0 0 0 4px #fff;box-shadow:0 0 0 4px #fff}}.usa-alert{border-left-width:8px}.usa-alert .usa-alert__body{font-size:16.96px;max-width:1024px;padding:16px}.usa-alert--info .usa-alert__body,.usa-alert--warning .usa-alert__body,.usa-alert--success .usa-alert__body,.usa-alert--error .usa-alert__body{padding-left:46.66672px}.usa-alert--info .usa-alert__body::before,.usa-alert--warning .usa-alert__body::before,.usa-alert--success .usa-alert__body::before,.usa-alert--error .usa-alert__body::before{height:32px;width:32px;top:12px;left:8px}@media (min-width: 64em){.usa-alert--info .usa-alert__body,.usa-alert--warning .usa-alert__body,.usa-alert--success .usa-alert__body,.usa-alert--error .usa-alert__body{padding-left:64px;padding-right:64px}.usa-alert--info .usa-alert__body::before,.usa-alert--warning .usa-alert__body::before,.usa-alert--success .usa-alert__body::before,.usa-alert--error .usa-alert__body::before{left:24px;top:12px}}.usa-alert--slim .usa-alert__body{padding-bottom:8px;padding-top:8px;padding-left:38.6666666672px}@media (min-width: 64em){.usa-alert--slim .usa-alert__body{padding-left:56px}}.usa-checkbox__input:checked+[class*=__label]::before{background-size:12px}.usa-breadcrumb{padding-bottom:16px;padding-top:16px;font-size:16.96px}.usa-breadcrumb__list{margin:0 -4px;padding:4px}.usa-accordion{font-size:16.96px}.usa-accordion__heading{font-size:16.96px}.usa-accordion__heading:not(:first-child){margin-top:8px}.usa-accordion__button{background-size:24px;background-position:right 20px center;padding:16px 56px 16px 20px}.usa-accordion__button[aria-expanded=false]{background-size:24px}.usa-accordion__content{padding:16px 20px 12px}.usa-accordion--bordered .usa-accordion__content{border-bottom:4px solid #f0f0f0;border-left:4px solid #f0f0f0;border-right:4px solid #f0f0f0;padding-bottom:16px}.usa-character-count__status{padding-top:4px}.usa-process-list{font-size:16.96px;padding-left:16px}.usa-process-list__item:before{font-size:16.96px;border-width:4px;margin-top:-6.4px;height:32px;width:32px;border-radius:1584px}.usa-process-list__item{font-size:16.96px;border-left-width:8px;padding-bottom:32px;padding-left:32px}.usa-process-list__item:last-child{border-left-width:8px}.usa-icon--size-3{height:24px;width:24px}.usa-icon--size-4{height:32px;width:32px}.usa-icon--size-5{height:40px;width:40px}.usa-icon--size-6{height:48px;width:48px}.usa-icon--size-7{height:56px;width:56px}.usa-icon--size-8{height:64px;width:64px}.usa-icon--size-9{height:72px;width:72px}.usa-pagination{margin-bottom:16px;margin-top:16px;font-size:16.96px}.usa-pagination__item{height:40px;margin-left:4px;margin-right:4px;min-width:40px}.usa-pagination__button{border-radius:4px;padding:8px}.usa-pagination__overflow{padding:8px}.usa-pagination .usa-icon{height:18.08px;width:18.08px}@media (min-width: 40em){.usa-pagination__next-page{margin-left:20px}}:host{display:inline-block}:host([disabled]:not([disabled=false])) button{pointer-events:none}:host([disabled]:not([disabled=false])){cursor:not-allowed}.usa-button--outline{background-color:var(--color-white)}.va-button-primary--alternate{background:var(--color-green)}.va-button-primary--alternate:hover,.va-button-primary--alternate:focus{background-color:var(--color-green-darker);text-decoration:none}:host(:not([uswds])) button{-ms-flex-align:center;align-items:center;background-color:var(--color-primary);border-radius:5px;color:var(--color-white);display:-ms-flexbox;display:flex;font-size:1.6rem;-ms-flex-pack:center;justify-content:center;margin:0.5em 0.5em 0.5em 0}:host(:not([uswds])) button:hover,:host(:not([uswds])) button:focus{background-color:var(--color-primary-darker)}:host(:not([uswds])) button:active{background-color:var(--color-primary-darkest)}:host(:not([uswds])) button.va-button-primary--alternate{background:var(--color-green)}:host(:not([uswds])) button.va-button-primary--alternate:hover,:host(:not([uswds])) button.va-button-primary--alternate:focus{background-color:var(--color-green-darker);text-decoration:none}:host(:not([uswds])[back]:not([back=false])) button,:host(:not([uswds])[secondary]:not([secondary=false])) button{background-color:var(--color-white);-webkit-box-shadow:inset 0 0 0 2px var(--color-primary);box-shadow:inset 0 0 0 2px var(--color-primary);color:var(--color-primary)}:host(:not([uswds])[back]:not([back=false])) button:active,:host(:not([uswds])[back]:not([back=false])) button:hover,:host(:not([uswds])[secondary]:not([secondary=false])) button:active,:host(:not([uswds])[secondary]:not([secondary=false])) button:hover{background-color:var(--color-gray-cool-light);-webkit-box-shadow:inset 0 0 0 2px var(--color-primary-darker);box-shadow:inset 0 0 0 2px var(--color-primary-darker);color:var(--color-primary-darker)}:host(:not([uswds])[back]:not([back=false])) button:focus,:host(:not([uswds])[secondary]:not([secondary=false])) button:focus{background-color:var(--color-gray-cool-light);-webkit-box-shadow:inset 0 0 0 2px var(--color-primary);box-shadow:inset 0 0 0 2px var(--color-primary);color:var(--color-primary)}:host(:not([uswds])[big]:not([big=false])) button{border-radius:8px;font-size:2.4rem;padding:1.5rem 3rem}i{font-family:"Font Awesome 5 Free";font-size:1.6rem;font-style:normal;font-weight:900;line-height:1}i.fa-angles-left::before{content:"\\f100";margin-right:8px}i.fa-angles-right::before{content:"\\f101";margin-left:8px}:host(:not([uswds])[disabled]:not([disabled=false])) button{background-color:var(--color-gray-lighter);-webkit-box-shadow:none;box-shadow:none;color:var(--color-white)}'}}]);
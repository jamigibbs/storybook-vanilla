/*! For license information please see 5097.e8f9a0fa.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook_vanilla=self.webpackChunkstorybook_vanilla||[]).push([[5097,1566],{"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-3c78bcaf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=function createCommonjsModule(r,e,o){return r(o={path:e,exports:{},require:function(r,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}((function(r){!function(){var e={}.hasOwnProperty;function o(){for(var r=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)r.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&r.push(i)}}else if("object"===s)if(t.toString===Object.prototype.toString)for(var u in t)e.call(t,u)&&t[u]&&r.push(u);else r.push(t.toString())}}return r.join(" ")}r.exports?(o.default=o,r.exports=o):window.classNames=o}()}))},"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-number-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{va_number_input:()=>VaNumberInput});var _index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-5ed038a1.js"),_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-3c78bcaf.js"),_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/i18next-858cee77.js"),VaNumberInput=function(){function e(e){var t=this;(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.componentLibraryAnalytics=(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"component-library-analytics",7),this.handleInput=function(e){var a=e.target;t.value=a.value},this.handleBlur=function(){if(t.enableAnalytics){var e={componentName:"va-number-input",action:"blur",details:{label:t.label,value:t.value}};t.componentLibraryAnalytics.emit(e)}},this.label=void 0,this.error=void 0,this.required=!1,this.inputmode=void 0,this.enableAnalytics=!1,this.name=void 0,this.min=void 0,this.max=void 0,this.hint=void 0,this.messageAriaDescribedby=void 0,this.value=void 0,this.currency=!1,this.width=void 0,this.uswds=!1}return e.prototype.connectedCallback=function(){var e=this;_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_2__.i.on("languageChanged",(function(){(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.f)(e.el)}))},e.prototype.disconnectedCallback=function(){_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_2__.i.off("languageChanged")},e.prototype.render=function(){var e,t,a=this,s=a.label,r=a.required,o=a.error,i=a.inputmode,n=a.name,p=a.max,d=a.min,u=a.value,l=a.hint,c=a.currency,x=a.uswds,m=a.handleBlur,b=a.handleInput,g=a.width,f=a.messageAriaDescribedby,_="".concat(f?"input-message":""," ").concat(o?"input-error-message":"").trim()||null,w=i||"numeric";if(x){var y=(0,_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__.c)({"usa-label":!0,"usa-label--error":o}),v=(0,_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__.c)(((e={"usa-input":!0,"usa-input--error":o})["usa-input--".concat(g)]=g,e));return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.H,null,s&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:"inputField",class:y},s,r&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"usa-label--required"}," ",_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_2__.i.t("required")),l&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"usa-hint"},l)),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"input-error-message",role:"alert"},o&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"usa-sr-only"},_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_2__.i.t("error")),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"usa-error-message"},o))),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{class:v,"aria-describedby":_,"aria-invalid":o?"true":"false",id:"inputField",type:"text",inputmode:w,pattern:"[0-9]+(\\.[0-9]{1,})?",name:n,max:p,min:d,value:u,required:r||null,onInput:b,onBlur:m}),f&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"input-message",class:"sr-only"},f))}var z=(0,_index_3c78bcaf_js__WEBPACK_IMPORTED_MODULE_1__.c)(((t={})["usa-input--".concat(g)]=g,t["currency-input"]=c,t));return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:"inputField"},s," ",r&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"required"},_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_2__.i.t("required")),l&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"hint-text"},l)),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"error-message",role:"alert"},o&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"sr-only"},_i18next_858cee77_js__WEBPACK_IMPORTED_MODULE_2__.i.t("error"))," ",o)),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,c&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"symbol"},"$"),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{class:z,"aria-labelledby":c?"inputField symbol":void 0,"aria-describedby":_,"aria-invalid":o?"true":"false",id:"inputField",type:"text",inputmode:w,pattern:"[0-9]+(\\.[0-9]{1,})?",name:n,max:p,min:d,value:u,required:r||null,onInput:b,onBlur:m}),f&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"input-message",class:"sr-only"},f)))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)},enumerable:!1,configurable:!0}),e}();VaNumberInput.style=".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}#error-message{margin-bottom:1.2rem}#error-message,#input-error-message{color:var(--color-secondary-dark);display:block;font-weight:700}:host([error]:not([error=''])){border-left:0.4rem solid  var(--color-secondary-dark);padding-left:2rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=''])){margin-left:-2.4rem;}}:host([error]:not([error='']):not([uswds])) label{margin-top:0}:host([error]:not([error='']):not([uswds])) input,:host([error]:not([error='']):not([uswds])) textarea,:host([error]:not([error='']):not([uswds])) select{border:4px solid var(--color-secondary-dark)}.hint-text{color:#71767A;display:block}#error-message{margin-bottom:1.2rem}#error-message,#input-error-message{color:var(--color-secondary-dark);display:block;font-weight:700}:host([error]:not([error=''])){border-left:0.4rem solid  var(--color-secondary-dark);padding-left:2rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=''])){margin-left:-2.4rem;}}:host([error]:not([error='']):not([uswds])) label{margin-top:0}:host([error]:not([error='']):not([uswds])) input,:host([error]:not([error='']):not([uswds])) textarea,:host([error]:not([error='']):not([uswds])) select{border:4px solid var(--color-secondary-dark)}.hint-text{color:#71767A;display:block}.usa-hint,.usa-input{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-input{border-width:1px;border-color:#565c65;border-style:solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;color:#1b1b1b;display:block;height:2.5rem;margin-top:0.5rem;max-width:30rem;padding:0.5rem;width:100%}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-input--error{border-width:0.25rem;border-color:#b50909;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-input--success{border-width:0.25rem;border-color:#00a91c;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-character-count__status{display:inline-block;padding-top:0.25rem}.usa-character-count__status.usa-character-count__status--invalid{color:#b50909;font-weight:700}:host([error][uswds]:not([error=\"\"])){border-left:0.4rem solid #b50909;padding-left:16px;position:relative}@media screen and (min-width: 1008px){:host([error][uswds]:not([error=\"\"])){margin-left:-1.4rem}}:host(:not([uswds])) .usa-input--2xs,:host .usa-input--2xs{max-width:5ex}:host(:not([uswds])) .usa-input--xs,:host .usa-input--xs{max-width:9ex}:host(:not([uswds])) .usa-input--sm,:host(:not([uswds])) .usa-input--small,:host .usa-input--sm,:host .usa-input--small{max-width:13ex}:host(:not([uswds])) .usa-input--md,:host(:not([uswds])) .usa-input--medium,:host .usa-input--md,:host .usa-input--medium{max-width:20ex}:host(:not([uswds])) .usa-input--lg,:host .usa-input--lg{max-width:30ex}:host(:not([uswds])) .usa-input--xl,:host .usa-input--xl{max-width:40ex}:host(:not([uswds])) .usa-input--2xl,:host .usa-input--2xl{max-width:50ex}.usa-form{font-size:16px}@media (min-width: 30em){.usa-form{max-width:320px}}.usa-fieldset,.usa-hint,.usa-input,.usa-label,.usa-legend,.usa-radio__label,.usa-textarea,.usa-modal,.usa-select{font-size:16.96px}.usa-label,.usa-legend{margin-top:24px;max-width:480px}.usa-radio__label{margin-top:12px;padding-left:32px}.usa-radio__label::before{height:20px;border-radius:1584px;width:20px;margin-top:1.024px}.usa-radio__label-description{font-size:14.88px;margin-top:8px}.usa-radio__input{font-size:25.6px;border-width:1.6px;height:67.2px;max-width:736px;padding:16px 0.7em}.usa-radio__input--tile+[class*=__label]{border-radius:4px;margin-top:8px;padding:12px 16px 12px 40px}.usa-radio__input--tile+[class*=__label]::before{left:8px}.usa-input,.usa-select,.usa-textarea{height:40px;margin-top:8px;max-width:480px;padding:8px}.usa-input--success,.usa-input--error,.usa-select--success,.usa-select--error,.usa-textarea--success,.usa-textarea--error{padding-top:4px;padding-bottom:4px;border-width:4px}.usa-checkbox__label{margin-top:12px;padding-left:32px;font-size:16.96px}.usa-checkbox__label::before{height:20px;width:20px;margin-top:1.024px}.usa-checkbox__input--tile+[class*=__label]{border-radius:4px;margin-top:8px;padding:12px 16px 12px 40px}.usa-checkbox__input--tile+[class*=__label]::before{left:8px}.usa-checkbox__label-description{font-size:14.88px;margin-top:8px}.usa-error-message{padding-bottom:4px;padding-top:4px}.usa-legend{color:#1B1B1B}.usa-select{background-size:20px;background-position:right 8px center}.usa-memorable-date .usa-form-group{margin-top:0px}.usa-form-group--day,.usa-form-group--month,.usa-form-group--year{margin-right:16px}.usa-form-group--day-input,.usa-form-group--month-input{width:48px}.usa-form-group--year-input{width:72px}.usa-form-group--month-select{width:240px}.usa-textarea{height:160px}.usa-button{font-size:16.96px;border-radius:4px;margin-right:8px;padding:12px 20px}.usa-button--big{border-radius:4px;font-size:23.36px;padding:16px 24px}.usa-button i{font-size:16px}.usa-button-group{margin:0px -8px}.usa-button-group__item{margin:4px}.usa-modal{border-radius:8px;margin:20px auto;max-width:480px}.usa-modal__content{padding-top:32px}.usa-modal--lg .usa-modal__main{padding-bottom:64px;padding-top:20px;max-width:640px}.usa-modal__main{padding:8px 32px 32px}.usa-modal__heading{font-size:21.44px}.usa-modal__footer{margin-top:24px}.usa-modal__close{font-size:14.88px;margin:-32px 0 0 auto;padding:4px}.usa-modal__close .usa-icon{height:32px;width:32px}.usa-modal--lg{max-width:880px}.usa-step-indicator{font-size:16.96px;margin-bottom:32px}.usa-step-indicator__segment{max-width:240px;min-height:8px}.usa-step-indicator__segment::after{height:8px}.usa-step-indicator__heading{font-size:18.08px;margin:16px 0px 0px}.usa-step-indicator__current-step{height:40px;border-radius:1584px;width:40px;padding:calc((40px - 2.2ex) * 0.5);-webkit-box-sizing:border-box;box-sizing:border-box}.usa-step-indicator__total-steps{margin-right:8px}@media (min-width: 40em){.usa-step-indicator--counters .usa-step-indicator__segment,.usa-step-indicator--counters-sm .usa-step-indicator__segment{margin-top:20px}.usa-step-indicator--counters-sm .usa-step-indicator__segment{margin-top:12px}.usa-step-indicator--counters .usa-step-indicator__segment::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{height:40px;border-radius:1584px;width:40px;padding:calc((40px - 1.8ex) * 0.5);top:-16px}.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{height:24px;border-radius:1584px;width:24px;font-size:14.88px;padding:5px;top:-8px}.usa-step-indicator__segment-label{font-size:16.96px;margin-top:16px;padding-right:32px}.usa-step-indicator--counters .usa-step-indicator__segment-label,.usa-step-indicator--counters-sm .usa-step-indicator__segment-label{margin-top:32px}.usa-step-indicator--center .usa-step-indicator__segment::before{left:calc(50% - 22px)}.usa-step-indicator__segment::after{height:8px}.usa-step-indicator--counters .usa-step-indicator__segment::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 0 4px #919191, 0 0 0 4px #fff;box-shadow:inset 0 0 0 4px #919191, 0 0 0 4px #fff}.usa-step-indicator--counters .usa-step-indicator__segment--current::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment--current::before,.usa-step-indicator--counters .usa-step-indicator__segment--complete::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment--complete::before{-webkit-box-shadow:0 0 0 4px #fff;box-shadow:0 0 0 4px #fff}}.usa-alert{border-left-width:8px}.usa-alert .usa-alert__body{font-size:16.96px;max-width:1024px;padding:16px}.usa-alert--info .usa-alert__body,.usa-alert--warning .usa-alert__body,.usa-alert--success .usa-alert__body,.usa-alert--error .usa-alert__body{padding-left:46.66672px}.usa-alert--info .usa-alert__body::before,.usa-alert--warning .usa-alert__body::before,.usa-alert--success .usa-alert__body::before,.usa-alert--error .usa-alert__body::before{height:32px;width:32px;top:12px;left:8px}@media (min-width: 64em){.usa-alert--info .usa-alert__body,.usa-alert--warning .usa-alert__body,.usa-alert--success .usa-alert__body,.usa-alert--error .usa-alert__body{padding-left:64px;padding-right:64px}.usa-alert--info .usa-alert__body::before,.usa-alert--warning .usa-alert__body::before,.usa-alert--success .usa-alert__body::before,.usa-alert--error .usa-alert__body::before{left:24px;top:12px}}.usa-alert--slim .usa-alert__body{padding-bottom:8px;padding-top:8px;padding-left:38.6666666672px}@media (min-width: 64em){.usa-alert--slim .usa-alert__body{padding-left:56px}}.usa-checkbox__input:checked+[class*=__label]::before{background-size:12px}.usa-breadcrumb{padding-bottom:16px;padding-top:16px;font-size:16.96px}.usa-breadcrumb__list{margin:0 -4px;padding:4px}.usa-accordion{font-size:16.96px}.usa-accordion__heading{font-size:16.96px}.usa-accordion__heading:not(:first-child){margin-top:8px}.usa-accordion__button{background-size:24px;background-position:right 20px center;padding:16px 56px 16px 20px}.usa-accordion__button[aria-expanded=false]{background-size:24px}.usa-accordion__content{padding:16px 20px 12px}.usa-accordion--bordered .usa-accordion__content{border-bottom:4px solid #f0f0f0;border-left:4px solid #f0f0f0;border-right:4px solid #f0f0f0;padding-bottom:16px}.usa-character-count__status{padding-top:4px}.usa-process-list{font-size:16.96px;padding-left:16px}.usa-process-list__item:before{font-size:16.96px;border-width:4px;margin-top:-6.4px;height:32px;width:32px;border-radius:1584px}.usa-process-list__item{font-size:16.96px;border-left-width:8px;padding-bottom:32px;padding-left:32px}.usa-process-list__item:last-child{border-left-width:8px}.usa-icon--size-3{height:24px;width:24px}.usa-icon--size-4{height:32px;width:32px}.usa-icon--size-5{height:40px;width:40px}.usa-icon--size-6{height:48px;width:48px}.usa-icon--size-7{height:56px;width:56px}.usa-icon--size-8{height:64px;width:64px}.usa-icon--size-9{height:72px;width:72px}.usa-pagination{margin-bottom:16px;margin-top:16px;font-size:16.96px}.usa-pagination__item{height:40px;margin-left:4px;margin-right:4px;min-width:40px}.usa-pagination__button{border-radius:4px;padding:8px}.usa-pagination__overflow{padding:8px}.usa-pagination .usa-icon{height:18.08px;width:18.08px}@media (min-width: 40em){.usa-pagination__next-page{margin-left:20px}}:host([uswds]){color:var(--v3-color-base-darkest)}:host{display:block;font-family:var(--font-source-sans)}:host(:focus){outline:none !important}:host([uswds]) input:not([disabled]):focus{outline:2px solid var(--color-gold-light);outline-offset:2px}input{-webkit-box-sizing:border-box;box-sizing:border-box}input.usa-input{color:var(--color-base)}.usa-hint{display:block}:host(:not([uswds])) label{display:block;max-width:46rem;margin-top:3rem;font-size:16px}span.required{color:var(--color-secondary-dark)}:host(:not([uswds])) input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0.1rem solid var(--color-gray);border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-base);display:block;font-family:var(--font-source-sans);font-size:1.6rem;height:4.2rem;line-height:1.3;margin:0.2em 0;max-width:46rem;padding:1rem 0.7em;width:100%}:host(:not([uswds])) input:not([disabled]):focus{outline:2px solid var(--color-gold-light);outline-offset:2px}:host([success]:not([success=false]):not([uswds])) input{border:4px solid var(--color-green)}.usa-hint{display:block}:host(:not([uswds])) input[type=number]{-moz-appearance:textfield}:host(:not([uswds])) input::-webkit-outer-spin-button,:host(:not([uswds])) input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}:host(:not([uswds]))>div{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(:not([uswds]))>div>span{position:absolute;left:1rem}:host(:not([uswds]))>div>input.currency-input{padding-left:2.5rem}"}}]);
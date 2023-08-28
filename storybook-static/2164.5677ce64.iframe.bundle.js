"use strict";(self.webpackChunkstorybook_vanilla=self.webpackChunkstorybook_vanilla||[]).push([[2164],{"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/va-file-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{va_file_input:()=>VaFileInput});var _index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/index-5ed038a1.js"),VaFileInput=function(){function e(e){var t=this;(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.vaChange=(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"vaChange",7),this.componentLibraryAnalytics=(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"component-library-analytics",7),this.handleChange=function(e){var r=e.target;t.vaChange.emit({files:r.files}),r.value=null,t.enableAnalytics&&t.componentLibraryAnalytics.emit({componentName:"va-file-input",action:"change",details:{label:t.label}})},this.handleButtonClick=function(){t.el.shadowRoot.getElementById("fileInputField").click()},this.getButtonText=function(){return t.buttonText?t.buttonText:"Upload file"},this.label=void 0,this.name=void 0,this.buttonText=void 0,this.required=!1,this.accept=void 0,this.error=void 0,this.hint=void 0,this.enableAnalytics=!1}return e.prototype.render=function(){var e=this,t=e.label,r=e.name,n=e.required,a=e.accept,o=e.error,i=e.hint,s=this.getButtonText();return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.H,null,t&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:"fileInputButton"},t,n&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"required"},"(*Required)")),i&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"hint-text"},i),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id:"error-message",role:"alert"},o&&(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"sr-only"},"Error"),o)),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("va-button",{id:"fileInputButton","aria-label":t,label:t,onClick:this.handleButtonClick,secondary:!0,text:s,"aria-describedby":o?"error-message":void 0}),(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{id:"fileInputField",hidden:!0,type:"file",accept:a,name:r,onChange:this.handleChange}))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,_index_5ed038a1_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)},enumerable:!1,configurable:!0}),e}();VaFileInput.style=".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}#error-message{margin-bottom:1.2rem}#error-message,#input-error-message{color:var(--color-secondary-dark);display:block;font-weight:700}:host([error]:not([error=''])){border-left:0.4rem solid  var(--color-secondary-dark);padding-left:2rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=''])){margin-left:-2.4rem;}}:host([error]:not([error='']):not([uswds])) label{margin-top:0}:host([error]:not([error='']):not([uswds])) input,:host([error]:not([error='']):not([uswds])) textarea,:host([error]:not([error='']):not([uswds])) select{border:4px solid var(--color-secondary-dark)}.hint-text{color:#71767A;display:block}:host{display:block;font-family:var(--font-source-sans)}#error-message{margin-bottom:0.3rem}va-button{margin-bottom:-0.8rem}.required{color:var(--color-secondary-dark);margin-left:0.4rem}"}}]);
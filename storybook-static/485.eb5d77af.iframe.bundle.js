"use strict";(self.webpackChunkstorybook_vanilla=self.webpackChunkstorybook_vanilla||[]).push([[485],{"./node_modules/@department-of-veterans-affairs/web-components/dist/esm-es5/utils-20939d1f.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isNumeric(r){return!Number.isNaN(parseFloat(r))}function getSlottedNodes(r,e){var t=r.shadowRoot.querySelector("slot").assignedNodes();return null!==e?Array.from(t).filter((function(r){return r.nodeName.toLowerCase()===e})):Array.from(t)}function plurality(r){return 1===r?"":"s"}function getCharacterMessage(r,e){if(void 0===r)return"".concat(e," character").concat(plurality(e)," allowed");var t;if(r.length<=e){var a=e-r.length;t="".concat(a," character").concat(plurality(a)," left")}else{a=r.length-e;t="".concat(a," character").concat(plurality(a)," over limit")}return t}function makeArray(r,e){return Array.from({length:e-r+1},(function(e,t){return r+t}))}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{a:()=>getCharacterMessage,g:()=>getSlottedNodes,i:()=>isNumeric,m:()=>makeArray})}}]);
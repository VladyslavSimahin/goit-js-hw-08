!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,y=Math.max,m=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,o,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(w,t),d?p(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=b();if(O(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?m(n,u-(e-c)):n}(e))}function S(e){return f=void 0,v&&r?p(e):(r=o=void 0,a)}function T(){var e=b(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return h(l);if(s)return f=setTimeout(w,t),p(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?y(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?a:S(b())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var h=document.querySelector(".feedback-form"),O="feedback-form-state",w=JSON.parse(localStorage.getItem(O))||{};h.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(w))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),localStorage.removeItem(O),h.reset(),w={}})),function(){var e=!0,t=!1,n=void 0;try{for(var r,i=h[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value;w&&Object.keys(w).includes(o.name)&&(o.value=w[o.name])}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}()}();
//# sourceMappingURL=03-feedback.db9322f3.js.map
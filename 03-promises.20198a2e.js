var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");const r=document.querySelector(".form");function l(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}function s({position:e,delay:o}){i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)}function a({position:e,delay:o}){i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}r.addEventListener("submit",(function(e){e.preventDefault();const o=new FormData(e.currentTarget),n={};for(const[e,t]of o.entries())n[e]=Number(t);let{amount:t,step:i,delay:d}=n;for(let e=0;e<t;e++){const o=d+i*e;console.log(o),l(e+1,o).then(s).catch(a)}r.reset()}));
//# sourceMappingURL=03-promises.20198a2e.js.map
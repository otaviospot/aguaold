!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";function r(e){let n="";return 0==e.banner_text_background_type&&(n=`background-color: ${e.banner_text_background_color};`),e.customer_type,e.product_type,`<div class="bss-pl-banner-wrapper" style="\n            width: 100%; \n            height: 60px; \n            text-align: center;\n            overflow: hidden;\n            font-weight: 600;">\n                <${e.banner_clickable?"a ":"div "} ${e.banner_clickable?`href='${e.clickable_url}'`:""} ${e.is_open_in_newtab?'target="_blank"':""} class="bss-pl-banner"  style="\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    text-decoration: none;\n                    width: 100%;\n                    height: 60px;\n                    color: ${e.banner_text_color?e.banner_text_color.toString():"#000000"};\n                    font-family: ${e.banner_text_font_family||"inherit"};\n                    font-size: ${e.banner_text_font_size||16}px;\n                `+n+'\n                "> '+e.banner_text+`\n                </${e.banner_clickable?"a":"div"}> \n                ${e.is_add_x_button?'<span class="close-banner" style="position: absolute; top: 1px; right: 0px; color: #26282a; cursor: pointer; font-size: 15px; z-index:7; width:30px; height:25px; background: transparent;">&#10005;</span>':""}\n        </div>`}function o(e){let n=window.location.pathname.split("/");!function(e,n,t){var o="products"==n,i=""==t[0]&&""==t[1],c="";"pages"==n&&(c=t[t.length-1]);var l="collections"==n||-1!==t.indexOf("collections")&&!o&&!i,a="search"==n||"search-results"==c||"search-results-page"==c||-1!==t.indexOf("search")&&!o&&!l&&!i,u=!(l||o||a||i);if(e.configDataBanner&&e.configDataBanner.length){const n=e.configDataBanner.filter(e=>{const n=e.pages.split(",");return n.includes("1")&&o||n.includes("2")&&l||n.includes("7")&&i||n.includes("3")&&u||n.includes("4")&&a});if(n.map(e=>e.position).filter((e,n,t)=>t.indexOf(e)!==n).includes(0)){let e=n.filter(e=>1==e.enable&&0==e.position).map(e=>new Date(e.createdAt)),t=Math.max.apply(null,e),o=r(n.find(e=>new Date(e.createdAt).getTime()==t));if(o){let e=document.querySelector("body");var s=document.createElement("div");s.innerHTML=o,e.prepend(s)}}else n.reverse().map(e=>{let n=r(e);if(n&&0==e.position){let r=document.querySelector("body");var t=document.createElement("div");e.banner_scroll&&(t.style.position="sticky",t.style.top="0",t.style.zIndex="9999"),t.innerHTML=n,r.prepend(t)}});const t=document.querySelector(".close-banner"),c=document.querySelector(".bss-pl-banner-wrapper");t&&t.addEventListener("click",()=>{c.remove()})}}(e,n[n.length-2],n)}t.d(n,"a",(function(){return o}))},function(e,n,t){"use strict";t.r(n),function(e){var n=t(0);(document.querySelector('script[src*="bss-pl.js"]')||"production"!=e.env.ENVIRONMENT)&&Object(n.a)(BSS_PL)}.call(this,t(2))},function(e,n){var t,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var a,u=[],s=!1,f=-1;function p(){s&&a&&(s=!1,a.length?u=a.concat(u):f=-1,u.length&&d())}function d(){if(!s){var e=l(p);s=!0;for(var n=u.length;n;){for(a=u,u=[];++f<n;)a&&a[f].run();f=-1,n=u.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function b(e,n){this.fun=e,this.array=n}function h(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new b(e,n)),1!==u.length||s||l(d)},b.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]);
/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/js-cookie@2.2.1/src/js.cookie.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function r(){}function i(n,t,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(e){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var u in i)i[u]&&(f+="; "+u,!0!==i[u]&&(f+="="+i[u].split(";")[0]));return document.cookie=n+"="+t+f}}function c(e,t){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var f=i[c].split("="),u=f.slice(1).join("=");t||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var a=n(f[0]);if(u=(o.read||o)(u,a)||n(u),t)try{u=JSON.parse(u)}catch(e){}if(r[a]=u,e===a)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(n,t){i(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=t,r}(function(){})});

/*! nouislider - 14.6.2 - 09/16/2020 - Download URL is https://github.com/leongersen/noUiSlider/releases */
!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";var t="%%REPLACE_THIS_WITH_VERSION%%";function e(t){t.parentElement.removeChild(t)}function r(t){return null!=t}function n(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function o(t,e,r){r>0&&(u(t,e),setTimeout(function(){c(t,e)},r))}function s(t){return Math.max(Math.min(t,100),0)}function a(t){return Array.isArray(t)?t:[t]}function l(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function u(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function c(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function p(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function f(t,e){return 100/(e-t)}function d(t,e,r){return 100*e/(t[r+1]-t[r])}function h(t,e){for(var r=1;t>=e[r];)r+=1;return r}function m(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=h(r,t),i=t[n-1],o=t[n],s=e[n-1],a=e[n];return s+function(t,e){return d(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}([i,o],r)/f(s,a)}function g(t,e,r,n){if(100===n)return n;var i=h(n,t),o=t[i-1],s=t[i];return r?n-o>(s-o)/2?s:o:e[i-1]?t[i-1]+function(t,e){return Math.round(t/e)*e}(n-t[i-1],e[i-1]):n}function v(e,r,n){var o;if("number"==typeof r&&(r=[r]),!Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'range' contains invalid value.");if(!i(o="min"===e?0:"max"===e?100:parseFloat(e))||!i(r[0]))throw new Error("noUiSlider ("+t+"): 'range' value isn't numeric.");n.xPct.push(o),n.xVal.push(r[0]),o?n.xSteps.push(!isNaN(r[1])&&r[1]):isNaN(r[1])||(n.xSteps[0]=r[1]),n.xHighestCompleteStep.push(0)}function b(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=d([r.xVal[t],r.xVal[t+1]],e,0)/f(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function x(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)v(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)b(n,this.xNumSteps[n],this)}x.prototype.getDistance=function(e){var r,n=[];for(r=0;r<this.xNumSteps.length-1;r++){var i=this.xNumSteps[r];if(i&&e/i%1!=0)throw new Error("noUiSlider ("+t+"): 'limit', 'margin' and 'padding' of "+this.xPct[r]+"% range must be divisible by step.");n[r]=d(this.xVal,e,r)}return n},x.prototype.getAbsoluteDistance=function(t,e,r){var n,i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);r||t!==this.xPct[i+1]||i++;var o=1,s=e[i],a=0,l=0,u=0,c=0;for(n=r?(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);s>0;)a=this.xPct[i+1+c]-this.xPct[i+c],e[i+c]*o+100-100*n>100?(l=a*n,o=(s-100*n)/e[i+c],n=1):(l=e[i+c]*a/100*o,o=0),r?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),s=e[i+c]*o;return t+u},x.prototype.toStepping=function(t){return t=m(this.xVal,this.xPct,t)},x.prototype.fromStepping=function(t){return function(t,e,r){if(r>=100)return t.slice(-1)[0];var n=h(r,e),i=t[n-1],o=t[n],s=e[n-1];return function(t,e){return e*(t[1]-t[0])/100+t[0]}([i,o],(r-s)*f(s,e[n]))}(this.xVal,this.xPct,t)},x.prototype.getStep=function(t){return t=g(this.xPct,this.xSteps,this.snap,t)},x.prototype.getDefaultStep=function(t,e,r){var n=h(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},x.prototype.getNearbySteps=function(t){var e=h(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},x.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(l);return Math.max.apply(null,t)},x.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var S={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number},w={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"};function y(e){if(function(t){return"object"==typeof t&&"function"==typeof t.to&&"function"==typeof t.from}(e))return!0;throw new Error("noUiSlider ("+t+"): 'format' requires 'to' and 'from' methods.")}function E(e,r){if(!i(r))throw new Error("noUiSlider ("+t+"): 'step' is not numeric.");e.singleStep=r}function C(e,r){if(!i(r))throw new Error("noUiSlider ("+t+"): 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=r}function P(e,r){if(!i(r))throw new Error("noUiSlider ("+t+"): 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=r}function N(e,r){if("object"!=typeof r||Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'range' is not an object.");if(void 0===r.min||void 0===r.max)throw new Error("noUiSlider ("+t+"): Missing 'min' or 'max' in 'range'.");if(r.min===r.max)throw new Error("noUiSlider ("+t+"): 'range' 'min' and 'max' cannot be equal.");e.spectrum=new x(r,e.snap,e.singleStep)}function k(e,r){if(r=a(r),!Array.isArray(r)||!r.length)throw new Error("noUiSlider ("+t+"): 'start' option is incorrect.");e.handles=r.length,e.start=r}function U(e,r){if(e.snap=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'snap' option must be a boolean.")}function A(e,r){if(e.animate=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'animate' option must be a boolean.")}function V(e,r){if(e.animationDuration=r,"number"!=typeof r)throw new Error("noUiSlider ("+t+"): 'animationDuration' option must be a number.")}function D(e,r){var n,i=[!1];if("lower"===r?r=[!0,!1]:"upper"===r&&(r=[!1,!0]),!0===r||!1===r){for(n=1;n<e.handles;n++)i.push(r);i.push(!1)}else{if(!Array.isArray(r)||!r.length||r.length!==e.handles+1)throw new Error("noUiSlider ("+t+"): 'connect' option doesn't match handle count.");i=r}e.connect=i}function M(e,r){switch(r){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider ("+t+"): 'orientation' option is invalid.")}}function O(e,r){if(!i(r))throw new Error("noUiSlider ("+t+"): 'margin' option must be numeric.");0!==r&&(e.margin=e.spectrum.getDistance(r))}function L(e,r){if(!i(r))throw new Error("noUiSlider ("+t+"): 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(r),!e.limit||e.handles<2)throw new Error("noUiSlider ("+t+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function H(e,r){var n;if(!i(r)&&!Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(r)&&2!==r.length&&!i(r[0])&&!i(r[1]))throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==r){for(Array.isArray(r)||(r=[r,r]),e.padding=[e.spectrum.getDistance(r[0]),e.spectrum.getDistance(r[1])],n=0;n<e.spectrum.xNumSteps.length-1;n++)if(e.padding[0][n]<0||e.padding[1][n]<0)throw new Error("noUiSlider ("+t+"): 'padding' option must be a positive number(s).");var o=r[0]+r[1],s=e.spectrum.xVal[0];if(o/(e.spectrum.xVal[e.spectrum.xVal.length-1]-s)>1)throw new Error("noUiSlider ("+t+"): 'padding' option must not exceed 100% of the range.")}}function z(e,r){switch(r){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider ("+t+"): 'direction' option was not recognized.")}}function j(e,r){if("string"!=typeof r)throw new Error("noUiSlider ("+t+"): 'behaviour' must be a string containing options.");var n=r.indexOf("tap")>=0,i=r.indexOf("drag")>=0,o=r.indexOf("fixed")>=0,s=r.indexOf("snap")>=0,a=r.indexOf("hover")>=0,l=r.indexOf("unconstrained")>=0;if(o){if(2!==e.handles)throw new Error("noUiSlider ("+t+"): 'fixed' behaviour must be used with 2 handles");O(e,e.start[1]-e.start[0])}if(l&&(e.margin||e.limit))throw new Error("noUiSlider ("+t+"): 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:n||s,drag:i,fixed:o,snap:s,hover:a,unconstrained:l}}function F(e,r){if(!1!==r)if(!0===r){e.tooltips=[];for(var n=0;n<e.handles;n++)e.tooltips.push(!0)}else{if(e.tooltips=a(r),e.tooltips.length!==e.handles)throw new Error("noUiSlider ("+t+"): must pass a formatter for all handles.");e.tooltips.forEach(function(e){if("boolean"!=typeof e&&("object"!=typeof e||"function"!=typeof e.to))throw new Error("noUiSlider ("+t+"): 'tooltips' must be passed a formatter or 'false'.")})}}function R(t,e){t.ariaFormat=e,y(e)}function T(t,e){t.format=e,y(e)}function _(e,r){if(e.keyboardSupport=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'keyboardSupport' option must be a boolean.")}function B(t,e){t.documentElement=e}function q(e,r){if("string"!=typeof r&&!1!==r)throw new Error("noUiSlider ("+t+"): 'cssPrefix' must be a string or `false`.");e.cssPrefix=r}function I(e,r){if("object"!=typeof r)throw new Error("noUiSlider ("+t+"): 'cssClasses' must be an object.");if("string"==typeof e.cssPrefix)for(var n in e.cssClasses={},r)r.hasOwnProperty(n)&&(e.cssClasses[n]=e.cssPrefix+r[n]);else e.cssClasses=r}function X(e){var n={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:S,format:S},i={step:{r:!1,t:E},keyboardPageMultiplier:{r:!1,t:C},keyboardDefaultStep:{r:!1,t:P},start:{r:!0,t:k},connect:{r:!0,t:D},direction:{r:!0,t:z},snap:{r:!1,t:U},animate:{r:!1,t:A},animationDuration:{r:!1,t:V},range:{r:!0,t:N},orientation:{r:!1,t:M},margin:{r:!1,t:O},limit:{r:!1,t:L},padding:{r:!1,t:H},behaviour:{r:!0,t:j},ariaFormat:{r:!1,t:R},format:{r:!1,t:T},tooltips:{r:!1,t:F},keyboardSupport:{r:!0,t:_},documentElement:{r:!1,t:B},cssPrefix:{r:!0,t:q},cssClasses:{r:!0,t:I}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:w,keyboardPageMultiplier:5,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(i).forEach(function(s){if(!r(e[s])&&void 0===o[s]){if(i[s].r)throw new Error("noUiSlider ("+t+"): '"+s+"' is required.");return!0}i[s].t(n,r(e[s])?e[s]:o[s])}),n.pips=e.pips;var s=document.createElement("div"),a=void 0!==s.style.msTransform,l=void 0!==s.style.transform;n.transformRule=l?"transform":a?"msTransform":"webkitTransform";return n.style=[["left","top"],["right","bottom"]][n.dir][n.ort],n}function Y(r,i,l){var f,d,h,m,g,v,b,x,S=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},w=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),y=r,E=i.spectrum,C=[],P=[],N=[],k=0,U={},A=r.ownerDocument,V=i.documentElement||A.documentElement,D=A.body,M=-1,O=0,L=1,H=2,z="rtl"===A.dir||1===i.ort?0:100;function j(t,e){var r=A.createElement("div");return e&&u(r,e),t.appendChild(r),r}function F(t,e){var r=j(t,i.cssClasses.origin),n=j(r,i.cssClasses.handle);return j(n,i.cssClasses.touchArea),n.setAttribute("data-handle",e),i.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(_()||B(e))return!1;var r=["Left","Right"],n=["Down","Up"],o=["PageDown","PageUp"],s=["Home","End"];i.dir&&!i.ort?r.reverse():i.ort&&!i.dir&&(n.reverse(),o.reverse());var a,l=t.key.replace("Arrow",""),u=l===o[0],c=l===o[1],p=l===n[0]||l===r[0]||u,f=l===n[1]||l===r[1]||c,d=l===s[0],h=l===s[1];if(!(p||f||d||h))return!0;if(t.preventDefault(),f||p){var m=i.keyboardPageMultiplier,g=p?0:1,v=vt(e),b=v[g];if(null===b)return!1;!1===b&&(b=E.getDefaultStep(P[e],p,i.keyboardDefaultStep)),(c||u)&&(b*=m),b=Math.max(b,1e-7),b*=p?-1:1,a=C[e]+b}else a=h?i.spectrum.xVal[i.spectrum.xVal.length-1]:i.spectrum.xVal[0];return ft(e,E.toStepping(a),!0,!0),st("slide",e),st("update",e),st("change",e),st("set",e),!1}(t,e)})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",i.ort?"vertical":"horizontal"),0===e?u(n,i.cssClasses.handleLower):e===i.handles-1&&u(n,i.cssClasses.handleUpper),r}function R(t,e){return!!e&&j(t,i.cssClasses.connect)}function T(t,e){return!!i.tooltips[e]&&j(t.firstChild,i.cssClasses.tooltip)}function _(){return y.hasAttribute("disabled")}function B(t){return d[t].hasAttribute("disabled")}function q(){g&&(ot("update.tooltips"),g.forEach(function(t){t&&e(t)}),g=null)}function I(){q(),g=d.map(T),it("update.tooltips",function(t,e,r){if(g[e]){var n=t[e];!0!==i.tooltips[e]&&(n=i.tooltips[e].to(r[e])),g[e].innerHTML=n}})}function Y(t,e,r){var n=A.createElement("div"),o=[];o[O]=i.cssClasses.valueNormal,o[L]=i.cssClasses.valueLarge,o[H]=i.cssClasses.valueSub;var s=[];s[O]=i.cssClasses.markerNormal,s[L]=i.cssClasses.markerLarge,s[H]=i.cssClasses.markerSub;var a=[i.cssClasses.valueHorizontal,i.cssClasses.valueVertical],l=[i.cssClasses.markerHorizontal,i.cssClasses.markerVertical];function c(t,e){var r=e===i.cssClasses.value,n=r?o:s;return e+" "+(r?a:l)[i.ort]+" "+n[t]}return u(n,i.cssClasses.pips),u(n,0===i.ort?i.cssClasses.pipsHorizontal:i.cssClasses.pipsVertical),Object.keys(t).forEach(function(o){!function(t,o,s){if((s=e?e(o,s):s)!==M){var a=j(n,!1);a.className=c(s,i.cssClasses.marker),a.style[i.style]=t+"%",s>O&&((a=j(n,!1)).className=c(s,i.cssClasses.value),a.setAttribute("data-value",o),a.style[i.style]=t+"%",a.innerHTML=r.to(o))}}(o,t[o][0],t[o][1])}),n}function W(){m&&(e(m),m=null)}function $(e){W();var r=e.mode,n=e.density||1,i=e.filter||!1,o=function(e,r,n){if("range"===e||"steps"===e)return E.xVal;if("count"===e){if(r<2)throw new Error("noUiSlider ("+t+"): 'values' (>= 2) required for mode 'count'.");var i=r-1,o=100/i;for(r=[];i--;)r[i]=i*o;r.push(100),e="positions"}return"positions"===e?r.map(function(t){return E.fromStepping(n?E.getStep(t):t)}):"values"===e?n?r.map(function(t){return E.fromStepping(E.getStep(E.toStepping(t)))}):r:void 0}(r,e.values||!1,e.stepped||!1),s=function(t,e,r){var n,i={},o=E.xVal[0],s=E.xVal[E.xVal.length-1],a=!1,l=!1,u=0;return n=r.slice().sort(function(t,e){return t-e}),(r=n.filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==o&&(r.unshift(o),a=!0),r[r.length-1]!==s&&(r.push(s),l=!0),r.forEach(function(n,o){var s,c,p,f,d,h,m,g,v,b,x=n,S=r[o+1],w="steps"===e;if(w&&(s=E.xNumSteps[o]),s||(s=S-x),!1!==x)for(void 0===S&&(S=x),s=Math.max(s,1e-7),c=x;c<=S;c=(c+s).toFixed(7)/1){for(g=(d=(f=E.toStepping(c))-u)/t,b=d/(v=Math.round(g)),p=1;p<=v;p+=1)i[(h=u+p*b).toFixed(5)]=[E.fromStepping(h),0];m=r.indexOf(c)>-1?L:w?H:O,!o&&a&&c!==S&&(m=0),c===S&&l||(i[f.toFixed(5)]=[c,m]),u=f}}),i}(n,r,o),a=e.format||{to:Math.round};return m=y.appendChild(Y(s,i,a))}function G(){var t=f.getBoundingClientRect(),e="offset"+["Width","Height"][i.ort];return 0===i.ort?t.width||f[e]:t.height||f[e]}function J(t,e,r,n){var o=function(o){return!!(o=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),s=0===t.type.indexOf("mouse"),a=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(a=!0);if("mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(o){var l=function(t){return t.target===r||r.contains(t.target)||t.target.shadowRoot&&t.target.shadowRoot.contains(r)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;n=u[0].pageX,i=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;n=c.pageX,i=c.pageY}}e=e||p(A),(s||a)&&(n=t.clientX+e.x,i=t.clientY+e.y);return t.pageOffset=e,t.points=[n,i],t.cursor=s||a,t}(o,n.pageOffset,n.target||e))&&(!(_()&&!n.doNotReject)&&(s=y,a=i.cssClasses.tap,!((s.classList?s.classList.contains(a):new RegExp("\\b"+a+"\\b").test(s.className))&&!n.doNotReject)&&(!(t===S.start&&void 0!==o.buttons&&o.buttons>1)&&((!n.hover||!o.buttons)&&(w||o.preventDefault(),o.calcPoint=o.points[i.ort],void r(o,n))))));var s,a},s=[];return t.split(" ").forEach(function(t){e.addEventListener(t,o,!!w&&{passive:!0}),s.push([t,o])}),s}function K(t){var e,r,n,o,a,l,u=100*(t-(e=f,r=i.ort,n=e.getBoundingClientRect(),o=e.ownerDocument,a=o.documentElement,l=p(o),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),r?n.top+l.y-a.clientTop:n.left+l.x-a.clientLeft))/G();return u=s(u),i.dir?100-u:u}function Q(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&tt(t,e)}function Z(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return tt(t,e);var r=(i.dir?-1:1)*(t.calcPoint-e.startCalcPoint);ut(r>0,100*r/e.baseSize,e.locations,e.handleNumbers)}function tt(t,e){e.handle&&(c(e.handle,i.cssClasses.active),k-=1),e.listeners.forEach(function(t){V.removeEventListener(t[0],t[1])}),0===k&&(c(y,i.cssClasses.drag),pt(),t.cursor&&(D.style.cursor="",D.removeEventListener("selectstart",n))),e.handleNumbers.forEach(function(t){st("change",t),st("set",t),st("end",t)})}function et(t,e){if(e.handleNumbers.some(B))return!1;var r;1===e.handleNumbers.length&&(r=d[e.handleNumbers[0]].children[0],k+=1,u(r,i.cssClasses.active));t.stopPropagation();var o=[],s=J(S.move,V,Z,{target:t.target,handle:r,listeners:o,startCalcPoint:t.calcPoint,baseSize:G(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:P.slice()}),a=J(S.end,V,tt,{target:t.target,handle:r,listeners:o,doNotReject:!0,handleNumbers:e.handleNumbers}),l=J("mouseout",V,Q,{target:t.target,handle:r,listeners:o,doNotReject:!0,handleNumbers:e.handleNumbers});o.push.apply(o,s.concat(a,l)),t.cursor&&(D.style.cursor=getComputedStyle(t.target).cursor,d.length>1&&u(y,i.cssClasses.drag),D.addEventListener("selectstart",n,!1)),e.handleNumbers.forEach(function(t){st("start",t)})}function rt(t){t.stopPropagation();var e=K(t.calcPoint),r=function(t){var e=100,r=!1;return d.forEach(function(n,i){if(!B(i)){var o=P[i],s=Math.abs(o-t);(s<e||s<=e&&t>o||100===s&&100===e)&&(r=i,e=s)}}),r}(e);if(!1===r)return!1;i.events.snap||o(y,i.cssClasses.tap,i.animationDuration),ft(r,e,!0,!0),pt(),st("slide",r,!0),st("update",r,!0),st("change",r,!0),st("set",r,!0),i.events.snap&&et(t,{handleNumbers:[r]})}function nt(t){var e=K(t.calcPoint),r=E.getStep(e),n=E.fromStepping(r);Object.keys(U).forEach(function(t){"hover"===t.split(".")[0]&&U[t].forEach(function(t){t.call(v,n)})})}function it(t,e){U[t]=U[t]||[],U[t].push(e),"update"===t.split(".")[0]&&d.forEach(function(t,e){st("update",e)})}function ot(t){var e=t&&t.split(".")[0],r=e&&t.substring(e.length);Object.keys(U).forEach(function(t){var n=t.split(".")[0],i=t.substring(n.length);e&&e!==n||r&&r!==i||delete U[t]})}function st(t,e,r){Object.keys(U).forEach(function(n){var o=n.split(".")[0];t===o&&U[n].forEach(function(t){t.call(v,C.map(i.format.to),e,C.slice(),r||!1,P.slice(),v)})})}function at(t,e,r,n,o,a){var l;return d.length>1&&!i.events.unconstrained&&(n&&e>0&&(l=E.getAbsoluteDistance(t[e-1],i.margin,0),r=Math.max(r,l)),o&&e<d.length-1&&(l=E.getAbsoluteDistance(t[e+1],i.margin,1),r=Math.min(r,l))),d.length>1&&i.limit&&(n&&e>0&&(l=E.getAbsoluteDistance(t[e-1],i.limit,0),r=Math.min(r,l)),o&&e<d.length-1&&(l=E.getAbsoluteDistance(t[e+1],i.limit,1),r=Math.max(r,l))),i.padding&&(0===e&&(l=E.getAbsoluteDistance(0,i.padding[0],0),r=Math.max(r,l)),e===d.length-1&&(l=E.getAbsoluteDistance(100,i.padding[1],1),r=Math.min(r,l))),!((r=s(r=E.getStep(r)))===t[e]&&!a)&&r}function lt(t,e){var r=i.ort;return(r?e:t)+", "+(r?t:e)}function ut(t,e,r,n){var i=r.slice(),o=[!t,t],s=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach(function(t,r){var n=at(i,t,i[t]+e,o[r],s[r],!1);!1===n?e=0:(e=n-i[t],i[t]=n)}):o=s=[!0];var a=!1;n.forEach(function(t,n){a=ft(t,r[t]+e,o[n],s[n])||a}),a&&n.forEach(function(t){st("update",t),st("slide",t)})}function ct(t,e){return i.dir?100-t-e:t}function pt(){N.forEach(function(t){var e=P[t]>50?-1:1,r=3+(d.length+e*t);d[t].style.zIndex=r})}function ft(t,e,r,n,o){return o||(e=at(P,t,e,r,n,!1)),!1!==e&&(function(t,e){P[t]=e,C[t]=E.fromStepping(e);var r="translate("+lt(10*(ct(e,0)-z)+"%","0")+")";d[t].style[i.transformRule]=r,dt(t),dt(t+1)}(t,e),!0)}function dt(t){if(h[t]){var e=0,r=100;0!==t&&(e=P[t-1]),t!==h.length-1&&(r=P[t]);var n=r-e,o="translate("+lt(ct(e,n)+"%","0")+")",s="scale("+lt(n/100,"1")+")";h[t].style[i.transformRule]=o+" "+s}}function ht(t,e){return null===t||!1===t||void 0===t?P[e]:("number"==typeof t&&(t=String(t)),t=i.format.from(t),!1===(t=E.toStepping(t))||isNaN(t)?P[e]:t)}function mt(t,e,r){var n=a(t),s=void 0===P[0];e=void 0===e||!!e,i.animate&&!s&&o(y,i.cssClasses.tap,i.animationDuration),N.forEach(function(t){ft(t,ht(n[t],t),!0,!1,r)});for(var l=1===N.length?0:1;l<N.length;++l)N.forEach(function(t){ft(t,P[t],!0,!0,r)});pt(),N.forEach(function(t){st("update",t),null!==n[t]&&e&&st("set",t)})}function gt(){var t=C.map(i.format.to);return 1===t.length?t[0]:t}function vt(t){var e=P[t],r=E.getNearbySteps(e),n=C[t],o=r.thisStep.step,s=null;if(i.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==o&&n+o>r.stepAfter.startValue&&(o=r.stepAfter.startValue-n),s=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?o=null:0===e&&(s=null);var a=E.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,o]}return u(b=y,i.cssClasses.target),0===i.dir?u(b,i.cssClasses.ltr):u(b,i.cssClasses.rtl),0===i.ort?u(b,i.cssClasses.horizontal):u(b,i.cssClasses.vertical),u(b,"rtl"===getComputedStyle(b).direction?i.cssClasses.textDirectionRtl:i.cssClasses.textDirectionLtr),f=j(b,i.cssClasses.base),function(t,e){var r=j(e,i.cssClasses.connects);d=[],(h=[]).push(R(r,t[0]));for(var n=0;n<i.handles;n++)d.push(F(e,n)),N[n]=n,h.push(R(r,t[n+1]))}(i.connect,f),(x=i.events).fixed||d.forEach(function(t,e){J(S.start,t.children[0],et,{handleNumbers:[e]})}),x.tap&&J(S.start,f,rt,{}),x.hover&&J(S.move,f,nt,{hover:!0}),x.drag&&h.forEach(function(t,e){if(!1!==t&&0!==e&&e!==h.length-1){var r=d[e-1],n=d[e],o=[t];u(t,i.cssClasses.draggable),x.fixed&&(o.push(r.children[0]),o.push(n.children[0])),o.forEach(function(t){J(S.start,t,et,{handles:[r,n],handleNumbers:[e-1,e]})})}}),mt(i.start),i.pips&&$(i.pips),i.tooltips&&I(),it("update",function(t,e,r,n,o){N.forEach(function(t){var e=d[t],n=at(P,t,0,!0,!0,!0),s=at(P,t,100,!0,!0,!0),a=o[t],l=i.ariaFormat.to(r[t]);n=E.fromStepping(n).toFixed(1),s=E.fromStepping(s).toFixed(1),a=E.fromStepping(a).toFixed(1),e.children[0].setAttribute("aria-valuemin",n),e.children[0].setAttribute("aria-valuemax",s),e.children[0].setAttribute("aria-valuenow",a),e.children[0].setAttribute("aria-valuetext",l)})}),v={destroy:function(){for(var t in i.cssClasses)i.cssClasses.hasOwnProperty(t)&&c(y,i.cssClasses[t]);for(;y.firstChild;)y.removeChild(y.firstChild);delete y.noUiSlider},steps:function(){return N.map(vt)},on:it,off:ot,get:gt,set:mt,setHandle:function(e,r,n,i){if(!((e=Number(e))>=0&&e<N.length))throw new Error("noUiSlider ("+t+"): invalid handle number, got: "+e);ft(e,ht(r,e),!0,!0,i),st("update",e),n&&st("set",e)},reset:function(t){mt(i.start,t)},__moveHandles:function(t,e,r){ut(t,e,P,r)},options:l,updateOptions:function(t,e){var r=gt(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(e){void 0!==t[e]&&(l[e]=t[e])});var o=X(l);n.forEach(function(e){void 0!==t[e]&&(i[e]=o[e])}),E=o.spectrum,i.margin=o.margin,i.limit=o.limit,i.padding=o.padding,i.pips?$(i.pips):W(),i.tooltips?I():q(),P=[],mt(t.start||r,e)},target:y,removePips:W,removeTooltips:q,getTooltips:function(){return g},getOrigins:function(){return d},pips:$}}return{__spectrum:x,version:t,cssClasses:w,create:function(e,r){if(!e||!e.nodeName)throw new Error("noUiSlider ("+t+"): create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider ("+t+"): Slider was already initialized.");var n=Y(e,X(r),r);return e.noUiSlider=n,n}}});

/****** musics.js 独自実装部 ******/
let now = new Date();
let LaunchDate = new Date( 2015, 12 - 1,1 ) // サービス開始年月日 2015-12-01 ( jsの月は0 - 11 なので -1 してる )
let JSONmsgObj = document.getElementById('json-message');

let VerArray = {
	"0001": {"VName":"1st style",     "VShortName":"1st" },
	"0002": {"VName":"substream",     "VShortName":"sub" },
	"0003": {"VName":"2nd style",     "VShortName":"2nd" },
	"0004": {"VName":"3rd style",     "VShortName":"3rd" , "CustomCSSClass":["series-CS"]},
	"0005": {"VName":"4th style",     "VShortName":"4th" , "CustomCSSClass":["series-CS"]},
	"0006": {"VName":"5th style",     "VShortName":"5th" , "CustomCSSClass":["series-CS"]},
	"0007": {"VName":"6th style",     "VShortName":"6th" , "CustomCSSClass":["series-CS"]},
	"0008": {"VName":"7th style",     "VShortName":"7th" , "CustomCSSClass":["series-CS"]},
	"0009": {"VName":"8th style",     "VShortName":"8th" , "CustomCSSClass":["series-CS"]},
	"0010": {"VName":"9th style",     "VShortName":"9th" , "CustomCSSClass":["series-CS"]},
	"0011": {"VName":"10th style",    "VShortName":"10th", "CustomCSSClass":["series-CS"]},
	"0012": {"VName":"IIDX RED",      "VShortName":"RED" , "CustomCSSClass":["series-CS"]},
	"0013": {"VName":"HAPPY SKY",     "VShortName":"HS"  , "CustomCSSClass":["series-CS"]},
	"0014": {"VName":"DistorteD",     "VShortName":"DD"  , "CustomCSSClass":["series-CS"]},
	"0015": {"VName":"GOLD",          "VShortName":"GLD" , "CustomCSSClass":["series-CS"]},
	"0016": {"VName":"DJ TROOPERS",   "VShortName":"DJT" , "CustomCSSClass":["series-CS"]},
	"0017": {"VName":"EMPRESS",       "VShortName":"EMP" , "CustomCSSClass":["series-CS"]},
	"0018": {"VName":"SIRIUS",        "VShortName":"SIR" },
	"0019": {"VName":"Resort Anthem", "VShortName":"RA"  },
	"0020": {"VName":"Lincle",        "VShortName":"Lin" },
	"0021": {"VName":"tricolo",       "VShortName":"tri" },
	"0022": {"VName":"SPADA",         "VShortName":"SPA" },
	"0023": {"VName":"PENDUAL",       "VShortName":"PEN" },
	"0024": {"VName":"copula",        "VShortName":"cop" },
	"0025": {"VName":"SINOBUZ",       "VShortName":"SIN" },
	"0026": {"VName":"CANNON BALLERS","VShortName":"CB"  },
	"0027": {"VName":"Rootage",       "VShortName":"Rt"  },
	"0028": {"VName":"HEROIC VERSE",  "VShortName":"HV"  },
	"0029": {"VName":"BISTROVER",     "VShortName":"BIS" },
	"0030": {"VName":"CastHour",      "VShortName":"CH"  },
	"0999": {"VName":"INFINITAS",     "VShortName":"INF" , "CustomCSSClass":["series-CS"]}
};

let packlist = {
	'0000001': {'type':'Standard',  'name':'楽曲パック vol.1',                            'inputName':'楽曲パックVol.1',  'shortName':'Pack1',   'inputid':'purchase-Pack0000001'},
	'0000002': {'type':'Standard',  'name':'楽曲パック vol.2',                            'inputName':'楽曲パックVol.2',  'shortName':'Pack2',   'inputid':'purchase-Pack0000002'},
	'0000003': {'type':'Standard',  'name':'楽曲パック vol.3',                            'inputName':'楽曲パックVol.3',  'shortName':'Pack3',   'inputid':'purchase-Pack0000003'},
	'0000004': {'type':'Standard',  'name':'楽曲パック vol.4',                            'inputName':'楽曲パックVol.4',  'shortName':'Pack4',   'inputid':'purchase-Pack0000004'},
	'0000005': {'type':'Standard',  'name':'楽曲パック vol.5',                            'inputName':'楽曲パックVol.5',  'shortName':'Pack5',   'inputid':'purchase-Pack0000005'},
	'0000006': {'type':'Standard',  'name':'楽曲パック vol.6',                            'inputName':'楽曲パックVol.6',  'shortName':'Pack6',   'inputid':'purchase-Pack0000006'},
	'0000007': {'type':'Standard',  'name':'楽曲パック vol.7',                            'inputName':'楽曲パックVol.7',  'shortName':'Pack7',   'inputid':'purchase-Pack0000007'},
	'0000008': {'type':'Standard',  'name':'楽曲パック vol.8',                            'inputName':'楽曲パックVol.8',  'shortName':'Pack8',   'inputid':'purchase-Pack0000008'},
	'0000009': {'type':'Standard',  'name':'楽曲パック vol.9',                            'inputName':'楽曲パックVol.9',  'shortName':'Pack9',   'inputid':'purchase-Pack0000009'},
	'0000010': {'type':'Standard',  'name':'楽曲パック vol.10',                           'inputName':'楽曲パックVol.10', 'shortName':'Pack10',  'inputid':'purchase-Pack0000010'},
	'0000011': {'type':'Standard',  'name':'楽曲パック vol.11',                           'inputName':'楽曲パックVol.11', 'shortName':'Pack11',  'inputid':'purchase-Pack0000011'},
	'0000012': {'type':'Standard',  'name':'楽曲パック vol.12',                           'inputName':'楽曲パックVol.12', 'shortName':'Pack12',  'inputid':'purchase-Pack0000012'},
	'0000013': {'type':'Standard',  'name':'楽曲パック vol.13',                           'inputName':'楽曲パックVol.13', 'shortName':'Pack13',  'inputid':'purchase-Pack0000013'},
	'0000014': {'type':'Standard',  'name':'楽曲パック vol.14',                           'inputName':'楽曲パックVol.14', 'shortName':'Pack14',  'inputid':'purchase-Pack0000014'},
	'0000015': {'type':'Standard',  'name':'楽曲パック vol.15',                           'inputName':'楽曲パックVol.15', 'shortName':'Pack15',  'inputid':'purchase-Pack0000015'},
	'0000016': {'type':'Standard',  'name':'楽曲パック vol.16',                           'inputName':'楽曲パックVol.16', 'shortName':'Pack16',  'inputid':'purchase-Pack0000016'},
	'0010001': {'type':'Startar',   'name':'スタートアップセレクション 楽曲パック vol.1', 'inputName':'SSパックVol.1',    'shortName':'PackSS1', 'inputid':'purchase-Pack0010001'},
	'0010002': {'type':'Startar',   'name':'スタートアップセレクション 楽曲パック vol.2', 'inputName':'SSパックVol.2',    'shortName':'PackSS2', 'inputid':'purchase-Pack0010002'},
	'0010003': {'type':'Startar',   'name':'スタートアップセレクション 楽曲パック vol.3', 'inputName':'SSパックVol.3',    'shortName':'PackSS3', 'inputid':'purchase-Pack0010003'},
	'0020001': {'type':'PopnMusic', 'name':'pop\'n music セレクション 楽曲パック vol.1',  'inputName':'PMパックVol.1',    'shortName':'PackPM1', 'inputid':'purchase-Pack0020001'},
	'0030001': {'type':'jubeat',    'name':'jubeat セレクション 楽曲パック vol.1',        'inputName':'juパックVol.1',    'shortName':'PackJU1', 'inputid':'purchase-Pack0030001'},
	'0040001': {'type':'BPL',       'name':'BPL セレクション 楽曲パック vol.1',           'inputName':'BPLパックVol.1',   'shortName':'PackBPL1','inputid':'purchase-Pack0040001'}
};

let BPMArray = [
		'-99','100-109','110-119','120-129','130-139','140-149','150-159','160-169','170-179','180-189',
	'190-199','200-209','210-219','220-',   'BPM_CHANGE'];

let NotesArray = [
		  '-99',  '100-199',  '200-299',  '300-399',  '400-499',  '500-599',  '600-699',  '700-799',  '800-899',  '900-999',
	'1000-1099','1100-1199','1200-1299','1300-1399','1400-1499','1500-1599','1600-1699','1700-1799','1800-1899','1900-1999',
	'2000-',    'NO'];

let Diff = [
	{'Name': 'Beginner',    'Short': 'B'},
	{'Name': 'Normal',      'Short': 'N'},
	{'Name': 'Hyper',       'Short': 'H'},
	{'Name': 'Another',     'Short': 'A'},
	{'Name': 'Leggendaria', 'Short': 'L'}
];

let ClearTypeArray = ['FC', 'EX-H', 'HARD', 'CLEAR', 'EASY', 'A-EASY', 'FAILED', 'NOPLAY'];
let ShortClearTypeArray = ['FC', 'EXH', 'HARD', 'CLR', 'EASY', 'A-E', 'FAIL', 'NO'];

let DJLevelArray = ['MAX','AAA','AA','A','B','C','D','E','F',''];
let DJLevelArray2 = ['MAX','MAX-','AAA','AAA-','AA','AA-','A','A-','B','B-','C','C-','D','D-','E','E-','F','F-',''];

let userJSON = {};

let PROJECT_ID = 'infinitas-musiclist';

// Array of API discovery doc URLs for APIs used by the quickstart
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
let SCOPES = 'https://www.googleapis.com/auth/drive';

/**
 * 数字を0埋めして文字列として返す
 *
 * @param {Number} num - 0埋めしたい数字
 * @param {Integer} length - 0埋めする桁数
 * @returns {String} - 0埋めした結果文字列
 */
function zeroPadding(num,length){ return String(num).length >= length ? String(num) : ('0'.repeat(length) + num).slice(-length); };

let dateFormat = {
	_fmt : {
		hh: (date) => ('0' + date.getHours()).slice(-2),
		h: (date) => date.getHours(),
		mm: (date) => ('0' + date.getMinutes()).slice(-2),
		m: (date) => date.getMinutes(),
		ss: (date) => ('0' + date.getSeconds()).slice(-2),
		dd: (date) => ('0' + date.getDate()).slice(-2),
		d: (date) => date.getDate(),
		s: (date) => date.getSeconds(),
		yyyy: (date) => date.getFullYear() + '',
		yy: (date) => (date.getYear() + '').slice(-2),
		t: (date) => date.getDate()<=3 ? ["st", "nd", "rd"][date.getDate()-1]: 'th',
		w: (date) => ["Sun", "$on", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()],
		MMMM: (date) => ["January", "February", "$arch", "April", "$ay", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()],
		MMM: (date) => ["Jan", "Feb", "$ar", "Apr", "$ay", "Jun", "Jly", "Aug", "Spt", "Oct", "Nov", "Dec"][date.getMonth()],
		MM: (date) => ('0' + (date.getMonth() + 1)).slice(-2),
		M: (date) => date.getMonth() + 1,
		$: (date) => 'M'
	},
	_priority : ["hh", "h", "mm", "m", "ss", "dd", "d", "s", "yyyy", "yy", "t", "w", "MMMM", "MMM", "MM", "M", "$"],
	format: function(date, format){return this._priority.reduce((res, fmt) => res.replace(fmt, this._fmt[fmt](date)), format)}
};

/**
 * 日付オブジェクトから年月日の文字列を返す
 *
 * @param {Date} InDate - 文字列化したいDate型
 * @returns {String} - Year,Month,Dayプロパティ(文字列)を持つオブジェクト
 */
function getDateStr(InDate = new Date()) {
	return {
		Year: InDate.getFullYear(),
		Month: InDate.getMonth() + 1,
		Day: InDate.getDate()
	};
};

/**
 * 参考 ： https://gist.github.com/kawanet/5553478
 * カタカナ・ひらがなを変換する関数
 *
 * @param {String} src - 変換したい文字列
 * @param {String} to  - どちらに変換するか ('HtoK' or 'KtoH')
 * @returns {String}   - 変換後の文字列
 */
function convKana(src, to = 'KtoH') {
	switch (to) {
		case 'HtoK': return src.replace(/[\u30a1-\u30f6]/g, (match) => String.fromCharCode(match.charCodeAt(0) - 0x60));
		case 'KtoH': return src.replace(/[\u3041-\u3096]/g, (match) => String.fromCharCode(match.charCodeAt(0) + 0x60));
		default: return src;
	};
};

/**
 *  参考 ： https://qiita.com/riversun/items/60307d58f9b2f461082a
 * targetオブジェクトにsourceオブジェクトの値をdeep mergeする
 * @param {*} target
 * @param {*} source
 * @param {*} opts
 * @returns
 */
function mergeDeeply(target, source, opts) {
    const isObject = obj => obj && typeof obj === 'object' && !Array.isArray(obj);
    const isConcatArray = opts && opts.concatArray;
    let result = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        for (const [sourceKey, sourceValue] of Object.entries(source)) {
            const targetValue = target[sourceKey];
            if (isConcatArray && Array.isArray(sourceValue) && Array.isArray(targetValue)) {
                result[sourceKey] = targetValue.concat(...sourceValue);
            }
            else if (isObject(sourceValue) && target.hasOwnProperty(sourceKey)) {
                result[sourceKey] = mergeDeeply(targetValue, sourceValue, opts);
            }
            else {
                Object.assign(result, {[sourceKey]: sourceValue});
            }
        }
    }
    return result;
};

/**
 * fade処理をするための自作関数たち
 */
let fade = {
	in: (objArr, ms = 1000) => {
		objArr.forEach((obj) => {
			obj.style.opacity = 0;
			obj.style.transition = "opacity " + ms + "ms";
			obj.classList.remove('hidden');
			setTimeout(function(){obj.style.opacity = 1;}, 50);
		});
	},
	out: (objArr, ms = 1000) => {
		objArr.forEach((obj) => {
			obj.style.opacity = 1;
			obj.style.transition = "opacity " + ms + "ms";
			setTimeout(function(){obj.style.opacity = 0;}, 1);
			setTimeout(function(){obj.classList.add('hidden');}, ms + 50);
		});
	},
	toggle: (objArr, ms = 1000) => {
		objArr.forEach((obj) => {
			obj.style.transition = "opacity " + ms + "ms";
			obj.classList.hasValue('hidden') ? obj.classList.remove('hidden') : '';
			setTimeout(function(){obj.style.opacity = 1 - obj.style.opacity;}, 1);
			obj.classList.hasValue('hidden') ? '' : setTimeout(function(){obj.classList.add('hidden');}, ms + 1);
		});
	}
};

/**
 * headerLine配列に追加
 * @param {*} prefix
 * @param {*} className
 * @param {*} label
 * @param {*} values
 * @param {*} isLabelWithVal
 */
function pushheaderLine(prefix, className, label, values, isLabelWithVal = true) {
	let retArr = [];
	for(let val of values){ retArr.push([prefix + val + '-header', className, label + (isLabelWithVal ? val : '')]);};
	return retArr;
};

/**
 * ローカルファイルの読込
 * @param {*} fileObj
 * @param {*} callback
 * @returns
 */
function readUserJSONfromLocalFile(fileObj, callback=initializeUserJSON){
	let r = new FileReader();

	r.onload = reader => {
		if (!checkUserJSON(reader.target.result)) { return false; };

		document.getElementById('localfilename').innerText = 'ファイル名：' + fileObj.name + ' 読込済';
		toastbox.FadeInandTimerFadeOut(fileObj.name + ' を読み込みました。');

		callback(reader.target.result);
	};

	try {
		r.readAsText(fileObj);
	} catch (e) {
		// エラー時はメッセージ表示
		JSONmsgObj.innerHTML = '<span class="warn">readUserJSONfromLocalFile / ' + e.lineNumber + ' / 指定したファイルが読み込めませんでした！</span>';
		return false;
	};
};

/**
 * ローカルストレージの読込
 *
 * @param {String} key - JSONをローカルストレージに保存した際のキー名
 * @param {callbackFunction} callback  - 処理後に実行する関数
 * @returns なし
**/
function readUserJSONfromLocalStorage(key=PROJECT_ID, callback=initializeUserJSON){
	let st = localStorage;

	try {
		let result = st.getItem(key);
		if ( !checkUserJSON(result) ) { return false; };

		Cookies.set('infinitas_LocalStorageEnable', 1, {path: '', expires: 180, sameSite: 'strict'});
		toastbox.FadeInandTimerFadeOut('ローカルストレージのデータを読み込みました。');
		callback(result);
	} catch (e) {
		// エラー時はメッセージ表示
		JSONmsgObj.innerHTML = '<span class="warn">' + e.lineNumber + ' / ローカルストレージが読み込めませんでした！</span>';
		return false;
	};
};

/**
 * ローカルストレージに保存
 *
 * @param {String} key - JSONをローカルストレージに保存する際のキー名
 * @param {callbackFunction} callback  - 処理後に実行する関数
 * @return なし
 *
**/
function outputUserJSONtoLocalStorage(key=PROJECT_ID, callback=toastbox.FadeInandTimerFadeOut){
	let st = localStorage;

	try {
		st.setItem(key,JSON.stringify(userJSON));
		callback('ローカルストレージに保存しました。<br />');
	} catch (e) {
		// エラー時はメッセージ表示
		JSONmsgObj.innerHTML = '<span class="warn">' + e.lineNumber+ ' / ローカルストレージに書き込めませんでした！</span>';
		return false;
	};
};

/**
 * ユーザデータJSONの読み込み
 *
 * @param {String} readType - 'new','localstorage','file','googleDrive','jsonarea' のうちいずれか
 * @param {jQueryObject} obj - JSONが記載されたinput[type=textarea]のjQueryObj
 * @return なし
 *
**/
function readUserJSON(readType='new') {
	if (readType == "new") {
		let jsonData = {};

		inData = {};
		let dummyNow = new Date();
		dummyNow.setHours(dummyNow.getHours() + 9);
		isoStr = dummyNow.toISOString().split('Z')[0] + '+09:00';

		jsonData.info = {
			"id": "NONAME",
			"created": isoStr,
			"updated": isoStr
		};
		jsonData.musics = {};
		jsonData.packs = {};

		initializeUserJSON(JSON.stringify(jsonData));
	} else {
		switch (readType) {
			case 'localstorage' : readUserJSONfromLocalStorage(); break;
			case 'file'         : readUserJSONfromLocalFile(document.getElementById('localfile').files[0]);    break;
//			case 'googleDrive'  : getGoogleDriveFile(jQuery('#gdid').val());  break;
		};
	};
};

let user = {
	JSON: {},

	new: () => {
		let dummyNow = new Date();
		dummyNow.setHours(dummyNow.getHours() + 9);
		isoStr = dummyNow.toISOString().split('Z')[0] + '+09:00';

		jsonData.info = { "id": "NONAME", "created": isoStr, "updated": isoStr };
		jsonData.musics = {};
		jsonData.packs = {};

		initializeUserJSON(JSON.stringify(jsonData));
	},
	/**
	 * ユーザデータJSONの読み込み
	 */
	read: {
		/**
		 * ローカルストレージの読込
		 *
		 * @param {String} key - JSONをローカルストレージに保存した際のキー名
		 * @param {callbackFunction} callback  - 処理後に実行する関数
		 * @returns なし
		**/
		localStorage: (key=PROJECT_ID, callback=initializeUserJSON) => {
			try {
				let result = localStorage.getItem(key);
				if ( !checkUserJSON(result) ) { return false; };

				toastbox.FadeInandTimerFadeOut('ローカルストレージのデータを読み込みました。');
				callback(result);
			} catch (e) {
				// エラー時はメッセージ表示
				JSONmsgObj.innerHTML = '<span class="warn">' + e.lineNumber + ' / ローカルストレージが読み込めませんでした！</span>';
				return false;
			};
		},
		/**
		 * ローカルファイルの読込
		 * @param {*} fileObj
		 * @param {*} callback
		 * @returns
		 */
		file: (fileObj, callback=initializeUserJSON) => {
			if (fileObj == null) { return false; };
			let r = new FileReader();

			r.onload = reader => {
				if (!checkUserJSON(reader.target.result)) { return false; };

				document.getElementById('localfilename').innerText = 'ファイル名：' + fileObj.name + ' 読込済';
				toastbox.FadeInandTimerFadeOut(fileObj.name + ' を読み込みました。');

				callback(reader.target.result);
			};

			try {
				r.readAsText(fileObj);
			} catch (e) {
				// エラー時はメッセージ表示
				JSONmsgObj.innerHTML = '<span class="warn">readUserJSONfromLocalFile / ' + e.lineNumber + ' / 指定したファイルが読み込めませんでした！</span>';
				return false;
			};
		}
	},
	/**
	 * ユーザデータJSONの確認
	 *
	 * @param {Object} jsonData - 読み込んだjsonData
	 * @return {boolean} result - チェック結果
	**/
	check: (jsonData) => {
		// parse確認
		parsedJSON = {};
		try {
			parsedJSON = JSON.parse(jsonData);
		} catch (e) {
			JSONmsgObj.innerHTML = '<span class="warn">' + e.lineNumber+ ' / JSON.parseが出来ませんでした！</span>';
			return false;
		}
	
		// userJSONの項目チェック
		if ( !("info" in parsedJSON) ) {         JSONmsgObj.innerHTML = '<span class="warn">JSON内に"info"が見つかりません！</span>';         return false; };
		if ( !("id" in parsedJSON.info) ) {      JSONmsgObj.innerHTML = '<span class="warn">JSON内に"info.id"が見つかりません！</span>';      return false; };
		if ( !("created" in parsedJSON.info) ) { JSONmsgObj.innerHTML = '<span class="warn">JSON内に"info.created"が見つかりません！</span>'; return false; };
		if ( !("updated" in parsedJSON.info) ) { JSONmsgObj.innerHTML = '<span class="warn">JSON内に"info.updated"が見つかりません！</span>'; return false; };
		if ( !("musics" in parsedJSON) ) {       JSONmsgObj.innerHTML = '<span class="warn">JSON内に"musics"が見つかりません！</span>';       return false; };
		if ( !("packs" in parsedJSON) ) {        JSONmsgObj.innerHTML = '<span class="warn">JSON内に"packs"が見つかりません！</span>';        return false; };
	
		return true;
	}
};

/**
 * ユーザデータJSONの確認
 *
 * @param {Object} jsonData - 読み込んだjsonData
 * @return {boolean} result - チェック結果
 *
**/
function checkUserJSON(jsonData) {
	// parse確認
	let parsedJSON = {};
	try {
		parsedJSON = JSON.parse(jsonData);
	} catch (e) {
		JSONmsgObj.innerHTML = '<span class="warn">' + e.lineNumber+ ' / JSON.parseが出来ませんでした！</span>';
		return false;
	}

	// userJSONの項目チェック
	if ( !("info" in parsedJSON) ) {         JSONmsgObj.innerHTML = '<span class="warn">JSON内に"info"が見つかりません！</span>';         return false; };
	if ( !("id" in parsedJSON.info) ) {      JSONmsgObj.innerHTML = '<span class="warn">JSON内に"info.id"が見つかりません！</span>';      return false; };
	if ( !("created" in parsedJSON.info) ) { JSONmsgObj.innerHTML = '<span class="warn">JSON内に"info.created"が見つかりません！</span>'; return false; };
	if ( !("updated" in parsedJSON.info) ) { JSONmsgObj.innerHTML = '<span class="warn">JSON内に"info.updated"が見つかりません！</span>'; return false; };
	if ( !("musics" in parsedJSON) ) {       JSONmsgObj.innerHTML = '<span class="warn">JSON内に"musics"が見つかりません！</span>';       return false; };
	if ( !("packs" in parsedJSON) ) {        JSONmsgObj.innerHTML = '<span class="warn">JSON内に"packs"が見つかりません！</span>';        return false; };

	return true;
};

/**
 *
 * @param {String} JSONString
 */
function initializeUserJSON(JSONString) {
	let jsonData = {};
	try {
		// とりあえず読み込み
		jsonData = JSON.parse(JSONString);
	} catch (e) {
		// エラー時はメッセージ表示
		JSONmsgObj.innerHTML = '<span class="warn">発生関数 : initializeUserJSON / ' + e.lineNumber+ ' / JSON.parseが失敗しました。</span>';
		return;
	};

	// info
	userJSON.info = { ...jsonData.info };

	// 楽曲情報
	userJSON.musics = {};
	for (item of musics.JSON) {
		if ( !(item.ID in jsonData.musics) ) { continue; };
		rM = jsonData.musics[item.ID];
		has =  { 'ID': true, 'Canplay': ('Canplay' in rM), 'EX': ('EXScores' in rM), 'MISS': ('MissCount' in rM), 'LAMP': ('ClearType' in rM) };

		let getVal = (iM, rM) => {
			let retVal = {};
			for (i of Diff) { if ((i.Name in iM) && !isNaN(rM[i.Name]) ) { retVal[i.Name] = rM[i.Name]; }; };
			return retVal;
		};
		let getClearType = (iM, rM) => {
			let retVal = {};
			for (i of Diff) { if ((i.Name in iM) && ClearTypeArray.includes(rM[i.Name]) ) { retVal[i.Name] = rM[i.Name]; }; };
			return retVal;
		};

		userJSON.musics[item.ID] = { 'title': ('title' in rM) ? rM.title : item.Title };
		uM = userJSON.musics[item.ID];
		if (has.EX) {
			uM.EXScores = {};
			if ('SP' in rM.EXScores) { uM.EXScores.SP = getVal( item.Scores.Single, rM.EXScores.SP ); };
			if ('DP' in rM.EXScores) { uM.EXScores.DP = getVal( item.Scores.Double, rM.EXScores.DP ); };
		};
		if (has.MISS) {
			uM.MissCount = {};
			if ('SP' in rM.MissCount) { uM.MissCount.SP = getVal( item.Scores.Single, rM.MissCount.SP ); };
			if ('DP' in rM.MissCount) { uM.MissCount.DP = getVal( item.Scores.Double, rM.MissCount.DP ); };
		};
		if (has.LAMP) {
			uM.ClearType = {};
			if ('SP' in rM.ClearType) { uM.ClearType.SP = getClearType( item.Scores.Single, rM.ClearType.SP ); };
			if ('DP' in rM.ClearType) { uM.ClearType.DP = getClearType( item.Scores.Double, rM.ClearType.DP ); };
		};
		if (has.Canplay) {
			uM.Canplay = {};
			for (i of Diff) { if ((i.Name in item.Scores.Single) || (i.Name in item.Scores.Double)) {uM.Canplay[i.Name] = Number(rM.Canplay[i.Name]); }; };
		};
	};

	// パック購入情報
	userJSON.packs = {};
	for (let pid in packlist) {
		hasID = (pid in jsonData.packs);
		hasPurchased = (hasID && ('purchased' in jsonData.packs[pid]));

		userJSON.packs[pid] = {
			'packname': (hasID && ('packname' in jsonData.packs[pid])) ? jsonData.packs[pid].packname : packlist[pid].name,
			'purchased': (hasID && ('purchased' in jsonData.packs[pid])) ? jsonData.packs[pid].purchased : '0'
		};
		document.getElementById(packlist[pid].inputid).checked = (userJSON.packs[pid].purchased === '1');
		togglePackButton(document.getElementById('purchase-Pack' + pid), true);
	};

	// 検索条件のお気に入り設定
	userJSON.searchOpts = ('searchOpts' in jsonData) ? JSON.parse(JSON.stringify(jsonData.searchOpts)) : {};
	if ('Default' in userJSON.searchOpts) { s.getSearchParamFromFavorite('Default'); };

	// 検索条件のお気に入りを一旦削除
	removeOpts = document.getElementById('searchFavorite').querySelectorAll('option:not(.new)');
	for (i = 0; i < removeOpts.length; i++) { removeOpts[i].remove(); };

	// 検索条件のお気に入りをドロップダウンメニューに追加
	for (let opt in userJSON.searchOpts) {
		child = document.createElement('option');
		child.textContent = opt;
		child.setAttribute('value', opt);
		document.getElementById('searchFavorite').appendChild(child);
	};

	// infoを表示
	document.getElementById('userJSON_djname').innerText = userJSON.info.id;
	document.getElementById('userJSON_created').innerText = userJSON.info.created;
	document.getElementById('userJSON_updated').innerText = userJSON.info.updated;

	// ダウンロードボタンを有効化
	dlBtn = document.getElementById('downloadButton');
	dlBtn.classList.remove('hidden');
//	document.getElementById('downloadButton').show('fast');
	blob = new Blob([JSON.stringify(userJSON, undefined, '\t')], {type: 'application\/json'});
	url = URL.createObjectURL(blob);

	dlBtn.setAttribute("href", url);
	dlBtn.setAttribute("download", "musiclist_userdata.json");

	// 検索条件：解禁状況を有効化
	document.getElementById('unlocked').removeAttribute('disabled');
};

function makeCustomUserJSONString() {

};

 /**
 * ヘッダー行の作成
 *
 * @param {{String,String,String}...} items - {id名, class名, 表示テキスト}の配列
 * @return なし
 *
**/
function makeHeaderLine(target, items) {
	for(let item of items){
		tmpTBODY = document.createElement("tbody");
		tmpTBODY.setAttribute('id', item[0]);
		tmpTBODY.classList.add('headertbody', 'hidden');
		tmpTBODY.innerHTML = '<tr class="headerline ' + item[1] + '"><th colspan="13"><div class="vername">' + item[2] +'</div></th></tr>';
		target.appendChild(tmpTBODY);
	};
};

/**
 * 検索条件のシリーズ項目の作成
 *
 * @param {String}  target  - 対象セレクトタグのid
 * @param {{String,String,Boolean,String,{String, ... }}, ... } items - {name属性, VNo, isChecked?, 表示テキスト, {追加クラス, …}}の配列
 * @return なし
 *
**/
function makeCheckbox(target,items) {
	let addHtml = '';
	for(let item of items){
		classStr = '' + item[0] + '-checkbox';
		if (Array.isArray(item[4])) {
			for(let val of item[4]){ classStr += ' ' + val; };
		};
		id =  item[0] + '-' + item[1];
		checked = item[2] ? ' checked' : '';
		addHtml +=
			'<div class="vname">' +
			'<input id="' + id + '" name="' + item[0] + '" type="checkbox" value="' + item[1] + '" class="' + classStr + '"' + checked + ' />' +
			'<label for="' + id +'">' + item[3] + '</label>' +
			'</div>';
	};
	document.getElementById(target).innerHTML = addHtml;
};

/**
 * 月選択用のセレクトボックス要素を作成
 *
 * @param {String}  target      - 対象セレクトタグのid
 *        {Date}    start       - 開始
 *        {Date}    end         - 終了
 *        {boolean} isFirst     - true = 月初, false = 月末 をvalueに設定
 *        {Array}   prependDate - 
 *        {Array}   appendDate  - 
 * @return なし
 *
**/
function makeSelectMonth(target,start,end,isFirst,prependDate = null, appendDate = null) {
	let tag = document.getElementById(target);
	let opts = {
		Str: '',
		addString: (optDate, optStr) => {
			t = getDateStr(optDate);
			opts.Str += '<option value="' + (t.Year + '-' + zeroPadding(t.Month,2) + '-' + zeroPadding(t.Day,2)) + '">' + optStr + '</option>';
		}
	};
	// 開始・終了日を取得 (isFirst=Trueの時、指定月の月初日を取得。falseの時、翌月の0日(=月末日)を取得。)
	let cDate = isFirst ? new Date(start.getFullYear(), start.getMonth(), 1) : new Date(start.getFullYear(), start.getMonth() + 1, 0);
	let endDate = isFirst ? new Date(end.getFullYear(), end.getMonth() + 1, 1) : new Date(end.getFullYear(), end.getMonth() + 2, 0);

	// 先頭の要素が日付型で引数に指定されていたら追加する
	if (toString.call(prependDate) == '[object Array]' && toString.call(prependDate[0]) == '[object Date]') { opts.addString(prependDate[0], prependDate[1]); };

	for ( ; endDate > cDate; cDate.setMonth(t.Month + (isFirst ? 0 : 1),(isFirst ? 1 : 0)) ) {
		opts.addString(cDate, cDate.getFullYear() + '/' + zeroPadding(cDate.getMonth() + 1,2));
	};

	// 末尾の要素が日付型で引数に指定されていたら追加する
	if (toString.call(appendDate) == '[object Array]' && toString.call(appendDate[0]) == '[object Date]') { opts.addString(appendDate[0], appendDate[1]); };

	tag.innerHTML = opts.Str;
};

/**
 * YYYY( or YYYYMM or YYYYMMDD)の配列を作成
 *
 * @param {Date}    start     - 開始年月
 *        {Date}    end       - 終了
 *        {boolean} withMonth - 月をつけるかどうか
 *        {boolean} withDay   - 日をつけるかどうか
 *
 * @return [String]           - YYYY or YYYYMM or YYYYTMMDD の配列
 *
**/
function makeMonthArray(start,end = new Date(),withMonth = false,withDay = false) {
	let returnArr = [];
	// 開始・終了日を取得
	let cDate = withDay ? new Date(start.getFullYear(), start.getMonth(), start.getDay()) : new Date(start.getFullYear(), start.getMonth(), 1);
	let endDate = withDay ? new Date(end.getFullYear(), end.getMonth(), start.getDay() + 1) : new Date(end.getFullYear(), end.getMonth() + 1, 1);
	do {
		t = getDateStr(cDate);
		returnArr.push('' + t.Year + (withMonth ? zeroPadding(t.Month,2) : '') + (withDay ? zeroPadding(t.Day,2) : ''))
		if (withDay) {cDate.setDate(t.Day + 1); }
		else if (withMonth) { cDate.setMonth(t.Month); }
		else { cDate.setFullYear(t.Year + 1); };
	} while( endDate >= cDate );
	return returnArr;
};

/**
 * 全選択・全解除のリンク切り替え
 * TODO: id指定してjQueryでどうにかしたほうが実装がすっきりしそう
 *
 * @param {String}  linkTarget   - 対象タグのid(jQueryのセレクタ)
 * @param {String}  checkTargets - 対象チェックボックスのclass(jQueryのセレクタ)
 * @return なし
 *
**/
function toggleSelectLink(linkTarget,checkTarget, linkText){
	let values = new Set();
	[ ...document.getElementsByClassName(checkTarget)].forEach((v) => { values.add( v.checked ) });

	onclickStr = '[ ...document.getElementsByClassName(\'' + checkTarget + '\')].forEach((v) => { v.checked = ' + (values.has(true) ? 'false' : 'true') + '; });' +
				 'toggleSelectLink(\'' + linkTarget + '\',\'' + checkTarget + '\', \'' + linkText + '\'); return false;';
	document.getElementById(linkTarget).innerHTML = '<a href="#" onclick="' + onclickStr + '">&nbsp;' + linkText + (values.has(true) ? '解除' : '選択') + '&nbsp;</a>';
};

/**
 * 譜面情報の検索条件を作成
 *
 * @param {String}  target  - 対象タグのid(jQueryのセレクタ)
 *        {{String,String}...} items - {name属性, VNo, isChecked?, 表示テキスト}の配列
 * @return なし
 *
**/
function makeScorefilter(target,items){
	let addHtml = '';
	let slider;
	for (let item of items) {
		let lv_min_label = '<span id="' + item[0] + '-levels-min" class="level_number"></span>';
		let lv_max_label = '<span id="' + item[0] + '-levels-max" class="level_number"></span>';
		let CN_input = '<input id="opt_' + item[0] + '_CN" name="opt_' + item[0] + '_CN" type="number" class="opt" value="0" /><label for="opt_' + item[0] + '_CN">CN : -</label>';
		let BSS_input = '<input id="opt_' + item[0] + '_BSS" name="opt_' + item[0] + '_BSS" type="number" class="opt" value="0" /><label for="opt_' + item[0] + '_BSS">BSS : -</label>';
		let HCN_input = '<input id="opt_' + item[0] + '_HCN" name="opt_' + item[0] + '_HCN" type="number" class="opt" value="0" /><label for="opt_' + item[0] + '_HCN">HCN : -</label>';
		let notes_min_input = '<input id="opt_' + item[0] + '_notes_min" name="opt_' + item[0] + '_notes_min" type="text" placeholder="0" class="input-60" />';
		let notes_max_input = '<input id="opt_' + item[0] + '_notes_max" name="opt_' + item[0] + '_notes_max" type="text" placeholder="99999" class="input-60" />';
		addHtml +=
			'<div class="inblock sliderbox">' +
			'<div class="fieldname">' + item[0] + '&nbsp;:&nbsp;' + lv_min_label + '～' + lv_max_label + '</div>' +
			'<div class="inblock slider_outer"><div id="' + item[0] + '-levels"></div></div>' +
			'</div>' +
			'<div class="inblock">' +
			'<div class="fieldname">特殊ノート</div>' +
			'<div class="vname score_opt">' + CN_input + '</div>' +
			'<div class="vname score_opt">' + BSS_input + '</div>' +
			'<div class="vname score_opt">' + HCN_input + '</div>' +
			'</div>' +
			'<div class="inblock">' +
			'<div class="fieldname">ノート数</div>' +
			'<div class="notes-menu">' + notes_min_input + '</div>' +
			'<div class="inblock pad-lr5">～</div>' +
			'<div class="notes-menu">' + notes_max_input + '</div>' +
			'</div>' +
			((item[0] === items.slice(-1)[0][0]) ? '' : '<hr class="clearfix" />');
	};
	document.getElementById(target).innerHTML = addHtml;

	for (item of items) {
		slider = document.getElementById(item[0] + '-levels');
		noUiSlider.create(slider, {
			range: {'min': item[1], 'max': item[2]},
			step: 1,
			start: [item[1],item[2]],
			connect: [false, true, false],
			tooltips: true,
			format: {
				to: function (value) { return parseInt(value); },
				from: function (value) { return parseInt(value); }
			}
		});

		let nodes = [document.getElementById(item[0] + '-levels-min'), document.getElementById(item[0] + '-levels-max')];
		slider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
			nodes[handle].innerText = values[handle] == 0 ? '無' : values[handle];
		});
	};
};

/**
 * 楽曲記録の検索条件を作成
 *
 * @param {String}  target  - 対象タグのid(jQueryのセレクタ)
 *        {{String,String}...} items - {name属性, VNo, isChecked?, 表示テキスト}の配列
 * @return なし
 *
**/
function makeRecordfilter(target,items){
	let addHtml = '';
	let slider;
	for (let item of items) {
		let djlv_min_label = '<span id="djlevel_' + item[0] + '_min" class="level_number"></span>';
		let djlv_max_label = '<span id="djlevel_' + item[0] + '_max" class="level_number"></span>';
		let exscore_min_input = '<input id="exscore_' + item[0] + '_min" name="exscore_' + item[0] + '_min" type="text" placeholder="0" class="input-60" />';
		let exscore_max_input = '<input id="exscore_' + item[0] + '_max" name="exscore_' + item[0] + '_max" type="text" placeholder="99999" class="input-60" />';
		let misscount_min_input = '<input id="misscount_' + item[0] + '_min" name="misscount_' + item[0] + '_min" type="text" placeholder="0" class="input-60" />';
		let misscount_max_input = '<input id="misscount_' + item[0] + '_max" name="misscount_' + item[0] + '_max" type="text" placeholder="99999" class="input-60" />';
		addHtml +=
			'<div class="inblock sliderbox">' +
			'<div class="fieldname">' + item[0] + '<br />' + djlv_min_label + '～' + djlv_max_label + '</div>' +
			'<div class="inblock slider_outer"><div id="djlevel_' + item[0] + '_levels"></div></div>' +
			'</div>' +
			'<div class="inblock">' +
			'<div class="fieldname">EXスコア</div>' +
			'<div class="notes-menu">' + exscore_min_input + '</div><div class="inblock pad-lr5">～</div><div class="notes-menu">' + exscore_max_input + '</div>' +
			'</div>' +
			'<div class="inblock">' +
			'<div class="fieldname">MISS COUNT</div>' +
			'<div class="notes-menu">' + misscount_min_input + '</div><div class="inblock pad-lr5">～</div><div class="notes-menu">' + misscount_max_input + '</div>' +
			'</div>' +
			'<div class="inblock">' +
			'<div class="fieldname">クリアランプ</div><div id="clearTypebox_' + item[0] + '" class="inblock"></div></div>' +
			((item[0] === items.slice(-1)[0][0]) ? '' : '<hr class="clearfix" />');
	};
	document.getElementById(target).innerHTML = addHtml;

	for (item of items) {
		slider = document.getElementById('djlevel_' + item[0] + '_levels');
		noUiSlider.create(slider, {
			range: {'min': item[1], 'max': item[2]},
			step: 1,
			start: [item[1],item[2]],
			connect: [false, true, false],
			tooltips: true,
			format: {
				to: function (value) { return parseInt(value); },
				from: function (value) { return parseInt(value); }
			}
		});

		let nodes = [document.getElementById('djlevel_' + item[0] + '_min'), document.getElementById('djlevel_' + item[0] + '_max')];
		slider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
			score = this.target.id.split('_')[1];
			txt = unencoded[handle] == 0 ? '無' : DJLevelArray2[(DJLevelArray2.length - 1 - Math.ceil(unencoded[handle]))];
			nodes[handle].innerText = unencoded[handle] == 0 ? '無' : txt;
			jQuery('.noUi-handle[data-handle=' + handle + '] .noUi-tooltip').text(txt);
		});

		// 検索条件のクリアランプ項目作成
		let clearTypeButtonList = [];
		for (let i of ClearTypeArray) { clearTypeButtonList.push( ['clearType_' + item[0], i, true, i, ['clearTypeButton']] ); };
		makeCheckbox('clearTypebox_' + item[0],clearTypeButtonList);
	};
};

function makeSelectTag(name, prefix, suffix, list, value) {
	if (name == '' || prefix == '' || suffix == '' || !Array.isArray(list) || value == '') {return '';};

	let optStr = '';
	for (let item of list) { optStr += '<option value="' + item + '" class="' + item + '"' + (item == value ? ' selected' : '') + '>' + item + '</option>'; };
	let fullName = prefix + '_' + name + '_' + suffix;
	return '<select id="' + fullName + '" name="' + fullName + '">' + optStr + '</select>';
};

function toggleScoreOptButton(obj, noToggle = false) {
	let objid = obj.getAttribute('id');
	let optText = ["–", "有", "無"];

	if (!noToggle) { obj.value = optText.length - 1 <= Number(obj.value) ? 0 : Number(obj.value) + 1; };
	obj.value == 0 ? obj.classList.remove("checked") : obj.classList.add("checked");
	[ ...document.getElementsByTagName('label')].find((i) => i.htmlFor === objid).innerText = objid.replace(/^opt_.*_/g, "") + " : " + optText[obj.value];
};

function toggleBPMOptButton(obj, noToggle = false) {
	let objid = obj.getAttribute('id');
	let optText = ["–", "有", "無"];

	if (!noToggle) { obj.value = optText.length - 1 <= Number(obj.value) ? 0 : Number(obj.value) + 1; };
	obj.value == 0 ? obj.classList.remove("checked") : obj.classList.add("checked");
	[ ...document.getElementsByTagName('label')].find((i) => i.htmlFor === objid).innerText = '可変 : ' + optText[obj.value];
};

/**
 * パック情報ボタントグル
 */
function togglePackButton(obj, noToggle = false) {
	let objid = obj.getAttribute('id');

	[ ...document.getElementsByTagName('label')].find((i) => i.htmlFor === objid).innerText = packlist[objid.replace("purchase-Pack","")].shortName + ( obj.checked ? '購入済' : '未購入' );
	if (noToggle) { return true; };

	update.start(objid.replace("purchase-Pack","pack_"),obj.checked);
	let objIdNumber = Number( objid.replace("purchase-Pack","") );
	let replacedObjId = "Pack" + objIdNumber;
	if (      objIdNumber >= 10000 && objIdNumber < 20000 ) { replacedObjId = "PackSS" + (objIdNumber - 10000); }
	else if ( objIdNumber >= 20000 && objIdNumber < 30000 ) { replacedObjId = "PackPM" + (objIdNumber - 20000); }
	else if ( objIdNumber >= 30000 && objIdNumber < 40000 ) { replacedObjId = "PackJU" + (objIdNumber - 30000); }
	else if ( objIdNumber >= 40000 && objIdNumber < 50000 ) { replacedObjId = "PackBPL" + (objIdNumber - 40000); };

	jQuery.each(musics.JSON,function (ind,val) {
		if ('Type' in val.Release && val.Release.Type == replacedObjId ) {
			update.start(val.ID + '_b',obj.checked);
			update.start(val.ID + '_n',obj.checked);
			update.start(val.ID + '_h',obj.checked);
			update.start(val.ID + '_a',obj.checked);
			update.start(val.ID + '_l',obj.checked);
		};
	});
};

/**
 * 入力された楽曲BPMから対応するBPMArrayの値を返す
 *
 * @param {Integer}  inputBPM  - 楽曲BPM
 * @return {String} - 対応するBPMArrayの値
 *
**/
function getBPMValue(inputBPM) {
	if ( isNaN(inputBPM) ) { return BPMArray[BPMArray.length - 1]; };
	for (let val of BPMArray) {
		let tmp = val.split('-');
		tmp[0] = (tmp[0] != '' && isFinite(tmp[0])) ? Number(tmp[0]) : 0;
		tmp[1] = (tmp[1] != '' && isFinite(tmp[1])) ? Number(tmp[1]) : 9999;

		if (tmp[0] <= Number(inputBPM) && Number(inputBPM) <= tmp[1]) { return val; };
	};
	return BPMArray[BPMArray.length - 1];
};

/**
 * 入力された譜面ノート数から対応するNotesArrayの値を返す
 *
 * @param {Integer}  inputNotes  - 譜面ノート数
 * @return {String} - 対応するNotesArrayの値
 *
**/
function getNotesValue(inputNotes) {
	if ( isNaN(inputNotes) ) { return NotesArray[NotesArray.length - 1]; };
	for (let val of NotesArray) {
		let tmp = val.split('-');
		tmp[0] = (tmp[0] != '' && isFinite(tmp[0])) ? Number(tmp[0]) : 0;
		tmp[1] = (tmp[1] != '' && isFinite(tmp[1])) ? Number(tmp[1]) : 9999;

		if (tmp[0] <= Number(inputNotes) && Number(inputNotes) <= tmp[1]) { return val; };
	};
	return NotesArray[NotesArray.length - 1];
};

/**
 *
 * @param {Integer} maxScore - 楽曲の理論値
 * @param {Integer} EXScore - EXScore
 * @param {Integer} showType - 表示タイプ
 * @returns {String} - 加工済みDJLevel文字列
 */
function getDJLevel(maxScore = 0, EXScore = 0, showType = 0) {
 	if (isNaN(maxScore) || isNaN(EXScore) || maxScore == 0 || EXScore == 0 || maxScore < EXScore ) { return ''; };

 	let borderFloat = [ maxScore, maxScore / 9 * 8, maxScore / 9 * 7, maxScore / 9 * 6, maxScore / 9 * 5, maxScore / 9 * 4, maxScore / 9 * 3, maxScore / 9 * 2, 0 ];

 	for ( let i = 0; i < 9; i++ ) {
 		if (EXScore >= Math.ceil(borderFloat[i])) {
 			if (i == 0) { return DJLevelArray[i]; };
 			minusNum = Math.ceil(borderFloat[(i - 1)]) - EXScore;
 			plusNum = EXScore - Math.ceil(borderFloat[i]);
			switch (showType) {
				case 0: return DJLevelArray[i]; break;
				case 1: return (minusNum < plusNum) ? DJLevelArray[(i - 1)] + '-' + minusNum : DJLevelArray[i] + '+' + plusNum; break;
				case 2: return DJLevelArray[i] + '+' + plusNum; break;
				case 3: return DJLevelArray[(i - 1)] + '-' + minusNum; break;
				case 4: return DJLevelArray[i] + ' ' + Math.floor(EXScore / maxScore * 100) + '%'; break;
				default: return ''; break;
			};
 		};
 	};

 	return '';
};

/**
 * 楽曲追加フォーム用
 */
let newMusic = {
	/**
	 * 新曲追加フォームからJSON文字列を作成
	 */
	makeJSON: function () {
		let self = this;
		let JSONData = {
			"ID": "0xx00yy",
			"Genre": document.getElementById('new_genre').value,
			"Title": document.getElementById('new_title').value,
			"Artist": document.getElementById('new_artist').value,
			"Comment": document.getElementById('new_comment').value,
			"Release": {
				"Date": document.getElementById('new_releasedate').value,
				"Type": document.getElementById('new_releasetype').value
			},
			"Scores": {
				"Single": {},
				"Double": {}
			}
		};

		Diff.forEach(v => {
			t = document.getElementById('new_SP' + v.Short + '_Lv'); if (t !== null && t.value >= 1) { JSONData.Scores.Single[v.Name] = self.getScoreData('SP' + v.Short); };
			t = document.getElementById('new_DP' + v.Short + '_Lv'); if (t !== null && t.value >= 1) { JSONData.Scores.Double[v.Name] = self.getScoreData('DP' + v.Short); };
		});

		if (document.getElementById('new_bitdate').value != '') { JSONData.Release.BitDate = document.getElementById('new_bitdate').value; };

		document.getElementById('new_json').value = JSON.stringify(JSONData) + ',';
	},

	/**
	 * 選択した譜面の情報をオブジェクトで返す
	 *
	 * @param {*} score - 譜面(3文字) 'SPB','SPN','SPH','SPA','SPL','DPN','DPH','DPA','DPL'
	 * @return {Object} - 譜面情報オブジェクト
	 */
	getScoreData: function (score) {
		let self = this;
		let output = {};

		output.Level = document.getElementById('new_' +  score + '_Lv').value;
		output.Notes = document.getElementById('new_' +  score + '_notes').value;
		if (Number(document.getElementById('new_' +  score + '_notesCN').value) > 0) { output.NotesCN = Number(document.getElementById('new_' +  score + '_notesCN').value); };
		if (Number(document.getElementById('new_' +  score + '_notesBSS').value) > 0) { output.NotesBSS = Number(document.getElementById('new_' +  score + '_notesBSS').value); };

		if (document.getElementById('new_' +  score + '_BPM').value != '') {
			let tmpBPM = document.getElementById('new_' +  score + '_BPM').value.split('-');
			if (tmpBPM.length > 1) {
				output.MinBPM = tmpBPM[0];
				output.MaxBPM = tmpBPM[1];
			} else {
				output.BPM = tmpBPM[0];
			};
		};
		if (document.getElementById('new_' +  score + '_CN').checked  ) { output.CN   = '1'; };
		if (document.getElementById('new_' +  score + '_BSS').checked ) { output.BSS  = '1'; };
		if (document.getElementById('new_' +  score + '_HCN').checked ) { output.HCN  = '1'; };
		if (document.getElementById('new_' +  score + '_HBSS').checked) { output.HBSS = '1'; };

		return output;
	}
};

/**
 * トーストボックス表示用オブジェクト
 */
let toastbox = {
	target: document.getElementById('toastbox'),
	defaultTimer: 5000, // ポップアップ時間(ミリ秒)
	timerID: null,

	setObject: (selector='toastbox') => {
		toastbox.target = document.getElementById(selector);
	},
	message: (msg='') =>  {
		if (toastbox.target === null) { toastbox.setObject(); };

		if (toastbox.target.classList.contains('hidden')) {
			toastbox.fadeIn(msg);
		} else {
			toastbox.target.innerHTML = msg;
		};
	},
	fadeIn: (msg='', ms=1000) => {
		if (toastbox.target === null) { toastbox.setObject(); };

		if (msg != '') { toastbox.target.innerHTML = msg; };
		fade.in([toastbox.target], ms);
	},
	fadeOut: (ms=1000) => {
		if (toastbox.target === null) { toastbox.setObject(); };

		fade.out([toastbox.target], ms);
		toastbox.target.innerHTML = '';
	},
	timerFadeIn: (msg='', timer=toastbox.defaultTimer, ms=1000) => toastbox.timerID = setTimeout(() => {fade.in([toastbox.target],ms); toastbox.target.innerHTML = msg;}, timer),
	timerFadeOut: (timer=toastbox.defaultTimer, ms=1000) => toastbox.timerID = setTimeout(() => {fade.out([toastbox.target], ms);}, timer),
	FadeInandTimerFadeOut: (msg='', timer=toastbox.defaultTimer, ms=1000) => {
		if (toastbox.target === null) { toastbox.setObject(); };

		toastbox.fadeIn(msg, ms);
		toastbox.timerFadeOut(timer, ms);
	},
	timerCancel: () => {
		if(typeof toastbox.timerID == "number") {
			clearTimeout(toastbox.timerID);
			delete toastbox.timerID;
		};
	}
};

 /**
 * 解禁情報更新用タイマー
 *
 * @param なし
 * @return なし
 *
**/
let update = {
	timeoutID: null,
	updateArray: [],

	execUpdate: () => {
		delete update.timeoutID;
		for (item of update.updateArray) {
			let tmp = { 'Val': item.mid_diff.split('_'), side: '', dif: '', dVal: '', updateType: ''};

			if (tmp.Val[0] == 'pack') {
				if (!(tmp.Val[1] in userJSON.packs)) { userJSON.packs[tmp.Val[1]] = {'packname': packlist[tmp.Val[1]].name, 'purchased': '0'}};
				userJSON.packs[tmp.Val[1]].purchased = item.isAdd ? '1' : '0';
			} else if (tmp.Val[0] == 'exs') {
				if ( isNaN(item.isAdd) ) { continue; };
				tmp.updateType = 'EXScores';
				tmp.dVal = 0;
			} else if (tmp.Val[0] == 'mc') {
				if ( isNaN(item.isAdd) ) { continue; };
				tmp.updateType = 'MissCount';
				tmp.dVal = 0;
			} else if (tmp.Val[0] == 'ct') {
				tmp.updateType = 'ClearType';
				tmp.dVal = ClearTypeArray[ClearTypeArray.length - 1];
			} else {
				switch (tmp.Val[1]) {
					case '0':
					case '1':
					case '2':
					case '3':
					case '4':
						tmp.val[1] = Diff[tmp.Val[1]].Name;
						break;
					case 'b': tmp.Val[1] = Diff[0].Name; break;
					case 'n': tmp.Val[1] = Diff[1].Name; break;
					case 'h': tmp.Val[1] = Diff[2].Name; break;
					case 'a': tmp.Val[1] = Diff[3].Name; break;
					case 'l': tmp.Val[1] = Diff[4].Name; break;
				};

				if (!(tmp.Val[0] in userJSON.musics)) { userJSON.musics[tmp.Val[0]] = {}; };
				if (!('Canplay' in userJSON.musics[tmp.Val[0]]) ) { userJSON.musics[tmp.Val[0]].Canplay = {} };
				userJSON.musics[tmp.Val[0]].Canplay[tmp.Val[1]] = item.isAdd ? '1' : '0';
			};

			if ( ['spb','spn','sph','spa','spl','dpb','dpn','dph','dpa','dpl'].indexOf(tmp.Val[2]) != -1 ) {
				side = tmp.Val[2].substr(0,2).toUpperCase();
				dif = Diff.filter(v => v.Name.slice(0,1) === tmp.Val[2].substr(2,1).toUpperCase())[0].Name;
				if (!(tmp.Val[1] in userJSON.musics)) { userJSON.musics[tmp.Val[1]] = {}; };
				if (!(tmp.updateType in userJSON.musics[tmp.Val[1]])) { userJSON.musics[tmp.Val[1]][tmp.updateType] = {}; };
				if (!(side in userJSON.musics[tmp.Val[1]][tmp.updateType])) { userJSON.musics[tmp.Val[1]][tmp.updateType][side] = {}; };

				userJSON.musics[tmp.Val[1]][tmp.updateType][side][dif] = item.isAdd;
			};
		};

		// 更新日時を更新
		let dummyNow = new Date();
		dummyNow.setHours(dummyNow.getHours() + 9);
		userJSON.info.updated = dummyNow.toISOString().split('Z')[0] + '+09:00';
		document.getElementById('userJSON_updated').innerText = userJSON.info.updated;

		// 完了処理
		toastbox.FadeInandTimerFadeOut(update.updateArray.length + '件の楽曲解禁状況を更新しました。');
		update.updateArray = [];

		let blob = new Blob([JSON.stringify(userJSON, undefined, '\t')], {type: 'application\/json'});
		url = URL.createObjectURL(blob);

		document.getElementById('downloadButton').setAttribute("href", url);
		document.getElementById('downloadButton').setAttribute("download", "musiclist_userdata.json");

		if (Cookies.get('infinitas_LocalStorageEnable') == 1) {
			outputUserJSONtoLocalStorage();
/*		}else if (jQuery('#gdid').val() != '') {
			updateFileContent(jQuery('#gdid').val(), blob, function(response) {
				toastbox.FadeInandTimerFadeOut('楽曲解禁状況をgoogleDriveに保存しました。');
			}); */
		};
	},
	cancel: function() {
		if(typeof update.timeoutID == "number") {
			clearTimeout(update.timeoutID);
			delete update.timeoutID;
		};
	},
	start: function(val, isAdd) {
		update.cancel();

		let index = update.updateArray.findIndex((v) => v.mid_diff === val);
		if (index >= 0) { update.updateArray.splice(index ,1 ); };
		update.updateArray.push({"mid_diff":val, "isAdd":isAdd});
		update.timeoutID = window.setTimeout(function() {update.execUpdate();}, 5000);
		toastbox.fadeIn(update.updateArray.length + '件の楽曲解禁状況の更新中…');
	}
};

/**
 * 楽曲JSONファイル取得
 */
let musics = {
	JSON: {},
	infoJSON: {},

	filter: function(items) {
		toastbox.fadeIn('<span>検索中…</span>', 100);
		s.getSearchParam();
		let now = dateFormat.format(new Date(), 'yyyy-MM-dd');
		let returnJSON = [];

		items.forEach( (item,i) => {
			// シリーズ情報でフィルタ
			if ( s.params.series.indexOf(parseFloat(item.VNo)) == -1 ) { return false; };

			// 譜面情報でフィルタ
			for( j = 0; j < Diff.length; j++ ) {
				if ( !( s.checkScore( item.Scores.Single[Diff[j].Name], "SP" + Diff[j].Short ) ) ) { return false; };
				if ( !( s.checkScore( item.Scores.Double[Diff[j].Name], "DP" + Diff[j].Short ) ) ) { return false; };
			};
	
			// BPMでフィルタ
			if ( s.params.BPM.min !== 0 || s.params.BPM.max !== 9999 || s.params.BPM.changing !== 0) {
				if (!isNaN(item.BPM)) {
					if ( s.params.BPM.changing === 1 || s.params.BPM.min > Number(item.BPM) || Number(item.BPM) > s.params.BPM.max ) { return false; };
				} else {
					if ( s.params.BPM.changing === 2 ) { return false; };
				};
			};

			// 配信条件でフィルタ
			if ( s.params.release.type.indexOf(item.Release.Type) == -1 ) { return false; };

			// 配信開始月でフィルタ
			smin = new Date(s.params.release.min).getTime();
			smax = new Date(s.params.release.max).getTime();
			if ( smin !== new Date('2000-01-01').getTime() && smin && smax && item.Release.Date != '') {
				itemDate = new Date(item.Release.Date).getTime();
				if ( (!item.Release.Date) || ( smin > itemDate ) || ( itemDate > smax ) ) { return false; };
			};

			// BIT配信開始月でフィルタ
			smin = new Date(s.params.bitDate.min).getTime();
			smax = new Date(s.params.bitDate.max).getTime();
			if ( smin !== new Date('2000-01-01').getTime() && smin && smax && item.Release.BitDate != '') {
				itemDate = new Date(item.Release.BitDate).getTime();
				if ( (!item.Release.BitDate) || ( smin > itemDate ) || ( itemDate > smax ) ) { return false; };
			};

			// 入手可否でフィルタ
			if ( s.params.available !== 'ALL' ) {
				if ( ['Default', 'DJP', 'Pack'].indexOf( item.Release.Type.replace(/[A-Z]{0,2}?[0-9]+/g,'') ) != -1 ||
					 ( item.Release.Type === 'Monthly' && item.Release.Date.slice(0,7) === now.slice(0,7) && item.Release.Date <= now ) || // 今月の特典曲
					 ( item.Release.BitDate && item.Release.BitDate <= now ) ) { // BIT解禁日が検索日以前
					if ( s.params.available === 'no' ) { return false; };
				} else {
					if ( s.params.available === 'yes' ) { return false; };
				};
			};

			// 解禁状況でフィルタ
			if ( s.params.unlocked !== 'ALL' ) {
				function check_canplay(canplayValue,scores,checktype) {
					let values = new Set();
					for(let key of Object.keys(canplayValue)){ if ((key in scores.Single) || (key in scores.Double)) { values.add(canplayValue[key]); } };

					switch(checktype) {
						case 'yes':          return (!values.has(0) && values.has(1)); break;
						case 'partiallyyes': return values.has(1);                     break;
						case 'partially':    return (values.has(0) && values.has(1));  break;
						case 'partiallyno':  return values.has(0);                     break;
						case 'no':           return (values.has(0) && !values.has(1)); break;
						default:             return true;                              break;
					};
				};

				if ( item.Release.Type === 'Default' ||
					 (item.Release.Type === 'Monthly' && item.Release.Date.slice(0,7) === now.slice(0,7)) && item.Release.Date <= now ) {
					if ( ['partially', 'partiallyno', 'no'].indexOf( s.params.unlocked ) != -1 ) { return false; };
				} else {
					let canplay = {'Beginner':0,'Normal':0,'Hyper':0,'Another':0,'Leggendaria':0};
					if (item.ID in userJSON.musics && 'Canplay' in userJSON.musics[item.ID]) {
						for (let key of Object.keys(canplay)) {
							if ((key in item.Scores.Single) || (key in item.Scores.Double)) {
								canplay[key] = (userJSON.musics[item.ID].Canplay[key]) ? (userJSON.musics[item.ID].Canplay[key] == 1 ? 1 : 0) : 0;
							};
						};
					};
					if (item.ID in userJSON.musics && 'Canplay' in userJSON.musics[item.ID]) { canplay = userJSON.musics[item.ID].Canplay; };
					if (!check_canplay(canplay, item.Scores, s.params.unlocked)) { return false; };
				};
			};

			// 曲名でフィルタ
			if (s.params.title && item.Title.indexOf(s.params.title) == -1) { return false; };

			// ジャンル名でフィルタ
			if (s.params.genre && item.Genre.indexOf(s.params.genre) == -1) { return false; };

			// アーティスト名でフィルタ
			if (s.params.artist && item.Artist.indexOf(s.params.artist) == -1) { return false; };

			// DJLevel・EXScore・MissCountでフィルタ
			if ('musics' in userJSON) {
				let uM = item.ID in userJSON.musics ? userJSON.musics[item.ID] : {};
				let uEX = { 'SP': 'EXScores'  in uM && 'SP' in uM.EXScores  ? uM.EXScores.SP  : {}, 'DP': 'EXScores'  in uM && 'DP' in uM.EXScores  ? uM.EXScores.DP  : {} };
				let uMC = { 'SP': 'MissCount' in uM && 'SP' in uM.MissCount ? uM.MissCount.SP : {}, 'DP': 'MissCount' in uM && 'DP' in uM.MissCount ? uM.MissCount.DP : {} };
				let uCT = { 'SP': 'ClearType' in uM && 'SP' in uM.ClearType ? uM.ClearType.SP : {}, 'DP': 'ClearType' in uM && 'DP' in uM.ClearType ? uM.ClearType.DP : {} };
				let getVal = (Arr, iN, uS) => Arr.length - 1 - Arr.findIndex((i) => i == getDJLevel(iN*2,uS,1).replace(/[+0-9]/g, ''));
				let chkScoreRecord = (dif, type, i, uEX, uMC, uCT) => {
					if ( !(dif in i) ) { return true; };
					if ( dif in uEX ) { // EXScore記録有
						val = getVal(DJLevelArray2, i[dif].Notes, uEX[dif]);
						if ( val < s.params.djlevel[type].min || s.params.djlevel[type].max < val ) { return false; }; // DJLevel
						if ( uEX[dif] < s.params.exscore[type].min || s.params.exscore[type].max < uEX[dif] ) { return false; }; // EXScore
					} else { // EXScore記録無 && 譜面有
						if ( s.params.djlevel[type].min != 0 ) { return false; }; // DJLevel
						if ( s.params.exscore[type].min != -1 && s.params.exscore[type].max != 99999 ) { return false; }; // EXScore
					};
					if ( dif in uMC ) { // MissCount記録有
						if ( uMC[dif] < s.params.misscount[type].min && s.params.misscount[type].max < uMC[dif] ) { return false; }; // MissCount
					} else { // MissCount記録無 && 譜面有
						if ( s.params.misscount[type].min != -1 && s.params.misscount[type].max != 99999 ) { return false; }; // MissCount
					};
					if ( dif in uCT ) { // ClearType記録有
						if ( -1 == s.params.cleartype[type].indexOf(uCT[dif]) ) { return false; }; // ClearType
					} else { // ClearType記録無 && 譜面有
						if ( -1 == s.params.cleartype[type].indexOf(ClearTypeArray[ClearTypeArray.length - 1]) ) { return false; }; // ClearType
					};
					return true;
				};

				for(j = 0; j < Diff.length; j++) {
					if (!( chkScoreRecord(Diff[j].Name, 'SP' + Diff[j].Short, item.Scores.Single, uEX.SP, uMC.SP, uCT.SP) ) ) { return false; };
					if (!( chkScoreRecord(Diff[j].Name, 'DP' + Diff[j].Short, item.Scores.Double, uEX.DP, uMC.DP, uCT.DP) ) ) { return false; };
				};
			};

			returnJSON.push(item);
		});

		return returnJSON;
	},

	sort: function(items) {
		toastbox.message('<span>ソート中…</span>');
		let searchsort = [ {'key': document.getElementById('search-sort1').value, 'order': document.getElementById('search-sort-order1').value},
						   {'key': document.getElementById('search-sort2').value, 'order': document.getElementById('search-sort-order2').value},
						   {'key': document.getElementById('search-sort3').value, 'order': document.getElementById('search-sort-order3').value} ];

		items.sort(function(a,b) {
			// レベル情報取得
			let noDate = '9999-99-99';
			let diff = {
				str:  (a,b,o) => a != b ? (o == 'UP' ? ( a > b ? 1 : -1 ) : ( b > a ? 1 : -1 )) : 0,
				num:  (a,b,o) => a != b ? (o == 'UP' ? ( a -b ) : ( b - a )) : 0,
				date: (a,b,o) => a != b ? (o == 'UP' ? ( a > b ? 1 : -1 ) : ( b > a ? 1 : -1 )) : 0
			};
			let retVal = 0;

			for(let item of searchsort){
				switch(item.key) {
					case 'TITLE':    retVal = diff.str(convKana(a.Title.toLowerCase(), 'KtoH'),  convKana(b.Title.toLowerCase(), 'KtoH'),item.order);   break;
					case 'ARTIST':   retVal = diff.str(convKana(a.Artist.toLowerCase(), 'KtoH'), convKana(b.Artist.toLowerCase(), 'KtoH'),item.order);  break;
					case 'GENRE':    retVal = diff.str(convKana(a.Genre.toLowerCase(), 'KtoH'),  convKana(b.Genre.toLowerCase(), 'KtoH'),item.order);   break;
					case 'BPM':      retVal = diff.num(Number(a.BPM) || 999, Number(b.BPM) || 999, item.order); break;
					case 'RELEASE':  retVal = diff.date(a.Release?.Date || noDate, b.Release?.Date || noDate,item.order); break;
					case 'BITDATE':  retVal = diff.date(a.Release?.BitDate || noDate, b.Release?.BitDate || noDate,item.order); break;
					case 'VERSION':  retVal = diff.num(Number(a.VNo) || 999, Number(b.VNo) || 999, item.order); break;
					case 'SPNLV':    retVal = diff.num(Number(a.Scores?.Single?.Normal?.Level)   || 0, Number(b.Scores?.Single?.Normal?.Level)  || 0, item.order); break;
					case 'SPHLV':    retVal = diff.num(Number(a.Scores?.Single?.Hyper?.Level)    || 0, Number(b.Scores?.Single?.Hyper?.Level)   || 0, item.order); break;
					case 'SPALV':    retVal = diff.num(Number(a.Scores?.Single?.Another?.Level)  || 0, Number(b.Scores?.Single?.Another?.Level) || 0, item.order); break;
					case 'DPNLV':    retVal = diff.num(Number(a.Scores?.Double?.Normal?.Level)   || 0, Number(b.Scores?.Double?.Normal?.Level)  || 0, item.order); break;
					case 'DPHLV':    retVal = diff.num(Number(a.Scores?.Double?.Hyper?.Level)    || 0, Number(b.Scores?.Double?.Hyper?.Level)   || 0, item.order); break;
					case 'DPALV':    retVal = diff.num(Number(a.Scores?.Double?.Another?.Level)  || 0, Number(b.Scores?.Double?.Another?.Level) || 0, item.order); break;
					case 'SPNNOTES': retVal = diff.num(Number(a.Scores?.Single?.Normal?.Notes)   || 0, Number(b.Scores?.Single?.Normal?.Notes)  || 0, item.order); break;
					case 'SPHNOTES': retVal = diff.num(Number(a.Scores?.Single?.Hyper?.Notes)    || 0, Number(b.Scores?.Single?.Hyper?.Notes)   || 0, item.order); break;
					case 'SPANOTES': retVal = diff.num(Number(a.Scores?.Single?.Another?.Notes)  || 0, Number(b.Scores?.Single?.Another?.Notes) || 0, item.order); break;
					case 'DPNNOTES': retVal = diff.num(Number(a.Scores?.Double?.Normal?.Notes)   || 0, Number(b.Scores?.Double?.Normal?.Notes)  || 0, item.order); break;
					case 'DPHNOTES': retVal = diff.num(Number(a.Scores?.Double?.Hyper?.Notes)    || 0, Number(b.Scores?.Double?.Hyper?.Notes)   || 0, item.order); break;
					case 'DPANOTES': retVal = diff.num(Number(a.Scores?.Double?.Another?.Notes)  || 0, Number(b.Scores?.Double?.Another?.Notes) || 0, item.order); break;
					default:         retVal = 0; break;
				};
				if (retVal !== 0) { return retVal; };
			};
		});

		return items;
	},
	write: function(items) {
		let now = new Date();
		let now2Y2M =  dateFormat.format(now, 'yy/MM');
		let now4Y2M2D =  dateFormat.format(now, 'yyyy/MM/dd');

		// 前回の結果を初期化
		toastbox.message('<span>前回の検索結果を削除中…</span>');
		rElm = document.getElementById('musiclist').tBodies;
		while (rElm.length > 0) { rElm[0].remove(); };

		// 曲数・譜面数計算用
		toastbox.message('<span>結果テーブル作成中…</span>');
		cTmp = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0,
				 'ALL': function() { return this.Beginner + this.Normal + this.Hyper + this.Another + this.Leggendaria; } };
		let c = {
			'total':      { 'SP': { ...cTmp }, 'DP': { ...cTmp }, 'ALL': function() { return this.SP.ALL() + this.DP.ALL(); } }, // 譜面数
			'allBit':     { ...cTmp }, // Bit解禁 総BIT
			'sumBit':     { ...cTmp }, // Bit解禁 未解禁BIT
			'usedBit':    { ...cTmp }, // Bit解禁 解禁済BIT
			'NRallBit':   { ...cTmp }, // リリース前 Bit解禁 総BIT
			'NRsumBit':   { ...cTmp }, // リリース前 Bit解禁 未解禁BIT
			'NRusedBit':  { ...cTmp }, // リリース前 Bit解禁 解禁済BIT
			'allBitM':    { 'SP': { ...cTmp }, 'DP': { ...cTmp }, 'ALL': function() { return this.SP.ALL() + this.DP.ALL(); } }, // Bit解禁 総譜面数
			'sumBitM':    { 'SP': { ...cTmp }, 'DP': { ...cTmp }, 'ALL': function() { return this.SP.ALL() + this.DP.ALL(); } }, // Bit解禁 未解禁譜面数
			'usedBitM':   { 'SP': { ...cTmp }, 'DP': { ...cTmp }, 'ALL': function() { return this.SP.ALL() + this.DP.ALL(); } }, // Bit解禁 解禁済譜面数
			'NRallBitM':  { 'SP': { ...cTmp }, 'DP': { ...cTmp }, 'ALL': function() { return this.SP.ALL() + this.DP.ALL(); } }, // リリース前 Bit解禁 総譜面数
			'NRsumBitM':  { 'SP': { ...cTmp }, 'DP': { ...cTmp }, 'ALL': function() { return this.SP.ALL() + this.DP.ALL(); } }, // リリース前 Bit解禁 未解禁譜面数
			'NRusedBitM': { 'SP': { ...cTmp }, 'DP': { ...cTmp }, 'ALL': function() { return this.SP.ALL() + this.DP.ALL(); } }, // リリース前 Bit解禁 解禁済譜面数

			'addValues': function (difficult, hasSP, hasDP, BIT, canplay = false, isBitCalc = true, isReleased = true) {
				if (hasSP) { c.total.SP[difficult]++; };
				if (hasDP) { c.total.DP[difficult]++; };
				if ( isBitCalc && !isNaN(BIT) ) {
					if ( isReleased ){
						c.allBit[difficult] += Number(BIT); canplay ? c.usedBit[difficult] += Number(BIT) : c.sumBit[difficult] += Number(BIT);
						if (hasSP) { c.allBitM.SP[difficult]++; canplay ? c.usedBitM.SP[difficult]++ : c.sumBitM.SP[difficult]++; };
						if (hasDP) { c.allBitM.DP[difficult]++; canplay ? c.usedBitM.DP[difficult]++ : c.sumBitM.DP[difficult]++; };
					} else {
						c.NRallBit[difficult] += Number(BIT); canplay ? c.NRusedBit[difficult] += Number(BIT) : c.NRsumBit[difficult] += Number(BIT);
						if (hasSP) { c.NRallBitM.SP[difficult]++; canplay ? c.NRusedBitM.SP[difficult]++ : c.NRsumBitM.SP[difficult]++; };
						if (hasDP) { c.NRallBitM.DP[difficult]++; canplay ? c.NRusedBitM.DP[difficult]++ : c.NRsumBitM.DP[difficult]++; };
					};
				};
			}
		};

		// テーブルのデータ作成
		let tabledata = {};
		let countdata = {};
		countdata.Tmp = {'Music': 0,
						 'Scores':           { 'SPB': 0, 'SPN': 0, 'SPH': 0, 'SPA': 0, 'SPL': 0, 'DPB': 0, 'DPN': 0, 'DPH': 0, 'DPA': 0, 'DPL': 0 },
						 'BITScores':        { 'SPB': 0, 'SPN': 0, 'SPH': 0, 'SPA': 0, 'SPL': 0, 'DPB': 0, 'DPN': 0, 'DPH': 0, 'DPA': 0, 'DPL': 0 },
						 'BITCanplayScores': { 'SPB': 0, 'SPN': 0, 'SPH': 0, 'SPA': 0, 'SPL': 0, 'DPB': 0, 'DPN': 0, 'DPH': 0, 'DPA': 0, 'DPL': 0 },
						 'BIT':              { 'B': 0, 'N': 0, 'H': 0, 'A': 0, 'L': 0 },
						 'BITCanplay':       { 'B': 0, 'N': 0, 'H': 0, 'A': 0, 'L': 0 }
		};

		let ctTmp          = ClearTypeArray[ClearTypeArray.length - 1];
		let hasUserJSON    = ('musics' in userJSON);

		for(let item of items){
			// 譜面情報の取得
			let SPB = this.getChartInfo( item.Scores.Single[Diff[0].Name] );
			let SPN = this.getChartInfo( item.Scores.Single[Diff[1].Name] );
			let SPH = this.getChartInfo( item.Scores.Single[Diff[2].Name] );
			let SPA = this.getChartInfo( item.Scores.Single[Diff[3].Name] );
			let SPL = this.getChartInfo( item.Scores.Single[Diff[4].Name] );
			let DPB = this.getChartInfo( item.Scores.Double[Diff[0].Name] );
			let DPN = this.getChartInfo( item.Scores.Double[Diff[1].Name] );
			let DPH = this.getChartInfo( item.Scores.Double[Diff[2].Name] );
			let DPA = this.getChartInfo( item.Scores.Double[Diff[3].Name] );
			let DPL = this.getChartInfo( item.Scores.Double[Diff[4].Name] );
			let BPMtmp = [...new Set([SPB.BPM, SPN.BPM, SPH.BPM, SPA.BPM, SPL.BPM, DPB.BPM, DPN.BPM, DPH.BPM, DPA.BPM, DPL.BPM])].filter(Boolean);

			// リリース情報の取得・加工
			let rTypeClass = '';
			let rTypeStr = '';
			let rTypeSStr = '';
			let r4Y2M2D    = ("Date"    in item.Release) ? dateFormat.format(new Date(item.Release.Date), 'yyyy/MM/dd')    : "未配信";
			let r2Y2M      = ("Date"    in item.Release) ? dateFormat.format(new Date(item.Release.Date), 'yy/MM')         : "未配信";
			let rBit       = ("Bit"     in item.Release) ? item.Release.Bit    : {"Beginner":"-","Normal":"-","Hyper":"-","Another":"-","Leggendaria":"-"};
			let rBit4Y2M2D = ("BitDate" in item.Release) ? dateFormat.format(new Date(item.Release.BitDate), 'yyyy/MM/dd') : "BIT未解禁";
			let r_id_r4Y   = ("Date"    in item.Release) ? dateFormat.format(new Date(item.Release.Date), 'yyyy')          : "NO";
			let r_id_r4Y2M = ("Date"    in item.Release) ? dateFormat.format(new Date(item.Release.Date), 'yyyyMM')        : "NO";
			let r_id_b4Y   = ("BitDate" in item.Release) ? dateFormat.format(new Date(item.Release.BitDate), 'yyyy')       : "NO";
			let r_id_b4Y2M = ("BitDate" in item.Release) ? dateFormat.format(new Date(item.Release.BitDate), 'yyyyMM')     : "NO";
			// let r4Y2M      = ("Date"    in item.Release) ? toYYYYMM(item.Release.Date)      : "未配信";
			// let rBit4Y2M   = ("BitDate" in item.Release) ? toYYYYMM(item.Release.BitDate)   : "BIT未解禁";
			// let rBit2YM2   = ("BitDate" in item.Release) ? toYYMM(item.Release.BitDate)     : "BIT未解禁";

			let m = ("Type" in item.Release) ? item.Release.Type.match(/([a-zA-Z]*)([0-9]*)/) : ['','',''];
			let isReleased = true;
			let isBitCalc = true;
			let isPack = false;
			switch ( m[1] ) {
				case 'BIT':
					isReleased = ( ("BitDate" in item.Release) && rBit4Y2M2D <= now4Y2M2D ) ? true : false;
					rTypeClass = isReleased ?  ' bit': ' bitbeforerelease';
					rTypeStr   = 'BIT解禁';
					rTypeSStr  = r2Y2M;
					break;
				case 'Pack':
					rTypeClass = ' pack pack' + m[2];
					rTypeStr   = '楽曲パックVol.' + m[2];
					rTypeSStr  = 'PK#' + m[2];
					isPack = true;
					break;
				case 'PackSS':
					rTypeClass = ' packSS packSS' + m[2];
					rTypeStr   = 'スタートアップセレクションVol.' + m[2];
					rTypeSStr  = 'SS#' + m[2];
					isPack = true;
					break;
				case 'PackPM':
					rTypeClass = ' packPM packPM' + m[2];
					rTypeStr   = 'pop\'n music セレクションVol.' + m[2];
					rTypeSStr  = 'PM#' + m[2];
					isPack = true;
					break;
				case 'PackJU':
					rTypeClass = ' packJU packJU' + m[2];
					rTypeStr   = 'jubeat セレクションVol.' + m[2];
					rTypeSStr  = 'JU#' + m[2];
					isPack = true;
					break;
				case 'PackBPL':
					rTypeClass = ' packBPL packBPL' + m[2];
					rTypeStr   = 'BPL セレクションVol.' + m[2];
					rTypeSStr  = 'BPL#' + m[2];
					isPack = true;
					break;
				case 'Championship':
					rTypeClass = ' championship championship' + m[2];
					rTypeStr   = 'Championship #' + m[2];
					rTypeSStr  ='CH#' + m[2];
					break;
				case 'DJP':
					rTypeClass = ' djp';
					rTypeStr = 'DJPoint';
					rTypeSStr='DJP';
					break;
				case 'Monthly':
					rTypeClass = ' monthly';
					rTypeStr = '特定月プレイ';
					rTypeSStr=r2Y2M;
					if ( now4Y2M2D <= r4Y2M2D ) {
						isReleased = false;
						rTypeClass = ' monthlybeforerelease';
					} else if ( r2Y2M == now2Y2M ) {
						isBitCalc = false;
					} else if ( now4Y2M2D < rBit4Y2M2D ) {
						isReleased = false;
						rTypeClass = ' monthlynobit';
					};
					break;
				case 'Unreleased':
					continue;
				default:
					rTypeClass = '';
					rTypeStr = 'デフォルト';
					rTypeSStr='';
					break;
			};

			// 解禁状況・EXScoreの取得・加工
			let hasMusic       = hasUserJSON && (item.ID in userJSON.musics);
			let uJSON          = hasMusic ? userJSON.musics[item.ID]: {};

			let hasCanplay     = hasMusic && ('Canplay' in uJSON);
			let hasEXScoreSP   = hasMusic && (('EXScores' in uJSON) && ('SP' in uJSON.EXScores));
			let hasEXScoreDP   = hasMusic && (('EXScores' in uJSON) && ('DP' in uJSON.EXScores));
			let hasMissCountSP = hasMusic && (('MissCount' in uJSON) && ('SP' in uJSON.MissCount));
			let hasMissCountDP = hasMusic && (('MissCount' in uJSON) && ('DP' in uJSON.MissCount));
			let hasClearTypeSP = hasMusic && (('ClearType' in uJSON) && ('SP' in uJSON.ClearType));
			let hasClearTypeDP = hasMusic && (('ClearType' in uJSON) && ('DP' in uJSON.ClearType));

			let vals = {'cp': {}, 'ex': {'SP': {}, 'DP':{}}, 'mc': {'SP': {}, 'DP':{}}, 'ct': {'SP': {}, 'DP':{}}};
			for (i of Diff) {
				vals.cp[i.Name] = (hasUserJSON && hasMusic && hasCanplay) ? (uJSON.Canplay[i.Name] == 1) : false;
				vals.ex.SP[i.Name] = (hasUserJSON && hasMusic && hasEXScoreSP && (i.Name in uJSON.EXScores.SP)) ? uJSON.EXScores.SP[i.Name] : '';
				vals.ex.DP[i.Name] = (hasUserJSON && hasMusic && hasEXScoreDP && (i.Name in uJSON.EXScores.DP)) ? uJSON.EXScores.DP[i.Name] : '';
				vals.mc.SP[i.Name] = (hasUserJSON && hasMusic && hasMissCountSP && (i.Name in uJSON.MissCount.SP)) ? uJSON.MissCount.SP[i.Name] : '';
				vals.mc.DP[i.Name] = (hasUserJSON && hasMusic && hasMissCountDP && (i.Name in uJSON.MissCount.DP)) ? uJSON.MissCount.DP[i.Name] : '';
				vals.ct.SP[i.Name] = (hasUserJSON && hasMusic && hasClearTypeSP && (i.Name in uJSON.ClearType.SP)) ? uJSON.ClearType.SP[i.Name] : ctTmp;
				vals.ct.DP[i.Name] = (hasUserJSON && hasMusic && hasClearTypeDP && (i.Name in uJSON.ClearType.DP)) ? uJSON.ClearType.DP[i.Name] : ctTmp;
			};

			// BIT・譜面数計算
			c.addValues(Diff[0].Name, !isNaN(SPB.Lv), !isNaN(DPB.Lv), rBit[Diff[0].Name], vals.cp[Diff[0].Name], isBitCalc, isReleased);
			c.addValues(Diff[1].Name, !isNaN(SPN.Lv), !isNaN(DPN.Lv), rBit[Diff[1].Name], vals.cp[Diff[1].Name], isBitCalc, isReleased);
			c.addValues(Diff[2].Name, !isNaN(SPH.Lv), !isNaN(DPH.Lv), rBit[Diff[2].Name], vals.cp[Diff[2].Name], isBitCalc, isReleased);
			c.addValues(Diff[3].Name, !isNaN(SPA.Lv), !isNaN(DPA.Lv), rBit[Diff[3].Name], vals.cp[Diff[3].Name], isBitCalc, isReleased);
			c.addValues(Diff[4].Name, !isNaN(SPL.Lv), !isNaN(DPL.Lv), rBit[Diff[4].Name], vals.cp[Diff[4].Name], isBitCalc, isReleased);

			// その他
			let comment = item.Comment;
			let BPM = ( BPMtmp.length == 1 ) ? BPMtmp[0] : '※';
			if (BPM === '※') {

				// 可変はどうしようね？

			};

			// 挿入データの作成
			let swdjlv = Number(document.getElementById('showdjlevel').value);
			let unlockCheckbox = {
				"B": ((!isNaN(SPB.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-b" name="check-playable" class="check-playable" value="' + item.ID + '_b" ' + (vals.cp[Diff[0].Name] ? 'checked ': '') + (isPack ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-b"></label>' : '&nbsp;'),
				"N": ((!isNaN(SPN.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-n" name="check-playable" class="check-playable" value="' + item.ID + '_n" ' + (vals.cp[Diff[1].Name] ? 'checked ': '') + (isPack ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-n"></label>' : '&nbsp;'),
				"H": ((!isNaN(SPH.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-h" name="check-playable" class="check-playable" value="' + item.ID + '_h" ' + (vals.cp[Diff[2].Name] ? 'checked ': '') + (isPack ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-h"></label>' : '&nbsp;'),
				"A": ((!isNaN(SPA.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-a" name="check-playable" class="check-playable" value="' + item.ID + '_a" ' + (vals.cp[Diff[3].Name] ? 'checked ': '') + (isPack ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-a"></label>' : '&nbsp;'),
				//"L": ((!isNaN(SPL.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-l" name="check-playable" class="check-playable" value="' + item.ID + '_l" ' + (vals.cp[Diff[4].Name] ? 'checked ': '') + (isPack ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-l"></label>' : '&nbsp;')
			};
			let scoreClass = {
				"canplay": {
					"SPB": ((vals.cp[Diff[0].Name] || rTypeClass === '') && !isNaN(SPB.Lv) ? ' canplay' : ''),
					"SPN": ((vals.cp[Diff[1].Name] || rTypeClass === '') && !isNaN(SPN.Lv) ? ' canplay' : ''),
					"SPH": ((vals.cp[Diff[2].Name] || rTypeClass === '') && !isNaN(SPH.Lv) ? ' canplay' : ''),
					"SPA": ((vals.cp[Diff[3].Name] || rTypeClass === '') && !isNaN(SPA.Lv) ? ' canplay' : ''),
					//"SPL": ((vals.cp[Diff[4].Name] || rTypeClass === '') && !isNaN(SPL.Lv) ? ' canplay' : ''),
					//"DPB": ((vals.cp[Diff[0].Name] || rTypeClass === '') && !isNaN(DPB.Lv) ? ' canplay' : ''),
					"DPN": ((vals.cp[Diff[1].Name] || rTypeClass === '') && !isNaN(DPN.Lv) ? ' canplay' : ''),
					"DPH": ((vals.cp[Diff[2].Name] || rTypeClass === '') && !isNaN(DPH.Lv) ? ' canplay' : ''),
					"DPA": ((vals.cp[Diff[3].Name] || rTypeClass === '') && !isNaN(DPA.Lv) ? ' canplay' : ''),
					//"DPL": ((vals.cp[Diff[4].Name] || rTypeClass === '') && !isNaN(DPL.Lv) ? ' canplay' : '')
				},
				"cn": {
					"SPB": '<div class="notesstyle' + (SPB.HCN ? ' hcn' : SPB.CN ? ' cn' : '') + '"></div>',
					"SPN": '<div class="notesstyle' + (SPN.HCN ? ' hcn' : SPN.CN ? ' cn' : '') + '"></div>',
					"SPH": '<div class="notesstyle' + (SPH.HCN ? ' hcn' : SPH.CN ? ' cn' : '') + '"></div>',
					"SPA": '<div class="notesstyle' + (SPA.HCN ? ' hcn' : SPA.CN ? ' cn' : '') + '"></div>',
					//"SPL": '<div class="notesstyle' + (SPL.HCN ? ' hcn' : SPL.CN ? ' cn' : '') + '"></div>',
					//"DPB": '<div class="notesstyle' + (DPB.HCN ? ' hcn' : DPB.CN ? ' cn' : '') + '"></div>',
					"DPN": '<div class="notesstyle' + (DPN.HCN ? ' hcn' : DPN.CN ? ' cn' : '') + '"></div>',
					"DPH": '<div class="notesstyle' + (DPH.HCN ? ' hcn' : DPH.CN ? ' cn' : '') + '"></div>',
					"DPA": '<div class="notesstyle' + (DPA.HCN ? ' hcn' : DPA.CN ? ' cn' : '') + '"></div>',
					//"DPL": '<div class="notesstyle' + (DPA.HCN ? ' hcn' : DPA.CN ? ' cn' : '') + '"></div>'
				},
				"bss": {
					"SPB": '<div class="notesstyle' + (SPB.HBSS ? ' hbss' : SPB.BSS ? ' bss' : '') + '"></div>',
					"SPN": '<div class="notesstyle' + (SPN.HBSS ? ' hbss' : SPN.BSS ? ' bss' : '') + '"></div>',
					"SPH": '<div class="notesstyle' + (SPH.HBSS ? ' hbss' : SPH.BSS ? ' bss' : '') + '"></div>',
					"SPA": '<div class="notesstyle' + (SPA.HBSS ? ' hbss' : SPA.BSS ? ' bss' : '') + '"></div>',
					//"SPL": '<div class="notesstyle' + (SPL.HBSS ? ' hbss' : SPL.BSS ? ' bss' : '') + '"></div>',
					//"DPB": '<div class="notesstyle' + (DPB.HBSS ? ' hbss' : DPB.BSS ? ' bss' : '') + '"></div>',
					"DPN": '<div class="notesstyle' + (DPN.HBSS ? ' hbss' : DPN.BSS ? ' bss' : '') + '"></div>',
					"DPH": '<div class="notesstyle' + (DPH.HBSS ? ' hbss' : DPH.BSS ? ' bss' : '') + '"></div>',
					"DPA": '<div class="notesstyle' + (DPA.HBSS ? ' hbss' : DPA.BSS ? ' bss' : '') + '"></div>',
					//"DPL": '<div class="notesstyle' + (DPL.HBSS ? ' hbss' : DPL.BSS ? ' bss' : '') + '"></div>'
				},
				"exscore": {
					"SPB": (!isNaN(SPB.Lv) ? '<input id="exs_' + item.ID + '_spb" name="exs_' + item.ID + '_spb" type="text" class="exscore" value="' + vals.ex.SP[Diff[0].Name] + '" placeholder="0">' : ''),
					"SPN": (!isNaN(SPN.Lv) ? '<input id="exs_' + item.ID + '_spn" name="exs_' + item.ID + '_spn" type="text" class="exscore" value="' + vals.ex.SP[Diff[1].Name] + '" placeholder="0">' : ''),
					"SPH": (!isNaN(SPH.Lv) ? '<input id="exs_' + item.ID + '_sph" name="exs_' + item.ID + '_sph" type="text" class="exscore" value="' + vals.ex.SP[Diff[2].Name] + '" placeholder="0">' : ''),
					"SPA": (!isNaN(SPA.Lv) ? '<input id="exs_' + item.ID + '_spa" name="exs_' + item.ID + '_spa" type="text" class="exscore" value="' + vals.ex.SP[Diff[3].Name] + '" placeholder="0">' : ''),
					//"SPL": (!isNaN(SPL.Lv) ? '<input id="exs_' + item.ID + '_spl" name="exs_' + item.ID + '_spl" type="text" class="exscore" value="' + vals.ex.SP[Diff[4].Name] + '" placeholder="0">' : ''),
					//"DPB": (!isNaN(DPB.Lv) ? '<input id="exs_' + item.ID + '_dpb" name="exs_' + item.ID + '_dpb" type="text" class="exscore" value="' + vals.ex.DP[Diff[0].Name] + '" placeholder="0">' : ''),
					"DPN": (!isNaN(DPN.Lv) ? '<input id="exs_' + item.ID + '_dpn" name="exs_' + item.ID + '_dpn" type="text" class="exscore" value="' + vals.ex.DP[Diff[1].Name] + '" placeholder="0">' : ''),
					"DPH": (!isNaN(DPH.Lv) ? '<input id="exs_' + item.ID + '_dph" name="exs_' + item.ID + '_dph" type="text" class="exscore" value="' + vals.ex.DP[Diff[2].Name] + '" placeholder="0">' : ''),
					"DPA": (!isNaN(DPA.Lv) ? '<input id="exs_' + item.ID + '_dpa" name="exs_' + item.ID + '_dpa" type="text" class="exscore" value="' + vals.ex.DP[Diff[3].Name] + '" placeholder="0">' : ''),
					//"DPL": (!isNaN(DPL.Lv) ? '<input id="exs_' + item.ID + '_dpl" name="exs_' + item.ID + '_dpl" type="text" class="exscore" value="' + vals.ex.DP[Diff[4].Name] + '" placeholder="0">' : '')
				},
				"djlevel": {
					"SPB": ( !isNaN(SPB.Lv) && vals.ex.SP[Diff[0].Name] >= 0 ) ? '<label for="exs_' + item.ID + '_spb">' + (swdjlv != -1 ? getDJLevel(SPB.Notes * 2, vals.ex.SP[Diff[0].Name], swdjlv) : '') + '</label>' : '',
					"SPN": ( !isNaN(SPN.Lv) && vals.ex.SP[Diff[1].Name] >= 0 ) ? '<label for="exs_' + item.ID + '_spn">' + (swdjlv != -1 ? getDJLevel(SPN.Notes * 2, vals.ex.SP[Diff[1].Name], swdjlv) : '') + '</label>' : '',
					"SPH": ( !isNaN(SPH.Lv) && vals.ex.SP[Diff[2].Name] >= 0 ) ? '<label for="exs_' + item.ID + '_sph">' + (swdjlv != -1 ? getDJLevel(SPH.Notes * 2, vals.ex.SP[Diff[2].Name], swdjlv) : '') + '</label>' : '',
					"SPA": ( !isNaN(SPA.Lv) && vals.ex.SP[Diff[3].Name] >= 0 ) ? '<label for="exs_' + item.ID + '_spa">' + (swdjlv != -1 ? getDJLevel(SPA.Notes * 2, vals.ex.SP[Diff[3].Name], swdjlv) : '') + '</label>' : '',
					//"SPL": ( !isNaN(SPL.Lv) && vals.ex.SP[Diff[4].Name] >= 0 ) ? '<label for="exs_' + item.ID + '_spl">' + (swdjlv != -1 ? getDJLevel(SPL.Notes * 2, vals.ex.SP[Diff[4].Name], swdjlv) : '') + '</label>' : '',
					//"DPB": ( !isNaN(DPB.Lv) && vals.ex.DP[Diff[0].Name] >= 0 ) ? '<label for="exs_' + item.ID + '_dpb">' + (swdjlv != -1 ? getDJLevel(DPB.Notes * 2, vals.ex.DP[Diff[0].Name], swdjlv) : '') + '</label>' : '',
					"DPN": ( !isNaN(DPN.Lv) && vals.ex.DP[Diff[1].Name] >= 0 ) ? '<label for="exs_' + item.ID + '_dpn">' + (swdjlv != -1 ? getDJLevel(DPN.Notes * 2, vals.ex.DP[Diff[1].Name], swdjlv) : '') + '</label>' : '',
					"DPH": ( !isNaN(DPH.Lv) && vals.ex.DP[Diff[2].Name] >= 0 ) ? '<label for="exs_' + item.ID + '_dph">' + (swdjlv != -1 ? getDJLevel(DPH.Notes * 2, vals.ex.DP[Diff[2].Name], swdjlv) : '') + '</label>' : '',
					"DPA": ( !isNaN(DPA.Lv) && vals.ex.DP[Diff[3].Name] >= 0 ) ? '<label for="exs_' + item.ID + '_dpa">' + (swdjlv != -1 ? getDJLevel(DPA.Notes * 2, vals.ex.DP[Diff[3].Name], swdjlv) : '') + '</label>' : '',
					//"DPL": ( !isNaN(DPL.Lv) && vals.ex.DP[Diff[4].Name] >= 0 ) ? '<label for="exs_' + item.ID + '_dpl">' + (swdjlv != -1 ? getDJLevel(DPL.Notes * 2, vals.ex.DP[Diff[4].Name], swdjlv) : '') + '</label>' : ''
				},
				"cleartype": {
					"SPB": (!isNaN(SPB.Lv) ? makeSelectTag(item.ID, 'ct', 'spb', ClearTypeArray, vals.ct.SP[Diff[0].Name]) : ''),
					"SPN": (!isNaN(SPN.Lv) ? makeSelectTag(item.ID, 'ct', 'spn', ClearTypeArray, vals.ct.SP[Diff[1].Name]) : ''),
					"SPH": (!isNaN(SPH.Lv) ? makeSelectTag(item.ID, 'ct', 'sph', ClearTypeArray, vals.ct.SP[Diff[2].Name]) : ''),
					"SPA": (!isNaN(SPA.Lv) ? makeSelectTag(item.ID, 'ct', 'spa', ClearTypeArray, vals.ct.SP[Diff[3].Name]) : ''),
					//"SPL": (!isNaN(SPL.Lv) ? makeSelectTag(item.ID, 'ct', 'spl', ClearTypeArray, vals.ct.SP[Diff[4].Name]) : ''),
					//"DPB": (!isNaN(DPB.Lv) ? makeSelectTag(item.ID, 'ct', 'dpb', ClearTypeArray, vals.ct.DP[Diff[0].Name]) : ''),
					"DPN": (!isNaN(DPN.Lv) ? makeSelectTag(item.ID, 'ct', 'dpn', ClearTypeArray, vals.ct.DP[Diff[1].Name]) : ''),
					"DPH": (!isNaN(DPH.Lv) ? makeSelectTag(item.ID, 'ct', 'dph', ClearTypeArray, vals.ct.DP[Diff[2].Name]) : ''),
					"DPA": (!isNaN(DPA.Lv) ? makeSelectTag(item.ID, 'ct', 'dpa', ClearTypeArray, vals.ct.DP[Diff[3].Name]) : ''),
					//"DPL": (!isNaN(DPL.Lv) ? makeSelectTag(item.ID, 'ct', 'dpl', ClearTypeArray, vals.ct.DP[Diff[4].Name]) : '')
				},
				"misscount": {
					"SPB": (!isNaN(SPB.Lv) ? '<input id="mc_' + item.ID + '_spb" name="mc_' + item.ID + '_spb" type="text" class="misscount" value="' + vals.mc.SP[Diff[0].Name] + '" placeholder="0">' : ''),
					"SPN": (!isNaN(SPN.Lv) ? '<input id="mc_' + item.ID + '_spn" name="mc_' + item.ID + '_spn" type="text" class="misscount" value="' + vals.mc.SP[Diff[1].Name] + '" placeholder="0">' : ''),
					"SPH": (!isNaN(SPH.Lv) ? '<input id="mc_' + item.ID + '_sph" name="mc_' + item.ID + '_sph" type="text" class="misscount" value="' + vals.mc.SP[Diff[2].Name] + '" placeholder="0">' : ''),
					"SPA": (!isNaN(SPA.Lv) ? '<input id="mc_' + item.ID + '_spa" name="mc_' + item.ID + '_spa" type="text" class="misscount" value="' + vals.mc.SP[Diff[3].Name] + '" placeholder="0">' : ''),
					//"SPL": (!isNaN(SPL.Lv) ? '<input id="mc_' + item.ID + '_spl" name="mc_' + item.ID + '_spl" type="text" class="misscount" value="' + vals.mc.SP[Diff[4].Name] + '" placeholder="0">' : ''),
					//"DPB": (!isNaN(DPB.Lv) ? '<input id="mc_' + item.ID + '_dpb" name="mc_' + item.ID + '_dpb" type="text" class="misscount" value="' + vals.mc.DP[Diff[0].Name] + '" placeholder="0">' : ''),
					"DPN": (!isNaN(DPN.Lv) ? '<input id="mc_' + item.ID + '_dpn" name="mc_' + item.ID + '_dpn" type="text" class="misscount" value="' + vals.mc.DP[Diff[1].Name] + '" placeholder="0">' : ''),
					"DPH": (!isNaN(DPH.Lv) ? '<input id="mc_' + item.ID + '_dph" name="mc_' + item.ID + '_dph" type="text" class="misscount" value="' + vals.mc.DP[Diff[2].Name] + '" placeholder="0">' : ''),
					"DPA": (!isNaN(DPA.Lv) ? '<input id="mc_' + item.ID + '_dpa" name="mc_' + item.ID + '_dpa" type="text" class="misscount" value="' + vals.mc.DP[Diff[3].Name] + '" placeholder="0">' : ''),
					//"DPL": (!isNaN(DPL.Lv) ? '<input id="mc_' + item.ID + '_dpl" name="mc_' + item.ID + '_dpl" type="text" class="misscount" value="' + vals.mc.DP[Diff[4].Name] + '" placeholder="0">' : '')
				},
			};

			rBit.ALL = ((rBit.Beginner ? rBit.Beginner : 0) + (rBit.Normal ? rBit.Normal : 0) + (rBit.Hyper ? rBit.Hyper : 0) + (rBit.Another ? rBit.Another : 0)/*  + (rBit.Leggendaria ? rBit.Leggendaria : 0) */);
			rowspan = (hasUserJSON ? 5 - (item.Release.Type !== 'Default' ? 0 : 1) : 1);
			searchOpen = document.getElementById('searchopen').checked;
			extendOpen = searchOpen && document.getElementById('extendopen').checked;
			addhtml = '<tr class="music m' + item.ID + (searchOpen ? '' : ' hidden') + '" data-mid="m' + item.ID + '">' +
					  '<td class="release' + rTypeClass + '">' + rTypeSStr + '</td>' +
					  '<td class="version version' + item.VNo + '">' + item.VShortName + '</td>' +
					  '<td class="genre">' + item.Genre + '</td>' +
					  '<td class="artist">' + item.Artist + '</td>' +
					  '<td class="title">' + item.Title + '</td>' +
					  '<td class="bpm">' + BPM + '</td>' +
					  '<td class="sp level spb m' + item.ID + ' ' + scoreClass.canplay.SPB + '">' + scoreClass.cn.SPB + scoreClass.bss.SPB + SPB.Lv + '</td>' +
					  '<td class="sp level spn m' + item.ID + ' ' + scoreClass.canplay.SPN + '">' + scoreClass.cn.SPN + scoreClass.bss.SPN + SPN.Lv + '</td>' +
					  '<td class="sp level sph m' + item.ID + ' ' + scoreClass.canplay.SPH + '">' + scoreClass.cn.SPH + scoreClass.bss.SPH + SPH.Lv + '</td>' +
					  '<td class="sp level spa m' + item.ID + ' ' + scoreClass.canplay.SPA + '">' + scoreClass.cn.SPA + scoreClass.bss.SPA + SPA.Lv + '</td>' +
					  '<td class="dp level dpn m' + item.ID + ' ' + scoreClass.canplay.DPN + '">' + scoreClass.cn.DPN + scoreClass.bss.DPN + DPN.Lv + '</td>' +
					  '<td class="dp level dph m' + item.ID + ' ' + scoreClass.canplay.DPH + '">' + scoreClass.cn.DPH + scoreClass.bss.DPH + DPH.Lv + '</td>' +
					  '<td class="dp level dpa m' + item.ID + ' ' + scoreClass.canplay.DPA + '">' + scoreClass.cn.DPA + scoreClass.bss.DPA + DPA.Lv + '</td>' +
					  '</tr>' +
					  '<tr class="music_other m' + item.ID + (extendOpen ? '' : ' hidden') + '" data-mid="m' + item.ID + '">' +
					  '<td class="" rowspan="' + rowspan + '"></td>' +
					  '<td class="other" colspan="4" rowspan="' + rowspan + '">' +
					  '配信開始日：' + r4Y2M2D + '&nbsp;&nbsp;(&nbsp;配信タイプ&nbsp;：&nbsp;' + rTypeStr + '&nbsp;)<br />' +
					  'BIT解禁開始日：' + rBit4Y2M2D + '<br />' +
					  ((rBit4Y2M2D !== 'BIT未解禁') ? '必要BIT数 : ' +
					  ((rBit[Diff[0].Name])  ? '&nbsp;B = ' + rBit[Diff[0].Name].toLocaleString() + ' / ' : '' ) +
					  ((rBit[Diff[1].Name])  ? '&nbsp;N = ' + rBit[Diff[1].Name].toLocaleString() + ' / ' : '' ) +
					  ((rBit[Diff[2].Name])  ? '&nbsp;H = ' + rBit[Diff[2].Name].toLocaleString() + ' / ' : '' ) +
					  ((rBit[Diff[3].Name])  ? '&nbsp;A = ' + rBit[Diff[3].Name].toLocaleString() + ' / ' : '' ) +
					  /* ((rBit[Diff[4].Name])  ? '&nbsp;L = ' + rBit[Diff[4].Name].toLocaleString() + ' / ' : '' ) + */
					  '&nbsp;&nbsp;合計 = ' + rBit.ALL.toLocaleString() : "") +
					  ((comment) ? '<br />' + comment : "") +
					  '</td>' +
					  '<td class="notes">Notes</td>' +
					  '<td class="notes spb m' + item.ID + '">' + (!isNaN(SPB.Lv) ? SPB.Notes : '') + '</td>' +
					  '<td class="notes spn m' + item.ID + '">' + (!isNaN(SPN.Lv) ? SPN.Notes : '') + '</td>' +
					  '<td class="notes sph m' + item.ID + '">' + (!isNaN(SPH.Lv) ? SPH.Notes : '') + '</td>' +
					  '<td class="notes spa m' + item.ID + '">' + (!isNaN(SPA.Lv) ? SPA.Notes : '') + '</td>' +
					  '<td class="notes dpn m' + item.ID + '">' + (!isNaN(DPN.Lv) ? DPN.Notes : '') + '</td>' +
					  '<td class="notes dph m' + item.ID + '">' + (!isNaN(DPH.Lv) ? DPH.Notes : '') + '</td>' +
					  '<td class="notes dpa m' + item.ID + '">' + (!isNaN(DPA.Lv) ? DPA.Notes : '') + '</td>' +
					  '</tr>' +
					  (hasUserJSON && item.Release.Type !== 'Default' ?
					  '<tr class="music_other m' + item.ID + (extendOpen ? '' : ' hidden') + '" data-mid="m' + item.ID + '">' +
					  '<td class="playable">解禁</td>' +
					  '<td class="playable spb m' + item.ID + '">' + unlockCheckbox.B + '</td>' +
					  '<td class="playable spn m' + item.ID + '">' + unlockCheckbox.N + '</td>' +
					  '<td class="playable sph m' + item.ID + '">' + unlockCheckbox.H + '</td>' +
					  '<td class="playable spa m' + item.ID + '">' + unlockCheckbox.A + '</td>' +
					  '<td class="playable dpn m' + item.ID + '">&nbsp;</td>' +
					  '<td class="playable dph m' + item.ID + '">&nbsp;</td>' +
					  '<td class="playable dpa m' + item.ID + '">&nbsp;</td>' +
					  '</tr>' : '' ) +
					  (hasUserJSON ?
					  '<tr class="music_other m' + item.ID + (extendOpen ? '' : ' hidden') + '" data-mid="m' + item.ID + '">' +
					  '<td class="cleartype">ClearType</td>' +
					  '<td class="cleartype spb selectbutton m' + item.ID + '">' + scoreClass.cleartype.SPB + '</td>' +
					  '<td class="cleartype spn selectbutton m' + item.ID + '">' + scoreClass.cleartype.SPN + '</td>' +
					  '<td class="cleartype sph selectbutton m' + item.ID + '">' + scoreClass.cleartype.SPH + '</td>' +
					  '<td class="cleartype spa selectbutton m' + item.ID + '">' + scoreClass.cleartype.SPA + '</td>' +
					  '<td class="cleartype dpn selectbutton m' + item.ID + '">' + scoreClass.cleartype.DPN + '</td>' +
					  '<td class="cleartype dph selectbutton m' + item.ID + '">' + scoreClass.cleartype.DPH + '</td>' +
					  '<td class="cleartype dpa selectbutton m' + item.ID + '">' + scoreClass.cleartype.DPA + '</td>' +
					  '</tr>' : '' ) +
					  (hasUserJSON ?
					  '<tr class="music_other m' + item.ID + (extendOpen ? '' : ' hidden') + '" data-mid="m' + item.ID + '">' +
					  '<td class="exscore">EXScore</td>' +
					  '<td class="exscore spb m' + item.ID + '">' + scoreClass.djlevel.SPB + scoreClass.exscore.SPB + '</td>' +
					  '<td class="exscore spn m' + item.ID + '">' + scoreClass.djlevel.SPN + scoreClass.exscore.SPN + '</td>' +
					  '<td class="exscore sph m' + item.ID + '">' + scoreClass.djlevel.SPH + scoreClass.exscore.SPH + '</td>' +
					  '<td class="exscore spa m' + item.ID + '">' + scoreClass.djlevel.SPA + scoreClass.exscore.SPA + '</td>' +
					  '<td class="exscore dpn m' + item.ID + '">' + scoreClass.djlevel.DPN + scoreClass.exscore.DPN + '</td>' +
					  '<td class="exscore dph m' + item.ID + '">' + scoreClass.djlevel.DPH + scoreClass.exscore.DPH + '</td>' +
					  '<td class="exscore dpa m' + item.ID + '">' + scoreClass.djlevel.DPA + scoreClass.exscore.DPA + '</td>' +
					  '</tr>' : '' ) +
					  (hasUserJSON ?
					  '<tr class="music_other m' + item.ID + (extendOpen ? '' : ' hidden') + '" data-mid="m' + item.ID + '">' +
					  '<td class="misscount">MissCount</td>' +
					  '<td class="misscount spb m' + item.ID + '">' + scoreClass.misscount.SPB + '</td>' +
					  '<td class="misscount spn m' + item.ID + '">' + scoreClass.misscount.SPN + '</td>' +
					  '<td class="misscount sph m' + item.ID + '">' + scoreClass.misscount.SPH + '</td>' +
					  '<td class="misscount spa m' + item.ID + '">' + scoreClass.misscount.SPA + '</td>' +
					  '<td class="misscount dpn m' + item.ID + '">' + scoreClass.misscount.DPN + '</td>' +
					  '<td class="misscount dph m' + item.ID + '">' + scoreClass.misscount.DPH + '</td>' +
					  '<td class="misscount dpa m' + item.ID + '">' + scoreClass.misscount.DPA + '</td>' +
					  '</tr>' : '' );


			// データ挿入先ごとにオブジェクトに格納
			idList = [];
			switch (document.getElementById('search-folder').value) {
				case 'VER'      : idList.push("v" + zeroPadding(item.VNo,4) + "-header"); break;
				case 'RELT'     : idList.push("relt" + item.Release.Type + "-header"); break;
				case 'RELY'     : idList.push("rely" + r_id_r4Y + "-header"); break;
				case 'RELYM'    : idList.push("relym" + r_id_r4Y2M + "-header"); break;
				case 'BITY'     : idList.push("bity" + r_id_b4Y + "-header"); break;
				case 'BITYM'    : idList.push("bitym" + r_id_b4Y2M + "-header"); break;
				case 'BPM'      : idList.push("bpm" + getBPMValue(BPM) + "-header"); break;
				case 'SPLV'     : if (!isNaN(SPB.Lv)) {idList.push("sp-lv" + zeroPadding(SPB.Lv,2) + "-header");};
								  if (!isNaN(SPN.Lv)) {idList.push("sp-lv" + zeroPadding(SPN.Lv,2) + "-header");};
								  if (!isNaN(SPH.Lv)) {idList.push("sp-lv" + zeroPadding(SPH.Lv,2) + "-header");};
								  if (!isNaN(SPA.Lv)) {idList.push("sp-lv" + zeroPadding(SPA.Lv,2) + "-header");};
								  if (!isNaN(SPL.Lv)) {idList.push("sp-lv" + zeroPadding(SPL.Lv,2) + "-header");}; break;
				case 'SPBLV'    : idList.push("spb-lv" + (!isNaN(SPB.Lv) ? zeroPadding(SPB.Lv,2) : 'NO') + "-header"); break;
				case 'SPNLV'    : idList.push("spn-lv" + (!isNaN(SPN.Lv) ? zeroPadding(SPN.Lv,2) : 'NO') + "-header"); break;
				case 'SPHLV'    : idList.push("sph-lv" + (!isNaN(SPH.Lv) ? zeroPadding(SPH.Lv,2) : 'NO') + "-header"); break;
				case 'SPALV'    : idList.push("spa-lv" + (!isNaN(SPA.Lv) ? zeroPadding(SPA.Lv,2) : 'NO') + "-header"); break;
				case 'SPLLV'    : idList.push("spl-lv" + (!isNaN(SPL.Lv) ? zeroPadding(SPL.Lv,2) : 'NO') + "-header"); break;
				case 'DPLV'     : if (!isNaN(DPB.Lv)) {idList.push("dp-lv" + zeroPadding(DPB.Lv,2) + "-header");};
								  if (!isNaN(DPN.Lv)) {idList.push("dp-lv" + zeroPadding(DPN.Lv,2) + "-header");};
								  if (!isNaN(DPH.Lv)) {idList.push("dp-lv" + zeroPadding(DPH.Lv,2) + "-header");};
								  if (!isNaN(DPA.Lv)) {idList.push("dp-lv" + zeroPadding(DPA.Lv,2) + "-header");};
								  if (!isNaN(DPL.Lv)) {idList.push("dp-lv" + zeroPadding(DPL.Lv,2) + "-header");}; break;
				case 'DPBLV'    : idList.push("dpb-lv" + (!isNaN(DPB.Lv) ? zeroPadding(DPB.Lv,2) : 'NO') + "-header"); break;
				case 'DPNLV'    : idList.push("dpn-lv" + (!isNaN(DPN.Lv) ? zeroPadding(DPN.Lv,2) : 'NO') + "-header"); break;
				case 'DPHLV'    : idList.push("dph-lv" + (!isNaN(DPH.Lv) ? zeroPadding(DPH.Lv,2) : 'NO') + "-header"); break;
				case 'DPALV'    : idList.push("dpa-lv" + (!isNaN(DPA.Lv) ? zeroPadding(DPA.Lv,2) : 'NO') + "-header"); break;
				case 'DPLLV'    : idList.push("dpl-lv" + (!isNaN(DPL.Lv) ? zeroPadding(DPL.Lv,2) : 'NO') + "-header"); break;
				case 'SPNNOTES' : idList.push("spn-notes" + (!isNaN(SPN.Lv) ? getNotesValue(SPN.Notes) : 'NO') + "-header"); break;
				case 'SPHNOTES' : idList.push("sph-notes" + (!isNaN(SPH.Lv) ? getNotesValue(SPH.Notes) : 'NO') + "-header"); break;
				case 'SPANOTES' : idList.push("spa-notes" + (!isNaN(SPA.Lv) ? getNotesValue(SPA.Notes) : 'NO') + "-header"); break;
				case 'SPLNOTES' : idList.push("spl-notes" + (!isNaN(SPL.Lv) ? getNotesValue(SPL.Notes) : 'NO') + "-header"); break;
				case 'DPNNOTES' : idList.push("dpn-notes" + (!isNaN(DPN.Lv) ? getNotesValue(DPN.Notes) : 'NO') + "-header"); break;
				case 'DPHNOTES' : idList.push("dph-notes" + (!isNaN(DPH.Lv) ? getNotesValue(DPH.Notes) : 'NO') + "-header"); break;
				case 'DPANOTES' : idList.push("dpa-notes" + (!isNaN(DPA.Lv) ? getNotesValue(DPA.Notes) : 'NO') + "-header"); break;
				case 'DPLNOTES' : idList.push("dpl-notes" + (!isNaN(DPL.Lv) ? getNotesValue(DPL.Notes) : 'NO') + "-header"); break;
			};

			for (let header of idList) {
				tabledata[header] = (tabledata[header] ? tabledata[header] + addhtml : addhtml);
				if (!(header in countdata)) {
					countdata[header] = { ...countdata.Tmp,
					'Scores':           { ...countdata.Tmp.Scores },
					'BITScores':        { ...countdata.Tmp.BITScores },
					'BITCanplayScores': { ...countdata.Tmp.BITCanplayScores },
					'BIT':              { ...countdata.Tmp.BIT },
					'BITCanplay':       { ...countdata.Tmp.BITCanplay },
					};

				};
				countdata[header].Music += 1;
				if (!isNaN(SPB.Lv)) { countdata[header].Scores.SPB += 1; };
				if (!isNaN(SPN.Lv)) { countdata[header].Scores.SPN += 1; };
				if (!isNaN(SPH.Lv)) { countdata[header].Scores.SPH += 1; };
				if (!isNaN(SPA.Lv)) { countdata[header].Scores.SPA += 1; };
				//if (!isNaN(SPL.Lv)) { countdata[header].Scores.SPL += 1; };
				//if (!isNaN(DPB.Lv)) { countdata[header].Scores.DPB += 1; };
				if (!isNaN(DPN.Lv)) { countdata[header].Scores.DPN += 1; };
				if (!isNaN(DPH.Lv)) { countdata[header].Scores.DPH += 1; };
				if (!isNaN(DPA.Lv)) { countdata[header].Scores.DPA += 1; };
				//if (!isNaN(DPL.Lv)) { countdata[header].Scores.DPL += 1; };

				if (rBit4Y2M2D !== 'BIT未解禁' && isReleased && isBitCalc) {
					if (!isNaN(SPB.Lv)) { countdata[header].BITScores.SPB += 1; if (vals.cp[Diff[0].Name]) {countdata[header].BITCanplayScores.SPB++; }; };
					if (!isNaN(SPN.Lv)) { countdata[header].BITScores.SPN += 1; if (vals.cp[Diff[1].Name]) {countdata[header].BITCanplayScores.SPN++; }; };
					if (!isNaN(SPH.Lv)) { countdata[header].BITScores.SPH += 1; if (vals.cp[Diff[2].Name]) {countdata[header].BITCanplayScores.SPH++; }; };
					if (!isNaN(SPA.Lv)) { countdata[header].BITScores.SPA += 1; if (vals.cp[Diff[3].Name]) {countdata[header].BITCanplayScores.SPA++; }; };
					//if (!isNaN(SPL.Lv)) { countdata[header].BITScores.SPL += 1; if (vals.cp[Diff[4].Name]) {countdata[header].BITCanplayScores.SPL++; }; };
					//if (!isNaN(DPB.Lv)) { countdata[header].BITScores.DPB += 1; if (vals.cp[Diff[0].Name]) {countdata[header].BITCanplayScores.DPB++; }; };
					if (!isNaN(DPN.Lv)) { countdata[header].BITScores.DPN += 1; if (vals.cp[Diff[1].Name]) {countdata[header].BITCanplayScores.DPN++; }; };
					if (!isNaN(DPH.Lv)) { countdata[header].BITScores.DPH += 1; if (vals.cp[Diff[2].Name]) {countdata[header].BITCanplayScores.DPH++; }; };
					if (!isNaN(DPA.Lv)) { countdata[header].BITScores.DPA += 1; if (vals.cp[Diff[3].Name]) {countdata[header].BITCanplayScores.DPA++; }; };
					//if (!isNaN(DPL.Lv)) { countdata[header].BITScores.DPL += 1; if (vals.cp[Diff[4].Name]) {countdata[header].BITCanplayScores.DPL++; }; };

					if ( ( !isNaN(SPB.Lv) || !isNaN(DPB.Lv) )) {countdata[header].BIT.B += Number(rBit[Diff[0].Name]); if (vals.cp[Diff[0].Name]) {countdata[header].BITCanplay.B += Number(rBit[Diff[0].Name]); }; };
					if ( ( !isNaN(SPN.Lv) || !isNaN(DPN.Lv) )) {countdata[header].BIT.N += Number(rBit[Diff[1].Name]); if (vals.cp[Diff[1].Name]) {countdata[header].BITCanplay.N += Number(rBit[Diff[1].Name]); }; };
					if ( ( !isNaN(SPH.Lv) || !isNaN(DPH.Lv) )) {countdata[header].BIT.H += Number(rBit[Diff[2].Name]); if (vals.cp[Diff[2].Name]) {countdata[header].BITCanplay.H += Number(rBit[Diff[2].Name]); }; };
					if ( ( !isNaN(SPA.Lv) || !isNaN(DPA.Lv) )) {countdata[header].BIT.A += Number(rBit[Diff[3].Name]); if (vals.cp[Diff[3].Name]) {countdata[header].BITCanplay.A += Number(rBit[Diff[3].Name]); }; };
					//if ( ( !isNaN(SPL.Lv) || !isNaN(DPL.Lv) )) {countdata[header].BIT.L += Number(rBit[Diff[4].Name]); if (vals.cp[Diff[4].Name]) {countdata[header].BITCanplay.L += Number(rBit[Diff[4].Name]); }; };

				};
			};
		};

		// DocumentFragmentの作成
		let df = document.createDocumentFragment();
		// ヘッダー行の作成
		let bitEndDate = new Date();
		bitEndDate.setFullYear(bitEndDate.getFullYear() + 2);
		let LvArr = ['01','02','03','04','05','06','07','08','09','10','11','12','NO'];

		toastbox.message('<span>結果テーブルにヘッダー行の作成中…</span>');
		switch (document.getElementById('search-folder').value) {
			case 'VER':
				headerLine = [];
				for (const prop in VerArray) { headerLine.push(['v' + prop + '-header', 'par-version', VerArray[prop].VName]); };
				makeHeaderLine(df, headerLine);
				break;
			case 'RELT':
				headerArray = ['Default','Monthly','BIT','DJP','Championship1','Championship2','Championship3','Championship4'];
				for(let pk of packlist){ headerArray.push(packlist[pk].shortName); };
				headerArray.push('Unreleased');
				headerLine = pushheaderLine('relt',  'par-rel-type', 'RELEASED&nbsp;TYPE&nbsp;:&nbsp;', headerArray);
				makeHeaderLine(df, headerLine);
				break;
			case 'RELY':
				headerLine = pushheaderLine('rely',  'par-rel-year', 'RELEASED&nbsp;YEAR&nbsp;:&nbsp;', makeMonthArray(LaunchDate, bitEndDate));
				makeHeaderLine(df, headerLine);
				break;
			case 'RELYM':
				headerLine = pushheaderLine('relym', 'par-rel-month','RELEASED&nbsp;MONTH&nbsp;:&nbsp;', makeMonthArray(LaunchDate, bitEndDate, true));
				makeHeaderLine(df, headerLine);
				break;
			case 'BITY':
				headerLine = pushheaderLine('bity',  'par-bit-year', 'BIT&nbsp;UNLOCKED&nbsp;YEAR&nbsp;:&nbsp;', makeMonthArray(LaunchDate, bitEndDate).concat(['NO']));
				makeHeaderLine(df, headerLine);
				break;
			case 'BITYM':
				headerLine = pushheaderLine('bitym', 'par-bit-month','BIT&nbsp;UNLOCKED&nbsp;MONTH&nbsp;:&nbsp;', makeMonthArray(LaunchDate, bitEndDate, true).concat(['NO']));
				makeHeaderLine(df, headerLine);
				break;
			case 'BPM':
				headerLine = pushheaderLine('bpm','par-bpm','BPM&nbsp;', BPMArray);
				makeHeaderLine(df, headerLine);
				break;
			case 'SPLV':
				headerLine = pushheaderLine('sp-lv','par-level','Single&nbsp;LEVEL&nbsp;',  LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'SPBLV':
				headerLine = pushheaderLine('spb-lv','par-level','Single&nbsp;BEGINNER&nbsp;LEVEL&nbsp;',  LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'SPNLV':
				headerLine = pushheaderLine('spn-lv','par-level','Single&nbsp;NORMAL&nbsp;LEVEL&nbsp;',  LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'SPHLV':
				headerLine = pushheaderLine('sph-lv','par-level','Single&nbsp;HYPER&nbsp;LEVEL&nbsp;',   LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'SPALV':
				headerLine = pushheaderLine('spa-lv','par-level','Single&nbsp;ANOTHER&nbsp;LEVEL&nbsp;', LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'SPLLV':
				headerLine = pushheaderLine('spl-lv','par-level','Single&nbsp;LEGGENDARIA&nbsp;LEVEL&nbsp;', LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'DPLV':
				headerLine = pushheaderLine('dp-lv','par-level','Double&nbsp;LEVEL&nbsp;',  LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'DPBLV':
				headerLine = pushheaderLine('dpb-lv','par-level','Double&nbsp;BEGINNER&nbsp;LEVEL&nbsp;',  LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'DPNLV':
				headerLine = pushheaderLine('dpn-lv','par-level','Double&nbsp;NORMAL&nbsp;LEVEL&nbsp;',  LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'DPHLV':
				headerLine = pushheaderLine('dph-lv','par-level','Double&nbsp;HYPER&nbsp;LEVEL&nbsp;',   LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'DPALV':
				headerLine = pushheaderLine('dpa-lv','par-level','Double&nbsp;ANOTHER&nbsp;LEVEL&nbsp;', LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'DPLLV':
				headerLine = pushheaderLine('dpl-lv','par-level','Double&nbsp;LEGGENDARIA&nbsp;LEVEL&nbsp;', LvArr);
				makeHeaderLine(df, headerLine);
				break;
			case 'SPNNOTES':
				headerLine = pushheaderLine('spn-notes','par-notes','Single&nbsp;NORMAL&nbsp;NOTES&nbsp;',  NotesArray);
				makeHeaderLine(df, headerLine);
				break;
			case 'SPHNOTES':
				headerLine = pushheaderLine('sph-notes','par-notes','Single&nbsp;HYPER&nbsp;NOTES&nbsp;',   NotesArray);
				makeHeaderLine(df, headerLine);
				break;
			case 'SPANOTES':
				headerLine = pushheaderLine('spa-notes','par-notes','Single&nbsp;ANOTHER&nbsp;NOTES&nbsp;', NotesArray);
				makeHeaderLine(df, headerLine);
				break;
			case 'DPNNOTES':
				headerLine = pushheaderLine('dpn-notes','par-notes','Double&nbsp;NORMAL&nbsp;NOTES&nbsp;',  NotesArray);
				makeHeaderLine(df, headerLine);
				break;
			case 'DPHNOTES':
				headerLine = pushheaderLine('dph-notes','par-notes','Double&nbsp;HYPER&nbsp;NOTES&nbsp;',   NotesArray);
				makeHeaderLine(df, headerLine);
				break;
			case 'DPANOTES':
				headerLine = pushheaderLine('dpa-notes','par-notes','Double&nbsp;ANOTHER&nbsp;NOTES&nbsp;', NotesArray);
				makeHeaderLine(df, headerLine);
				break;
		};

		// データ挿入
		toastbox.message('<span>結果テーブルに書き込み中…</span>');
		for(let idList in tabledata){
			// 楽曲データを追加した場合は検索結果の書き換えと表示処理
			if (tabledata[idList] !== '') {
				hTag = df.getElementById(idList).getElementsByTagName('th')[0];
				while (hTag.firstChild.nextSibling) { hTag.removeChild(hTag.firstChild.nextSibling); };
				let tmp = countdata[idList];
				let addScoresText = [
					'<span class="unlockvalue_b"> ' + (tmp.BITScores.SPB > 0 ? 'B：' + (hasUserJSON ? tmp.BITCanplayScores.SPB + ' / ' : '') + tmp.BITScores.SPB : '') + '</span>',
					'<span class="unlockvalue"> ' + (tmp.BITScores.SPN > 0 ? 'N：' + (hasUserJSON ? tmp.BITCanplayScores.SPN + ' / ' : '') + tmp.BITScores.SPN : '') + '</span>',
					'<span class="unlockvalue"> ' + (tmp.BITScores.SPH > 0 ? 'H：' + (hasUserJSON ? tmp.BITCanplayScores.SPH + ' / ' : '') + tmp.BITScores.SPH : '') + '</span>',
					'<span class="unlockvalue"> ' + (tmp.BITScores.SPA > 0 ? 'A：' + (hasUserJSON ? tmp.BITCanplayScores.SPA + ' / ' : '') + tmp.BITScores.SPA : '') + '</span>',
					'<span class="unlockvalue"> ' + (tmp.BITScores.SPL > 0 ? 'L：' + (hasUserJSON ? tmp.BITCanplayScores.SPL + ' / ' : '') + tmp.BITScores.SPL : '') + '</span>',
				];
				let addTextOutput = (tmp.BITScores.SPB > 0 || tmp.BITScores.SPN > 0 || tmp.BITScores.SPH > 0 || tmp.BITScores.SPA > 0 || tmp.BITScores.SPL > 0);
				let addText = '<span class="result">&nbsp;' + tmp.Music + ' 曲</span>' +
						  (addTextOutput ? '<span class="unlocklabel"> BIT解禁</span>' + addScoresText.join('') : '');
 				hTag.innerHTML += addText;

				target = df.getElementById(idList);
				target.classList.remove('hidden');
				target.dataset.initialized = true;
				target.dataset.musiccount = tmp.Music;
				target.dataset.tableid = idList;
				target.innerHTML += tabledata[idList];
			};
		};

		document.getElementById('musiclist').appendChild(df);

		// バージョンヘッダーをクリックで開閉
		jQuery('.musiclist .headerline').click(function() {
			let wrkThis = this;
			if ( "false" === wrkThis.parentElement.dataset.initialized ) {
				tmpId = wrkThis.parentElement.id;
				wrkThis.parentElement.innerHTML += tabledata[tmpId];
				wrkThis = document.getElementById(tmpId).firstChild;
				wrkThis.parentElement.dataset.initialized = true;
			};
			// クリック対象が開いていたら
			if ( wrkThis.classList.contains('opened') ) {
				wrkThis.parentElement.querySelectorAll('.music,.music_other').forEach( elm => elm.classList.add('hidden'));
				wrkThis.classList.remove('opened');
			// クリック対象が閉じていたら
			} else {
				classStr = (document.getElementById('extendopen').checked ? '.music, .music_other' : '.music');
				if ( document.getElementById('singleopen').checked ) {
					document.querySelectorAll('.music, .music_other').forEach( elm => elm.classList.add('hidden'));
					document.querySelectorAll('.musiclist .headerline').forEach( elm => elm === wrkThis ? '' : elm.classList.remove('opened'));
				};
				wrkThis.parentElement.querySelectorAll(classStr).forEach( elm => elm.classList.remove('hidden'));
				wrkThis.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
				wrkThis.classList.add('opened');
			};
		});

		// music_other開閉用にonclick設定
		jQuery('.musiclist tbody').find('.genre, .title, .artist, .bpm').click(function() {
			let mid = this.parentElement.getAttribute('data-mid');
			let elms = this.parentElement.parentElement.querySelectorAll('.' + mid + '.music_other');
			elms.forEach( elm => elm.classList.contains('hidden') ? elm.classList.remove('hidden') : elm.classList.add('hidden') );
		});

		// 解禁状況更新処理用
		jQuery('.playable input[type=checkbox]').change(function() {
			update.start(jQuery(this).val(),jQuery(this).prop('checked'));
			let tmpVal = jQuery(this).val().split('_');
			let tmpdif = [];
			switch (tmpVal[1]) {
				case '0': tmpdif = ['spb','dpb']; break;
				case '1': tmpdif = ['spn','dpn']; break;
				case '2': tmpdif = ['sph','dph']; break;
				case '3': tmpdif = ['spa','dpa']; break;
				case '4': tmpdif = ['spl','dpl']; break;
				case 'b': tmpdif = ['spb','dpb']; break;
				case 'n': tmpdif = ['spn','dpn']; break;
				case 'h': tmpdif = ['sph','dph']; break;
				case 'a': tmpdif = ['spa','dpa']; break;
				case 'l': tmpdif = ['spl','dpl']; break;
			};

			if (jQuery(this).prop('checked')) {
				for (dif of tmpdif) { jQuery('.level.m' + tmpVal[0] + '.' + dif).addClass('canplay'); };
			} else {
				for (dif of tmpdif) { jQuery('.level.m' + tmpVal[0] + '.' + dif).removeClass('canplay'); };
			};
		});

		// EXScore更新処理用
		jQuery('td.exscore input.exscore').change(function() {
			let tmpID = jQuery(this).prop('id').split('_');
			let notes = Number(jQuery('.m' + tmpID[1] + '.' + tmpID[2] + '.notes').text());
			let exscore = Number(jQuery(this).val());
			let swdjlv = Number(jQuery('#showdjlevel').val());
			if (exscore <= notes * 2) { update.start(jQuery(this).prop('id'),exscore); };
			jQuery('label[for=' + jQuery(this).prop('id') + ']').html((swdjlv != -1 ? getDJLevel(notes * 2, exscore, swdjlv) : ''));
		});

		// MissCount更新処理用
		jQuery('td.misscount input.misscount').change(function() {
			let tmpID = jQuery(this).prop('id').split('_');
			let notes = Number(jQuery('.m' + tmpID[1] + '.' + tmpID[2] + '.notes').text());
			let misscount = Number(jQuery(this).val());
			if (misscount <= notes) { update.start(jQuery(this).prop('id'),misscount); };
		});

		// ClearType更新処理用
		jQuery('td.cleartype select').change(function() {
			// CSSも変更する必要がある
			jQuery(this).removeClass().addClass(jQuery(this).val());
			update.start(jQuery(this).prop('id'),jQuery(this).val());
		});
		// ClearTypeの色反映
		jQuery('td.cleartype select').each( function() { jQuery(this).removeClass().addClass(jQuery(this).val()); });

		jQuery('table.musiclist caption').html('(&nbsp;検索結果：' + items.length + '曲&nbsp;)');

		jQuery('.infotable .resultdata, .infotable .bitdata').remove();
		jQuery('.infotable').append('<tbody class="resultdata"><tr><th colspan="2" class="section2">検索結果</th>' +
									'<td class="text-right">' + (items.length).toLocaleString() + '&nbsp;曲&nbsp;/&nbsp;' + c.total.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="text-right">' + c.total.SP.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spb text-right">' + c.total.SP.Beginner.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spn text-right">' + c.total.SP.Normal.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="sph text-right">' + c.total.SP.Hyper.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spa text-right">' + c.total.SP.Another.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="text-right">' + c.total.DP.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dpn text-right">' + c.total.DP.Normal.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dph text-right">' + c.total.DP.Hyper.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dpa text-right">' + c.total.DP.Another.toLocaleString() + '&nbsp;譜面</td>' +
									'</tr></tbody>' +
									'<thead class="resultdata"><tr><th colspan="2">BIT解禁&nbsp;:&nbsp;譜面数</th>' +
									'<th class="total">曲数 / 譜面数</th>' +
									'<th colspan="5" class="sp">譜面数：single</th>' +
									'<th colspan="4" class="dp">譜面数：double</th></tr></thead>' +
									'<tbody class="resultdata"><tr><th rowspan="3">BIT解禁</th><th class="section2">対象譜面</th>' +
									'<td class="text-right">' + (c.allBitM.SP.Normal).toLocaleString() + '&nbsp;曲&nbsp;/&nbsp;' + c.allBitM.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="text-right">' + c.allBitM.SP.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spb text-right">' + c.allBitM.SP.Beginner.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spn text-right">' + c.allBitM.SP.Normal.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="sph text-right">' + c.allBitM.SP.Hyper.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spa text-right">' + c.allBitM.SP.Another.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="text-right">' + c.allBitM.DP.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dpn text-right">' + c.allBitM.DP.Normal.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dph text-right">' + c.allBitM.DP.Hyper.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dpa text-right">' + c.allBitM.DP.Another.toLocaleString() + '&nbsp;譜面</td>' +
									'</tr><tr><th class="section2">残り譜面</th>' +
									'<td class="text-right">' + (c.sumBitM.SP.Normal).toLocaleString() + '&nbsp;曲&nbsp;/&nbsp;' + c.sumBitM.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="text-right">' + c.sumBitM.SP.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spb text-right">' + c.sumBitM.SP.Beginner.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spn text-right">' + c.sumBitM.SP.Normal.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="sph text-right">' + c.sumBitM.SP.Hyper.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spa text-right">' + c.sumBitM.SP.Another.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="text-right">' + c.sumBitM.DP.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dpn text-right">' + c.sumBitM.DP.Normal.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dph text-right">' + c.sumBitM.DP.Hyper.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dpa text-right">' + c.sumBitM.DP.Another.toLocaleString() + '&nbsp;譜面</td>' +
									'</tr><tr><th class="section2">解禁済譜面</th>' +
									'<td class="text-right">' + (c.usedBitM.SP.Normal).toLocaleString() + '&nbsp;曲&nbsp;/&nbsp;' + c.usedBitM.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="text-right">' + c.usedBitM.SP.ALL().toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spb text-right">' + c.usedBitM.SP.Beginner.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spn text-right">' + c.usedBitM.SP.Normal.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="sph text-right">' + c.usedBitM.SP.Hyper.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="spa text-right">' + c.usedBitM.SP.Another.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="text-right">' + c.usedBitM.DP.ALL().toLocaleString() + '譜面</td>' +
									'<td class="dpn text-right">' + c.usedBitM.DP.Normal.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dph text-right">' + c.usedBitM.DP.Hyper.toLocaleString() + '&nbsp;譜面</td>' +
									'<td class="dpa text-right">' + c.usedBitM.DP.Another.toLocaleString() + '&nbsp;譜面</td>' +
									'</tr></tbody>' +
									'<thead class="resultdata"><tr><th colspan="2">BIT解禁&nbsp;:&nbsp;BIT数</th>' +
									'<th class="total">&nbsp;</th>' +
									'<th colspan="5" class="sp">BIT数</th>' +
									'<th colspan="4" class="dp">&nbsp;</th></tr></thead>' +
									'<tbody class="resultdata"><tr><th rowspan="3">BIT解禁</th><th class="section2">合計BIT</th>' +
									'<td class="text-right">&nbsp;</td>' +
									'<td class="text-right">' + c.allBit.ALL().toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="spb text-right">' + c.allBit.Beginner.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="spn text-right">' + c.allBit.Normal.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="sph text-right">' + c.allBit.Hyper.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="spa text-right">' + c.allBit.Another.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="text-right">&nbsp;</td>' +
									'<td class="dpn text-right">&nbsp;</td>' +
									'<td class="dph text-right">&nbsp;</td>' +
									'<td class="dpa text-right">&nbsp;</td>' +
									'</tr><tr><th class="section2">残りBIT</th>' +
									'<td class="text-right">&nbsp;</td>' +
									'<td class="text-right">' + c.sumBit.ALL().toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="spb text-right">' + c.sumBit.Beginner.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="spn text-right">' + c.sumBit.Normal.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="sph text-right">' + c.sumBit.Hyper.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="spa text-right">' + c.sumBit.Another.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="text-right">&nbsp;</td>' +
									'<td class="dpn text-right">&nbsp;</td>' +
									'<td class="dph text-right">&nbsp;</td>' +
									'<td class="dpa text-right">&nbsp;</td>' +
									'</tr><tr><th class="section2">解禁済BIT</th>' +
									'<td class="text-right">&nbsp;</td>' +
									'<td class="text-right">' + c.usedBit.ALL().toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="spb text-right">' + c.usedBit.Beginner.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="spn text-right">' + c.usedBit.Normal.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="sph text-right">' + c.usedBit.Hyper.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="spa text-right">' + c.usedBit.Another.toLocaleString() + '&nbsp;BIT</td>' +
									'<td class="text-right">&nbsp;</td>' +
									'<td class="dpn text-right">&nbsp;</td>' +
									'<td class="dph text-right">&nbsp;</td>' +
									'<td class="dpa text-right">&nbsp;</td>' +
									'</tr></tbody>');
		toastbox.message('<span>検索しました</span>');
		toastbox.timerFadeOut(5000);
	},

	getChartInfo: function (item) {
		let chart = {'Lv':'-', 'Notes':'-', 'BPM':'', 'CN':false, 'BSS':false, 'HCN':false, 'HBSS': false };

		if (item) {
			chart.Lv = item.Level ? item.Level :  '-';
			chart.Notes = item.Notes ? item.Notes :  '-';
			chart.BPM = item.BPM ? item.BPM : item.MinBPM + '-' + item.MaxBPM;
			chart.CN = item.CN ? true : false;
			chart.BSS = item.BSS ? true : false;
			chart.HCN = item.HCN ? true : false;
			chart.HBSS = item.HBSS ? true : false;
		};

		return chart;
	},
};

//// 検索用のオブジェクト
let s = {
	params: {
		series: [0],
		score: 'ALL',
		lv: {
			SPB: { min: 0, max: 3 },
			SPN: { min: 0, max: 12 },
			SPH: { min: 0, max: 12 },
			SPA: { min: 0, max: 12 },
			SPL: { min: 0, max: 12 },
			DPB: { min: 0, max: 3 },
			DPN: { min: 0, max: 12 },
			DPH: { min: 0, max: 12 },
			DPA: { min: 0, max: 12 },
			DPL: { min: 0, max: 12 }
		},
		opt: {
			SPB: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
			SPN: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
			SPH: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
			SPA: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
			SPL: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
			DPN: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
			DPH: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
			DPA: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
			DPL: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} }
		},
		djlevel: {
			SPB: { min: 0, max: DJLevelArray2.length - 1 },
			SPN: { min: 0, max: DJLevelArray2.length - 1 },
			SPH: { min: 0, max: DJLevelArray2.length - 1 },
			SPA: { min: 0, max: DJLevelArray2.length - 1 },
			SPL: { min: 0, max: DJLevelArray2.length - 1 },
			DPN: { min: 0, max: DJLevelArray2.length - 1 },
			DPH: { min: 0, max: DJLevelArray2.length - 1 },
			DPA: { min: 0, max: DJLevelArray2.length - 1 },
			DPL: { min: 0, max: DJLevelArray2.length - 1 }
		},
		exscore: {
			SPB: {min: 0, max: 99999},
			SPN: {min: 0, max: 99999},
			SPH: {min: 0, max: 99999},
			SPA: {min: 0, max: 99999},
			SPL: {min: 0, max: 99999},
			DPN: {min: 0, max: 99999},
			DPH: {min: 0, max: 99999},
			DPA: {min: 0, max: 99999},
			DPL: {min: 0, max: 99999}
		},
		misscount: {
			SPB: {min: 0, max: 99999},
			SPN: {min: 0, max: 99999},
			SPH: {min: 0, max: 99999},
			SPA: {min: 0, max: 99999},
			SPL: {min: 0, max: 99999},
			DPN: {min: 0, max: 99999},
			DPH: {min: 0, max: 99999},
			DPA: {min: 0, max: 99999},
			DPL: {min: 0, max: 99999}
		},
		cleartype: {
			SPB: [0],
			SPN: [0],
			SPH: [0],
			SPA: [0],
			SPL: [0],
			DPN: [0],
			DPH: [0],
			DPA: [0],
			DPL: [0]
		},
		release: { type: [0], min: "2000-01-01", max: "2999-12-31" },
		bitDate: { min: "2000-01-01", max: "2999-12-31" },
		available: 'ALL',
		unlocked: 'ALL',
		title: '',
		genre: '',
		artist: '',
		BPM: { min: 0, max: 0, changing: 0 },
		searchopen: false,
		singleopen: true,
		extendopen: false,
		searchfolder: 'VER',
		searchsort1: 'VERSION',
		searchorder1: 'UP',
		searchsort2: 'SPALV',
		searchorder2: 'UP',
		searchsort3: 'SPHLV',
		searchorder3: 'UP',
		showdjlevel: 0
	},

	getSearchParam: function() {
		this.params.series = [];
		this.params.release.type = [];
		let thisTmp = this;
		jQuery("[name=series]:checked").each(function(){thisTmp.params.series.push(parseFloat(jQuery(this).val()))});
		jQuery("[name=releasetype]:checked").each(function(){thisTmp.params.release.type.push(jQuery(this).val())});
		this.getScoreSearchParams('SPB');
		this.getScoreSearchParams('SPN');
		this.getScoreSearchParams('SPH');
		this.getScoreSearchParams('SPA');
		this.getScoreSearchParams('DPN');
		this.getScoreSearchParams('DPH');
		this.getScoreSearchParams('DPA');
		this.params.release.min = jQuery("#releasedate-min").val();
		this.params.release.max = jQuery("#releasedate-max").val();
		this.params.bitDate.min = jQuery("#bitdate-min").val();
		this.params.bitDate.max = jQuery("#bitdate-max").val();
		this.params.available = jQuery("#available").val();
		this.params.unlocked = jQuery("#unlocked").val();
		this.params.title = jQuery("#title").val();
		this.params.genre = jQuery("#genre").val();
		this.params.artist = jQuery("#artist").val();
		this.params.BPM.min = (isNaN(parseInt(jQuery("#opt_bpm_min").val())) ?     0 : parseInt(jQuery("#opt_bpm_min").val()));
		this.params.BPM.max = (isNaN(parseInt(jQuery("#opt_bpm_max").val())) ?  9999 : parseInt(jQuery("#opt_bpm_max").val()));
		this.params.BPM.changing = Number(jQuery('#opt_bpm_changing').val());
		this.params.searchopen = jQuery("#searchopen").val();
		this.params.singleopen = jQuery("#singleopen").val();
		this.params.extendopen = jQuery("#extendopen").val();
		this.params.searchfolder = jQuery("#search-folder").val();
		this.params.searchsort1 = jQuery("#search-sort1").val();
		this.params.searchorder1 = jQuery("#search-sort-order1").val();
		this.params.searchsort2 = jQuery("#search-sort2").val();
		this.params.searchorder2 = jQuery("#search-sort-order2").val();
		this.params.searchsort3 = jQuery("#search-sort3").val();
		this.params.searchorder3 = jQuery("#search-sort-order3").val();
		this.params.showdjlevel = Number(jQuery('#showdjlevel').val());
	},
	getScoreSearchParams: function(score) {
		this.params.cleartype[score] = [];
		let thisTmp = this;
		[this.params.lv[score].min,this.params.lv[score].max] = jQuery('#' + score + '-levels')[0].noUiSlider.get();
		this.params.opt[score].cn = Number(jQuery('#opt_' + score + '_CN').val());
		this.params.opt[score].bss = Number(jQuery('#opt_' + score + '_BSS').val());
		this.params.opt[score].hcn = Number(jQuery('#opt_' + score + '_HCN').val());
		this.params.opt[score].notes.min = (isNaN(parseInt(jQuery('#opt_' + score + '_notes_min').val())) ?     0 : parseInt(jQuery('#opt_' + score + '_notes_min').val()));
		this.params.opt[score].notes.max = (isNaN(parseInt(jQuery('#opt_' + score + '_notes_max').val())) ? 99999 : parseInt(jQuery('#opt_' + score + '_notes_max').val()));
		[this.params.djlevel[score].min,this.params.djlevel[score].max] = jQuery('#djlevel_' + score + '_levels')[0].noUiSlider.get();
		this.params.exscore[score].min = (isNaN(parseInt(jQuery('#exscore_' + score + '_min').val())) ?    -1 : parseInt(jQuery('#exscore_' + score + '_min').val()));
		this.params.exscore[score].max = (isNaN(parseInt(jQuery('#exscore_' + score + '_max').val())) ? 99999 : parseInt(jQuery('#exscore_' + score + '_max').val()));
		this.params.misscount[score].min = (isNaN(parseInt(jQuery('#misscount_' + score + '_min').val())) ?    -1 : parseInt(jQuery('#misscount_' + score + '_min').val()));
		this.params.misscount[score].max = (isNaN(parseInt(jQuery('#misscount_' + score + '_max').val())) ? 99999 : parseInt(jQuery('#misscount_' + score + '_max').val()));
		jQuery("[name=clearType_" + score + "]:checked").each(function(){thisTmp.params.cleartype[score].push(jQuery(this).val())});
	},
	setDefaultSearchParam: function() {
		jQuery("[name=series]").each(function(){jQuery(this).prop('checked', true)});
		jQuery("[name=releasetype]").each(function(){jQuery(this).prop('checked', true)});
		this.setScoreSearchParams('SPB', 0, 3);
		this.setScoreSearchParams('SPN');
		this.setScoreSearchParams('SPH');
		this.setScoreSearchParams('SPA');
		this.setScoreSearchParams('DPN');
		this.setScoreSearchParams('DPH');
		this.setScoreSearchParams('DPA');
		jQuery("#releasedate-min").val(jQuery("#releasedate-min option[selected]").val());
		jQuery("#releasedate-max").val(jQuery("#releasedate-max option[selected]").val());
		jQuery("#bitdate-min").val(jQuery("#bitdate-min option[selected]").val());
		jQuery("#bitdate-max").val(jQuery("#bitdate-max option[selected]").val());
		jQuery("#available").val(jQuery("#available option[selected]").val());
		jQuery("#unlocked").val(jQuery("#unlocked option[selected]").val());
		jQuery("#title").val('');
		jQuery("#genre").val('');
		jQuery("#artist").val('');
		jQuery("#opt_bpm_min").val('');
		jQuery("#opt_bpm_max").val('');
		jQuery('#opt_bpm_changing').val(0);
		jQuery("#searchopen").prop('checked', jQuery("#searchopen").attr('checked') == 'checked');
		jQuery("#singleopen").prop('checked', jQuery("#singleopen").attr('checked') == 'checked');
		jQuery("#extendopen").prop('checked', jQuery("#extendopen").attr('checked') == 'checked');
		jQuery("#search-folder").val(jQuery("#search-folder option[selected]").val());
		jQuery("#search-sort1").val(jQuery("#search-sort1 option[selected]").val());
		jQuery("#search-sort-order1").val(jQuery("#search-sort-order1 option[selected]").val());
		jQuery("#search-sort2").val(jQuery("#search-sort2 option[selected]").val());
		jQuery("#search-sort2-order").val(jQuery("#search-sort-order2 option[selected]").val());
		jQuery("#search-sort3").val(jQuery("#search-sort3 option[selected]").val());
		jQuery("#search-sort3-order").val(jQuery("#search-sort-order3 option[selected]").val());
		jQuery('#showdjlevel').val(jQuery("#showdjlevel option[selected]").val());
	},
	getSearchParamFromFavorite: function(optName) {
		if (!(optName in userJSON.searchOpts)) { return false; };
		this.setDefaultSearchParam();
		let paramObj = mergeDeeply(this.params, userJSON.searchOpts[optName]);
		jQuery("[name=series]").val(paramObj.series);
		jQuery("[name=releasetype]").val(paramObj.release.type);
		this.setScoreSearchParams('SPB',
								  paramObj.lv.SPB.min,
								  paramObj.lv.SPB.max,
								  paramObj.opt.SPB.cn,
								  paramObj.opt.SPB.bss,
								  paramObj.opt.SPB.hcn,
								  paramObj.opt.SPB.notes.min,
								  paramObj.opt.SPB.notes.max,
								  paramObj.djlevel.SPB.min,
								  paramObj.djlevel.SPB.max,
								  paramObj.exscore.SPB.min,
								  paramObj.exscore.SPB.max,
								  paramObj.misscount.SPB.min,
								  paramObj.misscount.SPB.max,
								  paramObj.cleartype.SPB.type);
		this.setScoreSearchParams('SPN',
								  paramObj.lv.SPN.min,
								  paramObj.lv.SPN.max,
								  paramObj.opt.SPN.cn,
								  paramObj.opt.SPN.bss,
								  paramObj.opt.SPN.hcn,
								  paramObj.opt.SPN.notes.min,
								  paramObj.opt.SPN.notes.max,
								  paramObj.djlevel.SPN.min,
								  paramObj.djlevel.SPN.max,
								  paramObj.exscore.SPN.min,
								  paramObj.exscore.SPN.max,
								  paramObj.misscount.SPN.min,
								  paramObj.misscount.SPN.max,
								  paramObj.cleartype.SPN.type);
		this.setScoreSearchParams('SPH',
								  paramObj.lv.SPH.min,
								  paramObj.lv.SPH.max,
								  paramObj.opt.SPH.cn,
								  paramObj.opt.SPH.bss,
								  paramObj.opt.SPH.hcn,
								  paramObj.opt.SPH.notes.min,
								  paramObj.opt.SPH.notes.max,
								  paramObj.djlevel.SPH.min,
								  paramObj.djlevel.SPH.max,
								  paramObj.exscore.SPH.min,
								  paramObj.exscore.SPH.max,
								  paramObj.misscount.SPH.min,
								  paramObj.misscount.SPH.max,
								  paramObj.cleartype.SPH.type);
		this.setScoreSearchParams('SPA',
								  paramObj.lv.SPA.min,
								  paramObj.lv.SPA.max,
								  paramObj.opt.SPA.cn,
								  paramObj.opt.SPA.bss,
								  paramObj.opt.SPA.hcn,
								  paramObj.opt.SPA.notes.min,
								  paramObj.opt.SPA.notes.max,
								  paramObj.djlevel.SPA.min,
								  paramObj.djlevel.SPA.max,
								  paramObj.exscore.SPA.min,
								  paramObj.exscore.SPA.max,
								  paramObj.misscount.SPA.min,
								  paramObj.misscount.SPA.max,
								  paramObj.cleartype.SPA.type);
		this.setScoreSearchParams('DPN',
								  paramObj.lv.DPN.min,
								  paramObj.lv.DPN.max,
								  paramObj.opt.DPN.cn,
								  paramObj.opt.DPN.bss,
								  paramObj.opt.DPN.hcn,
								  paramObj.opt.DPN.notes.min,
								  paramObj.opt.DPN.notes.max,
								  paramObj.djlevel.DPN.min,
								  paramObj.djlevel.DPN.max,
								  paramObj.exscore.DPN.min,
								  paramObj.exscore.DPN.max,
								  paramObj.misscount.DPN.min,
								  paramObj.misscount.DPN.max,
								  paramObj.cleartype.DPN.type);
		this.setScoreSearchParams('DPH',
								  paramObj.lv.DPH.min,
								  paramObj.lv.DPH.max,
								  paramObj.opt.DPH.cn,
								  paramObj.opt.DPH.bss,
								  paramObj.opt.DPH.hcn,
								  paramObj.opt.DPH.notes.min,
								  paramObj.opt.DPH.notes.max,
								  paramObj.djlevel.DPH.min,
								  paramObj.djlevel.DPH.max,
								  paramObj.exscore.DPH.min,
								  paramObj.exscore.DPH.max,
								  paramObj.misscount.DPH.min,
								  paramObj.misscount.DPH.max,
								  paramObj.cleartype.DPH.type);
		this.setScoreSearchParams('DPA',
								  paramObj.lv.DPA.min,
								  paramObj.lv.DPA.max,
								  paramObj.opt.DPA.cn,
								  paramObj.opt.DPA.bss,
								  paramObj.opt.DPA.hcn,
								  paramObj.opt.DPA.notes.min,
								  paramObj.opt.DPA.notes.max,
								  paramObj.djlevel.DPA.min,
								  paramObj.djlevel.DPA.max,
								  paramObj.exscore.DPA.min,
								  paramObj.exscore.DPA.max,
								  paramObj.misscount.DPA.min,
								  paramObj.misscount.DPA.max,
								  paramObj.cleartype.DPA.type);
		jQuery("#releasedate-min").val((this.checkSelectValue(jQuery("#releasedate-min")[0], paramObj.release.min)) ? paramObj.release.min : jQuery("#releasedate-min option[selected]").val());
		jQuery("#releasedate-max").val((this.checkSelectValue(jQuery("#releasedate-max")[0], paramObj.release.max)) ? paramObj.release.max : jQuery("#releasedate-max option[selected]").val());
		jQuery("#bitdate-min").val((this.checkSelectValue(jQuery("#bitdate-min")[0], paramObj.bitDate.min)) ? paramObj.bitDate.min : jQuery("#bitdate-min option[selected]").val());
		jQuery("#bitdate-max").val((this.checkSelectValue(jQuery("#bitdate-max")[0], paramObj.bitDate.max)) ? paramObj.bitDate.max : jQuery("#bitdate-max option[selected]").val());
		jQuery("#available").val(paramObj.available);
		jQuery("#unlocked").val(paramObj.unlocked);
		jQuery("#title").val(paramObj.title);
		jQuery("#genre").val(paramObj.genre);
		jQuery("#artist").val(paramObj.artist);
		jQuery("#opt_bpm_min").val( 0 < paramObj.BPM.min && paramObj.BPM.min < 9999 ? paramObj.BPM.min : '' );
		jQuery("#opt_bpm_max").val( 0 < paramObj.BPM.max && paramObj.BPM.max < 9999 ? paramObj.BPM.max : '' );
		jQuery('#opt_bpm_changing').val(paramObj.BPM.changing);
		jQuery("#searchopen").val(paramObj.searchopen);
		jQuery("#singleopen").val(paramObj.singleopen);
		jQuery("#extendopen").val(paramObj.extendopen);
		jQuery("#search-folder").val(paramObj.searchfolder);
		jQuery("#search-sort1").val(paramObj.searchsort1);
		jQuery("#search-sort1-order").val(paramObj.searchorder1);
		jQuery("#search-sort2").val(paramObj.searchsort2);
		jQuery("#search-sort2-order").val(paramObj.searchorder2);
		jQuery("#search-sort3").val(paramObj.searchsort3);
		jQuery("#search-sort3-order").val(paramObj.searchorder3);
		jQuery('#showdjlevel').val(paramObj.showdjlevel);
		return true;
	},
	setSearchParamToFavorite: function(optName) {
		if (!('searchOpts' in userJSON)) { return false; };
		this.getSearchParam();
		userJSON.searchOpts[optName] = JSON.parse(JSON.stringify(this.params));
		return true;
	},
	setScoreSearchParams: function(score, lvMin = 0, lvMax = 12, CN = 0, BSS = 0, HCN = 0, notesMin = '', notesMax = '',
								   djlevelMin = 0, djlevelMax = DJLevelArray2.length - 1, exscoreMin = '', exscoreMax = '', misscountMin = '', misscountMax = '', cleartype = ClearTypeArray) {
		jQuery('#' + score + '-levels')[0].noUiSlider.set([lvMin,lvMax]);
		jQuery('#opt_' + score + '_CN'). val( 0 <= CN  && CN  <= 2 ? CN  : '' );
		jQuery('#opt_' + score + '_BSS').val( 0 <= BSS && BSS <= 2 ? BSS : '' );
		jQuery('#opt_' + score + '_HCN').val( 0 <= HCN && HCN <= 2 ? HCN : '' );
		jQuery('#opt_' + score + '_notes_min').val( 0 < notesMin && notesMin < 99999 ? notesMin : '' );
		jQuery('#opt_' + score + '_notes_max').val( 0 < notesMax && notesMax < 99999 ? notesMax : '' );
		jQuery('#djlevel_' + score + '_levels')[0].noUiSlider.set([djlevelMin,djlevelMax]);
		jQuery('#exscore_' + score + '_min').val( 0 < exscoreMin && exscoreMin < 99999 ? exscoreMin : '' );
		jQuery('#exscore_' + score + '_max').val( 0 < exscoreMax && exscoreMax < 99999 ? exscoreMax : '' );
		jQuery('#misscount_' + score + '_min').val( 0 < misscountMin && misscountMin < 99999 ? misscountMin : '' );
		jQuery('#misscount_' + score + '_max').val( 0 < misscountMax && misscountMax < 99999 ? misscountMax : '' );
		jQuery("[name=clearType_" + score + "]").val(cleartype);
	},
	checkScore: function(score, scoretype) {
		if ( ['SPB','SPN','SPH','SPA','SPL','DPB','DPN','DPH','DPA','DPL'].indexOf(scoretype) == -1 ) { return true; };
		let lv = this.params.lv[scoretype];
		let opt = this.params.opt[scoretype];

		// 譜面無しの場合は条件に譜面なしを含む(=最小Lvが0)の場合にtrue。
		if ( !score ) { return (lv.min == 0); };

		// 譜面有りの場合、各種条件を満たすかチェック
		let lvcheck = ( ( lv.min <= score.Level ) && ( score.Level <= lv.max ) );
		let cn = true;
		switch (opt.cn) {
			case 1: cn = ("CN" in score);  break;
			case 2: cn = !("CN" in score); break;
			default: cn = true; break;
		}
		let bss = true;
		switch (opt.bss) {
			case 1: bss = ("BSS" in score);  break;
			case 2: bss = !("BSS" in score); break;
			default: bss = true; break;
		}
		let hcn = true;
		switch (opt.hcn) {
			case 1: hcn =    ("HCN" in score) || ("HBSS" in score);   break;
			case 2: hcn = !( ("HCN" in score) || ("HBSS" in score) ); break;
			default: hcn = true; break;
		}
		let notes = ( ( opt.notes.min <= score.Notes ) && ( score.Notes <= opt.notes.max ) );
		return ( lvcheck && cn && bss && hcn && notes );
	},
	checkSelectValue: function(selObj,hasValue) {
		for (i of selObj.options) {
			if (i.value == hasValue) { return true; };
		};
		return false;
	}
};

/**
 * google API scriptを読み込んで、gapi.load('client:auth2')を実行
 *
 * @param {*} callback - gapi.load('client:auth2')実行後のコールバック関数
 */
function gapiScriptLoad (callback = initClient) {
	// google API の読込
	let gapiElement = document.createElement("script");
	gapiElement.src = "https://apis.google.com/js/api.js";
	gapiElement.type = "text/javascript";
	if(gapiElement.addEventListener){
		gapiElement.onload = function () { gapi.load('client:auth2', callback); };
	}else{
		gapiElement.onreadystatechange = function () {
			if ("loaded" == gapiElement.readyState || "complete" == gapiElement.readyState){
				gapiElement.onreadystatechange = null;
				gapi.load('client:auth2', callback);
			};
		};
	}
	document.body.appendChild(gapiElement);
};

/**
 *  APIクライアント初期化および初期化後のサインイン処理
 *  listeners.
 */
function initClient() {
	gapi.client.init({
		apiKey: 'AIzaSyAFlNZZYOEoljQlhk8xHqLI5Y56jjThpQs',
		clientId: '889812503286-msunuum7pcq6gscuv8mfmvlqid4hkgm7.apps.googleusercontent.com',
		discoveryDocs: DISCOVERY_DOCS,
		scope: SCOPES
	}).then(function () {
		// 初期化直後のサインイン状態取得
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

		// サインイン状態により表示変更
		updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

		// ボタン押下時の処理追加
		jQuery('#googleSignin').click(function() { gapi.auth2.getAuthInstance().signIn(); });
		jQuery('#googleSignout').click(function() { gapi.auth2.getAuthInstance().signOut(); });
		jQuery('#gdfileget').click(function() { readUserJSON('googleDrive'); });

		// API有効化時に自動読込
		if ( jQuery('#gdid').val() != '' && Cookies.get('infinitas_LocalStorageEnable') != 1) { readUserJSON('googleDrive'); };
	}, function(error) {
		//appendPre(JSON.stringify(error, null, 2));
	});
};

/**
 * サインイン処理のコールバック関数
 * サインイン状態により画面表示を変更する
 * @param {boolean} isSignedIn
 */
function updateSigninStatus(isSignedIn) {
	if (isSignedIn) {
		jQuery('#gdid').attr('disabled', false);
		jQuery('#googleSignin').addClass('hidden');
		jQuery('#googleSignout').removeClass('hidden');
		jQuery('#gdfileget').removeClass('hidden');
		jQuery('#gdid').val( Cookies.get('infinitas_gdid') );
		jQuery('#gdid').removeClass('hidden');
		jQuery('#googleapiEnable').addClass('hidden');
		jQuery('#googleapiDisable').addClass('hidden');
	} else {
		jQuery('#gdid').attr('disabled', true);
		jQuery('#googleSignin').removeClass('hidden');
		jQuery('#googleSignout').addClass('hidden');
		jQuery('#gdfileget').addClass('hidden');
		jQuery('#gdid').val('');
		jQuery('#gdid').addClass('hidden');
		jQuery('#googleapiEnable').addClass('hidden');
		jQuery('#googleapiDisable').removeClass('hidden');
	}
};

/**
 * ファイルの内容を取得する
 * @param {string} fid ファイルID
 */
function getGoogleDriveFile(fid) {
	toastbox.FadeInandTimerFadeOut('google Driveからファイル読込中…');
	gapi.client.drive.files.get({
		fileId: fid,
		alt: 'media'
	}).then(function(obj){
		toastbox.FadeInandTimerFadeOut('google Driveから読込完了！');
		initializeUserJSON(obj.body);
		// FileIDをcookieに保存
		Cookies.set('infinitas_gdid',jQuery('#gdid').val(), {path: '', expires: 180, sameSite: 'strict'});

	},function(error) {
		toastbox.FadeInandTimerFadeOut('エラーが発生しました！');
		jQuery('#debug').empty();
		jQuery('#debug').append('<p>' + JSON.stringify(error, null, 2) + '</p>');
	});
};

/**
 * ファイル更新処理
 * @param {string} fileId ファイルID
 * @param {blob} contentBlob アップロードしたい内容
 * @param {function} callback コールバック関数
 */
function updateFileContent(fileId, contentBlob, callback) {
	let xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.onreadystatechange = function() {
	  if (xhr.readyState != XMLHttpRequest.DONE) { return; };
	  callback(xhr.response);
	};
	xhr.open('PATCH', 'https://www.googleapis.com/upload/drive/v3/files/' + fileId + '?uploadType=media');
	xhr.setRequestHeader('Authorization', 'Bearer ' + gapi.auth.getToken().access_token);
	xhr.send(contentBlob);
}

/**
 * 楽曲一覧を読み込んで、callbackを実行
 *
 * @param {*} callback - コールバック関数
 */
 function musiclistLoad(callback = handleClientLoad) {
	// google API の読込
	let musiclistElement = document.createElement("script");
	musiclistElement.src = "./musiclist.js";
	musiclistElement.type = "text/javascript";
	if(musiclistElement.addEventListener){
		musiclistElement.onload = function () { callback(); };
	}else{
		musiclistElement.onreadystatechange = function () {
			if ("loaded" == musiclistElement.readyState || "complete" == musiclistiElement.readyState){
				musiclistElement.onreadystatechange = null;
				callback();
			};
		};
	}
	document.body.appendChild(musiclistElement);
};

/**
 * webページロード完了後の処理
 */
function handleClientLoad() {
	// トーストボックスの設定
	obj = document.createElement('div');
	obj.classList.add('hidden');
	obj.id = 'toastbox';
	document.body.appendChild(obj);
	toastbox.setObject();

	// musiclist
	musics.JSON = musiclist.musics;
	musics.infoJSON = musiclist.info;
	musics.infoJSON.music_count = 0;
	musics.infoJSON.chart = {
		"all": 0,
		"single": { "all": 0, "beginner": 0, "normal": 0, "hyper": 0, "another": 0, "leggendaria": 0},
		"double": { "all": 0, "beginner": 0, "normal": 0, "hyper": 0, "another": 0, "leggendaria": 0}
	};

	delete musiclist;

	//
	toastbox.FadeInandTimerFadeOut('準備中…');
	if (musics.JSON.length > 0) {
		// 楽曲数・譜面数の確認
		for (item of musics.JSON) {
			if ( item.Release.Type != 'Unreleased' ) {
				musics.infoJSON.music_count++;
				if ( [Diff[0].Name] in item.Scores.Single ) { musics.infoJSON.chart.all++; musics.infoJSON.chart.single.all++; musics.infoJSON.chart.single.beginner++;    };
				if ( [Diff[1].Name] in item.Scores.Single ) { musics.infoJSON.chart.all++; musics.infoJSON.chart.single.all++; musics.infoJSON.chart.single.normal++;      };
				if ( [Diff[2].Name] in item.Scores.Single ) { musics.infoJSON.chart.all++; musics.infoJSON.chart.single.all++; musics.infoJSON.chart.single.hyper++;       };
				if ( [Diff[3].Name] in item.Scores.Single ) { musics.infoJSON.chart.all++; musics.infoJSON.chart.single.all++; musics.infoJSON.chart.single.another++;     };
				if ( [Diff[4].Name] in item.Scores.Single ) { musics.infoJSON.chart.all++; musics.infoJSON.chart.single.all++; musics.infoJSON.chart.single.leggendaria++; };
				if ( [Diff[0].Name] in item.Scores.Double ) { musics.infoJSON.chart.all++; musics.infoJSON.chart.double.all++; musics.infoJSON.chart.double.beginner++;    };
				if ( [Diff[1].Name] in item.Scores.Double ) { musics.infoJSON.chart.all++; musics.infoJSON.chart.double.all++; musics.infoJSON.chart.double.normal++;      };
				if ( [Diff[2].Name] in item.Scores.Double ) { musics.infoJSON.chart.all++; musics.infoJSON.chart.double.all++; musics.infoJSON.chart.double.hyper++;       };
				if ( [Diff[3].Name] in item.Scores.Double ) { musics.infoJSON.chart.all++; musics.infoJSON.chart.double.all++; musics.infoJSON.chart.double.another++;     };
				if ( [Diff[4].Name] in item.Scores.Double ) { musics.infoJSON.chart.all++; musics.infoJSON.chart.double.all++; musics.infoJSON.chart.double.leggendaria++; };
			};
		};

		// 曲名の自動補完
		let titleSet = new Set();
		musics.JSON.forEach(function(val){ titleSet.add(val.Title); });
		titleSet = new Set([...titleSet].sort());
		titleOptStr = '';
		titleSet.forEach(function(val){ titleOptStr += '<option value="' + val + '"></option>'; });
		document.getElementById('titlelist').innerHTML = titleOptStr;

		// ジャンル名の自動補完
		let genreSet = new Set();
		musics.JSON.forEach(function(val){ genreSet.add(val.Genre); });
		genreSet = new Set([...genreSet].sort());
		genreOptStr = '';
		genreSet.forEach(function(val){ genreOptStr += '<option value="' + val + '"></option>'; });
		document.getElementById('genrelist').innerHTML = genreOptStr;

		// アーティスト名の自動補完
		let artistSet = new Set();
		musics.JSON.forEach(function(val){ artistSet.add(val.Artist); });
		artistSet = new Set([...artistSet].sort());
		artistOptStr = '';
		artistSet.forEach(function(val){ artistOptStr += '<option value="' + val + '"></option>'; });
		document.getElementById('artistlist').innerHTML = artistOptStr;

		toastbox.FadeInandTimerFadeOut('データファイル読込完了');
		jQuery('info-lastupdated').append('データ更新日：' + dateFormat.format(new Date(musics.infoJSON.lastupdated), 'yyyy/MM/dd hh:mm'));
		jQuery('.infotable').append(
			'<tbody class="musiclistdata"><tr><th colspan="2" class="section2">全データ</th>' +
			'<td class="text-right">' + musics.infoJSON.music_count.toLocaleString() + '&nbsp;曲&nbsp;/&nbsp;' + musics.infoJSON.chart.all.toLocaleString() + '&nbsp;譜面</td>' +
			'<td class="text-right">' + musics.infoJSON.chart.single.all.toLocaleString() + '&nbsp;譜面</td>' +
			'<td class="spb text-right">' + musics.infoJSON.chart.single.beginner.toLocaleString() + '&nbsp;譜面</td>' +
			'<td class="spn text-right">' + musics.infoJSON.chart.single.normal.toLocaleString() + '&nbsp;譜面</td>' +
			'<td class="sph text-right">' + musics.infoJSON.chart.single.hyper.toLocaleString() + '&nbsp;譜面</td>' +
			'<td class="spa text-right">' + musics.infoJSON.chart.single.another.toLocaleString() + '&nbsp;譜面</td>' +
			'<td class="text-right">' + musics.infoJSON.chart.double.all.toLocaleString() + '&nbsp;譜面</td>' +
			'<td class="dpn text-right">' + musics.infoJSON.chart.double.normal.toLocaleString() + '&nbsp;譜面</td>' +
			'<td class="dph text-right">' + musics.infoJSON.chart.double.hyper.toLocaleString() + '&nbsp;譜面</td>' +
			'<td class="dpa text-right">' + musics.infoJSON.chart.double.another.toLocaleString() + '&nbsp;譜面</td>' +
			'</tr></tbody>');
		jQuery('#filter-button').prop('disabled',false);
	};

	// 検索条件のシリーズ項目作成
	let checkBoxArray = [];
	for (const prop in VerArray) { checkBoxArray.push(['series', Number(prop), true, VerArray[prop].VName, VerArray[prop].CustomCSSClass]); };
	makeCheckbox('seriesbox', checkBoxArray);

	// 検索条件のシリーズ項目変更時に全選択・全解除の表示変更
	jQuery('.series-checkbox').change(function() {
		toggleSelectLink('changeselect-series-ALL','series-checkbox', '全');
		toggleSelectLink('changeselect-series-CS','series-CS', 'CS作全');
	});

	// 検索条件のシリーズ項目に全選択・全解除のリンク追加
	toggleSelectLink('changeselect-series-ALL','series-checkbox', '全');
	toggleSelectLink('changeselect-series-CS','series-CS', 'CS作全');

	// 検索条件の可変BPMボタン押下時
	jQuery('#opt_bpm_changing').click(function() { toggleBPMOptButton(this); });
	jQuery('#opt_bpm_changing').change(function() { toggleBPMOptButton(this,true); });

	// 検索条件の譜面毎条件項目作成
	makeScorefilter('scorefilterbox',[ ['SPB',0,3],
										['SPN',0,12],
										['SPH',0,12],
										['SPA',0,12],
										['DPN',0,12],
										['DPH',0,12],
										['DPA',0,12] ]);

	// 検索条件のリリース条件項目作成
	let releaseButtonList = [ ['releasetype', 'Default',       true, 'デフォルト楽曲'],
							  ['releasetype', 'Monthly',       true, '特定月プレイ特典'],
							  ['releasetype', 'BIT',           true, 'BIT解禁'],
							  ['releasetype', 'DJP',           true, 'DJP解禁'],
							  ['releasetype', 'Championship1', true, 'championship&nbsp;#1', ['releasetype-championship']],
							  ['releasetype', 'Championship2', true, 'championship&nbsp;#2', ['releasetype-championship']],
							  ['releasetype', 'Championship3', true, 'championship&nbsp;#3', ['releasetype-championship']],
							  ['releasetype', 'Championship4', true, 'championship&nbsp;#4', ['releasetype-championship']] ];
	// 楽曲パック情報を追加
	for(let pid in packlist) {
		let appendCSS = ['releasetype-pack'];
		let matchResult = packlist[pid].shortName.match(/pack[A-Z][A-Za-z]+/);
		if ( matchResult != null ) { appendCSS.push('releasetype-' + matchResult[0]); };
		releaseButtonList.push(['releasetype', packlist[pid].shortName, true, packlist[pid].inputName, appendCSS] );
	};
	makeCheckbox('releasetypebox', releaseButtonList);

	// 検索条件のリリース条件項目変更時に全選択・全解除の表示変更
	jQuery('.releasetype-checkbox').change(function() {
		toggleSelectLink('changeselect-releasetype-ALL','releasetype-checkbox', '全');
		toggleSelectLink('changeselect-releasetype-championship','releasetype-championship', 'CH全');
		toggleSelectLink('changeselect-releasetype-Pack','releasetype-pack', 'パック全');
	});

	// 検索条件のリリース条件項目に全選択・全解除のリンク追加
	toggleSelectLink('changeselect-releasetype-ALL','releasetype-checkbox', '全');
	toggleSelectLink('changeselect-releasetype-championship','releasetype-championship', 'CH全');
	toggleSelectLink('changeselect-releasetype-Pack','releasetype-pack', 'パック全');

	// データ保存条件のパック購入状況項目作成
	let purchaseButtonList = [];
	for (let pid in packlist) {
		purchaseButtonList.push( ['purchase', 'Pack' + pid, false, packlist[pid].shortName + ' 未購入'] );
	};
	makeCheckbox('purchasebox',purchaseButtonList);

	// 日付のセレクトボックスを作成
	let lastDate = new Date();
	lastDate.setFullYear(lastDate.getFullYear() + 1);
	makeSelectMonth('bitdate-min', LaunchDate, lastDate, true, [new Date("2000-01-01"), "未指定"]);
	makeSelectMonth('bitdate-max', LaunchDate, lastDate, false, null, [new Date("2999-12-31"), "未指定"]);
	makeSelectMonth('releasedate-min', LaunchDate, now, true, [new Date("2000-01-01"), "未指定"]);
	makeSelectMonth('releasedate-max', LaunchDate, now, false, null, [new Date("2999-12-31"), "未指定"]);
	jQuery('#bitdate-min option:first-child, #releasedate-min option:first-child').attr('selected','');
	jQuery('#bitdate-max option:last-child,  #releasedate-max option:last-child').attr('selected','');

	// 日付セレクトで未指定(val=2000-01-01)の場合に至を無効化
	jQuery('#releasedate-min').change(function() {
		jQuery('#releasedate-max').prop('disabled', (jQuery(this).val() === '2000-01-01'));
	});
	jQuery('#bitdate-min').change(function() {
		jQuery('#bitdate-max').prop('disabled', (jQuery(this).val() === '2000-01-01'));
	});

	// 楽曲記録の検索条件を作成
	makeRecordfilter('recordfilterbox',[ ['SPB',0,DJLevelArray2.length - 1],
										 ['SPN',0,DJLevelArray2.length - 1],
										 ['SPH',0,DJLevelArray2.length - 1],
										 ['SPA',0,DJLevelArray2.length - 1],
										 ['DPN',0,DJLevelArray2.length - 1],
										 ['DPH',0,DJLevelArray2.length - 1],
										 ['DPA',0,DJLevelArray2.length - 1] ]);

	// ファイル選択ボタン押下時
	jQuery('#localfile').on('change', function() {
		if ('info' in userJSON) {
			if (!confirm('読込済みのデータがありますが、違うデータを読込みますか？')) { return false; };
		};
		readUserJSON('file');
	});

	// データ新規作成ボタン押下時
	jQuery('#newtext').on('click', function() {
		if ('info' in userJSON) {
			if (!confirm('読込済みのデータがありますが、新規作成しますか？')) { return false; };
		};
		readUserJSON('new');
	});

/**
	// API有効化ボタン押下時
	jQuery('#googleapiEnable').on('click', function() {
		gapiScriptLoad();
		Cookies.set('infinitas_gapiEnable', 1, {path: '', expires: 180, sameSite: 'strict'});
	});

	// API無効化ボタン押下時
	jQuery('#googleapiDisable').on('click', function() {
		Cookies.remove('infinitas_gapiEnable', {path: ''});
		// メッセージ表示したほうがわかりやすい
	});
**/

	// LocalStorage有効化ボタン押下時
	jQuery('#localStorageEnable').on('click', function() {
		Cookies.set('infinitas_LocalStorageEnable', 1, {path: '', expires: 180, sameSite: 'strict'});
		jQuery('#localStorageEnable').addClass('hidden');
		jQuery('#localStorageRead, #localStorageSave, #localStorageDisable').removeClass('hidden');
	});

	// LocalStorage読込ボタン押下時
	jQuery('#localStorageRead').on('click', function() {
		if ('info' in userJSON) {
			if (!confirm('読込済みのデータがありますが、新規作成しますか？')) { return false; };
		};
		readUserJSON('localstorage');
	});

	// LocalStorage保存ボタン押下時
	jQuery('#localStorageSave').on('click', function() {
		outputUserJSONtoLocalStorage();
		toastbox.FadeInandTimerFadeOut('LocalStorageに保存しました。');
	});

	// LocalStorage無効化ボタン押下時
	jQuery('#localStorageDisable').on('click', function() {
		Cookies.remove('infinitas_LocalStorageEnable', {path: ''});

		jQuery('#localStorageEnable').removeClass('hidden');
		jQuery('#localStorageRead, #localStorageSave, #localStorageDisable').addClass('hidden');
			toastbox.FadeInandTimerFadeOut('先に「データを新規作成」してください。');
	});

	// ライバル情報ボタン押下
	jQuery('#setrivalid').change(function() {
		jQuery("label[for='setrivalid']").text( ( jQuery(this).prop('checked') ? 'ライバル情報を非表示にする' : 'ライバル情報を表示する' ) );
	});

	// パックボタン押下時
	jQuery('.purchase input').change(function() {
		if ('packs' in userJSON) {
			togglePackButton(this);
		} else {
			jQuery(this).prop('checked', false);
			toastbox.FadeInandTimerFadeOut('先に「データを新規作成」してください。');
		};
	});

	// 譜面オプションボタン押下時
	jQuery('.score_opt input[type="number"]').click(function() { toggleScoreOptButton(this); });
	jQuery('.score_opt input[type="number"]').change(function() { toggleScoreOptButton(this,true); });

	// 検索条件お気に入りメニュー選択時
	jQuery('#searchFavorite').on('change', function() {
		if (jQuery(this).val() == '') {
			jQuery('#searchFavoriteNewName').removeClass('hidden');
			jQuery('#searchFavoriteNewName').val('');
			jQuery('#searchFavoriteRead, #searchFavoriteDelete').addClass('hidden');
		} else {
			jQuery('#searchFavoriteNewName').addClass('hidden');
			jQuery('#searchFavoriteNewName').val(jQuery(this).val());
			jQuery('#searchFavoriteRead, #searchFavoriteDelete').removeClass('hidden');
		};
	});

	// 検索条件お気に入り読込ボタン押下時
	jQuery('#searchFavoriteRead').on('click', function() {
		s.getSearchParamFromFavorite(jQuery('#searchFavorite').val());
		toastbox.FadeInandTimerFadeOut('検索条件「' + jQuery('#searchFavorite').val() + '」を読み込みました。');

		// 日付セレクトのページ読込直後の初期化処理
		jQuery('#releasedate-max').prop('disabled', (jQuery('#releasedate-min').val() === '2000-01-01'));
		jQuery('#bitdate-max').prop('disabled', (jQuery('#bitdate-min').val() === '2000-01-01'));
	});

	// 検索条件お気に入り保存ボタン押下時
	jQuery('#searchFavoriteSave').on('click', function() {
		if (jQuery('#searchFavoriteNewName').val() == '') {
			toastbox.FadeInandTimerFadeOut('保存用の名前を付けてください。');
			return false;
		};
		s.setSearchParamToFavorite(jQuery('#searchFavoriteNewName').val());
		toastbox.FadeInandTimerFadeOut('検索条件「' + jQuery('#searchFavoriteNewName').val() + '」を保存しました。');
	});

	// 検索条件お気に入り削除ボタン押下時
	jQuery('#searchFavoriteDelete').on('click', function() {
		// 確認メッセージ表示後、「いいえ」なら何もしない
		if (!confirm('検索条件「' + jQuery('#searchFavoriteNewName').val() + '」を削除しますか？')) { return false; };

		delete userJSON.searchOpts[jQuery('#searchFavoriteNewName').val()];
		toastbox.FadeInandTimerFadeOut('検索条件「' + jQuery('#searchFavoriteNewName').val() + '」を削除しました。');
	});

	// チェックボックスをラジオボタンとして使用してタブメニュー表示
	let csobj = jQuery('#musicsearch').find('input[data-checkgroup]');
	csobj.on('click',function() {
		let group = jQuery(this).attr('data-checkgroup');
		csobj.filter( function() { return jQuery(this).attr('data-checkgroup') == group; } ).not(this).prop('checked', false);
		if (jQuery(this).prop('checked')) {
			jQuery('.formtab-bottom').show();
		} else {
			jQuery('.formtab-bottom').hide();
		}
	});

	// 検索ボタン押下時
	jQuery('#filter-button').click(function() {
		let musicJSON = musics.JSON;
		let filteredJSON = [];
		let sortedJSON = [];

		try {

			// 検索終了まで検索ボタンを無効化
			jQuery(this).attr('disabled', true);
			s.getSearchParam();

			for (let i = 0; i < musicJSON.length; i++) {
				// バージョン情報を追加
				let sliceID = '0' + musicJSON[i].ID.substr(0,3);
				musicJSON[i]['VNo'] = Number(sliceID);
				musicJSON[i]['VName'] = VerArray[sliceID].VName;
				musicJSON[i]['VShortName'] = VerArray[sliceID].VShortName;

				// 譜面の存在確認
				SPB = ([Diff[0].Name] in musicJSON[i].Scores.Single) ? musicJSON[i].Scores.Single[Diff[0].Name] : {Level: 0, BPM: 0};
				SPN = ([Diff[1].Name] in musicJSON[i].Scores.Single) ? musicJSON[i].Scores.Single[Diff[1].Name] : {Level: 0, BPM: 0};
				SPH = ([Diff[2].Name] in musicJSON[i].Scores.Single) ? musicJSON[i].Scores.Single[Diff[2].Name] : {Level: 0, BPM: 0};
				SPA = ([Diff[3].Name] in musicJSON[i].Scores.Single) ? musicJSON[i].Scores.Single[Diff[3].Name] : {Level: 0, BPM: 0};
				SPL = ([Diff[4].Name] in musicJSON[i].Scores.Single) ? musicJSON[i].Scores.Single[Diff[4].Name] : {Level: 0, BPM: 0};
				DPB = ([Diff[0].Name] in musicJSON[i].Scores.Double) ? musicJSON[i].Scores.Double[Diff[0].Name] : {Level: 0, BPM: 0};
				DPN = ([Diff[1].Name] in musicJSON[i].Scores.Double) ? musicJSON[i].Scores.Double[Diff[1].Name] : {Level: 0, BPM: 0};
				DPH = ([Diff[2].Name] in musicJSON[i].Scores.Double) ? musicJSON[i].Scores.Double[Diff[2].Name] : {Level: 0, BPM: 0};
				DPA = ([Diff[3].Name] in musicJSON[i].Scores.Double) ? musicJSON[i].Scores.Double[Diff[3].Name] : {Level: 0, BPM: 0};
				DPL = ([Diff[4].Name] in musicJSON[i].Scores.Double) ? musicJSON[i].Scores.Double[Diff[4].Name] : {Level: 0, BPM: 0};

				// 解禁BITの計算
				if ("BitDate" in musicJSON[i].Release) {
					BLv = Number(SPB.Level) + Number(DPB.Level);
					NLv = Number(SPN.Level) + Number(DPN.Level);
					HLv = Number(SPH.Level) + Number(DPH.Level);
					ALv = Number(SPA.Level) + Number(DPA.Level);
					LLv = Number(SPL.Level) + Number(DPL.Level);

					musicJSON[i].Release.Bit = {};
					if ( BLv > 0 ) { musicJSON[i].Release.Bit.Beginner    = BLv * 500; };
					if ( NLv > 0 ) { musicJSON[i].Release.Bit.Normal      = NLv * 500; };
					if ( HLv > 0 ) { musicJSON[i].Release.Bit.Hyper       = HLv * 500; };
					if ( ALv > 0 ) { musicJSON[i].Release.Bit.Another     = ALv * 500; };
					if ( LLv > 0 ) { musicJSON[i].Release.Bit.Leggendaria = LLv * 500; };
				};

				// 表示用BPM文字列の作成
				let tmpBPM = [...new Set([Number(SPB.BPM), Number(SPN.BPM), Number(SPH.BPM), Number(SPA.BPM), Number(SPL.BPM),
										  Number(DPB.BPM), Number(DPN.BPM), Number(DPH.BPM), Number(DPA.BPM), Number(DPL.BPM)] )].filter(Boolean);
				musicJSON[i].BPM = (tmpBPM.length > 1) ? '-' : tmpBPM[0];
			};

		} catch(e) {
			jQuery('#debug').text('検索準備 / ' + e.lineNumber+ ' / ' + e.toString());
		};
		try {
			filteredJSON = musics.filter(musicJSON);
		} catch(e) {
			jQuery('#debug').text('filteredJSON / ' + e.lineNumber+ ' / ' + e.toString());
		};
		try {
			sortedJSON = musics.sort(filteredJSON);
		} catch(e) {
			jQuery('#debug').text('sortedJSON / ' + e.lineNumber+ ' / ' + e.toString());
		};
		try {
			musics.write(sortedJSON);
		} catch(e) {
			jQuery('#debug').text('musics.write / ' + e.lineNumber+ ' / ' + e.toString());
		};

		jQuery(this).attr('disabled', false);
	});

	// 検索条件のリセットボタン押下時
	jQuery('#formreset').click(function() {
		s.setDefaultSearchParam();

		// 譜面検索条件ボタン・購入済みパックボタンのクリックイベントを実行しておく
		jQuery('.score_opt input[type="number"]').each(function() { toggleScoreOptButton(this, true); });
		jQuery('.purchase input').each(function() { togglePackButton(this, true); });
		jQuery('#opt_bpm_changing').each(function() { toggleBPMOptButton(this, true); });
	});

	// 新曲追加用フォームの入力時
	jQuery('#formtab-8_content').find('input, textarea#new_comment').change(function() {
		newMusic.makeJSON();
	});

	// LocalStorageの初期化
	if (Cookies.get('infinitas_LocalStorageEnable') == 1) {
		readUserJSON('localstorage');

		// ボタンの表示設定
		jQuery('#localStorageEnable').addClass('hidden');
		jQuery('#localStorageRead, #localStorageSave, #localStorageDisable').removeClass('hidden');
	} else {
		// ボタンの表示設定
		jQuery('#localStorageEnable').removeClass('hidden');
		jQuery('#localStorageRead, #localStorageSave, #localStorageDisable').addClass('hidden');
	};

/**
	// googleAPIクライアントの初期化
	if (Cookies.get('infinitas_gapiEnable') == 1) {
		gapiScriptLoad();

		// ボタンの表示設定
		jQuery('#googleapiEnable').addClass('hidden');
		jQuery('#googleSignin, #gdfileget, #googleSignout, #googleapiDisable, #gdid').removeClass('hidden');
	} else {
		// ボタンの表示設定
		jQuery('#googleapiEnable').removeClass('hidden');
		jQuery('#googleSignin, #gdfileget, #googleSignout, #googleapiDisable, #gdid').addClass('hidden');
	};
**/

	// 再読み込み対策(開閉・ボタンの見た目を初期化)
	jQuery('.score_opt input[type="number"]').each(function() { toggleScoreOptButton(this, true); });
	jQuery('.purchase input').each(function() { togglePackButton(this, true); });
	jQuery('#opt_bpm_changing').each(function() { toggleBPMOptButton(this, true); });
	csobj.filter( function() { return jQuery(this).attr('data-checkgroup') == 'formtab'; } ).prop('checked', false);

	// 日付セレクトのページ読込直後の初期化処理
	jQuery('#releasedate-max').prop('disabled', (jQuery('#releasedate-min').val() === '2000-01-01'));
	jQuery('#bitdate-max').prop('disabled', (jQuery('#bitdate-min').val() === '2000-01-01'));

	// エラーメッセージ表示エリアの取得
	JSONmsgObj = document.getElementById('json-message');
};

jQuery(function() { musiclistLoad(); });

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
let JSONmsgObj = jQuery('#json-message');

let VerArray = { "001": {"VName":"1st style",     "VShortName":"1st"},
                 "002": {"VName":"substream",     "VShortName":"sub"},
                 "003": {"VName":"2nd style",     "VShortName":"2nd"},
                 "004": {"VName":"3rd style",     "VShortName":"3rd"},
                 "005": {"VName":"4th style",     "VShortName":"4th"},
                 "006": {"VName":"5th style",     "VShortName":"5th"},
                 "007": {"VName":"6th style",     "VShortName":"6th"},
                 "008": {"VName":"7th style",     "VShortName":"7th"},
                 "009": {"VName":"8th style",     "VShortName":"8th"},
                 "010": {"VName":"9th style",     "VShortName":"9th"},
                 "011": {"VName":"10th style",    "VShortName":"10th"},
                 "012": {"VName":"IIDX RED",      "VShortName":"RED"},
                 "013": {"VName":"HAPPY SKY",     "VShortName":"HS"},
                 "014": {"VName":"DistorteD",     "VShortName":"DD"},
                 "015": {"VName":"GOLD",          "VShortName":"GLD"},
                 "016": {"VName":"DJ TROOPERS",   "VShortName":"DJT"},
                 "017": {"VName":"EMPRESS",       "VShortName":"EMP"},
                 "018": {"VName":"SIRIUS",        "VShortName":"SIR"},
                 "019": {"VName":"Resort Anthem", "VShortName":"RA"},
                 "020": {"VName":"Lincle",        "VShortName":"Lin"},
                 "021": {"VName":"tricolo",       "VShortName":"tri"},
                 "022": {"VName":"SPADA",         "VShortName":"SPA"},
                 "023": {"VName":"PENDUAL",       "VShortName":"PEN"},
                 "024": {"VName":"copula",        "VShortName":"cop"},
                 "025": {"VName":"SINOBUZ",       "VShortName":"SIN"},
                 "026": {"VName":"CANNON BALLERS","VShortName":"CB"},
                 "027": {"VName":"Rootage",       "VShortName":"Rt"},
                 "028": {"VName":"HEROIC VERSE",  "VShortName":"HV"},
                 "029": {"VName":"BISTROVER",     "VShortName":"BIS"},
                 "999": {"VName":"INFINITAS",     "VShortName":"INF"}
};

let packlist = { '0000001': {'type':'Standard',  'name':'楽曲パック vol.1',                            'inputName':'楽曲パックVol.1',  'shortName':'Pack1',   'inputid':'#purchase-Pack0000001'},
                 '0000002': {'type':'Standard',  'name':'楽曲パック vol.2',                            'inputName':'楽曲パックVol.2',  'shortName':'Pack2',   'inputid':'#purchase-Pack0000002'},
                 '0000003': {'type':'Standard',  'name':'楽曲パック vol.3',                            'inputName':'楽曲パックVol.3',  'shortName':'Pack3',   'inputid':'#purchase-Pack0000003'},
                 '0000004': {'type':'Standard',  'name':'楽曲パック vol.4',                            'inputName':'楽曲パックVol.4',  'shortName':'Pack4',   'inputid':'#purchase-Pack0000004'},
                 '0000005': {'type':'Standard',  'name':'楽曲パック vol.5',                            'inputName':'楽曲パックVol.5',  'shortName':'Pack5',   'inputid':'#purchase-Pack0000005'},
                 '0000006': {'type':'Standard',  'name':'楽曲パック vol.6',                            'inputName':'楽曲パックVol.6',  'shortName':'Pack6',   'inputid':'#purchase-Pack0000006'},
                 '0000007': {'type':'Standard',  'name':'楽曲パック vol.7',                            'inputName':'楽曲パックVol.7',  'shortName':'Pack7',   'inputid':'#purchase-Pack0000007'},
                 '0000008': {'type':'Standard',  'name':'楽曲パック vol.8',                            'inputName':'楽曲パックVol.8',  'shortName':'Pack8',   'inputid':'#purchase-Pack0000008'},
                 '0000009': {'type':'Standard',  'name':'楽曲パック vol.9',                            'inputName':'楽曲パックVol.9',  'shortName':'Pack9',   'inputid':'#purchase-Pack0000009'},
                 '0000010': {'type':'Standard',  'name':'楽曲パック vol.10',                           'inputName':'楽曲パックVol.10', 'shortName':'Pack10',  'inputid':'#purchase-Pack0000010'},
                 '0000011': {'type':'Standard',  'name':'楽曲パック vol.11',                           'inputName':'楽曲パックVol.11', 'shortName':'Pack11',  'inputid':'#purchase-Pack0000011'},
                 '0000012': {'type':'Standard',  'name':'楽曲パック vol.12',                           'inputName':'楽曲パックVol.12', 'shortName':'Pack12',  'inputid':'#purchase-Pack0000012'},
                 '0000013': {'type':'Standard',  'name':'楽曲パック vol.13',                           'inputName':'楽曲パックVol.13', 'shortName':'Pack13',  'inputid':'#purchase-Pack0000013'},
                 '0010001': {'type':'Startar',   'name':'スタートアップセレクション 楽曲パック vol.1', 'inputName':'SSパックVol.1',    'shortName':'PackSS1', 'inputid':'#purchase-Pack0010001'},
                 '0020001': {'type':'PopnMusic', 'name':'pop\'n music セレクション 楽曲パック vol.1',  'inputName':'PMパックVol.1',    'shortName':'PackPM1', 'inputid':'#purchase-Pack0020001'}, };

let headerLine = [
    ['v01-header', 'par-version','1st style'],
    ['v02-header', 'par-version','substream'],
    ['v03-header', 'par-version','2nd style'],
    ['v04-header', 'par-version','3rd style'],
    ['v05-header', 'par-version','4th style'],
    ['v06-header', 'par-version','5th style'],
    ['v07-header', 'par-version','6th style'],
    ['v08-header', 'par-version','7th style'],
    ['v09-header', 'par-version','8th style'],
    ['v10-header', 'par-version','9th style'],
    ['v11-header', 'par-version','10th style'],
    ['v12-header', 'par-version','IIDXRED'],
    ['v13-header', 'par-version','HAPPY SKY'],
    ['v14-header', 'par-version','DistorteD'],
    ['v15-header', 'par-version','GOLD'],
    ['v16-header', 'par-version','DJ TROOPERS'],
    ['v17-header', 'par-version','EMPRESS'],
    ['v18-header', 'par-version','SIRIUS'],
    ['v19-header', 'par-version','Resort Anthem'],
    ['v20-header', 'par-version','Lincle'],
    ['v21-header', 'par-version','tricoro'],
    ['v22-header', 'par-version','SPADA'],
    ['v23-header', 'par-version','PENDUAL'],
    ['v24-header', 'par-version','copula'],
    ['v25-header', 'par-version','SINOBUZ'],
    ['v26-header', 'par-version','CANNON BALLERS'],
    ['v27-header', 'par-version','Rootage'],
    ['v28-header', 'par-version','HEROIC VERSE'],
    ['v29-header', 'par-version','BISTROVER'],
    ['v999-header','par-version','INFINITAS'] ];

let BPMArray = [    '-99','100-109','110-119','120-129','130-139','140-149','150-159','160-169','170-179','180-189',
                '190-199','200-209','210-219','220-',   'BPM_CHANGE'];

let NotesArray = [      '-99',  '100-199',  '200-299',  '300-399',  '400-499',  '500-599',  '600-699',  '700-799',  '800-899',  '900-999',
                  '1000-1099','1100-1199','1200-1299','1300-1399','1400-1499','1500-1599','1600-1699','1700-1799','1800-1899','1900-1999',
                  '2000-',    'NO'];

let DifficultNameArray = ['Beginner', 'Normal', 'Hyper', 'Another', 'Leggendaria'];

let userJSON = {};
let confirmWindow = true;

let PROJECT_ID = 'infinitas-musiclist';

// Array of API discovery doc URLs for APIs used by the quickstart
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
let SCOPES = 'https://www.googleapis.com/auth/drive';

function zeroPadding(num,length){
    if (String(num).length >= length ) { return String(num); }
    else {return ('0'.repeat(length) + num).slice(-length); };
};

var dateFormat = {
    _fmt : {
        hh: function(date) { return ('0' + date.getHours()).slice(-2); },
        h: function(date) { return date.getHours(); },
        mm: function(date) { return ('0' + date.getMinutes()).slice(-2); },
        m: function(date) { return date.getMinutes(); },
        ss: function(date) { return ('0' + date.getSeconds()).slice(-2); },
        dd: function(date) { return ('0' + date.getDate()).slice(-2); },
        d: function(date) { return date.getDate(); },
        s: function(date) { return date.getSeconds(); },
        yyyy: function(date) { return date.getFullYear() + ''; },
        yy: function(date) { return (date.getYear() + '').slice(-2); },
        t: function(date) { return date.getDate()<=3 ? ["st", "nd", "rd"][date.getDate()-1]: 'th'; },
        w: function(date) {return ["Sun", "$on", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]; },
        MMMM: function(date) { return ["January", "February", "$arch", "April", "$ay", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]; },
        MMM: function(date) {return ["Jan", "Feb", "$ar", "Apr", "$ay", "Jun", "Jly", "Aug", "Spt", "Oct", "Nov", "Dec"][date.getMonth()]; },  
        MM: function(date) { return ('0' + (date.getMonth() + 1)).slice(-2); },
        M: function(date) { return date.getMonth() + 1; },
        $: function(date) {return 'M';}
    },
    _priority : ["hh", "h", "mm", "m", "ss", "dd", "d", "s", "yyyy", "yy", "t", "w", "MMMM", "MMM", "MM", "M", "$"],
    format: function(date, format){return this._priority.reduce((res, fmt) => res.replace(fmt, this._fmt[fmt](date)), format)}
}

/** 参考 ： https://gist.github.com/kawanet/5553478
 * カタカナ・ひらがなを変換する関数
 * @param {String} src - 変換したい文字列
 * @param {String} to  - どちらに変換するか ('HtoK' or 'KtoH')
 * @returns {String}   - 変換後の文字列
 */
function convKana(src, to = 'KtoH') {
    switch (to) {
        case 'HtoK':
            return src.replace(/[\u30a1-\u30f6]/g, function(match) {
                var chr = match.charCodeAt(0) - 0x60;
                return String.fromCharCode(chr);
            });
            break;
        case 'KtoH':
            return src.replace(/[\u3041-\u3096]/g, function(match) {
                var chr = match.charCodeAt(0) + 0x60;
                return String.fromCharCode(chr);
            });
            break;
        default:
            return src;
            break;
    };
};

function pushheaderLine(prefix, className, label, values, isLabelWithVal = true) {
    for(let val of values){
        headerLine.push([prefix + val + '-header', className, label + (isLabelWithVal ? val : '')]);
    }
};

/**
 * ローカルファイルの読込
 *
 * @param 
 * @return なし
 *
**/
function readUserJSONfromGoogleDrive(fid, callback=initializeUserJSON){
    try {
        let retval = false;
        let req = gapi.client.drive.files.get({
            fileId: fid,
            alt: 'media'
        });
        req.then(function(obj){
            retval = obj.body;
        },function(error) {
            jQuery('#debug').empty();
            jQuery('#debug').append('<p>' + JSON.stringify(error, null, 2) + '</p>');
            JSONmsgObj.html('<span class="warn">google Driveでエラーが発生しました！ / ' + JSON.stringify(error, null, 2) + '</span>');
        });
        return retval;
    } catch (e) {
        // エラー時はメッセージ表示
        JSONmsgObj.html('<span class="warn">google Driveでエラーが発生しました！</span>');
        return false;
    };
}

/**
 * ローカルファイルの読込
 *
 * @param 
 * @return なし
 *
**/
function readUserJSONfromLocalFile(fileObj, callback=initializeUserJSON){
    let r = new FileReader();

    r.onload = function(reader) {
        if (!checkUserJSON(reader.target.result)) { return false; };

        jQuery('#localfilename').text('ファイル名：' + fileObj.name + ' 読込済');
        toastbox.FadeInandTimerFadeOut(fileObj.name + ' を読み込みました。');

        callback(reader.target.result);
    };

    try {
        r.readAsText(fileObj);
    } catch (e) {
        // エラー時はメッセージ表示
        JSONmsgObj.html('<span class="warn">readUserJSONfromLocalFile / 指定したファイルが読み込めませんでした！</span>');
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

        toastbox.FadeInandTimerFadeOut('ローカルストレージのデータを読み込みました。');
        callback(result);
    } catch (e) {
        // エラー時はメッセージ表示
        JSONmsgObj.html('<span class="warn">ローカルストレージが読み込めませんでした！</span>');
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
        JSONmsgObj.html('<span class="warn">ローカルストレージに書き込めませんでした！</span>');
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
function readUserJSON(readType='jsonarea', obj=jQuery('#userjsonarea')) {
    let jsonData = {};

    if (readType == "new") {
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
            case 'file'         : readUserJSONfromLocalFile(jQuery('#localfile')[0].files[0]);    break;
            case 'googleDrive'  : readUserJSONfromGoogleDrive();  break;
        };
    };
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
        JSONmsgObj.html('<span class="warn">JSON.parseが出来ませんでした！</span>');
        return false;
    }

    // userJSONの項目チェック
    if ( !("info" in parsedJSON) ) {         JSONmsgObj.html('<span class="warn">JSON内に"info"が見つかりません！</span>');         return false; };
    if ( !("id" in parsedJSON.info) ) {      JSONmsgObj.html('<span class="warn">JSON内に"info.id"が見つかりません！</span>');      return false; };
    if ( !("created" in parsedJSON.info) ) { JSONmsgObj.html('<span class="warn">JSON内に"info.created"が見つかりません！</span>'); return false; };
    if ( !("updated" in parsedJSON.info) ) { JSONmsgObj.html('<span class="warn">JSON内に"info.updated"が見つかりません！</span>'); return false; };
    if ( !("musics" in parsedJSON) ) {       JSONmsgObj.html('<span class="warn">JSON内に"musics"が見つかりません！</span>');       return false; };
    if ( !("packs" in parsedJSON) ) {        JSONmsgObj.html('<span class="warn">JSON内に"packs"が見つかりません！</span>');        return false; };

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
        JSONmsgObj.html('<span class="warn">発生関数 : initializeUserJSON / エラー / JSON.parseが失敗しました。</span>');
        return;
    };

    // info
    userJSON.info = jsonData.info;

    // 楽曲情報
    userJSON.musics = {};
    for (item of musics.JSON) {
        hasID =      (item.ID in jsonData.musics);
        hasCanplay = (hasID && ('Canplay' in jsonData.musics[item.ID]));
        hasScores =  (hasID && ('EXScores'  in jsonData.musics[item.ID]));
        
        userJSON.musics[item.ID] = {
            'title': ( hasID && ('title' in jsonData.musics[item.ID])) ? jsonData.musics[item.ID].title : item.Title,
            'EXScores':{
                'Beginner'   : ( hasID && hasScores && ('Beginner'    in jsonData.musics[item.ID].EXScores)) ? jsonData.musics[item.ID].EXScores.Beginner    : '0',
                'Normal'     : ( hasID && hasScores && ('Normal'      in jsonData.musics[item.ID].EXScores)) ? jsonData.musics[item.ID].EXScores.Normal      : '0',
                'Hyper'      : ( hasID && hasScores && ('Hyper'       in jsonData.musics[item.ID].EXScores)) ? jsonData.musics[item.ID].EXScores.Hyper       : '0',
                'Another'    : ( hasID && hasScores && ('Another'     in jsonData.musics[item.ID].EXScores)) ? jsonData.musics[item.ID].EXScores.Another     : '0',
                'Leggendaria': ( hasID && hasScores && ('Leggendaria' in jsonData.musics[item.ID].EXScores)) ? jsonData.musics[item.ID].EXScores.Leggendaria : '0',
            }
        };
        if (item.Release.Type != 'Default') {
            userJSON.musics[item.ID].Canplay = {
                'Beginner'   : ( hasID && hasCanplay && ('Beginner'    in jsonData.musics[item.ID].Canplay)) ? jsonData.musics[item.ID].Canplay.Beginner    : '0',
                'Normal'     : ( hasID && hasCanplay && ('Normal'      in jsonData.musics[item.ID].Canplay)) ? jsonData.musics[item.ID].Canplay.Normal      : '0',
                'Hyper'      : ( hasID && hasCanplay && ('Hyper'       in jsonData.musics[item.ID].Canplay)) ? jsonData.musics[item.ID].Canplay.Hyper       : '0',
                'Another'    : ( hasID && hasCanplay && ('Another'     in jsonData.musics[item.ID].Canplay)) ? jsonData.musics[item.ID].Canplay.Another     : '0',
                'Leggendaria': ( hasID && hasCanplay && ('Leggendaria' in jsonData.musics[item.ID].Canplay)) ? jsonData.musics[item.ID].Canplay.Leggendaria : '0',
            };
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
        jQuery(packlist[pid].inputid).prop('checked',(userJSON.packs[pid].purchased === '1'));
        togglePackButton(jQuery('#purchase-Pack' + pid), true);
    };

    // infoを表示
    jQuery('#userJSON_djname').text(userJSON.info.id);
    jQuery('#userJSON_created').text(userJSON.info.created);
    jQuery('#userJSON_updated').text(userJSON.info.updated);

    // ダウンロードボタンを有効化
    jQuery('#downloadButton').removeClass('hidden');
    jQuery('#downloadButton').show('fast');
    blob = new Blob([JSON.stringify(userJSON, undefined, 2)], {type: 'application\/json'});
    url = URL.createObjectURL(blob);

    jQuery('#downloadButton').attr({"href": url, "download": "user.json"});

    // 検索条件：解禁状況を有効化
    jQuery("#unlocked").prop('disabled',false);

    // googleログイン済で、FileIDが入力済の状態であればFileIDをcookieに保存
    if (jQuery('#gdid').val() != ''){ Cookies.set('infinitas_gdid',jQuery('#gdid').val(), {path: '', expires: 31, sameSite: 'strict'}); };
};

 /**
 * ヘッダー行の作成
 *
 * @param {{String,String,String}...} items - {id名, class名, 表示テキスト}の配列
 * @return なし
 *
**/
function makeHeaderLine(items) {
    let addHtml = '';
    for(let item of items){
        addHtml += '<tbody id="' + item[0] + '" class="headertbody"><tr class="headerline ' + item[1] + '"><th colspan="13"><div class="vername">' + item[2] +'</div></th></tr></tbody>';
    };

    jQuery('.musiclist').append(addHtml);
    jQuery('.musiclist tbody').hide();

};

/**
 * 検索条件のシリーズ項目の作成
 *
 * @param {String}  target  - 対象セレクトタグのid(jQueryのセレクタ)
 * @param {{String,String,Boolean,String,{String, ... }}, ... } items - {name属性, VNo, isChecked?, 表示テキスト, {追加クラス, …}}の配列
 * @return なし
 *
**/
function makeCheckbox(target,items) {
    let addHtml = '';
    for(let item of items){
        optClass = '';
        if (Array.isArray(item[4])) {
            for(let val of item[4]){ optClass += ' ' + val; };
        };
        addHtml += '<div class="vname">' +
                   '<input id="' + item[0] + '-' + item[1] + '" name="' + item[0] + '" type="checkbox" value="' + item[1] + '" class="' + item[0] + '-checkbox' + optClass + '" ' + (item[2] ? 'checked' : '') + ' />' +
                   '<label for="' + item[0] + '-' + item[1] +'">' + item[3] + '</label>' +
                   '</div>';
    };
    jQuery(target).append(addHtml);
};

/**
 * 月選択用のセレクトボックス要素を作成
 *
 * @param {String}  target  - 対象セレクトタグのid(jQueryのセレクタ)
 *        {Date}    start   - 開始
 *        {Date}    end     - 終了
 *        {boolean} isFirst - true = 月初, false = 月末 をvalueに設定
 * @return なし
 *
**/
function makeSelectMonth(target,start,end,isFirst) {
    let tag = jQuery(target);
    // 開始・終了日を取得 (isFirst=Trueの時、指定月の月初日を取得。falseの時、翌月の0日(=月末日)を取得。)
    let cDate = isFirst ? new Date(start.getFullYear(), start.getMonth(), 1) : new Date(start.getFullYear(), start.getMonth() + 1, 0);
    let endDate = isFirst ? new Date(end.getFullYear(), end.getMonth() + 1, 1) : new Date(end.getFullYear(), end.getMonth() + 2, 0);
    do {
        let tY = cDate.getFullYear();
        let tM = cDate.getMonth() + 1;
        let tD = cDate.getDate();
        tag.append(jQuery('<option>')
            .val(tY + '-' + zeroPadding(tM,2) + '-' + zeroPadding(tD,2))
            .text(tY + '/' + zeroPadding(tM,2) ));
        cDate.setMonth(tM + (isFirst ? 0 : 1),(isFirst ? 1 : 0));
    } while( endDate >= cDate );
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
        let tY = cDate.getFullYear();
        let tM = cDate.getMonth() + 1;
        let tD = cDate.getDate();
        returnArr.push('' + tY + (withMonth ? zeroPadding(tM,2) : '') + (withDay ? zeroPadding(tD,2) : ''))
        if (withDay) {cDate.setDate(tD + 1); }
        else if (withMonth) { cDate.setMonth(tM); }
        else { cDate.setFullYear(tY + 1); };
    } while( endDate >= cDate );
    return returnArr;
};

/**
 * 全選択・全解除のリンク切り替え
 *
 * @param {String}  linkTarget   - 対象タグのid(jQueryのセレクタ)
 *        {String}  checkTargets - 対象チェックボックスのclass(jQueryのセレクタ)
 * @return なし
 *
**/
function toggleSelectLink(linkTarget,checkTarget, linkText){
    let tag = jQuery(linkTarget);
    let chktag = jQuery('.' + checkTarget);

    let values = new Set();
    chktag.each(function(i,e){ values.add(jQuery(e).prop('checked')); });

    if (values.has(true)) {
        tag.html('<a href="#" onclick="jQuery(\'input.' + checkTarget + '\').prop(\'checked\', false); toggleSelectLink(\'' + linkTarget + '\',\'' + checkTarget + '\', \'' + linkText + '\'); return false;">&nbsp;' + linkText + '解除&nbsp;</a>');
    } else {
        tag.html('<a href="#" onclick="jQuery(\'input.' + checkTarget + '\').prop(\'checked\', true); toggleSelectLink(\'' + linkTarget + '\',\'' + checkTarget + '\', \'' + linkText + '\'); return false;">&nbsp;' + linkText + '選択&nbsp;</a>');
    };
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
        let CN_input = '<input id="opt_' + item[0] + '_CN" name="opt_' + item[0] + '_CN" type="number" class="opt hidden" value="0" /><label for="opt_' + item[0] + '_CN">CN : -</label>';
        let BSS_input = '<input id="opt_' + item[0] + '_BSS" name="opt_' + item[0] + '_BSS" type="number" class="opt hidden" value="0" /><label for="opt_' + item[0] + '_BSS">BSS : -</label>';
        let HCN_input = '<input id="opt_' + item[0] + '_HCN" name="opt_' + item[0] + '_HCN" type="number" class="opt hidden" value="0" /><label for="opt_' + item[0] + '_HCN">HCN : -</label>';
        let notes_min_input = '<input id="opt_' + item[0] + '_notes_min" name="opt_' + item[0] + '_notes_min" type="text" placeholder="0" class="input-60" />';
        let notes_max_input = '<input id="opt_' + item[0] + '_notes_max" name="opt_' + item[0] + '_notes_max" type="text" placeholder="99999" class="input-60" />';
        addHtml += '<div class="inblock sliderbox">' +
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
                   '</div>' +
                   ((item[0] === items.slice(-1)[0][0]) ? '' : '<hr class="clearfix" />');
    };
    jQuery(target).append(addHtml);

    for (item of items) {
        slider = jQuery('#' + item[0] + '-levels')[0];
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
    
        let nodes = [jQuery('#' + item[0] + '-levels-min'), jQuery('#' + item[0] + '-levels-max')];
        jQuery(slider)[0].noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
            nodes[handle].text(values[handle] == 0 ? '無' : values[handle]);
        });
    };
};

function toggleScoreOptButton(obj, noToggle = false) {
    let jqobj = jQuery(obj);
    let objid = jqobj.attr('id');
    let optText = ["–", "有", "無"];

    if (!noToggle) { jqobj.val(optText.length - 1 <= Number(jqobj.val()) ? 0 : Number(jqobj.val()) + 1); };
    if (jqobj.val() == 0) { jqobj.removeClass("checked"); }
    else { jqobj.addClass("checked"); };
    jQuery("label[for='" + objid + "']").text( objid.replace(/^opt_.*_/g, "") + " : " + optText[jqobj.val()] );
};

function toggleBPMOptButton(obj, noToggle = false) {
    let jqobj = jQuery(obj);
    let objid = jqobj.attr('id');
    let optText = ["–", "有", "無"];

    if (!noToggle) { jqobj.val(optText.length - 1 <= Number(jqobj.val()) ? 0 : Number(jqobj.val()) + 1); };
    if (jqobj.val() == 0) { jqobj.removeClass("checked"); }
    else { jqobj.addClass("checked"); };
    jQuery("label[for='" + objid + "']").text( '可変 : ' + optText[jqobj.val()] );
};

/**
 * パック情報ボタントグル
 */
function togglePackButton(obj,noToggle = false) {
    let jqobj = jQuery(obj);
    let objid = jqobj.attr('id');

    jQuery("label[for='" + objid + "']").text( packlist[objid.replace("purchase-Pack","")].shortName + ( jqobj.prop('checked') ? '購入済' : '未購入' ) );
    if (noToggle) { return true; };

    update.start(objid.replace("purchase-Pack","pack_"),jqobj.prop('checked'));
    let objIdNumber = Number( objid.replace("purchase-Pack","") );
    let replacedObjId = "Pack" + objIdNumber;
    if ( objIdNumber >= 10000 && objIdNumber < 20000 ) {
        replacedObjId = "PackSS" + (objIdNumber - 10000);
    } else if ( objIdNumber >= 20000 && objIdNumber < 30000 ) {
        replacedObjId = "PackPM" + (objIdNumber - 20000);
    };

    jQuery.each(musics.JSON,function (ind,val) {
        if ('Type' in val.Release && val.Release.Type == replacedObjId ) {
            update.start(val.ID + '_b',jqobj.prop('checked'));
            update.start(val.ID + '_n',jqobj.prop('checked'));
            update.start(val.ID + '_h',jqobj.prop('checked'));
            update.start(val.ID + '_a',jqobj.prop('checked'));
            update.start(val.ID + '_l',jqobj.prop('checked'));
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
            "Genre": jQuery('#new_genre').val(),
            "Title": jQuery('#new_title').val(),
            "Artist": jQuery('#new_artist').val(),
            "Comment": jQuery('#new_comment').val(),
            "Release": {
                "Date": jQuery('#new_releasedate').val(),
                "Type": jQuery('#new_releasetype').val()
            },
            "Scores": {
                "Single": {},
                "Double": {}
            }
        };

        if (jQuery('#new_SPB_Lv').val() >= 1) { JSONData.Scores.Single.Beginner    = self.getScoreData('SPB'); };
        if (jQuery('#new_SPN_Lv').val() >= 1) { JSONData.Scores.Single.Normal      = self.getScoreData('SPN'); };
        if (jQuery('#new_SPH_Lv').val() >= 1) { JSONData.Scores.Single.Hyper       = self.getScoreData('SPH'); };
        if (jQuery('#new_SPA_Lv').val() >= 1) { JSONData.Scores.Single.Another     = self.getScoreData('SPA'); };
        if (jQuery('#new_SPL_Lv').val() >= 1) { JSONData.Scores.Single.Leggendaria = self.getScoreData('SPL'); };
        if (jQuery('#new_DPB_Lv').val() >= 1) { JSONData.Scores.Double.Beginner    = self.getScoreData('DPB'); };
        if (jQuery('#new_DPN_Lv').val() >= 1) { JSONData.Scores.Double.Normal      = self.getScoreData('DPN'); };
        if (jQuery('#new_DPH_Lv').val() >= 1) { JSONData.Scores.Double.Hyper       = self.getScoreData('DPH'); };
        if (jQuery('#new_DPA_Lv').val() >= 1) { JSONData.Scores.Double.Another     = self.getScoreData('DPA'); };
        if (jQuery('#new_DPL_Lv').val() >= 1) { JSONData.Scores.Double.Leggendaria = self.getScoreData('DPL'); };

        if (jQuery('#new_bitdate').val() != '') { JSONData.Release.BitDate = jQuery('#new_bitdate').val(); };

        jQuery('#new_json').val(JSON.stringify(JSONData) + ',');
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
        
        output.Level = jQuery('#new_' +  score + '_Lv').val();
        output.Notes = jQuery('#new_' +  score + '_notes').val();
        if (Number(jQuery('#new_' +  score + '_notesCN').val()) >= 0) { output.NotesCN = jQuery('#new_' +  score + '_notesCN').val(); };
        if (Number(jQuery('#new_' +  score + '_notesBSS').val()) >= 0) { output.NotesBSS = jQuery('#new_' +  score + '_notesBSS').val(); };

        if (jQuery('#new_' +  score + '_BPM').val()   != '') {
            let tmpBPM = jQuery('#new_' +  score + '_BPM').val().split('-');
            if (tmpBPM.length > 1) {
                output.MinBPM = tmpBPM[0];
                output.MaxBPM = tmpBPM[1];
            } else {
                output.BPM = tmpBPM[0];
            };
        };
        if (jQuery('#new_' +  score + '_CN').prop('checked')  ) { output.CN   = '1'; };
        if (jQuery('#new_' +  score + '_BSS').prop('checked') ) { output.BSS  = '1'; };
        if (jQuery('#new_' +  score + '_HCN').prop('checked') ) { output.HCN  = '1'; };
        if (jQuery('#new_' +  score + '_HBSS').prop('checked')) { output.HBSS = '1'; };

        return output;
    }
};

/**
 * トーストボックス表示用オブジェクト
 */
let toastbox = {
    toastObj: jQuery('#toastbox'),
    defaultTimer: 5000, // ポップアップ時間(ミリ秒)
    timerID: null,

    setObject: function(selector='#toastbox') {
        this.toastObj = jQuery(selector);
    },
    status: function(val='') {
        let self = this;

    },
    message: function(msg='') {
        let self = this;
        if (self.toastObj.length == 0) { self.setObject(); };

        
        if (self.toastObj.is(':hidden')) {
            self.fadeIn(msg);
        } else {
            self.toastObj.html(msg);
        };
    },
    fadeIn: function(msg='', type='fast') {
        let self = this;
        if (self.toastObj.length == 0) { self.setObject(); };

        self.toastObj.fadeIn(type);
        if (msg != '') { self.toastObj.html(msg); };
    },
    fadeOut: function(type='fast') {
        let self = this;
        if (self.toastObj.length == 0) { self.setObject(); };

        self.toastObj.fadeOut(type);
        self.toastObj.html('');
    },
    timerFadeIn: function(msg='', timer=this.defaultTimer, type='fast') {
        let self = this;

        self.timerID = window.setTimeout(function() {self.fadeIn(msg, type);}, timer);
    },
    timerFadeOut: function(timer=this.defaultTimer, type='fast') {
        let self = this;

        self.timerID = window.setTimeout(function() {self.fadeOut(type);}, timer);
    },
    FadeInandTimerFadeOut: function(msg='', timer=this.defaultTimer, type='fast') {
        let self = this;
        if (self.toastObj.length == 0) { self.setObject(); };

        self.fadeIn(msg, type);
        self.timerFadeOut(timer, type);
    },
    timerCancel: function() {
        let self = this;

        if(typeof self.timerID == "number") {
            window.clearTimeout(self.timerID);
            delete self.timerID;
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

    execUpdate: function () {
        let self = this;
        delete self.timeoutID;
        for (item of self.updateArray) {
            let tmpVal = item.mid_diff.split('_');
            if (tmpVal[0] == 'pack') {
                if (!(tmpVal[1] in userJSON.packs)) { userJSON.packs[tmpVal[1]] = {'packname': packlist[tmpVal[1]].name, 'purchased': '0'}};
                userJSON.packs[tmpVal[1]].purchased = item.isAdd ? '1' : '0';
            } else {
                switch (tmpVal[1]) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                        tmpval[1] = DifficultNameArray[tmpVal[1]];
                        break;
                    case 'b': tmpVal[1] = 'Beginner'; break;
                    case 'n': tmpVal[1] = 'Normal'; break;
                    case 'h': tmpVal[1] = 'Hyper'; break;
                    case 'a': tmpVal[1] = 'Another'; break;
                    case 'l': tmpVal[1] = 'Leggendaria'; break;
                };

                if (!(tmpVal[0] in userJSON.musics)) { userJSON.musics[tmpVal[0]].Canplay = {'Beginner':'0','Normal':'0','Hyper':'0','Another':'0','Leggendaria':'0'}};
                userJSON.musics[tmpVal[0]].Canplay[tmpVal[1]] = item.isAdd ? '1' : '0';
            };
        };

        // 更新日時を更新
        let dummyNow = new Date();
        dummyNow.setHours(dummyNow.getHours() + 9);
        userJSON.info.updated = dummyNow.toISOString().split('Z')[0] + '+09:00';
        jQuery('#userJSON_updated').text(userJSON.info.updated);

        // 完了処理
        toastbox.FadeInandTimerFadeOut(self.updateArray.length + '件の楽曲解禁状況を更新しました。');
        self.updateArray = [];

        blob = new Blob([JSON.stringify(userJSON, undefined, 2)], {type: 'application\/json'});
        url = URL.createObjectURL(blob);
    
        jQuery('#downloadButton').attr({"href": url, "download": "user.json"});
    
        if (jQuery('#gdid').val() != '') { updateFileContent(jQuery('#gdid').val(), blob, function(response) {
            console.log(response);
          }); };
    },
    cancel: function() {
        let self = this;
        if(typeof self.timeoutID == "number") {
            window.clearTimeout(self.timeoutID);
            delete self.timeoutID;
        };
    },
    start: function(val, isAdd) {
        let self = this;
        self.cancel();

        let index = self.updateArray.findIndex((v) => v.mid_diff === val);
        if (index >= 0) { self.updateArray.splice(index ,1 ); };
        self.updateArray.push({"mid_diff":val, "isAdd":isAdd});
        self.timeoutID = window.setTimeout(function() {self.execUpdate();}, 5000);
        toastbox.fadeIn(self.updateArray.length + '件の楽曲解禁状況の更新中…');
    }
};

/**
 * 楽曲JSONファイル取得
 */
let musics = {
    JSON: {},
    infoJSON: {},

    filter: function(items) {
        jQuery('#search-message').html('<span>検索中…</span>');
        s.getSearchParam();
        let now = dateFormat.format(new Date(), 'yyyy-MM-dd');

        return jQuery.grep(items,function(item,index){
            // シリーズ情報でフィルタ
            if ( s.params.series.indexOf(parseFloat(item.VNo)) == -1 ) { return false; };

            // 譜面情報でフィルタ
            if ( !( s.checkScore( item.Scores.Single.Beginner, "SPB" ) &&
                    s.checkScore( item.Scores.Single.Normal,   "SPN" ) &&
                    s.checkScore( item.Scores.Single.Hyper,    "SPH" ) &&
                    s.checkScore( item.Scores.Single.Another,  "SPA" ) &&
                    s.checkScore( item.Scores.Double.Normal,   "DPN" ) &&
                    s.checkScore( item.Scores.Double.Hyper,    "DPH" ) &&
                    s.checkScore( item.Scores.Double.Another,  "DPA" ) ) ) { return false; };

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
            if ( s.params.release.min !== new Date('2000-01-01').getTime() && s.params.release.min && s.params.release.max) {
                if ( (!item.Release.Date) ||
                     ( s.params.release.min > new Date(item.Release.Date).getTime() ) ||
                     ( new Date(item.Release.Date).getTime() > s.params.release.max )
                   ) { return false; };
            };

            // BIT配信開始月でフィルタ
            if ( s.params.bit.min !== new Date('2000-01-01').getTime() && s.params.bit.min && s.params.bit.max ) {
                if ( (!item.Release.BitDate) ||
                     ( item.Release.BitDate > now) ||
                     ( s.params.bit.min > new Date(item.Release.BitDate).getTime() ) ||
                     ( new Date(item.Release.BitDate).getTime() > s.params.bit.max )
                   ) { return false; };
            };

            // 入手可否でフィルタ
            if ( s.params.available !== 'ALL' ) {
                if ( item.Release.Type === 'Default' ||
                     item.Release.Type === 'DJP' ||
                     item.Release.Type.indexOf('Pack') > -1 ||
                     (item.Release.Type === 'Monthly' && item.Release.Date.slice(0,7) === now.slice(0,7) && item.Release.Date <= now ) ||
                     ( item.Release.BitDate && item.Release.BitDate <= now ) ) { 
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
                        case 'yes':          return (!values.has('0') && values.has('1')); break;
                        case 'partiallyyes': return values.has('1');                       break;
                        case 'partially':    return (values.has('0') && values.has('1'));  break;
                        case 'partiallyno':  return values.has('0');                       break;
                        case 'no':           return (values.has('0') && !values.has('1')); break;
                        default:             return true;                                  break;
                    };
                };

                if ( item.Release.Type === 'Default' ||
                     (item.Release.Type === 'Monthly' && item.Release.Date.slice(0,7) === now.slice(0,7)) && item.Release.Date <= now ) {
                    if ( s.params.unlocked === 'partially' || s.params.unlocked === 'partiallyno' || s.params.unlocked === 'no' ) { return false; };
                } else {
                    let canplay = {'Beginner':'0','Normal':'0','Hyper':'0','Another':'0','Leggendaria':'0'};
                    if (item.ID in userJSON.musics && 'Canplay' in userJSON.musics[item.ID]) { canplay = userJSON.musics[item.ID].Canplay; };
                    if (!check_canplay(canplay, item.Scores, s.params.unlocked)) { return false; };
                };
            };

            // 曲名でフィルタ
            if (s.params.title) {
                if (item.Title.indexOf(s.params.title) == -1) { return false; };
            };

            // ジャンル名でフィルタ
            if (s.params.genre) {
                if (item.Genre.indexOf(s.params.genre) == -1) { return false; };
            };

            // アーティスト名でフィルタ
            if (s.params.artist) {
                if (item.Artist.indexOf(s.params.artist) == -1) { return false; };
            };

            return true;
        });
    },

    sort: function(items) {
        jQuery('#search-message').html('<span>ソート中…</span>');
        let searchsort = [ {'key': jQuery('#search-sort1').val(), 'order': jQuery('#search-sort-order1').val()},
                           {'key': jQuery('#search-sort2').val(), 'order': jQuery('#search-sort-order2').val()},
                           {'key': jQuery('#search-sort3').val(), 'order': jQuery('#search-sort-order3').val()} ];

        items.sort(function(a,b) {
            // レベル情報取得
            let aval = 0;
            let bval = 0;
            let now = dateFormat.format(new Date(), 'yyyy-MM-dd');

            for(let item of searchsort){
                switch(item.key) {
                    case 'TITLE':
                        aval = convKana(a.Title.toLowerCase(), 'KtoH');
                        bval = convKana(b.Title.toLowerCase(), 'KtoH');
                        if ( aval != bval ) { return item.order == 'UP' ? ( aval > bval ? 1 : -1 ) : (bval > aval ? 1 : -1); };
                        break;
                    case 'ARTIST':
                        aval = convKana(a.Artist.toLowerCase(), 'KtoH');
                        bval = convKana(b.Artist.toLowerCase(), 'KtoH');
                        if ( aval != bval ) { return item.order == 'UP' ? ( aval > bval ? 1 : -1 ) : (bval > aval ? 1 : -1); };
                        break;
                    case 'GENRE':
                        aval = convKana(a.Genre.toLowerCase(), 'KtoH');
                        bval = convKana(b.Genre.toLowerCase(), 'KtoH');
                        if ( aval != bval ) { return item.order == 'UP' ? ( aval > bval ? 1 : -1 ) : (bval > aval ? 1 : -1); };
                        break;
                    case 'BPM':
                        aval = !isNaN(a.BPM) ? Number(a.BPM) : 999;
                        bval = !isNaN(b.BPM) ? Number(b.BPM) : 999;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'RELEASE':
                        aval = ("Date" in a.Release) && ( a.Release.Date <= now ) ? a.Release.Date : '';
                        bval = ("Date" in b.Release) && ( b.Release.Date <= now ) ? b.Release.Date : '';
                        if ( aval != bval ) { return item.order == 'UP' ? ( aval > bval ? 1 : -1 ) : (bval > aval ? 1 : -1); };
                        break;
                    case 'BITDATE':
                        aval = ("BitDate" in a.Release) && ( a.Release.BitDate <= now ) ? a.Release.BitDate : '';
                        bval = ("BitDate" in b.Release) && ( b.Release.BitDate <= now ) ? b.Release.BitDate : '';
                        if ( aval != bval ) { return item.order == 'UP' ? ( aval > bval ? 1 : -1 ) : (bval > aval ? 1 : -1); };
                        break;
                    case 'VERSION':
                        aval = Number(a.VNo);
                        bval = Number(b.VNo);
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'SPNLV':
                        aval = ("Normal" in a.Scores.Single)  ? Number(a.Scores.Single.Normal.Level) : 0;
                        bval = ("Normal" in b.Scores.Single)  ? Number(b.Scores.Single.Normal.Level) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'SPHLV':
                        aval = ("Hyper" in a.Scores.Single)   ? Number(a.Scores.Single.Hyper.Level) : 0;
                        bval = ("Hyper" in b.Scores.Single)   ? Number(b.Scores.Single.Hyper.Level) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'SPALV':
                        aval = ("Another" in a.Scores.Single) ? Number(a.Scores.Single.Another.Level) : 0;
                        bval = ("Another" in b.Scores.Single) ? Number(b.Scores.Single.Another.Level) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'DPNLV':
                        aval = ("Normal" in a.Scores.Double)  ? Number(a.Scores.Double.Normal.Level) : 0;
                        bval = ("Normal" in b.Scores.Double)  ? Number(b.Scores.Double.Normal.Level) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'DPHLV':
                        aval = ("Hyper" in a.Scores.Double)   ? Number(a.Scores.Double.Hyper.Level) : 0;
                        bval = ("Hyper" in b.Scores.Double)   ? Number(b.Scores.Double.Hyper.Level) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'DPALV':
                        aval = ("Another" in a.Scores.Double) ? Number(a.Scores.Double.Another.Level) : 0;
                        bval = ("Another" in b.Scores.Double) ? Number(b.Scores.Double.Another.Level) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'SPNNOTES':
                        aval = ("Normal" in a.Scores.Single)  ? Number(a.Scores.Single.Normal.Notes) : 0;
                        bval = ("Normal" in b.Scores.Single)  ? Number(b.Scores.Single.Normal.Notes) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'SPHNOTES':
                        aval = ("Hyper" in a.Scores.Single)   ? Number(a.Scores.Single.Hyper.Notes) : 0;
                        bval = ("Hyper" in b.Scores.Single)   ? Number(b.Scores.Single.Hyper.Notes) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'SPANOTES':
                        aval = ("Another" in a.Scores.Single) ? Number(a.Scores.Single.Another.Notes) : 0;
                        bval = ("Another" in b.Scores.Single) ? Number(b.Scores.Single.Another.Notes) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'DPNNOTES':
                        aval = ("Normal" in a.Scores.Double)  ? Number(a.Scores.Double.Normal.Notes) : 0;
                        bval = ("Normal" in b.Scores.Double)  ? Number(b.Scores.Double.Normal.Notes) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'DPHNOTES':
                        aval = ("Hyper" in a.Scores.Double)   ? Number(a.Scores.Double.Hyper.Notes) : 0;
                        bval = ("Hyper" in b.Scores.Double)   ? Number(b.Scores.Double.Hyper.Notes) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    case 'DPANOTES':
                        aval = ("Another" in a.Scores.Double) ? Number(a.Scores.Double.Another.Notes) : 0;
                        bval = ("Another" in b.Scores.Double) ? Number(b.Scores.Double.Another.Notes) : 0;
                        if ( aval != bval ) { return item.order == 'UP' ? (aval - bval) : (bval-aval); };
                        break;
                    default:
                        break;
                };
            };
            return 0;
        });

        return items;
    },
    write: function(items) {
        jQuery('#search-message').html('<span>結果テーブルに書き込み中…</span>');
        let now = new Date();
        let now2Y2M =  dateFormat.format(now, 'yy/MM');
        let now4Y2M2D =  dateFormat.format(now, 'yyyy/MM/dd');

        // 前回の結果を初期化
        jQuery(".musiclist .music, .musiclist .music_other").remove();

        // 曲数・譜面数計算用
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

        for (let item of headerLine) {tabledata[item[0]] = '';}
        for(let item of items){
            // 譜面情報の取得
            let SPB = this.getChartInfo( item.Scores.Single.Beginner );
            let SPN = this.getChartInfo( item.Scores.Single.Normal );
            let SPH = this.getChartInfo( item.Scores.Single.Hyper );
            let SPA = this.getChartInfo( item.Scores.Single.Another );
            let SPL = this.getChartInfo( item.Scores.Single.Leggendaria );
            let DPB = this.getChartInfo( item.Scores.Double.Beginner );
            let DPN = this.getChartInfo( item.Scores.Double.Normal );
            let DPH = this.getChartInfo( item.Scores.Double.Hyper );
            let DPA = this.getChartInfo( item.Scores.Double.Another );
            let DPL = this.getChartInfo( item.Scores.Double.Leggendaria );
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
            switch ( m[1] ) {
                case 'BIT':
                    isReleased = ( ("BitDate" in item.Release) && rBit4Y2M2D < now4Y2M2D ) ? true : false;
                    rTypeClass = isReleased ?  ' bit': ' bitbeforerelease';
                    rTypeStr   = 'BIT解禁';
                    rTypeSStr  = r2Y2M;
                    break;
                case 'Pack':
                    rTypeClass = ' pack pack' + m[2];
                    rTypeStr   = '楽曲パックVol.' + m[2];
                    rTypeSStr  ='PK#' + m[2];
                    break;
                case 'PackSS':
                    rTypeClass = ' packSS packSS' + m[2];
                    rTypeStr   = 'スタートアップセレクションVol.' + m[2];
                    rTypeSStr  ='SS#' + m[2];
                    break;
                case 'PackPM':
                    rTypeClass = ' packPM packPM' + m[2];
                    rTypeStr   = 'pop\'n music セレクションVol.' + m[2];
                    rTypeSStr  ='PM#' + m[2];
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
                    if ( now4Y2M2D < r4Y2M2D ) {
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

            // 解禁状況の取得・加工
            let canplay = {"Beginner":false,"Normal":false,"Hyper":false,"Another":false,"Leggendaria":false};
            if ('musics' in userJSON) {
                canplay.Beginner     = (item.ID in userJSON.musics) && ('Canplay' in userJSON.musics[item.ID]) && (userJSON.musics[item.ID].Canplay.Beginner    == '1');
                canplay.Normal       = (item.ID in userJSON.musics) && ('Canplay' in userJSON.musics[item.ID]) && (userJSON.musics[item.ID].Canplay.Normal      == '1');
                canplay.Hyper        = (item.ID in userJSON.musics) && ('Canplay' in userJSON.musics[item.ID]) && (userJSON.musics[item.ID].Canplay.Hyper       == '1');
                canplay.Another      = (item.ID in userJSON.musics) && ('Canplay' in userJSON.musics[item.ID]) && (userJSON.musics[item.ID].Canplay.Another     == '1');
                canplay.Leggendaria  = (item.ID in userJSON.musics) && ('Canplay' in userJSON.musics[item.ID]) && (userJSON.musics[item.ID].Canplay.Leggendaria == '1');
            };

            // BIT・譜面数計算
            c.addValues('Beginner',    !isNaN(SPB.Lv), !isNaN(DPB.Lv), rBit.Beginner,    canplay.Beginner,    isBitCalc, isReleased);
            c.addValues('Normal',      !isNaN(SPN.Lv), !isNaN(DPN.Lv), rBit.Normal,      canplay.Normal,      isBitCalc, isReleased);
            c.addValues('Hyper',       !isNaN(SPH.Lv), !isNaN(DPH.Lv), rBit.Hyper,       canplay.Hyper,       isBitCalc, isReleased);
            c.addValues('Another',     !isNaN(SPA.Lv), !isNaN(DPA.Lv), rBit.Another,     canplay.Another,     isBitCalc, isReleased);
            c.addValues('Leggendaria', !isNaN(SPL.Lv), !isNaN(DPL.Lv), rBit.Leggendaria, canplay.Leggendaria, isBitCalc, isReleased);

            // その他
            let comment = item.Comment;
            let BPM = ( BPMtmp.length == 1 ) ? BPMtmp[0] : '※';
            if (BPM === '※') {

                // 可変はどうしようね？
    
            };
    
            // 挿入データの作成
            let unlockCheckbox = {
                "B": ((!isNaN(SPB.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-b" name="check-playable" class="check-playable" value="' + item.ID + '_b" ' + (canplay.Beginner    ? 'checked ': '') + ((rTypeSStr.search(/PK#|SS#|PM#/) == 0) ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-b"></label>' : '&nbsp;'),
                "N": ((!isNaN(SPN.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-n" name="check-playable" class="check-playable" value="' + item.ID + '_n" ' + (canplay.Normal      ? 'checked ': '') + ((rTypeSStr.search(/PK#|SS#|PM#/) == 0) ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-n"></label>' : '&nbsp;'),
                "H": ((!isNaN(SPH.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-h" name="check-playable" class="check-playable" value="' + item.ID + '_h" ' + (canplay.Hyper       ? 'checked ': '') + ((rTypeSStr.search(/PK#|SS#|PM#/) == 0) ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-h"></label>' : '&nbsp;'),
                "A": ((!isNaN(SPA.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-a" name="check-playable" class="check-playable" value="' + item.ID + '_a" ' + (canplay.Another     ? 'checked ': '') + ((rTypeSStr.search(/PK#|SS#|PM#/) == 0) ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-a"></label>' : '&nbsp;'),
                "L": ((!isNaN(SPL.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-l" name="check-playable" class="check-playable" value="' + item.ID + '_a" ' + (canplay.Leggendaria ? 'checked ': '') + ((rTypeSStr.search(/PK#|SS#|PM#/) == 0) ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-l"></label>' : '&nbsp;')
            };
            let scoreClass = {
                "canplay": {
                    "SPB": (canplay.Beginner    || (rTypeClass === '' && !isNaN(SPB.Lv)) ? ' canplay' : ''),
                    "SPN": (canplay.Normal      || (rTypeClass === '' && !isNaN(SPN.Lv)) ? ' canplay' : ''),
                    "SPH": (canplay.Hyper       || (rTypeClass === '' && !isNaN(SPH.Lv)) ? ' canplay' : ''),
                    "SPA": (canplay.Another     || (rTypeClass === '' && !isNaN(SPA.Lv)) ? ' canplay' : ''),
                    "SPL": (canplay.Leggendaria || (rTypeClass === '' && !isNaN(SPL.Lv)) ? ' canplay' : ''),
                    "DPB": (canplay.Beginner    || (rTypeClass === '' && !isNaN(DPB.Lv)) ? ' canplay' : ''),
                    "DPN": (canplay.Normal      || (rTypeClass === '' && !isNaN(DPN.Lv)) ? ' canplay' : ''),
                    "DPH": (canplay.Hyper       || (rTypeClass === '' && !isNaN(DPH.Lv)) ? ' canplay' : ''),
                    "DPA": (canplay.Another     || (rTypeClass === '' && !isNaN(DPA.Lv)) ? ' canplay' : ''),
                    "DPL": (canplay.Leggendaria || (rTypeClass === '' && !isNaN(DPL.Lv)) ? ' canplay' : '')
                },
                "cn": {
                    "SPB": '<div class="notesstyle' + (SPB.HCN ? ' hcn' : SPB.CN ? ' cn' : '') + '"></div>',
                    "SPN": '<div class="notesstyle' + (SPN.HCN ? ' hcn' : SPN.CN ? ' cn' : '') + '"></div>',
                    "SPH": '<div class="notesstyle' + (SPH.HCN ? ' hcn' : SPH.CN ? ' cn' : '') + '"></div>',
                    "SPA": '<div class="notesstyle' + (SPA.HCN ? ' hcn' : SPA.CN ? ' cn' : '') + '"></div>',
                    "SPL": '<div class="notesstyle' + (SPL.HCN ? ' hcn' : SPL.CN ? ' cn' : '') + '"></div>',
                    "DPB": '<div class="notesstyle' + (DPB.HCN ? ' hcn' : DPB.CN ? ' cn' : '') + '"></div>',
                    "DPN": '<div class="notesstyle' + (DPN.HCN ? ' hcn' : DPN.CN ? ' cn' : '') + '"></div>',
                    "DPH": '<div class="notesstyle' + (DPH.HCN ? ' hcn' : DPH.CN ? ' cn' : '') + '"></div>',
                    "DPA": '<div class="notesstyle' + (DPA.HCN ? ' hcn' : DPA.CN ? ' cn' : '') + '"></div>',
                    "DPL": '<div class="notesstyle' + (DPA.HCN ? ' hcn' : DPA.CN ? ' cn' : '') + '"></div>'
                },
                "bss": {
                    "SPB": '<div class="notesstyle' + (SPB.HBSS ? ' hbss' : SPB.BSS ? ' bss' : '') + '"></div>',
                    "SPN": '<div class="notesstyle' + (SPN.HBSS ? ' hbss' : SPN.BSS ? ' bss' : '') + '"></div>',
                    "SPH": '<div class="notesstyle' + (SPH.HBSS ? ' hbss' : SPH.BSS ? ' bss' : '') + '"></div>',
                    "SPA": '<div class="notesstyle' + (SPA.HBSS ? ' hbss' : SPA.BSS ? ' bss' : '') + '"></div>',
                    "SPL": '<div class="notesstyle' + (SPL.HBSS ? ' hbss' : SPL.BSS ? ' bss' : '') + '"></div>',
                    "DPB": '<div class="notesstyle' + (DPB.HBSS ? ' hbss' : DPB.BSS ? ' bss' : '') + '"></div>',
                    "DPN": '<div class="notesstyle' + (DPN.HBSS ? ' hbss' : DPN.BSS ? ' bss' : '') + '"></div>',
                    "DPH": '<div class="notesstyle' + (DPH.HBSS ? ' hbss' : DPH.BSS ? ' bss' : '') + '"></div>',
                    "DPA": '<div class="notesstyle' + (DPA.HBSS ? ' hbss' : DPA.BSS ? ' bss' : '') + '"></div>',
                    "DPL": '<div class="notesstyle' + (DPL.HBSS ? ' hbss' : DPL.BSS ? ' bss' : '') + '"></div>'
                }
            };
            rBit.ALL = ((rBit.Beginner ? rBit.Beginner : 0) + (rBit.Normal ? rBit.Normal : 0) + (rBit.Hyper ? rBit.Hyper : 0) + (rBit.Another ? rBit.Another : 0) + (rBit.Leggendaria ? rBit.Leggendaria : 0));
            addhtml = '<tr class="music" style="display: none;">' +
                      '<td class="release' + rTypeClass + '">' + rTypeSStr + '</td>' +
                      '<td class="version version' + item.VNo + '">' + item.VShortName + '</td>' +
                      '<td class="genre">' + item.Genre + '</td>' +
                      '<td class="artist">' + item.Artist + '</td>' +
                      '<td class="title">' + item.Title + '</td>' +
                      '<td class="bpm">' + BPM + '</td>' +
                      '<td class="sp level spb' + scoreClass.canplay.SPB + '">' + scoreClass.cn.SPB + scoreClass.bss.SPB + SPB.Lv + '</td>' +
                      '<td class="sp level spn' + scoreClass.canplay.SPN + '">' + scoreClass.cn.SPN + scoreClass.bss.SPN + SPN.Lv + '</td>' +
                      '<td class="sp level sph' + scoreClass.canplay.SPH + '">' + scoreClass.cn.SPH + scoreClass.bss.SPH + SPH.Lv + '</td>' +
                      '<td class="sp level spa' + scoreClass.canplay.SPA + '">' + scoreClass.cn.SPA + scoreClass.bss.SPA + SPA.Lv + '</td>' +
                      '<td class="dp level dpn' + scoreClass.canplay.DPN + '">' + scoreClass.cn.DPN + scoreClass.bss.DPN + DPN.Lv + '</td>' +
                      '<td class="dp level dph' + scoreClass.canplay.DPH + '">' + scoreClass.cn.DPH + scoreClass.bss.DPH + DPH.Lv + '</td>' +
                      '<td class="dp level dpa' + scoreClass.canplay.DPA + '">' + scoreClass.cn.DPA + scoreClass.bss.DPA + DPA.Lv + '</td>' +
                      '</tr>' +
                      '<tr class="music_other" style="display: none;">' +
                      '<td class="" rowspan="' + (('musics' in userJSON) ? '2' : '1')+ '"></td>' +
                      '<td class="other" colspan="4" rowspan="' + (('musics' in userJSON) ? '2' : '1')+ '">' +
                      '配信開始日：' + r4Y2M2D + '&nbsp;&nbsp;(&nbsp;配信タイプ&nbsp;：&nbsp;' + rTypeStr + '&nbsp;)<br />' +
                      'BIT解禁開始日：' + rBit4Y2M2D + '<br />' +
                      ((rBit4Y2M2D !== 'BIT未解禁') ? '必要BIT数 : ' +
                                                     ((rBit.Beginner)     ? '&nbsp;B = '     + rBit.Beginner.toLocaleString() + ' / ' : '' ) +
                                                     ((rBit.Normal)       ? '&nbsp;N = '       + rBit.Normal.toLocaleString() + ' / ' : '' ) +
                                                     ((rBit.Hyper)        ? '&nbsp;H = '        + rBit.Hyper.toLocaleString() + ' / ' : '' ) +
                                                     ((rBit.Another)      ? '&nbsp;A = '      + rBit.Another.toLocaleString() + ' / ' : '' ) +
                                                     ((rBit.Leggendaria)  ? '&nbsp;A = '  + rBit.Leggendaria.toLocaleString() + ' / ' : '' ) +
                                                     '&nbsp;&nbsp;合計 = ' + rBit.ALL.toLocaleString() : "") +
                      ((comment) ? '<br />' + comment : "") +
                      '</td>' +
                      '<td class="notes">Notes</td>' +
                      '<td class="notes spb">' + SPB.Notes + '</td>' +
                      '<td class="notes spn">' + SPN.Notes + '</td>' +
                      '<td class="notes sph">' + SPH.Notes + '</td>' +
                      '<td class="notes spa">' + SPA.Notes + '</td>' +
                      '<td class="notes dpn">' + DPN.Notes + '</td>' +
                      '<td class="notes dph">' + DPH.Notes + '</td>' +
                      '<td class="notes dpa">' + DPA.Notes + '</td>' +
                      '</tr>' +
                      (('musics' in userJSON) ? 
                      '<tr class="music_other" style="display: none;">' +
                      '<td class="playable">解禁</td>' +
                      '<td class="playable spb">' + unlockCheckbox.B + '</td>' +
                      '<td class="playable spn">' + unlockCheckbox.N + '</td>' +
                      '<td class="playable sph">' + unlockCheckbox.H + '</td>' +
                      '<td class="playable spa">' + unlockCheckbox.A + '</td>' +
                      '<td class="playable dpn">&nbsp;</td>' +
                      '<td class="playable dph">&nbsp;</td>' +
                      '<td class="playable dpa">&nbsp;</td>' +
                      '</tr>' : '' );

            // データ挿入先ごとにオブジェクトに格納
            className = [];
            switch (jQuery("#search-folder").val()) {
                case 'VER'      : className.push("v" + zeroPadding(item.VNo,2) + "-header"); break;
                case 'RELT'     : className.push("relt" + item.Release.Type + "-header"); break;
                case 'RELY'     : className.push("rely" + r_id_r4Y + "-header"); break;
                case 'RELYM'    : className.push("relym" + r_id_r4Y2M + "-header"); break;
                case 'BITY'     : className.push("bity" + r_id_b4Y + "-header"); break;
                case 'BITYM'    : className.push("bitym" + r_id_b4Y2M + "-header"); break;
                case 'BPM'      : className.push("bpm" + getBPMValue(BPM) + "-header"); break;
                case 'SPLV'     : if (!isNaN(SPB.Lv)) {className.push("sp-lv" + zeroPadding(SPB.Lv,2) + "-header");};
                                  if (!isNaN(SPN.Lv)) {className.push("sp-lv" + zeroPadding(SPN.Lv,2) + "-header");};
                                  if (!isNaN(SPH.Lv)) {className.push("sp-lv" + zeroPadding(SPH.Lv,2) + "-header");};
                                  if (!isNaN(SPA.Lv)) {className.push("sp-lv" + zeroPadding(SPA.Lv,2) + "-header");};
                                  if (!isNaN(SPL.Lv)) {className.push("sp-lv" + zeroPadding(SPL.Lv,2) + "-header");}; break;
                case 'SPBLV'    : className.push("spb-lv" + (!isNaN(SPB.Lv) ? zeroPadding(SPB.Lv,2) : 'NO') + "-header"); break;
                case 'SPNLV'    : className.push("spn-lv" + (!isNaN(SPN.Lv) ? zeroPadding(SPN.Lv,2) : 'NO') + "-header"); break;
                case 'SPHLV'    : className.push("sph-lv" + (!isNaN(SPH.Lv) ? zeroPadding(SPH.Lv,2) : 'NO') + "-header"); break;
                case 'SPALV'    : className.push("spa-lv" + (!isNaN(SPA.Lv) ? zeroPadding(SPA.Lv,2) : 'NO') + "-header"); break;
                case 'SPLLV'    : className.push("spl-lv" + (!isNaN(SPL.Lv) ? zeroPadding(SPL.Lv,2) : 'NO') + "-header"); break;
                case 'DPLV'     : if (!isNaN(DPB.Lv)) {className.push("dp-lv" + zeroPadding(DPB.Lv,2) + "-header");};
                                  if (!isNaN(DPN.Lv)) {className.push("dp-lv" + zeroPadding(DPN.Lv,2) + "-header");};
                                  if (!isNaN(DPH.Lv)) {className.push("dp-lv" + zeroPadding(DPH.Lv,2) + "-header");};
                                  if (!isNaN(DPA.Lv)) {className.push("dp-lv" + zeroPadding(DPA.Lv,2) + "-header");};
                                  if (!isNaN(DPL.Lv)) {className.push("dp-lv" + zeroPadding(DPL.Lv,2) + "-header");}; break;
                case 'DPBLV'    : className.push("dpb-lv" + (!isNaN(DPB.Lv) ? zeroPadding(DPB.Lv,2) : 'NO') + "-header"); break;
                case 'DPNLV'    : className.push("dpn-lv" + (!isNaN(DPN.Lv) ? zeroPadding(DPN.Lv,2) : 'NO') + "-header"); break;
                case 'DPHLV'    : className.push("dph-lv" + (!isNaN(DPH.Lv) ? zeroPadding(DPH.Lv,2) : 'NO') + "-header"); break;
                case 'DPALV'    : className.push("dpa-lv" + (!isNaN(DPA.Lv) ? zeroPadding(DPA.Lv,2) : 'NO') + "-header"); break;
                case 'DPLLV'    : className.push("dpl-lv" + (!isNaN(DPL.Lv) ? zeroPadding(DPL.Lv,2) : 'NO') + "-header"); break;
                case 'SPNNOTES' : className.push("spn-notes" + (!isNaN(SPN.Lv) ? getNotesValue(SPN.Notes) : 'NO') + "-header"); break;
                case 'SPHNOTES' : className.push("sph-notes" + (!isNaN(SPH.Lv) ? getNotesValue(SPH.Notes) : 'NO') + "-header"); break;
                case 'SPANOTES' : className.push("spa-notes" + (!isNaN(SPA.Lv) ? getNotesValue(SPA.Notes) : 'NO') + "-header"); break;
                case 'DPNNOTES' : className.push("dpn-notes" + (!isNaN(DPN.Lv) ? getNotesValue(DPN.Notes) : 'NO') + "-header"); break;
                case 'DPHNOTES' : className.push("dph-notes" + (!isNaN(DPH.Lv) ? getNotesValue(DPH.Notes) : 'NO') + "-header"); break;
                case 'DPANOTES' : className.push("dpa-notes" + (!isNaN(DPA.Lv) ? getNotesValue(DPA.Notes) : 'NO') + "-header"); break;
            };

            for (let header of className) {
                tabledata[header] += addhtml;
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
                if (!isNaN(SPL.Lv)) { countdata[header].Scores.SPL += 1; };
                if (!isNaN(DPB.Lv)) { countdata[header].Scores.DPB += 1; };
                if (!isNaN(DPN.Lv)) { countdata[header].Scores.DPN += 1; };
                if (!isNaN(DPH.Lv)) { countdata[header].Scores.DPH += 1; };
                if (!isNaN(DPA.Lv)) { countdata[header].Scores.DPA += 1; };
                if (!isNaN(DPL.Lv)) { countdata[header].Scores.DPL += 1; };

                if (rBit4Y2M2D !== 'BIT未解禁' && isReleased && isBitCalc) {
                    if (!isNaN(SPB.Lv)) { countdata[header].BITScores.SPB += 1; if (canplay.Beginner   ) {countdata[header].BITCanplayScores.SPB++; }; };
                    if (!isNaN(SPN.Lv)) { countdata[header].BITScores.SPN += 1; if (canplay.Normal     ) {countdata[header].BITCanplayScores.SPN++; }; };
                    if (!isNaN(SPH.Lv)) { countdata[header].BITScores.SPH += 1; if (canplay.Hyper      ) {countdata[header].BITCanplayScores.SPH++; }; };
                    if (!isNaN(SPA.Lv)) { countdata[header].BITScores.SPA += 1; if (canplay.Another    ) {countdata[header].BITCanplayScores.SPA++; }; };
                    if (!isNaN(SPL.Lv)) { countdata[header].BITScores.SPL += 1; if (canplay.Leggendaria) {countdata[header].BITCanplayScores.SPL++; }; };
                    if (!isNaN(DPB.Lv)) { countdata[header].BITScores.DPB += 1; if (canplay.Beginner   ) {countdata[header].BITCanplayScores.DPB++; }; };
                    if (!isNaN(DPN.Lv)) { countdata[header].BITScores.DPN += 1; if (canplay.Normal     ) {countdata[header].BITCanplayScores.DPN++; }; };
                    if (!isNaN(DPH.Lv)) { countdata[header].BITScores.DPH += 1; if (canplay.Hyper      ) {countdata[header].BITCanplayScores.DPH++; }; };
                    if (!isNaN(DPA.Lv)) { countdata[header].BITScores.DPA += 1; if (canplay.Another    ) {countdata[header].BITCanplayScores.DPA++; }; };
                    if (!isNaN(DPL.Lv)) { countdata[header].BITScores.DPL += 1; if (canplay.Leggendaria) {countdata[header].BITCanplayScores.DPL++; }; };

                    if ( ( !isNaN(SPB.Lv) || !isNaN(DPB.Lv) )) {countdata[header].BIT.B += Number(rBit.Beginner);    if (canplay.Beginner   ) {countdata[header].BITCanplay.B += Number(rBit.Beginner); };    };
                    if ( ( !isNaN(SPN.Lv) || !isNaN(DPN.Lv) )) {countdata[header].BIT.N += Number(rBit.Normal);      if (canplay.Normal     ) {countdata[header].BITCanplay.N += Number(rBit.Normal); };      };
                    if ( ( !isNaN(SPH.Lv) || !isNaN(DPH.Lv) )) {countdata[header].BIT.H += Number(rBit.Hyper);       if (canplay.Hyper      ) {countdata[header].BITCanplay.H += Number(rBit.Hyper); };       };
                    if ( ( !isNaN(SPA.Lv) || !isNaN(DPA.Lv) )) {countdata[header].BIT.A += Number(rBit.Another);     if (canplay.Another    ) {countdata[header].BITCanplay.A += Number(rBit.Another); };     };
                    if ( ( !isNaN(SPL.Lv) || !isNaN(DPL.Lv) )) {countdata[header].BIT.L += Number(rBit.Leggendaria); if (canplay.Leggendaria) {countdata[header].BITCanplay.L += Number(rBit.Leggendaria); }; };

                };
            };
        };
    
        // データ挿入
        for(let className in tabledata){
            // 楽曲データを追加した場合は検索結果の書き換えと表示処理
            if (tabledata[className] !== '') {
                jQuery('#' + className).append(tabledata[className]);
                jQuery('#' + className).find('span').remove();
                let tmp = countdata[className];
                let addScoresText = [
                    (tmp.BITScores.SPB > 0 ? '<span class="unlockvalue_b"> B：' + tmp.BITCanplayScores.SPB + ' / ' + tmp.BITScores.SPB + ' </span>' : '<span class="unlockvalue_b"> </span>'),
                    (tmp.BITScores.SPN > 0 ? '<span class="unlockvalue"> N：'   + tmp.BITCanplayScores.SPN + ' / ' + tmp.BITScores.SPN + ' </span>' : '<span class="unlockvalue"> </span>'),
                    (tmp.BITScores.SPH > 0 ? '<span class="unlockvalue"> H：'   + tmp.BITCanplayScores.SPH + ' / ' + tmp.BITScores.SPH + ' </span>' : '<span class="unlockvalue"> </span>'),
                    (tmp.BITScores.SPA > 0 ? '<span class="unlockvalue"> A：'   + tmp.BITCanplayScores.SPA + ' / ' + tmp.BITScores.SPA + ' </span>' : '<span class="unlockvalue"> </span>'),
                    (tmp.BITScores.SPL > 0 ? '<span class="unlockvalue"> L：'   + tmp.BITCanplayScores.SPL + ' / ' + tmp.BITScores.SPL + ' </span>' : '<span class="unlockvalue"> </span>'),
                ];
                let addTextOutput = (tmp.BITScores.SPB > 0 || tmp.BITScores.SPN > 0 || tmp.BITScores.SPH > 0 || tmp.BITScores.SPA > 0 || tmp.BITScores.SPL > 0);
                let addText = '<span class="result">&nbsp;' + tmp.Music + ' 曲</span>' +
                          (addTextOutput ? '<span class="unlocklabel"> BIT解禁</span>' + addScoresText.join('') : '');
                jQuery('#' + className).find('.headerline th').append(addText);
                jQuery('#' + className).show();
                if (jQuery('#searchopen').prop('checked') ) {
                    if (jQuery('#extendopen').prop('checked')) {
                        jQuery('#' + className).children('.music_other').show();
                    } else {
                        jQuery('#' + className).children('.music_other').hide();
                    }
                    jQuery('#' + className).children('.music').show();
                    jQuery('#' + className).addClass('opened');
                };
            };
        };

        // music_other開閉用にonclick設定
        jQuery('.musiclist tbody').find('.genre, .title, .artist, .bpm').click(function() {
            jQuery(this).parent().next('.music_other').toggle();
            jQuery(this).parent().next('.music_other').next('.music_other').toggle();
        });
    
        jQuery(".musiclist tbody").each(function() {
            // 曲数が0のバージョンヘッダーを非表示
            if (jQuery(this).find(".music").length <= 0) {
                jQuery(this).hide();
            };
        });

        // 解禁状況更新処理用
        jQuery('.playable input[type=checkbox]').change(function() {
            update.start(jQuery(this).val(),jQuery(this).prop('checked'));
        });

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
        jQuery('#search-message').empty();
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
            DPN: { min: 0, max: 12 },
            DPH: { min: 0, max: 12 },
            DPA: { min: 0, max: 12 }
        },
        opt: {
            SPB: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
            SPN: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
            SPH: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
            SPA: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
            DPN: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
            DPH: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} },
            DPA: { cn: 0, bss: 0, hcn: 0, notes: { min: 0, max: 99999} }
        },
        notes: {
            min: 0,
            max: 99999
        },
        release: {
            type: ['0'],
            min: 0,
            max: 0
        },
        bit: {
            min: 0,
            max: 0
        },
        available: 'ALL',
        unlocked: 'ALL',
        title: '',
        genre: '',
        artist: '',
        BPM: {
            min: 0,
            max: 0,
            changing: 0
        },
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
        this.params.release.min = new Date(jQuery("#releasedate-min").val()).getTime();
        this.params.release.max = new Date(jQuery("#releasedate-max").val()).getTime();
        this.params.bit.min = new Date(jQuery("#bitdate-min").val()).getTime();
        this.params.bit.max = new Date(jQuery("#bitdate-max").val()).getTime();
        this.params.available = jQuery("#available").val();
        this.params.unlocked = jQuery("#unlocked").val();
        this.params.title = jQuery("#title").val();
        this.params.genre = jQuery("#genre").val();
        this.params.artist = jQuery("#artist").val();
        this.params.BPM.min = (isNaN(parseInt(jQuery("#opt_bpm_min").val())) ?     0 : parseInt(jQuery("#opt_bpm_min").val()));
        this.params.BPM.max = (isNaN(parseInt(jQuery("#opt_bpm_max").val())) ?  9999 : parseInt(jQuery("#opt_bpm_max").val()));
        this.params.BPM.changing = Number(jQuery('#opt_bpm_changing').val());
    },
    getScoreSearchParams: function(score) {
        [this.params.lv[score].min,this.params.lv[score].max] = jQuery('#' + score + '-levels')[0].noUiSlider.get();
        this.params.opt[score].cn = Number(jQuery('#opt_' + score + '_CN').val());
        this.params.opt[score].bss = Number(jQuery('#opt_' + score + '_BSS').val());
        this.params.opt[score].hcn = Number(jQuery('#opt_' + score + '_HCN').val());
        this.params.opt[score].notes.min = (isNaN(parseInt(jQuery('#opt_' + score + '_notes_min').val())) ?     0 : parseInt(jQuery('#opt_' + score + '_notes_min').val()));
        this.params.opt[score].notes.max = (isNaN(parseInt(jQuery('#opt_' + score + '_notes_max').val())) ? 99999 : parseInt(jQuery('#opt_' + score + '_notes_max').val()));
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
        jQuery("#releasedate-min").val(jQuery("#releasedate-min option[selected=selected]").val());
        jQuery("#releasedate-max").val(jQuery("#releasedate-max option[selected=selected]").val());
        jQuery("#bitdate-min").val(jQuery("#bitdate-min option[selected=selected]").val());
        jQuery("#bitdate-max").val(jQuery("#bitdate-max option[selected=selected]").val());
        jQuery("#available").val(jQuery("#available option[selected=selected]").val());
        jQuery("#unlocked").val(jQuery("#unlocked option[selected=selected]").val());
        jQuery("#title").val('');
        jQuery("#genre").val('');
        jQuery("#artist").val('');
        jQuery("#opt_bpm_min").val('');
        jQuery("#opt_bpm_max").val('');
        jQuery('#opt_bpm_changing').val(0);
    },
    setScoreSearchParams: function(score, lvMin = 0, lvMax = 12, CN = 0, BSS = 0, HCN = 0, notesMin = '', notesMax = '') {
        jQuery('#' + score + '-levels')[0].noUiSlider.set([lvMin,lvMax]);
        jQuery('#opt_' + score + '_CN').val(CN);
        jQuery('#opt_' + score + '_BSS').val(BSS);
        jQuery('#opt_' + score + '_HCN').val(HCN);
        jQuery('#opt_' + score + '_notes_min').val(notesMin);
        jQuery('#opt_' + score + '_notes_max').val(notesMax);
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

    }};

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
        jQuery('#gdfileget').click(function() { getGoogleDriveFile( jQuery('#gdid').val() ); });
        if ( jQuery('#gdid').val() != '') { getGoogleDriveFile( jQuery('#gdid').val() ); };
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
        jQuery('#gdid').val( Cookies.get('infinitas_gdid') );
    } else {
        jQuery('#gdid').attr('disabled', true);
        jQuery('#googleSignin').removeClass('hidden');
        jQuery('#googleSignout').addClass('hidden');
    }
};

/**
 * Print files.
 */
function listFiles() {
    let getListParams = {
        'q': 'mimeType=\'application/vnd.google-apps.folder\' or name=\'user.json\'',
        'pageSize': 50,
        //'fields': "nextPageToken, files(id, name, parents, webContentLink)"
        'fields': "*"
    };
    gapi.client.drive.files.list(getListParams).then(function(response) {
        appendPre('Files:');
        let files = response.result.files;
        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                let webContentLink = '';
                webContent = '';
                extStr = '.json';
                if ( file.name.lastIndexOf(extStr)+extStr.length===file.name.length) {
                    webContentLink = file.webContentLink;
                    gapi.client.drive.files.get({
                        fileId: file.id,
                        alt: 'media'
                    }).then(function(objFile){
                        let data = "<br />\n" + JSON.stringify(objFile.result);
                        console.log(data);
                    });
                };
                appendPre(file.name + ' (' + file.id + ') ' + webContentLink);
            };
        } else {
            appendPre('No files found.');
        };
    });
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
 * webページロード完了後の処理
 */
function handleClientLoad() {
    // googleAPIクライアントの初期化
    gapi.load('client:auth2', initClient);
    // musiclist
    musics.JSON = musiclist.musics;
    musics.infoJSON = musiclist.info;
    musics.infoJSON.music_count = 0;
    musics.infoJSON.chart_count_all = 0;
    musics.infoJSON.chart_single_all = 0;
    musics.infoJSON.chart_single_beginner = 0;
    musics.infoJSON.chart_single_normal = 0;      
    musics.infoJSON.chart_single_hyper = 0;       
    musics.infoJSON.chart_single_another = 0;     
    musics.infoJSON.chart_single_leggendaria = 0; 
    musics.infoJSON.chart_double_all = 0;
    musics.infoJSON.chart_double_beginner = 0;    
    musics.infoJSON.chart_double_normal = 0;      
    musics.infoJSON.chart_double_hyper = 0;       
    musics.infoJSON.chart_double_another = 0;     
    musics.infoJSON.chart_double_leggendaria = 0;
 
    delete musiclist;

    // 
    jQuery('#search-message').html('<span>準備中…</span>');
    if (musics.JSON.length > 0) {
        // 楽曲数・譜面数の確認
        for (item of musics.JSON) {
            if ( item.Release.Type != 'Unreleased' ) {
                musics.infoJSON.music_count++;
                if ( 'Beginner'    in item.Scores.Single ) { musics.infoJSON.chart_count_all++; musics.infoJSON.chart_single_all++; musics.infoJSON.chart_single_beginner++;    };
                if ( 'Normal'      in item.Scores.Single ) { musics.infoJSON.chart_count_all++; musics.infoJSON.chart_single_all++; musics.infoJSON.chart_single_normal++;      };
                if ( 'Hyper'       in item.Scores.Single ) { musics.infoJSON.chart_count_all++; musics.infoJSON.chart_single_all++; musics.infoJSON.chart_single_hyper++;       };
                if ( 'Another'     in item.Scores.Single ) { musics.infoJSON.chart_count_all++; musics.infoJSON.chart_single_all++; musics.infoJSON.chart_single_another++;     };
                if ( 'Leggendaria' in item.Scores.Single ) { musics.infoJSON.chart_count_all++; musics.infoJSON.chart_single_all++; musics.infoJSON.chart_single_leggendaria++; };
                if ( 'Beginner'    in item.Scores.Double ) { musics.infoJSON.chart_count_all++; musics.infoJSON.chart_double_all++; musics.infoJSON.chart_double_beginner++;    };
                if ( 'Normal'      in item.Scores.Double ) { musics.infoJSON.chart_count_all++; musics.infoJSON.chart_double_all++; musics.infoJSON.chart_double_normal++;      };
                if ( 'Hyper'       in item.Scores.Double ) { musics.infoJSON.chart_count_all++; musics.infoJSON.chart_double_all++; musics.infoJSON.chart_double_hyper++;       };
                if ( 'Another'     in item.Scores.Double ) { musics.infoJSON.chart_count_all++; musics.infoJSON.chart_double_all++; musics.infoJSON.chart_double_another++;     };
                if ( 'Leggendaria' in item.Scores.Double ) { musics.infoJSON.chart_count_all++; musics.infoJSON.chart_double_all++; musics.infoJSON.chart_double_leggendaria++; };
            };
        };

        // 曲名の自動補完
        let titleSet = new Set();
        musics.JSON.forEach(function(val,idx,ar){ titleSet.add(val.Title); });
        titleSet = new Set([...titleSet].sort());
        titleSet.forEach(function(val,idx,ar){ jQuery('<option></option>').attr('value', val).appendTo('#titlelist'); });

        // ジャンル名の自動補完
        let genreSet = new Set();
        musics.JSON.forEach(function(val,idx,ar){ genreSet.add(val.Genre); });
        genreSet = new Set([...genreSet].sort());
        genreSet.forEach(function(val,idx,ar){ jQuery('<option></option>').attr('value', val).appendTo('#genrelist'); });

        // アーティスト名の自動補完
        let artistSet = new Set();
        musics.JSON.forEach(function(val,idx,ar){ artistSet.add(val.Artist); });
        artistSet = new Set([...artistSet].sort());
        artistSet.forEach(function(val,idx,ar){ jQuery('<option></option>').attr('value', val).appendTo('#artistlist'); });

        jQuery('#search-message').html('<span>データファイル読込完了</span>');
        jQuery('info-lastupdated').append('データ更新日：' + dateFormat.format(new Date(musics.infoJSON.lastupdated), 'yyyy/MM/dd hh:mm'));
        jQuery('.infotable').append(
            '<tbody class="musiclistdata"><tr><th colspan="2" class="section2">全データ</th>' +
                       '<td class="text-right">' + musics.infoJSON.music_count.toLocaleString() + '&nbsp;曲&nbsp;/&nbsp;' + musics.infoJSON.chart_count_all.toLocaleString() + '&nbsp;譜面</td>' +
                       '<td class="text-right">' + musics.infoJSON.chart_single_all.toLocaleString() + '&nbsp;譜面</td>' +
                       '<td class="spb text-right">' + musics.infoJSON.chart_single_beginner.toLocaleString() + '&nbsp;譜面</td>' +
                       '<td class="spn text-right">' + musics.infoJSON.chart_single_normal.toLocaleString() + '&nbsp;譜面</td>' +
                       '<td class="sph text-right">' + musics.infoJSON.chart_single_hyper.toLocaleString() + '&nbsp;譜面</td>' +
                       '<td class="spa text-right">' + musics.infoJSON.chart_single_another.toLocaleString() + '&nbsp;譜面</td>' +
                       '<td class="text-right">' + musics.infoJSON.chart_double_all.toLocaleString() + '&nbsp;譜面</td>' +
                       '<td class="dpn text-right">' + musics.infoJSON.chart_double_normal.toLocaleString() + '&nbsp;譜面</td>' +
                       '<td class="dph text-right">' + musics.infoJSON.chart_double_hyper.toLocaleString() + '&nbsp;譜面</td>' +
                       '<td class="dpa text-right">' + musics.infoJSON.chart_double_another.toLocaleString() + '&nbsp;譜面</td>' +
            '</tr></tbody>');
        jQuery('#filter-button').prop('disabled',false);
    };

    // 検索条件・表示設定を閉じておく
    jQuery('fieldset legend input').each(function() {
        let target = jQuery(this).parent().parent().children('div:not(.hidden),hr:not(.hidden)')
        jQuery(this).prop("checked") ? target.fadeIn('fast') : target.fadeOut('fast');
    });

    // ログイン後に使用する項目をいったん非表示
    //jQuery('.sg2').addClass('hidden');

    // 検索条件のシリーズ項目作成
    makeCheckbox('#seriesbox',[ ['series',   1, true, '1st style',   ['series-CS']],
                                ['series',   2, true, 'substream',   ['series-CS']],
                                ['series',   3, true, '2nd style',   ['series-CS']],
                                ['series',   4, true, '3rd style',   ['series-CS']],
                                ['series',   5, true, '4th style',   ['series-CS']],
                                ['series',   6, true, '5th style',   ['series-CS']],
                                ['series',   7, true, '6th style',   ['series-CS']],
                                ['series',   8, true, '7th style',   ['series-CS']],
                                ['series',   9, true, '8th style',   ['series-CS']],
                                ['series',  10, true, '9th style',   ['series-CS']],
                                ['series',  11, true, '10th style',  ['series-CS']],
                                ['series',  12, true, 'IIDX RED',    ['series-CS']],
                                ['series',  13, true, 'HAPPY SKY',   ['series-CS']],
                                ['series',  14, true, 'DistorteD',   ['series-CS']],
                                ['series',  15, true, 'GOLD',        ['series-CS']],
                                ['series',  16, true, 'DJ TROOPERS', ['series-CS']],
                                ['series',  17, true, 'EMPRESS',     ['series-CS']],
                                ['series',  18, true, 'SIRIUS'],
                                ['series',  19, true, 'Resort Anthem'],
                                ['series',  20, true, 'Lincle'],
                                ['series',  21, true, 'tricoro'],
                                ['series',  22, true, 'SPADA'],
                                ['series',  23, true, 'PENDUAL'],
                                ['series',  24, true, 'copula'],
                                ['series',  25, true, 'SINOBUZ'],
                                ['series',  26, true, 'CANNON BALLERS'],
                                ['series',  27, true, 'Rootage'],
                                ['series',  28, true, 'HEROIC VERSE'],
                                ['series',  29, true, 'BISTROVER'],
                                ['series', 999, true, 'INFINITAS',   ['series-CS']] ]);

    // 検索条件のシリーズ項目変更時に全選択・全解除の表示変更
    jQuery('.series-checkbox').change(function() {
        toggleSelectLink('#changeselect-series-ALL','series-checkbox', '全');
        toggleSelectLink('#changeselect-series-CS','series-CS', 'CS作全');
    });

    // 検索条件のシリーズ項目に全選択・全解除のリンク追加
    toggleSelectLink('#changeselect-series-ALL','series-checkbox', '全');
    toggleSelectLink('#changeselect-series-CS','series-CS', 'CS作全');

    // 検索条件の可変BPMボタン押下時
    jQuery('#opt_bpm_changing').click(function() { toggleBPMOptButton(this); });
    jQuery('#opt_bpm_changing').change(function() { toggleBPMOptButton(this,true); });

    // 検索条件の譜面毎条件項目作成
    makeScorefilter('#scorefilterbox',[ ['SPB',0,3],
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
    makeCheckbox('#releasetypebox', releaseButtonList);

    // 検索条件のリリース条件項目変更時に全選択・全解除の表示変更
    jQuery('.releasetype-checkbox').change(function() {
        toggleSelectLink('#changeselect-releasetype-ALL','releasetype-checkbox', '全');
        toggleSelectLink('#changeselect-releasetype-championship','releasetype-championship', 'CH全');
        toggleSelectLink('#changeselect-releasetype-Pack','releasetype-pack', 'パック全');
    });

    // 検索条件のリリース条件項目に全選択・全解除のリンク追加
    toggleSelectLink('#changeselect-releasetype-ALL','releasetype-checkbox', '全');
    toggleSelectLink('#changeselect-releasetype-championship','releasetype-championship', 'CH全');
    toggleSelectLink('#changeselect-releasetype-Pack','releasetype-pack', 'パック全');

    // データ保存条件のパック購入状況項目作成
    let purchaseButtonList = [];
    for (let pid in packlist) {
        purchaseButtonList.push( ['purchase', 'Pack' + pid, false, packlist[pid].shortName + ' 未購入'] );
    };
    makeCheckbox('#purchasebox',purchaseButtonList);
    
    // 日付のセレクトボックスを作成
    makeSelectMonth('#bitdate-min', LaunchDate, now, true);
    makeSelectMonth('#bitdate-max', LaunchDate, now, false);
    makeSelectMonth('#releasedate-min', LaunchDate, now, true);
    makeSelectMonth('#releasedate-max', LaunchDate, now, false);
    jQuery('#bitdate-min option:first-child').attr('selected','');
    jQuery('#bitdate-max option:last-child').attr('selected','');
    jQuery('#releasedate-min option:first-child').attr('selected','');
    jQuery('#releasedate-max option:last-child').attr('selected','');

    // 日付セレクトで未指定(val=2000-01-01)の場合に至を無効化
    jQuery('#bitdate-min').change(function() {
        jQuery('#bitdate-max').prop('disabled', (jQuery(this).val() === '2000-01-01'));
    });
    jQuery('#releasedate-min').change(function() {
        jQuery('#releasedate-max').prop('disabled', (jQuery(this).val() === '2000-01-01'));
    });

    // ファイル選択ボタン押下時
    jQuery('#localfile').on('change', function() {
        if ('info' in userJSON) {
            if (!confirm('読込済みのデータがありますが、読込みますか？')) { return false; };
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
            toastbox.fadeIn('先に「データを新規作成」してください。');
            toastbox.timerFadeOut(5000);
        };
    });

    // 譜面オプションボタン押下時
    jQuery('.score_opt input[type="number"]').click(function() { toggleScoreOptButton(this); });
    jQuery('.score_opt input[type="number"]').change(function() { toggleScoreOptButton(this,true); });

    // 検索結果のヘッダー行を作成
    let LvArr = ['01','02','03','04','05','06','07','08','09','10','11','12','NO'];
    let bitEndDate = new Date();
    bitEndDate.setFullYear(bitEndDate.getFullYear() + 2);
    pushheaderLine('sp-lv','par-level','Single&nbsp;LEVEL&nbsp;',  LvArr);
    pushheaderLine('spn-lv','par-level','Single&nbsp;NORMAL&nbsp;LEVEL&nbsp;',  LvArr);
    pushheaderLine('sph-lv','par-level','Single&nbsp;HYPER&nbsp;LEVEL&nbsp;',   LvArr);
    pushheaderLine('spa-lv','par-level','Single&nbsp;ANOTHER&nbsp;LEVEL&nbsp;', LvArr);
    pushheaderLine('dp-lv','par-level','Double&nbsp;LEVEL&nbsp;',  LvArr);
    pushheaderLine('dpn-lv','par-level','Double&nbsp;NORMAL&nbsp;LEVEL&nbsp;',  LvArr);
    pushheaderLine('dph-lv','par-level','Double&nbsp;HYPER&nbsp;LEVEL&nbsp;',   LvArr);
    pushheaderLine('dpa-lv','par-level','Double&nbsp;ANOTHER&nbsp;LEVEL&nbsp;', LvArr);
    pushheaderLine('spn-notes','par-notes','Single&nbsp;NORMAL&nbsp;NOTES&nbsp;',  NotesArray);
    pushheaderLine('sph-notes','par-notes','Single&nbsp;HYPER&nbsp;NOTES&nbsp;',   NotesArray);
    pushheaderLine('spa-notes','par-notes','Single&nbsp;ANOTHER&nbsp;NOTES&nbsp;', NotesArray);
    pushheaderLine('dpn-notes','par-notes','Double&nbsp;NORMAL&nbsp;NOTES&nbsp;',  NotesArray);
    pushheaderLine('dph-notes','par-notes','Double&nbsp;HYPER&nbsp;NOTES&nbsp;',   NotesArray);
    pushheaderLine('dpa-notes','par-notes','Double&nbsp;ANOTHER&nbsp;NOTES&nbsp;', NotesArray);
    pushheaderLine('bpm','par-bpm','BPM&nbsp;', BPMArray);
    pushheaderLine('relt',  'par-rel-type', 'RELEASED&nbsp;TYPE&nbsp;:&nbsp;', ['Default','Monthly','BIT','DJP','Championship1','Championship2','Championship3','Championship4',
    'Pack1','Pack2','Pack3','Pack4','Pack5','Pack6','Pack7','Pack8','Pack9','Pack10','Pack11','Pack12','Pack13','PackSS1','Unreleased']);
    pushheaderLine('rely',  'par-rel-year', 'RELEASED&nbsp;YEAR&nbsp;:&nbsp;', makeMonthArray(LaunchDate, bitEndDate));
    pushheaderLine('relym', 'par-rel-month','RELEASED&nbsp;MONTH&nbsp;:&nbsp;', makeMonthArray(LaunchDate, bitEndDate, true));
    pushheaderLine('bity',  'par-bit-year', 'BIT&nbsp;UNLOCKED&nbsp;YEAR&nbsp;:&nbsp;', makeMonthArray(LaunchDate, bitEndDate).concat(['NO']));
    pushheaderLine('bitym', 'par-bit-month','BIT&nbsp;UNLOCKED&nbsp;MONTH&nbsp;:&nbsp;', makeMonthArray(LaunchDate, bitEndDate, true).concat(['NO']));
    makeHeaderLine(headerLine);

    // チェックボックスをラジオボタンの様に使用する
    let csobj = jQuery('#musicsearch').find('input[data-checkgroup]');
    csobj.on('click',function() {
		var group = jQuery(this).attr('data-checkgroup');
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
                let sliceID = musicJSON[i].ID.substr(0,3);
                musicJSON[i]['VNo'] = Number(sliceID);
                musicJSON[i]['VName'] = VerArray[sliceID].VName;
                musicJSON[i]['VShortName'] = VerArray[sliceID].VShortName;

                // 譜面の存在確認
                SPB = ("Beginner"    in musicJSON[i].Scores.Single) ? musicJSON[i].Scores.Single.Beginner    : {Level: 0, BPM: 0};
                SPN = ("Normal"      in musicJSON[i].Scores.Single) ? musicJSON[i].Scores.Single.Normal      : {Level: 0, BPM: 0};
                SPH = ("Hyper"       in musicJSON[i].Scores.Single) ? musicJSON[i].Scores.Single.Hyper       : {Level: 0, BPM: 0};
                SPA = ("Another"     in musicJSON[i].Scores.Single) ? musicJSON[i].Scores.Single.Another     : {Level: 0, BPM: 0};
                SPL = ("Leggendaria" in musicJSON[i].Scores.Single) ? musicJSON[i].Scores.Single.Leggendaria : {Level: 0, BPM: 0};
                DPB = ("Beginner"    in musicJSON[i].Scores.Double) ? musicJSON[i].Scores.Double.Beginner    : {Level: 0, BPM: 0};
                DPN = ("Normal"      in musicJSON[i].Scores.Double) ? musicJSON[i].Scores.Double.Normal      : {Level: 0, BPM: 0};
                DPH = ("Hyper"       in musicJSON[i].Scores.Double) ? musicJSON[i].Scores.Double.Hyper       : {Level: 0, BPM: 0};
                DPA = ("Another"     in musicJSON[i].Scores.Double) ? musicJSON[i].Scores.Double.Another     : {Level: 0, BPM: 0};
                DPL = ("Leggendaria" in musicJSON[i].Scores.Double) ? musicJSON[i].Scores.Double.Leggendaria : {Level: 0, BPM: 0};

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
            jQuery('#debug').text('検索準備 / ' + e.toString());
        };
        try {
            filteredJSON = musics.filter(musicJSON);
        } catch(e) {
            jQuery('#debug').text('filteredJSON / ' + e.toString());
        };
        try {
            sortedJSON = musics.sort(filteredJSON);
        } catch(e) {
            jQuery('#debug').text('sortedJSON / ' + e.toString());
        };
        try {
            musics.write(sortedJSON);
        } catch(e) {
            jQuery('#debug').text('musics.write / ' + e.toString());
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

    // バージョンヘッダーをクリックで開閉
    jQuery('.musiclist .headerline').click(function() {
        // クリック対象が開いていたら
        if ( jQuery(this).hasClass('opened') ) {
            jQuery(this).parent().children('.music,.music_other').hide();
        // クリック対象が閉じていたら
        } else {
            if ( jQuery('#singleopen').prop("checked") ) {
                jQuery('.musiclist tbody').children('.music, .music_other').hide();
                jQuery('.musiclist .headerline').not(this).removeClass('opened');
                classStr = (jQuery('#extendopen').prop('checked') ? '.music, .music_other' : '.music');
                jQuery(this).parent().children(classStr).fadeIn('fast');
            } else {
                // jQuery('.musiclist tbody').children('.music_other').hide();
                classStr = (jQuery('#extendopen').prop('checked') ? '.music, .music_other' : '.music');
                jQuery(this).parent().children(classStr).fadeIn('fast');
            };
        };
        jQuery(this).toggleClass('opened');
    });

    // 検索条件のグループをクリックで開閉
    jQuery('fieldset legend input').change(function() {
        let target = jQuery(this).parent().parent().children('div:not(.hidden),hr:not(.hidden)');
        jQuery(this).prop("checked") ? target.fadeIn('fast') : target.fadeOut('fast');
    });

    // 新曲追加用フォームの入力時
    jQuery('#formtab-7_content input, #formtab-7_content textarea').change(function() {
        newMusic.makeJSON();
    });

    // 譜面検索条件ボタン・購入済みパックボタンのクリックイベントを実行しておく(再読み込み対策)
    jQuery('.score_opt input[type="number"]').each(function() { toggleScoreOptButton(this, true); });
    jQuery('.purchase input').each(function() { togglePackButton(this, true); });
    jQuery('#opt_bpm_changing').each(function() { toggleBPMOptButton(this, true); });

};


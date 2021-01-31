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
let confirmWindow = true;
let headerLine = [
    ['v01-header','par-version','1st style'],
    ['v02-header','par-version','substream'],
    ['v03-header','par-version','2nd style'],
    ['v04-header','par-version','3rd style'],
    ['v05-header','par-version','4th style'],
    ['v06-header','par-version','5th style'],
    ['v07-header','par-version','6th style'],
    ['v08-header','par-version','7th style'],
    ['v09-header','par-version','8th style'],
    ['v10-header','par-version','9th style'],
    ['v11-header','par-version','10th style'],
    ['v12-header','par-version','IIDXRED'],
    ['v13-header','par-version','HAPPY SKY'],
    ['v14-header','par-version','DistorteD'],
    ['v15-header','par-version','GOLD'],
    ['v16-header','par-version','DJ TROOPERS'],
    ['v17-header','par-version','EMPRESS'],
    ['v18-header','par-version','SIRIUS'],
    ['v19-header','par-version','Resort Anthem'],
    ['v20-header','par-version','Lincle'],
    ['v21-header','par-version','tricoro'],
    ['v22-header','par-version','SPADA'],
    ['v23-header','par-version','PENDUAL'],
    ['v24-header','par-version','copula'],
    ['v25-header','par-version','SINOBUZ'],
    ['v26-header','par-version','CANNON BALLERS'],
    ['v27-header','par-version','Rootage'],
    ['v28-header','par-version','HEROIC VERSE'],
    ['v29-header','par-version','BISTROVER'],
    ['v999-header','par-version','INFINITAS']
];
let BPMArray = [    '-99','100-109','110-119','120-129','130-139','140-149','150-159','160-169','170-179','180-189',
                '190-199','200-209','210-219','220-',                                                               'BPM_CHANGE'];
let NotesArray = [      '-99',  '100-199',  '200-299',  '300-399',  '400-499',  '500-599',  '600-699',  '700-799',  '800-899',  '900-999',
                  '1000-1099','1100-1199','1200-1299','1300-1399','1400-1499','1500-1599','1600-1699','1700-1799','1800-1899','1900-1999',
                  '2000-',    'NO'];
let userJSON = [];

let PROJECT_ID = 'infinitas-musiclist';

// Array of API discovery doc URLs for APIs used by the quickstart
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
let SCOPES = 'https://www.googleapis.com/auth/drive';

let authorizeButton = document.getElementById('authorize_button');
let signoutButton = document.getElementById('signout_button');
let getButton = document.getElementById('get_button');


function zeroPadding(num,length){
    if (String(num).length >= length ) { return String(num); }
    else {return ('0'.repeat(length) + num).slice(-length); };
};

var dateFormat = 
 {
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
 * ログイン処理の実行
 *
 * @param 
 * @return なし
 *
**/
function execLogin(token = ''){
    // 入力欄チェック
//    if ( checkId() ||
//         checkPassword() ) {
//        alert('ID・参照パス・編集パスを正しく入力してください。');
//        return false;
//    };

    // ログイン要求
    let tokenLogin = !(token === '');
    
    let serialized = "";
    if ( tokenLogin ) {
        serialized = '{"token":"' + token + '"}';
    } else {
        let postdata = {};
        postdata.id = jQuery('input#id').val();
        postdata.readpassword = jQuery('input#readpassword').val();
        postdata.writepassword = jQuery('input#writepassword').val();
        serialized = JSON.stringify(postdata);
    }
    let loginReq = getJSONFile('/customapi/infinitas/login/', serialized);
    loginReq.done(function(getData,textStatus,jqXHR) {
        userJSON = getData;

        switch (userJSON.status) {
            case 'OK' :
                if (!tokenLogin) { alert('ログインしました'); };
                jQuery("label[for='setmyid']").text( 'ログイン済' );
                jQuery('#setmyid').prop('checked', true);

                Cookies.set('infinitas_rtoken', getData.rtoken, { expires: 30, path: '', sameSite: 'Lax', secure: true });
                jQuery('.sg2').removeClass('hidden');

                // 解禁状況の取得
                let canplayReq = getJSONFile('/customapi/infinitas/get/status/user/', '{"token":"' + userJSON.token + '"}');
                canplayReq.done(function(getData,textStatus,jqXHR) {
                    if ( 'Canplay' in getData ) {
                        userJSON.Canplay = ('Musics' in getData.Canplay) ? getData.Canplay.Musics : {};

                        let packlist = [ {'mid':'0000001','inputid':'#purchase-Pack1'},
                                         {'mid':'0000002','inputid':'#purchase-Pack2'},
                                         {'mid':'0000003','inputid':'#purchase-Pack3'},
                                         {'mid':'0000004','inputid':'#purchase-Pack4'},
                                         {'mid':'0000005','inputid':'#purchase-Pack5'},
                                         {'mid':'0000006','inputid':'#purchase-Pack6'},
                                         {'mid':'0000007','inputid':'#purchase-Pack7'},
                                         {'mid':'0000008','inputid':'#purchase-Pack8'},
                                         {'mid':'0000009','inputid':'#purchase-Pack9'},
                                         {'mid':'0000010','inputid':'#purchase-Pack10'},
                                         {'mid':'0000011','inputid':'#purchase-Pack11'},
                                         {'mid':'0000012','inputid':'#purchase-Pack12'},
                                         {'mid':'0000013','inputid':'#purchase-Pack13'},
                                         {'mid':'0000014','inputid':'#purchase-Pack14'},
                                         {'mid':'0000015','inputid':'#purchase-Pack15'},
                                         {'mid':'0000016','inputid':'#purchase-Pack16'},
                                         {'mid':'0000017','inputid':'#purchase-Pack17'},
                                         {'mid':'0000018','inputid':'#purchase-Pack18'},
                                         {'mid':'0000019','inputid':'#purchase-Pack19'}, 
                                         {'mid':'0000020','inputid':'#purchase-Pack20'},
                                         {'mid':'0000021','inputid':'#purchase-Pack21'},
                                         {'mid':'0000022','inputid':'#purchase-Pack22'},
                                         {'mid':'0000023','inputid':'#purchase-Pack23'},
                                         {'mid':'0000024','inputid':'#purchase-Pack24'},
                                         {'mid':'0000025','inputid':'#purchase-Pack25'},
                                         {'mid':'0000026','inputid':'#purchase-Pack26'},
                                         {'mid':'0000027','inputid':'#purchase-Pack27'},
                                         {'mid':'0000028','inputid':'#purchase-Pack28'},
                                         {'mid':'0000029','inputid':'#purchase-Pack29'}, 
                                         {'mid':'0000030','inputid':'#purchase-Pack30'},
                                         {'mid':'0001001','inputid':'#purchase-PackSS1'},
                                         {'mid':'0001002','inputid':'#purchase-PackSS2'},
                                         {'mid':'0001003','inputid':'#purchase-PackSS3'},
                                         {'mid':'0001004','inputid':'#purchase-PackSS4'},
                                         {'mid':'0001005','inputid':'#purchase-PackSS5'},
                                         {'mid':'0001006','inputid':'#purchase-PackSS6'},
                                         {'mid':'0001007','inputid':'#purchase-PackSS7'},
                                         {'mid':'0001008','inputid':'#purchase-PackSS8'},
                                         {'mid':'0001009','inputid':'#purchase-PackSS9'},
                                         {'mid':'0001010','inputid':'#purchase-PackSS10'},
                                        ];
                        for(let pack of packlist){
                            if (pack.mid in userJSON.Canplay) {
                                jQuery(pack.inputid).prop('checked',(userJSON.Canplay[pack.mid].Normal === '1'));
                                togglePackButton(jQuery(pack.inputid), false);
                            };
                        };
                    } else {
                        userJSON.Canplay = {};
                    };
                } )
                .fail(function(jqXHR, textStatus, errorThrown ) {
                } )
                .always(function(getData,textStatus,jqXHR) {
                } );

                // TODO:ログイン後のいろいろを追加する
                break;
            case 'Readonly Login' :
                if (!tokenLogin) { alert('編集パスが確認できないため読み込み専用でログインしました'); };
                jQuery('#setmyid').prop('checked', true);
                jQuery("label[for='setmyid']").text( 'ログイン済(参照のみ)');

                Cookies.set('infinitas_rtoken', getData.rtoken, { expires: 30, path: '', sameSite: 'Lax', secure: true });
                // TODO:ログイン後のいろいろを追加する
                jQuery('.sg2').removeClass('hidden');

                break;
            case 'newuser' :
                if ( confirm('新規登録しますか？') ) {
                    execLogin();
                } else {
                    // いいえの場合はログインボタンのチェックを外す
                    jQuery('#setmyid').prop('checked', false);
                };
                break;
            case 'login failed' :
                if (!tokenLogin) { alert('ログインできませんでした。'); };
                // ログインボタンのチェックを外す
                jQuery('#setmyid').prop('checked', false);
                break;
            default:
                if (!tokenLogin) { alert('不明な応答がありました。'); };
                // ログインボタンのチェックを外す
                jQuery('#setmyid').prop('checked', false);
                break;
        };
    } )
    .fail(function(jqXHR, textStatus, errorThrown ) {
        if (!tokenLogin) { alert('ログインできませんでした。'); };
        // ログインボタンのチェックを外す
        jQuery('#setmyid').prop('checked', false);
    } )
    .always(function(getData,textStatus,jqXHR) {
        // ライバル情報欄を有効/無効化
        jQuery('#id').val(userJSON.id);
        if ("readpassword" in userJSON) { jQuery('#readpassword').val(userJSON.readpassword); };
        jQuery('#savesetting .sg2 input').prop('disabled',(!jQuery('#setmyid').prop('checked')));

        if ( jQuery('#show-savesetting').prop('checked') ) {
            jQuery('.sg2').show();
        } else {
            jQuery('.sg2').hide();
        };

    });
};

/**
 * ログアウト処理の実行
 *
 * @param なし
 * @return なし
 *
**/
function execLogout() {
    if (confirm('ログアウトしますか？')) {
        Cookies.remove('infinitas_rtoken');
    
        // JSONリクエスト
        let postdata = {};
        postdata.token = userJSON.token;
        let serialized = JSON.stringify(postdata);
        let logout = getJSONFile('/customapi/infinitas/logout/', serialized);
    
        jQuery('#id, #writepassword, #readpassword, #savesetting input[type=text]').val('');
        jQuery('#setmyid, #setrivalid').prop('checked', false);
        jQuery('#savesetting .sg2 input').prop('disabled', true);
        jQuery("label[for='setmyid']").text('上記IDでログイン or 新規登録');
        jQuery("label[for='setrivalid']").text('ライバル情報更新');
        jQuery('.sg2').addClass('hidden');
        jQuery('.sg2').hide();
        
        userJSON = undefined;
    } else {
        jQuery('#setmyid').prop('checked', true);
        return false;
    };
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
        addHtml += '<tbody id="' + item[0] + '" class="headertbody"><tr class="headerline ' + item[1] + '"><th colspan="13">' + item[2] +'</th></tr></tbody>';
    };

    jQuery('.musiclist').append(addHtml);
    jQuery('.musiclist tbody').hide();

};

/**
 * 検索条件のシリーズ項目の作成
 *
 * @param {String}  target  - 対象セレクトタグのid(jQueryのセレクタ)
 *        {{String,String,Boolean,String,{String, ... }}, ... } items - {name属性, VNo, isChecked?, 表示テキスト, {追加クラス, …}}の配列
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
        let min_label = '<span id="' + item[0] + '-levels-min" class="level_number"></span>';
        let max_label = '<span id="' + item[0] + '-levels-max" class="level_number"></span>';
        let min_input = '<input id="opt_' + item[0] + '_notes_min" name="opt_' + item[0] + '_notes_min" type="text" placeholder="0" class="input-60" />';
        let max_input = '<input id="opt_' + item[0] + '_notes_max" name="opt_' + item[0] + '_notes_max" type="text" placeholder="99999" class="input-60" />';
        addHtml += '<div class="clearfix">' +
                   '<div class="fieldname">' + item[0] + '&nbsp;:&nbsp;' + min_label + '～' + max_label + '</div>' +
                   '<div class="inblock slider_outer"><div id="' + item[0] + '-levels"></div></div>' +
                   '</div>' +
                   '<div class="clearfix">' +
                   '<div class="fieldname">特殊ノート</div>' +
                   '<div class="vname score_opt">' +
                   '<input id="opt_' + item[0] + '_CN" name="opt_' + item[0] + '_CN" type="number" class="opt hidden" value="0" />' +
                   '<label for="opt_' + item[0] + '_CN">CN : -</label>' +
                   '</div>' +
                   '<div class="vname score_opt">' +
                   '<input id="opt_' + item[0] + '_BSS" name="opt_' + item[0] + '_BSS" type="number" class="opt hidden" value="0" />' +
                   '<label for="opt_' + item[0] + '_BSS">BSS : -</label>' +
                   '</div>' +
                   '<div class="vname score_opt">' +
                   '<input id="opt_' + item[0] + '_HCN" name="opt_' + item[0] + '_HCN" type="number" class="opt hidden" value="0" />' +
                   '<label for="opt_' + item[0] + '_HCN">HCN : -</label>' +
                   '</div>' +
                   '</div>' +
                   '<div class="clearfix">' +
                   '<div class="fieldname">ノート数</div>' +
                   '<div class="notes-menu">' + min_input + '</div>' +
                   '<div class="inblock pad-lr5">～</div>' +
                   '<div class="notes-menu">' + max_input + '</div>' +
                   '</div>' +
                   '</div>' +
                   ((item[0] === items.slice(-1)[0][0]) ? '' : '<hr class="clearfix" />');
    };
    jQuery(target).append(addHtml);

    for (item of items) {
        slider = jQuery('#' + item[0] + '-levels')[0];
        noUiSlider.create(slider, { 
            range: {'min': 0, 'max': 12},
            step: 1,
            start: [0,12],
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

    if (!noToggle) { jqobj.val(optText.length-1  <= Number(jqobj.val()) ? 0 : Number(jqobj.val()) + 1); };
    if (jqobj.val() == 0) { jqobj.removeClass("checked"); }
    else { jqobj.addClass("checked"); };
    jQuery("label[for='" + objid + "']").text( objid.replace(/^opt_.*_/g, "") + " : " + optText[jqobj.val()] );
};

function toggleBPMOptButton(obj, noToggle = false) {
    let jqobj = jQuery(obj);
    let objid = jqobj.attr('id');
    let optText = ["–", "有", "無"];

    if (!noToggle) { jqobj.val(optText.length-1  <= Number(jqobj.val()) ? 0 : Number(jqobj.val()) + 1); };
    if (jqobj.val() == 0) { jqobj.removeClass("checked"); }
    else { jqobj.addClass("checked"); };
    jQuery("label[for='" + objid + "']").text( '可変 : ' + optText[jqobj.val()] );
};

/**
 * パック情報ボタントグル
 */
function togglePackButton(obj,isUpdate = true) {
    let jqobj = jQuery(obj);
    let objid = jqobj.attr('id');

    jQuery("label[for='" + objid + "']").text( objid.replace("purchase-"," ") + ( jqobj.prop('checked') ? '購入済' : '未購入' ) );
    if (!isUpdate) { return true; };

    update.start(objid.replace("purchase-Pack","pack_"),jqobj.prop('checked'));
    jQuery.each(musics.JSON,function (ind,val) {
        if ('Type' in val.Release && val.Release.Type.indexOf(objid.replace("purchase-Pack","Pack")) >= 0 ) {
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
 * ログイン・ライバル情報取得
 */
function getJSONFile(requestURL, serialized) {
    return jQuery.post ( requestURL, serialized, null, 'json' );
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
    updateArray: {token:"",list:[]},
    toastObj: jQuery('#toastbox'),

    execUpdate: function () {
        let self = this;
        delete self.timeoutID;
        self.updateArray.token = userJSON.token;
        let serialized = JSON.stringify(self.updateArray);
        let result = getJSONFile('/customapi/infinitas/set/status/user/', serialized );
        result.done(function(getData,textStatus,jqXHR) {
            for (item of self.updateArray.list) {
                let tmpVal = item.mid_diff.split('_');
                switch (tmpVal[1]) {
                    case 'b': tmpVal[1] = 'Beginner'; break;
                    case 'n': tmpVal[1] = 'Normal'; break;
                    case 'h': tmpVal[1] = 'Hyper'; break;
                    case 'a': tmpVal[1] = 'Another'; break;
                    case 'l': tmpVal[1] = 'Leggendaria'; break;
                };

                if (!(tmpVal[0] in userJSON.Canplay)) { userJSON.Canplay[tmpVal[0]] = {'Beginner':'0','Normal':'0','Hyper':'0','Another':'0','Leggendaria':'0'}};
                userJSON.Canplay[tmpVal[0]][tmpVal[1]] = item.isAdd ? '1' : '0';
            }
            self.toastObj.html(self.updateArray.list.length + '件の楽曲解禁状況を更新しました。');
            self.updateArray.list = [];

            self.timeoutID = window.setTimeout(function() {self.after();}, 5000);

        } )
        .fail(function(jqXHR, textStatus, errorThrown ) {
        } )
        .always(function(getData,textStatus,jqXHR) {
        });
    },
    after: function() {
        this.toastObj.fadeOut('fast');
        this.toastObj.html('');
    },
    cancel: function() {
        if(typeof this.timeoutID == "number") {
            window.clearTimeout(this.timeoutID);
            delete this.timeoutID;
        };
    },
    start: function(val, isAdd) {
        let self = this;
        self.cancel();

        let index = self.updateArray.list.findIndex((v) => v.mid_diff === val);
        if (index >= 0) { self.updateArray.list.splice(index ,1 ); };
        self.updateArray.list.push({"mid_diff":val, "isAdd":isAdd});
        self.timeoutID = window.setTimeout(function() {self.execUpdate();}, 5000);
        self.toastObj.html(self.updateArray.list.length + '件の楽曲解禁状況の更新中…');
        self.toastObj.fadeIn('fast');
    }
};

/**
 * 楽曲JSONファイル取得
 */
let musics = {
    JSON: {},
    infoJSON: {},

    getJSON: function(URL) {
        jQuery('#search-message').html('<span>データファイル読み込み中…</span>');

        // JSONファイルの取得
        let result = getJSONFile(URL, null );
        let self = this;
        result.done(function(getData,textStatus,jqXHR) {
            self.JSON = getData.musics;
            self.infoJSON = getData.info;

            //ここにget error時の処理追加

            // 曲名の自動補完
            let titleSet = new Set();
            self.JSON.forEach(function(val,idx,ar){ titleSet.add(val.Title); });
            titleSet = new Set([...titleSet].sort());
            titleSet.forEach(function(val,idx,ar){ jQuery('<option></option>').attr('value', val).appendTo('#titlelist'); });

            // ジャンル名の自動補完
            let genreSet = new Set();
            self.JSON.forEach(function(val,idx,ar){ genreSet.add(val.Genre); });
            genreSet = new Set([...genreSet].sort());
            genreSet.forEach(function(val,idx,ar){ jQuery('<option></option>').attr('value', val).appendTo('#genrelist'); });

            // アーティスト名の自動補完
            let artistSet = new Set();
            self.JSON.forEach(function(val,idx,ar){ artistSet.add(val.Artist); });
            artistSet = new Set([...artistSet].sort());
            artistSet.forEach(function(val,idx,ar){ jQuery('<option></option>').attr('value', val).appendTo('#artistlist'); });

            jQuery('#search-message').html('<span>データファイル読み込み完了</span>');
            jQuery('.infotable').append(
              '<tbody><tr><td>' + dateFormat.format(new Date(self.infoJSON.lastupdated), 'yyyy/MM/dd<br />hh:mm') + '</td>' +
                         '<td>' + self.infoJSON.music_count + '曲<br />' + self.infoJSON.chart_count_all + '譜面</td>' +
                         '<td>' + self.infoJSON.chart_single_all + '譜面</td>' +
                         '<td class="spb">' + self.infoJSON.chart_single_beginner + '譜面</td>' +
                         '<td class="spn">' + self.infoJSON.chart_single_normal + '譜面</td>' +
                         '<td class="sph">' + self.infoJSON.chart_single_hyper + '譜面</td>' +
                         '<td class="spa">' + self.infoJSON.chart_single_another + '譜面</td>' +
                         '<td>' + self.infoJSON.chart_double_all + '譜面</td>' +
                         '<td class="dpn">' + self.infoJSON.chart_double_normal + '譜面</td>' +
                         '<td class="dph">' + self.infoJSON.chart_double_hyper + '譜面</td>' +
                         '<td class="dpa">' + self.infoJSON.chart_double_another + '譜面</td>' +
                         '<!-- <td>' + self.infoJSON.user_count + '人</td> -->' +
              '</tr></tbody>');
            jQuery('#filter-button').prop('disabled',false);
        } )
        .fail(function(jqXHR, textStatus, errorThrown ) {
            jQuery("#debug").append('<div class="">楽曲情報が取得できませんでした… JSON取得失敗(' + errorThrown + ')</div>');
        } )
        .always(function(getData,textStatus,jqXHR) {
        });
    },

    filter: function(items) {
        jQuery('#search-message').html('<span>検索中…</span>');
        s.getSearchParam();
        let now = dateFormat.format(new Date(), 'yyyy-MM-dd');

        return jQuery.grep(items,function(item,index){
            // シリーズ情報でフィルタ
            if ( s.series.indexOf(parseFloat(item.VNo)) == -1 ) { return false; };

            // 譜面情報でフィルタ
            if ( !( s.checkScore( item.Scores.Single.Beginner, "SPB" ) &&
                    s.checkScore( item.Scores.Single.Normal,   "SPN" ) &&
                    s.checkScore( item.Scores.Single.Hyper,    "SPH" ) &&
                    s.checkScore( item.Scores.Single.Another,  "SPA" ) &&
                    s.checkScore( item.Scores.Double.Normal,   "DPN" ) &&
                    s.checkScore( item.Scores.Double.Hyper,    "DPH" ) &&
                    s.checkScore( item.Scores.Double.Another,  "DPA" ) ) ) { return false; };

            // BPMでフィルタ
            if ( s.bpm.min !== 0 || s.bpm.max !== 9999 || s.bpm.changing !== 0) {
                if (!isNaN(item.bpm)) {
                    if ( s.bpm.changing === 1 || ( s.bpm.min > Number(item.bpm) ) || ( Number(item.bpm) > s.bpm.max ) ) { return false; };
                } else {
                    if ( s.bpm.changing === 2 ) { return false; };
                };
            };

            // 配信条件でフィルタ
            if ( s.release.type.indexOf(item.Release.Type) == -1 ) { return false; };

            // 配信開始月でフィルタ
            if ( s.release.min !== new Date('2000-01-01').getTime() && s.release.min && s.release.max) {
                if ( (!item.Release.Date) ||
                     ( s.release.min > new Date(item.Release.Date).getTime() ) ||
                     ( new Date(item.Release.Date).getTime() > s.release.max )
                   ) { return false; };
            };

            // BIT配信開始月でフィルタ
            if ( s.bit.min !== new Date('2000-01-01').getTime() && s.bit.min && s.bit.max ) {
                if ( (!item.Release.BitDate) ||
                     ( item.Release.BitDate > now) ||
                     ( s.bit.min > new Date(item.Release.BitDate).getTime() ) ||
                     ( new Date(item.Release.BitDate).getTime() > s.bit.max )
                   ) { return false; };
            };

            // 入手可否でフィルタ
            if ( s.available !== 'ALL' ) {
                if ( item.Release.Type === 'Default' ||
                     item.Release.Type === 'DJP' ||
                     item.Release.Type.indexOf('Pack') > -1 ||
                     (item.Release.Type === 'Monthly' && item.Release.Date.slice(0,7) === now.slice(0,7) && item.Release.Date <= now ) ||
                     ( item.Release.BitDate && item.Release.BitDate <= now ) ) { 
                    if ( s.available === 'no' ) { return false; };
                } else {
                    if ( s.available === 'yes' ) { return false; };
                };
            };

            // 解禁状況でフィルタ
            if ( s.unlocked !== 'ALL' ) {
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
                    if ( s.unlocked === 'partially' || s.unlocked === 'partiallyno' || s.unlocked === 'no' ) { return false; };
                } else {
                    let canplay = {'Beginner':'0','Normal':'0','Hyper':'0','Another':'0','Leggendaria':'0'};
                    if ('Canplay' in userJSON && item.ID in userJSON.Canplay) { canplay = userJSON.Canplay[item.ID]; };
                    if (!check_canplay(canplay, item.Scores, s.unlocked)) { return false; };
                };
            };

            // 曲名でフィルタ
            if (s.title) {
                if (item.Title.indexOf(s.title) == -1) { return false; };
            };

            // ジャンル名でフィルタ
            if (s.genre) {
                if (item.Genre.indexOf(s.genre) == -1) { return false; };
            };

            // アーティスト名でフィルタ
            if (s.artist) {
                if (item.Artist.indexOf(s.artist) == -1) { return false; };
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
                        aval = !isNaN(a.bpm) ? Number(a.bpm) : 999;
                        bval = !isNaN(b.bpm) ? Number(b.bpm) : 999;
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
        let now2Y2M =  dateFormat.format(new Date(), 'yy/MM');
        let now4Y2M2D =  dateFormat.format(new Date(), 'yyyy/MM/dd');

        // 前回の結果を初期化
        jQuery(".musiclist .music, .musiclist .music_other").remove();

        // BIT計算用
        let allBit        = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let sumBit        = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let usedBit       = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let NRallBit      = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let NRsumBit      = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let NRusedBit     = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let allMusicSP    = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let sumMusicSP    = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let usedMusicSP   = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let NRallMusicSP  = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let NRsumMusicSP  = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let NRusedMusicSP = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let allMusicDP    = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let sumMusicDP    = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let usedMusicDP   = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let NRallMusicDP  = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let NRsumMusicDP  = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };
        let NRusedMusicDP = { 'Beginner': 0, 'Normal': 0, 'Hyper': 0, 'Another': 0, 'Leggendaria': 0, 'ALL': 0 };

        // テーブルのデータ作成
        let tabledata = {};
        for (let item of headerLine) {tabledata[item[0]] = '';}
        for(let item of items){
            
            // 譜面情報の取得
            let BPMtmp = [];
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
            if (item.Scores.Single.Beginner)    { BPMtmp.push(SPB.BPM); };
            if (item.Scores.Single.Normal)      { BPMtmp.push(SPN.BPM); };
            if (item.Scores.Single.Hyper)       { BPMtmp.push(SPH.BPM); };
            if (item.Scores.Single.Another)     { BPMtmp.push(SPA.BPM); };
            if (item.Scores.Single.Leggendaria) { BPMtmp.push(SPL.BPM); };
            if (item.Scores.Double.Beginner)    { BPMtmp.push(DPB.BPM); };
            if (item.Scores.Double.Normal)      { BPMtmp.push(DPN.BPM); };
            if (item.Scores.Double.Hyper)       { BPMtmp.push(DPH.BPM); };
            if (item.Scores.Double.Another)     { BPMtmp.push(DPA.BPM); };
            if (item.Scores.Double.Leggendaria) { BPMtmp.push(DPL.BPM); };
    
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
                    isReleased = ( ("BitDate" in item.Release) && rBit4Y2M2D > now4Y2M2D ) ? true : false;
                    rTypeClass = isReleased ? ' bitbeforerelease' : ' bit';
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
                    if ( r4Y2M2D > now4Y2M2D ) {
                        isReleased = false;
                        rTypeClass = ' monthlybeforerelease';
                    } else if ( r2Y2M == now2Y2M ) {
                        isBitCalc = false;
                    } else if ( rBit4Y2M2D > now4Y2M2D ) {
                        isReleased = false;
                        rTypeClass = ' monthlynobit';
                    };
                    break;
                default              : rTypeClass = '';                            rTypeStr = 'デフォルト';       rTypeSStr='';      break;
            };

            // 解禁状況の取得・加工
            let canplay = {"Beginner":false,"Normal":false,"Hyper":false,"Another":false,"Leggendaria":false};
            if ('Canplay' in userJSON) {
                canplay.Beginner     = (item.ID in userJSON.Canplay) && (userJSON.Canplay[item.ID].Beginner    == '1') ? true : false;
                canplay.Normal       = (item.ID in userJSON.Canplay) && (userJSON.Canplay[item.ID].Normal      == '1') ? true : false;
                canplay.Hyper        = (item.ID in userJSON.Canplay) && (userJSON.Canplay[item.ID].Hyper       == '1') ? true : false;
                canplay.Another      = (item.ID in userJSON.Canplay) && (userJSON.Canplay[item.ID].Another     == '1') ? true : false;
                canplay.Leggendaria  = (item.ID in userJSON.Canplay) && (userJSON.Canplay[item.ID].Leggendaria == '1') ? true : false;
            };

            // BIT・譜面数計算(Beginner)
            if ( isBitCalc && !isNaN(rBit.Beginner) ) {
                if ( rTypeClass.search(/beforerelease|nobit/) == -1 ){
                    allBit.Beginner += rBit.Beginner; canplay.Beginner ? usedBit.Beginner += rBit.Beginner : sumBit.Beginner += rBit.Beginner;
                    if (!isNaN(SPB.Lv)) { allMusicSP.Beginner++; canplay.Beginner ? usedMusicSP.Beginner++ : sumMusicSP.Beginner++; };
                    if (!isNaN(DPB.Lv)) { allMusicDP.Beginner++; canplay.Beginner ? usedMusicDP.Beginner++ : sumMusicDP.Beginner++; };
                } else {
                    NRallBit.Beginner += rBit.Beginner; canplay.Beginner ? NRusedBit.Beginner += rBit.Beginner : NRsumBit.Beginner += rBit.Beginner;
                    if (!isNaN(SPB.Lv)) { NRallMusicSP.Beginner++; canplay.Beginner ? NRusedMusicSP.Beginner++ : NRsumMusicSP.Beginner++; };
                    if (!isNaN(DPB.Lv)) { NRallMusicDP.Beginner++; canplay.Beginner ? NRusedMusicDP.Beginner++ : NRsumMusicDP.Beginner++; };
                };
            };

            // BIT・譜面数計算(Normal)
            if ( isBitCalc && !isNaN(rBit.Normal) ) {
                if ( rTypeClass.search(/beforerelease|nobit/) == -1 ){
                    allBit.Normal += rBit.Normal; canplay.Normal ? usedBit.Normal += rBit.Normal : sumBit.Normal += rBit.Normal;
                    if (!isNaN(SPN.Lv)) { allMusicSP.Normal++; canplay.Normal ? usedMusicSP.Normal++ : sumMusicSP.Normal++; };
                    if (!isNaN(DPN.Lv)) { allMusicDP.Normal++; canplay.Normal ? usedMusicDP.Normal++ : sumMusicDP.Normal++; };
                } else {
                    NRallBit.Normal += rBit.Normal; canplay.Normal ? NRusedBit.Normal += rBit.Normal : NRsumBit.Normal += rBit.Normal;
                    if (!isNaN(SPN.Lv)) { NRallMusicSP.Normal++; canplay.Normal ? NRusedMusicSP.Normal++ : NRsumMusicSP.Normal++; };
                    if (!isNaN(DPN.Lv)) { NRallMusicDP.Normal++; canplay.Normal ? NRusedMusicDP.Normal++ : NRsumMusicDP.Normal++; };
                };
            };

            // BIT・譜面数計算(Hyper)
            if ( isBitCalc && !isNaN(rBit.Hyper) ) {
                if ( rTypeClass.search(/beforerelease|nobit/) == -1 ){
                    allBit.Hyper += rBit.Hyper; canplay.Hyper ? usedBit.Hyper += rBit.Hyper : sumBit.Hyper += rBit.Hyper;
                    if (!isNaN(SPH.Lv)) { allMusicSP.Hyper++; canplay.Hyper ? usedMusicSP.Hyper++ : sumMusicSP.Hyper++; };
                    if (!isNaN(DPH.Lv)) { allMusicDP.Hyper++; canplay.Hyper ? usedMusicDP.Hyper++ : sumMusicDP.Hyper++; };
                } else {
                    NRallBit.Hyper += rBit.Hyper; canplay.Hyper ? NRusedBit.Hyper += rBit.Hyper : NRsumBit.Hyper += rBit.Hyper;
                    if (!isNaN(SPH.Lv)) { NRallMusicSP.Hyper++; canplay.Hyper ? NRusedMusicSP.Hyper++ : NRsumMusicSP.Hyper++; };
                    if (!isNaN(DPH.Lv)) { NRallMusicDP.Hyper++; canplay.Hyper ? NRusedMusicDP.Hyper++ : NRsumMusicDP.Hyper++; };
                };
            };

            // BIT・譜面数計算(Another)
            if ( isBitCalc && !isNaN(rBit.Another) ) {
                if ( rTypeClass.search(/beforerelease|nobit/) == -1 ){
                    allBit.Another += rBit.Another; canplay.Another ? usedBit.Another += rBit.Another : sumBit.Another += rBit.Another;
                    if (!isNaN(SPA.Lv)) { allMusicSP.Another++; canplay.Another ? usedMusicSP.Another++ : sumMusicSP.Another++; };
                    if (!isNaN(DPA.Lv)) { allMusicDP.Another++; canplay.Another ? usedMusicDP.Another++ : sumMusicDP.Another++; };
                } else {
                    NRallBit.Another += rBit.Another; canplay.Another ? NRusedBit.Another += rBit.Another : NRsumBit.Another += rBit.Another;
                    if (!isNaN(SPA.Lv)) { NRallMusicSP.Another++; canplay.Another ? NRusedMusicSP.Another++ : NRsumMusicSP.Another++; };
                    if (!isNaN(DPA.Lv)) { NRallMusicDP.Another++; canplay.Another ? NRusedMusicDP.Another++ : NRsumMusicDP.Another++; };
                };
            };

            // BIT・譜面数計算(Leggendaria)
            if ( isBitCalc && !isNaN(rBit.Leggendaria) ) {
                if ( rTypeClass.search(/beforerelease|nobit/) == -1 ){
                    allBit.Leggendaria += rBit.Leggendaria; canplay.Leggendaria ? usedBit.Leggendaria += rBit.Leggendaria : sumBit.Leggendaria += rBit.Leggendaria;
                    if (!isNaN(SPL.Lv)) { allMusicSP.Leggendaria++; canplay.Leggendaria ? usedMusicSP.Leggendaria++ : sumMusicSP.Leggendaria++; };
                    if (!isNaN(DPL.Lv)) { allMusicDP.Leggendaria++; canplay.Leggendaria ? usedMusicDP.Leggendaria++ : sumMusicDP.Leggendaria++; };
                } else {
                    NRallBit.Leggendaria += rBit.Leggendaria; canplay.Leggendaria ? NRusedBit.Leggendaria += rBit.Leggendaria : NRsumBit.Leggendaria += rBit.Leggendaria;
                    if (!isNaN(SPL.Lv)) { NRallMusicSP.Leggendaria++; canplay.Leggendaria ? NRusedMusicSP.Leggendaria++ : NRsumMusicSP.Leggendaria++; };
                    if (!isNaN(DPL.Lv)) { NRallMusicDP.Leggendaria++; canplay.Leggendaria ? NRusedMusicDP.Leggendaria++ : NRsumMusicDP.Leggendaria++; };
                };
            };

            // その他
            let comment = item.Comment;
            let BPM = (BPMtmp.every( v => v === BPMtmp[0] ) ) ? BPMtmp[0] : '※';
            if (BPM === '※') {

                // 可変はどうしようね？
    
            };
    
            // 挿入データの作成
            let unlockCheckbox = {
                "B": ((!isNaN(SPB.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-b" name="check-playable" class="check-playable" value="' + item.ID + '_b" ' + (canplay.Beginner    ? 'checked ': '') + ((rTypeSStr.search(/PK#|SS#/) == 0) ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-b"></label>' : '&nbsp;'),
                "N": ((!isNaN(SPN.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-n" name="check-playable" class="check-playable" value="' + item.ID + '_n" ' + (canplay.Normal      ? 'checked ': '') + ((rTypeSStr.search(/PK#|SS#/) == 0) ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-n"></label>' : '&nbsp;'),
                "H": ((!isNaN(SPH.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-h" name="check-playable" class="check-playable" value="' + item.ID + '_h" ' + (canplay.Hyper       ? 'checked ': '') + ((rTypeSStr.search(/PK#|SS#/) == 0) ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-h"></label>' : '&nbsp;'),
                "A": ((!isNaN(SPA.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-a" name="check-playable" class="check-playable" value="' + item.ID + '_a" ' + (canplay.Another     ? 'checked ': '') + ((rTypeSStr.search(/PK#|SS#/) == 0) ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-a"></label>' : '&nbsp;'),
                "L": ((!isNaN(SPL.Lv) && (item.Release.Type !== 'Default')) ? '<input type="checkbox" id="cp-' + item.ID + '-l" name="check-playable" class="check-playable" value="' + item.ID + '_a" ' + (canplay.Leggendaria ? 'checked ': '') + ((rTypeSStr.search(/PK#|SS#/) == 0) ? 'disabled ' : '') + '/><label for="cp-' + item.ID + '-l"></label>' : '&nbsp;')
            };
            let scoreClass = {
                "canplay": {
                    "SPB": (canplay.Beginner    || (rTypeClass === '' && !isNaN(SPB.Lv)) ? ' canplay' : ''),
                    "SPN": (canplay.Normal      || (rTypeClass === '' && !isNaN(SPN.Lv)) ? ' canplay' : ''),
                    "SPH": (canplay.Hyper       || (rTypeClass === '' && !isNaN(SPH.Lv)) ? ' canplay' : ''),
                    "SPA": (canplay.Another     || (rTypeClass === '' && !isNaN(SPA.Lv)) ? ' canplay' : ''),
                    "SPL": (canplay.Leggendaria || (rTypeClass === '' && !isNaN(SPL.Lv)) ? ' canplay' : ''),
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
                    "SPL": '<div class="notesstyle' + (SPA.HCN ? ' hcn' : SPA.CN ? ' cn' : '') + '"></div>',
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
                    "DPN": '<div class="notesstyle' + (DPN.HBSS ? ' hbss' : DPN.BSS ? ' bss' : '') + '"></div>',
                    "DPH": '<div class="notesstyle' + (DPH.HBSS ? ' hbss' : DPH.BSS ? ' bss' : '') + '"></div>',
                    "DPA": '<div class="notesstyle' + (DPA.HBSS ? ' hbss' : DPA.BSS ? ' bss' : '') + '"></div>',
                    "DPL": '<div class="notesstyle' + (DPL.HBSS ? ' hbss' : DPL.BSS ? ' bss' : '') + '"></div>'
                }
            };
            rBit.ALL = ((rBit.Beginner ? rBit.Beginner : 0) + (rBit.Normal ? rBit.Normal : 0) + (rBit.Hyper ? rBit.Hyper : 0) + (rBit.Another ? rBit.Another : 0));
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
                      '<td class="" rowspan="' + ((jQuery('#setmyid').prop('checked')) ? '2' : '1')+ '"></td>' +
                      '<td class="other" colspan="4" rowspan="' + ((jQuery('#setmyid').prop('checked')) ? '2' : '1')+ '">' +
                      '配信開始日：' + r4Y2M2D + '&nbsp;&nbsp;(&nbsp;配信タイプ&nbsp;：&nbsp;' + rTypeStr + '&nbsp;)<br />' +
                      'BIT解禁開始日：' + rBit4Y2M2D + '<br />' +
                      ((rBit4Y2M2D !== 'BIT未解禁') ? '必要BIT数 : ' +
                                                     ((rBit.Beginner) ? '&nbsp;B=' + rBit.Beginner.toLocaleString() + ' / ' : '' ) +
                                                     ((rBit.Normal)   ? '&nbsp;N='   + rBit.Normal.toLocaleString() + ' / ' : '' ) +
                                                     ((rBit.Hyper)    ? '&nbsp;H='    + rBit.Hyper.toLocaleString() + ' / ' : '' ) +
                                                     ((rBit.Another)  ? '&nbsp;A='  + rBit.Another.toLocaleString() + ' / ' : '' ) +
                                                     '&nbsp;&nbsp;合計=' + rBit.ALL.toLocaleString() : "") +
                      ((comment) ? '<br /><br />' + comment : "") +
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
                      ((jQuery('#setmyid').prop('checked')) ? 
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
            switch (jQuery("#search-folder").val()) {
                case 'VER'      : tabledata["v" + zeroPadding(item.VNo,2) + "-header"] += addhtml; break;
                case 'RELT'     : tabledata["relt" + item.Release.Type + "-header"] += addhtml; break;
                case 'RELY'     : tabledata["rely" + r_id_r4Y + "-header"] += addhtml; break;
                case 'RELYM'    : tabledata["relym" + r_id_r4Y2M + "-header"] += addhtml; break;
                case 'BITY'     : tabledata["bity" + r_id_b4Y + "-header"] += addhtml; break;
                case 'BITYM'    : tabledata["bitym" + r_id_b4Y2M + "-header"] += addhtml; break;
                case 'BPM'      : tabledata["bpm" + getBPMValue(BPM) + "-header"] += addhtml; break;
                case 'SPNLV'    : tabledata["spn-lv" + (!isNaN(SPN.Lv) ? zeroPadding(SPN.Lv,2) : 'NO') + "-header"] += addhtml; break;
                case 'SPHLV'    : tabledata["sph-lv" + (!isNaN(SPH.Lv) ? zeroPadding(SPH.Lv,2) : 'NO') + "-header"] += addhtml; break;
                case 'SPALV'    : tabledata["spa-lv" + (!isNaN(SPA.Lv) ? zeroPadding(SPA.Lv,2) : 'NO') + "-header"] += addhtml; break;
                case 'DPNLV'    : tabledata["dpn-lv" + (!isNaN(DPN.Lv) ? zeroPadding(DPN.Lv,2) : 'NO') + "-header"] += addhtml; break;
                case 'DPHLV'    : tabledata["dph-lv" + (!isNaN(DPH.Lv) ? zeroPadding(DPH.Lv,2) : 'NO') + "-header"] += addhtml; break;
                case 'DPALV'    : tabledata["dpa-lv" + (!isNaN(DPA.Lv) ? zeroPadding(DPA.Lv,2) : 'NO') + "-header"] += addhtml; break;
                case 'SPNNOTES' : tabledata["spn-notes" + (!isNaN(SPN.Lv) ? getNotesValue(SPN.Notes) : 'NO') + "-header"] += addhtml; break;
                case 'SPHNOTES' : tabledata["sph-notes" + (!isNaN(SPH.Lv) ? getNotesValue(SPH.Notes) : 'NO') + "-header"] += addhtml; break;
                case 'SPANOTES' : tabledata["spa-notes" + (!isNaN(SPA.Lv) ? getNotesValue(SPA.Notes) : 'NO') + "-header"] += addhtml; break;
                case 'DPNNOTES' : tabledata["dpn-notes" + (!isNaN(DPN.Lv) ? getNotesValue(DPN.Notes) : 'NO') + "-header"] += addhtml; break;
                case 'DPHNOTES' : tabledata["dph-notes" + (!isNaN(DPH.Lv) ? getNotesValue(DPH.Notes) : 'NO') + "-header"] += addhtml; break;
                case 'DPANOTES' : tabledata["dpa-notes" + (!isNaN(DPA.Lv) ? getNotesValue(DPA.Notes) : 'NO') + "-header"] += addhtml; break;
            };
        };
    
        // データ挿入
        for(let classname in tabledata){
            if (tabledata[classname] !== '') {
                jQuery('#' + classname).append(tabledata[classname]);
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
            // 曲数が0でなければヘッダー毎に検索件数を表示
            } else {
                jQuery(this).find('span').remove();
                jQuery(this).find('.headerline th').append('<span>&nbsp;&nbsp;(&nbsp;検索結果：' + jQuery(this).children('.music').length + '件&nbsp;)</span>');
                if (jQuery('#searchopen').prop('checked') ) {
                    jQuery(this).children('.music_other').hide();
                    jQuery(this).children('.music').show();
                    jQuery(this).addClass('opened');
                };
                jQuery(this).show();
            };
        });

        // 解禁状況更新処理用
        jQuery('.playable input[type=checkbox]').change(function() {
            update.start(jQuery(this).val(),jQuery(this).prop('checked'));
        });

        // 全難易度合計を計算しておく
        allMusicSP.ALL    = allMusicSP.Beginner    + allMusicSP.Normal    + allMusicSP.Hyper    + allMusicSP.Another;
        allMusicDP.ALL    = allMusicDP.Beginner    + allMusicDP.Normal    + allMusicDP.Hyper    + allMusicDP.Another;
        allBit.ALL        = allBit.Beginner        + allBit.Normal        + allBit.Hyper        + allBit.Another;
        NRallMusicSP.ALL  = NRallMusicSP.Beginner  + NRallMusicSP.Normal  + NRallMusicSP.Hyper  + NRallMusicSP.Another;
        NRallMusicDP.ALL  = NRallMusicDP.Beginner  + NRallMusicDP.Normal  + NRallMusicDP.Hyper  + NRallMusicDP.Another;
        NRallBit.ALL      = NRallBit.Beginner      + NRallBit.Normal      + NRallBit.Hyper      + NRallBit.Another;
        sumMusicSP.ALL    = sumMusicSP.Beginner    + sumMusicSP.Normal    + sumMusicSP.Hyper    + sumMusicSP.Another;
        sumMusicDP.ALL    = sumMusicDP.Beginner    + sumMusicDP.Normal    + sumMusicDP.Hyper    + sumMusicDP.Another;
        sumBit.ALL        = sumBit.Beginner        + sumBit.Normal        + sumBit.Hyper        + sumBit.Another;
        NRsumMusicSP.ALL  = NRsumMusicSP.Beginner  + NRsumMusicSP.Normal  + NRsumMusicSP.Hyper  + NRsumMusicSP.Another;
        NRsumMusicDP.ALL  = NRsumMusicDP.Beginner  + NRsumMusicDP.Normal  + NRsumMusicDP.Hyper  + NRsumMusicDP.Another;
        NRsumBit.ALL      = NRsumBit.Beginner      + NRsumBit.Normal      + NRsumBit.Hyper      + NRsumBit.Another;
        usedMusicSP.ALL   = usedMusicSP.Beginner   + usedMusicSP.Normal   + usedMusicSP.Hyper   + usedMusicSP.Another;
        usedMusicDP.ALL   = usedMusicDP.Beginner   + usedMusicDP.Normal   + usedMusicDP.Hyper   + usedMusicDP.Another;
        usedBit.ALL       = usedBit.Beginner       + usedBit.Normal       + usedBit.Hyper       + usedBit.Another;
        NRusedMusicSP.ALL = NRusedMusicSP.Beginner + NRusedMusicSP.Normal + NRusedMusicSP.Hyper + NRusedMusicSP.Another;
        NRusedMusicDP.ALL = NRusedMusicDP.Beginner + NRusedMusicDP.Normal + NRusedMusicDP.Hyper + NRusedMusicDP.Another;
        NRusedBit.ALL     = NRusedBit.Beginner     + NRusedBit.Normal     + NRusedBit.Hyper     + NRusedBit.Another;

        let col = {
            b: {
                total: allMusicSP.Beginner.toLocaleString()  + ' / ' + allMusicDP.Beginner.toLocaleString()  + '譜面<br />' + allBit.Beginner.toLocaleString()  + ' BIT',
                sum:   sumMusicSP.Beginner.toLocaleString()  + ' / ' + sumMusicDP.Beginner.toLocaleString()  + '譜面<br />' + sumBit.Beginner.toLocaleString()  + ' BIT',
                used:  usedMusicSP.Beginner.toLocaleString() + ' / ' + usedMusicDP.Beginner.toLocaleString() + '譜面<br />' + usedBit.Beginner.toLocaleString() + ' BIT'
            },
            n: {
                total: allMusicSP.Normal.toLocaleString()   + ' / ' + allMusicDP.Normal.toLocaleString()   + '譜面<br />' + allBit.Normal.toLocaleString()   + ' BIT',
                sum:   sumMusicSP.Normal.toLocaleString()   + ' / ' + sumMusicDP.Normal.toLocaleString()   + '譜面<br />' + sumBit.Normal.toLocaleString()   + ' BIT',
                used:  usedMusicSP.Normal.toLocaleString()  + ' / ' + usedMusicDP.Normal.toLocaleString()  + '譜面<br />' + usedBit.Normal.toLocaleString()  + ' BIT'
            },
            h: {
                total: allMusicSP.Hyper.toLocaleString()    + ' / ' + allMusicDP.Hyper.toLocaleString()    + '譜面<br />' + allBit.Hyper.toLocaleString()    + ' BIT',
                sum:   sumMusicSP.Hyper.toLocaleString()    + ' / ' + sumMusicDP.Hyper.toLocaleString()    + '譜面<br />' + sumBit.Hyper.toLocaleString()    + ' BIT',
                used:  usedMusicSP.Hyper.toLocaleString()   + ' / ' + usedMusicDP.Hyper.toLocaleString()   + '譜面<br />' + usedBit.Hyper.toLocaleString()   + ' BIT'
            },
            a: {
                total: allMusicSP.Another.toLocaleString()  + ' / ' + allMusicDP.Another.toLocaleString()  + '譜面<br />' + allBit.Another.toLocaleString()  + ' BIT',
                sum:   sumMusicSP.Another.toLocaleString()  + ' / ' + sumMusicDP.Another.toLocaleString()  + '譜面<br />' + sumBit.Another.toLocaleString()  + ' BIT',
                used:  usedMusicSP.Another.toLocaleString() + ' / ' + usedMusicDP.Another.toLocaleString() + '譜面<br />' + usedBit.Another.toLocaleString() + ' BIT'
            },
            t: {
                total: allMusicSP.ALL.toLocaleString()      + ' / ' + allMusicDP.ALL.toLocaleString()      + '譜面<br />' + allBit.ALL.toLocaleString()      + ' BIT',
                sum:   sumMusicSP.ALL.toLocaleString()      + ' / ' + sumMusicDP.ALL.toLocaleString()      + '譜面<br />' + sumBit.ALL.toLocaleString()      + ' BIT',
                used:  usedMusicSP.ALL.toLocaleString()     + ' / ' + usedMusicDP.ALL.toLocaleString()     + '譜面<br />' + usedBit.ALL.toLocaleString()     + ' BIT'
            }
        };
        jQuery('#search-message').html('<span>(&nbsp;検索結果：' + items.length + '曲&nbsp;)</span><br />' +
                                       '<table><thead>' +
                                       '<tr><th rowspan="2">BIT解禁<br />概要</th><th colspan="3">譜面数(SP / DP)・BIT</th></tr>' +
                                       '<tr><th>合計</th><th>残り</th><th>解禁済</th></tr>' +
                                       '</thead>' +
                                       '<tbody>' +
                                       '<tr><th>BEGINNER</th><td>' + col.b.total + '</td><td>' + col.b.sum + '</td><td>' + col.b.used + '</td></tr>' +
                                       '<tr><th>NORMAL</th><td>'   + col.n.total + '</td><td>' + col.n.sum + '</td><td>' + col.n.used + '</td></tr>' +
                                       '<tr><th>HYPER</th><td>'    + col.h.total + '</td><td>' + col.h.sum + '</td><td>' + col.h.used + '</td></tr>' +
                                       '<tr><th>ANOTHER</th><td>'  + col.a.total + '</td><td>' + col.a.sum + '</td><td>' + col.a.used + '</td></tr>' +
                                       '<tr><th>合計</th><td>'     + col.t.total + '</td><td>' + col.t.sum + '</td><td>' + col.t.used + '</td></tr>' +
                                       '</tbody></table>'
                                       );
    
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
    series: [0],
    score: 'ALL',
    lv: {
        SPB: { min: 0, max: 12 },
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
    bpm: {
        min: 0,
        max: 0,
        changing: 0
    },

    getSearchParam: function() {
        this.series = [];
        this.release.type = [];
        let thisTmp = this;
        jQuery("[name=series]:checked").each(function(){thisTmp.series.push(parseFloat(jQuery(this).val()))});
        jQuery("[name=releasetype]:checked").each(function(){thisTmp.release.type.push(jQuery(this).val())});
        [this.lv.SPB.min,this.lv.SPB.max] = jQuery('#SPB-levels')[0].noUiSlider.get();
        this.opt.SPB.cn = Number(jQuery('#opt_SPB_CN').val());
        this.opt.SPB.bss = Number(jQuery('#opt_SPB_BSS').val());
        this.opt.SPB.hcn = Number(jQuery('#opt_SPB_HCN').val());
        this.opt.SPB.notes.min = (isNaN(parseInt(jQuery("#opt_SPB_notes_min").val())) ?     0 : parseInt(jQuery("#opt_SPB_notes_min").val()));
        this.opt.SPB.notes.max = (isNaN(parseInt(jQuery("#opt_SPB_notes_max").val())) ? 99999 : parseInt(jQuery("#opt_SPB_notes_max").val()));
        [this.lv.SPN.min,this.lv.SPN.max] = jQuery('#SPN-levels')[0].noUiSlider.get();
        this.opt.SPN.cn = Number(jQuery('#opt_SPN_CN').val());
        this.opt.SPN.bss = Number(jQuery('#opt_SPN_BSS').val());
        this.opt.SPN.hcn = Number(jQuery('#opt_SPN_HCN').val());
        this.opt.SPN.notes.min = (isNaN(parseInt(jQuery("#opt_SPN_notes_min").val())) ?     0 : parseInt(jQuery("#opt_SPN_notes_min").val()));
        this.opt.SPN.notes.max = (isNaN(parseInt(jQuery("#opt_SPN_notes_max").val())) ? 99999 : parseInt(jQuery("#opt_SPN_notes_max").val()));
        [this.lv.SPH.min,this.lv.SPH.max] = jQuery('#SPH-levels')[0].noUiSlider.get();
        this.opt.SPH.cn = Number(jQuery('#opt_SPH_CN').val());
        this.opt.SPH.bss = Number(jQuery('#opt_SPH_BSS').val());
        this.opt.SPH.hcn = Number(jQuery('#opt_SPH_HCN').val());
        this.opt.SPH.notes.min = (isNaN(parseInt(jQuery("#opt_SPH_notes_min").val())) ?     0 : parseInt(jQuery("#opt_SPH_notes_min").val()));
        this.opt.SPH.notes.max = (isNaN(parseInt(jQuery("#opt_SPH_notes_max").val())) ? 99999 : parseInt(jQuery("#opt_SPH_notes_max").val()));
        [this.lv.SPA.min,this.lv.SPA.max] = jQuery('#SPA-levels')[0].noUiSlider.get();
        this.opt.SPA.cn = Number(jQuery('#opt_SPA_CN').val());
        this.opt.SPA.bss = Number(jQuery('#opt_SPA_BSS').val());
        this.opt.SPA.hcn = Number(jQuery('#opt_SPA_HCN').val());
        this.opt.SPA.notes.min = (isNaN(parseInt(jQuery("#opt_SPA_notes_min").val())) ?     0 : parseInt(jQuery("#opt_SPA_notes_min").val()));
        this.opt.SPA.notes.max = (isNaN(parseInt(jQuery("#opt_SPA_notes_max").val())) ? 99999 : parseInt(jQuery("#opt_SPA_notes_max").val()));
        [this.lv.DPN.min,this.lv.DPN.max] = jQuery('#DPN-levels')[0].noUiSlider.get();
        this.opt.DPN.cn = Number(jQuery('#opt_DPN_CN').val());
        this.opt.DPN.bss = Number(jQuery('#opt_DPN_BSS').val());
        this.opt.DPN.hcn = Number(jQuery('#opt_DPN_HCN').val());
        this.opt.DPN.notes.min = (isNaN(parseInt(jQuery("#opt_DPN_notes_min").val())) ?     0 : parseInt(jQuery("#opt_DPN_notes_min").val()));
        this.opt.DPN.notes.max = (isNaN(parseInt(jQuery("#opt_DPN_notes_max").val())) ? 99999 : parseInt(jQuery("#opt_DPN_notes_max").val()));
        [this.lv.DPH.min,this.lv.DPH.max] = jQuery('#DPH-levels')[0].noUiSlider.get();
        this.opt.DPH.cn = Number(jQuery('#opt_DPH_CN').val());
        this.opt.DPH.bss = Number(jQuery('#opt_DPH_BSS').val());
        this.opt.DPH.hcn = Number(jQuery('#opt_DPH_HCN').val());
        this.opt.DPH.notes.min = (isNaN(parseInt(jQuery("#opt_DPH_notes_min").val())) ?     0 : parseInt(jQuery("#opt_DPH_notes_min").val()));
        this.opt.DPH.notes.max = (isNaN(parseInt(jQuery("#opt_DPH_notes_max").val())) ? 99999 : parseInt(jQuery("#opt_DPH_notes_max").val()));
        [this.lv.DPA.min,this.lv.DPA.max] = jQuery('#DPA-levels')[0].noUiSlider.get();
        this.opt.DPA.cn = Number(jQuery('#opt_DPA_CN').val());
        this.opt.DPA.bss = Number(jQuery('#opt_DPA_BSS').val());
        this.opt.DPA.hcn = Number(jQuery('#opt_DPA_HCN').val());
        this.opt.DPA.notes.min = (isNaN(parseInt(jQuery("#opt_DPA_notes_min").val())) ?     0 : parseInt(jQuery("#opt_DPA_notes_min").val()));
        this.opt.DPA.notes.max = (isNaN(parseInt(jQuery("#opt_DPA_notes_max").val())) ? 99999 : parseInt(jQuery("#opt_DPA_notes_max").val()));
        this.release.min = new Date(jQuery("#releasedate-min").val()).getTime();
        this.release.max = new Date(jQuery("#releasedate-max").val()).getTime();
        this.bit.min = new Date(jQuery("#bitdate-min").val()).getTime();
        this.bit.max = new Date(jQuery("#bitdate-max").val()).getTime();
        this.available = jQuery("#available").val();
        this.unlocked = jQuery("#unlocked").val();
        this.title = jQuery("#title").val();
        this.genre = jQuery("#genre").val();
        this.artist = jQuery("#artist").val();
        this.bpm.min = (isNaN(parseInt(jQuery("#opt_bpm_min").val())) ?     0 : parseInt(jQuery("#opt_bpm_min").val()));
        this.bpm.max = (isNaN(parseInt(jQuery("#opt_bpm_max").val())) ?  9999 : parseInt(jQuery("#opt_bpm_max").val()));
        this.bpm.changing = Number(jQuery('#opt_bpm_changing').val());
    },
    setDefaultSearchParam: function() {
        this.series = [];
        this.release.type = [];
        let thisTmp = this;
        jQuery("[name=series]").each(function(){jQuery(this).prop('checked', true)});
        jQuery("[name=releasetype]").each(function(){jQuery(this).prop('checked', true)});
        jQuery('#SPB-levels')[0].noUiSlider.set([0,12]);
        jQuery('#opt_SPB_CN').val(0);
        jQuery('#opt_SPB_BSS').val(0);
        jQuery('#opt_SPB_HCN').val(0);
        jQuery("#opt_SPB_notes_min").val('');
        jQuery("#opt_SPB_notes_max").val('');
        jQuery('#SPN-levels')[0].noUiSlider.set([0,12]);
        jQuery('#opt_SPN_CN').val(0);
        jQuery('#opt_SPN_BSS').val(0);
        jQuery('#opt_SPN_HCN').val(0);
        jQuery("#opt_SPN_notes_min").val('');
        jQuery("#opt_SPN_notes_max").val('');
        jQuery('#SPH-levels')[0].noUiSlider.set([0,12]);
        jQuery('#opt_SPH_CN').val(0);
        jQuery('#opt_SPH_BSS').val(0);
        jQuery('#opt_SPH_HCN').val(0);
        jQuery("#opt_SPH_notes_min").val('');
        jQuery("#opt_SPH_notes_max").val('');
        jQuery('#SPA-levels')[0].noUiSlider.set([0,12]);
        jQuery('#opt_SPA_CN').val(0);
        jQuery('#opt_SPA_BSS').val(0);
        jQuery('#opt_SPA_HCN').val(0);
        jQuery("#opt_SPA_notes_min").val('');
        jQuery("#opt_SPA_notes_max").val('');
        jQuery('#DPN-levels')[0].noUiSlider.set([0,12]);
        jQuery('#opt_DPN_CN').val(0);
        jQuery('#opt_DPN_BSS').val(0);
        jQuery('#opt_DPN_HCN').val(0);
        jQuery("#opt_DPN_notes_min").val('');
        jQuery("#opt_DPN_notes_max").val('');
        jQuery('#DPH-levels')[0].noUiSlider.set([0,12]);
        jQuery('#opt_DPH_CN').val(0);
        jQuery('#opt_DPH_BSS').val(0);
        jQuery('#opt_DPH_HCN').val(0);
        jQuery("#opt_DPH_notes_min").val('');
        jQuery("#opt_DPH_notes_max").val('');
        jQuery('#DPA-levels')[0].noUiSlider.set([0,12]);
        jQuery('#opt_DPA_CN').val(0);
        jQuery('#opt_DPA_BSS').val(0);
        jQuery('#opt_DPA_HCN').val(0);
        jQuery("#opt_DPA_notes_min").val('');
        jQuery("#opt_DPA_notes_max").val('');
        jQuery("#releasedate-min").val(jQuery("#releasedate-min option[selected=selected]").val());
        jQuery("#releasedate-max").val(jQuery("#releasedate-max option[selected=selected]").val());
        jQuery("#bitdate-min").val(jQuery("#bitdate-min option[selected=selected]").val());
        jQuery("#bitdate-max").val(jQuery("#bitdate-max option[selected=selected]").val());
        jQuery("#available").val(jQuery("#available option[selected=selected]").val());
        jQuery("#unlocked").val(jQuery("#unlocked option[selected=selected]").val());
        jQuery("#title").val('');
        jQuery("#genre").val('');
        jQuery("#artist").val('');
        jQuery('#opt_bpm')[0].noUiSlider.set([0,12]);

    },
    checkScore: function(score, scoretype) {
        if ( ['SPB','SPN','SPH','SPA','SPL','DPN','DPH','DPA','DPL'].indexOf(scoretype) == -1 ) { return true; };
        let lv = this.lv[scoretype];
        let opt = this.opt[scoretype];
        
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
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
        getButton.onclick = handleGetClick;
    }, function(error) {
        appendPre(JSON.stringify(error, null, 2));
    });
};

/**
 * サインイン処理のコールバック関数
 * サインイン状態により画面表示を変更する
 * @param {boolean} isSignedIn 
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        listFiles();
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
};

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
};

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
};

/**
 *  Sign out the user upon button click.
 */
function handleGetClick(event) {
    getFile('1Gh6A8eIwCyuRTtqvI6IY5PVQ6rvwGisL');
};

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    let pre = document.getElementById('content');
    let textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

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
function getFile(fid) {
    gapi.client.drive.files.get({
        fileId: fid,
        alt: 'media'
    }).then(function(obj){
        console.log(obj.result);
        appendPre('Get Complete. See Console Logs.');
    },function(error) {
        appendPre(JSON.stringify(error, null, 2));
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
      if (xhr.readyState != XMLHttpRequest.DONE) {
        return;
      }
      callback(xhr.response);
    };
    xhr.open('PATCH', 'https://www.googleapis.com/upload/drive/v3/files/' + fileId + '?uploadType=media');
    xhr.setRequestHeader('Authorization', 'Bearer ' + gapi.auth.getToken().access_token);
    xhr.send(contentBlob);
}

// ファイル更新処理のサンプル
function updateFileContentSample() {
    let docId = '1PQbBPUDjJWadYJU6zGAxRtKtL4rmPWb2'; // 更新ファイルのID
    let content = JSON.stringify({ // 更新ファイルの内容
        "kind": "drive#file",
        "id": docId,
        "name": "testfromapi.json",
        "mimeType": "text/plain"
      },null,4);
    let contentBlob = new  Blob([JSON.stringify(content,null,"\t")], {
      'type': 'text/plain'
    });
    updateFileContent(docId, contentBlob, function(response) {
      console.log(response);
    });
}

/**
 * webページロード完了後の処理
 */
function handleClientLoad() {
    // googleAPIクライアントの初期化
    //gapi.load('client:auth2', initClient);
//    musics.getJSON("musiclist.js");
    // musiclist
    musics.JSON = musiclist.musics;
    musics.infoJSON = musiclist.info;
    delete musiclist;

    // 
    jQuery('#search-message').html('<span>準備中…</span>');
    if (musics.JSON.length > 0) {
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

        jQuery('#search-message').html('<span>データファイル読み込み完了</span>');
        jQuery('.infotable').append(
            '<tbody><tr><td>' + dateFormat.format(new Date(musics.infoJSON.lastupdated), 'yyyy/MM/dd hh:mm') + '</td>' +
                       '<td>' + musics.infoJSON.music_count + '曲 / ' + musics.infoJSON.chart_count_all + '譜面</td>' +
                       '<td>' + musics.infoJSON.chart_single_all + '譜面</td>' +
                       '<td class="spb">' + musics.infoJSON.chart_single_beginner + '譜面</td>' +
                       '<td class="spn">' + musics.infoJSON.chart_single_normal + '譜面</td>' +
                       '<td class="sph">' + musics.infoJSON.chart_single_hyper + '譜面</td>' +
                       '<td class="spa">' + musics.infoJSON.chart_single_another + '譜面</td>' +
                       '<td>' + musics.infoJSON.chart_double_all + '譜面</td>' +
                       '<td class="dpn">' + musics.infoJSON.chart_double_normal + '譜面</td>' +
                       '<td class="dph">' + musics.infoJSON.chart_double_hyper + '譜面</td>' +
                       '<td class="dpa">' + musics.infoJSON.chart_double_another + '譜面</td>' +
                       '<!-- <td>' + musics.infoJSON.user_count + '人</td> -->' +
            '</tr></tbody>');
        jQuery('#filter-button').prop('disabled',false);
    };

    // 検索条件・表示設定を閉じておく
    jQuery('fieldset legend input').each(function() {
        let target = jQuery(this).parent().parent().children('div:not(.hidden),hr:not(.hidden)')
        jQuery(this).prop("checked") ? target.fadeIn('fast') : target.fadeOut('fast');
    });

    // ログイン後に使用する項目をいったん非表示
    jQuery('.sg2').addClass('hidden');

    // 検索条件のシリーズ項目作成
    makeCheckbox('#seriesbox',[ ['series',   1, true, '1st style', ['series-CS']],
                                ['series',   2, true, 'substream', ['series-CS']],
                                ['series',   3, true, '2nd style', ['series-CS']],
                                ['series',   4, true, '3rd style', ['series-CS']],
                                ['series',   5, true, '4th style', ['series-CS']],
                                ['series',   6, true, '5th style', ['series-CS']],
                                ['series',   7, true, '6th style', ['series-CS']],
                                ['series',   8, true, '7th style', ['series-CS']],
                                ['series',   9, true, '8th style', ['series-CS']],
                                ['series',  10, true, '9th style', ['series-CS']],
                                ['series',  11, true, '10th style', ['series-CS']],
                                ['series',  12, true, 'IIDX RED', ['series-CS']],
                                ['series',  13, true, 'HAPPY SKY', ['series-CS']],
                                ['series',  14, true, 'DistorteD', ['series-CS']],
                                ['series',  15, true, 'GOLD', ['series-CS']],
                                ['series',  16, true, 'DJ TROOPERS', ['series-CS']],
                                ['series',  17, true, 'EMPRESS', ['series-CS']],
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
                                ['series', 999, true, 'INFINITAS', ['series-CS']] ]);

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
    makeScorefilter('#scorefilterbox',[ ['SPB'],
                                        ['SPN'],
                                        ['SPH'],
                                        ['SPA'],
                                        ['DPN'],
                                        ['DPH'],
                                        ['DPA'] ]);
    // 検索条件のリリース条件項目作成
    makeCheckbox('#releasetypebox',[ ['releasetype', 'Default',       true, 'デフォルト楽曲'],
                                     ['releasetype', 'Monthly',       true, '特定月プレイ特典'],
                                     ['releasetype', 'BIT',           true, 'BIT解禁'],
                                     ['releasetype', 'DJP',           true, 'DJP解禁'],
                                     ['releasetype', 'Championship1', true, 'championship&nbsp;#1', ['releasetype-championship']],
                                     ['releasetype', 'Championship2', true, 'championship&nbsp;#2', ['releasetype-championship']],
                                     ['releasetype', 'Championship3', true, 'championship&nbsp;#3', ['releasetype-championship']],
                                     ['releasetype', 'Championship4', true, 'championship&nbsp;#4', ['releasetype-championship']],
                                     ['releasetype', 'Pack1',         true, '楽曲パックVol.1', ['releasetype-pack']],
                                     ['releasetype', 'Pack2',         true, '楽曲パックVol.2', ['releasetype-pack']],
                                     ['releasetype', 'Pack3',         true, '楽曲パックVol.3', ['releasetype-pack']],
                                     ['releasetype', 'Pack4',         true, '楽曲パックVol.4', ['releasetype-pack']],
                                     ['releasetype', 'Pack5',         true, '楽曲パックVol.5', ['releasetype-pack']],
                                     ['releasetype', 'Pack6',         true, '楽曲パックVol.6', ['releasetype-pack']],
                                     ['releasetype', 'Pack7',         true, '楽曲パックVol.7', ['releasetype-pack']],
                                     ['releasetype', 'Pack8',         true, '楽曲パックVol.8', ['releasetype-pack']],
                                     ['releasetype', 'Pack9',         true, '楽曲パックVol.9', ['releasetype-pack']],
                                     ['releasetype', 'Pack10',        true, '楽曲パックVol.10', ['releasetype-pack']],
                                     ['releasetype', 'Pack11',        true, '楽曲パックVol.11', ['releasetype-pack']],
                                     ['releasetype', 'Pack12',        true, '楽曲パックVol.12', ['releasetype-pack']],
                                     ['releasetype', 'Pack13',        true, '楽曲パックVol.13', ['releasetype-pack']],
                                     ['releasetype', 'PackSS1',       true, 'SSパックVol.1', ['releasetype-pack', 'releasetype-packSS']] ]);

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
    makeCheckbox('#purchasebox',[ ['purchase', 'Pack1',  false, 'Pack1 未購入'],
                                  ['purchase', 'Pack2',  false, 'Pack2 未購入'],
                                  ['purchase', 'Pack3',  false, 'Pack3 未購入'],
                                  ['purchase', 'Pack4',  false, 'Pack4 未購入'],
                                  ['purchase', 'Pack5',  false, 'Pack5 未購入'],
                                  ['purchase', 'Pack6',  false, 'Pack6 未購入'],
                                  ['purchase', 'Pack7',  false, 'Pack7 未購入'],
                                  ['purchase', 'Pack8',  false, 'Pack8 未購入'],
                                  ['purchase', 'Pack9',  false, 'Pack9 未購入'],
                                  ['purchase', 'Pack10', false, 'Pack10 未購入'],
                                  ['purchase', 'Pack11', false, 'Pack11 未購入'],
                                  ['purchase', 'Pack12', false, 'Pack12 未購入'],
                                  ['purchase', 'Pack13', false, 'Pack13 未購入'],
                                  ['purchase', 'PackSS1', false, 'PackSS1 未購入'] ]);
    
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

    // ログインボタン押下
    jQuery('#setmyid').change(function() {
        if ( !jQuery('#setmyid').prop('checked') ) {
            execLogout();
            return false;
        };

        // 同意画面の表示有無確認
        if ( confirmWindow ) {
            // 同意しない場合は何もしない
            if ( !confirm('データをcookieおよびサーバ内に保存することに同意しますか？') ) {
                jQuery('#setmyid').prop('checked', false);
                return false;
            // 一度同意したら同意画面は出さない
            } else {
                confirmWindow = false;
            };
        };

        execLogin();
    });

    // ライバル情報ボタン押下
    jQuery('#setrivalid').change(function() {
        jQuery("label[for='setrivalid']").text( ( jQuery(this).prop('checked') ? 'ライバル情報を非表示にする' : 'ライバル情報を表示する' ) );
    });

    // パックボタン押下時
    jQuery('.purchase input').change(function() { togglePackButton(this); });

    // 譜面オプションボタン押下時
    jQuery('.score_opt input[type="number"]').click(function() { toggleScoreOptButton(this); });
    jQuery('.score_opt input[type="number"]').change(function() { toggleScoreOptButton(this,true); });

    // 検索結果のヘッダー行を作成
    let LvArr = ['01','02','03','04','05','06','07','08','09','10','11','12','NO'];
    let bitEndDate = new Date();
    bitEndDate.setFullYear(bitEndDate.getFullYear() + 2);
    pushheaderLine('spn-lv','par-level','Single&nbsp;NORMAL&nbsp;LEVEL&nbsp;',  LvArr);
    pushheaderLine('sph-lv','par-level','Single&nbsp;HYPER&nbsp;LEVEL&nbsp;',   LvArr);
    pushheaderLine('spa-lv','par-level','Single&nbsp;ANOTHER&nbsp;LEVEL&nbsp;', LvArr);
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

    // 検索ボタン押下時
    jQuery('#filter-button').click(function() {
        try {
            let filteredJSON = [];
            let sortedJSON = [];

            // 検索終了まで検索ボタンを無効化
            jQuery(this).attr('disabled', true);
            s.getSearchParam();

            filteredJSON = musics.filter(musics.JSON);
            sortedJSON = musics.sort(filteredJSON);
            musics.write(sortedJSON);

            jQuery(this).attr('disabled', false);
        } catch(e) {
            jQuery('#debug').append(e.toString());
        };
    });

    // バージョンヘッダーをクリックで開閉
    jQuery('.musiclist .headerline').click(function() {
        // クリック対象が開いていたら
        if ( jQuery(this).hasClass('opened') ) {
            jQuery(this).parent().children('.music,.music_other').hide();
        // クリック対象が閉じていたら
        } else {
            if ( jQuery('#singleopen').prop("checked") ) {
                jQuery('.musiclist tbody').children('.music_other,.music').hide();
                jQuery(this).parent().children('.music').fadeIn('fast');
            } else {
                jQuery('.musiclist tbody').children('.music_other').hide();
                jQuery(this).parent().children('.music').fadeToggle('fast');
            };
        };
        jQuery(this).toggleClass('opened');
    });

    // 検索条件のグループをクリックで開閉
    jQuery('fieldset legend input').change(function() {
        let target = jQuery(this).parent().parent().children('div:not(.hidden),hr:not(.hidden)');
        jQuery(this).prop("checked") ? target.fadeIn('fast') : target.fadeOut('fast');
    });

    token = Cookies.get('infinitas_rtoken');
    if (token) {
        execLogin(token);
        if (userJSON.id) { confirmWindow = false; };
    };

    // 
    jQuery('.score_opt input[type="number"]').each(function() { toggleScoreOptButton(this, true); });
    jQuery('.purchase input').each(function() {togglePackButton(this, false); });

};


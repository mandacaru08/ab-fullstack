function N0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Il(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jd={exports:{}},ss={},Zd={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ri=Symbol.for("react.element"),A0=Symbol.for("react.portal"),M0=Symbol.for("react.fragment"),I0=Symbol.for("react.strict_mode"),$0=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),L0=Symbol.for("react.forward_ref"),B0=Symbol.for("react.suspense"),U0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),tc=Symbol.iterator;function H0(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var ef={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tf=Object.assign,nf={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=nf,this.updater=n||ef}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rf(){}rf.prototype=Sr.prototype;function $l(e,t,n){this.props=e,this.context=t,this.refs=nf,this.updater=n||ef}var Fl=$l.prototype=new rf;Fl.constructor=$l;tf(Fl,Sr.prototype);Fl.isPureReactComponent=!0;var nc=Array.isArray,of=Object.prototype.hasOwnProperty,Dl={current:null},sf={key:!0,ref:!0,__self:!0,__source:!0};function af(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)of.call(t,r)&&!sf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ri,type:e,key:o,ref:s,props:i,_owner:Dl.current}}function W0(e,t){return{$$typeof:Ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ll(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ri}function Y0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rc=/\/+/g;function Hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Y0(""+e.key):t.toString(36)}function so(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ri:case A0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Hs(s,0):r,nc(i)?(n="",e!=null&&(n=e.replace(rc,"$&/")+"/"),so(i,t,n,"",function(c){return c})):i!=null&&(Ll(i)&&(i=W0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(rc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",nc(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Hs(o,a);s+=so(o,t,n,u,i)}else if(u=H0(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Hs(o,a++),s+=so(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Fi(e,t,n){if(e==null)return e;var r=[],i=0;return so(e,r,"","",function(o){return t.call(n,o,i++)}),r}function q0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},ao={transition:null},Q0={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:ao,ReactCurrentOwner:Dl};Q.Children={map:Fi,forEach:function(e,t,n){Fi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fi(e,function(){t++}),t},toArray:function(e){return Fi(e,function(t){return t})||[]},only:function(e){if(!Ll(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Sr;Q.Fragment=M0;Q.Profiler=$0;Q.PureComponent=$l;Q.StrictMode=I0;Q.Suspense=B0;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Dl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)of.call(t,u)&&!sf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ri,type:e.type,key:i,ref:o,props:r,_owner:s}};Q.createContext=function(e){return e={$$typeof:D0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:F0,_context:e},e.Consumer=e};Q.createElement=af;Q.createFactory=function(e){var t=af.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:L0,render:e}};Q.isValidElement=Ll;Q.lazy=function(e){return{$$typeof:V0,_payload:{_status:-1,_result:e},_init:q0}};Q.memo=function(e,t){return{$$typeof:U0,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=ao.transition;ao.transition={};try{e()}finally{ao.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return We.current.useCallback(e,t)};Q.useContext=function(e){return We.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Q.useEffect=function(e,t){return We.current.useEffect(e,t)};Q.useId=function(){return We.current.useId()};Q.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return We.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};Q.useRef=function(e){return We.current.useRef(e)};Q.useState=function(e){return We.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return We.current.useTransition()};Q.version="18.2.0";Zd.exports=Q;var j=Zd.exports;const q=Il(j),G0=N0({__proto__:null,default:q},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=j,K0=Symbol.for("react.element"),J0=Symbol.for("react.fragment"),Z0=Object.prototype.hasOwnProperty,em=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tm={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Z0.call(t,r)&&!tm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:K0,type:e,key:o,ref:s,props:i,_owner:em.current}}ss.Fragment=J0;ss.jsx=lf;ss.jsxs=lf;Jd.exports=ss;var l=Jd.exports,Pa={},uf={exports:{}},it={},cf={exports:{}},df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,D){var L=O.length;O.push(D);e:for(;0<L;){var ae=L-1>>>1,A=O[ae];if(0<i(A,D))O[ae]=D,O[L]=A,L=ae;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],L=O.pop();if(L!==D){O[0]=L;e:for(var ae=0,A=O.length,M=A>>>1;ae<M;){var I=2*(ae+1)-1,B=O[I],C=I+1,G=O[C];if(0>i(B,L))C<A&&0>i(G,B)?(O[ae]=G,O[C]=L,ae=C):(O[ae]=B,O[I]=L,ae=I);else if(C<A&&0>i(G,L))O[ae]=G,O[C]=L,ae=C;else break e}}return D}function i(O,D){var L=O.sortIndex-D.sortIndex;return L!==0?L:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],f=1,d=null,m=3,w=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=O)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function k(O){if(x=!1,g(O),!v)if(n(u)!==null)v=!0,Pe(b);else{var D=n(c);D!==null&&we(k,D.startTime-O)}}function b(O,D){v=!1,x&&(x=!1,h(_),_=-1),w=!0;var L=m;try{for(g(D),d=n(u);d!==null&&(!(d.expirationTime>D)||O&&!H());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,m=d.priorityLevel;var A=ae(d.expirationTime<=D);D=e.unstable_now(),typeof A=="function"?d.callback=A:d===n(u)&&r(u),g(D)}else r(u);d=n(u)}if(d!==null)var M=!0;else{var I=n(c);I!==null&&we(k,I.startTime-D),M=!1}return M}finally{d=null,m=L,w=!1}}var R=!1,N=null,_=-1,F=5,T=-1;function H(){return!(e.unstable_now()-T<F)}function Y(){if(N!==null){var O=e.unstable_now();T=O;var D=!0;try{D=N(!0,O)}finally{D?de():(R=!1,N=null)}}else R=!1}var de;if(typeof p=="function")de=function(){p(Y)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Z=be.port2;be.port1.onmessage=Y,de=function(){Z.postMessage(null)}}else de=function(){S(Y,0)};function Pe(O){N=O,R||(R=!0,de())}function we(O,D){_=S(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,Pe(b))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var L=m;m=D;try{return O()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var L=m;m=O;try{return D()}finally{m=L}},e.unstable_scheduleCallback=function(O,D,L){var ae=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ae+L:ae):L=ae,O){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=L+A,O={id:f++,callback:D,priorityLevel:O,startTime:L,expirationTime:A,sortIndex:-1},L>ae?(O.sortIndex=L,t(c,O),n(u)===null&&O===n(c)&&(x?(h(_),_=-1):x=!0,we(k,L-ae))):(O.sortIndex=A,t(u,O),v||w||(v=!0,Pe(b))),O},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(O){var D=m;return function(){var L=m;m=D;try{return O.apply(this,arguments)}finally{m=L}}}})(df);cf.exports=df;var nm=cf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff=j,rt=nm;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pf=new Set,li={};function Ln(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(li[e]=t,e=0;e<t.length;e++)pf.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ta=Object.prototype.hasOwnProperty,rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ic={},oc={};function im(e){return Ta.call(oc,e)?!0:Ta.call(ic,e)?!1:rm.test(e)?oc[e]=!0:(ic[e]=!0,!1)}function om(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sm(e,t,n,r){if(t===null||typeof t>"u"||om(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bl=/[\-:]([a-z])/g;function Ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bl,Ul);Ie[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bl,Ul);Ie[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bl,Ul);Ie[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vl(e,t,n,r){var i=Ie.hasOwnProperty(t)?Ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sm(t,n,i,r)&&(n=null),r||i===null?im(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),Hl=Symbol.for("react.strict_mode"),Ra=Symbol.for("react.profiler"),hf=Symbol.for("react.provider"),mf=Symbol.for("react.context"),Wl=Symbol.for("react.forward_ref"),_a=Symbol.for("react.suspense"),Oa=Symbol.for("react.suspense_list"),Yl=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),gf=Symbol.for("react.offscreen"),sc=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=sc&&e[sc]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Ws;function Vr(e){if(Ws===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ws=t&&t[1]||""}return`
`+Ws+e}var Ys=!1;function qs(e,t){if(!e||Ys)return"";Ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vr(e):""}function am(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=qs(e.type,!1),e;case 11:return e=qs(e.type.render,!1),e;case 1:return e=qs(e.type,!0),e;default:return""}}function za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Hn:return"Portal";case Ra:return"Profiler";case Hl:return"StrictMode";case _a:return"Suspense";case Oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mf:return(e.displayName||"Context")+".Consumer";case hf:return(e._context.displayName||"Context")+".Provider";case Wl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yl:return t=e.displayName||null,t!==null?t:za(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return za(e(t))}catch{}}return null}function lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(t);case 8:return t===Hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function um(e){var t=vf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Li(e){e._valueTracker||(e._valueTracker=um(e))}function xf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Na(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ac(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yf(e,t){t=t.checked,t!=null&&Vl(e,"checked",t,!1)}function Aa(e,t){yf(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ma(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ma(e,t,n){(t!=="number"||bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hr=Array.isArray;function rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ia(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Hr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function wf(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $a(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,Cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cm=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(e){cm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gr[t]=Gr[e]})});function kf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gr.hasOwnProperty(e)&&Gr[e]?(""+t).trim():t+"px"}function jf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dm=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,t){if(t){if(dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Da(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var La=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ba=null,ir=null,or=null;function dc(e){if(e=zi(e)){if(typeof Ba!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ds(t),Ba(e.stateNode,e.type,t))}}function Ef(e){ir?or?or.push(e):or=[e]:ir=e}function bf(){if(ir){var e=ir,t=or;if(or=ir=null,dc(e),t)for(e=0;e<t.length;e++)dc(t[e])}}function Pf(e,t){return e(t)}function Tf(){}var Qs=!1;function Rf(e,t,n){if(Qs)return e(t,n);Qs=!0;try{return Pf(e,t,n)}finally{Qs=!1,(ir!==null||or!==null)&&(Tf(),bf())}}function ci(e,t){var n=e.stateNode;if(n===null)return null;var r=ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ua=!1;if(Ht)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ua=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ua=!1}function fm(e,t,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Xr=!1,Po=null,To=!1,Va=null,pm={onError:function(e){Xr=!0,Po=e}};function hm(e,t,n,r,i,o,s,a,u){Xr=!1,Po=null,fm.apply(pm,arguments)}function mm(e,t,n,r,i,o,s,a,u){if(hm.apply(this,arguments),Xr){if(Xr){var c=Po;Xr=!1,Po=null}else throw Error(P(198));To||(To=!0,Va=c)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fc(e){if(Bn(e)!==e)throw Error(P(188))}function gm(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fc(i),e;if(o===r)return fc(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Of(e){return e=gm(e),e!==null?zf(e):null}function zf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zf(e);if(t!==null)return t;e=e.sibling}return null}var Nf=rt.unstable_scheduleCallback,pc=rt.unstable_cancelCallback,vm=rt.unstable_shouldYield,xm=rt.unstable_requestPaint,ye=rt.unstable_now,ym=rt.unstable_getCurrentPriorityLevel,Ql=rt.unstable_ImmediatePriority,Af=rt.unstable_UserBlockingPriority,Ro=rt.unstable_NormalPriority,wm=rt.unstable_LowPriority,Mf=rt.unstable_IdlePriority,as=null,zt=null;function Sm(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(as,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:jm,Cm=Math.log,km=Math.LN2;function jm(e){return e>>>=0,e===0?32:31-(Cm(e)/km|0)|0}var Ui=64,Vi=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Wr(a):(o&=s,o!==0&&(r=Wr(o)))}else s=n&~i,s!==0?r=Wr(s):o!==0&&(r=Wr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),i=1<<n,r|=e[n],t&=~i;return r}function Em(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ct(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=Em(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function If(){var e=Ui;return Ui<<=1,!(Ui&4194240)&&(Ui=64),e}function Gs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function Pm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Gl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ie=0;function $f(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ff,Xl,Df,Lf,Bf,Wa=!1,Hi=[],dn=null,fn=null,pn=null,di=new Map,fi=new Map,on=[],Tm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hc(e,t){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(t.pointerId)}}function zr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=zi(t),t!==null&&Xl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rm(e,t,n,r,i){switch(t){case"focusin":return dn=zr(dn,e,t,n,r,i),!0;case"dragenter":return fn=zr(fn,e,t,n,r,i),!0;case"mouseover":return pn=zr(pn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return di.set(o,zr(di.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fi.set(o,zr(fi.get(o)||null,e,t,n,r,i)),!0}return!1}function Uf(e){var t=Rn(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=_f(n),t!==null){e.blockedOn=t,Bf(e.priority,function(){Df(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);La=r,n.target.dispatchEvent(r),La=null}else return t=zi(n),t!==null&&Xl(t),e.blockedOn=n,!1;t.shift()}return!0}function mc(e,t,n){lo(e)&&n.delete(t)}function _m(){Wa=!1,dn!==null&&lo(dn)&&(dn=null),fn!==null&&lo(fn)&&(fn=null),pn!==null&&lo(pn)&&(pn=null),di.forEach(mc),fi.forEach(mc)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wa||(Wa=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,_m)))}function pi(e){function t(i){return Nr(i,e)}if(0<Hi.length){Nr(Hi[0],e);for(var n=1;n<Hi.length;n++){var r=Hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&Nr(dn,e),fn!==null&&Nr(fn,e),pn!==null&&Nr(pn,e),di.forEach(t),fi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Uf(n),n.blockedOn===null&&on.shift()}var sr=Gt.ReactCurrentBatchConfig,Oo=!0;function Om(e,t,n,r){var i=ie,o=sr.transition;sr.transition=null;try{ie=1,Kl(e,t,n,r)}finally{ie=i,sr.transition=o}}function zm(e,t,n,r){var i=ie,o=sr.transition;sr.transition=null;try{ie=4,Kl(e,t,n,r)}finally{ie=i,sr.transition=o}}function Kl(e,t,n,r){if(Oo){var i=Ya(e,t,n,r);if(i===null)oa(e,t,r,zo,n),hc(e,r);else if(Rm(i,e,t,n,r))r.stopPropagation();else if(hc(e,r),t&4&&-1<Tm.indexOf(e)){for(;i!==null;){var o=zi(i);if(o!==null&&Ff(o),o=Ya(e,t,n,r),o===null&&oa(e,t,r,zo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else oa(e,t,r,null,n)}}var zo=null;function Ya(e,t,n,r){if(zo=null,e=ql(r),e=Rn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zo=e,null}function Vf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ym()){case Ql:return 1;case Af:return 4;case Ro:case wm:return 16;case Mf:return 536870912;default:return 16}default:return 16}}var ln=null,Jl=null,uo=null;function Hf(){if(uo)return uo;var e,t=Jl,n=t.length,r,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return uo=i.slice(e,1<r?1-r:void 0)}function co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function gc(){return!1}function ot(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wi:gc,this.isPropagationStopped=gc,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=ot(Cr),Oi=me({},Cr,{view:0,detail:0}),Nm=ot(Oi),Xs,Ks,Ar,ls=me({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Xs=e.screenX-Ar.screenX,Ks=e.screenY-Ar.screenY):Ks=Xs=0,Ar=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:Ks}}),vc=ot(ls),Am=me({},ls,{dataTransfer:0}),Mm=ot(Am),Im=me({},Oi,{relatedTarget:0}),Js=ot(Im),$m=me({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fm=ot($m),Dm=me({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lm=ot(Dm),Bm=me({},Cr,{data:0}),xc=ot(Bm),Um={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hm[e])?!!t[e]:!1}function eu(){return Wm}var Ym=me({},Oi,{key:function(e){if(e.key){var t=Um[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qm=ot(Ym),Qm=me({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=ot(Qm),Gm=me({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Xm=ot(Gm),Km=me({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jm=ot(Km),Zm=me({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e1=ot(Zm),t1=[9,13,27,32],tu=Ht&&"CompositionEvent"in window,Kr=null;Ht&&"documentMode"in document&&(Kr=document.documentMode);var n1=Ht&&"TextEvent"in window&&!Kr,Wf=Ht&&(!tu||Kr&&8<Kr&&11>=Kr),wc=String.fromCharCode(32),Sc=!1;function Yf(e,t){switch(e){case"keyup":return t1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function r1(e,t){switch(e){case"compositionend":return qf(t);case"keypress":return t.which!==32?null:(Sc=!0,wc);case"textInput":return e=t.data,e===wc&&Sc?null:e;default:return null}}function i1(e,t){if(Yn)return e==="compositionend"||!tu&&Yf(e,t)?(e=Hf(),uo=Jl=ln=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wf&&t.locale!=="ko"?null:t.data;default:return null}}var o1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!o1[e.type]:t==="textarea"}function Qf(e,t,n,r){Ef(r),t=No(t,"onChange"),0<t.length&&(n=new Zl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jr=null,hi=null;function s1(e){op(e,0)}function us(e){var t=Gn(e);if(xf(t))return e}function a1(e,t){if(e==="change")return t}var Gf=!1;if(Ht){var Zs;if(Ht){var ea="oninput"in document;if(!ea){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),ea=typeof kc.oninput=="function"}Zs=ea}else Zs=!1;Gf=Zs&&(!document.documentMode||9<document.documentMode)}function jc(){Jr&&(Jr.detachEvent("onpropertychange",Xf),hi=Jr=null)}function Xf(e){if(e.propertyName==="value"&&us(hi)){var t=[];Qf(t,hi,e,ql(e)),Rf(s1,t)}}function l1(e,t,n){e==="focusin"?(jc(),Jr=t,hi=n,Jr.attachEvent("onpropertychange",Xf)):e==="focusout"&&jc()}function u1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return us(hi)}function c1(e,t){if(e==="click")return us(t)}function d1(e,t){if(e==="input"||e==="change")return us(t)}function f1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:f1;function mi(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ta.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bc(e,t){var n=Ec(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ec(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jf(){for(var e=window,t=bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bo(e.document)}return t}function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function p1(e){var t=Jf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kf(n.ownerDocument.documentElement,n)){if(r!==null&&nu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bc(n,o);var s=bc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var h1=Ht&&"documentMode"in document&&11>=document.documentMode,qn=null,qa=null,Zr=null,Qa=!1;function Pc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qa||qn==null||qn!==bo(r)||(r=qn,"selectionStart"in r&&nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&mi(Zr,r)||(Zr=r,r=No(qa,"onSelect"),0<r.length&&(t=new Zl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qn)))}function Yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},ta={},Zf={};Ht&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function cs(e){if(ta[e])return ta[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zf)return ta[e]=t[n];return e}var ep=cs("animationend"),tp=cs("animationiteration"),np=cs("animationstart"),rp=cs("transitionend"),ip=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){ip.set(e,t),Ln(t,[e])}for(var na=0;na<Tc.length;na++){var ra=Tc[na],m1=ra.toLowerCase(),g1=ra[0].toUpperCase()+ra.slice(1);kn(m1,"on"+g1)}kn(ep,"onAnimationEnd");kn(tp,"onAnimationIteration");kn(np,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(rp,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function Rc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mm(r,t,void 0,e),e.currentTarget=null}function op(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Rc(i,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Rc(i,a,c),o=u}}}if(To)throw e=Va,To=!1,Va=null,e}function ue(e,t){var n=t[Za];n===void 0&&(n=t[Za]=new Set);var r=e+"__bubble";n.has(r)||(sp(t,e,2,!1),n.add(r))}function ia(e,t,n){var r=0;t&&(r|=4),sp(n,e,r,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function gi(e){if(!e[qi]){e[qi]=!0,pf.forEach(function(n){n!=="selectionchange"&&(v1.has(n)||ia(n,!1,e),ia(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,ia("selectionchange",!1,t))}}function sp(e,t,n,r){switch(Vf(t)){case 1:var i=Om;break;case 4:i=zm;break;default:i=Kl}n=i.bind(null,t,n,e),i=void 0,!Ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function oa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Rn(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Rf(function(){var c=o,f=ql(n),d=[];e:{var m=ip.get(e);if(m!==void 0){var w=Zl,v=e;switch(e){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":w=qm;break;case"focusin":v="focus",w=Js;break;case"focusout":v="blur",w=Js;break;case"beforeblur":case"afterblur":w=Js;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Xm;break;case ep:case tp:case np:w=Fm;break;case rp:w=Jm;break;case"scroll":w=Nm;break;case"wheel":w=e1;break;case"copy":case"cut":case"paste":w=Lm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=yc}var x=(t&4)!==0,S=!x&&e==="scroll",h=x?m!==null?m+"Capture":null:m;x=[];for(var p=c,g;p!==null;){g=p;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,h!==null&&(k=ci(p,h),k!=null&&x.push(vi(p,k,g)))),S)break;p=p.return}0<x.length&&(m=new w(m,v,null,n,f),d.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==La&&(v=n.relatedTarget||n.fromElement)&&(Rn(v)||v[Wt]))break e;if((w||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?Rn(v):null,v!==null&&(S=Bn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(x=vc,k="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=yc,k="onPointerLeave",h="onPointerEnter",p="pointer"),S=w==null?m:Gn(w),g=v==null?m:Gn(v),m=new x(k,p+"leave",w,n,f),m.target=S,m.relatedTarget=g,k=null,Rn(f)===c&&(x=new x(h,p+"enter",v,n,f),x.target=g,x.relatedTarget=S,k=x),S=k,w&&v)t:{for(x=w,h=v,p=0,g=x;g;g=Un(g))p++;for(g=0,k=h;k;k=Un(k))g++;for(;0<p-g;)x=Un(x),p--;for(;0<g-p;)h=Un(h),g--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=Un(x),h=Un(h)}x=null}else x=null;w!==null&&_c(d,m,w,x,!1),v!==null&&S!==null&&_c(d,S,v,x,!0)}}e:{if(m=c?Gn(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var b=a1;else if(Cc(m))if(Gf)b=d1;else{b=u1;var R=l1}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=c1);if(b&&(b=b(e,c))){Qf(d,b,n,f);break e}R&&R(e,m,c),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&Ma(m,"number",m.value)}switch(R=c?Gn(c):window,e){case"focusin":(Cc(R)||R.contentEditable==="true")&&(qn=R,qa=c,Zr=null);break;case"focusout":Zr=qa=qn=null;break;case"mousedown":Qa=!0;break;case"contextmenu":case"mouseup":case"dragend":Qa=!1,Pc(d,n,f);break;case"selectionchange":if(h1)break;case"keydown":case"keyup":Pc(d,n,f)}var N;if(tu)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Yn?Yf(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Wf&&n.locale!=="ko"&&(Yn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Yn&&(N=Hf()):(ln=f,Jl="value"in ln?ln.value:ln.textContent,Yn=!0)),R=No(c,_),0<R.length&&(_=new xc(_,e,null,n,f),d.push({event:_,listeners:R}),N?_.data=N:(N=qf(n),N!==null&&(_.data=N)))),(N=n1?r1(e,n):i1(e,n))&&(c=No(c,"onBeforeInput"),0<c.length&&(f=new xc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=N))}op(d,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function No(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ci(e,n),o!=null&&r.unshift(vi(e,o,i)),o=ci(e,t),o!=null&&r.push(vi(e,o,i))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _c(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ci(n,o),u!=null&&s.unshift(vi(n,u,a))):i||(u=ci(n,o),u!=null&&s.push(vi(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var x1=/\r\n?/g,y1=/\u0000|\uFFFD/g;function Oc(e){return(typeof e=="string"?e:""+e).replace(x1,`
`).replace(y1,"")}function Qi(e,t,n){if(t=Oc(t),Oc(e)!==t&&n)throw Error(P(425))}function Ao(){}var Ga=null,Xa=null;function Ka(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ja=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,S1=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(C1)}:Ja;function C1(e){setTimeout(function(){throw e})}function sa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pi(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),_t="__reactFiber$"+kr,xi="__reactProps$"+kr,Wt="__reactContainer$"+kr,Za="__reactEvents$"+kr,k1="__reactListeners$"+kr,j1="__reactHandles$"+kr;function Rn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nc(e);e!==null;){if(n=e[_t])return n;e=Nc(e)}return t}e=n,n=e.parentNode}return null}function zi(e){return e=e[_t]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ds(e){return e[xi]||null}var el=[],Xn=-1;function jn(e){return{current:e}}function ce(e){0>Xn||(e.current=el[Xn],el[Xn]=null,Xn--)}function le(e,t){Xn++,el[Xn]=e.current,e.current=t}var Cn={},Ue=jn(Cn),Xe=jn(!1),Mn=Cn;function dr(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function Mo(){ce(Xe),ce(Ue)}function Ac(e,t,n){if(Ue.current!==Cn)throw Error(P(168));le(Ue,t),le(Xe,n)}function ap(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,lm(e)||"Unknown",i));return me({},n,r)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Mn=Ue.current,le(Ue,e),le(Xe,Xe.current),!0}function Mc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=ap(e,t,Mn),r.__reactInternalMemoizedMergedChildContext=e,ce(Xe),ce(Ue),le(Ue,e)):ce(Xe),le(Xe,n)}var Ft=null,fs=!1,aa=!1;function lp(e){Ft===null?Ft=[e]:Ft.push(e)}function E1(e){fs=!0,lp(e)}function En(){if(!aa&&Ft!==null){aa=!0;var e=0,t=ie;try{var n=Ft;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,fs=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),Nf(Ql,En),i}finally{ie=t,aa=!1}}return null}var Kn=[],Jn=0,$o=null,Fo=0,at=[],lt=0,In=null,Dt=1,Lt="";function bn(e,t){Kn[Jn++]=Fo,Kn[Jn++]=$o,$o=e,Fo=t}function up(e,t,n){at[lt++]=Dt,at[lt++]=Lt,at[lt++]=In,In=e;var r=Dt;e=Lt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var o=32-Ct(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Dt=1<<32-Ct(t)+i|n<<i|r,Lt=o+e}else Dt=1<<o|n<<i|r,Lt=e}function ru(e){e.return!==null&&(bn(e,1),up(e,1,0))}function iu(e){for(;e===$o;)$o=Kn[--Jn],Kn[Jn]=null,Fo=Kn[--Jn],Kn[Jn]=null;for(;e===In;)In=at[--lt],at[lt]=null,Lt=at[--lt],at[lt]=null,Dt=at[--lt],at[lt]=null}var nt=null,tt=null,fe=!1,St=null;function cp(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ic(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Dt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nl(e){if(fe){var t=tt;if(t){var n=t;if(!Ic(e,t)){if(tl(e))throw Error(P(418));t=hn(n.nextSibling);var r=nt;t&&Ic(e,t)?cp(r,n):(e.flags=e.flags&-4097|2,fe=!1,nt=e)}}else{if(tl(e))throw Error(P(418));e.flags=e.flags&-4097|2,fe=!1,nt=e}}}function $c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function Gi(e){if(e!==nt)return!1;if(!fe)return $c(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ka(e.type,e.memoizedProps)),t&&(t=tt)){if(tl(e))throw dp(),Error(P(418));for(;t;)cp(e,t),t=hn(t.nextSibling)}if($c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?hn(e.stateNode.nextSibling):null;return!0}function dp(){for(var e=tt;e;)e=hn(e.nextSibling)}function fr(){tt=nt=null,fe=!1}function ou(e){St===null?St=[e]:St.push(e)}var b1=Gt.ReactCurrentBatchConfig;function vt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Do=jn(null),Lo=null,Zn=null,su=null;function au(){su=Zn=Lo=null}function lu(e){var t=Do.current;ce(Do),e._currentValue=t}function rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){Lo=e,su=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(su!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(Lo===null)throw Error(P(308));Zn=e,Lo.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var _n=null;function uu(e){_n===null?_n=[e]:_n.push(e)}function fp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,uu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rn=!1;function cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,uu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gl(e,n)}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bo(e,t,n,r){var i=e.updateQueue;rn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(o!==null){var d=i.baseState;s=0,f=c=u=null,a=o;do{var m=a.lane,w=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(m=t,w=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(w,d,m);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,m=typeof v=="function"?v.call(w,d,m):v,m==null)break e;d=me({},d,m);break e;case 2:rn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=w,u=d):f=f.next=w,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fn|=s,e.lanes=s,e.memoizedState=d}}function Dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var hp=new ff.Component().refs;function il(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ps={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=vn(e),o=Ut(r,i);o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,i),t!==null&&(kt(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=vn(e),o=Ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,i),t!==null&&(kt(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=vn(e),i=Ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=mn(e,i,r),t!==null&&(kt(t,e,r,n),fo(t,e,r))}};function Lc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!mi(n,r)||!mi(i,o):!0}function mp(e,t,n){var r=!1,i=Cn,o=t.contextType;return typeof o=="object"&&o!==null?o=ft(o):(i=Ke(t)?Mn:Ue.current,r=t.contextTypes,o=(r=r!=null)?dr(e,i):Cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ps,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ps.enqueueReplaceState(t,t.state,null)}function ol(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=hp,cu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ft(o):(o=Ke(t)?Mn:Ue.current,i.context=dr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(il(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ps.enqueueReplaceState(i,i.state,null),Bo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===hp&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Uc(e){var t=e._init;return t(e._payload)}function gp(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=xn(h,p),h.index=0,h.sibling=null,h}function o(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,g,k){return p===null||p.tag!==6?(p=ha(g,h.mode,k),p.return=h,p):(p=i(p,g),p.return=h,p)}function u(h,p,g,k){var b=g.type;return b===Wn?f(h,p,g.props.children,k,g.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===nn&&Uc(b)===p.type)?(k=i(p,g.props),k.ref=Mr(h,p,g),k.return=h,k):(k=xo(g.type,g.key,g.props,null,h.mode,k),k.ref=Mr(h,p,g),k.return=h,k)}function c(h,p,g,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ma(g,h.mode,k),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function f(h,p,g,k,b){return p===null||p.tag!==7?(p=Nn(g,h.mode,k,b),p.return=h,p):(p=i(p,g),p.return=h,p)}function d(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ha(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Di:return g=xo(p.type,p.key,p.props,null,h.mode,g),g.ref=Mr(h,null,p),g.return=h,g;case Hn:return p=ma(p,h.mode,g),p.return=h,p;case nn:var k=p._init;return d(h,k(p._payload),g)}if(Hr(p)||_r(p))return p=Nn(p,h.mode,g,null),p.return=h,p;Xi(h,p)}return null}function m(h,p,g,k){var b=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(h,p,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:return g.key===b?u(h,p,g,k):null;case Hn:return g.key===b?c(h,p,g,k):null;case nn:return b=g._init,m(h,p,b(g._payload),k)}if(Hr(g)||_r(g))return b!==null?null:f(h,p,g,k,null);Xi(h,g)}return null}function w(h,p,g,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(g)||null,a(p,h,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Di:return h=h.get(k.key===null?g:k.key)||null,u(p,h,k,b);case Hn:return h=h.get(k.key===null?g:k.key)||null,c(p,h,k,b);case nn:var R=k._init;return w(h,p,g,R(k._payload),b)}if(Hr(k)||_r(k))return h=h.get(g)||null,f(p,h,k,b,null);Xi(p,k)}return null}function v(h,p,g,k){for(var b=null,R=null,N=p,_=p=0,F=null;N!==null&&_<g.length;_++){N.index>_?(F=N,N=null):F=N.sibling;var T=m(h,N,g[_],k);if(T===null){N===null&&(N=F);break}e&&N&&T.alternate===null&&t(h,N),p=o(T,p,_),R===null?b=T:R.sibling=T,R=T,N=F}if(_===g.length)return n(h,N),fe&&bn(h,_),b;if(N===null){for(;_<g.length;_++)N=d(h,g[_],k),N!==null&&(p=o(N,p,_),R===null?b=N:R.sibling=N,R=N);return fe&&bn(h,_),b}for(N=r(h,N);_<g.length;_++)F=w(N,h,_,g[_],k),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?_:F.key),p=o(F,p,_),R===null?b=F:R.sibling=F,R=F);return e&&N.forEach(function(H){return t(h,H)}),fe&&bn(h,_),b}function x(h,p,g,k){var b=_r(g);if(typeof b!="function")throw Error(P(150));if(g=b.call(g),g==null)throw Error(P(151));for(var R=b=null,N=p,_=p=0,F=null,T=g.next();N!==null&&!T.done;_++,T=g.next()){N.index>_?(F=N,N=null):F=N.sibling;var H=m(h,N,T.value,k);if(H===null){N===null&&(N=F);break}e&&N&&H.alternate===null&&t(h,N),p=o(H,p,_),R===null?b=H:R.sibling=H,R=H,N=F}if(T.done)return n(h,N),fe&&bn(h,_),b;if(N===null){for(;!T.done;_++,T=g.next())T=d(h,T.value,k),T!==null&&(p=o(T,p,_),R===null?b=T:R.sibling=T,R=T);return fe&&bn(h,_),b}for(N=r(h,N);!T.done;_++,T=g.next())T=w(N,h,_,T.value,k),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?_:T.key),p=o(T,p,_),R===null?b=T:R.sibling=T,R=T);return e&&N.forEach(function(Y){return t(h,Y)}),fe&&bn(h,_),b}function S(h,p,g,k){if(typeof g=="object"&&g!==null&&g.type===Wn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:e:{for(var b=g.key,R=p;R!==null;){if(R.key===b){if(b=g.type,b===Wn){if(R.tag===7){n(h,R.sibling),p=i(R,g.props.children),p.return=h,h=p;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===nn&&Uc(b)===R.type){n(h,R.sibling),p=i(R,g.props),p.ref=Mr(h,R,g),p.return=h,h=p;break e}n(h,R);break}else t(h,R);R=R.sibling}g.type===Wn?(p=Nn(g.props.children,h.mode,k,g.key),p.return=h,h=p):(k=xo(g.type,g.key,g.props,null,h.mode,k),k.ref=Mr(h,p,g),k.return=h,h=k)}return s(h);case Hn:e:{for(R=g.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ma(g,h.mode,k),p.return=h,h=p}return s(h);case nn:return R=g._init,S(h,p,R(g._payload),k)}if(Hr(g))return v(h,p,g,k);if(_r(g))return x(h,p,g,k);Xi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,g),p.return=h,h=p):(n(h,p),p=ha(g,h.mode,k),p.return=h,h=p),s(h)):n(h,p)}return S}var pr=gp(!0),vp=gp(!1),Ni={},Nt=jn(Ni),yi=jn(Ni),wi=jn(Ni);function On(e){if(e===Ni)throw Error(P(174));return e}function du(e,t){switch(le(wi,t),le(yi,e),le(Nt,Ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$a(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$a(t,e)}ce(Nt),le(Nt,t)}function hr(){ce(Nt),ce(yi),ce(wi)}function xp(e){On(wi.current);var t=On(Nt.current),n=$a(t,e.type);t!==n&&(le(yi,e),le(Nt,n))}function fu(e){yi.current===e&&(ce(Nt),ce(yi))}var pe=jn(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=[];function pu(){for(var e=0;e<la.length;e++)la[e]._workInProgressVersionPrimary=null;la.length=0}var po=Gt.ReactCurrentDispatcher,ua=Gt.ReactCurrentBatchConfig,$n=0,he=null,ke=null,Te=null,Vo=!1,ei=!1,Si=0,P1=0;function De(){throw Error(P(321))}function hu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function mu(e,t,n,r,i,o){if($n=o,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,po.current=e===null||e.memoizedState===null?O1:z1,e=n(r,i),ei){o=0;do{if(ei=!1,Si=0,25<=o)throw Error(P(301));o+=1,Te=ke=null,t.updateQueue=null,po.current=N1,e=n(r,i)}while(ei)}if(po.current=Ho,t=ke!==null&&ke.next!==null,$n=0,Te=ke=he=null,Vo=!1,t)throw Error(P(300));return e}function gu(){var e=Si!==0;return Si=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?he.memoizedState=Te=e:Te=Te.next=e,Te}function pt(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Te===null?he.memoizedState:Te.next;if(t!==null)Te=t,ke=e;else{if(e===null)throw Error(P(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Te===null?he.memoizedState=Te=e:Te=Te.next=e}return Te}function Ci(e,t){return typeof t=="function"?t(e):t}function ca(e){var t=pt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,c=o;do{var f=c.lane;if(($n&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=d,s=r):u=u.next=d,he.lanes|=f,Fn|=f}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,Et(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,he.lanes|=o,Fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function da(e){var t=pt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Et(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function yp(){}function wp(e,t){var n=he,r=pt(),i=t(),o=!Et(r.memoizedState,i);if(o&&(r.memoizedState=i,Ge=!0),r=r.queue,vu(kp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,ki(9,Cp.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(P(349));$n&30||Sp(n,t,i)}return i}function Sp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cp(e,t,n,r){t.value=n,t.getSnapshot=r,jp(t)&&Ep(e)}function kp(e,t,n){return n(function(){jp(t)&&Ep(e)})}function jp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function Ep(e){var t=Yt(e,1);t!==null&&kt(t,e,1,-1)}function Vc(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:e},t.queue=e,e=e.dispatch=_1.bind(null,he,e),[t.memoizedState,e]}function ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bp(){return pt().memoizedState}function ho(e,t,n,r){var i=Rt();he.flags|=e,i.memoizedState=ki(1|t,n,void 0,r===void 0?null:r)}function hs(e,t,n,r){var i=pt();r=r===void 0?null:r;var o=void 0;if(ke!==null){var s=ke.memoizedState;if(o=s.destroy,r!==null&&hu(r,s.deps)){i.memoizedState=ki(t,n,o,r);return}}he.flags|=e,i.memoizedState=ki(1|t,n,o,r)}function Hc(e,t){return ho(8390656,8,e,t)}function vu(e,t){return hs(2048,8,e,t)}function Pp(e,t){return hs(4,2,e,t)}function Tp(e,t){return hs(4,4,e,t)}function Rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _p(e,t,n){return n=n!=null?n.concat([e]):null,hs(4,4,Rp.bind(null,t,e),n)}function xu(){}function Op(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zp(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Np(e,t,n){return $n&21?(Et(n,t)||(n=If(),he.lanes|=n,Fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function T1(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=ua.transition;ua.transition={};try{e(!1),t()}finally{ie=n,ua.transition=r}}function Ap(){return pt().memoizedState}function R1(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mp(e))Ip(t,n);else if(n=fp(e,t,n,r),n!==null){var i=He();kt(n,e,r,i),$p(n,t,r)}}function _1(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mp(e))Ip(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Et(a,s)){var u=t.interleaved;u===null?(i.next=i,uu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=fp(e,t,i,r),n!==null&&(i=He(),kt(n,e,r,i),$p(n,t,r))}}function Mp(e){var t=e.alternate;return e===he||t!==null&&t===he}function Ip(e,t){ei=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $p(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gl(e,n)}}var Ho={readContext:ft,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},O1={readContext:ft,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Hc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ho(4194308,4,Rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return ho(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=R1.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:Vc,useDebugValue:xu,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=Vc(!1),t=e[0];return e=T1.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,i=Rt();if(fe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Re===null)throw Error(P(349));$n&30||Sp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Hc(kp.bind(null,r,o,e),[e]),r.flags|=2048,ki(9,Cp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Rt(),t=Re.identifierPrefix;if(fe){var n=Lt,r=Dt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=P1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},z1={readContext:ft,useCallback:Op,useContext:ft,useEffect:vu,useImperativeHandle:_p,useInsertionEffect:Pp,useLayoutEffect:Tp,useMemo:zp,useReducer:ca,useRef:bp,useState:function(){return ca(Ci)},useDebugValue:xu,useDeferredValue:function(e){var t=pt();return Np(t,ke.memoizedState,e)},useTransition:function(){var e=ca(Ci)[0],t=pt().memoizedState;return[e,t]},useMutableSource:yp,useSyncExternalStore:wp,useId:Ap,unstable_isNewReconciler:!1},N1={readContext:ft,useCallback:Op,useContext:ft,useEffect:vu,useImperativeHandle:_p,useInsertionEffect:Pp,useLayoutEffect:Tp,useMemo:zp,useReducer:da,useRef:bp,useState:function(){return da(Ci)},useDebugValue:xu,useDeferredValue:function(e){var t=pt();return ke===null?t.memoizedState=e:Np(t,ke.memoizedState,e)},useTransition:function(){var e=da(Ci)[0],t=pt().memoizedState;return[e,t]},useMutableSource:yp,useSyncExternalStore:wp,useId:Ap,unstable_isNewReconciler:!1};function mr(e,t){try{var n="",r=t;do n+=am(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var A1=typeof WeakMap=="function"?WeakMap:Map;function Fp(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yo||(Yo=!0,gl=r),sl(e,t)},n}function Dp(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){sl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sl(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new A1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Q1.bind(null,e,t,n),t.then(e,e))}function Yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e)}var M1=Gt.ReactCurrentOwner,Ge=!1;function Ve(e,t,n,r){t.child=e===null?vp(t,null,n,r):pr(t,e.child,n,r)}function Qc(e,t,n,r,i){n=n.render;var o=t.ref;return ar(t,i),r=mu(e,t,n,r,o,i),n=gu(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(fe&&n&&ru(t),t.flags|=1,Ve(e,t,r,i),t.child)}function Gc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!bu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lp(e,t,o,r,i)):(e=xo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(s,r)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=xn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Lp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(mi(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,qt(e,t,i)}return al(e,t,n,r,i)}function Bp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(tr,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(tr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(tr,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(tr,et),et|=r;return Ve(e,t,i,n),t.child}function Up(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function al(e,t,n,r,i){var o=Ke(n)?Mn:Ue.current;return o=dr(t,o),ar(t,i),n=mu(e,t,n,r,o,i),r=gu(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(fe&&r&&ru(t),t.flags|=1,Ve(e,t,n,i),t.child)}function Xc(e,t,n,r,i){if(Ke(n)){var o=!0;Io(t)}else o=!1;if(ar(t,i),t.stateNode===null)mo(e,t),mp(t,n,r),ol(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ft(c):(c=Ke(n)?Mn:Ue.current,c=dr(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Bc(t,s,r,c),rn=!1;var m=t.memoizedState;s.state=m,Bo(t,r,s,i),u=t.memoizedState,a!==r||m!==u||Xe.current||rn?(typeof f=="function"&&(il(t,n,f,r),u=t.memoizedState),(a=rn||Lc(t,n,a,r,m,u,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,pp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:vt(t.type,a),s.props=c,d=t.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=ft(u):(u=Ke(n)?Mn:Ue.current,u=dr(t,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||m!==u)&&Bc(t,s,r,u),rn=!1,m=t.memoizedState,s.state=m,Bo(t,r,s,i);var v=t.memoizedState;a!==d||m!==v||Xe.current||rn?(typeof w=="function"&&(il(t,n,w,r),v=t.memoizedState),(c=rn||Lc(t,n,c,r,m,v,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ll(e,t,n,r,o,i)}function ll(e,t,n,r,i,o){Up(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Mc(t,n,!1),qt(e,t,o);r=t.stateNode,M1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=pr(t,e.child,null,o),t.child=pr(t,null,a,o)):Ve(e,t,a,o),t.memoizedState=r.state,i&&Mc(t,n,!0),t.child}function Vp(e){var t=e.stateNode;t.pendingContext?Ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ac(e,t.context,!1),du(e,t.containerInfo)}function Kc(e,t,n,r,i){return fr(),ou(i),t.flags|=256,Ve(e,t,n,r),t.child}var ul={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hp(e,t,n){var r=t.pendingProps,i=pe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(pe,i&1),e===null)return nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=vs(s,r,0,null),e=Nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cl(n),t.memoizedState=ul,e):yu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return I1(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=xn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=xn(a,o):(o=Nn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?cl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ul,r}return o=e.child,e=o.sibling,r=xn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yu(e,t){return t=vs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ki(e,t,n,r){return r!==null&&ou(r),pr(t,e.child,null,n),e=yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function I1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=fa(Error(P(422))),Ki(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=vs({mode:"visible",children:r.children},i,0,null),o=Nn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pr(t,e.child,null,s),t.child.memoizedState=cl(s),t.memoizedState=ul,o);if(!(t.mode&1))return Ki(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=fa(o,r,void 0),Ki(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ge||a){if(r=Re,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),kt(r,e,i,-1))}return Eu(),r=fa(Error(P(421))),Ki(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=G1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=hn(i.nextSibling),nt=t,fe=!0,St=null,e!==null&&(at[lt++]=Dt,at[lt++]=Lt,at[lt++]=In,Dt=e.id,Lt=e.overflow,In=t),t=yu(t,r.children),t.flags|=4096,t)}function Jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rl(e.return,t,n)}function pa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Wp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jc(e,n,t);else if(e.tag===19)Jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pa(t,!0,n,null,o);break;case"together":pa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $1(e,t,n){switch(t.tag){case 3:Vp(t),fr();break;case 5:xp(t);break;case 1:Ke(t.type)&&Io(t);break;case 4:du(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(Do,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?Hp(e,t,n):(le(pe,pe.current&1),e=qt(e,t,n),e!==null?e.sibling:null);le(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Bp(e,t,n)}return qt(e,t,n)}var Yp,dl,qp,Qp;Yp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dl=function(){};qp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(Nt.current);var o=null;switch(n){case"input":i=Na(e,i),r=Na(e,r),o=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),o=[];break;case"textarea":i=Ia(e,i),r=Ia(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}Fa(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(li.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(li.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ue("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Qp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F1(e,t,n){var r=t.pendingProps;switch(iu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ke(t.type)&&Mo(),Le(t),null;case 3:return r=t.stateNode,hr(),ce(Xe),ce(Ue),pu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(yl(St),St=null))),dl(e,t),Le(t),null;case 5:fu(t);var i=On(wi.current);if(n=t.type,e!==null&&t.stateNode!=null)qp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Le(t),null}if(e=On(Nt.current),Gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[_t]=t,r[xi]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<Yr.length;i++)ue(Yr[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":ac(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":uc(r,o),ue("invalid",r)}Fa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Qi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Qi(r.textContent,a,e),i=["children",""+a]):li.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ue("scroll",r)}switch(n){case"input":Li(r),lc(r,o,!0);break;case"textarea":Li(r),cc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[_t]=t,e[xi]=r,Yp(e,t,!1,!1),t.stateNode=e;e:{switch(s=Da(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yr.length;i++)ue(Yr[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":ac(e,r),i=Na(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ue("invalid",e);break;case"textarea":uc(e,r),i=Ia(e,r),ue("invalid",e);break;default:i=r}Fa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?jf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Cf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ui(e,u):typeof u=="number"&&ui(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(li.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ue("scroll",e):u!=null&&Vl(e,o,u,s))}switch(n){case"input":Li(e),lc(e,r,!1);break;case"textarea":Li(e),cc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rr(e,!!r.multiple,o,!1):r.defaultValue!=null&&rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Qp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=On(wi.current),On(Nt.current),Gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(o=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Qi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Le(t),null;case 13:if(ce(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&tt!==null&&t.mode&1&&!(t.flags&128))dp(),fr(),t.flags|=98560,o=!1;else if(o=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[_t]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else St!==null&&(yl(St),St=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?je===0&&(je=3):Eu())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return hr(),dl(e,t),e===null&&gi(t.stateNode.containerInfo),Le(t),null;case 10:return lu(t.type._context),Le(t),null;case 17:return Ke(t.type)&&Mo(),Le(t),null;case 19:if(ce(pe),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ir(o,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Uo(e),s!==null){for(t.flags|=128,Ir(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>gr&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!fe)return Le(t),null}else 2*ye()-o.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=pe.current,le(pe,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return ju(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function D1(e,t){switch(iu(t),t.tag){case 1:return Ke(t.type)&&Mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),ce(Xe),ce(Ue),pu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fu(t),null;case 13:if(ce(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(pe),null;case 4:return hr(),null;case 10:return lu(t.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var Ji=!1,Be=!1,L1=typeof WeakSet=="function"?WeakSet:Set,$=null;function er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function fl(e,t,n){try{n()}catch(r){ve(e,t,r)}}var Zc=!1;function B1(e,t){if(Ga=Oo,e=Jf(),nu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,f=0,d=e,m=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(u=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(w=d.firstChild)!==null;)m=d,d=w;for(;;){if(d===e)break t;if(m===n&&++c===i&&(a=s),m===o&&++f===r&&(u=s),(w=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xa={focusedElem:e,selectionRange:n},Oo=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:vt(t.type,x),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){ve(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return v=Zc,Zc=!1,v}function ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&fl(t,n,o)}i=i.next}while(i!==r)}}function ms(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gp(e){var t=e.alternate;t!==null&&(e.alternate=null,Gp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[xi],delete t[Za],delete t[k1],delete t[j1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xp(e){return e.tag===5||e.tag===3||e.tag===4}function ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}function ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ml(e,t,n),e=e.sibling;e!==null;)ml(e,t,n),e=e.sibling}var Ae=null,xt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)Kp(e,t,n),n=n.sibling}function Kp(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(as,n)}catch{}switch(n.tag){case 5:Be||er(n,t);case 6:var r=Ae,i=xt;Ae=null,Jt(e,t,n),Ae=r,xt=i,Ae!==null&&(xt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(xt?(e=Ae,n=n.stateNode,e.nodeType===8?sa(e.parentNode,n):e.nodeType===1&&sa(e,n),pi(e)):sa(Ae,n.stateNode));break;case 4:r=Ae,i=xt,Ae=n.stateNode.containerInfo,xt=!0,Jt(e,t,n),Ae=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&fl(n,t,s),i=i.next}while(i!==r)}Jt(e,t,n);break;case 1:if(!Be&&(er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,t,a)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Jt(e,t,n),Be=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function td(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new L1),t.forEach(function(r){var i=X1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,xt=!1;break e;case 3:Ae=a.stateNode.containerInfo,xt=!0;break e;case 4:Ae=a.stateNode.containerInfo,xt=!0;break e}a=a.return}if(Ae===null)throw Error(P(160));Kp(o,s,i),Ae=null,xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ve(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jp(t,e),t=t.sibling}function Jp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Tt(e),r&4){try{ti(3,e,e.return),ms(3,e)}catch(x){ve(e,e.return,x)}try{ti(5,e,e.return)}catch(x){ve(e,e.return,x)}}break;case 1:gt(t,e),Tt(e),r&512&&n!==null&&er(n,n.return);break;case 5:if(gt(t,e),Tt(e),r&512&&n!==null&&er(n,n.return),e.flags&32){var i=e.stateNode;try{ui(i,"")}catch(x){ve(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&yf(i,o),Da(a,s);var c=Da(a,o);for(s=0;s<u.length;s+=2){var f=u[s],d=u[s+1];f==="style"?jf(i,d):f==="dangerouslySetInnerHTML"?Cf(i,d):f==="children"?ui(i,d):Vl(i,f,d,c)}switch(a){case"input":Aa(i,o);break;case"textarea":wf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?rr(i,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?rr(i,!!o.multiple,o.defaultValue,!0):rr(i,!!o.multiple,o.multiple?[]:"",!1))}i[xi]=o}catch(x){ve(e,e.return,x)}}break;case 6:if(gt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ve(e,e.return,x)}}break;case 3:if(gt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pi(t.containerInfo)}catch(x){ve(e,e.return,x)}break;case 4:gt(t,e),Tt(e);break;case 13:gt(t,e),Tt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cu=ye())),r&4&&td(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(c=Be)||f,gt(t,e),Be=c):gt(t,e),Tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for($=e,f=e.child;f!==null;){for(d=$=f;$!==null;){switch(m=$,w=m.child,m.tag){case 0:case 11:case 14:case 15:ti(4,m,m.return);break;case 1:er(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ve(r,n,x)}}break;case 5:er(m,m.return);break;case 22:if(m.memoizedState!==null){rd(d);continue}}w!==null?(w.return=m,$=w):rd(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,u=d.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=kf("display",s))}catch(x){ve(e,e.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ve(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gt(t,e),Tt(e),r&4&&td(e);break;case 21:break;default:gt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xp(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ui(i,""),r.flags&=-33);var o=ed(e);ml(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ed(e);hl(e,a,s);break;default:throw Error(P(161))}}catch(u){ve(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function U1(e,t,n){$=e,Zp(e)}function Zp(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ji;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Be;a=Ji;var c=Be;if(Ji=s,(Be=u)&&!c)for($=i;$!==null;)s=$,u=s.child,s.tag===22&&s.memoizedState!==null?id(i):u!==null?(u.return=s,$=u):id(i);for(;o!==null;)$=o,Zp(o),o=o.sibling;$=i,Ji=a,Be=c}nd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):nd(e)}}function nd(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||ms(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&pi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Be||t.flags&512&&pl(t)}catch(m){ve(t,t.return,m)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function rd(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function id(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ms(4,t)}catch(u){ve(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ve(t,i,u)}}var o=t.return;try{pl(t)}catch(u){ve(t,o,u)}break;case 5:var s=t.return;try{pl(t)}catch(u){ve(t,s,u)}}}catch(u){ve(t,t.return,u)}if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}var V1=Math.ceil,Wo=Gt.ReactCurrentDispatcher,wu=Gt.ReactCurrentOwner,ct=Gt.ReactCurrentBatchConfig,K=0,Re=null,Se=null,Me=0,et=0,tr=jn(0),je=0,ji=null,Fn=0,gs=0,Su=0,ni=null,Qe=null,Cu=0,gr=1/0,$t=null,Yo=!1,gl=null,gn=null,Zi=!1,un=null,qo=0,ri=0,vl=null,go=-1,vo=0;function He(){return K&6?ye():go!==-1?go:go=ye()}function vn(e){return e.mode&1?K&2&&Me!==0?Me&-Me:b1.transition!==null?(vo===0&&(vo=If()),vo):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Vf(e.type)),e):1}function kt(e,t,n,r){if(50<ri)throw ri=0,vl=null,Error(P(185));_i(e,n,r),(!(K&2)||e!==Re)&&(e===Re&&(!(K&2)&&(gs|=n),je===4&&sn(e,Me)),Je(e,r),n===1&&K===0&&!(t.mode&1)&&(gr=ye()+500,fs&&En()))}function Je(e,t){var n=e.callbackNode;bm(e,t);var r=_o(e,e===Re?Me:0);if(r===0)n!==null&&pc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pc(n),t===1)e.tag===0?E1(od.bind(null,e)):lp(od.bind(null,e)),S1(function(){!(K&6)&&En()}),n=null;else{switch($f(r)){case 1:n=Ql;break;case 4:n=Af;break;case 16:n=Ro;break;case 536870912:n=Mf;break;default:n=Ro}n=ah(n,eh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function eh(e,t){if(go=-1,vo=0,K&6)throw Error(P(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=_o(e,e===Re?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qo(e,r);else{t=r;var i=K;K|=2;var o=nh();(Re!==e||Me!==t)&&($t=null,gr=ye()+500,zn(e,t));do try{Y1();break}catch(a){th(e,a)}while(1);au(),Wo.current=o,K=i,Se!==null?t=0:(Re=null,Me=0,t=je)}if(t!==0){if(t===2&&(i=Ha(e),i!==0&&(r=i,t=xl(e,i))),t===1)throw n=ji,zn(e,0),sn(e,r),Je(e,ye()),n;if(t===6)sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!H1(i)&&(t=Qo(e,r),t===2&&(o=Ha(e),o!==0&&(r=o,t=xl(e,o))),t===1))throw n=ji,zn(e,0),sn(e,r),Je(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Pn(e,Qe,$t);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=Cu+500-ye(),10<t)){if(_o(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ja(Pn.bind(null,e,Qe,$t),t);break}Pn(e,Qe,$t);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ct(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*V1(r/1960))-r,10<r){e.timeoutHandle=Ja(Pn.bind(null,e,Qe,$t),r);break}Pn(e,Qe,$t);break;case 5:Pn(e,Qe,$t);break;default:throw Error(P(329))}}}return Je(e,ye()),e.callbackNode===n?eh.bind(null,e):null}function xl(e,t){var n=ni;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&yl(t)),e}function yl(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function H1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~Su,t&=~gs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function od(e){if(K&6)throw Error(P(327));lr();var t=_o(e,0);if(!(t&1))return Je(e,ye()),null;var n=Qo(e,t);if(e.tag!==0&&n===2){var r=Ha(e);r!==0&&(t=r,n=xl(e,r))}if(n===1)throw n=ji,zn(e,0),sn(e,t),Je(e,ye()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Qe,$t),Je(e,ye()),null}function ku(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(gr=ye()+500,fs&&En())}}function Dn(e){un!==null&&un.tag===0&&!(K&6)&&lr();var t=K;K|=1;var n=ct.transition,r=ie;try{if(ct.transition=null,ie=1,e)return e()}finally{ie=r,ct.transition=n,K=t,!(K&6)&&En()}}function ju(){et=tr.current,ce(tr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,w1(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(iu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mo();break;case 3:hr(),ce(Xe),ce(Ue),pu();break;case 5:fu(r);break;case 4:hr();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:lu(r.type._context);break;case 22:case 23:ju()}n=n.return}if(Re=e,Se=e=xn(e.current,null),Me=et=t,je=0,ji=null,Su=gs=Fn=0,Qe=ni=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}_n=null}return e}function th(e,t){do{var n=Se;try{if(au(),po.current=Ho,Vo){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vo=!1}if($n=0,Te=ke=he=null,ei=!1,Si=0,wu.current=null,n===null||n.return===null){je=1,ji=t,Se=null;break}e:{var o=e,s=n.return,a=n,u=t;if(t=Me,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Yc(s);if(w!==null){w.flags&=-257,qc(w,s,a,o,t),w.mode&1&&Wc(o,c,t),t=w,u=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){Wc(o,c,t),Eu();break e}u=Error(P(426))}}else if(fe&&a.mode&1){var S=Yc(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),qc(S,s,a,o,t),ou(mr(u,a));break e}}o=u=mr(u,a),je!==4&&(je=2),ni===null?ni=[o]:ni.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Fp(o,u,t);Fc(o,h);break e;case 1:a=u;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(gn===null||!gn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Dp(o,a,t);Fc(o,k);break e}}o=o.return}while(o!==null)}ih(n)}catch(b){t=b,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function nh(){var e=Wo.current;return Wo.current=Ho,e===null?Ho:e}function Eu(){(je===0||je===3||je===2)&&(je=4),Re===null||!(Fn&268435455)&&!(gs&268435455)||sn(Re,Me)}function Qo(e,t){var n=K;K|=2;var r=nh();(Re!==e||Me!==t)&&($t=null,zn(e,t));do try{W1();break}catch(i){th(e,i)}while(1);if(au(),K=n,Wo.current=r,Se!==null)throw Error(P(261));return Re=null,Me=0,je}function W1(){for(;Se!==null;)rh(Se)}function Y1(){for(;Se!==null&&!vm();)rh(Se)}function rh(e){var t=sh(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?ih(e):Se=t,wu.current=null}function ih(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=D1(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Se=null;return}}else if(n=F1(n,t,et),n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);je===0&&(je=5)}function Pn(e,t,n){var r=ie,i=ct.transition;try{ct.transition=null,ie=1,q1(e,t,n,r)}finally{ct.transition=i,ie=r}return null}function q1(e,t,n,r){do lr();while(un!==null);if(K&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pm(e,o),e===Re&&(Se=Re=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zi||(Zi=!0,ah(Ro,function(){return lr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ct.transition,ct.transition=null;var s=ie;ie=1;var a=K;K|=4,wu.current=null,B1(e,n),Jp(n,e),p1(Xa),Oo=!!Ga,Xa=Ga=null,e.current=n,U1(n),xm(),K=a,ie=s,ct.transition=o}else e.current=n;if(Zi&&(Zi=!1,un=e,qo=i),o=e.pendingLanes,o===0&&(gn=null),Sm(n.stateNode),Je(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yo)throw Yo=!1,e=gl,gl=null,e;return qo&1&&e.tag!==0&&lr(),o=e.pendingLanes,o&1?e===vl?ri++:(ri=0,vl=e):ri=0,En(),null}function lr(){if(un!==null){var e=$f(qo),t=ct.transition,n=ie;try{if(ct.transition=null,ie=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,qo=0,K&6)throw Error(P(331));var i=K;for(K|=4,$=e.current;$!==null;){var o=$,s=o.child;if($.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for($=c;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:ti(8,f,o)}var d=f.child;if(d!==null)d.return=f,$=d;else for(;$!==null;){f=$;var m=f.sibling,w=f.return;if(Gp(f),f===c){$=null;break}if(m!==null){m.return=w,$=m;break}$=w}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}$=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,$=s;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ti(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,$=h;break e}$=o.return}}var p=e.current;for($=p;$!==null;){s=$;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,$=g;else e:for(s=p;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ms(9,a)}}catch(b){ve(a,a.return,b)}if(a===s){$=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,$=k;break e}$=a.return}}if(K=i,En(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(as,e)}catch{}r=!0}return r}finally{ie=n,ct.transition=t}}return!1}function sd(e,t,n){t=mr(n,t),t=Fp(e,t,1),e=mn(e,t,1),t=He(),e!==null&&(_i(e,1,t),Je(e,t))}function ve(e,t,n){if(e.tag===3)sd(e,e,n);else for(;t!==null;){if(t.tag===3){sd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=mr(n,e),e=Dp(t,e,1),t=mn(t,e,1),e=He(),t!==null&&(_i(t,1,e),Je(t,e));break}}t=t.return}}function Q1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Me&n)===n&&(je===4||je===3&&(Me&130023424)===Me&&500>ye()-Cu?zn(e,0):Su|=n),Je(e,t)}function oh(e,t){t===0&&(e.mode&1?(t=Vi,Vi<<=1,!(Vi&130023424)&&(Vi=4194304)):t=1);var n=He();e=Yt(e,t),e!==null&&(_i(e,t,n),Je(e,n))}function G1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),oh(e,n)}function X1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),oh(e,n)}var sh;sh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,$1(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,fe&&t.flags&1048576&&up(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mo(e,t),e=t.pendingProps;var i=dr(t,Ue.current);ar(t,n),i=mu(null,t,r,e,i,n);var o=gu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(o=!0,Io(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cu(t),i.updater=ps,t.stateNode=i,i._reactInternals=t,ol(t,r,e,n),t=ll(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&ru(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=J1(r),e=vt(r,e),i){case 0:t=al(null,t,r,e,n);break e;case 1:t=Xc(null,t,r,e,n);break e;case 11:t=Qc(null,t,r,e,n);break e;case 14:t=Gc(null,t,r,vt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),al(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Xc(e,t,r,i,n);case 3:e:{if(Vp(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,pp(e,t),Bo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=mr(Error(P(423)),t),t=Kc(e,t,r,n,i);break e}else if(r!==i){i=mr(Error(P(424)),t),t=Kc(e,t,r,n,i);break e}else for(tt=hn(t.stateNode.containerInfo.firstChild),nt=t,fe=!0,St=null,n=vp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){t=qt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return xp(t),e===null&&nl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ka(r,i)?s=null:o!==null&&Ka(r,o)&&(t.flags|=32),Up(e,t),Ve(e,t,s,n),t.child;case 6:return e===null&&nl(t),null;case 13:return Hp(e,t,n);case 4:return du(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Qc(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,le(Do,r._currentValue),r._currentValue=s,o!==null)if(Et(o.value,s)){if(o.children===i.children&&!Xe.current){t=qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ut(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),rl(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(P(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),rl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ar(t,n),i=ft(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=vt(r,t.pendingProps),i=vt(r.type,i),Gc(e,t,r,i,n);case 15:return Lp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),mo(e,t),t.tag=1,Ke(r)?(e=!0,Io(t)):e=!1,ar(t,n),mp(t,r,i),ol(t,r,i,n),ll(null,t,r,!0,e,n);case 19:return Wp(e,t,n);case 22:return Bp(e,t,n)}throw Error(P(156,t.tag))};function ah(e,t){return Nf(e,t)}function K1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new K1(e,t,n,r)}function bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J1(e){if(typeof e=="function")return bu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wl)return 11;if(e===Yl)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")bu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Wn:return Nn(n.children,i,o,t);case Hl:s=8,i|=8;break;case Ra:return e=ut(12,n,t,i|2),e.elementType=Ra,e.lanes=o,e;case _a:return e=ut(13,n,t,i),e.elementType=_a,e.lanes=o,e;case Oa:return e=ut(19,n,t,i),e.elementType=Oa,e.lanes=o,e;case gf:return vs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hf:s=10;break e;case mf:s=9;break e;case Wl:s=11;break e;case Yl:s=14;break e;case nn:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=ut(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function vs(e,t,n,r){return e=ut(22,e,r,t),e.elementType=gf,e.lanes=n,e.stateNode={isHidden:!1},e}function ha(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function ma(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Z1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gs(0),this.expirationTimes=Gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pu(e,t,n,r,i,o,s,a,u){return e=new Z1(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(o),e}function eg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lh(e){if(!e)return Cn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ke(n))return ap(e,n,t)}return t}function uh(e,t,n,r,i,o,s,a,u){return e=Pu(n,r,!0,e,i,o,s,a,u),e.context=lh(null),n=e.current,r=He(),i=vn(n),o=Ut(r,i),o.callback=t??null,mn(n,o,i),e.current.lanes=i,_i(e,i,r),Je(e,r),e}function xs(e,t,n,r){var i=t.current,o=He(),s=vn(i);return n=lh(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(i,t,s),e!==null&&(kt(e,i,s,o),fo(e,i,s)),s}function Go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tu(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function tg(){return null}var ch=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}ys.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));xs(e,t,null,null)};ys.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){xs(null,e,null,null)}),t[Wt]=null}};function ys(e){this._internalRoot=e}ys.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&Uf(e)}};function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ld(){}function ng(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Go(s);o.call(c)}}var s=uh(t,r,e,0,null,!1,!1,"",ld);return e._reactRootContainer=s,e[Wt]=s.current,gi(e.nodeType===8?e.parentNode:e),Dn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Go(u);a.call(c)}}var u=Pu(e,0,!1,null,null,!1,!1,"",ld);return e._reactRootContainer=u,e[Wt]=u.current,gi(e.nodeType===8?e.parentNode:e),Dn(function(){xs(t,u,n,r)}),u}function Ss(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=Go(s);a.call(u)}}xs(t,s,e,i)}else s=ng(n,t,e,i,r);return Go(s)}Ff=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&(Gl(t,n|1),Je(t,ye()),!(K&6)&&(gr=ye()+500,En()))}break;case 13:Dn(function(){var r=Yt(e,1);if(r!==null){var i=He();kt(r,e,1,i)}}),Tu(e,1)}};Xl=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=He();kt(t,e,134217728,n)}Tu(e,134217728)}};Df=function(e){if(e.tag===13){var t=vn(e),n=Yt(e,t);if(n!==null){var r=He();kt(n,e,t,r)}Tu(e,t)}};Lf=function(){return ie};Bf=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Ba=function(e,t,n){switch(t){case"input":if(Aa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ds(r);if(!i)throw Error(P(90));xf(r),Aa(r,i)}}}break;case"textarea":wf(e,n);break;case"select":t=n.value,t!=null&&rr(e,!!n.multiple,t,!1)}};Pf=ku;Tf=Dn;var rg={usingClientEntryPoint:!1,Events:[zi,Gn,ds,Ef,bf,ku]},$r={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ig={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Of(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{as=eo.inject(ig),zt=eo}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rg;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(t))throw Error(P(200));return eg(e,t,null,n)};it.createRoot=function(e,t){if(!_u(e))throw Error(P(299));var n=!1,r="",i=ch;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pu(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,gi(e.nodeType===8?e.parentNode:e),new Ru(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Of(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return Dn(e)};it.hydrate=function(e,t,n){if(!ws(t))throw Error(P(200));return Ss(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!_u(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ch;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=uh(t,null,e,1,n??null,i,!1,o,s),e[Wt]=t.current,gi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ys(t)};it.render=function(e,t,n){if(!ws(t))throw Error(P(200));return Ss(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!ws(e))throw Error(P(40));return e._reactRootContainer?(Dn(function(){Ss(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};it.unstable_batchedUpdates=ku;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ws(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ss(e,t,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";function dh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dh)}catch(e){console.error(e)}}dh(),uf.exports=it;var og=uf.exports,ud=og;Pa.createRoot=ud.createRoot,Pa.hydrateRoot=ud.hydrateRoot;/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ei.apply(this,arguments)}var cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cn||(cn={}));const cd="popstate";function sg(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return wl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ph(i)}return lg(t,n,null,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ag(){return Math.random().toString(36).substr(2,8)}function dd(e,t){return{usr:e.state,key:e.key,idx:t}}function wl(e,t,n,r){return n===void 0&&(n=null),Ei({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jr(t):t,{state:n,key:t&&t.key||r||ag()})}function ph(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function lg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=cn.Pop,u=null,c=f();c==null&&(c=0,s.replaceState(Ei({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function d(){a=cn.Pop;let S=f(),h=S==null?null:S-c;c=S,u&&u({action:a,location:x.location,delta:h})}function m(S,h){a=cn.Push;let p=wl(x.location,S,h);n&&n(p,S),c=f()+1;let g=dd(p,c),k=x.createHref(p);try{s.pushState(g,"",k)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(k)}o&&u&&u({action:a,location:x.location,delta:1})}function w(S,h){a=cn.Replace;let p=wl(x.location,S,h);n&&n(p,S),c=f();let g=dd(p,c),k=x.createHref(p);s.replaceState(g,"",k),o&&u&&u({action:a,location:x.location,delta:0})}function v(S){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:ph(S);return p=p.replace(/ $/,"%20"),Ee(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let x={get action(){return a},get location(){return e(i,s)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(cd,d),u=S,()=>{i.removeEventListener(cd,d),u=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let h=v(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:w,go(S){return s.go(S)}};return x}var fd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fd||(fd={}));function ug(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?jr(t):t,i=gh(r.pathname||"/",n);if(i==null)return null;let o=hh(e);cg(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let u=Cg(i);s=yg(o[a],u)}return s}function hh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Ee(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=An([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(Ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),hh(o.children,t,f,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:vg(c,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of mh(o.path))i(o,s,u)}),t}function mh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=mh(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function cg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dg=/^:[\w-]+$/,fg=3,pg=2,hg=1,mg=10,gg=-2,pd=e=>e==="*";function vg(e,t){let n=e.split("/"),r=n.length;return n.some(pd)&&(r+=gg),t&&(r+=pg),n.filter(i=>!pd(i)).reduce((i,o)=>i+(dg.test(o)?fg:o===""?hg:mg),r)}function xg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function yg(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],u=s===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",f=wg({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!f)return null;Object.assign(r,f.params);let d=a.route;o.push({params:r,pathname:An([i,f.pathname]),pathnameBase:Tg(An([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=An([i,f.pathnameBase]))}return o}function wg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Sg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:m,isOptional:w}=f;if(m==="*"){let x=a[d]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[d];return w&&!v?c[m]=void 0:c[m]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function Sg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Cg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return fh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function kg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?jr(e):e;return{pathname:n?n.startsWith("/")?n:jg(n,t):t,search:Rg(r),hash:_g(i)}}function jg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ga(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Eg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bg(e,t){let n=Eg(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=jr(e):(i=Ei({},e),Ee(!i.pathname||!i.pathname.includes("?"),ga("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),ga("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),ga("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}a=d>=0?t[d]:"/"}let u=kg(i,a),c=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const An=e=>e.join("/").replace(/\/\/+/g,"/"),Tg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Rg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_g=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Og(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vh=["post","put","patch","delete"];new Set(vh);const zg=["get",...vh];new Set(zg);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bi.apply(this,arguments)}const Ou=j.createContext(null),Ng=j.createContext(null),Cs=j.createContext(null),ks=j.createContext(null),Er=j.createContext({outlet:null,matches:[],isDataRoute:!1}),xh=j.createContext(null);function js(){return j.useContext(ks)!=null}function yh(){return js()||Ee(!1),j.useContext(ks).location}function wh(e){j.useContext(Cs).static||j.useLayoutEffect(e)}function ht(){let{isDataRoute:e}=j.useContext(Er);return e?Yg():Ag()}function Ag(){js()||Ee(!1);let e=j.useContext(Ou),{basename:t,future:n,navigator:r}=j.useContext(Cs),{matches:i}=j.useContext(Er),{pathname:o}=yh(),s=JSON.stringify(bg(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return wh(()=>{a.current=!0}),j.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=Pg(c,JSON.parse(s),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:An([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,s,o,e])}function Mg(e,t){return Ig(e,t)}function Ig(e,t,n,r){js()||Ee(!1);let{navigator:i}=j.useContext(Cs),{matches:o}=j.useContext(Er),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=yh(),f;if(t){var d;let S=typeof t=="string"?jr(t):t;u==="/"||(d=S.pathname)!=null&&d.startsWith(u)||Ee(!1),f=S}else f=c;let m=f.pathname||"/",w=m;if(u!=="/"){let S=u.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=ug(e,{pathname:w}),x=Bg(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:An([u,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:An([u,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&x?j.createElement(ks.Provider,{value:{location:bi({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:cn.Pop}},x):x}function $g(){let e=Wg(),t=Og(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const Fg=j.createElement($g,null);class Dg extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Er.Provider,{value:this.props.routeContext},j.createElement(xh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lg(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Ou);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Er.Provider,{value:t},r)}function Bg(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));f>=0||Ee(!1),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let d=s[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:m,errors:w}=n,v=d.route.loader&&m[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||v){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,d,m)=>{let w,v=!1,x=null,S=null;n&&(w=a&&d.route.id?a[d.route.id]:void 0,x=d.route.errorElement||Fg,u&&(c<0&&m===0?(qg("route-fallback",!1),v=!0,S=null):c===m&&(v=!0,S=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,m+1)),p=()=>{let g;return w?g=x:v?g=S:d.route.Component?g=j.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,j.createElement(Lg,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?j.createElement(Dg,{location:n.location,revalidation:n.revalidation,component:x,error:w,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Sh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Sh||{}),Xo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Xo||{});function Ug(e){let t=j.useContext(Ou);return t||Ee(!1),t}function Vg(e){let t=j.useContext(Ng);return t||Ee(!1),t}function Hg(e){let t=j.useContext(Er);return t||Ee(!1),t}function Ch(e){let t=Hg(),n=t.matches[t.matches.length-1];return n.route.id||Ee(!1),n.route.id}function Wg(){var e;let t=j.useContext(xh),n=Vg(Xo.UseRouteError),r=Ch(Xo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Yg(){let{router:e}=Ug(Sh.UseNavigateStable),t=Ch(Xo.UseNavigateStable),n=j.useRef(!1);return wh(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,bi({fromRouteId:t},o)))},[e,t])}const hd={};function qg(e,t,n){!t&&!hd[e]&&(hd[e]=!0)}function Mt(e){Ee(!1)}function Qg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=cn.Pop,navigator:o,static:s=!1,future:a}=e;js()&&Ee(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:o,static:s,future:bi({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=jr(r));let{pathname:f="/",search:d="",hash:m="",state:w=null,key:v="default"}=r,x=j.useMemo(()=>{let S=gh(f,u);return S==null?null:{location:{pathname:S,search:d,hash:m,state:w,key:v},navigationType:i}},[u,f,d,m,w,v,i]);return x==null?null:j.createElement(Cs.Provider,{value:c},j.createElement(ks.Provider,{children:n,value:x}))}function Gg(e){let{children:t,location:n}=e;return Mg(Sl(t),n)}new Promise(()=>{});function Sl(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,Sl(r.props.children,o));return}r.type!==Mt&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Sl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Xg="6";try{window.__reactRouterVersion=Xg}catch{}const Kg="startTransition",md=G0[Kg];function Jg(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=sg({window:i,v5Compat:!0}));let s=o.current,[a,u]=j.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},f=j.useCallback(d=>{c&&md?md(()=>u(d)):u(d)},[u,c]);return j.useLayoutEffect(()=>s.listen(f),[s,f]),j.createElement(Qg,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var gd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gd||(gd={}));var vd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vd||(vd={}));const br=j.createContext();function Zg({children:e}){const[t,n]=j.useState({name:null,ticketClass:null,date:null,time:null,boat:null,from:null,to:null,paymentMethod:null,value:null}),r=(a,u)=>{n(c=>({...c,[a]:u}))},[i,o]=j.useState({ticketSelected:!1}),s=(a,u)=>{o(c=>({...c,[a]:u}))};return l.jsx(br.Provider,{value:{ticketInfos:t,updateTicketInfos:r,ticketStatus:i,updateTicketStatus:s},children:e})}const Xt=j.createContext();function ev({children:e}){const[t,n]=j.useState([{id:0,stepName:"search",name:"Pesquisar",status:"pending"},{id:1,stepName:"select",name:"Selecionar",status:"pending"},{id:2,stepName:"ticket-reservation",name:"Ticket e Reserva",status:"pending"},{id:3,stepName:"payment",name:"Pagamento",status:"pending"},{id:4,stepName:"ticket-verification",name:"Verificar e Reservar",status:"pending"},{id:5,stepName:"ticket-overview",name:"Confirmação",status:"pending"}]),r=(i,o)=>{n(s=>s.map(a=>a.stepName===i?{...a,status:o}:a))};return l.jsx(Xt.Provider,{value:{steps:t,updateStepStatus:r},children:e})}const kh=j.createContext();function tv({children:e}){const[t,n]=j.useState({email:"",street:"",cep:"",city:"",country:"",state:"",complement:"",phone:""}),r=(i,o)=>{n(s=>({...s,[i]:o}))};return l.jsx(kh.Provider,{value:{address:t,updateAddress:r},children:e})}const jh=j.createContext();function nv({children:e}){const[t,n]=j.useState({cardNumber:null,cardName:null,cardExpiration:null,cardCVV:null}),r=(i,o)=>{n(s=>({...s,[i]:o}))};return l.jsx(jh.Provider,{value:{paymentInfos:t,updatePaymentInfos:r},children:e})}var Eh={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,zu=_e?Symbol.for("react.element"):60103,Nu=_e?Symbol.for("react.portal"):60106,Es=_e?Symbol.for("react.fragment"):60107,bs=_e?Symbol.for("react.strict_mode"):60108,Ps=_e?Symbol.for("react.profiler"):60114,Ts=_e?Symbol.for("react.provider"):60109,Rs=_e?Symbol.for("react.context"):60110,Au=_e?Symbol.for("react.async_mode"):60111,_s=_e?Symbol.for("react.concurrent_mode"):60111,Os=_e?Symbol.for("react.forward_ref"):60112,zs=_e?Symbol.for("react.suspense"):60113,rv=_e?Symbol.for("react.suspense_list"):60120,Ns=_e?Symbol.for("react.memo"):60115,As=_e?Symbol.for("react.lazy"):60116,iv=_e?Symbol.for("react.block"):60121,ov=_e?Symbol.for("react.fundamental"):60117,sv=_e?Symbol.for("react.responder"):60118,av=_e?Symbol.for("react.scope"):60119;function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zu:switch(e=e.type,e){case Au:case _s:case Es:case Ps:case bs:case zs:return e;default:switch(e=e&&e.$$typeof,e){case Rs:case Os:case As:case Ns:case Ts:return e;default:return t}}case Nu:return t}}}function bh(e){return st(e)===_s}oe.AsyncMode=Au;oe.ConcurrentMode=_s;oe.ContextConsumer=Rs;oe.ContextProvider=Ts;oe.Element=zu;oe.ForwardRef=Os;oe.Fragment=Es;oe.Lazy=As;oe.Memo=Ns;oe.Portal=Nu;oe.Profiler=Ps;oe.StrictMode=bs;oe.Suspense=zs;oe.isAsyncMode=function(e){return bh(e)||st(e)===Au};oe.isConcurrentMode=bh;oe.isContextConsumer=function(e){return st(e)===Rs};oe.isContextProvider=function(e){return st(e)===Ts};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zu};oe.isForwardRef=function(e){return st(e)===Os};oe.isFragment=function(e){return st(e)===Es};oe.isLazy=function(e){return st(e)===As};oe.isMemo=function(e){return st(e)===Ns};oe.isPortal=function(e){return st(e)===Nu};oe.isProfiler=function(e){return st(e)===Ps};oe.isStrictMode=function(e){return st(e)===bs};oe.isSuspense=function(e){return st(e)===zs};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Es||e===_s||e===Ps||e===bs||e===zs||e===rv||typeof e=="object"&&e!==null&&(e.$$typeof===As||e.$$typeof===Ns||e.$$typeof===Ts||e.$$typeof===Rs||e.$$typeof===Os||e.$$typeof===ov||e.$$typeof===sv||e.$$typeof===av||e.$$typeof===iv)};oe.typeOf=st;Eh.exports=oe;var Mu=Eh.exports;function lv(e){function t(A,M,I,B,C){for(var G=0,z=0,ge=0,ee=0,ne,W,Oe=0,qe=0,J,Fe=J=ne=0,te=0,ze=0,Tr=0,Ne=0,$i=I.length,Rr=$i-1,mt,U="",xe="",Us="",Vs="",Kt;te<$i;){if(W=I.charCodeAt(te),te===Rr&&z+ee+ge+G!==0&&(z!==0&&(W=z===47?10:47),ee=ge=G=0,$i++,Rr++),z+ee+ge+G===0){if(te===Rr&&(0<ze&&(U=U.replace(m,"")),0<U.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:U+=I.charAt(te)}W=59}switch(W){case 123:for(U=U.trim(),ne=U.charCodeAt(0),J=1,Ne=++te;te<$i;){switch(W=I.charCodeAt(te)){case 123:J++;break;case 125:J--;break;case 47:switch(W=I.charCodeAt(te+1)){case 42:case 47:e:{for(Fe=te+1;Fe<Rr;++Fe)switch(I.charCodeAt(Fe)){case 47:if(W===42&&I.charCodeAt(Fe-1)===42&&te+2!==Fe){te=Fe+1;break e}break;case 10:if(W===47){te=Fe+1;break e}}te=Fe}}break;case 91:W++;case 40:W++;case 34:case 39:for(;te++<Rr&&I.charCodeAt(te)!==W;);}if(J===0)break;te++}switch(J=I.substring(Ne,te),ne===0&&(ne=(U=U.replace(d,"").trim()).charCodeAt(0)),ne){case 64:switch(0<ze&&(U=U.replace(m,"")),W=U.charCodeAt(1),W){case 100:case 109:case 115:case 45:ze=M;break;default:ze=Pe}if(J=t(M,ze,J,W,C+1),Ne=J.length,0<O&&(ze=n(Pe,U,Tr),Kt=a(3,J,ze,M,de,Y,Ne,W,C,B),U=ze.join(""),Kt!==void 0&&(Ne=(J=Kt.trim()).length)===0&&(W=0,J="")),0<Ne)switch(W){case 115:U=U.replace(R,s);case 100:case 109:case 45:J=U+"{"+J+"}";break;case 107:U=U.replace(p,"$1 $2"),J=U+"{"+J+"}",J=Z===1||Z===2&&o("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=U+J,B===112&&(J=(xe+=J,""))}else J="";break;default:J=t(M,n(M,U,Tr),J,B,C+1)}Us+=J,J=Tr=ze=Fe=ne=0,U="",W=I.charCodeAt(++te);break;case 125:case 59:if(U=(0<ze?U.replace(m,""):U).trim(),1<(Ne=U.length))switch(Fe===0&&(ne=U.charCodeAt(0),ne===45||96<ne&&123>ne)&&(Ne=(U=U.replace(" ",":")).length),0<O&&(Kt=a(1,U,M,A,de,Y,xe.length,B,C,B))!==void 0&&(Ne=(U=Kt.trim()).length)===0&&(U="\0\0"),ne=U.charCodeAt(0),W=U.charCodeAt(1),ne){case 0:break;case 64:if(W===105||W===99){Vs+=U+I.charAt(te);break}default:U.charCodeAt(Ne-1)!==58&&(xe+=i(U,ne,W,U.charCodeAt(2)))}Tr=ze=Fe=ne=0,U="",W=I.charCodeAt(++te)}}switch(W){case 13:case 10:z===47?z=0:1+ne===0&&B!==107&&0<U.length&&(ze=1,U+="\0"),0<O*L&&a(0,U,M,A,de,Y,xe.length,B,C,B),Y=1,de++;break;case 59:case 125:if(z+ee+ge+G===0){Y++;break}default:switch(Y++,mt=I.charAt(te),W){case 9:case 32:if(ee+G+z===0)switch(Oe){case 44:case 58:case 9:case 32:mt="";break;default:W!==32&&(mt=" ")}break;case 0:mt="\\0";break;case 12:mt="\\f";break;case 11:mt="\\v";break;case 38:ee+z+G===0&&(ze=Tr=1,mt="\f"+mt);break;case 108:if(ee+z+G+be===0&&0<Fe)switch(te-Fe){case 2:Oe===112&&I.charCodeAt(te-3)===58&&(be=Oe);case 8:qe===111&&(be=qe)}break;case 58:ee+z+G===0&&(Fe=te);break;case 44:z+ge+ee+G===0&&(ze=1,mt+="\r");break;case 34:case 39:z===0&&(ee=ee===W?0:ee===0?W:ee);break;case 91:ee+z+ge===0&&G++;break;case 93:ee+z+ge===0&&G--;break;case 41:ee+z+G===0&&ge--;break;case 40:if(ee+z+G===0){if(ne===0)switch(2*Oe+3*qe){case 533:break;default:ne=1}ge++}break;case 64:z+ge+ee+G+Fe+J===0&&(J=1);break;case 42:case 47:if(!(0<ee+G+ge))switch(z){case 0:switch(2*W+3*I.charCodeAt(te+1)){case 235:z=47;break;case 220:Ne=te,z=42}break;case 42:W===47&&Oe===42&&Ne+2!==te&&(I.charCodeAt(Ne+2)===33&&(xe+=I.substring(Ne,te+1)),mt="",z=0)}}z===0&&(U+=mt)}qe=Oe,Oe=W,te++}if(Ne=xe.length,0<Ne){if(ze=M,0<O&&(Kt=a(2,xe,ze,A,de,Y,Ne,B,C,B),Kt!==void 0&&(xe=Kt).length===0))return Vs+xe+Us;if(xe=ze.join(",")+"{"+xe+"}",Z*be!==0){switch(Z!==2||o(xe,2)||(be=0),be){case 111:xe=xe.replace(k,":-moz-$1")+xe;break;case 112:xe=xe.replace(g,"::-webkit-input-$1")+xe.replace(g,"::-moz-$1")+xe.replace(g,":-ms-input-$1")+xe}be=0}}return Vs+xe+Us}function n(A,M,I){var B=M.trim().split(S);M=B;var C=B.length,G=A.length;switch(G){case 0:case 1:var z=0;for(A=G===0?"":A[0]+" ";z<C;++z)M[z]=r(A,M[z],I).trim();break;default:var ge=z=0;for(M=[];z<C;++z)for(var ee=0;ee<G;++ee)M[ge++]=r(A[ee]+" ",B[z],I).trim()}return M}function r(A,M,I){var B=M.charCodeAt(0);switch(33>B&&(B=(M=M.trim()).charCodeAt(0)),B){case 38:return M.replace(h,"$1"+A.trim());case 58:return A.trim()+M.replace(h,"$1"+A.trim());default:if(0<1*I&&0<M.indexOf("\f"))return M.replace(h,(A.charCodeAt(0)===58?"":"$1")+A.trim())}return A+M}function i(A,M,I,B){var C=A+";",G=2*M+3*I+4*B;if(G===944){A=C.indexOf(":",9)+1;var z=C.substring(A,C.length-1).trim();return z=C.substring(0,A).trim()+z+";",Z===1||Z===2&&o(z,1)?"-webkit-"+z+z:z}if(Z===0||Z===2&&!o(C,1))return C;switch(G){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(H,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return z=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+z+"-webkit-"+C+"-ms-flex-pack"+z+C;case 1005:return v.test(C)?C.replace(w,":-webkit-")+C.replace(w,":-moz-")+C:C;case 1e3:switch(z=C.substring(13).trim(),M=z.indexOf("-")+1,z.charCodeAt(0)+z.charCodeAt(M)){case 226:z=C.replace(b,"tb");break;case 232:z=C.replace(b,"tb-rl");break;case 220:z=C.replace(b,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+z+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(M=(C=A).length-10,z=(C.charCodeAt(M)===33?C.substring(0,M):C).substring(A.indexOf(":",7)+1).trim(),G=z.charCodeAt(0)+(z.charCodeAt(7)|0)){case 203:if(111>z.charCodeAt(8))break;case 115:C=C.replace(z,"-webkit-"+z)+";"+C;break;case 207:case 102:C=C.replace(z,"-webkit-"+(102<G?"inline-":"")+"box")+";"+C.replace(z,"-webkit-"+z)+";"+C.replace(z,"-ms-"+z+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return z=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+z+"-ms-flex-"+z+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(_,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(_,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(T.test(A)===!0)return(z=A.substring(A.indexOf(":")+1)).charCodeAt(0)===115?i(A.replace("stretch","fill-available"),M,I,B).replace(":fill-available",":stretch"):C.replace(z,"-webkit-"+z)+C.replace(z,"-moz-"+z.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,I+B===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+C}return C}function o(A,M){var I=A.indexOf(M===1?":":"{"),B=A.substring(0,M!==3?I:10);return I=A.substring(I+1,A.length-1),D(M!==2?B:B.replace(F,"$1"),I,M)}function s(A,M){var I=i(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return I!==M+";"?I.replace(N," or ($1)").substring(4):"("+M+")"}function a(A,M,I,B,C,G,z,ge,ee,ne){for(var W=0,Oe=M,qe;W<O;++W)switch(qe=we[W].call(f,A,Oe,I,B,C,G,z,ge,ee,ne)){case void 0:case!1:case!0:case null:break;default:Oe=qe}if(Oe!==M)return Oe}function u(A){switch(A){case void 0:case null:O=we.length=0;break;default:if(typeof A=="function")we[O++]=A;else if(typeof A=="object")for(var M=0,I=A.length;M<I;++M)u(A[M]);else L=!!A|0}return u}function c(A){return A=A.prefix,A!==void 0&&(D=null,A?typeof A!="function"?Z=1:(Z=2,D=A):Z=0),c}function f(A,M){var I=A;if(33>I.charCodeAt(0)&&(I=I.trim()),ae=I,I=[ae],0<O){var B=a(-1,M,I,I,de,Y,0,0,0,0);B!==void 0&&typeof B=="string"&&(M=B)}var C=t(Pe,I,M,0,0);return 0<O&&(B=a(-2,C,I,I,de,Y,C.length,0,0,0),B!==void 0&&(C=B)),ae="",be=0,Y=de=1,C}var d=/^\0+/g,m=/[\0\r\f]/g,w=/: */g,v=/zoo|gra/,x=/([,: ])(transform)/g,S=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,k=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,_=/-self|flex-/g,F=/[^]*?(:[rp][el]a[\w-]+)[^]*/,T=/stretch|:\s*\w+\-(?:conte|avail)/,H=/([^-])(image-set\()/,Y=1,de=1,be=0,Z=1,Pe=[],we=[],O=0,D=null,L=0,ae="";return f.use=u,f.set=c,e!==void 0&&c(e),f}var uv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function cv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var dv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,xd=cv(function(e){return dv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Iu=Mu,fv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ph={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$u={};$u[Iu.ForwardRef]=hv;$u[Iu.Memo]=Ph;function yd(e){return Iu.isMemo(e)?Ph:$u[e.$$typeof]||fv}var mv=Object.defineProperty,gv=Object.getOwnPropertyNames,wd=Object.getOwnPropertySymbols,vv=Object.getOwnPropertyDescriptor,xv=Object.getPrototypeOf,Sd=Object.prototype;function Th(e,t,n){if(typeof t!="string"){if(Sd){var r=xv(t);r&&r!==Sd&&Th(e,r,n)}var i=gv(t);wd&&(i=i.concat(wd(t)));for(var o=yd(e),s=yd(t),a=0;a<i.length;++a){var u=i[a];if(!pv[u]&&!(n&&n[u])&&!(s&&s[u])&&!(o&&o[u])){var c=vv(t,u);try{mv(e,u,c)}catch{}}}}return e}var yv=Th;const wv=Il(yv);function Bt(){return(Bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Cd=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Cl=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Mu.typeOf(e)},Ko=Object.freeze([]),yn=Object.freeze({});function Pi(e){return typeof e=="function"}function kd(e){return e.displayName||e.name||"Component"}function Fu(e){return e&&typeof e.styledComponentId=="string"}var vr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Du=typeof window<"u"&&"HTMLElement"in window,Sv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Ai(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Cv=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&Ai(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,f=r.length;c<f;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),yo=new Map,Jo=new Map,ii=1,to=function(e){if(yo.has(e))return yo.get(e);for(;Jo.has(ii);)ii++;var t=ii++;return yo.set(e,t),Jo.set(t,e),t},kv=function(e){return Jo.get(e)},jv=function(e,t){t>=ii&&(ii=t+1),yo.set(e,t),Jo.set(t,e)},Ev="style["+vr+'][data-styled-version="5.3.11"]',bv=new RegExp("^"+vr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Pv=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Tv=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(bv);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(jv(c,u),Pv(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(s)}}},Rv=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Rh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var f=u[c];if(f&&f.nodeType===1&&f.hasAttribute(vr))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(vr,"active"),r.setAttribute("data-styled-version","5.3.11");var s=Rv();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},_v=function(){function e(n){var r=this.element=Rh(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var u=o[s];if(u.ownerNode===i)return u}Ai(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Ov=function(){function e(n){var r=this.element=Rh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),zv=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),jd=Du,Nv={isServer:!Du,useCSSOMInjection:!Sv},_h=function(){function e(n,r,i){n===void 0&&(n=yn),r===void 0&&(r={}),this.options=Bt({},Nv,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Du&&jd&&(jd=!1,function(o){for(var s=document.querySelectorAll(Ev),a=0,u=s.length;a<u;a++){var c=s[a];c&&c.getAttribute(vr)!=="active"&&(Tv(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return to(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Bt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new zv(s):o?new _v(s):new Ov(s),new Cv(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(to(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(to(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(to(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=kv(s);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(s);if(u&&c&&u.size){var f=vr+".g"+s+'[id="'+a+'"]',d="";u!==void 0&&u.forEach(function(m){m.length>0&&(d+=m+",")}),o+=""+c+f+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),Av=/(a)(d)/gi,Ed=function(e){return String.fromCharCode(e+(e>25?39:97))};function kl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ed(t%52)+n;return(Ed(t%52)+n).replace(Av,"$1-$2")}var nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Oh=function(e){return nr(5381,e)};function Mv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Pi(n)&&!Fu(n))return!1}return!0}var Iv=Oh("5.3.11"),$v=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Mv(t),this.componentId=n,this.baseHash=nr(Iv,n),this.baseStyle=r,_h.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=xr(this.rules,t,n,r).join(""),a=kl(nr(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var u=r(s,"."+a,void 0,i);n.insertRules(i,a,u)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,f=nr(this.baseHash,r.hash),d="",m=0;m<c;m++){var w=this.rules[m];if(typeof w=="string")d+=w;else if(w){var v=xr(w,t,n,r),x=Array.isArray(v)?v.join(""):v;f=nr(f,x+m),d+=x}}if(d){var S=kl(f>>>0);if(!n.hasNameForId(i,S)){var h=r(d,"."+S,void 0,i);n.insertRules(i,S,h)}o.push(S)}}return o.join(" ")},e}(),Fv=/^\s*\/\/.*$/gm,Dv=[":","[",".","#"];function Lv(e){var t,n,r,i,o=e===void 0?yn:e,s=o.options,a=s===void 0?yn:s,u=o.plugins,c=u===void 0?Ko:u,f=new lv(a),d=[],m=function(x){function S(h){if(h)try{x(h+"}")}catch{}}return function(h,p,g,k,b,R,N,_,F,T){switch(h){case 1:if(F===0&&p.charCodeAt(0)===64)return x(p+";"),"";break;case 2:if(_===0)return p+"/*|*/";break;case 3:switch(_){case 102:case 112:return x(g[0]+p),"";default:return p+(T===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(S)}}}(function(x){d.push(x)}),w=function(x,S,h){return S===0&&Dv.indexOf(h[n.length])!==-1||h.match(i)?x:"."+t};function v(x,S,h,p){p===void 0&&(p="&");var g=x.replace(Fv,""),k=S&&h?h+" "+S+" { "+g+" }":g;return t=p,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(h||!S?"":S,k)}return f.use([].concat(c,[function(x,S,h){x===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,w))},m,function(x){if(x===-2){var S=d;return d=[],S}}])),v.hash=c.length?c.reduce(function(x,S){return S.name||Ai(15),nr(x,S.name)},5381).toString():"",v}var zh=q.createContext();zh.Consumer;var Nh=q.createContext(),Bv=(Nh.Consumer,new _h),jl=Lv();function Uv(){return j.useContext(zh)||Bv}function Vv(){return j.useContext(Nh)||jl}var Ah=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=jl);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Ai(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=jl),this.name+t.hash},e}(),Hv=/([A-Z])/,Wv=/([A-Z])/g,Yv=/^ms-/,qv=function(e){return"-"+e.toLowerCase()};function bd(e){return Hv.test(e)?e.replace(Wv,qv).replace(Yv,"-ms-"):e}var Pd=function(e){return e==null||e===!1||e===""};function xr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=xr(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Pd(e))return"";if(Fu(e))return"."+e.styledComponentId;if(Pi(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return xr(u,t,n,r)}var c;return e instanceof Ah?n?(e.inject(n,r),e.getName(r)):e:Cl(e)?function f(d,m){var w,v,x=[];for(var S in d)d.hasOwnProperty(S)&&!Pd(d[S])&&(Array.isArray(d[S])&&d[S].isCss||Pi(d[S])?x.push(bd(S)+":",d[S],";"):Cl(d[S])?x.push.apply(x,f(d[S],S)):x.push(bd(S)+": "+(w=S,(v=d[S])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||w in uv||w.startsWith("--")?String(v).trim():v+"px")+";"));return m?[m+" {"].concat(x,["}"]):x}(e):e.toString()}var Td=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Mh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Pi(e)||Cl(e)?Td(xr(Cd(Ko,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Td(xr(Cd(e,n)))}var Qv=function(e,t,n){return n===void 0&&(n=yn),e.theme!==n.theme&&e.theme||t||n.theme},Gv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xv=/(^-|-$)/g;function va(e){return e.replace(Gv,"-").replace(Xv,"")}var Ih=function(e){return kl(Oh(e)>>>0)};function no(e){return typeof e=="string"&&!0}var El=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Kv=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Jv(e,t,n){var r=e[n];El(t)&&El(r)?$h(r,t):e[n]=t}function $h(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(El(s))for(var a in s)Kv(a)&&Jv(e,s[a],a)}return e}var Fh=q.createContext();Fh.Consumer;var xa={};function Dh(e,t,n){var r=Fu(e),i=!no(e),o=t.attrs,s=o===void 0?Ko:o,a=t.componentId,u=a===void 0?function(p,g){var k=typeof p!="string"?"sc":va(p);xa[k]=(xa[k]||0)+1;var b=k+"-"+Ih("5.3.11"+k+xa[k]);return g?g+"-"+b:b}(t.displayName,t.parentComponentId):a,c=t.displayName,f=c===void 0?function(p){return no(p)?"styled."+p:"Styled("+kd(p)+")"}(e):c,d=t.displayName&&t.componentId?va(t.displayName)+"-"+t.componentId:t.componentId||u,m=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(p,g,k){return e.shouldForwardProp(p,g,k)&&t.shouldForwardProp(p,g,k)}:e.shouldForwardProp);var v,x=new $v(n,d,r?e.componentStyle:void 0),S=x.isStatic&&s.length===0,h=function(p,g){return function(k,b,R,N){var _=k.attrs,F=k.componentStyle,T=k.defaultProps,H=k.foldedComponentIds,Y=k.shouldForwardProp,de=k.styledComponentId,be=k.target,Z=function(B,C,G){B===void 0&&(B=yn);var z=Bt({},C,{theme:B}),ge={};return G.forEach(function(ee){var ne,W,Oe,qe=ee;for(ne in Pi(qe)&&(qe=qe(z)),qe)z[ne]=ge[ne]=ne==="className"?(W=ge[ne],Oe=qe[ne],W&&Oe?W+" "+Oe:W||Oe):qe[ne]}),[z,ge]}(Qv(b,j.useContext(Fh),T)||yn,b,_),Pe=Z[0],we=Z[1],O=function(B,C,G,z){var ge=Uv(),ee=Vv(),ne=C?B.generateAndInjectStyles(yn,ge,ee):B.generateAndInjectStyles(G,ge,ee);return ne}(F,N,Pe),D=R,L=we.$as||b.$as||we.as||b.as||be,ae=no(L),A=we!==b?Bt({},b,{},we):b,M={};for(var I in A)I[0]!=="$"&&I!=="as"&&(I==="forwardedAs"?M.as=A[I]:(Y?Y(I,xd,L):!ae||xd(I))&&(M[I]=A[I]));return b.style&&we.style!==b.style&&(M.style=Bt({},b.style,{},we.style)),M.className=Array.prototype.concat(H,de,O!==de?O:null,b.className,we.className).filter(Boolean).join(" "),M.ref=D,j.createElement(L,M)}(v,p,g,S)};return h.displayName=f,(v=q.forwardRef(h)).attrs=m,v.componentStyle=x,v.displayName=f,v.shouldForwardProp=w,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ko,v.styledComponentId=d,v.target=r?e.target:e,v.withComponent=function(p){var g=t.componentId,k=function(R,N){if(R==null)return{};var _,F,T={},H=Object.keys(R);for(F=0;F<H.length;F++)_=H[F],N.indexOf(_)>=0||(T[_]=R[_]);return T}(t,["componentId"]),b=g&&g+"-"+(no(p)?p:va(kd(p)));return Dh(p,Bt({},k,{attrs:m,componentId:b}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?$h({},e.defaultProps,p):p}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&wv(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var bl=function(e){return function t(n,r,i){if(i===void 0&&(i=yn),!Mu.isValidElementType(r))return Ai(1,String(r));var o=function(){return n(r,i,Mh.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,Bt({},i,{},s))},o.attrs=function(s){return t(n,r,Bt({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(Dh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){bl[e]=bl(e)});function Lh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Mh.apply(void 0,[e].concat(n)).join(""),o=Ih(i);return new Ah(o,i)}const y=bl;var Bh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rd=q.createContext&&q.createContext(Bh),wn=globalThis&&globalThis.__assign||function(){return wn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wn.apply(this,arguments)},Zv=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Uh(e){return e&&e.map(function(t,n){return q.createElement(t.tag,wn({key:n},t.attr),Uh(t.child))})}function se(e){return function(t){return q.createElement(ex,wn({attr:wn({},e.attr)},t),Uh(e.child))}}function ex(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=Zv(e,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),q.createElement("svg",wn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:wn(wn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&q.createElement("title",null,o),e.children)};return Rd!==void 0?q.createElement(Rd.Consumer,null,function(n){return t(n)}):t(Bh)}function tx(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"}}]})(e)}function yr(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}}]})(e)}function Lu(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}}]})(e)}function Bu(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"}}]})(e)}function nx(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z"}}]})(e)}function Vh(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 000 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0020 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"}}]})(e)}function Hh(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}}]})(e)}function Uu({options:e}){const[t,n]=j.useState(1),[r,i]=j.useState(1);return j.useEffect(()=>{const o=Math.ceil(e.length/3);n(o);const s=`calc(100% / ${o})`;i(s)},[r]),l.jsx(rx,{linesNumber:t,children:e.map(o=>l.jsxs(ix,{linesHeight:r,children:[l.jsx(yr,{}),l.jsx(ox,{children:o.name})]},o.name))})}const rx=y.ol`
    height: ${e=>e.linesNumber?`${34*e.linesNumber+52}px`:""};
    min-height: 210px;
    width: 100%;
    column-count: 3;
    display: block;

    padding: 2rem 2rem 1rem;
    box-sizing: border-box;
    position: absolute;
    top: 5rem;
    left: 0;

    background-color: #F0F3F5;
`,ix=y.li`
    height: ${e=>e.linesHeight?e.linesHeight:"fit-content"};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    :hover{
        text-decoration: underline;
        cursor: pointer;
    }

    svg{
        color:#c6361b;
    }
`,ox=y.p`
    height: 41px;
    width: fit-content;
    display: flex;
    flex-direction: center;
    align-items: center;
`;function sx({setShowMenuOptions:e}){const t=[{name:"Visão Geral: Ofertas",url:""},{name:"Tarifa Flexível",url:""},{name:"Fan-Ticket",url:""},{name:"Tarifa Super Econômica",url:""},{name:"Tarifa Econômica",url:""},{name:"(Super) Tarifa Econômica Joven",url:""},{name:"Tarifa Econômica Amazonas",url:""},{name:"Grupo de Viagem na Amazônia",url:""},{name:"Grupo de Viagem no Amazonas",url:""},{name:"Barco Noturno",url:""},{name:"Ofertas Regionais",url:""},{name:"Passes de Viagens",url:""},{name:"Cartão Amazon Boat",url:""},{name:"Reserva de Assento",url:""},{name:"Viajando com Crianças",url:""}];return e&&l.jsx(Uu,{options:t})}function ax({setShowMenuOptions:e}){const t=[{name:"Informações de Reserva",url:""},{name:"Opções de Pagamento",url:""},{name:"Ticket Online",url:""},{name:"Aplicativo AB Navegador",url:""},{name:"Check-In Automático",url:""},{name:"Troca ou Cancelamento",url:""},{name:"Direitos do Passageiro",url:""},{name:"Quão cheio está meu barco?",url:""},{name:"Localizador de melhor preço",url:""},{name:"Resgatar Cupons",url:""},{name:"Viagens Seguras",url:""}];return e&&l.jsx(Uu,{options:t})}function lx({setShowMenuOptions:e}){const t=[{name:"Visão Geral: Frota de Barcos",url:""},{name:"Intermunicipal-Express",url:""},{name:"Interestadual-Express",url:""},{name:"Primeira Classe",url:""},{name:"Barcos Regionais",url:""},{name:"Viagem com Bagagem",url:""},{name:"Wi-Fi",url:""},{name:"Portal de Entretenimento",url:""},{name:"Outros",url:""}];return e&&l.jsx(Uu,{options:t})}function oi(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"}}]})(e)}function ux(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"}}]})(e)}function cx(){const e=new ht,[t,n]=j.useState(!1);return l.jsxs(dx,{children:[l.jsxs(fx,{children:[l.jsxs(px,{children:[l.jsxs(ya,{onMouseEnter:()=>n("offers"),onMouseLeave:()=>n(!1),onClick:()=>e("/offers"),children:[l.jsx("span",{children:"Ofertas"}),t=="offers"&&l.jsx(sx,{setShowMenuOptions:n})]}),l.jsxs(ya,{onMouseEnter:()=>n("booking-information"),onMouseLeave:()=>n(!1),onClick:()=>e("/booking-information"),children:[l.jsx("span",{children:"Informações de reservas"}),t=="booking-information"&&l.jsx(ax,{setShowMenuOptions:n})]}),l.jsxs(ya,{onMouseEnter:()=>n("fleet"),onMouseLeave:()=>n(!1),onClick:()=>e("/fleet"),children:[l.jsx("span",{children:"Frota de Barcos"}),t=="fleet"&&l.jsx(lx,{setShowMenuOptions:n})]})]}),l.jsxs(hx,{children:[l.jsx(ux,{}),l.jsx("ul",{onClick:()=>e("/sign-in"),children:l.jsx("li",{children:"Login"})})]})]}),l.jsx(mx,{children:l.jsx("img",{src:"https://wallpapers.com/images/hd/aerial-view-of-amazonas-river-qoa6265cuypo4fd2.jpg",alt:"banner"})})]})}const dx=y.div`
  width: 100%;
  z-index: 10;
  padding: 0 15%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 5%;
  }

  @media (max-width: 1080px) {
    width: 100%;
    padding: 0 0;
  }
`,fx=y.header`
  height: 5rem;
  width: 90%;
  padding: 0 20px;
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);

  color: #252d37;
  font-size: 16px;
  font-weight: 700;

  ul {
    height: 50%;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    :hover {
      cursor: pointer;
    }
  }

  ul:before {
    background: #d7dce1;
    content: "";
    display: block;
    height: 2rem;
    width: 0.0625rem;
  }

  svg {
    font-size: 25px;

    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 770px) {
    height: 70px;
    width: 100%;
  }
`,px=y.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`,ya=y.div`
  height: 100%;
  width: fit-content;
  margin: 0 16px;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    height: 30px;
    width: 100%;

    display: grid;
    place-items: center;
    :hover {
      cursor: pointer;
      margin-top: 3px;
      border-bottom: 3px solid #000000;
    }
  }
`,hx=y.div`
  height: 100%;
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,mx=y.div`
  height: 440px;
  width: 100%;
  margin-top: -5rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 770px) {
    height: 330px;
    margin-top: 0;
  }
`;function gx(e){return se({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7 4.75c0-0.412 0.338-0.75 0.75-0.75h0.5c0.412 0 0.75 0.338 0.75 0.75v0.5c0 0.412-0.338 0.75-0.75 0.75h-0.5c-0.412 0-0.75-0.338-0.75-0.75v-0.5z"}},{tag:"path",attr:{d:"M10 12h-4v-1h1v-3h-1v-1h3v4h1z"}},{tag:"path",attr:{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"}}]})(e)}var Wh={exports:{}},vx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xx=vx,yx=xx;function Yh(){}function qh(){}qh.resetWarningCache=Yh;var wx=function(){function e(r,i,o,s,a,u){if(u!==yx){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:qh,resetWarningCache:Yh};return n.PropTypes=n,n};Wh.exports=wx();var Sx=Wh.exports;const V=Il(Sx),Cx={small:{height:"40px",width:"90px",borderRadius:"3px"},medium:{height:"52px",width:"232px",borderRadius:"3px"},large:{height:"56px",width:"345px",borderRadius:"3px"},fitContent:{height:"100%",width:"fit-content"}},kx=y.button`
  ${({size:e,backgroundColor:t,fontColor:n,fontSize:r,position:i,borderRadius:o})=>{const s=Cx[e]||{},a=t?"none":"1px solid #282D37",u=t||"transparent",c=n||"#282D37",f=r||"16px",d=s.borderRadius||o,m=i?"absolute":"relative",w=i?"0":"auto",v=i==="right"?"0":"auto",x=i==="left"?"0":"auto";return`
      font-weight: 600;
      height: ${s.height||"auto"};
      width: ${s.width||"auto"};
      justify-content: flex-end;
      min-width: 32px;
      border: ${a};
      border-radius: ${d};
      background-color: ${u};
      color: ${c};
      font-size: ${f};
      position: ${m};
      top: ${w};
      right: ${v};
      left: ${x};
      :hover {
        cursor: pointer;
        opacity: 0.8;
      };
    `}};
`;function bt({children:e,onClick:t,className:n,disabled:r,...i}){return l.jsx(kx,{className:n,onClick:t,disabled:r,...i,children:e})}const Qh=({children:e,onClick:t})=>l.jsx(bt,{backgroundColor:"#6495ED",fontColor:"#FFFFFF",size:"small",onClick:t,children:e});Qh.propTypes={children:V.string.isRequired,onClick:V.func.isRequired};const jx=y.div`
  height: 20px;
  width: fit-content;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 12px;
  transition: all 0.5s;

  label {
    height: 12px;
    pointer-events: none;
  }

  svg {
    width: 18px;
    height: 18px;
    color: #636973;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
  }
`,Ex=y.input`
  height: 20px;
  width: 20px;
  margin-left: 14px;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #282d37;
  border-radius: 3px;
  background-color: ${({checked:e})=>e?"#282D37":""};
  cursor: pointer;
`;function Gh({checked:e,label:t,onClick:n,icon:r}){return l.jsxs(jx,{onClick:n,children:[t&&l.jsx("label",{children:t}),l.jsx(Ex,{readOnly:!0,checked:e})]})}Gh.propTypes={checked:V.bool.isRequired,label:V.string.isRequired,onClick:V.func.isRequired,icon:V.element};y.div`
  height: 100%;
  width: 118px;
  display: flex;
  flex-direction: row;
  align-items: center;

  label {
    width: fit-content;
  }
`;y.input`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #282d37;
  margin-left: 8px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  &:checked::after {
    content: "";
    width: 10px;
    height: 10px;
    border: 5px solid #282d37;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;V.bool.isRequired,V.string.isRequired,V.func.isRequired;const Pl={default:{height:"42px",labelTop:"-22px"},custom:{width:"100%",height:"64px",top:"50%",left:"5px",zIndex:"0",fontSize:"12px",labelTop:"50%"}},bx=y.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 4px;
  background-color: #f0f3f5;
  width: ${({width:e})=>e||"100%"};
  height: ${({variant:e})=>{var t;return(t=Pl[e])==null?void 0:t.height}};

  svg {
    cursor: pointer;
  }

  label {
    transform: translateY(-50%);
    position: absolute;
    left: 5px;
    top: ${({variant:e,isFocusedOrFilled:t})=>{var n;return e=="custom"&&t?"8px":(n=Pl[e])==null?void 0:n.labelTop}};
    font-size: ${({variant:e,isFocusedOrFilled:t})=>e!=="custom"||t?"12px":"16px"};
    pointer-events: none;
    transition: all 0.5s;
  }
`,Px=y.input`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  height: ${({variant:e})=>{var t;return(t=Pl[e])==null?void 0:t.height}};
`,Tx=({label:e})=>l.jsxs("label",{children:[e,l.jsx("span",{children:"*"})]});function yt({id:e,variant:t,width:n,label:r,value:i,required:o,placeholder:s,onBlur:a,onClick:u,onFocus:c,onChange:f,isInputValid:d,isFocusedOrFilled:m,icon:w}){return l.jsxs(bx,{variant:t,width:n,isFocusedOrFilled:m,isInputValid:d,onClick:u,children:[o?l.jsx(Tx,{label:r}):r&&l.jsx("label",{children:r}),l.jsx(Px,{id:e,value:i,variant:t,placeholder:s,required:o,onBlur:a,onFocus:c,onChange:f}),w]})}const qr={default:{height:"48px",backgroundColor:"transparent",border:"1px solid #878c96",padding:"0"},defaultWithoutBorder:{height:"48px",backgroundColor:"transparent",border:"0",padding:"0"},custom:{height:"62px",backgroundColor:"#F0F3F5",border:"0",padding:"0 8px"}},Rx=y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-bottom: 18px;
  height: ${({selectVariant:e})=>{var t;return`calc(${(t=qr[e])==null?void 0:t.height}px + 14px)`}};
  width: ${({width:e})=>e};

  label {
    font-size: 12px;
  }

  span {
    font-size: 22px;
    font-weight: 700;
    color: #c50014;
  }
`,_x=y.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 3px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  height: ${({selectVariant:e})=>{var t;return(t=qr[e])==null?void 0:t.height}};
  padding: ${({selectVariant:e})=>{var t;return(t=qr[e])==null?void 0:t.padding}};
  border: ${({selectVariant:e})=>{var t;return(t=qr[e])==null?void 0:t.border}};
  background-color: ${({selectVariant:e})=>{var t;return(t=qr[e])==null?void 0:t.backgroundColor}};

  select {
    height: calc(100% - 22px);
    width: calc(100% + 8px);
    padding: 0 8px;
    cursor: pointer;
    ${({selectVariant:e})=>e==="custom"&&`
        padding-left: 32px;
        padding-right: 0;
        border-bottom: 1px solid #878c96;
    `}
  }
`,Ox=y.div`
  height: 100%;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
`,zx=({labelName:e})=>l.jsxs("label",{children:[e,l.jsx("span",{children:"*"})]});function Zo({selectVariant:e,icon:t,label:n,optionsArray:r,width:i,required:o,onChange:s}){return l.jsxs(Rx,{selectVariant:e,width:i,children:[n&&o&&l.jsx(zx,{labelName:n}),l.jsxs(_x,{selectVariant:e,children:[t&&t,l.jsx("select",{onChange:s,children:r.map(a=>l.jsx("option",{value:a,children:a},a))}),l.jsx(Ox,{children:l.jsx(Hh,{})})]})]})}const Nx=y.div`
  ${({size:e,color:t,position:n})=>`
      height: 100%;
      width: calc(${e} + 14px);
      color: ${t};
      position: ${n||"absolute"};
      position: relative;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    
      svg {
        font-size: ${e};
      }
    `}
  
`;function jt({icon:e,size:t,color:n,onClick:r}){return l.jsx(Nx,{size:t,color:n,onClick:r,children:e})}jt.propTypes={icon:V.element.isRequired,size:V.string,color:V.string,onClick:V.func};function Tl({cities:e,showOptions:t,...n}){return l.jsx(Ax,{visibility:t,...n,children:e==null?void 0:e.map(r=>l.jsxs(Mx,{value:r.name,children:[r.name," - ",r.state]},r.name))})}Tl.propTypes={cities:V.array.isRequired,showOptions:V.bool.isRequired};const Ax=y.ol`
  position: absolute;
  top: 42px;
  left: ${e=>e.left?e.left:"none"};
  right: ${e=>e.right?e.right:"none"};
  z-index: 10;
  width: calc(50% - 30px);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  border: 1px solid #c1c1c1;
  border-radius: 0 0 5px 5px;
  background-color: #ffffff;
  opacity: ${e=>e.visibility?1:0};
  transform: translateY(
    ${e=>e.visibility?0:"calc(-100px + 100px)"}
  );
  transition: all 0.5s linear;
  pointer-events: ${e=>e.visibility?"auto":"none"};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
`,Mx=y.li`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  border-bottom: 1px solid #c1c1c1;
`;function _d(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64z"}}]})(e)}function Ix(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 256a112 112 0 10-112-112 112 112 0 00112 112zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z"}}]})(e)}function $x(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M21 17l-18 0"}},{tag:"path",attr:{d:"M6 10l-3 -3l3 -3"}},{tag:"path",attr:{d:"M3 7l18 0"}},{tag:"path",attr:{d:"M18 20l3 -3l-3 -3"}}]})(e)}const Fx={amazon_cities:[{name:"Alenquer",state:"Pará"},{name:"Almeirim",state:"Pará"},{name:"Amaturá",state:"Amazonas"},{name:"Atalaia do Norte",state:"Amazonas"},{name:"Bagre",state:"Pará"},{name:"Barreirinha",state:"Amazonas"},{name:"Belterra",state:"Pará"},{name:"Benjamin Constant",state:"Amazonas"},{name:"Breves",state:"Pará"},{name:"Chaves",state:"Pará"},{name:"Codajás",state:"Amazonas"},{name:"Coari",state:"Amazonas"},{name:"Curralinho",state:"Pará"},{name:"Faro",state:"Pará"},{name:"Fonte Boa",state:"Amazonas"},{name:"Gurupá",state:"Pará"},{name:"Itacoatiara",state:"Amazonas"},{name:"Japurá",state:"Amazonas"},{name:"Juruti",state:"Pará"},{name:"Manacapuru",state:"Amazonas"},{name:"Manaus",state:"Amazonas"},{name:"Melgaço",state:"Pará"},{name:"Monte Alegre",state:"Pará"},{name:"Mojuí dos Campos",state:"Pará"},{name:"Nhamundá",state:"Amazonas"},{name:"Óbidos",state:"Pará"},{name:"Oriximiná",state:"Pará"},{name:"Parintins",state:"Amazonas"},{name:"Ponta de Pedras",state:"Pará"},{name:"Portel",state:"Pará"},{name:"Porto de Moz",state:"Pará"},{name:"Prainha",state:"Pará"},{name:"Salvaterra",state:"Pará"},{name:"Santarém",state:"Pará"},{name:"São Gabriel da Cachoeira",state:"Amazonas"},{name:"São Paulo de Olivença",state:"Amazonas"},{name:"São Sebastião do Uatumã",state:"Amazonas"},{name:"Soure",state:"Pará"},{name:"Tabatinga",state:"Amazonas"},{name:"Tefé",state:"Amazonas"},{name:"Terra Roxa do Norte",state:"Pará"},{name:"Terra Santa",state:"Pará"},{name:"Urucurituba",state:"Amazonas"}]},Od={locales:Fx};function zd({inputCity:e,amazonCities:t}){return t.locales.amazon_cities.filter(r=>{var i,o;return(o=(i=r==null?void 0:r.name)==null?void 0:i.toLowerCase())==null?void 0:o.includes(e==null?void 0:e.toLowerCase())})}const Dx=y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 30px;
`;function Xh({fromCity:e,setFromCity:t,toCity:n,setToCity:r,fromFilteredCities:i,setFromFilteredCities:o,toFilteredCities:s,setToFilteredCities:a,cleanInputCities:u}){return l.jsxs(Dx,{children:[l.jsx(yt,{label:"Origem",width:"calc(50% - 30px)",variant:"default",value:e,placeholder:"estação / parada / endereço ",onChange:c=>{t(c.target.value),o(zd({inputCity:c.target.value,amazonCities:Od}))},icon:l.jsx(jt,{size:"20px",color:"#646973",icon:l.jsx(_d,{}),onClick:()=>u("from")})}),l.jsx(Tl,{left:"0",cities:i,showOptions:i.length>0}),l.jsx(jt,{size:"20px",color:"#646973",icon:l.jsx($x,{}),onClick:()=>u("from")}),l.jsx(yt,{label:"Destino",width:"calc(50% - 30px)",variant:"default",placeholder:"estação / parada / endereço ",value:n,onChange:c=>{r(c.target.value),a(zd({inputCity:c.target.value,amazonCities:Od}))},icon:l.jsx(jt,{size:"20px",color:"#646973",icon:l.jsx(_d,{}),onClick:()=>u("to")})}),l.jsx(Tl,{right:"0",cities:s,showOptions:s.length>0})]})}Xh.propTypes={fromCity:V.string.isRequired,setFromCity:V.func.isRequired,toCity:V.string.isRequired,setToCity:V.func.isRequired,fromFilteredCities:V.array.isRequired,setFromFilteredCities:V.func.isRequired,toFilteredCities:V.array.isRequired,setToFilteredCities:V.func.isRequired,cleanInputCities:V.func.isRequired};function es(e){"@babel/helpers - typeof";return es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},es(e)}function Qt(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function $e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Pt(e){$e(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||es(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Kh(e,t){$e(2,arguments);var n=Pt(e),r=Qt(t);return isNaN(r)?new Date(NaN):(r&&n.setDate(n.getDate()+r),n)}function Lx(e,t){$e(2,arguments);var n=Pt(e).getTime(),r=Qt(t);return new Date(n+r)}var Bx={};function Ms(){return Bx}function Ux(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function Vx(e){return $e(1,arguments),e instanceof Date||es(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Hx(e){if($e(1,arguments),!Vx(e)&&typeof e!="number")return!1;var t=Pt(e);return!isNaN(Number(t))}function Wx(e,t){$e(2,arguments);var n=Qt(t);return Lx(e,-n)}var Yx=864e5;function qx(e){$e(1,arguments);var t=Pt(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),i=n-r;return Math.floor(i/Yx)+1}function ts(e){$e(1,arguments);var t=1,n=Pt(e),r=n.getUTCDay(),i=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function Jh(e){$e(1,arguments);var t=Pt(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=ts(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=ts(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function Qx(e){$e(1,arguments);var t=Jh(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=ts(n);return r}var Gx=6048e5;function Xx(e){$e(1,arguments);var t=Pt(e),n=ts(t).getTime()-Qx(t).getTime();return Math.round(n/Gx)+1}function ns(e,t){var n,r,i,o,s,a,u,c;$e(1,arguments);var f=Ms(),d=Qt((n=(r=(i=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&n!==void 0?n:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=Pt(e),w=m.getUTCDay(),v=(w<d?7:0)+w-d;return m.setUTCDate(m.getUTCDate()-v),m.setUTCHours(0,0,0,0),m}function Zh(e,t){var n,r,i,o,s,a,u,c;$e(1,arguments);var f=Pt(e),d=f.getUTCFullYear(),m=Ms(),w=Qt((n=(r=(i=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:m.firstWeekContainsDate)!==null&&r!==void 0?r:(u=m.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(d+1,0,w),v.setUTCHours(0,0,0,0);var x=ns(v,t),S=new Date(0);S.setUTCFullYear(d,0,w),S.setUTCHours(0,0,0,0);var h=ns(S,t);return f.getTime()>=x.getTime()?d+1:f.getTime()>=h.getTime()?d:d-1}function Kx(e,t){var n,r,i,o,s,a,u,c;$e(1,arguments);var f=Ms(),d=Qt((n=(r=(i=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&n!==void 0?n:1),m=Zh(e,t),w=new Date(0);w.setUTCFullYear(m,0,d),w.setUTCHours(0,0,0,0);var v=ns(w,t);return v}var Jx=6048e5;function Zx(e,t){$e(1,arguments);var n=Pt(e),r=ns(n,t).getTime()-Kx(n,t).getTime();return Math.round(r/Jx)+1}function re(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var ey={y:function(t,n){var r=t.getUTCFullYear(),i=r>0?r:1-r;return re(n==="yy"?i%100:i,n.length)},M:function(t,n){var r=t.getUTCMonth();return n==="M"?String(r+1):re(r+1,2)},d:function(t,n){return re(t.getUTCDate(),n.length)},a:function(t,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,n){return re(t.getUTCHours()%12||12,n.length)},H:function(t,n){return re(t.getUTCHours(),n.length)},m:function(t,n){return re(t.getUTCMinutes(),n.length)},s:function(t,n){return re(t.getUTCSeconds(),n.length)},S:function(t,n){var r=n.length,i=t.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return re(o,n.length)}};const Zt=ey;var Vn={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ty={G:function(t,n,r){var i=t.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,n,r){if(n==="yo"){var i=t.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return Zt.y(t,n)},Y:function(t,n,r,i){var o=Zh(t,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return re(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):re(s,n.length)},R:function(t,n){var r=Jh(t);return re(r,n.length)},u:function(t,n){var r=t.getUTCFullYear();return re(r,n.length)},Q:function(t,n,r){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return re(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,n,r){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return re(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,n,r){var i=t.getUTCMonth();switch(n){case"M":case"MM":return Zt.M(t,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,n,r){var i=t.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return re(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,n,r,i){var o=Zx(t,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):re(o,n.length)},I:function(t,n,r){var i=Xx(t);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):re(i,n.length)},d:function(t,n,r){return n==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):Zt.d(t,n)},D:function(t,n,r){var i=qx(t);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):re(i,n.length)},E:function(t,n,r){var i=t.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,n,r,i){var o=t.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return re(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(t,n,r,i){var o=t.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return re(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(t,n,r){var i=t.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return re(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,n,r){var i=t.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,n,r){var i=t.getUTCHours(),o;switch(i===12?o=Vn.noon:i===0?o=Vn.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,n,r){var i=t.getUTCHours(),o;switch(i>=17?o=Vn.evening:i>=12?o=Vn.afternoon:i>=4?o=Vn.morning:o=Vn.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,n,r){if(n==="ho"){var i=t.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Zt.h(t,n)},H:function(t,n,r){return n==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Zt.H(t,n)},K:function(t,n,r){var i=t.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):re(i,n.length)},k:function(t,n,r){var i=t.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):re(i,n.length)},m:function(t,n,r){return n==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Zt.m(t,n)},s:function(t,n,r){return n==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Zt.s(t,n)},S:function(t,n){return Zt.S(t,n)},X:function(t,n,r,i){var o=i._originalDate||t,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return Ad(s);case"XXXX":case"XX":return Tn(s);case"XXXXX":case"XXX":default:return Tn(s,":")}},x:function(t,n,r,i){var o=i._originalDate||t,s=o.getTimezoneOffset();switch(n){case"x":return Ad(s);case"xxxx":case"xx":return Tn(s);case"xxxxx":case"xxx":default:return Tn(s,":")}},O:function(t,n,r,i){var o=i._originalDate||t,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Nd(s,":");case"OOOO":default:return"GMT"+Tn(s,":")}},z:function(t,n,r,i){var o=i._originalDate||t,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Nd(s,":");case"zzzz":default:return"GMT"+Tn(s,":")}},t:function(t,n,r,i){var o=i._originalDate||t,s=Math.floor(o.getTime()/1e3);return re(s,n.length)},T:function(t,n,r,i){var o=i._originalDate||t,s=o.getTime();return re(s,n.length)}};function Nd(e,t){var n=e>0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=t||"";return n+String(i)+s+re(o,2)}function Ad(e,t){if(e%60===0){var n=e>0?"-":"+";return n+re(Math.abs(e)/60,2)}return Tn(e,t)}function Tn(e,t){var n=t||"",r=e>0?"-":"+",i=Math.abs(e),o=re(Math.floor(i/60),2),s=re(i%60,2);return r+o+n+s}const ny=ty;var Md=function(t,n){switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},e0=function(t,n){switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},ry=function(t,n){var r=t.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return Md(t,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",Md(i,n)).replace("{{time}}",e0(o,n))},iy={p:e0,P:ry};const oy=iy;var sy=["D","DD"],ay=["YY","YYYY"];function ly(e){return sy.indexOf(e)!==-1}function uy(e){return ay.indexOf(e)!==-1}function Id(e,t,n){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var cy={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},dy=function(t,n,r){var i,o=cy[t];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const fy=dy;function wa(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var py={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},hy={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},my={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},gy={date:wa({formats:py,defaultWidth:"full"}),time:wa({formats:hy,defaultWidth:"full"}),dateTime:wa({formats:my,defaultWidth:"full"})};const vy=gy;var xy={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},yy=function(t,n,r,i){return xy[t]};const wy=yy;function Fr(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=e.formattingValues[s]||e.formattingValues[o]}else{var a=e.defaultWidth,u=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[u]||e.values[a]}var c=e.argumentCallback?e.argumentCallback(t):t;return i[c]}}var Sy={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Cy={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ky={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},jy={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ey={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},by={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Py=function(t,n){var r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Ty={ordinalNumber:Py,era:Fr({values:Sy,defaultWidth:"wide"}),quarter:Fr({values:Cy,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Fr({values:ky,defaultWidth:"wide"}),day:Fr({values:jy,defaultWidth:"wide"}),dayPeriod:Fr({values:Ey,defaultWidth:"wide",formattingValues:by,defaultFormattingWidth:"wide"})};const Ry=Ty;function Dr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;var s=o[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(a)?Oy(a,function(d){return d.test(s)}):_y(a,function(d){return d.test(s)}),c;c=e.valueCallback?e.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;var f=t.slice(s.length);return{value:c,rest:f}}}function _y(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function Oy(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function zy(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var i=r[0],o=t.match(e.parsePattern);if(!o)return null;var s=e.valueCallback?e.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=t.slice(i.length);return{value:s,rest:a}}}var Ny=/^(\d+)(th|st|nd|rd)?/i,Ay=/\d+/i,My={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Iy={any:[/^b/i,/^(a|c)/i]},$y={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Fy={any:[/1/i,/2/i,/3/i,/4/i]},Dy={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ly={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},By={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Uy={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Vy={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Hy={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Wy={ordinalNumber:zy({matchPattern:Ny,parsePattern:Ay,valueCallback:function(t){return parseInt(t,10)}}),era:Dr({matchPatterns:My,defaultMatchWidth:"wide",parsePatterns:Iy,defaultParseWidth:"any"}),quarter:Dr({matchPatterns:$y,defaultMatchWidth:"wide",parsePatterns:Fy,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Dr({matchPatterns:Dy,defaultMatchWidth:"wide",parsePatterns:Ly,defaultParseWidth:"any"}),day:Dr({matchPatterns:By,defaultMatchWidth:"wide",parsePatterns:Uy,defaultParseWidth:"any"}),dayPeriod:Dr({matchPatterns:Vy,defaultMatchWidth:"any",parsePatterns:Hy,defaultParseWidth:"any"})};const Yy=Wy;var qy={code:"en-US",formatDistance:fy,formatLong:vy,formatRelative:wy,localize:Ry,match:Yy,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Qy=qy;var Gy=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Xy=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ky=/^'([^]*?)'?$/,Jy=/''/g,Zy=/[a-zA-Z]/;function e2(e,t,n){var r,i,o,s,a,u,c,f,d,m,w,v,x,S,h,p,g,k;$e(2,arguments);var b=String(t),R=Ms(),N=(r=(i=n==null?void 0:n.locale)!==null&&i!==void 0?i:R.locale)!==null&&r!==void 0?r:Qy,_=Qt((o=(s=(a=(u=n==null?void 0:n.firstWeekContainsDate)!==null&&u!==void 0?u:n==null||(c=n.locale)===null||c===void 0||(f=c.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&a!==void 0?a:R.firstWeekContainsDate)!==null&&s!==void 0?s:(d=R.locale)===null||d===void 0||(m=d.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(_>=1&&_<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var F=Qt((w=(v=(x=(S=n==null?void 0:n.weekStartsOn)!==null&&S!==void 0?S:n==null||(h=n.locale)===null||h===void 0||(p=h.options)===null||p===void 0?void 0:p.weekStartsOn)!==null&&x!==void 0?x:R.weekStartsOn)!==null&&v!==void 0?v:(g=R.locale)===null||g===void 0||(k=g.options)===null||k===void 0?void 0:k.weekStartsOn)!==null&&w!==void 0?w:0);if(!(F>=0&&F<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!N.localize)throw new RangeError("locale must contain localize property");if(!N.formatLong)throw new RangeError("locale must contain formatLong property");var T=Pt(e);if(!Hx(T))throw new RangeError("Invalid time value");var H=Ux(T),Y=Wx(T,H),de={firstWeekContainsDate:_,weekStartsOn:F,locale:N,_originalDate:T},be=b.match(Xy).map(function(Z){var Pe=Z[0];if(Pe==="p"||Pe==="P"){var we=oy[Pe];return we(Z,N.formatLong)}return Z}).join("").match(Gy).map(function(Z){if(Z==="''")return"'";var Pe=Z[0];if(Pe==="'")return t2(Z);var we=ny[Pe];if(we)return!(n!=null&&n.useAdditionalWeekYearTokens)&&uy(Z)&&Id(Z,t,String(e)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&ly(Z)&&Id(Z,t,String(e)),we(Y,Z,N.localize,de);if(Pe.match(Zy))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Pe+"`");return Z}).join("");return be}function t2(e){var t=e.match(Ky);return t?t[1].replace(Jy,"'"):e}function n2(e,t){$e(2,arguments);var n=Qt(t);return Kh(e,-n)}function r2(){const[e,t]=j.useState(new Date),[n,r]=j.useState("Hoje"),i=["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],o=()=>{t(a=>Kh(a,1))},s=()=>{const a=e.getTime(),u=Date.now();if(a<u)return window.alert("Data invalida. Você deve selecionar uma data a partir de hoje.");t(f=>n2(f,1))};return j.useEffect(()=>{const a=e.getDay();r(i[a])},[e]),l.jsxs(i2,{children:[l.jsx(jt,{icon:l.jsx(Lu,{}),size:"16px",color:"#282d37",position:"absolute",onClick:s}),l.jsxs("span",{children:[n,", ",e2(e,"dd, MM, yyyy")]}),l.jsx(jt,{icon:l.jsx(Bu,{}),size:"16px",color:"#282d37",position:"absolute",onClick:o})]})}const i2=y.div`
  height: 48px;
  width: 480px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 0.0625rem solid #878c96;
  border-radius: 3px;
  color: #282d37;
  box-sizing: border-box;

  div {
    cursor: pointer;
  }
`;function o2(){const[e,t]=j.useState({hour:"",minute:"",period:""});function n(a){const[u,c]=a.split(":"),f=u>12?"PM":"AM",d=e.period?e.period:f;let m=parseInt(u,10),w=Math.abs(m)%24;const v=12;let x=w,S=d;return w===0?(S=d==="AM"?"PM":"AM",x=v):w===v?S=d==="AM"?"PM":"AM":w>v&&(x-=v),{hour:x.toString().padStart(2,"0"),minute:c,period:S}}function r(){const a=new Date,u={timeZone:"America/Sao_Paulo"},c=a.toLocaleTimeString("pt-BR",u),f=n(c);t(f)}function i(){const{hour:a,minute:u,period:c}=e;if(a==""&&u==""&&c=="")return r()}function o(){const a=parseInt(e.hour,10)-1,u=n(`${a}:00`);t(u)}function s(){const a=parseInt(e.hour,10)+1,u=n(`${a}:00`);t(u)}return j.useEffect(()=>{i()},[e]),l.jsxs(s2,{children:[l.jsx(jt,{icon:l.jsx(Lu,{}),size:"16px",color:"#282d37",position:"absolute",onClick:o}),l.jsxs(a2,{children:[l.jsx(l2,{type:"text",value:e.hour,onChange:a=>t({...e,hour:a.target.value})}),l.jsx("span",{children:":"}),l.jsx(u2,{type:"text",value:e.minute,onChange:a=>t({...e,minute:a.target.value})}),l.jsx(c2,{type:"text",value:e.period,onChange:a=>t({...e,period:a.target.value})})]}),l.jsx(jt,{icon:l.jsx(Bu,{}),size:"16px",color:"#282d37",position:"absolute",onClick:s})]})}const s2=y.div`
  height: 48px;
  width: 386px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 0.0625rem solid #878c96;
  border-radius: 3px;
  color: #282d37;
  box-sizing: border-box;
`,a2=y.div`
  height: 100%;
  width: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input {
    border-style: none;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
  input:focus {
    background-color: lightblue;
    caret-color: transparent;
  }
  span {
    font-size: 16px;
    font-weight: 400;
  }
`,l2=y.input`
  height: auto;
  width: 18px;
`,u2=y.input`
  height: auto;
  width: 18px;
`,c2=y.input`
  height: auto;
  width: 24px;
`;function d2(e){return se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"}}]})(e)}function f2(e){return se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}}]})(e)}const p2=y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 15px;

  h4 {
    margin-bottom: 10px;
  }
`,h2=y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;function t0({cleanInputCities:e}){return l.jsxs(p2,{children:[l.jsx("h4",{children:"Viagem de ida"}),l.jsxs(h2,{children:[l.jsx(r2,{}),l.jsx(jt,{size:"20px",color:"#646973",icon:l.jsx(f2,{}),onClick:()=>e("to")}),l.jsx(o2,{})]})]})}t0.propTypes={cleanInputCities:V.func.isRequired};y.div`
  height: 30px;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;V.func.isRequired;y.div`
  height: 30px;
  width: 230px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  svg {
    height: 100%;
    width: 15px;
  }
`;V.func.isRequired;y.div`
  height: 62px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;y.div`
  height: 100%;
  width: 100%;
  padding-left: 25px;

  p {
    font-size: 0.875rem;
  }
`;function m2(){const e=ht(),{updateTicketInfos:t}=j.useContext(br),{updateStepStatus:n}=j.useContext(Xt),r=j.useRef(),[i,o]=j.useState(!1),[s,a]=j.useState(""),[u,c]=j.useState(""),[f,d]=j.useState([]),[m,w]=j.useState([]),[v,x]=j.useState(!1),[S,h]=j.useState(!1),[p,g]=j.useState(!1);j.useState({localTransports:!1,fastestConnections:!1});const[k,b]=j.useState({from:"",to:"",outboundDate:"",outboundTime:"",returnDate:"",returnTime:"",passengers:1,age:"",class:"",paymentMethod:""});function R(_){_==="from"?(a(""),d([])):(c(""),w([]))}j.useEffect(()=>{o(v&&S?"835px":v&&!S?"765px":!1)},[v,S]),j.useEffect(()=>{function _(F){r.current&&!r.current.contains(F.target)&&g(!1)}return document.addEventListener("click",_),()=>{document.removeEventListener("click",_)}},[]);function N(){t("from",s),t("to",u),t("date",k.outboundDate),t("time",k.outboundTime),n("search","done"),e("/purchase/select")}return l.jsxs(l.Fragment,{children:[v&&l.jsx(g2,{position:"fixed",onClick:()=>x(!1)}),l.jsxs(v2,{onClick:()=>x(!0),children:[l.jsx("h2",{children:"Para onde você quer ir?"}),l.jsxs(y2,{children:[l.jsxs(x2,{children:[l.jsx(Xh,{fromCity:s,setFromCity:a,toCity:u,setToCity:c,fromFilteredCities:f,setFromFilteredCities:d,toFilteredCities:m,setToFilteredCities:w,cleanInputCities:R}),l.jsx(t0,{cleanInputCities:R})]}),!1,l.jsxs(w2,{children:[l.jsxs("div",{children:[l.jsx(jt,{size:"20px",color:"#646973",icon:l.jsx(jt,{size:"22px",color:"#646973",position:"absolute",icon:l.jsx(yr,{})}),onClick:()=>R("from")}),l.jsx("h3",{children:"Apenas assento (sem ticket)"})]}),l.jsx(Qh,{onClick:()=>N(),children:"Pesquisar"})]})]})]})]})}y.div`
  height: ${e=>e.addReturnFieldHeight?"470px":"385px"};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;y.div`
  height: 62px;
  width: 100%;
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;y.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  hr {
    background-color: #afb4bb;
    border: 0;
    height: 1.5rem;
    margin: 0 2.5rem;
    visibility: hidden;
    width: 1px;

    @media (min-width: 768px) {
      visibility: visible;
    }
  }
`;y.div`
  height: 30px;
`;y.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;y.div`
  display: grid;
  place-items: center;
`;y.div`
  height: 70px;
  width: 520px;
`;const g2=y.div`
  height: 100%;
  width: 100%;
  z-index: 2;
  position: ${e=>e.position?e.position:"absolute"};
  top: 0;
  left: 0;
  background-color: #282d37;
  opacity: 0.8;
`,v2=y.div`
  height: ${e=>e.isClicked?e.isClicked:"380px"};
  width: 85%;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 24px 40px;
  margin-top: -5rem;

  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    height: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  @media (max-width: 770px) {
    width: 100%;
    border-radius: 0;
  }
`,x2=y.div`
  height: 175px;
  width: 100%;
  margin-bottom: 20px;
`,y2=y.div`
  height: 705px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  position: relative;
`,w2=y.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: end;
  }
`;function S2(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}}]})(e)}function C2(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}const ro=[{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Amazon_Theatre_in_Manaus.jpg/800px-Amazon_Theatre_in_Manaus.jpg",title:"Conexões diretas para as principais cidades do Rio Amazonas",description:l.jsxs("p",{children:["Descubra as cidades mais bonitas em"," ",l.jsx("strong",{children:"6 estados do Rio Amazonas"}),", por apenas"," ",l.jsx("strong",{children:"BRL"})," ",l.jsx("strong",{children:"149,49"}),". Passagem grátis para crianças até 5 anos de idade."]})},{image:"https://www.lopeix.com/br/assets/images/3-days-amazonas.jpg",title:"Uma tarifa fixa para viajar pelo Rio Amazonas",description:l.jsxs("p",{children:[l.jsx("strong",{children:"Inter Amazonas"}),": Descubra a Amazônia pelo rio:"," ",l.jsx("strong",{children:"6 estados"}),", ",l.jsx("strong",{children:"1 ticket"}),", 32 cidades."]})}],$d=({children:e,onClick:t,position:n,...r})=>l.jsx(bt,{size:"fitContent",fontSize:"22px",position:n,backgroundColor:"#FFFFFF80",onClick:t,...r,children:e});function k2(){const[e,t]=j.useState(0);function n(i){i.preventDefault(),t(e===0?ro.length-1:e-1)}function r(i){i.preventDefault(),ro.length-1===e?t(0):t(e+1)}return l.jsxs(j2,{children:[l.jsx(E2,{children:l.jsx(b2,{children:ro.map((i,o)=>l.jsxs(P2,{style:{transform:`translateX(-${e*100}%)`},children:[l.jsx(T2,{children:l.jsx(R2,{src:i.image,alt:"poster-"+i.title})}),l.jsxs(_2,{children:[l.jsx(O2,{children:l.jsx("h1",{children:i.title})}),l.jsx(z2,{children:i.description})]})]},i.title))})}),l.jsxs(N2,{children:[l.jsx($d,{position:"left",onClick:i=>n(i),children:l.jsx(Lu,{})}),l.jsx($d,{position:"right",onClick:i=>r(i),children:l.jsx(Bu,{})})]}),l.jsx(A2,{children:l.jsx("ul",{children:ro.map((i,o)=>l.jsx("li",{children:o==e?l.jsx(d2,{}):l.jsx(S2,{})},i.title))})})]})}const j2=y.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`,E2=y.div`
  width: fit-content;

  display: flex;
  flex-direction: row;
  background-color: #ffffff;

  position: relative;
  overflow: hidden;
`,b2=y.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`,P2=y.div`
  height: 100%;
  min-height: 324px;
  width: 100%;
  transition: transform 0.5s ease-out;

  display: flex;
  flex-direction: row;
  flex-shrink: 0;

  @media (max-width: 975px) {
    flex-direction: column;
  }
`,T2=y.div`
  height: auto;
  width: 50%;

  @media (max-width: 975px) {
    flex-direction: column;
    width: 100%;
  }
`,R2=y.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media (max-width: 975px) {
    height: 565px;
  }
`,_2=y.div`
  height: auto;
  width: 50%;
  padding: 2.5rem 4.5rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 975px) {
    width: 100%;
  }

  @media (max-width: 1300px) {
    padding: 2rem 3.5rem;
  }
`,O2=y.div`
  height: 20%;
  width: 100%;

  flex-wrap: flex-wrap;
`,z2=y.div`
  height: 40%;
  width: 100%;

  strong {
    font-weight: 700;
  }

  @media (max-width: 1300px) {
    margin-top: 15px;
  }
`,N2=y.div`
  div {
    height: 40px;
    width: 40px;

    font-size: 22px;

    display: flex;
    justify-content: center;

    align-items: center;
    background-color: #ffffff80;
  }
`,A2=y.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ul {
    height: 25px;
    width: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  li {
    font-size: 12px;
    color: #878c96;
  }
`,M2=[{name:"Compare nossas ofertas",image:"https://assets.static-bahn.de/.imaging/focalpoint/560x280/dam/jcr:11b737d1-0b17-4b53-b0df-5cd64e7be097/209589-281598.svg",topics:["Tarifas mais seguras e flexíveis para viagens de longa distância"]},{name:"Informações de reserva",image:"https://assets.static-bahn.de/.imaging/focalpoint/560x280/dam/jcr:100215fa-dfb6-4a03-b4d7-29f6812b5fec/227072-304291.svg",topics:["Alterações e reembolso","Informações sobre ticket digital","Aplicativo Amazon Boats"]},{name:"Frota de barcos",image:"https://png.pngtree.com/png-vector/20191001/ourlarge/pngtree-planing-powerboat-icon-simple-style-png-image_1772912.jpg",topics:["Wi-Fi no Barco","Viajar em Camarote"]}];function I2(){return l.jsx($2,{children:M2.map(e=>l.jsxs(F2,{children:[l.jsx("img",{src:e.image,alt:"image"}),l.jsxs(D2,{children:[l.jsx("h2",{children:e.name}),l.jsx(L2,{children:l.jsx("ul",{children:e.topics.map(t=>l.jsx("li",{children:t},t))})})]})]},e.name))})}const $2=y.div`
  height: 400px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 40px;
  box-sizing: content-box;
  background-color: #ffffff;

  img {
    height: 50%;
    width: 100%;
    object-fit: contain;
  }

  ul {
    display: flex;
  }
`,F2=y.div`
  height: 100%;
  width: 100%;
  padding: 0 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: content-box;
`,D2=y.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }
`,L2=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style-type: circle;
  }

  li {
    margin-left: 18px;
    margin-bottom: 0.7rem;
  }
`,B2=[{name:"Ofertas",infos:["Viagem em grupo","Viagem durante a noite","Reserva de assentos"]},{name:"Informações de reserva",infos:["Alterar ou Cancelar","Viajar com bagagem","Direitos dos passageiros"]},{name:"Frota de barcos",infos:["Balsa ou bote","Intermunicipal ou interestadual","Barcos regionais"]},{name:"Destinos populares",infos:["Manaus","Belém","Santarém"]}];function U2(){return l.jsx(V2,{children:B2.map(e=>l.jsxs(H2,{children:[l.jsx("h2",{children:e.name}),e.infos.map(t=>l.jsxs(W2,{children:[l.jsx(yr,{}),l.jsx("h3",{children:t})]},t))]},e.name))})}const V2=y.div`
  height: 230px;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 2.5rem;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f3f5;

  @media (max-width: 770px) {
    padding: 1rem 2rem;
  }
`,H2=y.div`
  height: 100%;
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,W2=y.div`
  display: flex;
  flex-direction: row;

  h3:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;function Y2(){return l.jsx(U2,{})}function q2(){return l.jsxs(l.Fragment,{children:[l.jsx(cx,{}),l.jsxs(Q2,{children:[l.jsx(m2,{}),l.jsx(k2,{}),l.jsx(I2,{}),l.jsx(Y2,{})]})]})}const Q2=y.div`
  padding: 0 15%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 0 10%;
  }
  @media (max-width: 1080px) {
    padding: 0 5%;
  }

  @media (max-width: 770px) {
    padding: 0 0;
  }
`;function n0(e){return se({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(e)}function r0(e,t){return function(){return e.apply(t,arguments)}}const{toString:G2}=Object.prototype,{getPrototypeOf:Vu}=Object,Is=(e=>t=>{const n=G2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),At=e=>(e=e.toLowerCase(),t=>Is(t)===e),$s=e=>t=>typeof t===e,{isArray:Pr}=Array,Ti=$s("undefined");function X2(e){return e!==null&&!Ti(e)&&e.constructor!==null&&!Ti(e.constructor)&&dt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const i0=At("ArrayBuffer");function K2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&i0(e.buffer),t}const J2=$s("string"),dt=$s("function"),o0=$s("number"),Fs=e=>e!==null&&typeof e=="object",Z2=e=>e===!0||e===!1,wo=e=>{if(Is(e)!=="object")return!1;const t=Vu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ew=At("Date"),tw=At("File"),nw=At("Blob"),rw=At("FileList"),iw=e=>Fs(e)&&dt(e.pipe),ow=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||dt(e.append)&&((t=Is(e))==="formdata"||t==="object"&&dt(e.toString)&&e.toString()==="[object FormData]"))},sw=At("URLSearchParams"),aw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Pr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function s0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const a0=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),l0=e=>!Ti(e)&&e!==a0;function Rl(){const{caseless:e}=l0(this)&&this||{},t={},n=(r,i)=>{const o=e&&s0(t,i)||i;wo(t[o])&&wo(r)?t[o]=Rl(t[o],r):wo(r)?t[o]=Rl({},r):Pr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Mi(arguments[r],n);return t}const lw=(e,t,n,{allOwnKeys:r}={})=>(Mi(t,(i,o)=>{n&&dt(i)?e[o]=r0(i,n):e[o]=i},{allOwnKeys:r}),e),uw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),cw=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dw=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Vu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},fw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},pw=e=>{if(!e)return null;if(Pr(e))return e;let t=e.length;if(!o0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},hw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Vu(Uint8Array)),mw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},gw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},vw=At("HTMLFormElement"),xw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Fd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),yw=At("RegExp"),u0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Mi(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},ww=e=>{u0(e,(t,n)=>{if(dt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(dt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Sw=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Pr(e)?r(e):r(String(e).split(t)),n},Cw=()=>{},kw=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Sa="abcdefghijklmnopqrstuvwxyz",Dd="0123456789",c0={DIGIT:Dd,ALPHA:Sa,ALPHA_DIGIT:Sa+Sa.toUpperCase()+Dd},jw=(e=16,t=c0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ew(e){return!!(e&&dt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const bw=e=>{const t=new Array(10),n=(r,i)=>{if(Fs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Pr(r)?[]:{};return Mi(r,(s,a)=>{const u=n(s,i+1);!Ti(u)&&(o[a]=u)}),t[i]=void 0,o}}return r};return n(e,0)},Pw=At("AsyncFunction"),Tw=e=>e&&(Fs(e)||dt(e))&&dt(e.then)&&dt(e.catch),E={isArray:Pr,isArrayBuffer:i0,isBuffer:X2,isFormData:ow,isArrayBufferView:K2,isString:J2,isNumber:o0,isBoolean:Z2,isObject:Fs,isPlainObject:wo,isUndefined:Ti,isDate:ew,isFile:tw,isBlob:nw,isRegExp:yw,isFunction:dt,isStream:iw,isURLSearchParams:sw,isTypedArray:hw,isFileList:rw,forEach:Mi,merge:Rl,extend:lw,trim:aw,stripBOM:uw,inherits:cw,toFlatObject:dw,kindOf:Is,kindOfTest:At,endsWith:fw,toArray:pw,forEachEntry:mw,matchAll:gw,isHTMLForm:vw,hasOwnProperty:Fd,hasOwnProp:Fd,reduceDescriptors:u0,freezeMethods:ww,toObjectSet:Sw,toCamelCase:xw,noop:Cw,toFiniteNumber:kw,findKey:s0,global:a0,isContextDefined:l0,ALPHABET:c0,generateString:jw,isSpecCompliantForm:Ew,toJSONObject:bw,isAsyncFn:Pw,isThenable:Tw};function X(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}E.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const d0=X.prototype,f0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{f0[e]={value:e}});Object.defineProperties(X,f0);Object.defineProperty(d0,"isAxiosError",{value:!0});X.from=(e,t,n,r,i,o)=>{const s=Object.create(d0);return E.toFlatObject(e,s,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),X.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const Rw=null;function _l(e){return E.isPlainObject(e)||E.isArray(e)}function p0(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function Ld(e,t,n){return e?e.concat(t).map(function(i,o){return i=p0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function _w(e){return E.isArray(e)&&!e.some(_l)}const Ow=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function Ds(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,S){return!E.isUndefined(S[x])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(E.isDate(v))return v.toISOString();if(!u&&E.isBlob(v))throw new X("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(v)||E.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,x,S){let h=v;if(v&&!S&&typeof v=="object"){if(E.endsWith(x,"{}"))x=r?x:x.slice(0,-2),v=JSON.stringify(v);else if(E.isArray(v)&&_w(v)||(E.isFileList(v)||E.endsWith(x,"[]"))&&(h=E.toArray(v)))return x=p0(x),h.forEach(function(g,k){!(E.isUndefined(g)||g===null)&&t.append(s===!0?Ld([x],k,o):s===null?x:x+"[]",c(g))}),!1}return _l(v)?!0:(t.append(Ld(S,x,o),c(v)),!1)}const d=[],m=Object.assign(Ow,{defaultVisitor:f,convertValue:c,isVisitable:_l});function w(v,x){if(!E.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(v),E.forEach(v,function(h,p){(!(E.isUndefined(h)||h===null)&&i.call(t,h,E.isString(p)?p.trim():p,x,m))===!0&&w(h,x?x.concat(p):[p])}),d.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Bd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Hu(e,t){this._pairs=[],e&&Ds(e,this,t)}const h0=Hu.prototype;h0.append=function(t,n){this._pairs.push([t,n])};h0.toString=function(t){const n=t?function(r){return t.call(this,r,Bd)}:Bd;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function zw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function m0(e,t,n){if(!t)return e;const r=n&&n.encode||zw,i=n&&n.serialize;let o;if(i?o=i(t,n):o=E.isURLSearchParams(t)?t.toString():new Hu(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Nw{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ud=Nw,g0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Aw=typeof URLSearchParams<"u"?URLSearchParams:Hu,Mw=typeof FormData<"u"?FormData:null,Iw=typeof Blob<"u"?Blob:null,$w={isBrowser:!0,classes:{URLSearchParams:Aw,FormData:Mw,Blob:Iw},protocols:["http","https","file","blob","url","data"]},v0=typeof window<"u"&&typeof document<"u",Fw=(e=>v0&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Dw=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Lw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:v0,hasStandardBrowserEnv:Fw,hasStandardBrowserWebWorkerEnv:Dw},Symbol.toStringTag,{value:"Module"})),Ot={...Lw,...$w};function Bw(e,t){return Ds(e,new Ot.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Ot.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Uw(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Vw(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function x0(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),u=o>=n.length;return s=!s&&E.isArray(i)?i.length:s,u?(E.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!E.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&E.isArray(i[s])&&(i[s]=Vw(i[s])),!a)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,i)=>{t(Uw(r),i,n,0)}),n}return null}function Hw(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Wu={transitional:g0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=E.isObject(t);if(o&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return i?JSON.stringify(x0(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Bw(t,this.formSerializer).toString();if((a=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Ds(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Hw(t)):t}],transformResponse:[function(t){const n=this.transitional||Wu.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&E.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?X.from(a,X.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ot.classes.FormData,Blob:Ot.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{Wu.headers[e]={}});const Yu=Wu,Ww=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yw=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&Ww[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Vd=Symbol("internals");function Lr(e){return e&&String(e).trim().toLowerCase()}function So(e){return e===!1||e==null?e:E.isArray(e)?e.map(So):String(e)}function qw(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Qw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ca(e,t,n,r,i){if(E.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function Gw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Xw(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Ls{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,u,c){const f=Lr(u);if(!f)throw new Error("header name must be a non-empty string");const d=E.findKey(i,f);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||u]=So(a))}const s=(a,u)=>E.forEach(a,(c,f)=>o(c,f,u));return E.isPlainObject(t)||t instanceof this.constructor?s(t,n):E.isString(t)&&(t=t.trim())&&!Qw(t)?s(Yw(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Lr(t),t){const r=E.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return qw(i);if(E.isFunction(n))return n.call(this,i,r);if(E.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Lr(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ca(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Lr(s),s){const a=E.findKey(r,s);a&&(!n||Ca(r,r[a],a,n))&&(delete r[a],i=!0)}}return E.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ca(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return E.forEach(this,(i,o)=>{const s=E.findKey(r,o);if(s){n[s]=So(i),delete n[o];return}const a=t?Gw(o):String(o).trim();a!==o&&delete n[o],n[a]=So(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Vd]=this[Vd]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Lr(s);r[a]||(Xw(i,s),r[a]=!0)}return E.isArray(t)?t.forEach(o):o(t),this}}Ls.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(Ls.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});E.freezeMethods(Ls);const Vt=Ls;function ka(e,t){const n=this||Yu,r=t||n,i=Vt.from(r.headers);let o=r.data;return E.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function y0(e){return!!(e&&e.__CANCEL__)}function Ii(e,t,n){X.call(this,e??"canceled",X.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(Ii,X,{__CANCEL__:!0});function Kw(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new X("Request failed with status code "+n.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Jw=Ot.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];E.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),E.isString(r)&&s.push("path="+r),E.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Zw(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function e4(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function w0(e,t){return e&&!Zw(t)?e4(e,t):t}const t4=Ot.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=E.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function n4(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function r4(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),f=r[o];s||(s=c),n[i]=u,r[i]=c;let d=o,m=0;for(;d!==i;)m+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const w=f&&c-f;return w?Math.round(m*1e3/w):void 0}}function Hd(e,t){let n=0;const r=r4(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,u=r(a),c=o<=s;n=o;const f={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&c?(s-o)/u:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const i4=typeof XMLHttpRequest<"u",o4=i4&&function(e){return new Promise(function(n,r){let i=e.data;const o=Vt.from(e.headers).normalize();let{responseType:s,withXSRFToken:a}=e,u;function c(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let f;if(E.isFormData(i)){if(Ot.hasStandardBrowserEnv||Ot.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[x,...S]=f?f.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([x||"multipart/form-data",...S].join("; "))}}let d=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(x+":"+S))}const m=w0(e.baseURL,e.url);d.open(e.method.toUpperCase(),m0(m,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function w(){if(!d)return;const x=Vt.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),h={data:!s||s==="text"||s==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:x,config:e,request:d};Kw(function(g){n(g),c()},function(g){r(g),c()},h),d=null}if("onloadend"in d?d.onloadend=w:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(w)},d.onabort=function(){d&&(r(new X("Request aborted",X.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new X("Network Error",X.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||g0;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new X(S,h.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,d)),d=null},Ot.hasStandardBrowserEnv&&(a&&E.isFunction(a)&&(a=a(e)),a||a!==!1&&t4(m))){const x=e.xsrfHeaderName&&e.xsrfCookieName&&Jw.read(e.xsrfCookieName);x&&o.set(e.xsrfHeaderName,x)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&E.forEach(o.toJSON(),function(S,h){d.setRequestHeader(h,S)}),E.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),s&&s!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",Hd(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",Hd(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=x=>{d&&(r(!x||x.type?new Ii(null,e,d):x),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const v=n4(m);if(v&&Ot.protocols.indexOf(v)===-1){r(new X("Unsupported protocol "+v+":",X.ERR_BAD_REQUEST,e));return}d.send(i||null)})},Ol={http:Rw,xhr:o4};E.forEach(Ol,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Wd=e=>`- ${e}`,s4=e=>E.isFunction(e)||e===null||e===!1,S0={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!s4(n)&&(r=Ol[(s=String(n)).toLowerCase()],r===void 0))throw new X(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(Wd).join(`
`):" "+Wd(o[0]):"as no adapter specified";throw new X("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Ol};function ja(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ii(null,e)}function Yd(e){return ja(e),e.headers=Vt.from(e.headers),e.data=ka.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),S0.getAdapter(e.adapter||Yu.adapter)(e).then(function(r){return ja(e),r.data=ka.call(e,e.transformResponse,r),r.headers=Vt.from(r.headers),r},function(r){return y0(r)||(ja(e),r&&r.response&&(r.response.data=ka.call(e,e.transformResponse,r.response),r.response.headers=Vt.from(r.response.headers))),Promise.reject(r)})}const qd=e=>e instanceof Vt?e.toJSON():e;function wr(e,t){t=t||{};const n={};function r(c,f,d){return E.isPlainObject(c)&&E.isPlainObject(f)?E.merge.call({caseless:d},c,f):E.isPlainObject(f)?E.merge({},f):E.isArray(f)?f.slice():f}function i(c,f,d){if(E.isUndefined(f)){if(!E.isUndefined(c))return r(void 0,c,d)}else return r(c,f,d)}function o(c,f){if(!E.isUndefined(f))return r(void 0,f)}function s(c,f){if(E.isUndefined(f)){if(!E.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function a(c,f,d){if(d in t)return r(c,f);if(d in e)return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,f)=>i(qd(c),qd(f),!0)};return E.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=u[f]||i,m=d(e[f],t[f],f);E.isUndefined(m)&&d!==a||(n[f]=m)}),n}const C0="1.6.7",qu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{qu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Qd={};qu.transitional=function(t,n,r){function i(o,s){return"[Axios v"+C0+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new X(i(s," has been removed"+(n?" in "+n:"")),X.ERR_DEPRECATED);return n&&!Qd[s]&&(Qd[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function a4(e,t,n){if(typeof e!="object")throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],u=a===void 0||s(a,o,e);if(u!==!0)throw new X("option "+o+" must be "+u,X.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new X("Unknown option "+o,X.ERR_BAD_OPTION)}}const zl={assertOptions:a4,validators:qu},en=zl.validators;class rs{constructor(t){this.defaults=t,this.interceptors={request:new Ud,response:new Ud}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=wr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&zl.assertOptions(r,{silentJSONParsing:en.transitional(en.boolean),forcedJSONParsing:en.transitional(en.boolean),clarifyTimeoutError:en.transitional(en.boolean)},!1),i!=null&&(E.isFunction(i)?n.paramsSerializer={serialize:i}:zl.assertOptions(i,{encode:en.function,serialize:en.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&E.merge(o.common,o[n.method]);o&&E.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Vt.concat(s,o);const a=[];let u=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(u=u&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let f,d=0,m;if(!u){const v=[Yd.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,c),m=v.length,f=Promise.resolve(n);d<m;)f=f.then(v[d++],v[d++]);return f}m=a.length;let w=n;for(d=0;d<m;){const v=a[d++],x=a[d++];try{w=v(w)}catch(S){x.call(this,S);break}}try{f=Yd.call(this,w)}catch(v){return Promise.reject(v)}for(d=0,m=c.length;d<m;)f=f.then(c[d++],c[d++]);return f}getUri(t){t=wr(this.defaults,t);const n=w0(t.baseURL,t.url);return m0(n,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){rs.prototype[t]=function(n,r){return this.request(wr(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(wr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}rs.prototype[t]=n(),rs.prototype[t+"Form"]=n(!0)});const Co=rs;class Qu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Ii(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Qu(function(i){t=i}),cancel:t}}}const l4=Qu;function u4(e){return function(n){return e.apply(null,n)}}function c4(e){return E.isObject(e)&&e.isAxiosError===!0}const Nl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Nl).forEach(([e,t])=>{Nl[t]=e});const d4=Nl;function k0(e){const t=new Co(e),n=r0(Co.prototype.request,t);return E.extend(n,Co.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return k0(wr(e,i))},n}const Ce=k0(Yu);Ce.Axios=Co;Ce.CanceledError=Ii;Ce.CancelToken=l4;Ce.isCancel=y0;Ce.VERSION=C0;Ce.toFormData=Ds;Ce.AxiosError=X;Ce.Cancel=Ce.CanceledError;Ce.all=function(t){return Promise.all(t)};Ce.spread=u4;Ce.isAxiosError=c4;Ce.mergeConfig=wr;Ce.AxiosHeaders=Vt;Ce.formToJSON=e=>x0(E.isHTMLForm(e)?new FormData(e):e);Ce.getAdapter=S0.getAdapter;Ce.HttpStatusCode=d4;Ce.default=Ce;const f4=Ce,j0=f4.create({baseURL:{}.VITE_API_BASE_URL});async function p4(e){return(await j0.post(`${{}.VITE_API_BASE_URL}/api/user/sign-in`,{email:e.email,password:e.password})).data}async function h4({email:e,password:t}){try{return await j0.post(`${{}.VITE_API_BASE_URL}/api/user/sign-up`,{email:e,password:t}),!0}catch(n){return console.error(n),!1}}const Gu=({children:e,onClick:t})=>l.jsx(bt,{backgroundColor:"#D7DCE1",fontColor:"#232D37",size:"large",onClick:t,children:e});Gu.propTypes={children:V.node.isRequired,onClick:V.func.isRequired};const Xu=({children:e,onClick:t,disabled:n})=>l.jsx(bt,{type:"submit",disabled:n,backgroundColor:"#7979FF",fontColor:"#FFFFFF",size:"large",onClick:t,children:e});Xu.propTypes={children:V.node.isRequired,onClick:V.func.isRequired,disabled:V.bool};const wt={default:{height:"42px",backgroundColor:"#F0F3F5",borderRadius:"4px",labelPosition:"absolute",labelTop:"-22px",flexDirection:"row"},custom:{height:"64px",width:"100%",top:"50%",left:"5px",zIndex:"0",fontSize:"12px",borderRadius:"4px",labelPosition:"absolute",labelTop:"50%",flexDirection:"row",backgroundColor:"#F0F3F5"},radio:{height:"16px",borderRadius:"50%",labelTop:"50%",transform:"translateY(-50%)",flexDirection:"row",labelPosition:"relative"},checkbox:{content:"",height:"10px",borderRadius:"3px",labelTop:"50%",transform:"translateY(-50%)",flexDirection:"row",labelPosition:"relative"}},m4=y.div`
  ${({inputVariant:e,width:t,isFocusedOrFilled:n,isInputValid:r})=>{var d,m,w,v,x,S,h;const i=(d=wt[e])==null?void 0:d.height,o=((m=wt[e])==null?void 0:m.width)||t,s=((w=wt[e])==null?void 0:w.borderRadius)||"4px",a=(v=wt[e])==null?void 0:v.flexDirection,u=(x=wt[e])==null?void 0:x.labelPosition,c=(S=wt[e])==null?void 0:S.backgroundColor,f=e=="custom"&&n?"8px":(h=wt[e])==null?void 0:h.labelTop;return`
      height: ${i};
      width: ${o};
      border-radius: ${s};
      position: relative;
      display: flex;
      flex-direction: ${a};
      justify-content: space-between;
      box-sizing: border-box;
      background-color: ${c};
      transition: all 0.5s;

      label {
        position: ${u};
        z-index: 0;
        left: 5px;
        top: ${f};
        transform: translateY(-50%);
        margin-left: 8px;
        font-size: ${e!=="custom"||n?"12px":"16px"};
        pointer-events: none;
        transition: all 0.5s;
      }

      span {
        font-size: 22px;
        font-weight: 700;
        color: #c50014;
      }
    `}}

  svg {
    width: 18px;
    height: 18px;
    color: #636973;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`,g4=y.input`
  ${({inputVariant:e,type:t})=>{var s,a,u;const n=(s=wt[e])==null?void 0:s.height,r=wt[e]?(a=wt[e])==null?void 0:a.width:"100%",i=t=="text"?"8px 16px":"0",o=((u=wt[e])==null?void 0:u.borderRadius)||"4px";return`
      height: ${n};
      width: ${r};
      padding: ${i};
      border-radius: ${o};
    `}};

  position: relative;
  box-sizing: border-box;

  &[type="radio"] {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #282d37;
    margin-right: 8px;
    cursor: pointer;

    &:checked::after {
      content: "";
      width: 10px;
      height: 10px;
      border: 5px solid #282d37;
      border-radius: 50%;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid #282d37;
    background-color: ${({checked:e})=>e?"#282D37":""};
    cursor: pointer;
  }
`,v4=({labelName:e})=>l.jsxs("label",{children:[e,l.jsx("span",{children:"*"})]});function ur({id:e,type:t,inputVariant:n,name:r,icon:i,width:o,checked:s,label:a,value:u,required:c,placeholder:f,onBlur:d,onClick:m,onFocus:w,onChange:v,isInputValid:x,isFocusedOrFilled:S}){return l.jsxs(m4,{inputVariant:n,width:o,isFocusedOrFilled:S,isInputValid:x,onClick:m,children:[c&&t!="radio"&&t!="checkbox"?l.jsx(v4,{labelName:a}):a&&l.jsx("label",{children:a}),l.jsx(g4,{id:e,name:r,type:t,value:u,width:o,inputVariant:n,placeholder:f,required:c,checked:s,readOnly:t==="radio"||t==="checkbox",onBlur:d,onFocus:w,onChange:v}),i&&i]})}const x4=Lh`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,y4=y.div`
  height: 100%;
  width: fit-content;
  display: grid;
  place-items: center;

  img {
    height: 108px;
    width: 108px;
    animation: ${x4} 46s linear infinite;
  }
`;function E0(){return l.jsx(y4,{children:l.jsx("img",{src:"../../../public/timao.svg",alt:"logo"})})}function w4(){const e=new ht,[t,n]=j.useState({email:"",password:""}),[r,i]=j.useState({emailIsFocused:!1,passwordIsFocused:!1,isEmailValid:!0,isPasswordEmpty:!0}),[o,s]=j.useState(!0);function a(c){return/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(c)}j.useEffect(()=>{const{email:c,password:f}=t;s(c===""||f===""),c!==""&&i({...r,isEmailValid:!0})},[t]);async function u(c){c.preventDefault();const{email:f,password:d}=t;if(a(f))i({...r,isEmailValid:!0});else{i({...r,isEmailValid:!1}),window.alert("Insira o e-mail corretamente.");return}i(d===""?{...r,isPasswordValid:!1}:{...r,isPasswordValid:!0}),await p4(t)&&e("/")}return l.jsxs(S4,{children:[l.jsx(C4,{onClick:()=>e("/"),children:l.jsxs("div",{children:[l.jsx(n0,{}),l.jsx("p",{children:"Voltar"})]})}),l.jsxs(k4,{children:[l.jsx("header",{children:l.jsx(E0,{})}),l.jsxs(j4,{children:[l.jsx("div",{children:l.jsx("h2",{children:"Log In"})}),l.jsx(E4,{children:l.jsxs("form",{onSubmit:u,children:[l.jsxs(b4,{children:[l.jsx(ur,{width:"100%",type:"text",inputVariant:"custom",label:"e-mail",value:t.email,isFocusedOrFilled:r.emailIsFocused||t.email!=="",isInputValid:r.isEmailValid||r.emailIsFocused,onFocus:()=>i({...r,emailIsFocused:!0}),onBlur:()=>i({...r,emailIsFocused:!1}),onChange:c=>n({...t,email:c.target.value}),icon:l.jsx(oi,{onClick:()=>n({...t,email:""})})}),l.jsx(ur,{width:"100%;",type:"password",inputVariant:"custom",label:"password",value:t.password,icon:l.jsx(oi,{onClick:()=>n({...t,password:""})}),isFocusedOrFilled:r.passwordIsFocused||t.password!=="",isInputValid:r.isPasswordEmpty||r.passwordIsFocused,onChange:c=>n({...t,password:c.target.value}),onFocus:()=>i({...r,passwordIsFocused:!0}),onBlur:()=>i({...r,passwordIsFocused:!1})})]}),l.jsx(Xu,{type:"submit",disabled:o,onClick:c=>u(c),children:"Log In"})]})})]}),l.jsx(P4,{children:l.jsxs("div",{children:[l.jsx("h2",{children:"Sua primeira vez aqui?"}),l.jsx(Gu,{onClick:()=>e("/sign-up"),children:"Registre-se agora como cliente privado gratuitamente"})]})})]})]})}const S4=y.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`,C4=y.div`
  height: 90px;
  width: 375px;

  div {
    height: 100%;
    width: 80px;

    font-size: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,k4=y.div`
  height: 632px;
  width: 375px;
  padding: 40px 15px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  header {
    height: 100px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-size: 32px;
    font-weight: 900;
  }
`,j4=y.div`
  height: 230px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,E4=y.div`
  height: -webkit-fill-available;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`,b4=y.div`
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,P4=y.div`
  height: 150px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f0f3f5;

  div {
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;function T4({email:e,inputStatus:t,setInputStatus:n}){const r=b0([e])&&R4(e);n({...t,isEmailValid:r}),r===!1&&window.alert("Insira um email válido.")}function R4(e){return/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(e)}function b0(e){return e.some(t=>t!=="")}function _4({password:e,confirmPassword:t,inputStatus:n,setInputStatus:r}){const i=b0([e,t]),o=O4(e,t);return r({...n,isPasswordValid:i&&o}),{isPasswordFilled:i,isPasswordMatch:o}}function O4(e,t){return e===t}function z4({isPasswordFilled:e,isPasswordMatch:t}){e?t||window.alert("As senhas não conferem."):window.alert("Entre com uma senha e confirme-a.")}function N4(){const e=new ht,[t,n]=j.useState({email:"",password:"",confirmPassword:""}),[r,i]=j.useState({emailIsFocused:!1,passwordIsFocused:!1,confirmPasswordIsFocused:!1,isEmailValid:!0,isPasswordEmpty:!0,isConfirmPasswordEmpty:!0}),[o,s]=j.useState(!0);async function a(u){u.preventDefault();const{email:c,password:f,confirmPassword:d}=t;T4({email:c,inputStatus:r,setInputStatus:i});const m=_4({password:f,confirmPassword:d,inputStatus:r,setInputStatus:i});z4(m),await h4({email:c,password:f})&&e("/sign-in")}return j.useEffect(()=>{const{email:u,password:c,confirmPassword:f}=t;u===""||c===""||f==""?s(!0):s(!1),u!==""&&i({...r,isEmailValid:!0})},[t]),l.jsxs(A4,{children:[l.jsx(M4,{onClick:()=>e("/"),children:l.jsxs("div",{children:[l.jsx(n0,{}),l.jsx("p",{children:"Voltar"})]})}),l.jsxs(I4,{children:[l.jsx("header",{children:l.jsx(E0,{})}),l.jsxs($4,{children:[l.jsx("div",{children:l.jsx("h2",{children:"Crie uma conta"})}),l.jsx(F4,{children:l.jsxs("form",{onSubmit:a,children:[l.jsxs(D4,{children:[l.jsx(ur,{width:"100%",type:"text",inputVariant:"custom",label:"e-mail",value:t.email,isFocusedOrFilled:r.emailIsFocused||t.email!=="",isInputValid:r.isEmailValid||r.emailIsFocused,onFocus:()=>i({...r,emailIsFocused:!0}),onBlur:()=>i({...r,emailIsFocused:!1}),onChange:u=>n({...t,email:u.target.value}),icon:l.jsx(oi,{onClick:()=>n({...t,email:""})})}),l.jsx(ur,{width:"100%;",type:"password",inputVariant:"custom",label:"password",value:t.password,icon:l.jsx(oi,{onClick:()=>n({...t,password:""})}),isFocusedOrFilled:r.passwordIsFocused||t.password!=="",isInputValid:r.isPasswordEmpty||r.passwordIsFocused,onChange:u=>n({...t,password:u.target.value}),onFocus:()=>i({...r,passwordIsFocused:!0}),onBlur:()=>i({...r,passwordIsFocused:!1})}),l.jsx(ur,{width:"100%;",type:"password",inputVariant:"custom",label:"Confirm Password",value:t.confirmPassword,icon:l.jsx(oi,{onClick:()=>n({...t,confirmPassword:""})}),isFocusedOrFilled:r.confirmPasswordIsFocused||t.confirmPassword!=="",isInputValid:r.isConfirmPasswordEmpty||r.confirmPasswordIsFocused,onChange:u=>n({...t,confirmPassword:u.target.value}),onFocus:()=>i({...r,confirmPasswordIsFocused:!0}),onBlur:()=>i({...r,confirmPasswordIsFocused:!1})})]}),l.jsx(Xu,{disabled:o,type:"submit",children:"Registrar"})]})})]}),l.jsxs(L4,{children:[l.jsx("h2",{children:"Você tem uma conta?"}),l.jsx(Gu,{onClick:()=>e("/sign-in"),children:"Entre agora"})]})]})]})}const A4=y.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`,M4=y.div`
  height: 90px;
  width: 375px;

  div {
    height: 100%;
    width: 80px;

    font-size: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,I4=y.div`
  height: 700px;
  width: 375px;
  padding: 40px 15px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  header {
    height: 100px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-size: 32px;
    font-weight: 900;
  }
`,$4=y.div`
  height: 297px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,F4=y.div`
  height: -webkit-fill-available;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`,D4=y.div`
  height: 210px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,L4=y.div`
  height: 150px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f0f3f5;
`;function Bs(){const e=ht();function t(r){const i=r=="search"?"/":`/purchase/${r}`;e(i)}const{steps:n}=j.useContext(Xt);return l.jsx(B4,{children:l.jsx(U4,{children:n.map(r=>l.jsx(V4,{isPending:r.status=="pending",isCurrentStep:r.status=="in-progress",onClick:()=>t(r.stepName),children:l.jsx("span",{children:r.name})},r.name))})})}const B4=y.div`
  width: 100%;
  margin: 18px 0px 14px;
  padding: 0 24px;
  box-sizing: border-box;
`,U4=y.ol`
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,V4=y.li`
  height: 100%;
  width: 118px;
  display: grid;
  place-items: center;
  border-bottom: 2px solid
    ${e=>e.isPending?"#AFB4BB":"#63a615"};

  span {
    font-size: 12px;
    color: ${e=>e.isCurrentStep?"#282D37":"878c96"};
    font-weight: ${e=>e.isCurrentStep?"700":"400"};
  }

  :hover {
    cursor: pointer;
  }
`;function H4(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z",fill:"currentColor"}}]})(e)}function W4(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z",fill:"currentColor"}}]})(e)}function Y4(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z",fill:"currentColor"}}]})(e)}function P0(){const e=ht(),t=({onClick:n})=>l.jsx(bt,{size:"small",fontColor:"#282D37",onClick:n,children:"Alterar"});return t.propTypes={onClick:V.func.isRequired},l.jsxs(q4,{children:[l.jsxs(Q4,{children:[l.jsxs("div",{children:[l.jsx(W4,{}),l.jsx("span",{children:"Manaus"})]}),l.jsxs("div",{children:[l.jsx(tx,{}),l.jsx("span",{children:"Santarém"})]}),l.jsxs("div",{children:[l.jsx(C2,{}),l.jsx("span",{children:"16:00"})]})]}),l.jsxs(G4,{children:[l.jsx(Ix,{}),l.jsx("span",{children:"1 Passageiro, 27-64, 2ª Classe"})]}),l.jsxs(X4,{children:[l.jsx(Y4,{}),l.jsx("span",{children:"Show fastest conncetions"})]}),l.jsx(t,{onClick:()=>e("/")})]})}const q4=y.div`
  height: 182px;
  width: 100%;
  background-color: #fff;
  padding: 12px 24px 24px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
`,Q4=y.div`
  width: 254px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 4px;

  div {
    height: 20px;
    width: fit-content;
    padding-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  svg {
    font-size: 16px;
    position: absolute;
    top: 0;
    left: 0;
  }
`,G4=y.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  position: relative;

  svg {
    font-size: 18px;
    position: absolute;
    left: 0;
    top: 0;
  }
`,X4=y.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  position: relative;

  svg {
    font-size: 18px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;function Ku(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.00488 3.00293H21.0049C21.5572 3.00293 22.0049 3.45064 22.0049 4.00293V20.0029C22.0049 20.5552 21.5572 21.0029 21.0049 21.0029H3.00488C2.4526 21.0029 2.00488 20.5552 2.00488 20.0029V4.00293C2.00488 3.45064 2.4526 3.00293 3.00488 3.00293ZM8.50488 14.0029V16.0029H11.0049V18.0029H13.0049V16.0029H14.0049C15.3856 16.0029 16.5049 14.8836 16.5049 13.5029C16.5049 12.1222 15.3856 11.0029 14.0049 11.0029H10.0049C9.72874 11.0029 9.50488 10.7791 9.50488 10.5029C9.50488 10.2268 9.72874 10.0029 10.0049 10.0029H15.5049V8.00293H13.0049V6.00293H11.0049V8.00293H10.0049C8.62417 8.00293 7.50488 9.12222 7.50488 10.5029C7.50488 11.8836 8.62417 13.0029 10.0049 13.0029H14.0049C14.281 13.0029 14.5049 13.2268 14.5049 13.5029C14.5049 13.7791 14.281 14.0029 14.0049 14.0029H8.50488Z"}}]})(e)}function K4(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V10H9.00488V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V12H22.0049V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2Z"}}]})(e)}function J4(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"}}]})(e)}function Z4(){const[e,t]=j.useState(""),[n,r]=j.useState(!1);return l.jsxs(eS,{children:[l.jsxs(tS,{style:{width:"100px"},children:[l.jsx("span",{children:"Mais cedo"}),l.jsx(J4,{style:{color:"#FF0000"}})]}),l.jsx(Zo,{type:"text",label:"Ordenar por:",value:e,width:"112px",selectVariant:"defaultWithoutBorder",optionsArray:["Partida","Duração","Mudanças","Tarifa"],onClick:()=>r(!n),onChange:i=>t(i.target.value)})]})}const eS=y.div`
  height: 54px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 17px 12px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #ffffff;
`,tS=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    color: #f24423;
    text-decoration: underline;
    cursor: pointer;
  }
`,T0=({children:e,onClick:t})=>l.jsx(bt,{size:"fitContent",backgroundColor:"#F24423",fontColor:"#FFFFFF",borderRadius:"0 4px 0 0",onClick:t,children:e});T0.propTypes={children:V.node.isRequired,onClick:V.func.isRequired};function nS(){const{steps:e,updateStepStatus:t}=j.useContext(Xt),{updateTicketStatus:n}=j.useContext(br);ht();const r=[{id:"",from:"Manaus",to:"Santarém",departureTime:"17:34",arrivalTime:"16:09",numberOfChanges:"",boats:["BARCO 190","MADEIRA BOAT"],price:"97,39",demand:11}];function i({departureTime:c,arrivalTime:f}){const d=a(c),m=a(f),w=o(d.hour,m.hour),v=s(d.minute,m.minute);return`${w}h ${v}min`}function o(c,f){let d=0;return c>f?d=24-c+f:c<f&&(d=f-c),d}function s(c,f){let d=0;return c>f?d=c-f:c<f&&(d=24-c+f),d}function a(c){const f=c.split(":"),d=parseInt(f[0]),m=parseInt(f[1]);return{hour:d,minute:m}}function u(){t("select","done"),n("ticketSelected",!0)}return l.jsx(rS,{children:r.map(c=>l.jsxs(iS,{children:[l.jsxs(oS,{children:[l.jsxs(sS,{children:[l.jsx(aS,{children:l.jsxs("span",{children:[c.departureTime," - ",c.arrivalTime]})}),l.jsx("hr",{}),l.jsx(lS,{children:l.jsxs("span",{children:[i({departureTime:c.departureTime,arrivalTime:c.arrivalTime}),","]})}),l.jsx(uS,{children:l.jsxs("span",{children:[c.boats.length," conexões"]})})]}),l.jsxs(cS,{isHighDemand:c.demand>10,children:[l.jsx(Vh,{}),l.jsxs("span",{children:[c.demand," demanda esperada"]})]}),l.jsx(dS,{children:c.boats.map((f,d)=>l.jsx(fS,{isChangeBoat:d!==0,children:f},f))}),l.jsxs(pS,{children:[l.jsx("span",{children:c.from}),l.jsx("span",{children:c.to})]}),l.jsx(hS,{children:l.jsxs("div",{children:[l.jsx("span",{children:"Mostrar detalhes"}),l.jsx(Hh,{})]})})]}),l.jsxs(mS,{children:[l.jsxs(gS,{children:[l.jsxs(vS,{children:["A partir de ",l.jsxs("h1",{children:["R$",c.price]})]}),l.jsx(T0,{onClick:u,children:l.jsx(yr,{})})]}),l.jsxs(xS,{children:[l.jsx("span",{children:"Escolher viagem de volta"}),l.jsx(yr,{})]})]})]},c.id))})}const rS=y.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #333333;
`,iS=y.div`
  height: 200px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
`,oS=y.div`
  height: 100%;
  width: calc(100% - 224px);
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,sS=y.div`
  width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  hr {
    height: 60%;
    margin: 0 8px;
  }
`,aS=y.div`
  font-size: 18px;
  font-weight: 700;
`,lS=y.div`
  font-size: 14px;
  color: #646973;
`,uS=y.div`
  font-size: 14px;
  color: #646973;
`,cS=y.div`
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.isHighDemand?"#D77B00":"#646973"};
`,dS=y.div`
  height: 28px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,fS=y.div`
  height: 100%;
  width: calc(50% - 2px);
  display: grid;
  place-items: center;
  background-color: ${e=>e.isChangeBoat?"#AFB4BB":"#282d37"};
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  color: ${e=>e.isChangeBoat?"#282d37":"#FFFFFF"};
`,pS=y.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,hS=y.div`
  height: 28px;
  width: 100%;
  display: grid;
  place-items: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`,mS=y.div`
  height: 100%;
  width: 224px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid #d7dce1;
`,gS=y.div`
  height: calc(100% - 34px);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d7dce1;
`,vS=y.span`
  width: 100%;
  font-size: 13px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  h1 {
    font-size: 30px;
  }
`,xS=y.div`
  height: 34px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px;
  box-sizing: border-box;

  svg {
    font-size: 24px;
    color: #f24423;
  }

  :hover {
    color: #f24423;
    text-decoration: underline;
    cursor: pointer;
  }
`;function yS(){const[e,t]=j.useState(!1);return l.jsxs(wS,{children:[l.jsxs(SS,{children:[l.jsx("span",{children:"Viagem de ida em 30/03/2024"}),l.jsx(Gh,{type:"checkbox",width:"fit-content",inputVariant:"checkbox",checked:e,icon:l.jsx(Ku,{}),label:"Mostrar nossos melhores preços ¹",onClick:()=>t(!e)})]}),l.jsx(Z4,{}),l.jsx(nS,{})]})}const wS=y.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;
  box-sizing: border-box;

  svg {
    font-size: 20px;
  }
`,SS=y.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;function R0({children:e}){return l.jsx(CS,{children:e})}R0.propTypes={children:V.node.isRequired};const CS=y.div`
  height: 320px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;

  div {
    margin-bottom: 16px;
  }
  h3 {
    font-size: 21px;
  }
  span {
    font-size: 14px;
    flex-wrap: wrap;
  }
`;function kS(e){return se({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(e)}function Ju(){return l.jsxs(ES,{children:[l.jsx("img",{src:"/timao.svg"}),l.jsx(kS,{})]})}const jS=Lh`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ES=y.div`
  height: 56px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 6px 8px -4px rgb(0 0 0 / 30%);

  img {
    height: 32px;
    width: 32px;
    animation: ${jS} 10s linear infinite;
  }
`;function Zu({children:e}){return l.jsxs(bS,{children:[l.jsx(Ju,{}),l.jsx(PS,{children:e})]})}Zu.propTypes={children:V.node.isRequired};const bS=y.div`
  height: auto;
  width: 1024px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.4);

  @media (max-width: 1200px) {
    padding: 0 10%;
  }
  @media (max-width: 1080px) {
    padding: 0 5%;
  }

  @media (max-width: 770px) {
    padding: 0 0;
  }
`,PS=y.div`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function ec({children:e}){return l.jsx(TS,{children:e})}ec.propTypes={children:V.node.isRequired};const TS=y.ul`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  li {
    height: fit-content;
    width: 100%;
    padding: 0 0 10px 60px;
    box-sizing: border-box;
    position: relative;
  }
  svg,
  h6 {
    font-size: 20px;
    margin-left: 16px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;function RS(){return l.jsxs(ec,{children:[l.jsx("div",{style:{width:"100%"},children:l.jsx("h3",{children:"Significado dos Simbolos"})}),l.jsxs("li",{children:[l.jsx(Vh,{style:{color:"#D77B00"}}),l.jsx("span",{children:"Alta demanda esperada"})]}),l.jsxs("li",{children:[l.jsx(H4,{}),l.jsx("span",{children:"Informações importantes sobre esta conexão estão atualmente disponíveis (por exemplo, a conexão está ameaçada, viagem cancelada). Por favor, observe as informações nos detalhes."})]}),l.jsxs("li",{children:[l.jsx(Ku,{}),l.jsx("span",{children:"Mostrar nossos melhores preços ¹"})]}),l.jsxs("li",{children:[l.jsx("h6",{children:"¹"}),l.jsx("span",{children:"Mostra os melhores preços encontrados aqui para a conexão selecionada no dia selecionado. Em alguns casos (tarifas de certas associações de transporte, etc.), nosso sistema pode conter uma conexão que vendemos, mas não é possível exibir o preço aqui. O preço é mostrado na próxima etapa e pode ser menor."})]})]})}function _0(){return l.jsxs(_S,{children:[l.jsx("div",{style:{width:"100%"},children:l.jsx("h3",{children:"Atenção"})}),l.jsx("ul",{children:l.jsx("li",{children:l.jsx("span",{children:"Todas as informações são emitidas sem responsabilidade"})})}),l.jsx("ul",{children:l.jsx("li",{children:l.jsx("span",{children:"Devido à falta de dados em tempo real de algumas transportadoras de terceiros, os detalhes da conexão podem não ser totalmente precisos."})})})]})}const _S=y.div`
  height: 100%;
  width: 35%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  ul {
    margin-bottom: 16px;
  }
`;function OS(){return l.jsxs(l.Fragment,{children:[l.jsx(RS,{}),l.jsx(_0,{})]})}function zS(e){return se({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}}]})(e)}function NS(e){return se({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}}]})(e)}function AS(e){return se({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10 0a2 2 0 1 1-4 0H3.5A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0H10ZM4.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z"}}]})(e)}const MS=[{id:"1",name:"Super Econômica",seatIncluded:!1,price:"112,90",benefits:[{included:!1,description:"Sem cancelamento"},{included:!1,description:"Sem ticket local"},{included:!1,description:"Barco específico"}]},{id:"2",name:"Econômica",seatIncluded:!1,price:"123,90",benefits:[{included:!0,description:"Cancelamento antes do primeiro dia de validade sujeito a taxa em troca de um voucher"},{included:!1,description:"Ticket local incluso"}]},{id:"3",name:"Flexível",seatIncluded:!1,price:"132,70",benefits:[{included:!0,description:"Cancelamento gratuito antes do primeiro dia de validade"},{included:!0,description:"Ticket local incluso"},{included:!0,description:"Escolha livre do trem no dia da viagem"}]},{id:"4",name:"Flexível Plus",seatIncluded:!0,price:"153,50",benefits:[{included:!0,description:"Assento incluso"},{included:!0,description:"Cancelamento gratuito até o fim da validade"},{included:!0,description:"Ticket local incluso"},{included:!0,description:"Válido 1 dias antes e 2 dias depois da viagem"},{included:!0,description:"Escolha livre de trens"}]}];function IS(){const e=ht(),[t,n]=j.useState({class:""}),{updateTicketInfos:r}=j.useContext(br),{updateStepStatus:i}=j.useContext(Xt),o=s=>{n(s),r("ticketClass",s),i("select","done"),e("/purchase/ticket-reservation")};return l.jsxs($S,{children:[l.jsx(FS,{children:MS.map(s=>l.jsxs(DS,{isSelected:t.class===s.id,children:[l.jsxs(LS,{children:[l.jsxs(BS,{children:[l.jsx("h2",{children:s.name}),s.benefits.map(a=>l.jsxs(US,{isIncluded:a.included,children:[a.included?l.jsx(zS,{}):l.jsx(NS,{}),l.jsx("span",{children:a.description})]},a.description))]}),l.jsxs(VS,{children:[l.jsx(yr,{}),l.jsx("span",{children:"Condições"})]})]}),l.jsxs(HS,{isSelected:t.class===s.id,children:[l.jsx("div",{style:{left:"0"}}),l.jsx("div",{style:{right:"0"}})]}),l.jsx(WS,{children:l.jsx(ur,{type:"radio",width:"100%",inputVariant:"radio",label:`R$ ${s.price}`,checked:t.class===s.id,onClick:()=>n({...t,class:s.id})})})]},s.name))}),l.jsx(YS,{children:l.jsx(bt,{size:"medium",fontColor:"#F1F3F5",backgroundColor:"#6495ED",onClick:()=>o(t),disabled:t.class==="",children:"Confirm"})})]})}const $S=y.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;
  box-sizing: border-box;
`,FS=y.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 42px;
`,DS=y.div`
  height: 430px;
  width: 225px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0
    ${e=>e.isSelected?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.1)"};
`,LS=y.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 20px 14px 20px;
  box-sizing: border-box;
  border-bottom: 1px dashed #d7dce1;
`,BS=y.ul`
  height: fit-content;
  width: 100%;

  h2 {
    margin-bottom: 8px;
  }
`,US=y.li`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  span {
    width: 100%;
    font-size: 15px;
    font-weight: 300;
    color: #646973;
    margin-bottom: 8px;
    padding-left: 25px;
    box-sizing: border-box;
    flex-wrap: wrap;
  }

  svg {
    position: absolute;
    top: -2px;
    font-size: 17px;
    color: ${e=>e.isIncluded?"#63a615":"#646973"};
  }
`,VS=y.div`
  height: 54px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  svg {
    font-size: 25px;
  }
  :hover {
    cursor: pointer;
  }

  span {
    :hover {
      text-decoration: underline;
      color: #ff0000;
    }
  }
`,HS=y.div`
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 14%;

  div {
    width: 5px;
    height: 10px;
    padding: 0;
    background-color: #f2f2f2;
    position: absolute;
    z-index: 10;
  }
  div:nth-child(1) {
    box-shadow: inset -2px 2px 2px 0 ${e=>e.isSelected?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.1)"};
    border-radius: 0 5px 5px 0;
    border-left: 0;
    left: -2px;
  }
  div:nth-child(2) {
    box-shadow: inset 2px 2px 2px 0
      ${e=>e.isSelected?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.1)"};
    border-radius: 5px 0 0 5px;
    border-right: 0;
    right: -2px;
  }
`,WS=y.div`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #282d37;
  padding: 26px 20px 14px 20px;
  box-sizing: border-box;
  position: relative;
`,YS=y.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;function qS(){return l.jsxs(ec,{children:[l.jsx("div",{style:{width:"100%"},children:l.jsx("h3",{children:"Significado dos Simbolos"})}),l.jsxs("li",{children:[l.jsx("h6",{children:"*"}),l.jsx("span",{children:"O preço mostrado inclui todos os passageiros registrados e todos os cartões de desconto que podem ser aplicados à oferta, de acordo com as condições de transporte"})]}),l.jsxs("li",{children:[l.jsx(nx,{}),l.jsx("span",{children:"O preço indicado inclui reserva de assento"})]}),l.jsxs("li",{children:[l.jsx(Ku,{}),l.jsx("span",{children:"Mostrar nossos melhores preços ¹"})]}),l.jsxs("li",{children:[l.jsx("h6",{children:"¹"}),l.jsx("span",{children:"Mostra os melhores preços encontrados aqui para a conexão selecionada no dia selecionado. Em alguns casos (tarifas de certas associações de transporte, etc.), nosso sistema pode conter uma conexão que vendemos, mas não é possível exibir o preço aqui. O preço é mostrado na próxima etapa e pode ser menor."})]})]})}function QS(){return l.jsxs(l.Fragment,{children:[l.jsx(qS,{}),l.jsx(_0,{})]})}function GS(){const{ticketStatus:e}=j.useContext(br);return l.jsxs(Zu,{children:[l.jsx(Bs,{}),l.jsx(P0,{}),e.ticketSelected?l.jsx(IS,{}):l.jsx(yS,{}),l.jsx(R0,{children:e.ticketSelected?l.jsx(QS,{}):l.jsx(OS,{})})]})}function XS(){const e=ht(),[t,n]=j.useState({salutation:"",title:"",firstName:"",lastName:""}),{updateTicketInfos:r}=j.useContext(br),{updateStepStatus:i}=j.useContext(Xt),o=({children:a,onClick:u,...c})=>l.jsx(bt,{onClick:u,...c,size:"medium",children:a});function s(){const{salutation:a,title:u,firstName:c,lastName:f}=t,d=`${a} ${u} ${c} ${f}`;r("name",d),i("ticket-reservation","done"),e("/purchase/payment")}return l.jsxs(KS,{children:[l.jsxs(Gd,{children:[l.jsx(Zo,{type:"text",label:"Saudações",width:"calc(50% - 10px)",selectVariant:"default",optionsArray:["Sr.","Sra."],required:!0,onChange:a=>n({...t,salutation:a.target.value})}),l.jsx(Zo,{type:"text",label:"Título",width:"calc(50% - 10px)",selectVariant:"default",optionsArray:["Dr.","Prof.","Prof. Dr.","Dr. Dr.","Prof. Dr. Dr."],required:!0,onChange:a=>n({...t,title:a.target.value})})]}),l.jsxs(Gd,{children:[l.jsx(yt,{type:"text",variant:"default",label:"Primeiro Nome",width:"calc(50% - 10px)",required:!0}),l.jsx(yt,{type:"text",variant:"default",label:"Sobrenome",width:"calc(50% - 10px)",required:!0})]}),l.jsx(JS,{children:l.jsx(o,{onClick:()=>s(),children:"Continue"})})]})}const KS=y.fieldset`
  height: 132px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Gd=y.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 24px;

  section {
    height: 62px;
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
`;y.div`
  height: 42px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  option {
    display: block;
  }

  svg {
    font-size: 22px;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
`;const JS=y.div`
  height: 84px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
`;function ZS(){return l.jsxs(eC,{children:[l.jsxs("h4",{children:["Você ainda não tem uma conta de cliente?",l.jsx("span",{children:"Por favor, entre com os detalhes para esta reserva"})]}),l.jsx(XS,{})]})}const eC=y.section`
  height: 282px;
  width: 100%;
  padding: 20px 140px 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px 4px 0 0 !important;

  h4 {
    height: 52px;
    width: 100%;
    padding: 20px 0;
    font-size: 1em;
    font-weight: 700;
    line-height: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;V.string.isRequired,V.func.isRequired;y.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  background-color: #ffffff;
  border-top: 1px solid #f0f3f5;
  border-radius: 0 0 4px 4px !important;

  section {
    height: 98px;
    width: 60%;
    padding: 16px 50px 16px 60px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
  }
`;y.span`
  font-size: 14px;
  color: #646973;
`;y.div`
  height: 90px;
  width: 100%;
  padding-left: 70px;

  li {
    font-size: 14px;
    line-height: 20px;
  }

  svg {
    font-size: 16px;
    color: #63a615;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: row;
  }
`;y.div`
  height: 84px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
`;function tC(){return l.jsx(nC,{children:l.jsx(ZS,{})})}const nC=y.div`
  height: 366px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;y.div`
  height: 84px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
`;V.string.isRequired,V.func.isRequired;y.section`
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 4px;
`;y.div`
  height: 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  font-size: 18px;

  span {
    font-weight: bold;
  }

  svg {
    font-size: 20px;
    color: #646973;
    margin: 0 25px 0 10px;
  }
`;y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0 30px 0;
`;y.div`
  display: flex;
  justify-content: right;
  font-size: 16px;
  font-weight: 700;
`;y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 30px 16px 0;
  box-sizing: border-box;
  background-color: #ffffff;

  section {
    height: 115px;
    width: 80%;
    padding-left: 140px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  section svg {
    position: absolute;
    right: 0;
  }
`;y.div`
  position: relative;
`;y.div`
  height: 16px;
  width: 16px;
  position: absolute;
  top: 50%;
  left: -120px;
  transform: translate(-50% -50%);
  border-radius: 3px;

  input {
    height: 16px;
    width: 16px;
    border-radius: 3px;
    border: 1px solid #858585;
    pointer-events: none;
    margin: 0;
    background-color: #ffffff;
    pointer-events: none;
    display: ${e=>e.showInput?"":"none"};
  }
`;y.div`
  height: 100%;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -80px;
  top: 8px;
  transform: translate(-50% -50%);

  svg {
    font-size: 30px;
  }
`;y.div`
  position: relative;
`;y.div`
  display: flex;
  justify-content: right;
  font-size: 16px;
  font-weight: 700;
`;y.div`
  height: 560px;
  width: 100%;
`;y.div`
  height: 76px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px 16px 140px;
  box-sizing: border-box;
  position: relative;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(40, 45, 55, 0.2);
  border-radius: 4px 4px 0 0;

  svg {
    font-size: 20px;
    color: #8b8b8b;
  }
`;y.div`
  height: 76px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 60px;
  top: 0;
  transform: translate(-50% -50%);

  svg {
    font-size: 25px;
  }
`;y.label`
  h4 {
    font-weight: 700;
  }

  span {
    font-size: 14px;
  }
`;y.div`
  height: 130px;
  width: 100%;
  padding: 20px 56px 35px 140px;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
  background-color: #ffffff;

  h4 {
    font-size: 16px;
    font-weight: 700;
  }
  span {
    font-size: 14px;
  }
`;y.div`
  height: 68px;
  width: 100%;
  display: flex;
  align-items: end;
  padding-bottom: 15px;
  box-sizing: border-box;
  font-size: 18px;
`;function rC(){const[e,t]=j.useState(!1);return l.jsxs(Zu,{children:[l.jsx(Bs,{}),l.jsx(iC,{}),l.jsx(tC,{setCustomerDetailsFilled:t})]})}const iC=y.section`
  width: 100%;
  padding: 28px 0 12px 0;
  margin: 0;
`;var Xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oC={visa:{niceType:"Visa",type:"visa",patterns:[4],gaps:[4,8,12],lengths:[16,18,19],code:{name:"CVV",size:3}},mastercard:{niceType:"Mastercard",type:"mastercard",patterns:[[51,55],[2221,2229],[223,229],[23,26],[270,271],2720],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},"american-express":{niceType:"American Express",type:"american-express",patterns:[34,37],gaps:[4,10],lengths:[15],code:{name:"CID",size:4}},"diners-club":{niceType:"Diners Club",type:"diners-club",patterns:[[300,305],36,38,39],gaps:[4,10],lengths:[14,16,19],code:{name:"CVV",size:3}},discover:{niceType:"Discover",type:"discover",patterns:[6011,[644,649],65],gaps:[4,8,12],lengths:[16,19],code:{name:"CID",size:3}},jcb:{niceType:"JCB",type:"jcb",patterns:[2131,1800,[3528,3589]],gaps:[4,8,12],lengths:[16,17,18,19],code:{name:"CVV",size:3}},unionpay:{niceType:"UnionPay",type:"unionpay",patterns:[620,[624,626],[62100,62182],[62184,62187],[62185,62197],[62200,62205],[622010,622999],622018,[622019,622999],[62207,62209],[622126,622925],[623,626],6270,6272,6276,[627700,627779],[627781,627799],[6282,6289],6291,6292,810,[8110,8131],[8132,8151],[8152,8163],[8164,8171]],gaps:[4,8,12],lengths:[14,15,16,17,18,19],code:{name:"CVN",size:3}},maestro:{niceType:"Maestro",type:"maestro",patterns:[493698,[5e5,504174],[504176,506698],[506779,508999],[56,59],63,67,6],gaps:[4,8,12],lengths:[12,13,14,15,16,17,18,19],code:{name:"CVC",size:3}},elo:{niceType:"Elo",type:"elo",patterns:[401178,401179,438935,457631,457632,431274,451416,457393,504175,[506699,506778],[509e3,509999],627780,636297,636368,[650031,650033],[650035,650051],[650405,650439],[650485,650538],[650541,650598],[650700,650718],[650720,650727],[650901,650978],[651652,651679],[655e3,655019],[655021,655058]],gaps:[4,8,12],lengths:[16],code:{name:"CVE",size:3}},mir:{niceType:"Mir",type:"mir",patterns:[[2200,2204]],gaps:[4,8,12],lengths:[16,17,18,19],code:{name:"CVP2",size:3}},hiper:{niceType:"Hiper",type:"hiper",patterns:[637095,63737423,63743358,637568,637599,637609,637612],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},hipercard:{niceType:"Hipercard",type:"hipercard",patterns:[606282],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}}},is={},si={};Object.defineProperty(si,"__esModule",{value:!0}),si.clone=void 0,si.clone=function(e){return e?JSON.parse(JSON.stringify(e)):null};var ko={};Object.defineProperty(ko,"__esModule",{value:!0}),ko.matches=void 0,ko.matches=function(e,t){return Array.isArray(t)?function(n,r,i){var o=String(r).length,s=n.substr(0,o),a=parseInt(s,10);return r=parseInt(String(r).substr(0,s.length),10),i=parseInt(String(i).substr(0,s.length),10),a>=r&&a<=i}(e,t[0],t[1]):function(n,r){return(r=String(r)).substring(0,n.length)===n.substring(0,r.length)}(e,t)},Object.defineProperty(is,"__esModule",{value:!0}),is.addMatchingCardsToResults=void 0;var sC=si,aC=ko;is.addMatchingCardsToResults=function(e,t,n){var r,i;for(r=0;r<t.patterns.length;r++){var o=t.patterns[r];if(aC.matches(e,o)){var s=sC.clone(t);i=Array.isArray(o)?String(o[0]).length:String(o).length,e.length>=i&&(s.matchStrength=i),n.push(s);break}}};var jo={};Object.defineProperty(jo,"__esModule",{value:!0}),jo.isValidInputType=void 0,jo.isValidInputType=function(e){return typeof e=="string"||e instanceof String};var Eo={};Object.defineProperty(Eo,"__esModule",{value:!0}),Eo.findBestMatch=void 0,Eo.findBestMatch=function(e){return function(t){var n=t.filter(function(r){return r.matchStrength}).length;return n>0&&n===t.length}(e)?e.reduce(function(t,n){return t?Number(t.matchStrength)<Number(n.matchStrength)?n:t:n}):null};var os=Xd&&Xd.__assign||function(){return os=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},os.apply(this,arguments)},O0=oC,lC=is,uC=jo,cC=Eo,ai=si,Qr={},Ze={VISA:"visa",MASTERCARD:"mastercard",AMERICAN_EXPRESS:"american-express",DINERS_CLUB:"diners-club",DISCOVER:"discover",JCB:"jcb",UNIONPAY:"unionpay",MAESTRO:"maestro",ELO:"elo",MIR:"mir",HIPER:"hiper",HIPERCARD:"hipercard"},z0=[Ze.VISA,Ze.MASTERCARD,Ze.AMERICAN_EXPRESS,Ze.DINERS_CLUB,Ze.DISCOVER,Ze.JCB,Ze.UNIONPAY,Ze.MAESTRO,Ze.ELO,Ze.MIR,Ze.HIPER,Ze.HIPERCARD],an=ai.clone(z0);function Al(e){return Qr[e]||O0[e]}function Ea(e,t){t===void 0&&(t=!1);var n=an.indexOf(e);if(!t&&n===-1)throw new Error('"'+e+'" is not a supported card type.');return n}function tn(e){var t=[];if(!uC.isValidInputType(e))return t;if(e.length===0)return an.map(function(r){return ai.clone(Al(r))});an.forEach(function(r){var i=Al(r);lC.addMatchingCardsToResults(e,i,t)});var n=cC.findBestMatch(t);return n?[n]:t}tn.getTypeInfo=function(e){return ai.clone(Al(e))},tn.removeCard=function(e){var t=Ea(e);an.splice(t,1)},tn.addCard=function(e){var t=Ea(e.type,!0);Qr[e.type]=e,t===-1&&an.push(e.type)},tn.updateCard=function(e,t){var n=Qr[e]||O0[e];if(!n)throw new Error('"'+e+"\" is not a recognized type. Use `addCard` instead.'");if(t.type&&n.type!==t.type)throw new Error("Cannot overwrite type parameter.");var r=ai.clone(n);r=os(os({},r),t),Qr[r.type]=r},tn.changeOrder=function(e,t){var n=Ea(e);an.splice(n,1),an.splice(t,0,e)},tn.resetModifications=function(){an=ai.clone(z0),Qr={}},tn.types=Ze;var It=tn,dC={niceType:"Dankort",type:"dankort",patterns:[5019],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},fC={niceType:"Laser",type:"laser",patterns:[6706,6771,6709],gaps:[4,8,12],lengths:[16,19],code:{name:"CVV",size:3}},pC={niceType:"Visa Electron",type:"visa-electron",patterns:[4026,417500,4405,4508,4844,49137],gaps:[4,8,12],lengths:[16],code:{name:"CVV",size:3}},hC=function(e){var t,n,r=String(e).replace(/[\s]/g,""),i=r.length,o=!1,s=0;if(!/^[0-9]+$/.test(r))return!1;for(var a=i;a>0;a--){if(t=parseInt(r.charAt(a-1)),o){switch(n=2*t){case 10:n=1;break;case 12:n=3;break;case 14:n=5;break;case 16:n=7;break;case 18:n=9}s+=n}else s+=t;o=!o}return s!==0&&s%10==0},mC=function(e){var t=It(e.toString().trim().replace(" ",""));if(t.length===1){var n=t.shift();return(n==null?void 0:n.type)||"unknown"}return"unknown"},ba=function(){return It.updateCard(It.types.MAESTRO,{patterns:[493698,[5e3,5018],[502e3,506698],[506779,508999],[56,59],63,67,6]}),It.updateCard(It.types.HIPERCARD,{patterns:[384100,384140,384160,606282,637095,637568]}),It.addCard(dC),It.addCard(fC),It.addCard(pC),Object.values(It.types).concat(["dankort","laser","visa-electron"])},Br={amex:["amex","americanexpress","american-express"],dinersclub:["diners","dinersclub","diners-club"],visaelectron:["visaelectron","visa-electron"]};function gC(e){var t=e.acceptedCards,n=t===void 0?[]:t,r=e.number,i=e.issuer,o=e.preview,s=o!==void 0&&o,a=e.expiry,u=e.cvc,c=e.focused,f=e.locale,d=f===void 0?{valid:"valid thru"}:f,m=e.name,w=e.placeholders,v=w===void 0?{name:"YOUR NAME HERE"}:w,x=e.callback,S=q.useState(ba()),h=S[0],p=S[1],g=q.useMemo(function(){return n!=null&&n.length?h.filter(function(F){return n.includes(F)}):h},[n,h]),k=q.useMemo(function(){var F="unknown";if(r){var T=mC(r);g.includes(T)&&(F=T)}var H=16;return Br.amex.includes(F)?H=15:Br!=null&&Br.dinersclub.includes(F)?H=14:["hipercard","mastercard","visa"].includes(F)&&(H=19),{issuer:F,maxLength:H}},[r,g]),b=q.useMemo(function(){return s&&i?i.toLowerCase():k.issuer},[k.issuer,i,s]),R=q.useMemo(function(){var F=s?19:k.maxLength,T=typeof r=="number"?r.toString():String(r).replace(/[A-Za-z]| /g,"");for(isNaN(parseInt(T,10))&&!s&&(T=""),F>16&&(F=T.length<=16?16:F),T.length>F&&(T=T.slice(0,F));T.length<F;)T+="•";if(Br.amex.includes(b)||Br.dinersclub.includes(b)){var H=[0,4,10],Y=[4,6,5];T="".concat(T.substr(H[0],Y[0])," ").concat(T.substr(H[1],Y[1])," ").concat(T.substr(H[2],Y[2]))}else if(T.length>16)H=[0,4,8,12],Y=[4,7],T="".concat(T.substr(H[0],Y[0])," ").concat(T.substr(H[1],Y[0])," ").concat(T.substr(H[2],Y[0])," ").concat(T.substr(H[3],Y[1]));else for(var de=1;de<F/4;de++){var be=4*de+(de-1);T="".concat(T.slice(0,be)," ").concat(T.slice(be))}return T},[k.maxLength,b,r,s]),N=q.useMemo(function(){var F,T=typeof a=="number"?a.toString():a,H="",Y="";for(T.includes("/")?(H=(F=T.split("/"))[0],Y=F[1]):T.length&&(H=T.substr(0,2),Y=T.substr(2,6));H.length<2;)H+="•";for(Y.length>2&&(Y=Y.substr(2,4));Y.length<2;)Y+="•";return"".concat(H,"/").concat(Y)},[a]),_=q.useCallback(function(F){if(F.length)p(h.filter(function(H){return F.includes(H)}));else{var T=ba();p(T)}},[h]);return q.useEffect(function(){R!==r&&typeof x=="function"&&x(k,hC(String(r))),ba().toString()!==h.toString()&&_(n)},[n,x,k,R,_,r,h]),q.createElement("div",{key:"Cards",className:"rccs"},q.createElement("div",{className:["rccs__card","rccs__card--".concat(b),c==="cvc"&&b!=="american-express"?"rccs__card--flipped":""].join(" ").trim()},q.createElement("div",{className:"rccs__card--front"},q.createElement("div",{className:"rccs__card__background"}),q.createElement("div",{className:"rccs__issuer"}),q.createElement("div",{className:["rccs__cvc__front",c==="cvc"?"rccs--focused":""].join(" ").trim()},u),q.createElement("div",{className:["rccs__number",R.replace(/ /g,"").length>16?"rccs__number--large":"",c==="number"?"rccs--focused":"",R.substr(0,1)!=="•"?"rccs--filled":""].join(" ").trim()},R),q.createElement("div",{className:["rccs__name",c==="name"?"rccs--focused":"",m?"rccs--filled":""].join(" ").trim()},m||v.name),q.createElement("div",{className:["rccs__expiry",c==="expiry"?"rccs--focused":"",N.substr(0,1)!=="•"?"rccs--filled":""].join(" ").trim()},q.createElement("div",{className:"rccs__expiry__valid"},d.valid),q.createElement("div",{className:"rccs__expiry__value"},N)),q.createElement("div",{className:"rccs__chip"})),q.createElement("div",{className:"rccs__card--back"},q.createElement("div",{className:"rccs__card__background"}),q.createElement("div",{className:"rccs__stripe"}),q.createElement("div",{className:"rccs__signature"}),q.createElement("div",{className:["rccs__cvc",c==="cvc"?"rccs--focused":""].join(" ").trim()},u),q.createElement("div",{className:"rccs__issuer"}))))}function vC(e){const t=ht(),{updatePaymentInfos:n}=j.useContext(jh),{updateProgress:r}=j.useContext(Xt),[i,o]=j.useState({name:"",number:"",expiry:"",cvc:"",focus:""});function s(f){o({...i,focus:f.target.name})}function a(f){const{name:d,value:m}=f.target;o({...i,[d]:m})}const u=({children:f,onClick:d,...m})=>l.jsx(bt,{fontColor:"#F1F3F5",backgroundColor:"#6495DE",size:"small",onClick:d,...m,children:f}),c=(f,d)=>{n(f,d),r("payment","done"),t("/purchase/ticket-verification")};return l.jsxs(xC,{children:[l.jsxs(yC,{children:[l.jsxs(wC,{children:[l.jsx(io,{children:l.jsxs("section",{style:{width:"100%"},children:[l.jsxs("label",{children:["Nome",l.jsx("span",{children:"*"})]}),l.jsx("input",{type:"text",name:"name",onFocus:f=>s(f),onChange:f=>a(f)})]})}),l.jsx(io,{children:l.jsxs("section",{style:{width:"100%"},children:[l.jsxs("label",{children:["Número do Cartão",l.jsx("span",{children:"*"})]}),l.jsx("input",{type:"text",name:"number",onFocus:f=>s(f),onChange:f=>a(f)})]})}),l.jsx(io,{children:l.jsxs("section",{style:{width:"100%"},children:[l.jsxs("label",{children:["Valido até",l.jsx("span",{children:"*"})]}),l.jsx("input",{type:"tel",name:"expiry",placeholder:"Valid Trhu",onFocus:f=>s(f),onChange:f=>a(f)})]})}),l.jsx(io,{children:l.jsxs("section",{style:{width:"100%"},children:[l.jsxs("label",{children:["CVC",l.jsx("span",{children:"*"})]}),l.jsx("input",{type:"tel",name:"cvc",onFocus:f=>s(f),onChange:f=>a(f)})]})})]}),l.jsx("div",{children:l.jsx(gC,{name:i.name,number:i.number,expiry:i.expiry,cvc:i.cvc,focused:i.focus})})]}),l.jsxs(jC,{children:[l.jsxs(SC,{children:[l.jsx("span",{children:"Total"}),l.jsx(gx,{}),l.jsx(kC,{children:"R$150"})]}),l.jsxs(CC,{children:[l.jsx(u,{onClick:()=>t("/purchase/payment"),children:"Voltar"}),l.jsx(u,{onClick:()=>c(),children:"Continuar"})]})]})]})}const xC=y.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
  box-sizing: border-box;
  //border-top: 1px solid #878c96;
  background-color: #ffffff;
  border-radius: 4px;
`,yC=y.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,wC=y.form`
  height: fit-content;
  width: 45%;
  border-radius: 4px;
`,io=y.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 10px;

  section {
    height: 62px;
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  label {
    height: 22px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    font-size: 14px;
  }

  input {
    height: 100%;
    width: 100%;
    padding: 2px 0 4px 16px;
    box-sizing: border-box;
    border: 1px solid #878c96;
    border-radius: 4px;
  }

  input {
    background-color: #f0f3f5;
    border: none;
    border-bottom: 1px solid #afb4bb;
  }

  span {
    font-size: 22px;
    font-weight: 700;
    color: #c50014;
  }
`;y.div`
  height: 42px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  option {
    display: block;
  }

  svg {
    font-size: 22px;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
`;y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;const SC=y.div`
  height: 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  font-size: 18px;

  span {
    font-weight: bold;
  }

  svg {
    font-size: 20px;
    color: #646973;
    margin: 0 25px 0 10px;
  }
`,CC=y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0 30px 0;
`,kC=y.div`
  display: flex;
  justify-content: right;
  font-size: 16px;
  font-weight: 700;
`,jC=y.section`
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 4px;
`;function EC(){return j.useState(null),l.jsxs(bC,{children:[l.jsx("h3",{children:"Insira seus dados para pagamento:"}),l.jsx(vC,{})]})}const bC=y.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  box-sizing: border-box;

  h3 {
    margin: 25px 0px 16px;
  }
`;y.div`
  height: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;y.section`
  height: 82px;
  width: 100%;
  margin-bottom: 5px;

  :hover {
    cursor: pointer;
  }

  fieldset {
    height: 76px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 4px;
  }

  fieldset div {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 16px 30px 16px 140px;
    box-sizing: border-box;
    border-radius: 4px;
  }

  svg {
    position: absolute;
    left: 80px;
    font-size: 36px;
  }

  input {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    position: absolute;
    left: 20px;
    top: 40%;
    transform: translate(-50% -50%);
    border: ${e=>e.checked?"5px solid #282D37":"1px solid #282D37"};
    outline: none;
    pointer-events: none;
  }
`;const PC=({children:e,onClick:t,...n})=>l.jsx(bt,{size:"medium",fontColor:"#F1F3F5",backgroundColor:"#6495DE",onClick:t,...n,children:e});function TC(){const e=ht(),{updateAddress:t}=j.useContext(kh),{updateStepStatus:n}=j.useContext(Xt);function r(i,o){t(i,o),n("payment","done"),e("/purchase/ticket-verification")}return l.jsxs(RC,{children:[l.jsx(Ju,{}),l.jsx(Bs,{}),l.jsxs(_C,{children:[l.jsx("h3",{children:"Por favor, preencha com seus dados pessoais."}),l.jsxs(OC,{children:[l.jsx(zC,{children:l.jsx("h4",{children:"Seu Endereço"})}),l.jsxs(NC,{children:[l.jsx(Ur,{children:l.jsx(yt,{required:!0,type:"text",variant:"default",label:"Email",width:"100%",onChange:i=>t("email",i.target.value)})}),l.jsxs(Ur,{children:[l.jsx(yt,{required:!0,type:"text",variant:"default",label:"Rua / Número",width:"calc(50% - 10px)",onChange:i=>t("street",i.target.value)}),l.jsx(yt,{required:!0,type:"text",variant:"default",label:"CEP",width:"calc(30% - 14px)",onChange:i=>t("cep",i.target.value)}),l.jsx(yt,{required:!0,type:"text",variant:"default",label:"Cidade",width:"calc(20% - 14px)",onChange:i=>t("city",i.target.value)})]}),l.jsxs(Ur,{children:[l.jsx(Zo,{required:!0,type:"text",label:"País",selectVariant:"default",width:"calc(50% - 10px)",optionsArray:["Brasil","Bolívia","Colômbia","Equador",,"Peru"],onChange:i=>t("country",i.target.value)}),l.jsx(yt,{required:!0,type:"text",variant:"default",label:"Estado",width:"calc(50% - 10px)",onChange:i=>t("state",i.target.value)})]}),l.jsx(Ur,{children:l.jsx(yt,{type:"text",variant:"default",label:"Complemento",width:"calc(50% - 10px)",onChange:i=>t("complement",i.target.value)})}),l.jsx(Ur,{children:l.jsx(yt,{type:"text",variant:"default",label:"Celular",width:"calc(30% - 10px)",onChange:i=>t("phone",i.target.value)})}),l.jsx(PC,{onClick:()=>r(),children:"Save Address"})]})]})]}),l.jsx(EC,{})]})}const RC=y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,_C=y.section`
  height: auto;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;

  h3 {
    font-size: 16px;
    margin: 25px 0 16px 0;
  }
`,OC=y.div`
  background-color: #ffffff;
`,zC=y.div`
  height: 48px;
  padding: 25px 0 0 80px;
  box-sizing: border-box;

  h4 {
    font-size: 16px;
    font-weight: 700;
  }
`,NC=y.fieldset`
  width: 100%;
  padding: 30px 80px 20px 80px;
  box-sizing: border-box;
`,Ur=y.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 40px;

  section {
    height: 62px;
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  span {
    font-size: 22px;
    font-weight: 700;
    color: #c50014;
  }
`;y.div`
  height: 42px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  option {
    display: block;
  }

  svg {
    font-size: 22px;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
`;const Ml=({children:e,onClick:t,...n})=>l.jsx(bt,{onClick:t,...n,size:"small",children:e});Ml.propTypes={children:V.string.isRequired,onClick:V.func.isRequired};function AC(){const e=new ht,{updateStepStatus:t}=j.useContext(Xt);function n(){t("ticket-verification","done"),e("/purchase/ticket-overview")}return l.jsxs(MC,{children:[l.jsx(Ju,{}),l.jsx(Bs,{}),l.jsxs(IC,{children:[l.jsx("span",{children:"Resumo da reserva"}),l.jsxs($C,{children:[l.jsxs(FC,{children:[l.jsxs(Kd,{children:[l.jsx(AS,{}),l.jsx("h3",{children:"Informações da passagem"})]}),l.jsxs(DC,{children:[l.jsxs(oo,{children:[l.jsxs("div",{children:[l.jsx("span",{children:"Nome do passageiro"}),l.jsx("p",{children:"Jansen Caik"})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Tipo de reserva"}),l.jsx("p",{children:"1ª Classe"})]})]}),l.jsxs(oo,{children:[l.jsxs("div",{children:[l.jsx("span",{children:"Horário de saída"}),l.jsx("p",{children:"10:20 - 10/09/23"})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Horário de chegada"}),l.jsx("p",{children:"13:45 - 10/09/23"})]})]}),l.jsxs(oo,{children:[l.jsxs("div",{children:[l.jsx("span",{children:"Origem"}),l.jsx("p",{children:"Santarém"})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Destino"}),l.jsx("p",{children:"Manaus"})]})]})]})]}),l.jsxs(LC,{children:[l.jsxs(Kd,{children:[l.jsx(K4,{}),l.jsx("h3",{children:"Método de pagamento"})]}),l.jsx(BC,{children:l.jsxs(oo,{children:[l.jsxs("div",{children:[l.jsx("span",{children:"Cartão de Crédito"}),l.jsx("p",{children:"**** **** **** *123"})]}),l.jsxs("div",{children:[l.jsx("span",{children:"Parcelas"}),l.jsx("p",{children:"Em 3 vezes de R$12,79"})]})]})})]}),l.jsxs(UC,{children:[l.jsx(Ml,{children:"Alterar"}),l.jsx(Ml,{onClick:()=>n(),children:"Confirmar"})]})]})]})]})}const MC=y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,IC=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 20px 0;
`,$C=y.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 20px 40px;
  box-sizing: border-box;
  background-color: #ffffff;
`,FC=y.div`
  height: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  background-color: #ffffff;
`,Kd=y.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 22px;
  }

  h3 {
    margin-left: 8px;
  }
`,DC=y.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-top: 32px;
`,oo=y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;

  div {
    width: 182px;
  }
  span {
    font-weight: 700;
  }
`,LC=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-top: 32px;
`,BC=y.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-top: 32px;
`,UC=y.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
`;function VC(){return l.jsx(Jg,{children:l.jsx(Zg,{children:l.jsx(ev,{children:l.jsx(tv,{children:l.jsx(nv,{children:l.jsxs(Gg,{children:[l.jsx(Mt,{path:"/sign-in",element:l.jsx(w4,{})}),l.jsx(Mt,{path:"/sign-up",element:l.jsx(N4,{})}),l.jsx(Mt,{path:"/",element:l.jsx(q2,{})}),l.jsx(Mt,{path:"/purchase/select",element:l.jsx(GS,{})}),l.jsx(Mt,{path:"/purchase/ticket-reservation",element:l.jsx(rC,{})}),l.jsx(Mt,{path:"/purchase/payment",element:l.jsx(TC,{})}),l.jsx(Mt,{path:"/purchase/ticket-verification",element:l.jsx(AC,{})}),l.jsx(Mt,{path:"/purchase/ticket-overview",element:l.jsx(P0,{})})]})})})})})})}Pa.createRoot(document.getElementById("root")).render(l.jsx(q.StrictMode,{children:l.jsx(VC,{})}));

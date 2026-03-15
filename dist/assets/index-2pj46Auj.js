(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();function id(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ms={exports:{}},gi={},Os={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac;function _p(){if(Ac)return ue;Ac=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),h=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),y=Symbol.iterator;function _(x){return x===null||typeof x!="object"?null:(x=y&&x[y]||x["@@iterator"],typeof x=="function"?x:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,re={};function M(x,b,H){this.props=x,this.context=b,this.refs=re,this.updater=H||F}M.prototype.isReactComponent={},M.prototype.setState=function(x,b){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,b,"setState")},M.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Q(){}Q.prototype=M.prototype;function X(x,b,H){this.props=x,this.context=b,this.refs=re,this.updater=H||F}var A=X.prototype=new Q;A.constructor=X,ee(A,M.prototype),A.isPureReactComponent=!0;var le=Array.isArray,K=Object.prototype.hasOwnProperty,se={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function Ie(x,b,H){var G,ie={},q=null,de=null;if(b!=null)for(G in b.ref!==void 0&&(de=b.ref),b.key!==void 0&&(q=""+b.key),b)K.call(b,G)&&!ye.hasOwnProperty(G)&&(ie[G]=b[G]);var ae=arguments.length-2;if(ae===1)ie.children=H;else if(1<ae){for(var fe=Array(ae),ze=0;ze<ae;ze++)fe[ze]=arguments[ze+2];ie.children=fe}if(x&&x.defaultProps)for(G in ae=x.defaultProps,ae)ie[G]===void 0&&(ie[G]=ae[G]);return{$$typeof:o,type:x,key:q,ref:de,props:ie,_owner:se.current}}function Fe(x,b){return{$$typeof:o,type:x.type,key:b,ref:x.ref,props:x.props,_owner:x._owner}}function Me(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function ve(x){var b={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(H){return b[H]})}var Te=/\/+/g;function Ne(x,b){return typeof x=="object"&&x!==null&&x.key!=null?ve(""+x.key):b.toString(36)}function Qe(x,b,H,G,ie){var q=typeof x;(q==="undefined"||q==="boolean")&&(x=null);var de=!1;if(x===null)de=!0;else switch(q){case"string":case"number":de=!0;break;case"object":switch(x.$$typeof){case o:case a:de=!0}}if(de)return de=x,ie=ie(de),x=G===""?"."+Ne(de,0):G,le(ie)?(H="",x!=null&&(H=x.replace(Te,"$&/")+"/"),Qe(ie,b,H,"",function(ze){return ze})):ie!=null&&(Me(ie)&&(ie=Fe(ie,H+(!ie.key||de&&de.key===ie.key?"":(""+ie.key).replace(Te,"$&/")+"/")+x)),b.push(ie)),1;if(de=0,G=G===""?".":G+":",le(x))for(var ae=0;ae<x.length;ae++){q=x[ae];var fe=G+Ne(q,ae);de+=Qe(q,b,H,fe,ie)}else if(fe=_(x),typeof fe=="function")for(x=fe.call(x),ae=0;!(q=x.next()).done;)q=q.value,fe=G+Ne(q,ae++),de+=Qe(q,b,H,fe,ie);else if(q==="object")throw b=String(x),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return de}function Ce(x,b,H){if(x==null)return x;var G=[],ie=0;return Qe(x,G,"","",function(q){return b.call(H,q,ie++)}),G}function te(x){if(x._status===-1){var b=x._result;b=b(),b.then(function(H){(x._status===0||x._status===-1)&&(x._status=1,x._result=H)},function(H){(x._status===0||x._status===-1)&&(x._status=2,x._result=H)}),x._status===-1&&(x._status=0,x._result=b)}if(x._status===1)return x._result.default;throw x._result}var ce={current:null},L={transition:null},W={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:L,ReactCurrentOwner:se};function D(){throw Error("act(...) is not supported in production builds of React.")}return ue.Children={map:Ce,forEach:function(x,b,H){Ce(x,function(){b.apply(this,arguments)},H)},count:function(x){var b=0;return Ce(x,function(){b++}),b},toArray:function(x){return Ce(x,function(b){return b})||[]},only:function(x){if(!Me(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ue.Component=M,ue.Fragment=u,ue.Profiler=f,ue.PureComponent=X,ue.StrictMode=d,ue.Suspense=I,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,ue.act=D,ue.cloneElement=function(x,b,H){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var G=ee({},x.props),ie=x.key,q=x.ref,de=x._owner;if(b!=null){if(b.ref!==void 0&&(q=b.ref,de=se.current),b.key!==void 0&&(ie=""+b.key),x.type&&x.type.defaultProps)var ae=x.type.defaultProps;for(fe in b)K.call(b,fe)&&!ye.hasOwnProperty(fe)&&(G[fe]=b[fe]===void 0&&ae!==void 0?ae[fe]:b[fe])}var fe=arguments.length-2;if(fe===1)G.children=H;else if(1<fe){ae=Array(fe);for(var ze=0;ze<fe;ze++)ae[ze]=arguments[ze+2];G.children=ae}return{$$typeof:o,type:x.type,key:ie,ref:q,props:G,_owner:de}},ue.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:m,_context:x},x.Consumer=x},ue.createElement=Ie,ue.createFactory=function(x){var b=Ie.bind(null,x);return b.type=x,b},ue.createRef=function(){return{current:null}},ue.forwardRef=function(x){return{$$typeof:j,render:x}},ue.isValidElement=Me,ue.lazy=function(x){return{$$typeof:z,_payload:{_status:-1,_result:x},_init:te}},ue.memo=function(x,b){return{$$typeof:C,type:x,compare:b===void 0?null:b}},ue.startTransition=function(x){var b=L.transition;L.transition={};try{x()}finally{L.transition=b}},ue.unstable_act=D,ue.useCallback=function(x,b){return ce.current.useCallback(x,b)},ue.useContext=function(x){return ce.current.useContext(x)},ue.useDebugValue=function(){},ue.useDeferredValue=function(x){return ce.current.useDeferredValue(x)},ue.useEffect=function(x,b){return ce.current.useEffect(x,b)},ue.useId=function(){return ce.current.useId()},ue.useImperativeHandle=function(x,b,H){return ce.current.useImperativeHandle(x,b,H)},ue.useInsertionEffect=function(x,b){return ce.current.useInsertionEffect(x,b)},ue.useLayoutEffect=function(x,b){return ce.current.useLayoutEffect(x,b)},ue.useMemo=function(x,b){return ce.current.useMemo(x,b)},ue.useReducer=function(x,b,H){return ce.current.useReducer(x,b,H)},ue.useRef=function(x){return ce.current.useRef(x)},ue.useState=function(x){return ce.current.useState(x)},ue.useSyncExternalStore=function(x,b,H){return ce.current.useSyncExternalStore(x,b,H)},ue.useTransition=function(){return ce.current.useTransition()},ue.version="18.3.1",ue}var Bc;function ra(){return Bc||(Bc=1,Os.exports=_p()),Os.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc;function Ep(){if(Mc)return gi;Mc=1;var o=ra(),a=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,f=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function h(j,I,C){var z,y={},_=null,F=null;C!==void 0&&(_=""+C),I.key!==void 0&&(_=""+I.key),I.ref!==void 0&&(F=I.ref);for(z in I)d.call(I,z)&&!m.hasOwnProperty(z)&&(y[z]=I[z]);if(j&&j.defaultProps)for(z in I=j.defaultProps,I)y[z]===void 0&&(y[z]=I[z]);return{$$typeof:a,type:j,key:_,ref:F,props:y,_owner:f.current}}return gi.Fragment=u,gi.jsx=h,gi.jsxs=h,gi}var Oc;function Tp(){return Oc||(Oc=1,Ms.exports=Ep()),Ms.exports}var i=Tp(),O=ra();const P=id(O);var Vo={},Hs={exports:{}},mt={},$s={exports:{}},Ws={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function Np(){return Hc||(Hc=1,(function(o){function a(L,W){var D=L.length;L.push(W);e:for(;0<D;){var x=D-1>>>1,b=L[x];if(0<f(b,W))L[x]=W,L[D]=b,D=x;else break e}}function u(L){return L.length===0?null:L[0]}function d(L){if(L.length===0)return null;var W=L[0],D=L.pop();if(D!==W){L[0]=D;e:for(var x=0,b=L.length,H=b>>>1;x<H;){var G=2*(x+1)-1,ie=L[G],q=G+1,de=L[q];if(0>f(ie,D))q<b&&0>f(de,ie)?(L[x]=de,L[q]=D,x=q):(L[x]=ie,L[G]=D,x=G);else if(q<b&&0>f(de,D))L[x]=de,L[q]=D,x=q;else break e}}return W}function f(L,W){var D=L.sortIndex-W.sortIndex;return D!==0?D:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var h=Date,j=h.now();o.unstable_now=function(){return h.now()-j}}var I=[],C=[],z=1,y=null,_=3,F=!1,ee=!1,re=!1,M=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(L){for(var W=u(C);W!==null;){if(W.callback===null)d(C);else if(W.startTime<=L)d(C),W.sortIndex=W.expirationTime,a(I,W);else break;W=u(C)}}function le(L){if(re=!1,A(L),!ee)if(u(I)!==null)ee=!0,te(K);else{var W=u(C);W!==null&&ce(le,W.startTime-L)}}function K(L,W){ee=!1,re&&(re=!1,Q(Ie),Ie=-1),F=!0;var D=_;try{for(A(W),y=u(I);y!==null&&(!(y.expirationTime>W)||L&&!ve());){var x=y.callback;if(typeof x=="function"){y.callback=null,_=y.priorityLevel;var b=x(y.expirationTime<=W);W=o.unstable_now(),typeof b=="function"?y.callback=b:y===u(I)&&d(I),A(W)}else d(I);y=u(I)}if(y!==null)var H=!0;else{var G=u(C);G!==null&&ce(le,G.startTime-W),H=!1}return H}finally{y=null,_=D,F=!1}}var se=!1,ye=null,Ie=-1,Fe=5,Me=-1;function ve(){return!(o.unstable_now()-Me<Fe)}function Te(){if(ye!==null){var L=o.unstable_now();Me=L;var W=!0;try{W=ye(!0,L)}finally{W?Ne():(se=!1,ye=null)}}else se=!1}var Ne;if(typeof X=="function")Ne=function(){X(Te)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Ce=Qe.port2;Qe.port1.onmessage=Te,Ne=function(){Ce.postMessage(null)}}else Ne=function(){M(Te,0)};function te(L){ye=L,se||(se=!0,Ne())}function ce(L,W){Ie=M(function(){L(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_continueExecution=function(){ee||F||(ee=!0,te(K))},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return u(I)},o.unstable_next=function(L){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var D=_;_=W;try{return L()}finally{_=D}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var D=_;_=L;try{return W()}finally{_=D}},o.unstable_scheduleCallback=function(L,W,D){var x=o.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?x+D:x):D=x,L){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=D+b,L={id:z++,callback:W,priorityLevel:L,startTime:D,expirationTime:b,sortIndex:-1},D>x?(L.sortIndex=D,a(C,L),u(I)===null&&L===u(C)&&(re?(Q(Ie),Ie=-1):re=!0,ce(le,D-x))):(L.sortIndex=b,a(I,L),ee||F||(ee=!0,te(K))),L},o.unstable_shouldYield=ve,o.unstable_wrapCallback=function(L){var W=_;return function(){var D=_;_=W;try{return L.apply(this,arguments)}finally{_=D}}}})(Ws)),Ws}var $c;function zp(){return $c||($c=1,$s.exports=Np()),$s.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc;function Rp(){if(Wc)return mt;Wc=1;var o=ra(),a=zp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,f={};function m(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(f[e]=t,e=0;e<t.length;e++)d.add(t[e])}var j=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),I=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},y={};function _(e){return I.call(y,e)?!0:I.call(z,e)?!1:C.test(e)?y[e]=!0:(z[e]=!0,!1)}function F(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ee(e,t,n,r){if(t===null||typeof t>"u"||F(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function re(e,t,n,r,l,s,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=c}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new re(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new re(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new re(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new re(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new re(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new re(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new re(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new re(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q,X);M[t]=new re(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q,X);M[t]=new re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q,X);M[t]=new re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new re(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new re(e,1,!1,e.toLowerCase(),null,!0,!0)});function A(e,t,n,r){var l=M.hasOwnProperty(t)?M[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ee(t,n,l,r)&&(n=null),r||l===null?_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var le=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),se=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),ve=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),L=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,x;function b(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var H=!1;function G(e,t){if(!e||H)return"";H=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(S){var r=S}Reflect.construct(e,[],t)}else{try{t.call()}catch(S){r=S}e.call(t.prototype)}else{try{throw Error()}catch(S){r=S}e()}}catch(S){if(S&&r&&typeof S.stack=="string"){for(var l=S.stack.split(`
`),s=r.stack.split(`
`),c=l.length-1,p=s.length-1;1<=c&&0<=p&&l[c]!==s[p];)p--;for(;1<=c&&0<=p;c--,p--)if(l[c]!==s[p]){if(c!==1||p!==1)do if(c--,p--,0>p||l[c]!==s[p]){var g=`
`+l[c].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=c&&0<=p);break}}}finally{H=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?b(e):""}function ie(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case se:return"Portal";case Fe:return"Profiler";case Ie:return"StrictMode";case Ne:return"Suspense";case Qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ve:return(e.displayName||"Context")+".Consumer";case Me:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:q(e.type)||"Memo";case te:t=e._payload,e=e._init;try{return q(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(t);case 8:return t===Ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ze(e){var t=fe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){r=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kt(e){e._valueTracker||(e._valueTracker=ze(e))}function cn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $t(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Li(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ae(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nr(e,t){t=t.checked,t!=null&&A(e,"checked",t,!1)}function Gt(e,t){Nr(e,t);var n=ae(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yt(e,t.type,n):t.hasOwnProperty("defaultValue")&&yt(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yt(e,t,n){(t!=="number"||xt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ae(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Xe(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xt(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Mn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ae(n)}}function Pi(e,t){var n=ae(t.value),r=ae(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function On(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?On(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hn,rr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hn=Hn||document.createElement("div"),Hn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ct(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pn=["Webkit","ms","Moz","O"];Object.keys(fn).forEach(function(e){pn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fn[t]=fn[e]})});function Di(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fn.hasOwnProperty(e)&&fn[e]?(""+t).trim():t+"px"}function Ai(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Di(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Bi=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ir(e,t){if(t){if(Bi[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Lr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $n=null;function bt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,mn=null,Zt=null;function Fr(e){if(e=ti(e)){if(typeof Pr!="function")throw Error(u(280));var t=e.stateNode;t&&(t=oo(t),Pr(e.stateNode,e.type,t))}}function oe(e){mn?Zt?Zt.push(e):Zt=[e]:mn=e}function De(){if(mn){var e=mn,t=Zt;if(Zt=mn=null,Fr(e),t)for(e=0;e<t.length;e++)Fr(t[e])}}function We(e,t){return e(t)}function nt(){}var hn=!1;function Oe(e,t,n){if(hn)return e(t,n);hn=!0;try{return We(e,t,n)}finally{hn=!1,(mn!==null||Zt!==null)&&(nt(),De())}}function Ye(e,t){var n=e.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var gn=!1;if(j)try{var Ze={};Object.defineProperty(Ze,"passive",{get:function(){gn=!0}}),window.addEventListener("test",Ze,Ze),window.removeEventListener("test",Ze,Ze)}catch{gn=!1}function vt(e,t,n,r,l,s,c,p,g){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch(T){this.onError(T)}}var xn=!1,It=null,Dr=!1,il=null,Ld={onError:function(e){xn=!0,It=e}};function Pd(e,t,n,r,l,s,c,p,g){xn=!1,It=null,vt.apply(Ld,arguments)}function Fd(e,t,n,r,l,s,c,p,g){if(Pd.apply(this,arguments),xn){if(xn){var S=It;xn=!1,It=null}else throw Error(u(198));Dr||(Dr=!0,il=S)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function la(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sa(e){if(Wn(e)!==e)throw Error(u(188))}function Dd(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return sa(l),e;if(s===r)return sa(l),t;s=s.sibling}throw Error(u(188))}if(n.return!==r.return)n=l,r=s;else{for(var c=!1,p=l.child;p;){if(p===n){c=!0,n=l,r=s;break}if(p===r){c=!0,r=l,n=s;break}p=p.sibling}if(!c){for(p=s.child;p;){if(p===n){c=!0,n=s,r=l;break}if(p===r){c=!0,r=s,n=l;break}p=p.sibling}if(!c)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function aa(e){return e=Dd(e),e!==null?ua(e):null}function ua(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ua(e);if(t!==null)return t;e=e.sibling}return null}var ca=a.unstable_scheduleCallback,da=a.unstable_cancelCallback,Ad=a.unstable_shouldYield,Bd=a.unstable_requestPaint,Ae=a.unstable_now,Md=a.unstable_getCurrentPriorityLevel,ol=a.unstable_ImmediatePriority,fa=a.unstable_UserBlockingPriority,Mi=a.unstable_NormalPriority,Od=a.unstable_LowPriority,pa=a.unstable_IdlePriority,Oi=null,Wt=null;function Hd(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Oi,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:Ud,$d=Math.log,Wd=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-($d(e)/Wd|0)|0}var Hi=64,$i=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,s=e.pingedLanes,c=n&268435455;if(c!==0){var p=c&~l;p!==0?r=Ar(p):(s&=c,s!==0&&(r=Ar(s)))}else c=n&~l,c!==0?r=Ar(c):s!==0&&(r=Ar(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,s=t&-t,l>=s||l===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),l=1<<n,r|=e[n],t&=~l;return r}function Vd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var c=31-Pt(s),p=1<<c,g=l[c];g===-1?((p&n)===0||(p&r)!==0)&&(l[c]=Vd(p,t)):g<=t&&(e.expiredLanes|=p),s&=~p}}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ma(){var e=Hi;return Hi<<=1,(Hi&4194240)===0&&(Hi=64),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function Yd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Pt(n),s=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~s}}function al(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ge=0;function ha(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ga,ul,xa,ya,va,cl=!1,Ui=[],yn=null,vn=null,wn=null,Mr=new Map,Or=new Map,kn=[],qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wa(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function Hr(e,t,n,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},t!==null&&(t=ti(t),t!==null&&ul(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Kd(e,t,n,r,l){switch(t){case"focusin":return yn=Hr(yn,e,t,n,r,l),!0;case"dragenter":return vn=Hr(vn,e,t,n,r,l),!0;case"mouseover":return wn=Hr(wn,e,t,n,r,l),!0;case"pointerover":var s=l.pointerId;return Mr.set(s,Hr(Mr.get(s)||null,e,t,n,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Or.set(s,Hr(Or.get(s)||null,e,t,n,r,l)),!0}return!1}function ka(e){var t=Un(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=la(n),t!==null){e.blockedOn=t,va(e.priority,function(){xa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$n=r,n.target.dispatchEvent(r),$n=null}else return t=ti(n),t!==null&&ul(t),e.blockedOn=n,!1;t.shift()}return!0}function ja(e,t,n){Vi(e)&&n.delete(t)}function Gd(){cl=!1,yn!==null&&Vi(yn)&&(yn=null),vn!==null&&Vi(vn)&&(vn=null),wn!==null&&Vi(wn)&&(wn=null),Mr.forEach(ja),Or.forEach(ja)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,cl||(cl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Gd)))}function Wr(e){function t(l){return $r(l,e)}if(0<Ui.length){$r(Ui[0],e);for(var n=1;n<Ui.length;n++){var r=Ui[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yn!==null&&$r(yn,e),vn!==null&&$r(vn,e),wn!==null&&$r(wn,e),Mr.forEach(t),Or.forEach(t),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)ka(n),n.blockedOn===null&&kn.shift()}var or=le.ReactCurrentBatchConfig,Qi=!0;function Xd(e,t,n,r){var l=ge,s=or.transition;or.transition=null;try{ge=1,dl(e,t,n,r)}finally{ge=l,or.transition=s}}function Zd(e,t,n,r){var l=ge,s=or.transition;or.transition=null;try{ge=4,dl(e,t,n,r)}finally{ge=l,or.transition=s}}function dl(e,t,n,r){if(Qi){var l=fl(e,t,n,r);if(l===null)Tl(e,t,r,Yi,n),wa(e,r);else if(Kd(l,e,t,n,r))r.stopPropagation();else if(wa(e,r),t&4&&-1<qd.indexOf(e)){for(;l!==null;){var s=ti(l);if(s!==null&&ga(s),s=fl(e,t,n,r),s===null&&Tl(e,t,r,Yi,n),s===l)break;l=s}l!==null&&r.stopPropagation()}else Tl(e,t,r,null,n)}}var Yi=null;function fl(e,t,n,r){if(Yi=null,e=bt(r),e=Un(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=la(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yi=e,null}function Sa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Md()){case ol:return 1;case fa:return 4;case Mi:case Od:return 16;case pa:return 536870912;default:return 16}default:return 16}}var jn=null,pl=null,qi=null;function Ca(){if(qi)return qi;var e,t=pl,n=t.length,r,l="value"in jn?jn.value:jn.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===l[s-r];r++);return qi=l.slice(e,1<r?1-r:void 0)}function Ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function ba(){return!1}function wt(e){function t(n,r,l,s,c){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gi:ba,this.isPropagationStopped=ba,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=wt(lr),Ur=D({},lr,{view:0,detail:0}),Jd=wt(Ur),hl,gl,Vr,Xi=D({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(hl=e.screenX-Vr.screenX,gl=e.screenY-Vr.screenY):gl=hl=0,Vr=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:gl}}),Ia=wt(Xi),ef=D({},Xi,{dataTransfer:0}),tf=wt(ef),nf=D({},Ur,{relatedTarget:0}),xl=wt(nf),rf=D({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),of=wt(rf),lf=D({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=wt(lf),af=D({},lr,{data:0}),_a=wt(af),uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ff(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=df[e])?!!t[e]:!1}function yl(){return ff}var pf=D({},Ur,{key:function(e){if(e.key){var t=uf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yl,charCode:function(e){return e.type==="keypress"?Ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=wt(pf),hf=D({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=wt(hf),gf=D({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yl}),xf=wt(gf),yf=D({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=wt(yf),wf=D({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kf=wt(wf),jf=[9,13,27,32],vl=j&&"CompositionEvent"in window,Qr=null;j&&"documentMode"in document&&(Qr=document.documentMode);var Sf=j&&"TextEvent"in window&&!Qr,Ta=j&&(!vl||Qr&&8<Qr&&11>=Qr),Na=" ",za=!1;function Ra(e,t){switch(e){case"keyup":return jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function La(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function Cf(e,t){switch(e){case"compositionend":return La(t);case"keypress":return t.which!==32?null:(za=!0,Na);case"textInput":return e=t.data,e===Na&&za?null:e;default:return null}}function bf(e,t){if(sr)return e==="compositionend"||!vl&&Ra(e,t)?(e=Ca(),qi=pl=jn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ta&&t.locale!=="ko"?null:t.data;default:return null}}var If={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!If[e.type]:t==="textarea"}function Fa(e,t,n,r){oe(r),t=no(t,"onChange"),0<t.length&&(n=new ml("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yr=null,qr=null;function _f(e){Ja(e,0)}function Zi(e){var t=fr(e);if(cn(t))return e}function Ef(e,t){if(e==="change")return t}var Da=!1;if(j){var wl;if(j){var kl="oninput"in document;if(!kl){var Aa=document.createElement("div");Aa.setAttribute("oninput","return;"),kl=typeof Aa.oninput=="function"}wl=kl}else wl=!1;Da=wl&&(!document.documentMode||9<document.documentMode)}function Ba(){Yr&&(Yr.detachEvent("onpropertychange",Ma),qr=Yr=null)}function Ma(e){if(e.propertyName==="value"&&Zi(qr)){var t=[];Fa(t,qr,e,bt(e)),Oe(_f,t)}}function Tf(e,t,n){e==="focusin"?(Ba(),Yr=t,qr=n,Yr.attachEvent("onpropertychange",Ma)):e==="focusout"&&Ba()}function Nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(qr)}function zf(e,t){if(e==="click")return Zi(t)}function Rf(e,t){if(e==="input"||e==="change")return Zi(t)}function Lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:Lf;function Kr(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!I.call(t,l)||!Ft(e[l],t[l]))return!1}return!0}function Oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ha(e,t){var n=Oa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oa(n)}}function $a(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$a(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wa(){for(var e=window,t=xt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xt(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pf(e){var t=Wa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$a(n.ownerDocument.documentElement,n)){if(r!==null&&jl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!e.extend&&s>r&&(l=r,r=s,s=l),l=Ha(n,s);var c=Ha(n,r);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=j&&"documentMode"in document&&11>=document.documentMode,ar=null,Sl=null,Gr=null,Cl=!1;function Ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cl||ar==null||ar!==xt(r)||(r=ar,"selectionStart"in r&&jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Kr(Gr,r)||(Gr=r,r=no(Sl,"onSelect"),0<r.length&&(t=new ml("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ar)))}function Ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},bl={},Va={};j&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function eo(e){if(bl[e])return bl[e];if(!ur[e])return e;var t=ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Va)return bl[e]=t[n];return e}var Qa=eo("animationend"),Ya=eo("animationiteration"),qa=eo("animationstart"),Ka=eo("transitionend"),Ga=new Map,Xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){Ga.set(e,t),m(t,[e])}for(var Il=0;Il<Xa.length;Il++){var _l=Xa[Il],Df=_l.toLowerCase(),Af=_l[0].toUpperCase()+_l.slice(1);Sn(Df,"on"+Af)}Sn(Qa,"onAnimationEnd"),Sn(Ya,"onAnimationIteration"),Sn(qa,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(Ka,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function Za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fd(r,t,void 0,e),e.currentTarget=null}function Ja(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var c=r.length-1;0<=c;c--){var p=r[c],g=p.instance,S=p.currentTarget;if(p=p.listener,g!==s&&l.isPropagationStopped())break e;Za(l,p,S),s=g}else for(c=0;c<r.length;c++){if(p=r[c],g=p.instance,S=p.currentTarget,p=p.listener,g!==s&&l.isPropagationStopped())break e;Za(l,p,S),s=g}}}if(Dr)throw e=il,Dr=!1,il=null,e}function je(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function El(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[to]){e[to]=!0,d.forEach(function(n){n!=="selectionchange"&&(Bf.has(n)||El(n,!1,e),El(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,El("selectionchange",!1,t))}}function eu(e,t,n,r){switch(Sa(t)){case 1:var l=Xd;break;case 4:l=Zd;break;default:l=dl}n=l.bind(null,t,n,e),l=void 0,!gn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Tl(e,t,n,r,l){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var p=r.stateNode.containerInfo;if(p===l||p.nodeType===8&&p.parentNode===l)break;if(c===4)for(c=r.return;c!==null;){var g=c.tag;if((g===3||g===4)&&(g=c.stateNode.containerInfo,g===l||g.nodeType===8&&g.parentNode===l))return;c=c.return}for(;p!==null;){if(c=Un(p),c===null)return;if(g=c.tag,g===5||g===6){r=s=c;continue e}p=p.parentNode}}r=r.return}Oe(function(){var S=s,T=bt(n),N=[];e:{var E=Ga.get(e);if(E!==void 0){var B=ml,U=e;switch(e){case"keypress":if(Ki(n)===0)break e;case"keydown":case"keyup":B=mf;break;case"focusin":U="focus",B=xl;break;case"focusout":U="blur",B=xl;break;case"beforeblur":case"afterblur":B=xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=xf;break;case Qa:case Ya:case qa:B=of;break;case Ka:B=vf;break;case"scroll":B=Jd;break;case"wheel":B=kf;break;case"copy":case"cut":case"paste":B=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Ea}var V=(t&4)!==0,Be=!V&&e==="scroll",w=V?E!==null?E+"Capture":null:E;V=[];for(var v=S,k;v!==null;){k=v;var R=k.stateNode;if(k.tag===5&&R!==null&&(k=R,w!==null&&(R=Ye(v,w),R!=null&&V.push(Jr(v,R,k)))),Be)break;v=v.return}0<V.length&&(E=new B(E,U,null,n,T),N.push({event:E,listeners:V}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",E&&n!==$n&&(U=n.relatedTarget||n.fromElement)&&(Un(U)||U[Jt]))break e;if((B||E)&&(E=T.window===T?T:(E=T.ownerDocument)?E.defaultView||E.parentWindow:window,B?(U=n.relatedTarget||n.toElement,B=S,U=U?Un(U):null,U!==null&&(Be=Wn(U),U!==Be||U.tag!==5&&U.tag!==6)&&(U=null)):(B=null,U=S),B!==U)){if(V=Ia,R="onMouseLeave",w="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(V=Ea,R="onPointerLeave",w="onPointerEnter",v="pointer"),Be=B==null?E:fr(B),k=U==null?E:fr(U),E=new V(R,v+"leave",B,n,T),E.target=Be,E.relatedTarget=k,R=null,Un(T)===S&&(V=new V(w,v+"enter",U,n,T),V.target=k,V.relatedTarget=Be,R=V),Be=R,B&&U)t:{for(V=B,w=U,v=0,k=V;k;k=cr(k))v++;for(k=0,R=w;R;R=cr(R))k++;for(;0<v-k;)V=cr(V),v--;for(;0<k-v;)w=cr(w),k--;for(;v--;){if(V===w||w!==null&&V===w.alternate)break t;V=cr(V),w=cr(w)}V=null}else V=null;B!==null&&tu(N,E,B,V,!1),U!==null&&Be!==null&&tu(N,Be,U,V,!0)}}e:{if(E=S?fr(S):window,B=E.nodeName&&E.nodeName.toLowerCase(),B==="select"||B==="input"&&E.type==="file")var Y=Ef;else if(Pa(E))if(Da)Y=Rf;else{Y=Nf;var Z=Tf}else(B=E.nodeName)&&B.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(Y=zf);if(Y&&(Y=Y(e,S))){Fa(N,Y,n,T);break e}Z&&Z(e,E,S),e==="focusout"&&(Z=E._wrapperState)&&Z.controlled&&E.type==="number"&&yt(E,"number",E.value)}switch(Z=S?fr(S):window,e){case"focusin":(Pa(Z)||Z.contentEditable==="true")&&(ar=Z,Sl=S,Gr=null);break;case"focusout":Gr=Sl=ar=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,Ua(N,n,T);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":Ua(N,n,T)}var J;if(vl)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else sr?Ra(e,n)&&(ne="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ne="onCompositionStart");ne&&(Ta&&n.locale!=="ko"&&(sr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&sr&&(J=Ca()):(jn=T,pl="value"in jn?jn.value:jn.textContent,sr=!0)),Z=no(S,ne),0<Z.length&&(ne=new _a(ne,e,null,n,T),N.push({event:ne,listeners:Z}),J?ne.data=J:(J=La(n),J!==null&&(ne.data=J)))),(J=Sf?Cf(e,n):bf(e,n))&&(S=no(S,"onBeforeInput"),0<S.length&&(T=new _a("onBeforeInput","beforeinput",null,n,T),N.push({event:T,listeners:S}),T.data=J))}Ja(N,t)})}function Jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Ye(e,n),s!=null&&r.unshift(Jr(e,s,l)),s=Ye(e,t),s!=null&&r.push(Jr(e,s,l))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tu(e,t,n,r,l){for(var s=t._reactName,c=[];n!==null&&n!==r;){var p=n,g=p.alternate,S=p.stateNode;if(g!==null&&g===r)break;p.tag===5&&S!==null&&(p=S,l?(g=Ye(n,s),g!=null&&c.unshift(Jr(n,g,p))):l||(g=Ye(n,s),g!=null&&c.push(Jr(n,g,p)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Mf=/\r\n?/g,Of=/\u0000|\uFFFD/g;function nu(e){return(typeof e=="string"?e:""+e).replace(Mf,`
`).replace(Of,"")}function ro(e,t,n){if(t=nu(t),nu(e)!==t&&n)throw Error(u(425))}function io(){}var Nl=null,zl=null;function Rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,$f=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(Wf)}:Ll;function Wf(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Wr(t)}function Cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function iu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),Ut="__reactFiber$"+dr,ei="__reactProps$"+dr,Jt="__reactContainer$"+dr,Fl="__reactEvents$"+dr,Uf="__reactListeners$"+dr,Vf="__reactHandles$"+dr;function Un(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=iu(e);e!==null;){if(n=e[Ut])return n;e=iu(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[Ut]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function oo(e){return e[ei]||null}var Dl=[],pr=-1;function bn(e){return{current:e}}function Se(e){0>pr||(e.current=Dl[pr],Dl[pr]=null,pr--)}function we(e,t){pr++,Dl[pr]=e.current,e.current=t}var In={},rt=bn(In),ut=bn(!1),Vn=In;function mr(e,t){var n=e.type.contextTypes;if(!n)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in n)l[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ct(e){return e=e.childContextTypes,e!=null}function lo(){Se(ut),Se(rt)}function ou(e,t,n){if(rt.current!==In)throw Error(u(168));we(rt,t),we(ut,n)}function lu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(u(108,de(e)||"Unknown",l));return D({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Vn=rt.current,we(rt,e),we(ut,ut.current),!0}function su(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=lu(e,t,Vn),r.__reactInternalMemoizedMergedChildContext=e,Se(ut),Se(rt),we(rt,e)):Se(ut),we(ut,n)}var en=null,ao=!1,Al=!1;function au(e){en===null?en=[e]:en.push(e)}function Qf(e){ao=!0,au(e)}function _n(){if(!Al&&en!==null){Al=!0;var e=0,t=ge;try{var n=en;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}en=null,ao=!1}catch(l){throw en!==null&&(en=en.slice(e+1)),ca(ol,_n),l}finally{ge=t,Al=!1}}return null}var hr=[],gr=0,uo=null,co=0,_t=[],Et=0,Qn=null,tn=1,nn="";function Yn(e,t){hr[gr++]=co,hr[gr++]=uo,uo=e,co=t}function uu(e,t,n){_t[Et++]=tn,_t[Et++]=nn,_t[Et++]=Qn,Qn=e;var r=tn;e=nn;var l=32-Pt(r)-1;r&=~(1<<l),n+=1;var s=32-Pt(t)+l;if(30<s){var c=l-l%5;s=(r&(1<<c)-1).toString(32),r>>=c,l-=c,tn=1<<32-Pt(t)+l|n<<l|r,nn=s+e}else tn=1<<s|n<<l|r,nn=e}function Bl(e){e.return!==null&&(Yn(e,1),uu(e,1,0))}function Ml(e){for(;e===uo;)uo=hr[--gr],hr[gr]=null,co=hr[--gr],hr[gr]=null;for(;e===Qn;)Qn=_t[--Et],_t[Et]=null,nn=_t[--Et],_t[Et]=null,tn=_t[--Et],_t[Et]=null}var kt=null,jt=null,be=!1,Dt=null;function cu(e,t){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,jt=Cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:tn,overflow:nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,jt=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hl(e){if(be){var t=jt;if(t){var n=t;if(!du(e,t)){if(Ol(e))throw Error(u(418));t=Cn(n.nextSibling);var r=kt;t&&du(e,t)?cu(r,n):(e.flags=e.flags&-4097|2,be=!1,kt=e)}}else{if(Ol(e))throw Error(u(418));e.flags=e.flags&-4097|2,be=!1,kt=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function fo(e){if(e!==kt)return!1;if(!be)return fu(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rl(e.type,e.memoizedProps)),t&&(t=jt)){if(Ol(e))throw pu(),Error(u(418));for(;t;)cu(e,t),t=Cn(t.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){jt=Cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=kt?Cn(e.stateNode.nextSibling):null;return!0}function pu(){for(var e=jt;e;)e=Cn(e.nextSibling)}function xr(){jt=kt=null,be=!1}function $l(e){Dt===null?Dt=[e]:Dt.push(e)}var Yf=le.ReactCurrentBatchConfig;function ni(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var l=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(c){var p=l.refs;c===null?delete p[s]:p[s]=c},t._stringRef=s,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function hu(e){function t(w,v){if(e){var k=w.deletions;k===null?(w.deletions=[v],w.flags|=16):k.push(v)}}function n(w,v){if(!e)return null;for(;v!==null;)t(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function l(w,v){return w=Fn(w,v),w.index=0,w.sibling=null,w}function s(w,v,k){return w.index=k,e?(k=w.alternate,k!==null?(k=k.index,k<v?(w.flags|=2,v):k):(w.flags|=2,v)):(w.flags|=1048576,v)}function c(w){return e&&w.alternate===null&&(w.flags|=2),w}function p(w,v,k,R){return v===null||v.tag!==6?(v=Ls(k,w.mode,R),v.return=w,v):(v=l(v,k),v.return=w,v)}function g(w,v,k,R){var Y=k.type;return Y===ye?T(w,v,k.props.children,R,k.key):v!==null&&(v.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===te&&mu(Y)===v.type)?(R=l(v,k.props),R.ref=ni(w,v,k),R.return=w,R):(R=Ao(k.type,k.key,k.props,null,w.mode,R),R.ref=ni(w,v,k),R.return=w,R)}function S(w,v,k,R){return v===null||v.tag!==4||v.stateNode.containerInfo!==k.containerInfo||v.stateNode.implementation!==k.implementation?(v=Ps(k,w.mode,R),v.return=w,v):(v=l(v,k.children||[]),v.return=w,v)}function T(w,v,k,R,Y){return v===null||v.tag!==7?(v=tr(k,w.mode,R,Y),v.return=w,v):(v=l(v,k),v.return=w,v)}function N(w,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ls(""+v,w.mode,k),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case K:return k=Ao(v.type,v.key,v.props,null,w.mode,k),k.ref=ni(w,null,v),k.return=w,k;case se:return v=Ps(v,w.mode,k),v.return=w,v;case te:var R=v._init;return N(w,R(v._payload),k)}if(Mn(v)||W(v))return v=tr(v,w.mode,k,null),v.return=w,v;po(w,v)}return null}function E(w,v,k,R){var Y=v!==null?v.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return Y!==null?null:p(w,v,""+k,R);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case K:return k.key===Y?g(w,v,k,R):null;case se:return k.key===Y?S(w,v,k,R):null;case te:return Y=k._init,E(w,v,Y(k._payload),R)}if(Mn(k)||W(k))return Y!==null?null:T(w,v,k,R,null);po(w,k)}return null}function B(w,v,k,R,Y){if(typeof R=="string"&&R!==""||typeof R=="number")return w=w.get(k)||null,p(v,w,""+R,Y);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case K:return w=w.get(R.key===null?k:R.key)||null,g(v,w,R,Y);case se:return w=w.get(R.key===null?k:R.key)||null,S(v,w,R,Y);case te:var Z=R._init;return B(w,v,k,Z(R._payload),Y)}if(Mn(R)||W(R))return w=w.get(k)||null,T(v,w,R,Y,null);po(v,R)}return null}function U(w,v,k,R){for(var Y=null,Z=null,J=v,ne=v=0,Ge=null;J!==null&&ne<k.length;ne++){J.index>ne?(Ge=J,J=null):Ge=J.sibling;var me=E(w,J,k[ne],R);if(me===null){J===null&&(J=Ge);break}e&&J&&me.alternate===null&&t(w,J),v=s(me,v,ne),Z===null?Y=me:Z.sibling=me,Z=me,J=Ge}if(ne===k.length)return n(w,J),be&&Yn(w,ne),Y;if(J===null){for(;ne<k.length;ne++)J=N(w,k[ne],R),J!==null&&(v=s(J,v,ne),Z===null?Y=J:Z.sibling=J,Z=J);return be&&Yn(w,ne),Y}for(J=r(w,J);ne<k.length;ne++)Ge=B(J,w,ne,k[ne],R),Ge!==null&&(e&&Ge.alternate!==null&&J.delete(Ge.key===null?ne:Ge.key),v=s(Ge,v,ne),Z===null?Y=Ge:Z.sibling=Ge,Z=Ge);return e&&J.forEach(function(Dn){return t(w,Dn)}),be&&Yn(w,ne),Y}function V(w,v,k,R){var Y=W(k);if(typeof Y!="function")throw Error(u(150));if(k=Y.call(k),k==null)throw Error(u(151));for(var Z=Y=null,J=v,ne=v=0,Ge=null,me=k.next();J!==null&&!me.done;ne++,me=k.next()){J.index>ne?(Ge=J,J=null):Ge=J.sibling;var Dn=E(w,J,me.value,R);if(Dn===null){J===null&&(J=Ge);break}e&&J&&Dn.alternate===null&&t(w,J),v=s(Dn,v,ne),Z===null?Y=Dn:Z.sibling=Dn,Z=Dn,J=Ge}if(me.done)return n(w,J),be&&Yn(w,ne),Y;if(J===null){for(;!me.done;ne++,me=k.next())me=N(w,me.value,R),me!==null&&(v=s(me,v,ne),Z===null?Y=me:Z.sibling=me,Z=me);return be&&Yn(w,ne),Y}for(J=r(w,J);!me.done;ne++,me=k.next())me=B(J,w,ne,me.value,R),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?ne:me.key),v=s(me,v,ne),Z===null?Y=me:Z.sibling=me,Z=me);return e&&J.forEach(function(Ip){return t(w,Ip)}),be&&Yn(w,ne),Y}function Be(w,v,k,R){if(typeof k=="object"&&k!==null&&k.type===ye&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case K:e:{for(var Y=k.key,Z=v;Z!==null;){if(Z.key===Y){if(Y=k.type,Y===ye){if(Z.tag===7){n(w,Z.sibling),v=l(Z,k.props.children),v.return=w,w=v;break e}}else if(Z.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===te&&mu(Y)===Z.type){n(w,Z.sibling),v=l(Z,k.props),v.ref=ni(w,Z,k),v.return=w,w=v;break e}n(w,Z);break}else t(w,Z);Z=Z.sibling}k.type===ye?(v=tr(k.props.children,w.mode,R,k.key),v.return=w,w=v):(R=Ao(k.type,k.key,k.props,null,w.mode,R),R.ref=ni(w,v,k),R.return=w,w=R)}return c(w);case se:e:{for(Z=k.key;v!==null;){if(v.key===Z)if(v.tag===4&&v.stateNode.containerInfo===k.containerInfo&&v.stateNode.implementation===k.implementation){n(w,v.sibling),v=l(v,k.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else t(w,v);v=v.sibling}v=Ps(k,w.mode,R),v.return=w,w=v}return c(w);case te:return Z=k._init,Be(w,v,Z(k._payload),R)}if(Mn(k))return U(w,v,k,R);if(W(k))return V(w,v,k,R);po(w,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,v!==null&&v.tag===6?(n(w,v.sibling),v=l(v,k),v.return=w,w=v):(n(w,v),v=Ls(k,w.mode,R),v.return=w,w=v),c(w)):n(w,v)}return Be}var yr=hu(!0),gu=hu(!1),mo=bn(null),ho=null,vr=null,Wl=null;function Ul(){Wl=vr=ho=null}function Vl(e){var t=mo.current;Se(mo),e._currentValue=t}function Ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wr(e,t){ho=e,Wl=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(dt=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(Wl!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(ho===null)throw Error(u(308));vr=e,ho.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var qn=null;function Yl(e){qn===null?qn=[e]:qn.push(e)}function xu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Yl(t)):(n.next=l.next,l.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var En=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(pe&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,rn(e,n)}return l=r.interleaved,l===null?(t.next=t,Yl(r)):(t.next=l.next,l.next=t),r.interleaved=t,rn(e,n)}function go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,al(e,n)}}function vu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?l=s=c:s=s.next=c,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xo(e,t,n,r){var l=e.updateQueue;En=!1;var s=l.firstBaseUpdate,c=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var g=p,S=g.next;g.next=null,c===null?s=S:c.next=S,c=g;var T=e.alternate;T!==null&&(T=T.updateQueue,p=T.lastBaseUpdate,p!==c&&(p===null?T.firstBaseUpdate=S:p.next=S,T.lastBaseUpdate=g))}if(s!==null){var N=l.baseState;c=0,T=S=g=null,p=s;do{var E=p.lane,B=p.eventTime;if((r&E)===E){T!==null&&(T=T.next={eventTime:B,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var U=e,V=p;switch(E=t,B=n,V.tag){case 1:if(U=V.payload,typeof U=="function"){N=U.call(B,N,E);break e}N=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=V.payload,E=typeof U=="function"?U.call(B,N,E):U,E==null)break e;N=D({},N,E);break e;case 2:En=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,E=l.effects,E===null?l.effects=[p]:E.push(p))}else B={eventTime:B,lane:E,tag:p.tag,payload:p.payload,callback:p.callback,next:null},T===null?(S=T=B,g=N):T=T.next=B,c|=E;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;E=p,p=E.next,E.next=null,l.lastBaseUpdate=E,l.shared.pending=null}}while(!0);if(T===null&&(g=N),l.baseState=g,l.firstBaseUpdate=S,l.lastBaseUpdate=T,t=l.shared.interleaved,t!==null){l=t;do c|=l.lane,l=l.next;while(l!==t)}else s===null&&(l.shared.lanes=0);Xn|=c,e.lanes=c,e.memoizedState=N}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(u(191,l));l.call(r)}}}var ri={},Vt=bn(ri),ii=bn(ri),oi=bn(ri);function Kn(e){if(e===ri)throw Error(u(174));return e}function Kl(e,t){switch(we(oi,t),we(ii,e),we(Vt,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rr(t,e)}Se(Vt),we(Vt,t)}function kr(){Se(Vt),Se(ii),Se(oi)}function ku(e){Kn(oi.current);var t=Kn(Vt.current),n=Rr(t,e.type);t!==n&&(we(ii,e),we(Vt,n))}function Gl(e){ii.current===e&&(Se(Vt),Se(ii))}var _e=bn(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xl=[];function Zl(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var vo=le.ReactCurrentDispatcher,Jl=le.ReactCurrentBatchConfig,Gn=0,Ee=null,Ue=null,qe=null,wo=!1,li=!1,si=0,qf=0;function it(){throw Error(u(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function ts(e,t,n,r,l,s){if(Gn=s,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?Zf:Jf,e=n(r,l),li){s=0;do{if(li=!1,si=0,25<=s)throw Error(u(301));s+=1,qe=Ue=null,t.updateQueue=null,vo.current=ep,e=n(r,l)}while(li)}if(vo.current=So,t=Ue!==null&&Ue.next!==null,Gn=0,qe=Ue=Ee=null,wo=!1,t)throw Error(u(300));return e}function ns(){var e=si!==0;return si=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ee.memoizedState=qe=e:qe=qe.next=e,qe}function Nt(){if(Ue===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=qe===null?Ee.memoizedState:qe.next;if(t!==null)qe=t,Ue=e;else{if(e===null)throw Error(u(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},qe===null?Ee.memoizedState=qe=e:qe=qe.next=e}return qe}function ai(e,t){return typeof t=="function"?t(e):t}function rs(e){var t=Nt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Ue,l=r.baseQueue,s=n.pending;if(s!==null){if(l!==null){var c=l.next;l.next=s.next,s.next=c}r.baseQueue=l=s,n.pending=null}if(l!==null){s=l.next,r=r.baseState;var p=c=null,g=null,S=s;do{var T=S.lane;if((Gn&T)===T)g!==null&&(g=g.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),r=S.hasEagerState?S.eagerState:e(r,S.action);else{var N={lane:T,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};g===null?(p=g=N,c=r):g=g.next=N,Ee.lanes|=T,Xn|=T}S=S.next}while(S!==null&&S!==s);g===null?c=r:g.next=p,Ft(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=g,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do s=l.lane,Ee.lanes|=s,Xn|=s,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function is(e){var t=Nt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do s=e(s,c.action),c=c.next;while(c!==l);Ft(s,t.memoizedState)||(dt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ju(){}function Su(e,t){var n=Ee,r=Nt(),l=t(),s=!Ft(r.memoizedState,l);if(s&&(r.memoizedState=l,dt=!0),r=r.queue,os(Iu.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,ui(9,bu.bind(null,n,r,l,t),void 0,null),Ke===null)throw Error(u(349));(Gn&30)!==0||Cu(n,t,l)}return l}function Cu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bu(e,t,n,r){t.value=n,t.getSnapshot=r,_u(t)&&Eu(e)}function Iu(e,t,n){return n(function(){_u(t)&&Eu(e)})}function _u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function Eu(e){var t=rn(e,1);t!==null&&Ot(t,e,1,-1)}function Tu(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e},t.queue=e,e=e.dispatch=Xf.bind(null,Ee,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nu(){return Nt().memoizedState}function ko(e,t,n,r){var l=Qt();Ee.flags|=e,l.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function jo(e,t,n,r){var l=Nt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var c=Ue.memoizedState;if(s=c.destroy,r!==null&&es(r,c.deps)){l.memoizedState=ui(t,n,s,r);return}}Ee.flags|=e,l.memoizedState=ui(1|t,n,s,r)}function zu(e,t){return ko(8390656,8,e,t)}function os(e,t){return jo(2048,8,e,t)}function Ru(e,t){return jo(4,2,e,t)}function Lu(e,t){return jo(4,4,e,t)}function Pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fu(e,t,n){return n=n!=null?n.concat([e]):null,jo(4,4,Pu.bind(null,t,e),n)}function ls(){}function Du(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&es(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Au(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&es(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bu(e,t,n){return(Gn&21)===0?(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n):(Ft(n,t)||(n=ma(),Ee.lanes|=n,Xn|=n,e.baseState=!0),t)}function Kf(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=Jl.transition;Jl.transition={};try{e(!1),t()}finally{ge=n,Jl.transition=r}}function Mu(){return Nt().memoizedState}function Gf(e,t,n){var r=Ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ou(e))Hu(t,n);else if(n=xu(e,t,n,r),n!==null){var l=at();Ot(n,e,r,l),$u(n,t,r)}}function Xf(e,t,n){var r=Ln(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ou(e))Hu(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,p=s(c,n);if(l.hasEagerState=!0,l.eagerState=p,Ft(p,c)){var g=t.interleaved;g===null?(l.next=l,Yl(t)):(l.next=g.next,g.next=l),t.interleaved=l;return}}catch{}finally{}n=xu(e,t,l,r),n!==null&&(l=at(),Ot(n,e,r,l),$u(n,t,r))}}function Ou(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Hu(e,t){li=wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $u(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,al(e,n)}}var So={readContext:Tt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},Zf={readContext:Tt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:zu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ko(4194308,4,Pu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var n=Qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gf.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:Tu,useDebugValue:ls,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=Tu(!1),t=e[0];return e=Kf.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,l=Qt();if(be){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ke===null)throw Error(u(349));(Gn&30)!==0||Cu(r,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,zu(Iu.bind(null,r,s,e),[e]),r.flags|=2048,ui(9,bu.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Qt(),t=Ke.identifierPrefix;if(be){var n=nn,r=tn;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jf={readContext:Tt,useCallback:Du,useContext:Tt,useEffect:os,useImperativeHandle:Fu,useInsertionEffect:Ru,useLayoutEffect:Lu,useMemo:Au,useReducer:rs,useRef:Nu,useState:function(){return rs(ai)},useDebugValue:ls,useDeferredValue:function(e){var t=Nt();return Bu(t,Ue.memoizedState,e)},useTransition:function(){var e=rs(ai)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Su,useId:Mu,unstable_isNewReconciler:!1},ep={readContext:Tt,useCallback:Du,useContext:Tt,useEffect:os,useImperativeHandle:Fu,useInsertionEffect:Ru,useLayoutEffect:Lu,useMemo:Au,useReducer:is,useRef:Nu,useState:function(){return is(ai)},useDebugValue:ls,useDeferredValue:function(e){var t=Nt();return Ue===null?t.memoizedState=e:Bu(t,Ue.memoizedState,e)},useTransition:function(){var e=is(ai)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Su,useId:Mu,unstable_isNewReconciler:!1};function At(e,t){if(e&&e.defaultProps){t=D({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=at(),l=Ln(e),s=on(r,l);s.payload=t,n!=null&&(s.callback=n),t=Tn(e,s,l),t!==null&&(Ot(t,e,l,r),go(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=at(),l=Ln(e),s=on(r,l);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Tn(e,s,l),t!==null&&(Ot(t,e,l,r),go(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),r=Ln(e),l=on(n,r);l.tag=2,t!=null&&(l.callback=t),t=Tn(e,l,r),t!==null&&(Ot(t,e,r,n),go(t,e,r))}};function Wu(e,t,n,r,l,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,c):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(l,s):!0}function Uu(e,t,n){var r=!1,l=In,s=t.contextType;return typeof s=="object"&&s!==null?s=Tt(s):(l=ct(t)?Vn:rt.current,r=t.contextTypes,s=(r=r!=null)?mr(e,l):In),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),t}function Vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function as(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ql(e);var s=t.contextType;typeof s=="object"&&s!==null?l.context=Tt(s):(s=ct(t)?Vn:rt.current,l.context=mr(e,s)),l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ss(e,t,s,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Co.enqueueReplaceState(l,l.state,null),xo(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var n="",r=t;do n+=ie(r),r=r.return;while(r);var l=n}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:l,digest:null}}function us(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tp=typeof WeakMap=="function"?WeakMap:Map;function Qu(e,t,n){n=on(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zo||(zo=!0,bs=r),cs(e,t)},n}function Yu(e,t,n){n=on(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){cs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cs(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=hp.bind(null,e,t,n),t.then(e,e))}function Ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=on(-1,1),t.tag=2,Tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var np=le.ReactCurrentOwner,dt=!1;function st(e,t,n,r){t.child=e===null?gu(t,null,n,r):yr(t,e.child,n,r)}function Xu(e,t,n,r,l){n=n.render;var s=t.ref;return wr(t,l),r=ts(e,t,n,r,s,l),n=ns(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ln(e,t,l)):(be&&n&&Bl(t),t.flags|=1,st(e,t,r,l),t.child)}function Zu(e,t,n,r,l){if(e===null){var s=n.type;return typeof s=="function"&&!Rs(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ju(e,t,s,r,l)):(e=Ao(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&l)===0){var c=s.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(c,r)&&e.ref===t.ref)return ln(e,t,l)}return t.flags|=1,e=Fn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ju(e,t,n,r,l){if(e!==null){var s=e.memoizedProps;if(Kr(s,r)&&e.ref===t.ref)if(dt=!1,t.pendingProps=r=s,(e.lanes&l)!==0)(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,ln(e,t,l)}return ds(e,t,n,r,l)}function ec(e,t,n){var r=t.pendingProps,l=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Cr,St),St|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(Cr,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Cr,St),St|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,we(Cr,St),St|=r;return st(e,t,l,n),t.child}function tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ds(e,t,n,r,l){var s=ct(n)?Vn:rt.current;return s=mr(t,s),wr(t,l),n=ts(e,t,n,r,s,l),r=ns(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ln(e,t,l)):(be&&r&&Bl(t),t.flags|=1,st(e,t,n,l),t.child)}function nc(e,t,n,r,l){if(ct(n)){var s=!0;so(t)}else s=!1;if(wr(t,l),t.stateNode===null)Io(e,t),Uu(t,n,r),as(t,n,r,l),r=!0;else if(e===null){var c=t.stateNode,p=t.memoizedProps;c.props=p;var g=c.context,S=n.contextType;typeof S=="object"&&S!==null?S=Tt(S):(S=ct(n)?Vn:rt.current,S=mr(t,S));var T=n.getDerivedStateFromProps,N=typeof T=="function"||typeof c.getSnapshotBeforeUpdate=="function";N||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==r||g!==S)&&Vu(t,c,r,S),En=!1;var E=t.memoizedState;c.state=E,xo(t,r,c,l),g=t.memoizedState,p!==r||E!==g||ut.current||En?(typeof T=="function"&&(ss(t,n,T,r),g=t.memoizedState),(p=En||Wu(t,n,p,r,E,g,S))?(N||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=g),c.props=r,c.state=g,c.context=S,r=p):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,yu(e,t),p=t.memoizedProps,S=t.type===t.elementType?p:At(t.type,p),c.props=S,N=t.pendingProps,E=c.context,g=n.contextType,typeof g=="object"&&g!==null?g=Tt(g):(g=ct(n)?Vn:rt.current,g=mr(t,g));var B=n.getDerivedStateFromProps;(T=typeof B=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==N||E!==g)&&Vu(t,c,r,g),En=!1,E=t.memoizedState,c.state=E,xo(t,r,c,l);var U=t.memoizedState;p!==N||E!==U||ut.current||En?(typeof B=="function"&&(ss(t,n,B,r),U=t.memoizedState),(S=En||Wu(t,n,S,r,E,U,g)||!1)?(T||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,U,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,U,g)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=U),c.props=r,c.state=U,c.context=g,r=S):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),r=!1)}return fs(e,t,n,r,s,l)}function fs(e,t,n,r,l,s){tc(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return l&&su(t,n,!1),ln(e,t,s);r=t.stateNode,np.current=t;var p=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=yr(t,e.child,null,s),t.child=yr(t,null,p,s)):st(e,t,p,s),t.memoizedState=r.state,l&&su(t,n,!0),t.child}function rc(e){var t=e.stateNode;t.pendingContext?ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ou(e,t.context,!1),Kl(e,t.containerInfo)}function ic(e,t,n,r,l){return xr(),$l(l),t.flags|=256,st(e,t,n,r),t.child}var ps={dehydrated:null,treeContext:null,retryLane:0};function ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function oc(e,t,n){var r=t.pendingProps,l=_e.current,s=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(l&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),we(_e,l&1),e===null)return Hl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=r.children,e=r.fallback,s?(r=t.mode,s=t.child,c={mode:"hidden",children:c},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=c):s=Bo(c,r,0,null),e=tr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ms(n),t.memoizedState=ps,e):hs(t,c));if(l=e.memoizedState,l!==null&&(p=l.dehydrated,p!==null))return rp(e,t,c,r,p,l,n);if(s){s=r.fallback,c=t.mode,l=e.child,p=l.sibling;var g={mode:"hidden",children:r.children};return(c&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=g,t.deletions=null):(r=Fn(l,g),r.subtreeFlags=l.subtreeFlags&14680064),p!==null?s=Fn(p,s):(s=tr(s,c,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,c=e.child.memoizedState,c=c===null?ms(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},s.memoizedState=c,s.childLanes=e.childLanes&~n,t.memoizedState=ps,r}return s=e.child,e=s.sibling,r=Fn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hs(e,t){return t=Bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bo(e,t,n,r){return r!==null&&$l(r),yr(t,e.child,null,n),e=hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rp(e,t,n,r,l,s,c){if(n)return t.flags&256?(t.flags&=-257,r=us(Error(u(422))),bo(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,l=t.mode,r=Bo({mode:"visible",children:r.children},l,0,null),s=tr(s,l,c,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&yr(t,e.child,null,c),t.child.memoizedState=ms(c),t.memoizedState=ps,s);if((t.mode&1)===0)return bo(e,t,c,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var p=r.dgst;return r=p,s=Error(u(419)),r=us(s,r,void 0),bo(e,t,c,r)}if(p=(c&e.childLanes)!==0,dt||p){if(r=Ke,r!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|c))!==0?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,rn(e,l),Ot(r,e,l,-1))}return zs(),r=us(Error(u(421))),bo(e,t,c,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=gp.bind(null,e),l._reactRetry=t,null):(e=s.treeContext,jt=Cn(l.nextSibling),kt=t,be=!0,Dt=null,e!==null&&(_t[Et++]=tn,_t[Et++]=nn,_t[Et++]=Qn,tn=e.id,nn=e.overflow,Qn=t),t=hs(t,r.children),t.flags|=4096,t)}function lc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ql(e.return,t,n)}function gs(e,t,n,r,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=l)}function sc(e,t,n){var r=t.pendingProps,l=r.revealOrder,s=r.tail;if(st(e,t,r.children,n),r=_e.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,n,t);else if(e.tag===19)lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(_e,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),gs(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&yo(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}gs(t,!0,n,null,s);break;case"together":gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ip(e,t,n){switch(t.tag){case 3:rc(t),xr();break;case 5:ku(t);break;case 1:ct(t.type)&&so(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;we(mo,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(we(_e,_e.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?oc(e,t,n):(we(_e,_e.current&1),e=ln(e,t,n),e!==null?e.sibling:null);we(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return sc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),we(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,ec(e,t,n)}return ln(e,t,n)}var ac,xs,uc,cc;ac=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},xs=function(){},uc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Kn(Vt.current);var s=null;switch(n){case"input":l=$t(e,l),r=$t(e,r),s=[];break;case"select":l=D({},l,{value:void 0}),r=D({},r,{value:void 0}),s=[];break;case"textarea":l=Xe(e,l),r=Xe(e,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=io)}ir(n,r);var c;n=null;for(S in l)if(!r.hasOwnProperty(S)&&l.hasOwnProperty(S)&&l[S]!=null)if(S==="style"){var p=l[S];for(c in p)p.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(f.hasOwnProperty(S)?s||(s=[]):(s=s||[]).push(S,null));for(S in r){var g=r[S];if(p=l!=null?l[S]:void 0,r.hasOwnProperty(S)&&g!==p&&(g!=null||p!=null))if(S==="style")if(p){for(c in p)!p.hasOwnProperty(c)||g&&g.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in g)g.hasOwnProperty(c)&&p[c]!==g[c]&&(n||(n={}),n[c]=g[c])}else n||(s||(s=[]),s.push(S,n)),n=g;else S==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(s=s||[]).push(S,g)):S==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(S,""+g):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(f.hasOwnProperty(S)?(g!=null&&S==="onScroll"&&je("scroll",e),s||p===g||(s=[])):(s=s||[]).push(S,g))}n&&(s=s||[]).push("style",n);var S=s;(t.updateQueue=S)&&(t.flags|=4)}},cc=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function op(e,t,n){var r=t.pendingProps;switch(Ml(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return ct(t.type)&&lo(),ot(t),null;case 3:return r=t.stateNode,kr(),Se(ut),Se(rt),Zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dt!==null&&(Es(Dt),Dt=null))),xs(e,t),ot(t),null;case 5:Gl(t);var l=Kn(oi.current);if(n=t.type,e!==null&&t.stateNode!=null)uc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return ot(t),null}if(e=Kn(Vt.current),fo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ut]=t,r[ei]=s,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(l=0;l<Xr.length;l++)je(Xr[l],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":Li(r,s),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},je("invalid",r);break;case"textarea":Xt(r,s),je("invalid",r)}ir(n,s),l=null;for(var c in s)if(s.hasOwnProperty(c)){var p=s[c];c==="children"?typeof p=="string"?r.textContent!==p&&(s.suppressHydrationWarning!==!0&&ro(r.textContent,p,e),l=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&ro(r.textContent,p,e),l=["children",""+p]):f.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&je("scroll",r)}switch(n){case"input":Kt(r),zr(r,s,!0);break;case"textarea":Kt(r),Fi(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=io)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=On(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),n==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[Ut]=t,e[ei]=r,ac(e,t,!1,!1),t.stateNode=e;e:{switch(c=Lr(n,r),n){case"dialog":je("cancel",e),je("close",e),l=r;break;case"iframe":case"object":case"embed":je("load",e),l=r;break;case"video":case"audio":for(l=0;l<Xr.length;l++)je(Xr[l],e);l=r;break;case"source":je("error",e),l=r;break;case"img":case"image":case"link":je("error",e),je("load",e),l=r;break;case"details":je("toggle",e),l=r;break;case"input":Li(e,r),l=$t(e,r),je("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=D({},r,{value:void 0}),je("invalid",e);break;case"textarea":Xt(e,r),l=Xe(e,r),je("invalid",e);break;default:l=r}ir(n,l),p=l;for(s in p)if(p.hasOwnProperty(s)){var g=p[s];s==="style"?Ai(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&rr(e,g)):s==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&Ct(e,g):typeof g=="number"&&Ct(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(f.hasOwnProperty(s)?g!=null&&s==="onScroll"&&je("scroll",e):g!=null&&A(e,s,g,c))}switch(n){case"input":Kt(e),zr(e,r,!1);break;case"textarea":Kt(e),Fi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ae(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?dn(e,!!r.multiple,s,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)cc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=Kn(oi.current),Kn(Vt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ut]=t,(s=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=t,t.stateNode=r}return ot(t),null;case 13:if(Se(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&jt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)pu(),xr(),t.flags|=98560,s=!1;else if(s=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(u(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(u(317));s[Ut]=t}else xr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ot(t),s=!1}else Dt!==null&&(Es(Dt),Dt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(_e.current&1)!==0?Ve===0&&(Ve=3):zs())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return kr(),xs(e,t),e===null&&Zr(t.stateNode.containerInfo),ot(t),null;case 10:return Vl(t.type._context),ot(t),null;case 17:return ct(t.type)&&lo(),ot(t),null;case 19:if(Se(_e),s=t.memoizedState,s===null)return ot(t),null;if(r=(t.flags&128)!==0,c=s.rendering,c===null)if(r)ci(s,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=yo(e),c!==null){for(t.flags|=128,ci(s,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(_e,_e.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ae()>br&&(t.flags|=128,r=!0,ci(s,!1),t.lanes=4194304)}else{if(!r)if(e=yo(c),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!be)return ot(t),null}else 2*Ae()-s.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,ci(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n!==null?n.sibling=c:t.child=c,s.last=c)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ae(),t.sibling=null,n=_e.current,we(_e,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return Ns(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(St&1073741824)!==0&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function lp(e,t){switch(Ml(t),t.tag){case 1:return ct(t.type)&&lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),Se(ut),Se(rt),Zl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Gl(t),null;case 13:if(Se(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(_e),null;case 4:return kr(),null;case 10:return Vl(t.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var _o=!1,lt=!1,sp=typeof WeakSet=="function"?WeakSet:Set,$=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function ys(e,t,n){try{n()}catch(r){Re(e,t,r)}}var dc=!1;function ap(e,t){if(Nl=Qi,e=Wa(),jl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var c=0,p=-1,g=-1,S=0,T=0,N=e,E=null;t:for(;;){for(var B;N!==n||l!==0&&N.nodeType!==3||(p=c+l),N!==s||r!==0&&N.nodeType!==3||(g=c+r),N.nodeType===3&&(c+=N.nodeValue.length),(B=N.firstChild)!==null;)E=N,N=B;for(;;){if(N===e)break t;if(E===n&&++S===l&&(p=c),E===s&&++T===r&&(g=c),(B=N.nextSibling)!==null)break;N=E,E=N.parentNode}N=B}n=p===-1||g===-1?null:{start:p,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},Qi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var U=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(U!==null){var V=U.memoizedProps,Be=U.memoizedState,w=t.stateNode,v=w.getSnapshotBeforeUpdate(t.elementType===t.type?V:At(t.type,V),Be);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(R){Re(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return U=dc,dc=!1,U}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&ys(t,n,s)}l=l.next}while(l!==r)}}function Eo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fc(e){var t=e.alternate;t!==null&&(e.alternate=null,fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[ei],delete t[Fl],delete t[Uf],delete t[Vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pc(e){return e.tag===5||e.tag===3||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=io));else if(r!==4&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}var Je=null,Bt=!1;function Nn(e,t,n){for(n=n.child;n!==null;)hc(e,t,n),n=n.sibling}function hc(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Oi,n)}catch{}switch(n.tag){case 5:lt||Sr(n,t);case 6:var r=Je,l=Bt;Je=null,Nn(e,t,n),Je=r,Bt=l,Je!==null&&(Bt?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Bt?(e=Je,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),Wr(e)):Pl(Je,n.stateNode));break;case 4:r=Je,l=Bt,Je=n.stateNode.containerInfo,Bt=!0,Nn(e,t,n),Je=r,Bt=l;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,c=s.destroy;s=s.tag,c!==void 0&&((s&2)!==0||(s&4)!==0)&&ys(n,t,c),l=l.next}while(l!==r)}Nn(e,t,n);break;case 1:if(!lt&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Re(n,t,p)}Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Nn(e,t,n),lt=r):Nn(e,t,n);break;default:Nn(e,t,n)}}function gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sp),t.forEach(function(r){var l=xp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var s=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 5:Je=p.stateNode,Bt=!1;break e;case 3:Je=p.stateNode.containerInfo,Bt=!0;break e;case 4:Je=p.stateNode.containerInfo,Bt=!0;break e}p=p.return}if(Je===null)throw Error(u(160));hc(s,c,l),Je=null,Bt=!1;var g=l.alternate;g!==null&&(g.return=null),l.return=null}catch(S){Re(l,t,S)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xc(t,e),t=t.sibling}function xc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Yt(e),r&4){try{di(3,e,e.return),Eo(3,e)}catch(V){Re(e,e.return,V)}try{di(5,e,e.return)}catch(V){Re(e,e.return,V)}}break;case 1:Mt(t,e),Yt(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(Mt(t,e),Yt(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var l=e.stateNode;try{Ct(l,"")}catch(V){Re(e,e.return,V)}}if(r&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,c=n!==null?n.memoizedProps:s,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&Nr(l,s),Lr(p,c);var S=Lr(p,s);for(c=0;c<g.length;c+=2){var T=g[c],N=g[c+1];T==="style"?Ai(l,N):T==="dangerouslySetInnerHTML"?rr(l,N):T==="children"?Ct(l,N):A(l,T,N,S)}switch(p){case"input":Gt(l,s);break;case"textarea":Pi(l,s);break;case"select":var E=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var B=s.value;B!=null?dn(l,!!s.multiple,B,!1):E!==!!s.multiple&&(s.defaultValue!=null?dn(l,!!s.multiple,s.defaultValue,!0):dn(l,!!s.multiple,s.multiple?[]:"",!1))}l[ei]=s}catch(V){Re(e,e.return,V)}}break;case 6:if(Mt(t,e),Yt(e),r&4){if(e.stateNode===null)throw Error(u(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(V){Re(e,e.return,V)}}break;case 3:if(Mt(t,e),Yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(V){Re(e,e.return,V)}break;case 4:Mt(t,e),Yt(e);break;case 13:Mt(t,e),Yt(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(Cs=Ae())),r&4&&gc(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(S=lt)||T,Mt(t,e),lt=S):Mt(t,e),Yt(e),r&8192){if(S=e.memoizedState!==null,(e.stateNode.isHidden=S)&&!T&&(e.mode&1)!==0)for($=e,T=e.child;T!==null;){for(N=$=T;$!==null;){switch(E=$,B=E.child,E.tag){case 0:case 11:case 14:case 15:di(4,E,E.return);break;case 1:Sr(E,E.return);var U=E.stateNode;if(typeof U.componentWillUnmount=="function"){r=E,n=E.return;try{t=r,U.props=t.memoizedProps,U.state=t.memoizedState,U.componentWillUnmount()}catch(V){Re(r,n,V)}}break;case 5:Sr(E,E.return);break;case 22:if(E.memoizedState!==null){wc(N);continue}}B!==null?(B.return=E,$=B):wc(N)}T=T.sibling}e:for(T=null,N=e;;){if(N.tag===5){if(T===null){T=N;try{l=N.stateNode,S?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=N.stateNode,g=N.memoizedProps.style,c=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=Di("display",c))}catch(V){Re(e,e.return,V)}}}else if(N.tag===6){if(T===null)try{N.stateNode.nodeValue=S?"":N.memoizedProps}catch(V){Re(e,e.return,V)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;T===N&&(T=null),N=N.return}T===N&&(T=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:Mt(t,e),Yt(e),r&4&&gc(e);break;case 21:break;default:Mt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Ct(l,""),r.flags&=-33);var s=mc(e);ks(e,s,l);break;case 3:case 4:var c=r.stateNode.containerInfo,p=mc(e);ws(e,p,c);break;default:throw Error(u(161))}}catch(g){Re(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function up(e,t,n){$=e,yc(e)}function yc(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var l=$,s=l.child;if(l.tag===22&&r){var c=l.memoizedState!==null||_o;if(!c){var p=l.alternate,g=p!==null&&p.memoizedState!==null||lt;p=_o;var S=lt;if(_o=c,(lt=g)&&!S)for($=l;$!==null;)c=$,g=c.child,c.tag===22&&c.memoizedState!==null?kc(l):g!==null?(g.return=c,$=g):kc(l);for(;s!==null;)$=s,yc(s),s=s.sibling;$=l,_o=p,lt=S}vc(e)}else(l.subtreeFlags&8772)!==0&&s!==null?(s.return=l,$=s):vc(e)}}function vc(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:lt||Eo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:At(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&wu(t,s,r);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,c,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var S=t.alternate;if(S!==null){var T=S.memoizedState;if(T!==null){var N=T.dehydrated;N!==null&&Wr(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}lt||t.flags&512&&vs(t)}catch(E){Re(t,t.return,E)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function wc(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function kc(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Eo(4,t)}catch(g){Re(t,n,g)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(g){Re(t,l,g)}}var s=t.return;try{vs(t)}catch(g){Re(t,s,g)}break;case 5:var c=t.return;try{vs(t)}catch(g){Re(t,c,g)}}}catch(g){Re(t,t.return,g)}if(t===e){$=null;break}var p=t.sibling;if(p!==null){p.return=t.return,$=p;break}$=t.return}}var cp=Math.ceil,To=le.ReactCurrentDispatcher,js=le.ReactCurrentOwner,zt=le.ReactCurrentBatchConfig,pe=0,Ke=null,He=null,et=0,St=0,Cr=bn(0),Ve=0,fi=null,Xn=0,No=0,Ss=0,pi=null,ft=null,Cs=0,br=1/0,sn=null,zo=!1,bs=null,zn=null,Ro=!1,Rn=null,Lo=0,mi=0,Is=null,Po=-1,Fo=0;function at(){return(pe&6)!==0?Ae():Po!==-1?Po:Po=Ae()}function Ln(e){return(e.mode&1)===0?1:(pe&2)!==0&&et!==0?et&-et:Yf.transition!==null?(Fo===0&&(Fo=ma()),Fo):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Sa(e.type)),e)}function Ot(e,t,n,r){if(50<mi)throw mi=0,Is=null,Error(u(185));Br(e,n,r),((pe&2)===0||e!==Ke)&&(e===Ke&&((pe&2)===0&&(No|=n),Ve===4&&Pn(e,et)),pt(e,r),n===1&&pe===0&&(t.mode&1)===0&&(br=Ae()+500,ao&&_n()))}function pt(e,t){var n=e.callbackNode;Qd(e,t);var r=Wi(e,e===Ke?et:0);if(r===0)n!==null&&da(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&da(n),t===1)e.tag===0?Qf(Sc.bind(null,e)):au(Sc.bind(null,e)),$f(function(){(pe&6)===0&&_n()}),n=null;else{switch(ha(r)){case 1:n=ol;break;case 4:n=fa;break;case 16:n=Mi;break;case 536870912:n=pa;break;default:n=Mi}n=zc(n,jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jc(e,t){if(Po=-1,Fo=0,(pe&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var r=Wi(e,e===Ke?et:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Do(e,r);else{t=r;var l=pe;pe|=2;var s=bc();(Ke!==e||et!==t)&&(sn=null,br=Ae()+500,Jn(e,t));do try{pp();break}catch(p){Cc(e,p)}while(!0);Ul(),To.current=s,pe=l,He!==null?t=0:(Ke=null,et=0,t=Ve)}if(t!==0){if(t===2&&(l=ll(e),l!==0&&(r=l,t=_s(e,l))),t===1)throw n=fi,Jn(e,0),Pn(e,r),pt(e,Ae()),n;if(t===6)Pn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!dp(l)&&(t=Do(e,r),t===2&&(s=ll(e),s!==0&&(r=s,t=_s(e,s))),t===1))throw n=fi,Jn(e,0),Pn(e,r),pt(e,Ae()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:er(e,ft,sn);break;case 3:if(Pn(e,r),(r&130023424)===r&&(t=Cs+500-Ae(),10<t)){if(Wi(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){at(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ll(er.bind(null,e,ft,sn),t);break}er(e,ft,sn);break;case 4:if(Pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var c=31-Pt(r);s=1<<c,c=t[c],c>l&&(l=c),r&=~s}if(r=l,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cp(r/1960))-r,10<r){e.timeoutHandle=Ll(er.bind(null,e,ft,sn),r);break}er(e,ft,sn);break;case 5:er(e,ft,sn);break;default:throw Error(u(329))}}}return pt(e,Ae()),e.callbackNode===n?jc.bind(null,e):null}function _s(e,t){var n=pi;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=Do(e,t),e!==2&&(t=ft,ft=n,t!==null&&Es(t)),e}function Es(e){ft===null?ft=e:ft.push.apply(ft,e)}function dp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],s=l.getSnapshot;l=l.value;try{if(!Ft(s(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t){for(t&=~Ss,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function Sc(e){if((pe&6)!==0)throw Error(u(327));Ir();var t=Wi(e,0);if((t&1)===0)return pt(e,Ae()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=ll(e);r!==0&&(t=r,n=_s(e,r))}if(n===1)throw n=fi,Jn(e,0),Pn(e,t),pt(e,Ae()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,ft,sn),pt(e,Ae()),null}function Ts(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(br=Ae()+500,ao&&_n())}}function Zn(e){Rn!==null&&Rn.tag===0&&(pe&6)===0&&Ir();var t=pe;pe|=1;var n=zt.transition,r=ge;try{if(zt.transition=null,ge=1,e)return e()}finally{ge=r,zt.transition=n,pe=t,(pe&6)===0&&_n()}}function Ns(){St=Cr.current,Se(Cr)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hf(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Ml(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:kr(),Se(ut),Se(rt),Zl();break;case 5:Gl(r);break;case 4:kr();break;case 13:Se(_e);break;case 19:Se(_e);break;case 10:Vl(r.type._context);break;case 22:case 23:Ns()}n=n.return}if(Ke=e,He=e=Fn(e.current,null),et=St=t,Ve=0,fi=null,Ss=No=Xn=0,ft=pi=null,qn!==null){for(t=0;t<qn.length;t++)if(n=qn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,s=n.pending;if(s!==null){var c=s.next;s.next=l,r.next=c}n.pending=r}qn=null}return e}function Cc(e,t){do{var n=He;try{if(Ul(),vo.current=So,wo){for(var r=Ee.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}wo=!1}if(Gn=0,qe=Ue=Ee=null,li=!1,si=0,js.current=null,n===null||n.return===null){Ve=1,fi=t,He=null;break}e:{var s=e,c=n.return,p=n,g=t;if(t=et,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var S=g,T=p,N=T.tag;if((T.mode&1)===0&&(N===0||N===11||N===15)){var E=T.alternate;E?(T.updateQueue=E.updateQueue,T.memoizedState=E.memoizedState,T.lanes=E.lanes):(T.updateQueue=null,T.memoizedState=null)}var B=Ku(c);if(B!==null){B.flags&=-257,Gu(B,c,p,s,t),B.mode&1&&qu(s,S,t),t=B,g=S;var U=t.updateQueue;if(U===null){var V=new Set;V.add(g),t.updateQueue=V}else U.add(g);break e}else{if((t&1)===0){qu(s,S,t),zs();break e}g=Error(u(426))}}else if(be&&p.mode&1){var Be=Ku(c);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),Gu(Be,c,p,s,t),$l(jr(g,p));break e}}s=g=jr(g,p),Ve!==4&&(Ve=2),pi===null?pi=[s]:pi.push(s),s=c;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var w=Qu(s,g,t);vu(s,w);break e;case 1:p=g;var v=s.type,k=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(zn===null||!zn.has(k)))){s.flags|=65536,t&=-t,s.lanes|=t;var R=Yu(s,p,t);vu(s,R);break e}}s=s.return}while(s!==null)}_c(n)}catch(Y){t=Y,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function bc(){var e=To.current;return To.current=So,e===null?So:e}function zs(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ke===null||(Xn&268435455)===0&&(No&268435455)===0||Pn(Ke,et)}function Do(e,t){var n=pe;pe|=2;var r=bc();(Ke!==e||et!==t)&&(sn=null,Jn(e,t));do try{fp();break}catch(l){Cc(e,l)}while(!0);if(Ul(),pe=n,To.current=r,He!==null)throw Error(u(261));return Ke=null,et=0,Ve}function fp(){for(;He!==null;)Ic(He)}function pp(){for(;He!==null&&!Ad();)Ic(He)}function Ic(e){var t=Nc(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?_c(e):He=t,js.current=null}function _c(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=op(n,t,St),n!==null){He=n;return}}else{if(n=lp(n,t),n!==null){n.flags&=32767,He=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,He=null;return}}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);Ve===0&&(Ve=5)}function er(e,t,n){var r=ge,l=zt.transition;try{zt.transition=null,ge=1,mp(e,t,n,r)}finally{zt.transition=l,ge=r}return null}function mp(e,t,n,r){do Ir();while(Rn!==null);if((pe&6)!==0)throw Error(u(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yd(e,s),e===Ke&&(He=Ke=null,et=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ro||(Ro=!0,zc(Mi,function(){return Ir(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=zt.transition,zt.transition=null;var c=ge;ge=1;var p=pe;pe|=4,js.current=null,ap(e,n),xc(n,e),Pf(zl),Qi=!!Nl,zl=Nl=null,e.current=n,up(n),Bd(),pe=p,ge=c,zt.transition=s}else e.current=n;if(Ro&&(Ro=!1,Rn=e,Lo=l),s=e.pendingLanes,s===0&&(zn=null),Hd(n.stateNode),pt(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(zo)throw zo=!1,e=bs,bs=null,e;return(Lo&1)!==0&&e.tag!==0&&Ir(),s=e.pendingLanes,(s&1)!==0?e===Is?mi++:(mi=0,Is=e):mi=0,_n(),null}function Ir(){if(Rn!==null){var e=ha(Lo),t=zt.transition,n=ge;try{if(zt.transition=null,ge=16>e?16:e,Rn===null)var r=!1;else{if(e=Rn,Rn=null,Lo=0,(pe&6)!==0)throw Error(u(331));var l=pe;for(pe|=4,$=e.current;$!==null;){var s=$,c=s.child;if(($.flags&16)!==0){var p=s.deletions;if(p!==null){for(var g=0;g<p.length;g++){var S=p[g];for($=S;$!==null;){var T=$;switch(T.tag){case 0:case 11:case 15:di(8,T,s)}var N=T.child;if(N!==null)N.return=T,$=N;else for(;$!==null;){T=$;var E=T.sibling,B=T.return;if(fc(T),T===S){$=null;break}if(E!==null){E.return=B,$=E;break}$=B}}}var U=s.alternate;if(U!==null){var V=U.child;if(V!==null){U.child=null;do{var Be=V.sibling;V.sibling=null,V=Be}while(V!==null)}}$=s}}if((s.subtreeFlags&2064)!==0&&c!==null)c.return=s,$=c;else e:for(;$!==null;){if(s=$,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:di(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,$=w;break e}$=s.return}}var v=e.current;for($=v;$!==null;){c=$;var k=c.child;if((c.subtreeFlags&2064)!==0&&k!==null)k.return=c,$=k;else e:for(c=v;$!==null;){if(p=$,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Eo(9,p)}}catch(Y){Re(p,p.return,Y)}if(p===c){$=null;break e}var R=p.sibling;if(R!==null){R.return=p.return,$=R;break e}$=p.return}}if(pe=l,_n(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Oi,e)}catch{}r=!0}return r}finally{ge=n,zt.transition=t}}return!1}function Ec(e,t,n){t=jr(n,t),t=Qu(e,t,1),e=Tn(e,t,1),t=at(),e!==null&&(Br(e,1,t),pt(e,t))}function Re(e,t,n){if(e.tag===3)Ec(e,e,n);else for(;t!==null;){if(t.tag===3){Ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=jr(n,e),e=Yu(t,e,1),t=Tn(t,e,1),e=at(),t!==null&&(Br(t,1,e),pt(t,e));break}}t=t.return}}function hp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(et&n)===n&&(Ve===4||Ve===3&&(et&130023424)===et&&500>Ae()-Cs?Jn(e,0):Ss|=n),pt(e,t)}function Tc(e,t){t===0&&((e.mode&1)===0?t=1:(t=$i,$i<<=1,($i&130023424)===0&&($i=4194304)));var n=at();e=rn(e,t),e!==null&&(Br(e,t,n),pt(e,n))}function gp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tc(e,n)}function xp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Tc(e,n)}var Nc;Nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)dt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return dt=!1,ip(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,be&&(t.flags&1048576)!==0&&uu(t,co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Io(e,t),e=t.pendingProps;var l=mr(t,rt.current);wr(t,n),l=ts(null,t,r,e,l,n);var s=ns();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(s=!0,so(t)):s=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ql(t),l.updater=Co,t.stateNode=l,l._reactInternals=t,as(t,r,e,n),t=fs(null,t,r,!0,s,n)):(t.tag=0,be&&s&&Bl(t),st(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=vp(r),e=At(r,e),l){case 0:t=ds(null,t,r,e,n);break e;case 1:t=nc(null,t,r,e,n);break e;case 11:t=Xu(null,t,r,e,n);break e;case 14:t=Zu(null,t,r,At(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:At(r,l),ds(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:At(r,l),nc(e,t,r,l,n);case 3:e:{if(rc(t),e===null)throw Error(u(387));r=t.pendingProps,s=t.memoizedState,l=s.element,yu(e,t),xo(t,r,null,n);var c=t.memoizedState;if(r=c.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){l=jr(Error(u(423)),t),t=ic(e,t,r,n,l);break e}else if(r!==l){l=jr(Error(u(424)),t),t=ic(e,t,r,n,l);break e}else for(jt=Cn(t.stateNode.containerInfo.firstChild),kt=t,be=!0,Dt=null,n=gu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===l){t=ln(e,t,n);break e}st(e,t,r,n)}t=t.child}return t;case 5:return ku(t),e===null&&Hl(t),r=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,c=l.children,Rl(r,l)?c=null:s!==null&&Rl(r,s)&&(t.flags|=32),tc(e,t),st(e,t,c,n),t.child;case 6:return e===null&&Hl(t),null;case 13:return oc(e,t,n);case 4:return Kl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yr(t,null,r,n):st(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:At(r,l),Xu(e,t,r,l,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,s=t.memoizedProps,c=l.value,we(mo,r._currentValue),r._currentValue=c,s!==null)if(Ft(s.value,c)){if(s.children===l.children&&!ut.current){t=ln(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){c=s.child;for(var g=p.firstContext;g!==null;){if(g.context===r){if(s.tag===1){g=on(-1,n&-n),g.tag=2;var S=s.updateQueue;if(S!==null){S=S.shared;var T=S.pending;T===null?g.next=g:(g.next=T.next,T.next=g),S.pending=g}}s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Ql(s.return,n,t),p.lanes|=n;break}g=g.next}}else if(s.tag===10)c=s.type===t.type?null:s.child;else if(s.tag===18){if(c=s.return,c===null)throw Error(u(341));c.lanes|=n,p=c.alternate,p!==null&&(p.lanes|=n),Ql(c,n,t),c=s.sibling}else c=s.child;if(c!==null)c.return=s;else for(c=s;c!==null;){if(c===t){c=null;break}if(s=c.sibling,s!==null){s.return=c.return,c=s;break}c=c.return}s=c}st(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,wr(t,n),l=Tt(l),r=r(l),t.flags|=1,st(e,t,r,n),t.child;case 14:return r=t.type,l=At(r,t.pendingProps),l=At(r.type,l),Zu(e,t,r,l,n);case 15:return Ju(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:At(r,l),Io(e,t),t.tag=1,ct(r)?(e=!0,so(t)):e=!1,wr(t,n),Uu(t,r,l),as(t,r,l,n),fs(null,t,r,!0,e,n);case 19:return sc(e,t,n);case 22:return ec(e,t,n)}throw Error(u(156,t.tag))};function zc(e,t){return ca(e,t)}function yp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,r){return new yp(e,t,n,r)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vp(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===Ce)return 14}return 2}function Fn(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ao(e,t,n,r,l,s){var c=2;if(r=e,typeof e=="function")Rs(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case ye:return tr(n.children,l,s,t);case Ie:c=8,l|=8;break;case Fe:return e=Rt(12,n,t,l|2),e.elementType=Fe,e.lanes=s,e;case Ne:return e=Rt(13,n,t,l),e.elementType=Ne,e.lanes=s,e;case Qe:return e=Rt(19,n,t,l),e.elementType=Qe,e.lanes=s,e;case ce:return Bo(n,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:c=10;break e;case ve:c=9;break e;case Te:c=11;break e;case Ce:c=14;break e;case te:c=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=Rt(c,n,t,l),t.elementType=e,t.type=r,t.lanes=s,t}function tr(e,t,n,r){return e=Rt(7,e,r,t),e.lanes=n,e}function Bo(e,t,n,r){return e=Rt(22,e,r,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function Ls(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function Ps(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Fs(e,t,n,r,l,s,c,p,g){return e=new wp(e,t,n,p,g),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Rt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(s),e}function kp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rc(e){if(!e)return In;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(ct(n))return lu(e,n,t)}return t}function Lc(e,t,n,r,l,s,c,p,g){return e=Fs(n,r,!0,e,l,s,c,p,g),e.context=Rc(null),n=e.current,r=at(),l=Ln(n),s=on(r,l),s.callback=t??null,Tn(n,s,l),e.current.lanes=l,Br(e,l,r),pt(e,r),e}function Mo(e,t,n,r){var l=t.current,s=at(),c=Ln(l);return n=Rc(n),t.context===null?t.context=n:t.pendingContext=n,t=on(s,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tn(l,t,c),e!==null&&(Ot(e,l,c,s),go(e,l,c)),c}function Oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ds(e,t){Pc(e,t),(e=e.alternate)&&Pc(e,t)}function jp(){return null}var Fc=typeof reportError=="function"?reportError:function(e){console.error(e)};function As(e){this._internalRoot=e}Ho.prototype.render=As.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Mo(e,t,null,null)},Ho.prototype.unmount=As.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){Mo(null,e,null,null)}),t[Jt]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=ya();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&ka(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function Sp(e,t,n,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var S=Oo(c);s.call(S)}}var c=Lc(t,r,e,0,null,!1,!1,"",Dc);return e._reactRootContainer=c,e[Jt]=c.current,Zr(e.nodeType===8?e.parentNode:e),Zn(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var p=r;r=function(){var S=Oo(g);p.call(S)}}var g=Fs(e,0,!1,null,null,!1,!1,"",Dc);return e._reactRootContainer=g,e[Jt]=g.current,Zr(e.nodeType===8?e.parentNode:e),Zn(function(){Mo(t,g,n,r)}),g}function Wo(e,t,n,r,l){var s=n._reactRootContainer;if(s){var c=s;if(typeof l=="function"){var p=l;l=function(){var g=Oo(c);p.call(g)}}Mo(t,c,e,l)}else c=Sp(n,t,e,l,r);return Oo(c)}ga=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(al(t,n|1),pt(t,Ae()),(pe&6)===0&&(br=Ae()+500,_n()))}break;case 13:Zn(function(){var r=rn(e,1);if(r!==null){var l=at();Ot(r,e,1,l)}}),Ds(e,1)}},ul=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=at();Ot(t,e,134217728,n)}Ds(e,134217728)}},xa=function(e){if(e.tag===13){var t=Ln(e),n=rn(e,t);if(n!==null){var r=at();Ot(n,e,t,r)}Ds(e,t)}},ya=function(){return ge},va=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},Pr=function(e,t,n){switch(t){case"input":if(Gt(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=oo(r);if(!l)throw Error(u(90));cn(r),Gt(r,l)}}}break;case"textarea":Pi(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}},We=Ts,nt=Zn;var Cp={usingClientEntryPoint:!1,Events:[ti,fr,oo,oe,De,Ts]},hi={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bp={bundleType:hi.bundleType,version:hi.version,rendererPackageName:hi.rendererPackageName,rendererConfig:hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=aa(e),e===null?null:e.stateNode},findFiberByHostInstance:hi.findFiberByHostInstance||jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{Oi=Uo.inject(bp),Wt=Uo}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp,mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(t))throw Error(u(200));return kp(e,t,null,n)},mt.createRoot=function(e,t){if(!Bs(e))throw Error(u(299));var n=!1,r="",l=Fc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Fs(e,1,!1,null,null,n,!1,r,l),e[Jt]=t.current,Zr(e.nodeType===8?e.parentNode:e),new As(t)},mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=aa(t),e=e===null?null:e.stateNode,e},mt.flushSync=function(e){return Zn(e)},mt.hydrate=function(e,t,n){if(!$o(t))throw Error(u(200));return Wo(null,e,t,!0,n)},mt.hydrateRoot=function(e,t,n){if(!Bs(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,l=!1,s="",c=Fc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=Lc(t,null,e,1,n??null,l,!1,s,c),e[Jt]=t.current,Zr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ho(t)},mt.render=function(e,t,n){if(!$o(t))throw Error(u(200));return Wo(null,e,t,!1,n)},mt.unmountComponentAtNode=function(e){if(!$o(e))throw Error(u(40));return e._reactRootContainer?(Zn(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1},mt.unstable_batchedUpdates=Ts,mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$o(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Wo(e,t,n,!1,r)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var Uc;function od(){if(Uc)return Hs.exports;Uc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),Hs.exports=Rp(),Hs.exports}var Vc;function Lp(){if(Vc)return Vo;Vc=1;var o=od();return Vo.createRoot=o.createRoot,Vo.hydrateRoot=o.hydrateRoot,Vo}var Pp=Lp();function $e({label:o,variant:a="neutral",size:u="md"}){const d=u==="sm"?{height:"24px",paddingLeft:"10px",paddingRight:"10px",fontSize:"12px",lineHeight:"18px",fontWeight:"500"}:{height:"28px",paddingLeft:"12px",paddingRight:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600"},f=a==="neutral"?{backgroundColor:"var(--card)",dotColor:"var(--muted-foreground)",textColor:"var(--foreground)"}:{backgroundColor:"var(--accent)",dotColor:"var(--primary)",textColor:"var(--accent-foreground)"};return i.jsxs("div",{style:{height:d.height,paddingLeft:d.paddingLeft,paddingRight:d.paddingRight,borderRadius:"999px",gap:"8px",backgroundColor:f.backgroundColor,border:"1px solid var(--border)",display:"inline-flex",alignItems:"center"},children:[i.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:f.dotColor}}),i.jsx("span",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:d.fontSize,lineHeight:d.lineHeight,fontWeight:d.fontWeight,color:f.textColor},children:o})]})}function Pe({label:o,variant:a="primary",size:u="md",onClick:d,disabled:f=!1,fullWidth:m=!1}){const h={sm:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}}[u],j={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"var(--card)",color:"var(--foreground)",border:"1px solid var(--border)"},ghost:{backgroundColor:"transparent",color:"var(--foreground)",border:"none"}}[a];return i.jsx("button",{onClick:d,disabled:f,style:{height:h.height,paddingLeft:h.paddingLeft,paddingRight:h.paddingRight,borderRadius:h.borderRadius,backgroundColor:f?"var(--muted)":j.backgroundColor,color:j.color,fontSize:h.fontSize,lineHeight:h.lineHeight,fontWeight:"600",border:f?"1px solid var(--border)":j.border,display:"inline-flex",alignItems:"center",justifyContent:"center",width:m?"100%":"auto",cursor:f?"not-allowed":"pointer",fontFamily:"Inter, system-ui, sans-serif",opacity:f?.65:1},children:o})}const Fp="/assets/Big%20Logo-Bdh1LtUa.svg",Dp="/assets/Logo%20Dark-BJGV7fxC.svg",Ap="2026-03-10-1";function ld({size:o=32,variant:a="dark",showText:u=!0,href:d="/"}){const f=a==="light"?Dp:Fp,m=a==="dark"?"#101828":"#FFFFFF",h=i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[i.jsx("div",{style:{width:`${o}px`,height:`${o}px`,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx("img",{src:`${f}?v=${Ap}`,alt:"Vibe Station Logo",width:o,height:o,style:{width:`${o}px`,height:`${o}px`,objectFit:"contain",display:"block"}})}),u&&i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:o>=48?"24px":o>=32?"20px":"16px",lineHeight:o>=48?"32px":o>=32?"28px":"24px",fontWeight:"600",letterSpacing:"-0.02em",color:m},children:"VIBE STATION"})]});return d?i.jsx("a",{href:d,style:{textDecoration:"none",display:"inline-flex",cursor:"pointer"},children:h}):h}const Bp="w-full mx-auto px-4 md:px-6 lg:px-8",Mp={wide:"max-w-[1200px]",standard:"max-w-[1080px]",narrow:"max-w-[860px]"};function Op(o,a){return[Bp,Mp[o],a].filter(Boolean).join(" ")}function tl({children:o,width:a="wide",className:u}){return i.jsx("div",{className:Op(a,u),children:o})}function Hp({children:o,className:a}){return i.jsx(tl,{width:"wide",className:a,children:o})}function $p({children:o,className:a}){return i.jsx(tl,{width:"standard",className:a,children:o})}function Wp({children:o,className:a}){return i.jsx(tl,{width:"narrow",className:a,children:o})}const he=Object.assign(tl,{Wide:Hp,Standard:$p,Narrow:Wp}),sd="kz9z4f-2a.myshopify.com",ad="daf156f4e4046c726902bca5c28e9cbe",Up="2026-01",ud="http://localhost:3001",ki="/api/shopify",Vp="false".toLowerCase()==="true",Qp="X-Shopify-Storefront-Access-Token",Gs="IN".toUpperCase(),cd="EN".toUpperCase(),Yp=`https://${sd}/api/${Up}/graphql.json`,dd="shopify_cart_id";class Ht extends Error{constructor(a,u,d){super(a),this.code=u,this.field=d,this.name="StorefrontAPIError"}}const fd=()=>ad.length>0,qp=()=>sd.length>0,Kp=()=>ud.length>0&&ki.length>0,Gp=()=>ki.startsWith("http://")||ki.startsWith("https://")?ki:`${ud.replace(/\/+$/,"")}/${ki.replace(/^\/+/,"")}`,pd=()=>Vp||!fd()&&Kp(),Xp=()=>pd()?!0:qp()&&fd();async function An(o,a={}){if(!Xp())throw new Ht("Shopify is not configured","SHOPIFY_NOT_CONFIGURED");let u;if(pd()?u=await fetch(Gp(),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({query:o,variables:a})}):u=await fetch(Yp,{method:"POST",headers:{"Content-Type":"application/json",[Qp]:ad},body:JSON.stringify({query:o,variables:a})}),!u.ok)throw u.status===429?new Ht("Rate limit exceeded","RATE_LIMIT"):new Ht(`HTTP ${u.status}`,"HTTP_ERROR");const{data:d,errors:f}=await u.json();if(f&&f.length>0)throw new Ht(f[0].message,"GRAPHQL_ERROR",f[0].field);if(!d)throw new Ht("Missing response data","EMPTY_DATA");return d}function nl(o){var d,f,m;const a=o.featuredImage;if(a!=null&&a.url)return{url:a.url,altText:a.altText||o.title||"Product image"};const u=(m=(f=(d=o.images)==null?void 0:d.edges)==null?void 0:f[0])==null?void 0:m.node;return u!=null&&u.url?{url:u.url,altText:u.altText||o.title||"Product image"}:null}const Zp=`
  id
  handle
  title
  description
  descriptionHtml
  tags
  priceRange {
    minVariantPrice {
      amount
      currencyCode
    }
  }
  compareAtPriceRange {
    minVariantPrice {
      amount
      currencyCode
    }
  }
  featuredImage {
    url
    altText
    width
    height
  }
  images(first: 1) {
    edges {
      node {
        url
        altText
      }
    }
  }
  availableForSale
  totalInventory
  variants(first: 1) {
    edges {
      node {
        id
        availableForSale
        quantityAvailable
      }
    }
  }
  featureLine: metafield(namespace: "custom", key: "feature_line") {
    value
  }
  categories: metafield(namespace: "custom", key: "categories") {
    value
    type
  }
  badge: metafield(namespace: "custom", key: "badge_label") {
    value
  }
  shortDescription: metafield(namespace: "custom", key: "short_description") {
    value
  }
  shippingInfo: metafield(namespace: "custom", key: "shipping_snippet") {
    value
  }
`,md=`@inContext(country: ${Gs}, language: ${cd})`,Jp=`
  query ProductList(
    $first: Int = 24
    $after: String
    $sortKey: ProductSortKeys = BEST_SELLING
    $reverse: Boolean = false
    $query: String
  ) ${md} {
    products(first: $first, after: $after, sortKey: $sortKey, reverse: $reverse, query: $query) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          ${Zp}
        }
      }
    }
  }
`,em=`
  query ProductDetail($handle: String!) ${md} {
    product(handle: $handle) {
      id
      handle
      title
      vendor
      onlineStoreUrl
      description
      descriptionHtml
      tags
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      compareAtPriceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      availableForSale
      totalInventory
      images(first: 10) {
        edges {
          node {
            id
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 50) {
        edges {
          node {
            id
            title
            sku
            availableForSale
            quantityAvailable
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            image {
              url
              altText
            }
          }
        }
      }
      options {
        id
        name
        values
      }
      subtitle: metafield(namespace: "custom", key: "subtitle") {
        value
      }
      category: metafield(namespace: "shopify", key: "category") {
        value
        type
      }
      featureLine: metafield(namespace: "custom", key: "feature_line") {
        value
      }
      categories: metafield(namespace: "custom", key: "categories") {
        value
        type
      }
      badge: metafield(namespace: "custom", key: "badge_label") {
        value
      }
      shortDescription: metafield(namespace: "custom", key: "short_description") {
        value
      }
      shippingInfo: metafield(namespace: "custom", key: "shipping_snippet") {
        value
      }
      bulletFeatures: metafield(namespace: "custom", key: "bullet_features") {
        value
        type
      }
      whatsInBox: metafield(namespace: "custom", key: "what_s_in_the_box") {
        value
        type
      }
      specifications: metafield(namespace: "custom", key: "specifications") {
        value
        type
      }
      deliveryInfo: metafield(namespace: "custom", key: "delivery_info") {
        value
      }
      returnsPolicy: metafield(namespace: "custom", key: "return_policy") {
        value
      }
      supportInfo: metafield(namespace: "custom", key: "support_info") {
        value
      }
      whyDifferent: metafield(namespace: "custom", key: "why_it_feels_different") {
        value
        type
      }
      buyingGuide: metafield(namespace: "custom", key: "buying_guide") {
        value
        type
      }
      countryOfOrigin: metafield(namespace: "custom", key: "country_of_origin") {
        value
      }
      careInstructions: metafield(namespace: "custom", key: "care_instruction") {
        value
      }
      gstInvoice: metafield(namespace: "custom", key: "gst_invoice") {
        value
      }
      faq: metafield(namespace: "custom", key: "faq") {
        value
        type
      }
      reviewSummary: metafield(namespace: "custom", key: "reviews") {
        value
        type
      }
      curatedFor: metafield(namespace: "custom", key: "curated_for") {
        value
      }
      notFor: metafield(namespace: "custom", key: "not_for") {
        value
      }
      dispatchTime: metafield(namespace: "custom", key: "dispatch_time") {
        value
      }
      deliveryWindow: metafield(namespace: "custom", key: "delivery_window") {
        value
      }
      replacementPolicy: metafield(namespace: "custom", key: "replacement_policy") {
        value
      }
      supportResponseTime: metafield(namespace: "custom", key: "support_response_time") {
        value
      }
      codAvailable: metafield(namespace: "custom", key: "cod_available") {
        value
      }
      packCount: metafield(namespace: "custom", key: "pack_count") {
        value
      }
      bestFor: metafield(namespace: "custom", key: "best_for") {
        value
      }
      secureCheckout: metafield(namespace: "custom", key: "secure_checkout") {
        value
      }
      ctaLabel: metafield(namespace: "custom", key: "cta_label") {
        value
      }
      ctaSubtext: metafield(namespace: "custom", key: "cta_subtext") {
        value
      }
      seo {
        title
        description
      }
    }
  }
`,Er=`
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount {
      amount
      currencyCode
    }
    totalAmount {
      amount
      currencyCode
    }
    totalTaxAmount {
      amount
      currencyCode
    }
  }
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            title
            product {
              id
              title
              handle
              featuredImage {
                url
                altText
              }
            }
            price {
              amount
              currencyCode
            }
            image {
              url
              altText
            }
            selectedOptions {
              name
              value
            }
            availableForSale
          }
        }
      }
    }
  }
`,tm=`
  mutation CartCreate($input: CartInput!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ${Er}
      }
      userErrors {
        field
        message
      }
    }
  }
`,nm=`
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${Er}
      }
      userErrors {
        field
        message
      }
    }
  }
`,rm=`
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${Er}
      }
      userErrors {
        field
        message
      }
    }
  }
`,im=`
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ${Er}
      }
      userErrors {
        field
        message
      }
    }
  }
`,om=`
  query Cart($id: ID!) {
    cart(id: $id) {
      ${Er}
    }
  }
`,lm=`
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ${Er}
      }
      userErrors {
        field
        message
      }
    }
  }
`,rl=(o,a)=>{const u=o[a];if(u.userErrors.length>0){const d=u.userErrors[0];throw new Ht(d.message,"CART_USER_ERROR",d.field)}if(!u.cart)throw new Ht("Cart was not returned by Shopify","MISSING_CART");return u.cart};async function sm(o){return(await An(em,{handle:o})).product}async function Ei(o={}){const a=typeof o=="number"?{first:o}:o;return(await An(Jp,{first:a.first??24,after:a.after??null,sortKey:a.sortKey??"BEST_SELLING",reverse:a.reverse??!1,query:a.query})).products}async function am(o=[]){const a=await An(tm,{input:{lines:o,buyerIdentity:{countryCode:Gs}},country:Gs,language:cd});return rl(a,"cartCreate")}async function um(o,a){const u=await An(nm,{cartId:o,lines:a});return rl(u,"cartLinesAdd")}async function cm(o,a){const u=await An(rm,{cartId:o,lines:a});return rl(u,"cartLinesUpdate")}async function dm(o,a){const u=await An(im,{cartId:o,lineIds:a});return rl(u,"cartLinesRemove")}async function fm(o){return(await An(om,{id:o})).cart}async function pm(o,a){const d=(await An(lm,{cartId:o,buyerIdentity:a})).cartBuyerIdentityUpdate;if(d.userErrors.length>0){const f=d.userErrors[0];throw new Ht(f.message,"CART_USER_ERROR",f.field)}if(!d.cart)throw new Ht("Cart was not returned by Shopify","MISSING_CART");return d.cart}const mm=()=>typeof window>"u"?null:window.localStorage.getItem(dd),hm=o=>{typeof window>"u"||window.localStorage.setItem(dd,o)};function gm(){return O.useCallback((o=[])=>am(o),[])}function xm(){return O.useCallback((o,a)=>um(o,a),[])}function ym(){return O.useCallback((o,a)=>cm(o,a),[])}function vm(){return O.useCallback((o,a)=>dm(o,a),[])}const hd=O.createContext(null),wm="IN".toUpperCase(),km=o=>o.lines.edges.map(a=>{var d,f,m,h,j;const u=a.node;return{id:u.id,name:u.merchandise.product.title,variant:((d=u.merchandise.selectedOptions)==null?void 0:d.map(I=>`${I.name}: ${I.value}`).join(", "))||u.merchandise.title,price:Number.parseFloat(u.merchandise.price.amount),quantity:u.quantity,variantId:u.merchandise.id,imageUrl:((f=u.merchandise.image)==null?void 0:f.url)||((m=u.merchandise.product.featuredImage)==null?void 0:m.url),imageAlt:((h=u.merchandise.image)==null?void 0:h.altText)||((j=u.merchandise.product.featuredImage)==null?void 0:j.altText)||u.merchandise.product.title}});function jm({children:o}){const[a,u]=O.useState([]),[d,f]=O.useState(!1),[m,h]=O.useState(null),[j,I]=O.useState(null),C=gm(),z=xm(),y=ym(),_=vm(),F=O.useCallback(Q=>{u(km(Q)),h(Q.id),I(Q.checkoutUrl),hm(Q.id)},[]);O.useEffect(()=>{let Q=!1;return(async()=>{try{const A=mm();if(A){const K=await fm(A);if(K&&!Q){F(K);return}}const le=await C();Q||F(le)}catch(A){Q||console.error("Failed to initialize Shopify cart",A)}})(),()=>{Q=!0}},[C,F]);const ee=O.useMemo(()=>a.reduce((Q,X)=>Q+X.quantity,0),[a]),re=O.useMemo(()=>a.reduce((Q,X)=>Q+X.price*X.quantity,0),[a]),M={items:a,isDrawerOpen:d,cartCount:ee,subtotal:re,total:re,checkoutUrl:j,addItem:async Q=>{try{let X=m;if(!X){const K=await C();F(K),X=K.id}const A=a.find(K=>K.variantId===Q),le=A?await y(X,[{id:A.id,quantity:A.quantity+1}]):await z(X,[{merchandiseId:Q,quantity:1}]);return F(le),f(!0),!0}catch(X){return console.error("Failed to add item to cart",X),!1}},checkout:async()=>{try{let Q=m,X=j;if(!Q){const le=await C();F(le),Q=le.id,X=le.checkoutUrl}const A=await pm(Q,{countryCode:wm});F(A),window.location.href=A.checkoutUrl}catch(Q){console.error("Failed to update buyer identity before checkout",Q),window.location.href=latestCheckoutUrl||"/cart"}},openCartDrawer:()=>f(!0),closeCartDrawer:()=>f(!1),toggleCartDrawer:()=>f(Q=>!Q),incrementItem:Q=>{if(!m)return;const X=a.find(A=>A.id===Q);X&&y(m,[{id:X.id,quantity:X.quantity+1}]).then(F).catch(A=>{console.error("Failed to increment cart line",A)})},decrementItem:Q=>{if(!m)return;const X=a.find(A=>A.id===Q);if(X){if(X.quantity<=1){_(m,[X.id]).then(F).catch(A=>{console.error("Failed to decrement cart line",A)});return}y(m,[{id:X.id,quantity:X.quantity-1}]).then(F).catch(A=>{console.error("Failed to decrement cart line",A)})}},removeItem:Q=>{m&&_(m,[Q]).then(F).catch(X=>{console.error("Failed to remove cart line",X)})}};return i.jsx(hd.Provider,{value:M,children:o})}function Bn(){const o=O.useContext(hd);if(!o)throw new Error("useCart must be used within a CartProvider.");return o}function Ti(o){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(o)}var Sm=(o,a,u,d,f,m,h,j)=>{let I=document.documentElement,C=["light","dark"];function z(F){(Array.isArray(o)?o:[o]).forEach(ee=>{let re=ee==="class",M=re&&m?f.map(Q=>m[Q]||Q):f;re?(I.classList.remove(...M),I.classList.add(m&&m[F]?m[F]:F)):I.setAttribute(ee,F)}),y(F)}function y(F){j&&C.includes(F)&&(I.style.colorScheme=F)}function _(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(d)z(d);else try{let F=localStorage.getItem(a)||u,ee=h&&F==="system"?_():F;z(ee)}catch{}},Qc=["light","dark"],gd="(prefers-color-scheme: dark)",Cm=typeof window>"u",ia=O.createContext(void 0),bm={setTheme:o=>{},themes:[]},oa=()=>{var o;return(o=O.useContext(ia))!=null?o:bm},Im=o=>O.useContext(ia)?O.createElement(O.Fragment,null,o.children):O.createElement(Em,{...o}),_m=["light","dark"],Em=({forcedTheme:o,disableTransitionOnChange:a=!1,enableSystem:u=!0,enableColorScheme:d=!0,storageKey:f="theme",themes:m=_m,defaultTheme:h=u?"system":"light",attribute:j="data-theme",value:I,children:C,nonce:z,scriptProps:y})=>{let[_,F]=O.useState(()=>Nm(f,h)),[ee,re]=O.useState(()=>_==="system"?Us():_),M=I?Object.values(I):m,Q=O.useCallback(K=>{let se=K;if(!se)return;K==="system"&&u&&(se=Us());let ye=I?I[se]:se,Ie=a?zm(z):null,Fe=document.documentElement,Me=ve=>{ve==="class"?(Fe.classList.remove(...M),ye&&Fe.classList.add(ye)):ve.startsWith("data-")&&(ye?Fe.setAttribute(ve,ye):Fe.removeAttribute(ve))};if(Array.isArray(j)?j.forEach(Me):Me(j),d){let ve=Qc.includes(h)?h:null,Te=Qc.includes(se)?se:ve;Fe.style.colorScheme=Te}Ie==null||Ie()},[z]),X=O.useCallback(K=>{let se=typeof K=="function"?K(_):K;F(se);try{localStorage.setItem(f,se)}catch{}},[_]),A=O.useCallback(K=>{let se=Us(K);re(se),_==="system"&&u&&!o&&Q("system")},[_,o]);O.useEffect(()=>{let K=window.matchMedia(gd);return K.addListener(A),A(K),()=>K.removeListener(A)},[A]),O.useEffect(()=>{let K=se=>{se.key===f&&(se.newValue?F(se.newValue):X(h))};return window.addEventListener("storage",K),()=>window.removeEventListener("storage",K)},[X]),O.useEffect(()=>{Q(o??_)},[o,_]);let le=O.useMemo(()=>({theme:_,setTheme:X,forcedTheme:o,resolvedTheme:_==="system"?ee:_,themes:u?[...m,"system"]:m,systemTheme:u?ee:void 0}),[_,X,o,ee,u,m]);return O.createElement(ia.Provider,{value:le},O.createElement(Tm,{forcedTheme:o,storageKey:f,attribute:j,enableSystem:u,enableColorScheme:d,defaultTheme:h,value:I,themes:m,nonce:z,scriptProps:y}),C)},Tm=O.memo(({forcedTheme:o,storageKey:a,attribute:u,enableSystem:d,enableColorScheme:f,defaultTheme:m,value:h,themes:j,nonce:I,scriptProps:C})=>{let z=JSON.stringify([u,a,m,o,j,h,d,f]).slice(1,-1);return O.createElement("script",{...C,suppressHydrationWarning:!0,nonce:typeof window>"u"?I:"",dangerouslySetInnerHTML:{__html:`(${Sm.toString()})(${z})`}})}),Nm=(o,a)=>{if(Cm)return;let u;try{u=localStorage.getItem(o)||void 0}catch{}return u||a},zm=o=>{let a=document.createElement("style");return o&&a.setAttribute("nonce",o),a.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},Us=o=>(o||(o=window.matchMedia(gd)),o.matches?"dark":"light");/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lm=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,u,d)=>d?d.toUpperCase():u.toLowerCase()),Yc=o=>{const a=Lm(o);return a.charAt(0).toUpperCase()+a.slice(1)},xd=(...o)=>o.filter((a,u,d)=>!!a&&a.trim()!==""&&d.indexOf(a)===u).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=O.forwardRef(({color:o="currentColor",size:a=24,strokeWidth:u=2,absoluteStrokeWidth:d,className:f="",children:m,iconNode:h,...j},I)=>O.createElement("svg",{ref:I,...Pm,width:a,height:a,stroke:o,strokeWidth:d?Number(u)*24/Number(a):u,className:xd("lucide",f),...j},[...h.map(([C,z])=>O.createElement(C,z)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=(o,a)=>{const u=O.forwardRef(({className:d,...f},m)=>O.createElement(Fm,{ref:m,iconNode:a,className:xd(`lucide-${Rm(Yc(o))}`,`lucide-${o}`,d),...f}));return u.displayName=Yc(o),u};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Am=gt("check",Dm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Mm=gt("chevron-down",Bm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Hm=gt("circle-check",Om);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Wm=gt("info",$m);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Vm=gt("moon",Um);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],yd=gt("package",Qm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],qm=gt("search",Ym);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Gm=gt("shield",Km);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Zm=gt("star",Xm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],eh=gt("sun",Jm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]],nh=gt("thumbs-down",th);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],ih=gt("thumbs-up",rh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],lh=gt("x",oh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ah=gt("zap",sh);function uh(){const{resolvedTheme:o,setTheme:a}=oa(),u=o==="dark";return i.jsx("header",{style:{height:"72px",backgroundColor:"var(--background)",borderBottom:"1px solid var(--border)"},children:i.jsx(he,{children:i.jsxs("div",{style:{height:"72px",display:"flex",alignItems:"center",gap:"16px"},children:[i.jsx(ch,{isDark:u}),i.jsx(dh,{}),i.jsx(fh,{isDark:u,onToggleTheme:()=>a(u?"light":"dark")})]})})})}function ch({isDark:o}){return i.jsx(ph,{isDark:o})}function dh(){return i.jsx(hh,{})}function fh({isDark:o,onToggleTheme:a}){return i.jsxs("div",{style:{display:"flex",gap:"16px"},children:[i.jsx(mh,{isDark:o,onToggleTheme:a}),i.jsx(gh,{}),i.jsx(xh,{})]})}function ph({isDark:o}){return i.jsx(ld,{size:32,variant:o?"light":"dark",showText:!0,href:"/"})}function mh({isDark:o,onToggleTheme:a}){return i.jsxs("button",{"aria-label":`Switch to ${o?"light":"dark"} mode`,onClick:a,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[o?i.jsx(eh,{size:16}):i.jsx(Vm,{size:16}),o?"Light":"Dark"]})}function hh(){return i.jsxs("nav",{style:{display:"flex",gap:"20px",flex:1,justifyContent:"center"},children:[i.jsx("a",{href:"/products",style:{color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",textDecoration:"none",cursor:"pointer"},children:"Products"}),i.jsx("a",{href:"/philosophy",style:{color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",textDecoration:"none",cursor:"pointer"},children:"Philosophy"}),i.jsx("a",{href:"/community",style:{color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",textDecoration:"none",cursor:"pointer"},children:"Community"})]})}function gh(){return i.jsx("button",{style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"Account"})}function xh(){const{cartCount:o,openCartDrawer:a}=Bn(),u=()=>{(window.location.pathname.replace(/\/+$/,"")||"/")!=="/cart"&&a()};return i.jsxs("div",{style:{position:"relative",display:"inline-flex"},children:[i.jsx(Pe,{label:"Cart",variant:"ghost",size:"sm",onClick:u}),i.jsx("div",{style:{position:"absolute",top:"-6px",right:"-8px",pointerEvents:"none",opacity:.78},children:i.jsx($e,{label:String(o),variant:"accent",size:"sm"})})]})}function ke({children:o,direction:a="vertical",gap:u=16,align:d="stretch",justify:f="flex-start",style:m}){const h=a==="horizontal"?"row":"column",j=typeof u=="number"?`${u}px`:u;return i.jsx("div",{style:{display:"flex",flexDirection:h,gap:j,alignItems:d,justifyContent:f,...m},children:o})}function yh(){const{resolvedTheme:o}=oa(),a=o==="dark";return i.jsx("footer",{style:{backgroundColor:"var(--card)",borderTop:"1px solid var(--border)",paddingTop:"32px",paddingBottom:"24px"},children:i.jsx(he,{children:i.jsxs(ke,{gap:"24px",children:[i.jsx(vh,{}),i.jsx(wh,{isDark:a})]})})})}function vh(){return i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"32px"},children:[i.jsx(kh,{}),i.jsx(jh,{})]})}function wh({isDark:o}){return i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[i.jsx(Sh,{isDark:o}),i.jsx(Ch,{})]})}function kh(){return i.jsxs(ke,{gap:"10px",children:[i.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Explore"}),i.jsxs(ke,{gap:"10px",children:[i.jsx("a",{href:"#products",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Products"}),i.jsx("a",{href:"#philosophy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Philosophy"}),i.jsx("a",{href:"#community",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Community"}),i.jsx("a",{href:"/privacy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Privacy Policy"})]})]})}function jh(){return i.jsxs(ke,{gap:"10px",children:[i.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Standards"}),i.jsxs(ke,{gap:"10px",children:[i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Curated for durability"}),i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Reliable support"}),i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Clear policies"})]})]})}function Sh({isDark:o}){return i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[i.jsx(ld,{size:24,variant:o?"light":"dark",showText:!1,href:"/"}),i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:"© VIBE STATION"})]})}function Ch(){return i.jsxs("div",{style:{display:"flex",gap:"16px"},children:[i.jsx("button",{style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"Instagram"}),i.jsx("button",{style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"YouTube"}),i.jsx("button",{style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"Email"})]})}function bh({children:o}){return i.jsxs(ke,{gap:"0px",style:{minHeight:"100vh"},children:[i.jsx(Ih,{}),i.jsx(_h,{children:o}),i.jsx(Eh,{})]})}function Ih(){return i.jsx(uh,{})}function _h({children:o}){return i.jsx(Th,{children:o})}function Eh(){return i.jsx(yh,{})}function Th({children:o}){return i.jsx("main",{style:{flex:1,backgroundColor:"var(--background)"},children:i.jsx(ke,{gap:"0px",style:{height:"100%"},children:o})})}const Nh={standard:{top:"56px",bottom:"56px"},dense:{top:"32px",bottom:"32px"}},Ni={canvas:{backgroundColor:"var(--surface-canvas, #FFFFFF)"},subtle:{backgroundColor:"var(--surface-subtle, #FCFCFD)"},inverse:{backgroundColor:"var(--surface-inverse, #101828)",color:"var(--text-inverse, #FFFFFF)"}};function zh(o){if(!o||typeof o!="object"||!("type"in o))return!1;const a=o.type;return a===he||a===he.Wide||a===he.Standard||a===he.Narrow}function vd({children:o}){return i.jsx(i.Fragment,{children:o})}function Rh({children:o}){return i.jsx("div",{style:{paddingTop:"56px",paddingBottom:"56px"},children:o})}function Lh({children:o}){return i.jsx("div",{style:{paddingTop:"32px",paddingBottom:"32px"},children:o})}function Ph({children:o}){return i.jsx("div",{style:Ni.canvas,children:o})}function Fh({children:o}){return i.jsx("div",{style:Ni.subtle,children:o})}function Dh({children:o}){return i.jsx("div",{style:Ni.inverse,children:o})}function Ah({children:o,className:a,padding:u="standard",variant:d="canvas",containerWidth:f="standard",contain:m=!0,paddingTop:h,paddingBottom:j,background:I}){const C=Nh[u],z=h??C.top,y=j??C.bottom,_={...Ni[d],backgroundColor:I??Ni[d].backgroundColor},F=m&&!zh(o);return i.jsx("section",{className:a,style:{..._,paddingTop:z,paddingBottom:y},children:i.jsx(vd,{children:F?i.jsx(he,{width:f,children:o}):o})})}const tt=Object.assign(Ah,{SectionContainerSlot:vd,PaddingStandard:Rh,PaddingDense:Lh,VariantCanvas:Ph,VariantSubtle:Fh,VariantInverse:Dh});function Bh(){return i.jsx(tt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:i.jsxs(he,{children:[i.jsx(Mh,{}),i.jsx(Oh,{})]})})}function Mh(){return i.jsxs(ke,{gap:"0px",style:{marginBottom:"24px"},children:[i.jsx(Hh,{}),i.jsx($h,{})]})}function Oh(){return i.jsxs(ke,{gap:"16px",children:[i.jsx(Wh,{}),i.jsx(Uh,{}),i.jsx(Vh,{}),i.jsx(Qh,{}),i.jsx(Yh,{})]})}function Hh(){return null}function $h(){return null}function Wh(){return null}function Uh(){return null}function Vh(){return null}function Qh(){return null}function Yh(){return null}function qh(){return i.jsx(tt,{paddingTop:"64px",paddingBottom:"80px",background:"var(--card)",children:i.jsxs(he,{children:[i.jsx(Kh,{}),i.jsx(Gh,{})]})})}function Kh(){return i.jsx(ke,{gap:"0px",style:{marginBottom:"24px"},children:i.jsx(Xh,{})})}function Gh(){return i.jsxs(ke,{gap:"16px",children:[i.jsx(Zh,{}),i.jsx(Jh,{}),i.jsx(eg,{})]})}function Xh(){return null}function Zh(){return null}function Jh(){return null}function eg(){return null}const tg={hero:null,heroMetaBadges:[],featuredDrop:null,socialProof:null};let Ko=tg,Zo=!1,xi=null;const ng=async()=>xi||(xi=(async()=>{var o,a,u,d;try{const f=await Ei({first:6});if(f.edges.length===0){Zo=!0;return}const m=f.edges.map(C=>C.node),h=m[0],j=nl(h),I=m.slice(0,3).map(C=>{var z,y;return{id:C.id,name:C.title,role:((z=C.featureLine)==null?void 0:z.value)||"Curated product",quote:((y=C.shortDescription)==null?void 0:y.value)||C.description||"Built for consistent daily use.",tag:C.tags[0]||"Curated"}});Ko={hero:{eyebrow:"Curated essentials for musicians",headline:"Gear that survives practice, travel, and stage.",supporting:"We research what musicians actually need, then pick durable, best-in-class tools with modern features so you buy once and keep playing.",primaryCta:"Shop products",secondaryCta:"Our philosophy",metaLine:"Fast delivery · Clear returns · Responsive support",featuredDropEyebrow:"Featured drop",featuredDropTitle:h.title,featuredDropSubtitle:((o=h.shortDescription)==null?void 0:o.value)||h.description||"",featuredDropImageUrl:(j==null?void 0:j.url)||"",featuredDropImageAlt:(j==null?void 0:j.altText)||h.title},featuredDrop:{eyebrow:"Featured drop",title:"Best-in-class essentials, chosen to last.",supporting:"One product at a time. Thorough research. Durable materials. Modern features that matter in real practice and gig conditions.",badges:["Durable build","Fast + accurate","Stage-ready"],primaryCta:"View featured",secondaryCta:"See all products",productName:h.title,productPrice:new Intl.NumberFormat("en-IN",{style:"currency",currency:h.priceRange.minVariantPrice.currencyCode,maximumFractionDigits:0}).format(Number.parseFloat(h.priceRange.minVariantPrice.amount)),productCopy:((a=h.shortDescription)==null?void 0:a.value)||h.description||"",featureLine:((u=h.featureLine)==null?void 0:u.value)||"",productBadge:((d=h.badge)==null?void 0:d.value)||h.tags[0]||"",productImageUrl:(j==null?void 0:j.url)||"",productImageAlt:(j==null?void 0:j.altText)||h.title},heroMetaBadges:["Curated for durability","Modern features","Clear policies"],socialProof:{eyebrow:"What musicians notice",title:"Built for real use — not shelf appeal.",supporting:"Feedback that focuses on durability, clarity, and daily reliability.",chips:h.tags.slice(0,4),testimonials:I,ctaLabel:"Explore products"}}}catch(f){console.error("Failed to load home data from Shopify",f)}finally{Zo=!0,xi=null}})(),xi);function zi(){const[o,a]=O.useState(Ko),[u,d]=O.useState(!Zo);return O.useEffect(()=>{let f=!1;return Zo?(a(Ko),d(!1),()=>{f=!0}):(ng().then(()=>{f||(a(Ko),d(!1))}),()=>{f=!0})},[]),{...o,isLoading:u}}function rg(){const{hero:o}=zi();return o?i.jsx(tt,{contain:!1,paddingTop:"56px",paddingBottom:"48px",background:"var(--card)",children:i.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[i.jsx("div",{style:{position:"absolute",top:"-200px",right:"-200px",width:"600px",height:"600px",backgroundColor:"#4F46E50F",borderRadius:"50%",filter:"blur(120px)",pointerEvents:"none",zIndex:0}}),i.jsx(he,{width:"wide",className:"relative z-[1]",children:i.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"64px",alignItems:"center"},children:[i.jsx("div",{style:{flex:"0 0 55%"},children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),i.jsx("h1",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"48px",lineHeight:"56px",fontWeight:"600",color:"var(--foreground)",letterSpacing:"-0.01em",margin:0},children:o.headline}),i.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"540px",margin:0},children:o.supporting}),i.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[i.jsx(ig,{label:o.primaryCta}),i.jsx(og,{label:o.secondaryCta})]}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",marginTop:"8px"},children:o.metaLine})]})}),i.jsx("div",{style:{flex:"0 0 45%",position:"relative"},children:i.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"480px",height:"420px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[i.jsx("div",{style:{backgroundColor:"var(--muted)",height:"280px",width:"100%"},children:o.featuredDropImageUrl?i.jsx("img",{src:o.featuredDropImageUrl,alt:o.featuredDropImageAlt||o.featuredDropTitle,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),i.jsx("div",{style:{padding:"20px"},children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.featuredDropEyebrow}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.featuredDropTitle}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:o.featuredDropSubtitle})]})})]})})]})})]})}):null}function ig({label:o}){return i.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function og({label:o}){return i.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function wd({children:o,wrap:a="on",gap:u=12,align:d="center",justify:f="flex-start",style:m}){const h=typeof u=="number"?`${u}px`:u;return i.jsx("div",{style:{display:"flex",flexDirection:"row",flexWrap:a==="on"?"wrap":"nowrap",gap:h,alignItems:d,justifyContent:f,...m},children:o})}function lg(){const{heroMetaBadges:o}=zi();return o.length===0?null:i.jsx(tt,{contain:!1,paddingTop:"24px",paddingBottom:"24px",background:"var(--card)",children:i.jsx(he,{width:"wide",children:i.jsx(wd,{wrap:"on",gap:12,align:"center",children:o.map(a=>i.jsx($e,{label:a,variant:"neutral",size:"md"},a))})})})}function sg(){const{featuredDrop:o}=zi();return o?i.jsx(tt,{paddingTop:"56px",paddingBottom:"56px",background:"var(--background)",children:i.jsx(he,{children:i.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"48px",alignItems:"flex-start"},children:[i.jsx("div",{style:{flex:"0 0 45%"},children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),i.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.title}),i.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"480px",margin:0},children:o.supporting}),i.jsx("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:o.badges.map(a=>i.jsx($e,{label:a,variant:"neutral",size:"md"},a))}),i.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[i.jsx(ag,{label:o.primaryCta}),i.jsx(ug,{label:o.secondaryCta})]})]})}),i.jsx("div",{style:{flex:"0 0 55%"},children:i.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"560px",height:"360px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[i.jsx("div",{style:{backgroundColor:"var(--muted)",height:"200px",width:"100%"},children:o.productImageUrl?i.jsx("img",{src:o.productImageUrl,alt:o.productImageAlt||o.productName,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),i.jsx("div",{style:{padding:"16px"},children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.productName}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.productPrice})]}),i.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:o.productCopy}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:o.featureLine}),i.jsx("div",{style:{marginTop:"2px"},children:i.jsx($e,{label:o.productBadge,variant:"accent",size:"sm"})})]})})]})})]})})}):null}function ag({label:o}){return i.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function ug({label:o}){return i.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function cg(){return null}function dg(){return null}function fg(){return null}function pg(){return null}function mg(){const{socialProof:o}=zi();return o?i.jsx(tt,{paddingTop:"56px",paddingBottom:"56px",background:"var(--card)",children:i.jsxs(he,{children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"24px"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),i.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.title}),i.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:o.supporting})]}),i.jsx("div",{style:{display:"flex",gap:"12px",marginBottom:"32px"},children:o.chips.map(a=>i.jsx($e,{label:a,variant:"neutral",size:"md"},a))}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"32px"},children:o.testimonials.map(a=>i.jsx("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"220px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",padding:"20px"},children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)"},children:a.name}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:a.role})]}),i.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,flex:1},children:a.quote}),i.jsx("div",{children:i.jsx($e,{label:a.tag,variant:"neutral",size:"sm"})})]})},a.id))}),i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsx(hg,{label:o.ctaLabel})})]})}):null}function hg({label:o}){return i.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function gg(){return null}function xg(){return null}function yg(){return null}function xe({width:o="100%",height:a="16px",borderRadius:u="8px",style:d,...f}){const m={width:o,height:a,borderRadius:u,background:"linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 37%, var(--skeleton-base) 63%)",backgroundSize:"400% 100%",animation:"vs-skeleton-shimmer 1.2s ease-in-out infinite"};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @keyframes vs-skeleton-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `}),i.jsx("div",{"aria-hidden":"true",style:{...m,...d},...f})]})}function vg(){return i.jsxs(ke,{gap:"0px",children:[i.jsx(tt,{paddingTop:"56px",paddingBottom:"48px",background:"var(--background)",children:i.jsx(he,{children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:"48px"},children:[i.jsxs(ke,{gap:"16px",children:[i.jsx(xe,{width:"140px",height:"14px"}),i.jsx(xe,{width:"88%",height:"56px",borderRadius:"12px"}),i.jsx(xe,{width:"92%",height:"24px"}),i.jsx(xe,{width:"80%",height:"24px"}),i.jsxs("div",{style:{display:"flex",gap:"12px"},children:[i.jsx(xe,{width:"136px",height:"44px",borderRadius:"12px"}),i.jsx(xe,{width:"136px",height:"44px",borderRadius:"12px"})]})]}),i.jsx(xe,{width:"100%",height:"420px",borderRadius:"16px"})]})})}),i.jsx(tt,{paddingTop:"48px",paddingBottom:"56px",background:"var(--background)",children:i.jsx(he,{children:i.jsxs(ke,{gap:"16px",children:[i.jsx(xe,{width:"180px",height:"18px"}),i.jsx(xe,{width:"56%",height:"32px"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(o=>i.jsx(xe,{height:"240px",borderRadius:"16px"},o))})]})})})]})}function wg(){return i.jsx(tt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:i.jsx(he,{children:i.jsxs(ke,{gap:"16px",children:[i.jsx(xe,{width:"96px",height:"14px"}),i.jsx(xe,{width:"180px",height:"40px"}),i.jsx(xe,{width:"420px",height:"24px"}),i.jsx(xe,{width:"100%",height:"44px",borderRadius:"12px"}),i.jsx("div",{style:{display:"flex",gap:"12px"},children:[1,2,3,4].map(o=>i.jsx(xe,{width:"112px",height:"36px",borderRadius:"999px"},o))}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3,4,5,6].map(o=>i.jsx(xe,{height:"460px",borderRadius:"16px"},o))})]})})})}function kg(){return i.jsxs(ke,{gap:"0px",children:[i.jsx(tt,{paddingTop:"24px",paddingBottom:"16px",background:"var(--card)",children:i.jsx(he,{children:i.jsx(xe,{width:"280px",height:"16px"})})}),i.jsx(tt,{paddingTop:"16px",paddingBottom:"32px",background:"var(--card)",children:i.jsx(he,{children:i.jsxs(ke,{gap:"12px",children:[i.jsx(xe,{width:"120px",height:"14px"}),i.jsx(xe,{width:"52%",height:"36px"}),i.jsx(xe,{width:"72%",height:"22px"})]})})}),i.jsx(tt,{paddingTop:"24px",paddingBottom:"48px",background:"var(--background)",children:i.jsx(he,{children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 420px",gap:"48px"},children:[i.jsx(xe,{width:"100%",height:"560px",borderRadius:"16px"}),i.jsx(xe,{width:"100%",height:"560px",borderRadius:"16px"})]})})}),i.jsx(tt,{paddingTop:"48px",paddingBottom:"56px",background:"var(--card)",children:i.jsx(he,{children:i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(o=>i.jsx(xe,{height:"220px",borderRadius:"16px"},o))})})})]})}function jg(){return i.jsx(tt,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:i.jsx(he,{children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.8fr 1fr",gap:"24px",alignItems:"start"},children:[i.jsxs(ke,{gap:"20px",children:[i.jsx(xe,{width:"180px",height:"38px"}),[1,2].map(o=>i.jsx(xe,{width:"100%",height:"164px",borderRadius:"16px"},o)),i.jsx(xe,{width:"100%",height:"300px",borderRadius:"16px"})]}),i.jsxs(ke,{gap:"12px",children:[i.jsx(xe,{width:"100%",height:"260px",borderRadius:"16px"}),i.jsx(xe,{width:"100%",height:"48px",borderRadius:"12px"}),i.jsx(xe,{width:"100%",height:"48px",borderRadius:"12px"})]})]})})})}function Sg(){const{isLoading:o}=zi();return o?i.jsx(vg,{}):i.jsxs(i.Fragment,{children:[i.jsx(Cg,{}),i.jsx(bg,{})]})}function Cg(){return i.jsxs(ke,{gap:"0px",children:[i.jsx(rg,{}),i.jsx(lg,{})]})}function bg(){return i.jsxs(ke,{gap:"0px",children:[i.jsx(sg,{}),i.jsx(cg,{}),i.jsx(dg,{}),i.jsx(fg,{}),i.jsx(pg,{}),i.jsx(mg,{}),i.jsx(gg,{}),i.jsx(xg,{}),i.jsx(yg,{})]})}function Ig(){return i.jsx(tt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:i.jsxs(he,{children:[i.jsx(_g,{}),i.jsx(Eg,{})]})})}function _g(){return i.jsxs(ke,{gap:"0px",style:{marginBottom:"24px"},children:[i.jsx(Tg,{}),i.jsx(Ng,{})]})}function Eg(){return i.jsxs(ke,{gap:"16px",children:[i.jsx(zg,{}),i.jsx(Rg,{}),i.jsx(Lg,{}),i.jsx(Pg,{}),i.jsx(Fg,{}),i.jsx(Dg,{}),i.jsx(Ag,{}),i.jsx(Bg,{})]})}function Tg(){return null}function Ng(){return null}function zg(){return null}function Rg(){return null}function Lg(){return null}function Pg(){return null}function Fg(){return null}function Dg(){return null}function Ag(){return null}function Bg(){return null}const Mg="http://localhost:3001",Qo="/api/shopify/admin/product-metadata",Og=o=>`${(Qo.startsWith("http://")||Qo.startsWith("https://")?Qo:`${Mg.replace(/\/+$/,"")}/${Qo.replace(/^\/+/,"")}`).replace(/\/+$/,"")}/${encodeURIComponent(o)}`;async function Hg(o){const a=await fetch(Og(o),{method:"GET",credentials:"include"});if(!a.ok)throw a.status===429?new Ht("Rate limit exceeded","RATE_LIMIT"):new Ht(`HTTP ${a.status}`,"HTTP_ERROR");return(await a.json()).product??null}const _r={productHeader:{badge:"",title:"",vendor:"",sku:"",shareUrl:"",shareLabel:""},productMain:{gallery:{images:[],zoomLabel:"",prevLabel:"",nextLabel:""},buyBox:{variantId:null,badge:"",name:"",descriptor:"",price:"",compareAtPrice:null,stock:"",isInStock:!1,features:[],reassurancePoints:[],primaryCta:"Add to cart",secondaryCta:"Buy now",microLine:"",inBoxTitle:"",inBoxLine:""}},keyBenefits:{title:"",cards:[]},featureDeepDive:{overviewTitle:"",overviewHtml:"",storyTitle:"",storyHtml:"",buyingGuideTitle:"",buyingGuideHtml:"",curatedFor:"",notFor:""},deliveryAndReturns:[],reviews:{title:"",supporting:"",averageLabel:"",averageValue:"",totalReviewsLabel:"",verifiedLabel:"",useCasePrefix:"",writeReviewLabel:"Write a review",loadMoreLabel:"Load more",breakdown:[],tags:[],items:[]},relatedProducts:{title:"Complete your setup",viewAllLabel:"View all",addToCartLabel:"Add to cart",items:[]},specsAndInBox:{specificationsTitle:"",specifications:[],inBoxTitle:"",inBoxItems:[],inBoxBadge:"",productDetailsTitle:"",productDetails:[]},faq:{title:"",items:[]},stickyCtaRail:{variantId:null,name:"",price:"",stockLabel:"",isInStock:!1,shippingLabel:"",reassurancePoints:[],addToCartLabel:"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}},Go="all",$g="All",kd=o=>o.trim().toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),Wg="https://thevibestation.com".replace(/\/+$/,""),Ug=["capo","tuner","string","pick","holder","gig bag","bundle","essentials"],jd=o=>{var u,d,f,m;const a=(d=(u=o.variants)==null?void 0:u.edges.find(h=>{const j=h.node;return j.availableForSale&&(typeof j.quantityAvailable!="number"||j.quantityAvailable>0)}))==null?void 0:d.node;return(a==null?void 0:a.id)||((m=(f=o.variants)==null?void 0:f.edges[0])==null?void 0:m.node.id)||null},Sd=o=>{var a,u;return((u=(a=o.variants)==null?void 0:a.edges[0])==null?void 0:u.node)??null},Xo=(o,a)=>{if(!o||!a)return"₹—";const u=Number.parseFloat(o);return Number.isFinite(u)?new Intl.NumberFormat("en-IN",{style:"currency",currency:a,maximumFractionDigits:0}).format(u):`${a} ${o}`},Tr=o=>o?o.replace(/<br\s*\/?>/gi,`
`).replace(/<\/(p|div|li|h[1-6])>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").trim():"",an=o=>o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),un=o=>o?o.replace(/\r\n?/g,`
`).replace(/\\r\\n|\\r/g,`
`).replace(/\\n/g,`
`).replace(/\\t/g," ").replace(/&nbsp;/gi," ").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim():"",Jo=o=>o.replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,a=>a.toUpperCase()),Vg=o=>/taxonomy\s*reference/i.test(o),Qg=o=>o.split(">").map(a=>a.trim()).filter(Boolean).at(-1)||o.trim(),Yo=(o,a)=>{const u=un(a).replace(/\s*\n+\s*/g," ").replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim();return u?/^label$/i.test(o)?u:/^color$/i.test(o)?`(${u})`:u:""},qc=o=>o.replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*\|\s*/g," | ").replace(/\s*,\s*\|/g," |").replace(/\|\s*,\s*/g,"| ").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim(),Yg=o=>{var m;const a=o.fields.filter(h=>h.value&&h.value.trim().length>0&&!Vg(h.key));if(a.length===0)return((m=o.displayName)==null?void 0:m.trim())||"";const u=a.find(h=>/^label$/i.test(h.key)),d=a.find(h=>/^color$/i.test(h.key)),f=a.filter(h=>!/^label$/i.test(h.key)&&!/^color$/i.test(h.key));if(u){const h=[Yo(u.key,u.value??""),...d?[Yo(d.key,d.value??"")]:[]].filter(Boolean);if(f.length===0&&h.length>0)return h.join(" ");const j=f.map(I=>Yo(I.key,I.value??"")).filter(Boolean);return[...h,...j].join(", ")}return a.map(h=>Yo(h.key,h.value??"")).filter(Boolean).join(", ")},qg=o=>un(o).replace(/<br\s*\/?>/gi,`
`).split(`
`).map(a=>Tr(a).trim()).filter(Boolean),Vs=o=>qg(o).map(a=>{const u=a.match(/^([^:]+):\s*(.+)$/);return u?{label:Jo(u[1]),value:un(u[2]).replace(/\s*\n+\s*/g," ").trim()}:null}).filter(a=>!!a&&a.value.length>0),Kc=o=>{const a=un(o);return a?a.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(d=>d.trim()).filter(Boolean).map(d=>{const f=d.split(`
`).map(I=>Tr(I).trim()).filter(Boolean);if(f.length===0)return"";if(f.length>1&&f[0].endsWith(":")){const I=`<p><strong>${an(f[0])}</strong></p>`,C=f.slice(1).map(z=>`<li>${an(z)}</li>`).join("");return C?`${I}<ul>${C}</ul>`:I}const m=[];let h=[];const j=()=>{h.length!==0&&(m.push(`<p>${an(h.join(" "))}</p>`),h=[])};return f.forEach(I=>{const C=I.match(/^([^:]{1,60}):\s*(.+)$/);if(C){j(),m.push(`<p><strong>${an(C[1].trim())}:</strong> ${an(C[2].trim())}</p>`);return}h.push(I)}),j(),m.join("")}).join(""):""},Kg=o=>{const a=o.trim();return a.startsWith("[")||a.includes("•")||a.includes("|")},Cd=o=>{const a=typeof o.type=="string"?o.type:"",u=typeof o.value=="string"?an(o.value):"",d=Array.isArray(o.children)?o.children.map(f=>f&&typeof f=="object"?Cd(f):"").join(""):"";switch(a){case"root":return d;case"paragraph":return`<p>${d}</p>`;case"heading":return`<h3>${d}</h3>`;case"text":return u;case"text_bold":return`<strong>${d||u}</strong>`;case"text_italic":return`<em>${d||u}</em>`;case"list":return`<ul>${d}</ul>`;case"list-item":return`<li>${d}</li>`;case"link":return typeof o.url=="string"?`<a href="${an(o.url)}">${d}</a>`:d;default:return d||u}},Qs=o=>{if(!o)return"";const a=un(o);if(Kg(a)){const u=el(a);if(u.length>0)return`<ul>${u.map(d=>`<li>${an(d)}</li>`).join("")}</ul>`}if(a.includes("<"))return a;try{const u=JSON.parse(a);if(u&&typeof u=="object")return Cd(u)}catch{return Kc(a)}return Kc(a)},el=o=>{const a=un(o);if(!a)return[];const u=d=>d.replace(/<br\s*\/?>/gi,`
`).split(/\n|,|\||•/).map(f=>Tr(f).trim()).filter(Boolean);try{const d=JSON.parse(a);if(Array.isArray(d))return d.flatMap(f=>typeof f=="string"?u(f):[]).filter(Boolean);if(typeof d=="string")return u(d)}catch{return u(a)}return[]},Gg=o=>{const a=un(o);if(!a)return[];try{const u=JSON.parse(a);if(u&&typeof u=="object"&&!Array.isArray(u)){const d=Object.entries(u).flatMap(([f,m])=>{const h=Vs(`${Jo(f)}: ${String(m)}`);return h.length>0?h:[{label:Jo(f),value:un(String(m)).replace(/\s*\n+\s*/g," ").trim()}]}).filter(f=>f.value.length>0);if(d.length>0)return d}}catch{return Vs(a)}return Vs(a)},Xg=o=>{if(!o)return[];try{const a=JSON.parse(o);if(Array.isArray(a))return a.map(u=>{if(!u||typeof u!="object")return null;const d=u,f=typeof d.question=="string"?d.question.trim():"",m=typeof d.answer=="string"?d.answer.trim():"";return f&&m?{question:f,answer:m}:null}).filter(u=>!!u)}catch{return o.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(u=>Tr(u)).filter(Boolean).map(u=>{const[d,...f]=u.split(`
`),m=f.join(" ").trim();return!d||!m?null:{question:d.replace(/^Q[:\-]?\s*/i,""),answer:m.replace(/^A[:\-]?\s*/i,"")}}).filter(u=>!!u)}return[]},Xs=(o,a="Yes",u="No")=>{if(!o)return"";const d=o.trim().toLowerCase();return["true","yes","available","1"].includes(d)?a:["false","no","not available","0"].includes(d)?u:o.trim()},bd=()=>{if(typeof window>"u")return null;const o=window.location.pathname.match(/\/products\/([^/]+)/);return(o==null?void 0:o[1])??null},Id=o=>`${Wg}/products/${o.handle}`,Zg=o=>{var d;if(o.availableForSale===!1)return"Out of stock";if(typeof o.totalInventory=="number")return o.totalInventory>0?`In stock (${o.totalInventory} available)`:"Out of stock";const a=Sd(o);return a&&typeof a.quantityAvailable=="number"?a.quantityAvailable>0?`In stock (${a.quantityAvailable} available)`:"Out of stock":((d=o.variants)==null?void 0:d.edges.some(f=>{const m=f.node;return m.availableForSale===!1?!1:typeof m.quantityAvailable=="number"?m.quantityAvailable>0:m.availableForSale===!0}))?"In stock":"Out of stock"},Jg=o=>{var u;return el((u=o.whyDifferent)==null?void 0:u.value).slice(0,3).map((d,f)=>({id:`${o.handle}-feature-${f}`,badge:`0${f+1}`,title:d,description:"",footer:""}))},ex=o=>{const a=`${o.title} ${o.tags.join(" ")}`.toLowerCase();return Ug.some(u=>a.includes(u))?"Pair it with these":"Complete your setup"},tx=o=>{var d;const a={averageValue:"—",totalReviewsLabel:"No reviews yet",breakdown:[],tags:[],items:[]},u=(d=o.reviewSummary)==null?void 0:d.value;if(!u)return a;try{const f=JSON.parse(u),m=typeof f.average=="number"?f.average.toFixed(1):"—",h=typeof f.count=="number"?f.count:0,j=Array.isArray(f.breakdown)?f.breakdown:[],I=Array.isArray(f.items)?f.items:[],C=Array.isArray(f.tags)?f.tags:[];return{averageValue:m,totalReviewsLabel:`${h} review${h===1?"":"s"}`,breakdown:j.map(z=>{if(!z||typeof z!="object")return null;const y=z,_=typeof y.stars=="number"?y.stars:0,F=typeof y.count=="number"?y.count:0;return _>0?{stars:_,count:F,label:`${_} star`}:null}).filter(z=>!!z).sort((z,y)=>y.stars-z.stars),tags:C.filter(z=>typeof z=="string"),items:I.map((z,y)=>{if(!z||typeof z!="object")return null;const _=z;return{id:typeof _.id=="string"?_.id:`review-${y}`,name:typeof _.name=="string"?_.name:"Verified buyer",role:typeof _.role=="string"?_.role:"Customer",quote:typeof _.quote=="string"?_.quote:"",useCase:typeof _.useCase=="string"?_.useCase:"General use",rating:typeof _.rating=="number"?_.rating:5,tags:Array.isArray(_.tags)?_.tags.filter(F=>typeof F=="string"):[],verified:_.verified!==!1}}).filter(z=>!!z&&z.quote.length>0)}}catch{return a}},nx=o=>{var u,d,f,m,h,j,I;const a=[(u=o.packCount)==null?void 0:u.value,(d=o.bestFor)==null?void 0:d.value,(f=o.dispatchTime)==null?void 0:f.value,(m=o.deliveryWindow)==null?void 0:m.value,(h=o.returnsPolicy)==null?void 0:h.value,Xs((j=o.codAvailable)==null?void 0:j.value,"COD available","COD unavailable"),Xs((I=o.secureCheckout)==null?void 0:I.value,"Secure checkout","")].map(C=>C==null?void 0:C.trim()).filter(C=>!!C);return Array.from(new Set(a)).slice(0,6)},rx=o=>{var u,d,f;const a=Sd(o);return[{label:"SKU",value:(a==null?void 0:a.sku)||"Available on request"},{label:"Brand",value:o.vendor||"Vibe Station"},{label:"Country of origin",value:((u=o.countryOfOrigin)==null?void 0:u.value)||""},{label:"GST invoice",value:Xs((d=o.gstInvoice)==null?void 0:d.value,"Available","Not specified")||"Not specified"},{label:"Care / storage",value:Tr((f=o.careInstructions)==null?void 0:f.value)},{label:"Shareable short URL",value:Id(o)}].filter(m=>m.value.trim().length>0)},_d=o=>{const a=o==null?void 0:o.trim();if(!a)return[];try{const u=JSON.parse(a);if(Array.isArray(u))return u.map(d=>typeof d=="string"?d.trim():"").filter(d=>d.length>0)}catch{}return a.split(/[\n,]+/).map(u=>u.trim()).filter(Boolean)},Gc=o=>{var a;return Array.from(new Set([..._d((a=o.categories)==null?void 0:a.value),...o.tags.map(u=>u.trim()).filter(Boolean)]))},Xc=o=>o.map(a=>kd(a)).filter(Boolean),ix=async o=>{const a=Gc(o),u=new Set(Xc(a)),d=new Set(a.map(m=>m.toLowerCase()));return u.size===0&&d.size===0?[]:(await Ei({first:50})).edges.map(m=>m.node).filter(m=>m.id!==o.id).map(m=>{const h=Gc(m),j=Xc(h),I=h.filter(z=>d.has(z.toLowerCase())).length,C=j.filter(z=>u.has(z)).length;return{candidate:m,score:I+C}}).filter(m=>m.score>0).sort((m,h)=>h.score-m.score).slice(0,20).map(m=>m.candidate)},ox=o=>(o??[]).flatMap(a=>{const u=Jo(a.key),d=a.reference?[a.reference]:[],f=Array.isArray(a.references)?a.references:[],m=[...d,...f].map(I=>Yg(I)).filter(Boolean),h=qc(un(a.value).replace(/\s*\n+\s*/g," ").trim()),j=qc(m.length>0?m.join(" | "):h);return j.length>0?[{label:u,value:j}]:[]}),lx=(o,a)=>{var I,C,z,y;const u=Gg((I=o.specifications)==null?void 0:I.value),d=_d((C=o.categories)==null?void 0:C.value),f=((z=a==null?void 0:a.category)==null?void 0:z.fullName)||((y=a==null?void 0:a.category)==null?void 0:y.name)||"",m=Array.from(new Set([...d,...f?[f]:[]].map(_=>Qg(_)).filter(Boolean))),h=m.length>0?[{label:"Category",value:m.join(", ")}]:[],j=ox(a==null?void 0:a.shopifyMetafields);return[...h,...j,...u].filter((_,F,ee)=>{const re=`${_.label.toLowerCase()}::${_.value.toLowerCase()}`;return ee.findIndex(M=>`${M.label.toLowerCase()}::${M.value.toLowerCase()}`===re)===F})},sx=(o,a)=>a.filter(u=>u.id!==o.id&&u.handle!==o.handle).slice(0,6).map(u=>{var f,m,h;const d=nl(u);return{id:u.handle,variantId:jd(u),badge:((f=u.badge)==null?void 0:f.value)||u.tags[0]||"Curated",name:u.title,descriptor:((m=u.shortDescription)==null?void 0:m.value)||u.description||"Curated recommendation",featureLine:((h=u.featureLine)==null?void 0:h.value)||u.tags.slice(0,3).join(" · ")||"Pairs well with this setup",price:Xo(u.priceRange.minVariantPrice.amount,u.priceRange.minVariantPrice.currencyCode),imageUrl:d==null?void 0:d.url,imageAlt:(d==null?void 0:d.altText)||u.title}}),ax=()=>_r.reviews,ux=({product:o,adminMetadata:a,relatedProducts:u})=>{var Q,X,A,le,K,se,ye,Ie,Fe,Me,ve,Te,Ne,Qe,Ce,te,ce,L,W,D,x,b,H,G,ie,q,de,ae,fe,ze,Kt,cn;const d=((X=(Q=o.variants)==null?void 0:Q.edges[0])==null?void 0:X.node)??null,f=Qs((A=o.whyDifferent)==null?void 0:A.value),m=Qs((le=o.buyingGuide)==null?void 0:le.value),h=Qs(o.description)||o.descriptionHtml||`<p>${an(o.description)}</p>`,j=lx(o,a),I=el((K=o.whatsInBox)==null?void 0:K.value),C=el((se=o.bulletFeatures)==null?void 0:se.value),z=Jg(o),y=Zg(o),_=y.toLowerCase().startsWith("in stock"),F=jd(o),ee=tx(o),re=nx(o),M=Id(o);return{productHeader:{badge:((ye=o.badge)==null?void 0:ye.value)||"Curated pick",title:o.title,vendor:o.vendor||"Vibe Station",sku:(d==null?void 0:d.sku)||"—",shareUrl:M,shareLabel:"Shareable short URL"},productMain:{gallery:{images:o.images.edges.map((xt,$t)=>({id:xt.node.id||`${o.handle}-${$t}`,url:xt.node.url,altText:xt.node.altText||`${o.title} image ${$t+1}`}))||[],zoomLabel:"Zoom",prevLabel:"Prev",nextLabel:"Next"},buyBox:{variantId:F,badge:((Ie=o.badge)==null?void 0:Ie.value)||"Curated pick",name:o.title,descriptor:((Fe=o.subtitle)==null?void 0:Fe.value)||((Me=o.shortDescription)==null?void 0:Me.value)||Tr(o.descriptionHtml)||o.description,price:Xo(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),compareAtPrice:(ve=o.compareAtPriceRange)!=null&&ve.minVariantPrice?Xo(o.compareAtPriceRange.minVariantPrice.amount,o.compareAtPriceRange.minVariantPrice.currencyCode):null,stock:y,isInStock:_,features:C,reassurancePoints:re,primaryCta:((Te=o.ctaLabel)==null?void 0:Te.value)||"Add to cart",secondaryCta:((Ne=o.ctaSubtext)==null?void 0:Ne.value)||"Buy now",microLine:((Qe=o.shippingInfo)==null?void 0:Qe.value)||[(Ce=o.dispatchTime)==null?void 0:Ce.value,(te=o.supportResponseTime)==null?void 0:te.value,(ce=o.deliveryWindow)==null?void 0:ce.value].filter(Boolean).join(" · ")||"Shipping calculated at checkout · Clear returns · Responsive support",inBoxTitle:"What's in the box",inBoxLine:I.join(" · ")}},keyBenefits:{title:"Why it feels different",cards:z},featureDeepDive:{overviewTitle:"Product overview",overviewHtml:h,storyTitle:"Why this made the cut",storyHtml:f,buyingGuideTitle:"Buying guide",buyingGuideHtml:m,curatedFor:((L=o.curatedFor)==null?void 0:L.value)||((W=o.bestFor)==null?void 0:W.value)||"Players comparing feel, grip, and attack quickly.",notFor:((D=o.notFor)==null?void 0:D.value)||"Players who already know they only want one exact gauge."},deliveryAndReturns:[{id:"dispatch",badge:"Dispatch",title:"Estimated dispatch",description:((x=o.deliveryInfo)==null?void 0:x.value)||"",footer:((b=o.deliveryWindow)==null?void 0:b.value)||""},{id:"returns",badge:"Returns",title:"Returns & replacements",description:((H=o.returnsPolicy)==null?void 0:H.value)||"",footer:((G=o.replacementPolicy)==null?void 0:G.value)||""},{id:"support",badge:"Support",title:"Support response",description:((ie=o.supportInfo)==null?void 0:ie.value)||"",footer:((q=o.supportResponseTime)==null?void 0:q.value)||""}].filter(xt=>xt.description.trim().length>0||xt.footer.trim().length>0),reviews:{...ax(),supporting:(de=o.reviewSummary)!=null&&de.value?"Real review summary pulled from Shopify metafields.":"Add custom.reviews in Shopify to populate rating, review count, tags, and breakdown.",averageLabel:ee.averageValue==="—"?"No rating yet":`${ee.averageValue} / 5`,averageValue:ee.averageValue,totalReviewsLabel:ee.totalReviewsLabel,breakdown:ee.breakdown,tags:ee.tags,items:ee.items},relatedProducts:{..._r.relatedProducts,title:ex(o),items:sx(o,u)},specsAndInBox:{specificationsTitle:"Specifications",specifications:j,inBoxTitle:"In the box",inBoxItems:I,inBoxBadge:((ae=o.packCount)==null?void 0:ae.value)||"No extras required",productDetailsTitle:"Product details",productDetails:rx(o)},faq:{title:"FAQ",items:Xg((fe=o.faq)==null?void 0:fe.value)},stickyCtaRail:{variantId:F,name:o.title,price:Xo(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),stockLabel:y,isInStock:_,shippingLabel:((ze=o.deliveryWindow)==null?void 0:ze.value)||((Kt=o.shippingInfo)==null?void 0:Kt.value)||"Shipping calculated at checkout",reassurancePoints:re,addToCartLabel:((cn=o.ctaLabel)==null?void 0:cn.value)||"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}}};let nr=_r,Si=!1,yi=null,Ci=null,ji=!1;const cx=async o=>{const a=o??bd();return yi&&a===Ci||(yi=(async()=>{try{const u=a;if(!u){nr=_r,ji=!1,Si=!0,Ci=null;return}Ci=u;const[d,f]=await Promise.all([sm(u),Hg(u).catch(h=>(console.error("Failed to load public admin product metadata",h),null))]);if(!d){nr=_r,ji=!1,Si=!0;return}const m=await ix(d).catch(()=>[]);nr=ux({product:d,adminMetadata:f,relatedProducts:m}),ji=!0}catch(u){nr=_r,ji=!1,console.error("Failed to load product detail from Shopify",u)}finally{Si=!0,yi=null}})()),yi};function Lt(){const o=bd(),[a,u]=O.useState(nr),[d,f]=O.useState(!Si||Ci!==o);return O.useEffect(()=>{let m=!1;return Si&&Ci===o?(u(nr),f(!1),()=>{m=!0}):(f(!0),cx(o).then(()=>{m||(u(nr),f(!1))}),()=>{m=!0})},[o]),{...a,hasProduct:ji,isLoading:d}}function dx(){const{productHeader:o}=Lt();return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .product-title-block {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .product-title-badge-row {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .product-title-vendor {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 500;
          color: var(--muted-foreground);
        }

        .product-title-h1 {
          font-family: Inter, system-ui, sans-serif;
          font-size: 40px;
          line-height: 44px;
          letter-spacing: -0.02em;
          color: var(--foreground);
          margin: 0;
          max-width: 900px;
        }

        .product-title-meta {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          color: var(--muted-foreground);
        }

        @media (max-width: 1024px) {
          .product-title-h1 {
            font-size: 32px;
            line-height: 38px;
          }

          .product-title-meta {
            font-size: 13px;
            gap: 14px;
          }
        }

        @media (max-width: 640px) {
          .product-title-block {
            gap: 12px;
          }

          .product-title-badge-row {
            gap: 10px;
          }

          .product-title-vendor {
            font-size: 12px;
            line-height: 16px;
          }

          .product-title-h1 {
            font-size: 24px;
            line-height: 32px;
          }

          .product-title-meta {
            font-size: 12px;
            line-height: 18px;
            gap: 12px;
          }
        }
      `}),i.jsxs("div",{className:"product-title-block",children:[i.jsxs("div",{className:"product-title-badge-row",children:[i.jsx($e,{label:o.badge,variant:"accent",size:"sm"}),i.jsx("span",{className:"product-title-vendor",children:o.vendor})]}),i.jsx("h1",{className:"product-title-h1",children:o.title}),i.jsxs("div",{className:"product-title-meta",children:[i.jsxs("span",{children:["SKU: ",o.sku]}),i.jsxs("span",{children:[o.shareLabel,": ",o.shareUrl]})]})]})]})}function fx(){const{productHeader:o}=Lt();return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .breadcrumb-nav {
          display: flex;
          gap: 8px;
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: var(--muted-foreground);
          flex-wrap: wrap;
        }

        .breadcrumb-link {
          color: var(--muted-foreground);
          text-decoration: none;
        }

        .breadcrumb-separator {
          color: var(--border);
        }

        .breadcrumb-current {
          color: var(--foreground);
        }

        @media (max-width: 640px) {
          .breadcrumb-nav {
            font-size: 12px;
            line-height: 18px;
            gap: 6px;
          }
        }
      `}),i.jsx("nav",{"aria-label":"Breadcrumb",children:i.jsxs("ol",{className:"breadcrumb-nav",children:[i.jsx("li",{children:i.jsx("a",{href:"/",className:"breadcrumb-link",children:"Home"})}),i.jsx("li",{className:"breadcrumb-separator",children:"/"}),i.jsx("li",{children:i.jsx("a",{href:"/products",className:"breadcrumb-link",children:"Products"})}),i.jsx("li",{className:"breadcrumb-separator",children:"/"}),i.jsx("li",{className:"breadcrumb-current",children:o.title})]})})]})}const px={sm:"12px",md:"16px",lg:"20px"};function mx(o){switch(o){case"subtle":return{backgroundColor:"var(--muted)",border:"1px solid var(--border)",boxShadow:"none"};case"outline":return{backgroundColor:"transparent",border:"1px solid var(--border)",boxShadow:"none"};case"elevated":default:return{backgroundColor:"var(--card)",border:"1px solid var(--border)",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F"}}}function Le({children:o,mediaSlot:a,footerSlot:u,variant:d="elevated",padding:f="md",width:m="100%",height:h}){const j=mx(d),I=px[f];return i.jsxs("div",{style:{...j,borderRadius:"16px",width:m,height:h,overflow:"hidden",display:"flex",flexDirection:"column"},children:[a,o?i.jsx("div",{style:{padding:I},children:o}):null,u?i.jsx("div",{style:{padding:I,paddingTop:"0"},children:u}):null]})}function hx({children:o}){return i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",position:"relative"},children:o})}function gx({children:o}){return i.jsx("label",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function xx({children:o}){return i.jsx("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:o})}function yx({placeholder:o,value:a}){return i.jsx("input",{type:"text",placeholder:o||"Enter text...",value:a,style:{width:"100%",border:"none",outline:"none",background:"transparent",fontSize:"14px",lineHeight:"20px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",padding:0}})}function vx({children:o,error:a}){return i.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:a?"var(--destructive)":"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function wx({label:o,placeholder:a,helperText:u,error:d,disabled:f,size:m="md"}){const h=m==="sm"?"36px":"44px",j=m==="sm"?"12px":"14px",I=m==="sm"?"10px":"12px";let C="var(--border)";return d&&(C="var(--destructive)"),i.jsxs(hx,{children:[o&&i.jsx(gx,{children:o}),i.jsx(xx,{children:i.jsx("div",{style:{width:"100%",height:h,display:"flex",alignItems:"center",paddingLeft:j,paddingRight:j,backgroundColor:"var(--card)",border:`1px solid ${C}`,borderRadius:I,opacity:f?.4:1,transition:"border-color 150ms ease"},children:i.jsx(yx,{placeholder:a})})}),u&&i.jsx("div",{style:{opacity:f?.4:1},children:i.jsx(vx,{error:d,children:u})})]})}function Ed(){return i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[i.jsx(wx,{label:"Delivery pincode",placeholder:"110001",helperText:"Enter your 6-digit pincode."}),i.jsx("div",{children:i.jsx(Pe,{variant:"secondary",size:"sm",label:"Check delivery"})})]})}function kx(){return i.jsxs("div",{className:"product-main",children:[i.jsx(jx,{}),i.jsx(Sx,{})]})}function jx(){const{productMain:o}=Lt(),[a,u]=O.useState(0),d=o.gallery.images,f=d[a],m=()=>{d.length!==0&&u(j=>j===0?d.length-1:j-1)},h=()=>{d.length!==0&&u(j=>(j+1)%d.length)};return i.jsxs("div",{className:"product-main__gallery",children:[i.jsx(Le,{variant:"elevated",height:"560px",mediaSlot:i.jsxs("div",{className:"product-main__gallery-frame",children:[f?i.jsx("img",{className:"product-main__gallery-image",src:f.url,alt:f.altText}):i.jsx("div",{className:"product-main__gallery-placeholder"}),i.jsx("div",{className:"product-main__gallery-badge",children:i.jsx($e,{label:o.gallery.zoomLabel,variant:"neutral",size:"sm"})}),i.jsxs("div",{className:"product-main__gallery-actions",children:[i.jsx(Pe,{variant:"ghost",size:"sm",label:o.gallery.prevLabel,onClick:m}),i.jsx(Pe,{variant:"ghost",size:"sm",label:o.gallery.nextLabel,onClick:h})]})]})}),i.jsx("div",{className:"product-main__thumbnail-row",children:d.length>0?d.map((j,I)=>i.jsx("button",{className:`product-main__thumbnail-button${I===a?" product-main__thumbnail-button--active":""}`,type:"button",onClick:()=>u(I),children:i.jsx("img",{className:"product-main__thumbnail-image",src:j.url,alt:j.altText})},j.id)):[1,2,3,4].map(j=>i.jsx("div",{className:`product-main__thumbnail-placeholder${j===1?" product-main__thumbnail-placeholder--active":""}`},j))})]})}function Sx(){const{addItem:o}=Bn(),{productMain:a}=Lt(),u=a.buyBox.isInStock;return i.jsx("div",{className:"product-main__buy-box",children:i.jsx(Le,{variant:"elevated",padding:"lg",children:i.jsxs("div",{className:"product-main__buy-box-content",children:[i.jsx("div",{className:"product-main__badge-row",children:i.jsx($e,{label:a.buyBox.badge,variant:"accent",size:"sm"})}),i.jsx("h2",{className:"product-main__title",children:a.buyBox.name}),i.jsx("div",{className:"product-main__descriptor",children:a.buyBox.descriptor}),i.jsxs("div",{className:"product-main__price-row",children:[i.jsx("h3",{className:"product-main__price",children:a.buyBox.price}),i.jsxs("div",{className:"product-main__stock-column",children:[a.buyBox.compareAtPrice?i.jsx("span",{className:"product-main__compare-price",children:a.buyBox.compareAtPrice}):null,i.jsx("span",{className:`product-main__stock${u?" product-main__stock--in-stock":" product-main__stock--out-of-stock"}`,children:a.buyBox.stock})]})]}),i.jsx(Ed,{}),a.buyBox.reassurancePoints.length>0?i.jsx("div",{className:"product-main__reassurance-list",children:a.buyBox.reassurancePoints.map(d=>i.jsxs("div",{className:"product-main__reassurance-item",children:[i.jsx("div",{className:"product-main__reassurance-icon",children:i.jsx(Am,{className:"product-main__reassurance-check",size:12,strokeWidth:3})}),i.jsx("div",{className:"product-main__reassurance-text",children:d})]},d))}):null,i.jsxs("div",{className:"product-main__actions",children:[i.jsx(Pe,{variant:"primary",size:"lg",label:a.buyBox.primaryCta,disabled:!u||!a.buyBox.variantId,onClick:()=>{a.buyBox.variantId&&o(a.buyBox.variantId)}}),i.jsx(Pe,{variant:"secondary",size:"lg",label:a.buyBox.secondaryCta})]}),i.jsx("div",{className:"product-main__micro-line",children:a.buyBox.microLine})]})})})}function Cx(){const{deliveryAndReturns:o}=Lt();return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .delivery-returns-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .delivery-returns-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
          font-size: 20px;
          line-height: 28px;
        }

        .delivery-returns-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .delivery-card-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .delivery-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .delivery-card-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          line-height: 20px;
          font-weight: 600;
          color: var(--foreground);
          margin: 0;
        }

        .delivery-card-description {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: var(--muted-foreground);
        }

        .delivery-card-footer {
          font-family: Inter, system-ui, sans-serif;
          font-size: 12px;
          line-height: 18px;
          font-weight: 400;
          color: var(--muted-foreground);
          padding-top: 8px;
          border-top: 1px solid var(--border);
        }

        @media (max-width: 640px) {
          .delivery-returns-title {
            font-size: 18px;
            line-height: 26px;
          }

          .delivery-card-title {
            font-size: 14px;
            line-height: 19px;
          }

          .delivery-card-description {
            font-size: 13px;
            line-height: 19px;
          }

          .delivery-card-footer {
            font-size: 11px;
            line-height: 16px;
          }
        }
      `}),i.jsxs("div",{className:"delivery-returns-container",children:[i.jsx("h3",{className:"delivery-returns-title",children:"Delivery & Returns"}),i.jsx("div",{className:"delivery-returns-cards",children:o.map(a=>i.jsx(Le,{variant:"subtle",padding:"md",children:i.jsxs("div",{className:"delivery-card-content",children:[i.jsxs("div",{className:"delivery-card-header",children:[i.jsx($e,{label:a.badge,variant:"neutral",size:"sm"}),i.jsx("h4",{className:"delivery-card-title",children:a.title})]}),i.jsx("div",{className:"delivery-card-description",children:a.description}),a.footer?i.jsx("div",{className:"delivery-card-footer",children:a.footer}):null]})},a.id))})]})]})}function bx(){const{featureDeepDive:o}=Lt();return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .feature-deep-dive-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .feature-deep-dive-title-wrapper {
          text-align: center;
        }

        .feature-deep-dive-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
        }

        .feature-deep-dive-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 24px;
        }

        .feature-deep-dive-main {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-deep-dive-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-card-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .feature-card-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 18px;
          line-height: 24px;
          font-weight: 600;
          color: var(--foreground);
          margin: 0;
        }

        .feature-card-html {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          line-height: 24px;
          color: var(--muted-foreground);
        }

        .feature-story-badge {
          display: inline-flex;
          padding: 6px 12px;
          background-color: color-mix(in srgb, var(--primary) 10%, transparent);
          border-radius: 8px;
          align-self: flex-start;
        }

        .feature-story-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          color: var(--primary);
          margin: 0;
        }

        .feature-story-html {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          line-height: 24px;
          font-weight: 500;
          color: var(--foreground);
        }

        .feature-perfect-for {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
          color: var(--foreground);
        }

        .feature-not-for {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 22px;
          font-weight: 400;
          color: var(--muted-foreground);
        }

        .quick-info-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 600;
          color: var(--foreground);
        }

        .quick-info-label {
          font-family: Inter, system-ui, sans-serif;
          font-size: 11px;
          line-height: 16px;
          font-weight: 600;
          color: var(--muted-foreground);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .quick-info-value {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 500;
          color: var(--foreground);
        }

        @media (max-width: 1024px) {
          .feature-deep-dive-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-deep-dive-sidebar {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .feature-deep-dive-container {
            gap: 24px;
          }

          .feature-deep-dive-sidebar {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .feature-card-title {
            font-size: 16px;
            line-height: 22px;
          }

          .feature-card-html {
            font-size: 14px;
            line-height: 22px;
          }

          .feature-perfect-for {
            font-size: 15px;
            line-height: 22px;
          }

          .feature-not-for {
            font-size: 13px;
            line-height: 20px;
          }
        }
      `}),i.jsxs("div",{className:"feature-deep-dive-container",children:[i.jsx("div",{className:"feature-deep-dive-title-wrapper",children:i.jsx("h3",{className:"feature-deep-dive-title",children:"Product Deep Dive"})}),i.jsxs("div",{className:"feature-deep-dive-grid",children:[i.jsxs("div",{className:"feature-deep-dive-main",children:[i.jsx(Le,{variant:"elevated",padding:"lg",children:i.jsxs("div",{className:"feature-card-content",children:[i.jsxs("div",{className:"feature-card-header",children:[i.jsx(Wm,{size:20,style:{color:"var(--primary)"}}),i.jsx("h4",{className:"feature-card-title",children:o.overviewTitle})]}),i.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:o.overviewHtml}})]})}),i.jsx(Le,{variant:"elevated",padding:"lg",children:i.jsxs("div",{className:"feature-card-content",children:[i.jsx("h4",{className:"feature-card-title",children:o.buyingGuideTitle}),i.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:o.buyingGuideHtml}})]})}),o.storyHtml?i.jsx(Le,{variant:"subtle",padding:"lg",children:i.jsxs("div",{className:"feature-card-content",style:{gap:"12px"},children:[i.jsx("div",{className:"feature-story-badge",children:i.jsx("h4",{className:"feature-story-title",children:o.storyTitle})}),i.jsx("div",{className:"feature-story-html",dangerouslySetInnerHTML:{__html:o.storyHtml}})]})}):null]}),i.jsxs("div",{className:"feature-deep-dive-sidebar",children:[i.jsx(Le,{variant:"elevated",padding:"lg",children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(Hm,{size:18,style:{color:"var(--success-foreground)"}}),i.jsx($e,{label:"Perfect for",variant:"accent",size:"sm"})]}),i.jsx("div",{className:"feature-perfect-for",children:o.curatedFor})]})}),o.notFor?i.jsx(Le,{variant:"subtle",padding:"lg",children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[i.jsx($e,{label:"Not ideal for",variant:"neutral",size:"sm"}),i.jsx("div",{className:"feature-not-for",children:o.notFor})]})}):null,i.jsx(Le,{variant:"subtle",padding:"md",children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(yd,{size:16,style:{color:"var(--primary)"}}),i.jsx("div",{className:"quick-info-title",children:"Quick Info"})]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingTop:"4px"},children:[i.jsxs("div",{children:[i.jsx("div",{className:"quick-info-label",children:"Protection Level"}),i.jsx("div",{className:"quick-info-value",children:"10mm Padding"})]}),i.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[i.jsx("div",{className:"quick-info-label",children:"Water Resistant"}),i.jsx("div",{className:"quick-info-value",children:"Light rain protection"})]}),i.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[i.jsx("div",{className:"quick-info-label",children:"Compatibility"}),i.jsx("div",{className:"quick-info-value",children:"Most acoustic & electric"})]})]})]})})]})]})]})]})}function Ix(){const{keyBenefits:o}=Lt();if(o.cards.length===0)return null;const a=[Gm,yd,ah];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .key-benefits-title-container {
          text-align: center;
        }

        .key-benefits-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
        }

        .key-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .key-benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent) 0%, color-mix(in srgb, var(--primary) 5%, transparent) 100%);
          border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .key-benefit-icon svg {
          color: var(--primary);
          stroke-width: 2;
        }

        .key-benefit-badge {
          font-family: Inter, system-ui, sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 0.05em;
        }

        .key-benefit-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
          color: var(--foreground);
          margin: 0;
        }

        .key-benefit-description {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: var(--muted-foreground);
        }

        .key-benefit-footer {
          font-family: Inter, system-ui, sans-serif;
          font-size: 12px;
          line-height: 18px;
          font-weight: 400;
          color: var(--muted-foreground);
          padding-top: 8px;
          border-top: 1px solid var(--border);
        }

        @media (max-width: 1024px) {
          .key-benefits-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .key-benefits-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .key-benefit-icon {
            width: 40px;
            height: 40px;
          }

          .key-benefit-icon svg {
            width: 20px;
            height: 20px;
          }

          .key-benefit-title {
            font-size: 15px;
            line-height: 22px;
          }

          .key-benefit-description {
            font-size: 13px;
            line-height: 19px;
          }

          .key-benefit-footer {
            font-size: 11px;
            line-height: 16px;
          }
        }
      `}),i.jsxs(ke,{direction:"vertical",gap:24,children:[i.jsx("div",{className:"key-benefits-title-container",children:i.jsx("h3",{className:"key-benefits-title",children:o.title})}),i.jsx("div",{className:"key-benefits-grid",children:o.cards.map((u,d)=>{const f=a[d%a.length];return i.jsx(Le,{variant:"elevated",padding:"lg",children:i.jsxs(ke,{direction:"vertical",gap:16,style:{alignItems:"flex-start"},children:[i.jsx("div",{className:"key-benefit-icon",children:i.jsx(f,{size:24})}),i.jsx("div",{className:"key-benefit-badge",children:u.badge}),i.jsx("h4",{className:"key-benefit-title",children:u.title}),u.description?i.jsx("div",{className:"key-benefit-description",children:u.description}):null,u.footer?i.jsx("div",{className:"key-benefit-footer",children:u.footer}):null]})},u.id)})})]})]})}const _x=/^(.*?)\s*,?\s*\((#[0-9a-f]{3,8})\)$/i,Ex=o=>{const a=o.split("|").map(u=>u.trim()).filter(Boolean).map(u=>{const d=u.match(_x);return d?{label:d[1].trim().replace(/,\s*$/,""),hex:d[2]}:null});return a.every(Boolean)?a:[]};function Zc({value:o}){const a=Ex(o);return a.length===0?i.jsx(i.Fragment,{children:o}):i.jsx("div",{className:"specs-swatch-list",children:a.map(u=>i.jsxs("div",{className:"specs-swatch-item",children:[i.jsx("span",{className:"specs-swatch-box",style:{backgroundColor:u.hex},"aria-hidden":"true"}),i.jsx("span",{children:u.label})]},`${u.label}-${u.hex}`))})}function Tx(){const{specsAndInBox:o}=Lt();return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .specs-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .specs-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
          font-size: 20px;
          line-height: 28px;
        }

        .specs-card-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .specs-card-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          line-height: 20px;
          font-weight: 600;
          color: var(--foreground);
          margin: 0;
        }

        .specs-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .specs-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border);
          gap: 16px;
        }

        .specs-label {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 500;
          color: var(--muted-foreground);
        }

        .specs-value {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 400;
          color: var(--foreground);
          text-align: right;
        }

        .specs-swatch-list {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 8px 12px;
        }

        .specs-swatch-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .specs-swatch-box {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          border: 1px solid color-mix(in srgb, var(--foreground) 18%, transparent);
          flex: 0 0 auto;
        }

        .inbox-header {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .inbox-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .inbox-item {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 400;
          color: var(--muted-foreground);
        }

        .details-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .details-item-label {
          font-family: Inter, system-ui, sans-serif;
          font-size: 12px;
          line-height: 18px;
          font-weight: 600;
          color: var(--muted-foreground);
        }

        .details-item-value {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 400;
          color: var(--foreground);
        }

        @media (max-width: 640px) {
          .specs-title {
            font-size: 18px;
            line-height: 26px;
          }

          .specs-card-title {
            font-size: 14px;
            line-height: 19px;
          }

          .specs-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding-bottom: 10px;
          }

          .specs-label {
            font-size: 12px;
            line-height: 17px;
          }

          .specs-value {
            font-size: 12px;
            line-height: 17px;
            text-align: left;
          }

          .specs-swatch-list {
            justify-content: flex-start;
          }

          .inbox-item {
            font-size: 12px;
            line-height: 17px;
          }

          .details-item-label {
            font-size: 11px;
            line-height: 16px;
          }

          .details-item-value {
            font-size: 12px;
            line-height: 17px;
          }
        }
      `}),i.jsxs("div",{className:"specs-container",children:[i.jsx("h3",{className:"specs-title",children:"Specifications & What's Included"}),i.jsx(Le,{variant:"elevated",padding:"md",children:i.jsxs("div",{className:"specs-card-content",children:[i.jsx("h4",{className:"specs-card-title",children:o.specificationsTitle}),i.jsx("div",{className:"specs-list",children:o.specifications.map(a=>i.jsxs("div",{className:"specs-row",children:[i.jsx("div",{className:"specs-label",children:a.label}),i.jsx("div",{className:"specs-value",children:i.jsx(Zc,{value:a.value})})]},a.label))})]})}),i.jsx(Le,{variant:"subtle",padding:"md",children:i.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[i.jsxs("div",{className:"inbox-header",children:[i.jsx("h4",{className:"specs-card-title",children:o.inBoxTitle}),i.jsx($e,{label:o.inBoxBadge,variant:"neutral",size:"sm"})]}),i.jsx("div",{className:"inbox-list",children:o.inBoxItems.map(a=>i.jsxs("div",{className:"inbox-item",children:["• ",a]},a))})]})}),i.jsx(Le,{variant:"subtle",padding:"md",children:i.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[i.jsx("h4",{className:"specs-card-title",children:o.productDetailsTitle}),i.jsx("div",{className:"details-list",children:o.productDetails.map(a=>i.jsxs("div",{children:[i.jsx("div",{className:"details-item-label",children:a.label}),i.jsx("div",{className:"details-item-value",children:i.jsx(Zc,{value:a.value})})]},a.label))})]})})]})]})}const Nx=[{stars:5,count:28,label:"5 star"},{stars:4,count:9,label:"4 star"},{stars:3,count:3,label:"3 star"},{stars:2,count:1,label:"2 star"},{stars:1,count:1,label:"1 star"}],zx=["Clear sound","Easy setup","Worth the price","Reliable build"],Rx=[{id:"fallback-review-1",name:"Arjun S.",role:"Weekend guitarist",quote:"The finish feels premium and the setup was straightforward. It started feeling like part of my regular rig on day one.",useCase:"Home practice sessions and quick recording demos.",rating:5,tags:["Clear sound","Easy setup"],verified:!0},{id:"fallback-review-2",name:"Neha P.",role:"Music teacher",quote:"Good balance between quality and price. I needed something dependable for repeated daily use and this has held up well.",useCase:"Student lessons and in-studio backup setup.",rating:4,tags:["Reliable build","Worth the price"],verified:!0},{id:"fallback-review-3",name:"Rahul K.",role:"Gigging musician",quote:"It solved the exact friction I had with my previous setup. The overall feel is more consistent and easier to trust on stage.",useCase:"Live sets, rehearsals, and weekly venue rotations.",rating:5,tags:["Reliable build"],verified:!0}],Jc=3,Lx=3;function Zs({rating:o,size:a=16}){return i.jsx("div",{style:{display:"flex",gap:"2px"},children:[1,2,3,4,5].map(u=>i.jsx(Zm,{size:a,fill:u<=o?"var(--primary)":"none",stroke:u<=o?"var(--primary)":"var(--border)",strokeWidth:1.5},u))})}function Px(){const{reviews:o}=Lt(),[a,u]=O.useState("all"),[d,f]=O.useState("recent"),[m,h]=O.useState(Jc),j=o.breakdown.length>0?o.breakdown:Nx,I=o.items.length>0?o.items:Rx,C=o.tags.length>0?o.tags:zx,z=j.reduce((A,le)=>A+le.count,0),y=j.reduce((A,le)=>A+le.stars*le.count,0),_=z>0?(y/z).toFixed(1):"—",F=o.averageValue!=="—"?o.averageValue:_,ee=o.items.length===0&&o.breakdown.length===0,re=a==="all"?I:I.filter(A=>A.rating===a),M=d==="helpful"?[...re].reverse():re,Q=M.slice(0,m),X=M.length>m;return O.useEffect(()=>{h(Jc)},[a,d,o.items]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .reviews-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .reviews-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
        }

        .reviews-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
        }

        .reviews-supporting {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: var(--muted-foreground);
        }

        .reviews-summary-grid {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 32px;
          align-items: start;
        }

        .reviews-breakdown-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 4px;
        }

        .reviews-filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border);
          gap: 16px;
        }

        .reviews-filter-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          color: var(--foreground);
        }

        .reviews-filter-count {
          font-weight: 400;
          color: var(--muted-foreground);
          margin-left: 8px;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .reviews-summary-grid {
            grid-template-columns: 280px 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .reviews-container {
            gap: 28px;
          }

          .reviews-supporting {
            font-size: 13px;
            line-height: 19px;
          }

          .reviews-summary-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .reviews-filters-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .reviews-filter-title {
            font-size: 13px;
          }
        }
      `}),i.jsxs("div",{className:"reviews-container",children:[i.jsxs("div",{className:"reviews-header",children:[i.jsx("h3",{className:"reviews-title",children:o.title}),i.jsx("div",{className:"reviews-supporting",children:ee?"Sample customer feedback shown until product-specific reviews are available.":o.supporting})]}),i.jsxs("div",{className:"reviews-summary-grid",children:[i.jsx(Le,{variant:"elevated",padding:"lg",children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center",textAlign:"center"},children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"56px",lineHeight:"1",fontWeight:"800",color:"var(--foreground)",letterSpacing:"-0.02em"},children:F}),i.jsx(Zs,{rating:Math.round(Number(F)||0),size:24}),i.jsxs("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--muted-foreground)"},children:["Based on ",z.toLocaleString()," reviews"]})]}),i.jsx("div",{style:{width:"100%",paddingTop:"12px",borderTop:"1px solid var(--border)"},children:i.jsx(Pe,{variant:"primary",size:"md",label:o.writeReviewLabel,onClick:()=>console.log("Write review")})})]})}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx("div",{className:"reviews-breakdown-title",children:"Rating Breakdown"}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:j.map(A=>{const le=Math.round(A.count/z*100);return i.jsxs("button",{onClick:()=>u(a===A.stars?"all":A.stars),style:{display:"grid",gridTemplateColumns:"80px 1fr 60px 48px",gap:"12px",alignItems:"center",background:"none",border:"none",padding:"8px 12px",borderRadius:"8px",cursor:"pointer",backgroundColor:a===A.stars?"color-mix(in srgb, var(--primary) 5%, transparent)":"transparent",transition:"background-color 0.15s ease"},onMouseEnter:K=>{a!==A.stars&&(K.currentTarget.style.backgroundColor="var(--muted)")},onMouseLeave:K=>{a!==A.stars&&(K.currentTarget.style.backgroundColor="transparent")},children:[i.jsx(Zs,{rating:A.stars,size:14}),i.jsx("div",{style:{height:"10px",borderRadius:"999px",backgroundColor:"var(--muted)",overflow:"hidden",position:"relative"},children:i.jsx("div",{style:{width:`${le}%`,height:"100%",backgroundColor:"var(--primary)",borderRadius:"999px",transition:"width 0.3s ease"}})}),i.jsxs("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)",textAlign:"right"},children:[le,"%"]}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"600",color:"var(--foreground)",textAlign:"right"},children:A.count})]},A.stars)})}),C.length>0?i.jsxs("div",{style:{paddingTop:"8px"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)",marginBottom:"10px"},children:"Most mentioned"}),i.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:C.map(A=>i.jsx($e,{label:A,variant:"neutral",size:"sm"},A))})]}):null]})]}),i.jsxs("div",{className:"reviews-filters-header",children:[i.jsxs("div",{className:"reviews-filter-title",children:[a==="all"?"All Reviews":`${a} Star Reviews`,i.jsxs("span",{className:"reviews-filter-count",children:["(",M.length,")"]})]}),i.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:i.jsxs("select",{value:d,onChange:A=>f(A.target.value),style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500",color:"var(--foreground)",backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"8px",padding:"6px 12px",cursor:"pointer",appearance:"none",paddingRight:"32px",backgroundImage:`url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 5L6 8L9 5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 10px center"},children:[i.jsx("option",{value:"recent",children:"Most Recent"}),i.jsx("option",{value:"helpful",children:"Most Helpful"})]})})]}),i.jsx("div",{className:"reviews-list",children:Q.map(A=>i.jsx(Fx,{review:A,verifiedLabel:o.verifiedLabel,useCasePrefix:o.useCasePrefix},A.id))}),X?i.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:"8px"},children:i.jsx(Pe,{variant:"secondary",size:"lg",label:o.loadMoreLabel,onClick:()=>h(A=>Math.min(A+Lx,M.length))})}):null]})]})}function Fx({review:o,verifiedLabel:a,useCasePrefix:u}){const[d,f]=O.useState(null),[m,h]=O.useState(Math.floor(Math.random()*50)+10);return i.jsx(Le,{variant:"elevated",padding:"lg",children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"16px"},children:i.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"flex-start"},children:[i.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:"color-mix(in srgb, var(--primary) 10%, transparent)",border:"2px solid color-mix(in srgb, var(--primary) 20%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",fontWeight:"600",color:"var(--primary)",flexShrink:0},children:o.name.charAt(0)}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"15px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)"},children:o.name}),i.jsx($e,{label:a,variant:"neutral",size:"sm"})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(Zs,{rating:5,size:14}),i.jsx("span",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)"},children:"• 2 weeks ago"})]}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.role})]})]})}),i.jsxs("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"15px",lineHeight:"24px",fontWeight:"400",color:"var(--foreground)"},children:['"',o.quote,'"']}),i.jsx("div",{style:{padding:"12px 16px",backgroundColor:"var(--muted)",borderRadius:"8px",borderLeft:"3px solid var(--primary)"},children:i.jsxs("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:[i.jsx("span",{style:{fontWeight:"600",color:"var(--foreground)"},children:u})," ",o.useCase]})}),o.tags.length>0?i.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:o.tags.map(j=>i.jsx($e,{label:j,variant:"neutral",size:"sm"},j))}):null,i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"12px",borderTop:"1px solid var(--border)"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:"Was this helpful?"}),i.jsxs("div",{style:{display:"flex",gap:"8px"},children:[i.jsxs("button",{onClick:()=>{d===!0?(f(null),h(j=>j-1)):(h(d===!1?j=>j+1:j=>j+1),f(!0))},style:{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",borderRadius:"6px",border:"1px solid var(--border)",backgroundColor:d===!0?"color-mix(in srgb, var(--primary) 10%, transparent)":"var(--card)",color:d===!0?"var(--primary)":"var(--muted-foreground)",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif",fontSize:"13px",fontWeight:"500",transition:"all 0.15s ease"},onMouseEnter:j=>{d!==!0&&(j.currentTarget.style.backgroundColor="var(--muted)")},onMouseLeave:j=>{d!==!0&&(j.currentTarget.style.backgroundColor="var(--card)")},children:[i.jsx(ih,{size:14,fill:d===!0?"currentColor":"none"}),i.jsx("span",{children:d===!0?"Helpful":"Yes"}),i.jsxs("span",{style:{fontWeight:"600",color:d===!0?"var(--primary)":"var(--foreground)"},children:["(",m,")"]})]}),i.jsxs("button",{onClick:()=>{d===!1?f(null):(d===!0&&h(j=>j-1),f(!1))},style:{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",borderRadius:"6px",border:"1px solid var(--border)",backgroundColor:d===!1?"color-mix(in srgb, var(--destructive) 10%, transparent)":"var(--card)",color:d===!1?"var(--destructive)":"var(--muted-foreground)",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif",fontSize:"13px",fontWeight:"500",transition:"all 0.15s ease"},onMouseEnter:j=>{d!==!1&&(j.currentTarget.style.backgroundColor="var(--muted)")},onMouseLeave:j=>{d!==!1&&(j.currentTarget.style.backgroundColor="var(--card)")},children:[i.jsx(nh,{size:14,fill:d===!1?"currentColor":"none"}),i.jsx("span",{children:"No"})]})]})]})]})})}function Dx(){const{faq:o}=Lt();return o.items.length===0?null:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[i.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:o.title}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px"},children:o.items.map(a=>i.jsx(Le,{variant:"elevated",padding:"lg",children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--foreground)"},children:a.question}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"22px",fontWeight:"400",color:"var(--muted-foreground)"},children:a.answer})]})},a.question))})]})}function Ax(){const{addItem:o}=Bn(),{relatedProducts:a}=Lt();return i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:a.title}),i.jsx(Pe,{variant:"secondary",size:"sm",label:a.viewAllLabel})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:a.items.map(u=>i.jsx(Le,{variant:"elevated",mediaSlot:i.jsxs("div",{style:{position:"relative",width:"100%",height:"220px"},children:[u.imageUrl?i.jsx("img",{src:u.imageUrl,alt:u.imageAlt||u.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):i.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--muted)"}}),i.jsx("div",{style:{position:"absolute",top:"12px",left:"12px"},children:i.jsx($e,{label:u.badge,variant:"neutral",size:"sm"})})]}),footerSlot:i.jsx(Pe,{variant:"primary",size:"md",label:a.addToCartLabel,disabled:!u.variantId,onClick:()=>{u.variantId&&o(u.variantId)}}),children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[i.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:u.name}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:u.descriptor}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)"},children:u.featureLine}),i.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:u.price})]})},u.id))})]})}function Bx(){const{hasProduct:o,isLoading:a}=Lt();return a?i.jsx(kg,{}):o?i.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[i.jsx("section",{style:{paddingTop:"24px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:i.jsx(he,{children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[i.jsx(fx,{}),i.jsx(dx,{}),i.jsx(kx,{})]})})}),i.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:i.jsx(he,{children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"},children:[i.jsx(Cx,{}),i.jsx(Tx,{})]})})}),i.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:i.jsx(he,{children:i.jsx(Ix,{})})}),i.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:i.jsx(he,{children:i.jsx(bx,{})})}),i.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:i.jsx(he,{children:i.jsx(Px,{})})}),i.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:i.jsx(he,{children:i.jsx(Dx,{})})}),i.jsx("section",{style:{paddingTop:"40px",paddingBottom:"48px",backgroundColor:"var(--card)"},children:i.jsx(he,{children:i.jsx(Ax,{})})})]}):i.jsx("section",{style:{paddingTop:"64px",paddingBottom:"80px",backgroundColor:"var(--card)"},children:i.jsx(he,{children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[i.jsx("h1",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"32px",lineHeight:"38px",color:"var(--foreground)"},children:"Product unavailable"}),i.jsx("p",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",color:"var(--muted-foreground)"},children:"This product could not be loaded for the requested handle."})]})})})}function Mx({query:o,onQueryChange:a,onSearch:u,isSearching:d=!1}){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .product-search-form {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .product-search-input-wrapper {
          flex: 1;
          position: relative;
          height: 44px;
        }

        .product-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          pointer-events: none;
          z-index: 1;
        }

        .product-search-input {
          width: 100%;
          height: 44px;
          border-radius: 12px;
          background-color: var(--card);
          border: 1px solid var(--border);
          padding-left: 48px;
          padding-right: 16px;
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: var(--foreground);
          box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
          outline: none;
          transition: all 150ms ease;
        }

        .product-search-button-wrapper {
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .product-search-form {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 16px;
          }

          .product-search-input-wrapper {
            width: 100%;
          }

          .product-search-button-wrapper {
            width: 100%;
          }

          .product-search-input {
            font-size: 16px; /* Prevent zoom on iOS */
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .product-search-button-wrapper {
            min-width: 120px;
          }
        }
      `}),i.jsxs("form",{className:"product-search-form",onSubmit:f=>{f.preventDefault(),u()},children:[i.jsxs("div",{className:"product-search-input-wrapper",children:[i.jsx("div",{className:"product-search-icon",children:i.jsx(qm,{size:20,color:"var(--muted-foreground)",strokeWidth:2})}),i.jsx("input",{type:"text",placeholder:"Search curated gear…",value:o,onChange:f=>a(f.target.value),className:"product-search-input","aria-label":"Search products",onFocus:f=>{f.target.style.borderColor="var(--ring)",f.target.style.boxShadow="0 0 0 4px rgba(105, 65, 198, 0.12), 0 1px 2px 0 rgba(16, 24, 40, 0.05)"},onBlur:f=>{f.target.style.borderColor="var(--border)",f.target.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.05)"}})]}),i.jsx("div",{className:"product-search-button-wrapper",children:i.jsx(Pe,{variant:"primary",size:"md",label:d?"Searching...":"Search",disabled:d,fullWidth:!0})})]})]})}const Ys=15;function Ox({filters:o,activeFilter:a,onFilterChange:u,resetLabel:d}){var z,y;const[f,m]=O.useState(!1),h=(z=o.find(_=>_.id===a))==null?void 0:z.label,j=o.length>Ys,I=f?o:o.slice(0,Ys),C=o.length-Ys;return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .product-filters-wrapper {
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }

        .filter-label {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          color: var(--muted-foreground);
          margin-right: 4px;
        }

        .filter-chip {
          height: 30px;
          padding-left: 12px;
          padding-right: 12px;
          border-radius: 16px;
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          cursor: pointer;
          transition: all 150ms ease;
          outline: none;
          white-space: nowrap;
        }

        .filter-spacer {
          margin-left: auto;
        }

        .filter-reset-button {
          height: 30px;
          padding-left: 12px;
          padding-right: 12px;
          border-radius: 8px;
          background-color: transparent;
          border: none;
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          color: var(--muted-foreground);
          cursor: pointer;
          transition: color 150ms ease;
          outline: none;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .product-filters-wrapper {
            margin-bottom: 12px;
            padding-bottom: 12px;
          }

          .filter-label {
            font-size: 13px;
            width: 100%;
            margin-bottom: 8px;
          }

          .filter-chip {
            font-size: 13px;
            height: 28px;
            padding-left: 10px;
            padding-right: 10px;
          }

          .filter-spacer {
            display: none;
          }

          .filter-reset-button {
            font-size: 13px;
            height: 28px;
            padding-left: 10px;
            padding-right: 10px;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .filter-chip {
            font-size: 13px;
          }
        }
      `}),i.jsxs(wd,{wrap:"on",gap:10,align:"center",className:"product-filters-wrapper",children:[i.jsx("span",{className:"filter-label",children:"Filter:"}),I.map(_=>i.jsx("button",{onClick:()=>u(_.id),className:"filter-chip",style:{backgroundColor:a===_.id?"var(--accent)":"var(--muted)",border:a===_.id?"1px solid var(--ring)":"1px solid var(--border)",color:a===_.id?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:F=>{a!==_.id&&(F.currentTarget.style.backgroundColor="var(--muted)",F.currentTarget.style.borderColor="var(--border)")},onMouseLeave:F=>{a!==_.id&&(F.currentTarget.style.backgroundColor="var(--muted)",F.currentTarget.style.borderColor="var(--border)")},children:_.label},_.id)),j&&i.jsx("button",{onClick:()=>m(!f),className:"filter-chip",style:{backgroundColor:"transparent",border:"1px solid var(--border)",color:"var(--muted-foreground)"},onMouseEnter:_=>{_.currentTarget.style.backgroundColor="var(--muted)",_.currentTarget.style.color="var(--foreground)"},onMouseLeave:_=>{_.currentTarget.style.backgroundColor="transparent",_.currentTarget.style.color="var(--muted-foreground)"},children:f?"Show less":`+${C} more`}),i.jsx("div",{className:"filter-spacer"}),h&&a!==((y=o[0])==null?void 0:y.id)&&i.jsxs("button",{onClick:()=>{var _;return u(((_=o[0])==null?void 0:_.id)??"all")},className:"filter-reset-button",onMouseEnter:_=>{_.currentTarget.style.color="var(--foreground)"},onMouseLeave:_=>{_.currentTarget.style.color="var(--muted-foreground)"},children:[i.jsx(lh,{size:14,strokeWidth:2.5}),d??"Reset filters"]})]})]})}var Hx=od();const $x=id(Hx);function Wx(o){if(typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",a.appendChild(u),u.styleSheet?u.styleSheet.cssText=o:u.appendChild(document.createTextNode(o))}const Ux=o=>{switch(o){case"success":return Yx;case"info":return Kx;case"warning":return qx;case"error":return Gx;default:return null}},Vx=Array(12).fill(0),Qx=({visible:o,className:a})=>P.createElement("div",{className:["sonner-loading-wrapper",a].filter(Boolean).join(" "),"data-visible":o},P.createElement("div",{className:"sonner-spinner"},Vx.map((u,d)=>P.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${d}`})))),Yx=P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},P.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),qx=P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},P.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Kx=P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},P.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Gx=P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},P.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Xx=P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},P.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),P.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Zx=()=>{const[o,a]=P.useState(document.hidden);return P.useEffect(()=>{const u=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",u),()=>window.removeEventListener("visibilitychange",u)},[]),o};let Js=1;class Jx{constructor(){this.subscribe=a=>(this.subscribers.push(a),()=>{const u=this.subscribers.indexOf(a);this.subscribers.splice(u,1)}),this.publish=a=>{this.subscribers.forEach(u=>u(a))},this.addToast=a=>{this.publish(a),this.toasts=[...this.toasts,a]},this.create=a=>{var u;const{message:d,...f}=a,m=typeof(a==null?void 0:a.id)=="number"||((u=a.id)==null?void 0:u.length)>0?a.id:Js++,h=this.toasts.find(I=>I.id===m),j=a.dismissible===void 0?!0:a.dismissible;return this.dismissedToasts.has(m)&&this.dismissedToasts.delete(m),h?this.toasts=this.toasts.map(I=>I.id===m?(this.publish({...I,...a,id:m,title:d}),{...I,...a,id:m,dismissible:j,title:d}):I):this.addToast({title:d,...f,dismissible:j,id:m}),m},this.dismiss=a=>(a?(this.dismissedToasts.add(a),requestAnimationFrame(()=>this.subscribers.forEach(u=>u({id:a,dismiss:!0})))):this.toasts.forEach(u=>{this.subscribers.forEach(d=>d({id:u.id,dismiss:!0}))}),a),this.message=(a,u)=>this.create({...u,message:a}),this.error=(a,u)=>this.create({...u,message:a,type:"error"}),this.success=(a,u)=>this.create({...u,type:"success",message:a}),this.info=(a,u)=>this.create({...u,type:"info",message:a}),this.warning=(a,u)=>this.create({...u,type:"warning",message:a}),this.loading=(a,u)=>this.create({...u,type:"loading",message:a}),this.promise=(a,u)=>{if(!u)return;let d;u.loading!==void 0&&(d=this.create({...u,promise:a,type:"loading",message:u.loading,description:typeof u.description!="function"?u.description:void 0}));const f=Promise.resolve(a instanceof Function?a():a);let m=d!==void 0,h;const j=f.then(async C=>{if(h=["resolve",C],P.isValidElement(C))m=!1,this.create({id:d,type:"default",message:C});else if(ty(C)&&!C.ok){m=!1;const y=typeof u.error=="function"?await u.error(`HTTP error! status: ${C.status}`):u.error,_=typeof u.description=="function"?await u.description(`HTTP error! status: ${C.status}`):u.description,ee=typeof y=="object"&&!P.isValidElement(y)?y:{message:y};this.create({id:d,type:"error",description:_,...ee})}else if(C instanceof Error){m=!1;const y=typeof u.error=="function"?await u.error(C):u.error,_=typeof u.description=="function"?await u.description(C):u.description,ee=typeof y=="object"&&!P.isValidElement(y)?y:{message:y};this.create({id:d,type:"error",description:_,...ee})}else if(u.success!==void 0){m=!1;const y=typeof u.success=="function"?await u.success(C):u.success,_=typeof u.description=="function"?await u.description(C):u.description,ee=typeof y=="object"&&!P.isValidElement(y)?y:{message:y};this.create({id:d,type:"success",description:_,...ee})}}).catch(async C=>{if(h=["reject",C],u.error!==void 0){m=!1;const z=typeof u.error=="function"?await u.error(C):u.error,y=typeof u.description=="function"?await u.description(C):u.description,F=typeof z=="object"&&!P.isValidElement(z)?z:{message:z};this.create({id:d,type:"error",description:y,...F})}}).finally(()=>{m&&(this.dismiss(d),d=void 0),u.finally==null||u.finally.call(u)}),I=()=>new Promise((C,z)=>j.then(()=>h[0]==="reject"?z(h[1]):C(h[1])).catch(z));return typeof d!="string"&&typeof d!="number"?{unwrap:I}:Object.assign(d,{unwrap:I})},this.custom=(a,u)=>{const d=(u==null?void 0:u.id)||Js++;return this.create({jsx:a(d),id:d,...u}),d},this.getActiveToasts=()=>this.toasts.filter(a=>!this.dismissedToasts.has(a.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const ht=new Jx,ey=(o,a)=>{const u=(a==null?void 0:a.id)||Js++;return ht.addToast({title:o,...a,id:u}),u},ty=o=>o&&typeof o=="object"&&"ok"in o&&typeof o.ok=="boolean"&&"status"in o&&typeof o.status=="number",ny=ey,ry=()=>ht.toasts,iy=()=>ht.getActiveToasts(),ed=Object.assign(ny,{success:ht.success,info:ht.info,warning:ht.warning,error:ht.error,custom:ht.custom,message:ht.message,promise:ht.promise,dismiss:ht.dismiss,loading:ht.loading},{getHistory:ry,getToasts:iy});Wx("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function qo(o){return o.label!==void 0}const oy=3,ly="24px",sy="16px",td=4e3,ay=356,uy=14,cy=45,dy=200;function qt(...o){return o.filter(Boolean).join(" ")}function fy(o){const[a,u]=o.split("-"),d=[];return a&&d.push(a),u&&d.push(u),d}const py=o=>{var a,u,d,f,m,h,j,I,C;const{invert:z,toast:y,unstyled:_,interacting:F,setHeights:ee,visibleToasts:re,heights:M,index:Q,toasts:X,expanded:A,removeToast:le,defaultRichColors:K,closeButton:se,style:ye,cancelButtonStyle:Ie,actionButtonStyle:Fe,className:Me="",descriptionClassName:ve="",duration:Te,position:Ne,gap:Qe,expandByDefault:Ce,classNames:te,icons:ce,closeButtonAriaLabel:L="Close toast"}=o,[W,D]=P.useState(null),[x,b]=P.useState(null),[H,G]=P.useState(!1),[ie,q]=P.useState(!1),[de,ae]=P.useState(!1),[fe,ze]=P.useState(!1),[Kt,cn]=P.useState(!1),[xt,$t]=P.useState(0),[Li,Nr]=P.useState(0),Gt=P.useRef(y.duration||Te||td),zr=P.useRef(null),yt=P.useRef(null),Mn=Q===0,dn=Q+1<=re,Xe=y.type,Xt=y.dismissible!==!1,Pi=y.className||"",Fi=y.descriptionClassName||"",On=P.useMemo(()=>M.findIndex(oe=>oe.toastId===y.id)||0,[M,y.id]),Rr=P.useMemo(()=>{var oe;return(oe=y.closeButton)!=null?oe:se},[y.closeButton,se]),Hn=P.useMemo(()=>y.duration||Te||td,[y.duration,Te]),rr=P.useRef(0),Ct=P.useRef(0),fn=P.useRef(0),pn=P.useRef(null),[Di,Ai]=Ne.split("-"),Bi=P.useMemo(()=>M.reduce((oe,De,We)=>We>=On?oe:oe+De.height,0),[M,On]),ir=Zx(),Lr=y.invert||z,$n=Xe==="loading";Ct.current=P.useMemo(()=>On*Qe+Bi,[On,Bi]),P.useEffect(()=>{Gt.current=Hn},[Hn]),P.useEffect(()=>{G(!0)},[]),P.useEffect(()=>{const oe=yt.current;if(oe){const De=oe.getBoundingClientRect().height;return Nr(De),ee(We=>[{toastId:y.id,height:De,position:y.position},...We]),()=>ee(We=>We.filter(nt=>nt.toastId!==y.id))}},[ee,y.id]),P.useLayoutEffect(()=>{if(!H)return;const oe=yt.current,De=oe.style.height;oe.style.height="auto";const We=oe.getBoundingClientRect().height;oe.style.height=De,Nr(We),ee(nt=>nt.find(Oe=>Oe.toastId===y.id)?nt.map(Oe=>Oe.toastId===y.id?{...Oe,height:We}:Oe):[{toastId:y.id,height:We,position:y.position},...nt])},[H,y.title,y.description,ee,y.id]);const bt=P.useCallback(()=>{q(!0),$t(Ct.current),ee(oe=>oe.filter(De=>De.toastId!==y.id)),setTimeout(()=>{le(y)},dy)},[y,le,ee,Ct]);P.useEffect(()=>{if(y.promise&&Xe==="loading"||y.duration===1/0||y.type==="loading")return;let oe;return A||F||ir?(()=>{if(fn.current<rr.current){const nt=new Date().getTime()-rr.current;Gt.current=Gt.current-nt}fn.current=new Date().getTime()})():(()=>{Gt.current!==1/0&&(rr.current=new Date().getTime(),oe=setTimeout(()=>{y.onAutoClose==null||y.onAutoClose.call(y,y),bt()},Gt.current))})(),()=>clearTimeout(oe)},[A,F,y,Xe,ir,bt]),P.useEffect(()=>{y.delete&&bt()},[bt,y.delete]);function Pr(){var oe;if(ce!=null&&ce.loading){var De;return P.createElement("div",{className:qt(te==null?void 0:te.loader,y==null||(De=y.classNames)==null?void 0:De.loader,"sonner-loader"),"data-visible":Xe==="loading"},ce.loading)}return P.createElement(Qx,{className:qt(te==null?void 0:te.loader,y==null||(oe=y.classNames)==null?void 0:oe.loader),visible:Xe==="loading"})}const mn=y.icon||(ce==null?void 0:ce[Xe])||Ux(Xe);var Zt,Fr;return P.createElement("li",{tabIndex:0,ref:yt,className:qt(Me,Pi,te==null?void 0:te.toast,y==null||(a=y.classNames)==null?void 0:a.toast,te==null?void 0:te.default,te==null?void 0:te[Xe],y==null||(u=y.classNames)==null?void 0:u[Xe]),"data-sonner-toast":"","data-rich-colors":(Zt=y.richColors)!=null?Zt:K,"data-styled":!(y.jsx||y.unstyled||_),"data-mounted":H,"data-promise":!!y.promise,"data-swiped":Kt,"data-removed":ie,"data-visible":dn,"data-y-position":Di,"data-x-position":Ai,"data-index":Q,"data-front":Mn,"data-swiping":de,"data-dismissible":Xt,"data-type":Xe,"data-invert":Lr,"data-swipe-out":fe,"data-swipe-direction":x,"data-expanded":!!(A||Ce&&H),style:{"--index":Q,"--toasts-before":Q,"--z-index":X.length-Q,"--offset":`${ie?xt:Ct.current}px`,"--initial-height":Ce?"auto":`${Li}px`,...ye,...y.style},onDragEnd:()=>{ae(!1),D(null),pn.current=null},onPointerDown:oe=>{$n||!Xt||(zr.current=new Date,$t(Ct.current),oe.target.setPointerCapture(oe.pointerId),oe.target.tagName!=="BUTTON"&&(ae(!0),pn.current={x:oe.clientX,y:oe.clientY}))},onPointerUp:()=>{var oe,De,We;if(fe||!Xt)return;pn.current=null;const nt=Number(((oe=yt.current)==null?void 0:oe.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),hn=Number(((De=yt.current)==null?void 0:De.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Oe=new Date().getTime()-((We=zr.current)==null?void 0:We.getTime()),Ye=W==="x"?nt:hn,gn=Math.abs(Ye)/Oe;if(Math.abs(Ye)>=cy||gn>.11){$t(Ct.current),y.onDismiss==null||y.onDismiss.call(y,y),b(W==="x"?nt>0?"right":"left":hn>0?"down":"up"),bt(),ze(!0);return}else{var Ze,vt;(Ze=yt.current)==null||Ze.style.setProperty("--swipe-amount-x","0px"),(vt=yt.current)==null||vt.style.setProperty("--swipe-amount-y","0px")}cn(!1),ae(!1),D(null)},onPointerMove:oe=>{var De,We,nt;if(!pn.current||!Xt||((De=window.getSelection())==null?void 0:De.toString().length)>0)return;const Oe=oe.clientY-pn.current.y,Ye=oe.clientX-pn.current.x;var gn;const Ze=(gn=o.swipeDirections)!=null?gn:fy(Ne);!W&&(Math.abs(Ye)>1||Math.abs(Oe)>1)&&D(Math.abs(Ye)>Math.abs(Oe)?"x":"y");let vt={x:0,y:0};const xn=It=>1/(1.5+Math.abs(It)/20);if(W==="y"){if(Ze.includes("top")||Ze.includes("bottom"))if(Ze.includes("top")&&Oe<0||Ze.includes("bottom")&&Oe>0)vt.y=Oe;else{const It=Oe*xn(Oe);vt.y=Math.abs(It)<Math.abs(Oe)?It:Oe}}else if(W==="x"&&(Ze.includes("left")||Ze.includes("right")))if(Ze.includes("left")&&Ye<0||Ze.includes("right")&&Ye>0)vt.x=Ye;else{const It=Ye*xn(Ye);vt.x=Math.abs(It)<Math.abs(Ye)?It:Ye}(Math.abs(vt.x)>0||Math.abs(vt.y)>0)&&cn(!0),(We=yt.current)==null||We.style.setProperty("--swipe-amount-x",`${vt.x}px`),(nt=yt.current)==null||nt.style.setProperty("--swipe-amount-y",`${vt.y}px`)}},Rr&&!y.jsx&&Xe!=="loading"?P.createElement("button",{"aria-label":L,"data-disabled":$n,"data-close-button":!0,onClick:$n||!Xt?()=>{}:()=>{bt(),y.onDismiss==null||y.onDismiss.call(y,y)},className:qt(te==null?void 0:te.closeButton,y==null||(d=y.classNames)==null?void 0:d.closeButton)},(Fr=ce==null?void 0:ce.close)!=null?Fr:Xx):null,(Xe||y.icon||y.promise)&&y.icon!==null&&((ce==null?void 0:ce[Xe])!==null||y.icon)?P.createElement("div",{"data-icon":"",className:qt(te==null?void 0:te.icon,y==null||(f=y.classNames)==null?void 0:f.icon)},y.promise||y.type==="loading"&&!y.icon?y.icon||Pr():null,y.type!=="loading"?mn:null):null,P.createElement("div",{"data-content":"",className:qt(te==null?void 0:te.content,y==null||(m=y.classNames)==null?void 0:m.content)},P.createElement("div",{"data-title":"",className:qt(te==null?void 0:te.title,y==null||(h=y.classNames)==null?void 0:h.title)},y.jsx?y.jsx:typeof y.title=="function"?y.title():y.title),y.description?P.createElement("div",{"data-description":"",className:qt(ve,Fi,te==null?void 0:te.description,y==null||(j=y.classNames)==null?void 0:j.description)},typeof y.description=="function"?y.description():y.description):null),P.isValidElement(y.cancel)?y.cancel:y.cancel&&qo(y.cancel)?P.createElement("button",{"data-button":!0,"data-cancel":!0,style:y.cancelButtonStyle||Ie,onClick:oe=>{qo(y.cancel)&&Xt&&(y.cancel.onClick==null||y.cancel.onClick.call(y.cancel,oe),bt())},className:qt(te==null?void 0:te.cancelButton,y==null||(I=y.classNames)==null?void 0:I.cancelButton)},y.cancel.label):null,P.isValidElement(y.action)?y.action:y.action&&qo(y.action)?P.createElement("button",{"data-button":!0,"data-action":!0,style:y.actionButtonStyle||Fe,onClick:oe=>{qo(y.action)&&(y.action.onClick==null||y.action.onClick.call(y.action,oe),!oe.defaultPrevented&&bt())},className:qt(te==null?void 0:te.actionButton,y==null||(C=y.classNames)==null?void 0:C.actionButton)},y.action.label):null)};function nd(){if(typeof window>"u"||typeof document>"u")return"ltr";const o=document.documentElement.getAttribute("dir");return o==="auto"||!o?window.getComputedStyle(document.documentElement).direction:o}function my(o,a){const u={};return[o,a].forEach((d,f)=>{const m=f===1,h=m?"--mobile-offset":"--offset",j=m?sy:ly;function I(C){["top","right","bottom","left"].forEach(z=>{u[`${h}-${z}`]=typeof C=="number"?`${C}px`:C})}typeof d=="number"||typeof d=="string"?I(d):typeof d=="object"?["top","right","bottom","left"].forEach(C=>{d[C]===void 0?u[`${h}-${C}`]=j:u[`${h}-${C}`]=typeof d[C]=="number"?`${d[C]}px`:d[C]}):I(j)}),u}const hy=P.forwardRef(function(a,u){const{invert:d,position:f="bottom-right",hotkey:m=["altKey","KeyT"],expand:h,closeButton:j,className:I,offset:C,mobileOffset:z,theme:y="light",richColors:_,duration:F,style:ee,visibleToasts:re=oy,toastOptions:M,dir:Q=nd(),gap:X=uy,icons:A,containerAriaLabel:le="Notifications"}=a,[K,se]=P.useState([]),ye=P.useMemo(()=>Array.from(new Set([f].concat(K.filter(x=>x.position).map(x=>x.position)))),[K,f]),[Ie,Fe]=P.useState([]),[Me,ve]=P.useState(!1),[Te,Ne]=P.useState(!1),[Qe,Ce]=P.useState(y!=="system"?y:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),te=P.useRef(null),ce=m.join("+").replace(/Key/g,"").replace(/Digit/g,""),L=P.useRef(null),W=P.useRef(!1),D=P.useCallback(x=>{se(b=>{var H;return(H=b.find(G=>G.id===x.id))!=null&&H.delete||ht.dismiss(x.id),b.filter(({id:G})=>G!==x.id)})},[]);return P.useEffect(()=>ht.subscribe(x=>{if(x.dismiss){requestAnimationFrame(()=>{se(b=>b.map(H=>H.id===x.id?{...H,delete:!0}:H))});return}setTimeout(()=>{$x.flushSync(()=>{se(b=>{const H=b.findIndex(G=>G.id===x.id);return H!==-1?[...b.slice(0,H),{...b[H],...x},...b.slice(H+1)]:[x,...b]})})})}),[K]),P.useEffect(()=>{if(y!=="system"){Ce(y);return}if(y==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Ce("dark"):Ce("light")),typeof window>"u")return;const x=window.matchMedia("(prefers-color-scheme: dark)");try{x.addEventListener("change",({matches:b})=>{Ce(b?"dark":"light")})}catch{x.addListener(({matches:H})=>{try{Ce(H?"dark":"light")}catch(G){console.error(G)}})}},[y]),P.useEffect(()=>{K.length<=1&&ve(!1)},[K]),P.useEffect(()=>{const x=b=>{var H;if(m.every(q=>b[q]||b.code===q)){var ie;ve(!0),(ie=te.current)==null||ie.focus()}b.code==="Escape"&&(document.activeElement===te.current||(H=te.current)!=null&&H.contains(document.activeElement))&&ve(!1)};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[m]),P.useEffect(()=>{if(te.current)return()=>{L.current&&(L.current.focus({preventScroll:!0}),L.current=null,W.current=!1)}},[te.current]),P.createElement("section",{ref:u,"aria-label":`${le} ${ce}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},ye.map((x,b)=>{var H;const[G,ie]=x.split("-");return K.length?P.createElement("ol",{key:x,dir:Q==="auto"?nd():Q,tabIndex:-1,ref:te,className:I,"data-sonner-toaster":!0,"data-sonner-theme":Qe,"data-y-position":G,"data-lifted":Me&&K.length>1&&!h,"data-x-position":ie,style:{"--front-toast-height":`${((H=Ie[0])==null?void 0:H.height)||0}px`,"--width":`${ay}px`,"--gap":`${X}px`,...ee,...my(C,z)},onBlur:q=>{W.current&&!q.currentTarget.contains(q.relatedTarget)&&(W.current=!1,L.current&&(L.current.focus({preventScroll:!0}),L.current=null))},onFocus:q=>{q.target instanceof HTMLElement&&q.target.dataset.dismissible==="false"||W.current||(W.current=!0,L.current=q.relatedTarget)},onMouseEnter:()=>ve(!0),onMouseMove:()=>ve(!0),onMouseLeave:()=>{Te||ve(!1)},onDragEnd:()=>ve(!1),onPointerDown:q=>{q.target instanceof HTMLElement&&q.target.dataset.dismissible==="false"||Ne(!0)},onPointerUp:()=>Ne(!1)},K.filter(q=>!q.position&&b===0||q.position===x).map((q,de)=>{var ae,fe;return P.createElement(py,{key:q.id,icons:A,index:de,toast:q,defaultRichColors:_,duration:(ae=M==null?void 0:M.duration)!=null?ae:F,className:M==null?void 0:M.className,descriptionClassName:M==null?void 0:M.descriptionClassName,invert:d,visibleToasts:re,closeButton:(fe=M==null?void 0:M.closeButton)!=null?fe:j,interacting:Te,position:x,style:M==null?void 0:M.style,unstyled:M==null?void 0:M.unstyled,classNames:M==null?void 0:M.classNames,cancelButtonStyle:M==null?void 0:M.cancelButtonStyle,actionButtonStyle:M==null?void 0:M.actionButtonStyle,closeButtonAriaLabel:M==null?void 0:M.closeButtonAriaLabel,removeToast:D,toasts:K.filter(ze=>ze.position==q.position),heights:Ie.filter(ze=>ze.position==q.position),setHeights:Fe,expandByDefault:h,gap:X,expanded:Me,swipeDirections:a.swipeDirections})})):null}))});function gy({products:o}){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .product-list-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .no-products-message {
          grid-column: 1 / -1;
          border: 1px solid var(--border);
          border-radius: 16px;
          background-color: var(--card);
          padding: 24px;
          font-family: Inter, system-ui, sans-serif;
          color: var(--muted-foreground);
          text-align: center;
        }

        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 640px) {
          .product-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .no-products-message {
            padding: 20px;
            font-size: 14px;
          }
        }
      `}),i.jsx("div",{className:"product-list-container",children:i.jsx("div",{className:"product-grid",children:o.length>0?o.map(a=>i.jsx(xy,{product:a},a.id)):i.jsx("div",{className:"no-products-message",children:"No products matched your search."})})})]})}function xy({product:o,isHoverPreview:a=!1}){const{addItem:u,openCartDrawer:d}=Bn(),f=`/products/${o.id}`;return i.jsxs("div",{role:a?void 0:"link",tabIndex:a?void 0:0,onClick:a?void 0:m=>{m.target.closest("button")||(window.location.href=f)},onKeyDown:a?void 0:m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),window.location.href=f)},style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"460px",maxHeight:"520px",boxShadow:a?"0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814":"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden",display:"flex",flexDirection:"column",cursor:a?"default":"pointer"},children:[i.jsxs("div",{style:{position:"relative",height:"220px",backgroundColor:"var(--muted)"},children:[o.imageUrl?i.jsx("img",{src:o.imageUrl,alt:o.imageAlt||o.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null,a?i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#10182808"}}):null,i.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",zIndex:a?1:"auto"},children:i.jsx($e,{label:o.badgeLabel,variant:o.badgeVariant,size:"sm"})}),i.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:a?1:"auto"},children:i.jsx("button",{style:{height:"32px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"8px",backgroundColor:"transparent",color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:"Save"})})]}),i.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"10px",flex:1},children:[i.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.name}),i.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical",overflow:"hidden"},children:o.descriptor}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.featureLine}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"auto",paddingTop:"8px"},children:[i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.priceLabel}),i.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.shippingLabel})]})]}),i.jsx("div",{style:{padding:"16px",paddingTop:"0"},children:i.jsx(Pe,{variant:"primary",size:"md",label:o.isInStock?"Add to cart":"Out of stock",disabled:!o.isInStock||!o.variantId,onClick:async()=>{if(!o.variantId)return;if(!await u(o.variantId)){ed.error("Unable to add item",{description:"Please try again.",duration:5e3});return}ed.success("Added to cart",{description:`${o.name} is in your cart.`,duration:1/0,action:{label:"View cart",onClick:()=>d()},cancel:{label:"Close",onClick:()=>{}}})},fullWidth:!0})})]})}function yy(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .products-page-header {
          margin-bottom: 24px;
        }

        .products-page-header-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }

        .products-page-eyebrow {
          font-family: Inter, system-ui, sans-serif;
          font-size: 12px;
          line-height: 18px;
          font-weight: 400;
          color: var(--muted-foreground);
        }

        .products-page-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
        }

        .products-page-description {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: var(--muted-foreground);
          max-width: 640px;
        }

        @media (max-width: 1024px) {
          .products-page-description {
            font-size: 15px;
            line-height: 22px;
          }
        }

        @media (max-width: 640px) {
          .products-page-header {
            margin-bottom: 20px;
          }

          .products-page-eyebrow {
            font-size: 11px;
            line-height: 16px;
          }

          .products-page-description {
            font-size: 14px;
            line-height: 21px;
          }
        }
      `}),i.jsxs("div",{className:"products-page-header",children:[i.jsxs("div",{className:"products-page-header-content",children:[i.jsx("div",{className:"products-page-eyebrow",children:"Curated gear"}),i.jsx("h1",{className:"products-page-title",children:"Products"})]}),i.jsx("div",{className:"products-page-description",children:"Best-in-class essentials chosen for durability, clarity, and real daily use."})]})]})}function vy({resultCount:o}){const[a,u]=O.useState(!1),[d,f]=O.useState("Recommended"),m=["Recommended","Price: Low to High","Price: High to Low","Newest","Most Popular"];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .product-results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          gap: 16px;
        }

        .results-count {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
          color: var(--muted-foreground);
        }

        .results-count-number {
          font-weight: 600;
          color: var(--foreground);
        }

        .sort-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sort-label {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          color: var(--muted-foreground);
          white-space: nowrap;
        }

        .sort-dropdown-wrapper {
          position: relative;
        }

        .sort-button {
          height: 40px;
          padding-left: 14px;
          padding-right: 14px;
          border-radius: 8px;
          background-color: var(--card);
          border: 1px solid var(--border);
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          color: var(--foreground);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 180px;
          justify-content: space-between;
          transition: all 150ms ease;
          outline: none;
          box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
        }

        .sort-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          right: 0;
          min-width: 200px;
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: 0 4px 6px -2px rgba(16, 24, 40, 0.05), 0 12px 16px -4px rgba(16, 24, 40, 0.10);
          padding: 6px;
          z-index: 50;
        }

        .sort-option {
          width: 100%;
          text-align: left;
          padding: 10px 12px;
          border-radius: 8px;
          border: none;
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          cursor: pointer;
          transition: all 150ms ease;
          outline: none;
        }

        @media (max-width: 640px) {
          .product-results-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 12px;
          }

          .results-count {
            font-size: 14px;
            line-height: 21px;
          }

          .sort-controls {
            width: 100%;
            gap: 8px;
          }

          .sort-label {
            font-size: 13px;
          }

          .sort-button {
            flex: 1;
            min-width: 0;
            font-size: 13px;
            height: 38px;
          }

          .sort-dropdown {
            left: 0;
            right: 0;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .results-count {
            font-size: 15px;
            line-height: 22px;
          }

          .sort-label {
            font-size: 13px;
          }

          .sort-button {
            min-width: 160px;
            font-size: 13px;
          }
        }
      `}),i.jsxs("div",{className:"product-results-header",children:[i.jsxs("div",{className:"results-count",children:["Showing ",i.jsx("span",{className:"results-count-number",children:o})," ","results"]}),i.jsxs("div",{className:"sort-controls",children:[i.jsx("span",{className:"sort-label",children:"Sort by:"}),i.jsxs("div",{className:"sort-dropdown-wrapper",children:[i.jsxs("button",{onClick:()=>u(!a),className:"sort-button",onMouseEnter:h=>{h.currentTarget.style.backgroundColor="var(--muted)",h.currentTarget.style.borderColor="var(--border)"},onMouseLeave:h=>{h.currentTarget.style.backgroundColor="var(--card)",h.currentTarget.style.borderColor="var(--border)"},children:[d,i.jsx(Mm,{size:16,color:"var(--muted-foreground)",style:{transition:"transform 150ms ease",transform:a?"rotate(180deg)":"rotate(0deg)"}})]}),a&&i.jsx("div",{className:"sort-dropdown",children:m.map(h=>i.jsx("button",{onClick:()=>{f(h),u(!1)},className:"sort-option",style:{backgroundColor:d===h?"var(--muted)":"transparent",fontWeight:d===h?"600":"500",color:d===h?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:j=>{d!==h&&(j.currentTarget.style.backgroundColor="var(--muted)")},onMouseLeave:j=>{d!==h&&(j.currentTarget.style.backgroundColor="transparent")},children:h},h))})]})]})]})]})}const wy={id:Go,label:$g},ky=o=>{const a=new Set;return o.flatMap(d=>d.categoryIds.map((f,m)=>({id:f,label:d.categoryLabels[m]??d.categoryIds[m]}))).filter(d=>!d.id||a.has(d.id)?!1:(a.add(d.id),!0))};function jy(o){const a=ky(o);return{filters:[wy,...a],isLoading:!1,resetLabel:"Reset filters"}}const Sy=120,Cy=(o,a)=>{const u=Number.parseFloat(o);return Number.isFinite(u)?new Intl.NumberFormat("en-IN",{style:"currency",currency:a,maximumFractionDigits:0}).format(u):`${a} ${o}`},by=o=>{var a;return o.availableForSale===!1?!1:typeof o.totalInventory=="number"?o.totalInventory>0:((a=o.variants)==null?void 0:a.edges.some(u=>{const d=u.node;return d.availableForSale===!1?!1:typeof d.quantityAvailable=="number"?d.quantityAvailable>0:d.availableForSale===!0}))??!0},Iy=o=>{var u,d,f,m;const a=(d=(u=o.variants)==null?void 0:u.edges.find(h=>{const j=h.node;return j.availableForSale&&(typeof j.quantityAvailable!="number"||j.quantityAvailable>0)}))==null?void 0:d.node;return(a==null?void 0:a.id)||((m=(f=o.variants)==null?void 0:f.edges[0])==null?void 0:m.node.id)||null},_y=(o,a=Sy)=>{const u=o.replace(/\s+/g," ").trim();return u.length<=a?u:`${u.slice(0,a).trimEnd()}...`},rd=o=>{var C,z,y,_;const a=((C=o.shortDescription)==null?void 0:C.value)||o.description||"Curated by Vibe Station",u=_y(a),d=((z=o.featureLine)==null?void 0:z.value)||o.tags.slice(0,3).join(" · ")||"Durable build",f=((y=o.shippingInfo)==null?void 0:y.value)||"Shipping calculated at checkout",m=((_=o.badge)==null?void 0:_.value)||o.tags[0]||"Curated",h=nl(o),j=Array.from(new Set(o.tags.map(F=>F.trim()).filter(Boolean))),I=j.map(F=>kd(F)).filter(Boolean);return{id:o.handle,variantId:Iy(o),name:o.title,descriptor:u,featureLine:d,priceLabel:Cy(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),shippingLabel:f,isInStock:by(o),badgeLabel:m,badgeVariant:"accent",imageUrl:h==null?void 0:h.url,imageAlt:h==null?void 0:h.altText,categoryIds:I,categoryLabels:j}};let bi=[],ea=!1,vi=null;const Ii=new Map,ta=new Set,qs=new Map,Td=o=>(o==null?void 0:o.trim())??"",Ey=async o=>{const a=Td(o);if(!a)return vi||(vi=(async()=>{try{bi=(await Ei({first:24})).edges.map(m=>rd(m.node))}catch(f){console.error("Failed to load products from Shopify",f),bi=[]}finally{ea=!0,vi=null}})(),vi);const u=qs.get(a);if(u)return u;const d=(async()=>{try{const m=(await Ei({first:24,query:a})).edges.map(h=>rd(h.node));Ii.set(a,m)}catch(f){console.error("Failed to load searched products from Shopify",f),Ii.set(a,[])}finally{ta.add(a),qs.delete(a)}})();return qs.set(a,d),d};function Ty(o){const a=Td(o),[u,d]=O.useState(a?Ii.get(a)??[]:bi),[f,m]=O.useState(a?!ta.has(a):!ea);return O.useEffect(()=>{let h=!1;return(a?ta.has(a):ea)?(d(a?Ii.get(a)??[]:bi),m(!1),()=>{h=!0}):(m(!0),Ey(a).then(()=>{h||(d(a?Ii.get(a)??[]:bi),m(!1))}),()=>{h=!0})},[a]),{products:u,hoverPreviewProduct:u[0],isLoading:f}}function Ny(){const[o,a]=O.useState(""),[u,d]=O.useState(""),[f,m]=O.useState(Go),[h,j]=O.useState(!1),{products:I,isLoading:C}=Ty(u),{filters:z,resetLabel:y}=jy(I),_=f===Go?I:I.filter(F=>F.categoryIds.includes(f));return O.useEffect(()=>{C||j(!0)},[C]),O.useEffect(()=>{z.some(F=>F.id===f)||m(Go)},[f,z]),!h&&C?i.jsx(wg,{}):i.jsx(tt,{paddingTop:"48px",paddingBottom:"72px",background:"var(--background)",children:i.jsxs(he,{children:[i.jsx(zy,{}),i.jsx(Ry,{searchInput:o,onSearchInputChange:a,onSearchSubmit:()=>d(o.trim()),isSearching:C,activeFilter:f,onFilterChange:m,filters:z,resetLabel:y,resultCount:_.length,products:_})]})})}function zy(){return i.jsx(yy,{})}function Ry({searchInput:o,onSearchInputChange:a,onSearchSubmit:u,isSearching:d,activeFilter:f,onFilterChange:m,filters:h,resetLabel:j,resultCount:I,products:C}){return i.jsxs(ke,{gap:"16px",children:[i.jsx(Mx,{query:o,onQueryChange:a,onSearch:u,isSearching:d}),i.jsx(Ox,{filters:h,activeFilter:f,onFilterChange:m,resetLabel:j}),i.jsx(vy,{resultCount:I}),i.jsx(gy,{products:C})]})}function Nd({id:o,name:a,variant:u,price:d,quantity:f,imageUrl:m,imageAlt:h,onIncrement:j,onDecrement:I,onRemove:C}){return i.jsx(Le,{variant:"subtle",padding:"md",children:i.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"flex-start"},children:[i.jsx("div",{style:{width:"72px",height:"72px",backgroundColor:"var(--muted)",borderRadius:"12px",flexShrink:0,overflow:"hidden"},children:m?i.jsx("img",{src:m,alt:h||a,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),i.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"6px"},children:[i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:a}),i.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:u}),i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:d})]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-end"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(Pe,{variant:"ghost",size:"sm",label:"−",onClick:I?()=>I(o):void 0}),i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif",minWidth:"20px",textAlign:"center"},children:f}),i.jsx(Pe,{variant:"ghost",size:"sm",label:"+",onClick:j?()=>j(o):void 0})]}),i.jsx(Pe,{variant:"ghost",size:"sm",label:"Remove",onClick:C?()=>C(o):void 0})]})]})})}const Ly={title:"Cart",yourCartTitle:"Your cart",addOnsTitle:"Add-ons you may like",summaryTitle:"Order summary",subtotalLabel:"Subtotal",shippingLabel:"Shipping",shippingValue:"Calculated at checkout",totalLabel:"Total",taxesLine:"Taxes and shipping calculated at checkout.",drawerCheckoutLabel:"Checkout",drawerContinueLabel:"Continue shopping",drawerFooterCaption:"You'll complete payment in checkout.",emptyCartMessage:"Your cart is empty.",summaryCheckoutLabel:"Checkout",summaryContinueLabel:"Continue shopping",writeItemSuffix:"items",addButtonLabel:"Add"};let _i=[],na=!1,wi=null;const Py=async()=>wi||(wi=(async()=>{try{_i=(await Ei({first:2})).edges.map(a=>{const u=nl(a.node);return{id:a.node.handle,name:a.node.title,price:Number.parseFloat(a.node.priceRange.minVariantPrice.amount),imageUrl:u==null?void 0:u.url,imageAlt:(u==null?void 0:u.altText)||a.node.title}})}catch(o){console.error("Failed to load cart add-ons from Shopify",o),_i=[]}finally{na=!0,wi=null}})(),wi);function Ri(){const[o,a]=O.useState(_i),[u,d]=O.useState(!na);return O.useEffect(()=>{let f=!1;return na?(a(_i),d(!1),()=>{f=!0}):(Py().then(()=>{f||(a(_i),d(!1))}),()=>{f=!0})},[]),{addOns:o,copy:Ly,isLoading:u}}function Fy(){const{items:o,incrementItem:a,decrementItem:u,removeItem:d}=Bn(),{addOns:f,copy:m}=Ri();return i.jsxs("div",{style:{flex:"0 0 65%",display:"flex",flexDirection:"column",gap:"32px"},children:[i.jsx("h2",{style:{margin:0,fontSize:"30px",lineHeight:"38px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.yourCartTitle}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:o.map(h=>i.jsx(Nd,{id:h.id,name:h.name,variant:h.variant,price:Ti(h.price),quantity:h.quantity,imageUrl:h.imageUrl,imageAlt:h.imageAlt,onIncrement:a,onDecrement:u,onRemove:d},h.id))}),i.jsx(Le,{variant:"subtle",padding:"lg",children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[i.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.addOnsTitle}),i.jsx("div",{style:{display:"flex",gap:"16px"},children:f.map(h=>i.jsx(Le,{variant:"subtle",padding:"md",children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"200px"},children:[i.jsx("div",{style:{width:"100%",height:"160px",backgroundColor:"var(--muted)",borderRadius:"12px",overflow:"hidden"},children:h.imageUrl?i.jsx("img",{src:h.imageUrl,alt:h.imageAlt||h.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:h.name}),i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:Ti(h.price)}),i.jsx(Pe,{variant:"ghost",size:"sm",label:m.addButtonLabel})]})},h.id))})]})})]})}function Dy({title:o,subtitle:a,children:u,onClose:d,footer:f}){return i.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:d,children:i.jsxs("div",{style:{width:"520px",maxWidth:"92%",backgroundColor:"var(--card)",borderRadius:"20px",border:"1px solid var(--border)",boxShadow:"0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814",padding:"20px",display:"flex",flexDirection:"column",gap:"16px",position:"relative"},onClick:m=>m.stopPropagation(),children:[(o||a)&&i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",position:"relative"},children:[i.jsxs("div",{children:[o&&i.jsx("div",{style:{fontSize:"18px",fontWeight:600,color:"var(--foreground)",lineHeight:"28px"},children:o}),a&&i.jsx("div",{style:{fontSize:"14px",color:"var(--muted-foreground)",lineHeight:"20px",marginTop:"4px"},children:a})]}),d&&i.jsx("div",{style:{position:"absolute",top:0,right:0},children:i.jsx("button",{onClick:d,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"Close"})})]}),i.jsx("div",{style:{flex:1,minHeight:"100px",display:"flex",flexDirection:"column",gap:"12px"},children:u}),f&&i.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:f})]})})}function Ay({itemCount:o,subtotal:a,onContinue:u,onBack:d,onClose:f}){return i.jsxs(Dy,{onClose:f,title:"Heading to checkout",subtitle:"You'll complete payment securely in checkout.",footer:i.jsx(Oy,{onContinue:u,onBack:d}),children:[i.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)",marginTop:"-8px"}}),i.jsx(By,{itemCount:o,subtotal:a}),i.jsx(My,{})]})}function By({itemCount:o,subtotal:a}){return i.jsx(Le,{variant:"subtle",padding:"md",children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[i.jsx(Ks,{label:"Items",value:String(o),valueWeight:"600"}),i.jsx(Ks,{label:"Shipping",value:"Calculated in checkout"}),i.jsx(Ks,{label:"Total",value:Ti(a),valueWeight:"600",valueSize:"20px",valueLineHeight:"30px"}),i.jsx("div",{style:{marginTop:"6px"},children:i.jsx($e,{label:"No password needed",variant:"neutral",size:"sm"})})]})})}function Ks({label:o,value:a,valueWeight:u="400",valueSize:d="14px",valueLineHeight:f="20px"}){return i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:o}),i.jsx("div",{style:{fontSize:d,lineHeight:f,fontWeight:u,color:"var(--foreground)"},children:a})]})}function My(){return i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[i.jsx("div",{style:{position:"relative",height:"6px",width:"100%",backgroundColor:"var(--border)",borderRadius:"999px",overflow:"hidden"},children:i.jsx("div",{style:{position:"absolute",top:0,left:0,height:"6px",width:"45%",backgroundColor:"#4F46E5",borderRadius:"999px",transition:"width 0.3s ease-out"}})}),i.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)"},children:"Preparing your checkout…"})]})}function Oy({onContinue:o,onBack:a}){return i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"100%"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[i.jsx(Pe,{label:"Back to cart",variant:"ghost",size:"md",onClick:a}),i.jsx(Pe,{label:"Continue",variant:"primary",size:"md",onClick:o})]}),i.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)",textAlign:"right"},children:"If checkout doesn't open, try again."})]})}function zd({subtotal:o=5997,total:a=5997}){const{copy:u}=Ri();return i.jsx(Le,{variant:"elevated",padding:"md",children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:u.summaryTitle}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:u.subtotalLabel}),i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:Ti(o)})]}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:u.shippingLabel}),i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:u.shippingValue})]}),i.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)"}}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:u.totalLabel}),i.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:Ti(a)})]})]}),i.jsx(Ed,{}),i.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:u.taxesLine})]})})}function Hy(){const{cartCount:o,subtotal:a,total:u,checkout:d}=Bn(),{copy:f}=Ri(),[m,h]=O.useState(!1);return i.jsxs("div",{style:{flex:"0 0 35%",display:"flex",flexDirection:"column",gap:"16px",position:"sticky",top:"24px"},children:[i.jsx(zd,{subtotal:a,total:u}),i.jsx(Pe,{variant:"primary",size:"lg",label:f.summaryCheckoutLabel,onClick:()=>h(!0)}),i.jsx(Pe,{variant:"secondary",size:"lg",label:f.summaryContinueLabel,onClick:()=>{window.location.href="/products"}}),i.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:f.taxesLine}),m?i.jsx(Ay,{itemCount:o,subtotal:a,onBack:()=>h(!1),onClose:()=>h(!1),onContinue:()=>{d()}}):null]})}function $y(){return i.jsx(tt,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:i.jsx(he,{children:i.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start"},children:[i.jsx(Fy,{}),i.jsx(Hy,{})]})})})}function Wy(){const{isLoading:o}=Ri();return o?i.jsx(jg,{}):i.jsx($y,{})}function Uy(){const{items:o,cartCount:a,subtotal:u,total:d,closeCartDrawer:f,incrementItem:m,decrementItem:h,removeItem:j}=Bn(),{copy:I}=Ri();return i.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:[i.jsx("div",{onClick:f,style:{position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.5)"}}),i.jsxs("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:"420px",backgroundColor:"var(--card)",borderLeft:"1px solid var(--border)",boxShadow:"-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)",display:"flex",flexDirection:"column"},children:[i.jsx("div",{style:{padding:"24px",borderBottom:"1px solid var(--border)",flexShrink:0},children:i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("h3",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:I.title}),i.jsx($e,{label:`${a} ${I.writeItemSuffix}`,variant:"neutral",size:"sm"})]})}),i.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},children:[o.length?i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:o.map(C=>i.jsx(Nd,{id:C.id,name:C.name,variant:C.variant,price:`₹${C.price.toLocaleString("en-IN")}`,quantity:C.quantity,imageUrl:C.imageUrl,imageAlt:C.imageAlt,onIncrement:m,onDecrement:h,onRemove:j},C.id))}):i.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:I.emptyCartMessage}),i.jsx(zd,{subtotal:u,total:d})]}),i.jsxs("div",{style:{padding:"24px",borderTop:"1px solid var(--border)",flexShrink:0,display:"flex",flexDirection:"column",gap:"12px"},children:[i.jsx(Pe,{variant:"primary",size:"lg",label:I.drawerCheckoutLabel,onClick:()=>{f(),window.location.href="/cart"}}),i.jsx(Pe,{variant:"secondary",size:"lg",label:I.drawerContinueLabel,onClick:f}),i.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:I.drawerFooterCaption})]})]})]})}function Vy(){const o=window.location.pathname.replace(/\/+$/,"")||"/";if(o.startsWith("/products/"))return i.jsx(Bx,{});switch(o){case"/":return i.jsx(Sg,{});case"/products":return i.jsx(Ny,{});case"/philosophy":return i.jsx(Ig,{});case"/community":return i.jsx(Bh,{});case"/cart":return i.jsx(Wy,{});default:return i.jsx(qh,{})}}function Qy(){const{isDrawerOpen:o}=Bn();return i.jsxs(bh,{children:[Vy(),o?i.jsx(Uy,{}):null]})}const Yy=({...o})=>{const{theme:a="system"}=oa();return i.jsx(hy,{theme:a,position:"top-center",className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...o})};function qy({children:o}){return i.jsxs(Im,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[i.jsx(jm,{children:o}),i.jsx(Yy,{})]})}const Rd=document.getElementById("root");if(!Rd)throw new Error('Root element with id "root" was not found.');Pp.createRoot(Rd).render(i.jsx(O.StrictMode,{children:i.jsx(qy,{children:i.jsx(Qy,{})})}));

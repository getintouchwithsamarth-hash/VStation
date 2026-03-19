(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(p){if(p.ep)return;p.ep=!0;const f=l(p);fetch(p.href,f)}})();function _d(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Za={exports:{}},Si={},el={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function um(){if(rd)return ue;rd=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),h=Symbol.iterator;function k(v){return v===null||typeof v!="object"?null:(v=h&&v[h]||v["@@iterator"],typeof v=="function"?v:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,M={};function A(v,F,H){this.props=v,this.context=F,this.refs=M,this.updater=H||I}A.prototype.isReactComponent={},A.prototype.setState=function(v,F){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,F,"setState")},A.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function U(){}U.prototype=A.prototype;function K(v,F,H){this.props=v,this.context=F,this.refs=M,this.updater=H||I}var te=K.prototype=new U;te.constructor=K,_(te,A.prototype),te.isPureReactComponent=!0;var re=Array.isArray,ee=Object.prototype.hasOwnProperty,ae={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function Te(v,F,H){var G,oe={},X=null,de=null;if(F!=null)for(G in F.ref!==void 0&&(de=F.ref),F.key!==void 0&&(X=""+F.key),F)ee.call(F,G)&&!ve.hasOwnProperty(G)&&(oe[G]=F[G]);var le=arguments.length-2;if(le===1)oe.children=H;else if(1<le){for(var pe=Array(le),Ae=0;Ae<le;Ae++)pe[Ae]=arguments[Ae+2];oe.children=pe}if(v&&v.defaultProps)for(G in le=v.defaultProps,le)oe[G]===void 0&&(oe[G]=le[G]);return{$$typeof:o,type:v,key:X,ref:de,props:oe,_owner:ae.current}}function Le(v,F){return{$$typeof:o,type:v.type,key:F,ref:v.ref,props:v.props,_owner:v._owner}}function Be(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function we(v){var F={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(H){return F[H]})}var Ne=/\/+/g;function ze(v,F){return typeof v=="object"&&v!==null&&v.key!=null?we(""+v.key):F.toString(36)}function Ke(v,F,H,G,oe){var X=typeof v;(X==="undefined"||X==="boolean")&&(v=null);var de=!1;if(v===null)de=!0;else switch(X){case"string":case"number":de=!0;break;case"object":switch(v.$$typeof){case o:case a:de=!0}}if(de)return de=v,oe=oe(de),v=G===""?"."+ze(de,0):G,re(oe)?(H="",v!=null&&(H=v.replace(Ne,"$&/")+"/"),Ke(oe,F,H,"",function(Ae){return Ae})):oe!=null&&(Be(oe)&&(oe=Le(oe,H+(!oe.key||de&&de.key===oe.key?"":(""+oe.key).replace(Ne,"$&/")+"/")+v)),F.push(oe)),1;if(de=0,G=G===""?".":G+":",re(v))for(var le=0;le<v.length;le++){X=v[le];var pe=G+ze(X,le);de+=Ke(X,F,H,pe,oe)}else if(pe=k(v),typeof pe=="function")for(v=pe.call(v),le=0;!(X=v.next()).done;)X=X.value,pe=G+ze(X,le++),de+=Ke(X,F,H,pe,oe);else if(X==="object")throw F=String(v),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return de}function be(v,F,H){if(v==null)return v;var G=[],oe=0;return Ke(v,G,"","",function(X){return F.call(H,X,oe++)}),G}function ne(v){if(v._status===-1){var F=v._result;F=F(),F.then(function(H){(v._status===0||v._status===-1)&&(v._status=1,v._result=H)},function(H){(v._status===0||v._status===-1)&&(v._status=2,v._result=H)}),v._status===-1&&(v._status=0,v._result=F)}if(v._status===1)return v._result.default;throw v._result}var ce={current:null},D={transition:null},V={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:D,ReactCurrentOwner:ae};function B(){throw Error("act(...) is not supported in production builds of React.")}return ue.Children={map:be,forEach:function(v,F,H){be(v,function(){F.apply(this,arguments)},H)},count:function(v){var F=0;return be(v,function(){F++}),F},toArray:function(v){return be(v,function(F){return F})||[]},only:function(v){if(!Be(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ue.Component=A,ue.Fragment=l,ue.Profiler=p,ue.PureComponent=K,ue.StrictMode=c,ue.Suspense=S,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,ue.act=B,ue.cloneElement=function(v,F,H){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var G=_({},v.props),oe=v.key,X=v.ref,de=v._owner;if(F!=null){if(F.ref!==void 0&&(X=F.ref,de=ae.current),F.key!==void 0&&(oe=""+F.key),v.type&&v.type.defaultProps)var le=v.type.defaultProps;for(pe in F)ee.call(F,pe)&&!ve.hasOwnProperty(pe)&&(G[pe]=F[pe]===void 0&&le!==void 0?le[pe]:F[pe])}var pe=arguments.length-2;if(pe===1)G.children=H;else if(1<pe){le=Array(pe);for(var Ae=0;Ae<pe;Ae++)le[Ae]=arguments[Ae+2];G.children=le}return{$$typeof:o,type:v.type,key:oe,ref:X,props:G,_owner:de}},ue.createContext=function(v){return v={$$typeof:m,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:f,_context:v},v.Consumer=v},ue.createElement=Te,ue.createFactory=function(v){var F=Te.bind(null,v);return F.type=v,F},ue.createRef=function(){return{current:null}},ue.forwardRef=function(v){return{$$typeof:x,render:v}},ue.isValidElement=Be,ue.lazy=function(v){return{$$typeof:b,_payload:{_status:-1,_result:v},_init:ne}},ue.memo=function(v,F){return{$$typeof:j,type:v,compare:F===void 0?null:F}},ue.startTransition=function(v){var F=D.transition;D.transition={};try{v()}finally{D.transition=F}},ue.unstable_act=B,ue.useCallback=function(v,F){return ce.current.useCallback(v,F)},ue.useContext=function(v){return ce.current.useContext(v)},ue.useDebugValue=function(){},ue.useDeferredValue=function(v){return ce.current.useDeferredValue(v)},ue.useEffect=function(v,F){return ce.current.useEffect(v,F)},ue.useId=function(){return ce.current.useId()},ue.useImperativeHandle=function(v,F,H){return ce.current.useImperativeHandle(v,F,H)},ue.useInsertionEffect=function(v,F){return ce.current.useInsertionEffect(v,F)},ue.useLayoutEffect=function(v,F){return ce.current.useLayoutEffect(v,F)},ue.useMemo=function(v,F){return ce.current.useMemo(v,F)},ue.useReducer=function(v,F,H){return ce.current.useReducer(v,F,H)},ue.useRef=function(v){return ce.current.useRef(v)},ue.useState=function(v){return ce.current.useState(v)},ue.useSyncExternalStore=function(v,F,H){return ce.current.useSyncExternalStore(v,F,H)},ue.useTransition=function(){return ce.current.useTransition()},ue.version="18.3.1",ue}var id;function xl(){return id||(id=1,el.exports=um()),el.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function cm(){if(od)return Si;od=1;var o=xl(),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(x,S,j){var b,h={},k=null,I=null;j!==void 0&&(k=""+j),S.key!==void 0&&(k=""+S.key),S.ref!==void 0&&(I=S.ref);for(b in S)c.call(S,b)&&!f.hasOwnProperty(b)&&(h[b]=S[b]);if(x&&x.defaultProps)for(b in S=x.defaultProps,S)h[b]===void 0&&(h[b]=S[b]);return{$$typeof:a,type:x,key:k,ref:I,props:h,_owner:p.current}}return Si.Fragment=l,Si.jsx=m,Si.jsxs=m,Si}var sd;function dm(){return sd||(sd=1,Za.exports=cm()),Za.exports}var r=dm(),R=xl();const O=_d(R);var ns={},tl={exports:{}},vt={},nl={exports:{}},rl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function pm(){return ad||(ad=1,(function(o){function a(D,V){var B=D.length;D.push(V);e:for(;0<B;){var v=B-1>>>1,F=D[v];if(0<p(F,V))D[v]=V,D[B]=F,B=v;else break e}}function l(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var V=D[0],B=D.pop();if(B!==V){D[0]=B;e:for(var v=0,F=D.length,H=F>>>1;v<H;){var G=2*(v+1)-1,oe=D[G],X=G+1,de=D[X];if(0>p(oe,B))X<F&&0>p(de,oe)?(D[v]=de,D[X]=B,v=X):(D[v]=oe,D[G]=B,v=G);else if(X<F&&0>p(de,B))D[v]=de,D[X]=B,v=X;else break e}}return V}function p(D,V){var B=D.sortIndex-V.sortIndex;return B!==0?B:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var m=Date,x=m.now();o.unstable_now=function(){return m.now()-x}}var S=[],j=[],b=1,h=null,k=3,I=!1,_=!1,M=!1,A=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(D){for(var V=l(j);V!==null;){if(V.callback===null)c(j);else if(V.startTime<=D)c(j),V.sortIndex=V.expirationTime,a(S,V);else break;V=l(j)}}function re(D){if(M=!1,te(D),!_)if(l(S)!==null)_=!0,ne(ee);else{var V=l(j);V!==null&&ce(re,V.startTime-D)}}function ee(D,V){_=!1,M&&(M=!1,U(Te),Te=-1),I=!0;var B=k;try{for(te(V),h=l(S);h!==null&&(!(h.expirationTime>V)||D&&!we());){var v=h.callback;if(typeof v=="function"){h.callback=null,k=h.priorityLevel;var F=v(h.expirationTime<=V);V=o.unstable_now(),typeof F=="function"?h.callback=F:h===l(S)&&c(S),te(V)}else c(S);h=l(S)}if(h!==null)var H=!0;else{var G=l(j);G!==null&&ce(re,G.startTime-V),H=!1}return H}finally{h=null,k=B,I=!1}}var ae=!1,ve=null,Te=-1,Le=5,Be=-1;function we(){return!(o.unstable_now()-Be<Le)}function Ne(){if(ve!==null){var D=o.unstable_now();Be=D;var V=!0;try{V=ve(!0,D)}finally{V?ze():(ae=!1,ve=null)}}else ae=!1}var ze;if(typeof K=="function")ze=function(){K(Ne)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,be=Ke.port2;Ke.port1.onmessage=Ne,ze=function(){be.postMessage(null)}}else ze=function(){A(Ne,0)};function ne(D){ve=D,ae||(ae=!0,ze())}function ce(D,V){Te=A(function(){D(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_continueExecution=function(){_||I||(_=!0,ne(ee))},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return k},o.unstable_getFirstCallbackNode=function(){return l(S)},o.unstable_next=function(D){switch(k){case 1:case 2:case 3:var V=3;break;default:V=k}var B=k;k=V;try{return D()}finally{k=B}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=k;k=D;try{return V()}finally{k=B}},o.unstable_scheduleCallback=function(D,V,B){var v=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?v+B:v):B=v,D){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=B+F,D={id:b++,callback:V,priorityLevel:D,startTime:B,expirationTime:F,sortIndex:-1},B>v?(D.sortIndex=B,a(j,D),l(S)===null&&D===l(j)&&(M?(U(Te),Te=-1):M=!0,ce(re,B-v))):(D.sortIndex=F,a(S,D),_||I||(_=!0,ne(ee))),D},o.unstable_shouldYield=we,o.unstable_wrapCallback=function(D){var V=k;return function(){var B=k;k=V;try{return D.apply(this,arguments)}finally{k=B}}}})(rl)),rl}var ld;function fm(){return ld||(ld=1,nl.exports=pm()),nl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function mm(){if(ud)return vt;ud=1;var o=xl(),a=fm();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},h={};function k(e){return S.call(h,e)?!0:S.call(b,e)?!1:j.test(e)?h[e]=!0:(b[e]=!0,!1)}function I(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,t,n,i){if(t===null||typeof t>"u"||I(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function M(e,t,n,i,s,u,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=d}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new M(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new M(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new M(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new M(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new M(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new M(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)});var U=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(U,K);A[t]=new M(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(U,K);A[t]=new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(U,K);A[t]=new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,t,n,i){var s=A.hasOwnProperty(t)?A[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_(t,n,s,i)&&(n=null),i||s===null?k(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,i=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var re=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),ae=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),Le=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),we=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),D=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,v;function F(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var H=!1;function G(e,t){if(!e||H)return"";H=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var i=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){i=T}e.call(t.prototype)}else{try{throw Error()}catch(T){i=T}e()}}catch(T){if(T&&i&&typeof T.stack=="string"){for(var s=T.stack.split(`
`),u=i.stack.split(`
`),d=s.length-1,g=u.length-1;1<=d&&0<=g&&s[d]!==u[g];)g--;for(;1<=d&&0<=g;d--,g--)if(s[d]!==u[g]){if(d!==1||g!==1)do if(d--,g--,0>g||s[d]!==u[g]){var y=`
`+s[d].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=d&&0<=g);break}}}finally{H=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function oe(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case ae:return"Portal";case Le:return"Profiler";case Te:return"StrictMode";case ze:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case we:return(e.displayName||"Context")+".Consumer";case Be:return(e._context.displayName||"Context")+".Provider";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case be:return t=e.displayName||null,t!==null?t:X(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return X(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(t);case 8:return t===Te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ae(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){i=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function en(e){e._valueTracker||(e._valueTracker=Ae(e))}function yn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=pe(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qt(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wi(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dr(e,t){t=t.checked,t!=null&&te(e,"checked",t,!1)}function tn(e,t){Dr(e,t);var n=le(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jt(e,t.type,n):t.hasOwnProperty("defaultValue")&&jt(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jt(e,t,n){(t!=="number"||kt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qn=Array.isArray;function vn(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function et(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nn(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(qn(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function Vi(e,t){var n=le(t.value),i=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function qi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Or(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qn,cr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qn=Qn||document.createElement("div"),Qn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kn=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){kn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function Yi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function Qi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=Yi(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,s):e[n]=s}}var Ki=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dr(e,t){if(t){if(Ki[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Br(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kn=null;function Ft(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $r=null,jn=null,rn=null;function Ur(e){if(e=li(e)){if(typeof $r!="function")throw Error(l(280));var t=e.stateNode;t&&(t=xo(t),$r(e.stateNode,e.type,t))}}function se(e){jn?rn?rn.push(e):rn=[e]:jn=e}function De(){if(jn){var e=jn,t=rn;if(rn=jn=null,Ur(e),t)for(e=0;e<t.length;e++)Ur(t[e])}}function qe(e,t){return e(t)}function at(){}var Sn=!1;function $e(e,t,n){if(Sn)return e(t,n);Sn=!0;try{return qe(e,t,n)}finally{Sn=!1,(jn!==null||rn!==null)&&(at(),De())}}function Xe(e,t){var n=e.stateNode;if(n===null)return null;var i=xo(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Cn=!1;if(x)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch{Cn=!1}function St(e,t,n,i,s,u,d,g,y){var T=Array.prototype.slice.call(arguments,3);try{t.apply(n,T)}catch(z){this.onError(z)}}var bn=!1,_t=null,Hr=!1,ys=null,hp={onError:function(e){bn=!0,_t=e}};function gp(e,t,n,i,s,u,d,g,y){bn=!1,_t=null,St.apply(hp,arguments)}function xp(e,t,n,i,s,u,d,g,y){if(gp.apply(this,arguments),bn){if(bn){var T=_t;bn=!1,_t=null}else throw Error(l(198));Hr||(Hr=!0,ys=T)}}function Xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function El(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Il(e){if(Xn(e)!==e)throw Error(l(188))}function yp(e){var t=e.alternate;if(!t){if(t=Xn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return Il(s),e;if(u===i)return Il(s),t;u=u.sibling}throw Error(l(188))}if(n.return!==i.return)n=s,i=u;else{for(var d=!1,g=s.child;g;){if(g===n){d=!0,n=s,i=u;break}if(g===i){d=!0,i=s,n=u;break}g=g.sibling}if(!d){for(g=u.child;g;){if(g===n){d=!0,n=u,i=s;break}if(g===i){d=!0,i=u,n=s;break}g=g.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Tl(e){return e=yp(e),e!==null?Fl(e):null}function Fl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fl(e);if(t!==null)return t;e=e.sibling}return null}var _l=a.unstable_scheduleCallback,Rl=a.unstable_cancelCallback,vp=a.unstable_shouldYield,wp=a.unstable_requestPaint,Me=a.unstable_now,kp=a.unstable_getCurrentPriorityLevel,vs=a.unstable_ImmediatePriority,Nl=a.unstable_UserBlockingPriority,Xi=a.unstable_NormalPriority,jp=a.unstable_LowPriority,zl=a.unstable_IdlePriority,Gi=null,Yt=null;function Sp(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Gi,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Ep,Cp=Math.log,bp=Math.LN2;function Ep(e){return e>>>=0,e===0?32:31-(Cp(e)/bp|0)|0}var Ji=64,Zi=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,u=e.pingedLanes,d=n&268435455;if(d!==0){var g=d&~s;g!==0?i=Wr(g):(u&=d,u!==0&&(i=Wr(u)))}else d=n&~s,d!==0?i=Wr(d):u!==0&&(i=Wr(u));if(i===0)return 0;if(t!==0&&t!==i&&(t&s)===0&&(s=i&-i,u=t&-t,s>=u||s===16&&(u&4194240)!==0))return t;if((i&4)!==0&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Mt(t),s=1<<n,i|=e[n],t&=~s;return i}function Ip(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tp(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-Mt(u),g=1<<d,y=s[d];y===-1?((g&n)===0||(g&i)!==0)&&(s[d]=Ip(g,t)):y<=t&&(e.expiredLanes|=g),u&=~g}}function ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Al(){var e=Ji;return Ji<<=1,(Ji&4194240)===0&&(Ji=64),e}function ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function Fp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Mt(n),u=1<<s;t[s]=0,i[s]=-1,e[s]=-1,n&=~u}}function js(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Mt(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}var ge=0;function Pl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ll,Ss,Dl,Ml,Ol,Cs=!1,to=[],En=null,In=null,Tn=null,qr=new Map,Yr=new Map,Fn=[],_p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bl(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(t.pointerId)}}function Qr(e,t,n,i,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[s]},t!==null&&(t=li(t),t!==null&&Ss(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Rp(e,t,n,i,s){switch(t){case"focusin":return En=Qr(En,e,t,n,i,s),!0;case"dragenter":return In=Qr(In,e,t,n,i,s),!0;case"mouseover":return Tn=Qr(Tn,e,t,n,i,s),!0;case"pointerover":var u=s.pointerId;return qr.set(u,Qr(qr.get(u)||null,e,t,n,i,s)),!0;case"gotpointercapture":return u=s.pointerId,Yr.set(u,Qr(Yr.get(u)||null,e,t,n,i,s)),!0}return!1}function $l(e){var t=Gn(e.target);if(t!==null){var n=Xn(t);if(n!==null){if(t=n.tag,t===13){if(t=El(n),t!==null){e.blockedOn=t,Ol(e.priority,function(){Dl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Kn=i,n.target.dispatchEvent(i),Kn=null}else return t=li(n),t!==null&&Ss(t),e.blockedOn=n,!1;t.shift()}return!0}function Ul(e,t,n){no(e)&&n.delete(t)}function Np(){Cs=!1,En!==null&&no(En)&&(En=null),In!==null&&no(In)&&(In=null),Tn!==null&&no(Tn)&&(Tn=null),qr.forEach(Ul),Yr.forEach(Ul)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Cs||(Cs=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Np)))}function Xr(e){function t(s){return Kr(s,e)}if(0<to.length){Kr(to[0],e);for(var n=1;n<to.length;n++){var i=to[n];i.blockedOn===e&&(i.blockedOn=null)}}for(En!==null&&Kr(En,e),In!==null&&Kr(In,e),Tn!==null&&Kr(Tn,e),qr.forEach(t),Yr.forEach(t),n=0;n<Fn.length;n++)i=Fn[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)$l(n),n.blockedOn===null&&Fn.shift()}var pr=re.ReactCurrentBatchConfig,ro=!0;function zp(e,t,n,i){var s=ge,u=pr.transition;pr.transition=null;try{ge=1,bs(e,t,n,i)}finally{ge=s,pr.transition=u}}function Ap(e,t,n,i){var s=ge,u=pr.transition;pr.transition=null;try{ge=4,bs(e,t,n,i)}finally{ge=s,pr.transition=u}}function bs(e,t,n,i){if(ro){var s=Es(e,t,n,i);if(s===null)Hs(e,t,i,io,n),Bl(e,i);else if(Rp(s,e,t,n,i))i.stopPropagation();else if(Bl(e,i),t&4&&-1<_p.indexOf(e)){for(;s!==null;){var u=li(s);if(u!==null&&Ll(u),u=Es(e,t,n,i),u===null&&Hs(e,t,i,io,n),u===s)break;s=u}s!==null&&i.stopPropagation()}else Hs(e,t,i,null,n)}}var io=null;function Es(e,t,n,i){if(io=null,e=Ft(i),e=Gn(e),e!==null)if(t=Xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=El(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function Hl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kp()){case vs:return 1;case Nl:return 4;case Xi:case jp:return 16;case zl:return 536870912;default:return 16}default:return 16}}var _n=null,Is=null,oo=null;function Wl(){if(oo)return oo;var e,t=Is,n=t.length,i,s="value"in _n?_n.value:_n.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var d=n-e;for(i=1;i<=d&&t[n-i]===s[u-i];i++);return oo=s.slice(e,1<i?1-i:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function Vl(){return!1}function Ct(e){function t(n,i,s,u,d){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ao:Vl,this.isPropagationStopped=Vl,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ts=Ct(fr),Gr=B({},fr,{view:0,detail:0}),Pp=Ct(Gr),Fs,_s,Jr,lo=B({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Fs=e.screenX-Jr.screenX,_s=e.screenY-Jr.screenY):_s=Fs=0,Jr=e),Fs)},movementY:function(e){return"movementY"in e?e.movementY:_s}}),ql=Ct(lo),Lp=B({},lo,{dataTransfer:0}),Dp=Ct(Lp),Mp=B({},Gr,{relatedTarget:0}),Rs=Ct(Mp),Op=B({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bp=Ct(Op),$p=B({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Up=Ct($p),Hp=B({},fr,{data:0}),Yl=Ct(Hp),Wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qp[e])?!!t[e]:!1}function Ns(){return Yp}var Qp=B({},Gr,{key:function(e){if(e.key){var t=Wp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=Ct(Qp),Xp=B({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ql=Ct(Xp),Gp=B({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),Jp=Ct(Gp),Zp=B({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ef=Ct(Zp),tf=B({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nf=Ct(tf),rf=[9,13,27,32],zs=x&&"CompositionEvent"in window,Zr=null;x&&"documentMode"in document&&(Zr=document.documentMode);var of=x&&"TextEvent"in window&&!Zr,Kl=x&&(!zs||Zr&&8<Zr&&11>=Zr),Xl=" ",Gl=!1;function Jl(e,t){switch(e){case"keyup":return rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function sf(e,t){switch(e){case"compositionend":return Zl(t);case"keypress":return t.which!==32?null:(Gl=!0,Xl);case"textInput":return e=t.data,e===Xl&&Gl?null:e;default:return null}}function af(e,t){if(mr)return e==="compositionend"||!zs&&Jl(e,t)?(e=Wl(),oo=Is=_n=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kl&&t.locale!=="ko"?null:t.data;default:return null}}var lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lf[e.type]:t==="textarea"}function tu(e,t,n,i){se(i),t=mo(t,"onChange"),0<t.length&&(n=new Ts("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ei=null,ti=null;function uf(e){vu(e,0)}function uo(e){var t=vr(e);if(yn(t))return e}function cf(e,t){if(e==="change")return t}var nu=!1;if(x){var As;if(x){var Ps="oninput"in document;if(!Ps){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),Ps=typeof ru.oninput=="function"}As=Ps}else As=!1;nu=As&&(!document.documentMode||9<document.documentMode)}function iu(){ei&&(ei.detachEvent("onpropertychange",ou),ti=ei=null)}function ou(e){if(e.propertyName==="value"&&uo(ti)){var t=[];tu(t,ti,e,Ft(e)),$e(uf,t)}}function df(e,t,n){e==="focusin"?(iu(),ei=t,ti=n,ei.attachEvent("onpropertychange",ou)):e==="focusout"&&iu()}function pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uo(ti)}function ff(e,t){if(e==="click")return uo(t)}function mf(e,t){if(e==="input"||e==="change")return uo(t)}function hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:hf;function ni(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!S.call(t,s)||!Ot(e[s],t[s]))return!1}return!0}function su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var n=su(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=su(n)}}function lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uu(){for(var e=window,t=kt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kt(e.document)}return t}function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gf(e){var t=uu(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lu(n.ownerDocument.documentElement,n)){if(i!==null&&Ls(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,u=Math.min(i.start,s);i=i.end===void 0?u:Math.min(i.end,s),!e.extend&&u>i&&(s=i,i=u,u=s),s=au(n,u);var d=au(n,i);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),u>i?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xf=x&&"documentMode"in document&&11>=document.documentMode,hr=null,Ds=null,ri=null,Ms=!1;function cu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ms||hr==null||hr!==kt(i)||(i=hr,"selectionStart"in i&&Ls(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ri&&ni(ri,i)||(ri=i,i=mo(Ds,"onSelect"),0<i.length&&(t=new Ts("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=hr)))}function co(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Os={},du={};x&&(du=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function po(e){if(Os[e])return Os[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in du)return Os[e]=t[n];return e}var pu=po("animationend"),fu=po("animationiteration"),mu=po("animationstart"),hu=po("transitionend"),gu=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,t){gu.set(e,t),f(t,[e])}for(var Bs=0;Bs<xu.length;Bs++){var $s=xu[Bs],yf=$s.toLowerCase(),vf=$s[0].toUpperCase()+$s.slice(1);Rn(yf,"on"+vf)}Rn(pu,"onAnimationEnd"),Rn(fu,"onAnimationIteration"),Rn(mu,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(hu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function yu(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,xp(i,t,void 0,e),e.currentTarget=null}function vu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var d=i.length-1;0<=d;d--){var g=i[d],y=g.instance,T=g.currentTarget;if(g=g.listener,y!==u&&s.isPropagationStopped())break e;yu(s,g,T),u=y}else for(d=0;d<i.length;d++){if(g=i[d],y=g.instance,T=g.currentTarget,g=g.listener,y!==u&&s.isPropagationStopped())break e;yu(s,g,T),u=y}}}if(Hr)throw e=ys,Hr=!1,ys=null,e}function Se(e,t){var n=t[Ks];n===void 0&&(n=t[Ks]=new Set);var i=e+"__bubble";n.has(i)||(wu(t,e,2,!1),n.add(i))}function Us(e,t,n){var i=0;t&&(i|=4),wu(n,e,i,t)}var fo="_reactListening"+Math.random().toString(36).slice(2);function oi(e){if(!e[fo]){e[fo]=!0,c.forEach(function(n){n!=="selectionchange"&&(wf.has(n)||Us(n,!1,e),Us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fo]||(t[fo]=!0,Us("selectionchange",!1,t))}}function wu(e,t,n,i){switch(Hl(t)){case 1:var s=zp;break;case 4:s=Ap;break;default:s=bs}n=s.bind(null,t,n,e),s=void 0,!Cn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Hs(e,t,n,i,s){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===s||g.nodeType===8&&g.parentNode===s)break;if(d===4)for(d=i.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===s||y.nodeType===8&&y.parentNode===s))return;d=d.return}for(;g!==null;){if(d=Gn(g),d===null)return;if(y=d.tag,y===5||y===6){i=u=d;continue e}g=g.parentNode}}i=i.return}$e(function(){var T=u,z=Ft(n),P=[];e:{var N=gu.get(e);if(N!==void 0){var $=Ts,q=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":$=Kp;break;case"focusin":q="focus",$=Rs;break;case"focusout":q="blur",$=Rs;break;case"beforeblur":case"afterblur":$=Rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Jp;break;case pu:case fu:case mu:$=Bp;break;case hu:$=ef;break;case"scroll":$=Pp;break;case"wheel":$=nf;break;case"copy":case"cut":case"paste":$=Up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Ql}var Y=(t&4)!==0,Oe=!Y&&e==="scroll",C=Y?N!==null?N+"Capture":null:N;Y=[];for(var w=T,E;w!==null;){E=w;var L=E.stateNode;if(E.tag===5&&L!==null&&(E=L,C!==null&&(L=Xe(w,C),L!=null&&Y.push(si(w,L,E)))),Oe)break;w=w.return}0<Y.length&&(N=new $(N,q,null,n,z),P.push({event:N,listeners:Y}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",N&&n!==Kn&&(q=n.relatedTarget||n.fromElement)&&(Gn(q)||q[on]))break e;if(($||N)&&(N=z.window===z?z:(N=z.ownerDocument)?N.defaultView||N.parentWindow:window,$?(q=n.relatedTarget||n.toElement,$=T,q=q?Gn(q):null,q!==null&&(Oe=Xn(q),q!==Oe||q.tag!==5&&q.tag!==6)&&(q=null)):($=null,q=T),$!==q)){if(Y=ql,L="onMouseLeave",C="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(Y=Ql,L="onPointerLeave",C="onPointerEnter",w="pointer"),Oe=$==null?N:vr($),E=q==null?N:vr(q),N=new Y(L,w+"leave",$,n,z),N.target=Oe,N.relatedTarget=E,L=null,Gn(z)===T&&(Y=new Y(C,w+"enter",q,n,z),Y.target=E,Y.relatedTarget=Oe,L=Y),Oe=L,$&&q)t:{for(Y=$,C=q,w=0,E=Y;E;E=xr(E))w++;for(E=0,L=C;L;L=xr(L))E++;for(;0<w-E;)Y=xr(Y),w--;for(;0<E-w;)C=xr(C),E--;for(;w--;){if(Y===C||C!==null&&Y===C.alternate)break t;Y=xr(Y),C=xr(C)}Y=null}else Y=null;$!==null&&ku(P,N,$,Y,!1),q!==null&&Oe!==null&&ku(P,Oe,q,Y,!0)}}e:{if(N=T?vr(T):window,$=N.nodeName&&N.nodeName.toLowerCase(),$==="select"||$==="input"&&N.type==="file")var Q=cf;else if(eu(N))if(nu)Q=mf;else{Q=pf;var J=df}else($=N.nodeName)&&$.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(Q=ff);if(Q&&(Q=Q(e,T))){tu(P,Q,n,z);break e}J&&J(e,N,T),e==="focusout"&&(J=N._wrapperState)&&J.controlled&&N.type==="number"&&jt(N,"number",N.value)}switch(J=T?vr(T):window,e){case"focusin":(eu(J)||J.contentEditable==="true")&&(hr=J,Ds=T,ri=null);break;case"focusout":ri=Ds=hr=null;break;case"mousedown":Ms=!0;break;case"contextmenu":case"mouseup":case"dragend":Ms=!1,cu(P,n,z);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":cu(P,n,z)}var Z;if(zs)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else mr?Jl(e,n)&&(ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ie="onCompositionStart");ie&&(Kl&&n.locale!=="ko"&&(mr||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&mr&&(Z=Wl()):(_n=z,Is="value"in _n?_n.value:_n.textContent,mr=!0)),J=mo(T,ie),0<J.length&&(ie=new Yl(ie,e,null,n,z),P.push({event:ie,listeners:J}),Z?ie.data=Z:(Z=Zl(n),Z!==null&&(ie.data=Z)))),(Z=of?sf(e,n):af(e,n))&&(T=mo(T,"onBeforeInput"),0<T.length&&(z=new Yl("onBeforeInput","beforeinput",null,n,z),P.push({event:z,listeners:T}),z.data=Z))}vu(P,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mo(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,u=s.stateNode;s.tag===5&&u!==null&&(s=u,u=Xe(e,n),u!=null&&i.unshift(si(e,u,s)),u=Xe(e,t),u!=null&&i.push(si(e,u,s))),e=e.return}return i}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ku(e,t,n,i,s){for(var u=t._reactName,d=[];n!==null&&n!==i;){var g=n,y=g.alternate,T=g.stateNode;if(y!==null&&y===i)break;g.tag===5&&T!==null&&(g=T,s?(y=Xe(n,u),y!=null&&d.unshift(si(n,y,g))):s||(y=Xe(n,u),y!=null&&d.push(si(n,y,g)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var kf=/\r\n?/g,jf=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(jf,"")}function ho(e,t,n){if(t=ju(t),ju(e)!==t&&n)throw Error(l(425))}function go(){}var Ws=null,Vs=null;function qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ys=typeof setTimeout=="function"?setTimeout:void 0,Sf=typeof clearTimeout=="function"?clearTimeout:void 0,Su=typeof Promise=="function"?Promise:void 0,Cf=typeof queueMicrotask=="function"?queueMicrotask:typeof Su<"u"?function(e){return Su.resolve(null).then(e).catch(bf)}:Ys;function bf(e){setTimeout(function(){throw e})}function Qs(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){e.removeChild(s),Xr(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Xr(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yr=Math.random().toString(36).slice(2),Qt="__reactFiber$"+yr,ai="__reactProps$"+yr,on="__reactContainer$"+yr,Ks="__reactEvents$"+yr,Ef="__reactListeners$"+yr,If="__reactHandles$"+yr;function Gn(e){var t=e[Qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[on]||n[Qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cu(e);e!==null;){if(n=e[Qt])return n;e=Cu(e)}return t}e=n,n=e.parentNode}return null}function li(e){return e=e[Qt]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function xo(e){return e[ai]||null}var Xs=[],wr=-1;function zn(e){return{current:e}}function Ce(e){0>wr||(e.current=Xs[wr],Xs[wr]=null,wr--)}function ke(e,t){wr++,Xs[wr]=e.current,e.current=t}var An={},lt=zn(An),mt=zn(!1),Jn=An;function kr(e,t){var n=e.type.contextTypes;if(!n)return An;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},u;for(u in n)s[u]=t[u];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ht(e){return e=e.childContextTypes,e!=null}function yo(){Ce(mt),Ce(lt)}function bu(e,t,n){if(lt.current!==An)throw Error(l(168));ke(lt,t),ke(mt,n)}function Eu(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(l(108,de(e)||"Unknown",s));return B({},n,i)}function vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Jn=lt.current,ke(lt,e),ke(mt,mt.current),!0}function Iu(e,t,n){var i=e.stateNode;if(!i)throw Error(l(169));n?(e=Eu(e,t,Jn),i.__reactInternalMemoizedMergedChildContext=e,Ce(mt),Ce(lt),ke(lt,e)):Ce(mt),ke(mt,n)}var sn=null,wo=!1,Gs=!1;function Tu(e){sn===null?sn=[e]:sn.push(e)}function Tf(e){wo=!0,Tu(e)}function Pn(){if(!Gs&&sn!==null){Gs=!0;var e=0,t=ge;try{var n=sn;for(ge=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}sn=null,wo=!1}catch(s){throw sn!==null&&(sn=sn.slice(e+1)),_l(vs,Pn),s}finally{ge=t,Gs=!1}}return null}var jr=[],Sr=0,ko=null,jo=0,Rt=[],Nt=0,Zn=null,an=1,ln="";function er(e,t){jr[Sr++]=jo,jr[Sr++]=ko,ko=e,jo=t}function Fu(e,t,n){Rt[Nt++]=an,Rt[Nt++]=ln,Rt[Nt++]=Zn,Zn=e;var i=an;e=ln;var s=32-Mt(i)-1;i&=~(1<<s),n+=1;var u=32-Mt(t)+s;if(30<u){var d=s-s%5;u=(i&(1<<d)-1).toString(32),i>>=d,s-=d,an=1<<32-Mt(t)+s|n<<s|i,ln=u+e}else an=1<<u|n<<s|i,ln=e}function Js(e){e.return!==null&&(er(e,1),Fu(e,1,0))}function Zs(e){for(;e===ko;)ko=jr[--Sr],jr[Sr]=null,jo=jr[--Sr],jr[Sr]=null;for(;e===Zn;)Zn=Rt[--Nt],Rt[Nt]=null,ln=Rt[--Nt],Rt[Nt]=null,an=Rt[--Nt],Rt[Nt]=null}var bt=null,Et=null,Ee=!1,Bt=null;function _u(e,t){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,Et=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:an,overflow:ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,bt=e,Et=null,!0):!1;default:return!1}}function ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ta(e){if(Ee){var t=Et;if(t){var n=t;if(!Ru(e,t)){if(ea(e))throw Error(l(418));t=Nn(n.nextSibling);var i=bt;t&&Ru(e,t)?_u(i,n):(e.flags=e.flags&-4097|2,Ee=!1,bt=e)}}else{if(ea(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ee=!1,bt=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function So(e){if(e!==bt)return!1;if(!Ee)return Nu(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qs(e.type,e.memoizedProps)),t&&(t=Et)){if(ea(e))throw zu(),Error(l(418));for(;t;)_u(e,t),t=Nn(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Et=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=bt?Nn(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=Et;e;)e=Nn(e.nextSibling)}function Cr(){Et=bt=null,Ee=!1}function na(e){Bt===null?Bt=[e]:Bt.push(e)}var Ff=re.ReactCurrentBatchConfig;function ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var i=n.stateNode}if(!i)throw Error(l(147,e));var s=i,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(d){var g=s.refs;d===null?delete g[u]:g[u]=d},t._stringRef=u,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function Co(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Au(e){var t=e._init;return t(e._payload)}function Pu(e){function t(C,w){if(e){var E=C.deletions;E===null?(C.deletions=[w],C.flags|=16):E.push(w)}}function n(C,w){if(!e)return null;for(;w!==null;)t(C,w),w=w.sibling;return null}function i(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function s(C,w){return C=Hn(C,w),C.index=0,C.sibling=null,C}function u(C,w,E){return C.index=E,e?(E=C.alternate,E!==null?(E=E.index,E<w?(C.flags|=2,w):E):(C.flags|=2,w)):(C.flags|=1048576,w)}function d(C){return e&&C.alternate===null&&(C.flags|=2),C}function g(C,w,E,L){return w===null||w.tag!==6?(w=Ya(E,C.mode,L),w.return=C,w):(w=s(w,E),w.return=C,w)}function y(C,w,E,L){var Q=E.type;return Q===ve?z(C,w,E.props.children,L,E.key):w!==null&&(w.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ne&&Au(Q)===w.type)?(L=s(w,E.props),L.ref=ui(C,w,E),L.return=C,L):(L=Qo(E.type,E.key,E.props,null,C.mode,L),L.ref=ui(C,w,E),L.return=C,L)}function T(C,w,E,L){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=Qa(E,C.mode,L),w.return=C,w):(w=s(w,E.children||[]),w.return=C,w)}function z(C,w,E,L,Q){return w===null||w.tag!==7?(w=lr(E,C.mode,L,Q),w.return=C,w):(w=s(w,E),w.return=C,w)}function P(C,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Ya(""+w,C.mode,E),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ee:return E=Qo(w.type,w.key,w.props,null,C.mode,E),E.ref=ui(C,null,w),E.return=C,E;case ae:return w=Qa(w,C.mode,E),w.return=C,w;case ne:var L=w._init;return P(C,L(w._payload),E)}if(qn(w)||V(w))return w=lr(w,C.mode,E,null),w.return=C,w;Co(C,w)}return null}function N(C,w,E,L){var Q=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return Q!==null?null:g(C,w,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ee:return E.key===Q?y(C,w,E,L):null;case ae:return E.key===Q?T(C,w,E,L):null;case ne:return Q=E._init,N(C,w,Q(E._payload),L)}if(qn(E)||V(E))return Q!==null?null:z(C,w,E,L,null);Co(C,E)}return null}function $(C,w,E,L,Q){if(typeof L=="string"&&L!==""||typeof L=="number")return C=C.get(E)||null,g(w,C,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ee:return C=C.get(L.key===null?E:L.key)||null,y(w,C,L,Q);case ae:return C=C.get(L.key===null?E:L.key)||null,T(w,C,L,Q);case ne:var J=L._init;return $(C,w,E,J(L._payload),Q)}if(qn(L)||V(L))return C=C.get(E)||null,z(w,C,L,Q,null);Co(w,L)}return null}function q(C,w,E,L){for(var Q=null,J=null,Z=w,ie=w=0,Ze=null;Z!==null&&ie<E.length;ie++){Z.index>ie?(Ze=Z,Z=null):Ze=Z.sibling;var me=N(C,Z,E[ie],L);if(me===null){Z===null&&(Z=Ze);break}e&&Z&&me.alternate===null&&t(C,Z),w=u(me,w,ie),J===null?Q=me:J.sibling=me,J=me,Z=Ze}if(ie===E.length)return n(C,Z),Ee&&er(C,ie),Q;if(Z===null){for(;ie<E.length;ie++)Z=P(C,E[ie],L),Z!==null&&(w=u(Z,w,ie),J===null?Q=Z:J.sibling=Z,J=Z);return Ee&&er(C,ie),Q}for(Z=i(C,Z);ie<E.length;ie++)Ze=$(Z,C,ie,E[ie],L),Ze!==null&&(e&&Ze.alternate!==null&&Z.delete(Ze.key===null?ie:Ze.key),w=u(Ze,w,ie),J===null?Q=Ze:J.sibling=Ze,J=Ze);return e&&Z.forEach(function(Wn){return t(C,Wn)}),Ee&&er(C,ie),Q}function Y(C,w,E,L){var Q=V(E);if(typeof Q!="function")throw Error(l(150));if(E=Q.call(E),E==null)throw Error(l(151));for(var J=Q=null,Z=w,ie=w=0,Ze=null,me=E.next();Z!==null&&!me.done;ie++,me=E.next()){Z.index>ie?(Ze=Z,Z=null):Ze=Z.sibling;var Wn=N(C,Z,me.value,L);if(Wn===null){Z===null&&(Z=Ze);break}e&&Z&&Wn.alternate===null&&t(C,Z),w=u(Wn,w,ie),J===null?Q=Wn:J.sibling=Wn,J=Wn,Z=Ze}if(me.done)return n(C,Z),Ee&&er(C,ie),Q;if(Z===null){for(;!me.done;ie++,me=E.next())me=P(C,me.value,L),me!==null&&(w=u(me,w,ie),J===null?Q=me:J.sibling=me,J=me);return Ee&&er(C,ie),Q}for(Z=i(C,Z);!me.done;ie++,me=E.next())me=$(Z,C,ie,me.value,L),me!==null&&(e&&me.alternate!==null&&Z.delete(me.key===null?ie:me.key),w=u(me,w,ie),J===null?Q=me:J.sibling=me,J=me);return e&&Z.forEach(function(lm){return t(C,lm)}),Ee&&er(C,ie),Q}function Oe(C,w,E,L){if(typeof E=="object"&&E!==null&&E.type===ve&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ee:e:{for(var Q=E.key,J=w;J!==null;){if(J.key===Q){if(Q=E.type,Q===ve){if(J.tag===7){n(C,J.sibling),w=s(J,E.props.children),w.return=C,C=w;break e}}else if(J.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ne&&Au(Q)===J.type){n(C,J.sibling),w=s(J,E.props),w.ref=ui(C,J,E),w.return=C,C=w;break e}n(C,J);break}else t(C,J);J=J.sibling}E.type===ve?(w=lr(E.props.children,C.mode,L,E.key),w.return=C,C=w):(L=Qo(E.type,E.key,E.props,null,C.mode,L),L.ref=ui(C,w,E),L.return=C,C=L)}return d(C);case ae:e:{for(J=E.key;w!==null;){if(w.key===J)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){n(C,w.sibling),w=s(w,E.children||[]),w.return=C,C=w;break e}else{n(C,w);break}else t(C,w);w=w.sibling}w=Qa(E,C.mode,L),w.return=C,C=w}return d(C);case ne:return J=E._init,Oe(C,w,J(E._payload),L)}if(qn(E))return q(C,w,E,L);if(V(E))return Y(C,w,E,L);Co(C,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(n(C,w.sibling),w=s(w,E),w.return=C,C=w):(n(C,w),w=Ya(E,C.mode,L),w.return=C,C=w),d(C)):n(C,w)}return Oe}var br=Pu(!0),Lu=Pu(!1),bo=zn(null),Eo=null,Er=null,ra=null;function ia(){ra=Er=Eo=null}function oa(e){var t=bo.current;Ce(bo),e._currentValue=t}function sa(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ir(e,t){Eo=e,ra=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(gt=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(ra!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Eo===null)throw Error(l(308));Er=e,Eo.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var tr=null;function aa(e){tr===null?tr=[e]:tr.push(e)}function Du(e,t,n,i){var s=t.interleaved;return s===null?(n.next=n,aa(t)):(n.next=s.next,s.next=n),t.interleaved=n,un(e,i)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function la(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(fe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,un(e,n)}return s=i.interleaved,s===null?(t.next=t,aa(i)):(t.next=s.next,s.next=t),i.interleaved=t,un(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,js(e,n)}}function Ou(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?s=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function To(e,t,n,i){var s=e.updateQueue;Ln=!1;var u=s.firstBaseUpdate,d=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var y=g,T=y.next;y.next=null,d===null?u=T:d.next=T,d=y;var z=e.alternate;z!==null&&(z=z.updateQueue,g=z.lastBaseUpdate,g!==d&&(g===null?z.firstBaseUpdate=T:g.next=T,z.lastBaseUpdate=y))}if(u!==null){var P=s.baseState;d=0,z=T=y=null,g=u;do{var N=g.lane,$=g.eventTime;if((i&N)===N){z!==null&&(z=z.next={eventTime:$,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var q=e,Y=g;switch(N=t,$=n,Y.tag){case 1:if(q=Y.payload,typeof q=="function"){P=q.call($,P,N);break e}P=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Y.payload,N=typeof q=="function"?q.call($,P,N):q,N==null)break e;P=B({},P,N);break e;case 2:Ln=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,N=s.effects,N===null?s.effects=[g]:N.push(g))}else $={eventTime:$,lane:N,tag:g.tag,payload:g.payload,callback:g.callback,next:null},z===null?(T=z=$,y=P):z=z.next=$,d|=N;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;N=g,g=N.next,N.next=null,s.lastBaseUpdate=N,s.shared.pending=null}}while(!0);if(z===null&&(y=P),s.baseState=y,s.firstBaseUpdate=T,s.lastBaseUpdate=z,t=s.shared.interleaved,t!==null){s=t;do d|=s.lane,s=s.next;while(s!==t)}else u===null&&(s.shared.lanes=0);ir|=d,e.lanes=d,e.memoizedState=P}}function Bu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(l(191,s));s.call(i)}}}var ci={},Kt=zn(ci),di=zn(ci),pi=zn(ci);function nr(e){if(e===ci)throw Error(l(174));return e}function ua(e,t){switch(ke(pi,t),ke(di,e),ke(Kt,ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Or(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Or(t,e)}Ce(Kt),ke(Kt,t)}function Tr(){Ce(Kt),Ce(di),Ce(pi)}function $u(e){nr(pi.current);var t=nr(Kt.current),n=Or(t,e.type);t!==n&&(ke(di,e),ke(Kt,n))}function ca(e){di.current===e&&(Ce(Kt),Ce(di))}var Fe=zn(0);function Fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=[];function pa(){for(var e=0;e<da.length;e++)da[e]._workInProgressVersionPrimary=null;da.length=0}var _o=re.ReactCurrentDispatcher,fa=re.ReactCurrentBatchConfig,rr=0,_e=null,Ye=null,Ge=null,Ro=!1,fi=!1,mi=0,_f=0;function ut(){throw Error(l(321))}function ma(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function ha(e,t,n,i,s,u){if(rr=u,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_o.current=e===null||e.memoizedState===null?Af:Pf,e=n(i,s),fi){u=0;do{if(fi=!1,mi=0,25<=u)throw Error(l(301));u+=1,Ge=Ye=null,t.updateQueue=null,_o.current=Lf,e=n(i,s)}while(fi)}if(_o.current=Ao,t=Ye!==null&&Ye.next!==null,rr=0,Ge=Ye=_e=null,Ro=!1,t)throw Error(l(300));return e}function ga(){var e=mi!==0;return mi=0,e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?_e.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function At(){if(Ye===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=Ge===null?_e.memoizedState:Ge.next;if(t!==null)Ge=t,Ye=e;else{if(e===null)throw Error(l(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Ge===null?_e.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function hi(e,t){return typeof t=="function"?t(e):t}function xa(e){var t=At(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=Ye,s=i.baseQueue,u=n.pending;if(u!==null){if(s!==null){var d=s.next;s.next=u.next,u.next=d}i.baseQueue=s=u,n.pending=null}if(s!==null){u=s.next,i=i.baseState;var g=d=null,y=null,T=u;do{var z=T.lane;if((rr&z)===z)y!==null&&(y=y.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),i=T.hasEagerState?T.eagerState:e(i,T.action);else{var P={lane:z,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};y===null?(g=y=P,d=i):y=y.next=P,_e.lanes|=z,ir|=z}T=T.next}while(T!==null&&T!==u);y===null?d=i:y.next=g,Ot(i,t.memoizedState)||(gt=!0),t.memoizedState=i,t.baseState=d,t.baseQueue=y,n.lastRenderedState=i}if(e=n.interleaved,e!==null){s=e;do u=s.lane,_e.lanes|=u,ir|=u,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ya(e){var t=At(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do u=e(u,d.action),d=d.next;while(d!==s);Ot(u,t.memoizedState)||(gt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function Uu(){}function Hu(e,t){var n=_e,i=At(),s=t(),u=!Ot(i.memoizedState,s);if(u&&(i.memoizedState=s,gt=!0),i=i.queue,va(qu.bind(null,n,i,e),[e]),i.getSnapshot!==t||u||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,gi(9,Vu.bind(null,n,i,s,t),void 0,null),Je===null)throw Error(l(349));(rr&30)!==0||Wu(n,t,s)}return s}function Wu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vu(e,t,n,i){t.value=n,t.getSnapshot=i,Yu(t)&&Qu(e)}function qu(e,t,n){return n(function(){Yu(t)&&Qu(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function Qu(e){var t=un(e,1);t!==null&&Wt(t,e,1,-1)}function Ku(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hi,lastRenderedState:e},t.queue=e,e=e.dispatch=zf.bind(null,_e,e),[t.memoizedState,e]}function gi(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Xu(){return At().memoizedState}function No(e,t,n,i){var s=Xt();_e.flags|=e,s.memoizedState=gi(1|t,n,void 0,i===void 0?null:i)}function zo(e,t,n,i){var s=At();i=i===void 0?null:i;var u=void 0;if(Ye!==null){var d=Ye.memoizedState;if(u=d.destroy,i!==null&&ma(i,d.deps)){s.memoizedState=gi(t,n,u,i);return}}_e.flags|=e,s.memoizedState=gi(1|t,n,u,i)}function Gu(e,t){return No(8390656,8,e,t)}function va(e,t){return zo(2048,8,e,t)}function Ju(e,t){return zo(4,2,e,t)}function Zu(e,t){return zo(4,4,e,t)}function ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tc(e,t,n){return n=n!=null?n.concat([e]):null,zo(4,4,ec.bind(null,t,e),n)}function wa(){}function nc(e,t){var n=At();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ma(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function rc(e,t){var n=At();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ma(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function ic(e,t,n){return(rr&21)===0?(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n):(Ot(n,t)||(n=Al(),_e.lanes|=n,ir|=n,e.baseState=!0),t)}function Rf(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var i=fa.transition;fa.transition={};try{e(!1),t()}finally{ge=n,fa.transition=i}}function oc(){return At().memoizedState}function Nf(e,t,n){var i=$n(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},sc(e))ac(t,n);else if(n=Du(e,t,n,i),n!==null){var s=ft();Wt(n,e,i,s),lc(n,t,i)}}function zf(e,t,n){var i=$n(e),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(sc(e))ac(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,g=u(d,n);if(s.hasEagerState=!0,s.eagerState=g,Ot(g,d)){var y=t.interleaved;y===null?(s.next=s,aa(t)):(s.next=y.next,y.next=s),t.interleaved=s;return}}catch{}finally{}n=Du(e,t,s,i),n!==null&&(s=ft(),Wt(n,e,i,s),lc(n,t,i))}}function sc(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function ac(e,t){fi=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lc(e,t,n){if((n&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,js(e,n)}}var Ao={readContext:zt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},Af={readContext:zt,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:Gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,No(4194308,4,ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var n=Xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=Xt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Nf.bind(null,_e,e),[i.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:Ku,useDebugValue:wa,useDeferredValue:function(e){return Xt().memoizedState=e},useTransition:function(){var e=Ku(!1),t=e[0];return e=Rf.bind(null,e[1]),Xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=_e,s=Xt();if(Ee){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Je===null)throw Error(l(349));(rr&30)!==0||Wu(i,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,Gu(qu.bind(null,i,u,e),[e]),i.flags|=2048,gi(9,Vu.bind(null,i,u,n,t),void 0,null),n},useId:function(){var e=Xt(),t=Je.identifierPrefix;if(Ee){var n=ln,i=an;n=(i&~(1<<32-Mt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_f++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pf={readContext:zt,useCallback:nc,useContext:zt,useEffect:va,useImperativeHandle:tc,useInsertionEffect:Ju,useLayoutEffect:Zu,useMemo:rc,useReducer:xa,useRef:Xu,useState:function(){return xa(hi)},useDebugValue:wa,useDeferredValue:function(e){var t=At();return ic(t,Ye.memoizedState,e)},useTransition:function(){var e=xa(hi)[0],t=At().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Hu,useId:oc,unstable_isNewReconciler:!1},Lf={readContext:zt,useCallback:nc,useContext:zt,useEffect:va,useImperativeHandle:tc,useInsertionEffect:Ju,useLayoutEffect:Zu,useMemo:rc,useReducer:ya,useRef:Xu,useState:function(){return ya(hi)},useDebugValue:wa,useDeferredValue:function(e){var t=At();return Ye===null?t.memoizedState=e:ic(t,Ye.memoizedState,e)},useTransition:function(){var e=ya(hi)[0],t=At().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Hu,useId:oc,unstable_isNewReconciler:!1};function $t(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ka(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ft(),s=$n(e),u=cn(i,s);u.payload=t,n!=null&&(u.callback=n),t=Dn(e,u,s),t!==null&&(Wt(t,e,s,i),Io(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ft(),s=$n(e),u=cn(i,s);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Dn(e,u,s),t!==null&&(Wt(t,e,s,i),Io(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),i=$n(e),s=cn(n,i);s.tag=2,t!=null&&(s.callback=t),t=Dn(e,s,i),t!==null&&(Wt(t,e,i,n),Io(t,e,i))}};function uc(e,t,n,i,s,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,d):t.prototype&&t.prototype.isPureReactComponent?!ni(n,i)||!ni(s,u):!0}function cc(e,t,n){var i=!1,s=An,u=t.contextType;return typeof u=="object"&&u!==null?u=zt(u):(s=ht(t)?Jn:lt.current,i=t.contextTypes,u=(i=i!=null)?kr(e,s):An),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=u),t}function dc(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function ja(e,t,n,i){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},la(e);var u=t.contextType;typeof u=="object"&&u!==null?s.context=zt(u):(u=ht(t)?Jn:lt.current,s.context=kr(e,u)),s.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(ka(e,t,u,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Po.enqueueReplaceState(s,s.state,null),To(e,n,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t){try{var n="",i=t;do n+=oe(i),i=i.return;while(i);var s=n}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:s,digest:null}}function Sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Df=typeof WeakMap=="function"?WeakMap:Map;function pc(e,t,n){n=cn(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Uo||(Uo=!0,Oa=i),Ca(e,t)},n}function fc(e,t,n){n=cn(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;n.payload=function(){return i(s)},n.callback=function(){Ca(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Ca(e,t),typeof i!="function"&&(On===null?On=new Set([this]):On.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function mc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Df;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(s.add(n),e=Gf.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gc(e,t,n,i,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=cn(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Mf=re.ReactCurrentOwner,gt=!1;function pt(e,t,n,i){t.child=e===null?Lu(t,null,n,i):br(t,e.child,n,i)}function xc(e,t,n,i,s){n=n.render;var u=t.ref;return Ir(t,s),i=ha(e,t,n,i,u,s),n=ga(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,dn(e,t,s)):(Ee&&n&&Js(t),t.flags|=1,pt(e,t,i,s),t.child)}function yc(e,t,n,i,s){if(e===null){var u=n.type;return typeof u=="function"&&!qa(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,vc(e,t,u,i,s)):(e=Qo(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&s)===0){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(d,i)&&e.ref===t.ref)return dn(e,t,s)}return t.flags|=1,e=Hn(u,i),e.ref=t.ref,e.return=t,t.child=e}function vc(e,t,n,i,s){if(e!==null){var u=e.memoizedProps;if(ni(u,i)&&e.ref===t.ref)if(gt=!1,t.pendingProps=i=u,(e.lanes&s)!==0)(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,dn(e,t,s)}return ba(e,t,n,i,s)}function wc(e,t,n){var i=t.pendingProps,s=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Rr,It),It|=n;else{if((n&1073741824)===0)return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Rr,It),It|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:n,ke(Rr,It),It|=i}else u!==null?(i=u.baseLanes|n,t.memoizedState=null):i=n,ke(Rr,It),It|=i;return pt(e,t,s,n),t.child}function kc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ba(e,t,n,i,s){var u=ht(n)?Jn:lt.current;return u=kr(t,u),Ir(t,s),n=ha(e,t,n,i,u,s),i=ga(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,dn(e,t,s)):(Ee&&i&&Js(t),t.flags|=1,pt(e,t,n,s),t.child)}function jc(e,t,n,i,s){if(ht(n)){var u=!0;vo(t)}else u=!1;if(Ir(t,s),t.stateNode===null)Do(e,t),cc(t,n,i),ja(t,n,i,s),i=!0;else if(e===null){var d=t.stateNode,g=t.memoizedProps;d.props=g;var y=d.context,T=n.contextType;typeof T=="object"&&T!==null?T=zt(T):(T=ht(n)?Jn:lt.current,T=kr(t,T));var z=n.getDerivedStateFromProps,P=typeof z=="function"||typeof d.getSnapshotBeforeUpdate=="function";P||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==i||y!==T)&&dc(t,d,i,T),Ln=!1;var N=t.memoizedState;d.state=N,To(t,i,d,s),y=t.memoizedState,g!==i||N!==y||mt.current||Ln?(typeof z=="function"&&(ka(t,n,z,i),y=t.memoizedState),(g=Ln||uc(t,n,g,i,N,y,T))?(P||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=y),d.props=i,d.state=y,d.context=T,i=g):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,Mu(e,t),g=t.memoizedProps,T=t.type===t.elementType?g:$t(t.type,g),d.props=T,P=t.pendingProps,N=d.context,y=n.contextType,typeof y=="object"&&y!==null?y=zt(y):(y=ht(n)?Jn:lt.current,y=kr(t,y));var $=n.getDerivedStateFromProps;(z=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==P||N!==y)&&dc(t,d,i,y),Ln=!1,N=t.memoizedState,d.state=N,To(t,i,d,s);var q=t.memoizedState;g!==P||N!==q||mt.current||Ln?(typeof $=="function"&&(ka(t,n,$,i),q=t.memoizedState),(T=Ln||uc(t,n,T,i,N,q,y)||!1)?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,q,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,q,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=q),d.props=i,d.state=q,d.context=y,i=T):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),i=!1)}return Ea(e,t,n,i,u,s)}function Ea(e,t,n,i,s,u){kc(e,t);var d=(t.flags&128)!==0;if(!i&&!d)return s&&Iu(t,n,!1),dn(e,t,u);i=t.stateNode,Mf.current=t;var g=d&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&d?(t.child=br(t,e.child,null,u),t.child=br(t,null,g,u)):pt(e,t,g,u),t.memoizedState=i.state,s&&Iu(t,n,!0),t.child}function Sc(e){var t=e.stateNode;t.pendingContext?bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bu(e,t.context,!1),ua(e,t.containerInfo)}function Cc(e,t,n,i,s){return Cr(),na(s),t.flags|=256,pt(e,t,n,i),t.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function bc(e,t,n){var i=t.pendingProps,s=Fe.current,u=!1,d=(t.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(s&2)!==0),g?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ke(Fe,s&1),e===null)return ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=i.children,e=i.fallback,u?(i=t.mode,u=t.child,d={mode:"hidden",children:d},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=d):u=Ko(d,i,0,null),e=lr(e,i,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Ta(n),t.memoizedState=Ia,e):Fa(t,d));if(s=e.memoizedState,s!==null&&(g=s.dehydrated,g!==null))return Of(e,t,d,i,g,s,n);if(u){u=i.fallback,d=t.mode,s=e.child,g=s.sibling;var y={mode:"hidden",children:i.children};return(d&1)===0&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=y,t.deletions=null):(i=Hn(s,y),i.subtreeFlags=s.subtreeFlags&14680064),g!==null?u=Hn(g,u):(u=lr(u,d,n,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,i=u,u=t.child,d=e.child.memoizedState,d=d===null?Ta(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~n,t.memoizedState=Ia,i}return u=e.child,e=u.sibling,i=Hn(u,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Fa(e,t){return t=Ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,i){return i!==null&&na(i),br(t,e.child,null,n),e=Fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Of(e,t,n,i,s,u,d){if(n)return t.flags&256?(t.flags&=-257,i=Sa(Error(l(422))),Lo(e,t,d,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=i.fallback,s=t.mode,i=Ko({mode:"visible",children:i.children},s,0,null),u=lr(u,s,d,null),u.flags|=2,i.return=t,u.return=t,i.sibling=u,t.child=i,(t.mode&1)!==0&&br(t,e.child,null,d),t.child.memoizedState=Ta(d),t.memoizedState=Ia,u);if((t.mode&1)===0)return Lo(e,t,d,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var g=i.dgst;return i=g,u=Error(l(419)),i=Sa(u,i,void 0),Lo(e,t,d,i)}if(g=(d&e.childLanes)!==0,gt||g){if(i=Je,i!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(i.suspendedLanes|d))!==0?0:s,s!==0&&s!==u.retryLane&&(u.retryLane=s,un(e,s),Wt(i,e,s,-1))}return Va(),i=Sa(Error(l(421))),Lo(e,t,d,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Jf.bind(null,e),s._reactRetry=t,null):(e=u.treeContext,Et=Nn(s.nextSibling),bt=t,Ee=!0,Bt=null,e!==null&&(Rt[Nt++]=an,Rt[Nt++]=ln,Rt[Nt++]=Zn,an=e.id,ln=e.overflow,Zn=t),t=Fa(t,i.children),t.flags|=4096,t)}function Ec(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),sa(e.return,t,n)}function _a(e,t,n,i,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=n,u.tailMode=s)}function Ic(e,t,n){var i=t.pendingProps,s=i.revealOrder,u=i.tail;if(pt(e,t,i.children,n),i=Fe.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(ke(Fe,i),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Fo(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),_a(t,!1,s,n,u);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Fo(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}_a(t,!0,n,null,u);break;case"together":_a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Do(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bf(e,t,n){switch(t.tag){case 3:Sc(t),Cr();break;case 5:$u(t);break;case 1:ht(t.type)&&vo(t);break;case 4:ua(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;ke(bo,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(ke(Fe,Fe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?bc(e,t,n):(ke(Fe,Fe.current&1),e=dn(e,t,n),e!==null?e.sibling:null);ke(Fe,Fe.current&1);break;case 19:if(i=(n&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Ic(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(Fe,Fe.current),i)break;return null;case 22:case 23:return t.lanes=0,wc(e,t,n)}return dn(e,t,n)}var Tc,Ra,Fc,_c;Tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ra=function(){},Fc=function(e,t,n,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,nr(Kt.current);var u=null;switch(n){case"input":s=qt(e,s),i=qt(e,i),u=[];break;case"select":s=B({},s,{value:void 0}),i=B({},i,{value:void 0}),u=[];break;case"textarea":s=et(e,s),i=et(e,i),u=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=go)}dr(n,i);var d;n=null;for(T in s)if(!i.hasOwnProperty(T)&&s.hasOwnProperty(T)&&s[T]!=null)if(T==="style"){var g=s[T];for(d in g)g.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(p.hasOwnProperty(T)?u||(u=[]):(u=u||[]).push(T,null));for(T in i){var y=i[T];if(g=s!=null?s[T]:void 0,i.hasOwnProperty(T)&&y!==g&&(y!=null||g!=null))if(T==="style")if(g){for(d in g)!g.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in y)y.hasOwnProperty(d)&&g[d]!==y[d]&&(n||(n={}),n[d]=y[d])}else n||(u||(u=[]),u.push(T,n)),n=y;else T==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,g=g?g.__html:void 0,y!=null&&g!==y&&(u=u||[]).push(T,y)):T==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push(T,""+y):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(p.hasOwnProperty(T)?(y!=null&&T==="onScroll"&&Se("scroll",e),u||g===y||(u=[])):(u=u||[]).push(T,y))}n&&(u=u||[]).push("style",n);var T=u;(t.updateQueue=T)&&(t.flags|=4)}},_c=function(e,t,n,i){n!==i&&(t.flags|=4)};function xi(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function $f(e,t,n){var i=t.pendingProps;switch(Zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return ht(t.type)&&yo(),ct(t),null;case 3:return i=t.stateNode,Tr(),Ce(mt),Ce(lt),pa(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(So(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bt!==null&&(Ua(Bt),Bt=null))),Ra(e,t),ct(t),null;case 5:ca(t);var s=nr(pi.current);if(n=t.type,e!==null&&t.stateNode!=null)Fc(e,t,n,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(l(166));return ct(t),null}if(e=nr(Kt.current),So(t)){i=t.stateNode,n=t.type;var u=t.memoizedProps;switch(i[Qt]=t,i[ai]=u,e=(t.mode&1)!==0,n){case"dialog":Se("cancel",i),Se("close",i);break;case"iframe":case"object":case"embed":Se("load",i);break;case"video":case"audio":for(s=0;s<ii.length;s++)Se(ii[s],i);break;case"source":Se("error",i);break;case"img":case"image":case"link":Se("error",i),Se("load",i);break;case"details":Se("toggle",i);break;case"input":Wi(i,u),Se("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},Se("invalid",i);break;case"textarea":nn(i,u),Se("invalid",i)}dr(n,u),s=null;for(var d in u)if(u.hasOwnProperty(d)){var g=u[d];d==="children"?typeof g=="string"?i.textContent!==g&&(u.suppressHydrationWarning!==!0&&ho(i.textContent,g,e),s=["children",g]):typeof g=="number"&&i.textContent!==""+g&&(u.suppressHydrationWarning!==!0&&ho(i.textContent,g,e),s=["children",""+g]):p.hasOwnProperty(d)&&g!=null&&d==="onScroll"&&Se("scroll",i)}switch(n){case"input":en(i),Mr(i,u,!0);break;case"textarea":en(i),qi(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=go)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(n,{is:i.is}):(e=d.createElement(n),n==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,n),e[Qt]=t,e[ai]=i,Tc(e,t,!1,!1),t.stateNode=e;e:{switch(d=Br(n,i),n){case"dialog":Se("cancel",e),Se("close",e),s=i;break;case"iframe":case"object":case"embed":Se("load",e),s=i;break;case"video":case"audio":for(s=0;s<ii.length;s++)Se(ii[s],e);s=i;break;case"source":Se("error",e),s=i;break;case"img":case"image":case"link":Se("error",e),Se("load",e),s=i;break;case"details":Se("toggle",e),s=i;break;case"input":Wi(e,i),s=qt(e,i),Se("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=B({},i,{value:void 0}),Se("invalid",e);break;case"textarea":nn(e,i),s=et(e,i),Se("invalid",e);break;default:s=i}dr(n,s),g=s;for(u in g)if(g.hasOwnProperty(u)){var y=g[u];u==="style"?Qi(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&cr(e,y)):u==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&Tt(e,y):typeof y=="number"&&Tt(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(p.hasOwnProperty(u)?y!=null&&u==="onScroll"&&Se("scroll",e):y!=null&&te(e,u,y,d))}switch(n){case"input":en(e),Mr(e,i,!1);break;case"textarea":en(e),qi(e);break;case"option":i.value!=null&&e.setAttribute("value",""+le(i.value));break;case"select":e.multiple=!!i.multiple,u=i.value,u!=null?vn(e,!!i.multiple,u,!1):i.defaultValue!=null&&vn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)_c(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(n=nr(pi.current),nr(Kt.current),So(t)){if(i=t.stateNode,n=t.memoizedProps,i[Qt]=t,(u=i.nodeValue!==n)&&(e=bt,e!==null))switch(e.tag){case 3:ho(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qt]=t,t.stateNode=i}return ct(t),null;case 13:if(Ce(Fe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&Et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zu(),Cr(),t.flags|=98560,u=!1;else if(u=So(t),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[Qt]=t}else Cr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ct(t),u=!1}else Bt!==null&&(Ua(Bt),Bt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Fe.current&1)!==0?Qe===0&&(Qe=3):Va())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return Tr(),Ra(e,t),e===null&&oi(t.stateNode.containerInfo),ct(t),null;case 10:return oa(t.type._context),ct(t),null;case 17:return ht(t.type)&&yo(),ct(t),null;case 19:if(Ce(Fe),u=t.memoizedState,u===null)return ct(t),null;if(i=(t.flags&128)!==0,d=u.rendering,d===null)if(i)xi(u,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Fo(e),d!==null){for(t.flags|=128,xi(u,!1),i=d.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)u=n,e=i,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Fe,Fe.current&1|2),t.child}e=e.sibling}u.tail!==null&&Me()>Nr&&(t.flags|=128,i=!0,xi(u,!1),t.lanes=4194304)}else{if(!i)if(e=Fo(d),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xi(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ee)return ct(t),null}else 2*Me()-u.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,i=!0,xi(u,!1),t.lanes=4194304);u.isBackwards?(d.sibling=t.child,t.child=d):(n=u.last,n!==null?n.sibling=d:t.child=d,u.last=d)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Me(),t.sibling=null,n=Fe.current,ke(Fe,i?n&1|2:n&1),t):(ct(t),null);case 22:case 23:return Wa(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(It&1073741824)!==0&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Uf(e,t){switch(Zs(t),t.tag){case 1:return ht(t.type)&&yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),Ce(mt),Ce(lt),pa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ca(t),null;case 13:if(Ce(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Fe),null;case 4:return Tr(),null;case 10:return oa(t.type._context),null;case 22:case 23:return Wa(),null;case 24:return null;default:return null}}var Mo=!1,dt=!1,Hf=typeof WeakSet=="function"?WeakSet:Set,W=null;function _r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pe(e,t,i)}else n.current=null}function Na(e,t,n){try{n()}catch(i){Pe(e,t,i)}}var Rc=!1;function Wf(e,t){if(Ws=ro,e=uu(),Ls(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,g=-1,y=-1,T=0,z=0,P=e,N=null;t:for(;;){for(var $;P!==n||s!==0&&P.nodeType!==3||(g=d+s),P!==u||i!==0&&P.nodeType!==3||(y=d+i),P.nodeType===3&&(d+=P.nodeValue.length),($=P.firstChild)!==null;)N=P,P=$;for(;;){if(P===e)break t;if(N===n&&++T===s&&(g=d),N===u&&++z===i&&(y=d),($=P.nextSibling)!==null)break;P=N,N=P.parentNode}P=$}n=g===-1||y===-1?null:{start:g,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vs={focusedElem:e,selectionRange:n},ro=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var Y=q.memoizedProps,Oe=q.memoizedState,C=t.stateNode,w=C.getSnapshotBeforeUpdate(t.elementType===t.type?Y:$t(t.type,Y),Oe);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(L){Pe(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return q=Rc,Rc=!1,q}function yi(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var u=s.destroy;s.destroy=void 0,u!==void 0&&Na(t,n,u)}s=s.next}while(s!==i)}}function Oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function za(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nc(e){var t=e.alternate;t!==null&&(e.alternate=null,Nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qt],delete t[ai],delete t[Ks],delete t[Ef],delete t[If])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zc(e){return e.tag===5||e.tag===3||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Aa(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(i!==4&&(e=e.child,e!==null))for(Aa(e,t,n),e=e.sibling;e!==null;)Aa(e,t,n),e=e.sibling}function Pa(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}var nt=null,Ut=!1;function Mn(e,t,n){for(n=n.child;n!==null;)Pc(e,t,n),n=n.sibling}function Pc(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Gi,n)}catch{}switch(n.tag){case 5:dt||_r(n,t);case 6:var i=nt,s=Ut;nt=null,Mn(e,t,n),nt=i,Ut=s,nt!==null&&(Ut?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(Ut?(e=nt,n=n.stateNode,e.nodeType===8?Qs(e.parentNode,n):e.nodeType===1&&Qs(e,n),Xr(e)):Qs(nt,n.stateNode));break;case 4:i=nt,s=Ut,nt=n.stateNode.containerInfo,Ut=!0,Mn(e,t,n),nt=i,Ut=s;break;case 0:case 11:case 14:case 15:if(!dt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var u=s,d=u.destroy;u=u.tag,d!==void 0&&((u&2)!==0||(u&4)!==0)&&Na(n,t,d),s=s.next}while(s!==i)}Mn(e,t,n);break;case 1:if(!dt&&(_r(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(g){Pe(n,t,g)}Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:n.mode&1?(dt=(i=dt)||n.memoizedState!==null,Mn(e,t,n),dt=i):Mn(e,t,n);break;default:Mn(e,t,n)}}function Lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hf),t.forEach(function(i){var s=Zf.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}}function Ht(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var u=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 5:nt=g.stateNode,Ut=!1;break e;case 3:nt=g.stateNode.containerInfo,Ut=!0;break e;case 4:nt=g.stateNode.containerInfo,Ut=!0;break e}g=g.return}if(nt===null)throw Error(l(160));Pc(u,d,s),nt=null,Ut=!1;var y=s.alternate;y!==null&&(y.return=null),s.return=null}catch(T){Pe(s,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dc(t,e),t=t.sibling}function Dc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),Gt(e),i&4){try{yi(3,e,e.return),Oo(3,e)}catch(Y){Pe(e,e.return,Y)}try{yi(5,e,e.return)}catch(Y){Pe(e,e.return,Y)}}break;case 1:Ht(t,e),Gt(e),i&512&&n!==null&&_r(n,n.return);break;case 5:if(Ht(t,e),Gt(e),i&512&&n!==null&&_r(n,n.return),e.flags&32){var s=e.stateNode;try{Tt(s,"")}catch(Y){Pe(e,e.return,Y)}}if(i&4&&(s=e.stateNode,s!=null)){var u=e.memoizedProps,d=n!==null?n.memoizedProps:u,g=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{g==="input"&&u.type==="radio"&&u.name!=null&&Dr(s,u),Br(g,d);var T=Br(g,u);for(d=0;d<y.length;d+=2){var z=y[d],P=y[d+1];z==="style"?Qi(s,P):z==="dangerouslySetInnerHTML"?cr(s,P):z==="children"?Tt(s,P):te(s,z,P,T)}switch(g){case"input":tn(s,u);break;case"textarea":Vi(s,u);break;case"select":var N=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!u.multiple;var $=u.value;$!=null?vn(s,!!u.multiple,$,!1):N!==!!u.multiple&&(u.defaultValue!=null?vn(s,!!u.multiple,u.defaultValue,!0):vn(s,!!u.multiple,u.multiple?[]:"",!1))}s[ai]=u}catch(Y){Pe(e,e.return,Y)}}break;case 6:if(Ht(t,e),Gt(e),i&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,u=e.memoizedProps;try{s.nodeValue=u}catch(Y){Pe(e,e.return,Y)}}break;case 3:if(Ht(t,e),Gt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(Y){Pe(e,e.return,Y)}break;case 4:Ht(t,e),Gt(e);break;case 13:Ht(t,e),Gt(e),s=e.child,s.flags&8192&&(u=s.memoizedState!==null,s.stateNode.isHidden=u,!u||s.alternate!==null&&s.alternate.memoizedState!==null||(Ma=Me())),i&4&&Lc(e);break;case 22:if(z=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(T=dt)||z,Ht(t,e),dt=T):Ht(t,e),Gt(e),i&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!z&&(e.mode&1)!==0)for(W=e,z=e.child;z!==null;){for(P=W=z;W!==null;){switch(N=W,$=N.child,N.tag){case 0:case 11:case 14:case 15:yi(4,N,N.return);break;case 1:_r(N,N.return);var q=N.stateNode;if(typeof q.componentWillUnmount=="function"){i=N,n=N.return;try{t=i,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(Y){Pe(i,n,Y)}}break;case 5:_r(N,N.return);break;case 22:if(N.memoizedState!==null){Bc(P);continue}}$!==null?($.return=N,W=$):Bc(P)}z=z.sibling}e:for(z=null,P=e;;){if(P.tag===5){if(z===null){z=P;try{s=P.stateNode,T?(u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(g=P.stateNode,y=P.memoizedProps.style,d=y!=null&&y.hasOwnProperty("display")?y.display:null,g.style.display=Yi("display",d))}catch(Y){Pe(e,e.return,Y)}}}else if(P.tag===6){if(z===null)try{P.stateNode.nodeValue=T?"":P.memoizedProps}catch(Y){Pe(e,e.return,Y)}}else if((P.tag!==22&&P.tag!==23||P.memoizedState===null||P===e)&&P.child!==null){P.child.return=P,P=P.child;continue}if(P===e)break e;for(;P.sibling===null;){if(P.return===null||P.return===e)break e;z===P&&(z=null),P=P.return}z===P&&(z=null),P.sibling.return=P.return,P=P.sibling}}break;case 19:Ht(t,e),Gt(e),i&4&&Lc(e);break;case 21:break;default:Ht(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zc(n)){var i=n;break e}n=n.return}throw Error(l(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Tt(s,""),i.flags&=-33);var u=Ac(e);Pa(e,u,s);break;case 3:case 4:var d=i.stateNode.containerInfo,g=Ac(e);Aa(e,g,d);break;default:throw Error(l(161))}}catch(y){Pe(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vf(e,t,n){W=e,Mc(e)}function Mc(e,t,n){for(var i=(e.mode&1)!==0;W!==null;){var s=W,u=s.child;if(s.tag===22&&i){var d=s.memoizedState!==null||Mo;if(!d){var g=s.alternate,y=g!==null&&g.memoizedState!==null||dt;g=Mo;var T=dt;if(Mo=d,(dt=y)&&!T)for(W=s;W!==null;)d=W,y=d.child,d.tag===22&&d.memoizedState!==null?$c(s):y!==null?(y.return=d,W=y):$c(s);for(;u!==null;)W=u,Mc(u),u=u.sibling;W=s,Mo=g,dt=T}Oc(e)}else(s.subtreeFlags&8772)!==0&&u!==null?(u.return=s,W=u):Oc(e)}}function Oc(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:dt||Oo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!dt)if(n===null)i.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Bu(t,u,i);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bu(t,d,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var z=T.memoizedState;if(z!==null){var P=z.dehydrated;P!==null&&Xr(P)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}dt||t.flags&512&&za(t)}catch(N){Pe(t,t.return,N)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Bc(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function $c(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oo(4,t)}catch(y){Pe(t,n,y)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(y){Pe(t,s,y)}}var u=t.return;try{za(t)}catch(y){Pe(t,u,y)}break;case 5:var d=t.return;try{za(t)}catch(y){Pe(t,d,y)}}}catch(y){Pe(t,t.return,y)}if(t===e){W=null;break}var g=t.sibling;if(g!==null){g.return=t.return,W=g;break}W=t.return}}var qf=Math.ceil,Bo=re.ReactCurrentDispatcher,La=re.ReactCurrentOwner,Pt=re.ReactCurrentBatchConfig,fe=0,Je=null,Ue=null,rt=0,It=0,Rr=zn(0),Qe=0,vi=null,ir=0,$o=0,Da=0,wi=null,xt=null,Ma=0,Nr=1/0,pn=null,Uo=!1,Oa=null,On=null,Ho=!1,Bn=null,Wo=0,ki=0,Ba=null,Vo=-1,qo=0;function ft(){return(fe&6)!==0?Me():Vo!==-1?Vo:Vo=Me()}function $n(e){return(e.mode&1)===0?1:(fe&2)!==0&&rt!==0?rt&-rt:Ff.transition!==null?(qo===0&&(qo=Al()),qo):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Hl(e.type)),e)}function Wt(e,t,n,i){if(50<ki)throw ki=0,Ba=null,Error(l(185));Vr(e,n,i),((fe&2)===0||e!==Je)&&(e===Je&&((fe&2)===0&&($o|=n),Qe===4&&Un(e,rt)),yt(e,i),n===1&&fe===0&&(t.mode&1)===0&&(Nr=Me()+500,wo&&Pn()))}function yt(e,t){var n=e.callbackNode;Tp(e,t);var i=eo(e,e===Je?rt:0);if(i===0)n!==null&&Rl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Rl(n),t===1)e.tag===0?Tf(Hc.bind(null,e)):Tu(Hc.bind(null,e)),Cf(function(){(fe&6)===0&&Pn()}),n=null;else{switch(Pl(i)){case 1:n=vs;break;case 4:n=Nl;break;case 16:n=Xi;break;case 536870912:n=zl;break;default:n=Xi}n=Gc(n,Uc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uc(e,t){if(Vo=-1,qo=0,(fe&6)!==0)throw Error(l(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var i=eo(e,e===Je?rt:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Yo(e,i);else{t=i;var s=fe;fe|=2;var u=Vc();(Je!==e||rt!==t)&&(pn=null,Nr=Me()+500,sr(e,t));do try{Kf();break}catch(g){Wc(e,g)}while(!0);ia(),Bo.current=u,fe=s,Ue!==null?t=0:(Je=null,rt=0,t=Qe)}if(t!==0){if(t===2&&(s=ws(e),s!==0&&(i=s,t=$a(e,s))),t===1)throw n=vi,sr(e,0),Un(e,i),yt(e,Me()),n;if(t===6)Un(e,i);else{if(s=e.current.alternate,(i&30)===0&&!Yf(s)&&(t=Yo(e,i),t===2&&(u=ws(e),u!==0&&(i=u,t=$a(e,u))),t===1))throw n=vi,sr(e,0),Un(e,i),yt(e,Me()),n;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(l(345));case 2:ar(e,xt,pn);break;case 3:if(Un(e,i),(i&130023424)===i&&(t=Ma+500-Me(),10<t)){if(eo(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){ft(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ys(ar.bind(null,e,xt,pn),t);break}ar(e,xt,pn);break;case 4:if(Un(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var d=31-Mt(i);u=1<<d,d=t[d],d>s&&(s=d),i&=~u}if(i=s,i=Me()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*qf(i/1960))-i,10<i){e.timeoutHandle=Ys(ar.bind(null,e,xt,pn),i);break}ar(e,xt,pn);break;case 5:ar(e,xt,pn);break;default:throw Error(l(329))}}}return yt(e,Me()),e.callbackNode===n?Uc.bind(null,e):null}function $a(e,t){var n=wi;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=xt,xt=n,t!==null&&Ua(t)),e}function Ua(e){xt===null?xt=e:xt.push.apply(xt,e)}function Yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],u=s.getSnapshot;s=s.value;try{if(!Ot(u(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t){for(t&=~Da,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),i=1<<n;e[n]=-1,t&=~i}}function Hc(e){if((fe&6)!==0)throw Error(l(327));zr();var t=eo(e,0);if((t&1)===0)return yt(e,Me()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var i=ws(e);i!==0&&(t=i,n=$a(e,i))}if(n===1)throw n=vi,sr(e,0),Un(e,t),yt(e,Me()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ar(e,xt,pn),yt(e,Me()),null}function Ha(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(Nr=Me()+500,wo&&Pn())}}function or(e){Bn!==null&&Bn.tag===0&&(fe&6)===0&&zr();var t=fe;fe|=1;var n=Pt.transition,i=ge;try{if(Pt.transition=null,ge=1,e)return e()}finally{ge=i,Pt.transition=n,fe=t,(fe&6)===0&&Pn()}}function Wa(){It=Rr.current,Ce(Rr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sf(n)),Ue!==null)for(n=Ue.return;n!==null;){var i=n;switch(Zs(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yo();break;case 3:Tr(),Ce(mt),Ce(lt),pa();break;case 5:ca(i);break;case 4:Tr();break;case 13:Ce(Fe);break;case 19:Ce(Fe);break;case 10:oa(i.type._context);break;case 22:case 23:Wa()}n=n.return}if(Je=e,Ue=e=Hn(e.current,null),rt=It=t,Qe=0,vi=null,Da=$o=ir=0,xt=wi=null,tr!==null){for(t=0;t<tr.length;t++)if(n=tr[t],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,u=n.pending;if(u!==null){var d=u.next;u.next=s,i.next=d}n.pending=i}tr=null}return e}function Wc(e,t){do{var n=Ue;try{if(ia(),_o.current=Ao,Ro){for(var i=_e.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Ro=!1}if(rr=0,Ge=Ye=_e=null,fi=!1,mi=0,La.current=null,n===null||n.return===null){Qe=1,vi=t,Ue=null;break}e:{var u=e,d=n.return,g=n,y=t;if(t=rt,g.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var T=y,z=g,P=z.tag;if((z.mode&1)===0&&(P===0||P===11||P===15)){var N=z.alternate;N?(z.updateQueue=N.updateQueue,z.memoizedState=N.memoizedState,z.lanes=N.lanes):(z.updateQueue=null,z.memoizedState=null)}var $=hc(d);if($!==null){$.flags&=-257,gc($,d,g,u,t),$.mode&1&&mc(u,T,t),t=$,y=T;var q=t.updateQueue;if(q===null){var Y=new Set;Y.add(y),t.updateQueue=Y}else q.add(y);break e}else{if((t&1)===0){mc(u,T,t),Va();break e}y=Error(l(426))}}else if(Ee&&g.mode&1){var Oe=hc(d);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),gc(Oe,d,g,u,t),na(Fr(y,g));break e}}u=y=Fr(y,g),Qe!==4&&(Qe=2),wi===null?wi=[u]:wi.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var C=pc(u,y,t);Ou(u,C);break e;case 1:g=y;var w=u.type,E=u.stateNode;if((u.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(On===null||!On.has(E)))){u.flags|=65536,t&=-t,u.lanes|=t;var L=fc(u,g,t);Ou(u,L);break e}}u=u.return}while(u!==null)}Yc(n)}catch(Q){t=Q,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function Vc(){var e=Bo.current;return Bo.current=Ao,e===null?Ao:e}function Va(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),Je===null||(ir&268435455)===0&&($o&268435455)===0||Un(Je,rt)}function Yo(e,t){var n=fe;fe|=2;var i=Vc();(Je!==e||rt!==t)&&(pn=null,sr(e,t));do try{Qf();break}catch(s){Wc(e,s)}while(!0);if(ia(),fe=n,Bo.current=i,Ue!==null)throw Error(l(261));return Je=null,rt=0,Qe}function Qf(){for(;Ue!==null;)qc(Ue)}function Kf(){for(;Ue!==null&&!vp();)qc(Ue)}function qc(e){var t=Xc(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?Yc(e):Ue=t,La.current=null}function Yc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=$f(n,t,It),n!==null){Ue=n;return}}else{if(n=Uf(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,Ue=null;return}}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Qe===0&&(Qe=5)}function ar(e,t,n){var i=ge,s=Pt.transition;try{Pt.transition=null,ge=1,Xf(e,t,n,i)}finally{Pt.transition=s,ge=i}return null}function Xf(e,t,n,i){do zr();while(Bn!==null);if((fe&6)!==0)throw Error(l(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(Fp(e,u),e===Je&&(Ue=Je=null,rt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ho||(Ho=!0,Gc(Xi,function(){return zr(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=Pt.transition,Pt.transition=null;var d=ge;ge=1;var g=fe;fe|=4,La.current=null,Wf(e,n),Dc(n,e),gf(Vs),ro=!!Ws,Vs=Ws=null,e.current=n,Vf(n),wp(),fe=g,ge=d,Pt.transition=u}else e.current=n;if(Ho&&(Ho=!1,Bn=e,Wo=s),u=e.pendingLanes,u===0&&(On=null),Sp(n.stateNode),yt(e,Me()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Uo)throw Uo=!1,e=Oa,Oa=null,e;return(Wo&1)!==0&&e.tag!==0&&zr(),u=e.pendingLanes,(u&1)!==0?e===Ba?ki++:(ki=0,Ba=e):ki=0,Pn(),null}function zr(){if(Bn!==null){var e=Pl(Wo),t=Pt.transition,n=ge;try{if(Pt.transition=null,ge=16>e?16:e,Bn===null)var i=!1;else{if(e=Bn,Bn=null,Wo=0,(fe&6)!==0)throw Error(l(331));var s=fe;for(fe|=4,W=e.current;W!==null;){var u=W,d=u.child;if((W.flags&16)!==0){var g=u.deletions;if(g!==null){for(var y=0;y<g.length;y++){var T=g[y];for(W=T;W!==null;){var z=W;switch(z.tag){case 0:case 11:case 15:yi(8,z,u)}var P=z.child;if(P!==null)P.return=z,W=P;else for(;W!==null;){z=W;var N=z.sibling,$=z.return;if(Nc(z),z===T){W=null;break}if(N!==null){N.return=$,W=N;break}W=$}}}var q=u.alternate;if(q!==null){var Y=q.child;if(Y!==null){q.child=null;do{var Oe=Y.sibling;Y.sibling=null,Y=Oe}while(Y!==null)}}W=u}}if((u.subtreeFlags&2064)!==0&&d!==null)d.return=u,W=d;else e:for(;W!==null;){if(u=W,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:yi(9,u,u.return)}var C=u.sibling;if(C!==null){C.return=u.return,W=C;break e}W=u.return}}var w=e.current;for(W=w;W!==null;){d=W;var E=d.child;if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,W=E;else e:for(d=w;W!==null;){if(g=W,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:Oo(9,g)}}catch(Q){Pe(g,g.return,Q)}if(g===d){W=null;break e}var L=g.sibling;if(L!==null){L.return=g.return,W=L;break e}W=g.return}}if(fe=s,Pn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Gi,e)}catch{}i=!0}return i}finally{ge=n,Pt.transition=t}}return!1}function Qc(e,t,n){t=Fr(n,t),t=pc(e,t,1),e=Dn(e,t,1),t=ft(),e!==null&&(Vr(e,1,t),yt(e,t))}function Pe(e,t,n){if(e.tag===3)Qc(e,e,n);else for(;t!==null;){if(t.tag===3){Qc(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(On===null||!On.has(i))){e=Fr(n,e),e=fc(t,e,1),t=Dn(t,e,1),e=ft(),t!==null&&(Vr(t,1,e),yt(t,e));break}}t=t.return}}function Gf(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(rt&n)===n&&(Qe===4||Qe===3&&(rt&130023424)===rt&&500>Me()-Ma?sr(e,0):Da|=n),yt(e,t)}function Kc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Zi,Zi<<=1,(Zi&130023424)===0&&(Zi=4194304)));var n=ft();e=un(e,t),e!==null&&(Vr(e,t,n),yt(e,n))}function Jf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kc(e,n)}function Zf(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(l(314))}i!==null&&i.delete(t),Kc(e,n)}var Xc;Xc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)gt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return gt=!1,Bf(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,Ee&&(t.flags&1048576)!==0&&Fu(t,jo,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Do(e,t),e=t.pendingProps;var s=kr(t,lt.current);Ir(t,n),s=ha(null,t,i,e,s,n);var u=ga();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(i)?(u=!0,vo(t)):u=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,la(t),s.updater=Po,t.stateNode=s,s._reactInternals=t,ja(t,i,e,n),t=Ea(null,t,i,!0,u,n)):(t.tag=0,Ee&&u&&Js(t),pt(null,t,s,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Do(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=tm(i),e=$t(i,e),s){case 0:t=ba(null,t,i,e,n);break e;case 1:t=jc(null,t,i,e,n);break e;case 11:t=xc(null,t,i,e,n);break e;case 14:t=yc(null,t,i,$t(i.type,e),n);break e}throw Error(l(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:$t(i,s),ba(e,t,i,s,n);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:$t(i,s),jc(e,t,i,s,n);case 3:e:{if(Sc(t),e===null)throw Error(l(387));i=t.pendingProps,u=t.memoizedState,s=u.element,Mu(e,t),To(t,i,null,n);var d=t.memoizedState;if(i=d.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){s=Fr(Error(l(423)),t),t=Cc(e,t,i,n,s);break e}else if(i!==s){s=Fr(Error(l(424)),t),t=Cc(e,t,i,n,s);break e}else for(Et=Nn(t.stateNode.containerInfo.firstChild),bt=t,Ee=!0,Bt=null,n=Lu(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),i===s){t=dn(e,t,n);break e}pt(e,t,i,n)}t=t.child}return t;case 5:return $u(t),e===null&&ta(t),i=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,d=s.children,qs(i,s)?d=null:u!==null&&qs(i,u)&&(t.flags|=32),kc(e,t),pt(e,t,d,n),t.child;case 6:return e===null&&ta(t),null;case 13:return bc(e,t,n);case 4:return ua(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=br(t,null,i,n):pt(e,t,i,n),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:$t(i,s),xc(e,t,i,s,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,u=t.memoizedProps,d=s.value,ke(bo,i._currentValue),i._currentValue=d,u!==null)if(Ot(u.value,d)){if(u.children===s.children&&!mt.current){t=dn(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var g=u.dependencies;if(g!==null){d=u.child;for(var y=g.firstContext;y!==null;){if(y.context===i){if(u.tag===1){y=cn(-1,n&-n),y.tag=2;var T=u.updateQueue;if(T!==null){T=T.shared;var z=T.pending;z===null?y.next=y:(y.next=z.next,z.next=y),T.pending=y}}u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),sa(u.return,n,t),g.lanes|=n;break}y=y.next}}else if(u.tag===10)d=u.type===t.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(l(341));d.lanes|=n,g=d.alternate,g!==null&&(g.lanes|=n),sa(d,n,t),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===t){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}pt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,Ir(t,n),s=zt(s),i=i(s),t.flags|=1,pt(e,t,i,n),t.child;case 14:return i=t.type,s=$t(i,t.pendingProps),s=$t(i.type,s),yc(e,t,i,s,n);case 15:return vc(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:$t(i,s),Do(e,t),t.tag=1,ht(i)?(e=!0,vo(t)):e=!1,Ir(t,n),cc(t,i,s),ja(t,i,s,n),Ea(null,t,i,!0,e,n);case 19:return Ic(e,t,n);case 22:return wc(e,t,n)}throw Error(l(156,t.tag))};function Gc(e,t){return _l(e,t)}function em(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,n,i){return new em(e,t,n,i)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tm(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ne)return 11;if(e===be)return 14}return 2}function Hn(e,t){var n=e.alternate;return n===null?(n=Lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qo(e,t,n,i,s,u){var d=2;if(i=e,typeof e=="function")qa(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ve:return lr(n.children,s,u,t);case Te:d=8,s|=8;break;case Le:return e=Lt(12,n,t,s|2),e.elementType=Le,e.lanes=u,e;case ze:return e=Lt(13,n,t,s),e.elementType=ze,e.lanes=u,e;case Ke:return e=Lt(19,n,t,s),e.elementType=Ke,e.lanes=u,e;case ce:return Ko(n,s,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Be:d=10;break e;case we:d=9;break e;case Ne:d=11;break e;case be:d=14;break e;case ne:d=16,i=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Lt(d,n,t,s),t.elementType=e,t.type=i,t.lanes=u,t}function lr(e,t,n,i){return e=Lt(7,e,i,t),e.lanes=n,e}function Ko(e,t,n,i){return e=Lt(22,e,i,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function Ya(e,t,n){return e=Lt(6,e,null,t),e.lanes=n,e}function Qa(e,t,n){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nm(e,t,n,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ks(0),this.expirationTimes=ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ka(e,t,n,i,s,u,d,g,y){return e=new nm(e,t,n,g,y),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Lt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},la(u),e}function rm(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Jc(e){if(!e)return An;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(ht(n))return Eu(e,n,t)}return t}function Zc(e,t,n,i,s,u,d,g,y){return e=Ka(n,i,!0,e,s,u,d,g,y),e.context=Jc(null),n=e.current,i=ft(),s=$n(n),u=cn(i,s),u.callback=t??null,Dn(n,u,s),e.current.lanes=s,Vr(e,s,i),yt(e,i),e}function Xo(e,t,n,i){var s=t.current,u=ft(),d=$n(s);return n=Jc(n),t.context===null?t.context=n:t.pendingContext=n,t=cn(u,d),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Dn(s,t,d),e!==null&&(Wt(e,s,d,u),Io(e,s,d)),d}function Go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ed(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xa(e,t){ed(e,t),(e=e.alternate)&&ed(e,t)}function im(){return null}var td=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ga(e){this._internalRoot=e}Jo.prototype.render=Ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Xo(e,t,null,null)},Jo.prototype.unmount=Ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){Xo(null,e,null,null)}),t[on]=null}};function Jo(e){this._internalRoot=e}Jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ml();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&$l(e)}};function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function om(e,t,n,i,s){if(s){if(typeof i=="function"){var u=i;i=function(){var T=Go(d);u.call(T)}}var d=Zc(t,i,e,0,null,!1,!1,"",nd);return e._reactRootContainer=d,e[on]=d.current,oi(e.nodeType===8?e.parentNode:e),or(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var g=i;i=function(){var T=Go(y);g.call(T)}}var y=Ka(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=y,e[on]=y.current,oi(e.nodeType===8?e.parentNode:e),or(function(){Xo(t,y,n,i)}),y}function es(e,t,n,i,s){var u=n._reactRootContainer;if(u){var d=u;if(typeof s=="function"){var g=s;s=function(){var y=Go(d);g.call(y)}}Xo(t,d,e,s)}else d=om(n,t,e,s,i);return Go(d)}Ll=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&(js(t,n|1),yt(t,Me()),(fe&6)===0&&(Nr=Me()+500,Pn()))}break;case 13:or(function(){var i=un(e,1);if(i!==null){var s=ft();Wt(i,e,1,s)}}),Xa(e,1)}},Ss=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=ft();Wt(t,e,134217728,n)}Xa(e,134217728)}},Dl=function(e){if(e.tag===13){var t=$n(e),n=un(e,t);if(n!==null){var i=ft();Wt(n,e,t,i)}Xa(e,t)}},Ml=function(){return ge},Ol=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},$r=function(e,t,n){switch(t){case"input":if(tn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=xo(i);if(!s)throw Error(l(90));yn(i),tn(i,s)}}}break;case"textarea":Vi(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}},qe=Ha,at=or;var sm={usingClientEntryPoint:!1,Events:[li,vr,xo,se,De,Ha]},ji={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},am={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tl(e),e===null?null:e.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Gi=ts.inject(am),Yt=ts}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sm,vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ja(t))throw Error(l(200));return rm(e,t,null,n)},vt.createRoot=function(e,t){if(!Ja(e))throw Error(l(299));var n=!1,i="",s=td;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ka(e,1,!1,null,null,n,!1,i,s),e[on]=t.current,oi(e.nodeType===8?e.parentNode:e),new Ga(t)},vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Tl(t),e=e===null?null:e.stateNode,e},vt.flushSync=function(e){return or(e)},vt.hydrate=function(e,t,n){if(!Zo(t))throw Error(l(200));return es(null,e,t,!0,n)},vt.hydrateRoot=function(e,t,n){if(!Ja(e))throw Error(l(405));var i=n!=null&&n.hydratedSources||null,s=!1,u="",d=td;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Zc(t,null,e,1,n??null,s,!1,u,d),e[on]=t.current,oi(e),i)for(e=0;e<i.length;e++)n=i[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Jo(t)},vt.render=function(e,t,n){if(!Zo(t))throw Error(l(200));return es(null,e,t,!1,n)},vt.unmountComponentAtNode=function(e){if(!Zo(e))throw Error(l(40));return e._reactRootContainer?(or(function(){es(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1},vt.unstable_batchedUpdates=Ha,vt.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Zo(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return es(e,t,n,!1,i)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var cd;function Rd(){if(cd)return tl.exports;cd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),tl.exports=mm(),tl.exports}var dd;function hm(){if(dd)return ns;dd=1;var o=Rd();return ns.createRoot=o.createRoot,ns.hydrateRoot=o.hydrateRoot,ns}var gm=hm();function st({label:o,variant:a="neutral",size:l="md"}){const c=l==="sm"?{height:"24px",paddingLeft:"10px",paddingRight:"10px",fontSize:"12px",lineHeight:"18px",fontWeight:"500"}:{height:"28px",paddingLeft:"12px",paddingRight:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600"},p=a==="neutral"?{backgroundColor:"var(--card)",dotColor:"var(--muted-foreground)",textColor:"var(--foreground)"}:{backgroundColor:"var(--accent)",dotColor:"var(--primary)",textColor:"var(--accent-foreground)"};return r.jsxs("div",{style:{height:c.height,paddingLeft:c.paddingLeft,paddingRight:c.paddingRight,borderRadius:"999px",gap:"8px",backgroundColor:p.backgroundColor,border:"1px solid var(--border)",display:"inline-flex",alignItems:"center"},children:[r.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:p.dotColor}}),r.jsx("span",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:c.fontSize,lineHeight:c.lineHeight,fontWeight:c.fontWeight,color:p.textColor},children:o})]})}function We({label:o,variant:a="primary",size:l="md",onClick:c,disabled:p=!1,fullWidth:f=!1}){const m={sm:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}}[l],x={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"var(--card)",color:"var(--foreground)",border:"1px solid var(--border)"},ghost:{backgroundColor:"transparent",color:"var(--foreground)",border:"none"}}[a];return r.jsx("button",{onClick:c,disabled:p,style:{height:m.height,paddingLeft:m.paddingLeft,paddingRight:m.paddingRight,borderRadius:m.borderRadius,backgroundColor:p?"var(--muted)":x.backgroundColor,color:x.color,fontSize:m.fontSize,lineHeight:m.lineHeight,fontWeight:"600",border:p?"1px solid var(--border)":x.border,display:"inline-flex",alignItems:"center",justifyContent:"center",width:f?"100%":"auto",cursor:p?"not-allowed":"pointer",fontFamily:"Inter, system-ui, sans-serif",opacity:p?.65:1},children:o})}const xm="/assets/Big%20Logo-Bdh1LtUa.svg",ym="/assets/Logo%20Dark-BJGV7fxC.svg",vm="2026-03-10-1";function Nd({size:o=32,variant:a="dark",showText:l=!0,href:c="/"}){const p=a==="light"?ym:xm,f=a==="dark"?"#101828":"#FFFFFF",m=r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[r.jsx("div",{style:{width:`${o}px`,height:`${o}px`,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:`${p}?v=${vm}`,alt:"Vibe Station Logo",width:o,height:o,style:{width:`${o}px`,height:`${o}px`,objectFit:"contain",display:"block"}})}),l&&r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:o>=48?"24px":o>=32?"20px":"16px",lineHeight:o>=48?"32px":o>=32?"28px":"24px",fontWeight:"600",letterSpacing:"-0.02em",color:f},children:"VIBE STATION"})]});return c?r.jsx("a",{href:c,style:{textDecoration:"none",display:"inline-flex",cursor:"pointer"},children:m}):m}const wm="w-full mx-auto px-4 md:px-6 lg:px-8",km={wide:"max-w-[1200px]",standard:"max-w-[1080px]",narrow:"max-w-[860px]"};function jm(o,a){return[wm,km[o],a].filter(Boolean).join(" ")}function ms({children:o,width:a="wide",className:l}){return r.jsx("div",{className:jm(a,l),children:o})}function Sm({children:o,className:a}){return r.jsx(ms,{width:"wide",className:a,children:o})}function Cm({children:o,className:a}){return r.jsx(ms,{width:"standard",className:a,children:o})}function bm({children:o,className:a}){return r.jsx(ms,{width:"narrow",className:a,children:o})}const he=Object.assign(ms,{Wide:Sm,Standard:Cm,Narrow:bm}),zd="kz9z4f-2a.myshopify.com",Ad="daf156f4e4046c726902bca5c28e9cbe",Em="2026-01",Pd="http://localhost:3001",Fi="/api/shopify",Im="false".toLowerCase()==="true",Tm="X-Shopify-Storefront-Access-Token",cl="IN".toUpperCase(),Ld="EN".toUpperCase(),Fm=`https://${zd}/api/${Em}/graphql.json`,Dd="shopify_cart_id";class Re extends Error{constructor(a,l,c){super(a),this.code=l,this.field=c,this.name="StorefrontAPIError"}}const Md=()=>Ad.length>0,_m=()=>zd.length>0,Rm=()=>Pd.length>0&&Fi.length>0,Nm=()=>Fi.startsWith("http://")||Fi.startsWith("https://")?Fi:`${Pd.replace(/\/+$/,"")}/${Fi.replace(/^\/+/,"")}`,Od=()=>Im||!Md()&&Rm(),zm=()=>Od()?!0:_m()&&Md();async function Ve(o,a={}){if(!zm())throw new Re("Shopify is not configured","SHOPIFY_NOT_CONFIGURED");let l;if(Od()?l=await fetch(Nm(),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({query:o,variables:a})}):l=await fetch(Fm,{method:"POST",headers:{"Content-Type":"application/json",[Tm]:Ad},body:JSON.stringify({query:o,variables:a})}),!l.ok)throw l.status===429?new Re("Rate limit exceeded","RATE_LIMIT"):new Re(`HTTP ${l.status}`,"HTTP_ERROR");const{data:c,errors:p}=await l.json();if(p&&p.length>0)throw new Re(p[0].message,"GRAPHQL_ERROR",p[0].field);if(!c)throw new Re("Missing response data","EMPTY_DATA");return c}function hs(o){var c,p,f;const a=o.featuredImage;if(a!=null&&a.url)return{url:a.url,altText:a.altText||o.title||"Product image"};const l=(f=(p=(c=o.images)==null?void 0:c.edges)==null?void 0:p[0])==null?void 0:f.node;return l!=null&&l.url?{url:l.url,altText:l.altText||o.title||"Product image"}:null}const Am=`
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
`,Bd=`@inContext(country: ${cl}, language: ${Ld})`,Pm=`
  query ProductList(
    $first: Int = 24
    $after: String
    $sortKey: ProductSortKeys = BEST_SELLING
    $reverse: Boolean = false
    $query: String
  ) ${Bd} {
    products(first: $first, after: $after, sortKey: $sortKey, reverse: $reverse, query: $query) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          ${Am}
        }
      }
    }
  }
`,Lm=`
  query ProductDetail($handle: String!) ${Bd} {
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
`,Pr=`
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
`,Dm=`
  mutation CartCreate($input: CartInput!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ${Pr}
      }
      userErrors {
        field
        message
      }
    }
  }
`,Mm=`
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${Pr}
      }
      userErrors {
        field
        message
      }
    }
  }
`,Om=`
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${Pr}
      }
      userErrors {
        field
        message
      }
    }
  }
`,Bm=`
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ${Pr}
      }
      userErrors {
        field
        message
      }
    }
  }
`,$m=`
  query Cart($id: ID!) {
    cart(id: $id) {
      ${Pr}
    }
  }
`,Um=`
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ${Pr}
      }
      userErrors {
        field
        message
      }
    }
  }
`,gs=(o,a)=>{const l=o[a];if(l.userErrors.length>0){const c=l.userErrors[0];throw new Re(c.message,"CART_USER_ERROR",c.field)}if(!l.cart)throw new Re("Cart was not returned by Shopify","MISSING_CART");return l.cart};async function Hm(o){return(await Ve(Lm,{handle:o})).product}async function Mi(o={}){const a=typeof o=="number"?{first:o}:o;return(await Ve(Pm,{first:a.first??24,after:a.after??null,sortKey:a.sortKey??"BEST_SELLING",reverse:a.reverse??!1,query:a.query})).products}async function Wm(o=[]){const a=await Ve(Dm,{input:{lines:o,buyerIdentity:{countryCode:cl}},country:cl,language:Ld});return gs(a,"cartCreate")}async function Vm(o,a){const l=await Ve(Mm,{cartId:o,lines:a});return gs(l,"cartLinesAdd")}async function qm(o,a){const l=await Ve(Om,{cartId:o,lines:a});return gs(l,"cartLinesUpdate")}async function Ym(o,a){const l=await Ve(Bm,{cartId:o,lineIds:a});return gs(l,"cartLinesRemove")}async function Qm(o){return(await Ve($m,{id:o})).cart}async function Km(o,a){const c=(await Ve(Um,{cartId:o,buyerIdentity:a})).cartBuyerIdentityUpdate;if(c.userErrors.length>0){const p=c.userErrors[0];throw new Re(p.message,"CART_USER_ERROR",p.field)}if(!c.cart)throw new Re("Cart was not returned by Shopify","MISSING_CART");return c.cart}const Xm=()=>typeof window>"u"?null:window.localStorage.getItem(Dd),Gm=o=>{typeof window>"u"||window.localStorage.setItem(Dd,o)},yl="customer_token",vl="token_expires_at",$d=`
  id
  email
  firstName
  lastName
  phone
  defaultAddress {
    id
    address1
    address2
    city
    province
    country
    zip
  }
  addresses(first: 10) {
    edges {
      node {
        id
        address1
        address2
        city
        province
        country
        zip
      }
    }
  }
  orders(first: 10) {
    edges {
      node {
        id
        orderNumber
        totalPriceV2 {
          amount
          currencyCode
        }
        processedAt
        fulfillmentStatus
        lineItems(first: 10) {
          edges {
            node {
              title
              quantity
            }
          }
        }
      }
    }
  }
`,Jm=`
  id
  orderNumber
  totalPriceV2 {
    amount
    currencyCode
  }
  processedAt
  fulfillmentStatus
  lineItems(first: 10) {
    edges {
      node {
        title
        quantity
      }
    }
  }
`,xs=()=>typeof window<"u",Ud=o=>{if(!o)return!0;const a=Date.parse(o);return Number.isNaN(a)?!0:a<=Date.now()},wl=o=>{xs()&&(window.localStorage.setItem(yl,o.accessToken),window.localStorage.setItem(vl,o.expiresAt))},Hd=()=>xs()?window.localStorage.getItem(yl):null,Wd=()=>xs()?window.localStorage.getItem(vl):null,Zm=o=>{var l;const a=(l=o.field)!=null&&l.length?` for ${o.field.join(".")}`:"";switch(o.code){case"TAKEN":return`A customer already exists${a}.`;case"INVALID":return`Shopify rejected the value${a}. ${o.message}`;case"UNIDENTIFIED_CUSTOMER":return"The email or password is incorrect.";case"CUSTOMER_DISABLED":return"This customer account is disabled.";case"BAD_DOMAIN":return`The email address domain is invalid${a}.`;case"TOKEN_INVALID":return"The customer session is invalid. Please sign in again.";default:return o.message}},eh=(o,a,l)=>o instanceof Re?{type:o.code==="HTTP_ERROR"||o.code==="RATE_LIMIT"?"network":"api",message:o.message||l,code:o.code||a,field:o.field}:o instanceof TypeError?{type:"network",message:"Network request failed while contacting Shopify.",code:a}:{type:"unknown",message:l,code:a},cs=o=>({ok:!1,data:null,error:o}),kl=o=>({ok:!0,data:o,error:null}),gn=(o,a)=>{if(o.length===0)return;const l=o[0];throw new Re(Zm(l),a,l.field)},th=()=>{const o=Hd(),a=Wd();return!o||!a?(dl(),cs({type:"session",message:"No active customer session was found.",code:"CUSTOMER_SESSION_MISSING"})):Ud(a)?(dl(),cs({type:"session",message:"The customer session has expired. Please sign in again.",code:"CUSTOMER_SESSION_EXPIRED"})):kl(o)},Dt=async(o,a,l)=>{try{return kl(await o())}catch(c){return cs(eh(c,a,l))}},nh=o=>{try{const a=new URL(o),l=a.searchParams.get("id"),c=a.searchParams.get("token")||a.searchParams.get("reset_token");if(l&&c)return{id:l,resetToken:c};const p=a.pathname.match(/\/account\/reset\/([^/]+)\/([^/?#]+)/);return p?{id:decodeURIComponent(p[1]),resetToken:decodeURIComponent(p[2])}:null}catch{return null}};function dl(){xs()&&(window.localStorage.removeItem(yl),window.localStorage.removeItem(vl))}function Ni(){const o=Hd(),a=Wd();return{accessToken:o,expiresAt:a,isExpired:Ud(a)}}function rs(){dl()}const rh=`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        firstName
        lastName
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,ih=`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,oh=`
  mutation customerAccessTokenRenew($customerAccessToken: String!) {
    customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      userErrors {
        field
        message
      }
    }
  }
`,sh=`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,ah=`
  mutation customerReset($id: ID!, $input: CustomerResetInput!) {
    customerReset(id: $id, input: $input) {
      customer {
        id
        email
        firstName
        lastName
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,lh=`
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ${$d}
    }
  }
`,uh=`
  query customerOrders($customerAccessToken: String!, $first: Int!, $after: String) {
    customer(customerAccessToken: $customerAccessToken) {
      orders(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            ${Jm}
          }
        }
      }
    }
  }
`,ch=`
  mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        ${$d}
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,dh=`
  mutation customerAddressCreate($customerAccessToken: String!, $address: MailingAddressInput!) {
    customerAddressCreate(customerAccessToken: $customerAccessToken, address: $address) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,ph=`
  mutation customerAddressUpdate($customerAccessToken: String!, $id: ID!, $address: MailingAddressInput!) {
    customerAddressUpdate(customerAccessToken: $customerAccessToken, id: $id, address: $address) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,fh=`
  mutation customerAddressDelete($customerAccessToken: String!, $id: ID!) {
    customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
      deletedCustomerAddressId
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,mh=`
  mutation customerDefaultAddressUpdate($customerAccessToken: String!, $addressId: ID!) {
    customerDefaultAddressUpdate(customerAccessToken: $customerAccessToken, addressId: $addressId) {
      customer {
        defaultAddress {
          id
          address1
          address2
          city
          province
          country
          zip
        }
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;async function hh(o){return Dt(async()=>{const a=await Ve(rh,{input:o});if(gn(a.customerCreate.customerUserErrors,"CUSTOMER_CREATE_ERROR"),!a.customerCreate.customer)throw new Re("Customer was not returned by Shopify","MISSING_CUSTOMER");return a.customerCreate.customer},"CUSTOMER_CREATE_ERROR","Unable to create the customer account.")}async function pd(o,a){return Dt(async()=>{const l=await Ve(ih,{input:{email:o,password:a}});if(gn(l.customerAccessTokenCreate.customerUserErrors,"CUSTOMER_LOGIN_ERROR"),!l.customerAccessTokenCreate.customerAccessToken)throw new Re("Customer access token was not returned by Shopify","MISSING_CUSTOMER_TOKEN");return wl(l.customerAccessTokenCreate.customerAccessToken),l.customerAccessTokenCreate.customerAccessToken},"CUSTOMER_LOGIN_ERROR","Unable to sign in the customer.")}async function fd(o){const a=o?kl(o):th();return a.ok?Dt(async()=>{const l=await Ve(oh,{customerAccessToken:a.data});if(l.customerAccessTokenRenew.userErrors.length>0){const c=l.customerAccessTokenRenew.userErrors[0];throw new Re(c.message,"CUSTOMER_TOKEN_RENEW_ERROR",c.field)}if(!l.customerAccessTokenRenew.customerAccessToken)throw new Re("Customer access token renewal did not return a token","MISSING_CUSTOMER_TOKEN");return wl(l.customerAccessTokenRenew.customerAccessToken),l.customerAccessTokenRenew.customerAccessToken},"CUSTOMER_TOKEN_RENEW_ERROR","Unable to renew the customer session."):a}async function gh(o){return Dt(async()=>{const a=await Ve(sh,{email:o});return gn(a.customerRecover.customerUserErrors,"CUSTOMER_RECOVER_ERROR"),{email:o,submitted:!0}},"CUSTOMER_RECOVER_ERROR","Unable to request a password reset.")}async function xh(o,a){const l=nh(o);return l?Dt(async()=>{const c=await Ve(ah,{id:l.id,input:{password:a,resetToken:l.resetToken}});if(gn(c.customerReset.customerUserErrors,"CUSTOMER_RESET_ERROR"),!c.customerReset.customerAccessToken)throw new Re("Customer password reset did not return a new access token","MISSING_CUSTOMER_TOKEN");return wl(c.customerReset.customerAccessToken),c.customerReset.customerAccessToken},"CUSTOMER_RESET_ERROR","Unable to reset the customer password."):cs({type:"validation",message:"The password reset URL is invalid or missing the required token.",code:"CUSTOMER_RESET_URL_INVALID"})}async function _i(o){return Dt(async()=>(await Ve(lh,{customerAccessToken:o})).customer,"CUSTOMER_FETCH_ERROR","Unable to load customer data.")}async function yh(o,a=10,l){return Dt(async()=>{var p;return((p=(await Ve(uh,{customerAccessToken:o,first:a,after:l||null})).customer)==null?void 0:p.orders)||null},"CUSTOMER_ORDERS_FETCH_ERROR","Unable to load customer orders.")}async function vh(o,a){return Dt(async()=>{const l=await Ve(ch,{customerAccessToken:o,customer:a});if(gn(l.customerUpdate.customerUserErrors,"CUSTOMER_UPDATE_ERROR"),!l.customerUpdate.customer)throw new Re("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerUpdate.customer},"CUSTOMER_UPDATE_ERROR","Unable to update the customer profile.")}async function wh(o,a){return Dt(async()=>{const l=await Ve(dh,{customerAccessToken:o,address:a});if(gn(l.customerAddressCreate.customerUserErrors,"CUSTOMER_ADDRESS_CREATE_ERROR"),!l.customerAddressCreate.customerAddress)throw new Re("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressCreate.customerAddress},"CUSTOMER_ADDRESS_CREATE_ERROR","Unable to create the customer address.")}async function kh(o,a,l){return Dt(async()=>{const c=await Ve(ph,{customerAccessToken:o,id:a,address:l});if(gn(c.customerAddressUpdate.customerUserErrors,"CUSTOMER_ADDRESS_UPDATE_ERROR"),!c.customerAddressUpdate.customerAddress)throw new Re("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return c.customerAddressUpdate.customerAddress},"CUSTOMER_ADDRESS_UPDATE_ERROR","Unable to update the customer address.")}async function jh(o,a){return Dt(async()=>{const l=await Ve(fh,{customerAccessToken:o,id:a});if(gn(l.customerAddressDelete.customerUserErrors,"CUSTOMER_ADDRESS_DELETE_ERROR"),!l.customerAddressDelete.deletedCustomerAddressId)throw new Re("Deleted customer address id was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressDelete.deletedCustomerAddressId},"CUSTOMER_ADDRESS_DELETE_ERROR","Unable to delete the customer address.")}async function Sh(o,a){return Dt(async()=>{const l=await Ve(mh,{customerAccessToken:o,addressId:a});if(gn(l.customerDefaultAddressUpdate.customerUserErrors,"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR"),!l.customerDefaultAddressUpdate.customer)throw new Re("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerDefaultAddressUpdate.customer.defaultAddress},"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR","Unable to update the default address.")}const Ch=(o,a)=>{const l=Number(o);return!Number.isFinite(l)||!a?o||"":new Intl.NumberFormat("en-US",{style:"currency",currency:a}).format(l)},Ci=(o,a)=>({id:o.id,email:o.email,firstName:o.firstName||"",lastName:o.lastName||"",phone:o.phone||void 0,acceptsMarketing:!1,createdAt:a||new Date().toISOString()}),bh=o=>{var l;const a=((l=o.defaultAddress)==null?void 0:l.id)||null;return o.addresses.edges.map(c=>c.node).filter(c=>!!(c!=null&&c.id)).map(c=>({id:c.id,firstName:"",lastName:"",company:void 0,address1:c.address1||"",address2:c.address2||void 0,city:c.city||"",province:c.province||"",zip:c.zip||"",country:c.country||"",phone:void 0,isDefault:c.id===a}))},Eh=o=>o?o.edges.map(a=>{var l,c;return{id:a.node.id,orderNumber:String(a.node.orderNumber),createdAt:a.node.processedAt,totalPrice:Ch((l=a.node.totalPriceV2)==null?void 0:l.amount,(c=a.node.totalPriceV2)==null?void 0:c.currencyCode),fulfillmentStatus:a.node.fulfillmentStatus==="FULFILLED"||a.node.fulfillmentStatus==="UNFULFILLED"||a.node.fulfillmentStatus==="PARTIALLY_FULFILLED"||a.node.fulfillmentStatus==="CANCELLED"?a.node.fulfillmentStatus:"UNFULFILLED",lineItems:a.node.lineItems.edges.map((p,f)=>({id:`${a.node.id}-${f}`,title:p.node.title,quantity:p.node.quantity,price:""}))}}):[],md=o=>({firstName:o.firstName||void 0,lastName:o.lastName||void 0,company:o.company||void 0,address1:o.address1||void 0,address2:o.address2||void 0,city:o.city||void 0,province:o.province||void 0,zip:o.zip||void 0,country:o.country||void 0,phone:o.phone||void 0});function Ih(){const[o,a]=R.useState(null),[l,c]=R.useState(null),[p,f]=R.useState(!0),m=async()=>{const I=Ni();if(!I.accessToken){a(null),c(null);return}const _=await fd(I.accessToken);if(!_.ok)throw rs(),a(null),c(null),new Error(_.error.message||"Customer session expired.");const M=await _i(_.data.accessToken);if(!M.ok||!M.data)throw new Error(M.error.message||"Unable to load customer data.");a(Ci(M.data,o==null?void 0:o.createdAt)),c(_.data.accessToken)};return R.useEffect(()=>{let I=!1;return(async()=>{var M;try{const A=Ni();if(!A.accessToken){I||(a(null),c(null),f(!1));return}const U=await fd(A.accessToken);if(!U.ok){I||(rs(),a(null),c(null));return}const K=await _i(U.data.accessToken);if(!K.ok||!K.data)throw new Error(((M=K.error)==null?void 0:M.message)||"Unable to load customer data.");I||(a(Ci(K.data)),c(U.data.accessToken))}catch{I||(rs(),a(null),c(null))}finally{I||f(!1)}})(),()=>{I=!0}},[]),{customer:o,accessToken:l,isAuthenticated:!!(o&&l),isLoading:p,login:async(I,_)=>{f(!0);try{const M=await pd(I,_);if(!M.ok)throw new Error(M.error.message||"Unable to sign in.");const A=await _i(M.data.accessToken);if(!A.ok||!A.data)throw new Error(A.error.message||"Unable to load customer data.");a(Ci(A.data)),c(M.data.accessToken)}finally{f(!1)}},register:async I=>{f(!0);try{const _=await hh(I);if(!_.ok)throw new Error(_.error.message||"Unable to create the account.");const M=await pd(I.email,I.password);if(!M.ok)throw new Error(M.error.message||"Account created but sign-in failed.");const A=await _i(M.data.accessToken);if(!A.ok||!A.data)throw new Error(A.error.message||"Unable to load customer data.");a(Ci(A.data,new Date().toISOString())),c(M.data.accessToken)}finally{f(!1)}},logout:()=>{rs(),a(null),c(null)},updateProfile:async I=>{const _=l||Ni().accessToken;if(!_)throw new Error("No active customer session was found.");f(!0);try{const M=await vh(_,I);if(!M.ok)throw new Error(M.error.message||"Unable to update the profile.");a(A=>Ci(M.data,A==null?void 0:A.createdAt))}finally{f(!1)}},refreshCustomerData:m,requestPasswordReset:async I=>{const _=await gh(I);if(!_.ok)throw new Error(_.error.message||"Unable to send the password reset email.")},resetPassword:async(I,_)=>{const M=await xh(I,_);if(!M.ok)throw new Error(M.error.message||"Unable to reset the password.")}}}function Th(){const{accessToken:o,isAuthenticated:a}=xn(),[l,c]=R.useState([]),[p,f]=R.useState(!0),[m,x]=R.useState(!1),[S,j]=R.useState(null),b=o||Ni().accessToken,h=async()=>{var I;if(!b||!a){c([]),f(!1);return}f(!0),j(null);try{const _=await _i(b);if(!_.ok||!_.data)throw new Error(((I=_.error)==null?void 0:I.message)||"Unable to load addresses.");c(bh(_.data))}catch(_){j(_ instanceof Error?_.message:"Unable to load addresses.")}finally{f(!1)}};R.useEffect(()=>{h()},[b,a]);const k=async I=>{x(!0),j(null);try{await I(),await h()}catch(_){const M=_ instanceof Error?_.message:"Unable to update addresses.";throw j(M),_}finally{x(!1)}};return{addresses:l,isLoading:p,isSaving:m,error:S,refresh:h,createAddress:async I=>{if(!b)throw new Error("No active customer session was found.");await k(async()=>{const _=await wh(b,md(I));if(!_.ok)throw new Error(_.error.message||"Unable to create address.")})},editAddress:async I=>{if(!b)throw new Error("No active customer session was found.");await k(async()=>{const _=await kh(b,I.id,md(I));if(!_.ok)throw new Error(_.error.message||"Unable to update address.")})},removeAddress:async I=>{if(!b)throw new Error("No active customer session was found.");await k(async()=>{const _=await jh(b,I);if(!_.ok)throw new Error(_.error.message||"Unable to delete address.")})},makeDefaultAddress:async I=>{if(!b)throw new Error("No active customer session was found.");await k(async()=>{const _=await Sh(b,I);if(!_.ok)throw new Error(_.error.message||"Unable to set the default address.")})}}}function Fh(){const{accessToken:o,isAuthenticated:a}=xn(),[l,c]=R.useState([]),[p,f]=R.useState(null),[m,x]=R.useState(!0),[S,j]=R.useState(!1),[b,h]=R.useState(null),k=o||Ni().accessToken,I=async(_,M=!1)=>{if(!k||!a){c([]),f(null),x(!1);return}M?j(!0):x(!0),h(null);try{const A=await yh(k,10,_);if(!A.ok)throw new Error(A.error.message||"Unable to load orders.");const U=Eh(A.data);c(K=>M?[...K,...U]:U),f(A.data?{hasNextPage:A.data.pageInfo.hasNextPage,hasPreviousPage:A.data.pageInfo.hasPreviousPage,startCursor:A.data.pageInfo.startCursor,endCursor:A.data.pageInfo.endCursor}:null)}catch(A){h(A instanceof Error?A.message:"Unable to load orders.")}finally{x(!1),j(!1)}};return R.useEffect(()=>{I()},[k,a]),{orders:l,pageInfo:p,hasMore:!!(p!=null&&p.hasNextPage&&(p!=null&&p.endCursor)),isLoading:m,isLoadingMore:S,error:b,refresh:async()=>I(),loadMore:async()=>{p!=null&&p.endCursor&&await I(p.endCursor,!0)}}}const Vd=R.createContext(null);function xn(){const o=R.useContext(Vd);if(!o)throw new Error("useAuth must be used within an AuthProvider");return o}function _h({children:o}){const a=Ih(),l={customer:a.customer,accessToken:a.accessToken,isAuthenticated:a.isAuthenticated,isLoading:a.isLoading,login:async(c,p)=>{await a.login(c,p)},register:async c=>{await a.register(c)},logout:()=>{a.logout()},updateProfile:async c=>{await a.updateProfile(c)},refreshCustomerData:async()=>{await a.refreshCustomerData()},requestPasswordReset:async c=>{await a.requestPasswordReset(c)},resetPassword:async(c,p)=>{await a.resetPassword(c,p)}};return r.jsx(Vd.Provider,{value:l,children:o})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nh=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,c)=>c?c.toUpperCase():l.toLowerCase()),hd=o=>{const a=Nh(o);return a.charAt(0).toUpperCase()+a.slice(1)},qd=(...o)=>o.filter((a,l,c)=>!!a&&a.trim()!==""&&c.indexOf(a)===l).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=R.forwardRef(({color:o="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:p="",children:f,iconNode:m,...x},S)=>R.createElement("svg",{ref:S,...zh,width:a,height:a,stroke:o,strokeWidth:c?Number(l)*24/Number(a):l,className:qd("lucide",p),...x},[...m.map(([j,b])=>R.createElement(j,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(o,a)=>{const l=R.forwardRef(({className:c,...p},f)=>R.createElement(Ah,{ref:f,iconNode:a,className:qd(`lucide-${Rh(hd(o))}`,`lucide-${o}`,c),...p}));return l.displayName=hd(o),l};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Lh=ye("arrow-left",Ph);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yd=ye("check",Dh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Oh=ye("chevron-down",Mh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$h=ye("chevron-right",Bh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Hh=ye("circle-alert",Uh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Vh=ye("circle-check-big",Wh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Yh=ye("circle-check",qh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Kh=ye("circle-x",Qh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Gh=ye("ellipsis-vertical",Xh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Zh=ye("eye-off",Jh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],tg=ye("eye",eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Qd=ye("info",ng);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ig=ye("loader-circle",rg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],sg=ye("log-out",og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],lg=ye("mail",ag);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],jl=ye("map-pin",ug);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],dg=ye("menu",cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Kd=ye("moon",pg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],$i=ye("package",fg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],hg=ye("pen",mg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],xg=ye("phone",gg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],gd=ye("plus",yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],wg=ye("search",vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],jg=ye("shield",kg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Xd=ye("sun",Sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],bg=ye("triangle-alert",Cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Gd=ye("user",Eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Sl=ye("x",Ig);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Fg=ye("zap",Tg);function Ie({label:o,error:a,helperText:l,showPasswordToggle:c,type:p="text",disabled:f,...m}){const[x,S]=R.useState(!1),[j,b]=R.useState(!1),h=c&&x?"text":p;return r.jsxs("div",{style:{width:"100%"},children:[r.jsx("label",{htmlFor:m.id,style:{display:"block",fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"#344054",marginBottom:"6px",fontFamily:"Inter, system-ui, sans-serif"},children:o}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx("input",{...m,type:h,disabled:f,onFocus:k=>{var I;b(!0),(I=m.onFocus)==null||I.call(m,k)},onBlur:k=>{var I;b(!1),(I=m.onBlur)==null||I.call(m,k)},style:{width:"100%",height:"44px",padding:"10px 14px",paddingRight:c?"44px":"14px",fontSize:"16px",lineHeight:"24px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:f?"#98A2B3":"#101828",backgroundColor:f?"#F9FAFB":"#FFFFFF",border:`1px solid ${a?"#F04438":j?"#4F46E5":"#D0D5DD"}`,borderRadius:"10px",outline:"none",boxShadow:j&&!a?"0 0 0 2px rgba(79, 70, 229, 0.06)":"none",cursor:f?"not-allowed":"text",transition:"all 0.15s ease"}}),c&&r.jsx("button",{type:"button",onClick:()=>S(!x),disabled:f,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:"4px",cursor:f?"not-allowed":"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",opacity:f?.4:1},"aria-label":x?"Hide password":"Show password",children:x?r.jsx(Zh,{size:20}):r.jsx(tg,{size:20})})]}),a&&r.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif"},children:a}),!a&&l&&r.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:l})]})}function ot({variant:o="primary",size:a="md",isLoading:l=!1,disabled:c,children:p,...f}){const m=c||l,x={sm:{height:"36px",padding:"0 12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",padding:"0 16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",padding:"0 20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}},S={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"#FFFFFF",color:"#101828",border:"1px solid #D0D5DD"},ghost:{backgroundColor:"transparent",color:"#101828",border:"none"},destructive:{backgroundColor:"#F04438",color:"#FFFFFF",border:"none"}},j=x[a],b=S[o];return r.jsxs("button",{...f,disabled:m,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, system-ui, sans-serif",fontWeight:"600",cursor:m?"not-allowed":"pointer",opacity:m?.4:1,transition:"all 0.15s ease",position:"relative",whiteSpace:"nowrap",...j,...b,...f.style},onMouseEnter:h=>{!m&&o!=="ghost"&&(h.currentTarget.style.filter="brightness(0.94)")},onMouseLeave:h=>{h.currentTarget.style.filter="none"},onMouseDown:h=>{m||(h.currentTarget.style.filter="brightness(0.88)")},onMouseUp:h=>{m||(h.currentTarget.style.filter="brightness(0.94)")},children:[l&&r.jsx(ig,{size:a==="sm"?14:a==="lg"?18:16,style:{animation:"spin 1s linear infinite"}}),p,r.jsx("style",{children:`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `})]})}function mn({type:o,children:a}){const c={success:{backgroundColor:"#ECFDF3",borderColor:"#12B76A",textColor:"#039855",icon:Vh},error:{backgroundColor:"#FEF3F2",borderColor:"#F04438",textColor:"#D92D20",icon:Kh},warning:{backgroundColor:"#FFFAEB",borderColor:"#F79009",textColor:"#DC6803",icon:Hh},info:{backgroundColor:"rgba(79, 70, 229, 0.06)",borderColor:"#4F46E5",textColor:"#4338CA",icon:Qd}}[o],p=c.icon;return r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px 16px",backgroundColor:c.backgroundColor,border:`1px solid ${c.borderColor}`,borderRadius:"10px"},children:[r.jsx(p,{size:20,style:{color:c.textColor,flexShrink:0,marginTop:"2px"}}),r.jsx("div",{style:{flex:1,fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:c.textColor,fontFamily:"Inter, system-ui, sans-serif"},children:a})]})}function Zt(o){typeof window>"u"||(window.location.href=o)}function _g(){const{login:o}=xn(),[a,l]=R.useState(""),[c,p]=R.useState(""),[f,m]=R.useState({}),[x,S]=R.useState(!1),j=()=>{const h={};return a?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||(h.email="Please enter a valid email address"):h.email="Email is required",c||(h.password="Password is required"),m(h),Object.keys(h).length===0},b=async h=>{if(h.preventDefault(),!!j()){S(!0),m({});try{await o(a,c),Zt("/account")}catch(k){m({general:k instanceof Error?k.message:"Invalid email or password"})}finally{S(!1)}}};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Welcome back"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Sign in to your account to continue"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[f.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(mn,{type:"error",children:f.general})}),r.jsxs("form",{onSubmit:b,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsx(Ie,{id:"email",label:"Email",type:"email",value:a,onChange:h=>l(h.target.value),error:f.email,placeholder:"you@example.com",autoComplete:"email",disabled:x}),r.jsx(Ie,{id:"password",label:"Password",type:"password",value:c,onChange:h=>p(h.target.value),error:f.password,placeholder:"Enter your password",autoComplete:"current-password",showPasswordToggle:!0,disabled:x})]}),r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx("button",{type:"button",onClick:()=>Zt("/account/password-reset"),disabled:x,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:x?"not-allowed":"pointer",textDecoration:"none",opacity:x?.4:1},onMouseEnter:h=>!x&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Forgot password?"})}),r.jsx(ot,{type:"submit",variant:"primary",size:"lg",isLoading:x,style:{width:"100%",marginBottom:"16px"},children:"Sign in"}),r.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Don't have an account?"," ",r.jsx("button",{type:"button",onClick:()=>Zt("/account/register"),disabled:x,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:x?"not-allowed":"pointer",textDecoration:"none",opacity:x?.4:1},onMouseEnter:h=>!x&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Create account"})]})]})]}),r.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"rgba(79, 70, 229, 0.06)",border:"1px solid #4F46E5",borderRadius:"12px",textAlign:"center"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Demo: Use any email and password to sign in"})})]})})}function Rg(){const{register:o}=xn(),[a,l]=R.useState({firstName:"",lastName:"",email:"",phone:"",password:""}),[c,p]=R.useState({}),[f,m]=R.useState(!1),x=()=>{const b={};return a.firstName.trim()||(b.firstName="First name is required"),a.lastName.trim()||(b.lastName="Last name is required"),a.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)||(b.email="Please enter a valid email address"):b.email="Email is required",a.phone&&!/^[\d\s\-\+\(\)]+$/.test(a.phone)&&(b.phone="Please enter a valid phone number"),a.password?a.password.length<8&&(b.password="Password must be at least 8 characters"):b.password="Password is required",p(b),Object.keys(b).length===0},S=async b=>{if(b.preventDefault(),!!x()){m(!0),p({});try{await o(a),Zt("/account")}catch(h){p({general:h instanceof Error?h.message:"Registration failed"})}finally{m(!1)}}},j=(b,h)=>{l(k=>({...k,[b]:h})),c[b]&&p(k=>({...k,[b]:""}))};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"540px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Create your account"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Join us to start shopping and manage your orders"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[c.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(mn,{type:"error",children:c.general})}),r.jsxs("form",{onSubmit:S,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Ie,{id:"firstName",label:"First name",type:"text",value:a.firstName,onChange:b=>j("firstName",b.target.value),error:c.firstName,placeholder:"Sarah",autoComplete:"given-name",disabled:f}),r.jsx(Ie,{id:"lastName",label:"Last name",type:"text",value:a.lastName,onChange:b=>j("lastName",b.target.value),error:c.lastName,placeholder:"Chen",autoComplete:"family-name",disabled:f})]}),r.jsx(Ie,{id:"email",label:"Email",type:"email",value:a.email,onChange:b=>j("email",b.target.value),error:c.email,placeholder:"you@example.com",autoComplete:"email",disabled:f}),r.jsx(Ie,{id:"phone",label:"Phone (optional)",type:"tel",value:a.phone,onChange:b=>j("phone",b.target.value),error:c.phone,placeholder:"+1 (555) 123-4567",autoComplete:"tel",disabled:f}),r.jsx(Ie,{id:"password",label:"Password",type:"password",value:a.password,onChange:b=>j("password",b.target.value),error:c.password,helperText:c.password?void 0:"Must be at least 8 characters",placeholder:"Create a password",autoComplete:"new-password",showPasswordToggle:!0,disabled:f})]}),r.jsx(ot,{type:"submit",variant:"primary",size:"lg",isLoading:f,style:{width:"100%",marginBottom:"16px"},children:"Create account"}),r.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Already have an account?"," ",r.jsx("button",{type:"button",onClick:()=>Zt("/account/login"),disabled:f,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:f?"not-allowed":"pointer",textDecoration:"none",opacity:f?.4:1},onMouseEnter:b=>!f&&(b.currentTarget.style.textDecoration="underline"),onMouseLeave:b=>b.currentTarget.style.textDecoration="none",children:"Sign in"})]})]})]})]})})}function Ng(){const{requestPasswordReset:o}=xn(),[a,l]=R.useState(""),[c,p]=R.useState(""),[f,m]=R.useState(!1),[x,S]=R.useState(!1),j=h=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h),b=async h=>{if(h.preventDefault(),!a){p("Email is required");return}if(!j(a)){p("Please enter a valid email address");return}m(!0),p("");try{await o(a),S(!0)}catch(k){p(k instanceof Error?k.message:"Failed to send reset link. Please try again.")}finally{m(!1)}};return x?r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"#ECFDF3",borderRadius:"16px",marginBottom:"16px"},children:r.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#12B76A",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Check your email"}),r.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["We've sent a password reset link to",r.jsx("br",{}),r.jsx("strong",{style:{color:"#344054"},children:a})]})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)",marginBottom:"16px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:"Click the link in the email to reset your password. If you don't see the email, check your spam folder."}),r.jsx(ot,{variant:"primary",size:"lg",onClick:()=>Zt("/account/login"),style:{width:"100%"},children:"Return to sign in"})]}),r.jsx("button",{onClick:()=>{S(!1),l("")},style:{display:"block",width:"100%",background:"none",border:"none",padding:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"center"},onMouseEnter:h=>h.currentTarget.style.textDecoration="underline",onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Didn't receive the email? Try again"})]})}):r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("button",{onClick:()=>Zt("/account/login"),disabled:f,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:f?"not-allowed":"pointer",opacity:f?.4:1},onMouseEnter:h=>!f&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:[r.jsx(Lh,{size:16}),"Back to sign in"]}),r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Reset your password"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Enter your email and we'll send you a reset link"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[c&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(mn,{type:"error",children:c})}),r.jsxs("form",{onSubmit:b,children:[r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(Ie,{id:"email",label:"Email",type:"email",value:a,onChange:h=>{l(h.target.value),p("")},error:c&&!a?c:"",placeholder:"you@example.com",autoComplete:"email",disabled:f})}),r.jsx(ot,{type:"submit",variant:"primary",size:"lg",isLoading:f,style:{width:"100%"},children:"Send reset link"})]})]})]})})}function zg(){const{resetPassword:o}=xn(),[a,l]=R.useState(""),[c,p]=R.useState(""),[f,m]=R.useState({}),[x,S]=R.useState(!1),[j,b]=R.useState(!1),h=()=>{const I={};return a?a.length<8&&(I.password="Password must be at least 8 characters"):I.password="Password is required",c?a!==c&&(I.confirmPassword="Passwords do not match"):I.confirmPassword="Please confirm your password",m(I),Object.keys(I).length===0},k=async I=>{if(I.preventDefault(),!!h()){S(!0),m({});try{await o(window.location.href,a),b(!0)}catch(_){m({general:_ instanceof Error?_.message:"Failed to reset password. The link may have expired."})}finally{S(!1)}}};return j?r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"#ECFDF3",borderRadius:"16px",marginBottom:"16px"},children:r.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#12B76A",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Password reset successfully"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Your password has been updated"})]}),r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx(ot,{variant:"primary",size:"lg",onClick:()=>Zt("/account/login"),style:{width:"100%"},children:"Continue to sign in"})})]})}):r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Set new password"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Create a new password for your account"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[f.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(mn,{type:"error",children:f.general})}),r.jsxs("form",{onSubmit:k,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsx(Ie,{id:"password",label:"New password",type:"password",value:a,onChange:I=>{l(I.target.value),f.password&&m(_=>({..._,password:""}))},error:f.password,helperText:f.password?void 0:"Must be at least 8 characters",placeholder:"Enter new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:x}),r.jsx(Ie,{id:"confirmPassword",label:"Confirm new password",type:"password",value:c,onChange:I=>{p(I.target.value),f.confirmPassword&&m(_=>({..._,confirmPassword:""}))},error:f.confirmPassword,placeholder:"Re-enter new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:x})]}),r.jsx(ot,{type:"submit",variant:"primary",size:"lg",isLoading:x,style:{width:"100%"},children:"Reset password"})]})]})]})})}function xd({activeSection:o,onSectionChange:a,onLogout:l,isMobile:c=!1}){const p=[{id:"overview",label:"Overview",icon:Gd},{id:"orders",label:"Orders",icon:$i},{id:"addresses",label:"Addresses",icon:jl}];return c?r.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto",padding:"16px",backgroundColor:"#FFFFFF",borderBottom:"1px solid #EAECF0"},children:p.map(f=>{const m=f.icon,x=o===f.id;return r.jsxs("button",{onClick:()=>a(f.id),style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",backgroundColor:x?"#F9FAFB":"transparent",border:`1px solid ${x?"#D0D5DD":"transparent"}`,borderRadius:"10px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:x?"#101828":"#667085",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s"},children:[r.jsx(m,{size:16}),f.label]},f.id)})}):r.jsxs("nav",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"8px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[p.map(f=>{const m=f.icon,x=o===f.id;return r.jsxs("button",{onClick:()=>a(f.id),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:x?"#F9FAFB":"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:x?"600":"400",color:x?"#101828":"#667085",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:S=>{x||(S.currentTarget.style.backgroundColor="#FCFCFD")},onMouseLeave:S=>{x||(S.currentTarget.style.backgroundColor="transparent")},children:[r.jsx(m,{size:20}),f.label]},f.id)}),r.jsx("div",{style:{height:"1px",backgroundColor:"#EAECF0",margin:"8px 0"}}),r.jsxs("button",{onClick:l,style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="#FEF3F2"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="transparent"},children:[r.jsx(sg,{size:20}),"Sign out"]})]})}function Ag({customer:o}){const{updateProfile:a}=xn(),[l,c]=R.useState(!1),[p,f]=R.useState({firstName:o.firstName,lastName:o.lastName,email:o.email,phone:o.phone||""}),[m,x]=R.useState(!1),[S,j]=R.useState(""),[b,h]=R.useState(""),k=async()=>{x(!0),j(""),h("");try{await a(p),j("Profile updated successfully"),c(!1),setTimeout(()=>j(""),3e3)}catch{h("Failed to update profile")}finally{x(!1)}},I=()=>{f({firstName:o.firstName,lastName:o.lastName,email:o.email,phone:o.phone||""}),c(!1),h("")};return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Profile Information"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your personal information and contact details"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"24px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[S&&r.jsx("div",{style:{marginBottom:"20px"},children:r.jsx(mn,{type:"success",children:S})}),b&&r.jsx("div",{style:{marginBottom:"20px"},children:r.jsx(mn,{type:"error",children:b})}),l?r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Ie,{id:"firstName",label:"First name",type:"text",value:p.firstName,onChange:_=>f(M=>({...M,firstName:_.target.value})),disabled:m}),r.jsx(Ie,{id:"lastName",label:"Last name",type:"text",value:p.lastName,onChange:_=>f(M=>({...M,lastName:_.target.value})),disabled:m})]}),r.jsx(Ie,{id:"email",label:"Email",type:"email",value:p.email,onChange:_=>f(M=>({...M,email:_.target.value})),disabled:m}),r.jsx(Ie,{id:"phone",label:"Phone (optional)",type:"tel",value:p.phone,onChange:_=>f(M=>({...M,phone:_.target.value})),disabled:m})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[r.jsx(ot,{variant:"secondary",size:"md",onClick:I,disabled:m,children:"Cancel"}),r.jsx(ot,{variant:"primary",size:"md",onClick:k,isLoading:m,children:"Save changes"})]})]}):r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"#F9FAFB",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Gd,{size:28,style:{color:"#667085"}})}),r.jsxs("div",{children:[r.jsxs("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:[o.firstName," ",o.lastName]}),r.jsxs("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Member since ",new Date(o.createdAt).toLocaleDateString("en-US",{month:"long",year:"numeric"})]})]})]}),r.jsxs(ot,{variant:"secondary",size:"sm",onClick:()=>c(!0),children:[r.jsx(hg,{size:14}),"Edit"]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(lg,{size:20,style:{color:"#667085",flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Email"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:o.email})]})]}),o.phone&&r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(xg,{size:20,style:{color:"#667085",flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Phone"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:o.phone})]})]})]})]})]})]})}function Pg({order:o,onClick:a}){const l=f=>new Date(f).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),p=(f=>{switch(f){case"FULFILLED":return{bg:"#ECFDF3",border:"#12B76A",text:"#039855",label:"Fulfilled"};case"UNFULFILLED":return{bg:"#FFFAEB",border:"#F79009",text:"#DC6803",label:"Unfulfilled"};case"PARTIALLY_FULFILLED":return{bg:"rgba(79, 70, 229, 0.06)",border:"#4F46E5",text:"#4338CA",label:"Partially fulfilled"};case"CANCELLED":return{bg:"#FEF3F2",border:"#F04438",text:"#D92D20",label:"Cancelled"};default:return{bg:"#F9FAFB",border:"#D0D5DD",text:"#667085",label:f}}})(o.fulfillmentStatus);return r.jsx("button",{onClick:()=>a(o.id),style:{width:"100%",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"20px",cursor:"pointer",textAlign:"left",transition:"all 0.15s",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},onMouseEnter:f=>{f.currentTarget.style.boxShadow="0 4px 10px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.08)",f.currentTarget.style.borderColor="#D0D5DD"},onMouseLeave:f=>{f.currentTarget.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)",f.currentTarget.style.borderColor="#EAECF0"},children:r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[r.jsx("div",{style:{flexShrink:0,width:"48px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F9FAFB",borderRadius:"10px"},children:r.jsx($i,{size:24,style:{color:"#667085"}})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px",flexWrap:"wrap"},children:[r.jsxs("h3",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:["Order #",o.orderNumber]}),r.jsx("div",{style:{display:"inline-flex",alignItems:"center",padding:"2px 8px",backgroundColor:p.bg,border:`1px solid ${p.border}`,borderRadius:"6px"},children:r.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:p.text,fontFamily:"Inter, system-ui, sans-serif"},children:p.label})})]}),r.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"12px"},children:["Placed on ",l(o.createdAt)," • ",o.lineItems.length," item",o.lineItems.length!==1?"s":""]}),r.jsx("div",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:o.totalPrice})]}),r.jsx("div",{style:{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#98A2B3"},children:r.jsx($h,{size:20})})]})})}function Jd({icon:o,title:a,description:l,action:c}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"64px 24px",textAlign:"center"},children:[r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"#F9FAFB",color:"#667085",marginBottom:"16px"},children:o}),r.jsx("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:a}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:c?"24px":"0",maxWidth:"400px"},children:l}),c&&r.jsx("div",{children:c})]})}function Lg(){const{orders:o,hasMore:a,isLoading:l,isLoadingMore:c,error:p,loadMore:f}=Fh(),m=x=>{console.log("View order:",x)};return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Order History"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"View and track your orders"})]}),p&&r.jsx("div",{style:{marginBottom:"16px"},children:r.jsx(mn,{type:"error",children:p})}),l?r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading orders..."})}):o.length>0?r.jsxs("div",{children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:a?"24px":"0"},children:o.map(x=>r.jsx(Pg,{order:x,onClick:m},x.id))}),a&&r.jsx("div",{style:{textAlign:"center"},children:r.jsx(ot,{variant:"secondary",size:"md",onClick:()=>void f(),isLoading:c,children:"Load more orders"})})]}):r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx(Jd,{icon:r.jsx($i,{size:32}),title:"No orders yet",description:"When you place an order, it will appear here so you can track its status.",action:r.jsx(ot,{variant:"primary",size:"md",children:"Start shopping"})})})]})}function Dg({address:o,onEdit:a,onDelete:l,onSetDefault:c}){const[p,f]=R.useState(!1);return r.jsxs("div",{style:{position:"relative",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"20px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[o.isDefault&&r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 8px",backgroundColor:"#ECFDF3",border:"1px solid #12B76A",borderRadius:"6px",marginBottom:"12px"},children:[r.jsx(Yd,{size:12,style:{color:"#039855"}}),r.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#039855",fontFamily:"Inter, system-ui, sans-serif"},children:"Default"})]}),r.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px"},children:[r.jsx("button",{onClick:()=>f(!p),style:{background:"none",border:"none",padding:"4px",cursor:"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:r.jsx(Gh,{size:20})}),p&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10},onClick:()=>f(!1)}),r.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:"4px",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"10px",boxShadow:"0 4px 10px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.08)",padding:"4px",minWidth:"160px",zIndex:20},children:[r.jsx("button",{onClick:()=>{f(!1),a(o)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#344054",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Edit address"}),!o.isDefault&&r.jsx("button",{onClick:()=>{f(!1),c(o.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#344054",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Set as default"}),r.jsx("div",{style:{height:"1px",backgroundColor:"#EAECF0",margin:"4px 0"}}),r.jsx("button",{onClick:()=>{f(!1),l(o.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#FEF3F2"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Delete address"})]})]})]}),r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx("div",{style:{flexShrink:0,width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F9FAFB",borderRadius:"8px"},children:r.jsx(jl,{size:20,style:{color:"#667085"}})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:[o.firstName," ",o.lastName]}),r.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:[o.company&&r.jsx("div",{children:o.company}),r.jsx("div",{children:o.address1}),o.address2&&r.jsx("div",{children:o.address2}),r.jsxs("div",{children:[o.city,", ",o.province," ",o.zip]}),r.jsx("div",{children:o.country}),o.phone&&r.jsx("div",{style:{marginTop:"8px"},children:o.phone})]})]})]})]})}function yd({address:o,onClose:a,onSave:l}){const[c,p]=R.useState({firstName:(o==null?void 0:o.firstName)||"",lastName:(o==null?void 0:o.lastName)||"",company:(o==null?void 0:o.company)||"",address1:(o==null?void 0:o.address1)||"",address2:(o==null?void 0:o.address2)||"",city:(o==null?void 0:o.city)||"",province:(o==null?void 0:o.province)||"",zip:(o==null?void 0:o.zip)||"",country:(o==null?void 0:o.country)||"United States",phone:(o==null?void 0:o.phone)||""}),[f,m]=R.useState({}),[x,S]=R.useState(!1),j=()=>{const k={};return c.firstName.trim()||(k.firstName="First name is required"),c.lastName.trim()||(k.lastName="Last name is required"),c.address1.trim()||(k.address1="Address is required"),c.city.trim()||(k.city="City is required"),c.province.trim()||(k.province="State/Province is required"),c.zip.trim()||(k.zip="ZIP/Postal code is required"),c.country.trim()||(k.country="Country is required"),m(k),Object.keys(k).length===0},b=async k=>{if(k.preventDefault(),!!j()){S(!0);try{await new Promise(I=>setTimeout(I,500)),l(o?{...o,...c}:c)}catch(I){console.error("Failed to save address:",I)}finally{S(!1)}}},h=(k,I)=>{p(_=>({..._,[k]:I})),f[k]&&m(_=>({..._,[k]:""}))};return r.jsx(r.Fragment,{children:r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.40)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50,overflow:"auto"},onClick:a,children:r.jsxs("div",{style:{backgroundColor:"#FFFFFF",borderRadius:"16px",width:"100%",maxWidth:"600px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 12px 24px -4px rgba(16, 24, 40, 0.06), 0 6px 12px -4px rgba(16, 24, 40, 0.08)"},onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid #EAECF0"},children:[r.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:o?"Edit address":"Add new address"}),r.jsx("button",{onClick:a,disabled:x,style:{background:"none",border:"none",padding:"4px",cursor:x?"not-allowed":"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",opacity:x?.4:1},children:r.jsx(Sl,{size:20})})]}),r.jsxs("form",{onSubmit:b,children:[r.jsx("div",{style:{padding:"24px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Ie,{id:"firstName",label:"First name",value:c.firstName,onChange:k=>h("firstName",k.target.value),error:f.firstName,disabled:x}),r.jsx(Ie,{id:"lastName",label:"Last name",value:c.lastName,onChange:k=>h("lastName",k.target.value),error:f.lastName,disabled:x})]}),r.jsx(Ie,{id:"company",label:"Company (optional)",value:c.company,onChange:k=>h("company",k.target.value),disabled:x}),r.jsx(Ie,{id:"address1",label:"Address",value:c.address1,onChange:k=>h("address1",k.target.value),error:f.address1,placeholder:"123 Main Street",disabled:x}),r.jsx(Ie,{id:"address2",label:"Apartment, suite, etc. (optional)",value:c.address2,onChange:k=>h("address2",k.target.value),placeholder:"Apt 4B",disabled:x}),r.jsx(Ie,{id:"city",label:"City",value:c.city,onChange:k=>h("city",k.target.value),error:f.city,disabled:x}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Ie,{id:"province",label:"State / Province",value:c.province,onChange:k=>h("province",k.target.value),error:f.province,placeholder:"CA",disabled:x}),r.jsx(Ie,{id:"zip",label:"ZIP / Postal code",value:c.zip,onChange:k=>h("zip",k.target.value),error:f.zip,placeholder:"94103",disabled:x})]}),r.jsx(Ie,{id:"country",label:"Country",value:c.country,onChange:k=>h("country",k.target.value),error:f.country,disabled:x}),r.jsx(Ie,{id:"phone",label:"Phone (optional)",type:"tel",value:c.phone,onChange:k=>h("phone",k.target.value),placeholder:"+1 (555) 123-4567",disabled:x})]})}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",padding:"24px",borderTop:"1px solid #EAECF0"},children:[r.jsx(ot,{type:"button",variant:"secondary",size:"md",onClick:a,disabled:x,children:"Cancel"}),r.jsx(ot,{type:"submit",variant:"primary",size:"md",isLoading:x,children:o?"Save changes":"Add address"})]})]})]})})})}function Mg({title:o,description:a,onConfirm:l,onCancel:c}){return r.jsx(r.Fragment,{children:r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.40)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50},onClick:c,children:r.jsx("div",{style:{backgroundColor:"#FFFFFF",borderRadius:"16px",width:"100%",maxWidth:"440px",boxShadow:"0 12px 24px -4px rgba(16, 24, 40, 0.06), 0 6px 12px -4px rgba(16, 24, 40, 0.08)"},onClick:p=>p.stopPropagation(),children:r.jsxs("div",{style:{padding:"24px"},children:[r.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",backgroundColor:"#FEF3F2",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:r.jsx(bg,{size:24,style:{color:"#F04438"}})}),r.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:o}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:a}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[r.jsx(ot,{variant:"secondary",size:"md",onClick:c,children:"Cancel"}),r.jsx(ot,{variant:"destructive",size:"md",onClick:l,children:"Delete"})]})]})})})})}function Og(){const{addresses:o,isLoading:a,isSaving:l,error:c,createAddress:p,editAddress:f,removeAddress:m,makeDefaultAddress:x}=Th(),[S,j]=R.useState(!1),[b,h]=R.useState(null),[k,I]=R.useState(null),_=async re=>{await p(re),j(!1)},M=re=>{h(re)},A=async re=>{await f(re),h(null)},U=re=>{I(re)},K=async()=>{k&&(await m(k),I(null))},te=async re=>{await x(re)};return r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px",flexWrap:"wrap",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Saved Addresses"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your shipping and billing addresses"})]}),o.length>0&&r.jsxs(ot,{variant:"primary",size:"md",onClick:()=>j(!0),children:[r.jsx(gd,{size:16}),"Add address"]})]}),c&&r.jsx("div",{style:{marginBottom:"16px"},children:r.jsx(mn,{type:"error",children:c})}),a?r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading addresses..."})}):o.length>0?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"16px"},children:o.map(re=>r.jsx(Dg,{address:re,onEdit:M,onDelete:U,onSetDefault:te},re.id))}):r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx(Jd,{icon:r.jsx(jl,{size:32}),title:"No addresses saved",description:"Add a shipping address to make checkout faster and easier.",action:r.jsxs(ot,{variant:"primary",size:"md",onClick:()=>j(!0),children:[r.jsx(gd,{size:16}),"Add address"]})})}),S&&r.jsx(yd,{onClose:()=>j(!1),onSave:_}),b&&r.jsx(yd,{address:b,onClose:()=>h(null),onSave:A}),k&&r.jsx(Mg,{title:"Delete address",description:"Are you sure you want to delete this address? This action cannot be undone.",onConfirm:()=>void K(),onCancel:()=>I(null)}),l&&r.jsx("div",{style:{marginTop:"16px"},children:r.jsx(mn,{type:"info",children:"Saving address changes..."})})]})}function Bg(){const{customer:o,isAuthenticated:a,logout:l,isLoading:c}=xn(),[p,f]=R.useState("overview"),[m,x]=R.useState(window.innerWidth<768);R.useEffect(()=>{!c&&!a&&Zt("/account/login")},[a,c]),R.useEffect(()=>{const j=()=>{x(window.innerWidth<768)};return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]);const S=()=>{l(),Zt("/account/login")};return c||!o?r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 16px",border:"3px solid #F9FAFB",borderTopColor:"#4338CA",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),r.jsx("style",{children:`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `})]})}):r.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD"},children:[r.jsx("div",{style:{backgroundColor:"#FFFFFF",borderBottom:"1px solid #EAECF0"},children:r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"32px 48px"},children:[r.jsx("h1",{style:{fontSize:m?"22px":"28px",lineHeight:m?"30px":"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:"My Account"}),r.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Welcome back, ",o.firstName]})]})}),m&&r.jsx(xd,{activeSection:p,onSectionChange:f,onLogout:S,isMobile:!0}),r.jsx("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"48px 48px"},children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:m?"1fr":"240px 1fr",gap:m?"0":"32px"},children:[!m&&r.jsx("div",{children:r.jsx(xd,{activeSection:p,onSectionChange:f,onLogout:S})}),r.jsxs("div",{children:[p==="overview"&&r.jsx(Ag,{customer:o}),p==="orders"&&r.jsx(Lg,{}),p==="addresses"&&r.jsx(Og,{})]})]})})]})}function $g(){return R.useCallback((o=[])=>Wm(o),[])}function Ug(){return R.useCallback((o,a)=>Vm(o,a),[])}function Hg(){return R.useCallback((o,a)=>qm(o,a),[])}function Wg(){return R.useCallback((o,a)=>Ym(o,a),[])}const Zd=R.createContext(null),Vg="IN".toUpperCase(),qg=o=>o.lines.edges.map(a=>{var c,p,f,m,x;const l=a.node;return{id:l.id,name:l.merchandise.product.title,variant:((c=l.merchandise.selectedOptions)==null?void 0:c.map(S=>`${S.name}: ${S.value}`).join(", "))||l.merchandise.title,price:Number.parseFloat(l.merchandise.price.amount),quantity:l.quantity,variantId:l.merchandise.id,imageUrl:((p=l.merchandise.image)==null?void 0:p.url)||((f=l.merchandise.product.featuredImage)==null?void 0:f.url),imageAlt:((m=l.merchandise.image)==null?void 0:m.altText)||((x=l.merchandise.product.featuredImage)==null?void 0:x.altText)||l.merchandise.product.title}});function Yg({children:o}){const[a,l]=R.useState([]),[c,p]=R.useState(!1),[f,m]=R.useState(null),[x,S]=R.useState(null),j=$g(),b=Ug(),h=Hg(),k=Wg(),I=R.useCallback(U=>{l(qg(U)),m(U.id),S(U.checkoutUrl),Gm(U.id)},[]);R.useEffect(()=>{let U=!1;return(async()=>{try{const te=Xm();if(te){const ee=await Qm(te);if(ee&&!U){I(ee);return}}const re=await j();U||I(re)}catch(te){U||console.error("Failed to initialize Shopify cart",te)}})(),()=>{U=!0}},[j,I]);const _=R.useMemo(()=>a.reduce((U,K)=>U+K.quantity,0),[a]),M=R.useMemo(()=>a.reduce((U,K)=>U+K.price*K.quantity,0),[a]),A={items:a,isDrawerOpen:c,cartCount:_,subtotal:M,total:M,checkoutUrl:x,addItem:async U=>{try{let K=f;if(!K){const ee=await j();I(ee),K=ee.id}const te=a.find(ee=>ee.variantId===U),re=te?await h(K,[{id:te.id,quantity:te.quantity+1}]):await b(K,[{merchandiseId:U,quantity:1}]);return I(re),p(!0),!0}catch(K){return console.error("Failed to add item to cart",K),!1}},checkout:async()=>{try{let U=f,K=x;if(!U){const re=await j();I(re),U=re.id,K=re.checkoutUrl}const te=await Km(U,{countryCode:Vg});I(te),window.location.href=te.checkoutUrl}catch(U){console.error("Failed to update buyer identity before checkout",U),window.location.href=latestCheckoutUrl||"/cart"}},openCartDrawer:()=>p(!0),closeCartDrawer:()=>p(!1),toggleCartDrawer:()=>p(U=>!U),incrementItem:U=>{if(!f)return;const K=a.find(te=>te.id===U);K&&h(f,[{id:K.id,quantity:K.quantity+1}]).then(I).catch(te=>{console.error("Failed to increment cart line",te)})},decrementItem:U=>{if(!f)return;const K=a.find(te=>te.id===U);if(K){if(K.quantity<=1){k(f,[K.id]).then(I).catch(te=>{console.error("Failed to decrement cart line",te)});return}h(f,[{id:K.id,quantity:K.quantity-1}]).then(I).catch(te=>{console.error("Failed to decrement cart line",te)})}},removeItem:U=>{f&&k(f,[U]).then(I).catch(K=>{console.error("Failed to remove cart line",K)})}};return r.jsx(Zd.Provider,{value:A,children:o})}function Vn(){const o=R.useContext(Zd);if(!o)throw new Error("useCart must be used within a CartProvider.");return o}function Oi(o){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(o)}var Qg=(o,a,l,c,p,f,m,x)=>{let S=document.documentElement,j=["light","dark"];function b(I){(Array.isArray(o)?o:[o]).forEach(_=>{let M=_==="class",A=M&&f?p.map(U=>f[U]||U):p;M?(S.classList.remove(...A),S.classList.add(f&&f[I]?f[I]:I)):S.setAttribute(_,I)}),h(I)}function h(I){x&&j.includes(I)&&(S.style.colorScheme=I)}function k(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(c)b(c);else try{let I=localStorage.getItem(a)||l,_=m&&I==="system"?k():I;b(_)}catch{}},vd=["light","dark"],ep="(prefers-color-scheme: dark)",Kg=typeof window>"u",Cl=R.createContext(void 0),Xg={setTheme:o=>{},themes:[]},bl=()=>{var o;return(o=R.useContext(Cl))!=null?o:Xg},Gg=o=>R.useContext(Cl)?R.createElement(R.Fragment,null,o.children):R.createElement(Zg,{...o}),Jg=["light","dark"],Zg=({forcedTheme:o,disableTransitionOnChange:a=!1,enableSystem:l=!0,enableColorScheme:c=!0,storageKey:p="theme",themes:f=Jg,defaultTheme:m=l?"system":"light",attribute:x="data-theme",value:S,children:j,nonce:b,scriptProps:h})=>{let[k,I]=R.useState(()=>tx(p,m)),[_,M]=R.useState(()=>k==="system"?il():k),A=S?Object.values(S):f,U=R.useCallback(ee=>{let ae=ee;if(!ae)return;ee==="system"&&l&&(ae=il());let ve=S?S[ae]:ae,Te=a?nx(b):null,Le=document.documentElement,Be=we=>{we==="class"?(Le.classList.remove(...A),ve&&Le.classList.add(ve)):we.startsWith("data-")&&(ve?Le.setAttribute(we,ve):Le.removeAttribute(we))};if(Array.isArray(x)?x.forEach(Be):Be(x),c){let we=vd.includes(m)?m:null,Ne=vd.includes(ae)?ae:we;Le.style.colorScheme=Ne}Te==null||Te()},[b]),K=R.useCallback(ee=>{let ae=typeof ee=="function"?ee(k):ee;I(ae);try{localStorage.setItem(p,ae)}catch{}},[k]),te=R.useCallback(ee=>{let ae=il(ee);M(ae),k==="system"&&l&&!o&&U("system")},[k,o]);R.useEffect(()=>{let ee=window.matchMedia(ep);return ee.addListener(te),te(ee),()=>ee.removeListener(te)},[te]),R.useEffect(()=>{let ee=ae=>{ae.key===p&&(ae.newValue?I(ae.newValue):K(m))};return window.addEventListener("storage",ee),()=>window.removeEventListener("storage",ee)},[K]),R.useEffect(()=>{U(o??k)},[o,k]);let re=R.useMemo(()=>({theme:k,setTheme:K,forcedTheme:o,resolvedTheme:k==="system"?_:k,themes:l?[...f,"system"]:f,systemTheme:l?_:void 0}),[k,K,o,_,l,f]);return R.createElement(Cl.Provider,{value:re},R.createElement(ex,{forcedTheme:o,storageKey:p,attribute:x,enableSystem:l,enableColorScheme:c,defaultTheme:m,value:S,themes:f,nonce:b,scriptProps:h}),j)},ex=R.memo(({forcedTheme:o,storageKey:a,attribute:l,enableSystem:c,enableColorScheme:p,defaultTheme:f,value:m,themes:x,nonce:S,scriptProps:j})=>{let b=JSON.stringify([l,a,f,o,x,m,c,p]).slice(1,-1);return R.createElement("script",{...j,suppressHydrationWarning:!0,nonce:typeof window>"u"?S:"",dangerouslySetInnerHTML:{__html:`(${Qg.toString()})(${b})`}})}),tx=(o,a)=>{if(Kg)return;let l;try{l=localStorage.getItem(o)||void 0}catch{}return l||a},nx=o=>{let a=document.createElement("style");return o&&a.setAttribute("nonce",o),a.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},il=o=>(o||(o=window.matchMedia(ep)),o.matches?"dark":"light");function rx(){const{customer:o,isAuthenticated:a}=xn(),{resolvedTheme:l,setTheme:c}=bl(),p=l==="dark",[f,m]=R.useState(!1),x=a?(o==null?void 0:o.firstName)||"Account":"Sign in",S=a?"/account":"/account/login";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .header-container {
          height: 72px;
          background-color: var(--background);
          border-bottom: 1px solid var(--border);
        }

        .header-inner {
          height: 72px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header-nav {
          display: flex;
          gap: 20px;
          flex: 1;
          justify-content: center;
        }

        .header-nav-link {
          color: var(--muted-foreground);
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.15s ease;
        }

        .header-nav-link:hover {
          color: var(--foreground);
        }

        .header-right {
          display: flex;
          gap: 16px;
        }

        .header-mobile-menu-btn {
          display: none;
        }

        .header-mobile-menu {
          display: none;
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .header-nav {
            gap: 16px;
          }

          .header-right {
            gap: 12px;
          }

          .theme-toggle-text {
            display: none;
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 640px) {
          .header-container {
            height: 64px;
          }

          .header-inner {
            height: 64px;
            gap: 12px;
          }

          .header-nav {
            display: none;
          }

          .header-account-btn {
            display: none;
          }

          .header-mobile-menu-btn {
            display: inline-flex;
            height: 36px;
            width: 36px;
            padding: 0;
            border-radius: 10px;
            background-color: transparent;
            color: var(--foreground);
            border: 1px solid var(--border);
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .header-mobile-menu {
            display: block;
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--background);
            z-index: 50;
            overflow-y: auto;
            padding: 24px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
          }

          .header-mobile-menu.open {
            transform: translateX(0);
          }

          .header-mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .header-mobile-nav-link {
            color: var(--foreground);
            font-size: 18px;
            line-height: 28px;
            font-weight: 600;
            text-decoration: none;
            padding: 12px 0;
            border-bottom: 1px solid var(--border);
          }

          .header-mobile-actions {
            margin-top: 32px;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .header-mobile-account-btn {
            height: 44px;
            padding: 0 16px;
            border-radius: 10px;
            background-color: transparent;
            color: var(--foreground);
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        }
      `}),r.jsxs("header",{className:"header-container",children:[r.jsx(he,{children:r.jsxs("div",{className:"header-inner",children:[r.jsx(ix,{isDark:p}),r.jsx(ox,{}),r.jsx(sx,{accountHref:S,accountLabel:x,isDark:p,onToggleTheme:()=>c(p?"light":"dark")}),r.jsx("button",{className:"header-mobile-menu-btn",onClick:()=>m(!f),"aria-label":"Toggle mobile menu",children:f?r.jsx(Sl,{size:20}):r.jsx(dg,{size:20})})]})}),r.jsxs("div",{className:`header-mobile-menu${f?" open":""}`,children:[r.jsxs("nav",{className:"header-mobile-nav",children:[r.jsx("a",{href:"/products",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Products"}),r.jsx("a",{href:"/philosophy",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Philosophy"}),r.jsx("a",{href:"/community",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Community"})]}),r.jsxs("div",{className:"header-mobile-actions",children:[r.jsx("a",{href:S,className:"header-mobile-account-btn",onClick:()=>m(!1),style:{textDecoration:"none"},children:x}),r.jsxs("button",{className:"header-mobile-account-btn",onClick:()=>c(p?"light":"dark"),children:[p?r.jsx(Xd,{size:20,style:{marginRight:"8px"}}):r.jsx(Kd,{size:20,style:{marginRight:"8px"}}),p?"Light Mode":"Dark Mode"]})]})]})]})]})}function ix({isDark:o}){return r.jsx(ax,{isDark:o})}function ox(){return r.jsx(ux,{})}function sx({accountHref:o,accountLabel:a,isDark:l,onToggleTheme:c}){return r.jsxs("div",{className:"header-right",children:[r.jsx(lx,{isDark:l,onToggleTheme:c}),r.jsx(cx,{href:o,label:a}),r.jsx(dx,{})]})}function ax({isDark:o}){return r.jsx(Nd,{size:32,variant:o?"light":"dark",showText:!0,href:"/"})}function lx({isDark:o,onToggleTheme:a}){return r.jsxs("button",{"aria-label":`Switch to ${o?"light":"dark"} mode`,onClick:a,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[o?r.jsx(Xd,{size:16}):r.jsx(Kd,{size:16}),r.jsx("span",{className:"theme-toggle-text",children:o?"Light":"Dark"})]})}function ux(){return r.jsxs("nav",{className:"header-nav",children:[r.jsx("a",{href:"/products",className:"header-nav-link",children:"Products"}),r.jsx("a",{href:"/philosophy",className:"header-nav-link",children:"Philosophy"}),r.jsx("a",{href:"/community",className:"header-nav-link",children:"Community"})]})}function cx({href:o,label:a}){return r.jsx("a",{href:o,className:"header-account-btn",style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer",textDecoration:"none"},children:a})}function dx(){const{cartCount:o,openCartDrawer:a}=Vn(),l=()=>{(window.location.pathname.replace(/\/+$/,"")||"/")!=="/cart"&&a()};return r.jsxs("div",{style:{position:"relative",display:"inline-flex"},children:[r.jsx(We,{label:"Cart",variant:"ghost",size:"sm",onClick:l}),r.jsx("div",{style:{position:"absolute",top:"-6px",right:"-8px",pointerEvents:"none",opacity:.78},children:r.jsx(st,{label:String(o),variant:"accent",size:"sm"})})]})}function je({children:o,direction:a="vertical",gap:l=16,align:c="stretch",justify:p="flex-start",style:f,responsiveDirection:m,responsiveGap:x}){const S=a==="horizontal"?"row":"column",j=typeof l=="number"?`${l}px`:l,b=m||x,h=b?`stack-${Math.random().toString(36).substr(2,9)}`:"";return r.jsxs(r.Fragment,{children:[b&&r.jsx("style",{children:`
          .${h} {
            display: flex;
            flex-direction: ${S};
            gap: ${j};
            align-items: ${c};
            justify-content: ${p};
          }

          /* Tablet breakpoint */
          @media (max-width: 1024px) {
            .${h} {
              ${m!=null&&m.tablet?`flex-direction: ${m.tablet==="horizontal"?"row":"column"};`:""}
              ${x!=null&&x.tablet?`gap: ${typeof x.tablet=="number"?`${x.tablet}px`:x.tablet};`:""}
            }
          }

          /* Mobile breakpoint */
          @media (max-width: 640px) {
            .${h} {
              ${m!=null&&m.mobile?`flex-direction: ${m.mobile==="horizontal"?"row":"column"};`:""}
              ${x!=null&&x.mobile?`gap: ${typeof x.mobile=="number"?`${x.mobile}px`:x.mobile};`:""}
            }
          }
        `}),r.jsx("div",{className:b?h:void 0,style:b?f:{display:"flex",flexDirection:S,gap:j,alignItems:c,justifyContent:p,...f},children:o})]})}function px(){const{resolvedTheme:o}=bl(),a=o==="dark";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .footer-container {
          background-color: var(--card);
          border-top: 1px solid var(--border);
          padding-top: 32px;
          padding-bottom: 24px;
        }

        .footer-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 32px;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-social {
          display: flex;
          gap: 16px;
        }

        .footer-social-btn {
          height: 36px;
          padding-left: 12px;
          padding-right: 12px;
          border-radius: 10px;
          background-color: transparent;
          color: var(--foreground);
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          border: none;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .footer-social-btn:hover {
          background-color: var(--accent);
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .footer-container {
            padding-top: 28px;
            padding-bottom: 20px;
          }

          .footer-top {
            gap: 24px;
          }

          .footer-social {
            gap: 12px;
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 640px) {
          .footer-container {
            padding-top: 24px;
            padding-bottom: 16px;
          }

          .footer-top {
            flex-direction: column;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column-reverse;
            gap: 24px;
            align-items: flex-start;
          }

          .footer-social {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }

          .footer-social-btn {
            width: 100%;
            justify-content: center;
            height: 44px;
            font-size: 16px;
            line-height: 24px;
          }
        }
      `}),r.jsx("footer",{className:"footer-container",children:r.jsx(he,{children:r.jsxs(je,{gap:"24px",children:[r.jsxs("div",{className:"footer-top",children:[r.jsx(fx,{}),r.jsx(mx,{})]}),r.jsxs("div",{className:"footer-bottom",children:[r.jsx(hx,{isDark:a}),r.jsx(gx,{})]})]})})})]})}function fx(){return r.jsxs(je,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Explore"}),r.jsxs(je,{gap:"10px",children:[r.jsx("a",{href:"#products",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Products"}),r.jsx("a",{href:"#philosophy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Philosophy"}),r.jsx("a",{href:"#community",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Community"}),r.jsx("a",{href:"/privacy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Privacy Policy"})]})]})}function mx(){return r.jsxs(je,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Standards"}),r.jsxs(je,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Curated for durability"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Reliable support"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Clear policies"})]})]})}function hx({isDark:o}){return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx(Nd,{size:24,variant:o?"light":"dark",showText:!1,href:"/"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:"© VIBE STATION"})]})}function gx(){return r.jsxs("div",{className:"footer-social",children:[r.jsx("button",{className:"footer-social-btn",children:"Instagram"}),r.jsx("button",{className:"footer-social-btn",children:"YouTube"}),r.jsx("button",{className:"footer-social-btn",children:"Email"})]})}function xx({children:o}){return r.jsxs(je,{gap:"0px",style:{minHeight:"100vh"},children:[r.jsx(yx,{}),r.jsx(vx,{children:o}),r.jsx(wx,{})]})}function yx(){return r.jsx(rx,{})}function vx({children:o}){return r.jsx(kx,{children:o})}function wx(){return r.jsx(px,{})}function kx({children:o}){return r.jsx("main",{style:{flex:1,backgroundColor:"var(--background)"},children:r.jsx(je,{gap:"0px",style:{height:"100%"},children:o})})}const jx={standard:{top:"56px",bottom:"56px"},dense:{top:"32px",bottom:"32px"}},Bi={canvas:{backgroundColor:"var(--surface-canvas, #FFFFFF)"},subtle:{backgroundColor:"var(--surface-subtle, #FCFCFD)"},inverse:{backgroundColor:"var(--surface-inverse, #101828)",color:"var(--text-inverse, #FFFFFF)"}};function Sx(o){if(!o||typeof o!="object"||!("type"in o))return!1;const a=o.type;return a===he||a===he.Wide||a===he.Standard||a===he.Narrow}function tp({children:o}){return r.jsx(r.Fragment,{children:o})}function Cx({children:o}){return r.jsx("div",{style:{paddingTop:"56px",paddingBottom:"56px"},children:o})}function bx({children:o}){return r.jsx("div",{style:{paddingTop:"32px",paddingBottom:"32px"},children:o})}function Ex({children:o}){return r.jsx("div",{style:Bi.canvas,children:o})}function Ix({children:o}){return r.jsx("div",{style:Bi.subtle,children:o})}function Tx({children:o}){return r.jsx("div",{style:Bi.inverse,children:o})}function Fx({children:o,className:a,padding:l="standard",variant:c="canvas",containerWidth:p="standard",contain:f=!0,paddingTop:m,paddingBottom:x,background:S}){const j=jx[l],b=m??j.top,h=x??j.bottom,k={...Bi[c],backgroundColor:S??Bi[c].backgroundColor},I=f&&!Sx(o);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .section-responsive {
          padding-top: ${b};
          padding-bottom: ${h};
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .section-responsive {
            padding-top: calc(${b} * 0.75);
            padding-bottom: calc(${h} * 0.75);
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 640px) {
          .section-responsive {
            padding-top: calc(${b} * 0.5);
            padding-bottom: calc(${h} * 0.5);
          }
        }
      `}),r.jsx("section",{className:`section-responsive ${a||""}`,style:k,children:r.jsx(tp,{children:I?r.jsx(he,{width:p,children:o}):o})})]})}const it=Object.assign(Fx,{SectionContainerSlot:tp,PaddingStandard:Cx,PaddingDense:bx,VariantCanvas:Ex,VariantSubtle:Ix,VariantInverse:Tx});function _x(){return r.jsx(it,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsxs(he,{children:[r.jsx(Rx,{}),r.jsx(Nx,{})]})})}function Rx(){return r.jsxs(je,{gap:"0px",style:{marginBottom:"24px"},children:[r.jsx(zx,{}),r.jsx(Ax,{})]})}function Nx(){return r.jsxs(je,{gap:"16px",children:[r.jsx(Px,{}),r.jsx(Lx,{}),r.jsx(Dx,{}),r.jsx(Mx,{}),r.jsx(Ox,{})]})}function zx(){return null}function Ax(){return null}function Px(){return null}function Lx(){return null}function Dx(){return null}function Mx(){return null}function Ox(){return null}function Bx(){return r.jsx(it,{paddingTop:"64px",paddingBottom:"80px",background:"var(--card)",children:r.jsxs(he,{children:[r.jsx($x,{}),r.jsx(Ux,{})]})})}function $x(){return r.jsx(je,{gap:"0px",style:{marginBottom:"24px"},children:r.jsx(Hx,{})})}function Ux(){return r.jsxs(je,{gap:"16px",children:[r.jsx(Wx,{}),r.jsx(Vx,{}),r.jsx(qx,{})]})}function Hx(){return null}function Wx(){return null}function Vx(){return null}function qx(){return null}const Yx={hero:null,heroMetaBadges:[],featuredDrop:null,socialProof:null};let as=Yx,ds=!1,bi=null;const Qx=async()=>bi||(bi=(async()=>{var o,a,l,c;try{const p=await Mi({first:6});if(p.edges.length===0){ds=!0;return}const f=p.edges.map(j=>j.node),m=f[0],x=hs(m),S=f.slice(0,3).map(j=>{var b,h;return{id:j.id,name:j.title,role:((b=j.featureLine)==null?void 0:b.value)||"Curated product",quote:((h=j.shortDescription)==null?void 0:h.value)||j.description||"Built for consistent daily use.",tag:j.tags[0]||"Curated"}});as={hero:{eyebrow:"Curated essentials for musicians",headline:"Gear that survives practice, travel, and stage.",supporting:"We research what musicians actually need, then pick durable, best-in-class tools with modern features so you buy once and keep playing.",primaryCta:"Shop products",secondaryCta:"Our philosophy",metaLine:"Fast delivery · Clear returns · Responsive support",featuredDropEyebrow:"Featured drop",featuredDropTitle:m.title,featuredDropSubtitle:((o=m.shortDescription)==null?void 0:o.value)||m.description||"",featuredDropImageUrl:(x==null?void 0:x.url)||"",featuredDropImageAlt:(x==null?void 0:x.altText)||m.title},featuredDrop:{eyebrow:"Featured drop",title:"Best-in-class essentials, chosen to last.",supporting:"One product at a time. Thorough research. Durable materials. Modern features that matter in real practice and gig conditions.",badges:["Durable build","Fast + accurate","Stage-ready"],primaryCta:"View featured",secondaryCta:"See all products",productName:m.title,productPrice:new Intl.NumberFormat("en-IN",{style:"currency",currency:m.priceRange.minVariantPrice.currencyCode,maximumFractionDigits:0}).format(Number.parseFloat(m.priceRange.minVariantPrice.amount)),productCopy:((a=m.shortDescription)==null?void 0:a.value)||m.description||"",featureLine:((l=m.featureLine)==null?void 0:l.value)||"",productBadge:((c=m.badge)==null?void 0:c.value)||m.tags[0]||"",productImageUrl:(x==null?void 0:x.url)||"",productImageAlt:(x==null?void 0:x.altText)||m.title},heroMetaBadges:["Curated for durability","Modern features","Clear policies"],socialProof:{eyebrow:"What musicians notice",title:"Built for real use — not shelf appeal.",supporting:"Feedback that focuses on durability, clarity, and daily reliability.",chips:m.tags.slice(0,4),testimonials:S,ctaLabel:"Explore products"}}}catch(p){console.error("Failed to load home data from Shopify",p)}finally{ds=!0,bi=null}})(),bi);function Ui(){const[o,a]=R.useState(as),[l,c]=R.useState(!ds);return R.useEffect(()=>{let p=!1;return ds?(a(as),c(!1),()=>{p=!0}):(Qx().then(()=>{p||(a(as),c(!1))}),()=>{p=!0})},[]),{...o,isLoading:l}}function Kx(){const{hero:o}=Ui();return o?r.jsx(it,{contain:!1,paddingTop:"56px",paddingBottom:"48px",background:"var(--card)",children:r.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:"-200px",right:"-200px",width:"600px",height:"600px",backgroundColor:"#4F46E50F",borderRadius:"50%",filter:"blur(120px)",pointerEvents:"none",zIndex:0}}),r.jsx(he,{width:"wide",className:"relative z-[1]",children:r.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"64px",alignItems:"center"},children:[r.jsx("div",{style:{flex:"0 0 55%"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),r.jsx("h1",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"48px",lineHeight:"56px",fontWeight:"600",color:"var(--foreground)",letterSpacing:"-0.01em",margin:0},children:o.headline}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"540px",margin:0},children:o.supporting}),r.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[r.jsx(Xx,{label:o.primaryCta}),r.jsx(Gx,{label:o.secondaryCta})]}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",marginTop:"8px"},children:o.metaLine})]})}),r.jsx("div",{style:{flex:"0 0 45%",position:"relative"},children:r.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"480px",height:"420px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[r.jsx("div",{style:{backgroundColor:"var(--muted)",height:"280px",width:"100%"},children:o.featuredDropImageUrl?r.jsx("img",{src:o.featuredDropImageUrl,alt:o.featuredDropImageAlt||o.featuredDropTitle,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{padding:"20px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.featuredDropEyebrow}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.featuredDropTitle}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:o.featuredDropSubtitle})]})})]})})]})})]})}):null}function Xx({label:o}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function Gx({label:o}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function np({children:o,wrap:a="on",gap:l=12,align:c="center",justify:p="flex-start",style:f,responsiveGap:m}){const x=typeof l=="number"?`${l}px`:l,S=!!m,j=S?`cluster-${Math.random().toString(36).substr(2,9)}`:"";return r.jsxs(r.Fragment,{children:[S&&r.jsx("style",{children:`
          .${j} {
            display: flex;
            flex-direction: row;
            flex-wrap: ${a==="on"?"wrap":"nowrap"};
            gap: ${x};
            align-items: ${c};
            justify-content: ${p};
          }

          /* Tablet breakpoint */
          @media (max-width: 1024px) {
            .${j} {
              ${m!=null&&m.tablet?`gap: ${typeof m.tablet=="number"?`${m.tablet}px`:m.tablet};`:""}
            }
          }

          /* Mobile breakpoint */
          @media (max-width: 640px) {
            .${j} {
              ${m!=null&&m.mobile?`gap: ${typeof m.mobile=="number"?`${m.mobile}px`:m.mobile};`:""}
            }
          }
        `}),r.jsx("div",{className:S?j:void 0,style:S?f:{display:"flex",flexDirection:"row",flexWrap:a==="on"?"wrap":"nowrap",gap:x,alignItems:c,justifyContent:p,...f},children:o})]})}function Jx(){const{heroMetaBadges:o}=Ui();return o.length===0?null:r.jsx(it,{contain:!1,paddingTop:"24px",paddingBottom:"24px",background:"var(--card)",children:r.jsx(he,{width:"wide",children:r.jsx(np,{wrap:"on",gap:12,align:"center",children:o.map(a=>r.jsx(st,{label:a,variant:"neutral",size:"md"},a))})})})}function Zx(){const{featuredDrop:o}=Ui();return o?r.jsx(it,{paddingTop:"56px",paddingBottom:"56px",background:"var(--background)",children:r.jsx(he,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"48px",alignItems:"flex-start"},children:[r.jsx("div",{style:{flex:"0 0 45%"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),r.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.title}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"480px",margin:0},children:o.supporting}),r.jsx("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:o.badges.map(a=>r.jsx(st,{label:a,variant:"neutral",size:"md"},a))}),r.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[r.jsx(ey,{label:o.primaryCta}),r.jsx(ty,{label:o.secondaryCta})]})]})}),r.jsx("div",{style:{flex:"0 0 55%"},children:r.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"560px",height:"360px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[r.jsx("div",{style:{backgroundColor:"var(--muted)",height:"200px",width:"100%"},children:o.productImageUrl?r.jsx("img",{src:o.productImageUrl,alt:o.productImageAlt||o.productName,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{padding:"16px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.productName}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.productPrice})]}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:o.productCopy}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:o.featureLine}),r.jsx("div",{style:{marginTop:"2px"},children:r.jsx(st,{label:o.productBadge,variant:"accent",size:"sm"})})]})})]})})]})})}):null}function ey({label:o}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function ty({label:o}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function ny(){return null}function ry(){return null}function iy(){return null}function oy(){return null}function sy(){const{socialProof:o}=Ui();return o?r.jsx(it,{paddingTop:"56px",paddingBottom:"56px",background:"var(--card)",children:r.jsxs(he,{children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"24px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),r.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.title}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:o.supporting})]}),r.jsx("div",{style:{display:"flex",gap:"12px",marginBottom:"32px"},children:o.chips.map(a=>r.jsx(st,{label:a,variant:"neutral",size:"md"},a))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"32px"},children:o.testimonials.map(a=>r.jsx("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"220px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",padding:"20px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)"},children:a.name}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:a.role})]}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,flex:1},children:a.quote}),r.jsx("div",{children:r.jsx(st,{label:a.tag,variant:"neutral",size:"sm"})})]})},a.id))}),r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx(ay,{label:o.ctaLabel})})]})}):null}function ay({label:o}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function ly(){return null}function uy(){return null}function cy(){return null}function xe({width:o="100%",height:a="16px",borderRadius:l="8px",style:c,...p}){const f={width:o,height:a,borderRadius:l,background:"linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 37%, var(--skeleton-base) 63%)",backgroundSize:"400% 100%",animation:"vs-skeleton-shimmer 1.2s ease-in-out infinite"};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        @keyframes vs-skeleton-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `}),r.jsx("div",{"aria-hidden":"true",style:{...f,...c},...p})]})}function dy(){return r.jsxs(je,{gap:"0px",children:[r.jsx(it,{paddingTop:"56px",paddingBottom:"48px",background:"var(--background)",children:r.jsx(he,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:"48px"},children:[r.jsxs(je,{gap:"16px",children:[r.jsx(xe,{width:"140px",height:"14px"}),r.jsx(xe,{width:"88%",height:"56px",borderRadius:"12px"}),r.jsx(xe,{width:"92%",height:"24px"}),r.jsx(xe,{width:"80%",height:"24px"}),r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(xe,{width:"136px",height:"44px",borderRadius:"12px"}),r.jsx(xe,{width:"136px",height:"44px",borderRadius:"12px"})]})]}),r.jsx(xe,{width:"100%",height:"420px",borderRadius:"16px"})]})})}),r.jsx(it,{paddingTop:"48px",paddingBottom:"56px",background:"var(--background)",children:r.jsx(he,{children:r.jsxs(je,{gap:"16px",children:[r.jsx(xe,{width:"180px",height:"18px"}),r.jsx(xe,{width:"56%",height:"32px"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(o=>r.jsx(xe,{height:"240px",borderRadius:"16px"},o))})]})})})]})}function py(){return r.jsx(it,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsx(he,{children:r.jsxs(je,{gap:"16px",children:[r.jsx(xe,{width:"96px",height:"14px"}),r.jsx(xe,{width:"180px",height:"40px"}),r.jsx(xe,{width:"420px",height:"24px"}),r.jsx(xe,{width:"100%",height:"44px",borderRadius:"12px"}),r.jsx("div",{style:{display:"flex",gap:"12px"},children:[1,2,3,4].map(o=>r.jsx(xe,{width:"112px",height:"36px",borderRadius:"999px"},o))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3,4,5,6].map(o=>r.jsx(xe,{height:"460px",borderRadius:"16px"},o))})]})})})}function fy(){return r.jsxs(je,{gap:"0px",children:[r.jsx(it,{paddingTop:"24px",paddingBottom:"16px",background:"var(--card)",children:r.jsx(he,{children:r.jsx(xe,{width:"280px",height:"16px"})})}),r.jsx(it,{paddingTop:"16px",paddingBottom:"32px",background:"var(--card)",children:r.jsx(he,{children:r.jsxs(je,{gap:"12px",children:[r.jsx(xe,{width:"120px",height:"14px"}),r.jsx(xe,{width:"52%",height:"36px"}),r.jsx(xe,{width:"72%",height:"22px"})]})})}),r.jsx(it,{paddingTop:"24px",paddingBottom:"48px",background:"var(--background)",children:r.jsx(he,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 420px",gap:"48px"},children:[r.jsx(xe,{width:"100%",height:"560px",borderRadius:"16px"}),r.jsx(xe,{width:"100%",height:"560px",borderRadius:"16px"})]})})}),r.jsx(it,{paddingTop:"48px",paddingBottom:"56px",background:"var(--card)",children:r.jsx(he,{children:r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(o=>r.jsx(xe,{height:"220px",borderRadius:"16px"},o))})})})]})}function my(){return r.jsx(it,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:r.jsx(he,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.8fr 1fr",gap:"24px",alignItems:"start"},children:[r.jsxs(je,{gap:"20px",children:[r.jsx(xe,{width:"180px",height:"38px"}),[1,2].map(o=>r.jsx(xe,{width:"100%",height:"164px",borderRadius:"16px"},o)),r.jsx(xe,{width:"100%",height:"300px",borderRadius:"16px"})]}),r.jsxs(je,{gap:"12px",children:[r.jsx(xe,{width:"100%",height:"260px",borderRadius:"16px"}),r.jsx(xe,{width:"100%",height:"48px",borderRadius:"12px"}),r.jsx(xe,{width:"100%",height:"48px",borderRadius:"12px"})]})]})})})}function hy(){const{isLoading:o}=Ui();return o?r.jsx(dy,{}):r.jsxs(r.Fragment,{children:[r.jsx(gy,{}),r.jsx(xy,{})]})}function gy(){return r.jsxs(je,{gap:"0px",children:[r.jsx(Kx,{}),r.jsx(Jx,{})]})}function xy(){return r.jsxs(je,{gap:"0px",children:[r.jsx(Zx,{}),r.jsx(ny,{}),r.jsx(ry,{}),r.jsx(iy,{}),r.jsx(oy,{}),r.jsx(sy,{}),r.jsx(ly,{}),r.jsx(uy,{}),r.jsx(cy,{})]})}function yy(){return r.jsx(it,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsxs(he,{children:[r.jsx(vy,{}),r.jsx(wy,{})]})})}function vy(){return r.jsxs(je,{gap:"0px",style:{marginBottom:"24px"},children:[r.jsx(ky,{}),r.jsx(jy,{})]})}function wy(){return r.jsxs(je,{gap:"16px",children:[r.jsx(Sy,{}),r.jsx(Cy,{}),r.jsx(by,{}),r.jsx(Ey,{}),r.jsx(Iy,{}),r.jsx(Ty,{}),r.jsx(Fy,{}),r.jsx(_y,{})]})}function ky(){return null}function jy(){return null}function Sy(){return null}function Cy(){return null}function by(){return null}function Ey(){return null}function Iy(){return null}function Ty(){return null}function Fy(){return null}function _y(){return null}const Ry="http://localhost:3001",is="/api/shopify/admin/product-metadata",Ny=o=>`${(is.startsWith("http://")||is.startsWith("https://")?is:`${Ry.replace(/\/+$/,"")}/${is.replace(/^\/+/,"")}`).replace(/\/+$/,"")}/${encodeURIComponent(o)}`;async function zy(o){const a=await fetch(Ny(o),{method:"GET",credentials:"include"});if(!a.ok)throw a.status===429?new Re("Rate limit exceeded","RATE_LIMIT"):new Re(`HTTP ${a.status}`,"HTTP_ERROR");return(await a.json()).product??null}const Ar={productHeader:{badge:"",title:"",vendor:"",sku:"",shareUrl:"",shareLabel:""},productMain:{gallery:{images:[],zoomLabel:"",prevLabel:"",nextLabel:""},buyBox:{variantId:null,badge:"",name:"",descriptor:"",price:"",compareAtPrice:null,stock:"",isInStock:!1,features:[],reassurancePoints:[],primaryCta:"Add to cart",secondaryCta:"Buy now",microLine:"",inBoxTitle:"",inBoxLine:""}},keyBenefits:{title:"",cards:[]},featureDeepDive:{overviewTitle:"",overviewHtml:"",storyTitle:"",storyHtml:"",buyingGuideTitle:"",buyingGuideHtml:"",curatedFor:"",notFor:""},deliveryAndReturns:[],reviews:{title:"",supporting:"",averageLabel:"",averageValue:"",totalReviewsLabel:"",verifiedLabel:"",useCasePrefix:"",writeReviewLabel:"Write a review",loadMoreLabel:"Load more",breakdown:[],tags:[],items:[]},relatedProducts:{title:"Complete your setup",viewAllLabel:"View all",addToCartLabel:"Add to cart",items:[]},specsAndInBox:{specificationsTitle:"",specifications:[],inBoxTitle:"",inBoxItems:[],inBoxBadge:"",productDetailsTitle:"",productDetails:[]},faq:{title:"",items:[]},stickyCtaRail:{variantId:null,name:"",price:"",stockLabel:"",isInStock:!1,shippingLabel:"",reassurancePoints:[],addToCartLabel:"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}},ls="all",Ay="All",rp=o=>o.trim().toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),Py="https://thevibestation.com".replace(/\/+$/,""),Ly=["capo","tuner","string","pick","holder","gig bag","bundle","essentials"],ip=o=>{var l,c,p,f;const a=(c=(l=o.variants)==null?void 0:l.edges.find(m=>{const x=m.node;return x.availableForSale&&(typeof x.quantityAvailable!="number"||x.quantityAvailable>0)}))==null?void 0:c.node;return(a==null?void 0:a.id)||((f=(p=o.variants)==null?void 0:p.edges[0])==null?void 0:f.node.id)||null},op=o=>{var a,l;return((l=(a=o.variants)==null?void 0:a.edges[0])==null?void 0:l.node)??null},us=(o,a)=>{if(!o||!a)return"₹—";const l=Number.parseFloat(o);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:a,maximumFractionDigits:0}).format(l):`${a} ${o}`},Lr=o=>o?o.replace(/<br\s*\/?>/gi,`
`).replace(/<\/(p|div|li|h[1-6])>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").trim():"",fn=o=>o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),hn=o=>o?o.replace(/\r\n?/g,`
`).replace(/\\r\\n|\\r/g,`
`).replace(/\\n/g,`
`).replace(/\\t/g," ").replace(/&nbsp;/gi," ").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim():"",ps=o=>o.replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,a=>a.toUpperCase()),Dy=o=>/taxonomy\s*reference/i.test(o),My=o=>o.split(">").map(a=>a.trim()).filter(Boolean).at(-1)||o.trim(),os=(o,a)=>{const l=hn(a).replace(/\s*\n+\s*/g," ").replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim();return l?/^label$/i.test(o)?l:/^color$/i.test(o)?`(${l})`:l:""},wd=o=>o.replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*\|\s*/g," | ").replace(/\s*,\s*\|/g," |").replace(/\|\s*,\s*/g,"| ").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim(),Oy=o=>{var f;const a=o.fields.filter(m=>m.value&&m.value.trim().length>0&&!Dy(m.key));if(a.length===0)return((f=o.displayName)==null?void 0:f.trim())||"";const l=a.find(m=>/^label$/i.test(m.key)),c=a.find(m=>/^color$/i.test(m.key)),p=a.filter(m=>!/^label$/i.test(m.key)&&!/^color$/i.test(m.key));if(l){const m=[os(l.key,l.value??""),...c?[os(c.key,c.value??"")]:[]].filter(Boolean);if(p.length===0&&m.length>0)return m.join(" ");const x=p.map(S=>os(S.key,S.value??"")).filter(Boolean);return[...m,...x].join(", ")}return a.map(m=>os(m.key,m.value??"")).filter(Boolean).join(", ")},By=o=>hn(o).replace(/<br\s*\/?>/gi,`
`).split(`
`).map(a=>Lr(a).trim()).filter(Boolean),ol=o=>By(o).map(a=>{const l=a.match(/^([^:]+):\s*(.+)$/);return l?{label:ps(l[1]),value:hn(l[2]).replace(/\s*\n+\s*/g," ").trim()}:null}).filter(a=>!!a&&a.value.length>0),kd=o=>{const a=hn(o);return a?a.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(c=>c.trim()).filter(Boolean).map(c=>{const p=c.split(`
`).map(S=>Lr(S).trim()).filter(Boolean);if(p.length===0)return"";if(p.length>1&&p[0].endsWith(":")){const S=`<p><strong>${fn(p[0])}</strong></p>`,j=p.slice(1).map(b=>`<li>${fn(b)}</li>`).join("");return j?`${S}<ul>${j}</ul>`:S}const f=[];let m=[];const x=()=>{m.length!==0&&(f.push(`<p>${fn(m.join(" "))}</p>`),m=[])};return p.forEach(S=>{const j=S.match(/^([^:]{1,60}):\s*(.+)$/);if(j){x(),f.push(`<p><strong>${fn(j[1].trim())}:</strong> ${fn(j[2].trim())}</p>`);return}m.push(S)}),x(),f.join("")}).join(""):""},$y=o=>{const a=o.trim();return a.startsWith("[")||a.includes("•")||a.includes("|")},sp=o=>{const a=typeof o.type=="string"?o.type:"",l=typeof o.value=="string"?fn(o.value):"",c=Array.isArray(o.children)?o.children.map(p=>p&&typeof p=="object"?sp(p):"").join(""):"";switch(a){case"root":return c;case"paragraph":return`<p>${c}</p>`;case"heading":return`<h3>${c}</h3>`;case"text":return l;case"text_bold":return`<strong>${c||l}</strong>`;case"text_italic":return`<em>${c||l}</em>`;case"list":return`<ul>${c}</ul>`;case"list-item":return`<li>${c}</li>`;case"link":return typeof o.url=="string"?`<a href="${fn(o.url)}">${c}</a>`:c;default:return c||l}},sl=o=>{if(!o)return"";const a=hn(o);if($y(a)){const l=fs(a);if(l.length>0)return`<ul>${l.map(c=>`<li>${fn(c)}</li>`).join("")}</ul>`}if(a.includes("<"))return a;try{const l=JSON.parse(a);if(l&&typeof l=="object")return sp(l)}catch{return kd(a)}return kd(a)},fs=o=>{const a=hn(o);if(!a)return[];const l=c=>c.replace(/<br\s*\/?>/gi,`
`).split(/\n|,|\||•/).map(p=>Lr(p).trim()).filter(Boolean);try{const c=JSON.parse(a);if(Array.isArray(c))return c.flatMap(p=>typeof p=="string"?l(p):[]).filter(Boolean);if(typeof c=="string")return l(c)}catch{return l(a)}return[]},Uy=o=>{const a=hn(o);if(!a)return[];try{const l=JSON.parse(a);if(l&&typeof l=="object"&&!Array.isArray(l)){const c=Object.entries(l).flatMap(([p,f])=>{const m=ol(`${ps(p)}: ${String(f)}`);return m.length>0?m:[{label:ps(p),value:hn(String(f)).replace(/\s*\n+\s*/g," ").trim()}]}).filter(p=>p.value.length>0);if(c.length>0)return c}}catch{return ol(a)}return ol(a)},Hy=o=>{if(!o)return[];try{const a=JSON.parse(o);if(Array.isArray(a))return a.map(l=>{if(!l||typeof l!="object")return null;const c=l,p=typeof c.question=="string"?c.question.trim():"",f=typeof c.answer=="string"?c.answer.trim():"";return p&&f?{question:p,answer:f}:null}).filter(l=>!!l)}catch{return o.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(l=>Lr(l)).filter(Boolean).map(l=>{const[c,...p]=l.split(`
`),f=p.join(" ").trim();return!c||!f?null:{question:c.replace(/^Q[:\-]?\s*/i,""),answer:f.replace(/^A[:\-]?\s*/i,"")}}).filter(l=>!!l)}return[]},pl=(o,a="Yes",l="No")=>{if(!o)return"";const c=o.trim().toLowerCase();return["true","yes","available","1"].includes(c)?a:["false","no","not available","0"].includes(c)?l:o.trim()},ap=()=>{if(typeof window>"u")return null;const o=window.location.pathname.match(/\/products\/([^/]+)/);return(o==null?void 0:o[1])??null},lp=o=>`${Py}/products/${o.handle}`,Wy=o=>{var c;if(o.availableForSale===!1)return"Out of stock";if(typeof o.totalInventory=="number")return o.totalInventory>0?`In stock (${o.totalInventory} available)`:"Out of stock";const a=op(o);return a&&typeof a.quantityAvailable=="number"?a.quantityAvailable>0?`In stock (${a.quantityAvailable} available)`:"Out of stock":((c=o.variants)==null?void 0:c.edges.some(p=>{const f=p.node;return f.availableForSale===!1?!1:typeof f.quantityAvailable=="number"?f.quantityAvailable>0:f.availableForSale===!0}))?"In stock":"Out of stock"},Vy=o=>{var l;return fs((l=o.whyDifferent)==null?void 0:l.value).slice(0,3).map((c,p)=>({id:`${o.handle}-feature-${p}`,badge:`0${p+1}`,title:c,description:"",footer:""}))},qy=o=>{const a=`${o.title} ${o.tags.join(" ")}`.toLowerCase();return Ly.some(l=>a.includes(l))?"Pair it with these":"Complete your setup"},Yy=o=>{var c;const a={averageValue:"—",totalReviewsLabel:"No reviews yet",breakdown:[],tags:[],items:[]},l=(c=o.reviewSummary)==null?void 0:c.value;if(!l)return a;try{const p=JSON.parse(l),f=typeof p.average=="number"?p.average.toFixed(1):"—",m=typeof p.count=="number"?p.count:0,x=Array.isArray(p.breakdown)?p.breakdown:[],S=Array.isArray(p.items)?p.items:[],j=Array.isArray(p.tags)?p.tags:[];return{averageValue:f,totalReviewsLabel:`${m} review${m===1?"":"s"}`,breakdown:x.map(b=>{if(!b||typeof b!="object")return null;const h=b,k=typeof h.stars=="number"?h.stars:0,I=typeof h.count=="number"?h.count:0;return k>0?{stars:k,count:I,label:`${k} star`}:null}).filter(b=>!!b).sort((b,h)=>h.stars-b.stars),tags:j.filter(b=>typeof b=="string"),items:S.map((b,h)=>{if(!b||typeof b!="object")return null;const k=b;return{id:typeof k.id=="string"?k.id:`review-${h}`,name:typeof k.name=="string"?k.name:"Verified buyer",role:typeof k.role=="string"?k.role:"Customer",quote:typeof k.quote=="string"?k.quote:"",useCase:typeof k.useCase=="string"?k.useCase:"General use",rating:typeof k.rating=="number"?k.rating:5,tags:Array.isArray(k.tags)?k.tags.filter(I=>typeof I=="string"):[],verified:k.verified!==!1}}).filter(b=>!!b&&b.quote.length>0)}}catch{return a}},Qy=o=>{var l,c,p,f,m,x,S;const a=[(l=o.packCount)==null?void 0:l.value,(c=o.bestFor)==null?void 0:c.value,(p=o.dispatchTime)==null?void 0:p.value,(f=o.deliveryWindow)==null?void 0:f.value,(m=o.returnsPolicy)==null?void 0:m.value,pl((x=o.codAvailable)==null?void 0:x.value,"COD available","COD unavailable"),pl((S=o.secureCheckout)==null?void 0:S.value,"Secure checkout","")].map(j=>j==null?void 0:j.trim()).filter(j=>!!j);return Array.from(new Set(a)).slice(0,6)},Ky=o=>{var l,c,p;const a=op(o);return[{label:"SKU",value:(a==null?void 0:a.sku)||"Available on request"},{label:"Brand",value:o.vendor||"Vibe Station"},{label:"Country of origin",value:((l=o.countryOfOrigin)==null?void 0:l.value)||""},{label:"GST invoice",value:pl((c=o.gstInvoice)==null?void 0:c.value,"Available","Not specified")||"Not specified"},{label:"Care / storage",value:Lr((p=o.careInstructions)==null?void 0:p.value)},{label:"Shareable short URL",value:lp(o)}].filter(f=>f.value.trim().length>0)},up=o=>{const a=o==null?void 0:o.trim();if(!a)return[];try{const l=JSON.parse(a);if(Array.isArray(l))return l.map(c=>typeof c=="string"?c.trim():"").filter(c=>c.length>0)}catch{}return a.split(/[\n,]+/).map(l=>l.trim()).filter(Boolean)},jd=o=>{var a;return Array.from(new Set([...up((a=o.categories)==null?void 0:a.value),...o.tags.map(l=>l.trim()).filter(Boolean)]))},Sd=o=>o.map(a=>rp(a)).filter(Boolean),Xy=async o=>{const a=jd(o),l=new Set(Sd(a)),c=new Set(a.map(f=>f.toLowerCase()));return l.size===0&&c.size===0?[]:(await Mi({first:50})).edges.map(f=>f.node).filter(f=>f.id!==o.id).map(f=>{const m=jd(f),x=Sd(m),S=m.filter(b=>c.has(b.toLowerCase())).length,j=x.filter(b=>l.has(b)).length;return{candidate:f,score:S+j}}).filter(f=>f.score>0).sort((f,m)=>m.score-f.score).slice(0,20).map(f=>f.candidate)},Gy=o=>(o??[]).flatMap(a=>{const l=ps(a.key),c=a.reference?[a.reference]:[],p=Array.isArray(a.references)?a.references:[],f=[...c,...p].map(S=>Oy(S)).filter(Boolean),m=wd(hn(a.value).replace(/\s*\n+\s*/g," ").trim()),x=wd(f.length>0?f.join(" | "):m);return x.length>0?[{label:l,value:x}]:[]}),Jy=(o,a)=>{var S,j,b,h;const l=Uy((S=o.specifications)==null?void 0:S.value),c=up((j=o.categories)==null?void 0:j.value),p=((b=a==null?void 0:a.category)==null?void 0:b.fullName)||((h=a==null?void 0:a.category)==null?void 0:h.name)||"",f=Array.from(new Set([...c,...p?[p]:[]].map(k=>My(k)).filter(Boolean))),m=f.length>0?[{label:"Category",value:f.join(", ")}]:[],x=Gy(a==null?void 0:a.shopifyMetafields);return[...m,...x,...l].filter((k,I,_)=>{const M=`${k.label.toLowerCase()}::${k.value.toLowerCase()}`;return _.findIndex(A=>`${A.label.toLowerCase()}::${A.value.toLowerCase()}`===M)===I})},Zy=(o,a)=>a.filter(l=>l.id!==o.id&&l.handle!==o.handle).slice(0,6).map(l=>{var p,f,m;const c=hs(l);return{id:l.handle,variantId:ip(l),badge:((p=l.badge)==null?void 0:p.value)||l.tags[0]||"Curated",name:l.title,descriptor:((f=l.shortDescription)==null?void 0:f.value)||l.description||"Curated recommendation",featureLine:((m=l.featureLine)==null?void 0:m.value)||l.tags.slice(0,3).join(" · ")||"Pairs well with this setup",price:us(l.priceRange.minVariantPrice.amount,l.priceRange.minVariantPrice.currencyCode),imageUrl:c==null?void 0:c.url,imageAlt:(c==null?void 0:c.altText)||l.title}}),e0=()=>Ar.reviews,t0=({product:o,adminMetadata:a,relatedProducts:l})=>{var U,K,te,re,ee,ae,ve,Te,Le,Be,we,Ne,ze,Ke,be,ne,ce,D,V,B,v,F,H,G,oe,X,de,le,pe,Ae,en,yn;const c=((K=(U=o.variants)==null?void 0:U.edges[0])==null?void 0:K.node)??null,p=sl((te=o.whyDifferent)==null?void 0:te.value),f=sl((re=o.buyingGuide)==null?void 0:re.value),m=sl(o.description)||o.descriptionHtml||`<p>${fn(o.description)}</p>`,x=Jy(o,a),S=fs((ee=o.whatsInBox)==null?void 0:ee.value),j=fs((ae=o.bulletFeatures)==null?void 0:ae.value),b=Vy(o),h=Wy(o),k=h.toLowerCase().startsWith("in stock"),I=ip(o),_=Yy(o),M=Qy(o),A=lp(o);return{productHeader:{badge:((ve=o.badge)==null?void 0:ve.value)||"Curated pick",title:o.title,vendor:o.vendor||"Vibe Station",sku:(c==null?void 0:c.sku)||"—",shareUrl:A,shareLabel:"Shareable short URL"},productMain:{gallery:{images:o.images.edges.map((kt,qt)=>({id:kt.node.id||`${o.handle}-${qt}`,url:kt.node.url,altText:kt.node.altText||`${o.title} image ${qt+1}`}))||[],zoomLabel:"Zoom",prevLabel:"Prev",nextLabel:"Next"},buyBox:{variantId:I,badge:((Te=o.badge)==null?void 0:Te.value)||"Curated pick",name:o.title,descriptor:((Le=o.subtitle)==null?void 0:Le.value)||((Be=o.shortDescription)==null?void 0:Be.value)||Lr(o.descriptionHtml)||o.description,price:us(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),compareAtPrice:(we=o.compareAtPriceRange)!=null&&we.minVariantPrice?us(o.compareAtPriceRange.minVariantPrice.amount,o.compareAtPriceRange.minVariantPrice.currencyCode):null,stock:h,isInStock:k,features:j,reassurancePoints:M,primaryCta:((Ne=o.ctaLabel)==null?void 0:Ne.value)||"Add to cart",secondaryCta:((ze=o.ctaSubtext)==null?void 0:ze.value)||"Buy now",microLine:((Ke=o.shippingInfo)==null?void 0:Ke.value)||[(be=o.dispatchTime)==null?void 0:be.value,(ne=o.supportResponseTime)==null?void 0:ne.value,(ce=o.deliveryWindow)==null?void 0:ce.value].filter(Boolean).join(" · ")||"Shipping calculated at checkout · Clear returns · Responsive support",inBoxTitle:"What's in the box",inBoxLine:S.join(" · ")}},keyBenefits:{title:"Why it feels different",cards:b},featureDeepDive:{overviewTitle:"Product overview",overviewHtml:m,storyTitle:"Why this made the cut",storyHtml:p,buyingGuideTitle:"Buying guide",buyingGuideHtml:f,curatedFor:((D=o.curatedFor)==null?void 0:D.value)||((V=o.bestFor)==null?void 0:V.value)||"Players comparing feel, grip, and attack quickly.",notFor:((B=o.notFor)==null?void 0:B.value)||"Players who already know they only want one exact gauge."},deliveryAndReturns:[{id:"dispatch",badge:"Dispatch",title:"Estimated dispatch",description:((v=o.deliveryInfo)==null?void 0:v.value)||"",footer:((F=o.deliveryWindow)==null?void 0:F.value)||""},{id:"returns",badge:"Returns",title:"Returns & replacements",description:((H=o.returnsPolicy)==null?void 0:H.value)||"",footer:((G=o.replacementPolicy)==null?void 0:G.value)||""},{id:"support",badge:"Support",title:"Support response",description:((oe=o.supportInfo)==null?void 0:oe.value)||"",footer:((X=o.supportResponseTime)==null?void 0:X.value)||""}].filter(kt=>kt.description.trim().length>0||kt.footer.trim().length>0),reviews:{...e0(),supporting:(de=o.reviewSummary)!=null&&de.value?"Real review summary pulled from Shopify metafields.":"Add custom.reviews in Shopify to populate rating, review count, tags, and breakdown.",averageLabel:_.averageValue==="—"?"No rating yet":`${_.averageValue} / 5`,averageValue:_.averageValue,totalReviewsLabel:_.totalReviewsLabel,breakdown:_.breakdown,tags:_.tags,items:_.items},relatedProducts:{...Ar.relatedProducts,title:qy(o),items:Zy(o,l)},specsAndInBox:{specificationsTitle:"Specifications",specifications:x,inBoxTitle:"In the box",inBoxItems:S,inBoxBadge:((le=o.packCount)==null?void 0:le.value)||"No extras required",productDetailsTitle:"Product details",productDetails:Ky(o)},faq:{title:"FAQ",items:Hy((pe=o.faq)==null?void 0:pe.value)},stickyCtaRail:{variantId:I,name:o.title,price:us(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),stockLabel:h,isInStock:k,shippingLabel:((Ae=o.deliveryWindow)==null?void 0:Ae.value)||((en=o.shippingInfo)==null?void 0:en.value)||"Shipping calculated at checkout",reassurancePoints:M,addToCartLabel:((yn=o.ctaLabel)==null?void 0:yn.value)||"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}}};let ur=Ar,zi=!1,Ei=null,Ai=null,Ri=!1;const n0=async o=>{const a=o??ap();return Ei&&a===Ai||(Ei=(async()=>{try{const l=a;if(!l){ur=Ar,Ri=!1,zi=!0,Ai=null;return}Ai=l;const[c,p]=await Promise.all([Hm(l),zy(l).catch(m=>(console.error("Failed to load public admin product metadata",m),null))]);if(!c){ur=Ar,Ri=!1,zi=!0;return}const f=await Xy(c).catch(()=>[]);ur=t0({product:c,adminMetadata:p,relatedProducts:f}),Ri=!0}catch(l){ur=Ar,Ri=!1,console.error("Failed to load product detail from Shopify",l)}finally{zi=!0,Ei=null}})()),Ei};function Vt(){const o=ap(),[a,l]=R.useState(ur),[c,p]=R.useState(!zi||Ai!==o);return R.useEffect(()=>{let f=!1;return zi&&Ai===o?(l(ur),p(!1),()=>{f=!0}):(p(!0),n0(o).then(()=>{f||(l(ur),p(!1))}),()=>{f=!0})},[o]),{...a,hasProduct:Ri,isLoading:c}}function r0(){const{productHeader:o}=Vt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"product-title-block",children:[r.jsxs("div",{className:"product-title-badge-row",children:[r.jsx(st,{label:o.badge,variant:"accent",size:"sm"}),r.jsx("span",{className:"product-title-vendor",children:o.vendor})]}),r.jsx("h1",{className:"product-title-h1",children:o.title}),r.jsxs("div",{className:"product-title-meta",children:[r.jsxs("span",{children:["SKU: ",o.sku]}),r.jsxs("span",{children:[o.shareLabel,": ",o.shareUrl]})]})]})]})}function i0(){const{productHeader:o}=Vt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("nav",{"aria-label":"Breadcrumb",children:r.jsxs("ol",{className:"breadcrumb-nav",children:[r.jsx("li",{children:r.jsx("a",{href:"/",className:"breadcrumb-link",children:"Home"})}),r.jsx("li",{className:"breadcrumb-separator",children:"/"}),r.jsx("li",{children:r.jsx("a",{href:"/products",className:"breadcrumb-link",children:"Products"})}),r.jsx("li",{className:"breadcrumb-separator",children:"/"}),r.jsx("li",{className:"breadcrumb-current",children:o.title})]})})]})}const o0={sm:"12px",md:"16px",lg:"20px"};function s0(o){switch(o){case"subtle":return{backgroundColor:"var(--muted)",border:"1px solid var(--border)",boxShadow:"none"};case"outline":return{backgroundColor:"transparent",border:"1px solid var(--border)",boxShadow:"none"};case"elevated":default:return{backgroundColor:"var(--card)",border:"1px solid var(--border)",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F"}}}function He({children:o,mediaSlot:a,footerSlot:l,variant:c="elevated",padding:p="md",width:f="100%",height:m}){const x=s0(c),S=o0[p];return r.jsxs("div",{style:{...x,borderRadius:"16px",width:f,height:m,overflow:"hidden",display:"flex",flexDirection:"column"},children:[a,o?r.jsx("div",{style:{padding:S},children:o}):null,l?r.jsx("div",{style:{padding:S,paddingTop:"0"},children:l}):null]})}function a0({children:o}){return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",position:"relative"},children:o})}function l0({children:o}){return r.jsx("label",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function u0({children:o}){return r.jsx("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:o})}function c0({placeholder:o,value:a}){return r.jsx("input",{type:"text",placeholder:o||"Enter text...",value:a,style:{width:"100%",border:"none",outline:"none",background:"transparent",fontSize:"14px",lineHeight:"20px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",padding:0}})}function d0({children:o,error:a}){return r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:a?"var(--destructive)":"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function p0({label:o,placeholder:a,helperText:l,error:c,disabled:p,size:f="md"}){const m=f==="sm"?"36px":"44px",x=f==="sm"?"12px":"14px",S=f==="sm"?"10px":"12px";let j="var(--border)";return c&&(j="var(--destructive)"),r.jsxs(a0,{children:[o&&r.jsx(l0,{children:o}),r.jsx(u0,{children:r.jsx("div",{style:{width:"100%",height:m,display:"flex",alignItems:"center",paddingLeft:x,paddingRight:x,backgroundColor:"var(--card)",border:`1px solid ${j}`,borderRadius:S,opacity:p?.4:1,transition:"border-color 150ms ease"},children:r.jsx(c0,{placeholder:a})})}),l&&r.jsx("div",{style:{opacity:p?.4:1},children:r.jsx(d0,{error:c,children:l})})]})}function cp(){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(p0,{label:"Delivery pincode",placeholder:"110001",helperText:"Enter your 6-digit pincode."}),r.jsx("div",{children:r.jsx(We,{variant:"secondary",size:"sm",label:"Check delivery"})})]})}function f0(){return r.jsxs("div",{className:"product-main",children:[r.jsx(m0,{}),r.jsx(h0,{})]})}function m0(){const{productMain:o}=Vt(),[a,l]=R.useState(0),c=o.gallery.images,p=c[a],f=()=>{c.length!==0&&l(x=>x===0?c.length-1:x-1)},m=()=>{c.length!==0&&l(x=>(x+1)%c.length)};return r.jsxs("div",{className:"product-main__gallery",children:[r.jsx(He,{variant:"elevated",height:"560px",mediaSlot:r.jsxs("div",{className:"product-main__gallery-frame",children:[p?r.jsx("img",{className:"product-main__gallery-image",src:p.url,alt:p.altText}):r.jsx("div",{className:"product-main__gallery-placeholder"}),r.jsx("div",{className:"product-main__gallery-badge",children:r.jsx(st,{label:o.gallery.zoomLabel,variant:"neutral",size:"sm"})}),r.jsxs("div",{className:"product-main__gallery-actions",children:[r.jsx(We,{variant:"ghost",size:"sm",label:o.gallery.prevLabel,onClick:f}),r.jsx(We,{variant:"ghost",size:"sm",label:o.gallery.nextLabel,onClick:m})]})]})}),r.jsx("div",{className:"product-main__thumbnail-row",children:c.length>0?c.map((x,S)=>r.jsx("button",{className:`product-main__thumbnail-button${S===a?" product-main__thumbnail-button--active":""}`,type:"button",onClick:()=>l(S),children:r.jsx("img",{className:"product-main__thumbnail-image",src:x.url,alt:x.altText})},x.id)):[1,2,3,4].map(x=>r.jsx("div",{className:`product-main__thumbnail-placeholder${x===1?" product-main__thumbnail-placeholder--active":""}`},x))})]})}function h0(){const{addItem:o}=Vn(),{productMain:a}=Vt(),l=a.buyBox.isInStock;return r.jsx("div",{className:"product-main__buy-box",children:r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"product-main__buy-box-content",children:[r.jsx("div",{className:"product-main__badge-row",children:r.jsx(st,{label:a.buyBox.badge,variant:"accent",size:"sm"})}),r.jsx("h2",{className:"product-main__title",children:a.buyBox.name}),r.jsx("div",{className:"product-main__descriptor",children:a.buyBox.descriptor}),r.jsxs("div",{className:"product-main__price-row",children:[r.jsx("h3",{className:"product-main__price",children:a.buyBox.price}),r.jsxs("div",{className:"product-main__stock-column",children:[a.buyBox.compareAtPrice?r.jsx("span",{className:"product-main__compare-price",children:a.buyBox.compareAtPrice}):null,r.jsx("span",{className:`product-main__stock${l?" product-main__stock--in-stock":" product-main__stock--out-of-stock"}`,children:a.buyBox.stock})]})]}),r.jsx(cp,{}),a.buyBox.reassurancePoints.length>0?r.jsx("div",{className:"product-main__reassurance-list",children:a.buyBox.reassurancePoints.map(c=>r.jsxs("div",{className:"product-main__reassurance-item",children:[r.jsx("div",{className:"product-main__reassurance-icon",children:r.jsx(Yd,{className:"product-main__reassurance-check",size:12,strokeWidth:3})}),r.jsx("div",{className:"product-main__reassurance-text",children:c})]},c))}):null,r.jsxs("div",{className:"product-main__actions",children:[r.jsx(We,{variant:"primary",size:"lg",label:a.buyBox.primaryCta,disabled:!l||!a.buyBox.variantId,onClick:()=>{a.buyBox.variantId&&o(a.buyBox.variantId)}}),r.jsx(We,{variant:"secondary",size:"lg",label:a.buyBox.secondaryCta})]}),r.jsx("div",{className:"product-main__micro-line",children:a.buyBox.microLine})]})})})}function g0(){const{deliveryAndReturns:o}=Vt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"delivery-returns-container",children:[r.jsx("h3",{className:"delivery-returns-title",children:"Delivery & Returns"}),r.jsx("div",{className:"delivery-returns-cards",children:o.map(a=>r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"delivery-card-content",children:[r.jsxs("div",{className:"delivery-card-header",children:[r.jsx(st,{label:a.badge,variant:"neutral",size:"sm"}),r.jsx("h4",{className:"delivery-card-title",children:a.title})]}),r.jsx("div",{className:"delivery-card-description",children:a.description}),a.footer?r.jsx("div",{className:"delivery-card-footer",children:a.footer}):null]})},a.id))})]})]})}function x0(){const{featureDeepDive:o}=Vt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"feature-deep-dive-container",children:[r.jsx("div",{className:"feature-deep-dive-title-wrapper",children:r.jsx("h3",{className:"feature-deep-dive-title",children:"Product Deep Dive"})}),r.jsxs("div",{className:"feature-deep-dive-grid",children:[r.jsxs("div",{className:"feature-deep-dive-main",children:[r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",children:[r.jsxs("div",{className:"feature-card-header",children:[r.jsx(Qd,{size:20,style:{color:"var(--primary)"}}),r.jsx("h4",{className:"feature-card-title",children:o.overviewTitle})]}),r.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:o.overviewHtml}})]})}),r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",children:[r.jsx("h4",{className:"feature-card-title",children:o.buyingGuideTitle}),r.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:o.buyingGuideHtml}})]})}),o.storyHtml?r.jsx(He,{variant:"subtle",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",style:{gap:"12px"},children:[r.jsx("div",{className:"feature-story-badge",children:r.jsx("h4",{className:"feature-story-title",children:o.storyTitle})}),r.jsx("div",{className:"feature-story-html",dangerouslySetInnerHTML:{__html:o.storyHtml}})]})}):null]}),r.jsxs("div",{className:"feature-deep-dive-sidebar",children:[r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Yh,{size:18,style:{color:"var(--success-foreground)"}}),r.jsx(st,{label:"Perfect for",variant:"accent",size:"sm"})]}),r.jsx("div",{className:"feature-perfect-for",children:o.curatedFor})]})}),o.notFor?r.jsx(He,{variant:"subtle",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(st,{label:"Not ideal for",variant:"neutral",size:"sm"}),r.jsx("div",{className:"feature-not-for",children:o.notFor})]})}):null,r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx($i,{size:16,style:{color:"var(--primary)"}}),r.jsx("div",{className:"quick-info-title",children:"Quick Info"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingTop:"4px"},children:[r.jsxs("div",{children:[r.jsx("div",{className:"quick-info-label",children:"Protection Level"}),r.jsx("div",{className:"quick-info-value",children:"10mm Padding"})]}),r.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[r.jsx("div",{className:"quick-info-label",children:"Water Resistant"}),r.jsx("div",{className:"quick-info-value",children:"Light rain protection"})]}),r.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[r.jsx("div",{className:"quick-info-label",children:"Compatibility"}),r.jsx("div",{className:"quick-info-value",children:"Most acoustic & electric"})]})]})]})})]})]})]})]})}function y0(){const{keyBenefits:o}=Vt();if(o.cards.length===0)return null;const a=[jg,$i,Fg];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs(je,{direction:"vertical",gap:24,children:[r.jsx("div",{className:"key-benefits-title-container",children:r.jsx("h3",{className:"key-benefits-title",children:o.title})}),r.jsx("div",{className:"key-benefits-grid",children:o.cards.map((l,c)=>{const p=a[c%a.length];return r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs(je,{direction:"vertical",gap:16,style:{alignItems:"flex-start"},children:[r.jsx("div",{className:"key-benefit-icon",children:r.jsx(p,{size:24})}),r.jsx("div",{className:"key-benefit-badge",children:l.badge}),r.jsx("h4",{className:"key-benefit-title",children:l.title}),l.description?r.jsx("div",{className:"key-benefit-description",children:l.description}):null,l.footer?r.jsx("div",{className:"key-benefit-footer",children:l.footer}):null]})},l.id)})})]})]})}const v0=/^(.*?)\s*,?\s*\((#[0-9a-f]{3,8})\)$/i,w0=o=>{const a=o.split("|").map(l=>l.trim()).filter(Boolean).map(l=>{const c=l.match(v0);return c?{label:c[1].trim().replace(/,\s*$/,""),hex:c[2]}:null});return a.every(Boolean)?a:[]};function Cd({value:o}){const a=w0(o);return a.length===0?r.jsx(r.Fragment,{children:o}):r.jsx("div",{className:"specs-swatch-list",children:a.map(l=>r.jsxs("div",{className:"specs-swatch-item",children:[r.jsx("span",{className:"specs-swatch-box",style:{backgroundColor:l.hex},"aria-hidden":"true"}),r.jsx("span",{children:l.label})]},`${l.label}-${l.hex}`))})}function k0(){const{specsAndInBox:o}=Vt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"specs-container",children:[r.jsx("h3",{className:"specs-title",children:"Specifications & What's Included"}),r.jsx(He,{variant:"elevated",padding:"md",children:r.jsxs("div",{className:"specs-card-content",children:[r.jsx("h4",{className:"specs-card-title",children:o.specificationsTitle}),r.jsx("div",{className:"specs-list",children:o.specifications.map(a=>r.jsxs("div",{className:"specs-row",children:[r.jsx("div",{className:"specs-label",children:a.label}),r.jsx("div",{className:"specs-value",children:r.jsx(Cd,{value:a.value})})]},a.label))})]})}),r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[r.jsxs("div",{className:"inbox-header",children:[r.jsx("h4",{className:"specs-card-title",children:o.inBoxTitle}),r.jsx(st,{label:o.inBoxBadge,variant:"neutral",size:"sm"})]}),r.jsx("div",{className:"inbox-list",children:o.inBoxItems.map(a=>r.jsxs("div",{className:"inbox-item",children:["• ",a]},a))})]})}),r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[r.jsx("h4",{className:"specs-card-title",children:o.productDetailsTitle}),r.jsx("div",{className:"details-list",children:o.productDetails.map(a=>r.jsxs("div",{children:[r.jsx("div",{className:"details-item-label",children:a.label}),r.jsx("div",{className:"details-item-value",children:r.jsx(Cd,{value:a.value})})]},a.label))})]})})]})]})}function j0(){const{faq:o}=Vt();return o.items.length===0?null:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:o.title}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px"},children:o.items.map(a=>r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--foreground)"},children:a.question}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"22px",fontWeight:"400",color:"var(--muted-foreground)"},children:a.answer})]})},a.question))})]})}function S0(){const{addItem:o}=Vn(),{relatedProducts:a}=Vt();return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:a.title}),r.jsx(We,{variant:"secondary",size:"sm",label:a.viewAllLabel})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:a.items.map(l=>r.jsx(He,{variant:"elevated",mediaSlot:r.jsxs("div",{style:{position:"relative",width:"100%",height:"220px"},children:[l.imageUrl?r.jsx("img",{src:l.imageUrl,alt:l.imageAlt||l.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--muted)"}}),r.jsx("div",{style:{position:"absolute",top:"12px",left:"12px"},children:r.jsx(st,{label:l.badge,variant:"neutral",size:"sm"})})]}),footerSlot:r.jsx(We,{variant:"primary",size:"md",label:a.addToCartLabel,disabled:!l.variantId,onClick:()=>{l.variantId&&o(l.variantId)}}),children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.name}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.descriptor}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.featureLine}),r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.price})]})},l.id))})]})}function C0(){const{hasProduct:o,isLoading:a}=Vt();return a?r.jsx(fy,{}):o?r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("section",{style:{paddingTop:"24px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:r.jsx(he,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsx(i0,{}),r.jsx(r0,{}),r.jsx(f0,{})]})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(he,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"},children:[r.jsx(g0,{}),r.jsx(k0,{})]})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:r.jsx(he,{children:r.jsx(y0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(he,{children:r.jsx(x0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(he,{children:r.jsx(j0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"48px",backgroundColor:"var(--card)"},children:r.jsx(he,{children:r.jsx(S0,{})})})]}):r.jsx("section",{style:{paddingTop:"64px",paddingBottom:"80px",backgroundColor:"var(--card)"},children:r.jsx(he,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[r.jsx("h1",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"32px",lineHeight:"38px",color:"var(--foreground)"},children:"Product unavailable"}),r.jsx("p",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",color:"var(--muted-foreground)"},children:"This product could not be loaded for the requested handle."})]})})})}function b0({query:o,onQueryChange:a,onSearch:l,isSearching:c=!1}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("form",{className:"product-search-form",onSubmit:p=>{p.preventDefault(),l()},children:[r.jsxs("div",{className:"product-search-input-wrapper",children:[r.jsx("div",{className:"product-search-icon",children:r.jsx(wg,{size:20,color:"var(--muted-foreground)",strokeWidth:2})}),r.jsx("input",{type:"text",placeholder:"Search curated gear…",value:o,onChange:p=>a(p.target.value),className:"product-search-input","aria-label":"Search products",onFocus:p=>{p.target.style.borderColor="var(--ring)",p.target.style.boxShadow="0 0 0 4px rgba(105, 65, 198, 0.12), 0 1px 2px 0 rgba(16, 24, 40, 0.05)"},onBlur:p=>{p.target.style.borderColor="var(--border)",p.target.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.05)"}})]}),r.jsx("div",{className:"product-search-button-wrapper",children:r.jsx(We,{variant:"primary",size:"md",label:c?"Searching...":"Search",disabled:c,fullWidth:!0})})]})]})}const al=15;function E0({filters:o,activeFilter:a,onFilterChange:l,resetLabel:c}){var b,h;const[p,f]=R.useState(!1),m=(b=o.find(k=>k.id===a))==null?void 0:b.label,x=o.length>al,S=p?o:o.slice(0,al),j=o.length-al;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs(np,{wrap:"on",gap:10,align:"center",className:"product-filters-wrapper",children:[r.jsx("span",{className:"filter-label",children:"Filter:"}),S.map(k=>r.jsx("button",{onClick:()=>l(k.id),className:"filter-chip",style:{backgroundColor:a===k.id?"var(--accent)":"var(--muted)",border:a===k.id?"1px solid var(--ring)":"1px solid var(--border)",color:a===k.id?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:I=>{a!==k.id&&(I.currentTarget.style.backgroundColor="var(--muted)",I.currentTarget.style.borderColor="var(--border)")},onMouseLeave:I=>{a!==k.id&&(I.currentTarget.style.backgroundColor="var(--muted)",I.currentTarget.style.borderColor="var(--border)")},children:k.label},k.id)),x&&r.jsx("button",{onClick:()=>f(!p),className:"filter-chip",style:{backgroundColor:"transparent",border:"1px solid var(--border)",color:"var(--muted-foreground)"},onMouseEnter:k=>{k.currentTarget.style.backgroundColor="var(--muted)",k.currentTarget.style.color="var(--foreground)"},onMouseLeave:k=>{k.currentTarget.style.backgroundColor="transparent",k.currentTarget.style.color="var(--muted-foreground)"},children:p?"Show less":`+${j} more`}),r.jsx("div",{className:"filter-spacer"}),m&&a!==((h=o[0])==null?void 0:h.id)&&r.jsxs("button",{onClick:()=>{var k;return l(((k=o[0])==null?void 0:k.id)??"all")},className:"filter-reset-button",onMouseEnter:k=>{k.currentTarget.style.color="var(--foreground)"},onMouseLeave:k=>{k.currentTarget.style.color="var(--muted-foreground)"},children:[r.jsx(Sl,{size:14,strokeWidth:2.5}),c??"Reset filters"]})]})]})}var I0=Rd();const T0=_d(I0);function F0(o){if(typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",a.appendChild(l),l.styleSheet?l.styleSheet.cssText=o:l.appendChild(document.createTextNode(o))}const _0=o=>{switch(o){case"success":return z0;case"info":return P0;case"warning":return A0;case"error":return L0;default:return null}},R0=Array(12).fill(0),N0=({visible:o,className:a})=>O.createElement("div",{className:["sonner-loading-wrapper",a].filter(Boolean).join(" "),"data-visible":o},O.createElement("div",{className:"sonner-spinner"},R0.map((l,c)=>O.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${c}`})))),z0=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),A0=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),P0=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),L0=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),D0=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},O.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),O.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),M0=()=>{const[o,a]=O.useState(document.hidden);return O.useEffect(()=>{const l=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",l),()=>window.removeEventListener("visibilitychange",l)},[]),o};let fl=1;class O0{constructor(){this.subscribe=a=>(this.subscribers.push(a),()=>{const l=this.subscribers.indexOf(a);this.subscribers.splice(l,1)}),this.publish=a=>{this.subscribers.forEach(l=>l(a))},this.addToast=a=>{this.publish(a),this.toasts=[...this.toasts,a]},this.create=a=>{var l;const{message:c,...p}=a,f=typeof(a==null?void 0:a.id)=="number"||((l=a.id)==null?void 0:l.length)>0?a.id:fl++,m=this.toasts.find(S=>S.id===f),x=a.dismissible===void 0?!0:a.dismissible;return this.dismissedToasts.has(f)&&this.dismissedToasts.delete(f),m?this.toasts=this.toasts.map(S=>S.id===f?(this.publish({...S,...a,id:f,title:c}),{...S,...a,id:f,dismissible:x,title:c}):S):this.addToast({title:c,...p,dismissible:x,id:f}),f},this.dismiss=a=>(a?(this.dismissedToasts.add(a),requestAnimationFrame(()=>this.subscribers.forEach(l=>l({id:a,dismiss:!0})))):this.toasts.forEach(l=>{this.subscribers.forEach(c=>c({id:l.id,dismiss:!0}))}),a),this.message=(a,l)=>this.create({...l,message:a}),this.error=(a,l)=>this.create({...l,message:a,type:"error"}),this.success=(a,l)=>this.create({...l,type:"success",message:a}),this.info=(a,l)=>this.create({...l,type:"info",message:a}),this.warning=(a,l)=>this.create({...l,type:"warning",message:a}),this.loading=(a,l)=>this.create({...l,type:"loading",message:a}),this.promise=(a,l)=>{if(!l)return;let c;l.loading!==void 0&&(c=this.create({...l,promise:a,type:"loading",message:l.loading,description:typeof l.description!="function"?l.description:void 0}));const p=Promise.resolve(a instanceof Function?a():a);let f=c!==void 0,m;const x=p.then(async j=>{if(m=["resolve",j],O.isValidElement(j))f=!1,this.create({id:c,type:"default",message:j});else if($0(j)&&!j.ok){f=!1;const h=typeof l.error=="function"?await l.error(`HTTP error! status: ${j.status}`):l.error,k=typeof l.description=="function"?await l.description(`HTTP error! status: ${j.status}`):l.description,_=typeof h=="object"&&!O.isValidElement(h)?h:{message:h};this.create({id:c,type:"error",description:k,..._})}else if(j instanceof Error){f=!1;const h=typeof l.error=="function"?await l.error(j):l.error,k=typeof l.description=="function"?await l.description(j):l.description,_=typeof h=="object"&&!O.isValidElement(h)?h:{message:h};this.create({id:c,type:"error",description:k,..._})}else if(l.success!==void 0){f=!1;const h=typeof l.success=="function"?await l.success(j):l.success,k=typeof l.description=="function"?await l.description(j):l.description,_=typeof h=="object"&&!O.isValidElement(h)?h:{message:h};this.create({id:c,type:"success",description:k,..._})}}).catch(async j=>{if(m=["reject",j],l.error!==void 0){f=!1;const b=typeof l.error=="function"?await l.error(j):l.error,h=typeof l.description=="function"?await l.description(j):l.description,I=typeof b=="object"&&!O.isValidElement(b)?b:{message:b};this.create({id:c,type:"error",description:h,...I})}}).finally(()=>{f&&(this.dismiss(c),c=void 0),l.finally==null||l.finally.call(l)}),S=()=>new Promise((j,b)=>x.then(()=>m[0]==="reject"?b(m[1]):j(m[1])).catch(b));return typeof c!="string"&&typeof c!="number"?{unwrap:S}:Object.assign(c,{unwrap:S})},this.custom=(a,l)=>{const c=(l==null?void 0:l.id)||fl++;return this.create({jsx:a(c),id:c,...l}),c},this.getActiveToasts=()=>this.toasts.filter(a=>!this.dismissedToasts.has(a.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const wt=new O0,B0=(o,a)=>{const l=(a==null?void 0:a.id)||fl++;return wt.addToast({title:o,...a,id:l}),l},$0=o=>o&&typeof o=="object"&&"ok"in o&&typeof o.ok=="boolean"&&"status"in o&&typeof o.status=="number",U0=B0,H0=()=>wt.toasts,W0=()=>wt.getActiveToasts(),bd=Object.assign(U0,{success:wt.success,info:wt.info,warning:wt.warning,error:wt.error,custom:wt.custom,message:wt.message,promise:wt.promise,dismiss:wt.dismiss,loading:wt.loading},{getHistory:H0,getToasts:W0});F0("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function ss(o){return o.label!==void 0}const V0=3,q0="24px",Y0="16px",Ed=4e3,Q0=356,K0=14,X0=45,G0=200;function Jt(...o){return o.filter(Boolean).join(" ")}function J0(o){const[a,l]=o.split("-"),c=[];return a&&c.push(a),l&&c.push(l),c}const Z0=o=>{var a,l,c,p,f,m,x,S,j;const{invert:b,toast:h,unstyled:k,interacting:I,setHeights:_,visibleToasts:M,heights:A,index:U,toasts:K,expanded:te,removeToast:re,defaultRichColors:ee,closeButton:ae,style:ve,cancelButtonStyle:Te,actionButtonStyle:Le,className:Be="",descriptionClassName:we="",duration:Ne,position:ze,gap:Ke,expandByDefault:be,classNames:ne,icons:ce,closeButtonAriaLabel:D="Close toast"}=o,[V,B]=O.useState(null),[v,F]=O.useState(null),[H,G]=O.useState(!1),[oe,X]=O.useState(!1),[de,le]=O.useState(!1),[pe,Ae]=O.useState(!1),[en,yn]=O.useState(!1),[kt,qt]=O.useState(0),[Wi,Dr]=O.useState(0),tn=O.useRef(h.duration||Ne||Ed),Mr=O.useRef(null),jt=O.useRef(null),qn=U===0,vn=U+1<=M,et=h.type,nn=h.dismissible!==!1,Vi=h.className||"",qi=h.descriptionClassName||"",Yn=O.useMemo(()=>A.findIndex(se=>se.toastId===h.id)||0,[A,h.id]),Or=O.useMemo(()=>{var se;return(se=h.closeButton)!=null?se:ae},[h.closeButton,ae]),Qn=O.useMemo(()=>h.duration||Ne||Ed,[h.duration,Ne]),cr=O.useRef(0),Tt=O.useRef(0),wn=O.useRef(0),kn=O.useRef(null),[Yi,Qi]=ze.split("-"),Ki=O.useMemo(()=>A.reduce((se,De,qe)=>qe>=Yn?se:se+De.height,0),[A,Yn]),dr=M0(),Br=h.invert||b,Kn=et==="loading";Tt.current=O.useMemo(()=>Yn*Ke+Ki,[Yn,Ki]),O.useEffect(()=>{tn.current=Qn},[Qn]),O.useEffect(()=>{G(!0)},[]),O.useEffect(()=>{const se=jt.current;if(se){const De=se.getBoundingClientRect().height;return Dr(De),_(qe=>[{toastId:h.id,height:De,position:h.position},...qe]),()=>_(qe=>qe.filter(at=>at.toastId!==h.id))}},[_,h.id]),O.useLayoutEffect(()=>{if(!H)return;const se=jt.current,De=se.style.height;se.style.height="auto";const qe=se.getBoundingClientRect().height;se.style.height=De,Dr(qe),_(at=>at.find($e=>$e.toastId===h.id)?at.map($e=>$e.toastId===h.id?{...$e,height:qe}:$e):[{toastId:h.id,height:qe,position:h.position},...at])},[H,h.title,h.description,_,h.id]);const Ft=O.useCallback(()=>{X(!0),qt(Tt.current),_(se=>se.filter(De=>De.toastId!==h.id)),setTimeout(()=>{re(h)},G0)},[h,re,_,Tt]);O.useEffect(()=>{if(h.promise&&et==="loading"||h.duration===1/0||h.type==="loading")return;let se;return te||I||dr?(()=>{if(wn.current<cr.current){const at=new Date().getTime()-cr.current;tn.current=tn.current-at}wn.current=new Date().getTime()})():(()=>{tn.current!==1/0&&(cr.current=new Date().getTime(),se=setTimeout(()=>{h.onAutoClose==null||h.onAutoClose.call(h,h),Ft()},tn.current))})(),()=>clearTimeout(se)},[te,I,h,et,dr,Ft]),O.useEffect(()=>{h.delete&&Ft()},[Ft,h.delete]);function $r(){var se;if(ce!=null&&ce.loading){var De;return O.createElement("div",{className:Jt(ne==null?void 0:ne.loader,h==null||(De=h.classNames)==null?void 0:De.loader,"sonner-loader"),"data-visible":et==="loading"},ce.loading)}return O.createElement(N0,{className:Jt(ne==null?void 0:ne.loader,h==null||(se=h.classNames)==null?void 0:se.loader),visible:et==="loading"})}const jn=h.icon||(ce==null?void 0:ce[et])||_0(et);var rn,Ur;return O.createElement("li",{tabIndex:0,ref:jt,className:Jt(Be,Vi,ne==null?void 0:ne.toast,h==null||(a=h.classNames)==null?void 0:a.toast,ne==null?void 0:ne.default,ne==null?void 0:ne[et],h==null||(l=h.classNames)==null?void 0:l[et]),"data-sonner-toast":"","data-rich-colors":(rn=h.richColors)!=null?rn:ee,"data-styled":!(h.jsx||h.unstyled||k),"data-mounted":H,"data-promise":!!h.promise,"data-swiped":en,"data-removed":oe,"data-visible":vn,"data-y-position":Yi,"data-x-position":Qi,"data-index":U,"data-front":qn,"data-swiping":de,"data-dismissible":nn,"data-type":et,"data-invert":Br,"data-swipe-out":pe,"data-swipe-direction":v,"data-expanded":!!(te||be&&H),style:{"--index":U,"--toasts-before":U,"--z-index":K.length-U,"--offset":`${oe?kt:Tt.current}px`,"--initial-height":be?"auto":`${Wi}px`,...ve,...h.style},onDragEnd:()=>{le(!1),B(null),kn.current=null},onPointerDown:se=>{Kn||!nn||(Mr.current=new Date,qt(Tt.current),se.target.setPointerCapture(se.pointerId),se.target.tagName!=="BUTTON"&&(le(!0),kn.current={x:se.clientX,y:se.clientY}))},onPointerUp:()=>{var se,De,qe;if(pe||!nn)return;kn.current=null;const at=Number(((se=jt.current)==null?void 0:se.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Sn=Number(((De=jt.current)==null?void 0:De.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),$e=new Date().getTime()-((qe=Mr.current)==null?void 0:qe.getTime()),Xe=V==="x"?at:Sn,Cn=Math.abs(Xe)/$e;if(Math.abs(Xe)>=X0||Cn>.11){qt(Tt.current),h.onDismiss==null||h.onDismiss.call(h,h),F(V==="x"?at>0?"right":"left":Sn>0?"down":"up"),Ft(),Ae(!0);return}else{var tt,St;(tt=jt.current)==null||tt.style.setProperty("--swipe-amount-x","0px"),(St=jt.current)==null||St.style.setProperty("--swipe-amount-y","0px")}yn(!1),le(!1),B(null)},onPointerMove:se=>{var De,qe,at;if(!kn.current||!nn||((De=window.getSelection())==null?void 0:De.toString().length)>0)return;const $e=se.clientY-kn.current.y,Xe=se.clientX-kn.current.x;var Cn;const tt=(Cn=o.swipeDirections)!=null?Cn:J0(ze);!V&&(Math.abs(Xe)>1||Math.abs($e)>1)&&B(Math.abs(Xe)>Math.abs($e)?"x":"y");let St={x:0,y:0};const bn=_t=>1/(1.5+Math.abs(_t)/20);if(V==="y"){if(tt.includes("top")||tt.includes("bottom"))if(tt.includes("top")&&$e<0||tt.includes("bottom")&&$e>0)St.y=$e;else{const _t=$e*bn($e);St.y=Math.abs(_t)<Math.abs($e)?_t:$e}}else if(V==="x"&&(tt.includes("left")||tt.includes("right")))if(tt.includes("left")&&Xe<0||tt.includes("right")&&Xe>0)St.x=Xe;else{const _t=Xe*bn(Xe);St.x=Math.abs(_t)<Math.abs(Xe)?_t:Xe}(Math.abs(St.x)>0||Math.abs(St.y)>0)&&yn(!0),(qe=jt.current)==null||qe.style.setProperty("--swipe-amount-x",`${St.x}px`),(at=jt.current)==null||at.style.setProperty("--swipe-amount-y",`${St.y}px`)}},Or&&!h.jsx&&et!=="loading"?O.createElement("button",{"aria-label":D,"data-disabled":Kn,"data-close-button":!0,onClick:Kn||!nn?()=>{}:()=>{Ft(),h.onDismiss==null||h.onDismiss.call(h,h)},className:Jt(ne==null?void 0:ne.closeButton,h==null||(c=h.classNames)==null?void 0:c.closeButton)},(Ur=ce==null?void 0:ce.close)!=null?Ur:D0):null,(et||h.icon||h.promise)&&h.icon!==null&&((ce==null?void 0:ce[et])!==null||h.icon)?O.createElement("div",{"data-icon":"",className:Jt(ne==null?void 0:ne.icon,h==null||(p=h.classNames)==null?void 0:p.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||$r():null,h.type!=="loading"?jn:null):null,O.createElement("div",{"data-content":"",className:Jt(ne==null?void 0:ne.content,h==null||(f=h.classNames)==null?void 0:f.content)},O.createElement("div",{"data-title":"",className:Jt(ne==null?void 0:ne.title,h==null||(m=h.classNames)==null?void 0:m.title)},h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title),h.description?O.createElement("div",{"data-description":"",className:Jt(we,qi,ne==null?void 0:ne.description,h==null||(x=h.classNames)==null?void 0:x.description)},typeof h.description=="function"?h.description():h.description):null),O.isValidElement(h.cancel)?h.cancel:h.cancel&&ss(h.cancel)?O.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||Te,onClick:se=>{ss(h.cancel)&&nn&&(h.cancel.onClick==null||h.cancel.onClick.call(h.cancel,se),Ft())},className:Jt(ne==null?void 0:ne.cancelButton,h==null||(S=h.classNames)==null?void 0:S.cancelButton)},h.cancel.label):null,O.isValidElement(h.action)?h.action:h.action&&ss(h.action)?O.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||Le,onClick:se=>{ss(h.action)&&(h.action.onClick==null||h.action.onClick.call(h.action,se),!se.defaultPrevented&&Ft())},className:Jt(ne==null?void 0:ne.actionButton,h==null||(j=h.classNames)==null?void 0:j.actionButton)},h.action.label):null)};function Id(){if(typeof window>"u"||typeof document>"u")return"ltr";const o=document.documentElement.getAttribute("dir");return o==="auto"||!o?window.getComputedStyle(document.documentElement).direction:o}function ev(o,a){const l={};return[o,a].forEach((c,p)=>{const f=p===1,m=f?"--mobile-offset":"--offset",x=f?Y0:q0;function S(j){["top","right","bottom","left"].forEach(b=>{l[`${m}-${b}`]=typeof j=="number"?`${j}px`:j})}typeof c=="number"||typeof c=="string"?S(c):typeof c=="object"?["top","right","bottom","left"].forEach(j=>{c[j]===void 0?l[`${m}-${j}`]=x:l[`${m}-${j}`]=typeof c[j]=="number"?`${c[j]}px`:c[j]}):S(x)}),l}const tv=O.forwardRef(function(a,l){const{invert:c,position:p="bottom-right",hotkey:f=["altKey","KeyT"],expand:m,closeButton:x,className:S,offset:j,mobileOffset:b,theme:h="light",richColors:k,duration:I,style:_,visibleToasts:M=V0,toastOptions:A,dir:U=Id(),gap:K=K0,icons:te,containerAriaLabel:re="Notifications"}=a,[ee,ae]=O.useState([]),ve=O.useMemo(()=>Array.from(new Set([p].concat(ee.filter(v=>v.position).map(v=>v.position)))),[ee,p]),[Te,Le]=O.useState([]),[Be,we]=O.useState(!1),[Ne,ze]=O.useState(!1),[Ke,be]=O.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),ne=O.useRef(null),ce=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),D=O.useRef(null),V=O.useRef(!1),B=O.useCallback(v=>{ae(F=>{var H;return(H=F.find(G=>G.id===v.id))!=null&&H.delete||wt.dismiss(v.id),F.filter(({id:G})=>G!==v.id)})},[]);return O.useEffect(()=>wt.subscribe(v=>{if(v.dismiss){requestAnimationFrame(()=>{ae(F=>F.map(H=>H.id===v.id?{...H,delete:!0}:H))});return}setTimeout(()=>{T0.flushSync(()=>{ae(F=>{const H=F.findIndex(G=>G.id===v.id);return H!==-1?[...F.slice(0,H),{...F[H],...v},...F.slice(H+1)]:[v,...F]})})})}),[ee]),O.useEffect(()=>{if(h!=="system"){be(h);return}if(h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?be("dark"):be("light")),typeof window>"u")return;const v=window.matchMedia("(prefers-color-scheme: dark)");try{v.addEventListener("change",({matches:F})=>{be(F?"dark":"light")})}catch{v.addListener(({matches:H})=>{try{be(H?"dark":"light")}catch(G){console.error(G)}})}},[h]),O.useEffect(()=>{ee.length<=1&&we(!1)},[ee]),O.useEffect(()=>{const v=F=>{var H;if(f.every(X=>F[X]||F.code===X)){var oe;we(!0),(oe=ne.current)==null||oe.focus()}F.code==="Escape"&&(document.activeElement===ne.current||(H=ne.current)!=null&&H.contains(document.activeElement))&&we(!1)};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[f]),O.useEffect(()=>{if(ne.current)return()=>{D.current&&(D.current.focus({preventScroll:!0}),D.current=null,V.current=!1)}},[ne.current]),O.createElement("section",{ref:l,"aria-label":`${re} ${ce}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},ve.map((v,F)=>{var H;const[G,oe]=v.split("-");return ee.length?O.createElement("ol",{key:v,dir:U==="auto"?Id():U,tabIndex:-1,ref:ne,className:S,"data-sonner-toaster":!0,"data-sonner-theme":Ke,"data-y-position":G,"data-lifted":Be&&ee.length>1&&!m,"data-x-position":oe,style:{"--front-toast-height":`${((H=Te[0])==null?void 0:H.height)||0}px`,"--width":`${Q0}px`,"--gap":`${K}px`,..._,...ev(j,b)},onBlur:X=>{V.current&&!X.currentTarget.contains(X.relatedTarget)&&(V.current=!1,D.current&&(D.current.focus({preventScroll:!0}),D.current=null))},onFocus:X=>{X.target instanceof HTMLElement&&X.target.dataset.dismissible==="false"||V.current||(V.current=!0,D.current=X.relatedTarget)},onMouseEnter:()=>we(!0),onMouseMove:()=>we(!0),onMouseLeave:()=>{Ne||we(!1)},onDragEnd:()=>we(!1),onPointerDown:X=>{X.target instanceof HTMLElement&&X.target.dataset.dismissible==="false"||ze(!0)},onPointerUp:()=>ze(!1)},ee.filter(X=>!X.position&&F===0||X.position===v).map((X,de)=>{var le,pe;return O.createElement(Z0,{key:X.id,icons:te,index:de,toast:X,defaultRichColors:k,duration:(le=A==null?void 0:A.duration)!=null?le:I,className:A==null?void 0:A.className,descriptionClassName:A==null?void 0:A.descriptionClassName,invert:c,visibleToasts:M,closeButton:(pe=A==null?void 0:A.closeButton)!=null?pe:x,interacting:Ne,position:v,style:A==null?void 0:A.style,unstyled:A==null?void 0:A.unstyled,classNames:A==null?void 0:A.classNames,cancelButtonStyle:A==null?void 0:A.cancelButtonStyle,actionButtonStyle:A==null?void 0:A.actionButtonStyle,closeButtonAriaLabel:A==null?void 0:A.closeButtonAriaLabel,removeToast:B,toasts:ee.filter(Ae=>Ae.position==X.position),heights:Te.filter(Ae=>Ae.position==X.position),setHeights:Le,expandByDefault:m,gap:K,expanded:Be,swipeDirections:a.swipeDirections})})):null}))});function nv({products:o}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"product-list-container",children:r.jsx("div",{className:"product-grid",children:o.length>0?o.map(a=>r.jsx(rv,{product:a},a.id)):r.jsx("div",{className:"no-products-message",children:"No products matched your search."})})})]})}function rv({product:o,isHoverPreview:a=!1}){const{addItem:l,openCartDrawer:c}=Vn(),p=`/products/${o.id}`;return r.jsxs("div",{role:a?void 0:"link",tabIndex:a?void 0:0,onClick:a?void 0:f=>{f.target.closest("button")||(window.location.href=p)},onKeyDown:a?void 0:f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),window.location.href=p)},style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"460px",maxHeight:"520px",boxShadow:a?"0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814":"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden",display:"flex",flexDirection:"column",cursor:a?"default":"pointer"},children:[r.jsxs("div",{style:{position:"relative",height:"220px",backgroundColor:"var(--muted)"},children:[o.imageUrl?r.jsx("img",{src:o.imageUrl,alt:o.imageAlt||o.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null,a?r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#10182808"}}):null,r.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",zIndex:a?1:"auto"},children:r.jsx(st,{label:o.badgeLabel,variant:o.badgeVariant,size:"sm"})}),r.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:a?1:"auto"},children:r.jsx("button",{style:{height:"32px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"8px",backgroundColor:"transparent",color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:"Save"})})]}),r.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"10px",flex:1},children:[r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.name}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical",overflow:"hidden"},children:o.descriptor}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.featureLine}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"auto",paddingTop:"8px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.priceLabel}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.shippingLabel})]})]}),r.jsx("div",{style:{padding:"16px",paddingTop:"0"},children:r.jsx(We,{variant:"primary",size:"md",label:o.isInStock?"Add to cart":"Out of stock",disabled:!o.isInStock||!o.variantId,onClick:async()=>{if(!o.variantId)return;if(!await l(o.variantId)){bd.error("Unable to add item",{description:"Please try again.",duration:5e3});return}bd.success("Added to cart",{description:`${o.name} is in your cart.`,duration:1/0,action:{label:"View cart",onClick:()=>c()},cancel:{label:"Close",onClick:()=>{}}})},fullWidth:!0})})]})}function iv(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"products-page-header",children:[r.jsxs("div",{className:"products-page-header-content",children:[r.jsx("div",{className:"products-page-eyebrow",children:"Curated gear"}),r.jsx("h1",{className:"products-page-title",children:"Products"})]}),r.jsx("div",{className:"products-page-description",children:"Best-in-class essentials chosen for durability, clarity, and real daily use."})]})]})}function ov({resultCount:o}){const[a,l]=R.useState(!1),[c,p]=R.useState("Recommended"),f=["Recommended","Price: Low to High","Price: High to Low","Newest","Most Popular"];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"product-results-header",children:[r.jsxs("div",{className:"results-count",children:["Showing ",r.jsx("span",{className:"results-count-number",children:o})," ","results"]}),r.jsxs("div",{className:"sort-controls",children:[r.jsx("span",{className:"sort-label",children:"Sort by:"}),r.jsxs("div",{className:"sort-dropdown-wrapper",children:[r.jsxs("button",{onClick:()=>l(!a),className:"sort-button",onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--muted)",m.currentTarget.style.borderColor="var(--border)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="var(--card)",m.currentTarget.style.borderColor="var(--border)"},children:[c,r.jsx(Oh,{size:16,color:"var(--muted-foreground)",style:{transition:"transform 150ms ease",transform:a?"rotate(180deg)":"rotate(0deg)"}})]}),a&&r.jsx("div",{className:"sort-dropdown",children:f.map(m=>r.jsx("button",{onClick:()=>{p(m),l(!1)},className:"sort-option",style:{backgroundColor:c===m?"var(--muted)":"transparent",fontWeight:c===m?"600":"500",color:c===m?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:x=>{c!==m&&(x.currentTarget.style.backgroundColor="var(--muted)")},onMouseLeave:x=>{c!==m&&(x.currentTarget.style.backgroundColor="transparent")},children:m},m))})]})]})]})]})}const sv={id:ls,label:Ay},av=o=>{const a=new Set;return o.flatMap(c=>c.categoryIds.map((p,f)=>({id:p,label:c.categoryLabels[f]??c.categoryIds[f]}))).filter(c=>!c.id||a.has(c.id)?!1:(a.add(c.id),!0))};function lv(o){const a=av(o);return{filters:[sv,...a],isLoading:!1,resetLabel:"Reset filters"}}const uv=120,cv=(o,a)=>{const l=Number.parseFloat(o);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:a,maximumFractionDigits:0}).format(l):`${a} ${o}`},dv=o=>{var a;return o.availableForSale===!1?!1:typeof o.totalInventory=="number"?o.totalInventory>0:((a=o.variants)==null?void 0:a.edges.some(l=>{const c=l.node;return c.availableForSale===!1?!1:typeof c.quantityAvailable=="number"?c.quantityAvailable>0:c.availableForSale===!0}))??!0},pv=o=>{var l,c,p,f;const a=(c=(l=o.variants)==null?void 0:l.edges.find(m=>{const x=m.node;return x.availableForSale&&(typeof x.quantityAvailable!="number"||x.quantityAvailable>0)}))==null?void 0:c.node;return(a==null?void 0:a.id)||((f=(p=o.variants)==null?void 0:p.edges[0])==null?void 0:f.node.id)||null},fv=(o,a=uv)=>{const l=o.replace(/\s+/g," ").trim();return l.length<=a?l:`${l.slice(0,a).trimEnd()}...`},Td=o=>{var j,b,h,k;const a=((j=o.shortDescription)==null?void 0:j.value)||o.description||"Curated by Vibe Station",l=fv(a),c=((b=o.featureLine)==null?void 0:b.value)||o.tags.slice(0,3).join(" · ")||"Durable build",p=((h=o.shippingInfo)==null?void 0:h.value)||"Shipping calculated at checkout",f=((k=o.badge)==null?void 0:k.value)||o.tags[0]||"Curated",m=hs(o),x=Array.from(new Set(o.tags.map(I=>I.trim()).filter(Boolean))),S=x.map(I=>rp(I)).filter(Boolean);return{id:o.handle,variantId:pv(o),name:o.title,descriptor:l,featureLine:c,priceLabel:cv(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),shippingLabel:p,isInStock:dv(o),badgeLabel:f,badgeVariant:"accent",imageUrl:m==null?void 0:m.url,imageAlt:m==null?void 0:m.altText,categoryIds:S,categoryLabels:x}};let Pi=[],ml=!1,Ii=null;const Li=new Map,hl=new Set,ll=new Map,dp=o=>(o==null?void 0:o.trim())??"",mv=async o=>{const a=dp(o);if(!a)return Ii||(Ii=(async()=>{try{Pi=(await Mi({first:24})).edges.map(f=>Td(f.node))}catch(p){console.error("Failed to load products from Shopify",p),Pi=[]}finally{ml=!0,Ii=null}})(),Ii);const l=ll.get(a);if(l)return l;const c=(async()=>{try{const f=(await Mi({first:24,query:a})).edges.map(m=>Td(m.node));Li.set(a,f)}catch(p){console.error("Failed to load searched products from Shopify",p),Li.set(a,[])}finally{hl.add(a),ll.delete(a)}})();return ll.set(a,c),c};function hv(o){const a=dp(o),[l,c]=R.useState(a?Li.get(a)??[]:Pi),[p,f]=R.useState(a?!hl.has(a):!ml);return R.useEffect(()=>{let m=!1;return(a?hl.has(a):ml)?(c(a?Li.get(a)??[]:Pi),f(!1),()=>{m=!0}):(f(!0),mv(a).then(()=>{m||(c(a?Li.get(a)??[]:Pi),f(!1))}),()=>{m=!0})},[a]),{products:l,hoverPreviewProduct:l[0],isLoading:p}}function gv(){const[o,a]=R.useState(""),[l,c]=R.useState(""),[p,f]=R.useState(ls),[m,x]=R.useState(!1),{products:S,isLoading:j}=hv(l),{filters:b,resetLabel:h}=lv(S),k=p===ls?S:S.filter(I=>I.categoryIds.includes(p));return R.useEffect(()=>{j||x(!0)},[j]),R.useEffect(()=>{b.some(I=>I.id===p)||f(ls)},[p,b]),!m&&j?r.jsx(py,{}):r.jsx(it,{paddingTop:"48px",paddingBottom:"72px",background:"var(--background)",children:r.jsxs(he,{children:[r.jsx(xv,{}),r.jsx(yv,{searchInput:o,onSearchInputChange:a,onSearchSubmit:()=>c(o.trim()),isSearching:j,activeFilter:p,onFilterChange:f,filters:b,resetLabel:h,resultCount:k.length,products:k})]})})}function xv(){return r.jsx(iv,{})}function yv({searchInput:o,onSearchInputChange:a,onSearchSubmit:l,isSearching:c,activeFilter:p,onFilterChange:f,filters:m,resetLabel:x,resultCount:S,products:j}){return r.jsxs(je,{gap:"16px",children:[r.jsx(b0,{query:o,onQueryChange:a,onSearch:l,isSearching:c}),r.jsx(E0,{filters:m,activeFilter:p,onFilterChange:f,resetLabel:x}),r.jsx(ov,{resultCount:S}),r.jsx(nv,{products:j})]})}function pp({id:o,name:a,variant:l,price:c,quantity:p,imageUrl:f,imageAlt:m,onIncrement:x,onDecrement:S,onRemove:j}){return r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"flex-start"},children:[r.jsx("div",{style:{width:"72px",height:"72px",backgroundColor:"var(--muted)",borderRadius:"12px",flexShrink:0,overflow:"hidden"},children:f?r.jsx("img",{src:f,alt:m||a,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"6px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:a}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:c})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-end"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(We,{variant:"ghost",size:"sm",label:"−",onClick:S?()=>S(o):void 0}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif",minWidth:"20px",textAlign:"center"},children:p}),r.jsx(We,{variant:"ghost",size:"sm",label:"+",onClick:x?()=>x(o):void 0})]}),r.jsx(We,{variant:"ghost",size:"sm",label:"Remove",onClick:j?()=>j(o):void 0})]})]})})}const vv={title:"Cart",yourCartTitle:"Your cart",addOnsTitle:"Add-ons you may like",summaryTitle:"Order summary",subtotalLabel:"Subtotal",shippingLabel:"Shipping",shippingValue:"Calculated at checkout",totalLabel:"Total",taxesLine:"Taxes and shipping calculated at checkout.",drawerCheckoutLabel:"Checkout",drawerContinueLabel:"Continue shopping",drawerFooterCaption:"You'll complete payment in checkout.",emptyCartMessage:"Your cart is empty.",summaryCheckoutLabel:"Checkout",summaryContinueLabel:"Continue shopping",writeItemSuffix:"items",addButtonLabel:"Add"};let Di=[],gl=!1,Ti=null;const wv=async()=>Ti||(Ti=(async()=>{try{Di=(await Mi({first:2})).edges.map(a=>{const l=hs(a.node);return{id:a.node.handle,name:a.node.title,price:Number.parseFloat(a.node.priceRange.minVariantPrice.amount),imageUrl:l==null?void 0:l.url,imageAlt:(l==null?void 0:l.altText)||a.node.title}})}catch(o){console.error("Failed to load cart add-ons from Shopify",o),Di=[]}finally{gl=!0,Ti=null}})(),Ti);function Hi(){const[o,a]=R.useState(Di),[l,c]=R.useState(!gl);return R.useEffect(()=>{let p=!1;return gl?(a(Di),c(!1),()=>{p=!0}):(wv().then(()=>{p||(a(Di),c(!1))}),()=>{p=!0})},[]),{addOns:o,copy:vv,isLoading:l}}function kv(){const{items:o,incrementItem:a,decrementItem:l,removeItem:c}=Vn(),{addOns:p,copy:f}=Hi();return r.jsxs("div",{style:{flex:"0 0 65%",display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsx("h2",{style:{margin:0,fontSize:"30px",lineHeight:"38px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:f.yourCartTitle}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:o.map(m=>r.jsx(pp,{id:m.id,name:m.name,variant:m.variant,price:Oi(m.price),quantity:m.quantity,imageUrl:m.imageUrl,imageAlt:m.imageAlt,onIncrement:a,onDecrement:l,onRemove:c},m.id))}),r.jsx(He,{variant:"subtle",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:f.addOnsTitle}),r.jsx("div",{style:{display:"flex",gap:"16px"},children:p.map(m=>r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"200px"},children:[r.jsx("div",{style:{width:"100%",height:"160px",backgroundColor:"var(--muted)",borderRadius:"12px",overflow:"hidden"},children:m.imageUrl?r.jsx("img",{src:m.imageUrl,alt:m.imageAlt||m.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.name}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:Oi(m.price)}),r.jsx(We,{variant:"ghost",size:"sm",label:f.addButtonLabel})]})},m.id))})]})})]})}function jv({title:o,subtitle:a,children:l,onClose:c,footer:p}){return r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:c,children:r.jsxs("div",{style:{width:"520px",maxWidth:"92%",backgroundColor:"var(--card)",borderRadius:"20px",border:"1px solid var(--border)",boxShadow:"0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814",padding:"20px",display:"flex",flexDirection:"column",gap:"16px",position:"relative"},onClick:f=>f.stopPropagation(),children:[(o||a)&&r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",position:"relative"},children:[r.jsxs("div",{children:[o&&r.jsx("div",{style:{fontSize:"18px",fontWeight:600,color:"var(--foreground)",lineHeight:"28px"},children:o}),a&&r.jsx("div",{style:{fontSize:"14px",color:"var(--muted-foreground)",lineHeight:"20px",marginTop:"4px"},children:a})]}),c&&r.jsx("div",{style:{position:"absolute",top:0,right:0},children:r.jsx("button",{onClick:c,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"Close"})})]}),r.jsx("div",{style:{flex:1,minHeight:"100px",display:"flex",flexDirection:"column",gap:"12px"},children:l}),p&&r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:p})]})})}function Sv({itemCount:o,subtotal:a,onContinue:l,onBack:c,onClose:p}){return r.jsxs(jv,{onClose:p,title:"Heading to checkout",subtitle:"You'll complete payment securely in checkout.",footer:r.jsx(Ev,{onContinue:l,onBack:c}),children:[r.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)",marginTop:"-8px"}}),r.jsx(Cv,{itemCount:o,subtotal:a}),r.jsx(bv,{})]})}function Cv({itemCount:o,subtotal:a}){return r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(ul,{label:"Items",value:String(o),valueWeight:"600"}),r.jsx(ul,{label:"Shipping",value:"Calculated in checkout"}),r.jsx(ul,{label:"Total",value:Oi(a),valueWeight:"600",valueSize:"20px",valueLineHeight:"30px"}),r.jsx("div",{style:{marginTop:"6px"},children:r.jsx(st,{label:"No password needed",variant:"neutral",size:"sm"})})]})})}function ul({label:o,value:a,valueWeight:l="400",valueSize:c="14px",valueLineHeight:p="20px"}){return r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:o}),r.jsx("div",{style:{fontSize:c,lineHeight:p,fontWeight:l,color:"var(--foreground)"},children:a})]})}function bv(){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx("div",{style:{position:"relative",height:"6px",width:"100%",backgroundColor:"var(--border)",borderRadius:"999px",overflow:"hidden"},children:r.jsx("div",{style:{position:"absolute",top:0,left:0,height:"6px",width:"45%",backgroundColor:"#4F46E5",borderRadius:"999px",transition:"width 0.3s ease-out"}})}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)"},children:"Preparing your checkout…"})]})}function Ev({onContinue:o,onBack:a}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"100%"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[r.jsx(We,{label:"Back to cart",variant:"ghost",size:"md",onClick:a}),r.jsx(We,{label:"Continue",variant:"primary",size:"md",onClick:o})]}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)",textAlign:"right"},children:"If checkout doesn't open, try again."})]})}function fp({subtotal:o=5997,total:a=5997}){const{copy:l}=Hi();return r.jsx(He,{variant:"elevated",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.summaryTitle}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.subtotalLabel}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:Oi(o)})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingLabel}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingValue})]}),r.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.totalLabel}),r.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:Oi(a)})]})]}),r.jsx(cp,{}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.taxesLine})]})})}function Iv(){const{cartCount:o,subtotal:a,total:l,checkout:c}=Vn(),{copy:p}=Hi(),[f,m]=R.useState(!1);return r.jsxs("div",{style:{flex:"0 0 35%",display:"flex",flexDirection:"column",gap:"16px",position:"sticky",top:"24px"},children:[r.jsx(fp,{subtotal:a,total:l}),r.jsx(We,{variant:"primary",size:"lg",label:p.summaryCheckoutLabel,onClick:()=>m(!0)}),r.jsx(We,{variant:"secondary",size:"lg",label:p.summaryContinueLabel,onClick:()=>{window.location.href="/products"}}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:p.taxesLine}),f?r.jsx(Sv,{itemCount:o,subtotal:a,onBack:()=>m(!1),onClose:()=>m(!1),onContinue:()=>{c()}}):null]})}function Tv(){return r.jsx(it,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:r.jsx(he,{children:r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start"},children:[r.jsx(kv,{}),r.jsx(Iv,{})]})})})}function Fv(){const{isLoading:o}=Hi();return o?r.jsx(my,{}):r.jsx(Tv,{})}function _v(){const{items:o,cartCount:a,subtotal:l,total:c,closeCartDrawer:p,incrementItem:f,decrementItem:m,removeItem:x}=Vn(),{copy:S}=Hi();return r.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:[r.jsx("div",{onClick:p,style:{position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.5)"}}),r.jsxs("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:"420px",backgroundColor:"var(--card)",borderLeft:"1px solid var(--border)",boxShadow:"-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"24px",borderBottom:"1px solid var(--border)",flexShrink:0},children:r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("h3",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:S.title}),r.jsx(st,{label:`${a} ${S.writeItemSuffix}`,variant:"neutral",size:"sm"})]})}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},children:[o.length?r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:o.map(j=>r.jsx(pp,{id:j.id,name:j.name,variant:j.variant,price:`₹${j.price.toLocaleString("en-IN")}`,quantity:j.quantity,imageUrl:j.imageUrl,imageAlt:j.imageAlt,onIncrement:f,onDecrement:m,onRemove:x},j.id))}):r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:S.emptyCartMessage}),r.jsx(fp,{subtotal:l,total:c})]}),r.jsxs("div",{style:{padding:"24px",borderTop:"1px solid var(--border)",flexShrink:0,display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(We,{variant:"primary",size:"lg",label:S.drawerCheckoutLabel,onClick:()=>{p(),window.location.href="/cart"}}),r.jsx(We,{variant:"secondary",size:"lg",label:S.drawerContinueLabel,onClick:p}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:S.drawerFooterCaption})]})]})]})}function Fd(){const o=window.location.pathname.replace(/\/+$/,"")||"/";if(o.startsWith("/products/"))return r.jsx(C0,{});switch(o){case"/":return r.jsx(hy,{});case"/products":return r.jsx(gv,{});case"/philosophy":return r.jsx(yy,{});case"/community":return r.jsx(_x,{});case"/cart":return r.jsx(Fv,{});case"/account":return r.jsx(Bg,{});case"/account/login":return r.jsx(_g,{});case"/account/register":return r.jsx(Rg,{});case"/account/password-reset":return r.jsx(Ng,{});case"/account/password-reset/confirm":return r.jsx(zg,{});default:return r.jsx(Bx,{})}}function Rv(){const{isDrawerOpen:o}=Vn(),a=window.location.pathname.replace(/\/+$/,"")||"/";return a==="/account"||a.startsWith("/account/")?r.jsx(r.Fragment,{children:Fd()}):r.jsxs(xx,{children:[Fd(),o?r.jsx(_v,{}):null]})}const Nv=({...o})=>{const{theme:a="system"}=bl();return r.jsx(tv,{theme:a,position:"top-center",className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...o})};function zv({children:o}){return r.jsxs(Gg,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[r.jsx(_h,{children:r.jsx(Yg,{children:o})}),r.jsx(Nv,{})]})}const mp=document.getElementById("root");if(!mp)throw new Error('Root element with id "root" was not found.');gm.createRoot(mp).render(r.jsx(R.StrictMode,{children:r.jsx(zv,{children:r.jsx(Rv,{})})}));

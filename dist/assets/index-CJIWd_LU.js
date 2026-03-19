(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(p){if(p.ep)return;p.ep=!0;const f=l(p);fetch(p.href,f)}})();function _d(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ja={exports:{}},bo={},Za={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function cm(){if(rd)return ue;rd=1;var i=Symbol.for("react.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),h=Symbol.iterator;function w(v){return v===null||typeof v!="object"?null:(v=h&&v[h]||v["@@iterator"],typeof v=="function"?v:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function A(v,F,H){this.props=v,this.context=F,this.refs=M,this.updater=H||T}A.prototype.isReactComponent={},A.prototype.setState=function(v,F){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,F,"setState")},A.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function U(){}U.prototype=A.prototype;function K(v,F,H){this.props=v,this.context=F,this.refs=M,this.updater=H||T}var te=K.prototype=new U;te.constructor=K,R(te,A.prototype),te.isPureReactComponent=!0;var re=Array.isArray,ee=Object.prototype.hasOwnProperty,ae={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function Te(v,F,H){var G,ie={},X=null,de=null;if(F!=null)for(G in F.ref!==void 0&&(de=F.ref),F.key!==void 0&&(X=""+F.key),F)ee.call(F,G)&&!ve.hasOwnProperty(G)&&(ie[G]=F[G]);var le=arguments.length-2;if(le===1)ie.children=H;else if(1<le){for(var pe=Array(le),Ae=0;Ae<le;Ae++)pe[Ae]=arguments[Ae+2];ie.children=pe}if(v&&v.defaultProps)for(G in le=v.defaultProps,le)ie[G]===void 0&&(ie[G]=le[G]);return{$$typeof:i,type:v,key:X,ref:de,props:ie,_owner:ae.current}}function Le(v,F){return{$$typeof:i,type:v.type,key:F,ref:v.ref,props:v.props,_owner:v._owner}}function Be(v){return typeof v=="object"&&v!==null&&v.$$typeof===i}function we(v){var F={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(H){return F[H]})}var Ne=/\/+/g;function ze(v,F){return typeof v=="object"&&v!==null&&v.key!=null?we(""+v.key):F.toString(36)}function Ke(v,F,H,G,ie){var X=typeof v;(X==="undefined"||X==="boolean")&&(v=null);var de=!1;if(v===null)de=!0;else switch(X){case"string":case"number":de=!0;break;case"object":switch(v.$$typeof){case i:case a:de=!0}}if(de)return de=v,ie=ie(de),v=G===""?"."+ze(de,0):G,re(ie)?(H="",v!=null&&(H=v.replace(Ne,"$&/")+"/"),Ke(ie,F,H,"",function(Ae){return Ae})):ie!=null&&(Be(ie)&&(ie=Le(ie,H+(!ie.key||de&&de.key===ie.key?"":(""+ie.key).replace(Ne,"$&/")+"/")+v)),F.push(ie)),1;if(de=0,G=G===""?".":G+":",re(v))for(var le=0;le<v.length;le++){X=v[le];var pe=G+ze(X,le);de+=Ke(X,F,H,pe,ie)}else if(pe=w(v),typeof pe=="function")for(v=pe.call(v),le=0;!(X=v.next()).done;)X=X.value,pe=G+ze(X,le++),de+=Ke(X,F,H,pe,ie);else if(X==="object")throw F=String(v),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return de}function Ce(v,F,H){if(v==null)return v;var G=[],ie=0;return Ke(v,G,"","",function(X){return F.call(H,X,ie++)}),G}function ne(v){if(v._status===-1){var F=v._result;F=F(),F.then(function(H){(v._status===0||v._status===-1)&&(v._status=1,v._result=H)},function(H){(v._status===0||v._status===-1)&&(v._status=2,v._result=H)}),v._status===-1&&(v._status=0,v._result=F)}if(v._status===1)return v._result.default;throw v._result}var ce={current:null},D={transition:null},V={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:D,ReactCurrentOwner:ae};function B(){throw Error("act(...) is not supported in production builds of React.")}return ue.Children={map:Ce,forEach:function(v,F,H){Ce(v,function(){F.apply(this,arguments)},H)},count:function(v){var F=0;return Ce(v,function(){F++}),F},toArray:function(v){return Ce(v,function(F){return F})||[]},only:function(v){if(!Be(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ue.Component=A,ue.Fragment=l,ue.Profiler=p,ue.PureComponent=K,ue.StrictMode=c,ue.Suspense=S,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,ue.act=B,ue.cloneElement=function(v,F,H){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var G=R({},v.props),ie=v.key,X=v.ref,de=v._owner;if(F!=null){if(F.ref!==void 0&&(X=F.ref,de=ae.current),F.key!==void 0&&(ie=""+F.key),v.type&&v.type.defaultProps)var le=v.type.defaultProps;for(pe in F)ee.call(F,pe)&&!ve.hasOwnProperty(pe)&&(G[pe]=F[pe]===void 0&&le!==void 0?le[pe]:F[pe])}var pe=arguments.length-2;if(pe===1)G.children=H;else if(1<pe){le=Array(pe);for(var Ae=0;Ae<pe;Ae++)le[Ae]=arguments[Ae+2];G.children=le}return{$$typeof:i,type:v.type,key:ie,ref:X,props:G,_owner:de}},ue.createContext=function(v){return v={$$typeof:m,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:f,_context:v},v.Consumer=v},ue.createElement=Te,ue.createFactory=function(v){var F=Te.bind(null,v);return F.type=v,F},ue.createRef=function(){return{current:null}},ue.forwardRef=function(v){return{$$typeof:x,render:v}},ue.isValidElement=Be,ue.lazy=function(v){return{$$typeof:C,_payload:{_status:-1,_result:v},_init:ne}},ue.memo=function(v,F){return{$$typeof:j,type:v,compare:F===void 0?null:F}},ue.startTransition=function(v){var F=D.transition;D.transition={};try{v()}finally{D.transition=F}},ue.unstable_act=B,ue.useCallback=function(v,F){return ce.current.useCallback(v,F)},ue.useContext=function(v){return ce.current.useContext(v)},ue.useDebugValue=function(){},ue.useDeferredValue=function(v){return ce.current.useDeferredValue(v)},ue.useEffect=function(v,F){return ce.current.useEffect(v,F)},ue.useId=function(){return ce.current.useId()},ue.useImperativeHandle=function(v,F,H){return ce.current.useImperativeHandle(v,F,H)},ue.useInsertionEffect=function(v,F){return ce.current.useInsertionEffect(v,F)},ue.useLayoutEffect=function(v,F){return ce.current.useLayoutEffect(v,F)},ue.useMemo=function(v,F){return ce.current.useMemo(v,F)},ue.useReducer=function(v,F,H){return ce.current.useReducer(v,F,H)},ue.useRef=function(v){return ce.current.useRef(v)},ue.useState=function(v){return ce.current.useState(v)},ue.useSyncExternalStore=function(v,F,H){return ce.current.useSyncExternalStore(v,F,H)},ue.useTransition=function(){return ce.current.useTransition()},ue.version="18.3.1",ue}var od;function xl(){return od||(od=1,Za.exports=cm()),Za.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function dm(){if(id)return bo;id=1;var i=xl(),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(x,S,j){var C,h={},w=null,T=null;j!==void 0&&(w=""+j),S.key!==void 0&&(w=""+S.key),S.ref!==void 0&&(T=S.ref);for(C in S)c.call(S,C)&&!f.hasOwnProperty(C)&&(h[C]=S[C]);if(x&&x.defaultProps)for(C in S=x.defaultProps,S)h[C]===void 0&&(h[C]=S[C]);return{$$typeof:a,type:x,key:w,ref:T,props:h,_owner:p.current}}return bo.Fragment=l,bo.jsx=m,bo.jsxs=m,bo}var sd;function pm(){return sd||(sd=1,Ja.exports=dm()),Ja.exports}var r=pm(),_=xl();const O=_d(_);var ns={},el={exports:{}},vt={},tl={exports:{}},nl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function fm(){return ad||(ad=1,(function(i){function a(D,V){var B=D.length;D.push(V);e:for(;0<B;){var v=B-1>>>1,F=D[v];if(0<p(F,V))D[v]=V,D[B]=F,B=v;else break e}}function l(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var V=D[0],B=D.pop();if(B!==V){D[0]=B;e:for(var v=0,F=D.length,H=F>>>1;v<H;){var G=2*(v+1)-1,ie=D[G],X=G+1,de=D[X];if(0>p(ie,B))X<F&&0>p(de,ie)?(D[v]=de,D[X]=B,v=X):(D[v]=ie,D[G]=B,v=G);else if(X<F&&0>p(de,B))D[v]=de,D[X]=B,v=X;else break e}}return V}function p(D,V){var B=D.sortIndex-V.sortIndex;return B!==0?B:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var m=Date,x=m.now();i.unstable_now=function(){return m.now()-x}}var S=[],j=[],C=1,h=null,w=3,T=!1,R=!1,M=!1,A=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(D){for(var V=l(j);V!==null;){if(V.callback===null)c(j);else if(V.startTime<=D)c(j),V.sortIndex=V.expirationTime,a(S,V);else break;V=l(j)}}function re(D){if(M=!1,te(D),!R)if(l(S)!==null)R=!0,ne(ee);else{var V=l(j);V!==null&&ce(re,V.startTime-D)}}function ee(D,V){R=!1,M&&(M=!1,U(Te),Te=-1),T=!0;var B=w;try{for(te(V),h=l(S);h!==null&&(!(h.expirationTime>V)||D&&!we());){var v=h.callback;if(typeof v=="function"){h.callback=null,w=h.priorityLevel;var F=v(h.expirationTime<=V);V=i.unstable_now(),typeof F=="function"?h.callback=F:h===l(S)&&c(S),te(V)}else c(S);h=l(S)}if(h!==null)var H=!0;else{var G=l(j);G!==null&&ce(re,G.startTime-V),H=!1}return H}finally{h=null,w=B,T=!1}}var ae=!1,ve=null,Te=-1,Le=5,Be=-1;function we(){return!(i.unstable_now()-Be<Le)}function Ne(){if(ve!==null){var D=i.unstable_now();Be=D;var V=!0;try{V=ve(!0,D)}finally{V?ze():(ae=!1,ve=null)}}else ae=!1}var ze;if(typeof K=="function")ze=function(){K(Ne)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Ce=Ke.port2;Ke.port1.onmessage=Ne,ze=function(){Ce.postMessage(null)}}else ze=function(){A(Ne,0)};function ne(D){ve=D,ae||(ae=!0,ze())}function ce(D,V){Te=A(function(){D(i.unstable_now())},V)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_continueExecution=function(){R||T||(R=!0,ne(ee))},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_getFirstCallbackNode=function(){return l(S)},i.unstable_next=function(D){switch(w){case 1:case 2:case 3:var V=3;break;default:V=w}var B=w;w=V;try{return D()}finally{w=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=w;w=D;try{return V()}finally{w=B}},i.unstable_scheduleCallback=function(D,V,B){var v=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?v+B:v):B=v,D){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=B+F,D={id:C++,callback:V,priorityLevel:D,startTime:B,expirationTime:F,sortIndex:-1},B>v?(D.sortIndex=B,a(j,D),l(S)===null&&D===l(j)&&(M?(U(Te),Te=-1):M=!0,ce(re,B-v))):(D.sortIndex=F,a(S,D),R||T||(R=!0,ne(ee))),D},i.unstable_shouldYield=we,i.unstable_wrapCallback=function(D){var V=w;return function(){var B=w;w=V;try{return D.apply(this,arguments)}finally{w=B}}}})(nl)),nl}var ld;function mm(){return ld||(ld=1,tl.exports=fm()),tl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function hm(){if(ud)return vt;ud=1;var i=xl(),a=mm();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},h={};function w(e){return S.call(h,e)?!0:S.call(C,e)?!1:j.test(e)?h[e]=!0:(C[e]=!0,!1)}function T(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R(e,t,n,o){if(t===null||typeof t>"u"||T(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function M(e,t,n,o,s,u,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=d}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new M(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new M(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new M(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new M(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new M(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new M(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)});var U=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(U,K);A[t]=new M(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(U,K);A[t]=new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(U,K);A[t]=new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,t,n,o){var s=A.hasOwnProperty(t)?A[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(R(t,n,s,o)&&(n=null),o||s===null?w(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,o=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var re=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),ae=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),Le=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),we=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),D=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,v;function F(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var H=!1;function G(e,t){if(!e||H)return"";H=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(I){var o=I}Reflect.construct(e,[],t)}else{try{t.call()}catch(I){o=I}e.call(t.prototype)}else{try{throw Error()}catch(I){o=I}e()}}catch(I){if(I&&o&&typeof I.stack=="string"){for(var s=I.stack.split(`
`),u=o.stack.split(`
`),d=s.length-1,g=u.length-1;1<=d&&0<=g&&s[d]!==u[g];)g--;for(;1<=d&&0<=g;d--,g--)if(s[d]!==u[g]){if(d!==1||g!==1)do if(d--,g--,0>g||s[d]!==u[g]){var y=`
`+s[d].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=d&&0<=g);break}}}finally{H=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function ie(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case ae:return"Portal";case Le:return"Profiler";case Te:return"StrictMode";case ze:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case we:return(e.displayName||"Context")+".Consumer";case Be:return(e._context.displayName||"Context")+".Provider";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:X(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return X(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(t);case 8:return t===Te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ae(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){o=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function en(e){e._valueTracker||(e._valueTracker=Ae(e))}function yn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=pe(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qt(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vo(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dr(e,t){t=t.checked,t!=null&&te(e,"checked",t,!1)}function tn(e,t){Dr(e,t);var n=le(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?St(e,t.type,n):t.hasOwnProperty("defaultValue")&&St(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function St(e,t,n){(t!=="number"||kt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qn=Array.isArray;function vn(e,t,n,o){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&o&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function et(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nn(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(qn(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function qo(e,t){var n=le(t.value),o=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Qo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Or(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yn,cr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yn=Yn||document.createElement("div"),Yn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kn=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){kn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function Yo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function Ko(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,s=Yo(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,s):e[n]=s}}var Xo=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dr(e,t){if(t){if(Xo[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Br(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kn=null;function Ft(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $r=null,Sn=null,rn=null;function Ur(e){if(e=lo(e)){if(typeof $r!="function")throw Error(l(280));var t=e.stateNode;t&&(t=xi(t),$r(e.stateNode,e.type,t))}}function se(e){Sn?rn?rn.push(e):rn=[e]:Sn=e}function De(){if(Sn){var e=Sn,t=rn;if(rn=Sn=null,Ur(e),t)for(e=0;e<t.length;e++)Ur(t[e])}}function qe(e,t){return e(t)}function st(){}var jn=!1;function $e(e,t,n){if(jn)return e(t,n);jn=!0;try{return qe(e,t,n)}finally{jn=!1,(Sn!==null||rn!==null)&&(st(),De())}}function Xe(e,t){var n=e.stateNode;if(n===null)return null;var o=xi(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var bn=!1;if(x)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){bn=!0}}),window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch{bn=!1}function jt(e,t,n,o,s,u,d,g,y){var I=Array.prototype.slice.call(arguments,3);try{t.apply(n,I)}catch(z){this.onError(z)}}var Cn=!1,_t=null,Hr=!1,xs=null,gp={onError:function(e){Cn=!0,_t=e}};function xp(e,t,n,o,s,u,d,g,y){Cn=!1,_t=null,jt.apply(gp,arguments)}function yp(e,t,n,o,s,u,d,g,y){if(xp.apply(this,arguments),Cn){if(Cn){var I=_t;Cn=!1,_t=null}else throw Error(l(198));Hr||(Hr=!0,xs=I)}}function Xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function El(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Il(e){if(Xn(e)!==e)throw Error(l(188))}function vp(e){var t=e.alternate;if(!t){if(t=Xn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,o=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return Il(s),e;if(u===o)return Il(s),t;u=u.sibling}throw Error(l(188))}if(n.return!==o.return)n=s,o=u;else{for(var d=!1,g=s.child;g;){if(g===n){d=!0,n=s,o=u;break}if(g===o){d=!0,o=s,n=u;break}g=g.sibling}if(!d){for(g=u.child;g;){if(g===n){d=!0,n=u,o=s;break}if(g===o){d=!0,o=u,n=s;break}g=g.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==o)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Tl(e){return e=vp(e),e!==null?Fl(e):null}function Fl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fl(e);if(t!==null)return t;e=e.sibling}return null}var _l=a.unstable_scheduleCallback,Rl=a.unstable_cancelCallback,wp=a.unstable_shouldYield,kp=a.unstable_requestPaint,Me=a.unstable_now,Sp=a.unstable_getCurrentPriorityLevel,ys=a.unstable_ImmediatePriority,Nl=a.unstable_UserBlockingPriority,Go=a.unstable_NormalPriority,jp=a.unstable_LowPriority,zl=a.unstable_IdlePriority,Jo=null,Yt=null;function bp(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Ip,Cp=Math.log,Ep=Math.LN2;function Ip(e){return e>>>=0,e===0?32:31-(Cp(e)/Ep|0)|0}var Zo=64,ei=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,u=e.pingedLanes,d=n&268435455;if(d!==0){var g=d&~s;g!==0?o=Wr(g):(u&=d,u!==0&&(o=Wr(u)))}else d=n&~s,d!==0?o=Wr(d):u!==0&&(o=Wr(u));if(o===0)return 0;if(t!==0&&t!==o&&(t&s)===0&&(s=o&-o,u=t&-t,s>=u||s===16&&(u&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Ot(t),s=1<<n,o|=e[n],t&=~s;return o}function Tp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-Ot(u),g=1<<d,y=s[d];y===-1?((g&n)===0||(g&o)!==0)&&(s[d]=Tp(g,t)):y<=t&&(e.expiredLanes|=g),u&=~g}}function vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Al(){var e=Zo;return Zo<<=1,(Zo&4194240)===0&&(Zo=64),e}function ws(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function _p(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Ot(n),u=1<<s;t[s]=0,o[s]=-1,e[s]=-1,n&=~u}}function ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Ot(n),s=1<<o;s&t|e[o]&t&&(e[o]|=t),n&=~s}}var ge=0;function Pl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ll,Ss,Dl,Ml,Ol,js=!1,ni=[],En=null,In=null,Tn=null,qr=new Map,Qr=new Map,Fn=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bl(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function Yr(e,t,n,o,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[s]},t!==null&&(t=lo(t),t!==null&&Ss(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Np(e,t,n,o,s){switch(t){case"focusin":return En=Yr(En,e,t,n,o,s),!0;case"dragenter":return In=Yr(In,e,t,n,o,s),!0;case"mouseover":return Tn=Yr(Tn,e,t,n,o,s),!0;case"pointerover":var u=s.pointerId;return qr.set(u,Yr(qr.get(u)||null,e,t,n,o,s)),!0;case"gotpointercapture":return u=s.pointerId,Qr.set(u,Yr(Qr.get(u)||null,e,t,n,o,s)),!0}return!1}function $l(e){var t=Gn(e.target);if(t!==null){var n=Xn(t);if(n!==null){if(t=n.tag,t===13){if(t=El(n),t!==null){e.blockedOn=t,Ol(e.priority,function(){Dl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Kn=o,n.target.dispatchEvent(o),Kn=null}else return t=lo(n),t!==null&&Ss(t),e.blockedOn=n,!1;t.shift()}return!0}function Ul(e,t,n){ri(e)&&n.delete(t)}function zp(){js=!1,En!==null&&ri(En)&&(En=null),In!==null&&ri(In)&&(In=null),Tn!==null&&ri(Tn)&&(Tn=null),qr.forEach(Ul),Qr.forEach(Ul)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,zp)))}function Xr(e){function t(s){return Kr(s,e)}if(0<ni.length){Kr(ni[0],e);for(var n=1;n<ni.length;n++){var o=ni[n];o.blockedOn===e&&(o.blockedOn=null)}}for(En!==null&&Kr(En,e),In!==null&&Kr(In,e),Tn!==null&&Kr(Tn,e),qr.forEach(t),Qr.forEach(t),n=0;n<Fn.length;n++)o=Fn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)$l(n),n.blockedOn===null&&Fn.shift()}var pr=re.ReactCurrentBatchConfig,oi=!0;function Ap(e,t,n,o){var s=ge,u=pr.transition;pr.transition=null;try{ge=1,bs(e,t,n,o)}finally{ge=s,pr.transition=u}}function Pp(e,t,n,o){var s=ge,u=pr.transition;pr.transition=null;try{ge=4,bs(e,t,n,o)}finally{ge=s,pr.transition=u}}function bs(e,t,n,o){if(oi){var s=Cs(e,t,n,o);if(s===null)Us(e,t,o,ii,n),Bl(e,o);else if(Np(s,e,t,n,o))o.stopPropagation();else if(Bl(e,o),t&4&&-1<Rp.indexOf(e)){for(;s!==null;){var u=lo(s);if(u!==null&&Ll(u),u=Cs(e,t,n,o),u===null&&Us(e,t,o,ii,n),u===s)break;s=u}s!==null&&o.stopPropagation()}else Us(e,t,o,null,n)}}var ii=null;function Cs(e,t,n,o){if(ii=null,e=Ft(o),e=Gn(e),e!==null)if(t=Xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=El(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function Hl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sp()){case ys:return 1;case Nl:return 4;case Go:case jp:return 16;case zl:return 536870912;default:return 16}default:return 16}}var _n=null,Es=null,si=null;function Wl(){if(si)return si;var e,t=Es,n=t.length,o,s="value"in _n?_n.value:_n.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===s[u-o];o++);return si=s.slice(e,1<o?1-o:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Vl(){return!1}function bt(e){function t(n,o,s,u,d){this._reactName=n,this._targetInst=s,this.type=o,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?li:Vl,this.isPropagationStopped=Vl,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Is=bt(fr),Gr=B({},fr,{view:0,detail:0}),Lp=bt(Gr),Ts,Fs,Jr,ui=B({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Ts=e.screenX-Jr.screenX,Fs=e.screenY-Jr.screenY):Fs=Ts=0,Jr=e),Ts)},movementY:function(e){return"movementY"in e?e.movementY:Fs}}),ql=bt(ui),Dp=B({},ui,{dataTransfer:0}),Mp=bt(Dp),Op=B({},Gr,{relatedTarget:0}),_s=bt(Op),Bp=B({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),$p=bt(Bp),Up=B({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hp=bt(Up),Wp=B({},fr,{data:0}),Ql=bt(Wp),Vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qp[e])?!!t[e]:!1}function Rs(){return Yp}var Kp=B({},Gr,{key:function(e){if(e.key){var t=Vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xp=bt(Kp),Gp=B({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yl=bt(Gp),Jp=B({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),Zp=bt(Jp),ef=B({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tf=bt(ef),nf=B({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rf=bt(nf),of=[9,13,27,32],Ns=x&&"CompositionEvent"in window,Zr=null;x&&"documentMode"in document&&(Zr=document.documentMode);var sf=x&&"TextEvent"in window&&!Zr,Kl=x&&(!Ns||Zr&&8<Zr&&11>=Zr),Xl=" ",Gl=!1;function Jl(e,t){switch(e){case"keyup":return of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function af(e,t){switch(e){case"compositionend":return Zl(t);case"keypress":return t.which!==32?null:(Gl=!0,Xl);case"textInput":return e=t.data,e===Xl&&Gl?null:e;default:return null}}function lf(e,t){if(mr)return e==="compositionend"||!Ns&&Jl(e,t)?(e=Wl(),si=Es=_n=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kl&&t.locale!=="ko"?null:t.data;default:return null}}var uf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uf[e.type]:t==="textarea"}function tu(e,t,n,o){se(o),t=mi(t,"onChange"),0<t.length&&(n=new Is("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var eo=null,to=null;function cf(e){vu(e,0)}function ci(e){var t=vr(e);if(yn(t))return e}function df(e,t){if(e==="change")return t}var nu=!1;if(x){var zs;if(x){var As="oninput"in document;if(!As){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),As=typeof ru.oninput=="function"}zs=As}else zs=!1;nu=zs&&(!document.documentMode||9<document.documentMode)}function ou(){eo&&(eo.detachEvent("onpropertychange",iu),to=eo=null)}function iu(e){if(e.propertyName==="value"&&ci(to)){var t=[];tu(t,to,e,Ft(e)),$e(cf,t)}}function pf(e,t,n){e==="focusin"?(ou(),eo=t,to=n,eo.attachEvent("onpropertychange",iu)):e==="focusout"&&ou()}function ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(to)}function mf(e,t){if(e==="click")return ci(t)}function hf(e,t){if(e==="input"||e==="change")return ci(t)}function gf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:gf;function no(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var s=n[o];if(!S.call(t,s)||!Bt(e[s],t[s]))return!1}return!0}function su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var n=su(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=su(n)}}function lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uu(){for(var e=window,t=kt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kt(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xf(e){var t=uu(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lu(n.ownerDocument.documentElement,n)){if(o!==null&&Ps(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,u=Math.min(o.start,s);o=o.end===void 0?u:Math.min(o.end,s),!e.extend&&u>o&&(s=o,o=u,u=s),s=au(n,u);var d=au(n,o);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),u>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yf=x&&"documentMode"in document&&11>=document.documentMode,hr=null,Ls=null,ro=null,Ds=!1;function cu(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ds||hr==null||hr!==kt(o)||(o=hr,"selectionStart"in o&&Ps(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&no(ro,o)||(ro=o,o=mi(Ls,"onSelect"),0<o.length&&(t=new Is("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=hr)))}function di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},Ms={},du={};x&&(du=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function pi(e){if(Ms[e])return Ms[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in du)return Ms[e]=t[n];return e}var pu=pi("animationend"),fu=pi("animationiteration"),mu=pi("animationstart"),hu=pi("transitionend"),gu=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,t){gu.set(e,t),f(t,[e])}for(var Os=0;Os<xu.length;Os++){var Bs=xu[Os],vf=Bs.toLowerCase(),wf=Bs[0].toUpperCase()+Bs.slice(1);Rn(vf,"on"+wf)}Rn(pu,"onAnimationEnd"),Rn(fu,"onAnimationIteration"),Rn(mu,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(hu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function yu(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,yp(o,t,void 0,e),e.currentTarget=null}function vu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],s=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var d=o.length-1;0<=d;d--){var g=o[d],y=g.instance,I=g.currentTarget;if(g=g.listener,y!==u&&s.isPropagationStopped())break e;yu(s,g,I),u=y}else for(d=0;d<o.length;d++){if(g=o[d],y=g.instance,I=g.currentTarget,g=g.listener,y!==u&&s.isPropagationStopped())break e;yu(s,g,I),u=y}}}if(Hr)throw e=xs,Hr=!1,xs=null,e}function je(e,t){var n=t[Ys];n===void 0&&(n=t[Ys]=new Set);var o=e+"__bubble";n.has(o)||(wu(t,e,2,!1),n.add(o))}function $s(e,t,n){var o=0;t&&(o|=4),wu(n,e,o,t)}var fi="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[fi]){e[fi]=!0,c.forEach(function(n){n!=="selectionchange"&&(kf.has(n)||$s(n,!1,e),$s(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,$s("selectionchange",!1,t))}}function wu(e,t,n,o){switch(Hl(t)){case 1:var s=Ap;break;case 4:s=Pp;break;default:s=bs}n=s.bind(null,t,n,e),s=void 0,!bn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Us(e,t,n,o,s){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var g=o.stateNode.containerInfo;if(g===s||g.nodeType===8&&g.parentNode===s)break;if(d===4)for(d=o.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===s||y.nodeType===8&&y.parentNode===s))return;d=d.return}for(;g!==null;){if(d=Gn(g),d===null)return;if(y=d.tag,y===5||y===6){o=u=d;continue e}g=g.parentNode}}o=o.return}$e(function(){var I=u,z=Ft(n),P=[];e:{var N=gu.get(e);if(N!==void 0){var $=Is,q=e;switch(e){case"keypress":if(ai(n)===0)break e;case"keydown":case"keyup":$=Xp;break;case"focusin":q="focus",$=_s;break;case"focusout":q="blur",$=_s;break;case"beforeblur":case"afterblur":$=_s;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Zp;break;case pu:case fu:case mu:$=$p;break;case hu:$=tf;break;case"scroll":$=Lp;break;case"wheel":$=rf;break;case"copy":case"cut":case"paste":$=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Yl}var Q=(t&4)!==0,Oe=!Q&&e==="scroll",b=Q?N!==null?N+"Capture":null:N;Q=[];for(var k=I,E;k!==null;){E=k;var L=E.stateNode;if(E.tag===5&&L!==null&&(E=L,b!==null&&(L=Xe(k,b),L!=null&&Q.push(so(k,L,E)))),Oe)break;k=k.return}0<Q.length&&(N=new $(N,q,null,n,z),P.push({event:N,listeners:Q}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",N&&n!==Kn&&(q=n.relatedTarget||n.fromElement)&&(Gn(q)||q[on]))break e;if(($||N)&&(N=z.window===z?z:(N=z.ownerDocument)?N.defaultView||N.parentWindow:window,$?(q=n.relatedTarget||n.toElement,$=I,q=q?Gn(q):null,q!==null&&(Oe=Xn(q),q!==Oe||q.tag!==5&&q.tag!==6)&&(q=null)):($=null,q=I),$!==q)){if(Q=ql,L="onMouseLeave",b="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Yl,L="onPointerLeave",b="onPointerEnter",k="pointer"),Oe=$==null?N:vr($),E=q==null?N:vr(q),N=new Q(L,k+"leave",$,n,z),N.target=Oe,N.relatedTarget=E,L=null,Gn(z)===I&&(Q=new Q(b,k+"enter",q,n,z),Q.target=E,Q.relatedTarget=Oe,L=Q),Oe=L,$&&q)t:{for(Q=$,b=q,k=0,E=Q;E;E=xr(E))k++;for(E=0,L=b;L;L=xr(L))E++;for(;0<k-E;)Q=xr(Q),k--;for(;0<E-k;)b=xr(b),E--;for(;k--;){if(Q===b||b!==null&&Q===b.alternate)break t;Q=xr(Q),b=xr(b)}Q=null}else Q=null;$!==null&&ku(P,N,$,Q,!1),q!==null&&Oe!==null&&ku(P,Oe,q,Q,!0)}}e:{if(N=I?vr(I):window,$=N.nodeName&&N.nodeName.toLowerCase(),$==="select"||$==="input"&&N.type==="file")var Y=df;else if(eu(N))if(nu)Y=hf;else{Y=ff;var J=pf}else($=N.nodeName)&&$.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(Y=mf);if(Y&&(Y=Y(e,I))){tu(P,Y,n,z);break e}J&&J(e,N,I),e==="focusout"&&(J=N._wrapperState)&&J.controlled&&N.type==="number"&&St(N,"number",N.value)}switch(J=I?vr(I):window,e){case"focusin":(eu(J)||J.contentEditable==="true")&&(hr=J,Ls=I,ro=null);break;case"focusout":ro=Ls=hr=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,cu(P,n,z);break;case"selectionchange":if(yf)break;case"keydown":case"keyup":cu(P,n,z)}var Z;if(Ns)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else mr?Jl(e,n)&&(oe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(oe="onCompositionStart");oe&&(Kl&&n.locale!=="ko"&&(mr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&mr&&(Z=Wl()):(_n=z,Es="value"in _n?_n.value:_n.textContent,mr=!0)),J=mi(I,oe),0<J.length&&(oe=new Ql(oe,e,null,n,z),P.push({event:oe,listeners:J}),Z?oe.data=Z:(Z=Zl(n),Z!==null&&(oe.data=Z)))),(Z=sf?af(e,n):lf(e,n))&&(I=mi(I,"onBeforeInput"),0<I.length&&(z=new Ql("onBeforeInput","beforeinput",null,n,z),P.push({event:z,listeners:I}),z.data=Z))}vu(P,t)})}function so(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mi(e,t){for(var n=t+"Capture",o=[];e!==null;){var s=e,u=s.stateNode;s.tag===5&&u!==null&&(s=u,u=Xe(e,n),u!=null&&o.unshift(so(e,u,s)),u=Xe(e,t),u!=null&&o.push(so(e,u,s))),e=e.return}return o}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ku(e,t,n,o,s){for(var u=t._reactName,d=[];n!==null&&n!==o;){var g=n,y=g.alternate,I=g.stateNode;if(y!==null&&y===o)break;g.tag===5&&I!==null&&(g=I,s?(y=Xe(n,u),y!=null&&d.unshift(so(n,y,g))):s||(y=Xe(n,u),y!=null&&d.push(so(n,y,g)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Sf=/\r\n?/g,jf=/\u0000|\uFFFD/g;function Su(e){return(typeof e=="string"?e:""+e).replace(Sf,`
`).replace(jf,"")}function hi(e,t,n){if(t=Su(t),Su(e)!==t&&n)throw Error(l(425))}function gi(){}var Hs=null,Ws=null;function Vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qs=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,Cf=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(Ef)}:qs;function Ef(e){setTimeout(function(){throw e})}function Qs(e,t){var n=t,o=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(o===0){e.removeChild(s),Xr(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=s}while(n);Xr(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yr=Math.random().toString(36).slice(2),Kt="__reactFiber$"+yr,ao="__reactProps$"+yr,on="__reactContainer$"+yr,Ys="__reactEvents$"+yr,If="__reactListeners$"+yr,Tf="__reactHandles$"+yr;function Gn(e){var t=e[Kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[on]||n[Kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bu(e);e!==null;){if(n=e[Kt])return n;e=bu(e)}return t}e=n,n=e.parentNode}return null}function lo(e){return e=e[Kt]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function xi(e){return e[ao]||null}var Ks=[],wr=-1;function zn(e){return{current:e}}function be(e){0>wr||(e.current=Ks[wr],Ks[wr]=null,wr--)}function ke(e,t){wr++,Ks[wr]=e.current,e.current=t}var An={},at=zn(An),mt=zn(!1),Jn=An;function kr(e,t){var n=e.type.contextTypes;if(!n)return An;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},u;for(u in n)s[u]=t[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ht(e){return e=e.childContextTypes,e!=null}function yi(){be(mt),be(at)}function Cu(e,t,n){if(at.current!==An)throw Error(l(168));ke(at,t),ke(mt,n)}function Eu(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(l(108,de(e)||"Unknown",s));return B({},n,o)}function vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Jn=at.current,ke(at,e),ke(mt,mt.current),!0}function Iu(e,t,n){var o=e.stateNode;if(!o)throw Error(l(169));n?(e=Eu(e,t,Jn),o.__reactInternalMemoizedMergedChildContext=e,be(mt),be(at),ke(at,e)):be(mt),ke(mt,n)}var sn=null,wi=!1,Xs=!1;function Tu(e){sn===null?sn=[e]:sn.push(e)}function Ff(e){wi=!0,Tu(e)}function Pn(){if(!Xs&&sn!==null){Xs=!0;var e=0,t=ge;try{var n=sn;for(ge=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}sn=null,wi=!1}catch(s){throw sn!==null&&(sn=sn.slice(e+1)),_l(ys,Pn),s}finally{ge=t,Xs=!1}}return null}var Sr=[],jr=0,ki=null,Si=0,Rt=[],Nt=0,Zn=null,an=1,ln="";function er(e,t){Sr[jr++]=Si,Sr[jr++]=ki,ki=e,Si=t}function Fu(e,t,n){Rt[Nt++]=an,Rt[Nt++]=ln,Rt[Nt++]=Zn,Zn=e;var o=an;e=ln;var s=32-Ot(o)-1;o&=~(1<<s),n+=1;var u=32-Ot(t)+s;if(30<u){var d=s-s%5;u=(o&(1<<d)-1).toString(32),o>>=d,s-=d,an=1<<32-Ot(t)+s|n<<s|o,ln=u+e}else an=1<<u|n<<s|o,ln=e}function Gs(e){e.return!==null&&(er(e,1),Fu(e,1,0))}function Js(e){for(;e===ki;)ki=Sr[--jr],Sr[jr]=null,Si=Sr[--jr],Sr[jr]=null;for(;e===Zn;)Zn=Rt[--Nt],Rt[Nt]=null,ln=Rt[--Nt],Rt[Nt]=null,an=Rt[--Nt],Rt[Nt]=null}var Ct=null,Et=null,Ee=!1,$t=null;function _u(e,t){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,Et=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:an,overflow:ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ct=e,Et=null,!0):!1;default:return!1}}function Zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ea(e){if(Ee){var t=Et;if(t){var n=t;if(!Ru(e,t)){if(Zs(e))throw Error(l(418));t=Nn(n.nextSibling);var o=Ct;t&&Ru(e,t)?_u(o,n):(e.flags=e.flags&-4097|2,Ee=!1,Ct=e)}}else{if(Zs(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ee=!1,Ct=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function ji(e){if(e!==Ct)return!1;if(!Ee)return Nu(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vs(e.type,e.memoizedProps)),t&&(t=Et)){if(Zs(e))throw zu(),Error(l(418));for(;t;)_u(e,t),t=Nn(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Et=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=Ct?Nn(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=Et;e;)e=Nn(e.nextSibling)}function br(){Et=Ct=null,Ee=!1}function ta(e){$t===null?$t=[e]:$t.push(e)}var _f=re.ReactCurrentBatchConfig;function uo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var o=n.stateNode}if(!o)throw Error(l(147,e));var s=o,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(d){var g=s.refs;d===null?delete g[u]:g[u]=d},t._stringRef=u,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function bi(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Au(e){var t=e._init;return t(e._payload)}function Pu(e){function t(b,k){if(e){var E=b.deletions;E===null?(b.deletions=[k],b.flags|=16):E.push(k)}}function n(b,k){if(!e)return null;for(;k!==null;)t(b,k),k=k.sibling;return null}function o(b,k){for(b=new Map;k!==null;)k.key!==null?b.set(k.key,k):b.set(k.index,k),k=k.sibling;return b}function s(b,k){return b=Hn(b,k),b.index=0,b.sibling=null,b}function u(b,k,E){return b.index=E,e?(E=b.alternate,E!==null?(E=E.index,E<k?(b.flags|=2,k):E):(b.flags|=2,k)):(b.flags|=1048576,k)}function d(b){return e&&b.alternate===null&&(b.flags|=2),b}function g(b,k,E,L){return k===null||k.tag!==6?(k=qa(E,b.mode,L),k.return=b,k):(k=s(k,E),k.return=b,k)}function y(b,k,E,L){var Y=E.type;return Y===ve?z(b,k,E.props.children,L,E.key):k!==null&&(k.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===ne&&Au(Y)===k.type)?(L=s(k,E.props),L.ref=uo(b,k,E),L.return=b,L):(L=Yi(E.type,E.key,E.props,null,b.mode,L),L.ref=uo(b,k,E),L.return=b,L)}function I(b,k,E,L){return k===null||k.tag!==4||k.stateNode.containerInfo!==E.containerInfo||k.stateNode.implementation!==E.implementation?(k=Qa(E,b.mode,L),k.return=b,k):(k=s(k,E.children||[]),k.return=b,k)}function z(b,k,E,L,Y){return k===null||k.tag!==7?(k=lr(E,b.mode,L,Y),k.return=b,k):(k=s(k,E),k.return=b,k)}function P(b,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return k=qa(""+k,b.mode,E),k.return=b,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ee:return E=Yi(k.type,k.key,k.props,null,b.mode,E),E.ref=uo(b,null,k),E.return=b,E;case ae:return k=Qa(k,b.mode,E),k.return=b,k;case ne:var L=k._init;return P(b,L(k._payload),E)}if(qn(k)||V(k))return k=lr(k,b.mode,E,null),k.return=b,k;bi(b,k)}return null}function N(b,k,E,L){var Y=k!==null?k.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return Y!==null?null:g(b,k,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ee:return E.key===Y?y(b,k,E,L):null;case ae:return E.key===Y?I(b,k,E,L):null;case ne:return Y=E._init,N(b,k,Y(E._payload),L)}if(qn(E)||V(E))return Y!==null?null:z(b,k,E,L,null);bi(b,E)}return null}function $(b,k,E,L,Y){if(typeof L=="string"&&L!==""||typeof L=="number")return b=b.get(E)||null,g(k,b,""+L,Y);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ee:return b=b.get(L.key===null?E:L.key)||null,y(k,b,L,Y);case ae:return b=b.get(L.key===null?E:L.key)||null,I(k,b,L,Y);case ne:var J=L._init;return $(b,k,E,J(L._payload),Y)}if(qn(L)||V(L))return b=b.get(E)||null,z(k,b,L,Y,null);bi(k,L)}return null}function q(b,k,E,L){for(var Y=null,J=null,Z=k,oe=k=0,Ze=null;Z!==null&&oe<E.length;oe++){Z.index>oe?(Ze=Z,Z=null):Ze=Z.sibling;var me=N(b,Z,E[oe],L);if(me===null){Z===null&&(Z=Ze);break}e&&Z&&me.alternate===null&&t(b,Z),k=u(me,k,oe),J===null?Y=me:J.sibling=me,J=me,Z=Ze}if(oe===E.length)return n(b,Z),Ee&&er(b,oe),Y;if(Z===null){for(;oe<E.length;oe++)Z=P(b,E[oe],L),Z!==null&&(k=u(Z,k,oe),J===null?Y=Z:J.sibling=Z,J=Z);return Ee&&er(b,oe),Y}for(Z=o(b,Z);oe<E.length;oe++)Ze=$(Z,b,oe,E[oe],L),Ze!==null&&(e&&Ze.alternate!==null&&Z.delete(Ze.key===null?oe:Ze.key),k=u(Ze,k,oe),J===null?Y=Ze:J.sibling=Ze,J=Ze);return e&&Z.forEach(function(Wn){return t(b,Wn)}),Ee&&er(b,oe),Y}function Q(b,k,E,L){var Y=V(E);if(typeof Y!="function")throw Error(l(150));if(E=Y.call(E),E==null)throw Error(l(151));for(var J=Y=null,Z=k,oe=k=0,Ze=null,me=E.next();Z!==null&&!me.done;oe++,me=E.next()){Z.index>oe?(Ze=Z,Z=null):Ze=Z.sibling;var Wn=N(b,Z,me.value,L);if(Wn===null){Z===null&&(Z=Ze);break}e&&Z&&Wn.alternate===null&&t(b,Z),k=u(Wn,k,oe),J===null?Y=Wn:J.sibling=Wn,J=Wn,Z=Ze}if(me.done)return n(b,Z),Ee&&er(b,oe),Y;if(Z===null){for(;!me.done;oe++,me=E.next())me=P(b,me.value,L),me!==null&&(k=u(me,k,oe),J===null?Y=me:J.sibling=me,J=me);return Ee&&er(b,oe),Y}for(Z=o(b,Z);!me.done;oe++,me=E.next())me=$(Z,b,oe,me.value,L),me!==null&&(e&&me.alternate!==null&&Z.delete(me.key===null?oe:me.key),k=u(me,k,oe),J===null?Y=me:J.sibling=me,J=me);return e&&Z.forEach(function(um){return t(b,um)}),Ee&&er(b,oe),Y}function Oe(b,k,E,L){if(typeof E=="object"&&E!==null&&E.type===ve&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ee:e:{for(var Y=E.key,J=k;J!==null;){if(J.key===Y){if(Y=E.type,Y===ve){if(J.tag===7){n(b,J.sibling),k=s(J,E.props.children),k.return=b,b=k;break e}}else if(J.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===ne&&Au(Y)===J.type){n(b,J.sibling),k=s(J,E.props),k.ref=uo(b,J,E),k.return=b,b=k;break e}n(b,J);break}else t(b,J);J=J.sibling}E.type===ve?(k=lr(E.props.children,b.mode,L,E.key),k.return=b,b=k):(L=Yi(E.type,E.key,E.props,null,b.mode,L),L.ref=uo(b,k,E),L.return=b,b=L)}return d(b);case ae:e:{for(J=E.key;k!==null;){if(k.key===J)if(k.tag===4&&k.stateNode.containerInfo===E.containerInfo&&k.stateNode.implementation===E.implementation){n(b,k.sibling),k=s(k,E.children||[]),k.return=b,b=k;break e}else{n(b,k);break}else t(b,k);k=k.sibling}k=Qa(E,b.mode,L),k.return=b,b=k}return d(b);case ne:return J=E._init,Oe(b,k,J(E._payload),L)}if(qn(E))return q(b,k,E,L);if(V(E))return Q(b,k,E,L);bi(b,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,k!==null&&k.tag===6?(n(b,k.sibling),k=s(k,E),k.return=b,b=k):(n(b,k),k=qa(E,b.mode,L),k.return=b,b=k),d(b)):n(b,k)}return Oe}var Cr=Pu(!0),Lu=Pu(!1),Ci=zn(null),Ei=null,Er=null,na=null;function ra(){na=Er=Ei=null}function oa(e){var t=Ci.current;be(Ci),e._currentValue=t}function ia(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Ir(e,t){Ei=e,na=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(gt=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(na!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Ei===null)throw Error(l(308));Er=e,Ei.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var tr=null;function sa(e){tr===null?tr=[e]:tr.push(e)}function Du(e,t,n,o){var s=t.interleaved;return s===null?(n.next=n,sa(t)):(n.next=s.next,s.next=n),t.interleaved=n,un(e,o)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(fe&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,un(e,n)}return s=o.interleaved,s===null?(t.next=t,sa(o)):(t.next=s.next,s.next=t),o.interleaved=t,un(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ks(e,n)}}function Ou(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?s=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ti(e,t,n,o){var s=e.updateQueue;Ln=!1;var u=s.firstBaseUpdate,d=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var y=g,I=y.next;y.next=null,d===null?u=I:d.next=I,d=y;var z=e.alternate;z!==null&&(z=z.updateQueue,g=z.lastBaseUpdate,g!==d&&(g===null?z.firstBaseUpdate=I:g.next=I,z.lastBaseUpdate=y))}if(u!==null){var P=s.baseState;d=0,z=I=y=null,g=u;do{var N=g.lane,$=g.eventTime;if((o&N)===N){z!==null&&(z=z.next={eventTime:$,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var q=e,Q=g;switch(N=t,$=n,Q.tag){case 1:if(q=Q.payload,typeof q=="function"){P=q.call($,P,N);break e}P=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Q.payload,N=typeof q=="function"?q.call($,P,N):q,N==null)break e;P=B({},P,N);break e;case 2:Ln=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,N=s.effects,N===null?s.effects=[g]:N.push(g))}else $={eventTime:$,lane:N,tag:g.tag,payload:g.payload,callback:g.callback,next:null},z===null?(I=z=$,y=P):z=z.next=$,d|=N;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;N=g,g=N.next,N.next=null,s.lastBaseUpdate=N,s.shared.pending=null}}while(!0);if(z===null&&(y=P),s.baseState=y,s.firstBaseUpdate=I,s.lastBaseUpdate=z,t=s.shared.interleaved,t!==null){s=t;do d|=s.lane,s=s.next;while(s!==t)}else u===null&&(s.shared.lanes=0);or|=d,e.lanes=d,e.memoizedState=P}}function Bu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=n,typeof s!="function")throw Error(l(191,s));s.call(o)}}}var co={},Xt=zn(co),po=zn(co),fo=zn(co);function nr(e){if(e===co)throw Error(l(174));return e}function la(e,t){switch(ke(fo,t),ke(po,e),ke(Xt,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Or(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Or(t,e)}be(Xt),ke(Xt,t)}function Tr(){be(Xt),be(po),be(fo)}function $u(e){nr(fo.current);var t=nr(Xt.current),n=Or(t,e.type);t!==n&&(ke(po,e),ke(Xt,n))}function ua(e){po.current===e&&(be(Xt),be(po))}var Fe=zn(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function da(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var _i=re.ReactCurrentDispatcher,pa=re.ReactCurrentBatchConfig,rr=0,_e=null,Qe=null,Ge=null,Ri=!1,mo=!1,ho=0,Rf=0;function lt(){throw Error(l(321))}function fa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function ma(e,t,n,o,s,u){if(rr=u,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?Pf:Lf,e=n(o,s),mo){u=0;do{if(mo=!1,ho=0,25<=u)throw Error(l(301));u+=1,Ge=Qe=null,t.updateQueue=null,_i.current=Df,e=n(o,s)}while(mo)}if(_i.current=Ai,t=Qe!==null&&Qe.next!==null,rr=0,Ge=Qe=_e=null,Ri=!1,t)throw Error(l(300));return e}function ha(){var e=ho!==0;return ho=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?_e.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function At(){if(Qe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=Ge===null?_e.memoizedState:Ge.next;if(t!==null)Ge=t,Qe=e;else{if(e===null)throw Error(l(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ge===null?_e.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function go(e,t){return typeof t=="function"?t(e):t}function ga(e){var t=At(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=Qe,s=o.baseQueue,u=n.pending;if(u!==null){if(s!==null){var d=s.next;s.next=u.next,u.next=d}o.baseQueue=s=u,n.pending=null}if(s!==null){u=s.next,o=o.baseState;var g=d=null,y=null,I=u;do{var z=I.lane;if((rr&z)===z)y!==null&&(y=y.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),o=I.hasEagerState?I.eagerState:e(o,I.action);else{var P={lane:z,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};y===null?(g=y=P,d=o):y=y.next=P,_e.lanes|=z,or|=z}I=I.next}while(I!==null&&I!==u);y===null?d=o:y.next=g,Bt(o,t.memoizedState)||(gt=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=y,n.lastRenderedState=o}if(e=n.interleaved,e!==null){s=e;do u=s.lane,_e.lanes|=u,or|=u,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xa(e){var t=At(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do u=e(u,d.action),d=d.next;while(d!==s);Bt(u,t.memoizedState)||(gt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,o]}function Uu(){}function Hu(e,t){var n=_e,o=At(),s=t(),u=!Bt(o.memoizedState,s);if(u&&(o.memoizedState=s,gt=!0),o=o.queue,ya(qu.bind(null,n,o,e),[e]),o.getSnapshot!==t||u||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,xo(9,Vu.bind(null,n,o,s,t),void 0,null),Je===null)throw Error(l(349));(rr&30)!==0||Wu(n,t,s)}return s}function Wu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vu(e,t,n,o){t.value=n,t.getSnapshot=o,Qu(t)&&Yu(e)}function qu(e,t,n){return n(function(){Qu(t)&&Yu(e)})}function Qu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function Yu(e){var t=un(e,1);t!==null&&Vt(t,e,1,-1)}function Ku(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=Af.bind(null,_e,e),[t.memoizedState,e]}function xo(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Xu(){return At().memoizedState}function Ni(e,t,n,o){var s=Gt();_e.flags|=e,s.memoizedState=xo(1|t,n,void 0,o===void 0?null:o)}function zi(e,t,n,o){var s=At();o=o===void 0?null:o;var u=void 0;if(Qe!==null){var d=Qe.memoizedState;if(u=d.destroy,o!==null&&fa(o,d.deps)){s.memoizedState=xo(t,n,u,o);return}}_e.flags|=e,s.memoizedState=xo(1|t,n,u,o)}function Gu(e,t){return Ni(8390656,8,e,t)}function ya(e,t){return zi(2048,8,e,t)}function Ju(e,t){return zi(4,2,e,t)}function Zu(e,t){return zi(4,4,e,t)}function ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tc(e,t,n){return n=n!=null?n.concat([e]):null,zi(4,4,ec.bind(null,t,e),n)}function va(){}function nc(e,t){var n=At();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&fa(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function rc(e,t){var n=At();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&fa(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function oc(e,t,n){return(rr&21)===0?(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n):(Bt(n,t)||(n=Al(),_e.lanes|=n,or|=n,e.baseState=!0),t)}function Nf(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var o=pa.transition;pa.transition={};try{e(!1),t()}finally{ge=n,pa.transition=o}}function ic(){return At().memoizedState}function zf(e,t,n){var o=$n(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},sc(e))ac(t,n);else if(n=Du(e,t,n,o),n!==null){var s=ft();Vt(n,e,o,s),lc(n,t,o)}}function Af(e,t,n){var o=$n(e),s={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(sc(e))ac(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,g=u(d,n);if(s.hasEagerState=!0,s.eagerState=g,Bt(g,d)){var y=t.interleaved;y===null?(s.next=s,sa(t)):(s.next=y.next,y.next=s),t.interleaved=s;return}}catch{}finally{}n=Du(e,t,s,o),n!==null&&(s=ft(),Vt(n,e,o,s),lc(n,t,o))}}function sc(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function ac(e,t){mo=Ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lc(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ks(e,n)}}var Ai={readContext:zt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},Pf={readContext:zt,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:Gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4194308,4,ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=Gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Gt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=zf.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:Ku,useDebugValue:va,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=Ku(!1),t=e[0];return e=Nf.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=_e,s=Gt();if(Ee){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Je===null)throw Error(l(349));(rr&30)!==0||Wu(o,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,Gu(qu.bind(null,o,u,e),[e]),o.flags|=2048,xo(9,Vu.bind(null,o,u,n,t),void 0,null),n},useId:function(){var e=Gt(),t=Je.identifierPrefix;if(Ee){var n=ln,o=an;n=(o&~(1<<32-Ot(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lf={readContext:zt,useCallback:nc,useContext:zt,useEffect:ya,useImperativeHandle:tc,useInsertionEffect:Ju,useLayoutEffect:Zu,useMemo:rc,useReducer:ga,useRef:Xu,useState:function(){return ga(go)},useDebugValue:va,useDeferredValue:function(e){var t=At();return oc(t,Qe.memoizedState,e)},useTransition:function(){var e=ga(go)[0],t=At().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Hu,useId:ic,unstable_isNewReconciler:!1},Df={readContext:zt,useCallback:nc,useContext:zt,useEffect:ya,useImperativeHandle:tc,useInsertionEffect:Ju,useLayoutEffect:Zu,useMemo:rc,useReducer:xa,useRef:Xu,useState:function(){return xa(go)},useDebugValue:va,useDeferredValue:function(e){var t=At();return Qe===null?t.memoizedState=e:oc(t,Qe.memoizedState,e)},useTransition:function(){var e=xa(go)[0],t=At().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Hu,useId:ic,unstable_isNewReconciler:!1};function Ut(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wa(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pi={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=ft(),s=$n(e),u=cn(o,s);u.payload=t,n!=null&&(u.callback=n),t=Dn(e,u,s),t!==null&&(Vt(t,e,s,o),Ii(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=ft(),s=$n(e),u=cn(o,s);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Dn(e,u,s),t!==null&&(Vt(t,e,s,o),Ii(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),o=$n(e),s=cn(n,o);s.tag=2,t!=null&&(s.callback=t),t=Dn(e,s,o),t!==null&&(Vt(t,e,o,n),Ii(t,e,o))}};function uc(e,t,n,o,s,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,d):t.prototype&&t.prototype.isPureReactComponent?!no(n,o)||!no(s,u):!0}function cc(e,t,n){var o=!1,s=An,u=t.contextType;return typeof u=="object"&&u!==null?u=zt(u):(s=ht(t)?Jn:at.current,o=t.contextTypes,u=(o=o!=null)?kr(e,s):An),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pi,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=u),t}function dc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Pi.enqueueReplaceState(t,t.state,null)}function ka(e,t,n,o){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},aa(e);var u=t.contextType;typeof u=="object"&&u!==null?s.context=zt(u):(u=ht(t)?Jn:at.current,s.context=kr(e,u)),s.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(wa(e,t,u,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Pi.enqueueReplaceState(s,s.state,null),Ti(e,n,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t){try{var n="",o=t;do n+=ie(o),o=o.return;while(o);var s=n}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:s,digest:null}}function Sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ja(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function pc(e,t,n){n=cn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Ui||(Ui=!0,Ma=o),ja(e,t)},n}function fc(e,t,n){n=cn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;n.payload=function(){return o(s)},n.callback=function(){ja(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){ja(e,t),typeof o!="function"&&(On===null?On=new Set([this]):On.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function mc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Mf;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(n)||(s.add(n),e=Jf.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gc(e,t,n,o,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=cn(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Of=re.ReactCurrentOwner,gt=!1;function pt(e,t,n,o){t.child=e===null?Lu(t,null,n,o):Cr(t,e.child,n,o)}function xc(e,t,n,o,s){n=n.render;var u=t.ref;return Ir(t,s),o=ma(e,t,n,o,u,s),n=ha(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,dn(e,t,s)):(Ee&&n&&Gs(t),t.flags|=1,pt(e,t,o,s),t.child)}function yc(e,t,n,o,s){if(e===null){var u=n.type;return typeof u=="function"&&!Va(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,vc(e,t,u,o,s)):(e=Yi(n.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&s)===0){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(d,o)&&e.ref===t.ref)return dn(e,t,s)}return t.flags|=1,e=Hn(u,o),e.ref=t.ref,e.return=t,t.child=e}function vc(e,t,n,o,s){if(e!==null){var u=e.memoizedProps;if(no(u,o)&&e.ref===t.ref)if(gt=!1,t.pendingProps=o=u,(e.lanes&s)!==0)(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,dn(e,t,s)}return ba(e,t,n,o,s)}function wc(e,t,n){var o=t.pendingProps,s=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Rr,It),It|=n;else{if((n&1073741824)===0)return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Rr,It),It|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:n,ke(Rr,It),It|=o}else u!==null?(o=u.baseLanes|n,t.memoizedState=null):o=n,ke(Rr,It),It|=o;return pt(e,t,s,n),t.child}function kc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ba(e,t,n,o,s){var u=ht(n)?Jn:at.current;return u=kr(t,u),Ir(t,s),n=ma(e,t,n,o,u,s),o=ha(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,dn(e,t,s)):(Ee&&o&&Gs(t),t.flags|=1,pt(e,t,n,s),t.child)}function Sc(e,t,n,o,s){if(ht(n)){var u=!0;vi(t)}else u=!1;if(Ir(t,s),t.stateNode===null)Di(e,t),cc(t,n,o),ka(t,n,o,s),o=!0;else if(e===null){var d=t.stateNode,g=t.memoizedProps;d.props=g;var y=d.context,I=n.contextType;typeof I=="object"&&I!==null?I=zt(I):(I=ht(n)?Jn:at.current,I=kr(t,I));var z=n.getDerivedStateFromProps,P=typeof z=="function"||typeof d.getSnapshotBeforeUpdate=="function";P||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==o||y!==I)&&dc(t,d,o,I),Ln=!1;var N=t.memoizedState;d.state=N,Ti(t,o,d,s),y=t.memoizedState,g!==o||N!==y||mt.current||Ln?(typeof z=="function"&&(wa(t,n,z,o),y=t.memoizedState),(g=Ln||uc(t,n,g,o,N,y,I))?(P||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=y),d.props=o,d.state=y,d.context=I,o=g):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Mu(e,t),g=t.memoizedProps,I=t.type===t.elementType?g:Ut(t.type,g),d.props=I,P=t.pendingProps,N=d.context,y=n.contextType,typeof y=="object"&&y!==null?y=zt(y):(y=ht(n)?Jn:at.current,y=kr(t,y));var $=n.getDerivedStateFromProps;(z=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==P||N!==y)&&dc(t,d,o,y),Ln=!1,N=t.memoizedState,d.state=N,Ti(t,o,d,s);var q=t.memoizedState;g!==P||N!==q||mt.current||Ln?(typeof $=="function"&&(wa(t,n,$,o),q=t.memoizedState),(I=Ln||uc(t,n,I,o,N,q,y)||!1)?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,q,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,q,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=q),d.props=o,d.state=q,d.context=y,o=I):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),o=!1)}return Ca(e,t,n,o,u,s)}function Ca(e,t,n,o,s,u){kc(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return s&&Iu(t,n,!1),dn(e,t,u);o=t.stateNode,Of.current=t;var g=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=Cr(t,e.child,null,u),t.child=Cr(t,null,g,u)):pt(e,t,g,u),t.memoizedState=o.state,s&&Iu(t,n,!0),t.child}function jc(e){var t=e.stateNode;t.pendingContext?Cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cu(e,t.context,!1),la(e,t.containerInfo)}function bc(e,t,n,o,s){return br(),ta(s),t.flags|=256,pt(e,t,n,o),t.child}var Ea={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cc(e,t,n){var o=t.pendingProps,s=Fe.current,u=!1,d=(t.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(s&2)!==0),g?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ke(Fe,s&1),e===null)return ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=o.children,e=o.fallback,u?(o=t.mode,u=t.child,d={mode:"hidden",children:d},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=d):u=Ki(d,o,0,null),e=lr(e,o,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Ia(n),t.memoizedState=Ea,e):Ta(t,d));if(s=e.memoizedState,s!==null&&(g=s.dehydrated,g!==null))return Bf(e,t,d,o,g,s,n);if(u){u=o.fallback,d=t.mode,s=e.child,g=s.sibling;var y={mode:"hidden",children:o.children};return(d&1)===0&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=y,t.deletions=null):(o=Hn(s,y),o.subtreeFlags=s.subtreeFlags&14680064),g!==null?u=Hn(g,u):(u=lr(u,d,n,null),u.flags|=2),u.return=t,o.return=t,o.sibling=u,t.child=o,o=u,u=t.child,d=e.child.memoizedState,d=d===null?Ia(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~n,t.memoizedState=Ea,o}return u=e.child,e=u.sibling,o=Hn(u,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ta(e,t){return t=Ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Li(e,t,n,o){return o!==null&&ta(o),Cr(t,e.child,null,n),e=Ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bf(e,t,n,o,s,u,d){if(n)return t.flags&256?(t.flags&=-257,o=Sa(Error(l(422))),Li(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=o.fallback,s=t.mode,o=Ki({mode:"visible",children:o.children},s,0,null),u=lr(u,s,d,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,(t.mode&1)!==0&&Cr(t,e.child,null,d),t.child.memoizedState=Ia(d),t.memoizedState=Ea,u);if((t.mode&1)===0)return Li(e,t,d,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var g=o.dgst;return o=g,u=Error(l(419)),o=Sa(u,o,void 0),Li(e,t,d,o)}if(g=(d&e.childLanes)!==0,gt||g){if(o=Je,o!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|d))!==0?0:s,s!==0&&s!==u.retryLane&&(u.retryLane=s,un(e,s),Vt(o,e,s,-1))}return Wa(),o=Sa(Error(l(421))),Li(e,t,d,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Zf.bind(null,e),s._reactRetry=t,null):(e=u.treeContext,Et=Nn(s.nextSibling),Ct=t,Ee=!0,$t=null,e!==null&&(Rt[Nt++]=an,Rt[Nt++]=ln,Rt[Nt++]=Zn,an=e.id,ln=e.overflow,Zn=t),t=Ta(t,o.children),t.flags|=4096,t)}function Ec(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ia(e.return,t,n)}function Fa(e,t,n,o,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=s)}function Ic(e,t,n){var o=t.pendingProps,s=o.revealOrder,u=o.tail;if(pt(e,t,o.children,n),o=Fe.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ke(Fe,o),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Fi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Fa(t,!1,s,n,u);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Fi(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Fa(t,!0,n,null,u);break;case"together":Fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Di(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),or|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $f(e,t,n){switch(t.tag){case 3:jc(t),br();break;case 5:$u(t);break;case 1:ht(t.type)&&vi(t);break;case 4:la(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;ke(Ci,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ke(Fe,Fe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Cc(e,t,n):(ke(Fe,Fe.current&1),e=dn(e,t,n),e!==null?e.sibling:null);ke(Fe,Fe.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Ic(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(Fe,Fe.current),o)break;return null;case 22:case 23:return t.lanes=0,wc(e,t,n)}return dn(e,t,n)}var Tc,_a,Fc,_c;Tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},_a=function(){},Fc=function(e,t,n,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,nr(Xt.current);var u=null;switch(n){case"input":s=Qt(e,s),o=Qt(e,o),u=[];break;case"select":s=B({},s,{value:void 0}),o=B({},o,{value:void 0}),u=[];break;case"textarea":s=et(e,s),o=et(e,o),u=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=gi)}dr(n,o);var d;n=null;for(I in s)if(!o.hasOwnProperty(I)&&s.hasOwnProperty(I)&&s[I]!=null)if(I==="style"){var g=s[I];for(d in g)g.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(p.hasOwnProperty(I)?u||(u=[]):(u=u||[]).push(I,null));for(I in o){var y=o[I];if(g=s!=null?s[I]:void 0,o.hasOwnProperty(I)&&y!==g&&(y!=null||g!=null))if(I==="style")if(g){for(d in g)!g.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in y)y.hasOwnProperty(d)&&g[d]!==y[d]&&(n||(n={}),n[d]=y[d])}else n||(u||(u=[]),u.push(I,n)),n=y;else I==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,g=g?g.__html:void 0,y!=null&&g!==y&&(u=u||[]).push(I,y)):I==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push(I,""+y):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(p.hasOwnProperty(I)?(y!=null&&I==="onScroll"&&je("scroll",e),u||g===y||(u=[])):(u=u||[]).push(I,y))}n&&(u=u||[]).push("style",n);var I=u;(t.updateQueue=I)&&(t.flags|=4)}},_c=function(e,t,n,o){n!==o&&(t.flags|=4)};function yo(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Uf(e,t,n){var o=t.pendingProps;switch(Js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return ht(t.type)&&yi(),ut(t),null;case 3:return o=t.stateNode,Tr(),be(mt),be(at),da(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$t!==null&&($a($t),$t=null))),_a(e,t),ut(t),null;case 5:ua(t);var s=nr(fo.current);if(n=t.type,e!==null&&t.stateNode!=null)Fc(e,t,n,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return ut(t),null}if(e=nr(Xt.current),ji(t)){o=t.stateNode,n=t.type;var u=t.memoizedProps;switch(o[Kt]=t,o[ao]=u,e=(t.mode&1)!==0,n){case"dialog":je("cancel",o),je("close",o);break;case"iframe":case"object":case"embed":je("load",o);break;case"video":case"audio":for(s=0;s<oo.length;s++)je(oo[s],o);break;case"source":je("error",o);break;case"img":case"image":case"link":je("error",o),je("load",o);break;case"details":je("toggle",o);break;case"input":Vo(o,u),je("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},je("invalid",o);break;case"textarea":nn(o,u),je("invalid",o)}dr(n,u),s=null;for(var d in u)if(u.hasOwnProperty(d)){var g=u[d];d==="children"?typeof g=="string"?o.textContent!==g&&(u.suppressHydrationWarning!==!0&&hi(o.textContent,g,e),s=["children",g]):typeof g=="number"&&o.textContent!==""+g&&(u.suppressHydrationWarning!==!0&&hi(o.textContent,g,e),s=["children",""+g]):p.hasOwnProperty(d)&&g!=null&&d==="onScroll"&&je("scroll",o)}switch(n){case"input":en(o),Mr(o,u,!0);break;case"textarea":en(o),Qo(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=gi)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Kt]=t,e[ao]=o,Tc(e,t,!1,!1),t.stateNode=e;e:{switch(d=Br(n,o),n){case"dialog":je("cancel",e),je("close",e),s=o;break;case"iframe":case"object":case"embed":je("load",e),s=o;break;case"video":case"audio":for(s=0;s<oo.length;s++)je(oo[s],e);s=o;break;case"source":je("error",e),s=o;break;case"img":case"image":case"link":je("error",e),je("load",e),s=o;break;case"details":je("toggle",e),s=o;break;case"input":Vo(e,o),s=Qt(e,o),je("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=B({},o,{value:void 0}),je("invalid",e);break;case"textarea":nn(e,o),s=et(e,o),je("invalid",e);break;default:s=o}dr(n,s),g=s;for(u in g)if(g.hasOwnProperty(u)){var y=g[u];u==="style"?Ko(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&cr(e,y)):u==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&Tt(e,y):typeof y=="number"&&Tt(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(p.hasOwnProperty(u)?y!=null&&u==="onScroll"&&je("scroll",e):y!=null&&te(e,u,y,d))}switch(n){case"input":en(e),Mr(e,o,!1);break;case"textarea":en(e),Qo(e);break;case"option":o.value!=null&&e.setAttribute("value",""+le(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?vn(e,!!o.multiple,u,!1):o.defaultValue!=null&&vn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=gi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)_c(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(n=nr(fo.current),nr(Xt.current),ji(t)){if(o=t.stateNode,n=t.memoizedProps,o[Kt]=t,(u=o.nodeValue!==n)&&(e=Ct,e!==null))switch(e.tag){case 3:hi(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(o.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Kt]=t,t.stateNode=o}return ut(t),null;case 13:if(be(Fe),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&Et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zu(),br(),t.flags|=98560,u=!1;else if(u=ji(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[Kt]=t}else br(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ut(t),u=!1}else $t!==null&&($a($t),$t=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Fe.current&1)!==0?Ye===0&&(Ye=3):Wa())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return Tr(),_a(e,t),e===null&&io(t.stateNode.containerInfo),ut(t),null;case 10:return oa(t.type._context),ut(t),null;case 17:return ht(t.type)&&yi(),ut(t),null;case 19:if(be(Fe),u=t.memoizedState,u===null)return ut(t),null;if(o=(t.flags&128)!==0,d=u.rendering,d===null)if(o)yo(u,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Fi(e),d!==null){for(t.flags|=128,yo(u,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)u=n,e=o,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Fe,Fe.current&1|2),t.child}e=e.sibling}u.tail!==null&&Me()>Nr&&(t.flags|=128,o=!0,yo(u,!1),t.lanes=4194304)}else{if(!o)if(e=Fi(d),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ee)return ut(t),null}else 2*Me()-u.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,o=!0,yo(u,!1),t.lanes=4194304);u.isBackwards?(d.sibling=t.child,t.child=d):(n=u.last,n!==null?n.sibling=d:t.child=d,u.last=d)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Me(),t.sibling=null,n=Fe.current,ke(Fe,o?n&1|2:n&1),t):(ut(t),null);case 22:case 23:return Ha(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(It&1073741824)!==0&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Hf(e,t){switch(Js(t),t.tag){case 1:return ht(t.type)&&yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),be(mt),be(at),da(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ua(t),null;case 13:if(be(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Fe),null;case 4:return Tr(),null;case 10:return oa(t.type._context),null;case 22:case 23:return Ha(),null;case 24:return null;default:return null}}var Mi=!1,ct=!1,Wf=typeof WeakSet=="function"?WeakSet:Set,W=null;function _r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Pe(e,t,o)}else n.current=null}function Ra(e,t,n){try{n()}catch(o){Pe(e,t,o)}}var Rc=!1;function Vf(e,t){if(Hs=oi,e=uu(),Ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var s=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,g=-1,y=-1,I=0,z=0,P=e,N=null;t:for(;;){for(var $;P!==n||s!==0&&P.nodeType!==3||(g=d+s),P!==u||o!==0&&P.nodeType!==3||(y=d+o),P.nodeType===3&&(d+=P.nodeValue.length),($=P.firstChild)!==null;)N=P,P=$;for(;;){if(P===e)break t;if(N===n&&++I===s&&(g=d),N===u&&++z===o&&(y=d),($=P.nextSibling)!==null)break;P=N,N=P.parentNode}P=$}n=g===-1||y===-1?null:{start:g,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ws={focusedElem:e,selectionRange:n},oi=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var Q=q.memoizedProps,Oe=q.memoizedState,b=t.stateNode,k=b.getSnapshotBeforeUpdate(t.elementType===t.type?Q:Ut(t.type,Q),Oe);b.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(L){Pe(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return q=Rc,Rc=!1,q}function vo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var u=s.destroy;s.destroy=void 0,u!==void 0&&Ra(t,n,u)}s=s.next}while(s!==o)}}function Oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nc(e){var t=e.alternate;t!==null&&(e.alternate=null,Nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[ao],delete t[Ys],delete t[If],delete t[Tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zc(e){return e.tag===5||e.tag===3||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function za(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gi));else if(o!==4&&(e=e.child,e!==null))for(za(e,t,n),e=e.sibling;e!==null;)za(e,t,n),e=e.sibling}function Aa(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Aa(e,t,n),e=e.sibling;e!==null;)Aa(e,t,n),e=e.sibling}var nt=null,Ht=!1;function Mn(e,t,n){for(n=n.child;n!==null;)Pc(e,t,n),n=n.sibling}function Pc(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:ct||_r(n,t);case 6:var o=nt,s=Ht;nt=null,Mn(e,t,n),nt=o,Ht=s,nt!==null&&(Ht?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(Ht?(e=nt,n=n.stateNode,e.nodeType===8?Qs(e.parentNode,n):e.nodeType===1&&Qs(e,n),Xr(e)):Qs(nt,n.stateNode));break;case 4:o=nt,s=Ht,nt=n.stateNode.containerInfo,Ht=!0,Mn(e,t,n),nt=o,Ht=s;break;case 0:case 11:case 14:case 15:if(!ct&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var u=s,d=u.destroy;u=u.tag,d!==void 0&&((u&2)!==0||(u&4)!==0)&&Ra(n,t,d),s=s.next}while(s!==o)}Mn(e,t,n);break;case 1:if(!ct&&(_r(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(g){Pe(n,t,g)}Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:n.mode&1?(ct=(o=ct)||n.memoizedState!==null,Mn(e,t,n),ct=o):Mn(e,t,n);break;default:Mn(e,t,n)}}function Lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wf),t.forEach(function(o){var s=em.bind(null,e,o);n.has(o)||(n.add(o),o.then(s,s))})}}function Wt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var s=n[o];try{var u=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 5:nt=g.stateNode,Ht=!1;break e;case 3:nt=g.stateNode.containerInfo,Ht=!0;break e;case 4:nt=g.stateNode.containerInfo,Ht=!0;break e}g=g.return}if(nt===null)throw Error(l(160));Pc(u,d,s),nt=null,Ht=!1;var y=s.alternate;y!==null&&(y.return=null),s.return=null}catch(I){Pe(s,t,I)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dc(t,e),t=t.sibling}function Dc(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),Jt(e),o&4){try{vo(3,e,e.return),Oi(3,e)}catch(Q){Pe(e,e.return,Q)}try{vo(5,e,e.return)}catch(Q){Pe(e,e.return,Q)}}break;case 1:Wt(t,e),Jt(e),o&512&&n!==null&&_r(n,n.return);break;case 5:if(Wt(t,e),Jt(e),o&512&&n!==null&&_r(n,n.return),e.flags&32){var s=e.stateNode;try{Tt(s,"")}catch(Q){Pe(e,e.return,Q)}}if(o&4&&(s=e.stateNode,s!=null)){var u=e.memoizedProps,d=n!==null?n.memoizedProps:u,g=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{g==="input"&&u.type==="radio"&&u.name!=null&&Dr(s,u),Br(g,d);var I=Br(g,u);for(d=0;d<y.length;d+=2){var z=y[d],P=y[d+1];z==="style"?Ko(s,P):z==="dangerouslySetInnerHTML"?cr(s,P):z==="children"?Tt(s,P):te(s,z,P,I)}switch(g){case"input":tn(s,u);break;case"textarea":qo(s,u);break;case"select":var N=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!u.multiple;var $=u.value;$!=null?vn(s,!!u.multiple,$,!1):N!==!!u.multiple&&(u.defaultValue!=null?vn(s,!!u.multiple,u.defaultValue,!0):vn(s,!!u.multiple,u.multiple?[]:"",!1))}s[ao]=u}catch(Q){Pe(e,e.return,Q)}}break;case 6:if(Wt(t,e),Jt(e),o&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,u=e.memoizedProps;try{s.nodeValue=u}catch(Q){Pe(e,e.return,Q)}}break;case 3:if(Wt(t,e),Jt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(Q){Pe(e,e.return,Q)}break;case 4:Wt(t,e),Jt(e);break;case 13:Wt(t,e),Jt(e),s=e.child,s.flags&8192&&(u=s.memoizedState!==null,s.stateNode.isHidden=u,!u||s.alternate!==null&&s.alternate.memoizedState!==null||(Da=Me())),o&4&&Lc(e);break;case 22:if(z=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(I=ct)||z,Wt(t,e),ct=I):Wt(t,e),Jt(e),o&8192){if(I=e.memoizedState!==null,(e.stateNode.isHidden=I)&&!z&&(e.mode&1)!==0)for(W=e,z=e.child;z!==null;){for(P=W=z;W!==null;){switch(N=W,$=N.child,N.tag){case 0:case 11:case 14:case 15:vo(4,N,N.return);break;case 1:_r(N,N.return);var q=N.stateNode;if(typeof q.componentWillUnmount=="function"){o=N,n=N.return;try{t=o,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(Q){Pe(o,n,Q)}}break;case 5:_r(N,N.return);break;case 22:if(N.memoizedState!==null){Bc(P);continue}}$!==null?($.return=N,W=$):Bc(P)}z=z.sibling}e:for(z=null,P=e;;){if(P.tag===5){if(z===null){z=P;try{s=P.stateNode,I?(u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(g=P.stateNode,y=P.memoizedProps.style,d=y!=null&&y.hasOwnProperty("display")?y.display:null,g.style.display=Yo("display",d))}catch(Q){Pe(e,e.return,Q)}}}else if(P.tag===6){if(z===null)try{P.stateNode.nodeValue=I?"":P.memoizedProps}catch(Q){Pe(e,e.return,Q)}}else if((P.tag!==22&&P.tag!==23||P.memoizedState===null||P===e)&&P.child!==null){P.child.return=P,P=P.child;continue}if(P===e)break e;for(;P.sibling===null;){if(P.return===null||P.return===e)break e;z===P&&(z=null),P=P.return}z===P&&(z=null),P.sibling.return=P.return,P=P.sibling}}break;case 19:Wt(t,e),Jt(e),o&4&&Lc(e);break;case 21:break;default:Wt(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zc(n)){var o=n;break e}n=n.return}throw Error(l(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Tt(s,""),o.flags&=-33);var u=Ac(e);Aa(e,u,s);break;case 3:case 4:var d=o.stateNode.containerInfo,g=Ac(e);za(e,g,d);break;default:throw Error(l(161))}}catch(y){Pe(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qf(e,t,n){W=e,Mc(e)}function Mc(e,t,n){for(var o=(e.mode&1)!==0;W!==null;){var s=W,u=s.child;if(s.tag===22&&o){var d=s.memoizedState!==null||Mi;if(!d){var g=s.alternate,y=g!==null&&g.memoizedState!==null||ct;g=Mi;var I=ct;if(Mi=d,(ct=y)&&!I)for(W=s;W!==null;)d=W,y=d.child,d.tag===22&&d.memoizedState!==null?$c(s):y!==null?(y.return=d,W=y):$c(s);for(;u!==null;)W=u,Mc(u),u=u.sibling;W=s,Mi=g,ct=I}Oc(e)}else(s.subtreeFlags&8772)!==0&&u!==null?(u.return=s,W=u):Oc(e)}}function Oc(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ct||Oi(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ct)if(n===null)o.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Ut(t.type,n.memoizedProps);o.componentDidUpdate(s,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Bu(t,u,o);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bu(t,d,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var I=t.alternate;if(I!==null){var z=I.memoizedState;if(z!==null){var P=z.dehydrated;P!==null&&Xr(P)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ct||t.flags&512&&Na(t)}catch(N){Pe(t,t.return,N)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Bc(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function $c(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oi(4,t)}catch(y){Pe(t,n,y)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(y){Pe(t,s,y)}}var u=t.return;try{Na(t)}catch(y){Pe(t,u,y)}break;case 5:var d=t.return;try{Na(t)}catch(y){Pe(t,d,y)}}}catch(y){Pe(t,t.return,y)}if(t===e){W=null;break}var g=t.sibling;if(g!==null){g.return=t.return,W=g;break}W=t.return}}var Qf=Math.ceil,Bi=re.ReactCurrentDispatcher,Pa=re.ReactCurrentOwner,Pt=re.ReactCurrentBatchConfig,fe=0,Je=null,Ue=null,rt=0,It=0,Rr=zn(0),Ye=0,wo=null,or=0,$i=0,La=0,ko=null,xt=null,Da=0,Nr=1/0,pn=null,Ui=!1,Ma=null,On=null,Hi=!1,Bn=null,Wi=0,So=0,Oa=null,Vi=-1,qi=0;function ft(){return(fe&6)!==0?Me():Vi!==-1?Vi:Vi=Me()}function $n(e){return(e.mode&1)===0?1:(fe&2)!==0&&rt!==0?rt&-rt:_f.transition!==null?(qi===0&&(qi=Al()),qi):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Hl(e.type)),e)}function Vt(e,t,n,o){if(50<So)throw So=0,Oa=null,Error(l(185));Vr(e,n,o),((fe&2)===0||e!==Je)&&(e===Je&&((fe&2)===0&&($i|=n),Ye===4&&Un(e,rt)),yt(e,o),n===1&&fe===0&&(t.mode&1)===0&&(Nr=Me()+500,wi&&Pn()))}function yt(e,t){var n=e.callbackNode;Fp(e,t);var o=ti(e,e===Je?rt:0);if(o===0)n!==null&&Rl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Rl(n),t===1)e.tag===0?Ff(Hc.bind(null,e)):Tu(Hc.bind(null,e)),Cf(function(){(fe&6)===0&&Pn()}),n=null;else{switch(Pl(o)){case 1:n=ys;break;case 4:n=Nl;break;case 16:n=Go;break;case 536870912:n=zl;break;default:n=Go}n=Gc(n,Uc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uc(e,t){if(Vi=-1,qi=0,(fe&6)!==0)throw Error(l(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var o=ti(e,e===Je?rt:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Qi(e,o);else{t=o;var s=fe;fe|=2;var u=Vc();(Je!==e||rt!==t)&&(pn=null,Nr=Me()+500,sr(e,t));do try{Xf();break}catch(g){Wc(e,g)}while(!0);ra(),Bi.current=u,fe=s,Ue!==null?t=0:(Je=null,rt=0,t=Ye)}if(t!==0){if(t===2&&(s=vs(e),s!==0&&(o=s,t=Ba(e,s))),t===1)throw n=wo,sr(e,0),Un(e,o),yt(e,Me()),n;if(t===6)Un(e,o);else{if(s=e.current.alternate,(o&30)===0&&!Yf(s)&&(t=Qi(e,o),t===2&&(u=vs(e),u!==0&&(o=u,t=Ba(e,u))),t===1))throw n=wo,sr(e,0),Un(e,o),yt(e,Me()),n;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:ar(e,xt,pn);break;case 3:if(Un(e,o),(o&130023424)===o&&(t=Da+500-Me(),10<t)){if(ti(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){ft(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=qs(ar.bind(null,e,xt,pn),t);break}ar(e,xt,pn);break;case 4:if(Un(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var d=31-Ot(o);u=1<<d,d=t[d],d>s&&(s=d),o&=~u}if(o=s,o=Me()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Qf(o/1960))-o,10<o){e.timeoutHandle=qs(ar.bind(null,e,xt,pn),o);break}ar(e,xt,pn);break;case 5:ar(e,xt,pn);break;default:throw Error(l(329))}}}return yt(e,Me()),e.callbackNode===n?Uc.bind(null,e):null}function Ba(e,t){var n=ko;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=Qi(e,t),e!==2&&(t=xt,xt=n,t!==null&&$a(t)),e}function $a(e){xt===null?xt=e:xt.push.apply(xt,e)}function Yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var s=n[o],u=s.getSnapshot;s=s.value;try{if(!Bt(u(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t){for(t&=~La,t&=~$i,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),o=1<<n;e[n]=-1,t&=~o}}function Hc(e){if((fe&6)!==0)throw Error(l(327));zr();var t=ti(e,0);if((t&1)===0)return yt(e,Me()),null;var n=Qi(e,t);if(e.tag!==0&&n===2){var o=vs(e);o!==0&&(t=o,n=Ba(e,o))}if(n===1)throw n=wo,sr(e,0),Un(e,t),yt(e,Me()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ar(e,xt,pn),yt(e,Me()),null}function Ua(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(Nr=Me()+500,wi&&Pn())}}function ir(e){Bn!==null&&Bn.tag===0&&(fe&6)===0&&zr();var t=fe;fe|=1;var n=Pt.transition,o=ge;try{if(Pt.transition=null,ge=1,e)return e()}finally{ge=o,Pt.transition=n,fe=t,(fe&6)===0&&Pn()}}function Ha(){It=Rr.current,be(Rr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bf(n)),Ue!==null)for(n=Ue.return;n!==null;){var o=n;switch(Js(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&yi();break;case 3:Tr(),be(mt),be(at),da();break;case 5:ua(o);break;case 4:Tr();break;case 13:be(Fe);break;case 19:be(Fe);break;case 10:oa(o.type._context);break;case 22:case 23:Ha()}n=n.return}if(Je=e,Ue=e=Hn(e.current,null),rt=It=t,Ye=0,wo=null,La=$i=or=0,xt=ko=null,tr!==null){for(t=0;t<tr.length;t++)if(n=tr[t],o=n.interleaved,o!==null){n.interleaved=null;var s=o.next,u=n.pending;if(u!==null){var d=u.next;u.next=s,o.next=d}n.pending=o}tr=null}return e}function Wc(e,t){do{var n=Ue;try{if(ra(),_i.current=Ai,Ri){for(var o=_e.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Ri=!1}if(rr=0,Ge=Qe=_e=null,mo=!1,ho=0,Pa.current=null,n===null||n.return===null){Ye=1,wo=t,Ue=null;break}e:{var u=e,d=n.return,g=n,y=t;if(t=rt,g.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var I=y,z=g,P=z.tag;if((z.mode&1)===0&&(P===0||P===11||P===15)){var N=z.alternate;N?(z.updateQueue=N.updateQueue,z.memoizedState=N.memoizedState,z.lanes=N.lanes):(z.updateQueue=null,z.memoizedState=null)}var $=hc(d);if($!==null){$.flags&=-257,gc($,d,g,u,t),$.mode&1&&mc(u,I,t),t=$,y=I;var q=t.updateQueue;if(q===null){var Q=new Set;Q.add(y),t.updateQueue=Q}else q.add(y);break e}else{if((t&1)===0){mc(u,I,t),Wa();break e}y=Error(l(426))}}else if(Ee&&g.mode&1){var Oe=hc(d);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),gc(Oe,d,g,u,t),ta(Fr(y,g));break e}}u=y=Fr(y,g),Ye!==4&&(Ye=2),ko===null?ko=[u]:ko.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var b=pc(u,y,t);Ou(u,b);break e;case 1:g=y;var k=u.type,E=u.stateNode;if((u.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(On===null||!On.has(E)))){u.flags|=65536,t&=-t,u.lanes|=t;var L=fc(u,g,t);Ou(u,L);break e}}u=u.return}while(u!==null)}Qc(n)}catch(Y){t=Y,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function Vc(){var e=Bi.current;return Bi.current=Ai,e===null?Ai:e}function Wa(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||(or&268435455)===0&&($i&268435455)===0||Un(Je,rt)}function Qi(e,t){var n=fe;fe|=2;var o=Vc();(Je!==e||rt!==t)&&(pn=null,sr(e,t));do try{Kf();break}catch(s){Wc(e,s)}while(!0);if(ra(),fe=n,Bi.current=o,Ue!==null)throw Error(l(261));return Je=null,rt=0,Ye}function Kf(){for(;Ue!==null;)qc(Ue)}function Xf(){for(;Ue!==null&&!wp();)qc(Ue)}function qc(e){var t=Xc(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?Qc(e):Ue=t,Pa.current=null}function Qc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Uf(n,t,It),n!==null){Ue=n;return}}else{if(n=Hf(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ue=null;return}}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ye===0&&(Ye=5)}function ar(e,t,n){var o=ge,s=Pt.transition;try{Pt.transition=null,ge=1,Gf(e,t,n,o)}finally{Pt.transition=s,ge=o}return null}function Gf(e,t,n,o){do zr();while(Bn!==null);if((fe&6)!==0)throw Error(l(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(_p(e,u),e===Je&&(Ue=Je=null,rt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Hi||(Hi=!0,Gc(Go,function(){return zr(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=Pt.transition,Pt.transition=null;var d=ge;ge=1;var g=fe;fe|=4,Pa.current=null,Vf(e,n),Dc(n,e),xf(Ws),oi=!!Hs,Ws=Hs=null,e.current=n,qf(n),kp(),fe=g,ge=d,Pt.transition=u}else e.current=n;if(Hi&&(Hi=!1,Bn=e,Wi=s),u=e.pendingLanes,u===0&&(On=null),bp(n.stateNode),yt(e,Me()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ui)throw Ui=!1,e=Ma,Ma=null,e;return(Wi&1)!==0&&e.tag!==0&&zr(),u=e.pendingLanes,(u&1)!==0?e===Oa?So++:(So=0,Oa=e):So=0,Pn(),null}function zr(){if(Bn!==null){var e=Pl(Wi),t=Pt.transition,n=ge;try{if(Pt.transition=null,ge=16>e?16:e,Bn===null)var o=!1;else{if(e=Bn,Bn=null,Wi=0,(fe&6)!==0)throw Error(l(331));var s=fe;for(fe|=4,W=e.current;W!==null;){var u=W,d=u.child;if((W.flags&16)!==0){var g=u.deletions;if(g!==null){for(var y=0;y<g.length;y++){var I=g[y];for(W=I;W!==null;){var z=W;switch(z.tag){case 0:case 11:case 15:vo(8,z,u)}var P=z.child;if(P!==null)P.return=z,W=P;else for(;W!==null;){z=W;var N=z.sibling,$=z.return;if(Nc(z),z===I){W=null;break}if(N!==null){N.return=$,W=N;break}W=$}}}var q=u.alternate;if(q!==null){var Q=q.child;if(Q!==null){q.child=null;do{var Oe=Q.sibling;Q.sibling=null,Q=Oe}while(Q!==null)}}W=u}}if((u.subtreeFlags&2064)!==0&&d!==null)d.return=u,W=d;else e:for(;W!==null;){if(u=W,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:vo(9,u,u.return)}var b=u.sibling;if(b!==null){b.return=u.return,W=b;break e}W=u.return}}var k=e.current;for(W=k;W!==null;){d=W;var E=d.child;if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,W=E;else e:for(d=k;W!==null;){if(g=W,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:Oi(9,g)}}catch(Y){Pe(g,g.return,Y)}if(g===d){W=null;break e}var L=g.sibling;if(L!==null){L.return=g.return,W=L;break e}W=g.return}}if(fe=s,Pn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Jo,e)}catch{}o=!0}return o}finally{ge=n,Pt.transition=t}}return!1}function Yc(e,t,n){t=Fr(n,t),t=pc(e,t,1),e=Dn(e,t,1),t=ft(),e!==null&&(Vr(e,1,t),yt(e,t))}function Pe(e,t,n){if(e.tag===3)Yc(e,e,n);else for(;t!==null;){if(t.tag===3){Yc(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(On===null||!On.has(o))){e=Fr(n,e),e=fc(t,e,1),t=Dn(t,e,1),e=ft(),t!==null&&(Vr(t,1,e),yt(t,e));break}}t=t.return}}function Jf(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(rt&n)===n&&(Ye===4||Ye===3&&(rt&130023424)===rt&&500>Me()-Da?sr(e,0):La|=n),yt(e,t)}function Kc(e,t){t===0&&((e.mode&1)===0?t=1:(t=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var n=ft();e=un(e,t),e!==null&&(Vr(e,t,n),yt(e,n))}function Zf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kc(e,n)}function em(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),Kc(e,n)}var Xc;Xc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)gt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return gt=!1,$f(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,Ee&&(t.flags&1048576)!==0&&Fu(t,Si,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Di(e,t),e=t.pendingProps;var s=kr(t,at.current);Ir(t,n),s=ma(null,t,o,e,s,n);var u=ha();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(o)?(u=!0,vi(t)):u=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,aa(t),s.updater=Pi,t.stateNode=s,s._reactInternals=t,ka(t,o,e,n),t=Ca(null,t,o,!0,u,n)):(t.tag=0,Ee&&u&&Gs(t),pt(null,t,s,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Di(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=nm(o),e=Ut(o,e),s){case 0:t=ba(null,t,o,e,n);break e;case 1:t=Sc(null,t,o,e,n);break e;case 11:t=xc(null,t,o,e,n);break e;case 14:t=yc(null,t,o,Ut(o.type,e),n);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Ut(o,s),ba(e,t,o,s,n);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Ut(o,s),Sc(e,t,o,s,n);case 3:e:{if(jc(t),e===null)throw Error(l(387));o=t.pendingProps,u=t.memoizedState,s=u.element,Mu(e,t),Ti(t,o,null,n);var d=t.memoizedState;if(o=d.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){s=Fr(Error(l(423)),t),t=bc(e,t,o,n,s);break e}else if(o!==s){s=Fr(Error(l(424)),t),t=bc(e,t,o,n,s);break e}else for(Et=Nn(t.stateNode.containerInfo.firstChild),Ct=t,Ee=!0,$t=null,n=Lu(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),o===s){t=dn(e,t,n);break e}pt(e,t,o,n)}t=t.child}return t;case 5:return $u(t),e===null&&ea(t),o=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,d=s.children,Vs(o,s)?d=null:u!==null&&Vs(o,u)&&(t.flags|=32),kc(e,t),pt(e,t,d,n),t.child;case 6:return e===null&&ea(t),null;case 13:return Cc(e,t,n);case 4:return la(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Cr(t,null,o,n):pt(e,t,o,n),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Ut(o,s),xc(e,t,o,s,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,u=t.memoizedProps,d=s.value,ke(Ci,o._currentValue),o._currentValue=d,u!==null)if(Bt(u.value,d)){if(u.children===s.children&&!mt.current){t=dn(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var g=u.dependencies;if(g!==null){d=u.child;for(var y=g.firstContext;y!==null;){if(y.context===o){if(u.tag===1){y=cn(-1,n&-n),y.tag=2;var I=u.updateQueue;if(I!==null){I=I.shared;var z=I.pending;z===null?y.next=y:(y.next=z.next,z.next=y),I.pending=y}}u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),ia(u.return,n,t),g.lanes|=n;break}y=y.next}}else if(u.tag===10)d=u.type===t.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(l(341));d.lanes|=n,g=d.alternate,g!==null&&(g.lanes|=n),ia(d,n,t),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===t){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}pt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,Ir(t,n),s=zt(s),o=o(s),t.flags|=1,pt(e,t,o,n),t.child;case 14:return o=t.type,s=Ut(o,t.pendingProps),s=Ut(o.type,s),yc(e,t,o,s,n);case 15:return vc(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Ut(o,s),Di(e,t),t.tag=1,ht(o)?(e=!0,vi(t)):e=!1,Ir(t,n),cc(t,o,s),ka(t,o,s,n),Ca(null,t,o,!0,e,n);case 19:return Ic(e,t,n);case 22:return wc(e,t,n)}throw Error(l(156,t.tag))};function Gc(e,t){return _l(e,t)}function tm(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,n,o){return new tm(e,t,n,o)}function Va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nm(e){if(typeof e=="function")return Va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ne)return 11;if(e===Ce)return 14}return 2}function Hn(e,t){var n=e.alternate;return n===null?(n=Lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yi(e,t,n,o,s,u){var d=2;if(o=e,typeof e=="function")Va(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ve:return lr(n.children,s,u,t);case Te:d=8,s|=8;break;case Le:return e=Lt(12,n,t,s|2),e.elementType=Le,e.lanes=u,e;case ze:return e=Lt(13,n,t,s),e.elementType=ze,e.lanes=u,e;case Ke:return e=Lt(19,n,t,s),e.elementType=Ke,e.lanes=u,e;case ce:return Ki(n,s,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Be:d=10;break e;case we:d=9;break e;case Ne:d=11;break e;case Ce:d=14;break e;case ne:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Lt(d,n,t,s),t.elementType=e,t.type=o,t.lanes=u,t}function lr(e,t,n,o){return e=Lt(7,e,o,t),e.lanes=n,e}function Ki(e,t,n,o){return e=Lt(22,e,o,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function qa(e,t,n){return e=Lt(6,e,null,t),e.lanes=n,e}function Qa(e,t,n){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rm(e,t,n,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ws(0),this.expirationTimes=ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ya(e,t,n,o,s,u,d,g,y){return e=new rm(e,t,n,g,y),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Lt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},aa(u),e}function om(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Jc(e){if(!e)return An;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(ht(n))return Eu(e,n,t)}return t}function Zc(e,t,n,o,s,u,d,g,y){return e=Ya(n,o,!0,e,s,u,d,g,y),e.context=Jc(null),n=e.current,o=ft(),s=$n(n),u=cn(o,s),u.callback=t??null,Dn(n,u,s),e.current.lanes=s,Vr(e,s,o),yt(e,o),e}function Xi(e,t,n,o){var s=t.current,u=ft(),d=$n(s);return n=Jc(n),t.context===null?t.context=n:t.pendingContext=n,t=cn(u,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Dn(s,t,d),e!==null&&(Vt(e,s,d,u),Ii(e,s,d)),d}function Gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ed(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ka(e,t){ed(e,t),(e=e.alternate)&&ed(e,t)}function im(){return null}var td=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}Ji.prototype.render=Xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Xi(e,t,null,null)},Ji.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){Xi(null,e,null,null)}),t[on]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ml();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&$l(e)}};function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function sm(e,t,n,o,s){if(s){if(typeof o=="function"){var u=o;o=function(){var I=Gi(d);u.call(I)}}var d=Zc(t,o,e,0,null,!1,!1,"",nd);return e._reactRootContainer=d,e[on]=d.current,io(e.nodeType===8?e.parentNode:e),ir(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var g=o;o=function(){var I=Gi(y);g.call(I)}}var y=Ya(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=y,e[on]=y.current,io(e.nodeType===8?e.parentNode:e),ir(function(){Xi(t,y,n,o)}),y}function es(e,t,n,o,s){var u=n._reactRootContainer;if(u){var d=u;if(typeof s=="function"){var g=s;s=function(){var y=Gi(d);g.call(y)}}Xi(t,d,e,s)}else d=sm(n,t,e,s,o);return Gi(d)}Ll=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&(ks(t,n|1),yt(t,Me()),(fe&6)===0&&(Nr=Me()+500,Pn()))}break;case 13:ir(function(){var o=un(e,1);if(o!==null){var s=ft();Vt(o,e,1,s)}}),Ka(e,1)}},Ss=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=ft();Vt(t,e,134217728,n)}Ka(e,134217728)}},Dl=function(e){if(e.tag===13){var t=$n(e),n=un(e,t);if(n!==null){var o=ft();Vt(n,e,t,o)}Ka(e,t)}},Ml=function(){return ge},Ol=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},$r=function(e,t,n){switch(t){case"input":if(tn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var s=xi(o);if(!s)throw Error(l(90));yn(o),tn(o,s)}}}break;case"textarea":qo(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}},qe=Ua,st=ir;var am={usingClientEntryPoint:!1,Events:[lo,vr,xi,se,De,Ua]},jo={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lm={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tl(e),e===null?null:e.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Jo=ts.inject(lm),Yt=ts}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=am,vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ga(t))throw Error(l(200));return om(e,t,null,n)},vt.createRoot=function(e,t){if(!Ga(e))throw Error(l(299));var n=!1,o="",s=td;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ya(e,1,!1,null,null,n,!1,o,s),e[on]=t.current,io(e.nodeType===8?e.parentNode:e),new Xa(t)},vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Tl(t),e=e===null?null:e.stateNode,e},vt.flushSync=function(e){return ir(e)},vt.hydrate=function(e,t,n){if(!Zi(t))throw Error(l(200));return es(null,e,t,!0,n)},vt.hydrateRoot=function(e,t,n){if(!Ga(e))throw Error(l(405));var o=n!=null&&n.hydratedSources||null,s=!1,u="",d=td;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Zc(t,null,e,1,n??null,s,!1,u,d),e[on]=t.current,io(e),o)for(e=0;e<o.length;e++)n=o[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Ji(t)},vt.render=function(e,t,n){if(!Zi(t))throw Error(l(200));return es(null,e,t,!1,n)},vt.unmountComponentAtNode=function(e){if(!Zi(e))throw Error(l(40));return e._reactRootContainer?(ir(function(){es(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1},vt.unstable_batchedUpdates=Ua,vt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Zi(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return es(e,t,n,!1,o)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var cd;function Rd(){if(cd)return el.exports;cd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),el.exports=hm(),el.exports}var dd;function gm(){if(dd)return ns;dd=1;var i=Rd();return ns.createRoot=i.createRoot,ns.hydrateRoot=i.hydrateRoot,ns}var xm=gm();function it({label:i,variant:a="neutral",size:l="md"}){const c=l==="sm"?{height:"24px",paddingLeft:"10px",paddingRight:"10px",fontSize:"12px",lineHeight:"18px",fontWeight:"500"}:{height:"28px",paddingLeft:"12px",paddingRight:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600"},p=a==="neutral"?{backgroundColor:"var(--card)",dotColor:"var(--muted-foreground)",textColor:"var(--foreground)"}:{backgroundColor:"var(--accent)",dotColor:"var(--primary)",textColor:"var(--accent-foreground)"};return r.jsxs("div",{style:{height:c.height,paddingLeft:c.paddingLeft,paddingRight:c.paddingRight,borderRadius:"999px",gap:"8px",backgroundColor:p.backgroundColor,border:"1px solid var(--border)",display:"inline-flex",alignItems:"center"},children:[r.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:p.dotColor}}),r.jsx("span",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:c.fontSize,lineHeight:c.lineHeight,fontWeight:c.fontWeight,color:p.textColor},children:i})]})}function We({label:i,variant:a="primary",size:l="md",onClick:c,disabled:p=!1,fullWidth:f=!1}){const m={sm:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}}[l],x={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"var(--card)",color:"var(--foreground)",border:"1px solid var(--border)"},ghost:{backgroundColor:"transparent",color:"var(--foreground)",border:"none"}}[a];return r.jsx("button",{onClick:c,disabled:p,style:{height:m.height,paddingLeft:m.paddingLeft,paddingRight:m.paddingRight,borderRadius:m.borderRadius,backgroundColor:p?"var(--muted)":x.backgroundColor,color:x.color,fontSize:m.fontSize,lineHeight:m.lineHeight,fontWeight:"600",border:p?"1px solid var(--border)":x.border,display:"inline-flex",alignItems:"center",justifyContent:"center",width:f?"100%":"auto",cursor:p?"not-allowed":"pointer",fontFamily:"Inter, system-ui, sans-serif",opacity:p?.65:1},children:i})}const ym="/assets/Big%20Logo-Bdh1LtUa.svg",vm="/assets/Logo%20Dark-BJGV7fxC.svg",wm="2026-03-10-1";function Nd({size:i=32,variant:a="dark",showText:l=!0,href:c="/"}){const p=a==="light"?vm:ym,f=a==="dark"?"#101828":"#FFFFFF",m=r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[r.jsx("div",{style:{width:`${i}px`,height:`${i}px`,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:`${p}?v=${wm}`,alt:"Vibe Station Logo",width:i,height:i,style:{width:`${i}px`,height:`${i}px`,objectFit:"contain",display:"block"}})}),l&&r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:i>=48?"24px":i>=32?"20px":"16px",lineHeight:i>=48?"32px":i>=32?"28px":"24px",fontWeight:"600",letterSpacing:"-0.02em",color:f},children:"VIBE STATION"})]});return c?r.jsx("a",{href:c,style:{textDecoration:"none",display:"inline-flex",cursor:"pointer"},children:m}):m}const km="w-full mx-auto px-4 md:px-6 lg:px-8",Sm={wide:"max-w-[1200px]",standard:"max-w-[1080px]",narrow:"max-w-[860px]"};function jm(i,a){return[km,Sm[i],a].filter(Boolean).join(" ")}function fs({children:i,width:a="wide",className:l}){return r.jsx("div",{className:jm(a,l),children:i})}function bm({children:i,className:a}){return r.jsx(fs,{width:"wide",className:a,children:i})}function Cm({children:i,className:a}){return r.jsx(fs,{width:"standard",className:a,children:i})}function Em({children:i,className:a}){return r.jsx(fs,{width:"narrow",className:a,children:i})}const he=Object.assign(fs,{Wide:bm,Standard:Cm,Narrow:Em}),zd="kz9z4f-2a.myshopify.com",Ad="daf156f4e4046c726902bca5c28e9cbe",Im="2026-01",Pd="http://localhost:3001",_o="/api/shopify",Tm="false".toLowerCase()==="true",Fm="X-Shopify-Storefront-Access-Token",ul="IN".toUpperCase(),Ld="EN".toUpperCase(),_m=`https://${zd}/api/${Im}/graphql.json`,Dd="shopify_cart_id";class Re extends Error{constructor(a,l,c){super(a),this.code=l,this.field=c,this.name="StorefrontAPIError"}}const Md=()=>Ad.length>0,Rm=()=>zd.length>0,Nm=()=>Pd.length>0&&_o.length>0,zm=()=>_o.startsWith("http://")||_o.startsWith("https://")?_o:`${Pd.replace(/\/+$/,"")}/${_o.replace(/^\/+/,"")}`,Od=()=>Tm||!Md()&&Nm(),Am=()=>Od()?!0:Rm()&&Md();async function Ve(i,a={}){if(!Am())throw new Re("Shopify is not configured","SHOPIFY_NOT_CONFIGURED");let l;if(Od()?l=await fetch(zm(),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({query:i,variables:a})}):l=await fetch(_m,{method:"POST",headers:{"Content-Type":"application/json",[Fm]:Ad},body:JSON.stringify({query:i,variables:a})}),!l.ok)throw l.status===429?new Re("Rate limit exceeded","RATE_LIMIT"):new Re(`HTTP ${l.status}`,"HTTP_ERROR");const{data:c,errors:p}=await l.json();if(p&&p.length>0)throw new Re(p[0].message,"GRAPHQL_ERROR",p[0].field);if(!c)throw new Re("Missing response data","EMPTY_DATA");return c}function ms(i){var c,p,f;const a=i.featuredImage;if(a!=null&&a.url)return{url:a.url,altText:a.altText||i.title||"Product image"};const l=(f=(p=(c=i.images)==null?void 0:c.edges)==null?void 0:p[0])==null?void 0:f.node;return l!=null&&l.url?{url:l.url,altText:l.altText||i.title||"Product image"}:null}const Pm=`
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
`,Bd=`@inContext(country: ${ul}, language: ${Ld})`,Lm=`
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
          ${Pm}
        }
      }
    }
  }
`,Dm=`
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
`,Mm=`
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
`,Om=`
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
`,Bm=`
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
`,$m=`
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
`,Um=`
  query Cart($id: ID!) {
    cart(id: $id) {
      ${Pr}
    }
  }
`,Hm=`
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
`,hs=(i,a)=>{const l=i[a];if(l.userErrors.length>0){const c=l.userErrors[0];throw new Re(c.message,"CART_USER_ERROR",c.field)}if(!l.cart)throw new Re("Cart was not returned by Shopify","MISSING_CART");return l.cart};async function Wm(i){return(await Ve(Dm,{handle:i})).product}async function Oo(i={}){const a=typeof i=="number"?{first:i}:i;return(await Ve(Lm,{first:a.first??24,after:a.after??null,sortKey:a.sortKey??"BEST_SELLING",reverse:a.reverse??!1,query:a.query})).products}async function Vm(i=[]){const a=await Ve(Mm,{input:{lines:i,buyerIdentity:{countryCode:ul}},country:ul,language:Ld});return hs(a,"cartCreate")}async function qm(i,a){const l=await Ve(Om,{cartId:i,lines:a});return hs(l,"cartLinesAdd")}async function Qm(i,a){const l=await Ve(Bm,{cartId:i,lines:a});return hs(l,"cartLinesUpdate")}async function Ym(i,a){const l=await Ve($m,{cartId:i,lineIds:a});return hs(l,"cartLinesRemove")}async function Km(i){return(await Ve(Um,{id:i})).cart}async function Xm(i,a){const c=(await Ve(Hm,{cartId:i,buyerIdentity:a})).cartBuyerIdentityUpdate;if(c.userErrors.length>0){const p=c.userErrors[0];throw new Re(p.message,"CART_USER_ERROR",p.field)}if(!c.cart)throw new Re("Cart was not returned by Shopify","MISSING_CART");return c.cart}const Gm=()=>typeof window>"u"?null:window.localStorage.getItem(Dd),Jm=i=>{typeof window>"u"||window.localStorage.setItem(Dd,i)},yl="customer_token",vl="token_expires_at",$d=`
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
`,Zm=`
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
`,gs=()=>typeof window<"u",Ud=i=>{if(!i)return!0;const a=Date.parse(i);return Number.isNaN(a)?!0:a<=Date.now()},wl=i=>{gs()&&(window.localStorage.setItem(yl,i.accessToken),window.localStorage.setItem(vl,i.expiresAt))},Hd=()=>gs()?window.localStorage.getItem(yl):null,Wd=()=>gs()?window.localStorage.getItem(vl):null,eh=i=>{var l;const a=(l=i.field)!=null&&l.length?` for ${i.field.join(".")}`:"";switch(i.code){case"TAKEN":return`A customer already exists${a}.`;case"INVALID":return`Shopify rejected the value${a}. ${i.message}`;case"UNIDENTIFIED_CUSTOMER":return"The email or password is incorrect.";case"CUSTOMER_DISABLED":return"This customer account is disabled.";case"BAD_DOMAIN":return`The email address domain is invalid${a}.`;case"TOKEN_INVALID":return"The customer session is invalid. Please sign in again.";case"CUSTOMER_RESET_TOKEN_INVALID":case"TOKEN_EXPIRED":return"This link has expired. Please request a new one.";default:return i.message}},th=(i,a,l)=>i instanceof Re?{type:i.code==="HTTP_ERROR"||i.code==="RATE_LIMIT"?"network":"api",message:i.message||l,code:i.code||a,field:i.field}:i instanceof TypeError?{type:"network",message:"Network request failed while contacting Shopify.",code:a}:{type:"unknown",message:l,code:a},cl=i=>({ok:!1,data:null,error:i}),kl=i=>({ok:!0,data:i,error:null}),gn=(i,a)=>{if(i.length===0)return;const l=i[0];throw new Re(eh(l),l.code||a,l.field)},nh=()=>{const i=Hd(),a=Wd();return!i||!a?(dl(),cl({type:"session",message:"No active customer session was found.",code:"CUSTOMER_SESSION_MISSING"})):Ud(a)?(dl(),cl({type:"session",message:"The customer session has expired. Please sign in again.",code:"CUSTOMER_SESSION_EXPIRED"})):kl(i)},Mt=async(i,a,l)=>{try{return kl(await i())}catch(c){return cl(th(c,a,l))}};function dl(){gs()&&(window.localStorage.removeItem(yl),window.localStorage.removeItem(vl))}function zo(){const i=Hd(),a=Wd();return{accessToken:i,expiresAt:a,isExpired:Ud(a)}}function rs(){dl()}const rh=`
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
`,oh=`
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
`,ih=`
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
  mutation customerResetByUrl($resetUrl: URL!, $password: String!) {
    customerResetByUrl(resetUrl: $resetUrl, password: $password) {
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
            ${Zm}
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
`;async function hh(i){return Mt(async()=>{const a=await Ve(rh,{input:i});if(gn(a.customerCreate.customerUserErrors,"CUSTOMER_CREATE_ERROR"),!a.customerCreate.customer)throw new Re("Customer was not returned by Shopify","MISSING_CUSTOMER");return a.customerCreate.customer},"CUSTOMER_CREATE_ERROR","Unable to create the customer account.")}async function pd(i,a){return Mt(async()=>{const l=await Ve(oh,{input:{email:i,password:a}});if(gn(l.customerAccessTokenCreate.customerUserErrors,"CUSTOMER_LOGIN_ERROR"),!l.customerAccessTokenCreate.customerAccessToken)throw new Re("Customer access token was not returned by Shopify","MISSING_CUSTOMER_TOKEN");return wl(l.customerAccessTokenCreate.customerAccessToken),l.customerAccessTokenCreate.customerAccessToken},"CUSTOMER_LOGIN_ERROR","Unable to sign in the customer.")}async function fd(i){const a=i?kl(i):nh();return a.ok?Mt(async()=>{const l=await Ve(ih,{customerAccessToken:a.data});if(l.customerAccessTokenRenew.userErrors.length>0){const c=l.customerAccessTokenRenew.userErrors[0];throw new Re(c.message,"CUSTOMER_TOKEN_RENEW_ERROR",c.field)}if(!l.customerAccessTokenRenew.customerAccessToken)throw new Re("Customer access token renewal did not return a token","MISSING_CUSTOMER_TOKEN");return wl(l.customerAccessTokenRenew.customerAccessToken),l.customerAccessTokenRenew.customerAccessToken},"CUSTOMER_TOKEN_RENEW_ERROR","Unable to renew the customer session."):a}async function gh(i){return Mt(async()=>{const a=await Ve(sh,{email:i});return gn(a.customerRecover.customerUserErrors,"CUSTOMER_RECOVER_ERROR"),{email:i,submitted:!0}},"CUSTOMER_RECOVER_ERROR","Unable to request a password reset.")}async function xh(i,a){return Mt(async()=>{const l=await Ve(ah,{resetUrl:i,password:a});if(gn(l.customerResetByUrl.customerUserErrors,"CUSTOMER_RESET_ERROR"),!l.customerResetByUrl.customerAccessToken)throw new Re("Customer password reset did not return a new access token","MISSING_CUSTOMER_TOKEN");return wl(l.customerResetByUrl.customerAccessToken),l.customerResetByUrl.customerAccessToken},"CUSTOMER_RESET_ERROR","Unable to reset the customer password.")}async function Ro(i){return Mt(async()=>(await Ve(lh,{customerAccessToken:i})).customer,"CUSTOMER_FETCH_ERROR","Unable to load customer data.")}async function yh(i,a=10,l){return Mt(async()=>{var p;return((p=(await Ve(uh,{customerAccessToken:i,first:a,after:l||null})).customer)==null?void 0:p.orders)||null},"CUSTOMER_ORDERS_FETCH_ERROR","Unable to load customer orders.")}async function vh(i,a){return Mt(async()=>{const l=await Ve(ch,{customerAccessToken:i,customer:a});if(gn(l.customerUpdate.customerUserErrors,"CUSTOMER_UPDATE_ERROR"),!l.customerUpdate.customer)throw new Re("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerUpdate.customer},"CUSTOMER_UPDATE_ERROR","Unable to update the customer profile.")}async function wh(i,a){return Mt(async()=>{const l=await Ve(dh,{customerAccessToken:i,address:a});if(gn(l.customerAddressCreate.customerUserErrors,"CUSTOMER_ADDRESS_CREATE_ERROR"),!l.customerAddressCreate.customerAddress)throw new Re("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressCreate.customerAddress},"CUSTOMER_ADDRESS_CREATE_ERROR","Unable to create the customer address.")}async function kh(i,a,l){return Mt(async()=>{const c=await Ve(ph,{customerAccessToken:i,id:a,address:l});if(gn(c.customerAddressUpdate.customerUserErrors,"CUSTOMER_ADDRESS_UPDATE_ERROR"),!c.customerAddressUpdate.customerAddress)throw new Re("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return c.customerAddressUpdate.customerAddress},"CUSTOMER_ADDRESS_UPDATE_ERROR","Unable to update the customer address.")}async function Sh(i,a){return Mt(async()=>{const l=await Ve(fh,{customerAccessToken:i,id:a});if(gn(l.customerAddressDelete.customerUserErrors,"CUSTOMER_ADDRESS_DELETE_ERROR"),!l.customerAddressDelete.deletedCustomerAddressId)throw new Re("Deleted customer address id was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressDelete.deletedCustomerAddressId},"CUSTOMER_ADDRESS_DELETE_ERROR","Unable to delete the customer address.")}async function jh(i,a){return Mt(async()=>{const l=await Ve(mh,{customerAccessToken:i,addressId:a});if(gn(l.customerDefaultAddressUpdate.customerUserErrors,"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR"),!l.customerDefaultAddressUpdate.customer)throw new Re("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerDefaultAddressUpdate.customer.defaultAddress},"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR","Unable to update the default address.")}const bh=(i,a)=>{const l=Number(i);return!Number.isFinite(l)||!a?i||"":new Intl.NumberFormat("en-US",{style:"currency",currency:a}).format(l)},Co=(i,a)=>({id:i.id,email:i.email,firstName:i.firstName||"",lastName:i.lastName||"",phone:i.phone||void 0,acceptsMarketing:!1,createdAt:a||new Date().toISOString()}),Ch=i=>{var l;const a=((l=i.defaultAddress)==null?void 0:l.id)||null;return i.addresses.edges.map(c=>c.node).filter(c=>!!(c!=null&&c.id)).map(c=>({id:c.id,firstName:"",lastName:"",company:void 0,address1:c.address1||"",address2:c.address2||void 0,city:c.city||"",province:c.province||"",zip:c.zip||"",country:c.country||"",phone:void 0,isDefault:c.id===a}))},Eh=i=>i?i.edges.map(a=>{var l,c;return{id:a.node.id,orderNumber:String(a.node.orderNumber),createdAt:a.node.processedAt,totalPrice:bh((l=a.node.totalPriceV2)==null?void 0:l.amount,(c=a.node.totalPriceV2)==null?void 0:c.currencyCode),fulfillmentStatus:a.node.fulfillmentStatus==="FULFILLED"||a.node.fulfillmentStatus==="UNFULFILLED"||a.node.fulfillmentStatus==="PARTIALLY_FULFILLED"||a.node.fulfillmentStatus==="CANCELLED"?a.node.fulfillmentStatus:"UNFULFILLED",lineItems:a.node.lineItems.edges.map((p,f)=>({id:`${a.node.id}-${f}`,title:p.node.title,quantity:p.node.quantity,price:""}))}}):[],md=i=>({firstName:i.firstName||void 0,lastName:i.lastName||void 0,company:i.company||void 0,address1:i.address1||void 0,address2:i.address2||void 0,city:i.city||void 0,province:i.province||void 0,zip:i.zip||void 0,country:i.country||void 0,phone:i.phone||void 0});function Ih(){const[i,a]=_.useState(null),[l,c]=_.useState(null),[p,f]=_.useState(!0),m=async()=>{const T=zo();if(!T.accessToken){a(null),c(null);return}const R=await fd(T.accessToken);if(!R.ok)throw rs(),a(null),c(null),new Error(R.error.message||"Customer session expired.");const M=await Ro(R.data.accessToken);if(!M.ok||!M.data)throw new Error(M.error.message||"Unable to load customer data.");a(Co(M.data,i==null?void 0:i.createdAt)),c(R.data.accessToken)};return _.useEffect(()=>{let T=!1;return(async()=>{var M;try{const A=zo();if(!A.accessToken){T||(a(null),c(null),f(!1));return}const U=await fd(A.accessToken);if(!U.ok){T||(rs(),a(null),c(null));return}const K=await Ro(U.data.accessToken);if(!K.ok||!K.data)throw new Error(((M=K.error)==null?void 0:M.message)||"Unable to load customer data.");T||(a(Co(K.data)),c(U.data.accessToken))}catch{T||(rs(),a(null),c(null))}finally{T||f(!1)}})(),()=>{T=!0}},[]),{customer:i,accessToken:l,isAuthenticated:!!(i&&l),isLoading:p,login:async(T,R)=>{f(!0);try{const M=await pd(T,R);if(!M.ok)throw new Error(M.error.message||"Unable to sign in.");const A=await Ro(M.data.accessToken);if(!A.ok||!A.data)throw new Error(A.error.message||"Unable to load customer data.");a(Co(A.data)),c(M.data.accessToken)}finally{f(!1)}},register:async T=>{f(!0);try{const R=await hh(T);if(!R.ok)throw new Error(R.error.message||"Unable to create the account.");const M=await pd(T.email,T.password);if(!M.ok)throw new Error(M.error.message||"Account created but sign-in failed.");const A=await Ro(M.data.accessToken);if(!A.ok||!A.data)throw new Error(A.error.message||"Unable to load customer data.");a(Co(A.data,new Date().toISOString())),c(M.data.accessToken)}finally{f(!1)}},logout:()=>{rs(),a(null),c(null)},updateProfile:async T=>{const R=l||zo().accessToken;if(!R)throw new Error("No active customer session was found.");f(!0);try{const M=await vh(R,T);if(!M.ok)throw new Error(M.error.message||"Unable to update the profile.");a(A=>Co(M.data,A==null?void 0:A.createdAt))}finally{f(!1)}},refreshCustomerData:m,requestPasswordReset:async T=>{const R=await gh(T);if(!R.ok)throw new Error(R.error.message||"Unable to send the password reset email.")},resetPassword:async(T,R)=>{const M=await xh(T,R);if(!M.ok){const A=new Error(M.error.message||"Unable to reset the password.");throw A.code=M.error.code,A}}}}function Th(){const{accessToken:i,isAuthenticated:a}=xn(),[l,c]=_.useState([]),[p,f]=_.useState(!0),[m,x]=_.useState(!1),[S,j]=_.useState(null),C=i||zo().accessToken,h=async()=>{var T;if(!C||!a){c([]),f(!1);return}f(!0),j(null);try{const R=await Ro(C);if(!R.ok||!R.data)throw new Error(((T=R.error)==null?void 0:T.message)||"Unable to load addresses.");c(Ch(R.data))}catch(R){j(R instanceof Error?R.message:"Unable to load addresses.")}finally{f(!1)}};_.useEffect(()=>{h()},[C,a]);const w=async T=>{x(!0),j(null);try{await T(),await h()}catch(R){const M=R instanceof Error?R.message:"Unable to update addresses.";throw j(M),R}finally{x(!1)}};return{addresses:l,isLoading:p,isSaving:m,error:S,refresh:h,createAddress:async T=>{if(!C)throw new Error("No active customer session was found.");await w(async()=>{const R=await wh(C,md(T));if(!R.ok)throw new Error(R.error.message||"Unable to create address.")})},editAddress:async T=>{if(!C)throw new Error("No active customer session was found.");await w(async()=>{const R=await kh(C,T.id,md(T));if(!R.ok)throw new Error(R.error.message||"Unable to update address.")})},removeAddress:async T=>{if(!C)throw new Error("No active customer session was found.");await w(async()=>{const R=await Sh(C,T);if(!R.ok)throw new Error(R.error.message||"Unable to delete address.")})},makeDefaultAddress:async T=>{if(!C)throw new Error("No active customer session was found.");await w(async()=>{const R=await jh(C,T);if(!R.ok)throw new Error(R.error.message||"Unable to set the default address.")})}}}function Fh(){const{accessToken:i,isAuthenticated:a}=xn(),[l,c]=_.useState([]),[p,f]=_.useState(null),[m,x]=_.useState(!0),[S,j]=_.useState(!1),[C,h]=_.useState(null),w=i||zo().accessToken,T=async(R,M=!1)=>{if(!w||!a){c([]),f(null),x(!1);return}M?j(!0):x(!0),h(null);try{const A=await yh(w,10,R);if(!A.ok)throw new Error(A.error.message||"Unable to load orders.");const U=Eh(A.data);c(K=>M?[...K,...U]:U),f(A.data?{hasNextPage:A.data.pageInfo.hasNextPage,hasPreviousPage:A.data.pageInfo.hasPreviousPage,startCursor:A.data.pageInfo.startCursor,endCursor:A.data.pageInfo.endCursor}:null)}catch(A){h(A instanceof Error?A.message:"Unable to load orders.")}finally{x(!1),j(!1)}};return _.useEffect(()=>{T()},[w,a]),{orders:l,pageInfo:p,hasMore:!!(p!=null&&p.hasNextPage&&(p!=null&&p.endCursor)),isLoading:m,isLoadingMore:S,error:C,refresh:async()=>T(),loadMore:async()=>{p!=null&&p.endCursor&&await T(p.endCursor,!0)}}}const Vd=_.createContext(null);function xn(){const i=_.useContext(Vd);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i}function _h({children:i}){const a=Ih(),l={customer:a.customer,accessToken:a.accessToken,isAuthenticated:a.isAuthenticated,isLoading:a.isLoading,login:async(c,p)=>{await a.login(c,p)},register:async c=>{await a.register(c)},logout:()=>{a.logout()},updateProfile:async c=>{await a.updateProfile(c)},refreshCustomerData:async()=>{await a.refreshCustomerData()},requestPasswordReset:async c=>{await a.requestPasswordReset(c)},resetPassword:async(c,p)=>{await a.resetPassword(c,p)}};return r.jsx(Vd.Provider,{value:l,children:i})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Nh=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,c)=>c?c.toUpperCase():l.toLowerCase()),hd=i=>{const a=Nh(i);return a.charAt(0).toUpperCase()+a.slice(1)},qd=(...i)=>i.filter((a,l,c)=>!!a&&a.trim()!==""&&c.indexOf(a)===l).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=_.forwardRef(({color:i="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:p="",children:f,iconNode:m,...x},S)=>_.createElement("svg",{ref:S,...zh,width:a,height:a,stroke:i,strokeWidth:c?Number(l)*24/Number(a):l,className:qd("lucide",p),...x},[...m.map(([j,C])=>_.createElement(j,C)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(i,a)=>{const l=_.forwardRef(({className:c,...p},f)=>_.createElement(Ah,{ref:f,iconNode:a,className:qd(`lucide-${Rh(hd(i))}`,`lucide-${i}`,c),...p}));return l.displayName=hd(i),l};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Qd=ye("arrow-left",Ph);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yd=ye("check",Lh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Mh=ye("chevron-down",Dh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Bh=ye("chevron-right",Oh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Uh=ye("circle-alert",$h);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Wh=ye("circle-check-big",Hh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],qh=ye("circle-check",Vh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Yh=ye("circle-x",Qh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Xh=ye("ellipsis-vertical",Kh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Jh=ye("eye-off",Gh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],eg=ye("eye",Zh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Kd=ye("info",tg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],rg=ye("loader-circle",ng);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],ig=ye("log-out",og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],ag=ye("mail",sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Sl=ye("map-pin",lg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],cg=ye("menu",ug);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Xd=ye("moon",dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Uo=ye("package",pg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],mg=ye("pen",fg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],gg=ye("phone",hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],gd=ye("plus",xg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],vg=ye("search",yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],kg=ye("shield",wg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Gd=ye("sun",Sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],bg=ye("triangle-alert",jg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Jd=ye("user",Cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],jl=ye("x",Eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Tg=ye("zap",Ig);function Ie({label:i,error:a,helperText:l,showPasswordToggle:c,type:p="text",disabled:f,...m}){const[x,S]=_.useState(!1),[j,C]=_.useState(!1),h=c&&x?"text":p;return r.jsxs("div",{style:{width:"100%"},children:[r.jsx("label",{htmlFor:m.id,style:{display:"block",fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"#344054",marginBottom:"6px",fontFamily:"Inter, system-ui, sans-serif"},children:i}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx("input",{...m,type:h,disabled:f,onFocus:w=>{var T;C(!0),(T=m.onFocus)==null||T.call(m,w)},onBlur:w=>{var T;C(!1),(T=m.onBlur)==null||T.call(m,w)},style:{width:"100%",height:"44px",padding:"10px 14px",paddingRight:c?"44px":"14px",fontSize:"16px",lineHeight:"24px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:f?"#98A2B3":"#101828",backgroundColor:f?"#F9FAFB":"#FFFFFF",border:`1px solid ${a?"#F04438":j?"#4F46E5":"#D0D5DD"}`,borderRadius:"10px",outline:"none",boxShadow:j&&!a?"0 0 0 2px rgba(79, 70, 229, 0.06)":"none",cursor:f?"not-allowed":"text",transition:"all 0.15s ease"}}),c&&r.jsx("button",{type:"button",onClick:()=>S(!x),disabled:f,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:"4px",cursor:f?"not-allowed":"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",opacity:f?.4:1},"aria-label":x?"Hide password":"Show password",children:x?r.jsx(Jh,{size:20}):r.jsx(eg,{size:20})})]}),a&&r.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif"},children:a}),!a&&l&&r.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:l})]})}function dt({variant:i="primary",size:a="md",isLoading:l=!1,disabled:c,children:p,...f}){const m=c||l,x={sm:{height:"36px",padding:"0 12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",padding:"0 16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",padding:"0 20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}},S={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"#FFFFFF",color:"#101828",border:"1px solid #D0D5DD"},ghost:{backgroundColor:"transparent",color:"#101828",border:"none"},destructive:{backgroundColor:"#F04438",color:"#FFFFFF",border:"none"}},j=x[a],C=S[i];return r.jsxs("button",{...f,disabled:m,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, system-ui, sans-serif",fontWeight:"600",cursor:m?"not-allowed":"pointer",opacity:m?.4:1,transition:"all 0.15s ease",position:"relative",whiteSpace:"nowrap",...j,...C,...f.style},onMouseEnter:h=>{!m&&i!=="ghost"&&(h.currentTarget.style.filter="brightness(0.94)")},onMouseLeave:h=>{h.currentTarget.style.filter="none"},onMouseDown:h=>{m||(h.currentTarget.style.filter="brightness(0.88)")},onMouseUp:h=>{m||(h.currentTarget.style.filter="brightness(0.94)")},children:[l&&r.jsx(rg,{size:a==="sm"?14:a==="lg"?18:16,style:{animation:"spin 1s linear infinite"}}),p,r.jsx("style",{children:`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `})]})}function mn({type:i,children:a}){const c={success:{backgroundColor:"#ECFDF3",borderColor:"#12B76A",textColor:"#039855",icon:Wh},error:{backgroundColor:"#FEF3F2",borderColor:"#F04438",textColor:"#D92D20",icon:Yh},warning:{backgroundColor:"#FFFAEB",borderColor:"#F79009",textColor:"#DC6803",icon:Uh},info:{backgroundColor:"rgba(79, 70, 229, 0.06)",borderColor:"#4F46E5",textColor:"#4338CA",icon:Kd}}[i],p=c.icon;return r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px 16px",backgroundColor:c.backgroundColor,border:`1px solid ${c.borderColor}`,borderRadius:"10px"},children:[r.jsx(p,{size:20,style:{color:c.textColor,flexShrink:0,marginTop:"2px"}}),r.jsx("div",{style:{flex:1,fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:c.textColor,fontFamily:"Inter, system-ui, sans-serif"},children:a})]})}function Dt(i){typeof window>"u"||(window.location.href=i)}function Fg(){const{login:i}=xn(),[a,l]=_.useState(""),[c,p]=_.useState(""),[f,m]=_.useState({}),[x,S]=_.useState(!1),j=()=>{const h={};return a?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||(h.email="Please enter a valid email address"):h.email="Email is required",c||(h.password="Password is required"),m(h),Object.keys(h).length===0},C=async h=>{if(h.preventDefault(),!!j()){S(!0),m({});try{await i(a,c),Dt("/account")}catch(w){m({general:w instanceof Error?w.message:"Invalid email or password"})}finally{S(!1)}}};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Welcome back"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Sign in to your account to continue"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[f.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(mn,{type:"error",children:f.general})}),r.jsxs("form",{onSubmit:C,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsx(Ie,{id:"email",label:"Email",type:"email",value:a,onChange:h=>l(h.target.value),error:f.email,placeholder:"you@example.com",autoComplete:"email",disabled:x}),r.jsx(Ie,{id:"password",label:"Password",type:"password",value:c,onChange:h=>p(h.target.value),error:f.password,placeholder:"Enter your password",autoComplete:"current-password",showPasswordToggle:!0,disabled:x})]}),r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx("button",{type:"button",onClick:()=>Dt("/account/password-reset"),disabled:x,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:x?"not-allowed":"pointer",textDecoration:"none",opacity:x?.4:1},onMouseEnter:h=>!x&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Forgot password?"})}),r.jsx(dt,{type:"submit",variant:"primary",size:"lg",isLoading:x,style:{width:"100%",marginBottom:"16px"},children:"Sign in"}),r.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Don't have an account?"," ",r.jsx("button",{type:"button",onClick:()=>Dt("/account/register"),disabled:x,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:x?"not-allowed":"pointer",textDecoration:"none",opacity:x?.4:1},onMouseEnter:h=>!x&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Create account"})]})]})]}),r.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"rgba(79, 70, 229, 0.06)",border:"1px solid #4F46E5",borderRadius:"12px",textAlign:"center"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Demo: Use any email and password to sign in"})})]})})}function _g(){const{register:i}=xn(),[a,l]=_.useState({firstName:"",lastName:"",email:"",phone:"",password:""}),[c,p]=_.useState({}),[f,m]=_.useState(!1),x=()=>{const C={};return a.firstName.trim()||(C.firstName="First name is required"),a.lastName.trim()||(C.lastName="Last name is required"),a.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)||(C.email="Please enter a valid email address"):C.email="Email is required",a.phone&&!/^[\d\s\-\+\(\)]+$/.test(a.phone)&&(C.phone="Please enter a valid phone number"),a.password?a.password.length<8&&(C.password="Password must be at least 8 characters"):C.password="Password is required",p(C),Object.keys(C).length===0},S=async C=>{if(C.preventDefault(),!!x()){m(!0),p({});try{await i(a),Dt("/account")}catch(h){p({general:h instanceof Error?h.message:"Registration failed"})}finally{m(!1)}}},j=(C,h)=>{l(w=>({...w,[C]:h})),c[C]&&p(w=>({...w,[C]:""}))};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"540px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Create your account"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Join us to start shopping and manage your orders"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[c.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(mn,{type:"error",children:c.general})}),r.jsxs("form",{onSubmit:S,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Ie,{id:"firstName",label:"First name",type:"text",value:a.firstName,onChange:C=>j("firstName",C.target.value),error:c.firstName,placeholder:"Sarah",autoComplete:"given-name",disabled:f}),r.jsx(Ie,{id:"lastName",label:"Last name",type:"text",value:a.lastName,onChange:C=>j("lastName",C.target.value),error:c.lastName,placeholder:"Chen",autoComplete:"family-name",disabled:f})]}),r.jsx(Ie,{id:"email",label:"Email",type:"email",value:a.email,onChange:C=>j("email",C.target.value),error:c.email,placeholder:"you@example.com",autoComplete:"email",disabled:f}),r.jsx(Ie,{id:"phone",label:"Phone (optional)",type:"tel",value:a.phone,onChange:C=>j("phone",C.target.value),error:c.phone,placeholder:"+1 (555) 123-4567",autoComplete:"tel",disabled:f}),r.jsx(Ie,{id:"password",label:"Password",type:"password",value:a.password,onChange:C=>j("password",C.target.value),error:c.password,helperText:c.password?void 0:"Must be at least 8 characters",placeholder:"Create a password",autoComplete:"new-password",showPasswordToggle:!0,disabled:f})]}),r.jsx(dt,{type:"submit",variant:"primary",size:"lg",isLoading:f,style:{width:"100%",marginBottom:"16px"},children:"Create account"}),r.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Already have an account?"," ",r.jsx("button",{type:"button",onClick:()=>Dt("/account/login"),disabled:f,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:f?"not-allowed":"pointer",textDecoration:"none",opacity:f?.4:1},onMouseEnter:C=>!f&&(C.currentTarget.style.textDecoration="underline"),onMouseLeave:C=>C.currentTarget.style.textDecoration="none",children:"Sign in"})]})]})]})]})})}function Rg(){const{requestPasswordReset:i}=xn(),[a,l]=_.useState(""),[c,p]=_.useState(""),[f,m]=_.useState(!1),[x,S]=_.useState(!1),j=h=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h),C=async h=>{if(h.preventDefault(),!a){p("Email is required");return}if(!j(a)){p("Please enter a valid email address");return}m(!0),p("");try{await i(a),S(!0)}catch(w){p(w instanceof Error?w.message:"Failed to send reset link. Please try again.")}finally{m(!1)}};return x?r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"#ECFDF3",borderRadius:"16px",marginBottom:"16px"},children:r.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#12B76A",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Check your email"}),r.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["We've sent a password reset link to",r.jsx("br",{}),r.jsx("strong",{style:{color:"#344054"},children:a})]})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)",marginBottom:"16px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:"Click the link in the email to reset your password. If you don't see the email, check your spam folder."}),r.jsx(dt,{variant:"primary",size:"lg",onClick:()=>Dt("/account/login"),style:{width:"100%"},children:"Return to sign in"})]}),r.jsx("button",{onClick:()=>{S(!1),l("")},style:{display:"block",width:"100%",background:"none",border:"none",padding:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"center"},onMouseEnter:h=>h.currentTarget.style.textDecoration="underline",onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Didn't receive the email? Try again"})]})}):r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("button",{onClick:()=>Dt("/account/login"),disabled:f,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:f?"not-allowed":"pointer",opacity:f?.4:1},onMouseEnter:h=>!f&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:[r.jsx(Qd,{size:16}),"Back to sign in"]}),r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Reset your password"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Enter your email and we'll send you a reset link"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[c&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(mn,{type:"error",children:c})}),r.jsxs("form",{onSubmit:C,children:[r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(Ie,{id:"email",label:"Email",type:"email",value:a,onChange:h=>{l(h.target.value),p("")},error:c&&!a?c:"",placeholder:"you@example.com",autoComplete:"email",disabled:f})}),r.jsx(dt,{type:"submit",variant:"primary",size:"lg",isLoading:f,style:{width:"100%"},children:"Send reset link"})]})]})]})})}function Ng(){if(typeof window>"u")return null;const i=window.location.pathname.match(/^\/account\/reset\/([^/]+)\/([^/]+)\/?$/);return i?{id:decodeURIComponent(i[1]),token:decodeURIComponent(i[2])}:null}function zg({id:i,token:a}){return`${"https://thevibestation.com".replace(/\/+$/,"")}/account/reset/${encodeURIComponent(i)}/${encodeURIComponent(a)}`}function xd(){const{resetPassword:i}=xn(),a=Ng(),[l,c]=_.useState(""),[p,f]=_.useState(""),[m,x]=_.useState({}),[S,j]=_.useState(!1),C=()=>{const w={};return l?l.length<5&&(w.password="Password must be at least 5 characters"):w.password="Password is required",p?l!==p&&(w.confirmPassword="Passwords do not match"):w.confirmPassword="Please confirm your password",x(w),Object.keys(w).length===0},h=async w=>{if(w.preventDefault(),!a){x({general:"This password setup link is invalid. Please request a new one."});return}if(C()){j(!0),x({});try{await i(zg(a),l),Dt("/account")}catch(T){const R=T.code;x(R==="CUSTOMER_RESET_TOKEN_INVALID"||R==="TOKEN_EXPIRED"?{general:"expired"}:{general:T instanceof Error?T.message:"Failed to set your password. Please try again."})}finally{j(!1)}}};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("button",{onClick:()=>Dt("/account/login"),disabled:S,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:S?"not-allowed":"pointer",opacity:S?.4:1},onMouseEnter:w=>!S&&(w.currentTarget.style.textDecoration="underline"),onMouseLeave:w=>w.currentTarget.style.textDecoration="none",children:[r.jsx(Qd,{size:16}),"Back to sign in"]}),r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Set new password"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Create a password to activate your account or regain access."})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[m.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(mn,{type:"error",children:m.general==="expired"?r.jsxs(r.Fragment,{children:["This link has expired. Please request a new one."," ",r.jsx("button",{type:"button",onClick:()=>Dt("/account/forgot-password"),style:{background:"none",border:"none",padding:0,color:"#D92D20",font:"inherit",fontWeight:600,textDecoration:"underline",cursor:"pointer"},children:"Request a new link"}),"."]}):m.general})}),r.jsxs("form",{onSubmit:h,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsx(Ie,{id:"password",label:"New password",type:"password",value:l,onChange:w=>{c(w.target.value),(m.password||m.general)&&x(T=>({...T,password:"",general:""}))},error:m.password,helperText:m.password?void 0:"Must be at least 5 characters",placeholder:"Enter new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:S}),r.jsx(Ie,{id:"confirmPassword",label:"Confirm password",type:"password",value:p,onChange:w=>{f(w.target.value),(m.confirmPassword||m.general)&&x(T=>({...T,confirmPassword:"",general:""}))},error:m.confirmPassword,placeholder:"Confirm new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:S})]}),r.jsx(dt,{type:"submit",variant:"primary",size:"lg",isLoading:S,style:{width:"100%"},children:"Set Password"})]})]})]})})}function yd({activeSection:i,onSectionChange:a,onLogout:l,isMobile:c=!1}){const p=[{id:"overview",label:"Overview",icon:Jd},{id:"orders",label:"Orders",icon:Uo},{id:"addresses",label:"Addresses",icon:Sl}];return c?r.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto",padding:"16px",backgroundColor:"#FFFFFF",borderBottom:"1px solid #EAECF0"},children:p.map(f=>{const m=f.icon,x=i===f.id;return r.jsxs("button",{onClick:()=>a(f.id),style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",backgroundColor:x?"#F9FAFB":"transparent",border:`1px solid ${x?"#D0D5DD":"transparent"}`,borderRadius:"10px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:x?"#101828":"#667085",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s"},children:[r.jsx(m,{size:16}),f.label]},f.id)})}):r.jsxs("nav",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"8px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[p.map(f=>{const m=f.icon,x=i===f.id;return r.jsxs("button",{onClick:()=>a(f.id),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:x?"#F9FAFB":"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:x?"600":"400",color:x?"#101828":"#667085",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:S=>{x||(S.currentTarget.style.backgroundColor="#FCFCFD")},onMouseLeave:S=>{x||(S.currentTarget.style.backgroundColor="transparent")},children:[r.jsx(m,{size:20}),f.label]},f.id)}),r.jsx("div",{style:{height:"1px",backgroundColor:"#EAECF0",margin:"8px 0"}}),r.jsxs("button",{onClick:l,style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="#FEF3F2"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="transparent"},children:[r.jsx(ig,{size:20}),"Sign out"]})]})}function Ag({customer:i}){const{updateProfile:a}=xn(),[l,c]=_.useState(!1),[p,f]=_.useState({firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone||""}),[m,x]=_.useState(!1),[S,j]=_.useState(""),[C,h]=_.useState(""),w=async()=>{x(!0),j(""),h("");try{await a(p),j("Profile updated successfully"),c(!1),setTimeout(()=>j(""),3e3)}catch{h("Failed to update profile")}finally{x(!1)}},T=()=>{f({firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone||""}),c(!1),h("")};return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Profile Information"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your personal information and contact details"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"24px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[S&&r.jsx("div",{style:{marginBottom:"20px"},children:r.jsx(mn,{type:"success",children:S})}),C&&r.jsx("div",{style:{marginBottom:"20px"},children:r.jsx(mn,{type:"error",children:C})}),l?r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Ie,{id:"firstName",label:"First name",type:"text",value:p.firstName,onChange:R=>f(M=>({...M,firstName:R.target.value})),disabled:m}),r.jsx(Ie,{id:"lastName",label:"Last name",type:"text",value:p.lastName,onChange:R=>f(M=>({...M,lastName:R.target.value})),disabled:m})]}),r.jsx(Ie,{id:"email",label:"Email",type:"email",value:p.email,onChange:R=>f(M=>({...M,email:R.target.value})),disabled:m}),r.jsx(Ie,{id:"phone",label:"Phone (optional)",type:"tel",value:p.phone,onChange:R=>f(M=>({...M,phone:R.target.value})),disabled:m})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[r.jsx(dt,{variant:"secondary",size:"md",onClick:T,disabled:m,children:"Cancel"}),r.jsx(dt,{variant:"primary",size:"md",onClick:w,isLoading:m,children:"Save changes"})]})]}):r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"#F9FAFB",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Jd,{size:28,style:{color:"#667085"}})}),r.jsxs("div",{children:[r.jsxs("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:[i.firstName," ",i.lastName]}),r.jsxs("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Member since ",new Date(i.createdAt).toLocaleDateString("en-US",{month:"long",year:"numeric"})]})]})]}),r.jsxs(dt,{variant:"secondary",size:"sm",onClick:()=>c(!0),children:[r.jsx(mg,{size:14}),"Edit"]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(ag,{size:20,style:{color:"#667085",flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Email"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i.email})]})]}),i.phone&&r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(gg,{size:20,style:{color:"#667085",flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Phone"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i.phone})]})]})]})]})]})]})}function Pg({order:i,onClick:a}){const l=f=>new Date(f).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),p=(f=>{switch(f){case"FULFILLED":return{bg:"#ECFDF3",border:"#12B76A",text:"#039855",label:"Fulfilled"};case"UNFULFILLED":return{bg:"#FFFAEB",border:"#F79009",text:"#DC6803",label:"Unfulfilled"};case"PARTIALLY_FULFILLED":return{bg:"rgba(79, 70, 229, 0.06)",border:"#4F46E5",text:"#4338CA",label:"Partially fulfilled"};case"CANCELLED":return{bg:"#FEF3F2",border:"#F04438",text:"#D92D20",label:"Cancelled"};default:return{bg:"#F9FAFB",border:"#D0D5DD",text:"#667085",label:f}}})(i.fulfillmentStatus);return r.jsx("button",{onClick:()=>a(i.id),style:{width:"100%",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"20px",cursor:"pointer",textAlign:"left",transition:"all 0.15s",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},onMouseEnter:f=>{f.currentTarget.style.boxShadow="0 4px 10px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.08)",f.currentTarget.style.borderColor="#D0D5DD"},onMouseLeave:f=>{f.currentTarget.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)",f.currentTarget.style.borderColor="#EAECF0"},children:r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[r.jsx("div",{style:{flexShrink:0,width:"48px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F9FAFB",borderRadius:"10px"},children:r.jsx(Uo,{size:24,style:{color:"#667085"}})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px",flexWrap:"wrap"},children:[r.jsxs("h3",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:["Order #",i.orderNumber]}),r.jsx("div",{style:{display:"inline-flex",alignItems:"center",padding:"2px 8px",backgroundColor:p.bg,border:`1px solid ${p.border}`,borderRadius:"6px"},children:r.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:p.text,fontFamily:"Inter, system-ui, sans-serif"},children:p.label})})]}),r.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"12px"},children:["Placed on ",l(i.createdAt)," • ",i.lineItems.length," item",i.lineItems.length!==1?"s":""]}),r.jsx("div",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i.totalPrice})]}),r.jsx("div",{style:{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#98A2B3"},children:r.jsx(Bh,{size:20})})]})})}function Zd({icon:i,title:a,description:l,action:c}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"64px 24px",textAlign:"center"},children:[r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"#F9FAFB",color:"#667085",marginBottom:"16px"},children:i}),r.jsx("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:a}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:c?"24px":"0",maxWidth:"400px"},children:l}),c&&r.jsx("div",{children:c})]})}function Lg(){const{orders:i,hasMore:a,isLoading:l,isLoadingMore:c,error:p,loadMore:f}=Fh(),m=x=>{console.log("View order:",x)};return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Order History"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"View and track your orders"})]}),p&&r.jsx("div",{style:{marginBottom:"16px"},children:r.jsx(mn,{type:"error",children:p})}),l?r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading orders..."})}):i.length>0?r.jsxs("div",{children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:a?"24px":"0"},children:i.map(x=>r.jsx(Pg,{order:x,onClick:m},x.id))}),a&&r.jsx("div",{style:{textAlign:"center"},children:r.jsx(dt,{variant:"secondary",size:"md",onClick:()=>void f(),isLoading:c,children:"Load more orders"})})]}):r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx(Zd,{icon:r.jsx(Uo,{size:32}),title:"No orders yet",description:"When you place an order, it will appear here so you can track its status.",action:r.jsx(dt,{variant:"primary",size:"md",children:"Start shopping"})})})]})}function Dg({address:i,onEdit:a,onDelete:l,onSetDefault:c}){const[p,f]=_.useState(!1);return r.jsxs("div",{style:{position:"relative",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"20px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[i.isDefault&&r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 8px",backgroundColor:"#ECFDF3",border:"1px solid #12B76A",borderRadius:"6px",marginBottom:"12px"},children:[r.jsx(Yd,{size:12,style:{color:"#039855"}}),r.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#039855",fontFamily:"Inter, system-ui, sans-serif"},children:"Default"})]}),r.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px"},children:[r.jsx("button",{onClick:()=>f(!p),style:{background:"none",border:"none",padding:"4px",cursor:"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:r.jsx(Xh,{size:20})}),p&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10},onClick:()=>f(!1)}),r.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:"4px",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"10px",boxShadow:"0 4px 10px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.08)",padding:"4px",minWidth:"160px",zIndex:20},children:[r.jsx("button",{onClick:()=>{f(!1),a(i)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#344054",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Edit address"}),!i.isDefault&&r.jsx("button",{onClick:()=>{f(!1),c(i.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#344054",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Set as default"}),r.jsx("div",{style:{height:"1px",backgroundColor:"#EAECF0",margin:"4px 0"}}),r.jsx("button",{onClick:()=>{f(!1),l(i.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#FEF3F2"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Delete address"})]})]})]}),r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx("div",{style:{flexShrink:0,width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F9FAFB",borderRadius:"8px"},children:r.jsx(Sl,{size:20,style:{color:"#667085"}})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:[i.firstName," ",i.lastName]}),r.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:[i.company&&r.jsx("div",{children:i.company}),r.jsx("div",{children:i.address1}),i.address2&&r.jsx("div",{children:i.address2}),r.jsxs("div",{children:[i.city,", ",i.province," ",i.zip]}),r.jsx("div",{children:i.country}),i.phone&&r.jsx("div",{style:{marginTop:"8px"},children:i.phone})]})]})]})]})}function vd({address:i,onClose:a,onSave:l}){const[c,p]=_.useState({firstName:(i==null?void 0:i.firstName)||"",lastName:(i==null?void 0:i.lastName)||"",company:(i==null?void 0:i.company)||"",address1:(i==null?void 0:i.address1)||"",address2:(i==null?void 0:i.address2)||"",city:(i==null?void 0:i.city)||"",province:(i==null?void 0:i.province)||"",zip:(i==null?void 0:i.zip)||"",country:(i==null?void 0:i.country)||"United States",phone:(i==null?void 0:i.phone)||""}),[f,m]=_.useState({}),[x,S]=_.useState(!1),j=()=>{const w={};return c.firstName.trim()||(w.firstName="First name is required"),c.lastName.trim()||(w.lastName="Last name is required"),c.address1.trim()||(w.address1="Address is required"),c.city.trim()||(w.city="City is required"),c.province.trim()||(w.province="State/Province is required"),c.zip.trim()||(w.zip="ZIP/Postal code is required"),c.country.trim()||(w.country="Country is required"),m(w),Object.keys(w).length===0},C=async w=>{if(w.preventDefault(),!!j()){S(!0);try{await new Promise(T=>setTimeout(T,500)),l(i?{...i,...c}:c)}catch(T){console.error("Failed to save address:",T)}finally{S(!1)}}},h=(w,T)=>{p(R=>({...R,[w]:T})),f[w]&&m(R=>({...R,[w]:""}))};return r.jsx(r.Fragment,{children:r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.40)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50,overflow:"auto"},onClick:a,children:r.jsxs("div",{style:{backgroundColor:"#FFFFFF",borderRadius:"16px",width:"100%",maxWidth:"600px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 12px 24px -4px rgba(16, 24, 40, 0.06), 0 6px 12px -4px rgba(16, 24, 40, 0.08)"},onClick:w=>w.stopPropagation(),children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid #EAECF0"},children:[r.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i?"Edit address":"Add new address"}),r.jsx("button",{onClick:a,disabled:x,style:{background:"none",border:"none",padding:"4px",cursor:x?"not-allowed":"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",opacity:x?.4:1},children:r.jsx(jl,{size:20})})]}),r.jsxs("form",{onSubmit:C,children:[r.jsx("div",{style:{padding:"24px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Ie,{id:"firstName",label:"First name",value:c.firstName,onChange:w=>h("firstName",w.target.value),error:f.firstName,disabled:x}),r.jsx(Ie,{id:"lastName",label:"Last name",value:c.lastName,onChange:w=>h("lastName",w.target.value),error:f.lastName,disabled:x})]}),r.jsx(Ie,{id:"company",label:"Company (optional)",value:c.company,onChange:w=>h("company",w.target.value),disabled:x}),r.jsx(Ie,{id:"address1",label:"Address",value:c.address1,onChange:w=>h("address1",w.target.value),error:f.address1,placeholder:"123 Main Street",disabled:x}),r.jsx(Ie,{id:"address2",label:"Apartment, suite, etc. (optional)",value:c.address2,onChange:w=>h("address2",w.target.value),placeholder:"Apt 4B",disabled:x}),r.jsx(Ie,{id:"city",label:"City",value:c.city,onChange:w=>h("city",w.target.value),error:f.city,disabled:x}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Ie,{id:"province",label:"State / Province",value:c.province,onChange:w=>h("province",w.target.value),error:f.province,placeholder:"CA",disabled:x}),r.jsx(Ie,{id:"zip",label:"ZIP / Postal code",value:c.zip,onChange:w=>h("zip",w.target.value),error:f.zip,placeholder:"94103",disabled:x})]}),r.jsx(Ie,{id:"country",label:"Country",value:c.country,onChange:w=>h("country",w.target.value),error:f.country,disabled:x}),r.jsx(Ie,{id:"phone",label:"Phone (optional)",type:"tel",value:c.phone,onChange:w=>h("phone",w.target.value),placeholder:"+1 (555) 123-4567",disabled:x})]})}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",padding:"24px",borderTop:"1px solid #EAECF0"},children:[r.jsx(dt,{type:"button",variant:"secondary",size:"md",onClick:a,disabled:x,children:"Cancel"}),r.jsx(dt,{type:"submit",variant:"primary",size:"md",isLoading:x,children:i?"Save changes":"Add address"})]})]})]})})})}function Mg({title:i,description:a,onConfirm:l,onCancel:c}){return r.jsx(r.Fragment,{children:r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.40)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50},onClick:c,children:r.jsx("div",{style:{backgroundColor:"#FFFFFF",borderRadius:"16px",width:"100%",maxWidth:"440px",boxShadow:"0 12px 24px -4px rgba(16, 24, 40, 0.06), 0 6px 12px -4px rgba(16, 24, 40, 0.08)"},onClick:p=>p.stopPropagation(),children:r.jsxs("div",{style:{padding:"24px"},children:[r.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",backgroundColor:"#FEF3F2",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:r.jsx(bg,{size:24,style:{color:"#F04438"}})}),r.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:i}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:a}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[r.jsx(dt,{variant:"secondary",size:"md",onClick:c,children:"Cancel"}),r.jsx(dt,{variant:"destructive",size:"md",onClick:l,children:"Delete"})]})]})})})})}function Og(){const{addresses:i,isLoading:a,isSaving:l,error:c,createAddress:p,editAddress:f,removeAddress:m,makeDefaultAddress:x}=Th(),[S,j]=_.useState(!1),[C,h]=_.useState(null),[w,T]=_.useState(null),R=async re=>{await p(re),j(!1)},M=re=>{h(re)},A=async re=>{await f(re),h(null)},U=re=>{T(re)},K=async()=>{w&&(await m(w),T(null))},te=async re=>{await x(re)};return r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px",flexWrap:"wrap",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Saved Addresses"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your shipping and billing addresses"})]}),i.length>0&&r.jsxs(dt,{variant:"primary",size:"md",onClick:()=>j(!0),children:[r.jsx(gd,{size:16}),"Add address"]})]}),c&&r.jsx("div",{style:{marginBottom:"16px"},children:r.jsx(mn,{type:"error",children:c})}),a?r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading addresses..."})}):i.length>0?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"16px"},children:i.map(re=>r.jsx(Dg,{address:re,onEdit:M,onDelete:U,onSetDefault:te},re.id))}):r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx(Zd,{icon:r.jsx(Sl,{size:32}),title:"No addresses saved",description:"Add a shipping address to make checkout faster and easier.",action:r.jsxs(dt,{variant:"primary",size:"md",onClick:()=>j(!0),children:[r.jsx(gd,{size:16}),"Add address"]})})}),S&&r.jsx(vd,{onClose:()=>j(!1),onSave:R}),C&&r.jsx(vd,{address:C,onClose:()=>h(null),onSave:A}),w&&r.jsx(Mg,{title:"Delete address",description:"Are you sure you want to delete this address? This action cannot be undone.",onConfirm:()=>void K(),onCancel:()=>T(null)}),l&&r.jsx("div",{style:{marginTop:"16px"},children:r.jsx(mn,{type:"info",children:"Saving address changes..."})})]})}function Bg(){const{customer:i,isAuthenticated:a,logout:l,isLoading:c}=xn(),[p,f]=_.useState("overview"),[m,x]=_.useState(window.innerWidth<768);_.useEffect(()=>{!c&&!a&&Dt("/account/login")},[a,c]),_.useEffect(()=>{const j=()=>{x(window.innerWidth<768)};return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]);const S=()=>{l(),Dt("/account/login")};return c||!i?r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 16px",border:"3px solid #F9FAFB",borderTopColor:"#4338CA",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),r.jsx("style",{children:`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `})]})}):r.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD"},children:[r.jsx("div",{style:{backgroundColor:"#FFFFFF",borderBottom:"1px solid #EAECF0"},children:r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"32px 48px"},children:[r.jsx("h1",{style:{fontSize:m?"22px":"28px",lineHeight:m?"30px":"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:"My Account"}),r.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Welcome back, ",i.firstName]})]})}),m&&r.jsx(yd,{activeSection:p,onSectionChange:f,onLogout:S,isMobile:!0}),r.jsx("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"48px 48px"},children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:m?"1fr":"240px 1fr",gap:m?"0":"32px"},children:[!m&&r.jsx("div",{children:r.jsx(yd,{activeSection:p,onSectionChange:f,onLogout:S})}),r.jsxs("div",{children:[p==="overview"&&r.jsx(Ag,{customer:i}),p==="orders"&&r.jsx(Lg,{}),p==="addresses"&&r.jsx(Og,{})]})]})})]})}function $g(){return _.useCallback((i=[])=>Vm(i),[])}function Ug(){return _.useCallback((i,a)=>qm(i,a),[])}function Hg(){return _.useCallback((i,a)=>Qm(i,a),[])}function Wg(){return _.useCallback((i,a)=>Ym(i,a),[])}const ep=_.createContext(null),Vg="IN".toUpperCase(),qg=i=>i.lines.edges.map(a=>{var c,p,f,m,x;const l=a.node;return{id:l.id,name:l.merchandise.product.title,variant:((c=l.merchandise.selectedOptions)==null?void 0:c.map(S=>`${S.name}: ${S.value}`).join(", "))||l.merchandise.title,price:Number.parseFloat(l.merchandise.price.amount),quantity:l.quantity,variantId:l.merchandise.id,imageUrl:((p=l.merchandise.image)==null?void 0:p.url)||((f=l.merchandise.product.featuredImage)==null?void 0:f.url),imageAlt:((m=l.merchandise.image)==null?void 0:m.altText)||((x=l.merchandise.product.featuredImage)==null?void 0:x.altText)||l.merchandise.product.title}});function Qg({children:i}){const[a,l]=_.useState([]),[c,p]=_.useState(!1),[f,m]=_.useState(null),[x,S]=_.useState(null),j=$g(),C=Ug(),h=Hg(),w=Wg(),T=_.useCallback(U=>{l(qg(U)),m(U.id),S(U.checkoutUrl),Jm(U.id)},[]);_.useEffect(()=>{let U=!1;return(async()=>{try{const te=Gm();if(te){const ee=await Km(te);if(ee&&!U){T(ee);return}}const re=await j();U||T(re)}catch(te){U||console.error("Failed to initialize Shopify cart",te)}})(),()=>{U=!0}},[j,T]);const R=_.useMemo(()=>a.reduce((U,K)=>U+K.quantity,0),[a]),M=_.useMemo(()=>a.reduce((U,K)=>U+K.price*K.quantity,0),[a]),A={items:a,isDrawerOpen:c,cartCount:R,subtotal:M,total:M,checkoutUrl:x,addItem:async U=>{try{let K=f;if(!K){const ee=await j();T(ee),K=ee.id}const te=a.find(ee=>ee.variantId===U),re=te?await h(K,[{id:te.id,quantity:te.quantity+1}]):await C(K,[{merchandiseId:U,quantity:1}]);return T(re),p(!0),!0}catch(K){return console.error("Failed to add item to cart",K),!1}},checkout:async()=>{try{let U=f,K=x;if(!U){const re=await j();T(re),U=re.id,K=re.checkoutUrl}const te=await Xm(U,{countryCode:Vg});T(te),window.location.href=te.checkoutUrl}catch(U){console.error("Failed to update buyer identity before checkout",U),window.location.href=latestCheckoutUrl||"/cart"}},openCartDrawer:()=>p(!0),closeCartDrawer:()=>p(!1),toggleCartDrawer:()=>p(U=>!U),incrementItem:U=>{if(!f)return;const K=a.find(te=>te.id===U);K&&h(f,[{id:K.id,quantity:K.quantity+1}]).then(T).catch(te=>{console.error("Failed to increment cart line",te)})},decrementItem:U=>{if(!f)return;const K=a.find(te=>te.id===U);if(K){if(K.quantity<=1){w(f,[K.id]).then(T).catch(te=>{console.error("Failed to decrement cart line",te)});return}h(f,[{id:K.id,quantity:K.quantity-1}]).then(T).catch(te=>{console.error("Failed to decrement cart line",te)})}},removeItem:U=>{f&&w(f,[U]).then(T).catch(K=>{console.error("Failed to remove cart line",K)})}};return r.jsx(ep.Provider,{value:A,children:i})}function Vn(){const i=_.useContext(ep);if(!i)throw new Error("useCart must be used within a CartProvider.");return i}function Bo(i){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(i)}var Yg=(i,a,l,c,p,f,m,x)=>{let S=document.documentElement,j=["light","dark"];function C(T){(Array.isArray(i)?i:[i]).forEach(R=>{let M=R==="class",A=M&&f?p.map(U=>f[U]||U):p;M?(S.classList.remove(...A),S.classList.add(f&&f[T]?f[T]:T)):S.setAttribute(R,T)}),h(T)}function h(T){x&&j.includes(T)&&(S.style.colorScheme=T)}function w(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(c)C(c);else try{let T=localStorage.getItem(a)||l,R=m&&T==="system"?w():T;C(R)}catch{}},wd=["light","dark"],tp="(prefers-color-scheme: dark)",Kg=typeof window>"u",bl=_.createContext(void 0),Xg={setTheme:i=>{},themes:[]},Cl=()=>{var i;return(i=_.useContext(bl))!=null?i:Xg},Gg=i=>_.useContext(bl)?_.createElement(_.Fragment,null,i.children):_.createElement(Zg,{...i}),Jg=["light","dark"],Zg=({forcedTheme:i,disableTransitionOnChange:a=!1,enableSystem:l=!0,enableColorScheme:c=!0,storageKey:p="theme",themes:f=Jg,defaultTheme:m=l?"system":"light",attribute:x="data-theme",value:S,children:j,nonce:C,scriptProps:h})=>{let[w,T]=_.useState(()=>tx(p,m)),[R,M]=_.useState(()=>w==="system"?rl():w),A=S?Object.values(S):f,U=_.useCallback(ee=>{let ae=ee;if(!ae)return;ee==="system"&&l&&(ae=rl());let ve=S?S[ae]:ae,Te=a?nx(C):null,Le=document.documentElement,Be=we=>{we==="class"?(Le.classList.remove(...A),ve&&Le.classList.add(ve)):we.startsWith("data-")&&(ve?Le.setAttribute(we,ve):Le.removeAttribute(we))};if(Array.isArray(x)?x.forEach(Be):Be(x),c){let we=wd.includes(m)?m:null,Ne=wd.includes(ae)?ae:we;Le.style.colorScheme=Ne}Te==null||Te()},[C]),K=_.useCallback(ee=>{let ae=typeof ee=="function"?ee(w):ee;T(ae);try{localStorage.setItem(p,ae)}catch{}},[w]),te=_.useCallback(ee=>{let ae=rl(ee);M(ae),w==="system"&&l&&!i&&U("system")},[w,i]);_.useEffect(()=>{let ee=window.matchMedia(tp);return ee.addListener(te),te(ee),()=>ee.removeListener(te)},[te]),_.useEffect(()=>{let ee=ae=>{ae.key===p&&(ae.newValue?T(ae.newValue):K(m))};return window.addEventListener("storage",ee),()=>window.removeEventListener("storage",ee)},[K]),_.useEffect(()=>{U(i??w)},[i,w]);let re=_.useMemo(()=>({theme:w,setTheme:K,forcedTheme:i,resolvedTheme:w==="system"?R:w,themes:l?[...f,"system"]:f,systemTheme:l?R:void 0}),[w,K,i,R,l,f]);return _.createElement(bl.Provider,{value:re},_.createElement(ex,{forcedTheme:i,storageKey:p,attribute:x,enableSystem:l,enableColorScheme:c,defaultTheme:m,value:S,themes:f,nonce:C,scriptProps:h}),j)},ex=_.memo(({forcedTheme:i,storageKey:a,attribute:l,enableSystem:c,enableColorScheme:p,defaultTheme:f,value:m,themes:x,nonce:S,scriptProps:j})=>{let C=JSON.stringify([l,a,f,i,x,m,c,p]).slice(1,-1);return _.createElement("script",{...j,suppressHydrationWarning:!0,nonce:typeof window>"u"?S:"",dangerouslySetInnerHTML:{__html:`(${Yg.toString()})(${C})`}})}),tx=(i,a)=>{if(Kg)return;let l;try{l=localStorage.getItem(i)||void 0}catch{}return l||a},nx=i=>{let a=document.createElement("style");return i&&a.setAttribute("nonce",i),a.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},rl=i=>(i||(i=window.matchMedia(tp)),i.matches?"dark":"light");function rx(){const{customer:i,isAuthenticated:a}=xn(),{resolvedTheme:l,setTheme:c}=Cl(),p=l==="dark",[f,m]=_.useState(!1),x=a?(i==null?void 0:i.firstName)||"Account":"Sign in",S=a?"/account":"/account/login";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("header",{className:"header-container",children:[r.jsx(he,{children:r.jsxs("div",{className:"header-inner",children:[r.jsx(ox,{isDark:p}),r.jsx(ix,{}),r.jsx(sx,{accountHref:S,accountLabel:x,isDark:p,onToggleTheme:()=>c(p?"light":"dark")}),r.jsx("button",{className:"header-mobile-menu-btn",onClick:()=>m(!f),"aria-label":"Toggle mobile menu",children:f?r.jsx(jl,{size:20}):r.jsx(cg,{size:20})})]})}),r.jsxs("div",{className:`header-mobile-menu${f?" open":""}`,children:[r.jsxs("nav",{className:"header-mobile-nav",children:[r.jsx("a",{href:"/products",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Products"}),r.jsx("a",{href:"/philosophy",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Philosophy"}),r.jsx("a",{href:"/community",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Community"})]}),r.jsxs("div",{className:"header-mobile-actions",children:[r.jsx("a",{href:S,className:"header-mobile-account-btn",onClick:()=>m(!1),style:{textDecoration:"none"},children:x}),r.jsxs("button",{className:"header-mobile-account-btn",onClick:()=>c(p?"light":"dark"),children:[p?r.jsx(Gd,{size:20,style:{marginRight:"8px"}}):r.jsx(Xd,{size:20,style:{marginRight:"8px"}}),p?"Light Mode":"Dark Mode"]})]})]})]})]})}function ox({isDark:i}){return r.jsx(ax,{isDark:i})}function ix(){return r.jsx(ux,{})}function sx({accountHref:i,accountLabel:a,isDark:l,onToggleTheme:c}){return r.jsxs("div",{className:"header-right",children:[r.jsx(lx,{isDark:l,onToggleTheme:c}),r.jsx(cx,{href:i,label:a}),r.jsx(dx,{})]})}function ax({isDark:i}){return r.jsx(Nd,{size:32,variant:i?"light":"dark",showText:!0,href:"/"})}function lx({isDark:i,onToggleTheme:a}){return r.jsxs("button",{"aria-label":`Switch to ${i?"light":"dark"} mode`,onClick:a,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[i?r.jsx(Gd,{size:16}):r.jsx(Xd,{size:16}),r.jsx("span",{className:"theme-toggle-text",children:i?"Light":"Dark"})]})}function ux(){return r.jsxs("nav",{className:"header-nav",children:[r.jsx("a",{href:"/products",className:"header-nav-link",children:"Products"}),r.jsx("a",{href:"/philosophy",className:"header-nav-link",children:"Philosophy"}),r.jsx("a",{href:"/community",className:"header-nav-link",children:"Community"})]})}function cx({href:i,label:a}){return r.jsx("a",{href:i,className:"header-account-btn",style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer",textDecoration:"none"},children:a})}function dx(){const{cartCount:i,openCartDrawer:a}=Vn(),l=()=>{(window.location.pathname.replace(/\/+$/,"")||"/")!=="/cart"&&a()};return r.jsxs("div",{style:{position:"relative",display:"inline-flex"},children:[r.jsx(We,{label:"Cart",variant:"ghost",size:"sm",onClick:l}),r.jsx("div",{style:{position:"absolute",top:"-6px",right:"-8px",pointerEvents:"none",opacity:.78},children:r.jsx(it,{label:String(i),variant:"accent",size:"sm"})})]})}function Se({children:i,direction:a="vertical",gap:l=16,align:c="stretch",justify:p="flex-start",style:f,responsiveDirection:m,responsiveGap:x}){const S=a==="horizontal"?"row":"column",j=typeof l=="number"?`${l}px`:l,C=m||x,h=C?`stack-${Math.random().toString(36).substr(2,9)}`:"";return r.jsxs(r.Fragment,{children:[C&&r.jsx("style",{children:`
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
        `}),r.jsx("div",{className:C?h:void 0,style:C?f:{display:"flex",flexDirection:S,gap:j,alignItems:c,justifyContent:p,...f},children:i})]})}function px(){const{resolvedTheme:i}=Cl(),a=i==="dark";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("footer",{className:"footer-container",children:r.jsx(he,{children:r.jsxs(Se,{gap:"24px",children:[r.jsxs("div",{className:"footer-top",children:[r.jsx(fx,{}),r.jsx(mx,{})]}),r.jsxs("div",{className:"footer-bottom",children:[r.jsx(hx,{isDark:a}),r.jsx(gx,{})]})]})})})]})}function fx(){return r.jsxs(Se,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Explore"}),r.jsxs(Se,{gap:"10px",children:[r.jsx("a",{href:"#products",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Products"}),r.jsx("a",{href:"#philosophy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Philosophy"}),r.jsx("a",{href:"#community",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Community"}),r.jsx("a",{href:"/privacy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Privacy Policy"})]})]})}function mx(){return r.jsxs(Se,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Standards"}),r.jsxs(Se,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Curated for durability"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Reliable support"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Clear policies"})]})]})}function hx({isDark:i}){return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx(Nd,{size:24,variant:i?"light":"dark",showText:!1,href:"/"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:"© VIBE STATION"})]})}function gx(){return r.jsxs("div",{className:"footer-social",children:[r.jsx("button",{className:"footer-social-btn",children:"Instagram"}),r.jsx("button",{className:"footer-social-btn",children:"YouTube"}),r.jsx("button",{className:"footer-social-btn",children:"Email"})]})}function xx({children:i}){return r.jsxs(Se,{gap:"0px",style:{minHeight:"100vh"},children:[r.jsx(yx,{}),r.jsx(vx,{children:i}),r.jsx(wx,{})]})}function yx(){return r.jsx(rx,{})}function vx({children:i}){return r.jsx(kx,{children:i})}function wx(){return r.jsx(px,{})}function kx({children:i}){return r.jsx("main",{style:{flex:1,backgroundColor:"var(--background)"},children:r.jsx(Se,{gap:"0px",style:{height:"100%"},children:i})})}const Sx={standard:{top:"56px",bottom:"56px"},dense:{top:"32px",bottom:"32px"}},$o={canvas:{backgroundColor:"var(--surface-canvas, #FFFFFF)"},subtle:{backgroundColor:"var(--surface-subtle, #FCFCFD)"},inverse:{backgroundColor:"var(--surface-inverse, #101828)",color:"var(--text-inverse, #FFFFFF)"}};function jx(i){if(!i||typeof i!="object"||!("type"in i))return!1;const a=i.type;return a===he||a===he.Wide||a===he.Standard||a===he.Narrow}function np({children:i}){return r.jsx(r.Fragment,{children:i})}function bx({children:i}){return r.jsx("div",{style:{paddingTop:"56px",paddingBottom:"56px"},children:i})}function Cx({children:i}){return r.jsx("div",{style:{paddingTop:"32px",paddingBottom:"32px"},children:i})}function Ex({children:i}){return r.jsx("div",{style:$o.canvas,children:i})}function Ix({children:i}){return r.jsx("div",{style:$o.subtle,children:i})}function Tx({children:i}){return r.jsx("div",{style:$o.inverse,children:i})}function Fx({children:i,className:a,padding:l="standard",variant:c="canvas",containerWidth:p="standard",contain:f=!0,paddingTop:m,paddingBottom:x,background:S}){const j=Sx[l],C=m??j.top,h=x??j.bottom,w={...$o[c],backgroundColor:S??$o[c].backgroundColor},T=f&&!jx(i);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .section-responsive {
          padding-top: ${C};
          padding-bottom: ${h};
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .section-responsive {
            padding-top: calc(${C} * 0.75);
            padding-bottom: calc(${h} * 0.75);
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 640px) {
          .section-responsive {
            padding-top: calc(${C} * 0.5);
            padding-bottom: calc(${h} * 0.5);
          }
        }
      `}),r.jsx("section",{className:`section-responsive ${a||""}`,style:w,children:r.jsx(np,{children:T?r.jsx(he,{width:p,children:i}):i})})]})}const ot=Object.assign(Fx,{SectionContainerSlot:np,PaddingStandard:bx,PaddingDense:Cx,VariantCanvas:Ex,VariantSubtle:Ix,VariantInverse:Tx});function _x(){return r.jsx(ot,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsxs(he,{children:[r.jsx(Rx,{}),r.jsx(Nx,{})]})})}function Rx(){return r.jsxs(Se,{gap:"0px",style:{marginBottom:"24px"},children:[r.jsx(zx,{}),r.jsx(Ax,{})]})}function Nx(){return r.jsxs(Se,{gap:"16px",children:[r.jsx(Px,{}),r.jsx(Lx,{}),r.jsx(Dx,{}),r.jsx(Mx,{}),r.jsx(Ox,{})]})}function zx(){return null}function Ax(){return null}function Px(){return null}function Lx(){return null}function Dx(){return null}function Mx(){return null}function Ox(){return null}function Bx(){return r.jsx(ot,{paddingTop:"64px",paddingBottom:"80px",background:"var(--card)",children:r.jsxs(he,{children:[r.jsx($x,{}),r.jsx(Ux,{})]})})}function $x(){return r.jsx(Se,{gap:"0px",style:{marginBottom:"24px"},children:r.jsx(Hx,{})})}function Ux(){return r.jsxs(Se,{gap:"16px",children:[r.jsx(Wx,{}),r.jsx(Vx,{}),r.jsx(qx,{})]})}function Hx(){return null}function Wx(){return null}function Vx(){return null}function qx(){return null}const Qx={hero:null,heroMetaBadges:[],featuredDrop:null,socialProof:null};let as=Qx,cs=!1,Eo=null;const Yx=async()=>Eo||(Eo=(async()=>{var i,a,l,c;try{const p=await Oo({first:6});if(p.edges.length===0){cs=!0;return}const f=p.edges.map(j=>j.node),m=f[0],x=ms(m),S=f.slice(0,3).map(j=>{var C,h;return{id:j.id,name:j.title,role:((C=j.featureLine)==null?void 0:C.value)||"Curated product",quote:((h=j.shortDescription)==null?void 0:h.value)||j.description||"Built for consistent daily use.",tag:j.tags[0]||"Curated"}});as={hero:{eyebrow:"Curated essentials for musicians",headline:"Gear that survives practice, travel, and stage.",supporting:"We research what musicians actually need, then pick durable, best-in-class tools with modern features so you buy once and keep playing.",primaryCta:"Shop products",secondaryCta:"Our philosophy",metaLine:"Fast delivery · Clear returns · Responsive support",featuredDropEyebrow:"Featured drop",featuredDropTitle:m.title,featuredDropSubtitle:((i=m.shortDescription)==null?void 0:i.value)||m.description||"",featuredDropImageUrl:(x==null?void 0:x.url)||"",featuredDropImageAlt:(x==null?void 0:x.altText)||m.title},featuredDrop:{eyebrow:"Featured drop",title:"Best-in-class essentials, chosen to last.",supporting:"One product at a time. Thorough research. Durable materials. Modern features that matter in real practice and gig conditions.",badges:["Durable build","Fast + accurate","Stage-ready"],primaryCta:"View featured",secondaryCta:"See all products",productName:m.title,productPrice:new Intl.NumberFormat("en-IN",{style:"currency",currency:m.priceRange.minVariantPrice.currencyCode,maximumFractionDigits:0}).format(Number.parseFloat(m.priceRange.minVariantPrice.amount)),productCopy:((a=m.shortDescription)==null?void 0:a.value)||m.description||"",featureLine:((l=m.featureLine)==null?void 0:l.value)||"",productBadge:((c=m.badge)==null?void 0:c.value)||m.tags[0]||"",productImageUrl:(x==null?void 0:x.url)||"",productImageAlt:(x==null?void 0:x.altText)||m.title},heroMetaBadges:["Curated for durability","Modern features","Clear policies"],socialProof:{eyebrow:"What musicians notice",title:"Built for real use — not shelf appeal.",supporting:"Feedback that focuses on durability, clarity, and daily reliability.",chips:m.tags.slice(0,4),testimonials:S,ctaLabel:"Explore products"}}}catch(p){console.error("Failed to load home data from Shopify",p)}finally{cs=!0,Eo=null}})(),Eo);function Ho(){const[i,a]=_.useState(as),[l,c]=_.useState(!cs);return _.useEffect(()=>{let p=!1;return cs?(a(as),c(!1),()=>{p=!0}):(Yx().then(()=>{p||(a(as),c(!1))}),()=>{p=!0})},[]),{...i,isLoading:l}}function Kx(){const{hero:i}=Ho();return i?r.jsx(ot,{contain:!1,paddingTop:"56px",paddingBottom:"48px",background:"var(--card)",children:r.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:"-200px",right:"-200px",width:"600px",height:"600px",backgroundColor:"#4F46E50F",borderRadius:"50%",filter:"blur(120px)",pointerEvents:"none",zIndex:0}}),r.jsx(he,{width:"wide",className:"relative z-[1]",children:r.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"64px",alignItems:"center"},children:[r.jsx("div",{style:{flex:"0 0 55%"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.eyebrow}),r.jsx("h1",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"48px",lineHeight:"56px",fontWeight:"600",color:"var(--foreground)",letterSpacing:"-0.01em",margin:0},children:i.headline}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"540px",margin:0},children:i.supporting}),r.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[r.jsx(Xx,{label:i.primaryCta}),r.jsx(Gx,{label:i.secondaryCta})]}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",marginTop:"8px"},children:i.metaLine})]})}),r.jsx("div",{style:{flex:"0 0 45%",position:"relative"},children:r.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"480px",height:"420px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[r.jsx("div",{style:{backgroundColor:"var(--muted)",height:"280px",width:"100%"},children:i.featuredDropImageUrl?r.jsx("img",{src:i.featuredDropImageUrl,alt:i.featuredDropImageAlt||i.featuredDropTitle,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{padding:"20px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.featuredDropEyebrow}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.featuredDropTitle}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:i.featuredDropSubtitle})]})})]})})]})})]})}):null}function Xx({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function Gx({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function rp({children:i,wrap:a="on",gap:l=12,align:c="center",justify:p="flex-start",style:f,responsiveGap:m}){const x=typeof l=="number"?`${l}px`:l,S=!!m,j=S?`cluster-${Math.random().toString(36).substr(2,9)}`:"";return r.jsxs(r.Fragment,{children:[S&&r.jsx("style",{children:`
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
        `}),r.jsx("div",{className:S?j:void 0,style:S?f:{display:"flex",flexDirection:"row",flexWrap:a==="on"?"wrap":"nowrap",gap:x,alignItems:c,justifyContent:p,...f},children:i})]})}function Jx(){const{heroMetaBadges:i}=Ho();return i.length===0?null:r.jsx(ot,{contain:!1,paddingTop:"24px",paddingBottom:"24px",background:"var(--card)",children:r.jsx(he,{width:"wide",children:r.jsx(rp,{wrap:"on",gap:12,align:"center",children:i.map(a=>r.jsx(it,{label:a,variant:"neutral",size:"md"},a))})})})}function Zx(){const{featuredDrop:i}=Ho();return i?r.jsx(ot,{paddingTop:"56px",paddingBottom:"56px",background:"var(--background)",children:r.jsx(he,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"48px",alignItems:"flex-start"},children:[r.jsx("div",{style:{flex:"0 0 45%"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.eyebrow}),r.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:i.title}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"480px",margin:0},children:i.supporting}),r.jsx("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:i.badges.map(a=>r.jsx(it,{label:a,variant:"neutral",size:"md"},a))}),r.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[r.jsx(ey,{label:i.primaryCta}),r.jsx(ty,{label:i.secondaryCta})]})]})}),r.jsx("div",{style:{flex:"0 0 55%"},children:r.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"560px",height:"360px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[r.jsx("div",{style:{backgroundColor:"var(--muted)",height:"200px",width:"100%"},children:i.productImageUrl?r.jsx("img",{src:i.productImageUrl,alt:i.productImageAlt||i.productName,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{padding:"16px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.productName}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.productPrice})]}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:i.productCopy}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:i.featureLine}),r.jsx("div",{style:{marginTop:"2px"},children:r.jsx(it,{label:i.productBadge,variant:"accent",size:"sm"})})]})})]})})]})})}):null}function ey({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function ty({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function ny(){return null}function ry(){return null}function oy(){return null}function iy(){return null}function sy(){const{socialProof:i}=Ho();return i?r.jsx(ot,{paddingTop:"56px",paddingBottom:"56px",background:"var(--card)",children:r.jsxs(he,{children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"24px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.eyebrow}),r.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:i.title}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:i.supporting})]}),r.jsx("div",{style:{display:"flex",gap:"12px",marginBottom:"32px"},children:i.chips.map(a=>r.jsx(it,{label:a,variant:"neutral",size:"md"},a))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"32px"},children:i.testimonials.map(a=>r.jsx("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"220px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",padding:"20px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)"},children:a.name}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:a.role})]}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,flex:1},children:a.quote}),r.jsx("div",{children:r.jsx(it,{label:a.tag,variant:"neutral",size:"sm"})})]})},a.id))}),r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx(ay,{label:i.ctaLabel})})]})}):null}function ay({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function ly(){return null}function uy(){return null}function cy(){return null}function xe({width:i="100%",height:a="16px",borderRadius:l="8px",style:c,...p}){const f={width:i,height:a,borderRadius:l,background:"linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 37%, var(--skeleton-base) 63%)",backgroundSize:"400% 100%",animation:"vs-skeleton-shimmer 1.2s ease-in-out infinite"};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        @keyframes vs-skeleton-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `}),r.jsx("div",{"aria-hidden":"true",style:{...f,...c},...p})]})}function dy(){return r.jsxs(Se,{gap:"0px",children:[r.jsx(ot,{paddingTop:"56px",paddingBottom:"48px",background:"var(--background)",children:r.jsx(he,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:"48px"},children:[r.jsxs(Se,{gap:"16px",children:[r.jsx(xe,{width:"140px",height:"14px"}),r.jsx(xe,{width:"88%",height:"56px",borderRadius:"12px"}),r.jsx(xe,{width:"92%",height:"24px"}),r.jsx(xe,{width:"80%",height:"24px"}),r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(xe,{width:"136px",height:"44px",borderRadius:"12px"}),r.jsx(xe,{width:"136px",height:"44px",borderRadius:"12px"})]})]}),r.jsx(xe,{width:"100%",height:"420px",borderRadius:"16px"})]})})}),r.jsx(ot,{paddingTop:"48px",paddingBottom:"56px",background:"var(--background)",children:r.jsx(he,{children:r.jsxs(Se,{gap:"16px",children:[r.jsx(xe,{width:"180px",height:"18px"}),r.jsx(xe,{width:"56%",height:"32px"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(i=>r.jsx(xe,{height:"240px",borderRadius:"16px"},i))})]})})})]})}function py(){return r.jsx(ot,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsx(he,{children:r.jsxs(Se,{gap:"16px",children:[r.jsx(xe,{width:"96px",height:"14px"}),r.jsx(xe,{width:"180px",height:"40px"}),r.jsx(xe,{width:"420px",height:"24px"}),r.jsx(xe,{width:"100%",height:"44px",borderRadius:"12px"}),r.jsx("div",{style:{display:"flex",gap:"12px"},children:[1,2,3,4].map(i=>r.jsx(xe,{width:"112px",height:"36px",borderRadius:"999px"},i))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3,4,5,6].map(i=>r.jsx(xe,{height:"460px",borderRadius:"16px"},i))})]})})})}function fy(){return r.jsxs(Se,{gap:"0px",children:[r.jsx(ot,{paddingTop:"24px",paddingBottom:"16px",background:"var(--card)",children:r.jsx(he,{children:r.jsx(xe,{width:"280px",height:"16px"})})}),r.jsx(ot,{paddingTop:"16px",paddingBottom:"32px",background:"var(--card)",children:r.jsx(he,{children:r.jsxs(Se,{gap:"12px",children:[r.jsx(xe,{width:"120px",height:"14px"}),r.jsx(xe,{width:"52%",height:"36px"}),r.jsx(xe,{width:"72%",height:"22px"})]})})}),r.jsx(ot,{paddingTop:"24px",paddingBottom:"48px",background:"var(--background)",children:r.jsx(he,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 420px",gap:"48px"},children:[r.jsx(xe,{width:"100%",height:"560px",borderRadius:"16px"}),r.jsx(xe,{width:"100%",height:"560px",borderRadius:"16px"})]})})}),r.jsx(ot,{paddingTop:"48px",paddingBottom:"56px",background:"var(--card)",children:r.jsx(he,{children:r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(i=>r.jsx(xe,{height:"220px",borderRadius:"16px"},i))})})})]})}function my(){return r.jsx(ot,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:r.jsx(he,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.8fr 1fr",gap:"24px",alignItems:"start"},children:[r.jsxs(Se,{gap:"20px",children:[r.jsx(xe,{width:"180px",height:"38px"}),[1,2].map(i=>r.jsx(xe,{width:"100%",height:"164px",borderRadius:"16px"},i)),r.jsx(xe,{width:"100%",height:"300px",borderRadius:"16px"})]}),r.jsxs(Se,{gap:"12px",children:[r.jsx(xe,{width:"100%",height:"260px",borderRadius:"16px"}),r.jsx(xe,{width:"100%",height:"48px",borderRadius:"12px"}),r.jsx(xe,{width:"100%",height:"48px",borderRadius:"12px"})]})]})})})}function hy(){const{isLoading:i}=Ho();return i?r.jsx(dy,{}):r.jsxs(r.Fragment,{children:[r.jsx(gy,{}),r.jsx(xy,{})]})}function gy(){return r.jsxs(Se,{gap:"0px",children:[r.jsx(Kx,{}),r.jsx(Jx,{})]})}function xy(){return r.jsxs(Se,{gap:"0px",children:[r.jsx(Zx,{}),r.jsx(ny,{}),r.jsx(ry,{}),r.jsx(oy,{}),r.jsx(iy,{}),r.jsx(sy,{}),r.jsx(ly,{}),r.jsx(uy,{}),r.jsx(cy,{})]})}function yy(){return r.jsx(ot,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsxs(he,{children:[r.jsx(vy,{}),r.jsx(wy,{})]})})}function vy(){return r.jsxs(Se,{gap:"0px",style:{marginBottom:"24px"},children:[r.jsx(ky,{}),r.jsx(Sy,{})]})}function wy(){return r.jsxs(Se,{gap:"16px",children:[r.jsx(jy,{}),r.jsx(by,{}),r.jsx(Cy,{}),r.jsx(Ey,{}),r.jsx(Iy,{}),r.jsx(Ty,{}),r.jsx(Fy,{}),r.jsx(_y,{})]})}function ky(){return null}function Sy(){return null}function jy(){return null}function by(){return null}function Cy(){return null}function Ey(){return null}function Iy(){return null}function Ty(){return null}function Fy(){return null}function _y(){return null}const Ry="http://localhost:3001",os="/api/shopify/admin/product-metadata",Ny=i=>`${(os.startsWith("http://")||os.startsWith("https://")?os:`${Ry.replace(/\/+$/,"")}/${os.replace(/^\/+/,"")}`).replace(/\/+$/,"")}/${encodeURIComponent(i)}`;async function zy(i){const a=await fetch(Ny(i),{method:"GET",credentials:"include"});if(!a.ok)throw a.status===429?new Re("Rate limit exceeded","RATE_LIMIT"):new Re(`HTTP ${a.status}`,"HTTP_ERROR");return(await a.json()).product??null}const Ar={productHeader:{badge:"",title:"",vendor:"",sku:"",shareUrl:"",shareLabel:""},productMain:{gallery:{images:[],zoomLabel:"",prevLabel:"",nextLabel:""},buyBox:{variantId:null,badge:"",name:"",descriptor:"",price:"",compareAtPrice:null,stock:"",isInStock:!1,features:[],reassurancePoints:[],primaryCta:"Add to cart",secondaryCta:"Buy now",microLine:"",inBoxTitle:"",inBoxLine:""}},keyBenefits:{title:"",cards:[]},featureDeepDive:{overviewTitle:"",overviewHtml:"",storyTitle:"",storyHtml:"",buyingGuideTitle:"",buyingGuideHtml:"",curatedFor:"",notFor:""},deliveryAndReturns:[],reviews:{title:"",supporting:"",averageLabel:"",averageValue:"",totalReviewsLabel:"",verifiedLabel:"",useCasePrefix:"",writeReviewLabel:"Write a review",loadMoreLabel:"Load more",breakdown:[],tags:[],items:[]},relatedProducts:{title:"Complete your setup",viewAllLabel:"View all",addToCartLabel:"Add to cart",items:[]},specsAndInBox:{specificationsTitle:"",specifications:[],inBoxTitle:"",inBoxItems:[],inBoxBadge:"",productDetailsTitle:"",productDetails:[]},faq:{title:"",items:[]},stickyCtaRail:{variantId:null,name:"",price:"",stockLabel:"",isInStock:!1,shippingLabel:"",reassurancePoints:[],addToCartLabel:"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}},ls="all",Ay="All",op=i=>i.trim().toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),Py="https://thevibestation.com".replace(/\/+$/,""),Ly=["capo","tuner","string","pick","holder","gig bag","bundle","essentials"],ip=i=>{var l,c,p,f;const a=(c=(l=i.variants)==null?void 0:l.edges.find(m=>{const x=m.node;return x.availableForSale&&(typeof x.quantityAvailable!="number"||x.quantityAvailable>0)}))==null?void 0:c.node;return(a==null?void 0:a.id)||((f=(p=i.variants)==null?void 0:p.edges[0])==null?void 0:f.node.id)||null},sp=i=>{var a,l;return((l=(a=i.variants)==null?void 0:a.edges[0])==null?void 0:l.node)??null},us=(i,a)=>{if(!i||!a)return"₹—";const l=Number.parseFloat(i);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:a,maximumFractionDigits:0}).format(l):`${a} ${i}`},Lr=i=>i?i.replace(/<br\s*\/?>/gi,`
`).replace(/<\/(p|div|li|h[1-6])>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").trim():"",fn=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),hn=i=>i?i.replace(/\r\n?/g,`
`).replace(/\\r\\n|\\r/g,`
`).replace(/\\n/g,`
`).replace(/\\t/g," ").replace(/&nbsp;/gi," ").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim():"",ds=i=>i.replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,a=>a.toUpperCase()),Dy=i=>/taxonomy\s*reference/i.test(i),My=i=>i.split(">").map(a=>a.trim()).filter(Boolean).at(-1)||i.trim(),is=(i,a)=>{const l=hn(a).replace(/\s*\n+\s*/g," ").replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim();return l?/^label$/i.test(i)?l:/^color$/i.test(i)?`(${l})`:l:""},kd=i=>i.replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*\|\s*/g," | ").replace(/\s*,\s*\|/g," |").replace(/\|\s*,\s*/g,"| ").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim(),Oy=i=>{var f;const a=i.fields.filter(m=>m.value&&m.value.trim().length>0&&!Dy(m.key));if(a.length===0)return((f=i.displayName)==null?void 0:f.trim())||"";const l=a.find(m=>/^label$/i.test(m.key)),c=a.find(m=>/^color$/i.test(m.key)),p=a.filter(m=>!/^label$/i.test(m.key)&&!/^color$/i.test(m.key));if(l){const m=[is(l.key,l.value??""),...c?[is(c.key,c.value??"")]:[]].filter(Boolean);if(p.length===0&&m.length>0)return m.join(" ");const x=p.map(S=>is(S.key,S.value??"")).filter(Boolean);return[...m,...x].join(", ")}return a.map(m=>is(m.key,m.value??"")).filter(Boolean).join(", ")},By=i=>hn(i).replace(/<br\s*\/?>/gi,`
`).split(`
`).map(a=>Lr(a).trim()).filter(Boolean),ol=i=>By(i).map(a=>{const l=a.match(/^([^:]+):\s*(.+)$/);return l?{label:ds(l[1]),value:hn(l[2]).replace(/\s*\n+\s*/g," ").trim()}:null}).filter(a=>!!a&&a.value.length>0),Sd=i=>{const a=hn(i);return a?a.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(c=>c.trim()).filter(Boolean).map(c=>{const p=c.split(`
`).map(S=>Lr(S).trim()).filter(Boolean);if(p.length===0)return"";if(p.length>1&&p[0].endsWith(":")){const S=`<p><strong>${fn(p[0])}</strong></p>`,j=p.slice(1).map(C=>`<li>${fn(C)}</li>`).join("");return j?`${S}<ul>${j}</ul>`:S}const f=[];let m=[];const x=()=>{m.length!==0&&(f.push(`<p>${fn(m.join(" "))}</p>`),m=[])};return p.forEach(S=>{const j=S.match(/^([^:]{1,60}):\s*(.+)$/);if(j){x(),f.push(`<p><strong>${fn(j[1].trim())}:</strong> ${fn(j[2].trim())}</p>`);return}m.push(S)}),x(),f.join("")}).join(""):""},$y=i=>{const a=i.trim();return a.startsWith("[")||a.includes("•")||a.includes("|")},ap=i=>{const a=typeof i.type=="string"?i.type:"",l=typeof i.value=="string"?fn(i.value):"",c=Array.isArray(i.children)?i.children.map(p=>p&&typeof p=="object"?ap(p):"").join(""):"";switch(a){case"root":return c;case"paragraph":return`<p>${c}</p>`;case"heading":return`<h3>${c}</h3>`;case"text":return l;case"text_bold":return`<strong>${c||l}</strong>`;case"text_italic":return`<em>${c||l}</em>`;case"list":return`<ul>${c}</ul>`;case"list-item":return`<li>${c}</li>`;case"link":return typeof i.url=="string"?`<a href="${fn(i.url)}">${c}</a>`:c;default:return c||l}},il=i=>{if(!i)return"";const a=hn(i);if($y(a)){const l=ps(a);if(l.length>0)return`<ul>${l.map(c=>`<li>${fn(c)}</li>`).join("")}</ul>`}if(a.includes("<"))return a;try{const l=JSON.parse(a);if(l&&typeof l=="object")return ap(l)}catch{return Sd(a)}return Sd(a)},ps=i=>{const a=hn(i);if(!a)return[];const l=c=>c.replace(/<br\s*\/?>/gi,`
`).split(/\n|,|\||•/).map(p=>Lr(p).trim()).filter(Boolean);try{const c=JSON.parse(a);if(Array.isArray(c))return c.flatMap(p=>typeof p=="string"?l(p):[]).filter(Boolean);if(typeof c=="string")return l(c)}catch{return l(a)}return[]},Uy=i=>{const a=hn(i);if(!a)return[];try{const l=JSON.parse(a);if(l&&typeof l=="object"&&!Array.isArray(l)){const c=Object.entries(l).flatMap(([p,f])=>{const m=ol(`${ds(p)}: ${String(f)}`);return m.length>0?m:[{label:ds(p),value:hn(String(f)).replace(/\s*\n+\s*/g," ").trim()}]}).filter(p=>p.value.length>0);if(c.length>0)return c}}catch{return ol(a)}return ol(a)},Hy=i=>{if(!i)return[];try{const a=JSON.parse(i);if(Array.isArray(a))return a.map(l=>{if(!l||typeof l!="object")return null;const c=l,p=typeof c.question=="string"?c.question.trim():"",f=typeof c.answer=="string"?c.answer.trim():"";return p&&f?{question:p,answer:f}:null}).filter(l=>!!l)}catch{return i.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(l=>Lr(l)).filter(Boolean).map(l=>{const[c,...p]=l.split(`
`),f=p.join(" ").trim();return!c||!f?null:{question:c.replace(/^Q[:\-]?\s*/i,""),answer:f.replace(/^A[:\-]?\s*/i,"")}}).filter(l=>!!l)}return[]},pl=(i,a="Yes",l="No")=>{if(!i)return"";const c=i.trim().toLowerCase();return["true","yes","available","1"].includes(c)?a:["false","no","not available","0"].includes(c)?l:i.trim()},lp=()=>{if(typeof window>"u")return null;const i=window.location.pathname.match(/\/products\/([^/]+)/);return(i==null?void 0:i[1])??null},up=i=>`${Py}/products/${i.handle}`,Wy=i=>{var c;if(i.availableForSale===!1)return"Out of stock";if(typeof i.totalInventory=="number")return i.totalInventory>0?`In stock (${i.totalInventory} available)`:"Out of stock";const a=sp(i);return a&&typeof a.quantityAvailable=="number"?a.quantityAvailable>0?`In stock (${a.quantityAvailable} available)`:"Out of stock":((c=i.variants)==null?void 0:c.edges.some(p=>{const f=p.node;return f.availableForSale===!1?!1:typeof f.quantityAvailable=="number"?f.quantityAvailable>0:f.availableForSale===!0}))?"In stock":"Out of stock"},Vy=i=>{var l;return ps((l=i.whyDifferent)==null?void 0:l.value).slice(0,3).map((c,p)=>({id:`${i.handle}-feature-${p}`,badge:`0${p+1}`,title:c,description:"",footer:""}))},qy=i=>{const a=`${i.title} ${i.tags.join(" ")}`.toLowerCase();return Ly.some(l=>a.includes(l))?"Pair it with these":"Complete your setup"},Qy=i=>{var c;const a={averageValue:"—",totalReviewsLabel:"No reviews yet",breakdown:[],tags:[],items:[]},l=(c=i.reviewSummary)==null?void 0:c.value;if(!l)return a;try{const p=JSON.parse(l),f=typeof p.average=="number"?p.average.toFixed(1):"—",m=typeof p.count=="number"?p.count:0,x=Array.isArray(p.breakdown)?p.breakdown:[],S=Array.isArray(p.items)?p.items:[],j=Array.isArray(p.tags)?p.tags:[];return{averageValue:f,totalReviewsLabel:`${m} review${m===1?"":"s"}`,breakdown:x.map(C=>{if(!C||typeof C!="object")return null;const h=C,w=typeof h.stars=="number"?h.stars:0,T=typeof h.count=="number"?h.count:0;return w>0?{stars:w,count:T,label:`${w} star`}:null}).filter(C=>!!C).sort((C,h)=>h.stars-C.stars),tags:j.filter(C=>typeof C=="string"),items:S.map((C,h)=>{if(!C||typeof C!="object")return null;const w=C;return{id:typeof w.id=="string"?w.id:`review-${h}`,name:typeof w.name=="string"?w.name:"Verified buyer",role:typeof w.role=="string"?w.role:"Customer",quote:typeof w.quote=="string"?w.quote:"",useCase:typeof w.useCase=="string"?w.useCase:"General use",rating:typeof w.rating=="number"?w.rating:5,tags:Array.isArray(w.tags)?w.tags.filter(T=>typeof T=="string"):[],verified:w.verified!==!1}}).filter(C=>!!C&&C.quote.length>0)}}catch{return a}},Yy=i=>{var l,c,p,f,m,x,S;const a=[(l=i.packCount)==null?void 0:l.value,(c=i.bestFor)==null?void 0:c.value,(p=i.dispatchTime)==null?void 0:p.value,(f=i.deliveryWindow)==null?void 0:f.value,(m=i.returnsPolicy)==null?void 0:m.value,pl((x=i.codAvailable)==null?void 0:x.value,"COD available","COD unavailable"),pl((S=i.secureCheckout)==null?void 0:S.value,"Secure checkout","")].map(j=>j==null?void 0:j.trim()).filter(j=>!!j);return Array.from(new Set(a)).slice(0,6)},Ky=i=>{var l,c,p;const a=sp(i);return[{label:"SKU",value:(a==null?void 0:a.sku)||"Available on request"},{label:"Brand",value:i.vendor||"Vibe Station"},{label:"Country of origin",value:((l=i.countryOfOrigin)==null?void 0:l.value)||""},{label:"GST invoice",value:pl((c=i.gstInvoice)==null?void 0:c.value,"Available","Not specified")||"Not specified"},{label:"Care / storage",value:Lr((p=i.careInstructions)==null?void 0:p.value)},{label:"Shareable short URL",value:up(i)}].filter(f=>f.value.trim().length>0)},cp=i=>{const a=i==null?void 0:i.trim();if(!a)return[];try{const l=JSON.parse(a);if(Array.isArray(l))return l.map(c=>typeof c=="string"?c.trim():"").filter(c=>c.length>0)}catch{}return a.split(/[\n,]+/).map(l=>l.trim()).filter(Boolean)},jd=i=>{var a;return Array.from(new Set([...cp((a=i.categories)==null?void 0:a.value),...i.tags.map(l=>l.trim()).filter(Boolean)]))},bd=i=>i.map(a=>op(a)).filter(Boolean),Xy=async i=>{const a=jd(i),l=new Set(bd(a)),c=new Set(a.map(f=>f.toLowerCase()));return l.size===0&&c.size===0?[]:(await Oo({first:50})).edges.map(f=>f.node).filter(f=>f.id!==i.id).map(f=>{const m=jd(f),x=bd(m),S=m.filter(C=>c.has(C.toLowerCase())).length,j=x.filter(C=>l.has(C)).length;return{candidate:f,score:S+j}}).filter(f=>f.score>0).sort((f,m)=>m.score-f.score).slice(0,20).map(f=>f.candidate)},Gy=i=>(i??[]).flatMap(a=>{const l=ds(a.key),c=a.reference?[a.reference]:[],p=Array.isArray(a.references)?a.references:[],f=[...c,...p].map(S=>Oy(S)).filter(Boolean),m=kd(hn(a.value).replace(/\s*\n+\s*/g," ").trim()),x=kd(f.length>0?f.join(" | "):m);return x.length>0?[{label:l,value:x}]:[]}),Jy=(i,a)=>{var S,j,C,h;const l=Uy((S=i.specifications)==null?void 0:S.value),c=cp((j=i.categories)==null?void 0:j.value),p=((C=a==null?void 0:a.category)==null?void 0:C.fullName)||((h=a==null?void 0:a.category)==null?void 0:h.name)||"",f=Array.from(new Set([...c,...p?[p]:[]].map(w=>My(w)).filter(Boolean))),m=f.length>0?[{label:"Category",value:f.join(", ")}]:[],x=Gy(a==null?void 0:a.shopifyMetafields);return[...m,...x,...l].filter((w,T,R)=>{const M=`${w.label.toLowerCase()}::${w.value.toLowerCase()}`;return R.findIndex(A=>`${A.label.toLowerCase()}::${A.value.toLowerCase()}`===M)===T})},Zy=(i,a)=>a.filter(l=>l.id!==i.id&&l.handle!==i.handle).slice(0,6).map(l=>{var p,f,m;const c=ms(l);return{id:l.handle,variantId:ip(l),badge:((p=l.badge)==null?void 0:p.value)||l.tags[0]||"Curated",name:l.title,descriptor:((f=l.shortDescription)==null?void 0:f.value)||l.description||"Curated recommendation",featureLine:((m=l.featureLine)==null?void 0:m.value)||l.tags.slice(0,3).join(" · ")||"Pairs well with this setup",price:us(l.priceRange.minVariantPrice.amount,l.priceRange.minVariantPrice.currencyCode),imageUrl:c==null?void 0:c.url,imageAlt:(c==null?void 0:c.altText)||l.title}}),e0=()=>Ar.reviews,t0=({product:i,adminMetadata:a,relatedProducts:l})=>{var U,K,te,re,ee,ae,ve,Te,Le,Be,we,Ne,ze,Ke,Ce,ne,ce,D,V,B,v,F,H,G,ie,X,de,le,pe,Ae,en,yn;const c=((K=(U=i.variants)==null?void 0:U.edges[0])==null?void 0:K.node)??null,p=il((te=i.whyDifferent)==null?void 0:te.value),f=il((re=i.buyingGuide)==null?void 0:re.value),m=il(i.description)||i.descriptionHtml||`<p>${fn(i.description)}</p>`,x=Jy(i,a),S=ps((ee=i.whatsInBox)==null?void 0:ee.value),j=ps((ae=i.bulletFeatures)==null?void 0:ae.value),C=Vy(i),h=Wy(i),w=h.toLowerCase().startsWith("in stock"),T=ip(i),R=Qy(i),M=Yy(i),A=up(i);return{productHeader:{badge:((ve=i.badge)==null?void 0:ve.value)||"Curated pick",title:i.title,vendor:i.vendor||"Vibe Station",sku:(c==null?void 0:c.sku)||"—",shareUrl:A,shareLabel:"Shareable short URL"},productMain:{gallery:{images:i.images.edges.map((kt,Qt)=>({id:kt.node.id||`${i.handle}-${Qt}`,url:kt.node.url,altText:kt.node.altText||`${i.title} image ${Qt+1}`}))||[],zoomLabel:"Zoom",prevLabel:"Prev",nextLabel:"Next"},buyBox:{variantId:T,badge:((Te=i.badge)==null?void 0:Te.value)||"Curated pick",name:i.title,descriptor:((Le=i.subtitle)==null?void 0:Le.value)||((Be=i.shortDescription)==null?void 0:Be.value)||Lr(i.descriptionHtml)||i.description,price:us(i.priceRange.minVariantPrice.amount,i.priceRange.minVariantPrice.currencyCode),compareAtPrice:(we=i.compareAtPriceRange)!=null&&we.minVariantPrice?us(i.compareAtPriceRange.minVariantPrice.amount,i.compareAtPriceRange.minVariantPrice.currencyCode):null,stock:h,isInStock:w,features:j,reassurancePoints:M,primaryCta:((Ne=i.ctaLabel)==null?void 0:Ne.value)||"Add to cart",secondaryCta:((ze=i.ctaSubtext)==null?void 0:ze.value)||"Buy now",microLine:((Ke=i.shippingInfo)==null?void 0:Ke.value)||[(Ce=i.dispatchTime)==null?void 0:Ce.value,(ne=i.supportResponseTime)==null?void 0:ne.value,(ce=i.deliveryWindow)==null?void 0:ce.value].filter(Boolean).join(" · ")||"Shipping calculated at checkout · Clear returns · Responsive support",inBoxTitle:"What's in the box",inBoxLine:S.join(" · ")}},keyBenefits:{title:"Why it feels different",cards:C},featureDeepDive:{overviewTitle:"Product overview",overviewHtml:m,storyTitle:"Why this made the cut",storyHtml:p,buyingGuideTitle:"Buying guide",buyingGuideHtml:f,curatedFor:((D=i.curatedFor)==null?void 0:D.value)||((V=i.bestFor)==null?void 0:V.value)||"Players comparing feel, grip, and attack quickly.",notFor:((B=i.notFor)==null?void 0:B.value)||"Players who already know they only want one exact gauge."},deliveryAndReturns:[{id:"dispatch",badge:"Dispatch",title:"Estimated dispatch",description:((v=i.deliveryInfo)==null?void 0:v.value)||"",footer:((F=i.deliveryWindow)==null?void 0:F.value)||""},{id:"returns",badge:"Returns",title:"Returns & replacements",description:((H=i.returnsPolicy)==null?void 0:H.value)||"",footer:((G=i.replacementPolicy)==null?void 0:G.value)||""},{id:"support",badge:"Support",title:"Support response",description:((ie=i.supportInfo)==null?void 0:ie.value)||"",footer:((X=i.supportResponseTime)==null?void 0:X.value)||""}].filter(kt=>kt.description.trim().length>0||kt.footer.trim().length>0),reviews:{...e0(),supporting:(de=i.reviewSummary)!=null&&de.value?"Real review summary pulled from Shopify metafields.":"Add custom.reviews in Shopify to populate rating, review count, tags, and breakdown.",averageLabel:R.averageValue==="—"?"No rating yet":`${R.averageValue} / 5`,averageValue:R.averageValue,totalReviewsLabel:R.totalReviewsLabel,breakdown:R.breakdown,tags:R.tags,items:R.items},relatedProducts:{...Ar.relatedProducts,title:qy(i),items:Zy(i,l)},specsAndInBox:{specificationsTitle:"Specifications",specifications:x,inBoxTitle:"In the box",inBoxItems:S,inBoxBadge:((le=i.packCount)==null?void 0:le.value)||"No extras required",productDetailsTitle:"Product details",productDetails:Ky(i)},faq:{title:"FAQ",items:Hy((pe=i.faq)==null?void 0:pe.value)},stickyCtaRail:{variantId:T,name:i.title,price:us(i.priceRange.minVariantPrice.amount,i.priceRange.minVariantPrice.currencyCode),stockLabel:h,isInStock:w,shippingLabel:((Ae=i.deliveryWindow)==null?void 0:Ae.value)||((en=i.shippingInfo)==null?void 0:en.value)||"Shipping calculated at checkout",reassurancePoints:M,addToCartLabel:((yn=i.ctaLabel)==null?void 0:yn.value)||"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}}};let ur=Ar,Ao=!1,Io=null,Po=null,No=!1;const n0=async i=>{const a=i??lp();return Io&&a===Po||(Io=(async()=>{try{const l=a;if(!l){ur=Ar,No=!1,Ao=!0,Po=null;return}Po=l;const[c,p]=await Promise.all([Wm(l),zy(l).catch(m=>(console.error("Failed to load public admin product metadata",m),null))]);if(!c){ur=Ar,No=!1,Ao=!0;return}const f=await Xy(c).catch(()=>[]);ur=t0({product:c,adminMetadata:p,relatedProducts:f}),No=!0}catch(l){ur=Ar,No=!1,console.error("Failed to load product detail from Shopify",l)}finally{Ao=!0,Io=null}})()),Io};function qt(){const i=lp(),[a,l]=_.useState(ur),[c,p]=_.useState(!Ao||Po!==i);return _.useEffect(()=>{let f=!1;return Ao&&Po===i?(l(ur),p(!1),()=>{f=!0}):(p(!0),n0(i).then(()=>{f||(l(ur),p(!1))}),()=>{f=!0})},[i]),{...a,hasProduct:No,isLoading:c}}function r0(){const{productHeader:i}=qt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"product-title-block",children:[r.jsxs("div",{className:"product-title-badge-row",children:[r.jsx(it,{label:i.badge,variant:"accent",size:"sm"}),r.jsx("span",{className:"product-title-vendor",children:i.vendor})]}),r.jsx("h1",{className:"product-title-h1",children:i.title}),r.jsxs("div",{className:"product-title-meta",children:[r.jsxs("span",{children:["SKU: ",i.sku]}),r.jsxs("span",{children:[i.shareLabel,": ",i.shareUrl]})]})]})]})}function o0(){const{productHeader:i}=qt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("nav",{"aria-label":"Breadcrumb",children:r.jsxs("ol",{className:"breadcrumb-nav",children:[r.jsx("li",{children:r.jsx("a",{href:"/",className:"breadcrumb-link",children:"Home"})}),r.jsx("li",{className:"breadcrumb-separator",children:"/"}),r.jsx("li",{children:r.jsx("a",{href:"/products",className:"breadcrumb-link",children:"Products"})}),r.jsx("li",{className:"breadcrumb-separator",children:"/"}),r.jsx("li",{className:"breadcrumb-current",children:i.title})]})})]})}const i0={sm:"12px",md:"16px",lg:"20px"};function s0(i){switch(i){case"subtle":return{backgroundColor:"var(--muted)",border:"1px solid var(--border)",boxShadow:"none"};case"outline":return{backgroundColor:"transparent",border:"1px solid var(--border)",boxShadow:"none"};case"elevated":default:return{backgroundColor:"var(--card)",border:"1px solid var(--border)",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F"}}}function He({children:i,mediaSlot:a,footerSlot:l,variant:c="elevated",padding:p="md",width:f="100%",height:m}){const x=s0(c),S=i0[p];return r.jsxs("div",{style:{...x,borderRadius:"16px",width:f,height:m,overflow:"hidden",display:"flex",flexDirection:"column"},children:[a,i?r.jsx("div",{style:{padding:S},children:i}):null,l?r.jsx("div",{style:{padding:S,paddingTop:"0"},children:l}):null]})}function a0({children:i}){return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",position:"relative"},children:i})}function l0({children:i}){return r.jsx("label",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function u0({children:i}){return r.jsx("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:i})}function c0({placeholder:i,value:a}){return r.jsx("input",{type:"text",placeholder:i||"Enter text...",value:a,style:{width:"100%",border:"none",outline:"none",background:"transparent",fontSize:"14px",lineHeight:"20px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",padding:0}})}function d0({children:i,error:a}){return r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:a?"var(--destructive)":"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function p0({label:i,placeholder:a,helperText:l,error:c,disabled:p,size:f="md"}){const m=f==="sm"?"36px":"44px",x=f==="sm"?"12px":"14px",S=f==="sm"?"10px":"12px";let j="var(--border)";return c&&(j="var(--destructive)"),r.jsxs(a0,{children:[i&&r.jsx(l0,{children:i}),r.jsx(u0,{children:r.jsx("div",{style:{width:"100%",height:m,display:"flex",alignItems:"center",paddingLeft:x,paddingRight:x,backgroundColor:"var(--card)",border:`1px solid ${j}`,borderRadius:S,opacity:p?.4:1,transition:"border-color 150ms ease"},children:r.jsx(c0,{placeholder:a})})}),l&&r.jsx("div",{style:{opacity:p?.4:1},children:r.jsx(d0,{error:c,children:l})})]})}function dp(){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(p0,{label:"Delivery pincode",placeholder:"110001",helperText:"Enter your 6-digit pincode."}),r.jsx("div",{children:r.jsx(We,{variant:"secondary",size:"sm",label:"Check delivery"})})]})}function f0(){return r.jsxs("div",{className:"product-main",children:[r.jsx(m0,{}),r.jsx(h0,{})]})}function m0(){const{productMain:i}=qt(),[a,l]=_.useState(0),c=i.gallery.images,p=c[a],f=()=>{c.length!==0&&l(x=>x===0?c.length-1:x-1)},m=()=>{c.length!==0&&l(x=>(x+1)%c.length)};return r.jsxs("div",{className:"product-main__gallery",children:[r.jsx(He,{variant:"elevated",height:"560px",mediaSlot:r.jsxs("div",{className:"product-main__gallery-frame",children:[p?r.jsx("img",{className:"product-main__gallery-image",src:p.url,alt:p.altText}):r.jsx("div",{className:"product-main__gallery-placeholder"}),r.jsx("div",{className:"product-main__gallery-badge",children:r.jsx(it,{label:i.gallery.zoomLabel,variant:"neutral",size:"sm"})}),r.jsxs("div",{className:"product-main__gallery-actions",children:[r.jsx(We,{variant:"ghost",size:"sm",label:i.gallery.prevLabel,onClick:f}),r.jsx(We,{variant:"ghost",size:"sm",label:i.gallery.nextLabel,onClick:m})]})]})}),r.jsx("div",{className:"product-main__thumbnail-row",children:c.length>0?c.map((x,S)=>r.jsx("button",{className:`product-main__thumbnail-button${S===a?" product-main__thumbnail-button--active":""}`,type:"button",onClick:()=>l(S),children:r.jsx("img",{className:"product-main__thumbnail-image",src:x.url,alt:x.altText})},x.id)):[1,2,3,4].map(x=>r.jsx("div",{className:`product-main__thumbnail-placeholder${x===1?" product-main__thumbnail-placeholder--active":""}`},x))})]})}function h0(){const{addItem:i}=Vn(),{productMain:a}=qt(),l=a.buyBox.isInStock;return r.jsx("div",{className:"product-main__buy-box",children:r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"product-main__buy-box-content",children:[r.jsx("div",{className:"product-main__badge-row",children:r.jsx(it,{label:a.buyBox.badge,variant:"accent",size:"sm"})}),r.jsx("h2",{className:"product-main__title",children:a.buyBox.name}),r.jsx("div",{className:"product-main__descriptor",children:a.buyBox.descriptor}),r.jsxs("div",{className:"product-main__price-row",children:[r.jsx("h3",{className:"product-main__price",children:a.buyBox.price}),r.jsxs("div",{className:"product-main__stock-column",children:[a.buyBox.compareAtPrice?r.jsx("span",{className:"product-main__compare-price",children:a.buyBox.compareAtPrice}):null,r.jsx("span",{className:`product-main__stock${l?" product-main__stock--in-stock":" product-main__stock--out-of-stock"}`,children:a.buyBox.stock})]})]}),r.jsx(dp,{}),a.buyBox.reassurancePoints.length>0?r.jsx("div",{className:"product-main__reassurance-list",children:a.buyBox.reassurancePoints.map(c=>r.jsxs("div",{className:"product-main__reassurance-item",children:[r.jsx("div",{className:"product-main__reassurance-icon",children:r.jsx(Yd,{className:"product-main__reassurance-check",size:12,strokeWidth:3})}),r.jsx("div",{className:"product-main__reassurance-text",children:c})]},c))}):null,r.jsxs("div",{className:"product-main__actions",children:[r.jsx(We,{variant:"primary",size:"lg",label:a.buyBox.primaryCta,disabled:!l||!a.buyBox.variantId,onClick:()=>{a.buyBox.variantId&&i(a.buyBox.variantId)}}),r.jsx(We,{variant:"secondary",size:"lg",label:a.buyBox.secondaryCta})]}),r.jsx("div",{className:"product-main__micro-line",children:a.buyBox.microLine})]})})})}function g0(){const{deliveryAndReturns:i}=qt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"delivery-returns-container",children:[r.jsx("h3",{className:"delivery-returns-title",children:"Delivery & Returns"}),r.jsx("div",{className:"delivery-returns-cards",children:i.map(a=>r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"delivery-card-content",children:[r.jsxs("div",{className:"delivery-card-header",children:[r.jsx(it,{label:a.badge,variant:"neutral",size:"sm"}),r.jsx("h4",{className:"delivery-card-title",children:a.title})]}),r.jsx("div",{className:"delivery-card-description",children:a.description}),a.footer?r.jsx("div",{className:"delivery-card-footer",children:a.footer}):null]})},a.id))})]})]})}function x0(){const{featureDeepDive:i}=qt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"feature-deep-dive-container",children:[r.jsx("div",{className:"feature-deep-dive-title-wrapper",children:r.jsx("h3",{className:"feature-deep-dive-title",children:"Product Deep Dive"})}),r.jsxs("div",{className:"feature-deep-dive-grid",children:[r.jsxs("div",{className:"feature-deep-dive-main",children:[r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",children:[r.jsxs("div",{className:"feature-card-header",children:[r.jsx(Kd,{size:20,style:{color:"var(--primary)"}}),r.jsx("h4",{className:"feature-card-title",children:i.overviewTitle})]}),r.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:i.overviewHtml}})]})}),r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",children:[r.jsx("h4",{className:"feature-card-title",children:i.buyingGuideTitle}),r.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:i.buyingGuideHtml}})]})}),i.storyHtml?r.jsx(He,{variant:"subtle",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",style:{gap:"12px"},children:[r.jsx("div",{className:"feature-story-badge",children:r.jsx("h4",{className:"feature-story-title",children:i.storyTitle})}),r.jsx("div",{className:"feature-story-html",dangerouslySetInnerHTML:{__html:i.storyHtml}})]})}):null]}),r.jsxs("div",{className:"feature-deep-dive-sidebar",children:[r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(qh,{size:18,style:{color:"var(--success-foreground)"}}),r.jsx(it,{label:"Perfect for",variant:"accent",size:"sm"})]}),r.jsx("div",{className:"feature-perfect-for",children:i.curatedFor})]})}),i.notFor?r.jsx(He,{variant:"subtle",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(it,{label:"Not ideal for",variant:"neutral",size:"sm"}),r.jsx("div",{className:"feature-not-for",children:i.notFor})]})}):null,r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Uo,{size:16,style:{color:"var(--primary)"}}),r.jsx("div",{className:"quick-info-title",children:"Quick Info"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingTop:"4px"},children:[r.jsxs("div",{children:[r.jsx("div",{className:"quick-info-label",children:"Protection Level"}),r.jsx("div",{className:"quick-info-value",children:"10mm Padding"})]}),r.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[r.jsx("div",{className:"quick-info-label",children:"Water Resistant"}),r.jsx("div",{className:"quick-info-value",children:"Light rain protection"})]}),r.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[r.jsx("div",{className:"quick-info-label",children:"Compatibility"}),r.jsx("div",{className:"quick-info-value",children:"Most acoustic & electric"})]})]})]})})]})]})]})]})}function y0(){const{keyBenefits:i}=qt();if(i.cards.length===0)return null;const a=[kg,Uo,Tg];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs(Se,{direction:"vertical",gap:24,children:[r.jsx("div",{className:"key-benefits-title-container",children:r.jsx("h3",{className:"key-benefits-title",children:i.title})}),r.jsx("div",{className:"key-benefits-grid",children:i.cards.map((l,c)=>{const p=a[c%a.length];return r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs(Se,{direction:"vertical",gap:16,style:{alignItems:"flex-start"},children:[r.jsx("div",{className:"key-benefit-icon",children:r.jsx(p,{size:24})}),r.jsx("div",{className:"key-benefit-badge",children:l.badge}),r.jsx("h4",{className:"key-benefit-title",children:l.title}),l.description?r.jsx("div",{className:"key-benefit-description",children:l.description}):null,l.footer?r.jsx("div",{className:"key-benefit-footer",children:l.footer}):null]})},l.id)})})]})]})}const v0=/^(.*?)\s*,?\s*\((#[0-9a-f]{3,8})\)$/i,w0=i=>{const a=i.split("|").map(l=>l.trim()).filter(Boolean).map(l=>{const c=l.match(v0);return c?{label:c[1].trim().replace(/,\s*$/,""),hex:c[2]}:null});return a.every(Boolean)?a:[]};function Cd({value:i}){const a=w0(i);return a.length===0?r.jsx(r.Fragment,{children:i}):r.jsx("div",{className:"specs-swatch-list",children:a.map(l=>r.jsxs("div",{className:"specs-swatch-item",children:[r.jsx("span",{className:"specs-swatch-box",style:{backgroundColor:l.hex},"aria-hidden":"true"}),r.jsx("span",{children:l.label})]},`${l.label}-${l.hex}`))})}function k0(){const{specsAndInBox:i}=qt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"specs-container",children:[r.jsx("h3",{className:"specs-title",children:"Specifications & What's Included"}),r.jsx(He,{variant:"elevated",padding:"md",children:r.jsxs("div",{className:"specs-card-content",children:[r.jsx("h4",{className:"specs-card-title",children:i.specificationsTitle}),r.jsx("div",{className:"specs-list",children:i.specifications.map(a=>r.jsxs("div",{className:"specs-row",children:[r.jsx("div",{className:"specs-label",children:a.label}),r.jsx("div",{className:"specs-value",children:r.jsx(Cd,{value:a.value})})]},a.label))})]})}),r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[r.jsxs("div",{className:"inbox-header",children:[r.jsx("h4",{className:"specs-card-title",children:i.inBoxTitle}),r.jsx(it,{label:i.inBoxBadge,variant:"neutral",size:"sm"})]}),r.jsx("div",{className:"inbox-list",children:i.inBoxItems.map(a=>r.jsxs("div",{className:"inbox-item",children:["• ",a]},a))})]})}),r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[r.jsx("h4",{className:"specs-card-title",children:i.productDetailsTitle}),r.jsx("div",{className:"details-list",children:i.productDetails.map(a=>r.jsxs("div",{children:[r.jsx("div",{className:"details-item-label",children:a.label}),r.jsx("div",{className:"details-item-value",children:r.jsx(Cd,{value:a.value})})]},a.label))})]})})]})]})}function S0(){const{faq:i}=qt();return i.items.length===0?null:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:i.title}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px"},children:i.items.map(a=>r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--foreground)"},children:a.question}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"22px",fontWeight:"400",color:"var(--muted-foreground)"},children:a.answer})]})},a.question))})]})}function j0(){const{addItem:i}=Vn(),{relatedProducts:a}=qt();return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:a.title}),r.jsx(We,{variant:"secondary",size:"sm",label:a.viewAllLabel})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:a.items.map(l=>r.jsx(He,{variant:"elevated",mediaSlot:r.jsxs("div",{style:{position:"relative",width:"100%",height:"220px"},children:[l.imageUrl?r.jsx("img",{src:l.imageUrl,alt:l.imageAlt||l.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--muted)"}}),r.jsx("div",{style:{position:"absolute",top:"12px",left:"12px"},children:r.jsx(it,{label:l.badge,variant:"neutral",size:"sm"})})]}),footerSlot:r.jsx(We,{variant:"primary",size:"md",label:a.addToCartLabel,disabled:!l.variantId,onClick:()=>{l.variantId&&i(l.variantId)}}),children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.name}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.descriptor}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.featureLine}),r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.price})]})},l.id))})]})}function b0(){const{hasProduct:i,isLoading:a}=qt();return a?r.jsx(fy,{}):i?r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("section",{style:{paddingTop:"24px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:r.jsx(he,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsx(o0,{}),r.jsx(r0,{}),r.jsx(f0,{})]})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(he,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"},children:[r.jsx(g0,{}),r.jsx(k0,{})]})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:r.jsx(he,{children:r.jsx(y0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(he,{children:r.jsx(x0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(he,{children:r.jsx(S0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"48px",backgroundColor:"var(--card)"},children:r.jsx(he,{children:r.jsx(j0,{})})})]}):r.jsx("section",{style:{paddingTop:"64px",paddingBottom:"80px",backgroundColor:"var(--card)"},children:r.jsx(he,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[r.jsx("h1",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"32px",lineHeight:"38px",color:"var(--foreground)"},children:"Product unavailable"}),r.jsx("p",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",color:"var(--muted-foreground)"},children:"This product could not be loaded for the requested handle."})]})})})}function C0({query:i,onQueryChange:a,onSearch:l,isSearching:c=!1}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("form",{className:"product-search-form",onSubmit:p=>{p.preventDefault(),l()},children:[r.jsxs("div",{className:"product-search-input-wrapper",children:[r.jsx("div",{className:"product-search-icon",children:r.jsx(vg,{size:20,color:"var(--muted-foreground)",strokeWidth:2})}),r.jsx("input",{type:"text",placeholder:"Search curated gear…",value:i,onChange:p=>a(p.target.value),className:"product-search-input","aria-label":"Search products",onFocus:p=>{p.target.style.borderColor="var(--ring)",p.target.style.boxShadow="0 0 0 4px rgba(105, 65, 198, 0.12), 0 1px 2px 0 rgba(16, 24, 40, 0.05)"},onBlur:p=>{p.target.style.borderColor="var(--border)",p.target.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.05)"}})]}),r.jsx("div",{className:"product-search-button-wrapper",children:r.jsx(We,{variant:"primary",size:"md",label:c?"Searching...":"Search",disabled:c,fullWidth:!0})})]})]})}const sl=15;function E0({filters:i,activeFilter:a,onFilterChange:l,resetLabel:c}){var C,h;const[p,f]=_.useState(!1),m=(C=i.find(w=>w.id===a))==null?void 0:C.label,x=i.length>sl,S=p?i:i.slice(0,sl),j=i.length-sl;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs(rp,{wrap:"on",gap:10,align:"center",className:"product-filters-wrapper",children:[r.jsx("span",{className:"filter-label",children:"Filter:"}),S.map(w=>r.jsx("button",{onClick:()=>l(w.id),className:"filter-chip",style:{backgroundColor:a===w.id?"var(--accent)":"var(--muted)",border:a===w.id?"1px solid var(--ring)":"1px solid var(--border)",color:a===w.id?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:T=>{a!==w.id&&(T.currentTarget.style.backgroundColor="var(--muted)",T.currentTarget.style.borderColor="var(--border)")},onMouseLeave:T=>{a!==w.id&&(T.currentTarget.style.backgroundColor="var(--muted)",T.currentTarget.style.borderColor="var(--border)")},children:w.label},w.id)),x&&r.jsx("button",{onClick:()=>f(!p),className:"filter-chip",style:{backgroundColor:"transparent",border:"1px solid var(--border)",color:"var(--muted-foreground)"},onMouseEnter:w=>{w.currentTarget.style.backgroundColor="var(--muted)",w.currentTarget.style.color="var(--foreground)"},onMouseLeave:w=>{w.currentTarget.style.backgroundColor="transparent",w.currentTarget.style.color="var(--muted-foreground)"},children:p?"Show less":`+${j} more`}),r.jsx("div",{className:"filter-spacer"}),m&&a!==((h=i[0])==null?void 0:h.id)&&r.jsxs("button",{onClick:()=>{var w;return l(((w=i[0])==null?void 0:w.id)??"all")},className:"filter-reset-button",onMouseEnter:w=>{w.currentTarget.style.color="var(--foreground)"},onMouseLeave:w=>{w.currentTarget.style.color="var(--muted-foreground)"},children:[r.jsx(jl,{size:14,strokeWidth:2.5}),c??"Reset filters"]})]})]})}var I0=Rd();const T0=_d(I0);function F0(i){if(typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",a.appendChild(l),l.styleSheet?l.styleSheet.cssText=i:l.appendChild(document.createTextNode(i))}const _0=i=>{switch(i){case"success":return z0;case"info":return P0;case"warning":return A0;case"error":return L0;default:return null}},R0=Array(12).fill(0),N0=({visible:i,className:a})=>O.createElement("div",{className:["sonner-loading-wrapper",a].filter(Boolean).join(" "),"data-visible":i},O.createElement("div",{className:"sonner-spinner"},R0.map((l,c)=>O.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${c}`})))),z0=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),A0=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),P0=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),L0=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),D0=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},O.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),O.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),M0=()=>{const[i,a]=O.useState(document.hidden);return O.useEffect(()=>{const l=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",l),()=>window.removeEventListener("visibilitychange",l)},[]),i};let fl=1;class O0{constructor(){this.subscribe=a=>(this.subscribers.push(a),()=>{const l=this.subscribers.indexOf(a);this.subscribers.splice(l,1)}),this.publish=a=>{this.subscribers.forEach(l=>l(a))},this.addToast=a=>{this.publish(a),this.toasts=[...this.toasts,a]},this.create=a=>{var l;const{message:c,...p}=a,f=typeof(a==null?void 0:a.id)=="number"||((l=a.id)==null?void 0:l.length)>0?a.id:fl++,m=this.toasts.find(S=>S.id===f),x=a.dismissible===void 0?!0:a.dismissible;return this.dismissedToasts.has(f)&&this.dismissedToasts.delete(f),m?this.toasts=this.toasts.map(S=>S.id===f?(this.publish({...S,...a,id:f,title:c}),{...S,...a,id:f,dismissible:x,title:c}):S):this.addToast({title:c,...p,dismissible:x,id:f}),f},this.dismiss=a=>(a?(this.dismissedToasts.add(a),requestAnimationFrame(()=>this.subscribers.forEach(l=>l({id:a,dismiss:!0})))):this.toasts.forEach(l=>{this.subscribers.forEach(c=>c({id:l.id,dismiss:!0}))}),a),this.message=(a,l)=>this.create({...l,message:a}),this.error=(a,l)=>this.create({...l,message:a,type:"error"}),this.success=(a,l)=>this.create({...l,type:"success",message:a}),this.info=(a,l)=>this.create({...l,type:"info",message:a}),this.warning=(a,l)=>this.create({...l,type:"warning",message:a}),this.loading=(a,l)=>this.create({...l,type:"loading",message:a}),this.promise=(a,l)=>{if(!l)return;let c;l.loading!==void 0&&(c=this.create({...l,promise:a,type:"loading",message:l.loading,description:typeof l.description!="function"?l.description:void 0}));const p=Promise.resolve(a instanceof Function?a():a);let f=c!==void 0,m;const x=p.then(async j=>{if(m=["resolve",j],O.isValidElement(j))f=!1,this.create({id:c,type:"default",message:j});else if($0(j)&&!j.ok){f=!1;const h=typeof l.error=="function"?await l.error(`HTTP error! status: ${j.status}`):l.error,w=typeof l.description=="function"?await l.description(`HTTP error! status: ${j.status}`):l.description,R=typeof h=="object"&&!O.isValidElement(h)?h:{message:h};this.create({id:c,type:"error",description:w,...R})}else if(j instanceof Error){f=!1;const h=typeof l.error=="function"?await l.error(j):l.error,w=typeof l.description=="function"?await l.description(j):l.description,R=typeof h=="object"&&!O.isValidElement(h)?h:{message:h};this.create({id:c,type:"error",description:w,...R})}else if(l.success!==void 0){f=!1;const h=typeof l.success=="function"?await l.success(j):l.success,w=typeof l.description=="function"?await l.description(j):l.description,R=typeof h=="object"&&!O.isValidElement(h)?h:{message:h};this.create({id:c,type:"success",description:w,...R})}}).catch(async j=>{if(m=["reject",j],l.error!==void 0){f=!1;const C=typeof l.error=="function"?await l.error(j):l.error,h=typeof l.description=="function"?await l.description(j):l.description,T=typeof C=="object"&&!O.isValidElement(C)?C:{message:C};this.create({id:c,type:"error",description:h,...T})}}).finally(()=>{f&&(this.dismiss(c),c=void 0),l.finally==null||l.finally.call(l)}),S=()=>new Promise((j,C)=>x.then(()=>m[0]==="reject"?C(m[1]):j(m[1])).catch(C));return typeof c!="string"&&typeof c!="number"?{unwrap:S}:Object.assign(c,{unwrap:S})},this.custom=(a,l)=>{const c=(l==null?void 0:l.id)||fl++;return this.create({jsx:a(c),id:c,...l}),c},this.getActiveToasts=()=>this.toasts.filter(a=>!this.dismissedToasts.has(a.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const wt=new O0,B0=(i,a)=>{const l=(a==null?void 0:a.id)||fl++;return wt.addToast({title:i,...a,id:l}),l},$0=i=>i&&typeof i=="object"&&"ok"in i&&typeof i.ok=="boolean"&&"status"in i&&typeof i.status=="number",U0=B0,H0=()=>wt.toasts,W0=()=>wt.getActiveToasts(),Ed=Object.assign(U0,{success:wt.success,info:wt.info,warning:wt.warning,error:wt.error,custom:wt.custom,message:wt.message,promise:wt.promise,dismiss:wt.dismiss,loading:wt.loading},{getHistory:H0,getToasts:W0});F0("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function ss(i){return i.label!==void 0}const V0=3,q0="24px",Q0="16px",Id=4e3,Y0=356,K0=14,X0=45,G0=200;function Zt(...i){return i.filter(Boolean).join(" ")}function J0(i){const[a,l]=i.split("-"),c=[];return a&&c.push(a),l&&c.push(l),c}const Z0=i=>{var a,l,c,p,f,m,x,S,j;const{invert:C,toast:h,unstyled:w,interacting:T,setHeights:R,visibleToasts:M,heights:A,index:U,toasts:K,expanded:te,removeToast:re,defaultRichColors:ee,closeButton:ae,style:ve,cancelButtonStyle:Te,actionButtonStyle:Le,className:Be="",descriptionClassName:we="",duration:Ne,position:ze,gap:Ke,expandByDefault:Ce,classNames:ne,icons:ce,closeButtonAriaLabel:D="Close toast"}=i,[V,B]=O.useState(null),[v,F]=O.useState(null),[H,G]=O.useState(!1),[ie,X]=O.useState(!1),[de,le]=O.useState(!1),[pe,Ae]=O.useState(!1),[en,yn]=O.useState(!1),[kt,Qt]=O.useState(0),[Vo,Dr]=O.useState(0),tn=O.useRef(h.duration||Ne||Id),Mr=O.useRef(null),St=O.useRef(null),qn=U===0,vn=U+1<=M,et=h.type,nn=h.dismissible!==!1,qo=h.className||"",Qo=h.descriptionClassName||"",Qn=O.useMemo(()=>A.findIndex(se=>se.toastId===h.id)||0,[A,h.id]),Or=O.useMemo(()=>{var se;return(se=h.closeButton)!=null?se:ae},[h.closeButton,ae]),Yn=O.useMemo(()=>h.duration||Ne||Id,[h.duration,Ne]),cr=O.useRef(0),Tt=O.useRef(0),wn=O.useRef(0),kn=O.useRef(null),[Yo,Ko]=ze.split("-"),Xo=O.useMemo(()=>A.reduce((se,De,qe)=>qe>=Qn?se:se+De.height,0),[A,Qn]),dr=M0(),Br=h.invert||C,Kn=et==="loading";Tt.current=O.useMemo(()=>Qn*Ke+Xo,[Qn,Xo]),O.useEffect(()=>{tn.current=Yn},[Yn]),O.useEffect(()=>{G(!0)},[]),O.useEffect(()=>{const se=St.current;if(se){const De=se.getBoundingClientRect().height;return Dr(De),R(qe=>[{toastId:h.id,height:De,position:h.position},...qe]),()=>R(qe=>qe.filter(st=>st.toastId!==h.id))}},[R,h.id]),O.useLayoutEffect(()=>{if(!H)return;const se=St.current,De=se.style.height;se.style.height="auto";const qe=se.getBoundingClientRect().height;se.style.height=De,Dr(qe),R(st=>st.find($e=>$e.toastId===h.id)?st.map($e=>$e.toastId===h.id?{...$e,height:qe}:$e):[{toastId:h.id,height:qe,position:h.position},...st])},[H,h.title,h.description,R,h.id]);const Ft=O.useCallback(()=>{X(!0),Qt(Tt.current),R(se=>se.filter(De=>De.toastId!==h.id)),setTimeout(()=>{re(h)},G0)},[h,re,R,Tt]);O.useEffect(()=>{if(h.promise&&et==="loading"||h.duration===1/0||h.type==="loading")return;let se;return te||T||dr?(()=>{if(wn.current<cr.current){const st=new Date().getTime()-cr.current;tn.current=tn.current-st}wn.current=new Date().getTime()})():(()=>{tn.current!==1/0&&(cr.current=new Date().getTime(),se=setTimeout(()=>{h.onAutoClose==null||h.onAutoClose.call(h,h),Ft()},tn.current))})(),()=>clearTimeout(se)},[te,T,h,et,dr,Ft]),O.useEffect(()=>{h.delete&&Ft()},[Ft,h.delete]);function $r(){var se;if(ce!=null&&ce.loading){var De;return O.createElement("div",{className:Zt(ne==null?void 0:ne.loader,h==null||(De=h.classNames)==null?void 0:De.loader,"sonner-loader"),"data-visible":et==="loading"},ce.loading)}return O.createElement(N0,{className:Zt(ne==null?void 0:ne.loader,h==null||(se=h.classNames)==null?void 0:se.loader),visible:et==="loading"})}const Sn=h.icon||(ce==null?void 0:ce[et])||_0(et);var rn,Ur;return O.createElement("li",{tabIndex:0,ref:St,className:Zt(Be,qo,ne==null?void 0:ne.toast,h==null||(a=h.classNames)==null?void 0:a.toast,ne==null?void 0:ne.default,ne==null?void 0:ne[et],h==null||(l=h.classNames)==null?void 0:l[et]),"data-sonner-toast":"","data-rich-colors":(rn=h.richColors)!=null?rn:ee,"data-styled":!(h.jsx||h.unstyled||w),"data-mounted":H,"data-promise":!!h.promise,"data-swiped":en,"data-removed":ie,"data-visible":vn,"data-y-position":Yo,"data-x-position":Ko,"data-index":U,"data-front":qn,"data-swiping":de,"data-dismissible":nn,"data-type":et,"data-invert":Br,"data-swipe-out":pe,"data-swipe-direction":v,"data-expanded":!!(te||Ce&&H),style:{"--index":U,"--toasts-before":U,"--z-index":K.length-U,"--offset":`${ie?kt:Tt.current}px`,"--initial-height":Ce?"auto":`${Vo}px`,...ve,...h.style},onDragEnd:()=>{le(!1),B(null),kn.current=null},onPointerDown:se=>{Kn||!nn||(Mr.current=new Date,Qt(Tt.current),se.target.setPointerCapture(se.pointerId),se.target.tagName!=="BUTTON"&&(le(!0),kn.current={x:se.clientX,y:se.clientY}))},onPointerUp:()=>{var se,De,qe;if(pe||!nn)return;kn.current=null;const st=Number(((se=St.current)==null?void 0:se.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),jn=Number(((De=St.current)==null?void 0:De.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),$e=new Date().getTime()-((qe=Mr.current)==null?void 0:qe.getTime()),Xe=V==="x"?st:jn,bn=Math.abs(Xe)/$e;if(Math.abs(Xe)>=X0||bn>.11){Qt(Tt.current),h.onDismiss==null||h.onDismiss.call(h,h),F(V==="x"?st>0?"right":"left":jn>0?"down":"up"),Ft(),Ae(!0);return}else{var tt,jt;(tt=St.current)==null||tt.style.setProperty("--swipe-amount-x","0px"),(jt=St.current)==null||jt.style.setProperty("--swipe-amount-y","0px")}yn(!1),le(!1),B(null)},onPointerMove:se=>{var De,qe,st;if(!kn.current||!nn||((De=window.getSelection())==null?void 0:De.toString().length)>0)return;const $e=se.clientY-kn.current.y,Xe=se.clientX-kn.current.x;var bn;const tt=(bn=i.swipeDirections)!=null?bn:J0(ze);!V&&(Math.abs(Xe)>1||Math.abs($e)>1)&&B(Math.abs(Xe)>Math.abs($e)?"x":"y");let jt={x:0,y:0};const Cn=_t=>1/(1.5+Math.abs(_t)/20);if(V==="y"){if(tt.includes("top")||tt.includes("bottom"))if(tt.includes("top")&&$e<0||tt.includes("bottom")&&$e>0)jt.y=$e;else{const _t=$e*Cn($e);jt.y=Math.abs(_t)<Math.abs($e)?_t:$e}}else if(V==="x"&&(tt.includes("left")||tt.includes("right")))if(tt.includes("left")&&Xe<0||tt.includes("right")&&Xe>0)jt.x=Xe;else{const _t=Xe*Cn(Xe);jt.x=Math.abs(_t)<Math.abs(Xe)?_t:Xe}(Math.abs(jt.x)>0||Math.abs(jt.y)>0)&&yn(!0),(qe=St.current)==null||qe.style.setProperty("--swipe-amount-x",`${jt.x}px`),(st=St.current)==null||st.style.setProperty("--swipe-amount-y",`${jt.y}px`)}},Or&&!h.jsx&&et!=="loading"?O.createElement("button",{"aria-label":D,"data-disabled":Kn,"data-close-button":!0,onClick:Kn||!nn?()=>{}:()=>{Ft(),h.onDismiss==null||h.onDismiss.call(h,h)},className:Zt(ne==null?void 0:ne.closeButton,h==null||(c=h.classNames)==null?void 0:c.closeButton)},(Ur=ce==null?void 0:ce.close)!=null?Ur:D0):null,(et||h.icon||h.promise)&&h.icon!==null&&((ce==null?void 0:ce[et])!==null||h.icon)?O.createElement("div",{"data-icon":"",className:Zt(ne==null?void 0:ne.icon,h==null||(p=h.classNames)==null?void 0:p.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||$r():null,h.type!=="loading"?Sn:null):null,O.createElement("div",{"data-content":"",className:Zt(ne==null?void 0:ne.content,h==null||(f=h.classNames)==null?void 0:f.content)},O.createElement("div",{"data-title":"",className:Zt(ne==null?void 0:ne.title,h==null||(m=h.classNames)==null?void 0:m.title)},h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title),h.description?O.createElement("div",{"data-description":"",className:Zt(we,Qo,ne==null?void 0:ne.description,h==null||(x=h.classNames)==null?void 0:x.description)},typeof h.description=="function"?h.description():h.description):null),O.isValidElement(h.cancel)?h.cancel:h.cancel&&ss(h.cancel)?O.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||Te,onClick:se=>{ss(h.cancel)&&nn&&(h.cancel.onClick==null||h.cancel.onClick.call(h.cancel,se),Ft())},className:Zt(ne==null?void 0:ne.cancelButton,h==null||(S=h.classNames)==null?void 0:S.cancelButton)},h.cancel.label):null,O.isValidElement(h.action)?h.action:h.action&&ss(h.action)?O.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||Le,onClick:se=>{ss(h.action)&&(h.action.onClick==null||h.action.onClick.call(h.action,se),!se.defaultPrevented&&Ft())},className:Zt(ne==null?void 0:ne.actionButton,h==null||(j=h.classNames)==null?void 0:j.actionButton)},h.action.label):null)};function Td(){if(typeof window>"u"||typeof document>"u")return"ltr";const i=document.documentElement.getAttribute("dir");return i==="auto"||!i?window.getComputedStyle(document.documentElement).direction:i}function ev(i,a){const l={};return[i,a].forEach((c,p)=>{const f=p===1,m=f?"--mobile-offset":"--offset",x=f?Q0:q0;function S(j){["top","right","bottom","left"].forEach(C=>{l[`${m}-${C}`]=typeof j=="number"?`${j}px`:j})}typeof c=="number"||typeof c=="string"?S(c):typeof c=="object"?["top","right","bottom","left"].forEach(j=>{c[j]===void 0?l[`${m}-${j}`]=x:l[`${m}-${j}`]=typeof c[j]=="number"?`${c[j]}px`:c[j]}):S(x)}),l}const tv=O.forwardRef(function(a,l){const{invert:c,position:p="bottom-right",hotkey:f=["altKey","KeyT"],expand:m,closeButton:x,className:S,offset:j,mobileOffset:C,theme:h="light",richColors:w,duration:T,style:R,visibleToasts:M=V0,toastOptions:A,dir:U=Td(),gap:K=K0,icons:te,containerAriaLabel:re="Notifications"}=a,[ee,ae]=O.useState([]),ve=O.useMemo(()=>Array.from(new Set([p].concat(ee.filter(v=>v.position).map(v=>v.position)))),[ee,p]),[Te,Le]=O.useState([]),[Be,we]=O.useState(!1),[Ne,ze]=O.useState(!1),[Ke,Ce]=O.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),ne=O.useRef(null),ce=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),D=O.useRef(null),V=O.useRef(!1),B=O.useCallback(v=>{ae(F=>{var H;return(H=F.find(G=>G.id===v.id))!=null&&H.delete||wt.dismiss(v.id),F.filter(({id:G})=>G!==v.id)})},[]);return O.useEffect(()=>wt.subscribe(v=>{if(v.dismiss){requestAnimationFrame(()=>{ae(F=>F.map(H=>H.id===v.id?{...H,delete:!0}:H))});return}setTimeout(()=>{T0.flushSync(()=>{ae(F=>{const H=F.findIndex(G=>G.id===v.id);return H!==-1?[...F.slice(0,H),{...F[H],...v},...F.slice(H+1)]:[v,...F]})})})}),[ee]),O.useEffect(()=>{if(h!=="system"){Ce(h);return}if(h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Ce("dark"):Ce("light")),typeof window>"u")return;const v=window.matchMedia("(prefers-color-scheme: dark)");try{v.addEventListener("change",({matches:F})=>{Ce(F?"dark":"light")})}catch{v.addListener(({matches:H})=>{try{Ce(H?"dark":"light")}catch(G){console.error(G)}})}},[h]),O.useEffect(()=>{ee.length<=1&&we(!1)},[ee]),O.useEffect(()=>{const v=F=>{var H;if(f.every(X=>F[X]||F.code===X)){var ie;we(!0),(ie=ne.current)==null||ie.focus()}F.code==="Escape"&&(document.activeElement===ne.current||(H=ne.current)!=null&&H.contains(document.activeElement))&&we(!1)};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[f]),O.useEffect(()=>{if(ne.current)return()=>{D.current&&(D.current.focus({preventScroll:!0}),D.current=null,V.current=!1)}},[ne.current]),O.createElement("section",{ref:l,"aria-label":`${re} ${ce}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},ve.map((v,F)=>{var H;const[G,ie]=v.split("-");return ee.length?O.createElement("ol",{key:v,dir:U==="auto"?Td():U,tabIndex:-1,ref:ne,className:S,"data-sonner-toaster":!0,"data-sonner-theme":Ke,"data-y-position":G,"data-lifted":Be&&ee.length>1&&!m,"data-x-position":ie,style:{"--front-toast-height":`${((H=Te[0])==null?void 0:H.height)||0}px`,"--width":`${Y0}px`,"--gap":`${K}px`,...R,...ev(j,C)},onBlur:X=>{V.current&&!X.currentTarget.contains(X.relatedTarget)&&(V.current=!1,D.current&&(D.current.focus({preventScroll:!0}),D.current=null))},onFocus:X=>{X.target instanceof HTMLElement&&X.target.dataset.dismissible==="false"||V.current||(V.current=!0,D.current=X.relatedTarget)},onMouseEnter:()=>we(!0),onMouseMove:()=>we(!0),onMouseLeave:()=>{Ne||we(!1)},onDragEnd:()=>we(!1),onPointerDown:X=>{X.target instanceof HTMLElement&&X.target.dataset.dismissible==="false"||ze(!0)},onPointerUp:()=>ze(!1)},ee.filter(X=>!X.position&&F===0||X.position===v).map((X,de)=>{var le,pe;return O.createElement(Z0,{key:X.id,icons:te,index:de,toast:X,defaultRichColors:w,duration:(le=A==null?void 0:A.duration)!=null?le:T,className:A==null?void 0:A.className,descriptionClassName:A==null?void 0:A.descriptionClassName,invert:c,visibleToasts:M,closeButton:(pe=A==null?void 0:A.closeButton)!=null?pe:x,interacting:Ne,position:v,style:A==null?void 0:A.style,unstyled:A==null?void 0:A.unstyled,classNames:A==null?void 0:A.classNames,cancelButtonStyle:A==null?void 0:A.cancelButtonStyle,actionButtonStyle:A==null?void 0:A.actionButtonStyle,closeButtonAriaLabel:A==null?void 0:A.closeButtonAriaLabel,removeToast:B,toasts:ee.filter(Ae=>Ae.position==X.position),heights:Te.filter(Ae=>Ae.position==X.position),setHeights:Le,expandByDefault:m,gap:K,expanded:Be,swipeDirections:a.swipeDirections})})):null}))});function nv({products:i}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"product-list-container",children:r.jsx("div",{className:"product-grid",children:i.length>0?i.map(a=>r.jsx(rv,{product:a},a.id)):r.jsx("div",{className:"no-products-message",children:"No products matched your search."})})})]})}function rv({product:i,isHoverPreview:a=!1}){const{addItem:l,openCartDrawer:c}=Vn(),p=`/products/${i.id}`;return r.jsxs("div",{role:a?void 0:"link",tabIndex:a?void 0:0,onClick:a?void 0:f=>{f.target.closest("button")||(window.location.href=p)},onKeyDown:a?void 0:f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),window.location.href=p)},style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"460px",maxHeight:"520px",boxShadow:a?"0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814":"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden",display:"flex",flexDirection:"column",cursor:a?"default":"pointer"},children:[r.jsxs("div",{style:{position:"relative",height:"220px",backgroundColor:"var(--muted)"},children:[i.imageUrl?r.jsx("img",{src:i.imageUrl,alt:i.imageAlt||i.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null,a?r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#10182808"}}):null,r.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",zIndex:a?1:"auto"},children:r.jsx(it,{label:i.badgeLabel,variant:i.badgeVariant,size:"sm"})}),r.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:a?1:"auto"},children:r.jsx("button",{style:{height:"32px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"8px",backgroundColor:"transparent",color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:"Save"})})]}),r.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"10px",flex:1},children:[r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)",margin:0},children:i.name}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical",overflow:"hidden"},children:i.descriptor}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.featureLine}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"auto",paddingTop:"8px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.priceLabel}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.shippingLabel})]})]}),r.jsx("div",{style:{padding:"16px",paddingTop:"0"},children:r.jsx(We,{variant:"primary",size:"md",label:i.isInStock?"Add to cart":"Out of stock",disabled:!i.isInStock||!i.variantId,onClick:async()=>{if(!i.variantId)return;if(!await l(i.variantId)){Ed.error("Unable to add item",{description:"Please try again.",duration:5e3});return}Ed.success("Added to cart",{description:`${i.name} is in your cart.`,duration:1/0,action:{label:"View cart",onClick:()=>c()},cancel:{label:"Close",onClick:()=>{}}})},fullWidth:!0})})]})}function ov(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"products-page-header",children:[r.jsxs("div",{className:"products-page-header-content",children:[r.jsx("div",{className:"products-page-eyebrow",children:"Curated gear"}),r.jsx("h1",{className:"products-page-title",children:"Products"})]}),r.jsx("div",{className:"products-page-description",children:"Best-in-class essentials chosen for durability, clarity, and real daily use."})]})]})}function iv({resultCount:i}){const[a,l]=_.useState(!1),[c,p]=_.useState("Recommended"),f=["Recommended","Price: Low to High","Price: High to Low","Newest","Most Popular"];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"product-results-header",children:[r.jsxs("div",{className:"results-count",children:["Showing ",r.jsx("span",{className:"results-count-number",children:i})," ","results"]}),r.jsxs("div",{className:"sort-controls",children:[r.jsx("span",{className:"sort-label",children:"Sort by:"}),r.jsxs("div",{className:"sort-dropdown-wrapper",children:[r.jsxs("button",{onClick:()=>l(!a),className:"sort-button",onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--muted)",m.currentTarget.style.borderColor="var(--border)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="var(--card)",m.currentTarget.style.borderColor="var(--border)"},children:[c,r.jsx(Mh,{size:16,color:"var(--muted-foreground)",style:{transition:"transform 150ms ease",transform:a?"rotate(180deg)":"rotate(0deg)"}})]}),a&&r.jsx("div",{className:"sort-dropdown",children:f.map(m=>r.jsx("button",{onClick:()=>{p(m),l(!1)},className:"sort-option",style:{backgroundColor:c===m?"var(--muted)":"transparent",fontWeight:c===m?"600":"500",color:c===m?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:x=>{c!==m&&(x.currentTarget.style.backgroundColor="var(--muted)")},onMouseLeave:x=>{c!==m&&(x.currentTarget.style.backgroundColor="transparent")},children:m},m))})]})]})]})]})}const sv={id:ls,label:Ay},av=i=>{const a=new Set;return i.flatMap(c=>c.categoryIds.map((p,f)=>({id:p,label:c.categoryLabels[f]??c.categoryIds[f]}))).filter(c=>!c.id||a.has(c.id)?!1:(a.add(c.id),!0))};function lv(i){const a=av(i);return{filters:[sv,...a],isLoading:!1,resetLabel:"Reset filters"}}const uv=120,cv=(i,a)=>{const l=Number.parseFloat(i);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:a,maximumFractionDigits:0}).format(l):`${a} ${i}`},dv=i=>{var a;return i.availableForSale===!1?!1:typeof i.totalInventory=="number"?i.totalInventory>0:((a=i.variants)==null?void 0:a.edges.some(l=>{const c=l.node;return c.availableForSale===!1?!1:typeof c.quantityAvailable=="number"?c.quantityAvailable>0:c.availableForSale===!0}))??!0},pv=i=>{var l,c,p,f;const a=(c=(l=i.variants)==null?void 0:l.edges.find(m=>{const x=m.node;return x.availableForSale&&(typeof x.quantityAvailable!="number"||x.quantityAvailable>0)}))==null?void 0:c.node;return(a==null?void 0:a.id)||((f=(p=i.variants)==null?void 0:p.edges[0])==null?void 0:f.node.id)||null},fv=(i,a=uv)=>{const l=i.replace(/\s+/g," ").trim();return l.length<=a?l:`${l.slice(0,a).trimEnd()}...`},Fd=i=>{var j,C,h,w;const a=((j=i.shortDescription)==null?void 0:j.value)||i.description||"Curated by Vibe Station",l=fv(a),c=((C=i.featureLine)==null?void 0:C.value)||i.tags.slice(0,3).join(" · ")||"Durable build",p=((h=i.shippingInfo)==null?void 0:h.value)||"Shipping calculated at checkout",f=((w=i.badge)==null?void 0:w.value)||i.tags[0]||"Curated",m=ms(i),x=Array.from(new Set(i.tags.map(T=>T.trim()).filter(Boolean))),S=x.map(T=>op(T)).filter(Boolean);return{id:i.handle,variantId:pv(i),name:i.title,descriptor:l,featureLine:c,priceLabel:cv(i.priceRange.minVariantPrice.amount,i.priceRange.minVariantPrice.currencyCode),shippingLabel:p,isInStock:dv(i),badgeLabel:f,badgeVariant:"accent",imageUrl:m==null?void 0:m.url,imageAlt:m==null?void 0:m.altText,categoryIds:S,categoryLabels:x}};let Lo=[],ml=!1,To=null;const Do=new Map,hl=new Set,al=new Map,pp=i=>(i==null?void 0:i.trim())??"",mv=async i=>{const a=pp(i);if(!a)return To||(To=(async()=>{try{Lo=(await Oo({first:24})).edges.map(f=>Fd(f.node))}catch(p){console.error("Failed to load products from Shopify",p),Lo=[]}finally{ml=!0,To=null}})(),To);const l=al.get(a);if(l)return l;const c=(async()=>{try{const f=(await Oo({first:24,query:a})).edges.map(m=>Fd(m.node));Do.set(a,f)}catch(p){console.error("Failed to load searched products from Shopify",p),Do.set(a,[])}finally{hl.add(a),al.delete(a)}})();return al.set(a,c),c};function hv(i){const a=pp(i),[l,c]=_.useState(a?Do.get(a)??[]:Lo),[p,f]=_.useState(a?!hl.has(a):!ml);return _.useEffect(()=>{let m=!1;return(a?hl.has(a):ml)?(c(a?Do.get(a)??[]:Lo),f(!1),()=>{m=!0}):(f(!0),mv(a).then(()=>{m||(c(a?Do.get(a)??[]:Lo),f(!1))}),()=>{m=!0})},[a]),{products:l,hoverPreviewProduct:l[0],isLoading:p}}function gv(){const[i,a]=_.useState(""),[l,c]=_.useState(""),[p,f]=_.useState(ls),[m,x]=_.useState(!1),{products:S,isLoading:j}=hv(l),{filters:C,resetLabel:h}=lv(S),w=p===ls?S:S.filter(T=>T.categoryIds.includes(p));return _.useEffect(()=>{j||x(!0)},[j]),_.useEffect(()=>{C.some(T=>T.id===p)||f(ls)},[p,C]),!m&&j?r.jsx(py,{}):r.jsx(ot,{paddingTop:"48px",paddingBottom:"72px",background:"var(--background)",children:r.jsxs(he,{children:[r.jsx(xv,{}),r.jsx(yv,{searchInput:i,onSearchInputChange:a,onSearchSubmit:()=>c(i.trim()),isSearching:j,activeFilter:p,onFilterChange:f,filters:C,resetLabel:h,resultCount:w.length,products:w})]})})}function xv(){return r.jsx(ov,{})}function yv({searchInput:i,onSearchInputChange:a,onSearchSubmit:l,isSearching:c,activeFilter:p,onFilterChange:f,filters:m,resetLabel:x,resultCount:S,products:j}){return r.jsxs(Se,{gap:"16px",children:[r.jsx(C0,{query:i,onQueryChange:a,onSearch:l,isSearching:c}),r.jsx(E0,{filters:m,activeFilter:p,onFilterChange:f,resetLabel:x}),r.jsx(iv,{resultCount:S}),r.jsx(nv,{products:j})]})}function fp({id:i,name:a,variant:l,price:c,quantity:p,imageUrl:f,imageAlt:m,onIncrement:x,onDecrement:S,onRemove:j}){return r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"flex-start"},children:[r.jsx("div",{style:{width:"72px",height:"72px",backgroundColor:"var(--muted)",borderRadius:"12px",flexShrink:0,overflow:"hidden"},children:f?r.jsx("img",{src:f,alt:m||a,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"6px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:a}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:c})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-end"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(We,{variant:"ghost",size:"sm",label:"−",onClick:S?()=>S(i):void 0}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif",minWidth:"20px",textAlign:"center"},children:p}),r.jsx(We,{variant:"ghost",size:"sm",label:"+",onClick:x?()=>x(i):void 0})]}),r.jsx(We,{variant:"ghost",size:"sm",label:"Remove",onClick:j?()=>j(i):void 0})]})]})})}const vv={title:"Cart",yourCartTitle:"Your cart",addOnsTitle:"Add-ons you may like",summaryTitle:"Order summary",subtotalLabel:"Subtotal",shippingLabel:"Shipping",shippingValue:"Calculated at checkout",totalLabel:"Total",taxesLine:"Taxes and shipping calculated at checkout.",drawerCheckoutLabel:"Checkout",drawerContinueLabel:"Continue shopping",drawerFooterCaption:"You'll complete payment in checkout.",emptyCartMessage:"Your cart is empty.",summaryCheckoutLabel:"Checkout",summaryContinueLabel:"Continue shopping",writeItemSuffix:"items",addButtonLabel:"Add"};let Mo=[],gl=!1,Fo=null;const wv=async()=>Fo||(Fo=(async()=>{try{Mo=(await Oo({first:2})).edges.map(a=>{const l=ms(a.node);return{id:a.node.handle,name:a.node.title,price:Number.parseFloat(a.node.priceRange.minVariantPrice.amount),imageUrl:l==null?void 0:l.url,imageAlt:(l==null?void 0:l.altText)||a.node.title}})}catch(i){console.error("Failed to load cart add-ons from Shopify",i),Mo=[]}finally{gl=!0,Fo=null}})(),Fo);function Wo(){const[i,a]=_.useState(Mo),[l,c]=_.useState(!gl);return _.useEffect(()=>{let p=!1;return gl?(a(Mo),c(!1),()=>{p=!0}):(wv().then(()=>{p||(a(Mo),c(!1))}),()=>{p=!0})},[]),{addOns:i,copy:vv,isLoading:l}}function kv(){const{items:i,incrementItem:a,decrementItem:l,removeItem:c}=Vn(),{addOns:p,copy:f}=Wo();return r.jsxs("div",{style:{flex:"0 0 65%",display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsx("h2",{style:{margin:0,fontSize:"30px",lineHeight:"38px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:f.yourCartTitle}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:i.map(m=>r.jsx(fp,{id:m.id,name:m.name,variant:m.variant,price:Bo(m.price),quantity:m.quantity,imageUrl:m.imageUrl,imageAlt:m.imageAlt,onIncrement:a,onDecrement:l,onRemove:c},m.id))}),r.jsx(He,{variant:"subtle",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:f.addOnsTitle}),r.jsx("div",{style:{display:"flex",gap:"16px"},children:p.map(m=>r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"200px"},children:[r.jsx("div",{style:{width:"100%",height:"160px",backgroundColor:"var(--muted)",borderRadius:"12px",overflow:"hidden"},children:m.imageUrl?r.jsx("img",{src:m.imageUrl,alt:m.imageAlt||m.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.name}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:Bo(m.price)}),r.jsx(We,{variant:"ghost",size:"sm",label:f.addButtonLabel})]})},m.id))})]})})]})}function Sv({title:i,subtitle:a,children:l,onClose:c,footer:p}){return r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:c,children:r.jsxs("div",{style:{width:"520px",maxWidth:"92%",backgroundColor:"var(--card)",borderRadius:"20px",border:"1px solid var(--border)",boxShadow:"0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814",padding:"20px",display:"flex",flexDirection:"column",gap:"16px",position:"relative"},onClick:f=>f.stopPropagation(),children:[(i||a)&&r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",position:"relative"},children:[r.jsxs("div",{children:[i&&r.jsx("div",{style:{fontSize:"18px",fontWeight:600,color:"var(--foreground)",lineHeight:"28px"},children:i}),a&&r.jsx("div",{style:{fontSize:"14px",color:"var(--muted-foreground)",lineHeight:"20px",marginTop:"4px"},children:a})]}),c&&r.jsx("div",{style:{position:"absolute",top:0,right:0},children:r.jsx("button",{onClick:c,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"Close"})})]}),r.jsx("div",{style:{flex:1,minHeight:"100px",display:"flex",flexDirection:"column",gap:"12px"},children:l}),p&&r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:p})]})})}function jv({itemCount:i,subtotal:a,onContinue:l,onBack:c,onClose:p}){return r.jsxs(Sv,{onClose:p,title:"Heading to checkout",subtitle:"You'll complete payment securely in checkout.",footer:r.jsx(Ev,{onContinue:l,onBack:c}),children:[r.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)",marginTop:"-8px"}}),r.jsx(bv,{itemCount:i,subtotal:a}),r.jsx(Cv,{})]})}function bv({itemCount:i,subtotal:a}){return r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(ll,{label:"Items",value:String(i),valueWeight:"600"}),r.jsx(ll,{label:"Shipping",value:"Calculated in checkout"}),r.jsx(ll,{label:"Total",value:Bo(a),valueWeight:"600",valueSize:"20px",valueLineHeight:"30px"}),r.jsx("div",{style:{marginTop:"6px"},children:r.jsx(it,{label:"No password needed",variant:"neutral",size:"sm"})})]})})}function ll({label:i,value:a,valueWeight:l="400",valueSize:c="14px",valueLineHeight:p="20px"}){return r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:i}),r.jsx("div",{style:{fontSize:c,lineHeight:p,fontWeight:l,color:"var(--foreground)"},children:a})]})}function Cv(){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx("div",{style:{position:"relative",height:"6px",width:"100%",backgroundColor:"var(--border)",borderRadius:"999px",overflow:"hidden"},children:r.jsx("div",{style:{position:"absolute",top:0,left:0,height:"6px",width:"45%",backgroundColor:"#4F46E5",borderRadius:"999px",transition:"width 0.3s ease-out"}})}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)"},children:"Preparing your checkout…"})]})}function Ev({onContinue:i,onBack:a}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"100%"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[r.jsx(We,{label:"Back to cart",variant:"ghost",size:"md",onClick:a}),r.jsx(We,{label:"Continue",variant:"primary",size:"md",onClick:i})]}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)",textAlign:"right"},children:"If checkout doesn't open, try again."})]})}function mp({subtotal:i=5997,total:a=5997}){const{copy:l}=Wo();return r.jsx(He,{variant:"elevated",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.summaryTitle}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.subtotalLabel}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:Bo(i)})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingLabel}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingValue})]}),r.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.totalLabel}),r.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:Bo(a)})]})]}),r.jsx(dp,{}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.taxesLine})]})})}function Iv(){const{cartCount:i,subtotal:a,total:l,checkout:c}=Vn(),{copy:p}=Wo(),[f,m]=_.useState(!1);return r.jsxs("div",{style:{flex:"0 0 35%",display:"flex",flexDirection:"column",gap:"16px",position:"sticky",top:"24px"},children:[r.jsx(mp,{subtotal:a,total:l}),r.jsx(We,{variant:"primary",size:"lg",label:p.summaryCheckoutLabel,onClick:()=>m(!0)}),r.jsx(We,{variant:"secondary",size:"lg",label:p.summaryContinueLabel,onClick:()=>{window.location.href="/products"}}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:p.taxesLine}),f?r.jsx(jv,{itemCount:i,subtotal:a,onBack:()=>m(!1),onClose:()=>m(!1),onContinue:()=>{c()}}):null]})}function Tv(){return r.jsx(ot,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:r.jsx(he,{children:r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start"},children:[r.jsx(kv,{}),r.jsx(Iv,{})]})})})}function Fv(){const{isLoading:i}=Wo();return i?r.jsx(my,{}):r.jsx(Tv,{})}function _v(){const{items:i,cartCount:a,subtotal:l,total:c,closeCartDrawer:p,incrementItem:f,decrementItem:m,removeItem:x}=Vn(),{copy:S}=Wo();return r.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:[r.jsx("div",{onClick:p,style:{position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.5)"}}),r.jsxs("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:"420px",backgroundColor:"var(--card)",borderLeft:"1px solid var(--border)",boxShadow:"-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"24px",borderBottom:"1px solid var(--border)",flexShrink:0},children:r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("h3",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:S.title}),r.jsx(it,{label:`${a} ${S.writeItemSuffix}`,variant:"neutral",size:"sm"})]})}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},children:[i.length?r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:i.map(j=>r.jsx(fp,{id:j.id,name:j.name,variant:j.variant,price:`₹${j.price.toLocaleString("en-IN")}`,quantity:j.quantity,imageUrl:j.imageUrl,imageAlt:j.imageAlt,onIncrement:f,onDecrement:m,onRemove:x},j.id))}):r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:S.emptyCartMessage}),r.jsx(mp,{subtotal:l,total:c})]}),r.jsxs("div",{style:{padding:"24px",borderTop:"1px solid var(--border)",flexShrink:0,display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(We,{variant:"primary",size:"lg",label:S.drawerCheckoutLabel,onClick:()=>{p(),window.location.href="/cart"}}),r.jsx(We,{variant:"secondary",size:"lg",label:S.drawerContinueLabel,onClick:p}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:S.drawerFooterCaption})]})]})]})}function Rv(){const i=window.location.pathname.replace(/\/+$/,"")||"/";if(i.startsWith("/products/"))return r.jsx(b0,{});if(/^\/account\/reset\/[^/]+\/[^/]+$/.test(i))return r.jsx(xd,{});switch(i){case"/":return r.jsx(hy,{});case"/products":return r.jsx(gv,{});case"/philosophy":return r.jsx(yy,{});case"/community":return r.jsx(_x,{});case"/cart":return r.jsx(Fv,{});case"/account":return r.jsx(Bg,{});case"/account/login":return r.jsx(Fg,{});case"/account/register":return r.jsx(_g,{});case"/account/password-reset":case"/account/forgot-password":return r.jsx(Rg,{});case"/account/password-reset/confirm":return r.jsx(xd,{});default:return r.jsx(Bx,{})}}function Nv(){const{isDrawerOpen:i}=Vn(),a=window.location.pathname.replace(/\/+$/,"")||"/",l=a==="/account"||a.startsWith("/account/");return r.jsxs(xx,{children:[Rv(),!l&&i?r.jsx(_v,{}):null]})}const zv=({...i})=>{const{theme:a="system"}=Cl();return r.jsx(tv,{theme:a,position:"top-center",className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...i})};function Av({children:i}){return r.jsxs(Gg,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[r.jsx(_h,{children:r.jsx(Qg,{children:i})}),r.jsx(zv,{})]})}const hp=document.getElementById("root");if(!hp)throw new Error('Root element with id "root" was not found.');xm.createRoot(hp).render(r.jsx(_.StrictMode,{children:r.jsx(Av,{children:r.jsx(Nv,{})})}));

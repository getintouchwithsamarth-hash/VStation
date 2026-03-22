(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(f){if(f.ep)return;f.ep=!0;const p=l(f);fetch(f.href,p)}})();function Ld(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ja={exports:{}},_o={},el={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function vm(){if(id)return fe;id=1;var i=Symbol.for("react.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),h=Symbol.iterator;function v(w){return w===null||typeof w!="object"?null:(w=h&&w[h]||w["@@iterator"],typeof w=="function"?w:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,R={};function z(w,F,H){this.props=w,this.context=F,this.refs=R,this.updater=H||I}z.prototype.isReactComponent={},z.prototype.setState=function(w,F){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,F,"setState")},z.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function le(){}le.prototype=z.prototype;function de(w,F,H){this.props=w,this.context=F,this.refs=R,this.updater=H||I}var ve=de.prototype=new le;ve.constructor=de,_(ve,z.prototype),ve.isPureReactComponent=!0;var Z=Array.isArray,oe=Object.prototype.hasOwnProperty,ie={current:null},we={key:!0,ref:!0,__self:!0,__source:!0};function Ee(w,F,H){var J,se={},X=null,me=null;if(F!=null)for(J in F.ref!==void 0&&(me=F.ref),F.key!==void 0&&(X=""+F.key),F)oe.call(F,J)&&!we.hasOwnProperty(J)&&(se[J]=F[J]);var ce=arguments.length-2;if(ce===1)se.children=H;else if(1<ce){for(var ge=Array(ce),De=0;De<ce;De++)ge[De]=arguments[De+2];se.children=ge}if(w&&w.defaultProps)for(J in ce=w.defaultProps,ce)se[J]===void 0&&(se[J]=ce[J]);return{$$typeof:i,type:w,key:X,ref:me,props:se,_owner:ie.current}}function K(w,F){return{$$typeof:i,type:w.type,key:F,ref:w.ref,props:w.props,_owner:w._owner}}function G(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function U(w){var F={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(H){return F[H]})}var ue=/\/+/g;function he(w,F){return typeof w=="object"&&w!==null&&w.key!=null?U(""+w.key):F.toString(36)}function Ye(w,F,H,J,se){var X=typeof w;(X==="undefined"||X==="boolean")&&(w=null);var me=!1;if(w===null)me=!0;else switch(X){case"string":case"number":me=!0;break;case"object":switch(w.$$typeof){case i:case s:me=!0}}if(me)return me=w,se=se(me),w=J===""?"."+he(me,0):J,Z(se)?(H="",w!=null&&(H=w.replace(ue,"$&/")+"/"),Ye(se,F,H,"",function(De){return De})):se!=null&&(G(se)&&(se=K(se,H+(!se.key||me&&me.key===se.key?"":(""+se.key).replace(ue,"$&/")+"/")+w)),F.push(se)),1;if(me=0,J=J===""?".":J+":",Z(w))for(var ce=0;ce<w.length;ce++){X=w[ce];var ge=J+he(X,ce);me+=Ye(X,F,H,ge,se)}else if(ge=v(w),typeof ge=="function")for(w=ge.call(w),ce=0;!(X=w.next()).done;)X=X.value,ge=J+he(X,ce++),me+=Ye(X,F,H,ge,se);else if(X==="object")throw F=String(w),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return me}function be(w,F,H){if(w==null)return w;var J=[],se=0;return Ye(w,J,"","",function(X){return F.call(H,X,se++)}),J}function ne(w){if(w._status===-1){var F=w._result;F=F(),F.then(function(H){(w._status===0||w._status===-1)&&(w._status=1,w._result=H)},function(H){(w._status===0||w._status===-1)&&(w._status=2,w._result=H)}),w._status===-1&&(w._status=0,w._result=F)}if(w._status===1)return w._result.default;throw w._result}var pe={current:null},O={transition:null},V={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:O,ReactCurrentOwner:ie};function B(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:be,forEach:function(w,F,H){be(w,function(){F.apply(this,arguments)},H)},count:function(w){var F=0;return be(w,function(){F++}),F},toArray:function(w){return be(w,function(F){return F})||[]},only:function(w){if(!G(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},fe.Component=z,fe.Fragment=l,fe.Profiler=f,fe.PureComponent=de,fe.StrictMode=c,fe.Suspense=b,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,fe.act=B,fe.cloneElement=function(w,F,H){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var J=_({},w.props),se=w.key,X=w.ref,me=w._owner;if(F!=null){if(F.ref!==void 0&&(X=F.ref,me=ie.current),F.key!==void 0&&(se=""+F.key),w.type&&w.type.defaultProps)var ce=w.type.defaultProps;for(ge in F)oe.call(F,ge)&&!we.hasOwnProperty(ge)&&(J[ge]=F[ge]===void 0&&ce!==void 0?ce[ge]:F[ge])}var ge=arguments.length-2;if(ge===1)J.children=H;else if(1<ge){ce=Array(ge);for(var De=0;De<ge;De++)ce[De]=arguments[De+2];J.children=ce}return{$$typeof:i,type:w.type,key:se,ref:X,props:J,_owner:me}},fe.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:p,_context:w},w.Consumer=w},fe.createElement=Ee,fe.createFactory=function(w){var F=Ee.bind(null,w);return F.type=w,F},fe.createRef=function(){return{current:null}},fe.forwardRef=function(w){return{$$typeof:x,render:w}},fe.isValidElement=G,fe.lazy=function(w){return{$$typeof:S,_payload:{_status:-1,_result:w},_init:ne}},fe.memo=function(w,F){return{$$typeof:j,type:w,compare:F===void 0?null:F}},fe.startTransition=function(w){var F=O.transition;O.transition={};try{w()}finally{O.transition=F}},fe.unstable_act=B,fe.useCallback=function(w,F){return pe.current.useCallback(w,F)},fe.useContext=function(w){return pe.current.useContext(w)},fe.useDebugValue=function(){},fe.useDeferredValue=function(w){return pe.current.useDeferredValue(w)},fe.useEffect=function(w,F){return pe.current.useEffect(w,F)},fe.useId=function(){return pe.current.useId()},fe.useImperativeHandle=function(w,F,H){return pe.current.useImperativeHandle(w,F,H)},fe.useInsertionEffect=function(w,F){return pe.current.useInsertionEffect(w,F)},fe.useLayoutEffect=function(w,F){return pe.current.useLayoutEffect(w,F)},fe.useMemo=function(w,F){return pe.current.useMemo(w,F)},fe.useReducer=function(w,F,H){return pe.current.useReducer(w,F,H)},fe.useRef=function(w){return pe.current.useRef(w)},fe.useState=function(w){return pe.current.useState(w)},fe.useSyncExternalStore=function(w,F,H){return pe.current.useSyncExternalStore(w,F,H)},fe.useTransition=function(){return pe.current.useTransition()},fe.version="18.3.1",fe}var sd;function yl(){return sd||(sd=1,el.exports=vm()),el.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function wm(){if(ad)return _o;ad=1;var i=yl(),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function m(x,b,j){var S,h={},v=null,I=null;j!==void 0&&(v=""+j),b.key!==void 0&&(v=""+b.key),b.ref!==void 0&&(I=b.ref);for(S in b)c.call(b,S)&&!p.hasOwnProperty(S)&&(h[S]=b[S]);if(x&&x.defaultProps)for(S in b=x.defaultProps,b)h[S]===void 0&&(h[S]=b[S]);return{$$typeof:s,type:x,key:v,ref:I,props:h,_owner:f.current}}return _o.Fragment=l,_o.jsx=m,_o.jsxs=m,_o}var ld;function km(){return ld||(ld=1,Ja.exports=wm()),Ja.exports}var r=km(),N=yl();const M=Ld(N);var ts={},tl={exports:{}},wt={},nl={exports:{}},rl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function Sm(){return ud||(ud=1,(function(i){function s(O,V){var B=O.length;O.push(V);e:for(;0<B;){var w=B-1>>>1,F=O[w];if(0<f(F,V))O[w]=V,O[B]=F,B=w;else break e}}function l(O){return O.length===0?null:O[0]}function c(O){if(O.length===0)return null;var V=O[0],B=O.pop();if(B!==V){O[0]=B;e:for(var w=0,F=O.length,H=F>>>1;w<H;){var J=2*(w+1)-1,se=O[J],X=J+1,me=O[X];if(0>f(se,B))X<F&&0>f(me,se)?(O[w]=me,O[X]=B,w=X):(O[w]=se,O[J]=B,w=J);else if(X<F&&0>f(me,B))O[w]=me,O[X]=B,w=X;else break e}}return V}function f(O,V){var B=O.sortIndex-V.sortIndex;return B!==0?B:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var m=Date,x=m.now();i.unstable_now=function(){return m.now()-x}}var b=[],j=[],S=1,h=null,v=3,I=!1,_=!1,R=!1,z=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ve(O){for(var V=l(j);V!==null;){if(V.callback===null)c(j);else if(V.startTime<=O)c(j),V.sortIndex=V.expirationTime,s(b,V);else break;V=l(j)}}function Z(O){if(R=!1,ve(O),!_)if(l(b)!==null)_=!0,ne(oe);else{var V=l(j);V!==null&&pe(Z,V.startTime-O)}}function oe(O,V){_=!1,R&&(R=!1,le(Ee),Ee=-1),I=!0;var B=v;try{for(ve(V),h=l(b);h!==null&&(!(h.expirationTime>V)||O&&!U());){var w=h.callback;if(typeof w=="function"){h.callback=null,v=h.priorityLevel;var F=w(h.expirationTime<=V);V=i.unstable_now(),typeof F=="function"?h.callback=F:h===l(b)&&c(b),ve(V)}else c(b);h=l(b)}if(h!==null)var H=!0;else{var J=l(j);J!==null&&pe(Z,J.startTime-V),H=!1}return H}finally{h=null,v=B,I=!1}}var ie=!1,we=null,Ee=-1,K=5,G=-1;function U(){return!(i.unstable_now()-G<K)}function ue(){if(we!==null){var O=i.unstable_now();G=O;var V=!0;try{V=we(!0,O)}finally{V?he():(ie=!1,we=null)}}else ie=!1}var he;if(typeof de=="function")he=function(){de(ue)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,be=Ye.port2;Ye.port1.onmessage=ue,he=function(){be.postMessage(null)}}else he=function(){z(ue,0)};function ne(O){we=O,ie||(ie=!0,he())}function pe(O,V){Ee=z(function(){O(i.unstable_now())},V)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_continueExecution=function(){_||I||(_=!0,ne(oe))},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return l(b)},i.unstable_next=function(O){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var B=v;v=V;try{return O()}finally{v=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=v;v=O;try{return V()}finally{v=B}},i.unstable_scheduleCallback=function(O,V,B){var w=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?w+B:w):B=w,O){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=B+F,O={id:S++,callback:V,priorityLevel:O,startTime:B,expirationTime:F,sortIndex:-1},B>w?(O.sortIndex=B,s(j,O),l(b)===null&&O===l(j)&&(R?(le(Ee),Ee=-1):R=!0,pe(Z,B-w))):(O.sortIndex=F,s(b,O),_||I||(_=!0,ne(oe))),O},i.unstable_shouldYield=U,i.unstable_wrapCallback=function(O){var V=v;return function(){var B=v;v=V;try{return O.apply(this,arguments)}finally{v=B}}}})(rl)),rl}var cd;function jm(){return cd||(cd=1,nl.exports=Sm()),nl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd;function bm(){if(dd)return wt;dd=1;var i=yl(),s=jm();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function p(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(f[e]=t,e=0;e<t.length;e++)c.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},h={};function v(e){return b.call(h,e)?!0:b.call(S,e)?!1:j.test(e)?h[e]=!0:(S[e]=!0,!1)}function I(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,t,n,o){if(t===null||typeof t>"u"||I(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,n,o,a,u,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=d}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];z[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(le,de);z[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(le,de);z[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(le,de);z[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function ve(e,t,n,o){var a=z.hasOwnProperty(t)?z[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_(t,n,a,o)&&(n=null),o||a===null?v(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Z=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ie=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),U=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),O=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,w;function F(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var H=!1;function J(e,t){if(!e||H)return"";H=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var o=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){o=T}e.call(t.prototype)}else{try{throw Error()}catch(T){o=T}e()}}catch(T){if(T&&o&&typeof T.stack=="string"){for(var a=T.stack.split(`
`),u=o.stack.split(`
`),d=a.length-1,g=u.length-1;1<=d&&0<=g&&a[d]!==u[g];)g--;for(;1<=d&&0<=g;d--,g--)if(a[d]!==u[g]){if(d!==1||g!==1)do if(d--,g--,0>g||a[d]!==u[g]){var y=`
`+a[d].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=d&&0<=g);break}}}finally{H=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function se(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case ie:return"Portal";case K:return"Profiler";case Ee:return"StrictMode";case he:return"Suspense";case Ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case U:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case be:return t=e.displayName||null,t!==null?t:X(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return X(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(t);case 8:return t===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=ge(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){o=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rn(e){e._valueTracker||(e._valueTracker=De(e))}function wn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=ge(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function St(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kt(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wo(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=ce(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $r(e,t){t=t.checked,t!=null&&ve(e,"checked",t,!1)}function on(e,t){$r(e,t);var n=ce(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jt(e,t.type,n):t.hasOwnProperty("defaultValue")&&jt(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jt(e,t,n){(t!=="number"||St(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qn=Array.isArray;function kn(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function nt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sn(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(Qn(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ce(n)}}function Vo(e,t){var n=ce(t.value),o=ce(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function qo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xn,pr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xn=Xn||document.createElement("div"),Xn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jn=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){jn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function Yo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function Qo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=Yo(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Ko=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mr(e,t){if(t){if(Ko[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Vr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gn=null;function Ft(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qr=null,bn=null,an=null;function Yr(e){if(e=mo(e)){if(typeof qr!="function")throw Error(l(280));var t=e.stateNode;t&&(t=gi(t),qr(e.stateNode,e.type,t))}}function ae(e){bn?an?an.push(e):an=[e]:bn=e}function Me(){if(bn){var e=bn,t=an;if(an=bn=null,Yr(e),t)for(e=0;e<t.length;e++)Yr(t[e])}}function Qe(e,t){return e(t)}function st(){}var Cn=!1;function He(e,t,n){if(Cn)return e(t,n);Cn=!0;try{return Qe(e,t,n)}finally{Cn=!1,(bn!==null||an!==null)&&(st(),Me())}}function Ge(e,t){var n=e.stateNode;if(n===null)return null;var o=gi(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var En=!1;if(x)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){En=!0}}),window.addEventListener("test",rt,rt),window.removeEventListener("test",rt,rt)}catch{En=!1}function bt(e,t,n,o,a,u,d,g,y){var T=Array.prototype.slice.call(arguments,3);try{t.apply(n,T)}catch(P){this.onError(P)}}var Tn=!1,Nt=null,Qr=!1,ys=null,Ef={onError:function(e){Tn=!0,Nt=e}};function Tf(e,t,n,o,a,u,d,g,y){Tn=!1,Nt=null,bt.apply(Ef,arguments)}function If(e,t,n,o,a,u,d,g,y){if(Tf.apply(this,arguments),Tn){if(Tn){var T=Nt;Tn=!1,Nt=null}else throw Error(l(198));Qr||(Qr=!0,ys=T)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Il(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _l(e){if(Zn(e)!==e)throw Error(l(188))}function _f(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return _l(a),e;if(u===o)return _l(a),t;u=u.sibling}throw Error(l(188))}if(n.return!==o.return)n=a,o=u;else{for(var d=!1,g=a.child;g;){if(g===n){d=!0,n=a,o=u;break}if(g===o){d=!0,o=a,n=u;break}g=g.sibling}if(!d){for(g=u.child;g;){if(g===n){d=!0,n=u,o=a;break}if(g===o){d=!0,o=u,n=a;break}g=g.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==o)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Fl(e){return e=_f(e),e!==null?Nl(e):null}function Nl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nl(e);if(t!==null)return t;e=e.sibling}return null}var Rl=s.unstable_scheduleCallback,zl=s.unstable_cancelCallback,Ff=s.unstable_shouldYield,Nf=s.unstable_requestPaint,Be=s.unstable_now,Rf=s.unstable_getCurrentPriorityLevel,vs=s.unstable_ImmediatePriority,Al=s.unstable_UserBlockingPriority,Xo=s.unstable_NormalPriority,zf=s.unstable_LowPriority,Pl=s.unstable_IdlePriority,Go=null,Xt=null;function Af(e){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Go,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Lf,Pf=Math.log,Df=Math.LN2;function Lf(e){return e>>>=0,e===0?32:31-(Pf(e)/Df|0)|0}var Zo=64,Jo=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ei(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,u=e.pingedLanes,d=n&268435455;if(d!==0){var g=d&~a;g!==0?o=Kr(g):(u&=d,u!==0&&(o=Kr(u)))}else d=n&~a,d!==0?o=Kr(d):u!==0&&(o=Kr(u));if(o===0)return 0;if(t!==0&&t!==o&&(t&a)===0&&(a=o&-o,u=t&-t,a>=u||a===16&&(u&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Bt(t),a=1<<n,o|=e[n],t&=~a;return o}function Of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mf(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-Bt(u),g=1<<d,y=a[d];y===-1?((g&n)===0||(g&o)!==0)&&(a[d]=Of(g,t)):y<=t&&(e.expiredLanes|=g),u&=~g}}function ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dl(){var e=Zo;return Zo<<=1,(Zo&4194240)===0&&(Zo=64),e}function ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function Bf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Bt(n),u=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~u}}function Ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Bt(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var Se=0;function Ll(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ol,js,Ml,Bl,Ul,bs=!1,ti=[],In=null,_n=null,Fn=null,Gr=new Map,Zr=new Map,Nn=[],Uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $l(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Jr(e,t,n,o,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[a]},t!==null&&(t=mo(t),t!==null&&js(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function $f(e,t,n,o,a){switch(t){case"focusin":return In=Jr(In,e,t,n,o,a),!0;case"dragenter":return _n=Jr(_n,e,t,n,o,a),!0;case"mouseover":return Fn=Jr(Fn,e,t,n,o,a),!0;case"pointerover":var u=a.pointerId;return Gr.set(u,Jr(Gr.get(u)||null,e,t,n,o,a)),!0;case"gotpointercapture":return u=a.pointerId,Zr.set(u,Jr(Zr.get(u)||null,e,t,n,o,a)),!0}return!1}function Hl(e){var t=Jn(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=Il(n),t!==null){e.blockedOn=t,Ul(e.priority,function(){Ml(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Gn=o,n.target.dispatchEvent(o),Gn=null}else return t=mo(n),t!==null&&js(t),e.blockedOn=n,!1;t.shift()}return!0}function Wl(e,t,n){ni(e)&&n.delete(t)}function Hf(){bs=!1,In!==null&&ni(In)&&(In=null),_n!==null&&ni(_n)&&(_n=null),Fn!==null&&ni(Fn)&&(Fn=null),Gr.forEach(Wl),Zr.forEach(Wl)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Hf)))}function to(e){function t(a){return eo(a,e)}if(0<ti.length){eo(ti[0],e);for(var n=1;n<ti.length;n++){var o=ti[n];o.blockedOn===e&&(o.blockedOn=null)}}for(In!==null&&eo(In,e),_n!==null&&eo(_n,e),Fn!==null&&eo(Fn,e),Gr.forEach(t),Zr.forEach(t),n=0;n<Nn.length;n++)o=Nn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)Hl(n),n.blockedOn===null&&Nn.shift()}var hr=Z.ReactCurrentBatchConfig,ri=!0;function Wf(e,t,n,o){var a=Se,u=hr.transition;hr.transition=null;try{Se=1,Cs(e,t,n,o)}finally{Se=a,hr.transition=u}}function Vf(e,t,n,o){var a=Se,u=hr.transition;hr.transition=null;try{Se=4,Cs(e,t,n,o)}finally{Se=a,hr.transition=u}}function Cs(e,t,n,o){if(ri){var a=Es(e,t,n,o);if(a===null)Hs(e,t,o,oi,n),$l(e,o);else if($f(a,e,t,n,o))o.stopPropagation();else if($l(e,o),t&4&&-1<Uf.indexOf(e)){for(;a!==null;){var u=mo(a);if(u!==null&&Ol(u),u=Es(e,t,n,o),u===null&&Hs(e,t,o,oi,n),u===a)break;a=u}a!==null&&o.stopPropagation()}else Hs(e,t,o,null,n)}}var oi=null;function Es(e,t,n,o){if(oi=null,e=Ft(o),e=Jn(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Il(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oi=e,null}function Vl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rf()){case vs:return 1;case Al:return 4;case Xo:case zf:return 16;case Pl:return 536870912;default:return 16}default:return 16}}var Rn=null,Ts=null,ii=null;function ql(){if(ii)return ii;var e,t=Ts,n=t.length,o,a="value"in Rn?Rn.value:Rn.textContent,u=a.length;for(e=0;e<n&&t[e]===a[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===a[u-o];o++);return ii=a.slice(e,1<o?1-o:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function Yl(){return!1}function Ct(e){function t(n,o,a,u,d){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ai:Yl,this.isPropagationStopped=Yl,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Is=Ct(gr),no=B({},gr,{view:0,detail:0}),qf=Ct(no),_s,Fs,ro,li=B({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(_s=e.screenX-ro.screenX,Fs=e.screenY-ro.screenY):Fs=_s=0,ro=e),_s)},movementY:function(e){return"movementY"in e?e.movementY:Fs}}),Ql=Ct(li),Yf=B({},li,{dataTransfer:0}),Qf=Ct(Yf),Kf=B({},no,{relatedTarget:0}),Ns=Ct(Kf),Xf=B({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gf=Ct(Xf),Zf=B({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jf=Ct(Zf),ep=B({},gr,{data:0}),Kl=Ct(ep),tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rp[e])?!!t[e]:!1}function Rs(){return op}var ip=B({},no,{key:function(e){if(e.key){var t=tp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sp=Ct(ip),ap=B({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xl=Ct(ap),lp=B({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),up=Ct(lp),cp=B({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),dp=Ct(cp),fp=B({},li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pp=Ct(fp),mp=[9,13,27,32],zs=x&&"CompositionEvent"in window,oo=null;x&&"documentMode"in document&&(oo=document.documentMode);var hp=x&&"TextEvent"in window&&!oo,Gl=x&&(!zs||oo&&8<oo&&11>=oo),Zl=" ",Jl=!1;function eu(e,t){switch(e){case"keyup":return mp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function gp(e,t){switch(e){case"compositionend":return tu(t);case"keypress":return t.which!==32?null:(Jl=!0,Zl);case"textInput":return e=t.data,e===Zl&&Jl?null:e;default:return null}}function xp(e,t){if(xr)return e==="compositionend"||!zs&&eu(e,t)?(e=ql(),ii=Ts=Rn=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gl&&t.locale!=="ko"?null:t.data;default:return null}}var yp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yp[e.type]:t==="textarea"}function ru(e,t,n,o){ae(o),t=pi(t,"onChange"),0<t.length&&(n=new Is("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var io=null,so=null;function vp(e){ku(e,0)}function ui(e){var t=Sr(e);if(wn(t))return e}function wp(e,t){if(e==="change")return t}var ou=!1;if(x){var As;if(x){var Ps="oninput"in document;if(!Ps){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),Ps=typeof iu.oninput=="function"}As=Ps}else As=!1;ou=As&&(!document.documentMode||9<document.documentMode)}function su(){io&&(io.detachEvent("onpropertychange",au),so=io=null)}function au(e){if(e.propertyName==="value"&&ui(so)){var t=[];ru(t,so,e,Ft(e)),He(vp,t)}}function kp(e,t,n){e==="focusin"?(su(),io=t,so=n,io.attachEvent("onpropertychange",au)):e==="focusout"&&su()}function Sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(so)}function jp(e,t){if(e==="click")return ui(t)}function bp(e,t){if(e==="input"||e==="change")return ui(t)}function Cp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:Cp;function ao(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!b.call(t,a)||!Ut(e[a],t[a]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=lu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function du(){for(var e=window,t=St();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=St(e.document)}return t}function Ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ep(e){var t=du(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cu(n.ownerDocument.documentElement,n)){if(o!==null&&Ds(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,u=Math.min(o.start,a);o=o.end===void 0?u:Math.min(o.end,a),!e.extend&&u>o&&(a=o,o=u,u=a),a=uu(n,u);var d=uu(n,o);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),u>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tp=x&&"documentMode"in document&&11>=document.documentMode,yr=null,Ls=null,lo=null,Os=!1;function fu(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Os||yr==null||yr!==St(o)||(o=yr,"selectionStart"in o&&Ds(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&ao(lo,o)||(lo=o,o=pi(Ls,"onSelect"),0<o.length&&(t=new Is("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=yr)))}function ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vr={animationend:ci("Animation","AnimationEnd"),animationiteration:ci("Animation","AnimationIteration"),animationstart:ci("Animation","AnimationStart"),transitionend:ci("Transition","TransitionEnd")},Ms={},pu={};x&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function di(e){if(Ms[e])return Ms[e];if(!vr[e])return e;var t=vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pu)return Ms[e]=t[n];return e}var mu=di("animationend"),hu=di("animationiteration"),gu=di("animationstart"),xu=di("transitionend"),yu=new Map,vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){yu.set(e,t),p(t,[e])}for(var Bs=0;Bs<vu.length;Bs++){var Us=vu[Bs],Ip=Us.toLowerCase(),_p=Us[0].toUpperCase()+Us.slice(1);zn(Ip,"on"+_p)}zn(mu,"onAnimationEnd"),zn(hu,"onAnimationIteration"),zn(gu,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(xu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fp=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function wu(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,If(o,t,void 0,e),e.currentTarget=null}function ku(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var d=o.length-1;0<=d;d--){var g=o[d],y=g.instance,T=g.currentTarget;if(g=g.listener,y!==u&&a.isPropagationStopped())break e;wu(a,g,T),u=y}else for(d=0;d<o.length;d++){if(g=o[d],y=g.instance,T=g.currentTarget,g=g.listener,y!==u&&a.isPropagationStopped())break e;wu(a,g,T),u=y}}}if(Qr)throw e=ys,Qr=!1,ys=null,e}function Te(e,t){var n=t[Ks];n===void 0&&(n=t[Ks]=new Set);var o=e+"__bubble";n.has(o)||(Su(t,e,2,!1),n.add(o))}function $s(e,t,n){var o=0;t&&(o|=4),Su(n,e,o,t)}var fi="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[fi]){e[fi]=!0,c.forEach(function(n){n!=="selectionchange"&&(Fp.has(n)||$s(n,!1,e),$s(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,$s("selectionchange",!1,t))}}function Su(e,t,n,o){switch(Vl(t)){case 1:var a=Wf;break;case 4:a=Vf;break;default:a=Cs}n=a.bind(null,t,n,e),a=void 0,!En||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Hs(e,t,n,o,a){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var g=o.stateNode.containerInfo;if(g===a||g.nodeType===8&&g.parentNode===a)break;if(d===4)for(d=o.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===a||y.nodeType===8&&y.parentNode===a))return;d=d.return}for(;g!==null;){if(d=Jn(g),d===null)return;if(y=d.tag,y===5||y===6){o=u=d;continue e}g=g.parentNode}}o=o.return}He(function(){var T=u,P=Ft(n),D=[];e:{var A=yu.get(e);if(A!==void 0){var $=Is,q=e;switch(e){case"keypress":if(si(n)===0)break e;case"keydown":case"keyup":$=sp;break;case"focusin":q="focus",$=Ns;break;case"focusout":q="blur",$=Ns;break;case"beforeblur":case"afterblur":$=Ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Qf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=up;break;case mu:case hu:case gu:$=Gf;break;case xu:$=dp;break;case"scroll":$=qf;break;case"wheel":$=pp;break;case"copy":case"cut":case"paste":$=Jf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Xl}var Y=(t&4)!==0,Ue=!Y&&e==="scroll",C=Y?A!==null?A+"Capture":null:A;Y=[];for(var k=T,E;k!==null;){E=k;var L=E.stateNode;if(E.tag===5&&L!==null&&(E=L,C!==null&&(L=Ge(k,C),L!=null&&Y.push(fo(k,L,E)))),Ue)break;k=k.return}0<Y.length&&(A=new $(A,q,null,n,P),D.push({event:A,listeners:Y}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",A&&n!==Gn&&(q=n.relatedTarget||n.fromElement)&&(Jn(q)||q[ln]))break e;if(($||A)&&(A=P.window===P?P:(A=P.ownerDocument)?A.defaultView||A.parentWindow:window,$?(q=n.relatedTarget||n.toElement,$=T,q=q?Jn(q):null,q!==null&&(Ue=Zn(q),q!==Ue||q.tag!==5&&q.tag!==6)&&(q=null)):($=null,q=T),$!==q)){if(Y=Ql,L="onMouseLeave",C="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Y=Xl,L="onPointerLeave",C="onPointerEnter",k="pointer"),Ue=$==null?A:Sr($),E=q==null?A:Sr(q),A=new Y(L,k+"leave",$,n,P),A.target=Ue,A.relatedTarget=E,L=null,Jn(P)===T&&(Y=new Y(C,k+"enter",q,n,P),Y.target=E,Y.relatedTarget=Ue,L=Y),Ue=L,$&&q)t:{for(Y=$,C=q,k=0,E=Y;E;E=wr(E))k++;for(E=0,L=C;L;L=wr(L))E++;for(;0<k-E;)Y=wr(Y),k--;for(;0<E-k;)C=wr(C),E--;for(;k--;){if(Y===C||C!==null&&Y===C.alternate)break t;Y=wr(Y),C=wr(C)}Y=null}else Y=null;$!==null&&ju(D,A,$,Y,!1),q!==null&&Ue!==null&&ju(D,Ue,q,Y,!0)}}e:{if(A=T?Sr(T):window,$=A.nodeName&&A.nodeName.toLowerCase(),$==="select"||$==="input"&&A.type==="file")var Q=wp;else if(nu(A))if(ou)Q=bp;else{Q=Sp;var ee=kp}else($=A.nodeName)&&$.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(Q=jp);if(Q&&(Q=Q(e,T))){ru(D,Q,n,P);break e}ee&&ee(e,A,T),e==="focusout"&&(ee=A._wrapperState)&&ee.controlled&&A.type==="number"&&jt(A,"number",A.value)}switch(ee=T?Sr(T):window,e){case"focusin":(nu(ee)||ee.contentEditable==="true")&&(yr=ee,Ls=T,lo=null);break;case"focusout":lo=Ls=yr=null;break;case"mousedown":Os=!0;break;case"contextmenu":case"mouseup":case"dragend":Os=!1,fu(D,n,P);break;case"selectionchange":if(Tp)break;case"keydown":case"keyup":fu(D,n,P)}var te;if(zs)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else xr?eu(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(Gl&&n.locale!=="ko"&&(xr||re!=="onCompositionStart"?re==="onCompositionEnd"&&xr&&(te=ql()):(Rn=P,Ts="value"in Rn?Rn.value:Rn.textContent,xr=!0)),ee=pi(T,re),0<ee.length&&(re=new Kl(re,e,null,n,P),D.push({event:re,listeners:ee}),te?re.data=te:(te=tu(n),te!==null&&(re.data=te)))),(te=hp?gp(e,n):xp(e,n))&&(T=pi(T,"onBeforeInput"),0<T.length&&(P=new Kl("onBeforeInput","beforeinput",null,n,P),D.push({event:P,listeners:T}),P.data=te))}ku(D,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,u=a.stateNode;a.tag===5&&u!==null&&(a=u,u=Ge(e,n),u!=null&&o.unshift(fo(e,u,a)),u=Ge(e,t),u!=null&&o.push(fo(e,u,a))),e=e.return}return o}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ju(e,t,n,o,a){for(var u=t._reactName,d=[];n!==null&&n!==o;){var g=n,y=g.alternate,T=g.stateNode;if(y!==null&&y===o)break;g.tag===5&&T!==null&&(g=T,a?(y=Ge(n,u),y!=null&&d.unshift(fo(n,y,g))):a||(y=Ge(n,u),y!=null&&d.push(fo(n,y,g)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Np=/\r\n?/g,Rp=/\u0000|\uFFFD/g;function bu(e){return(typeof e=="string"?e:""+e).replace(Np,`
`).replace(Rp,"")}function mi(e,t,n){if(t=bu(t),bu(e)!==t&&n)throw Error(l(425))}function hi(){}var Ws=null,Vs=null;function qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ys=typeof setTimeout=="function"?setTimeout:void 0,zp=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(Pp)}:Ys;function Pp(e){setTimeout(function(){throw e})}function Qs(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),to(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);to(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),Gt="__reactFiber$"+kr,po="__reactProps$"+kr,ln="__reactContainer$"+kr,Ks="__reactEvents$"+kr,Dp="__reactListeners$"+kr,Lp="__reactHandles$"+kr;function Jn(e){var t=e[Gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eu(e);e!==null;){if(n=e[Gt])return n;e=Eu(e)}return t}e=n,n=e.parentNode}return null}function mo(e){return e=e[Gt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function gi(e){return e[po]||null}var Xs=[],jr=-1;function Pn(e){return{current:e}}function Ie(e){0>jr||(e.current=Xs[jr],Xs[jr]=null,jr--)}function Ce(e,t){jr++,Xs[jr]=e.current,e.current=t}var Dn={},at=Pn(Dn),ht=Pn(!1),er=Dn;function br(e,t){var n=e.type.contextTypes;if(!n)return Dn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},u;for(u in n)a[u]=t[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function gt(e){return e=e.childContextTypes,e!=null}function xi(){Ie(ht),Ie(at)}function Tu(e,t,n){if(at.current!==Dn)throw Error(l(168));Ce(at,t),Ce(ht,n)}function Iu(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(l(108,me(e)||"Unknown",a));return B({},n,o)}function yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,er=at.current,Ce(at,e),Ce(ht,ht.current),!0}function _u(e,t,n){var o=e.stateNode;if(!o)throw Error(l(169));n?(e=Iu(e,t,er),o.__reactInternalMemoizedMergedChildContext=e,Ie(ht),Ie(at),Ce(at,e)):Ie(ht),Ce(ht,n)}var un=null,vi=!1,Gs=!1;function Fu(e){un===null?un=[e]:un.push(e)}function Op(e){vi=!0,Fu(e)}function Ln(){if(!Gs&&un!==null){Gs=!0;var e=0,t=Se;try{var n=un;for(Se=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}un=null,vi=!1}catch(a){throw un!==null&&(un=un.slice(e+1)),Rl(vs,Ln),a}finally{Se=t,Gs=!1}}return null}var Cr=[],Er=0,wi=null,ki=0,Rt=[],zt=0,tr=null,cn=1,dn="";function nr(e,t){Cr[Er++]=ki,Cr[Er++]=wi,wi=e,ki=t}function Nu(e,t,n){Rt[zt++]=cn,Rt[zt++]=dn,Rt[zt++]=tr,tr=e;var o=cn;e=dn;var a=32-Bt(o)-1;o&=~(1<<a),n+=1;var u=32-Bt(t)+a;if(30<u){var d=a-a%5;u=(o&(1<<d)-1).toString(32),o>>=d,a-=d,cn=1<<32-Bt(t)+a|n<<a|o,dn=u+e}else cn=1<<u|n<<a|o,dn=e}function Zs(e){e.return!==null&&(nr(e,1),Nu(e,1,0))}function Js(e){for(;e===wi;)wi=Cr[--Er],Cr[Er]=null,ki=Cr[--Er],Cr[Er]=null;for(;e===tr;)tr=Rt[--zt],Rt[zt]=null,dn=Rt[--zt],Rt[zt]=null,cn=Rt[--zt],Rt[zt]=null}var Et=null,Tt=null,_e=!1,$t=null;function Ru(e,t){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,Tt=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:cn,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Et=e,Tt=null,!0):!1;default:return!1}}function ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ta(e){if(_e){var t=Tt;if(t){var n=t;if(!zu(e,t)){if(ea(e))throw Error(l(418));t=An(n.nextSibling);var o=Et;t&&zu(e,t)?Ru(o,n):(e.flags=e.flags&-4097|2,_e=!1,Et=e)}}else{if(ea(e))throw Error(l(418));e.flags=e.flags&-4097|2,_e=!1,Et=e}}}function Au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function Si(e){if(e!==Et)return!1;if(!_e)return Au(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qs(e.type,e.memoizedProps)),t&&(t=Tt)){if(ea(e))throw Pu(),Error(l(418));for(;t;)Ru(e,t),t=An(t.nextSibling)}if(Au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Tt=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=Et?An(e.stateNode.nextSibling):null;return!0}function Pu(){for(var e=Tt;e;)e=An(e.nextSibling)}function Tr(){Tt=Et=null,_e=!1}function na(e){$t===null?$t=[e]:$t.push(e)}var Mp=Z.ReactCurrentBatchConfig;function ho(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var o=n.stateNode}if(!o)throw Error(l(147,e));var a=o,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(d){var g=a.refs;d===null?delete g[u]:g[u]=d},t._stringRef=u,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function ji(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function Lu(e){function t(C,k){if(e){var E=C.deletions;E===null?(C.deletions=[k],C.flags|=16):E.push(k)}}function n(C,k){if(!e)return null;for(;k!==null;)t(C,k),k=k.sibling;return null}function o(C,k){for(C=new Map;k!==null;)k.key!==null?C.set(k.key,k):C.set(k.index,k),k=k.sibling;return C}function a(C,k){return C=Vn(C,k),C.index=0,C.sibling=null,C}function u(C,k,E){return C.index=E,e?(E=C.alternate,E!==null?(E=E.index,E<k?(C.flags|=2,k):E):(C.flags|=2,k)):(C.flags|=1048576,k)}function d(C){return e&&C.alternate===null&&(C.flags|=2),C}function g(C,k,E,L){return k===null||k.tag!==6?(k=Ya(E,C.mode,L),k.return=C,k):(k=a(k,E),k.return=C,k)}function y(C,k,E,L){var Q=E.type;return Q===we?P(C,k,E.props.children,L,E.key):k!==null&&(k.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ne&&Du(Q)===k.type)?(L=a(k,E.props),L.ref=ho(C,k,E),L.return=C,L):(L=Yi(E.type,E.key,E.props,null,C.mode,L),L.ref=ho(C,k,E),L.return=C,L)}function T(C,k,E,L){return k===null||k.tag!==4||k.stateNode.containerInfo!==E.containerInfo||k.stateNode.implementation!==E.implementation?(k=Qa(E,C.mode,L),k.return=C,k):(k=a(k,E.children||[]),k.return=C,k)}function P(C,k,E,L,Q){return k===null||k.tag!==7?(k=cr(E,C.mode,L,Q),k.return=C,k):(k=a(k,E),k.return=C,k)}function D(C,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Ya(""+k,C.mode,E),k.return=C,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case oe:return E=Yi(k.type,k.key,k.props,null,C.mode,E),E.ref=ho(C,null,k),E.return=C,E;case ie:return k=Qa(k,C.mode,E),k.return=C,k;case ne:var L=k._init;return D(C,L(k._payload),E)}if(Qn(k)||V(k))return k=cr(k,C.mode,E,null),k.return=C,k;ji(C,k)}return null}function A(C,k,E,L){var Q=k!==null?k.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return Q!==null?null:g(C,k,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case oe:return E.key===Q?y(C,k,E,L):null;case ie:return E.key===Q?T(C,k,E,L):null;case ne:return Q=E._init,A(C,k,Q(E._payload),L)}if(Qn(E)||V(E))return Q!==null?null:P(C,k,E,L,null);ji(C,E)}return null}function $(C,k,E,L,Q){if(typeof L=="string"&&L!==""||typeof L=="number")return C=C.get(E)||null,g(k,C,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case oe:return C=C.get(L.key===null?E:L.key)||null,y(k,C,L,Q);case ie:return C=C.get(L.key===null?E:L.key)||null,T(k,C,L,Q);case ne:var ee=L._init;return $(C,k,E,ee(L._payload),Q)}if(Qn(L)||V(L))return C=C.get(E)||null,P(k,C,L,Q,null);ji(k,L)}return null}function q(C,k,E,L){for(var Q=null,ee=null,te=k,re=k=0,et=null;te!==null&&re<E.length;re++){te.index>re?(et=te,te=null):et=te.sibling;var ye=A(C,te,E[re],L);if(ye===null){te===null&&(te=et);break}e&&te&&ye.alternate===null&&t(C,te),k=u(ye,k,re),ee===null?Q=ye:ee.sibling=ye,ee=ye,te=et}if(re===E.length)return n(C,te),_e&&nr(C,re),Q;if(te===null){for(;re<E.length;re++)te=D(C,E[re],L),te!==null&&(k=u(te,k,re),ee===null?Q=te:ee.sibling=te,ee=te);return _e&&nr(C,re),Q}for(te=o(C,te);re<E.length;re++)et=$(te,C,re,E[re],L),et!==null&&(e&&et.alternate!==null&&te.delete(et.key===null?re:et.key),k=u(et,k,re),ee===null?Q=et:ee.sibling=et,ee=et);return e&&te.forEach(function(qn){return t(C,qn)}),_e&&nr(C,re),Q}function Y(C,k,E,L){var Q=V(E);if(typeof Q!="function")throw Error(l(150));if(E=Q.call(E),E==null)throw Error(l(151));for(var ee=Q=null,te=k,re=k=0,et=null,ye=E.next();te!==null&&!ye.done;re++,ye=E.next()){te.index>re?(et=te,te=null):et=te.sibling;var qn=A(C,te,ye.value,L);if(qn===null){te===null&&(te=et);break}e&&te&&qn.alternate===null&&t(C,te),k=u(qn,k,re),ee===null?Q=qn:ee.sibling=qn,ee=qn,te=et}if(ye.done)return n(C,te),_e&&nr(C,re),Q;if(te===null){for(;!ye.done;re++,ye=E.next())ye=D(C,ye.value,L),ye!==null&&(k=u(ye,k,re),ee===null?Q=ye:ee.sibling=ye,ee=ye);return _e&&nr(C,re),Q}for(te=o(C,te);!ye.done;re++,ye=E.next())ye=$(te,C,re,ye.value,L),ye!==null&&(e&&ye.alternate!==null&&te.delete(ye.key===null?re:ye.key),k=u(ye,k,re),ee===null?Q=ye:ee.sibling=ye,ee=ye);return e&&te.forEach(function(ym){return t(C,ym)}),_e&&nr(C,re),Q}function Ue(C,k,E,L){if(typeof E=="object"&&E!==null&&E.type===we&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case oe:e:{for(var Q=E.key,ee=k;ee!==null;){if(ee.key===Q){if(Q=E.type,Q===we){if(ee.tag===7){n(C,ee.sibling),k=a(ee,E.props.children),k.return=C,C=k;break e}}else if(ee.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ne&&Du(Q)===ee.type){n(C,ee.sibling),k=a(ee,E.props),k.ref=ho(C,ee,E),k.return=C,C=k;break e}n(C,ee);break}else t(C,ee);ee=ee.sibling}E.type===we?(k=cr(E.props.children,C.mode,L,E.key),k.return=C,C=k):(L=Yi(E.type,E.key,E.props,null,C.mode,L),L.ref=ho(C,k,E),L.return=C,C=L)}return d(C);case ie:e:{for(ee=E.key;k!==null;){if(k.key===ee)if(k.tag===4&&k.stateNode.containerInfo===E.containerInfo&&k.stateNode.implementation===E.implementation){n(C,k.sibling),k=a(k,E.children||[]),k.return=C,C=k;break e}else{n(C,k);break}else t(C,k);k=k.sibling}k=Qa(E,C.mode,L),k.return=C,C=k}return d(C);case ne:return ee=E._init,Ue(C,k,ee(E._payload),L)}if(Qn(E))return q(C,k,E,L);if(V(E))return Y(C,k,E,L);ji(C,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,k!==null&&k.tag===6?(n(C,k.sibling),k=a(k,E),k.return=C,C=k):(n(C,k),k=Ya(E,C.mode,L),k.return=C,C=k),d(C)):n(C,k)}return Ue}var Ir=Lu(!0),Ou=Lu(!1),bi=Pn(null),Ci=null,_r=null,ra=null;function oa(){ra=_r=Ci=null}function ia(e){var t=bi.current;Ie(bi),e._currentValue=t}function sa(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){Ci=e,ra=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(xt=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(ra!==e)if(e={context:e,memoizedValue:t,next:null},_r===null){if(Ci===null)throw Error(l(308));_r=e,Ci.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return t}var rr=null;function aa(e){rr===null?rr=[e]:rr.push(e)}function Mu(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,aa(t)):(n.next=a.next,a.next=n),t.interleaved=n,fn(e,o)}function fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var On=!1;function la(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(xe&2)!==0){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,fn(e,n)}return a=o.interleaved,a===null?(t.next=t,aa(o)):(t.next=a.next,a.next=t),o.interleaved=t,fn(e,n)}function Ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ss(e,n)}}function Uu(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?a=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?a=u=t:u=u.next=t}else a=u=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ti(e,t,n,o){var a=e.updateQueue;On=!1;var u=a.firstBaseUpdate,d=a.lastBaseUpdate,g=a.shared.pending;if(g!==null){a.shared.pending=null;var y=g,T=y.next;y.next=null,d===null?u=T:d.next=T,d=y;var P=e.alternate;P!==null&&(P=P.updateQueue,g=P.lastBaseUpdate,g!==d&&(g===null?P.firstBaseUpdate=T:g.next=T,P.lastBaseUpdate=y))}if(u!==null){var D=a.baseState;d=0,P=T=y=null,g=u;do{var A=g.lane,$=g.eventTime;if((o&A)===A){P!==null&&(P=P.next={eventTime:$,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var q=e,Y=g;switch(A=t,$=n,Y.tag){case 1:if(q=Y.payload,typeof q=="function"){D=q.call($,D,A);break e}D=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Y.payload,A=typeof q=="function"?q.call($,D,A):q,A==null)break e;D=B({},D,A);break e;case 2:On=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,A=a.effects,A===null?a.effects=[g]:A.push(g))}else $={eventTime:$,lane:A,tag:g.tag,payload:g.payload,callback:g.callback,next:null},P===null?(T=P=$,y=D):P=P.next=$,d|=A;if(g=g.next,g===null){if(g=a.shared.pending,g===null)break;A=g,g=A.next,A.next=null,a.lastBaseUpdate=A,a.shared.pending=null}}while(!0);if(P===null&&(y=D),a.baseState=y,a.firstBaseUpdate=T,a.lastBaseUpdate=P,t=a.shared.interleaved,t!==null){a=t;do d|=a.lane,a=a.next;while(a!==t)}else u===null&&(a.shared.lanes=0);sr|=d,e.lanes=d,e.memoizedState=D}}function $u(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(l(191,a));a.call(o)}}}var go={},Zt=Pn(go),xo=Pn(go),yo=Pn(go);function or(e){if(e===go)throw Error(l(174));return e}function ua(e,t){switch(Ce(yo,t),Ce(xo,e),Ce(Zt,go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wr(t,e)}Ie(Zt),Ce(Zt,t)}function Nr(){Ie(Zt),Ie(xo),Ie(yo)}function Hu(e){or(yo.current);var t=or(Zt.current),n=Wr(t,e.type);t!==n&&(Ce(xo,e),Ce(Zt,n))}function ca(e){xo.current===e&&(Ie(Zt),Ie(xo))}var Re=Pn(0);function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=[];function fa(){for(var e=0;e<da.length;e++)da[e]._workInProgressVersionPrimary=null;da.length=0}var _i=Z.ReactCurrentDispatcher,pa=Z.ReactCurrentBatchConfig,ir=0,ze=null,Ke=null,Ze=null,Fi=!1,vo=!1,wo=0,Bp=0;function lt(){throw Error(l(321))}function ma(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function ha(e,t,n,o,a,u){if(ir=u,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?Wp:Vp,e=n(o,a),vo){u=0;do{if(vo=!1,wo=0,25<=u)throw Error(l(301));u+=1,Ze=Ke=null,t.updateQueue=null,_i.current=qp,e=n(o,a)}while(vo)}if(_i.current=zi,t=Ke!==null&&Ke.next!==null,ir=0,Ze=Ke=ze=null,Fi=!1,t)throw Error(l(300));return e}function ga(){var e=wo!==0;return wo=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ze.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Pt(){if(Ke===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Ze===null?ze.memoizedState:Ze.next;if(t!==null)Ze=t,Ke=e;else{if(e===null)throw Error(l(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?ze.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function ko(e,t){return typeof t=="function"?t(e):t}function xa(e){var t=Pt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=Ke,a=o.baseQueue,u=n.pending;if(u!==null){if(a!==null){var d=a.next;a.next=u.next,u.next=d}o.baseQueue=a=u,n.pending=null}if(a!==null){u=a.next,o=o.baseState;var g=d=null,y=null,T=u;do{var P=T.lane;if((ir&P)===P)y!==null&&(y=y.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),o=T.hasEagerState?T.eagerState:e(o,T.action);else{var D={lane:P,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};y===null?(g=y=D,d=o):y=y.next=D,ze.lanes|=P,sr|=P}T=T.next}while(T!==null&&T!==u);y===null?d=o:y.next=g,Ut(o,t.memoizedState)||(xt=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=y,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do u=a.lane,ze.lanes|=u,sr|=u,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ya(e){var t=Pt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,u=t.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do u=e(u,d.action),d=d.next;while(d!==a);Ut(u,t.memoizedState)||(xt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,o]}function Wu(){}function Vu(e,t){var n=ze,o=Pt(),a=t(),u=!Ut(o.memoizedState,a);if(u&&(o.memoizedState=a,xt=!0),o=o.queue,va(Qu.bind(null,n,o,e),[e]),o.getSnapshot!==t||u||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,So(9,Yu.bind(null,n,o,a,t),void 0,null),Je===null)throw Error(l(349));(ir&30)!==0||qu(n,t,a)}return a}function qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yu(e,t,n,o){t.value=n,t.getSnapshot=o,Ku(t)&&Xu(e)}function Qu(e,t,n){return n(function(){Ku(t)&&Xu(e)})}function Ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Xu(e){var t=fn(e,1);t!==null&&qt(t,e,1,-1)}function Gu(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t.queue=e,e=e.dispatch=Hp.bind(null,ze,e),[t.memoizedState,e]}function So(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Zu(){return Pt().memoizedState}function Ni(e,t,n,o){var a=Jt();ze.flags|=e,a.memoizedState=So(1|t,n,void 0,o===void 0?null:o)}function Ri(e,t,n,o){var a=Pt();o=o===void 0?null:o;var u=void 0;if(Ke!==null){var d=Ke.memoizedState;if(u=d.destroy,o!==null&&ma(o,d.deps)){a.memoizedState=So(t,n,u,o);return}}ze.flags|=e,a.memoizedState=So(1|t,n,u,o)}function Ju(e,t){return Ni(8390656,8,e,t)}function va(e,t){return Ri(2048,8,e,t)}function ec(e,t){return Ri(4,2,e,t)}function tc(e,t){return Ri(4,4,e,t)}function nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rc(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4,4,nc.bind(null,t,e),n)}function wa(){}function oc(e,t){var n=Pt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&ma(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function ic(e,t){var n=Pt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&ma(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function sc(e,t,n){return(ir&21)===0?(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n):(Ut(n,t)||(n=Dl(),ze.lanes|=n,sr|=n,e.baseState=!0),t)}function Up(e,t){var n=Se;Se=n!==0&&4>n?n:4,e(!0);var o=pa.transition;pa.transition={};try{e(!1),t()}finally{Se=n,pa.transition=o}}function ac(){return Pt().memoizedState}function $p(e,t,n){var o=Hn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},lc(e))uc(t,n);else if(n=Mu(e,t,n,o),n!==null){var a=mt();qt(n,e,o,a),cc(n,t,o)}}function Hp(e,t,n){var o=Hn(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(lc(e))uc(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,g=u(d,n);if(a.hasEagerState=!0,a.eagerState=g,Ut(g,d)){var y=t.interleaved;y===null?(a.next=a,aa(t)):(a.next=y.next,y.next=a),t.interleaved=a;return}}catch{}finally{}n=Mu(e,t,a,o),n!==null&&(a=mt(),qt(n,e,o,a),cc(n,t,o))}}function lc(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function uc(e,t){vo=Fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cc(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ss(e,n)}}var zi={readContext:At,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},Wp={readContext:At,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:Ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4194308,4,nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=Jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Jt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=$p.bind(null,ze,e),[o.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:Gu,useDebugValue:wa,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=Gu(!1),t=e[0];return e=Up.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=ze,a=Jt();if(_e){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Je===null)throw Error(l(349));(ir&30)!==0||qu(o,t,n)}a.memoizedState=n;var u={value:n,getSnapshot:t};return a.queue=u,Ju(Qu.bind(null,o,u,e),[e]),o.flags|=2048,So(9,Yu.bind(null,o,u,n,t),void 0,null),n},useId:function(){var e=Jt(),t=Je.identifierPrefix;if(_e){var n=dn,o=cn;n=(o&~(1<<32-Bt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=wo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vp={readContext:At,useCallback:oc,useContext:At,useEffect:va,useImperativeHandle:rc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:ic,useReducer:xa,useRef:Zu,useState:function(){return xa(ko)},useDebugValue:wa,useDeferredValue:function(e){var t=Pt();return sc(t,Ke.memoizedState,e)},useTransition:function(){var e=xa(ko)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Vu,useId:ac,unstable_isNewReconciler:!1},qp={readContext:At,useCallback:oc,useContext:At,useEffect:va,useImperativeHandle:rc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:ic,useReducer:ya,useRef:Zu,useState:function(){return ya(ko)},useDebugValue:wa,useDeferredValue:function(e){var t=Pt();return Ke===null?t.memoizedState=e:sc(t,Ke.memoizedState,e)},useTransition:function(){var e=ya(ko)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Vu,useId:ac,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ka(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ai={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=mt(),a=Hn(e),u=pn(o,a);u.payload=t,n!=null&&(u.callback=n),t=Mn(e,u,a),t!==null&&(qt(t,e,a,o),Ei(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=mt(),a=Hn(e),u=pn(o,a);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Mn(e,u,a),t!==null&&(qt(t,e,a,o),Ei(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),o=Hn(e),a=pn(n,o);a.tag=2,t!=null&&(a.callback=t),t=Mn(e,a,o),t!==null&&(qt(t,e,o,n),Ei(t,e,o))}};function dc(e,t,n,o,a,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,d):t.prototype&&t.prototype.isPureReactComponent?!ao(n,o)||!ao(a,u):!0}function fc(e,t,n){var o=!1,a=Dn,u=t.contextType;return typeof u=="object"&&u!==null?u=At(u):(a=gt(t)?er:at.current,o=t.contextTypes,u=(o=o!=null)?br(e,a):Dn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ai,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=u),t}function pc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Ai.enqueueReplaceState(t,t.state,null)}function Sa(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},la(e);var u=t.contextType;typeof u=="object"&&u!==null?a.context=At(u):(u=gt(t)?er:at.current,a.context=br(e,u)),a.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(ka(e,t,u,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ai.enqueueReplaceState(a,a.state,null),Ti(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",o=t;do n+=se(o),o=o.return;while(o);var a=n}catch(u){a=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:a,digest:null}}function ja(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ba(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yp=typeof WeakMap=="function"?WeakMap:Map;function mc(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Ui||(Ui=!0,Ma=o),ba(e,t)},n}function hc(e,t,n){n=pn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){ba(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){ba(e,t),typeof o!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function gc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Yp;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=am.bind(null,e,t,n),t.then(e,e))}function xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yc(e,t,n,o,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Mn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Qp=Z.ReactCurrentOwner,xt=!1;function pt(e,t,n,o){t.child=e===null?Ou(t,null,n,o):Ir(t,e.child,n,o)}function vc(e,t,n,o,a){n=n.render;var u=t.ref;return Fr(t,a),o=ha(e,t,n,o,u,a),n=ga(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,mn(e,t,a)):(_e&&n&&Zs(t),t.flags|=1,pt(e,t,o,a),t.child)}function wc(e,t,n,o,a){if(e===null){var u=n.type;return typeof u=="function"&&!qa(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,kc(e,t,u,o,a)):(e=Yi(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&a)===0){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(d,o)&&e.ref===t.ref)return mn(e,t,a)}return t.flags|=1,e=Vn(u,o),e.ref=t.ref,e.return=t,t.child=e}function kc(e,t,n,o,a){if(e!==null){var u=e.memoizedProps;if(ao(u,o)&&e.ref===t.ref)if(xt=!1,t.pendingProps=o=u,(e.lanes&a)!==0)(e.flags&131072)!==0&&(xt=!0);else return t.lanes=e.lanes,mn(e,t,a)}return Ca(e,t,n,o,a)}function Sc(e,t,n){var o=t.pendingProps,a=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Ar,It),It|=n;else{if((n&1073741824)===0)return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Ar,It),It|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:n,Ce(Ar,It),It|=o}else u!==null?(o=u.baseLanes|n,t.memoizedState=null):o=n,Ce(Ar,It),It|=o;return pt(e,t,a,n),t.child}function jc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ca(e,t,n,o,a){var u=gt(n)?er:at.current;return u=br(t,u),Fr(t,a),n=ha(e,t,n,o,u,a),o=ga(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,mn(e,t,a)):(_e&&o&&Zs(t),t.flags|=1,pt(e,t,n,a),t.child)}function bc(e,t,n,o,a){if(gt(n)){var u=!0;yi(t)}else u=!1;if(Fr(t,a),t.stateNode===null)Di(e,t),fc(t,n,o),Sa(t,n,o,a),o=!0;else if(e===null){var d=t.stateNode,g=t.memoizedProps;d.props=g;var y=d.context,T=n.contextType;typeof T=="object"&&T!==null?T=At(T):(T=gt(n)?er:at.current,T=br(t,T));var P=n.getDerivedStateFromProps,D=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function";D||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==o||y!==T)&&pc(t,d,o,T),On=!1;var A=t.memoizedState;d.state=A,Ti(t,o,d,a),y=t.memoizedState,g!==o||A!==y||ht.current||On?(typeof P=="function"&&(ka(t,n,P,o),y=t.memoizedState),(g=On||dc(t,n,g,o,A,y,T))?(D||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=y),d.props=o,d.state=y,d.context=T,o=g):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Bu(e,t),g=t.memoizedProps,T=t.type===t.elementType?g:Ht(t.type,g),d.props=T,D=t.pendingProps,A=d.context,y=n.contextType,typeof y=="object"&&y!==null?y=At(y):(y=gt(n)?er:at.current,y=br(t,y));var $=n.getDerivedStateFromProps;(P=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==D||A!==y)&&pc(t,d,o,y),On=!1,A=t.memoizedState,d.state=A,Ti(t,o,d,a);var q=t.memoizedState;g!==D||A!==q||ht.current||On?(typeof $=="function"&&(ka(t,n,$,o),q=t.memoizedState),(T=On||dc(t,n,T,o,A,q,y)||!1)?(P||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,q,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,q,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=q),d.props=o,d.state=q,d.context=y,o=T):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),o=!1)}return Ea(e,t,n,o,u,a)}function Ea(e,t,n,o,a,u){jc(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return a&&_u(t,n,!1),mn(e,t,u);o=t.stateNode,Qp.current=t;var g=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=Ir(t,e.child,null,u),t.child=Ir(t,null,g,u)):pt(e,t,g,u),t.memoizedState=o.state,a&&_u(t,n,!0),t.child}function Cc(e){var t=e.stateNode;t.pendingContext?Tu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tu(e,t.context,!1),ua(e,t.containerInfo)}function Ec(e,t,n,o,a){return Tr(),na(a),t.flags|=256,pt(e,t,n,o),t.child}var Ta={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tc(e,t,n){var o=t.pendingProps,a=Re.current,u=!1,d=(t.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(a&2)!==0),g?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ce(Re,a&1),e===null)return ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=o.children,e=o.fallback,u?(o=t.mode,u=t.child,d={mode:"hidden",children:d},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=d):u=Qi(d,o,0,null),e=cr(e,o,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Ia(n),t.memoizedState=Ta,e):_a(t,d));if(a=e.memoizedState,a!==null&&(g=a.dehydrated,g!==null))return Kp(e,t,d,o,g,a,n);if(u){u=o.fallback,d=t.mode,a=e.child,g=a.sibling;var y={mode:"hidden",children:o.children};return(d&1)===0&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=y,t.deletions=null):(o=Vn(a,y),o.subtreeFlags=a.subtreeFlags&14680064),g!==null?u=Vn(g,u):(u=cr(u,d,n,null),u.flags|=2),u.return=t,o.return=t,o.sibling=u,t.child=o,o=u,u=t.child,d=e.child.memoizedState,d=d===null?Ia(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~n,t.memoizedState=Ta,o}return u=e.child,e=u.sibling,o=Vn(u,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function _a(e,t){return t=Qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,o){return o!==null&&na(o),Ir(t,e.child,null,n),e=_a(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kp(e,t,n,o,a,u,d){if(n)return t.flags&256?(t.flags&=-257,o=ja(Error(l(422))),Pi(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=o.fallback,a=t.mode,o=Qi({mode:"visible",children:o.children},a,0,null),u=cr(u,a,d,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,(t.mode&1)!==0&&Ir(t,e.child,null,d),t.child.memoizedState=Ia(d),t.memoizedState=Ta,u);if((t.mode&1)===0)return Pi(e,t,d,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var g=o.dgst;return o=g,u=Error(l(419)),o=ja(u,o,void 0),Pi(e,t,d,o)}if(g=(d&e.childLanes)!==0,xt||g){if(o=Je,o!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|d))!==0?0:a,a!==0&&a!==u.retryLane&&(u.retryLane=a,fn(e,a),qt(o,e,a,-1))}return Va(),o=ja(Error(l(421))),Pi(e,t,d,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=lm.bind(null,e),a._reactRetry=t,null):(e=u.treeContext,Tt=An(a.nextSibling),Et=t,_e=!0,$t=null,e!==null&&(Rt[zt++]=cn,Rt[zt++]=dn,Rt[zt++]=tr,cn=e.id,dn=e.overflow,tr=t),t=_a(t,o.children),t.flags|=4096,t)}function Ic(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),sa(e.return,t,n)}function Fa(e,t,n,o,a){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=a)}function _c(e,t,n){var o=t.pendingProps,a=o.revealOrder,u=o.tail;if(pt(e,t,o.children,n),o=Re.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ic(e,n,t);else if(e.tag===19)Ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ce(Re,o),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ii(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Fa(t,!1,a,n,u);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ii(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Fa(t,!0,n,null,u);break;case"together":Fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Di(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xp(e,t,n){switch(t.tag){case 3:Cc(t),Tr();break;case 5:Hu(t);break;case 1:gt(t.type)&&yi(t);break;case 4:ua(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;Ce(bi,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ce(Re,Re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Tc(e,t,n):(Ce(Re,Re.current&1),e=mn(e,t,n),e!==null?e.sibling:null);Ce(Re,Re.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return _c(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ce(Re,Re.current),o)break;return null;case 22:case 23:return t.lanes=0,Sc(e,t,n)}return mn(e,t,n)}var Fc,Na,Nc,Rc;Fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Na=function(){},Nc=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,or(Zt.current);var u=null;switch(n){case"input":a=Kt(e,a),o=Kt(e,o),u=[];break;case"select":a=B({},a,{value:void 0}),o=B({},o,{value:void 0}),u=[];break;case"textarea":a=nt(e,a),o=nt(e,o),u=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=hi)}mr(n,o);var d;n=null;for(T in a)if(!o.hasOwnProperty(T)&&a.hasOwnProperty(T)&&a[T]!=null)if(T==="style"){var g=a[T];for(d in g)g.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(f.hasOwnProperty(T)?u||(u=[]):(u=u||[]).push(T,null));for(T in o){var y=o[T];if(g=a!=null?a[T]:void 0,o.hasOwnProperty(T)&&y!==g&&(y!=null||g!=null))if(T==="style")if(g){for(d in g)!g.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in y)y.hasOwnProperty(d)&&g[d]!==y[d]&&(n||(n={}),n[d]=y[d])}else n||(u||(u=[]),u.push(T,n)),n=y;else T==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,g=g?g.__html:void 0,y!=null&&g!==y&&(u=u||[]).push(T,y)):T==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push(T,""+y):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(f.hasOwnProperty(T)?(y!=null&&T==="onScroll"&&Te("scroll",e),u||g===y||(u=[])):(u=u||[]).push(T,y))}n&&(u=u||[]).push("style",n);var T=u;(t.updateQueue=T)&&(t.flags|=4)}},Rc=function(e,t,n,o){n!==o&&(t.flags|=4)};function jo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Gp(e,t,n){var o=t.pendingProps;switch(Js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return gt(t.type)&&xi(),ut(t),null;case 3:return o=t.stateNode,Nr(),Ie(ht),Ie(at),fa(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$t!==null&&($a($t),$t=null))),Na(e,t),ut(t),null;case 5:ca(t);var a=or(yo.current);if(n=t.type,e!==null&&t.stateNode!=null)Nc(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return ut(t),null}if(e=or(Zt.current),Si(t)){o=t.stateNode,n=t.type;var u=t.memoizedProps;switch(o[Gt]=t,o[po]=u,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",o),Te("close",o);break;case"iframe":case"object":case"embed":Te("load",o);break;case"video":case"audio":for(a=0;a<uo.length;a++)Te(uo[a],o);break;case"source":Te("error",o);break;case"img":case"image":case"link":Te("error",o),Te("load",o);break;case"details":Te("toggle",o);break;case"input":Wo(o,u),Te("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},Te("invalid",o);break;case"textarea":sn(o,u),Te("invalid",o)}mr(n,u),a=null;for(var d in u)if(u.hasOwnProperty(d)){var g=u[d];d==="children"?typeof g=="string"?o.textContent!==g&&(u.suppressHydrationWarning!==!0&&mi(o.textContent,g,e),a=["children",g]):typeof g=="number"&&o.textContent!==""+g&&(u.suppressHydrationWarning!==!0&&mi(o.textContent,g,e),a=["children",""+g]):f.hasOwnProperty(d)&&g!=null&&d==="onScroll"&&Te("scroll",o)}switch(n){case"input":rn(o),Hr(o,u,!0);break;case"textarea":rn(o),qo(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=hi)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Gt]=t,e[po]=o,Fc(e,t,!1,!1),t.stateNode=e;e:{switch(d=Vr(n,o),n){case"dialog":Te("cancel",e),Te("close",e),a=o;break;case"iframe":case"object":case"embed":Te("load",e),a=o;break;case"video":case"audio":for(a=0;a<uo.length;a++)Te(uo[a],e);a=o;break;case"source":Te("error",e),a=o;break;case"img":case"image":case"link":Te("error",e),Te("load",e),a=o;break;case"details":Te("toggle",e),a=o;break;case"input":Wo(e,o),a=Kt(e,o),Te("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=B({},o,{value:void 0}),Te("invalid",e);break;case"textarea":sn(e,o),a=nt(e,o),Te("invalid",e);break;default:a=o}mr(n,a),g=a;for(u in g)if(g.hasOwnProperty(u)){var y=g[u];u==="style"?Qo(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&pr(e,y)):u==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&_t(e,y):typeof y=="number"&&_t(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(f.hasOwnProperty(u)?y!=null&&u==="onScroll"&&Te("scroll",e):y!=null&&ve(e,u,y,d))}switch(n){case"input":rn(e),Hr(e,o,!1);break;case"textarea":rn(e),qo(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ce(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?kn(e,!!o.multiple,u,!1):o.defaultValue!=null&&kn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=hi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)Rc(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(n=or(yo.current),or(Zt.current),Si(t)){if(o=t.stateNode,n=t.memoizedProps,o[Gt]=t,(u=o.nodeValue!==n)&&(e=Et,e!==null))switch(e.tag){case 3:mi(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(o.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Gt]=t,t.stateNode=o}return ut(t),null;case 13:if(Ie(Re),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&Tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Pu(),Tr(),t.flags|=98560,u=!1;else if(u=Si(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[Gt]=t}else Tr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ut(t),u=!1}else $t!==null&&($a($t),$t=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Re.current&1)!==0?Xe===0&&(Xe=3):Va())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return Nr(),Na(e,t),e===null&&co(t.stateNode.containerInfo),ut(t),null;case 10:return ia(t.type._context),ut(t),null;case 17:return gt(t.type)&&xi(),ut(t),null;case 19:if(Ie(Re),u=t.memoizedState,u===null)return ut(t),null;if(o=(t.flags&128)!==0,d=u.rendering,d===null)if(o)jo(u,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Ii(e),d!==null){for(t.flags|=128,jo(u,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)u=n,e=o,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Re,Re.current&1|2),t.child}e=e.sibling}u.tail!==null&&Be()>Pr&&(t.flags|=128,o=!0,jo(u,!1),t.lanes=4194304)}else{if(!o)if(e=Ii(d),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!_e)return ut(t),null}else 2*Be()-u.renderingStartTime>Pr&&n!==1073741824&&(t.flags|=128,o=!0,jo(u,!1),t.lanes=4194304);u.isBackwards?(d.sibling=t.child,t.child=d):(n=u.last,n!==null?n.sibling=d:t.child=d,u.last=d)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Be(),t.sibling=null,n=Re.current,Ce(Re,o?n&1|2:n&1),t):(ut(t),null);case 22:case 23:return Wa(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(It&1073741824)!==0&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Zp(e,t){switch(Js(t),t.tag){case 1:return gt(t.type)&&xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),Ie(ht),Ie(at),fa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ca(t),null;case 13:if(Ie(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Re),null;case 4:return Nr(),null;case 10:return ia(t.type._context),null;case 22:case 23:return Wa(),null;case 24:return null;default:return null}}var Li=!1,ct=!1,Jp=typeof WeakSet=="function"?WeakSet:Set,W=null;function zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Le(e,t,o)}else n.current=null}function Ra(e,t,n){try{n()}catch(o){Le(e,t,o)}}var zc=!1;function em(e,t){if(Ws=ri,e=du(),Ds(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,g=-1,y=-1,T=0,P=0,D=e,A=null;t:for(;;){for(var $;D!==n||a!==0&&D.nodeType!==3||(g=d+a),D!==u||o!==0&&D.nodeType!==3||(y=d+o),D.nodeType===3&&(d+=D.nodeValue.length),($=D.firstChild)!==null;)A=D,D=$;for(;;){if(D===e)break t;if(A===n&&++T===a&&(g=d),A===u&&++P===o&&(y=d),($=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=$}n=g===-1||y===-1?null:{start:g,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vs={focusedElem:e,selectionRange:n},ri=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var Y=q.memoizedProps,Ue=q.memoizedState,C=t.stateNode,k=C.getSnapshotBeforeUpdate(t.elementType===t.type?Y:Ht(t.type,Y),Ue);C.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(L){Le(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return q=zc,zc=!1,q}function bo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var u=a.destroy;a.destroy=void 0,u!==void 0&&Ra(t,n,u)}a=a.next}while(a!==o)}}function Oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function za(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ac(e){var t=e.alternate;t!==null&&(e.alternate=null,Ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[po],delete t[Ks],delete t[Dp],delete t[Lp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pc(e){return e.tag===5||e.tag===3||e.tag===4}function Dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Aa(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hi));else if(o!==4&&(e=e.child,e!==null))for(Aa(e,t,n),e=e.sibling;e!==null;)Aa(e,t,n),e=e.sibling}function Pa(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}var ot=null,Wt=!1;function Bn(e,t,n){for(n=n.child;n!==null;)Lc(e,t,n),n=n.sibling}function Lc(e,t,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Go,n)}catch{}switch(n.tag){case 5:ct||zr(n,t);case 6:var o=ot,a=Wt;ot=null,Bn(e,t,n),ot=o,Wt=a,ot!==null&&(Wt?(e=ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(Wt?(e=ot,n=n.stateNode,e.nodeType===8?Qs(e.parentNode,n):e.nodeType===1&&Qs(e,n),to(e)):Qs(ot,n.stateNode));break;case 4:o=ot,a=Wt,ot=n.stateNode.containerInfo,Wt=!0,Bn(e,t,n),ot=o,Wt=a;break;case 0:case 11:case 14:case 15:if(!ct&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var u=a,d=u.destroy;u=u.tag,d!==void 0&&((u&2)!==0||(u&4)!==0)&&Ra(n,t,d),a=a.next}while(a!==o)}Bn(e,t,n);break;case 1:if(!ct&&(zr(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(g){Le(n,t,g)}Bn(e,t,n);break;case 21:Bn(e,t,n);break;case 22:n.mode&1?(ct=(o=ct)||n.memoizedState!==null,Bn(e,t,n),ct=o):Bn(e,t,n);break;default:Bn(e,t,n)}}function Oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jp),t.forEach(function(o){var a=um.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function Vt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var u=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 5:ot=g.stateNode,Wt=!1;break e;case 3:ot=g.stateNode.containerInfo,Wt=!0;break e;case 4:ot=g.stateNode.containerInfo,Wt=!0;break e}g=g.return}if(ot===null)throw Error(l(160));Lc(u,d,a),ot=null,Wt=!1;var y=a.alternate;y!==null&&(y.return=null),a.return=null}catch(T){Le(a,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(t,e),en(e),o&4){try{bo(3,e,e.return),Oi(3,e)}catch(Y){Le(e,e.return,Y)}try{bo(5,e,e.return)}catch(Y){Le(e,e.return,Y)}}break;case 1:Vt(t,e),en(e),o&512&&n!==null&&zr(n,n.return);break;case 5:if(Vt(t,e),en(e),o&512&&n!==null&&zr(n,n.return),e.flags&32){var a=e.stateNode;try{_t(a,"")}catch(Y){Le(e,e.return,Y)}}if(o&4&&(a=e.stateNode,a!=null)){var u=e.memoizedProps,d=n!==null?n.memoizedProps:u,g=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{g==="input"&&u.type==="radio"&&u.name!=null&&$r(a,u),Vr(g,d);var T=Vr(g,u);for(d=0;d<y.length;d+=2){var P=y[d],D=y[d+1];P==="style"?Qo(a,D):P==="dangerouslySetInnerHTML"?pr(a,D):P==="children"?_t(a,D):ve(a,P,D,T)}switch(g){case"input":on(a,u);break;case"textarea":Vo(a,u);break;case"select":var A=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!u.multiple;var $=u.value;$!=null?kn(a,!!u.multiple,$,!1):A!==!!u.multiple&&(u.defaultValue!=null?kn(a,!!u.multiple,u.defaultValue,!0):kn(a,!!u.multiple,u.multiple?[]:"",!1))}a[po]=u}catch(Y){Le(e,e.return,Y)}}break;case 6:if(Vt(t,e),en(e),o&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,u=e.memoizedProps;try{a.nodeValue=u}catch(Y){Le(e,e.return,Y)}}break;case 3:if(Vt(t,e),en(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(Y){Le(e,e.return,Y)}break;case 4:Vt(t,e),en(e);break;case 13:Vt(t,e),en(e),a=e.child,a.flags&8192&&(u=a.memoizedState!==null,a.stateNode.isHidden=u,!u||a.alternate!==null&&a.alternate.memoizedState!==null||(Oa=Be())),o&4&&Oc(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(T=ct)||P,Vt(t,e),ct=T):Vt(t,e),en(e),o&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!P&&(e.mode&1)!==0)for(W=e,P=e.child;P!==null;){for(D=W=P;W!==null;){switch(A=W,$=A.child,A.tag){case 0:case 11:case 14:case 15:bo(4,A,A.return);break;case 1:zr(A,A.return);var q=A.stateNode;if(typeof q.componentWillUnmount=="function"){o=A,n=A.return;try{t=o,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(Y){Le(o,n,Y)}}break;case 5:zr(A,A.return);break;case 22:if(A.memoizedState!==null){$c(D);continue}}$!==null?($.return=A,W=$):$c(D)}P=P.sibling}e:for(P=null,D=e;;){if(D.tag===5){if(P===null){P=D;try{a=D.stateNode,T?(u=a.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(g=D.stateNode,y=D.memoizedProps.style,d=y!=null&&y.hasOwnProperty("display")?y.display:null,g.style.display=Yo("display",d))}catch(Y){Le(e,e.return,Y)}}}else if(D.tag===6){if(P===null)try{D.stateNode.nodeValue=T?"":D.memoizedProps}catch(Y){Le(e,e.return,Y)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;P===D&&(P=null),D=D.return}P===D&&(P=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Vt(t,e),en(e),o&4&&Oc(e);break;case 21:break;default:Vt(t,e),en(e)}}function en(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pc(n)){var o=n;break e}n=n.return}throw Error(l(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(_t(a,""),o.flags&=-33);var u=Dc(e);Pa(e,u,a);break;case 3:case 4:var d=o.stateNode.containerInfo,g=Dc(e);Aa(e,g,d);break;default:throw Error(l(161))}}catch(y){Le(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tm(e,t,n){W=e,Bc(e)}function Bc(e,t,n){for(var o=(e.mode&1)!==0;W!==null;){var a=W,u=a.child;if(a.tag===22&&o){var d=a.memoizedState!==null||Li;if(!d){var g=a.alternate,y=g!==null&&g.memoizedState!==null||ct;g=Li;var T=ct;if(Li=d,(ct=y)&&!T)for(W=a;W!==null;)d=W,y=d.child,d.tag===22&&d.memoizedState!==null?Hc(a):y!==null?(y.return=d,W=y):Hc(a);for(;u!==null;)W=u,Bc(u),u=u.sibling;W=a,Li=g,ct=T}Uc(e)}else(a.subtreeFlags&8772)!==0&&u!==null?(u.return=a,W=u):Uc(e)}}function Uc(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ct||Oi(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ct)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ht(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&$u(t,u,o);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$u(t,d,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var P=T.memoizedState;if(P!==null){var D=P.dehydrated;D!==null&&to(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ct||t.flags&512&&za(t)}catch(A){Le(t,t.return,A)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function $c(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Hc(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oi(4,t)}catch(y){Le(t,n,y)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(y){Le(t,a,y)}}var u=t.return;try{za(t)}catch(y){Le(t,u,y)}break;case 5:var d=t.return;try{za(t)}catch(y){Le(t,d,y)}}}catch(y){Le(t,t.return,y)}if(t===e){W=null;break}var g=t.sibling;if(g!==null){g.return=t.return,W=g;break}W=t.return}}var nm=Math.ceil,Mi=Z.ReactCurrentDispatcher,Da=Z.ReactCurrentOwner,Dt=Z.ReactCurrentBatchConfig,xe=0,Je=null,We=null,it=0,It=0,Ar=Pn(0),Xe=0,Co=null,sr=0,Bi=0,La=0,Eo=null,yt=null,Oa=0,Pr=1/0,hn=null,Ui=!1,Ma=null,Un=null,$i=!1,$n=null,Hi=0,To=0,Ba=null,Wi=-1,Vi=0;function mt(){return(xe&6)!==0?Be():Wi!==-1?Wi:Wi=Be()}function Hn(e){return(e.mode&1)===0?1:(xe&2)!==0&&it!==0?it&-it:Mp.transition!==null?(Vi===0&&(Vi=Dl()),Vi):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Vl(e.type)),e)}function qt(e,t,n,o){if(50<To)throw To=0,Ba=null,Error(l(185));Xr(e,n,o),((xe&2)===0||e!==Je)&&(e===Je&&((xe&2)===0&&(Bi|=n),Xe===4&&Wn(e,it)),vt(e,o),n===1&&xe===0&&(t.mode&1)===0&&(Pr=Be()+500,vi&&Ln()))}function vt(e,t){var n=e.callbackNode;Mf(e,t);var o=ei(e,e===Je?it:0);if(o===0)n!==null&&zl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&zl(n),t===1)e.tag===0?Op(Vc.bind(null,e)):Fu(Vc.bind(null,e)),Ap(function(){(xe&6)===0&&Ln()}),n=null;else{switch(Ll(o)){case 1:n=vs;break;case 4:n=Al;break;case 16:n=Xo;break;case 536870912:n=Pl;break;default:n=Xo}n=Jc(n,Wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wc(e,t){if(Wi=-1,Vi=0,(xe&6)!==0)throw Error(l(327));var n=e.callbackNode;if(Dr()&&e.callbackNode!==n)return null;var o=ei(e,e===Je?it:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=qi(e,o);else{t=o;var a=xe;xe|=2;var u=Yc();(Je!==e||it!==t)&&(hn=null,Pr=Be()+500,lr(e,t));do try{im();break}catch(g){qc(e,g)}while(!0);oa(),Mi.current=u,xe=a,We!==null?t=0:(Je=null,it=0,t=Xe)}if(t!==0){if(t===2&&(a=ws(e),a!==0&&(o=a,t=Ua(e,a))),t===1)throw n=Co,lr(e,0),Wn(e,o),vt(e,Be()),n;if(t===6)Wn(e,o);else{if(a=e.current.alternate,(o&30)===0&&!rm(a)&&(t=qi(e,o),t===2&&(u=ws(e),u!==0&&(o=u,t=Ua(e,u))),t===1))throw n=Co,lr(e,0),Wn(e,o),vt(e,Be()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:ur(e,yt,hn);break;case 3:if(Wn(e,o),(o&130023424)===o&&(t=Oa+500-Be(),10<t)){if(ei(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){mt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ys(ur.bind(null,e,yt,hn),t);break}ur(e,yt,hn);break;case 4:if(Wn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var d=31-Bt(o);u=1<<d,d=t[d],d>a&&(a=d),o&=~u}if(o=a,o=Be()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*nm(o/1960))-o,10<o){e.timeoutHandle=Ys(ur.bind(null,e,yt,hn),o);break}ur(e,yt,hn);break;case 5:ur(e,yt,hn);break;default:throw Error(l(329))}}}return vt(e,Be()),e.callbackNode===n?Wc.bind(null,e):null}function Ua(e,t){var n=Eo;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=qi(e,t),e!==2&&(t=yt,yt=n,t!==null&&$a(t)),e}function $a(e){yt===null?yt=e:yt.push.apply(yt,e)}function rm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],u=a.getSnapshot;a=a.value;try{if(!Ut(u(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wn(e,t){for(t&=~La,t&=~Bi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),o=1<<n;e[n]=-1,t&=~o}}function Vc(e){if((xe&6)!==0)throw Error(l(327));Dr();var t=ei(e,0);if((t&1)===0)return vt(e,Be()),null;var n=qi(e,t);if(e.tag!==0&&n===2){var o=ws(e);o!==0&&(t=o,n=Ua(e,o))}if(n===1)throw n=Co,lr(e,0),Wn(e,t),vt(e,Be()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ur(e,yt,hn),vt(e,Be()),null}function Ha(e,t){var n=xe;xe|=1;try{return e(t)}finally{xe=n,xe===0&&(Pr=Be()+500,vi&&Ln())}}function ar(e){$n!==null&&$n.tag===0&&(xe&6)===0&&Dr();var t=xe;xe|=1;var n=Dt.transition,o=Se;try{if(Dt.transition=null,Se=1,e)return e()}finally{Se=o,Dt.transition=n,xe=t,(xe&6)===0&&Ln()}}function Wa(){It=Ar.current,Ie(Ar)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zp(n)),We!==null)for(n=We.return;n!==null;){var o=n;switch(Js(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&xi();break;case 3:Nr(),Ie(ht),Ie(at),fa();break;case 5:ca(o);break;case 4:Nr();break;case 13:Ie(Re);break;case 19:Ie(Re);break;case 10:ia(o.type._context);break;case 22:case 23:Wa()}n=n.return}if(Je=e,We=e=Vn(e.current,null),it=It=t,Xe=0,Co=null,La=Bi=sr=0,yt=Eo=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,u=n.pending;if(u!==null){var d=u.next;u.next=a,o.next=d}n.pending=o}rr=null}return e}function qc(e,t){do{var n=We;try{if(oa(),_i.current=zi,Fi){for(var o=ze.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Fi=!1}if(ir=0,Ze=Ke=ze=null,vo=!1,wo=0,Da.current=null,n===null||n.return===null){Xe=1,Co=t,We=null;break}e:{var u=e,d=n.return,g=n,y=t;if(t=it,g.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var T=y,P=g,D=P.tag;if((P.mode&1)===0&&(D===0||D===11||D===15)){var A=P.alternate;A?(P.updateQueue=A.updateQueue,P.memoizedState=A.memoizedState,P.lanes=A.lanes):(P.updateQueue=null,P.memoizedState=null)}var $=xc(d);if($!==null){$.flags&=-257,yc($,d,g,u,t),$.mode&1&&gc(u,T,t),t=$,y=T;var q=t.updateQueue;if(q===null){var Y=new Set;Y.add(y),t.updateQueue=Y}else q.add(y);break e}else{if((t&1)===0){gc(u,T,t),Va();break e}y=Error(l(426))}}else if(_e&&g.mode&1){var Ue=xc(d);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),yc(Ue,d,g,u,t),na(Rr(y,g));break e}}u=y=Rr(y,g),Xe!==4&&(Xe=2),Eo===null?Eo=[u]:Eo.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var C=mc(u,y,t);Uu(u,C);break e;case 1:g=y;var k=u.type,E=u.stateNode;if((u.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Un===null||!Un.has(E)))){u.flags|=65536,t&=-t,u.lanes|=t;var L=hc(u,g,t);Uu(u,L);break e}}u=u.return}while(u!==null)}Kc(n)}catch(Q){t=Q,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function Yc(){var e=Mi.current;return Mi.current=zi,e===null?zi:e}function Va(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),Je===null||(sr&268435455)===0&&(Bi&268435455)===0||Wn(Je,it)}function qi(e,t){var n=xe;xe|=2;var o=Yc();(Je!==e||it!==t)&&(hn=null,lr(e,t));do try{om();break}catch(a){qc(e,a)}while(!0);if(oa(),xe=n,Mi.current=o,We!==null)throw Error(l(261));return Je=null,it=0,Xe}function om(){for(;We!==null;)Qc(We)}function im(){for(;We!==null&&!Ff();)Qc(We)}function Qc(e){var t=Zc(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?Kc(e):We=t,Da.current=null}function Kc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Gp(n,t,It),n!==null){We=n;return}}else{if(n=Zp(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,We=null;return}}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Xe===0&&(Xe=5)}function ur(e,t,n){var o=Se,a=Dt.transition;try{Dt.transition=null,Se=1,sm(e,t,n,o)}finally{Dt.transition=a,Se=o}return null}function sm(e,t,n,o){do Dr();while($n!==null);if((xe&6)!==0)throw Error(l(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(Bf(e,u),e===Je&&(We=Je=null,it=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||$i||($i=!0,Jc(Xo,function(){return Dr(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=Dt.transition,Dt.transition=null;var d=Se;Se=1;var g=xe;xe|=4,Da.current=null,em(e,n),Mc(n,e),Ep(Vs),ri=!!Ws,Vs=Ws=null,e.current=n,tm(n),Nf(),xe=g,Se=d,Dt.transition=u}else e.current=n;if($i&&($i=!1,$n=e,Hi=a),u=e.pendingLanes,u===0&&(Un=null),Af(n.stateNode),vt(e,Be()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(Ui)throw Ui=!1,e=Ma,Ma=null,e;return(Hi&1)!==0&&e.tag!==0&&Dr(),u=e.pendingLanes,(u&1)!==0?e===Ba?To++:(To=0,Ba=e):To=0,Ln(),null}function Dr(){if($n!==null){var e=Ll(Hi),t=Dt.transition,n=Se;try{if(Dt.transition=null,Se=16>e?16:e,$n===null)var o=!1;else{if(e=$n,$n=null,Hi=0,(xe&6)!==0)throw Error(l(331));var a=xe;for(xe|=4,W=e.current;W!==null;){var u=W,d=u.child;if((W.flags&16)!==0){var g=u.deletions;if(g!==null){for(var y=0;y<g.length;y++){var T=g[y];for(W=T;W!==null;){var P=W;switch(P.tag){case 0:case 11:case 15:bo(8,P,u)}var D=P.child;if(D!==null)D.return=P,W=D;else for(;W!==null;){P=W;var A=P.sibling,$=P.return;if(Ac(P),P===T){W=null;break}if(A!==null){A.return=$,W=A;break}W=$}}}var q=u.alternate;if(q!==null){var Y=q.child;if(Y!==null){q.child=null;do{var Ue=Y.sibling;Y.sibling=null,Y=Ue}while(Y!==null)}}W=u}}if((u.subtreeFlags&2064)!==0&&d!==null)d.return=u,W=d;else e:for(;W!==null;){if(u=W,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:bo(9,u,u.return)}var C=u.sibling;if(C!==null){C.return=u.return,W=C;break e}W=u.return}}var k=e.current;for(W=k;W!==null;){d=W;var E=d.child;if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,W=E;else e:for(d=k;W!==null;){if(g=W,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:Oi(9,g)}}catch(Q){Le(g,g.return,Q)}if(g===d){W=null;break e}var L=g.sibling;if(L!==null){L.return=g.return,W=L;break e}W=g.return}}if(xe=a,Ln(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Go,e)}catch{}o=!0}return o}finally{Se=n,Dt.transition=t}}return!1}function Xc(e,t,n){t=Rr(n,t),t=mc(e,t,1),e=Mn(e,t,1),t=mt(),e!==null&&(Xr(e,1,t),vt(e,t))}function Le(e,t,n){if(e.tag===3)Xc(e,e,n);else for(;t!==null;){if(t.tag===3){Xc(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Un===null||!Un.has(o))){e=Rr(n,e),e=hc(t,e,1),t=Mn(t,e,1),e=mt(),t!==null&&(Xr(t,1,e),vt(t,e));break}}t=t.return}}function am(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(it&n)===n&&(Xe===4||Xe===3&&(it&130023424)===it&&500>Be()-Oa?lr(e,0):La|=n),vt(e,t)}function Gc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Jo,Jo<<=1,(Jo&130023424)===0&&(Jo=4194304)));var n=mt();e=fn(e,t),e!==null&&(Xr(e,t,n),vt(e,n))}function lm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gc(e,n)}function um(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),Gc(e,n)}var Zc;Zc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)xt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return xt=!1,Xp(e,t,n);xt=(e.flags&131072)!==0}else xt=!1,_e&&(t.flags&1048576)!==0&&Nu(t,ki,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Di(e,t),e=t.pendingProps;var a=br(t,at.current);Fr(t,n),a=ha(null,t,o,e,a,n);var u=ga();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(o)?(u=!0,yi(t)):u=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,la(t),a.updater=Ai,t.stateNode=a,a._reactInternals=t,Sa(t,o,e,n),t=Ea(null,t,o,!0,u,n)):(t.tag=0,_e&&u&&Zs(t),pt(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Di(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=dm(o),e=Ht(o,e),a){case 0:t=Ca(null,t,o,e,n);break e;case 1:t=bc(null,t,o,e,n);break e;case 11:t=vc(null,t,o,e,n);break e;case 14:t=wc(null,t,o,Ht(o.type,e),n);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ht(o,a),Ca(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ht(o,a),bc(e,t,o,a,n);case 3:e:{if(Cc(t),e===null)throw Error(l(387));o=t.pendingProps,u=t.memoizedState,a=u.element,Bu(e,t),Ti(t,o,null,n);var d=t.memoizedState;if(o=d.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){a=Rr(Error(l(423)),t),t=Ec(e,t,o,n,a);break e}else if(o!==a){a=Rr(Error(l(424)),t),t=Ec(e,t,o,n,a);break e}else for(Tt=An(t.stateNode.containerInfo.firstChild),Et=t,_e=!0,$t=null,n=Ou(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),o===a){t=mn(e,t,n);break e}pt(e,t,o,n)}t=t.child}return t;case 5:return Hu(t),e===null&&ta(t),o=t.type,a=t.pendingProps,u=e!==null?e.memoizedProps:null,d=a.children,qs(o,a)?d=null:u!==null&&qs(o,u)&&(t.flags|=32),jc(e,t),pt(e,t,d,n),t.child;case 6:return e===null&&ta(t),null;case 13:return Tc(e,t,n);case 4:return ua(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ir(t,null,o,n):pt(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ht(o,a),vc(e,t,o,a,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,u=t.memoizedProps,d=a.value,Ce(bi,o._currentValue),o._currentValue=d,u!==null)if(Ut(u.value,d)){if(u.children===a.children&&!ht.current){t=mn(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var g=u.dependencies;if(g!==null){d=u.child;for(var y=g.firstContext;y!==null;){if(y.context===o){if(u.tag===1){y=pn(-1,n&-n),y.tag=2;var T=u.updateQueue;if(T!==null){T=T.shared;var P=T.pending;P===null?y.next=y:(y.next=P.next,P.next=y),T.pending=y}}u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),sa(u.return,n,t),g.lanes|=n;break}y=y.next}}else if(u.tag===10)d=u.type===t.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(l(341));d.lanes|=n,g=d.alternate,g!==null&&(g.lanes|=n),sa(d,n,t),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===t){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}pt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Fr(t,n),a=At(a),o=o(a),t.flags|=1,pt(e,t,o,n),t.child;case 14:return o=t.type,a=Ht(o,t.pendingProps),a=Ht(o.type,a),wc(e,t,o,a,n);case 15:return kc(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ht(o,a),Di(e,t),t.tag=1,gt(o)?(e=!0,yi(t)):e=!1,Fr(t,n),fc(t,o,a),Sa(t,o,a,n),Ea(null,t,o,!0,e,n);case 19:return _c(e,t,n);case 22:return Sc(e,t,n)}throw Error(l(156,t.tag))};function Jc(e,t){return Rl(e,t)}function cm(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,n,o){return new cm(e,t,n,o)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dm(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ue)return 11;if(e===be)return 14}return 2}function Vn(e,t){var n=e.alternate;return n===null?(n=Lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yi(e,t,n,o,a,u){var d=2;if(o=e,typeof e=="function")qa(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case we:return cr(n.children,a,u,t);case Ee:d=8,a|=8;break;case K:return e=Lt(12,n,t,a|2),e.elementType=K,e.lanes=u,e;case he:return e=Lt(13,n,t,a),e.elementType=he,e.lanes=u,e;case Ye:return e=Lt(19,n,t,a),e.elementType=Ye,e.lanes=u,e;case pe:return Qi(n,a,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:d=10;break e;case U:d=9;break e;case ue:d=11;break e;case be:d=14;break e;case ne:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Lt(d,n,t,a),t.elementType=e,t.type=o,t.lanes=u,t}function cr(e,t,n,o){return e=Lt(7,e,o,t),e.lanes=n,e}function Qi(e,t,n,o){return e=Lt(22,e,o,t),e.elementType=pe,e.lanes=n,e.stateNode={isHidden:!1},e}function Ya(e,t,n){return e=Lt(6,e,null,t),e.lanes=n,e}function Qa(e,t,n){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fm(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ks(0),this.expirationTimes=ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ka(e,t,n,o,a,u,d,g,y){return e=new fm(e,t,n,g,y),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Lt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},la(u),e}function pm(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function ed(e){if(!e)return Dn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(gt(n))return Iu(e,n,t)}return t}function td(e,t,n,o,a,u,d,g,y){return e=Ka(n,o,!0,e,a,u,d,g,y),e.context=ed(null),n=e.current,o=mt(),a=Hn(n),u=pn(o,a),u.callback=t??null,Mn(n,u,a),e.current.lanes=a,Xr(e,a,o),vt(e,o),e}function Ki(e,t,n,o){var a=t.current,u=mt(),d=Hn(a);return n=ed(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(u,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Mn(a,t,d),e!==null&&(qt(e,a,d,u),Ei(e,a,d)),d}function Xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xa(e,t){nd(e,t),(e=e.alternate)&&nd(e,t)}function mm(){return null}var rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ga(e){this._internalRoot=e}Gi.prototype.render=Ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Ki(e,t,null,null)},Gi.prototype.unmount=Ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){Ki(null,e,null,null)}),t[ln]=null}};function Gi(e){this._internalRoot=e}Gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&Hl(e)}};function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function hm(e,t,n,o,a){if(a){if(typeof o=="function"){var u=o;o=function(){var T=Xi(d);u.call(T)}}var d=td(t,o,e,0,null,!1,!1,"",od);return e._reactRootContainer=d,e[ln]=d.current,co(e.nodeType===8?e.parentNode:e),ar(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var g=o;o=function(){var T=Xi(y);g.call(T)}}var y=Ka(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=y,e[ln]=y.current,co(e.nodeType===8?e.parentNode:e),ar(function(){Ki(t,y,n,o)}),y}function Ji(e,t,n,o,a){var u=n._reactRootContainer;if(u){var d=u;if(typeof a=="function"){var g=a;a=function(){var y=Xi(d);g.call(y)}}Ki(t,d,e,a)}else d=hm(n,t,e,a,o);return Xi(d)}Ol=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kr(t.pendingLanes);n!==0&&(Ss(t,n|1),vt(t,Be()),(xe&6)===0&&(Pr=Be()+500,Ln()))}break;case 13:ar(function(){var o=fn(e,1);if(o!==null){var a=mt();qt(o,e,1,a)}}),Xa(e,1)}},js=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var n=mt();qt(t,e,134217728,n)}Xa(e,134217728)}},Ml=function(e){if(e.tag===13){var t=Hn(e),n=fn(e,t);if(n!==null){var o=mt();qt(n,e,t,o)}Xa(e,t)}},Bl=function(){return Se},Ul=function(e,t){var n=Se;try{return Se=e,t()}finally{Se=n}},qr=function(e,t,n){switch(t){case"input":if(on(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=gi(o);if(!a)throw Error(l(90));wn(o),on(o,a)}}}break;case"textarea":Vo(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}},Qe=Ha,st=ar;var gm={usingClientEntryPoint:!1,Events:[mo,Sr,gi,ae,Me,Ha]},Io={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xm={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fl(e),e===null?null:e.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!es.isDisabled&&es.supportsFiber)try{Go=es.inject(xm),Xt=es}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm,wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Za(t))throw Error(l(200));return pm(e,t,null,n)},wt.createRoot=function(e,t){if(!Za(e))throw Error(l(299));var n=!1,o="",a=rd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ka(e,1,!1,null,null,n,!1,o,a),e[ln]=t.current,co(e.nodeType===8?e.parentNode:e),new Ga(t)},wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Fl(t),e=e===null?null:e.stateNode,e},wt.flushSync=function(e){return ar(e)},wt.hydrate=function(e,t,n){if(!Zi(t))throw Error(l(200));return Ji(null,e,t,!0,n)},wt.hydrateRoot=function(e,t,n){if(!Za(e))throw Error(l(405));var o=n!=null&&n.hydratedSources||null,a=!1,u="",d=rd;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=td(t,null,e,1,n??null,a,!1,u,d),e[ln]=t.current,co(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Gi(t)},wt.render=function(e,t,n){if(!Zi(t))throw Error(l(200));return Ji(null,e,t,!1,n)},wt.unmountComponentAtNode=function(e){if(!Zi(e))throw Error(l(40));return e._reactRootContainer?(ar(function(){Ji(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1},wt.unstable_batchedUpdates=Ha,wt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Zi(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Ji(e,t,n,!1,o)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var fd;function Od(){if(fd)return tl.exports;fd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),tl.exports=bm(),tl.exports}var pd;function Cm(){if(pd)return ts;pd=1;var i=Od();return ts.createRoot=i.createRoot,ts.hydrateRoot=i.hydrateRoot,ts}var Em=Cm();function tt({label:i,variant:s="neutral",size:l="md"}){const c=l==="sm"?{height:"24px",paddingLeft:"10px",paddingRight:"10px",fontSize:"12px",lineHeight:"18px",fontWeight:"500"}:{height:"28px",paddingLeft:"12px",paddingRight:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600"},f=s==="neutral"?{backgroundColor:"var(--card)",dotColor:"var(--muted-foreground)",textColor:"var(--foreground)"}:{backgroundColor:"var(--accent)",dotColor:"var(--primary)",textColor:"var(--accent-foreground)"};return r.jsxs("div",{style:{height:c.height,paddingLeft:c.paddingLeft,paddingRight:c.paddingRight,borderRadius:"999px",gap:"8px",backgroundColor:f.backgroundColor,border:"1px solid var(--border)",display:"inline-flex",alignItems:"center"},children:[r.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:f.dotColor}}),r.jsx("span",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:c.fontSize,lineHeight:c.lineHeight,fontWeight:c.fontWeight,color:f.textColor},children:i})]})}function Ve({label:i,variant:s="primary",size:l="md",onClick:c,disabled:f=!1,fullWidth:p=!1}){const m={sm:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}}[l],x={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"var(--card)",color:"var(--foreground)",border:"1px solid var(--border)"},ghost:{backgroundColor:"transparent",color:"var(--foreground)",border:"none"}}[s];return r.jsx("button",{onClick:c,disabled:f,style:{height:m.height,paddingLeft:m.paddingLeft,paddingRight:m.paddingRight,borderRadius:m.borderRadius,backgroundColor:f?"var(--muted)":x.backgroundColor,color:x.color,fontSize:m.fontSize,lineHeight:m.lineHeight,fontWeight:"600",border:f?"1px solid var(--border)":x.border,display:"inline-flex",alignItems:"center",justifyContent:"center",width:p?"100%":"auto",cursor:f?"not-allowed":"pointer",fontFamily:"Inter, system-ui, sans-serif",opacity:f?.65:1},children:i})}const Tm="/assets/Big%20Logo-Bdh1LtUa.svg",Im="/assets/Logo%20Dark-BJGV7fxC.svg",_m="2026-03-10-1";function Md({size:i=32,variant:s="dark",showText:l=!0,href:c="/"}){const f=s==="light"?Im:Tm,p=s==="dark"?"#101828":"#FFFFFF",m=r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[r.jsx("div",{style:{width:`${i}px`,height:`${i}px`,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:`${f}?v=${_m}`,alt:"Vibe Station Logo",width:i,height:i,style:{width:`${i}px`,height:`${i}px`,objectFit:"contain",display:"block"}})}),l&&r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:i>=48?"24px":i>=32?"20px":"16px",lineHeight:i>=48?"32px":i>=32?"28px":"24px",fontWeight:"600",letterSpacing:"-0.02em",color:p},children:"VIBE STATION"})]});return c?r.jsx("a",{href:c,style:{textDecoration:"none",display:"inline-flex",cursor:"pointer"},children:m}):m}const Fm="w-full mx-auto px-4 md:px-6 lg:px-8",Nm={wide:"max-w-[1200px]",standard:"max-w-[1080px]",narrow:"max-w-[860px]"};function Rm(i,s){return[Fm,Nm[i],s].filter(Boolean).join(" ")}function hs({children:i,width:s="wide",className:l}){return r.jsx("div",{className:Rm(s,l),children:i})}function zm({children:i,className:s}){return r.jsx(hs,{width:"wide",className:s,children:i})}function Am({children:i,className:s}){return r.jsx(hs,{width:"standard",className:s,children:i})}function Pm({children:i,className:s}){return r.jsx(hs,{width:"narrow",className:s,children:i})}const ke=Object.assign(hs,{Wide:zm,Standard:Am,Narrow:Pm}),Bd="kz9z4f-2a.myshopify.com",Ud="daf156f4e4046c726902bca5c28e9cbe",Dm="2026-01",$d="http://localhost:3001",Ao="/api/shopify",Lm="false".toLowerCase()==="true",Om="X-Shopify-Storefront-Access-Token",cl="IN".toUpperCase(),Hd="EN".toUpperCase(),Mm=`https://${Bd}/api/${Dm}/graphql.json`,Wd="shopify_cart_id";class Pe extends Error{constructor(s,l,c){super(s),this.code=l,this.field=c,this.name="StorefrontAPIError"}}const Vd=()=>Ud.length>0,Bm=()=>Bd.length>0,Um=()=>$d.length>0&&Ao.length>0,$m=()=>Ao.startsWith("http://")||Ao.startsWith("https://")?Ao:`${$d.replace(/\/+$/,"")}/${Ao.replace(/^\/+/,"")}`,qd=()=>Lm||!Vd()&&Um(),Hm=()=>qd()?!0:Bm()&&Vd();async function qe(i,s={}){if(!Hm())throw new Pe("Shopify is not configured","SHOPIFY_NOT_CONFIGURED");let l;if(qd()?l=await fetch($m(),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({query:i,variables:s})}):l=await fetch(Mm,{method:"POST",headers:{"Content-Type":"application/json",[Om]:Ud},body:JSON.stringify({query:i,variables:s})}),!l.ok)throw l.status===429?new Pe("Rate limit exceeded","RATE_LIMIT"):new Pe(`HTTP ${l.status}`,"HTTP_ERROR");const{data:c,errors:f}=await l.json();if(f&&f.length>0)throw new Pe(f[0].message,"GRAPHQL_ERROR",f[0].field);if(!c)throw new Pe("Missing response data","EMPTY_DATA");return c}function vl(i){var c,f,p;const s=i.featuredImage;if(s!=null&&s.url)return{url:s.url,altText:s.altText||i.title||"Product image"};const l=(p=(f=(c=i.images)==null?void 0:c.edges)==null?void 0:f[0])==null?void 0:p.node;return l!=null&&l.url?{url:l.url,altText:l.altText||i.title||"Product image"}:null}const Wm=`
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
`,Yd=`@inContext(country: ${cl}, language: ${Hd})`,Vm=`
  query ProductList(
    $first: Int = 24
    $after: String
    $sortKey: ProductSortKeys = BEST_SELLING
    $reverse: Boolean = false
    $query: String
  ) ${Yd} {
    products(first: $first, after: $after, sortKey: $sortKey, reverse: $reverse, query: $query) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          ${Wm}
        }
      }
    }
  }
`,qm=`
  query ProductDetail($handle: String!) ${Yd} {
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
`,Br=`
  id
  checkoutUrl
  buyerIdentity {
    customer {
      id
      email
    }
  }
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
`,Ym=`
  mutation CartCreate($input: CartInput!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ${Br}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Qm=`
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${Br}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Km=`
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${Br}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Xm=`
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ${Br}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Gm=`
  query Cart($id: ID!) {
    cart(id: $id) {
      ${Br}
    }
  }
`,Zm=`
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ${Br}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Qd=i=>{var l;const s=(l=i.field)!=null&&l.length?` for ${i.field.join(".")}`:"";switch(i.code){case"INVALID":return`Shopify rejected the cart update${s}. ${i.message}`;case"LESS_THAN":return"Quantity is below the minimum allowed.";case"GREATER_THAN":return"Quantity exceeds the maximum allowed.";case"INVALID_MERCHANDISE_LINE":return"This product variant is unavailable.";case"MISSING_DISCOUNT_CODE":case"DISCOUNT_NOT_FOUND":return"That discount code could not be found.";case"CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE":return"This cart does not meet the discount requirements.";case"RELEASE_PHASE_NOT_STARTED":return"This product is not available yet.";case"TOO_MANY_LINE_ITEMS":return"Your cart has reached the item limit.";case"INVALID_DELIVERY_GROUP":return"Delivery details for this cart are invalid. Please try again.";case"BLANK":return`A required cart value is missing${s}.`;case"NOT_ENOUGH_IN_STOCK":return"There is not enough stock available for that quantity.";default:return i.message}},gs=(i,s)=>{const l=i[s];if(l.userErrors.length>0){const c=l.userErrors[0];throw new Pe(Qd(c),c.code||"CART_USER_ERROR",c.field)}if(!l.cart)throw new Pe("Cart was not returned by Shopify","MISSING_CART");return l.cart};async function Jm(i){return(await qe(qm,{handle:i})).product}async function cs(i={}){const s=typeof i=="number"?{first:i}:i;return(await qe(Vm,{first:s.first??24,after:s.after??null,sortKey:s.sortKey??"BEST_SELLING",reverse:s.reverse??!1,query:s.query})).products}async function eh(i=[],s){const l=await qe(Ym,{input:{lines:i,buyerIdentity:{countryCode:cl,...s?{customerAccessToken:s}:{}}},country:cl,language:Hd});return gs(l,"cartCreate")}async function th(i,s){const l=await qe(Qm,{cartId:i,lines:s});return gs(l,"cartLinesAdd")}async function nh(i,s){const l=await qe(Km,{cartId:i,lines:s});return gs(l,"cartLinesUpdate")}async function rh(i,s){const l=await qe(Xm,{cartId:i,lineIds:s});return gs(l,"cartLinesRemove")}async function oh(i){return(await qe(Gm,{id:i})).cart}async function md(i,s){const c=(await qe(Zm,{cartId:i,buyerIdentity:s})).cartBuyerIdentityUpdate;if(c.userErrors.length>0){const f=c.userErrors[0];throw new Pe(Qd(f),f.code||"CART_USER_ERROR",f.field)}if(!c.cart)throw new Pe("Cart was not returned by Shopify","MISSING_CART");return c.cart}const ih=()=>typeof window>"u"?null:window.localStorage.getItem(Wd),sh=i=>{typeof window>"u"||window.localStorage.setItem(Wd,i)},wl="customer_token",kl="token_expires_at",Kd=`
  id
  email
  firstName
  lastName
  phone
  defaultAddress {
    id
    firstName
    lastName
    company
    address1
    address2
    city
    phone
    province
    country
    zip
  }
  addresses(first: 10) {
    edges {
      node {
        id
        firstName
        lastName
        company
        address1
        address2
        city
        phone
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
`,ah=`
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
`,xs=()=>typeof window<"u",Xd=i=>{if(!i)return!0;const s=Date.parse(i);return Number.isNaN(s)?!0:s<=Date.now()},Sl=i=>{xs()&&(window.localStorage.setItem(wl,i.accessToken),window.localStorage.setItem(kl,i.expiresAt))},Gd=()=>xs()?window.localStorage.getItem(wl):null,Zd=()=>xs()?window.localStorage.getItem(kl):null,lh=i=>{var l;const s=(l=i.field)!=null&&l.length?` for ${i.field.join(".")}`:"";switch(i.code){case"ALREADY_ENABLED":return"An account with this email already exists.";case"BLANK":return`A required value is missing${s}.`;case"TAKEN":return`A customer already exists${s}.`;case"INVALID":return`Shopify rejected the value${s}. ${i.message}`;case"TOO_LONG":return`The value is too long${s}.`;case"UNIDENTIFIED_CUSTOMER":return"The email or password is incorrect.";case"TOO_MANY_FAILED_ATTEMPTS":return"Too many failed attempts. Please wait and try again.";case"CUSTOMER_DISABLED":return"This customer account is disabled.";case"BAD_DOMAIN":return`The email address domain is invalid${s}.`;case"TOKEN_INVALID":return"The customer session is invalid. Please sign in again.";case"CUSTOMER_RESET_TOKEN_INVALID":case"TOKEN_EXPIRED":return"This link has expired. Please request a new one.";case"PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE":return"Password cannot start or end with whitespace.";case"PHONE_NUMBER_ALREADY_USED":return"That phone number is already in use.";case"CUSTOMER_ADDRESS_NOT_FOUND":return"The selected address could not be found.";default:return i.message}},uh=(i,s,l)=>{if(i instanceof Pe){const c=i.code==="RATE_LIMIT"?"Too many requests. Please try again in a moment.":i.code==="HTTP_ERROR"?"Shopify could not be reached. Please try again.":i.code==="GRAPHQL_ERROR"?"Shopify returned an unexpected error. Please try again.":i.message||l;return{type:i.code==="HTTP_ERROR"||i.code==="RATE_LIMIT"?"network":"api",message:c,code:i.code||s,field:i.field}}return i instanceof TypeError?{type:"network",message:"Network request failed while contacting Shopify.",code:s}:{type:"unknown",message:l,code:s}},dl=i=>({ok:!1,data:null,error:i}),jl=i=>({ok:!0,data:i,error:null}),yn=(i,s)=>{if(i.length===0)return;const l=i[0];throw new Pe(lh(l),l.code||s,l.field)},ch=()=>{const i=Gd(),s=Zd();return!i||!s?(fl(),dl({type:"session",message:"No active customer session was found.",code:"CUSTOMER_SESSION_MISSING"})):Xd(s)?(fl(),dl({type:"session",message:"The customer session has expired. Please sign in again.",code:"CUSTOMER_SESSION_EXPIRED"})):jl(i)},Mt=async(i,s,l)=>{try{return jl(await i())}catch(c){return dl(uh(c,s,l))}};function fl(){xs()&&(window.localStorage.removeItem(wl),window.localStorage.removeItem(kl))}function Or(){const i=Gd(),s=Zd();return{accessToken:i,expiresAt:s,isExpired:Xd(s)}}function ns(){fl()}const dh=`
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
`,fh=`
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
`,ph=`
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
`,mh=`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,hh=`
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
`,gh=`
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ${Kd}
    }
  }
`,xh=`
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
            ${ah}
          }
        }
      }
    }
  }
`,yh=`
  mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        ${Kd}
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,vh=`
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
`,wh=`
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
`,kh=`
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
`,Sh=`
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
`;async function jh(i){return Mt(async()=>{const s=await qe(dh,{input:i});if(yn(s.customerCreate.customerUserErrors,"CUSTOMER_CREATE_ERROR"),!s.customerCreate.customer)throw new Pe("Customer was not returned by Shopify","MISSING_CUSTOMER");return s.customerCreate.customer},"CUSTOMER_CREATE_ERROR","Unable to create the customer account.")}async function hd(i,s){return Mt(async()=>{const l=await qe(fh,{input:{email:i,password:s}});if(yn(l.customerAccessTokenCreate.customerUserErrors,"CUSTOMER_LOGIN_ERROR"),!l.customerAccessTokenCreate.customerAccessToken)throw new Pe("Customer access token was not returned by Shopify","MISSING_CUSTOMER_TOKEN");return Sl(l.customerAccessTokenCreate.customerAccessToken),l.customerAccessTokenCreate.customerAccessToken},"CUSTOMER_LOGIN_ERROR","Unable to sign in the customer.")}async function pl(i){const s=i?jl(i):ch();return s.ok?Mt(async()=>{const l=await qe(ph,{customerAccessToken:s.data});if(l.customerAccessTokenRenew.userErrors.length>0){const c=l.customerAccessTokenRenew.userErrors[0];throw new Pe(c.message,"CUSTOMER_TOKEN_RENEW_ERROR",c.field)}if(!l.customerAccessTokenRenew.customerAccessToken)throw new Pe("Customer access token renewal did not return a token","MISSING_CUSTOMER_TOKEN");return Sl(l.customerAccessTokenRenew.customerAccessToken),l.customerAccessTokenRenew.customerAccessToken},"CUSTOMER_TOKEN_RENEW_ERROR","Unable to renew the customer session."):s}async function bh(i){return Mt(async()=>{const s=await qe(mh,{email:i});return yn(s.customerRecover.customerUserErrors,"CUSTOMER_RECOVER_ERROR"),{email:i,submitted:!0}},"CUSTOMER_RECOVER_ERROR","Unable to request a password reset.")}async function Ch(i,s){return Mt(async()=>{const l=await qe(hh,{resetUrl:i,password:s});if(yn(l.customerResetByUrl.customerUserErrors,"CUSTOMER_RESET_ERROR"),!l.customerResetByUrl.customerAccessToken)throw new Pe("Customer password reset did not return a new access token","MISSING_CUSTOMER_TOKEN");return Sl(l.customerResetByUrl.customerAccessToken),l.customerResetByUrl.customerAccessToken},"CUSTOMER_RESET_ERROR","Unable to reset the customer password.")}async function Lr(i){return Mt(async()=>(await qe(gh,{customerAccessToken:i})).customer,"CUSTOMER_FETCH_ERROR","Unable to load customer data.")}async function Eh(i,s=10,l){return Mt(async()=>{var f;return((f=(await qe(xh,{customerAccessToken:i,first:s,after:l||null})).customer)==null?void 0:f.orders)||null},"CUSTOMER_ORDERS_FETCH_ERROR","Unable to load customer orders.")}async function Th(i,s){return Mt(async()=>{const l=await qe(yh,{customerAccessToken:i,customer:s});if(yn(l.customerUpdate.customerUserErrors,"CUSTOMER_UPDATE_ERROR"),!l.customerUpdate.customer)throw new Pe("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerUpdate.customer},"CUSTOMER_UPDATE_ERROR","Unable to update the customer profile.")}async function Ih(i,s){return Mt(async()=>{const l=await qe(vh,{customerAccessToken:i,address:s});if(yn(l.customerAddressCreate.customerUserErrors,"CUSTOMER_ADDRESS_CREATE_ERROR"),!l.customerAddressCreate.customerAddress)throw new Pe("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressCreate.customerAddress},"CUSTOMER_ADDRESS_CREATE_ERROR","Unable to create the customer address.")}async function _h(i,s,l){return Mt(async()=>{const c=await qe(wh,{customerAccessToken:i,id:s,address:l});if(yn(c.customerAddressUpdate.customerUserErrors,"CUSTOMER_ADDRESS_UPDATE_ERROR"),!c.customerAddressUpdate.customerAddress)throw new Pe("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return c.customerAddressUpdate.customerAddress},"CUSTOMER_ADDRESS_UPDATE_ERROR","Unable to update the customer address.")}async function Fh(i,s){return Mt(async()=>{const l=await qe(kh,{customerAccessToken:i,id:s});if(yn(l.customerAddressDelete.customerUserErrors,"CUSTOMER_ADDRESS_DELETE_ERROR"),!l.customerAddressDelete.deletedCustomerAddressId)throw new Pe("Deleted customer address id was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressDelete.deletedCustomerAddressId},"CUSTOMER_ADDRESS_DELETE_ERROR","Unable to delete the customer address.")}async function Nh(i,s){return Mt(async()=>{const l=await qe(Sh,{customerAccessToken:i,addressId:s});if(yn(l.customerDefaultAddressUpdate.customerUserErrors,"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR"),!l.customerDefaultAddressUpdate.customer)throw new Pe("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerDefaultAddressUpdate.customer.defaultAddress},"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR","Unable to update the default address.")}const Rh=(i,s)=>{const l=Number(i);return!Number.isFinite(l)||!s?i||"":new Intl.NumberFormat("en-US",{style:"currency",currency:s}).format(l)},Fo=(i,s)=>({id:i.id,email:i.email,firstName:i.firstName||"",lastName:i.lastName||"",phone:i.phone||void 0,acceptsMarketing:!1,createdAt:s||new Date().toISOString()}),gd=i=>{var l;const s=((l=i.defaultAddress)==null?void 0:l.id)||null;return i.addresses.edges.map(c=>c.node).filter(c=>!!(c!=null&&c.id)).map(c=>({id:c.id,firstName:c.firstName||"",lastName:c.lastName||"",company:c.company||void 0,address1:c.address1||"",address2:c.address2||void 0,city:c.city||"",province:c.province||"",zip:c.zip||"",country:c.country||"",phone:c.phone||void 0,isDefault:c.id===s}))},zh=i=>i?i.edges.map(s=>{var l,c;return{id:s.node.id,orderNumber:String(s.node.orderNumber),createdAt:s.node.processedAt,totalPrice:Rh((l=s.node.totalPriceV2)==null?void 0:l.amount,(c=s.node.totalPriceV2)==null?void 0:c.currencyCode),fulfillmentStatus:s.node.fulfillmentStatus==="FULFILLED"||s.node.fulfillmentStatus==="UNFULFILLED"||s.node.fulfillmentStatus==="PARTIALLY_FULFILLED"||s.node.fulfillmentStatus==="CANCELLED"?s.node.fulfillmentStatus:"UNFULFILLED",lineItems:s.node.lineItems.edges.map((f,p)=>({id:`${s.node.id}-${p}`,title:f.node.title,quantity:f.node.quantity,price:""}))}}):[],xd=i=>({firstName:i.firstName||void 0,lastName:i.lastName||void 0,company:i.company||void 0,address1:i.address1||void 0,address2:i.address2||void 0,city:i.city||void 0,province:i.province||void 0,zip:i.zip||void 0,country:i.country||void 0,phone:i.phone||void 0});function Yn(i,s){const l=new Error(i);return l.code=s,l}function Ah(){const[i,s]=N.useState(null),[l,c]=N.useState(null),[f,p]=N.useState(!0),m=async()=>{const I=Or();if(!I.accessToken){s(null),c(null);return}const _=await pl(I.accessToken);if(!_.ok)throw ns(),s(null),c(null),new Error(_.error.message||"Customer session expired.");const R=await Lr(_.data.accessToken);if(!R.ok||!R.data)throw new Error(R.error.message||"Unable to load customer data.");s(Fo(R.data,i==null?void 0:i.createdAt)),c(_.data.accessToken)};return N.useEffect(()=>{let I=!1;return(async()=>{var R;try{const z=Or();if(!z.accessToken){I||(s(null),c(null),p(!1));return}const le=await pl(z.accessToken);if(!le.ok){I||(ns(),s(null),c(null));return}const de=await Lr(le.data.accessToken);if(!de.ok||!de.data)throw new Error(((R=de.error)==null?void 0:R.message)||"Unable to load customer data.");I||(s(Fo(de.data)),c(le.data.accessToken))}catch{I||(ns(),s(null),c(null))}finally{I||p(!1)}})(),()=>{I=!0}},[]),{customer:i,accessToken:l,isAuthenticated:!!(i&&l),isLoading:f,login:async(I,_)=>{p(!0);try{const R=await hd(I,_);if(!R.ok)throw Yn(R.error.message||"Unable to sign in.",R.error.code);const z=await Lr(R.data.accessToken);if(!z.ok||!z.data)throw Yn(z.error.message||"Unable to load customer data.",z.error.code);s(Fo(z.data)),c(R.data.accessToken)}finally{p(!1)}},register:async I=>{p(!0);try{const _=await jh(I);if(!_.ok)throw Yn(_.error.message||"Unable to create the account.",_.error.code);const R=await hd(I.email,I.password);if(!R.ok)throw Yn(R.error.message||"Account created but sign-in failed.",R.error.code);const z=await Lr(R.data.accessToken);if(!z.ok||!z.data)throw Yn(z.error.message||"Unable to load customer data.",z.error.code);s(Fo(z.data,new Date().toISOString())),c(R.data.accessToken)}finally{p(!1)}},logout:()=>{ns(),s(null),c(null)},updateProfile:async I=>{const _=l||Or().accessToken;if(!_)throw new Error("No active customer session was found.");p(!0);try{const R=await Th(_,I);if(!R.ok)throw Yn(R.error.message||"Unable to update the profile.",R.error.code);s(z=>Fo(R.data,z==null?void 0:z.createdAt))}finally{p(!1)}},refreshCustomerData:m,requestPasswordReset:async I=>{const _=await bh(I);if(!_.ok){if(_.error.code==="UNIDENTIFIED_CUSTOMER")return;throw Yn(_.error.message||"Unable to send the password reset email.",_.error.code)}},resetPassword:async(I,_)=>{const R=await Ch(I,_);if(!R.ok)throw Yn(R.error.message||"Unable to reset the password.",R.error.code)}}}function dr(i,s){const l=new Error(i);return l.code=s,l}function Oe(i){return(i==null?void 0:i.trim().toLowerCase().replace(/\s+/g," "))||""}function Ph(i,s){return Oe(i.firstName)===Oe(s.firstName)&&Oe(i.lastName)===Oe(s.lastName)&&Oe(i.company)===Oe(s.company)&&Oe(i.address1)===Oe(s.address1)&&Oe(i.address2)===Oe(s.address2)&&Oe(i.city)===Oe(s.city)&&Oe(i.province)===Oe(s.province)&&Oe(i.zip)===Oe(s.zip)&&Oe(i.country)===Oe(s.country)&&Oe(i.phone)===Oe(s.phone)}function Dh(i,s){const l=Oe(i);return Oe(s)==="taken"&&l.includes("address")&&(l.includes("another customer")||l.includes("other customer"))}function Lh(){const{accessToken:i,isAuthenticated:s}=nn(),[l,c]=N.useState([]),[f,p]=N.useState(!0),[m,x]=N.useState(!1),[b,j]=N.useState(null),S=i||Or().accessToken,h=async()=>{var I,_;if(!S||!s){c([]),p(!1);return}p(!0),j(null);try{const R=await Lr(S);if(!R.ok||!R.data)throw dr(((I=R.error)==null?void 0:I.message)||"Unable to load addresses.",(_=R.error)==null?void 0:_.code);c(gd(R.data))}catch(R){j(R instanceof Error?R.message:"Unable to load addresses.")}finally{p(!1)}};N.useEffect(()=>{h()},[S,s]);const v=async I=>{x(!0),j(null);try{await I(),await h()}catch(_){const R=_ instanceof Error?_.message:"Unable to update addresses.";throw j(R),_}finally{x(!1)}};return{addresses:l,isLoading:f,isSaving:m,error:b,refresh:h,createAddress:async I=>{if(!S)throw new Error("No active customer session was found.");await v(async()=>{const _=await Ih(S,xd(I));if(!_.ok){if(!Dh(_.error.message,_.error.code))throw dr(_.error.message||"Unable to create address.",_.error.code);const R=await Lr(S);if(!R.ok||!R.data||!gd(R.data).find(de=>Ph(de,I)))throw dr(_.error.message||"Unable to create address.",_.error.code)}})},editAddress:async I=>{if(!S)throw new Error("No active customer session was found.");await v(async()=>{const _=await _h(S,I.id,xd(I));if(!_.ok)throw dr(_.error.message||"Unable to update address.",_.error.code)})},removeAddress:async I=>{if(!S)throw new Error("No active customer session was found.");await v(async()=>{const _=await Fh(S,I);if(!_.ok)throw dr(_.error.message||"Unable to delete address.",_.error.code)})},makeDefaultAddress:async I=>{if(!S)throw new Error("No active customer session was found.");await v(async()=>{const _=await Nh(S,I);if(!_.ok)throw dr(_.error.message||"Unable to set the default address.",_.error.code)})}}}function Oh(){const{accessToken:i,isAuthenticated:s}=nn(),[l,c]=N.useState([]),[f,p]=N.useState(null),[m,x]=N.useState(!0),[b,j]=N.useState(!1),[S,h]=N.useState(null),v=i||Or().accessToken,I=async(_,R=!1)=>{if(!v||!s){c([]),p(null),x(!1);return}R?j(!0):x(!0),h(null);try{const z=await Eh(v,10,_);if(!z.ok)throw new Error(z.error.message||"Unable to load orders.");const le=zh(z.data);c(de=>R?[...de,...le]:le),p(z.data?{hasNextPage:z.data.pageInfo.hasNextPage,hasPreviousPage:z.data.pageInfo.hasPreviousPage,startCursor:z.data.pageInfo.startCursor,endCursor:z.data.pageInfo.endCursor}:null)}catch(z){h(z instanceof Error?z.message:"Unable to load orders.")}finally{x(!1),j(!1)}};return N.useEffect(()=>{I()},[v,s]),{orders:l,pageInfo:f,hasMore:!!(f!=null&&f.hasNextPage&&(f!=null&&f.endCursor)),isLoading:m,isLoadingMore:b,error:S,refresh:async()=>I(),loadMore:async()=>{f!=null&&f.endCursor&&await I(f.endCursor,!0)}}}const Jd=N.createContext(null);function nn(){const i=N.useContext(Jd);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i}function Mh({children:i}){const s=Ah(),l={customer:s.customer,accessToken:s.accessToken,isAuthenticated:s.isAuthenticated,isLoading:s.isLoading,login:async(c,f)=>{await s.login(c,f)},register:async c=>{await s.register(c)},logout:()=>{s.logout()},updateProfile:async c=>{await s.updateProfile(c)},refreshCustomerData:async()=>{await s.refreshCustomerData()},requestPasswordReset:async c=>{await s.requestPasswordReset(c)},resetPassword:async(c,f)=>{await s.resetPassword(c,f)}};return r.jsx(Jd.Provider,{value:l,children:i})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Uh=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,l,c)=>c?c.toUpperCase():l.toLowerCase()),yd=i=>{const s=Uh(i);return s.charAt(0).toUpperCase()+s.slice(1)},ef=(...i)=>i.filter((s,l,c)=>!!s&&s.trim()!==""&&c.indexOf(s)===l).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=N.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:f="",children:p,iconNode:m,...x},b)=>N.createElement("svg",{ref:b,...$h,width:s,height:s,stroke:i,strokeWidth:c?Number(l)*24/Number(s):l,className:ef("lucide",f),...x},[...m.map(([j,S])=>N.createElement(j,S)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=(i,s)=>{const l=N.forwardRef(({className:c,...f},p)=>N.createElement(Hh,{ref:p,iconNode:s,className:ef(`lucide-${Bh(yd(i))}`,`lucide-${i}`,c),...f}));return l.displayName=yd(i),l};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],tf=je("arrow-left",Wh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],nf=je("check",Vh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Yh=je("chevron-down",qh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Kh=je("chevron-right",Qh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Gh=je("circle-alert",Xh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Jh=je("circle-check-big",Zh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],tg=je("circle-check",eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],rg=je("circle-x",ng);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],ig=je("ellipsis-vertical",og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ag=je("eye-off",sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ug=je("eye",lg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],rf=je("info",cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],fg=je("loader-circle",dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],mg=je("log-out",pg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],gg=je("mail",hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],bl=je("map-pin",xg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],vg=je("menu",yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],of=je("moon",wg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Uo=je("package",kg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],jg=je("pen",Sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Cg=je("phone",bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],vd=je("plus",Eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Ig=je("search",Tg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Fg=je("shield",_g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],sf=je("sun",Ng);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],zg=je("triangle-alert",Rg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],af=je("user",Ag);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cl=je("x",Pg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Lg=je("zap",Dg);function Fe({label:i,error:s,helperText:l,showPasswordToggle:c,type:f="text",disabled:p,...m}){const[x,b]=N.useState(!1),[j,S]=N.useState(!1),h=c&&x?"text":f;return r.jsxs("div",{style:{width:"100%"},children:[r.jsx("label",{htmlFor:m.id,style:{display:"block",fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"#344054",marginBottom:"6px",fontFamily:"Inter, system-ui, sans-serif"},children:i}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx("input",{...m,type:h,disabled:p,onFocus:v=>{var I;S(!0),(I=m.onFocus)==null||I.call(m,v)},onBlur:v=>{var I;S(!1),(I=m.onBlur)==null||I.call(m,v)},style:{width:"100%",height:"44px",padding:"10px 14px",paddingRight:c?"44px":"14px",fontSize:"16px",lineHeight:"24px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:p?"#98A2B3":"#101828",backgroundColor:p?"#F9FAFB":"#FFFFFF",border:`1px solid ${s?"#F04438":j?"#4F46E5":"#D0D5DD"}`,borderRadius:"10px",outline:"none",boxShadow:j&&!s?"0 0 0 2px rgba(79, 70, 229, 0.06)":"none",cursor:p?"not-allowed":"text",transition:"all 0.15s ease"}}),c&&r.jsx("button",{type:"button",onClick:()=>b(!x),disabled:p,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:"4px",cursor:p?"not-allowed":"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",opacity:p?.4:1},"aria-label":x?"Hide password":"Show password",children:x?r.jsx(ag,{size:20}):r.jsx(ug,{size:20})})]}),s&&r.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif"},children:s}),!s&&l&&r.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:l})]})}function ft({variant:i="primary",size:s="md",isLoading:l=!1,disabled:c,children:f,...p}){const m=c||l,x={sm:{height:"36px",padding:"0 12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",padding:"0 16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",padding:"0 20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}},b={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"#FFFFFF",color:"#101828",border:"1px solid #D0D5DD"},ghost:{backgroundColor:"transparent",color:"#101828",border:"none"},destructive:{backgroundColor:"#F04438",color:"#FFFFFF",border:"none"}},j=x[s],S=b[i];return r.jsxs("button",{...p,disabled:m,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, system-ui, sans-serif",fontWeight:"600",cursor:m?"not-allowed":"pointer",opacity:m?.4:1,transition:"all 0.15s ease",position:"relative",whiteSpace:"nowrap",...j,...S,...p.style},onMouseEnter:h=>{!m&&i!=="ghost"&&(h.currentTarget.style.filter="brightness(0.94)")},onMouseLeave:h=>{h.currentTarget.style.filter="none"},onMouseDown:h=>{m||(h.currentTarget.style.filter="brightness(0.88)")},onMouseUp:h=>{m||(h.currentTarget.style.filter="brightness(0.94)")},children:[l&&r.jsx(fg,{size:s==="sm"?14:s==="lg"?18:16,style:{animation:"spin 1s linear infinite"}}),f,r.jsx("style",{children:`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `})]})}function Yt({type:i,children:s}){const c={success:{backgroundColor:"#ECFDF3",borderColor:"#12B76A",textColor:"#039855",icon:Jh},error:{backgroundColor:"#FEF3F2",borderColor:"#F04438",textColor:"#D92D20",icon:rg},warning:{backgroundColor:"#FFFAEB",borderColor:"#F79009",textColor:"#DC6803",icon:Gh},info:{backgroundColor:"rgba(79, 70, 229, 0.06)",borderColor:"#4F46E5",textColor:"#4338CA",icon:rf}}[i],f=c.icon;return r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px 16px",backgroundColor:c.backgroundColor,border:`1px solid ${c.borderColor}`,borderRadius:"10px"},children:[r.jsx(f,{size:20,style:{color:c.textColor,flexShrink:0,marginTop:"2px"}}),r.jsx("div",{style:{flex:1,fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:c.textColor,fontFamily:"Inter, system-ui, sans-serif"},children:s})]})}function Ot(i){typeof window>"u"||(window.location.href=i)}function Og(){const{login:i}=nn(),[s,l]=N.useState(""),[c,f]=N.useState(""),[p,m]=N.useState({}),[x,b]=N.useState(!1),j=()=>{const h={};return s?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)||(h.email="Please enter a valid email address"):h.email="Email is required",c||(h.password="Password is required"),m(h),Object.keys(h).length===0},S=async h=>{if(h.preventDefault(),!!j()){b(!0),m({});try{await i(s,c),Ot("/account")}catch(v){m({general:v instanceof Error?v.message:"Invalid email or password"})}finally{b(!1)}}};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Welcome back"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Sign in to your account to continue"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[p.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(Yt,{type:"error",children:p.general})}),r.jsxs("form",{onSubmit:S,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsx(Fe,{id:"email",label:"Email",type:"email",value:s,onChange:h=>l(h.target.value),error:p.email,placeholder:"you@example.com",autoComplete:"email",disabled:x}),r.jsx(Fe,{id:"password",label:"Password",type:"password",value:c,onChange:h=>f(h.target.value),error:p.password,placeholder:"Enter your password",autoComplete:"current-password",showPasswordToggle:!0,disabled:x})]}),r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx("button",{type:"button",onClick:()=>Ot("/account/password-reset"),disabled:x,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:x?"not-allowed":"pointer",textDecoration:"none",opacity:x?.4:1},onMouseEnter:h=>!x&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Forgot password?"})}),r.jsx(ft,{type:"submit",variant:"primary",size:"lg",isLoading:x,style:{width:"100%",marginBottom:"16px"},children:"Sign in"}),r.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Don't have an account?"," ",r.jsx("button",{type:"button",onClick:()=>Ot("/account/register"),disabled:x,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:x?"not-allowed":"pointer",textDecoration:"none",opacity:x?.4:1},onMouseEnter:h=>!x&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Create account"})]})]})]}),r.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"rgba(79, 70, 229, 0.06)",border:"1px solid #4F46E5",borderRadius:"12px",textAlign:"center"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Demo: Use any email and password to sign in"})})]})})}function Mg(){const{register:i}=nn(),[s,l]=N.useState({firstName:"",lastName:"",email:"",phone:"",password:""}),[c,f]=N.useState({}),[p,m]=N.useState(!1),x=()=>{const S={};return s.firstName.trim()||(S.firstName="First name is required"),s.lastName.trim()||(S.lastName="Last name is required"),s.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)||(S.email="Please enter a valid email address"):S.email="Email is required",s.phone&&!/^[\d\s\-\+\(\)]+$/.test(s.phone)&&(S.phone="Please enter a valid phone number"),s.password?s.password.length<8&&(S.password="Password must be at least 8 characters"):S.password="Password is required",f(S),Object.keys(S).length===0},b=async S=>{if(S.preventDefault(),!!x()){m(!0),f({});try{await i(s),Ot("/account")}catch(h){f({general:h instanceof Error?h.message:"Registration failed"})}finally{m(!1)}}},j=(S,h)=>{l(v=>({...v,[S]:h})),c[S]&&f(v=>({...v,[S]:""}))};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"540px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Create your account"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Join us to start shopping and manage your orders"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[c.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(Yt,{type:"error",children:c.general})}),r.jsxs("form",{onSubmit:b,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Fe,{id:"firstName",label:"First name",type:"text",value:s.firstName,onChange:S=>j("firstName",S.target.value),error:c.firstName,placeholder:"Sarah",autoComplete:"given-name",disabled:p}),r.jsx(Fe,{id:"lastName",label:"Last name",type:"text",value:s.lastName,onChange:S=>j("lastName",S.target.value),error:c.lastName,placeholder:"Chen",autoComplete:"family-name",disabled:p})]}),r.jsx(Fe,{id:"email",label:"Email",type:"email",value:s.email,onChange:S=>j("email",S.target.value),error:c.email,placeholder:"you@example.com",autoComplete:"email",disabled:p}),r.jsx(Fe,{id:"phone",label:"Phone (optional)",type:"tel",value:s.phone,onChange:S=>j("phone",S.target.value),error:c.phone,placeholder:"+1 (555) 123-4567",autoComplete:"tel",disabled:p}),r.jsx(Fe,{id:"password",label:"Password",type:"password",value:s.password,onChange:S=>j("password",S.target.value),error:c.password,helperText:c.password?void 0:"Must be at least 8 characters",placeholder:"Create a password",autoComplete:"new-password",showPasswordToggle:!0,disabled:p})]}),r.jsx(ft,{type:"submit",variant:"primary",size:"lg",isLoading:p,style:{width:"100%",marginBottom:"16px"},children:"Create account"}),r.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Already have an account?"," ",r.jsx("button",{type:"button",onClick:()=>Ot("/account/login"),disabled:p,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:p?"not-allowed":"pointer",textDecoration:"none",opacity:p?.4:1},onMouseEnter:S=>!p&&(S.currentTarget.style.textDecoration="underline"),onMouseLeave:S=>S.currentTarget.style.textDecoration="none",children:"Sign in"})]})]})]})]})})}function Bg(){const{requestPasswordReset:i}=nn(),[s,l]=N.useState(""),[c,f]=N.useState(""),[p,m]=N.useState(!1),[x,b]=N.useState(!1),j=h=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h),S=async h=>{if(h.preventDefault(),!s){f("Email is required");return}if(!j(s)){f("Please enter a valid email address");return}m(!0),f("");try{await i(s),b(!0)}catch(v){f(v instanceof Error?v.message:"Failed to send reset link. Please try again.")}finally{m(!1)}};return x?r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"#ECFDF3",borderRadius:"16px",marginBottom:"16px"},children:r.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#12B76A",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Check your email"}),r.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["We've sent a password reset link to",r.jsx("br",{}),r.jsx("strong",{style:{color:"#344054"},children:s})]})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)",marginBottom:"16px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:"Click the link in the email to reset your password. If you don't see the email, check your spam folder."}),r.jsx(ft,{variant:"primary",size:"lg",onClick:()=>Ot("/account/login"),style:{width:"100%"},children:"Return to sign in"})]}),r.jsx("button",{onClick:()=>{b(!1),l("")},style:{display:"block",width:"100%",background:"none",border:"none",padding:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"center"},onMouseEnter:h=>h.currentTarget.style.textDecoration="underline",onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Didn't receive the email? Try again"})]})}):r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("button",{onClick:()=>Ot("/account/login"),disabled:p,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:p?"not-allowed":"pointer",opacity:p?.4:1},onMouseEnter:h=>!p&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:[r.jsx(tf,{size:16}),"Back to sign in"]}),r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Reset your password"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Enter your email and we'll send you a reset link"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[c&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(Yt,{type:"error",children:c})}),r.jsxs("form",{onSubmit:S,children:[r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(Fe,{id:"email",label:"Email",type:"email",value:s,onChange:h=>{l(h.target.value),f("")},error:c&&!s?c:"",placeholder:"you@example.com",autoComplete:"email",disabled:p})}),r.jsx(ft,{type:"submit",variant:"primary",size:"lg",isLoading:p,style:{width:"100%"},children:"Send reset link"})]})]})]})})}function Ug(){if(typeof window>"u")return null;const i=window.location.pathname.match(/^\/account\/reset\/([^/]+)\/([^/]+)\/?$/);return i?{id:decodeURIComponent(i[1]),token:decodeURIComponent(i[2])}:null}function $g({id:i,token:s}){return`${"https://thevibestation.com".replace(/\/+$/,"")}/account/reset/${encodeURIComponent(i)}/${encodeURIComponent(s)}`}function wd(){const{resetPassword:i}=nn(),s=Ug(),[l,c]=N.useState(""),[f,p]=N.useState(""),[m,x]=N.useState({}),[b,j]=N.useState(!1),S=()=>{const v={};return l?l.length<5&&(v.password="Password must be at least 5 characters"):v.password="Password is required",f?l!==f&&(v.confirmPassword="Passwords do not match"):v.confirmPassword="Please confirm your password",x(v),Object.keys(v).length===0},h=async v=>{if(v.preventDefault(),!s){x({general:"This password setup link is invalid. Please request a new one."});return}if(S()){j(!0),x({});try{await i($g(s),l),Ot("/account")}catch(I){const _=I.code;x(_==="CUSTOMER_RESET_TOKEN_INVALID"||_==="TOKEN_EXPIRED"?{general:"expired"}:{general:I instanceof Error?I.message:"Failed to set your password. Please try again."})}finally{j(!1)}}};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("button",{onClick:()=>Ot("/account/login"),disabled:b,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:b?"not-allowed":"pointer",opacity:b?.4:1},onMouseEnter:v=>!b&&(v.currentTarget.style.textDecoration="underline"),onMouseLeave:v=>v.currentTarget.style.textDecoration="none",children:[r.jsx(tf,{size:16}),"Back to sign in"]}),r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Set new password"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Create a password to activate your account or regain access."})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[m.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(Yt,{type:"error",children:m.general==="expired"?r.jsxs(r.Fragment,{children:["This link has expired. Please request a new one."," ",r.jsx("button",{type:"button",onClick:()=>Ot("/account/forgot-password"),style:{background:"none",border:"none",padding:0,color:"#D92D20",font:"inherit",fontWeight:600,textDecoration:"underline",cursor:"pointer"},children:"Request a new link"}),"."]}):m.general})}),r.jsxs("form",{onSubmit:h,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsx(Fe,{id:"password",label:"New password",type:"password",value:l,onChange:v=>{c(v.target.value),(m.password||m.general)&&x(I=>({...I,password:"",general:""}))},error:m.password,helperText:m.password?void 0:"Must be at least 5 characters",placeholder:"Enter new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:b}),r.jsx(Fe,{id:"confirmPassword",label:"Confirm password",type:"password",value:f,onChange:v=>{p(v.target.value),(m.confirmPassword||m.general)&&x(I=>({...I,confirmPassword:"",general:""}))},error:m.confirmPassword,placeholder:"Confirm new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:b})]}),r.jsx(ft,{type:"submit",variant:"primary",size:"lg",isLoading:b,style:{width:"100%"},children:"Set Password"})]})]})]})})}function kd({activeSection:i,onSectionChange:s,onLogout:l,isMobile:c=!1}){const f=[{id:"overview",label:"Overview",icon:af},{id:"orders",label:"Orders",icon:Uo},{id:"addresses",label:"Addresses",icon:bl}];return c?r.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto",padding:"16px",backgroundColor:"#FFFFFF",borderBottom:"1px solid #EAECF0"},children:f.map(p=>{const m=p.icon,x=i===p.id;return r.jsxs("button",{onClick:()=>s(p.id),style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",backgroundColor:x?"#F9FAFB":"transparent",border:`1px solid ${x?"#D0D5DD":"transparent"}`,borderRadius:"10px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:x?"#101828":"#667085",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s"},children:[r.jsx(m,{size:16}),p.label]},p.id)})}):r.jsxs("nav",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"8px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[f.map(p=>{const m=p.icon,x=i===p.id;return r.jsxs("button",{onClick:()=>s(p.id),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:x?"#F9FAFB":"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:x?"600":"400",color:x?"#101828":"#667085",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:b=>{x||(b.currentTarget.style.backgroundColor="#FCFCFD")},onMouseLeave:b=>{x||(b.currentTarget.style.backgroundColor="transparent")},children:[r.jsx(m,{size:20}),p.label]},p.id)}),r.jsx("div",{style:{height:"1px",backgroundColor:"#EAECF0",margin:"8px 0"}}),r.jsxs("button",{onClick:l,style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:p=>{p.currentTarget.style.backgroundColor="#FEF3F2"},onMouseLeave:p=>{p.currentTarget.style.backgroundColor="transparent"},children:[r.jsx(mg,{size:20}),"Sign out"]})]})}function Hg({customer:i}){const{updateProfile:s}=nn(),[l,c]=N.useState(!1),[f,p]=N.useState({firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone||""}),[m,x]=N.useState(!1),[b,j]=N.useState(""),[S,h]=N.useState(""),v=async()=>{x(!0),j(""),h("");try{await s(f),j("Profile updated successfully"),c(!1),setTimeout(()=>j(""),3e3)}catch(_){h(_ instanceof Error?_.message:"Failed to update profile")}finally{x(!1)}},I=()=>{p({firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone||""}),c(!1),h("")};return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Profile Information"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your personal information and contact details"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"24px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[b&&r.jsx("div",{style:{marginBottom:"20px"},children:r.jsx(Yt,{type:"success",children:b})}),S&&r.jsx("div",{style:{marginBottom:"20px"},children:r.jsx(Yt,{type:"error",children:S})}),l?r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Fe,{id:"firstName",label:"First name",type:"text",value:f.firstName,onChange:_=>p(R=>({...R,firstName:_.target.value})),disabled:m}),r.jsx(Fe,{id:"lastName",label:"Last name",type:"text",value:f.lastName,onChange:_=>p(R=>({...R,lastName:_.target.value})),disabled:m})]}),r.jsx(Fe,{id:"email",label:"Email",type:"email",value:f.email,onChange:_=>p(R=>({...R,email:_.target.value})),disabled:m}),r.jsx(Fe,{id:"phone",label:"Phone (optional)",type:"tel",value:f.phone,onChange:_=>p(R=>({...R,phone:_.target.value})),disabled:m})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[r.jsx(ft,{variant:"secondary",size:"md",onClick:I,disabled:m,children:"Cancel"}),r.jsx(ft,{variant:"primary",size:"md",onClick:v,isLoading:m,children:"Save changes"})]})]}):r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"#F9FAFB",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(af,{size:28,style:{color:"#667085"}})}),r.jsxs("div",{children:[r.jsxs("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:[i.firstName," ",i.lastName]}),r.jsxs("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Member since ",new Date(i.createdAt).toLocaleDateString("en-US",{month:"long",year:"numeric"})]})]})]}),r.jsxs(ft,{variant:"secondary",size:"sm",onClick:()=>c(!0),children:[r.jsx(jg,{size:14}),"Edit"]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(gg,{size:20,style:{color:"#667085",flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Email"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i.email})]})]}),i.phone&&r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(Cg,{size:20,style:{color:"#667085",flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Phone"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i.phone})]})]})]})]})]})]})}function Wg({order:i,onClick:s}){const l=p=>new Date(p).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),f=(p=>{switch(p){case"FULFILLED":return{bg:"#ECFDF3",border:"#12B76A",text:"#039855",label:"Fulfilled"};case"UNFULFILLED":return{bg:"#FFFAEB",border:"#F79009",text:"#DC6803",label:"Unfulfilled"};case"PARTIALLY_FULFILLED":return{bg:"rgba(79, 70, 229, 0.06)",border:"#4F46E5",text:"#4338CA",label:"Partially fulfilled"};case"CANCELLED":return{bg:"#FEF3F2",border:"#F04438",text:"#D92D20",label:"Cancelled"};default:return{bg:"#F9FAFB",border:"#D0D5DD",text:"#667085",label:p}}})(i.fulfillmentStatus);return r.jsx("button",{onClick:()=>s(i.id),style:{width:"100%",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"20px",cursor:"pointer",textAlign:"left",transition:"all 0.15s",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},onMouseEnter:p=>{p.currentTarget.style.boxShadow="0 4px 10px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.08)",p.currentTarget.style.borderColor="#D0D5DD"},onMouseLeave:p=>{p.currentTarget.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)",p.currentTarget.style.borderColor="#EAECF0"},children:r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[r.jsx("div",{style:{flexShrink:0,width:"48px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F9FAFB",borderRadius:"10px"},children:r.jsx(Uo,{size:24,style:{color:"#667085"}})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px",flexWrap:"wrap"},children:[r.jsxs("h3",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:["Order #",i.orderNumber]}),r.jsx("div",{style:{display:"inline-flex",alignItems:"center",padding:"2px 8px",backgroundColor:f.bg,border:`1px solid ${f.border}`,borderRadius:"6px"},children:r.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:f.text,fontFamily:"Inter, system-ui, sans-serif"},children:f.label})})]}),r.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"12px"},children:["Placed on ",l(i.createdAt)," • ",i.lineItems.length," item",i.lineItems.length!==1?"s":""]}),r.jsx("div",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i.totalPrice})]}),r.jsx("div",{style:{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#98A2B3"},children:r.jsx(Kh,{size:20})})]})})}function lf({icon:i,title:s,description:l,action:c}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"64px 24px",textAlign:"center"},children:[r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"#F9FAFB",color:"#667085",marginBottom:"16px"},children:i}),r.jsx("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:s}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:c?"24px":"0",maxWidth:"400px"},children:l}),c&&r.jsx("div",{children:c})]})}function Vg(){const{orders:i,hasMore:s,isLoading:l,isLoadingMore:c,error:f,loadMore:p}=Oh(),m=x=>{console.log("View order:",x)};return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Order History"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"View and track your orders"})]}),f&&r.jsx("div",{style:{marginBottom:"16px"},children:r.jsx(Yt,{type:"error",children:f})}),l?r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading orders..."})}):i.length>0?r.jsxs("div",{children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:s?"24px":"0"},children:i.map(x=>r.jsx(Wg,{order:x,onClick:m},x.id))}),s&&r.jsx("div",{style:{textAlign:"center"},children:r.jsx(ft,{variant:"secondary",size:"md",onClick:()=>void p(),isLoading:c,children:"Load more orders"})})]}):r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx(lf,{icon:r.jsx(Uo,{size:32}),title:"No orders yet",description:"When you place an order, it will appear here so you can track its status.",action:r.jsx(ft,{variant:"primary",size:"md",children:"Start shopping"})})})]})}function qg({address:i,onEdit:s,onDelete:l,onSetDefault:c}){const[f,p]=N.useState(!1);return r.jsxs("div",{style:{position:"relative",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"20px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[i.isDefault&&r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 8px",backgroundColor:"#ECFDF3",border:"1px solid #12B76A",borderRadius:"6px",marginBottom:"12px"},children:[r.jsx(nf,{size:12,style:{color:"#039855"}}),r.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#039855",fontFamily:"Inter, system-ui, sans-serif"},children:"Default"})]}),r.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px"},children:[r.jsx("button",{onClick:()=>p(!f),style:{background:"none",border:"none",padding:"4px",cursor:"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:r.jsx(ig,{size:20})}),f&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10},onClick:()=>p(!1)}),r.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:"4px",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"10px",boxShadow:"0 4px 10px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.08)",padding:"4px",minWidth:"160px",zIndex:20},children:[r.jsx("button",{onClick:()=>{p(!1),s(i)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#344054",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Edit address"}),!i.isDefault&&r.jsx("button",{onClick:()=>{p(!1),c(i.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#344054",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Set as default"}),r.jsx("div",{style:{height:"1px",backgroundColor:"#EAECF0",margin:"4px 0"}}),r.jsx("button",{onClick:()=>{p(!1),l(i.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#FEF3F2"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Delete address"})]})]})]}),r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx("div",{style:{flexShrink:0,width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F9FAFB",borderRadius:"8px"},children:r.jsx(bl,{size:20,style:{color:"#667085"}})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:[i.firstName," ",i.lastName]}),r.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:[i.company&&r.jsx("div",{children:i.company}),r.jsx("div",{children:i.address1}),i.address2&&r.jsx("div",{children:i.address2}),r.jsxs("div",{children:[i.city,", ",i.province," ",i.zip]}),r.jsx("div",{children:i.country}),i.phone&&r.jsx("div",{style:{marginTop:"8px"},children:i.phone})]})]})]})]})}function Sd({address:i,onClose:s,onSave:l}){const[c,f]=N.useState({firstName:(i==null?void 0:i.firstName)||"",lastName:(i==null?void 0:i.lastName)||"",company:(i==null?void 0:i.company)||"",address1:(i==null?void 0:i.address1)||"",address2:(i==null?void 0:i.address2)||"",city:(i==null?void 0:i.city)||"",province:(i==null?void 0:i.province)||"",zip:(i==null?void 0:i.zip)||"",country:(i==null?void 0:i.country)||"United States",phone:(i==null?void 0:i.phone)||""}),[p,m]=N.useState({}),[x,b]=N.useState(!1),j=()=>{const v={};return c.firstName.trim()||(v.firstName="First name is required"),c.lastName.trim()||(v.lastName="Last name is required"),c.address1.trim()||(v.address1="Address is required"),c.city.trim()||(v.city="City is required"),c.province.trim()||(v.province="State/Province is required"),c.zip.trim()||(v.zip="ZIP/Postal code is required"),c.country.trim()||(v.country="Country is required"),m(v),Object.keys(v).length===0},S=async v=>{if(v.preventDefault(),!!j()){b(!0);try{await new Promise(I=>setTimeout(I,500)),l(i?{...i,...c}:c)}catch(I){console.error("Failed to save address:",I)}finally{b(!1)}}},h=(v,I)=>{f(_=>({..._,[v]:I})),p[v]&&m(_=>({..._,[v]:""}))};return r.jsx(r.Fragment,{children:r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.40)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50,overflow:"auto"},onClick:s,children:r.jsxs("div",{style:{backgroundColor:"#FFFFFF",borderRadius:"16px",width:"100%",maxWidth:"600px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 12px 24px -4px rgba(16, 24, 40, 0.06), 0 6px 12px -4px rgba(16, 24, 40, 0.08)"},onClick:v=>v.stopPropagation(),children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid #EAECF0"},children:[r.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i?"Edit address":"Add new address"}),r.jsx("button",{onClick:s,disabled:x,style:{background:"none",border:"none",padding:"4px",cursor:x?"not-allowed":"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",opacity:x?.4:1},children:r.jsx(Cl,{size:20})})]}),r.jsxs("form",{onSubmit:S,children:[r.jsx("div",{style:{padding:"24px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Fe,{id:"firstName",label:"First name",value:c.firstName,onChange:v=>h("firstName",v.target.value),error:p.firstName,disabled:x}),r.jsx(Fe,{id:"lastName",label:"Last name",value:c.lastName,onChange:v=>h("lastName",v.target.value),error:p.lastName,disabled:x})]}),r.jsx(Fe,{id:"company",label:"Company (optional)",value:c.company,onChange:v=>h("company",v.target.value),disabled:x}),r.jsx(Fe,{id:"address1",label:"Address",value:c.address1,onChange:v=>h("address1",v.target.value),error:p.address1,placeholder:"123 Main Street",disabled:x}),r.jsx(Fe,{id:"address2",label:"Apartment, suite, etc. (optional)",value:c.address2,onChange:v=>h("address2",v.target.value),placeholder:"Apt 4B",disabled:x}),r.jsx(Fe,{id:"city",label:"City",value:c.city,onChange:v=>h("city",v.target.value),error:p.city,disabled:x}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Fe,{id:"province",label:"State / Province",value:c.province,onChange:v=>h("province",v.target.value),error:p.province,placeholder:"CA",disabled:x}),r.jsx(Fe,{id:"zip",label:"ZIP / Postal code",value:c.zip,onChange:v=>h("zip",v.target.value),error:p.zip,placeholder:"94103",disabled:x})]}),r.jsx(Fe,{id:"country",label:"Country",value:c.country,onChange:v=>h("country",v.target.value),error:p.country,disabled:x}),r.jsx(Fe,{id:"phone",label:"Phone (optional)",type:"tel",value:c.phone,onChange:v=>h("phone",v.target.value),placeholder:"+1 (555) 123-4567",disabled:x})]})}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",padding:"24px",borderTop:"1px solid #EAECF0"},children:[r.jsx(ft,{type:"button",variant:"secondary",size:"md",onClick:s,disabled:x,children:"Cancel"}),r.jsx(ft,{type:"submit",variant:"primary",size:"md",isLoading:x,children:i?"Save changes":"Add address"})]})]})]})})})}function Yg({title:i,description:s,onConfirm:l,onCancel:c}){return r.jsx(r.Fragment,{children:r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.40)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50},onClick:c,children:r.jsx("div",{style:{backgroundColor:"#FFFFFF",borderRadius:"16px",width:"100%",maxWidth:"440px",boxShadow:"0 12px 24px -4px rgba(16, 24, 40, 0.06), 0 6px 12px -4px rgba(16, 24, 40, 0.08)"},onClick:f=>f.stopPropagation(),children:r.jsxs("div",{style:{padding:"24px"},children:[r.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",backgroundColor:"#FEF3F2",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:r.jsx(zg,{size:24,style:{color:"#F04438"}})}),r.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:i}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:s}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[r.jsx(ft,{variant:"secondary",size:"md",onClick:c,children:"Cancel"}),r.jsx(ft,{variant:"destructive",size:"md",onClick:l,children:"Delete"})]})]})})})})}function Qg(){const{addresses:i,isLoading:s,isSaving:l,error:c,createAddress:f,editAddress:p,removeAddress:m,makeDefaultAddress:x}=Lh(),[b,j]=N.useState(!1),[S,h]=N.useState(null),[v,I]=N.useState(null),_=async Z=>{await f(Z),j(!1)},R=Z=>{h(Z)},z=async Z=>{await p(Z),h(null)},le=Z=>{I(Z)},de=async()=>{v&&(await m(v),I(null))},ve=async Z=>{await x(Z)};return r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px",flexWrap:"wrap",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Saved Addresses"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your shipping and billing addresses"})]}),i.length>0&&r.jsxs(ft,{variant:"primary",size:"md",onClick:()=>j(!0),children:[r.jsx(vd,{size:16}),"Add address"]})]}),c&&r.jsx("div",{style:{marginBottom:"16px"},children:r.jsx(Yt,{type:"error",children:c})}),s?r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading addresses..."})}):i.length>0?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"16px"},children:i.map(Z=>r.jsx(qg,{address:Z,onEdit:R,onDelete:le,onSetDefault:ve},Z.id))}):r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx(lf,{icon:r.jsx(bl,{size:32}),title:"No addresses saved",description:"Add a shipping address to make checkout faster and easier.",action:r.jsxs(ft,{variant:"primary",size:"md",onClick:()=>j(!0),children:[r.jsx(vd,{size:16}),"Add address"]})})}),b&&r.jsx(Sd,{onClose:()=>j(!1),onSave:_}),S&&r.jsx(Sd,{address:S,onClose:()=>h(null),onSave:z}),v&&r.jsx(Yg,{title:"Delete address",description:"Are you sure you want to delete this address? This action cannot be undone.",onConfirm:()=>void de(),onCancel:()=>I(null)}),l&&r.jsx("div",{style:{marginTop:"16px"},children:r.jsx(Yt,{type:"info",children:"Saving address changes..."})})]})}function Kg(){const{customer:i,isAuthenticated:s,logout:l,isLoading:c}=nn(),[f,p]=N.useState("overview"),[m,x]=N.useState(window.innerWidth<768);N.useEffect(()=>{!c&&!s&&Ot("/account/login")},[s,c]),N.useEffect(()=>{const j=()=>{x(window.innerWidth<768)};return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]);const b=()=>{l(),Ot("/account/login")};return c||!i?r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 16px",border:"3px solid #F9FAFB",borderTopColor:"#4338CA",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),r.jsx("style",{children:`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `})]})}):r.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD"},children:[r.jsx("div",{style:{backgroundColor:"#FFFFFF",borderBottom:"1px solid #EAECF0"},children:r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"32px 48px"},children:[r.jsx("h1",{style:{fontSize:m?"22px":"28px",lineHeight:m?"30px":"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:"My Account"}),r.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Welcome back, ",i.firstName]})]})}),m&&r.jsx(kd,{activeSection:f,onSectionChange:p,onLogout:b,isMobile:!0}),r.jsx("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"48px 48px"},children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:m?"1fr":"240px 1fr",gap:m?"0":"32px"},children:[!m&&r.jsx("div",{children:r.jsx(kd,{activeSection:f,onSectionChange:p,onLogout:b})}),r.jsxs("div",{children:[f==="overview"&&r.jsx(Hg,{customer:i}),f==="orders"&&r.jsx(Vg,{}),f==="addresses"&&r.jsx(Qg,{})]})]})})]})}function Xg(){return N.useCallback((i=[],s)=>eh(i,s),[])}function Gg(){return N.useCallback((i,s)=>th(i,s),[])}function Zg(){return N.useCallback((i,s)=>nh(i,s),[])}function Jg(){return N.useCallback((i,s)=>rh(i,s),[])}const uf=N.createContext(null),jd="IN".toUpperCase(),ex=300*1e3,tx=i=>i.lines.edges.map(s=>{var c,f,p,m,x;const l=s.node;return{id:l.id,name:l.merchandise.product.title,productHandle:l.merchandise.product.handle,variant:((c=l.merchandise.selectedOptions)==null?void 0:c.map(b=>`${b.name}: ${b.value}`).join(", "))||l.merchandise.title,price:Number.parseFloat(l.merchandise.price.amount),quantity:l.quantity,variantId:l.merchandise.id,imageUrl:((f=l.merchandise.image)==null?void 0:f.url)||((p=l.merchandise.product.featuredImage)==null?void 0:p.url),imageAlt:((m=l.merchandise.image)==null?void 0:m.altText)||((x=l.merchandise.product.featuredImage)==null?void 0:x.altText)||l.merchandise.product.title}});function nx({children:i}){const{accessToken:s,isAuthenticated:l,refreshCustomerData:c,logout:f}=nn(),[p,m]=N.useState([]),[x,b]=N.useState(!1),[j,S]=N.useState(null),[h,v]=N.useState(null),[I,_]=N.useState(null),R=N.useRef(null),z=Xg(),le=Gg(),de=Zg(),ve=Jg(),Z=N.useCallback(K=>{m(tx(K)),S(K.id),v(K.checkoutUrl),sh(K.id)},[]),oe=N.useCallback(async(K,G)=>{try{const U=await md(K,G?{countryCode:jd,customerAccessToken:G}:{});Z(U)}catch(U){console.warn("Failed to sync cart buyer identity",U)}},[Z]);N.useEffect(()=>{let K=!1;return(async()=>{try{const U=ih();if(U){const he=await oh(U);if(he&&!K){Z(he);return}}const ue=await z([],s||void 0);K||Z(ue)}catch(U){K||console.error("Failed to initialize Shopify cart",U)}})(),()=>{K=!0}},[s,z,Z]),N.useEffect(()=>{if(!j){R.current=s;return}const K=R.current!==s;R.current=s,K&&oe(j,s)},[j,s,oe]);const ie=N.useMemo(()=>p.reduce((K,G)=>K+G.quantity,0),[p]),we=N.useMemo(()=>p.reduce((K,G)=>K+G.price*G.quantity,0),[p]),Ee={items:p,isDrawerOpen:x,cartCount:ie,subtotal:we,total:we,checkoutUrl:h,cartError:I,clearCartError:()=>_(null),addItem:async K=>{try{_(null);let G=j;if(!G){const he=await z([],s||void 0);Z(he),G=he.id}const U=p.find(he=>he.variantId===K),ue=U?await de(G,[{id:U.id,quantity:U.quantity+1}]):await le(G,[{merchandiseId:K,quantity:1}]);return Z(ue),b(!0),{ok:!0}}catch(G){console.error("Failed to add item to cart",G);const U=G instanceof Error?G.message:"Unable to add item to cart.";return _(U),{ok:!1,error:U}}},checkout:async()=>{try{_(null);let K=j;if(!K){const ue=await z([],s||void 0);Z(ue),K=ue.id}let G=h,U=s;if(l){const ue=Or();if(!ue.accessToken||ue.isExpired)f(),U=null;else{const he=Date.parse(ue.expiresAt||"");if(Number.isFinite(he)&&he-Date.now()<=ex){const be=await pl(ue.accessToken);be.ok?(U=be.data.accessToken,await c()):(f(),U=null)}else U=ue.accessToken}}try{const ue=await md(K,U?{countryCode:jd,customerAccessToken:U}:{});Z(ue),G=ue.checkoutUrl}catch(ue){console.warn("Failed to attach customer identity before checkout",ue)}window.location.href=G||"/cart"}catch(K){console.error("Failed to prepare checkout",K),_(K instanceof Error?K.message:"Unable to continue to checkout."),window.location.href=h||"/cart"}},openCartDrawer:()=>b(!0),closeCartDrawer:()=>b(!1),toggleCartDrawer:()=>b(K=>!K),incrementItem:K=>{if(!j)return;const G=p.find(U=>U.id===K);G&&de(j,[{id:G.id,quantity:G.quantity+1}]).then(U=>{_(null),Z(U)}).catch(U=>{console.error("Failed to increment cart line",U),_(U instanceof Error?U.message:"Unable to update cart quantity.")})},decrementItem:K=>{if(!j)return;const G=p.find(U=>U.id===K);if(G){if(G.quantity<=1){ve(j,[G.id]).then(U=>{_(null),Z(U)}).catch(U=>{console.error("Failed to decrement cart line",U),_(U instanceof Error?U.message:"Unable to update cart quantity.")});return}de(j,[{id:G.id,quantity:G.quantity-1}]).then(U=>{_(null),Z(U)}).catch(U=>{console.error("Failed to decrement cart line",U),_(U instanceof Error?U.message:"Unable to update cart quantity.")})}},removeItem:K=>{j&&ve(j,[K]).then(G=>{_(null),Z(G)}).catch(G=>{console.error("Failed to remove cart line",G),_(G instanceof Error?G.message:"Unable to remove item from cart.")})}};return r.jsx(uf.Provider,{value:Ee,children:i})}function vn(){const i=N.useContext(uf);if(!i)throw new Error("useCart must be used within a CartProvider.");return i}function ds(i){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(i)}var rx=(i,s,l,c,f,p,m,x)=>{let b=document.documentElement,j=["light","dark"];function S(I){(Array.isArray(i)?i:[i]).forEach(_=>{let R=_==="class",z=R&&p?f.map(le=>p[le]||le):f;R?(b.classList.remove(...z),b.classList.add(p&&p[I]?p[I]:I)):b.setAttribute(_,I)}),h(I)}function h(I){x&&j.includes(I)&&(b.style.colorScheme=I)}function v(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(c)S(c);else try{let I=localStorage.getItem(s)||l,_=m&&I==="system"?v():I;S(_)}catch{}},bd=["light","dark"],cf="(prefers-color-scheme: dark)",ox=typeof window>"u",El=N.createContext(void 0),ix={setTheme:i=>{},themes:[]},Tl=()=>{var i;return(i=N.useContext(El))!=null?i:ix},sx=i=>N.useContext(El)?N.createElement(N.Fragment,null,i.children):N.createElement(lx,{...i}),ax=["light","dark"],lx=({forcedTheme:i,disableTransitionOnChange:s=!1,enableSystem:l=!0,enableColorScheme:c=!0,storageKey:f="theme",themes:p=ax,defaultTheme:m=l?"system":"light",attribute:x="data-theme",value:b,children:j,nonce:S,scriptProps:h})=>{let[v,I]=N.useState(()=>cx(f,m)),[_,R]=N.useState(()=>v==="system"?ol():v),z=b?Object.values(b):p,le=N.useCallback(oe=>{let ie=oe;if(!ie)return;oe==="system"&&l&&(ie=ol());let we=b?b[ie]:ie,Ee=s?dx(S):null,K=document.documentElement,G=U=>{U==="class"?(K.classList.remove(...z),we&&K.classList.add(we)):U.startsWith("data-")&&(we?K.setAttribute(U,we):K.removeAttribute(U))};if(Array.isArray(x)?x.forEach(G):G(x),c){let U=bd.includes(m)?m:null,ue=bd.includes(ie)?ie:U;K.style.colorScheme=ue}Ee==null||Ee()},[S]),de=N.useCallback(oe=>{let ie=typeof oe=="function"?oe(v):oe;I(ie);try{localStorage.setItem(f,ie)}catch{}},[v]),ve=N.useCallback(oe=>{let ie=ol(oe);R(ie),v==="system"&&l&&!i&&le("system")},[v,i]);N.useEffect(()=>{let oe=window.matchMedia(cf);return oe.addListener(ve),ve(oe),()=>oe.removeListener(ve)},[ve]),N.useEffect(()=>{let oe=ie=>{ie.key===f&&(ie.newValue?I(ie.newValue):de(m))};return window.addEventListener("storage",oe),()=>window.removeEventListener("storage",oe)},[de]),N.useEffect(()=>{le(i??v)},[i,v]);let Z=N.useMemo(()=>({theme:v,setTheme:de,forcedTheme:i,resolvedTheme:v==="system"?_:v,themes:l?[...p,"system"]:p,systemTheme:l?_:void 0}),[v,de,i,_,l,p]);return N.createElement(El.Provider,{value:Z},N.createElement(ux,{forcedTheme:i,storageKey:f,attribute:x,enableSystem:l,enableColorScheme:c,defaultTheme:m,value:b,themes:p,nonce:S,scriptProps:h}),j)},ux=N.memo(({forcedTheme:i,storageKey:s,attribute:l,enableSystem:c,enableColorScheme:f,defaultTheme:p,value:m,themes:x,nonce:b,scriptProps:j})=>{let S=JSON.stringify([l,s,p,i,x,m,c,f]).slice(1,-1);return N.createElement("script",{...j,suppressHydrationWarning:!0,nonce:typeof window>"u"?b:"",dangerouslySetInnerHTML:{__html:`(${rx.toString()})(${S})`}})}),cx=(i,s)=>{if(ox)return;let l;try{l=localStorage.getItem(i)||void 0}catch{}return l||s},dx=i=>{let s=document.createElement("style");return i&&s.setAttribute("nonce",i),s.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(s),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(s)},1)}},ol=i=>(i||(i=window.matchMedia(cf)),i.matches?"dark":"light");function fx(){const{customer:i,isAuthenticated:s}=nn(),{resolvedTheme:l,setTheme:c}=Tl(),f=l==="dark",[p,m]=N.useState(!1),x=s?(i==null?void 0:i.firstName)||"Account":"Sign in",b=s?"/account":"/account/login";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("header",{className:"header-container",children:[r.jsx(ke,{children:r.jsxs("div",{className:"header-inner",children:[r.jsx(px,{isDark:f}),r.jsx(mx,{}),r.jsx(hx,{accountHref:b,accountLabel:x,isDark:f,onToggleTheme:()=>c(f?"light":"dark")}),r.jsx("button",{className:"header-mobile-menu-btn",onClick:()=>m(!p),"aria-label":"Toggle mobile menu",children:p?r.jsx(Cl,{size:20}):r.jsx(vg,{size:20})})]})}),r.jsxs("div",{className:`header-mobile-menu${p?" open":""}`,children:[r.jsxs("nav",{className:"header-mobile-nav",children:[r.jsx("a",{href:"/products",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Products"}),r.jsx("a",{href:"/philosophy",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Philosophy"}),r.jsx("a",{href:"/community",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Community"})]}),r.jsxs("div",{className:"header-mobile-actions",children:[r.jsx("a",{href:b,className:"header-mobile-account-btn",onClick:()=>m(!1),style:{textDecoration:"none"},children:x}),r.jsxs("button",{className:"header-mobile-account-btn",onClick:()=>c(f?"light":"dark"),children:[f?r.jsx(sf,{size:20,style:{marginRight:"8px"}}):r.jsx(of,{size:20,style:{marginRight:"8px"}}),f?"Light Mode":"Dark Mode"]})]})]})]})]})}function px({isDark:i}){return r.jsx(gx,{isDark:i})}function mx(){return r.jsx(yx,{})}function hx({accountHref:i,accountLabel:s,isDark:l,onToggleTheme:c}){return r.jsxs("div",{className:"header-right",children:[r.jsx(xx,{isDark:l,onToggleTheme:c}),r.jsx(vx,{href:i,label:s}),r.jsx(wx,{})]})}function gx({isDark:i}){return r.jsx(Md,{size:32,variant:i?"light":"dark",showText:!0,href:"/"})}function xx({isDark:i,onToggleTheme:s}){return r.jsxs("button",{"aria-label":`Switch to ${i?"light":"dark"} mode`,onClick:s,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[i?r.jsx(sf,{size:16}):r.jsx(of,{size:16}),r.jsx("span",{className:"theme-toggle-text",children:i?"Light":"Dark"})]})}function yx(){return r.jsxs("nav",{className:"header-nav",children:[r.jsx("a",{href:"/products",className:"header-nav-link",children:"Products"}),r.jsx("a",{href:"/philosophy",className:"header-nav-link",children:"Philosophy"}),r.jsx("a",{href:"/community",className:"header-nav-link",children:"Community"})]})}function vx({href:i,label:s}){return r.jsx("a",{href:i,className:"header-account-btn",style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer",textDecoration:"none"},children:s})}function wx(){const{cartCount:i,openCartDrawer:s}=vn(),l=()=>{(window.location.pathname.replace(/\/+$/,"")||"/")!=="/cart"&&s()};return r.jsxs("div",{style:{position:"relative",display:"inline-flex"},children:[r.jsx(Ve,{label:"Cart",variant:"ghost",size:"sm",onClick:l}),r.jsx("div",{style:{position:"absolute",top:"-6px",right:"-8px",pointerEvents:"none",opacity:.78},children:r.jsx(tt,{label:String(i),variant:"accent",size:"sm"})})]})}function Ne({children:i,direction:s="vertical",gap:l=16,align:c="stretch",justify:f="flex-start",style:p,responsiveDirection:m,responsiveGap:x}){const b=s==="horizontal"?"row":"column",j=typeof l=="number"?`${l}px`:l,S=m||x,h=S?`stack-${Math.random().toString(36).substr(2,9)}`:"";return r.jsxs(r.Fragment,{children:[S&&r.jsx("style",{children:`
          .${h} {
            display: flex;
            flex-direction: ${b};
            gap: ${j};
            align-items: ${c};
            justify-content: ${f};
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
        `}),r.jsx("div",{className:S?h:void 0,style:S?p:{display:"flex",flexDirection:b,gap:j,alignItems:c,justifyContent:f,...p},children:i})]})}function kx(){const{resolvedTheme:i}=Tl(),s=i==="dark";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("footer",{className:"footer-container",children:r.jsx(ke,{children:r.jsxs(Ne,{gap:"24px",children:[r.jsxs("div",{className:"footer-top",children:[r.jsx(Sx,{}),r.jsx(jx,{})]}),r.jsxs("div",{className:"footer-bottom",children:[r.jsx(bx,{isDark:s}),r.jsx(Cx,{})]})]})})})]})}function Sx(){return r.jsxs(Ne,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Explore"}),r.jsxs(Ne,{gap:"10px",children:[r.jsx("a",{href:"#products",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Products"}),r.jsx("a",{href:"#philosophy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Philosophy"}),r.jsx("a",{href:"#community",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Community"}),r.jsx("a",{href:"/privacy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Privacy Policy"})]})]})}function jx(){return r.jsxs(Ne,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Standards"}),r.jsxs(Ne,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Curated for durability"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Reliable support"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Clear policies"})]})]})}function bx({isDark:i}){return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx(Md,{size:24,variant:i?"light":"dark",showText:!1,href:"/"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:"© VIBE STATION"})]})}function Cx(){return r.jsxs("div",{className:"footer-social",children:[r.jsx("button",{className:"footer-social-btn",children:"Instagram"}),r.jsx("button",{className:"footer-social-btn",children:"YouTube"}),r.jsx("button",{className:"footer-social-btn",children:"Email"})]})}function Ex({children:i}){return r.jsxs(Ne,{gap:"0px",style:{minHeight:"100vh"},children:[r.jsx(Tx,{}),r.jsx(Ix,{children:i}),r.jsx(_x,{})]})}function Tx(){return r.jsx(fx,{})}function Ix({children:i}){return r.jsx(Fx,{children:i})}function _x(){return r.jsx(kx,{})}function Fx({children:i}){return r.jsx("main",{style:{flex:1,backgroundColor:"var(--background)"},children:r.jsx(Ne,{gap:"0px",style:{height:"100%"},children:i})})}const Nx={standard:{top:"56px",bottom:"56px"},dense:{top:"32px",bottom:"32px"}},Bo={canvas:{backgroundColor:"var(--surface-canvas, #FFFFFF)"},subtle:{backgroundColor:"var(--surface-subtle, #FCFCFD)"},inverse:{backgroundColor:"var(--surface-inverse, #101828)",color:"var(--text-inverse, #FFFFFF)"}};function Rx(i){if(!i||typeof i!="object"||!("type"in i))return!1;const s=i.type;return s===ke||s===ke.Wide||s===ke.Standard||s===ke.Narrow}function df({children:i}){return r.jsx(r.Fragment,{children:i})}function zx({children:i}){return r.jsx("div",{style:{paddingTop:"56px",paddingBottom:"56px"},children:i})}function Ax({children:i}){return r.jsx("div",{style:{paddingTop:"32px",paddingBottom:"32px"},children:i})}function Px({children:i}){return r.jsx("div",{style:Bo.canvas,children:i})}function Dx({children:i}){return r.jsx("div",{style:Bo.subtle,children:i})}function Lx({children:i}){return r.jsx("div",{style:Bo.inverse,children:i})}function Ox({children:i,className:s,padding:l="standard",variant:c="canvas",containerWidth:f="standard",contain:p=!0,paddingTop:m,paddingBottom:x,background:b}){const j=Nx[l],S=m??j.top,h=x??j.bottom,v={...Bo[c],backgroundColor:b??Bo[c].backgroundColor},I=p&&!Rx(i);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .section-responsive {
          padding-top: ${S};
          padding-bottom: ${h};
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .section-responsive {
            padding-top: calc(${S} * 0.75);
            padding-bottom: calc(${h} * 0.75);
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 640px) {
          .section-responsive {
            padding-top: calc(${S} * 0.5);
            padding-bottom: calc(${h} * 0.5);
          }
        }
      `}),r.jsx("section",{className:`section-responsive ${s||""}`,style:v,children:r.jsx(df,{children:I?r.jsx(ke,{width:f,children:i}):i})})]})}const dt=Object.assign(Ox,{SectionContainerSlot:df,PaddingStandard:zx,PaddingDense:Ax,VariantCanvas:Px,VariantSubtle:Dx,VariantInverse:Lx});function Mx(){return r.jsx(dt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsxs(ke,{children:[r.jsx(Bx,{}),r.jsx(Ux,{})]})})}function Bx(){return r.jsxs(Ne,{gap:"0px",style:{marginBottom:"24px"},children:[r.jsx($x,{}),r.jsx(Hx,{})]})}function Ux(){return r.jsxs(Ne,{gap:"16px",children:[r.jsx(Wx,{}),r.jsx(Vx,{}),r.jsx(qx,{}),r.jsx(Yx,{}),r.jsx(Qx,{})]})}function $x(){return null}function Hx(){return null}function Wx(){return null}function Vx(){return null}function qx(){return null}function Yx(){return null}function Qx(){return null}function Kx(){return r.jsx(dt,{paddingTop:"64px",paddingBottom:"80px",background:"var(--card)",children:r.jsxs(ke,{children:[r.jsx(Xx,{}),r.jsx(Gx,{})]})})}function Xx(){return r.jsx(Ne,{gap:"0px",style:{marginBottom:"24px"},children:r.jsx(Zx,{})})}function Gx(){return r.jsxs(Ne,{gap:"16px",children:[r.jsx(Jx,{}),r.jsx(ey,{}),r.jsx(ty,{})]})}function Zx(){return null}function Jx(){return null}function ey(){return null}function ty(){return null}const ny={hero:null,heroMetaBadges:[],featuredDrop:null,socialProof:null};let as=ny,fs=!1,No=null;const ry=async()=>No||(No=(async()=>{var i,s,l,c;try{const f=await cs({first:6});if(f.edges.length===0){fs=!0;return}const p=f.edges.map(j=>j.node),m=p[0],x=vl(m),b=p.slice(0,3).map(j=>{var S,h;return{id:j.id,name:j.title,role:((S=j.featureLine)==null?void 0:S.value)||"Curated product",quote:((h=j.shortDescription)==null?void 0:h.value)||j.description||"Built for consistent daily use.",tag:j.tags[0]||"Curated"}});as={hero:{eyebrow:"Curated essentials for musicians",headline:"Gear that survives practice, travel, and stage.",supporting:"We research what musicians actually need, then pick durable, best-in-class tools with modern features so you buy once and keep playing.",primaryCta:"Shop products",secondaryCta:"Our philosophy",metaLine:"Fast delivery · Clear returns · Responsive support",featuredDropEyebrow:"Featured drop",featuredDropTitle:m.title,featuredDropSubtitle:((i=m.shortDescription)==null?void 0:i.value)||m.description||"",featuredDropImageUrl:(x==null?void 0:x.url)||"",featuredDropImageAlt:(x==null?void 0:x.altText)||m.title},featuredDrop:{eyebrow:"Featured drop",title:"Best-in-class essentials, chosen to last.",supporting:"One product at a time. Thorough research. Durable materials. Modern features that matter in real practice and gig conditions.",badges:["Durable build","Fast + accurate","Stage-ready"],primaryCta:"View featured",secondaryCta:"See all products",productName:m.title,productPrice:new Intl.NumberFormat("en-IN",{style:"currency",currency:m.priceRange.minVariantPrice.currencyCode,maximumFractionDigits:0}).format(Number.parseFloat(m.priceRange.minVariantPrice.amount)),productCopy:((s=m.shortDescription)==null?void 0:s.value)||m.description||"",featureLine:((l=m.featureLine)==null?void 0:l.value)||"",productBadge:((c=m.badge)==null?void 0:c.value)||m.tags[0]||"",productImageUrl:(x==null?void 0:x.url)||"",productImageAlt:(x==null?void 0:x.altText)||m.title},heroMetaBadges:["Curated for durability","Modern features","Clear policies"],socialProof:{eyebrow:"What musicians notice",title:"Built for real use — not shelf appeal.",supporting:"Feedback that focuses on durability, clarity, and daily reliability.",chips:m.tags.slice(0,4),testimonials:b,ctaLabel:"Explore products"}}}catch(f){console.error("Failed to load home data from Shopify",f)}finally{fs=!0,No=null}})(),No);function $o(){const[i,s]=N.useState(as),[l,c]=N.useState(!fs);return N.useEffect(()=>{let f=!1;return fs?(s(as),c(!1),()=>{f=!0}):(ry().then(()=>{f||(s(as),c(!1))}),()=>{f=!0})},[]),{...i,isLoading:l}}function oy(){const{hero:i}=$o();return i?r.jsx(dt,{contain:!1,paddingTop:"56px",paddingBottom:"48px",background:"var(--card)",children:r.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:"-200px",right:"-200px",width:"600px",height:"600px",backgroundColor:"#4F46E50F",borderRadius:"50%",filter:"blur(120px)",pointerEvents:"none",zIndex:0}}),r.jsx(ke,{width:"wide",className:"relative z-[1]",children:r.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"64px",alignItems:"center"},children:[r.jsx("div",{style:{flex:"0 0 55%"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.eyebrow}),r.jsx("h1",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"48px",lineHeight:"56px",fontWeight:"600",color:"var(--foreground)",letterSpacing:"-0.01em",margin:0},children:i.headline}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"540px",margin:0},children:i.supporting}),r.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[r.jsx(iy,{label:i.primaryCta}),r.jsx(sy,{label:i.secondaryCta})]}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",marginTop:"8px"},children:i.metaLine})]})}),r.jsx("div",{style:{flex:"0 0 45%",position:"relative"},children:r.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"480px",height:"420px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[r.jsx("div",{style:{backgroundColor:"var(--muted)",height:"280px",width:"100%"},children:i.featuredDropImageUrl?r.jsx("img",{src:i.featuredDropImageUrl,alt:i.featuredDropImageAlt||i.featuredDropTitle,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{padding:"20px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.featuredDropEyebrow}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.featuredDropTitle}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:i.featuredDropSubtitle})]})})]})})]})})]})}):null}function iy({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function sy({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function ff({children:i,wrap:s="on",gap:l=12,align:c="center",justify:f="flex-start",style:p,responsiveGap:m}){const x=typeof l=="number"?`${l}px`:l,b=!!m,j=b?`cluster-${Math.random().toString(36).substr(2,9)}`:"";return r.jsxs(r.Fragment,{children:[b&&r.jsx("style",{children:`
          .${j} {
            display: flex;
            flex-direction: row;
            flex-wrap: ${s==="on"?"wrap":"nowrap"};
            gap: ${x};
            align-items: ${c};
            justify-content: ${f};
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
        `}),r.jsx("div",{className:b?j:void 0,style:b?p:{display:"flex",flexDirection:"row",flexWrap:s==="on"?"wrap":"nowrap",gap:x,alignItems:c,justifyContent:f,...p},children:i})]})}function ay(){const{heroMetaBadges:i}=$o();return i.length===0?null:r.jsx(dt,{contain:!1,paddingTop:"24px",paddingBottom:"24px",background:"var(--card)",children:r.jsx(ke,{width:"wide",children:r.jsx(ff,{wrap:"on",gap:12,align:"center",children:i.map(s=>r.jsx(tt,{label:s,variant:"neutral",size:"md"},s))})})})}function ly(){const{featuredDrop:i}=$o();return i?r.jsx(dt,{paddingTop:"56px",paddingBottom:"56px",background:"var(--background)",children:r.jsx(ke,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"48px",alignItems:"flex-start"},children:[r.jsx("div",{style:{flex:"0 0 45%"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.eyebrow}),r.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:i.title}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"480px",margin:0},children:i.supporting}),r.jsx("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:i.badges.map(s=>r.jsx(tt,{label:s,variant:"neutral",size:"md"},s))}),r.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[r.jsx(uy,{label:i.primaryCta}),r.jsx(cy,{label:i.secondaryCta})]})]})}),r.jsx("div",{style:{flex:"0 0 55%"},children:r.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"560px",height:"360px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[r.jsx("div",{style:{backgroundColor:"var(--muted)",height:"200px",width:"100%"},children:i.productImageUrl?r.jsx("img",{src:i.productImageUrl,alt:i.productImageAlt||i.productName,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{padding:"16px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.productName}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.productPrice})]}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:i.productCopy}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:i.featureLine}),r.jsx("div",{style:{marginTop:"2px"},children:r.jsx(tt,{label:i.productBadge,variant:"accent",size:"sm"})})]})})]})})]})})}):null}function uy({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function cy({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function dy(){return null}function fy(){return null}function py(){return null}function my(){return null}function hy(){const{socialProof:i}=$o();return i?r.jsx(dt,{paddingTop:"56px",paddingBottom:"56px",background:"var(--card)",children:r.jsxs(ke,{children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"24px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.eyebrow}),r.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:i.title}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:i.supporting})]}),r.jsx("div",{style:{display:"flex",gap:"12px",marginBottom:"32px"},children:i.chips.map(s=>r.jsx(tt,{label:s,variant:"neutral",size:"md"},s))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"32px"},children:i.testimonials.map(s=>r.jsx("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"220px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",padding:"20px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)"},children:s.name}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:s.role})]}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,flex:1},children:s.quote}),r.jsx("div",{children:r.jsx(tt,{label:s.tag,variant:"neutral",size:"sm"})})]})},s.id))}),r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx(gy,{label:i.ctaLabel})})]})}):null}function gy({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function xy(){return null}function yy(){return null}function vy(){return null}function Ae({width:i="100%",height:s="16px",borderRadius:l="8px",style:c,...f}){const p={width:i,height:s,borderRadius:l,background:"linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 37%, var(--skeleton-base) 63%)",backgroundSize:"400% 100%",animation:"vs-skeleton-shimmer 1.2s ease-in-out infinite"};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        @keyframes vs-skeleton-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `}),r.jsx("div",{"aria-hidden":"true",style:{...p,...c},...f})]})}function wy(){return r.jsxs(Ne,{gap:"0px",children:[r.jsx(dt,{paddingTop:"56px",paddingBottom:"48px",background:"var(--background)",children:r.jsx(ke,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:"48px"},children:[r.jsxs(Ne,{gap:"16px",children:[r.jsx(Ae,{width:"140px",height:"14px"}),r.jsx(Ae,{width:"88%",height:"56px",borderRadius:"12px"}),r.jsx(Ae,{width:"92%",height:"24px"}),r.jsx(Ae,{width:"80%",height:"24px"}),r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(Ae,{width:"136px",height:"44px",borderRadius:"12px"}),r.jsx(Ae,{width:"136px",height:"44px",borderRadius:"12px"})]})]}),r.jsx(Ae,{width:"100%",height:"420px",borderRadius:"16px"})]})})}),r.jsx(dt,{paddingTop:"48px",paddingBottom:"56px",background:"var(--background)",children:r.jsx(ke,{children:r.jsxs(Ne,{gap:"16px",children:[r.jsx(Ae,{width:"180px",height:"18px"}),r.jsx(Ae,{width:"56%",height:"32px"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(i=>r.jsx(Ae,{height:"240px",borderRadius:"16px"},i))})]})})})]})}function ky(){return r.jsx(dt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsx(ke,{children:r.jsxs(Ne,{gap:"16px",children:[r.jsx(Ae,{width:"96px",height:"14px"}),r.jsx(Ae,{width:"180px",height:"40px"}),r.jsx(Ae,{width:"420px",height:"24px"}),r.jsx(Ae,{width:"100%",height:"44px",borderRadius:"12px"}),r.jsx("div",{style:{display:"flex",gap:"12px"},children:[1,2,3,4].map(i=>r.jsx(Ae,{width:"112px",height:"36px",borderRadius:"999px"},i))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3,4,5,6].map(i=>r.jsx(Ae,{height:"460px",borderRadius:"16px"},i))})]})})})}function Sy(){return r.jsxs(Ne,{gap:"0px",children:[r.jsx(dt,{paddingTop:"24px",paddingBottom:"16px",background:"var(--card)",children:r.jsx(ke,{children:r.jsx(Ae,{width:"280px",height:"16px"})})}),r.jsx(dt,{paddingTop:"16px",paddingBottom:"32px",background:"var(--card)",children:r.jsx(ke,{children:r.jsxs(Ne,{gap:"12px",children:[r.jsx(Ae,{width:"120px",height:"14px"}),r.jsx(Ae,{width:"52%",height:"36px"}),r.jsx(Ae,{width:"72%",height:"22px"})]})})}),r.jsx(dt,{paddingTop:"24px",paddingBottom:"48px",background:"var(--background)",children:r.jsx(ke,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 420px",gap:"48px"},children:[r.jsx(Ae,{width:"100%",height:"560px",borderRadius:"16px"}),r.jsx(Ae,{width:"100%",height:"560px",borderRadius:"16px"})]})})}),r.jsx(dt,{paddingTop:"48px",paddingBottom:"56px",background:"var(--card)",children:r.jsx(ke,{children:r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(i=>r.jsx(Ae,{height:"220px",borderRadius:"16px"},i))})})})]})}function jy(){const{isLoading:i}=$o();return i?r.jsx(wy,{}):r.jsxs(r.Fragment,{children:[r.jsx(by,{}),r.jsx(Cy,{})]})}function by(){return r.jsxs(Ne,{gap:"0px",children:[r.jsx(oy,{}),r.jsx(ay,{})]})}function Cy(){return r.jsxs(Ne,{gap:"0px",children:[r.jsx(ly,{}),r.jsx(dy,{}),r.jsx(fy,{}),r.jsx(py,{}),r.jsx(my,{}),r.jsx(hy,{}),r.jsx(xy,{}),r.jsx(yy,{}),r.jsx(vy,{})]})}function Ey(){return r.jsx(dt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsxs(ke,{children:[r.jsx(Ty,{}),r.jsx(Iy,{})]})})}function Ty(){return r.jsxs(Ne,{gap:"0px",style:{marginBottom:"24px"},children:[r.jsx(_y,{}),r.jsx(Fy,{})]})}function Iy(){return r.jsxs(Ne,{gap:"16px",children:[r.jsx(Ny,{}),r.jsx(Ry,{}),r.jsx(zy,{}),r.jsx(Ay,{}),r.jsx(Py,{}),r.jsx(Dy,{}),r.jsx(Ly,{}),r.jsx(Oy,{})]})}function _y(){return null}function Fy(){return null}function Ny(){return null}function Ry(){return null}function zy(){return null}function Ay(){return null}function Py(){return null}function Dy(){return null}function Ly(){return null}function Oy(){return null}const My="http://localhost:3001",rs="/api/shopify/admin/product-metadata",By=i=>`${(rs.startsWith("http://")||rs.startsWith("https://")?rs:`${My.replace(/\/+$/,"")}/${rs.replace(/^\/+/,"")}`).replace(/\/+$/,"")}/${encodeURIComponent(i)}`;async function Uy(i){const s=await fetch(By(i),{method:"GET",credentials:"include"});if(!s.ok)throw s.status===429?new Pe("Rate limit exceeded","RATE_LIMIT"):new Pe(`HTTP ${s.status}`,"HTTP_ERROR");return(await s.json()).product??null}const Mr={productHeader:{badge:"",title:"",vendor:"",sku:"",shareUrl:"",shareLabel:""},productMain:{gallery:{images:[],zoomLabel:"",prevLabel:"",nextLabel:""},buyBox:{variantId:null,badge:"",name:"",descriptor:"",price:"",compareAtPrice:null,stock:"",isInStock:!1,features:[],reassurancePoints:[],primaryCta:"Add to cart",secondaryCta:"Buy now",microLine:"",inBoxTitle:"",inBoxLine:""}},keyBenefits:{title:"",cards:[]},featureDeepDive:{overviewTitle:"",overviewHtml:"",storyTitle:"",storyHtml:"",buyingGuideTitle:"",buyingGuideHtml:"",curatedFor:"",notFor:""},deliveryAndReturns:[],reviews:{title:"",supporting:"",averageLabel:"",averageValue:"",totalReviewsLabel:"",verifiedLabel:"",useCasePrefix:"",writeReviewLabel:"Write a review",loadMoreLabel:"Load more",breakdown:[],tags:[],items:[]},relatedProducts:{title:"Complete your setup",viewAllLabel:"View all",addToCartLabel:"Add to cart",items:[]},specsAndInBox:{specificationsTitle:"",specifications:[],inBoxTitle:"",inBoxItems:[],inBoxBadge:"",productDetailsTitle:"",productDetails:[]},faq:{title:"",items:[]},stickyCtaRail:{variantId:null,name:"",price:"",stockLabel:"",isInStock:!1,shippingLabel:"",reassurancePoints:[],addToCartLabel:"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}},ls="all",$y="All",pf=i=>i.trim().toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),Hy="https://thevibestation.com".replace(/\/+$/,""),Wy=["capo","tuner","string","pick","holder","gig bag","bundle","essentials"],mf=i=>{var l,c,f,p;const s=(c=(l=i.variants)==null?void 0:l.edges.find(m=>{const x=m.node;return x.availableForSale&&(typeof x.quantityAvailable!="number"||x.quantityAvailable>0)}))==null?void 0:c.node;return(s==null?void 0:s.id)||((p=(f=i.variants)==null?void 0:f.edges[0])==null?void 0:p.node.id)||null},hf=i=>{var s,l;return((l=(s=i.variants)==null?void 0:s.edges[0])==null?void 0:l.node)??null},us=(i,s)=>{if(!i||!s)return"₹—";const l=Number.parseFloat(i);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:s,maximumFractionDigits:0}).format(l):`${s} ${i}`},Ur=i=>i?i.replace(/<br\s*\/?>/gi,`
`).replace(/<\/(p|div|li|h[1-6])>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").trim():"",gn=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),xn=i=>i?i.replace(/\r\n?/g,`
`).replace(/\\r\\n|\\r/g,`
`).replace(/\\n/g,`
`).replace(/\\t/g," ").replace(/&nbsp;/gi," ").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim():"",ps=i=>i.replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,s=>s.toUpperCase()),Vy=i=>/taxonomy\s*reference/i.test(i),qy=i=>i.split(">").map(s=>s.trim()).filter(Boolean).at(-1)||i.trim(),os=(i,s)=>{const l=xn(s).replace(/\s*\n+\s*/g," ").replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim();return l?/^label$/i.test(i)?l:/^color$/i.test(i)?`(${l})`:l:""},Cd=i=>i.replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*\|\s*/g," | ").replace(/\s*,\s*\|/g," |").replace(/\|\s*,\s*/g,"| ").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim(),Yy=i=>{var p;const s=i.fields.filter(m=>m.value&&m.value.trim().length>0&&!Vy(m.key));if(s.length===0)return((p=i.displayName)==null?void 0:p.trim())||"";const l=s.find(m=>/^label$/i.test(m.key)),c=s.find(m=>/^color$/i.test(m.key)),f=s.filter(m=>!/^label$/i.test(m.key)&&!/^color$/i.test(m.key));if(l){const m=[os(l.key,l.value??""),...c?[os(c.key,c.value??"")]:[]].filter(Boolean);if(f.length===0&&m.length>0)return m.join(" ");const x=f.map(b=>os(b.key,b.value??"")).filter(Boolean);return[...m,...x].join(", ")}return s.map(m=>os(m.key,m.value??"")).filter(Boolean).join(", ")},Qy=i=>xn(i).replace(/<br\s*\/?>/gi,`
`).split(`
`).map(s=>Ur(s).trim()).filter(Boolean),il=i=>Qy(i).map(s=>{const l=s.match(/^([^:]+):\s*(.+)$/);return l?{label:ps(l[1]),value:xn(l[2]).replace(/\s*\n+\s*/g," ").trim()}:null}).filter(s=>!!s&&s.value.length>0),Ed=i=>{const s=xn(i);return s?s.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(c=>c.trim()).filter(Boolean).map(c=>{const f=c.split(`
`).map(b=>Ur(b).trim()).filter(Boolean);if(f.length===0)return"";if(f.length>1&&f[0].endsWith(":")){const b=`<p><strong>${gn(f[0])}</strong></p>`,j=f.slice(1).map(S=>`<li>${gn(S)}</li>`).join("");return j?`${b}<ul>${j}</ul>`:b}const p=[];let m=[];const x=()=>{m.length!==0&&(p.push(`<p>${gn(m.join(" "))}</p>`),m=[])};return f.forEach(b=>{const j=b.match(/^([^:]{1,60}):\s*(.+)$/);if(j){x(),p.push(`<p><strong>${gn(j[1].trim())}:</strong> ${gn(j[2].trim())}</p>`);return}m.push(b)}),x(),p.join("")}).join(""):""},Ky=i=>{const s=i.trim();return s.startsWith("[")||s.includes("•")||s.includes("|")},gf=i=>{const s=typeof i.type=="string"?i.type:"",l=typeof i.value=="string"?gn(i.value):"",c=Array.isArray(i.children)?i.children.map(f=>f&&typeof f=="object"?gf(f):"").join(""):"";switch(s){case"root":return c;case"paragraph":return`<p>${c}</p>`;case"heading":return`<h3>${c}</h3>`;case"text":return l;case"text_bold":return`<strong>${c||l}</strong>`;case"text_italic":return`<em>${c||l}</em>`;case"list":return`<ul>${c}</ul>`;case"list-item":return`<li>${c}</li>`;case"link":return typeof i.url=="string"?`<a href="${gn(i.url)}">${c}</a>`:c;default:return c||l}},sl=i=>{if(!i)return"";const s=xn(i);if(Ky(s)){const l=ms(s);if(l.length>0)return`<ul>${l.map(c=>`<li>${gn(c)}</li>`).join("")}</ul>`}if(s.includes("<"))return s;try{const l=JSON.parse(s);if(l&&typeof l=="object")return gf(l)}catch{return Ed(s)}return Ed(s)},ms=i=>{const s=xn(i);if(!s)return[];const l=c=>c.replace(/<br\s*\/?>/gi,`
`).split(/\n|,|\||•/).map(f=>Ur(f).trim()).filter(Boolean);try{const c=JSON.parse(s);if(Array.isArray(c))return c.flatMap(f=>typeof f=="string"?l(f):[]).filter(Boolean);if(typeof c=="string")return l(c)}catch{return l(s)}return[]},Xy=i=>{const s=xn(i);if(!s)return[];try{const l=JSON.parse(s);if(l&&typeof l=="object"&&!Array.isArray(l)){const c=Object.entries(l).flatMap(([f,p])=>{const m=il(`${ps(f)}: ${String(p)}`);return m.length>0?m:[{label:ps(f),value:xn(String(p)).replace(/\s*\n+\s*/g," ").trim()}]}).filter(f=>f.value.length>0);if(c.length>0)return c}}catch{return il(s)}return il(s)},Gy=i=>{if(!i)return[];try{const s=JSON.parse(i);if(Array.isArray(s))return s.map(l=>{if(!l||typeof l!="object")return null;const c=l,f=typeof c.question=="string"?c.question.trim():"",p=typeof c.answer=="string"?c.answer.trim():"";return f&&p?{question:f,answer:p}:null}).filter(l=>!!l)}catch{return i.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(l=>Ur(l)).filter(Boolean).map(l=>{const[c,...f]=l.split(`
`),p=f.join(" ").trim();return!c||!p?null:{question:c.replace(/^Q[:\-]?\s*/i,""),answer:p.replace(/^A[:\-]?\s*/i,"")}}).filter(l=>!!l)}return[]},ml=(i,s="Yes",l="No")=>{if(!i)return"";const c=i.trim().toLowerCase();return["true","yes","available","1"].includes(c)?s:["false","no","not available","0"].includes(c)?l:i.trim()},xf=()=>{if(typeof window>"u")return null;const i=window.location.pathname.match(/\/products\/([^/]+)/);return(i==null?void 0:i[1])??null},yf=i=>`${Hy}/products/${i.handle}`,Zy=i=>{var c;if(i.availableForSale===!1)return"Out of stock";if(typeof i.totalInventory=="number")return i.totalInventory>0?`In stock (${i.totalInventory} available)`:"Out of stock";const s=hf(i);return s&&typeof s.quantityAvailable=="number"?s.quantityAvailable>0?`In stock (${s.quantityAvailable} available)`:"Out of stock":((c=i.variants)==null?void 0:c.edges.some(f=>{const p=f.node;return p.availableForSale===!1?!1:typeof p.quantityAvailable=="number"?p.quantityAvailable>0:p.availableForSale===!0}))?"In stock":"Out of stock"},Jy=i=>{var l;return ms((l=i.whyDifferent)==null?void 0:l.value).slice(0,3).map((c,f)=>({id:`${i.handle}-feature-${f}`,badge:`0${f+1}`,title:c,description:"",footer:""}))},e0=i=>{const s=`${i.title} ${i.tags.join(" ")}`.toLowerCase();return Wy.some(l=>s.includes(l))?"Pair it with these":"Complete your setup"},t0=i=>{var c;const s={averageValue:"—",totalReviewsLabel:"No reviews yet",breakdown:[],tags:[],items:[]},l=(c=i.reviewSummary)==null?void 0:c.value;if(!l)return s;try{const f=JSON.parse(l),p=typeof f.average=="number"?f.average.toFixed(1):"—",m=typeof f.count=="number"?f.count:0,x=Array.isArray(f.breakdown)?f.breakdown:[],b=Array.isArray(f.items)?f.items:[],j=Array.isArray(f.tags)?f.tags:[];return{averageValue:p,totalReviewsLabel:`${m} review${m===1?"":"s"}`,breakdown:x.map(S=>{if(!S||typeof S!="object")return null;const h=S,v=typeof h.stars=="number"?h.stars:0,I=typeof h.count=="number"?h.count:0;return v>0?{stars:v,count:I,label:`${v} star`}:null}).filter(S=>!!S).sort((S,h)=>h.stars-S.stars),tags:j.filter(S=>typeof S=="string"),items:b.map((S,h)=>{if(!S||typeof S!="object")return null;const v=S;return{id:typeof v.id=="string"?v.id:`review-${h}`,name:typeof v.name=="string"?v.name:"Verified buyer",role:typeof v.role=="string"?v.role:"Customer",quote:typeof v.quote=="string"?v.quote:"",useCase:typeof v.useCase=="string"?v.useCase:"General use",rating:typeof v.rating=="number"?v.rating:5,tags:Array.isArray(v.tags)?v.tags.filter(I=>typeof I=="string"):[],verified:v.verified!==!1}}).filter(S=>!!S&&S.quote.length>0)}}catch{return s}},n0=i=>{var l,c,f,p,m,x,b;const s=[(l=i.packCount)==null?void 0:l.value,(c=i.bestFor)==null?void 0:c.value,(f=i.dispatchTime)==null?void 0:f.value,(p=i.deliveryWindow)==null?void 0:p.value,(m=i.returnsPolicy)==null?void 0:m.value,ml((x=i.codAvailable)==null?void 0:x.value,"COD available","COD unavailable"),ml((b=i.secureCheckout)==null?void 0:b.value,"Secure checkout","")].map(j=>j==null?void 0:j.trim()).filter(j=>!!j);return Array.from(new Set(s)).slice(0,6)},r0=i=>{var l,c,f;const s=hf(i);return[{label:"SKU",value:(s==null?void 0:s.sku)||"Available on request"},{label:"Brand",value:i.vendor||"Vibe Station"},{label:"Country of origin",value:((l=i.countryOfOrigin)==null?void 0:l.value)||""},{label:"GST invoice",value:ml((c=i.gstInvoice)==null?void 0:c.value,"Available","Not specified")||"Not specified"},{label:"Care / storage",value:Ur((f=i.careInstructions)==null?void 0:f.value)},{label:"Shareable short URL",value:yf(i)}].filter(p=>p.value.trim().length>0)},vf=i=>{const s=i==null?void 0:i.trim();if(!s)return[];try{const l=JSON.parse(s);if(Array.isArray(l))return l.map(c=>typeof c=="string"?c.trim():"").filter(c=>c.length>0)}catch{}return s.split(/[\n,]+/).map(l=>l.trim()).filter(Boolean)},Td=i=>{var s;return Array.from(new Set([...vf((s=i.categories)==null?void 0:s.value),...i.tags.map(l=>l.trim()).filter(Boolean)]))},Id=i=>i.map(s=>pf(s)).filter(Boolean),o0=async i=>{const s=Td(i),l=new Set(Id(s)),c=new Set(s.map(p=>p.toLowerCase()));return l.size===0&&c.size===0?[]:(await cs({first:50})).edges.map(p=>p.node).filter(p=>p.id!==i.id).map(p=>{const m=Td(p),x=Id(m),b=m.filter(S=>c.has(S.toLowerCase())).length,j=x.filter(S=>l.has(S)).length;return{candidate:p,score:b+j}}).filter(p=>p.score>0).sort((p,m)=>m.score-p.score).slice(0,20).map(p=>p.candidate)},i0=i=>(i??[]).flatMap(s=>{const l=ps(s.key),c=s.reference?[s.reference]:[],f=Array.isArray(s.references)?s.references:[],p=[...c,...f].map(b=>Yy(b)).filter(Boolean),m=Cd(xn(s.value).replace(/\s*\n+\s*/g," ").trim()),x=Cd(p.length>0?p.join(" | "):m);return x.length>0?[{label:l,value:x}]:[]}),s0=(i,s)=>{var b,j,S,h;const l=Xy((b=i.specifications)==null?void 0:b.value),c=vf((j=i.categories)==null?void 0:j.value),f=((S=s==null?void 0:s.category)==null?void 0:S.fullName)||((h=s==null?void 0:s.category)==null?void 0:h.name)||"",p=Array.from(new Set([...c,...f?[f]:[]].map(v=>qy(v)).filter(Boolean))),m=p.length>0?[{label:"Category",value:p.join(", ")}]:[],x=i0(s==null?void 0:s.shopifyMetafields);return[...m,...x,...l].filter((v,I,_)=>{const R=`${v.label.toLowerCase()}::${v.value.toLowerCase()}`;return _.findIndex(z=>`${z.label.toLowerCase()}::${z.value.toLowerCase()}`===R)===I})},a0=(i,s)=>s.filter(l=>l.id!==i.id&&l.handle!==i.handle).slice(0,6).map(l=>{var f,p,m;const c=vl(l);return{id:l.handle,variantId:mf(l),badge:((f=l.badge)==null?void 0:f.value)||l.tags[0]||"Curated",name:l.title,descriptor:((p=l.shortDescription)==null?void 0:p.value)||l.description||"Curated recommendation",featureLine:((m=l.featureLine)==null?void 0:m.value)||l.tags.slice(0,3).join(" · ")||"Pairs well with this setup",price:us(l.priceRange.minVariantPrice.amount,l.priceRange.minVariantPrice.currencyCode),imageUrl:c==null?void 0:c.url,imageAlt:(c==null?void 0:c.altText)||l.title}}),l0=()=>Mr.reviews,u0=({product:i,adminMetadata:s,relatedProducts:l})=>{var le,de,ve,Z,oe,ie,we,Ee,K,G,U,ue,he,Ye,be,ne,pe,O,V,B,w,F,H,J,se,X,me,ce,ge,De,rn,wn;const c=((de=(le=i.variants)==null?void 0:le.edges[0])==null?void 0:de.node)??null,f=sl((ve=i.whyDifferent)==null?void 0:ve.value),p=sl((Z=i.buyingGuide)==null?void 0:Z.value),m=sl(i.description)||i.descriptionHtml||`<p>${gn(i.description)}</p>`,x=s0(i,s),b=ms((oe=i.whatsInBox)==null?void 0:oe.value),j=ms((ie=i.bulletFeatures)==null?void 0:ie.value),S=Jy(i),h=Zy(i),v=h.toLowerCase().startsWith("in stock"),I=mf(i),_=t0(i),R=n0(i),z=yf(i);return{productHeader:{badge:((we=i.badge)==null?void 0:we.value)||"Curated pick",title:i.title,vendor:i.vendor||"Vibe Station",sku:(c==null?void 0:c.sku)||"—",shareUrl:z,shareLabel:"Shareable short URL"},productMain:{gallery:{images:i.images.edges.map((St,Kt)=>({id:St.node.id||`${i.handle}-${Kt}`,url:St.node.url,altText:St.node.altText||`${i.title} image ${Kt+1}`}))||[],zoomLabel:"Zoom",prevLabel:"Prev",nextLabel:"Next"},buyBox:{variantId:I,badge:((Ee=i.badge)==null?void 0:Ee.value)||"Curated pick",name:i.title,descriptor:((K=i.subtitle)==null?void 0:K.value)||((G=i.shortDescription)==null?void 0:G.value)||Ur(i.descriptionHtml)||i.description,price:us(i.priceRange.minVariantPrice.amount,i.priceRange.minVariantPrice.currencyCode),compareAtPrice:(U=i.compareAtPriceRange)!=null&&U.minVariantPrice?us(i.compareAtPriceRange.minVariantPrice.amount,i.compareAtPriceRange.minVariantPrice.currencyCode):null,stock:h,isInStock:v,features:j,reassurancePoints:R,primaryCta:((ue=i.ctaLabel)==null?void 0:ue.value)||"Add to cart",secondaryCta:((he=i.ctaSubtext)==null?void 0:he.value)||"Buy now",microLine:((Ye=i.shippingInfo)==null?void 0:Ye.value)||[(be=i.dispatchTime)==null?void 0:be.value,(ne=i.supportResponseTime)==null?void 0:ne.value,(pe=i.deliveryWindow)==null?void 0:pe.value].filter(Boolean).join(" · ")||"Shipping calculated at checkout · Clear returns · Responsive support",inBoxTitle:"What's in the box",inBoxLine:b.join(" · ")}},keyBenefits:{title:"Why it feels different",cards:S},featureDeepDive:{overviewTitle:"Product overview",overviewHtml:m,storyTitle:"Why this made the cut",storyHtml:f,buyingGuideTitle:"Buying guide",buyingGuideHtml:p,curatedFor:((O=i.curatedFor)==null?void 0:O.value)||((V=i.bestFor)==null?void 0:V.value)||"Players comparing feel, grip, and attack quickly.",notFor:((B=i.notFor)==null?void 0:B.value)||"Players who already know they only want one exact gauge."},deliveryAndReturns:[{id:"dispatch",badge:"Dispatch",title:"Estimated dispatch",description:((w=i.deliveryInfo)==null?void 0:w.value)||"",footer:((F=i.deliveryWindow)==null?void 0:F.value)||""},{id:"returns",badge:"Returns",title:"Returns & replacements",description:((H=i.returnsPolicy)==null?void 0:H.value)||"",footer:((J=i.replacementPolicy)==null?void 0:J.value)||""},{id:"support",badge:"Support",title:"Support response",description:((se=i.supportInfo)==null?void 0:se.value)||"",footer:((X=i.supportResponseTime)==null?void 0:X.value)||""}].filter(St=>St.description.trim().length>0||St.footer.trim().length>0),reviews:{...l0(),supporting:(me=i.reviewSummary)!=null&&me.value?"Real review summary pulled from Shopify metafields.":"Add custom.reviews in Shopify to populate rating, review count, tags, and breakdown.",averageLabel:_.averageValue==="—"?"No rating yet":`${_.averageValue} / 5`,averageValue:_.averageValue,totalReviewsLabel:_.totalReviewsLabel,breakdown:_.breakdown,tags:_.tags,items:_.items},relatedProducts:{...Mr.relatedProducts,title:e0(i),items:a0(i,l)},specsAndInBox:{specificationsTitle:"Specifications",specifications:x,inBoxTitle:"In the box",inBoxItems:b,inBoxBadge:((ce=i.packCount)==null?void 0:ce.value)||"No extras required",productDetailsTitle:"Product details",productDetails:r0(i)},faq:{title:"FAQ",items:Gy((ge=i.faq)==null?void 0:ge.value)},stickyCtaRail:{variantId:I,name:i.title,price:us(i.priceRange.minVariantPrice.amount,i.priceRange.minVariantPrice.currencyCode),stockLabel:h,isInStock:v,shippingLabel:((De=i.deliveryWindow)==null?void 0:De.value)||((rn=i.shippingInfo)==null?void 0:rn.value)||"Shipping calculated at checkout",reassurancePoints:R,addToCartLabel:((wn=i.ctaLabel)==null?void 0:wn.value)||"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}}};let fr=Mr,Do=!1,Ro=null,Lo=null,Po=!1;const c0=async i=>{const s=i??xf();return Ro&&s===Lo||(Ro=(async()=>{try{const l=s;if(!l){fr=Mr,Po=!1,Do=!0,Lo=null;return}Lo=l;const[c,f]=await Promise.all([Jm(l),Uy(l).catch(m=>(console.error("Failed to load public admin product metadata",m),null))]);if(!c){fr=Mr,Po=!1,Do=!0;return}const p=await o0(c).catch(()=>[]);fr=u0({product:c,adminMetadata:f,relatedProducts:p}),Po=!0}catch(l){fr=Mr,Po=!1,console.error("Failed to load product detail from Shopify",l)}finally{Do=!0,Ro=null}})()),Ro};function Qt(){const i=xf(),[s,l]=N.useState(fr),[c,f]=N.useState(!Do||Lo!==i);return N.useEffect(()=>{let p=!1;return Do&&Lo===i?(l(fr),f(!1),()=>{p=!0}):(f(!0),c0(i).then(()=>{p||(l(fr),f(!1))}),()=>{p=!0})},[i]),{...s,hasProduct:Po,isLoading:c}}function d0(){const{productHeader:i}=Qt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"product-title-block",children:[r.jsxs("div",{className:"product-title-badge-row",children:[r.jsx(tt,{label:i.badge,variant:"accent",size:"sm"}),r.jsx("span",{className:"product-title-vendor",children:i.vendor})]}),r.jsx("h1",{className:"product-title-h1",children:i.title}),r.jsxs("div",{className:"product-title-meta",children:[r.jsxs("span",{children:["SKU: ",i.sku]}),r.jsxs("span",{children:[i.shareLabel,": ",i.shareUrl]})]})]})]})}function f0(){const{productHeader:i}=Qt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("nav",{"aria-label":"Breadcrumb",children:r.jsxs("ol",{className:"breadcrumb-nav",children:[r.jsx("li",{children:r.jsx("a",{href:"/",className:"breadcrumb-link",children:"Home"})}),r.jsx("li",{className:"breadcrumb-separator",children:"/"}),r.jsx("li",{children:r.jsx("a",{href:"/products",className:"breadcrumb-link",children:"Products"})}),r.jsx("li",{className:"breadcrumb-separator",children:"/"}),r.jsx("li",{className:"breadcrumb-current",children:i.title})]})})]})}const p0={sm:"12px",md:"16px",lg:"20px"};function m0(i){switch(i){case"subtle":return{backgroundColor:"var(--muted)",border:"1px solid var(--border)",boxShadow:"none"};case"outline":return{backgroundColor:"transparent",border:"1px solid var(--border)",boxShadow:"none"};case"elevated":default:return{backgroundColor:"var(--card)",border:"1px solid var(--border)",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F"}}}function $e({children:i,mediaSlot:s,footerSlot:l,variant:c="elevated",padding:f="md",width:p="100%",height:m}){const x=m0(c),b=p0[f];return r.jsxs("div",{style:{...x,borderRadius:"16px",width:p,height:m,overflow:"hidden",display:"flex",flexDirection:"column"},children:[s,i?r.jsx("div",{style:{padding:b},children:i}):null,l?r.jsx("div",{style:{padding:b,paddingTop:"0"},children:l}):null]})}function h0({children:i}){return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",position:"relative"},children:i})}function g0({children:i}){return r.jsx("label",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function x0({children:i}){return r.jsx("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:i})}function y0({placeholder:i,value:s,onChange:l,disabled:c,inputMode:f,maxLength:p,autoComplete:m,name:x}){return r.jsx("input",{type:"text",placeholder:i||"Enter text...",value:s,onChange:l?b=>{l(b.target.value)}:void 0,disabled:c,inputMode:f,maxLength:p,autoComplete:m,name:x,style:{width:"100%",border:"none",outline:"none",background:"transparent",fontSize:"14px",lineHeight:"20px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",padding:0}})}function v0({children:i,error:s}){return r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:s?"var(--destructive)":"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function w0({label:i,placeholder:s,helperText:l,error:c,disabled:f,size:p="md",value:m,onValueChange:x,inputMode:b,maxLength:j,autoComplete:S,name:h}){const v=p==="sm"?"36px":"44px",I=p==="sm"?"12px":"14px",_=p==="sm"?"10px":"12px";let R="var(--border)";return c&&(R="var(--destructive)"),r.jsxs(h0,{children:[i&&r.jsx(g0,{children:i}),r.jsx(x0,{children:r.jsx("div",{style:{width:"100%",height:v,display:"flex",alignItems:"center",paddingLeft:I,paddingRight:I,backgroundColor:"var(--card)",border:`1px solid ${R}`,borderRadius:_,opacity:f?.4:1,transition:"border-color 150ms ease"},children:r.jsx(y0,{placeholder:s,value:m,onChange:x,disabled:f,inputMode:b,maxLength:j,autoComplete:S,name:h})})}),l&&r.jsx("div",{style:{opacity:f?.4:1},children:r.jsx(v0,{error:c,children:l})})]})}const k0="http://localhost:3001",is="/eta/check";function S0(){return is.startsWith("http://")||is.startsWith("https://")?is:`${k0.replace(/\/+$/,"")}/${is.replace(/^\/+/,"")}`}async function j0(i){const l=await(await fetch(S0(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deliveryPincode:i})})).json();if(!l||typeof l!="object"||typeof l.message!="string")throw new Error("ETA service returned an unexpected response.");return l}function _d(i){const[s,l,c]=i.split("-");return!s||!l||!c?i:`${c}-${l}-${s}`}function wf(){const[i,s]=N.useState(""),[l,c]=N.useState(null),[f,p]=N.useState(null),[m,x]=N.useState(!1),[b,j]=N.useState(!1);N.useEffect(()=>{if(typeof window>"u")return;const R=window.localStorage.getItem("deliveryPincode");R&&s(R)},[]),N.useEffect(()=>{if(!(typeof window>"u")){if(i.length>0){window.localStorage.setItem("deliveryPincode",i);return}window.localStorage.removeItem("deliveryPincode")}},[i]);const S=b&&i.length>0&&i.length!==6,h=f?"error":l!=null&&l.serviceable?"success":l?"warning":null,v=R=>{s(R.replace(/\D/g,"").slice(0,6)),j(!0),p(null),c(null)},I=async()=>{const R=i.trim();if(j(!0),p(null),c(null),!!/^\d{6}$/.test(R)){x(!0);try{const z=await j0(R);c(z)}catch(z){p(z instanceof Error?z.message:"We could not check delivery right now. Please try again.")}finally{x(!1)}}},_=S?"Enter a valid 6-digit pincode.":"Enter your 6-digit pincode to check delivery availability.";return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(w0,{label:"Delivery pincode",placeholder:"110001",helperText:_,error:S,value:i,onValueChange:v,inputMode:"numeric",maxLength:6,autoComplete:"postal-code",name:"deliveryPincode"}),r.jsx("div",{children:r.jsx(Ve,{variant:"secondary",size:"sm",label:m?"Checking...":"Check delivery",onClick:I,disabled:m})}),l||f?r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",padding:"12px 14px",borderRadius:"12px",border:h==="success"?"1px solid rgba(34, 197, 94, 0.28)":h==="warning"?"1px solid rgba(245, 158, 11, 0.24)":"1px solid rgba(239, 68, 68, 0.24)",background:h==="success"?"rgba(34, 197, 94, 0.08)":h==="warning"?"rgba(245, 158, 11, 0.08)":"rgba(239, 68, 68, 0.08)"},children:[r.jsx("div",{style:{fontSize:"13px",lineHeight:"18px",fontWeight:600,color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:f||(l==null?void 0:l.message)}),l!=null&&l.serviceable&&l.eta?r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:[r.jsxs("span",{children:["Dispatch in ",l.eta.dispatchBusinessDays," business day",l.eta.dispatchBusinessDays===1?"":"s","."]}),r.jsxs("span",{children:["Transit ",l.eta.transitMinBusinessDays,"-",l.eta.transitMaxBusinessDays," business days from"," ",l.originZone," to ",l.destinationZone,"."]}),r.jsxs("span",{children:["ETA window: ",_d(l.eta.estimatedMinDate)," to"," ",_d(l.eta.estimatedMaxDate)]})]}):null,l!=null&&l.reasonCode?r.jsxs("div",{style:{fontSize:"11px",lineHeight:"16px",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:["Code: ",l.reasonCode]}):null]}):null]})}function b0(){return r.jsxs("div",{className:"product-main",children:[r.jsx(C0,{}),r.jsx(E0,{})]})}function C0(){const{productMain:i}=Qt(),[s,l]=N.useState(0),c=i.gallery.images,f=c[s],p=()=>{c.length!==0&&l(x=>x===0?c.length-1:x-1)},m=()=>{c.length!==0&&l(x=>(x+1)%c.length)};return r.jsxs("div",{className:"product-main__gallery",children:[r.jsx($e,{variant:"elevated",height:"560px",mediaSlot:r.jsxs("div",{className:"product-main__gallery-frame",children:[f?r.jsx("img",{className:"product-main__gallery-image",src:f.url,alt:f.altText}):r.jsx("div",{className:"product-main__gallery-placeholder"}),r.jsx("div",{className:"product-main__gallery-badge",children:r.jsx(tt,{label:i.gallery.zoomLabel,variant:"neutral",size:"sm"})}),r.jsxs("div",{className:"product-main__gallery-actions",children:[r.jsx(Ve,{variant:"ghost",size:"sm",label:i.gallery.prevLabel,onClick:p}),r.jsx(Ve,{variant:"ghost",size:"sm",label:i.gallery.nextLabel,onClick:m})]})]})}),r.jsx("div",{className:"product-main__thumbnail-row",children:c.length>0?c.map((x,b)=>r.jsx("button",{className:`product-main__thumbnail-button${b===s?" product-main__thumbnail-button--active":""}`,type:"button",onClick:()=>l(b),children:r.jsx("img",{className:"product-main__thumbnail-image",src:x.url,alt:x.altText})},x.id)):[1,2,3,4].map(x=>r.jsx("div",{className:`product-main__thumbnail-placeholder${x===1?" product-main__thumbnail-placeholder--active":""}`},x))})]})}function E0(){const{addItem:i}=vn(),{productMain:s}=Qt(),l=s.buyBox.isInStock;return r.jsx("div",{className:"product-main__buy-box",children:r.jsx($e,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"product-main__buy-box-content",children:[r.jsx("div",{className:"product-main__badge-row",children:r.jsx(tt,{label:s.buyBox.badge,variant:"accent",size:"sm"})}),r.jsx("h2",{className:"product-main__title",children:s.buyBox.name}),r.jsx("div",{className:"product-main__descriptor",children:s.buyBox.descriptor}),r.jsxs("div",{className:"product-main__price-row",children:[r.jsx("h3",{className:"product-main__price",children:s.buyBox.price}),r.jsxs("div",{className:"product-main__stock-column",children:[s.buyBox.compareAtPrice?r.jsx("span",{className:"product-main__compare-price",children:s.buyBox.compareAtPrice}):null,r.jsx("span",{className:`product-main__stock${l?" product-main__stock--in-stock":" product-main__stock--out-of-stock"}`,children:s.buyBox.stock})]})]}),r.jsx(wf,{}),s.buyBox.reassurancePoints.length>0?r.jsx("div",{className:"product-main__reassurance-list",children:s.buyBox.reassurancePoints.map(c=>r.jsxs("div",{className:"product-main__reassurance-item",children:[r.jsx("div",{className:"product-main__reassurance-icon",children:r.jsx(nf,{className:"product-main__reassurance-check",size:12,strokeWidth:3})}),r.jsx("div",{className:"product-main__reassurance-text",children:c})]},c))}):null,r.jsxs("div",{className:"product-main__actions",children:[r.jsx(Ve,{variant:"primary",size:"lg",label:s.buyBox.primaryCta,disabled:!l||!s.buyBox.variantId,onClick:()=>{s.buyBox.variantId&&i(s.buyBox.variantId)}}),r.jsx(Ve,{variant:"secondary",size:"lg",label:s.buyBox.secondaryCta})]}),r.jsx("div",{className:"product-main__micro-line",children:s.buyBox.microLine})]})})})}function T0(){const{deliveryAndReturns:i}=Qt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"delivery-returns-container",children:[r.jsx("h3",{className:"delivery-returns-title",children:"Delivery & Returns"}),r.jsx("div",{className:"delivery-returns-cards",children:i.map(s=>r.jsx($e,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"delivery-card-content",children:[r.jsxs("div",{className:"delivery-card-header",children:[r.jsx(tt,{label:s.badge,variant:"neutral",size:"sm"}),r.jsx("h4",{className:"delivery-card-title",children:s.title})]}),r.jsx("div",{className:"delivery-card-description",children:s.description}),s.footer?r.jsx("div",{className:"delivery-card-footer",children:s.footer}):null]})},s.id))})]})]})}function I0(){const{featureDeepDive:i}=Qt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"feature-deep-dive-container",children:[r.jsx("div",{className:"feature-deep-dive-title-wrapper",children:r.jsx("h3",{className:"feature-deep-dive-title",children:"Product Deep Dive"})}),r.jsxs("div",{className:"feature-deep-dive-grid",children:[r.jsxs("div",{className:"feature-deep-dive-main",children:[r.jsx($e,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",children:[r.jsxs("div",{className:"feature-card-header",children:[r.jsx(rf,{size:20,style:{color:"var(--primary)"}}),r.jsx("h4",{className:"feature-card-title",children:i.overviewTitle})]}),r.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:i.overviewHtml}})]})}),r.jsx($e,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",children:[r.jsx("h4",{className:"feature-card-title",children:i.buyingGuideTitle}),r.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:i.buyingGuideHtml}})]})}),i.storyHtml?r.jsx($e,{variant:"subtle",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",style:{gap:"12px"},children:[r.jsx("div",{className:"feature-story-badge",children:r.jsx("h4",{className:"feature-story-title",children:i.storyTitle})}),r.jsx("div",{className:"feature-story-html",dangerouslySetInnerHTML:{__html:i.storyHtml}})]})}):null]}),r.jsxs("div",{className:"feature-deep-dive-sidebar",children:[r.jsx($e,{variant:"elevated",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(tg,{size:18,style:{color:"var(--success-foreground)"}}),r.jsx(tt,{label:"Perfect for",variant:"accent",size:"sm"})]}),r.jsx("div",{className:"feature-perfect-for",children:i.curatedFor})]})}),i.notFor?r.jsx($e,{variant:"subtle",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(tt,{label:"Not ideal for",variant:"neutral",size:"sm"}),r.jsx("div",{className:"feature-not-for",children:i.notFor})]})}):null,r.jsx($e,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Uo,{size:16,style:{color:"var(--primary)"}}),r.jsx("div",{className:"quick-info-title",children:"Quick Info"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingTop:"4px"},children:[r.jsxs("div",{children:[r.jsx("div",{className:"quick-info-label",children:"Protection Level"}),r.jsx("div",{className:"quick-info-value",children:"10mm Padding"})]}),r.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[r.jsx("div",{className:"quick-info-label",children:"Water Resistant"}),r.jsx("div",{className:"quick-info-value",children:"Light rain protection"})]}),r.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[r.jsx("div",{className:"quick-info-label",children:"Compatibility"}),r.jsx("div",{className:"quick-info-value",children:"Most acoustic & electric"})]})]})]})})]})]})]})]})}function _0(){const{keyBenefits:i}=Qt();if(i.cards.length===0)return null;const s=[Fg,Uo,Lg];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs(Ne,{direction:"vertical",gap:24,children:[r.jsx("div",{className:"key-benefits-title-container",children:r.jsx("h3",{className:"key-benefits-title",children:i.title})}),r.jsx("div",{className:"key-benefits-grid",children:i.cards.map((l,c)=>{const f=s[c%s.length];return r.jsx($e,{variant:"elevated",padding:"lg",children:r.jsxs(Ne,{direction:"vertical",gap:16,style:{alignItems:"flex-start"},children:[r.jsx("div",{className:"key-benefit-icon",children:r.jsx(f,{size:24})}),r.jsx("div",{className:"key-benefit-badge",children:l.badge}),r.jsx("h4",{className:"key-benefit-title",children:l.title}),l.description?r.jsx("div",{className:"key-benefit-description",children:l.description}):null,l.footer?r.jsx("div",{className:"key-benefit-footer",children:l.footer}):null]})},l.id)})})]})]})}const F0=/^(.*?)\s*,?\s*\((#[0-9a-f]{3,8})\)$/i,N0=i=>{const s=i.split("|").map(l=>l.trim()).filter(Boolean).map(l=>{const c=l.match(F0);return c?{label:c[1].trim().replace(/,\s*$/,""),hex:c[2]}:null});return s.every(Boolean)?s:[]};function Fd({value:i}){const s=N0(i);return s.length===0?r.jsx(r.Fragment,{children:i}):r.jsx("div",{className:"specs-swatch-list",children:s.map(l=>r.jsxs("div",{className:"specs-swatch-item",children:[r.jsx("span",{className:"specs-swatch-box",style:{backgroundColor:l.hex},"aria-hidden":"true"}),r.jsx("span",{children:l.label})]},`${l.label}-${l.hex}`))})}function R0(){const{specsAndInBox:i}=Qt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"specs-container",children:[r.jsx("h3",{className:"specs-title",children:"Specifications & What's Included"}),r.jsx($e,{variant:"elevated",padding:"md",children:r.jsxs("div",{className:"specs-card-content",children:[r.jsx("h4",{className:"specs-card-title",children:i.specificationsTitle}),r.jsx("div",{className:"specs-list",children:i.specifications.map(s=>r.jsxs("div",{className:"specs-row",children:[r.jsx("div",{className:"specs-label",children:s.label}),r.jsx("div",{className:"specs-value",children:r.jsx(Fd,{value:s.value})})]},s.label))})]})}),r.jsx($e,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[r.jsxs("div",{className:"inbox-header",children:[r.jsx("h4",{className:"specs-card-title",children:i.inBoxTitle}),r.jsx(tt,{label:i.inBoxBadge,variant:"neutral",size:"sm"})]}),r.jsx("div",{className:"inbox-list",children:i.inBoxItems.map(s=>r.jsxs("div",{className:"inbox-item",children:["• ",s]},s))})]})}),r.jsx($e,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[r.jsx("h4",{className:"specs-card-title",children:i.productDetailsTitle}),r.jsx("div",{className:"details-list",children:i.productDetails.map(s=>r.jsxs("div",{children:[r.jsx("div",{className:"details-item-label",children:s.label}),r.jsx("div",{className:"details-item-value",children:r.jsx(Fd,{value:s.value})})]},s.label))})]})})]})]})}function z0(){const{faq:i}=Qt();return i.items.length===0?null:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:i.title}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px"},children:i.items.map(s=>r.jsx($e,{variant:"elevated",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--foreground)"},children:s.question}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"22px",fontWeight:"400",color:"var(--muted-foreground)"},children:s.answer})]})},s.question))})]})}function A0(){const{addItem:i}=vn(),{relatedProducts:s}=Qt();return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:s.title}),r.jsx(Ve,{variant:"secondary",size:"sm",label:s.viewAllLabel})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:s.items.map(l=>r.jsx($e,{variant:"elevated",mediaSlot:r.jsxs("div",{style:{position:"relative",width:"100%",height:"220px"},children:[l.imageUrl?r.jsx("img",{src:l.imageUrl,alt:l.imageAlt||l.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--muted)"}}),r.jsx("div",{style:{position:"absolute",top:"12px",left:"12px"},children:r.jsx(tt,{label:l.badge,variant:"neutral",size:"sm"})})]}),footerSlot:r.jsx(Ve,{variant:"primary",size:"md",label:s.addToCartLabel,disabled:!l.variantId,onClick:()=>{l.variantId&&i(l.variantId)}}),children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.name}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.descriptor}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.featureLine}),r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.price})]})},l.id))})]})}function P0(){const{hasProduct:i,isLoading:s}=Qt();return s?r.jsx(Sy,{}):i?r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("section",{style:{paddingTop:"24px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:r.jsx(ke,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsx(f0,{}),r.jsx(d0,{}),r.jsx(b0,{})]})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(ke,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"},children:[r.jsx(T0,{}),r.jsx(R0,{})]})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:r.jsx(ke,{children:r.jsx(_0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(ke,{children:r.jsx(I0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(ke,{children:r.jsx(z0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"48px",backgroundColor:"var(--card)"},children:r.jsx(ke,{children:r.jsx(A0,{})})})]}):r.jsx("section",{style:{paddingTop:"64px",paddingBottom:"80px",backgroundColor:"var(--card)"},children:r.jsx(ke,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[r.jsx("h1",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"32px",lineHeight:"38px",color:"var(--foreground)"},children:"Product unavailable"}),r.jsx("p",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",color:"var(--muted-foreground)"},children:"This product could not be loaded for the requested handle."})]})})})}function D0({query:i,onQueryChange:s,onSearch:l,isSearching:c=!1}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("form",{className:"product-search-form",onSubmit:f=>{f.preventDefault(),l()},children:[r.jsxs("div",{className:"product-search-input-wrapper",children:[r.jsx("div",{className:"product-search-icon",children:r.jsx(Ig,{size:20,color:"var(--muted-foreground)",strokeWidth:2})}),r.jsx("input",{type:"text",placeholder:"Search curated gear…",value:i,onChange:f=>s(f.target.value),className:"product-search-input","aria-label":"Search products",onFocus:f=>{f.target.style.borderColor="var(--ring)",f.target.style.boxShadow="0 0 0 4px rgba(105, 65, 198, 0.12), 0 1px 2px 0 rgba(16, 24, 40, 0.05)"},onBlur:f=>{f.target.style.borderColor="var(--border)",f.target.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.05)"}})]}),r.jsx("div",{className:"product-search-button-wrapper",children:r.jsx(Ve,{variant:"primary",size:"md",label:c?"Searching...":"Search",disabled:c,fullWidth:!0})})]})]})}const al=15;function L0({filters:i,activeFilter:s,onFilterChange:l,resetLabel:c}){var S,h;const[f,p]=N.useState(!1),m=(S=i.find(v=>v.id===s))==null?void 0:S.label,x=i.length>al,b=f?i:i.slice(0,al),j=i.length-al;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs(ff,{wrap:"on",gap:10,align:"center",className:"product-filters-wrapper",children:[r.jsx("span",{className:"filter-label",children:"Filter:"}),b.map(v=>r.jsx("button",{onClick:()=>l(v.id),className:"filter-chip",style:{backgroundColor:s===v.id?"var(--accent)":"var(--muted)",border:s===v.id?"1px solid var(--ring)":"1px solid var(--border)",color:s===v.id?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:I=>{s!==v.id&&(I.currentTarget.style.backgroundColor="var(--muted)",I.currentTarget.style.borderColor="var(--border)")},onMouseLeave:I=>{s!==v.id&&(I.currentTarget.style.backgroundColor="var(--muted)",I.currentTarget.style.borderColor="var(--border)")},children:v.label},v.id)),x&&r.jsx("button",{onClick:()=>p(!f),className:"filter-chip",style:{backgroundColor:"transparent",border:"1px solid var(--border)",color:"var(--muted-foreground)"},onMouseEnter:v=>{v.currentTarget.style.backgroundColor="var(--muted)",v.currentTarget.style.color="var(--foreground)"},onMouseLeave:v=>{v.currentTarget.style.backgroundColor="transparent",v.currentTarget.style.color="var(--muted-foreground)"},children:f?"Show less":`+${j} more`}),r.jsx("div",{className:"filter-spacer"}),m&&s!==((h=i[0])==null?void 0:h.id)&&r.jsxs("button",{onClick:()=>{var v;return l(((v=i[0])==null?void 0:v.id)??"all")},className:"filter-reset-button",onMouseEnter:v=>{v.currentTarget.style.color="var(--foreground)"},onMouseLeave:v=>{v.currentTarget.style.color="var(--muted-foreground)"},children:[r.jsx(Cl,{size:14,strokeWidth:2.5}),c??"Reset filters"]})]})]})}var O0=Od();const M0=Ld(O0);function B0(i){if(typeof document>"u")return;let s=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",s.appendChild(l),l.styleSheet?l.styleSheet.cssText=i:l.appendChild(document.createTextNode(i))}const U0=i=>{switch(i){case"success":return W0;case"info":return q0;case"warning":return V0;case"error":return Y0;default:return null}},$0=Array(12).fill(0),H0=({visible:i,className:s})=>M.createElement("div",{className:["sonner-loading-wrapper",s].filter(Boolean).join(" "),"data-visible":i},M.createElement("div",{className:"sonner-spinner"},$0.map((l,c)=>M.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${c}`})))),W0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),V0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),q0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Y0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Q0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},M.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),M.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),K0=()=>{const[i,s]=M.useState(document.hidden);return M.useEffect(()=>{const l=()=>{s(document.hidden)};return document.addEventListener("visibilitychange",l),()=>window.removeEventListener("visibilitychange",l)},[]),i};let hl=1;class X0{constructor(){this.subscribe=s=>(this.subscribers.push(s),()=>{const l=this.subscribers.indexOf(s);this.subscribers.splice(l,1)}),this.publish=s=>{this.subscribers.forEach(l=>l(s))},this.addToast=s=>{this.publish(s),this.toasts=[...this.toasts,s]},this.create=s=>{var l;const{message:c,...f}=s,p=typeof(s==null?void 0:s.id)=="number"||((l=s.id)==null?void 0:l.length)>0?s.id:hl++,m=this.toasts.find(b=>b.id===p),x=s.dismissible===void 0?!0:s.dismissible;return this.dismissedToasts.has(p)&&this.dismissedToasts.delete(p),m?this.toasts=this.toasts.map(b=>b.id===p?(this.publish({...b,...s,id:p,title:c}),{...b,...s,id:p,dismissible:x,title:c}):b):this.addToast({title:c,...f,dismissible:x,id:p}),p},this.dismiss=s=>(s?(this.dismissedToasts.add(s),requestAnimationFrame(()=>this.subscribers.forEach(l=>l({id:s,dismiss:!0})))):this.toasts.forEach(l=>{this.subscribers.forEach(c=>c({id:l.id,dismiss:!0}))}),s),this.message=(s,l)=>this.create({...l,message:s}),this.error=(s,l)=>this.create({...l,message:s,type:"error"}),this.success=(s,l)=>this.create({...l,type:"success",message:s}),this.info=(s,l)=>this.create({...l,type:"info",message:s}),this.warning=(s,l)=>this.create({...l,type:"warning",message:s}),this.loading=(s,l)=>this.create({...l,type:"loading",message:s}),this.promise=(s,l)=>{if(!l)return;let c;l.loading!==void 0&&(c=this.create({...l,promise:s,type:"loading",message:l.loading,description:typeof l.description!="function"?l.description:void 0}));const f=Promise.resolve(s instanceof Function?s():s);let p=c!==void 0,m;const x=f.then(async j=>{if(m=["resolve",j],M.isValidElement(j))p=!1,this.create({id:c,type:"default",message:j});else if(Z0(j)&&!j.ok){p=!1;const h=typeof l.error=="function"?await l.error(`HTTP error! status: ${j.status}`):l.error,v=typeof l.description=="function"?await l.description(`HTTP error! status: ${j.status}`):l.description,_=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:c,type:"error",description:v,..._})}else if(j instanceof Error){p=!1;const h=typeof l.error=="function"?await l.error(j):l.error,v=typeof l.description=="function"?await l.description(j):l.description,_=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:c,type:"error",description:v,..._})}else if(l.success!==void 0){p=!1;const h=typeof l.success=="function"?await l.success(j):l.success,v=typeof l.description=="function"?await l.description(j):l.description,_=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:c,type:"success",description:v,..._})}}).catch(async j=>{if(m=["reject",j],l.error!==void 0){p=!1;const S=typeof l.error=="function"?await l.error(j):l.error,h=typeof l.description=="function"?await l.description(j):l.description,I=typeof S=="object"&&!M.isValidElement(S)?S:{message:S};this.create({id:c,type:"error",description:h,...I})}}).finally(()=>{p&&(this.dismiss(c),c=void 0),l.finally==null||l.finally.call(l)}),b=()=>new Promise((j,S)=>x.then(()=>m[0]==="reject"?S(m[1]):j(m[1])).catch(S));return typeof c!="string"&&typeof c!="number"?{unwrap:b}:Object.assign(c,{unwrap:b})},this.custom=(s,l)=>{const c=(l==null?void 0:l.id)||hl++;return this.create({jsx:s(c),id:c,...l}),c},this.getActiveToasts=()=>this.toasts.filter(s=>!this.dismissedToasts.has(s.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const kt=new X0,G0=(i,s)=>{const l=(s==null?void 0:s.id)||hl++;return kt.addToast({title:i,...s,id:l}),l},Z0=i=>i&&typeof i=="object"&&"ok"in i&&typeof i.ok=="boolean"&&"status"in i&&typeof i.status=="number",J0=G0,ev=()=>kt.toasts,tv=()=>kt.getActiveToasts(),Nd=Object.assign(J0,{success:kt.success,info:kt.info,warning:kt.warning,error:kt.error,custom:kt.custom,message:kt.message,promise:kt.promise,dismiss:kt.dismiss,loading:kt.loading},{getHistory:ev,getToasts:tv});B0("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function ss(i){return i.label!==void 0}const nv=3,rv="24px",ov="16px",Rd=4e3,iv=356,sv=14,av=45,lv=200;function tn(...i){return i.filter(Boolean).join(" ")}function uv(i){const[s,l]=i.split("-"),c=[];return s&&c.push(s),l&&c.push(l),c}const cv=i=>{var s,l,c,f,p,m,x,b,j;const{invert:S,toast:h,unstyled:v,interacting:I,setHeights:_,visibleToasts:R,heights:z,index:le,toasts:de,expanded:ve,removeToast:Z,defaultRichColors:oe,closeButton:ie,style:we,cancelButtonStyle:Ee,actionButtonStyle:K,className:G="",descriptionClassName:U="",duration:ue,position:he,gap:Ye,expandByDefault:be,classNames:ne,icons:pe,closeButtonAriaLabel:O="Close toast"}=i,[V,B]=M.useState(null),[w,F]=M.useState(null),[H,J]=M.useState(!1),[se,X]=M.useState(!1),[me,ce]=M.useState(!1),[ge,De]=M.useState(!1),[rn,wn]=M.useState(!1),[St,Kt]=M.useState(0),[Wo,$r]=M.useState(0),on=M.useRef(h.duration||ue||Rd),Hr=M.useRef(null),jt=M.useRef(null),Qn=le===0,kn=le+1<=R,nt=h.type,sn=h.dismissible!==!1,Vo=h.className||"",qo=h.descriptionClassName||"",Kn=M.useMemo(()=>z.findIndex(ae=>ae.toastId===h.id)||0,[z,h.id]),Wr=M.useMemo(()=>{var ae;return(ae=h.closeButton)!=null?ae:ie},[h.closeButton,ie]),Xn=M.useMemo(()=>h.duration||ue||Rd,[h.duration,ue]),pr=M.useRef(0),_t=M.useRef(0),Sn=M.useRef(0),jn=M.useRef(null),[Yo,Qo]=he.split("-"),Ko=M.useMemo(()=>z.reduce((ae,Me,Qe)=>Qe>=Kn?ae:ae+Me.height,0),[z,Kn]),mr=K0(),Vr=h.invert||S,Gn=nt==="loading";_t.current=M.useMemo(()=>Kn*Ye+Ko,[Kn,Ko]),M.useEffect(()=>{on.current=Xn},[Xn]),M.useEffect(()=>{J(!0)},[]),M.useEffect(()=>{const ae=jt.current;if(ae){const Me=ae.getBoundingClientRect().height;return $r(Me),_(Qe=>[{toastId:h.id,height:Me,position:h.position},...Qe]),()=>_(Qe=>Qe.filter(st=>st.toastId!==h.id))}},[_,h.id]),M.useLayoutEffect(()=>{if(!H)return;const ae=jt.current,Me=ae.style.height;ae.style.height="auto";const Qe=ae.getBoundingClientRect().height;ae.style.height=Me,$r(Qe),_(st=>st.find(He=>He.toastId===h.id)?st.map(He=>He.toastId===h.id?{...He,height:Qe}:He):[{toastId:h.id,height:Qe,position:h.position},...st])},[H,h.title,h.description,_,h.id]);const Ft=M.useCallback(()=>{X(!0),Kt(_t.current),_(ae=>ae.filter(Me=>Me.toastId!==h.id)),setTimeout(()=>{Z(h)},lv)},[h,Z,_,_t]);M.useEffect(()=>{if(h.promise&&nt==="loading"||h.duration===1/0||h.type==="loading")return;let ae;return ve||I||mr?(()=>{if(Sn.current<pr.current){const st=new Date().getTime()-pr.current;on.current=on.current-st}Sn.current=new Date().getTime()})():(()=>{on.current!==1/0&&(pr.current=new Date().getTime(),ae=setTimeout(()=>{h.onAutoClose==null||h.onAutoClose.call(h,h),Ft()},on.current))})(),()=>clearTimeout(ae)},[ve,I,h,nt,mr,Ft]),M.useEffect(()=>{h.delete&&Ft()},[Ft,h.delete]);function qr(){var ae;if(pe!=null&&pe.loading){var Me;return M.createElement("div",{className:tn(ne==null?void 0:ne.loader,h==null||(Me=h.classNames)==null?void 0:Me.loader,"sonner-loader"),"data-visible":nt==="loading"},pe.loading)}return M.createElement(H0,{className:tn(ne==null?void 0:ne.loader,h==null||(ae=h.classNames)==null?void 0:ae.loader),visible:nt==="loading"})}const bn=h.icon||(pe==null?void 0:pe[nt])||U0(nt);var an,Yr;return M.createElement("li",{tabIndex:0,ref:jt,className:tn(G,Vo,ne==null?void 0:ne.toast,h==null||(s=h.classNames)==null?void 0:s.toast,ne==null?void 0:ne.default,ne==null?void 0:ne[nt],h==null||(l=h.classNames)==null?void 0:l[nt]),"data-sonner-toast":"","data-rich-colors":(an=h.richColors)!=null?an:oe,"data-styled":!(h.jsx||h.unstyled||v),"data-mounted":H,"data-promise":!!h.promise,"data-swiped":rn,"data-removed":se,"data-visible":kn,"data-y-position":Yo,"data-x-position":Qo,"data-index":le,"data-front":Qn,"data-swiping":me,"data-dismissible":sn,"data-type":nt,"data-invert":Vr,"data-swipe-out":ge,"data-swipe-direction":w,"data-expanded":!!(ve||be&&H),style:{"--index":le,"--toasts-before":le,"--z-index":de.length-le,"--offset":`${se?St:_t.current}px`,"--initial-height":be?"auto":`${Wo}px`,...we,...h.style},onDragEnd:()=>{ce(!1),B(null),jn.current=null},onPointerDown:ae=>{Gn||!sn||(Hr.current=new Date,Kt(_t.current),ae.target.setPointerCapture(ae.pointerId),ae.target.tagName!=="BUTTON"&&(ce(!0),jn.current={x:ae.clientX,y:ae.clientY}))},onPointerUp:()=>{var ae,Me,Qe;if(ge||!sn)return;jn.current=null;const st=Number(((ae=jt.current)==null?void 0:ae.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Cn=Number(((Me=jt.current)==null?void 0:Me.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),He=new Date().getTime()-((Qe=Hr.current)==null?void 0:Qe.getTime()),Ge=V==="x"?st:Cn,En=Math.abs(Ge)/He;if(Math.abs(Ge)>=av||En>.11){Kt(_t.current),h.onDismiss==null||h.onDismiss.call(h,h),F(V==="x"?st>0?"right":"left":Cn>0?"down":"up"),Ft(),De(!0);return}else{var rt,bt;(rt=jt.current)==null||rt.style.setProperty("--swipe-amount-x","0px"),(bt=jt.current)==null||bt.style.setProperty("--swipe-amount-y","0px")}wn(!1),ce(!1),B(null)},onPointerMove:ae=>{var Me,Qe,st;if(!jn.current||!sn||((Me=window.getSelection())==null?void 0:Me.toString().length)>0)return;const He=ae.clientY-jn.current.y,Ge=ae.clientX-jn.current.x;var En;const rt=(En=i.swipeDirections)!=null?En:uv(he);!V&&(Math.abs(Ge)>1||Math.abs(He)>1)&&B(Math.abs(Ge)>Math.abs(He)?"x":"y");let bt={x:0,y:0};const Tn=Nt=>1/(1.5+Math.abs(Nt)/20);if(V==="y"){if(rt.includes("top")||rt.includes("bottom"))if(rt.includes("top")&&He<0||rt.includes("bottom")&&He>0)bt.y=He;else{const Nt=He*Tn(He);bt.y=Math.abs(Nt)<Math.abs(He)?Nt:He}}else if(V==="x"&&(rt.includes("left")||rt.includes("right")))if(rt.includes("left")&&Ge<0||rt.includes("right")&&Ge>0)bt.x=Ge;else{const Nt=Ge*Tn(Ge);bt.x=Math.abs(Nt)<Math.abs(Ge)?Nt:Ge}(Math.abs(bt.x)>0||Math.abs(bt.y)>0)&&wn(!0),(Qe=jt.current)==null||Qe.style.setProperty("--swipe-amount-x",`${bt.x}px`),(st=jt.current)==null||st.style.setProperty("--swipe-amount-y",`${bt.y}px`)}},Wr&&!h.jsx&&nt!=="loading"?M.createElement("button",{"aria-label":O,"data-disabled":Gn,"data-close-button":!0,onClick:Gn||!sn?()=>{}:()=>{Ft(),h.onDismiss==null||h.onDismiss.call(h,h)},className:tn(ne==null?void 0:ne.closeButton,h==null||(c=h.classNames)==null?void 0:c.closeButton)},(Yr=pe==null?void 0:pe.close)!=null?Yr:Q0):null,(nt||h.icon||h.promise)&&h.icon!==null&&((pe==null?void 0:pe[nt])!==null||h.icon)?M.createElement("div",{"data-icon":"",className:tn(ne==null?void 0:ne.icon,h==null||(f=h.classNames)==null?void 0:f.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||qr():null,h.type!=="loading"?bn:null):null,M.createElement("div",{"data-content":"",className:tn(ne==null?void 0:ne.content,h==null||(p=h.classNames)==null?void 0:p.content)},M.createElement("div",{"data-title":"",className:tn(ne==null?void 0:ne.title,h==null||(m=h.classNames)==null?void 0:m.title)},h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title),h.description?M.createElement("div",{"data-description":"",className:tn(U,qo,ne==null?void 0:ne.description,h==null||(x=h.classNames)==null?void 0:x.description)},typeof h.description=="function"?h.description():h.description):null),M.isValidElement(h.cancel)?h.cancel:h.cancel&&ss(h.cancel)?M.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||Ee,onClick:ae=>{ss(h.cancel)&&sn&&(h.cancel.onClick==null||h.cancel.onClick.call(h.cancel,ae),Ft())},className:tn(ne==null?void 0:ne.cancelButton,h==null||(b=h.classNames)==null?void 0:b.cancelButton)},h.cancel.label):null,M.isValidElement(h.action)?h.action:h.action&&ss(h.action)?M.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||K,onClick:ae=>{ss(h.action)&&(h.action.onClick==null||h.action.onClick.call(h.action,ae),!ae.defaultPrevented&&Ft())},className:tn(ne==null?void 0:ne.actionButton,h==null||(j=h.classNames)==null?void 0:j.actionButton)},h.action.label):null)};function zd(){if(typeof window>"u"||typeof document>"u")return"ltr";const i=document.documentElement.getAttribute("dir");return i==="auto"||!i?window.getComputedStyle(document.documentElement).direction:i}function dv(i,s){const l={};return[i,s].forEach((c,f)=>{const p=f===1,m=p?"--mobile-offset":"--offset",x=p?ov:rv;function b(j){["top","right","bottom","left"].forEach(S=>{l[`${m}-${S}`]=typeof j=="number"?`${j}px`:j})}typeof c=="number"||typeof c=="string"?b(c):typeof c=="object"?["top","right","bottom","left"].forEach(j=>{c[j]===void 0?l[`${m}-${j}`]=x:l[`${m}-${j}`]=typeof c[j]=="number"?`${c[j]}px`:c[j]}):b(x)}),l}const fv=M.forwardRef(function(s,l){const{invert:c,position:f="bottom-right",hotkey:p=["altKey","KeyT"],expand:m,closeButton:x,className:b,offset:j,mobileOffset:S,theme:h="light",richColors:v,duration:I,style:_,visibleToasts:R=nv,toastOptions:z,dir:le=zd(),gap:de=sv,icons:ve,containerAriaLabel:Z="Notifications"}=s,[oe,ie]=M.useState([]),we=M.useMemo(()=>Array.from(new Set([f].concat(oe.filter(w=>w.position).map(w=>w.position)))),[oe,f]),[Ee,K]=M.useState([]),[G,U]=M.useState(!1),[ue,he]=M.useState(!1),[Ye,be]=M.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),ne=M.useRef(null),pe=p.join("+").replace(/Key/g,"").replace(/Digit/g,""),O=M.useRef(null),V=M.useRef(!1),B=M.useCallback(w=>{ie(F=>{var H;return(H=F.find(J=>J.id===w.id))!=null&&H.delete||kt.dismiss(w.id),F.filter(({id:J})=>J!==w.id)})},[]);return M.useEffect(()=>kt.subscribe(w=>{if(w.dismiss){requestAnimationFrame(()=>{ie(F=>F.map(H=>H.id===w.id?{...H,delete:!0}:H))});return}setTimeout(()=>{M0.flushSync(()=>{ie(F=>{const H=F.findIndex(J=>J.id===w.id);return H!==-1?[...F.slice(0,H),{...F[H],...w},...F.slice(H+1)]:[w,...F]})})})}),[oe]),M.useEffect(()=>{if(h!=="system"){be(h);return}if(h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?be("dark"):be("light")),typeof window>"u")return;const w=window.matchMedia("(prefers-color-scheme: dark)");try{w.addEventListener("change",({matches:F})=>{be(F?"dark":"light")})}catch{w.addListener(({matches:H})=>{try{be(H?"dark":"light")}catch(J){console.error(J)}})}},[h]),M.useEffect(()=>{oe.length<=1&&U(!1)},[oe]),M.useEffect(()=>{const w=F=>{var H;if(p.every(X=>F[X]||F.code===X)){var se;U(!0),(se=ne.current)==null||se.focus()}F.code==="Escape"&&(document.activeElement===ne.current||(H=ne.current)!=null&&H.contains(document.activeElement))&&U(!1)};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[p]),M.useEffect(()=>{if(ne.current)return()=>{O.current&&(O.current.focus({preventScroll:!0}),O.current=null,V.current=!1)}},[ne.current]),M.createElement("section",{ref:l,"aria-label":`${Z} ${pe}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},we.map((w,F)=>{var H;const[J,se]=w.split("-");return oe.length?M.createElement("ol",{key:w,dir:le==="auto"?zd():le,tabIndex:-1,ref:ne,className:b,"data-sonner-toaster":!0,"data-sonner-theme":Ye,"data-y-position":J,"data-lifted":G&&oe.length>1&&!m,"data-x-position":se,style:{"--front-toast-height":`${((H=Ee[0])==null?void 0:H.height)||0}px`,"--width":`${iv}px`,"--gap":`${de}px`,..._,...dv(j,S)},onBlur:X=>{V.current&&!X.currentTarget.contains(X.relatedTarget)&&(V.current=!1,O.current&&(O.current.focus({preventScroll:!0}),O.current=null))},onFocus:X=>{X.target instanceof HTMLElement&&X.target.dataset.dismissible==="false"||V.current||(V.current=!0,O.current=X.relatedTarget)},onMouseEnter:()=>U(!0),onMouseMove:()=>U(!0),onMouseLeave:()=>{ue||U(!1)},onDragEnd:()=>U(!1),onPointerDown:X=>{X.target instanceof HTMLElement&&X.target.dataset.dismissible==="false"||he(!0)},onPointerUp:()=>he(!1)},oe.filter(X=>!X.position&&F===0||X.position===w).map((X,me)=>{var ce,ge;return M.createElement(cv,{key:X.id,icons:ve,index:me,toast:X,defaultRichColors:v,duration:(ce=z==null?void 0:z.duration)!=null?ce:I,className:z==null?void 0:z.className,descriptionClassName:z==null?void 0:z.descriptionClassName,invert:c,visibleToasts:R,closeButton:(ge=z==null?void 0:z.closeButton)!=null?ge:x,interacting:ue,position:w,style:z==null?void 0:z.style,unstyled:z==null?void 0:z.unstyled,classNames:z==null?void 0:z.classNames,cancelButtonStyle:z==null?void 0:z.cancelButtonStyle,actionButtonStyle:z==null?void 0:z.actionButtonStyle,closeButtonAriaLabel:z==null?void 0:z.closeButtonAriaLabel,removeToast:B,toasts:oe.filter(De=>De.position==X.position),heights:Ee.filter(De=>De.position==X.position),setHeights:K,expandByDefault:m,gap:de,expanded:G,swipeDirections:s.swipeDirections})})):null}))});function pv({products:i}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"product-list-container",children:r.jsx("div",{className:"product-grid",children:i.length>0?i.map(s=>r.jsx(mv,{product:s},s.id)):r.jsx("div",{className:"no-products-message",children:"No products matched your search."})})})]})}function mv({product:i,isHoverPreview:s=!1}){const{addItem:l,openCartDrawer:c}=vn(),f=`/products/${i.id}`;return r.jsxs("div",{role:s?void 0:"link",tabIndex:s?void 0:0,onClick:s?void 0:p=>{p.target.closest("button")||(window.location.href=f)},onKeyDown:s?void 0:p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),window.location.href=f)},style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"460px",maxHeight:"520px",boxShadow:s?"0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814":"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden",display:"flex",flexDirection:"column",cursor:s?"default":"pointer"},children:[r.jsxs("div",{style:{position:"relative",height:"220px",backgroundColor:"var(--muted)"},children:[i.imageUrl?r.jsx("img",{src:i.imageUrl,alt:i.imageAlt||i.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null,s?r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#10182808"}}):null,r.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",zIndex:s?1:"auto"},children:r.jsx(tt,{label:i.badgeLabel,variant:i.badgeVariant,size:"sm"})}),r.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:s?1:"auto"},children:r.jsx("button",{style:{height:"32px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"8px",backgroundColor:"transparent",color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:"Save"})})]}),r.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"10px",flex:1},children:[r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)",margin:0},children:i.name}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical",overflow:"hidden"},children:i.descriptor}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.featureLine}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"auto",paddingTop:"8px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.priceLabel}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.shippingLabel})]})]}),r.jsx("div",{style:{padding:"16px",paddingTop:"0"},children:r.jsx(Ve,{variant:"primary",size:"md",label:i.isInStock?"Add to cart":"Out of stock",disabled:!i.isInStock||!i.variantId,onClick:async()=>{if(!i.variantId)return;const p=await l(i.variantId);if(!p.ok){Nd.error("Unable to add item",{description:p.error||"Please try again.",duration:5e3});return}Nd.success("Added to cart",{description:`${i.name} is in your cart.`,duration:1/0,action:{label:"View cart",onClick:()=>{closeCartDrawer(),window.location.href="/cart"}},cancel:{label:"Close",onClick:()=>{}}})},fullWidth:!0})})]})}function hv(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"products-page-header",children:[r.jsxs("div",{className:"products-page-header-content",children:[r.jsx("div",{className:"products-page-eyebrow",children:"Curated gear"}),r.jsx("h1",{className:"products-page-title",children:"Products"})]}),r.jsx("div",{className:"products-page-description",children:"Best-in-class essentials chosen for durability, clarity, and real daily use."})]})]})}function gv({resultCount:i}){const[s,l]=N.useState(!1),[c,f]=N.useState("Recommended"),p=["Recommended","Price: Low to High","Price: High to Low","Newest","Most Popular"];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"product-results-header",children:[r.jsxs("div",{className:"results-count",children:["Showing ",r.jsx("span",{className:"results-count-number",children:i})," ","results"]}),r.jsxs("div",{className:"sort-controls",children:[r.jsx("span",{className:"sort-label",children:"Sort by:"}),r.jsxs("div",{className:"sort-dropdown-wrapper",children:[r.jsxs("button",{onClick:()=>l(!s),className:"sort-button",onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--muted)",m.currentTarget.style.borderColor="var(--border)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="var(--card)",m.currentTarget.style.borderColor="var(--border)"},children:[c,r.jsx(Yh,{size:16,color:"var(--muted-foreground)",style:{transition:"transform 150ms ease",transform:s?"rotate(180deg)":"rotate(0deg)"}})]}),s&&r.jsx("div",{className:"sort-dropdown",children:p.map(m=>r.jsx("button",{onClick:()=>{f(m),l(!1)},className:"sort-option",style:{backgroundColor:c===m?"var(--muted)":"transparent",fontWeight:c===m?"600":"500",color:c===m?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:x=>{c!==m&&(x.currentTarget.style.backgroundColor="var(--muted)")},onMouseLeave:x=>{c!==m&&(x.currentTarget.style.backgroundColor="transparent")},children:m},m))})]})]})]})]})}const xv={id:ls,label:$y},yv=i=>{const s=new Set;return i.flatMap(c=>c.categoryIds.map((f,p)=>({id:f,label:c.categoryLabels[p]??c.categoryIds[p]}))).filter(c=>!c.id||s.has(c.id)?!1:(s.add(c.id),!0))};function vv(i){const s=yv(i);return{filters:[xv,...s],isLoading:!1,resetLabel:"Reset filters"}}const wv=120,kv=(i,s)=>{const l=Number.parseFloat(i);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:s,maximumFractionDigits:0}).format(l):`${s} ${i}`},Sv=i=>{var s;return i.availableForSale===!1?!1:typeof i.totalInventory=="number"?i.totalInventory>0:((s=i.variants)==null?void 0:s.edges.some(l=>{const c=l.node;return c.availableForSale===!1?!1:typeof c.quantityAvailable=="number"?c.quantityAvailable>0:c.availableForSale===!0}))??!0},jv=i=>{var l,c,f,p;const s=(c=(l=i.variants)==null?void 0:l.edges.find(m=>{const x=m.node;return x.availableForSale&&(typeof x.quantityAvailable!="number"||x.quantityAvailable>0)}))==null?void 0:c.node;return(s==null?void 0:s.id)||((p=(f=i.variants)==null?void 0:f.edges[0])==null?void 0:p.node.id)||null},bv=(i,s=wv)=>{const l=i.replace(/\s+/g," ").trim();return l.length<=s?l:`${l.slice(0,s).trimEnd()}...`},Ad=i=>{var j,S,h,v;const s=((j=i.shortDescription)==null?void 0:j.value)||i.description||"Curated by Vibe Station",l=bv(s),c=((S=i.featureLine)==null?void 0:S.value)||i.tags.slice(0,3).join(" · ")||"Durable build",f=((h=i.shippingInfo)==null?void 0:h.value)||"Shipping calculated at checkout",p=((v=i.badge)==null?void 0:v.value)||i.tags[0]||"Curated",m=vl(i),x=Array.from(new Set(i.tags.map(I=>I.trim()).filter(Boolean))),b=x.map(I=>pf(I)).filter(Boolean);return{id:i.handle,variantId:jv(i),name:i.title,descriptor:l,featureLine:c,priceLabel:kv(i.priceRange.minVariantPrice.amount,i.priceRange.minVariantPrice.currencyCode),shippingLabel:f,isInStock:Sv(i),badgeLabel:p,badgeVariant:"accent",imageUrl:m==null?void 0:m.url,imageAlt:m==null?void 0:m.altText,categoryIds:b,categoryLabels:x}};let Oo=[],gl=!1,zo=null;const Mo=new Map,xl=new Set,ll=new Map,kf=i=>(i==null?void 0:i.trim())??"",Cv=async i=>{const s=kf(i);if(!s)return zo||(zo=(async()=>{try{Oo=(await cs({first:24})).edges.map(p=>Ad(p.node))}catch(f){console.error("Failed to load products from Shopify",f),Oo=[]}finally{gl=!0,zo=null}})(),zo);const l=ll.get(s);if(l)return l;const c=(async()=>{try{const p=(await cs({first:24,query:s})).edges.map(m=>Ad(m.node));Mo.set(s,p)}catch(f){console.error("Failed to load searched products from Shopify",f),Mo.set(s,[])}finally{xl.add(s),ll.delete(s)}})();return ll.set(s,c),c};function Sf(i){const s=kf(i),[l,c]=N.useState(s?Mo.get(s)??[]:Oo),[f,p]=N.useState(s?!xl.has(s):!gl);return N.useEffect(()=>{let m=!1;return(s?xl.has(s):gl)?(c(s?Mo.get(s)??[]:Oo),p(!1),()=>{m=!0}):(p(!0),Cv(s).then(()=>{m||(c(s?Mo.get(s)??[]:Oo),p(!1))}),()=>{m=!0})},[s]),{products:l,hoverPreviewProduct:l[0],isLoading:f}}function Ev(){const[i,s]=N.useState(""),[l,c]=N.useState(""),[f,p]=N.useState(ls),[m,x]=N.useState(!1),{products:b,isLoading:j}=Sf(l),{filters:S,resetLabel:h}=vv(b),v=f===ls?b:b.filter(I=>I.categoryIds.includes(f));return N.useEffect(()=>{j||x(!0)},[j]),N.useEffect(()=>{S.some(I=>I.id===f)||p(ls)},[f,S]),!m&&j?r.jsx(ky,{}):r.jsx(dt,{paddingTop:"48px",paddingBottom:"72px",background:"var(--background)",children:r.jsxs(ke,{children:[r.jsx(Tv,{}),r.jsx(Iv,{searchInput:i,onSearchInputChange:s,onSearchSubmit:()=>c(i.trim()),isSearching:j,activeFilter:f,onFilterChange:p,filters:S,resetLabel:h,resultCount:v.length,products:v})]})})}function Tv(){return r.jsx(hv,{})}function Iv({searchInput:i,onSearchInputChange:s,onSearchSubmit:l,isSearching:c,activeFilter:f,onFilterChange:p,filters:m,resetLabel:x,resultCount:b,products:j}){return r.jsxs(Ne,{gap:"16px",children:[r.jsx(D0,{query:i,onQueryChange:s,onSearch:l,isSearching:c}),r.jsx(L0,{filters:m,activeFilter:f,onFilterChange:p,resetLabel:x}),r.jsx(gv,{resultCount:b}),r.jsx(pv,{products:j})]})}function jf({id:i,name:s,productHandle:l,variant:c,price:f,quantity:p,imageUrl:m,imageAlt:x,onIncrement:b,onDecrement:j,onRemove:S}){const h=`/products/${l}`;return r.jsx($e,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"flex-start"},children:[r.jsxs("a",{href:h,style:{flex:1,display:"flex",gap:"12px",alignItems:"flex-start",textDecoration:"none",color:"inherit",minWidth:0},children:[r.jsx("div",{style:{width:"72px",height:"72px",backgroundColor:"var(--muted)",borderRadius:"12px",flexShrink:0,overflow:"hidden"},children:m?r.jsx("img",{src:m,alt:x||s,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"6px",minWidth:0},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:s}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:c}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:f})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-end"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Ve,{variant:"ghost",size:"sm",label:"−",onClick:j?()=>j(i):void 0}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif",minWidth:"20px",textAlign:"center"},children:p}),r.jsx(Ve,{variant:"ghost",size:"sm",label:"+",onClick:b?()=>b(i):void 0})]}),r.jsx(Ve,{variant:"ghost",size:"sm",label:"Remove",onClick:S?()=>S(i):void 0})]})]})})}const _v={title:"Cart",yourCartTitle:"Your cart",relatedProductsTitle:"Related products",relatedProductsSubtitle:"Picked from the same product categories already in your cart.",relatedProductsEmptyState:"No related products are available right now.",summaryTitle:"Order summary",subtotalLabel:"Subtotal",shippingLabel:"Shipping",shippingValue:"Calculated at checkout",totalLabel:"Total",taxesLine:"Taxes and shipping calculated at checkout.",drawerCheckoutLabel:"Checkout",drawerContinueLabel:"Continue shopping",drawerFooterCaption:"You'll complete payment in checkout.",emptyCartMessage:"Your cart is empty.",summaryCheckoutLabel:"Checkout",summaryContinueLabel:"Continue shopping",writeItemSuffix:"items",addButtonLabel:"Add"};function Ho(){return{copy:_v,isLoading:!1}}const Pd=3;function Dd(i,s){return s.size===0?0:i.categoryIds.reduce((l,c)=>s.has(c)?l+1:l,0)}function Fv(){const{addItem:i,items:s}=vn(),{copy:l}=Ho(),{products:c,isLoading:f}=Sf(),p=N.useMemo(()=>{if(!c.length)return[];const m=new Set(s.map(S=>S.productHandle)),x=new Set(s.map(S=>S.variantId)),b=c.filter(S=>m.has(S.id)),j=new Set(b.flatMap(S=>S.categoryIds));return[...c].filter(S=>S.isInStock).filter(S=>!m.has(S.id)).filter(S=>!S.variantId||!x.has(S.variantId)).sort((S,h)=>{const v=Dd(h,j),I=Dd(S,j);return v!==I?v-I:S.name.localeCompare(h.name)}).slice(0,Pd)},[s,c]);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[r.jsx("h4",{style:{margin:0,fontSize:"20px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.relatedProductsTitle}),r.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.relatedProductsSubtitle})]}),f?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"16px"},children:Array.from({length:Pd}).map((m,x)=>r.jsx("div",{style:{minHeight:"320px",borderRadius:"16px",border:"1px solid var(--border)",backgroundColor:"var(--card)"}},x))}):p.length?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"16px"},children:p.map(m=>r.jsx($e,{variant:"elevated",mediaSlot:r.jsxs("div",{style:{position:"relative",width:"100%",height:"180px",backgroundColor:"var(--muted)"},children:[m.imageUrl?r.jsx("img",{src:m.imageUrl,alt:m.imageAlt||m.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null,r.jsx("div",{style:{position:"absolute",top:"12px",left:"12px"},children:r.jsx(tt,{label:m.badgeLabel,variant:m.badgeVariant,size:"sm"})})]}),footerSlot:r.jsx(Ve,{variant:"primary",size:"sm",fullWidth:!0,label:l.addButtonLabel,disabled:!m.variantId,onClick:()=>{m.variantId&&i(m.variantId)}}),children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",height:"100%"},children:[r.jsx("h5",{style:{margin:0,fontSize:"18px",lineHeight:"26px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.name}),r.jsx("p",{style:{margin:0,fontSize:"13px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:m.descriptor}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.featureLine}),r.jsx("div",{style:{marginTop:"auto",fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.priceLabel})]})},m.id))}):r.jsx($e,{variant:"subtle",padding:"md",children:r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.relatedProductsEmptyState})})]})}function Nv(){const{items:i,cartError:s,clearCartError:l,incrementItem:c,decrementItem:f,removeItem:p}=vn(),{copy:m}=Ho();return r.jsxs("div",{style:{flex:"0 0 65%",display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsx("h2",{style:{margin:0,fontSize:"30px",lineHeight:"38px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.yourCartTitle}),s?r.jsx("div",{onClick:l,children:r.jsx(Yt,{type:"error",children:s})}):null,r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:i.map(x=>r.jsx(jf,{id:x.id,name:x.name,productHandle:x.productHandle,variant:x.variant,price:ds(x.price),quantity:x.quantity,imageUrl:x.imageUrl,imageAlt:x.imageAlt,onIncrement:c,onDecrement:f,onRemove:p},x.id))}),r.jsx($e,{variant:"subtle",padding:"lg",children:r.jsx(Fv,{})})]})}function Rv({title:i,subtitle:s,children:l,onClose:c,footer:f}){return r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:c,children:r.jsxs("div",{style:{width:"520px",maxWidth:"92%",backgroundColor:"var(--card)",borderRadius:"20px",border:"1px solid var(--border)",boxShadow:"0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814",padding:"20px",display:"flex",flexDirection:"column",gap:"16px",position:"relative"},onClick:p=>p.stopPropagation(),children:[(i||s)&&r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",position:"relative"},children:[r.jsxs("div",{children:[i&&r.jsx("div",{style:{fontSize:"18px",fontWeight:600,color:"var(--foreground)",lineHeight:"28px"},children:i}),s&&r.jsx("div",{style:{fontSize:"14px",color:"var(--muted-foreground)",lineHeight:"20px",marginTop:"4px"},children:s})]}),c&&r.jsx("div",{style:{position:"absolute",top:0,right:0},children:r.jsx("button",{onClick:c,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"Close"})})]}),r.jsx("div",{style:{flex:1,minHeight:"100px",display:"flex",flexDirection:"column",gap:"12px"},children:l}),f&&r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:f})]})})}function zv({itemCount:i,subtotal:s,onContinue:l,onBack:c,onClose:f}){return r.jsxs(Rv,{onClose:f,title:"Heading to checkout",subtitle:"You'll complete payment securely in checkout.",footer:r.jsx(Dv,{onContinue:l,onBack:c}),children:[r.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)",marginTop:"-8px"}}),r.jsx(Av,{itemCount:i,subtotal:s}),r.jsx(Pv,{})]})}function Av({itemCount:i,subtotal:s}){return r.jsx($e,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(ul,{label:"Items",value:String(i),valueWeight:"600"}),r.jsx(ul,{label:"Shipping",value:"Calculated in checkout"}),r.jsx(ul,{label:"Total",value:ds(s),valueWeight:"600",valueSize:"20px",valueLineHeight:"30px"}),r.jsx("div",{style:{marginTop:"6px"},children:r.jsx(tt,{label:"No password needed",variant:"neutral",size:"sm"})})]})})}function ul({label:i,value:s,valueWeight:l="400",valueSize:c="14px",valueLineHeight:f="20px"}){return r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:i}),r.jsx("div",{style:{fontSize:c,lineHeight:f,fontWeight:l,color:"var(--foreground)"},children:s})]})}function Pv(){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx("div",{style:{position:"relative",height:"6px",width:"100%",backgroundColor:"var(--border)",borderRadius:"999px",overflow:"hidden"},children:r.jsx("div",{style:{position:"absolute",top:0,left:0,height:"6px",width:"45%",backgroundColor:"#4F46E5",borderRadius:"999px",transition:"width 0.3s ease-out"}})}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)"},children:"Preparing your checkout…"})]})}function Dv({onContinue:i,onBack:s}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"100%"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[r.jsx(Ve,{label:"Back to cart",variant:"ghost",size:"md",onClick:s}),r.jsx(Ve,{label:"Continue",variant:"primary",size:"md",onClick:i})]}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)",textAlign:"right"},children:"If checkout doesn't open, try again."})]})}function bf({subtotal:i=5997,total:s=5997}){const{copy:l}=Ho();return r.jsx($e,{variant:"elevated",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.summaryTitle}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.subtotalLabel}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:ds(i)})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingLabel}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingValue})]}),r.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.totalLabel}),r.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:ds(s)})]})]}),r.jsx(wf,{}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.taxesLine})]})})}function Lv(){const{cartCount:i,subtotal:s,total:l,checkout:c}=vn(),{copy:f}=Ho(),[p,m]=N.useState(!1);return r.jsxs("div",{style:{flex:"0 0 35%",display:"flex",flexDirection:"column",gap:"16px",position:"sticky",top:"24px"},children:[r.jsx(bf,{subtotal:s,total:l}),r.jsx(Ve,{variant:"primary",size:"lg",label:f.summaryCheckoutLabel,onClick:()=>m(!0)}),r.jsx(Ve,{variant:"secondary",size:"lg",label:f.summaryContinueLabel,onClick:()=>{window.location.href="/products"}}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:f.taxesLine}),p?r.jsx(zv,{itemCount:i,subtotal:s,onBack:()=>m(!1),onClose:()=>m(!1),onContinue:()=>{c()}}):null]})}function Ov(){return r.jsx(dt,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:r.jsx(ke,{children:r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start"},children:[r.jsx(Nv,{}),r.jsx(Lv,{})]})})})}function Mv(){return r.jsx(Ov,{})}function Bv(){const{items:i,cartCount:s,subtotal:l,total:c,cartError:f,clearCartError:p,closeCartDrawer:m,incrementItem:x,decrementItem:b,removeItem:j}=vn(),{copy:S}=Ho();return r.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:[r.jsx("div",{onClick:m,style:{position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.5)"}}),r.jsxs("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:"420px",backgroundColor:"var(--card)",borderLeft:"1px solid var(--border)",boxShadow:"-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"24px",borderBottom:"1px solid var(--border)",flexShrink:0},children:r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("h3",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:S.title}),r.jsx(tt,{label:`${s} ${S.writeItemSuffix}`,variant:"neutral",size:"sm"})]})}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},children:[f?r.jsx("div",{onClick:p,children:r.jsx(Yt,{type:"error",children:f})}):null,i.length?r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:i.map(h=>r.jsx(jf,{id:h.id,name:h.name,variant:h.variant,price:`₹${h.price.toLocaleString("en-IN")}`,quantity:h.quantity,imageUrl:h.imageUrl,imageAlt:h.imageAlt,onIncrement:x,onDecrement:b,onRemove:j},h.id))}):r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:S.emptyCartMessage}),r.jsx(bf,{subtotal:l,total:c})]}),r.jsxs("div",{style:{padding:"24px",borderTop:"1px solid var(--border)",flexShrink:0,display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(Ve,{variant:"primary",size:"lg",label:S.drawerCheckoutLabel,onClick:()=>{m(),window.location.href="/cart"}}),r.jsx(Ve,{variant:"secondary",size:"lg",label:S.drawerContinueLabel,onClick:m}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:S.drawerFooterCaption})]})]})]})}function Uv(){const i=window.location.pathname.replace(/\/+$/,"")||"/";if(i.startsWith("/products/"))return r.jsx(P0,{});if(/^\/account\/reset\/[^/]+\/[^/]+$/.test(i))return r.jsx(wd,{});switch(i){case"/":return r.jsx(jy,{});case"/products":return r.jsx(Ev,{});case"/philosophy":return r.jsx(Ey,{});case"/community":return r.jsx(Mx,{});case"/cart":return r.jsx(Mv,{});case"/account":return r.jsx(Kg,{});case"/account/login":return r.jsx(Og,{});case"/account/register":return r.jsx(Mg,{});case"/account/password-reset":case"/account/forgot-password":return r.jsx(Bg,{});case"/account/password-reset/confirm":return r.jsx(wd,{});default:return r.jsx(Kx,{})}}function $v(){const{isDrawerOpen:i}=vn(),s=window.location.pathname.replace(/\/+$/,"")||"/",l=s==="/account"||s.startsWith("/account/"),c=s==="/cart";return r.jsxs(Ex,{children:[Uv(),!l&&!c&&i?r.jsx(Bv,{}):null]})}const Hv=({...i})=>{const{theme:s="system"}=Tl();return r.jsx(fv,{theme:s,position:"top-center",className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...i})};function Wv({children:i}){return r.jsxs(sx,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[r.jsx(Mh,{children:r.jsx(nx,{children:i})}),r.jsx(Hv,{})]})}const Cf=document.getElementById("root");if(!Cf)throw new Error('Root element with id "root" was not found.');Em.createRoot(Cf).render(r.jsx(N.StrictMode,{children:r.jsx(Wv,{children:r.jsx($v,{})})}));

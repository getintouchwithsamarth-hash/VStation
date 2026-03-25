(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function l(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(p){if(p.ep)return;p.ep=!0;const f=l(p);fetch(p.href,f)}})();function ep(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var al={exports:{}},Ao={},sl={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Dm(){if(md)return pe;md=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),h=Symbol.iterator;function v(S){return S===null||typeof S!="object"?null:(S=h&&S[h]||S["@@iterator"],typeof S=="function"?S:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,P={};function z(S,R,B){this.props=S,this.context=R,this.refs=P,this.updater=B||T}z.prototype.isReactComponent={},z.prototype.setState=function(S,R){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,R,"setState")},z.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function ae(){}ae.prototype=z.prototype;function ue(S,R,B){this.props=S,this.context=R,this.refs=P,this.updater=B||T}var ge=ue.prototype=new ae;ge.constructor=ue,I(ge,z.prototype),ge.isPureReactComponent=!0;var J=Array.isArray,ne=Object.prototype.hasOwnProperty,ie={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function Ce(S,R,B){var Z,le={},G=null,he=null;if(R!=null)for(Z in R.ref!==void 0&&(he=R.ref),R.key!==void 0&&(G=""+R.key),R)ne.call(R,Z)&&!ye.hasOwnProperty(Z)&&(le[Z]=R[Z]);var de=arguments.length-2;if(de===1)le.children=B;else if(1<de){for(var xe=Array(de),Fe=0;Fe<de;Fe++)xe[Fe]=arguments[Fe+2];le.children=xe}if(S&&S.defaultProps)for(Z in de=S.defaultProps,de)le[Z]===void 0&&(le[Z]=de[Z]);return{$$typeof:o,type:S,key:G,ref:he,props:le,_owner:ie.current}}function Q(S,R){return{$$typeof:o,type:S.type,key:R,ref:S.ref,props:S.props,_owner:S._owner}}function K(S){return typeof S=="object"&&S!==null&&S.$$typeof===o}function U(S){var R={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(B){return R[B]})}var se=/\/+/g;function me(S,R){return typeof S=="object"&&S!==null&&S.key!=null?U(""+S.key):R.toString(36)}function Qe(S,R,B,Z,le){var G=typeof S;(G==="undefined"||G==="boolean")&&(S=null);var he=!1;if(S===null)he=!0;else switch(G){case"string":case"number":he=!0;break;case"object":switch(S.$$typeof){case o:case a:he=!0}}if(he)return he=S,le=le(he),S=Z===""?"."+me(he,0):Z,J(le)?(B="",S!=null&&(B=S.replace(se,"$&/")+"/"),Qe(le,R,B,"",function(Fe){return Fe})):le!=null&&(K(le)&&(le=Q(le,B+(!le.key||he&&he.key===le.key?"":(""+le.key).replace(se,"$&/")+"/")+S)),R.push(le)),1;if(he=0,Z=Z===""?".":Z+":",J(S))for(var de=0;de<S.length;de++){G=S[de];var xe=Z+me(G,de);he+=Qe(G,R,B,xe,le)}else if(xe=v(S),typeof xe=="function")for(S=xe.call(S),de=0;!(G=S.next()).done;)G=G.value,xe=Z+me(G,de++),he+=Qe(G,R,B,xe,le);else if(G==="object")throw R=String(S),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return he}function _e(S,R,B){if(S==null)return S;var Z=[],le=0;return Qe(S,Z,"","",function(G){return R.call(B,G,le++)}),Z}function re(S){if(S._status===-1){var R=S._result;R=R(),R.then(function(B){(S._status===0||S._status===-1)&&(S._status=1,S._result=B)},function(B){(S._status===0||S._status===-1)&&(S._status=2,S._result=B)}),S._status===-1&&(S._status=0,S._result=R)}if(S._status===1)return S._result.default;throw S._result}var fe={current:null},O={transition:null},V={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:O,ReactCurrentOwner:ie};function $(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:_e,forEach:function(S,R,B){_e(S,function(){R.apply(this,arguments)},B)},count:function(S){var R=0;return _e(S,function(){R++}),R},toArray:function(S){return _e(S,function(R){return R})||[]},only:function(S){if(!K(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},pe.Component=z,pe.Fragment=l,pe.Profiler=p,pe.PureComponent=ue,pe.StrictMode=u,pe.Suspense=k,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,pe.act=$,pe.cloneElement=function(S,R,B){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var Z=I({},S.props),le=S.key,G=S.ref,he=S._owner;if(R!=null){if(R.ref!==void 0&&(G=R.ref,he=ie.current),R.key!==void 0&&(le=""+R.key),S.type&&S.type.defaultProps)var de=S.type.defaultProps;for(xe in R)ne.call(R,xe)&&!ye.hasOwnProperty(xe)&&(Z[xe]=R[xe]===void 0&&de!==void 0?de[xe]:R[xe])}var xe=arguments.length-2;if(xe===1)Z.children=B;else if(1<xe){de=Array(xe);for(var Fe=0;Fe<xe;Fe++)de[Fe]=arguments[Fe+2];Z.children=de}return{$$typeof:o,type:S.type,key:le,ref:G,props:Z,_owner:he}},pe.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:f,_context:S},S.Consumer=S},pe.createElement=Ce,pe.createFactory=function(S){var R=Ce.bind(null,S);return R.type=S,R},pe.createRef=function(){return{current:null}},pe.forwardRef=function(S){return{$$typeof:g,render:S}},pe.isValidElement=K,pe.lazy=function(S){return{$$typeof:w,_payload:{_status:-1,_result:S},_init:re}},pe.memo=function(S,R){return{$$typeof:x,type:S,compare:R===void 0?null:R}},pe.startTransition=function(S){var R=O.transition;O.transition={};try{S()}finally{O.transition=R}},pe.unstable_act=$,pe.useCallback=function(S,R){return fe.current.useCallback(S,R)},pe.useContext=function(S){return fe.current.useContext(S)},pe.useDebugValue=function(){},pe.useDeferredValue=function(S){return fe.current.useDeferredValue(S)},pe.useEffect=function(S,R){return fe.current.useEffect(S,R)},pe.useId=function(){return fe.current.useId()},pe.useImperativeHandle=function(S,R,B){return fe.current.useImperativeHandle(S,R,B)},pe.useInsertionEffect=function(S,R){return fe.current.useInsertionEffect(S,R)},pe.useLayoutEffect=function(S,R){return fe.current.useLayoutEffect(S,R)},pe.useMemo=function(S,R){return fe.current.useMemo(S,R)},pe.useReducer=function(S,R,B){return fe.current.useReducer(S,R,B)},pe.useRef=function(S){return fe.current.useRef(S)},pe.useState=function(S){return fe.current.useState(S)},pe.useSyncExternalStore=function(S,R,B){return fe.current.useSyncExternalStore(S,R,B)},pe.useTransition=function(){return fe.current.useTransition()},pe.version="18.3.1",pe}var hd;function _l(){return hd||(hd=1,sl.exports=Dm()),sl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function Fm(){if(gd)return Ao;gd=1;var o=_l(),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(g,k,x){var w,h={},v=null,T=null;x!==void 0&&(v=""+x),k.key!==void 0&&(v=""+k.key),k.ref!==void 0&&(T=k.ref);for(w in k)u.call(k,w)&&!f.hasOwnProperty(w)&&(h[w]=k[w]);if(g&&g.defaultProps)for(w in k=g.defaultProps,k)h[w]===void 0&&(h[w]=k[w]);return{$$typeof:a,type:g,key:v,ref:T,props:h,_owner:p.current}}return Ao.Fragment=l,Ao.jsx=m,Ao.jsxs=m,Ao}var yd;function Om(){return yd||(yd=1,al.exports=Fm()),al.exports}var n=Om(),N=_l();const M=ep(N);var sa={},ll={exports:{}},St={},cl={exports:{}},ul={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function Mm(){return xd||(xd=1,(function(o){function a(O,V){var $=O.length;O.push(V);e:for(;0<$;){var S=$-1>>>1,R=O[S];if(0<p(R,V))O[S]=V,O[$]=R,$=S;else break e}}function l(O){return O.length===0?null:O[0]}function u(O){if(O.length===0)return null;var V=O[0],$=O.pop();if($!==V){O[0]=$;e:for(var S=0,R=O.length,B=R>>>1;S<B;){var Z=2*(S+1)-1,le=O[Z],G=Z+1,he=O[G];if(0>p(le,$))G<R&&0>p(he,le)?(O[S]=he,O[G]=$,S=G):(O[S]=le,O[Z]=$,S=Z);else if(G<R&&0>p(he,$))O[S]=he,O[G]=$,S=G;else break e}}return V}function p(O,V){var $=O.sortIndex-V.sortIndex;return $!==0?$:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var m=Date,g=m.now();o.unstable_now=function(){return m.now()-g}}var k=[],x=[],w=1,h=null,v=3,T=!1,I=!1,P=!1,z=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(O){for(var V=l(x);V!==null;){if(V.callback===null)u(x);else if(V.startTime<=O)u(x),V.sortIndex=V.expirationTime,a(k,V);else break;V=l(x)}}function J(O){if(P=!1,ge(O),!I)if(l(k)!==null)I=!0,re(ne);else{var V=l(x);V!==null&&fe(J,V.startTime-O)}}function ne(O,V){I=!1,P&&(P=!1,ae(Ce),Ce=-1),T=!0;var $=v;try{for(ge(V),h=l(k);h!==null&&(!(h.expirationTime>V)||O&&!U());){var S=h.callback;if(typeof S=="function"){h.callback=null,v=h.priorityLevel;var R=S(h.expirationTime<=V);V=o.unstable_now(),typeof R=="function"?h.callback=R:h===l(k)&&u(k),ge(V)}else u(k);h=l(k)}if(h!==null)var B=!0;else{var Z=l(x);Z!==null&&fe(J,Z.startTime-V),B=!1}return B}finally{h=null,v=$,T=!1}}var ie=!1,ye=null,Ce=-1,Q=5,K=-1;function U(){return!(o.unstable_now()-K<Q)}function se(){if(ye!==null){var O=o.unstable_now();K=O;var V=!0;try{V=ye(!0,O)}finally{V?me():(ie=!1,ye=null)}}else ie=!1}var me;if(typeof ue=="function")me=function(){ue(se)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,_e=Qe.port2;Qe.port1.onmessage=se,me=function(){_e.postMessage(null)}}else me=function(){z(se,0)};function re(O){ye=O,ie||(ie=!0,me())}function fe(O,V){Ce=z(function(){O(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_continueExecution=function(){I||T||(I=!0,re(ne))},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return l(k)},o.unstable_next=function(O){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var $=v;v=V;try{return O()}finally{v=$}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=v;v=O;try{return V()}finally{v=$}},o.unstable_scheduleCallback=function(O,V,$){var S=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?S+$:S):$=S,O){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=$+R,O={id:w++,callback:V,priorityLevel:O,startTime:$,expirationTime:R,sortIndex:-1},$>S?(O.sortIndex=$,a(x,O),l(k)===null&&O===l(x)&&(P?(ae(Ce),Ce=-1):P=!0,fe(J,$-S))):(O.sortIndex=R,a(k,O),I||T||(I=!0,re(ne))),O},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(O){var V=v;return function(){var $=v;v=V;try{return O.apply(this,arguments)}finally{v=$}}}})(ul)),ul}var vd;function Um(){return vd||(vd=1,cl.exports=Mm()),cl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function $m(){if(wd)return St;wd=1;var o=_l(),a=Um();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,p={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)u.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},h={};function v(e){return k.call(h,e)?!0:k.call(w,e)?!1:x.test(e)?h[e]=!0:(w[e]=!0,!1)}function T(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,r,i){if(t===null||typeof t>"u"||T(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function P(e,t,r,i,s,c,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=d}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new P(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];z[t]=new P(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new P(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new P(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new P(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new P(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new P(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new P(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new P(e,5,!1,e.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ae,ue);z[t]=new P(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ae,ue);z[t]=new P(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ae,ue);z[t]=new P(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new P(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new P(e,1,!1,e.toLowerCase(),null,!0,!0)});function ge(e,t,r,i){var s=z.hasOwnProperty(t)?z[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,r,s,i)&&(r=null),i||s===null?v(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,i=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var J=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),ie=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),Ce=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),U=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),O=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,S;function R(e){if(S===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var B=!1;function Z(e,t){if(!e||B)return"";B=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var i=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){i=E}e.call(t.prototype)}else{try{throw Error()}catch(E){i=E}e()}}catch(E){if(E&&i&&typeof E.stack=="string"){for(var s=E.stack.split(`
`),c=i.stack.split(`
`),d=s.length-1,y=c.length-1;1<=d&&0<=y&&s[d]!==c[y];)y--;for(;1<=d&&0<=y;d--,y--)if(s[d]!==c[y]){if(d!==1||y!==1)do if(d--,y--,0>y||s[d]!==c[y]){var b=`
`+s[d].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=d&&0<=y);break}}}finally{B=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function le(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function G(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case ie:return"Portal";case Q:return"Profiler";case Ce:return"StrictMode";case me:return"Suspense";case Qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case U:return(e.displayName||"Context")+".Consumer";case K:return(e._context.displayName||"Context")+".Provider";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _e:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(t);case 8:return t===Ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fe(e){var t=xe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){i=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=Fe(e))}function kr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=xe(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Ct(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jt(e,t){var r=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Xo(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=de(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yn(e,t){t=t.checked,t!=null&&ge(e,"checked",t,!1)}function sr(e,t){Yn(e,t);var r=de(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_t(e,t.type,r):t.hasOwnProperty("defaultValue")&&_t(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qn(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function _t(e,t,r){(t!=="number"||Ct(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Gr=Array.isArray;function Sr(e,t,r,i){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&i&&(e[r].defaultSelected=!0)}else{for(r=""+de(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function it(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lr(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(Gr(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:de(r)}}function Go(e,t){var r=de(t.value),i=de(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Jo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,xn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cr=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Cr.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function Zo(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function ei(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,s=Zo(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,s):e[r]=s}}var ti=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vn(e,t){if(t){if(ti[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Xn(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var en=null;function At(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gn=null,_r=null,cr=null;function Jn(e){if(e=vo(e)){if(typeof Gn!="function")throw Error(l(280));var t=e.stateNode;t&&(t=ki(t),Gn(e.stateNode,e.type,t))}}function ce(e){_r?cr?cr.push(e):cr=[e]:_r=e}function $e(){if(_r){var e=_r,t=cr;if(cr=_r=null,Jn(e),t)for(e=0;e<t.length;e++)Jn(t[e])}}function Ke(e,t){return e(t)}function ct(){}var Tr=!1;function Ve(e,t,r){if(Tr)return e(t,r);Tr=!0;try{return Ke(e,t,r)}finally{Tr=!1,(_r!==null||cr!==null)&&(ct(),$e())}}function Ze(e,t){var r=e.stateNode;if(r===null)return null;var i=ki(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Er=!1;if(g)try{var at={};Object.defineProperty(at,"passive",{get:function(){Er=!0}}),window.addEventListener("test",at,at),window.removeEventListener("test",at,at)}catch{Er=!1}function Tt(e,t,r,i,s,c,d,y,b){var E=Array.prototype.slice.call(arguments,3);try{t.apply(r,E)}catch(L){this.onError(L)}}var Ir=!1,Lt=null,Zn=!1,Ca=null,Hp={onError:function(e){Ir=!0,Lt=e}};function Bp(e,t,r,i,s,c,d,y,b){Ir=!1,Lt=null,Tt.apply(Hp,arguments)}function Wp(e,t,r,i,s,c,d,y,b){if(Bp.apply(this,arguments),Ir){if(Ir){var E=Lt;Ir=!1,Lt=null}else throw Error(l(198));Zn||(Zn=!0,Ca=E)}}function tn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Fl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ol(e){if(tn(e)!==e)throw Error(l(188))}function Vp(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,i=t;;){var s=r.return;if(s===null)break;var c=s.alternate;if(c===null){if(i=s.return,i!==null){r=i;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===r)return Ol(s),e;if(c===i)return Ol(s),t;c=c.sibling}throw Error(l(188))}if(r.return!==i.return)r=s,i=c;else{for(var d=!1,y=s.child;y;){if(y===r){d=!0,r=s,i=c;break}if(y===i){d=!0,i=s,r=c;break}y=y.sibling}if(!d){for(y=c.child;y;){if(y===r){d=!0,r=c,i=s;break}if(y===i){d=!0,i=c,r=s;break}y=y.sibling}if(!d)throw Error(l(189))}}if(r.alternate!==i)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function Ml(e){return e=Vp(e),e!==null?Ul(e):null}function Ul(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ul(e);if(t!==null)return t;e=e.sibling}return null}var $l=a.unstable_scheduleCallback,Hl=a.unstable_cancelCallback,qp=a.unstable_shouldYield,Yp=a.unstable_requestPaint,He=a.unstable_now,Qp=a.unstable_getCurrentPriorityLevel,_a=a.unstable_ImmediatePriority,Bl=a.unstable_UserBlockingPriority,ri=a.unstable_NormalPriority,Kp=a.unstable_LowPriority,Wl=a.unstable_IdlePriority,ni=null,Zt=null;function Xp(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Zp,Gp=Math.log,Jp=Math.LN2;function Zp(e){return e>>>=0,e===0?32:31-(Gp(e)/Jp|0)|0}var oi=64,ii=4194304;function eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ai(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,c=e.pingedLanes,d=r&268435455;if(d!==0){var y=d&~s;y!==0?i=eo(y):(c&=d,c!==0&&(i=eo(c)))}else d=r&~s,d!==0?i=eo(d):c!==0&&(i=eo(c));if(i===0)return 0;if(t!==0&&t!==i&&(t&s)===0&&(s=i&-i,c=t&-t,s>=c||s===16&&(c&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Wt(t),s=1<<r,i|=e[r],t&=~s;return i}function ef(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes;0<c;){var d=31-Wt(c),y=1<<d,b=s[d];b===-1?((y&r)===0||(y&i)!==0)&&(s[d]=ef(y,t)):b<=t&&(e.expiredLanes|=y),c&=~y}}function Ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vl(){var e=oi;return oi<<=1,(oi&4194240)===0&&(oi=64),e}function Ea(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function to(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=r}function rf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Wt(r),c=1<<s;t[s]=0,i[s]=-1,e[s]=-1,r&=~c}}function Ia(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Wt(r),s=1<<i;s&t|e[i]&t&&(e[i]|=t),r&=~s}}var je=0;function ql(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yl,Na,Ql,Kl,Xl,Ra=!1,si=[],Nr=null,Rr=null,Pr=null,ro=new Map,no=new Map,zr=[],nf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gl(e,t){switch(e){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function oo(e,t,r,i,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:c,targetContainers:[s]},t!==null&&(t=vo(t),t!==null&&Na(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function of(e,t,r,i,s){switch(t){case"focusin":return Nr=oo(Nr,e,t,r,i,s),!0;case"dragenter":return Rr=oo(Rr,e,t,r,i,s),!0;case"mouseover":return Pr=oo(Pr,e,t,r,i,s),!0;case"pointerover":var c=s.pointerId;return ro.set(c,oo(ro.get(c)||null,e,t,r,i,s)),!0;case"gotpointercapture":return c=s.pointerId,no.set(c,oo(no.get(c)||null,e,t,r,i,s)),!0}return!1}function Jl(e){var t=rn(e.target);if(t!==null){var r=tn(t);if(r!==null){if(t=r.tag,t===13){if(t=Fl(r),t!==null){e.blockedOn=t,Xl(e.priority,function(){Ql(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);en=i,r.target.dispatchEvent(i),en=null}else return t=vo(r),t!==null&&Na(t),e.blockedOn=r,!1;t.shift()}return!0}function Zl(e,t,r){li(e)&&r.delete(t)}function af(){Ra=!1,Nr!==null&&li(Nr)&&(Nr=null),Rr!==null&&li(Rr)&&(Rr=null),Pr!==null&&li(Pr)&&(Pr=null),ro.forEach(Zl),no.forEach(Zl)}function io(e,t){e.blockedOn===t&&(e.blockedOn=null,Ra||(Ra=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,af)))}function ao(e){function t(s){return io(s,e)}if(0<si.length){io(si[0],e);for(var r=1;r<si.length;r++){var i=si[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Nr!==null&&io(Nr,e),Rr!==null&&io(Rr,e),Pr!==null&&io(Pr,e),ro.forEach(t),no.forEach(t),r=0;r<zr.length;r++)i=zr[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<zr.length&&(r=zr[0],r.blockedOn===null);)Jl(r),r.blockedOn===null&&zr.shift()}var wn=J.ReactCurrentBatchConfig,ci=!0;function sf(e,t,r,i){var s=je,c=wn.transition;wn.transition=null;try{je=1,Pa(e,t,r,i)}finally{je=s,wn.transition=c}}function lf(e,t,r,i){var s=je,c=wn.transition;wn.transition=null;try{je=4,Pa(e,t,r,i)}finally{je=s,wn.transition=c}}function Pa(e,t,r,i){if(ci){var s=za(e,t,r,i);if(s===null)Xa(e,t,i,ui,r),Gl(e,i);else if(of(s,e,t,r,i))i.stopPropagation();else if(Gl(e,i),t&4&&-1<nf.indexOf(e)){for(;s!==null;){var c=vo(s);if(c!==null&&Yl(c),c=za(e,t,r,i),c===null&&Xa(e,t,i,ui,r),c===s)break;s=c}s!==null&&i.stopPropagation()}else Xa(e,t,i,null,r)}}var ui=null;function za(e,t,r,i){if(ui=null,e=At(i),e=rn(e),e!==null)if(t=tn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Fl(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ui=e,null}function ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qp()){case _a:return 1;case Bl:return 4;case ri:case Kp:return 16;case Wl:return 536870912;default:return 16}default:return 16}}var Ar=null,Aa=null,di=null;function tc(){if(di)return di;var e,t=Aa,r=t.length,i,s="value"in Ar?Ar.value:Ar.textContent,c=s.length;for(e=0;e<r&&t[e]===s[e];e++);var d=r-e;for(i=1;i<=d&&t[r-i]===s[c-i];i++);return di=s.slice(e,1<i?1-i:void 0)}function pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function rc(){return!1}function Et(e){function t(r,i,s,c,d){this._reactName=r,this._targetInst=s,this.type=i,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?fi:rc,this.isPropagationStopped=rc,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},La=Et(bn),so=$({},bn,{view:0,detail:0}),cf=Et(so),Da,Fa,lo,mi=$({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(Da=e.screenX-lo.screenX,Fa=e.screenY-lo.screenY):Fa=Da=0,lo=e),Da)},movementY:function(e){return"movementY"in e?e.movementY:Fa}}),nc=Et(mi),uf=$({},mi,{dataTransfer:0}),df=Et(uf),pf=$({},so,{relatedTarget:0}),Oa=Et(pf),ff=$({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),mf=Et(ff),hf=$({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=Et(hf),yf=$({},bn,{data:0}),oc=Et(yf),xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wf[e])?!!t[e]:!1}function Ma(){return bf}var kf=$({},so,{key:function(e){if(e.key){var t=xf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sf=Et(kf),jf=$({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=Et(jf),Cf=$({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),_f=Et(Cf),Tf=$({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ef=Et(Tf),If=$({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nf=Et(If),Rf=[9,13,27,32],Ua=g&&"CompositionEvent"in window,co=null;g&&"documentMode"in document&&(co=document.documentMode);var Pf=g&&"TextEvent"in window&&!co,ac=g&&(!Ua||co&&8<co&&11>=co),sc=" ",lc=!1;function cc(e,t){switch(e){case"keyup":return Rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function zf(e,t){switch(e){case"compositionend":return uc(t);case"keypress":return t.which!==32?null:(lc=!0,sc);case"textInput":return e=t.data,e===sc&&lc?null:e;default:return null}}function Af(e,t){if(kn)return e==="compositionend"||!Ua&&cc(e,t)?(e=tc(),di=Aa=Ar=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ac&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function pc(e,t,r,i){ce(i),t=vi(t,"onChange"),0<t.length&&(r=new La("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var uo=null,po=null;function Df(e){Nc(e,0)}function hi(e){var t=Tn(e);if(kr(t))return e}function Ff(e,t){if(e==="change")return t}var fc=!1;if(g){var $a;if(g){var Ha="oninput"in document;if(!Ha){var mc=document.createElement("div");mc.setAttribute("oninput","return;"),Ha=typeof mc.oninput=="function"}$a=Ha}else $a=!1;fc=$a&&(!document.documentMode||9<document.documentMode)}function hc(){uo&&(uo.detachEvent("onpropertychange",gc),po=uo=null)}function gc(e){if(e.propertyName==="value"&&hi(po)){var t=[];pc(t,po,e,At(e)),Ve(Df,t)}}function Of(e,t,r){e==="focusin"?(hc(),uo=t,po=r,uo.attachEvent("onpropertychange",gc)):e==="focusout"&&hc()}function Mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(po)}function Uf(e,t){if(e==="click")return hi(t)}function $f(e,t){if(e==="input"||e==="change")return hi(t)}function Hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:Hf;function fo(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var s=r[i];if(!k.call(t,s)||!Vt(e[s],t[s]))return!1}return!0}function yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xc(e,t){var r=yc(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yc(r)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wc(){for(var e=window,t=Ct();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ct(e.document)}return t}function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bf(e){var t=wc(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&vc(r.ownerDocument.documentElement,r)){if(i!==null&&Ba(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,c=Math.min(i.start,s);i=i.end===void 0?c:Math.min(i.end,s),!e.extend&&c>i&&(s=i,i=c,c=s),s=xc(r,c);var d=xc(r,i);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),c>i?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wf=g&&"documentMode"in document&&11>=document.documentMode,Sn=null,Wa=null,mo=null,Va=!1;function bc(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Va||Sn==null||Sn!==Ct(i)||(i=Sn,"selectionStart"in i&&Ba(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mo&&fo(mo,i)||(mo=i,i=vi(Wa,"onSelect"),0<i.length&&(t=new La("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Sn)))}function gi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var jn={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},qa={},kc={};g&&(kc=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function yi(e){if(qa[e])return qa[e];if(!jn[e])return e;var t=jn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in kc)return qa[e]=t[r];return e}var Sc=yi("animationend"),jc=yi("animationiteration"),Cc=yi("animationstart"),_c=yi("transitionend"),Tc=new Map,Ec="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){Tc.set(e,t),f(t,[e])}for(var Ya=0;Ya<Ec.length;Ya++){var Qa=Ec[Ya],Vf=Qa.toLowerCase(),qf=Qa[0].toUpperCase()+Qa.slice(1);Lr(Vf,"on"+qf)}Lr(Sc,"onAnimationEnd"),Lr(jc,"onAnimationIteration"),Lr(Cc,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(_c,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function Ic(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,Wp(i,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],s=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var d=i.length-1;0<=d;d--){var y=i[d],b=y.instance,E=y.currentTarget;if(y=y.listener,b!==c&&s.isPropagationStopped())break e;Ic(s,y,E),c=b}else for(d=0;d<i.length;d++){if(y=i[d],b=y.instance,E=y.currentTarget,y=y.listener,b!==c&&s.isPropagationStopped())break e;Ic(s,y,E),c=b}}}if(Zn)throw e=Ca,Zn=!1,Ca=null,e}function Ie(e,t){var r=t[rs];r===void 0&&(r=t[rs]=new Set);var i=e+"__bubble";r.has(i)||(Rc(t,e,2,!1),r.add(i))}function Ka(e,t,r){var i=0;t&&(i|=4),Rc(r,e,i,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function go(e){if(!e[xi]){e[xi]=!0,u.forEach(function(r){r!=="selectionchange"&&(Yf.has(r)||Ka(r,!1,e),Ka(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,Ka("selectionchange",!1,t))}}function Rc(e,t,r,i){switch(ec(t)){case 1:var s=sf;break;case 4:s=lf;break;default:s=Pa}r=s.bind(null,t,r,e),s=void 0,!Er||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Xa(e,t,r,i,s){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var y=i.stateNode.containerInfo;if(y===s||y.nodeType===8&&y.parentNode===s)break;if(d===4)for(d=i.return;d!==null;){var b=d.tag;if((b===3||b===4)&&(b=d.stateNode.containerInfo,b===s||b.nodeType===8&&b.parentNode===s))return;d=d.return}for(;y!==null;){if(d=rn(y),d===null)return;if(b=d.tag,b===5||b===6){i=c=d;continue e}y=y.parentNode}}i=i.return}Ve(function(){var E=c,L=At(r),D=[];e:{var A=Tc.get(e);if(A!==void 0){var H=La,q=e;switch(e){case"keypress":if(pi(r)===0)break e;case"keydown":case"keyup":H=Sf;break;case"focusin":q="focus",H=Oa;break;case"focusout":q="blur",H=Oa;break;case"beforeblur":case"afterblur":H=Oa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=_f;break;case Sc:case jc:case Cc:H=mf;break;case _c:H=Ef;break;case"scroll":H=cf;break;case"wheel":H=Nf;break;case"copy":case"cut":case"paste":H=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=ic}var Y=(t&4)!==0,Be=!Y&&e==="scroll",C=Y?A!==null?A+"Capture":null:A;Y=[];for(var j=E,_;j!==null;){_=j;var F=_.stateNode;if(_.tag===5&&F!==null&&(_=F,C!==null&&(F=Ze(j,C),F!=null&&Y.push(yo(j,F,_)))),Be)break;j=j.return}0<Y.length&&(A=new H(A,q,null,r,L),D.push({event:A,listeners:Y}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",A&&r!==en&&(q=r.relatedTarget||r.fromElement)&&(rn(q)||q[ur]))break e;if((H||A)&&(A=L.window===L?L:(A=L.ownerDocument)?A.defaultView||A.parentWindow:window,H?(q=r.relatedTarget||r.toElement,H=E,q=q?rn(q):null,q!==null&&(Be=tn(q),q!==Be||q.tag!==5&&q.tag!==6)&&(q=null)):(H=null,q=E),H!==q)){if(Y=nc,F="onMouseLeave",C="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Y=ic,F="onPointerLeave",C="onPointerEnter",j="pointer"),Be=H==null?A:Tn(H),_=q==null?A:Tn(q),A=new Y(F,j+"leave",H,r,L),A.target=Be,A.relatedTarget=_,F=null,rn(L)===E&&(Y=new Y(C,j+"enter",q,r,L),Y.target=_,Y.relatedTarget=Be,F=Y),Be=F,H&&q)t:{for(Y=H,C=q,j=0,_=Y;_;_=Cn(_))j++;for(_=0,F=C;F;F=Cn(F))_++;for(;0<j-_;)Y=Cn(Y),j--;for(;0<_-j;)C=Cn(C),_--;for(;j--;){if(Y===C||C!==null&&Y===C.alternate)break t;Y=Cn(Y),C=Cn(C)}Y=null}else Y=null;H!==null&&Pc(D,A,H,Y,!1),q!==null&&Be!==null&&Pc(D,Be,q,Y,!0)}}e:{if(A=E?Tn(E):window,H=A.nodeName&&A.nodeName.toLowerCase(),H==="select"||H==="input"&&A.type==="file")var X=Ff;else if(dc(A))if(fc)X=$f;else{X=Mf;var ee=Of}else(H=A.nodeName)&&H.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(X=Uf);if(X&&(X=X(e,E))){pc(D,X,r,L);break e}ee&&ee(e,A,E),e==="focusout"&&(ee=A._wrapperState)&&ee.controlled&&A.type==="number"&&_t(A,"number",A.value)}switch(ee=E?Tn(E):window,e){case"focusin":(dc(ee)||ee.contentEditable==="true")&&(Sn=ee,Wa=E,mo=null);break;case"focusout":mo=Wa=Sn=null;break;case"mousedown":Va=!0;break;case"contextmenu":case"mouseup":case"dragend":Va=!1,bc(D,r,L);break;case"selectionchange":if(Wf)break;case"keydown":case"keyup":bc(D,r,L)}var te;if(Ua)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else kn?cc(e,r)&&(oe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(oe="onCompositionStart");oe&&(ac&&r.locale!=="ko"&&(kn||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&kn&&(te=tc()):(Ar=L,Aa="value"in Ar?Ar.value:Ar.textContent,kn=!0)),ee=vi(E,oe),0<ee.length&&(oe=new oc(oe,e,null,r,L),D.push({event:oe,listeners:ee}),te?oe.data=te:(te=uc(r),te!==null&&(oe.data=te)))),(te=Pf?zf(e,r):Af(e,r))&&(E=vi(E,"onBeforeInput"),0<E.length&&(L=new oc("onBeforeInput","beforeinput",null,r,L),D.push({event:L,listeners:E}),L.data=te))}Nc(D,t)})}function yo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function vi(e,t){for(var r=t+"Capture",i=[];e!==null;){var s=e,c=s.stateNode;s.tag===5&&c!==null&&(s=c,c=Ze(e,r),c!=null&&i.unshift(yo(e,c,s)),c=Ze(e,t),c!=null&&i.push(yo(e,c,s))),e=e.return}return i}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pc(e,t,r,i,s){for(var c=t._reactName,d=[];r!==null&&r!==i;){var y=r,b=y.alternate,E=y.stateNode;if(b!==null&&b===i)break;y.tag===5&&E!==null&&(y=E,s?(b=Ze(r,c),b!=null&&d.unshift(yo(r,b,y))):s||(b=Ze(r,c),b!=null&&d.push(yo(r,b,y)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var Qf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function zc(e){return(typeof e=="string"?e:""+e).replace(Qf,`
`).replace(Kf,"")}function wi(e,t,r){if(t=zc(t),zc(e)!==t&&r)throw Error(l(425))}function bi(){}var Ga=null,Ja=null;function Za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,Xf=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,Gf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(e){return Ac.resolve(null).then(e).catch(Jf)}:es;function Jf(e){setTimeout(function(){throw e})}function ts(e,t){var r=t,i=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(i===0){e.removeChild(s),ao(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=s}while(r);ao(t)}function Dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),er="__reactFiber$"+_n,xo="__reactProps$"+_n,ur="__reactContainer$"+_n,rs="__reactEvents$"+_n,Zf="__reactListeners$"+_n,em="__reactHandles$"+_n;function rn(e){var t=e[er];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ur]||r[er]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Lc(e);e!==null;){if(r=e[er])return r;e=Lc(e)}return t}e=r,r=e.parentNode}return null}function vo(e){return e=e[er]||e[ur],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function ki(e){return e[xo]||null}var ns=[],En=-1;function Fr(e){return{current:e}}function Ne(e){0>En||(e.current=ns[En],ns[En]=null,En--)}function Ee(e,t){En++,ns[En]=e.current,e.current=t}var Or={},ut=Fr(Or),xt=Fr(!1),nn=Or;function In(e,t){var r=e.type.contextTypes;if(!r)return Or;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},c;for(c in r)s[c]=t[c];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function vt(e){return e=e.childContextTypes,e!=null}function Si(){Ne(xt),Ne(ut)}function Dc(e,t,r){if(ut.current!==Or)throw Error(l(168));Ee(ut,t),Ee(xt,r)}function Fc(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(l(108,he(e)||"Unknown",s));return $({},r,i)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Or,nn=ut.current,Ee(ut,e),Ee(xt,xt.current),!0}function Oc(e,t,r){var i=e.stateNode;if(!i)throw Error(l(169));r?(e=Fc(e,t,nn),i.__reactInternalMemoizedMergedChildContext=e,Ne(xt),Ne(ut),Ee(ut,e)):Ne(xt),Ee(xt,r)}var dr=null,Ci=!1,os=!1;function Mc(e){dr===null?dr=[e]:dr.push(e)}function tm(e){Ci=!0,Mc(e)}function Mr(){if(!os&&dr!==null){os=!0;var e=0,t=je;try{var r=dr;for(je=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}dr=null,Ci=!1}catch(s){throw dr!==null&&(dr=dr.slice(e+1)),$l(_a,Mr),s}finally{je=t,os=!1}}return null}var Nn=[],Rn=0,_i=null,Ti=0,Dt=[],Ft=0,on=null,pr=1,fr="";function an(e,t){Nn[Rn++]=Ti,Nn[Rn++]=_i,_i=e,Ti=t}function Uc(e,t,r){Dt[Ft++]=pr,Dt[Ft++]=fr,Dt[Ft++]=on,on=e;var i=pr;e=fr;var s=32-Wt(i)-1;i&=~(1<<s),r+=1;var c=32-Wt(t)+s;if(30<c){var d=s-s%5;c=(i&(1<<d)-1).toString(32),i>>=d,s-=d,pr=1<<32-Wt(t)+s|r<<s|i,fr=c+e}else pr=1<<c|r<<s|i,fr=e}function is(e){e.return!==null&&(an(e,1),Uc(e,1,0))}function as(e){for(;e===_i;)_i=Nn[--Rn],Nn[Rn]=null,Ti=Nn[--Rn],Nn[Rn]=null;for(;e===on;)on=Dt[--Ft],Dt[Ft]=null,fr=Dt[--Ft],Dt[Ft]=null,pr=Dt[--Ft],Dt[Ft]=null}var It=null,Nt=null,Re=!1,qt=null;function $c(e,t){var r=$t(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Hc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Nt=Dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=on!==null?{id:pr,overflow:fr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=$t(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,It=e,Nt=null,!0):!1;default:return!1}}function ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ls(e){if(Re){var t=Nt;if(t){var r=t;if(!Hc(e,t)){if(ss(e))throw Error(l(418));t=Dr(r.nextSibling);var i=It;t&&Hc(e,t)?$c(i,r):(e.flags=e.flags&-4097|2,Re=!1,It=e)}}else{if(ss(e))throw Error(l(418));e.flags=e.flags&-4097|2,Re=!1,It=e}}}function Bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function Ei(e){if(e!==It)return!1;if(!Re)return Bc(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Za(e.type,e.memoizedProps)),t&&(t=Nt)){if(ss(e))throw Wc(),Error(l(418));for(;t;)$c(e,t),t=Dr(t.nextSibling)}if(Bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Nt=Dr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=It?Dr(e.stateNode.nextSibling):null;return!0}function Wc(){for(var e=Nt;e;)e=Dr(e.nextSibling)}function Pn(){Nt=It=null,Re=!1}function cs(e){qt===null?qt=[e]:qt.push(e)}var rm=J.ReactCurrentBatchConfig;function wo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var i=r.stateNode}if(!i)throw Error(l(147,e));var s=i,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(d){var y=s.refs;d===null?delete y[c]:y[c]=d},t._stringRef=c,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vc(e){var t=e._init;return t(e._payload)}function qc(e){function t(C,j){if(e){var _=C.deletions;_===null?(C.deletions=[j],C.flags|=16):_.push(j)}}function r(C,j){if(!e)return null;for(;j!==null;)t(C,j),j=j.sibling;return null}function i(C,j){for(C=new Map;j!==null;)j.key!==null?C.set(j.key,j):C.set(j.index,j),j=j.sibling;return C}function s(C,j){return C=Yr(C,j),C.index=0,C.sibling=null,C}function c(C,j,_){return C.index=_,e?(_=C.alternate,_!==null?(_=_.index,_<j?(C.flags|=2,j):_):(C.flags|=2,j)):(C.flags|=1048576,j)}function d(C){return e&&C.alternate===null&&(C.flags|=2),C}function y(C,j,_,F){return j===null||j.tag!==6?(j=el(_,C.mode,F),j.return=C,j):(j=s(j,_),j.return=C,j)}function b(C,j,_,F){var X=_.type;return X===ye?L(C,j,_.props.children,F,_.key):j!==null&&(j.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===re&&Vc(X)===j.type)?(F=s(j,_.props),F.ref=wo(C,j,_),F.return=C,F):(F=Zi(_.type,_.key,_.props,null,C.mode,F),F.ref=wo(C,j,_),F.return=C,F)}function E(C,j,_,F){return j===null||j.tag!==4||j.stateNode.containerInfo!==_.containerInfo||j.stateNode.implementation!==_.implementation?(j=tl(_,C.mode,F),j.return=C,j):(j=s(j,_.children||[]),j.return=C,j)}function L(C,j,_,F,X){return j===null||j.tag!==7?(j=mn(_,C.mode,F,X),j.return=C,j):(j=s(j,_),j.return=C,j)}function D(C,j,_){if(typeof j=="string"&&j!==""||typeof j=="number")return j=el(""+j,C.mode,_),j.return=C,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ne:return _=Zi(j.type,j.key,j.props,null,C.mode,_),_.ref=wo(C,null,j),_.return=C,_;case ie:return j=tl(j,C.mode,_),j.return=C,j;case re:var F=j._init;return D(C,F(j._payload),_)}if(Gr(j)||V(j))return j=mn(j,C.mode,_,null),j.return=C,j;Ii(C,j)}return null}function A(C,j,_,F){var X=j!==null?j.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return X!==null?null:y(C,j,""+_,F);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ne:return _.key===X?b(C,j,_,F):null;case ie:return _.key===X?E(C,j,_,F):null;case re:return X=_._init,A(C,j,X(_._payload),F)}if(Gr(_)||V(_))return X!==null?null:L(C,j,_,F,null);Ii(C,_)}return null}function H(C,j,_,F,X){if(typeof F=="string"&&F!==""||typeof F=="number")return C=C.get(_)||null,y(j,C,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ne:return C=C.get(F.key===null?_:F.key)||null,b(j,C,F,X);case ie:return C=C.get(F.key===null?_:F.key)||null,E(j,C,F,X);case re:var ee=F._init;return H(C,j,_,ee(F._payload),X)}if(Gr(F)||V(F))return C=C.get(_)||null,L(j,C,F,X,null);Ii(j,F)}return null}function q(C,j,_,F){for(var X=null,ee=null,te=j,oe=j=0,rt=null;te!==null&&oe<_.length;oe++){te.index>oe?(rt=te,te=null):rt=te.sibling;var we=A(C,te,_[oe],F);if(we===null){te===null&&(te=rt);break}e&&te&&we.alternate===null&&t(C,te),j=c(we,j,oe),ee===null?X=we:ee.sibling=we,ee=we,te=rt}if(oe===_.length)return r(C,te),Re&&an(C,oe),X;if(te===null){for(;oe<_.length;oe++)te=D(C,_[oe],F),te!==null&&(j=c(te,j,oe),ee===null?X=te:ee.sibling=te,ee=te);return Re&&an(C,oe),X}for(te=i(C,te);oe<_.length;oe++)rt=H(te,C,oe,_[oe],F),rt!==null&&(e&&rt.alternate!==null&&te.delete(rt.key===null?oe:rt.key),j=c(rt,j,oe),ee===null?X=rt:ee.sibling=rt,ee=rt);return e&&te.forEach(function(Qr){return t(C,Qr)}),Re&&an(C,oe),X}function Y(C,j,_,F){var X=V(_);if(typeof X!="function")throw Error(l(150));if(_=X.call(_),_==null)throw Error(l(151));for(var ee=X=null,te=j,oe=j=0,rt=null,we=_.next();te!==null&&!we.done;oe++,we=_.next()){te.index>oe?(rt=te,te=null):rt=te.sibling;var Qr=A(C,te,we.value,F);if(Qr===null){te===null&&(te=rt);break}e&&te&&Qr.alternate===null&&t(C,te),j=c(Qr,j,oe),ee===null?X=Qr:ee.sibling=Qr,ee=Qr,te=rt}if(we.done)return r(C,te),Re&&an(C,oe),X;if(te===null){for(;!we.done;oe++,we=_.next())we=D(C,we.value,F),we!==null&&(j=c(we,j,oe),ee===null?X=we:ee.sibling=we,ee=we);return Re&&an(C,oe),X}for(te=i(C,te);!we.done;oe++,we=_.next())we=H(te,C,oe,we.value,F),we!==null&&(e&&we.alternate!==null&&te.delete(we.key===null?oe:we.key),j=c(we,j,oe),ee===null?X=we:ee.sibling=we,ee=we);return e&&te.forEach(function(Lm){return t(C,Lm)}),Re&&an(C,oe),X}function Be(C,j,_,F){if(typeof _=="object"&&_!==null&&_.type===ye&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ne:e:{for(var X=_.key,ee=j;ee!==null;){if(ee.key===X){if(X=_.type,X===ye){if(ee.tag===7){r(C,ee.sibling),j=s(ee,_.props.children),j.return=C,C=j;break e}}else if(ee.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===re&&Vc(X)===ee.type){r(C,ee.sibling),j=s(ee,_.props),j.ref=wo(C,ee,_),j.return=C,C=j;break e}r(C,ee);break}else t(C,ee);ee=ee.sibling}_.type===ye?(j=mn(_.props.children,C.mode,F,_.key),j.return=C,C=j):(F=Zi(_.type,_.key,_.props,null,C.mode,F),F.ref=wo(C,j,_),F.return=C,C=F)}return d(C);case ie:e:{for(ee=_.key;j!==null;){if(j.key===ee)if(j.tag===4&&j.stateNode.containerInfo===_.containerInfo&&j.stateNode.implementation===_.implementation){r(C,j.sibling),j=s(j,_.children||[]),j.return=C,C=j;break e}else{r(C,j);break}else t(C,j);j=j.sibling}j=tl(_,C.mode,F),j.return=C,C=j}return d(C);case re:return ee=_._init,Be(C,j,ee(_._payload),F)}if(Gr(_))return q(C,j,_,F);if(V(_))return Y(C,j,_,F);Ii(C,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,j!==null&&j.tag===6?(r(C,j.sibling),j=s(j,_),j.return=C,C=j):(r(C,j),j=el(_,C.mode,F),j.return=C,C=j),d(C)):r(C,j)}return Be}var zn=qc(!0),Yc=qc(!1),Ni=Fr(null),Ri=null,An=null,us=null;function ds(){us=An=Ri=null}function ps(e){var t=Ni.current;Ne(Ni),e._currentValue=t}function fs(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Ln(e,t){Ri=e,us=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(wt=!0),e.firstContext=null)}function Ot(e){var t=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Ri===null)throw Error(l(308));An=e,Ri.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var sn=null;function ms(e){sn===null?sn=[e]:sn.push(e)}function Qc(e,t,r,i){var s=t.interleaved;return s===null?(r.next=r,ms(t)):(r.next=s.next,s.next=r),t.interleaved=r,mr(e,i)}function mr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ur=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $r(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ve&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,mr(e,r)}return s=i.interleaved,s===null?(t.next=t,ms(i)):(t.next=s.next,s.next=t),i.interleaved=t,mr(e,r)}function Pi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Ia(e,r)}}function Xc(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var s=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?s=c=d:c=c.next=d,r=r.next}while(r!==null);c===null?s=c=t:c=c.next=t}else s=c=t;r={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function zi(e,t,r,i){var s=e.updateQueue;Ur=!1;var c=s.firstBaseUpdate,d=s.lastBaseUpdate,y=s.shared.pending;if(y!==null){s.shared.pending=null;var b=y,E=b.next;b.next=null,d===null?c=E:d.next=E,d=b;var L=e.alternate;L!==null&&(L=L.updateQueue,y=L.lastBaseUpdate,y!==d&&(y===null?L.firstBaseUpdate=E:y.next=E,L.lastBaseUpdate=b))}if(c!==null){var D=s.baseState;d=0,L=E=b=null,y=c;do{var A=y.lane,H=y.eventTime;if((i&A)===A){L!==null&&(L=L.next={eventTime:H,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var q=e,Y=y;switch(A=t,H=r,Y.tag){case 1:if(q=Y.payload,typeof q=="function"){D=q.call(H,D,A);break e}D=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Y.payload,A=typeof q=="function"?q.call(H,D,A):q,A==null)break e;D=$({},D,A);break e;case 2:Ur=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,A=s.effects,A===null?s.effects=[y]:A.push(y))}else H={eventTime:H,lane:A,tag:y.tag,payload:y.payload,callback:y.callback,next:null},L===null?(E=L=H,b=D):L=L.next=H,d|=A;if(y=y.next,y===null){if(y=s.shared.pending,y===null)break;A=y,y=A.next,A.next=null,s.lastBaseUpdate=A,s.shared.pending=null}}while(!0);if(L===null&&(b=D),s.baseState=b,s.firstBaseUpdate=E,s.lastBaseUpdate=L,t=s.shared.interleaved,t!==null){s=t;do d|=s.lane,s=s.next;while(s!==t)}else c===null&&(s.shared.lanes=0);un|=d,e.lanes=d,e.memoizedState=D}}function Gc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=r,typeof s!="function")throw Error(l(191,s));s.call(i)}}}var bo={},tr=Fr(bo),ko=Fr(bo),So=Fr(bo);function ln(e){if(e===bo)throw Error(l(174));return e}function gs(e,t){switch(Ee(So,t),Ee(ko,e),Ee(tr,bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kn(t,e)}Ne(tr),Ee(tr,t)}function Dn(){Ne(tr),Ne(ko),Ne(So)}function Jc(e){ln(So.current);var t=ln(tr.current),r=Kn(t,e.type);t!==r&&(Ee(ko,e),Ee(tr,r))}function ys(e){ko.current===e&&(Ne(tr),Ne(ko))}var Ae=Fr(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xs=[];function vs(){for(var e=0;e<xs.length;e++)xs[e]._workInProgressVersionPrimary=null;xs.length=0}var Li=J.ReactCurrentDispatcher,ws=J.ReactCurrentBatchConfig,cn=0,Le=null,Xe=null,et=null,Di=!1,jo=!1,Co=0,nm=0;function dt(){throw Error(l(321))}function bs(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Vt(e[r],t[r]))return!1;return!0}function ks(e,t,r,i,s,c){if(cn=c,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Li.current=e===null||e.memoizedState===null?sm:lm,e=r(i,s),jo){c=0;do{if(jo=!1,Co=0,25<=c)throw Error(l(301));c+=1,et=Xe=null,t.updateQueue=null,Li.current=cm,e=r(i,s)}while(jo)}if(Li.current=Mi,t=Xe!==null&&Xe.next!==null,cn=0,et=Xe=Le=null,Di=!1,t)throw Error(l(300));return e}function Ss(){var e=Co!==0;return Co=0,e}function rr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Le.memoizedState=et=e:et=et.next=e,et}function Mt(){if(Xe===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=et===null?Le.memoizedState:et.next;if(t!==null)et=t,Xe=e;else{if(e===null)throw Error(l(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},et===null?Le.memoizedState=et=e:et=et.next=e}return et}function _o(e,t){return typeof t=="function"?t(e):t}function js(e){var t=Mt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var i=Xe,s=i.baseQueue,c=r.pending;if(c!==null){if(s!==null){var d=s.next;s.next=c.next,c.next=d}i.baseQueue=s=c,r.pending=null}if(s!==null){c=s.next,i=i.baseState;var y=d=null,b=null,E=c;do{var L=E.lane;if((cn&L)===L)b!==null&&(b=b.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),i=E.hasEagerState?E.eagerState:e(i,E.action);else{var D={lane:L,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};b===null?(y=b=D,d=i):b=b.next=D,Le.lanes|=L,un|=L}E=E.next}while(E!==null&&E!==c);b===null?d=i:b.next=y,Vt(i,t.memoizedState)||(wt=!0),t.memoizedState=i,t.baseState=d,t.baseQueue=b,r.lastRenderedState=i}if(e=r.interleaved,e!==null){s=e;do c=s.lane,Le.lanes|=c,un|=c,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Cs(e){var t=Mt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var i=r.dispatch,s=r.pending,c=t.memoizedState;if(s!==null){r.pending=null;var d=s=s.next;do c=e(c,d.action),d=d.next;while(d!==s);Vt(c,t.memoizedState)||(wt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,i]}function Zc(){}function eu(e,t){var r=Le,i=Mt(),s=t(),c=!Vt(i.memoizedState,s);if(c&&(i.memoizedState=s,wt=!0),i=i.queue,_s(nu.bind(null,r,i,e),[e]),i.getSnapshot!==t||c||et!==null&&et.memoizedState.tag&1){if(r.flags|=2048,To(9,ru.bind(null,r,i,s,t),void 0,null),tt===null)throw Error(l(349));(cn&30)!==0||tu(r,t,s)}return s}function tu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ru(e,t,r,i){t.value=r,t.getSnapshot=i,ou(t)&&iu(e)}function nu(e,t,r){return r(function(){ou(t)&&iu(e)})}function ou(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Vt(e,r)}catch{return!0}}function iu(e){var t=mr(e,1);t!==null&&Xt(t,e,1,-1)}function au(e){var t=rr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:e},t.queue=e,e=e.dispatch=am.bind(null,Le,e),[t.memoizedState,e]}function To(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function su(){return Mt().memoizedState}function Fi(e,t,r,i){var s=rr();Le.flags|=e,s.memoizedState=To(1|t,r,void 0,i===void 0?null:i)}function Oi(e,t,r,i){var s=Mt();i=i===void 0?null:i;var c=void 0;if(Xe!==null){var d=Xe.memoizedState;if(c=d.destroy,i!==null&&bs(i,d.deps)){s.memoizedState=To(t,r,c,i);return}}Le.flags|=e,s.memoizedState=To(1|t,r,c,i)}function lu(e,t){return Fi(8390656,8,e,t)}function _s(e,t){return Oi(2048,8,e,t)}function cu(e,t){return Oi(4,2,e,t)}function uu(e,t){return Oi(4,4,e,t)}function du(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pu(e,t,r){return r=r!=null?r.concat([e]):null,Oi(4,4,du.bind(null,t,e),r)}function Ts(){}function fu(e,t){var r=Mt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&bs(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function mu(e,t){var r=Mt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&bs(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function hu(e,t,r){return(cn&21)===0?(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=r):(Vt(r,t)||(r=Vl(),Le.lanes|=r,un|=r,e.baseState=!0),t)}function om(e,t){var r=je;je=r!==0&&4>r?r:4,e(!0);var i=ws.transition;ws.transition={};try{e(!1),t()}finally{je=r,ws.transition=i}}function gu(){return Mt().memoizedState}function im(e,t,r){var i=Vr(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},yu(e))xu(t,r);else if(r=Qc(e,t,r,i),r!==null){var s=yt();Xt(r,e,i,s),vu(r,t,i)}}function am(e,t,r){var i=Vr(e),s={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(yu(e))xu(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,y=c(d,r);if(s.hasEagerState=!0,s.eagerState=y,Vt(y,d)){var b=t.interleaved;b===null?(s.next=s,ms(t)):(s.next=b.next,b.next=s),t.interleaved=s;return}}catch{}finally{}r=Qc(e,t,s,i),r!==null&&(s=yt(),Xt(r,e,i,s),vu(r,t,i))}}function yu(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function xu(e,t){jo=Di=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function vu(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Ia(e,r)}}var Mi={readContext:Ot,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},sm={readContext:Ot,useCallback:function(e,t){return rr().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:lu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Fi(4194308,4,du.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fi(4,2,e,t)},useMemo:function(e,t){var r=rr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=rr();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=im.bind(null,Le,e),[i.memoizedState,e]},useRef:function(e){var t=rr();return e={current:e},t.memoizedState=e},useState:au,useDebugValue:Ts,useDeferredValue:function(e){return rr().memoizedState=e},useTransition:function(){var e=au(!1),t=e[0];return e=om.bind(null,e[1]),rr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Le,s=rr();if(Re){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),tt===null)throw Error(l(349));(cn&30)!==0||tu(i,t,r)}s.memoizedState=r;var c={value:r,getSnapshot:t};return s.queue=c,lu(nu.bind(null,i,c,e),[e]),i.flags|=2048,To(9,ru.bind(null,i,c,r,t),void 0,null),r},useId:function(){var e=rr(),t=tt.identifierPrefix;if(Re){var r=fr,i=pr;r=(i&~(1<<32-Wt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Co++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=nm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lm={readContext:Ot,useCallback:fu,useContext:Ot,useEffect:_s,useImperativeHandle:pu,useInsertionEffect:cu,useLayoutEffect:uu,useMemo:mu,useReducer:js,useRef:su,useState:function(){return js(_o)},useDebugValue:Ts,useDeferredValue:function(e){var t=Mt();return hu(t,Xe.memoizedState,e)},useTransition:function(){var e=js(_o)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:Zc,useSyncExternalStore:eu,useId:gu,unstable_isNewReconciler:!1},cm={readContext:Ot,useCallback:fu,useContext:Ot,useEffect:_s,useImperativeHandle:pu,useInsertionEffect:cu,useLayoutEffect:uu,useMemo:mu,useReducer:Cs,useRef:su,useState:function(){return Cs(_o)},useDebugValue:Ts,useDeferredValue:function(e){var t=Mt();return Xe===null?t.memoizedState=e:hu(t,Xe.memoizedState,e)},useTransition:function(){var e=Cs(_o)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:Zc,useSyncExternalStore:eu,useId:gu,unstable_isNewReconciler:!1};function Yt(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Es(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:$({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ui={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=yt(),s=Vr(e),c=hr(i,s);c.payload=t,r!=null&&(c.callback=r),t=$r(e,c,s),t!==null&&(Xt(t,e,s,i),Pi(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=yt(),s=Vr(e),c=hr(i,s);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=$r(e,c,s),t!==null&&(Xt(t,e,s,i),Pi(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=yt(),i=Vr(e),s=hr(r,i);s.tag=2,t!=null&&(s.callback=t),t=$r(e,s,i),t!==null&&(Xt(t,e,i,r),Pi(t,e,i))}};function wu(e,t,r,i,s,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,d):t.prototype&&t.prototype.isPureReactComponent?!fo(r,i)||!fo(s,c):!0}function bu(e,t,r){var i=!1,s=Or,c=t.contextType;return typeof c=="object"&&c!==null?c=Ot(c):(s=vt(t)?nn:ut.current,i=t.contextTypes,c=(i=i!=null)?In(e,s):Or),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ui,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=c),t}function ku(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Ui.enqueueReplaceState(t,t.state,null)}function Is(e,t,r,i){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},hs(e);var c=t.contextType;typeof c=="object"&&c!==null?s.context=Ot(c):(c=vt(t)?nn:ut.current,s.context=In(e,c)),s.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Es(e,t,c,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ui.enqueueReplaceState(s,s.state,null),zi(e,r,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var r="",i=t;do r+=le(i),i=i.return;while(i);var s=r}catch(c){s=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:s,digest:null}}function Ns(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Rs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var um=typeof WeakMap=="function"?WeakMap:Map;function Su(e,t,r){r=hr(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Yi||(Yi=!0,qs=i),Rs(e,t)},r}function ju(e,t,r){r=hr(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;r.payload=function(){return i(s)},r.callback=function(){Rs(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){Rs(e,t),typeof i!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function Cu(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new um;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(r)||(s.add(r),e=jm.bind(null,e,t,r),t.then(e,e))}function _u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tu(e,t,r,i,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=hr(-1,1),t.tag=2,$r(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var dm=J.ReactCurrentOwner,wt=!1;function gt(e,t,r,i){t.child=e===null?Yc(t,null,r,i):zn(t,e.child,r,i)}function Eu(e,t,r,i,s){r=r.render;var c=t.ref;return Ln(t,s),i=ks(e,t,r,i,c,s),r=Ss(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,gr(e,t,s)):(Re&&r&&is(t),t.flags|=1,gt(e,t,i,s),t.child)}function Iu(e,t,r,i,s){if(e===null){var c=r.type;return typeof c=="function"&&!Zs(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,Nu(e,t,c,i,s)):(e=Zi(r.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&s)===0){var d=c.memoizedProps;if(r=r.compare,r=r!==null?r:fo,r(d,i)&&e.ref===t.ref)return gr(e,t,s)}return t.flags|=1,e=Yr(c,i),e.ref=t.ref,e.return=t,t.child=e}function Nu(e,t,r,i,s){if(e!==null){var c=e.memoizedProps;if(fo(c,i)&&e.ref===t.ref)if(wt=!1,t.pendingProps=i=c,(e.lanes&s)!==0)(e.flags&131072)!==0&&(wt=!0);else return t.lanes=e.lanes,gr(e,t,s)}return Ps(e,t,r,i,s)}function Ru(e,t,r){var i=t.pendingProps,s=i.children,c=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Mn,Rt),Rt|=r;else{if((r&1073741824)===0)return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Mn,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=c!==null?c.baseLanes:r,Ee(Mn,Rt),Rt|=i}else c!==null?(i=c.baseLanes|r,t.memoizedState=null):i=r,Ee(Mn,Rt),Rt|=i;return gt(e,t,s,r),t.child}function Pu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ps(e,t,r,i,s){var c=vt(r)?nn:ut.current;return c=In(t,c),Ln(t,s),r=ks(e,t,r,i,c,s),i=Ss(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,gr(e,t,s)):(Re&&i&&is(t),t.flags|=1,gt(e,t,r,s),t.child)}function zu(e,t,r,i,s){if(vt(r)){var c=!0;ji(t)}else c=!1;if(Ln(t,s),t.stateNode===null)Hi(e,t),bu(t,r,i),Is(t,r,i,s),i=!0;else if(e===null){var d=t.stateNode,y=t.memoizedProps;d.props=y;var b=d.context,E=r.contextType;typeof E=="object"&&E!==null?E=Ot(E):(E=vt(r)?nn:ut.current,E=In(t,E));var L=r.getDerivedStateFromProps,D=typeof L=="function"||typeof d.getSnapshotBeforeUpdate=="function";D||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==i||b!==E)&&ku(t,d,i,E),Ur=!1;var A=t.memoizedState;d.state=A,zi(t,i,d,s),b=t.memoizedState,y!==i||A!==b||xt.current||Ur?(typeof L=="function"&&(Es(t,r,L,i),b=t.memoizedState),(y=Ur||wu(t,r,y,i,A,b,E))?(D||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=b),d.props=i,d.state=b,d.context=E,i=y):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,Kc(e,t),y=t.memoizedProps,E=t.type===t.elementType?y:Yt(t.type,y),d.props=E,D=t.pendingProps,A=d.context,b=r.contextType,typeof b=="object"&&b!==null?b=Ot(b):(b=vt(r)?nn:ut.current,b=In(t,b));var H=r.getDerivedStateFromProps;(L=typeof H=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==D||A!==b)&&ku(t,d,i,b),Ur=!1,A=t.memoizedState,d.state=A,zi(t,i,d,s);var q=t.memoizedState;y!==D||A!==q||xt.current||Ur?(typeof H=="function"&&(Es(t,r,H,i),q=t.memoizedState),(E=Ur||wu(t,r,E,i,A,q,b)||!1)?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,q,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,q,b)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=q),d.props=i,d.state=q,d.context=b,i=E):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),i=!1)}return zs(e,t,r,i,c,s)}function zs(e,t,r,i,s,c){Pu(e,t);var d=(t.flags&128)!==0;if(!i&&!d)return s&&Oc(t,r,!1),gr(e,t,c);i=t.stateNode,dm.current=t;var y=d&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&d?(t.child=zn(t,e.child,null,c),t.child=zn(t,null,y,c)):gt(e,t,y,c),t.memoizedState=i.state,s&&Oc(t,r,!0),t.child}function Au(e){var t=e.stateNode;t.pendingContext?Dc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dc(e,t.context,!1),gs(e,t.containerInfo)}function Lu(e,t,r,i,s){return Pn(),cs(s),t.flags|=256,gt(e,t,r,i),t.child}var As={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function Du(e,t,r){var i=t.pendingProps,s=Ae.current,c=!1,d=(t.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(s&2)!==0),y?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ee(Ae,s&1),e===null)return ls(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=i.children,e=i.fallback,c?(i=t.mode,c=t.child,d={mode:"hidden",children:d},(i&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=d):c=ea(d,i,0,null),e=mn(e,i,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Ls(r),t.memoizedState=As,e):Ds(t,d));if(s=e.memoizedState,s!==null&&(y=s.dehydrated,y!==null))return pm(e,t,d,i,y,s,r);if(c){c=i.fallback,d=t.mode,s=e.child,y=s.sibling;var b={mode:"hidden",children:i.children};return(d&1)===0&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=b,t.deletions=null):(i=Yr(s,b),i.subtreeFlags=s.subtreeFlags&14680064),y!==null?c=Yr(y,c):(c=mn(c,d,r,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,i=c,c=t.child,d=e.child.memoizedState,d=d===null?Ls(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=e.childLanes&~r,t.memoizedState=As,i}return c=e.child,e=c.sibling,i=Yr(c,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Ds(e,t){return t=ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $i(e,t,r,i){return i!==null&&cs(i),zn(t,e.child,null,r),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pm(e,t,r,i,s,c,d){if(r)return t.flags&256?(t.flags&=-257,i=Ns(Error(l(422))),$i(e,t,d,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=i.fallback,s=t.mode,i=ea({mode:"visible",children:i.children},s,0,null),c=mn(c,s,d,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,(t.mode&1)!==0&&zn(t,e.child,null,d),t.child.memoizedState=Ls(d),t.memoizedState=As,c);if((t.mode&1)===0)return $i(e,t,d,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var y=i.dgst;return i=y,c=Error(l(419)),i=Ns(c,i,void 0),$i(e,t,d,i)}if(y=(d&e.childLanes)!==0,wt||y){if(i=tt,i!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(i.suspendedLanes|d))!==0?0:s,s!==0&&s!==c.retryLane&&(c.retryLane=s,mr(e,s),Xt(i,e,s,-1))}return Js(),i=Ns(Error(l(421))),$i(e,t,d,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Cm.bind(null,e),s._reactRetry=t,null):(e=c.treeContext,Nt=Dr(s.nextSibling),It=t,Re=!0,qt=null,e!==null&&(Dt[Ft++]=pr,Dt[Ft++]=fr,Dt[Ft++]=on,pr=e.id,fr=e.overflow,on=t),t=Ds(t,i.children),t.flags|=4096,t)}function Fu(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),fs(e.return,t,r)}function Fs(e,t,r,i,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:s}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=r,c.tailMode=s)}function Ou(e,t,r){var i=t.pendingProps,s=i.revealOrder,c=i.tail;if(gt(e,t,i.children,r),i=Ae.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,r,t);else if(e.tag===19)Fu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Ee(Ae,i),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Ai(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Fs(t,!1,s,r,c);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ai(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Fs(t,!0,r,null,c);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=Yr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function fm(e,t,r){switch(t.tag){case 3:Au(t),Pn();break;case 5:Jc(t);break;case 1:vt(t.type)&&ji(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;Ee(Ni,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Ee(Ae,Ae.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Du(e,t,r):(Ee(Ae,Ae.current&1),e=gr(e,t,r),e!==null?e.sibling:null);Ee(Ae,Ae.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Ou(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Ae,Ae.current),i)break;return null;case 22:case 23:return t.lanes=0,Ru(e,t,r)}return gr(e,t,r)}var Mu,Os,Uu,$u;Mu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Os=function(){},Uu=function(e,t,r,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,ln(tr.current);var c=null;switch(r){case"input":s=Jt(e,s),i=Jt(e,i),c=[];break;case"select":s=$({},s,{value:void 0}),i=$({},i,{value:void 0}),c=[];break;case"textarea":s=it(e,s),i=it(e,i),c=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=bi)}vn(r,i);var d;r=null;for(E in s)if(!i.hasOwnProperty(E)&&s.hasOwnProperty(E)&&s[E]!=null)if(E==="style"){var y=s[E];for(d in y)y.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(p.hasOwnProperty(E)?c||(c=[]):(c=c||[]).push(E,null));for(E in i){var b=i[E];if(y=s!=null?s[E]:void 0,i.hasOwnProperty(E)&&b!==y&&(b!=null||y!=null))if(E==="style")if(y){for(d in y)!y.hasOwnProperty(d)||b&&b.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in b)b.hasOwnProperty(d)&&y[d]!==b[d]&&(r||(r={}),r[d]=b[d])}else r||(c||(c=[]),c.push(E,r)),r=b;else E==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,y=y?y.__html:void 0,b!=null&&y!==b&&(c=c||[]).push(E,b)):E==="children"?typeof b!="string"&&typeof b!="number"||(c=c||[]).push(E,""+b):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(p.hasOwnProperty(E)?(b!=null&&E==="onScroll"&&Ie("scroll",e),c||y===b||(c=[])):(c=c||[]).push(E,b))}r&&(c=c||[]).push("style",r);var E=c;(t.updateQueue=E)&&(t.flags|=4)}},$u=function(e,t,r,i){r!==i&&(t.flags|=4)};function Eo(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function mm(e,t,r){var i=t.pendingProps;switch(as(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return vt(t.type)&&Si(),pt(t),null;case 3:return i=t.stateNode,Dn(),Ne(xt),Ne(ut),vs(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qt!==null&&(Ks(qt),qt=null))),Os(e,t),pt(t),null;case 5:ys(t);var s=ln(So.current);if(r=t.type,e!==null&&t.stateNode!=null)Uu(e,t,r,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(l(166));return pt(t),null}if(e=ln(tr.current),Ei(t)){i=t.stateNode,r=t.type;var c=t.memoizedProps;switch(i[er]=t,i[xo]=c,e=(t.mode&1)!==0,r){case"dialog":Ie("cancel",i),Ie("close",i);break;case"iframe":case"object":case"embed":Ie("load",i);break;case"video":case"audio":for(s=0;s<ho.length;s++)Ie(ho[s],i);break;case"source":Ie("error",i);break;case"img":case"image":case"link":Ie("error",i),Ie("load",i);break;case"details":Ie("toggle",i);break;case"input":Xo(i,c),Ie("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!c.multiple},Ie("invalid",i);break;case"textarea":lr(i,c),Ie("invalid",i)}vn(r,c),s=null;for(var d in c)if(c.hasOwnProperty(d)){var y=c[d];d==="children"?typeof y=="string"?i.textContent!==y&&(c.suppressHydrationWarning!==!0&&wi(i.textContent,y,e),s=["children",y]):typeof y=="number"&&i.textContent!==""+y&&(c.suppressHydrationWarning!==!0&&wi(i.textContent,y,e),s=["children",""+y]):p.hasOwnProperty(d)&&y!=null&&d==="onScroll"&&Ie("scroll",i)}switch(r){case"input":ar(i),Qn(i,c,!0);break;case"textarea":ar(i),Jo(i);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(i.onclick=bi)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jr(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(r,{is:i.is}):(e=d.createElement(r),r==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,r),e[er]=t,e[xo]=i,Mu(e,t,!1,!1),t.stateNode=e;e:{switch(d=Xn(r,i),r){case"dialog":Ie("cancel",e),Ie("close",e),s=i;break;case"iframe":case"object":case"embed":Ie("load",e),s=i;break;case"video":case"audio":for(s=0;s<ho.length;s++)Ie(ho[s],e);s=i;break;case"source":Ie("error",e),s=i;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),s=i;break;case"details":Ie("toggle",e),s=i;break;case"input":Xo(e,i),s=Jt(e,i),Ie("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=$({},i,{value:void 0}),Ie("invalid",e);break;case"textarea":lr(e,i),s=it(e,i),Ie("invalid",e);break;default:s=i}vn(r,s),y=s;for(c in y)if(y.hasOwnProperty(c)){var b=y[c];c==="style"?ei(e,b):c==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&xn(e,b)):c==="children"?typeof b=="string"?(r!=="textarea"||b!=="")&&zt(e,b):typeof b=="number"&&zt(e,""+b):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(p.hasOwnProperty(c)?b!=null&&c==="onScroll"&&Ie("scroll",e):b!=null&&ge(e,c,b,d))}switch(r){case"input":ar(e),Qn(e,i,!1);break;case"textarea":ar(e),Jo(e);break;case"option":i.value!=null&&e.setAttribute("value",""+de(i.value));break;case"select":e.multiple=!!i.multiple,c=i.value,c!=null?Sr(e,!!i.multiple,c,!1):i.defaultValue!=null&&Sr(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=bi)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)$u(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(r=ln(So.current),ln(tr.current),Ei(t)){if(i=t.stateNode,r=t.memoizedProps,i[er]=t,(c=i.nodeValue!==r)&&(e=It,e!==null))switch(e.tag){case 3:wi(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(i.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[er]=t,t.stateNode=i}return pt(t),null;case 13:if(Ne(Ae),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&Nt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Wc(),Pn(),t.flags|=98560,c=!1;else if(c=Ei(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[er]=t}else Pn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pt(t),c=!1}else qt!==null&&(Ks(qt),qt=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ae.current&1)!==0?Ge===0&&(Ge=3):Js())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return Dn(),Os(e,t),e===null&&go(t.stateNode.containerInfo),pt(t),null;case 10:return ps(t.type._context),pt(t),null;case 17:return vt(t.type)&&Si(),pt(t),null;case 19:if(Ne(Ae),c=t.memoizedState,c===null)return pt(t),null;if(i=(t.flags&128)!==0,d=c.rendering,d===null)if(i)Eo(c,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Ai(e),d!==null){for(t.flags|=128,Eo(c,!1),i=d.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)c=r,e=i,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,e=d.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ee(Ae,Ae.current&1|2),t.child}e=e.sibling}c.tail!==null&&He()>Un&&(t.flags|=128,i=!0,Eo(c,!1),t.lanes=4194304)}else{if(!i)if(e=Ai(d),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Eo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Re)return pt(t),null}else 2*He()-c.renderingStartTime>Un&&r!==1073741824&&(t.flags|=128,i=!0,Eo(c,!1),t.lanes=4194304);c.isBackwards?(d.sibling=t.child,t.child=d):(r=c.last,r!==null?r.sibling=d:t.child=d,c.last=d)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=He(),t.sibling=null,r=Ae.current,Ee(Ae,i?r&1|2:r&1),t):(pt(t),null);case 22:case 23:return Gs(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(Rt&1073741824)!==0&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function hm(e,t){switch(as(t),t.tag){case 1:return vt(t.type)&&Si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),Ne(xt),Ne(ut),vs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ys(t),null;case 13:if(Ne(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Ae),null;case 4:return Dn(),null;case 10:return ps(t.type._context),null;case 22:case 23:return Gs(),null;case 24:return null;default:return null}}var Bi=!1,ft=!1,gm=typeof WeakSet=="function"?WeakSet:Set,W=null;function On(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Oe(e,t,i)}else r.current=null}function Ms(e,t,r){try{r()}catch(i){Oe(e,t,i)}}var Hu=!1;function ym(e,t){if(Ga=ci,e=wc(),Ba(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var s=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var d=0,y=-1,b=-1,E=0,L=0,D=e,A=null;t:for(;;){for(var H;D!==r||s!==0&&D.nodeType!==3||(y=d+s),D!==c||i!==0&&D.nodeType!==3||(b=d+i),D.nodeType===3&&(d+=D.nodeValue.length),(H=D.firstChild)!==null;)A=D,D=H;for(;;){if(D===e)break t;if(A===r&&++E===s&&(y=d),A===c&&++L===i&&(b=d),(H=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=H}r=y===-1||b===-1?null:{start:y,end:b}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ja={focusedElem:e,selectionRange:r},ci=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var Y=q.memoizedProps,Be=q.memoizedState,C=t.stateNode,j=C.getSnapshotBeforeUpdate(t.elementType===t.type?Y:Yt(t.type,Y),Be);C.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(F){Oe(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return q=Hu,Hu=!1,q}function Io(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var c=s.destroy;s.destroy=void 0,c!==void 0&&Ms(t,r,c)}s=s.next}while(s!==i)}}function Wi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Us(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Bu(e){var t=e.alternate;t!==null&&(e.alternate=null,Bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[er],delete t[xo],delete t[rs],delete t[Zf],delete t[em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wu(e){return e.tag===5||e.tag===3||e.tag===4}function Vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $s(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=bi));else if(i!==4&&(e=e.child,e!==null))for($s(e,t,r),e=e.sibling;e!==null;)$s(e,t,r),e=e.sibling}function Hs(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Hs(e,t,r),e=e.sibling;e!==null;)Hs(e,t,r),e=e.sibling}var st=null,Qt=!1;function Hr(e,t,r){for(r=r.child;r!==null;)qu(e,t,r),r=r.sibling}function qu(e,t,r){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(ni,r)}catch{}switch(r.tag){case 5:ft||On(r,t);case 6:var i=st,s=Qt;st=null,Hr(e,t,r),st=i,Qt=s,st!==null&&(Qt?(e=st,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):st.removeChild(r.stateNode));break;case 18:st!==null&&(Qt?(e=st,r=r.stateNode,e.nodeType===8?ts(e.parentNode,r):e.nodeType===1&&ts(e,r),ao(e)):ts(st,r.stateNode));break;case 4:i=st,s=Qt,st=r.stateNode.containerInfo,Qt=!0,Hr(e,t,r),st=i,Qt=s;break;case 0:case 11:case 14:case 15:if(!ft&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var c=s,d=c.destroy;c=c.tag,d!==void 0&&((c&2)!==0||(c&4)!==0)&&Ms(r,t,d),s=s.next}while(s!==i)}Hr(e,t,r);break;case 1:if(!ft&&(On(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(y){Oe(r,t,y)}Hr(e,t,r);break;case 21:Hr(e,t,r);break;case 22:r.mode&1?(ft=(i=ft)||r.memoizedState!==null,Hr(e,t,r),ft=i):Hr(e,t,r);break;default:Hr(e,t,r)}}function Yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new gm),t.forEach(function(i){var s=_m.bind(null,e,i);r.has(i)||(r.add(i),i.then(s,s))})}}function Kt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];try{var c=e,d=t,y=d;e:for(;y!==null;){switch(y.tag){case 5:st=y.stateNode,Qt=!1;break e;case 3:st=y.stateNode.containerInfo,Qt=!0;break e;case 4:st=y.stateNode.containerInfo,Qt=!0;break e}y=y.return}if(st===null)throw Error(l(160));qu(c,d,s),st=null,Qt=!1;var b=s.alternate;b!==null&&(b.return=null),s.return=null}catch(E){Oe(s,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qu(t,e),t=t.sibling}function Qu(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),nr(e),i&4){try{Io(3,e,e.return),Wi(3,e)}catch(Y){Oe(e,e.return,Y)}try{Io(5,e,e.return)}catch(Y){Oe(e,e.return,Y)}}break;case 1:Kt(t,e),nr(e),i&512&&r!==null&&On(r,r.return);break;case 5:if(Kt(t,e),nr(e),i&512&&r!==null&&On(r,r.return),e.flags&32){var s=e.stateNode;try{zt(s,"")}catch(Y){Oe(e,e.return,Y)}}if(i&4&&(s=e.stateNode,s!=null)){var c=e.memoizedProps,d=r!==null?r.memoizedProps:c,y=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{y==="input"&&c.type==="radio"&&c.name!=null&&Yn(s,c),Xn(y,d);var E=Xn(y,c);for(d=0;d<b.length;d+=2){var L=b[d],D=b[d+1];L==="style"?ei(s,D):L==="dangerouslySetInnerHTML"?xn(s,D):L==="children"?zt(s,D):ge(s,L,D,E)}switch(y){case"input":sr(s,c);break;case"textarea":Go(s,c);break;case"select":var A=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!c.multiple;var H=c.value;H!=null?Sr(s,!!c.multiple,H,!1):A!==!!c.multiple&&(c.defaultValue!=null?Sr(s,!!c.multiple,c.defaultValue,!0):Sr(s,!!c.multiple,c.multiple?[]:"",!1))}s[xo]=c}catch(Y){Oe(e,e.return,Y)}}break;case 6:if(Kt(t,e),nr(e),i&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,c=e.memoizedProps;try{s.nodeValue=c}catch(Y){Oe(e,e.return,Y)}}break;case 3:if(Kt(t,e),nr(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(Y){Oe(e,e.return,Y)}break;case 4:Kt(t,e),nr(e);break;case 13:Kt(t,e),nr(e),s=e.child,s.flags&8192&&(c=s.memoizedState!==null,s.stateNode.isHidden=c,!c||s.alternate!==null&&s.alternate.memoizedState!==null||(Vs=He())),i&4&&Yu(e);break;case 22:if(L=r!==null&&r.memoizedState!==null,e.mode&1?(ft=(E=ft)||L,Kt(t,e),ft=E):Kt(t,e),nr(e),i&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!L&&(e.mode&1)!==0)for(W=e,L=e.child;L!==null;){for(D=W=L;W!==null;){switch(A=W,H=A.child,A.tag){case 0:case 11:case 14:case 15:Io(4,A,A.return);break;case 1:On(A,A.return);var q=A.stateNode;if(typeof q.componentWillUnmount=="function"){i=A,r=A.return;try{t=i,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(Y){Oe(i,r,Y)}}break;case 5:On(A,A.return);break;case 22:if(A.memoizedState!==null){Gu(D);continue}}H!==null?(H.return=A,W=H):Gu(D)}L=L.sibling}e:for(L=null,D=e;;){if(D.tag===5){if(L===null){L=D;try{s=D.stateNode,E?(c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(y=D.stateNode,b=D.memoizedProps.style,d=b!=null&&b.hasOwnProperty("display")?b.display:null,y.style.display=Zo("display",d))}catch(Y){Oe(e,e.return,Y)}}}else if(D.tag===6){if(L===null)try{D.stateNode.nodeValue=E?"":D.memoizedProps}catch(Y){Oe(e,e.return,Y)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;L===D&&(L=null),D=D.return}L===D&&(L=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Kt(t,e),nr(e),i&4&&Yu(e);break;case 21:break;default:Kt(t,e),nr(e)}}function nr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Wu(r)){var i=r;break e}r=r.return}throw Error(l(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(zt(s,""),i.flags&=-33);var c=Vu(e);Hs(e,c,s);break;case 3:case 4:var d=i.stateNode.containerInfo,y=Vu(e);$s(e,y,d);break;default:throw Error(l(161))}}catch(b){Oe(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xm(e,t,r){W=e,Ku(e)}function Ku(e,t,r){for(var i=(e.mode&1)!==0;W!==null;){var s=W,c=s.child;if(s.tag===22&&i){var d=s.memoizedState!==null||Bi;if(!d){var y=s.alternate,b=y!==null&&y.memoizedState!==null||ft;y=Bi;var E=ft;if(Bi=d,(ft=b)&&!E)for(W=s;W!==null;)d=W,b=d.child,d.tag===22&&d.memoizedState!==null?Ju(s):b!==null?(b.return=d,W=b):Ju(s);for(;c!==null;)W=c,Ku(c),c=c.sibling;W=s,Bi=y,ft=E}Xu(e)}else(s.subtreeFlags&8772)!==0&&c!==null?(c.return=s,W=c):Xu(e)}}function Xu(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ft||Wi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!ft)if(r===null)i.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Yt(t.type,r.memoizedProps);i.componentDidUpdate(s,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&Gc(t,c,i);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Gc(t,d,r)}break;case 5:var y=t.stateNode;if(r===null&&t.flags&4){r=y;var b=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&r.focus();break;case"img":b.src&&(r.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var L=E.memoizedState;if(L!==null){var D=L.dehydrated;D!==null&&ao(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ft||t.flags&512&&Us(t)}catch(A){Oe(t,t.return,A)}}if(t===e){W=null;break}if(r=t.sibling,r!==null){r.return=t.return,W=r;break}W=t.return}}function Gu(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var r=t.sibling;if(r!==null){r.return=t.return,W=r;break}W=t.return}}function Ju(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Wi(4,t)}catch(b){Oe(t,r,b)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(b){Oe(t,s,b)}}var c=t.return;try{Us(t)}catch(b){Oe(t,c,b)}break;case 5:var d=t.return;try{Us(t)}catch(b){Oe(t,d,b)}}}catch(b){Oe(t,t.return,b)}if(t===e){W=null;break}var y=t.sibling;if(y!==null){y.return=t.return,W=y;break}W=t.return}}var vm=Math.ceil,Vi=J.ReactCurrentDispatcher,Bs=J.ReactCurrentOwner,Ut=J.ReactCurrentBatchConfig,ve=0,tt=null,qe=null,lt=0,Rt=0,Mn=Fr(0),Ge=0,No=null,un=0,qi=0,Ws=0,Ro=null,bt=null,Vs=0,Un=1/0,yr=null,Yi=!1,qs=null,Br=null,Qi=!1,Wr=null,Ki=0,Po=0,Ys=null,Xi=-1,Gi=0;function yt(){return(ve&6)!==0?He():Xi!==-1?Xi:Xi=He()}function Vr(e){return(e.mode&1)===0?1:(ve&2)!==0&&lt!==0?lt&-lt:rm.transition!==null?(Gi===0&&(Gi=Vl()),Gi):(e=je,e!==0||(e=window.event,e=e===void 0?16:ec(e.type)),e)}function Xt(e,t,r,i){if(50<Po)throw Po=0,Ys=null,Error(l(185));to(e,r,i),((ve&2)===0||e!==tt)&&(e===tt&&((ve&2)===0&&(qi|=r),Ge===4&&qr(e,lt)),kt(e,i),r===1&&ve===0&&(t.mode&1)===0&&(Un=He()+500,Ci&&Mr()))}function kt(e,t){var r=e.callbackNode;tf(e,t);var i=ai(e,e===tt?lt:0);if(i===0)r!==null&&Hl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Hl(r),t===1)e.tag===0?tm(ed.bind(null,e)):Mc(ed.bind(null,e)),Gf(function(){(ve&6)===0&&Mr()}),r=null;else{switch(ql(i)){case 1:r=_a;break;case 4:r=Bl;break;case 16:r=ri;break;case 536870912:r=Wl;break;default:r=ri}r=ld(r,Zu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Zu(e,t){if(Xi=-1,Gi=0,(ve&6)!==0)throw Error(l(327));var r=e.callbackNode;if($n()&&e.callbackNode!==r)return null;var i=ai(e,e===tt?lt:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Ji(e,i);else{t=i;var s=ve;ve|=2;var c=rd();(tt!==e||lt!==t)&&(yr=null,Un=He()+500,pn(e,t));do try{km();break}catch(y){td(e,y)}while(!0);ds(),Vi.current=c,ve=s,qe!==null?t=0:(tt=null,lt=0,t=Ge)}if(t!==0){if(t===2&&(s=Ta(e),s!==0&&(i=s,t=Qs(e,s))),t===1)throw r=No,pn(e,0),qr(e,i),kt(e,He()),r;if(t===6)qr(e,i);else{if(s=e.current.alternate,(i&30)===0&&!wm(s)&&(t=Ji(e,i),t===2&&(c=Ta(e),c!==0&&(i=c,t=Qs(e,c))),t===1))throw r=No,pn(e,0),qr(e,i),kt(e,He()),r;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(l(345));case 2:fn(e,bt,yr);break;case 3:if(qr(e,i),(i&130023424)===i&&(t=Vs+500-He(),10<t)){if(ai(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){yt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=es(fn.bind(null,e,bt,yr),t);break}fn(e,bt,yr);break;case 4:if(qr(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var d=31-Wt(i);c=1<<d,d=t[d],d>s&&(s=d),i&=~c}if(i=s,i=He()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vm(i/1960))-i,10<i){e.timeoutHandle=es(fn.bind(null,e,bt,yr),i);break}fn(e,bt,yr);break;case 5:fn(e,bt,yr);break;default:throw Error(l(329))}}}return kt(e,He()),e.callbackNode===r?Zu.bind(null,e):null}function Qs(e,t){var r=Ro;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=Ji(e,t),e!==2&&(t=bt,bt=r,t!==null&&Ks(t)),e}function Ks(e){bt===null?bt=e:bt.push.apply(bt,e)}function wm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var s=r[i],c=s.getSnapshot;s=s.value;try{if(!Vt(c(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qr(e,t){for(t&=~Ws,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Wt(t),i=1<<r;e[r]=-1,t&=~i}}function ed(e){if((ve&6)!==0)throw Error(l(327));$n();var t=ai(e,0);if((t&1)===0)return kt(e,He()),null;var r=Ji(e,t);if(e.tag!==0&&r===2){var i=Ta(e);i!==0&&(t=i,r=Qs(e,i))}if(r===1)throw r=No,pn(e,0),qr(e,t),kt(e,He()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,bt,yr),kt(e,He()),null}function Xs(e,t){var r=ve;ve|=1;try{return e(t)}finally{ve=r,ve===0&&(Un=He()+500,Ci&&Mr())}}function dn(e){Wr!==null&&Wr.tag===0&&(ve&6)===0&&$n();var t=ve;ve|=1;var r=Ut.transition,i=je;try{if(Ut.transition=null,je=1,e)return e()}finally{je=i,Ut.transition=r,ve=t,(ve&6)===0&&Mr()}}function Gs(){Rt=Mn.current,Ne(Mn)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Xf(r)),qe!==null)for(r=qe.return;r!==null;){var i=r;switch(as(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Si();break;case 3:Dn(),Ne(xt),Ne(ut),vs();break;case 5:ys(i);break;case 4:Dn();break;case 13:Ne(Ae);break;case 19:Ne(Ae);break;case 10:ps(i.type._context);break;case 22:case 23:Gs()}r=r.return}if(tt=e,qe=e=Yr(e.current,null),lt=Rt=t,Ge=0,No=null,Ws=qi=un=0,bt=Ro=null,sn!==null){for(t=0;t<sn.length;t++)if(r=sn[t],i=r.interleaved,i!==null){r.interleaved=null;var s=i.next,c=r.pending;if(c!==null){var d=c.next;c.next=s,i.next=d}r.pending=i}sn=null}return e}function td(e,t){do{var r=qe;try{if(ds(),Li.current=Mi,Di){for(var i=Le.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Di=!1}if(cn=0,et=Xe=Le=null,jo=!1,Co=0,Bs.current=null,r===null||r.return===null){Ge=1,No=t,qe=null;break}e:{var c=e,d=r.return,y=r,b=t;if(t=lt,y.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var E=b,L=y,D=L.tag;if((L.mode&1)===0&&(D===0||D===11||D===15)){var A=L.alternate;A?(L.updateQueue=A.updateQueue,L.memoizedState=A.memoizedState,L.lanes=A.lanes):(L.updateQueue=null,L.memoizedState=null)}var H=_u(d);if(H!==null){H.flags&=-257,Tu(H,d,y,c,t),H.mode&1&&Cu(c,E,t),t=H,b=E;var q=t.updateQueue;if(q===null){var Y=new Set;Y.add(b),t.updateQueue=Y}else q.add(b);break e}else{if((t&1)===0){Cu(c,E,t),Js();break e}b=Error(l(426))}}else if(Re&&y.mode&1){var Be=_u(d);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),Tu(Be,d,y,c,t),cs(Fn(b,y));break e}}c=b=Fn(b,y),Ge!==4&&(Ge=2),Ro===null?Ro=[c]:Ro.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var C=Su(c,b,t);Xc(c,C);break e;case 1:y=b;var j=c.type,_=c.stateNode;if((c.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Br===null||!Br.has(_)))){c.flags|=65536,t&=-t,c.lanes|=t;var F=ju(c,y,t);Xc(c,F);break e}}c=c.return}while(c!==null)}od(r)}catch(X){t=X,qe===r&&r!==null&&(qe=r=r.return);continue}break}while(!0)}function rd(){var e=Vi.current;return Vi.current=Mi,e===null?Mi:e}function Js(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),tt===null||(un&268435455)===0&&(qi&268435455)===0||qr(tt,lt)}function Ji(e,t){var r=ve;ve|=2;var i=rd();(tt!==e||lt!==t)&&(yr=null,pn(e,t));do try{bm();break}catch(s){td(e,s)}while(!0);if(ds(),ve=r,Vi.current=i,qe!==null)throw Error(l(261));return tt=null,lt=0,Ge}function bm(){for(;qe!==null;)nd(qe)}function km(){for(;qe!==null&&!qp();)nd(qe)}function nd(e){var t=sd(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?od(e):qe=t,Bs.current=null}function od(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=mm(r,t,Rt),r!==null){qe=r;return}}else{if(r=hm(r,t),r!==null){r.flags&=32767,qe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,qe=null;return}}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Ge===0&&(Ge=5)}function fn(e,t,r){var i=je,s=Ut.transition;try{Ut.transition=null,je=1,Sm(e,t,r,i)}finally{Ut.transition=s,je=i}return null}function Sm(e,t,r,i){do $n();while(Wr!==null);if((ve&6)!==0)throw Error(l(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(rf(e,c),e===tt&&(qe=tt=null,lt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Qi||(Qi=!0,ld(ri,function(){return $n(),null})),c=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||c){c=Ut.transition,Ut.transition=null;var d=je;je=1;var y=ve;ve|=4,Bs.current=null,ym(e,r),Qu(r,e),Bf(Ja),ci=!!Ga,Ja=Ga=null,e.current=r,xm(r),Yp(),ve=y,je=d,Ut.transition=c}else e.current=r;if(Qi&&(Qi=!1,Wr=e,Ki=s),c=e.pendingLanes,c===0&&(Br=null),Xp(r.stateNode),kt(e,He()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],i(s.value,{componentStack:s.stack,digest:s.digest});if(Yi)throw Yi=!1,e=qs,qs=null,e;return(Ki&1)!==0&&e.tag!==0&&$n(),c=e.pendingLanes,(c&1)!==0?e===Ys?Po++:(Po=0,Ys=e):Po=0,Mr(),null}function $n(){if(Wr!==null){var e=ql(Ki),t=Ut.transition,r=je;try{if(Ut.transition=null,je=16>e?16:e,Wr===null)var i=!1;else{if(e=Wr,Wr=null,Ki=0,(ve&6)!==0)throw Error(l(331));var s=ve;for(ve|=4,W=e.current;W!==null;){var c=W,d=c.child;if((W.flags&16)!==0){var y=c.deletions;if(y!==null){for(var b=0;b<y.length;b++){var E=y[b];for(W=E;W!==null;){var L=W;switch(L.tag){case 0:case 11:case 15:Io(8,L,c)}var D=L.child;if(D!==null)D.return=L,W=D;else for(;W!==null;){L=W;var A=L.sibling,H=L.return;if(Bu(L),L===E){W=null;break}if(A!==null){A.return=H,W=A;break}W=H}}}var q=c.alternate;if(q!==null){var Y=q.child;if(Y!==null){q.child=null;do{var Be=Y.sibling;Y.sibling=null,Y=Be}while(Y!==null)}}W=c}}if((c.subtreeFlags&2064)!==0&&d!==null)d.return=c,W=d;else e:for(;W!==null;){if(c=W,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:Io(9,c,c.return)}var C=c.sibling;if(C!==null){C.return=c.return,W=C;break e}W=c.return}}var j=e.current;for(W=j;W!==null;){d=W;var _=d.child;if((d.subtreeFlags&2064)!==0&&_!==null)_.return=d,W=_;else e:for(d=j;W!==null;){if(y=W,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:Wi(9,y)}}catch(X){Oe(y,y.return,X)}if(y===d){W=null;break e}var F=y.sibling;if(F!==null){F.return=y.return,W=F;break e}W=y.return}}if(ve=s,Mr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(ni,e)}catch{}i=!0}return i}finally{je=r,Ut.transition=t}}return!1}function id(e,t,r){t=Fn(r,t),t=Su(e,t,1),e=$r(e,t,1),t=yt(),e!==null&&(to(e,1,t),kt(e,t))}function Oe(e,t,r){if(e.tag===3)id(e,e,r);else for(;t!==null;){if(t.tag===3){id(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Br===null||!Br.has(i))){e=Fn(r,e),e=ju(t,e,1),t=$r(t,e,1),e=yt(),t!==null&&(to(t,1,e),kt(t,e));break}}t=t.return}}function jm(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&r,tt===e&&(lt&r)===r&&(Ge===4||Ge===3&&(lt&130023424)===lt&&500>He()-Vs?pn(e,0):Ws|=r),kt(e,t)}function ad(e,t){t===0&&((e.mode&1)===0?t=1:(t=ii,ii<<=1,(ii&130023424)===0&&(ii=4194304)));var r=yt();e=mr(e,t),e!==null&&(to(e,t,r),kt(e,r))}function Cm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ad(e,r)}function _m(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(l(314))}i!==null&&i.delete(t),ad(e,r)}var sd;sd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)wt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return wt=!1,fm(e,t,r);wt=(e.flags&131072)!==0}else wt=!1,Re&&(t.flags&1048576)!==0&&Uc(t,Ti,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Hi(e,t),e=t.pendingProps;var s=In(t,ut.current);Ln(t,r),s=ks(null,t,i,e,s,r);var c=Ss();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(i)?(c=!0,ji(t)):c=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,hs(t),s.updater=Ui,t.stateNode=s,s._reactInternals=t,Is(t,i,e,r),t=zs(null,t,i,!0,c,r)):(t.tag=0,Re&&c&&is(t),gt(null,t,s,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Hi(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=Em(i),e=Yt(i,e),s){case 0:t=Ps(null,t,i,e,r);break e;case 1:t=zu(null,t,i,e,r);break e;case 11:t=Eu(null,t,i,e,r);break e;case 14:t=Iu(null,t,i,Yt(i.type,e),r);break e}throw Error(l(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Yt(i,s),Ps(e,t,i,s,r);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Yt(i,s),zu(e,t,i,s,r);case 3:e:{if(Au(t),e===null)throw Error(l(387));i=t.pendingProps,c=t.memoizedState,s=c.element,Kc(e,t),zi(t,i,null,r);var d=t.memoizedState;if(i=d.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){s=Fn(Error(l(423)),t),t=Lu(e,t,i,r,s);break e}else if(i!==s){s=Fn(Error(l(424)),t),t=Lu(e,t,i,r,s);break e}else for(Nt=Dr(t.stateNode.containerInfo.firstChild),It=t,Re=!0,qt=null,r=Yc(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pn(),i===s){t=gr(e,t,r);break e}gt(e,t,i,r)}t=t.child}return t;case 5:return Jc(t),e===null&&ls(t),i=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,d=s.children,Za(i,s)?d=null:c!==null&&Za(i,c)&&(t.flags|=32),Pu(e,t),gt(e,t,d,r),t.child;case 6:return e===null&&ls(t),null;case 13:return Du(e,t,r);case 4:return gs(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=zn(t,null,i,r):gt(e,t,i,r),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Yt(i,s),Eu(e,t,i,s,r);case 7:return gt(e,t,t.pendingProps,r),t.child;case 8:return gt(e,t,t.pendingProps.children,r),t.child;case 12:return gt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,c=t.memoizedProps,d=s.value,Ee(Ni,i._currentValue),i._currentValue=d,c!==null)if(Vt(c.value,d)){if(c.children===s.children&&!xt.current){t=gr(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var y=c.dependencies;if(y!==null){d=c.child;for(var b=y.firstContext;b!==null;){if(b.context===i){if(c.tag===1){b=hr(-1,r&-r),b.tag=2;var E=c.updateQueue;if(E!==null){E=E.shared;var L=E.pending;L===null?b.next=b:(b.next=L.next,L.next=b),E.pending=b}}c.lanes|=r,b=c.alternate,b!==null&&(b.lanes|=r),fs(c.return,r,t),y.lanes|=r;break}b=b.next}}else if(c.tag===10)d=c.type===t.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(l(341));d.lanes|=r,y=d.alternate,y!==null&&(y.lanes|=r),fs(d,r,t),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===t){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}gt(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,Ln(t,r),s=Ot(s),i=i(s),t.flags|=1,gt(e,t,i,r),t.child;case 14:return i=t.type,s=Yt(i,t.pendingProps),s=Yt(i.type,s),Iu(e,t,i,s,r);case 15:return Nu(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Yt(i,s),Hi(e,t),t.tag=1,vt(i)?(e=!0,ji(t)):e=!1,Ln(t,r),bu(t,i,s),Is(t,i,s,r),zs(null,t,i,!0,e,r);case 19:return Ou(e,t,r);case 22:return Ru(e,t,r)}throw Error(l(156,t.tag))};function ld(e,t){return $l(e,t)}function Tm(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,r,i){return new Tm(e,t,r,i)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Em(e){if(typeof e=="function")return Zs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===se)return 11;if(e===_e)return 14}return 2}function Yr(e,t){var r=e.alternate;return r===null?(r=$t(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zi(e,t,r,i,s,c){var d=2;if(i=e,typeof e=="function")Zs(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ye:return mn(r.children,s,c,t);case Ce:d=8,s|=8;break;case Q:return e=$t(12,r,t,s|2),e.elementType=Q,e.lanes=c,e;case me:return e=$t(13,r,t,s),e.elementType=me,e.lanes=c,e;case Qe:return e=$t(19,r,t,s),e.elementType=Qe,e.lanes=c,e;case fe:return ea(r,s,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:d=10;break e;case U:d=9;break e;case se:d=11;break e;case _e:d=14;break e;case re:d=16,i=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=$t(d,r,t,s),t.elementType=e,t.type=i,t.lanes=c,t}function mn(e,t,r,i){return e=$t(7,e,i,t),e.lanes=r,e}function ea(e,t,r,i){return e=$t(22,e,i,t),e.elementType=fe,e.lanes=r,e.stateNode={isHidden:!1},e}function el(e,t,r){return e=$t(6,e,null,t),e.lanes=r,e}function tl(e,t,r){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Im(e,t,r,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ea(0),this.expirationTimes=Ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function rl(e,t,r,i,s,c,d,y,b){return e=new Im(e,t,r,y,b),t===1?(t=1,c===!0&&(t|=8)):t=0,c=$t(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(c),e}function Nm(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function cd(e){if(!e)return Or;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(vt(r))return Fc(e,r,t)}return t}function ud(e,t,r,i,s,c,d,y,b){return e=rl(r,i,!0,e,s,c,d,y,b),e.context=cd(null),r=e.current,i=yt(),s=Vr(r),c=hr(i,s),c.callback=t??null,$r(r,c,s),e.current.lanes=s,to(e,s,i),kt(e,i),e}function ta(e,t,r,i){var s=t.current,c=yt(),d=Vr(s);return r=cd(r),t.context===null?t.context=r:t.pendingContext=r,t=hr(c,d),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=$r(s,t,d),e!==null&&(Xt(e,s,d,c),Pi(e,s,d)),d}function ra(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function nl(e,t){dd(e,t),(e=e.alternate)&&dd(e,t)}function Rm(){return null}var pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ol(e){this._internalRoot=e}na.prototype.render=ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));ta(e,t,null,null)},na.prototype.unmount=ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){ta(null,e,null,null)}),t[ur]=null}};function na(e){this._internalRoot=e}na.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kl();e={blockedOn:null,target:e,priority:t};for(var r=0;r<zr.length&&t!==0&&t<zr[r].priority;r++);zr.splice(r,0,e),r===0&&Jl(e)}};function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(){}function Pm(e,t,r,i,s){if(s){if(typeof i=="function"){var c=i;i=function(){var E=ra(d);c.call(E)}}var d=ud(t,i,e,0,null,!1,!1,"",fd);return e._reactRootContainer=d,e[ur]=d.current,go(e.nodeType===8?e.parentNode:e),dn(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var y=i;i=function(){var E=ra(b);y.call(E)}}var b=rl(e,0,!1,null,null,!1,!1,"",fd);return e._reactRootContainer=b,e[ur]=b.current,go(e.nodeType===8?e.parentNode:e),dn(function(){ta(t,b,r,i)}),b}function ia(e,t,r,i,s){var c=r._reactRootContainer;if(c){var d=c;if(typeof s=="function"){var y=s;s=function(){var b=ra(d);y.call(b)}}ta(t,d,e,s)}else d=Pm(r,t,e,s,i);return ra(d)}Yl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=eo(t.pendingLanes);r!==0&&(Ia(t,r|1),kt(t,He()),(ve&6)===0&&(Un=He()+500,Mr()))}break;case 13:dn(function(){var i=mr(e,1);if(i!==null){var s=yt();Xt(i,e,1,s)}}),nl(e,1)}},Na=function(e){if(e.tag===13){var t=mr(e,134217728);if(t!==null){var r=yt();Xt(t,e,134217728,r)}nl(e,134217728)}},Ql=function(e){if(e.tag===13){var t=Vr(e),r=mr(e,t);if(r!==null){var i=yt();Xt(r,e,t,i)}nl(e,t)}},Kl=function(){return je},Xl=function(e,t){var r=je;try{return je=e,t()}finally{je=r}},Gn=function(e,t,r){switch(t){case"input":if(sr(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var s=ki(i);if(!s)throw Error(l(90));kr(i),sr(i,s)}}}break;case"textarea":Go(e,r);break;case"select":t=r.value,t!=null&&Sr(e,!!r.multiple,t,!1)}},Ke=Xs,ct=dn;var zm={usingClientEntryPoint:!1,Events:[vo,Tn,ki,ce,$e,Xs]},zo={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Am={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ml(e),e===null?null:e.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||Rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!aa.isDisabled&&aa.supportsFiber)try{ni=aa.inject(Am),Zt=aa}catch{}}return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm,St.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!il(t))throw Error(l(200));return Nm(e,t,null,r)},St.createRoot=function(e,t){if(!il(e))throw Error(l(299));var r=!1,i="",s=pd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=rl(e,1,!1,null,null,r,!1,i,s),e[ur]=t.current,go(e.nodeType===8?e.parentNode:e),new ol(t)},St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Ml(t),e=e===null?null:e.stateNode,e},St.flushSync=function(e){return dn(e)},St.hydrate=function(e,t,r){if(!oa(t))throw Error(l(200));return ia(null,e,t,!0,r)},St.hydrateRoot=function(e,t,r){if(!il(e))throw Error(l(405));var i=r!=null&&r.hydratedSources||null,s=!1,c="",d=pd;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=ud(t,null,e,1,r??null,s,!1,c,d),e[ur]=t.current,go(e),i)for(e=0;e<i.length;e++)r=i[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new na(t)},St.render=function(e,t,r){if(!oa(t))throw Error(l(200));return ia(null,e,t,!1,r)},St.unmountComponentAtNode=function(e){if(!oa(e))throw Error(l(40));return e._reactRootContainer?(dn(function(){ia(null,null,e,!1,function(){e._reactRootContainer=null,e[ur]=null})}),!0):!1},St.unstable_batchedUpdates=Xs,St.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!oa(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return ia(e,t,r,!1,i)},St.version="18.3.1-next-f1338f8080-20240426",St}var bd;function tp(){if(bd)return ll.exports;bd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),ll.exports=$m(),ll.exports}var kd;function Hm(){if(kd)return sa;kd=1;var o=tp();return sa.createRoot=o.createRoot,sa.hydrateRoot=o.hydrateRoot,sa}var Bm=Hm();function ot({label:o,variant:a="neutral",size:l="md"}){const u=l==="sm"?{height:"24px",paddingLeft:"10px",paddingRight:"10px",fontSize:"12px",lineHeight:"18px",fontWeight:"500"}:{height:"28px",paddingLeft:"12px",paddingRight:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600"},p=a==="neutral"?{backgroundColor:"var(--card)",dotColor:"var(--muted-foreground)",textColor:"var(--foreground)"}:{backgroundColor:"var(--accent)",dotColor:"var(--primary)",textColor:"var(--accent-foreground)"};return n.jsxs("div",{style:{height:u.height,paddingLeft:u.paddingLeft,paddingRight:u.paddingRight,borderRadius:"999px",gap:"8px",backgroundColor:p.backgroundColor,border:"1px solid var(--border)",display:"inline-flex",alignItems:"center"},children:[n.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:p.dotColor}}),n.jsx("span",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:u.fontSize,lineHeight:u.lineHeight,fontWeight:u.fontWeight,color:p.textColor},children:o})]})}function Ye({label:o,variant:a="primary",size:l="md",onClick:u,disabled:p=!1,fullWidth:f=!1,type:m="button",style:g,...k}){const x={sm:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}}[l],w={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"var(--card)",color:"var(--foreground)",border:"1px solid var(--border)"},ghost:{backgroundColor:"transparent",color:"var(--foreground)",border:"none"}}[a];return n.jsx("button",{...k,type:m,onClick:u,disabled:p,style:{height:x.height,paddingLeft:x.paddingLeft,paddingRight:x.paddingRight,borderRadius:x.borderRadius,backgroundColor:p?"var(--muted)":w.backgroundColor,color:w.color,fontSize:x.fontSize,lineHeight:x.lineHeight,fontWeight:"600",border:p?"1px solid var(--border)":w.border,display:"inline-flex",alignItems:"center",justifyContent:"center",width:f?"100%":"auto",cursor:p?"not-allowed":"pointer",fontFamily:"Inter, system-ui, sans-serif",opacity:p?.65:1,...g},children:o})}const Wm="/assets/Big%20Logo-Bdh1LtUa.svg",Vm="/assets/Logo%20Dark-BJGV7fxC.svg",qm="2026-03-10-1";function rp({size:o=32,variant:a="dark",showText:l=!0,href:u="/"}){const p=a==="light"?Vm:Wm,f=a==="dark"?"#101828":"#FFFFFF",m=n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[n.jsx("div",{style:{width:`${o}px`,height:`${o}px`,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("img",{src:`${p}?v=${qm}`,alt:"Vibe Station Logo",width:o,height:o,style:{width:`${o}px`,height:`${o}px`,objectFit:"contain",display:"block"}})}),l&&n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:o>=48?"24px":o>=32?"20px":"16px",lineHeight:o>=48?"32px":o>=32?"28px":"24px",fontWeight:"600",letterSpacing:"-0.02em",color:f},children:"VIBE STATION"})]});return u?n.jsx("a",{href:u,style:{textDecoration:"none",display:"inline-flex",cursor:"pointer"},children:m}):m}const Ym="w-full mx-auto px-4 md:px-6 lg:px-8",Qm={wide:"max-w-[1200px]",standard:"max-w-[1080px]",narrow:"max-w-[860px]"};function Km(o,a){return[Ym,Qm[o],a].filter(Boolean).join(" ")}function ba({children:o,width:a="wide",className:l}){return n.jsx("div",{className:Km(a,l),children:o})}function Xm({children:o,className:a}){return n.jsx(ba,{width:"wide",className:a,children:o})}function Gm({children:o,className:a}){return n.jsx(ba,{width:"standard",className:a,children:o})}function Jm({children:o,className:a}){return n.jsx(ba,{width:"narrow",className:a,children:o})}const be=Object.assign(ba,{Wide:Xm,Standard:Gm,Narrow:Jm}),np="kz9z4f-2a.myshopify.com",op="daf156f4e4046c726902bca5c28e9cbe",Zm="2026-01",ip="http://localhost:3001",Uo="/api/shopify",eh="false".toLowerCase()==="true",th="X-Shopify-Storefront-Access-Token",xl="IN".toUpperCase(),ap="EN".toUpperCase(),rh=`https://${np}/api/${Zm}/graphql.json`,sp="shopify_cart_id";class ze extends Error{constructor(a,l,u){super(a),this.code=l,this.field=u,this.name="StorefrontAPIError"}}const lp=()=>op.length>0,nh=()=>np.length>0,oh=()=>ip.length>0&&Uo.length>0,ih=()=>Uo.startsWith("http://")||Uo.startsWith("https://")?Uo:`${ip.replace(/\/+$/,"")}/${Uo.replace(/^\/+/,"")}`,cp=()=>eh||!lp()&&oh(),ah=()=>cp()?!0:nh()&&lp();async function Ue(o,a={}){if(!ah())throw new ze("Shopify is not configured","SHOPIFY_NOT_CONFIGURED");let l;if(cp()?l=await fetch(ih(),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({query:o,variables:a})}):l=await fetch(rh,{method:"POST",headers:{"Content-Type":"application/json",[th]:op},body:JSON.stringify({query:o,variables:a})}),!l.ok)throw l.status===429?new ze("Rate limit exceeded","RATE_LIMIT"):new ze(`HTTP ${l.status}`,"HTTP_ERROR");const{data:u,errors:p}=await l.json();if(p&&p.length>0)throw new ze(p[0].message,"GRAPHQL_ERROR",p[0].field);if(!u)throw new ze("Missing response data","EMPTY_DATA");return u}function Tl(o){var u,p,f;const a=o.featuredImage;if(a!=null&&a.url)return{url:a.url,altText:a.altText||o.title||"Product image"};const l=(f=(p=(u=o.images)==null?void 0:u.edges)==null?void 0:p[0])==null?void 0:f.node;return l!=null&&l.url?{url:l.url,altText:l.altText||o.title||"Product image"}:null}const sh=`
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
`,up=`@inContext(country: ${xl}, language: ${ap})`,lh=`
  query ProductList(
    $first: Int = 24
    $after: String
    $sortKey: ProductSortKeys = BEST_SELLING
    $reverse: Boolean = false
    $query: String
  ) ${up} {
    products(first: $first, after: $after, sortKey: $sortKey, reverse: $reverse, query: $query) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          ${sh}
        }
      }
    }
  }
`,ch=`
  query ProductDetail($handle: String!) ${up} {
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
`,Wn=`
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
`,uh=`
  mutation CartCreate($input: CartInput!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ${Wn}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,dh=`
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${Wn}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,ph=`
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${Wn}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,fh=`
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ${Wn}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,mh=`
  query Cart($id: ID!) {
    cart(id: $id) {
      ${Wn}
    }
  }
`,hh=`
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ${Wn}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,dp=o=>{var l;const a=(l=o.field)!=null&&l.length?` for ${o.field.join(".")}`:"";switch(o.code){case"INVALID":return`Shopify rejected the cart update${a}. ${o.message}`;case"LESS_THAN":return"Quantity is below the minimum allowed.";case"GREATER_THAN":return"Quantity exceeds the maximum allowed.";case"INVALID_MERCHANDISE_LINE":return"This product variant is unavailable.";case"MISSING_DISCOUNT_CODE":case"DISCOUNT_NOT_FOUND":return"That discount code could not be found.";case"CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE":return"This cart does not meet the discount requirements.";case"RELEASE_PHASE_NOT_STARTED":return"This product is not available yet.";case"TOO_MANY_LINE_ITEMS":return"Your cart has reached the item limit.";case"INVALID_DELIVERY_GROUP":return"Delivery details for this cart are invalid. Please try again.";case"BLANK":return`A required cart value is missing${a}.`;case"NOT_ENOUGH_IN_STOCK":return"There is not enough stock available for that quantity.";default:return o.message}},ka=(o,a)=>{const l=o[a];if(l.userErrors.length>0){const u=l.userErrors[0];throw new ze(dp(u),u.code||"CART_USER_ERROR",u.field)}if(!l.cart)throw new ze("Cart was not returned by Shopify","MISSING_CART");return l.cart};async function gh(o){return(await Ue(ch,{handle:o})).product}async function ga(o={}){const a=typeof o=="number"?{first:o}:o;return(await Ue(lh,{first:a.first??24,after:a.after??null,sortKey:a.sortKey??"BEST_SELLING",reverse:a.reverse??!1,query:a.query})).products}async function yh(o=[],a){const l=await Ue(uh,{input:{lines:o,buyerIdentity:{countryCode:xl,...a?{customerAccessToken:a}:{}}},country:xl,language:ap});return ka(l,"cartCreate")}async function xh(o,a){const l=await Ue(dh,{cartId:o,lines:a});return ka(l,"cartLinesAdd")}async function vh(o,a){const l=await Ue(ph,{cartId:o,lines:a});return ka(l,"cartLinesUpdate")}async function wh(o,a){const l=await Ue(fh,{cartId:o,lineIds:a});return ka(l,"cartLinesRemove")}async function bh(o){return(await Ue(mh,{id:o})).cart}async function Sd(o,a){const u=(await Ue(hh,{cartId:o,buyerIdentity:a})).cartBuyerIdentityUpdate;if(u.userErrors.length>0){const p=u.userErrors[0];throw new ze(dp(p),p.code||"CART_USER_ERROR",p.field)}if(!u.cart)throw new ze("Cart was not returned by Shopify","MISSING_CART");return u.cart}const kh=()=>typeof window>"u"?null:window.localStorage.getItem(sp),Sh=o=>{typeof window>"u"||window.localStorage.setItem(sp,o)},El="customer_token",Il="token_expires_at",pp=`
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
`,jh=`
  id
  name
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
`,fp=`
  id
  name
  orderNumber
  processedAt
  financialStatus
  fulfillmentStatus
  lineItems(first: 50) {
    nodes {
      title
      quantity
      discountedTotalPrice {
        amount
        currencyCode
      }
      originalTotalPrice {
        amount
        currencyCode
      }
      variant {
        id
        title
        sku
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        image {
          url
          altText
        }
        product {
          id
          title
          handle
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  subtotalPrice {
    amount
    currencyCode
  }
  totalShippingPrice {
    amount
    currencyCode
  }
  totalTax {
    amount
    currencyCode
  }
  totalPrice {
    amount
    currencyCode
  }
  totalRefunded {
    amount
    currencyCode
  }
  shippingAddress {
    name
    firstName
    lastName
    address1
    address2
    city
    province
    zip
    country
    phone
  }
  billingAddress {
    name
    address1
    address2
    city
    province
    zip
    country
  }
  discountApplications(first: 10) {
    nodes {
      allocationMethod
      targetSelection
      value {
        ... on MoneyV2 {
          amount
          currencyCode
        }
        ... on PricingPercentageValue {
          percentage
        }
      }
    }
  }
  successfulFulfillments(first: 5) {
    trackingCompany
    trackingInfo(first: 5) {
      number
      url
    }
    fulfillmentLineItems(first: 50) {
      nodes {
        quantity
        lineItem {
          title
          variant {
            sku
          }
        }
      }
    }
  }
  statusUrl
  customerUrl
`,Sa=()=>typeof window<"u",mp=o=>{if(!o)return!0;const a=Date.parse(o);return Number.isNaN(a)?!0:a<=Date.now()},Nl=o=>{Sa()&&(window.localStorage.setItem(El,o.accessToken),window.localStorage.setItem(Il,o.expiresAt))},hp=()=>Sa()?window.localStorage.getItem(El):null,gp=()=>Sa()?window.localStorage.getItem(Il):null,Ch=o=>{var l;const a=(l=o.field)!=null&&l.length?` for ${o.field.join(".")}`:"";switch(o.code){case"ALREADY_ENABLED":return"An account with this email already exists.";case"BLANK":return`A required value is missing${a}.`;case"TAKEN":return`A customer already exists${a}.`;case"INVALID":return`Shopify rejected the value${a}. ${o.message}`;case"TOO_LONG":return`The value is too long${a}.`;case"UNIDENTIFIED_CUSTOMER":return"The email or password is incorrect.";case"TOO_MANY_FAILED_ATTEMPTS":return"Too many failed attempts. Please wait and try again.";case"CUSTOMER_DISABLED":return"This customer account is disabled.";case"BAD_DOMAIN":return`The email address domain is invalid${a}.`;case"TOKEN_INVALID":return"The customer session is invalid. Please sign in again.";case"CUSTOMER_RESET_TOKEN_INVALID":case"TOKEN_EXPIRED":return"This link has expired. Please request a new one.";case"PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE":return"Password cannot start or end with whitespace.";case"PHONE_NUMBER_ALREADY_USED":return"That phone number is already in use.";case"CUSTOMER_ADDRESS_NOT_FOUND":return"The selected address could not be found.";default:return o.message}},_h=(o,a,l)=>{if(o instanceof ze){const u=o.code==="RATE_LIMIT"?"Too many requests. Please try again in a moment.":o.code==="HTTP_ERROR"?"Shopify could not be reached. Please try again.":(o.code==="GRAPHQL_ERROR",o.message||l);return{type:o.code==="HTTP_ERROR"||o.code==="RATE_LIMIT"?"network":"api",message:u,code:o.code||a,field:o.field}}return o instanceof TypeError?{type:"network",message:"Network request failed while contacting Shopify.",code:a}:{type:"unknown",message:l,code:a}},vl=o=>({ok:!1,data:null,error:o}),Rl=o=>({ok:!0,data:o,error:null}),wr=(o,a)=>{if(o.length===0)return;const l=o[0];throw new ze(Ch(l),l.code||a,l.field)},Th=()=>{const o=hp(),a=gp();return!o||!a?(wl(),vl({type:"session",message:"No active customer session was found.",code:"CUSTOMER_SESSION_MISSING"})):mp(a)?(wl(),vl({type:"session",message:"The customer session has expired. Please sign in again.",code:"CUSTOMER_SESSION_EXPIRED"})):Rl(o)},Pt=async(o,a,l)=>{try{return Rl(await o())}catch(u){return vl(_h(u,a,l))}};function wl(){Sa()&&(window.localStorage.removeItem(El),window.localStorage.removeItem(Il))}function yn(){const o=hp(),a=gp();return{accessToken:o,expiresAt:a,isExpired:mp(a)}}function la(){wl()}const Eh=`
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
`,Ih=`
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
`,Nh=`
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
`,Rh=`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,Ph=`
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
`,zh=`
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ${pp}
    }
  }
`,Ah=`
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
            ${jh}
          }
        }
      }
    }
  }
`,Lh=`
  query getOrderDetail($customerAccessToken: String!, $orderId: ID!) {
    customer(customerAccessToken: $customerAccessToken) {
      order(id: $orderId) {
        ${fp}
      }
    }
  }
`,Dh=`
  query getCustomerOrdersDetail($customerAccessToken: String!, $first: Int!, $after: String) {
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
            ${fp}
          }
        }
      }
    }
  }
`,Fh=`
  mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        ${pp}
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,Oh=`
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
`,Mh=`
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
`,Uh=`
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
`,$h=`
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
`;async function Hh(o){return Pt(async()=>{const a=await Ue(Eh,{input:o});if(wr(a.customerCreate.customerUserErrors,"CUSTOMER_CREATE_ERROR"),!a.customerCreate.customer)throw new ze("Customer was not returned by Shopify","MISSING_CUSTOMER");return a.customerCreate.customer},"CUSTOMER_CREATE_ERROR","Unable to create the customer account.")}async function jd(o,a){return Pt(async()=>{const l=await Ue(Ih,{input:{email:o,password:a}});if(wr(l.customerAccessTokenCreate.customerUserErrors,"CUSTOMER_LOGIN_ERROR"),!l.customerAccessTokenCreate.customerAccessToken)throw new ze("Customer access token was not returned by Shopify","MISSING_CUSTOMER_TOKEN");return Nl(l.customerAccessTokenCreate.customerAccessToken),l.customerAccessTokenCreate.customerAccessToken},"CUSTOMER_LOGIN_ERROR","Unable to sign in the customer.")}async function bl(o){const a=o?Rl(o):Th();return a.ok?Pt(async()=>{const l=await Ue(Nh,{customerAccessToken:a.data});if(l.customerAccessTokenRenew.userErrors.length>0){const u=l.customerAccessTokenRenew.userErrors[0];throw new ze(u.message,"CUSTOMER_TOKEN_RENEW_ERROR",u.field)}if(!l.customerAccessTokenRenew.customerAccessToken)throw new ze("Customer access token renewal did not return a token","MISSING_CUSTOMER_TOKEN");return Nl(l.customerAccessTokenRenew.customerAccessToken),l.customerAccessTokenRenew.customerAccessToken},"CUSTOMER_TOKEN_RENEW_ERROR","Unable to renew the customer session."):a}async function Bh(o){return Pt(async()=>{const a=await Ue(Rh,{email:o});return wr(a.customerRecover.customerUserErrors,"CUSTOMER_RECOVER_ERROR"),{email:o,submitted:!0}},"CUSTOMER_RECOVER_ERROR","Unable to request a password reset.")}async function Wh(o,a){return Pt(async()=>{const l=await Ue(Ph,{resetUrl:o,password:a});if(wr(l.customerResetByUrl.customerUserErrors,"CUSTOMER_RESET_ERROR"),!l.customerResetByUrl.customerAccessToken)throw new ze("Customer password reset did not return a new access token","MISSING_CUSTOMER_TOKEN");return Nl(l.customerResetByUrl.customerAccessToken),l.customerResetByUrl.customerAccessToken},"CUSTOMER_RESET_ERROR","Unable to reset the customer password.")}async function Hn(o){return Pt(async()=>(await Ue(zh,{customerAccessToken:o})).customer,"CUSTOMER_FETCH_ERROR","Unable to load customer data.")}async function Vh(o,a=10,l){return Pt(async()=>{var p;return((p=(await Ue(Ah,{customerAccessToken:o,first:a,after:l||null})).customer)==null?void 0:p.orders)||null},"CUSTOMER_ORDERS_FETCH_ERROR","Unable to load customer orders.")}async function Cd(o,a){return Pt(async()=>{var u,p,f;try{const m=await Ue(Lh,{customerAccessToken:o,orderId:a});if((u=m.customer)!=null&&u.order)return m.customer.order}catch(m){if(!(m instanceof ze)||m.code!=="GRAPHQL_ERROR")throw m}let l;for(let m=0;m<5;m+=1){const k=(p=(await Ue(Dh,{customerAccessToken:o,first:50,after:l||null})).customer)==null?void 0:p.orders,x=((f=k==null?void 0:k.edges.find(w=>w.node.id===a))==null?void 0:f.node)||null;if(x)return x;if(!(k!=null&&k.pageInfo.hasNextPage)||!k.pageInfo.endCursor)break;l=k.pageInfo.endCursor}return null},"CUSTOMER_ORDER_FETCH_ERROR","Unable to load the order.")}async function qh(o,a){return Pt(async()=>{const l=await Ue(Fh,{customerAccessToken:o,customer:a});if(wr(l.customerUpdate.customerUserErrors,"CUSTOMER_UPDATE_ERROR"),!l.customerUpdate.customer)throw new ze("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerUpdate.customer},"CUSTOMER_UPDATE_ERROR","Unable to update the customer profile.")}async function Yh(o,a){return Pt(async()=>{const l=await Ue(Oh,{customerAccessToken:o,address:a});if(wr(l.customerAddressCreate.customerUserErrors,"CUSTOMER_ADDRESS_CREATE_ERROR"),!l.customerAddressCreate.customerAddress)throw new ze("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressCreate.customerAddress},"CUSTOMER_ADDRESS_CREATE_ERROR","Unable to create the customer address.")}async function Qh(o,a,l){return Pt(async()=>{const u=await Ue(Mh,{customerAccessToken:o,id:a,address:l});if(wr(u.customerAddressUpdate.customerUserErrors,"CUSTOMER_ADDRESS_UPDATE_ERROR"),!u.customerAddressUpdate.customerAddress)throw new ze("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return u.customerAddressUpdate.customerAddress},"CUSTOMER_ADDRESS_UPDATE_ERROR","Unable to update the customer address.")}async function Kh(o,a){return Pt(async()=>{const l=await Ue(Uh,{customerAccessToken:o,id:a});if(wr(l.customerAddressDelete.customerUserErrors,"CUSTOMER_ADDRESS_DELETE_ERROR"),!l.customerAddressDelete.deletedCustomerAddressId)throw new ze("Deleted customer address id was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressDelete.deletedCustomerAddressId},"CUSTOMER_ADDRESS_DELETE_ERROR","Unable to delete the customer address.")}async function Xh(o,a){return Pt(async()=>{const l=await Ue($h,{customerAccessToken:o,addressId:a});if(wr(l.customerDefaultAddressUpdate.customerUserErrors,"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR"),!l.customerDefaultAddressUpdate.customer)throw new ze("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerDefaultAddressUpdate.customer.defaultAddress},"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR","Unable to update the default address.")}const ir=(o,a)=>{const l=Number(o);return!Number.isFinite(l)||!a?o||"":new Intl.NumberFormat("en-US",{style:"currency",currency:a}).format(l)},Lo=(o,a)=>({id:o.id,email:o.email,firstName:o.firstName||"",lastName:o.lastName||"",phone:o.phone||void 0,acceptsMarketing:!1,createdAt:a||new Date().toISOString()}),_d=o=>{var l;const a=((l=o.defaultAddress)==null?void 0:l.id)||null;return o.addresses.edges.map(u=>u.node).filter(u=>!!(u!=null&&u.id)).map(u=>({id:u.id,firstName:u.firstName||"",lastName:u.lastName||"",company:u.company||void 0,address1:u.address1||"",address2:u.address2||void 0,city:u.city||"",province:u.province||"",zip:u.zip||"",country:u.country||"",phone:u.phone||void 0,isDefault:u.id===a}))},Gh=o=>o?o.edges.map(a=>{var l,u;return{id:a.node.id,orderNumber:String(a.node.orderNumber),createdAt:a.node.processedAt,totalPrice:ir((l=a.node.totalPriceV2)==null?void 0:l.amount,(u=a.node.totalPriceV2)==null?void 0:u.currencyCode),fulfillmentStatus:a.node.fulfillmentStatus==="FULFILLED"||a.node.fulfillmentStatus==="UNFULFILLED"||a.node.fulfillmentStatus==="PARTIALLY_FULFILLED"||a.node.fulfillmentStatus==="CANCELLED"?a.node.fulfillmentStatus:"UNFULFILLED",lineItems:a.node.lineItems.edges.map((p,f)=>({id:`${a.node.id}-${f}`,title:p.node.title,quantity:p.node.quantity,price:""}))}}):[],Td=o=>{if(!(!(o!=null&&o.address1)||!o.city||!o.country))return{name:o.name||void 0,address1:o.address1,address2:o.address2||void 0,city:o.city,province:o.province||void 0,zip:o.zip||void 0,country:o.country,phone:o.phone||void 0}},Ed=o=>{var a,l,u,p,f,m,g,k,x,w;return o?{id:o.id,name:o.name||`Order #${o.orderNumber}`,orderNumber:String(o.orderNumber),createdAt:o.processedAt,financialStatus:o.financialStatus||void 0,fulfillmentStatus:o.fulfillmentStatus||void 0,subtotalPrice:ir((a=o.subtotalPrice)==null?void 0:a.amount,(l=o.subtotalPrice)==null?void 0:l.currencyCode),shippingPrice:ir((u=o.totalShippingPrice)==null?void 0:u.amount,(p=o.totalShippingPrice)==null?void 0:p.currencyCode),taxPrice:ir((f=o.totalTax)==null?void 0:f.amount,(m=o.totalTax)==null?void 0:m.currencyCode),totalPrice:ir((g=o.totalPrice)==null?void 0:g.amount,(k=o.totalPrice)==null?void 0:k.currencyCode),refundedPrice:ir((x=o.totalRefunded)==null?void 0:x.amount,(w=o.totalRefunded)==null?void 0:w.currencyCode),shippingAddress:Td(o.shippingAddress),billingAddress:Td(o.billingAddress),discounts:o.discountApplications.nodes.map(h=>({allocationMethod:h.allocationMethod||void 0,targetSelection:h.targetSelection||void 0,value:h.value&&"currencyCode"in h.value?ir(h.value.amount,h.value.currencyCode):h.value&&"percentage"in h.value?`${h.value.percentage}%`:""})),fulfillments:o.successfulFulfillments.map(h=>({trackingCompany:h.trackingCompany||void 0,tracking:h.trackingInfo.map(v=>({number:v.number||void 0,url:v.url||void 0})),items:h.fulfillmentLineItems.nodes.map(v=>{var T,I,P;return{title:((T=v.lineItem)==null?void 0:T.title)||"Line item",quantity:v.quantity,sku:((P=(I=v.lineItem)==null?void 0:I.variant)==null?void 0:P.sku)||void 0}})})),lineItems:o.lineItems.nodes.map((h,v)=>{var T,I,P,z,ae,ue,ge,J,ne,ie,ye,Ce,Q,K,U,se,me;return{id:`${o.id}-${v}`,title:h.title,quantity:h.quantity,unitPrice:ir((I=(T=h.variant)==null?void 0:T.price)==null?void 0:I.amount,(z=(P=h.variant)==null?void 0:P.price)==null?void 0:z.currencyCode),discountedTotalPrice:ir((ae=h.discountedTotalPrice)==null?void 0:ae.amount,(ue=h.discountedTotalPrice)==null?void 0:ue.currencyCode),originalTotalPrice:ir((ge=h.originalTotalPrice)==null?void 0:ge.amount,(J=h.originalTotalPrice)==null?void 0:J.currencyCode),variantTitle:((ne=h.variant)==null?void 0:ne.title)||void 0,sku:((ie=h.variant)==null?void 0:ie.sku)||void 0,imageUrl:((Ce=(ye=h.variant)==null?void 0:ye.image)==null?void 0:Ce.url)||void 0,imageAlt:((K=(Q=h.variant)==null?void 0:Q.image)==null?void 0:K.altText)||void 0,productHandle:((se=(U=h.variant)==null?void 0:U.product)==null?void 0:se.handle)||void 0,selectedOptions:((me=h.variant)==null?void 0:me.selectedOptions)||[]}}),statusUrl:o.statusUrl||void 0,customerUrl:o.customerUrl||void 0}:null},Id=o=>({firstName:o.firstName||void 0,lastName:o.lastName||void 0,company:o.company||void 0,address1:o.address1||void 0,address2:o.address2||void 0,city:o.city||void 0,province:o.province||void 0,zip:o.zip||void 0,country:o.country||void 0,phone:o.phone||void 0}),Nd=!1;const G1=1e3*60*60*24*30;function Kr(o,a){const l=new Error(o);return l.code=a,l}function Jh(){const[o,a]=N.useState(null),[l,u]=N.useState(null),[p,f]=N.useState(!0),m=async()=>{const T=yn();if(!T.accessToken){a(null),u(null);return}const I=await bl(T.accessToken);if(!I.ok)throw la(),a(null),u(null),new Error(I.error.message||"Customer session expired.");const P=await Hn(I.data.accessToken);if(!P.ok||!P.data)throw new Error(P.error.message||"Unable to load customer data.");a(Lo(P.data,o==null?void 0:o.createdAt)),u(I.data.accessToken)};return N.useEffect(()=>{let T=!1;return(async()=>{var P;try{const z=yn();if(!z.accessToken){T||(a(null),u(null),f(!1));return}const ae=await bl(z.accessToken);if(!ae.ok){T||(la(),a(null),u(null));return}const ue=await Hn(ae.data.accessToken);if(!ue.ok||!ue.data)throw new Error(((P=ue.error)==null?void 0:P.message)||"Unable to load customer data.");T||(a(Lo(ue.data)),u(ae.data.accessToken))}catch{T||(la(),a(null),u(null))}finally{T||f(!1)}})(),()=>{T=!0}},[]),{customer:o,accessToken:l,isAuthenticated:!!(o&&l),isLoading:p,login:async(T,I)=>{f(!0);try{const P=await jd(T,I);if(!P.ok)throw Kr(P.error.message||"Unable to sign in.",P.error.code);const z=await Hn(P.data.accessToken);if(!z.ok||!z.data)throw Kr(z.error.message||"Unable to load customer data.",z.error.code);a(Lo(z.data)),u(P.data.accessToken)}finally{f(!1)}},register:async T=>{f(!0);try{const I=await Hh(T);if(!I.ok)throw Kr(I.error.message||"Unable to create the account.",I.error.code);const P=await jd(T.email,T.password);if(!P.ok)throw Kr(P.error.message||"Account created but sign-in failed.",P.error.code);const z=await Hn(P.data.accessToken);if(!z.ok||!z.data)throw Kr(z.error.message||"Unable to load customer data.",z.error.code);a(Lo(z.data,new Date().toISOString())),u(P.data.accessToken)}finally{f(!1)}},logout:()=>{la(),a(null),u(null)},updateProfile:async T=>{const I=l||yn().accessToken;if(!I)throw new Error("No active customer session was found.");f(!0);try{const P=await qh(I,T);if(!P.ok)throw Kr(P.error.message||"Unable to update the profile.",P.error.code);a(z=>Lo(P.data,z==null?void 0:z.createdAt))}finally{f(!1)}},refreshCustomerData:m,requestPasswordReset:async T=>{const I=await Bh(T);if(!I.ok){if(I.error.code==="UNIDENTIFIED_CUSTOMER")return;throw Kr(I.error.message||"Unable to send the password reset email.",I.error.code)}},resetPassword:async(T,I)=>{const P=await Wh(T,I);if(!P.ok)throw Kr(P.error.message||"Unable to reset the password.",P.error.code)}}}function hn(o,a){const l=new Error(o);return l.code=a,l}function Me(o){return(o==null?void 0:o.trim().toLowerCase().replace(/\s+/g," "))||""}function Zh(o,a){return Me(o.firstName)===Me(a.firstName)&&Me(o.lastName)===Me(a.lastName)&&Me(o.company)===Me(a.company)&&Me(o.address1)===Me(a.address1)&&Me(o.address2)===Me(a.address2)&&Me(o.city)===Me(a.city)&&Me(o.province)===Me(a.province)&&Me(o.zip)===Me(a.zip)&&Me(o.country)===Me(a.country)&&Me(o.phone)===Me(a.phone)}function eg(o,a){const l=Me(o);return Me(a)==="taken"&&l.includes("address")&&(l.includes("another customer")||l.includes("other customer"))}function tg(){const{accessToken:o,isAuthenticated:a}=Bt(),[l,u]=N.useState([]),[p,f]=N.useState(!0),[m,g]=N.useState(!1),[k,x]=N.useState(null),w=o||yn().accessToken,h=async()=>{var T,I;if(!w||!a){u([]),f(!1);return}f(!0),x(null);try{const P=await Hn(w);if(!P.ok||!P.data)throw hn(((T=P.error)==null?void 0:T.message)||"Unable to load addresses.",(I=P.error)==null?void 0:I.code);u(_d(P.data))}catch(P){x(P instanceof Error?P.message:"Unable to load addresses.")}finally{f(!1)}};N.useEffect(()=>{h()},[w,a]);const v=async T=>{g(!0),x(null);try{await T(),await h()}catch(I){const P=I instanceof Error?I.message:"Unable to update addresses.";throw x(P),I}finally{g(!1)}};return{addresses:l,isLoading:p,isSaving:m,error:k,refresh:h,createAddress:async T=>{if(!w)throw new Error("No active customer session was found.");await v(async()=>{const I=await Yh(w,Id(T));if(!I.ok){if(!eg(I.error.message,I.error.code))throw hn(I.error.message||"Unable to create address.",I.error.code);const P=await Hn(w);if(!P.ok||!P.data||!_d(P.data).find(ue=>Zh(ue,T)))throw hn(I.error.message||"Unable to create address.",I.error.code)}})},editAddress:async T=>{if(!w)throw new Error("No active customer session was found.");await v(async()=>{const I=await Qh(w,T.id,Id(T));if(!I.ok)throw hn(I.error.message||"Unable to update address.",I.error.code)})},removeAddress:async T=>{if(!w)throw new Error("No active customer session was found.");await v(async()=>{const I=await Kh(w,T);if(!I.ok)throw hn(I.error.message||"Unable to delete address.",I.error.code)})},makeDefaultAddress:async T=>{if(!w)throw new Error("No active customer session was found.");await v(async()=>{const I=await Xh(w,T);if(!I.ok)throw hn(I.error.message||"Unable to set the default address.",I.error.code)})}}}function rg(o){const{accessToken:a,isAuthenticated:l}=Bt(),[u,p]=N.useState(null),[f,m]=N.useState(!0),[g,k]=N.useState(null),x=a||yn().accessToken;return N.useEffect(()=>{let w=!1;return(async()=>{if(!o){p(null),k("Order not found."),m(!1);return}if(!x||!l){p(null),m(!1);return}m(!0),k(null);try{const v=await Cd(x,o);if(!v.ok)throw new Error(v.error.message||"Unable to load the order.");if(!w){const T=Ed(v.data);p(T),k(T?null:"Order not found.")}}catch(v){w||(p(null),k(v instanceof Error?v.message:"Unable to load the order."))}finally{w||m(!1)}})(),()=>{w=!0}},[o,x,l]),{order:u,isLoading:f,error:g,refresh:async()=>{if(!(!o||!x||!l)){m(!0),k(null);try{const w=await Cd(x,o);if(!w.ok)throw new Error(w.error.message||"Unable to load the order.");const h=Ed(w.data);p(h),k(h?null:"Order not found.")}catch(w){p(null),k(w instanceof Error?w.message:"Unable to load the order.")}finally{m(!1)}}}}}function ng(){const{accessToken:o,isAuthenticated:a}=Bt(),[l,u]=N.useState([]),[p,f]=N.useState(null),[m,g]=N.useState(!0),[k,x]=N.useState(!1),[w,h]=N.useState(null),v=o||yn().accessToken,T=async(I,P=!1)=>{if(!v||!a){u([]),f(null),g(!1);return}P?x(!0):g(!0),h(null);try{const z=await Vh(v,10,I);if(!z.ok)throw new Error(z.error.message||"Unable to load orders.");const ae=Gh(z.data);u(ue=>P?[...ue,...ae]:ae),f(z.data?{hasNextPage:z.data.pageInfo.hasNextPage,hasPreviousPage:z.data.pageInfo.hasPreviousPage,startCursor:z.data.pageInfo.startCursor,endCursor:z.data.pageInfo.endCursor}:null)}catch(z){h(z instanceof Error?z.message:"Unable to load orders.")}finally{g(!1),x(!1)}};return N.useEffect(()=>{T()},[v,a]),{orders:l,pageInfo:p,hasMore:!!(p!=null&&p.hasNextPage&&(p!=null&&p.endCursor)),isLoading:m,isLoadingMore:k,error:w,refresh:async()=>T(),loadMore:async()=>{p!=null&&p.endCursor&&await T(p.endCursor,!0)}}}const yp=N.createContext(null);function Bt(){const o=N.useContext(yp);if(!o)throw new Error("useAuth must be used within an AuthProvider");return o}function og({children:o}){const a=Jh(),l={customer:a.customer,accessToken:a.accessToken,isAuthenticated:a.isAuthenticated,isLoading:a.isLoading,login:async(u,p)=>{await a.login(u,p)},register:async u=>{await a.register(u)},logout:()=>{a.logout()},updateProfile:async u=>{await a.updateProfile(u)},refreshCustomerData:async()=>{await a.refreshCustomerData()},requestPasswordReset:async u=>{await a.requestPasswordReset(u)},resetPassword:async(u,p)=>{await a.resetPassword(u,p)}};return n.jsx(yp.Provider,{value:l,children:o})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ag=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,u)=>u?u.toUpperCase():l.toLowerCase()),Rd=o=>{const a=ag(o);return a.charAt(0).toUpperCase()+a.slice(1)},xp=(...o)=>o.filter((a,l,u)=>!!a&&a.trim()!==""&&u.indexOf(a)===l).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=N.forwardRef(({color:o="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:p="",children:f,iconNode:m,...g},k)=>N.createElement("svg",{ref:k,...sg,width:a,height:a,stroke:o,strokeWidth:u?Number(l)*24/Number(a):l,className:xp("lucide",p),...g},[...m.map(([x,w])=>N.createElement(x,w)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(o,a)=>{const l=N.forwardRef(({className:u,...p},f)=>N.createElement(lg,{ref:f,iconNode:a,className:xp(`lucide-${ig(Rd(o))}`,`lucide-${o}`,u),...p}));return l.displayName=Rd(o),l};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Pl=ke("arrow-left",cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vp=ke("check",ug);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],pg=ke("chevron-down",dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],mg=ke("chevron-right",fg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],gg=ke("circle-alert",hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],xg=ke("circle-check-big",yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],wg=ke("circle-check",vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],kg=ke("circle-x",bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],jg=ke("ellipsis-vertical",Sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],_g=ke("external-link",Cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Eg=ke("eye-off",Tg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ng=ke("eye",Ig);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],wp=ke("info",Rg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],zg=ke("loader-circle",Pg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Pd=ke("log-out",Ag);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Dg=ke("mail",Lg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],zl=ke("map-pin",Fg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Mg=ke("menu",Og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],bp=ke("moon",Ug);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Vn=ke("package",$g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Bg=ke("pen",Hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Vg=ke("phone",Wg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],zd=ke("plus",qg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],Qg=ke("refresh-ccw",Yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Xg=ke("search",Kg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Jg=ke("shield",Gg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],kp=ke("sun",Zg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ty=ke("triangle-alert",ey);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],ny=ke("truck",ry);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Sp=ke("user",oy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Al=ke("x",iy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],sy=ke("zap",ay);function Pe({label:o,error:a,helperText:l,showPasswordToggle:u,type:p="text",disabled:f,...m}){const[g,k]=N.useState(!1),[x,w]=N.useState(!1),h=u&&g?"text":p;return n.jsxs("div",{style:{width:"100%"},children:[n.jsx("label",{htmlFor:m.id,style:{display:"block",fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--account-text)",marginBottom:"6px",fontFamily:"Inter, system-ui, sans-serif"},children:o}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx("input",{...m,type:h,disabled:f,onFocus:v=>{var T;w(!0),(T=m.onFocus)==null||T.call(m,v)},onBlur:v=>{var T;w(!1),(T=m.onBlur)==null||T.call(m,v)},style:{width:"100%",height:"44px",padding:"10px 14px",paddingRight:u?"44px":"14px",fontSize:"16px",lineHeight:"24px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:f?"var(--account-input-disabled-text)":"var(--account-input-text)",backgroundColor:f?"var(--account-input-disabled-bg)":"var(--account-input-bg)",border:`1px solid ${a?"var(--account-error-border)":x?"var(--border-focus)":"var(--account-input-border)"}`,borderRadius:"10px",outline:"none",boxShadow:x&&!a?"0 0 0 2px var(--account-focus-ring)":"none",cursor:f?"not-allowed":"text",transition:"all 0.15s ease"}}),u&&n.jsx("button",{type:"button",onClick:()=>k(!g),disabled:f,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:"4px",cursor:f?"not-allowed":"pointer",color:"var(--account-subtext)",display:"flex",alignItems:"center",justifyContent:"center",opacity:f?.4:1},"aria-label":g?"Hide password":"Show password",children:g?n.jsx(Eg,{size:20}):n.jsx(Ng,{size:20})})]}),a&&n.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-error-text)",fontFamily:"Inter, system-ui, sans-serif"},children:a}),!a&&l&&n.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:l})]})}function Je({variant:o="primary",size:a="md",isLoading:l=!1,disabled:u,children:p,...f}){const m=u||l,g={sm:{height:"36px",padding:"0 12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",padding:"0 16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",padding:"0 20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}},k={primary:{backgroundColor:"var(--account-link)",color:"var(--text-inverse)",border:"none"},secondary:{backgroundColor:"var(--account-card-bg)",color:"var(--account-title)",border:"1px solid var(--account-input-border)"},ghost:{backgroundColor:"transparent",color:"var(--account-title)",border:"none"},destructive:{backgroundColor:"var(--account-error-border)",color:"var(--text-inverse)",border:"none"}},x=g[a],w=k[o];return n.jsxs("button",{...f,disabled:m,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, system-ui, sans-serif",fontWeight:"600",cursor:m?"not-allowed":"pointer",opacity:m?.4:1,transition:"all 0.15s ease",position:"relative",whiteSpace:"nowrap",...x,...w,...f.style},onMouseEnter:h=>{!m&&o!=="ghost"&&(h.currentTarget.style.filter="brightness(0.94)")},onMouseLeave:h=>{h.currentTarget.style.filter="none"},onMouseDown:h=>{m||(h.currentTarget.style.filter="brightness(0.88)")},onMouseUp:h=>{m||(h.currentTarget.style.filter="brightness(0.94)")},children:[l&&n.jsx(zg,{size:a==="sm"?14:a==="lg"?18:16,style:{animation:"spin 1s linear infinite"}}),p,n.jsx("style",{children:`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `})]})}function Ht({type:o,children:a}){const u={success:{backgroundColor:"var(--account-success-bg)",borderColor:"var(--account-success-border)",textColor:"var(--account-success-text)",icon:xg},error:{backgroundColor:"var(--account-error-bg)",borderColor:"var(--account-error-border)",textColor:"var(--account-error-text)",icon:kg},warning:{backgroundColor:"var(--account-warning-bg)",borderColor:"var(--account-warning-border)",textColor:"var(--account-warning-text)",icon:gg},info:{backgroundColor:"var(--account-info-bg)",borderColor:"var(--account-info-border)",textColor:"var(--account-info-text)",icon:wp}}[o],p=u.icon;return n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px 16px",backgroundColor:u.backgroundColor,border:`1px solid ${u.borderColor}`,borderRadius:"10px"},children:[n.jsx(p,{size:20,style:{color:u.textColor,flexShrink:0,marginTop:"2px"}}),n.jsx("div",{style:{flex:1,fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:u.textColor,fontFamily:"Inter, system-ui, sans-serif"},children:a})]})}function ht(o){typeof window>"u"||(window.location.href=o)}const ly=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function cy(){const{login:o}=Bt(),[a,l]=N.useState(""),[u,p]=N.useState(""),[f,m]=N.useState({}),[g,k]=N.useState(!1),x=()=>{const h={},v=a.trim(),T=u.trim();return v?ly.test(v)||(h.email="Please enter a valid email address"):h.email="Email is required",T||(h.password="Password is required"),m(h),Object.keys(h).length===0},w=async h=>{if(h.preventDefault(),!!x()){k(!0),m({});try{await o(a,u),ht("/account")}catch(v){m({general:v instanceof Error?v.message:"Invalid email or password"})}finally{k(!1)}}};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:n.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[n.jsx("h1",{"data-testid":"login-page-heading",style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Welcome back"}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:"Sign in to your account to continue"})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:[f.general&&n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx(Ht,{type:"error",children:f.general})}),n.jsxs("form",{onSubmit:w,noValidate:!0,children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[n.jsx(Pe,{id:"email",label:"Email",type:"email",value:a,onChange:h=>l(h.target.value),error:f.email,placeholder:"you@example.com",autoComplete:"email",disabled:g}),n.jsx(Pe,{id:"password",label:"Password",type:"password",value:u,onChange:h=>p(h.target.value),error:f.password,placeholder:"Enter your password",autoComplete:"current-password",showPasswordToggle:!0,disabled:g})]}),n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx("button",{type:"button",onClick:()=>ht("/account/password-reset"),disabled:g,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:g?"not-allowed":"pointer",textDecoration:"none",opacity:g?.4:1},onMouseEnter:h=>!g&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Forgot password?"})}),n.jsx(Je,{type:"submit",variant:"primary",size:"lg","data-testid":"login-submit",isLoading:g,style:{width:"100%",marginBottom:"16px"},children:"Sign in"}),n.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Don't have an account?"," ",n.jsx("button",{type:"button",onClick:()=>ht("/account/register"),disabled:g,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:g?"not-allowed":"pointer",textDecoration:"none",opacity:g?.4:1},onMouseEnter:h=>!g&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Create account"})]})]})]}),n.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"var(--account-info-bg)",border:"1px solid var(--account-info-border)",borderRadius:"12px",textAlign:"center"},children:n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-info-text)",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Use your account email and password to sign in"})})]})})}function uy(){const{register:o}=Bt(),[a,l]=N.useState({firstName:"",lastName:"",email:"",phone:"",password:""}),[u,p]=N.useState({}),[f,m]=N.useState(!1),g=()=>{const w={};return a.firstName.trim()||(w.firstName="First name is required"),a.lastName.trim()||(w.lastName="Last name is required"),a.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)||(w.email="Please enter a valid email address"):w.email="Email is required",a.phone&&!/^[\d\s\-\+\(\)]+$/.test(a.phone)&&(w.phone="Please enter a valid phone number"),a.password?a.password.length<8&&(w.password="Password must be at least 8 characters"):w.password="Password is required",p(w),Object.keys(w).length===0},k=async w=>{if(w.preventDefault(),!!g()){m(!0),p({});try{await o(a),ht("/account")}catch(h){p({general:h instanceof Error?h.message:"Registration failed"})}finally{m(!1)}}},x=(w,h)=>{l(v=>({...v,[w]:h})),u[w]&&p(v=>({...v,[w]:""}))};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:n.jsxs("div",{style:{width:"100%",maxWidth:"540px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[n.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Create your account"}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:"Join us to start shopping and manage your orders"})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:[u.general&&n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx(Ht,{type:"error",children:u.general})}),n.jsxs("form",{onSubmit:k,children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[n.jsx(Pe,{id:"firstName",label:"First name",type:"text",value:a.firstName,onChange:w=>x("firstName",w.target.value),error:u.firstName,placeholder:"Sarah",autoComplete:"given-name",disabled:f}),n.jsx(Pe,{id:"lastName",label:"Last name",type:"text",value:a.lastName,onChange:w=>x("lastName",w.target.value),error:u.lastName,placeholder:"Chen",autoComplete:"family-name",disabled:f})]}),n.jsx(Pe,{id:"email",label:"Email",type:"email",value:a.email,onChange:w=>x("email",w.target.value),error:u.email,placeholder:"you@example.com",autoComplete:"email",disabled:f}),n.jsx(Pe,{id:"phone",label:"Phone (optional)",type:"tel",value:a.phone,onChange:w=>x("phone",w.target.value),error:u.phone,placeholder:"+1 (555) 123-4567",autoComplete:"tel",disabled:f}),n.jsx(Pe,{id:"password",label:"Password",type:"password",value:a.password,onChange:w=>x("password",w.target.value),error:u.password,helperText:u.password?void 0:"Must be at least 8 characters",placeholder:"Create a password",autoComplete:"new-password",showPasswordToggle:!0,disabled:f})]}),n.jsx(Je,{type:"submit",variant:"primary",size:"lg",isLoading:f,style:{width:"100%",marginBottom:"16px"},children:"Create account"}),n.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Already have an account?"," ",n.jsx("button",{type:"button",onClick:()=>ht("/account/login"),disabled:f,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:f?"not-allowed":"pointer",textDecoration:"none",opacity:f?.4:1},onMouseEnter:w=>!f&&(w.currentTarget.style.textDecoration="underline"),onMouseLeave:w=>w.currentTarget.style.textDecoration="none",children:"Sign in"})]})]})]})]})})}function dy(){const{requestPasswordReset:o}=Bt(),[a,l]=N.useState(""),[u,p]=N.useState(""),[f,m]=N.useState(!1),[g,k]=N.useState(!1),x=h=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h),w=async h=>{if(h.preventDefault(),!a){p("Email is required");return}if(!x(a)){p("Please enter a valid email address");return}m(!0),p("");try{await o(a),k(!0)}catch(v){p(v instanceof Error?v.message:"Failed to send reset link. Please try again.")}finally{m(!1)}};return g?n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:n.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"var(--account-success-bg)",borderRadius:"16px",marginBottom:"16px"},children:n.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"var(--account-success-border)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),n.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Check your email"}),n.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["We've sent a password reset link to",n.jsx("br",{}),n.jsx("strong",{style:{color:"var(--account-text)"},children:a})]})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",padding:"32px",boxShadow:"var(--account-card-shadow)",marginBottom:"16px"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:"Click the link in the email to reset your password. If you don't see the email, check your spam folder."}),n.jsx(Je,{variant:"primary",size:"lg",onClick:()=>ht("/account/login"),style:{width:"100%"},children:"Return to sign in"})]}),n.jsx("button",{onClick:()=>{k(!1),l("")},style:{display:"block",width:"100%",background:"none",border:"none",padding:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"center"},onMouseEnter:h=>h.currentTarget.style.textDecoration="underline",onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Didn't receive the email? Try again"})]})}):n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:n.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[n.jsxs("button",{onClick:()=>ht("/account/login"),disabled:f,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:f?"not-allowed":"pointer",opacity:f?.4:1},onMouseEnter:h=>!f&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:[n.jsx(Pl,{size:16}),"Back to sign in"]}),n.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[n.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Reset your password"}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:"Enter your email and we'll send you a reset link"})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:[u&&n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx(Ht,{type:"error",children:u})}),n.jsxs("form",{onSubmit:w,noValidate:!0,children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx(Pe,{id:"email",label:"Email",type:"email",value:a,onChange:h=>{l(h.target.value),p("")},error:u&&!a?u:"",placeholder:"you@example.com",autoComplete:"email",disabled:f})}),n.jsx(Je,{type:"submit",variant:"primary",size:"lg",isLoading:f,style:{width:"100%"},children:"Send reset link"})]})]})]})})}function py(){if(typeof window>"u")return null;const o=window.location.pathname.match(/^\/account\/reset\/([^/]+)\/([^/]+)\/?$/);return o?{id:decodeURIComponent(o[1]),token:decodeURIComponent(o[2])}:null}function fy({id:o,token:a}){return`${"https://thevibestation.com".replace(/\/+$/,"")}/account/reset/${encodeURIComponent(o)}/${encodeURIComponent(a)}`}function Ad(){const{resetPassword:o}=Bt(),a=py(),[l,u]=N.useState(""),[p,f]=N.useState(""),[m,g]=N.useState({}),[k,x]=N.useState(!1),w=()=>{const v={};return l?l.length<5&&(v.password="Password must be at least 5 characters"):v.password="Password is required",p?l!==p&&(v.confirmPassword="Passwords do not match"):v.confirmPassword="Please confirm your password",g(v),Object.keys(v).length===0},h=async v=>{if(v.preventDefault(),!a){g({general:"This password setup link is invalid. Please request a new one."});return}if(w()){x(!0),g({});try{await o(fy(a),l),ht("/account")}catch(T){const I=T.code;g(I==="CUSTOMER_RESET_TOKEN_INVALID"||I==="TOKEN_EXPIRED"?{general:"expired"}:{general:T instanceof Error?T.message:"Failed to set your password. Please try again."})}finally{x(!1)}}};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:n.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[n.jsxs("button",{onClick:()=>ht("/account/login"),disabled:k,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:k?"not-allowed":"pointer",opacity:k?.4:1},onMouseEnter:v=>!k&&(v.currentTarget.style.textDecoration="underline"),onMouseLeave:v=>v.currentTarget.style.textDecoration="none",children:[n.jsx(Pl,{size:16}),"Back to sign in"]}),n.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[n.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Set new password"}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:"Create a password to activate your account or regain access."})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:[m.general&&n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx(Ht,{type:"error",children:m.general==="expired"?n.jsxs(n.Fragment,{children:["This link has expired. Please request a new one."," ",n.jsx("button",{type:"button",onClick:()=>ht("/account/forgot-password"),style:{background:"none",border:"none",padding:0,color:"var(--account-error-text)",font:"inherit",fontWeight:600,textDecoration:"underline",cursor:"pointer"},children:"Request a new link"}),"."]}):m.general})}),n.jsxs("form",{onSubmit:h,children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[n.jsx(Pe,{id:"password",label:"New password",type:"password",value:l,onChange:v=>{u(v.target.value),(m.password||m.general)&&g(T=>({...T,password:"",general:""}))},error:m.password,helperText:m.password?void 0:"Must be at least 5 characters",placeholder:"Enter new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:k}),n.jsx(Pe,{id:"confirmPassword",label:"Confirm password",type:"password",value:p,onChange:v=>{f(v.target.value),(m.confirmPassword||m.general)&&g(T=>({...T,confirmPassword:"",general:""}))},error:m.confirmPassword,placeholder:"Confirm new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:k})]}),n.jsx(Je,{type:"submit",variant:"primary",size:"lg",isLoading:k,style:{width:"100%"},children:"Set Password"})]})]})]})})}function Ld({activeSection:o,onSectionChange:a,onLogout:l,isMobile:u=!1}){const p=[{id:"overview",label:"Overview",icon:Sp},{id:"orders",label:"Orders",icon:Vn},{id:"addresses",label:"Addresses",icon:zl}];return u?n.jsxs("div",{style:{display:"flex",gap:"8px",overflowX:"auto",padding:"16px",backgroundColor:"var(--account-panel-bg)",borderBottom:"1px solid var(--account-panel-border)"},children:[p.map(f=>{const m=f.icon,g=o===f.id;return n.jsxs("button",{onClick:()=>a(f.id),style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",backgroundColor:g?"var(--account-nav-active-bg)":"transparent",border:`1px solid ${g?"var(--account-input-border)":"transparent"}`,borderRadius:"10px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:g?"var(--account-title)":"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s"},children:[n.jsx(m,{size:16}),f.label]},f.id)}),n.jsxs("button",{onClick:l,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",backgroundColor:"transparent",border:"1px solid transparent",borderRadius:"10px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-error-border)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",whiteSpace:"nowrap"},children:[n.jsx(Pd,{size:16}),"Sign out"]})]}):n.jsxs("nav",{style:{backgroundColor:"var(--account-panel-bg)",border:"1px solid var(--account-panel-border)",borderRadius:"12px",padding:"8px",boxShadow:"var(--account-card-shadow)"},children:[p.map(f=>{const m=f.icon,g=o===f.id;return n.jsxs("button",{onClick:()=>a(f.id),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:g?"var(--account-nav-active-bg)":"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:g?"600":"400",color:g?"var(--account-title)":"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:k=>{g||(k.currentTarget.style.backgroundColor="var(--account-nav-hover-bg)")},onMouseLeave:k=>{g||(k.currentTarget.style.backgroundColor="transparent")},children:[n.jsx(m,{size:20}),f.label]},f.id)}),n.jsx("div",{style:{height:"1px",backgroundColor:"var(--account-panel-border)",margin:"8px 0"}}),n.jsxs("button",{onClick:l,style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-error-border)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="var(--account-error-bg)"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="transparent"},children:[n.jsx(Pd,{size:20}),"Sign out"]})]})}function my({customer:o}){const{updateProfile:a}=Bt(),[l,u]=N.useState(!1),[p,f]=N.useState({firstName:o.firstName,lastName:o.lastName,email:o.email,phone:o.phone||""}),[m,g]=N.useState(!1),[k,x]=N.useState(""),[w,h]=N.useState(""),v=async()=>{g(!0),x(""),h("");try{await a(p),x("Profile updated successfully"),u(!1),setTimeout(()=>x(""),3e3)}catch(I){h(I instanceof Error?I.message:"Failed to update profile")}finally{g(!1)}},T=()=>{f({firstName:o.firstName,lastName:o.lastName,email:o.email,phone:o.phone||""}),u(!1),h("")};return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:"Profile Information"}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your personal information and contact details"})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"24px",boxShadow:"var(--account-card-shadow)"},children:[k&&n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(Ht,{type:"success",children:k})}),w&&n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(Ht,{type:"error",children:w})}),l?n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[n.jsx(Pe,{id:"firstName",label:"First name",type:"text",value:p.firstName,onChange:I=>f(P=>({...P,firstName:I.target.value})),disabled:m}),n.jsx(Pe,{id:"lastName",label:"Last name",type:"text",value:p.lastName,onChange:I=>f(P=>({...P,lastName:I.target.value})),disabled:m})]}),n.jsx(Pe,{id:"email",label:"Email",type:"email",value:p.email,onChange:I=>f(P=>({...P,email:I.target.value})),disabled:m}),n.jsx(Pe,{id:"phone",label:"Phone (optional)",type:"tel",value:p.phone,onChange:I=>f(P=>({...P,phone:I.target.value})),disabled:m})]}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[n.jsx(Je,{variant:"secondary",size:"md",onClick:T,disabled:m,children:"Cancel"}),n.jsx(Je,{variant:"primary",size:"md",onClick:v,isLoading:m,children:"Save changes"})]})]}):n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px"},children:[n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"var(--account-icon-bg)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Sp,{size:28,style:{color:"var(--account-subtext)"}})}),n.jsxs("div",{children:[n.jsxs("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:[o.firstName," ",o.lastName]}),n.jsxs("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Member since ",new Date(o.createdAt).toLocaleDateString("en-US",{month:"long",year:"numeric"})]})]})]}),n.jsxs(Je,{variant:"secondary",size:"sm",onClick:()=>u(!0),children:[n.jsx(Bg,{size:14}),"Edit"]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(Dg,{size:20,style:{color:"var(--account-subtext)",flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Email"}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:o.email})]})]}),o.phone&&n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(Vg,{size:20,style:{color:"var(--account-subtext)",flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Phone"}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:o.phone})]})]})]})]})]})]})}function hy({order:o,onClick:a}){const l=f=>new Date(f).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),p=(f=>{switch(f){case"FULFILLED":return{bg:"var(--account-success-bg)",border:"var(--account-success-border)",text:"var(--account-success-text)",label:"Fulfilled"};case"UNFULFILLED":return{bg:"var(--account-warning-bg)",border:"var(--account-warning-border)",text:"var(--account-warning-text)",label:"Unfulfilled"};case"PARTIALLY_FULFILLED":return{bg:"var(--account-info-bg)",border:"var(--account-info-border)",text:"var(--account-info-text)",label:"Partially fulfilled"};case"CANCELLED":return{bg:"var(--account-error-bg)",border:"var(--account-error-border)",text:"var(--account-error-text)",label:"Cancelled"};default:return{bg:"var(--account-nav-active-bg)",border:"var(--account-input-border)",text:"var(--account-subtext)",label:f}}})(o.fulfillmentStatus);return n.jsx("button",{onClick:()=>a(o.id),style:{width:"100%",backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"20px",cursor:"pointer",textAlign:"left",transition:"all 0.15s",boxShadow:"var(--account-card-shadow)"},onMouseEnter:f=>{f.currentTarget.style.boxShadow="var(--account-card-shadow-hover)",f.currentTarget.style.borderColor="var(--account-input-border)"},onMouseLeave:f=>{f.currentTarget.style.boxShadow="var(--account-card-shadow)",f.currentTarget.style.borderColor="var(--account-card-border)"},children:n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[n.jsx("div",{style:{flexShrink:0,width:"48px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--account-icon-bg)",borderRadius:"10px"},children:n.jsx(Vn,{size:24,style:{color:"var(--account-subtext)"}})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px",flexWrap:"wrap"},children:[n.jsxs("h3",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:["Order #",o.orderNumber]}),n.jsx("div",{style:{display:"inline-flex",alignItems:"center",padding:"2px 8px",backgroundColor:p.bg,border:`1px solid ${p.border}`,borderRadius:"6px"},children:n.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:p.text,fontFamily:"Inter, system-ui, sans-serif"},children:p.label})})]}),n.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"12px"},children:["Placed on ",l(o.createdAt)," • ",o.lineItems.length," item",o.lineItems.length!==1?"s":""]}),n.jsx("div",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:o.totalPrice})]}),n.jsx("div",{style:{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--account-input-disabled-text)"},children:n.jsx(mg,{size:20})})]})})}function jp({icon:o,title:a,description:l,action:u}){return n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"64px 24px",textAlign:"center"},children:[n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"var(--account-icon-bg)",color:"var(--account-subtext)",marginBottom:"16px"},children:o}),n.jsx("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:a}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:u?"24px":"0",maxWidth:"400px"},children:l}),u&&n.jsx("div",{children:u})]})}function gy(){const{orders:o,hasMore:a,isLoading:l,isLoadingMore:u,error:p,loadMore:f}=ng(),m=g=>{ht(`/account/orders/${encodeURIComponent(g)}`)};return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:"Order History"}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"View and track your orders"})]}),p&&n.jsx("div",{style:{marginBottom:"16px"},children:n.jsx(Ht,{type:"error",children:p})}),l?n.jsx("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading orders..."})}):o.length>0?n.jsxs("div",{children:[n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:a?"24px":"0"},children:o.map(g=>n.jsx(hy,{order:g,onClick:m},g.id))}),a&&n.jsx("div",{style:{textAlign:"center"},children:n.jsx(Je,{variant:"secondary",size:"md",onClick:()=>void f(),isLoading:u,children:"Load more orders"})})]}):n.jsx("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",boxShadow:"var(--account-card-shadow)"},children:n.jsx(jp,{icon:n.jsx(Vn,{size:32}),title:"No orders yet",description:"When you place an order, it will appear here so you can track its status.",action:n.jsx(Je,{variant:"primary",size:"md",children:"Start shopping"})})})]})}function yy({address:o,onEdit:a,onDelete:l,onSetDefault:u}){const[p,f]=N.useState(!1);return n.jsxs("div",{style:{position:"relative",backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"20px",boxShadow:"var(--account-card-shadow)"},children:[o.isDefault&&n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 8px",backgroundColor:"var(--account-success-bg)",border:"1px solid var(--account-success-border)",borderRadius:"6px",marginBottom:"12px"},children:[n.jsx(vp,{size:12,style:{color:"var(--account-success-text)"}}),n.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--account-success-text)",fontFamily:"Inter, system-ui, sans-serif"},children:"Default"})]}),n.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px"},children:[n.jsx("button",{onClick:()=>f(!p),style:{background:"none",border:"none",padding:"4px",cursor:"pointer",color:"var(--account-subtext)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--account-nav-hover-bg)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:n.jsx(jg,{size:20})}),p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10},onClick:()=>f(!1)}),n.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:"4px",backgroundColor:"var(--account-menu-bg)",border:"1px solid var(--account-card-border)",borderRadius:"10px",boxShadow:"var(--account-card-shadow-hover)",padding:"4px",minWidth:"160px",zIndex:20},children:[n.jsx("button",{onClick:()=>{f(!1),a(o)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-text)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--account-nav-hover-bg)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Edit address"}),!o.isDefault&&n.jsx("button",{onClick:()=>{f(!1),u(o.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-text)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--account-nav-hover-bg)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Set as default"}),n.jsx("div",{style:{height:"1px",backgroundColor:"var(--account-card-border)",margin:"4px 0"}}),n.jsx("button",{onClick:()=>{f(!1),l(o.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-error-border)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--account-error-bg)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Delete address"})]})]})]}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("div",{style:{flexShrink:0,width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--account-icon-bg)",borderRadius:"8px"},children:n.jsx(zl,{size:20,style:{color:"var(--account-subtext)"}})}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:[o.firstName," ",o.lastName]}),n.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:[o.company&&n.jsx("div",{children:o.company}),n.jsx("div",{children:o.address1}),o.address2&&n.jsx("div",{children:o.address2}),n.jsxs("div",{children:[o.city,", ",o.province," ",o.zip]}),n.jsx("div",{children:o.country}),o.phone&&n.jsx("div",{style:{marginTop:"8px"},children:o.phone})]})]})]})]})}function Dd({address:o,onClose:a,onSave:l}){const[u,p]=N.useState({firstName:(o==null?void 0:o.firstName)||"",lastName:(o==null?void 0:o.lastName)||"",company:(o==null?void 0:o.company)||"",address1:(o==null?void 0:o.address1)||"",address2:(o==null?void 0:o.address2)||"",city:(o==null?void 0:o.city)||"",province:(o==null?void 0:o.province)||"",zip:(o==null?void 0:o.zip)||"",country:(o==null?void 0:o.country)||"United States",phone:(o==null?void 0:o.phone)||""}),[f,m]=N.useState({}),[g,k]=N.useState(!1),x=()=>{const v={};return u.firstName.trim()||(v.firstName="First name is required"),u.lastName.trim()||(v.lastName="Last name is required"),u.address1.trim()||(v.address1="Address is required"),u.city.trim()||(v.city="City is required"),u.province.trim()||(v.province="State/Province is required"),u.zip.trim()||(v.zip="ZIP/Postal code is required"),u.country.trim()||(v.country="Country is required"),m(v),Object.keys(v).length===0},w=async v=>{if(v.preventDefault(),!!x()){k(!0);try{await new Promise(T=>setTimeout(T,500)),l(o?{...o,...u}:u)}catch(T){console.error("Failed to save address:",T)}finally{k(!1)}}},h=(v,T)=>{p(I=>({...I,[v]:T})),f[v]&&m(I=>({...I,[v]:""}))};return n.jsx(n.Fragment,{children:n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"var(--account-overlay)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50,overflow:"auto"},onClick:a,children:n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",borderRadius:"16px",width:"100%",maxWidth:"600px",maxHeight:"90vh",overflow:"auto",border:"1px solid var(--account-card-border)",boxShadow:"var(--account-card-shadow-hover)"},onClick:v=>v.stopPropagation(),children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid var(--account-card-border)"},children:[n.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:o?"Edit address":"Add new address"}),n.jsx("button",{onClick:a,disabled:g,style:{background:"none",border:"none",padding:"4px",cursor:g?"not-allowed":"pointer",color:"var(--account-subtext)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",opacity:g?.4:1},children:n.jsx(Al,{size:20})})]}),n.jsxs("form",{onSubmit:w,children:[n.jsx("div",{style:{padding:"24px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[n.jsx(Pe,{id:"firstName",label:"First name",value:u.firstName,onChange:v=>h("firstName",v.target.value),error:f.firstName,disabled:g}),n.jsx(Pe,{id:"lastName",label:"Last name",value:u.lastName,onChange:v=>h("lastName",v.target.value),error:f.lastName,disabled:g})]}),n.jsx(Pe,{id:"company",label:"Company (optional)",value:u.company,onChange:v=>h("company",v.target.value),disabled:g}),n.jsx(Pe,{id:"address1",label:"Address",value:u.address1,onChange:v=>h("address1",v.target.value),error:f.address1,placeholder:"123 Main Street",disabled:g}),n.jsx(Pe,{id:"address2",label:"Apartment, suite, etc. (optional)",value:u.address2,onChange:v=>h("address2",v.target.value),placeholder:"Apt 4B",disabled:g}),n.jsx(Pe,{id:"city",label:"City",value:u.city,onChange:v=>h("city",v.target.value),error:f.city,disabled:g}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[n.jsx(Pe,{id:"province",label:"State / Province",value:u.province,onChange:v=>h("province",v.target.value),error:f.province,placeholder:"CA",disabled:g}),n.jsx(Pe,{id:"zip",label:"ZIP / Postal code",value:u.zip,onChange:v=>h("zip",v.target.value),error:f.zip,placeholder:"94103",disabled:g})]}),n.jsx(Pe,{id:"country",label:"Country",value:u.country,onChange:v=>h("country",v.target.value),error:f.country,disabled:g}),n.jsx(Pe,{id:"phone",label:"Phone (optional)",type:"tel",value:u.phone,onChange:v=>h("phone",v.target.value),placeholder:"+1 (555) 123-4567",disabled:g})]})}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",padding:"24px",borderTop:"1px solid var(--account-card-border)"},children:[n.jsx(Je,{type:"button",variant:"secondary",size:"md",onClick:a,disabled:g,children:"Cancel"}),n.jsx(Je,{type:"submit",variant:"primary",size:"md",isLoading:g,children:o?"Save changes":"Add address"})]})]})]})})})}function xy({title:o,description:a,onConfirm:l,onCancel:u}){return n.jsx(n.Fragment,{children:n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"var(--account-overlay)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50},onClick:u,children:n.jsx("div",{style:{backgroundColor:"var(--account-card-bg)",borderRadius:"16px",width:"100%",maxWidth:"440px",border:"1px solid var(--account-card-border)",boxShadow:"var(--account-card-shadow-hover)"},onClick:p=>p.stopPropagation(),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",backgroundColor:"var(--account-error-bg)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(ty,{size:24,style:{color:"var(--account-error-border)"}})}),n.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:o}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:a}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[n.jsx(Je,{variant:"secondary",size:"md",onClick:u,children:"Cancel"}),n.jsx(Je,{variant:"destructive",size:"md",onClick:l,children:"Delete"})]})]})})})})}function vy(){const{addresses:o,isLoading:a,isSaving:l,error:u,createAddress:p,editAddress:f,removeAddress:m,makeDefaultAddress:g}=tg(),[k,x]=N.useState(!1),[w,h]=N.useState(null),[v,T]=N.useState(null),I=async J=>{await p(J),x(!1)},P=J=>{h(J)},z=async J=>{await f(J),h(null)},ae=J=>{T(J)},ue=async()=>{v&&(await m(v),T(null))},ge=async J=>{await g(J)};return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px",flexWrap:"wrap",gap:"16px"},children:[n.jsxs("div",{children:[n.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:"Saved Addresses"}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your shipping and billing addresses"})]}),o.length>0&&n.jsxs(Je,{variant:"primary",size:"md",onClick:()=>x(!0),children:[n.jsx(zd,{size:16}),"Add address"]})]}),u&&n.jsx("div",{style:{marginBottom:"16px"},children:n.jsx(Ht,{type:"error",children:u})}),a?n.jsx("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading addresses..."})}):o.length>0?n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"16px"},children:o.map(J=>n.jsx(yy,{address:J,onEdit:P,onDelete:ae,onSetDefault:ge},J.id))}):n.jsx("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",boxShadow:"var(--account-card-shadow)"},children:n.jsx(jp,{icon:n.jsx(zl,{size:32}),title:"No addresses saved",description:"Add a shipping address to make checkout faster and easier.",action:n.jsxs(Je,{variant:"primary",size:"md",onClick:()=>x(!0),children:[n.jsx(zd,{size:16}),"Add address"]})})}),k&&n.jsx(Dd,{onClose:()=>x(!1),onSave:I}),w&&n.jsx(Dd,{address:w,onClose:()=>h(null),onSave:z}),v&&n.jsx(xy,{title:"Delete address",description:"Are you sure you want to delete this address? This action cannot be undone.",onConfirm:()=>void ue(),onCancel:()=>T(null)}),l&&n.jsx("div",{style:{marginTop:"16px"},children:n.jsx(Ht,{type:"info",children:"Saving address changes..."})})]})}function wy(){const{customer:o,isAuthenticated:a,logout:l,isLoading:u}=Bt(),[p,f]=N.useState("overview"),[m,g]=N.useState(window.innerWidth<768);N.useEffect(()=>{!u&&!a&&ht("/account/login")},[a,u]),N.useEffect(()=>{const x=()=>{g(window.innerWidth<768)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const k=()=>{l(),ht("/account/login")};return u||!o?n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 16px",border:"3px solid var(--account-icon-bg)",borderTopColor:"var(--account-link)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),n.jsx("style",{children:`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `})]})}):n.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)"},children:[n.jsx("div",{style:{backgroundColor:"var(--account-panel-bg)",borderBottom:"1px solid var(--account-panel-border)"},children:n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"32px 48px"},children:[n.jsx("h1",{"data-testid":"account-page-heading",style:{fontSize:m?"22px":"28px",lineHeight:m?"30px":"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:"My Account"}),n.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Welcome back, ",o.firstName]})]})}),m&&n.jsx(Ld,{activeSection:p,onSectionChange:f,onLogout:k,isMobile:!0}),n.jsx("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"48px 48px"},children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:m?"1fr":"240px 1fr",gap:m?"0":"32px"},children:[!m&&n.jsx("div",{children:n.jsx(Ld,{activeSection:p,onSectionChange:f,onLogout:k})}),n.jsxs("div",{children:[p==="overview"&&n.jsx(my,{customer:o}),p==="orders"&&n.jsx(gy,{}),p==="addresses"&&n.jsx(vy,{})]})]})})]})}function by(){const o=window.location.pathname.match(/^\/account\/orders\/([^/]+)\/?$/);if(!o)return null;try{return decodeURIComponent(o[1])}catch{return null}}function ky(o){return new Date(o).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Fd(o,a="fulfillment"){if(!o)return{label:a==="financial"?"Payment pending":"Pending",bg:"var(--account-nav-active-bg)",border:"var(--account-input-border)",text:"var(--account-subtext)"};const l=o.toUpperCase();return l==="FULFILLED"||l==="PAID"?{label:o.replace(/_/g," ").toLowerCase().replace(/(^|\s)\S/g,u=>u.toUpperCase()),bg:"var(--account-success-bg)",border:"var(--account-success-border)",text:"var(--account-success-text)"}:l==="PARTIALLY_FULFILLED"||l==="PARTIALLY_PAID"?{label:o.replace(/_/g," ").toLowerCase().replace(/(^|\s)\S/g,u=>u.toUpperCase()),bg:"var(--account-info-bg)",border:"var(--account-info-border)",text:"var(--account-info-text)"}:l==="CANCELLED"||l==="REFUNDED"||l==="VOIDED"?{label:o.replace(/_/g," ").toLowerCase().replace(/(^|\s)\S/g,u=>u.toUpperCase()),bg:"var(--account-error-bg)",border:"var(--account-error-border)",text:"var(--account-error-text)"}:{label:o.replace(/_/g," ").toLowerCase().replace(/(^|\s)\S/g,u=>u.toUpperCase()),bg:"var(--account-warning-bg)",border:"var(--account-warning-border)",text:"var(--account-warning-text)"}}function Od({title:o,address:a}){return a?n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"20px",boxShadow:"var(--account-card-shadow)"},children:[n.jsx("h3",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"10px"},children:o}),n.jsxs("div",{style:{fontSize:"14px",lineHeight:"22px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:[a.name?n.jsx("div",{children:a.name}):null,n.jsx("div",{children:a.address1}),a.address2?n.jsx("div",{children:a.address2}):null,n.jsxs("div",{children:[a.city,a.province?`, ${a.province}`:"",a.zip?` ${a.zip}`:""]}),n.jsx("div",{children:a.country}),a.phone?n.jsx("div",{children:a.phone}):null]})]}):null}function Sy(){const{isAuthenticated:o,isLoading:a}=Bt(),l=by(),{order:u,isLoading:p,error:f,refresh:m}=rg(l);if(N.useEffect(()=>{!a&&!o&&ht("/account/login")},[o,a]),a||p&&!u&&!f)return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 16px",border:"3px solid var(--account-icon-bg)",borderTopColor:"var(--account-link)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),n.jsx("style",{children:`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `})]})});const g=Fd(u==null?void 0:u.fulfillmentStatus,"fulfillment"),k=Fd(u==null?void 0:u.financialStatus,"financial");return n.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)"},children:[n.jsx("div",{style:{backgroundColor:"var(--account-panel-bg)",borderBottom:"1px solid var(--account-panel-border)"},children:n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"28px 20px"},children:[n.jsxs("button",{type:"button",onClick:()=>ht("/account"),style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:0,marginBottom:"16px",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"600",cursor:"pointer"},children:[n.jsx(Pl,{size:16}),"Back to account"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px",alignItems:"flex-start",flexWrap:"wrap"},children:[n.jsxs("div",{children:[n.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"6px"},children:(u==null?void 0:u.name)||"Order details"}),u?n.jsxs("p",{style:{fontSize:"15px",lineHeight:"22px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Placed on ",ky(u.createdAt)]}):null]}),n.jsx("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:u?n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",padding:"6px 10px",backgroundColor:g.bg,border:`1px solid ${g.border}`,borderRadius:"999px",color:g.text,fontSize:"13px",lineHeight:"18px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:g.label}),n.jsx("div",{style:{display:"inline-flex",alignItems:"center",padding:"6px 10px",backgroundColor:k.bg,border:`1px solid ${k.border}`,borderRadius:"999px",color:k.text,fontSize:"13px",lineHeight:"18px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:k.label})]}):null})]})]})}),n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"32px 20px 48px"},children:[f?n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(Ht,{type:"error",children:f})}):null,!u&&!p?n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",boxShadow:"var(--account-card-shadow)",padding:"32px",textAlign:"center"},children:[n.jsx(Vn,{size:32,style:{color:"var(--account-subtext)",marginBottom:"12px"}}),n.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Order unavailable"}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"20px"},children:"The requested order could not be found for this account."}),n.jsx(Je,{variant:"secondary",size:"md",onClick:()=>ht("/account"),children:"Return to account"})]}):null,u?n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.75fr) minmax(280px, 1fr)",gap:"24px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs("section",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",boxShadow:"var(--account-card-shadow)",overflow:"hidden"},children:[n.jsx("div",{style:{padding:"20px 24px",borderBottom:"1px solid var(--account-card-border)"},children:n.jsx("h2",{style:{fontSize:"20px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:"Items"})}),n.jsx("div",{style:{padding:"8px 24px 24px"},children:u.lineItems.map(x=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:x.imageUrl?"72px minmax(0, 1fr)":"minmax(0, 1fr)",gap:"16px",padding:"16px 0",borderBottom:"1px solid var(--account-card-border)"},children:[x.imageUrl?n.jsx("img",{src:x.imageUrl,alt:x.imageAlt||x.title,style:{width:"72px",height:"72px",objectFit:"cover",borderRadius:"10px",backgroundColor:"var(--account-icon-bg)"}}):null,n.jsxs("div",{style:{minWidth:0},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px",alignItems:"flex-start"},children:[n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:x.title}),n.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Qty ",x.quantity,x.variantTitle?` • ${x.variantTitle}`:"",x.sku?` • SKU ${x.sku}`:""]})]}),n.jsx("div",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",whiteSpace:"nowrap"},children:x.discountedTotalPrice||x.originalTotalPrice})]}),x.selectedOptions.length>0?n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"10px"},children:x.selectedOptions.map(w=>n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",padding:"4px 8px",borderRadius:"999px",backgroundColor:"var(--account-nav-active-bg)",color:"var(--account-subtext)",fontSize:"12px",lineHeight:"18px",fontWeight:"500",fontFamily:"Inter, system-ui, sans-serif"},children:[w.name,": ",w.value]},`${x.id}-${w.name}`))}):null,x.originalTotalPrice&&x.originalTotalPrice!==x.discountedTotalPrice||x.unitPrice?n.jsxs("div",{style:{marginTop:"10px",fontSize:"13px",lineHeight:"18px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:[x.unitPrice?`Unit price ${x.unitPrice}`:"",x.unitPrice&&x.originalTotalPrice&&x.originalTotalPrice!==x.discountedTotalPrice?" • ":"",x.originalTotalPrice&&x.originalTotalPrice!==x.discountedTotalPrice?`Original total ${x.originalTotalPrice}`:""]}):null]})]},x.id))})]}),u.fulfillments.length>0?n.jsxs("section",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",boxShadow:"var(--account-card-shadow)",padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"18px"},children:[n.jsx(ny,{size:18,style:{color:"var(--account-subtext)"}}),n.jsx("h2",{style:{fontSize:"20px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:"Fulfillment"})]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:u.fulfillments.map((x,w)=>n.jsxs("div",{style:{border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"16px"},children:[n.jsx("div",{style:{fontSize:"15px",lineHeight:"22px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"10px"},children:x.trackingCompany||"Shipment"}),x.tracking.map((h,v)=>n.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:[h.number?n.jsxs("span",{children:["Tracking #",h.number]}):n.jsx("span",{children:"Tracking available"}),h.url?n.jsxs(n.Fragment,{children:[" ",n.jsx("a",{href:h.url,target:"_blank",rel:"noreferrer",style:{color:"var(--account-link)",fontWeight:600},children:"Open"})]}):null]},`${h.number||"tracking"}-${v}`)),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:x.items.map((h,v)=>n.jsxs("div",{style:{fontSize:"13px",lineHeight:"18px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:[h.quantity," x ",h.title,h.sku?` • ${h.sku}`:""]},`${h.title}-${v}`))})]},`${x.trackingCompany||"fulfillment"}-${w}`))})]}):null]}),n.jsxs("aside",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs("section",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",boxShadow:"var(--account-card-shadow)",padding:"24px"},children:[n.jsx("h2",{style:{fontSize:"20px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"18px"},children:"Summary"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px"},children:[n.jsx("span",{style:{color:"var(--account-subtext)",fontSize:"14px",lineHeight:"20px",fontFamily:"Inter, system-ui, sans-serif"},children:"Subtotal"}),n.jsx("span",{style:{color:"var(--account-title)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:u.subtotalPrice})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px"},children:[n.jsx("span",{style:{color:"var(--account-subtext)",fontSize:"14px",lineHeight:"20px",fontFamily:"Inter, system-ui, sans-serif"},children:"Shipping"}),n.jsx("span",{style:{color:"var(--account-title)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:u.shippingPrice})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px"},children:[n.jsx("span",{style:{color:"var(--account-subtext)",fontSize:"14px",lineHeight:"20px",fontFamily:"Inter, system-ui, sans-serif"},children:"Tax"}),n.jsx("span",{style:{color:"var(--account-title)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:u.taxPrice})]}),u.refundedPrice?n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px"},children:[n.jsx("span",{style:{color:"var(--account-subtext)",fontSize:"14px",lineHeight:"20px",fontFamily:"Inter, system-ui, sans-serif"},children:"Refunded"}),n.jsx("span",{style:{color:"var(--account-title)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:u.refundedPrice})]}):null,n.jsx("div",{style:{height:"1px",backgroundColor:"var(--account-card-border)",margin:"4px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px"},children:[n.jsx("span",{style:{color:"var(--account-title)",fontSize:"16px",lineHeight:"24px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:"Total"}),n.jsx("span",{style:{color:"var(--account-title)",fontSize:"18px",lineHeight:"28px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:u.totalPrice})]})]}),u.discounts.length>0?n.jsxs("div",{style:{marginTop:"18px",paddingTop:"18px",borderTop:"1px solid var(--account-card-border)"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"10px"},children:"Discounts"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:u.discounts.map((x,w)=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px",fontSize:"13px",lineHeight:"18px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:[n.jsx("span",{children:x.targetSelection||x.allocationMethod||"Discount"}),n.jsx("span",{style:{fontWeight:600,color:"var(--account-title)"},children:x.value})]},`${x.value}-${w}`))})]}):null]}),n.jsxs("div",{style:{display:"grid",gap:"16px"},children:[n.jsx(Od,{title:"Shipping address",address:u.shippingAddress}),n.jsx(Od,{title:"Billing address",address:u.billingAddress})]}),n.jsx("section",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",boxShadow:"var(--account-card-shadow)",padding:"24px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsx(Je,{variant:"secondary",size:"md",onClick:()=>void m(),isLoading:p,children:n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[n.jsx(Qg,{size:16}),"Refresh order"]})}),u.statusUrl?n.jsx("a",{href:u.statusUrl,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:n.jsx(Je,{variant:"primary",size:"md",style:{width:"100%"},children:n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[n.jsx(_g,{size:16}),"View order status"]})})}):null]})})]})]}):null]})]})}function jy(){return N.useCallback((o=[],a)=>yh(o,a),[])}function Cy(){return N.useCallback((o,a)=>xh(o,a),[])}function _y(){return N.useCallback((o,a)=>vh(o,a),[])}function Ty(){return N.useCallback((o,a)=>wh(o,a),[])}const Cp=N.createContext(null),Md="IN".toUpperCase(),Ey=300*1e3,Iy=o=>o.lines.edges.map(a=>{var u,p,f,m,g;const l=a.node;return{id:l.id,name:l.merchandise.product.title,productHandle:l.merchandise.product.handle,variant:((u=l.merchandise.selectedOptions)==null?void 0:u.map(k=>`${k.name}: ${k.value}`).join(", "))||l.merchandise.title,price:Number.parseFloat(l.merchandise.price.amount),quantity:l.quantity,variantId:l.merchandise.id,imageUrl:((p=l.merchandise.image)==null?void 0:p.url)||((f=l.merchandise.product.featuredImage)==null?void 0:f.url),imageAlt:((m=l.merchandise.image)==null?void 0:m.altText)||((g=l.merchandise.product.featuredImage)==null?void 0:g.altText)||l.merchandise.product.title}});function Ny({children:o}){const{accessToken:a,isAuthenticated:l,refreshCustomerData:u,logout:p}=Bt(),[f,m]=N.useState([]),[g,k]=N.useState(!1),[x,w]=N.useState(null),[h,v]=N.useState(null),[T,I]=N.useState(null),P=N.useRef(null),z=jy(),ae=Cy(),ue=_y(),ge=Ty(),J=N.useCallback(Q=>{m(Iy(Q)),w(Q.id),v(Q.checkoutUrl),Sh(Q.id)},[]),ne=N.useCallback(async(Q,K)=>{try{const U=await Sd(Q,K?{countryCode:Md,customerAccessToken:K}:{});J(U)}catch(U){console.warn("Failed to sync cart buyer identity",U)}},[J]);N.useEffect(()=>{let Q=!1;return(async()=>{try{const U=kh();if(U){const me=await bh(U);if(me&&!Q){J(me);return}}const se=await z([],a||void 0);Q||J(se)}catch(U){Q||console.error("Failed to initialize Shopify cart",U)}})(),()=>{Q=!0}},[a,z,J]),N.useEffect(()=>{if(!x){P.current=a;return}const Q=P.current!==a;P.current=a,Q&&ne(x,a)},[x,a,ne]);const ie=N.useMemo(()=>f.reduce((Q,K)=>Q+K.quantity,0),[f]),ye=N.useMemo(()=>f.reduce((Q,K)=>Q+K.price*K.quantity,0),[f]),Ce={items:f,isDrawerOpen:g,cartCount:ie,subtotal:ye,total:ye,checkoutUrl:h,cartError:T,clearCartError:()=>I(null),addItem:async Q=>{try{I(null);let K=x;if(!K){const me=await z([],a||void 0);J(me),K=me.id}const U=f.find(me=>me.variantId===Q),se=U?await ue(K,[{id:U.id,quantity:U.quantity+1}]):await ae(K,[{merchandiseId:Q,quantity:1}]);return J(se),k(!0),{ok:!0}}catch(K){console.error("Failed to add item to cart",K);const U=K instanceof Error?K.message:"Unable to add item to cart.";return I(U),{ok:!1,error:U}}},checkout:async()=>{try{I(null);let Q=x;if(!Q){const se=await z([],a||void 0);J(se),Q=se.id}let K=h,U=a;if(l){const se=yn();if(!se.accessToken||se.isExpired)p(),U=null;else{const me=Date.parse(se.expiresAt||"");if(Number.isFinite(me)&&me-Date.now()<=Ey){const _e=await bl(se.accessToken);_e.ok?(U=_e.data.accessToken,await u()):(p(),U=null)}else U=se.accessToken}}try{const se=await Sd(Q,U?{countryCode:Md,customerAccessToken:U}:{});J(se),K=se.checkoutUrl}catch(se){console.warn("Failed to attach customer identity before checkout",se)}window.location.href=K||"/cart"}catch(Q){console.error("Failed to prepare checkout",Q),I(Q instanceof Error?Q.message:"Unable to continue to checkout."),window.location.href=h||"/cart"}},openCartDrawer:()=>k(!0),closeCartDrawer:()=>k(!1),toggleCartDrawer:()=>k(Q=>!Q),incrementItem:Q=>{if(!x)return;const K=f.find(U=>U.id===Q);K&&ue(x,[{id:K.id,quantity:K.quantity+1}]).then(U=>{I(null),J(U)}).catch(U=>{console.error("Failed to increment cart line",U),I(U instanceof Error?U.message:"Unable to update cart quantity.")})},decrementItem:Q=>{if(!x)return;const K=f.find(U=>U.id===Q);if(K){if(K.quantity<=1){ge(x,[K.id]).then(U=>{I(null),J(U)}).catch(U=>{console.error("Failed to decrement cart line",U),I(U instanceof Error?U.message:"Unable to update cart quantity.")});return}ue(x,[{id:K.id,quantity:K.quantity-1}]).then(U=>{I(null),J(U)}).catch(U=>{console.error("Failed to decrement cart line",U),I(U instanceof Error?U.message:"Unable to update cart quantity.")})}},removeItem:Q=>{x&&ge(x,[Q]).then(K=>{I(null),J(K)}).catch(K=>{console.error("Failed to remove cart line",K),I(K instanceof Error?K.message:"Unable to remove item from cart.")})}};return n.jsx(Cp.Provider,{value:Ce,children:o})}function br(){const o=N.useContext(Cp);if(!o)throw new Error("useCart must be used within a CartProvider.");return o}function ya(o){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(o)}var Ry=(o,a,l,u,p,f,m,g)=>{let k=document.documentElement,x=["light","dark"];function w(T){(Array.isArray(o)?o:[o]).forEach(I=>{let P=I==="class",z=P&&f?p.map(ae=>f[ae]||ae):p;P?(k.classList.remove(...z),k.classList.add(f&&f[T]?f[T]:T)):k.setAttribute(I,T)}),h(T)}function h(T){g&&x.includes(T)&&(k.style.colorScheme=T)}function v(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)w(u);else try{let T=localStorage.getItem(a)||l,I=m&&T==="system"?v():T;w(I)}catch{}},Ud=["light","dark"],_p="(prefers-color-scheme: dark)",Py=typeof window>"u",Ll=N.createContext(void 0),zy={setTheme:o=>{},themes:[]},Dl=()=>{var o;return(o=N.useContext(Ll))!=null?o:zy},Ay=o=>N.useContext(Ll)?N.createElement(N.Fragment,null,o.children):N.createElement(Dy,{...o}),Ly=["light","dark"],Dy=({forcedTheme:o,disableTransitionOnChange:a=!1,enableSystem:l=!0,enableColorScheme:u=!0,storageKey:p="theme",themes:f=Ly,defaultTheme:m=l?"system":"light",attribute:g="data-theme",value:k,children:x,nonce:w,scriptProps:h})=>{let[v,T]=N.useState(()=>Oy(p,m)),[I,P]=N.useState(()=>v==="system"?dl():v),z=k?Object.values(k):f,ae=N.useCallback(ne=>{let ie=ne;if(!ie)return;ne==="system"&&l&&(ie=dl());let ye=k?k[ie]:ie,Ce=a?My(w):null,Q=document.documentElement,K=U=>{U==="class"?(Q.classList.remove(...z),ye&&Q.classList.add(ye)):U.startsWith("data-")&&(ye?Q.setAttribute(U,ye):Q.removeAttribute(U))};if(Array.isArray(g)?g.forEach(K):K(g),u){let U=Ud.includes(m)?m:null,se=Ud.includes(ie)?ie:U;Q.style.colorScheme=se}Ce==null||Ce()},[w]),ue=N.useCallback(ne=>{let ie=typeof ne=="function"?ne(v):ne;T(ie);try{localStorage.setItem(p,ie)}catch{}},[v]),ge=N.useCallback(ne=>{let ie=dl(ne);P(ie),v==="system"&&l&&!o&&ae("system")},[v,o]);N.useEffect(()=>{let ne=window.matchMedia(_p);return ne.addListener(ge),ge(ne),()=>ne.removeListener(ge)},[ge]),N.useEffect(()=>{let ne=ie=>{ie.key===p&&(ie.newValue?T(ie.newValue):ue(m))};return window.addEventListener("storage",ne),()=>window.removeEventListener("storage",ne)},[ue]),N.useEffect(()=>{ae(o??v)},[o,v]);let J=N.useMemo(()=>({theme:v,setTheme:ue,forcedTheme:o,resolvedTheme:v==="system"?I:v,themes:l?[...f,"system"]:f,systemTheme:l?I:void 0}),[v,ue,o,I,l,f]);return N.createElement(Ll.Provider,{value:J},N.createElement(Fy,{forcedTheme:o,storageKey:p,attribute:g,enableSystem:l,enableColorScheme:u,defaultTheme:m,value:k,themes:f,nonce:w,scriptProps:h}),x)},Fy=N.memo(({forcedTheme:o,storageKey:a,attribute:l,enableSystem:u,enableColorScheme:p,defaultTheme:f,value:m,themes:g,nonce:k,scriptProps:x})=>{let w=JSON.stringify([l,a,f,o,g,m,u,p]).slice(1,-1);return N.createElement("script",{...x,suppressHydrationWarning:!0,nonce:typeof window>"u"?k:"",dangerouslySetInnerHTML:{__html:`(${Ry.toString()})(${w})`}})}),Oy=(o,a)=>{if(Py)return;let l;try{l=localStorage.getItem(o)||void 0}catch{}return l||a},My=o=>{let a=document.createElement("style");return o&&a.setAttribute("nonce",o),a.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},dl=o=>(o||(o=window.matchMedia(_p)),o.matches?"dark":"light");function Uy(){const{customer:o,isAuthenticated:a}=Bt(),{resolvedTheme:l,setTheme:u}=Dl(),p=l==="dark",[f,m]=N.useState(!1),g=a?(o==null?void 0:o.firstName)||"Account":"Sign in",k=a?"/account":"/account/login";return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("header",{className:"header-container",children:[n.jsx(be,{children:n.jsxs("div",{className:"header-inner",children:[n.jsx($y,{isDark:p}),n.jsx(Hy,{}),n.jsx(By,{accountHref:k,accountLabel:g,isDark:p,onToggleTheme:()=>u(p?"light":"dark")}),n.jsx("button",{className:"header-mobile-menu-btn",onClick:()=>m(!f),"aria-label":"Toggle mobile menu",children:f?n.jsx(Al,{size:20}):n.jsx(Mg,{size:20})})]})}),n.jsxs("div",{className:`header-mobile-menu${f?" open":""}`,children:[n.jsxs("nav",{className:"header-mobile-nav",children:[n.jsx("a",{href:"/products",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Products"}),n.jsx("a",{href:"/philosophy",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Philosophy"}),n.jsx("a",{href:"/community",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Community"})]}),n.jsxs("div",{className:"header-mobile-actions",children:[n.jsx("a",{href:k,className:"header-mobile-account-btn",onClick:()=>m(!1),style:{textDecoration:"none"},children:g}),n.jsxs("button",{className:"header-mobile-account-btn",onClick:()=>u(p?"light":"dark"),children:[p?n.jsx(kp,{size:20,style:{marginRight:"8px"}}):n.jsx(bp,{size:20,style:{marginRight:"8px"}}),p?"Light Mode":"Dark Mode"]})]})]})]})]})}function $y({isDark:o}){return n.jsx(Wy,{isDark:o})}function Hy(){return n.jsx(qy,{})}function By({accountHref:o,accountLabel:a,isDark:l,onToggleTheme:u}){return n.jsxs("div",{className:"header-right",children:[n.jsx(Vy,{isDark:l,onToggleTheme:u}),n.jsx(Yy,{href:o,label:a}),n.jsx(Qy,{})]})}function Wy({isDark:o}){return n.jsx(rp,{size:32,variant:o?"light":"dark",showText:!0,href:"/"})}function Vy({isDark:o,onToggleTheme:a}){return n.jsxs("button",{"aria-label":`Switch to ${o?"light":"dark"} mode`,onClick:a,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[o?n.jsx(kp,{size:16}):n.jsx(bp,{size:16}),n.jsx("span",{className:"theme-toggle-text",children:o?"Light":"Dark"})]})}function qy(){return n.jsxs("nav",{className:"header-nav",children:[n.jsx("a",{href:"/products",className:"header-nav-link","data-testid":"header-products-link",children:"Products"}),n.jsx("a",{href:"/philosophy",className:"header-nav-link","data-testid":"header-philosophy-link",children:"Philosophy"}),n.jsx("a",{href:"/community",className:"header-nav-link","data-testid":"header-community-link",children:"Community"})]})}function Yy({href:o,label:a}){return n.jsx("a",{href:o,"data-testid":"header-account-link",className:"header-account-btn",style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer",textDecoration:"none"},children:a})}function Qy(){const{cartCount:o,openCartDrawer:a}=br(),l=()=>{(window.location.pathname.replace(/\/+$/,"")||"/")!=="/cart"&&a()};return n.jsxs("div",{style:{position:"relative",display:"inline-flex"},children:[n.jsx(Ye,{label:"Cart",variant:"ghost",size:"sm","data-testid":"cart-link",onClick:l}),n.jsx("div",{style:{position:"absolute",top:"-6px",right:"-8px",pointerEvents:"none",opacity:.78},children:n.jsx(ot,{label:String(o),variant:"accent",size:"sm"})})]})}function Se({children:o,direction:a="vertical",gap:l=16,align:u="stretch",justify:p="flex-start",style:f,responsiveDirection:m,responsiveGap:g}){const k=a==="horizontal"?"row":"column",x=typeof l=="number"?`${l}px`:l,w=m||g,h=w?`stack-${Math.random().toString(36).substr(2,9)}`:"";return n.jsxs(n.Fragment,{children:[w&&n.jsx("style",{children:`
          .${h} {
            display: flex;
            flex-direction: ${k};
            gap: ${x};
            align-items: ${u};
            justify-content: ${p};
          }

          /* Tablet breakpoint */
          @media (max-width: 1024px) {
            .${h} {
              ${m!=null&&m.tablet?`flex-direction: ${m.tablet==="horizontal"?"row":"column"};`:""}
              ${g!=null&&g.tablet?`gap: ${typeof g.tablet=="number"?`${g.tablet}px`:g.tablet};`:""}
            }
          }

          /* Mobile breakpoint */
          @media (max-width: 640px) {
            .${h} {
              ${m!=null&&m.mobile?`flex-direction: ${m.mobile==="horizontal"?"row":"column"};`:""}
              ${g!=null&&g.mobile?`gap: ${typeof g.mobile=="number"?`${g.mobile}px`:g.mobile};`:""}
            }
          }
        `}),n.jsx("div",{className:w?h:void 0,style:w?f:{display:"flex",flexDirection:k,gap:x,alignItems:u,justifyContent:p,...f},children:o})]})}function Ky(){const{resolvedTheme:o}=Dl(),a=o==="dark";return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.15s ease;
          text-decoration: none;
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
      `}),n.jsx("footer",{className:"footer-container",children:n.jsx(be,{children:n.jsxs(Se,{gap:"24px",children:[n.jsxs("div",{className:"footer-top",children:[n.jsx(Xy,{}),n.jsx(Jy,{}),n.jsx(Gy,{})]}),n.jsxs("div",{className:"footer-bottom",children:[n.jsx(Zy,{isDark:a}),n.jsx(ex,{})]})]})})})]})}function Xy(){return n.jsxs(Se,{gap:"10px",children:[n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Explore"}),n.jsxs(Se,{gap:"10px",children:[n.jsx("a",{href:"/products",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Products"}),n.jsx("a",{href:"/philosophy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Philosophy"}),n.jsx("a",{href:"/community",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Community"}),n.jsx("a",{href:"/privacy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Privacy Policy"})]})]})}function Gy(){return n.jsxs(Se,{gap:"10px",children:[n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Standards"}),n.jsxs(Se,{gap:"10px",children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Curated for durability"}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Reliable support"}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Clear policies"})]})]})}function Jy(){return n.jsxs(Se,{gap:"10px",children:[n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Policies"}),n.jsxs(Se,{gap:"10px",children:[n.jsx("a",{href:"/terms",style:Do,children:"Terms of Service"}),n.jsx("a",{href:"/privacy",style:Do,children:"Privacy Policy"}),n.jsx("a",{href:"/shipping-policy",style:Do,children:"Shipping Policy"}),n.jsx("a",{href:"/returns-refunds",style:Do,children:"Return and Refund Policy"}),n.jsx("a",{href:"/cookie-policy",style:Do,children:"Cookie Policy"})]})]})}function Zy({isDark:o}){return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx(rp,{size:24,variant:o?"light":"dark",showText:!1,href:"/"}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:"© VIBE STATION"})]})}function ex(){return n.jsxs("div",{className:"footer-social",children:[n.jsx("a",{className:"footer-social-btn",href:"https://www.instagram.com/expressvibestation?igsh=amU0NmN6YXE0Mnl5&utm_source=qr",target:"_blank",rel:"noreferrer",children:"Instagram"}),n.jsx("a",{className:"footer-social-btn",href:"https://www.youtube.com/channel/UC988AY2Heli187Kj3QuJvJA",target:"_blank",rel:"noreferrer",children:"YouTube"}),n.jsx("a",{className:"footer-social-btn",href:"mailto:studio@thevibestation.com",children:"Email"})]})}const Do={fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"};function tx({children:o}){return n.jsxs(Se,{gap:"0px",style:{minHeight:"100vh"},children:[n.jsx(rx,{}),n.jsx(nx,{children:o}),n.jsx(ox,{})]})}function rx(){return n.jsx(Uy,{})}function nx({children:o}){return n.jsx(ix,{children:o})}function ox(){return n.jsx(Ky,{})}function ix({children:o}){return n.jsx("main",{style:{flex:1,backgroundColor:"var(--background)"},children:n.jsx(Se,{gap:"0px",style:{height:"100%"},children:o})})}const ax={standard:{top:"56px",bottom:"56px"},dense:{top:"32px",bottom:"32px"}},qo={canvas:{backgroundColor:"var(--surface-canvas, #FFFFFF)"},subtle:{backgroundColor:"var(--surface-subtle, #FCFCFD)"},inverse:{backgroundColor:"var(--surface-inverse, #101828)",color:"var(--text-inverse, #FFFFFF)"}};function sx(o){if(!o||typeof o!="object"||!("type"in o))return!1;const a=o.type;return a===be||a===be.Wide||a===be.Standard||a===be.Narrow}function Tp({children:o}){return n.jsx(n.Fragment,{children:o})}function lx({children:o}){return n.jsx("div",{style:{paddingTop:"56px",paddingBottom:"56px"},children:o})}function cx({children:o}){return n.jsx("div",{style:{paddingTop:"32px",paddingBottom:"32px"},children:o})}function ux({children:o}){return n.jsx("div",{style:qo.canvas,children:o})}function dx({children:o}){return n.jsx("div",{style:qo.subtle,children:o})}function px({children:o}){return n.jsx("div",{style:qo.inverse,children:o})}function fx({children:o,className:a,padding:l="standard",variant:u="canvas",containerWidth:p="standard",contain:f=!0,paddingTop:m,paddingBottom:g,background:k}){const x=ax[l],w=m??x.top,h=g??x.bottom,v={...qo[u],backgroundColor:k??qo[u].backgroundColor},T=f&&!sx(o);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .section-responsive {
          padding-top: ${w};
          padding-bottom: ${h};
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .section-responsive {
            padding-top: calc(${w} * 0.75);
            padding-bottom: calc(${h} * 0.75);
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 640px) {
          .section-responsive {
            padding-top: calc(${w} * 0.5);
            padding-bottom: calc(${h} * 0.5);
          }
        }
      `}),n.jsx("section",{className:`section-responsive ${a||""}`,style:v,children:n.jsx(Tp,{children:T?n.jsx(be,{width:p,children:o}):o})})]})}const nt=Object.assign(fx,{SectionContainerSlot:Tp,PaddingStandard:lx,PaddingDense:cx,VariantCanvas:ux,VariantSubtle:dx,VariantInverse:px});function mx(){return n.jsx(nt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:n.jsxs(be,{children:[n.jsx(hx,{}),n.jsx(gx,{})]})})}function hx(){return n.jsxs(Se,{gap:"0px",style:{marginBottom:"24px"},children:[n.jsx(yx,{}),n.jsx(xx,{})]})}function gx(){return n.jsxs(Se,{gap:"16px",children:[n.jsx(vx,{}),n.jsx(wx,{}),n.jsx(bx,{}),n.jsx(kx,{}),n.jsx(Sx,{})]})}function yx(){return n.jsxs("header",{children:[n.jsx("h1",{style:{margin:0,fontSize:"clamp(2rem, 4vw, 3rem)",lineHeight:1.1,color:"var(--text-primary)"},children:"Community"}),n.jsx("p",{style:{margin:"12px 0 0",maxWidth:"56ch",color:"var(--text-secondary)"},children:"Stories, events, and creator-led moments will surface here as the community experience is built out."})]})}function xx(){return null}function vx(){return null}function wx(){return null}function bx(){return null}function kx(){return null}function Sx(){return null}function jx(){return n.jsx(nt,{paddingTop:"64px",paddingBottom:"80px",background:"var(--card)",children:n.jsxs(be,{children:[n.jsx(Cx,{}),n.jsx(_x,{})]})})}function Cx(){return n.jsx(Se,{gap:"0px",style:{marginBottom:"24px"},children:n.jsx(Tx,{})})}function _x(){return n.jsxs(Se,{gap:"16px",children:[n.jsx(Ex,{}),n.jsx(Ix,{}),n.jsx(Nx,{})]})}function Tx(){return n.jsxs("header",{children:[n.jsx("h1",{style:{margin:0,fontSize:"clamp(2rem, 4vw, 3rem)",lineHeight:1.1,color:"var(--text-primary)"},children:"Page not found"}),n.jsx("p",{style:{margin:"12px 0 0",maxWidth:"52ch",color:"var(--text-secondary)"},children:"The page you requested is not available in the current storefront route set."})]})}function Ex(){return null}function Ix(){return null}function Nx(){return null}const Rx={hero:null,heroMetaBadges:[],featuredDrop:null,socialProof:null};let fa=Rx,xa=!1,Fo=null;const Px=async()=>Fo||(Fo=(async()=>{var o,a,l,u;try{const p=await ga({first:6});if(p.edges.length===0){xa=!0;return}const f=p.edges.map(x=>x.node),m=f[0],g=Tl(m),k=f.slice(0,3).map(x=>{var w,h;return{id:x.id,name:x.title,role:((w=x.featureLine)==null?void 0:w.value)||"Curated product",quote:((h=x.shortDescription)==null?void 0:h.value)||x.description||"Built for consistent daily use.",tag:x.tags[0]||"Curated"}});fa={hero:{eyebrow:"Curated essentials for musicians",headline:"Gear that survives practice, travel, and stage.",supporting:"We research what musicians actually need, then pick durable, best-in-class tools with modern features so you buy once and keep playing.",primaryCta:"Shop products",secondaryCta:"Our philosophy",metaLine:"Fast delivery · Clear returns · Responsive support",featuredDropEyebrow:"Featured drop",featuredDropTitle:m.title,featuredDropSubtitle:((o=m.shortDescription)==null?void 0:o.value)||m.description||"",featuredDropImageUrl:(g==null?void 0:g.url)||"",featuredDropImageAlt:(g==null?void 0:g.altText)||m.title},featuredDrop:{eyebrow:"Featured drop",title:"Best-in-class essentials, chosen to last.",supporting:"One product at a time. Thorough research. Durable materials. Modern features that matter in real practice and gig conditions.",badges:["Durable build","Fast + accurate","Stage-ready"],primaryCta:"View featured",secondaryCta:"See all products",productName:m.title,productPrice:new Intl.NumberFormat("en-IN",{style:"currency",currency:m.priceRange.minVariantPrice.currencyCode,maximumFractionDigits:0}).format(Number.parseFloat(m.priceRange.minVariantPrice.amount)),productCopy:((a=m.shortDescription)==null?void 0:a.value)||m.description||"",featureLine:((l=m.featureLine)==null?void 0:l.value)||"",productBadge:((u=m.badge)==null?void 0:u.value)||m.tags[0]||"",productImageUrl:(g==null?void 0:g.url)||"",productImageAlt:(g==null?void 0:g.altText)||m.title},heroMetaBadges:["Curated for durability","Modern features","Clear policies"],socialProof:{eyebrow:"What musicians notice",title:"Built for real use — not shelf appeal.",supporting:"Feedback that focuses on durability, clarity, and daily reliability.",chips:m.tags.slice(0,4),testimonials:k,ctaLabel:"Explore products"}}}catch(p){console.error("Failed to load home data from Shopify",p)}finally{xa=!0,Fo=null}})(),Fo);function Qo(){const[o,a]=N.useState(fa),[l,u]=N.useState(!xa);return N.useEffect(()=>{let p=!1;return xa?(a(fa),u(!1),()=>{p=!0}):(Px().then(()=>{p||(a(fa),u(!1))}),()=>{p=!0})},[]),{...o,isLoading:l}}function zx(){const{hero:o}=Qo();return o?n.jsxs(nt,{contain:!1,paddingTop:"56px",paddingBottom:"48px",background:"var(--card)",children:[n.jsx("style",{children:`
        .home-hero__layout {
          display: flex;
          flex-direction: row;
          gap: 64px;
          align-items: center;
        }

        .home-hero__copy {
          flex: 0 0 55%;
          min-width: 0;
        }

        .home-hero__actions {
          display: flex;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .home-hero__visual {
          flex: 0 0 45%;
          position: relative;
          min-width: 0;
        }

        .home-hero__card {
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          width: min(100%, 480px);
          height: 420px;
          box-shadow: 0 1px 2px 0 #1018280a, 0 1px 3px 0 #1018280f;
          overflow: hidden;
          margin-left: auto;
        }

        @media (max-width: 960px) {
          .home-hero__layout {
            flex-direction: column;
            gap: 32px;
            align-items: stretch;
          }

          .home-hero__copy,
          .home-hero__visual {
            flex: 1 1 auto;
          }

          .home-hero__card {
            margin-left: 0;
          }
        }

        @media (max-width: 640px) {
          .home-hero__layout {
            gap: 24px;
          }

          .home-hero__headline {
            font-size: 38px !important;
            line-height: 44px !important;
          }

          .home-hero__supporting {
            font-size: 16px !important;
            line-height: 24px !important;
          }

          .home-hero__card {
            height: auto;
          }

          .home-hero__card-media {
            height: 240px !important;
          }

          .home-hero__actions > * {
            flex: 1 1 100%;
          }
        }
      `}),n.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:"-200px",right:"-200px",width:"600px",height:"600px",backgroundColor:"#4F46E50F",borderRadius:"50%",filter:"blur(120px)",pointerEvents:"none",zIndex:0}}),n.jsx(be,{width:"wide",className:"relative z-[1]",children:n.jsxs("div",{className:"home-hero__layout",children:[n.jsx("div",{className:"home-hero__copy",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--foreground)"},children:o.eyebrow}),n.jsx("h1",{className:"home-hero__headline",style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"48px",lineHeight:"56px",fontWeight:"600",color:"var(--foreground)",letterSpacing:"-0.01em",margin:0},children:o.headline}),n.jsx("p",{className:"home-hero__supporting",style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"540px",margin:0},children:o.supporting}),n.jsxs("div",{className:"home-hero__actions",children:[n.jsx(Ax,{label:o.primaryCta}),n.jsx(Lx,{label:o.secondaryCta})]}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--foreground)",marginTop:"8px"},children:o.metaLine})]})}),n.jsx("div",{className:"home-hero__visual",children:n.jsxs("div",{className:"home-hero__card",children:[n.jsx("div",{className:"home-hero__card-media",style:{backgroundColor:"var(--muted)",height:"280px",width:"100%"},children:o.featuredDropImageUrl?n.jsx("img",{src:o.featuredDropImageUrl,alt:o.featuredDropImageAlt||o.featuredDropTitle,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),n.jsx("div",{style:{padding:"20px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--foreground)"},children:o.featuredDropEyebrow}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.featuredDropTitle}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--foreground)"},children:o.featuredDropSubtitle})]})})]})})]})})]})]}):null}function Ax({label:o}){return n.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function Lx({label:o}){return n.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function Ep({children:o,wrap:a="on",gap:l=12,align:u="center",justify:p="flex-start",style:f,responsiveGap:m}){const g=typeof l=="number"?`${l}px`:l,k=!!m,x=k?`cluster-${Math.random().toString(36).substr(2,9)}`:"";return n.jsxs(n.Fragment,{children:[k&&n.jsx("style",{children:`
          .${x} {
            display: flex;
            flex-direction: row;
            flex-wrap: ${a==="on"?"wrap":"nowrap"};
            gap: ${g};
            align-items: ${u};
            justify-content: ${p};
          }

          /* Tablet breakpoint */
          @media (max-width: 1024px) {
            .${x} {
              ${m!=null&&m.tablet?`gap: ${typeof m.tablet=="number"?`${m.tablet}px`:m.tablet};`:""}
            }
          }

          /* Mobile breakpoint */
          @media (max-width: 640px) {
            .${x} {
              ${m!=null&&m.mobile?`gap: ${typeof m.mobile=="number"?`${m.mobile}px`:m.mobile};`:""}
            }
          }
        `}),n.jsx("div",{className:k?x:void 0,style:k?f:{display:"flex",flexDirection:"row",flexWrap:a==="on"?"wrap":"nowrap",gap:g,alignItems:u,justifyContent:p,...f},children:o})]})}function Dx(){const{heroMetaBadges:o}=Qo();return o.length===0?null:n.jsx(nt,{contain:!1,paddingTop:"24px",paddingBottom:"24px",background:"var(--card)",children:n.jsx(be,{width:"wide",children:n.jsx(Ep,{wrap:"on",gap:12,align:"center",children:o.map(a=>n.jsx(ot,{label:a,variant:"neutral",size:"md"},a))})})})}function Fx(){const{featuredDrop:o}=Qo();return o?n.jsxs(nt,{paddingTop:"56px",paddingBottom:"56px",background:"var(--background)",children:[n.jsx("style",{children:`
        .featured-drop__layout {
          display: flex;
          flex-direction: row;
          gap: 48px;
          align-items: flex-start;
        }

        .featured-drop__copy {
          flex: 0 0 45%;
          min-width: 0;
        }

        .featured-drop__badges,
        .featured-drop__actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .featured-drop__actions {
          gap: 12px;
        }

        .featured-drop__visual {
          flex: 0 0 55%;
          min-width: 0;
        }

        .featured-drop__card {
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          width: min(100%, 560px);
          height: 360px;
          box-shadow: 0 1px 2px 0 #1018280a, 0 1px 3px 0 #1018280f;
          overflow: hidden;
          margin-left: auto;
        }

        .featured-drop__header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        @media (max-width: 960px) {
          .featured-drop__layout {
            flex-direction: column;
            gap: 32px;
          }

          .featured-drop__copy,
          .featured-drop__visual {
            flex: 1 1 auto;
          }

          .featured-drop__card {
            margin-left: 0;
          }
        }

        @media (max-width: 640px) {
          .featured-drop__title {
            font-size: 30px !important;
            line-height: 36px !important;
          }

          .featured-drop__supporting {
            font-size: 16px !important;
            line-height: 24px !important;
          }

          .featured-drop__actions > * {
            flex: 1 1 100%;
          }

          .featured-drop__card {
            height: auto;
          }

          .featured-drop__media {
            height: 220px !important;
          }

          .featured-drop__header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}),n.jsx(be,{children:n.jsxs("div",{className:"featured-drop__layout",children:[n.jsx("div",{className:"featured-drop__copy",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),n.jsx("h2",{className:"featured-drop__title",style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.title}),n.jsx("p",{className:"featured-drop__supporting",style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"480px",margin:0},children:o.supporting}),n.jsx("div",{className:"featured-drop__badges",style:{marginTop:"6px"},children:o.badges.map(a=>n.jsx(ot,{label:a,variant:"neutral",size:"md"},a))}),n.jsxs("div",{className:"featured-drop__actions",style:{marginTop:"8px"},children:[n.jsx(Ox,{label:o.primaryCta}),n.jsx(Mx,{label:o.secondaryCta})]})]})}),n.jsx("div",{className:"featured-drop__visual",children:n.jsxs("div",{className:"featured-drop__card",children:[n.jsx("div",{className:"featured-drop__media",style:{backgroundColor:"var(--muted)",height:"200px",width:"100%"},children:o.productImageUrl?n.jsx("img",{src:o.productImageUrl,alt:o.productImageAlt||o.productName,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),n.jsx("div",{style:{padding:"16px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsxs("div",{className:"featured-drop__header-row",children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.productName}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.productPrice})]}),n.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:o.productCopy}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:o.featureLine}),n.jsx("div",{style:{marginTop:"2px"},children:n.jsx(ot,{label:o.productBadge,variant:"accent",size:"sm"})})]})})]})})]})})]}):null}function Ox({label:o}){return n.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function Mx({label:o}){return n.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function Ux(){return null}function $x(){return null}function Hx(){return null}function Bx(){return null}function Wx(){const{socialProof:o}=Qo();return o?n.jsxs(nt,{paddingTop:"56px",paddingBottom:"56px",background:"var(--card)",children:[n.jsx("style",{children:`
        .social-proof__chips {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .social-proof__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        @media (max-width: 960px) {
          .social-proof__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .social-proof__title {
            font-size: 30px !important;
            line-height: 36px !important;
          }

          .social-proof__supporting {
            font-size: 16px !important;
            line-height: 24px !important;
          }

          .social-proof__grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .social-proof__card {
            min-height: 0 !important;
            padding: 18px !important;
          }
        }
      `}),n.jsxs(be,{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"24px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),n.jsx("h2",{className:"social-proof__title",style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.title}),n.jsx("p",{className:"social-proof__supporting",style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:o.supporting})]}),n.jsx("div",{className:"social-proof__chips",children:o.chips.map(a=>n.jsx(ot,{label:a,variant:"neutral",size:"md"},a))}),n.jsx("div",{className:"social-proof__grid",children:o.testimonials.map(a=>n.jsx("div",{className:"social-proof__card",style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"220px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",padding:"20px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)"},children:a.name}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:a.role})]}),n.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,flex:1},children:a.quote}),n.jsx("div",{children:n.jsx(ot,{label:a.tag,variant:"neutral",size:"sm"})})]})},a.id))}),n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx(Vx,{label:o.ctaLabel})})]})]}):null}function Vx({label:o}){return n.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function qx(){return null}function Yx(){return null}function Qx(){return null}function De({width:o="100%",height:a="16px",borderRadius:l="8px",style:u,...p}){const f={width:o,height:a,borderRadius:l,background:"linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 37%, var(--skeleton-base) 63%)",backgroundSize:"400% 100%",animation:"vs-skeleton-shimmer 1.2s ease-in-out infinite"};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        @keyframes vs-skeleton-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `}),n.jsx("div",{"aria-hidden":"true",style:{...f,...u},...p})]})}function Kx(){return n.jsxs(Se,{gap:"0px",children:[n.jsx(nt,{paddingTop:"56px",paddingBottom:"48px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:"48px"},children:[n.jsxs(Se,{gap:"16px",children:[n.jsx(De,{width:"140px",height:"14px"}),n.jsx(De,{width:"88%",height:"56px",borderRadius:"12px"}),n.jsx(De,{width:"92%",height:"24px"}),n.jsx(De,{width:"80%",height:"24px"}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(De,{width:"136px",height:"44px",borderRadius:"12px"}),n.jsx(De,{width:"136px",height:"44px",borderRadius:"12px"})]})]}),n.jsx(De,{width:"100%",height:"420px",borderRadius:"16px"})]})})}),n.jsx(nt,{paddingTop:"48px",paddingBottom:"56px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs(Se,{gap:"16px",children:[n.jsx(De,{width:"180px",height:"18px"}),n.jsx(De,{width:"56%",height:"32px"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(o=>n.jsx(De,{height:"240px",borderRadius:"16px"},o))})]})})})]})}function Xx(){return n.jsx(nt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs(Se,{gap:"16px",children:[n.jsx(De,{width:"96px",height:"14px"}),n.jsx(De,{width:"180px",height:"40px"}),n.jsx(De,{width:"420px",height:"24px"}),n.jsx(De,{width:"100%",height:"44px",borderRadius:"12px"}),n.jsx("div",{style:{display:"flex",gap:"12px"},children:[1,2,3,4].map(o=>n.jsx(De,{width:"112px",height:"36px",borderRadius:"999px"},o))}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3,4,5,6].map(o=>n.jsx(De,{height:"460px",borderRadius:"16px"},o))})]})})})}function Gx(){return n.jsxs(Se,{gap:"0px",children:[n.jsx(nt,{paddingTop:"24px",paddingBottom:"16px",background:"var(--card)",children:n.jsx(be,{children:n.jsx(De,{width:"280px",height:"16px"})})}),n.jsx(nt,{paddingTop:"16px",paddingBottom:"32px",background:"var(--card)",children:n.jsx(be,{children:n.jsxs(Se,{gap:"12px",children:[n.jsx(De,{width:"120px",height:"14px"}),n.jsx(De,{width:"52%",height:"36px"}),n.jsx(De,{width:"72%",height:"22px"})]})})}),n.jsx(nt,{paddingTop:"24px",paddingBottom:"48px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 420px",gap:"48px"},children:[n.jsx(De,{width:"100%",height:"560px",borderRadius:"16px"}),n.jsx(De,{width:"100%",height:"560px",borderRadius:"16px"})]})})}),n.jsx(nt,{paddingTop:"48px",paddingBottom:"56px",background:"var(--card)",children:n.jsx(be,{children:n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(o=>n.jsx(De,{height:"220px",borderRadius:"16px"},o))})})})]})}function Jx(){const{isLoading:o}=Qo();return o?n.jsx(Kx,{}):n.jsxs(n.Fragment,{children:[n.jsx(Zx,{}),n.jsx(ev,{})]})}function Zx(){return n.jsxs(Se,{gap:"0px",children:[n.jsx(zx,{}),n.jsx(Dx,{})]})}function ev(){return n.jsxs(Se,{gap:"0px",children:[n.jsx(Fx,{}),n.jsx(Ux,{}),n.jsx($x,{}),n.jsx(Hx,{}),n.jsx(Bx,{}),n.jsx(Wx,{}),n.jsx(qx,{}),n.jsx(Yx,{}),n.jsx(Qx,{})]})}function tv(){return n.jsx(nt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:n.jsxs(be,{children:[n.jsx(rv,{}),n.jsx(nv,{})]})})}function rv(){return n.jsxs(Se,{gap:"0px",style:{marginBottom:"24px"},children:[n.jsx(ov,{}),n.jsx(iv,{})]})}function nv(){return n.jsxs(Se,{gap:"16px",children:[n.jsx(av,{}),n.jsx(sv,{}),n.jsx(lv,{}),n.jsx(cv,{}),n.jsx(uv,{}),n.jsx(dv,{}),n.jsx(pv,{}),n.jsx(fv,{})]})}function ov(){return n.jsxs("header",{children:[n.jsx("h1",{style:{margin:0,fontSize:"clamp(2rem, 4vw, 3rem)",lineHeight:1.1,color:"var(--text-primary)"},children:"Philosophy"}),n.jsx("p",{style:{margin:"12px 0 0",maxWidth:"56ch",color:"var(--text-secondary)"},children:"The product research, quality standards, and sourcing principles behind Vibe Station will be documented here."})]})}function iv(){return null}function av(){return null}function sv(){return null}function lv(){return null}function cv(){return null}function uv(){return null}function dv(){return null}function pv(){return null}function fv(){return null}const mv="http://localhost:3001",ca="/api/shopify/admin/product-metadata",hv=o=>`${(ca.startsWith("http://")||ca.startsWith("https://")?ca:`${mv.replace(/\/+$/,"")}/${ca.replace(/^\/+/,"")}`).replace(/\/+$/,"")}/${encodeURIComponent(o)}`;async function gv(o){const a=await fetch(hv(o),{method:"GET",credentials:"include"});if(!a.ok)throw a.status===429?new ze("Rate limit exceeded","RATE_LIMIT"):new ze(`HTTP ${a.status}`,"HTTP_ERROR");return(await a.json()).product??null}const Bn={productHeader:{badge:"",title:"",vendor:"",sku:"",shareUrl:"",shareLabel:""},productMain:{gallery:{images:[],zoomLabel:"",prevLabel:"",nextLabel:""},buyBox:{variantId:null,badge:"",name:"",descriptor:"",price:"",compareAtPrice:null,stock:"",isInStock:!1,features:[],reassurancePoints:[],primaryCta:"Add to cart",secondaryCta:"Buy now",microLine:"",inBoxTitle:"",inBoxLine:""}},keyBenefits:{title:"",cards:[]},featureDeepDive:{overviewTitle:"",overviewHtml:"",storyTitle:"",storyHtml:"",buyingGuideTitle:"",buyingGuideHtml:"",curatedFor:"",notFor:""},deliveryAndReturns:[],reviews:{title:"",supporting:"",averageLabel:"",averageValue:"",totalReviewsLabel:"",verifiedLabel:"",useCasePrefix:"",writeReviewLabel:"Write a review",loadMoreLabel:"Load more",breakdown:[],tags:[],items:[]},relatedProducts:{title:"Complete your setup",viewAllLabel:"View all",addToCartLabel:"Add to cart",items:[]},specsAndInBox:{specificationsTitle:"",specifications:[],inBoxTitle:"",inBoxItems:[],inBoxBadge:"",productDetailsTitle:"",productDetails:[]},faq:{title:"",items:[]},stickyCtaRail:{variantId:null,name:"",price:"",stockLabel:"",isInStock:!1,shippingLabel:"",reassurancePoints:[],addToCartLabel:"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}},ma="all",yv="All",Ip=o=>o.trim().toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),xv="https://thevibestation.com".replace(/\/+$/,""),vv=["capo","tuner","string","pick","holder","gig bag","bundle","essentials"],Np=o=>{var l,u,p,f;const a=(u=(l=o.variants)==null?void 0:l.edges.find(m=>{const g=m.node;return g.availableForSale&&(typeof g.quantityAvailable!="number"||g.quantityAvailable>0)}))==null?void 0:u.node;return(a==null?void 0:a.id)||((f=(p=o.variants)==null?void 0:p.edges[0])==null?void 0:f.node.id)||null},Rp=o=>{var a,l;return((l=(a=o.variants)==null?void 0:a.edges[0])==null?void 0:l.node)??null},ha=(o,a)=>{if(!o||!a)return"₹—";const l=Number.parseFloat(o);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:a,maximumFractionDigits:0}).format(l):`${a} ${o}`},qn=o=>o?o.replace(/<br\s*\/?>/gi,`
`).replace(/<\/(p|div|li|h[1-6])>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").trim():"",xr=o=>o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),vr=o=>o?o.replace(/\r\n?/g,`
`).replace(/\\r\\n|\\r/g,`
`).replace(/\\n/g,`
`).replace(/\\t/g," ").replace(/&nbsp;/gi," ").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim():"",va=o=>o.replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,a=>a.toUpperCase()),wv=o=>/taxonomy\s*reference/i.test(o),bv=o=>o.split(">").map(a=>a.trim()).filter(Boolean).at(-1)||o.trim(),ua=(o,a)=>{const l=vr(a).replace(/\s*\n+\s*/g," ").replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim();return l?/^label$/i.test(o)?l:/^color$/i.test(o)?`(${l})`:l:""},$d=o=>o.replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*\|\s*/g," | ").replace(/\s*,\s*\|/g," |").replace(/\|\s*,\s*/g,"| ").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim(),kv=o=>{var f;const a=o.fields.filter(m=>m.value&&m.value.trim().length>0&&!wv(m.key));if(a.length===0)return((f=o.displayName)==null?void 0:f.trim())||"";const l=a.find(m=>/^label$/i.test(m.key)),u=a.find(m=>/^color$/i.test(m.key)),p=a.filter(m=>!/^label$/i.test(m.key)&&!/^color$/i.test(m.key));if(l){const m=[ua(l.key,l.value??""),...u?[ua(u.key,u.value??"")]:[]].filter(Boolean);if(p.length===0&&m.length>0)return m.join(" ");const g=p.map(k=>ua(k.key,k.value??"")).filter(Boolean);return[...m,...g].join(", ")}return a.map(m=>ua(m.key,m.value??"")).filter(Boolean).join(", ")},Sv=o=>vr(o).replace(/<br\s*\/?>/gi,`
`).split(`
`).map(a=>qn(a).trim()).filter(Boolean),pl=o=>Sv(o).map(a=>{const l=a.match(/^([^:]+):\s*(.+)$/);return l?{label:va(l[1]),value:vr(l[2]).replace(/\s*\n+\s*/g," ").trim()}:null}).filter(a=>!!a&&a.value.length>0),Hd=o=>{const a=vr(o);return a?a.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(u=>u.trim()).filter(Boolean).map(u=>{const p=u.split(`
`).map(k=>qn(k).trim()).filter(Boolean);if(p.length===0)return"";if(p.length>1&&p[0].endsWith(":")){const k=`<p><strong>${xr(p[0])}</strong></p>`,x=p.slice(1).map(w=>`<li>${xr(w)}</li>`).join("");return x?`${k}<ul>${x}</ul>`:k}const f=[];let m=[];const g=()=>{m.length!==0&&(f.push(`<p>${xr(m.join(" "))}</p>`),m=[])};return p.forEach(k=>{const x=k.match(/^([^:]{1,60}):\s*(.+)$/);if(x){g(),f.push(`<p><strong>${xr(x[1].trim())}:</strong> ${xr(x[2].trim())}</p>`);return}m.push(k)}),g(),f.join("")}).join(""):""},jv=o=>{const a=o.trim();return a.startsWith("[")||a.includes("•")||a.includes("|")},Pp=o=>{const a=typeof o.type=="string"?o.type:"",l=typeof o.value=="string"?xr(o.value):"",u=Array.isArray(o.children)?o.children.map(p=>p&&typeof p=="object"?Pp(p):"").join(""):"";switch(a){case"root":return u;case"paragraph":return`<p>${u}</p>`;case"heading":return`<h3>${u}</h3>`;case"text":return l;case"text_bold":return`<strong>${u||l}</strong>`;case"text_italic":return`<em>${u||l}</em>`;case"list":return`<ul>${u}</ul>`;case"list-item":return`<li>${u}</li>`;case"link":return typeof o.url=="string"?`<a href="${xr(o.url)}">${u}</a>`:u;default:return u||l}},fl=o=>{if(!o)return"";const a=vr(o);if(jv(a)){const l=wa(a);if(l.length>0)return`<ul>${l.map(u=>`<li>${xr(u)}</li>`).join("")}</ul>`}if(a.includes("<"))return a;try{const l=JSON.parse(a);if(l&&typeof l=="object")return Pp(l)}catch{return Hd(a)}return Hd(a)},wa=o=>{const a=vr(o);if(!a)return[];const l=u=>u.replace(/<br\s*\/?>/gi,`
`).split(/\n|,|\||•/).map(p=>qn(p).trim()).filter(Boolean);try{const u=JSON.parse(a);if(Array.isArray(u))return u.flatMap(p=>typeof p=="string"?l(p):[]).filter(Boolean);if(typeof u=="string")return l(u)}catch{return l(a)}return[]},Cv=o=>{const a=vr(o);if(!a)return[];try{const l=JSON.parse(a);if(l&&typeof l=="object"&&!Array.isArray(l)){const u=Object.entries(l).flatMap(([p,f])=>{const m=pl(`${va(p)}: ${String(f)}`);return m.length>0?m:[{label:va(p),value:vr(String(f)).replace(/\s*\n+\s*/g," ").trim()}]}).filter(p=>p.value.length>0);if(u.length>0)return u}}catch{return pl(a)}return pl(a)},_v=o=>{if(!o)return[];try{const a=JSON.parse(o);if(Array.isArray(a))return a.map(l=>{if(!l||typeof l!="object")return null;const u=l,p=typeof u.question=="string"?u.question.trim():"",f=typeof u.answer=="string"?u.answer.trim():"";return p&&f?{question:p,answer:f}:null}).filter(l=>!!l)}catch{return o.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(l=>qn(l)).filter(Boolean).map(l=>{const[u,...p]=l.split(`
`),f=p.join(" ").trim();return!u||!f?null:{question:u.replace(/^Q[:\-]?\s*/i,""),answer:f.replace(/^A[:\-]?\s*/i,"")}}).filter(l=>!!l)}return[]},kl=(o,a="Yes",l="No")=>{if(!o)return"";const u=o.trim().toLowerCase();return["true","yes","available","1"].includes(u)?a:["false","no","not available","0"].includes(u)?l:o.trim()},zp=()=>{if(typeof window>"u")return null;const o=window.location.pathname.match(/\/products\/([^/]+)/);return(o==null?void 0:o[1])??null},Ap=o=>`${xv}/products/${o.handle}`,Tv=o=>{var u;if(o.availableForSale===!1)return"Out of stock";if(typeof o.totalInventory=="number")return o.totalInventory>0?`In stock (${o.totalInventory} available)`:"Out of stock";const a=Rp(o);return a&&typeof a.quantityAvailable=="number"?a.quantityAvailable>0?`In stock (${a.quantityAvailable} available)`:"Out of stock":((u=o.variants)==null?void 0:u.edges.some(p=>{const f=p.node;return f.availableForSale===!1?!1:typeof f.quantityAvailable=="number"?f.quantityAvailable>0:f.availableForSale===!0}))?"In stock":"Out of stock"},Ev=o=>{var l;return wa((l=o.whyDifferent)==null?void 0:l.value).slice(0,3).map((u,p)=>({id:`${o.handle}-feature-${p}`,badge:`0${p+1}`,title:u,description:"",footer:""}))},Iv=o=>{const a=`${o.title} ${o.tags.join(" ")}`.toLowerCase();return vv.some(l=>a.includes(l))?"Pair it with these":"Complete your setup"},Nv=o=>{var u;const a={averageValue:"—",totalReviewsLabel:"No reviews yet",breakdown:[],tags:[],items:[]},l=(u=o.reviewSummary)==null?void 0:u.value;if(!l)return a;try{const p=JSON.parse(l),f=typeof p.average=="number"?p.average.toFixed(1):"—",m=typeof p.count=="number"?p.count:0,g=Array.isArray(p.breakdown)?p.breakdown:[],k=Array.isArray(p.items)?p.items:[],x=Array.isArray(p.tags)?p.tags:[];return{averageValue:f,totalReviewsLabel:`${m} review${m===1?"":"s"}`,breakdown:g.map(w=>{if(!w||typeof w!="object")return null;const h=w,v=typeof h.stars=="number"?h.stars:0,T=typeof h.count=="number"?h.count:0;return v>0?{stars:v,count:T,label:`${v} star`}:null}).filter(w=>!!w).sort((w,h)=>h.stars-w.stars),tags:x.filter(w=>typeof w=="string"),items:k.map((w,h)=>{if(!w||typeof w!="object")return null;const v=w;return{id:typeof v.id=="string"?v.id:`review-${h}`,name:typeof v.name=="string"?v.name:"Verified buyer",role:typeof v.role=="string"?v.role:"Customer",quote:typeof v.quote=="string"?v.quote:"",useCase:typeof v.useCase=="string"?v.useCase:"General use",rating:typeof v.rating=="number"?v.rating:5,tags:Array.isArray(v.tags)?v.tags.filter(T=>typeof T=="string"):[],verified:v.verified!==!1}}).filter(w=>!!w&&w.quote.length>0)}}catch{return a}},Rv=o=>{var l,u,p,f,m,g,k;const a=[(l=o.packCount)==null?void 0:l.value,(u=o.bestFor)==null?void 0:u.value,(p=o.dispatchTime)==null?void 0:p.value,(f=o.deliveryWindow)==null?void 0:f.value,(m=o.returnsPolicy)==null?void 0:m.value,kl((g=o.codAvailable)==null?void 0:g.value,"COD available","COD unavailable"),kl((k=o.secureCheckout)==null?void 0:k.value,"Secure checkout","")].map(x=>x==null?void 0:x.trim()).filter(x=>!!x);return Array.from(new Set(a)).slice(0,6)},Pv=o=>{var l,u,p;const a=Rp(o);return[{label:"SKU",value:(a==null?void 0:a.sku)||"Available on request"},{label:"Brand",value:o.vendor||"Vibe Station"},{label:"Country of origin",value:((l=o.countryOfOrigin)==null?void 0:l.value)||""},{label:"GST invoice",value:kl((u=o.gstInvoice)==null?void 0:u.value,"Available","Not specified")||"Not specified"},{label:"Care / storage",value:qn((p=o.careInstructions)==null?void 0:p.value)},{label:"Shareable short URL",value:Ap(o)}].filter(f=>f.value.trim().length>0)},Lp=o=>{const a=o==null?void 0:o.trim();if(!a)return[];try{const l=JSON.parse(a);if(Array.isArray(l))return l.map(u=>typeof u=="string"?u.trim():"").filter(u=>u.length>0)}catch{}return a.split(/[\n,]+/).map(l=>l.trim()).filter(Boolean)},Bd=o=>{var a;return Array.from(new Set([...Lp((a=o.categories)==null?void 0:a.value),...o.tags.map(l=>l.trim()).filter(Boolean)]))},Wd=o=>o.map(a=>Ip(a)).filter(Boolean),zv=async o=>{const a=Bd(o),l=new Set(Wd(a)),u=new Set(a.map(f=>f.toLowerCase()));return l.size===0&&u.size===0?[]:(await ga({first:50})).edges.map(f=>f.node).filter(f=>f.id!==o.id).map(f=>{const m=Bd(f),g=Wd(m),k=m.filter(w=>u.has(w.toLowerCase())).length,x=g.filter(w=>l.has(w)).length;return{candidate:f,score:k+x}}).filter(f=>f.score>0).sort((f,m)=>m.score-f.score).slice(0,20).map(f=>f.candidate)},Av=o=>(o??[]).flatMap(a=>{const l=va(a.key),u=a.reference?[a.reference]:[],p=Array.isArray(a.references)?a.references:[],f=[...u,...p].map(k=>kv(k)).filter(Boolean),m=$d(vr(a.value).replace(/\s*\n+\s*/g," ").trim()),g=$d(f.length>0?f.join(" | "):m);return g.length>0?[{label:l,value:g}]:[]}),Lv=(o,a)=>{var k,x,w,h;const l=Cv((k=o.specifications)==null?void 0:k.value),u=Lp((x=o.categories)==null?void 0:x.value),p=((w=a==null?void 0:a.category)==null?void 0:w.fullName)||((h=a==null?void 0:a.category)==null?void 0:h.name)||"",f=Array.from(new Set([...u,...p?[p]:[]].map(v=>bv(v)).filter(Boolean))),m=f.length>0?[{label:"Category",value:f.join(", ")}]:[],g=Av(a==null?void 0:a.shopifyMetafields);return[...m,...g,...l].filter((v,T,I)=>{const P=`${v.label.toLowerCase()}::${v.value.toLowerCase()}`;return I.findIndex(z=>`${z.label.toLowerCase()}::${z.value.toLowerCase()}`===P)===T})},Dv=(o,a)=>a.filter(l=>l.id!==o.id&&l.handle!==o.handle).slice(0,6).map(l=>{var p,f,m;const u=Tl(l);return{id:l.handle,variantId:Np(l),badge:((p=l.badge)==null?void 0:p.value)||l.tags[0]||"Curated",name:l.title,descriptor:((f=l.shortDescription)==null?void 0:f.value)||l.description||"Curated recommendation",featureLine:((m=l.featureLine)==null?void 0:m.value)||l.tags.slice(0,3).join(" · ")||"Pairs well with this setup",price:ha(l.priceRange.minVariantPrice.amount,l.priceRange.minVariantPrice.currencyCode),imageUrl:u==null?void 0:u.url,imageAlt:(u==null?void 0:u.altText)||l.title}}),Fv=()=>Bn.reviews,Ov=({product:o,adminMetadata:a,relatedProducts:l})=>{var ae,ue,ge,J,ne,ie,ye,Ce,Q,K,U,se,me,Qe,_e,re,fe,O,V,$,S,R,B,Z,le,G,he,de,xe,Fe,ar,kr;const u=((ue=(ae=o.variants)==null?void 0:ae.edges[0])==null?void 0:ue.node)??null,p=fl((ge=o.whyDifferent)==null?void 0:ge.value),f=fl((J=o.buyingGuide)==null?void 0:J.value),m=fl(o.description)||o.descriptionHtml||`<p>${xr(o.description)}</p>`,g=Lv(o,a),k=wa((ne=o.whatsInBox)==null?void 0:ne.value),x=wa((ie=o.bulletFeatures)==null?void 0:ie.value),w=Ev(o),h=Tv(o),v=h.toLowerCase().startsWith("in stock"),T=Np(o),I=Nv(o),P=Rv(o),z=Ap(o);return{productHeader:{badge:((ye=o.badge)==null?void 0:ye.value)||"Curated pick",title:o.title,vendor:o.vendor||"Vibe Station",sku:(u==null?void 0:u.sku)||"—",shareUrl:z,shareLabel:"Shareable short URL"},productMain:{gallery:{images:o.images.edges.map((Ct,Jt)=>({id:Ct.node.id||`${o.handle}-${Jt}`,url:Ct.node.url,altText:Ct.node.altText||`${o.title} image ${Jt+1}`}))||[],zoomLabel:"Zoom",prevLabel:"Prev",nextLabel:"Next"},buyBox:{variantId:T,badge:((Ce=o.badge)==null?void 0:Ce.value)||"Curated pick",name:o.title,descriptor:((Q=o.subtitle)==null?void 0:Q.value)||((K=o.shortDescription)==null?void 0:K.value)||qn(o.descriptionHtml)||o.description,price:ha(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),compareAtPrice:(U=o.compareAtPriceRange)!=null&&U.minVariantPrice?ha(o.compareAtPriceRange.minVariantPrice.amount,o.compareAtPriceRange.minVariantPrice.currencyCode):null,stock:h,isInStock:v,features:x,reassurancePoints:P,primaryCta:((se=o.ctaLabel)==null?void 0:se.value)||"Add to cart",secondaryCta:((me=o.ctaSubtext)==null?void 0:me.value)||"Buy now",microLine:((Qe=o.shippingInfo)==null?void 0:Qe.value)||[(_e=o.dispatchTime)==null?void 0:_e.value,(re=o.supportResponseTime)==null?void 0:re.value,(fe=o.deliveryWindow)==null?void 0:fe.value].filter(Boolean).join(" · ")||"Shipping calculated at checkout · Clear returns · Responsive support",inBoxTitle:"What's in the box",inBoxLine:k.join(" · ")}},keyBenefits:{title:"Why it feels different",cards:w},featureDeepDive:{overviewTitle:"Product overview",overviewHtml:m,storyTitle:"Why this made the cut",storyHtml:p,buyingGuideTitle:"Buying guide",buyingGuideHtml:f,curatedFor:((O=o.curatedFor)==null?void 0:O.value)||((V=o.bestFor)==null?void 0:V.value)||"Players comparing feel, grip, and attack quickly.",notFor:(($=o.notFor)==null?void 0:$.value)||"Players who already know they only want one exact gauge."},deliveryAndReturns:[{id:"dispatch",badge:"Dispatch",title:"Estimated dispatch",description:((S=o.deliveryInfo)==null?void 0:S.value)||"",footer:((R=o.deliveryWindow)==null?void 0:R.value)||""},{id:"returns",badge:"Returns",title:"Returns & replacements",description:((B=o.returnsPolicy)==null?void 0:B.value)||"",footer:((Z=o.replacementPolicy)==null?void 0:Z.value)||""},{id:"support",badge:"Support",title:"Support response",description:((le=o.supportInfo)==null?void 0:le.value)||"",footer:((G=o.supportResponseTime)==null?void 0:G.value)||""}].filter(Ct=>Ct.description.trim().length>0||Ct.footer.trim().length>0),reviews:{...Fv(),supporting:(he=o.reviewSummary)!=null&&he.value?"Real review summary pulled from Shopify metafields.":"Add custom.reviews in Shopify to populate rating, review count, tags, and breakdown.",averageLabel:I.averageValue==="—"?"No rating yet":`${I.averageValue} / 5`,averageValue:I.averageValue,totalReviewsLabel:I.totalReviewsLabel,breakdown:I.breakdown,tags:I.tags,items:I.items},relatedProducts:{...Bn.relatedProducts,title:Iv(o),items:Dv(o,l)},specsAndInBox:{specificationsTitle:"Specifications",specifications:g,inBoxTitle:"In the box",inBoxItems:k,inBoxBadge:((de=o.packCount)==null?void 0:de.value)||"No extras required",productDetailsTitle:"Product details",productDetails:Pv(o)},faq:{title:"FAQ",items:_v((xe=o.faq)==null?void 0:xe.value)},stickyCtaRail:{variantId:T,name:o.title,price:ha(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),stockLabel:h,isInStock:v,shippingLabel:((Fe=o.deliveryWindow)==null?void 0:Fe.value)||((ar=o.shippingInfo)==null?void 0:ar.value)||"Shipping calculated at checkout",reassurancePoints:P,addToCartLabel:((kr=o.ctaLabel)==null?void 0:kr.value)||"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}}};let gn=Bn,Ho=!1,Oo=null,Bo=null,$o=!1;const Mv=async o=>{const a=o??zp();return Oo&&a===Bo||(Oo=(async()=>{try{const l=a;if(!l){gn=Bn,$o=!1,Ho=!0,Bo=null;return}Bo=l;const[u,p]=await Promise.all([gh(l),gv(l).catch(m=>(console.error("Failed to load public admin product metadata",m),null))]);if(!u){gn=Bn,$o=!1,Ho=!0;return}const f=await zv(u).catch(()=>[]);gn=Ov({product:u,adminMetadata:p,relatedProducts:f}),$o=!0}catch(l){gn=Bn,$o=!1,console.error("Failed to load product detail from Shopify",l)}finally{Ho=!0,Oo=null}})()),Oo};function Gt(){const o=zp(),[a,l]=N.useState(gn),[u,p]=N.useState(!Ho||Bo!==o);return N.useEffect(()=>{let f=!1;return Ho&&Bo===o?(l(gn),p(!1),()=>{f=!0}):(p(!0),Mv(o).then(()=>{f||(l(gn),p(!1))}),()=>{f=!0})},[o]),{...a,hasProduct:$o,isLoading:u}}function Uv(){const{productHeader:o}=Gt();return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"product-title-block",children:[n.jsxs("div",{className:"product-title-badge-row",children:[n.jsx(ot,{label:o.badge,variant:"accent",size:"sm"}),n.jsx("span",{className:"product-title-vendor",children:o.vendor})]}),n.jsx("h1",{className:"product-title-h1","data-testid":"product-title",children:o.title}),n.jsxs("div",{className:"product-title-meta",children:[n.jsxs("span",{children:["SKU: ",o.sku]}),n.jsxs("span",{children:[o.shareLabel,": ",o.shareUrl]})]})]})]})}function $v(){const{productHeader:o}=Gt();return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsx("nav",{"aria-label":"Breadcrumb",children:n.jsxs("ol",{className:"breadcrumb-nav",children:[n.jsx("li",{children:n.jsx("a",{href:"/",className:"breadcrumb-link",children:"Home"})}),n.jsx("li",{className:"breadcrumb-separator",children:"/"}),n.jsx("li",{children:n.jsx("a",{href:"/products",className:"breadcrumb-link",children:"Products"})}),n.jsx("li",{className:"breadcrumb-separator",children:"/"}),n.jsx("li",{className:"breadcrumb-current",children:o.title})]})})]})}const Hv={sm:"12px",md:"16px",lg:"20px"};function Bv(o){switch(o){case"subtle":return{backgroundColor:"var(--muted)",border:"1px solid var(--border)",boxShadow:"none"};case"outline":return{backgroundColor:"transparent",border:"1px solid var(--border)",boxShadow:"none"};case"elevated":default:return{backgroundColor:"var(--card)",border:"1px solid var(--border)",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F"}}}function We({children:o,mediaSlot:a,footerSlot:l,variant:u="elevated",padding:p="md",width:f="100%",height:m}){const g=Bv(u),k=Hv[p];return n.jsxs("div",{style:{...g,borderRadius:"16px",width:f,height:m,overflow:"hidden",display:"flex",flexDirection:"column"},children:[a,o?n.jsx("div",{style:{padding:k},children:o}):null,l?n.jsx("div",{style:{padding:k,paddingTop:"0"},children:l}):null]})}function Wv({children:o}){return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",position:"relative"},children:o})}function Vv({children:o}){return n.jsx("label",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function qv({children:o}){return n.jsx("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:o})}function Yv({placeholder:o,value:a,onChange:l,disabled:u,inputMode:p,maxLength:f,autoComplete:m,name:g}){return n.jsx("input",{type:"text",placeholder:o||"Enter text...",value:a,onChange:l?k=>{l(k.target.value)}:void 0,disabled:u,inputMode:p,maxLength:f,autoComplete:m,name:g,style:{width:"100%",border:"none",outline:"none",background:"transparent",fontSize:"14px",lineHeight:"20px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",padding:0}})}function Qv({children:o,error:a}){return n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:a?"var(--destructive)":"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function Kv({label:o,placeholder:a,helperText:l,error:u,disabled:p,size:f="md",value:m,onValueChange:g,inputMode:k,maxLength:x,autoComplete:w,name:h}){const v=f==="sm"?"36px":"44px",T=f==="sm"?"12px":"14px",I=f==="sm"?"10px":"12px";let P="var(--border)";return u&&(P="var(--destructive)"),n.jsxs(Wv,{children:[o&&n.jsx(Vv,{children:o}),n.jsx(qv,{children:n.jsx("div",{style:{width:"100%",height:v,display:"flex",alignItems:"center",paddingLeft:T,paddingRight:T,backgroundColor:"var(--card)",border:`1px solid ${P}`,borderRadius:I,opacity:p?.4:1,transition:"border-color 150ms ease"},children:n.jsx(Yv,{placeholder:a,value:m,onChange:g,disabled:p,inputMode:k,maxLength:x,autoComplete:w,name:h})})}),l&&n.jsx("div",{style:{opacity:p?.4:1},children:n.jsx(Qv,{error:u,children:l})})]})}const Xv="http://localhost:3001",da="/eta/check";function Gv(){return da.startsWith("http://")||da.startsWith("https://")?da:`${Xv.replace(/\/+$/,"")}/${da.replace(/^\/+/,"")}`}async function Jv(o){const l=await(await fetch(Gv(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deliveryPincode:o})})).json();if(!l||typeof l!="object"||typeof l.message!="string")throw new Error("ETA service returned an unexpected response.");return l}function Vd(o){const[a,l,u]=o.split("-");return!a||!l||!u?o:`${u}-${l}-${a}`}function Dp(){const[o,a]=N.useState(""),[l,u]=N.useState(null),[p,f]=N.useState(null),[m,g]=N.useState(!1),[k,x]=N.useState(!1);N.useEffect(()=>{if(typeof window>"u")return;const P=window.localStorage.getItem("deliveryPincode");P&&a(P)},[]),N.useEffect(()=>{if(!(typeof window>"u")){if(o.length>0){window.localStorage.setItem("deliveryPincode",o);return}window.localStorage.removeItem("deliveryPincode")}},[o]);const w=k&&o.length>0&&o.length!==6,h=p?"error":l!=null&&l.serviceable?"success":l?"warning":null,v=P=>{a(P.replace(/\D/g,"").slice(0,6)),x(!0),f(null),u(null)},T=async()=>{const P=o.trim();if(x(!0),f(null),u(null),!!/^\d{6}$/.test(P)){g(!0);try{const z=await Jv(P);u(z)}catch(z){f(z instanceof Error?z.message:"We could not check delivery right now. Please try again.")}finally{g(!1)}}},I=w?"Enter a valid 6-digit pincode.":"Enter your 6-digit pincode to check delivery availability.";return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsx(Kv,{label:"Delivery pincode",placeholder:"110001",helperText:I,error:w,value:o,onValueChange:v,inputMode:"numeric",maxLength:6,autoComplete:"postal-code",name:"deliveryPincode"}),n.jsx("div",{children:n.jsx(Ye,{variant:"secondary",size:"sm",label:m?"Checking...":"Check delivery",onClick:T,disabled:m})}),l||p?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",padding:"12px 14px",borderRadius:"12px",border:h==="success"?"1px solid rgba(34, 197, 94, 0.28)":h==="warning"?"1px solid rgba(245, 158, 11, 0.24)":"1px solid rgba(239, 68, 68, 0.24)",background:h==="success"?"rgba(34, 197, 94, 0.08)":h==="warning"?"rgba(245, 158, 11, 0.08)":"rgba(239, 68, 68, 0.08)"},children:[n.jsx("div",{style:{fontSize:"13px",lineHeight:"18px",fontWeight:600,color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:p||(l==null?void 0:l.message)}),l!=null&&l.serviceable&&l.eta?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:[n.jsxs("span",{children:["Dispatch in ",l.eta.dispatchBusinessDays," business day",l.eta.dispatchBusinessDays===1?"":"s","."]}),n.jsxs("span",{children:["Transit ",l.eta.transitMinBusinessDays,"-",l.eta.transitMaxBusinessDays," business days from"," ",l.originZone," to ",l.destinationZone,"."]}),n.jsxs("span",{children:["ETA window: ",Vd(l.eta.estimatedMinDate)," to"," ",Vd(l.eta.estimatedMaxDate)]})]}):null,l!=null&&l.reasonCode?n.jsxs("div",{style:{fontSize:"11px",lineHeight:"16px",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:["Code: ",l.reasonCode]}):null]}):null]})}function Zv(){return n.jsxs("div",{className:"product-main",children:[n.jsx(e0,{}),n.jsx(t0,{})]})}function e0(){const{productMain:o}=Gt(),[a,l]=N.useState(0),u=o.gallery.images,p=u[a],f=()=>{u.length!==0&&l(g=>g===0?u.length-1:g-1)},m=()=>{u.length!==0&&l(g=>(g+1)%u.length)};return n.jsxs("div",{className:"product-main__gallery",children:[n.jsx(We,{variant:"elevated",height:"560px",mediaSlot:n.jsxs("div",{className:"product-main__gallery-frame",children:[p?n.jsx("img",{className:"product-main__gallery-image",src:p.url,alt:p.altText}):n.jsx("div",{className:"product-main__gallery-placeholder"}),n.jsx("div",{className:"product-main__gallery-badge",children:n.jsx(ot,{label:o.gallery.zoomLabel,variant:"neutral",size:"sm"})}),n.jsxs("div",{className:"product-main__gallery-actions",children:[n.jsx(Ye,{variant:"ghost",size:"sm",label:o.gallery.prevLabel,onClick:f}),n.jsx(Ye,{variant:"ghost",size:"sm",label:o.gallery.nextLabel,onClick:m})]})]})}),n.jsx("div",{className:"product-main__thumbnail-row",children:u.length>0?u.map((g,k)=>n.jsx("button",{className:`product-main__thumbnail-button${k===a?" product-main__thumbnail-button--active":""}`,type:"button",onClick:()=>l(k),children:n.jsx("img",{className:"product-main__thumbnail-image",src:g.url,alt:g.altText})},g.id)):[1,2,3,4].map(g=>n.jsx("div",{className:`product-main__thumbnail-placeholder${g===1?" product-main__thumbnail-placeholder--active":""}`},g))})]})}function t0(){const{addItem:o}=br(),{productMain:a}=Gt(),l=a.buyBox.isInStock;return n.jsx("div",{className:"product-main__buy-box",children:n.jsx(We,{variant:"elevated",padding:"lg",children:n.jsxs("div",{className:"product-main__buy-box-content",children:[n.jsx("div",{className:"product-main__badge-row",children:n.jsx(ot,{label:a.buyBox.badge,variant:"accent",size:"sm"})}),n.jsx("h2",{className:"product-main__title",children:a.buyBox.name}),n.jsx("div",{className:"product-main__descriptor",children:a.buyBox.descriptor}),n.jsxs("div",{className:"product-main__price-row",children:[n.jsx("h3",{className:"product-main__price",children:a.buyBox.price}),n.jsxs("div",{className:"product-main__stock-column",children:[a.buyBox.compareAtPrice?n.jsx("span",{className:"product-main__compare-price",children:a.buyBox.compareAtPrice}):null,n.jsx("span",{className:`product-main__stock${l?" product-main__stock--in-stock":" product-main__stock--out-of-stock"}`,children:a.buyBox.stock})]})]}),n.jsx(Dp,{}),a.buyBox.reassurancePoints.length>0?n.jsx("div",{className:"product-main__reassurance-list",children:a.buyBox.reassurancePoints.map(u=>n.jsxs("div",{className:"product-main__reassurance-item",children:[n.jsx("div",{className:"product-main__reassurance-icon",children:n.jsx(vp,{className:"product-main__reassurance-check",size:12,strokeWidth:3})}),n.jsx("div",{className:"product-main__reassurance-text",children:u})]},u))}):null,n.jsxs("div",{className:"product-main__actions",children:[n.jsx(Ye,{variant:"primary",size:"lg",label:a.buyBox.primaryCta,"data-testid":"add-to-cart",disabled:!l||!a.buyBox.variantId,onClick:()=>{a.buyBox.variantId&&o(a.buyBox.variantId)}}),n.jsx(Ye,{variant:"secondary",size:"lg",label:a.buyBox.secondaryCta})]}),n.jsx("div",{className:"product-main__micro-line",children:a.buyBox.microLine})]})})})}function r0(){const{deliveryAndReturns:o}=Gt();return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"delivery-returns-container",children:[n.jsx("h3",{className:"delivery-returns-title",children:"Delivery & Returns"}),n.jsx("div",{className:"delivery-returns-cards",children:o.map(a=>n.jsx(We,{variant:"subtle",padding:"md",children:n.jsxs("div",{className:"delivery-card-content",children:[n.jsxs("div",{className:"delivery-card-header",children:[n.jsx(ot,{label:a.badge,variant:"neutral",size:"sm"}),n.jsx("h4",{className:"delivery-card-title",children:a.title})]}),n.jsx("div",{className:"delivery-card-description",children:a.description}),a.footer?n.jsx("div",{className:"delivery-card-footer",children:a.footer}):null]})},a.id))})]})]})}function n0(){const{featureDeepDive:o}=Gt();return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"feature-deep-dive-container",children:[n.jsx("div",{className:"feature-deep-dive-title-wrapper",children:n.jsx("h3",{className:"feature-deep-dive-title",children:"Product Deep Dive"})}),n.jsxs("div",{className:"feature-deep-dive-grid",children:[n.jsxs("div",{className:"feature-deep-dive-main",children:[n.jsx(We,{variant:"elevated",padding:"lg",children:n.jsxs("div",{className:"feature-card-content",children:[n.jsxs("div",{className:"feature-card-header",children:[n.jsx(wp,{size:20,style:{color:"var(--primary)"}}),n.jsx("h4",{className:"feature-card-title",children:o.overviewTitle})]}),n.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:o.overviewHtml}})]})}),n.jsx(We,{variant:"elevated",padding:"lg",children:n.jsxs("div",{className:"feature-card-content",children:[n.jsx("h4",{className:"feature-card-title",children:o.buyingGuideTitle}),n.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:o.buyingGuideHtml}})]})}),o.storyHtml?n.jsx(We,{variant:"subtle",padding:"lg",children:n.jsxs("div",{className:"feature-card-content",style:{gap:"12px"},children:[n.jsx("div",{className:"feature-story-badge",children:n.jsx("h4",{className:"feature-story-title",children:o.storyTitle})}),n.jsx("div",{className:"feature-story-html",dangerouslySetInnerHTML:{__html:o.storyHtml}})]})}):null]}),n.jsxs("div",{className:"feature-deep-dive-sidebar",children:[n.jsx(We,{variant:"elevated",padding:"lg",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(wg,{size:18,style:{color:"var(--success-foreground)"}}),n.jsx(ot,{label:"Perfect for",variant:"accent",size:"sm"})]}),n.jsx("div",{className:"feature-perfect-for",children:o.curatedFor})]})}),o.notFor?n.jsx(We,{variant:"subtle",padding:"lg",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsx(ot,{label:"Not ideal for",variant:"neutral",size:"sm"}),n.jsx("div",{className:"feature-not-for",children:o.notFor})]})}):null,n.jsx(We,{variant:"subtle",padding:"md",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(Vn,{size:16,style:{color:"var(--primary)"}}),n.jsx("div",{className:"quick-info-title",children:"Quick Info"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingTop:"4px"},children:[n.jsxs("div",{children:[n.jsx("div",{className:"quick-info-label",children:"Protection Level"}),n.jsx("div",{className:"quick-info-value",children:"10mm Padding"})]}),n.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[n.jsx("div",{className:"quick-info-label",children:"Water Resistant"}),n.jsx("div",{className:"quick-info-value",children:"Light rain protection"})]}),n.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[n.jsx("div",{className:"quick-info-label",children:"Compatibility"}),n.jsx("div",{className:"quick-info-value",children:"Most acoustic & electric"})]})]})]})})]})]})]})]})}function o0(){const{keyBenefits:o}=Gt();if(o.cards.length===0)return null;const a=[Jg,Vn,sy];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs(Se,{direction:"vertical",gap:24,children:[n.jsx("div",{className:"key-benefits-title-container",children:n.jsx("h3",{className:"key-benefits-title",children:o.title})}),n.jsx("div",{className:"key-benefits-grid",children:o.cards.map((l,u)=>{const p=a[u%a.length];return n.jsx(We,{variant:"elevated",padding:"lg",children:n.jsxs(Se,{direction:"vertical",gap:16,style:{alignItems:"flex-start"},children:[n.jsx("div",{className:"key-benefit-icon",children:n.jsx(p,{size:24})}),n.jsx("div",{className:"key-benefit-badge",children:l.badge}),n.jsx("h4",{className:"key-benefit-title",children:l.title}),l.description?n.jsx("div",{className:"key-benefit-description",children:l.description}):null,l.footer?n.jsx("div",{className:"key-benefit-footer",children:l.footer}):null]})},l.id)})})]})]})}const i0=/^(.*?)\s*,?\s*\((#[0-9a-f]{3,8})\)$/i,a0=o=>{const a=o.split("|").map(l=>l.trim()).filter(Boolean).map(l=>{const u=l.match(i0);return u?{label:u[1].trim().replace(/,\s*$/,""),hex:u[2]}:null});return a.every(Boolean)?a:[]};function qd({value:o}){const a=a0(o);return a.length===0?n.jsx(n.Fragment,{children:o}):n.jsx("div",{className:"specs-swatch-list",children:a.map(l=>n.jsxs("div",{className:"specs-swatch-item",children:[n.jsx("span",{className:"specs-swatch-box",style:{backgroundColor:l.hex},"aria-hidden":"true"}),n.jsx("span",{children:l.label})]},`${l.label}-${l.hex}`))})}function s0(){const{specsAndInBox:o}=Gt();return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"specs-container",children:[n.jsx("h3",{className:"specs-title",children:"Specifications & What's Included"}),n.jsx(We,{variant:"elevated",padding:"md",children:n.jsxs("div",{className:"specs-card-content",children:[n.jsx("h4",{className:"specs-card-title",children:o.specificationsTitle}),n.jsx("div",{className:"specs-list",children:o.specifications.map(a=>n.jsxs("div",{className:"specs-row",children:[n.jsx("div",{className:"specs-label",children:a.label}),n.jsx("div",{className:"specs-value",children:n.jsx(qd,{value:a.value})})]},a.label))})]})}),n.jsx(We,{variant:"subtle",padding:"md",children:n.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[n.jsxs("div",{className:"inbox-header",children:[n.jsx("h4",{className:"specs-card-title",children:o.inBoxTitle}),n.jsx(ot,{label:o.inBoxBadge,variant:"neutral",size:"sm"})]}),n.jsx("div",{className:"inbox-list",children:o.inBoxItems.map(a=>n.jsxs("div",{className:"inbox-item",children:["• ",a]},a))})]})}),n.jsx(We,{variant:"subtle",padding:"md",children:n.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[n.jsx("h4",{className:"specs-card-title",children:o.productDetailsTitle}),n.jsx("div",{className:"details-list",children:o.productDetails.map(a=>n.jsxs("div",{children:[n.jsx("div",{className:"details-item-label",children:a.label}),n.jsx("div",{className:"details-item-value",children:n.jsx(qd,{value:a.value})})]},a.label))})]})})]})]})}function l0(){const{faq:o}=Gt();return o.items.length===0?null:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:o.title}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px"},children:o.items.map(a=>n.jsx(We,{variant:"elevated",padding:"lg",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--foreground)"},children:a.question}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"22px",fontWeight:"400",color:"var(--muted-foreground)"},children:a.answer})]})},a.question))})]})}function c0(){const{addItem:o}=br(),{relatedProducts:a}=Gt();return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsx("style",{children:`
        .related-products__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .related-products__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .related-products__card-copy {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        @media (max-width: 960px) {
          .related-products__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .related-products__header {
            flex-direction: column;
            align-items: flex-start;
          }

          .related-products__grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 16px;
          }

          .related-products__media {
            height: 200px !important;
          }
        }
      `}),n.jsxs("div",{className:"related-products__header",children:[n.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:a.title}),n.jsx(Ye,{variant:"secondary",size:"sm",label:a.viewAllLabel})]}),n.jsx("div",{className:"related-products__grid",children:a.items.map(l=>n.jsx(We,{variant:"elevated",mediaSlot:n.jsxs("div",{className:"related-products__media",style:{position:"relative",width:"100%",height:"220px"},children:[l.imageUrl?n.jsx("img",{src:l.imageUrl,alt:l.imageAlt||l.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):n.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--muted)"}}),n.jsx("div",{style:{position:"absolute",top:"12px",left:"12px"},children:n.jsx(ot,{label:l.badge,variant:"neutral",size:"sm"})})]}),footerSlot:n.jsx(Ye,{variant:"primary",size:"md",label:a.addToCartLabel,disabled:!l.variantId,onClick:()=>{l.variantId&&o(l.variantId)}}),children:n.jsxs("div",{className:"related-products__card-copy",children:[n.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.name}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.descriptor}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.featureLine}),n.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.price})]})},l.id))})]})}function u0(){const{hasProduct:o,isLoading:a}=Gt();return a?n.jsx(Gx,{}):o?n.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[n.jsx("style",{children:`
        .product-detail__stack {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .product-detail__info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .product-detail__info-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 24px;
          }
        }
      `}),n.jsx("section",{style:{paddingTop:"24px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:n.jsx(be,{children:n.jsxs("div",{className:"product-detail__stack",children:[n.jsx($v,{}),n.jsx(Uv,{}),n.jsx(Zv,{})]})})}),n.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:n.jsx(be,{children:n.jsxs("div",{className:"product-detail__info-grid",children:[n.jsx(r0,{}),n.jsx(s0,{})]})})}),n.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:n.jsx(be,{children:n.jsx(o0,{})})}),n.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:n.jsx(be,{children:n.jsx(n0,{})})}),n.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:n.jsx(be,{children:n.jsx(l0,{})})}),n.jsx("section",{style:{paddingTop:"40px",paddingBottom:"48px",backgroundColor:"var(--card)"},children:n.jsx(be,{children:n.jsx(c0,{})})})]}):n.jsx("section",{style:{paddingTop:"64px",paddingBottom:"80px",backgroundColor:"var(--card)"},children:n.jsx(be,{children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[n.jsx("h1",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"32px",lineHeight:"38px",color:"var(--foreground)"},children:"Product unavailable"}),n.jsx("p",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",color:"var(--muted-foreground)"},children:"This product could not be loaded for the requested handle."})]})})})}function d0({query:o,onQueryChange:a,onSearch:l,isSearching:u=!1}){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("form",{className:"product-search-form",onSubmit:p=>{p.preventDefault(),l()},children:[n.jsxs("div",{className:"product-search-input-wrapper",children:[n.jsx("div",{className:"product-search-icon",children:n.jsx(Xg,{size:20,color:"var(--muted-foreground)",strokeWidth:2})}),n.jsx("input",{type:"text",placeholder:"Search curated gear…",value:o,"data-testid":"search-input",onChange:p=>a(p.target.value),className:"product-search-input","aria-label":"Search products",onFocus:p=>{p.target.style.borderColor="var(--ring)",p.target.style.boxShadow="0 0 0 4px rgba(105, 65, 198, 0.12), 0 1px 2px 0 rgba(16, 24, 40, 0.05)"},onBlur:p=>{p.target.style.borderColor="var(--border)",p.target.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.05)"}})]}),n.jsx("div",{className:"product-search-button-wrapper",children:n.jsx(Ye,{variant:"primary",size:"md",type:"submit","data-testid":"search-submit",label:u?"Searching...":"Search",disabled:u,fullWidth:!0})})]})]})}const ml=15;function p0({filters:o,activeFilter:a,onFilterChange:l,resetLabel:u}){var w,h;const[p,f]=N.useState(!1),m=(w=o.find(v=>v.id===a))==null?void 0:w.label,g=o.length>ml,k=p?o:o.slice(0,ml),x=o.length-ml;return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs(Ep,{wrap:"on",gap:10,align:"center",className:"product-filters-wrapper",children:[n.jsx("span",{className:"filter-label",children:"Filter:"}),k.map(v=>n.jsx("button",{onClick:()=>l(v.id),className:"filter-chip",style:{backgroundColor:a===v.id?"var(--accent)":"var(--muted)",border:a===v.id?"1px solid var(--ring)":"1px solid var(--border)",color:(a===v.id,"var(--foreground)")},onMouseEnter:T=>{a!==v.id&&(T.currentTarget.style.backgroundColor="var(--muted)",T.currentTarget.style.borderColor="var(--border)")},onMouseLeave:T=>{a!==v.id&&(T.currentTarget.style.backgroundColor="var(--muted)",T.currentTarget.style.borderColor="var(--border)")},children:v.label},v.id)),g&&n.jsx("button",{onClick:()=>f(!p),className:"filter-chip",style:{backgroundColor:"transparent",border:"1px solid var(--border)",color:"var(--foreground)"},onMouseEnter:v=>{v.currentTarget.style.backgroundColor="var(--muted)",v.currentTarget.style.color="var(--foreground)"},onMouseLeave:v=>{v.currentTarget.style.backgroundColor="transparent",v.currentTarget.style.color="var(--foreground)"},children:p?"Show less":`+${x} more`}),n.jsx("div",{className:"filter-spacer"}),m&&a!==((h=o[0])==null?void 0:h.id)&&n.jsxs("button",{onClick:()=>{var v;return l(((v=o[0])==null?void 0:v.id)??"all")},className:"filter-reset-button",style:{color:"var(--foreground)"},onMouseEnter:v=>{v.currentTarget.style.color="var(--foreground)"},onMouseLeave:v=>{v.currentTarget.style.color="var(--foreground)"},children:[n.jsx(Al,{size:14,strokeWidth:2.5}),u??"Reset filters"]})]})]})}var f0=tp();const m0=ep(f0);function h0(o){if(typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",a.appendChild(l),l.styleSheet?l.styleSheet.cssText=o:l.appendChild(document.createTextNode(o))}const g0=o=>{switch(o){case"success":return v0;case"info":return b0;case"warning":return w0;case"error":return k0;default:return null}},y0=Array(12).fill(0),x0=({visible:o,className:a})=>M.createElement("div",{className:["sonner-loading-wrapper",a].filter(Boolean).join(" "),"data-visible":o},M.createElement("div",{className:"sonner-spinner"},y0.map((l,u)=>M.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${u}`})))),v0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),w0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),b0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),k0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),S0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},M.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),M.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),j0=()=>{const[o,a]=M.useState(document.hidden);return M.useEffect(()=>{const l=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",l),()=>window.removeEventListener("visibilitychange",l)},[]),o};let Sl=1;class C0{constructor(){this.subscribe=a=>(this.subscribers.push(a),()=>{const l=this.subscribers.indexOf(a);this.subscribers.splice(l,1)}),this.publish=a=>{this.subscribers.forEach(l=>l(a))},this.addToast=a=>{this.publish(a),this.toasts=[...this.toasts,a]},this.create=a=>{var l;const{message:u,...p}=a,f=typeof(a==null?void 0:a.id)=="number"||((l=a.id)==null?void 0:l.length)>0?a.id:Sl++,m=this.toasts.find(k=>k.id===f),g=a.dismissible===void 0?!0:a.dismissible;return this.dismissedToasts.has(f)&&this.dismissedToasts.delete(f),m?this.toasts=this.toasts.map(k=>k.id===f?(this.publish({...k,...a,id:f,title:u}),{...k,...a,id:f,dismissible:g,title:u}):k):this.addToast({title:u,...p,dismissible:g,id:f}),f},this.dismiss=a=>(a?(this.dismissedToasts.add(a),requestAnimationFrame(()=>this.subscribers.forEach(l=>l({id:a,dismiss:!0})))):this.toasts.forEach(l=>{this.subscribers.forEach(u=>u({id:l.id,dismiss:!0}))}),a),this.message=(a,l)=>this.create({...l,message:a}),this.error=(a,l)=>this.create({...l,message:a,type:"error"}),this.success=(a,l)=>this.create({...l,type:"success",message:a}),this.info=(a,l)=>this.create({...l,type:"info",message:a}),this.warning=(a,l)=>this.create({...l,type:"warning",message:a}),this.loading=(a,l)=>this.create({...l,type:"loading",message:a}),this.promise=(a,l)=>{if(!l)return;let u;l.loading!==void 0&&(u=this.create({...l,promise:a,type:"loading",message:l.loading,description:typeof l.description!="function"?l.description:void 0}));const p=Promise.resolve(a instanceof Function?a():a);let f=u!==void 0,m;const g=p.then(async x=>{if(m=["resolve",x],M.isValidElement(x))f=!1,this.create({id:u,type:"default",message:x});else if(T0(x)&&!x.ok){f=!1;const h=typeof l.error=="function"?await l.error(`HTTP error! status: ${x.status}`):l.error,v=typeof l.description=="function"?await l.description(`HTTP error! status: ${x.status}`):l.description,I=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:u,type:"error",description:v,...I})}else if(x instanceof Error){f=!1;const h=typeof l.error=="function"?await l.error(x):l.error,v=typeof l.description=="function"?await l.description(x):l.description,I=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:u,type:"error",description:v,...I})}else if(l.success!==void 0){f=!1;const h=typeof l.success=="function"?await l.success(x):l.success,v=typeof l.description=="function"?await l.description(x):l.description,I=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:u,type:"success",description:v,...I})}}).catch(async x=>{if(m=["reject",x],l.error!==void 0){f=!1;const w=typeof l.error=="function"?await l.error(x):l.error,h=typeof l.description=="function"?await l.description(x):l.description,T=typeof w=="object"&&!M.isValidElement(w)?w:{message:w};this.create({id:u,type:"error",description:h,...T})}}).finally(()=>{f&&(this.dismiss(u),u=void 0),l.finally==null||l.finally.call(l)}),k=()=>new Promise((x,w)=>g.then(()=>m[0]==="reject"?w(m[1]):x(m[1])).catch(w));return typeof u!="string"&&typeof u!="number"?{unwrap:k}:Object.assign(u,{unwrap:k})},this.custom=(a,l)=>{const u=(l==null?void 0:l.id)||Sl++;return this.create({jsx:a(u),id:u,...l}),u},this.getActiveToasts=()=>this.toasts.filter(a=>!this.dismissedToasts.has(a.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const jt=new C0,_0=(o,a)=>{const l=(a==null?void 0:a.id)||Sl++;return jt.addToast({title:o,...a,id:l}),l},T0=o=>o&&typeof o=="object"&&"ok"in o&&typeof o.ok=="boolean"&&"status"in o&&typeof o.status=="number",E0=_0,I0=()=>jt.toasts,N0=()=>jt.getActiveToasts(),Yd=Object.assign(E0,{success:jt.success,info:jt.info,warning:jt.warning,error:jt.error,custom:jt.custom,message:jt.message,promise:jt.promise,dismiss:jt.dismiss,loading:jt.loading},{getHistory:I0,getToasts:N0});h0("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function pa(o){return o.label!==void 0}const R0=3,P0="24px",z0="16px",Qd=4e3,A0=356,L0=14,D0=45,F0=200;function or(...o){return o.filter(Boolean).join(" ")}function O0(o){const[a,l]=o.split("-"),u=[];return a&&u.push(a),l&&u.push(l),u}const M0=o=>{var a,l,u,p,f,m,g,k,x;const{invert:w,toast:h,unstyled:v,interacting:T,setHeights:I,visibleToasts:P,heights:z,index:ae,toasts:ue,expanded:ge,removeToast:J,defaultRichColors:ne,closeButton:ie,style:ye,cancelButtonStyle:Ce,actionButtonStyle:Q,className:K="",descriptionClassName:U="",duration:se,position:me,gap:Qe,expandByDefault:_e,classNames:re,icons:fe,closeButtonAriaLabel:O="Close toast"}=o,[V,$]=M.useState(null),[S,R]=M.useState(null),[B,Z]=M.useState(!1),[le,G]=M.useState(!1),[he,de]=M.useState(!1),[xe,Fe]=M.useState(!1),[ar,kr]=M.useState(!1),[Ct,Jt]=M.useState(0),[Xo,Yn]=M.useState(0),sr=M.useRef(h.duration||se||Qd),Qn=M.useRef(null),_t=M.useRef(null),Gr=ae===0,Sr=ae+1<=P,it=h.type,lr=h.dismissible!==!1,Go=h.className||"",Jo=h.descriptionClassName||"",Jr=M.useMemo(()=>z.findIndex(ce=>ce.toastId===h.id)||0,[z,h.id]),Kn=M.useMemo(()=>{var ce;return(ce=h.closeButton)!=null?ce:ie},[h.closeButton,ie]),Zr=M.useMemo(()=>h.duration||se||Qd,[h.duration,se]),xn=M.useRef(0),zt=M.useRef(0),jr=M.useRef(0),Cr=M.useRef(null),[Zo,ei]=me.split("-"),ti=M.useMemo(()=>z.reduce((ce,$e,Ke)=>Ke>=Jr?ce:ce+$e.height,0),[z,Jr]),vn=j0(),Xn=h.invert||w,en=it==="loading";zt.current=M.useMemo(()=>Jr*Qe+ti,[Jr,ti]),M.useEffect(()=>{sr.current=Zr},[Zr]),M.useEffect(()=>{Z(!0)},[]),M.useEffect(()=>{const ce=_t.current;if(ce){const $e=ce.getBoundingClientRect().height;return Yn($e),I(Ke=>[{toastId:h.id,height:$e,position:h.position},...Ke]),()=>I(Ke=>Ke.filter(ct=>ct.toastId!==h.id))}},[I,h.id]),M.useLayoutEffect(()=>{if(!B)return;const ce=_t.current,$e=ce.style.height;ce.style.height="auto";const Ke=ce.getBoundingClientRect().height;ce.style.height=$e,Yn(Ke),I(ct=>ct.find(Ve=>Ve.toastId===h.id)?ct.map(Ve=>Ve.toastId===h.id?{...Ve,height:Ke}:Ve):[{toastId:h.id,height:Ke,position:h.position},...ct])},[B,h.title,h.description,I,h.id]);const At=M.useCallback(()=>{G(!0),Jt(zt.current),I(ce=>ce.filter($e=>$e.toastId!==h.id)),setTimeout(()=>{J(h)},F0)},[h,J,I,zt]);M.useEffect(()=>{if(h.promise&&it==="loading"||h.duration===1/0||h.type==="loading")return;let ce;return ge||T||vn?(()=>{if(jr.current<xn.current){const ct=new Date().getTime()-xn.current;sr.current=sr.current-ct}jr.current=new Date().getTime()})():(()=>{sr.current!==1/0&&(xn.current=new Date().getTime(),ce=setTimeout(()=>{h.onAutoClose==null||h.onAutoClose.call(h,h),At()},sr.current))})(),()=>clearTimeout(ce)},[ge,T,h,it,vn,At]),M.useEffect(()=>{h.delete&&At()},[At,h.delete]);function Gn(){var ce;if(fe!=null&&fe.loading){var $e;return M.createElement("div",{className:or(re==null?void 0:re.loader,h==null||($e=h.classNames)==null?void 0:$e.loader,"sonner-loader"),"data-visible":it==="loading"},fe.loading)}return M.createElement(x0,{className:or(re==null?void 0:re.loader,h==null||(ce=h.classNames)==null?void 0:ce.loader),visible:it==="loading"})}const _r=h.icon||(fe==null?void 0:fe[it])||g0(it);var cr,Jn;return M.createElement("li",{tabIndex:0,ref:_t,className:or(K,Go,re==null?void 0:re.toast,h==null||(a=h.classNames)==null?void 0:a.toast,re==null?void 0:re.default,re==null?void 0:re[it],h==null||(l=h.classNames)==null?void 0:l[it]),"data-sonner-toast":"","data-rich-colors":(cr=h.richColors)!=null?cr:ne,"data-styled":!(h.jsx||h.unstyled||v),"data-mounted":B,"data-promise":!!h.promise,"data-swiped":ar,"data-removed":le,"data-visible":Sr,"data-y-position":Zo,"data-x-position":ei,"data-index":ae,"data-front":Gr,"data-swiping":he,"data-dismissible":lr,"data-type":it,"data-invert":Xn,"data-swipe-out":xe,"data-swipe-direction":S,"data-expanded":!!(ge||_e&&B),style:{"--index":ae,"--toasts-before":ae,"--z-index":ue.length-ae,"--offset":`${le?Ct:zt.current}px`,"--initial-height":_e?"auto":`${Xo}px`,...ye,...h.style},onDragEnd:()=>{de(!1),$(null),Cr.current=null},onPointerDown:ce=>{en||!lr||(Qn.current=new Date,Jt(zt.current),ce.target.setPointerCapture(ce.pointerId),ce.target.tagName!=="BUTTON"&&(de(!0),Cr.current={x:ce.clientX,y:ce.clientY}))},onPointerUp:()=>{var ce,$e,Ke;if(xe||!lr)return;Cr.current=null;const ct=Number(((ce=_t.current)==null?void 0:ce.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Tr=Number((($e=_t.current)==null?void 0:$e.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Ve=new Date().getTime()-((Ke=Qn.current)==null?void 0:Ke.getTime()),Ze=V==="x"?ct:Tr,Er=Math.abs(Ze)/Ve;if(Math.abs(Ze)>=D0||Er>.11){Jt(zt.current),h.onDismiss==null||h.onDismiss.call(h,h),R(V==="x"?ct>0?"right":"left":Tr>0?"down":"up"),At(),Fe(!0);return}else{var at,Tt;(at=_t.current)==null||at.style.setProperty("--swipe-amount-x","0px"),(Tt=_t.current)==null||Tt.style.setProperty("--swipe-amount-y","0px")}kr(!1),de(!1),$(null)},onPointerMove:ce=>{var $e,Ke,ct;if(!Cr.current||!lr||(($e=window.getSelection())==null?void 0:$e.toString().length)>0)return;const Ve=ce.clientY-Cr.current.y,Ze=ce.clientX-Cr.current.x;var Er;const at=(Er=o.swipeDirections)!=null?Er:O0(me);!V&&(Math.abs(Ze)>1||Math.abs(Ve)>1)&&$(Math.abs(Ze)>Math.abs(Ve)?"x":"y");let Tt={x:0,y:0};const Ir=Lt=>1/(1.5+Math.abs(Lt)/20);if(V==="y"){if(at.includes("top")||at.includes("bottom"))if(at.includes("top")&&Ve<0||at.includes("bottom")&&Ve>0)Tt.y=Ve;else{const Lt=Ve*Ir(Ve);Tt.y=Math.abs(Lt)<Math.abs(Ve)?Lt:Ve}}else if(V==="x"&&(at.includes("left")||at.includes("right")))if(at.includes("left")&&Ze<0||at.includes("right")&&Ze>0)Tt.x=Ze;else{const Lt=Ze*Ir(Ze);Tt.x=Math.abs(Lt)<Math.abs(Ze)?Lt:Ze}(Math.abs(Tt.x)>0||Math.abs(Tt.y)>0)&&kr(!0),(Ke=_t.current)==null||Ke.style.setProperty("--swipe-amount-x",`${Tt.x}px`),(ct=_t.current)==null||ct.style.setProperty("--swipe-amount-y",`${Tt.y}px`)}},Kn&&!h.jsx&&it!=="loading"?M.createElement("button",{"aria-label":O,"data-disabled":en,"data-close-button":!0,onClick:en||!lr?()=>{}:()=>{At(),h.onDismiss==null||h.onDismiss.call(h,h)},className:or(re==null?void 0:re.closeButton,h==null||(u=h.classNames)==null?void 0:u.closeButton)},(Jn=fe==null?void 0:fe.close)!=null?Jn:S0):null,(it||h.icon||h.promise)&&h.icon!==null&&((fe==null?void 0:fe[it])!==null||h.icon)?M.createElement("div",{"data-icon":"",className:or(re==null?void 0:re.icon,h==null||(p=h.classNames)==null?void 0:p.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||Gn():null,h.type!=="loading"?_r:null):null,M.createElement("div",{"data-content":"",className:or(re==null?void 0:re.content,h==null||(f=h.classNames)==null?void 0:f.content)},M.createElement("div",{"data-title":"",className:or(re==null?void 0:re.title,h==null||(m=h.classNames)==null?void 0:m.title)},h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title),h.description?M.createElement("div",{"data-description":"",className:or(U,Jo,re==null?void 0:re.description,h==null||(g=h.classNames)==null?void 0:g.description)},typeof h.description=="function"?h.description():h.description):null),M.isValidElement(h.cancel)?h.cancel:h.cancel&&pa(h.cancel)?M.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||Ce,onClick:ce=>{pa(h.cancel)&&lr&&(h.cancel.onClick==null||h.cancel.onClick.call(h.cancel,ce),At())},className:or(re==null?void 0:re.cancelButton,h==null||(k=h.classNames)==null?void 0:k.cancelButton)},h.cancel.label):null,M.isValidElement(h.action)?h.action:h.action&&pa(h.action)?M.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||Q,onClick:ce=>{pa(h.action)&&(h.action.onClick==null||h.action.onClick.call(h.action,ce),!ce.defaultPrevented&&At())},className:or(re==null?void 0:re.actionButton,h==null||(x=h.classNames)==null?void 0:x.actionButton)},h.action.label):null)};function Kd(){if(typeof window>"u"||typeof document>"u")return"ltr";const o=document.documentElement.getAttribute("dir");return o==="auto"||!o?window.getComputedStyle(document.documentElement).direction:o}function U0(o,a){const l={};return[o,a].forEach((u,p)=>{const f=p===1,m=f?"--mobile-offset":"--offset",g=f?z0:P0;function k(x){["top","right","bottom","left"].forEach(w=>{l[`${m}-${w}`]=typeof x=="number"?`${x}px`:x})}typeof u=="number"||typeof u=="string"?k(u):typeof u=="object"?["top","right","bottom","left"].forEach(x=>{u[x]===void 0?l[`${m}-${x}`]=g:l[`${m}-${x}`]=typeof u[x]=="number"?`${u[x]}px`:u[x]}):k(g)}),l}const $0=M.forwardRef(function(a,l){const{invert:u,position:p="bottom-right",hotkey:f=["altKey","KeyT"],expand:m,closeButton:g,className:k,offset:x,mobileOffset:w,theme:h="light",richColors:v,duration:T,style:I,visibleToasts:P=R0,toastOptions:z,dir:ae=Kd(),gap:ue=L0,icons:ge,containerAriaLabel:J="Notifications"}=a,[ne,ie]=M.useState([]),ye=M.useMemo(()=>Array.from(new Set([p].concat(ne.filter(S=>S.position).map(S=>S.position)))),[ne,p]),[Ce,Q]=M.useState([]),[K,U]=M.useState(!1),[se,me]=M.useState(!1),[Qe,_e]=M.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),re=M.useRef(null),fe=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),O=M.useRef(null),V=M.useRef(!1),$=M.useCallback(S=>{ie(R=>{var B;return(B=R.find(Z=>Z.id===S.id))!=null&&B.delete||jt.dismiss(S.id),R.filter(({id:Z})=>Z!==S.id)})},[]);return M.useEffect(()=>jt.subscribe(S=>{if(S.dismiss){requestAnimationFrame(()=>{ie(R=>R.map(B=>B.id===S.id?{...B,delete:!0}:B))});return}setTimeout(()=>{m0.flushSync(()=>{ie(R=>{const B=R.findIndex(Z=>Z.id===S.id);return B!==-1?[...R.slice(0,B),{...R[B],...S},...R.slice(B+1)]:[S,...R]})})})}),[ne]),M.useEffect(()=>{if(h!=="system"){_e(h);return}if(h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?_e("dark"):_e("light")),typeof window>"u")return;const S=window.matchMedia("(prefers-color-scheme: dark)");try{S.addEventListener("change",({matches:R})=>{_e(R?"dark":"light")})}catch{S.addListener(({matches:B})=>{try{_e(B?"dark":"light")}catch(Z){console.error(Z)}})}},[h]),M.useEffect(()=>{ne.length<=1&&U(!1)},[ne]),M.useEffect(()=>{const S=R=>{var B;if(f.every(G=>R[G]||R.code===G)){var le;U(!0),(le=re.current)==null||le.focus()}R.code==="Escape"&&(document.activeElement===re.current||(B=re.current)!=null&&B.contains(document.activeElement))&&U(!1)};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[f]),M.useEffect(()=>{if(re.current)return()=>{O.current&&(O.current.focus({preventScroll:!0}),O.current=null,V.current=!1)}},[re.current]),M.createElement("section",{ref:l,"aria-label":`${J} ${fe}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},ye.map((S,R)=>{var B;const[Z,le]=S.split("-");return ne.length?M.createElement("ol",{key:S,dir:ae==="auto"?Kd():ae,tabIndex:-1,ref:re,className:k,"data-sonner-toaster":!0,"data-sonner-theme":Qe,"data-y-position":Z,"data-lifted":K&&ne.length>1&&!m,"data-x-position":le,style:{"--front-toast-height":`${((B=Ce[0])==null?void 0:B.height)||0}px`,"--width":`${A0}px`,"--gap":`${ue}px`,...I,...U0(x,w)},onBlur:G=>{V.current&&!G.currentTarget.contains(G.relatedTarget)&&(V.current=!1,O.current&&(O.current.focus({preventScroll:!0}),O.current=null))},onFocus:G=>{G.target instanceof HTMLElement&&G.target.dataset.dismissible==="false"||V.current||(V.current=!0,O.current=G.relatedTarget)},onMouseEnter:()=>U(!0),onMouseMove:()=>U(!0),onMouseLeave:()=>{se||U(!1)},onDragEnd:()=>U(!1),onPointerDown:G=>{G.target instanceof HTMLElement&&G.target.dataset.dismissible==="false"||me(!0)},onPointerUp:()=>me(!1)},ne.filter(G=>!G.position&&R===0||G.position===S).map((G,he)=>{var de,xe;return M.createElement(M0,{key:G.id,icons:ge,index:he,toast:G,defaultRichColors:v,duration:(de=z==null?void 0:z.duration)!=null?de:T,className:z==null?void 0:z.className,descriptionClassName:z==null?void 0:z.descriptionClassName,invert:u,visibleToasts:P,closeButton:(xe=z==null?void 0:z.closeButton)!=null?xe:g,interacting:se,position:S,style:z==null?void 0:z.style,unstyled:z==null?void 0:z.unstyled,classNames:z==null?void 0:z.classNames,cancelButtonStyle:z==null?void 0:z.cancelButtonStyle,actionButtonStyle:z==null?void 0:z.actionButtonStyle,closeButtonAriaLabel:z==null?void 0:z.closeButtonAriaLabel,removeToast:$,toasts:ne.filter(Fe=>Fe.position==G.position),heights:Ce.filter(Fe=>Fe.position==G.position),setHeights:Q,expandByDefault:m,gap:ue,expanded:K,swipeDirections:a.swipeDirections})})):null}))});function H0({products:o}){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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

        .product-card {
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          width: 100%;
          min-height: 460px;
          max-height: 520px;
          box-shadow: 0 1px 2px 0 #1018280a, 0 1px 3px 0 #1018280f;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .product-card__title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

          .product-card {
            min-height: 0;
            max-height: none;
          }

          .product-card__media {
            height: 200px !important;
          }

          .product-card__body {
            padding: 14px !important;
          }

          .product-card__title {
            font-size: 20px !important;
            line-height: 28px !important;
          }

          .product-card__descriptor {
            -webkit-line-clamp: 3 !important;
          }

          .no-products-message {
            padding: 20px;
            font-size: 14px;
          }
        }
      `}),n.jsx("div",{className:"product-list-container",children:n.jsx("div",{className:"product-grid",children:o.length>0?o.map(a=>n.jsx(B0,{product:a},a.id)):n.jsx("div",{className:"no-products-message",children:"No products matched your search."})})})]})}function B0({product:o,isHoverPreview:a=!1}){const{addItem:l,openCartDrawer:u}=br(),p=`/products/${o.id}`;return n.jsxs("div",{className:"product-card","data-testid":"collection-product-card",role:a?void 0:"link",tabIndex:a?void 0:0,onClick:a?void 0:f=>{f.target.closest("button")||(window.location.href=p)},onKeyDown:a?void 0:f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),window.location.href=p)},style:{boxShadow:a?"0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814":void 0,cursor:a?"default":"pointer"},children:[n.jsxs("div",{className:"product-card__media",style:{position:"relative",height:"220px",backgroundColor:"var(--muted)"},children:[o.imageUrl?n.jsx("img",{src:o.imageUrl,alt:o.imageAlt||o.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null,a?n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#10182808"}}):null,n.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",zIndex:a?1:"auto"},children:n.jsx(ot,{label:o.badgeLabel,variant:o.badgeVariant,size:"sm"})}),n.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:a?1:"auto"},children:n.jsx("button",{style:{height:"32px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"8px",backgroundColor:"transparent",color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:"Save"})})]}),n.jsxs("div",{className:"product-card__body",style:{padding:"16px",display:"flex",flexDirection:"column",gap:"10px",flex:1},children:[n.jsx("h2",{className:"product-card__title",style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.name}),n.jsx("p",{className:"product-card__descriptor",style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical",overflow:"hidden"},children:o.descriptor}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.featureLine}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"auto",paddingTop:"8px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.priceLabel}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.shippingLabel})]})]}),n.jsx("div",{style:{padding:"16px",paddingTop:"0"},children:n.jsx(Ye,{variant:"primary",size:"md",label:o.isInStock?"Add to cart":"Out of stock",disabled:!o.isInStock||!o.variantId,onClick:async()=>{if(!o.variantId)return;const f=await l(o.variantId);if(!f.ok){Yd.error("Unable to add item",{description:f.error||"Please try again.",duration:5e3});return}Yd.success("Added to cart",{description:`${o.name} is in your cart.`,duration:1/0,action:{label:"View cart",onClick:()=>{closeCartDrawer(),window.location.href="/cart"}},cancel:{label:"Close",onClick:()=>{}}})},fullWidth:!0})})]})}function W0(){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"products-page-header",children:[n.jsxs("div",{className:"products-page-header-content",children:[n.jsx("div",{className:"products-page-eyebrow",children:"Curated gear"}),n.jsx("h1",{className:"products-page-title",children:"Products"})]}),n.jsx("div",{className:"products-page-description",children:"Best-in-class essentials chosen for durability, clarity, and real daily use."})]})]})}function V0({resultCount:o}){const[a,l]=N.useState(!1),[u,p]=N.useState("Recommended"),f=["Recommended","Price: Low to High","Price: High to Low","Newest","Most Popular"];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"product-results-header",children:[n.jsxs("div",{className:"results-count",children:["Showing ",n.jsx("span",{className:"results-count-number",children:o})," ","results"]}),n.jsxs("div",{className:"sort-controls",children:[n.jsx("span",{className:"sort-label",children:"Sort by:"}),n.jsxs("div",{className:"sort-dropdown-wrapper",children:[n.jsxs("button",{onClick:()=>l(!a),className:"sort-button",onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--muted)",m.currentTarget.style.borderColor="var(--border)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="var(--card)",m.currentTarget.style.borderColor="var(--border)"},children:[u,n.jsx(pg,{size:16,color:"var(--muted-foreground)",style:{transition:"transform 150ms ease",transform:a?"rotate(180deg)":"rotate(0deg)"}})]}),a&&n.jsx("div",{className:"sort-dropdown",children:f.map(m=>n.jsx("button",{onClick:()=>{p(m),l(!1)},className:"sort-option",style:{backgroundColor:u===m?"var(--muted)":"transparent",fontWeight:u===m?"600":"500",color:u===m?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:g=>{u!==m&&(g.currentTarget.style.backgroundColor="var(--muted)")},onMouseLeave:g=>{u!==m&&(g.currentTarget.style.backgroundColor="transparent")},children:m},m))})]})]})]})]})}const q0={id:ma,label:yv},Y0=o=>{const a=new Set;return o.flatMap(u=>u.categoryIds.map((p,f)=>({id:p,label:u.categoryLabels[f]??u.categoryIds[f]}))).filter(u=>!u.id||a.has(u.id)?!1:(a.add(u.id),!0))};function Q0(o){const a=Y0(o);return{filters:[q0,...a],isLoading:!1,resetLabel:"Reset filters"}}const K0=120,X0=(o,a)=>{const l=Number.parseFloat(o);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:a,maximumFractionDigits:0}).format(l):`${a} ${o}`},G0=o=>{var a;return o.availableForSale===!1?!1:typeof o.totalInventory=="number"?o.totalInventory>0:((a=o.variants)==null?void 0:a.edges.some(l=>{const u=l.node;return u.availableForSale===!1?!1:typeof u.quantityAvailable=="number"?u.quantityAvailable>0:u.availableForSale===!0}))??!0},J0=o=>{var l,u,p,f;const a=(u=(l=o.variants)==null?void 0:l.edges.find(m=>{const g=m.node;return g.availableForSale&&(typeof g.quantityAvailable!="number"||g.quantityAvailable>0)}))==null?void 0:u.node;return(a==null?void 0:a.id)||((f=(p=o.variants)==null?void 0:p.edges[0])==null?void 0:f.node.id)||null},Z0=(o,a=K0)=>{const l=o.replace(/\s+/g," ").trim();return l.length<=a?l:`${l.slice(0,a).trimEnd()}...`},Xd=o=>{var x,w,h,v;const a=((x=o.shortDescription)==null?void 0:x.value)||o.description||"Curated by Vibe Station",l=Z0(a),u=((w=o.featureLine)==null?void 0:w.value)||o.tags.slice(0,3).join(" · ")||"Durable build",p=((h=o.shippingInfo)==null?void 0:h.value)||"Shipping calculated at checkout",f=((v=o.badge)==null?void 0:v.value)||o.tags[0]||"Curated",m=Tl(o),g=Array.from(new Set(o.tags.map(T=>T.trim()).filter(Boolean))),k=g.map(T=>Ip(T)).filter(Boolean);return{id:o.handle,variantId:J0(o),name:o.title,descriptor:l,featureLine:u,priceLabel:X0(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),shippingLabel:p,isInStock:G0(o),badgeLabel:f,badgeVariant:"accent",imageUrl:m==null?void 0:m.url,imageAlt:m==null?void 0:m.altText,categoryIds:k,categoryLabels:g}};let Wo=[],jl=!1,Mo=null;const Vo=new Map,Cl=new Set,hl=new Map,Fp=o=>(o==null?void 0:o.trim())??"",e1=async o=>{const a=Fp(o);if(!a)return Mo||(Mo=(async()=>{try{Wo=(await ga({first:24})).edges.map(f=>Xd(f.node))}catch(p){console.error("Failed to load products from Shopify",p),Wo=[]}finally{jl=!0,Mo=null}})(),Mo);const l=hl.get(a);if(l)return l;const u=(async()=>{try{const f=(await ga({first:24,query:a})).edges.map(m=>Xd(m.node));Vo.set(a,f)}catch(p){console.error("Failed to load searched products from Shopify",p),Vo.set(a,[])}finally{Cl.add(a),hl.delete(a)}})();return hl.set(a,u),u};function Op(o){const a=Fp(o),[l,u]=N.useState(a?Vo.get(a)??[]:Wo),[p,f]=N.useState(a?!Cl.has(a):!jl);return N.useEffect(()=>{let m=!1;return(a?Cl.has(a):jl)?(u(a?Vo.get(a)??[]:Wo),f(!1),()=>{m=!0}):(f(!0),e1(a).then(()=>{m||(u(a?Vo.get(a)??[]:Wo),f(!1))}),()=>{m=!0})},[a]),{products:l,hoverPreviewProduct:l[0],isLoading:p}}function t1(){const[o,a]=N.useState(""),[l,u]=N.useState(""),[p,f]=N.useState(ma),[m,g]=N.useState(!1),{products:k,isLoading:x}=Op(l),{filters:w,resetLabel:h}=Q0(k),v=p===ma?k:k.filter(T=>T.categoryIds.includes(p));return N.useEffect(()=>{x||g(!0)},[x]),N.useEffect(()=>{w.some(T=>T.id===p)||f(ma)},[p,w]),!m&&x?n.jsx(Xx,{}):n.jsx(nt,{paddingTop:"48px",paddingBottom:"72px",background:"var(--background)",children:n.jsxs(be,{children:[n.jsx(r1,{}),n.jsx(n1,{searchInput:o,onSearchInputChange:a,onSearchSubmit:()=>u(o.trim()),isSearching:x,activeFilter:p,onFilterChange:f,filters:w,resetLabel:h,resultCount:v.length,products:v})]})})}function r1(){return n.jsx(W0,{})}function n1({searchInput:o,onSearchInputChange:a,onSearchSubmit:l,isSearching:u,activeFilter:p,onFilterChange:f,filters:m,resetLabel:g,resultCount:k,products:x}){return n.jsxs(Se,{gap:"16px",children:[n.jsx(d0,{query:o,onQueryChange:a,onSearch:l,isSearching:u}),n.jsx(p0,{filters:m,activeFilter:p,onFilterChange:f,resetLabel:g}),n.jsx(V0,{resultCount:k}),n.jsx(H0,{products:x})]})}function ja({title:o,lastUpdated:a,intro:l=[],sections:u}){return n.jsx(nt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs(Se,{gap:"24px",children:[n.jsxs("header",{children:[n.jsx("h1",{style:o1,children:o}),n.jsxs("p",{style:i1,children:["Last updated: ",a]})]}),l.map((p,f)=>n.jsx("p",{style:Gd,children:p},f)),u.map(p=>n.jsxs("section",{children:[n.jsx("h2",{style:a1,children:p.title}),n.jsx(Se,{gap:"14px",children:p.blocks.map((f,m)=>f.type==="subheading"?n.jsx("h3",{style:s1,children:f.content},m):f.type==="list"?n.jsx("ul",{style:l1,children:f.items.map((g,k)=>n.jsx("li",{style:c1,children:g},k))},m):n.jsx("p",{style:Gd,children:f.content},m))})]},p.title))]})})})}const Yo={color:"var(--primary)",textDecoration:"none",fontWeight:600},o1={margin:0,color:"var(--foreground)",fontSize:"36px",lineHeight:"44px",fontWeight:700},i1={marginTop:"8px",marginBottom:0,color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px"},a1={marginTop:0,marginBottom:"10px",color:"var(--foreground)",fontSize:"20px",lineHeight:"30px",fontWeight:600},s1={margin:0,color:"var(--foreground)",fontSize:"16px",lineHeight:"24px",fontWeight:600},Gd={margin:0,color:"var(--muted-foreground)",fontSize:"16px",lineHeight:"24px"},l1={margin:0,paddingLeft:"20px",color:"var(--muted-foreground)",display:"grid",gap:"8px"},c1={fontSize:"16px",lineHeight:"24px"},u1="Read the Vibe Station Terms of Service governing access to our website, storefront, accounts, products, and services.",d1=[{title:"1. Scope of Services",blocks:[{type:"paragraph",content:"Our “Services” include our website, online storefront, customer account experience, support channels, product sales, content, and any related digital or physical services we may introduce from time to time, including future store features, member experiences, events, workshops, digital products, subscriptions, or community features, where offered."}]},{title:"2. Eligibility",blocks:[{type:"paragraph",content:"You must be legally capable of entering into a binding contract under applicable law to use the Services and place orders. If you use the Services on behalf of a company or other entity, you represent that you have authority to bind that entity to these Terms."}]},{title:"3. Accounts",blocks:[{type:"paragraph",content:"You may be allowed to create a customer account. You are responsible for:"},{type:"list",items:["keeping your login credentials secure,","ensuring your account information is accurate and up to date,","all activity that occurs under your account to the extent caused by your actions or failure to safeguard credentials."]},{type:"paragraph",content:"We may suspend or terminate accounts that are used unlawfully, fraudulently, abusively, or in violation of these Terms."}]},{title:"4. Product Information and Availability",blocks:[{type:"paragraph",content:"We try to describe products as accurately as reasonably possible. However:"},{type:"list",items:["product images may vary depending on device display, lighting, or packaging updates,","minor variations in appearance, finish, labeling, or packaging may occur,","product availability may change without notice,","some items may be offered in limited quantities."]},{type:"paragraph",content:"We reserve the right to modify, discontinue, or limit the availability of any product or service at any time."}]},{title:"5. Pricing and Taxes",blocks:[{type:"paragraph",content:"Prices are displayed in the currency shown on the website unless otherwise stated. We may change prices at any time before an order is accepted. Applicable taxes, shipping charges, handling fees, or similar charges may be added at checkout where required."},{type:"paragraph",content:"In the event of an obvious pricing, listing, or typographical error, we reserve the right to cancel or refuse affected orders and refund any amount paid."}]},{title:"6. Orders and Acceptance",blocks:[{type:"paragraph",content:"Placing an order does not guarantee acceptance. An order is accepted only when we confirm it through an order confirmation, shipment confirmation, or by dispatching the product, as applicable."},{type:"paragraph",content:"We reserve the right to refuse, limit, cancel, or hold any order for reasons including:"},{type:"list",items:["suspected fraud or unauthorized activity,","incorrect pricing or product information,","stock unavailability,","unusual or excessive order volumes,","failure of payment authorization,","delivery limitations."]},{type:"paragraph",content:"If payment has already been captured for a cancelled order, we will initiate an appropriate refund in accordance with our refund policy and payment-provider processes."}]},{title:"7. Payments",blocks:[{type:"paragraph",content:"Payments may be processed through third-party payment service providers, including Razorpay. By placing an order, you authorize us and our payment partners to process your payment using the method you selected."},{type:"paragraph",content:"We do not generally store full card details, banking passwords, or UPI PINs. Payment processing may be subject to verification, authorization, fraud checks, and the terms of the payment provider."}]},{title:"8. Shipping and Delivery",blocks:[{type:"paragraph",content:"Shipping and delivery are governed by our Shipping Policy, which forms part of these Terms. Delivery estimates are indicative unless expressly stated otherwise. Delays may occur due to carrier issues, weather, operational constraints, force majeure events, or causes outside our control."}]},{title:"9. Returns, Replacements, and Refunds",blocks:[{type:"paragraph",content:"Returns, replacements, cancellations, and refunds are governed by our Return and Refund Policy, which forms part of these Terms."}]},{title:"10. Permitted Use",blocks:[{type:"paragraph",content:"You agree not to:"},{type:"list",items:["use the Services for unlawful, fraudulent, deceptive, or abusive purposes,","interfere with site security or platform integrity,","scrape, copy, reproduce, or exploit the Services or content without authorization,","upload or transmit malicious code or harmful material,","impersonate any person or entity,","attempt unauthorized access to accounts, systems, or data,","use the Services in a way that could damage, disable, overburden, or impair our systems or other users’ experience."]}]},{title:"11. Intellectual Property",blocks:[{type:"paragraph",content:"All website content, branding, text, graphics, product photography, design elements, software interfaces, logos, trademarks, trade names, and related material made available by us are owned by or licensed to us and are protected by applicable intellectual property laws."},{type:"paragraph",content:"Except as expressly permitted in writing, you may not copy, reproduce, distribute, modify, publish, transmit, display, create derivative works from, or commercially exploit any part of the Services."}]},{title:"12. User Content",blocks:[{type:"paragraph",content:"If you submit reviews, feedback, suggestions, testimonials, images, messages, or other content to us:"},{type:"list",items:["you represent that you have the right to provide it,","you grant us a non-exclusive, worldwide, royalty-free, transferable license to use, reproduce, adapt, publish, display, and distribute it in connection with operating and promoting the Services,","you acknowledge that we may remove content that is unlawful, misleading, abusive, infringing, irrelevant, or otherwise inappropriate."]}]},{title:"13. Third-Party Services",blocks:[{type:"paragraph",content:"Parts of the Services may rely on third-party providers, including commerce infrastructure, payment processors, shipping partners, logistics providers, hosting services, and related tools. We are not responsible for third-party services except to the extent required by applicable law."}]},{title:"14. Disclaimer of Warranties",blocks:[{type:"paragraph",content:"To the fullest extent permitted by law, the Services are provided on an “as is” and “as available” basis. We do not guarantee that:"},{type:"list",items:["the Services will be uninterrupted, error-free, or always available,","defects will always be corrected immediately,","the Services will be free from all security vulnerabilities,","product descriptions or content will always be complete, current, or error-free."]},{type:"paragraph",content:"Nothing in these Terms excludes any warranty or right that cannot be excluded under applicable consumer law."}]},{title:"15. Limitation of Liability",blocks:[{type:"paragraph",content:"To the fullest extent permitted by law, Vibe Station and its directors, officers, employees, affiliates, agents, and service providers shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including loss of profits, revenue, goodwill, data, or business opportunity, arising from or related to the Services."},{type:"paragraph",content:"To the fullest extent permitted by law, our aggregate liability for any claim arising out of or relating to the Services or any order shall not exceed the amount paid by you to us for the specific product or service giving rise to the claim."},{type:"paragraph",content:"Nothing in these Terms limits liability where such limitation is prohibited by law."}]},{title:"16. Indemnity",blocks:[{type:"paragraph",content:"You agree to indemnify and hold harmless Vibe Station and its affiliates, personnel, and service providers from claims, losses, liabilities, damages, costs, and expenses arising out of:"},{type:"list",items:["your misuse of the Services,","your violation of these Terms,","your infringement of any third-party rights,","your unlawful or fraudulent conduct."]}]},{title:"17. Termination",blocks:[{type:"paragraph",content:"We may suspend or terminate your access to the Services at our discretion if we reasonably believe you have violated these Terms, caused risk to our users, business, or systems, or engaged in fraudulent or unlawful conduct."},{type:"paragraph",content:"You may stop using the Services at any time."}]},{title:"18. Changes to the Services or Terms",blocks:[{type:"paragraph",content:"We may modify the Services or these Terms from time to time. Updated Terms become effective when posted, unless otherwise stated. Your continued use of the Services after the updated Terms are posted constitutes acceptance of the revised Terms."}]},{title:"19. Privacy",blocks:[{type:"paragraph",content:"Your use of the Services is also subject to our Privacy Policy and Cookie Policy."}]},{title:"20. Governing Law and Jurisdiction",blocks:[{type:"paragraph",content:"These Terms shall be governed by the laws of India. Subject to applicable consumer protection and data protection laws, courts in Gujarat, India shall have jurisdiction in relation to disputes arising from these Terms or the Services."}]},{title:"21. Grievance Officer and Contact",blocks:[{type:"paragraph",content:n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"Vibe Station"}),n.jsx("br",{}),"Operated by ",n.jsx("strong",{children:"CODEMASTR APPS PRIVATE LIMITED"}),n.jsx("br",{}),"Gujarat, India",n.jsx("br",{}),"Email:"," ",n.jsx("a",{href:"mailto:studio@thevibestation.com",style:Yo,children:"studio@thevibestation.com"})]})},{type:"paragraph",content:n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"Grievance Officer"}),n.jsx("br",{}),"Name: ",n.jsx("strong",{children:"[Insert Full Name]"}),n.jsx("br",{}),"Designation: ",n.jsx("strong",{children:"Grievance Officer"}),n.jsx("br",{}),"Email:"," ",n.jsx("a",{href:"mailto:studio@thevibestation.com",style:Yo,children:"studio@thevibestation.com"}),n.jsx("br",{}),"Address: ",n.jsx("strong",{children:"[Insert Full Business Address in Gujarat, India]"})]})}]}];function p1(){return f1(),n.jsx(ja,{title:"Terms of Service",lastUpdated:"March 22, 2026",intro:[n.jsxs(n.Fragment,{children:["Welcome to Vibe Station. These Terms of Service (“Terms”) govern your access to and use of the website, storefront, customer account features, content, products, services, and related experiences made available by ",n.jsx("strong",{children:"Vibe Station, operated by CODEMASTR APPS PRIVATE LIMITED"}),", based in"," ",n.jsx("strong",{children:"Gujarat, India"})," (“Vibe Station,” “we,” “us,” or “our”)."]}),"By accessing or using our website or purchasing from us, you agree to these Terms. If you do not agree, please do not use the Services."],sections:d1})}function f1(){N.useEffect(()=>{const o=document.title;return document.title="Terms of Service",()=>{document.title=o}},[]),N.useEffect(()=>{let o=document.querySelector('meta[name="description"]');const a=!!o;o||(o=document.createElement("meta"),o.setAttribute("name","description"),document.head.appendChild(o));const l=o.getAttribute("content");return o.setAttribute("content",u1),()=>{o&&(a?l!==null&&o.setAttribute("content",l):o.remove())}},[])}const m1="Read the Vibe Station Privacy Policy to understand what information we collect, how we use it, and your privacy rights.";function h1(){return N.useEffect(()=>{const o=document.title;document.title="Privacy Policy";let a=document.querySelector('meta[name="description"]');const l=!!a;a||(a=document.createElement("meta"),a.setAttribute("name","description"),document.head.appendChild(a));const u=a.getAttribute("content");return a.setAttribute("content",m1),()=>{document.title=o,a&&(l?u!==null&&a.setAttribute("content",u):a.remove())}},[]),n.jsx(nt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs(Se,{gap:"24px",children:[n.jsxs("header",{children:[n.jsx("h1",{style:g1,children:"Privacy Policy"}),n.jsx("p",{style:y1,children:"Last updated: March 10, 2026"})]}),n.jsx("p",{style:Te,children:"Vibe Station (“we,” “us,” or “our”) respects your privacy and is committed to handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you visit, use, or make a purchase through our website, storefront, customer account experience, and related services (collectively, the “Services”)."}),n.jsx("p",{style:Te,children:"Vibe Station, operated by CODEMASTR APPS PRIVATE LIMITED, is based in Gujarat, India."}),n.jsx("p",{style:Te,children:"Our Services may be powered in part by third-party commerce and operational infrastructure, including Shopify for commerce operations, Razorpay for payments, and Shiprocket for shipping and fulfillment support. Those providers may process personal information in accordance with their own terms, notices, and applicable law."}),n.jsx("p",{style:Te,children:"By using our Services, you acknowledge that your information will be handled as described in this Privacy Policy."}),n.jsxs(mt,{title:"1. Information We Collect",children:[n.jsx(gl,{children:"Information you provide directly"}),n.jsx(Xr,{items:["name","email address","phone number","shipping address","billing address","account details","order details and purchase history","messages, inquiries, support requests, reviews, and other communications you send to us"]}),n.jsx(gl,{children:"Information collected automatically"}),n.jsx(Xr,{items:["device and browser information","IP address","approximate location inferred from IP address","pages viewed and interactions with the Services","timestamps, referral information, and technical diagnostics","cookie and session data necessary for site functionality, security, and account continuity"]}),n.jsx(gl,{children:"Information from service providers and transaction partners"}),n.jsx(Xr,{items:["payment status and limited transaction metadata from payment processors","shipping, delivery, and fulfillment updates from logistics and shipping partners","fraud, risk, security, and operational signals necessary to protect the Services"]}),n.jsxs("p",{style:Te,children:["We do ",n.jsx("strong",{children:"not"})," collect your card number, UPI PIN, bank password, or similar full financial credentials directly unless explicitly shown and stated at checkout. Payment information is typically handled by our payment service providers."]})]}),n.jsxs(mt,{title:"2. How We Use Information",children:[n.jsx(Xr,{items:["create, maintain, and secure customer accounts","authenticate users and keep accounts functional","process orders, payments, shipping, returns, replacements, and refunds","communicate about purchases, deliveries, service issues, and support requests","provide customer support","detect, investigate, and prevent fraud, misuse, unauthorized access, and other harmful activity","maintain, troubleshoot, and improve the functionality, reliability, and security of the Services","comply with legal obligations and enforce our terms, policies, and rights"]}),n.jsx("p",{style:Te,children:"We may also use aggregated or de-identified information where permitted by law."})]}),n.jsxs(mt,{title:"3. Cookies and Similar Technologies",children:[n.jsx("p",{style:Te,children:"We may use cookies, local storage, session technologies, and similar tools that are reasonably necessary to operate the Services, keep users signed in, remember preferences, maintain security, and support essential website functionality."}),n.jsx("p",{style:Te,children:"At present, we do not state in this Privacy Policy that we use advertising trackers, marketing pixels, or non-essential analytics tools. If we introduce such tools in the future, we may update this Privacy Policy and, where required, provide additional notice or choices."}),n.jsx("p",{style:Te,children:"You can usually control cookies through your browser settings, though disabling certain cookies may affect functionality."})]}),n.jsx(mt,{title:"4. Payments",children:n.jsx("p",{style:Te,children:"Payments are processed through third-party payment providers, including Razorpay. These providers may collect, process, and store payment-related information under their own privacy notices, security practices, and legal obligations. We generally receive limited payment-related information such as payment confirmation, payment status, transaction identifiers, and other operational details necessary to complete your order, manage refunds, prevent fraud, and maintain records."})}),n.jsx(mt,{title:"5. Shipping and Fulfillment",children:n.jsx("p",{style:Te,children:"To fulfill and deliver your orders, we may share relevant information such as your name, phone number, shipping address, order contents, shipment value, and delivery instructions with shipping, courier, and fulfillment partners, including Shiprocket and carrier partners it may engage. This information is used only as reasonably necessary for order processing, fulfillment, delivery, returns, support, logistics coordination, and related compliance purposes."})}),n.jsx(mt,{title:"6. Commerce Infrastructure and Store Operations",children:n.jsx("p",{style:Te,children:"Our commerce operations may be supported by Shopify, including storefront, checkout-related infrastructure, order management, customer account functionality, and related commerce services. Even where the customer experience is delivered through a custom or headless storefront, the underlying commerce workflow may still involve third-party platform infrastructure. To the extent these providers process personal information for store operations, that processing may also be governed by their own notices and contractual terms."})}),n.jsxs(mt,{title:"7. How We Share Information",children:[n.jsx("p",{style:Te,children:"We do not sell personal information in the ordinary meaning of that term."}),n.jsx("p",{style:Te,children:"We may share personal information:"}),n.jsx(Xr,{items:["with service providers and vendors that help us operate the Services","with payment, shipping, fulfillment, hosting, security, and commerce infrastructure providers","where necessary to investigate fraud, enforce our terms, or protect rights, safety, and property","where required by law, regulation, legal process, or lawful authority request","in connection with a merger, financing, acquisition, restructuring, dissolution, sale of assets, or similar transaction","with your direction or consent"]})]}),n.jsxs(mt,{title:"8. Legal Bases and Lawful Use",children:[n.jsx("p",{style:Te,children:"Where applicable law requires a legal basis for processing, we may process personal information because:"}),n.jsx(Xr,{items:["it is necessary to provide the Services or perform a contract with you","it is necessary to comply with legal obligations","it is necessary for our legitimate interests, such as securing, operating, and improving the Services","you have given consent, where consent is required"]})]}),n.jsxs(mt,{title:"9. Data Retention",children:[n.jsx("p",{style:Te,children:"We retain personal information for as long as reasonably necessary for the purposes described in this Privacy Policy, including to:"}),n.jsx(Xr,{items:["provide the Services","complete transactions and fulfill orders","maintain financial, tax, accounting, and business records","resolve disputes","enforce agreements","comply with legal, regulatory, or reporting obligations"]}),n.jsx("p",{style:Te,children:"Retention periods may vary depending on the type of information and the purpose for which it was collected."})]}),n.jsxs(mt,{title:"10. Data Security",children:[n.jsx("p",{style:Te,children:"We use reasonable administrative, technical, and organizational safeguards designed to protect personal information, such as access controls, secure transmission practices, and measures intended to reduce the risk of unauthorized access, alteration, disclosure, or destruction."}),n.jsx("p",{style:Te,children:"However, no method of transmission over the internet and no method of electronic storage is completely secure, and we cannot guarantee absolute security."})]}),n.jsx(mt,{title:"11. International Data Transfers",children:n.jsx("p",{style:Te,children:"Your personal information may be processed, stored, or accessed in countries other than the country in which you are located, including through service providers and infrastructure partners. Where applicable, we take reasonable steps to require appropriate protections for such transfers under applicable law."})}),n.jsxs(mt,{title:"12. Your Rights",children:[n.jsx("p",{style:Te,children:"Depending on your location and the laws that apply, you may have the right to:"}),n.jsx(Xr,{items:["request access to your personal information","request correction of inaccurate or incomplete information","request deletion of your personal information","request a copy of certain personal information","object to or restrict certain processing","withdraw consent where processing is based on consent"]}),n.jsx("p",{style:Te,children:"We may need to verify your identity before acting on certain requests. We may also deny or limit requests where permitted by law."})]}),n.jsx(mt,{title:"13. Children’s Privacy",children:n.jsx("p",{style:Te,children:"Our Services are not directed to children, and we do not knowingly collect personal information from children where doing so would violate applicable law. If you believe a child has provided personal information to us improperly, please contact us so we can take appropriate action."})}),n.jsx(mt,{title:"14. Changes to This Privacy Policy",children:n.jsx("p",{style:Te,children:"We may update this Privacy Policy from time to time to reflect changes in our business, technology stack, legal obligations, or privacy practices. When we do, we will revise the “Last updated” date above. Where required, we will provide additional notice or obtain consent."})}),n.jsx(mt,{title:"15. Governing Law and Jurisdiction",children:n.jsx("p",{style:Te,children:"This Privacy Policy shall be governed by the laws of India. Subject to applicable consumer protection and data protection laws, courts in Gujarat, India shall have jurisdiction in relation to disputes arising from this Privacy Policy or the Services."})}),n.jsxs(mt,{title:"16. Contact Us",children:[n.jsx("p",{style:Te,children:"For privacy questions, requests, or complaints, contact us at:"}),n.jsx("p",{style:Te,children:n.jsx("a",{href:"mailto:studio@thevibestation.com",style:k1,children:"studio@thevibestation.com"})})]})]})})})}function mt({title:o,children:a}){return n.jsxs("section",{children:[n.jsx("h2",{style:x1,children:o}),n.jsx(Se,{gap:"14px",children:a})]})}function gl({children:o}){return n.jsx("h3",{style:v1,children:o})}function Xr({items:o}){return n.jsx("ul",{style:w1,children:o.map(a=>n.jsx("li",{style:b1,children:a},a))})}const g1={margin:0,color:"var(--foreground)",fontSize:"36px",lineHeight:"44px",fontWeight:700},y1={marginTop:"8px",marginBottom:0,color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px"},x1={marginTop:0,marginBottom:"10px",color:"var(--foreground)",fontSize:"20px",lineHeight:"30px",fontWeight:600},v1={margin:0,color:"var(--foreground)",fontSize:"16px",lineHeight:"24px",fontWeight:600},Te={margin:0,color:"var(--muted-foreground)",fontSize:"16px",lineHeight:"24px"},w1={margin:0,paddingLeft:"20px",color:"var(--muted-foreground)",display:"grid",gap:"8px"},b1={fontSize:"16px",lineHeight:"24px"},k1={color:"var(--primary)",textDecoration:"none",fontWeight:600},S1="Read the Vibe Station Shipping Policy for processing times, dispatch, delivery, and shipment support details.",j1=[{title:"1. Order Processing",blocks:[{type:"paragraph",content:"Orders are usually processed within 1 to 3 business days unless a different timeline is shown on the product page, at checkout, or in a specific announcement."},{type:"paragraph",content:"Orders are not typically processed, packed, or dispatched on:"},{type:"list",items:["Sundays,","public holidays,","exceptional closure days,","periods of unusually high order volume."]},{type:"paragraph",content:"If additional verification is needed for payment, address confirmation, fraud screening, or stock confirmation, processing may take longer."}]},{title:"2. Shipping Partners",blocks:[{type:"paragraph",content:"We may use Shiprocket and/or third-party courier partners to fulfill and deliver orders. Carrier selection may vary by destination, serviceability, order value, product type, and operational conditions."}]},{title:"3. Delivery Timelines",blocks:[{type:"paragraph",content:"Estimated delivery timelines shown on the site or at checkout are estimates only and are not guaranteed unless expressly stated otherwise."},{type:"paragraph",content:"Delivery times may vary based on:"},{type:"list",items:["destination and serviceable pin code,","courier operations,","weather,","transport disruptions,","regional restrictions,","inaccurate address details,","customer availability to receive delivery,","force majeure events,","other circumstances beyond our control."]}]},{title:"4. Shipping Charges",blocks:[{type:"paragraph",content:"Shipping charges, handling charges, or related fees, if any, will be displayed at checkout or otherwise communicated before you complete your purchase."},{type:"paragraph",content:"We may offer promotional shipping terms from time to time, including free shipping above certain thresholds, subject to change without notice."}]},{title:"5. Address Accuracy",blocks:[{type:"paragraph",content:"You are responsible for providing accurate and complete shipping details, including:"},{type:"list",items:["recipient name,","phone number,","delivery address,","pin code,","landmark or access instructions where relevant."]},{type:"paragraph",content:"We are not responsible for delays, failed deliveries, or additional charges resulting from incomplete, inaccurate, or outdated address information provided by you."}]},{title:"6. Shipment Tracking",blocks:[{type:"paragraph",content:"Where tracking is available, we may provide shipment tracking details after dispatch. Tracking updates are generated by carrier systems and may not refresh in real time."}]},{title:"7. Multiple Shipments",blocks:[{type:"paragraph",content:"An order may be shipped in one or more packages depending on stock location, packaging, carrier constraints, or operational decisions. Separate shipments may arrive at different times."}]},{title:"8. Delivery Attempts and Failed Delivery",blocks:[{type:"paragraph",content:"Courier partners may make a limited number of delivery attempts. If a delivery fails because:"},{type:"list",items:["the recipient is unavailable,","the address is incorrect or incomplete,","delivery is refused,","the shipment remains unclaimed,","the customer does not cooperate with delivery coordination,"]},{type:"paragraph",content:"the order may be returned to us, delayed, cancelled, or subject to re-shipping charges."}]},{title:"9. Delays Outside Our Control",blocks:[{type:"paragraph",content:"We are not liable for shipping or delivery delays caused by:"},{type:"list",items:["carrier disruptions,","natural events,","strikes,","transport or customs issues,","government actions,","local restrictions,","public emergencies,","other force majeure events."]},{type:"paragraph",content:"We will make reasonable efforts to assist with tracking and coordination where possible."}]},{title:"10. Risk and Title",blocks:[{type:"paragraph",content:"Unless otherwise required by applicable law, risk in the product passes to you upon delivery to the shipping address provided in the order."}]},{title:"11. Damaged or Tampered Packages",blocks:[{type:"paragraph",content:"If the outer package appears visibly damaged, tampered, opened, or compromised at the time of delivery, you should:"},{type:"list",items:["refuse delivery where appropriate, or","record evidence at delivery and contact us as soon as possible."]},{type:"paragraph",content:"If you accept such a package, please notify us within 48 hours of delivery with clear photos and your order details."}]},{title:"12. Serviceability",blocks:[{type:"paragraph",content:"We reserve the right to decline, cancel, or restrict orders to locations that are not serviceable, operationally high-risk, restricted by courier availability, or otherwise unsuitable for shipment."}]},{title:"13. International Shipping",blocks:[{type:"paragraph",content:"If international shipping is enabled in the future or expressly offered, additional customs duties, import taxes, brokerage charges, or destination-country fees may apply and shall generally be your responsibility unless stated otherwise at checkout."}]},{title:"14. Contact",blocks:[{type:"paragraph",content:n.jsx("a",{href:"mailto:studio@thevibestation.com",style:Yo,children:"studio@thevibestation.com"})}]}];function C1(){return _1(),n.jsx(ja,{title:"Shipping Policy",lastUpdated:"March 22, 2026",intro:["This Shipping Policy explains how Vibe Station processes, dispatches, and delivers orders placed through our website."],sections:j1})}function _1(){N.useEffect(()=>{const o=document.title;return document.title="Shipping Policy",()=>{document.title=o}},[]),N.useEffect(()=>{let o=document.querySelector('meta[name="description"]');const a=!!o;o||(o=document.createElement("meta"),o.setAttribute("name","description"),document.head.appendChild(o));const l=o.getAttribute("content");return o.setAttribute("content",S1),()=>{o&&(a?l!==null&&o.setAttribute("content",l):o.remove())}},[])}const T1="Read the Vibe Station Return and Refund Policy covering returns, replacements, cancellations, and refunds.",E1=[{title:"1. General Principle",blocks:[{type:"paragraph",content:"We aim to be fair, clear, and practical. Because many products sold through music and creator-commerce stores may be personal-use, consumable, sealed, fragile, or performance-related, not every product is eligible for return after delivery."}]},{title:"2. Eligible Cases",blocks:[{type:"paragraph",content:"You may be eligible for a return, replacement, refund, or other appropriate resolution if:"},{type:"list",items:["you received the wrong product,","the product arrived damaged,","the product was defective on arrival,","the product is materially different from what was ordered,","the order was cancelled before dispatch and payment had already been captured."]}]},{title:"3. Reporting Window",blocks:[{type:"paragraph",content:"For wrong, damaged, missing, tampered, or defective-on-arrival items, you must contact us within 48 hours of delivery with:"},{type:"list",items:["your order number,","a description of the issue,","clear photos or videos of the package and product,","any other information reasonably requested for verification."]},{type:"paragraph",content:"Claims reported after this window may be declined where verification is no longer reasonably possible."}]},{title:"4. Change-of-Mind Returns",blocks:[{type:"paragraph",content:"Unless otherwise stated on the product page, at checkout, or in a specific promotion, change-of-mind returns are generally not guaranteed."},{type:"paragraph",content:"Where we choose to accept a discretionary change-of-mind return, it will usually require that:"},{type:"list",items:["the request is made within 3 days of delivery,","the product is unused,","the product is unopened where sealed,","the product is in original condition,","all tags, packaging, accessories, manuals, and bundled items are included,","the item passes return inspection."]},{type:"paragraph",content:"In such cases, original shipping fees and return shipping costs may be deducted unless the return is due to our error."}]},{title:"5. Non-Returnable / Non-Refundable Items",blocks:[{type:"paragraph",content:"Unless required by applicable law or expressly approved by us, the following are generally not eligible for return or refund:"},{type:"list",items:["used products,","opened sealed items,","consumables,","hygiene-sensitive items,","customized or made-to-order products,","special-order items,","gift cards,","digital products or downloadable content,","products damaged due to misuse, mishandling, improper installation, abuse, neglect, unauthorized repair, or normal wear and tear,","clearance, final-sale, or non-returnable items marked as such."]}]},{title:"6. Return Approval",blocks:[{type:"paragraph",content:"A return must be approved by us before you send any item back. Unauthorized returns may be refused, delayed, or treated as ineligible."},{type:"paragraph",content:"If a return is approved, we may provide instructions regarding:"},{type:"list",items:["return pickup,","self-shipping,","packaging requirements,","return address,","supporting documentation."]}]},{title:"7. Inspection and Resolution",blocks:[{type:"paragraph",content:"Once the returned item is received, we may inspect it before approving a refund, replacement, store credit, or other resolution."},{type:"paragraph",content:"If the claim is validated, we may choose one of the following remedies at our discretion, subject to applicable law:"},{type:"list",items:["replacement,","refund,","repair support,","store credit,","partial refund where appropriate."]}]},{title:"8. Refund Method and Timeline",blocks:[{type:"paragraph",content:"Approved refunds are generally processed back to the original payment method, unless otherwise agreed or required."},{type:"paragraph",content:"After approval, refund timelines may vary depending on:"},{type:"list",items:["your payment method,","banking systems,","payment gateway processes,","public holidays,","technical settlement cycles."]},{type:"paragraph",content:"As a general estimate, processed refunds may reflect within 5 to 10 business days, though some payment methods may take longer."}]},{title:"9. Cancellation Policy",blocks:[{type:"paragraph",content:"Orders may be cancelled before dispatch unless:"},{type:"list",items:["the product is already packed or shipped,","the product is customized or specially procured,","the order is otherwise marked non-cancellable."]},{type:"paragraph",content:"If an order is cancelled after payment but before dispatch, an appropriate refund will be initiated."}]},{title:"10. Refused Delivery / Return-to-Origin",blocks:[{type:"paragraph",content:"If an order is refused at delivery or returned because of customer-caused delivery failure, we may deduct shipping, return shipping, handling, payment, or recovery charges from any applicable refund."}]},{title:"11. Fraud Prevention",blocks:[{type:"paragraph",content:"We reserve the right to deny returns, replacements, or refunds in cases involving:"},{type:"list",items:["suspicious claims,","repeated abuse of refund policies,","incomplete or false evidence,","tampering,","serial return misuse,","non-compliance with this policy."]}]},{title:"12. Statutory Rights",blocks:[{type:"paragraph",content:"Nothing in this policy limits any non-waivable rights you may have under applicable consumer law."}]},{title:"13. Contact",blocks:[{type:"paragraph",content:n.jsx("a",{href:"mailto:studio@thevibestation.com",style:Yo,children:"studio@thevibestation.com"})}]}];function I1(){return N1(),n.jsx(ja,{title:"Return and Refund Policy",lastUpdated:"March 22, 2026",intro:["This Return and Refund Policy explains when returns, replacements, cancellations, and refunds may be available for purchases made from Vibe Station."],sections:E1})}function N1(){N.useEffect(()=>{const o=document.title;return document.title="Return and Refund Policy",()=>{document.title=o}},[]),N.useEffect(()=>{let o=document.querySelector('meta[name="description"]');const a=!!o;o||(o=document.createElement("meta"),o.setAttribute("name","description"),document.head.appendChild(o));const l=o.getAttribute("content");return o.setAttribute("content",T1),()=>{o&&(a?l!==null&&o.setAttribute("content",l):o.remove())}},[])}const R1="Read the Vibe Station Cookie Policy to understand how cookies and similar technologies are used on the site.",P1=[{title:"1. What Are Cookies",blocks:[{type:"paragraph",content:"Cookies are small text files placed on your browser or device when you visit a website. Similar technologies may include local storage, pixels, tags, SDKs, and session identifiers."},{type:"paragraph",content:"They help websites function, remember preferences, maintain sessions, support security, and understand how services are used."}]},{title:"2. Why We Use Cookies",blocks:[{type:"paragraph",content:"We may use cookies and similar technologies for the following purposes:"},{type:"list",items:["to keep the website functioning properly,","to maintain secure sessions,","to support cart and account continuity,","to remember preferences,","to help detect fraud or abuse,","to improve reliability and technical performance,","to support essential storefront and commerce operations."]}]},{title:"3. Types of Cookies We May Use",blocks:[{type:"subheading",content:"Strictly Necessary Cookies"},{type:"paragraph",content:"These are required for the website to function properly. They may support:"},{type:"list",items:["login sessions,","shopping cart functionality,","checkout continuity,","fraud prevention,","security,","load balancing,","basic site performance."]},{type:"paragraph",content:"These cookies are generally necessary for the operation of the website and cannot always be disabled without affecting functionality."},{type:"subheading",content:"Functional Cookies"},{type:"paragraph",content:"These help remember choices you make, such as preferences, region, or similar settings that improve your experience."},{type:"subheading",content:"Performance or Analytics Cookies"},{type:"paragraph",content:"These may help us understand site usage, diagnose issues, and improve performance. As of the date of this policy, we do not describe the routine use of third-party advertising pixels or non-essential marketing trackers in this Cookie Policy. If we introduce optional analytics or similar tools in the future, we may update this policy and provide additional notice or choices where required."},{type:"subheading",content:"Advertising or Targeting Cookies"},{type:"paragraph",content:"As of the date of this policy, we do not state that we use advertising or retargeting cookies for profiling-based ad delivery. If that changes, we may update this Cookie Policy and, where required, seek or manage consent appropriately."}]},{title:"4. Third-Party Technologies",blocks:[{type:"paragraph",content:"Some parts of the storefront or supporting infrastructure may rely on third-party technologies, including commerce, hosting, payment, security, and delivery-related systems. These providers may set or access cookies or similar technologies where needed for core functionality, fraud prevention, or transaction support."}]},{title:"5. Browser Controls",blocks:[{type:"paragraph",content:"Most browsers allow you to manage cookies through settings, including blocking or deleting cookies. However, disabling cookies may affect core functionality such as:"},{type:"list",items:["login,","cart persistence,","checkout flow,","account access,","security features."]}]},{title:"6. Consent and Choices",blocks:[{type:"paragraph",content:"Where applicable law requires consent for non-essential cookies, we may present a consent or preference mechanism. Where such tools are not legally required or where only strictly necessary cookies are used, cookie choices may be more limited."}]},{title:"7. International Visitors",blocks:[{type:"paragraph",content:"If you access our site from a jurisdiction with specific cookie or privacy rights, your rights may depend on the law applicable to your location. We may update our consent and cookie practices as our site, tools, and legal obligations evolve."}]},{title:"8. Updates to This Policy",blocks:[{type:"paragraph",content:"We may update this Cookie Policy from time to time to reflect changes in law, technology, our service providers, or our website practices. The updated version will be posted with a revised “Last updated” date."}]},{title:"9. Contact",blocks:[{type:"paragraph",content:n.jsx("a",{href:"mailto:studio@thevibestation.com",style:Yo,children:"studio@thevibestation.com"})}]}];function z1(){return A1(),n.jsx(ja,{title:"Cookie Policy",lastUpdated:"March 22, 2026",intro:["This Cookie Policy explains how Vibe Station uses cookies and similar technologies in connection with our website, storefront, and related services."],sections:P1})}function A1(){N.useEffect(()=>{const o=document.title;return document.title="Cookie Policy",()=>{document.title=o}},[]),N.useEffect(()=>{let o=document.querySelector('meta[name="description"]');const a=!!o;o||(o=document.createElement("meta"),o.setAttribute("name","description"),document.head.appendChild(o));const l=o.getAttribute("content");return o.setAttribute("content",R1),()=>{o&&(a?l!==null&&o.setAttribute("content",l):o.remove())}},[])}function Mp({id:o,name:a,productHandle:l,variant:u,price:p,quantity:f,imageUrl:m,imageAlt:g,onIncrement:k,onDecrement:x,onRemove:w}){const h=`/products/${l}`;return n.jsx(We,{variant:"subtle",padding:"md",children:n.jsxs("div",{"data-testid":"cart-line-item",style:{display:"flex",gap:"12px",alignItems:"flex-start"},children:[n.jsxs("a",{href:h,style:{flex:1,display:"flex",gap:"12px",alignItems:"flex-start",textDecoration:"none",color:"inherit",minWidth:0},children:[n.jsx("div",{style:{width:"72px",height:"72px",backgroundColor:"var(--muted)",borderRadius:"12px",flexShrink:0,overflow:"hidden"},children:m?n.jsx("img",{src:m,alt:g||a,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"6px",minWidth:0},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:a}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:u}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:p})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-end"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(Ye,{variant:"ghost",size:"sm",label:"−",onClick:x?()=>x(o):void 0}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif",minWidth:"20px",textAlign:"center"},children:f}),n.jsx(Ye,{variant:"ghost",size:"sm",label:"+",onClick:k?()=>k(o):void 0})]}),n.jsx(Ye,{variant:"ghost",size:"sm",label:"Remove",onClick:w?()=>w(o):void 0})]})]})})}const L1={title:"Cart",yourCartTitle:"Your cart",relatedProductsTitle:"Related products",relatedProductsSubtitle:"Picked from the same product categories already in your cart.",relatedProductsEmptyState:"No related products are available right now.",summaryTitle:"Order summary",subtotalLabel:"Subtotal",shippingLabel:"Shipping",shippingValue:"Calculated at checkout",totalLabel:"Total",taxesLine:"Taxes and shipping calculated at checkout.",drawerCheckoutLabel:"Checkout",drawerContinueLabel:"Continue shopping",drawerFooterCaption:"You'll complete payment in checkout.",emptyCartMessage:"Your cart is empty.",summaryCheckoutLabel:"Checkout",summaryContinueLabel:"Continue shopping",writeItemSuffix:"items",addButtonLabel:"Add"};function Ko(){return{copy:L1,isLoading:!1}}const Jd=3;function Zd(o,a){return a.size===0?0:o.categoryIds.reduce((l,u)=>a.has(u)?l+1:l,0)}function D1(){const{addItem:o,items:a}=br(),{copy:l}=Ko(),{products:u,isLoading:p}=Op(),f=N.useMemo(()=>{if(!u.length)return[];const m=new Set(a.map(w=>w.productHandle)),g=new Set(a.map(w=>w.variantId)),k=u.filter(w=>m.has(w.id)),x=new Set(k.flatMap(w=>w.categoryIds));return[...u].filter(w=>w.isInStock).filter(w=>!m.has(w.id)).filter(w=>!w.variantId||!g.has(w.variantId)).sort((w,h)=>{const v=Zd(h,x),T=Zd(w,x);return v!==T?v-T:w.name.localeCompare(h.name)}).slice(0,Jd)},[a,u]);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[n.jsx("style",{children:`
        .cart-related-products__loading-grid,
        .cart-related-products__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        @media (max-width: 960px) {
          .cart-related-products__loading-grid,
          .cart-related-products__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .cart-related-products__loading-grid,
          .cart-related-products__grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .cart-related-products__title {
            font-size: 18px !important;
            line-height: 26px !important;
          }
        }
      `}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[n.jsx("h2",{className:"cart-related-products__title",style:{margin:0,fontSize:"20px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.relatedProductsTitle}),n.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.relatedProductsSubtitle})]}),p?n.jsx("div",{className:"cart-related-products__loading-grid",children:Array.from({length:Jd}).map((m,g)=>n.jsx("div",{style:{minHeight:"320px",borderRadius:"16px",border:"1px solid var(--border)",backgroundColor:"var(--card)"}},g))}):f.length?n.jsx("div",{className:"cart-related-products__grid",children:f.map(m=>n.jsx(We,{variant:"elevated",mediaSlot:n.jsxs("div",{style:{position:"relative",width:"100%",height:"180px",backgroundColor:"var(--muted)"},children:[m.imageUrl?n.jsx("img",{src:m.imageUrl,alt:m.imageAlt||m.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null,n.jsx("div",{style:{position:"absolute",top:"12px",left:"12px"},children:n.jsx(ot,{label:m.badgeLabel,variant:m.badgeVariant,size:"sm"})})]}),footerSlot:n.jsx(Ye,{variant:"primary",size:"sm",fullWidth:!0,label:l.addButtonLabel,disabled:!m.variantId,onClick:()=>{m.variantId&&o(m.variantId)}}),children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",height:"100%"},children:[n.jsx("h3",{style:{margin:0,fontSize:"18px",lineHeight:"26px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.name}),n.jsx("p",{style:{margin:0,fontSize:"13px",lineHeight:"18px",fontWeight:"400",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:m.descriptor}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.featureLine}),n.jsx("div",{style:{marginTop:"auto",fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.priceLabel})]})},m.id))}):n.jsx(We,{variant:"subtle",padding:"md",children:n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.relatedProductsEmptyState})})]})}function F1(){const{items:o,cartError:a,clearCartError:l,incrementItem:u,decrementItem:p,removeItem:f}=br(),{copy:m}=Ko();return n.jsxs("div",{className:"cart-items-column",style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsx("style",{children:`
        .cart-items-column {
          flex: 0 0 65%;
          min-width: 0;
        }

        @media (max-width: 960px) {
          .cart-items-column {
            flex: 1 1 auto;
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .cart-items-column__title {
            font-size: 28px !important;
            line-height: 34px !important;
          }
        }
      `}),n.jsx("h1",{className:"cart-items-column__title",style:{margin:0,fontSize:"30px",lineHeight:"38px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.yourCartTitle}),a?n.jsx("div",{onClick:l,children:n.jsx(Ht,{type:"error",children:a})}):null,n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:o.map(g=>n.jsx(Mp,{id:g.id,name:g.name,productHandle:g.productHandle,variant:g.variant,price:ya(g.price),quantity:g.quantity,imageUrl:g.imageUrl,imageAlt:g.imageAlt,onIncrement:u,onDecrement:p,onRemove:f},g.id))}),n.jsx(We,{variant:"subtle",padding:"lg",children:n.jsx(D1,{})})]})}function O1({title:o,subtitle:a,children:l,onClose:u,footer:p}){return n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:u,children:n.jsxs("div",{style:{width:"520px",maxWidth:"92%",backgroundColor:"var(--card)",borderRadius:"20px",border:"1px solid var(--border)",boxShadow:"0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814",padding:"20px",display:"flex",flexDirection:"column",gap:"16px",position:"relative"},onClick:f=>f.stopPropagation(),children:[(o||a)&&n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",position:"relative"},children:[n.jsxs("div",{children:[o&&n.jsx("div",{style:{fontSize:"18px",fontWeight:600,color:"var(--foreground)",lineHeight:"28px"},children:o}),a&&n.jsx("div",{style:{fontSize:"14px",color:"var(--muted-foreground)",lineHeight:"20px",marginTop:"4px"},children:a})]}),u&&n.jsx("div",{style:{position:"absolute",top:0,right:0},children:n.jsx("button",{onClick:u,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"Close"})})]}),n.jsx("div",{style:{flex:1,minHeight:"100px",display:"flex",flexDirection:"column",gap:"12px"},children:l}),p&&n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:p})]})})}function M1({itemCount:o,subtotal:a,onContinue:l,onBack:u,onClose:p}){return n.jsxs(O1,{onClose:p,title:"Heading to checkout",subtitle:"You'll complete payment securely in checkout.",footer:n.jsx(H1,{onContinue:l,onBack:u}),children:[n.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)",marginTop:"-8px"}}),n.jsx(U1,{itemCount:o,subtotal:a}),n.jsx($1,{})]})}function U1({itemCount:o,subtotal:a}){return n.jsx(We,{variant:"subtle",padding:"md",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx(yl,{label:"Items",value:String(o),valueWeight:"600"}),n.jsx(yl,{label:"Shipping",value:"Calculated in checkout"}),n.jsx(yl,{label:"Total",value:ya(a),valueWeight:"600",valueSize:"20px",valueLineHeight:"30px"}),n.jsx("div",{style:{marginTop:"6px"},children:n.jsx(ot,{label:"No password needed",variant:"neutral",size:"sm"})})]})})}function yl({label:o,value:a,valueWeight:l="400",valueSize:u="14px",valueLineHeight:p="20px"}){return n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:o}),n.jsx("div",{style:{fontSize:u,lineHeight:p,fontWeight:l,color:"var(--foreground)"},children:a})]})}function $1(){return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsx("div",{style:{position:"relative",height:"6px",width:"100%",backgroundColor:"var(--border)",borderRadius:"999px",overflow:"hidden"},children:n.jsx("div",{style:{position:"absolute",top:0,left:0,height:"6px",width:"45%",backgroundColor:"#4F46E5",borderRadius:"999px",transition:"width 0.3s ease-out"}})}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)"},children:"Preparing your checkout…"})]})}function H1({onContinue:o,onBack:a}){return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"100%"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[n.jsx(Ye,{label:"Back to cart",variant:"ghost",size:"md",onClick:a}),n.jsx(Ye,{label:"Continue",variant:"primary",size:"md",onClick:o})]}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)",textAlign:"right"},children:"If checkout doesn't open, try again."})]})}function Up({subtotal:o=5997,total:a=5997}){const{copy:l}=Ko();return n.jsx(We,{variant:"elevated",padding:"md",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.summaryTitle}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.subtotalLabel}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:ya(o)})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingLabel}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingValue})]}),n.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.totalLabel}),n.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:ya(a)})]})]}),n.jsx(Dp,{}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.taxesLine})]})})}function B1(){const{cartCount:o,subtotal:a,total:l,checkout:u}=br(),{copy:p}=Ko(),[f,m]=N.useState(!1);return n.jsxs("div",{className:"cart-summary-column",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx("style",{children:`
        .cart-summary-column {
          flex: 0 0 35%;
          min-width: 280px;
          position: sticky;
          top: 24px;
        }

        @media (max-width: 960px) {
          .cart-summary-column {
            flex: 1 1 auto;
            width: 100%;
            min-width: 0;
            position: static;
            top: auto;
          }
        }
      `}),n.jsx(Up,{subtotal:a,total:l}),n.jsx(Ye,{variant:"primary",size:"lg","data-testid":"checkout-button",label:p.summaryCheckoutLabel,onClick:()=>m(!0)}),n.jsx(Ye,{variant:"secondary",size:"lg",label:p.summaryContinueLabel,onClick:()=>{window.location.href="/products"}}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:p.taxesLine}),f?n.jsx(M1,{itemCount:o,subtotal:a,onBack:()=>m(!1),onClose:()=>m(!1),onContinue:()=>{u()}}):null]})}function W1(){return n.jsxs(nt,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:[n.jsx("style",{children:`
        .cart-page__layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        @media (max-width: 960px) {
          .cart-page__layout {
            flex-direction: column;
          }
        }
      `}),n.jsx(be,{children:n.jsxs("div",{className:"cart-page__layout",children:[n.jsx(F1,{}),n.jsx(B1,{})]})})]})}function V1(){return n.jsx(W1,{})}function q1(){const{items:o,cartCount:a,subtotal:l,total:u,cartError:p,clearCartError:f,closeCartDrawer:m,incrementItem:g,decrementItem:k,removeItem:x}=br(),{copy:w}=Ko();return n.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:[n.jsx("div",{onClick:m,style:{position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.5)"}}),n.jsxs("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:"420px",backgroundColor:"var(--card)",borderLeft:"1px solid var(--border)",boxShadow:"-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)",display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{padding:"24px",borderBottom:"1px solid var(--border)",flexShrink:0},children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:w.title}),n.jsx(ot,{label:`${a} ${w.writeItemSuffix}`,variant:"neutral",size:"sm"})]})}),n.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},children:[p?n.jsx("div",{onClick:f,children:n.jsx(Ht,{type:"error",children:p})}):null,o.length?n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:o.map(h=>n.jsx(Mp,{id:h.id,name:h.name,variant:h.variant,price:`₹${h.price.toLocaleString("en-IN")}`,quantity:h.quantity,imageUrl:h.imageUrl,imageAlt:h.imageAlt,onIncrement:g,onDecrement:k,onRemove:x},h.id))}):n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:w.emptyCartMessage}),n.jsx(Up,{subtotal:l,total:u})]}),n.jsxs("div",{style:{padding:"24px",borderTop:"1px solid var(--border)",flexShrink:0,display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsx(Ye,{variant:"primary",size:"lg","data-testid":"checkout-button",label:w.drawerCheckoutLabel,onClick:()=>{m(),window.location.href="/cart"}}),n.jsx(Ye,{variant:"secondary",size:"lg",label:w.drawerContinueLabel,onClick:m}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:w.drawerFooterCaption})]})]})]})}function Y1(){const o=window.location.pathname.replace(/\/+$/,"")||"/";if(o.startsWith("/products/"))return n.jsx(u0,{});if(/^\/account\/reset\/[^/]+\/[^/]+$/.test(o))return n.jsx(Ad,{});if(/^\/account\/orders\/[^/]+$/.test(o))return n.jsx(Sy,{});switch(o){case"/":return n.jsx(Jx,{});case"/products":return n.jsx(t1,{});case"/philosophy":return n.jsx(tv,{});case"/community":return n.jsx(mx,{});case"/terms":return n.jsx(p1,{});case"/privacy":return n.jsx(h1,{});case"/shipping-policy":return n.jsx(C1,{});case"/returns-refunds":return n.jsx(I1,{});case"/cookie-policy":return n.jsx(z1,{});case"/cart":return n.jsx(V1,{});case"/account":return n.jsx(wy,{});case"/account/login":return n.jsx(cy,{});case"/account/register":return n.jsx(uy,{});case"/account/password-reset":case"/account/forgot-password":return n.jsx(dy,{});case"/account/password-reset/confirm":return n.jsx(Ad,{});default:return n.jsx(jx,{})}}function Q1(){const{isDrawerOpen:o}=br(),a=window.location.pathname.replace(/\/+$/,"")||"/",l=a==="/account"||a.startsWith("/account/"),u=a==="/cart";return n.jsxs(tx,{children:[Y1(),!l&&!u&&o?n.jsx(q1,{}):null]})}const K1=({...o})=>{const{theme:a="system"}=Dl();return n.jsx($0,{theme:a,position:"top-center",className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...o})};function X1({children:o}){return n.jsxs(Ay,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[n.jsx(og,{children:n.jsx(Ny,{children:o})}),n.jsx(K1,{})]})}const $p=document.getElementById("root");if(!$p)throw new Error('Root element with id "root" was not found.');Bm.createRoot($p).render(n.jsx(N.StrictMode,{children:n.jsx(X1,{children:n.jsx(Q1,{})})}));

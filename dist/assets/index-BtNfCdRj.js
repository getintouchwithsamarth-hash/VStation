(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function l(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(p){if(p.ep)return;p.ep=!0;const f=l(p);fetch(p.href,f)}})();function rp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var il={exports:{}},Po={},sl={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function Om(){if(gd)return fe;gd=1;var o=Symbol.for("react.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),h=Symbol.iterator;function v(S){return S===null||typeof S!="object"?null:(S=h&&S[h]||S["@@iterator"],typeof S=="function"?S:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,P={};function z(S,N,B){this.props=S,this.context=N,this.refs=P,this.updater=B||T}z.prototype.isReactComponent={},z.prototype.setState=function(S,N){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,N,"setState")},z.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function ie(){}ie.prototype=z.prototype;function le(S,N,B){this.props=S,this.context=N,this.refs=P,this.updater=B||T}var ae=le.prototype=new ie;ae.constructor=le,R(ae,z.prototype),ae.isPureReactComponent=!0;var J=Array.isArray,ne=Object.prototype.hasOwnProperty,se={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function Ce(S,N,B){var Z,ue={},G=null,ge=null;if(N!=null)for(Z in N.ref!==void 0&&(ge=N.ref),N.key!==void 0&&(G=""+N.key),N)ne.call(N,Z)&&!ye.hasOwnProperty(Z)&&(ue[Z]=N[Z]);var pe=arguments.length-2;if(pe===1)ue.children=B;else if(1<pe){for(var xe=Array(pe),Fe=0;Fe<pe;Fe++)xe[Fe]=arguments[Fe+2];ue.children=xe}if(S&&S.defaultProps)for(Z in pe=S.defaultProps,pe)ue[Z]===void 0&&(ue[Z]=pe[Z]);return{$$typeof:o,type:S,key:G,ref:ge,props:ue,_owner:se.current}}function Q(S,N){return{$$typeof:o,type:S.type,key:N,ref:S.ref,props:S.props,_owner:S._owner}}function K(S){return typeof S=="object"&&S!==null&&S.$$typeof===o}function $(S){var N={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(B){return N[B]})}var ce=/\/+/g;function he(S,N){return typeof S=="object"&&S!==null&&S.key!=null?$(""+S.key):N.toString(36)}function Qe(S,N,B,Z,ue){var G=typeof S;(G==="undefined"||G==="boolean")&&(S=null);var ge=!1;if(S===null)ge=!0;else switch(G){case"string":case"number":ge=!0;break;case"object":switch(S.$$typeof){case o:case s:ge=!0}}if(ge)return ge=S,ue=ue(ge),S=Z===""?"."+he(ge,0):Z,J(ue)?(B="",S!=null&&(B=S.replace(ce,"$&/")+"/"),Qe(ue,N,B,"",function(Fe){return Fe})):ue!=null&&(K(ue)&&(ue=Q(ue,B+(!ue.key||ge&&ge.key===ue.key?"":(""+ue.key).replace(ce,"$&/")+"/")+S)),N.push(ue)),1;if(ge=0,Z=Z===""?".":Z+":",J(S))for(var pe=0;pe<S.length;pe++){G=S[pe];var xe=Z+he(G,pe);ge+=Qe(G,N,B,xe,ue)}else if(xe=v(S),typeof xe=="function")for(S=xe.call(S),pe=0;!(G=S.next()).done;)G=G.value,xe=Z+he(G,pe++),ge+=Qe(G,N,B,xe,ue);else if(G==="object")throw N=String(S),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ge}function Te(S,N,B){if(S==null)return S;var Z=[],ue=0;return Qe(S,Z,"","",function(G){return N.call(B,G,ue++)}),Z}function re(S){if(S._status===-1){var N=S._result;N=N(),N.then(function(B){(S._status===0||S._status===-1)&&(S._status=1,S._result=B)},function(B){(S._status===0||S._status===-1)&&(S._status=2,S._result=B)}),S._status===-1&&(S._status=0,S._result=N)}if(S._status===1)return S._result.default;throw S._result}var me={current:null},O={transition:null},V={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:O,ReactCurrentOwner:se};function H(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:Te,forEach:function(S,N,B){Te(S,function(){N.apply(this,arguments)},B)},count:function(S){var N=0;return Te(S,function(){N++}),N},toArray:function(S){return Te(S,function(N){return N})||[]},only:function(S){if(!K(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},fe.Component=z,fe.Fragment=l,fe.Profiler=p,fe.PureComponent=le,fe.StrictMode=u,fe.Suspense=k,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,fe.act=H,fe.cloneElement=function(S,N,B){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var Z=R({},S.props),ue=S.key,G=S.ref,ge=S._owner;if(N!=null){if(N.ref!==void 0&&(G=N.ref,ge=se.current),N.key!==void 0&&(ue=""+N.key),S.type&&S.type.defaultProps)var pe=S.type.defaultProps;for(xe in N)ne.call(N,xe)&&!ye.hasOwnProperty(xe)&&(Z[xe]=N[xe]===void 0&&pe!==void 0?pe[xe]:N[xe])}var xe=arguments.length-2;if(xe===1)Z.children=B;else if(1<xe){pe=Array(xe);for(var Fe=0;Fe<xe;Fe++)pe[Fe]=arguments[Fe+2];Z.children=pe}return{$$typeof:o,type:S.type,key:ue,ref:G,props:Z,_owner:ge}},fe.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:f,_context:S},S.Consumer=S},fe.createElement=Ce,fe.createFactory=function(S){var N=Ce.bind(null,S);return N.type=S,N},fe.createRef=function(){return{current:null}},fe.forwardRef=function(S){return{$$typeof:g,render:S}},fe.isValidElement=K,fe.lazy=function(S){return{$$typeof:w,_payload:{_status:-1,_result:S},_init:re}},fe.memo=function(S,N){return{$$typeof:x,type:S,compare:N===void 0?null:N}},fe.startTransition=function(S){var N=O.transition;O.transition={};try{S()}finally{O.transition=N}},fe.unstable_act=H,fe.useCallback=function(S,N){return me.current.useCallback(S,N)},fe.useContext=function(S){return me.current.useContext(S)},fe.useDebugValue=function(){},fe.useDeferredValue=function(S){return me.current.useDeferredValue(S)},fe.useEffect=function(S,N){return me.current.useEffect(S,N)},fe.useId=function(){return me.current.useId()},fe.useImperativeHandle=function(S,N,B){return me.current.useImperativeHandle(S,N,B)},fe.useInsertionEffect=function(S,N){return me.current.useInsertionEffect(S,N)},fe.useLayoutEffect=function(S,N){return me.current.useLayoutEffect(S,N)},fe.useMemo=function(S,N){return me.current.useMemo(S,N)},fe.useReducer=function(S,N,B){return me.current.useReducer(S,N,B)},fe.useRef=function(S){return me.current.useRef(S)},fe.useState=function(S){return me.current.useState(S)},fe.useSyncExternalStore=function(S,N,B){return me.current.useSyncExternalStore(S,N,B)},fe.useTransition=function(){return me.current.useTransition()},fe.version="18.3.1",fe}var yd;function El(){return yd||(yd=1,sl.exports=Om()),sl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function Mm(){if(xd)return Po;xd=1;var o=El(),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(g,k,x){var w,h={},v=null,T=null;x!==void 0&&(v=""+x),k.key!==void 0&&(v=""+k.key),k.ref!==void 0&&(T=k.ref);for(w in k)u.call(k,w)&&!f.hasOwnProperty(w)&&(h[w]=k[w]);if(g&&g.defaultProps)for(w in k=g.defaultProps,k)h[w]===void 0&&(h[w]=k[w]);return{$$typeof:s,type:g,key:v,ref:T,props:h,_owner:p.current}}return Po.Fragment=l,Po.jsx=m,Po.jsxs=m,Po}var vd;function $m(){return vd||(vd=1,il.exports=Mm()),il.exports}var n=$m(),_=El();const M=rp(_);var as={},al={exports:{}},St={},ll={exports:{}},cl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function Hm(){return wd||(wd=1,(function(o){function s(O,V){var H=O.length;O.push(V);e:for(;0<H;){var S=H-1>>>1,N=O[S];if(0<p(N,V))O[S]=V,O[H]=N,H=S;else break e}}function l(O){return O.length===0?null:O[0]}function u(O){if(O.length===0)return null;var V=O[0],H=O.pop();if(H!==V){O[0]=H;e:for(var S=0,N=O.length,B=N>>>1;S<B;){var Z=2*(S+1)-1,ue=O[Z],G=Z+1,ge=O[G];if(0>p(ue,H))G<N&&0>p(ge,ue)?(O[S]=ge,O[G]=H,S=G):(O[S]=ue,O[Z]=H,S=Z);else if(G<N&&0>p(ge,H))O[S]=ge,O[G]=H,S=G;else break e}}return V}function p(O,V){var H=O.sortIndex-V.sortIndex;return H!==0?H:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var m=Date,g=m.now();o.unstable_now=function(){return m.now()-g}}var k=[],x=[],w=1,h=null,v=3,T=!1,R=!1,P=!1,z=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(O){for(var V=l(x);V!==null;){if(V.callback===null)u(x);else if(V.startTime<=O)u(x),V.sortIndex=V.expirationTime,s(k,V);else break;V=l(x)}}function J(O){if(P=!1,ae(O),!R)if(l(k)!==null)R=!0,re(ne);else{var V=l(x);V!==null&&me(J,V.startTime-O)}}function ne(O,V){R=!1,P&&(P=!1,ie(Ce),Ce=-1),T=!0;var H=v;try{for(ae(V),h=l(k);h!==null&&(!(h.expirationTime>V)||O&&!$());){var S=h.callback;if(typeof S=="function"){h.callback=null,v=h.priorityLevel;var N=S(h.expirationTime<=V);V=o.unstable_now(),typeof N=="function"?h.callback=N:h===l(k)&&u(k),ae(V)}else u(k);h=l(k)}if(h!==null)var B=!0;else{var Z=l(x);Z!==null&&me(J,Z.startTime-V),B=!1}return B}finally{h=null,v=H,T=!1}}var se=!1,ye=null,Ce=-1,Q=5,K=-1;function $(){return!(o.unstable_now()-K<Q)}function ce(){if(ye!==null){var O=o.unstable_now();K=O;var V=!0;try{V=ye(!0,O)}finally{V?he():(se=!1,ye=null)}}else se=!1}var he;if(typeof le=="function")he=function(){le(ce)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Te=Qe.port2;Qe.port1.onmessage=ce,he=function(){Te.postMessage(null)}}else he=function(){z(ce,0)};function re(O){ye=O,se||(se=!0,he())}function me(O,V){Ce=z(function(){O(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_continueExecution=function(){R||T||(R=!0,re(ne))},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return l(k)},o.unstable_next=function(O){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var H=v;v=V;try{return O()}finally{v=H}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var H=v;v=O;try{return V()}finally{v=H}},o.unstable_scheduleCallback=function(O,V,H){var S=o.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?S+H:S):H=S,O){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=H+N,O={id:w++,callback:V,priorityLevel:O,startTime:H,expirationTime:N,sortIndex:-1},H>S?(O.sortIndex=H,s(x,O),l(k)===null&&O===l(x)&&(P?(ie(Ce),Ce=-1):P=!0,me(J,H-S))):(O.sortIndex=N,s(k,O),R||T||(R=!0,re(ne))),O},o.unstable_shouldYield=$,o.unstable_wrapCallback=function(O){var V=v;return function(){var H=v;v=V;try{return O.apply(this,arguments)}finally{v=H}}}})(cl)),cl}var bd;function Um(){return bd||(bd=1,ll.exports=Hm()),ll.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Bm(){if(kd)return St;kd=1;var o=El(),s=Um();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,p={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)u.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},h={};function v(e){return k.call(h,e)?!0:k.call(w,e)?!1:x.test(e)?h[e]=!0:(w[e]=!0,!1)}function T(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R(e,t,r,i){if(t===null||typeof t>"u"||T(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function P(e,t,r,i,a,c,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=d}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new P(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];z[t]=new P(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new P(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new P(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new P(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new P(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new P(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new P(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new P(e,5,!1,e.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ie,le);z[t]=new P(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ie,le);z[t]=new P(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ie,le);z[t]=new P(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new P(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new P(e,1,!1,e.toLowerCase(),null,!0,!0)});function ae(e,t,r,i){var a=z.hasOwnProperty(t)?z[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(R(t,r,a,i)&&(r=null),i||a===null?v(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,i=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var J=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),se=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),Ce=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),$=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),Te=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),O=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,S;function N(e){if(S===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var B=!1;function Z(e,t){if(!e||B)return"";B=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(I){var i=I}Reflect.construct(e,[],t)}else{try{t.call()}catch(I){i=I}e.call(t.prototype)}else{try{throw Error()}catch(I){i=I}e()}}catch(I){if(I&&i&&typeof I.stack=="string"){for(var a=I.stack.split(`
`),c=i.stack.split(`
`),d=a.length-1,y=c.length-1;1<=d&&0<=y&&a[d]!==c[y];)y--;for(;1<=d&&0<=y;d--,y--)if(a[d]!==c[y]){if(d!==1||y!==1)do if(d--,y--,0>y||a[d]!==c[y]){var b=`
`+a[d].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=d&&0<=y);break}}}finally{B=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?N(e):""}function ue(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function G(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case se:return"Portal";case Q:return"Profiler";case Ce:return"StrictMode";case he:return"Suspense";case Qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $:return(e.displayName||"Context")+".Consumer";case K:return(e._context.displayName||"Context")+".Provider";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Te:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(t);case 8:return t===Ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fe(e){var t=xe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){i=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=Fe(e))}function br(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=xe(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Ct(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jt(e,t){var r=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Xo(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=pe(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vn(e,t){t=t.checked,t!=null&&ae(e,"checked",t,!1)}function ar(e,t){Vn(e,t);var r=pe(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tt(e,t.type,r):t.hasOwnProperty("defaultValue")&&Tt(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qn(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Tt(e,t,r){(t!=="number"||Ct(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Gr=Array.isArray;function kr(e,t,r,i){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&i&&(e[r].defaultSelected=!0)}else{for(r=""+pe(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function it(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lr(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(Gr(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:pe(r)}}function Go(e,t){var r=pe(t.value),i=pe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Jo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,yn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jr=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){jr.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function Zo(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function ei(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,a=Zo(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,a):e[r]=a}}var ti=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xn(e,t){if(t){if(ti[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Qn(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var en=null;function zt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kn=null,Cr=null,cr=null;function Xn(e){if(e=yo(e)){if(typeof Kn!="function")throw Error(l(280));var t=e.stateNode;t&&(t=ki(t),Kn(e.stateNode,e.type,t))}}function de(e){Cr?cr?cr.push(e):cr=[e]:Cr=e}function $e(){if(Cr){var e=Cr,t=cr;if(cr=Cr=null,Xn(e),t)for(e=0;e<t.length;e++)Xn(t[e])}}function Ke(e,t){return e(t)}function ct(){}var Tr=!1;function Ve(e,t,r){if(Tr)return e(t,r);Tr=!0;try{return Ke(e,t,r)}finally{Tr=!1,(Cr!==null||cr!==null)&&(ct(),$e())}}function Ze(e,t){var r=e.stateNode;if(r===null)return null;var i=ki(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Er=!1;if(g)try{var st={};Object.defineProperty(st,"passive",{get:function(){Er=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{Er=!1}function Et(e,t,r,i,a,c,d,y,b){var I=Array.prototype.slice.call(arguments,3);try{t.apply(r,I)}catch(D){this.onError(D)}}var Ir=!1,At=null,Gn=!1,js=null,Wp={onError:function(e){Ir=!0,At=e}};function Vp(e,t,r,i,a,c,d,y,b){Ir=!1,At=null,Et.apply(Wp,arguments)}function qp(e,t,r,i,a,c,d,y,b){if(Vp.apply(this,arguments),Ir){if(Ir){var I=At;Ir=!1,At=null}else throw Error(l(198));Gn||(Gn=!0,js=I)}}function tn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ml(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $l(e){if(tn(e)!==e)throw Error(l(188))}function Yp(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,i=t;;){var a=r.return;if(a===null)break;var c=a.alternate;if(c===null){if(i=a.return,i!==null){r=i;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===r)return $l(a),e;if(c===i)return $l(a),t;c=c.sibling}throw Error(l(188))}if(r.return!==i.return)r=a,i=c;else{for(var d=!1,y=a.child;y;){if(y===r){d=!0,r=a,i=c;break}if(y===i){d=!0,i=a,r=c;break}y=y.sibling}if(!d){for(y=c.child;y;){if(y===r){d=!0,r=c,i=a;break}if(y===i){d=!0,i=c,r=a;break}y=y.sibling}if(!d)throw Error(l(189))}}if(r.alternate!==i)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function Hl(e){return e=Yp(e),e!==null?Ul(e):null}function Ul(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ul(e);if(t!==null)return t;e=e.sibling}return null}var Bl=s.unstable_scheduleCallback,Wl=s.unstable_cancelCallback,Qp=s.unstable_shouldYield,Kp=s.unstable_requestPaint,He=s.unstable_now,Xp=s.unstable_getCurrentPriorityLevel,Cs=s.unstable_ImmediatePriority,Vl=s.unstable_UserBlockingPriority,ri=s.unstable_NormalPriority,Gp=s.unstable_LowPriority,ql=s.unstable_IdlePriority,ni=null,Zt=null;function Jp(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:tf,Zp=Math.log,ef=Math.LN2;function tf(e){return e>>>=0,e===0?32:31-(Zp(e)/ef|0)|0}var oi=64,ii=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,c=e.pingedLanes,d=r&268435455;if(d!==0){var y=d&~a;y!==0?i=Jn(y):(c&=d,c!==0&&(i=Jn(c)))}else d=r&~a,d!==0?i=Jn(d):c!==0&&(i=Jn(c));if(i===0)return 0;if(t!==0&&t!==i&&(t&a)===0&&(a=i&-i,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Wt(t),a=1<<r,i|=e[r],t&=~a;return i}function rf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nf(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var d=31-Wt(c),y=1<<d,b=a[d];b===-1?((y&r)===0||(y&i)!==0)&&(a[d]=rf(y,t)):b<=t&&(e.expiredLanes|=y),c&=~y}}function Ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yl(){var e=oi;return oi<<=1,(oi&4194240)===0&&(oi=64),e}function Es(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Zn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=r}function of(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Wt(r),c=1<<a;t[a]=0,i[a]=-1,e[a]=-1,r&=~c}}function Is(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Wt(r),a=1<<i;a&t|e[i]&t&&(e[i]|=t),r&=~a}}var je=0;function Ql(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Kl,Rs,Xl,Gl,Jl,_s=!1,ai=[],Rr=null,_r=null,Nr=null,eo=new Map,to=new Map,Pr=[],sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zl(e,t){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(t.pointerId)}}function ro(e,t,r,i,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:c,targetContainers:[a]},t!==null&&(t=yo(t),t!==null&&Rs(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function af(e,t,r,i,a){switch(t){case"focusin":return Rr=ro(Rr,e,t,r,i,a),!0;case"dragenter":return _r=ro(_r,e,t,r,i,a),!0;case"mouseover":return Nr=ro(Nr,e,t,r,i,a),!0;case"pointerover":var c=a.pointerId;return eo.set(c,ro(eo.get(c)||null,e,t,r,i,a)),!0;case"gotpointercapture":return c=a.pointerId,to.set(c,ro(to.get(c)||null,e,t,r,i,a)),!0}return!1}function ec(e){var t=rn(e.target);if(t!==null){var r=tn(t);if(r!==null){if(t=r.tag,t===13){if(t=Ml(r),t!==null){e.blockedOn=t,Jl(e.priority,function(){Xl(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ps(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);en=i,r.target.dispatchEvent(i),en=null}else return t=yo(r),t!==null&&Rs(t),e.blockedOn=r,!1;t.shift()}return!0}function tc(e,t,r){li(e)&&r.delete(t)}function lf(){_s=!1,Rr!==null&&li(Rr)&&(Rr=null),_r!==null&&li(_r)&&(_r=null),Nr!==null&&li(Nr)&&(Nr=null),eo.forEach(tc),to.forEach(tc)}function no(e,t){e.blockedOn===t&&(e.blockedOn=null,_s||(_s=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,lf)))}function oo(e){function t(a){return no(a,e)}if(0<ai.length){no(ai[0],e);for(var r=1;r<ai.length;r++){var i=ai[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Rr!==null&&no(Rr,e),_r!==null&&no(_r,e),Nr!==null&&no(Nr,e),eo.forEach(t),to.forEach(t),r=0;r<Pr.length;r++)i=Pr[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Pr.length&&(r=Pr[0],r.blockedOn===null);)ec(r),r.blockedOn===null&&Pr.shift()}var vn=J.ReactCurrentBatchConfig,ci=!0;function cf(e,t,r,i){var a=je,c=vn.transition;vn.transition=null;try{je=1,Ns(e,t,r,i)}finally{je=a,vn.transition=c}}function uf(e,t,r,i){var a=je,c=vn.transition;vn.transition=null;try{je=4,Ns(e,t,r,i)}finally{je=a,vn.transition=c}}function Ns(e,t,r,i){if(ci){var a=Ps(e,t,r,i);if(a===null)Ks(e,t,i,ui,r),Zl(e,i);else if(af(a,e,t,r,i))i.stopPropagation();else if(Zl(e,i),t&4&&-1<sf.indexOf(e)){for(;a!==null;){var c=yo(a);if(c!==null&&Kl(c),c=Ps(e,t,r,i),c===null&&Ks(e,t,i,ui,r),c===a)break;a=c}a!==null&&i.stopPropagation()}else Ks(e,t,i,null,r)}}var ui=null;function Ps(e,t,r,i){if(ui=null,e=zt(i),e=rn(e),e!==null)if(t=tn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ml(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ui=e,null}function rc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xp()){case Cs:return 1;case Vl:return 4;case ri:case Gp:return 16;case ql:return 536870912;default:return 16}default:return 16}}var zr=null,zs=null,di=null;function nc(){if(di)return di;var e,t=zs,r=t.length,i,a="value"in zr?zr.value:zr.textContent,c=a.length;for(e=0;e<r&&t[e]===a[e];e++);var d=r-e;for(i=1;i<=d&&t[r-i]===a[c-i];i++);return di=a.slice(e,1<i?1-i:void 0)}function pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function oc(){return!1}function It(e){function t(r,i,a,c,d){this._reactName=r,this._targetInst=a,this.type=i,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?fi:oc,this.isPropagationStopped=oc,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=It(wn),io=H({},wn,{view:0,detail:0}),df=It(io),Ds,Ls,so,mi=H({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Ds=e.screenX-so.screenX,Ls=e.screenY-so.screenY):Ls=Ds=0,so=e),Ds)},movementY:function(e){return"movementY"in e?e.movementY:Ls}}),ic=It(mi),pf=H({},mi,{dataTransfer:0}),ff=It(pf),mf=H({},io,{relatedTarget:0}),Fs=It(mf),hf=H({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),gf=It(hf),yf=H({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xf=It(yf),vf=H({},wn,{data:0}),sc=It(vf),wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kf[e])?!!t[e]:!1}function Os(){return Sf}var jf=H({},io,{key:function(e){if(e.key){var t=wf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cf=It(jf),Tf=H({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=It(Tf),Ef=H({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),If=It(Ef),Rf=H({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=It(Rf),Nf=H({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pf=It(Nf),zf=[9,13,27,32],Ms=g&&"CompositionEvent"in window,ao=null;g&&"documentMode"in document&&(ao=document.documentMode);var Af=g&&"TextEvent"in window&&!ao,lc=g&&(!Ms||ao&&8<ao&&11>=ao),cc=" ",uc=!1;function dc(e,t){switch(e){case"keyup":return zf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function Df(e,t){switch(e){case"compositionend":return pc(t);case"keypress":return t.which!==32?null:(uc=!0,cc);case"textInput":return e=t.data,e===cc&&uc?null:e;default:return null}}function Lf(e,t){if(bn)return e==="compositionend"||!Ms&&dc(e,t)?(e=nc(),di=zs=zr=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lc&&t.locale!=="ko"?null:t.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ff[e.type]:t==="textarea"}function mc(e,t,r,i){de(i),t=vi(t,"onChange"),0<t.length&&(r=new As("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var lo=null,co=null;function Of(e){Pc(e,0)}function hi(e){var t=Tn(e);if(br(t))return e}function Mf(e,t){if(e==="change")return t}var hc=!1;if(g){var $s;if(g){var Hs="oninput"in document;if(!Hs){var gc=document.createElement("div");gc.setAttribute("oninput","return;"),Hs=typeof gc.oninput=="function"}$s=Hs}else $s=!1;hc=$s&&(!document.documentMode||9<document.documentMode)}function yc(){lo&&(lo.detachEvent("onpropertychange",xc),co=lo=null)}function xc(e){if(e.propertyName==="value"&&hi(co)){var t=[];mc(t,co,e,zt(e)),Ve(Of,t)}}function $f(e,t,r){e==="focusin"?(yc(),lo=t,co=r,lo.attachEvent("onpropertychange",xc)):e==="focusout"&&yc()}function Hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(co)}function Uf(e,t){if(e==="click")return hi(t)}function Bf(e,t){if(e==="input"||e==="change")return hi(t)}function Wf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:Wf;function uo(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var a=r[i];if(!k.call(t,a)||!Vt(e[a],t[a]))return!1}return!0}function vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wc(e,t){var r=vc(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=vc(r)}}function bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kc(){for(var e=window,t=Ct();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ct(e.document)}return t}function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vf(e){var t=kc(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&bc(r.ownerDocument.documentElement,r)){if(i!==null&&Us(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,c=Math.min(i.start,a);i=i.end===void 0?c:Math.min(i.end,a),!e.extend&&c>i&&(a=i,i=c,c=a),a=wc(r,c);var d=wc(r,i);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),c>i?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qf=g&&"documentMode"in document&&11>=document.documentMode,kn=null,Bs=null,po=null,Ws=!1;function Sc(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ws||kn==null||kn!==Ct(i)||(i=kn,"selectionStart"in i&&Us(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&uo(po,i)||(po=i,i=vi(Bs,"onSelect"),0<i.length&&(t=new As("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=kn)))}function gi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Sn={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},Vs={},jc={};g&&(jc=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function yi(e){if(Vs[e])return Vs[e];if(!Sn[e])return e;var t=Sn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in jc)return Vs[e]=t[r];return e}var Cc=yi("animationend"),Tc=yi("animationiteration"),Ec=yi("animationstart"),Ic=yi("transitionend"),Rc=new Map,_c="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){Rc.set(e,t),f(t,[e])}for(var qs=0;qs<_c.length;qs++){var Ys=_c[qs],Yf=Ys.toLowerCase(),Qf=Ys[0].toUpperCase()+Ys.slice(1);Ar(Yf,"on"+Qf)}Ar(Cc,"onAnimationEnd"),Ar(Tc,"onAnimationIteration"),Ar(Ec,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Ic,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Nc(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,qp(i,t,void 0,e),e.currentTarget=null}function Pc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],a=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var d=i.length-1;0<=d;d--){var y=i[d],b=y.instance,I=y.currentTarget;if(y=y.listener,b!==c&&a.isPropagationStopped())break e;Nc(a,y,I),c=b}else for(d=0;d<i.length;d++){if(y=i[d],b=y.instance,I=y.currentTarget,y=y.listener,b!==c&&a.isPropagationStopped())break e;Nc(a,y,I),c=b}}}if(Gn)throw e=js,Gn=!1,js=null,e}function Re(e,t){var r=t[ta];r===void 0&&(r=t[ta]=new Set);var i=e+"__bubble";r.has(i)||(zc(t,e,2,!1),r.add(i))}function Qs(e,t,r){var i=0;t&&(i|=4),zc(r,e,i,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[xi]){e[xi]=!0,u.forEach(function(r){r!=="selectionchange"&&(Kf.has(r)||Qs(r,!1,e),Qs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,Qs("selectionchange",!1,t))}}function zc(e,t,r,i){switch(rc(t)){case 1:var a=cf;break;case 4:a=uf;break;default:a=Ns}r=a.bind(null,t,r,e),a=void 0,!Er||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ks(e,t,r,i,a){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var y=i.stateNode.containerInfo;if(y===a||y.nodeType===8&&y.parentNode===a)break;if(d===4)for(d=i.return;d!==null;){var b=d.tag;if((b===3||b===4)&&(b=d.stateNode.containerInfo,b===a||b.nodeType===8&&b.parentNode===a))return;d=d.return}for(;y!==null;){if(d=rn(y),d===null)return;if(b=d.tag,b===5||b===6){i=c=d;continue e}y=y.parentNode}}i=i.return}Ve(function(){var I=c,D=zt(r),L=[];e:{var A=Rc.get(e);if(A!==void 0){var U=As,q=e;switch(e){case"keypress":if(pi(r)===0)break e;case"keydown":case"keyup":U=Cf;break;case"focusin":q="focus",U=Fs;break;case"focusout":q="blur",U=Fs;break;case"beforeblur":case"afterblur":U=Fs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=If;break;case Cc:case Tc:case Ec:U=gf;break;case Ic:U=_f;break;case"scroll":U=df;break;case"wheel":U=Pf;break;case"copy":case"cut":case"paste":U=xf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=ac}var Y=(t&4)!==0,Ue=!Y&&e==="scroll",C=Y?A!==null?A+"Capture":null:A;Y=[];for(var j=I,E;j!==null;){E=j;var F=E.stateNode;if(E.tag===5&&F!==null&&(E=F,C!==null&&(F=Ze(j,C),F!=null&&Y.push(ho(j,F,E)))),Ue)break;j=j.return}0<Y.length&&(A=new U(A,q,null,r,D),L.push({event:A,listeners:Y}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",A&&r!==en&&(q=r.relatedTarget||r.fromElement)&&(rn(q)||q[ur]))break e;if((U||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,U?(q=r.relatedTarget||r.toElement,U=I,q=q?rn(q):null,q!==null&&(Ue=tn(q),q!==Ue||q.tag!==5&&q.tag!==6)&&(q=null)):(U=null,q=I),U!==q)){if(Y=ic,F="onMouseLeave",C="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Y=ac,F="onPointerLeave",C="onPointerEnter",j="pointer"),Ue=U==null?A:Tn(U),E=q==null?A:Tn(q),A=new Y(F,j+"leave",U,r,D),A.target=Ue,A.relatedTarget=E,F=null,rn(D)===I&&(Y=new Y(C,j+"enter",q,r,D),Y.target=E,Y.relatedTarget=Ue,F=Y),Ue=F,U&&q)t:{for(Y=U,C=q,j=0,E=Y;E;E=jn(E))j++;for(E=0,F=C;F;F=jn(F))E++;for(;0<j-E;)Y=jn(Y),j--;for(;0<E-j;)C=jn(C),E--;for(;j--;){if(Y===C||C!==null&&Y===C.alternate)break t;Y=jn(Y),C=jn(C)}Y=null}else Y=null;U!==null&&Ac(L,A,U,Y,!1),q!==null&&Ue!==null&&Ac(L,Ue,q,Y,!0)}}e:{if(A=I?Tn(I):window,U=A.nodeName&&A.nodeName.toLowerCase(),U==="select"||U==="input"&&A.type==="file")var X=Mf;else if(fc(A))if(hc)X=Bf;else{X=Hf;var ee=$f}else(U=A.nodeName)&&U.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(X=Uf);if(X&&(X=X(e,I))){mc(L,X,r,D);break e}ee&&ee(e,A,I),e==="focusout"&&(ee=A._wrapperState)&&ee.controlled&&A.type==="number"&&Tt(A,"number",A.value)}switch(ee=I?Tn(I):window,e){case"focusin":(fc(ee)||ee.contentEditable==="true")&&(kn=ee,Bs=I,po=null);break;case"focusout":po=Bs=kn=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,Sc(L,r,D);break;case"selectionchange":if(qf)break;case"keydown":case"keyup":Sc(L,r,D)}var te;if(Ms)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else bn?dc(e,r)&&(oe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(oe="onCompositionStart");oe&&(lc&&r.locale!=="ko"&&(bn||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&bn&&(te=nc()):(zr=D,zs="value"in zr?zr.value:zr.textContent,bn=!0)),ee=vi(I,oe),0<ee.length&&(oe=new sc(oe,e,null,r,D),L.push({event:oe,listeners:ee}),te?oe.data=te:(te=pc(r),te!==null&&(oe.data=te)))),(te=Af?Df(e,r):Lf(e,r))&&(I=vi(I,"onBeforeInput"),0<I.length&&(D=new sc("onBeforeInput","beforeinput",null,r,D),L.push({event:D,listeners:I}),D.data=te))}Pc(L,t)})}function ho(e,t,r){return{instance:e,listener:t,currentTarget:r}}function vi(e,t){for(var r=t+"Capture",i=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=Ze(e,r),c!=null&&i.unshift(ho(e,c,a)),c=Ze(e,t),c!=null&&i.push(ho(e,c,a))),e=e.return}return i}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ac(e,t,r,i,a){for(var c=t._reactName,d=[];r!==null&&r!==i;){var y=r,b=y.alternate,I=y.stateNode;if(b!==null&&b===i)break;y.tag===5&&I!==null&&(y=I,a?(b=Ze(r,c),b!=null&&d.unshift(ho(r,b,y))):a||(b=Ze(r,c),b!=null&&d.push(ho(r,b,y)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var Xf=/\r\n?/g,Gf=/\u0000|\uFFFD/g;function Dc(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(Gf,"")}function wi(e,t,r){if(t=Dc(t),Dc(e)!==t&&r)throw Error(l(425))}function bi(){}var Xs=null,Gs=null;function Js(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zs=typeof setTimeout=="function"?setTimeout:void 0,Jf=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,Zf=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(e){return Lc.resolve(null).then(e).catch(em)}:Zs;function em(e){setTimeout(function(){throw e})}function ea(e,t){var r=t,i=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(i===0){e.removeChild(a),oo(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=a}while(r);oo(t)}function Dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),er="__reactFiber$"+Cn,go="__reactProps$"+Cn,ur="__reactContainer$"+Cn,ta="__reactEvents$"+Cn,tm="__reactListeners$"+Cn,rm="__reactHandles$"+Cn;function rn(e){var t=e[er];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ur]||r[er]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Fc(e);e!==null;){if(r=e[er])return r;e=Fc(e)}return t}e=r,r=e.parentNode}return null}function yo(e){return e=e[er]||e[ur],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function ki(e){return e[go]||null}var ra=[],En=-1;function Lr(e){return{current:e}}function _e(e){0>En||(e.current=ra[En],ra[En]=null,En--)}function Ie(e,t){En++,ra[En]=e.current,e.current=t}var Fr={},ut=Lr(Fr),xt=Lr(!1),nn=Fr;function In(e,t){var r=e.type.contextTypes;if(!r)return Fr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in r)a[c]=t[c];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function vt(e){return e=e.childContextTypes,e!=null}function Si(){_e(xt),_e(ut)}function Oc(e,t,r){if(ut.current!==Fr)throw Error(l(168));Ie(ut,t),Ie(xt,r)}function Mc(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(l(108,ge(e)||"Unknown",a));return H({},r,i)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fr,nn=ut.current,Ie(ut,e),Ie(xt,xt.current),!0}function $c(e,t,r){var i=e.stateNode;if(!i)throw Error(l(169));r?(e=Mc(e,t,nn),i.__reactInternalMemoizedMergedChildContext=e,_e(xt),_e(ut),Ie(ut,e)):_e(xt),Ie(xt,r)}var dr=null,Ci=!1,na=!1;function Hc(e){dr===null?dr=[e]:dr.push(e)}function nm(e){Ci=!0,Hc(e)}function Or(){if(!na&&dr!==null){na=!0;var e=0,t=je;try{var r=dr;for(je=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}dr=null,Ci=!1}catch(a){throw dr!==null&&(dr=dr.slice(e+1)),Bl(Cs,Or),a}finally{je=t,na=!1}}return null}var Rn=[],_n=0,Ti=null,Ei=0,Dt=[],Lt=0,on=null,pr=1,fr="";function sn(e,t){Rn[_n++]=Ei,Rn[_n++]=Ti,Ti=e,Ei=t}function Uc(e,t,r){Dt[Lt++]=pr,Dt[Lt++]=fr,Dt[Lt++]=on,on=e;var i=pr;e=fr;var a=32-Wt(i)-1;i&=~(1<<a),r+=1;var c=32-Wt(t)+a;if(30<c){var d=a-a%5;c=(i&(1<<d)-1).toString(32),i>>=d,a-=d,pr=1<<32-Wt(t)+a|r<<a|i,fr=c+e}else pr=1<<c|r<<a|i,fr=e}function oa(e){e.return!==null&&(sn(e,1),Uc(e,1,0))}function ia(e){for(;e===Ti;)Ti=Rn[--_n],Rn[_n]=null,Ei=Rn[--_n],Rn[_n]=null;for(;e===on;)on=Dt[--Lt],Dt[Lt]=null,fr=Dt[--Lt],Dt[Lt]=null,pr=Dt[--Lt],Dt[Lt]=null}var Rt=null,_t=null,Ne=!1,qt=null;function Bc(e,t){var r=$t(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Wc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,_t=Dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=on!==null?{id:pr,overflow:fr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=$t(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Rt=e,_t=null,!0):!1;default:return!1}}function sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(Ne){var t=_t;if(t){var r=t;if(!Wc(e,t)){if(sa(e))throw Error(l(418));t=Dr(r.nextSibling);var i=Rt;t&&Wc(e,t)?Bc(i,r):(e.flags=e.flags&-4097|2,Ne=!1,Rt=e)}}else{if(sa(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ne=!1,Rt=e}}}function Vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function Ii(e){if(e!==Rt)return!1;if(!Ne)return Vc(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Js(e.type,e.memoizedProps)),t&&(t=_t)){if(sa(e))throw qc(),Error(l(418));for(;t;)Bc(e,t),t=Dr(t.nextSibling)}if(Vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){_t=Dr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=Rt?Dr(e.stateNode.nextSibling):null;return!0}function qc(){for(var e=_t;e;)e=Dr(e.nextSibling)}function Nn(){_t=Rt=null,Ne=!1}function la(e){qt===null?qt=[e]:qt.push(e)}var om=J.ReactCurrentBatchConfig;function xo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var i=r.stateNode}if(!i)throw Error(l(147,e));var a=i,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(d){var y=a.refs;d===null?delete y[c]:y[c]=d},t._stringRef=c,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function Ri(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yc(e){var t=e._init;return t(e._payload)}function Qc(e){function t(C,j){if(e){var E=C.deletions;E===null?(C.deletions=[j],C.flags|=16):E.push(j)}}function r(C,j){if(!e)return null;for(;j!==null;)t(C,j),j=j.sibling;return null}function i(C,j){for(C=new Map;j!==null;)j.key!==null?C.set(j.key,j):C.set(j.index,j),j=j.sibling;return C}function a(C,j){return C=qr(C,j),C.index=0,C.sibling=null,C}function c(C,j,E){return C.index=E,e?(E=C.alternate,E!==null?(E=E.index,E<j?(C.flags|=2,j):E):(C.flags|=2,j)):(C.flags|=1048576,j)}function d(C){return e&&C.alternate===null&&(C.flags|=2),C}function y(C,j,E,F){return j===null||j.tag!==6?(j=Za(E,C.mode,F),j.return=C,j):(j=a(j,E),j.return=C,j)}function b(C,j,E,F){var X=E.type;return X===ye?D(C,j,E.props.children,F,E.key):j!==null&&(j.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===re&&Yc(X)===j.type)?(F=a(j,E.props),F.ref=xo(C,j,E),F.return=C,F):(F=Zi(E.type,E.key,E.props,null,C.mode,F),F.ref=xo(C,j,E),F.return=C,F)}function I(C,j,E,F){return j===null||j.tag!==4||j.stateNode.containerInfo!==E.containerInfo||j.stateNode.implementation!==E.implementation?(j=el(E,C.mode,F),j.return=C,j):(j=a(j,E.children||[]),j.return=C,j)}function D(C,j,E,F,X){return j===null||j.tag!==7?(j=mn(E,C.mode,F,X),j.return=C,j):(j=a(j,E),j.return=C,j)}function L(C,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Za(""+j,C.mode,E),j.return=C,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ne:return E=Zi(j.type,j.key,j.props,null,C.mode,E),E.ref=xo(C,null,j),E.return=C,E;case se:return j=el(j,C.mode,E),j.return=C,j;case re:var F=j._init;return L(C,F(j._payload),E)}if(Gr(j)||V(j))return j=mn(j,C.mode,E,null),j.return=C,j;Ri(C,j)}return null}function A(C,j,E,F){var X=j!==null?j.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return X!==null?null:y(C,j,""+E,F);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ne:return E.key===X?b(C,j,E,F):null;case se:return E.key===X?I(C,j,E,F):null;case re:return X=E._init,A(C,j,X(E._payload),F)}if(Gr(E)||V(E))return X!==null?null:D(C,j,E,F,null);Ri(C,E)}return null}function U(C,j,E,F,X){if(typeof F=="string"&&F!==""||typeof F=="number")return C=C.get(E)||null,y(j,C,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ne:return C=C.get(F.key===null?E:F.key)||null,b(j,C,F,X);case se:return C=C.get(F.key===null?E:F.key)||null,I(j,C,F,X);case re:var ee=F._init;return U(C,j,E,ee(F._payload),X)}if(Gr(F)||V(F))return C=C.get(E)||null,D(j,C,F,X,null);Ri(j,F)}return null}function q(C,j,E,F){for(var X=null,ee=null,te=j,oe=j=0,rt=null;te!==null&&oe<E.length;oe++){te.index>oe?(rt=te,te=null):rt=te.sibling;var we=A(C,te,E[oe],F);if(we===null){te===null&&(te=rt);break}e&&te&&we.alternate===null&&t(C,te),j=c(we,j,oe),ee===null?X=we:ee.sibling=we,ee=we,te=rt}if(oe===E.length)return r(C,te),Ne&&sn(C,oe),X;if(te===null){for(;oe<E.length;oe++)te=L(C,E[oe],F),te!==null&&(j=c(te,j,oe),ee===null?X=te:ee.sibling=te,ee=te);return Ne&&sn(C,oe),X}for(te=i(C,te);oe<E.length;oe++)rt=U(te,C,oe,E[oe],F),rt!==null&&(e&&rt.alternate!==null&&te.delete(rt.key===null?oe:rt.key),j=c(rt,j,oe),ee===null?X=rt:ee.sibling=rt,ee=rt);return e&&te.forEach(function(Yr){return t(C,Yr)}),Ne&&sn(C,oe),X}function Y(C,j,E,F){var X=V(E);if(typeof X!="function")throw Error(l(150));if(E=X.call(E),E==null)throw Error(l(151));for(var ee=X=null,te=j,oe=j=0,rt=null,we=E.next();te!==null&&!we.done;oe++,we=E.next()){te.index>oe?(rt=te,te=null):rt=te.sibling;var Yr=A(C,te,we.value,F);if(Yr===null){te===null&&(te=rt);break}e&&te&&Yr.alternate===null&&t(C,te),j=c(Yr,j,oe),ee===null?X=Yr:ee.sibling=Yr,ee=Yr,te=rt}if(we.done)return r(C,te),Ne&&sn(C,oe),X;if(te===null){for(;!we.done;oe++,we=E.next())we=L(C,we.value,F),we!==null&&(j=c(we,j,oe),ee===null?X=we:ee.sibling=we,ee=we);return Ne&&sn(C,oe),X}for(te=i(C,te);!we.done;oe++,we=E.next())we=U(te,C,oe,we.value,F),we!==null&&(e&&we.alternate!==null&&te.delete(we.key===null?oe:we.key),j=c(we,j,oe),ee===null?X=we:ee.sibling=we,ee=we);return e&&te.forEach(function(Fm){return t(C,Fm)}),Ne&&sn(C,oe),X}function Ue(C,j,E,F){if(typeof E=="object"&&E!==null&&E.type===ye&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ne:e:{for(var X=E.key,ee=j;ee!==null;){if(ee.key===X){if(X=E.type,X===ye){if(ee.tag===7){r(C,ee.sibling),j=a(ee,E.props.children),j.return=C,C=j;break e}}else if(ee.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===re&&Yc(X)===ee.type){r(C,ee.sibling),j=a(ee,E.props),j.ref=xo(C,ee,E),j.return=C,C=j;break e}r(C,ee);break}else t(C,ee);ee=ee.sibling}E.type===ye?(j=mn(E.props.children,C.mode,F,E.key),j.return=C,C=j):(F=Zi(E.type,E.key,E.props,null,C.mode,F),F.ref=xo(C,j,E),F.return=C,C=F)}return d(C);case se:e:{for(ee=E.key;j!==null;){if(j.key===ee)if(j.tag===4&&j.stateNode.containerInfo===E.containerInfo&&j.stateNode.implementation===E.implementation){r(C,j.sibling),j=a(j,E.children||[]),j.return=C,C=j;break e}else{r(C,j);break}else t(C,j);j=j.sibling}j=el(E,C.mode,F),j.return=C,C=j}return d(C);case re:return ee=E._init,Ue(C,j,ee(E._payload),F)}if(Gr(E))return q(C,j,E,F);if(V(E))return Y(C,j,E,F);Ri(C,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,j!==null&&j.tag===6?(r(C,j.sibling),j=a(j,E),j.return=C,C=j):(r(C,j),j=Za(E,C.mode,F),j.return=C,C=j),d(C)):r(C,j)}return Ue}var Pn=Qc(!0),Kc=Qc(!1),_i=Lr(null),Ni=null,zn=null,ca=null;function ua(){ca=zn=Ni=null}function da(e){var t=_i.current;_e(_i),e._currentValue=t}function pa(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function An(e,t){Ni=e,ca=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(wt=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(ca!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(Ni===null)throw Error(l(308));zn=e,Ni.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var an=null;function fa(e){an===null?an=[e]:an.push(e)}function Xc(e,t,r,i){var a=t.interleaved;return a===null?(r.next=r,fa(t)):(r.next=a.next,a.next=r),t.interleaved=r,mr(e,i)}function mr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Mr=!1;function ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $r(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ve&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,mr(e,r)}return a=i.interleaved,a===null?(t.next=t,fa(i)):(t.next=a.next,a.next=t),i.interleaved=t,mr(e,r)}function Pi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Is(e,r)}}function Jc(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var a=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?a=c=d:c=c.next=d,r=r.next}while(r!==null);c===null?a=c=t:c=c.next=t}else a=c=t;r={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function zi(e,t,r,i){var a=e.updateQueue;Mr=!1;var c=a.firstBaseUpdate,d=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var b=y,I=b.next;b.next=null,d===null?c=I:d.next=I,d=b;var D=e.alternate;D!==null&&(D=D.updateQueue,y=D.lastBaseUpdate,y!==d&&(y===null?D.firstBaseUpdate=I:y.next=I,D.lastBaseUpdate=b))}if(c!==null){var L=a.baseState;d=0,D=I=b=null,y=c;do{var A=y.lane,U=y.eventTime;if((i&A)===A){D!==null&&(D=D.next={eventTime:U,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var q=e,Y=y;switch(A=t,U=r,Y.tag){case 1:if(q=Y.payload,typeof q=="function"){L=q.call(U,L,A);break e}L=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Y.payload,A=typeof q=="function"?q.call(U,L,A):q,A==null)break e;L=H({},L,A);break e;case 2:Mr=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,A=a.effects,A===null?a.effects=[y]:A.push(y))}else U={eventTime:U,lane:A,tag:y.tag,payload:y.payload,callback:y.callback,next:null},D===null?(I=D=U,b=L):D=D.next=U,d|=A;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;A=y,y=A.next,A.next=null,a.lastBaseUpdate=A,a.shared.pending=null}}while(!0);if(D===null&&(b=L),a.baseState=b,a.firstBaseUpdate=I,a.lastBaseUpdate=D,t=a.shared.interleaved,t!==null){a=t;do d|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);un|=d,e.lanes=d,e.memoizedState=L}}function Zc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=r,typeof a!="function")throw Error(l(191,a));a.call(i)}}}var vo={},tr=Lr(vo),wo=Lr(vo),bo=Lr(vo);function ln(e){if(e===vo)throw Error(l(174));return e}function ha(e,t){switch(Ie(bo,t),Ie(wo,e),Ie(tr,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yn(t,e)}_e(tr),Ie(tr,t)}function Dn(){_e(tr),_e(wo),_e(bo)}function eu(e){ln(bo.current);var t=ln(tr.current),r=Yn(t,e.type);t!==r&&(Ie(wo,e),Ie(tr,r))}function ga(e){wo.current===e&&(_e(tr),_e(wo))}var ze=Lr(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function xa(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var Di=J.ReactCurrentDispatcher,va=J.ReactCurrentBatchConfig,cn=0,Ae=null,Xe=null,et=null,Li=!1,ko=!1,So=0,im=0;function dt(){throw Error(l(321))}function wa(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Vt(e[r],t[r]))return!1;return!0}function ba(e,t,r,i,a,c){if(cn=c,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Di.current=e===null||e.memoizedState===null?cm:um,e=r(i,a),ko){c=0;do{if(ko=!1,So=0,25<=c)throw Error(l(301));c+=1,et=Xe=null,t.updateQueue=null,Di.current=dm,e=r(i,a)}while(ko)}if(Di.current=Mi,t=Xe!==null&&Xe.next!==null,cn=0,et=Xe=Ae=null,Li=!1,t)throw Error(l(300));return e}function ka(){var e=So!==0;return So=0,e}function rr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ae.memoizedState=et=e:et=et.next=e,et}function Ot(){if(Xe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=et===null?Ae.memoizedState:et.next;if(t!==null)et=t,Xe=e;else{if(e===null)throw Error(l(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},et===null?Ae.memoizedState=et=e:et=et.next=e}return et}function jo(e,t){return typeof t=="function"?t(e):t}function Sa(e){var t=Ot(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var i=Xe,a=i.baseQueue,c=r.pending;if(c!==null){if(a!==null){var d=a.next;a.next=c.next,c.next=d}i.baseQueue=a=c,r.pending=null}if(a!==null){c=a.next,i=i.baseState;var y=d=null,b=null,I=c;do{var D=I.lane;if((cn&D)===D)b!==null&&(b=b.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),i=I.hasEagerState?I.eagerState:e(i,I.action);else{var L={lane:D,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};b===null?(y=b=L,d=i):b=b.next=L,Ae.lanes|=D,un|=D}I=I.next}while(I!==null&&I!==c);b===null?d=i:b.next=y,Vt(i,t.memoizedState)||(wt=!0),t.memoizedState=i,t.baseState=d,t.baseQueue=b,r.lastRenderedState=i}if(e=r.interleaved,e!==null){a=e;do c=a.lane,Ae.lanes|=c,un|=c,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ja(e){var t=Ot(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var i=r.dispatch,a=r.pending,c=t.memoizedState;if(a!==null){r.pending=null;var d=a=a.next;do c=e(c,d.action),d=d.next;while(d!==a);Vt(c,t.memoizedState)||(wt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,i]}function tu(){}function ru(e,t){var r=Ae,i=Ot(),a=t(),c=!Vt(i.memoizedState,a);if(c&&(i.memoizedState=a,wt=!0),i=i.queue,Ca(iu.bind(null,r,i,e),[e]),i.getSnapshot!==t||c||et!==null&&et.memoizedState.tag&1){if(r.flags|=2048,Co(9,ou.bind(null,r,i,a,t),void 0,null),tt===null)throw Error(l(349));(cn&30)!==0||nu(r,t,a)}return a}function nu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ou(e,t,r,i){t.value=r,t.getSnapshot=i,su(t)&&au(e)}function iu(e,t,r){return r(function(){su(t)&&au(e)})}function su(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Vt(e,r)}catch{return!0}}function au(e){var t=mr(e,1);t!==null&&Xt(t,e,1,-1)}function lu(e){var t=rr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t.queue=e,e=e.dispatch=lm.bind(null,Ae,e),[t.memoizedState,e]}function Co(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function cu(){return Ot().memoizedState}function Fi(e,t,r,i){var a=rr();Ae.flags|=e,a.memoizedState=Co(1|t,r,void 0,i===void 0?null:i)}function Oi(e,t,r,i){var a=Ot();i=i===void 0?null:i;var c=void 0;if(Xe!==null){var d=Xe.memoizedState;if(c=d.destroy,i!==null&&wa(i,d.deps)){a.memoizedState=Co(t,r,c,i);return}}Ae.flags|=e,a.memoizedState=Co(1|t,r,c,i)}function uu(e,t){return Fi(8390656,8,e,t)}function Ca(e,t){return Oi(2048,8,e,t)}function du(e,t){return Oi(4,2,e,t)}function pu(e,t){return Oi(4,4,e,t)}function fu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mu(e,t,r){return r=r!=null?r.concat([e]):null,Oi(4,4,fu.bind(null,t,e),r)}function Ta(){}function hu(e,t){var r=Ot();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&wa(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function gu(e,t){var r=Ot();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&wa(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function yu(e,t,r){return(cn&21)===0?(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=r):(Vt(r,t)||(r=Yl(),Ae.lanes|=r,un|=r,e.baseState=!0),t)}function sm(e,t){var r=je;je=r!==0&&4>r?r:4,e(!0);var i=va.transition;va.transition={};try{e(!1),t()}finally{je=r,va.transition=i}}function xu(){return Ot().memoizedState}function am(e,t,r){var i=Wr(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},vu(e))wu(t,r);else if(r=Xc(e,t,r,i),r!==null){var a=yt();Xt(r,e,i,a),bu(r,t,i)}}function lm(e,t,r){var i=Wr(e),a={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(vu(e))wu(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,y=c(d,r);if(a.hasEagerState=!0,a.eagerState=y,Vt(y,d)){var b=t.interleaved;b===null?(a.next=a,fa(t)):(a.next=b.next,b.next=a),t.interleaved=a;return}}catch{}finally{}r=Xc(e,t,a,i),r!==null&&(a=yt(),Xt(r,e,i,a),bu(r,t,i))}}function vu(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function wu(e,t){ko=Li=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function bu(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Is(e,r)}}var Mi={readContext:Ft,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},cm={readContext:Ft,useCallback:function(e,t){return rr().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:uu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Fi(4194308,4,fu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fi(4,2,e,t)},useMemo:function(e,t){var r=rr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=rr();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=am.bind(null,Ae,e),[i.memoizedState,e]},useRef:function(e){var t=rr();return e={current:e},t.memoizedState=e},useState:lu,useDebugValue:Ta,useDeferredValue:function(e){return rr().memoizedState=e},useTransition:function(){var e=lu(!1),t=e[0];return e=sm.bind(null,e[1]),rr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Ae,a=rr();if(Ne){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),tt===null)throw Error(l(349));(cn&30)!==0||nu(i,t,r)}a.memoizedState=r;var c={value:r,getSnapshot:t};return a.queue=c,uu(iu.bind(null,i,c,e),[e]),i.flags|=2048,Co(9,ou.bind(null,i,c,r,t),void 0,null),r},useId:function(){var e=rr(),t=tt.identifierPrefix;if(Ne){var r=fr,i=pr;r=(i&~(1<<32-Wt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=So++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=im++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},um={readContext:Ft,useCallback:hu,useContext:Ft,useEffect:Ca,useImperativeHandle:mu,useInsertionEffect:du,useLayoutEffect:pu,useMemo:gu,useReducer:Sa,useRef:cu,useState:function(){return Sa(jo)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ot();return yu(t,Xe.memoizedState,e)},useTransition:function(){var e=Sa(jo)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:tu,useSyncExternalStore:ru,useId:xu,unstable_isNewReconciler:!1},dm={readContext:Ft,useCallback:hu,useContext:Ft,useEffect:Ca,useImperativeHandle:mu,useInsertionEffect:du,useLayoutEffect:pu,useMemo:gu,useReducer:ja,useRef:cu,useState:function(){return ja(jo)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ot();return Xe===null?t.memoizedState=e:yu(t,Xe.memoizedState,e)},useTransition:function(){var e=ja(jo)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:tu,useSyncExternalStore:ru,useId:xu,unstable_isNewReconciler:!1};function Yt(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ea(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:H({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var $i={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=yt(),a=Wr(e),c=hr(i,a);c.payload=t,r!=null&&(c.callback=r),t=$r(e,c,a),t!==null&&(Xt(t,e,a,i),Pi(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=yt(),a=Wr(e),c=hr(i,a);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=$r(e,c,a),t!==null&&(Xt(t,e,a,i),Pi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=yt(),i=Wr(e),a=hr(r,i);a.tag=2,t!=null&&(a.callback=t),t=$r(e,a,i),t!==null&&(Xt(t,e,i,r),Pi(t,e,i))}};function ku(e,t,r,i,a,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,d):t.prototype&&t.prototype.isPureReactComponent?!uo(r,i)||!uo(a,c):!0}function Su(e,t,r){var i=!1,a=Fr,c=t.contextType;return typeof c=="object"&&c!==null?c=Ft(c):(a=vt(t)?nn:ut.current,i=t.contextTypes,c=(i=i!=null)?In(e,a):Fr),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$i,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),t}function ju(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&$i.enqueueReplaceState(t,t.state,null)}function Ia(e,t,r,i){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ma(e);var c=t.contextType;typeof c=="object"&&c!==null?a.context=Ft(c):(c=vt(t)?nn:ut.current,a.context=In(e,c)),a.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Ea(e,t,c,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&$i.enqueueReplaceState(a,a.state,null),zi(e,r,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var r="",i=t;do r+=ue(i),i=i.return;while(i);var a=r}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:a,digest:null}}function Ra(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function _a(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var pm=typeof WeakMap=="function"?WeakMap:Map;function Cu(e,t,r){r=hr(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Yi||(Yi=!0,Va=i),_a(e,t)},r}function Tu(e,t,r){r=hr(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;r.payload=function(){return i(a)},r.callback=function(){_a(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){_a(e,t),typeof i!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function Eu(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new pm;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(r)||(a.add(r),e=Tm.bind(null,e,t,r),t.then(e,e))}function Iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ru(e,t,r,i,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=hr(-1,1),t.tag=2,$r(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var fm=J.ReactCurrentOwner,wt=!1;function gt(e,t,r,i){t.child=e===null?Kc(t,null,r,i):Pn(t,e.child,r,i)}function _u(e,t,r,i,a){r=r.render;var c=t.ref;return An(t,a),i=ba(e,t,r,i,c,a),r=ka(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,gr(e,t,a)):(Ne&&r&&oa(t),t.flags|=1,gt(e,t,i,a),t.child)}function Nu(e,t,r,i,a){if(e===null){var c=r.type;return typeof c=="function"&&!Ja(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,Pu(e,t,c,i,a)):(e=Zi(r.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&a)===0){var d=c.memoizedProps;if(r=r.compare,r=r!==null?r:uo,r(d,i)&&e.ref===t.ref)return gr(e,t,a)}return t.flags|=1,e=qr(c,i),e.ref=t.ref,e.return=t,t.child=e}function Pu(e,t,r,i,a){if(e!==null){var c=e.memoizedProps;if(uo(c,i)&&e.ref===t.ref)if(wt=!1,t.pendingProps=i=c,(e.lanes&a)!==0)(e.flags&131072)!==0&&(wt=!0);else return t.lanes=e.lanes,gr(e,t,a)}return Na(e,t,r,i,a)}function zu(e,t,r){var i=t.pendingProps,a=i.children,c=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(On,Nt),Nt|=r;else{if((r&1073741824)===0)return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(On,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=c!==null?c.baseLanes:r,Ie(On,Nt),Nt|=i}else c!==null?(i=c.baseLanes|r,t.memoizedState=null):i=r,Ie(On,Nt),Nt|=i;return gt(e,t,a,r),t.child}function Au(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Na(e,t,r,i,a){var c=vt(r)?nn:ut.current;return c=In(t,c),An(t,a),r=ba(e,t,r,i,c,a),i=ka(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,gr(e,t,a)):(Ne&&i&&oa(t),t.flags|=1,gt(e,t,r,a),t.child)}function Du(e,t,r,i,a){if(vt(r)){var c=!0;ji(t)}else c=!1;if(An(t,a),t.stateNode===null)Ui(e,t),Su(t,r,i),Ia(t,r,i,a),i=!0;else if(e===null){var d=t.stateNode,y=t.memoizedProps;d.props=y;var b=d.context,I=r.contextType;typeof I=="object"&&I!==null?I=Ft(I):(I=vt(r)?nn:ut.current,I=In(t,I));var D=r.getDerivedStateFromProps,L=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function";L||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==i||b!==I)&&ju(t,d,i,I),Mr=!1;var A=t.memoizedState;d.state=A,zi(t,i,d,a),b=t.memoizedState,y!==i||A!==b||xt.current||Mr?(typeof D=="function"&&(Ea(t,r,D,i),b=t.memoizedState),(y=Mr||ku(t,r,y,i,A,b,I))?(L||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=b),d.props=i,d.state=b,d.context=I,i=y):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,Gc(e,t),y=t.memoizedProps,I=t.type===t.elementType?y:Yt(t.type,y),d.props=I,L=t.pendingProps,A=d.context,b=r.contextType,typeof b=="object"&&b!==null?b=Ft(b):(b=vt(r)?nn:ut.current,b=In(t,b));var U=r.getDerivedStateFromProps;(D=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==L||A!==b)&&ju(t,d,i,b),Mr=!1,A=t.memoizedState,d.state=A,zi(t,i,d,a);var q=t.memoizedState;y!==L||A!==q||xt.current||Mr?(typeof U=="function"&&(Ea(t,r,U,i),q=t.memoizedState),(I=Mr||ku(t,r,I,i,A,q,b)||!1)?(D||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,q,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,q,b)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=q),d.props=i,d.state=q,d.context=b,i=I):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),i=!1)}return Pa(e,t,r,i,c,a)}function Pa(e,t,r,i,a,c){Au(e,t);var d=(t.flags&128)!==0;if(!i&&!d)return a&&$c(t,r,!1),gr(e,t,c);i=t.stateNode,fm.current=t;var y=d&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&d?(t.child=Pn(t,e.child,null,c),t.child=Pn(t,null,y,c)):gt(e,t,y,c),t.memoizedState=i.state,a&&$c(t,r,!0),t.child}function Lu(e){var t=e.stateNode;t.pendingContext?Oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oc(e,t.context,!1),ha(e,t.containerInfo)}function Fu(e,t,r,i,a){return Nn(),la(a),t.flags|=256,gt(e,t,r,i),t.child}var za={dehydrated:null,treeContext:null,retryLane:0};function Aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,r){var i=t.pendingProps,a=ze.current,c=!1,d=(t.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(a&2)!==0),y?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ie(ze,a&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=i.children,e=i.fallback,c?(i=t.mode,c=t.child,d={mode:"hidden",children:d},(i&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=d):c=es(d,i,0,null),e=mn(e,i,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Aa(r),t.memoizedState=za,e):Da(t,d));if(a=e.memoizedState,a!==null&&(y=a.dehydrated,y!==null))return mm(e,t,d,i,y,a,r);if(c){c=i.fallback,d=t.mode,a=e.child,y=a.sibling;var b={mode:"hidden",children:i.children};return(d&1)===0&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=b,t.deletions=null):(i=qr(a,b),i.subtreeFlags=a.subtreeFlags&14680064),y!==null?c=qr(y,c):(c=mn(c,d,r,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,i=c,c=t.child,d=e.child.memoizedState,d=d===null?Aa(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=e.childLanes&~r,t.memoizedState=za,i}return c=e.child,e=c.sibling,i=qr(c,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Da(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hi(e,t,r,i){return i!==null&&la(i),Pn(t,e.child,null,r),e=Da(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mm(e,t,r,i,a,c,d){if(r)return t.flags&256?(t.flags&=-257,i=Ra(Error(l(422))),Hi(e,t,d,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=i.fallback,a=t.mode,i=es({mode:"visible",children:i.children},a,0,null),c=mn(c,a,d,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,(t.mode&1)!==0&&Pn(t,e.child,null,d),t.child.memoizedState=Aa(d),t.memoizedState=za,c);if((t.mode&1)===0)return Hi(e,t,d,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var y=i.dgst;return i=y,c=Error(l(419)),i=Ra(c,i,void 0),Hi(e,t,d,i)}if(y=(d&e.childLanes)!==0,wt||y){if(i=tt,i!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|d))!==0?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,mr(e,a),Xt(i,e,a,-1))}return Ga(),i=Ra(Error(l(421))),Hi(e,t,d,i)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Em.bind(null,e),a._reactRetry=t,null):(e=c.treeContext,_t=Dr(a.nextSibling),Rt=t,Ne=!0,qt=null,e!==null&&(Dt[Lt++]=pr,Dt[Lt++]=fr,Dt[Lt++]=on,pr=e.id,fr=e.overflow,on=t),t=Da(t,i.children),t.flags|=4096,t)}function Mu(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),pa(e.return,t,r)}function La(e,t,r,i,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=r,c.tailMode=a)}function $u(e,t,r){var i=t.pendingProps,a=i.revealOrder,c=i.tail;if(gt(e,t,i.children,r),i=ze.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,r,t);else if(e.tag===19)Mu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Ie(ze,i),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ai(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),La(t,!1,a,r,c);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ai(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}La(t,!0,r,null,c);break;case"together":La(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=qr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=qr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function hm(e,t,r){switch(t.tag){case 3:Lu(t),Nn();break;case 5:eu(t);break;case 1:vt(t.type)&&ji(t);break;case 4:ha(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;Ie(_i,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Ie(ze,ze.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Ou(e,t,r):(Ie(ze,ze.current&1),e=gr(e,t,r),e!==null?e.sibling:null);Ie(ze,ze.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return $u(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ie(ze,ze.current),i)break;return null;case 22:case 23:return t.lanes=0,zu(e,t,r)}return gr(e,t,r)}var Hu,Fa,Uu,Bu;Hu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Fa=function(){},Uu=function(e,t,r,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,ln(tr.current);var c=null;switch(r){case"input":a=Jt(e,a),i=Jt(e,i),c=[];break;case"select":a=H({},a,{value:void 0}),i=H({},i,{value:void 0}),c=[];break;case"textarea":a=it(e,a),i=it(e,i),c=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=bi)}xn(r,i);var d;r=null;for(I in a)if(!i.hasOwnProperty(I)&&a.hasOwnProperty(I)&&a[I]!=null)if(I==="style"){var y=a[I];for(d in y)y.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(p.hasOwnProperty(I)?c||(c=[]):(c=c||[]).push(I,null));for(I in i){var b=i[I];if(y=a!=null?a[I]:void 0,i.hasOwnProperty(I)&&b!==y&&(b!=null||y!=null))if(I==="style")if(y){for(d in y)!y.hasOwnProperty(d)||b&&b.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in b)b.hasOwnProperty(d)&&y[d]!==b[d]&&(r||(r={}),r[d]=b[d])}else r||(c||(c=[]),c.push(I,r)),r=b;else I==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,y=y?y.__html:void 0,b!=null&&y!==b&&(c=c||[]).push(I,b)):I==="children"?typeof b!="string"&&typeof b!="number"||(c=c||[]).push(I,""+b):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(p.hasOwnProperty(I)?(b!=null&&I==="onScroll"&&Re("scroll",e),c||y===b||(c=[])):(c=c||[]).push(I,b))}r&&(c=c||[]).push("style",r);var I=c;(t.updateQueue=I)&&(t.flags|=4)}},Bu=function(e,t,r,i){r!==i&&(t.flags|=4)};function To(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function gm(e,t,r){var i=t.pendingProps;switch(ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return vt(t.type)&&Si(),pt(t),null;case 3:return i=t.stateNode,Dn(),_e(xt),_e(ut),xa(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qt!==null&&(Qa(qt),qt=null))),Fa(e,t),pt(t),null;case 5:ga(t);var a=ln(bo.current);if(r=t.type,e!==null&&t.stateNode!=null)Uu(e,t,r,i,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(l(166));return pt(t),null}if(e=ln(tr.current),Ii(t)){i=t.stateNode,r=t.type;var c=t.memoizedProps;switch(i[er]=t,i[go]=c,e=(t.mode&1)!==0,r){case"dialog":Re("cancel",i),Re("close",i);break;case"iframe":case"object":case"embed":Re("load",i);break;case"video":case"audio":for(a=0;a<fo.length;a++)Re(fo[a],i);break;case"source":Re("error",i);break;case"img":case"image":case"link":Re("error",i),Re("load",i);break;case"details":Re("toggle",i);break;case"input":Xo(i,c),Re("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!c.multiple},Re("invalid",i);break;case"textarea":lr(i,c),Re("invalid",i)}xn(r,c),a=null;for(var d in c)if(c.hasOwnProperty(d)){var y=c[d];d==="children"?typeof y=="string"?i.textContent!==y&&(c.suppressHydrationWarning!==!0&&wi(i.textContent,y,e),a=["children",y]):typeof y=="number"&&i.textContent!==""+y&&(c.suppressHydrationWarning!==!0&&wi(i.textContent,y,e),a=["children",""+y]):p.hasOwnProperty(d)&&y!=null&&d==="onScroll"&&Re("scroll",i)}switch(r){case"input":sr(i),qn(i,c,!0);break;case"textarea":sr(i),Jo(i);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(i.onclick=bi)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jr(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(r,{is:i.is}):(e=d.createElement(r),r==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,r),e[er]=t,e[go]=i,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(d=Qn(r,i),r){case"dialog":Re("cancel",e),Re("close",e),a=i;break;case"iframe":case"object":case"embed":Re("load",e),a=i;break;case"video":case"audio":for(a=0;a<fo.length;a++)Re(fo[a],e);a=i;break;case"source":Re("error",e),a=i;break;case"img":case"image":case"link":Re("error",e),Re("load",e),a=i;break;case"details":Re("toggle",e),a=i;break;case"input":Xo(e,i),a=Jt(e,i),Re("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=H({},i,{value:void 0}),Re("invalid",e);break;case"textarea":lr(e,i),a=it(e,i),Re("invalid",e);break;default:a=i}xn(r,a),y=a;for(c in y)if(y.hasOwnProperty(c)){var b=y[c];c==="style"?ei(e,b):c==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&yn(e,b)):c==="children"?typeof b=="string"?(r!=="textarea"||b!=="")&&Pt(e,b):typeof b=="number"&&Pt(e,""+b):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(p.hasOwnProperty(c)?b!=null&&c==="onScroll"&&Re("scroll",e):b!=null&&ae(e,c,b,d))}switch(r){case"input":sr(e),qn(e,i,!1);break;case"textarea":sr(e),Jo(e);break;case"option":i.value!=null&&e.setAttribute("value",""+pe(i.value));break;case"select":e.multiple=!!i.multiple,c=i.value,c!=null?kr(e,!!i.multiple,c,!1):i.defaultValue!=null&&kr(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=bi)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)Bu(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(r=ln(bo.current),ln(tr.current),Ii(t)){if(i=t.stateNode,r=t.memoizedProps,i[er]=t,(c=i.nodeValue!==r)&&(e=Rt,e!==null))switch(e.tag){case 3:wi(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(i.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[er]=t,t.stateNode=i}return pt(t),null;case 13:if(_e(ze),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&_t!==null&&(t.mode&1)!==0&&(t.flags&128)===0)qc(),Nn(),t.flags|=98560,c=!1;else if(c=Ii(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[er]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pt(t),c=!1}else qt!==null&&(Qa(qt),qt=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ze.current&1)!==0?Ge===0&&(Ge=3):Ga())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return Dn(),Fa(e,t),e===null&&mo(t.stateNode.containerInfo),pt(t),null;case 10:return da(t.type._context),pt(t),null;case 17:return vt(t.type)&&Si(),pt(t),null;case 19:if(_e(ze),c=t.memoizedState,c===null)return pt(t),null;if(i=(t.flags&128)!==0,d=c.rendering,d===null)if(i)To(c,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Ai(e),d!==null){for(t.flags|=128,To(c,!1),i=d.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)c=r,e=i,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,e=d.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ie(ze,ze.current&1|2),t.child}e=e.sibling}c.tail!==null&&He()>Mn&&(t.flags|=128,i=!0,To(c,!1),t.lanes=4194304)}else{if(!i)if(e=Ai(d),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),To(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Ne)return pt(t),null}else 2*He()-c.renderingStartTime>Mn&&r!==1073741824&&(t.flags|=128,i=!0,To(c,!1),t.lanes=4194304);c.isBackwards?(d.sibling=t.child,t.child=d):(r=c.last,r!==null?r.sibling=d:t.child=d,c.last=d)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=He(),t.sibling=null,r=ze.current,Ie(ze,i?r&1|2:r&1),t):(pt(t),null);case 22:case 23:return Xa(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(Nt&1073741824)!==0&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function ym(e,t){switch(ia(t),t.tag){case 1:return vt(t.type)&&Si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),_e(xt),_e(ut),xa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ga(t),null;case 13:if(_e(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(ze),null;case 4:return Dn(),null;case 10:return da(t.type._context),null;case 22:case 23:return Xa(),null;case 24:return null;default:return null}}var Bi=!1,ft=!1,xm=typeof WeakSet=="function"?WeakSet:Set,W=null;function Fn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Oe(e,t,i)}else r.current=null}function Oa(e,t,r){try{r()}catch(i){Oe(e,t,i)}}var Wu=!1;function vm(e,t){if(Xs=ci,e=kc(),Us(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var d=0,y=-1,b=-1,I=0,D=0,L=e,A=null;t:for(;;){for(var U;L!==r||a!==0&&L.nodeType!==3||(y=d+a),L!==c||i!==0&&L.nodeType!==3||(b=d+i),L.nodeType===3&&(d+=L.nodeValue.length),(U=L.firstChild)!==null;)A=L,L=U;for(;;){if(L===e)break t;if(A===r&&++I===a&&(y=d),A===c&&++D===i&&(b=d),(U=L.nextSibling)!==null)break;L=A,A=L.parentNode}L=U}r=y===-1||b===-1?null:{start:y,end:b}}else r=null}r=r||{start:0,end:0}}else r=null;for(Gs={focusedElem:e,selectionRange:r},ci=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var Y=q.memoizedProps,Ue=q.memoizedState,C=t.stateNode,j=C.getSnapshotBeforeUpdate(t.elementType===t.type?Y:Yt(t.type,Y),Ue);C.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(F){Oe(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return q=Wu,Wu=!1,q}function Eo(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&Oa(t,r,c)}a=a.next}while(a!==i)}}function Wi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Ma(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Vu(e){var t=e.alternate;t!==null&&(e.alternate=null,Vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[er],delete t[go],delete t[ta],delete t[tm],delete t[rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qu(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $a(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=bi));else if(i!==4&&(e=e.child,e!==null))for($a(e,t,r),e=e.sibling;e!==null;)$a(e,t,r),e=e.sibling}function Ha(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ha(e,t,r),e=e.sibling;e!==null;)Ha(e,t,r),e=e.sibling}var at=null,Qt=!1;function Hr(e,t,r){for(r=r.child;r!==null;)Qu(e,t,r),r=r.sibling}function Qu(e,t,r){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(ni,r)}catch{}switch(r.tag){case 5:ft||Fn(r,t);case 6:var i=at,a=Qt;at=null,Hr(e,t,r),at=i,Qt=a,at!==null&&(Qt?(e=at,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):at.removeChild(r.stateNode));break;case 18:at!==null&&(Qt?(e=at,r=r.stateNode,e.nodeType===8?ea(e.parentNode,r):e.nodeType===1&&ea(e,r),oo(e)):ea(at,r.stateNode));break;case 4:i=at,a=Qt,at=r.stateNode.containerInfo,Qt=!0,Hr(e,t,r),at=i,Qt=a;break;case 0:case 11:case 14:case 15:if(!ft&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var c=a,d=c.destroy;c=c.tag,d!==void 0&&((c&2)!==0||(c&4)!==0)&&Oa(r,t,d),a=a.next}while(a!==i)}Hr(e,t,r);break;case 1:if(!ft&&(Fn(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(y){Oe(r,t,y)}Hr(e,t,r);break;case 21:Hr(e,t,r);break;case 22:r.mode&1?(ft=(i=ft)||r.memoizedState!==null,Hr(e,t,r),ft=i):Hr(e,t,r);break;default:Hr(e,t,r)}}function Ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new xm),t.forEach(function(i){var a=Im.bind(null,e,i);r.has(i)||(r.add(i),i.then(a,a))})}}function Kt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i];try{var c=e,d=t,y=d;e:for(;y!==null;){switch(y.tag){case 5:at=y.stateNode,Qt=!1;break e;case 3:at=y.stateNode.containerInfo,Qt=!0;break e;case 4:at=y.stateNode.containerInfo,Qt=!0;break e}y=y.return}if(at===null)throw Error(l(160));Qu(c,d,a),at=null,Qt=!1;var b=a.alternate;b!==null&&(b.return=null),a.return=null}catch(I){Oe(a,t,I)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),nr(e),i&4){try{Eo(3,e,e.return),Wi(3,e)}catch(Y){Oe(e,e.return,Y)}try{Eo(5,e,e.return)}catch(Y){Oe(e,e.return,Y)}}break;case 1:Kt(t,e),nr(e),i&512&&r!==null&&Fn(r,r.return);break;case 5:if(Kt(t,e),nr(e),i&512&&r!==null&&Fn(r,r.return),e.flags&32){var a=e.stateNode;try{Pt(a,"")}catch(Y){Oe(e,e.return,Y)}}if(i&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,d=r!==null?r.memoizedProps:c,y=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{y==="input"&&c.type==="radio"&&c.name!=null&&Vn(a,c),Qn(y,d);var I=Qn(y,c);for(d=0;d<b.length;d+=2){var D=b[d],L=b[d+1];D==="style"?ei(a,L):D==="dangerouslySetInnerHTML"?yn(a,L):D==="children"?Pt(a,L):ae(a,D,L,I)}switch(y){case"input":ar(a,c);break;case"textarea":Go(a,c);break;case"select":var A=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var U=c.value;U!=null?kr(a,!!c.multiple,U,!1):A!==!!c.multiple&&(c.defaultValue!=null?kr(a,!!c.multiple,c.defaultValue,!0):kr(a,!!c.multiple,c.multiple?[]:"",!1))}a[go]=c}catch(Y){Oe(e,e.return,Y)}}break;case 6:if(Kt(t,e),nr(e),i&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(Y){Oe(e,e.return,Y)}}break;case 3:if(Kt(t,e),nr(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{oo(t.containerInfo)}catch(Y){Oe(e,e.return,Y)}break;case 4:Kt(t,e),nr(e);break;case 13:Kt(t,e),nr(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(Wa=He())),i&4&&Ku(e);break;case 22:if(D=r!==null&&r.memoizedState!==null,e.mode&1?(ft=(I=ft)||D,Kt(t,e),ft=I):Kt(t,e),nr(e),i&8192){if(I=e.memoizedState!==null,(e.stateNode.isHidden=I)&&!D&&(e.mode&1)!==0)for(W=e,D=e.child;D!==null;){for(L=W=D;W!==null;){switch(A=W,U=A.child,A.tag){case 0:case 11:case 14:case 15:Eo(4,A,A.return);break;case 1:Fn(A,A.return);var q=A.stateNode;if(typeof q.componentWillUnmount=="function"){i=A,r=A.return;try{t=i,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(Y){Oe(i,r,Y)}}break;case 5:Fn(A,A.return);break;case 22:if(A.memoizedState!==null){Zu(L);continue}}U!==null?(U.return=A,W=U):Zu(L)}D=D.sibling}e:for(D=null,L=e;;){if(L.tag===5){if(D===null){D=L;try{a=L.stateNode,I?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(y=L.stateNode,b=L.memoizedProps.style,d=b!=null&&b.hasOwnProperty("display")?b.display:null,y.style.display=Zo("display",d))}catch(Y){Oe(e,e.return,Y)}}}else if(L.tag===6){if(D===null)try{L.stateNode.nodeValue=I?"":L.memoizedProps}catch(Y){Oe(e,e.return,Y)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;D===L&&(D=null),L=L.return}D===L&&(D=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:Kt(t,e),nr(e),i&4&&Ku(e);break;case 21:break;default:Kt(t,e),nr(e)}}function nr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(qu(r)){var i=r;break e}r=r.return}throw Error(l(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Pt(a,""),i.flags&=-33);var c=Yu(e);Ha(e,c,a);break;case 3:case 4:var d=i.stateNode.containerInfo,y=Yu(e);$a(e,y,d);break;default:throw Error(l(161))}}catch(b){Oe(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wm(e,t,r){W=e,Gu(e)}function Gu(e,t,r){for(var i=(e.mode&1)!==0;W!==null;){var a=W,c=a.child;if(a.tag===22&&i){var d=a.memoizedState!==null||Bi;if(!d){var y=a.alternate,b=y!==null&&y.memoizedState!==null||ft;y=Bi;var I=ft;if(Bi=d,(ft=b)&&!I)for(W=a;W!==null;)d=W,b=d.child,d.tag===22&&d.memoizedState!==null?ed(a):b!==null?(b.return=d,W=b):ed(a);for(;c!==null;)W=c,Gu(c),c=c.sibling;W=a,Bi=y,ft=I}Ju(e)}else(a.subtreeFlags&8772)!==0&&c!==null?(c.return=a,W=c):Ju(e)}}function Ju(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ft||Wi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!ft)if(r===null)i.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Yt(t.type,r.memoizedProps);i.componentDidUpdate(a,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&Zc(t,c,i);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Zc(t,d,r)}break;case 5:var y=t.stateNode;if(r===null&&t.flags&4){r=y;var b=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&r.focus();break;case"img":b.src&&(r.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var I=t.alternate;if(I!==null){var D=I.memoizedState;if(D!==null){var L=D.dehydrated;L!==null&&oo(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ft||t.flags&512&&Ma(t)}catch(A){Oe(t,t.return,A)}}if(t===e){W=null;break}if(r=t.sibling,r!==null){r.return=t.return,W=r;break}W=t.return}}function Zu(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var r=t.sibling;if(r!==null){r.return=t.return,W=r;break}W=t.return}}function ed(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Wi(4,t)}catch(b){Oe(t,r,b)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(b){Oe(t,a,b)}}var c=t.return;try{Ma(t)}catch(b){Oe(t,c,b)}break;case 5:var d=t.return;try{Ma(t)}catch(b){Oe(t,d,b)}}}catch(b){Oe(t,t.return,b)}if(t===e){W=null;break}var y=t.sibling;if(y!==null){y.return=t.return,W=y;break}W=t.return}}var bm=Math.ceil,Vi=J.ReactCurrentDispatcher,Ua=J.ReactCurrentOwner,Mt=J.ReactCurrentBatchConfig,ve=0,tt=null,qe=null,lt=0,Nt=0,On=Lr(0),Ge=0,Io=null,un=0,qi=0,Ba=0,Ro=null,bt=null,Wa=0,Mn=1/0,yr=null,Yi=!1,Va=null,Ur=null,Qi=!1,Br=null,Ki=0,_o=0,qa=null,Xi=-1,Gi=0;function yt(){return(ve&6)!==0?He():Xi!==-1?Xi:Xi=He()}function Wr(e){return(e.mode&1)===0?1:(ve&2)!==0&&lt!==0?lt&-lt:om.transition!==null?(Gi===0&&(Gi=Yl()),Gi):(e=je,e!==0||(e=window.event,e=e===void 0?16:rc(e.type)),e)}function Xt(e,t,r,i){if(50<_o)throw _o=0,qa=null,Error(l(185));Zn(e,r,i),((ve&2)===0||e!==tt)&&(e===tt&&((ve&2)===0&&(qi|=r),Ge===4&&Vr(e,lt)),kt(e,i),r===1&&ve===0&&(t.mode&1)===0&&(Mn=He()+500,Ci&&Or()))}function kt(e,t){var r=e.callbackNode;nf(e,t);var i=si(e,e===tt?lt:0);if(i===0)r!==null&&Wl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Wl(r),t===1)e.tag===0?nm(rd.bind(null,e)):Hc(rd.bind(null,e)),Zf(function(){(ve&6)===0&&Or()}),r=null;else{switch(Ql(i)){case 1:r=Cs;break;case 4:r=Vl;break;case 16:r=ri;break;case 536870912:r=ql;break;default:r=ri}r=ud(r,td.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function td(e,t){if(Xi=-1,Gi=0,(ve&6)!==0)throw Error(l(327));var r=e.callbackNode;if($n()&&e.callbackNode!==r)return null;var i=si(e,e===tt?lt:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Ji(e,i);else{t=i;var a=ve;ve|=2;var c=od();(tt!==e||lt!==t)&&(yr=null,Mn=He()+500,pn(e,t));do try{jm();break}catch(y){nd(e,y)}while(!0);ua(),Vi.current=c,ve=a,qe!==null?t=0:(tt=null,lt=0,t=Ge)}if(t!==0){if(t===2&&(a=Ts(e),a!==0&&(i=a,t=Ya(e,a))),t===1)throw r=Io,pn(e,0),Vr(e,i),kt(e,He()),r;if(t===6)Vr(e,i);else{if(a=e.current.alternate,(i&30)===0&&!km(a)&&(t=Ji(e,i),t===2&&(c=Ts(e),c!==0&&(i=c,t=Ya(e,c))),t===1))throw r=Io,pn(e,0),Vr(e,i),kt(e,He()),r;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(l(345));case 2:fn(e,bt,yr);break;case 3:if(Vr(e,i),(i&130023424)===i&&(t=Wa+500-He(),10<t)){if(si(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){yt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Zs(fn.bind(null,e,bt,yr),t);break}fn(e,bt,yr);break;case 4:if(Vr(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var d=31-Wt(i);c=1<<d,d=t[d],d>a&&(a=d),i&=~c}if(i=a,i=He()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bm(i/1960))-i,10<i){e.timeoutHandle=Zs(fn.bind(null,e,bt,yr),i);break}fn(e,bt,yr);break;case 5:fn(e,bt,yr);break;default:throw Error(l(329))}}}return kt(e,He()),e.callbackNode===r?td.bind(null,e):null}function Ya(e,t){var r=Ro;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=Ji(e,t),e!==2&&(t=bt,bt=r,t!==null&&Qa(t)),e}function Qa(e){bt===null?bt=e:bt.push.apply(bt,e)}function km(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var a=r[i],c=a.getSnapshot;a=a.value;try{if(!Vt(c(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vr(e,t){for(t&=~Ba,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Wt(t),i=1<<r;e[r]=-1,t&=~i}}function rd(e){if((ve&6)!==0)throw Error(l(327));$n();var t=si(e,0);if((t&1)===0)return kt(e,He()),null;var r=Ji(e,t);if(e.tag!==0&&r===2){var i=Ts(e);i!==0&&(t=i,r=Ya(e,i))}if(r===1)throw r=Io,pn(e,0),Vr(e,t),kt(e,He()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,bt,yr),kt(e,He()),null}function Ka(e,t){var r=ve;ve|=1;try{return e(t)}finally{ve=r,ve===0&&(Mn=He()+500,Ci&&Or())}}function dn(e){Br!==null&&Br.tag===0&&(ve&6)===0&&$n();var t=ve;ve|=1;var r=Mt.transition,i=je;try{if(Mt.transition=null,je=1,e)return e()}finally{je=i,Mt.transition=r,ve=t,(ve&6)===0&&Or()}}function Xa(){Nt=On.current,_e(On)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Jf(r)),qe!==null)for(r=qe.return;r!==null;){var i=r;switch(ia(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Si();break;case 3:Dn(),_e(xt),_e(ut),xa();break;case 5:ga(i);break;case 4:Dn();break;case 13:_e(ze);break;case 19:_e(ze);break;case 10:da(i.type._context);break;case 22:case 23:Xa()}r=r.return}if(tt=e,qe=e=qr(e.current,null),lt=Nt=t,Ge=0,Io=null,Ba=qi=un=0,bt=Ro=null,an!==null){for(t=0;t<an.length;t++)if(r=an[t],i=r.interleaved,i!==null){r.interleaved=null;var a=i.next,c=r.pending;if(c!==null){var d=c.next;c.next=a,i.next=d}r.pending=i}an=null}return e}function nd(e,t){do{var r=qe;try{if(ua(),Di.current=Mi,Li){for(var i=Ae.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Li=!1}if(cn=0,et=Xe=Ae=null,ko=!1,So=0,Ua.current=null,r===null||r.return===null){Ge=1,Io=t,qe=null;break}e:{var c=e,d=r.return,y=r,b=t;if(t=lt,y.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var I=b,D=y,L=D.tag;if((D.mode&1)===0&&(L===0||L===11||L===15)){var A=D.alternate;A?(D.updateQueue=A.updateQueue,D.memoizedState=A.memoizedState,D.lanes=A.lanes):(D.updateQueue=null,D.memoizedState=null)}var U=Iu(d);if(U!==null){U.flags&=-257,Ru(U,d,y,c,t),U.mode&1&&Eu(c,I,t),t=U,b=I;var q=t.updateQueue;if(q===null){var Y=new Set;Y.add(b),t.updateQueue=Y}else q.add(b);break e}else{if((t&1)===0){Eu(c,I,t),Ga();break e}b=Error(l(426))}}else if(Ne&&y.mode&1){var Ue=Iu(d);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),Ru(Ue,d,y,c,t),la(Ln(b,y));break e}}c=b=Ln(b,y),Ge!==4&&(Ge=2),Ro===null?Ro=[c]:Ro.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var C=Cu(c,b,t);Jc(c,C);break e;case 1:y=b;var j=c.type,E=c.stateNode;if((c.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Ur===null||!Ur.has(E)))){c.flags|=65536,t&=-t,c.lanes|=t;var F=Tu(c,y,t);Jc(c,F);break e}}c=c.return}while(c!==null)}sd(r)}catch(X){t=X,qe===r&&r!==null&&(qe=r=r.return);continue}break}while(!0)}function od(){var e=Vi.current;return Vi.current=Mi,e===null?Mi:e}function Ga(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),tt===null||(un&268435455)===0&&(qi&268435455)===0||Vr(tt,lt)}function Ji(e,t){var r=ve;ve|=2;var i=od();(tt!==e||lt!==t)&&(yr=null,pn(e,t));do try{Sm();break}catch(a){nd(e,a)}while(!0);if(ua(),ve=r,Vi.current=i,qe!==null)throw Error(l(261));return tt=null,lt=0,Ge}function Sm(){for(;qe!==null;)id(qe)}function jm(){for(;qe!==null&&!Qp();)id(qe)}function id(e){var t=cd(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?sd(e):qe=t,Ua.current=null}function sd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=gm(r,t,Nt),r!==null){qe=r;return}}else{if(r=ym(r,t),r!==null){r.flags&=32767,qe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,qe=null;return}}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Ge===0&&(Ge=5)}function fn(e,t,r){var i=je,a=Mt.transition;try{Mt.transition=null,je=1,Cm(e,t,r,i)}finally{Mt.transition=a,je=i}return null}function Cm(e,t,r,i){do $n();while(Br!==null);if((ve&6)!==0)throw Error(l(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(of(e,c),e===tt&&(qe=tt=null,lt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Qi||(Qi=!0,ud(ri,function(){return $n(),null})),c=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||c){c=Mt.transition,Mt.transition=null;var d=je;je=1;var y=ve;ve|=4,Ua.current=null,vm(e,r),Xu(r,e),Vf(Gs),ci=!!Xs,Gs=Xs=null,e.current=r,wm(r),Kp(),ve=y,je=d,Mt.transition=c}else e.current=r;if(Qi&&(Qi=!1,Br=e,Ki=a),c=e.pendingLanes,c===0&&(Ur=null),Jp(r.stateNode),kt(e,He()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],i(a.value,{componentStack:a.stack,digest:a.digest});if(Yi)throw Yi=!1,e=Va,Va=null,e;return(Ki&1)!==0&&e.tag!==0&&$n(),c=e.pendingLanes,(c&1)!==0?e===qa?_o++:(_o=0,qa=e):_o=0,Or(),null}function $n(){if(Br!==null){var e=Ql(Ki),t=Mt.transition,r=je;try{if(Mt.transition=null,je=16>e?16:e,Br===null)var i=!1;else{if(e=Br,Br=null,Ki=0,(ve&6)!==0)throw Error(l(331));var a=ve;for(ve|=4,W=e.current;W!==null;){var c=W,d=c.child;if((W.flags&16)!==0){var y=c.deletions;if(y!==null){for(var b=0;b<y.length;b++){var I=y[b];for(W=I;W!==null;){var D=W;switch(D.tag){case 0:case 11:case 15:Eo(8,D,c)}var L=D.child;if(L!==null)L.return=D,W=L;else for(;W!==null;){D=W;var A=D.sibling,U=D.return;if(Vu(D),D===I){W=null;break}if(A!==null){A.return=U,W=A;break}W=U}}}var q=c.alternate;if(q!==null){var Y=q.child;if(Y!==null){q.child=null;do{var Ue=Y.sibling;Y.sibling=null,Y=Ue}while(Y!==null)}}W=c}}if((c.subtreeFlags&2064)!==0&&d!==null)d.return=c,W=d;else e:for(;W!==null;){if(c=W,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:Eo(9,c,c.return)}var C=c.sibling;if(C!==null){C.return=c.return,W=C;break e}W=c.return}}var j=e.current;for(W=j;W!==null;){d=W;var E=d.child;if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,W=E;else e:for(d=j;W!==null;){if(y=W,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:Wi(9,y)}}catch(X){Oe(y,y.return,X)}if(y===d){W=null;break e}var F=y.sibling;if(F!==null){F.return=y.return,W=F;break e}W=y.return}}if(ve=a,Or(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(ni,e)}catch{}i=!0}return i}finally{je=r,Mt.transition=t}}return!1}function ad(e,t,r){t=Ln(r,t),t=Cu(e,t,1),e=$r(e,t,1),t=yt(),e!==null&&(Zn(e,1,t),kt(e,t))}function Oe(e,t,r){if(e.tag===3)ad(e,e,r);else for(;t!==null;){if(t.tag===3){ad(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ur===null||!Ur.has(i))){e=Ln(r,e),e=Tu(t,e,1),t=$r(t,e,1),e=yt(),t!==null&&(Zn(t,1,e),kt(t,e));break}}t=t.return}}function Tm(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&r,tt===e&&(lt&r)===r&&(Ge===4||Ge===3&&(lt&130023424)===lt&&500>He()-Wa?pn(e,0):Ba|=r),kt(e,t)}function ld(e,t){t===0&&((e.mode&1)===0?t=1:(t=ii,ii<<=1,(ii&130023424)===0&&(ii=4194304)));var r=yt();e=mr(e,t),e!==null&&(Zn(e,t,r),kt(e,r))}function Em(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ld(e,r)}function Im(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(l(314))}i!==null&&i.delete(t),ld(e,r)}var cd;cd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)wt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return wt=!1,hm(e,t,r);wt=(e.flags&131072)!==0}else wt=!1,Ne&&(t.flags&1048576)!==0&&Uc(t,Ei,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ui(e,t),e=t.pendingProps;var a=In(t,ut.current);An(t,r),a=ba(null,t,i,e,a,r);var c=ka();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(i)?(c=!0,ji(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ma(t),a.updater=$i,t.stateNode=a,a._reactInternals=t,Ia(t,i,e,r),t=Pa(null,t,i,!0,c,r)):(t.tag=0,Ne&&c&&oa(t),gt(null,t,a,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Ui(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=_m(i),e=Yt(i,e),a){case 0:t=Na(null,t,i,e,r);break e;case 1:t=Du(null,t,i,e,r);break e;case 11:t=_u(null,t,i,e,r);break e;case 14:t=Nu(null,t,i,Yt(i.type,e),r);break e}throw Error(l(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Yt(i,a),Na(e,t,i,a,r);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Yt(i,a),Du(e,t,i,a,r);case 3:e:{if(Lu(t),e===null)throw Error(l(387));i=t.pendingProps,c=t.memoizedState,a=c.element,Gc(e,t),zi(t,i,null,r);var d=t.memoizedState;if(i=d.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=Ln(Error(l(423)),t),t=Fu(e,t,i,r,a);break e}else if(i!==a){a=Ln(Error(l(424)),t),t=Fu(e,t,i,r,a);break e}else for(_t=Dr(t.stateNode.containerInfo.firstChild),Rt=t,Ne=!0,qt=null,r=Kc(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Nn(),i===a){t=gr(e,t,r);break e}gt(e,t,i,r)}t=t.child}return t;case 5:return eu(t),e===null&&aa(t),i=t.type,a=t.pendingProps,c=e!==null?e.memoizedProps:null,d=a.children,Js(i,a)?d=null:c!==null&&Js(i,c)&&(t.flags|=32),Au(e,t),gt(e,t,d,r),t.child;case 6:return e===null&&aa(t),null;case 13:return Ou(e,t,r);case 4:return ha(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Pn(t,null,i,r):gt(e,t,i,r),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Yt(i,a),_u(e,t,i,a,r);case 7:return gt(e,t,t.pendingProps,r),t.child;case 8:return gt(e,t,t.pendingProps.children,r),t.child;case 12:return gt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,c=t.memoizedProps,d=a.value,Ie(_i,i._currentValue),i._currentValue=d,c!==null)if(Vt(c.value,d)){if(c.children===a.children&&!xt.current){t=gr(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var y=c.dependencies;if(y!==null){d=c.child;for(var b=y.firstContext;b!==null;){if(b.context===i){if(c.tag===1){b=hr(-1,r&-r),b.tag=2;var I=c.updateQueue;if(I!==null){I=I.shared;var D=I.pending;D===null?b.next=b:(b.next=D.next,D.next=b),I.pending=b}}c.lanes|=r,b=c.alternate,b!==null&&(b.lanes|=r),pa(c.return,r,t),y.lanes|=r;break}b=b.next}}else if(c.tag===10)d=c.type===t.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(l(341));d.lanes|=r,y=d.alternate,y!==null&&(y.lanes|=r),pa(d,r,t),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===t){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}gt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,An(t,r),a=Ft(a),i=i(a),t.flags|=1,gt(e,t,i,r),t.child;case 14:return i=t.type,a=Yt(i,t.pendingProps),a=Yt(i.type,a),Nu(e,t,i,a,r);case 15:return Pu(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Yt(i,a),Ui(e,t),t.tag=1,vt(i)?(e=!0,ji(t)):e=!1,An(t,r),Su(t,i,a),Ia(t,i,a,r),Pa(null,t,i,!0,e,r);case 19:return $u(e,t,r);case 22:return zu(e,t,r)}throw Error(l(156,t.tag))};function ud(e,t){return Bl(e,t)}function Rm(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,r,i){return new Rm(e,t,r,i)}function Ja(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _m(e){if(typeof e=="function")return Ja(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ce)return 11;if(e===Te)return 14}return 2}function qr(e,t){var r=e.alternate;return r===null?(r=$t(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zi(e,t,r,i,a,c){var d=2;if(i=e,typeof e=="function")Ja(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ye:return mn(r.children,a,c,t);case Ce:d=8,a|=8;break;case Q:return e=$t(12,r,t,a|2),e.elementType=Q,e.lanes=c,e;case he:return e=$t(13,r,t,a),e.elementType=he,e.lanes=c,e;case Qe:return e=$t(19,r,t,a),e.elementType=Qe,e.lanes=c,e;case me:return es(r,a,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:d=10;break e;case $:d=9;break e;case ce:d=11;break e;case Te:d=14;break e;case re:d=16,i=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=$t(d,r,t,a),t.elementType=e,t.type=i,t.lanes=c,t}function mn(e,t,r,i){return e=$t(7,e,i,t),e.lanes=r,e}function es(e,t,r,i){return e=$t(22,e,i,t),e.elementType=me,e.lanes=r,e.stateNode={isHidden:!1},e}function Za(e,t,r){return e=$t(6,e,null,t),e.lanes=r,e}function el(e,t,r){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nm(e,t,r,i,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Es(0),this.expirationTimes=Es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Es(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function tl(e,t,r,i,a,c,d,y,b){return e=new Nm(e,t,r,y,b),t===1?(t=1,c===!0&&(t|=8)):t=0,c=$t(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ma(c),e}function Pm(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function dd(e){if(!e)return Fr;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(vt(r))return Mc(e,r,t)}return t}function pd(e,t,r,i,a,c,d,y,b){return e=tl(r,i,!0,e,a,c,d,y,b),e.context=dd(null),r=e.current,i=yt(),a=Wr(r),c=hr(i,a),c.callback=t??null,$r(r,c,a),e.current.lanes=a,Zn(e,a,i),kt(e,i),e}function ts(e,t,r,i){var a=t.current,c=yt(),d=Wr(a);return r=dd(r),t.context===null?t.context=r:t.pendingContext=r,t=hr(c,d),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=$r(a,t,d),e!==null&&(Xt(e,a,d,c),Pi(e,a,d)),d}function rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function rl(e,t){fd(e,t),(e=e.alternate)&&fd(e,t)}function zm(){return null}var md=typeof reportError=="function"?reportError:function(e){console.error(e)};function nl(e){this._internalRoot=e}ns.prototype.render=nl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));ts(e,t,null,null)},ns.prototype.unmount=nl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){ts(null,e,null,null)}),t[ur]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gl();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Pr.length&&t!==0&&t<Pr[r].priority;r++);Pr.splice(r,0,e),r===0&&ec(e)}};function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hd(){}function Am(e,t,r,i,a){if(a){if(typeof i=="function"){var c=i;i=function(){var I=rs(d);c.call(I)}}var d=pd(t,i,e,0,null,!1,!1,"",hd);return e._reactRootContainer=d,e[ur]=d.current,mo(e.nodeType===8?e.parentNode:e),dn(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var y=i;i=function(){var I=rs(b);y.call(I)}}var b=tl(e,0,!1,null,null,!1,!1,"",hd);return e._reactRootContainer=b,e[ur]=b.current,mo(e.nodeType===8?e.parentNode:e),dn(function(){ts(t,b,r,i)}),b}function is(e,t,r,i,a){var c=r._reactRootContainer;if(c){var d=c;if(typeof a=="function"){var y=a;a=function(){var b=rs(d);y.call(b)}}ts(t,d,e,a)}else d=Am(r,t,e,a,i);return rs(d)}Kl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Jn(t.pendingLanes);r!==0&&(Is(t,r|1),kt(t,He()),(ve&6)===0&&(Mn=He()+500,Or()))}break;case 13:dn(function(){var i=mr(e,1);if(i!==null){var a=yt();Xt(i,e,1,a)}}),rl(e,1)}},Rs=function(e){if(e.tag===13){var t=mr(e,134217728);if(t!==null){var r=yt();Xt(t,e,134217728,r)}rl(e,134217728)}},Xl=function(e){if(e.tag===13){var t=Wr(e),r=mr(e,t);if(r!==null){var i=yt();Xt(r,e,t,i)}rl(e,t)}},Gl=function(){return je},Jl=function(e,t){var r=je;try{return je=e,t()}finally{je=r}},Kn=function(e,t,r){switch(t){case"input":if(ar(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var a=ki(i);if(!a)throw Error(l(90));br(i),ar(i,a)}}}break;case"textarea":Go(e,r);break;case"select":t=r.value,t!=null&&kr(e,!!r.multiple,t,!1)}},Ke=Ka,ct=dn;var Dm={usingClientEntryPoint:!1,Events:[yo,Tn,ki,de,$e,Ka]},No={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lm={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hl(e),e===null?null:e.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||zm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{ni=ss.inject(Lm),Zt=ss}catch{}}return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm,St.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ol(t))throw Error(l(200));return Pm(e,t,null,r)},St.createRoot=function(e,t){if(!ol(e))throw Error(l(299));var r=!1,i="",a=md;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=tl(e,1,!1,null,null,r,!1,i,a),e[ur]=t.current,mo(e.nodeType===8?e.parentNode:e),new nl(t)},St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Hl(t),e=e===null?null:e.stateNode,e},St.flushSync=function(e){return dn(e)},St.hydrate=function(e,t,r){if(!os(t))throw Error(l(200));return is(null,e,t,!0,r)},St.hydrateRoot=function(e,t,r){if(!ol(e))throw Error(l(405));var i=r!=null&&r.hydratedSources||null,a=!1,c="",d=md;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=pd(t,null,e,1,r??null,a,!1,c,d),e[ur]=t.current,mo(e),i)for(e=0;e<i.length;e++)r=i[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new ns(t)},St.render=function(e,t,r){if(!os(t))throw Error(l(200));return is(null,e,t,!1,r)},St.unmountComponentAtNode=function(e){if(!os(e))throw Error(l(40));return e._reactRootContainer?(dn(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[ur]=null})}),!0):!1},St.unstable_batchedUpdates=Ka,St.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!os(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return is(e,t,r,!1,i)},St.version="18.3.1-next-f1338f8080-20240426",St}var Sd;function np(){if(Sd)return al.exports;Sd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),al.exports=Bm(),al.exports}var jd;function Wm(){if(jd)return as;jd=1;var o=np();return as.createRoot=o.createRoot,as.hydrateRoot=o.hydrateRoot,as}var Vm=Wm();function ot({label:o,variant:s="neutral",size:l="md"}){const u=l==="sm"?{height:"24px",paddingLeft:"10px",paddingRight:"10px",fontSize:"12px",lineHeight:"18px",fontWeight:"500"}:{height:"28px",paddingLeft:"12px",paddingRight:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600"},p=s==="neutral"?{backgroundColor:"var(--card)",dotColor:"var(--muted-foreground)",textColor:"var(--foreground)"}:{backgroundColor:"var(--accent)",dotColor:"var(--primary)",textColor:"var(--accent-foreground)"};return n.jsxs("div",{style:{height:u.height,paddingLeft:u.paddingLeft,paddingRight:u.paddingRight,borderRadius:"999px",gap:"8px",backgroundColor:p.backgroundColor,border:"1px solid var(--border)",display:"inline-flex",alignItems:"center"},children:[n.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:p.dotColor}}),n.jsx("span",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:u.fontSize,lineHeight:u.lineHeight,fontWeight:u.fontWeight,color:p.textColor},children:o})]})}function Ye({label:o,variant:s="primary",size:l="md",onClick:u,disabled:p=!1,fullWidth:f=!1,type:m="button",style:g,...k}){const x={sm:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}}[l],w={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"var(--card)",color:"var(--foreground)",border:"1px solid var(--border)"},ghost:{backgroundColor:"transparent",color:"var(--foreground)",border:"none"}}[s];return n.jsx("button",{...k,type:m,onClick:u,disabled:p,style:{height:x.height,paddingLeft:x.paddingLeft,paddingRight:x.paddingRight,borderRadius:x.borderRadius,backgroundColor:p?"var(--muted)":w.backgroundColor,color:w.color,fontSize:x.fontSize,lineHeight:x.lineHeight,fontWeight:"600",border:p?"1px solid var(--border)":w.border,display:"inline-flex",alignItems:"center",justifyContent:"center",width:f?"100%":"auto",cursor:p?"not-allowed":"pointer",fontFamily:"Inter, system-ui, sans-serif",opacity:p?.65:1,...g},children:o})}const qm="/assets/Big%20Logo-Bdh1LtUa.svg",Ym="/assets/Logo%20Dark-BJGV7fxC.svg",Qm="2026-03-10-1";function op({size:o=32,variant:s="dark",showText:l=!0,href:u="/"}){const p=s==="light"?Ym:qm,f=s==="dark"?"#101828":"#FFFFFF",m=n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[n.jsx("div",{style:{width:`${o}px`,height:`${o}px`,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("img",{src:`${p}?v=${Qm}`,alt:"Vibe Station Logo",width:o,height:o,style:{width:`${o}px`,height:`${o}px`,objectFit:"contain",display:"block"}})}),l&&n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:o>=48?"24px":o>=32?"20px":"16px",lineHeight:o>=48?"32px":o>=32?"28px":"24px",fontWeight:"600",letterSpacing:"-0.02em",color:f},children:"VIBE STATION"})]});return u?n.jsx("a",{href:u,style:{textDecoration:"none",display:"inline-flex",cursor:"pointer"},children:m}):m}const Km="w-full mx-auto px-4 md:px-6 lg:px-8",Xm={wide:"max-w-[1200px]",standard:"max-w-[1080px]",narrow:"max-w-[860px]"};function Gm(o,s){return[Km,Xm[o],s].filter(Boolean).join(" ")}function ws({children:o,width:s="wide",className:l}){return n.jsx("div",{className:Gm(s,l),children:o})}function Jm({children:o,className:s}){return n.jsx(ws,{width:"wide",className:s,children:o})}function Zm({children:o,className:s}){return n.jsx(ws,{width:"standard",className:s,children:o})}function eh({children:o,className:s}){return n.jsx(ws,{width:"narrow",className:s,children:o})}const be=Object.assign(ws,{Wide:Jm,Standard:Zm,Narrow:eh}),ip="kz9z4f-2a.myshopify.com",sp="daf156f4e4046c726902bca5c28e9cbe",th="2026-01",ap="http://localhost:3001",Fo="/api/shopify",rh="false".toLowerCase()==="true",nh="X-Shopify-Storefront-Access-Token",wl="IN".toUpperCase(),lp="EN".toUpperCase(),oh=`https://${ip}/api/${th}/graphql.json`,cp="shopify_cart_id";class Le extends Error{constructor(s,l,u){super(s),this.code=l,this.field=u,this.name="StorefrontAPIError"}}const up=()=>sp.length>0,ih=()=>ip.length>0,sh=()=>ap.length>0&&Fo.length>0,ah=()=>Fo.startsWith("http://")||Fo.startsWith("https://")?Fo:`${ap.replace(/\/+$/,"")}/${Fo.replace(/^\/+/,"")}`,dp=()=>rh||!up()&&sh(),lh=()=>dp()?!0:ih()&&up();async function We(o,s={}){if(!lh())throw new Le("Shopify is not configured","SHOPIFY_NOT_CONFIGURED");let l;if(dp()?l=await fetch(ah(),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({query:o,variables:s})}):l=await fetch(oh,{method:"POST",headers:{"Content-Type":"application/json",[nh]:sp},body:JSON.stringify({query:o,variables:s})}),!l.ok)throw l.status===429?new Le("Rate limit exceeded","RATE_LIMIT"):new Le(`HTTP ${l.status}`,"HTTP_ERROR");const{data:u,errors:p}=await l.json();if(p&&p.length>0)throw new Le(p[0].message,"GRAPHQL_ERROR",p[0].field);if(!u)throw new Le("Missing response data","EMPTY_DATA");return u}function Il(o){var u,p,f;const s=o.featuredImage;if(s!=null&&s.url)return{url:s.url,altText:s.altText||o.title||"Product image"};const l=(f=(p=(u=o.images)==null?void 0:u.edges)==null?void 0:p[0])==null?void 0:f.node;return l!=null&&l.url?{url:l.url,altText:l.altText||o.title||"Product image"}:null}const ch=`
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
`,pp=`@inContext(country: ${wl}, language: ${lp})`,uh=`
  query ProductList(
    $first: Int = 24
    $after: String
    $sortKey: ProductSortKeys = BEST_SELLING
    $reverse: Boolean = false
    $query: String
  ) ${pp} {
    products(first: $first, after: $after, sortKey: $sortKey, reverse: $reverse, query: $query) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          ${ch}
        }
      }
    }
  }
`,dh=`
  query ProductDetail($handle: String!) ${pp} {
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
`,Un=`
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
`,ph=`
  mutation CartCreate($input: CartInput!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ${Un}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,fh=`
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${Un}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,mh=`
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${Un}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,hh=`
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ${Un}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,gh=`
  query Cart($id: ID!) {
    cart(id: $id) {
      ${Un}
    }
  }
`,yh=`
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ${Un}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,fp=o=>{var l;const s=(l=o.field)!=null&&l.length?` for ${o.field.join(".")}`:"";switch(o.code){case"INVALID":return`Shopify rejected the cart update${s}. ${o.message}`;case"LESS_THAN":return"Quantity is below the minimum allowed.";case"GREATER_THAN":return"Quantity exceeds the maximum allowed.";case"INVALID_MERCHANDISE_LINE":return"This product variant is unavailable.";case"MISSING_DISCOUNT_CODE":case"DISCOUNT_NOT_FOUND":return"That discount code could not be found.";case"CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE":return"This cart does not meet the discount requirements.";case"RELEASE_PHASE_NOT_STARTED":return"This product is not available yet.";case"TOO_MANY_LINE_ITEMS":return"Your cart has reached the item limit.";case"INVALID_DELIVERY_GROUP":return"Delivery details for this cart are invalid. Please try again.";case"BLANK":return`A required cart value is missing${s}.`;case"NOT_ENOUGH_IN_STOCK":return"There is not enough stock available for that quantity.";default:return o.message}},bs=(o,s)=>{const l=o[s];if(l.userErrors.length>0){const u=l.userErrors[0];throw new Le(fp(u),u.code||"CART_USER_ERROR",u.field)}if(!l.cart)throw new Le("Cart was not returned by Shopify","MISSING_CART");return l.cart};async function xh(o){return(await We(dh,{handle:o})).product}async function hs(o={}){const s=typeof o=="number"?{first:o}:o;return(await We(uh,{first:s.first??24,after:s.after??null,sortKey:s.sortKey??"BEST_SELLING",reverse:s.reverse??!1,query:s.query})).products}async function vh(o=[],s){const l=await We(ph,{input:{lines:o,buyerIdentity:{countryCode:wl,...s?{customerAccessToken:s}:{}}},country:wl,language:lp});return bs(l,"cartCreate")}async function wh(o,s){const l=await We(fh,{cartId:o,lines:s});return bs(l,"cartLinesAdd")}async function bh(o,s){const l=await We(mh,{cartId:o,lines:s});return bs(l,"cartLinesUpdate")}async function kh(o,s){const l=await We(hh,{cartId:o,lineIds:s});return bs(l,"cartLinesRemove")}async function Sh(o){return(await We(gh,{id:o})).cart}async function Cd(o,s){const u=(await We(yh,{cartId:o,buyerIdentity:s})).cartBuyerIdentityUpdate;if(u.userErrors.length>0){const p=u.userErrors[0];throw new Le(fp(p),p.code||"CART_USER_ERROR",p.field)}if(!u.cart)throw new Le("Cart was not returned by Shopify","MISSING_CART");return u.cart}const jh=()=>typeof window>"u"?null:window.localStorage.getItem(cp),Ch=o=>{typeof window>"u"||window.localStorage.setItem(cp,o)},Rl="customer_token",_l="token_expires_at",Th=`
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
`,Eh=`
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
`,mp=`
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
`,ks=()=>typeof window<"u",hp=o=>{if(!o)return!0;const s=Date.parse(o);return Number.isNaN(s)?!0:s<=Date.now()},Nl=o=>{ks()&&(window.localStorage.setItem(Rl,o.accessToken),window.localStorage.setItem(_l,o.expiresAt))},gp=()=>ks()?window.localStorage.getItem(Rl):null,yp=()=>ks()?window.localStorage.getItem(_l):null,Ih=o=>{var l;const s=(l=o.field)!=null&&l.length?` for ${o.field.join(".")}`:"";switch(o.code){case"ALREADY_ENABLED":return"An account with this email already exists.";case"BLANK":return`A required value is missing${s}.`;case"TAKEN":return`A customer already exists${s}.`;case"INVALID":return`Shopify rejected the value${s}. ${o.message}`;case"TOO_LONG":return`The value is too long${s}.`;case"UNIDENTIFIED_CUSTOMER":return"The email or password is incorrect.";case"TOO_MANY_FAILED_ATTEMPTS":return"Too many failed attempts. Please wait and try again.";case"CUSTOMER_DISABLED":return"This customer account is disabled.";case"BAD_DOMAIN":return`The email address domain is invalid${s}.`;case"TOKEN_INVALID":return"The customer session is invalid. Please sign in again.";case"CUSTOMER_RESET_TOKEN_INVALID":case"TOKEN_EXPIRED":return"This link has expired. Please request a new one.";case"PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE":return"Password cannot start or end with whitespace.";case"PHONE_NUMBER_ALREADY_USED":return"That phone number is already in use.";case"CUSTOMER_ADDRESS_NOT_FOUND":return"The selected address could not be found.";default:return o.message}},Rh=(o,s,l)=>{if(o instanceof Le){const u=o.code==="RATE_LIMIT"?"Too many requests. Please try again in a moment.":o.code==="HTTP_ERROR"?"Shopify could not be reached. Please try again.":(o.code==="GRAPHQL_ERROR",o.message||l);return{type:o.code==="HTTP_ERROR"||o.code==="RATE_LIMIT"?"network":"api",message:u,code:o.code||s,field:o.field}}return o instanceof TypeError?{type:"network",message:"Network request failed while contacting Shopify.",code:s}:{type:"unknown",message:l,code:s}},bl=o=>({ok:!1,data:null,error:o}),Pl=o=>({ok:!0,data:o,error:null}),Xr=(o,s)=>{if(o.length===0)return;const l=o[0];throw new Le(Ih(l),l.code||s,l.field)},_h=()=>{const o=gp(),s=yp();return!o||!s?(kl(),bl({type:"session",message:"No active customer session was found.",code:"CUSTOMER_SESSION_MISSING"})):hp(s)?(kl(),bl({type:"session",message:"The customer session has expired. Please sign in again.",code:"CUSTOMER_SESSION_EXPIRED"})):Pl(o)},Ut=async(o,s,l)=>{try{return Pl(await o())}catch(u){return bl(Rh(u,s,l))}};function kl(){ks()&&(window.localStorage.removeItem(Rl),window.localStorage.removeItem(_l))}function Yo(){const o=gp(),s=yp();return{accessToken:o,expiresAt:s,isExpired:hp(s)}}function ul(){kl()}const Nh=`
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
`,Ph=`
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
`,zh=`
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
`,Ah=`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,Dh=`
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
`,Lh=`
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ${Th}
    }
  }
`,Fh=`
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
            ${Eh}
          }
        }
      }
    }
  }
`,Oh=`
  query getOrderDetail($customerAccessToken: String!, $orderId: ID!) {
    customer(customerAccessToken: $customerAccessToken) {
      order(id: $orderId) {
        ${mp}
      }
    }
  }
`,Mh=`
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
            ${mp}
          }
        }
      }
    }
  }
`,$h=`
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
`,Hh=`
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
`,Bh=`
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
`;async function Wh(o){return Ut(async()=>{const s=await We(Nh,{input:o});if(Xr(s.customerCreate.customerUserErrors,"CUSTOMER_CREATE_ERROR"),!s.customerCreate.customer)throw new Le("Customer was not returned by Shopify","MISSING_CUSTOMER");return s.customerCreate.customer},"CUSTOMER_CREATE_ERROR","Unable to create the customer account.")}async function Td(o,s){return Ut(async()=>{const l=await We(Ph,{input:{email:o,password:s}});if(Xr(l.customerAccessTokenCreate.customerUserErrors,"CUSTOMER_LOGIN_ERROR"),!l.customerAccessTokenCreate.customerAccessToken)throw new Le("Customer access token was not returned by Shopify","MISSING_CUSTOMER_TOKEN");return Nl(l.customerAccessTokenCreate.customerAccessToken),l.customerAccessTokenCreate.customerAccessToken},"CUSTOMER_LOGIN_ERROR","Unable to sign in the customer.")}async function xp(o){const s=o?Pl(o):_h();return s.ok?Ut(async()=>{const l=await We(zh,{customerAccessToken:s.data});if(l.customerAccessTokenRenew.userErrors.length>0){const u=l.customerAccessTokenRenew.userErrors[0];throw new Le(u.message,"CUSTOMER_TOKEN_RENEW_ERROR",u.field)}if(!l.customerAccessTokenRenew.customerAccessToken)throw new Le("Customer access token renewal did not return a token","MISSING_CUSTOMER_TOKEN");return Nl(l.customerAccessTokenRenew.customerAccessToken),l.customerAccessTokenRenew.customerAccessToken},"CUSTOMER_TOKEN_RENEW_ERROR","Unable to renew the customer session."):s}async function Vh(o){return Ut(async()=>{const s=await We(Ah,{email:o});return Xr(s.customerRecover.customerUserErrors,"CUSTOMER_RECOVER_ERROR"),{email:o,submitted:!0}},"CUSTOMER_RECOVER_ERROR","Unable to request a password reset.")}async function qh(o,s){return Ut(async()=>{const l=await We(Dh,{resetUrl:o,password:s});if(Xr(l.customerResetByUrl.customerUserErrors,"CUSTOMER_RESET_ERROR"),!l.customerResetByUrl.customerAccessToken)throw new Le("Customer password reset did not return a new access token","MISSING_CUSTOMER_TOKEN");return Nl(l.customerResetByUrl.customerAccessToken),l.customerResetByUrl.customerAccessToken},"CUSTOMER_RESET_ERROR","Unable to reset the customer password.")}async function Mo(o){return Ut(async()=>(await We(Lh,{customerAccessToken:o})).customer,"CUSTOMER_FETCH_ERROR","Unable to load customer data.")}async function Yh(o,s=10,l){return Ut(async()=>{var p;return((p=(await We(Fh,{customerAccessToken:o,first:s,after:l||null})).customer)==null?void 0:p.orders)||null},"CUSTOMER_ORDERS_FETCH_ERROR","Unable to load customer orders.")}async function Ed(o,s){return Ut(async()=>{var u,p,f;try{const m=await We(Oh,{customerAccessToken:o,orderId:s});if((u=m.customer)!=null&&u.order)return m.customer.order}catch(m){if(!(m instanceof Le)||m.code!=="GRAPHQL_ERROR")throw m}let l;for(let m=0;m<5;m+=1){const k=(p=(await We(Mh,{customerAccessToken:o,first:50,after:l||null})).customer)==null?void 0:p.orders,x=((f=k==null?void 0:k.edges.find(w=>w.node.id===s))==null?void 0:f.node)||null;if(x)return x;if(!(k!=null&&k.pageInfo.hasNextPage)||!k.pageInfo.endCursor)break;l=k.pageInfo.endCursor}return null},"CUSTOMER_ORDER_FETCH_ERROR","Unable to load the order.")}async function Qh(o,s){return Ut(async()=>{const l=await We($h,{customerAccessToken:o,address:s});if(Xr(l.customerAddressCreate.customerUserErrors,"CUSTOMER_ADDRESS_CREATE_ERROR"),!l.customerAddressCreate.customerAddress)throw new Le("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressCreate.customerAddress},"CUSTOMER_ADDRESS_CREATE_ERROR","Unable to create the customer address.")}async function Kh(o,s,l){return Ut(async()=>{const u=await We(Hh,{customerAccessToken:o,id:s,address:l});if(Xr(u.customerAddressUpdate.customerUserErrors,"CUSTOMER_ADDRESS_UPDATE_ERROR"),!u.customerAddressUpdate.customerAddress)throw new Le("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return u.customerAddressUpdate.customerAddress},"CUSTOMER_ADDRESS_UPDATE_ERROR","Unable to update the customer address.")}async function Xh(o,s){return Ut(async()=>{const l=await We(Uh,{customerAccessToken:o,id:s});if(Xr(l.customerAddressDelete.customerUserErrors,"CUSTOMER_ADDRESS_DELETE_ERROR"),!l.customerAddressDelete.deletedCustomerAddressId)throw new Le("Deleted customer address id was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressDelete.deletedCustomerAddressId},"CUSTOMER_ADDRESS_DELETE_ERROR","Unable to delete the customer address.")}async function Gh(o,s){return Ut(async()=>{const l=await We(Bh,{customerAccessToken:o,addressId:s});if(Xr(l.customerDefaultAddressUpdate.customerUserErrors,"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR"),!l.customerDefaultAddressUpdate.customer)throw new Le("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerDefaultAddressUpdate.customer.defaultAddress},"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR","Unable to update the default address.")}const ir=(o,s)=>{const l=Number(o);return!Number.isFinite(l)||!s?o||"":new Intl.NumberFormat("en-US",{style:"currency",currency:s}).format(l)},dl=(o,s)=>({id:o.id,email:o.email,firstName:o.firstName||"",lastName:o.lastName||"",phone:o.phone||void 0,acceptsMarketing:!1,createdAt:s||new Date().toISOString()}),Id=o=>{var l;const s=((l=o.defaultAddress)==null?void 0:l.id)||null;return o.addresses.edges.map(u=>u.node).filter(u=>!!(u!=null&&u.id)).map(u=>({id:u.id,firstName:u.firstName||"",lastName:u.lastName||"",company:u.company||void 0,address1:u.address1||"",address2:u.address2||void 0,city:u.city||"",province:u.province||"",zip:u.zip||"",country:u.country||"",phone:u.phone||void 0,isDefault:u.id===s}))},Jh=o=>o?o.edges.map(s=>{var l,u;return{id:s.node.id,orderNumber:String(s.node.orderNumber),createdAt:s.node.processedAt,totalPrice:ir((l=s.node.totalPriceV2)==null?void 0:l.amount,(u=s.node.totalPriceV2)==null?void 0:u.currencyCode),fulfillmentStatus:s.node.fulfillmentStatus==="FULFILLED"||s.node.fulfillmentStatus==="UNFULFILLED"||s.node.fulfillmentStatus==="PARTIALLY_FULFILLED"||s.node.fulfillmentStatus==="CANCELLED"?s.node.fulfillmentStatus:"UNFULFILLED",lineItems:s.node.lineItems.edges.map((p,f)=>({id:`${s.node.id}-${f}`,title:p.node.title,quantity:p.node.quantity,price:""}))}}):[],Rd=o=>{if(!(!(o!=null&&o.address1)||!o.city||!o.country))return{name:o.name||void 0,address1:o.address1,address2:o.address2||void 0,city:o.city,province:o.province||void 0,zip:o.zip||void 0,country:o.country,phone:o.phone||void 0}},_d=o=>{var s,l,u,p,f,m,g,k,x,w;return o?{id:o.id,name:o.name||`Order #${o.orderNumber}`,orderNumber:String(o.orderNumber),createdAt:o.processedAt,financialStatus:o.financialStatus||void 0,fulfillmentStatus:o.fulfillmentStatus||void 0,subtotalPrice:ir((s=o.subtotalPrice)==null?void 0:s.amount,(l=o.subtotalPrice)==null?void 0:l.currencyCode),shippingPrice:ir((u=o.totalShippingPrice)==null?void 0:u.amount,(p=o.totalShippingPrice)==null?void 0:p.currencyCode),taxPrice:ir((f=o.totalTax)==null?void 0:f.amount,(m=o.totalTax)==null?void 0:m.currencyCode),totalPrice:ir((g=o.totalPrice)==null?void 0:g.amount,(k=o.totalPrice)==null?void 0:k.currencyCode),refundedPrice:ir((x=o.totalRefunded)==null?void 0:x.amount,(w=o.totalRefunded)==null?void 0:w.currencyCode),shippingAddress:Rd(o.shippingAddress),billingAddress:Rd(o.billingAddress),discounts:o.discountApplications.nodes.map(h=>({allocationMethod:h.allocationMethod||void 0,targetSelection:h.targetSelection||void 0,value:h.value&&"currencyCode"in h.value?ir(h.value.amount,h.value.currencyCode):h.value&&"percentage"in h.value?`${h.value.percentage}%`:""})),fulfillments:o.successfulFulfillments.map(h=>({trackingCompany:h.trackingCompany||void 0,tracking:h.trackingInfo.map(v=>({number:v.number||void 0,url:v.url||void 0})),items:h.fulfillmentLineItems.nodes.map(v=>{var T,R,P;return{title:((T=v.lineItem)==null?void 0:T.title)||"Line item",quantity:v.quantity,sku:((P=(R=v.lineItem)==null?void 0:R.variant)==null?void 0:P.sku)||void 0}})})),lineItems:o.lineItems.nodes.map((h,v)=>{var T,R,P,z,ie,le,ae,J,ne,se,ye,Ce,Q,K,$,ce,he;return{id:`${o.id}-${v}`,title:h.title,quantity:h.quantity,unitPrice:ir((R=(T=h.variant)==null?void 0:T.price)==null?void 0:R.amount,(z=(P=h.variant)==null?void 0:P.price)==null?void 0:z.currencyCode),discountedTotalPrice:ir((ie=h.discountedTotalPrice)==null?void 0:ie.amount,(le=h.discountedTotalPrice)==null?void 0:le.currencyCode),originalTotalPrice:ir((ae=h.originalTotalPrice)==null?void 0:ae.amount,(J=h.originalTotalPrice)==null?void 0:J.currencyCode),variantTitle:((ne=h.variant)==null?void 0:ne.title)||void 0,sku:((se=h.variant)==null?void 0:se.sku)||void 0,imageUrl:((Ce=(ye=h.variant)==null?void 0:ye.image)==null?void 0:Ce.url)||void 0,imageAlt:((K=(Q=h.variant)==null?void 0:Q.image)==null?void 0:K.altText)||void 0,productHandle:((ce=($=h.variant)==null?void 0:$.product)==null?void 0:ce.handle)||void 0,selectedOptions:((he=h.variant)==null?void 0:he.selectedOptions)||[]}}),statusUrl:o.statusUrl||void 0,customerUrl:o.customerUrl||void 0}:null},Nd=o=>({firstName:o.firstName||void 0,lastName:o.lastName||void 0,company:o.company||void 0,address1:o.address1||void 0,address2:o.address2||void 0,city:o.city||void 0,province:o.province||void 0,zip:o.zip||void 0,country:o.country||void 0,phone:o.phone||void 0}),Pd=!0,$o="account:test-customer",Zh="test-customer-token",eg=1e3*60*60*24*30;function Qr(o,s){const l=new Error(o);return l.code=s,l}const zl=()=>typeof window<"u",tg=o=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o),rg=o=>{const s=o.split("@")[0]||"test",[l,...u]=s.split(/[._-]+/).map(g=>g.trim()).filter(Boolean),p=g=>g.charAt(0).toUpperCase()+g.slice(1).toLowerCase(),f=l?p(l):"Test",m=u.length>0?u.map(p).join(" "):"User";return{id:`test-${o.toLowerCase()}`,email:o,firstName:f,lastName:m,phone:void 0,acceptsMarketing:!1,createdAt:new Date().toISOString()}},zd=o=>{zl()&&window.localStorage.setItem($o,JSON.stringify(o))},pl=()=>{if(!zl())return null;const o=window.localStorage.getItem($o);if(!o)return null;try{const s=JSON.parse(o),l=Date.parse(s.expiresAt);return!s.accessToken||!s.customer||!s.expiresAt||Number.isNaN(l)||l<=Date.now()?(window.localStorage.removeItem($o),null):s}catch{return window.localStorage.removeItem($o),null}},ng=()=>{zl()&&window.localStorage.removeItem($o)};function og(){const[o,s]=_.useState(null),[l,u]=_.useState(null),[p,f]=_.useState(!0),m=async()=>{{const T=pl();if(!T){s(null),u(null);return}s(T.customer),u(T.accessToken);return}};return _.useEffect(()=>{let T=!1;return(async()=>{var P;try{if(Pd){const ae=pl();T||(s((ae==null?void 0:ae.customer)||null),u((ae==null?void 0:ae.accessToken)||null));return}const z=Yo();if(!z.accessToken){T||(s(null),u(null),f(!1));return}const ie=await xp(z.accessToken);if(!ie.ok){T||(ul(),s(null),u(null));return}const le=await Mo(ie.data.accessToken);if(!le.ok||!le.data)throw new Error(((P=le.error)==null?void 0:P.message)||"Unable to load customer data.");T||(s(dl(le.data)),u(ie.data.accessToken))}catch{T||(ul(),s(null),u(null))}finally{T||f(!1)}})(),()=>{T=!0}},[]),{customer:o,accessToken:l,isAuthenticated:!!(o&&l),isLoading:p,login:async(T,R)=>{f(!0);try{if(Pd){const ie=T.trim(),le=R.trim();if(!tg(ie)||le.length===0)throw Qr("Enter a valid email address and password.","TEST_LOGIN_VALIDATION_ERROR");const ae={accessToken:`${Zh}-${Date.now()}`,expiresAt:new Date(Date.now()+eg).toISOString(),customer:rg(ie)};zd(ae),s(ae.customer),u(ae.accessToken);return}const P=await Td(T,R);if(!P.ok)throw Qr(P.error.message||"Unable to sign in.",P.error.code);const z=await Mo(P.data.accessToken);if(!z.ok||!z.data)throw Qr(z.error.message||"Unable to load customer data.",z.error.code);s(dl(z.data)),u(P.data.accessToken)}finally{f(!1)}},register:async T=>{f(!0);try{const R=await Wh(T);if(!R.ok)throw Qr(R.error.message||"Unable to create the account.",R.error.code);const P=await Td(T.email,T.password);if(!P.ok)throw Qr(P.error.message||"Account created but sign-in failed.",P.error.code);const z=await Mo(P.data.accessToken);if(!z.ok||!z.data)throw Qr(z.error.message||"Unable to load customer data.",z.error.code);s(dl(z.data,new Date().toISOString())),u(P.data.accessToken)}finally{f(!1)}},logout:()=>{ng(),ul(),s(null),u(null)},updateProfile:async T=>{{const R=pl();if(!R)throw new Error("No active customer session was found.");const P={...R.customer,email:T.email??R.customer.email,firstName:T.firstName??R.customer.firstName,lastName:T.lastName??R.customer.lastName,phone:T.phone??R.customer.phone};zd({...R,customer:P}),s(P);return}},refreshCustomerData:m,requestPasswordReset:async T=>{const R=await Vh(T);if(!R.ok){if(R.error.code==="UNIDENTIFIED_CUSTOMER")return;throw Qr(R.error.message||"Unable to send the password reset email.",R.error.code)}},resetPassword:async(T,R)=>{const P=await qh(T,R);if(!P.ok)throw Qr(P.error.message||"Unable to reset the password.",P.error.code)}}}function hn(o,s){const l=new Error(o);return l.code=s,l}function Me(o){return(o==null?void 0:o.trim().toLowerCase().replace(/\s+/g," "))||""}function ig(o,s){return Me(o.firstName)===Me(s.firstName)&&Me(o.lastName)===Me(s.lastName)&&Me(o.company)===Me(s.company)&&Me(o.address1)===Me(s.address1)&&Me(o.address2)===Me(s.address2)&&Me(o.city)===Me(s.city)&&Me(o.province)===Me(s.province)&&Me(o.zip)===Me(s.zip)&&Me(o.country)===Me(s.country)&&Me(o.phone)===Me(s.phone)}function sg(o,s){const l=Me(o);return Me(s)==="taken"&&l.includes("address")&&(l.includes("another customer")||l.includes("other customer"))}function ag(){const{accessToken:o,isAuthenticated:s}=Bt(),[l,u]=_.useState([]),[p,f]=_.useState(!0),[m,g]=_.useState(!1),[k,x]=_.useState(null),w=o||Yo().accessToken,h=async()=>{var T,R;if(!w||!s){u([]),f(!1);return}f(!0),x(null);try{const P=await Mo(w);if(!P.ok||!P.data)throw hn(((T=P.error)==null?void 0:T.message)||"Unable to load addresses.",(R=P.error)==null?void 0:R.code);u(Id(P.data))}catch(P){x(P instanceof Error?P.message:"Unable to load addresses.")}finally{f(!1)}};_.useEffect(()=>{h()},[w,s]);const v=async T=>{g(!0),x(null);try{await T(),await h()}catch(R){const P=R instanceof Error?R.message:"Unable to update addresses.";throw x(P),R}finally{g(!1)}};return{addresses:l,isLoading:p,isSaving:m,error:k,refresh:h,createAddress:async T=>{if(!w)throw new Error("No active customer session was found.");await v(async()=>{const R=await Qh(w,Nd(T));if(!R.ok){if(!sg(R.error.message,R.error.code))throw hn(R.error.message||"Unable to create address.",R.error.code);const P=await Mo(w);if(!P.ok||!P.data||!Id(P.data).find(le=>ig(le,T)))throw hn(R.error.message||"Unable to create address.",R.error.code)}})},editAddress:async T=>{if(!w)throw new Error("No active customer session was found.");await v(async()=>{const R=await Kh(w,T.id,Nd(T));if(!R.ok)throw hn(R.error.message||"Unable to update address.",R.error.code)})},removeAddress:async T=>{if(!w)throw new Error("No active customer session was found.");await v(async()=>{const R=await Xh(w,T);if(!R.ok)throw hn(R.error.message||"Unable to delete address.",R.error.code)})},makeDefaultAddress:async T=>{if(!w)throw new Error("No active customer session was found.");await v(async()=>{const R=await Gh(w,T);if(!R.ok)throw hn(R.error.message||"Unable to set the default address.",R.error.code)})}}}function lg(o){const{accessToken:s,isAuthenticated:l}=Bt(),[u,p]=_.useState(null),[f,m]=_.useState(!0),[g,k]=_.useState(null),x=s||Yo().accessToken;return _.useEffect(()=>{let w=!1;return(async()=>{if(!o){p(null),k("Order not found."),m(!1);return}if(!x||!l){p(null),m(!1);return}m(!0),k(null);try{const v=await Ed(x,o);if(!v.ok)throw new Error(v.error.message||"Unable to load the order.");if(!w){const T=_d(v.data);p(T),k(T?null:"Order not found.")}}catch(v){w||(p(null),k(v instanceof Error?v.message:"Unable to load the order."))}finally{w||m(!1)}})(),()=>{w=!0}},[o,x,l]),{order:u,isLoading:f,error:g,refresh:async()=>{if(!(!o||!x||!l)){m(!0),k(null);try{const w=await Ed(x,o);if(!w.ok)throw new Error(w.error.message||"Unable to load the order.");const h=_d(w.data);p(h),k(h?null:"Order not found.")}catch(w){p(null),k(w instanceof Error?w.message:"Unable to load the order.")}finally{m(!1)}}}}}function cg(){const{accessToken:o,isAuthenticated:s}=Bt(),[l,u]=_.useState([]),[p,f]=_.useState(null),[m,g]=_.useState(!0),[k,x]=_.useState(!1),[w,h]=_.useState(null),v=o||Yo().accessToken,T=async(R,P=!1)=>{if(!v||!s){u([]),f(null),g(!1);return}P?x(!0):g(!0),h(null);try{const z=await Yh(v,10,R);if(!z.ok)throw new Error(z.error.message||"Unable to load orders.");const ie=Jh(z.data);u(le=>P?[...le,...ie]:ie),f(z.data?{hasNextPage:z.data.pageInfo.hasNextPage,hasPreviousPage:z.data.pageInfo.hasPreviousPage,startCursor:z.data.pageInfo.startCursor,endCursor:z.data.pageInfo.endCursor}:null)}catch(z){h(z instanceof Error?z.message:"Unable to load orders.")}finally{g(!1),x(!1)}};return _.useEffect(()=>{T()},[v,s]),{orders:l,pageInfo:p,hasMore:!!(p!=null&&p.hasNextPage&&(p!=null&&p.endCursor)),isLoading:m,isLoadingMore:k,error:w,refresh:async()=>T(),loadMore:async()=>{p!=null&&p.endCursor&&await T(p.endCursor,!0)}}}const vp=_.createContext(null);function Bt(){const o=_.useContext(vp);if(!o)throw new Error("useAuth must be used within an AuthProvider");return o}function ug({children:o}){const s=og(),l={customer:s.customer,accessToken:s.accessToken,isAuthenticated:s.isAuthenticated,isLoading:s.isLoading,login:async(u,p)=>{await s.login(u,p)},register:async u=>{await s.register(u)},logout:()=>{s.logout()},updateProfile:async u=>{await s.updateProfile(u)},refreshCustomerData:async()=>{await s.refreshCustomerData()},requestPasswordReset:async u=>{await s.requestPasswordReset(u)},resetPassword:async(u,p)=>{await s.resetPassword(u,p)}};return n.jsx(vp.Provider,{value:l,children:o})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pg=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,l,u)=>u?u.toUpperCase():l.toLowerCase()),Ad=o=>{const s=pg(o);return s.charAt(0).toUpperCase()+s.slice(1)},wp=(...o)=>o.filter((s,l,u)=>!!s&&s.trim()!==""&&u.indexOf(s)===l).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=_.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:p="",children:f,iconNode:m,...g},k)=>_.createElement("svg",{ref:k,...fg,width:s,height:s,stroke:o,strokeWidth:u?Number(l)*24/Number(s):l,className:wp("lucide",p),...g},[...m.map(([x,w])=>_.createElement(x,w)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(o,s)=>{const l=_.forwardRef(({className:u,...p},f)=>_.createElement(mg,{ref:f,iconNode:s,className:wp(`lucide-${dg(Ad(o))}`,`lucide-${o}`,u),...p}));return l.displayName=Ad(o),l};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Al=ke("arrow-left",hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],bp=ke("check",gg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],xg=ke("chevron-down",yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],wg=ke("chevron-right",vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],kg=ke("circle-alert",bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],jg=ke("circle-check-big",Sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Tg=ke("circle-check",Cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Ig=ke("circle-x",Eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],_g=ke("ellipsis-vertical",Rg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Pg=ke("external-link",Ng);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Ag=ke("eye-off",zg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Lg=ke("eye",Dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],kp=ke("info",Fg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Mg=ke("loader-circle",Og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Hg=ke("log-out",$g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Bg=ke("mail",Ug);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Dl=ke("map-pin",Wg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],qg=ke("menu",Vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Sp=ke("moon",Yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Bn=ke("package",Qg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Xg=ke("pen",Kg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Jg=ke("phone",Gg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Dd=ke("plus",Zg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],ty=ke("refresh-ccw",ey);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],ny=ke("search",ry);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],iy=ke("shield",oy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],jp=ke("sun",sy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ly=ke("triangle-alert",ay);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],uy=ke("truck",cy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Cp=ke("user",dy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ll=ke("x",py);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],my=ke("zap",fy);function Pe({label:o,error:s,helperText:l,showPasswordToggle:u,type:p="text",disabled:f,...m}){const[g,k]=_.useState(!1),[x,w]=_.useState(!1),h=u&&g?"text":p;return n.jsxs("div",{style:{width:"100%"},children:[n.jsx("label",{htmlFor:m.id,style:{display:"block",fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--account-text)",marginBottom:"6px",fontFamily:"Inter, system-ui, sans-serif"},children:o}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx("input",{...m,type:h,disabled:f,onFocus:v=>{var T;w(!0),(T=m.onFocus)==null||T.call(m,v)},onBlur:v=>{var T;w(!1),(T=m.onBlur)==null||T.call(m,v)},style:{width:"100%",height:"44px",padding:"10px 14px",paddingRight:u?"44px":"14px",fontSize:"16px",lineHeight:"24px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:f?"var(--account-input-disabled-text)":"var(--account-input-text)",backgroundColor:f?"var(--account-input-disabled-bg)":"var(--account-input-bg)",border:`1px solid ${s?"var(--account-error-border)":x?"var(--border-focus)":"var(--account-input-border)"}`,borderRadius:"10px",outline:"none",boxShadow:x&&!s?"0 0 0 2px var(--account-focus-ring)":"none",cursor:f?"not-allowed":"text",transition:"all 0.15s ease"}}),u&&n.jsx("button",{type:"button",onClick:()=>k(!g),disabled:f,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:"4px",cursor:f?"not-allowed":"pointer",color:"var(--account-subtext)",display:"flex",alignItems:"center",justifyContent:"center",opacity:f?.4:1},"aria-label":g?"Hide password":"Show password",children:g?n.jsx(Ag,{size:20}):n.jsx(Lg,{size:20})})]}),s&&n.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-error-text)",fontFamily:"Inter, system-ui, sans-serif"},children:s}),!s&&l&&n.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:l})]})}function Je({variant:o="primary",size:s="md",isLoading:l=!1,disabled:u,children:p,...f}){const m=u||l,g={sm:{height:"36px",padding:"0 12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",padding:"0 16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",padding:"0 20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}},k={primary:{backgroundColor:"var(--account-link)",color:"var(--text-inverse)",border:"none"},secondary:{backgroundColor:"var(--account-card-bg)",color:"var(--account-title)",border:"1px solid var(--account-input-border)"},ghost:{backgroundColor:"transparent",color:"var(--account-title)",border:"none"},destructive:{backgroundColor:"var(--account-error-border)",color:"var(--text-inverse)",border:"none"}},x=g[s],w=k[o];return n.jsxs("button",{...f,disabled:m,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, system-ui, sans-serif",fontWeight:"600",cursor:m?"not-allowed":"pointer",opacity:m?.4:1,transition:"all 0.15s ease",position:"relative",whiteSpace:"nowrap",...x,...w,...f.style},onMouseEnter:h=>{!m&&o!=="ghost"&&(h.currentTarget.style.filter="brightness(0.94)")},onMouseLeave:h=>{h.currentTarget.style.filter="none"},onMouseDown:h=>{m||(h.currentTarget.style.filter="brightness(0.88)")},onMouseUp:h=>{m||(h.currentTarget.style.filter="brightness(0.94)")},children:[l&&n.jsx(Mg,{size:s==="sm"?14:s==="lg"?18:16,style:{animation:"spin 1s linear infinite"}}),p,n.jsx("style",{children:`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `})]})}function Ht({type:o,children:s}){const u={success:{backgroundColor:"var(--account-success-bg)",borderColor:"var(--account-success-border)",textColor:"var(--account-success-text)",icon:jg},error:{backgroundColor:"var(--account-error-bg)",borderColor:"var(--account-error-border)",textColor:"var(--account-error-text)",icon:Ig},warning:{backgroundColor:"var(--account-warning-bg)",borderColor:"var(--account-warning-border)",textColor:"var(--account-warning-text)",icon:kg},info:{backgroundColor:"var(--account-info-bg)",borderColor:"var(--account-info-border)",textColor:"var(--account-info-text)",icon:kp}}[o],p=u.icon;return n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px 16px",backgroundColor:u.backgroundColor,border:`1px solid ${u.borderColor}`,borderRadius:"10px"},children:[n.jsx(p,{size:20,style:{color:u.textColor,flexShrink:0,marginTop:"2px"}}),n.jsx("div",{style:{flex:1,fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:u.textColor,fontFamily:"Inter, system-ui, sans-serif"},children:s})]})}function ht(o){typeof window>"u"||(window.location.href=o)}const hy=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function gy(){const{login:o}=Bt(),[s,l]=_.useState(""),[u,p]=_.useState(""),[f,m]=_.useState({}),[g,k]=_.useState(!1),x=()=>{const h={},v=s.trim(),T=u.trim();return v?hy.test(v)||(h.email="Please enter a valid email address"):h.email="Email is required",T||(h.password="Password is required"),m(h),Object.keys(h).length===0},w=async h=>{if(h.preventDefault(),!!x()){k(!0),m({});try{await o(s,u),ht("/account")}catch(v){m({general:v instanceof Error?v.message:"Invalid email or password"})}finally{k(!1)}}};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:n.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[n.jsx("h1",{"data-testid":"login-page-heading",style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Welcome back"}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:"Sign in to your account to continue"})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:[f.general&&n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx(Ht,{type:"error",children:f.general})}),n.jsxs("form",{onSubmit:w,children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[n.jsx(Pe,{id:"email",label:"Email",type:"email",value:s,onChange:h=>l(h.target.value),error:f.email,placeholder:"you@example.com",autoComplete:"email",disabled:g}),n.jsx(Pe,{id:"password",label:"Password",type:"password",value:u,onChange:h=>p(h.target.value),error:f.password,placeholder:"Enter your password",autoComplete:"current-password",showPasswordToggle:!0,disabled:g})]}),n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx("button",{type:"button",onClick:()=>ht("/account/password-reset"),disabled:g,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:g?"not-allowed":"pointer",textDecoration:"none",opacity:g?.4:1},onMouseEnter:h=>!g&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Forgot password?"})}),n.jsx(Je,{type:"submit",variant:"primary",size:"lg","data-testid":"login-submit",isLoading:g,style:{width:"100%",marginBottom:"16px"},children:"Sign in"}),n.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Don't have an account?"," ",n.jsx("button",{type:"button",onClick:()=>ht("/account/register"),disabled:g,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:g?"not-allowed":"pointer",textDecoration:"none",opacity:g?.4:1},onMouseEnter:h=>!g&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Create account"})]})]})]}),n.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"var(--account-info-bg)",border:"1px solid var(--account-info-border)",borderRadius:"12px",textAlign:"center"},children:n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-info-text)",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Test mode: any valid email and password format can sign in"})})]})})}function yy(){const{register:o}=Bt(),[s,l]=_.useState({firstName:"",lastName:"",email:"",phone:"",password:""}),[u,p]=_.useState({}),[f,m]=_.useState(!1),g=()=>{const w={};return s.firstName.trim()||(w.firstName="First name is required"),s.lastName.trim()||(w.lastName="Last name is required"),s.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)||(w.email="Please enter a valid email address"):w.email="Email is required",s.phone&&!/^[\d\s\-\+\(\)]+$/.test(s.phone)&&(w.phone="Please enter a valid phone number"),s.password?s.password.length<8&&(w.password="Password must be at least 8 characters"):w.password="Password is required",p(w),Object.keys(w).length===0},k=async w=>{if(w.preventDefault(),!!g()){m(!0),p({});try{await o(s),ht("/account")}catch(h){p({general:h instanceof Error?h.message:"Registration failed"})}finally{m(!1)}}},x=(w,h)=>{l(v=>({...v,[w]:h})),u[w]&&p(v=>({...v,[w]:""}))};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:n.jsxs("div",{style:{width:"100%",maxWidth:"540px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[n.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Create your account"}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:"Join us to start shopping and manage your orders"})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:[u.general&&n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx(Ht,{type:"error",children:u.general})}),n.jsxs("form",{onSubmit:k,children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[n.jsx(Pe,{id:"firstName",label:"First name",type:"text",value:s.firstName,onChange:w=>x("firstName",w.target.value),error:u.firstName,placeholder:"Sarah",autoComplete:"given-name",disabled:f}),n.jsx(Pe,{id:"lastName",label:"Last name",type:"text",value:s.lastName,onChange:w=>x("lastName",w.target.value),error:u.lastName,placeholder:"Chen",autoComplete:"family-name",disabled:f})]}),n.jsx(Pe,{id:"email",label:"Email",type:"email",value:s.email,onChange:w=>x("email",w.target.value),error:u.email,placeholder:"you@example.com",autoComplete:"email",disabled:f}),n.jsx(Pe,{id:"phone",label:"Phone (optional)",type:"tel",value:s.phone,onChange:w=>x("phone",w.target.value),error:u.phone,placeholder:"+1 (555) 123-4567",autoComplete:"tel",disabled:f}),n.jsx(Pe,{id:"password",label:"Password",type:"password",value:s.password,onChange:w=>x("password",w.target.value),error:u.password,helperText:u.password?void 0:"Must be at least 8 characters",placeholder:"Create a password",autoComplete:"new-password",showPasswordToggle:!0,disabled:f})]}),n.jsx(Je,{type:"submit",variant:"primary",size:"lg",isLoading:f,style:{width:"100%",marginBottom:"16px"},children:"Create account"}),n.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Already have an account?"," ",n.jsx("button",{type:"button",onClick:()=>ht("/account/login"),disabled:f,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:f?"not-allowed":"pointer",textDecoration:"none",opacity:f?.4:1},onMouseEnter:w=>!f&&(w.currentTarget.style.textDecoration="underline"),onMouseLeave:w=>w.currentTarget.style.textDecoration="none",children:"Sign in"})]})]})]})]})})}function xy(){const{requestPasswordReset:o}=Bt(),[s,l]=_.useState(""),[u,p]=_.useState(""),[f,m]=_.useState(!1),[g,k]=_.useState(!1),x=h=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h),w=async h=>{if(h.preventDefault(),!s){p("Email is required");return}if(!x(s)){p("Please enter a valid email address");return}m(!0),p("");try{await o(s),k(!0)}catch(v){p(v instanceof Error?v.message:"Failed to send reset link. Please try again.")}finally{m(!1)}};return g?n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:n.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"var(--account-success-bg)",borderRadius:"16px",marginBottom:"16px"},children:n.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"var(--account-success-border)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),n.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Check your email"}),n.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["We've sent a password reset link to",n.jsx("br",{}),n.jsx("strong",{style:{color:"var(--account-text)"},children:s})]})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",padding:"32px",boxShadow:"var(--account-card-shadow)",marginBottom:"16px"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:"Click the link in the email to reset your password. If you don't see the email, check your spam folder."}),n.jsx(Je,{variant:"primary",size:"lg",onClick:()=>ht("/account/login"),style:{width:"100%"},children:"Return to sign in"})]}),n.jsx("button",{onClick:()=>{k(!1),l("")},style:{display:"block",width:"100%",background:"none",border:"none",padding:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"center"},onMouseEnter:h=>h.currentTarget.style.textDecoration="underline",onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Didn't receive the email? Try again"})]})}):n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:n.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[n.jsxs("button",{onClick:()=>ht("/account/login"),disabled:f,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:f?"not-allowed":"pointer",opacity:f?.4:1},onMouseEnter:h=>!f&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:[n.jsx(Al,{size:16}),"Back to sign in"]}),n.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[n.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Reset your password"}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:"Enter your email and we'll send you a reset link"})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:[u&&n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx(Ht,{type:"error",children:u})}),n.jsxs("form",{onSubmit:w,children:[n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx(Pe,{id:"email",label:"Email",type:"email",value:s,onChange:h=>{l(h.target.value),p("")},error:u&&!s?u:"",placeholder:"you@example.com",autoComplete:"email",disabled:f})}),n.jsx(Je,{type:"submit",variant:"primary",size:"lg",isLoading:f,style:{width:"100%"},children:"Send reset link"})]})]})]})})}function vy(){if(typeof window>"u")return null;const o=window.location.pathname.match(/^\/account\/reset\/([^/]+)\/([^/]+)\/?$/);return o?{id:decodeURIComponent(o[1]),token:decodeURIComponent(o[2])}:null}function wy({id:o,token:s}){return`${"https://thevibestation.com".replace(/\/+$/,"")}/account/reset/${encodeURIComponent(o)}/${encodeURIComponent(s)}`}function Ld(){const{resetPassword:o}=Bt(),s=vy(),[l,u]=_.useState(""),[p,f]=_.useState(""),[m,g]=_.useState({}),[k,x]=_.useState(!1),w=()=>{const v={};return l?l.length<5&&(v.password="Password must be at least 5 characters"):v.password="Password is required",p?l!==p&&(v.confirmPassword="Passwords do not match"):v.confirmPassword="Please confirm your password",g(v),Object.keys(v).length===0},h=async v=>{if(v.preventDefault(),!s){g({general:"This password setup link is invalid. Please request a new one."});return}if(w()){x(!0),g({});try{await o(wy(s),l),ht("/account")}catch(T){const R=T.code;g(R==="CUSTOMER_RESET_TOKEN_INVALID"||R==="TOKEN_EXPIRED"?{general:"expired"}:{general:T instanceof Error?T.message:"Failed to set your password. Please try again."})}finally{x(!1)}}};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:n.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[n.jsxs("button",{onClick:()=>ht("/account/login"),disabled:k,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",cursor:k?"not-allowed":"pointer",opacity:k?.4:1},onMouseEnter:v=>!k&&(v.currentTarget.style.textDecoration="underline"),onMouseLeave:v=>v.currentTarget.style.textDecoration="none",children:[n.jsx(Al,{size:16}),"Back to sign in"]}),n.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[n.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Set new password"}),n.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:"Create a password to activate your account or regain access."})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:[m.general&&n.jsx("div",{style:{marginBottom:"24px"},children:n.jsx(Ht,{type:"error",children:m.general==="expired"?n.jsxs(n.Fragment,{children:["This link has expired. Please request a new one."," ",n.jsx("button",{type:"button",onClick:()=>ht("/account/forgot-password"),style:{background:"none",border:"none",padding:0,color:"var(--account-error-text)",font:"inherit",fontWeight:600,textDecoration:"underline",cursor:"pointer"},children:"Request a new link"}),"."]}):m.general})}),n.jsxs("form",{onSubmit:h,children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[n.jsx(Pe,{id:"password",label:"New password",type:"password",value:l,onChange:v=>{u(v.target.value),(m.password||m.general)&&g(T=>({...T,password:"",general:""}))},error:m.password,helperText:m.password?void 0:"Must be at least 5 characters",placeholder:"Enter new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:k}),n.jsx(Pe,{id:"confirmPassword",label:"Confirm password",type:"password",value:p,onChange:v=>{f(v.target.value),(m.confirmPassword||m.general)&&g(T=>({...T,confirmPassword:"",general:""}))},error:m.confirmPassword,placeholder:"Confirm new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:k})]}),n.jsx(Je,{type:"submit",variant:"primary",size:"lg",isLoading:k,style:{width:"100%"},children:"Set Password"})]})]})]})})}function Fd({activeSection:o,onSectionChange:s,onLogout:l,isMobile:u=!1}){const p=[{id:"overview",label:"Overview",icon:Cp},{id:"orders",label:"Orders",icon:Bn},{id:"addresses",label:"Addresses",icon:Dl}];return u?n.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto",padding:"16px",backgroundColor:"var(--account-panel-bg)",borderBottom:"1px solid var(--account-panel-border)"},children:p.map(f=>{const m=f.icon,g=o===f.id;return n.jsxs("button",{onClick:()=>s(f.id),style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",backgroundColor:g?"var(--account-nav-active-bg)":"transparent",border:`1px solid ${g?"var(--account-input-border)":"transparent"}`,borderRadius:"10px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:g?"var(--account-title)":"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s"},children:[n.jsx(m,{size:16}),f.label]},f.id)})}):n.jsxs("nav",{style:{backgroundColor:"var(--account-panel-bg)",border:"1px solid var(--account-panel-border)",borderRadius:"12px",padding:"8px",boxShadow:"var(--account-card-shadow)"},children:[p.map(f=>{const m=f.icon,g=o===f.id;return n.jsxs("button",{onClick:()=>s(f.id),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:g?"var(--account-nav-active-bg)":"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:g?"600":"400",color:g?"var(--account-title)":"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:k=>{g||(k.currentTarget.style.backgroundColor="var(--account-nav-hover-bg)")},onMouseLeave:k=>{g||(k.currentTarget.style.backgroundColor="transparent")},children:[n.jsx(m,{size:20}),f.label]},f.id)}),n.jsx("div",{style:{height:"1px",backgroundColor:"var(--account-panel-border)",margin:"8px 0"}}),n.jsxs("button",{onClick:l,style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-error-border)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:f=>{f.currentTarget.style.backgroundColor="var(--account-error-bg)"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="transparent"},children:[n.jsx(Hg,{size:20}),"Sign out"]})]})}function by({customer:o}){const{updateProfile:s}=Bt(),[l,u]=_.useState(!1),[p,f]=_.useState({firstName:o.firstName,lastName:o.lastName,email:o.email,phone:o.phone||""}),[m,g]=_.useState(!1),[k,x]=_.useState(""),[w,h]=_.useState(""),v=async()=>{g(!0),x(""),h("");try{await s(p),x("Profile updated successfully"),u(!1),setTimeout(()=>x(""),3e3)}catch(R){h(R instanceof Error?R.message:"Failed to update profile")}finally{g(!1)}},T=()=>{f({firstName:o.firstName,lastName:o.lastName,email:o.email,phone:o.phone||""}),u(!1),h("")};return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:"Profile Information"}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your personal information and contact details"})]}),n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"24px",boxShadow:"var(--account-card-shadow)"},children:[k&&n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(Ht,{type:"success",children:k})}),w&&n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(Ht,{type:"error",children:w})}),l?n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[n.jsx(Pe,{id:"firstName",label:"First name",type:"text",value:p.firstName,onChange:R=>f(P=>({...P,firstName:R.target.value})),disabled:m}),n.jsx(Pe,{id:"lastName",label:"Last name",type:"text",value:p.lastName,onChange:R=>f(P=>({...P,lastName:R.target.value})),disabled:m})]}),n.jsx(Pe,{id:"email",label:"Email",type:"email",value:p.email,onChange:R=>f(P=>({...P,email:R.target.value})),disabled:m}),n.jsx(Pe,{id:"phone",label:"Phone (optional)",type:"tel",value:p.phone,onChange:R=>f(P=>({...P,phone:R.target.value})),disabled:m})]}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[n.jsx(Je,{variant:"secondary",size:"md",onClick:T,disabled:m,children:"Cancel"}),n.jsx(Je,{variant:"primary",size:"md",onClick:v,isLoading:m,children:"Save changes"})]})]}):n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px"},children:[n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"var(--account-icon-bg)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Cp,{size:28,style:{color:"var(--account-subtext)"}})}),n.jsxs("div",{children:[n.jsxs("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:[o.firstName," ",o.lastName]}),n.jsxs("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Member since ",new Date(o.createdAt).toLocaleDateString("en-US",{month:"long",year:"numeric"})]})]})]}),n.jsxs(Je,{variant:"secondary",size:"sm",onClick:()=>u(!0),children:[n.jsx(Xg,{size:14}),"Edit"]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(Bg,{size:20,style:{color:"var(--account-subtext)",flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Email"}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:o.email})]})]}),o.phone&&n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(Jg,{size:20,style:{color:"var(--account-subtext)",flexShrink:0,marginTop:"2px"}}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Phone"}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:o.phone})]})]})]})]})]})]})}function ky({order:o,onClick:s}){const l=f=>new Date(f).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),p=(f=>{switch(f){case"FULFILLED":return{bg:"var(--account-success-bg)",border:"var(--account-success-border)",text:"var(--account-success-text)",label:"Fulfilled"};case"UNFULFILLED":return{bg:"var(--account-warning-bg)",border:"var(--account-warning-border)",text:"var(--account-warning-text)",label:"Unfulfilled"};case"PARTIALLY_FULFILLED":return{bg:"var(--account-info-bg)",border:"var(--account-info-border)",text:"var(--account-info-text)",label:"Partially fulfilled"};case"CANCELLED":return{bg:"var(--account-error-bg)",border:"var(--account-error-border)",text:"var(--account-error-text)",label:"Cancelled"};default:return{bg:"var(--account-nav-active-bg)",border:"var(--account-input-border)",text:"var(--account-subtext)",label:f}}})(o.fulfillmentStatus);return n.jsx("button",{onClick:()=>s(o.id),style:{width:"100%",backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"20px",cursor:"pointer",textAlign:"left",transition:"all 0.15s",boxShadow:"var(--account-card-shadow)"},onMouseEnter:f=>{f.currentTarget.style.boxShadow="var(--account-card-shadow-hover)",f.currentTarget.style.borderColor="var(--account-input-border)"},onMouseLeave:f=>{f.currentTarget.style.boxShadow="var(--account-card-shadow)",f.currentTarget.style.borderColor="var(--account-card-border)"},children:n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[n.jsx("div",{style:{flexShrink:0,width:"48px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--account-icon-bg)",borderRadius:"10px"},children:n.jsx(Bn,{size:24,style:{color:"var(--account-subtext)"}})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px",flexWrap:"wrap"},children:[n.jsxs("h3",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:["Order #",o.orderNumber]}),n.jsx("div",{style:{display:"inline-flex",alignItems:"center",padding:"2px 8px",backgroundColor:p.bg,border:`1px solid ${p.border}`,borderRadius:"6px"},children:n.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:p.text,fontFamily:"Inter, system-ui, sans-serif"},children:p.label})})]}),n.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"12px"},children:["Placed on ",l(o.createdAt)," • ",o.lineItems.length," item",o.lineItems.length!==1?"s":""]}),n.jsx("div",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:o.totalPrice})]}),n.jsx("div",{style:{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--account-input-disabled-text)"},children:n.jsx(wg,{size:20})})]})})}function Tp({icon:o,title:s,description:l,action:u}){return n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"64px 24px",textAlign:"center"},children:[n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"var(--account-icon-bg)",color:"var(--account-subtext)",marginBottom:"16px"},children:o}),n.jsx("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:s}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:u?"24px":"0",maxWidth:"400px"},children:l}),u&&n.jsx("div",{children:u})]})}function Sy(){const{orders:o,hasMore:s,isLoading:l,isLoadingMore:u,error:p,loadMore:f}=cg(),m=g=>{ht(`/account/orders/${encodeURIComponent(g)}`)};return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:"Order History"}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"View and track your orders"})]}),p&&n.jsx("div",{style:{marginBottom:"16px"},children:n.jsx(Ht,{type:"error",children:p})}),l?n.jsx("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading orders..."})}):o.length>0?n.jsxs("div",{children:[n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:s?"24px":"0"},children:o.map(g=>n.jsx(ky,{order:g,onClick:m},g.id))}),s&&n.jsx("div",{style:{textAlign:"center"},children:n.jsx(Je,{variant:"secondary",size:"md",onClick:()=>void f(),isLoading:u,children:"Load more orders"})})]}):n.jsx("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",boxShadow:"var(--account-card-shadow)"},children:n.jsx(Tp,{icon:n.jsx(Bn,{size:32}),title:"No orders yet",description:"When you place an order, it will appear here so you can track its status.",action:n.jsx(Je,{variant:"primary",size:"md",children:"Start shopping"})})})]})}function jy({address:o,onEdit:s,onDelete:l,onSetDefault:u}){const[p,f]=_.useState(!1);return n.jsxs("div",{style:{position:"relative",backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"20px",boxShadow:"var(--account-card-shadow)"},children:[o.isDefault&&n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 8px",backgroundColor:"var(--account-success-bg)",border:"1px solid var(--account-success-border)",borderRadius:"6px",marginBottom:"12px"},children:[n.jsx(bp,{size:12,style:{color:"var(--account-success-text)"}}),n.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--account-success-text)",fontFamily:"Inter, system-ui, sans-serif"},children:"Default"})]}),n.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px"},children:[n.jsx("button",{onClick:()=>f(!p),style:{background:"none",border:"none",padding:"4px",cursor:"pointer",color:"var(--account-subtext)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--account-nav-hover-bg)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:n.jsx(_g,{size:20})}),p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10},onClick:()=>f(!1)}),n.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:"4px",backgroundColor:"var(--account-menu-bg)",border:"1px solid var(--account-card-border)",borderRadius:"10px",boxShadow:"var(--account-card-shadow-hover)",padding:"4px",minWidth:"160px",zIndex:20},children:[n.jsx("button",{onClick:()=>{f(!1),s(o)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-text)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--account-nav-hover-bg)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Edit address"}),!o.isDefault&&n.jsx("button",{onClick:()=>{f(!1),u(o.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-text)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--account-nav-hover-bg)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Set as default"}),n.jsx("div",{style:{height:"1px",backgroundColor:"var(--account-card-border)",margin:"4px 0"}}),n.jsx("button",{onClick:()=>{f(!1),l(o.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-error-border)",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--account-error-bg)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Delete address"})]})]})]}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("div",{style:{flexShrink:0,width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--account-icon-bg)",borderRadius:"8px"},children:n.jsx(Dl,{size:20,style:{color:"var(--account-subtext)"}})}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:[o.firstName," ",o.lastName]}),n.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:[o.company&&n.jsx("div",{children:o.company}),n.jsx("div",{children:o.address1}),o.address2&&n.jsx("div",{children:o.address2}),n.jsxs("div",{children:[o.city,", ",o.province," ",o.zip]}),n.jsx("div",{children:o.country}),o.phone&&n.jsx("div",{style:{marginTop:"8px"},children:o.phone})]})]})]})]})}function Od({address:o,onClose:s,onSave:l}){const[u,p]=_.useState({firstName:(o==null?void 0:o.firstName)||"",lastName:(o==null?void 0:o.lastName)||"",company:(o==null?void 0:o.company)||"",address1:(o==null?void 0:o.address1)||"",address2:(o==null?void 0:o.address2)||"",city:(o==null?void 0:o.city)||"",province:(o==null?void 0:o.province)||"",zip:(o==null?void 0:o.zip)||"",country:(o==null?void 0:o.country)||"United States",phone:(o==null?void 0:o.phone)||""}),[f,m]=_.useState({}),[g,k]=_.useState(!1),x=()=>{const v={};return u.firstName.trim()||(v.firstName="First name is required"),u.lastName.trim()||(v.lastName="Last name is required"),u.address1.trim()||(v.address1="Address is required"),u.city.trim()||(v.city="City is required"),u.province.trim()||(v.province="State/Province is required"),u.zip.trim()||(v.zip="ZIP/Postal code is required"),u.country.trim()||(v.country="Country is required"),m(v),Object.keys(v).length===0},w=async v=>{if(v.preventDefault(),!!x()){k(!0);try{await new Promise(T=>setTimeout(T,500)),l(o?{...o,...u}:u)}catch(T){console.error("Failed to save address:",T)}finally{k(!1)}}},h=(v,T)=>{p(R=>({...R,[v]:T})),f[v]&&m(R=>({...R,[v]:""}))};return n.jsx(n.Fragment,{children:n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"var(--account-overlay)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50,overflow:"auto"},onClick:s,children:n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",borderRadius:"16px",width:"100%",maxWidth:"600px",maxHeight:"90vh",overflow:"auto",border:"1px solid var(--account-card-border)",boxShadow:"var(--account-card-shadow-hover)"},onClick:v=>v.stopPropagation(),children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid var(--account-card-border)"},children:[n.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:o?"Edit address":"Add new address"}),n.jsx("button",{onClick:s,disabled:g,style:{background:"none",border:"none",padding:"4px",cursor:g?"not-allowed":"pointer",color:"var(--account-subtext)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",opacity:g?.4:1},children:n.jsx(Ll,{size:20})})]}),n.jsxs("form",{onSubmit:w,children:[n.jsx("div",{style:{padding:"24px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[n.jsx(Pe,{id:"firstName",label:"First name",value:u.firstName,onChange:v=>h("firstName",v.target.value),error:f.firstName,disabled:g}),n.jsx(Pe,{id:"lastName",label:"Last name",value:u.lastName,onChange:v=>h("lastName",v.target.value),error:f.lastName,disabled:g})]}),n.jsx(Pe,{id:"company",label:"Company (optional)",value:u.company,onChange:v=>h("company",v.target.value),disabled:g}),n.jsx(Pe,{id:"address1",label:"Address",value:u.address1,onChange:v=>h("address1",v.target.value),error:f.address1,placeholder:"123 Main Street",disabled:g}),n.jsx(Pe,{id:"address2",label:"Apartment, suite, etc. (optional)",value:u.address2,onChange:v=>h("address2",v.target.value),placeholder:"Apt 4B",disabled:g}),n.jsx(Pe,{id:"city",label:"City",value:u.city,onChange:v=>h("city",v.target.value),error:f.city,disabled:g}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[n.jsx(Pe,{id:"province",label:"State / Province",value:u.province,onChange:v=>h("province",v.target.value),error:f.province,placeholder:"CA",disabled:g}),n.jsx(Pe,{id:"zip",label:"ZIP / Postal code",value:u.zip,onChange:v=>h("zip",v.target.value),error:f.zip,placeholder:"94103",disabled:g})]}),n.jsx(Pe,{id:"country",label:"Country",value:u.country,onChange:v=>h("country",v.target.value),error:f.country,disabled:g}),n.jsx(Pe,{id:"phone",label:"Phone (optional)",type:"tel",value:u.phone,onChange:v=>h("phone",v.target.value),placeholder:"+1 (555) 123-4567",disabled:g})]})}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",padding:"24px",borderTop:"1px solid var(--account-card-border)"},children:[n.jsx(Je,{type:"button",variant:"secondary",size:"md",onClick:s,disabled:g,children:"Cancel"}),n.jsx(Je,{type:"submit",variant:"primary",size:"md",isLoading:g,children:o?"Save changes":"Add address"})]})]})]})})})}function Cy({title:o,description:s,onConfirm:l,onCancel:u}){return n.jsx(n.Fragment,{children:n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"var(--account-overlay)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50},onClick:u,children:n.jsx("div",{style:{backgroundColor:"var(--account-card-bg)",borderRadius:"16px",width:"100%",maxWidth:"440px",border:"1px solid var(--account-card-border)",boxShadow:"var(--account-card-shadow-hover)"},onClick:p=>p.stopPropagation(),children:n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",backgroundColor:"var(--account-error-bg)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:n.jsx(ly,{size:24,style:{color:"var(--account-error-border)"}})}),n.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:o}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:s}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[n.jsx(Je,{variant:"secondary",size:"md",onClick:u,children:"Cancel"}),n.jsx(Je,{variant:"destructive",size:"md",onClick:l,children:"Delete"})]})]})})})})}function Ty(){const{addresses:o,isLoading:s,isSaving:l,error:u,createAddress:p,editAddress:f,removeAddress:m,makeDefaultAddress:g}=ag(),[k,x]=_.useState(!1),[w,h]=_.useState(null),[v,T]=_.useState(null),R=async J=>{await p(J),x(!1)},P=J=>{h(J)},z=async J=>{await f(J),h(null)},ie=J=>{T(J)},le=async()=>{v&&(await m(v),T(null))},ae=async J=>{await g(J)};return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px",flexWrap:"wrap",gap:"16px"},children:[n.jsxs("div",{children:[n.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:"Saved Addresses"}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your shipping and billing addresses"})]}),o.length>0&&n.jsxs(Je,{variant:"primary",size:"md",onClick:()=>x(!0),children:[n.jsx(Dd,{size:16}),"Add address"]})]}),u&&n.jsx("div",{style:{marginBottom:"16px"},children:n.jsx(Ht,{type:"error",children:u})}),s?n.jsx("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"32px",boxShadow:"var(--account-card-shadow)"},children:n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading addresses..."})}):o.length>0?n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"16px"},children:o.map(J=>n.jsx(jy,{address:J,onEdit:P,onDelete:ie,onSetDefault:ae},J.id))}):n.jsx("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",boxShadow:"var(--account-card-shadow)"},children:n.jsx(Tp,{icon:n.jsx(Dl,{size:32}),title:"No addresses saved",description:"Add a shipping address to make checkout faster and easier.",action:n.jsxs(Je,{variant:"primary",size:"md",onClick:()=>x(!0),children:[n.jsx(Dd,{size:16}),"Add address"]})})}),k&&n.jsx(Od,{onClose:()=>x(!1),onSave:R}),w&&n.jsx(Od,{address:w,onClose:()=>h(null),onSave:z}),v&&n.jsx(Cy,{title:"Delete address",description:"Are you sure you want to delete this address? This action cannot be undone.",onConfirm:()=>void le(),onCancel:()=>T(null)}),l&&n.jsx("div",{style:{marginTop:"16px"},children:n.jsx(Ht,{type:"info",children:"Saving address changes..."})})]})}function Ey(){const{customer:o,isAuthenticated:s,logout:l,isLoading:u}=Bt(),[p,f]=_.useState("overview"),[m,g]=_.useState(window.innerWidth<768);_.useEffect(()=>{!u&&!s&&ht("/account/login")},[s,u]),_.useEffect(()=>{const x=()=>{g(window.innerWidth<768)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const k=()=>{l(),ht("/account/login")};return u||!o?n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 16px",border:"3px solid var(--account-icon-bg)",borderTopColor:"var(--account-link)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),n.jsx("style",{children:`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `})]})}):n.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)"},children:[n.jsx("div",{style:{backgroundColor:"var(--account-panel-bg)",borderBottom:"1px solid var(--account-panel-border)"},children:n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"32px 48px"},children:[n.jsx("h1",{"data-testid":"account-page-heading",style:{fontSize:m?"22px":"28px",lineHeight:m?"30px":"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:"My Account"}),n.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Welcome back, ",o.firstName]})]})}),m&&n.jsx(Fd,{activeSection:p,onSectionChange:f,onLogout:k,isMobile:!0}),n.jsx("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"48px 48px"},children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:m?"1fr":"240px 1fr",gap:m?"0":"32px"},children:[!m&&n.jsx("div",{children:n.jsx(Fd,{activeSection:p,onSectionChange:f,onLogout:k})}),n.jsxs("div",{children:[p==="overview"&&n.jsx(by,{customer:o}),p==="orders"&&n.jsx(Sy,{}),p==="addresses"&&n.jsx(Ty,{})]})]})})]})}function Iy(){const o=window.location.pathname.match(/^\/account\/orders\/([^/]+)\/?$/);if(!o)return null;try{return decodeURIComponent(o[1])}catch{return null}}function Ry(o){return new Date(o).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Md(o,s="fulfillment"){if(!o)return{label:s==="financial"?"Payment pending":"Pending",bg:"var(--account-nav-active-bg)",border:"var(--account-input-border)",text:"var(--account-subtext)"};const l=o.toUpperCase();return l==="FULFILLED"||l==="PAID"?{label:o.replace(/_/g," ").toLowerCase().replace(/(^|\s)\S/g,u=>u.toUpperCase()),bg:"var(--account-success-bg)",border:"var(--account-success-border)",text:"var(--account-success-text)"}:l==="PARTIALLY_FULFILLED"||l==="PARTIALLY_PAID"?{label:o.replace(/_/g," ").toLowerCase().replace(/(^|\s)\S/g,u=>u.toUpperCase()),bg:"var(--account-info-bg)",border:"var(--account-info-border)",text:"var(--account-info-text)"}:l==="CANCELLED"||l==="REFUNDED"||l==="VOIDED"?{label:o.replace(/_/g," ").toLowerCase().replace(/(^|\s)\S/g,u=>u.toUpperCase()),bg:"var(--account-error-bg)",border:"var(--account-error-border)",text:"var(--account-error-text)"}:{label:o.replace(/_/g," ").toLowerCase().replace(/(^|\s)\S/g,u=>u.toUpperCase()),bg:"var(--account-warning-bg)",border:"var(--account-warning-border)",text:"var(--account-warning-text)"}}function $d({title:o,address:s}){return s?n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"20px",boxShadow:"var(--account-card-shadow)"},children:[n.jsx("h3",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"10px"},children:o}),n.jsxs("div",{style:{fontSize:"14px",lineHeight:"22px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:[s.name?n.jsx("div",{children:s.name}):null,n.jsx("div",{children:s.address1}),s.address2?n.jsx("div",{children:s.address2}):null,n.jsxs("div",{children:[s.city,s.province?`, ${s.province}`:"",s.zip?` ${s.zip}`:""]}),n.jsx("div",{children:s.country}),s.phone?n.jsx("div",{children:s.phone}):null]})]}):null}function _y(){const{isAuthenticated:o,isLoading:s}=Bt(),l=Iy(),{order:u,isLoading:p,error:f,refresh:m}=lg(l);if(_.useEffect(()=>{!s&&!o&&ht("/account/login")},[o,s]),s||p&&!u&&!f)return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 16px",border:"3px solid var(--account-icon-bg)",borderTopColor:"var(--account-link)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),n.jsx("style",{children:`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `})]})});const g=Md(u==null?void 0:u.fulfillmentStatus,"fulfillment"),k=Md(u==null?void 0:u.financialStatus,"financial");return n.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--account-page-bg)"},children:[n.jsx("div",{style:{backgroundColor:"var(--account-panel-bg)",borderBottom:"1px solid var(--account-panel-border)"},children:n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"28px 20px"},children:[n.jsxs("button",{type:"button",onClick:()=>ht("/account"),style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:0,marginBottom:"16px",color:"var(--account-link)",fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"600",cursor:"pointer"},children:[n.jsx(Al,{size:16}),"Back to account"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px",alignItems:"flex-start",flexWrap:"wrap"},children:[n.jsxs("div",{children:[n.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"6px"},children:(u==null?void 0:u.name)||"Order details"}),u?n.jsxs("p",{style:{fontSize:"15px",lineHeight:"22px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Placed on ",Ry(u.createdAt)]}):null]}),n.jsx("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:u?n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",padding:"6px 10px",backgroundColor:g.bg,border:`1px solid ${g.border}`,borderRadius:"999px",color:g.text,fontSize:"13px",lineHeight:"18px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:g.label}),n.jsx("div",{style:{display:"inline-flex",alignItems:"center",padding:"6px 10px",backgroundColor:k.bg,border:`1px solid ${k.border}`,borderRadius:"999px",color:k.text,fontSize:"13px",lineHeight:"18px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:k.label})]}):null})]})]})}),n.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"32px 20px 48px"},children:[f?n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(Ht,{type:"error",children:f})}):null,!u&&!p?n.jsxs("div",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",boxShadow:"var(--account-card-shadow)",padding:"32px",textAlign:"center"},children:[n.jsx(Bn,{size:32,style:{color:"var(--account-subtext)",marginBottom:"12px"}}),n.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Order unavailable"}),n.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"20px"},children:"The requested order could not be found for this account."}),n.jsx(Je,{variant:"secondary",size:"md",onClick:()=>ht("/account"),children:"Return to account"})]}):null,u?n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.75fr) minmax(280px, 1fr)",gap:"24px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs("section",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",boxShadow:"var(--account-card-shadow)",overflow:"hidden"},children:[n.jsx("div",{style:{padding:"20px 24px",borderBottom:"1px solid var(--account-card-border)"},children:n.jsx("h2",{style:{fontSize:"20px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:"Items"})}),n.jsx("div",{style:{padding:"8px 24px 24px"},children:u.lineItems.map(x=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:x.imageUrl?"72px minmax(0, 1fr)":"minmax(0, 1fr)",gap:"16px",padding:"16px 0",borderBottom:"1px solid var(--account-card-border)"},children:[x.imageUrl?n.jsx("img",{src:x.imageUrl,alt:x.imageAlt||x.title,style:{width:"72px",height:"72px",objectFit:"cover",borderRadius:"10px",backgroundColor:"var(--account-icon-bg)"}}):null,n.jsxs("div",{style:{minWidth:0},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px",alignItems:"flex-start"},children:[n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:x.title}),n.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:["Qty ",x.quantity,x.variantTitle?` • ${x.variantTitle}`:"",x.sku?` • SKU ${x.sku}`:""]})]}),n.jsx("div",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",whiteSpace:"nowrap"},children:x.discountedTotalPrice||x.originalTotalPrice})]}),x.selectedOptions.length>0?n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"10px"},children:x.selectedOptions.map(w=>n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",padding:"4px 8px",borderRadius:"999px",backgroundColor:"var(--account-nav-active-bg)",color:"var(--account-subtext)",fontSize:"12px",lineHeight:"18px",fontWeight:"500",fontFamily:"Inter, system-ui, sans-serif"},children:[w.name,": ",w.value]},`${x.id}-${w.name}`))}):null,x.originalTotalPrice&&x.originalTotalPrice!==x.discountedTotalPrice||x.unitPrice?n.jsxs("div",{style:{marginTop:"10px",fontSize:"13px",lineHeight:"18px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:[x.unitPrice?`Unit price ${x.unitPrice}`:"",x.unitPrice&&x.originalTotalPrice&&x.originalTotalPrice!==x.discountedTotalPrice?" • ":"",x.originalTotalPrice&&x.originalTotalPrice!==x.discountedTotalPrice?`Original total ${x.originalTotalPrice}`:""]}):null]})]},x.id))})]}),u.fulfillments.length>0?n.jsxs("section",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",boxShadow:"var(--account-card-shadow)",padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"18px"},children:[n.jsx(uy,{size:18,style:{color:"var(--account-subtext)"}}),n.jsx("h2",{style:{fontSize:"20px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif"},children:"Fulfillment"})]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:u.fulfillments.map((x,w)=>n.jsxs("div",{style:{border:"1px solid var(--account-card-border)",borderRadius:"12px",padding:"16px"},children:[n.jsx("div",{style:{fontSize:"15px",lineHeight:"22px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"10px"},children:x.trackingCompany||"Shipment"}),x.tracking.map((h,v)=>n.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:[h.number?n.jsxs("span",{children:["Tracking #",h.number]}):n.jsx("span",{children:"Tracking available"}),h.url?n.jsxs(n.Fragment,{children:[" ",n.jsx("a",{href:h.url,target:"_blank",rel:"noreferrer",style:{color:"var(--account-link)",fontWeight:600},children:"Open"})]}):null]},`${h.number||"tracking"}-${v}`)),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:x.items.map((h,v)=>n.jsxs("div",{style:{fontSize:"13px",lineHeight:"18px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:[h.quantity," x ",h.title,h.sku?` • ${h.sku}`:""]},`${h.title}-${v}`))})]},`${x.trackingCompany||"fulfillment"}-${w}`))})]}):null]}),n.jsxs("aside",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs("section",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",boxShadow:"var(--account-card-shadow)",padding:"24px"},children:[n.jsx("h2",{style:{fontSize:"20px",lineHeight:"28px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"18px"},children:"Summary"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px"},children:[n.jsx("span",{style:{color:"var(--account-subtext)",fontSize:"14px",lineHeight:"20px",fontFamily:"Inter, system-ui, sans-serif"},children:"Subtotal"}),n.jsx("span",{style:{color:"var(--account-title)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:u.subtotalPrice})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px"},children:[n.jsx("span",{style:{color:"var(--account-subtext)",fontSize:"14px",lineHeight:"20px",fontFamily:"Inter, system-ui, sans-serif"},children:"Shipping"}),n.jsx("span",{style:{color:"var(--account-title)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:u.shippingPrice})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px"},children:[n.jsx("span",{style:{color:"var(--account-subtext)",fontSize:"14px",lineHeight:"20px",fontFamily:"Inter, system-ui, sans-serif"},children:"Tax"}),n.jsx("span",{style:{color:"var(--account-title)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:u.taxPrice})]}),u.refundedPrice?n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px"},children:[n.jsx("span",{style:{color:"var(--account-subtext)",fontSize:"14px",lineHeight:"20px",fontFamily:"Inter, system-ui, sans-serif"},children:"Refunded"}),n.jsx("span",{style:{color:"var(--account-title)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:u.refundedPrice})]}):null,n.jsx("div",{style:{height:"1px",backgroundColor:"var(--account-card-border)",margin:"4px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px"},children:[n.jsx("span",{style:{color:"var(--account-title)",fontSize:"16px",lineHeight:"24px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:"Total"}),n.jsx("span",{style:{color:"var(--account-title)",fontSize:"18px",lineHeight:"28px",fontWeight:"600",fontFamily:"Inter, system-ui, sans-serif"},children:u.totalPrice})]})]}),u.discounts.length>0?n.jsxs("div",{style:{marginTop:"18px",paddingTop:"18px",borderTop:"1px solid var(--account-card-border)"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--account-title)",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"10px"},children:"Discounts"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:u.discounts.map((x,w)=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px",fontSize:"13px",lineHeight:"18px",color:"var(--account-subtext)",fontFamily:"Inter, system-ui, sans-serif"},children:[n.jsx("span",{children:x.targetSelection||x.allocationMethod||"Discount"}),n.jsx("span",{style:{fontWeight:600,color:"var(--account-title)"},children:x.value})]},`${x.value}-${w}`))})]}):null]}),n.jsxs("div",{style:{display:"grid",gap:"16px"},children:[n.jsx($d,{title:"Shipping address",address:u.shippingAddress}),n.jsx($d,{title:"Billing address",address:u.billingAddress})]}),n.jsx("section",{style:{backgroundColor:"var(--account-card-bg)",border:"1px solid var(--account-card-border)",borderRadius:"16px",boxShadow:"var(--account-card-shadow)",padding:"24px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsx(Je,{variant:"secondary",size:"md",onClick:()=>void m(),isLoading:p,children:n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[n.jsx(ty,{size:16}),"Refresh order"]})}),u.statusUrl?n.jsx("a",{href:u.statusUrl,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:n.jsx(Je,{variant:"primary",size:"md",style:{width:"100%"},children:n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[n.jsx(Pg,{size:16}),"View order status"]})})}):null]})})]})]}):null]})]})}function Ny(){return _.useCallback((o=[],s)=>vh(o,s),[])}function Py(){return _.useCallback((o,s)=>wh(o,s),[])}function zy(){return _.useCallback((o,s)=>bh(o,s),[])}function Ay(){return _.useCallback((o,s)=>kh(o,s),[])}const Ep=_.createContext(null),Hd="IN".toUpperCase(),Dy=300*1e3,Ly=o=>o.lines.edges.map(s=>{var u,p,f,m,g;const l=s.node;return{id:l.id,name:l.merchandise.product.title,productHandle:l.merchandise.product.handle,variant:((u=l.merchandise.selectedOptions)==null?void 0:u.map(k=>`${k.name}: ${k.value}`).join(", "))||l.merchandise.title,price:Number.parseFloat(l.merchandise.price.amount),quantity:l.quantity,variantId:l.merchandise.id,imageUrl:((p=l.merchandise.image)==null?void 0:p.url)||((f=l.merchandise.product.featuredImage)==null?void 0:f.url),imageAlt:((m=l.merchandise.image)==null?void 0:m.altText)||((g=l.merchandise.product.featuredImage)==null?void 0:g.altText)||l.merchandise.product.title}});function Fy({children:o}){const{accessToken:s,isAuthenticated:l,refreshCustomerData:u,logout:p}=Bt(),[f,m]=_.useState([]),[g,k]=_.useState(!1),[x,w]=_.useState(null),[h,v]=_.useState(null),[T,R]=_.useState(null),P=_.useRef(null),z=Ny(),ie=Py(),le=zy(),ae=Ay(),J=_.useCallback(Q=>{m(Ly(Q)),w(Q.id),v(Q.checkoutUrl),Ch(Q.id)},[]),ne=_.useCallback(async(Q,K)=>{try{const $=await Cd(Q,K?{countryCode:Hd,customerAccessToken:K}:{});J($)}catch($){console.warn("Failed to sync cart buyer identity",$)}},[J]);_.useEffect(()=>{let Q=!1;return(async()=>{try{const $=jh();if($){const he=await Sh($);if(he&&!Q){J(he);return}}const ce=await z([],s||void 0);Q||J(ce)}catch($){Q||console.error("Failed to initialize Shopify cart",$)}})(),()=>{Q=!0}},[s,z,J]),_.useEffect(()=>{if(!x){P.current=s;return}const Q=P.current!==s;P.current=s,Q&&ne(x,s)},[x,s,ne]);const se=_.useMemo(()=>f.reduce((Q,K)=>Q+K.quantity,0),[f]),ye=_.useMemo(()=>f.reduce((Q,K)=>Q+K.price*K.quantity,0),[f]),Ce={items:f,isDrawerOpen:g,cartCount:se,subtotal:ye,total:ye,checkoutUrl:h,cartError:T,clearCartError:()=>R(null),addItem:async Q=>{try{R(null);let K=x;if(!K){const he=await z([],s||void 0);J(he),K=he.id}const $=f.find(he=>he.variantId===Q),ce=$?await le(K,[{id:$.id,quantity:$.quantity+1}]):await ie(K,[{merchandiseId:Q,quantity:1}]);return J(ce),k(!0),{ok:!0}}catch(K){console.error("Failed to add item to cart",K);const $=K instanceof Error?K.message:"Unable to add item to cart.";return R($),{ok:!1,error:$}}},checkout:async()=>{try{R(null);let Q=x;if(!Q){const ce=await z([],s||void 0);J(ce),Q=ce.id}let K=h,$=s;if(l){const ce=Yo();if(!ce.accessToken||ce.isExpired)p(),$=null;else{const he=Date.parse(ce.expiresAt||"");if(Number.isFinite(he)&&he-Date.now()<=Dy){const Te=await xp(ce.accessToken);Te.ok?($=Te.data.accessToken,await u()):(p(),$=null)}else $=ce.accessToken}}try{const ce=await Cd(Q,$?{countryCode:Hd,customerAccessToken:$}:{});J(ce),K=ce.checkoutUrl}catch(ce){console.warn("Failed to attach customer identity before checkout",ce)}window.location.href=K||"/cart"}catch(Q){console.error("Failed to prepare checkout",Q),R(Q instanceof Error?Q.message:"Unable to continue to checkout."),window.location.href=h||"/cart"}},openCartDrawer:()=>k(!0),closeCartDrawer:()=>k(!1),toggleCartDrawer:()=>k(Q=>!Q),incrementItem:Q=>{if(!x)return;const K=f.find($=>$.id===Q);K&&le(x,[{id:K.id,quantity:K.quantity+1}]).then($=>{R(null),J($)}).catch($=>{console.error("Failed to increment cart line",$),R($ instanceof Error?$.message:"Unable to update cart quantity.")})},decrementItem:Q=>{if(!x)return;const K=f.find($=>$.id===Q);if(K){if(K.quantity<=1){ae(x,[K.id]).then($=>{R(null),J($)}).catch($=>{console.error("Failed to decrement cart line",$),R($ instanceof Error?$.message:"Unable to update cart quantity.")});return}le(x,[{id:K.id,quantity:K.quantity-1}]).then($=>{R(null),J($)}).catch($=>{console.error("Failed to decrement cart line",$),R($ instanceof Error?$.message:"Unable to update cart quantity.")})}},removeItem:Q=>{x&&ae(x,[Q]).then(K=>{R(null),J(K)}).catch(K=>{console.error("Failed to remove cart line",K),R(K instanceof Error?K.message:"Unable to remove item from cart.")})}};return n.jsx(Ep.Provider,{value:Ce,children:o})}function wr(){const o=_.useContext(Ep);if(!o)throw new Error("useCart must be used within a CartProvider.");return o}function gs(o){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(o)}var Oy=(o,s,l,u,p,f,m,g)=>{let k=document.documentElement,x=["light","dark"];function w(T){(Array.isArray(o)?o:[o]).forEach(R=>{let P=R==="class",z=P&&f?p.map(ie=>f[ie]||ie):p;P?(k.classList.remove(...z),k.classList.add(f&&f[T]?f[T]:T)):k.setAttribute(R,T)}),h(T)}function h(T){g&&x.includes(T)&&(k.style.colorScheme=T)}function v(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)w(u);else try{let T=localStorage.getItem(s)||l,R=m&&T==="system"?v():T;w(R)}catch{}},Ud=["light","dark"],Ip="(prefers-color-scheme: dark)",My=typeof window>"u",Fl=_.createContext(void 0),$y={setTheme:o=>{},themes:[]},Ol=()=>{var o;return(o=_.useContext(Fl))!=null?o:$y},Hy=o=>_.useContext(Fl)?_.createElement(_.Fragment,null,o.children):_.createElement(By,{...o}),Uy=["light","dark"],By=({forcedTheme:o,disableTransitionOnChange:s=!1,enableSystem:l=!0,enableColorScheme:u=!0,storageKey:p="theme",themes:f=Uy,defaultTheme:m=l?"system":"light",attribute:g="data-theme",value:k,children:x,nonce:w,scriptProps:h})=>{let[v,T]=_.useState(()=>Vy(p,m)),[R,P]=_.useState(()=>v==="system"?fl():v),z=k?Object.values(k):f,ie=_.useCallback(ne=>{let se=ne;if(!se)return;ne==="system"&&l&&(se=fl());let ye=k?k[se]:se,Ce=s?qy(w):null,Q=document.documentElement,K=$=>{$==="class"?(Q.classList.remove(...z),ye&&Q.classList.add(ye)):$.startsWith("data-")&&(ye?Q.setAttribute($,ye):Q.removeAttribute($))};if(Array.isArray(g)?g.forEach(K):K(g),u){let $=Ud.includes(m)?m:null,ce=Ud.includes(se)?se:$;Q.style.colorScheme=ce}Ce==null||Ce()},[w]),le=_.useCallback(ne=>{let se=typeof ne=="function"?ne(v):ne;T(se);try{localStorage.setItem(p,se)}catch{}},[v]),ae=_.useCallback(ne=>{let se=fl(ne);P(se),v==="system"&&l&&!o&&ie("system")},[v,o]);_.useEffect(()=>{let ne=window.matchMedia(Ip);return ne.addListener(ae),ae(ne),()=>ne.removeListener(ae)},[ae]),_.useEffect(()=>{let ne=se=>{se.key===p&&(se.newValue?T(se.newValue):le(m))};return window.addEventListener("storage",ne),()=>window.removeEventListener("storage",ne)},[le]),_.useEffect(()=>{ie(o??v)},[o,v]);let J=_.useMemo(()=>({theme:v,setTheme:le,forcedTheme:o,resolvedTheme:v==="system"?R:v,themes:l?[...f,"system"]:f,systemTheme:l?R:void 0}),[v,le,o,R,l,f]);return _.createElement(Fl.Provider,{value:J},_.createElement(Wy,{forcedTheme:o,storageKey:p,attribute:g,enableSystem:l,enableColorScheme:u,defaultTheme:m,value:k,themes:f,nonce:w,scriptProps:h}),x)},Wy=_.memo(({forcedTheme:o,storageKey:s,attribute:l,enableSystem:u,enableColorScheme:p,defaultTheme:f,value:m,themes:g,nonce:k,scriptProps:x})=>{let w=JSON.stringify([l,s,f,o,g,m,u,p]).slice(1,-1);return _.createElement("script",{...x,suppressHydrationWarning:!0,nonce:typeof window>"u"?k:"",dangerouslySetInnerHTML:{__html:`(${Oy.toString()})(${w})`}})}),Vy=(o,s)=>{if(My)return;let l;try{l=localStorage.getItem(o)||void 0}catch{}return l||s},qy=o=>{let s=document.createElement("style");return o&&s.setAttribute("nonce",o),s.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(s),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(s)},1)}},fl=o=>(o||(o=window.matchMedia(Ip)),o.matches?"dark":"light");function Yy(){const{customer:o,isAuthenticated:s}=Bt(),{resolvedTheme:l,setTheme:u}=Ol(),p=l==="dark",[f,m]=_.useState(!1),g=s?(o==null?void 0:o.firstName)||"Account":"Sign in",k=s?"/account":"/account/login";return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("header",{className:"header-container",children:[n.jsx(be,{children:n.jsxs("div",{className:"header-inner",children:[n.jsx(Qy,{isDark:p}),n.jsx(Ky,{}),n.jsx(Xy,{accountHref:k,accountLabel:g,isDark:p,onToggleTheme:()=>u(p?"light":"dark")}),n.jsx("button",{className:"header-mobile-menu-btn",onClick:()=>m(!f),"aria-label":"Toggle mobile menu",children:f?n.jsx(Ll,{size:20}):n.jsx(qg,{size:20})})]})}),n.jsxs("div",{className:`header-mobile-menu${f?" open":""}`,children:[n.jsxs("nav",{className:"header-mobile-nav",children:[n.jsx("a",{href:"/products",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Products"}),n.jsx("a",{href:"/philosophy",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Philosophy"}),n.jsx("a",{href:"/community",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Community"})]}),n.jsxs("div",{className:"header-mobile-actions",children:[n.jsx("a",{href:k,className:"header-mobile-account-btn",onClick:()=>m(!1),style:{textDecoration:"none"},children:g}),n.jsxs("button",{className:"header-mobile-account-btn",onClick:()=>u(p?"light":"dark"),children:[p?n.jsx(jp,{size:20,style:{marginRight:"8px"}}):n.jsx(Sp,{size:20,style:{marginRight:"8px"}}),p?"Light Mode":"Dark Mode"]})]})]})]})]})}function Qy({isDark:o}){return n.jsx(Gy,{isDark:o})}function Ky(){return n.jsx(Zy,{})}function Xy({accountHref:o,accountLabel:s,isDark:l,onToggleTheme:u}){return n.jsxs("div",{className:"header-right",children:[n.jsx(Jy,{isDark:l,onToggleTheme:u}),n.jsx(ex,{href:o,label:s}),n.jsx(tx,{})]})}function Gy({isDark:o}){return n.jsx(op,{size:32,variant:o?"light":"dark",showText:!0,href:"/"})}function Jy({isDark:o,onToggleTheme:s}){return n.jsxs("button",{"aria-label":`Switch to ${o?"light":"dark"} mode`,onClick:s,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[o?n.jsx(jp,{size:16}):n.jsx(Sp,{size:16}),n.jsx("span",{className:"theme-toggle-text",children:o?"Light":"Dark"})]})}function Zy(){return n.jsxs("nav",{className:"header-nav",children:[n.jsx("a",{href:"/products",className:"header-nav-link",children:"Products"}),n.jsx("a",{href:"/philosophy",className:"header-nav-link",children:"Philosophy"}),n.jsx("a",{href:"/community",className:"header-nav-link",children:"Community"})]})}function ex({href:o,label:s}){return n.jsx("a",{href:o,className:"header-account-btn",style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer",textDecoration:"none"},children:s})}function tx(){const{cartCount:o,openCartDrawer:s}=wr(),l=()=>{(window.location.pathname.replace(/\/+$/,"")||"/")!=="/cart"&&s()};return n.jsxs("div",{style:{position:"relative",display:"inline-flex"},children:[n.jsx(Ye,{label:"Cart",variant:"ghost",size:"sm","data-testid":"cart-link",onClick:l}),n.jsx("div",{style:{position:"absolute",top:"-6px",right:"-8px",pointerEvents:"none",opacity:.78},children:n.jsx(ot,{label:String(o),variant:"accent",size:"sm"})})]})}function Se({children:o,direction:s="vertical",gap:l=16,align:u="stretch",justify:p="flex-start",style:f,responsiveDirection:m,responsiveGap:g}){const k=s==="horizontal"?"row":"column",x=typeof l=="number"?`${l}px`:l,w=m||g,h=w?`stack-${Math.random().toString(36).substr(2,9)}`:"";return n.jsxs(n.Fragment,{children:[w&&n.jsx("style",{children:`
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
        `}),n.jsx("div",{className:w?h:void 0,style:w?f:{display:"flex",flexDirection:k,gap:x,alignItems:u,justifyContent:p,...f},children:o})]})}function rx(){const{resolvedTheme:o}=Ol(),s=o==="dark";return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsx("footer",{className:"footer-container",children:n.jsx(be,{children:n.jsxs(Se,{gap:"24px",children:[n.jsxs("div",{className:"footer-top",children:[n.jsx(nx,{}),n.jsx(ix,{}),n.jsx(ox,{})]}),n.jsxs("div",{className:"footer-bottom",children:[n.jsx(sx,{isDark:s}),n.jsx(ax,{})]})]})})})]})}function nx(){return n.jsxs(Se,{gap:"10px",children:[n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Explore"}),n.jsxs(Se,{gap:"10px",children:[n.jsx("a",{href:"/products",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Products"}),n.jsx("a",{href:"/philosophy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Philosophy"}),n.jsx("a",{href:"/community",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Community"}),n.jsx("a",{href:"/privacy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Privacy Policy"})]})]})}function ox(){return n.jsxs(Se,{gap:"10px",children:[n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Standards"}),n.jsxs(Se,{gap:"10px",children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Curated for durability"}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Reliable support"}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Clear policies"})]})]})}function ix(){return n.jsxs(Se,{gap:"10px",children:[n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Policies"}),n.jsxs(Se,{gap:"10px",children:[n.jsx("a",{href:"/terms",style:zo,children:"Terms of Service"}),n.jsx("a",{href:"/privacy",style:zo,children:"Privacy Policy"}),n.jsx("a",{href:"/shipping-policy",style:zo,children:"Shipping Policy"}),n.jsx("a",{href:"/returns-refunds",style:zo,children:"Return and Refund Policy"}),n.jsx("a",{href:"/cookie-policy",style:zo,children:"Cookie Policy"})]})]})}function sx({isDark:o}){return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx(op,{size:24,variant:o?"light":"dark",showText:!1,href:"/"}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:"© VIBE STATION"})]})}function ax(){return n.jsxs("div",{className:"footer-social",children:[n.jsx("a",{className:"footer-social-btn",href:"https://www.instagram.com/expressvibestation?igsh=amU0NmN6YXE0Mnl5&utm_source=qr",target:"_blank",rel:"noreferrer",children:"Instagram"}),n.jsx("a",{className:"footer-social-btn",href:"https://www.youtube.com/channel/UC988AY2Heli187Kj3QuJvJA",target:"_blank",rel:"noreferrer",children:"YouTube"}),n.jsx("a",{className:"footer-social-btn",href:"mailto:studio@thevibestation.com",children:"Email"})]})}const zo={fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"};function lx({children:o}){return n.jsxs(Se,{gap:"0px",style:{minHeight:"100vh"},children:[n.jsx(cx,{}),n.jsx(ux,{children:o}),n.jsx(dx,{})]})}function cx(){return n.jsx(Yy,{})}function ux({children:o}){return n.jsx(px,{children:o})}function dx(){return n.jsx(rx,{})}function px({children:o}){return n.jsx("main",{style:{flex:1,backgroundColor:"var(--background)"},children:n.jsx(Se,{gap:"0px",style:{height:"100%"},children:o})})}const fx={standard:{top:"56px",bottom:"56px"},dense:{top:"32px",bottom:"32px"}},Vo={canvas:{backgroundColor:"var(--surface-canvas, #FFFFFF)"},subtle:{backgroundColor:"var(--surface-subtle, #FCFCFD)"},inverse:{backgroundColor:"var(--surface-inverse, #101828)",color:"var(--text-inverse, #FFFFFF)"}};function mx(o){if(!o||typeof o!="object"||!("type"in o))return!1;const s=o.type;return s===be||s===be.Wide||s===be.Standard||s===be.Narrow}function Rp({children:o}){return n.jsx(n.Fragment,{children:o})}function hx({children:o}){return n.jsx("div",{style:{paddingTop:"56px",paddingBottom:"56px"},children:o})}function gx({children:o}){return n.jsx("div",{style:{paddingTop:"32px",paddingBottom:"32px"},children:o})}function yx({children:o}){return n.jsx("div",{style:Vo.canvas,children:o})}function xx({children:o}){return n.jsx("div",{style:Vo.subtle,children:o})}function vx({children:o}){return n.jsx("div",{style:Vo.inverse,children:o})}function wx({children:o,className:s,padding:l="standard",variant:u="canvas",containerWidth:p="standard",contain:f=!0,paddingTop:m,paddingBottom:g,background:k}){const x=fx[l],w=m??x.top,h=g??x.bottom,v={...Vo[u],backgroundColor:k??Vo[u].backgroundColor},T=f&&!mx(o);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsx("section",{className:`section-responsive ${s||""}`,style:v,children:n.jsx(Rp,{children:T?n.jsx(be,{width:p,children:o}):o})})]})}const nt=Object.assign(wx,{SectionContainerSlot:Rp,PaddingStandard:hx,PaddingDense:gx,VariantCanvas:yx,VariantSubtle:xx,VariantInverse:vx});function bx(){return n.jsx(nt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:n.jsxs(be,{children:[n.jsx(kx,{}),n.jsx(Sx,{})]})})}function kx(){return n.jsxs(Se,{gap:"0px",style:{marginBottom:"24px"},children:[n.jsx(jx,{}),n.jsx(Cx,{})]})}function Sx(){return n.jsxs(Se,{gap:"16px",children:[n.jsx(Tx,{}),n.jsx(Ex,{}),n.jsx(Ix,{}),n.jsx(Rx,{}),n.jsx(_x,{})]})}function jx(){return null}function Cx(){return null}function Tx(){return null}function Ex(){return null}function Ix(){return null}function Rx(){return null}function _x(){return null}function Nx(){return n.jsx(nt,{paddingTop:"64px",paddingBottom:"80px",background:"var(--card)",children:n.jsxs(be,{children:[n.jsx(Px,{}),n.jsx(zx,{})]})})}function Px(){return n.jsx(Se,{gap:"0px",style:{marginBottom:"24px"},children:n.jsx(Ax,{})})}function zx(){return n.jsxs(Se,{gap:"16px",children:[n.jsx(Dx,{}),n.jsx(Lx,{}),n.jsx(Fx,{})]})}function Ax(){return null}function Dx(){return null}function Lx(){return null}function Fx(){return null}const Ox={hero:null,heroMetaBadges:[],featuredDrop:null,socialProof:null};let ps=Ox,ys=!1,Ao=null;const Mx=async()=>Ao||(Ao=(async()=>{var o,s,l,u;try{const p=await hs({first:6});if(p.edges.length===0){ys=!0;return}const f=p.edges.map(x=>x.node),m=f[0],g=Il(m),k=f.slice(0,3).map(x=>{var w,h;return{id:x.id,name:x.title,role:((w=x.featureLine)==null?void 0:w.value)||"Curated product",quote:((h=x.shortDescription)==null?void 0:h.value)||x.description||"Built for consistent daily use.",tag:x.tags[0]||"Curated"}});ps={hero:{eyebrow:"Curated essentials for musicians",headline:"Gear that survives practice, travel, and stage.",supporting:"We research what musicians actually need, then pick durable, best-in-class tools with modern features so you buy once and keep playing.",primaryCta:"Shop products",secondaryCta:"Our philosophy",metaLine:"Fast delivery · Clear returns · Responsive support",featuredDropEyebrow:"Featured drop",featuredDropTitle:m.title,featuredDropSubtitle:((o=m.shortDescription)==null?void 0:o.value)||m.description||"",featuredDropImageUrl:(g==null?void 0:g.url)||"",featuredDropImageAlt:(g==null?void 0:g.altText)||m.title},featuredDrop:{eyebrow:"Featured drop",title:"Best-in-class essentials, chosen to last.",supporting:"One product at a time. Thorough research. Durable materials. Modern features that matter in real practice and gig conditions.",badges:["Durable build","Fast + accurate","Stage-ready"],primaryCta:"View featured",secondaryCta:"See all products",productName:m.title,productPrice:new Intl.NumberFormat("en-IN",{style:"currency",currency:m.priceRange.minVariantPrice.currencyCode,maximumFractionDigits:0}).format(Number.parseFloat(m.priceRange.minVariantPrice.amount)),productCopy:((s=m.shortDescription)==null?void 0:s.value)||m.description||"",featureLine:((l=m.featureLine)==null?void 0:l.value)||"",productBadge:((u=m.badge)==null?void 0:u.value)||m.tags[0]||"",productImageUrl:(g==null?void 0:g.url)||"",productImageAlt:(g==null?void 0:g.altText)||m.title},heroMetaBadges:["Curated for durability","Modern features","Clear policies"],socialProof:{eyebrow:"What musicians notice",title:"Built for real use — not shelf appeal.",supporting:"Feedback that focuses on durability, clarity, and daily reliability.",chips:m.tags.slice(0,4),testimonials:k,ctaLabel:"Explore products"}}}catch(p){console.error("Failed to load home data from Shopify",p)}finally{ys=!0,Ao=null}})(),Ao);function Qo(){const[o,s]=_.useState(ps),[l,u]=_.useState(!ys);return _.useEffect(()=>{let p=!1;return ys?(s(ps),u(!1),()=>{p=!0}):(Mx().then(()=>{p||(s(ps),u(!1))}),()=>{p=!0})},[]),{...o,isLoading:l}}function $x(){const{hero:o}=Qo();return o?n.jsx(nt,{contain:!1,paddingTop:"56px",paddingBottom:"48px",background:"var(--card)",children:n.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:"-200px",right:"-200px",width:"600px",height:"600px",backgroundColor:"#4F46E50F",borderRadius:"50%",filter:"blur(120px)",pointerEvents:"none",zIndex:0}}),n.jsx(be,{width:"wide",className:"relative z-[1]",children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"64px",alignItems:"center"},children:[n.jsx("div",{style:{flex:"0 0 55%"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),n.jsx("h1",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"48px",lineHeight:"56px",fontWeight:"600",color:"var(--foreground)",letterSpacing:"-0.01em",margin:0},children:o.headline}),n.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"540px",margin:0},children:o.supporting}),n.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[n.jsx(Hx,{label:o.primaryCta}),n.jsx(Ux,{label:o.secondaryCta})]}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",marginTop:"8px"},children:o.metaLine})]})}),n.jsx("div",{style:{flex:"0 0 45%",position:"relative"},children:n.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"480px",height:"420px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[n.jsx("div",{style:{backgroundColor:"var(--muted)",height:"280px",width:"100%"},children:o.featuredDropImageUrl?n.jsx("img",{src:o.featuredDropImageUrl,alt:o.featuredDropImageAlt||o.featuredDropTitle,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),n.jsx("div",{style:{padding:"20px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.featuredDropEyebrow}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.featuredDropTitle}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:o.featuredDropSubtitle})]})})]})})]})})]})}):null}function Hx({label:o}){return n.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function Ux({label:o}){return n.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function _p({children:o,wrap:s="on",gap:l=12,align:u="center",justify:p="flex-start",style:f,responsiveGap:m}){const g=typeof l=="number"?`${l}px`:l,k=!!m,x=k?`cluster-${Math.random().toString(36).substr(2,9)}`:"";return n.jsxs(n.Fragment,{children:[k&&n.jsx("style",{children:`
          .${x} {
            display: flex;
            flex-direction: row;
            flex-wrap: ${s==="on"?"wrap":"nowrap"};
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
        `}),n.jsx("div",{className:k?x:void 0,style:k?f:{display:"flex",flexDirection:"row",flexWrap:s==="on"?"wrap":"nowrap",gap:g,alignItems:u,justifyContent:p,...f},children:o})]})}function Bx(){const{heroMetaBadges:o}=Qo();return o.length===0?null:n.jsx(nt,{contain:!1,paddingTop:"24px",paddingBottom:"24px",background:"var(--card)",children:n.jsx(be,{width:"wide",children:n.jsx(_p,{wrap:"on",gap:12,align:"center",children:o.map(s=>n.jsx(ot,{label:s,variant:"neutral",size:"md"},s))})})})}function Wx(){const{featuredDrop:o}=Qo();return o?n.jsx(nt,{paddingTop:"56px",paddingBottom:"56px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"48px",alignItems:"flex-start"},children:[n.jsx("div",{style:{flex:"0 0 45%"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),n.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.title}),n.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"480px",margin:0},children:o.supporting}),n.jsx("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:o.badges.map(s=>n.jsx(ot,{label:s,variant:"neutral",size:"md"},s))}),n.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[n.jsx(Vx,{label:o.primaryCta}),n.jsx(qx,{label:o.secondaryCta})]})]})}),n.jsx("div",{style:{flex:"0 0 55%"},children:n.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"560px",height:"360px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[n.jsx("div",{style:{backgroundColor:"var(--muted)",height:"200px",width:"100%"},children:o.productImageUrl?n.jsx("img",{src:o.productImageUrl,alt:o.productImageAlt||o.productName,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),n.jsx("div",{style:{padding:"16px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.productName}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.productPrice})]}),n.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:o.productCopy}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:o.featureLine}),n.jsx("div",{style:{marginTop:"2px"},children:n.jsx(ot,{label:o.productBadge,variant:"accent",size:"sm"})})]})})]})})]})})}):null}function Vx({label:o}){return n.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function qx({label:o}){return n.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function Yx(){return null}function Qx(){return null}function Kx(){return null}function Xx(){return null}function Gx(){const{socialProof:o}=Qo();return o?n.jsx(nt,{paddingTop:"56px",paddingBottom:"56px",background:"var(--card)",children:n.jsxs(be,{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"24px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.eyebrow}),n.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.title}),n.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:o.supporting})]}),n.jsx("div",{style:{display:"flex",gap:"12px",marginBottom:"32px"},children:o.chips.map(s=>n.jsx(ot,{label:s,variant:"neutral",size:"md"},s))}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"32px"},children:o.testimonials.map(s=>n.jsx("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"220px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",padding:"20px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)"},children:s.name}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:s.role})]}),n.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,flex:1},children:s.quote}),n.jsx("div",{children:n.jsx(ot,{label:s.tag,variant:"neutral",size:"sm"})})]})},s.id))}),n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx(Jx,{label:o.ctaLabel})})]})}):null}function Jx({label:o}){return n.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function Zx(){return null}function ev(){return null}function tv(){return null}function De({width:o="100%",height:s="16px",borderRadius:l="8px",style:u,...p}){const f={width:o,height:s,borderRadius:l,background:"linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 37%, var(--skeleton-base) 63%)",backgroundSize:"400% 100%",animation:"vs-skeleton-shimmer 1.2s ease-in-out infinite"};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        @keyframes vs-skeleton-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `}),n.jsx("div",{"aria-hidden":"true",style:{...f,...u},...p})]})}function rv(){return n.jsxs(Se,{gap:"0px",children:[n.jsx(nt,{paddingTop:"56px",paddingBottom:"48px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:"48px"},children:[n.jsxs(Se,{gap:"16px",children:[n.jsx(De,{width:"140px",height:"14px"}),n.jsx(De,{width:"88%",height:"56px",borderRadius:"12px"}),n.jsx(De,{width:"92%",height:"24px"}),n.jsx(De,{width:"80%",height:"24px"}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(De,{width:"136px",height:"44px",borderRadius:"12px"}),n.jsx(De,{width:"136px",height:"44px",borderRadius:"12px"})]})]}),n.jsx(De,{width:"100%",height:"420px",borderRadius:"16px"})]})})}),n.jsx(nt,{paddingTop:"48px",paddingBottom:"56px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs(Se,{gap:"16px",children:[n.jsx(De,{width:"180px",height:"18px"}),n.jsx(De,{width:"56%",height:"32px"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(o=>n.jsx(De,{height:"240px",borderRadius:"16px"},o))})]})})})]})}function nv(){return n.jsx(nt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs(Se,{gap:"16px",children:[n.jsx(De,{width:"96px",height:"14px"}),n.jsx(De,{width:"180px",height:"40px"}),n.jsx(De,{width:"420px",height:"24px"}),n.jsx(De,{width:"100%",height:"44px",borderRadius:"12px"}),n.jsx("div",{style:{display:"flex",gap:"12px"},children:[1,2,3,4].map(o=>n.jsx(De,{width:"112px",height:"36px",borderRadius:"999px"},o))}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3,4,5,6].map(o=>n.jsx(De,{height:"460px",borderRadius:"16px"},o))})]})})})}function ov(){return n.jsxs(Se,{gap:"0px",children:[n.jsx(nt,{paddingTop:"24px",paddingBottom:"16px",background:"var(--card)",children:n.jsx(be,{children:n.jsx(De,{width:"280px",height:"16px"})})}),n.jsx(nt,{paddingTop:"16px",paddingBottom:"32px",background:"var(--card)",children:n.jsx(be,{children:n.jsxs(Se,{gap:"12px",children:[n.jsx(De,{width:"120px",height:"14px"}),n.jsx(De,{width:"52%",height:"36px"}),n.jsx(De,{width:"72%",height:"22px"})]})})}),n.jsx(nt,{paddingTop:"24px",paddingBottom:"48px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 420px",gap:"48px"},children:[n.jsx(De,{width:"100%",height:"560px",borderRadius:"16px"}),n.jsx(De,{width:"100%",height:"560px",borderRadius:"16px"})]})})}),n.jsx(nt,{paddingTop:"48px",paddingBottom:"56px",background:"var(--card)",children:n.jsx(be,{children:n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(o=>n.jsx(De,{height:"220px",borderRadius:"16px"},o))})})})]})}function iv(){const{isLoading:o}=Qo();return o?n.jsx(rv,{}):n.jsxs(n.Fragment,{children:[n.jsx(sv,{}),n.jsx(av,{})]})}function sv(){return n.jsxs(Se,{gap:"0px",children:[n.jsx($x,{}),n.jsx(Bx,{})]})}function av(){return n.jsxs(Se,{gap:"0px",children:[n.jsx(Wx,{}),n.jsx(Yx,{}),n.jsx(Qx,{}),n.jsx(Kx,{}),n.jsx(Xx,{}),n.jsx(Gx,{}),n.jsx(Zx,{}),n.jsx(ev,{}),n.jsx(tv,{})]})}function lv(){return n.jsx(nt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:n.jsxs(be,{children:[n.jsx(cv,{}),n.jsx(uv,{})]})})}function cv(){return n.jsxs(Se,{gap:"0px",style:{marginBottom:"24px"},children:[n.jsx(dv,{}),n.jsx(pv,{})]})}function uv(){return n.jsxs(Se,{gap:"16px",children:[n.jsx(fv,{}),n.jsx(mv,{}),n.jsx(hv,{}),n.jsx(gv,{}),n.jsx(yv,{}),n.jsx(xv,{}),n.jsx(vv,{}),n.jsx(wv,{})]})}function dv(){return null}function pv(){return null}function fv(){return null}function mv(){return null}function hv(){return null}function gv(){return null}function yv(){return null}function xv(){return null}function vv(){return null}function wv(){return null}const bv="http://localhost:3001",ls="/api/shopify/admin/product-metadata",kv=o=>`${(ls.startsWith("http://")||ls.startsWith("https://")?ls:`${bv.replace(/\/+$/,"")}/${ls.replace(/^\/+/,"")}`).replace(/\/+$/,"")}/${encodeURIComponent(o)}`;async function Sv(o){const s=await fetch(kv(o),{method:"GET",credentials:"include"});if(!s.ok)throw s.status===429?new Le("Rate limit exceeded","RATE_LIMIT"):new Le(`HTTP ${s.status}`,"HTTP_ERROR");return(await s.json()).product??null}const Hn={productHeader:{badge:"",title:"",vendor:"",sku:"",shareUrl:"",shareLabel:""},productMain:{gallery:{images:[],zoomLabel:"",prevLabel:"",nextLabel:""},buyBox:{variantId:null,badge:"",name:"",descriptor:"",price:"",compareAtPrice:null,stock:"",isInStock:!1,features:[],reassurancePoints:[],primaryCta:"Add to cart",secondaryCta:"Buy now",microLine:"",inBoxTitle:"",inBoxLine:""}},keyBenefits:{title:"",cards:[]},featureDeepDive:{overviewTitle:"",overviewHtml:"",storyTitle:"",storyHtml:"",buyingGuideTitle:"",buyingGuideHtml:"",curatedFor:"",notFor:""},deliveryAndReturns:[],reviews:{title:"",supporting:"",averageLabel:"",averageValue:"",totalReviewsLabel:"",verifiedLabel:"",useCasePrefix:"",writeReviewLabel:"Write a review",loadMoreLabel:"Load more",breakdown:[],tags:[],items:[]},relatedProducts:{title:"Complete your setup",viewAllLabel:"View all",addToCartLabel:"Add to cart",items:[]},specsAndInBox:{specificationsTitle:"",specifications:[],inBoxTitle:"",inBoxItems:[],inBoxBadge:"",productDetailsTitle:"",productDetails:[]},faq:{title:"",items:[]},stickyCtaRail:{variantId:null,name:"",price:"",stockLabel:"",isInStock:!1,shippingLabel:"",reassurancePoints:[],addToCartLabel:"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}},fs="all",jv="All",Np=o=>o.trim().toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),Cv="https://thevibestation.com".replace(/\/+$/,""),Tv=["capo","tuner","string","pick","holder","gig bag","bundle","essentials"],Pp=o=>{var l,u,p,f;const s=(u=(l=o.variants)==null?void 0:l.edges.find(m=>{const g=m.node;return g.availableForSale&&(typeof g.quantityAvailable!="number"||g.quantityAvailable>0)}))==null?void 0:u.node;return(s==null?void 0:s.id)||((f=(p=o.variants)==null?void 0:p.edges[0])==null?void 0:f.node.id)||null},zp=o=>{var s,l;return((l=(s=o.variants)==null?void 0:s.edges[0])==null?void 0:l.node)??null},ms=(o,s)=>{if(!o||!s)return"₹—";const l=Number.parseFloat(o);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:s,maximumFractionDigits:0}).format(l):`${s} ${o}`},Wn=o=>o?o.replace(/<br\s*\/?>/gi,`
`).replace(/<\/(p|div|li|h[1-6])>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").trim():"",xr=o=>o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),vr=o=>o?o.replace(/\r\n?/g,`
`).replace(/\\r\\n|\\r/g,`
`).replace(/\\n/g,`
`).replace(/\\t/g," ").replace(/&nbsp;/gi," ").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim():"",xs=o=>o.replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,s=>s.toUpperCase()),Ev=o=>/taxonomy\s*reference/i.test(o),Iv=o=>o.split(">").map(s=>s.trim()).filter(Boolean).at(-1)||o.trim(),cs=(o,s)=>{const l=vr(s).replace(/\s*\n+\s*/g," ").replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim();return l?/^label$/i.test(o)?l:/^color$/i.test(o)?`(${l})`:l:""},Bd=o=>o.replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*\|\s*/g," | ").replace(/\s*,\s*\|/g," |").replace(/\|\s*,\s*/g,"| ").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim(),Rv=o=>{var f;const s=o.fields.filter(m=>m.value&&m.value.trim().length>0&&!Ev(m.key));if(s.length===0)return((f=o.displayName)==null?void 0:f.trim())||"";const l=s.find(m=>/^label$/i.test(m.key)),u=s.find(m=>/^color$/i.test(m.key)),p=s.filter(m=>!/^label$/i.test(m.key)&&!/^color$/i.test(m.key));if(l){const m=[cs(l.key,l.value??""),...u?[cs(u.key,u.value??"")]:[]].filter(Boolean);if(p.length===0&&m.length>0)return m.join(" ");const g=p.map(k=>cs(k.key,k.value??"")).filter(Boolean);return[...m,...g].join(", ")}return s.map(m=>cs(m.key,m.value??"")).filter(Boolean).join(", ")},_v=o=>vr(o).replace(/<br\s*\/?>/gi,`
`).split(`
`).map(s=>Wn(s).trim()).filter(Boolean),ml=o=>_v(o).map(s=>{const l=s.match(/^([^:]+):\s*(.+)$/);return l?{label:xs(l[1]),value:vr(l[2]).replace(/\s*\n+\s*/g," ").trim()}:null}).filter(s=>!!s&&s.value.length>0),Wd=o=>{const s=vr(o);return s?s.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(u=>u.trim()).filter(Boolean).map(u=>{const p=u.split(`
`).map(k=>Wn(k).trim()).filter(Boolean);if(p.length===0)return"";if(p.length>1&&p[0].endsWith(":")){const k=`<p><strong>${xr(p[0])}</strong></p>`,x=p.slice(1).map(w=>`<li>${xr(w)}</li>`).join("");return x?`${k}<ul>${x}</ul>`:k}const f=[];let m=[];const g=()=>{m.length!==0&&(f.push(`<p>${xr(m.join(" "))}</p>`),m=[])};return p.forEach(k=>{const x=k.match(/^([^:]{1,60}):\s*(.+)$/);if(x){g(),f.push(`<p><strong>${xr(x[1].trim())}:</strong> ${xr(x[2].trim())}</p>`);return}m.push(k)}),g(),f.join("")}).join(""):""},Nv=o=>{const s=o.trim();return s.startsWith("[")||s.includes("•")||s.includes("|")},Ap=o=>{const s=typeof o.type=="string"?o.type:"",l=typeof o.value=="string"?xr(o.value):"",u=Array.isArray(o.children)?o.children.map(p=>p&&typeof p=="object"?Ap(p):"").join(""):"";switch(s){case"root":return u;case"paragraph":return`<p>${u}</p>`;case"heading":return`<h3>${u}</h3>`;case"text":return l;case"text_bold":return`<strong>${u||l}</strong>`;case"text_italic":return`<em>${u||l}</em>`;case"list":return`<ul>${u}</ul>`;case"list-item":return`<li>${u}</li>`;case"link":return typeof o.url=="string"?`<a href="${xr(o.url)}">${u}</a>`:u;default:return u||l}},hl=o=>{if(!o)return"";const s=vr(o);if(Nv(s)){const l=vs(s);if(l.length>0)return`<ul>${l.map(u=>`<li>${xr(u)}</li>`).join("")}</ul>`}if(s.includes("<"))return s;try{const l=JSON.parse(s);if(l&&typeof l=="object")return Ap(l)}catch{return Wd(s)}return Wd(s)},vs=o=>{const s=vr(o);if(!s)return[];const l=u=>u.replace(/<br\s*\/?>/gi,`
`).split(/\n|,|\||•/).map(p=>Wn(p).trim()).filter(Boolean);try{const u=JSON.parse(s);if(Array.isArray(u))return u.flatMap(p=>typeof p=="string"?l(p):[]).filter(Boolean);if(typeof u=="string")return l(u)}catch{return l(s)}return[]},Pv=o=>{const s=vr(o);if(!s)return[];try{const l=JSON.parse(s);if(l&&typeof l=="object"&&!Array.isArray(l)){const u=Object.entries(l).flatMap(([p,f])=>{const m=ml(`${xs(p)}: ${String(f)}`);return m.length>0?m:[{label:xs(p),value:vr(String(f)).replace(/\s*\n+\s*/g," ").trim()}]}).filter(p=>p.value.length>0);if(u.length>0)return u}}catch{return ml(s)}return ml(s)},zv=o=>{if(!o)return[];try{const s=JSON.parse(o);if(Array.isArray(s))return s.map(l=>{if(!l||typeof l!="object")return null;const u=l,p=typeof u.question=="string"?u.question.trim():"",f=typeof u.answer=="string"?u.answer.trim():"";return p&&f?{question:p,answer:f}:null}).filter(l=>!!l)}catch{return o.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(l=>Wn(l)).filter(Boolean).map(l=>{const[u,...p]=l.split(`
`),f=p.join(" ").trim();return!u||!f?null:{question:u.replace(/^Q[:\-]?\s*/i,""),answer:f.replace(/^A[:\-]?\s*/i,"")}}).filter(l=>!!l)}return[]},Sl=(o,s="Yes",l="No")=>{if(!o)return"";const u=o.trim().toLowerCase();return["true","yes","available","1"].includes(u)?s:["false","no","not available","0"].includes(u)?l:o.trim()},Dp=()=>{if(typeof window>"u")return null;const o=window.location.pathname.match(/\/products\/([^/]+)/);return(o==null?void 0:o[1])??null},Lp=o=>`${Cv}/products/${o.handle}`,Av=o=>{var u;if(o.availableForSale===!1)return"Out of stock";if(typeof o.totalInventory=="number")return o.totalInventory>0?`In stock (${o.totalInventory} available)`:"Out of stock";const s=zp(o);return s&&typeof s.quantityAvailable=="number"?s.quantityAvailable>0?`In stock (${s.quantityAvailable} available)`:"Out of stock":((u=o.variants)==null?void 0:u.edges.some(p=>{const f=p.node;return f.availableForSale===!1?!1:typeof f.quantityAvailable=="number"?f.quantityAvailable>0:f.availableForSale===!0}))?"In stock":"Out of stock"},Dv=o=>{var l;return vs((l=o.whyDifferent)==null?void 0:l.value).slice(0,3).map((u,p)=>({id:`${o.handle}-feature-${p}`,badge:`0${p+1}`,title:u,description:"",footer:""}))},Lv=o=>{const s=`${o.title} ${o.tags.join(" ")}`.toLowerCase();return Tv.some(l=>s.includes(l))?"Pair it with these":"Complete your setup"},Fv=o=>{var u;const s={averageValue:"—",totalReviewsLabel:"No reviews yet",breakdown:[],tags:[],items:[]},l=(u=o.reviewSummary)==null?void 0:u.value;if(!l)return s;try{const p=JSON.parse(l),f=typeof p.average=="number"?p.average.toFixed(1):"—",m=typeof p.count=="number"?p.count:0,g=Array.isArray(p.breakdown)?p.breakdown:[],k=Array.isArray(p.items)?p.items:[],x=Array.isArray(p.tags)?p.tags:[];return{averageValue:f,totalReviewsLabel:`${m} review${m===1?"":"s"}`,breakdown:g.map(w=>{if(!w||typeof w!="object")return null;const h=w,v=typeof h.stars=="number"?h.stars:0,T=typeof h.count=="number"?h.count:0;return v>0?{stars:v,count:T,label:`${v} star`}:null}).filter(w=>!!w).sort((w,h)=>h.stars-w.stars),tags:x.filter(w=>typeof w=="string"),items:k.map((w,h)=>{if(!w||typeof w!="object")return null;const v=w;return{id:typeof v.id=="string"?v.id:`review-${h}`,name:typeof v.name=="string"?v.name:"Verified buyer",role:typeof v.role=="string"?v.role:"Customer",quote:typeof v.quote=="string"?v.quote:"",useCase:typeof v.useCase=="string"?v.useCase:"General use",rating:typeof v.rating=="number"?v.rating:5,tags:Array.isArray(v.tags)?v.tags.filter(T=>typeof T=="string"):[],verified:v.verified!==!1}}).filter(w=>!!w&&w.quote.length>0)}}catch{return s}},Ov=o=>{var l,u,p,f,m,g,k;const s=[(l=o.packCount)==null?void 0:l.value,(u=o.bestFor)==null?void 0:u.value,(p=o.dispatchTime)==null?void 0:p.value,(f=o.deliveryWindow)==null?void 0:f.value,(m=o.returnsPolicy)==null?void 0:m.value,Sl((g=o.codAvailable)==null?void 0:g.value,"COD available","COD unavailable"),Sl((k=o.secureCheckout)==null?void 0:k.value,"Secure checkout","")].map(x=>x==null?void 0:x.trim()).filter(x=>!!x);return Array.from(new Set(s)).slice(0,6)},Mv=o=>{var l,u,p;const s=zp(o);return[{label:"SKU",value:(s==null?void 0:s.sku)||"Available on request"},{label:"Brand",value:o.vendor||"Vibe Station"},{label:"Country of origin",value:((l=o.countryOfOrigin)==null?void 0:l.value)||""},{label:"GST invoice",value:Sl((u=o.gstInvoice)==null?void 0:u.value,"Available","Not specified")||"Not specified"},{label:"Care / storage",value:Wn((p=o.careInstructions)==null?void 0:p.value)},{label:"Shareable short URL",value:Lp(o)}].filter(f=>f.value.trim().length>0)},Fp=o=>{const s=o==null?void 0:o.trim();if(!s)return[];try{const l=JSON.parse(s);if(Array.isArray(l))return l.map(u=>typeof u=="string"?u.trim():"").filter(u=>u.length>0)}catch{}return s.split(/[\n,]+/).map(l=>l.trim()).filter(Boolean)},Vd=o=>{var s;return Array.from(new Set([...Fp((s=o.categories)==null?void 0:s.value),...o.tags.map(l=>l.trim()).filter(Boolean)]))},qd=o=>o.map(s=>Np(s)).filter(Boolean),$v=async o=>{const s=Vd(o),l=new Set(qd(s)),u=new Set(s.map(f=>f.toLowerCase()));return l.size===0&&u.size===0?[]:(await hs({first:50})).edges.map(f=>f.node).filter(f=>f.id!==o.id).map(f=>{const m=Vd(f),g=qd(m),k=m.filter(w=>u.has(w.toLowerCase())).length,x=g.filter(w=>l.has(w)).length;return{candidate:f,score:k+x}}).filter(f=>f.score>0).sort((f,m)=>m.score-f.score).slice(0,20).map(f=>f.candidate)},Hv=o=>(o??[]).flatMap(s=>{const l=xs(s.key),u=s.reference?[s.reference]:[],p=Array.isArray(s.references)?s.references:[],f=[...u,...p].map(k=>Rv(k)).filter(Boolean),m=Bd(vr(s.value).replace(/\s*\n+\s*/g," ").trim()),g=Bd(f.length>0?f.join(" | "):m);return g.length>0?[{label:l,value:g}]:[]}),Uv=(o,s)=>{var k,x,w,h;const l=Pv((k=o.specifications)==null?void 0:k.value),u=Fp((x=o.categories)==null?void 0:x.value),p=((w=s==null?void 0:s.category)==null?void 0:w.fullName)||((h=s==null?void 0:s.category)==null?void 0:h.name)||"",f=Array.from(new Set([...u,...p?[p]:[]].map(v=>Iv(v)).filter(Boolean))),m=f.length>0?[{label:"Category",value:f.join(", ")}]:[],g=Hv(s==null?void 0:s.shopifyMetafields);return[...m,...g,...l].filter((v,T,R)=>{const P=`${v.label.toLowerCase()}::${v.value.toLowerCase()}`;return R.findIndex(z=>`${z.label.toLowerCase()}::${z.value.toLowerCase()}`===P)===T})},Bv=(o,s)=>s.filter(l=>l.id!==o.id&&l.handle!==o.handle).slice(0,6).map(l=>{var p,f,m;const u=Il(l);return{id:l.handle,variantId:Pp(l),badge:((p=l.badge)==null?void 0:p.value)||l.tags[0]||"Curated",name:l.title,descriptor:((f=l.shortDescription)==null?void 0:f.value)||l.description||"Curated recommendation",featureLine:((m=l.featureLine)==null?void 0:m.value)||l.tags.slice(0,3).join(" · ")||"Pairs well with this setup",price:ms(l.priceRange.minVariantPrice.amount,l.priceRange.minVariantPrice.currencyCode),imageUrl:u==null?void 0:u.url,imageAlt:(u==null?void 0:u.altText)||l.title}}),Wv=()=>Hn.reviews,Vv=({product:o,adminMetadata:s,relatedProducts:l})=>{var ie,le,ae,J,ne,se,ye,Ce,Q,K,$,ce,he,Qe,Te,re,me,O,V,H,S,N,B,Z,ue,G,ge,pe,xe,Fe,sr,br;const u=((le=(ie=o.variants)==null?void 0:ie.edges[0])==null?void 0:le.node)??null,p=hl((ae=o.whyDifferent)==null?void 0:ae.value),f=hl((J=o.buyingGuide)==null?void 0:J.value),m=hl(o.description)||o.descriptionHtml||`<p>${xr(o.description)}</p>`,g=Uv(o,s),k=vs((ne=o.whatsInBox)==null?void 0:ne.value),x=vs((se=o.bulletFeatures)==null?void 0:se.value),w=Dv(o),h=Av(o),v=h.toLowerCase().startsWith("in stock"),T=Pp(o),R=Fv(o),P=Ov(o),z=Lp(o);return{productHeader:{badge:((ye=o.badge)==null?void 0:ye.value)||"Curated pick",title:o.title,vendor:o.vendor||"Vibe Station",sku:(u==null?void 0:u.sku)||"—",shareUrl:z,shareLabel:"Shareable short URL"},productMain:{gallery:{images:o.images.edges.map((Ct,Jt)=>({id:Ct.node.id||`${o.handle}-${Jt}`,url:Ct.node.url,altText:Ct.node.altText||`${o.title} image ${Jt+1}`}))||[],zoomLabel:"Zoom",prevLabel:"Prev",nextLabel:"Next"},buyBox:{variantId:T,badge:((Ce=o.badge)==null?void 0:Ce.value)||"Curated pick",name:o.title,descriptor:((Q=o.subtitle)==null?void 0:Q.value)||((K=o.shortDescription)==null?void 0:K.value)||Wn(o.descriptionHtml)||o.description,price:ms(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),compareAtPrice:($=o.compareAtPriceRange)!=null&&$.minVariantPrice?ms(o.compareAtPriceRange.minVariantPrice.amount,o.compareAtPriceRange.minVariantPrice.currencyCode):null,stock:h,isInStock:v,features:x,reassurancePoints:P,primaryCta:((ce=o.ctaLabel)==null?void 0:ce.value)||"Add to cart",secondaryCta:((he=o.ctaSubtext)==null?void 0:he.value)||"Buy now",microLine:((Qe=o.shippingInfo)==null?void 0:Qe.value)||[(Te=o.dispatchTime)==null?void 0:Te.value,(re=o.supportResponseTime)==null?void 0:re.value,(me=o.deliveryWindow)==null?void 0:me.value].filter(Boolean).join(" · ")||"Shipping calculated at checkout · Clear returns · Responsive support",inBoxTitle:"What's in the box",inBoxLine:k.join(" · ")}},keyBenefits:{title:"Why it feels different",cards:w},featureDeepDive:{overviewTitle:"Product overview",overviewHtml:m,storyTitle:"Why this made the cut",storyHtml:p,buyingGuideTitle:"Buying guide",buyingGuideHtml:f,curatedFor:((O=o.curatedFor)==null?void 0:O.value)||((V=o.bestFor)==null?void 0:V.value)||"Players comparing feel, grip, and attack quickly.",notFor:((H=o.notFor)==null?void 0:H.value)||"Players who already know they only want one exact gauge."},deliveryAndReturns:[{id:"dispatch",badge:"Dispatch",title:"Estimated dispatch",description:((S=o.deliveryInfo)==null?void 0:S.value)||"",footer:((N=o.deliveryWindow)==null?void 0:N.value)||""},{id:"returns",badge:"Returns",title:"Returns & replacements",description:((B=o.returnsPolicy)==null?void 0:B.value)||"",footer:((Z=o.replacementPolicy)==null?void 0:Z.value)||""},{id:"support",badge:"Support",title:"Support response",description:((ue=o.supportInfo)==null?void 0:ue.value)||"",footer:((G=o.supportResponseTime)==null?void 0:G.value)||""}].filter(Ct=>Ct.description.trim().length>0||Ct.footer.trim().length>0),reviews:{...Wv(),supporting:(ge=o.reviewSummary)!=null&&ge.value?"Real review summary pulled from Shopify metafields.":"Add custom.reviews in Shopify to populate rating, review count, tags, and breakdown.",averageLabel:R.averageValue==="—"?"No rating yet":`${R.averageValue} / 5`,averageValue:R.averageValue,totalReviewsLabel:R.totalReviewsLabel,breakdown:R.breakdown,tags:R.tags,items:R.items},relatedProducts:{...Hn.relatedProducts,title:Lv(o),items:Bv(o,l)},specsAndInBox:{specificationsTitle:"Specifications",specifications:g,inBoxTitle:"In the box",inBoxItems:k,inBoxBadge:((pe=o.packCount)==null?void 0:pe.value)||"No extras required",productDetailsTitle:"Product details",productDetails:Mv(o)},faq:{title:"FAQ",items:zv((xe=o.faq)==null?void 0:xe.value)},stickyCtaRail:{variantId:T,name:o.title,price:ms(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),stockLabel:h,isInStock:v,shippingLabel:((Fe=o.deliveryWindow)==null?void 0:Fe.value)||((sr=o.shippingInfo)==null?void 0:sr.value)||"Shipping calculated at checkout",reassurancePoints:P,addToCartLabel:((br=o.ctaLabel)==null?void 0:br.value)||"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}}};let gn=Hn,Ho=!1,Do=null,Uo=null,Oo=!1;const qv=async o=>{const s=o??Dp();return Do&&s===Uo||(Do=(async()=>{try{const l=s;if(!l){gn=Hn,Oo=!1,Ho=!0,Uo=null;return}Uo=l;const[u,p]=await Promise.all([xh(l),Sv(l).catch(m=>(console.error("Failed to load public admin product metadata",m),null))]);if(!u){gn=Hn,Oo=!1,Ho=!0;return}const f=await $v(u).catch(()=>[]);gn=Vv({product:u,adminMetadata:p,relatedProducts:f}),Oo=!0}catch(l){gn=Hn,Oo=!1,console.error("Failed to load product detail from Shopify",l)}finally{Ho=!0,Do=null}})()),Do};function Gt(){const o=Dp(),[s,l]=_.useState(gn),[u,p]=_.useState(!Ho||Uo!==o);return _.useEffect(()=>{let f=!1;return Ho&&Uo===o?(l(gn),p(!1),()=>{f=!0}):(p(!0),qv(o).then(()=>{f||(l(gn),p(!1))}),()=>{f=!0})},[o]),{...s,hasProduct:Oo,isLoading:u}}function Yv(){const{productHeader:o}=Gt();return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"product-title-block",children:[n.jsxs("div",{className:"product-title-badge-row",children:[n.jsx(ot,{label:o.badge,variant:"accent",size:"sm"}),n.jsx("span",{className:"product-title-vendor",children:o.vendor})]}),n.jsx("h1",{className:"product-title-h1","data-testid":"product-title",children:o.title}),n.jsxs("div",{className:"product-title-meta",children:[n.jsxs("span",{children:["SKU: ",o.sku]}),n.jsxs("span",{children:[o.shareLabel,": ",o.shareUrl]})]})]})]})}function Qv(){const{productHeader:o}=Gt();return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsx("nav",{"aria-label":"Breadcrumb",children:n.jsxs("ol",{className:"breadcrumb-nav",children:[n.jsx("li",{children:n.jsx("a",{href:"/",className:"breadcrumb-link",children:"Home"})}),n.jsx("li",{className:"breadcrumb-separator",children:"/"}),n.jsx("li",{children:n.jsx("a",{href:"/products",className:"breadcrumb-link",children:"Products"})}),n.jsx("li",{className:"breadcrumb-separator",children:"/"}),n.jsx("li",{className:"breadcrumb-current",children:o.title})]})})]})}const Kv={sm:"12px",md:"16px",lg:"20px"};function Xv(o){switch(o){case"subtle":return{backgroundColor:"var(--muted)",border:"1px solid var(--border)",boxShadow:"none"};case"outline":return{backgroundColor:"transparent",border:"1px solid var(--border)",boxShadow:"none"};case"elevated":default:return{backgroundColor:"var(--card)",border:"1px solid var(--border)",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F"}}}function Be({children:o,mediaSlot:s,footerSlot:l,variant:u="elevated",padding:p="md",width:f="100%",height:m}){const g=Xv(u),k=Kv[p];return n.jsxs("div",{style:{...g,borderRadius:"16px",width:f,height:m,overflow:"hidden",display:"flex",flexDirection:"column"},children:[s,o?n.jsx("div",{style:{padding:k},children:o}):null,l?n.jsx("div",{style:{padding:k,paddingTop:"0"},children:l}):null]})}function Gv({children:o}){return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",position:"relative"},children:o})}function Jv({children:o}){return n.jsx("label",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function Zv({children:o}){return n.jsx("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:o})}function e0({placeholder:o,value:s,onChange:l,disabled:u,inputMode:p,maxLength:f,autoComplete:m,name:g}){return n.jsx("input",{type:"text",placeholder:o||"Enter text...",value:s,onChange:l?k=>{l(k.target.value)}:void 0,disabled:u,inputMode:p,maxLength:f,autoComplete:m,name:g,style:{width:"100%",border:"none",outline:"none",background:"transparent",fontSize:"14px",lineHeight:"20px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",padding:0}})}function t0({children:o,error:s}){return n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:s?"var(--destructive)":"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:o})}function r0({label:o,placeholder:s,helperText:l,error:u,disabled:p,size:f="md",value:m,onValueChange:g,inputMode:k,maxLength:x,autoComplete:w,name:h}){const v=f==="sm"?"36px":"44px",T=f==="sm"?"12px":"14px",R=f==="sm"?"10px":"12px";let P="var(--border)";return u&&(P="var(--destructive)"),n.jsxs(Gv,{children:[o&&n.jsx(Jv,{children:o}),n.jsx(Zv,{children:n.jsx("div",{style:{width:"100%",height:v,display:"flex",alignItems:"center",paddingLeft:T,paddingRight:T,backgroundColor:"var(--card)",border:`1px solid ${P}`,borderRadius:R,opacity:p?.4:1,transition:"border-color 150ms ease"},children:n.jsx(e0,{placeholder:s,value:m,onChange:g,disabled:p,inputMode:k,maxLength:x,autoComplete:w,name:h})})}),l&&n.jsx("div",{style:{opacity:p?.4:1},children:n.jsx(t0,{error:u,children:l})})]})}const n0="http://localhost:3001",us="/eta/check";function o0(){return us.startsWith("http://")||us.startsWith("https://")?us:`${n0.replace(/\/+$/,"")}/${us.replace(/^\/+/,"")}`}async function i0(o){const l=await(await fetch(o0(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deliveryPincode:o})})).json();if(!l||typeof l!="object"||typeof l.message!="string")throw new Error("ETA service returned an unexpected response.");return l}function Yd(o){const[s,l,u]=o.split("-");return!s||!l||!u?o:`${u}-${l}-${s}`}function Op(){const[o,s]=_.useState(""),[l,u]=_.useState(null),[p,f]=_.useState(null),[m,g]=_.useState(!1),[k,x]=_.useState(!1);_.useEffect(()=>{if(typeof window>"u")return;const P=window.localStorage.getItem("deliveryPincode");P&&s(P)},[]),_.useEffect(()=>{if(!(typeof window>"u")){if(o.length>0){window.localStorage.setItem("deliveryPincode",o);return}window.localStorage.removeItem("deliveryPincode")}},[o]);const w=k&&o.length>0&&o.length!==6,h=p?"error":l!=null&&l.serviceable?"success":l?"warning":null,v=P=>{s(P.replace(/\D/g,"").slice(0,6)),x(!0),f(null),u(null)},T=async()=>{const P=o.trim();if(x(!0),f(null),u(null),!!/^\d{6}$/.test(P)){g(!0);try{const z=await i0(P);u(z)}catch(z){f(z instanceof Error?z.message:"We could not check delivery right now. Please try again.")}finally{g(!1)}}},R=w?"Enter a valid 6-digit pincode.":"Enter your 6-digit pincode to check delivery availability.";return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsx(r0,{label:"Delivery pincode",placeholder:"110001",helperText:R,error:w,value:o,onValueChange:v,inputMode:"numeric",maxLength:6,autoComplete:"postal-code",name:"deliveryPincode"}),n.jsx("div",{children:n.jsx(Ye,{variant:"secondary",size:"sm",label:m?"Checking...":"Check delivery",onClick:T,disabled:m})}),l||p?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",padding:"12px 14px",borderRadius:"12px",border:h==="success"?"1px solid rgba(34, 197, 94, 0.28)":h==="warning"?"1px solid rgba(245, 158, 11, 0.24)":"1px solid rgba(239, 68, 68, 0.24)",background:h==="success"?"rgba(34, 197, 94, 0.08)":h==="warning"?"rgba(245, 158, 11, 0.08)":"rgba(239, 68, 68, 0.08)"},children:[n.jsx("div",{style:{fontSize:"13px",lineHeight:"18px",fontWeight:600,color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:p||(l==null?void 0:l.message)}),l!=null&&l.serviceable&&l.eta?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px",fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:[n.jsxs("span",{children:["Dispatch in ",l.eta.dispatchBusinessDays," business day",l.eta.dispatchBusinessDays===1?"":"s","."]}),n.jsxs("span",{children:["Transit ",l.eta.transitMinBusinessDays,"-",l.eta.transitMaxBusinessDays," business days from"," ",l.originZone," to ",l.destinationZone,"."]}),n.jsxs("span",{children:["ETA window: ",Yd(l.eta.estimatedMinDate)," to"," ",Yd(l.eta.estimatedMaxDate)]})]}):null,l!=null&&l.reasonCode?n.jsxs("div",{style:{fontSize:"11px",lineHeight:"16px",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:["Code: ",l.reasonCode]}):null]}):null]})}function s0(){return n.jsxs("div",{className:"product-main",children:[n.jsx(a0,{}),n.jsx(l0,{})]})}function a0(){const{productMain:o}=Gt(),[s,l]=_.useState(0),u=o.gallery.images,p=u[s],f=()=>{u.length!==0&&l(g=>g===0?u.length-1:g-1)},m=()=>{u.length!==0&&l(g=>(g+1)%u.length)};return n.jsxs("div",{className:"product-main__gallery",children:[n.jsx(Be,{variant:"elevated",height:"560px",mediaSlot:n.jsxs("div",{className:"product-main__gallery-frame",children:[p?n.jsx("img",{className:"product-main__gallery-image",src:p.url,alt:p.altText}):n.jsx("div",{className:"product-main__gallery-placeholder"}),n.jsx("div",{className:"product-main__gallery-badge",children:n.jsx(ot,{label:o.gallery.zoomLabel,variant:"neutral",size:"sm"})}),n.jsxs("div",{className:"product-main__gallery-actions",children:[n.jsx(Ye,{variant:"ghost",size:"sm",label:o.gallery.prevLabel,onClick:f}),n.jsx(Ye,{variant:"ghost",size:"sm",label:o.gallery.nextLabel,onClick:m})]})]})}),n.jsx("div",{className:"product-main__thumbnail-row",children:u.length>0?u.map((g,k)=>n.jsx("button",{className:`product-main__thumbnail-button${k===s?" product-main__thumbnail-button--active":""}`,type:"button",onClick:()=>l(k),children:n.jsx("img",{className:"product-main__thumbnail-image",src:g.url,alt:g.altText})},g.id)):[1,2,3,4].map(g=>n.jsx("div",{className:`product-main__thumbnail-placeholder${g===1?" product-main__thumbnail-placeholder--active":""}`},g))})]})}function l0(){const{addItem:o}=wr(),{productMain:s}=Gt(),l=s.buyBox.isInStock;return n.jsx("div",{className:"product-main__buy-box",children:n.jsx(Be,{variant:"elevated",padding:"lg",children:n.jsxs("div",{className:"product-main__buy-box-content",children:[n.jsx("div",{className:"product-main__badge-row",children:n.jsx(ot,{label:s.buyBox.badge,variant:"accent",size:"sm"})}),n.jsx("h2",{className:"product-main__title",children:s.buyBox.name}),n.jsx("div",{className:"product-main__descriptor",children:s.buyBox.descriptor}),n.jsxs("div",{className:"product-main__price-row",children:[n.jsx("h3",{className:"product-main__price",children:s.buyBox.price}),n.jsxs("div",{className:"product-main__stock-column",children:[s.buyBox.compareAtPrice?n.jsx("span",{className:"product-main__compare-price",children:s.buyBox.compareAtPrice}):null,n.jsx("span",{className:`product-main__stock${l?" product-main__stock--in-stock":" product-main__stock--out-of-stock"}`,children:s.buyBox.stock})]})]}),n.jsx(Op,{}),s.buyBox.reassurancePoints.length>0?n.jsx("div",{className:"product-main__reassurance-list",children:s.buyBox.reassurancePoints.map(u=>n.jsxs("div",{className:"product-main__reassurance-item",children:[n.jsx("div",{className:"product-main__reassurance-icon",children:n.jsx(bp,{className:"product-main__reassurance-check",size:12,strokeWidth:3})}),n.jsx("div",{className:"product-main__reassurance-text",children:u})]},u))}):null,n.jsxs("div",{className:"product-main__actions",children:[n.jsx(Ye,{variant:"primary",size:"lg",label:s.buyBox.primaryCta,"data-testid":"add-to-cart",disabled:!l||!s.buyBox.variantId,onClick:()=>{s.buyBox.variantId&&o(s.buyBox.variantId)}}),n.jsx(Ye,{variant:"secondary",size:"lg",label:s.buyBox.secondaryCta})]}),n.jsx("div",{className:"product-main__micro-line",children:s.buyBox.microLine})]})})})}function c0(){const{deliveryAndReturns:o}=Gt();return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"delivery-returns-container",children:[n.jsx("h3",{className:"delivery-returns-title",children:"Delivery & Returns"}),n.jsx("div",{className:"delivery-returns-cards",children:o.map(s=>n.jsx(Be,{variant:"subtle",padding:"md",children:n.jsxs("div",{className:"delivery-card-content",children:[n.jsxs("div",{className:"delivery-card-header",children:[n.jsx(ot,{label:s.badge,variant:"neutral",size:"sm"}),n.jsx("h4",{className:"delivery-card-title",children:s.title})]}),n.jsx("div",{className:"delivery-card-description",children:s.description}),s.footer?n.jsx("div",{className:"delivery-card-footer",children:s.footer}):null]})},s.id))})]})]})}function u0(){const{featureDeepDive:o}=Gt();return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"feature-deep-dive-container",children:[n.jsx("div",{className:"feature-deep-dive-title-wrapper",children:n.jsx("h3",{className:"feature-deep-dive-title",children:"Product Deep Dive"})}),n.jsxs("div",{className:"feature-deep-dive-grid",children:[n.jsxs("div",{className:"feature-deep-dive-main",children:[n.jsx(Be,{variant:"elevated",padding:"lg",children:n.jsxs("div",{className:"feature-card-content",children:[n.jsxs("div",{className:"feature-card-header",children:[n.jsx(kp,{size:20,style:{color:"var(--primary)"}}),n.jsx("h4",{className:"feature-card-title",children:o.overviewTitle})]}),n.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:o.overviewHtml}})]})}),n.jsx(Be,{variant:"elevated",padding:"lg",children:n.jsxs("div",{className:"feature-card-content",children:[n.jsx("h4",{className:"feature-card-title",children:o.buyingGuideTitle}),n.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:o.buyingGuideHtml}})]})}),o.storyHtml?n.jsx(Be,{variant:"subtle",padding:"lg",children:n.jsxs("div",{className:"feature-card-content",style:{gap:"12px"},children:[n.jsx("div",{className:"feature-story-badge",children:n.jsx("h4",{className:"feature-story-title",children:o.storyTitle})}),n.jsx("div",{className:"feature-story-html",dangerouslySetInnerHTML:{__html:o.storyHtml}})]})}):null]}),n.jsxs("div",{className:"feature-deep-dive-sidebar",children:[n.jsx(Be,{variant:"elevated",padding:"lg",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(Tg,{size:18,style:{color:"var(--success-foreground)"}}),n.jsx(ot,{label:"Perfect for",variant:"accent",size:"sm"})]}),n.jsx("div",{className:"feature-perfect-for",children:o.curatedFor})]})}),o.notFor?n.jsx(Be,{variant:"subtle",padding:"lg",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsx(ot,{label:"Not ideal for",variant:"neutral",size:"sm"}),n.jsx("div",{className:"feature-not-for",children:o.notFor})]})}):null,n.jsx(Be,{variant:"subtle",padding:"md",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(Bn,{size:16,style:{color:"var(--primary)"}}),n.jsx("div",{className:"quick-info-title",children:"Quick Info"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingTop:"4px"},children:[n.jsxs("div",{children:[n.jsx("div",{className:"quick-info-label",children:"Protection Level"}),n.jsx("div",{className:"quick-info-value",children:"10mm Padding"})]}),n.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[n.jsx("div",{className:"quick-info-label",children:"Water Resistant"}),n.jsx("div",{className:"quick-info-value",children:"Light rain protection"})]}),n.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[n.jsx("div",{className:"quick-info-label",children:"Compatibility"}),n.jsx("div",{className:"quick-info-value",children:"Most acoustic & electric"})]})]})]})})]})]})]})]})}function d0(){const{keyBenefits:o}=Gt();if(o.cards.length===0)return null;const s=[iy,Bn,my];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs(Se,{direction:"vertical",gap:24,children:[n.jsx("div",{className:"key-benefits-title-container",children:n.jsx("h3",{className:"key-benefits-title",children:o.title})}),n.jsx("div",{className:"key-benefits-grid",children:o.cards.map((l,u)=>{const p=s[u%s.length];return n.jsx(Be,{variant:"elevated",padding:"lg",children:n.jsxs(Se,{direction:"vertical",gap:16,style:{alignItems:"flex-start"},children:[n.jsx("div",{className:"key-benefit-icon",children:n.jsx(p,{size:24})}),n.jsx("div",{className:"key-benefit-badge",children:l.badge}),n.jsx("h4",{className:"key-benefit-title",children:l.title}),l.description?n.jsx("div",{className:"key-benefit-description",children:l.description}):null,l.footer?n.jsx("div",{className:"key-benefit-footer",children:l.footer}):null]})},l.id)})})]})]})}const p0=/^(.*?)\s*,?\s*\((#[0-9a-f]{3,8})\)$/i,f0=o=>{const s=o.split("|").map(l=>l.trim()).filter(Boolean).map(l=>{const u=l.match(p0);return u?{label:u[1].trim().replace(/,\s*$/,""),hex:u[2]}:null});return s.every(Boolean)?s:[]};function Qd({value:o}){const s=f0(o);return s.length===0?n.jsx(n.Fragment,{children:o}):n.jsx("div",{className:"specs-swatch-list",children:s.map(l=>n.jsxs("div",{className:"specs-swatch-item",children:[n.jsx("span",{className:"specs-swatch-box",style:{backgroundColor:l.hex},"aria-hidden":"true"}),n.jsx("span",{children:l.label})]},`${l.label}-${l.hex}`))})}function m0(){const{specsAndInBox:o}=Gt();return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"specs-container",children:[n.jsx("h3",{className:"specs-title",children:"Specifications & What's Included"}),n.jsx(Be,{variant:"elevated",padding:"md",children:n.jsxs("div",{className:"specs-card-content",children:[n.jsx("h4",{className:"specs-card-title",children:o.specificationsTitle}),n.jsx("div",{className:"specs-list",children:o.specifications.map(s=>n.jsxs("div",{className:"specs-row",children:[n.jsx("div",{className:"specs-label",children:s.label}),n.jsx("div",{className:"specs-value",children:n.jsx(Qd,{value:s.value})})]},s.label))})]})}),n.jsx(Be,{variant:"subtle",padding:"md",children:n.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[n.jsxs("div",{className:"inbox-header",children:[n.jsx("h4",{className:"specs-card-title",children:o.inBoxTitle}),n.jsx(ot,{label:o.inBoxBadge,variant:"neutral",size:"sm"})]}),n.jsx("div",{className:"inbox-list",children:o.inBoxItems.map(s=>n.jsxs("div",{className:"inbox-item",children:["• ",s]},s))})]})}),n.jsx(Be,{variant:"subtle",padding:"md",children:n.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[n.jsx("h4",{className:"specs-card-title",children:o.productDetailsTitle}),n.jsx("div",{className:"details-list",children:o.productDetails.map(s=>n.jsxs("div",{children:[n.jsx("div",{className:"details-item-label",children:s.label}),n.jsx("div",{className:"details-item-value",children:n.jsx(Qd,{value:s.value})})]},s.label))})]})})]})]})}function h0(){const{faq:o}=Gt();return o.items.length===0?null:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:o.title}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px"},children:o.items.map(s=>n.jsx(Be,{variant:"elevated",padding:"lg",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--foreground)"},children:s.question}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"22px",fontWeight:"400",color:"var(--muted-foreground)"},children:s.answer})]})},s.question))})]})}function g0(){const{addItem:o}=wr(),{relatedProducts:s}=Gt();return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:s.title}),n.jsx(Ye,{variant:"secondary",size:"sm",label:s.viewAllLabel})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:s.items.map(l=>n.jsx(Be,{variant:"elevated",mediaSlot:n.jsxs("div",{style:{position:"relative",width:"100%",height:"220px"},children:[l.imageUrl?n.jsx("img",{src:l.imageUrl,alt:l.imageAlt||l.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):n.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--muted)"}}),n.jsx("div",{style:{position:"absolute",top:"12px",left:"12px"},children:n.jsx(ot,{label:l.badge,variant:"neutral",size:"sm"})})]}),footerSlot:n.jsx(Ye,{variant:"primary",size:"md",label:s.addToCartLabel,disabled:!l.variantId,onClick:()=>{l.variantId&&o(l.variantId)}}),children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.name}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.descriptor}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.featureLine}),n.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.price})]})},l.id))})]})}function y0(){const{hasProduct:o,isLoading:s}=Gt();return s?n.jsx(ov,{}):o?n.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[n.jsx("section",{style:{paddingTop:"24px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:n.jsx(be,{children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsx(Qv,{}),n.jsx(Yv,{}),n.jsx(s0,{})]})})}),n.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:n.jsx(be,{children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"},children:[n.jsx(c0,{}),n.jsx(m0,{})]})})}),n.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:n.jsx(be,{children:n.jsx(d0,{})})}),n.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:n.jsx(be,{children:n.jsx(u0,{})})}),n.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:n.jsx(be,{children:n.jsx(h0,{})})}),n.jsx("section",{style:{paddingTop:"40px",paddingBottom:"48px",backgroundColor:"var(--card)"},children:n.jsx(be,{children:n.jsx(g0,{})})})]}):n.jsx("section",{style:{paddingTop:"64px",paddingBottom:"80px",backgroundColor:"var(--card)"},children:n.jsx(be,{children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[n.jsx("h1",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"32px",lineHeight:"38px",color:"var(--foreground)"},children:"Product unavailable"}),n.jsx("p",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",color:"var(--muted-foreground)"},children:"This product could not be loaded for the requested handle."})]})})})}function x0({query:o,onQueryChange:s,onSearch:l,isSearching:u=!1}){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("form",{className:"product-search-form",onSubmit:p=>{p.preventDefault(),l()},children:[n.jsxs("div",{className:"product-search-input-wrapper",children:[n.jsx("div",{className:"product-search-icon",children:n.jsx(ny,{size:20,color:"var(--muted-foreground)",strokeWidth:2})}),n.jsx("input",{type:"text",placeholder:"Search curated gear…",value:o,"data-testid":"search-input",onChange:p=>s(p.target.value),className:"product-search-input","aria-label":"Search products",onFocus:p=>{p.target.style.borderColor="var(--ring)",p.target.style.boxShadow="0 0 0 4px rgba(105, 65, 198, 0.12), 0 1px 2px 0 rgba(16, 24, 40, 0.05)"},onBlur:p=>{p.target.style.borderColor="var(--border)",p.target.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.05)"}})]}),n.jsx("div",{className:"product-search-button-wrapper",children:n.jsx(Ye,{variant:"primary",size:"md",type:"submit","data-testid":"search-submit",label:u?"Searching...":"Search",disabled:u,fullWidth:!0})})]})]})}const gl=15;function v0({filters:o,activeFilter:s,onFilterChange:l,resetLabel:u}){var w,h;const[p,f]=_.useState(!1),m=(w=o.find(v=>v.id===s))==null?void 0:w.label,g=o.length>gl,k=p?o:o.slice(0,gl),x=o.length-gl;return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs(_p,{wrap:"on",gap:10,align:"center",className:"product-filters-wrapper",children:[n.jsx("span",{className:"filter-label",children:"Filter:"}),k.map(v=>n.jsx("button",{onClick:()=>l(v.id),className:"filter-chip",style:{backgroundColor:s===v.id?"var(--accent)":"var(--muted)",border:s===v.id?"1px solid var(--ring)":"1px solid var(--border)",color:s===v.id?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:T=>{s!==v.id&&(T.currentTarget.style.backgroundColor="var(--muted)",T.currentTarget.style.borderColor="var(--border)")},onMouseLeave:T=>{s!==v.id&&(T.currentTarget.style.backgroundColor="var(--muted)",T.currentTarget.style.borderColor="var(--border)")},children:v.label},v.id)),g&&n.jsx("button",{onClick:()=>f(!p),className:"filter-chip",style:{backgroundColor:"transparent",border:"1px solid var(--border)",color:"var(--muted-foreground)"},onMouseEnter:v=>{v.currentTarget.style.backgroundColor="var(--muted)",v.currentTarget.style.color="var(--foreground)"},onMouseLeave:v=>{v.currentTarget.style.backgroundColor="transparent",v.currentTarget.style.color="var(--muted-foreground)"},children:p?"Show less":`+${x} more`}),n.jsx("div",{className:"filter-spacer"}),m&&s!==((h=o[0])==null?void 0:h.id)&&n.jsxs("button",{onClick:()=>{var v;return l(((v=o[0])==null?void 0:v.id)??"all")},className:"filter-reset-button",onMouseEnter:v=>{v.currentTarget.style.color="var(--foreground)"},onMouseLeave:v=>{v.currentTarget.style.color="var(--muted-foreground)"},children:[n.jsx(Ll,{size:14,strokeWidth:2.5}),u??"Reset filters"]})]})]})}var w0=np();const b0=rp(w0);function k0(o){if(typeof document>"u")return;let s=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",s.appendChild(l),l.styleSheet?l.styleSheet.cssText=o:l.appendChild(document.createTextNode(o))}const S0=o=>{switch(o){case"success":return T0;case"info":return I0;case"warning":return E0;case"error":return R0;default:return null}},j0=Array(12).fill(0),C0=({visible:o,className:s})=>M.createElement("div",{className:["sonner-loading-wrapper",s].filter(Boolean).join(" "),"data-visible":o},M.createElement("div",{className:"sonner-spinner"},j0.map((l,u)=>M.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${u}`})))),T0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),E0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),I0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),R0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),_0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},M.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),M.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),N0=()=>{const[o,s]=M.useState(document.hidden);return M.useEffect(()=>{const l=()=>{s(document.hidden)};return document.addEventListener("visibilitychange",l),()=>window.removeEventListener("visibilitychange",l)},[]),o};let jl=1;class P0{constructor(){this.subscribe=s=>(this.subscribers.push(s),()=>{const l=this.subscribers.indexOf(s);this.subscribers.splice(l,1)}),this.publish=s=>{this.subscribers.forEach(l=>l(s))},this.addToast=s=>{this.publish(s),this.toasts=[...this.toasts,s]},this.create=s=>{var l;const{message:u,...p}=s,f=typeof(s==null?void 0:s.id)=="number"||((l=s.id)==null?void 0:l.length)>0?s.id:jl++,m=this.toasts.find(k=>k.id===f),g=s.dismissible===void 0?!0:s.dismissible;return this.dismissedToasts.has(f)&&this.dismissedToasts.delete(f),m?this.toasts=this.toasts.map(k=>k.id===f?(this.publish({...k,...s,id:f,title:u}),{...k,...s,id:f,dismissible:g,title:u}):k):this.addToast({title:u,...p,dismissible:g,id:f}),f},this.dismiss=s=>(s?(this.dismissedToasts.add(s),requestAnimationFrame(()=>this.subscribers.forEach(l=>l({id:s,dismiss:!0})))):this.toasts.forEach(l=>{this.subscribers.forEach(u=>u({id:l.id,dismiss:!0}))}),s),this.message=(s,l)=>this.create({...l,message:s}),this.error=(s,l)=>this.create({...l,message:s,type:"error"}),this.success=(s,l)=>this.create({...l,type:"success",message:s}),this.info=(s,l)=>this.create({...l,type:"info",message:s}),this.warning=(s,l)=>this.create({...l,type:"warning",message:s}),this.loading=(s,l)=>this.create({...l,type:"loading",message:s}),this.promise=(s,l)=>{if(!l)return;let u;l.loading!==void 0&&(u=this.create({...l,promise:s,type:"loading",message:l.loading,description:typeof l.description!="function"?l.description:void 0}));const p=Promise.resolve(s instanceof Function?s():s);let f=u!==void 0,m;const g=p.then(async x=>{if(m=["resolve",x],M.isValidElement(x))f=!1,this.create({id:u,type:"default",message:x});else if(A0(x)&&!x.ok){f=!1;const h=typeof l.error=="function"?await l.error(`HTTP error! status: ${x.status}`):l.error,v=typeof l.description=="function"?await l.description(`HTTP error! status: ${x.status}`):l.description,R=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:u,type:"error",description:v,...R})}else if(x instanceof Error){f=!1;const h=typeof l.error=="function"?await l.error(x):l.error,v=typeof l.description=="function"?await l.description(x):l.description,R=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:u,type:"error",description:v,...R})}else if(l.success!==void 0){f=!1;const h=typeof l.success=="function"?await l.success(x):l.success,v=typeof l.description=="function"?await l.description(x):l.description,R=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:u,type:"success",description:v,...R})}}).catch(async x=>{if(m=["reject",x],l.error!==void 0){f=!1;const w=typeof l.error=="function"?await l.error(x):l.error,h=typeof l.description=="function"?await l.description(x):l.description,T=typeof w=="object"&&!M.isValidElement(w)?w:{message:w};this.create({id:u,type:"error",description:h,...T})}}).finally(()=>{f&&(this.dismiss(u),u=void 0),l.finally==null||l.finally.call(l)}),k=()=>new Promise((x,w)=>g.then(()=>m[0]==="reject"?w(m[1]):x(m[1])).catch(w));return typeof u!="string"&&typeof u!="number"?{unwrap:k}:Object.assign(u,{unwrap:k})},this.custom=(s,l)=>{const u=(l==null?void 0:l.id)||jl++;return this.create({jsx:s(u),id:u,...l}),u},this.getActiveToasts=()=>this.toasts.filter(s=>!this.dismissedToasts.has(s.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const jt=new P0,z0=(o,s)=>{const l=(s==null?void 0:s.id)||jl++;return jt.addToast({title:o,...s,id:l}),l},A0=o=>o&&typeof o=="object"&&"ok"in o&&typeof o.ok=="boolean"&&"status"in o&&typeof o.status=="number",D0=z0,L0=()=>jt.toasts,F0=()=>jt.getActiveToasts(),Kd=Object.assign(D0,{success:jt.success,info:jt.info,warning:jt.warning,error:jt.error,custom:jt.custom,message:jt.message,promise:jt.promise,dismiss:jt.dismiss,loading:jt.loading},{getHistory:L0,getToasts:F0});k0("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function ds(o){return o.label!==void 0}const O0=3,M0="24px",$0="16px",Xd=4e3,H0=356,U0=14,B0=45,W0=200;function or(...o){return o.filter(Boolean).join(" ")}function V0(o){const[s,l]=o.split("-"),u=[];return s&&u.push(s),l&&u.push(l),u}const q0=o=>{var s,l,u,p,f,m,g,k,x;const{invert:w,toast:h,unstyled:v,interacting:T,setHeights:R,visibleToasts:P,heights:z,index:ie,toasts:le,expanded:ae,removeToast:J,defaultRichColors:ne,closeButton:se,style:ye,cancelButtonStyle:Ce,actionButtonStyle:Q,className:K="",descriptionClassName:$="",duration:ce,position:he,gap:Qe,expandByDefault:Te,classNames:re,icons:me,closeButtonAriaLabel:O="Close toast"}=o,[V,H]=M.useState(null),[S,N]=M.useState(null),[B,Z]=M.useState(!1),[ue,G]=M.useState(!1),[ge,pe]=M.useState(!1),[xe,Fe]=M.useState(!1),[sr,br]=M.useState(!1),[Ct,Jt]=M.useState(0),[Xo,Vn]=M.useState(0),ar=M.useRef(h.duration||ce||Xd),qn=M.useRef(null),Tt=M.useRef(null),Gr=ie===0,kr=ie+1<=P,it=h.type,lr=h.dismissible!==!1,Go=h.className||"",Jo=h.descriptionClassName||"",Jr=M.useMemo(()=>z.findIndex(de=>de.toastId===h.id)||0,[z,h.id]),Yn=M.useMemo(()=>{var de;return(de=h.closeButton)!=null?de:se},[h.closeButton,se]),Zr=M.useMemo(()=>h.duration||ce||Xd,[h.duration,ce]),yn=M.useRef(0),Pt=M.useRef(0),Sr=M.useRef(0),jr=M.useRef(null),[Zo,ei]=he.split("-"),ti=M.useMemo(()=>z.reduce((de,$e,Ke)=>Ke>=Jr?de:de+$e.height,0),[z,Jr]),xn=N0(),Qn=h.invert||w,en=it==="loading";Pt.current=M.useMemo(()=>Jr*Qe+ti,[Jr,ti]),M.useEffect(()=>{ar.current=Zr},[Zr]),M.useEffect(()=>{Z(!0)},[]),M.useEffect(()=>{const de=Tt.current;if(de){const $e=de.getBoundingClientRect().height;return Vn($e),R(Ke=>[{toastId:h.id,height:$e,position:h.position},...Ke]),()=>R(Ke=>Ke.filter(ct=>ct.toastId!==h.id))}},[R,h.id]),M.useLayoutEffect(()=>{if(!B)return;const de=Tt.current,$e=de.style.height;de.style.height="auto";const Ke=de.getBoundingClientRect().height;de.style.height=$e,Vn(Ke),R(ct=>ct.find(Ve=>Ve.toastId===h.id)?ct.map(Ve=>Ve.toastId===h.id?{...Ve,height:Ke}:Ve):[{toastId:h.id,height:Ke,position:h.position},...ct])},[B,h.title,h.description,R,h.id]);const zt=M.useCallback(()=>{G(!0),Jt(Pt.current),R(de=>de.filter($e=>$e.toastId!==h.id)),setTimeout(()=>{J(h)},W0)},[h,J,R,Pt]);M.useEffect(()=>{if(h.promise&&it==="loading"||h.duration===1/0||h.type==="loading")return;let de;return ae||T||xn?(()=>{if(Sr.current<yn.current){const ct=new Date().getTime()-yn.current;ar.current=ar.current-ct}Sr.current=new Date().getTime()})():(()=>{ar.current!==1/0&&(yn.current=new Date().getTime(),de=setTimeout(()=>{h.onAutoClose==null||h.onAutoClose.call(h,h),zt()},ar.current))})(),()=>clearTimeout(de)},[ae,T,h,it,xn,zt]),M.useEffect(()=>{h.delete&&zt()},[zt,h.delete]);function Kn(){var de;if(me!=null&&me.loading){var $e;return M.createElement("div",{className:or(re==null?void 0:re.loader,h==null||($e=h.classNames)==null?void 0:$e.loader,"sonner-loader"),"data-visible":it==="loading"},me.loading)}return M.createElement(C0,{className:or(re==null?void 0:re.loader,h==null||(de=h.classNames)==null?void 0:de.loader),visible:it==="loading"})}const Cr=h.icon||(me==null?void 0:me[it])||S0(it);var cr,Xn;return M.createElement("li",{tabIndex:0,ref:Tt,className:or(K,Go,re==null?void 0:re.toast,h==null||(s=h.classNames)==null?void 0:s.toast,re==null?void 0:re.default,re==null?void 0:re[it],h==null||(l=h.classNames)==null?void 0:l[it]),"data-sonner-toast":"","data-rich-colors":(cr=h.richColors)!=null?cr:ne,"data-styled":!(h.jsx||h.unstyled||v),"data-mounted":B,"data-promise":!!h.promise,"data-swiped":sr,"data-removed":ue,"data-visible":kr,"data-y-position":Zo,"data-x-position":ei,"data-index":ie,"data-front":Gr,"data-swiping":ge,"data-dismissible":lr,"data-type":it,"data-invert":Qn,"data-swipe-out":xe,"data-swipe-direction":S,"data-expanded":!!(ae||Te&&B),style:{"--index":ie,"--toasts-before":ie,"--z-index":le.length-ie,"--offset":`${ue?Ct:Pt.current}px`,"--initial-height":Te?"auto":`${Xo}px`,...ye,...h.style},onDragEnd:()=>{pe(!1),H(null),jr.current=null},onPointerDown:de=>{en||!lr||(qn.current=new Date,Jt(Pt.current),de.target.setPointerCapture(de.pointerId),de.target.tagName!=="BUTTON"&&(pe(!0),jr.current={x:de.clientX,y:de.clientY}))},onPointerUp:()=>{var de,$e,Ke;if(xe||!lr)return;jr.current=null;const ct=Number(((de=Tt.current)==null?void 0:de.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Tr=Number((($e=Tt.current)==null?void 0:$e.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Ve=new Date().getTime()-((Ke=qn.current)==null?void 0:Ke.getTime()),Ze=V==="x"?ct:Tr,Er=Math.abs(Ze)/Ve;if(Math.abs(Ze)>=B0||Er>.11){Jt(Pt.current),h.onDismiss==null||h.onDismiss.call(h,h),N(V==="x"?ct>0?"right":"left":Tr>0?"down":"up"),zt(),Fe(!0);return}else{var st,Et;(st=Tt.current)==null||st.style.setProperty("--swipe-amount-x","0px"),(Et=Tt.current)==null||Et.style.setProperty("--swipe-amount-y","0px")}br(!1),pe(!1),H(null)},onPointerMove:de=>{var $e,Ke,ct;if(!jr.current||!lr||(($e=window.getSelection())==null?void 0:$e.toString().length)>0)return;const Ve=de.clientY-jr.current.y,Ze=de.clientX-jr.current.x;var Er;const st=(Er=o.swipeDirections)!=null?Er:V0(he);!V&&(Math.abs(Ze)>1||Math.abs(Ve)>1)&&H(Math.abs(Ze)>Math.abs(Ve)?"x":"y");let Et={x:0,y:0};const Ir=At=>1/(1.5+Math.abs(At)/20);if(V==="y"){if(st.includes("top")||st.includes("bottom"))if(st.includes("top")&&Ve<0||st.includes("bottom")&&Ve>0)Et.y=Ve;else{const At=Ve*Ir(Ve);Et.y=Math.abs(At)<Math.abs(Ve)?At:Ve}}else if(V==="x"&&(st.includes("left")||st.includes("right")))if(st.includes("left")&&Ze<0||st.includes("right")&&Ze>0)Et.x=Ze;else{const At=Ze*Ir(Ze);Et.x=Math.abs(At)<Math.abs(Ze)?At:Ze}(Math.abs(Et.x)>0||Math.abs(Et.y)>0)&&br(!0),(Ke=Tt.current)==null||Ke.style.setProperty("--swipe-amount-x",`${Et.x}px`),(ct=Tt.current)==null||ct.style.setProperty("--swipe-amount-y",`${Et.y}px`)}},Yn&&!h.jsx&&it!=="loading"?M.createElement("button",{"aria-label":O,"data-disabled":en,"data-close-button":!0,onClick:en||!lr?()=>{}:()=>{zt(),h.onDismiss==null||h.onDismiss.call(h,h)},className:or(re==null?void 0:re.closeButton,h==null||(u=h.classNames)==null?void 0:u.closeButton)},(Xn=me==null?void 0:me.close)!=null?Xn:_0):null,(it||h.icon||h.promise)&&h.icon!==null&&((me==null?void 0:me[it])!==null||h.icon)?M.createElement("div",{"data-icon":"",className:or(re==null?void 0:re.icon,h==null||(p=h.classNames)==null?void 0:p.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||Kn():null,h.type!=="loading"?Cr:null):null,M.createElement("div",{"data-content":"",className:or(re==null?void 0:re.content,h==null||(f=h.classNames)==null?void 0:f.content)},M.createElement("div",{"data-title":"",className:or(re==null?void 0:re.title,h==null||(m=h.classNames)==null?void 0:m.title)},h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title),h.description?M.createElement("div",{"data-description":"",className:or($,Jo,re==null?void 0:re.description,h==null||(g=h.classNames)==null?void 0:g.description)},typeof h.description=="function"?h.description():h.description):null),M.isValidElement(h.cancel)?h.cancel:h.cancel&&ds(h.cancel)?M.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||Ce,onClick:de=>{ds(h.cancel)&&lr&&(h.cancel.onClick==null||h.cancel.onClick.call(h.cancel,de),zt())},className:or(re==null?void 0:re.cancelButton,h==null||(k=h.classNames)==null?void 0:k.cancelButton)},h.cancel.label):null,M.isValidElement(h.action)?h.action:h.action&&ds(h.action)?M.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||Q,onClick:de=>{ds(h.action)&&(h.action.onClick==null||h.action.onClick.call(h.action,de),!de.defaultPrevented&&zt())},className:or(re==null?void 0:re.actionButton,h==null||(x=h.classNames)==null?void 0:x.actionButton)},h.action.label):null)};function Gd(){if(typeof window>"u"||typeof document>"u")return"ltr";const o=document.documentElement.getAttribute("dir");return o==="auto"||!o?window.getComputedStyle(document.documentElement).direction:o}function Y0(o,s){const l={};return[o,s].forEach((u,p)=>{const f=p===1,m=f?"--mobile-offset":"--offset",g=f?$0:M0;function k(x){["top","right","bottom","left"].forEach(w=>{l[`${m}-${w}`]=typeof x=="number"?`${x}px`:x})}typeof u=="number"||typeof u=="string"?k(u):typeof u=="object"?["top","right","bottom","left"].forEach(x=>{u[x]===void 0?l[`${m}-${x}`]=g:l[`${m}-${x}`]=typeof u[x]=="number"?`${u[x]}px`:u[x]}):k(g)}),l}const Q0=M.forwardRef(function(s,l){const{invert:u,position:p="bottom-right",hotkey:f=["altKey","KeyT"],expand:m,closeButton:g,className:k,offset:x,mobileOffset:w,theme:h="light",richColors:v,duration:T,style:R,visibleToasts:P=O0,toastOptions:z,dir:ie=Gd(),gap:le=U0,icons:ae,containerAriaLabel:J="Notifications"}=s,[ne,se]=M.useState([]),ye=M.useMemo(()=>Array.from(new Set([p].concat(ne.filter(S=>S.position).map(S=>S.position)))),[ne,p]),[Ce,Q]=M.useState([]),[K,$]=M.useState(!1),[ce,he]=M.useState(!1),[Qe,Te]=M.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),re=M.useRef(null),me=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),O=M.useRef(null),V=M.useRef(!1),H=M.useCallback(S=>{se(N=>{var B;return(B=N.find(Z=>Z.id===S.id))!=null&&B.delete||jt.dismiss(S.id),N.filter(({id:Z})=>Z!==S.id)})},[]);return M.useEffect(()=>jt.subscribe(S=>{if(S.dismiss){requestAnimationFrame(()=>{se(N=>N.map(B=>B.id===S.id?{...B,delete:!0}:B))});return}setTimeout(()=>{b0.flushSync(()=>{se(N=>{const B=N.findIndex(Z=>Z.id===S.id);return B!==-1?[...N.slice(0,B),{...N[B],...S},...N.slice(B+1)]:[S,...N]})})})}),[ne]),M.useEffect(()=>{if(h!=="system"){Te(h);return}if(h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Te("dark"):Te("light")),typeof window>"u")return;const S=window.matchMedia("(prefers-color-scheme: dark)");try{S.addEventListener("change",({matches:N})=>{Te(N?"dark":"light")})}catch{S.addListener(({matches:B})=>{try{Te(B?"dark":"light")}catch(Z){console.error(Z)}})}},[h]),M.useEffect(()=>{ne.length<=1&&$(!1)},[ne]),M.useEffect(()=>{const S=N=>{var B;if(f.every(G=>N[G]||N.code===G)){var ue;$(!0),(ue=re.current)==null||ue.focus()}N.code==="Escape"&&(document.activeElement===re.current||(B=re.current)!=null&&B.contains(document.activeElement))&&$(!1)};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[f]),M.useEffect(()=>{if(re.current)return()=>{O.current&&(O.current.focus({preventScroll:!0}),O.current=null,V.current=!1)}},[re.current]),M.createElement("section",{ref:l,"aria-label":`${J} ${me}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},ye.map((S,N)=>{var B;const[Z,ue]=S.split("-");return ne.length?M.createElement("ol",{key:S,dir:ie==="auto"?Gd():ie,tabIndex:-1,ref:re,className:k,"data-sonner-toaster":!0,"data-sonner-theme":Qe,"data-y-position":Z,"data-lifted":K&&ne.length>1&&!m,"data-x-position":ue,style:{"--front-toast-height":`${((B=Ce[0])==null?void 0:B.height)||0}px`,"--width":`${H0}px`,"--gap":`${le}px`,...R,...Y0(x,w)},onBlur:G=>{V.current&&!G.currentTarget.contains(G.relatedTarget)&&(V.current=!1,O.current&&(O.current.focus({preventScroll:!0}),O.current=null))},onFocus:G=>{G.target instanceof HTMLElement&&G.target.dataset.dismissible==="false"||V.current||(V.current=!0,O.current=G.relatedTarget)},onMouseEnter:()=>$(!0),onMouseMove:()=>$(!0),onMouseLeave:()=>{ce||$(!1)},onDragEnd:()=>$(!1),onPointerDown:G=>{G.target instanceof HTMLElement&&G.target.dataset.dismissible==="false"||he(!0)},onPointerUp:()=>he(!1)},ne.filter(G=>!G.position&&N===0||G.position===S).map((G,ge)=>{var pe,xe;return M.createElement(q0,{key:G.id,icons:ae,index:ge,toast:G,defaultRichColors:v,duration:(pe=z==null?void 0:z.duration)!=null?pe:T,className:z==null?void 0:z.className,descriptionClassName:z==null?void 0:z.descriptionClassName,invert:u,visibleToasts:P,closeButton:(xe=z==null?void 0:z.closeButton)!=null?xe:g,interacting:ce,position:S,style:z==null?void 0:z.style,unstyled:z==null?void 0:z.unstyled,classNames:z==null?void 0:z.classNames,cancelButtonStyle:z==null?void 0:z.cancelButtonStyle,actionButtonStyle:z==null?void 0:z.actionButtonStyle,closeButtonAriaLabel:z==null?void 0:z.closeButtonAriaLabel,removeToast:H,toasts:ne.filter(Fe=>Fe.position==G.position),heights:Ce.filter(Fe=>Fe.position==G.position),setHeights:Q,expandByDefault:m,gap:le,expanded:K,swipeDirections:s.swipeDirections})})):null}))});function K0({products:o}){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsx("div",{className:"product-list-container",children:n.jsx("div",{className:"product-grid",children:o.length>0?o.map(s=>n.jsx(X0,{product:s},s.id)):n.jsx("div",{className:"no-products-message",children:"No products matched your search."})})})]})}function X0({product:o,isHoverPreview:s=!1}){const{addItem:l,openCartDrawer:u}=wr(),p=`/products/${o.id}`;return n.jsxs("div",{"data-testid":"collection-product-card",role:s?void 0:"link",tabIndex:s?void 0:0,onClick:s?void 0:f=>{f.target.closest("button")||(window.location.href=p)},onKeyDown:s?void 0:f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),window.location.href=p)},style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"460px",maxHeight:"520px",boxShadow:s?"0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814":"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden",display:"flex",flexDirection:"column",cursor:s?"default":"pointer"},children:[n.jsxs("div",{style:{position:"relative",height:"220px",backgroundColor:"var(--muted)"},children:[o.imageUrl?n.jsx("img",{src:o.imageUrl,alt:o.imageAlt||o.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null,s?n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#10182808"}}):null,n.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",zIndex:s?1:"auto"},children:n.jsx(ot,{label:o.badgeLabel,variant:o.badgeVariant,size:"sm"})}),n.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:s?1:"auto"},children:n.jsx("button",{style:{height:"32px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"8px",backgroundColor:"transparent",color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:"Save"})})]}),n.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"10px",flex:1},children:[n.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)",margin:0},children:o.name}),n.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical",overflow:"hidden"},children:o.descriptor}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.featureLine}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"auto",paddingTop:"8px"},children:[n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:o.priceLabel}),n.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:o.shippingLabel})]})]}),n.jsx("div",{style:{padding:"16px",paddingTop:"0"},children:n.jsx(Ye,{variant:"primary",size:"md",label:o.isInStock?"Add to cart":"Out of stock",disabled:!o.isInStock||!o.variantId,onClick:async()=>{if(!o.variantId)return;const f=await l(o.variantId);if(!f.ok){Kd.error("Unable to add item",{description:f.error||"Please try again.",duration:5e3});return}Kd.success("Added to cart",{description:`${o.name} is in your cart.`,duration:1/0,action:{label:"View cart",onClick:()=>{closeCartDrawer(),window.location.href="/cart"}},cancel:{label:"Close",onClick:()=>{}}})},fullWidth:!0})})]})}function G0(){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"products-page-header",children:[n.jsxs("div",{className:"products-page-header-content",children:[n.jsx("div",{className:"products-page-eyebrow",children:"Curated gear"}),n.jsx("h1",{className:"products-page-title",children:"Products"})]}),n.jsx("div",{className:"products-page-description",children:"Best-in-class essentials chosen for durability, clarity, and real daily use."})]})]})}function J0({resultCount:o}){const[s,l]=_.useState(!1),[u,p]=_.useState("Recommended"),f=["Recommended","Price: Low to High","Price: High to Low","Newest","Most Popular"];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"product-results-header",children:[n.jsxs("div",{className:"results-count",children:["Showing ",n.jsx("span",{className:"results-count-number",children:o})," ","results"]}),n.jsxs("div",{className:"sort-controls",children:[n.jsx("span",{className:"sort-label",children:"Sort by:"}),n.jsxs("div",{className:"sort-dropdown-wrapper",children:[n.jsxs("button",{onClick:()=>l(!s),className:"sort-button",onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--muted)",m.currentTarget.style.borderColor="var(--border)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="var(--card)",m.currentTarget.style.borderColor="var(--border)"},children:[u,n.jsx(xg,{size:16,color:"var(--muted-foreground)",style:{transition:"transform 150ms ease",transform:s?"rotate(180deg)":"rotate(0deg)"}})]}),s&&n.jsx("div",{className:"sort-dropdown",children:f.map(m=>n.jsx("button",{onClick:()=>{p(m),l(!1)},className:"sort-option",style:{backgroundColor:u===m?"var(--muted)":"transparent",fontWeight:u===m?"600":"500",color:u===m?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:g=>{u!==m&&(g.currentTarget.style.backgroundColor="var(--muted)")},onMouseLeave:g=>{u!==m&&(g.currentTarget.style.backgroundColor="transparent")},children:m},m))})]})]})]})]})}const Z0={id:fs,label:jv},e1=o=>{const s=new Set;return o.flatMap(u=>u.categoryIds.map((p,f)=>({id:p,label:u.categoryLabels[f]??u.categoryIds[f]}))).filter(u=>!u.id||s.has(u.id)?!1:(s.add(u.id),!0))};function t1(o){const s=e1(o);return{filters:[Z0,...s],isLoading:!1,resetLabel:"Reset filters"}}const r1=120,n1=(o,s)=>{const l=Number.parseFloat(o);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:s,maximumFractionDigits:0}).format(l):`${s} ${o}`},o1=o=>{var s;return o.availableForSale===!1?!1:typeof o.totalInventory=="number"?o.totalInventory>0:((s=o.variants)==null?void 0:s.edges.some(l=>{const u=l.node;return u.availableForSale===!1?!1:typeof u.quantityAvailable=="number"?u.quantityAvailable>0:u.availableForSale===!0}))??!0},i1=o=>{var l,u,p,f;const s=(u=(l=o.variants)==null?void 0:l.edges.find(m=>{const g=m.node;return g.availableForSale&&(typeof g.quantityAvailable!="number"||g.quantityAvailable>0)}))==null?void 0:u.node;return(s==null?void 0:s.id)||((f=(p=o.variants)==null?void 0:p.edges[0])==null?void 0:f.node.id)||null},s1=(o,s=r1)=>{const l=o.replace(/\s+/g," ").trim();return l.length<=s?l:`${l.slice(0,s).trimEnd()}...`},Jd=o=>{var x,w,h,v;const s=((x=o.shortDescription)==null?void 0:x.value)||o.description||"Curated by Vibe Station",l=s1(s),u=((w=o.featureLine)==null?void 0:w.value)||o.tags.slice(0,3).join(" · ")||"Durable build",p=((h=o.shippingInfo)==null?void 0:h.value)||"Shipping calculated at checkout",f=((v=o.badge)==null?void 0:v.value)||o.tags[0]||"Curated",m=Il(o),g=Array.from(new Set(o.tags.map(T=>T.trim()).filter(Boolean))),k=g.map(T=>Np(T)).filter(Boolean);return{id:o.handle,variantId:i1(o),name:o.title,descriptor:l,featureLine:u,priceLabel:n1(o.priceRange.minVariantPrice.amount,o.priceRange.minVariantPrice.currencyCode),shippingLabel:p,isInStock:o1(o),badgeLabel:f,badgeVariant:"accent",imageUrl:m==null?void 0:m.url,imageAlt:m==null?void 0:m.altText,categoryIds:k,categoryLabels:g}};let Bo=[],Cl=!1,Lo=null;const Wo=new Map,Tl=new Set,yl=new Map,Mp=o=>(o==null?void 0:o.trim())??"",a1=async o=>{const s=Mp(o);if(!s)return Lo||(Lo=(async()=>{try{Bo=(await hs({first:24})).edges.map(f=>Jd(f.node))}catch(p){console.error("Failed to load products from Shopify",p),Bo=[]}finally{Cl=!0,Lo=null}})(),Lo);const l=yl.get(s);if(l)return l;const u=(async()=>{try{const f=(await hs({first:24,query:s})).edges.map(m=>Jd(m.node));Wo.set(s,f)}catch(p){console.error("Failed to load searched products from Shopify",p),Wo.set(s,[])}finally{Tl.add(s),yl.delete(s)}})();return yl.set(s,u),u};function $p(o){const s=Mp(o),[l,u]=_.useState(s?Wo.get(s)??[]:Bo),[p,f]=_.useState(s?!Tl.has(s):!Cl);return _.useEffect(()=>{let m=!1;return(s?Tl.has(s):Cl)?(u(s?Wo.get(s)??[]:Bo),f(!1),()=>{m=!0}):(f(!0),a1(s).then(()=>{m||(u(s?Wo.get(s)??[]:Bo),f(!1))}),()=>{m=!0})},[s]),{products:l,hoverPreviewProduct:l[0],isLoading:p}}function l1(){const[o,s]=_.useState(""),[l,u]=_.useState(""),[p,f]=_.useState(fs),[m,g]=_.useState(!1),{products:k,isLoading:x}=$p(l),{filters:w,resetLabel:h}=t1(k),v=p===fs?k:k.filter(T=>T.categoryIds.includes(p));return _.useEffect(()=>{x||g(!0)},[x]),_.useEffect(()=>{w.some(T=>T.id===p)||f(fs)},[p,w]),!m&&x?n.jsx(nv,{}):n.jsx(nt,{paddingTop:"48px",paddingBottom:"72px",background:"var(--background)",children:n.jsxs(be,{children:[n.jsx(c1,{}),n.jsx(u1,{searchInput:o,onSearchInputChange:s,onSearchSubmit:()=>u(o.trim()),isSearching:x,activeFilter:p,onFilterChange:f,filters:w,resetLabel:h,resultCount:v.length,products:v})]})})}function c1(){return n.jsx(G0,{})}function u1({searchInput:o,onSearchInputChange:s,onSearchSubmit:l,isSearching:u,activeFilter:p,onFilterChange:f,filters:m,resetLabel:g,resultCount:k,products:x}){return n.jsxs(Se,{gap:"16px",children:[n.jsx(x0,{query:o,onQueryChange:s,onSearch:l,isSearching:u}),n.jsx(v0,{filters:m,activeFilter:p,onFilterChange:f,resetLabel:g}),n.jsx(J0,{resultCount:k}),n.jsx(K0,{products:x})]})}function Ss({title:o,lastUpdated:s,intro:l=[],sections:u}){return n.jsx(nt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs(Se,{gap:"24px",children:[n.jsxs("header",{children:[n.jsx("h1",{style:d1,children:o}),n.jsxs("p",{style:p1,children:["Last updated: ",s]})]}),l.map((p,f)=>n.jsx("p",{style:Zd,children:p},f)),u.map(p=>n.jsxs("section",{children:[n.jsx("h2",{style:f1,children:p.title}),n.jsx(Se,{gap:"14px",children:p.blocks.map((f,m)=>f.type==="subheading"?n.jsx("h3",{style:m1,children:f.content},m):f.type==="list"?n.jsx("ul",{style:h1,children:f.items.map((g,k)=>n.jsx("li",{style:g1,children:g},k))},m):n.jsx("p",{style:Zd,children:f.content},m))})]},p.title))]})})})}const qo={color:"var(--primary)",textDecoration:"none",fontWeight:600},d1={margin:0,color:"var(--foreground)",fontSize:"36px",lineHeight:"44px",fontWeight:700},p1={marginTop:"8px",marginBottom:0,color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px"},f1={marginTop:0,marginBottom:"10px",color:"var(--foreground)",fontSize:"20px",lineHeight:"30px",fontWeight:600},m1={margin:0,color:"var(--foreground)",fontSize:"16px",lineHeight:"24px",fontWeight:600},Zd={margin:0,color:"var(--muted-foreground)",fontSize:"16px",lineHeight:"24px"},h1={margin:0,paddingLeft:"20px",color:"var(--muted-foreground)",display:"grid",gap:"8px"},g1={fontSize:"16px",lineHeight:"24px"},y1="Read the Vibe Station Terms of Service governing access to our website, storefront, accounts, products, and services.",x1=[{title:"1. Scope of Services",blocks:[{type:"paragraph",content:"Our “Services” include our website, online storefront, customer account experience, support channels, product sales, content, and any related digital or physical services we may introduce from time to time, including future store features, member experiences, events, workshops, digital products, subscriptions, or community features, where offered."}]},{title:"2. Eligibility",blocks:[{type:"paragraph",content:"You must be legally capable of entering into a binding contract under applicable law to use the Services and place orders. If you use the Services on behalf of a company or other entity, you represent that you have authority to bind that entity to these Terms."}]},{title:"3. Accounts",blocks:[{type:"paragraph",content:"You may be allowed to create a customer account. You are responsible for:"},{type:"list",items:["keeping your login credentials secure,","ensuring your account information is accurate and up to date,","all activity that occurs under your account to the extent caused by your actions or failure to safeguard credentials."]},{type:"paragraph",content:"We may suspend or terminate accounts that are used unlawfully, fraudulently, abusively, or in violation of these Terms."}]},{title:"4. Product Information and Availability",blocks:[{type:"paragraph",content:"We try to describe products as accurately as reasonably possible. However:"},{type:"list",items:["product images may vary depending on device display, lighting, or packaging updates,","minor variations in appearance, finish, labeling, or packaging may occur,","product availability may change without notice,","some items may be offered in limited quantities."]},{type:"paragraph",content:"We reserve the right to modify, discontinue, or limit the availability of any product or service at any time."}]},{title:"5. Pricing and Taxes",blocks:[{type:"paragraph",content:"Prices are displayed in the currency shown on the website unless otherwise stated. We may change prices at any time before an order is accepted. Applicable taxes, shipping charges, handling fees, or similar charges may be added at checkout where required."},{type:"paragraph",content:"In the event of an obvious pricing, listing, or typographical error, we reserve the right to cancel or refuse affected orders and refund any amount paid."}]},{title:"6. Orders and Acceptance",blocks:[{type:"paragraph",content:"Placing an order does not guarantee acceptance. An order is accepted only when we confirm it through an order confirmation, shipment confirmation, or by dispatching the product, as applicable."},{type:"paragraph",content:"We reserve the right to refuse, limit, cancel, or hold any order for reasons including:"},{type:"list",items:["suspected fraud or unauthorized activity,","incorrect pricing or product information,","stock unavailability,","unusual or excessive order volumes,","failure of payment authorization,","delivery limitations."]},{type:"paragraph",content:"If payment has already been captured for a cancelled order, we will initiate an appropriate refund in accordance with our refund policy and payment-provider processes."}]},{title:"7. Payments",blocks:[{type:"paragraph",content:"Payments may be processed through third-party payment service providers, including Razorpay. By placing an order, you authorize us and our payment partners to process your payment using the method you selected."},{type:"paragraph",content:"We do not generally store full card details, banking passwords, or UPI PINs. Payment processing may be subject to verification, authorization, fraud checks, and the terms of the payment provider."}]},{title:"8. Shipping and Delivery",blocks:[{type:"paragraph",content:"Shipping and delivery are governed by our Shipping Policy, which forms part of these Terms. Delivery estimates are indicative unless expressly stated otherwise. Delays may occur due to carrier issues, weather, operational constraints, force majeure events, or causes outside our control."}]},{title:"9. Returns, Replacements, and Refunds",blocks:[{type:"paragraph",content:"Returns, replacements, cancellations, and refunds are governed by our Return and Refund Policy, which forms part of these Terms."}]},{title:"10. Permitted Use",blocks:[{type:"paragraph",content:"You agree not to:"},{type:"list",items:["use the Services for unlawful, fraudulent, deceptive, or abusive purposes,","interfere with site security or platform integrity,","scrape, copy, reproduce, or exploit the Services or content without authorization,","upload or transmit malicious code or harmful material,","impersonate any person or entity,","attempt unauthorized access to accounts, systems, or data,","use the Services in a way that could damage, disable, overburden, or impair our systems or other users’ experience."]}]},{title:"11. Intellectual Property",blocks:[{type:"paragraph",content:"All website content, branding, text, graphics, product photography, design elements, software interfaces, logos, trademarks, trade names, and related material made available by us are owned by or licensed to us and are protected by applicable intellectual property laws."},{type:"paragraph",content:"Except as expressly permitted in writing, you may not copy, reproduce, distribute, modify, publish, transmit, display, create derivative works from, or commercially exploit any part of the Services."}]},{title:"12. User Content",blocks:[{type:"paragraph",content:"If you submit reviews, feedback, suggestions, testimonials, images, messages, or other content to us:"},{type:"list",items:["you represent that you have the right to provide it,","you grant us a non-exclusive, worldwide, royalty-free, transferable license to use, reproduce, adapt, publish, display, and distribute it in connection with operating and promoting the Services,","you acknowledge that we may remove content that is unlawful, misleading, abusive, infringing, irrelevant, or otherwise inappropriate."]}]},{title:"13. Third-Party Services",blocks:[{type:"paragraph",content:"Parts of the Services may rely on third-party providers, including commerce infrastructure, payment processors, shipping partners, logistics providers, hosting services, and related tools. We are not responsible for third-party services except to the extent required by applicable law."}]},{title:"14. Disclaimer of Warranties",blocks:[{type:"paragraph",content:"To the fullest extent permitted by law, the Services are provided on an “as is” and “as available” basis. We do not guarantee that:"},{type:"list",items:["the Services will be uninterrupted, error-free, or always available,","defects will always be corrected immediately,","the Services will be free from all security vulnerabilities,","product descriptions or content will always be complete, current, or error-free."]},{type:"paragraph",content:"Nothing in these Terms excludes any warranty or right that cannot be excluded under applicable consumer law."}]},{title:"15. Limitation of Liability",blocks:[{type:"paragraph",content:"To the fullest extent permitted by law, Vibe Station and its directors, officers, employees, affiliates, agents, and service providers shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including loss of profits, revenue, goodwill, data, or business opportunity, arising from or related to the Services."},{type:"paragraph",content:"To the fullest extent permitted by law, our aggregate liability for any claim arising out of or relating to the Services or any order shall not exceed the amount paid by you to us for the specific product or service giving rise to the claim."},{type:"paragraph",content:"Nothing in these Terms limits liability where such limitation is prohibited by law."}]},{title:"16. Indemnity",blocks:[{type:"paragraph",content:"You agree to indemnify and hold harmless Vibe Station and its affiliates, personnel, and service providers from claims, losses, liabilities, damages, costs, and expenses arising out of:"},{type:"list",items:["your misuse of the Services,","your violation of these Terms,","your infringement of any third-party rights,","your unlawful or fraudulent conduct."]}]},{title:"17. Termination",blocks:[{type:"paragraph",content:"We may suspend or terminate your access to the Services at our discretion if we reasonably believe you have violated these Terms, caused risk to our users, business, or systems, or engaged in fraudulent or unlawful conduct."},{type:"paragraph",content:"You may stop using the Services at any time."}]},{title:"18. Changes to the Services or Terms",blocks:[{type:"paragraph",content:"We may modify the Services or these Terms from time to time. Updated Terms become effective when posted, unless otherwise stated. Your continued use of the Services after the updated Terms are posted constitutes acceptance of the revised Terms."}]},{title:"19. Privacy",blocks:[{type:"paragraph",content:"Your use of the Services is also subject to our Privacy Policy and Cookie Policy."}]},{title:"20. Governing Law and Jurisdiction",blocks:[{type:"paragraph",content:"These Terms shall be governed by the laws of India. Subject to applicable consumer protection and data protection laws, courts in Gujarat, India shall have jurisdiction in relation to disputes arising from these Terms or the Services."}]},{title:"21. Grievance Officer and Contact",blocks:[{type:"paragraph",content:n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"Vibe Station"}),n.jsx("br",{}),"Operated by ",n.jsx("strong",{children:"CODEMASTR APPS PRIVATE LIMITED"}),n.jsx("br",{}),"Gujarat, India",n.jsx("br",{}),"Email:"," ",n.jsx("a",{href:"mailto:studio@thevibestation.com",style:qo,children:"studio@thevibestation.com"})]})},{type:"paragraph",content:n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"Grievance Officer"}),n.jsx("br",{}),"Name: ",n.jsx("strong",{children:"[Insert Full Name]"}),n.jsx("br",{}),"Designation: ",n.jsx("strong",{children:"Grievance Officer"}),n.jsx("br",{}),"Email:"," ",n.jsx("a",{href:"mailto:studio@thevibestation.com",style:qo,children:"studio@thevibestation.com"}),n.jsx("br",{}),"Address: ",n.jsx("strong",{children:"[Insert Full Business Address in Gujarat, India]"})]})}]}];function v1(){return w1(),n.jsx(Ss,{title:"Terms of Service",lastUpdated:"March 22, 2026",intro:[n.jsxs(n.Fragment,{children:["Welcome to Vibe Station. These Terms of Service (“Terms”) govern your access to and use of the website, storefront, customer account features, content, products, services, and related experiences made available by ",n.jsx("strong",{children:"Vibe Station, operated by CODEMASTR APPS PRIVATE LIMITED"}),", based in"," ",n.jsx("strong",{children:"Gujarat, India"})," (“Vibe Station,” “we,” “us,” or “our”)."]}),"By accessing or using our website or purchasing from us, you agree to these Terms. If you do not agree, please do not use the Services."],sections:x1})}function w1(){_.useEffect(()=>{const o=document.title;return document.title="Terms of Service",()=>{document.title=o}},[]),_.useEffect(()=>{let o=document.querySelector('meta[name="description"]');const s=!!o;o||(o=document.createElement("meta"),o.setAttribute("name","description"),document.head.appendChild(o));const l=o.getAttribute("content");return o.setAttribute("content",y1),()=>{o&&(s?l!==null&&o.setAttribute("content",l):o.remove())}},[])}const b1="Read the Vibe Station Privacy Policy to understand what information we collect, how we use it, and your privacy rights.";function k1(){return _.useEffect(()=>{const o=document.title;document.title="Privacy Policy";let s=document.querySelector('meta[name="description"]');const l=!!s;s||(s=document.createElement("meta"),s.setAttribute("name","description"),document.head.appendChild(s));const u=s.getAttribute("content");return s.setAttribute("content",b1),()=>{document.title=o,s&&(l?u!==null&&s.setAttribute("content",u):s.remove())}},[]),n.jsx(nt,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:n.jsx(be,{children:n.jsxs(Se,{gap:"24px",children:[n.jsxs("header",{children:[n.jsx("h1",{style:S1,children:"Privacy Policy"}),n.jsx("p",{style:j1,children:"Last updated: March 10, 2026"})]}),n.jsx("p",{style:Ee,children:"Vibe Station (“we,” “us,” or “our”) respects your privacy and is committed to handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you visit, use, or make a purchase through our website, storefront, customer account experience, and related services (collectively, the “Services”)."}),n.jsx("p",{style:Ee,children:"Vibe Station, operated by CODEMASTR APPS PRIVATE LIMITED, is based in Gujarat, India."}),n.jsx("p",{style:Ee,children:"Our Services may be powered in part by third-party commerce and operational infrastructure, including Shopify for commerce operations, Razorpay for payments, and Shiprocket for shipping and fulfillment support. Those providers may process personal information in accordance with their own terms, notices, and applicable law."}),n.jsx("p",{style:Ee,children:"By using our Services, you acknowledge that your information will be handled as described in this Privacy Policy."}),n.jsxs(mt,{title:"1. Information We Collect",children:[n.jsx(xl,{children:"Information you provide directly"}),n.jsx(Kr,{items:["name","email address","phone number","shipping address","billing address","account details","order details and purchase history","messages, inquiries, support requests, reviews, and other communications you send to us"]}),n.jsx(xl,{children:"Information collected automatically"}),n.jsx(Kr,{items:["device and browser information","IP address","approximate location inferred from IP address","pages viewed and interactions with the Services","timestamps, referral information, and technical diagnostics","cookie and session data necessary for site functionality, security, and account continuity"]}),n.jsx(xl,{children:"Information from service providers and transaction partners"}),n.jsx(Kr,{items:["payment status and limited transaction metadata from payment processors","shipping, delivery, and fulfillment updates from logistics and shipping partners","fraud, risk, security, and operational signals necessary to protect the Services"]}),n.jsxs("p",{style:Ee,children:["We do ",n.jsx("strong",{children:"not"})," collect your card number, UPI PIN, bank password, or similar full financial credentials directly unless explicitly shown and stated at checkout. Payment information is typically handled by our payment service providers."]})]}),n.jsxs(mt,{title:"2. How We Use Information",children:[n.jsx(Kr,{items:["create, maintain, and secure customer accounts","authenticate users and keep accounts functional","process orders, payments, shipping, returns, replacements, and refunds","communicate about purchases, deliveries, service issues, and support requests","provide customer support","detect, investigate, and prevent fraud, misuse, unauthorized access, and other harmful activity","maintain, troubleshoot, and improve the functionality, reliability, and security of the Services","comply with legal obligations and enforce our terms, policies, and rights"]}),n.jsx("p",{style:Ee,children:"We may also use aggregated or de-identified information where permitted by law."})]}),n.jsxs(mt,{title:"3. Cookies and Similar Technologies",children:[n.jsx("p",{style:Ee,children:"We may use cookies, local storage, session technologies, and similar tools that are reasonably necessary to operate the Services, keep users signed in, remember preferences, maintain security, and support essential website functionality."}),n.jsx("p",{style:Ee,children:"At present, we do not state in this Privacy Policy that we use advertising trackers, marketing pixels, or non-essential analytics tools. If we introduce such tools in the future, we may update this Privacy Policy and, where required, provide additional notice or choices."}),n.jsx("p",{style:Ee,children:"You can usually control cookies through your browser settings, though disabling certain cookies may affect functionality."})]}),n.jsx(mt,{title:"4. Payments",children:n.jsx("p",{style:Ee,children:"Payments are processed through third-party payment providers, including Razorpay. These providers may collect, process, and store payment-related information under their own privacy notices, security practices, and legal obligations. We generally receive limited payment-related information such as payment confirmation, payment status, transaction identifiers, and other operational details necessary to complete your order, manage refunds, prevent fraud, and maintain records."})}),n.jsx(mt,{title:"5. Shipping and Fulfillment",children:n.jsx("p",{style:Ee,children:"To fulfill and deliver your orders, we may share relevant information such as your name, phone number, shipping address, order contents, shipment value, and delivery instructions with shipping, courier, and fulfillment partners, including Shiprocket and carrier partners it may engage. This information is used only as reasonably necessary for order processing, fulfillment, delivery, returns, support, logistics coordination, and related compliance purposes."})}),n.jsx(mt,{title:"6. Commerce Infrastructure and Store Operations",children:n.jsx("p",{style:Ee,children:"Our commerce operations may be supported by Shopify, including storefront, checkout-related infrastructure, order management, customer account functionality, and related commerce services. Even where the customer experience is delivered through a custom or headless storefront, the underlying commerce workflow may still involve third-party platform infrastructure. To the extent these providers process personal information for store operations, that processing may also be governed by their own notices and contractual terms."})}),n.jsxs(mt,{title:"7. How We Share Information",children:[n.jsx("p",{style:Ee,children:"We do not sell personal information in the ordinary meaning of that term."}),n.jsx("p",{style:Ee,children:"We may share personal information:"}),n.jsx(Kr,{items:["with service providers and vendors that help us operate the Services","with payment, shipping, fulfillment, hosting, security, and commerce infrastructure providers","where necessary to investigate fraud, enforce our terms, or protect rights, safety, and property","where required by law, regulation, legal process, or lawful authority request","in connection with a merger, financing, acquisition, restructuring, dissolution, sale of assets, or similar transaction","with your direction or consent"]})]}),n.jsxs(mt,{title:"8. Legal Bases and Lawful Use",children:[n.jsx("p",{style:Ee,children:"Where applicable law requires a legal basis for processing, we may process personal information because:"}),n.jsx(Kr,{items:["it is necessary to provide the Services or perform a contract with you","it is necessary to comply with legal obligations","it is necessary for our legitimate interests, such as securing, operating, and improving the Services","you have given consent, where consent is required"]})]}),n.jsxs(mt,{title:"9. Data Retention",children:[n.jsx("p",{style:Ee,children:"We retain personal information for as long as reasonably necessary for the purposes described in this Privacy Policy, including to:"}),n.jsx(Kr,{items:["provide the Services","complete transactions and fulfill orders","maintain financial, tax, accounting, and business records","resolve disputes","enforce agreements","comply with legal, regulatory, or reporting obligations"]}),n.jsx("p",{style:Ee,children:"Retention periods may vary depending on the type of information and the purpose for which it was collected."})]}),n.jsxs(mt,{title:"10. Data Security",children:[n.jsx("p",{style:Ee,children:"We use reasonable administrative, technical, and organizational safeguards designed to protect personal information, such as access controls, secure transmission practices, and measures intended to reduce the risk of unauthorized access, alteration, disclosure, or destruction."}),n.jsx("p",{style:Ee,children:"However, no method of transmission over the internet and no method of electronic storage is completely secure, and we cannot guarantee absolute security."})]}),n.jsx(mt,{title:"11. International Data Transfers",children:n.jsx("p",{style:Ee,children:"Your personal information may be processed, stored, or accessed in countries other than the country in which you are located, including through service providers and infrastructure partners. Where applicable, we take reasonable steps to require appropriate protections for such transfers under applicable law."})}),n.jsxs(mt,{title:"12. Your Rights",children:[n.jsx("p",{style:Ee,children:"Depending on your location and the laws that apply, you may have the right to:"}),n.jsx(Kr,{items:["request access to your personal information","request correction of inaccurate or incomplete information","request deletion of your personal information","request a copy of certain personal information","object to or restrict certain processing","withdraw consent where processing is based on consent"]}),n.jsx("p",{style:Ee,children:"We may need to verify your identity before acting on certain requests. We may also deny or limit requests where permitted by law."})]}),n.jsx(mt,{title:"13. Children’s Privacy",children:n.jsx("p",{style:Ee,children:"Our Services are not directed to children, and we do not knowingly collect personal information from children where doing so would violate applicable law. If you believe a child has provided personal information to us improperly, please contact us so we can take appropriate action."})}),n.jsx(mt,{title:"14. Changes to This Privacy Policy",children:n.jsx("p",{style:Ee,children:"We may update this Privacy Policy from time to time to reflect changes in our business, technology stack, legal obligations, or privacy practices. When we do, we will revise the “Last updated” date above. Where required, we will provide additional notice or obtain consent."})}),n.jsx(mt,{title:"15. Governing Law and Jurisdiction",children:n.jsx("p",{style:Ee,children:"This Privacy Policy shall be governed by the laws of India. Subject to applicable consumer protection and data protection laws, courts in Gujarat, India shall have jurisdiction in relation to disputes arising from this Privacy Policy or the Services."})}),n.jsxs(mt,{title:"16. Contact Us",children:[n.jsx("p",{style:Ee,children:"For privacy questions, requests, or complaints, contact us at:"}),n.jsx("p",{style:Ee,children:n.jsx("a",{href:"mailto:studio@thevibestation.com",style:R1,children:"studio@thevibestation.com"})})]})]})})})}function mt({title:o,children:s}){return n.jsxs("section",{children:[n.jsx("h2",{style:C1,children:o}),n.jsx(Se,{gap:"14px",children:s})]})}function xl({children:o}){return n.jsx("h3",{style:T1,children:o})}function Kr({items:o}){return n.jsx("ul",{style:E1,children:o.map(s=>n.jsx("li",{style:I1,children:s},s))})}const S1={margin:0,color:"var(--foreground)",fontSize:"36px",lineHeight:"44px",fontWeight:700},j1={marginTop:"8px",marginBottom:0,color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px"},C1={marginTop:0,marginBottom:"10px",color:"var(--foreground)",fontSize:"20px",lineHeight:"30px",fontWeight:600},T1={margin:0,color:"var(--foreground)",fontSize:"16px",lineHeight:"24px",fontWeight:600},Ee={margin:0,color:"var(--muted-foreground)",fontSize:"16px",lineHeight:"24px"},E1={margin:0,paddingLeft:"20px",color:"var(--muted-foreground)",display:"grid",gap:"8px"},I1={fontSize:"16px",lineHeight:"24px"},R1={color:"var(--primary)",textDecoration:"none",fontWeight:600},_1="Read the Vibe Station Shipping Policy for processing times, dispatch, delivery, and shipment support details.",N1=[{title:"1. Order Processing",blocks:[{type:"paragraph",content:"Orders are usually processed within 1 to 3 business days unless a different timeline is shown on the product page, at checkout, or in a specific announcement."},{type:"paragraph",content:"Orders are not typically processed, packed, or dispatched on:"},{type:"list",items:["Sundays,","public holidays,","exceptional closure days,","periods of unusually high order volume."]},{type:"paragraph",content:"If additional verification is needed for payment, address confirmation, fraud screening, or stock confirmation, processing may take longer."}]},{title:"2. Shipping Partners",blocks:[{type:"paragraph",content:"We may use Shiprocket and/or third-party courier partners to fulfill and deliver orders. Carrier selection may vary by destination, serviceability, order value, product type, and operational conditions."}]},{title:"3. Delivery Timelines",blocks:[{type:"paragraph",content:"Estimated delivery timelines shown on the site or at checkout are estimates only and are not guaranteed unless expressly stated otherwise."},{type:"paragraph",content:"Delivery times may vary based on:"},{type:"list",items:["destination and serviceable pin code,","courier operations,","weather,","transport disruptions,","regional restrictions,","inaccurate address details,","customer availability to receive delivery,","force majeure events,","other circumstances beyond our control."]}]},{title:"4. Shipping Charges",blocks:[{type:"paragraph",content:"Shipping charges, handling charges, or related fees, if any, will be displayed at checkout or otherwise communicated before you complete your purchase."},{type:"paragraph",content:"We may offer promotional shipping terms from time to time, including free shipping above certain thresholds, subject to change without notice."}]},{title:"5. Address Accuracy",blocks:[{type:"paragraph",content:"You are responsible for providing accurate and complete shipping details, including:"},{type:"list",items:["recipient name,","phone number,","delivery address,","pin code,","landmark or access instructions where relevant."]},{type:"paragraph",content:"We are not responsible for delays, failed deliveries, or additional charges resulting from incomplete, inaccurate, or outdated address information provided by you."}]},{title:"6. Shipment Tracking",blocks:[{type:"paragraph",content:"Where tracking is available, we may provide shipment tracking details after dispatch. Tracking updates are generated by carrier systems and may not refresh in real time."}]},{title:"7. Multiple Shipments",blocks:[{type:"paragraph",content:"An order may be shipped in one or more packages depending on stock location, packaging, carrier constraints, or operational decisions. Separate shipments may arrive at different times."}]},{title:"8. Delivery Attempts and Failed Delivery",blocks:[{type:"paragraph",content:"Courier partners may make a limited number of delivery attempts. If a delivery fails because:"},{type:"list",items:["the recipient is unavailable,","the address is incorrect or incomplete,","delivery is refused,","the shipment remains unclaimed,","the customer does not cooperate with delivery coordination,"]},{type:"paragraph",content:"the order may be returned to us, delayed, cancelled, or subject to re-shipping charges."}]},{title:"9. Delays Outside Our Control",blocks:[{type:"paragraph",content:"We are not liable for shipping or delivery delays caused by:"},{type:"list",items:["carrier disruptions,","natural events,","strikes,","transport or customs issues,","government actions,","local restrictions,","public emergencies,","other force majeure events."]},{type:"paragraph",content:"We will make reasonable efforts to assist with tracking and coordination where possible."}]},{title:"10. Risk and Title",blocks:[{type:"paragraph",content:"Unless otherwise required by applicable law, risk in the product passes to you upon delivery to the shipping address provided in the order."}]},{title:"11. Damaged or Tampered Packages",blocks:[{type:"paragraph",content:"If the outer package appears visibly damaged, tampered, opened, or compromised at the time of delivery, you should:"},{type:"list",items:["refuse delivery where appropriate, or","record evidence at delivery and contact us as soon as possible."]},{type:"paragraph",content:"If you accept such a package, please notify us within 48 hours of delivery with clear photos and your order details."}]},{title:"12. Serviceability",blocks:[{type:"paragraph",content:"We reserve the right to decline, cancel, or restrict orders to locations that are not serviceable, operationally high-risk, restricted by courier availability, or otherwise unsuitable for shipment."}]},{title:"13. International Shipping",blocks:[{type:"paragraph",content:"If international shipping is enabled in the future or expressly offered, additional customs duties, import taxes, brokerage charges, or destination-country fees may apply and shall generally be your responsibility unless stated otherwise at checkout."}]},{title:"14. Contact",blocks:[{type:"paragraph",content:n.jsx("a",{href:"mailto:studio@thevibestation.com",style:qo,children:"studio@thevibestation.com"})}]}];function P1(){return z1(),n.jsx(Ss,{title:"Shipping Policy",lastUpdated:"March 22, 2026",intro:["This Shipping Policy explains how Vibe Station processes, dispatches, and delivers orders placed through our website."],sections:N1})}function z1(){_.useEffect(()=>{const o=document.title;return document.title="Shipping Policy",()=>{document.title=o}},[]),_.useEffect(()=>{let o=document.querySelector('meta[name="description"]');const s=!!o;o||(o=document.createElement("meta"),o.setAttribute("name","description"),document.head.appendChild(o));const l=o.getAttribute("content");return o.setAttribute("content",_1),()=>{o&&(s?l!==null&&o.setAttribute("content",l):o.remove())}},[])}const A1="Read the Vibe Station Return and Refund Policy covering returns, replacements, cancellations, and refunds.",D1=[{title:"1. General Principle",blocks:[{type:"paragraph",content:"We aim to be fair, clear, and practical. Because many products sold through music and creator-commerce stores may be personal-use, consumable, sealed, fragile, or performance-related, not every product is eligible for return after delivery."}]},{title:"2. Eligible Cases",blocks:[{type:"paragraph",content:"You may be eligible for a return, replacement, refund, or other appropriate resolution if:"},{type:"list",items:["you received the wrong product,","the product arrived damaged,","the product was defective on arrival,","the product is materially different from what was ordered,","the order was cancelled before dispatch and payment had already been captured."]}]},{title:"3. Reporting Window",blocks:[{type:"paragraph",content:"For wrong, damaged, missing, tampered, or defective-on-arrival items, you must contact us within 48 hours of delivery with:"},{type:"list",items:["your order number,","a description of the issue,","clear photos or videos of the package and product,","any other information reasonably requested for verification."]},{type:"paragraph",content:"Claims reported after this window may be declined where verification is no longer reasonably possible."}]},{title:"4. Change-of-Mind Returns",blocks:[{type:"paragraph",content:"Unless otherwise stated on the product page, at checkout, or in a specific promotion, change-of-mind returns are generally not guaranteed."},{type:"paragraph",content:"Where we choose to accept a discretionary change-of-mind return, it will usually require that:"},{type:"list",items:["the request is made within 3 days of delivery,","the product is unused,","the product is unopened where sealed,","the product is in original condition,","all tags, packaging, accessories, manuals, and bundled items are included,","the item passes return inspection."]},{type:"paragraph",content:"In such cases, original shipping fees and return shipping costs may be deducted unless the return is due to our error."}]},{title:"5. Non-Returnable / Non-Refundable Items",blocks:[{type:"paragraph",content:"Unless required by applicable law or expressly approved by us, the following are generally not eligible for return or refund:"},{type:"list",items:["used products,","opened sealed items,","consumables,","hygiene-sensitive items,","customized or made-to-order products,","special-order items,","gift cards,","digital products or downloadable content,","products damaged due to misuse, mishandling, improper installation, abuse, neglect, unauthorized repair, or normal wear and tear,","clearance, final-sale, or non-returnable items marked as such."]}]},{title:"6. Return Approval",blocks:[{type:"paragraph",content:"A return must be approved by us before you send any item back. Unauthorized returns may be refused, delayed, or treated as ineligible."},{type:"paragraph",content:"If a return is approved, we may provide instructions regarding:"},{type:"list",items:["return pickup,","self-shipping,","packaging requirements,","return address,","supporting documentation."]}]},{title:"7. Inspection and Resolution",blocks:[{type:"paragraph",content:"Once the returned item is received, we may inspect it before approving a refund, replacement, store credit, or other resolution."},{type:"paragraph",content:"If the claim is validated, we may choose one of the following remedies at our discretion, subject to applicable law:"},{type:"list",items:["replacement,","refund,","repair support,","store credit,","partial refund where appropriate."]}]},{title:"8. Refund Method and Timeline",blocks:[{type:"paragraph",content:"Approved refunds are generally processed back to the original payment method, unless otherwise agreed or required."},{type:"paragraph",content:"After approval, refund timelines may vary depending on:"},{type:"list",items:["your payment method,","banking systems,","payment gateway processes,","public holidays,","technical settlement cycles."]},{type:"paragraph",content:"As a general estimate, processed refunds may reflect within 5 to 10 business days, though some payment methods may take longer."}]},{title:"9. Cancellation Policy",blocks:[{type:"paragraph",content:"Orders may be cancelled before dispatch unless:"},{type:"list",items:["the product is already packed or shipped,","the product is customized or specially procured,","the order is otherwise marked non-cancellable."]},{type:"paragraph",content:"If an order is cancelled after payment but before dispatch, an appropriate refund will be initiated."}]},{title:"10. Refused Delivery / Return-to-Origin",blocks:[{type:"paragraph",content:"If an order is refused at delivery or returned because of customer-caused delivery failure, we may deduct shipping, return shipping, handling, payment, or recovery charges from any applicable refund."}]},{title:"11. Fraud Prevention",blocks:[{type:"paragraph",content:"We reserve the right to deny returns, replacements, or refunds in cases involving:"},{type:"list",items:["suspicious claims,","repeated abuse of refund policies,","incomplete or false evidence,","tampering,","serial return misuse,","non-compliance with this policy."]}]},{title:"12. Statutory Rights",blocks:[{type:"paragraph",content:"Nothing in this policy limits any non-waivable rights you may have under applicable consumer law."}]},{title:"13. Contact",blocks:[{type:"paragraph",content:n.jsx("a",{href:"mailto:studio@thevibestation.com",style:qo,children:"studio@thevibestation.com"})}]}];function L1(){return F1(),n.jsx(Ss,{title:"Return and Refund Policy",lastUpdated:"March 22, 2026",intro:["This Return and Refund Policy explains when returns, replacements, cancellations, and refunds may be available for purchases made from Vibe Station."],sections:D1})}function F1(){_.useEffect(()=>{const o=document.title;return document.title="Return and Refund Policy",()=>{document.title=o}},[]),_.useEffect(()=>{let o=document.querySelector('meta[name="description"]');const s=!!o;o||(o=document.createElement("meta"),o.setAttribute("name","description"),document.head.appendChild(o));const l=o.getAttribute("content");return o.setAttribute("content",A1),()=>{o&&(s?l!==null&&o.setAttribute("content",l):o.remove())}},[])}const O1="Read the Vibe Station Cookie Policy to understand how cookies and similar technologies are used on the site.",M1=[{title:"1. What Are Cookies",blocks:[{type:"paragraph",content:"Cookies are small text files placed on your browser or device when you visit a website. Similar technologies may include local storage, pixels, tags, SDKs, and session identifiers."},{type:"paragraph",content:"They help websites function, remember preferences, maintain sessions, support security, and understand how services are used."}]},{title:"2. Why We Use Cookies",blocks:[{type:"paragraph",content:"We may use cookies and similar technologies for the following purposes:"},{type:"list",items:["to keep the website functioning properly,","to maintain secure sessions,","to support cart and account continuity,","to remember preferences,","to help detect fraud or abuse,","to improve reliability and technical performance,","to support essential storefront and commerce operations."]}]},{title:"3. Types of Cookies We May Use",blocks:[{type:"subheading",content:"Strictly Necessary Cookies"},{type:"paragraph",content:"These are required for the website to function properly. They may support:"},{type:"list",items:["login sessions,","shopping cart functionality,","checkout continuity,","fraud prevention,","security,","load balancing,","basic site performance."]},{type:"paragraph",content:"These cookies are generally necessary for the operation of the website and cannot always be disabled without affecting functionality."},{type:"subheading",content:"Functional Cookies"},{type:"paragraph",content:"These help remember choices you make, such as preferences, region, or similar settings that improve your experience."},{type:"subheading",content:"Performance or Analytics Cookies"},{type:"paragraph",content:"These may help us understand site usage, diagnose issues, and improve performance. As of the date of this policy, we do not describe the routine use of third-party advertising pixels or non-essential marketing trackers in this Cookie Policy. If we introduce optional analytics or similar tools in the future, we may update this policy and provide additional notice or choices where required."},{type:"subheading",content:"Advertising or Targeting Cookies"},{type:"paragraph",content:"As of the date of this policy, we do not state that we use advertising or retargeting cookies for profiling-based ad delivery. If that changes, we may update this Cookie Policy and, where required, seek or manage consent appropriately."}]},{title:"4. Third-Party Technologies",blocks:[{type:"paragraph",content:"Some parts of the storefront or supporting infrastructure may rely on third-party technologies, including commerce, hosting, payment, security, and delivery-related systems. These providers may set or access cookies or similar technologies where needed for core functionality, fraud prevention, or transaction support."}]},{title:"5. Browser Controls",blocks:[{type:"paragraph",content:"Most browsers allow you to manage cookies through settings, including blocking or deleting cookies. However, disabling cookies may affect core functionality such as:"},{type:"list",items:["login,","cart persistence,","checkout flow,","account access,","security features."]}]},{title:"6. Consent and Choices",blocks:[{type:"paragraph",content:"Where applicable law requires consent for non-essential cookies, we may present a consent or preference mechanism. Where such tools are not legally required or where only strictly necessary cookies are used, cookie choices may be more limited."}]},{title:"7. International Visitors",blocks:[{type:"paragraph",content:"If you access our site from a jurisdiction with specific cookie or privacy rights, your rights may depend on the law applicable to your location. We may update our consent and cookie practices as our site, tools, and legal obligations evolve."}]},{title:"8. Updates to This Policy",blocks:[{type:"paragraph",content:"We may update this Cookie Policy from time to time to reflect changes in law, technology, our service providers, or our website practices. The updated version will be posted with a revised “Last updated” date."}]},{title:"9. Contact",blocks:[{type:"paragraph",content:n.jsx("a",{href:"mailto:studio@thevibestation.com",style:qo,children:"studio@thevibestation.com"})}]}];function $1(){return H1(),n.jsx(Ss,{title:"Cookie Policy",lastUpdated:"March 22, 2026",intro:["This Cookie Policy explains how Vibe Station uses cookies and similar technologies in connection with our website, storefront, and related services."],sections:M1})}function H1(){_.useEffect(()=>{const o=document.title;return document.title="Cookie Policy",()=>{document.title=o}},[]),_.useEffect(()=>{let o=document.querySelector('meta[name="description"]');const s=!!o;o||(o=document.createElement("meta"),o.setAttribute("name","description"),document.head.appendChild(o));const l=o.getAttribute("content");return o.setAttribute("content",O1),()=>{o&&(s?l!==null&&o.setAttribute("content",l):o.remove())}},[])}function Hp({id:o,name:s,productHandle:l,variant:u,price:p,quantity:f,imageUrl:m,imageAlt:g,onIncrement:k,onDecrement:x,onRemove:w}){const h=`/products/${l}`;return n.jsx(Be,{variant:"subtle",padding:"md",children:n.jsxs("div",{"data-testid":"cart-line-item",style:{display:"flex",gap:"12px",alignItems:"flex-start"},children:[n.jsxs("a",{href:h,style:{flex:1,display:"flex",gap:"12px",alignItems:"flex-start",textDecoration:"none",color:"inherit",minWidth:0},children:[n.jsx("div",{style:{width:"72px",height:"72px",backgroundColor:"var(--muted)",borderRadius:"12px",flexShrink:0,overflow:"hidden"},children:m?n.jsx("img",{src:m,alt:g||s,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"6px",minWidth:0},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:s}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:u}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:p})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-end"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx(Ye,{variant:"ghost",size:"sm",label:"−",onClick:x?()=>x(o):void 0}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif",minWidth:"20px",textAlign:"center"},children:f}),n.jsx(Ye,{variant:"ghost",size:"sm",label:"+",onClick:k?()=>k(o):void 0})]}),n.jsx(Ye,{variant:"ghost",size:"sm",label:"Remove",onClick:w?()=>w(o):void 0})]})]})})}const U1={title:"Cart",yourCartTitle:"Your cart",relatedProductsTitle:"Related products",relatedProductsSubtitle:"Picked from the same product categories already in your cart.",relatedProductsEmptyState:"No related products are available right now.",summaryTitle:"Order summary",subtotalLabel:"Subtotal",shippingLabel:"Shipping",shippingValue:"Calculated at checkout",totalLabel:"Total",taxesLine:"Taxes and shipping calculated at checkout.",drawerCheckoutLabel:"Checkout",drawerContinueLabel:"Continue shopping",drawerFooterCaption:"You'll complete payment in checkout.",emptyCartMessage:"Your cart is empty.",summaryCheckoutLabel:"Checkout",summaryContinueLabel:"Continue shopping",writeItemSuffix:"items",addButtonLabel:"Add"};function Ko(){return{copy:U1,isLoading:!1}}const ep=3;function tp(o,s){return s.size===0?0:o.categoryIds.reduce((l,u)=>s.has(u)?l+1:l,0)}function B1(){const{addItem:o,items:s}=wr(),{copy:l}=Ko(),{products:u,isLoading:p}=$p(),f=_.useMemo(()=>{if(!u.length)return[];const m=new Set(s.map(w=>w.productHandle)),g=new Set(s.map(w=>w.variantId)),k=u.filter(w=>m.has(w.id)),x=new Set(k.flatMap(w=>w.categoryIds));return[...u].filter(w=>w.isInStock).filter(w=>!m.has(w.id)).filter(w=>!w.variantId||!g.has(w.variantId)).sort((w,h)=>{const v=tp(h,x),T=tp(w,x);return v!==T?v-T:w.name.localeCompare(h.name)}).slice(0,ep)},[s,u]);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[n.jsx("h4",{style:{margin:0,fontSize:"20px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.relatedProductsTitle}),n.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.relatedProductsSubtitle})]}),p?n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"16px"},children:Array.from({length:ep}).map((m,g)=>n.jsx("div",{style:{minHeight:"320px",borderRadius:"16px",border:"1px solid var(--border)",backgroundColor:"var(--card)"}},g))}):f.length?n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"16px"},children:f.map(m=>n.jsx(Be,{variant:"elevated",mediaSlot:n.jsxs("div",{style:{position:"relative",width:"100%",height:"180px",backgroundColor:"var(--muted)"},children:[m.imageUrl?n.jsx("img",{src:m.imageUrl,alt:m.imageAlt||m.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null,n.jsx("div",{style:{position:"absolute",top:"12px",left:"12px"},children:n.jsx(ot,{label:m.badgeLabel,variant:m.badgeVariant,size:"sm"})})]}),footerSlot:n.jsx(Ye,{variant:"primary",size:"sm",fullWidth:!0,label:l.addButtonLabel,disabled:!m.variantId,onClick:()=>{m.variantId&&o(m.variantId)}}),children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",height:"100%"},children:[n.jsx("h5",{style:{margin:0,fontSize:"18px",lineHeight:"26px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.name}),n.jsx("p",{style:{margin:0,fontSize:"13px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:m.descriptor}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.featureLine}),n.jsx("div",{style:{marginTop:"auto",fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.priceLabel})]})},m.id))}):n.jsx(Be,{variant:"subtle",padding:"md",children:n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.relatedProductsEmptyState})})]})}function W1(){const{items:o,cartError:s,clearCartError:l,incrementItem:u,decrementItem:p,removeItem:f}=wr(),{copy:m}=Ko();return n.jsxs("div",{style:{flex:"0 0 65%",display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsx("h2",{style:{margin:0,fontSize:"30px",lineHeight:"38px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:m.yourCartTitle}),s?n.jsx("div",{onClick:l,children:n.jsx(Ht,{type:"error",children:s})}):null,n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:o.map(g=>n.jsx(Hp,{id:g.id,name:g.name,productHandle:g.productHandle,variant:g.variant,price:gs(g.price),quantity:g.quantity,imageUrl:g.imageUrl,imageAlt:g.imageAlt,onIncrement:u,onDecrement:p,onRemove:f},g.id))}),n.jsx(Be,{variant:"subtle",padding:"lg",children:n.jsx(B1,{})})]})}function V1({title:o,subtitle:s,children:l,onClose:u,footer:p}){return n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:u,children:n.jsxs("div",{style:{width:"520px",maxWidth:"92%",backgroundColor:"var(--card)",borderRadius:"20px",border:"1px solid var(--border)",boxShadow:"0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814",padding:"20px",display:"flex",flexDirection:"column",gap:"16px",position:"relative"},onClick:f=>f.stopPropagation(),children:[(o||s)&&n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",position:"relative"},children:[n.jsxs("div",{children:[o&&n.jsx("div",{style:{fontSize:"18px",fontWeight:600,color:"var(--foreground)",lineHeight:"28px"},children:o}),s&&n.jsx("div",{style:{fontSize:"14px",color:"var(--muted-foreground)",lineHeight:"20px",marginTop:"4px"},children:s})]}),u&&n.jsx("div",{style:{position:"absolute",top:0,right:0},children:n.jsx("button",{onClick:u,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"Close"})})]}),n.jsx("div",{style:{flex:1,minHeight:"100px",display:"flex",flexDirection:"column",gap:"12px"},children:l}),p&&n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:p})]})})}function q1({itemCount:o,subtotal:s,onContinue:l,onBack:u,onClose:p}){return n.jsxs(V1,{onClose:p,title:"Heading to checkout",subtitle:"You'll complete payment securely in checkout.",footer:n.jsx(K1,{onContinue:l,onBack:u}),children:[n.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)",marginTop:"-8px"}}),n.jsx(Y1,{itemCount:o,subtotal:s}),n.jsx(Q1,{})]})}function Y1({itemCount:o,subtotal:s}){return n.jsx(Be,{variant:"subtle",padding:"md",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx(vl,{label:"Items",value:String(o),valueWeight:"600"}),n.jsx(vl,{label:"Shipping",value:"Calculated in checkout"}),n.jsx(vl,{label:"Total",value:gs(s),valueWeight:"600",valueSize:"20px",valueLineHeight:"30px"}),n.jsx("div",{style:{marginTop:"6px"},children:n.jsx(ot,{label:"No password needed",variant:"neutral",size:"sm"})})]})})}function vl({label:o,value:s,valueWeight:l="400",valueSize:u="14px",valueLineHeight:p="20px"}){return n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:o}),n.jsx("div",{style:{fontSize:u,lineHeight:p,fontWeight:l,color:"var(--foreground)"},children:s})]})}function Q1(){return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsx("div",{style:{position:"relative",height:"6px",width:"100%",backgroundColor:"var(--border)",borderRadius:"999px",overflow:"hidden"},children:n.jsx("div",{style:{position:"absolute",top:0,left:0,height:"6px",width:"45%",backgroundColor:"#4F46E5",borderRadius:"999px",transition:"width 0.3s ease-out"}})}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)"},children:"Preparing your checkout…"})]})}function K1({onContinue:o,onBack:s}){return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"100%"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[n.jsx(Ye,{label:"Back to cart",variant:"ghost",size:"md",onClick:s}),n.jsx(Ye,{label:"Continue",variant:"primary",size:"md",onClick:o})]}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)",textAlign:"right"},children:"If checkout doesn't open, try again."})]})}function Up({subtotal:o=5997,total:s=5997}){const{copy:l}=Ko();return n.jsx(Be,{variant:"elevated",padding:"md",children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.summaryTitle}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.subtotalLabel}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:gs(o)})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingLabel}),n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingValue})]}),n.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.totalLabel}),n.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:gs(s)})]})]}),n.jsx(Op,{}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.taxesLine})]})})}function X1(){const{cartCount:o,subtotal:s,total:l,checkout:u}=wr(),{copy:p}=Ko(),[f,m]=_.useState(!1);return n.jsxs("div",{style:{flex:"0 0 35%",display:"flex",flexDirection:"column",gap:"16px",position:"sticky",top:"24px"},children:[n.jsx(Up,{subtotal:s,total:l}),n.jsx(Ye,{variant:"primary",size:"lg","data-testid":"checkout-button",label:p.summaryCheckoutLabel,onClick:()=>m(!0)}),n.jsx(Ye,{variant:"secondary",size:"lg",label:p.summaryContinueLabel,onClick:()=>{window.location.href="/products"}}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:p.taxesLine}),f?n.jsx(q1,{itemCount:o,subtotal:s,onBack:()=>m(!1),onClose:()=>m(!1),onContinue:()=>{u()}}):null]})}function G1(){return n.jsx(nt,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:n.jsx(be,{children:n.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start"},children:[n.jsx(W1,{}),n.jsx(X1,{})]})})})}function J1(){return n.jsx(G1,{})}function Z1(){const{items:o,cartCount:s,subtotal:l,total:u,cartError:p,clearCartError:f,closeCartDrawer:m,incrementItem:g,decrementItem:k,removeItem:x}=wr(),{copy:w}=Ko();return n.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:[n.jsx("div",{onClick:m,style:{position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.5)"}}),n.jsxs("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:"420px",backgroundColor:"var(--card)",borderLeft:"1px solid var(--border)",boxShadow:"-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)",display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{padding:"24px",borderBottom:"1px solid var(--border)",flexShrink:0},children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("h3",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:w.title}),n.jsx(ot,{label:`${s} ${w.writeItemSuffix}`,variant:"neutral",size:"sm"})]})}),n.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},children:[p?n.jsx("div",{onClick:f,children:n.jsx(Ht,{type:"error",children:p})}):null,o.length?n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:o.map(h=>n.jsx(Hp,{id:h.id,name:h.name,variant:h.variant,price:`₹${h.price.toLocaleString("en-IN")}`,quantity:h.quantity,imageUrl:h.imageUrl,imageAlt:h.imageAlt,onIncrement:g,onDecrement:k,onRemove:x},h.id))}):n.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:w.emptyCartMessage}),n.jsx(Up,{subtotal:l,total:u})]}),n.jsxs("div",{style:{padding:"24px",borderTop:"1px solid var(--border)",flexShrink:0,display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsx(Ye,{variant:"primary",size:"lg","data-testid":"checkout-button",label:w.drawerCheckoutLabel,onClick:()=>{m(),window.location.href="/cart"}}),n.jsx(Ye,{variant:"secondary",size:"lg",label:w.drawerContinueLabel,onClick:m}),n.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:w.drawerFooterCaption})]})]})]})}function ew(){const o=window.location.pathname.replace(/\/+$/,"")||"/";if(o.startsWith("/products/"))return n.jsx(y0,{});if(/^\/account\/reset\/[^/]+\/[^/]+$/.test(o))return n.jsx(Ld,{});if(/^\/account\/orders\/[^/]+$/.test(o))return n.jsx(_y,{});switch(o){case"/":return n.jsx(iv,{});case"/products":return n.jsx(l1,{});case"/philosophy":return n.jsx(lv,{});case"/community":return n.jsx(bx,{});case"/terms":return n.jsx(v1,{});case"/privacy":return n.jsx(k1,{});case"/shipping-policy":return n.jsx(P1,{});case"/returns-refunds":return n.jsx(L1,{});case"/cookie-policy":return n.jsx($1,{});case"/cart":return n.jsx(J1,{});case"/account":return n.jsx(Ey,{});case"/account/login":return n.jsx(gy,{});case"/account/register":return n.jsx(yy,{});case"/account/password-reset":case"/account/forgot-password":return n.jsx(xy,{});case"/account/password-reset/confirm":return n.jsx(Ld,{});default:return n.jsx(Nx,{})}}function tw(){const{isDrawerOpen:o}=wr(),s=window.location.pathname.replace(/\/+$/,"")||"/",l=s==="/account"||s.startsWith("/account/"),u=s==="/cart";return n.jsxs(lx,{children:[ew(),!l&&!u&&o?n.jsx(Z1,{}):null]})}const rw=({...o})=>{const{theme:s="system"}=Ol();return n.jsx(Q0,{theme:s,position:"top-center",className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...o})};function nw({children:o}){return n.jsxs(Hy,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[n.jsx(ug,{children:n.jsx(Fy,{children:o})}),n.jsx(rw,{})]})}const Bp=document.getElementById("root");if(!Bp)throw new Error('Root element with id "root" was not found.');Vm.createRoot(Bp).render(n.jsx(_.StrictMode,{children:n.jsx(nw,{children:n.jsx(tw,{})})}));

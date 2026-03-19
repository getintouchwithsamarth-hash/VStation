(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(f){if(f.ep)return;f.ep=!0;const p=l(f);fetch(f.href,p)}})();function Rd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var el={exports:{}},Co={},tl={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function pm(){if(id)return le;id=1;var i=Symbol.for("react.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),h=Symbol.iterator;function w(v){return v===null||typeof v!="object"?null:(v=h&&v[h]||v["@@iterator"],typeof v=="function"?v:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,R={};function P(v,_,W){this.props=v,this.context=_,this.refs=R,this.updater=W||I}P.prototype.isReactComponent={},P.prototype.setState=function(v,_){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,_,"setState")},P.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function se(){}se.prototype=P.prototype;function fe(v,_,W){this.props=v,this.context=_,this.refs=R,this.updater=W||I}var K=fe.prototype=new se;K.constructor=fe,F(K,P.prototype),K.isPureReactComponent=!0;var $=Array.isArray,B=Object.prototype.hasOwnProperty,te={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function Ie(v,_,W){var J,oe={},G=null,de=null;if(_!=null)for(J in _.ref!==void 0&&(de=_.ref),_.key!==void 0&&(G=""+_.key),_)B.call(_,J)&&!ce.hasOwnProperty(J)&&(oe[J]=_[J]);var ae=arguments.length-2;if(ae===1)oe.children=W;else if(1<ae){for(var pe=Array(ae),Ae=0;Ae<ae;Ae++)pe[Ae]=arguments[Ae+2];oe.children=pe}if(v&&v.defaultProps)for(J in ae=v.defaultProps,ae)oe[J]===void 0&&(oe[J]=ae[J]);return{$$typeof:i,type:v,key:G,ref:de,props:oe,_owner:te.current}}function Le(v,_){return{$$typeof:i,type:v.type,key:_,ref:v.ref,props:v.props,_owner:v._owner}}function Be(v){return typeof v=="object"&&v!==null&&v.$$typeof===i}function we(v){var _={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(W){return _[W]})}var Re=/\/+/g;function ze(v,_){return typeof v=="object"&&v!==null&&v.key!=null?we(""+v.key):_.toString(36)}function Ke(v,_,W,J,oe){var G=typeof v;(G==="undefined"||G==="boolean")&&(v=null);var de=!1;if(v===null)de=!0;else switch(G){case"string":case"number":de=!0;break;case"object":switch(v.$$typeof){case i:case a:de=!0}}if(de)return de=v,oe=oe(de),v=J===""?"."+ze(de,0):J,$(oe)?(W="",v!=null&&(W=v.replace(Re,"$&/")+"/"),Ke(oe,_,W,"",function(Ae){return Ae})):oe!=null&&(Be(oe)&&(oe=Le(oe,W+(!oe.key||de&&de.key===oe.key?"":(""+oe.key).replace(Re,"$&/")+"/")+v)),_.push(oe)),1;if(de=0,J=J===""?".":J+":",$(v))for(var ae=0;ae<v.length;ae++){G=v[ae];var pe=J+ze(G,ae);de+=Ke(G,_,W,pe,oe)}else if(pe=w(v),typeof pe=="function")for(v=pe.call(v),ae=0;!(G=v.next()).done;)G=G.value,pe=J+ze(G,ae++),de+=Ke(G,_,W,pe,oe);else if(G==="object")throw _=String(v),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return de}function Ce(v,_,W){if(v==null)return v;var J=[],oe=0;return Ke(v,J,"","",function(G){return _.call(W,G,oe++)}),J}function ne(v){if(v._status===-1){var _=v._result;_=_(),_.then(function(W){(v._status===0||v._status===-1)&&(v._status=1,v._result=W)},function(W){(v._status===0||v._status===-1)&&(v._status=2,v._result=W)}),v._status===-1&&(v._status=0,v._result=_)}if(v._status===1)return v._result.default;throw v._result}var ue={current:null},O={transition:null},q={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:O,ReactCurrentOwner:te};function U(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:Ce,forEach:function(v,_,W){Ce(v,function(){_.apply(this,arguments)},W)},count:function(v){var _=0;return Ce(v,function(){_++}),_},toArray:function(v){return Ce(v,function(_){return _})||[]},only:function(v){if(!Be(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},le.Component=P,le.Fragment=l,le.Profiler=f,le.PureComponent=fe,le.StrictMode=c,le.Suspense=S,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,le.act=U,le.cloneElement=function(v,_,W){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var J=F({},v.props),oe=v.key,G=v.ref,de=v._owner;if(_!=null){if(_.ref!==void 0&&(G=_.ref,de=te.current),_.key!==void 0&&(oe=""+_.key),v.type&&v.type.defaultProps)var ae=v.type.defaultProps;for(pe in _)B.call(_,pe)&&!ce.hasOwnProperty(pe)&&(J[pe]=_[pe]===void 0&&ae!==void 0?ae[pe]:_[pe])}var pe=arguments.length-2;if(pe===1)J.children=W;else if(1<pe){ae=Array(pe);for(var Ae=0;Ae<pe;Ae++)ae[Ae]=arguments[Ae+2];J.children=ae}return{$$typeof:i,type:v.type,key:oe,ref:G,props:J,_owner:de}},le.createContext=function(v){return v={$$typeof:m,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:p,_context:v},v.Consumer=v},le.createElement=Ie,le.createFactory=function(v){var _=Ie.bind(null,v);return _.type=v,_},le.createRef=function(){return{current:null}},le.forwardRef=function(v){return{$$typeof:x,render:v}},le.isValidElement=Be,le.lazy=function(v){return{$$typeof:j,_payload:{_status:-1,_result:v},_init:ne}},le.memo=function(v,_){return{$$typeof:C,type:v,compare:_===void 0?null:_}},le.startTransition=function(v){var _=O.transition;O.transition={};try{v()}finally{O.transition=_}},le.unstable_act=U,le.useCallback=function(v,_){return ue.current.useCallback(v,_)},le.useContext=function(v){return ue.current.useContext(v)},le.useDebugValue=function(){},le.useDeferredValue=function(v){return ue.current.useDeferredValue(v)},le.useEffect=function(v,_){return ue.current.useEffect(v,_)},le.useId=function(){return ue.current.useId()},le.useImperativeHandle=function(v,_,W){return ue.current.useImperativeHandle(v,_,W)},le.useInsertionEffect=function(v,_){return ue.current.useInsertionEffect(v,_)},le.useLayoutEffect=function(v,_){return ue.current.useLayoutEffect(v,_)},le.useMemo=function(v,_){return ue.current.useMemo(v,_)},le.useReducer=function(v,_,W){return ue.current.useReducer(v,_,W)},le.useRef=function(v){return ue.current.useRef(v)},le.useState=function(v){return ue.current.useState(v)},le.useSyncExternalStore=function(v,_,W){return ue.current.useSyncExternalStore(v,_,W)},le.useTransition=function(){return ue.current.useTransition()},le.version="18.3.1",le}var sd;function vl(){return sd||(sd=1,tl.exports=pm()),tl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function mm(){if(ad)return Co;ad=1;var i=vl(),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function m(x,S,C){var j,h={},w=null,I=null;C!==void 0&&(w=""+C),S.key!==void 0&&(w=""+S.key),S.ref!==void 0&&(I=S.ref);for(j in S)c.call(S,j)&&!p.hasOwnProperty(j)&&(h[j]=S[j]);if(x&&x.defaultProps)for(j in S=x.defaultProps,S)h[j]===void 0&&(h[j]=S[j]);return{$$typeof:a,type:x,key:w,ref:I,props:h,_owner:f.current}}return Co.Fragment=l,Co.jsx=m,Co.jsxs=m,Co}var ld;function hm(){return ld||(ld=1,el.exports=mm()),el.exports}var r=hm(),N=vl();const M=Rd(N);var os={},nl={exports:{}},vt={},rl={exports:{}},ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function gm(){return ud||(ud=1,(function(i){function a(O,q){var U=O.length;O.push(q);e:for(;0<U;){var v=U-1>>>1,_=O[v];if(0<f(_,q))O[v]=q,O[U]=_,U=v;else break e}}function l(O){return O.length===0?null:O[0]}function c(O){if(O.length===0)return null;var q=O[0],U=O.pop();if(U!==q){O[0]=U;e:for(var v=0,_=O.length,W=_>>>1;v<W;){var J=2*(v+1)-1,oe=O[J],G=J+1,de=O[G];if(0>f(oe,U))G<_&&0>f(de,oe)?(O[v]=de,O[G]=U,v=G):(O[v]=oe,O[J]=U,v=J);else if(G<_&&0>f(de,U))O[v]=de,O[G]=U,v=G;else break e}}return q}function f(O,q){var U=O.sortIndex-q.sortIndex;return U!==0?U:O.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var m=Date,x=m.now();i.unstable_now=function(){return m.now()-x}}var S=[],C=[],j=1,h=null,w=3,I=!1,F=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(O){for(var q=l(C);q!==null;){if(q.callback===null)c(C);else if(q.startTime<=O)c(C),q.sortIndex=q.expirationTime,a(S,q);else break;q=l(C)}}function $(O){if(R=!1,K(O),!F)if(l(S)!==null)F=!0,ne(B);else{var q=l(C);q!==null&&ue($,q.startTime-O)}}function B(O,q){F=!1,R&&(R=!1,se(Ie),Ie=-1),I=!0;var U=w;try{for(K(q),h=l(S);h!==null&&(!(h.expirationTime>q)||O&&!we());){var v=h.callback;if(typeof v=="function"){h.callback=null,w=h.priorityLevel;var _=v(h.expirationTime<=q);q=i.unstable_now(),typeof _=="function"?h.callback=_:h===l(S)&&c(S),K(q)}else c(S);h=l(S)}if(h!==null)var W=!0;else{var J=l(C);J!==null&&ue($,J.startTime-q),W=!1}return W}finally{h=null,w=U,I=!1}}var te=!1,ce=null,Ie=-1,Le=5,Be=-1;function we(){return!(i.unstable_now()-Be<Le)}function Re(){if(ce!==null){var O=i.unstable_now();Be=O;var q=!0;try{q=ce(!0,O)}finally{q?ze():(te=!1,ce=null)}}else te=!1}var ze;if(typeof fe=="function")ze=function(){fe(Re)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Ce=Ke.port2;Ke.port1.onmessage=Re,ze=function(){Ce.postMessage(null)}}else ze=function(){P(Re,0)};function ne(O){ce=O,te||(te=!0,ze())}function ue(O,q){Ie=P(function(){O(i.unstable_now())},q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_continueExecution=function(){F||I||(F=!0,ne(B))},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_getFirstCallbackNode=function(){return l(S)},i.unstable_next=function(O){switch(w){case 1:case 2:case 3:var q=3;break;default:q=w}var U=w;w=q;try{return O()}finally{w=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=w;w=O;try{return q()}finally{w=U}},i.unstable_scheduleCallback=function(O,q,U){var v=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?v+U:v):U=v,O){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=U+_,O={id:j++,callback:q,priorityLevel:O,startTime:U,expirationTime:_,sortIndex:-1},U>v?(O.sortIndex=U,a(C,O),l(S)===null&&O===l(C)&&(R?(se(Ie),Ie=-1):R=!0,ue($,U-v))):(O.sortIndex=_,a(S,O),F||I||(F=!0,ne(B))),O},i.unstable_shouldYield=we,i.unstable_wrapCallback=function(O){var q=w;return function(){var U=w;w=q;try{return O.apply(this,arguments)}finally{w=U}}}})(ol)),ol}var cd;function xm(){return cd||(cd=1,rl.exports=gm()),rl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd;function ym(){if(dd)return vt;dd=1;var i=vl(),a=xm();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function p(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(f[e]=t,e=0;e<t.length;e++)c.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j={},h={};function w(e){return S.call(h,e)?!0:S.call(j,e)?!1:C.test(e)?h[e]=!0:(j[e]=!0,!1)}function I(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,t,n,o){if(t===null||typeof t>"u"||I(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,n,o,s,u,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=d}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var se=/[\-:]([a-z])/g;function fe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(se,fe);P[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(se,fe);P[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(se,fe);P[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function K(e,t,n,o){var s=P.hasOwnProperty(t)?P[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F(t,n,s,o)&&(n=null),o||s===null?w(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,o=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var $=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),te=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),Le=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),we=Symbol.for("react.context"),Re=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),O=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,v;function _(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var W=!1;function J(e,t){if(!e||W)return"";W=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var o=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){o=T}e.call(t.prototype)}else{try{throw Error()}catch(T){o=T}e()}}catch(T){if(T&&o&&typeof T.stack=="string"){for(var s=T.stack.split(`
`),u=o.stack.split(`
`),d=s.length-1,g=u.length-1;1<=d&&0<=g&&s[d]!==u[g];)g--;for(;1<=d&&0<=g;d--,g--)if(s[d]!==u[g]){if(d!==1||g!==1)do if(d--,g--,0>g||s[d]!==u[g]){var y=`
`+s[d].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=d&&0<=g);break}}}finally{W=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_(e):""}function oe(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function G(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ce:return"Fragment";case te:return"Portal";case Le:return"Profiler";case Ie:return"StrictMode";case ze:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case we:return(e.displayName||"Context")+".Consumer";case Be:return(e._context.displayName||"Context")+".Provider";case Re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(t);case 8:return t===Ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ae(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){o=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tn(e){e._valueTracker||(e._valueTracker=Ae(e))}function yn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=pe(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qt(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yo(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=ae(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Or(e,t){t=t.checked,t!=null&&K(e,"checked",t,!1)}function nn(e,t){Or(e,t);var n=ae(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?St(e,t.type,n):t.hasOwnProperty("defaultValue")&&St(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function St(e,t,n){(t!=="number"||kt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yn=Array.isArray;function vn(e,t,n,o){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ae(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function et(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rn(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(Yn(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ae(n)}}function Qo(e,t){var n=ae(t.value),o=ae(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Ko(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Br(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kn,dr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kn=Kn||document.createElement("div"),Kn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function It(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kn=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){kn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function Xo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function Go(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,s=Xo(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,s):e[n]=s}}var Jo=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fr(e,t){if(t){if(Jo[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Ur(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xn=null;function _t(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $r=null,Sn=null,on=null;function Hr(e){if(e=uo(e)){if(typeof $r!="function")throw Error(l(280));var t=e.stateNode;t&&(t=vi(t),$r(e.stateNode,e.type,t))}}function ie(e){Sn?on?on.push(e):on=[e]:Sn=e}function De(){if(Sn){var e=Sn,t=on;if(on=Sn=null,Hr(e),t)for(e=0;e<t.length;e++)Hr(t[e])}}function qe(e,t){return e(t)}function st(){}var jn=!1;function Ue(e,t,n){if(jn)return e(t,n);jn=!0;try{return qe(e,t,n)}finally{jn=!1,(Sn!==null||on!==null)&&(st(),De())}}function Xe(e,t){var n=e.stateNode;if(n===null)return null;var o=vi(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var bn=!1;if(x)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){bn=!0}}),window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch{bn=!1}function jt(e,t,n,o,s,u,d,g,y){var T=Array.prototype.slice.call(arguments,3);try{t.apply(n,T)}catch(A){this.onError(A)}}var Cn=!1,Ft=null,Wr=!1,vs=null,wf={onError:function(e){Cn=!0,Ft=e}};function kf(e,t,n,o,s,u,d,g,y){Cn=!1,Ft=null,jt.apply(wf,arguments)}function Sf(e,t,n,o,s,u,d,g,y){if(kf.apply(this,arguments),Cn){if(Cn){var T=Ft;Cn=!1,Ft=null}else throw Error(l(198));Wr||(Wr=!0,vs=T)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Il(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _l(e){if(Gn(e)!==e)throw Error(l(188))}function jf(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,o=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return _l(s),e;if(u===o)return _l(s),t;u=u.sibling}throw Error(l(188))}if(n.return!==o.return)n=s,o=u;else{for(var d=!1,g=s.child;g;){if(g===n){d=!0,n=s,o=u;break}if(g===o){d=!0,o=s,n=u;break}g=g.sibling}if(!d){for(g=u.child;g;){if(g===n){d=!0,n=u,o=s;break}if(g===o){d=!0,o=u,n=s;break}g=g.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==o)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Fl(e){return e=jf(e),e!==null?Nl(e):null}function Nl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nl(e);if(t!==null)return t;e=e.sibling}return null}var Rl=a.unstable_scheduleCallback,zl=a.unstable_cancelCallback,bf=a.unstable_shouldYield,Cf=a.unstable_requestPaint,Oe=a.unstable_now,Ef=a.unstable_getCurrentPriorityLevel,ws=a.unstable_ImmediatePriority,Al=a.unstable_UserBlockingPriority,Zo=a.unstable_NormalPriority,Tf=a.unstable_LowPriority,Pl=a.unstable_IdlePriority,ei=null,Kt=null;function If(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Nf,_f=Math.log,Ff=Math.LN2;function Nf(e){return e>>>=0,e===0?32:31-(_f(e)/Ff|0)|0}var ti=64,ni=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,u=e.pingedLanes,d=n&268435455;if(d!==0){var g=d&~s;g!==0?o=Vr(g):(u&=d,u!==0&&(o=Vr(u)))}else d=n&~s,d!==0?o=Vr(d):u!==0&&(o=Vr(u));if(o===0)return 0;if(t!==0&&t!==o&&(t&s)===0&&(s=o&-o,u=t&-t,s>=u||s===16&&(u&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Mt(t),s=1<<n,o|=e[n],t&=~s;return o}function Rf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-Mt(u),g=1<<d,y=s[d];y===-1?((g&n)===0||(g&o)!==0)&&(s[d]=Rf(g,t)):y<=t&&(e.expiredLanes|=g),u&=~g}}function ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ll(){var e=ti;return ti<<=1,(ti&4194240)===0&&(ti=64),e}function Ss(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function Af(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Mt(n),u=1<<s;t[s]=0,o[s]=-1,e[s]=-1,n&=~u}}function js(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Mt(n),s=1<<o;s&t|e[o]&t&&(e[o]|=t),n&=~s}}var xe=0;function Dl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ol,bs,Ml,Bl,Ul,Cs=!1,oi=[],En=null,Tn=null,In=null,Yr=new Map,Qr=new Map,_n=[],Pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $l(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function Kr(e,t,n,o,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[s]},t!==null&&(t=uo(t),t!==null&&bs(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Lf(e,t,n,o,s){switch(t){case"focusin":return En=Kr(En,e,t,n,o,s),!0;case"dragenter":return Tn=Kr(Tn,e,t,n,o,s),!0;case"mouseover":return In=Kr(In,e,t,n,o,s),!0;case"pointerover":var u=s.pointerId;return Yr.set(u,Kr(Yr.get(u)||null,e,t,n,o,s)),!0;case"gotpointercapture":return u=s.pointerId,Qr.set(u,Kr(Qr.get(u)||null,e,t,n,o,s)),!0}return!1}function Hl(e){var t=Jn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Il(n),t!==null){e.blockedOn=t,Ul(e.priority,function(){Ml(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Xn=o,n.target.dispatchEvent(o),Xn=null}else return t=uo(n),t!==null&&bs(t),e.blockedOn=n,!1;t.shift()}return!0}function Wl(e,t,n){ii(e)&&n.delete(t)}function Df(){Cs=!1,En!==null&&ii(En)&&(En=null),Tn!==null&&ii(Tn)&&(Tn=null),In!==null&&ii(In)&&(In=null),Yr.forEach(Wl),Qr.forEach(Wl)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Cs||(Cs=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Df)))}function Gr(e){function t(s){return Xr(s,e)}if(0<oi.length){Xr(oi[0],e);for(var n=1;n<oi.length;n++){var o=oi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(En!==null&&Xr(En,e),Tn!==null&&Xr(Tn,e),In!==null&&Xr(In,e),Yr.forEach(t),Qr.forEach(t),n=0;n<_n.length;n++)o=_n[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Hl(n),n.blockedOn===null&&_n.shift()}var pr=$.ReactCurrentBatchConfig,si=!0;function Of(e,t,n,o){var s=xe,u=pr.transition;pr.transition=null;try{xe=1,Es(e,t,n,o)}finally{xe=s,pr.transition=u}}function Mf(e,t,n,o){var s=xe,u=pr.transition;pr.transition=null;try{xe=4,Es(e,t,n,o)}finally{xe=s,pr.transition=u}}function Es(e,t,n,o){if(si){var s=Ts(e,t,n,o);if(s===null)Ws(e,t,o,ai,n),$l(e,o);else if(Lf(s,e,t,n,o))o.stopPropagation();else if($l(e,o),t&4&&-1<Pf.indexOf(e)){for(;s!==null;){var u=uo(s);if(u!==null&&Ol(u),u=Ts(e,t,n,o),u===null&&Ws(e,t,o,ai,n),u===s)break;s=u}s!==null&&o.stopPropagation()}else Ws(e,t,o,null,n)}}var ai=null;function Ts(e,t,n,o){if(ai=null,e=_t(o),e=Jn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Il(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ai=e,null}function Vl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ef()){case ws:return 1;case Al:return 4;case Zo:case Tf:return 16;case Pl:return 536870912;default:return 16}default:return 16}}var Fn=null,Is=null,li=null;function ql(){if(li)return li;var e,t=Is,n=t.length,o,s="value"in Fn?Fn.value:Fn.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===s[u-o];o++);return li=s.slice(e,1<o?1-o:void 0)}function ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function Yl(){return!1}function bt(e){function t(n,o,s,u,d){this._reactName=n,this._targetInst=s,this.type=o,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ci:Yl,this.isPropagationStopped=Yl,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=bt(mr),Jr=U({},mr,{view:0,detail:0}),Bf=bt(Jr),Fs,Ns,Zr,di=U({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(Fs=e.screenX-Zr.screenX,Ns=e.screenY-Zr.screenY):Ns=Fs=0,Zr=e),Fs)},movementY:function(e){return"movementY"in e?e.movementY:Ns}}),Ql=bt(di),Uf=U({},di,{dataTransfer:0}),$f=bt(Uf),Hf=U({},Jr,{relatedTarget:0}),Rs=bt(Hf),Wf=U({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vf=bt(Wf),qf=U({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yf=bt(qf),Qf=U({},mr,{data:0}),Kl=bt(Qf),Kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gf[e])?!!t[e]:!1}function zs(){return Jf}var Zf=U({},Jr,{key:function(e){if(e.key){var t=Kf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ep=bt(Zf),tp=U({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xl=bt(tp),np=U({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),rp=bt(np),op=U({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ip=bt(op),sp=U({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ap=bt(sp),lp=[9,13,27,32],As=x&&"CompositionEvent"in window,eo=null;x&&"documentMode"in document&&(eo=document.documentMode);var up=x&&"TextEvent"in window&&!eo,Gl=x&&(!As||eo&&8<eo&&11>=eo),Jl=" ",Zl=!1;function eu(e,t){switch(e){case"keyup":return lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function cp(e,t){switch(e){case"compositionend":return tu(t);case"keypress":return t.which!==32?null:(Zl=!0,Jl);case"textInput":return e=t.data,e===Jl&&Zl?null:e;default:return null}}function dp(e,t){if(hr)return e==="compositionend"||!As&&eu(e,t)?(e=ql(),li=Is=Fn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gl&&t.locale!=="ko"?null:t.data;default:return null}}var fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fp[e.type]:t==="textarea"}function ru(e,t,n,o){ie(o),t=gi(t,"onChange"),0<t.length&&(n=new _s("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var to=null,no=null;function pp(e){ku(e,0)}function fi(e){var t=wr(e);if(yn(t))return e}function mp(e,t){if(e==="change")return t}var ou=!1;if(x){var Ps;if(x){var Ls="oninput"in document;if(!Ls){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),Ls=typeof iu.oninput=="function"}Ps=Ls}else Ps=!1;ou=Ps&&(!document.documentMode||9<document.documentMode)}function su(){to&&(to.detachEvent("onpropertychange",au),no=to=null)}function au(e){if(e.propertyName==="value"&&fi(no)){var t=[];ru(t,no,e,_t(e)),Ue(pp,t)}}function hp(e,t,n){e==="focusin"?(su(),to=t,no=n,to.attachEvent("onpropertychange",au)):e==="focusout"&&su()}function gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(no)}function xp(e,t){if(e==="click")return fi(t)}function yp(e,t){if(e==="input"||e==="change")return fi(t)}function vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:vp;function ro(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var s=n[o];if(!S.call(t,s)||!Bt(e[s],t[s]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=lu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function du(){for(var e=window,t=kt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kt(e.document)}return t}function Ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wp(e){var t=du(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cu(n.ownerDocument.documentElement,n)){if(o!==null&&Ds(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,u=Math.min(o.start,s);o=o.end===void 0?u:Math.min(o.end,s),!e.extend&&u>o&&(s=o,o=u,u=s),s=uu(n,u);var d=uu(n,o);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),u>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kp=x&&"documentMode"in document&&11>=document.documentMode,gr=null,Os=null,oo=null,Ms=!1;function fu(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ms||gr==null||gr!==kt(o)||(o=gr,"selectionStart"in o&&Ds(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=gi(Os,"onSelect"),0<o.length&&(t=new _s("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=gr)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},Bs={},pu={};x&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function mi(e){if(Bs[e])return Bs[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pu)return Bs[e]=t[n];return e}var mu=mi("animationend"),hu=mi("animationiteration"),gu=mi("animationstart"),xu=mi("transitionend"),yu=new Map,vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){yu.set(e,t),p(t,[e])}for(var Us=0;Us<vu.length;Us++){var $s=vu[Us],Sp=$s.toLowerCase(),jp=$s[0].toUpperCase()+$s.slice(1);Nn(Sp,"on"+jp)}Nn(mu,"onAnimationEnd"),Nn(hu,"onAnimationIteration"),Nn(gu,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(xu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function wu(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Sf(o,t,void 0,e),e.currentTarget=null}function ku(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],s=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var d=o.length-1;0<=d;d--){var g=o[d],y=g.instance,T=g.currentTarget;if(g=g.listener,y!==u&&s.isPropagationStopped())break e;wu(s,g,T),u=y}else for(d=0;d<o.length;d++){if(g=o[d],y=g.instance,T=g.currentTarget,g=g.listener,y!==u&&s.isPropagationStopped())break e;wu(s,g,T),u=y}}}if(Wr)throw e=vs,Wr=!1,vs=null,e}function je(e,t){var n=t[Xs];n===void 0&&(n=t[Xs]=new Set);var o=e+"__bubble";n.has(o)||(Su(t,e,2,!1),n.add(o))}function Hs(e,t,n){var o=0;t&&(o|=4),Su(n,e,o,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function so(e){if(!e[hi]){e[hi]=!0,c.forEach(function(n){n!=="selectionchange"&&(bp.has(n)||Hs(n,!1,e),Hs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,Hs("selectionchange",!1,t))}}function Su(e,t,n,o){switch(Vl(t)){case 1:var s=Of;break;case 4:s=Mf;break;default:s=Es}n=s.bind(null,t,n,e),s=void 0,!bn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ws(e,t,n,o,s){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var g=o.stateNode.containerInfo;if(g===s||g.nodeType===8&&g.parentNode===s)break;if(d===4)for(d=o.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===s||y.nodeType===8&&y.parentNode===s))return;d=d.return}for(;g!==null;){if(d=Jn(g),d===null)return;if(y=d.tag,y===5||y===6){o=u=d;continue e}g=g.parentNode}}o=o.return}Ue(function(){var T=u,A=_t(n),L=[];e:{var z=yu.get(e);if(z!==void 0){var H=_s,Y=e;switch(e){case"keypress":if(ui(n)===0)break e;case"keydown":case"keyup":H=ep;break;case"focusin":Y="focus",H=Rs;break;case"focusout":Y="blur",H=Rs;break;case"beforeblur":case"afterblur":H=Rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=$f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=rp;break;case mu:case hu:case gu:H=Vf;break;case xu:H=ip;break;case"scroll":H=Bf;break;case"wheel":H=ap;break;case"copy":case"cut":case"paste":H=Yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Xl}var Q=(t&4)!==0,Me=!Q&&e==="scroll",b=Q?z!==null?z+"Capture":null:z;Q=[];for(var k=T,E;k!==null;){E=k;var D=E.stateNode;if(E.tag===5&&D!==null&&(E=D,b!==null&&(D=Xe(k,b),D!=null&&Q.push(ao(k,D,E)))),Me)break;k=k.return}0<Q.length&&(z=new H(z,Y,null,n,A),L.push({event:z,listeners:Q}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",z&&n!==Xn&&(Y=n.relatedTarget||n.fromElement)&&(Jn(Y)||Y[sn]))break e;if((H||z)&&(z=A.window===A?A:(z=A.ownerDocument)?z.defaultView||z.parentWindow:window,H?(Y=n.relatedTarget||n.toElement,H=T,Y=Y?Jn(Y):null,Y!==null&&(Me=Gn(Y),Y!==Me||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(H=null,Y=T),H!==Y)){if(Q=Ql,D="onMouseLeave",b="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Xl,D="onPointerLeave",b="onPointerEnter",k="pointer"),Me=H==null?z:wr(H),E=Y==null?z:wr(Y),z=new Q(D,k+"leave",H,n,A),z.target=Me,z.relatedTarget=E,D=null,Jn(A)===T&&(Q=new Q(b,k+"enter",Y,n,A),Q.target=E,Q.relatedTarget=Me,D=Q),Me=D,H&&Y)t:{for(Q=H,b=Y,k=0,E=Q;E;E=yr(E))k++;for(E=0,D=b;D;D=yr(D))E++;for(;0<k-E;)Q=yr(Q),k--;for(;0<E-k;)b=yr(b),E--;for(;k--;){if(Q===b||b!==null&&Q===b.alternate)break t;Q=yr(Q),b=yr(b)}Q=null}else Q=null;H!==null&&ju(L,z,H,Q,!1),Y!==null&&Me!==null&&ju(L,Me,Y,Q,!0)}}e:{if(z=T?wr(T):window,H=z.nodeName&&z.nodeName.toLowerCase(),H==="select"||H==="input"&&z.type==="file")var X=mp;else if(nu(z))if(ou)X=yp;else{X=gp;var Z=hp}else(H=z.nodeName)&&H.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(X=xp);if(X&&(X=X(e,T))){ru(L,X,n,A);break e}Z&&Z(e,z,T),e==="focusout"&&(Z=z._wrapperState)&&Z.controlled&&z.type==="number"&&St(z,"number",z.value)}switch(Z=T?wr(T):window,e){case"focusin":(nu(Z)||Z.contentEditable==="true")&&(gr=Z,Os=T,oo=null);break;case"focusout":oo=Os=gr=null;break;case"mousedown":Ms=!0;break;case"contextmenu":case"mouseup":case"dragend":Ms=!1,fu(L,n,A);break;case"selectionchange":if(kp)break;case"keydown":case"keyup":fu(L,n,A)}var ee;if(As)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else hr?eu(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(Gl&&n.locale!=="ko"&&(hr||re!=="onCompositionStart"?re==="onCompositionEnd"&&hr&&(ee=ql()):(Fn=A,Is="value"in Fn?Fn.value:Fn.textContent,hr=!0)),Z=gi(T,re),0<Z.length&&(re=new Kl(re,e,null,n,A),L.push({event:re,listeners:Z}),ee?re.data=ee:(ee=tu(n),ee!==null&&(re.data=ee)))),(ee=up?cp(e,n):dp(e,n))&&(T=gi(T,"onBeforeInput"),0<T.length&&(A=new Kl("onBeforeInput","beforeinput",null,n,A),L.push({event:A,listeners:T}),A.data=ee))}ku(L,t)})}function ao(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gi(e,t){for(var n=t+"Capture",o=[];e!==null;){var s=e,u=s.stateNode;s.tag===5&&u!==null&&(s=u,u=Xe(e,n),u!=null&&o.unshift(ao(e,u,s)),u=Xe(e,t),u!=null&&o.push(ao(e,u,s))),e=e.return}return o}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ju(e,t,n,o,s){for(var u=t._reactName,d=[];n!==null&&n!==o;){var g=n,y=g.alternate,T=g.stateNode;if(y!==null&&y===o)break;g.tag===5&&T!==null&&(g=T,s?(y=Xe(n,u),y!=null&&d.unshift(ao(n,y,g))):s||(y=Xe(n,u),y!=null&&d.push(ao(n,y,g)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Cp=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function bu(e){return(typeof e=="string"?e:""+e).replace(Cp,`
`).replace(Ep,"")}function xi(e,t,n){if(t=bu(t),bu(e)!==t&&n)throw Error(l(425))}function yi(){}var Vs=null,qs=null;function Ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qs=typeof setTimeout=="function"?setTimeout:void 0,Tp=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,Ip=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(_p)}:Qs;function _p(e){setTimeout(function(){throw e})}function Ks(e,t){var n=t,o=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(o===0){e.removeChild(s),Gr(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=s}while(n);Gr(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+vr,lo="__reactProps$"+vr,sn="__reactContainer$"+vr,Xs="__reactEvents$"+vr,Fp="__reactListeners$"+vr,Np="__reactHandles$"+vr;function Jn(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eu(e);e!==null;){if(n=e[Xt])return n;e=Eu(e)}return t}e=n,n=e.parentNode}return null}function uo(e){return e=e[Xt]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function vi(e){return e[lo]||null}var Gs=[],kr=-1;function zn(e){return{current:e}}function be(e){0>kr||(e.current=Gs[kr],Gs[kr]=null,kr--)}function ke(e,t){kr++,Gs[kr]=e.current,e.current=t}var An={},at=zn(An),mt=zn(!1),Zn=An;function Sr(e,t){var n=e.type.contextTypes;if(!n)return An;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},u;for(u in n)s[u]=t[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ht(e){return e=e.childContextTypes,e!=null}function wi(){be(mt),be(at)}function Tu(e,t,n){if(at.current!==An)throw Error(l(168));ke(at,t),ke(mt,n)}function Iu(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(l(108,de(e)||"Unknown",s));return U({},n,o)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Zn=at.current,ke(at,e),ke(mt,mt.current),!0}function _u(e,t,n){var o=e.stateNode;if(!o)throw Error(l(169));n?(e=Iu(e,t,Zn),o.__reactInternalMemoizedMergedChildContext=e,be(mt),be(at),ke(at,e)):be(mt),ke(mt,n)}var an=null,Si=!1,Js=!1;function Fu(e){an===null?an=[e]:an.push(e)}function Rp(e){Si=!0,Fu(e)}function Pn(){if(!Js&&an!==null){Js=!0;var e=0,t=xe;try{var n=an;for(xe=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}an=null,Si=!1}catch(s){throw an!==null&&(an=an.slice(e+1)),Rl(ws,Pn),s}finally{xe=t,Js=!1}}return null}var jr=[],br=0,ji=null,bi=0,Nt=[],Rt=0,er=null,ln=1,un="";function tr(e,t){jr[br++]=bi,jr[br++]=ji,ji=e,bi=t}function Nu(e,t,n){Nt[Rt++]=ln,Nt[Rt++]=un,Nt[Rt++]=er,er=e;var o=ln;e=un;var s=32-Mt(o)-1;o&=~(1<<s),n+=1;var u=32-Mt(t)+s;if(30<u){var d=s-s%5;u=(o&(1<<d)-1).toString(32),o>>=d,s-=d,ln=1<<32-Mt(t)+s|n<<s|o,un=u+e}else ln=1<<u|n<<s|o,un=e}function Zs(e){e.return!==null&&(tr(e,1),Nu(e,1,0))}function ea(e){for(;e===ji;)ji=jr[--br],jr[br]=null,bi=jr[--br],jr[br]=null;for(;e===er;)er=Nt[--Rt],Nt[Rt]=null,un=Nt[--Rt],Nt[Rt]=null,ln=Nt[--Rt],Nt[Rt]=null}var Ct=null,Et=null,Ee=!1,Ut=null;function Ru(e,t){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,Et=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=er!==null?{id:ln,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ct=e,Et=null,!0):!1;default:return!1}}function ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function na(e){if(Ee){var t=Et;if(t){var n=t;if(!zu(e,t)){if(ta(e))throw Error(l(418));t=Rn(n.nextSibling);var o=Ct;t&&zu(e,t)?Ru(o,n):(e.flags=e.flags&-4097|2,Ee=!1,Ct=e)}}else{if(ta(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ee=!1,Ct=e}}}function Au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function Ci(e){if(e!==Ct)return!1;if(!Ee)return Au(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ys(e.type,e.memoizedProps)),t&&(t=Et)){if(ta(e))throw Pu(),Error(l(418));for(;t;)Ru(e,t),t=Rn(t.nextSibling)}if(Au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Et=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=Ct?Rn(e.stateNode.nextSibling):null;return!0}function Pu(){for(var e=Et;e;)e=Rn(e.nextSibling)}function Cr(){Et=Ct=null,Ee=!1}function ra(e){Ut===null?Ut=[e]:Ut.push(e)}var zp=$.ReactCurrentBatchConfig;function co(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var o=n.stateNode}if(!o)throw Error(l(147,e));var s=o,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(d){var g=s.refs;d===null?delete g[u]:g[u]=d},t._stringRef=u,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lu(e){var t=e._init;return t(e._payload)}function Du(e){function t(b,k){if(e){var E=b.deletions;E===null?(b.deletions=[k],b.flags|=16):E.push(k)}}function n(b,k){if(!e)return null;for(;k!==null;)t(b,k),k=k.sibling;return null}function o(b,k){for(b=new Map;k!==null;)k.key!==null?b.set(k.key,k):b.set(k.index,k),k=k.sibling;return b}function s(b,k){return b=Hn(b,k),b.index=0,b.sibling=null,b}function u(b,k,E){return b.index=E,e?(E=b.alternate,E!==null?(E=E.index,E<k?(b.flags|=2,k):E):(b.flags|=2,k)):(b.flags|=1048576,k)}function d(b){return e&&b.alternate===null&&(b.flags|=2),b}function g(b,k,E,D){return k===null||k.tag!==6?(k=Qa(E,b.mode,D),k.return=b,k):(k=s(k,E),k.return=b,k)}function y(b,k,E,D){var X=E.type;return X===ce?A(b,k,E.props.children,D,E.key):k!==null&&(k.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===ne&&Lu(X)===k.type)?(D=s(k,E.props),D.ref=co(b,k,E),D.return=b,D):(D=Xi(E.type,E.key,E.props,null,b.mode,D),D.ref=co(b,k,E),D.return=b,D)}function T(b,k,E,D){return k===null||k.tag!==4||k.stateNode.containerInfo!==E.containerInfo||k.stateNode.implementation!==E.implementation?(k=Ka(E,b.mode,D),k.return=b,k):(k=s(k,E.children||[]),k.return=b,k)}function A(b,k,E,D,X){return k===null||k.tag!==7?(k=ur(E,b.mode,D,X),k.return=b,k):(k=s(k,E),k.return=b,k)}function L(b,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Qa(""+k,b.mode,E),k.return=b,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case B:return E=Xi(k.type,k.key,k.props,null,b.mode,E),E.ref=co(b,null,k),E.return=b,E;case te:return k=Ka(k,b.mode,E),k.return=b,k;case ne:var D=k._init;return L(b,D(k._payload),E)}if(Yn(k)||q(k))return k=ur(k,b.mode,E,null),k.return=b,k;Ei(b,k)}return null}function z(b,k,E,D){var X=k!==null?k.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return X!==null?null:g(b,k,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case B:return E.key===X?y(b,k,E,D):null;case te:return E.key===X?T(b,k,E,D):null;case ne:return X=E._init,z(b,k,X(E._payload),D)}if(Yn(E)||q(E))return X!==null?null:A(b,k,E,D,null);Ei(b,E)}return null}function H(b,k,E,D,X){if(typeof D=="string"&&D!==""||typeof D=="number")return b=b.get(E)||null,g(k,b,""+D,X);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case B:return b=b.get(D.key===null?E:D.key)||null,y(k,b,D,X);case te:return b=b.get(D.key===null?E:D.key)||null,T(k,b,D,X);case ne:var Z=D._init;return H(b,k,E,Z(D._payload),X)}if(Yn(D)||q(D))return b=b.get(E)||null,A(k,b,D,X,null);Ei(k,D)}return null}function Y(b,k,E,D){for(var X=null,Z=null,ee=k,re=k=0,Ze=null;ee!==null&&re<E.length;re++){ee.index>re?(Ze=ee,ee=null):Ze=ee.sibling;var he=z(b,ee,E[re],D);if(he===null){ee===null&&(ee=Ze);break}e&&ee&&he.alternate===null&&t(b,ee),k=u(he,k,re),Z===null?X=he:Z.sibling=he,Z=he,ee=Ze}if(re===E.length)return n(b,ee),Ee&&tr(b,re),X;if(ee===null){for(;re<E.length;re++)ee=L(b,E[re],D),ee!==null&&(k=u(ee,k,re),Z===null?X=ee:Z.sibling=ee,Z=ee);return Ee&&tr(b,re),X}for(ee=o(b,ee);re<E.length;re++)Ze=H(ee,b,re,E[re],D),Ze!==null&&(e&&Ze.alternate!==null&&ee.delete(Ze.key===null?re:Ze.key),k=u(Ze,k,re),Z===null?X=Ze:Z.sibling=Ze,Z=Ze);return e&&ee.forEach(function(Wn){return t(b,Wn)}),Ee&&tr(b,re),X}function Q(b,k,E,D){var X=q(E);if(typeof X!="function")throw Error(l(150));if(E=X.call(E),E==null)throw Error(l(151));for(var Z=X=null,ee=k,re=k=0,Ze=null,he=E.next();ee!==null&&!he.done;re++,he=E.next()){ee.index>re?(Ze=ee,ee=null):Ze=ee.sibling;var Wn=z(b,ee,he.value,D);if(Wn===null){ee===null&&(ee=Ze);break}e&&ee&&Wn.alternate===null&&t(b,ee),k=u(Wn,k,re),Z===null?X=Wn:Z.sibling=Wn,Z=Wn,ee=Ze}if(he.done)return n(b,ee),Ee&&tr(b,re),X;if(ee===null){for(;!he.done;re++,he=E.next())he=L(b,he.value,D),he!==null&&(k=u(he,k,re),Z===null?X=he:Z.sibling=he,Z=he);return Ee&&tr(b,re),X}for(ee=o(b,ee);!he.done;re++,he=E.next())he=H(ee,b,re,he.value,D),he!==null&&(e&&he.alternate!==null&&ee.delete(he.key===null?re:he.key),k=u(he,k,re),Z===null?X=he:Z.sibling=he,Z=he);return e&&ee.forEach(function(fm){return t(b,fm)}),Ee&&tr(b,re),X}function Me(b,k,E,D){if(typeof E=="object"&&E!==null&&E.type===ce&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case B:e:{for(var X=E.key,Z=k;Z!==null;){if(Z.key===X){if(X=E.type,X===ce){if(Z.tag===7){n(b,Z.sibling),k=s(Z,E.props.children),k.return=b,b=k;break e}}else if(Z.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===ne&&Lu(X)===Z.type){n(b,Z.sibling),k=s(Z,E.props),k.ref=co(b,Z,E),k.return=b,b=k;break e}n(b,Z);break}else t(b,Z);Z=Z.sibling}E.type===ce?(k=ur(E.props.children,b.mode,D,E.key),k.return=b,b=k):(D=Xi(E.type,E.key,E.props,null,b.mode,D),D.ref=co(b,k,E),D.return=b,b=D)}return d(b);case te:e:{for(Z=E.key;k!==null;){if(k.key===Z)if(k.tag===4&&k.stateNode.containerInfo===E.containerInfo&&k.stateNode.implementation===E.implementation){n(b,k.sibling),k=s(k,E.children||[]),k.return=b,b=k;break e}else{n(b,k);break}else t(b,k);k=k.sibling}k=Ka(E,b.mode,D),k.return=b,b=k}return d(b);case ne:return Z=E._init,Me(b,k,Z(E._payload),D)}if(Yn(E))return Y(b,k,E,D);if(q(E))return Q(b,k,E,D);Ei(b,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,k!==null&&k.tag===6?(n(b,k.sibling),k=s(k,E),k.return=b,b=k):(n(b,k),k=Qa(E,b.mode,D),k.return=b,b=k),d(b)):n(b,k)}return Me}var Er=Du(!0),Ou=Du(!1),Ti=zn(null),Ii=null,Tr=null,oa=null;function ia(){oa=Tr=Ii=null}function sa(e){var t=Ti.current;be(Ti),e._currentValue=t}function aa(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Ir(e,t){Ii=e,oa=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(gt=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(oa!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(Ii===null)throw Error(l(308));Tr=e,Ii.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var nr=null;function la(e){nr===null?nr=[e]:nr.push(e)}function Mu(e,t,n,o){var s=t.interleaved;return s===null?(n.next=n,la(t)):(n.next=s.next,s.next=n),t.interleaved=n,cn(e,o)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(me&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,cn(e,n)}return s=o.interleaved,s===null?(t.next=t,la(o)):(t.next=s.next,s.next=t),o.interleaved=t,cn(e,n)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,js(e,n)}}function Uu(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?s=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fi(e,t,n,o){var s=e.updateQueue;Ln=!1;var u=s.firstBaseUpdate,d=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var y=g,T=y.next;y.next=null,d===null?u=T:d.next=T,d=y;var A=e.alternate;A!==null&&(A=A.updateQueue,g=A.lastBaseUpdate,g!==d&&(g===null?A.firstBaseUpdate=T:g.next=T,A.lastBaseUpdate=y))}if(u!==null){var L=s.baseState;d=0,A=T=y=null,g=u;do{var z=g.lane,H=g.eventTime;if((o&z)===z){A!==null&&(A=A.next={eventTime:H,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var Y=e,Q=g;switch(z=t,H=n,Q.tag){case 1:if(Y=Q.payload,typeof Y=="function"){L=Y.call(H,L,z);break e}L=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=Q.payload,z=typeof Y=="function"?Y.call(H,L,z):Y,z==null)break e;L=U({},L,z);break e;case 2:Ln=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,z=s.effects,z===null?s.effects=[g]:z.push(g))}else H={eventTime:H,lane:z,tag:g.tag,payload:g.payload,callback:g.callback,next:null},A===null?(T=A=H,y=L):A=A.next=H,d|=z;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;z=g,g=z.next,z.next=null,s.lastBaseUpdate=z,s.shared.pending=null}}while(!0);if(A===null&&(y=L),s.baseState=y,s.firstBaseUpdate=T,s.lastBaseUpdate=A,t=s.shared.interleaved,t!==null){s=t;do d|=s.lane,s=s.next;while(s!==t)}else u===null&&(s.shared.lanes=0);ir|=d,e.lanes=d,e.memoizedState=L}}function $u(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=n,typeof s!="function")throw Error(l(191,s));s.call(o)}}}var fo={},Gt=zn(fo),po=zn(fo),mo=zn(fo);function rr(e){if(e===fo)throw Error(l(174));return e}function ca(e,t){switch(ke(mo,t),ke(po,e),ke(Gt,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Br(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Br(t,e)}be(Gt),ke(Gt,t)}function _r(){be(Gt),be(po),be(mo)}function Hu(e){rr(mo.current);var t=rr(Gt.current),n=Br(t,e.type);t!==n&&(ke(po,e),ke(Gt,n))}function da(e){po.current===e&&(be(Gt),be(po))}var _e=zn(0);function Ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fa=[];function pa(){for(var e=0;e<fa.length;e++)fa[e]._workInProgressVersionPrimary=null;fa.length=0}var Ri=$.ReactCurrentDispatcher,ma=$.ReactCurrentBatchConfig,or=0,Fe=null,Ye=null,Ge=null,zi=!1,ho=!1,go=0,Ap=0;function lt(){throw Error(l(321))}function ha(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function ga(e,t,n,o,s,u){if(or=u,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Op:Mp,e=n(o,s),ho){u=0;do{if(ho=!1,go=0,25<=u)throw Error(l(301));u+=1,Ge=Ye=null,t.updateQueue=null,Ri.current=Bp,e=n(o,s)}while(ho)}if(Ri.current=Li,t=Ye!==null&&Ye.next!==null,or=0,Ge=Ye=Fe=null,zi=!1,t)throw Error(l(300));return e}function xa(){var e=go!==0;return go=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Fe.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function At(){if(Ye===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=Ge===null?Fe.memoizedState:Ge.next;if(t!==null)Ge=t,Ye=e;else{if(e===null)throw Error(l(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Ge===null?Fe.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function xo(e,t){return typeof t=="function"?t(e):t}function ya(e){var t=At(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=Ye,s=o.baseQueue,u=n.pending;if(u!==null){if(s!==null){var d=s.next;s.next=u.next,u.next=d}o.baseQueue=s=u,n.pending=null}if(s!==null){u=s.next,o=o.baseState;var g=d=null,y=null,T=u;do{var A=T.lane;if((or&A)===A)y!==null&&(y=y.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),o=T.hasEagerState?T.eagerState:e(o,T.action);else{var L={lane:A,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};y===null?(g=y=L,d=o):y=y.next=L,Fe.lanes|=A,ir|=A}T=T.next}while(T!==null&&T!==u);y===null?d=o:y.next=g,Bt(o,t.memoizedState)||(gt=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=y,n.lastRenderedState=o}if(e=n.interleaved,e!==null){s=e;do u=s.lane,Fe.lanes|=u,ir|=u,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function va(e){var t=At(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do u=e(u,d.action),d=d.next;while(d!==s);Bt(u,t.memoizedState)||(gt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,o]}function Wu(){}function Vu(e,t){var n=Fe,o=At(),s=t(),u=!Bt(o.memoizedState,s);if(u&&(o.memoizedState=s,gt=!0),o=o.queue,wa(Qu.bind(null,n,o,e),[e]),o.getSnapshot!==t||u||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,yo(9,Yu.bind(null,n,o,s,t),void 0,null),Je===null)throw Error(l(349));(or&30)!==0||qu(n,t,s)}return s}function qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yu(e,t,n,o){t.value=n,t.getSnapshot=o,Ku(t)&&Xu(e)}function Qu(e,t,n){return n(function(){Ku(t)&&Xu(e)})}function Ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function Xu(e){var t=cn(e,1);t!==null&&Vt(t,e,1,-1)}function Gu(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Dp.bind(null,Fe,e),[t.memoizedState,e]}function yo(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Ju(){return At().memoizedState}function Ai(e,t,n,o){var s=Jt();Fe.flags|=e,s.memoizedState=yo(1|t,n,void 0,o===void 0?null:o)}function Pi(e,t,n,o){var s=At();o=o===void 0?null:o;var u=void 0;if(Ye!==null){var d=Ye.memoizedState;if(u=d.destroy,o!==null&&ha(o,d.deps)){s.memoizedState=yo(t,n,u,o);return}}Fe.flags|=e,s.memoizedState=yo(1|t,n,u,o)}function Zu(e,t){return Ai(8390656,8,e,t)}function wa(e,t){return Pi(2048,8,e,t)}function ec(e,t){return Pi(4,2,e,t)}function tc(e,t){return Pi(4,4,e,t)}function nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rc(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4,4,nc.bind(null,t,e),n)}function ka(){}function oc(e,t){var n=At();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&ha(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function ic(e,t){var n=At();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&ha(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function sc(e,t,n){return(or&21)===0?(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n):(Bt(n,t)||(n=Ll(),Fe.lanes|=n,ir|=n,e.baseState=!0),t)}function Pp(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var o=ma.transition;ma.transition={};try{e(!1),t()}finally{xe=n,ma.transition=o}}function ac(){return At().memoizedState}function Lp(e,t,n){var o=Un(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},lc(e))uc(t,n);else if(n=Mu(e,t,n,o),n!==null){var s=pt();Vt(n,e,o,s),cc(n,t,o)}}function Dp(e,t,n){var o=Un(e),s={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(lc(e))uc(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,g=u(d,n);if(s.hasEagerState=!0,s.eagerState=g,Bt(g,d)){var y=t.interleaved;y===null?(s.next=s,la(t)):(s.next=y.next,y.next=s),t.interleaved=s;return}}catch{}finally{}n=Mu(e,t,s,o),n!==null&&(s=pt(),Vt(n,e,o,s),cc(n,t,o))}}function lc(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function uc(e,t){ho=zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cc(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,js(e,n)}}var Li={readContext:zt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},Op={readContext:zt,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:Zu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=Jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Jt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Lp.bind(null,Fe,e),[o.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:Gu,useDebugValue:ka,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=Gu(!1),t=e[0];return e=Pp.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Fe,s=Jt();if(Ee){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Je===null)throw Error(l(349));(or&30)!==0||qu(o,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,Zu(Qu.bind(null,o,u,e),[e]),o.flags|=2048,yo(9,Yu.bind(null,o,u,n,t),void 0,null),n},useId:function(){var e=Jt(),t=Je.identifierPrefix;if(Ee){var n=un,o=ln;n=(o&~(1<<32-Mt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ap++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mp={readContext:zt,useCallback:oc,useContext:zt,useEffect:wa,useImperativeHandle:rc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:ic,useReducer:ya,useRef:Ju,useState:function(){return ya(xo)},useDebugValue:ka,useDeferredValue:function(e){var t=At();return sc(t,Ye.memoizedState,e)},useTransition:function(){var e=ya(xo)[0],t=At().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Vu,useId:ac,unstable_isNewReconciler:!1},Bp={readContext:zt,useCallback:oc,useContext:zt,useEffect:wa,useImperativeHandle:rc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:ic,useReducer:va,useRef:Ju,useState:function(){return va(xo)},useDebugValue:ka,useDeferredValue:function(e){var t=At();return Ye===null?t.memoizedState=e:sc(t,Ye.memoizedState,e)},useTransition:function(){var e=va(xo)[0],t=At().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Vu,useId:ac,unstable_isNewReconciler:!1};function $t(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Sa(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Di={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=pt(),s=Un(e),u=dn(o,s);u.payload=t,n!=null&&(u.callback=n),t=Dn(e,u,s),t!==null&&(Vt(t,e,s,o),_i(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=pt(),s=Un(e),u=dn(o,s);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Dn(e,u,s),t!==null&&(Vt(t,e,s,o),_i(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),o=Un(e),s=dn(n,o);s.tag=2,t!=null&&(s.callback=t),t=Dn(e,s,o),t!==null&&(Vt(t,e,o,n),_i(t,e,o))}};function dc(e,t,n,o,s,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,d):t.prototype&&t.prototype.isPureReactComponent?!ro(n,o)||!ro(s,u):!0}function fc(e,t,n){var o=!1,s=An,u=t.contextType;return typeof u=="object"&&u!==null?u=zt(u):(s=ht(t)?Zn:at.current,o=t.contextTypes,u=(o=o!=null)?Sr(e,s):An),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Di,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=u),t}function pc(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Di.enqueueReplaceState(t,t.state,null)}function ja(e,t,n,o){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},ua(e);var u=t.contextType;typeof u=="object"&&u!==null?s.context=zt(u):(u=ht(t)?Zn:at.current,s.context=Sr(e,u)),s.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Sa(e,t,u,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Di.enqueueReplaceState(s,s.state,null),Fi(e,n,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t){try{var n="",o=t;do n+=oe(o),o=o.return;while(o);var s=n}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:s,digest:null}}function ba(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Up=typeof WeakMap=="function"?WeakMap:Map;function mc(e,t,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Wi||(Wi=!0,Ba=o),Ca(e,t)},n}function hc(e,t,n){n=dn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;n.payload=function(){return o(s)},n.callback=function(){Ca(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Ca(e,t),typeof o!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function gc(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Up;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(n)||(s.add(n),e=tm.bind(null,e,t,n),t.then(e,e))}function xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yc(e,t,n,o,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dn(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var $p=$.ReactCurrentOwner,gt=!1;function ft(e,t,n,o){t.child=e===null?Ou(t,null,n,o):Er(t,e.child,n,o)}function vc(e,t,n,o,s){n=n.render;var u=t.ref;return Ir(t,s),o=ga(e,t,n,o,u,s),n=xa(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,fn(e,t,s)):(Ee&&n&&Zs(t),t.flags|=1,ft(e,t,o,s),t.child)}function wc(e,t,n,o,s){if(e===null){var u=n.type;return typeof u=="function"&&!Ya(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,kc(e,t,u,o,s)):(e=Xi(n.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&s)===0){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(d,o)&&e.ref===t.ref)return fn(e,t,s)}return t.flags|=1,e=Hn(u,o),e.ref=t.ref,e.return=t,t.child=e}function kc(e,t,n,o,s){if(e!==null){var u=e.memoizedProps;if(ro(u,o)&&e.ref===t.ref)if(gt=!1,t.pendingProps=o=u,(e.lanes&s)!==0)(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,fn(e,t,s)}return Ea(e,t,n,o,s)}function Sc(e,t,n){var o=t.pendingProps,s=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Rr,Tt),Tt|=n;else{if((n&1073741824)===0)return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Rr,Tt),Tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:n,ke(Rr,Tt),Tt|=o}else u!==null?(o=u.baseLanes|n,t.memoizedState=null):o=n,ke(Rr,Tt),Tt|=o;return ft(e,t,s,n),t.child}function jc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ea(e,t,n,o,s){var u=ht(n)?Zn:at.current;return u=Sr(t,u),Ir(t,s),n=ga(e,t,n,o,u,s),o=xa(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,fn(e,t,s)):(Ee&&o&&Zs(t),t.flags|=1,ft(e,t,n,s),t.child)}function bc(e,t,n,o,s){if(ht(n)){var u=!0;ki(t)}else u=!1;if(Ir(t,s),t.stateNode===null)Mi(e,t),fc(t,n,o),ja(t,n,o,s),o=!0;else if(e===null){var d=t.stateNode,g=t.memoizedProps;d.props=g;var y=d.context,T=n.contextType;typeof T=="object"&&T!==null?T=zt(T):(T=ht(n)?Zn:at.current,T=Sr(t,T));var A=n.getDerivedStateFromProps,L=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function";L||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==o||y!==T)&&pc(t,d,o,T),Ln=!1;var z=t.memoizedState;d.state=z,Fi(t,o,d,s),y=t.memoizedState,g!==o||z!==y||mt.current||Ln?(typeof A=="function"&&(Sa(t,n,A,o),y=t.memoizedState),(g=Ln||dc(t,n,g,o,z,y,T))?(L||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=y),d.props=o,d.state=y,d.context=T,o=g):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Bu(e,t),g=t.memoizedProps,T=t.type===t.elementType?g:$t(t.type,g),d.props=T,L=t.pendingProps,z=d.context,y=n.contextType,typeof y=="object"&&y!==null?y=zt(y):(y=ht(n)?Zn:at.current,y=Sr(t,y));var H=n.getDerivedStateFromProps;(A=typeof H=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==L||z!==y)&&pc(t,d,o,y),Ln=!1,z=t.memoizedState,d.state=z,Fi(t,o,d,s);var Y=t.memoizedState;g!==L||z!==Y||mt.current||Ln?(typeof H=="function"&&(Sa(t,n,H,o),Y=t.memoizedState),(T=Ln||dc(t,n,T,o,z,Y,y)||!1)?(A||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,Y,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,Y,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=Y),d.props=o,d.state=Y,d.context=y,o=T):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),o=!1)}return Ta(e,t,n,o,u,s)}function Ta(e,t,n,o,s,u){jc(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return s&&_u(t,n,!1),fn(e,t,u);o=t.stateNode,$p.current=t;var g=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=Er(t,e.child,null,u),t.child=Er(t,null,g,u)):ft(e,t,g,u),t.memoizedState=o.state,s&&_u(t,n,!0),t.child}function Cc(e){var t=e.stateNode;t.pendingContext?Tu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tu(e,t.context,!1),ca(e,t.containerInfo)}function Ec(e,t,n,o,s){return Cr(),ra(s),t.flags|=256,ft(e,t,n,o),t.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tc(e,t,n){var o=t.pendingProps,s=_e.current,u=!1,d=(t.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(s&2)!==0),g?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ke(_e,s&1),e===null)return na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=o.children,e=o.fallback,u?(o=t.mode,u=t.child,d={mode:"hidden",children:d},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=d):u=Gi(d,o,0,null),e=ur(e,o,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=_a(n),t.memoizedState=Ia,e):Fa(t,d));if(s=e.memoizedState,s!==null&&(g=s.dehydrated,g!==null))return Hp(e,t,d,o,g,s,n);if(u){u=o.fallback,d=t.mode,s=e.child,g=s.sibling;var y={mode:"hidden",children:o.children};return(d&1)===0&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=y,t.deletions=null):(o=Hn(s,y),o.subtreeFlags=s.subtreeFlags&14680064),g!==null?u=Hn(g,u):(u=ur(u,d,n,null),u.flags|=2),u.return=t,o.return=t,o.sibling=u,t.child=o,o=u,u=t.child,d=e.child.memoizedState,d=d===null?_a(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~n,t.memoizedState=Ia,o}return u=e.child,e=u.sibling,o=Hn(u,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Fa(e,t){return t=Gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oi(e,t,n,o){return o!==null&&ra(o),Er(t,e.child,null,n),e=Fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hp(e,t,n,o,s,u,d){if(n)return t.flags&256?(t.flags&=-257,o=ba(Error(l(422))),Oi(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=o.fallback,s=t.mode,o=Gi({mode:"visible",children:o.children},s,0,null),u=ur(u,s,d,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,(t.mode&1)!==0&&Er(t,e.child,null,d),t.child.memoizedState=_a(d),t.memoizedState=Ia,u);if((t.mode&1)===0)return Oi(e,t,d,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var g=o.dgst;return o=g,u=Error(l(419)),o=ba(u,o,void 0),Oi(e,t,d,o)}if(g=(d&e.childLanes)!==0,gt||g){if(o=Je,o!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|d))!==0?0:s,s!==0&&s!==u.retryLane&&(u.retryLane=s,cn(e,s),Vt(o,e,s,-1))}return qa(),o=ba(Error(l(421))),Oi(e,t,d,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=nm.bind(null,e),s._reactRetry=t,null):(e=u.treeContext,Et=Rn(s.nextSibling),Ct=t,Ee=!0,Ut=null,e!==null&&(Nt[Rt++]=ln,Nt[Rt++]=un,Nt[Rt++]=er,ln=e.id,un=e.overflow,er=t),t=Fa(t,o.children),t.flags|=4096,t)}function Ic(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),aa(e.return,t,n)}function Na(e,t,n,o,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=s)}function _c(e,t,n){var o=t.pendingProps,s=o.revealOrder,u=o.tail;if(ft(e,t,o.children,n),o=_e.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ic(e,n,t);else if(e.tag===19)Ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ke(_e,o),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Ni(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Na(t,!1,s,n,u);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ni(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Na(t,!0,n,null,u);break;case"together":Na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wp(e,t,n){switch(t.tag){case 3:Cc(t),Cr();break;case 5:Hu(t);break;case 1:ht(t.type)&&ki(t);break;case 4:ca(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;ke(Ti,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ke(_e,_e.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Tc(e,t,n):(ke(_e,_e.current&1),e=fn(e,t,n),e!==null?e.sibling:null);ke(_e,_e.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return _c(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(_e,_e.current),o)break;return null;case 22:case 23:return t.lanes=0,Sc(e,t,n)}return fn(e,t,n)}var Fc,Ra,Nc,Rc;Fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ra=function(){},Nc=function(e,t,n,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,rr(Gt.current);var u=null;switch(n){case"input":s=Qt(e,s),o=Qt(e,o),u=[];break;case"select":s=U({},s,{value:void 0}),o=U({},o,{value:void 0}),u=[];break;case"textarea":s=et(e,s),o=et(e,o),u=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=yi)}fr(n,o);var d;n=null;for(T in s)if(!o.hasOwnProperty(T)&&s.hasOwnProperty(T)&&s[T]!=null)if(T==="style"){var g=s[T];for(d in g)g.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(f.hasOwnProperty(T)?u||(u=[]):(u=u||[]).push(T,null));for(T in o){var y=o[T];if(g=s!=null?s[T]:void 0,o.hasOwnProperty(T)&&y!==g&&(y!=null||g!=null))if(T==="style")if(g){for(d in g)!g.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in y)y.hasOwnProperty(d)&&g[d]!==y[d]&&(n||(n={}),n[d]=y[d])}else n||(u||(u=[]),u.push(T,n)),n=y;else T==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,g=g?g.__html:void 0,y!=null&&g!==y&&(u=u||[]).push(T,y)):T==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push(T,""+y):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(f.hasOwnProperty(T)?(y!=null&&T==="onScroll"&&je("scroll",e),u||g===y||(u=[])):(u=u||[]).push(T,y))}n&&(u=u||[]).push("style",n);var T=u;(t.updateQueue=T)&&(t.flags|=4)}},Rc=function(e,t,n,o){n!==o&&(t.flags|=4)};function vo(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Vp(e,t,n){var o=t.pendingProps;switch(ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return ht(t.type)&&wi(),ut(t),null;case 3:return o=t.stateNode,_r(),be(mt),be(at),pa(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ut!==null&&(Ha(Ut),Ut=null))),Ra(e,t),ut(t),null;case 5:da(t);var s=rr(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)Nc(e,t,n,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return ut(t),null}if(e=rr(Gt.current),Ci(t)){o=t.stateNode,n=t.type;var u=t.memoizedProps;switch(o[Xt]=t,o[lo]=u,e=(t.mode&1)!==0,n){case"dialog":je("cancel",o),je("close",o);break;case"iframe":case"object":case"embed":je("load",o);break;case"video":case"audio":for(s=0;s<io.length;s++)je(io[s],o);break;case"source":je("error",o);break;case"img":case"image":case"link":je("error",o),je("load",o);break;case"details":je("toggle",o);break;case"input":Yo(o,u),je("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},je("invalid",o);break;case"textarea":rn(o,u),je("invalid",o)}fr(n,u),s=null;for(var d in u)if(u.hasOwnProperty(d)){var g=u[d];d==="children"?typeof g=="string"?o.textContent!==g&&(u.suppressHydrationWarning!==!0&&xi(o.textContent,g,e),s=["children",g]):typeof g=="number"&&o.textContent!==""+g&&(u.suppressHydrationWarning!==!0&&xi(o.textContent,g,e),s=["children",""+g]):f.hasOwnProperty(d)&&g!=null&&d==="onScroll"&&je("scroll",o)}switch(n){case"input":tn(o),Mr(o,u,!0);break;case"textarea":tn(o),Ko(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=yi)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Xt]=t,e[lo]=o,Fc(e,t,!1,!1),t.stateNode=e;e:{switch(d=Ur(n,o),n){case"dialog":je("cancel",e),je("close",e),s=o;break;case"iframe":case"object":case"embed":je("load",e),s=o;break;case"video":case"audio":for(s=0;s<io.length;s++)je(io[s],e);s=o;break;case"source":je("error",e),s=o;break;case"img":case"image":case"link":je("error",e),je("load",e),s=o;break;case"details":je("toggle",e),s=o;break;case"input":Yo(e,o),s=Qt(e,o),je("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=U({},o,{value:void 0}),je("invalid",e);break;case"textarea":rn(e,o),s=et(e,o),je("invalid",e);break;default:s=o}fr(n,s),g=s;for(u in g)if(g.hasOwnProperty(u)){var y=g[u];u==="style"?Go(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&dr(e,y)):u==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&It(e,y):typeof y=="number"&&It(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(f.hasOwnProperty(u)?y!=null&&u==="onScroll"&&je("scroll",e):y!=null&&K(e,u,y,d))}switch(n){case"input":tn(e),Mr(e,o,!1);break;case"textarea":tn(e),Ko(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ae(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?vn(e,!!o.multiple,u,!1):o.defaultValue!=null&&vn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=yi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)Rc(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(n=rr(mo.current),rr(Gt.current),Ci(t)){if(o=t.stateNode,n=t.memoizedProps,o[Xt]=t,(u=o.nodeValue!==n)&&(e=Ct,e!==null))switch(e.tag){case 3:xi(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xi(o.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Xt]=t,t.stateNode=o}return ut(t),null;case 13:if(be(_e),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&Et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Pu(),Cr(),t.flags|=98560,u=!1;else if(u=Ci(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[Xt]=t}else Cr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ut(t),u=!1}else Ut!==null&&(Ha(Ut),Ut=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(_e.current&1)!==0?Qe===0&&(Qe=3):qa())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return _r(),Ra(e,t),e===null&&so(t.stateNode.containerInfo),ut(t),null;case 10:return sa(t.type._context),ut(t),null;case 17:return ht(t.type)&&wi(),ut(t),null;case 19:if(be(_e),u=t.memoizedState,u===null)return ut(t),null;if(o=(t.flags&128)!==0,d=u.rendering,d===null)if(o)vo(u,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Ni(e),d!==null){for(t.flags|=128,vo(u,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)u=n,e=o,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(_e,_e.current&1|2),t.child}e=e.sibling}u.tail!==null&&Oe()>zr&&(t.flags|=128,o=!0,vo(u,!1),t.lanes=4194304)}else{if(!o)if(e=Ni(d),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ee)return ut(t),null}else 2*Oe()-u.renderingStartTime>zr&&n!==1073741824&&(t.flags|=128,o=!0,vo(u,!1),t.lanes=4194304);u.isBackwards?(d.sibling=t.child,t.child=d):(n=u.last,n!==null?n.sibling=d:t.child=d,u.last=d)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Oe(),t.sibling=null,n=_e.current,ke(_e,o?n&1|2:n&1),t):(ut(t),null);case 22:case 23:return Va(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(Tt&1073741824)!==0&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function qp(e,t){switch(ea(t),t.tag){case 1:return ht(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),be(mt),be(at),pa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return da(t),null;case 13:if(be(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(_e),null;case 4:return _r(),null;case 10:return sa(t.type._context),null;case 22:case 23:return Va(),null;case 24:return null;default:return null}}var Bi=!1,ct=!1,Yp=typeof WeakSet=="function"?WeakSet:Set,V=null;function Nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Pe(e,t,o)}else n.current=null}function za(e,t,n){try{n()}catch(o){Pe(e,t,o)}}var zc=!1;function Qp(e,t){if(Vs=si,e=du(),Ds(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var s=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,g=-1,y=-1,T=0,A=0,L=e,z=null;t:for(;;){for(var H;L!==n||s!==0&&L.nodeType!==3||(g=d+s),L!==u||o!==0&&L.nodeType!==3||(y=d+o),L.nodeType===3&&(d+=L.nodeValue.length),(H=L.firstChild)!==null;)z=L,L=H;for(;;){if(L===e)break t;if(z===n&&++T===s&&(g=d),z===u&&++A===o&&(y=d),(H=L.nextSibling)!==null)break;L=z,z=L.parentNode}L=H}n=g===-1||y===-1?null:{start:g,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(qs={focusedElem:e,selectionRange:n},si=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var Y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var Q=Y.memoizedProps,Me=Y.memoizedState,b=t.stateNode,k=b.getSnapshotBeforeUpdate(t.elementType===t.type?Q:$t(t.type,Q),Me);b.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(D){Pe(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return Y=zc,zc=!1,Y}function wo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var u=s.destroy;s.destroy=void 0,u!==void 0&&za(t,n,u)}s=s.next}while(s!==o)}}function Ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ac(e){var t=e.alternate;t!==null&&(e.alternate=null,Ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[lo],delete t[Xs],delete t[Fp],delete t[Np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pc(e){return e.tag===5||e.tag===3||e.tag===4}function Lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pa(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yi));else if(o!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}function La(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(La(e,t,n),e=e.sibling;e!==null;)La(e,t,n),e=e.sibling}var nt=null,Ht=!1;function On(e,t,n){for(n=n.child;n!==null;)Dc(e,t,n),n=n.sibling}function Dc(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(ei,n)}catch{}switch(n.tag){case 5:ct||Nr(n,t);case 6:var o=nt,s=Ht;nt=null,On(e,t,n),nt=o,Ht=s,nt!==null&&(Ht?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(Ht?(e=nt,n=n.stateNode,e.nodeType===8?Ks(e.parentNode,n):e.nodeType===1&&Ks(e,n),Gr(e)):Ks(nt,n.stateNode));break;case 4:o=nt,s=Ht,nt=n.stateNode.containerInfo,Ht=!0,On(e,t,n),nt=o,Ht=s;break;case 0:case 11:case 14:case 15:if(!ct&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var u=s,d=u.destroy;u=u.tag,d!==void 0&&((u&2)!==0||(u&4)!==0)&&za(n,t,d),s=s.next}while(s!==o)}On(e,t,n);break;case 1:if(!ct&&(Nr(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(g){Pe(n,t,g)}On(e,t,n);break;case 21:On(e,t,n);break;case 22:n.mode&1?(ct=(o=ct)||n.memoizedState!==null,On(e,t,n),ct=o):On(e,t,n);break;default:On(e,t,n)}}function Oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yp),t.forEach(function(o){var s=rm.bind(null,e,o);n.has(o)||(n.add(o),o.then(s,s))})}}function Wt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var s=n[o];try{var u=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 5:nt=g.stateNode,Ht=!1;break e;case 3:nt=g.stateNode.containerInfo,Ht=!0;break e;case 4:nt=g.stateNode.containerInfo,Ht=!0;break e}g=g.return}if(nt===null)throw Error(l(160));Dc(u,d,s),nt=null,Ht=!1;var y=s.alternate;y!==null&&(y.return=null),s.return=null}catch(T){Pe(s,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),Zt(e),o&4){try{wo(3,e,e.return),Ui(3,e)}catch(Q){Pe(e,e.return,Q)}try{wo(5,e,e.return)}catch(Q){Pe(e,e.return,Q)}}break;case 1:Wt(t,e),Zt(e),o&512&&n!==null&&Nr(n,n.return);break;case 5:if(Wt(t,e),Zt(e),o&512&&n!==null&&Nr(n,n.return),e.flags&32){var s=e.stateNode;try{It(s,"")}catch(Q){Pe(e,e.return,Q)}}if(o&4&&(s=e.stateNode,s!=null)){var u=e.memoizedProps,d=n!==null?n.memoizedProps:u,g=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{g==="input"&&u.type==="radio"&&u.name!=null&&Or(s,u),Ur(g,d);var T=Ur(g,u);for(d=0;d<y.length;d+=2){var A=y[d],L=y[d+1];A==="style"?Go(s,L):A==="dangerouslySetInnerHTML"?dr(s,L):A==="children"?It(s,L):K(s,A,L,T)}switch(g){case"input":nn(s,u);break;case"textarea":Qo(s,u);break;case"select":var z=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!u.multiple;var H=u.value;H!=null?vn(s,!!u.multiple,H,!1):z!==!!u.multiple&&(u.defaultValue!=null?vn(s,!!u.multiple,u.defaultValue,!0):vn(s,!!u.multiple,u.multiple?[]:"",!1))}s[lo]=u}catch(Q){Pe(e,e.return,Q)}}break;case 6:if(Wt(t,e),Zt(e),o&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,u=e.memoizedProps;try{s.nodeValue=u}catch(Q){Pe(e,e.return,Q)}}break;case 3:if(Wt(t,e),Zt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(Q){Pe(e,e.return,Q)}break;case 4:Wt(t,e),Zt(e);break;case 13:Wt(t,e),Zt(e),s=e.child,s.flags&8192&&(u=s.memoizedState!==null,s.stateNode.isHidden=u,!u||s.alternate!==null&&s.alternate.memoizedState!==null||(Ma=Oe())),o&4&&Oc(e);break;case 22:if(A=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(T=ct)||A,Wt(t,e),ct=T):Wt(t,e),Zt(e),o&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!A&&(e.mode&1)!==0)for(V=e,A=e.child;A!==null;){for(L=V=A;V!==null;){switch(z=V,H=z.child,z.tag){case 0:case 11:case 14:case 15:wo(4,z,z.return);break;case 1:Nr(z,z.return);var Y=z.stateNode;if(typeof Y.componentWillUnmount=="function"){o=z,n=z.return;try{t=o,Y.props=t.memoizedProps,Y.state=t.memoizedState,Y.componentWillUnmount()}catch(Q){Pe(o,n,Q)}}break;case 5:Nr(z,z.return);break;case 22:if(z.memoizedState!==null){$c(L);continue}}H!==null?(H.return=z,V=H):$c(L)}A=A.sibling}e:for(A=null,L=e;;){if(L.tag===5){if(A===null){A=L;try{s=L.stateNode,T?(u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(g=L.stateNode,y=L.memoizedProps.style,d=y!=null&&y.hasOwnProperty("display")?y.display:null,g.style.display=Xo("display",d))}catch(Q){Pe(e,e.return,Q)}}}else if(L.tag===6){if(A===null)try{L.stateNode.nodeValue=T?"":L.memoizedProps}catch(Q){Pe(e,e.return,Q)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;A===L&&(A=null),L=L.return}A===L&&(A=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:Wt(t,e),Zt(e),o&4&&Oc(e);break;case 21:break;default:Wt(t,e),Zt(e)}}function Zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pc(n)){var o=n;break e}n=n.return}throw Error(l(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(It(s,""),o.flags&=-33);var u=Lc(e);La(e,u,s);break;case 3:case 4:var d=o.stateNode.containerInfo,g=Lc(e);Pa(e,g,d);break;default:throw Error(l(161))}}catch(y){Pe(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kp(e,t,n){V=e,Bc(e)}function Bc(e,t,n){for(var o=(e.mode&1)!==0;V!==null;){var s=V,u=s.child;if(s.tag===22&&o){var d=s.memoizedState!==null||Bi;if(!d){var g=s.alternate,y=g!==null&&g.memoizedState!==null||ct;g=Bi;var T=ct;if(Bi=d,(ct=y)&&!T)for(V=s;V!==null;)d=V,y=d.child,d.tag===22&&d.memoizedState!==null?Hc(s):y!==null?(y.return=d,V=y):Hc(s);for(;u!==null;)V=u,Bc(u),u=u.sibling;V=s,Bi=g,ct=T}Uc(e)}else(s.subtreeFlags&8772)!==0&&u!==null?(u.return=s,V=u):Uc(e)}}function Uc(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ct||Ui(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ct)if(n===null)o.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);o.componentDidUpdate(s,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&$u(t,u,o);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$u(t,d,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var A=T.memoizedState;if(A!==null){var L=A.dehydrated;L!==null&&Gr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ct||t.flags&512&&Aa(t)}catch(z){Pe(t,t.return,z)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function $c(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function Hc(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ui(4,t)}catch(y){Pe(t,n,y)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(y){Pe(t,s,y)}}var u=t.return;try{Aa(t)}catch(y){Pe(t,u,y)}break;case 5:var d=t.return;try{Aa(t)}catch(y){Pe(t,d,y)}}}catch(y){Pe(t,t.return,y)}if(t===e){V=null;break}var g=t.sibling;if(g!==null){g.return=t.return,V=g;break}V=t.return}}var Xp=Math.ceil,$i=$.ReactCurrentDispatcher,Da=$.ReactCurrentOwner,Pt=$.ReactCurrentBatchConfig,me=0,Je=null,$e=null,rt=0,Tt=0,Rr=zn(0),Qe=0,ko=null,ir=0,Hi=0,Oa=0,So=null,xt=null,Ma=0,zr=1/0,pn=null,Wi=!1,Ba=null,Mn=null,Vi=!1,Bn=null,qi=0,jo=0,Ua=null,Yi=-1,Qi=0;function pt(){return(me&6)!==0?Oe():Yi!==-1?Yi:Yi=Oe()}function Un(e){return(e.mode&1)===0?1:(me&2)!==0&&rt!==0?rt&-rt:zp.transition!==null?(Qi===0&&(Qi=Ll()),Qi):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Vl(e.type)),e)}function Vt(e,t,n,o){if(50<jo)throw jo=0,Ua=null,Error(l(185));qr(e,n,o),((me&2)===0||e!==Je)&&(e===Je&&((me&2)===0&&(Hi|=n),Qe===4&&$n(e,rt)),yt(e,o),n===1&&me===0&&(t.mode&1)===0&&(zr=Oe()+500,Si&&Pn()))}function yt(e,t){var n=e.callbackNode;zf(e,t);var o=ri(e,e===Je?rt:0);if(o===0)n!==null&&zl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&zl(n),t===1)e.tag===0?Rp(Vc.bind(null,e)):Fu(Vc.bind(null,e)),Ip(function(){(me&6)===0&&Pn()}),n=null;else{switch(Dl(o)){case 1:n=ws;break;case 4:n=Al;break;case 16:n=Zo;break;case 536870912:n=Pl;break;default:n=Zo}n=Zc(n,Wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wc(e,t){if(Yi=-1,Qi=0,(me&6)!==0)throw Error(l(327));var n=e.callbackNode;if(Ar()&&e.callbackNode!==n)return null;var o=ri(e,e===Je?rt:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Ki(e,o);else{t=o;var s=me;me|=2;var u=Yc();(Je!==e||rt!==t)&&(pn=null,zr=Oe()+500,ar(e,t));do try{Zp();break}catch(g){qc(e,g)}while(!0);ia(),$i.current=u,me=s,$e!==null?t=0:(Je=null,rt=0,t=Qe)}if(t!==0){if(t===2&&(s=ks(e),s!==0&&(o=s,t=$a(e,s))),t===1)throw n=ko,ar(e,0),$n(e,o),yt(e,Oe()),n;if(t===6)$n(e,o);else{if(s=e.current.alternate,(o&30)===0&&!Gp(s)&&(t=Ki(e,o),t===2&&(u=ks(e),u!==0&&(o=u,t=$a(e,u))),t===1))throw n=ko,ar(e,0),$n(e,o),yt(e,Oe()),n;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:lr(e,xt,pn);break;case 3:if($n(e,o),(o&130023424)===o&&(t=Ma+500-Oe(),10<t)){if(ri(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){pt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Qs(lr.bind(null,e,xt,pn),t);break}lr(e,xt,pn);break;case 4:if($n(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var d=31-Mt(o);u=1<<d,d=t[d],d>s&&(s=d),o&=~u}if(o=s,o=Oe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Xp(o/1960))-o,10<o){e.timeoutHandle=Qs(lr.bind(null,e,xt,pn),o);break}lr(e,xt,pn);break;case 5:lr(e,xt,pn);break;default:throw Error(l(329))}}}return yt(e,Oe()),e.callbackNode===n?Wc.bind(null,e):null}function $a(e,t){var n=So;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=Ki(e,t),e!==2&&(t=xt,xt=n,t!==null&&Ha(t)),e}function Ha(e){xt===null?xt=e:xt.push.apply(xt,e)}function Gp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var s=n[o],u=s.getSnapshot;s=s.value;try{if(!Bt(u(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t){for(t&=~Oa,t&=~Hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),o=1<<n;e[n]=-1,t&=~o}}function Vc(e){if((me&6)!==0)throw Error(l(327));Ar();var t=ri(e,0);if((t&1)===0)return yt(e,Oe()),null;var n=Ki(e,t);if(e.tag!==0&&n===2){var o=ks(e);o!==0&&(t=o,n=$a(e,o))}if(n===1)throw n=ko,ar(e,0),$n(e,t),yt(e,Oe()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lr(e,xt,pn),yt(e,Oe()),null}function Wa(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(zr=Oe()+500,Si&&Pn())}}function sr(e){Bn!==null&&Bn.tag===0&&(me&6)===0&&Ar();var t=me;me|=1;var n=Pt.transition,o=xe;try{if(Pt.transition=null,xe=1,e)return e()}finally{xe=o,Pt.transition=n,me=t,(me&6)===0&&Pn()}}function Va(){Tt=Rr.current,be(Rr)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tp(n)),$e!==null)for(n=$e.return;n!==null;){var o=n;switch(ea(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&wi();break;case 3:_r(),be(mt),be(at),pa();break;case 5:da(o);break;case 4:_r();break;case 13:be(_e);break;case 19:be(_e);break;case 10:sa(o.type._context);break;case 22:case 23:Va()}n=n.return}if(Je=e,$e=e=Hn(e.current,null),rt=Tt=t,Qe=0,ko=null,Oa=Hi=ir=0,xt=So=null,nr!==null){for(t=0;t<nr.length;t++)if(n=nr[t],o=n.interleaved,o!==null){n.interleaved=null;var s=o.next,u=n.pending;if(u!==null){var d=u.next;u.next=s,o.next=d}n.pending=o}nr=null}return e}function qc(e,t){do{var n=$e;try{if(ia(),Ri.current=Li,zi){for(var o=Fe.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}zi=!1}if(or=0,Ge=Ye=Fe=null,ho=!1,go=0,Da.current=null,n===null||n.return===null){Qe=1,ko=t,$e=null;break}e:{var u=e,d=n.return,g=n,y=t;if(t=rt,g.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var T=y,A=g,L=A.tag;if((A.mode&1)===0&&(L===0||L===11||L===15)){var z=A.alternate;z?(A.updateQueue=z.updateQueue,A.memoizedState=z.memoizedState,A.lanes=z.lanes):(A.updateQueue=null,A.memoizedState=null)}var H=xc(d);if(H!==null){H.flags&=-257,yc(H,d,g,u,t),H.mode&1&&gc(u,T,t),t=H,y=T;var Y=t.updateQueue;if(Y===null){var Q=new Set;Q.add(y),t.updateQueue=Q}else Y.add(y);break e}else{if((t&1)===0){gc(u,T,t),qa();break e}y=Error(l(426))}}else if(Ee&&g.mode&1){var Me=xc(d);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),yc(Me,d,g,u,t),ra(Fr(y,g));break e}}u=y=Fr(y,g),Qe!==4&&(Qe=2),So===null?So=[u]:So.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var b=mc(u,y,t);Uu(u,b);break e;case 1:g=y;var k=u.type,E=u.stateNode;if((u.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Mn===null||!Mn.has(E)))){u.flags|=65536,t&=-t,u.lanes|=t;var D=hc(u,g,t);Uu(u,D);break e}}u=u.return}while(u!==null)}Kc(n)}catch(X){t=X,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function Yc(){var e=$i.current;return $i.current=Li,e===null?Li:e}function qa(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),Je===null||(ir&268435455)===0&&(Hi&268435455)===0||$n(Je,rt)}function Ki(e,t){var n=me;me|=2;var o=Yc();(Je!==e||rt!==t)&&(pn=null,ar(e,t));do try{Jp();break}catch(s){qc(e,s)}while(!0);if(ia(),me=n,$i.current=o,$e!==null)throw Error(l(261));return Je=null,rt=0,Qe}function Jp(){for(;$e!==null;)Qc($e)}function Zp(){for(;$e!==null&&!bf();)Qc($e)}function Qc(e){var t=Jc(e.alternate,e,Tt);e.memoizedProps=e.pendingProps,t===null?Kc(e):$e=t,Da.current=null}function Kc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Vp(n,t,Tt),n!==null){$e=n;return}}else{if(n=qp(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,$e=null;return}}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Qe===0&&(Qe=5)}function lr(e,t,n){var o=xe,s=Pt.transition;try{Pt.transition=null,xe=1,em(e,t,n,o)}finally{Pt.transition=s,xe=o}return null}function em(e,t,n,o){do Ar();while(Bn!==null);if((me&6)!==0)throw Error(l(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(Af(e,u),e===Je&&($e=Je=null,rt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Vi||(Vi=!0,Zc(Zo,function(){return Ar(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=Pt.transition,Pt.transition=null;var d=xe;xe=1;var g=me;me|=4,Da.current=null,Qp(e,n),Mc(n,e),wp(qs),si=!!Vs,qs=Vs=null,e.current=n,Kp(n),Cf(),me=g,xe=d,Pt.transition=u}else e.current=n;if(Vi&&(Vi=!1,Bn=e,qi=s),u=e.pendingLanes,u===0&&(Mn=null),If(n.stateNode),yt(e,Oe()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],o(s.value,{componentStack:s.stack,digest:s.digest});if(Wi)throw Wi=!1,e=Ba,Ba=null,e;return(qi&1)!==0&&e.tag!==0&&Ar(),u=e.pendingLanes,(u&1)!==0?e===Ua?jo++:(jo=0,Ua=e):jo=0,Pn(),null}function Ar(){if(Bn!==null){var e=Dl(qi),t=Pt.transition,n=xe;try{if(Pt.transition=null,xe=16>e?16:e,Bn===null)var o=!1;else{if(e=Bn,Bn=null,qi=0,(me&6)!==0)throw Error(l(331));var s=me;for(me|=4,V=e.current;V!==null;){var u=V,d=u.child;if((V.flags&16)!==0){var g=u.deletions;if(g!==null){for(var y=0;y<g.length;y++){var T=g[y];for(V=T;V!==null;){var A=V;switch(A.tag){case 0:case 11:case 15:wo(8,A,u)}var L=A.child;if(L!==null)L.return=A,V=L;else for(;V!==null;){A=V;var z=A.sibling,H=A.return;if(Ac(A),A===T){V=null;break}if(z!==null){z.return=H,V=z;break}V=H}}}var Y=u.alternate;if(Y!==null){var Q=Y.child;if(Q!==null){Y.child=null;do{var Me=Q.sibling;Q.sibling=null,Q=Me}while(Q!==null)}}V=u}}if((u.subtreeFlags&2064)!==0&&d!==null)d.return=u,V=d;else e:for(;V!==null;){if(u=V,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:wo(9,u,u.return)}var b=u.sibling;if(b!==null){b.return=u.return,V=b;break e}V=u.return}}var k=e.current;for(V=k;V!==null;){d=V;var E=d.child;if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,V=E;else e:for(d=k;V!==null;){if(g=V,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:Ui(9,g)}}catch(X){Pe(g,g.return,X)}if(g===d){V=null;break e}var D=g.sibling;if(D!==null){D.return=g.return,V=D;break e}V=g.return}}if(me=s,Pn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(ei,e)}catch{}o=!0}return o}finally{xe=n,Pt.transition=t}}return!1}function Xc(e,t,n){t=Fr(n,t),t=mc(e,t,1),e=Dn(e,t,1),t=pt(),e!==null&&(qr(e,1,t),yt(e,t))}function Pe(e,t,n){if(e.tag===3)Xc(e,e,n);else for(;t!==null;){if(t.tag===3){Xc(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Mn===null||!Mn.has(o))){e=Fr(n,e),e=hc(t,e,1),t=Dn(t,e,1),e=pt(),t!==null&&(qr(t,1,e),yt(t,e));break}}t=t.return}}function tm(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(rt&n)===n&&(Qe===4||Qe===3&&(rt&130023424)===rt&&500>Oe()-Ma?ar(e,0):Oa|=n),yt(e,t)}function Gc(e,t){t===0&&((e.mode&1)===0?t=1:(t=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var n=pt();e=cn(e,t),e!==null&&(qr(e,t,n),yt(e,n))}function nm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gc(e,n)}function rm(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),Gc(e,n)}var Jc;Jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)gt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return gt=!1,Wp(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,Ee&&(t.flags&1048576)!==0&&Nu(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Mi(e,t),e=t.pendingProps;var s=Sr(t,at.current);Ir(t,n),s=ga(null,t,o,e,s,n);var u=xa();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(o)?(u=!0,ki(t)):u=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ua(t),s.updater=Di,t.stateNode=s,s._reactInternals=t,ja(t,o,e,n),t=Ta(null,t,o,!0,u,n)):(t.tag=0,Ee&&u&&Zs(t),ft(null,t,s,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Mi(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=im(o),e=$t(o,e),s){case 0:t=Ea(null,t,o,e,n);break e;case 1:t=bc(null,t,o,e,n);break e;case 11:t=vc(null,t,o,e,n);break e;case 14:t=wc(null,t,o,$t(o.type,e),n);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:$t(o,s),Ea(e,t,o,s,n);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:$t(o,s),bc(e,t,o,s,n);case 3:e:{if(Cc(t),e===null)throw Error(l(387));o=t.pendingProps,u=t.memoizedState,s=u.element,Bu(e,t),Fi(t,o,null,n);var d=t.memoizedState;if(o=d.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){s=Fr(Error(l(423)),t),t=Ec(e,t,o,n,s);break e}else if(o!==s){s=Fr(Error(l(424)),t),t=Ec(e,t,o,n,s);break e}else for(Et=Rn(t.stateNode.containerInfo.firstChild),Ct=t,Ee=!0,Ut=null,n=Ou(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),o===s){t=fn(e,t,n);break e}ft(e,t,o,n)}t=t.child}return t;case 5:return Hu(t),e===null&&na(t),o=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,d=s.children,Ys(o,s)?d=null:u!==null&&Ys(o,u)&&(t.flags|=32),jc(e,t),ft(e,t,d,n),t.child;case 6:return e===null&&na(t),null;case 13:return Tc(e,t,n);case 4:return ca(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Er(t,null,o,n):ft(e,t,o,n),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:$t(o,s),vc(e,t,o,s,n);case 7:return ft(e,t,t.pendingProps,n),t.child;case 8:return ft(e,t,t.pendingProps.children,n),t.child;case 12:return ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,u=t.memoizedProps,d=s.value,ke(Ti,o._currentValue),o._currentValue=d,u!==null)if(Bt(u.value,d)){if(u.children===s.children&&!mt.current){t=fn(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var g=u.dependencies;if(g!==null){d=u.child;for(var y=g.firstContext;y!==null;){if(y.context===o){if(u.tag===1){y=dn(-1,n&-n),y.tag=2;var T=u.updateQueue;if(T!==null){T=T.shared;var A=T.pending;A===null?y.next=y:(y.next=A.next,A.next=y),T.pending=y}}u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),aa(u.return,n,t),g.lanes|=n;break}y=y.next}}else if(u.tag===10)d=u.type===t.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(l(341));d.lanes|=n,g=d.alternate,g!==null&&(g.lanes|=n),aa(d,n,t),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===t){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}ft(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,Ir(t,n),s=zt(s),o=o(s),t.flags|=1,ft(e,t,o,n),t.child;case 14:return o=t.type,s=$t(o,t.pendingProps),s=$t(o.type,s),wc(e,t,o,s,n);case 15:return kc(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:$t(o,s),Mi(e,t),t.tag=1,ht(o)?(e=!0,ki(t)):e=!1,Ir(t,n),fc(t,o,s),ja(t,o,s,n),Ta(null,t,o,!0,e,n);case 19:return _c(e,t,n);case 22:return Sc(e,t,n)}throw Error(l(156,t.tag))};function Zc(e,t){return Rl(e,t)}function om(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,n,o){return new om(e,t,n,o)}function Ya(e){return e=e.prototype,!(!e||!e.isReactComponent)}function im(e){if(typeof e=="function")return Ya(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Re)return 11;if(e===Ce)return 14}return 2}function Hn(e,t){var n=e.alternate;return n===null?(n=Lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xi(e,t,n,o,s,u){var d=2;if(o=e,typeof e=="function")Ya(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ce:return ur(n.children,s,u,t);case Ie:d=8,s|=8;break;case Le:return e=Lt(12,n,t,s|2),e.elementType=Le,e.lanes=u,e;case ze:return e=Lt(13,n,t,s),e.elementType=ze,e.lanes=u,e;case Ke:return e=Lt(19,n,t,s),e.elementType=Ke,e.lanes=u,e;case ue:return Gi(n,s,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Be:d=10;break e;case we:d=9;break e;case Re:d=11;break e;case Ce:d=14;break e;case ne:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Lt(d,n,t,s),t.elementType=e,t.type=o,t.lanes=u,t}function ur(e,t,n,o){return e=Lt(7,e,o,t),e.lanes=n,e}function Gi(e,t,n,o){return e=Lt(22,e,o,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function Qa(e,t,n){return e=Lt(6,e,null,t),e.lanes=n,e}function Ka(e,t,n){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sm(e,t,n,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ss(0),this.expirationTimes=Ss(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Xa(e,t,n,o,s,u,d,g,y){return e=new sm(e,t,n,g,y),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Lt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ua(u),e}function am(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:te,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function ed(e){if(!e)return An;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(ht(n))return Iu(e,n,t)}return t}function td(e,t,n,o,s,u,d,g,y){return e=Xa(n,o,!0,e,s,u,d,g,y),e.context=ed(null),n=e.current,o=pt(),s=Un(n),u=dn(o,s),u.callback=t??null,Dn(n,u,s),e.current.lanes=s,qr(e,s,o),yt(e,o),e}function Ji(e,t,n,o){var s=t.current,u=pt(),d=Un(s);return n=ed(n),t.context===null?t.context=n:t.pendingContext=n,t=dn(u,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Dn(s,t,d),e!==null&&(Vt(e,s,d,u),_i(e,s,d)),d}function Zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ga(e,t){nd(e,t),(e=e.alternate)&&nd(e,t)}function lm(){return null}var rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ja(e){this._internalRoot=e}es.prototype.render=Ja.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Ji(e,t,null,null)},es.prototype.unmount=Ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){Ji(null,e,null,null)}),t[sn]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_n.length&&t!==0&&t<_n[n].priority;n++);_n.splice(n,0,e),n===0&&Hl(e)}};function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function um(e,t,n,o,s){if(s){if(typeof o=="function"){var u=o;o=function(){var T=Zi(d);u.call(T)}}var d=td(t,o,e,0,null,!1,!1,"",od);return e._reactRootContainer=d,e[sn]=d.current,so(e.nodeType===8?e.parentNode:e),sr(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var g=o;o=function(){var T=Zi(y);g.call(T)}}var y=Xa(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=y,e[sn]=y.current,so(e.nodeType===8?e.parentNode:e),sr(function(){Ji(t,y,n,o)}),y}function ns(e,t,n,o,s){var u=n._reactRootContainer;if(u){var d=u;if(typeof s=="function"){var g=s;s=function(){var y=Zi(d);g.call(y)}}Ji(t,d,e,s)}else d=um(n,t,e,s,o);return Zi(d)}Ol=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(js(t,n|1),yt(t,Oe()),(me&6)===0&&(zr=Oe()+500,Pn()))}break;case 13:sr(function(){var o=cn(e,1);if(o!==null){var s=pt();Vt(o,e,1,s)}}),Ga(e,1)}},bs=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=pt();Vt(t,e,134217728,n)}Ga(e,134217728)}},Ml=function(e){if(e.tag===13){var t=Un(e),n=cn(e,t);if(n!==null){var o=pt();Vt(n,e,t,o)}Ga(e,t)}},Bl=function(){return xe},Ul=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},$r=function(e,t,n){switch(t){case"input":if(nn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var s=vi(o);if(!s)throw Error(l(90));yn(o),nn(o,s)}}}break;case"textarea":Qo(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}},qe=Wa,st=sr;var cm={usingClientEntryPoint:!1,Events:[uo,wr,vi,ie,De,Wa]},bo={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dm={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fl(e),e===null?null:e.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rs.isDisabled&&rs.supportsFiber)try{ei=rs.inject(dm),Kt=rs}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm,vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Za(t))throw Error(l(200));return am(e,t,null,n)},vt.createRoot=function(e,t){if(!Za(e))throw Error(l(299));var n=!1,o="",s=rd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Xa(e,1,!1,null,null,n,!1,o,s),e[sn]=t.current,so(e.nodeType===8?e.parentNode:e),new Ja(t)},vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Fl(t),e=e===null?null:e.stateNode,e},vt.flushSync=function(e){return sr(e)},vt.hydrate=function(e,t,n){if(!ts(t))throw Error(l(200));return ns(null,e,t,!0,n)},vt.hydrateRoot=function(e,t,n){if(!Za(e))throw Error(l(405));var o=n!=null&&n.hydratedSources||null,s=!1,u="",d=rd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=td(t,null,e,1,n??null,s,!1,u,d),e[sn]=t.current,so(e),o)for(e=0;e<o.length;e++)n=o[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new es(t)},vt.render=function(e,t,n){if(!ts(t))throw Error(l(200));return ns(null,e,t,!1,n)},vt.unmountComponentAtNode=function(e){if(!ts(e))throw Error(l(40));return e._reactRootContainer?(sr(function(){ns(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1},vt.unstable_batchedUpdates=Wa,vt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!ts(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return ns(e,t,n,!1,o)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var fd;function zd(){if(fd)return nl.exports;fd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),nl.exports=ym(),nl.exports}var pd;function vm(){if(pd)return os;pd=1;var i=zd();return os.createRoot=i.createRoot,os.hydrateRoot=i.hydrateRoot,os}var wm=vm();function it({label:i,variant:a="neutral",size:l="md"}){const c=l==="sm"?{height:"24px",paddingLeft:"10px",paddingRight:"10px",fontSize:"12px",lineHeight:"18px",fontWeight:"500"}:{height:"28px",paddingLeft:"12px",paddingRight:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600"},f=a==="neutral"?{backgroundColor:"var(--card)",dotColor:"var(--muted-foreground)",textColor:"var(--foreground)"}:{backgroundColor:"var(--accent)",dotColor:"var(--primary)",textColor:"var(--accent-foreground)"};return r.jsxs("div",{style:{height:c.height,paddingLeft:c.paddingLeft,paddingRight:c.paddingRight,borderRadius:"999px",gap:"8px",backgroundColor:f.backgroundColor,border:"1px solid var(--border)",display:"inline-flex",alignItems:"center"},children:[r.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:f.dotColor}}),r.jsx("span",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:c.fontSize,lineHeight:c.lineHeight,fontWeight:c.fontWeight,color:f.textColor},children:i})]})}function We({label:i,variant:a="primary",size:l="md",onClick:c,disabled:f=!1,fullWidth:p=!1}){const m={sm:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}}[l],x={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"var(--card)",color:"var(--foreground)",border:"1px solid var(--border)"},ghost:{backgroundColor:"transparent",color:"var(--foreground)",border:"none"}}[a];return r.jsx("button",{onClick:c,disabled:f,style:{height:m.height,paddingLeft:m.paddingLeft,paddingRight:m.paddingRight,borderRadius:m.borderRadius,backgroundColor:f?"var(--muted)":x.backgroundColor,color:x.color,fontSize:m.fontSize,lineHeight:m.lineHeight,fontWeight:"600",border:f?"1px solid var(--border)":x.border,display:"inline-flex",alignItems:"center",justifyContent:"center",width:p?"100%":"auto",cursor:f?"not-allowed":"pointer",fontFamily:"Inter, system-ui, sans-serif",opacity:f?.65:1},children:i})}const km="/assets/Big%20Logo-Bdh1LtUa.svg",Sm="/assets/Logo%20Dark-BJGV7fxC.svg",jm="2026-03-10-1";function Ad({size:i=32,variant:a="dark",showText:l=!0,href:c="/"}){const f=a==="light"?Sm:km,p=a==="dark"?"#101828":"#FFFFFF",m=r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none"},children:[r.jsx("div",{style:{width:`${i}px`,height:`${i}px`,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("img",{src:`${f}?v=${jm}`,alt:"Vibe Station Logo",width:i,height:i,style:{width:`${i}px`,height:`${i}px`,objectFit:"contain",display:"block"}})}),l&&r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:i>=48?"24px":i>=32?"20px":"16px",lineHeight:i>=48?"32px":i>=32?"28px":"24px",fontWeight:"600",letterSpacing:"-0.02em",color:p},children:"VIBE STATION"})]});return c?r.jsx("a",{href:c,style:{textDecoration:"none",display:"inline-flex",cursor:"pointer"},children:m}):m}const bm="w-full mx-auto px-4 md:px-6 lg:px-8",Cm={wide:"max-w-[1200px]",standard:"max-w-[1080px]",narrow:"max-w-[860px]"};function Em(i,a){return[bm,Cm[i],a].filter(Boolean).join(" ")}function hs({children:i,width:a="wide",className:l}){return r.jsx("div",{className:Em(a,l),children:i})}function Tm({children:i,className:a}){return r.jsx(hs,{width:"wide",className:a,children:i})}function Im({children:i,className:a}){return r.jsx(hs,{width:"standard",className:a,children:i})}function _m({children:i,className:a}){return r.jsx(hs,{width:"narrow",className:a,children:i})}const ge=Object.assign(hs,{Wide:Tm,Standard:Im,Narrow:_m}),Pd="kz9z4f-2a.myshopify.com",Ld="daf156f4e4046c726902bca5c28e9cbe",Fm="2026-01",Dd="http://localhost:3001",Ro="/api/shopify",Nm="false".toLowerCase()==="true",Rm="X-Shopify-Storefront-Access-Token",dl="IN".toUpperCase(),Od="EN".toUpperCase(),zm=`https://${Pd}/api/${Fm}/graphql.json`,Md="shopify_cart_id";class Ne extends Error{constructor(a,l,c){super(a),this.code=l,this.field=c,this.name="StorefrontAPIError"}}const Bd=()=>Ld.length>0,Am=()=>Pd.length>0,Pm=()=>Dd.length>0&&Ro.length>0,Lm=()=>Ro.startsWith("http://")||Ro.startsWith("https://")?Ro:`${Dd.replace(/\/+$/,"")}/${Ro.replace(/^\/+/,"")}`,Ud=()=>Nm||!Bd()&&Pm(),Dm=()=>Ud()?!0:Am()&&Bd();async function Ve(i,a={}){if(!Dm())throw new Ne("Shopify is not configured","SHOPIFY_NOT_CONFIGURED");let l;if(Ud()?l=await fetch(Lm(),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({query:i,variables:a})}):l=await fetch(zm,{method:"POST",headers:{"Content-Type":"application/json",[Rm]:Ld},body:JSON.stringify({query:i,variables:a})}),!l.ok)throw l.status===429?new Ne("Rate limit exceeded","RATE_LIMIT"):new Ne(`HTTP ${l.status}`,"HTTP_ERROR");const{data:c,errors:f}=await l.json();if(f&&f.length>0)throw new Ne(f[0].message,"GRAPHQL_ERROR",f[0].field);if(!c)throw new Ne("Missing response data","EMPTY_DATA");return c}function gs(i){var c,f,p;const a=i.featuredImage;if(a!=null&&a.url)return{url:a.url,altText:a.altText||i.title||"Product image"};const l=(p=(f=(c=i.images)==null?void 0:c.edges)==null?void 0:f[0])==null?void 0:p.node;return l!=null&&l.url?{url:l.url,altText:l.altText||i.title||"Product image"}:null}const Om=`
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
`,$d=`@inContext(country: ${dl}, language: ${Od})`,Mm=`
  query ProductList(
    $first: Int = 24
    $after: String
    $sortKey: ProductSortKeys = BEST_SELLING
    $reverse: Boolean = false
    $query: String
  ) ${$d} {
    products(first: $first, after: $after, sortKey: $sortKey, reverse: $reverse, query: $query) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          ${Om}
        }
      }
    }
  }
`,Bm=`
  query ProductDetail($handle: String!) ${$d} {
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
`,Lr=`
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
`,Um=`
  mutation CartCreate($input: CartInput!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ${Lr}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,$m=`
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${Lr}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Hm=`
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${Lr}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Wm=`
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ${Lr}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Vm=`
  query Cart($id: ID!) {
    cart(id: $id) {
      ${Lr}
    }
  }
`,qm=`
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ${Lr}
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Hd=i=>{var l;const a=(l=i.field)!=null&&l.length?` for ${i.field.join(".")}`:"";switch(i.code){case"INVALID":return`Shopify rejected the cart update${a}. ${i.message}`;case"LESS_THAN":return"Quantity is below the minimum allowed.";case"GREATER_THAN":return"Quantity exceeds the maximum allowed.";case"INVALID_MERCHANDISE_LINE":return"This product variant is unavailable.";case"MISSING_DISCOUNT_CODE":case"DISCOUNT_NOT_FOUND":return"That discount code could not be found.";case"CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE":return"This cart does not meet the discount requirements.";case"RELEASE_PHASE_NOT_STARTED":return"This product is not available yet.";case"TOO_MANY_LINE_ITEMS":return"Your cart has reached the item limit.";case"INVALID_DELIVERY_GROUP":return"Delivery details for this cart are invalid. Please try again.";case"BLANK":return`A required cart value is missing${a}.`;case"NOT_ENOUGH_IN_STOCK":return"There is not enough stock available for that quantity.";default:return i.message}},xs=(i,a)=>{const l=i[a];if(l.userErrors.length>0){const c=l.userErrors[0];throw new Ne(Hd(c),c.code||"CART_USER_ERROR",c.field)}if(!l.cart)throw new Ne("Cart was not returned by Shopify","MISSING_CART");return l.cart};async function Ym(i){return(await Ve(Bm,{handle:i})).product}async function Uo(i={}){const a=typeof i=="number"?{first:i}:i;return(await Ve(Mm,{first:a.first??24,after:a.after??null,sortKey:a.sortKey??"BEST_SELLING",reverse:a.reverse??!1,query:a.query})).products}async function Qm(i=[]){const a=await Ve(Um,{input:{lines:i,buyerIdentity:{countryCode:dl}},country:dl,language:Od});return xs(a,"cartCreate")}async function Km(i,a){const l=await Ve($m,{cartId:i,lines:a});return xs(l,"cartLinesAdd")}async function Xm(i,a){const l=await Ve(Hm,{cartId:i,lines:a});return xs(l,"cartLinesUpdate")}async function Gm(i,a){const l=await Ve(Wm,{cartId:i,lineIds:a});return xs(l,"cartLinesRemove")}async function Jm(i){return(await Ve(Vm,{id:i})).cart}async function Zm(i,a){const c=(await Ve(qm,{cartId:i,buyerIdentity:a})).cartBuyerIdentityUpdate;if(c.userErrors.length>0){const f=c.userErrors[0];throw new Ne(Hd(f),f.code||"CART_USER_ERROR",f.field)}if(!c.cart)throw new Ne("Cart was not returned by Shopify","MISSING_CART");return c.cart}const eh=()=>typeof window>"u"?null:window.localStorage.getItem(Md),th=i=>{typeof window>"u"||window.localStorage.setItem(Md,i)},wl="customer_token",kl="token_expires_at",Wd=`
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
`,nh=`
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
`,ys=()=>typeof window<"u",Vd=i=>{if(!i)return!0;const a=Date.parse(i);return Number.isNaN(a)?!0:a<=Date.now()},Sl=i=>{ys()&&(window.localStorage.setItem(wl,i.accessToken),window.localStorage.setItem(kl,i.expiresAt))},qd=()=>ys()?window.localStorage.getItem(wl):null,Yd=()=>ys()?window.localStorage.getItem(kl):null,rh=i=>{var l;const a=(l=i.field)!=null&&l.length?` for ${i.field.join(".")}`:"";switch(i.code){case"ALREADY_ENABLED":return"An account with this email already exists.";case"BLANK":return`A required value is missing${a}.`;case"TAKEN":return`A customer already exists${a}.`;case"INVALID":return`Shopify rejected the value${a}. ${i.message}`;case"TOO_LONG":return`The value is too long${a}.`;case"UNIDENTIFIED_CUSTOMER":return"The email or password is incorrect.";case"TOO_MANY_FAILED_ATTEMPTS":return"Too many failed attempts. Please wait and try again.";case"CUSTOMER_DISABLED":return"This customer account is disabled.";case"BAD_DOMAIN":return`The email address domain is invalid${a}.`;case"TOKEN_INVALID":return"The customer session is invalid. Please sign in again.";case"CUSTOMER_RESET_TOKEN_INVALID":case"TOKEN_EXPIRED":return"This link has expired. Please request a new one.";case"PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE":return"Password cannot start or end with whitespace.";case"PHONE_NUMBER_ALREADY_USED":return"That phone number is already in use.";case"CUSTOMER_ADDRESS_NOT_FOUND":return"The selected address could not be found.";default:return i.message}},oh=(i,a,l)=>{if(i instanceof Ne){const c=i.code==="RATE_LIMIT"?"Too many requests. Please try again in a moment.":i.code==="HTTP_ERROR"?"Shopify could not be reached. Please try again.":i.code==="GRAPHQL_ERROR"?"Shopify returned an unexpected error. Please try again.":i.message||l;return{type:i.code==="HTTP_ERROR"||i.code==="RATE_LIMIT"?"network":"api",message:c,code:i.code||a,field:i.field}}return i instanceof TypeError?{type:"network",message:"Network request failed while contacting Shopify.",code:a}:{type:"unknown",message:l,code:a}},fl=i=>({ok:!1,data:null,error:i}),jl=i=>({ok:!0,data:i,error:null}),gn=(i,a)=>{if(i.length===0)return;const l=i[0];throw new Ne(rh(l),l.code||a,l.field)},ih=()=>{const i=qd(),a=Yd();return!i||!a?(pl(),fl({type:"session",message:"No active customer session was found.",code:"CUSTOMER_SESSION_MISSING"})):Vd(a)?(pl(),fl({type:"session",message:"The customer session has expired. Please sign in again.",code:"CUSTOMER_SESSION_EXPIRED"})):jl(i)},Ot=async(i,a,l)=>{try{return jl(await i())}catch(c){return fl(oh(c,a,l))}};function pl(){ys()&&(window.localStorage.removeItem(wl),window.localStorage.removeItem(kl))}function Po(){const i=qd(),a=Yd();return{accessToken:i,expiresAt:a,isExpired:Vd(a)}}function is(){pl()}const sh=`
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
`,ah=`
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
`,lh=`
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
`,uh=`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,ch=`
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
`,dh=`
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ${Wd}
    }
  }
`,fh=`
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
            ${nh}
          }
        }
      }
    }
  }
`,ph=`
  mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        ${Wd}
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`,mh=`
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
`,hh=`
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
`,gh=`
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
`,xh=`
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
`;async function yh(i){return Ot(async()=>{const a=await Ve(sh,{input:i});if(gn(a.customerCreate.customerUserErrors,"CUSTOMER_CREATE_ERROR"),!a.customerCreate.customer)throw new Ne("Customer was not returned by Shopify","MISSING_CUSTOMER");return a.customerCreate.customer},"CUSTOMER_CREATE_ERROR","Unable to create the customer account.")}async function md(i,a){return Ot(async()=>{const l=await Ve(ah,{input:{email:i,password:a}});if(gn(l.customerAccessTokenCreate.customerUserErrors,"CUSTOMER_LOGIN_ERROR"),!l.customerAccessTokenCreate.customerAccessToken)throw new Ne("Customer access token was not returned by Shopify","MISSING_CUSTOMER_TOKEN");return Sl(l.customerAccessTokenCreate.customerAccessToken),l.customerAccessTokenCreate.customerAccessToken},"CUSTOMER_LOGIN_ERROR","Unable to sign in the customer.")}async function hd(i){const a=i?jl(i):ih();return a.ok?Ot(async()=>{const l=await Ve(lh,{customerAccessToken:a.data});if(l.customerAccessTokenRenew.userErrors.length>0){const c=l.customerAccessTokenRenew.userErrors[0];throw new Ne(c.message,"CUSTOMER_TOKEN_RENEW_ERROR",c.field)}if(!l.customerAccessTokenRenew.customerAccessToken)throw new Ne("Customer access token renewal did not return a token","MISSING_CUSTOMER_TOKEN");return Sl(l.customerAccessTokenRenew.customerAccessToken),l.customerAccessTokenRenew.customerAccessToken},"CUSTOMER_TOKEN_RENEW_ERROR","Unable to renew the customer session."):a}async function vh(i){return Ot(async()=>{const a=await Ve(uh,{email:i});return gn(a.customerRecover.customerUserErrors,"CUSTOMER_RECOVER_ERROR"),{email:i,submitted:!0}},"CUSTOMER_RECOVER_ERROR","Unable to request a password reset.")}async function wh(i,a){return Ot(async()=>{const l=await Ve(ch,{resetUrl:i,password:a});if(gn(l.customerResetByUrl.customerUserErrors,"CUSTOMER_RESET_ERROR"),!l.customerResetByUrl.customerAccessToken)throw new Ne("Customer password reset did not return a new access token","MISSING_CUSTOMER_TOKEN");return Sl(l.customerResetByUrl.customerAccessToken),l.customerResetByUrl.customerAccessToken},"CUSTOMER_RESET_ERROR","Unable to reset the customer password.")}async function zo(i){return Ot(async()=>(await Ve(dh,{customerAccessToken:i})).customer,"CUSTOMER_FETCH_ERROR","Unable to load customer data.")}async function kh(i,a=10,l){return Ot(async()=>{var f;return((f=(await Ve(fh,{customerAccessToken:i,first:a,after:l||null})).customer)==null?void 0:f.orders)||null},"CUSTOMER_ORDERS_FETCH_ERROR","Unable to load customer orders.")}async function Sh(i,a){return Ot(async()=>{const l=await Ve(ph,{customerAccessToken:i,customer:a});if(gn(l.customerUpdate.customerUserErrors,"CUSTOMER_UPDATE_ERROR"),!l.customerUpdate.customer)throw new Ne("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerUpdate.customer},"CUSTOMER_UPDATE_ERROR","Unable to update the customer profile.")}async function jh(i,a){return Ot(async()=>{const l=await Ve(mh,{customerAccessToken:i,address:a});if(gn(l.customerAddressCreate.customerUserErrors,"CUSTOMER_ADDRESS_CREATE_ERROR"),!l.customerAddressCreate.customerAddress)throw new Ne("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressCreate.customerAddress},"CUSTOMER_ADDRESS_CREATE_ERROR","Unable to create the customer address.")}async function bh(i,a,l){return Ot(async()=>{const c=await Ve(hh,{customerAccessToken:i,id:a,address:l});if(gn(c.customerAddressUpdate.customerUserErrors,"CUSTOMER_ADDRESS_UPDATE_ERROR"),!c.customerAddressUpdate.customerAddress)throw new Ne("Customer address was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return c.customerAddressUpdate.customerAddress},"CUSTOMER_ADDRESS_UPDATE_ERROR","Unable to update the customer address.")}async function Ch(i,a){return Ot(async()=>{const l=await Ve(gh,{customerAccessToken:i,id:a});if(gn(l.customerAddressDelete.customerUserErrors,"CUSTOMER_ADDRESS_DELETE_ERROR"),!l.customerAddressDelete.deletedCustomerAddressId)throw new Ne("Deleted customer address id was not returned by Shopify","MISSING_CUSTOMER_ADDRESS");return l.customerAddressDelete.deletedCustomerAddressId},"CUSTOMER_ADDRESS_DELETE_ERROR","Unable to delete the customer address.")}async function Eh(i,a){return Ot(async()=>{const l=await Ve(xh,{customerAccessToken:i,addressId:a});if(gn(l.customerDefaultAddressUpdate.customerUserErrors,"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR"),!l.customerDefaultAddressUpdate.customer)throw new Ne("Customer was not returned by Shopify","MISSING_CUSTOMER");return l.customerDefaultAddressUpdate.customer.defaultAddress},"CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR","Unable to update the default address.")}const Th=(i,a)=>{const l=Number(i);return!Number.isFinite(l)||!a?i||"":new Intl.NumberFormat("en-US",{style:"currency",currency:a}).format(l)},Eo=(i,a)=>({id:i.id,email:i.email,firstName:i.firstName||"",lastName:i.lastName||"",phone:i.phone||void 0,acceptsMarketing:!1,createdAt:a||new Date().toISOString()}),Ih=i=>{var l;const a=((l=i.defaultAddress)==null?void 0:l.id)||null;return i.addresses.edges.map(c=>c.node).filter(c=>!!(c!=null&&c.id)).map(c=>({id:c.id,firstName:"",lastName:"",company:void 0,address1:c.address1||"",address2:c.address2||void 0,city:c.city||"",province:c.province||"",zip:c.zip||"",country:c.country||"",phone:void 0,isDefault:c.id===a}))},_h=i=>i?i.edges.map(a=>{var l,c;return{id:a.node.id,orderNumber:String(a.node.orderNumber),createdAt:a.node.processedAt,totalPrice:Th((l=a.node.totalPriceV2)==null?void 0:l.amount,(c=a.node.totalPriceV2)==null?void 0:c.currencyCode),fulfillmentStatus:a.node.fulfillmentStatus==="FULFILLED"||a.node.fulfillmentStatus==="UNFULFILLED"||a.node.fulfillmentStatus==="PARTIALLY_FULFILLED"||a.node.fulfillmentStatus==="CANCELLED"?a.node.fulfillmentStatus:"UNFULFILLED",lineItems:a.node.lineItems.edges.map((f,p)=>({id:`${a.node.id}-${p}`,title:f.node.title,quantity:f.node.quantity,price:""}))}}):[],gd=i=>({firstName:i.firstName||void 0,lastName:i.lastName||void 0,company:i.company||void 0,address1:i.address1||void 0,address2:i.address2||void 0,city:i.city||void 0,province:i.province||void 0,zip:i.zip||void 0,country:i.country||void 0,phone:i.phone||void 0});function Vn(i,a){const l=new Error(i);return l.code=a,l}function Fh(){const[i,a]=N.useState(null),[l,c]=N.useState(null),[f,p]=N.useState(!0),m=async()=>{const I=Po();if(!I.accessToken){a(null),c(null);return}const F=await hd(I.accessToken);if(!F.ok)throw is(),a(null),c(null),new Error(F.error.message||"Customer session expired.");const R=await zo(F.data.accessToken);if(!R.ok||!R.data)throw new Error(R.error.message||"Unable to load customer data.");a(Eo(R.data,i==null?void 0:i.createdAt)),c(F.data.accessToken)};return N.useEffect(()=>{let I=!1;return(async()=>{var R;try{const P=Po();if(!P.accessToken){I||(a(null),c(null),p(!1));return}const se=await hd(P.accessToken);if(!se.ok){I||(is(),a(null),c(null));return}const fe=await zo(se.data.accessToken);if(!fe.ok||!fe.data)throw new Error(((R=fe.error)==null?void 0:R.message)||"Unable to load customer data.");I||(a(Eo(fe.data)),c(se.data.accessToken))}catch{I||(is(),a(null),c(null))}finally{I||p(!1)}})(),()=>{I=!0}},[]),{customer:i,accessToken:l,isAuthenticated:!!(i&&l),isLoading:f,login:async(I,F)=>{p(!0);try{const R=await md(I,F);if(!R.ok)throw Vn(R.error.message||"Unable to sign in.",R.error.code);const P=await zo(R.data.accessToken);if(!P.ok||!P.data)throw Vn(P.error.message||"Unable to load customer data.",P.error.code);a(Eo(P.data)),c(R.data.accessToken)}finally{p(!1)}},register:async I=>{p(!0);try{const F=await yh(I);if(!F.ok)throw Vn(F.error.message||"Unable to create the account.",F.error.code);const R=await md(I.email,I.password);if(!R.ok)throw Vn(R.error.message||"Account created but sign-in failed.",R.error.code);const P=await zo(R.data.accessToken);if(!P.ok||!P.data)throw Vn(P.error.message||"Unable to load customer data.",P.error.code);a(Eo(P.data,new Date().toISOString())),c(R.data.accessToken)}finally{p(!1)}},logout:()=>{is(),a(null),c(null)},updateProfile:async I=>{const F=l||Po().accessToken;if(!F)throw new Error("No active customer session was found.");p(!0);try{const R=await Sh(F,I);if(!R.ok)throw Vn(R.error.message||"Unable to update the profile.",R.error.code);a(P=>Eo(R.data,P==null?void 0:P.createdAt))}finally{p(!1)}},refreshCustomerData:m,requestPasswordReset:async I=>{const F=await vh(I);if(!F.ok){if(F.error.code==="UNIDENTIFIED_CUSTOMER")return;throw Vn(F.error.message||"Unable to send the password reset email.",F.error.code)}},resetPassword:async(I,F)=>{const R=await wh(I,F);if(!R.ok)throw Vn(R.error.message||"Unable to reset the password.",R.error.code)}}}function To(i,a){const l=new Error(i);return l.code=a,l}function Nh(){const{accessToken:i,isAuthenticated:a}=xn(),[l,c]=N.useState([]),[f,p]=N.useState(!0),[m,x]=N.useState(!1),[S,C]=N.useState(null),j=i||Po().accessToken,h=async()=>{var I,F;if(!j||!a){c([]),p(!1);return}p(!0),C(null);try{const R=await zo(j);if(!R.ok||!R.data)throw To(((I=R.error)==null?void 0:I.message)||"Unable to load addresses.",(F=R.error)==null?void 0:F.code);c(Ih(R.data))}catch(R){C(R instanceof Error?R.message:"Unable to load addresses.")}finally{p(!1)}};N.useEffect(()=>{h()},[j,a]);const w=async I=>{x(!0),C(null);try{await I(),await h()}catch(F){const R=F instanceof Error?F.message:"Unable to update addresses.";throw C(R),F}finally{x(!1)}};return{addresses:l,isLoading:f,isSaving:m,error:S,refresh:h,createAddress:async I=>{if(!j)throw new Error("No active customer session was found.");await w(async()=>{const F=await jh(j,gd(I));if(!F.ok)throw To(F.error.message||"Unable to create address.",F.error.code)})},editAddress:async I=>{if(!j)throw new Error("No active customer session was found.");await w(async()=>{const F=await bh(j,I.id,gd(I));if(!F.ok)throw To(F.error.message||"Unable to update address.",F.error.code)})},removeAddress:async I=>{if(!j)throw new Error("No active customer session was found.");await w(async()=>{const F=await Ch(j,I);if(!F.ok)throw To(F.error.message||"Unable to delete address.",F.error.code)})},makeDefaultAddress:async I=>{if(!j)throw new Error("No active customer session was found.");await w(async()=>{const F=await Eh(j,I);if(!F.ok)throw To(F.error.message||"Unable to set the default address.",F.error.code)})}}}function Rh(){const{accessToken:i,isAuthenticated:a}=xn(),[l,c]=N.useState([]),[f,p]=N.useState(null),[m,x]=N.useState(!0),[S,C]=N.useState(!1),[j,h]=N.useState(null),w=i||Po().accessToken,I=async(F,R=!1)=>{if(!w||!a){c([]),p(null),x(!1);return}R?C(!0):x(!0),h(null);try{const P=await kh(w,10,F);if(!P.ok)throw new Error(P.error.message||"Unable to load orders.");const se=_h(P.data);c(fe=>R?[...fe,...se]:se),p(P.data?{hasNextPage:P.data.pageInfo.hasNextPage,hasPreviousPage:P.data.pageInfo.hasPreviousPage,startCursor:P.data.pageInfo.startCursor,endCursor:P.data.pageInfo.endCursor}:null)}catch(P){h(P instanceof Error?P.message:"Unable to load orders.")}finally{x(!1),C(!1)}};return N.useEffect(()=>{I()},[w,a]),{orders:l,pageInfo:f,hasMore:!!(f!=null&&f.hasNextPage&&(f!=null&&f.endCursor)),isLoading:m,isLoadingMore:S,error:j,refresh:async()=>I(),loadMore:async()=>{f!=null&&f.endCursor&&await I(f.endCursor,!0)}}}const Qd=N.createContext(null);function xn(){const i=N.useContext(Qd);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i}function zh({children:i}){const a=Fh(),l={customer:a.customer,accessToken:a.accessToken,isAuthenticated:a.isAuthenticated,isLoading:a.isLoading,login:async(c,f)=>{await a.login(c,f)},register:async c=>{await a.register(c)},logout:()=>{a.logout()},updateProfile:async c=>{await a.updateProfile(c)},refreshCustomerData:async()=>{await a.refreshCustomerData()},requestPasswordReset:async c=>{await a.requestPasswordReset(c)},resetPassword:async(c,f)=>{await a.resetPassword(c,f)}};return r.jsx(Qd.Provider,{value:l,children:i})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ph=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,c)=>c?c.toUpperCase():l.toLowerCase()),xd=i=>{const a=Ph(i);return a.charAt(0).toUpperCase()+a.slice(1)},Kd=(...i)=>i.filter((a,l,c)=>!!a&&a.trim()!==""&&c.indexOf(a)===l).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Lh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=N.forwardRef(({color:i="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:f="",children:p,iconNode:m,...x},S)=>N.createElement("svg",{ref:S,...Lh,width:a,height:a,stroke:i,strokeWidth:c?Number(l)*24/Number(a):l,className:Kd("lucide",f),...x},[...m.map(([C,j])=>N.createElement(C,j)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=(i,a)=>{const l=N.forwardRef(({className:c,...f},p)=>N.createElement(Dh,{ref:p,iconNode:a,className:Kd(`lucide-${Ah(xd(i))}`,`lucide-${i}`,c),...f}));return l.displayName=xd(i),l};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Xd=ve("arrow-left",Oh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Gd=ve("check",Mh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Uh=ve("chevron-down",Bh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Hh=ve("chevron-right",$h);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Vh=ve("circle-alert",Wh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Yh=ve("circle-check-big",qh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Kh=ve("circle-check",Qh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Gh=ve("circle-x",Xh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Zh=ve("ellipsis-vertical",Jh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],tg=ve("eye-off",eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],rg=ve("eye",ng);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Jd=ve("info",og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],sg=ve("loader-circle",ig);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],lg=ve("log-out",ag);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],cg=ve("mail",ug);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],bl=ve("map-pin",dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],pg=ve("menu",fg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Zd=ve("moon",mg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Wo=ve("package",hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],xg=ve("pen",gg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],vg=ve("phone",yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],yd=ve("plus",wg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Sg=ve("search",kg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],bg=ve("shield",jg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ef=ve("sun",Cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Tg=ve("triangle-alert",Eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],tf=ve("user",Ig);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cl=ve("x",_g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ng=ve("zap",Fg);function Te({label:i,error:a,helperText:l,showPasswordToggle:c,type:f="text",disabled:p,...m}){const[x,S]=N.useState(!1),[C,j]=N.useState(!1),h=c&&x?"text":f;return r.jsxs("div",{style:{width:"100%"},children:[r.jsx("label",{htmlFor:m.id,style:{display:"block",fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"#344054",marginBottom:"6px",fontFamily:"Inter, system-ui, sans-serif"},children:i}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx("input",{...m,type:h,disabled:p,onFocus:w=>{var I;j(!0),(I=m.onFocus)==null||I.call(m,w)},onBlur:w=>{var I;j(!1),(I=m.onBlur)==null||I.call(m,w)},style:{width:"100%",height:"44px",padding:"10px 14px",paddingRight:c?"44px":"14px",fontSize:"16px",lineHeight:"24px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:p?"#98A2B3":"#101828",backgroundColor:p?"#F9FAFB":"#FFFFFF",border:`1px solid ${a?"#F04438":C?"#4F46E5":"#D0D5DD"}`,borderRadius:"10px",outline:"none",boxShadow:C&&!a?"0 0 0 2px rgba(79, 70, 229, 0.06)":"none",cursor:p?"not-allowed":"text",transition:"all 0.15s ease"}}),c&&r.jsx("button",{type:"button",onClick:()=>S(!x),disabled:p,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:"4px",cursor:p?"not-allowed":"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",opacity:p?.4:1},"aria-label":x?"Hide password":"Show password",children:x?r.jsx(tg,{size:20}):r.jsx(rg,{size:20})})]}),a&&r.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif"},children:a}),!a&&l&&r.jsx("div",{style:{marginTop:"6px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:l})]})}function dt({variant:i="primary",size:a="md",isLoading:l=!1,disabled:c,children:f,...p}){const m=c||l,x={sm:{height:"36px",padding:"0 12px",borderRadius:"10px",gap:"8px",fontSize:"14px",lineHeight:"20px"},md:{height:"44px",padding:"0 16px",borderRadius:"12px",gap:"10px",fontSize:"14px",lineHeight:"20px"},lg:{height:"52px",padding:"0 20px",borderRadius:"14px",gap:"12px",fontSize:"18px",lineHeight:"28px"}},S={primary:{backgroundColor:"#4338CA",color:"#FFFFFF",border:"none"},secondary:{backgroundColor:"#FFFFFF",color:"#101828",border:"1px solid #D0D5DD"},ghost:{backgroundColor:"transparent",color:"#101828",border:"none"},destructive:{backgroundColor:"#F04438",color:"#FFFFFF",border:"none"}},C=x[a],j=S[i];return r.jsxs("button",{...p,disabled:m,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, system-ui, sans-serif",fontWeight:"600",cursor:m?"not-allowed":"pointer",opacity:m?.4:1,transition:"all 0.15s ease",position:"relative",whiteSpace:"nowrap",...C,...j,...p.style},onMouseEnter:h=>{!m&&i!=="ghost"&&(h.currentTarget.style.filter="brightness(0.94)")},onMouseLeave:h=>{h.currentTarget.style.filter="none"},onMouseDown:h=>{m||(h.currentTarget.style.filter="brightness(0.88)")},onMouseUp:h=>{m||(h.currentTarget.style.filter="brightness(0.94)")},children:[l&&r.jsx(sg,{size:a==="sm"?14:a==="lg"?18:16,style:{animation:"spin 1s linear infinite"}}),f,r.jsx("style",{children:`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `})]})}function qt({type:i,children:a}){const c={success:{backgroundColor:"#ECFDF3",borderColor:"#12B76A",textColor:"#039855",icon:Yh},error:{backgroundColor:"#FEF3F2",borderColor:"#F04438",textColor:"#D92D20",icon:Gh},warning:{backgroundColor:"#FFFAEB",borderColor:"#F79009",textColor:"#DC6803",icon:Vh},info:{backgroundColor:"rgba(79, 70, 229, 0.06)",borderColor:"#4F46E5",textColor:"#4338CA",icon:Jd}}[i],f=c.icon;return r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"12px 16px",backgroundColor:c.backgroundColor,border:`1px solid ${c.borderColor}`,borderRadius:"10px"},children:[r.jsx(f,{size:20,style:{color:c.textColor,flexShrink:0,marginTop:"2px"}}),r.jsx("div",{style:{flex:1,fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:c.textColor,fontFamily:"Inter, system-ui, sans-serif"},children:a})]})}function Dt(i){typeof window>"u"||(window.location.href=i)}function Rg(){const{login:i}=xn(),[a,l]=N.useState(""),[c,f]=N.useState(""),[p,m]=N.useState({}),[x,S]=N.useState(!1),C=()=>{const h={};return a?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||(h.email="Please enter a valid email address"):h.email="Email is required",c||(h.password="Password is required"),m(h),Object.keys(h).length===0},j=async h=>{if(h.preventDefault(),!!C()){S(!0),m({});try{await i(a,c),Dt("/account")}catch(w){m({general:w instanceof Error?w.message:"Invalid email or password"})}finally{S(!1)}}};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Welcome back"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Sign in to your account to continue"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[p.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(qt,{type:"error",children:p.general})}),r.jsxs("form",{onSubmit:j,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsx(Te,{id:"email",label:"Email",type:"email",value:a,onChange:h=>l(h.target.value),error:p.email,placeholder:"you@example.com",autoComplete:"email",disabled:x}),r.jsx(Te,{id:"password",label:"Password",type:"password",value:c,onChange:h=>f(h.target.value),error:p.password,placeholder:"Enter your password",autoComplete:"current-password",showPasswordToggle:!0,disabled:x})]}),r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx("button",{type:"button",onClick:()=>Dt("/account/password-reset"),disabled:x,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:x?"not-allowed":"pointer",textDecoration:"none",opacity:x?.4:1},onMouseEnter:h=>!x&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Forgot password?"})}),r.jsx(dt,{type:"submit",variant:"primary",size:"lg",isLoading:x,style:{width:"100%",marginBottom:"16px"},children:"Sign in"}),r.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Don't have an account?"," ",r.jsx("button",{type:"button",onClick:()=>Dt("/account/register"),disabled:x,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:x?"not-allowed":"pointer",textDecoration:"none",opacity:x?.4:1},onMouseEnter:h=>!x&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Create account"})]})]})]}),r.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"rgba(79, 70, 229, 0.06)",border:"1px solid #4F46E5",borderRadius:"12px",textAlign:"center"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Demo: Use any email and password to sign in"})})]})})}function zg(){const{register:i}=xn(),[a,l]=N.useState({firstName:"",lastName:"",email:"",phone:"",password:""}),[c,f]=N.useState({}),[p,m]=N.useState(!1),x=()=>{const j={};return a.firstName.trim()||(j.firstName="First name is required"),a.lastName.trim()||(j.lastName="Last name is required"),a.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)||(j.email="Please enter a valid email address"):j.email="Email is required",a.phone&&!/^[\d\s\-\+\(\)]+$/.test(a.phone)&&(j.phone="Please enter a valid phone number"),a.password?a.password.length<8&&(j.password="Password must be at least 8 characters"):j.password="Password is required",f(j),Object.keys(j).length===0},S=async j=>{if(j.preventDefault(),!!x()){m(!0),f({});try{await i(a),Dt("/account")}catch(h){f({general:h instanceof Error?h.message:"Registration failed"})}finally{m(!1)}}},C=(j,h)=>{l(w=>({...w,[j]:h})),c[j]&&f(w=>({...w,[j]:""}))};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"540px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Create your account"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Join us to start shopping and manage your orders"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[c.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(qt,{type:"error",children:c.general})}),r.jsxs("form",{onSubmit:S,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Te,{id:"firstName",label:"First name",type:"text",value:a.firstName,onChange:j=>C("firstName",j.target.value),error:c.firstName,placeholder:"Sarah",autoComplete:"given-name",disabled:p}),r.jsx(Te,{id:"lastName",label:"Last name",type:"text",value:a.lastName,onChange:j=>C("lastName",j.target.value),error:c.lastName,placeholder:"Chen",autoComplete:"family-name",disabled:p})]}),r.jsx(Te,{id:"email",label:"Email",type:"email",value:a.email,onChange:j=>C("email",j.target.value),error:c.email,placeholder:"you@example.com",autoComplete:"email",disabled:p}),r.jsx(Te,{id:"phone",label:"Phone (optional)",type:"tel",value:a.phone,onChange:j=>C("phone",j.target.value),error:c.phone,placeholder:"+1 (555) 123-4567",autoComplete:"tel",disabled:p}),r.jsx(Te,{id:"password",label:"Password",type:"password",value:a.password,onChange:j=>C("password",j.target.value),error:c.password,helperText:c.password?void 0:"Must be at least 8 characters",placeholder:"Create a password",autoComplete:"new-password",showPasswordToggle:!0,disabled:p})]}),r.jsx(dt,{type:"submit",variant:"primary",size:"lg",isLoading:p,style:{width:"100%",marginBottom:"16px"},children:"Create account"}),r.jsxs("div",{style:{textAlign:"center",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Already have an account?"," ",r.jsx("button",{type:"button",onClick:()=>Dt("/account/login"),disabled:p,style:{background:"none",border:"none",padding:"0",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:p?"not-allowed":"pointer",textDecoration:"none",opacity:p?.4:1},onMouseEnter:j=>!p&&(j.currentTarget.style.textDecoration="underline"),onMouseLeave:j=>j.currentTarget.style.textDecoration="none",children:"Sign in"})]})]})]})]})})}function Ag(){const{requestPasswordReset:i}=xn(),[a,l]=N.useState(""),[c,f]=N.useState(""),[p,m]=N.useState(!1),[x,S]=N.useState(!1),C=h=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h),j=async h=>{if(h.preventDefault(),!a){f("Email is required");return}if(!C(a)){f("Please enter a valid email address");return}m(!0),f("");try{await i(a),S(!0)}catch(w){f(w instanceof Error?w.message:"Failed to send reset link. Please try again.")}finally{m(!1)}};return x?r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"#ECFDF3",borderRadius:"16px",marginBottom:"16px"},children:r.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#12B76A",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Check your email"}),r.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["We've sent a password reset link to",r.jsx("br",{}),r.jsx("strong",{style:{color:"#344054"},children:a})]})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)",marginBottom:"16px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:"Click the link in the email to reset your password. If you don't see the email, check your spam folder."}),r.jsx(dt,{variant:"primary",size:"lg",onClick:()=>Dt("/account/login"),style:{width:"100%"},children:"Return to sign in"})]}),r.jsx("button",{onClick:()=>{S(!1),l("")},style:{display:"block",width:"100%",background:"none",border:"none",padding:"12px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"center"},onMouseEnter:h=>h.currentTarget.style.textDecoration="underline",onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:"Didn't receive the email? Try again"})]})}):r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("button",{onClick:()=>Dt("/account/login"),disabled:p,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:p?"not-allowed":"pointer",opacity:p?.4:1},onMouseEnter:h=>!p&&(h.currentTarget.style.textDecoration="underline"),onMouseLeave:h=>h.currentTarget.style.textDecoration="none",children:[r.jsx(Xd,{size:16}),"Back to sign in"]}),r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Reset your password"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Enter your email and we'll send you a reset link"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[c&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(qt,{type:"error",children:c})}),r.jsxs("form",{onSubmit:j,children:[r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(Te,{id:"email",label:"Email",type:"email",value:a,onChange:h=>{l(h.target.value),f("")},error:c&&!a?c:"",placeholder:"you@example.com",autoComplete:"email",disabled:p})}),r.jsx(dt,{type:"submit",variant:"primary",size:"lg",isLoading:p,style:{width:"100%"},children:"Send reset link"})]})]})]})})}function Pg(){if(typeof window>"u")return null;const i=window.location.pathname.match(/^\/account\/reset\/([^/]+)\/([^/]+)\/?$/);return i?{id:decodeURIComponent(i[1]),token:decodeURIComponent(i[2])}:null}function Lg({id:i,token:a}){return`${"https://thevibestation.com".replace(/\/+$/,"")}/account/reset/${encodeURIComponent(i)}/${encodeURIComponent(a)}`}function vd(){const{resetPassword:i}=xn(),a=Pg(),[l,c]=N.useState(""),[f,p]=N.useState(""),[m,x]=N.useState({}),[S,C]=N.useState(!1),j=()=>{const w={};return l?l.length<5&&(w.password="Password must be at least 5 characters"):w.password="Password is required",f?l!==f&&(w.confirmPassword="Passwords do not match"):w.confirmPassword="Please confirm your password",x(w),Object.keys(w).length===0},h=async w=>{if(w.preventDefault(),!a){x({general:"This password setup link is invalid. Please request a new one."});return}if(j()){C(!0),x({});try{await i(Lg(a),l),Dt("/account")}catch(I){const F=I.code;x(F==="CUSTOMER_RESET_TOKEN_INVALID"||F==="TOKEN_EXPIRED"?{general:"expired"}:{general:I instanceof Error?I.message:"Failed to set your password. Please try again."})}finally{C(!1)}}};return r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},children:r.jsxs("div",{style:{width:"100%",maxWidth:"440px"},children:[r.jsxs("button",{onClick:()=>Dt("/account/login"),disabled:S,style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"none",border:"none",padding:"8px 0",marginBottom:"24px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"#4338CA",fontFamily:"Inter, system-ui, sans-serif",cursor:S?"not-allowed":"pointer",opacity:S?.4:1},onMouseEnter:w=>!S&&(w.currentTarget.style.textDecoration="underline"),onMouseLeave:w=>w.currentTarget.style.textDecoration="none",children:[r.jsx(Xd,{size:16}),"Back to sign in"]}),r.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[r.jsx("h1",{style:{fontSize:"28px",lineHeight:"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:"Set new password"}),r.jsx("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:"Create a password to activate your account or regain access."})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"16px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[m.general&&r.jsx("div",{style:{marginBottom:"24px"},children:r.jsx(qt,{type:"error",children:m.general==="expired"?r.jsxs(r.Fragment,{children:["This link has expired. Please request a new one."," ",r.jsx("button",{type:"button",onClick:()=>Dt("/account/forgot-password"),style:{background:"none",border:"none",padding:0,color:"#D92D20",font:"inherit",fontWeight:600,textDecoration:"underline",cursor:"pointer"},children:"Request a new link"}),"."]}):m.general})}),r.jsxs("form",{onSubmit:h,children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsx(Te,{id:"password",label:"New password",type:"password",value:l,onChange:w=>{c(w.target.value),(m.password||m.general)&&x(I=>({...I,password:"",general:""}))},error:m.password,helperText:m.password?void 0:"Must be at least 5 characters",placeholder:"Enter new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:S}),r.jsx(Te,{id:"confirmPassword",label:"Confirm password",type:"password",value:f,onChange:w=>{p(w.target.value),(m.confirmPassword||m.general)&&x(I=>({...I,confirmPassword:"",general:""}))},error:m.confirmPassword,placeholder:"Confirm new password",autoComplete:"new-password",showPasswordToggle:!0,disabled:S})]}),r.jsx(dt,{type:"submit",variant:"primary",size:"lg",isLoading:S,style:{width:"100%"},children:"Set Password"})]})]})]})})}function wd({activeSection:i,onSectionChange:a,onLogout:l,isMobile:c=!1}){const f=[{id:"overview",label:"Overview",icon:tf},{id:"orders",label:"Orders",icon:Wo},{id:"addresses",label:"Addresses",icon:bl}];return c?r.jsx("div",{style:{display:"flex",gap:"8px",overflowX:"auto",padding:"16px",backgroundColor:"#FFFFFF",borderBottom:"1px solid #EAECF0"},children:f.map(p=>{const m=p.icon,x=i===p.id;return r.jsxs("button",{onClick:()=>a(p.id),style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",backgroundColor:x?"#F9FAFB":"transparent",border:`1px solid ${x?"#D0D5DD":"transparent"}`,borderRadius:"10px",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:x?"#101828":"#667085",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s"},children:[r.jsx(m,{size:16}),p.label]},p.id)})}):r.jsxs("nav",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"8px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[f.map(p=>{const m=p.icon,x=i===p.id;return r.jsxs("button",{onClick:()=>a(p.id),style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:x?"#F9FAFB":"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:x?"600":"400",color:x?"#101828":"#667085",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:S=>{x||(S.currentTarget.style.backgroundColor="#FCFCFD")},onMouseLeave:S=>{x||(S.currentTarget.style.backgroundColor="transparent")},children:[r.jsx(m,{size:20}),p.label]},p.id)}),r.jsx("div",{style:{height:"1px",backgroundColor:"#EAECF0",margin:"8px 0"}}),r.jsxs("button",{onClick:l,style:{display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"12px 16px",backgroundColor:"transparent",border:"none",borderRadius:"8px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",textAlign:"left",transition:"all 0.15s"},onMouseEnter:p=>{p.currentTarget.style.backgroundColor="#FEF3F2"},onMouseLeave:p=>{p.currentTarget.style.backgroundColor="transparent"},children:[r.jsx(lg,{size:20}),"Sign out"]})]})}function Dg({customer:i}){const{updateProfile:a}=xn(),[l,c]=N.useState(!1),[f,p]=N.useState({firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone||""}),[m,x]=N.useState(!1),[S,C]=N.useState(""),[j,h]=N.useState(""),w=async()=>{x(!0),C(""),h("");try{await a(f),C("Profile updated successfully"),c(!1),setTimeout(()=>C(""),3e3)}catch(F){h(F instanceof Error?F.message:"Failed to update profile")}finally{x(!1)}},I=()=>{p({firstName:i.firstName,lastName:i.lastName,email:i.email,phone:i.phone||""}),c(!1),h("")};return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Profile Information"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your personal information and contact details"})]}),r.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"24px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[S&&r.jsx("div",{style:{marginBottom:"20px"},children:r.jsx(qt,{type:"success",children:S})}),j&&r.jsx("div",{style:{marginBottom:"20px"},children:r.jsx(qt,{type:"error",children:j})}),l?r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Te,{id:"firstName",label:"First name",type:"text",value:f.firstName,onChange:F=>p(R=>({...R,firstName:F.target.value})),disabled:m}),r.jsx(Te,{id:"lastName",label:"Last name",type:"text",value:f.lastName,onChange:F=>p(R=>({...R,lastName:F.target.value})),disabled:m})]}),r.jsx(Te,{id:"email",label:"Email",type:"email",value:f.email,onChange:F=>p(R=>({...R,email:F.target.value})),disabled:m}),r.jsx(Te,{id:"phone",label:"Phone (optional)",type:"tel",value:f.phone,onChange:F=>p(R=>({...R,phone:F.target.value})),disabled:m})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[r.jsx(dt,{variant:"secondary",size:"md",onClick:I,disabled:m,children:"Cancel"}),r.jsx(dt,{variant:"primary",size:"md",onClick:w,isLoading:m,children:"Save changes"})]})]}):r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px"},children:[r.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"#F9FAFB",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(tf,{size:28,style:{color:"#667085"}})}),r.jsxs("div",{children:[r.jsxs("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:[i.firstName," ",i.lastName]}),r.jsxs("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Member since ",new Date(i.createdAt).toLocaleDateString("en-US",{month:"long",year:"numeric"})]})]})]}),r.jsxs(dt,{variant:"secondary",size:"sm",onClick:()=>c(!0),children:[r.jsx(xg,{size:14}),"Edit"]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(cg,{size:20,style:{color:"#667085",flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Email"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i.email})]})]}),i.phone&&r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(vg,{size:20,style:{color:"#667085",flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"4px"},children:"Phone"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i.phone})]})]})]})]})]})]})}function Og({order:i,onClick:a}){const l=p=>new Date(p).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),f=(p=>{switch(p){case"FULFILLED":return{bg:"#ECFDF3",border:"#12B76A",text:"#039855",label:"Fulfilled"};case"UNFULFILLED":return{bg:"#FFFAEB",border:"#F79009",text:"#DC6803",label:"Unfulfilled"};case"PARTIALLY_FULFILLED":return{bg:"rgba(79, 70, 229, 0.06)",border:"#4F46E5",text:"#4338CA",label:"Partially fulfilled"};case"CANCELLED":return{bg:"#FEF3F2",border:"#F04438",text:"#D92D20",label:"Cancelled"};default:return{bg:"#F9FAFB",border:"#D0D5DD",text:"#667085",label:p}}})(i.fulfillmentStatus);return r.jsx("button",{onClick:()=>a(i.id),style:{width:"100%",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"20px",cursor:"pointer",textAlign:"left",transition:"all 0.15s",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},onMouseEnter:p=>{p.currentTarget.style.boxShadow="0 4px 10px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.08)",p.currentTarget.style.borderColor="#D0D5DD"},onMouseLeave:p=>{p.currentTarget.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)",p.currentTarget.style.borderColor="#EAECF0"},children:r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[r.jsx("div",{style:{flexShrink:0,width:"48px",height:"48px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F9FAFB",borderRadius:"10px"},children:r.jsx(Wo,{size:24,style:{color:"#667085"}})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px",flexWrap:"wrap"},children:[r.jsxs("h3",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:["Order #",i.orderNumber]}),r.jsx("div",{style:{display:"inline-flex",alignItems:"center",padding:"2px 8px",backgroundColor:f.bg,border:`1px solid ${f.border}`,borderRadius:"6px"},children:r.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:f.text,fontFamily:"Inter, system-ui, sans-serif"},children:f.label})})]}),r.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"12px"},children:["Placed on ",l(i.createdAt)," • ",i.lineItems.length," item",i.lineItems.length!==1?"s":""]}),r.jsx("div",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i.totalPrice})]}),r.jsx("div",{style:{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#98A2B3"},children:r.jsx(Hh,{size:20})})]})})}function nf({icon:i,title:a,description:l,action:c}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"64px 24px",textAlign:"center"},children:[r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"56px",height:"56px",borderRadius:"12px",backgroundColor:"#F9FAFB",color:"#667085",marginBottom:"16px"},children:i}),r.jsx("h3",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:a}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:c?"24px":"0",maxWidth:"400px"},children:l}),c&&r.jsx("div",{children:c})]})}function Mg(){const{orders:i,hasMore:a,isLoading:l,isLoadingMore:c,error:f,loadMore:p}=Rh(),m=x=>{console.log("View order:",x)};return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Order History"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"View and track your orders"})]}),f&&r.jsx("div",{style:{marginBottom:"16px"},children:r.jsx(qt,{type:"error",children:f})}),l?r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading orders..."})}):i.length>0?r.jsxs("div",{children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:a?"24px":"0"},children:i.map(x=>r.jsx(Og,{order:x,onClick:m},x.id))}),a&&r.jsx("div",{style:{textAlign:"center"},children:r.jsx(dt,{variant:"secondary",size:"md",onClick:()=>void p(),isLoading:c,children:"Load more orders"})})]}):r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx(nf,{icon:r.jsx(Wo,{size:32}),title:"No orders yet",description:"When you place an order, it will appear here so you can track its status.",action:r.jsx(dt,{variant:"primary",size:"md",children:"Start shopping"})})})]})}function Bg({address:i,onEdit:a,onDelete:l,onSetDefault:c}){const[f,p]=N.useState(!1);return r.jsxs("div",{style:{position:"relative",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"20px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:[i.isDefault&&r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 8px",backgroundColor:"#ECFDF3",border:"1px solid #12B76A",borderRadius:"6px",marginBottom:"12px"},children:[r.jsx(Gd,{size:12,style:{color:"#039855"}}),r.jsx("span",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"#039855",fontFamily:"Inter, system-ui, sans-serif"},children:"Default"})]}),r.jsxs("div",{style:{position:"absolute",top:"16px",right:"16px"},children:[r.jsx("button",{onClick:()=>p(!f),style:{background:"none",border:"none",padding:"4px",cursor:"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:r.jsx(Zh,{size:20})}),f&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10},onClick:()=>p(!1)}),r.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:"4px",backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"10px",boxShadow:"0 4px 10px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.08)",padding:"4px",minWidth:"160px",zIndex:20},children:[r.jsx("button",{onClick:()=>{p(!1),a(i)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#344054",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Edit address"}),!i.isDefault&&r.jsx("button",{onClick:()=>{p(!1),c(i.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#344054",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Set as default"}),r.jsx("div",{style:{height:"1px",backgroundColor:"#EAECF0",margin:"4px 0"}}),r.jsx("button",{onClick:()=>{p(!1),l(i.id)},style:{width:"100%",padding:"8px 12px",background:"none",border:"none",textAlign:"left",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#F04438",fontFamily:"Inter, system-ui, sans-serif",cursor:"pointer",borderRadius:"6px",transition:"all 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#FEF3F2"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:"Delete address"})]})]})]}),r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx("div",{style:{flexShrink:0,width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F9FAFB",borderRadius:"8px"},children:r.jsx(bl,{size:20,style:{color:"#667085"}})}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:[i.firstName," ",i.lastName]}),r.jsxs("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:[i.company&&r.jsx("div",{children:i.company}),r.jsx("div",{children:i.address1}),i.address2&&r.jsx("div",{children:i.address2}),r.jsxs("div",{children:[i.city,", ",i.province," ",i.zip]}),r.jsx("div",{children:i.country}),i.phone&&r.jsx("div",{style:{marginTop:"8px"},children:i.phone})]})]})]})]})}function kd({address:i,onClose:a,onSave:l}){const[c,f]=N.useState({firstName:(i==null?void 0:i.firstName)||"",lastName:(i==null?void 0:i.lastName)||"",company:(i==null?void 0:i.company)||"",address1:(i==null?void 0:i.address1)||"",address2:(i==null?void 0:i.address2)||"",city:(i==null?void 0:i.city)||"",province:(i==null?void 0:i.province)||"",zip:(i==null?void 0:i.zip)||"",country:(i==null?void 0:i.country)||"United States",phone:(i==null?void 0:i.phone)||""}),[p,m]=N.useState({}),[x,S]=N.useState(!1),C=()=>{const w={};return c.firstName.trim()||(w.firstName="First name is required"),c.lastName.trim()||(w.lastName="Last name is required"),c.address1.trim()||(w.address1="Address is required"),c.city.trim()||(w.city="City is required"),c.province.trim()||(w.province="State/Province is required"),c.zip.trim()||(w.zip="ZIP/Postal code is required"),c.country.trim()||(w.country="Country is required"),m(w),Object.keys(w).length===0},j=async w=>{if(w.preventDefault(),!!C()){S(!0);try{await new Promise(I=>setTimeout(I,500)),l(i?{...i,...c}:c)}catch(I){console.error("Failed to save address:",I)}finally{S(!1)}}},h=(w,I)=>{f(F=>({...F,[w]:I})),p[w]&&m(F=>({...F,[w]:""}))};return r.jsx(r.Fragment,{children:r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.40)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50,overflow:"auto"},onClick:a,children:r.jsxs("div",{style:{backgroundColor:"#FFFFFF",borderRadius:"16px",width:"100%",maxWidth:"600px",maxHeight:"90vh",overflow:"auto",boxShadow:"0 12px 24px -4px rgba(16, 24, 40, 0.06), 0 6px 12px -4px rgba(16, 24, 40, 0.08)"},onClick:w=>w.stopPropagation(),children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid #EAECF0"},children:[r.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:i?"Edit address":"Add new address"}),r.jsx("button",{onClick:a,disabled:x,style:{background:"none",border:"none",padding:"4px",cursor:x?"not-allowed":"pointer",color:"#667085",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"6px",opacity:x?.4:1},children:r.jsx(Cl,{size:20})})]}),r.jsxs("form",{onSubmit:j,children:[r.jsx("div",{style:{padding:"24px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Te,{id:"firstName",label:"First name",value:c.firstName,onChange:w=>h("firstName",w.target.value),error:p.firstName,disabled:x}),r.jsx(Te,{id:"lastName",label:"Last name",value:c.lastName,onChange:w=>h("lastName",w.target.value),error:p.lastName,disabled:x})]}),r.jsx(Te,{id:"company",label:"Company (optional)",value:c.company,onChange:w=>h("company",w.target.value),disabled:x}),r.jsx(Te,{id:"address1",label:"Address",value:c.address1,onChange:w=>h("address1",w.target.value),error:p.address1,placeholder:"123 Main Street",disabled:x}),r.jsx(Te,{id:"address2",label:"Apartment, suite, etc. (optional)",value:c.address2,onChange:w=>h("address2",w.target.value),placeholder:"Apt 4B",disabled:x}),r.jsx(Te,{id:"city",label:"City",value:c.city,onChange:w=>h("city",w.target.value),error:p.city,disabled:x}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[r.jsx(Te,{id:"province",label:"State / Province",value:c.province,onChange:w=>h("province",w.target.value),error:p.province,placeholder:"CA",disabled:x}),r.jsx(Te,{id:"zip",label:"ZIP / Postal code",value:c.zip,onChange:w=>h("zip",w.target.value),error:p.zip,placeholder:"94103",disabled:x})]}),r.jsx(Te,{id:"country",label:"Country",value:c.country,onChange:w=>h("country",w.target.value),error:p.country,disabled:x}),r.jsx(Te,{id:"phone",label:"Phone (optional)",type:"tel",value:c.phone,onChange:w=>h("phone",w.target.value),placeholder:"+1 (555) 123-4567",disabled:x})]})}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",padding:"24px",borderTop:"1px solid #EAECF0"},children:[r.jsx(dt,{type:"button",variant:"secondary",size:"md",onClick:a,disabled:x,children:"Cancel"}),r.jsx(dt,{type:"submit",variant:"primary",size:"md",isLoading:x,children:i?"Save changes":"Add address"})]})]})]})})})}function Ug({title:i,description:a,onConfirm:l,onCancel:c}){return r.jsx(r.Fragment,{children:r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.40)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",zIndex:50},onClick:c,children:r.jsx("div",{style:{backgroundColor:"#FFFFFF",borderRadius:"16px",width:"100%",maxWidth:"440px",boxShadow:"0 12px 24px -4px rgba(16, 24, 40, 0.06), 0 6px 12px -4px rgba(16, 24, 40, 0.08)"},onClick:f=>f.stopPropagation(),children:r.jsxs("div",{style:{padding:"24px"},children:[r.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",backgroundColor:"#FEF3F2",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:r.jsx(Tg,{size:24,style:{color:"#F04438"}})}),r.jsx("h2",{style:{fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"8px"},children:i}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"24px"},children:a}),r.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[r.jsx(dt,{variant:"secondary",size:"md",onClick:c,children:"Cancel"}),r.jsx(dt,{variant:"destructive",size:"md",onClick:l,children:"Delete"})]})]})})})})}function $g(){const{addresses:i,isLoading:a,isSaving:l,error:c,createAddress:f,editAddress:p,removeAddress:m,makeDefaultAddress:x}=Nh(),[S,C]=N.useState(!1),[j,h]=N.useState(null),[w,I]=N.useState(null),F=async $=>{await f($),C(!1)},R=$=>{h($)},P=async $=>{await p($),h(null)},se=$=>{I($)},fe=async()=>{w&&(await m(w),I(null))},K=async $=>{await x($)};return r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px",flexWrap:"wrap",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("h2",{style:{fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif"},children:"Saved Addresses"}),r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",marginTop:"4px"},children:"Manage your shipping and billing addresses"})]}),i.length>0&&r.jsxs(dt,{variant:"primary",size:"md",onClick:()=>C(!0),children:[r.jsx(yd,{size:16}),"Add address"]})]}),c&&r.jsx("div",{style:{marginBottom:"16px"},children:r.jsx(qt,{type:"error",children:c})}),a?r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",padding:"32px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx("p",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif",margin:0},children:"Loading addresses..."})}):i.length>0?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"16px"},children:i.map($=>r.jsx(Bg,{address:$,onEdit:R,onDelete:se,onSetDefault:K},$.id))}):r.jsx("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #EAECF0",borderRadius:"12px",boxShadow:"0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)"},children:r.jsx(nf,{icon:r.jsx(bl,{size:32}),title:"No addresses saved",description:"Add a shipping address to make checkout faster and easier.",action:r.jsxs(dt,{variant:"primary",size:"md",onClick:()=>C(!0),children:[r.jsx(yd,{size:16}),"Add address"]})})}),S&&r.jsx(kd,{onClose:()=>C(!1),onSave:F}),j&&r.jsx(kd,{address:j,onClose:()=>h(null),onSave:P}),w&&r.jsx(Ug,{title:"Delete address",description:"Are you sure you want to delete this address? This action cannot be undone.",onConfirm:()=>void fe(),onCancel:()=>I(null)}),l&&r.jsx("div",{style:{marginTop:"16px"},children:r.jsx(qt,{type:"info",children:"Saving address changes..."})})]})}function Hg(){const{customer:i,isAuthenticated:a,logout:l,isLoading:c}=xn(),[f,p]=N.useState("overview"),[m,x]=N.useState(window.innerWidth<768);N.useEffect(()=>{!c&&!a&&Dt("/account/login")},[a,c]),N.useEffect(()=>{const C=()=>{x(window.innerWidth<768)};return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[]);const S=()=>{l(),Dt("/account/login")};return c||!i?r.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 16px",border:"3px solid #F9FAFB",borderTopColor:"#4338CA",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),r.jsx("style",{children:`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `})]})}):r.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#FCFCFD"},children:[r.jsx("div",{style:{backgroundColor:"#FFFFFF",borderBottom:"1px solid #EAECF0"},children:r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"32px 48px"},children:[r.jsx("h1",{style:{fontSize:m?"22px":"28px",lineHeight:m?"30px":"36px",fontWeight:"600",color:"#101828",fontFamily:"Inter, system-ui, sans-serif",marginBottom:"4px"},children:"My Account"}),r.jsxs("p",{style:{fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"#667085",fontFamily:"Inter, system-ui, sans-serif"},children:["Welcome back, ",i.firstName]})]})}),m&&r.jsx(wd,{activeSection:f,onSectionChange:p,onLogout:S,isMobile:!0}),r.jsx("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:m?"24px 16px":"48px 48px"},children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:m?"1fr":"240px 1fr",gap:m?"0":"32px"},children:[!m&&r.jsx("div",{children:r.jsx(wd,{activeSection:f,onSectionChange:p,onLogout:S})}),r.jsxs("div",{children:[f==="overview"&&r.jsx(Dg,{customer:i}),f==="orders"&&r.jsx(Mg,{}),f==="addresses"&&r.jsx($g,{})]})]})})]})}function Wg(){return N.useCallback((i=[])=>Qm(i),[])}function Vg(){return N.useCallback((i,a)=>Km(i,a),[])}function qg(){return N.useCallback((i,a)=>Xm(i,a),[])}function Yg(){return N.useCallback((i,a)=>Gm(i,a),[])}const rf=N.createContext(null),Qg="IN".toUpperCase(),Kg=i=>i.lines.edges.map(a=>{var c,f,p,m,x;const l=a.node;return{id:l.id,name:l.merchandise.product.title,variant:((c=l.merchandise.selectedOptions)==null?void 0:c.map(S=>`${S.name}: ${S.value}`).join(", "))||l.merchandise.title,price:Number.parseFloat(l.merchandise.price.amount),quantity:l.quantity,variantId:l.merchandise.id,imageUrl:((f=l.merchandise.image)==null?void 0:f.url)||((p=l.merchandise.product.featuredImage)==null?void 0:p.url),imageAlt:((m=l.merchandise.image)==null?void 0:m.altText)||((x=l.merchandise.product.featuredImage)==null?void 0:x.altText)||l.merchandise.product.title}});function Xg({children:i}){const[a,l]=N.useState([]),[c,f]=N.useState(!1),[p,m]=N.useState(null),[x,S]=N.useState(null),[C,j]=N.useState(null),h=Wg(),w=Vg(),I=qg(),F=Yg(),R=N.useCallback(K=>{l(Kg(K)),m(K.id),S(K.checkoutUrl),th(K.id)},[]);N.useEffect(()=>{let K=!1;return(async()=>{try{const B=eh();if(B){const ce=await Jm(B);if(ce&&!K){R(ce);return}}const te=await h();K||R(te)}catch(B){K||console.error("Failed to initialize Shopify cart",B)}})(),()=>{K=!0}},[h,R]);const P=N.useMemo(()=>a.reduce((K,$)=>K+$.quantity,0),[a]),se=N.useMemo(()=>a.reduce((K,$)=>K+$.price*$.quantity,0),[a]),fe={items:a,isDrawerOpen:c,cartCount:P,subtotal:se,total:se,checkoutUrl:x,cartError:C,clearCartError:()=>j(null),addItem:async K=>{try{j(null);let $=p;if(!$){const ce=await h();R(ce),$=ce.id}const B=a.find(ce=>ce.variantId===K),te=B?await I($,[{id:B.id,quantity:B.quantity+1}]):await w($,[{merchandiseId:K,quantity:1}]);return R(te),f(!0),{ok:!0}}catch($){console.error("Failed to add item to cart",$);const B=$ instanceof Error?$.message:"Unable to add item to cart.";return j(B),{ok:!1,error:B}}},checkout:async()=>{try{j(null);let K=p,$=x;if(!K){const te=await h();R(te),K=te.id,$=te.checkoutUrl}const B=await Zm(K,{countryCode:Qg});R(B),window.location.href=B.checkoutUrl}catch(K){console.error("Failed to update buyer identity before checkout",K),j(K instanceof Error?K.message:"Unable to continue to checkout."),window.location.href=latestCheckoutUrl||"/cart"}},openCartDrawer:()=>f(!0),closeCartDrawer:()=>f(!1),toggleCartDrawer:()=>f(K=>!K),incrementItem:K=>{if(!p)return;const $=a.find(B=>B.id===K);$&&I(p,[{id:$.id,quantity:$.quantity+1}]).then(B=>{j(null),R(B)}).catch(B=>{console.error("Failed to increment cart line",B),j(B instanceof Error?B.message:"Unable to update cart quantity.")})},decrementItem:K=>{if(!p)return;const $=a.find(B=>B.id===K);if($){if($.quantity<=1){F(p,[$.id]).then(B=>{j(null),R(B)}).catch(B=>{console.error("Failed to decrement cart line",B),j(B instanceof Error?B.message:"Unable to update cart quantity.")});return}I(p,[{id:$.id,quantity:$.quantity-1}]).then(B=>{j(null),R(B)}).catch(B=>{console.error("Failed to decrement cart line",B),j(B instanceof Error?B.message:"Unable to update cart quantity.")})}},removeItem:K=>{p&&F(p,[K]).then($=>{j(null),R($)}).catch($=>{console.error("Failed to remove cart line",$),j($ instanceof Error?$.message:"Unable to remove item from cart.")})}};return r.jsx(rf.Provider,{value:fe,children:i})}function qn(){const i=N.useContext(rf);if(!i)throw new Error("useCart must be used within a CartProvider.");return i}function $o(i){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(i)}var Gg=(i,a,l,c,f,p,m,x)=>{let S=document.documentElement,C=["light","dark"];function j(I){(Array.isArray(i)?i:[i]).forEach(F=>{let R=F==="class",P=R&&p?f.map(se=>p[se]||se):f;R?(S.classList.remove(...P),S.classList.add(p&&p[I]?p[I]:I)):S.setAttribute(F,I)}),h(I)}function h(I){x&&C.includes(I)&&(S.style.colorScheme=I)}function w(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(c)j(c);else try{let I=localStorage.getItem(a)||l,F=m&&I==="system"?w():I;j(F)}catch{}},Sd=["light","dark"],of="(prefers-color-scheme: dark)",Jg=typeof window>"u",El=N.createContext(void 0),Zg={setTheme:i=>{},themes:[]},Tl=()=>{var i;return(i=N.useContext(El))!=null?i:Zg},ex=i=>N.useContext(El)?N.createElement(N.Fragment,null,i.children):N.createElement(nx,{...i}),tx=["light","dark"],nx=({forcedTheme:i,disableTransitionOnChange:a=!1,enableSystem:l=!0,enableColorScheme:c=!0,storageKey:f="theme",themes:p=tx,defaultTheme:m=l?"system":"light",attribute:x="data-theme",value:S,children:C,nonce:j,scriptProps:h})=>{let[w,I]=N.useState(()=>ox(f,m)),[F,R]=N.useState(()=>w==="system"?il():w),P=S?Object.values(S):p,se=N.useCallback(B=>{let te=B;if(!te)return;B==="system"&&l&&(te=il());let ce=S?S[te]:te,Ie=a?ix(j):null,Le=document.documentElement,Be=we=>{we==="class"?(Le.classList.remove(...P),ce&&Le.classList.add(ce)):we.startsWith("data-")&&(ce?Le.setAttribute(we,ce):Le.removeAttribute(we))};if(Array.isArray(x)?x.forEach(Be):Be(x),c){let we=Sd.includes(m)?m:null,Re=Sd.includes(te)?te:we;Le.style.colorScheme=Re}Ie==null||Ie()},[j]),fe=N.useCallback(B=>{let te=typeof B=="function"?B(w):B;I(te);try{localStorage.setItem(f,te)}catch{}},[w]),K=N.useCallback(B=>{let te=il(B);R(te),w==="system"&&l&&!i&&se("system")},[w,i]);N.useEffect(()=>{let B=window.matchMedia(of);return B.addListener(K),K(B),()=>B.removeListener(K)},[K]),N.useEffect(()=>{let B=te=>{te.key===f&&(te.newValue?I(te.newValue):fe(m))};return window.addEventListener("storage",B),()=>window.removeEventListener("storage",B)},[fe]),N.useEffect(()=>{se(i??w)},[i,w]);let $=N.useMemo(()=>({theme:w,setTheme:fe,forcedTheme:i,resolvedTheme:w==="system"?F:w,themes:l?[...p,"system"]:p,systemTheme:l?F:void 0}),[w,fe,i,F,l,p]);return N.createElement(El.Provider,{value:$},N.createElement(rx,{forcedTheme:i,storageKey:f,attribute:x,enableSystem:l,enableColorScheme:c,defaultTheme:m,value:S,themes:p,nonce:j,scriptProps:h}),C)},rx=N.memo(({forcedTheme:i,storageKey:a,attribute:l,enableSystem:c,enableColorScheme:f,defaultTheme:p,value:m,themes:x,nonce:S,scriptProps:C})=>{let j=JSON.stringify([l,a,p,i,x,m,c,f]).slice(1,-1);return N.createElement("script",{...C,suppressHydrationWarning:!0,nonce:typeof window>"u"?S:"",dangerouslySetInnerHTML:{__html:`(${Gg.toString()})(${j})`}})}),ox=(i,a)=>{if(Jg)return;let l;try{l=localStorage.getItem(i)||void 0}catch{}return l||a},ix=i=>{let a=document.createElement("style");return i&&a.setAttribute("nonce",i),a.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},il=i=>(i||(i=window.matchMedia(of)),i.matches?"dark":"light");function sx(){const{customer:i,isAuthenticated:a}=xn(),{resolvedTheme:l,setTheme:c}=Tl(),f=l==="dark",[p,m]=N.useState(!1),x=a?(i==null?void 0:i.firstName)||"Account":"Sign in",S=a?"/account":"/account/login";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("header",{className:"header-container",children:[r.jsx(ge,{children:r.jsxs("div",{className:"header-inner",children:[r.jsx(ax,{isDark:f}),r.jsx(lx,{}),r.jsx(ux,{accountHref:S,accountLabel:x,isDark:f,onToggleTheme:()=>c(f?"light":"dark")}),r.jsx("button",{className:"header-mobile-menu-btn",onClick:()=>m(!p),"aria-label":"Toggle mobile menu",children:p?r.jsx(Cl,{size:20}):r.jsx(pg,{size:20})})]})}),r.jsxs("div",{className:`header-mobile-menu${p?" open":""}`,children:[r.jsxs("nav",{className:"header-mobile-nav",children:[r.jsx("a",{href:"/products",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Products"}),r.jsx("a",{href:"/philosophy",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Philosophy"}),r.jsx("a",{href:"/community",className:"header-mobile-nav-link",onClick:()=>m(!1),children:"Community"})]}),r.jsxs("div",{className:"header-mobile-actions",children:[r.jsx("a",{href:S,className:"header-mobile-account-btn",onClick:()=>m(!1),style:{textDecoration:"none"},children:x}),r.jsxs("button",{className:"header-mobile-account-btn",onClick:()=>c(f?"light":"dark"),children:[f?r.jsx(ef,{size:20,style:{marginRight:"8px"}}):r.jsx(Zd,{size:20,style:{marginRight:"8px"}}),f?"Light Mode":"Dark Mode"]})]})]})]})]})}function ax({isDark:i}){return r.jsx(cx,{isDark:i})}function lx(){return r.jsx(fx,{})}function ux({accountHref:i,accountLabel:a,isDark:l,onToggleTheme:c}){return r.jsxs("div",{className:"header-right",children:[r.jsx(dx,{isDark:l,onToggleTheme:c}),r.jsx(px,{href:i,label:a}),r.jsx(mx,{})]})}function cx({isDark:i}){return r.jsx(Ad,{size:32,variant:i?"light":"dark",showText:!0,href:"/"})}function dx({isDark:i,onToggleTheme:a}){return r.jsxs("button",{"aria-label":`Switch to ${i?"light":"dark"} mode`,onClick:a,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[i?r.jsx(ef,{size:16}):r.jsx(Zd,{size:16}),r.jsx("span",{className:"theme-toggle-text",children:i?"Light":"Dark"})]})}function fx(){return r.jsxs("nav",{className:"header-nav",children:[r.jsx("a",{href:"/products",className:"header-nav-link",children:"Products"}),r.jsx("a",{href:"/philosophy",className:"header-nav-link",children:"Philosophy"}),r.jsx("a",{href:"/community",className:"header-nav-link",children:"Community"})]})}function px({href:i,label:a}){return r.jsx("a",{href:i,className:"header-account-btn",style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer",textDecoration:"none"},children:a})}function mx(){const{cartCount:i,openCartDrawer:a}=qn(),l=()=>{(window.location.pathname.replace(/\/+$/,"")||"/")!=="/cart"&&a()};return r.jsxs("div",{style:{position:"relative",display:"inline-flex"},children:[r.jsx(We,{label:"Cart",variant:"ghost",size:"sm",onClick:l}),r.jsx("div",{style:{position:"absolute",top:"-6px",right:"-8px",pointerEvents:"none",opacity:.78},children:r.jsx(it,{label:String(i),variant:"accent",size:"sm"})})]})}function Se({children:i,direction:a="vertical",gap:l=16,align:c="stretch",justify:f="flex-start",style:p,responsiveDirection:m,responsiveGap:x}){const S=a==="horizontal"?"row":"column",C=typeof l=="number"?`${l}px`:l,j=m||x,h=j?`stack-${Math.random().toString(36).substr(2,9)}`:"";return r.jsxs(r.Fragment,{children:[j&&r.jsx("style",{children:`
          .${h} {
            display: flex;
            flex-direction: ${S};
            gap: ${C};
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
        `}),r.jsx("div",{className:j?h:void 0,style:j?p:{display:"flex",flexDirection:S,gap:C,alignItems:c,justifyContent:f,...p},children:i})]})}function hx(){const{resolvedTheme:i}=Tl(),a=i==="dark";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("footer",{className:"footer-container",children:r.jsx(ge,{children:r.jsxs(Se,{gap:"24px",children:[r.jsxs("div",{className:"footer-top",children:[r.jsx(gx,{}),r.jsx(xx,{})]}),r.jsxs("div",{className:"footer-bottom",children:[r.jsx(yx,{isDark:a}),r.jsx(vx,{})]})]})})})]})}function gx(){return r.jsxs(Se,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Explore"}),r.jsxs(Se,{gap:"10px",children:[r.jsx("a",{href:"#products",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Products"}),r.jsx("a",{href:"#philosophy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Philosophy"}),r.jsx("a",{href:"#community",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Community"}),r.jsx("a",{href:"/privacy",style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",textDecoration:"none"},children:"Privacy Policy"})]})]})}function xx(){return r.jsxs(Se,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)"},children:"Standards"}),r.jsxs(Se,{gap:"10px",children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Curated for durability"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Reliable support"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)"},children:"Clear policies"})]})]})}function yx({isDark:i}){return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx(Ad,{size:24,variant:i?"light":"dark",showText:!1,href:"/"}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:"© VIBE STATION"})]})}function vx(){return r.jsxs("div",{className:"footer-social",children:[r.jsx("button",{className:"footer-social-btn",children:"Instagram"}),r.jsx("button",{className:"footer-social-btn",children:"YouTube"}),r.jsx("button",{className:"footer-social-btn",children:"Email"})]})}function wx({children:i}){return r.jsxs(Se,{gap:"0px",style:{minHeight:"100vh"},children:[r.jsx(kx,{}),r.jsx(Sx,{children:i}),r.jsx(jx,{})]})}function kx(){return r.jsx(sx,{})}function Sx({children:i}){return r.jsx(bx,{children:i})}function jx(){return r.jsx(hx,{})}function bx({children:i}){return r.jsx("main",{style:{flex:1,backgroundColor:"var(--background)"},children:r.jsx(Se,{gap:"0px",style:{height:"100%"},children:i})})}const Cx={standard:{top:"56px",bottom:"56px"},dense:{top:"32px",bottom:"32px"}},Ho={canvas:{backgroundColor:"var(--surface-canvas, #FFFFFF)"},subtle:{backgroundColor:"var(--surface-subtle, #FCFCFD)"},inverse:{backgroundColor:"var(--surface-inverse, #101828)",color:"var(--text-inverse, #FFFFFF)"}};function Ex(i){if(!i||typeof i!="object"||!("type"in i))return!1;const a=i.type;return a===ge||a===ge.Wide||a===ge.Standard||a===ge.Narrow}function sf({children:i}){return r.jsx(r.Fragment,{children:i})}function Tx({children:i}){return r.jsx("div",{style:{paddingTop:"56px",paddingBottom:"56px"},children:i})}function Ix({children:i}){return r.jsx("div",{style:{paddingTop:"32px",paddingBottom:"32px"},children:i})}function _x({children:i}){return r.jsx("div",{style:Ho.canvas,children:i})}function Fx({children:i}){return r.jsx("div",{style:Ho.subtle,children:i})}function Nx({children:i}){return r.jsx("div",{style:Ho.inverse,children:i})}function Rx({children:i,className:a,padding:l="standard",variant:c="canvas",containerWidth:f="standard",contain:p=!0,paddingTop:m,paddingBottom:x,background:S}){const C=Cx[l],j=m??C.top,h=x??C.bottom,w={...Ho[c],backgroundColor:S??Ho[c].backgroundColor},I=p&&!Ex(i);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .section-responsive {
          padding-top: ${j};
          padding-bottom: ${h};
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .section-responsive {
            padding-top: calc(${j} * 0.75);
            padding-bottom: calc(${h} * 0.75);
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 640px) {
          .section-responsive {
            padding-top: calc(${j} * 0.5);
            padding-bottom: calc(${h} * 0.5);
          }
        }
      `}),r.jsx("section",{className:`section-responsive ${a||""}`,style:w,children:r.jsx(sf,{children:I?r.jsx(ge,{width:f,children:i}):i})})]})}const ot=Object.assign(Rx,{SectionContainerSlot:sf,PaddingStandard:Tx,PaddingDense:Ix,VariantCanvas:_x,VariantSubtle:Fx,VariantInverse:Nx});function zx(){return r.jsx(ot,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsxs(ge,{children:[r.jsx(Ax,{}),r.jsx(Px,{})]})})}function Ax(){return r.jsxs(Se,{gap:"0px",style:{marginBottom:"24px"},children:[r.jsx(Lx,{}),r.jsx(Dx,{})]})}function Px(){return r.jsxs(Se,{gap:"16px",children:[r.jsx(Ox,{}),r.jsx(Mx,{}),r.jsx(Bx,{}),r.jsx(Ux,{}),r.jsx($x,{})]})}function Lx(){return null}function Dx(){return null}function Ox(){return null}function Mx(){return null}function Bx(){return null}function Ux(){return null}function $x(){return null}function Hx(){return r.jsx(ot,{paddingTop:"64px",paddingBottom:"80px",background:"var(--card)",children:r.jsxs(ge,{children:[r.jsx(Wx,{}),r.jsx(Vx,{})]})})}function Wx(){return r.jsx(Se,{gap:"0px",style:{marginBottom:"24px"},children:r.jsx(qx,{})})}function Vx(){return r.jsxs(Se,{gap:"16px",children:[r.jsx(Yx,{}),r.jsx(Qx,{}),r.jsx(Kx,{})]})}function qx(){return null}function Yx(){return null}function Qx(){return null}function Kx(){return null}const Xx={hero:null,heroMetaBadges:[],featuredDrop:null,socialProof:null};let us=Xx,fs=!1,Io=null;const Gx=async()=>Io||(Io=(async()=>{var i,a,l,c;try{const f=await Uo({first:6});if(f.edges.length===0){fs=!0;return}const p=f.edges.map(C=>C.node),m=p[0],x=gs(m),S=p.slice(0,3).map(C=>{var j,h;return{id:C.id,name:C.title,role:((j=C.featureLine)==null?void 0:j.value)||"Curated product",quote:((h=C.shortDescription)==null?void 0:h.value)||C.description||"Built for consistent daily use.",tag:C.tags[0]||"Curated"}});us={hero:{eyebrow:"Curated essentials for musicians",headline:"Gear that survives practice, travel, and stage.",supporting:"We research what musicians actually need, then pick durable, best-in-class tools with modern features so you buy once and keep playing.",primaryCta:"Shop products",secondaryCta:"Our philosophy",metaLine:"Fast delivery · Clear returns · Responsive support",featuredDropEyebrow:"Featured drop",featuredDropTitle:m.title,featuredDropSubtitle:((i=m.shortDescription)==null?void 0:i.value)||m.description||"",featuredDropImageUrl:(x==null?void 0:x.url)||"",featuredDropImageAlt:(x==null?void 0:x.altText)||m.title},featuredDrop:{eyebrow:"Featured drop",title:"Best-in-class essentials, chosen to last.",supporting:"One product at a time. Thorough research. Durable materials. Modern features that matter in real practice and gig conditions.",badges:["Durable build","Fast + accurate","Stage-ready"],primaryCta:"View featured",secondaryCta:"See all products",productName:m.title,productPrice:new Intl.NumberFormat("en-IN",{style:"currency",currency:m.priceRange.minVariantPrice.currencyCode,maximumFractionDigits:0}).format(Number.parseFloat(m.priceRange.minVariantPrice.amount)),productCopy:((a=m.shortDescription)==null?void 0:a.value)||m.description||"",featureLine:((l=m.featureLine)==null?void 0:l.value)||"",productBadge:((c=m.badge)==null?void 0:c.value)||m.tags[0]||"",productImageUrl:(x==null?void 0:x.url)||"",productImageAlt:(x==null?void 0:x.altText)||m.title},heroMetaBadges:["Curated for durability","Modern features","Clear policies"],socialProof:{eyebrow:"What musicians notice",title:"Built for real use — not shelf appeal.",supporting:"Feedback that focuses on durability, clarity, and daily reliability.",chips:m.tags.slice(0,4),testimonials:S,ctaLabel:"Explore products"}}}catch(f){console.error("Failed to load home data from Shopify",f)}finally{fs=!0,Io=null}})(),Io);function Vo(){const[i,a]=N.useState(us),[l,c]=N.useState(!fs);return N.useEffect(()=>{let f=!1;return fs?(a(us),c(!1),()=>{f=!0}):(Gx().then(()=>{f||(a(us),c(!1))}),()=>{f=!0})},[]),{...i,isLoading:l}}function Jx(){const{hero:i}=Vo();return i?r.jsx(ot,{contain:!1,paddingTop:"56px",paddingBottom:"48px",background:"var(--card)",children:r.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:"-200px",right:"-200px",width:"600px",height:"600px",backgroundColor:"#4F46E50F",borderRadius:"50%",filter:"blur(120px)",pointerEvents:"none",zIndex:0}}),r.jsx(ge,{width:"wide",className:"relative z-[1]",children:r.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"64px",alignItems:"center"},children:[r.jsx("div",{style:{flex:"0 0 55%"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.eyebrow}),r.jsx("h1",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"48px",lineHeight:"56px",fontWeight:"600",color:"var(--foreground)",letterSpacing:"-0.01em",margin:0},children:i.headline}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"540px",margin:0},children:i.supporting}),r.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[r.jsx(Zx,{label:i.primaryCta}),r.jsx(ey,{label:i.secondaryCta})]}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",marginTop:"8px"},children:i.metaLine})]})}),r.jsx("div",{style:{flex:"0 0 45%",position:"relative"},children:r.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"480px",height:"420px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[r.jsx("div",{style:{backgroundColor:"var(--muted)",height:"280px",width:"100%"},children:i.featuredDropImageUrl?r.jsx("img",{src:i.featuredDropImageUrl,alt:i.featuredDropImageAlt||i.featuredDropTitle,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{padding:"20px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.featuredDropEyebrow}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.featuredDropTitle}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:i.featuredDropSubtitle})]})})]})})]})})]})}):null}function Zx({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function ey({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function af({children:i,wrap:a="on",gap:l=12,align:c="center",justify:f="flex-start",style:p,responsiveGap:m}){const x=typeof l=="number"?`${l}px`:l,S=!!m,C=S?`cluster-${Math.random().toString(36).substr(2,9)}`:"";return r.jsxs(r.Fragment,{children:[S&&r.jsx("style",{children:`
          .${C} {
            display: flex;
            flex-direction: row;
            flex-wrap: ${a==="on"?"wrap":"nowrap"};
            gap: ${x};
            align-items: ${c};
            justify-content: ${f};
          }

          /* Tablet breakpoint */
          @media (max-width: 1024px) {
            .${C} {
              ${m!=null&&m.tablet?`gap: ${typeof m.tablet=="number"?`${m.tablet}px`:m.tablet};`:""}
            }
          }

          /* Mobile breakpoint */
          @media (max-width: 640px) {
            .${C} {
              ${m!=null&&m.mobile?`gap: ${typeof m.mobile=="number"?`${m.mobile}px`:m.mobile};`:""}
            }
          }
        `}),r.jsx("div",{className:S?C:void 0,style:S?p:{display:"flex",flexDirection:"row",flexWrap:a==="on"?"wrap":"nowrap",gap:x,alignItems:c,justifyContent:f,...p},children:i})]})}function ty(){const{heroMetaBadges:i}=Vo();return i.length===0?null:r.jsx(ot,{contain:!1,paddingTop:"24px",paddingBottom:"24px",background:"var(--card)",children:r.jsx(ge,{width:"wide",children:r.jsx(af,{wrap:"on",gap:12,align:"center",children:i.map(a=>r.jsx(it,{label:a,variant:"neutral",size:"md"},a))})})})}function ny(){const{featuredDrop:i}=Vo();return i?r.jsx(ot,{paddingTop:"56px",paddingBottom:"56px",background:"var(--background)",children:r.jsx(ge,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"48px",alignItems:"flex-start"},children:[r.jsx("div",{style:{flex:"0 0 45%"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.eyebrow}),r.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:i.title}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",maxWidth:"480px",margin:0},children:i.supporting}),r.jsx("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:i.badges.map(a=>r.jsx(it,{label:a,variant:"neutral",size:"md"},a))}),r.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[r.jsx(ry,{label:i.primaryCta}),r.jsx(oy,{label:i.secondaryCta})]})]})}),r.jsx("div",{style:{flex:"0 0 55%"},children:r.jsxs("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"560px",height:"360px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden"},children:[r.jsx("div",{style:{backgroundColor:"var(--muted)",height:"200px",width:"100%"},children:i.productImageUrl?r.jsx("img",{src:i.productImageUrl,alt:i.productImageAlt||i.productName,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{padding:"16px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.productName}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.productPrice})]}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:i.productCopy}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:i.featureLine}),r.jsx("div",{style:{marginTop:"2px"},children:r.jsx(it,{label:i.productBadge,variant:"accent",size:"sm"})})]})})]})})]})})}):null}function ry({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"#4338CA",color:"#FFFFFF",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function oy({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function iy(){return null}function sy(){return null}function ay(){return null}function ly(){return null}function uy(){const{socialProof:i}=Vo();return i?r.jsx(ot,{paddingTop:"56px",paddingBottom:"56px",background:"var(--card)",children:r.jsxs(ge,{children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"24px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.eyebrow}),r.jsx("h2",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"36px",lineHeight:"44px",fontWeight:"600",color:"var(--foreground)",margin:0},children:i.title}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"18px",lineHeight:"28px",fontWeight:"400",color:"var(--muted-foreground)",margin:0},children:i.supporting})]}),r.jsx("div",{style:{display:"flex",gap:"12px",marginBottom:"32px"},children:i.chips.map(a=>r.jsx(it,{label:a,variant:"neutral",size:"md"},a))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"32px"},children:i.testimonials.map(a=>r.jsx("div",{style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"220px",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",padding:"20px"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)"},children:a.name}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:a.role})]}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,flex:1},children:a.quote}),r.jsx("div",{children:r.jsx(it,{label:a.tag,variant:"neutral",size:"sm"})})]})},a.id))}),r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx(cy,{label:i.ctaLabel})})]})}):null}function cy({label:i}){return r.jsx("button",{style:{height:"44px",paddingLeft:"16px",paddingRight:"16px",borderRadius:"12px",backgroundColor:"var(--card)",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"1px solid var(--border)",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function dy(){return null}function fy(){return null}function py(){return null}function ye({width:i="100%",height:a="16px",borderRadius:l="8px",style:c,...f}){const p={width:i,height:a,borderRadius:l,background:"linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 37%, var(--skeleton-base) 63%)",backgroundSize:"400% 100%",animation:"vs-skeleton-shimmer 1.2s ease-in-out infinite"};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        @keyframes vs-skeleton-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `}),r.jsx("div",{"aria-hidden":"true",style:{...p,...c},...f})]})}function my(){return r.jsxs(Se,{gap:"0px",children:[r.jsx(ot,{paddingTop:"56px",paddingBottom:"48px",background:"var(--background)",children:r.jsx(ge,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:"48px"},children:[r.jsxs(Se,{gap:"16px",children:[r.jsx(ye,{width:"140px",height:"14px"}),r.jsx(ye,{width:"88%",height:"56px",borderRadius:"12px"}),r.jsx(ye,{width:"92%",height:"24px"}),r.jsx(ye,{width:"80%",height:"24px"}),r.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r.jsx(ye,{width:"136px",height:"44px",borderRadius:"12px"}),r.jsx(ye,{width:"136px",height:"44px",borderRadius:"12px"})]})]}),r.jsx(ye,{width:"100%",height:"420px",borderRadius:"16px"})]})})}),r.jsx(ot,{paddingTop:"48px",paddingBottom:"56px",background:"var(--background)",children:r.jsx(ge,{children:r.jsxs(Se,{gap:"16px",children:[r.jsx(ye,{width:"180px",height:"18px"}),r.jsx(ye,{width:"56%",height:"32px"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(i=>r.jsx(ye,{height:"240px",borderRadius:"16px"},i))})]})})})]})}function hy(){return r.jsx(ot,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsx(ge,{children:r.jsxs(Se,{gap:"16px",children:[r.jsx(ye,{width:"96px",height:"14px"}),r.jsx(ye,{width:"180px",height:"40px"}),r.jsx(ye,{width:"420px",height:"24px"}),r.jsx(ye,{width:"100%",height:"44px",borderRadius:"12px"}),r.jsx("div",{style:{display:"flex",gap:"12px"},children:[1,2,3,4].map(i=>r.jsx(ye,{width:"112px",height:"36px",borderRadius:"999px"},i))}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3,4,5,6].map(i=>r.jsx(ye,{height:"460px",borderRadius:"16px"},i))})]})})})}function gy(){return r.jsxs(Se,{gap:"0px",children:[r.jsx(ot,{paddingTop:"24px",paddingBottom:"16px",background:"var(--card)",children:r.jsx(ge,{children:r.jsx(ye,{width:"280px",height:"16px"})})}),r.jsx(ot,{paddingTop:"16px",paddingBottom:"32px",background:"var(--card)",children:r.jsx(ge,{children:r.jsxs(Se,{gap:"12px",children:[r.jsx(ye,{width:"120px",height:"14px"}),r.jsx(ye,{width:"52%",height:"36px"}),r.jsx(ye,{width:"72%",height:"22px"})]})})}),r.jsx(ot,{paddingTop:"24px",paddingBottom:"48px",background:"var(--background)",children:r.jsx(ge,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 420px",gap:"48px"},children:[r.jsx(ye,{width:"100%",height:"560px",borderRadius:"16px"}),r.jsx(ye,{width:"100%",height:"560px",borderRadius:"16px"})]})})}),r.jsx(ot,{paddingTop:"48px",paddingBottom:"56px",background:"var(--card)",children:r.jsx(ge,{children:r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[1,2,3].map(i=>r.jsx(ye,{height:"220px",borderRadius:"16px"},i))})})})]})}function xy(){return r.jsx(ot,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:r.jsx(ge,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.8fr 1fr",gap:"24px",alignItems:"start"},children:[r.jsxs(Se,{gap:"20px",children:[r.jsx(ye,{width:"180px",height:"38px"}),[1,2].map(i=>r.jsx(ye,{width:"100%",height:"164px",borderRadius:"16px"},i)),r.jsx(ye,{width:"100%",height:"300px",borderRadius:"16px"})]}),r.jsxs(Se,{gap:"12px",children:[r.jsx(ye,{width:"100%",height:"260px",borderRadius:"16px"}),r.jsx(ye,{width:"100%",height:"48px",borderRadius:"12px"}),r.jsx(ye,{width:"100%",height:"48px",borderRadius:"12px"})]})]})})})}function yy(){const{isLoading:i}=Vo();return i?r.jsx(my,{}):r.jsxs(r.Fragment,{children:[r.jsx(vy,{}),r.jsx(wy,{})]})}function vy(){return r.jsxs(Se,{gap:"0px",children:[r.jsx(Jx,{}),r.jsx(ty,{})]})}function wy(){return r.jsxs(Se,{gap:"0px",children:[r.jsx(ny,{}),r.jsx(iy,{}),r.jsx(sy,{}),r.jsx(ay,{}),r.jsx(ly,{}),r.jsx(uy,{}),r.jsx(dy,{}),r.jsx(fy,{}),r.jsx(py,{})]})}function ky(){return r.jsx(ot,{paddingTop:"48px",paddingBottom:"64px",background:"var(--background)",children:r.jsxs(ge,{children:[r.jsx(Sy,{}),r.jsx(jy,{})]})})}function Sy(){return r.jsxs(Se,{gap:"0px",style:{marginBottom:"24px"},children:[r.jsx(by,{}),r.jsx(Cy,{})]})}function jy(){return r.jsxs(Se,{gap:"16px",children:[r.jsx(Ey,{}),r.jsx(Ty,{}),r.jsx(Iy,{}),r.jsx(_y,{}),r.jsx(Fy,{}),r.jsx(Ny,{}),r.jsx(Ry,{}),r.jsx(zy,{})]})}function by(){return null}function Cy(){return null}function Ey(){return null}function Ty(){return null}function Iy(){return null}function _y(){return null}function Fy(){return null}function Ny(){return null}function Ry(){return null}function zy(){return null}const Ay="http://localhost:3001",ss="/api/shopify/admin/product-metadata",Py=i=>`${(ss.startsWith("http://")||ss.startsWith("https://")?ss:`${Ay.replace(/\/+$/,"")}/${ss.replace(/^\/+/,"")}`).replace(/\/+$/,"")}/${encodeURIComponent(i)}`;async function Ly(i){const a=await fetch(Py(i),{method:"GET",credentials:"include"});if(!a.ok)throw a.status===429?new Ne("Rate limit exceeded","RATE_LIMIT"):new Ne(`HTTP ${a.status}`,"HTTP_ERROR");return(await a.json()).product??null}const Pr={productHeader:{badge:"",title:"",vendor:"",sku:"",shareUrl:"",shareLabel:""},productMain:{gallery:{images:[],zoomLabel:"",prevLabel:"",nextLabel:""},buyBox:{variantId:null,badge:"",name:"",descriptor:"",price:"",compareAtPrice:null,stock:"",isInStock:!1,features:[],reassurancePoints:[],primaryCta:"Add to cart",secondaryCta:"Buy now",microLine:"",inBoxTitle:"",inBoxLine:""}},keyBenefits:{title:"",cards:[]},featureDeepDive:{overviewTitle:"",overviewHtml:"",storyTitle:"",storyHtml:"",buyingGuideTitle:"",buyingGuideHtml:"",curatedFor:"",notFor:""},deliveryAndReturns:[],reviews:{title:"",supporting:"",averageLabel:"",averageValue:"",totalReviewsLabel:"",verifiedLabel:"",useCasePrefix:"",writeReviewLabel:"Write a review",loadMoreLabel:"Load more",breakdown:[],tags:[],items:[]},relatedProducts:{title:"Complete your setup",viewAllLabel:"View all",addToCartLabel:"Add to cart",items:[]},specsAndInBox:{specificationsTitle:"",specifications:[],inBoxTitle:"",inBoxItems:[],inBoxBadge:"",productDetailsTitle:"",productDetails:[]},faq:{title:"",items:[]},stickyCtaRail:{variantId:null,name:"",price:"",stockLabel:"",isInStock:!1,shippingLabel:"",reassurancePoints:[],addToCartLabel:"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}},cs="all",Dy="All",lf=i=>i.trim().toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),Oy="https://thevibestation.com".replace(/\/+$/,""),My=["capo","tuner","string","pick","holder","gig bag","bundle","essentials"],uf=i=>{var l,c,f,p;const a=(c=(l=i.variants)==null?void 0:l.edges.find(m=>{const x=m.node;return x.availableForSale&&(typeof x.quantityAvailable!="number"||x.quantityAvailable>0)}))==null?void 0:c.node;return(a==null?void 0:a.id)||((p=(f=i.variants)==null?void 0:f.edges[0])==null?void 0:p.node.id)||null},cf=i=>{var a,l;return((l=(a=i.variants)==null?void 0:a.edges[0])==null?void 0:l.node)??null},ds=(i,a)=>{if(!i||!a)return"₹—";const l=Number.parseFloat(i);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:a,maximumFractionDigits:0}).format(l):`${a} ${i}`},Dr=i=>i?i.replace(/<br\s*\/?>/gi,`
`).replace(/<\/(p|div|li|h[1-6])>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").trim():"",mn=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),hn=i=>i?i.replace(/\r\n?/g,`
`).replace(/\\r\\n|\\r/g,`
`).replace(/\\n/g,`
`).replace(/\\t/g," ").replace(/&nbsp;/gi," ").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim():"",ps=i=>i.replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,a=>a.toUpperCase()),By=i=>/taxonomy\s*reference/i.test(i),Uy=i=>i.split(">").map(a=>a.trim()).filter(Boolean).at(-1)||i.trim(),as=(i,a)=>{const l=hn(a).replace(/\s*\n+\s*/g," ").replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim();return l?/^label$/i.test(i)?l:/^color$/i.test(i)?`(${l})`:l:""},jd=i=>i.replace(/\[*"?gid:\/\/shopify\/TaxonomyValue\/\d+"?\]*/gi,"").replace(/\s*\|\s*/g," | ").replace(/\s*,\s*\|/g," |").replace(/\|\s*,\s*/g,"| ").replace(/\s*,\s*,+/g,", ").replace(/\(\s*,/g,"(").replace(/,\s*\)/g,")").replace(/\s{2,}/g," ").replace(/^,\s*|\s*,\s*$/g,"").trim(),$y=i=>{var p;const a=i.fields.filter(m=>m.value&&m.value.trim().length>0&&!By(m.key));if(a.length===0)return((p=i.displayName)==null?void 0:p.trim())||"";const l=a.find(m=>/^label$/i.test(m.key)),c=a.find(m=>/^color$/i.test(m.key)),f=a.filter(m=>!/^label$/i.test(m.key)&&!/^color$/i.test(m.key));if(l){const m=[as(l.key,l.value??""),...c?[as(c.key,c.value??"")]:[]].filter(Boolean);if(f.length===0&&m.length>0)return m.join(" ");const x=f.map(S=>as(S.key,S.value??"")).filter(Boolean);return[...m,...x].join(", ")}return a.map(m=>as(m.key,m.value??"")).filter(Boolean).join(", ")},Hy=i=>hn(i).replace(/<br\s*\/?>/gi,`
`).split(`
`).map(a=>Dr(a).trim()).filter(Boolean),sl=i=>Hy(i).map(a=>{const l=a.match(/^([^:]+):\s*(.+)$/);return l?{label:ps(l[1]),value:hn(l[2]).replace(/\s*\n+\s*/g," ").trim()}:null}).filter(a=>!!a&&a.value.length>0),bd=i=>{const a=hn(i);return a?a.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(c=>c.trim()).filter(Boolean).map(c=>{const f=c.split(`
`).map(S=>Dr(S).trim()).filter(Boolean);if(f.length===0)return"";if(f.length>1&&f[0].endsWith(":")){const S=`<p><strong>${mn(f[0])}</strong></p>`,C=f.slice(1).map(j=>`<li>${mn(j)}</li>`).join("");return C?`${S}<ul>${C}</ul>`:S}const p=[];let m=[];const x=()=>{m.length!==0&&(p.push(`<p>${mn(m.join(" "))}</p>`),m=[])};return f.forEach(S=>{const C=S.match(/^([^:]{1,60}):\s*(.+)$/);if(C){x(),p.push(`<p><strong>${mn(C[1].trim())}:</strong> ${mn(C[2].trim())}</p>`);return}m.push(S)}),x(),p.join("")}).join(""):""},Wy=i=>{const a=i.trim();return a.startsWith("[")||a.includes("•")||a.includes("|")},df=i=>{const a=typeof i.type=="string"?i.type:"",l=typeof i.value=="string"?mn(i.value):"",c=Array.isArray(i.children)?i.children.map(f=>f&&typeof f=="object"?df(f):"").join(""):"";switch(a){case"root":return c;case"paragraph":return`<p>${c}</p>`;case"heading":return`<h3>${c}</h3>`;case"text":return l;case"text_bold":return`<strong>${c||l}</strong>`;case"text_italic":return`<em>${c||l}</em>`;case"list":return`<ul>${c}</ul>`;case"list-item":return`<li>${c}</li>`;case"link":return typeof i.url=="string"?`<a href="${mn(i.url)}">${c}</a>`:c;default:return c||l}},al=i=>{if(!i)return"";const a=hn(i);if(Wy(a)){const l=ms(a);if(l.length>0)return`<ul>${l.map(c=>`<li>${mn(c)}</li>`).join("")}</ul>`}if(a.includes("<"))return a;try{const l=JSON.parse(a);if(l&&typeof l=="object")return df(l)}catch{return bd(a)}return bd(a)},ms=i=>{const a=hn(i);if(!a)return[];const l=c=>c.replace(/<br\s*\/?>/gi,`
`).split(/\n|,|\||•/).map(f=>Dr(f).trim()).filter(Boolean);try{const c=JSON.parse(a);if(Array.isArray(c))return c.flatMap(f=>typeof f=="string"?l(f):[]).filter(Boolean);if(typeof c=="string")return l(c)}catch{return l(a)}return[]},Vy=i=>{const a=hn(i);if(!a)return[];try{const l=JSON.parse(a);if(l&&typeof l=="object"&&!Array.isArray(l)){const c=Object.entries(l).flatMap(([f,p])=>{const m=sl(`${ps(f)}: ${String(p)}`);return m.length>0?m:[{label:ps(f),value:hn(String(p)).replace(/\s*\n+\s*/g," ").trim()}]}).filter(f=>f.value.length>0);if(c.length>0)return c}}catch{return sl(a)}return sl(a)},qy=i=>{if(!i)return[];try{const a=JSON.parse(i);if(Array.isArray(a))return a.map(l=>{if(!l||typeof l!="object")return null;const c=l,f=typeof c.question=="string"?c.question.trim():"",p=typeof c.answer=="string"?c.answer.trim():"";return f&&p?{question:f,answer:p}:null}).filter(l=>!!l)}catch{return i.replace(/<br\s*\/?>/gi,`
`).split(/\n{2,}/).map(l=>Dr(l)).filter(Boolean).map(l=>{const[c,...f]=l.split(`
`),p=f.join(" ").trim();return!c||!p?null:{question:c.replace(/^Q[:\-]?\s*/i,""),answer:p.replace(/^A[:\-]?\s*/i,"")}}).filter(l=>!!l)}return[]},ml=(i,a="Yes",l="No")=>{if(!i)return"";const c=i.trim().toLowerCase();return["true","yes","available","1"].includes(c)?a:["false","no","not available","0"].includes(c)?l:i.trim()},ff=()=>{if(typeof window>"u")return null;const i=window.location.pathname.match(/\/products\/([^/]+)/);return(i==null?void 0:i[1])??null},pf=i=>`${Oy}/products/${i.handle}`,Yy=i=>{var c;if(i.availableForSale===!1)return"Out of stock";if(typeof i.totalInventory=="number")return i.totalInventory>0?`In stock (${i.totalInventory} available)`:"Out of stock";const a=cf(i);return a&&typeof a.quantityAvailable=="number"?a.quantityAvailable>0?`In stock (${a.quantityAvailable} available)`:"Out of stock":((c=i.variants)==null?void 0:c.edges.some(f=>{const p=f.node;return p.availableForSale===!1?!1:typeof p.quantityAvailable=="number"?p.quantityAvailable>0:p.availableForSale===!0}))?"In stock":"Out of stock"},Qy=i=>{var l;return ms((l=i.whyDifferent)==null?void 0:l.value).slice(0,3).map((c,f)=>({id:`${i.handle}-feature-${f}`,badge:`0${f+1}`,title:c,description:"",footer:""}))},Ky=i=>{const a=`${i.title} ${i.tags.join(" ")}`.toLowerCase();return My.some(l=>a.includes(l))?"Pair it with these":"Complete your setup"},Xy=i=>{var c;const a={averageValue:"—",totalReviewsLabel:"No reviews yet",breakdown:[],tags:[],items:[]},l=(c=i.reviewSummary)==null?void 0:c.value;if(!l)return a;try{const f=JSON.parse(l),p=typeof f.average=="number"?f.average.toFixed(1):"—",m=typeof f.count=="number"?f.count:0,x=Array.isArray(f.breakdown)?f.breakdown:[],S=Array.isArray(f.items)?f.items:[],C=Array.isArray(f.tags)?f.tags:[];return{averageValue:p,totalReviewsLabel:`${m} review${m===1?"":"s"}`,breakdown:x.map(j=>{if(!j||typeof j!="object")return null;const h=j,w=typeof h.stars=="number"?h.stars:0,I=typeof h.count=="number"?h.count:0;return w>0?{stars:w,count:I,label:`${w} star`}:null}).filter(j=>!!j).sort((j,h)=>h.stars-j.stars),tags:C.filter(j=>typeof j=="string"),items:S.map((j,h)=>{if(!j||typeof j!="object")return null;const w=j;return{id:typeof w.id=="string"?w.id:`review-${h}`,name:typeof w.name=="string"?w.name:"Verified buyer",role:typeof w.role=="string"?w.role:"Customer",quote:typeof w.quote=="string"?w.quote:"",useCase:typeof w.useCase=="string"?w.useCase:"General use",rating:typeof w.rating=="number"?w.rating:5,tags:Array.isArray(w.tags)?w.tags.filter(I=>typeof I=="string"):[],verified:w.verified!==!1}}).filter(j=>!!j&&j.quote.length>0)}}catch{return a}},Gy=i=>{var l,c,f,p,m,x,S;const a=[(l=i.packCount)==null?void 0:l.value,(c=i.bestFor)==null?void 0:c.value,(f=i.dispatchTime)==null?void 0:f.value,(p=i.deliveryWindow)==null?void 0:p.value,(m=i.returnsPolicy)==null?void 0:m.value,ml((x=i.codAvailable)==null?void 0:x.value,"COD available","COD unavailable"),ml((S=i.secureCheckout)==null?void 0:S.value,"Secure checkout","")].map(C=>C==null?void 0:C.trim()).filter(C=>!!C);return Array.from(new Set(a)).slice(0,6)},Jy=i=>{var l,c,f;const a=cf(i);return[{label:"SKU",value:(a==null?void 0:a.sku)||"Available on request"},{label:"Brand",value:i.vendor||"Vibe Station"},{label:"Country of origin",value:((l=i.countryOfOrigin)==null?void 0:l.value)||""},{label:"GST invoice",value:ml((c=i.gstInvoice)==null?void 0:c.value,"Available","Not specified")||"Not specified"},{label:"Care / storage",value:Dr((f=i.careInstructions)==null?void 0:f.value)},{label:"Shareable short URL",value:pf(i)}].filter(p=>p.value.trim().length>0)},mf=i=>{const a=i==null?void 0:i.trim();if(!a)return[];try{const l=JSON.parse(a);if(Array.isArray(l))return l.map(c=>typeof c=="string"?c.trim():"").filter(c=>c.length>0)}catch{}return a.split(/[\n,]+/).map(l=>l.trim()).filter(Boolean)},Cd=i=>{var a;return Array.from(new Set([...mf((a=i.categories)==null?void 0:a.value),...i.tags.map(l=>l.trim()).filter(Boolean)]))},Ed=i=>i.map(a=>lf(a)).filter(Boolean),Zy=async i=>{const a=Cd(i),l=new Set(Ed(a)),c=new Set(a.map(p=>p.toLowerCase()));return l.size===0&&c.size===0?[]:(await Uo({first:50})).edges.map(p=>p.node).filter(p=>p.id!==i.id).map(p=>{const m=Cd(p),x=Ed(m),S=m.filter(j=>c.has(j.toLowerCase())).length,C=x.filter(j=>l.has(j)).length;return{candidate:p,score:S+C}}).filter(p=>p.score>0).sort((p,m)=>m.score-p.score).slice(0,20).map(p=>p.candidate)},e0=i=>(i??[]).flatMap(a=>{const l=ps(a.key),c=a.reference?[a.reference]:[],f=Array.isArray(a.references)?a.references:[],p=[...c,...f].map(S=>$y(S)).filter(Boolean),m=jd(hn(a.value).replace(/\s*\n+\s*/g," ").trim()),x=jd(p.length>0?p.join(" | "):m);return x.length>0?[{label:l,value:x}]:[]}),t0=(i,a)=>{var S,C,j,h;const l=Vy((S=i.specifications)==null?void 0:S.value),c=mf((C=i.categories)==null?void 0:C.value),f=((j=a==null?void 0:a.category)==null?void 0:j.fullName)||((h=a==null?void 0:a.category)==null?void 0:h.name)||"",p=Array.from(new Set([...c,...f?[f]:[]].map(w=>Uy(w)).filter(Boolean))),m=p.length>0?[{label:"Category",value:p.join(", ")}]:[],x=e0(a==null?void 0:a.shopifyMetafields);return[...m,...x,...l].filter((w,I,F)=>{const R=`${w.label.toLowerCase()}::${w.value.toLowerCase()}`;return F.findIndex(P=>`${P.label.toLowerCase()}::${P.value.toLowerCase()}`===R)===I})},n0=(i,a)=>a.filter(l=>l.id!==i.id&&l.handle!==i.handle).slice(0,6).map(l=>{var f,p,m;const c=gs(l);return{id:l.handle,variantId:uf(l),badge:((f=l.badge)==null?void 0:f.value)||l.tags[0]||"Curated",name:l.title,descriptor:((p=l.shortDescription)==null?void 0:p.value)||l.description||"Curated recommendation",featureLine:((m=l.featureLine)==null?void 0:m.value)||l.tags.slice(0,3).join(" · ")||"Pairs well with this setup",price:ds(l.priceRange.minVariantPrice.amount,l.priceRange.minVariantPrice.currencyCode),imageUrl:c==null?void 0:c.url,imageAlt:(c==null?void 0:c.altText)||l.title}}),r0=()=>Pr.reviews,o0=({product:i,adminMetadata:a,relatedProducts:l})=>{var se,fe,K,$,B,te,ce,Ie,Le,Be,we,Re,ze,Ke,Ce,ne,ue,O,q,U,v,_,W,J,oe,G,de,ae,pe,Ae,tn,yn;const c=((fe=(se=i.variants)==null?void 0:se.edges[0])==null?void 0:fe.node)??null,f=al((K=i.whyDifferent)==null?void 0:K.value),p=al(($=i.buyingGuide)==null?void 0:$.value),m=al(i.description)||i.descriptionHtml||`<p>${mn(i.description)}</p>`,x=t0(i,a),S=ms((B=i.whatsInBox)==null?void 0:B.value),C=ms((te=i.bulletFeatures)==null?void 0:te.value),j=Qy(i),h=Yy(i),w=h.toLowerCase().startsWith("in stock"),I=uf(i),F=Xy(i),R=Gy(i),P=pf(i);return{productHeader:{badge:((ce=i.badge)==null?void 0:ce.value)||"Curated pick",title:i.title,vendor:i.vendor||"Vibe Station",sku:(c==null?void 0:c.sku)||"—",shareUrl:P,shareLabel:"Shareable short URL"},productMain:{gallery:{images:i.images.edges.map((kt,Qt)=>({id:kt.node.id||`${i.handle}-${Qt}`,url:kt.node.url,altText:kt.node.altText||`${i.title} image ${Qt+1}`}))||[],zoomLabel:"Zoom",prevLabel:"Prev",nextLabel:"Next"},buyBox:{variantId:I,badge:((Ie=i.badge)==null?void 0:Ie.value)||"Curated pick",name:i.title,descriptor:((Le=i.subtitle)==null?void 0:Le.value)||((Be=i.shortDescription)==null?void 0:Be.value)||Dr(i.descriptionHtml)||i.description,price:ds(i.priceRange.minVariantPrice.amount,i.priceRange.minVariantPrice.currencyCode),compareAtPrice:(we=i.compareAtPriceRange)!=null&&we.minVariantPrice?ds(i.compareAtPriceRange.minVariantPrice.amount,i.compareAtPriceRange.minVariantPrice.currencyCode):null,stock:h,isInStock:w,features:C,reassurancePoints:R,primaryCta:((Re=i.ctaLabel)==null?void 0:Re.value)||"Add to cart",secondaryCta:((ze=i.ctaSubtext)==null?void 0:ze.value)||"Buy now",microLine:((Ke=i.shippingInfo)==null?void 0:Ke.value)||[(Ce=i.dispatchTime)==null?void 0:Ce.value,(ne=i.supportResponseTime)==null?void 0:ne.value,(ue=i.deliveryWindow)==null?void 0:ue.value].filter(Boolean).join(" · ")||"Shipping calculated at checkout · Clear returns · Responsive support",inBoxTitle:"What's in the box",inBoxLine:S.join(" · ")}},keyBenefits:{title:"Why it feels different",cards:j},featureDeepDive:{overviewTitle:"Product overview",overviewHtml:m,storyTitle:"Why this made the cut",storyHtml:f,buyingGuideTitle:"Buying guide",buyingGuideHtml:p,curatedFor:((O=i.curatedFor)==null?void 0:O.value)||((q=i.bestFor)==null?void 0:q.value)||"Players comparing feel, grip, and attack quickly.",notFor:((U=i.notFor)==null?void 0:U.value)||"Players who already know they only want one exact gauge."},deliveryAndReturns:[{id:"dispatch",badge:"Dispatch",title:"Estimated dispatch",description:((v=i.deliveryInfo)==null?void 0:v.value)||"",footer:((_=i.deliveryWindow)==null?void 0:_.value)||""},{id:"returns",badge:"Returns",title:"Returns & replacements",description:((W=i.returnsPolicy)==null?void 0:W.value)||"",footer:((J=i.replacementPolicy)==null?void 0:J.value)||""},{id:"support",badge:"Support",title:"Support response",description:((oe=i.supportInfo)==null?void 0:oe.value)||"",footer:((G=i.supportResponseTime)==null?void 0:G.value)||""}].filter(kt=>kt.description.trim().length>0||kt.footer.trim().length>0),reviews:{...r0(),supporting:(de=i.reviewSummary)!=null&&de.value?"Real review summary pulled from Shopify metafields.":"Add custom.reviews in Shopify to populate rating, review count, tags, and breakdown.",averageLabel:F.averageValue==="—"?"No rating yet":`${F.averageValue} / 5`,averageValue:F.averageValue,totalReviewsLabel:F.totalReviewsLabel,breakdown:F.breakdown,tags:F.tags,items:F.items},relatedProducts:{...Pr.relatedProducts,title:Ky(i),items:n0(i,l)},specsAndInBox:{specificationsTitle:"Specifications",specifications:x,inBoxTitle:"In the box",inBoxItems:S,inBoxBadge:((ae=i.packCount)==null?void 0:ae.value)||"No extras required",productDetailsTitle:"Product details",productDetails:Jy(i)},faq:{title:"FAQ",items:qy((pe=i.faq)==null?void 0:pe.value)},stickyCtaRail:{variantId:I,name:i.title,price:ds(i.priceRange.minVariantPrice.amount,i.priceRange.minVariantPrice.currencyCode),stockLabel:h,isInStock:w,shippingLabel:((Ae=i.deliveryWindow)==null?void 0:Ae.value)||((tn=i.shippingInfo)==null?void 0:tn.value)||"Shipping calculated at checkout",reassurancePoints:R,addToCartLabel:((yn=i.ctaLabel)==null?void 0:yn.value)||"Add to cart",shareLabel:"Share",helpLabel:"Need help?"}}};let cr=Pr,Lo=!1,_o=null,Do=null,Ao=!1;const i0=async i=>{const a=i??ff();return _o&&a===Do||(_o=(async()=>{try{const l=a;if(!l){cr=Pr,Ao=!1,Lo=!0,Do=null;return}Do=l;const[c,f]=await Promise.all([Ym(l),Ly(l).catch(m=>(console.error("Failed to load public admin product metadata",m),null))]);if(!c){cr=Pr,Ao=!1,Lo=!0;return}const p=await Zy(c).catch(()=>[]);cr=o0({product:c,adminMetadata:f,relatedProducts:p}),Ao=!0}catch(l){cr=Pr,Ao=!1,console.error("Failed to load product detail from Shopify",l)}finally{Lo=!0,_o=null}})()),_o};function Yt(){const i=ff(),[a,l]=N.useState(cr),[c,f]=N.useState(!Lo||Do!==i);return N.useEffect(()=>{let p=!1;return Lo&&Do===i?(l(cr),f(!1),()=>{p=!0}):(f(!0),i0(i).then(()=>{p||(l(cr),f(!1))}),()=>{p=!0})},[i]),{...a,hasProduct:Ao,isLoading:c}}function s0(){const{productHeader:i}=Yt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"product-title-block",children:[r.jsxs("div",{className:"product-title-badge-row",children:[r.jsx(it,{label:i.badge,variant:"accent",size:"sm"}),r.jsx("span",{className:"product-title-vendor",children:i.vendor})]}),r.jsx("h1",{className:"product-title-h1",children:i.title}),r.jsxs("div",{className:"product-title-meta",children:[r.jsxs("span",{children:["SKU: ",i.sku]}),r.jsxs("span",{children:[i.shareLabel,": ",i.shareUrl]})]})]})]})}function a0(){const{productHeader:i}=Yt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("nav",{"aria-label":"Breadcrumb",children:r.jsxs("ol",{className:"breadcrumb-nav",children:[r.jsx("li",{children:r.jsx("a",{href:"/",className:"breadcrumb-link",children:"Home"})}),r.jsx("li",{className:"breadcrumb-separator",children:"/"}),r.jsx("li",{children:r.jsx("a",{href:"/products",className:"breadcrumb-link",children:"Products"})}),r.jsx("li",{className:"breadcrumb-separator",children:"/"}),r.jsx("li",{className:"breadcrumb-current",children:i.title})]})})]})}const l0={sm:"12px",md:"16px",lg:"20px"};function u0(i){switch(i){case"subtle":return{backgroundColor:"var(--muted)",border:"1px solid var(--border)",boxShadow:"none"};case"outline":return{backgroundColor:"transparent",border:"1px solid var(--border)",boxShadow:"none"};case"elevated":default:return{backgroundColor:"var(--card)",border:"1px solid var(--border)",boxShadow:"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F"}}}function He({children:i,mediaSlot:a,footerSlot:l,variant:c="elevated",padding:f="md",width:p="100%",height:m}){const x=u0(c),S=l0[f];return r.jsxs("div",{style:{...x,borderRadius:"16px",width:p,height:m,overflow:"hidden",display:"flex",flexDirection:"column"},children:[a,i?r.jsx("div",{style:{padding:S},children:i}):null,l?r.jsx("div",{style:{padding:S,paddingTop:"0"},children:l}):null]})}function c0({children:i}){return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",position:"relative"},children:i})}function d0({children:i}){return r.jsx("label",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"600",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function f0({children:i}){return r.jsx("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:i})}function p0({placeholder:i,value:a}){return r.jsx("input",{type:"text",placeholder:i||"Enter text...",value:a,style:{width:"100%",border:"none",outline:"none",background:"transparent",fontSize:"14px",lineHeight:"20px",fontWeight:"400",fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",padding:0}})}function m0({children:i,error:a}){return r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:a?"var(--destructive)":"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:i})}function h0({label:i,placeholder:a,helperText:l,error:c,disabled:f,size:p="md"}){const m=p==="sm"?"36px":"44px",x=p==="sm"?"12px":"14px",S=p==="sm"?"10px":"12px";let C="var(--border)";return c&&(C="var(--destructive)"),r.jsxs(c0,{children:[i&&r.jsx(d0,{children:i}),r.jsx(f0,{children:r.jsx("div",{style:{width:"100%",height:m,display:"flex",alignItems:"center",paddingLeft:x,paddingRight:x,backgroundColor:"var(--card)",border:`1px solid ${C}`,borderRadius:S,opacity:f?.4:1,transition:"border-color 150ms ease"},children:r.jsx(p0,{placeholder:a})})}),l&&r.jsx("div",{style:{opacity:f?.4:1},children:r.jsx(m0,{error:c,children:l})})]})}function hf(){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(h0,{label:"Delivery pincode",placeholder:"110001",helperText:"Enter your 6-digit pincode."}),r.jsx("div",{children:r.jsx(We,{variant:"secondary",size:"sm",label:"Check delivery"})})]})}function g0(){return r.jsxs("div",{className:"product-main",children:[r.jsx(x0,{}),r.jsx(y0,{})]})}function x0(){const{productMain:i}=Yt(),[a,l]=N.useState(0),c=i.gallery.images,f=c[a],p=()=>{c.length!==0&&l(x=>x===0?c.length-1:x-1)},m=()=>{c.length!==0&&l(x=>(x+1)%c.length)};return r.jsxs("div",{className:"product-main__gallery",children:[r.jsx(He,{variant:"elevated",height:"560px",mediaSlot:r.jsxs("div",{className:"product-main__gallery-frame",children:[f?r.jsx("img",{className:"product-main__gallery-image",src:f.url,alt:f.altText}):r.jsx("div",{className:"product-main__gallery-placeholder"}),r.jsx("div",{className:"product-main__gallery-badge",children:r.jsx(it,{label:i.gallery.zoomLabel,variant:"neutral",size:"sm"})}),r.jsxs("div",{className:"product-main__gallery-actions",children:[r.jsx(We,{variant:"ghost",size:"sm",label:i.gallery.prevLabel,onClick:p}),r.jsx(We,{variant:"ghost",size:"sm",label:i.gallery.nextLabel,onClick:m})]})]})}),r.jsx("div",{className:"product-main__thumbnail-row",children:c.length>0?c.map((x,S)=>r.jsx("button",{className:`product-main__thumbnail-button${S===a?" product-main__thumbnail-button--active":""}`,type:"button",onClick:()=>l(S),children:r.jsx("img",{className:"product-main__thumbnail-image",src:x.url,alt:x.altText})},x.id)):[1,2,3,4].map(x=>r.jsx("div",{className:`product-main__thumbnail-placeholder${x===1?" product-main__thumbnail-placeholder--active":""}`},x))})]})}function y0(){const{addItem:i}=qn(),{productMain:a}=Yt(),l=a.buyBox.isInStock;return r.jsx("div",{className:"product-main__buy-box",children:r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"product-main__buy-box-content",children:[r.jsx("div",{className:"product-main__badge-row",children:r.jsx(it,{label:a.buyBox.badge,variant:"accent",size:"sm"})}),r.jsx("h2",{className:"product-main__title",children:a.buyBox.name}),r.jsx("div",{className:"product-main__descriptor",children:a.buyBox.descriptor}),r.jsxs("div",{className:"product-main__price-row",children:[r.jsx("h3",{className:"product-main__price",children:a.buyBox.price}),r.jsxs("div",{className:"product-main__stock-column",children:[a.buyBox.compareAtPrice?r.jsx("span",{className:"product-main__compare-price",children:a.buyBox.compareAtPrice}):null,r.jsx("span",{className:`product-main__stock${l?" product-main__stock--in-stock":" product-main__stock--out-of-stock"}`,children:a.buyBox.stock})]})]}),r.jsx(hf,{}),a.buyBox.reassurancePoints.length>0?r.jsx("div",{className:"product-main__reassurance-list",children:a.buyBox.reassurancePoints.map(c=>r.jsxs("div",{className:"product-main__reassurance-item",children:[r.jsx("div",{className:"product-main__reassurance-icon",children:r.jsx(Gd,{className:"product-main__reassurance-check",size:12,strokeWidth:3})}),r.jsx("div",{className:"product-main__reassurance-text",children:c})]},c))}):null,r.jsxs("div",{className:"product-main__actions",children:[r.jsx(We,{variant:"primary",size:"lg",label:a.buyBox.primaryCta,disabled:!l||!a.buyBox.variantId,onClick:()=>{a.buyBox.variantId&&i(a.buyBox.variantId)}}),r.jsx(We,{variant:"secondary",size:"lg",label:a.buyBox.secondaryCta})]}),r.jsx("div",{className:"product-main__micro-line",children:a.buyBox.microLine})]})})})}function v0(){const{deliveryAndReturns:i}=Yt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"delivery-returns-container",children:[r.jsx("h3",{className:"delivery-returns-title",children:"Delivery & Returns"}),r.jsx("div",{className:"delivery-returns-cards",children:i.map(a=>r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"delivery-card-content",children:[r.jsxs("div",{className:"delivery-card-header",children:[r.jsx(it,{label:a.badge,variant:"neutral",size:"sm"}),r.jsx("h4",{className:"delivery-card-title",children:a.title})]}),r.jsx("div",{className:"delivery-card-description",children:a.description}),a.footer?r.jsx("div",{className:"delivery-card-footer",children:a.footer}):null]})},a.id))})]})]})}function w0(){const{featureDeepDive:i}=Yt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"feature-deep-dive-container",children:[r.jsx("div",{className:"feature-deep-dive-title-wrapper",children:r.jsx("h3",{className:"feature-deep-dive-title",children:"Product Deep Dive"})}),r.jsxs("div",{className:"feature-deep-dive-grid",children:[r.jsxs("div",{className:"feature-deep-dive-main",children:[r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",children:[r.jsxs("div",{className:"feature-card-header",children:[r.jsx(Jd,{size:20,style:{color:"var(--primary)"}}),r.jsx("h4",{className:"feature-card-title",children:i.overviewTitle})]}),r.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:i.overviewHtml}})]})}),r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",children:[r.jsx("h4",{className:"feature-card-title",children:i.buyingGuideTitle}),r.jsx("div",{className:"feature-card-html",dangerouslySetInnerHTML:{__html:i.buyingGuideHtml}})]})}),i.storyHtml?r.jsx(He,{variant:"subtle",padding:"lg",children:r.jsxs("div",{className:"feature-card-content",style:{gap:"12px"},children:[r.jsx("div",{className:"feature-story-badge",children:r.jsx("h4",{className:"feature-story-title",children:i.storyTitle})}),r.jsx("div",{className:"feature-story-html",dangerouslySetInnerHTML:{__html:i.storyHtml}})]})}):null]}),r.jsxs("div",{className:"feature-deep-dive-sidebar",children:[r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Kh,{size:18,style:{color:"var(--success-foreground)"}}),r.jsx(it,{label:"Perfect for",variant:"accent",size:"sm"})]}),r.jsx("div",{className:"feature-perfect-for",children:i.curatedFor})]})}),i.notFor?r.jsx(He,{variant:"subtle",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(it,{label:"Not ideal for",variant:"neutral",size:"sm"}),r.jsx("div",{className:"feature-not-for",children:i.notFor})]})}):null,r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Wo,{size:16,style:{color:"var(--primary)"}}),r.jsx("div",{className:"quick-info-title",children:"Quick Info"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingTop:"4px"},children:[r.jsxs("div",{children:[r.jsx("div",{className:"quick-info-label",children:"Protection Level"}),r.jsx("div",{className:"quick-info-value",children:"10mm Padding"})]}),r.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[r.jsx("div",{className:"quick-info-label",children:"Water Resistant"}),r.jsx("div",{className:"quick-info-value",children:"Light rain protection"})]}),r.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"8px"},children:[r.jsx("div",{className:"quick-info-label",children:"Compatibility"}),r.jsx("div",{className:"quick-info-value",children:"Most acoustic & electric"})]})]})]})})]})]})]})]})}function k0(){const{keyBenefits:i}=Yt();if(i.cards.length===0)return null;const a=[bg,Wo,Ng];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs(Se,{direction:"vertical",gap:24,children:[r.jsx("div",{className:"key-benefits-title-container",children:r.jsx("h3",{className:"key-benefits-title",children:i.title})}),r.jsx("div",{className:"key-benefits-grid",children:i.cards.map((l,c)=>{const f=a[c%a.length];return r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs(Se,{direction:"vertical",gap:16,style:{alignItems:"flex-start"},children:[r.jsx("div",{className:"key-benefit-icon",children:r.jsx(f,{size:24})}),r.jsx("div",{className:"key-benefit-badge",children:l.badge}),r.jsx("h4",{className:"key-benefit-title",children:l.title}),l.description?r.jsx("div",{className:"key-benefit-description",children:l.description}):null,l.footer?r.jsx("div",{className:"key-benefit-footer",children:l.footer}):null]})},l.id)})})]})]})}const S0=/^(.*?)\s*,?\s*\((#[0-9a-f]{3,8})\)$/i,j0=i=>{const a=i.split("|").map(l=>l.trim()).filter(Boolean).map(l=>{const c=l.match(S0);return c?{label:c[1].trim().replace(/,\s*$/,""),hex:c[2]}:null});return a.every(Boolean)?a:[]};function Td({value:i}){const a=j0(i);return a.length===0?r.jsx(r.Fragment,{children:i}):r.jsx("div",{className:"specs-swatch-list",children:a.map(l=>r.jsxs("div",{className:"specs-swatch-item",children:[r.jsx("span",{className:"specs-swatch-box",style:{backgroundColor:l.hex},"aria-hidden":"true"}),r.jsx("span",{children:l.label})]},`${l.label}-${l.hex}`))})}function b0(){const{specsAndInBox:i}=Yt();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"specs-container",children:[r.jsx("h3",{className:"specs-title",children:"Specifications & What's Included"}),r.jsx(He,{variant:"elevated",padding:"md",children:r.jsxs("div",{className:"specs-card-content",children:[r.jsx("h4",{className:"specs-card-title",children:i.specificationsTitle}),r.jsx("div",{className:"specs-list",children:i.specifications.map(a=>r.jsxs("div",{className:"specs-row",children:[r.jsx("div",{className:"specs-label",children:a.label}),r.jsx("div",{className:"specs-value",children:r.jsx(Td,{value:a.value})})]},a.label))})]})}),r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[r.jsxs("div",{className:"inbox-header",children:[r.jsx("h4",{className:"specs-card-title",children:i.inBoxTitle}),r.jsx(it,{label:i.inBoxBadge,variant:"neutral",size:"sm"})]}),r.jsx("div",{className:"inbox-list",children:i.inBoxItems.map(a=>r.jsxs("div",{className:"inbox-item",children:["• ",a]},a))})]})}),r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{className:"specs-card-content",style:{gap:"10px"},children:[r.jsx("h4",{className:"specs-card-title",children:i.productDetailsTitle}),r.jsx("div",{className:"details-list",children:i.productDetails.map(a=>r.jsxs("div",{children:[r.jsx("div",{className:"details-item-label",children:a.label}),r.jsx("div",{className:"details-item-value",children:r.jsx(Td,{value:a.value})})]},a.label))})]})})]})]})}function C0(){const{faq:i}=Yt();return i.items.length===0?null:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:i.title}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px"},children:i.items.map(a=>r.jsx(He,{variant:"elevated",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"var(--foreground)"},children:a.question}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"22px",fontWeight:"400",color:"var(--muted-foreground)"},children:a.answer})]})},a.question))})]})}function E0(){const{addItem:i}=qn(),{relatedProducts:a}=Yt();return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("h3",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:a.title}),r.jsx(We,{variant:"secondary",size:"sm",label:a.viewAllLabel})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:a.items.map(l=>r.jsx(He,{variant:"elevated",mediaSlot:r.jsxs("div",{style:{position:"relative",width:"100%",height:"220px"},children:[l.imageUrl?r.jsx("img",{src:l.imageUrl,alt:l.imageAlt||l.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):r.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--muted)"}}),r.jsx("div",{style:{position:"absolute",top:"12px",left:"12px"},children:r.jsx(it,{label:l.badge,variant:"neutral",size:"sm"})})]}),footerSlot:r.jsx(We,{variant:"primary",size:"md",label:a.addToCartLabel,disabled:!l.variantId,onClick:()=>{l.variantId&&i(l.variantId)}}),children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.name}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.descriptor}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)"},children:l.featureLine}),r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",color:"var(--foreground)",margin:0},children:l.price})]})},l.id))})]})}function T0(){const{hasProduct:i,isLoading:a}=Yt();return a?r.jsx(gy,{}):i?r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("section",{style:{paddingTop:"24px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:r.jsx(ge,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsx(a0,{}),r.jsx(s0,{}),r.jsx(g0,{})]})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(ge,{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"},children:[r.jsx(v0,{}),r.jsx(b0,{})]})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--card)"},children:r.jsx(ge,{children:r.jsx(k0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(ge,{children:r.jsx(w0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"40px",backgroundColor:"var(--background)"},children:r.jsx(ge,{children:r.jsx(C0,{})})}),r.jsx("section",{style:{paddingTop:"40px",paddingBottom:"48px",backgroundColor:"var(--card)"},children:r.jsx(ge,{children:r.jsx(E0,{})})})]}):r.jsx("section",{style:{paddingTop:"64px",paddingBottom:"80px",backgroundColor:"var(--card)"},children:r.jsx(ge,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[r.jsx("h1",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"32px",lineHeight:"38px",color:"var(--foreground)"},children:"Product unavailable"}),r.jsx("p",{style:{margin:0,fontFamily:"Inter, system-ui, sans-serif",fontSize:"16px",lineHeight:"24px",color:"var(--muted-foreground)"},children:"This product could not be loaded for the requested handle."})]})})})}function I0({query:i,onQueryChange:a,onSearch:l,isSearching:c=!1}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("form",{className:"product-search-form",onSubmit:f=>{f.preventDefault(),l()},children:[r.jsxs("div",{className:"product-search-input-wrapper",children:[r.jsx("div",{className:"product-search-icon",children:r.jsx(Sg,{size:20,color:"var(--muted-foreground)",strokeWidth:2})}),r.jsx("input",{type:"text",placeholder:"Search curated gear…",value:i,onChange:f=>a(f.target.value),className:"product-search-input","aria-label":"Search products",onFocus:f=>{f.target.style.borderColor="var(--ring)",f.target.style.boxShadow="0 0 0 4px rgba(105, 65, 198, 0.12), 0 1px 2px 0 rgba(16, 24, 40, 0.05)"},onBlur:f=>{f.target.style.borderColor="var(--border)",f.target.style.boxShadow="0 1px 2px 0 rgba(16, 24, 40, 0.05)"}})]}),r.jsx("div",{className:"product-search-button-wrapper",children:r.jsx(We,{variant:"primary",size:"md",label:c?"Searching...":"Search",disabled:c,fullWidth:!0})})]})]})}const ll=15;function _0({filters:i,activeFilter:a,onFilterChange:l,resetLabel:c}){var j,h;const[f,p]=N.useState(!1),m=(j=i.find(w=>w.id===a))==null?void 0:j.label,x=i.length>ll,S=f?i:i.slice(0,ll),C=i.length-ll;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs(af,{wrap:"on",gap:10,align:"center",className:"product-filters-wrapper",children:[r.jsx("span",{className:"filter-label",children:"Filter:"}),S.map(w=>r.jsx("button",{onClick:()=>l(w.id),className:"filter-chip",style:{backgroundColor:a===w.id?"var(--accent)":"var(--muted)",border:a===w.id?"1px solid var(--ring)":"1px solid var(--border)",color:a===w.id?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:I=>{a!==w.id&&(I.currentTarget.style.backgroundColor="var(--muted)",I.currentTarget.style.borderColor="var(--border)")},onMouseLeave:I=>{a!==w.id&&(I.currentTarget.style.backgroundColor="var(--muted)",I.currentTarget.style.borderColor="var(--border)")},children:w.label},w.id)),x&&r.jsx("button",{onClick:()=>p(!f),className:"filter-chip",style:{backgroundColor:"transparent",border:"1px solid var(--border)",color:"var(--muted-foreground)"},onMouseEnter:w=>{w.currentTarget.style.backgroundColor="var(--muted)",w.currentTarget.style.color="var(--foreground)"},onMouseLeave:w=>{w.currentTarget.style.backgroundColor="transparent",w.currentTarget.style.color="var(--muted-foreground)"},children:f?"Show less":`+${C} more`}),r.jsx("div",{className:"filter-spacer"}),m&&a!==((h=i[0])==null?void 0:h.id)&&r.jsxs("button",{onClick:()=>{var w;return l(((w=i[0])==null?void 0:w.id)??"all")},className:"filter-reset-button",onMouseEnter:w=>{w.currentTarget.style.color="var(--foreground)"},onMouseLeave:w=>{w.currentTarget.style.color="var(--muted-foreground)"},children:[r.jsx(Cl,{size:14,strokeWidth:2.5}),c??"Reset filters"]})]})]})}var F0=zd();const N0=Rd(F0);function R0(i){if(typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",a.appendChild(l),l.styleSheet?l.styleSheet.cssText=i:l.appendChild(document.createTextNode(i))}const z0=i=>{switch(i){case"success":return L0;case"info":return O0;case"warning":return D0;case"error":return M0;default:return null}},A0=Array(12).fill(0),P0=({visible:i,className:a})=>M.createElement("div",{className:["sonner-loading-wrapper",a].filter(Boolean).join(" "),"data-visible":i},M.createElement("div",{className:"sonner-spinner"},A0.map((l,c)=>M.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${c}`})))),L0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),D0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),O0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),M0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},M.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),B0=M.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},M.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),M.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),U0=()=>{const[i,a]=M.useState(document.hidden);return M.useEffect(()=>{const l=()=>{a(document.hidden)};return document.addEventListener("visibilitychange",l),()=>window.removeEventListener("visibilitychange",l)},[]),i};let hl=1;class $0{constructor(){this.subscribe=a=>(this.subscribers.push(a),()=>{const l=this.subscribers.indexOf(a);this.subscribers.splice(l,1)}),this.publish=a=>{this.subscribers.forEach(l=>l(a))},this.addToast=a=>{this.publish(a),this.toasts=[...this.toasts,a]},this.create=a=>{var l;const{message:c,...f}=a,p=typeof(a==null?void 0:a.id)=="number"||((l=a.id)==null?void 0:l.length)>0?a.id:hl++,m=this.toasts.find(S=>S.id===p),x=a.dismissible===void 0?!0:a.dismissible;return this.dismissedToasts.has(p)&&this.dismissedToasts.delete(p),m?this.toasts=this.toasts.map(S=>S.id===p?(this.publish({...S,...a,id:p,title:c}),{...S,...a,id:p,dismissible:x,title:c}):S):this.addToast({title:c,...f,dismissible:x,id:p}),p},this.dismiss=a=>(a?(this.dismissedToasts.add(a),requestAnimationFrame(()=>this.subscribers.forEach(l=>l({id:a,dismiss:!0})))):this.toasts.forEach(l=>{this.subscribers.forEach(c=>c({id:l.id,dismiss:!0}))}),a),this.message=(a,l)=>this.create({...l,message:a}),this.error=(a,l)=>this.create({...l,message:a,type:"error"}),this.success=(a,l)=>this.create({...l,type:"success",message:a}),this.info=(a,l)=>this.create({...l,type:"info",message:a}),this.warning=(a,l)=>this.create({...l,type:"warning",message:a}),this.loading=(a,l)=>this.create({...l,type:"loading",message:a}),this.promise=(a,l)=>{if(!l)return;let c;l.loading!==void 0&&(c=this.create({...l,promise:a,type:"loading",message:l.loading,description:typeof l.description!="function"?l.description:void 0}));const f=Promise.resolve(a instanceof Function?a():a);let p=c!==void 0,m;const x=f.then(async C=>{if(m=["resolve",C],M.isValidElement(C))p=!1,this.create({id:c,type:"default",message:C});else if(W0(C)&&!C.ok){p=!1;const h=typeof l.error=="function"?await l.error(`HTTP error! status: ${C.status}`):l.error,w=typeof l.description=="function"?await l.description(`HTTP error! status: ${C.status}`):l.description,F=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:c,type:"error",description:w,...F})}else if(C instanceof Error){p=!1;const h=typeof l.error=="function"?await l.error(C):l.error,w=typeof l.description=="function"?await l.description(C):l.description,F=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:c,type:"error",description:w,...F})}else if(l.success!==void 0){p=!1;const h=typeof l.success=="function"?await l.success(C):l.success,w=typeof l.description=="function"?await l.description(C):l.description,F=typeof h=="object"&&!M.isValidElement(h)?h:{message:h};this.create({id:c,type:"success",description:w,...F})}}).catch(async C=>{if(m=["reject",C],l.error!==void 0){p=!1;const j=typeof l.error=="function"?await l.error(C):l.error,h=typeof l.description=="function"?await l.description(C):l.description,I=typeof j=="object"&&!M.isValidElement(j)?j:{message:j};this.create({id:c,type:"error",description:h,...I})}}).finally(()=>{p&&(this.dismiss(c),c=void 0),l.finally==null||l.finally.call(l)}),S=()=>new Promise((C,j)=>x.then(()=>m[0]==="reject"?j(m[1]):C(m[1])).catch(j));return typeof c!="string"&&typeof c!="number"?{unwrap:S}:Object.assign(c,{unwrap:S})},this.custom=(a,l)=>{const c=(l==null?void 0:l.id)||hl++;return this.create({jsx:a(c),id:c,...l}),c},this.getActiveToasts=()=>this.toasts.filter(a=>!this.dismissedToasts.has(a.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const wt=new $0,H0=(i,a)=>{const l=(a==null?void 0:a.id)||hl++;return wt.addToast({title:i,...a,id:l}),l},W0=i=>i&&typeof i=="object"&&"ok"in i&&typeof i.ok=="boolean"&&"status"in i&&typeof i.status=="number",V0=H0,q0=()=>wt.toasts,Y0=()=>wt.getActiveToasts(),Id=Object.assign(V0,{success:wt.success,info:wt.info,warning:wt.warning,error:wt.error,custom:wt.custom,message:wt.message,promise:wt.promise,dismiss:wt.dismiss,loading:wt.loading},{getHistory:q0,getToasts:Y0});R0("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function ls(i){return i.label!==void 0}const Q0=3,K0="24px",X0="16px",_d=4e3,G0=356,J0=14,Z0=45,ev=200;function en(...i){return i.filter(Boolean).join(" ")}function tv(i){const[a,l]=i.split("-"),c=[];return a&&c.push(a),l&&c.push(l),c}const nv=i=>{var a,l,c,f,p,m,x,S,C;const{invert:j,toast:h,unstyled:w,interacting:I,setHeights:F,visibleToasts:R,heights:P,index:se,toasts:fe,expanded:K,removeToast:$,defaultRichColors:B,closeButton:te,style:ce,cancelButtonStyle:Ie,actionButtonStyle:Le,className:Be="",descriptionClassName:we="",duration:Re,position:ze,gap:Ke,expandByDefault:Ce,classNames:ne,icons:ue,closeButtonAriaLabel:O="Close toast"}=i,[q,U]=M.useState(null),[v,_]=M.useState(null),[W,J]=M.useState(!1),[oe,G]=M.useState(!1),[de,ae]=M.useState(!1),[pe,Ae]=M.useState(!1),[tn,yn]=M.useState(!1),[kt,Qt]=M.useState(0),[Yo,Or]=M.useState(0),nn=M.useRef(h.duration||Re||_d),Mr=M.useRef(null),St=M.useRef(null),Yn=se===0,vn=se+1<=R,et=h.type,rn=h.dismissible!==!1,Qo=h.className||"",Ko=h.descriptionClassName||"",Qn=M.useMemo(()=>P.findIndex(ie=>ie.toastId===h.id)||0,[P,h.id]),Br=M.useMemo(()=>{var ie;return(ie=h.closeButton)!=null?ie:te},[h.closeButton,te]),Kn=M.useMemo(()=>h.duration||Re||_d,[h.duration,Re]),dr=M.useRef(0),It=M.useRef(0),wn=M.useRef(0),kn=M.useRef(null),[Xo,Go]=ze.split("-"),Jo=M.useMemo(()=>P.reduce((ie,De,qe)=>qe>=Qn?ie:ie+De.height,0),[P,Qn]),fr=U0(),Ur=h.invert||j,Xn=et==="loading";It.current=M.useMemo(()=>Qn*Ke+Jo,[Qn,Jo]),M.useEffect(()=>{nn.current=Kn},[Kn]),M.useEffect(()=>{J(!0)},[]),M.useEffect(()=>{const ie=St.current;if(ie){const De=ie.getBoundingClientRect().height;return Or(De),F(qe=>[{toastId:h.id,height:De,position:h.position},...qe]),()=>F(qe=>qe.filter(st=>st.toastId!==h.id))}},[F,h.id]),M.useLayoutEffect(()=>{if(!W)return;const ie=St.current,De=ie.style.height;ie.style.height="auto";const qe=ie.getBoundingClientRect().height;ie.style.height=De,Or(qe),F(st=>st.find(Ue=>Ue.toastId===h.id)?st.map(Ue=>Ue.toastId===h.id?{...Ue,height:qe}:Ue):[{toastId:h.id,height:qe,position:h.position},...st])},[W,h.title,h.description,F,h.id]);const _t=M.useCallback(()=>{G(!0),Qt(It.current),F(ie=>ie.filter(De=>De.toastId!==h.id)),setTimeout(()=>{$(h)},ev)},[h,$,F,It]);M.useEffect(()=>{if(h.promise&&et==="loading"||h.duration===1/0||h.type==="loading")return;let ie;return K||I||fr?(()=>{if(wn.current<dr.current){const st=new Date().getTime()-dr.current;nn.current=nn.current-st}wn.current=new Date().getTime()})():(()=>{nn.current!==1/0&&(dr.current=new Date().getTime(),ie=setTimeout(()=>{h.onAutoClose==null||h.onAutoClose.call(h,h),_t()},nn.current))})(),()=>clearTimeout(ie)},[K,I,h,et,fr,_t]),M.useEffect(()=>{h.delete&&_t()},[_t,h.delete]);function $r(){var ie;if(ue!=null&&ue.loading){var De;return M.createElement("div",{className:en(ne==null?void 0:ne.loader,h==null||(De=h.classNames)==null?void 0:De.loader,"sonner-loader"),"data-visible":et==="loading"},ue.loading)}return M.createElement(P0,{className:en(ne==null?void 0:ne.loader,h==null||(ie=h.classNames)==null?void 0:ie.loader),visible:et==="loading"})}const Sn=h.icon||(ue==null?void 0:ue[et])||z0(et);var on,Hr;return M.createElement("li",{tabIndex:0,ref:St,className:en(Be,Qo,ne==null?void 0:ne.toast,h==null||(a=h.classNames)==null?void 0:a.toast,ne==null?void 0:ne.default,ne==null?void 0:ne[et],h==null||(l=h.classNames)==null?void 0:l[et]),"data-sonner-toast":"","data-rich-colors":(on=h.richColors)!=null?on:B,"data-styled":!(h.jsx||h.unstyled||w),"data-mounted":W,"data-promise":!!h.promise,"data-swiped":tn,"data-removed":oe,"data-visible":vn,"data-y-position":Xo,"data-x-position":Go,"data-index":se,"data-front":Yn,"data-swiping":de,"data-dismissible":rn,"data-type":et,"data-invert":Ur,"data-swipe-out":pe,"data-swipe-direction":v,"data-expanded":!!(K||Ce&&W),style:{"--index":se,"--toasts-before":se,"--z-index":fe.length-se,"--offset":`${oe?kt:It.current}px`,"--initial-height":Ce?"auto":`${Yo}px`,...ce,...h.style},onDragEnd:()=>{ae(!1),U(null),kn.current=null},onPointerDown:ie=>{Xn||!rn||(Mr.current=new Date,Qt(It.current),ie.target.setPointerCapture(ie.pointerId),ie.target.tagName!=="BUTTON"&&(ae(!0),kn.current={x:ie.clientX,y:ie.clientY}))},onPointerUp:()=>{var ie,De,qe;if(pe||!rn)return;kn.current=null;const st=Number(((ie=St.current)==null?void 0:ie.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),jn=Number(((De=St.current)==null?void 0:De.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Ue=new Date().getTime()-((qe=Mr.current)==null?void 0:qe.getTime()),Xe=q==="x"?st:jn,bn=Math.abs(Xe)/Ue;if(Math.abs(Xe)>=Z0||bn>.11){Qt(It.current),h.onDismiss==null||h.onDismiss.call(h,h),_(q==="x"?st>0?"right":"left":jn>0?"down":"up"),_t(),Ae(!0);return}else{var tt,jt;(tt=St.current)==null||tt.style.setProperty("--swipe-amount-x","0px"),(jt=St.current)==null||jt.style.setProperty("--swipe-amount-y","0px")}yn(!1),ae(!1),U(null)},onPointerMove:ie=>{var De,qe,st;if(!kn.current||!rn||((De=window.getSelection())==null?void 0:De.toString().length)>0)return;const Ue=ie.clientY-kn.current.y,Xe=ie.clientX-kn.current.x;var bn;const tt=(bn=i.swipeDirections)!=null?bn:tv(ze);!q&&(Math.abs(Xe)>1||Math.abs(Ue)>1)&&U(Math.abs(Xe)>Math.abs(Ue)?"x":"y");let jt={x:0,y:0};const Cn=Ft=>1/(1.5+Math.abs(Ft)/20);if(q==="y"){if(tt.includes("top")||tt.includes("bottom"))if(tt.includes("top")&&Ue<0||tt.includes("bottom")&&Ue>0)jt.y=Ue;else{const Ft=Ue*Cn(Ue);jt.y=Math.abs(Ft)<Math.abs(Ue)?Ft:Ue}}else if(q==="x"&&(tt.includes("left")||tt.includes("right")))if(tt.includes("left")&&Xe<0||tt.includes("right")&&Xe>0)jt.x=Xe;else{const Ft=Xe*Cn(Xe);jt.x=Math.abs(Ft)<Math.abs(Xe)?Ft:Xe}(Math.abs(jt.x)>0||Math.abs(jt.y)>0)&&yn(!0),(qe=St.current)==null||qe.style.setProperty("--swipe-amount-x",`${jt.x}px`),(st=St.current)==null||st.style.setProperty("--swipe-amount-y",`${jt.y}px`)}},Br&&!h.jsx&&et!=="loading"?M.createElement("button",{"aria-label":O,"data-disabled":Xn,"data-close-button":!0,onClick:Xn||!rn?()=>{}:()=>{_t(),h.onDismiss==null||h.onDismiss.call(h,h)},className:en(ne==null?void 0:ne.closeButton,h==null||(c=h.classNames)==null?void 0:c.closeButton)},(Hr=ue==null?void 0:ue.close)!=null?Hr:B0):null,(et||h.icon||h.promise)&&h.icon!==null&&((ue==null?void 0:ue[et])!==null||h.icon)?M.createElement("div",{"data-icon":"",className:en(ne==null?void 0:ne.icon,h==null||(f=h.classNames)==null?void 0:f.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||$r():null,h.type!=="loading"?Sn:null):null,M.createElement("div",{"data-content":"",className:en(ne==null?void 0:ne.content,h==null||(p=h.classNames)==null?void 0:p.content)},M.createElement("div",{"data-title":"",className:en(ne==null?void 0:ne.title,h==null||(m=h.classNames)==null?void 0:m.title)},h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title),h.description?M.createElement("div",{"data-description":"",className:en(we,Ko,ne==null?void 0:ne.description,h==null||(x=h.classNames)==null?void 0:x.description)},typeof h.description=="function"?h.description():h.description):null),M.isValidElement(h.cancel)?h.cancel:h.cancel&&ls(h.cancel)?M.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||Ie,onClick:ie=>{ls(h.cancel)&&rn&&(h.cancel.onClick==null||h.cancel.onClick.call(h.cancel,ie),_t())},className:en(ne==null?void 0:ne.cancelButton,h==null||(S=h.classNames)==null?void 0:S.cancelButton)},h.cancel.label):null,M.isValidElement(h.action)?h.action:h.action&&ls(h.action)?M.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||Le,onClick:ie=>{ls(h.action)&&(h.action.onClick==null||h.action.onClick.call(h.action,ie),!ie.defaultPrevented&&_t())},className:en(ne==null?void 0:ne.actionButton,h==null||(C=h.classNames)==null?void 0:C.actionButton)},h.action.label):null)};function Fd(){if(typeof window>"u"||typeof document>"u")return"ltr";const i=document.documentElement.getAttribute("dir");return i==="auto"||!i?window.getComputedStyle(document.documentElement).direction:i}function rv(i,a){const l={};return[i,a].forEach((c,f)=>{const p=f===1,m=p?"--mobile-offset":"--offset",x=p?X0:K0;function S(C){["top","right","bottom","left"].forEach(j=>{l[`${m}-${j}`]=typeof C=="number"?`${C}px`:C})}typeof c=="number"||typeof c=="string"?S(c):typeof c=="object"?["top","right","bottom","left"].forEach(C=>{c[C]===void 0?l[`${m}-${C}`]=x:l[`${m}-${C}`]=typeof c[C]=="number"?`${c[C]}px`:c[C]}):S(x)}),l}const ov=M.forwardRef(function(a,l){const{invert:c,position:f="bottom-right",hotkey:p=["altKey","KeyT"],expand:m,closeButton:x,className:S,offset:C,mobileOffset:j,theme:h="light",richColors:w,duration:I,style:F,visibleToasts:R=Q0,toastOptions:P,dir:se=Fd(),gap:fe=J0,icons:K,containerAriaLabel:$="Notifications"}=a,[B,te]=M.useState([]),ce=M.useMemo(()=>Array.from(new Set([f].concat(B.filter(v=>v.position).map(v=>v.position)))),[B,f]),[Ie,Le]=M.useState([]),[Be,we]=M.useState(!1),[Re,ze]=M.useState(!1),[Ke,Ce]=M.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),ne=M.useRef(null),ue=p.join("+").replace(/Key/g,"").replace(/Digit/g,""),O=M.useRef(null),q=M.useRef(!1),U=M.useCallback(v=>{te(_=>{var W;return(W=_.find(J=>J.id===v.id))!=null&&W.delete||wt.dismiss(v.id),_.filter(({id:J})=>J!==v.id)})},[]);return M.useEffect(()=>wt.subscribe(v=>{if(v.dismiss){requestAnimationFrame(()=>{te(_=>_.map(W=>W.id===v.id?{...W,delete:!0}:W))});return}setTimeout(()=>{N0.flushSync(()=>{te(_=>{const W=_.findIndex(J=>J.id===v.id);return W!==-1?[..._.slice(0,W),{..._[W],...v},..._.slice(W+1)]:[v,..._]})})})}),[B]),M.useEffect(()=>{if(h!=="system"){Ce(h);return}if(h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Ce("dark"):Ce("light")),typeof window>"u")return;const v=window.matchMedia("(prefers-color-scheme: dark)");try{v.addEventListener("change",({matches:_})=>{Ce(_?"dark":"light")})}catch{v.addListener(({matches:W})=>{try{Ce(W?"dark":"light")}catch(J){console.error(J)}})}},[h]),M.useEffect(()=>{B.length<=1&&we(!1)},[B]),M.useEffect(()=>{const v=_=>{var W;if(p.every(G=>_[G]||_.code===G)){var oe;we(!0),(oe=ne.current)==null||oe.focus()}_.code==="Escape"&&(document.activeElement===ne.current||(W=ne.current)!=null&&W.contains(document.activeElement))&&we(!1)};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[p]),M.useEffect(()=>{if(ne.current)return()=>{O.current&&(O.current.focus({preventScroll:!0}),O.current=null,q.current=!1)}},[ne.current]),M.createElement("section",{ref:l,"aria-label":`${$} ${ue}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},ce.map((v,_)=>{var W;const[J,oe]=v.split("-");return B.length?M.createElement("ol",{key:v,dir:se==="auto"?Fd():se,tabIndex:-1,ref:ne,className:S,"data-sonner-toaster":!0,"data-sonner-theme":Ke,"data-y-position":J,"data-lifted":Be&&B.length>1&&!m,"data-x-position":oe,style:{"--front-toast-height":`${((W=Ie[0])==null?void 0:W.height)||0}px`,"--width":`${G0}px`,"--gap":`${fe}px`,...F,...rv(C,j)},onBlur:G=>{q.current&&!G.currentTarget.contains(G.relatedTarget)&&(q.current=!1,O.current&&(O.current.focus({preventScroll:!0}),O.current=null))},onFocus:G=>{G.target instanceof HTMLElement&&G.target.dataset.dismissible==="false"||q.current||(q.current=!0,O.current=G.relatedTarget)},onMouseEnter:()=>we(!0),onMouseMove:()=>we(!0),onMouseLeave:()=>{Re||we(!1)},onDragEnd:()=>we(!1),onPointerDown:G=>{G.target instanceof HTMLElement&&G.target.dataset.dismissible==="false"||ze(!0)},onPointerUp:()=>ze(!1)},B.filter(G=>!G.position&&_===0||G.position===v).map((G,de)=>{var ae,pe;return M.createElement(nv,{key:G.id,icons:K,index:de,toast:G,defaultRichColors:w,duration:(ae=P==null?void 0:P.duration)!=null?ae:I,className:P==null?void 0:P.className,descriptionClassName:P==null?void 0:P.descriptionClassName,invert:c,visibleToasts:R,closeButton:(pe=P==null?void 0:P.closeButton)!=null?pe:x,interacting:Re,position:v,style:P==null?void 0:P.style,unstyled:P==null?void 0:P.unstyled,classNames:P==null?void 0:P.classNames,cancelButtonStyle:P==null?void 0:P.cancelButtonStyle,actionButtonStyle:P==null?void 0:P.actionButtonStyle,closeButtonAriaLabel:P==null?void 0:P.closeButtonAriaLabel,removeToast:U,toasts:B.filter(Ae=>Ae.position==G.position),heights:Ie.filter(Ae=>Ae.position==G.position),setHeights:Le,expandByDefault:m,gap:fe,expanded:Be,swipeDirections:a.swipeDirections})})):null}))});function iv({products:i}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"product-list-container",children:r.jsx("div",{className:"product-grid",children:i.length>0?i.map(a=>r.jsx(sv,{product:a},a.id)):r.jsx("div",{className:"no-products-message",children:"No products matched your search."})})})]})}function sv({product:i,isHoverPreview:a=!1}){const{addItem:l,openCartDrawer:c}=qn(),f=`/products/${i.id}`;return r.jsxs("div",{role:a?void 0:"link",tabIndex:a?void 0:0,onClick:a?void 0:p=>{p.target.closest("button")||(window.location.href=f)},onKeyDown:a?void 0:p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),window.location.href=f)},style:{backgroundColor:"var(--card)",border:"1px solid var(--border)",borderRadius:"16px",width:"100%",minHeight:"460px",maxHeight:"520px",boxShadow:a?"0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814":"0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",overflow:"hidden",display:"flex",flexDirection:"column",cursor:a?"default":"pointer"},children:[r.jsxs("div",{style:{position:"relative",height:"220px",backgroundColor:"var(--muted)"},children:[i.imageUrl?r.jsx("img",{src:i.imageUrl,alt:i.imageAlt||i.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null,a?r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#10182808"}}):null,r.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",zIndex:a?1:"auto"},children:r.jsx(it,{label:i.badgeLabel,variant:i.badgeVariant,size:"sm"})}),r.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:a?1:"auto"},children:r.jsx("button",{style:{height:"32px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"8px",backgroundColor:"transparent",color:"var(--muted-foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontFamily:"Inter, system-ui, sans-serif"},children:"Save"})})]}),r.jsxs("div",{style:{padding:"16px",display:"flex",flexDirection:"column",gap:"10px",flex:1},children:[r.jsx("h4",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)",margin:0},children:i.name}),r.jsx("p",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",margin:0,display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical",overflow:"hidden"},children:i.descriptor}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.featureLine}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"auto",paddingTop:"8px"},children:[r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"22px",lineHeight:"30px",fontWeight:"600",color:"var(--foreground)"},children:i.priceLabel}),r.jsx("div",{style:{fontFamily:"Inter, system-ui, sans-serif",fontSize:"12px",lineHeight:"18px",fontWeight:"500",color:"var(--muted-foreground)"},children:i.shippingLabel})]})]}),r.jsx("div",{style:{padding:"16px",paddingTop:"0"},children:r.jsx(We,{variant:"primary",size:"md",label:i.isInStock?"Add to cart":"Out of stock",disabled:!i.isInStock||!i.variantId,onClick:async()=>{if(!i.variantId)return;const p=await l(i.variantId);if(!p.ok){Id.error("Unable to add item",{description:p.error||"Please try again.",duration:5e3});return}Id.success("Added to cart",{description:`${i.name} is in your cart.`,duration:1/0,action:{label:"View cart",onClick:()=>c()},cancel:{label:"Close",onClick:()=>{}}})},fullWidth:!0})})]})}function av(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"products-page-header",children:[r.jsxs("div",{className:"products-page-header-content",children:[r.jsx("div",{className:"products-page-eyebrow",children:"Curated gear"}),r.jsx("h1",{className:"products-page-title",children:"Products"})]}),r.jsx("div",{className:"products-page-description",children:"Best-in-class essentials chosen for durability, clarity, and real daily use."})]})]})}function lv({resultCount:i}){const[a,l]=N.useState(!1),[c,f]=N.useState("Recommended"),p=["Recommended","Price: Low to High","Price: High to Low","Newest","Most Popular"];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"product-results-header",children:[r.jsxs("div",{className:"results-count",children:["Showing ",r.jsx("span",{className:"results-count-number",children:i})," ","results"]}),r.jsxs("div",{className:"sort-controls",children:[r.jsx("span",{className:"sort-label",children:"Sort by:"}),r.jsxs("div",{className:"sort-dropdown-wrapper",children:[r.jsxs("button",{onClick:()=>l(!a),className:"sort-button",onMouseEnter:m=>{m.currentTarget.style.backgroundColor="var(--muted)",m.currentTarget.style.borderColor="var(--border)"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="var(--card)",m.currentTarget.style.borderColor="var(--border)"},children:[c,r.jsx(Uh,{size:16,color:"var(--muted-foreground)",style:{transition:"transform 150ms ease",transform:a?"rotate(180deg)":"rotate(0deg)"}})]}),a&&r.jsx("div",{className:"sort-dropdown",children:p.map(m=>r.jsx("button",{onClick:()=>{f(m),l(!1)},className:"sort-option",style:{backgroundColor:c===m?"var(--muted)":"transparent",fontWeight:c===m?"600":"500",color:c===m?"var(--primary)":"var(--muted-foreground)"},onMouseEnter:x=>{c!==m&&(x.currentTarget.style.backgroundColor="var(--muted)")},onMouseLeave:x=>{c!==m&&(x.currentTarget.style.backgroundColor="transparent")},children:m},m))})]})]})]})]})}const uv={id:cs,label:Dy},cv=i=>{const a=new Set;return i.flatMap(c=>c.categoryIds.map((f,p)=>({id:f,label:c.categoryLabels[p]??c.categoryIds[p]}))).filter(c=>!c.id||a.has(c.id)?!1:(a.add(c.id),!0))};function dv(i){const a=cv(i);return{filters:[uv,...a],isLoading:!1,resetLabel:"Reset filters"}}const fv=120,pv=(i,a)=>{const l=Number.parseFloat(i);return Number.isFinite(l)?new Intl.NumberFormat("en-IN",{style:"currency",currency:a,maximumFractionDigits:0}).format(l):`${a} ${i}`},mv=i=>{var a;return i.availableForSale===!1?!1:typeof i.totalInventory=="number"?i.totalInventory>0:((a=i.variants)==null?void 0:a.edges.some(l=>{const c=l.node;return c.availableForSale===!1?!1:typeof c.quantityAvailable=="number"?c.quantityAvailable>0:c.availableForSale===!0}))??!0},hv=i=>{var l,c,f,p;const a=(c=(l=i.variants)==null?void 0:l.edges.find(m=>{const x=m.node;return x.availableForSale&&(typeof x.quantityAvailable!="number"||x.quantityAvailable>0)}))==null?void 0:c.node;return(a==null?void 0:a.id)||((p=(f=i.variants)==null?void 0:f.edges[0])==null?void 0:p.node.id)||null},gv=(i,a=fv)=>{const l=i.replace(/\s+/g," ").trim();return l.length<=a?l:`${l.slice(0,a).trimEnd()}...`},Nd=i=>{var C,j,h,w;const a=((C=i.shortDescription)==null?void 0:C.value)||i.description||"Curated by Vibe Station",l=gv(a),c=((j=i.featureLine)==null?void 0:j.value)||i.tags.slice(0,3).join(" · ")||"Durable build",f=((h=i.shippingInfo)==null?void 0:h.value)||"Shipping calculated at checkout",p=((w=i.badge)==null?void 0:w.value)||i.tags[0]||"Curated",m=gs(i),x=Array.from(new Set(i.tags.map(I=>I.trim()).filter(Boolean))),S=x.map(I=>lf(I)).filter(Boolean);return{id:i.handle,variantId:hv(i),name:i.title,descriptor:l,featureLine:c,priceLabel:pv(i.priceRange.minVariantPrice.amount,i.priceRange.minVariantPrice.currencyCode),shippingLabel:f,isInStock:mv(i),badgeLabel:p,badgeVariant:"accent",imageUrl:m==null?void 0:m.url,imageAlt:m==null?void 0:m.altText,categoryIds:S,categoryLabels:x}};let Oo=[],gl=!1,Fo=null;const Mo=new Map,xl=new Set,ul=new Map,gf=i=>(i==null?void 0:i.trim())??"",xv=async i=>{const a=gf(i);if(!a)return Fo||(Fo=(async()=>{try{Oo=(await Uo({first:24})).edges.map(p=>Nd(p.node))}catch(f){console.error("Failed to load products from Shopify",f),Oo=[]}finally{gl=!0,Fo=null}})(),Fo);const l=ul.get(a);if(l)return l;const c=(async()=>{try{const p=(await Uo({first:24,query:a})).edges.map(m=>Nd(m.node));Mo.set(a,p)}catch(f){console.error("Failed to load searched products from Shopify",f),Mo.set(a,[])}finally{xl.add(a),ul.delete(a)}})();return ul.set(a,c),c};function yv(i){const a=gf(i),[l,c]=N.useState(a?Mo.get(a)??[]:Oo),[f,p]=N.useState(a?!xl.has(a):!gl);return N.useEffect(()=>{let m=!1;return(a?xl.has(a):gl)?(c(a?Mo.get(a)??[]:Oo),p(!1),()=>{m=!0}):(p(!0),xv(a).then(()=>{m||(c(a?Mo.get(a)??[]:Oo),p(!1))}),()=>{m=!0})},[a]),{products:l,hoverPreviewProduct:l[0],isLoading:f}}function vv(){const[i,a]=N.useState(""),[l,c]=N.useState(""),[f,p]=N.useState(cs),[m,x]=N.useState(!1),{products:S,isLoading:C}=yv(l),{filters:j,resetLabel:h}=dv(S),w=f===cs?S:S.filter(I=>I.categoryIds.includes(f));return N.useEffect(()=>{C||x(!0)},[C]),N.useEffect(()=>{j.some(I=>I.id===f)||p(cs)},[f,j]),!m&&C?r.jsx(hy,{}):r.jsx(ot,{paddingTop:"48px",paddingBottom:"72px",background:"var(--background)",children:r.jsxs(ge,{children:[r.jsx(wv,{}),r.jsx(kv,{searchInput:i,onSearchInputChange:a,onSearchSubmit:()=>c(i.trim()),isSearching:C,activeFilter:f,onFilterChange:p,filters:j,resetLabel:h,resultCount:w.length,products:w})]})})}function wv(){return r.jsx(av,{})}function kv({searchInput:i,onSearchInputChange:a,onSearchSubmit:l,isSearching:c,activeFilter:f,onFilterChange:p,filters:m,resetLabel:x,resultCount:S,products:C}){return r.jsxs(Se,{gap:"16px",children:[r.jsx(I0,{query:i,onQueryChange:a,onSearch:l,isSearching:c}),r.jsx(_0,{filters:m,activeFilter:f,onFilterChange:p,resetLabel:x}),r.jsx(lv,{resultCount:S}),r.jsx(iv,{products:C})]})}function xf({id:i,name:a,variant:l,price:c,quantity:f,imageUrl:p,imageAlt:m,onIncrement:x,onDecrement:S,onRemove:C}){return r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"flex-start"},children:[r.jsx("div",{style:{width:"72px",height:"72px",backgroundColor:"var(--muted)",borderRadius:"12px",flexShrink:0,overflow:"hidden"},children:p?r.jsx("img",{src:p,alt:m||a,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"6px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:a}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:c})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-end"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(We,{variant:"ghost",size:"sm",label:"−",onClick:S?()=>S(i):void 0}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"500",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif",minWidth:"20px",textAlign:"center"},children:f}),r.jsx(We,{variant:"ghost",size:"sm",label:"+",onClick:x?()=>x(i):void 0})]}),r.jsx(We,{variant:"ghost",size:"sm",label:"Remove",onClick:C?()=>C(i):void 0})]})]})})}const Sv={title:"Cart",yourCartTitle:"Your cart",addOnsTitle:"Add-ons you may like",summaryTitle:"Order summary",subtotalLabel:"Subtotal",shippingLabel:"Shipping",shippingValue:"Calculated at checkout",totalLabel:"Total",taxesLine:"Taxes and shipping calculated at checkout.",drawerCheckoutLabel:"Checkout",drawerContinueLabel:"Continue shopping",drawerFooterCaption:"You'll complete payment in checkout.",emptyCartMessage:"Your cart is empty.",summaryCheckoutLabel:"Checkout",summaryContinueLabel:"Continue shopping",writeItemSuffix:"items",addButtonLabel:"Add"};let Bo=[],yl=!1,No=null;const jv=async()=>No||(No=(async()=>{try{Bo=(await Uo({first:2})).edges.map(a=>{const l=gs(a.node);return{id:a.node.handle,name:a.node.title,price:Number.parseFloat(a.node.priceRange.minVariantPrice.amount),imageUrl:l==null?void 0:l.url,imageAlt:(l==null?void 0:l.altText)||a.node.title}})}catch(i){console.error("Failed to load cart add-ons from Shopify",i),Bo=[]}finally{yl=!0,No=null}})(),No);function qo(){const[i,a]=N.useState(Bo),[l,c]=N.useState(!yl);return N.useEffect(()=>{let f=!1;return yl?(a(Bo),c(!1),()=>{f=!0}):(jv().then(()=>{f||(a(Bo),c(!1))}),()=>{f=!0})},[]),{addOns:i,copy:Sv,isLoading:l}}function bv(){const{items:i,cartError:a,clearCartError:l,incrementItem:c,decrementItem:f,removeItem:p}=qn(),{addOns:m,copy:x}=qo();return r.jsxs("div",{style:{flex:"0 0 65%",display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsx("h2",{style:{margin:0,fontSize:"30px",lineHeight:"38px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:x.yourCartTitle}),a?r.jsx("div",{onClick:l,children:r.jsx(qt,{type:"error",children:a})}):null,r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:i.map(S=>r.jsx(xf,{id:S.id,name:S.name,variant:S.variant,price:$o(S.price),quantity:S.quantity,imageUrl:S.imageUrl,imageAlt:S.imageAlt,onIncrement:c,onDecrement:f,onRemove:p},S.id))}),r.jsx(He,{variant:"subtle",padding:"lg",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:x.addOnsTitle}),r.jsx("div",{style:{display:"flex",gap:"16px"},children:m.map(S=>r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"200px"},children:[r.jsx("div",{style:{width:"100%",height:"160px",backgroundColor:"var(--muted)",borderRadius:"12px",overflow:"hidden"},children:S.imageUrl?r.jsx("img",{src:S.imageUrl,alt:S.imageAlt||S.name,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):null}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:S.name}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:$o(S.price)}),r.jsx(We,{variant:"ghost",size:"sm",label:x.addButtonLabel})]})},S.id))})]})})]})}function Cv({title:i,subtitle:a,children:l,onClose:c,footer:f}){return r.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50},onClick:c,children:r.jsxs("div",{style:{width:"520px",maxWidth:"92%",backgroundColor:"var(--card)",borderRadius:"20px",border:"1px solid var(--border)",boxShadow:"0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814",padding:"20px",display:"flex",flexDirection:"column",gap:"16px",position:"relative"},onClick:p=>p.stopPropagation(),children:[(i||a)&&r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",position:"relative"},children:[r.jsxs("div",{children:[i&&r.jsx("div",{style:{fontSize:"18px",fontWeight:600,color:"var(--foreground)",lineHeight:"28px"},children:i}),a&&r.jsx("div",{style:{fontSize:"14px",color:"var(--muted-foreground)",lineHeight:"20px",marginTop:"4px"},children:a})]}),c&&r.jsx("div",{style:{position:"absolute",top:0,right:0},children:r.jsx("button",{onClick:c,style:{height:"36px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px",backgroundColor:"transparent",color:"var(--foreground)",fontSize:"14px",lineHeight:"20px",fontWeight:"600",border:"none",display:"inline-flex",alignItems:"center",cursor:"pointer"},children:"Close"})})]}),r.jsx("div",{style:{flex:1,minHeight:"100px",display:"flex",flexDirection:"column",gap:"12px"},children:l}),f&&r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:f})]})})}function Ev({itemCount:i,subtotal:a,onContinue:l,onBack:c,onClose:f}){return r.jsxs(Cv,{onClose:f,title:"Heading to checkout",subtitle:"You'll complete payment securely in checkout.",footer:r.jsx(_v,{onContinue:l,onBack:c}),children:[r.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)",marginTop:"-8px"}}),r.jsx(Tv,{itemCount:i,subtotal:a}),r.jsx(Iv,{})]})}function Tv({itemCount:i,subtotal:a}){return r.jsx(He,{variant:"subtle",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(cl,{label:"Items",value:String(i),valueWeight:"600"}),r.jsx(cl,{label:"Shipping",value:"Calculated in checkout"}),r.jsx(cl,{label:"Total",value:$o(a),valueWeight:"600",valueSize:"20px",valueLineHeight:"30px"}),r.jsx("div",{style:{marginTop:"6px"},children:r.jsx(it,{label:"No password needed",variant:"neutral",size:"sm"})})]})})}function cl({label:i,value:a,valueWeight:l="400",valueSize:c="14px",valueLineHeight:f="20px"}){return r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",color:"var(--muted-foreground)"},children:i}),r.jsx("div",{style:{fontSize:c,lineHeight:f,fontWeight:l,color:"var(--foreground)"},children:a})]})}function Iv(){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx("div",{style:{position:"relative",height:"6px",width:"100%",backgroundColor:"var(--border)",borderRadius:"999px",overflow:"hidden"},children:r.jsx("div",{style:{position:"absolute",top:0,left:0,height:"6px",width:"45%",backgroundColor:"#4F46E5",borderRadius:"999px",transition:"width 0.3s ease-out"}})}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)"},children:"Preparing your checkout…"})]})}function _v({onContinue:i,onBack:a}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"100%"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[r.jsx(We,{label:"Back to cart",variant:"ghost",size:"md",onClick:a}),r.jsx(We,{label:"Continue",variant:"primary",size:"md",onClick:i})]}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",color:"var(--muted-foreground)",textAlign:"right"},children:"If checkout doesn't open, try again."})]})}function yf({subtotal:i=5997,total:a=5997}){const{copy:l}=qo();return r.jsx(He,{variant:"elevated",padding:"md",children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.summaryTitle}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.subtotalLabel}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:$o(i)})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingLabel}),r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.shippingValue})]}),r.jsx("div",{style:{height:"1px",backgroundColor:"var(--border)"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.totalLabel}),r.jsx("h4",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:$o(a)})]})]}),r.jsx(hf,{}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:l.taxesLine})]})})}function Fv(){const{cartCount:i,subtotal:a,total:l,checkout:c}=qn(),{copy:f}=qo(),[p,m]=N.useState(!1);return r.jsxs("div",{style:{flex:"0 0 35%",display:"flex",flexDirection:"column",gap:"16px",position:"sticky",top:"24px"},children:[r.jsx(yf,{subtotal:a,total:l}),r.jsx(We,{variant:"primary",size:"lg",label:f.summaryCheckoutLabel,onClick:()=>m(!0)}),r.jsx(We,{variant:"secondary",size:"lg",label:f.summaryContinueLabel,onClick:()=>{window.location.href="/products"}}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:f.taxesLine}),p?r.jsx(Ev,{itemCount:i,subtotal:a,onBack:()=>m(!1),onClose:()=>m(!1),onContinue:()=>{c()}}):null]})}function Nv(){return r.jsx(ot,{paddingTop:"80px",paddingBottom:"80px",background:"var(--muted)",children:r.jsx(ge,{children:r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start"},children:[r.jsx(bv,{}),r.jsx(Fv,{})]})})})}function Rv(){const{isLoading:i}=qo();return i?r.jsx(xy,{}):r.jsx(Nv,{})}function zv(){const{items:i,cartCount:a,subtotal:l,total:c,cartError:f,clearCartError:p,closeCartDrawer:m,incrementItem:x,decrementItem:S,removeItem:C}=qn(),{copy:j}=qo();return r.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:[r.jsx("div",{onClick:m,style:{position:"absolute",inset:0,backgroundColor:"rgba(0, 0, 0, 0.5)"}}),r.jsxs("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:"420px",backgroundColor:"var(--card)",borderLeft:"1px solid var(--border)",boxShadow:"-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"24px",borderBottom:"1px solid var(--border)",flexShrink:0},children:r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("h3",{style:{margin:0,fontSize:"18px",lineHeight:"28px",fontWeight:"600",color:"var(--foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:j.title}),r.jsx(it,{label:`${a} ${j.writeItemSuffix}`,variant:"neutral",size:"sm"})]})}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},children:[f?r.jsx("div",{onClick:p,children:r.jsx(qt,{type:"error",children:f})}):null,i.length?r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:i.map(h=>r.jsx(xf,{id:h.id,name:h.name,variant:h.variant,price:`₹${h.price.toLocaleString("en-IN")}`,quantity:h.quantity,imageUrl:h.imageUrl,imageAlt:h.imageAlt,onIncrement:x,onDecrement:S,onRemove:C},h.id))}):r.jsx("div",{style:{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif"},children:j.emptyCartMessage}),r.jsx(yf,{subtotal:l,total:c})]}),r.jsxs("div",{style:{padding:"24px",borderTop:"1px solid var(--border)",flexShrink:0,display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(We,{variant:"primary",size:"lg",label:j.drawerCheckoutLabel,onClick:()=>{m(),window.location.href="/cart"}}),r.jsx(We,{variant:"secondary",size:"lg",label:j.drawerContinueLabel,onClick:m}),r.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",fontWeight:"400",color:"var(--muted-foreground)",fontFamily:"Inter, system-ui, sans-serif",textAlign:"center"},children:j.drawerFooterCaption})]})]})]})}function Av(){const i=window.location.pathname.replace(/\/+$/,"")||"/";if(i.startsWith("/products/"))return r.jsx(T0,{});if(/^\/account\/reset\/[^/]+\/[^/]+$/.test(i))return r.jsx(vd,{});switch(i){case"/":return r.jsx(yy,{});case"/products":return r.jsx(vv,{});case"/philosophy":return r.jsx(ky,{});case"/community":return r.jsx(zx,{});case"/cart":return r.jsx(Rv,{});case"/account":return r.jsx(Hg,{});case"/account/login":return r.jsx(Rg,{});case"/account/register":return r.jsx(zg,{});case"/account/password-reset":case"/account/forgot-password":return r.jsx(Ag,{});case"/account/password-reset/confirm":return r.jsx(vd,{});default:return r.jsx(Hx,{})}}function Pv(){const{isDrawerOpen:i}=qn(),a=window.location.pathname.replace(/\/+$/,"")||"/",l=a==="/account"||a.startsWith("/account/");return r.jsxs(wx,{children:[Av(),!l&&i?r.jsx(zv,{}):null]})}const Lv=({...i})=>{const{theme:a="system"}=Tl();return r.jsx(ov,{theme:a,position:"top-center",className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...i})};function Dv({children:i}){return r.jsxs(ex,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[r.jsx(zh,{children:r.jsx(Xg,{children:i})}),r.jsx(Lv,{})]})}const vf=document.getElementById("root");if(!vf)throw new Error('Root element with id "root" was not found.');wm.createRoot(vf).render(r.jsx(N.StrictMode,{children:r.jsx(Dv,{children:r.jsx(Pv,{})})}));

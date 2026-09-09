(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function vv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var rh={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function oS(){if(G_)return wo;G_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var V_;function lS(){return V_||(V_=1,rh.exports=oS()),rh.exports}var U=lS(),oh={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function cS(){if(k_)return he;k_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function v(z,tt,vt){this.props=z,this.context=tt,this.refs=M,this.updater=vt||E}v.prototype.isReactComponent={},v.prototype.setState=function(z,tt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,tt,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function F(){}F.prototype=v.prototype;function N(z,tt,vt){this.props=z,this.context=tt,this.refs=M,this.updater=vt||E}var w=N.prototype=new F;w.constructor=N,b(w,v.prototype),w.isPureReactComponent=!0;var V=Array.isArray;function O(){}var B={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function L(z,tt,vt){var Ct=vt.ref;return{$$typeof:r,type:z,key:tt,ref:Ct!==void 0?Ct:null,props:vt}}function D(z,tt){return L(z.type,tt,z.props)}function k(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function Q(z){var tt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(vt){return tt[vt]})}var ot=/\/+/g;function ft(z,tt){return typeof z=="object"&&z!==null&&z.key!=null?Q(""+z.key):tt.toString(36)}function st(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(tt){z.status==="pending"&&(z.status="fulfilled",z.value=tt)},function(tt){z.status==="pending"&&(z.status="rejected",z.reason=tt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function P(z,tt,vt,Ct,Ot){var nt=typeof z;(nt==="undefined"||nt==="boolean")&&(z=null);var $=!1;if(z===null)$=!0;else switch(nt){case"bigint":case"string":case"number":$=!0;break;case"object":switch(z.$$typeof){case r:case t:$=!0;break;case _:return $=z._init,P($(z._payload),tt,vt,Ct,Ot)}}if($)return Ot=Ot(z),$=Ct===""?"."+ft(z,0):Ct,V(Ot)?(vt="",$!=null&&(vt=$.replace(ot,"$&/")+"/"),P(Ot,tt,vt,"",function(Vt){return Vt})):Ot!=null&&(k(Ot)&&(Ot=D(Ot,vt+(Ot.key==null||z&&z.key===Ot.key?"":(""+Ot.key).replace(ot,"$&/")+"/")+$)),tt.push(Ot)),1;$=0;var Tt=Ct===""?".":Ct+":";if(V(z))for(var Lt=0;Lt<z.length;Lt++)Ct=z[Lt],nt=Tt+ft(Ct,Lt),$+=P(Ct,tt,vt,nt,Ot);else if(Lt=y(z),typeof Lt=="function")for(z=Lt.call(z),Lt=0;!(Ct=z.next()).done;)Ct=Ct.value,nt=Tt+ft(Ct,Lt++),$+=P(Ct,tt,vt,nt,Ot);else if(nt==="object"){if(typeof z.then=="function")return P(st(z),tt,vt,Ct,Ot);throw tt=String(z),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return $}function Y(z,tt,vt){if(z==null)return z;var Ct=[],Ot=0;return P(z,Ct,"","",function(nt){return tt.call(vt,nt,Ot++)}),Ct}function W(z){if(z._status===-1){var tt=z._result;tt=tt(),tt.then(function(vt){(z._status===0||z._status===-1)&&(z._status=1,z._result=vt)},function(vt){(z._status===0||z._status===-1)&&(z._status=2,z._result=vt)}),z._status===-1&&(z._status=0,z._result=tt)}if(z._status===1)return z._result.default;throw z._result}var yt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Et={map:Y,forEach:function(z,tt,vt){Y(z,function(){tt.apply(this,arguments)},vt)},count:function(z){var tt=0;return Y(z,function(){tt++}),tt},toArray:function(z){return Y(z,function(tt){return tt})||[]},only:function(z){if(!k(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return he.Activity=g,he.Children=Et,he.Component=v,he.Fragment=i,he.Profiler=l,he.PureComponent=N,he.StrictMode=s,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,he.__COMPILER_RUNTIME={__proto__:null,c:function(z){return B.H.useMemoCache(z)}},he.cache=function(z){return function(){return z.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(z,tt,vt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ct=b({},z.props),Ot=z.key;if(tt!=null)for(nt in tt.key!==void 0&&(Ot=""+tt.key),tt)!X.call(tt,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&tt.ref===void 0||(Ct[nt]=tt[nt]);var nt=arguments.length-2;if(nt===1)Ct.children=vt;else if(1<nt){for(var $=Array(nt),Tt=0;Tt<nt;Tt++)$[Tt]=arguments[Tt+2];Ct.children=$}return L(z.type,Ot,Ct)},he.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},he.createElement=function(z,tt,vt){var Ct,Ot={},nt=null;if(tt!=null)for(Ct in tt.key!==void 0&&(nt=""+tt.key),tt)X.call(tt,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Ot[Ct]=tt[Ct]);var $=arguments.length-2;if($===1)Ot.children=vt;else if(1<$){for(var Tt=Array($),Lt=0;Lt<$;Lt++)Tt[Lt]=arguments[Lt+2];Ot.children=Tt}if(z&&z.defaultProps)for(Ct in $=z.defaultProps,$)Ot[Ct]===void 0&&(Ot[Ct]=$[Ct]);return L(z,nt,Ot)},he.createRef=function(){return{current:null}},he.forwardRef=function(z){return{$$typeof:d,render:z}},he.isValidElement=k,he.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:W}},he.memo=function(z,tt){return{$$typeof:p,type:z,compare:tt===void 0?null:tt}},he.startTransition=function(z){var tt=B.T,vt={};B.T=vt;try{var Ct=z(),Ot=B.S;Ot!==null&&Ot(vt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(O,yt)}catch(nt){yt(nt)}finally{tt!==null&&vt.types!==null&&(tt.types=vt.types),B.T=tt}},he.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},he.use=function(z){return B.H.use(z)},he.useActionState=function(z,tt,vt){return B.H.useActionState(z,tt,vt)},he.useCallback=function(z,tt){return B.H.useCallback(z,tt)},he.useContext=function(z){return B.H.useContext(z)},he.useDebugValue=function(){},he.useDeferredValue=function(z,tt){return B.H.useDeferredValue(z,tt)},he.useEffect=function(z,tt){return B.H.useEffect(z,tt)},he.useEffectEvent=function(z){return B.H.useEffectEvent(z)},he.useId=function(){return B.H.useId()},he.useImperativeHandle=function(z,tt,vt){return B.H.useImperativeHandle(z,tt,vt)},he.useInsertionEffect=function(z,tt){return B.H.useInsertionEffect(z,tt)},he.useLayoutEffect=function(z,tt){return B.H.useLayoutEffect(z,tt)},he.useMemo=function(z,tt){return B.H.useMemo(z,tt)},he.useOptimistic=function(z,tt){return B.H.useOptimistic(z,tt)},he.useReducer=function(z,tt,vt){return B.H.useReducer(z,tt,vt)},he.useRef=function(z){return B.H.useRef(z)},he.useState=function(z){return B.H.useState(z)},he.useSyncExternalStore=function(z,tt,vt){return B.H.useSyncExternalStore(z,tt,vt)},he.useTransition=function(){return B.H.useTransition()},he.version="19.2.8",he}var j_;function jd(){return j_||(j_=1,oh.exports=cS()),oh.exports}var ae=jd();const uS=vv(ae);var lh={exports:{}},Do={},ch={exports:{}},uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function fS(){return X_||(X_=1,(function(r){function t(P,Y){var W=P.length;P.push(Y);t:for(;0<W;){var yt=W-1>>>1,Et=P[yt];if(0<l(Et,Y))P[yt]=Y,P[W]=Et,W=yt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Y=P[0],W=P.pop();if(W!==Y){P[0]=W;t:for(var yt=0,Et=P.length,z=Et>>>1;yt<z;){var tt=2*(yt+1)-1,vt=P[tt],Ct=tt+1,Ot=P[Ct];if(0>l(vt,W))Ct<Et&&0>l(Ot,vt)?(P[yt]=Ot,P[Ct]=W,yt=Ct):(P[yt]=vt,P[tt]=W,yt=tt);else if(Ct<Et&&0>l(Ot,W))P[yt]=Ot,P[Ct]=W,yt=Ct;else break t}}return Y}function l(P,Y){var W=P.sortIndex-Y.sortIndex;return W!==0?W:P.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,x=3,y=!1,E=!1,b=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var Y=i(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=P)s(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function V(P){if(b=!1,w(P),!E)if(i(m)!==null)E=!0,O||(O=!0,Q());else{var Y=i(p);Y!==null&&st(V,Y.startTime-P)}}var O=!1,B=-1,X=5,L=-1;function D(){return M?!0:!(r.unstable_now()-L<X)}function k(){if(M=!1,O){var P=r.unstable_now();L=P;var Y=!0;try{t:{E=!1,b&&(b=!1,F(B),B=-1),y=!0;var W=x;try{e:{for(w(P),g=i(m);g!==null&&!(g.expirationTime>P&&D());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,x=g.priorityLevel;var Et=yt(g.expirationTime<=P);if(P=r.unstable_now(),typeof Et=="function"){g.callback=Et,w(P),Y=!0;break e}g===i(m)&&s(m),w(P)}else s(m);g=i(m)}if(g!==null)Y=!0;else{var z=i(p);z!==null&&st(V,z.startTime-P),Y=!1}}break t}finally{g=null,x=W,y=!1}Y=void 0}}finally{Y?Q():O=!1}}}var Q;if(typeof N=="function")Q=function(){N(k)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ft=ot.port2;ot.port1.onmessage=k,Q=function(){ft.postMessage(null)}}else Q=function(){v(k,0)};function st(P,Y){B=v(function(){P(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var W=x;x=Y;try{return P()}finally{x=W}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=x;x=P;try{return Y()}finally{x=W}},r.unstable_scheduleCallback=function(P,Y,W){var yt=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?yt+W:yt):W=yt,P){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=W+Et,P={id:_++,callback:Y,priorityLevel:P,startTime:W,expirationTime:Et,sortIndex:-1},W>yt?(P.sortIndex=W,t(p,P),i(m)===null&&P===i(p)&&(b?(F(B),B=-1):b=!0,st(V,W-yt))):(P.sortIndex=Et,t(m,P),E||y||(E=!0,O||(O=!0,Q()))),P},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(P){var Y=x;return function(){var W=x;x=Y;try{return P.apply(this,arguments)}finally{x=W}}}})(uh)),uh}var W_;function hS(){return W_||(W_=1,ch.exports=fS()),ch.exports}var fh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function dS(){if(q_)return Un;q_=1;var r=jd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Un.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.2.8",Un}var Y_;function pS(){if(Y_)return fh.exports;Y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),fh.exports=dS(),fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function mS(){if(Z_)return Do;Z_=1;var r=hS(),t=jd(),i=pS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=f;break}if(A===o){S=!0,o=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=u;break}if(A===o){S=!0,o=f,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case O:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var st=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},yt=[],Et=-1;function z(e){return{current:e}}function tt(e){0>Et||(e.current=yt[Et],yt[Et]=null,Et--)}function vt(e,n){Et++,yt[Et]=e.current,e.current=n}var Ct=z(null),Ot=z(null),nt=z(null),$=z(null);function Tt(e,n){switch(vt(nt,n),vt(Ot,e),vt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?u_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=u_(n),e=f_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Ct),vt(Ct,e)}function Lt(){tt(Ct),tt(Ot),tt(nt)}function Vt(e){e.memoizedState!==null&&vt($,e);var n=Ct.current,a=f_(n,e.type);n!==a&&(vt(Ot,e),vt(Ct,a))}function le(e){Ot.current===e&&(tt(Ct),tt(Ot)),$.current===e&&(tt($),bo._currentValue=W)}var se,H;function xe(e){if(se===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);se=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+e+H}var Qt=!1;function zt(e,n){if(!e||Qt)return"";Qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ht){var rt=ht}Reflect.construct(e,[],St)}else{try{St.call()}catch(ht){rt=ht}e.call(St.prototype)}}else{try{throw Error()}catch(ht){rt=ht}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ht){if(ht&&rt&&typeof ht.stack=="string")return[ht.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var G=S.split(`
`),at=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===at.length)for(o=G.length-1,u=at.length-1;1<=o&&0<=u&&G[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==at[u]){var mt=`
`+G[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xe(a):""}function Dt(e,n){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe("Lazy");case 13:return e.child!==n&&n!==null?xe("Suspense Fallback"):xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return zt(e.type,!1);case 11:return zt(e.type.render,!1);case 1:return zt(e.type,!0);case 31:return xe("Activity");default:return""}}function Zt(e){try{var n="",a=null;do n+=Dt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var bt=Object.prototype.hasOwnProperty,Xt=r.unstable_scheduleCallback,He=r.unstable_cancelCallback,ze=r.unstable_shouldYield,I=r.unstable_requestPaint,T=r.unstable_now,et=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,At=r.unstable_UserBlockingPriority,dt=r.unstable_NormalPriority,te=r.unstable_LowPriority,Pt=r.unstable_IdlePriority,Kt=r.log,Jt=r.unstable_setDisableYieldValue,wt=null,Nt=null;function kt(e){if(typeof Kt=="function"&&Jt(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(wt,e)}catch{}}var It=Math.clz32?Math.clz32:R,Bt=Math.log,ce=Math.LN2;function R(e){return e>>>=0,e===0?32:31-(Bt(e)/ce|0)|0}var ct=256,Rt=262144,Ut=4194304;function xt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=xt(o):(S&=A,S!==0?u=xt(S):a||(a=A&~e,a!==0&&(u=xt(a))))):(A=o&~f,A!==0?u=xt(A):S!==0?u=xt(S):a||(a=o&~e,a!==0&&(u=xt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),e}function Ce(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ri(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,at=e.hiddenUpdates;for(a=S&~a;0<a;){var mt=31-It(a),St=1<<mt;A[mt]=0,G[mt]=-1;var rt=at[mt];if(rt!==null)for(at[mt]=null,mt=0;mt<rt.length;mt++){var ht=rt[mt];ht!==null&&(ht.lane&=-536870913)}a&=~St}o!==0&&Br(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Br(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function wi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ws(e,n){var a=n&-n;return a=(a&42)!==0?1:Ds(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ds(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Us(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ya(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:O_(e.type))}function Fr(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var Kn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Kn,En="__reactProps$"+Kn,ha="__reactContainer$"+Kn,Hr="__reactEvents$"+Kn,$c="__reactListeners$"+Kn,tu="__reactHandles$"+Kn,Ko="__reactResources$"+Kn,Za="__reactMarker$"+Kn;function C(e){delete e[ln],delete e[En],delete e[Hr],delete e[$c],delete e[tu]}function q(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ha]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=v_(e);e!==null;){if(a=e[ln])return a;e=v_(e)}return n}e=a,a=e.parentNode}return null}function lt(e){if(e=e[ln]||e[ha]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ut(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function K(e){var n=e[Ko];return n||(n=e[Ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Mt(e){e[Za]=!0}var Ft=new Set,qt={};function Gt(e,n){ee(e,n),ee(e+"Capture",n)}function ee(e,n){for(qt[e]=n,e=0;e<n.length;e++)Ft.add(n[e])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},ve={};function Oe(e){return bt.call(ve,e)?!0:bt.call(ne,e)?!1:oe.test(e)?ve[e]=!0:(ne[e]=!0,!1)}function We(e,n,a){if(Oe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ye(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function we(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Tn(e){if(!e._valueTracker){var n=Ye(e)?"checked":"value";e._valueTracker=we(e,n,""+e[n])}}function Hi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ka=/[\n"\\]/g;function Te(e){return e.replace(Ka,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(e,n,a,o,u,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Yt(n)):e.value!==""+Yt(n)&&(e.value=""+Yt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?pn(e,S,Yt(n)):a!=null?pn(e,S,Yt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Yt(A):e.removeAttribute("name")}function zn(e,n,a,o,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Tn(e);return}a=a!=null?""+Yt(a):"",n=n!=null?""+Yt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Tn(e)}function pn(e,n,a){n==="number"&&xn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Yt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ls(e,n,a){if(n!=null&&(n=""+Yt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Yt(a):""}function Di(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(st(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Yt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Tn(e)}function Ns(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var nx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function op(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||nx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function lp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&op(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&op(e,f,n[f])}function eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gi(){}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,Ps=null;function cp(e){var n=lt(e);if(n&&(e=n.stateNode)){var a=e[En]||null;t:switch(e=n.stateNode,n.type){case"input":if(Dn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Te(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[En]||null;if(!u)throw Error(s(90));Dn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Hi(o)}break t;case"textarea":Ls(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(e,!!a.multiple,n,!1)}}}var au=!1;function up(e,n,a){if(au)return e(n,a);au=!0;try{var o=e(n);return o}finally{if(au=!1,(Os!==null||Ps!==null)&&(Bl(),Os&&(n=Os,e=Ps,Ps=Os=null,cp(n),e)))for(n=0;n<e.length;n++)cp(e[n])}}function Gr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(Vi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){su=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{su=!1}var da=null,ru=null,Jo=null;function fp(){if(Jo)return Jo;var e,n=ru,a=n.length,o,u="value"in da?da.value:da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return Jo=u.slice(e,1<o?1-o:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function hp(){return!1}function Hn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:hp,this.isPropagationStopped=hp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Hn(Qa),kr=g({},Qa,{view:0,detail:0}),sx=Hn(kr),ou,lu,jr,nl=g({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(ou=e.screenX-jr.screenX,lu=e.screenY-jr.screenY):lu=ou=0,jr=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),dp=Hn(nl),rx=g({},nl,{dataTransfer:0}),ox=Hn(rx),lx=g({},kr,{relatedTarget:0}),cu=Hn(lx),cx=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=Hn(cx),fx=g({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hx=Hn(fx),dx=g({},Qa,{data:0}),pp=Hn(dx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _x(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gx[e])?!!n[e]:!1}function uu(){return _x}var vx=g({},kr,{key:function(e){if(e.key){var n=px[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xx=Hn(vx),yx=g({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=Hn(yx),Sx=g({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),Mx=Hn(Sx),Ex=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Hn(Ex),bx=g({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=Hn(bx),Rx=g({},Qa,{newState:0,oldState:0}),Cx=Hn(Rx),wx=[9,13,27,32],fu=Vi&&"CompositionEvent"in window,Xr=null;Vi&&"documentMode"in document&&(Xr=document.documentMode);var Dx=Vi&&"TextEvent"in window&&!Xr,gp=Vi&&(!fu||Xr&&8<Xr&&11>=Xr),_p=" ",vp=!1;function xp(e,n){switch(e){case"keyup":return wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zs=!1;function Ux(e,n){switch(e){case"compositionend":return yp(n);case"keypress":return n.which!==32?null:(vp=!0,_p);case"textInput":return e=n.data,e===_p&&vp?null:e;default:return null}}function Lx(e,n){if(zs)return e==="compositionend"||!fu&&xp(e,n)?(e=fp(),Jo=ru=da=null,zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var Nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Nx[e.type]:n==="textarea"}function Mp(e,n,a,o){Os?Ps?Ps.push(o):Ps=[o]:Os=o,n=Xl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Wr=null,qr=null;function Ox(e){a_(e,0)}function il(e){var n=ut(e);if(Hi(n))return e}function Ep(e,n){if(e==="change")return n}var Tp=!1;if(Vi){var hu;if(Vi){var du="oninput"in document;if(!du){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),du=typeof bp.oninput=="function"}hu=du}else hu=!1;Tp=hu&&(!document.documentMode||9<document.documentMode)}function Ap(){Wr&&(Wr.detachEvent("onpropertychange",Rp),qr=Wr=null)}function Rp(e){if(e.propertyName==="value"&&il(qr)){var n=[];Mp(n,qr,e,iu(e)),up(Ox,n)}}function Px(e,n,a){e==="focusin"?(Ap(),Wr=n,qr=a,Wr.attachEvent("onpropertychange",Rp)):e==="focusout"&&Ap()}function zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(qr)}function Ix(e,n){if(e==="click")return il(n)}function Bx(e,n){if(e==="input"||e==="change")return il(n)}function Fx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:Fx;function Yr(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!bt.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function Cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wp(e,n){var a=Cp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cp(a)}}function Dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=xn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=xn(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Hx=Vi&&"documentMode"in document&&11>=document.documentMode,Is=null,mu=null,Zr=null,gu=!1;function Lp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||Is==null||Is!==xn(o)||(o=Is,"selectionStart"in o&&pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zr&&Yr(Zr,o)||(Zr=o,o=Xl(mu,"onSelect"),0<o.length&&(n=new el("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Is)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Bs={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},_u={},Np={};Vi&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function $a(e){if(_u[e])return _u[e];if(!Bs[e])return e;var n=Bs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Np)return _u[e]=n[a];return e}var Op=$a("animationend"),Pp=$a("animationiteration"),zp=$a("animationstart"),Gx=$a("transitionrun"),Vx=$a("transitionstart"),kx=$a("transitioncancel"),Ip=$a("transitionend"),Bp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function xi(e,n){Bp.set(e,n),Gt(n,[e])}var al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Fs=0,xu=0;function sl(){for(var e=Fs,n=xu=Fs=0;n<e;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Fp(a,u,f)}}function rl(e,n,a,o){oi[Fs++]=e,oi[Fs++]=n,oi[Fs++]=a,oi[Fs++]=o,xu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yu(e,n,a,o){return rl(e,n,a,o),ol(e)}function ts(e,n){return rl(e,null,null,n),ol(e)}function Fp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<vo)throw vo=0,Df=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hs={};function jx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,o){return new jx(e,n,a,o)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")Su(e)&&(S=1);else if(typeof e=="string")S=Zy(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=Jn(31,a,n,u),e.elementType=L,e.lanes=f,e;case b:return es(a.children,u,f,n);case M:S=8,u|=24;break;case v:return e=Jn(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case V:return e=Jn(13,a,n,u),e.elementType=V,e.lanes=f,e;case O:return e=Jn(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:S=10;break t;case F:S=9;break t;case w:S=11;break t;case B:S=14;break t;case X:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Jn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function es(e,n,a,o){return e=Jn(7,e,o,n),e.lanes=a,e}function Mu(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function Gp(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Eu(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Zt(n)},Vp.set(e,n),n)}return{value:e,source:n,stack:Zt(n)}}var Gs=[],Vs=0,cl=null,Kr=0,ci=[],ui=0,pa=null,Ui=1,Li="";function ji(e,n){Gs[Vs++]=Kr,Gs[Vs++]=cl,cl=e,Kr=n}function kp(e,n,a){ci[ui++]=Ui,ci[ui++]=Li,ci[ui++]=pa,pa=e;var o=Ui;e=Li;var u=32-It(o)-1;o&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ui=1<<32-It(n)+u|a<<u|o,Li=f+e}else Ui=1<<f|a<<u|o,Li=e}function Tu(e){e.return!==null&&(ji(e,1),kp(e,1,0))}function bu(e){for(;e===cl;)cl=Gs[--Vs],Gs[Vs]=null,Kr=Gs[--Vs],Gs[Vs]=null;for(;e===pa;)pa=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null,Ui=ci[--ui],ci[ui]=null}function jp(e,n){ci[ui++]=Ui,ci[ui++]=Li,ci[ui++]=pa,Ui=n.id,Li=n.overflow,pa=e}var bn=null,Ze=null,Re=!1,ma=null,fi=!1,Au=Error(s(519));function ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(li(n,e)),Au}function Xp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[En]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)Me(yo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Di(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||l_(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||ga(e,!0)}function Wp(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:bn=bn.return}}function ks(e){if(e!==bn)return!1;if(!Re)return Wp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xf(e.type,e.memoizedProps)),a=!a),a&&Ze&&ga(e),Wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=__(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=__(e)}else n===27?(n=Ze,Da(e.type)?(e=Kf,Kf=null,Ze=e):Ze=n):Ze=bn?di(e.stateNode.nextSibling):null;return!0}function ns(){Ze=bn=null,Re=!1}function Ru(){var e=ma;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),ma=null),e}function Qr(e){ma===null?ma=[e]:ma.push(e)}var Cu=z(null),is=null,Xi=null;function _a(e,n,a){vt(Cu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Cu.current,tt(Cu)}function wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Du(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),wu(f.return,a,e),o||(S=null);break t}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),wu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function js(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;Qn(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===$.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}u=u.return}e!==null&&Du(n,e,a,o),n.flags|=262144}function ul(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return qp(is,e)}function fl(e,n){return is===null&&as(e),qp(e,n)}function qp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(s(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var Xx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Wx=r.unstable_scheduleCallback,qx=r.unstable_NormalPriority,cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new Xx,data:new Map,refCount:0}}function Jr(e){e.refCount--,e.refCount===0&&Wx(qx,function(){e.controller.abort()})}var $r=null,Lu=0,Xs=0,Ws=null;function Yx(e,n){if($r===null){var a=$r=[];Lu=0,Xs=zf(),Ws={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Lu++,n.then(Yp,Yp),n}function Yp(){if(--Lu===0&&$r!==null){Ws!==null&&(Ws.status="fulfilled");var e=$r;$r=null,Xs=0,Ws=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Zx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Zp=P.S;P.S=function(e,n){Lg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yx(e,n),Zp!==null&&Zp(e,n)};var ss=z(null);function Nu(){var e=ss.current;return e!==null?e:qe.pooledCache}function hl(e,n){n===null?vt(ss,ss.current):vt(ss,n.pool)}function Kp(){var e=Nu();return e===null?null:{parent:cn._currentValue,pool:e}}var qs=Error(s(460)),Ou=Error(s(474)),dl=Error(s(542)),pl={then:function(){}};function Qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tm(e),e}throw os=n,qs}}function rs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(os=a,qs):a}}var os=null;function $p(){if(os===null)throw Error(s(459));var e=os;return os=null,e}function tm(e){if(e===qs||e===dl)throw Error(s(483))}var Ys=null,to=0;function ml(e){var n=to;return to+=1,Ys===null&&(Ys=[]),Jp(Ys,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function gl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function em(e){function n(Z,j){if(e){var it=Z.deletions;it===null?(Z.deletions=[j],Z.flags|=16):it.push(j)}}function a(Z,j){if(!e)return null;for(;j!==null;)n(Z,j),j=j.sibling;return null}function o(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function u(Z,j){return Z=ki(Z,j),Z.index=0,Z.sibling=null,Z}function f(Z,j,it){return Z.index=it,e?(it=Z.alternate,it!==null?(it=it.index,it<j?(Z.flags|=67108866,j):it):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,j,it,_t){return j===null||j.tag!==6?(j=Mu(it,Z.mode,_t),j.return=Z,j):(j=u(j,it),j.return=Z,j)}function G(Z,j,it,_t){var ie=it.type;return ie===b?mt(Z,j,it.props.children,_t,it.key):j!==null&&(j.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===X&&rs(ie)===j.type)?(j=u(j,it.props),eo(j,it),j.return=Z,j):(j=ll(it.type,it.key,it.props,null,Z.mode,_t),eo(j,it),j.return=Z,j)}function at(Z,j,it,_t){return j===null||j.tag!==4||j.stateNode.containerInfo!==it.containerInfo||j.stateNode.implementation!==it.implementation?(j=Eu(it,Z.mode,_t),j.return=Z,j):(j=u(j,it.children||[]),j.return=Z,j)}function mt(Z,j,it,_t,ie){return j===null||j.tag!==7?(j=es(it,Z.mode,_t,ie),j.return=Z,j):(j=u(j,it),j.return=Z,j)}function St(Z,j,it){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Mu(""+j,Z.mode,it),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return it=ll(j.type,j.key,j.props,null,Z.mode,it),eo(it,j),it.return=Z,it;case E:return j=Eu(j,Z.mode,it),j.return=Z,j;case X:return j=rs(j),St(Z,j,it)}if(st(j)||Q(j))return j=es(j,Z.mode,it,null),j.return=Z,j;if(typeof j.then=="function")return St(Z,ml(j),it);if(j.$$typeof===N)return St(Z,fl(Z,j),it);gl(Z,j)}return null}function rt(Z,j,it,_t){var ie=j!==null?j.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return ie!==null?null:A(Z,j,""+it,_t);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case y:return it.key===ie?G(Z,j,it,_t):null;case E:return it.key===ie?at(Z,j,it,_t):null;case X:return it=rs(it),rt(Z,j,it,_t)}if(st(it)||Q(it))return ie!==null?null:mt(Z,j,it,_t,null);if(typeof it.then=="function")return rt(Z,j,ml(it),_t);if(it.$$typeof===N)return rt(Z,j,fl(Z,it),_t);gl(Z,it)}return null}function ht(Z,j,it,_t,ie){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get(it)||null,A(j,Z,""+_t,ie);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Z=Z.get(_t.key===null?it:_t.key)||null,G(j,Z,_t,ie);case E:return Z=Z.get(_t.key===null?it:_t.key)||null,at(j,Z,_t,ie);case X:return _t=rs(_t),ht(Z,j,it,_t,ie)}if(st(_t)||Q(_t))return Z=Z.get(it)||null,mt(j,Z,_t,ie,null);if(typeof _t.then=="function")return ht(Z,j,it,ml(_t),ie);if(_t.$$typeof===N)return ht(Z,j,it,fl(j,_t),ie);gl(j,_t)}return null}function Wt(Z,j,it,_t){for(var ie=null,De=null,$t=j,pe=j=0,Ae=null;$t!==null&&pe<it.length;pe++){$t.index>pe?(Ae=$t,$t=null):Ae=$t.sibling;var Ue=rt(Z,$t,it[pe],_t);if(Ue===null){$t===null&&($t=Ae);break}e&&$t&&Ue.alternate===null&&n(Z,$t),j=f(Ue,j,pe),De===null?ie=Ue:De.sibling=Ue,De=Ue,$t=Ae}if(pe===it.length)return a(Z,$t),Re&&ji(Z,pe),ie;if($t===null){for(;pe<it.length;pe++)$t=St(Z,it[pe],_t),$t!==null&&(j=f($t,j,pe),De===null?ie=$t:De.sibling=$t,De=$t);return Re&&ji(Z,pe),ie}for($t=o($t);pe<it.length;pe++)Ae=ht($t,Z,pe,it[pe],_t),Ae!==null&&(e&&Ae.alternate!==null&&$t.delete(Ae.key===null?pe:Ae.key),j=f(Ae,j,pe),De===null?ie=Ae:De.sibling=Ae,De=Ae);return e&&$t.forEach(function(Pa){return n(Z,Pa)}),Re&&ji(Z,pe),ie}function re(Z,j,it,_t){if(it==null)throw Error(s(151));for(var ie=null,De=null,$t=j,pe=j=0,Ae=null,Ue=it.next();$t!==null&&!Ue.done;pe++,Ue=it.next()){$t.index>pe?(Ae=$t,$t=null):Ae=$t.sibling;var Pa=rt(Z,$t,Ue.value,_t);if(Pa===null){$t===null&&($t=Ae);break}e&&$t&&Pa.alternate===null&&n(Z,$t),j=f(Pa,j,pe),De===null?ie=Pa:De.sibling=Pa,De=Pa,$t=Ae}if(Ue.done)return a(Z,$t),Re&&ji(Z,pe),ie;if($t===null){for(;!Ue.done;pe++,Ue=it.next())Ue=St(Z,Ue.value,_t),Ue!==null&&(j=f(Ue,j,pe),De===null?ie=Ue:De.sibling=Ue,De=Ue);return Re&&ji(Z,pe),ie}for($t=o($t);!Ue.done;pe++,Ue=it.next())Ue=ht($t,Z,pe,Ue.value,_t),Ue!==null&&(e&&Ue.alternate!==null&&$t.delete(Ue.key===null?pe:Ue.key),j=f(Ue,j,pe),De===null?ie=Ue:De.sibling=Ue,De=Ue);return e&&$t.forEach(function(rS){return n(Z,rS)}),Re&&ji(Z,pe),ie}function ke(Z,j,it,_t){if(typeof it=="object"&&it!==null&&it.type===b&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case y:t:{for(var ie=it.key;j!==null;){if(j.key===ie){if(ie=it.type,ie===b){if(j.tag===7){a(Z,j.sibling),_t=u(j,it.props.children),_t.return=Z,Z=_t;break t}}else if(j.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===X&&rs(ie)===j.type){a(Z,j.sibling),_t=u(j,it.props),eo(_t,it),_t.return=Z,Z=_t;break t}a(Z,j);break}else n(Z,j);j=j.sibling}it.type===b?(_t=es(it.props.children,Z.mode,_t,it.key),_t.return=Z,Z=_t):(_t=ll(it.type,it.key,it.props,null,Z.mode,_t),eo(_t,it),_t.return=Z,Z=_t)}return S(Z);case E:t:{for(ie=it.key;j!==null;){if(j.key===ie)if(j.tag===4&&j.stateNode.containerInfo===it.containerInfo&&j.stateNode.implementation===it.implementation){a(Z,j.sibling),_t=u(j,it.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,j);break}else n(Z,j);j=j.sibling}_t=Eu(it,Z.mode,_t),_t.return=Z,Z=_t}return S(Z);case X:return it=rs(it),ke(Z,j,it,_t)}if(st(it))return Wt(Z,j,it,_t);if(Q(it)){if(ie=Q(it),typeof ie!="function")throw Error(s(150));return it=ie.call(it),re(Z,j,it,_t)}if(typeof it.then=="function")return ke(Z,j,ml(it),_t);if(it.$$typeof===N)return ke(Z,j,fl(Z,it),_t);gl(Z,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,j!==null&&j.tag===6?(a(Z,j.sibling),_t=u(j,it),_t.return=Z,Z=_t):(a(Z,j),_t=Mu(it,Z.mode,_t),_t.return=Z,Z=_t),S(Z)):a(Z,j)}return function(Z,j,it,_t){try{to=0;var ie=ke(Z,j,it,_t);return Ys=null,ie}catch($t){if($t===qs||$t===dl)throw $t;var De=Jn(29,$t,null,Z.mode);return De.lanes=_t,De.return=Z,De}finally{}}}var ls=em(!0),nm=em(!1),va=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ol(e),Fp(e,null,a),n}return rl(e,o,n,a),ol(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,wi(e,a)}}function Iu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function io(){if(Bu){var e=Ws;if(e!==null)throw e}}function ao(e,n,a,o){Bu=!1;var u=e.updateQueue;va=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,at=G.next;G.next=null,S===null?f=at:S.next=at,S=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==S&&(A===null?mt.firstBaseUpdate=at:A.next=at,mt.lastBaseUpdate=G))}if(f!==null){var St=u.baseState;S=0,mt=at=G=null,A=f;do{var rt=A.lane&-536870913,ht=rt!==A.lane;if(ht?(be&rt)===rt:(o&rt)===rt){rt!==0&&rt===Xs&&(Bu=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Wt=e,re=A;rt=n;var ke=a;switch(re.tag){case 1:if(Wt=re.payload,typeof Wt=="function"){St=Wt.call(ke,St,rt);break t}St=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=re.payload,rt=typeof Wt=="function"?Wt.call(ke,St,rt):Wt,rt==null)break t;St=g({},St,rt);break t;case 2:va=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[rt]:ht.push(rt))}else ht={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(at=mt=ht,G=St):mt=mt.next=ht,S|=rt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ht=A,A=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);mt===null&&(G=St),u.baseState=G,u.firstBaseUpdate=at,u.lastBaseUpdate=mt,f===null&&(u.shared.lanes=0),ba|=S,e.lanes=S,e.memoizedState=St}}function im(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)im(a[e],n)}var Zs=z(null),_l=z(0);function sm(e,n){e=ea,vt(_l,e),vt(Zs,n),ea=e|n.baseLanes}function Fu(){vt(_l,ea),vt(Zs,Zs.current)}function Hu(){ea=_l.current,tt(Zs),tt(_l)}var $n=z(null),hi=null;function Sa(e){var n=e.alternate;vt(rn,rn.current&1),vt($n,e),hi===null&&(n===null||Zs.current!==null||n.memoizedState!==null)&&(hi=e)}function Gu(e){vt(rn,rn.current),vt($n,e),hi===null&&(hi=e)}function rm(e){e.tag===22?(vt(rn,rn.current),vt($n,e),hi===null&&(hi=e)):Ma()}function Ma(){vt(rn,rn.current),vt($n,$n.current)}function ti(e){tt($n),hi===e&&(hi=null),tt(rn)}var rn=z(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yf(a)||Zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,de=null,Ge=null,un=null,xl=!1,Ks=!1,cs=!1,yl=0,so=0,Qs=null,Kx=0;function tn(){throw Error(s(321))}function Vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function ku(e,n,a,o,u,f){return qi=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?km:sf,cs=!1,f=a(o,u),cs=!1,Ks&&(f=lm(n,a,o,u)),om(e),f}function om(e){P.H=lo;var n=Ge!==null&&Ge.next!==null;if(qi=0,un=Ge=de=null,xl=!1,so=0,Qs=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&ul(e)&&(fn=!0))}function lm(e,n,a,o){de=e;var u=0;do{if(Ks&&(Qs=null),so=0,Ks=!1,25<=u)throw Error(s(301));if(u+=1,un=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=jm,f=n(a,o)}while(Ks);return f}function Qx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(de.flags|=1024),n}function ju(){var e=yl!==0;return yl=0,e}function Xu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Wu(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}qi=0,un=Ge=de=null,Ks=!1,so=yl=0,Qs=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?de.memoizedState=un=e:un=un.next=e,un}function on(){if(Ge===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=un===null?de.memoizedState:un.next;if(n!==null)un=n,Ge=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?de.memoizedState=un=e:un=un.next=e}return un}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=so;return so+=1,Qs===null&&(Qs=[]),e=Jp(Qs,e,n),n=de,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?km:sf),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===N)return An(e)}throw Error(s(438,String(e)))}function qu(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Yi(e,n){return typeof n=="function"?n(e):n}function El(e){var n=on();return Yu(n,Ge,e)}function Yu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=S=null,G=null,at=n,mt=!1;do{var St=at.lane&-536870913;if(St!==at.lane?(be&St)===St:(qi&St)===St){var rt=at.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),St===Xs&&(mt=!0);else if((qi&rt)===rt){at=at.next,rt===Xs&&(mt=!0);continue}else St={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=St,S=f):G=G.next=St,de.lanes|=rt,ba|=rt;St=at.action,cs&&a(f,St),f=at.hasEagerState?at.eagerState:a(f,St)}else rt={lane:St,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=rt,S=f):G=G.next=rt,de.lanes|=St,ba|=St;at=at.next}while(at!==null&&at!==n);if(G===null?S=f:G.next=A,!Qn(f,e.memoizedState)&&(fn=!0,mt&&(a=Ws,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Zu(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Qn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function cm(e,n,a){var o=de,u=on(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Qn((Ge||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,Ju(hm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,Js(9,{destroy:void 0},fm.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));f||(qi&127)!==0||um(o,n,a)}return a}function um(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Sl(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,o){n.value=a,n.getSnapshot=o,dm(n)&&pm(e)}function hm(e,n,a){return a(function(){dm(n)&&pm(e)})}function dm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function pm(e){var n=ts(e,2);n!==null&&Xn(n,e,2)}function Ku(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),cs){kt(!0);try{a()}finally{kt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},n}function mm(e,n,a,o){return e.baseState=a,Yu(e,Ge,typeof o=="function"?o:Yi)}function Jx(e,n,a,o,u){if(Al(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var A=a(u,o),G=P.S;G!==null&&G(S,A),_m(e,n,A)}catch(at){Qu(e,n,at)}finally{f!==null&&S.types!==null&&(f.types=S.types),P.T=f}}else try{f=a(u,o),_m(e,n,f)}catch(at){Qu(e,n,at)}}function _m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){vm(e,n,o)},function(o){return Qu(e,n,o)}):vm(e,n,a)}function vm(e,n,a){n.status="fulfilled",n.value=a,xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gm(e,a)))}function Qu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==o)}e.action=null}function xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ym(e,n){return n}function Sm(e,n){if(Re){var a=qe.formState;if(a!==null){t:{var o=de;if(Re){if(Ze){e:{for(var u=Ze,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=di(u.nextSibling),o=u.data==="F!";break t}}ga(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:n},a.queue=o,a=Hm.bind(null,de,o),o.dispatch=a,o=Ku(!1),f=af.bind(null,de,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Jx.bind(null,de,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Mm(e){var n=on();return Em(n,Ge,e)}function Em(e,n,a){if(n=Yu(e,n,ym)[0],e=El(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ro(n)}catch(S){throw S===qs?dl:S}else o=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Js(9,{destroy:void 0},$x.bind(null,u,a),null)),[o,f,e]}function $x(e,n){e.action=n}function Tm(e){var n=on(),a=Ge;if(a!==null)return Em(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Js(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=Sl(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function bm(){return on().memoizedState}function Tl(e,n,a,o){var u=In();de.flags|=e,u.memoizedState=Js(1|n,{destroy:void 0},a,o===void 0?null:o)}function bl(e,n,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;Ge!==null&&o!==null&&Vu(o,Ge.memoizedState.deps)?u.memoizedState=Js(n,f,a,o):(de.flags|=e,u.memoizedState=Js(1|n,f,a,o))}function Am(e,n){Tl(8390656,8,e,n)}function Ju(e,n){bl(2048,8,e,n)}function ty(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=Sl(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rm(e){var n=on().memoizedState;return ty({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cm(e,n){return bl(4,2,e,n)}function wm(e,n){return bl(4,4,e,n)}function Dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Um(e,n,a){a=a!=null?a.concat([e]):null,bl(4,4,Dm.bind(null,n,e),a)}function $u(){}function Lm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Vu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Nm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Vu(n,o[1]))return o[0];if(o=e(),cs){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o}function tf(e,n,a){return a===void 0||(qi&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Og(),de.lanes|=e,ba|=e,a)}function Om(e,n,a,o){return Qn(a,n)?a:Zs.current!==null?(e=tf(e,a,o),Qn(e,n)||(fn=!0),e):(qi&42)===0||(qi&1073741824)!==0&&(be&261930)===0?(fn=!0,e.memoizedState=a):(e=Og(),de.lanes|=e,ba|=e,n)}function Pm(e,n,a,o,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var S=P.T,A={};P.T=A,af(e,!1,n,a);try{var G=u(),at=P.S;if(at!==null&&at(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=Zx(G,o);oo(e,n,mt,ii(e))}else oo(e,n,o,ii(e))}catch(St){oo(e,n,{then:function(){},status:"rejected",reason:St},ii())}finally{Y.p=f,S!==null&&A.types!==null&&(S.types=A.types),P.T=S}}function ey(){}function ef(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=zm(e).queue;Pm(e,u,n,W,a===null?ey:function(){return Im(e),a(o)})}function zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Im(e){var n=zm(e);n.next===null&&(n=e.alternate.memoizedState),oo(e,n.next.queue,{},ii())}function nf(){return An(bo)}function Bm(){return on().memoizedState}function Fm(){return on().memoizedState}function ny(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=xa(a);var o=ya(n,e,a);o!==null&&(Xn(o,n,a),no(o,n,a)),n={cache:Uu()},e.payload=n;return}n=n.return}}function iy(e,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(e)?Gm(n,a):(a=yu(e,n,a,o),a!==null&&(Xn(a,e,o),Vm(a,n,o)))}function Hm(e,n,a){var o=ii();oo(e,n,a,o)}function oo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(e))Gm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,Qn(A,S))return rl(e,n,u,0),qe===null&&sl(),!1}catch{}finally{}if(a=yu(e,n,u,o),a!==null)return Xn(a,e,o),Vm(a,n,o),!0}return!1}function af(e,n,a,o){if(o={lane:2,revertLane:zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(n)throw Error(s(479))}else n=yu(e,a,o,2),n!==null&&Xn(n,e,2)}function Al(e){var n=e.alternate;return e===de||n!==null&&n===de}function Gm(e,n){Ks=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,wi(e,a)}}var lo={readContext:An,use:Ml,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};lo.useEffectEvent=tn;var km={readContext:An,use:Ml,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,Dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(cs){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(cs){kt(!0);try{a(n)}finally{kt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=iy.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,a=Hm.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,n){var a=In();return tf(a,e,n)},useTransition:function(){var e=Ku(!1);return e=Pm.bind(null,de,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=In();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(be&127)!==0||um(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Am(hm.bind(null,o,f,e),[e]),o.flags|=2048,Js(9,{destroy:void 0},fm.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=qe.identifierPrefix;if(Re){var a=Li,o=Ui;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Kx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nf,useFormState:Sm,useActionState:Sm,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:qu,useCacheRefresh:function(){return In().memoizedState=ny.bind(null,de)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:An,use:Ml,useCallback:Lm,useContext:An,useEffect:Ju,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Nm,useReducer:El,useRef:bm,useState:function(){return El(Yi)},useDebugValue:$u,useDeferredValue:function(e,n){var a=on();return Om(a,Ge.memoizedState,e,n)},useTransition:function(){var e=El(Yi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:nf,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var a=on();return mm(a,Ge,e,n)},useMemoCache:qu,useCacheRefresh:Fm};sf.useEffectEvent=Rm;var jm={readContext:An,use:Ml,useCallback:Lm,useContext:An,useEffect:Ju,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Nm,useReducer:Zu,useRef:bm,useState:function(){return Zu(Yi)},useDebugValue:$u,useDeferredValue:function(e,n){var a=on();return Ge===null?tf(a,e,n):Om(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Zu(Yi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:nf,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,n){var a=on();return Ge!==null?mm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:Fm};jm.useEffectEvent=Rm;function rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var of={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Xn(n,e,o),no(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Xn(n,e,o),no(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(Xn(n,e,a),no(n,e,a))}};function Xm(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,o)||!Yr(u,f):!0}function Wm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&of.enqueueReplaceState(n,n.state,null)}function us(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function qm(e){al(e)}function Ym(e){console.error(e)}function Zm(e){al(e)}function Rl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Km(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lf(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(e,n)},a}function Qm(e){return e=xa(e),e.tag=3,e}function Jm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Km(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Km(n,a,o),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function ay(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&js(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Fl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Nf(e,o,u)),!1;case 22:return a.flags|=65536,o===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Nf(e,o,u)),!1}throw Error(s(435,a.tag))}return Nf(e,o,u),Fl(),!1}if(Re)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Au&&(e=Error(s(422),{cause:o}),Qr(li(e,a)))):(o!==Au&&(n=Error(s(423),{cause:o}),Qr(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,a),u=lf(e.stateNode,o,u),Iu(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:o});if(f=li(f,a),_o===null?_o=[f]:_o.push(f),en!==4&&(en=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=lf(a.stateNode,o,e),Iu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,e,a,o),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var cf=Error(s(461)),fn=!1;function Rn(e,n,a,o){n.child=e===null?nm(n,null,a,o):ls(n,e.child,a,o)}function $m(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return as(n),o=ku(e,n,a,S,f,u),A=ju(),e!==null&&!fn?(Xu(e,n,u),Zi(e,n,u)):(Re&&A&&Tu(n),n.flags|=1,Rn(e,n,o,u),n.child)}function tg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,eg(e,n,f,o,u)):(e=ll(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_f(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(S,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=ki(f,o),e.ref=n.ref,e.return=n,n.child=e}function eg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Yr(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,_f(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return uf(e,n,a,o,u)}function ng(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return ig(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?sm(n,f):Fu(),rm(n);else return o=n.lanes=536870912,ig(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(hl(n,f.cachePool),sm(n,f),Ma(),n.memoizedState=null):(e!==null&&hl(n,null),Fu(),Ma());return Rn(e,n,u,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ig(e,n,a,o,u){var f=Nu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&hl(n,null),Fu(),rm(n),e!==null&&js(e,n,o,!0),n.childLanes=u,null}function Cl(e,n){return n=Dl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ag(e,n,a){return ls(n,e.child,null,a),e=Cl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function sy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Re){if(o.mode==="hidden")return e=Cl(n,o),n.lanes=536870912,co(null,e);if(Gu(n),(e=Ze)?(e=g_(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,bn=n,Ze=null)):e=null,e===null)throw ga(n);return n.lanes=536870912,null}return Cl(n,o)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(Gu(n),u)if(n.flags&256)n.flags&=-257,n=ag(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||js(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=qe,o!==null&&(S=ws(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,ts(e,S),Xn(o,e,S),cf;Fl(),n=ag(e,n,a)}else e=f.treeContext,Ze=di(S.nextSibling),bn=n,Re=!0,ma=null,fi=!1,e!==null&&jp(n,e),n=Cl(n,o),n.flags|=4096;return n}return e=ki(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function uf(e,n,a,o,u){return as(n),a=ku(e,n,a,o,void 0,u),o=ju(),e!==null&&!fn?(Xu(e,n,u),Zi(e,n,u)):(Re&&o&&Tu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function sg(e,n,a,o,u,f){return as(n),n.updateQueue=null,a=lm(n,o,a,u),om(e),o=ju(),e!==null&&!fn?(Xu(e,n,f),Zi(e,n,f)):(Re&&o&&Tu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function rg(e,n,a,o,u){if(as(n),n.stateNode===null){var f=Hs,S=a.contextType;typeof S=="object"&&S!==null&&(f=An(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=of,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Pu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?An(S):Hs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(rf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&of.enqueueReplaceState(f,f.state,null),ao(n,o,f,u),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=us(a,A);f.props=G;var at=f.context,mt=a.contextType;S=Hs,typeof mt=="object"&&mt!==null&&(S=An(mt));var St=a.getDerivedStateFromProps;mt=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||at!==S)&&Wm(n,f,o,S),va=!1;var rt=n.memoizedState;f.state=rt,ao(n,o,f,u),io(),at=n.memoizedState,A||rt!==at||va?(typeof St=="function"&&(rf(n,a,St,o),at=n.memoizedState),(G=va||Xm(n,a,G,o,rt,at,S))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=S,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,zu(e,n),S=n.memoizedProps,mt=us(a,S),f.props=mt,St=n.pendingProps,rt=f.context,at=a.contextType,G=Hs,typeof at=="object"&&at!==null&&(G=An(at)),A=a.getDerivedStateFromProps,(at=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==St||rt!==G)&&Wm(n,f,o,G),va=!1,rt=n.memoizedState,f.state=rt,ao(n,o,f,u),io();var ht=n.memoizedState;S!==St||rt!==ht||va||e!==null&&e.dependencies!==null&&ul(e.dependencies)?(typeof A=="function"&&(rf(n,a,A,o),ht=n.memoizedState),(mt=va||Xm(n,a,mt,o,rt,ht,G)||e!==null&&e.dependencies!==null&&ul(e.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ht,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ht,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),f.props=o,f.state=ht,f.context=G,o=mt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,wl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ls(n,e.child,null,u),n.child=ls(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Zi(e,n,u),e}function og(e,n,a,o){return ns(),n.flags|=256,Rn(e,n,a,o),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(e){return{baseLanes:e,cachePool:Kp()}}function df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function lg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?Sa(n):Ma(),(e=Ze)?(e=g_(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,bn=n,Ze=null)):e=null,e===null)throw ga(n);return Zf(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ma(),u=n.mode,A=Dl({mode:"hidden",children:A},u),o=es(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=hf(a),o.childLanes=df(e,S,a),n.memoizedState=ff,co(null,o)):(Sa(n),pf(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=mf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),A=o.fallback,u=n.mode,o=Dl({mode:"visible",children:o.children},u),A=es(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,ls(n,e.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=df(e,S,a),n.memoizedState=ff,n=co(null,o));else if(Sa(n),Zf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var at=S.dgst;S=at,o=Error(s(419)),o.stack="",o.digest=S,Qr({value:o,source:null,stack:null}),n=mf(e,n,a)}else if(fn||js(e,n,a,!1),S=(a&e.childLanes)!==0,fn||S){if(S=qe,S!==null&&(o=ws(S,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ts(e,o),Xn(S,e,o),cf;Yf(A)||Fl(),n=mf(e,n,a)}else Yf(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Ze=di(A.nextSibling),bn=n,Re=!0,ma=null,fi=!1,e!==null&&jp(n,e),n=pf(n,o.children),n.flags|=4096);return n}return u?(Ma(),A=o.fallback,u=n.mode,G=e.child,at=G.sibling,o=ki(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,at!==null?A=ki(at,A):(A=es(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,co(null,o),o=n.child,A=e.child.memoizedState,A===null?A=hf(a):(u=A.cachePool,u!==null?(G=cn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Kp(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=df(e,S,a),n.memoizedState=ff,co(e.child,o)):(Sa(n),a=e.child,e=a.sibling,a=ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function pf(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function mf(e,n,a){return ls(n,e.child,null,a),e=pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),wu(e.return,n,a)}function gf(e,n,a,o,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function ug(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=rn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,vt(rn,S),Rn(e,n,o,a),o=Re?Kr:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,a,n);else if(e.tag===19)cg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gf(n,!0,a,null,f,o);break;case"together":gf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ul(e)))}function ry(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),_a(n,cn,e.memoizedState.cache),ns();break;case 27:case 5:Vt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Gu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lg(e,n,a):(Sa(n),e=Zi(e,n,a),e!==null?e.sibling:null);Sa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(js(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ug(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(rn,rn.current),o)break;return null;case 22:return n.lanes=0,ng(e,n,a,n.pendingProps);case 24:_a(n,cn,e.memoizedState.cache)}return Zi(e,n,a)}function fg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!_f(e,a)&&(n.flags&128)===0)return fn=!1,ry(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Re&&(n.flags&1048576)!==0&&kp(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=rs(n.elementType),n.type=e,typeof e=="function")Su(e)?(o=us(e,o),n.tag=1,n=rg(null,n,e,o,a)):(n.tag=0,n=uf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=$m(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=tg(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=us(o,n.pendingProps),rg(e,n,o,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,zu(e,n),ao(n,o,null,a);var S=n.memoizedState;if(o=S.cache,_a(n,cn,o),o!==f.cache&&Du(n,[cn],a,!0),io(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=og(e,n,o,a);break t}else if(o!==u){u=li(Error(s(424)),n),Qr(u),n=og(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=di(e.firstChild),bn=n,Re=!0,ma=null,fi=!0,a=nm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ns(),o===u){n=Zi(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return wl(e,n),e===null?(a=M_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=Wl(nt.current).createElement(a),o[ln]=n,o[En]=e,Cn(o,a,e),Mt(o),n.stateNode=o):n.memoizedState=M_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&Re&&(o=n.stateNode=x_(n.type,n.pendingProps,nt.current),bn=n,fi=!0,u=Ze,Da(n.type)?(Kf=u,Ze=di(o.firstChild)):Ze=u),Rn(e,n,n.pendingProps.children,a),wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=o=Ze)&&(o=zy(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,bn=n,Ze=di(o.firstChild),fi=!1,u=!0):u=!1),u||ga(n)),Vt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Xf(u,f)?o=null:S!==null&&Xf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(e,n,Qx,null,null,a),bo._currentValue=u),wl(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=Ze)&&(a=Iy(a,n.pendingProps,fi),a!==null?(n.stateNode=a,bn=n,Ze=null,e=!0):e=!1),e||ga(n)),null;case 13:return lg(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ls(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return $m(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,as(n),u=An(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return tg(e,n,n.type,n.pendingProps,a);case 15:return eg(e,n,n.type,n.pendingProps,a);case 19:return ug(e,n,a);case 31:return sy(e,n,a);case 22:return ng(e,n,a,n.pendingProps);case 24:return as(n),o=An(cn),e===null?(u=Nu(),u===null&&(u=qe,f=Uu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Pu(n),_a(n,cn,u)):((e.lanes&a)!==0&&(zu(e,n),ao(n,null,null,a),io()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,cn,o)):(o=f.cache,_a(n,cn,o),o!==u.cache&&Du(n,[cn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ki(e){e.flags|=4}function vf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Bg())e.flags|=8192;else throw os=pl,Ou}else e.flags&=-16777217}function hg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!R_(n))if(Bg())e.flags|=8192;else throw os=pl,Ou}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,nr|=n)}function uo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function oy(e,n,a){var o=n.pendingProps;switch(bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(cn),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ks(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ru())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Ki(n),f!==null?(Ke(n),hg(n,f)):(Ke(n),vf(n,u,null,o,a))):f?f!==e.memoizedState?(Ki(n),Ke(n),hg(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ki(n),Ke(n),vf(n,u,e,o,a)),null;case 27:if(le(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Ct.current,ks(n)?Xp(n):(e=x_(u,o,a),n.stateNode=e,Ki(n))}return Ke(n),null;case 5:if(le(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=Ct.current,ks(n))Xp(n);else{var S=Wl(nt.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[ln]=n,f[En]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(Cn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ki(n)}}return Ke(n),vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||l_(e.nodeValue,a)),e||ga(n,!0)}else e=Wl(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ks(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),Ke(n),null);case 4:return Lt(),e===null&&Hf(n.stateNode.containerInfo),Ke(n),null;case 10:return Wi(n.type),Ke(n),null;case 19:if(tt(rn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)uo(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vl(e),f!==null){for(n.flags|=128,uo(o,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hp(a,e),a=a.sibling;return vt(rn,rn.current&1|2),Re&&ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>zl&&(n.flags|=128,u=!0,uo(o,!1),n.lanes=4194304)}else{if(!u)if(e=vl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Re)return Ke(n),null}else 2*T()-o.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,u=!0,uo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=rn.current,vt(rn,u?a&1|2:a&1),Re&&ji(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ti(n),Hu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&tt(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(cn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ly(e,n){switch(bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(cn),Lt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return tt(rn),null;case 4:return Lt(),null;case 10:return Wi(n.type),null;case 22:case 23:return ti(n),Hu(),e!==null&&tt(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(cn),null;case 25:return null;default:return null}}function dg(e,n){switch(bu(n),n.tag){case 3:Wi(cn),Lt();break;case 26:case 27:case 5:le(n);break;case 4:Lt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:tt(rn);break;case 10:Wi(n.type);break;case 22:case 23:ti(n),Hu(),e!==null&&tt(ss);break;case 24:Wi(cn)}}function fo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Fe(n,n.return,A)}}function Ea(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var G=a,at=A;try{at()}catch(mt){Fe(u,G,mt)}}}o=o.next}while(o!==f)}}catch(mt){Fe(n,n.return,mt)}}function pg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{am(n,a)}catch(o){Fe(e,e.return,o)}}}function mg(e,n,a){a.props=us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Ni(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function gg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function xf(e,n,a){try{var o=e.stateNode;Dy(o,e.type,a,n),o[En]=n}catch(u){Fe(e,e.return,u)}}function _g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi));else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function Ll(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function vg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[ln]=e,n[En]=a}catch(f){Fe(e,e.return,f)}}var Qi=!1,hn=!1,Mf=!1,xg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function cy(e,n){if(e=e.containerInfo,kf=$l,e=Up(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,G=-1,at=0,mt=0,St=e,rt=null;e:for(;;){for(var ht;St!==a||u!==0&&St.nodeType!==3||(A=S+u),St!==f||o!==0&&St.nodeType!==3||(G=S+o),St.nodeType===3&&(S+=St.nodeValue.length),(ht=St.firstChild)!==null;)rt=St,St=ht;for(;;){if(St===e)break e;if(rt===a&&++at===u&&(A=S),rt===f&&++mt===o&&(G=S),(ht=St.nextSibling)!==null)break;St=rt,rt=St.parentNode}St=ht}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(jf={focusedElem:e,selectionRange:a},$l=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Wt=us(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(re){Fe(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function yg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),o&4&&fo(5,a);break;case 1:if($i(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Fe(a,a.return,S)}else{var u=us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(a,a.return,S)}}o&64&&pg(a),o&512&&ho(a,a.return);break;case 3:if($i(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(e,n)}catch(S){Fe(a,a.return,S)}}break;case 27:n===null&&o&4&&vg(a);case 26:case 5:$i(e,a),n===null&&o&4&&gg(a),o&512&&ho(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),o&4&&Eg(e,a);break;case 13:$i(e,a),o&4&&Tg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vy.bind(null,a),By(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||hn,u=Qi;var f=hn;Qi=o,(hn=n)&&!f?ta(e,a,(a.subtreeFlags&8772)!==0):$i(e,a),Qi=u,hn=f}break;case 30:break;default:$i(e,a)}}function Sg(e){var n=e.alternate;n!==null&&(e.alternate=null,Sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&C(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Gn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)Mg(e,n,a),a=a.sibling}function Mg(e,n,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(wt,a)}catch{}switch(a.tag){case 26:hn||Ni(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ni(a,n);var o=Je,u=Gn;Da(a.type)&&(Je=a.stateNode,Gn=!1),Ji(e,n,a),Mo(a.stateNode),Je=o,Gn=u;break;case 5:hn||Ni(a,n);case 6:if(o=Je,u=Gn,Je=null,Ji(e,n,a),Je=o,Gn=u,Je!==null)if(Gn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(Gn?(e=Je,p_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ur(e)):p_(Je,a.stateNode));break;case 4:o=Je,u=Gn,Je=a.stateNode.containerInfo,Gn=!0,Ji(e,n,a),Je=o,Gn=u;break;case 0:case 11:case 14:case 15:Ea(2,a,n),hn||Ea(4,a,n),Ji(e,n,a);break;case 1:hn||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mg(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,Ji(e,n,a),hn=o;break;default:Ji(e,n,a)}}function Eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ur(e)}catch(a){Fe(n,n.return,a)}}}function Tg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ur(e)}catch(a){Fe(n,n.return,a)}}function uy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new xg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new xg),n;default:throw Error(s(435,e.tag))}}function Nl(e,n){var a=uy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=xy.bind(null,e,o);o.then(u,u)}})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Da(A.type)){Je=A.stateNode,Gn=!1;break t}break;case 5:Je=A.stateNode,Gn=!1;break t;case 3:case 4:Je=A.stateNode.containerInfo,Gn=!0;break t}A=A.return}if(Je===null)throw Error(s(160));Mg(f,S,u),Je=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)bg(n,e),n=n.sibling}var yi=null;function bg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),kn(e),o&4&&(Ea(3,e,e.return),fo(3,e),Ea(5,e,e.return));break;case 1:Vn(n,e),kn(e),o&512&&(hn||a===null||Ni(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=yi;if(Vn(n,e),kn(e),o&512&&(hn||a===null||Ni(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Za]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[ln]=e,Mt(f),o=f;break t;case"link":var S=b_("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=b_("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=e,Mt(f),o=f}e.stateNode=o}else A_(u,e.type,e.stateNode);else e.stateNode=T_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?A_(u,e.type,e.stateNode):T_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),kn(e),o&512&&(hn||a===null||Ni(a,a.return)),a!==null&&o&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),kn(e),o&512&&(hn||a===null||Ni(a,a.return)),e.flags&32){u=e.stateNode;try{Ns(u,"")}catch(Wt){Fe(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(Vn(n,e),kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){Fe(e,e.return,Wt)}}break;case 3:if(Zl=null,u=yi,yi=ql(n.containerInfo),Vn(n,e),yi=u,kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ur(n.containerInfo)}catch(Wt){Fe(e,e.return,Wt)}Mf&&(Mf=!1,Ag(e));break;case 4:o=yi,yi=ql(e.stateNode.containerInfo),Vn(n,e),kn(e),yi=o;break;case 12:Vn(n,e),kn(e);break;case 31:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nl(e,o)));break;case 13:Vn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,at=Qi,mt=hn;if(Qi=at||u,hn=mt||G,Vn(n,e),hn=mt,Qi=at,kn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Qi||hn||fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=G.stateNode;var St=G.memoizedProps.style,rt=St!=null&&St.hasOwnProperty("display")?St.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Wt){Fe(G,G.return,Wt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Wt){Fe(G,G.return,Wt)}}}else if(n.tag===18){if(a===null){G=n;try{var ht=G.stateNode;u?m_(ht,!0):m_(G.stateNode,!1)}catch(Wt){Fe(G,G.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Nl(e,a))));break;case 19:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nl(e,o)));break;case 30:break;case 21:break;default:Vn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(_g(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=yf(e);Ll(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Ns(S,""),a.flags&=-33);var A=yf(e);Ll(e,A,S);break;case 3:case 4:var G=a.stateNode.containerInfo,at=yf(e);Sf(e,at,G);break;default:throw Error(s(161))}}catch(mt){Fe(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)yg(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fs(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mg(n,n.return,a),fs(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ni(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function ta(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ta(u,f,a),fo(4,f);break;case 1:if(ta(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){Fe(o,o.return,at)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)im(G[u],A)}catch(at){Fe(o,o.return,at)}}a&&S&64&&pg(f),ho(f,f.return);break;case 27:vg(f);case 26:case 5:ta(u,f,a),a&&o===null&&S&4&&gg(f),ho(f,f.return);break;case 12:ta(u,f,a);break;case 31:ta(u,f,a),a&&S&4&&Eg(u,f);break;case 13:ta(u,f,a),a&&S&4&&Tg(u,f);break;case 22:f.memoizedState===null&&ta(u,f,a),ho(f,f.return);break;case 30:break;default:ta(u,f,a)}n=n.sibling}}function Ef(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jr(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e))}function Si(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rg(e,n,a,o),n=n.sibling}function Rg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,o),u&2048&&fo(9,n);break;case 1:Si(e,n,a,o);break;case 3:Si(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e)));break;case 12:if(u&2048){Si(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Fe(n,n.return,G)}}else Si(e,n,a,o);break;case 31:Si(e,n,a,o);break;case 13:Si(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Si(e,n,a,o):po(e,n):f._visibility&2?Si(e,n,a,o):(f._visibility|=2,$s(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ef(S,n);break;case 24:Si(e,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Si(e,n,a,o)}}function $s(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,A=a,G=o,at=S.flags;switch(S.tag){case 0:case 11:case 15:$s(f,S,A,G,u),fo(8,S);break;case 23:break;case 22:var mt=S.stateNode;S.memoizedState!==null?mt._visibility&2?$s(f,S,A,G,u):po(f,S):(mt._visibility|=2,$s(f,S,A,G,u)),u&&at&2048&&Ef(S.alternate,S);break;case 24:$s(f,S,A,G,u),u&&at&2048&&Tf(S.alternate,S);break;default:$s(f,S,A,G,u)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:po(a,o),u&2048&&Ef(o.alternate,o);break;case 24:po(a,o),u&2048&&Tf(o.alternate,o);break;default:po(a,o)}n=n.sibling}}var mo=8192;function tr(e,n,a){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)Cg(e,n,a),e=e.sibling}function Cg(e,n,a){switch(e.tag){case 26:tr(e,n,a),e.flags&mo&&e.memoizedState!==null&&Ky(a,yi,e.memoizedState,e.memoizedProps);break;case 5:tr(e,n,a);break;case 3:case 4:var o=yi;yi=ql(e.stateNode.containerInfo),tr(e,n,a),yi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=mo,mo=16777216,tr(e,n,a),mo=o):tr(e,n,a));break;default:tr(e,n,a)}}function wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Ug(o,e)}wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dg(e),e=e.sibling}function Dg(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):go(e);break;default:go(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Ug(o,e)}wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function Ug(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(Sg(o),o===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var fy={getCacheForType:function(e){var n=An(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(cn).controller.signal}},hy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,Se=null,be=0,Be=0,ei=null,Ta=!1,er=!1,bf=!1,ea=0,en=0,ba=0,hs=0,Af=0,ni=0,nr=0,_o=null,jn=null,Rf=!1,Pl=0,Lg=0,zl=1/0,Il=null,Aa=null,mn=0,Ra=null,ir=null,na=0,Cf=0,wf=null,Ng=null,vo=0,Df=null;function ii(){return(Ne&2)!==0&&be!==0?be&-be:P.T!==null?zf():Ya()}function Og(){if(ni===0)if((be&536870912)===0||Re){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Xn(e,n,a){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(ar(e,0),Ca(e,be,ni,!1)),Pn(e,a),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(hs|=a),en===4&&Ca(e,be,ni,!1)),Oi(e))}function Pg(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||jt(e,n),u=o?my(e,n):Lf(e,n,!0),f=o;do{if(u===0){er&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!dy(a)){u=Lf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=_o;var G=A.current.memoizedState.isDehydrated;if(G&&(ar(A,S).flags|=256),S=Lf(A,S,!1),S!==2){if(bf&&!G){A.errorRecoveryDisabledLanes|=f,hs|=f,u=4;break t}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){ar(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,ni,!Ta);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Pl+300-T(),10<u)){if(Ca(o,n,ni,!Ta),gt(o,0,!0)!==0)break t;na=n,o.timeoutHandle=h_(zg.bind(null,o,a,jn,Il,Rf,n,ni,hs,nr,Ta,f,"Throttled",-0,0),u);break t}zg(o,a,jn,Il,Rf,n,ni,hs,nr,Ta,f,null,-0,0)}}break}while(!0);Oi(e)}function zg(e,n,a,o,u,f,S,A,G,at,mt,St,rt,ht){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},Cg(n,f,St);var Wt=(f&62914560)===f?Pl-T():(f&4194048)===f?Lg-T():0;if(Wt=Qy(St,Wt),Wt!==null){na=f,e.cancelPendingCommit=Wt(jg.bind(null,e,n,f,a,o,u,S,A,G,mt,St,null,rt,ht)),Ca(e,f,S,!at);return}}jg(e,n,f,a,o,u,S,A,G)}function dy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~Af,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&Br(e,a,n)}function Bl(){return(Ne&6)===0?(xo(0),!1):!0}function Uf(){if(Se!==null){if(Be===0)var e=Se.return;else e=Se,Xi=is=null,Wu(e),Ys=null,to=0,e=Se;for(;e!==null;)dg(e.alternate,e),e=e.return;Se=null}}function ar(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ny(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,Uf(),qe=e,Se=a=ki(e.current,null),be=n,Be=0,ei=null,Ta=!1,er=jt(e,n),bf=!1,nr=ni=Af=hs=ba=en=0,jn=_o=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),f=1<<u;n|=e[u],o&=~f}return ea=n,sl(),a}function Ig(e,n){de=null,P.H=lo,n===qs||n===dl?(n=$p(),Be=3):n===Ou?(n=$p(),Be=4):Be=n===cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,Se===null&&(en=1,Rl(e,li(n,e.current)))}function Bg(){var e=$n.current;return e===null?!0:(be&4194048)===be?hi===null:(be&62914560)===be||(be&536870912)!==0?e===hi:!1}function Fg(){var e=P.H;return P.H=lo,e===null?lo:e}function Hg(){var e=P.A;return P.A=fy,e}function Fl(){en=4,Ta||(be&4194048)!==be&&$n.current!==null||(er=!0),(ba&134217727)===0&&(hs&134217727)===0||qe===null||Ca(qe,be,ni,!1)}function Lf(e,n,a){var o=Ne;Ne|=2;var u=Fg(),f=Hg();(qe!==e||be!==n)&&(Il=null,ar(e,n)),n=!1;var S=en;t:do try{if(Be!==0&&Se!==null){var A=Se,G=ei;switch(Be){case 8:Uf(),S=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var at=Be;if(Be=0,ei=null,sr(e,A,G,at),a&&er){S=0;break t}break;default:at=Be,Be=0,ei=null,sr(e,A,G,at)}}py(),S=en;break}catch(mt){Ig(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Xi=is=null,Ne=o,P.H=u,P.A=f,Se===null&&(qe=null,be=0,sl()),S}function py(){for(;Se!==null;)Gg(Se)}function my(e,n){var a=Ne;Ne|=2;var o=Fg(),u=Hg();qe!==e||be!==n?(Il=null,zl=T()+500,ar(e,n)):er=jt(e,n);t:do try{if(Be!==0&&Se!==null){n=Se;var f=ei;e:switch(Be){case 1:Be=0,ei=null,sr(e,n,f,1);break;case 2:case 9:if(Qp(f)){Be=0,ei=null,Vg(n);break}n=function(){Be!==2&&Be!==9||qe!==e||(Be=7),Oi(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Qp(f)?(Be=0,ei=null,Vg(n)):(Be=0,ei=null,sr(e,n,f,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var A=Se;if(S?R_(S):A.stateNode.complete){Be=0,ei=null;var G=A.sibling;if(G!==null)Se=G;else{var at=A.return;at!==null?(Se=at,Hl(at)):Se=null}break e}}Be=0,ei=null,sr(e,n,f,5);break;case 6:Be=0,ei=null,sr(e,n,f,6);break;case 8:Uf(),en=6;break t;default:throw Error(s(462))}}gy();break}catch(mt){Ig(e,mt)}while(!0);return Xi=is=null,P.H=o,P.A=u,Ne=a,Se!==null?0:(qe=null,be=0,sl(),en)}function gy(){for(;Se!==null&&!ze();)Gg(Se)}function Gg(e){var n=fg(e.alternate,e,ea);e.memoizedProps=e.pendingProps,n===null?Hl(e):Se=n}function Vg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=sg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=sg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Wu(n);default:dg(a,n),n=Se=Hp(n,ea),n=fg(a,n,ea)}e.memoizedProps=e.pendingProps,n===null?Hl(e):Se=n}function sr(e,n,a,o){Xi=is=null,Wu(n),Ys=null,to=0;var u=n.return;try{if(ay(e,u,n,a,be)){en=1,Rl(e,li(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;en=1,Rl(e,li(a,e.current)),Se=null;return}n.flags&32768?(Re||o===1?e=!0:er||(be&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),kg(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){kg(n,Ta);return}e=n.return;var a=oy(n.alternate,n,ea);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);en===0&&(en=5)}function kg(e,n){do{var a=ly(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);en=6,Se=null}function jg(e,n,a,o,u,f,S,A,G){e.cancelPendingCommit=null;do Gl();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=xu,ri(e,a,f,S,A,G),e===qe&&(Se=qe=null,be=0),ir=n,Ra=e,na=a,Cf=f,wf=u,Ng=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yy(dt,function(){return Zg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=Y.p,Y.p=2,S=Ne,Ne|=4;try{cy(e,n,a)}finally{Ne=S,Y.p=u,P.T=o}}mn=1,Xg(),Wg(),qg()}}function Xg(){if(mn===1){mn=0;var e=Ra,n=ir,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Y.p;Y.p=2;var u=Ne;Ne|=4;try{bg(n,e);var f=jf,S=Up(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Dp(A.ownerDocument.documentElement,A)){if(G!==null&&pu(A)){var at=G.start,mt=G.end;if(mt===void 0&&(mt=at),"selectionStart"in A)A.selectionStart=at,A.selectionEnd=Math.min(mt,A.value.length);else{var St=A.ownerDocument||document,rt=St&&St.defaultView||window;if(rt.getSelection){var ht=rt.getSelection(),Wt=A.textContent.length,re=Math.min(G.start,Wt),ke=G.end===void 0?re:Math.min(G.end,Wt);!ht.extend&&re>ke&&(S=ke,ke=re,re=S);var Z=wp(A,re),j=wp(A,ke);if(Z&&j&&(ht.rangeCount!==1||ht.anchorNode!==Z.node||ht.anchorOffset!==Z.offset||ht.focusNode!==j.node||ht.focusOffset!==j.offset)){var it=St.createRange();it.setStart(Z.node,Z.offset),ht.removeAllRanges(),re>ke?(ht.addRange(it),ht.extend(j.node,j.offset)):(it.setEnd(j.node,j.offset),ht.addRange(it))}}}}for(St=[],ht=A;ht=ht.parentNode;)ht.nodeType===1&&St.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var _t=St[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}$l=!!kf,jf=kf=null}finally{Ne=u,Y.p=o,P.T=a}}e.current=n,mn=2}}function Wg(){if(mn===2){mn=0;var e=Ra,n=ir,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Y.p;Y.p=2;var u=Ne;Ne|=4;try{yg(e,n.alternate,n)}finally{Ne=u,Y.p=o,P.T=a}}mn=3}}function qg(){if(mn===4||mn===3){mn=0,I();var e=Ra,n=ir,a=na,o=Ng;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,ir=Ra=null,Yg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),Us(a),n=n.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=Y.p,Y.p=2,P.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{P.T=n,Y.p=u}}(na&3)!==0&&Gl(),Oi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Df?vo++:(vo=0,Df=e):vo=0,xo(0)}}function Yg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Jr(n)))}function Gl(){return Xg(),Wg(),qg(),Zg()}function Zg(){if(mn!==5)return!1;var e=Ra,n=Cf;Cf=0;var a=Us(na),o=P.T,u=Y.p;try{Y.p=32>a?32:a,P.T=null,a=wf,wf=null;var f=Ra,S=na;if(mn=0,ir=Ra=null,na=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,Dg(f.current),Rg(f,f.current,S,a),Ne=A,xo(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(wt,f)}catch{}return!0}finally{Y.p=u,P.T=o,Yg(e,n)}}function Kg(e,n,a){n=li(a,n),n=lf(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(Pn(e,2),Oi(e))}function Fe(e,n,a){if(e.tag===3)Kg(e,e,a);else for(;n!==null;){if(n.tag===3){Kg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=li(a,e),a=Qm(2),o=ya(n,a,2),o!==null&&(Jm(a,o,n,e),Pn(o,2),Oi(o));break}}n=n.return}}function Nf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new hy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(bf=!0,u.add(a),e=_y.bind(null,e,n,a),n.then(e,e))}function _y(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(be&a)===a&&(en===4||en===3&&(be&62914560)===be&&300>T()-Pl?(Ne&2)===0&&ar(e,0):Af|=a,nr===be&&(nr=0)),Oi(e)}function Qg(e,n){n===0&&(n=Ie()),e=ts(e,n),e!==null&&(Pn(e,n),Oi(e))}function vy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(e,a)}function xy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Qg(e,a)}function yy(e,n){return Xt(e,n)}var Vl=null,rr=null,Of=!1,kl=!1,Pf=!1,wa=0;function Oi(e){e!==rr&&e.next===null&&(rr===null?Vl=rr=e:rr=rr.next=e),kl=!0,Of||(Of=!0,My())}function xo(e,n){if(!Pf&&kl){Pf=!0;do for(var a=!1,o=Vl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,e_(o,f))}else f=be,f=gt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||jt(o,f)||(a=!0,e_(o,f));o=o.next}while(a);Pf=!1}}function Sy(){Jg()}function Jg(){kl=Of=!1;var e=0;wa!==0&&Ly()&&(e=wa);for(var n=T(),a=null,o=Vl;o!==null;){var u=o.next,f=$g(o,n);f===0?(o.next=null,a===null?Vl=u:a.next=u,u===null&&(rr=a)):(a=o,(e!==0||(f&3)!==0)&&(kl=!0)),o=u}mn!==0&&mn!==5||xo(e),wa!==0&&(wa=0)}function $g(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-It(f),A=1<<S,G=u[S];G===-1?((A&a)===0||(A&o)!==0)&&(u[S]=ue(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=qe,a=be,a=gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&He(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&He(o),Us(a)){case 2:case 8:a=At;break;case 32:a=dt;break;case 268435456:a=Pt;break;default:a=dt}return o=t_.bind(null,e),a=Xt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&He(o),e.callbackPriority=2,e.callbackNode=null,2}function t_(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var o=be;return o=gt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Pg(e,o,n),$g(e,T()),e.callbackNode!=null&&e.callbackNode===a?t_.bind(null,e):null)}function e_(e,n){if(Gl())return null;Pg(e,n,!0)}function My(){Oy(function(){(Ne&6)!==0?Xt(pt,Sy):Jg()})}function zf(){if(wa===0){var e=Xs;e===0&&(e=ct,ct<<=1,(ct&261888)===0&&(ct=256)),wa=e}return wa}function n_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function i_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ey(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=n_((u[En]||null).action),S=o.submitter;S&&(n=(n=S[En]||null)?n_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new el("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(wa!==0){var G=S?i_(u,S):new FormData(u);ef(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=S?i_(u,S):new FormData(u),ef(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var If=0;If<vu.length;If++){var Bf=vu[If],Ty=Bf.toLowerCase(),by=Bf[0].toUpperCase()+Bf.slice(1);xi(Ty,"on"+by)}xi(Op,"onAnimationEnd"),xi(Pp,"onAnimationIteration"),xi(zp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Gx,"onTransitionRun"),xi(Vx,"onTransitionStart"),xi(kx,"onTransitionCancel"),xi(Ip,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function a_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],G=A.instance,at=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=at;try{f(u)}catch(mt){al(mt)}u.currentTarget=null,f=G}else for(S=0;S<o.length;S++){if(A=o[S],G=A.instance,at=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=at;try{f(u)}catch(mt){al(mt)}u.currentTarget=null,f=G}}}}function Me(e,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=e+"__bubble";a.has(o)||(s_(n,e,2,!1),a.add(o))}function Ff(e,n,a){var o=0;n&&(o|=4),s_(a,e,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Hf(e){if(!e[jl]){e[jl]=!0,Ft.forEach(function(a){a!=="selectionchange"&&(Ay.has(a)||Ff(a,!1,e),Ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Ff("selectionchange",!1,n))}}function s_(e,n,a,o){switch(O_(n)){case 2:var u=tS;break;case 8:u=eS;break;default:u=eh}a=u.bind(null,n,a,e),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Gf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=q(A),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=f=S;continue t}A=A.parentNode}}o=o.return}up(function(){var at=f,mt=iu(a),St=[];t:{var rt=Bp.get(e);if(rt!==void 0){var ht=el,Wt=e;switch(e){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":ht=xx;break;case"focusin":Wt="focus",ht=cu;break;case"focusout":Wt="blur",ht=cu;break;case"beforeblur":case"afterblur":ht=cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Mx;break;case Op:case Pp:case zp:ht=ux;break;case Ip:ht=Tx;break;case"scroll":case"scrollend":ht=sx;break;case"wheel":ht=Ax;break;case"copy":case"cut":case"paste":ht=hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=mp;break;case"toggle":case"beforetoggle":ht=Cx}var re=(n&4)!==0,ke=!re&&(e==="scroll"||e==="scrollend"),Z=re?rt!==null?rt+"Capture":null:rt;re=[];for(var j=at,it;j!==null;){var _t=j;if(it=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||it===null||Z===null||(_t=Gr(j,Z),_t!=null&&re.push(So(j,_t,it))),ke)break;j=j.return}0<re.length&&(rt=new ht(rt,Wt,null,a,mt),St.push({event:rt,listeners:re}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",rt&&a!==nu&&(Wt=a.relatedTarget||a.fromElement)&&(q(Wt)||Wt[ha]))break t;if((ht||rt)&&(rt=mt.window===mt?mt:(rt=mt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ht?(Wt=a.relatedTarget||a.toElement,ht=at,Wt=Wt?q(Wt):null,Wt!==null&&(ke=c(Wt),re=Wt.tag,Wt!==ke||re!==5&&re!==27&&re!==6)&&(Wt=null)):(ht=null,Wt=at),ht!==Wt)){if(re=dp,_t="onMouseLeave",Z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(re=mp,_t="onPointerLeave",Z="onPointerEnter",j="pointer"),ke=ht==null?rt:ut(ht),it=Wt==null?rt:ut(Wt),rt=new re(_t,j+"leave",ht,a,mt),rt.target=ke,rt.relatedTarget=it,_t=null,q(mt)===at&&(re=new re(Z,j+"enter",Wt,a,mt),re.target=it,re.relatedTarget=ke,_t=re),ke=_t,ht&&Wt)e:{for(re=Ry,Z=ht,j=Wt,it=0,_t=Z;_t;_t=re(_t))it++;_t=0;for(var ie=j;ie;ie=re(ie))_t++;for(;0<it-_t;)Z=re(Z),it--;for(;0<_t-it;)j=re(j),_t--;for(;it--;){if(Z===j||j!==null&&Z===j.alternate){re=Z;break e}Z=re(Z),j=re(j)}re=null}else re=null;ht!==null&&r_(St,rt,ht,re,!1),Wt!==null&&ke!==null&&r_(St,ke,Wt,re,!0)}}t:{if(rt=at?ut(at):window,ht=rt.nodeName&&rt.nodeName.toLowerCase(),ht==="select"||ht==="input"&&rt.type==="file")var De=Ep;else if(Sp(rt))if(Tp)De=Bx;else{De=zx;var $t=Px}else ht=rt.nodeName,!ht||ht.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?at&&eu(at.elementType)&&(De=Ep):De=Ix;if(De&&(De=De(e,at))){Mp(St,De,a,mt);break t}$t&&$t(e,rt,at),e==="focusout"&&at&&rt.type==="number"&&at.memoizedProps.value!=null&&pn(rt,"number",rt.value)}switch($t=at?ut(at):window,e){case"focusin":(Sp($t)||$t.contentEditable==="true")&&(Is=$t,mu=at,Zr=null);break;case"focusout":Zr=mu=Is=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Lp(St,a,mt);break;case"selectionchange":if(Hx)break;case"keydown":case"keyup":Lp(St,a,mt)}var pe;if(fu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else zs?xp(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(gp&&a.locale!=="ko"&&(zs||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&zs&&(pe=fp()):(da=mt,ru="value"in da?da.value:da.textContent,zs=!0)),$t=Xl(at,Ae),0<$t.length&&(Ae=new pp(Ae,e,null,a,mt),St.push({event:Ae,listeners:$t}),pe?Ae.data=pe:(pe=yp(a),pe!==null&&(Ae.data=pe)))),(pe=Dx?Ux(e,a):Lx(e,a))&&(Ae=Xl(at,"onBeforeInput"),0<Ae.length&&($t=new pp("onBeforeInput","beforeinput",null,a,mt),St.push({event:$t,listeners:Ae}),$t.data=pe)),Ey(St,e,at,a,mt)}a_(St,n)})}function So(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Gr(e,a),u!=null&&o.unshift(So(e,u,f)),u=Gr(e,n),u!=null&&o.push(So(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Ry(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function r_(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,G=A.alternate,at=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||at===null||(G=at,u?(at=Gr(a,f),at!=null&&S.unshift(So(a,at,G))):u||(at=Gr(a,f),at!=null&&S.push(So(a,at,G)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Cy=/\r\n?/g,wy=/\u0000|\uFFFD/g;function o_(e){return(typeof e=="string"?e:""+e).replace(Cy,`
`).replace(wy,"")}function l_(e,n){return n=o_(n),o_(e)===n}function Ve(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ns(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ns(e,""+o);break;case"className":Pe(e,"class",o);break;case"tabIndex":Pe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(e,a,o);break;case"style":lp(e,o,f);break;case"data":if(n!=="object"){Pe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Gi);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),We(e,"popover",o);break;case"xlinkActuate":ye(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ye(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ye(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ye(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ye(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ye(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ye(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ye(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ye(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":We(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ix.get(a)||a,We(e,a,o))}}function Vf(e,n,a,o,u,f){switch(a){case"style":lp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ns(e,o):(typeof o=="number"||typeof o=="bigint")&&Ns(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):We(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,S,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=f=S=u=null,G=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":S=mt;break;case"checked":G=mt;break;case"defaultChecked":at=mt;break;case"value":f=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,mt,a,null)}}zn(e,f,A,G,at,S,u,!1);return;case"select":Me("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Ve(e,n,u,A,a,null)}n=f,a=S,e.multiple=!!o,n!=null?sn(e,!!o,n,!1):a!=null&&sn(e,!!o,a,!0);return;case"textarea":Me("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ve(e,n,S,A,a,null)}Di(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,G,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<yo.length;o++)Me(yo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,at,o,a,null)}return;default:if(eu(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Vf(e,n,mt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ve(e,n,A,o,a,null))}function Dy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,G=null,at=null,mt=null;for(ht in a){var St=a[ht];if(a.hasOwnProperty(ht)&&St!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":G=St;default:o.hasOwnProperty(ht)||Ve(e,n,ht,null,o,St)}}for(var rt in o){var ht=o[rt];if(St=a[rt],o.hasOwnProperty(rt)&&(ht!=null||St!=null))switch(rt){case"type":f=ht;break;case"name":u=ht;break;case"checked":at=ht;break;case"defaultChecked":mt=ht;break;case"value":S=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==St&&Ve(e,n,rt,ht,o,St)}}Dn(e,S,A,G,at,mt,f,u);return;case"select":ht=S=A=rt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ht=G;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":rt=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==G&&Ve(e,n,u,f,o,G)}n=A,a=S,o=ht,rt!=null?sn(e,!!a,rt,!1):!!o!=!!a&&(n!=null?sn(e,!!a,n,!0):sn(e,!!a,a?[]:"",!1));return;case"textarea":ht=rt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,n,A,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":rt=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,S,u,o,f)}Ls(e,rt,ht);return;case"option":for(var Wt in a)if(rt=a[Wt],a.hasOwnProperty(Wt)&&rt!=null&&!o.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:Ve(e,n,Wt,null,o,rt)}for(G in o)if(rt=o[G],ht=a[G],o.hasOwnProperty(G)&&rt!==ht&&(rt!=null||ht!=null))switch(G){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ve(e,n,G,rt,o,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)rt=a[re],a.hasOwnProperty(re)&&rt!=null&&!o.hasOwnProperty(re)&&Ve(e,n,re,null,o,rt);for(at in o)if(rt=o[at],ht=a[at],o.hasOwnProperty(at)&&rt!==ht&&(rt!=null||ht!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Ve(e,n,at,rt,o,ht)}return;default:if(eu(n)){for(var ke in a)rt=a[ke],a.hasOwnProperty(ke)&&rt!==void 0&&!o.hasOwnProperty(ke)&&Vf(e,n,ke,void 0,o,rt);for(mt in o)rt=o[mt],ht=a[mt],!o.hasOwnProperty(mt)||rt===ht||rt===void 0&&ht===void 0||Vf(e,n,mt,rt,o,ht);return}}for(var Z in a)rt=a[Z],a.hasOwnProperty(Z)&&rt!=null&&!o.hasOwnProperty(Z)&&Ve(e,n,Z,null,o,rt);for(St in o)rt=o[St],ht=a[St],!o.hasOwnProperty(St)||rt===ht||rt==null&&ht==null||Ve(e,n,St,rt,o,ht)}function c_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Uy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&c_(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],at=G.startTime;if(at>A)break;var mt=G.transferSize,St=G.initiatorType;mt&&c_(St)&&(G=G.responseEnd,S+=mt*(G<A?1:(A-at)/(G-at)))}if(--o,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kf=null,jf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function u_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function Ly(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,Oy=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(Py)}:h_;function Py(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function p_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ur(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[Za]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Mo(e.ownerDocument.body);a=u}while(a);ur(n)}function m_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function Iy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function g_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=di(e.nextSibling),e===null))return null;return e}function Yf(e){return e.data==="$?"||e.data==="$~"}function Zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function By(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kf=null;function __(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return di(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function v_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function x_(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);C(e)}var pi=new Map,y_=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=Y.d;Y.d={f:Fy,r:Hy,D:Gy,C:Vy,L:ky,m:jy,X:Wy,S:Xy,M:qy};function Fy(){var e=ia.f(),n=Bl();return e||n}function Hy(e){var n=lt(e);n!==null&&n.tag===5&&n.type==="form"?Im(n):ia.r(e)}var or=typeof document>"u"?null:document;function S_(e,n,a){var o=or;if(o&&typeof n=="string"&&n){var u=Te(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),y_.has(u)||(y_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),Mt(n),o.head.appendChild(n)))}}function Gy(e){ia.D(e),S_("dns-prefetch",e,null)}function Vy(e,n){ia.C(e,n),S_("preconnect",e,n)}function ky(e,n,a){ia.L(e,n,a);var o=or;if(o&&e&&n){var u='link[rel="preload"][as="'+Te(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Te(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Te(a.imageSizes)+'"]')):u+='[href="'+Te(e)+'"]';var f=u;switch(n){case"style":f=lr(e);break;case"script":f=cr(e)}pi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Eo(f))||n==="script"&&o.querySelector(To(f))||(n=o.createElement("link"),Cn(n,"link",e),Mt(n),o.head.appendChild(n)))}}function jy(e,n){ia.m(e,n);var a=or;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Te(o)+'"][href="'+Te(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cr(e)}if(!pi.has(f)&&(e=g({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}o=a.createElement("link"),Cn(o,"link",e),Mt(o),a.head.appendChild(o)}}}function Xy(e,n,a){ia.S(e,n,a);var o=or;if(o&&e){var u=K(o).hoistableStyles,f=lr(e);n=n||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Eo(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&Qf(e,a);var G=S=o.createElement("link");Mt(G),Cn(G,"link",e),G._p=new Promise(function(at,mt){G.onload=at,G.onerror=mt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Yl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function Wy(e,n){ia.X(e,n);var a=or;if(a&&e){var o=K(a).hoistableScripts,u=cr(e),f=o.get(u);f||(f=a.querySelector(To(u)),f||(e=g({src:e,async:!0},n),(n=pi.get(u))&&Jf(e,n),f=a.createElement("script"),Mt(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function qy(e,n){ia.M(e,n);var a=or;if(a&&e){var o=K(a).hoistableScripts,u=cr(e),f=o.get(u);f||(f=a.querySelector(To(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&Jf(e,n),f=a.createElement("script"),Mt(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function M_(e,n,a,o){var u=(u=nt.current)?ql(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=lr(a.href),a=K(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=lr(a.href);var f=K(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Eo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||Yy(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cr(a),a=K(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function lr(e){return'href="'+Te(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function E_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Yy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),Mt(n),e.head.appendChild(n))}function cr(e){return'[src="'+Te(e)+'"]'}function To(e){return"script[async]"+e}function T_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Te(a.href)+'"]');if(o)return n.instance=o,Mt(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Mt(o),Cn(o,"style",u),Yl(o,a.precedence,e),n.instance=o;case"stylesheet":u=lr(a.href);var f=e.querySelector(Eo(u));if(f)return n.state.loading|=4,n.instance=f,Mt(f),f;o=E_(a),(u=pi.get(u))&&Qf(o,u),f=(e.ownerDocument||e).createElement("link"),Mt(f);var S=f;return S._p=new Promise(function(A,G){S.onload=A,S.onerror=G}),Cn(f,"link",o),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=cr(a.src),(u=e.querySelector(To(f)))?(n.instance=u,Mt(u),u):(o=a,(u=pi.get(f))&&(o=g({},a),Jf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Mt(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yl(o,a.precedence,e));return n.instance}function Yl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function b_(e,n,a){if(Zl===null){var o=new Map,u=Zl=new Map;u.set(a,o)}else u=Zl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Za]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function A_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Zy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function R_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ky(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=lr(o.href),f=n.querySelector(Eo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Kl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Mt(f);return}f=n.ownerDocument||n,o=E_(o),(u=pi.get(u))&&Qf(o,u),f=f.createElement("link"),Mt(f);var S=f;S._p=new Promise(function(A,G){S.onload=A,S.onerror=G}),Cn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var $f=0;function Qy(e,n){return e.stylesheets&&e.count===0&&Jl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&$f===0&&($f=62500*Uy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>$f?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ql=null;function Jl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ql=new Map,n.forEach(Jy,e),Ql=null,Kl.call(e))}function Jy(e,n){if(!(n.state.loading&4)){var a=Ql.get(e);if(a)var o=a.get(null);else{a=new Map,Ql.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=Kl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function $y(e,n,a,o,u,f,S,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function C_(e,n,a,o,u,f,S,A,G,at,mt,St){return e=new $y(e,n,a,S,G,at,mt,St,A),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=Uu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Pu(f),e}function w_(e){return e?(e=Hs,e):Hs}function D_(e,n,a,o,u,f){u=w_(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ya(e,o,n),a!==null&&(Xn(a,e,n),no(a,e,n))}function U_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function th(e,n){U_(e,n),(e=e.alternate)&&U_(e,n)}function L_(e){if(e.tag===13||e.tag===31){var n=ts(e,67108864);n!==null&&Xn(n,e,67108864),th(e,67108864)}}function N_(e){if(e.tag===13||e.tag===31){var n=ii();n=Ds(n);var a=ts(e,n);a!==null&&Xn(a,e,n),th(e,n)}}var $l=!0;function tS(e,n,a,o){var u=P.T;P.T=null;var f=Y.p;try{Y.p=2,eh(e,n,a,o)}finally{Y.p=f,P.T=u}}function eS(e,n,a,o){var u=P.T;P.T=null;var f=Y.p;try{Y.p=8,eh(e,n,a,o)}finally{Y.p=f,P.T=u}}function eh(e,n,a,o){if($l){var u=nh(o);if(u===null)Gf(e,n,o,tc,a),P_(e,o);else if(iS(u,e,n,a,o))o.stopPropagation();else if(P_(e,o),n&4&&-1<nS.indexOf(e)){for(;u!==null;){var f=lt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=xt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var G=1<<31-It(S);A.entanglements[1]|=G,S&=~G}Oi(f),(Ne&6)===0&&(zl=T()+500,xo(0))}}break;case 31:case 13:A=ts(f,2),A!==null&&Xn(A,f,2),Bl(),th(f,2)}if(f=nh(o),f===null&&Gf(e,n,o,tc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Gf(e,n,o,null,a)}}function nh(e){return e=iu(e),ih(e)}var tc=null;function ih(e){if(tc=null,e=q(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function O_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(et()){case pt:return 2;case At:return 8;case dt:case te:return 32;case Pt:return 268435456;default:return 32}default:return 32}}var ah=!1,Ua=null,La=null,Na=null,Ao=new Map,Ro=new Map,Oa=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P_(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=lt(n),n!==null&&L_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function iS(e,n,a,o,u){switch(n){case"focusin":return Ua=Co(Ua,e,n,a,o,u),!0;case"dragenter":return La=Co(La,e,n,a,o,u),!0;case"mouseover":return Na=Co(Na,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,o,u)),!0}return!1}function z_(e){var n=q(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Fr(e.priority,function(){N_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Fr(e.priority,function(){N_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);nu=o,a.target.dispatchEvent(o),nu=null}else return n=lt(a),n!==null&&L_(n),e.blockedOn=a,!1;n.shift()}return!0}function I_(e,n,a){ec(e)&&a.delete(n)}function aS(){ah=!1,Ua!==null&&ec(Ua)&&(Ua=null),La!==null&&ec(La)&&(La=null),Na!==null&&ec(Na)&&(Na=null),Ao.forEach(I_),Ro.forEach(I_)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,ah||(ah=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,aS)))}var ic=null;function B_(e){ic!==e&&(ic=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ih(o||a)===null)continue;break}var f=lt(a);f!==null&&(e.splice(n,3),n-=3,ef(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ur(e){function n(G){return nc(G,e)}Ua!==null&&nc(Ua,e),La!==null&&nc(La,e),Na!==null&&nc(Na,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)z_(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[En]||null;if(typeof f=="function")S||B_(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[En]||null)A=S.formAction;else if(ih(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),B_(a)}}}function F_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sh(e){this._internalRoot=e}ac.prototype.render=sh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ii();D_(a,o,e,n,null,null)},ac.prototype.unmount=sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;D_(e.current,2,null,e,null,null),Bl(),n[ha]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ya();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&z_(e)}};var H_=t.version;if(H_!=="19.2.8")throw Error(s(527,H_,"19.2.8"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var sS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{wt=sc.inject(sS),Nt=sc}catch{}}return Do.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=qm,f=Ym,S=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=C_(e,1,!1,null,null,a,o,null,u,f,S,F_),e[ha]=n.current,Hf(e),new sh(n)},Do.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=qm,S=Ym,A=Zm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=C_(e,1,!0,n,a??null,o,u,G,f,S,A,F_),n.context=w_(null),a=n.current,o=ii(),o=Ds(o),u=xa(o),u.callback=null,ya(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Oi(n),e[ha]=n.current,Hf(e),new ac(n)},Do.version="19.2.8",Do}var K_;function gS(){if(K_)return lh.exports;K_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),lh.exports=mS(),lh.exports}var _S=gS();const vS=vv(_S);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=ae.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>ae.createElement("svg",{ref:m,...yS,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:xv("lucide",l),...d},[...h.map(([p,_])=>ae.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(r,t)=>{const i=ae.forwardRef(({className:s,...l},c)=>ae.createElement(SS,{ref:c,iconNode:t,className:xv(`lucide-${xS(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=Qe("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=Qe("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=Qe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=Qe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Qe("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=Qe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=Qe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=Qe("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=Qe("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=Qe("FileVideo",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=Qe("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=Qe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=Qe("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Qe("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=Qe("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=Qe("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Qe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=Qe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=Qe("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=Qe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=Qe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=Qe("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=Qe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=Qe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=Qe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xd="180",Rr={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},IS=0,n0=1,BS=2,yv=1,FS=2,ca=3,Wa=0,Yn=1,bi=2,ja=0,Cr=1,i0=2,a0=3,s0=4,HS=5,Ss=100,GS=101,VS=102,kS=103,jS=104,XS=200,WS=201,qS=202,YS=203,td=204,ed=205,ZS=206,KS=207,QS=208,JS=209,$S=210,tM=211,eM=212,nM=213,iM=214,nd=0,id=1,ad=2,Dr=3,sd=4,rd=5,od=6,ld=7,Sv=0,aM=1,sM=2,Xa=0,rM=1,oM=2,lM=3,cM=4,uM=5,fM=6,hM=7,Mv=300,Ur=301,Lr=302,cd=303,ud=304,Zc=306,fd=1e3,Es=1001,hd=1002,Ci=1003,dM=1004,lc=1005,zi=1006,mh=1007,Ts=1008,Bi=1009,Ev=1010,Tv=1011,Go=1012,Wd=1013,bs=1014,ua=1015,Wo=1016,qd=1017,Yd=1018,Vo=1020,bv=35902,Av=35899,Rv=1021,Cv=1022,Ri=1023,ko=1026,jo=1027,wv=1028,Zd=1029,Dv=1030,Kd=1031,Qd=1033,Pc=33776,zc=33777,Ic=33778,Bc=33779,dd=35840,pd=35841,md=35842,gd=35843,_d=36196,vd=37492,xd=37496,yd=37808,Sd=37809,Md=37810,Ed=37811,Td=37812,bd=37813,Ad=37814,Rd=37815,Cd=37816,wd=37817,Dd=37818,Ud=37819,Ld=37820,Nd=37821,Od=36492,Pd=36494,zd=36495,Id=36283,Bd=36284,Fd=36285,Hd=36286,pM=3200,mM=3201,Uv=0,gM=1,ka="",gi="srgb",Nr="srgb-linear",Gc="linear",je="srgb",fr=7680,r0=519,_M=512,vM=513,xM=514,Lv=515,yM=516,SM=517,MM=518,EM=519,o0=35044,l0="300 es",Ii=2e3,Vc=2001;class Cs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=Math.PI/180,Gd=180/Math.PI;function qo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Ee(r,t,i){return Math.max(t,Math.min(i,r))}function TM(r,t){return(r%t+t)%t}function gh(r,t,i){return(1-i)*r+i*t}function Uo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const bM={DEG2RAD:Fc};class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class As{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3];const x=c[h+0],y=c[h+1],E=c[h+2],b=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=b;return}if(g!==b||m!==x||p!==y||_!==E){let M=1-d;const v=m*x+p*y+_*E+g*b,F=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const V=Math.sqrt(N),O=Math.atan2(V,v*F);M=Math.sin(M*O)/V,d=Math.sin(d*O)/V}const w=d*F;if(m=m*M+x*w,p=p*M+y*w,_=_*M+E*w,g=g*M+b*w,M===1-d){const V=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=V,p*=V,_*=V,g*=V}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[h],x=c[h+1],y=c[h+2],E=c[h+3];return t[i]=d*E+_*g+m*y-p*x,t[i+1]=m*E+_*x+p*g-d*y,t[i+2]=p*E+_*y+d*x-m*g,t[i+3]=_*E-d*g-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(c/2),x=m(s/2),y=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*_*g+p*y*E,this._y=p*y*g-x*_*E,this._z=p*_*E+x*y*g,this._w=p*_*g-x*y*E;break;case"YXZ":this._x=x*_*g+p*y*E,this._y=p*y*g-x*_*E,this._z=p*_*E-x*y*g,this._w=p*_*g+x*y*E;break;case"ZXY":this._x=x*_*g-p*y*E,this._y=p*y*g+x*_*E,this._z=p*_*E+x*y*g,this._w=p*_*g-x*y*E;break;case"ZYX":this._x=x*_*g-p*y*E,this._y=p*y*g+x*_*E,this._z=p*_*E-x*y*g,this._w=p*_*g+x*y*E;break;case"YZX":this._x=x*_*g+p*y*E,this._y=p*y*g+x*_*E,this._z=p*_*E-x*y*g,this._w=p*_*g-x*y*E;break;case"XZY":this._x=x*_*g-p*y*E,this._y=p*y*g-x*_*E,this._z=p*_*E+x*y*g,this._w=p*_*g+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=s+d+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),g=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(c0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(c0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*_,this.y=s+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new J,c0=new As;class me{constructor(t,i,s,l,c,h,d,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],x=s[2],y=s[5],E=s[8],b=l[0],M=l[3],v=l[6],F=l[1],N=l[4],w=l[7],V=l[2],O=l[5],B=l[8];return c[0]=h*b+d*F+m*V,c[3]=h*M+d*N+m*O,c[6]=h*v+d*w+m*B,c[1]=p*b+_*F+g*V,c[4]=p*M+_*N+g*O,c[7]=p*v+_*w+g*B,c[2]=x*b+y*F+E*V,c[5]=x*M+y*N+E*O,c[8]=x*v+y*w+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,x=d*m-_*c,y=p*c-h*m,E=i*g+s*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=g*b,t[1]=(l*p-_*s)*b,t[2]=(d*s-l*h)*b,t[3]=x*b,t[4]=(_*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=y*b,t[7]=(s*m-p*i)*b,t[8]=(h*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(vh.makeScale(t,i)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,i){return this.premultiply(vh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new me;function Nv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function kc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AM(){const r=kc("canvas");return r.style.display="block",r}const u0={};function Xo(r){r in u0||(u0[r]=!0,console.warn(r))}function RM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const f0=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h0=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CM(){const r={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===je&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===je&&(l.r=wr(l.r),l.g=wr(l.g),l.b=wr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Nr]:{primaries:t,whitePoint:s,transfer:Gc,toXYZ:f0,fromXYZ:h0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:je,toXYZ:f0,fromXYZ:h0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const Le=CM();function fa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hr;class wM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{hr===void 0&&(hr=kc("canvas")),hr.width=t.width,hr.height=t.height;const l=hr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=hr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=fa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let DM=0;class Jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(xh(l[h].image)):c.push(xh(l[h]))}else c=xh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UM=0;const yh=new J;class Zn extends Cs{constructor(t=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,s=Es,l=Es,c=zi,h=Ts,d=Ri,m=Bi,p=Zn.DEFAULT_ANISOTROPY,_=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=qo(),this.name="",this.source=new Jd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fd:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fd:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Mv;Zn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],y=m[5],E=m[9],b=m[2],M=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+b)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,w=(y+1)/2,V=(v+1)/2,O=(_+x)/4,B=(g+b)/4,X=(E+M)/4;return N>w&&N>V?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=O/s,c=B/s):w>V?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=O/l,c=X/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=B/c,l=X/c),this.set(s,l,c,i),this}let F=Math.sqrt((M-E)*(M-E)+(g-b)*(g-b)+(x-_)*(x-_));return Math.abs(F)<.001&&(F=1),this.x=(M-E)/F,this.y=(g-b)/F,this.z=(x-_)/F,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LM extends Cs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Zn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Jd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends LM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Ov extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Mi):Mi.fromBufferAttribute(c,h),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),cc.copy(s.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),uc.subVectors(this.max,Lo),dr.subVectors(t.a,Lo),pr.subVectors(t.b,Lo),mr.subVectors(t.c,Lo),za.subVectors(pr,dr),Ia.subVectors(mr,pr),ds.subVectors(dr,mr);let i=[0,-za.z,za.y,0,-Ia.z,Ia.y,0,-ds.z,ds.y,za.z,0,-za.x,Ia.z,0,-Ia.x,ds.z,0,-ds.x,-za.y,za.x,0,-Ia.y,Ia.x,0,-ds.y,ds.x,0];return!Sh(i,dr,pr,mr,uc)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,dr,pr,mr,uc))?!1:(fc.crossVectors(za,Ia),i=[fc.x,fc.y,fc.z],Sh(i,dr,pr,mr,uc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const aa=[new J,new J,new J,new J,new J,new J,new J,new J],Mi=new J,cc=new Yo,dr=new J,pr=new J,mr=new J,za=new J,Ia=new J,ds=new J,Lo=new J,uc=new J,fc=new J,ps=new J;function Sh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ps.fromArray(r,c);const d=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),m=t.dot(ps),p=i.dot(ps),_=s.dot(ps);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const OM=new Yo,No=new J,Mh=new J;class Kc{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):OM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(No,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(Mh)),this.expandByPoint(No.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sa=new J,Eh=new J,hc=new J,Ba=new J,Th=new J,dc=new J,bh=new J;class $d{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Eh.copy(t).add(i).multiplyScalar(.5),hc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(Eh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(hc),d=Ba.dot(this.direction),m=-Ba.dot(hc),p=Ba.lengthSq(),_=Math.abs(1-h*h);let g,x,y,E;if(_>0)if(g=h*m-d,x=h*d-m,E=c*_,g>=0)if(x>=-E)if(x<=E){const b=1/_;g*=b,x*=b,y=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=c,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-h*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(g=Math.max(0,-(h*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p);else x=h>0?-c:c,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Eh).addScaledVector(hc,x),y}intersectSphere(t,i){sa.subVectors(t.center,this.origin);const s=sa.dot(this.direction),l=sa.dot(sa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,sa)!==null}intersectTriangle(t,i,s,l,c){Th.subVectors(i,t),dc.subVectors(s,t),bh.crossVectors(Th,dc);let h=this.direction.dot(bh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(dc.crossVectors(Ba,dc));if(m<0)return null;const p=d*this.direction.dot(Th.cross(Ba));if(p<0||m+p>h)return null;const _=-d*Ba.dot(bh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(t,i,s,l,c,h,d,m,p,_,g,x,y,E,b,M){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,g,x,y,E,b,M)}set(t,i,s,l,c,h,d,m,p,_,g,x,y,E,b,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=y,v[7]=E,v[11]=b,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/gr.setFromMatrixColumn(t,0).length(),c=1/gr.setFromMatrixColumn(t,1).length(),h=1/gr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=h*_,y=h*g,E=d*_,b=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+E*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=E+y*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,y=m*g,E=p*_,b=p*g;i[0]=x+b*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=y*d-E,i[6]=b+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,y=m*g,E=p*_,b=p*g;i[0]=x-b*d,i[4]=-h*g,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*_,i[9]=b-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,y=h*g,E=d*_,b=d*g;i[0]=m*_,i[4]=E*p-y,i[8]=x*p+b,i[1]=m*g,i[5]=b*p+x,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,y=h*p,E=d*m,b=d*p;i[0]=m*_,i[4]=b-x*g,i[8]=E*g+y,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*g+E,i[10]=x-b*g}else if(t.order==="XZY"){const x=h*m,y=h*p,E=d*m,b=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+b,i[5]=h*_,i[9]=y*g-E,i[2]=E*g-y,i[6]=d*_,i[10]=b*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PM,t,zM)}lookAt(t,i,s){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Fa.crossVectors(s,ai),Fa.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Fa.crossVectors(s,ai)),Fa.normalize(),pc.crossVectors(ai,Fa),l[0]=Fa.x,l[4]=pc.x,l[8]=ai.x,l[1]=Fa.y,l[5]=pc.y,l[9]=ai.y,l[2]=Fa.z,l[6]=pc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],x=s[9],y=s[13],E=s[2],b=s[6],M=s[10],v=s[14],F=s[3],N=s[7],w=s[11],V=s[15],O=l[0],B=l[4],X=l[8],L=l[12],D=l[1],k=l[5],Q=l[9],ot=l[13],ft=l[2],st=l[6],P=l[10],Y=l[14],W=l[3],yt=l[7],Et=l[11],z=l[15];return c[0]=h*O+d*D+m*ft+p*W,c[4]=h*B+d*k+m*st+p*yt,c[8]=h*X+d*Q+m*P+p*Et,c[12]=h*L+d*ot+m*Y+p*z,c[1]=_*O+g*D+x*ft+y*W,c[5]=_*B+g*k+x*st+y*yt,c[9]=_*X+g*Q+x*P+y*Et,c[13]=_*L+g*ot+x*Y+y*z,c[2]=E*O+b*D+M*ft+v*W,c[6]=E*B+b*k+M*st+v*yt,c[10]=E*X+b*Q+M*P+v*Et,c[14]=E*L+b*ot+M*Y+v*z,c[3]=F*O+N*D+w*ft+V*W,c[7]=F*B+N*k+w*st+V*yt,c[11]=F*X+N*Q+w*P+V*Et,c[15]=F*L+N*ot+w*Y+V*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],y=t[14],E=t[3],b=t[7],M=t[11],v=t[15];return E*(+c*m*g-l*p*g-c*d*x+s*p*x+l*d*y-s*m*y)+b*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*_-c*m*_)+M*(+i*p*g-i*d*y-c*h*g+s*h*y+c*d*_-s*p*_)+v*(-l*d*_-i*m*g+i*d*x+l*h*g-s*h*x+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],y=t[11],E=t[12],b=t[13],M=t[14],v=t[15],F=g*M*p-b*x*p+b*m*y-d*M*y-g*m*v+d*x*v,N=E*x*p-_*M*p-E*m*y+h*M*y+_*m*v-h*x*v,w=_*b*p-E*g*p+E*d*y-h*b*y-_*d*v+h*g*v,V=E*g*m-_*b*m-E*d*x+h*b*x+_*d*M-h*g*M,O=i*F+s*N+l*w+c*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return t[0]=F*B,t[1]=(b*x*c-g*M*c-b*l*y+s*M*y+g*l*v-s*x*v)*B,t[2]=(d*M*c-b*m*c+b*l*p-s*M*p-d*l*v+s*m*v)*B,t[3]=(g*m*c-d*x*c-g*l*p+s*x*p+d*l*y-s*m*y)*B,t[4]=N*B,t[5]=(_*M*c-E*x*c+E*l*y-i*M*y-_*l*v+i*x*v)*B,t[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*v-i*m*v)*B,t[7]=(h*x*c-_*m*c+_*l*p-i*x*p-h*l*y+i*m*y)*B,t[8]=w*B,t[9]=(E*g*c-_*b*c-E*s*y+i*b*y+_*s*v-i*g*v)*B,t[10]=(h*b*c-E*d*c+E*s*p-i*b*p-h*s*v+i*d*v)*B,t[11]=(_*d*c-h*g*c-_*s*p+i*g*p+h*s*y-i*d*y)*B,t[12]=V*B,t[13]=(_*b*l-E*g*l+E*s*x-i*b*x-_*s*M+i*g*M)*B,t[14]=(E*d*l-h*b*l-E*s*m+i*b*m+h*s*M-i*d*M)*B,t[15]=(h*g*l-_*d*l+_*s*m-i*g*m-h*s*x+i*d*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,x=c*p,y=c*_,E=c*g,b=h*_,M=h*g,v=d*g,F=m*p,N=m*_,w=m*g,V=s.x,O=s.y,B=s.z;return l[0]=(1-(b+v))*V,l[1]=(y+w)*V,l[2]=(E-N)*V,l[3]=0,l[4]=(y-w)*O,l[5]=(1-(x+v))*O,l[6]=(M+F)*O,l[7]=0,l[8]=(E+N)*B,l[9]=(M-F)*B,l[10]=(1-(x+b))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=gr.set(l[0],l[1],l[2]).length();const h=gr.set(l[4],l[5],l[6]).length(),d=gr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,_=1/h,g=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,i.setFromRotationMatrix(Ei),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Ii,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let E,b;if(m)E=c/(h-c),b=h*c/(h-c);else if(d===Ii)E=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===Vc)E=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ii,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,b;if(m)E=1/(h-c),b=h/(h-c);else if(d===Ii)E=-2/(h-c),b=-(h+c)/(h-c);else if(d===Vc)E=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const gr=new J,Ei=new an,PM=new J(0,0,0),zM=new J(1,1,1),Fa=new J,pc=new J,ai=new J,d0=new an,p0=new As;class Fi{constructor(t=0,i=0,s=0,l=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return d0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(d0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return p0.setFromEuler(this),this.setFromQuaternion(p0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let IM=0;const m0=new J,_r=new As,ra=new an,mc=new J,Oo=new J,BM=new J,FM=new As,g0=new J(1,0,0),_0=new J(0,1,0),v0=new J(0,0,1),x0={type:"added"},HM={type:"removed"},vr={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Mn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new J,i=new Fi,s=new As,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new me}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _r.setFromAxisAngle(t,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,i){return _r.setFromAxisAngle(t,i),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(g0,t)}rotateY(t){return this.rotateOnAxis(_0,t)}rotateZ(t){return this.rotateOnAxis(v0,t)}translateOnAxis(t,i){return m0.copy(t).applyQuaternion(this.quaternion),this.position.add(m0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(g0,t)}translateY(t){return this.translateOnAxis(_0,t)}translateZ(t){return this.translateOnAxis(v0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?mc.copy(t):mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Oo,mc,this.up):ra.lookAt(mc,Oo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(ra),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(x0),vr.child=t,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(HM),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(x0),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,BM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,FM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),x=h(t.skeletons),y=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new J(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new J,oa=new J,Rh=new J,la=new J,xr=new J,yr=new J,y0=new J,Ch=new J,wh=new J,Dh=new J,Uh=new nn,Lh=new nn,Nh=new nn;class Ai{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ti.subVectors(l,i),oa.subVectors(s,i),Rh.subVectors(t,i);const h=Ti.dot(Ti),d=Ti.dot(oa),m=Ti.dot(Rh),p=oa.dot(oa),_=oa.dot(Rh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(p*m-d*_)*x,E=(h*_-d*m)*x;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,la.x),m.addScaledVector(h,la.y),m.addScaledVector(d,la.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Uh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Uh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,s),Nh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Uh,c.x),h.addScaledVector(Lh,c.y),h.addScaledVector(Nh,c.z),h}static isFrontFacing(t,i,s,l){return Ti.subVectors(s,i),oa.subVectors(t,i),Ti.cross(oa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ti.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;xr.subVectors(l,s),yr.subVectors(c,s),Ch.subVectors(t,s);const m=xr.dot(Ch),p=yr.dot(Ch);if(m<=0&&p<=0)return i.copy(s);wh.subVectors(t,l);const _=xr.dot(wh),g=yr.dot(wh);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(xr,h);Dh.subVectors(t,c);const y=xr.dot(Dh),E=yr.dot(Dh);if(E>=0&&y<=E)return i.copy(c);const b=y*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(yr,d);const M=_*E-y*g;if(M<=0&&g-_>=0&&y-E>=0)return y0.subVectors(c,l),d=(g-_)/(g-_+(y-E)),i.copy(l).addScaledVector(y0,d);const v=1/(M+b+x);return h=b*v,d=x*v,i.copy(s).addScaledVector(xr,h).addScaledVector(yr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Oh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class _e{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=TM(t,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Oh(h,c,t+1/3),this.g=Oh(h,c,t),this.b=Oh(h,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const s=zv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Le.workingToColorSpace(Nn.copy(this),t),Math.round(Ee(Nn.r*255,0,255))*65536+Math.round(Ee(Nn.g*255,0,255))*256+Math.round(Ee(Nn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=gi){Le.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(gc);const s=gh(Ha.h,gc.h,i),l=gh(Ha.s,gc.s,i),c=gh(Ha.l,gc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new _e;_e.NAMES=zv;let GM=0;class zr extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Cr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=ed,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==td&&(s.blendSrc=this.blendSrc),this.blendDst!==ed&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ho extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new J,_c=new fe;let VM=0;class vi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=o0,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==o0&&(t.usage=this.usage),t}}class Iv extends vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Bv extends vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class $e extends vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let kM=0;const mi=new an,Ph=new Mn,Sr=new J,si=new Yo,Po=new Yo,Sn=new J;class Fn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nv(t)?Bv:Iv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new me().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,s){return mi.makeTranslation(t,i,s),this.applyMatrix4(mi),this}scale(t,i,s){return mi.makeScale(t,i,s),this.applyMatrix4(mi),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new $e(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(si.min,Po.min),si.expandByPoint(Sn),Sn.addVectors(si.max,Po.max),si.expandByPoint(Sn)):(si.expandByPoint(Po.min),si.expandByPoint(Po.max))}si.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Sn.fromBufferAttribute(d,p),m&&(Sr.fromBufferAttribute(t,p),Sn.add(Sr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new J,m[X]=new J;const p=new J,_=new J,g=new J,x=new fe,y=new fe,E=new fe,b=new J,M=new J;function v(X,L,D){p.fromBufferAttribute(s,X),_.fromBufferAttribute(s,L),g.fromBufferAttribute(s,D),x.fromBufferAttribute(c,X),y.fromBufferAttribute(c,L),E.fromBufferAttribute(c,D),_.sub(p),g.sub(p),y.sub(x),E.sub(x);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(k),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(k),d[X].add(b),d[L].add(b),d[D].add(b),m[X].add(M),m[L].add(M),m[D].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let X=0,L=F.length;X<L;++X){const D=F[X],k=D.start,Q=D.count;for(let ot=k,ft=k+Q;ot<ft;ot+=3)v(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const N=new J,w=new J,V=new J,O=new J;function B(X){V.fromBufferAttribute(l,X),O.copy(V);const L=d[X];N.copy(L),N.sub(V.multiplyScalar(V.dot(L))).normalize(),w.crossVectors(O,L);const k=w.dot(m[X])<0?-1:1;h.setXYZW(X,N.x,N.y,N.z,k)}for(let X=0,L=F.length;X<L;++X){const D=F[X],k=D.start,Q=D.count;for(let ot=k,ft=k+Q;ot<ft;ot+=3)B(t.getX(ot+0)),B(t.getX(ot+1)),B(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new J,c=new J,h=new J,d=new J,m=new J,p=new J,_=new J,g=new J;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),b=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let y=0,E=0;for(let b=0,M=m.length;b<M;b++){d.isInterleavedBufferAttribute?y=m[b]*d.data.stride+d.offset:y=m[b]*_;for(let v=0;v<_;v++)x[E++]=p[y++]}return new vi(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],y=t(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S0=new an,ms=new $d,vc=new Kc,M0=new J,xc=new J,yc=new J,Sc=new J,zh=new J,Mc=new J,E0=new J,Ec=new J;class On extends Mn{constructor(t=new Fn,i=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Mc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(zh.fromBufferAttribute(g,t),h?Mc.addScaledVector(zh,_):Mc.addScaledVector(zh.sub(i),_))}i.add(Mc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(c),ms.copy(t.ray).recast(t.near),!(vc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(vc,M0)===null||ms.origin.distanceToSquared(M0)>(t.far-t.near)**2))&&(S0.copy(c).invert(),ms.copy(t.ray).applyMatrix4(S0),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ms)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const M=x[E],v=h[M.materialIndex],F=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let w=F,V=N;w<V;w+=3){const O=d.getX(w),B=d.getX(w+1),X=d.getX(w+2);l=Tc(this,v,t,s,p,_,g,O,B,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let M=E,v=b;M<v;M+=3){const F=d.getX(M),N=d.getX(M+1),w=d.getX(M+2);l=Tc(this,h,t,s,p,_,g,F,N,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const M=x[E],v=h[M.materialIndex],F=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let w=F,V=N;w<V;w+=3){const O=w,B=w+1,X=w+2;l=Tc(this,v,t,s,p,_,g,O,B,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),b=Math.min(m.count,y.start+y.count);for(let M=E,v=b;M<v;M+=3){const F=M,N=M+1,w=M+2;l=Tc(this,h,t,s,p,_,g,F,N,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function jM(r,t,i,s,l,c,h,d){let m;if(t.side===Yn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Wa,d),m===null)return null;Ec.copy(d),Ec.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:r}}function Tc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,xc),r.getVertexPosition(m,yc),r.getVertexPosition(p,Sc);const _=jM(r,t,i,s,xc,yc,Sc,E0);if(_){const g=new J;Ai.getBarycoord(E0,xc,yc,Sc,g),l&&(_.uv=Ai.getInterpolatedAttribute(l,d,m,p,g,new fe)),c&&(_.uv1=Ai.getInterpolatedAttribute(c,d,m,p,g,new fe)),h&&(_.normal=Ai.getInterpolatedAttribute(h,d,m,p,g,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new J,materialIndex:0};Ai.getNormal(xc,yc,Sc,x.normal),_.face=x,_.barycoord=g}return _}class Zo extends Fn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let x=0,y=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(g,2));function E(b,M,v,F,N,w,V,O,B,X,L){const D=w/B,k=V/X,Q=w/2,ot=V/2,ft=O/2,st=B+1,P=X+1;let Y=0,W=0;const yt=new J;for(let Et=0;Et<P;Et++){const z=Et*k-ot;for(let tt=0;tt<st;tt++){const vt=tt*D-Q;yt[b]=vt*F,yt[M]=z*N,yt[v]=ft,p.push(yt.x,yt.y,yt.z),yt[b]=0,yt[M]=0,yt[v]=O>0?1:-1,_.push(yt.x,yt.y,yt.z),g.push(tt/B),g.push(1-Et/X),Y+=1}}for(let Et=0;Et<X;Et++)for(let z=0;z<B;z++){const tt=x+z+st*Et,vt=x+z+st*(Et+1),Ct=x+(z+1)+st*(Et+1),Ot=x+(z+1)+st*Et;m.push(tt,vt,Ot),m.push(vt,Ct,Ot),W+=6}d.addGroup(y,W,L),y+=W,x+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Bn(r){const t={};for(let i=0;i<r.length;i++){const s=Or(r[i]);for(const l in s)t[l]=s[l]}return t}function XM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Fv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const WM={clone:Or,merge:Bn};var qM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qM,this.fragmentShader=YM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=XM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Hv extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new J,T0=new fe,b0=new fe;class _i extends Hv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,T0,b0),i.subVectors(b0,T0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Fc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Mr=-90,Er=1;class ZM extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Mr,Er,t,i);l.layers=this.layers,this.add(l);const c=new _i(Mr,Er,t,i);c.layers=this.layers,this.add(c);const h=new _i(Mr,Er,t,i);h.layers=this.layers,this.add(h);const d=new _i(Mr,Er,t,i);d.layers=this.layers,this.add(d);const m=new _i(Mr,Er,t,i);m.layers=this.layers,this.add(m);const p=new _i(Mr,Er,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,x,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Gv extends Zn{constructor(t=[],i=Ur,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class KM extends Rs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Gv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Zo(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:ja});c.uniforms.tEquirect.value=i;const h=new On(l,c),d=i.minFilter;return i.minFilter===Ts&&(i.minFilter=zi),new ZM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Bo extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,s),v=this._getHandJoint(p,b);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Bo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class tp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new _e(t),this.near=i,this.far=s}clone(){return new tp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class JM extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bh=new J,$M=new J,tE=new me;class Va{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Bh.subVectors(s,i).cross($M.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||tE.getNormalMatrix(t),l=this.coplanarPoint(Bh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Kc,eE=new fe(.5,.5),bc=new J;class ep{constructor(t=new Va,i=new Va,s=new Va,l=new Va,c=new Va,h=new Va){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ii,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],y=c[7],E=c[8],b=c[9],M=c[10],v=c[11],F=c[12],N=c[13],w=c[14],V=c[15];if(l[0].setComponents(p-h,y-_,v-E,V-F).normalize(),l[1].setComponents(p+h,y+_,v+E,V+F).normalize(),l[2].setComponents(p+d,y+g,v+b,V+N).normalize(),l[3].setComponents(p-d,y-g,v-b,V-N).normalize(),s)l[4].setComponents(m,x,M,w).normalize(),l[5].setComponents(p-m,y-x,v-M,V-w).normalize();else if(l[4].setComponents(p-m,y-x,v-M,V-w).normalize(),i===Ii)l[5].setComponents(p+m,y+x,v+M,V+w).normalize();else if(i===Vc)l[5].setComponents(m,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const i=eE.distanceTo(t.center);return gs.radius=.7071067811865476+i,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(bc.x=l.normal.x>0?t.max.x:t.min.x,bc.y=l.normal.y>0?t.max.y:t.min.y,bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class np extends zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jc=new J,Xc=new J,A0=new an,zo=new $d,Ac=new Kc,Fh=new J,R0=new J;class nE extends Mn{constructor(t=new Fn,i=new np){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)jc.fromBufferAttribute(i,l-1),Xc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=jc.distanceTo(Xc);t.setAttribute("lineDistance",new $e(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=c,t.ray.intersectsSphere(Ac)===!1)return;A0.copy(l).invert(),zo.copy(t.ray).applyMatrix4(A0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const y=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let b=y,M=E-1;b<M;b+=p){const v=_.getX(b),F=_.getX(b+1),N=Rc(this,t,zo,m,v,F,b);N&&i.push(N)}if(this.isLineLoop){const b=_.getX(E-1),M=_.getX(y),v=Rc(this,t,zo,m,b,M,E-1);v&&i.push(v)}}else{const y=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let b=y,M=E-1;b<M;b+=p){const v=Rc(this,t,zo,m,b,b+1,b);v&&i.push(v)}if(this.isLineLoop){const b=Rc(this,t,zo,m,E-1,y,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Rc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(jc.fromBufferAttribute(d,l),Xc.fromBufferAttribute(d,c),i.distanceSqToSegment(jc,Xc,Fh,R0)>s)return;Fh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Fh);if(!(p<t.near||p>t.far))return{distance:p,point:R0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const C0=new J,w0=new J;class Vv extends nE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)C0.fromBufferAttribute(i,l),w0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+C0.distanceTo(w0);t.setAttribute("lineDistance",new $e(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kv extends Zn{constructor(t,i,s=bs,l,c,h,d=Ci,m=Ci,p,_=ko,g=1){if(_!==ko&&_!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jv extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ip extends Fn{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],h=[],d=[],m=[],p=new J,_=new fe;h.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let g=0,x=3;g<=i;g++,x+=3){const y=s+g/i*l;p.x=t*Math.cos(y),p.y=t*Math.sin(y),h.push(p.x,p.y,p.z),d.push(0,0,1),_.x=(h[x]/t+1)/2,_.y=(h[x+1]/t+1)/2,m.push(_.x,_.y)}for(let g=1;g<=i;g++)c.push(g,g+1,0);this.setIndex(c),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wc extends Fn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],x=[],y=[];let E=0;const b=[],M=s/2;let v=0;F(),h===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(_),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(y,2));function F(){const w=new J,V=new J;let O=0;const B=(i-t)/s;for(let X=0;X<=c;X++){const L=[],D=X/c,k=D*(i-t)+t;for(let Q=0;Q<=l;Q++){const ot=Q/l,ft=ot*m+d,st=Math.sin(ft),P=Math.cos(ft);V.x=k*st,V.y=-D*s+M,V.z=k*P,g.push(V.x,V.y,V.z),w.set(st,B,P).normalize(),x.push(w.x,w.y,w.z),y.push(ot,1-D),L.push(E++)}b.push(L)}for(let X=0;X<l;X++)for(let L=0;L<c;L++){const D=b[L][X],k=b[L+1][X],Q=b[L+1][X+1],ot=b[L][X+1];(t>0||L!==0)&&(_.push(D,k,ot),O+=3),(i>0||L!==c-1)&&(_.push(k,Q,ot),O+=3)}p.addGroup(v,O,0),v+=O}function N(w){const V=E,O=new fe,B=new J;let X=0;const L=w===!0?t:i,D=w===!0?1:-1;for(let Q=1;Q<=l;Q++)g.push(0,M*D,0),x.push(0,D,0),y.push(.5,.5),E++;const k=E;for(let Q=0;Q<=l;Q++){const ft=Q/l*m+d,st=Math.cos(ft),P=Math.sin(ft);B.x=L*P,B.y=M*D,B.z=L*st,g.push(B.x,B.y,B.z),x.push(0,D,0),O.x=st*.5+.5,O.y=P*.5*D+.5,y.push(O.x,O.y),E++}for(let Q=0;Q<l;Q++){const ot=V+Q,ft=k+Q;w===!0?_.push(ft,ft+1,ot):_.push(ft+1,ft,ot),X+=3}p.addGroup(v,X,w===!0?1:2),v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qc extends Fn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=t/d,x=i/m,y=[],E=[],b=[],M=[];for(let v=0;v<_;v++){const F=v*x-h;for(let N=0;N<p;N++){const w=N*g-c;E.push(w,-F,0),b.push(0,0,1),M.push(N/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let F=0;F<d;F++){const N=F+p*v,w=F+p*(v+1),V=F+1+p*(v+1),O=F+1+p*v;y.push(N,w,O),y.push(w,V,O)}this.setIndex(y),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.width,t.height,t.widthSegments,t.heightSegments)}}class ap extends Fn{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let g=t;const x=(i-t)/l,y=new J,E=new fe;for(let b=0;b<=l;b++){for(let M=0;M<=s;M++){const v=c+M/s*h;y.x=g*Math.cos(v),y.y=g*Math.sin(v),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/i+1)/2,E.y=(y.y/i+1)/2,_.push(E.x,E.y)}g+=x}for(let b=0;b<l;b++){const M=b*(s+1);for(let v=0;v<s;v++){const F=v+M,N=F,w=F+s+1,V=F+s+2,O=F+1;d.push(N,w,O),d.push(w,V,O)}}this.setIndex(d),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ap(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qc extends Fn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],g=new J,x=new J,y=[],E=[],b=[],M=[];for(let v=0;v<=s;v++){const F=[],N=v/s;let w=0;v===0&&h===0?w=.5/i:v===s&&m===Math.PI&&(w=-.5/i);for(let V=0;V<=i;V++){const O=V/i;g.x=-t*Math.cos(l+O*c)*Math.sin(h+N*d),g.y=t*Math.cos(h+N*d),g.z=t*Math.sin(l+O*c)*Math.sin(h+N*d),E.push(g.x,g.y,g.z),x.copy(g).normalize(),b.push(x.x,x.y,x.z),M.push(O+w,1-N),F.push(p++)}_.push(F)}for(let v=0;v<s;v++)for(let F=0;F<i;F++){const N=_[v][F+1],w=_[v][F],V=_[v+1][F],O=_[v+1][F+1];(v!==0||h>0)&&y.push(N,w,O),(v!==s-1||m<Math.PI)&&y.push(w,V,O)}this.setIndex(y),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cc extends zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uv,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class iE extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class aE extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xv extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class sE extends Xv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Hh=new an,D0=new J,U0=new J;class rE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ep,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;D0.setFromMatrixPosition(t.matrixWorld),i.position.copy(D0),U0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(U0),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Wv extends Hv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oE extends rE{constructor(){super(new Wv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lE extends Xv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new oE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cE extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class L0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uE extends Vv{constructor(t=10,i=10,s=4473924,l=8947848){s=new _e(s),l=new _e(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,y=0,E=-d;x<=i;x++,E+=h){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const b=x===c?s:l;b.toArray(p,y),y+=3,b.toArray(p,y),y+=3,b.toArray(p,y),y+=3,b.toArray(p,y),y+=3}const _=new Fn;_.setAttribute("position",new $e(m,3)),_.setAttribute("color",new $e(p,3));const g=new np({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class fE extends Cs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function N0(r,t,i,s){const l=hE(s);switch(i){case Rv:return r*t;case wv:return r*t/l.components*l.byteLength;case Zd:return r*t/l.components*l.byteLength;case Dv:return r*t*2/l.components*l.byteLength;case Kd:return r*t*2/l.components*l.byteLength;case Cv:return r*t*3/l.components*l.byteLength;case Ri:return r*t*4/l.components*l.byteLength;case Qd:return r*t*4/l.components*l.byteLength;case Pc:case zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ic:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pd:case gd:return Math.max(r,16)*Math.max(t,8)/4;case dd:case md:return Math.max(r,8)*Math.max(t,8)/2;case _d:case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Md:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ld:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Od:case Pd:case zd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Id:case Bd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Fd:case Hd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hE(r){switch(r){case Bi:case Ev:return{byteLength:1,components:1};case Go:case Tv:case Wo:return{byteLength:2,components:1};case qd:case Yd:return{byteLength:2,components:4};case bs:case Wd:case ua:return{byteLength:4,components:1};case bv:case Av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function dE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,_);else{g.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<g.length;y++){const E=g[x],b=g[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,g[x]=b)}g.length=x+1;for(let y=0,E=g.length;y<E;y++){const b=g[y];r.bufferSubData(p,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,EE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jE="gl_FragColor = linearToOutputTexel( gl_FragColor );",XE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ST=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,MT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:_E,alphatest_fragment:vE,alphatest_pars_fragment:xE,aomap_fragment:yE,aomap_pars_fragment:SE,batching_pars_vertex:ME,batching_vertex:EE,begin_vertex:TE,beginnormal_vertex:bE,bsdfs:AE,iridescence_fragment:RE,bumpmap_pars_fragment:CE,clipping_planes_fragment:wE,clipping_planes_pars_fragment:DE,clipping_planes_pars_vertex:UE,clipping_planes_vertex:LE,color_fragment:NE,color_pars_fragment:OE,color_pars_vertex:PE,color_vertex:zE,common:IE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:FE,displacementmap_pars_vertex:HE,displacementmap_vertex:GE,emissivemap_fragment:VE,emissivemap_pars_fragment:kE,colorspace_fragment:jE,colorspace_pars_fragment:XE,envmap_fragment:WE,envmap_common_pars_fragment:qE,envmap_pars_fragment:YE,envmap_pars_vertex:ZE,envmap_physical_pars_fragment:r1,envmap_vertex:KE,fog_vertex:QE,fog_pars_vertex:JE,fog_fragment:$E,fog_pars_fragment:t1,gradientmap_pars_fragment:e1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:a1,lights_pars_begin:s1,lights_toon_fragment:o1,lights_toon_pars_fragment:l1,lights_phong_fragment:c1,lights_phong_pars_fragment:u1,lights_physical_fragment:f1,lights_physical_pars_fragment:h1,lights_fragment_begin:d1,lights_fragment_maps:p1,lights_fragment_end:m1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:_1,logdepthbuf_pars_vertex:v1,logdepthbuf_vertex:x1,map_fragment:y1,map_pars_fragment:S1,map_particle_fragment:M1,map_particle_pars_fragment:E1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:b1,morphinstance_vertex:A1,morphcolor_vertex:R1,morphnormal_vertex:C1,morphtarget_pars_vertex:w1,morphtarget_vertex:D1,normal_fragment_begin:U1,normal_fragment_maps:L1,normal_pars_fragment:N1,normal_pars_vertex:O1,normal_vertex:P1,normalmap_pars_fragment:z1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:H1,opaque_fragment:G1,packing:V1,premultiplied_alpha_fragment:k1,project_vertex:j1,dithering_fragment:X1,dithering_pars_fragment:W1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:K1,shadowmap_vertex:Q1,shadowmask_pars_fragment:J1,skinbase_vertex:$1,skinning_pars_vertex:tT,skinning_vertex:eT,skinnormal_vertex:nT,specularmap_fragment:iT,specularmap_pars_fragment:aT,tonemapping_fragment:sT,tonemapping_pars_fragment:rT,transmission_fragment:oT,transmission_pars_fragment:lT,uv_pars_fragment:cT,uv_pars_vertex:uT,uv_vertex:fT,worldpos_vertex:hT,background_vert:dT,background_frag:pT,backgroundCube_vert:mT,backgroundCube_frag:gT,cube_vert:_T,cube_frag:vT,depth_vert:xT,depth_frag:yT,distanceRGBA_vert:ST,distanceRGBA_frag:MT,equirect_vert:ET,equirect_frag:TT,linedashed_vert:bT,linedashed_frag:AT,meshbasic_vert:RT,meshbasic_frag:CT,meshlambert_vert:wT,meshlambert_frag:DT,meshmatcap_vert:UT,meshmatcap_frag:LT,meshnormal_vert:NT,meshnormal_frag:OT,meshphong_vert:PT,meshphong_frag:zT,meshphysical_vert:IT,meshphysical_frag:BT,meshtoon_vert:FT,meshtoon_frag:HT,points_vert:GT,points_frag:VT,shadow_vert:kT,shadow_frag:jT,sprite_vert:XT,sprite_frag:WT},Ht={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Pi={basic:{uniforms:Bn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Bn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Bn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Bn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Bn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new _e(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Bn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Bn([Ht.points,Ht.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Bn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Bn([Ht.common,Ht.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Bn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Bn([Ht.sprite,Ht.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Bn([Ht.common,Ht.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Bn([Ht.lights,Ht.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Pi.physical={uniforms:Bn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const wc={r:0,b:0,g:0},_s=new Fi,qT=new an;function YT(r,t,i,s,l,c,h){const d=new _e(0);let m=c===!0?0:1,p,_,g=null,x=0,y=null;function E(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:t).get(w)),w}function b(N){let w=!1;const V=E(N);V===null?v(d,m):V&&V.isColor&&(v(V,1),w=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,h):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(N,w){const V=E(w);V&&(V.isCubeTexture||V.mapping===Zc)?(_===void 0&&(_=new On(new Zo(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Or(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_s.copy(w.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(qT.makeRotationFromEuler(_s)),_.material.toneMapped=Le.getTransfer(V.colorSpace)!==je,(g!==V||x!==V.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,g=V,x=V.version,y=r.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new On(new Qc(2,2),new qa({name:"BackgroundMaterial",uniforms:Or(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Le.getTransfer(V.colorSpace)!==je,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||x!==V.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,g=V,x=V.version,y=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,w){N.getRGB(wc,Fv(r)),s.buffers.color.setClear(wc.r,wc.g,wc.b,w,h)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,w=1){d.set(N),m=w,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(d,m)},render:b,addToRenderList:M,dispose:F}}function ZT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(D,k,Q,ot,ft){let st=!1;const P=g(ot,Q,k);c!==P&&(c=P,p(c.object)),st=y(D,ot,Q,ft),st&&E(D,ot,Q,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(st||h)&&(h=!1,w(D,k,Q,ot),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function _(D){return r.deleteVertexArray(D)}function g(D,k,Q){const ot=Q.wireframe===!0;let ft=s[D.id];ft===void 0&&(ft={},s[D.id]=ft);let st=ft[k.id];st===void 0&&(st={},ft[k.id]=st);let P=st[ot];return P===void 0&&(P=x(m()),st[ot]=P),P}function x(D){const k=[],Q=[],ot=[];for(let ft=0;ft<i;ft++)k[ft]=0,Q[ft]=0,ot[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:ot,object:D,attributes:{},index:null}}function y(D,k,Q,ot){const ft=c.attributes,st=k.attributes;let P=0;const Y=Q.getAttributes();for(const W in Y)if(Y[W].location>=0){const Et=ft[W];let z=st[W];if(z===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),Et===void 0||Et.attribute!==z||z&&Et.data!==z.data)return!0;P++}return c.attributesNum!==P||c.index!==ot}function E(D,k,Q,ot){const ft={},st=k.attributes;let P=0;const Y=Q.getAttributes();for(const W in Y)if(Y[W].location>=0){let Et=st[W];Et===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Et=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Et=D.instanceColor));const z={};z.attribute=Et,Et&&Et.data&&(z.data=Et.data),ft[W]=z,P++}c.attributes=ft,c.attributesNum=P,c.index=ot}function b(){const D=c.newAttributes;for(let k=0,Q=D.length;k<Q;k++)D[k]=0}function M(D){v(D,0)}function v(D,k){const Q=c.newAttributes,ot=c.enabledAttributes,ft=c.attributeDivisors;Q[D]=1,ot[D]===0&&(r.enableVertexAttribArray(D),ot[D]=1),ft[D]!==k&&(r.vertexAttribDivisor(D,k),ft[D]=k)}function F(){const D=c.newAttributes,k=c.enabledAttributes;for(let Q=0,ot=k.length;Q<ot;Q++)k[Q]!==D[Q]&&(r.disableVertexAttribArray(Q),k[Q]=0)}function N(D,k,Q,ot,ft,st,P){P===!0?r.vertexAttribIPointer(D,k,Q,ft,st):r.vertexAttribPointer(D,k,Q,ot,ft,st)}function w(D,k,Q,ot){b();const ft=ot.attributes,st=Q.getAttributes(),P=k.defaultAttributeValues;for(const Y in st){const W=st[Y];if(W.location>=0){let yt=ft[Y];if(yt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),yt!==void 0){const Et=yt.normalized,z=yt.itemSize,tt=t.get(yt);if(tt===void 0)continue;const vt=tt.buffer,Ct=tt.type,Ot=tt.bytesPerElement,nt=Ct===r.INT||Ct===r.UNSIGNED_INT||yt.gpuType===Wd;if(yt.isInterleavedBufferAttribute){const $=yt.data,Tt=$.stride,Lt=yt.offset;if($.isInstancedInterleavedBuffer){for(let Vt=0;Vt<W.locationSize;Vt++)v(W.location+Vt,$.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Vt=0;Vt<W.locationSize;Vt++)M(W.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let Vt=0;Vt<W.locationSize;Vt++)N(W.location+Vt,z/W.locationSize,Ct,Et,Tt*Ot,(Lt+z/W.locationSize*Vt)*Ot,nt)}else{if(yt.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)v(W.location+$,yt.meshPerAttribute);D.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let $=0;$<W.locationSize;$++)M(W.location+$);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let $=0;$<W.locationSize;$++)N(W.location+$,z/W.locationSize,Ct,Et,z*Ot,z/W.locationSize*$*Ot,nt)}}else if(P!==void 0){const Et=P[Y];if(Et!==void 0)switch(Et.length){case 2:r.vertexAttrib2fv(W.location,Et);break;case 3:r.vertexAttrib3fv(W.location,Et);break;case 4:r.vertexAttrib4fv(W.location,Et);break;default:r.vertexAttrib1fv(W.location,Et)}}}}F()}function V(){X();for(const D in s){const k=s[D];for(const Q in k){const ot=k[Q];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete k[Q]}delete s[D]}}function O(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const Q in k){const ot=k[Q];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete k[Q]}delete s[D.id]}function B(D){for(const k in s){const Q=s[k];if(Q[D.id]===void 0)continue;const ot=Q[D.id];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete Q[D.id]}}function X(){L(),h=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:L,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:M,disableUnusedAttributes:F}}function KT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let y=0;for(let E=0;E<g;E++)y+=_[E];i.update(y,s,1)}function m(p,_,g,x){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],_[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,x,0,g);let E=0;for(let b=0;b<g;b++)E+=_[b]*x[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function QT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Ri&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const X=B===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Bi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ua&&!X)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:V,maxSamples:O}}function JT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Va,d=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||s!==0||l;return l=x,s=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,y){const E=g.clippingPlanes,b=g.clipIntersection,M=g.clipShadows,v=r.get(g);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const F=c?0:s,N=F*4;let w=v.clippingState||null;m.value=w,w=_(E,x,N,y);for(let V=0;V!==N;++V)w[V]=i[V];v.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,x,y,E){const b=g!==null?g.length:0;let M=null;if(b!==0){if(M=m.value,E!==!0||M===null){const v=y+b*4,F=x.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<v)&&(M=new Float32Array(v));for(let N=0,w=y;N!==b;++N,w+=4)h.copy(g[N]).applyMatrix4(F,d),h.normal.toArray(M,w),M[w+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function $T(r){let t=new WeakMap;function i(h,d){return d===cd?h.mapping=Ur:d===ud&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===cd||d===ud)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new KM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Ar=4,O0=[.125,.215,.35,.446,.526,.582],Ms=20,Gh=new Wv,P0=new _e;let Vh=null,kh=0,jh=0,Xh=!1;const xs=(1+Math.sqrt(5))/2,Tr=1/xs,z0=[new J(-xs,Tr,0),new J(xs,Tr,0),new J(-Tr,0,xs),new J(Tr,0,xs),new J(0,xs,-Tr),new J(0,xs,Tr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],tb=new J;class I0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=tb}=c;Vh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vh,kh,jh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,Dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ur||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:Wo,format:Ri,colorSpace:Nr,depthBuffer:!1},l=B0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eb(c)),this._blurMaterial=nb(c,t,i)}return l}_compileMaterial(t){const i=new On(this._lodPlanes[0],t);this._renderer.compile(i,Gh)}_sceneToCubeUV(t,i,s,l,c){const m=new _i(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(P0),g.toneMapping=Xa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const b=new Ho({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new On(new Zo,b);let v=!1;const F=t.background;F?F.isColor&&(b.color.copy(F),t.background=null,v=!0):(b.color.copy(P0),v=!0);for(let N=0;N<6;N++){const w=N%3;w===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):w===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const V=this._cubeSize;Dc(l,w*V,N>2?V:0,V,V),g.setRenderTarget(l),v&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=x,t.background=F}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ur||t.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=H0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new On(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Dc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Gh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=z0[(l-c-1)%z0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new On(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ms-1),b=c/E,M=isFinite(c)?1+Math.floor(_*b):Ms;M>Ms&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ms}`);const v=[];let F=0;for(let B=0;B<Ms;++B){const X=B/b,L=Math.exp(-X*X/2);v.push(L),B===0?F+=L:B<M&&(F+=2*L)}for(let B=0;B<v.length;B++)v[B]=v[B]/F;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-s;const w=this._sizeLods[l],V=3*w*(l>N-Ar?l-N+Ar:0),O=4*(this._cubeSize-w);Dc(i,V,O,3*w,2*w),m.setRenderTarget(i),m.render(g,Gh)}}function eb(r){const t=[],i=[],s=[];let l=r;const c=r-Ar+1+O0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Ar?m=O0[h-r+Ar-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,E=6,b=3,M=2,v=1,F=new Float32Array(b*E*y),N=new Float32Array(M*E*y),w=new Float32Array(v*E*y);for(let O=0;O<y;O++){const B=O%3*2/3-1,X=O>2?0:-1,L=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];F.set(L,b*E*O),N.set(x,M*E*O);const D=[O,O,O,O,O,O];w.set(D,v*E*O)}const V=new Fn;V.setAttribute("position",new vi(F,b)),V.setAttribute("uv",new vi(N,M)),V.setAttribute("faceIndex",new vi(w,v)),t.push(V),l>Ar&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function B0(r,t,i){const s=new Rs(r,t,i);return s.texture.mapping=Zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function nb(r,t,i){const s=new Float32Array(Ms),l=new J(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function F0(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function H0(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ib(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===cd||m===ud,_=m===Ur||m===Lr;if(p||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new I0(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new I0(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function ab(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function sb(r,t,i,s){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,E=g.attributes.position;let b=0;if(y!==null){const F=y.array;b=y.version;for(let N=0,w=F.length;N<w;N+=3){const V=F[N+0],O=F[N+1],B=F[N+2];x.push(V,O,O,B,B,V)}}else if(E!==void 0){const F=E.array;b=E.version;for(let N=0,w=F.length/3-1;N<w;N+=3){const V=N+0,O=N+1,B=N+2;x.push(V,O,O,B,B,V)}}else return;const M=new(Nv(x)?Bv:Iv)(x,1);M.version=b;const v=c.get(g);v&&t.remove(v),c.set(g,M)}function _(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function rb(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){r.drawElements(s,y,c,x*h),i.update(y,s,1)}function p(x,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,x*h,E),i.update(y,s,E))}function _(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,E);let M=0;for(let v=0;v<E;v++)M+=y[v];i.update(M,s,1)}function g(x,y,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/h,y[v],b[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,b,0,E);let v=0;for(let F=0;F<E;F++)v+=y[F]*b[F];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function ob(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function lb(r,t,i){const s=new WeakMap,l=new nn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let L=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();const y=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let N=0;y===!0&&(N=1),E===!0&&(N=2),b===!0&&(N=3);let w=d.attributes.position.count*N,V=1;w>t.maxTextureSize&&(V=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const O=new Float32Array(w*V*4*g),B=new Ov(O,w,V,g);B.type=ua,B.needsUpdate=!0;const X=N*4;for(let D=0;D<g;D++){const k=M[D],Q=v[D],ot=F[D],ft=w*V*4*D;for(let st=0;st<k.count;st++){const P=st*X;y===!0&&(l.fromBufferAttribute(k,st),O[ft+P+0]=l.x,O[ft+P+1]=l.y,O[ft+P+2]=l.z,O[ft+P+3]=0),E===!0&&(l.fromBufferAttribute(Q,st),O[ft+P+4]=l.x,O[ft+P+5]=l.y,O[ft+P+6]=l.z,O[ft+P+7]=0),b===!0&&(l.fromBufferAttribute(ot,st),O[ft+P+8]=l.x,O[ft+P+9]=l.y,O[ft+P+10]=l.z,O[ft+P+11]=ot.itemSize===4?l.w:1)}}x={count:g,texture:B,size:new fe(w,V)},s.set(d,x),d.addEventListener("dispose",L)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let y=0;for(let b=0;b<p.length;b++)y+=p[b];const E=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function cb(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Yv=new Zn,G0=new kv(1,1),Zv=new Ov,Kv=new NM,Qv=new Gv,V0=[],k0=[],j0=new Float32Array(16),X0=new Float32Array(9),W0=new Float32Array(4);function Ir(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=V0[l];if(c===void 0&&(c=new Float32Array(l),V0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Jc(r,t){let i=k0[t];i===void 0&&(i=new Int32Array(t),k0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function ub(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function fb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function hb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function db(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function pb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;W0.set(s),r.uniformMatrix2fv(this.addr,!1,W0),vn(i,s)}}function mb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;X0.set(s),r.uniformMatrix3fv(this.addr,!1,X0),vn(i,s)}}function gb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;j0.set(s),r.uniformMatrix4fv(this.addr,!1,j0),vn(i,s)}}function _b(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function vb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function yb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function Sb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Mb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function Eb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function Tb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function bb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(G0.compareFunction=Lv,c=G0):c=Yv,i.setTexture2D(t||c,l)}function Ab(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Kv,l)}function Rb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Qv,l)}function Cb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Zv,l)}function wb(r){switch(r){case 5126:return ub;case 35664:return fb;case 35665:return hb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return vb;case 35668:case 35672:return xb;case 35669:case 35673:return yb;case 5125:return Sb;case 36294:return Mb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Cb}}function Db(r,t){r.uniform1fv(this.addr,t)}function Ub(r,t){const i=Ir(t,this.size,2);r.uniform2fv(this.addr,i)}function Lb(r,t){const i=Ir(t,this.size,3);r.uniform3fv(this.addr,i)}function Nb(r,t){const i=Ir(t,this.size,4);r.uniform4fv(this.addr,i)}function Ob(r,t){const i=Ir(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Pb(r,t){const i=Ir(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function zb(r,t){const i=Ir(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Ib(r,t){r.uniform1iv(this.addr,t)}function Bb(r,t){r.uniform2iv(this.addr,t)}function Fb(r,t){r.uniform3iv(this.addr,t)}function Hb(r,t){r.uniform4iv(this.addr,t)}function Gb(r,t){r.uniform1uiv(this.addr,t)}function Vb(r,t){r.uniform2uiv(this.addr,t)}function kb(r,t){r.uniform3uiv(this.addr,t)}function jb(r,t){r.uniform4uiv(this.addr,t)}function Xb(r,t,i){const s=this.cache,l=t.length,c=Jc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Yv,c[h])}function Wb(r,t,i){const s=this.cache,l=t.length,c=Jc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Kv,c[h])}function qb(r,t,i){const s=this.cache,l=t.length,c=Jc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Qv,c[h])}function Yb(r,t,i){const s=this.cache,l=t.length,c=Jc(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Zv,c[h])}function Zb(r){switch(r){case 5126:return Db;case 35664:return Ub;case 35665:return Lb;case 35666:return Nb;case 35674:return Ob;case 35675:return Pb;case 35676:return zb;case 5124:case 35670:return Ib;case 35667:case 35671:return Bb;case 35668:case 35672:return Fb;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return Vb;case 36295:return kb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Yb}}class Kb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=wb(i.type)}}class Qb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Zb(i.type)}}class Jb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function q0(r,t){r.seq.push(t),r.map[t.id]=t}function $b(r,t,i){const s=r.name,l=s.length;for(Wh.lastIndex=0;;){const c=Wh.exec(s),h=Wh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){q0(i,p===void 0?new Kb(d,r,t):new Qb(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new Jb(d),q0(i,g)),i=g}}}class Hc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);$b(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Y0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const tA=37297;let eA=0;function nA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Z0=new me;function iA(r){Le._getMatrix(Z0,Le.workingColorSpace,r);const t=`mat3( ${Z0.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case Gc:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function K0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+nA(r.getShaderSource(t),d)}else return c}function aA(r,t){const i=iA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function sA(r,t){let i;switch(t){case rM:i="Linear";break;case oM:i="Reinhard";break;case lM:i="Cineon";break;case cM:i="ACESFilmic";break;case fM:i="AgX";break;case hM:i="Neutral";break;case uM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new J;function rA(){Le.getLuminanceCoefficients(Uc);const r=Uc.x.toFixed(4),t=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function lA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function cA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Fo(r){return r!==""}function Q0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function J0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(r){return r.replace(uA,hA)}const fA=new Map;function hA(r,t){let i=ge[t];if(i===void 0){const s=fA.get(t);if(s!==void 0)i=ge[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Vd(i)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $0(r){return r.replace(dA,pA)}function pA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function tv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===FS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function gA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ur:case Lr:t="ENVMAP_TYPE_CUBE";break;case Zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _A(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function vA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sv:t="ENVMAP_BLENDING_MULTIPLY";break;case aM:t="ENVMAP_BLENDING_MIX";break;case sM:t="ENVMAP_BLENDING_ADD";break}return t}function xA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function yA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=mA(i),p=gA(i),_=_A(i),g=vA(i),x=xA(i),y=oA(i),E=lA(c),b=l.createProgram();let M,v,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fo).join(`
`),v.length>0&&(v+=`
`)):(M=[tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),v=[tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?ge.tonemapping_pars_fragment:"",i.toneMapping!==Xa?sA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,aA("linearToOutputTexel",i.outputColorSpace),rA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fo).join(`
`)),h=Vd(h),h=Q0(h,i),h=J0(h,i),d=Vd(d),d=Q0(d,i),d=J0(d,i),h=$0(h),d=$0(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===l0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=F+M+h,w=F+v+d,V=Y0(l,l.VERTEX_SHADER,N),O=Y0(l,l.FRAGMENT_SHADER,w);l.attachShader(b,V),l.attachShader(b,O),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function B(k){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(b)||"",ot=l.getShaderInfoLog(V)||"",ft=l.getShaderInfoLog(O)||"",st=Q.trim(),P=ot.trim(),Y=ft.trim();let W=!0,yt=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,V,O);else{const Et=K0(l,V,"vertex"),z=K0(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+st+`
`+Et+`
`+z)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(P===""||Y==="")&&(yt=!1);yt&&(k.diagnostics={runnable:W,programLog:st,vertexShader:{log:P,prefix:M},fragmentShader:{log:Y,prefix:v}})}l.deleteShader(V),l.deleteShader(O),X=new Hc(l,b),L=cA(l,b)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(b,tA)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=eA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=V,this.fragmentShader=O,this}let SA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new EA(t),i.set(t,s)),s}}class EA{constructor(t){this.id=SA++,this.code=t,this.usedTimes=0}}function TA(r,t,i,s,l,c,h){const d=new Pv,m=new MA,p=new Set,_=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(L){return p.add(L),L===0?"uv":`uv${L}`}function M(L,D,k,Q,ot){const ft=Q.fog,st=ot.geometry,P=L.isMeshStandardMaterial?Q.environment:null,Y=(L.isMeshStandardMaterial?i:t).get(L.envMap||P),W=Y&&Y.mapping===Zc?Y.image.height:null,yt=E[L.type];L.precision!==null&&(y=l.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const Et=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,z=Et!==void 0?Et.length:0;let tt=0;st.morphAttributes.position!==void 0&&(tt=1),st.morphAttributes.normal!==void 0&&(tt=2),st.morphAttributes.color!==void 0&&(tt=3);let vt,Ct,Ot,nt;if(yt){const Ce=Pi[yt];vt=Ce.vertexShader,Ct=Ce.fragmentShader}else vt=L.vertexShader,Ct=L.fragmentShader,m.update(L),Ot=m.getVertexShaderID(L),nt=m.getFragmentShaderID(L);const $=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),Lt=ot.isInstancedMesh===!0,Vt=ot.isBatchedMesh===!0,le=!!L.map,se=!!L.matcap,H=!!Y,xe=!!L.aoMap,Qt=!!L.lightMap,zt=!!L.bumpMap,Dt=!!L.normalMap,Zt=!!L.displacementMap,bt=!!L.emissiveMap,Xt=!!L.metalnessMap,He=!!L.roughnessMap,ze=L.anisotropy>0,I=L.clearcoat>0,T=L.dispersion>0,et=L.iridescence>0,pt=L.sheen>0,At=L.transmission>0,dt=ze&&!!L.anisotropyMap,te=I&&!!L.clearcoatMap,Pt=I&&!!L.clearcoatNormalMap,Kt=I&&!!L.clearcoatRoughnessMap,Jt=et&&!!L.iridescenceMap,wt=et&&!!L.iridescenceThicknessMap,Nt=pt&&!!L.sheenColorMap,kt=pt&&!!L.sheenRoughnessMap,It=!!L.specularMap,Bt=!!L.specularColorMap,ce=!!L.specularIntensityMap,R=At&&!!L.transmissionMap,ct=At&&!!L.thicknessMap,Rt=!!L.gradientMap,Ut=!!L.alphaMap,xt=L.alphaTest>0,gt=!!L.alphaHash,jt=!!L.extensions;let ue=Xa;L.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ue=r.toneMapping);const Ie={shaderID:yt,shaderType:L.type,shaderName:L.name,vertexShader:vt,fragmentShader:Ct,defines:L.defines,customVertexShaderID:Ot,customFragmentShaderID:nt,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Vt,batchingColor:Vt&&ot._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&ot.instanceColor!==null,instancingMorph:Lt&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Nr,alphaToCoverage:!!L.alphaToCoverage,map:le,matcap:se,envMap:H,envMapMode:H&&Y.mapping,envMapCubeUVHeight:W,aoMap:xe,lightMap:Qt,bumpMap:zt,normalMap:Dt,displacementMap:x&&Zt,emissiveMap:bt,normalMapObjectSpace:Dt&&L.normalMapType===gM,normalMapTangentSpace:Dt&&L.normalMapType===Uv,metalnessMap:Xt,roughnessMap:He,anisotropy:ze,anisotropyMap:dt,clearcoat:I,clearcoatMap:te,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Kt,dispersion:T,iridescence:et,iridescenceMap:Jt,iridescenceThicknessMap:wt,sheen:pt,sheenColorMap:Nt,sheenRoughnessMap:kt,specularMap:It,specularColorMap:Bt,specularIntensityMap:ce,transmission:At,transmissionMap:R,thicknessMap:ct,gradientMap:Rt,opaque:L.transparent===!1&&L.blending===Cr&&L.alphaToCoverage===!1,alphaMap:Ut,alphaTest:xt,alphaHash:gt,combine:L.combine,mapUv:le&&b(L.map.channel),aoMapUv:xe&&b(L.aoMap.channel),lightMapUv:Qt&&b(L.lightMap.channel),bumpMapUv:zt&&b(L.bumpMap.channel),normalMapUv:Dt&&b(L.normalMap.channel),displacementMapUv:Zt&&b(L.displacementMap.channel),emissiveMapUv:bt&&b(L.emissiveMap.channel),metalnessMapUv:Xt&&b(L.metalnessMap.channel),roughnessMapUv:He&&b(L.roughnessMap.channel),anisotropyMapUv:dt&&b(L.anisotropyMap.channel),clearcoatMapUv:te&&b(L.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&b(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&b(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&b(L.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&b(L.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&b(L.sheenColorMap.channel),sheenRoughnessMapUv:kt&&b(L.sheenRoughnessMap.channel),specularMapUv:It&&b(L.specularMap.channel),specularColorMapUv:Bt&&b(L.specularColorMap.channel),specularIntensityMapUv:ce&&b(L.specularIntensityMap.channel),transmissionMapUv:R&&b(L.transmissionMap.channel),thicknessMapUv:ct&&b(L.thicknessMap.channel),alphaMapUv:Ut&&b(L.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Dt||ze),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!st.attributes.uv&&(le||Ut),fog:!!ft,useFog:L.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Tt,skinning:ot.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:tt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:le&&L.map.isVideoTexture===!0&&Le.getTransfer(L.map.colorSpace)===je,decodeVideoTextureEmissive:bt&&L.emissiveMap.isVideoTexture===!0&&Le.getTransfer(L.emissiveMap.colorSpace)===je,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===bi,flipSided:L.side===Yn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:jt&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&L.extensions.multiDraw===!0||Vt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function v(L){const D=[];if(L.shaderID?D.push(L.shaderID):(D.push(L.customVertexShaderID),D.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)D.push(k),D.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(F(D,L),N(D,L),D.push(r.outputColorSpace)),D.push(L.customProgramCacheKey),D.join()}function F(L,D){L.push(D.precision),L.push(D.outputColorSpace),L.push(D.envMapMode),L.push(D.envMapCubeUVHeight),L.push(D.mapUv),L.push(D.alphaMapUv),L.push(D.lightMapUv),L.push(D.aoMapUv),L.push(D.bumpMapUv),L.push(D.normalMapUv),L.push(D.displacementMapUv),L.push(D.emissiveMapUv),L.push(D.metalnessMapUv),L.push(D.roughnessMapUv),L.push(D.anisotropyMapUv),L.push(D.clearcoatMapUv),L.push(D.clearcoatNormalMapUv),L.push(D.clearcoatRoughnessMapUv),L.push(D.iridescenceMapUv),L.push(D.iridescenceThicknessMapUv),L.push(D.sheenColorMapUv),L.push(D.sheenRoughnessMapUv),L.push(D.specularMapUv),L.push(D.specularColorMapUv),L.push(D.specularIntensityMapUv),L.push(D.transmissionMapUv),L.push(D.thicknessMapUv),L.push(D.combine),L.push(D.fogExp2),L.push(D.sizeAttenuation),L.push(D.morphTargetsCount),L.push(D.morphAttributeCount),L.push(D.numDirLights),L.push(D.numPointLights),L.push(D.numSpotLights),L.push(D.numSpotLightMaps),L.push(D.numHemiLights),L.push(D.numRectAreaLights),L.push(D.numDirLightShadows),L.push(D.numPointLightShadows),L.push(D.numSpotLightShadows),L.push(D.numSpotLightShadowsWithMaps),L.push(D.numLightProbes),L.push(D.shadowMapType),L.push(D.toneMapping),L.push(D.numClippingPlanes),L.push(D.numClipIntersection),L.push(D.depthPacking)}function N(L,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),L.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),L.push(d.mask)}function w(L){const D=E[L.type];let k;if(D){const Q=Pi[D];k=WM.clone(Q.uniforms)}else k=L.uniforms;return k}function V(L,D){let k;for(let Q=0,ot=_.length;Q<ot;Q++){const ft=_[Q];if(ft.cacheKey===D){k=ft,++k.usedTimes;break}}return k===void 0&&(k=new yA(r,D,L,c),_.push(k)),k}function O(L){if(--L.usedTimes===0){const D=_.indexOf(L);_[D]=_[_.length-1],_.pop(),L.destroy()}}function B(L){m.remove(L)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:w,acquireProgram:V,releaseProgram:O,releaseShaderCache:B,programs:_,dispose:X}}function bA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function AA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ev(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function nv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,x,y,E,b,M){let v=r[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:y,groupOrder:E,renderOrder:g.renderOrder,z:b,group:M},r[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=b,v.group=M),t++,v}function d(g,x,y,E,b,M){const v=h(g,x,y,E,b,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,x,y,E,b,M){const v=h(g,x,y,E,b,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,x){i.length>1&&i.sort(g||AA),s.length>1&&s.sort(x||ev),l.length>1&&l.sort(x||ev)}function _(){for(let g=t,x=r.length;g<x;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function RA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new nv,r.set(s,[h])):l>=c.length?(h=new nv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function CA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new _e};break;case"SpotLight":i={position:new J,direction:new J,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new _e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":i={color:new _e,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function wA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let DA=0;function UA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function LA(r){const t=new CA,i=wA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new an,h=new an;function d(p){let _=0,g=0,x=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let y=0,E=0,b=0,M=0,v=0,F=0,N=0,w=0,V=0,O=0,B=0;p.sort(UA);for(let L=0,D=p.length;L<D;L++){const k=p[L],Q=k.color,ot=k.intensity,ft=k.distance,st=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=Q.r*ot,g+=Q.g*ot,x+=Q.b*ot;else if(k.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(k.sh.coefficients[P],ot);B++}else if(k.isDirectionalLight){const P=t.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,W=i.get(k);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,s.directionalShadow[y]=W,s.directionalShadowMap[y]=st,s.directionalShadowMatrix[y]=k.shadow.matrix,F++}s.directional[y]=P,y++}else if(k.isSpotLight){const P=t.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(Q).multiplyScalar(ot),P.distance=ft,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,s.spot[b]=P;const Y=k.shadow;if(k.map&&(s.spotLightMap[V]=k.map,V++,Y.updateMatrices(k),k.castShadow&&O++),s.spotLightMatrix[b]=Y.matrix,k.castShadow){const W=i.get(k);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,s.spotShadow[b]=W,s.spotShadowMap[b]=st,w++}b++}else if(k.isRectAreaLight){const P=t.get(k);P.color.copy(Q).multiplyScalar(ot),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=P,M++}else if(k.isPointLight){const P=t.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){const Y=k.shadow,W=i.get(k);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,s.pointShadow[E]=W,s.pointShadowMap[E]=st,s.pointShadowMatrix[E]=k.shadow.matrix,N++}s.point[E]=P,E++}else if(k.isHemisphereLight){const P=t.get(k);P.skyColor.copy(k.color).multiplyScalar(ot),P.groundColor.copy(k.groundColor).multiplyScalar(ot),s.hemi[v]=P,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==b||X.rectAreaLength!==M||X.hemiLength!==v||X.numDirectionalShadows!==F||X.numPointShadows!==N||X.numSpotShadows!==w||X.numSpotMaps!==V||X.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=w+V-O,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=B,X.directionalLength=y,X.pointLength=E,X.spotLength=b,X.rectAreaLength=M,X.hemiLength=v,X.numDirectionalShadows=F,X.numPointShadows=N,X.numSpotShadows=w,X.numSpotMaps=V,X.numLightProbes=B,s.version=DA++)}function m(p,_){let g=0,x=0,y=0,E=0,b=0;const M=_.matrixWorldInverse;for(let v=0,F=p.length;v<F;v++){const N=p[v];if(N.isDirectionalLight){const w=s.directional[g];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),g++}else if(N.isSpotLight){const w=s.spot[y];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const w=s.hemi[b];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(M),b++}}}return{setup:d,setupView:m,state:s}}function iv(r){const t=new LA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function NA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new iv(r),t.set(l,[d])):c>=h.length?(d=new iv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const OA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zA(r,t,i){let s=new ep;const l=new fe,c=new fe,h=new nn,d=new iE({depthPacking:mM}),m=new aE,p={},_=i.maxTextureSize,g={[Wa]:Yn,[Yn]:Wa,[bi]:bi},x=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:OA,fragmentShader:PA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Fn;E.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new On(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yv;let v=this.type;this.render=function(O,B,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;const L=r.getRenderTarget(),D=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(ja),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ot=v!==ca&&this.type===ca,ft=v===ca&&this.type!==ca;for(let st=0,P=O.length;st<P;st++){const Y=O[st],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const yt=W.getFrameExtents();if(l.multiply(yt),c.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/yt.x),l.x=c.x*yt.x,W.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/yt.y),l.y=c.y*yt.y,W.mapSize.y=c.y)),W.map===null||ot===!0||ft===!0){const z=this.type!==ca?{minFilter:Ci,magFilter:Ci}:{};W.map!==null&&W.map.dispose(),W.map=new Rs(l.x,l.y,z),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const Et=W.getViewportCount();for(let z=0;z<Et;z++){const tt=W.getViewport(z);h.set(c.x*tt.x,c.y*tt.y,c.x*tt.z,c.y*tt.w),Q.viewport(h),W.updateMatrices(Y,z),s=W.getFrustum(),w(B,X,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===ca&&F(W,X),W.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(L,D,k)};function F(O,B){const X=t.update(b);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Rs(l.x,l.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(B,null,X,x,b,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(B,null,X,y,b,null)}function N(O,B,X,L){let D=null;const k=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)D=k;else if(D=X.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Q=D.uuid,ot=B.uuid;let ft=p[Q];ft===void 0&&(ft={},p[Q]=ft);let st=ft[ot];st===void 0&&(st=D.clone(),ft[ot]=st,B.addEventListener("dispose",V)),D=st}if(D.visible=B.visible,D.wireframe=B.wireframe,L===ca?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:g[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,X.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Q=r.properties.get(D);Q.light=X}return D}function w(O,B,X,L,D){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===ca)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const ot=t.update(O),ft=O.material;if(Array.isArray(ft)){const st=ot.groups;for(let P=0,Y=st.length;P<Y;P++){const W=st[P],yt=ft[W.materialIndex];if(yt&&yt.visible){const Et=N(O,yt,L,D);O.onBeforeShadow(r,O,B,X,ot,Et,W),r.renderBufferDirect(X,null,ot,Et,O,W),O.onAfterShadow(r,O,B,X,ot,Et,W)}}}else if(ft.visible){const st=N(O,ft,L,D);O.onBeforeShadow(r,O,B,X,ot,st,null),r.renderBufferDirect(X,null,ot,st,O,null),O.onAfterShadow(r,O,B,X,ot,st,null)}}const Q=O.children;for(let ot=0,ft=Q.length;ot<ft;ot++)w(Q[ot],B,X,L,D)}function V(O){O.target.removeEventListener("dispose",V);for(const X in p){const L=p[X],D=O.target.uuid;D in L&&(L[D].dispose(),delete L[D])}}}const IA={[nd]:id,[ad]:od,[sd]:ld,[Dr]:rd,[id]:nd,[od]:ad,[ld]:sd,[rd]:Dr};function BA(r,t){function i(){let R=!1;const ct=new nn;let Rt=null;const Ut=new nn(0,0,0,0);return{setMask:function(xt){Rt!==xt&&!R&&(r.colorMask(xt,xt,xt,xt),Rt=xt)},setLocked:function(xt){R=xt},setClear:function(xt,gt,jt,ue,Ie){Ie===!0&&(xt*=ue,gt*=ue,jt*=ue),ct.set(xt,gt,jt,ue),Ut.equals(ct)===!1&&(r.clearColor(xt,gt,jt,ue),Ut.copy(ct))},reset:function(){R=!1,Rt=null,Ut.set(-1,0,0,0)}}}function s(){let R=!1,ct=!1,Rt=null,Ut=null,xt=null;return{setReversed:function(gt){if(ct!==gt){const jt=t.get("EXT_clip_control");gt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),ct=gt;const ue=xt;xt=null,this.setClear(ue)}},getReversed:function(){return ct},setTest:function(gt){gt?$(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(gt){Rt!==gt&&!R&&(r.depthMask(gt),Rt=gt)},setFunc:function(gt){if(ct&&(gt=IA[gt]),Ut!==gt){switch(gt){case nd:r.depthFunc(r.NEVER);break;case id:r.depthFunc(r.ALWAYS);break;case ad:r.depthFunc(r.LESS);break;case Dr:r.depthFunc(r.LEQUAL);break;case sd:r.depthFunc(r.EQUAL);break;case rd:r.depthFunc(r.GEQUAL);break;case od:r.depthFunc(r.GREATER);break;case ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ut=gt}},setLocked:function(gt){R=gt},setClear:function(gt){xt!==gt&&(ct&&(gt=1-gt),r.clearDepth(gt),xt=gt)},reset:function(){R=!1,Rt=null,Ut=null,xt=null,ct=!1}}}function l(){let R=!1,ct=null,Rt=null,Ut=null,xt=null,gt=null,jt=null,ue=null,Ie=null;return{setTest:function(Ce){R||(Ce?$(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(Ce){ct!==Ce&&!R&&(r.stencilMask(Ce),ct=Ce)},setFunc:function(Ce,Pn,ri){(Rt!==Ce||Ut!==Pn||xt!==ri)&&(r.stencilFunc(Ce,Pn,ri),Rt=Ce,Ut=Pn,xt=ri)},setOp:function(Ce,Pn,ri){(gt!==Ce||jt!==Pn||ue!==ri)&&(r.stencilOp(Ce,Pn,ri),gt=Ce,jt=Pn,ue=ri)},setLocked:function(Ce){R=Ce},setClear:function(Ce){Ie!==Ce&&(r.clearStencil(Ce),Ie=Ce)},reset:function(){R=!1,ct=null,Rt=null,Ut=null,xt=null,gt=null,jt=null,ue=null,Ie=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,y=[],E=null,b=!1,M=null,v=null,F=null,N=null,w=null,V=null,O=null,B=new _e(0,0,0),X=0,L=!1,D=null,k=null,Q=null,ot=null,ft=null;const st=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Y=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=Y>=2);let yt=null,Et={};const z=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),vt=new nn().fromArray(z),Ct=new nn().fromArray(tt);function Ot(R,ct,Rt,Ut){const xt=new Uint8Array(4),gt=r.createTexture();r.bindTexture(R,gt),r.texParameteri(R,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(R,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let jt=0;jt<Rt;jt++)R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,Ut,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(ct+jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return gt}const nt={};nt[r.TEXTURE_2D]=Ot(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),$(r.DEPTH_TEST),h.setFunc(Dr),zt(!1),Dt(n0),$(r.CULL_FACE),xe(ja);function $(R){_[R]!==!0&&(r.enable(R),_[R]=!0)}function Tt(R){_[R]!==!1&&(r.disable(R),_[R]=!1)}function Lt(R,ct){return g[R]!==ct?(r.bindFramebuffer(R,ct),g[R]=ct,R===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=ct),R===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function Vt(R,ct){let Rt=y,Ut=!1;if(R){Rt=x.get(ct),Rt===void 0&&(Rt=[],x.set(ct,Rt));const xt=R.textures;if(Rt.length!==xt.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,jt=xt.length;gt<jt;gt++)Rt[gt]=r.COLOR_ATTACHMENT0+gt;Rt.length=xt.length,Ut=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,Ut=!0);Ut&&r.drawBuffers(Rt)}function le(R){return E!==R?(r.useProgram(R),E=R,!0):!1}const se={[Ss]:r.FUNC_ADD,[GS]:r.FUNC_SUBTRACT,[VS]:r.FUNC_REVERSE_SUBTRACT};se[kS]=r.MIN,se[jS]=r.MAX;const H={[XS]:r.ZERO,[WS]:r.ONE,[qS]:r.SRC_COLOR,[td]:r.SRC_ALPHA,[$S]:r.SRC_ALPHA_SATURATE,[QS]:r.DST_COLOR,[ZS]:r.DST_ALPHA,[YS]:r.ONE_MINUS_SRC_COLOR,[ed]:r.ONE_MINUS_SRC_ALPHA,[JS]:r.ONE_MINUS_DST_COLOR,[KS]:r.ONE_MINUS_DST_ALPHA,[tM]:r.CONSTANT_COLOR,[eM]:r.ONE_MINUS_CONSTANT_COLOR,[nM]:r.CONSTANT_ALPHA,[iM]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(R,ct,Rt,Ut,xt,gt,jt,ue,Ie,Ce){if(R===ja){b===!0&&(Tt(r.BLEND),b=!1);return}if(b===!1&&($(r.BLEND),b=!0),R!==HS){if(R!==M||Ce!==L){if((v!==Ss||w!==Ss)&&(r.blendEquation(r.FUNC_ADD),v=Ss,w=Ss),Ce)switch(R){case Cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case i0:r.blendFunc(r.ONE,r.ONE);break;case a0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case s0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case i0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case a0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}F=null,N=null,V=null,O=null,B.set(0,0,0),X=0,M=R,L=Ce}return}xt=xt||ct,gt=gt||Rt,jt=jt||Ut,(ct!==v||xt!==w)&&(r.blendEquationSeparate(se[ct],se[xt]),v=ct,w=xt),(Rt!==F||Ut!==N||gt!==V||jt!==O)&&(r.blendFuncSeparate(H[Rt],H[Ut],H[gt],H[jt]),F=Rt,N=Ut,V=gt,O=jt),(ue.equals(B)===!1||Ie!==X)&&(r.blendColor(ue.r,ue.g,ue.b,Ie),B.copy(ue),X=Ie),M=R,L=!1}function Qt(R,ct){R.side===bi?Tt(r.CULL_FACE):$(r.CULL_FACE);let Rt=R.side===Yn;ct&&(Rt=!Rt),zt(Rt),R.blending===Cr&&R.transparent===!1?xe(ja):xe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),h.setFunc(R.depthFunc),h.setTest(R.depthTest),h.setMask(R.depthWrite),c.setMask(R.colorWrite);const Ut=R.stencilWrite;d.setTest(Ut),Ut&&(d.setMask(R.stencilWriteMask),d.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),d.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),bt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(R){D!==R&&(R?r.frontFace(r.CW):r.frontFace(r.CCW),D=R)}function Dt(R){R!==IS?($(r.CULL_FACE),R!==k&&(R===n0?r.cullFace(r.BACK):R===BS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),k=R}function Zt(R){R!==Q&&(P&&r.lineWidth(R),Q=R)}function bt(R,ct,Rt){R?($(r.POLYGON_OFFSET_FILL),(ot!==ct||ft!==Rt)&&(r.polygonOffset(ct,Rt),ot=ct,ft=Rt)):Tt(r.POLYGON_OFFSET_FILL)}function Xt(R){R?$(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function He(R){R===void 0&&(R=r.TEXTURE0+st-1),yt!==R&&(r.activeTexture(R),yt=R)}function ze(R,ct,Rt){Rt===void 0&&(yt===null?Rt=r.TEXTURE0+st-1:Rt=yt);let Ut=Et[Rt];Ut===void 0&&(Ut={type:void 0,texture:void 0},Et[Rt]=Ut),(Ut.type!==R||Ut.texture!==ct)&&(yt!==Rt&&(r.activeTexture(Rt),yt=Rt),r.bindTexture(R,ct||nt[R]),Ut.type=R,Ut.texture=ct)}function I(){const R=Et[yt];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pt(){try{r.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function At(){try{r.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{r.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(){try{r.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Kt(){try{r.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Jt(){try{r.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function wt(){try{r.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Nt(R){vt.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),vt.copy(R))}function kt(R){Ct.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),Ct.copy(R))}function It(R,ct){let Rt=p.get(ct);Rt===void 0&&(Rt=new WeakMap,p.set(ct,Rt));let Ut=Rt.get(R);Ut===void 0&&(Ut=r.getUniformBlockIndex(ct,R.name),Rt.set(R,Ut))}function Bt(R,ct){const Ut=p.get(ct).get(R);m.get(ct)!==Ut&&(r.uniformBlockBinding(ct,Ut,R.__bindingPointIndex),m.set(ct,Ut))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},yt=null,Et={},g={},x=new WeakMap,y=[],E=null,b=!1,M=null,v=null,F=null,N=null,w=null,V=null,O=null,B=new _e(0,0,0),X=0,L=!1,D=null,k=null,Q=null,ot=null,ft=null,vt.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:$,disable:Tt,bindFramebuffer:Lt,drawBuffers:Vt,useProgram:le,setBlending:xe,setMaterial:Qt,setFlipSided:zt,setCullFace:Dt,setLineWidth:Zt,setPolygonOffset:bt,setScissorTest:Xt,activeTexture:He,bindTexture:ze,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:Jt,texImage3D:wt,updateUBOMapping:It,uniformBlockBinding:Bt,texStorage2D:Pt,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:te,scissor:Nt,viewport:kt,reset:ce}}function FA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new fe,_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,T){return y?new OffscreenCanvas(I,T):kc("canvas")}function b(I,T,et){let pt=1;const At=ze(I);if((At.width>et||At.height>et)&&(pt=et/Math.max(At.width,At.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const dt=Math.floor(pt*At.width),te=Math.floor(pt*At.height);g===void 0&&(g=E(dt,te));const Pt=T?E(dt,te):g;return Pt.width=dt,Pt.height=te,Pt.getContext("2d").drawImage(I,0,0,dt,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+dt+"x"+te+")."),Pt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),I;return I}function M(I){return I.generateMipmaps}function v(I){r.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(I,T,et,pt,At=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let dt=T;if(T===r.RED&&(et===r.FLOAT&&(dt=r.R32F),et===r.HALF_FLOAT&&(dt=r.R16F),et===r.UNSIGNED_BYTE&&(dt=r.R8)),T===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.R8UI),et===r.UNSIGNED_SHORT&&(dt=r.R16UI),et===r.UNSIGNED_INT&&(dt=r.R32UI),et===r.BYTE&&(dt=r.R8I),et===r.SHORT&&(dt=r.R16I),et===r.INT&&(dt=r.R32I)),T===r.RG&&(et===r.FLOAT&&(dt=r.RG32F),et===r.HALF_FLOAT&&(dt=r.RG16F),et===r.UNSIGNED_BYTE&&(dt=r.RG8)),T===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.RG8UI),et===r.UNSIGNED_SHORT&&(dt=r.RG16UI),et===r.UNSIGNED_INT&&(dt=r.RG32UI),et===r.BYTE&&(dt=r.RG8I),et===r.SHORT&&(dt=r.RG16I),et===r.INT&&(dt=r.RG32I)),T===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),et===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),et===r.UNSIGNED_INT&&(dt=r.RGB32UI),et===r.BYTE&&(dt=r.RGB8I),et===r.SHORT&&(dt=r.RGB16I),et===r.INT&&(dt=r.RGB32I)),T===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),et===r.UNSIGNED_INT&&(dt=r.RGBA32UI),et===r.BYTE&&(dt=r.RGBA8I),et===r.SHORT&&(dt=r.RGBA16I),et===r.INT&&(dt=r.RGBA32I)),T===r.RGB&&(et===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),et===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),T===r.RGBA){const te=At?Gc:Le.getTransfer(pt);et===r.FLOAT&&(dt=r.RGBA32F),et===r.HALF_FLOAT&&(dt=r.RGBA16F),et===r.UNSIGNED_BYTE&&(dt=te===je?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function w(I,T){let et;return I?T===null||T===bs||T===Vo?et=r.DEPTH24_STENCIL8:T===ua?et=r.DEPTH32F_STENCIL8:T===Go&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bs||T===Vo?et=r.DEPTH_COMPONENT24:T===ua?et=r.DEPTH_COMPONENT32F:T===Go&&(et=r.DEPTH_COMPONENT16),et}function V(I,T){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ci&&I.minFilter!==zi?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function O(I){const T=I.target;T.removeEventListener("dispose",O),X(T),T.isVideoTexture&&_.delete(T)}function B(I){const T=I.target;T.removeEventListener("dispose",B),D(T)}function X(I){const T=s.get(I);if(T.__webglInit===void 0)return;const et=I.source,pt=x.get(et);if(pt){const At=pt[T.__cacheKey];At.usedTimes--,At.usedTimes===0&&L(I),Object.keys(pt).length===0&&x.delete(et)}s.remove(I)}function L(I){const T=s.get(I);r.deleteTexture(T.__webglTexture);const et=I.source,pt=x.get(et);delete pt[T.__cacheKey],h.memory.textures--}function D(I){const T=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let At=0;At<T.__webglFramebuffer[pt].length;At++)r.deleteFramebuffer(T.__webglFramebuffer[pt][At]);else r.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)r.deleteFramebuffer(T.__webglFramebuffer[pt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=I.textures;for(let pt=0,At=et.length;pt<At;pt++){const dt=s.get(et[pt]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(et[pt])}s.remove(I)}let k=0;function Q(){k=0}function ot(){const I=k;return I>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),k+=1,I}function ft(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function st(I,T){const et=s.get(I);if(I.isVideoTexture&&Xt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&et.__version!==I.version){const pt=I.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(et,I,T);return}}else I.isExternalTexture&&(et.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+T)}function P(I,T){const et=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&et.__version!==I.version){nt(et,I,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+T)}function Y(I,T){const et=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&et.__version!==I.version){nt(et,I,T);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+T)}function W(I,T){const et=s.get(I);if(I.version>0&&et.__version!==I.version){$(et,I,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+T)}const yt={[fd]:r.REPEAT,[Es]:r.CLAMP_TO_EDGE,[hd]:r.MIRRORED_REPEAT},Et={[Ci]:r.NEAREST,[dM]:r.NEAREST_MIPMAP_NEAREST,[lc]:r.NEAREST_MIPMAP_LINEAR,[zi]:r.LINEAR,[mh]:r.LINEAR_MIPMAP_NEAREST,[Ts]:r.LINEAR_MIPMAP_LINEAR},z={[_M]:r.NEVER,[EM]:r.ALWAYS,[vM]:r.LESS,[Lv]:r.LEQUAL,[xM]:r.EQUAL,[MM]:r.GEQUAL,[yM]:r.GREATER,[SM]:r.NOTEQUAL};function tt(I,T){if(T.type===ua&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===zi||T.magFilter===mh||T.magFilter===lc||T.magFilter===Ts||T.minFilter===zi||T.minFilter===mh||T.minFilter===lc||T.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,yt[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,yt[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,yt[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Et[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ci||T.minFilter!==lc&&T.minFilter!==Ts||T.type===ua&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function vt(I,T){let et=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",O));const pt=T.source;let At=x.get(pt);At===void 0&&(At={},x.set(pt,At));const dt=ft(T);if(dt!==I.__cacheKey){At[dt]===void 0&&(At[dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,et=!0),At[dt].usedTimes++;const te=At[I.__cacheKey];te!==void 0&&(At[I.__cacheKey].usedTimes--,te.usedTimes===0&&L(T)),I.__cacheKey=dt,I.__webglTexture=At[dt].texture}return et}function Ct(I,T,et){return Math.floor(Math.floor(I/et)/T)}function Ot(I,T,et,pt){const dt=I.updateRanges;if(dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,et,pt,T.data);else{dt.sort((wt,Nt)=>wt.start-Nt.start);let te=0;for(let wt=1;wt<dt.length;wt++){const Nt=dt[te],kt=dt[wt],It=Nt.start+Nt.count,Bt=Ct(kt.start,T.width,4),ce=Ct(Nt.start,T.width,4);kt.start<=It+1&&Bt===ce&&Ct(kt.start+kt.count-1,T.width,4)===Bt?Nt.count=Math.max(Nt.count,kt.start+kt.count-Nt.start):(++te,dt[te]=kt)}dt.length=te+1;const Pt=r.getParameter(r.UNPACK_ROW_LENGTH),Kt=r.getParameter(r.UNPACK_SKIP_PIXELS),Jt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let wt=0,Nt=dt.length;wt<Nt;wt++){const kt=dt[wt],It=Math.floor(kt.start/4),Bt=Math.ceil(kt.count/4),ce=It%T.width,R=Math.floor(It/T.width),ct=Bt,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,R),i.texSubImage2D(r.TEXTURE_2D,0,ce,R,ct,Rt,et,pt,T.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Pt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Jt)}}function nt(I,T,et){let pt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=r.TEXTURE_3D);const At=vt(I,T),dt=T.source;i.bindTexture(pt,I.__webglTexture,r.TEXTURE0+et);const te=s.get(dt);if(dt.version!==te.__version||At===!0){i.activeTexture(r.TEXTURE0+et);const Pt=Le.getPrimaries(Le.workingColorSpace),Kt=T.colorSpace===ka?null:Le.getPrimaries(T.colorSpace),Jt=T.colorSpace===ka||Pt===Kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let wt=b(T.image,!1,l.maxTextureSize);wt=He(T,wt);const Nt=c.convert(T.format,T.colorSpace),kt=c.convert(T.type);let It=N(T.internalFormat,Nt,kt,T.colorSpace,T.isVideoTexture);tt(pt,T);let Bt;const ce=T.mipmaps,R=T.isVideoTexture!==!0,ct=te.__version===void 0||At===!0,Rt=dt.dataReady,Ut=V(T,wt);if(T.isDepthTexture)It=w(T.format===jo,T.type),ct&&(R?i.texStorage2D(r.TEXTURE_2D,1,It,wt.width,wt.height):i.texImage2D(r.TEXTURE_2D,0,It,wt.width,wt.height,0,Nt,kt,null));else if(T.isDataTexture)if(ce.length>0){R&&ct&&i.texStorage2D(r.TEXTURE_2D,Ut,It,ce[0].width,ce[0].height);for(let xt=0,gt=ce.length;xt<gt;xt++)Bt=ce[xt],R?Rt&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,Bt.width,Bt.height,Nt,kt,Bt.data):i.texImage2D(r.TEXTURE_2D,xt,It,Bt.width,Bt.height,0,Nt,kt,Bt.data);T.generateMipmaps=!1}else R?(ct&&i.texStorage2D(r.TEXTURE_2D,Ut,It,wt.width,wt.height),Rt&&Ot(T,wt,Nt,kt)):i.texImage2D(r.TEXTURE_2D,0,It,wt.width,wt.height,0,Nt,kt,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){R&&ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,It,ce[0].width,ce[0].height,wt.depth);for(let xt=0,gt=ce.length;xt<gt;xt++)if(Bt=ce[xt],T.format!==Ri)if(Nt!==null)if(R){if(Rt)if(T.layerUpdates.size>0){const jt=N0(Bt.width,Bt.height,T.format,T.type);for(const ue of T.layerUpdates){const Ie=Bt.data.subarray(ue*jt/Bt.data.BYTES_PER_ELEMENT,(ue+1)*jt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,ue,Bt.width,Bt.height,1,Nt,Ie)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,0,Bt.width,Bt.height,wt.depth,Nt,Bt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xt,It,Bt.width,Bt.height,wt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?Rt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,0,Bt.width,Bt.height,wt.depth,Nt,kt,Bt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,xt,It,Bt.width,Bt.height,wt.depth,0,Nt,kt,Bt.data)}else{R&&ct&&i.texStorage2D(r.TEXTURE_2D,Ut,It,ce[0].width,ce[0].height);for(let xt=0,gt=ce.length;xt<gt;xt++)Bt=ce[xt],T.format!==Ri?Nt!==null?R?Rt&&i.compressedTexSubImage2D(r.TEXTURE_2D,xt,0,0,Bt.width,Bt.height,Nt,Bt.data):i.compressedTexImage2D(r.TEXTURE_2D,xt,It,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?Rt&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,Bt.width,Bt.height,Nt,kt,Bt.data):i.texImage2D(r.TEXTURE_2D,xt,It,Bt.width,Bt.height,0,Nt,kt,Bt.data)}else if(T.isDataArrayTexture)if(R){if(ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,It,wt.width,wt.height,wt.depth),Rt)if(T.layerUpdates.size>0){const xt=N0(wt.width,wt.height,T.format,T.type);for(const gt of T.layerUpdates){const jt=wt.data.subarray(gt*xt/wt.data.BYTES_PER_ELEMENT,(gt+1)*xt/wt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,wt.width,wt.height,1,Nt,kt,jt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Nt,kt,wt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,It,wt.width,wt.height,wt.depth,0,Nt,kt,wt.data);else if(T.isData3DTexture)R?(ct&&i.texStorage3D(r.TEXTURE_3D,Ut,It,wt.width,wt.height,wt.depth),Rt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Nt,kt,wt.data)):i.texImage3D(r.TEXTURE_3D,0,It,wt.width,wt.height,wt.depth,0,Nt,kt,wt.data);else if(T.isFramebufferTexture){if(ct)if(R)i.texStorage2D(r.TEXTURE_2D,Ut,It,wt.width,wt.height);else{let xt=wt.width,gt=wt.height;for(let jt=0;jt<Ut;jt++)i.texImage2D(r.TEXTURE_2D,jt,It,xt,gt,0,Nt,kt,null),xt>>=1,gt>>=1}}else if(ce.length>0){if(R&&ct){const xt=ze(ce[0]);i.texStorage2D(r.TEXTURE_2D,Ut,It,xt.width,xt.height)}for(let xt=0,gt=ce.length;xt<gt;xt++)Bt=ce[xt],R?Rt&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,Nt,kt,Bt):i.texImage2D(r.TEXTURE_2D,xt,It,Nt,kt,Bt);T.generateMipmaps=!1}else if(R){if(ct){const xt=ze(wt);i.texStorage2D(r.TEXTURE_2D,Ut,It,xt.width,xt.height)}Rt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Nt,kt,wt)}else i.texImage2D(r.TEXTURE_2D,0,It,Nt,kt,wt);M(T)&&v(pt),te.__version=dt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function $(I,T,et){if(T.image.length!==6)return;const pt=vt(I,T),At=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+et);const dt=s.get(At);if(At.version!==dt.__version||pt===!0){i.activeTexture(r.TEXTURE0+et);const te=Le.getPrimaries(Le.workingColorSpace),Pt=T.colorSpace===ka?null:Le.getPrimaries(T.colorSpace),Kt=T.colorSpace===ka||te===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Jt=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,Nt=[];for(let gt=0;gt<6;gt++)!Jt&&!wt?Nt[gt]=b(T.image[gt],!0,l.maxCubemapSize):Nt[gt]=wt?T.image[gt].image:T.image[gt],Nt[gt]=He(T,Nt[gt]);const kt=Nt[0],It=c.convert(T.format,T.colorSpace),Bt=c.convert(T.type),ce=N(T.internalFormat,It,Bt,T.colorSpace),R=T.isVideoTexture!==!0,ct=dt.__version===void 0||pt===!0,Rt=At.dataReady;let Ut=V(T,kt);tt(r.TEXTURE_CUBE_MAP,T);let xt;if(Jt){R&&ct&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,ce,kt.width,kt.height);for(let gt=0;gt<6;gt++){xt=Nt[gt].mipmaps;for(let jt=0;jt<xt.length;jt++){const ue=xt[jt];T.format!==Ri?It!==null?R?Rt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt,0,0,ue.width,ue.height,It,ue.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt,ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt,0,0,ue.width,ue.height,It,Bt,ue.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt,ce,ue.width,ue.height,0,It,Bt,ue.data)}}}else{if(xt=T.mipmaps,R&&ct){xt.length>0&&Ut++;const gt=ze(Nt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,ce,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(wt){R?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt[gt].width,Nt[gt].height,It,Bt,Nt[gt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ce,Nt[gt].width,Nt[gt].height,0,It,Bt,Nt[gt].data);for(let jt=0;jt<xt.length;jt++){const Ie=xt[jt].image[gt].image;R?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt+1,0,0,Ie.width,Ie.height,It,Bt,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt+1,ce,Ie.width,Ie.height,0,It,Bt,Ie.data)}}else{R?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It,Bt,Nt[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ce,It,Bt,Nt[gt]);for(let jt=0;jt<xt.length;jt++){const ue=xt[jt];R?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt+1,0,0,It,Bt,ue.image[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt+1,ce,It,Bt,ue.image[gt])}}}M(T)&&v(r.TEXTURE_CUBE_MAP),dt.__version=At.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Tt(I,T,et,pt,At,dt){const te=c.convert(et.format,et.colorSpace),Pt=c.convert(et.type),Kt=N(et.internalFormat,te,Pt,et.colorSpace),Jt=s.get(T),wt=s.get(et);if(wt.__renderTarget=T,!Jt.__hasExternalTextures){const Nt=Math.max(1,T.width>>dt),kt=Math.max(1,T.height>>dt);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,dt,Kt,Nt,kt,T.depth,0,te,Pt,null):i.texImage2D(At,dt,Kt,Nt,kt,0,te,Pt,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),bt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,At,wt.__webglTexture,0,Zt(T)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,At,wt.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(I,T,et){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){const pt=T.depthTexture,At=pt&&pt.isDepthTexture?pt.type:null,dt=w(T.stencilBuffer,At),te=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=Zt(T);bt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt,dt,T.width,T.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,dt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,dt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,I)}else{const pt=T.textures;for(let At=0;At<pt.length;At++){const dt=pt[At],te=c.convert(dt.format,dt.colorSpace),Pt=c.convert(dt.type),Kt=N(dt.internalFormat,te,Pt,dt.colorSpace),Jt=Zt(T);et&&bt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,Kt,T.width,T.height):bt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt,Kt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Kt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),st(T.depthTexture,0);const At=pt.__webglTexture,dt=Zt(T);if(T.depthTexture.format===ko)bt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,At,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,At,0);else if(T.depthTexture.format===jo)bt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,At,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,At,0);else throw new Error("Unknown depthTexture format")}function le(I){const T=s.get(I),et=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const At=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",At)};pt.addEventListener("dispose",At),T.__depthDisposeCallback=At}T.__boundDepthTexture=pt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const pt=I.texture.mipmaps;pt&&pt.length>0?Vt(T.__webglFramebuffer[0],I):Vt(T.__webglFramebuffer,I)}else if(et){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=r.createRenderbuffer(),Lt(T.__webglDepthbuffer[pt],I,!1);else{const At=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,dt)}}else{const pt=I.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Lt(T.__webglDepthbuffer,I,!1);else{const At=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function se(I,T,et){const pt=s.get(I);T!==void 0&&Tt(pt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&le(I)}function H(I){const T=I.texture,et=s.get(I),pt=s.get(T);I.addEventListener("dispose",B);const At=I.textures,dt=I.isWebGLCubeRenderTarget===!0,te=At.length>1;if(te||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=T.version,h.memory.textures++),dt){et.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Pt]=[];for(let Kt=0;Kt<T.mipmaps.length;Kt++)et.__webglFramebuffer[Pt][Kt]=r.createFramebuffer()}else et.__webglFramebuffer[Pt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)et.__webglFramebuffer[Pt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(te)for(let Pt=0,Kt=At.length;Pt<Kt;Pt++){const Jt=s.get(At[Pt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=r.createTexture(),h.memory.textures++)}if(I.samples>0&&bt(I)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Pt=0;Pt<At.length;Pt++){const Kt=At[Pt];et.__webglColorRenderbuffer[Pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Pt]);const Jt=c.convert(Kt.format,Kt.colorSpace),wt=c.convert(Kt.type),Nt=N(Kt.internalFormat,Jt,wt,Kt.colorSpace,I.isXRRenderTarget===!0),kt=Zt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,Nt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,et.__webglColorRenderbuffer[Pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(et.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),tt(r.TEXTURE_CUBE_MAP,T);for(let Pt=0;Pt<6;Pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)Tt(et.__webglFramebuffer[Pt][Kt],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Kt);else Tt(et.__webglFramebuffer[Pt],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);M(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(te){for(let Pt=0,Kt=At.length;Pt<Kt;Pt++){const Jt=At[Pt],wt=s.get(Jt);let Nt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Nt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Nt,wt.__webglTexture),tt(Nt,Jt),Tt(et.__webglFramebuffer,I,Jt,r.COLOR_ATTACHMENT0+Pt,Nt,0),M(Jt)&&v(Nt)}i.unbindTexture()}else{let Pt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pt,pt.__webglTexture),tt(Pt,T),T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)Tt(et.__webglFramebuffer[Kt],I,T,r.COLOR_ATTACHMENT0,Pt,Kt);else Tt(et.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,Pt,0);M(T)&&v(Pt),i.unbindTexture()}I.depthBuffer&&le(I)}function xe(I){const T=I.textures;for(let et=0,pt=T.length;et<pt;et++){const At=T[et];if(M(At)){const dt=F(I),te=s.get(At).__webglTexture;i.bindTexture(dt,te),v(dt),i.unbindTexture()}}}const Qt=[],zt=[];function Dt(I){if(I.samples>0){if(bt(I)===!1){const T=I.textures,et=I.width,pt=I.height;let At=r.COLOR_BUFFER_BIT;const dt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=s.get(I),Pt=T.length>1;if(Pt)for(let Jt=0;Jt<T.length;Jt++)i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);const Kt=I.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let Jt=0;Jt<T.length;Jt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),Pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,te.__webglColorRenderbuffer[Jt]);const wt=s.get(T[Jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,wt,0)}r.blitFramebuffer(0,0,et,pt,0,0,et,pt,At,r.NEAREST),m===!0&&(Qt.length=0,zt.length=0,Qt.push(r.COLOR_ATTACHMENT0+Jt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Qt.push(dt),zt.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pt)for(let Jt=0;Jt<T.length;Jt++){i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.RENDERBUFFER,te.__webglColorRenderbuffer[Jt]);const wt=s.get(T[Jt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.TEXTURE_2D,wt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Zt(I){return Math.min(l.maxSamples,I.samples)}function bt(I){const T=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(I){const T=h.render.frame;_.get(I)!==T&&(_.set(I,T),I.update())}function He(I,T){const et=I.colorSpace,pt=I.format,At=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||et!==Nr&&et!==ka&&(Le.getTransfer(et)===je?(pt!==Ri||At!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function ze(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=Q,this.setTexture2D=st,this.setTexture2DArray=P,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=se,this.setupRenderTarget=H,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=bt}function HA(r,t){function i(s,l=ka){let c;const h=Le.getTransfer(l);if(s===Bi)return r.UNSIGNED_BYTE;if(s===qd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===bv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Av)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ev)return r.BYTE;if(s===Tv)return r.SHORT;if(s===Go)return r.UNSIGNED_SHORT;if(s===Wd)return r.INT;if(s===bs)return r.UNSIGNED_INT;if(s===ua)return r.FLOAT;if(s===Wo)return r.HALF_FLOAT;if(s===Rv)return r.ALPHA;if(s===Cv)return r.RGB;if(s===Ri)return r.RGBA;if(s===ko)return r.DEPTH_COMPONENT;if(s===jo)return r.DEPTH_STENCIL;if(s===wv)return r.RED;if(s===Zd)return r.RED_INTEGER;if(s===Dv)return r.RG;if(s===Kd)return r.RG_INTEGER;if(s===Qd)return r.RGBA_INTEGER;if(s===Pc||s===zc||s===Ic||s===Bc)if(h===je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dd||s===pd||s===md||s===gd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_d||s===vd||s===xd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===_d||s===vd)return h===je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===xd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yd||s===Sd||s===Md||s===Ed||s===Td||s===bd||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===yd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Md)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ed)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Td)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ad)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ud)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ld)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Od||s===Pd||s===zd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Od)return h===je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Id||s===Bd||s===Fd||s===Hd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Id)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const GA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new jv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qa({vertexShader:GA,fragmentShader:VA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new On(new Qc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends Cs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,y=null,E=null;const b=typeof XRWebGLBinding<"u",M=new kA,v={},F=i.getContextAttributes();let N=null,w=null;const V=[],O=[],B=new fe;let X=null;const L=new _i;L.viewport=new nn;const D=new _i;D.viewport=new nn;const k=[L,D],Q=new cE;let ot=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let $=V[nt];return $===void 0&&($=new Ih,V[nt]=$),$.getTargetRaySpace()},this.getControllerGrip=function(nt){let $=V[nt];return $===void 0&&($=new Ih,V[nt]=$),$.getGripSpace()},this.getHand=function(nt){let $=V[nt];return $===void 0&&($=new Ih,V[nt]=$),$.getHandSpace()};function st(nt){const $=O.indexOf(nt.inputSource);if($===-1)return;const Tt=V[$];Tt!==void 0&&(Tt.update(nt.inputSource,nt.frame,p||h),Tt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function P(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Y);for(let nt=0;nt<V.length;nt++){const $=O[nt];$!==null&&(O[nt]=null,V[nt].disconnect($))}ot=null,ft=null,M.reset();for(const nt in v)delete v[nt];t.setRenderTarget(N),y=null,x=null,g=null,l=null,w=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Y),F.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(B),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Lt=null,Vt=null;F.depth&&(Vt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=F.stencil?jo:ko,Lt=F.stencil?Vo:bs);const le={colorFormat:i.RGBA8,depthFormat:Vt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(le),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),w=new Rs(x.textureWidth,x.textureHeight,{format:Ri,type:Bi,depthTexture:new kv(x.textureWidth,x.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Tt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),w=new Rs(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(nt){for(let $=0;$<nt.removed.length;$++){const Tt=nt.removed[$],Lt=O.indexOf(Tt);Lt>=0&&(O[Lt]=null,V[Lt].disconnect(Tt))}for(let $=0;$<nt.added.length;$++){const Tt=nt.added[$];let Lt=O.indexOf(Tt);if(Lt===-1){for(let le=0;le<V.length;le++)if(le>=O.length){O.push(Tt),Lt=le;break}else if(O[le]===null){O[le]=Tt,Lt=le;break}if(Lt===-1)break}const Vt=V[Lt];Vt&&Vt.connect(Tt)}}const W=new J,yt=new J;function Et(nt,$,Tt){W.setFromMatrixPosition($.matrixWorld),yt.setFromMatrixPosition(Tt.matrixWorld);const Lt=W.distanceTo(yt),Vt=$.projectionMatrix.elements,le=Tt.projectionMatrix.elements,se=Vt[14]/(Vt[10]-1),H=Vt[14]/(Vt[10]+1),xe=(Vt[9]+1)/Vt[5],Qt=(Vt[9]-1)/Vt[5],zt=(Vt[8]-1)/Vt[0],Dt=(le[8]+1)/le[0],Zt=se*zt,bt=se*Dt,Xt=Lt/(-zt+Dt),He=Xt*-zt;if($.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(He),nt.translateZ(Xt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Vt[10]===-1)nt.projectionMatrix.copy($.projectionMatrix),nt.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ze=se+Xt,I=H+Xt,T=Zt-He,et=bt+(Lt-He),pt=xe*H/I*ze,At=Qt*H/I*ze;nt.projectionMatrix.makePerspective(T,et,pt,At,ze,I),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function z(nt,$){$===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices($.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let $=nt.near,Tt=nt.far;M.texture!==null&&(M.depthNear>0&&($=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),Q.near=D.near=L.near=$,Q.far=D.far=L.far=Tt,(ot!==Q.near||ft!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ot=Q.near,ft=Q.far),Q.layers.mask=nt.layers.mask|6,L.layers.mask=Q.layers.mask&3,D.layers.mask=Q.layers.mask&5;const Lt=nt.parent,Vt=Q.cameras;z(Q,Lt);for(let le=0;le<Vt.length;le++)z(Vt[le],Lt);Vt.length===2?Et(Q,L,D):Q.projectionMatrix.copy(L.projectionMatrix),tt(nt,Q,Lt)};function tt(nt,$,Tt){Tt===null?nt.matrix.copy($.matrixWorld):(nt.matrix.copy(Tt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply($.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy($.projectionMatrix),nt.projectionMatrixInverse.copy($.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Gd*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(nt){return v[nt]};let vt=null;function Ct(nt,$){if(_=$.getViewerPose(p||h),E=$,_!==null){const Tt=_.views;y!==null&&(t.setRenderTargetFramebuffer(w,y.framebuffer),t.setRenderTarget(w));let Lt=!1;Tt.length!==Q.cameras.length&&(Q.cameras.length=0,Lt=!0);for(let H=0;H<Tt.length;H++){const xe=Tt[H];let Qt=null;if(y!==null)Qt=y.getViewport(xe);else{const Dt=g.getViewSubImage(x,xe);Qt=Dt.viewport,H===0&&(t.setRenderTargetTextures(w,Dt.colorTexture,Dt.depthStencilTexture),t.setRenderTarget(w))}let zt=k[H];zt===void 0&&(zt=new _i,zt.layers.enable(H),zt.viewport=new nn,k[H]=zt),zt.matrix.fromArray(xe.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(xe.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),H===0&&(Q.matrix.copy(zt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Lt===!0&&Q.cameras.push(zt)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){g=s.getBinding();const H=g.getDepthInformation(Tt[0]);H&&H.isValid&&H.texture&&M.init(H,l.renderState)}if(Vt&&Vt.includes("camera-access")&&b){t.state.unbindTexture(),g=s.getBinding();for(let H=0;H<Tt.length;H++){const xe=Tt[H].camera;if(xe){let Qt=v[xe];Qt||(Qt=new jv,v[xe]=Qt);const zt=g.getCameraImage(xe);Qt.sourceTexture=zt}}}}for(let Tt=0;Tt<V.length;Tt++){const Lt=O[Tt],Vt=V[Tt];Lt!==null&&Vt!==void 0&&Vt.update(Lt,$,p||h)}vt&&vt(nt,$),$.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:$}),E=null}const Ot=new qv;Ot.setAnimationLoop(Ct),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}}const vs=new Fi,XA=new an;function WA(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Fv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,F,N,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,w)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),b(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,F,N):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Yn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Yn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const F=t.get(v),N=F.envMap,w=F.envMapRotation;N&&(M.envMap.value=N,vs.copy(w),vs.x*=-1,vs.y*=-1,vs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),M.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(vs)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,F,N){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*F,M.scale.value=N*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,F){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function b(M,v){const F=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function qA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,N){const w=N.program;s.uniformBlockBinding(F,w)}function p(F,N){let w=l[F.id];w===void 0&&(E(F),w=_(F),l[F.id]=w,F.addEventListener("dispose",M));const V=N.program;s.updateUBOMapping(F,V);const O=t.render.frame;c[F.id]!==O&&(x(F),c[F.id]=O)}function _(F){const N=g();F.__bindingPointIndex=N;const w=r.createBuffer(),V=F.__size,O=F.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,V,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,w),w}function g(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const N=l[F.id],w=F.uniforms,V=F.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let O=0,B=w.length;O<B;O++){const X=Array.isArray(w[O])?w[O]:[w[O]];for(let L=0,D=X.length;L<D;L++){const k=X[L];if(y(k,O,L,V)===!0){const Q=k.__offset,ot=Array.isArray(k.value)?k.value:[k.value];let ft=0;for(let st=0;st<ot.length;st++){const P=ot[st],Y=b(P);typeof P=="number"||typeof P=="boolean"?(k.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,Q+ft,k.__data)):P.isMatrix3?(k.__data[0]=P.elements[0],k.__data[1]=P.elements[1],k.__data[2]=P.elements[2],k.__data[3]=0,k.__data[4]=P.elements[3],k.__data[5]=P.elements[4],k.__data[6]=P.elements[5],k.__data[7]=0,k.__data[8]=P.elements[6],k.__data[9]=P.elements[7],k.__data[10]=P.elements[8],k.__data[11]=0):(P.toArray(k.__data,ft),ft+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(F,N,w,V){const O=F.value,B=N+"_"+w;if(V[B]===void 0)return typeof O=="number"||typeof O=="boolean"?V[B]=O:V[B]=O.clone(),!0;{const X=V[B];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return V[B]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function E(F){const N=F.uniforms;let w=0;const V=16;for(let B=0,X=N.length;B<X;B++){const L=Array.isArray(N[B])?N[B]:[N[B]];for(let D=0,k=L.length;D<k;D++){const Q=L[D],ot=Array.isArray(Q.value)?Q.value:[Q.value];for(let ft=0,st=ot.length;ft<st;ft++){const P=ot[ft],Y=b(P),W=w%V,yt=W%Y.boundary,Et=W+yt;w+=yt,Et!==0&&V-Et<Y.storage&&(w+=V-Et),Q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=Y.storage}}}const O=w%V;return O>0&&(w+=V-O),F.__size=w,F.__cache={},this}function b(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function M(F){const N=F.target;N.removeEventListener("dispose",M);const w=h.indexOf(N.__bindingPointIndex);h.splice(w,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const F in l)r.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class YA{constructor(t={}){const{canvas:i=AM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,v=null;const F=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let V=!1;this._outputColorSpace=gi;let O=0,B=0,X=null,L=-1,D=null;const k=new nn,Q=new nn;let ot=null;const ft=new _e(0);let st=0,P=i.width,Y=i.height,W=1,yt=null,Et=null;const z=new nn(0,0,P,Y),tt=new nn(0,0,P,Y);let vt=!1;const Ct=new ep;let Ot=!1,nt=!1;const $=new an,Tt=new J,Lt=new nn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function se(){return X===null?W:1}let H=s;function xe(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xd}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",xt,!1),H===null){const q="webgl2";if(H=xe(q,C),H===null)throw xe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Qt,zt,Dt,Zt,bt,Xt,He,ze,I,T,et,pt,At,dt,te,Pt,Kt,Jt,wt,Nt,kt,It,Bt,ce;function R(){Qt=new ab(H),Qt.init(),It=new HA(H,Qt),zt=new QT(H,Qt,t,It),Dt=new BA(H,Qt),zt.reversedDepthBuffer&&x&&Dt.buffers.depth.setReversed(!0),Zt=new ob(H),bt=new bA,Xt=new FA(H,Qt,Dt,bt,zt,It,Zt),He=new $T(w),ze=new ib(w),I=new dE(H),Bt=new ZT(H,I),T=new sb(H,I,Zt,Bt),et=new cb(H,T,I,Zt),wt=new lb(H,zt,Xt),Pt=new JT(bt),pt=new TA(w,He,ze,Qt,zt,Bt,Pt),At=new WA(w,bt),dt=new RA,te=new NA(Qt),Jt=new YT(w,He,ze,Dt,et,y,m),Kt=new zA(w,et,zt),ce=new qA(H,Zt,zt,Dt),Nt=new KT(H,Qt,Zt),kt=new rb(H,Qt,Zt),Zt.programs=pt.programs,w.capabilities=zt,w.extensions=Qt,w.properties=bt,w.renderLists=dt,w.shadowMap=Kt,w.state=Dt,w.info=Zt}R();const ct=new jA(w,H);this.xr=ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Qt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Qt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(P,Y,!1))},this.getSize=function(C){return C.set(P,Y)},this.setSize=function(C,q,lt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,Y=q,i.width=Math.floor(C*W),i.height=Math.floor(q*W),lt===!0&&(i.style.width=C+"px",i.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(P*W,Y*W).floor()},this.setDrawingBufferSize=function(C,q,lt){P=C,Y=q,W=lt,i.width=Math.floor(C*lt),i.height=Math.floor(q*lt),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,q,lt,ut){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,q,lt,ut),Dt.viewport(k.copy(z).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(tt)},this.setScissor=function(C,q,lt,ut){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,q,lt,ut),Dt.scissor(Q.copy(tt).multiplyScalar(W).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(C){Dt.setScissorTest(vt=C)},this.setOpaqueSort=function(C){yt=C},this.setTransparentSort=function(C){Et=C},this.getClearColor=function(C){return C.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,lt=!0){let ut=0;if(C){let K=!1;if(X!==null){const Mt=X.texture.format;K=Mt===Qd||Mt===Kd||Mt===Zd}if(K){const Mt=X.texture.type,Ft=Mt===Bi||Mt===bs||Mt===Go||Mt===Vo||Mt===qd||Mt===Yd,qt=Jt.getClearColor(),Gt=Jt.getClearAlpha(),ee=qt.r,oe=qt.g,ne=qt.b;Ft?(E[0]=ee,E[1]=oe,E[2]=ne,E[3]=Gt,H.clearBufferuiv(H.COLOR,0,E)):(b[0]=ee,b[1]=oe,b[2]=ne,b[3]=Gt,H.clearBufferiv(H.COLOR,0,b))}else ut|=H.COLOR_BUFFER_BIT}q&&(ut|=H.DEPTH_BUFFER_BIT),lt&&(ut|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",xt,!1),Jt.dispose(),dt.dispose(),te.dispose(),bt.dispose(),He.dispose(),ze.dispose(),et.dispose(),Bt.dispose(),ce.dispose(),pt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ri),ct.removeEventListener("sessionend",Br),wi.stop()};function Rt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const C=Zt.autoReset,q=Kt.enabled,lt=Kt.autoUpdate,ut=Kt.needsUpdate,K=Kt.type;R(),Zt.autoReset=C,Kt.enabled=q,Kt.autoUpdate=lt,Kt.needsUpdate=ut,Kt.type=K}function xt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function gt(C){const q=C.target;q.removeEventListener("dispose",gt),jt(q)}function jt(C){ue(C),bt.remove(C)}function ue(C){const q=bt.get(C).programs;q!==void 0&&(q.forEach(function(lt){pt.releaseProgram(lt)}),C.isShaderMaterial&&pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,lt,ut,K,Mt){q===null&&(q=Vt);const Ft=K.isMesh&&K.matrixWorld.determinant()<0,qt=ha(C,q,lt,ut,K);Dt.setMaterial(ut,Ft);let Gt=lt.index,ee=1;if(ut.wireframe===!0){if(Gt=T.getWireframeAttribute(lt),Gt===void 0)return;ee=2}const oe=lt.drawRange,ne=lt.attributes.position;let ve=oe.start*ee,Oe=(oe.start+oe.count)*ee;Mt!==null&&(ve=Math.max(ve,Mt.start*ee),Oe=Math.min(Oe,(Mt.start+Mt.count)*ee)),Gt!==null?(ve=Math.max(ve,0),Oe=Math.min(Oe,Gt.count)):ne!=null&&(ve=Math.max(ve,0),Oe=Math.min(Oe,ne.count));const We=Oe-ve;if(We<0||We===1/0)return;Bt.setup(K,ut,qt,lt,Gt);let Pe,ye=Nt;if(Gt!==null&&(Pe=I.get(Gt),ye=kt,ye.setIndex(Pe)),K.isMesh)ut.wireframe===!0?(Dt.setLineWidth(ut.wireframeLinewidth*se()),ye.setMode(H.LINES)):ye.setMode(H.TRIANGLES);else if(K.isLine){let Yt=ut.linewidth;Yt===void 0&&(Yt=1),Dt.setLineWidth(Yt*se()),K.isLineSegments?ye.setMode(H.LINES):K.isLineLoop?ye.setMode(H.LINE_LOOP):ye.setMode(H.LINE_STRIP)}else K.isPoints?ye.setMode(H.POINTS):K.isSprite&&ye.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Xo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ye.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Yt=K._multiDrawStarts,Ye=K._multiDrawCounts,we=K._multiDrawCount,Tn=Gt?I.get(Gt).bytesPerElement:1,Hi=bt.get(ut).currentProgram.getUniforms();for(let xn=0;xn<we;xn++)Hi.setValue(H,"_gl_DrawID",xn),ye.render(Yt[xn]/Tn,Ye[xn])}else if(K.isInstancedMesh)ye.renderInstances(ve,We,K.count);else if(lt.isInstancedBufferGeometry){const Yt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ye=Math.min(lt.instanceCount,Yt);ye.renderInstances(ve,We,Ye)}else ye.render(ve,We)};function Ie(C,q,lt){C.transparent===!0&&C.side===bi&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,Kn(C,q,lt),C.side=Wa,C.needsUpdate=!0,Kn(C,q,lt),C.side=bi):Kn(C,q,lt)}this.compile=function(C,q,lt=null){lt===null&&(lt=C),v=te.get(lt),v.init(q),N.push(v),lt.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),C!==lt&&C.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const ut=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Mt=K.material;if(Mt)if(Array.isArray(Mt))for(let Ft=0;Ft<Mt.length;Ft++){const qt=Mt[Ft];Ie(qt,lt,K),ut.add(qt)}else Ie(Mt,lt,K),ut.add(Mt)}),v=N.pop(),ut},this.compileAsync=function(C,q,lt=null){const ut=this.compile(C,q,lt);return new Promise(K=>{function Mt(){if(ut.forEach(function(Ft){bt.get(Ft).currentProgram.isReady()&&ut.delete(Ft)}),ut.size===0){K(C);return}setTimeout(Mt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Ce=null;function Pn(C){Ce&&Ce(C)}function ri(){wi.stop()}function Br(){wi.start()}const wi=new qv;wi.setAnimationLoop(Pn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(C){Ce=C,ct.setAnimationLoop(C),C===null?wi.stop():wi.start()},ct.addEventListener("sessionstart",ri),ct.addEventListener("sessionend",Br),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(q),q=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,q,X),v=te.get(C,N.length),v.init(q),N.push(v),$.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ct.setFromProjectionMatrix($,Ii,q.reversedDepth),nt=this.localClippingEnabled,Ot=Pt.init(this.clippingPlanes,nt),M=dt.get(C,F.length),M.init(),F.push(M),ct.enabled===!0&&ct.isPresenting===!0){const Mt=w.xr.getDepthSensingMesh();Mt!==null&&ws(Mt,q,-1/0,w.sortObjects)}ws(C,q,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(yt,Et),le=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,le&&Jt.addToRenderList(M,C),this.info.render.frame++,Ot===!0&&Pt.beginShadows();const lt=v.state.shadowsArray;Kt.render(lt,C,q),Ot===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=M.opaque,K=M.transmissive;if(v.setupLights(),q.isArrayCamera){const Mt=q.cameras;if(K.length>0)for(let Ft=0,qt=Mt.length;Ft<qt;Ft++){const Gt=Mt[Ft];Us(ut,K,C,Gt)}le&&Jt.render(C);for(let Ft=0,qt=Mt.length;Ft<qt;Ft++){const Gt=Mt[Ft];Ds(M,C,Gt,Gt.viewport)}}else K.length>0&&Us(ut,K,C,q),le&&Jt.render(C),Ds(M,C,q);X!==null&&B===0&&(Xt.updateMultisampleRenderTarget(X),Xt.updateRenderTargetMipmap(X)),C.isScene===!0&&C.onAfterRender(w,C,q),Bt.resetDefaultState(),L=-1,D=null,N.pop(),N.length>0?(v=N[N.length-1],Ot===!0&&Pt.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function ws(C,q,lt,ut){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ct.intersectsSprite(C)){ut&&Lt.setFromMatrixPosition(C.matrixWorld).applyMatrix4($);const Ft=et.update(C),qt=C.material;qt.visible&&M.push(C,Ft,qt,lt,Lt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ct.intersectsObject(C))){const Ft=et.update(C),qt=C.material;if(ut&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Lt.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Lt.copy(Ft.boundingSphere.center)),Lt.applyMatrix4(C.matrixWorld).applyMatrix4($)),Array.isArray(qt)){const Gt=Ft.groups;for(let ee=0,oe=Gt.length;ee<oe;ee++){const ne=Gt[ee],ve=qt[ne.materialIndex];ve&&ve.visible&&M.push(C,Ft,ve,lt,Lt.z,ne)}}else qt.visible&&M.push(C,Ft,qt,lt,Lt.z,null)}}const Mt=C.children;for(let Ft=0,qt=Mt.length;Ft<qt;Ft++)ws(Mt[Ft],q,lt,ut)}function Ds(C,q,lt,ut){const K=C.opaque,Mt=C.transmissive,Ft=C.transparent;v.setupLightsView(lt),Ot===!0&&Pt.setGlobalState(w.clippingPlanes,lt),ut&&Dt.viewport(k.copy(ut)),K.length>0&&Ya(K,q,lt),Mt.length>0&&Ya(Mt,q,lt),Ft.length>0&&Ya(Ft,q,lt),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Us(C,q,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ut.id]===void 0&&(v.state.transmissionRenderTarget[ut.id]=new Rs(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Wo:Bi,minFilter:Ts,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Mt=v.state.transmissionRenderTarget[ut.id],Ft=ut.viewport||k;Mt.setSize(Ft.z*w.transmissionResolutionScale,Ft.w*w.transmissionResolutionScale);const qt=w.getRenderTarget(),Gt=w.getActiveCubeFace(),ee=w.getActiveMipmapLevel();w.setRenderTarget(Mt),w.getClearColor(ft),st=w.getClearAlpha(),st<1&&w.setClearColor(16777215,.5),w.clear(),le&&Jt.render(lt);const oe=w.toneMapping;w.toneMapping=Xa;const ne=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),v.setupLightsView(ut),Ot===!0&&Pt.setGlobalState(w.clippingPlanes,ut),Ya(C,lt,ut),Xt.updateMultisampleRenderTarget(Mt),Xt.updateRenderTargetMipmap(Mt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Oe=0,We=q.length;Oe<We;Oe++){const Pe=q[Oe],ye=Pe.object,Yt=Pe.geometry,Ye=Pe.material,we=Pe.group;if(Ye.side===bi&&ye.layers.test(ut.layers)){const Tn=Ye.side;Ye.side=Yn,Ye.needsUpdate=!0,Fr(ye,lt,ut,Yt,Ye,we),Ye.side=Tn,Ye.needsUpdate=!0,ve=!0}}ve===!0&&(Xt.updateMultisampleRenderTarget(Mt),Xt.updateRenderTargetMipmap(Mt))}w.setRenderTarget(qt,Gt,ee),w.setClearColor(ft,st),ne!==void 0&&(ut.viewport=ne),w.toneMapping=oe}function Ya(C,q,lt){const ut=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Mt=C.length;K<Mt;K++){const Ft=C[K],qt=Ft.object,Gt=Ft.geometry,ee=Ft.group;let oe=Ft.material;oe.allowOverride===!0&&ut!==null&&(oe=ut),qt.layers.test(lt.layers)&&Fr(qt,q,lt,Gt,oe,ee)}}function Fr(C,q,lt,ut,K,Mt){C.onBeforeRender(w,q,lt,ut,K,Mt),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(w,q,lt,ut,C,Mt),K.transparent===!0&&K.side===bi&&K.forceSinglePass===!1?(K.side=Yn,K.needsUpdate=!0,w.renderBufferDirect(lt,q,ut,K,C,Mt),K.side=Wa,K.needsUpdate=!0,w.renderBufferDirect(lt,q,ut,K,C,Mt),K.side=bi):w.renderBufferDirect(lt,q,ut,K,C,Mt),C.onAfterRender(w,q,lt,ut,K,Mt)}function Kn(C,q,lt){q.isScene!==!0&&(q=Vt);const ut=bt.get(C),K=v.state.lights,Mt=v.state.shadowsArray,Ft=K.state.version,qt=pt.getParameters(C,K.state,Mt,q,lt),Gt=pt.getProgramCacheKey(qt);let ee=ut.programs;ut.environment=C.isMeshStandardMaterial?q.environment:null,ut.fog=q.fog,ut.envMap=(C.isMeshStandardMaterial?ze:He).get(C.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",gt),ee=new Map,ut.programs=ee);let oe=ee.get(Gt);if(oe!==void 0){if(ut.currentProgram===oe&&ut.lightsStateVersion===Ft)return En(C,qt),oe}else qt.uniforms=pt.getUniforms(C),C.onBeforeCompile(qt,w),oe=pt.acquireProgram(qt,Gt),ee.set(Gt,oe),ut.uniforms=qt.uniforms;const ne=ut.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ne.clippingPlanes=Pt.uniform),En(C,qt),ut.needsLights=$c(C),ut.lightsStateVersion=Ft,ut.needsLights&&(ne.ambientLightColor.value=K.state.ambient,ne.lightProbe.value=K.state.probe,ne.directionalLights.value=K.state.directional,ne.directionalLightShadows.value=K.state.directionalShadow,ne.spotLights.value=K.state.spot,ne.spotLightShadows.value=K.state.spotShadow,ne.rectAreaLights.value=K.state.rectArea,ne.ltc_1.value=K.state.rectAreaLTC1,ne.ltc_2.value=K.state.rectAreaLTC2,ne.pointLights.value=K.state.point,ne.pointLightShadows.value=K.state.pointShadow,ne.hemisphereLights.value=K.state.hemi,ne.directionalShadowMap.value=K.state.directionalShadowMap,ne.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ne.spotShadowMap.value=K.state.spotShadowMap,ne.spotLightMatrix.value=K.state.spotLightMatrix,ne.spotLightMap.value=K.state.spotLightMap,ne.pointShadowMap.value=K.state.pointShadowMap,ne.pointShadowMatrix.value=K.state.pointShadowMatrix),ut.currentProgram=oe,ut.uniformsList=null,oe}function ln(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Hc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function En(C,q){const lt=bt.get(C);lt.outputColorSpace=q.outputColorSpace,lt.batching=q.batching,lt.batchingColor=q.batchingColor,lt.instancing=q.instancing,lt.instancingColor=q.instancingColor,lt.instancingMorph=q.instancingMorph,lt.skinning=q.skinning,lt.morphTargets=q.morphTargets,lt.morphNormals=q.morphNormals,lt.morphColors=q.morphColors,lt.morphTargetsCount=q.morphTargetsCount,lt.numClippingPlanes=q.numClippingPlanes,lt.numIntersection=q.numClipIntersection,lt.vertexAlphas=q.vertexAlphas,lt.vertexTangents=q.vertexTangents,lt.toneMapping=q.toneMapping}function ha(C,q,lt,ut,K){q.isScene!==!0&&(q=Vt),Xt.resetTextureUnits();const Mt=q.fog,Ft=ut.isMeshStandardMaterial?q.environment:null,qt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Nr,Gt=(ut.isMeshStandardMaterial?ze:He).get(ut.envMap||Ft),ee=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,oe=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),ne=!!lt.morphAttributes.position,ve=!!lt.morphAttributes.normal,Oe=!!lt.morphAttributes.color;let We=Xa;ut.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(We=w.toneMapping);const Pe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,ye=Pe!==void 0?Pe.length:0,Yt=bt.get(ut),Ye=v.state.lights;if(Ot===!0&&(nt===!0||C!==D)){const pn=C===D&&ut.id===L;Pt.setState(ut,C,pn)}let we=!1;ut.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ye.state.version||Yt.outputColorSpace!==qt||K.isBatchedMesh&&Yt.batching===!1||!K.isBatchedMesh&&Yt.batching===!0||K.isBatchedMesh&&Yt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Yt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Yt.instancing===!1||!K.isInstancedMesh&&Yt.instancing===!0||K.isSkinnedMesh&&Yt.skinning===!1||!K.isSkinnedMesh&&Yt.skinning===!0||K.isInstancedMesh&&Yt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Yt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Yt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Yt.instancingMorph===!1&&K.morphTexture!==null||Yt.envMap!==Gt||ut.fog===!0&&Yt.fog!==Mt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Pt.numPlanes||Yt.numIntersection!==Pt.numIntersection)||Yt.vertexAlphas!==ee||Yt.vertexTangents!==oe||Yt.morphTargets!==ne||Yt.morphNormals!==ve||Yt.morphColors!==Oe||Yt.toneMapping!==We||Yt.morphTargetsCount!==ye)&&(we=!0):(we=!0,Yt.__version=ut.version);let Tn=Yt.currentProgram;we===!0&&(Tn=Kn(ut,q,K));let Hi=!1,xn=!1,Ka=!1;const Te=Tn.getUniforms(),Dn=Yt.uniforms;if(Dt.useProgram(Tn.program)&&(Hi=!0,xn=!0,Ka=!0),ut.id!==L&&(L=ut.id,xn=!0),Hi||D!==C){Dt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Te.setValue(H,"projectionMatrix",C.projectionMatrix),Te.setValue(H,"viewMatrix",C.matrixWorldInverse);const sn=Te.map.cameraPosition;sn!==void 0&&sn.setValue(H,Tt.setFromMatrixPosition(C.matrixWorld)),zt.logarithmicDepthBuffer&&Te.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Te.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,xn=!0,Ka=!0)}if(K.isSkinnedMesh){Te.setOptional(H,K,"bindMatrix"),Te.setOptional(H,K,"bindMatrixInverse");const pn=K.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Te.setValue(H,"boneTexture",pn.boneTexture,Xt))}K.isBatchedMesh&&(Te.setOptional(H,K,"batchingTexture"),Te.setValue(H,"batchingTexture",K._matricesTexture,Xt),Te.setOptional(H,K,"batchingIdTexture"),Te.setValue(H,"batchingIdTexture",K._indirectTexture,Xt),Te.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Te.setValue(H,"batchingColorTexture",K._colorsTexture,Xt));const zn=lt.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&wt.update(K,lt,Tn),(xn||Yt.receiveShadow!==K.receiveShadow)&&(Yt.receiveShadow=K.receiveShadow,Te.setValue(H,"receiveShadow",K.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Dn.envMap.value=Gt,Dn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),xn&&(Te.setValue(H,"toneMappingExposure",w.toneMappingExposure),Yt.needsLights&&Hr(Dn,Ka),Mt&&ut.fog===!0&&At.refreshFogUniforms(Dn,Mt),At.refreshMaterialUniforms(Dn,ut,W,Y,v.state.transmissionRenderTarget[C.id]),Hc.upload(H,ln(Yt),Dn,Xt)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Hc.upload(H,ln(Yt),Dn,Xt),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Te.setValue(H,"center",K.center),Te.setValue(H,"modelViewMatrix",K.modelViewMatrix),Te.setValue(H,"normalMatrix",K.normalMatrix),Te.setValue(H,"modelMatrix",K.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const pn=ut.uniformsGroups;for(let sn=0,Ls=pn.length;sn<Ls;sn++){const Di=pn[sn];ce.update(Di,Tn),ce.bind(Di,Tn)}}return Tn}function Hr(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function $c(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,q,lt){const ut=bt.get(C);ut.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),bt.get(C.texture).__webglTexture=q,bt.get(C.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:lt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const lt=bt.get(C);lt.__webglFramebuffer=q,lt.__useDefaultFramebuffer=q===void 0};const tu=H.createFramebuffer();this.setRenderTarget=function(C,q=0,lt=0){X=C,O=q,B=lt;let ut=!0,K=null,Mt=!1,Ft=!1;if(C){const Gt=bt.get(C);if(Gt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(H.FRAMEBUFFER,null),ut=!1;else if(Gt.__webglFramebuffer===void 0)Xt.setupRenderTarget(C);else if(Gt.__hasExternalTextures)Xt.rebindTextures(C,bt.get(C.texture).__webglTexture,bt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ne=C.depthTexture;if(Gt.__boundDepthTexture!==ne){if(ne!==null&&bt.has(ne)&&(C.width!==ne.image.width||C.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(C)}}const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ft=!0);const oe=bt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(oe[q])?K=oe[q][lt]:K=oe[q],Mt=!0):C.samples>0&&Xt.useMultisampledRTT(C)===!1?K=bt.get(C).__webglMultisampledFramebuffer:Array.isArray(oe)?K=oe[lt]:K=oe,k.copy(C.viewport),Q.copy(C.scissor),ot=C.scissorTest}else k.copy(z).multiplyScalar(W).floor(),Q.copy(tt).multiplyScalar(W).floor(),ot=vt;if(lt!==0&&(K=tu),Dt.bindFramebuffer(H.FRAMEBUFFER,K)&&ut&&Dt.drawBuffers(C,K),Dt.viewport(k),Dt.scissor(Q),Dt.setScissorTest(ot),Mt){const Gt=bt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Gt.__webglTexture,lt)}else if(Ft){const Gt=q;for(let ee=0;ee<C.textures.length;ee++){const oe=bt.get(C.textures[ee]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ee,oe.__webglTexture,lt,Gt)}}else if(C!==null&&lt!==0){const Gt=bt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Gt.__webglTexture,lt)}L=-1},this.readRenderTargetPixels=function(C,q,lt,ut,K,Mt,Ft,qt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Gt=Gt[Ft]),Gt){Dt.bindFramebuffer(H.FRAMEBUFFER,Gt);try{const ee=C.textures[qt],oe=ee.format,ne=ee.type;if(!zt.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-ut&&lt>=0&&lt<=C.height-K&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+qt),H.readPixels(q,lt,ut,K,It.convert(oe),It.convert(ne),Mt))}finally{const ee=X!==null?bt.get(X).__webglFramebuffer:null;Dt.bindFramebuffer(H.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(C,q,lt,ut,K,Mt,Ft,qt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Gt=Gt[Ft]),Gt)if(q>=0&&q<=C.width-ut&&lt>=0&&lt<=C.height-K){Dt.bindFramebuffer(H.FRAMEBUFFER,Gt);const ee=C.textures[qt],oe=ee.format,ne=ee.type;if(!zt.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ve),H.bufferData(H.PIXEL_PACK_BUFFER,Mt.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+qt),H.readPixels(q,lt,ut,K,It.convert(oe),It.convert(ne),0);const Oe=X!==null?bt.get(X).__webglFramebuffer:null;Dt.bindFramebuffer(H.FRAMEBUFFER,Oe);const We=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await RM(H,We,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ve),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Mt),H.deleteBuffer(ve),H.deleteSync(We),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,lt=0){const ut=Math.pow(2,-lt),K=Math.floor(C.image.width*ut),Mt=Math.floor(C.image.height*ut),Ft=q!==null?q.x:0,qt=q!==null?q.y:0;Xt.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,lt,0,0,Ft,qt,K,Mt),Dt.unbindTexture()};const Ko=H.createFramebuffer(),Za=H.createFramebuffer();this.copyTextureToTexture=function(C,q,lt=null,ut=null,K=0,Mt=null){Mt===null&&(K!==0?(Xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=K,K=0):Mt=0);let Ft,qt,Gt,ee,oe,ne,ve,Oe,We;const Pe=C.isCompressedTexture?C.mipmaps[Mt]:C.image;if(lt!==null)Ft=lt.max.x-lt.min.x,qt=lt.max.y-lt.min.y,Gt=lt.isBox3?lt.max.z-lt.min.z:1,ee=lt.min.x,oe=lt.min.y,ne=lt.isBox3?lt.min.z:0;else{const zn=Math.pow(2,-K);Ft=Math.floor(Pe.width*zn),qt=Math.floor(Pe.height*zn),C.isDataArrayTexture?Gt=Pe.depth:C.isData3DTexture?Gt=Math.floor(Pe.depth*zn):Gt=1,ee=0,oe=0,ne=0}ut!==null?(ve=ut.x,Oe=ut.y,We=ut.z):(ve=0,Oe=0,We=0);const ye=It.convert(q.format),Yt=It.convert(q.type);let Ye;q.isData3DTexture?(Xt.setTexture3D(q,0),Ye=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Xt.setTexture2DArray(q,0),Ye=H.TEXTURE_2D_ARRAY):(Xt.setTexture2D(q,0),Ye=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const we=H.getParameter(H.UNPACK_ROW_LENGTH),Tn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Hi=H.getParameter(H.UNPACK_SKIP_PIXELS),xn=H.getParameter(H.UNPACK_SKIP_ROWS),Ka=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Pe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ee),H.pixelStorei(H.UNPACK_SKIP_ROWS,oe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ne);const Te=C.isDataArrayTexture||C.isData3DTexture,Dn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const zn=bt.get(C),pn=bt.get(q),sn=bt.get(zn.__renderTarget),Ls=bt.get(pn.__renderTarget);Dt.bindFramebuffer(H.READ_FRAMEBUFFER,sn.__webglFramebuffer),Dt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Di=0;Di<Gt;Di++)Te&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bt.get(C).__webglTexture,K,ne+Di),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bt.get(q).__webglTexture,Mt,We+Di)),H.blitFramebuffer(ee,oe,Ft,qt,ve,Oe,Ft,qt,H.DEPTH_BUFFER_BIT,H.NEAREST);Dt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||bt.has(C)){const zn=bt.get(C),pn=bt.get(q);Dt.bindFramebuffer(H.READ_FRAMEBUFFER,Ko),Dt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Za);for(let sn=0;sn<Gt;sn++)Te?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zn.__webglTexture,K,ne+sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zn.__webglTexture,K),Dn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Mt,We+sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Mt),K!==0?H.blitFramebuffer(ee,oe,Ft,qt,ve,Oe,Ft,qt,H.COLOR_BUFFER_BIT,H.NEAREST):Dn?H.copyTexSubImage3D(Ye,Mt,ve,Oe,We+sn,ee,oe,Ft,qt):H.copyTexSubImage2D(Ye,Mt,ve,Oe,ee,oe,Ft,qt);Dt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Dn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Ye,Mt,ve,Oe,We,Ft,qt,Gt,ye,Yt,Pe.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,Mt,ve,Oe,We,Ft,qt,Gt,ye,Pe.data):H.texSubImage3D(Ye,Mt,ve,Oe,We,Ft,qt,Gt,ye,Yt,Pe):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Mt,ve,Oe,Ft,qt,ye,Yt,Pe.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Mt,ve,Oe,Pe.width,Pe.height,ye,Pe.data):H.texSubImage2D(H.TEXTURE_2D,Mt,ve,Oe,Ft,qt,ye,Yt,Pe);H.pixelStorei(H.UNPACK_ROW_LENGTH,we),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Hi),H.pixelStorei(H.UNPACK_SKIP_ROWS,xn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ka),Mt===0&&q.generateMipmaps&&H.generateMipmap(Ye),Dt.unbindTexture()},this.initRenderTarget=function(C){bt.get(C).__webglFramebuffer===void 0&&Xt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Xt.setTextureCube(C,0):C.isData3DTexture?Xt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Xt.setTexture2DArray(C,0):Xt.setTexture2D(C,0),Dt.unbindTexture()},this.resetState=function(){O=0,B=0,X=null,Dt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const av={type:"change"},rp={type:"start"},Jv={type:"end"},Lc=new $d,sv=new Va,ZA=Math.cos(70*bM.DEG2RAD),gn=new J,qn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qh=1e-6;class KA extends fE{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new As,this._lastTargetPosition=new J,this._quat=new As().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new L0,this._sphericalDelta=new L0,this._scale=1,this._panOffset=new J,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new J,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JA.bind(this),this._onPointerDown=QA.bind(this),this._onPointerUp=$A.bind(this),this._onContextMenu=r2.bind(this),this._onMouseWheel=n2.bind(this),this._onKeyDown=i2.bind(this),this._onTouchStart=a2.bind(this),this._onTouchMove=s2.bind(this),this._onMouseDown=t2.bind(this),this._onMouseMove=e2.bind(this),this._interceptControlDown=o2.bind(this),this._interceptControlUp=l2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(av),this.update(),this.state=Xe.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=qn:s>Math.PI&&(s-=qn),l<-Math.PI?l+=qn:l>Math.PI&&(l-=qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Lc.origin.copy(this.object.position),Lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lc.direction))<ZA?this.object.lookAt(this.target):(sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lc.intersectPlane(sv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qh||this._lastTargetPosition.distanceToSquared(this.target)>qh?(this.dispatchEvent(av),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qn/60*this.autoRotateSpeed*t:qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new fe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function QA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function JA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function $A(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jv),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function t2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Rr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Rr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(rp)}function e2(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function n2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(rp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Jv))}function i2(r){this.enabled!==!1&&this._handleKeyDown(r)}function a2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(rp)}function s2(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function r2(r){this.enabled!==!1&&r.preventDefault()}function o2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kd=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,29],[29,31],[27,31],[28,30],[30,32],[28,32]],Pr={knee:{label:"膝関節の屈曲",triples:{left:[23,25,27],right:[24,26,28]}},hip:{label:"股関節の屈曲（近似）",triples:{left:[11,23,25],right:[12,24,26]}},elbow:{label:"肘関節の屈曲",triples:{left:[11,13,15],right:[12,14,16]}},abduction:{label:"股関節の外転／内転（概算）",triples:{left:[11,23,25],right:[12,24,26]}}},$v={knee:[0,180],hip:[0,180],elbow:[0,180],abduction:[-90,90]};function wn(r){return!!r&&Number.isFinite(r.x+r.y+r.z)&&r.visibility>=.5&&(r.presence??1)>=.5}function c2(r,t,i){if(![r,t,i].every(wn))return null;const s=[r.x-t.x,r.y-t.y,r.z-t.z],l=[i.x-t.x,i.y-t.y,i.z-t.z],c=Math.hypot(...s)*Math.hypot(...l);return c<1e-8?null:Math.acos(Math.max(-1,Math.min(1,s.reduce((h,d,m)=>h+d*l[m],0)/c)))*180/Math.PI}const rv=(r,t)=>({x:(r.x+t.x)/2,y:(r.y+t.y)/2,z:(r.z+t.z)/2}),Yh=(r,t)=>({x:r.x-t.x,y:r.y-t.y,z:r.z-t.z}),u2=(r,t)=>r.x*t.x+r.y*t.y+r.z*t.z,ov=(r,t)=>({x:r.y*t.z-r.z*t.y,y:r.z*t.x-r.x*t.z,z:r.x*t.y-r.y*t.x}),Io=r=>{const t=Math.hypot(r.x,r.y,r.z);return t<1e-8?null:{x:r.x/t,y:r.y/t,z:r.z/t}};function f2(r,t){if(!(r!=null&&r.world))return null;const[i,s,l,c,h,d]=[11,12,23,24,25,26].map(M=>r.world[M]);if(![i,s,l,c,h,d].every(wn))return null;const m=Io(Yh(rv(i,s),rv(l,c))),p=Io(Yh(c,l));if(!m||!p)return null;const _=Io(ov(m,p));if(!_)return null;const g=Io(ov(_,m));if(!g)return null;const E=Io(Yh(t==="left"?h:d,t==="left"?l:c));if(!E)return null;const b=u2(E,g)*(t==="left"?-1:1);return Math.asin(Math.max(-1,Math.min(1,b)))*180/Math.PI}function Yc(r,t,i){if(t==="abduction")return f2(r,i);if(!(r!=null&&r.world))return null;const[s,l,c]=Pr[t].triples[i].map(d=>r.world[d]);if(!s||!l||!c)return null;const h=c2(s,l,c);return h===null?null:180-h}function h2(r,t){return r!=null&&r.frames.length?r.frames[Math.min(r.frames.length-1,Math.max(0,Math.round(t*r.fps)))]??null:null}function d2(r){return r.map((t,i)=>{var s;return{...t,world:((s=t.world)==null?void 0:s.map((l,c)=>{var m,p,_,g;if(!wn(l))return l;const d=[(p=(m=r[i-1])==null?void 0:m.world)==null?void 0:p[c],l,(g=(_=r[i+1])==null?void 0:_.world)==null?void 0:g[c]].filter(x=>wn(x));return{...l,x:d.reduce((x,y)=>x+y.x,0)/d.length,y:d.reduce((x,y)=>x+y.y,0)/d.length,z:d.reduce((x,y)=>x+y.z,0)/d.length}}))??null}})}function tx(r){const t=[11,12,13,14,15,16,23,24,25,26,27,28];return r!=null&&r.landmarks?t.reduce((i,s)=>i+r.landmarks[s].visibility,0)/t.length:0}function p2(r){const t=[];for(const c of r){if(!c.world||!c.landmarks)continue;const[h,d,m,p]=[11,12,23,24].map(M=>c.landmarks[M]),[_,g,x,y]=[11,12,23,24].map(M=>c.world[M]);if(![h,d,m,p].every(wn)||![_,g,x,y].every(wn))continue;const E=Math.hypot((h.x+d.x)/2-(m.x+p.x)/2,(h.y+d.y)/2-(m.y+p.y)/2),b=Math.hypot((_.x+g.x)/2-(x.x+y.x)/2,(_.y+g.y)/2-(x.y+y.y)/2,(_.z+g.z)/2-(x.z+y.z)/2);E>1e-4&&b>1e-4&&t.push(b/E)}if(!t.length)return r.map(()=>null);t.sort((c,h)=>c-h);const i=t[Math.floor(t.length/2)];let s=null,l=null;return r.map(c=>{if(c.world&&c.landmarks){const[h,d]=[23,24].map(m=>c.landmarks[m]);if(wn(h)&&wn(d)){const m={x:(h.x+d.x)/2,y:(h.y+d.y)/2};s??(s=m),l={x:(m.x-s.x)*i,y:-(m.y-s.y)*i}}}return l})}const lv={knee:"knee_flexion_deg",hip:"hip_approx_deg",elbow:"elbow_flexion_deg",abduction:"hip_abduction_approx_deg"};function m2(r){const t=["knee","hip","elbow","abduction"];return[["time_seconds","pose_detected",r.engine==="rtmpose-motionbert"?"mean_2d_detection_score":"mean_visibility",...t.flatMap(s=>[`left_${lv[s]}`,`right_${lv[s]}`])].join(","),...r.frames.map(s=>[s.time.toFixed(4),s.world?1:0,tx(s).toFixed(4),...t.flatMap(l=>["left","right"].map(c=>{var h;return((h=Yc(s,l,c))==null?void 0:h.toFixed(2))??""}))].join(","))].join(`
`)}const g2={11:.042,12:.042,23:.046,24:.046,13:.032,14:.032,25:.04,26:.04,15:.026,16:.026,27:.03,28:.03},_2=r=>g2[r]??.019,v2={1:.03,3:.03,2:.024,4:.024,8:.045,10:.045,9:.035,11:.035},x2=r=>v2[r]??.015,y2=[5,6,7];function S2(r){var c;const t=ae.useRef(null),i=ae.useRef(r),[s,l]=ae.useState(!1);return i.current=r,ae.useEffect(()=>{const h=t.current;let d;try{d=new YA({antialias:!0,alpha:!0})}catch{l(!0);return}d.setPixelRatio(Math.min(devicePixelRatio,2)),d.setClearColor(1250847,1),h.appendChild(d.domElement);const m=new JM;m.fog=new tp(1250847,5,14);const p=new _i(36,1,.01,40);p.position.set(1.45,.85,3.05);const _=new KA(p,d.domElement);_.target.set(0,-.05,0),_.enableDamping=!0,_.minDistance=1.1,_.maxDistance=9,_.maxPolarAngle=Math.PI*.85,m.add(new sE(15263999,4014690,2.5));const g=new lE(16777215,3);g.position.set(3,5,4),m.add(g);const x=new uE(16,52,4276565,2369846);x.position.y=-1,m.add(x);const y=new On(new ap(.63,.635,80),new Ho({color:7958927,side:bi,transparent:!0,opacity:.6}));y.rotation.x=-Math.PI/2,y.position.y=-.995,m.add(y);const E=[new Cc({color:10787839,roughness:.4}),new Cc({color:12906385,roughness:.4}),new Cc({color:13422044,roughness:.45}),new Cc({color:16169576,emissive:7819296,roughness:.32})],b=E.map($=>{const Tt=$.clone();return Tt.transparent=!0,Tt.opacity=.3,Tt}),M=new Bo;m.add(M);const v=new Map,F=$=>{const Tt=Math.round($*1e3);let Lt=v.get(Tt);return Lt||(Lt=new qc($,16,14),v.set(Tt,Lt)),Lt},N=Array.from({length:33},($,Tt)=>{const Lt=new On(F(_2(Tt)),E[Tt%2===1?0:1]);return M.add(Lt),Lt}),w=new Map,V=$=>{const Tt=Math.round($*1e3);let Lt=w.get(Tt);return Lt||(Lt=new Wc($,$,1,12),w.set(Tt,Lt)),Lt},O=kd.map(([$,Tt],Lt)=>{if(y2.includes(Lt))return null;const Vt=new On(V(x2(Lt)),E[$%2===1&&Tt%2===1?0:$%2===0&&Tt%2===0?1:2]);return M.add(Vt),Vt}),B=new qc(.068,24,20),X=new On(B,E[2]);M.add(X);const L=new Wc(.023,.031,1,12),D=new On(L,E[2]);M.add(D);const k=new Fn;k.setAttribute("position",new vi(new Float32Array(12),3)),k.setAttribute("color",new vi(new Float32Array([...new _e(10787839).toArray(),...new _e(12906385).toArray(),...new _e(12906385).toArray(),...new _e(10787839).toArray()]),3)),k.setIndex([0,1,2,0,2,3]);const Q=new Ho({vertexColors:!0,transparent:!0,opacity:.5,side:bi}),ot=new On(k,Q);M.add(ot);const ft=new ip(.1,20),st=()=>new Ho({color:329226,transparent:!0,opacity:0}),P=[st(),st()].map($=>{const Tt=new On(ft,$);return Tt.rotation.x=-Math.PI/2,Tt.position.y=-.999,m.add(Tt),Tt}),Y=new Fn,W=new np({color:12906385,transparent:!0,opacity:.55}),yt=new Vv(Y,W);m.add(yt);let Et=0,z="",tt=null;const vt=()=>{const{width:$,height:Tt}=h.getBoundingClientRect();d.setSize($,Tt),p.aspect=$/Math.max(1,Tt),p.updateProjectionMatrix()},Ct=new ResizeObserver(vt);Ct.observe(h),vt();const Ot=$=>new J($.x,$.y,$.z),nt=()=>{var xe;Et=requestAnimationFrame(nt);const{frame:$,metric:Tt,view:Lt,trails:Vt,history:le}=i.current;if(Lt!==z){const Qt={free:[1.45,.85,3.05],front:[0,.15,3.3],side:[3.3,.15,0],top:[0,3.3,.01]};p.position.fromArray(Qt[Lt]??Qt.free),_.target.set(0,-.05,0),z=Lt}const se=$?((xe=i.current.skeletons)==null?void 0:xe.get($))??null:null,H=!!se&&se.joints.some(Boolean);if(M.visible=H,P.forEach(Qt=>Qt.visible=H),se&&H){const Qt=[Pr[Tt].triples.left[1],Pr[Tt].triples.right[1]];if(N.forEach((zt,Dt)=>{const Zt=Dt>=11?se.joints[Dt]:null;if(zt.visible=!!Zt,!Zt)return;zt.position.copy(Ot(Zt));const bt=Qt.includes(Dt)?3:Dt%2===1?0:1;zt.material=se.inferred[Dt]?b[bt]:E[bt],zt.scale.setScalar(Qt.includes(Dt)?1.45:1)}),O.forEach((zt,Dt)=>{if(!zt)return;const[Zt,bt]=kd[Dt],Xt=se.joints[Zt],He=se.joints[bt];if(zt.visible=!!Xt&&!!He,!Xt||!He)return;const ze=Ot(Xt),I=Ot(He),T=I.clone().sub(ze);zt.position.copy(ze.clone().add(I).multiplyScalar(.5)),zt.scale.y=T.length(),zt.quaternion.setFromUnitVectors(new J(0,1,0),T.normalize());const et=Zt%2===1&&bt%2===1?0:Zt%2===0&&bt%2===0?1:2;zt.material=se.inferred[Zt]||se.inferred[bt]?b[et]:E[et]}),X.visible=!!se.head,D.visible=!!se.head&&!!se.joints[11]&&!!se.joints[12],se.head&&(X.position.copy(Ot(se.head)),X.material=se.inferred[33]?b[2]:E[2]),D.visible){const zt=Ot(se.joints[11]).add(Ot(se.joints[12])).multiplyScalar(.5),Dt=Ot(se.head),Zt=Dt.clone().sub(zt);D.position.copy(zt.clone().add(Dt).multiplyScalar(.5)),D.scale.y=Zt.length(),D.quaternion.setFromUnitVectors(new J(0,1,0),Zt.normalize()),D.material=X.material}if(ot.visible=[11,12,23,24].every(zt=>!!se.joints[zt]),ot.visible){const zt=k.attributes.position;[11,12,24,23].forEach((Dt,Zt)=>{const bt=se.joints[Dt];zt.setXYZ(Zt,bt.x,bt.y,bt.z)}),zt.needsUpdate=!0}[[27,29],[28,30]].forEach(([zt,Dt],Zt)=>{const bt=se.joints[zt]??se.joints[Dt],Xt=P[Zt].material;if(!bt){Xt.opacity=0;return}P[Zt].position.set(bt.x,-.999,bt.z),Xt.opacity=Math.max(.04,Math.min(.42,.42-(bt.y+.995)*1.1))})}if(yt.visible=Vt,le!==tt){const Qt=[],zt=Dt=>{var Zt,bt;return((bt=(Zt=i.current.skeletons)==null?void 0:Zt.get(Dt))==null?void 0:bt.joints[28])??null};for(let Dt=1;Dt<le.length;Dt++){const Zt=zt(le[Dt-1]),bt=zt(le[Dt]);Zt&&bt&&Qt.push(Zt.x,Zt.y,Zt.z,bt.x,bt.y,bt.z)}Y.setAttribute("position",new $e(Qt,3)),tt=le}_.update(),d.render(m,p)};return nt(),()=>{cancelAnimationFrame(Et),Ct.disconnect(),_.dispose(),v.forEach($=>$.dispose()),w.forEach($=>$.dispose()),B.dispose(),L.dispose(),k.dispose(),Q.dispose(),ft.dispose(),P.forEach($=>$.material.dispose()),E.forEach($=>$.dispose()),b.forEach($=>$.dispose()),x.geometry.dispose(),x.material.dispose(),y.geometry.dispose(),y.material.dispose(),Y.dispose(),W.dispose(),d.dispose(),h.removeChild(d.domElement)}},[]),U.jsxs("div",{className:"scene-host",ref:t,children:[s&&U.jsx("p",{className:"scene-empty",children:"3D表示にはWebGL対応ブラウザが必要です。"}),!((c=r.skeletons)!=null&&c.get(r.frame))&&!s&&U.jsxs("div",{className:"scene-empty",children:[U.jsx("span",{className:"empty-orbit",children:"◎"}),U.jsx("p",{children:r.frame?"このフレームは姿勢を再現できません":"3Dモーションを待っています"}),U.jsx("small",{children:r.frame?"クリップ全体で人物を検出できていません":"動画を解析すると、ここに動きを再現します"})]})]})}function M2({analysis:r,selected:t,time:i,onSeek:s}){const l=ae.useRef(null),[c,h]=ae.useState(900);ae.useEffect(()=>{const O=l.current,B=new ResizeObserver(()=>h(Math.max(260,O.clientWidth-24)));return B.observe(O),()=>B.disconnect()},[]);const d=150,m=38,p=15,_=12,g=25,x=c-m-p,y=d-_-g,E=(r==null?void 0:r.duration)??3.45,[b,M]=$v[t],v=Array.from({length:5},(O,B)=>b+(M-b)*B/4),F=O=>m+O/E*x,N=O=>_+y-(O-b)/(M-b)*y,w=O=>{let B=!1;return(r==null?void 0:r.frames.map(X=>{const L=Yc(X,t,O);if(L===null)return B=!1,"";const D=B?"L":"M";return B=!0,`${D}${F(X.time).toFixed(1)},${N(L).toFixed(1)}`}).join(" "))??""},V=O=>{const B=O.currentTarget.getBoundingClientRect();s(Math.max(0,Math.min(E,((O.clientX-B.left)/B.width*c-m)/x*E)))};return U.jsxs("div",{className:"chart-wrap",ref:l,children:[U.jsxs("svg",{viewBox:`0 0 ${c} ${d}`,role:"img","aria-label":`${Pr[t].label}の時系列。グラフをクリックして再生位置を変更`,onPointerDown:V,children:[v.map(O=>U.jsxs("g",{children:[U.jsx("line",{x1:m,y1:N(O),x2:c-p,y2:N(O),stroke:"#2a2d38",strokeDasharray:"3 5"}),U.jsxs("text",{x:m-10,y:N(O)+4,textAnchor:"end",fill:"#787e90",fontSize:"10",children:[Math.round(O),"°"]})]},O)),Array.from({length:7},(O,B)=>E*B/6).map(O=>U.jsxs("text",{x:F(O),y:d-5,textAnchor:"middle",fill:"#787e90",fontSize:"10",children:[O.toFixed(1),"s"]},O)),U.jsx("path",{d:w("left"),fill:"none",stroke:"#aa9bf7",strokeWidth:"2.4"}),U.jsx("path",{d:w("right"),fill:"none",stroke:"#c1e990",strokeWidth:"2.4"}),r&&U.jsxs(U.Fragment,{children:[U.jsx("line",{x1:F(i),x2:F(i),y1:_,y2:_+y,stroke:"#f0f0f3",strokeWidth:"1"}),U.jsx("circle",{cx:F(i),cy:_,r:"3",fill:"#f0f0f3"})]})]}),!r&&U.jsx("span",{className:"chart-placeholder",children:"解析後に関節角度の変化が表示されます"})]})}function cv(r,t,i){return new Promise((s,l)=>{const c=setTimeout(()=>p(new Error("動画の読み込みがタイムアウトしました。H.264形式のMP4で再試行してください。")),15e3),h=()=>p(),d=()=>p(new Error("この動画形式をブラウザで読み込めません。H.264形式のMP4に変換してください。")),m=()=>p(new DOMException("中止しました","AbortError"));function p(_){clearTimeout(c),r.removeEventListener(t,h),r.removeEventListener("error",d),i.removeEventListener("abort",m),_?l(_):s()}r.addEventListener(t,h,{once:!0}),r.addEventListener("error",d,{once:!0}),i.addEventListener("abort",m,{once:!0}),i.aborted&&m()})}function E2(){if(typeof OffscreenCanvas>"u")return!1;const r=navigator.userAgent;if(/iPhone|iPad|iPod/.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)return!1;if(!(r.includes("Safari")&&!r.includes("Chrome")))return!0;const i=r.match(/Version\/(\d+).*Safari/);return!!i&&Number(i[1])>=17}function T2(r){const t=new Worker("/stride-motion-lab/pose-worker.js"),i=(s,l=[])=>new Promise((c,h)=>{const d=setTimeout(()=>g(new Error("推定処理がタイムアウトしました。ページを再読み込みして再試行してください。")),9e4),m=()=>g(new DOMException("中止しました","AbortError")),p=x=>g(new Error(x.message||"推定モデルを読み込めませんでした。npm run setup を実行してください。")),_=({data:x})=>x.type==="error"?g(new Error(x.message)):g(void 0,x);function g(x,y){clearTimeout(d),t.removeEventListener("message",_),t.removeEventListener("error",p),r.removeEventListener("abort",m),x?h(x):c(y)}t.addEventListener("message",_),t.addEventListener("error",p),r.addEventListener("abort",m,{once:!0}),r.aborted?m():t.postMessage(s,l)});return{init:()=>i({type:"init"}).then(()=>{}),frame:(s,l)=>i({type:"frame",bitmap:s,time:l},[s]).then(c=>c.frame),dispose:()=>t.terminate()}}const uv=r=>new Promise((t,i)=>{const s=document.querySelector(`script[src="${r}"]`);if(s!=null&&s.dataset.loaded){t();return}const l=s??document.createElement("script");l.addEventListener("load",()=>{l.dataset.loaded="1",t()},{once:!0}),l.addEventListener("error",()=>i(new Error("推定モデルを読み込めませんでした。ページを再読み込みして再試行してください。")),{once:!0}),s||(l.src=r,document.head.appendChild(l))});function fv(){const r="/stride-motion-lab/",t=window;return{async init(){t.exports??(t.exports={}),await uv(r+"mediapipe/vision_bundle.js"),await uv(r+"pose-core.js"),await t.PoseCore.init(t.exports,r)},async frame(i,s){const l=t.PoseCore.detect(i,s);return await new Promise(c=>setTimeout(c,0)),l},dispose(){var i;(i=t.PoseCore)==null||i.dispose()}}}async function b2(r,t,i,s,l){const c=document.createElement("video");c.muted=!0,c.preload="auto",c.playsInline=!0;let h=E2()?T2(s):fv();try{l(0,"推定モデルを準備しています");const d=cv(c,"loadeddata",s);if(c.src=r,await d,!Number.isFinite(c.duration)||c.duration<=0||c.duration>120)throw new Error("解析できる動画は2分以内です。短く切り出して読み込んでください。");try{await h.init()}catch(E){if(s.aborted||!/document/.test(String((E==null?void 0:E.message)??E)))throw E;h.dispose(),h=fv(),await h.init()}const m=c.duration,p=[],_=Math.ceil(m*i),g=document.createElement("canvas"),x=Math.min(1,1280/c.videoWidth);g.width=Math.round(c.videoWidth*x),g.height=Math.round(c.videoHeight*x);const y=g.getContext("2d");for(let E=0;E<_;E++){if(s.aborted)throw new DOMException("中止しました","AbortError");const b=E/i;if(Math.abs(c.currentTime-b)>1e-4){const v=cv(c,"seeked",s);c.currentTime=b,await v}y.drawImage(c,0,0,g.width,g.height);const M=await createImageBitmap(g);p.push(await h.frame(M,b)),l((E+1)/_,`姿勢を推定しています · ${E+1} / ${_} フレーム`)}if(!p.some(E=>E.world))throw new Error("人物を検出できませんでした。全身が大きく写った、明るい動画を使用してください。");return{version:1,name:t,duration:m,fps:i,frames:p,createdAt:new Date().toISOString()}}finally{h.dispose(),c.removeAttribute("src"),c.load()}}function hv(r,t,i){return new Promise((s,l)=>{const c=setTimeout(()=>p(new Error("動画の読み込みがタイムアウトしました。H.264形式のMP4で再試行してください。")),15e3),h=()=>p(),d=()=>p(new Error("この動画形式をブラウザで読み込めません。H.264形式のMP4に変換してください。")),m=()=>p(new DOMException("中止しました","AbortError"));function p(_){clearTimeout(c),r.removeEventListener(t,h),r.removeEventListener("error",d),i.removeEventListener("abort",m),_?l(_):s()}r.addEventListener(t,h,{once:!0}),r.addEventListener("error",d,{once:!0}),i.addEventListener("abort",m,{once:!0}),i.aborted&&m()})}async function A2(r,t,i,s,l,c){const h=document.createElement("video");h.muted=!0,h.preload="auto",h.playsInline=!0;const d=new Worker(new URL("/stride-motion-lab/assets/precision-worker-CNPDUDjq.js",import.meta.url),{type:"module"});let m=null;const p=()=>{m&&d.removeEventListener("message",m),d.terminate()},_=(g,x,y,E,b)=>new Promise((M,v)=>{const F=setTimeout(()=>O(new Error(b)),E),N=()=>O(new DOMException("中止しました","AbortError")),w=B=>O(new Error(B.message||"モデルの読み込みに失敗しました。ページを再読み込みして再試行してください。")),V=B=>{const X=B.data;if(X.type==="error"){O(new Error(X.message));return}y(X)&&O(void 0,X)};function O(B,X){clearTimeout(F),d.removeEventListener("message",V),d.removeEventListener("error",w),l.removeEventListener("abort",N),B?v(B):M(X)}d.addEventListener("message",V),d.addEventListener("error",w),l.addEventListener("abort",N,{once:!0}),l.aborted?N():d.postMessage(g,x)});try{c(0,"ブラウザ内でRTMPose + MotionBERTを準備しています（初回はモデルのダウンロードに時間がかかります）");const g=hv(h,"loadeddata",l);if(h.src=r,await g,!Number.isFinite(h.duration)||h.duration<=0||h.duration>120)throw new Error("解析できる動画は2分以内です。短く切り出して読み込んでください。");m=N=>{const w=N.data;w.type==="progress"&&(w.phase==="download"?c(w.fraction*.5,`モデルをダウンロードしています ${Math.round(w.fraction*100)}%（初回のみ・以降はブラウザにキャッシュされます）`):w.phase==="compile"&&c(.5,"モデルを読み込んでいます"))},d.addEventListener("message",m),await _({type:"init",poseSize:s},[],N=>N.type==="ready",6e5,"モデルの読み込みがタイムアウトしました。回線を確認して再試行してください。"),d.removeEventListener("message",m),m=null;const x=h.duration,y=Math.ceil(x*i),E=document.createElement("canvas");E.width=h.videoWidth,E.height=h.videoHeight;const b=E.getContext("2d");for(let N=0;N<y;N++){if(l.aborted)throw new DOMException("中止しました","AbortError");const w=N/i;if(Math.abs(h.currentTime-w)>1e-4){const O=hv(h,"seeked",l);h.currentTime=w,await O}b.drawImage(h,0,0);const V=await createImageBitmap(E);await _({type:"frame",bitmap:V,index:N},[V],O=>O.type==="frameDone"&&O.index===N,6e4,"推定処理がタイムアウトしました。ページを再読み込みして再試行してください。"),c(.55+(N+1)/y*.35,`RTMPose · 元解像度から人物を推定 ${N+1} / ${y}`)}m=N=>{const w=N.data;w.type==="progress"&&(w.phase==="motionbert"?c(.9+w.fraction*.07,"MotionBERT · 前後フレームから3Dを推定"):w.phase==="refine"&&c(.97+w.fraction*.03,"骨格拘束 · 固定長の骨格で2Dに合わせて解き直し"))},d.addEventListener("message",m);const F=(await _({type:"finalize",fps:i,name:t,duration:x,nativeFps:0},[],N=>N.type==="result",6e5,"3D推定の仕上げ処理がタイムアウトしました。")).result;if(!F.frames.some(N=>N.world))throw new Error("人物を検出できませんでした。全身が大きく写った、明るい動画を使用してください。");return c(1,"RTMPose + MotionBERT の解析が完了しました（ブラウザ内で処理）"),F}finally{p(),h.removeAttribute("src"),h.load()}}async function R2(r,t,i,s,l){const c=new FormData;if(c.append("fps",String(i)),l(0,"元解像度の動画をローカル推定エンジンへ読み込んでいます"),r==="/stride-motion-lab/sample/hurdle.mp4")c.append("sample","true");else{const m=await(await fetch(r,{signal:s})).blob();c.append("file",m,t)}let h;const d=()=>{h&&fetch(`/api/precision/jobs/${h}`,{method:"DELETE",headers:{"x-stride-client":"1"}}).catch(()=>{})};s.addEventListener("abort",d,{once:!0});try{const m=await fetch("/api/precision/jobs",{method:"POST",headers:{"x-stride-client":"1"},body:c,signal:s}),p=await m.json();if(!m.ok)throw new Error(p.detail??"解析を開始できませんでした");if(h=p.id,s.aborted)throw d(),new DOMException("中止しました","AbortError");const _=Date.now()+1800*1e3;for(;Date.now()<_;){const g=await fetch(`/api/precision/jobs/${h}`,{signal:s}),x=await g.json();if(!g.ok)throw new Error(x.detail??"解析状態を読み込めませんでした");if(l(x.progress,x.message),x.state==="complete")return x.result;if(x.state==="error")throw new Error(x.message);if(x.state==="cancelled")throw new DOMException("中止しました","AbortError");await new Promise((y,E)=>{const b=()=>{clearTimeout(M),E(new DOMException("中止しました","AbortError"))},M=setTimeout(()=>{s.removeEventListener("abort",b),y()},500);s.addEventListener("abort",b,{once:!0}),s.aborted&&b()})}throw d(),new Error("解析がタイムアウトしました。短い区間に切り出して再試行してください。")}finally{s.removeEventListener("abort",d)}}async function C2(r,t,i,s,l){const c=await fetch("/api/precision/health",{signal:s}).catch(()=>null);return c!=null&&c.ok&&(await c.json()).ready?R2(r,t,i,s,l):A2(r,t,i,"m",s,l)}const Nc=-1,Zh={11:Nc,12:Nc,23:Nc,24:Nc,13:11,15:13,14:12,16:14,25:23,27:25,29:27,31:29,26:24,28:26,30:28,32:30},dv=[11,12,23,24],Kh=[13,14,25,26,15,16,27,28,29,30,31,32],ys=33,Qh=(r,t)=>Math.hypot(r.x-t.x,r.y-t.y,r.z-t.z),Oc=r=>{const t=[...r].sort((i,s)=>i-s);return t[Math.floor(t.length/2)]},ex=r=>{const t=Math.hypot(r.x,r.y,r.z);return t>1e-6?{x:r.x/t,y:r.y/t,z:r.z/t}:null};function pv(r,t,i){if(!i)return null;const s={x:t.x-r.x,y:t.y-r.y,z:t.z-r.z},l=s.x*i.x+s.y*i.y+s.z*i.z;return ex({x:s.x-i.x*l,y:s.y-i.y*l,z:s.z-i.z*l})}const w2=(r,t)=>r&&t?Math.hypot((r.x+t.x)/2,(r.y+t.y)/2,(r.z+t.z)/2):null;function D2(r,t){const i=r.world;if(!i)return null;const s=i[23],l=i[24];if(!wn(s)||!wn(l))return null;const c={x:(s.x+l.x)/2,y:(s.y+l.y)/2,z:(s.z+l.z)/2};if(t===ys){if(r.head&&wn(r.head))return{x:r.head.x-c.x,y:-r.head.y+c.y,z:-r.head.z+c.z};if(!wn(i[7])||!wn(i[8]))return null;const d={x:(i[7].x+i[8].x)/2,y:(i[7].y+i[8].y)/2,z:(i[7].z+i[8].z)/2};return{x:d.x-c.x,y:-d.y+c.y,z:-d.z+c.z}}const h=i[t];return wn(h)?{x:h.x-c.x,y:-h.y+c.y,z:-h.z+c.z}:null}function U2(r){const t=[];r.forEach((l,c)=>{l&&t.push(c)});const i=r.map(l=>!l);return t.length?{filled:r.map((l,c)=>{if(l)return l;if(c<=t[0])return r[t[0]];if(c>=t[t.length-1])return r[t[t.length-1]];let h=0;for(;t[h]<c;)h++;const d=t[h-1],m=t[h],p=(c-d)/(m-d),_=r[d],g=r[m];return{x:_.x+(g.x-_.x)*p,y:_.y+(g.y-_.y)*p,z:_.z+(g.z-_.z)*p}}),inferred:i}:{filled:r.map(()=>null),inferred:i}}const L2=(r,t)=>{const i=Math.cos(t),s=Math.sin(t);return{x:r.x*i-r.z*s,y:r.y,z:r.x*s+r.z*i}};function N2(r,t){const i=r.get(23).filled,s=r.get(24).filled,l=t.map((g,x)=>{const y=i[x],E=s[x];return y&&E&&Math.hypot(y.x-E.x,y.z-E.z)>1e-6?Math.atan2(y.z-E.z,y.x-E.x):null}),c=[];if(l.forEach((g,x)=>{g!==null&&c.push(x)}),c.length<2)return;const h=new Array(t.length).fill(0);let d=l[c[0]];h[c[0]]=d;for(const g of c.slice(1)){let x=l[g]-d;for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;h[g]=h[c[c.indexOf(g)-1]]+x,d=l[g]}for(let g=0;g<t.length;g++){if(l[g]!==null)continue;if(g<c[0]){h[g]=h[c[0]];continue}if(g>c[c.length-1]){h[g]=h[c[c.length-1]];continue}let x=0;for(;c[x]<g;)x++;const y=c[x-1],E=c[x];h[g]=h[y]+(h[E]-h[y])*(g-y)/(E-y)}const m=t.slice(1).map((g,x)=>g.time-t[x].time).filter(g=>g>0).sort((g,x)=>g-x),p=m.length?m[m.length>>1]:1/30,_=Math.max(1,Math.round(.5/p));for(let g=0;g<t.length;g++){const x=Math.max(0,g-_),y=Math.min(t.length-1,g+_);let E=0,b=0,M=0,v=0,F=0;for(let O=x;O<=y;O++)E++,b+=O,M+=h[O],v+=O*O,F+=O*h[O];const N=E*v-b*b,w=N>0?(E*F-b*M)/N:0,V=-((M-w*b)/E+w*g);for(const O of r.values()){const B=O.filled[g];B&&(O.filled[g]=L2(B,V))}}}function O2(r,t=1,i,s=!0){const l=[...dv,...Kh,ys],c=new Map;for(const y of l)c.set(y,r.map(E=>D2(E,y)));const h=new Map;for(const y of[...Kh,ys]){const E=[];r.forEach((b,M)=>{const v=c.get(y)[M];if(!v)return;if(y===ys){const N=c.get(11)[M],w=c.get(12)[M];N&&w&&E.push(Qh(v,{x:(N.x+w.x)/2,y:(N.y+w.y)/2,z:(N.z+w.z)/2}));return}const F=c.get(Zh[y])[M];F&&E.push(Qh(v,F))}),E.length&&h.set(y,Oc(E))}const d=(y,E)=>y&&E?Qh(y,E):null,m={hips:Oc(r.map((y,E)=>d(c.get(23)[E],c.get(24)[E])).filter(y=>!!y)),shoulders:Oc(r.map((y,E)=>d(c.get(11)[E],c.get(12)[E])).filter(y=>!!y)),torso:Oc(r.map((y,E)=>w2(c.get(11)[E],c.get(12)[E])).filter(y=>!!y))},p=new Map;for(const y of l)p.set(y,U2(c.get(y)));s&&N2(p,r);const _=new Map;let g=null,x=null;return r.forEach((y,E)=>{const b=new Array(33).fill(null),M=new Array(34).fill(!0),v=new Map,F=i==null?void 0:i.get(y),N=(st,P,Y)=>{const W=p.get(st),yt=W.filled[E],Et=h.get(st);if(!yt||Et===void 0)return;const z=yt.x-P.x,tt=yt.y-P.y,vt=yt.z-P.z,Ct=Math.hypot(z,tt,vt);if(Ct<1e-6)return;const Ot=Et/Ct;v.set(st,{x:Y.x+z*Ot,y:Y.y+tt*Ot,z:Y.z+vt*Ot}),M[st]=W.inferred[E]},w=(st,P)=>({x:(st.x+P.x)/2,y:(st.y+P.y)/2,z:(st.z+P.z)/2}),V=p.get(11).filled[E],O=p.get(12).filled[E],B=p.get(23).filled[E],X=p.get(24).filled[E];if(V&&O&&B&&X&&m.torso){const st=ex(w(V,O)),P=pv(B,X,st)??g,Y=pv(V,O,st)??x;if(st&&P&&Y){g=P,x=Y;const W={x:st.x*m.torso,y:st.y*m.torso,z:st.z*m.torso},yt=(tt,vt,Ct)=>({x:tt.x*vt*Ct,y:tt.y*vt*Ct,z:tt.z*vt*Ct}),Et=yt(P,m.hips,.5),z=yt(Y,m.shoulders,.5);v.set(23,{x:-Et.x,y:-Et.y,z:-Et.z}),v.set(24,Et),v.set(11,{x:W.x-z.x,y:W.y-z.y,z:W.z-z.z}),v.set(12,{x:W.x+z.x,y:W.y+z.y,z:W.z+z.z});for(const tt of dv)M[tt]=p.get(tt).inferred[E]}}for(const st of Kh){const P=p.get(Zh[st]).filled[E],Y=v.get(Zh[st]);P&&Y&&N(st,P,Y)}const L=p.get(11).filled[E],D=p.get(12).filled[E],k=v.get(11),Q=v.get(12);L&&D&&k&&Q&&N(ys,w(L,D),w(k,Q));const ot=st=>({x:(st.x+((F==null?void 0:F.x)??0))*t,y:(st.y+((F==null?void 0:F.y)??0))*t,z:st.z*t});for(const[st,P]of v)st!==ys&&(b[st]=ot(P));const ft=v.get(ys);_.set(y,{joints:b,head:ft?ot(ft):null,inferred:M})}),_}const Jh="/stride-motion-lab/sample/hurdle.mp4",P2="/stride-motion-lab/sample/poster.jpg",z2="/stride-motion-lab/sample/analysis.json",I2="/stride-motion-lab/sample/analysis-precision.json";var _v;const mv=typeof window<"u"&&!!((_v=window.matchMedia)!=null&&_v.call(window,"(pointer: coarse)").matches),$h=r=>r===null?"—":Math.round(r).toString();function gv(r,t,i){const s=URL.createObjectURL(new Blob([r],{type:i})),l=document.createElement("a");l.href=s,l.download=t,l.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function B2(){var ce;const[r,t]=ae.useState(mv?"mediapipe":"rtmpose-motionbert"),i=ae.useRef({}),[s,l]=ae.useState(""),[c,h]=ae.useState(""),[d,m]=ae.useState(0),[p,_]=ae.useState({width:1280,height:720}),[g,x]=ae.useState(null),[y,E]=ae.useState(0),[b,M]=ae.useState(!1),[v,F]=ae.useState(.5),[N,w]=ae.useState(!1),[V,O]=ae.useState(0),[B,X]=ae.useState(""),[L,D]=ae.useState(""),[k,Q]=ae.useState("knee"),[ot,ft]=ae.useState("free"),[st,P]=ae.useState(!0),[Y,W]=ae.useState(!0),[yt,Et]=ae.useState(!1),[z,tt]=ae.useState(30),[vt,Ct]=ae.useState(!1),[Ot,nt]=ae.useState(!1),[$,Tt]=ae.useState(!1),[Lt,Vt]=ae.useState(!1),[le,se]=ae.useState(""),H=ae.useRef(null),xe=ae.useRef(null),Qt=ae.useRef(null),zt=ae.useRef(null),Dt=ae.useRef(null),Zt=ae.useRef(0),bt=ae.useMemo(()=>g?{...g,frames:Y?d2(g.frames):g.frames}:null,[g,Y]),Xt=h2(bt,y),He=ae.useMemo(()=>(bt==null?void 0:bt.frames.filter(R=>R.time<=y&&R.time>y-.5))??[],[bt,y]),ze=ae.useMemo(()=>{if(!vt||!bt)return null;const R=p2(bt.frames),ct=new Map;return bt.frames.forEach((Rt,Ut)=>{R[Ut]&&ct.set(Rt,R[Ut])}),ct},[vt,bt]),I=ae.useMemo(()=>bt?O2(bt.frames,bt.displayScale,ze,!vt):null,[bt,ze,vt]),T=(g==null?void 0:g.frames.filter(R=>R.world).length)??0,et=tx(Xt),pt=(g==null?void 0:g.engine)==="rtmpose-motionbert",At=pt?String(((ce=g==null?void 0:g.method)==null?void 0:ce.pose2d)??"").includes("client-side"):!0;ae.useEffect(()=>{},[]),ae.useEffect(()=>()=>{var R;(R=zt.current)==null||R.abort(),Dt.current&&URL.revokeObjectURL(Dt.current)},[]),ae.useEffect(()=>{H.current&&(H.current.playbackRate=v)},[v,s]),ae.useEffect(()=>{let R;const ct=()=>{H.current&&!H.current.paused&&E(H.current.currentTime),R=requestAnimationFrame(ct)};return R=requestAnimationFrame(ct),()=>cancelAnimationFrame(R)},[]),ae.useEffect(()=>{const R=xe.current;if(!R)return;const ct=R.getContext("2d");if(ct.clearRect(0,0,R.width,R.height),!st||!(Xt!=null&&Xt.landmarks))return;const Rt=Xt.landmarks;ct.lineWidth=3,ct.lineCap="round",kd.forEach(([Ut,xt])=>{!wn(Rt[Ut])||!wn(Rt[xt])||(ct.strokeStyle=Ut%2?"#b5a3ff":"#c3f291",ct.beginPath(),ct.moveTo(Rt[Ut].x*R.width,Rt[Ut].y*R.height),ct.lineTo(Rt[xt].x*R.width,Rt[xt].y*R.height),ct.stroke())}),Rt.forEach((Ut,xt)=>{xt<11||!wn(Ut)||(ct.fillStyle=xt%2?"#c7baff":"#d4ffa7",ct.beginPath(),ct.arc(Ut.x*R.width,Ut.y*R.height,4,0,Math.PI*2),ct.fill())})},[Xt,st,p]);const dt=R=>{const ct=Math.max(0,Math.min(d,R));H.current&&(H.current.currentTime=ct),E(ct)},te=()=>{const R=H.current;R&&(R.paused?(R.ended&&dt(0),R.play().catch(()=>D("動画を再生できません。別形式のMP4をお試しください。"))):R.pause())},Pt=(R,ct)=>{var Rt,Ut;Zt.current++,(Rt=zt.current)==null||Rt.abort(),(Ut=H.current)==null||Ut.pause(),w(!1),l(R),h(ct),x(null),i.current={},E(0),M(!1),D(""),se(""),m(0)},Kt=R=>{if(!R.type.startsWith("video/")&&!/\.(mp4|mov|webm|m4v)$/i.test(R.name)){D("MP4、MOV、WebM形式の動画を選んでください。");return}if(R.size>500*1024*1024){D("動画は500MB以下にしてください。");return}Dt.current&&URL.revokeObjectURL(Dt.current),Dt.current=URL.createObjectURL(R),Pt(Dt.current,R.name)},Jt=async R=>{if(Zt.current++,t(R),D(""),se(""),x(i.current[R]??null),s===Jh&&!i.current[R]){const ct=Zt.current;try{const Ut=await(await fetch(R==="mediapipe"?z2:I2)).json();ct===Zt.current&&Ut.version===1&&(i.current[R]=Ut,x(Ut))}catch{}}},wt=async()=>{var Rt,Ut;if(N)return;Zt.current++;const R=Zt.current;(Rt=H.current)==null||Rt.pause();const ct=new AbortController;zt.current=ct,w(!0),O(0),D(""),se("");try{const xt=await(r==="rtmpose-motionbert"?C2:b2)(s,c,z,ct.signal,(gt,jt)=>{R===Zt.current&&(O(gt),X(jt))});R===Zt.current&&(x(xt),i.current[r]=xt,dt(((Ut=xt.frames.find(gt=>gt.world))==null?void 0:Ut.time)??0),se(`${xt.frames.filter(gt=>gt.world).length} / ${xt.frames.length} フレームの姿勢を推定しました`))}catch(xt){R===Zt.current&&(xt instanceof DOMException&&xt.name==="AbortError"?se("解析を中止しました"):D(xt instanceof Error?xt.message:String(xt)))}finally{R===Zt.current&&w(!1)}},Nt=R=>{if(!g)return;const ct=bt,Rt=c.replace(/\.[^.]+$/,"");R==="csv"?gv("\uFEFF"+m2(ct),`${Rt}-angles${Y?"-smoothed":""}.csv`,"text/csv;charset=utf-8"):gv(JSON.stringify({...g,coordinates:pt?"MotionBERT H36M17: hip-centered, relative units, x right / y down / z away; displayScale is visualization only":"MediaPipe world landmarks: hip-centered, meters, x right / y down / z away from camera",smoothing:"none (raw inference)"},null,2),`${Rt}-3d.json`,"application/json"),Tt(!1)},kt=ae.useMemo(()=>{if(!bt)return null;const R=bt.frames.map(ct=>Yc(ct,k,"left")).filter(ct=>ct!==null);return R.length?{min:Math.min(...R),max:Math.max(...R)}:null},[bt,k]),[It,Bt]=$v[k];return U.jsxs("div",{className:"app-shell",children:[U.jsxs("aside",{className:"sidebar",children:[U.jsxs("a",{className:"brand",href:"#","aria-label":"STRIDE ホーム",children:[U.jsx(rc,{size:25,strokeWidth:2.5}),U.jsxs("span",{children:["STRIDE",U.jsx("span",{className:"brand-dot",children:"."})]})]}),U.jsx("div",{className:"workspace-label",children:"MOTION WORKSPACE"}),U.jsxs("button",{className:"nav-item active",onClick:()=>{var R;return(R=document.getElementById("workspace"))==null?void 0:R.scrollIntoView({behavior:"smooth"})},children:[U.jsx(Q_,{size:18}),"モーション解析",U.jsx("span",{className:"nav-indicator"})]}),U.jsxs("button",{className:"nav-item",onClick:()=>{var R;return(R=Qt.current)==null?void 0:R.click()},children:[U.jsx(CS,{size:18}),"動画を読み込む"]}),U.jsxs("button",{className:"nav-item",onClick:()=>nt(!0),children:[U.jsx(dh,{size:18}),"使い方ガイド"]}),U.jsx("div",{className:"sidebar-divider"}),!1,U.jsxs("div",{className:"sidebar-bottom",children:[U.jsxs("div",{className:"local-badge",children:[U.jsx("span",{}),U.jsxs("span",{children:[At?"ブラウザ内で解析":"共有サーバーで解析",U.jsx("small",{children:At?"動画はどこにも送信されません":"RTMPoseは解析後に動画を削除"})]}),U.jsx(t0,{size:17})]}),U.jsxs("div",{className:"profile",children:[U.jsx("span",{className:"avatar",children:"S"}),U.jsxs("span",{children:["Personal workspace",U.jsx("small",{children:"3D Motion Lab"})]})]})]})]}),U.jsxs("main",{id:"workspace",children:[U.jsxs("header",{className:"topbar",children:[U.jsxs("div",{className:"breadcrumb",children:["ワークスペース ",U.jsx("span",{children:"/"})," ",U.jsx("strong",{children:"モーション解析"})]}),U.jsx("span",{className:"version-badge",children:"BETA 1.0"}),U.jsx("button",{className:"icon-button","aria-label":"使い方",onClick:()=>nt(!0),children:U.jsx(dh,{size:18})})]}),U.jsxs("div",{className:"main-content",children:[U.jsxs("div",{className:"page-heading",children:[U.jsxs("div",{children:[U.jsxs("div",{className:"eyebrow",children:[U.jsx("span",{})," VIDEO TO MOVEMENT"]}),U.jsx("h1",{children:"動きを、立体で読み解く。"}),U.jsx("p",{children:"動画から身体の動きを3Dで再現。見えなかった一瞬を、解析する。"})]}),U.jsxs("button",{className:"primary upload-top",onClick:()=>{var R;return(R=Qt.current)==null?void 0:R.click()},disabled:N,children:[U.jsx(LS,{size:17}),"動画をアップロード"]})]}),U.jsx("input",{ref:Qt,type:"file",accept:"video/*,.mov,.mp4,.webm",hidden:!0,onChange:R=>{var ct;(ct=R.target.files)!=null&&ct[0]&&Kt(R.target.files[0]),R.target.value=""}}),U.jsxs("div",{className:"workflow",children:[U.jsxs("span",{className:`workflow-step ${s?"complete":"current"}`,children:[U.jsx("span",{children:s?U.jsx(hh,{size:12}):1}),"動画をアップロード"]}),U.jsx("div",{}),U.jsxs("span",{className:`workflow-step ${g?"complete":s?"current":""}`,children:[U.jsx("span",{children:g?U.jsx(hh,{size:12}):2}),"3D姿勢を推定"]}),U.jsx("div",{}),U.jsxs("span",{className:`workflow-step ${g?"current":""}`,children:[U.jsx("span",{children:"3"}),"動作を解析"]}),U.jsxs("span",{className:"workflow-note",children:[U.jsx(t0,{size:13}),At?"動画は送信されません":"動画は解析後に削除"]})]}),U.jsxs("section",{className:"engine-bar","aria-label":"推定方式を選択",children:[U.jsxs("div",{children:[U.jsx("span",{className:"eyebrow",children:"POSE ENGINE"}),U.jsx("strong",{children:"同じ動きを、モデルで見比べる"})]}),U.jsxs("div",{className:"engine-options",children:[U.jsxs("button",{className:r==="rtmpose-motionbert"?"selected":"",disabled:N,onClick:()=>void Jt("rtmpose-motionbert"),children:[U.jsx(e0,{size:14}),U.jsxs("span",{children:["RTMPose + MotionBERT",U.jsx("small",{children:"人物を切り出し · 前後フレームで3D推定"})]})]}),U.jsxs("button",{className:r==="mediapipe"?"selected":"",disabled:N,onClick:()=>void Jt("mediapipe"),children:[U.jsx(rc,{size:14}),U.jsxs("span",{children:["MediaPipe",U.jsx("small",{children:"従来の推定と比較"})]})]})]}),U.jsxs("p",{children:[r==="rtmpose-motionbert"?`${At?"ブラウザ内で処理":"共有の推定サーバーで処理"}。2D検出26点 → 3D骨格17点。`:"ブラウザ内で処理。33点を各フレームから推定。",pt&&(g!=null&&g.sourceWidth)?` 入力 ${g.sourceWidth} × ${g.sourceHeight}`:"",r==="rtmpose-motionbert"?" 初回のみモデル約140MB（MediaPipeは約12MB）のダウンロードが必要です。2回目以降はブラウザに保存され、解析にかかる時間はMediaPipeと同程度です。":""]})]}),U.jsxs("section",{className:`source-bar ${Lt?"dragging":""}`,onDragOver:R=>{R.preventDefault(),Vt(!0)},onDragLeave:()=>Vt(!1),onDrop:R=>{R.preventDefault(),Vt(!1),!N&&R.dataTransfer.files[0]&&Kt(R.dataTransfer.files[0])},children:[U.jsxs("div",{className:"file-thumbnail",children:[s===Jh?U.jsx("img",{src:P2,alt:"ハードル走の動画サムネイル"}):U.jsx(AS,{size:25}),U.jsx("span",{children:U.jsx($_,{size:9,fill:"currentColor"})})]}),U.jsxs("div",{className:"file-info",children:[U.jsx("strong",{children:c||"動画が選択されていません"}),U.jsxs("span",{children:[s?d?`${d.toFixed(2)} 秒`:"読み込み中":"動画をアップロードしてください",U.jsx("b",{children:"·"}),s===Jh?"ハードル走 / 参考動画":s?"アップロード動画":"MP4 / MOV / WebM",U.jsx("b",{children:"·"}),At?"ブラウザ内で処理":"RTMPoseは共有サーバーで処理"]})]}),U.jsxs("button",{className:"text-button replace",onClick:()=>{var R;return(R=Qt.current)==null?void 0:R.click()},disabled:N,children:[U.jsx(zS,{size:14}),"変更"]}),U.jsx("div",{className:"source-divider"}),U.jsxs("label",{className:"fps-select",children:[U.jsx("span",{children:"解析フレームレート"}),U.jsxs("select",{value:z,onChange:R=>tt(Number(R.target.value)),disabled:N,children:[U.jsx("option",{value:15,children:"15 fps"}),U.jsx("option",{value:30,children:"30 fps"}),U.jsx("option",{value:60,children:"60 fps"})]})]}),U.jsxs("button",{className:"primary analyze-button",onClick:wt,disabled:N||!d||d>120,children:[N?U.jsx(J_,{size:16,className:"spin"}):U.jsx(e0,{size:16})," ",N?"解析中…":g?"再解析する":"3D推定を開始",!N&&U.jsx(oc,{size:15})]})]}),N&&U.jsxs("div",{className:"progress-panel",role:"status",children:[U.jsxs("div",{children:[U.jsx(J_,{size:15,className:"spin"}),B,U.jsxs("strong",{children:[Math.round(V*100),"%"]}),U.jsx("button",{onClick:()=>{var R;return(R=zt.current)==null?void 0:R.abort()},children:"中止"})]}),U.jsx("progress",{max:1,value:V})]}),L&&U.jsxs("div",{className:"message error",role:"alert",children:[L,U.jsx("button",{"aria-label":"エラーを閉じる",onClick:()=>D(""),children:U.jsx(ph,{size:15})})]}),le&&U.jsxs("div",{className:"message success",role:"status",children:[U.jsx(hh,{size:15}),le,U.jsx("button",{"aria-label":"通知を閉じる",onClick:()=>se(""),children:U.jsx(ph,{size:15})})]}),U.jsxs("div",{className:"analysis-layout",children:[U.jsxs("div",{className:"visuals",children:[U.jsxs("section",{className:"panel video-panel",children:[U.jsxs("div",{className:"panel-header",children:[U.jsxs("h2",{children:[U.jsx(RS,{size:16}),"オリジナル動画"]}),U.jsx("span",{className:"panel-tag",children:"SOURCE"})]}),U.jsxs("div",{className:"video-stage",children:[U.jsxs("div",{className:"video-inner",children:[U.jsx("video",{ref:H,src:s||void 0,playsInline:!0,muted:!0,preload:"auto",onLoadedMetadata:R=>{const ct=R.currentTarget;m(ct.duration),ct.playbackRate=v,_({width:ct.videoWidth,height:ct.videoHeight})},onTimeUpdate:R=>E(R.currentTarget.currentTime),onSeeked:R=>E(R.currentTarget.currentTime),onPlay:()=>M(!0),onPause:()=>M(!1),onEnded:()=>M(!1),onError:()=>D("動画を読み込めません。MOVが再生できない場合はH.264形式のMP4に変換してください。")}),U.jsx("canvas",{ref:xe,className:"pose-overlay",width:p.width,height:p.height})]}),U.jsxs("span",{className:"stage-label",children:[U.jsx("span",{className:g?"green-dot":"gray-dot"}),g?"POSE OVERLAY":"ORIGINAL VIDEO"]}),U.jsx("button",{className:"stage-expand","aria-label":"動画を全画面表示",onClick:()=>{var R;return(R=H.current)==null?void 0:R.requestFullscreen().catch(()=>se("このブラウザでは全画面表示を利用できません"))},children:U.jsx(DS,{size:15})}),U.jsxs("span",{className:"time-badge",children:[y.toFixed(2)," s"]})]}),U.jsxs("div",{className:"panel-footer",children:[U.jsxs("span",{children:[U.jsx("span",{className:"legend-dot purple"}),"左半身",U.jsx("span",{className:"legend-dot lime"}),"右半身"]}),U.jsxs("label",{className:"toggle-label",children:["骨格を重ねる",U.jsx("input",{type:"checkbox",checked:st,onChange:R=>P(R.target.checked)}),U.jsx("i",{})]})]})]}),U.jsxs("section",{className:"panel model-panel",children:[U.jsxs("div",{className:"panel-header",children:[U.jsxs("h2",{children:[U.jsx(Q_,{size:16}),"3Dモーション"]}),U.jsx("span",{className:"panel-tag accent",children:vt?"GROUND TRACKED":"HIP-CENTERED"})]}),U.jsxs("div",{className:"model-stage",children:[U.jsx(S2,{frame:Xt,metric:k,view:ot,trails:yt,history:He,skeletons:I}),U.jsx("div",{className:"view-switch",children:[["free","自由"],["front","正面"],["side","側面"],["top","上面"]].map(([R,ct])=>U.jsx("button",{className:ot===R?"selected":"",onClick:()=>ft(R),children:ct},R))}),U.jsxs("span",{className:"axis-label",children:[U.jsx("span",{children:"Y"}),U.jsx("span",{children:"Z"}),U.jsx("span",{children:"X"})]}),U.jsx("span",{className:"model-hint",children:mv?"指でドラッグして回転 · ピンチで拡大":"ドラッグで回転 · スクロールで拡大"})]}),U.jsxs("div",{className:"panel-footer",children:[U.jsxs("span",{children:[U.jsx(bS,{size:13}),vt?"固定カメラの移動を表示（概算）":"腰中心の相対座標"]}),U.jsxs("label",{className:"toggle-label",children:["足首の軌跡",U.jsx("input",{type:"checkbox",checked:yt,onChange:R=>Et(R.target.checked)}),U.jsx("i",{})]}),U.jsxs("label",{className:"toggle-label",title:"カメラが動いていない動画でのみ有効にしてください。追いかけ動画で使うと、カメラの動きを身体の移動として誤表示します。",children:["固定カメラで撮影",U.jsx("input",{type:"checkbox",checked:vt,onChange:R=>Ct(R.target.checked)}),U.jsx("i",{})]})]})]}),U.jsxs("section",{className:"playback panel",children:[U.jsxs("div",{className:"transport",children:[U.jsx("button",{className:"icon-button","aria-label":"先頭に戻る",onClick:()=>dt(0),children:U.jsx(PS,{size:16})}),U.jsx("button",{className:"icon-button","aria-label":"1フレーム戻る",onClick:()=>{var R;(R=H.current)==null||R.pause(),dt(y-1/((g==null?void 0:g.fps)??z))},children:U.jsx(ES,{size:15})}),U.jsx("button",{className:"play-button","aria-label":b?"一時停止":"再生",onClick:te,children:b?U.jsx(US,{size:17,fill:"currentColor"}):U.jsx($_,{size:17,fill:"currentColor"})}),U.jsx("button",{className:"icon-button","aria-label":"1フレーム進む",onClick:()=>{var R;(R=H.current)==null||R.pause(),dt(y+1/((g==null?void 0:g.fps)??z))},children:U.jsx(oc,{size:15})}),U.jsxs("span",{className:"transport-time",children:[y.toFixed(2),U.jsxs("small",{children:[" / ",d.toFixed(2)," s"]})]}),U.jsx("label",{className:"speed-label",children:U.jsxs("select",{"aria-label":"再生速度",value:v,onChange:R=>F(Number(R.target.value)),children:[U.jsx("option",{value:.25,children:"0.25×"}),U.jsx("option",{value:.5,children:"0.5×"}),U.jsx("option",{value:1,children:"1×"}),U.jsx("option",{value:2,children:"2×"})]})}),U.jsxs("span",{className:"sync-label",children:[U.jsx("span",{}),"同期再生"]})]}),U.jsx("input",{className:"timeline",type:"range",min:0,max:d||1,step:.001,value:y,onChange:R=>dt(Number(R.target.value)),"aria-label":"再生位置",style:{"--progress":`${y/(d||1)*100}%`}}),U.jsxs("div",{className:"timeline-ticks",children:[U.jsx("span",{children:"0.00s"}),U.jsxs("span",{children:[(d*.25).toFixed(2),"s"]}),U.jsxs("span",{children:[(d*.5).toFixed(2),"s"]}),U.jsxs("span",{children:[(d*.75).toFixed(2),"s"]}),U.jsxs("span",{children:[d.toFixed(2),"s"]})]})]}),U.jsxs("section",{className:"panel chart-panel",children:[U.jsxs("div",{className:"panel-header",children:[U.jsxs("h2",{children:[U.jsx(rc,{size:16}),"関節角度の変化"]}),U.jsxs("div",{className:"chart-legend",children:[U.jsxs("span",{children:[U.jsx("i",{className:"legend-dot purple"}),"左"]}),U.jsxs("span",{children:[U.jsx("i",{className:"legend-dot lime"}),"右"]}),U.jsx("span",{className:"chart-unit",children:k==="abduction"?"外転(+) / 内転(−) / °":"屈曲角度 / °"})]})]}),U.jsxs("div",{className:"chart-tabs",children:[Object.keys(Pr).map(R=>U.jsx("button",{className:k===R?"selected":"",onClick:()=>Q(R),children:R==="knee"?"膝関節":R==="hip"?"股関節":R==="elbow"?"肘関節":"股関節（外転）"},R)),U.jsx("span",{children:"グラフをクリックして、その瞬間へ"})]}),U.jsx(M2,{analysis:bt,selected:k,time:y,onSeek:dt})]})]}),U.jsxs("aside",{className:"inspector",children:[U.jsxs("section",{className:"panel metrics-panel",children:[U.jsxs("div",{className:"panel-header",children:[U.jsxs("h2",{children:[U.jsx(NS,{size:16}),"動作インサイト"]}),U.jsx("span",{className:"live-dot"})]}),U.jsxs("div",{className:"inspector-content",children:[U.jsxs("div",{className:"current-frame",children:[U.jsx("span",{children:"CURRENT FRAME"}),U.jsxs("strong",{children:[y.toFixed(2),U.jsx("small",{children:"s"})]})]}),U.jsxs("div",{className:"joint-select",children:[U.jsx("label",{htmlFor:"joint",children:"注目する関節"}),U.jsx("select",{id:"joint",value:k,onChange:R=>Q(R.target.value),children:Object.entries(Pr).map(([R,ct])=>U.jsx("option",{value:R,children:ct.label},R))})]}),U.jsx("div",{className:"angle-values",children:["left","right"].map(R=>{const ct=Yc(Xt,k,R);return U.jsxs("div",{children:[U.jsxs("span",{children:[U.jsx("i",{className:`legend-dot ${R==="left"?"purple":"lime"}`}),R==="left"?"左":"右",k==="knee"?"膝":k==="hip"?"股関節":k==="elbow"?"肘":"股関節"]}),U.jsxs("strong",{className:R,children:[$h(ct),U.jsx("small",{children:"°"})]}),U.jsx("span",{className:"angle-caption",children:ct===null?"未検出 / 遮蔽":k==="abduction"?ct>=0?"外転（外側へ・概算）":"内転（内側へ・概算）":"屈曲角度"})]},R)})}),U.jsxs("div",{className:"range-summary",children:[U.jsxs("span",{children:["左側の可動範囲 ",U.jsx("small",{children:"全区間"})]}),U.jsx("strong",{children:kt?`${$h(kt.min)}° — ${$h(kt.max)}°`:"—"}),U.jsx("div",{children:U.jsx("i",{style:{left:`${(((kt==null?void 0:kt.min)??It)-It)/(Bt-It)*100}%`,width:`${(((kt==null?void 0:kt.max)??It)-((kt==null?void 0:kt.min)??It))/(Bt-It)*100}%`}})})]}),U.jsxs("div",{className:"confidence-section",children:[U.jsxs("div",{children:[U.jsx("span",{children:pt?"2D関節の検出スコア":"関節の見えやすさ"}),U.jsx("strong",{children:Xt!=null&&Xt.landmarks?`${Math.round(et*100)}%`:"—"})]}),U.jsx("div",{className:"confidence-bar",children:U.jsx("i",{style:{width:`${et*100}%`}})}),U.jsxs("p",{children:[Xt!=null&&Xt.landmarks?et>.8?"主要な関節が見えています":"遮蔽のある関節は角度を表示しません":g?"このフレームは人物を検出できませんでした":"解析後にフレームごとの値を表示します",U.jsx("br",{}),pt?"RTMPoseの2Dスコア平均。3Dの精度ではありません。":"モデルの visibility 平均。精度の保証値ではありません。"]})]}),U.jsxs("label",{className:"toggle-label smoothing",children:[U.jsxs("span",{children:[U.jsx(OS,{size:14}),"動きをなめらかにする"]}),U.jsx("input",{type:"checkbox",checked:Y,onChange:R=>W(R.target.checked)}),U.jsx("i",{})]})]})]}),U.jsxs("section",{className:"panel session-card",children:[U.jsxs("div",{className:"mini-heading",children:[U.jsx(wS,{size:15}),"解析サマリー"]}),U.jsxs("dl",{children:[U.jsxs("div",{children:[U.jsx("dt",{children:"推定点"}),U.jsx("dd",{children:pt?"26点（2D） / 17点（3D）":"33 ランドマーク"})]}),U.jsxs("div",{children:[U.jsx("dt",{children:"解析フレーム"}),U.jsx("dd",{children:g?`${T} / ${g.frames.length}`:"—"})]}),U.jsxs("div",{children:[U.jsx("dt",{children:"解析間隔"}),U.jsx("dd",{children:g?`${g.fps} fps`:"—"})]}),U.jsxs("div",{children:[U.jsx("dt",{children:"座標"}),U.jsx("dd",{children:pt?"腰中心・相対スケール":"腰中心・3D"})]})]}),U.jsxs("div",{className:"export-area",children:[U.jsxs("button",{className:"secondary export-button",disabled:!g,onClick:()=>Tt(!$),children:[U.jsx(MS,{size:15}),"解析データを出力",U.jsx(TS,{size:13})]}),$&&U.jsxs("div",{className:"export-menu",children:[U.jsx("button",{onClick:()=>Nt("csv"),children:"関節角度を CSV で保存"}),U.jsx("button",{onClick:()=>Nt("json"),children:"3D座標を JSON で保存"})]})]})]}),U.jsxs("div",{className:"info-note",children:[U.jsx(dh,{size:15}),U.jsxs("p",{children:["単眼動画からの推定です。カメラ移動や身体の遮蔽により誤差が生じます。移動距離・速度・筋力は算出しません。",U.jsxs("button",{onClick:()=>nt(!0),children:["解析について ",U.jsx(oc,{size:12})]})]})]})]})]}),U.jsxs("footer",{className:"page-footer",children:[U.jsxs("span",{children:[U.jsx(rc,{size:12})," STRIDE MOTION LAB"]}),U.jsx("span",{children:"ひとつの動画から、動きの理解を深める。"})]})]})]}),Ot&&U.jsx("div",{className:"modal-backdrop",onClick:()=>nt(!1),children:U.jsxs("section",{className:"help-modal",role:"dialog","aria-modal":"true","aria-label":"使い方と解析について",onClick:R=>R.stopPropagation(),children:[U.jsx("button",{className:"modal-close icon-button",onClick:()=>nt(!1),"aria-label":"ガイドを閉じる",children:U.jsx(ph,{size:19})}),U.jsx("div",{className:"eyebrow",children:"GETTING STARTED"}),U.jsx("h2",{children:"動作を、いろいろな角度から。"}),U.jsxs("ol",{children:[U.jsxs("li",{children:[U.jsx("strong",{children:"動画を選ぶ"}),U.jsx("p",{children:"2分・500MB以内の動画を読み込みます。全身が写った1人の動画を推奨します。付属のハードル動画でも試せます。"})]}),U.jsxs("li",{children:[U.jsx("strong",{children:"3D推定を開始"}),U.jsx("p",{children:"各フレームを端末内で解析します。15 / 30 / 60 fpsを選べます。複数人の場合は最初に大きく写った人物を追跡しますが、交差時には入れ替わる可能性があります。"})]}),U.jsxs("li",{children:[U.jsx("strong",{children:"同期再生で確認"}),U.jsx("p",{children:"動画と3D骨格、関節角度が連動します。スロー再生、コマ送り、グラフのクリックで気になる瞬間を確認できます。"})]})]}),U.jsxs("div",{className:"help-detail",children:[U.jsx("h3",{children:"数値と3D表示の読み方"}),U.jsx("p",{children:"膝・肘は3点間の角度から屈曲角を計算し、伸びた状態を0°とします。股関節（屈曲・近似）は肩・腰・膝を使う近似値で、外転や体幹の動きも含んだ1つの数値です。"}),U.jsx("p",{children:"「股関節（外転）」は肩・腰の位置から体幹基準の矢状面を近似し、大腿がその面からどれだけ横に外れているかを±90°の範囲で表す概算値です。前後の屈曲量に関わらず定義され、股関節が深く曲がっている局面でも数値は破綻しません。前後の屈曲成分自体は含みません。単一カメラのため肩と腰から近似した体幹の向きに基づいており、体幹が大きく前傾・回旋する局面では実際の骨盤の傾きとのずれが乗ります。肩・反対側の腰が遮蔽されているフレームは欠測になります。"}),U.jsx("p",{children:"3Dは腰中心の相対座標です。RTMPoseは26点の2D検出を行い、MotionBERTが前後最大243フレームから17点の3D骨格を推定します。この3D座標は未校正の相対スケールで、表示サイズの調整は関節角度に影響しません。MediaPipeとの切り替えで同じ時刻を比較できます。地面の格子は表示の目安で、実際の地面や跳躍高を測定してはいません。"}),U.jsx("p",{children:"3D表示は既定では腰を原点に固定するため、追いかけ動画・定点動画のどちらでも身体はその場で動いているように見えます。「固定カメラで撮影」を有効にすると、肩・腰の画面上の動きから横方向・上下方向の実際の移動を概算し、腰を原点に固定せず前後左右に動かします（奥行き方向の移動は推定していません）。この機能はカメラが動いていない動画専用です。追いかけ動画で有効にすると、カメラ自身の動きを身体の移動として誤表示します。足首の軌跡は、この設定に関わらず腰を基準にした相対的な動きです。"}),U.jsx("p",{children:"なめらか表示は前後1フレームの平均です。関節のvisibilityまたはRTMPoseの2Dスコアが0.5未満の角度は欠測です。MotionBERT入力の欠測は一時補間しますが、該当点の低スコアは出力に引き継ぎます。CSVは表示中の補正設定、JSONは生の推定座標を出力します。"}),U.jsx("p",{children:"MediaPipeはブラウザ内で処理し、動画を送信しません。RTMPose + MotionBERTは、対応するサーバーが用意されていればそこで処理し、なければMediaPipeと同じくブラウザ内で処理します（このサイトでは通常ブラウザ内で処理します）。サーバーを使った場合、アップロードした動画は解析の完了・中止・エラー時に削除し、それ以外の目的には使用しません。個別に読み込んだ動画と解析結果は再読み込みで消えるため、必要な結果は出力してください。"}),U.jsx("a",{href:"https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker",target:"_blank",rel:"noreferrer",children:"MediaPipe Pose Landmarker 公式ドキュメント ↗"})]}),U.jsxs("button",{className:"primary",onClick:()=>nt(!1),children:["解析をはじめる ",U.jsx(oc,{size:15})]})]})})]})}vS.createRoot(document.getElementById("root")).render(U.jsx(uS.StrictMode,{children:U.jsx(B2,{})}));

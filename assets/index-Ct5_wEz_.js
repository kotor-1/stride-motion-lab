(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function rv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var nh={exports:{}},Co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function Yy(){if(P_)return Co;P_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Co.Fragment=t,Co.jsx=i,Co.jsxs=i,Co}var z_;function Zy(){return z_||(z_=1,nh.exports=Yy()),nh.exports}var C=Zy(),ih={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function Ky(){if(I_)return he;I_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function _(P,nt,Mt){this.props=P,this.context=nt,this.refs=M,this.updater=Mt||E}_.prototype.isReactComponent={},_.prototype.setState=function(P,nt){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,nt,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function H(){}H.prototype=_.prototype;function L(P,nt,Mt){this.props=P,this.context=nt,this.refs=M,this.updater=Mt||E}var D=L.prototype=new H;D.constructor=L,b(D,_.prototype),D.isPureReactComponent=!0;var V=Array.isArray;function N(){}var I={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function U(P,nt,Mt){var rt=Mt.ref;return{$$typeof:r,type:P,key:nt,ref:rt!==void 0?rt:null,props:Mt}}function w(P,nt){return U(P.type,nt,P.props)}function k(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function J(P){var nt={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Mt){return nt[Mt]})}var lt=/\/+/g;function ht(P,nt){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):nt.toString(36)}function dt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(N,N):(P.status="pending",P.then(function(nt){P.status==="pending"&&(P.status="fulfilled",P.value=nt)},function(nt){P.status==="pending"&&(P.status="rejected",P.reason=nt)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,nt,Mt,rt,Rt){var q=typeof P;(q==="undefined"||q==="boolean")&&(P=null);var ut=!1;if(P===null)ut=!0;else switch(q){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(P.$$typeof){case r:case t:ut=!0;break;case v:return ut=P._init,B(ut(P._payload),nt,Mt,rt,Rt)}}if(ut)return Rt=Rt(P),ut=rt===""?"."+ht(P,0):rt,V(Rt)?(Mt="",ut!=null&&(Mt=ut.replace(lt,"$&/")+"/"),B(Rt,nt,Mt,"",function(zt){return zt})):Rt!=null&&(k(Rt)&&(Rt=w(Rt,Mt+(Rt.key==null||P&&P.key===Rt.key?"":(""+Rt.key).replace(lt,"$&/")+"/")+ut)),nt.push(Rt)),1;ut=0;var Ut=rt===""?".":rt+":";if(V(P))for(var Pt=0;Pt<P.length;Pt++)rt=P[Pt],q=Ut+ht(rt,Pt),ut+=B(rt,nt,Mt,q,Rt);else if(Pt=S(P),typeof Pt=="function")for(P=Pt.call(P),Pt=0;!(rt=P.next()).done;)rt=rt.value,q=Ut+ht(rt,Pt++),ut+=B(rt,nt,Mt,q,Rt);else if(q==="object"){if(typeof P.then=="function")return B(dt(P),nt,Mt,rt,Rt);throw nt=String(P),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ut}function $(P,nt,Mt){if(P==null)return P;var rt=[],Rt=0;return B(P,rt,"","",function(q){return nt.call(Mt,q,Rt++)}),rt}function W(P){if(P._status===-1){var nt=P._result;nt=nt(),nt.then(function(Mt){(P._status===0||P._status===-1)&&(P._status=1,P._result=Mt)},function(Mt){(P._status===0||P._status===-1)&&(P._status=2,P._result=Mt)}),P._status===-1&&(P._status=0,P._result=nt)}if(P._status===1)return P._result.default;throw P._result}var St=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Ct={map:$,forEach:function(P,nt,Mt){$(P,function(){nt.apply(this,arguments)},Mt)},count:function(P){var nt=0;return $(P,function(){nt++}),nt},toArray:function(P){return $(P,function(nt){return nt})||[]},only:function(P){if(!k(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return he.Activity=g,he.Children=Ct,he.Component=_,he.Fragment=i,he.Profiler=l,he.PureComponent=L,he.StrictMode=s,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,he.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},he.cache=function(P){return function(){return P.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(P,nt,Mt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var rt=b({},P.props),Rt=P.key;if(nt!=null)for(q in nt.key!==void 0&&(Rt=""+nt.key),nt)!X.call(nt,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&nt.ref===void 0||(rt[q]=nt[q]);var q=arguments.length-2;if(q===1)rt.children=Mt;else if(1<q){for(var ut=Array(q),Ut=0;Ut<q;Ut++)ut[Ut]=arguments[Ut+2];rt.children=ut}return U(P.type,Rt,rt)},he.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},he.createElement=function(P,nt,Mt){var rt,Rt={},q=null;if(nt!=null)for(rt in nt.key!==void 0&&(q=""+nt.key),nt)X.call(nt,rt)&&rt!=="key"&&rt!=="__self"&&rt!=="__source"&&(Rt[rt]=nt[rt]);var ut=arguments.length-2;if(ut===1)Rt.children=Mt;else if(1<ut){for(var Ut=Array(ut),Pt=0;Pt<ut;Pt++)Ut[Pt]=arguments[Pt+2];Rt.children=Ut}if(P&&P.defaultProps)for(rt in ut=P.defaultProps,ut)Rt[rt]===void 0&&(Rt[rt]=ut[rt]);return U(P,q,Rt)},he.createRef=function(){return{current:null}},he.forwardRef=function(P){return{$$typeof:d,render:P}},he.isValidElement=k,he.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:W}},he.memo=function(P,nt){return{$$typeof:p,type:P,compare:nt===void 0?null:nt}},he.startTransition=function(P){var nt=I.T,Mt={};I.T=Mt;try{var rt=P(),Rt=I.S;Rt!==null&&Rt(Mt,rt),typeof rt=="object"&&rt!==null&&typeof rt.then=="function"&&rt.then(N,St)}catch(q){St(q)}finally{nt!==null&&Mt.types!==null&&(nt.types=Mt.types),I.T=nt}},he.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},he.use=function(P){return I.H.use(P)},he.useActionState=function(P,nt,Mt){return I.H.useActionState(P,nt,Mt)},he.useCallback=function(P,nt){return I.H.useCallback(P,nt)},he.useContext=function(P){return I.H.useContext(P)},he.useDebugValue=function(){},he.useDeferredValue=function(P,nt){return I.H.useDeferredValue(P,nt)},he.useEffect=function(P,nt){return I.H.useEffect(P,nt)},he.useEffectEvent=function(P){return I.H.useEffectEvent(P)},he.useId=function(){return I.H.useId()},he.useImperativeHandle=function(P,nt,Mt){return I.H.useImperativeHandle(P,nt,Mt)},he.useInsertionEffect=function(P,nt){return I.H.useInsertionEffect(P,nt)},he.useLayoutEffect=function(P,nt){return I.H.useLayoutEffect(P,nt)},he.useMemo=function(P,nt){return I.H.useMemo(P,nt)},he.useOptimistic=function(P,nt){return I.H.useOptimistic(P,nt)},he.useReducer=function(P,nt,Mt){return I.H.useReducer(P,nt,Mt)},he.useRef=function(P){return I.H.useRef(P)},he.useState=function(P){return I.H.useState(P)},he.useSyncExternalStore=function(P,nt,Mt){return I.H.useSyncExternalStore(P,nt,Mt)},he.useTransition=function(){return I.H.useTransition()},he.version="19.2.8",he}var B_;function Id(){return B_||(B_=1,ih.exports=Ky()),ih.exports}var se=Id();const Qy=rv(se);var ah={exports:{}},wo={},sh={exports:{}},rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function Jy(){return F_||(F_=1,(function(r){function t(B,$){var W=B.length;B.push($);t:for(;0<W;){var St=W-1>>>1,Ct=B[St];if(0<l(Ct,$))B[St]=$,B[W]=Ct,W=St;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var $=B[0],W=B.pop();if(W!==$){B[0]=W;t:for(var St=0,Ct=B.length,P=Ct>>>1;St<P;){var nt=2*(St+1)-1,Mt=B[nt],rt=nt+1,Rt=B[rt];if(0>l(Mt,W))rt<Ct&&0>l(Rt,Mt)?(B[St]=Rt,B[rt]=W,St=rt):(B[St]=Mt,B[nt]=W,St=nt);else if(rt<Ct&&0>l(Rt,W))B[St]=Rt,B[rt]=W,St=rt;else break t}}return $}function l(B,$){var W=B.sortIndex-$.sortIndex;return W!==0?W:B.id-$.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,x=3,S=!1,E=!1,b=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var $=i(p);$!==null;){if($.callback===null)s(p);else if($.startTime<=B)s(p),$.sortIndex=$.expirationTime,t(m,$);else break;$=i(p)}}function V(B){if(b=!1,D(B),!E)if(i(m)!==null)E=!0,N||(N=!0,J());else{var $=i(p);$!==null&&dt(V,$.startTime-B)}}var N=!1,I=-1,X=5,U=-1;function w(){return M?!0:!(r.unstable_now()-U<X)}function k(){if(M=!1,N){var B=r.unstable_now();U=B;var $=!0;try{t:{E=!1,b&&(b=!1,H(I),I=-1),S=!0;var W=x;try{e:{for(D(B),g=i(m);g!==null&&!(g.expirationTime>B&&w());){var St=g.callback;if(typeof St=="function"){g.callback=null,x=g.priorityLevel;var Ct=St(g.expirationTime<=B);if(B=r.unstable_now(),typeof Ct=="function"){g.callback=Ct,D(B),$=!0;break e}g===i(m)&&s(m),D(B)}else s(m);g=i(m)}if(g!==null)$=!0;else{var P=i(p);P!==null&&dt(V,P.startTime-B),$=!1}}break t}finally{g=null,x=W,S=!1}$=void 0}}finally{$?J():N=!1}}}var J;if(typeof L=="function")J=function(){L(k)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ht=lt.port2;lt.port1.onmessage=k,J=function(){ht.postMessage(null)}}else J=function(){_(k,0)};function dt(B,$){I=_(function(){B(r.unstable_now())},$)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(B){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var W=x;x=$;try{return B()}finally{x=W}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=x;x=B;try{return $()}finally{x=W}},r.unstable_scheduleCallback=function(B,$,W){var St=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?St+W:St):W=St,B){case 1:var Ct=-1;break;case 2:Ct=250;break;case 5:Ct=1073741823;break;case 4:Ct=1e4;break;default:Ct=5e3}return Ct=W+Ct,B={id:v++,callback:$,priorityLevel:B,startTime:W,expirationTime:Ct,sortIndex:-1},W>St?(B.sortIndex=W,t(p,B),i(m)===null&&B===i(p)&&(b?(H(I),I=-1):b=!0,dt(V,W-St))):(B.sortIndex=Ct,t(m,B),E||S||(E=!0,N||(N=!0,J()))),B},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(B){var $=x;return function(){var W=x;x=$;try{return B.apply(this,arguments)}finally{x=W}}}})(rh)),rh}var H_;function $y(){return H_||(H_=1,sh.exports=Jy()),sh.exports}var oh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function tS(){if(G_)return Un;G_=1;var r=Id();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Un.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:S}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.2.8",Un}var V_;function eS(){if(V_)return oh.exports;V_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),oh.exports=tS(),oh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function nS(){if(k_)return wo;k_=1;var r=$y(),t=Id(),i=eS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=f;break}if(A===o){y=!0,o=u,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,o=u;break}if(A===o){y=!0,o=f,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case N:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var dt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},St=[],Ct=-1;function P(e){return{current:e}}function nt(e){0>Ct||(e.current=St[Ct],St[Ct]=null,Ct--)}function Mt(e,n){Ct++,St[Ct]=e.current,e.current=n}var rt=P(null),Rt=P(null),q=P(null),ut=P(null);function Ut(e,n){switch(Mt(q,n),Mt(Rt,e),Mt(rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?a_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=a_(n),e=s_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(rt),Mt(rt,e)}function Pt(){nt(rt),nt(Rt),nt(q)}function zt(e){e.memoizedState!==null&&Mt(ut,e);var n=rt.current,a=s_(n,e.type);n!==a&&(Mt(Rt,e),Mt(rt,a))}function Ht(e){Rt.current===e&&(nt(rt),nt(Rt)),ut.current===e&&(nt(ut),To._currentValue=W)}var re,z;function oe(e){if(re===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);re=n&&n[1]||"",z=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+re+e+z}var ee=!1;function Zt(e,n){if(!e||ee)return"";ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ft){var st=ft}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ft){st=ft}e.call(xt.prototype)}}else{try{throw Error()}catch(ft){st=ft}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ft){if(ft&&st&&typeof ft.stack=="string")return[ft.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var G=y.split(`
`),at=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===at.length)for(o=G.length-1,u=at.length-1;1<=o&&0<=u&&G[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==at[u]){var gt=`
`+G[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{ee=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oe(a):""}function kt(e,n){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==n&&n!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return Zt(e.type,!1);case 11:return Zt(e.type.render,!1);case 1:return Zt(e.type,!0);case 31:return oe("Activity");default:return""}}function xe(e){try{var n="",a=null;do n+=kt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ot=Object.prototype.hasOwnProperty,te=r.unstable_scheduleCallback,Qe=r.unstable_cancelCallback,qe=r.unstable_shouldYield,O=r.unstable_requestPaint,T=r.unstable_now,et=r.unstable_getCurrentPriorityLevel,mt=r.unstable_ImmediatePriority,Et=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,$t=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,Kt=r.log,Qt=r.unstable_setDisableYieldValue,Dt=null,wt=null;function Wt(e){if(typeof Kt=="function"&&Qt(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Dt,e)}catch{}}var Gt=Math.clz32?Math.clz32:F,It=Math.log,Y=Math.LN2;function F(e){return e>>>=0,e===0?32:31-(It(e)/Y|0)|0}var yt=256,bt=262144,Nt=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=At(o):(y&=A,y!==0?u=At(y):a||(a=A&~e,a!==0&&(u=At(a))))):(A=o&~f,A!==0?u=At(A):y!==0?u=At(y):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function Ce(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ri(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,at=e.hiddenUpdates;for(a=y&~a;0<a;){var gt=31-Gt(a),xt=1<<gt;A[gt]=0,G[gt]=-1;var st=at[gt];if(st!==null)for(at[gt]=null,gt=0;gt<st.length;gt++){var ft=st[gt];ft!==null&&(ft.lane&=-536870913)}a&=~xt}o!==0&&Ir(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Ir(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Gt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function wi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Gt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Cs(e,n){var a=n&-n;return a=(a&42)!==0?1:ws(a),(a&(e.suspendedLanes|n))!==0?0:a}function ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ds(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ya(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:C_(e.type))}function Br(e,n){var a=$.p;try{return $.p=e,n()}finally{$.p=a}}var Kn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Kn,Tn="__reactProps$"+Kn,ha="__reactContainer$"+Kn,Fr="__reactEvents$"+Kn,Zc="__reactListeners$"+Kn,Kc="__reactHandles$"+Kn,Zo="__reactResources$"+Kn,Za="__reactMarker$"+Kn;function R(e){delete e[cn],delete e[Tn],delete e[Fr],delete e[Zc],delete e[Kc]}function Z(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ha]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=h_(e);e!==null;){if(a=e[cn])return a;e=h_(e)}return n}e=a,a=e.parentNode}return null}function ot(e){if(e=e[cn]||e[ha]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ct(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Q(e){var n=e[Zo];return n||(n=e[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Tt(e){e[Za]=!0}var Bt=new Set,qt={};function Vt(e,n){ne(e,n),ne(e+"Capture",n)}function ne(e,n){for(qt[e]=n,e=0;e<n.length;e++)Bt.add(n[e])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},ve={};function Oe(e){return Ot.call(ve,e)?!0:Ot.call(ie,e)?!1:ce.test(e)?ve[e]=!0:(ie[e]=!0,!1)}function je(e,n,a){if(Oe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ye(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function We(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function we(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bn(e){if(!e._valueTracker){var n=We(e)?"checked":"value";e._valueTracker=we(e,n,""+e[n])}}function Hi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=We(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ka=/[\n"\\]/g;function Te(e){return e.replace(Ka,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(e,n,a,o,u,f,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Yt(n)):e.value!==""+Yt(n)&&(e.value=""+Yt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?mn(e,y,Yt(n)):a!=null?mn(e,y,Yt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Yt(A):e.removeAttribute("name")}function Pn(e,n,a,o,u,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){bn(e);return}a=a!=null?""+Yt(a):"",n=n!=null?""+Yt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),bn(e)}function mn(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Yt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Us(e,n,a){if(n!=null&&(n=""+Yt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Yt(a):""}function Di(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(dt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Yt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),bn(e)}function Ls(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var kv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||kv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function np(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ep(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&ep(e,f,n[f])}function Qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(e){return Xv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gi(){}var Jc=null;function $c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ns=null,Os=null;function ip(e){var n=ot(e);if(n&&(e=n.stateNode)){var a=e[Tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Dn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Te(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Tn]||null;if(!u)throw Error(s(90));Dn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Hi(o)}break t;case"textarea":Us(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var tu=!1;function ap(e,n,a){if(tu)return e(n,a);tu=!0;try{var o=e(n);return o}finally{if(tu=!1,(Ns!==null||Os!==null)&&(Il(),Ns&&(n=Ns,e=Os,Os=Ns=null,ip(n),e)))for(n=0;n<e.length;n++)ip(e[n])}}function Hr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Vi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{eu=!1}var da=null,nu=null,Qo=null;function sp(){if(Qo)return Qo;var e,n=nu,a=n.length,o,u="value"in da?da.value:da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return Qo=u.slice(e,1<o?1-o:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function rp(){return!1}function Hn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:rp,this.isPropagationStopped=rp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Hn(Qa),Vr=g({},Qa,{view:0,detail:0}),Wv=Hn(Vr),iu,au,kr,el=g({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(iu=e.screenX-kr.screenX,au=e.screenY-kr.screenY):au=iu=0,kr=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:au}}),op=Hn(el),qv=g({},el,{dataTransfer:0}),Yv=Hn(qv),Zv=g({},Vr,{relatedTarget:0}),su=Hn(Zv),Kv=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=Hn(Kv),Jv=g({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$v=Hn(Jv),tx=g({},Qa,{data:0}),lp=Hn(tx),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ix[e])?!!n[e]:!1}function ru(){return ax}var sx=g({},Vr,{key:function(e){if(e.key){var n=ex[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rx=Hn(sx),ox=g({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=Hn(ox),lx=g({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),cx=Hn(lx),ux=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=Hn(ux),hx=g({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=Hn(hx),px=g({},Qa,{newState:0,oldState:0}),mx=Hn(px),gx=[9,13,27,32],ou=Vi&&"CompositionEvent"in window,jr=null;Vi&&"documentMode"in document&&(jr=document.documentMode);var _x=Vi&&"TextEvent"in window&&!jr,up=Vi&&(!ou||jr&&8<jr&&11>=jr),fp=" ",hp=!1;function dp(e,n){switch(e){case"keyup":return gx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ps=!1;function vx(e,n){switch(e){case"compositionend":return pp(n);case"keypress":return n.which!==32?null:(hp=!0,fp);case"textInput":return e=n.data,e===fp&&hp?null:e;default:return null}}function xx(e,n){if(Ps)return e==="compositionend"||!ou&&dp(e,n)?(e=sp(),Qo=nu=da=null,Ps=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return up&&n.locale!=="ko"?null:n.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yx[e.type]:n==="textarea"}function gp(e,n,a,o){Ns?Os?Os.push(o):Os=[o]:Ns=o,n=jl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Xr=null,Wr=null;function Sx(e){Jg(e,0)}function nl(e){var n=ct(e);if(Hi(n))return e}function _p(e,n){if(e==="change")return n}var vp=!1;if(Vi){var lu;if(Vi){var cu="oninput"in document;if(!cu){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),cu=typeof xp.oninput=="function"}lu=cu}else lu=!1;vp=lu&&(!document.documentMode||9<document.documentMode)}function yp(){Xr&&(Xr.detachEvent("onpropertychange",Sp),Wr=Xr=null)}function Sp(e){if(e.propertyName==="value"&&nl(Wr)){var n=[];gp(n,Wr,e,$c(e)),ap(Sx,n)}}function Mx(e,n,a){e==="focusin"?(yp(),Xr=n,Wr=a,Xr.attachEvent("onpropertychange",Sp)):e==="focusout"&&yp()}function Ex(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Wr)}function Tx(e,n){if(e==="click")return nl(n)}function bx(e,n){if(e==="input"||e==="change")return nl(n)}function Ax(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:Ax;function qr(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ot.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function Mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ep(e,n){var a=Mp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mp(a)}}function Tp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Tp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Rx=Vi&&"documentMode"in document&&11>=document.documentMode,zs=null,fu=null,Yr=null,hu=!1;function Ap(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||zs==null||zs!==yn(o)||(o=zs,"selectionStart"in o&&uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yr&&qr(Yr,o)||(Yr=o,o=jl(fu,"onSelect"),0<o.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=zs)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Is={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},du={},Rp={};Vi&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function $a(e){if(du[e])return du[e];if(!Is[e])return e;var n=Is[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rp)return du[e]=n[a];return e}var Cp=$a("animationend"),wp=$a("animationiteration"),Dp=$a("animationstart"),Cx=$a("transitionrun"),wx=$a("transitionstart"),Dx=$a("transitioncancel"),Up=$a("transitionend"),Lp=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function xi(e,n){Lp.set(e,n),Vt(n,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Bs=0,mu=0;function al(){for(var e=Bs,n=mu=Bs=0;n<e;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Np(a,u,f)}}function sl(e,n,a,o){oi[Bs++]=e,oi[Bs++]=n,oi[Bs++]=a,oi[Bs++]=o,mu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function gu(e,n,a,o){return sl(e,n,a,o),rl(e)}function ts(e,n){return sl(e,null,null,n),rl(e)}function Np(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Gt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<_o)throw _o=0,Af=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fs={};function Ux(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,o){return new Ux(e,n,a,o)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Op(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")_u(e)&&(y=1);else if(typeof e=="string")y=zy(e,a,rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Jn(31,a,n,u),e.elementType=U,e.lanes=f,e;case b:return es(a.children,u,f,n);case M:y=8,u|=24;break;case _:return e=Jn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case V:return e=Jn(13,a,n,u),e.elementType=V,e.lanes=f,e;case N:return e=Jn(19,a,n,u),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break t;case H:y=9;break t;case D:y=11;break t;case I:y=14;break t;case X:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Jn(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function es(e,n,a,o){return e=Jn(7,e,o,n),e.lanes=a,e}function vu(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function Pp(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function xu(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=zp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:xe(n)},zp.set(e,n),n)}return{value:e,source:n,stack:xe(n)}}var Hs=[],Gs=0,ll=null,Zr=0,ci=[],ui=0,pa=null,Ui=1,Li="";function ji(e,n){Hs[Gs++]=Zr,Hs[Gs++]=ll,ll=e,Zr=n}function Ip(e,n,a){ci[ui++]=Ui,ci[ui++]=Li,ci[ui++]=pa,pa=e;var o=Ui;e=Li;var u=32-Gt(o)-1;o&=~(1<<u),a+=1;var f=32-Gt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ui=1<<32-Gt(n)+u|a<<u|o,Li=f+e}else Ui=1<<f|a<<u|o,Li=e}function yu(e){e.return!==null&&(ji(e,1),Ip(e,1,0))}function Su(e){for(;e===ll;)ll=Hs[--Gs],Hs[Gs]=null,Zr=Hs[--Gs],Hs[Gs]=null;for(;e===pa;)pa=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null,Ui=ci[--ui],ci[ui]=null}function Bp(e,n){ci[ui++]=Ui,ci[ui++]=Li,ci[ui++]=pa,Ui=n.id,Li=n.overflow,pa=e}var An=null,Ye=null,Re=!1,ma=null,fi=!1,Mu=Error(s(519));function ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kr(li(n,e)),Mu}function Fp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[Tn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)Me(xo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Di(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||n_(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||ga(e,!0)}function Hp(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:An=An.return}}function Vs(e){if(e!==An)return!1;if(!Re)return Hp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gf(e.type,e.memoizedProps)),a=!a),a&&Ye&&ga(e),Hp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=f_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=f_(e)}else n===27?(n=Ye,Da(e.type)?(e=Wf,Wf=null,Ye=e):Ye=n):Ye=An?di(e.stateNode.nextSibling):null;return!0}function ns(){Ye=An=null,Re=!1}function Eu(){var e=ma;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),ma=null),e}function Kr(e){ma===null?ma=[e]:ma.push(e)}var Tu=P(null),is=null,Xi=null;function _a(e,n,a){Mt(Tu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Tu.current,nt(Tu)}function bu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Au(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),bu(f.return,a,e),o||(y=null);break t}f=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),bu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function ks(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;Qn(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===ut.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}u=u.return}e!==null&&Au(n,e,a,o),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Gp(is,e)}function ul(e,n){return is===null&&as(e),Gp(e,n)}function Gp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(s(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var Lx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Nx=r.unstable_scheduleCallback,Ox=r.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new Lx,data:new Map,refCount:0}}function Qr(e){e.refCount--,e.refCount===0&&Nx(Ox,function(){e.controller.abort()})}var Jr=null,Cu=0,js=0,Xs=null;function Px(e,n){if(Jr===null){var a=Jr=[];Cu=0,js=Lf(),Xs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Cu++,n.then(Vp,Vp),n}function Vp(){if(--Cu===0&&Jr!==null){Xs!==null&&(Xs.status="fulfilled");var e=Jr;Jr=null,js=0,Xs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function zx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var kp=B.S;B.S=function(e,n){Ag=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Px(e,n),kp!==null&&kp(e,n)};var ss=P(null);function wu(){var e=ss.current;return e!==null?e:Xe.pooledCache}function fl(e,n){n===null?Mt(ss,ss.current):Mt(ss,n.pool)}function jp(){var e=wu();return e===null?null:{parent:un._currentValue,pool:e}}var Ws=Error(s(460)),Du=Error(s(474)),hl=Error(s(542)),dl={then:function(){}};function Xp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Yp(e),e;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Yp(e),e}throw os=n,Ws}}function rs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(os=a,Ws):a}}var os=null;function qp(){if(os===null)throw Error(s(459));var e=os;return os=null,e}function Yp(e){if(e===Ws||e===hl)throw Error(s(483))}var qs=null,$r=0;function pl(e){var n=$r;return $r+=1,qs===null&&(qs=[]),Wp(qs,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Zp(e){function n(K,j){if(e){var it=K.deletions;it===null?(K.deletions=[j],K.flags|=16):it.push(j)}}function a(K,j){if(!e)return null;for(;j!==null;)n(K,j),j=j.sibling;return null}function o(K){for(var j=new Map;K!==null;)K.key!==null?j.set(K.key,K):j.set(K.index,K),K=K.sibling;return j}function u(K,j){return K=ki(K,j),K.index=0,K.sibling=null,K}function f(K,j,it){return K.index=it,e?(it=K.alternate,it!==null?(it=it.index,it<j?(K.flags|=67108866,j):it):(K.flags|=67108866,j)):(K.flags|=1048576,j)}function y(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,j,it,_t){return j===null||j.tag!==6?(j=vu(it,K.mode,_t),j.return=K,j):(j=u(j,it),j.return=K,j)}function G(K,j,it,_t){var ae=it.type;return ae===b?gt(K,j,it.props.children,_t,it.key):j!==null&&(j.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===X&&rs(ae)===j.type)?(j=u(j,it.props),to(j,it),j.return=K,j):(j=ol(it.type,it.key,it.props,null,K.mode,_t),to(j,it),j.return=K,j)}function at(K,j,it,_t){return j===null||j.tag!==4||j.stateNode.containerInfo!==it.containerInfo||j.stateNode.implementation!==it.implementation?(j=xu(it,K.mode,_t),j.return=K,j):(j=u(j,it.children||[]),j.return=K,j)}function gt(K,j,it,_t,ae){return j===null||j.tag!==7?(j=es(it,K.mode,_t,ae),j.return=K,j):(j=u(j,it),j.return=K,j)}function xt(K,j,it){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=vu(""+j,K.mode,it),j.return=K,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return it=ol(j.type,j.key,j.props,null,K.mode,it),to(it,j),it.return=K,it;case E:return j=xu(j,K.mode,it),j.return=K,j;case X:return j=rs(j),xt(K,j,it)}if(dt(j)||J(j))return j=es(j,K.mode,it,null),j.return=K,j;if(typeof j.then=="function")return xt(K,pl(j),it);if(j.$$typeof===L)return xt(K,ul(K,j),it);ml(K,j)}return null}function st(K,j,it,_t){var ae=j!==null?j.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return ae!==null?null:A(K,j,""+it,_t);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case S:return it.key===ae?G(K,j,it,_t):null;case E:return it.key===ae?at(K,j,it,_t):null;case X:return it=rs(it),st(K,j,it,_t)}if(dt(it)||J(it))return ae!==null?null:gt(K,j,it,_t,null);if(typeof it.then=="function")return st(K,j,pl(it),_t);if(it.$$typeof===L)return st(K,j,ul(K,it),_t);ml(K,it)}return null}function ft(K,j,it,_t,ae){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(it)||null,A(j,K,""+_t,ae);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case S:return K=K.get(_t.key===null?it:_t.key)||null,G(j,K,_t,ae);case E:return K=K.get(_t.key===null?it:_t.key)||null,at(j,K,_t,ae);case X:return _t=rs(_t),ft(K,j,it,_t,ae)}if(dt(_t)||J(_t))return K=K.get(it)||null,gt(j,K,_t,ae,null);if(typeof _t.then=="function")return ft(K,j,it,pl(_t),ae);if(_t.$$typeof===L)return ft(K,j,it,ul(j,_t),ae);ml(j,_t)}return null}function Xt(K,j,it,_t){for(var ae=null,De=null,Jt=j,pe=j=0,Ae=null;Jt!==null&&pe<it.length;pe++){Jt.index>pe?(Ae=Jt,Jt=null):Ae=Jt.sibling;var Ue=st(K,Jt,it[pe],_t);if(Ue===null){Jt===null&&(Jt=Ae);break}e&&Jt&&Ue.alternate===null&&n(K,Jt),j=f(Ue,j,pe),De===null?ae=Ue:De.sibling=Ue,De=Ue,Jt=Ae}if(pe===it.length)return a(K,Jt),Re&&ji(K,pe),ae;if(Jt===null){for(;pe<it.length;pe++)Jt=xt(K,it[pe],_t),Jt!==null&&(j=f(Jt,j,pe),De===null?ae=Jt:De.sibling=Jt,De=Jt);return Re&&ji(K,pe),ae}for(Jt=o(Jt);pe<it.length;pe++)Ae=ft(Jt,K,pe,it[pe],_t),Ae!==null&&(e&&Ae.alternate!==null&&Jt.delete(Ae.key===null?pe:Ae.key),j=f(Ae,j,pe),De===null?ae=Ae:De.sibling=Ae,De=Ae);return e&&Jt.forEach(function(Pa){return n(K,Pa)}),Re&&ji(K,pe),ae}function le(K,j,it,_t){if(it==null)throw Error(s(151));for(var ae=null,De=null,Jt=j,pe=j=0,Ae=null,Ue=it.next();Jt!==null&&!Ue.done;pe++,Ue=it.next()){Jt.index>pe?(Ae=Jt,Jt=null):Ae=Jt.sibling;var Pa=st(K,Jt,Ue.value,_t);if(Pa===null){Jt===null&&(Jt=Ae);break}e&&Jt&&Pa.alternate===null&&n(K,Jt),j=f(Pa,j,pe),De===null?ae=Pa:De.sibling=Pa,De=Pa,Jt=Ae}if(Ue.done)return a(K,Jt),Re&&ji(K,pe),ae;if(Jt===null){for(;!Ue.done;pe++,Ue=it.next())Ue=xt(K,Ue.value,_t),Ue!==null&&(j=f(Ue,j,pe),De===null?ae=Ue:De.sibling=Ue,De=Ue);return Re&&ji(K,pe),ae}for(Jt=o(Jt);!Ue.done;pe++,Ue=it.next())Ue=ft(Jt,K,pe,Ue.value,_t),Ue!==null&&(e&&Ue.alternate!==null&&Jt.delete(Ue.key===null?pe:Ue.key),j=f(Ue,j,pe),De===null?ae=Ue:De.sibling=Ue,De=Ue);return e&&Jt.forEach(function(qy){return n(K,qy)}),Re&&ji(K,pe),ae}function Ge(K,j,it,_t){if(typeof it=="object"&&it!==null&&it.type===b&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case S:t:{for(var ae=it.key;j!==null;){if(j.key===ae){if(ae=it.type,ae===b){if(j.tag===7){a(K,j.sibling),_t=u(j,it.props.children),_t.return=K,K=_t;break t}}else if(j.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===X&&rs(ae)===j.type){a(K,j.sibling),_t=u(j,it.props),to(_t,it),_t.return=K,K=_t;break t}a(K,j);break}else n(K,j);j=j.sibling}it.type===b?(_t=es(it.props.children,K.mode,_t,it.key),_t.return=K,K=_t):(_t=ol(it.type,it.key,it.props,null,K.mode,_t),to(_t,it),_t.return=K,K=_t)}return y(K);case E:t:{for(ae=it.key;j!==null;){if(j.key===ae)if(j.tag===4&&j.stateNode.containerInfo===it.containerInfo&&j.stateNode.implementation===it.implementation){a(K,j.sibling),_t=u(j,it.children||[]),_t.return=K,K=_t;break t}else{a(K,j);break}else n(K,j);j=j.sibling}_t=xu(it,K.mode,_t),_t.return=K,K=_t}return y(K);case X:return it=rs(it),Ge(K,j,it,_t)}if(dt(it))return Xt(K,j,it,_t);if(J(it)){if(ae=J(it),typeof ae!="function")throw Error(s(150));return it=ae.call(it),le(K,j,it,_t)}if(typeof it.then=="function")return Ge(K,j,pl(it),_t);if(it.$$typeof===L)return Ge(K,j,ul(K,it),_t);ml(K,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,j!==null&&j.tag===6?(a(K,j.sibling),_t=u(j,it),_t.return=K,K=_t):(a(K,j),_t=vu(it,K.mode,_t),_t.return=K,K=_t),y(K)):a(K,j)}return function(K,j,it,_t){try{$r=0;var ae=Ge(K,j,it,_t);return qs=null,ae}catch(Jt){if(Jt===Ws||Jt===hl)throw Jt;var De=Jn(29,Jt,null,K.mode);return De.lanes=_t,De.return=K,De}finally{}}}var ls=Zp(!0),Kp=Zp(!1),va=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=rl(e),Np(e,null,a),n}return sl(e,o,n,a),rl(e)}function eo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,wi(e,a)}}function Nu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ou=!1;function no(){if(Ou){var e=Xs;if(e!==null)throw e}}function io(e,n,a,o){Ou=!1;var u=e.updateQueue;va=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,at=G.next;G.next=null,y===null?f=at:y.next=at,y=G;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,A=gt.lastBaseUpdate,A!==y&&(A===null?gt.firstBaseUpdate=at:A.next=at,gt.lastBaseUpdate=G))}if(f!==null){var xt=u.baseState;y=0,gt=at=G=null,A=f;do{var st=A.lane&-536870913,ft=st!==A.lane;if(ft?(be&st)===st:(o&st)===st){st!==0&&st===js&&(Ou=!0),gt!==null&&(gt=gt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Xt=e,le=A;st=n;var Ge=a;switch(le.tag){case 1:if(Xt=le.payload,typeof Xt=="function"){xt=Xt.call(Ge,xt,st);break t}xt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=le.payload,st=typeof Xt=="function"?Xt.call(Ge,xt,st):Xt,st==null)break t;xt=g({},xt,st);break t;case 2:va=!0}}st=A.callback,st!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[st]:ft.push(st))}else ft={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},gt===null?(at=gt=ft,G=xt):gt=gt.next=ft,y|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ft=A,A=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);gt===null&&(G=xt),u.baseState=G,u.firstBaseUpdate=at,u.lastBaseUpdate=gt,f===null&&(u.shared.lanes=0),ba|=y,e.lanes=y,e.memoizedState=xt}}function Qp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Jp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Qp(a[e],n)}var Ys=P(null),gl=P(0);function $p(e,n){e=ea,Mt(gl,e),Mt(Ys,n),ea=e|n.baseLanes}function Pu(){Mt(gl,ea),Mt(Ys,Ys.current)}function zu(){ea=gl.current,nt(Ys),nt(gl)}var $n=P(null),hi=null;function Sa(e){var n=e.alternate;Mt(on,on.current&1),Mt($n,e),hi===null&&(n===null||Ys.current!==null||n.memoizedState!==null)&&(hi=e)}function Iu(e){Mt(on,on.current),Mt($n,e),hi===null&&(hi=e)}function tm(e){e.tag===22?(Mt(on,on.current),Mt($n,e),hi===null&&(hi=e)):Ma()}function Ma(){Mt(on,on.current),Mt($n,$n.current)}function ti(e){nt($n),hi===e&&(hi=null),nt(on)}var on=P(0);function _l(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,de=null,Fe=null,fn=null,vl=!1,Zs=!1,cs=!1,xl=0,ao=0,Ks=null,Ix=0;function tn(){throw Error(s(321))}function Bu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function Fu(e,n,a,o,u,f){return qi=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Im:tf,cs=!1,f=a(o,u),cs=!1,Zs&&(f=nm(n,a,o,u)),em(e),f}function em(e){B.H=oo;var n=Fe!==null&&Fe.next!==null;if(qi=0,fn=Fe=de=null,vl=!1,ao=0,Ks=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&cl(e)&&(hn=!0))}function nm(e,n,a,o){de=e;var u=0;do{if(Zs&&(Ks=null),ao=0,Zs=!1,25<=u)throw Error(s(301));if(u+=1,fn=Fe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Bm,f=n(a,o)}while(Zs);return f}function Bx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(de.flags|=1024),n}function Hu(){var e=xl!==0;return xl=0,e}function Gu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Vu(e){if(vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vl=!1}qi=0,fn=Fe=de=null,Zs=!1,ao=xl=0,Ks=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?de.memoizedState=fn=e:fn=fn.next=e,fn}function ln(){if(Fe===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=fn===null?de.memoizedState:fn.next;if(n!==null)fn=n,Fe=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},fn===null?de.memoizedState=fn=e:fn=fn.next=e}return fn}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ao;return ao+=1,Ks===null&&(Ks=[]),e=Wp(Ks,e,n),n=de,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Im:tf),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===L)return Rn(e)}throw Error(s(438,String(e)))}function ku(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Yi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=ln();return ju(n,Fe,e)}function ju(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=y=null,G=null,at=n,gt=!1;do{var xt=at.lane&-536870913;if(xt!==at.lane?(be&xt)===xt:(qi&xt)===xt){var st=at.revertLane;if(st===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),xt===js&&(gt=!0);else if((qi&st)===st){at=at.next,st===js&&(gt=!0);continue}else xt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=xt,y=f):G=G.next=xt,de.lanes|=st,ba|=st;xt=at.action,cs&&a(f,xt),f=at.hasEagerState?at.eagerState:a(f,xt)}else st={lane:xt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=st,y=f):G=G.next=st,de.lanes|=xt,ba|=xt;at=at.next}while(at!==null&&at!==n);if(G===null?y=f:G.next=A,!Qn(f,e.memoizedState)&&(hn=!0,gt&&(a=Xs,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Xu(e){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);Qn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function im(e,n,a){var o=de,u=ln(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Qn((Fe||u).memoizedState,a);if(y&&(u.memoizedState=a,hn=!0),u=u.queue,Yu(rm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Qs(9,{destroy:void 0},sm.bind(null,o,u,a,n),null),Xe===null)throw Error(s(349));f||(qi&127)!==0||am(o,n,a)}return a}function am(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=yl(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function sm(e,n,a,o){n.value=a,n.getSnapshot=o,om(n)&&lm(e)}function rm(e,n,a){return a(function(){om(n)&&lm(e)})}function om(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function lm(e){var n=ts(e,2);n!==null&&Xn(n,e,2)}function Wu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),cs){Wt(!0);try{a()}finally{Wt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},n}function cm(e,n,a,o){return e.baseState=a,ju(e,Fe,typeof o=="function"?o:Yi)}function Fx(e,n,a,o,u){if(bl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,um(n,f)):(f.next=a.next,n.pending=a.next=f)}}function um(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=B.T,y={};B.T=y;try{var A=a(u,o),G=B.S;G!==null&&G(y,A),fm(e,n,A)}catch(at){qu(e,n,at)}finally{f!==null&&y.types!==null&&(f.types=y.types),B.T=f}}else try{f=a(u,o),fm(e,n,f)}catch(at){qu(e,n,at)}}function fm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){hm(e,n,o)},function(o){return qu(e,n,o)}):hm(e,n,a)}function hm(e,n,a){n.status="fulfilled",n.value=a,dm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,um(e,a)))}function qu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,dm(n),n=n.next;while(n!==o)}e.action=null}function dm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function pm(e,n){return n}function mm(e,n){if(Re){var a=Xe.formState;if(a!==null){t:{var o=de;if(Re){if(Ye){e:{for(var u=Ye,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=di(u.nextSibling),o=u.data==="F!";break t}}ga(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pm,lastRenderedState:n},a.queue=o,a=Om.bind(null,de,o),o.dispatch=a,o=Wu(!1),f=$u.bind(null,de,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Fx.bind(null,de,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function gm(e){var n=ln();return _m(n,Fe,e)}function _m(e,n,a){if(n=ju(e,n,pm)[0],e=Ml(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(y){throw y===Ws?hl:y}else o=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Qs(9,{destroy:void 0},Hx.bind(null,u,a),null)),[o,f,e]}function Hx(e,n){e.action=n}function vm(e){var n=ln(),a=Fe;if(a!==null)return _m(n,a,e);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Qs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=yl(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function xm(){return ln().memoizedState}function El(e,n,a,o){var u=zn();de.flags|=e,u.memoizedState=Qs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Tl(e,n,a,o){var u=ln();o=o===void 0?null:o;var f=u.memoizedState.inst;Fe!==null&&o!==null&&Bu(o,Fe.memoizedState.deps)?u.memoizedState=Qs(n,f,a,o):(de.flags|=e,u.memoizedState=Qs(1|n,f,a,o))}function ym(e,n){El(8390656,8,e,n)}function Yu(e,n){Tl(2048,8,e,n)}function Gx(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=yl(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Sm(e){var n=ln().memoizedState;return Gx({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Mm(e,n){return Tl(4,2,e,n)}function Em(e,n){return Tl(4,4,e,n)}function Tm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bm(e,n,a){a=a!=null?a.concat([e]):null,Tl(4,4,Tm.bind(null,n,e),a)}function Zu(){}function Am(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Bu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Rm(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Bu(n,o[1]))return o[0];if(o=e(),cs){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[o,n],o}function Ku(e,n,a){return a===void 0||(qi&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Cg(),de.lanes|=e,ba|=e,a)}function Cm(e,n,a,o){return Qn(a,n)?a:Ys.current!==null?(e=Ku(e,a,o),Qn(e,n)||(hn=!0),e):(qi&42)===0||(qi&1073741824)!==0&&(be&261930)===0?(hn=!0,e.memoizedState=a):(e=Cg(),de.lanes|=e,ba|=e,n)}function wm(e,n,a,o,u){var f=$.p;$.p=f!==0&&8>f?f:8;var y=B.T,A={};B.T=A,$u(e,!1,n,a);try{var G=u(),at=B.S;if(at!==null&&at(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var gt=zx(G,o);ro(e,n,gt,ii(e))}else ro(e,n,o,ii(e))}catch(xt){ro(e,n,{then:function(){},status:"rejected",reason:xt},ii())}finally{$.p=f,y!==null&&A.types!==null&&(y.types=A.types),B.T=y}}function Vx(){}function Qu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Dm(e).queue;wm(e,u,n,W,a===null?Vx:function(){return Um(e),a(o)})}function Dm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Um(e){var n=Dm(e);n.next===null&&(n=e.alternate.memoizedState),ro(e,n.next.queue,{},ii())}function Ju(){return Rn(To)}function Lm(){return ln().memoizedState}function Nm(){return ln().memoizedState}function kx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=xa(a);var o=ya(n,e,a);o!==null&&(Xn(o,n,a),eo(o,n,a)),n={cache:Ru()},e.payload=n;return}n=n.return}}function jx(e,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(e)?Pm(n,a):(a=gu(e,n,a,o),a!==null&&(Xn(a,e,o),zm(a,n,o)))}function Om(e,n,a){var o=ii();ro(e,n,a,o)}function ro(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(e))Pm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(u.hasEagerState=!0,u.eagerState=A,Qn(A,y))return sl(e,n,u,0),Xe===null&&al(),!1}catch{}finally{}if(a=gu(e,n,u,o),a!==null)return Xn(a,e,o),zm(a,n,o),!0}return!1}function $u(e,n,a,o){if(o={lane:2,revertLane:Lf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(s(479))}else n=gu(e,a,o,2),n!==null&&Xn(n,e,2)}function bl(e){var n=e.alternate;return e===de||n!==null&&n===de}function Pm(e,n){Zs=vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function zm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,wi(e,a)}}var oo={readContext:Rn,use:Sl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};oo.useEffectEvent=tn;var Im={readContext:Rn,use:Sl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:ym,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,El(4194308,4,Tm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(cs){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(cs){Wt(!0);try{a(n)}finally{Wt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=jx.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wu(e);var n=e.queue,a=Om.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Zu,useDeferredValue:function(e,n){var a=zn();return Ku(a,e,n)},useTransition:function(){var e=Wu(!1);return e=wm.bind(null,de,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=zn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(be&127)!==0||am(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,ym(rm.bind(null,o,f,e),[e]),o.flags|=2048,Qs(9,{destroy:void 0},sm.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=Xe.identifierPrefix;if(Re){var a=Li,o=Ui;a=(o&~(1<<32-Gt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ix++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ju,useFormState:mm,useActionState:mm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$u.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:ku,useCacheRefresh:function(){return zn().memoizedState=kx.bind(null,de)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},tf={readContext:Rn,use:Sl,useCallback:Am,useContext:Rn,useEffect:Yu,useImperativeHandle:bm,useInsertionEffect:Mm,useLayoutEffect:Em,useMemo:Rm,useReducer:Ml,useRef:xm,useState:function(){return Ml(Yi)},useDebugValue:Zu,useDeferredValue:function(e,n){var a=ln();return Cm(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Ml(Yi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:im,useId:Lm,useHostTransitionStatus:Ju,useFormState:gm,useActionState:gm,useOptimistic:function(e,n){var a=ln();return cm(a,Fe,e,n)},useMemoCache:ku,useCacheRefresh:Nm};tf.useEffectEvent=Sm;var Bm={readContext:Rn,use:Sl,useCallback:Am,useContext:Rn,useEffect:Yu,useImperativeHandle:bm,useInsertionEffect:Mm,useLayoutEffect:Em,useMemo:Rm,useReducer:Xu,useRef:xm,useState:function(){return Xu(Yi)},useDebugValue:Zu,useDeferredValue:function(e,n){var a=ln();return Fe===null?Ku(a,e,n):Cm(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Xu(Yi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:im,useId:Lm,useHostTransitionStatus:Ju,useFormState:vm,useActionState:vm,useOptimistic:function(e,n){var a=ln();return Fe!==null?cm(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:Nm};Bm.useEffectEvent=Sm;function ef(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Xn(n,e,o),eo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Xn(n,e,o),eo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(Xn(n,e,a),eo(n,e,a))}};function Fm(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!qr(a,o)||!qr(u,f):!0}function Hm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&nf.enqueueReplaceState(n,n.state,null)}function us(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Gm(e){il(e)}function Vm(e){console.error(e)}function km(e){il(e)}function Al(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function jm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function af(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(e,n)},a}function Xm(e){return e=xa(e),e.tag=3,e}function Wm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){jm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){jm(n,a,o),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Xx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ks(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Bl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wf(e,o,u)),!1;case 22:return a.flags|=65536,o===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wf(e,o,u)),!1}throw Error(s(435,a.tag))}return wf(e,o,u),Bl(),!1}if(Re)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Mu&&(e=Error(s(422),{cause:o}),Kr(li(e,a)))):(o!==Mu&&(n=Error(s(423),{cause:o}),Kr(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,a),u=af(e.stateNode,o,u),Nu(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:o});if(f=li(f,a),go===null?go=[f]:go.push(f),en!==4&&(en=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=af(a.stateNode,o,e),Nu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Xm(u),Wm(u,e,a,o),Nu(a,u),!1}a=a.return}while(a!==null);return!1}var sf=Error(s(461)),hn=!1;function Cn(e,n,a,o){n.child=e===null?Kp(n,null,a,o):ls(n,e.child,a,o)}function qm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return as(n),o=Fu(e,n,a,y,f,u),A=Hu(),e!==null&&!hn?(Gu(e,n,u),Zi(e,n,u)):(Re&&A&&yu(n),n.flags|=1,Cn(e,n,o,u),n.child)}function Ym(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Zm(e,n,f,o,u)):(e=ol(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!df(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(y,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=ki(f,o),e.ref=n.ref,e.return=n,n.child=e}function Zm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(qr(f,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=f,df(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return rf(e,n,a,o,u)}function Km(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Qm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,f!==null?f.cachePool:null),f!==null?$p(n,f):Pu(),tm(n);else return o=n.lanes=536870912,Qm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(fl(n,f.cachePool),$p(n,f),Ma(),n.memoizedState=null):(e!==null&&fl(n,null),Pu(),Ma());return Cn(e,n,u,a),n.child}function lo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Qm(e,n,a,o,u){var f=wu();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&fl(n,null),Pu(),tm(n),e!==null&&ks(e,n,o,!0),n.childLanes=u,null}function Rl(e,n){return n=wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Jm(e,n,a){return ls(n,e.child,null,a),e=Rl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function Wx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Re){if(o.mode==="hidden")return e=Rl(n,o),n.lanes=536870912,lo(null,e);if(Iu(n),(e=Ye)?(e=u_(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Pp(e),a.return=n,n.child=a,An=n,Ye=null)):e=null,e===null)throw ga(n);return n.lanes=536870912,null}return Rl(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Iu(n),u)if(n.flags&256)n.flags&=-257,n=Jm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||ks(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=Xe,o!==null&&(y=Cs(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,ts(e,y),Xn(o,e,y),sf;Bl(),n=Jm(e,n,a)}else e=f.treeContext,Ye=di(y.nextSibling),An=n,Re=!0,ma=null,fi=!1,e!==null&&Bp(n,e),n=Rl(n,o),n.flags|=4096;return n}return e=ki(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rf(e,n,a,o,u){return as(n),a=Fu(e,n,a,o,void 0,u),o=Hu(),e!==null&&!hn?(Gu(e,n,u),Zi(e,n,u)):(Re&&o&&yu(n),n.flags|=1,Cn(e,n,a,u),n.child)}function $m(e,n,a,o,u,f){return as(n),n.updateQueue=null,a=nm(n,o,a,u),em(e),o=Hu(),e!==null&&!hn?(Gu(e,n,f),Zi(e,n,f)):(Re&&o&&yu(n),n.flags|=1,Cn(e,n,a,f),n.child)}function tg(e,n,a,o,u){if(as(n),n.stateNode===null){var f=Fs,y=a.contextType;typeof y=="object"&&y!==null&&(f=Rn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Uu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Rn(y):Fs,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(ef(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&nf.enqueueReplaceState(f,f.state,null),io(n,o,f,u),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=us(a,A);f.props=G;var at=f.context,gt=a.contextType;y=Fs,typeof gt=="object"&&gt!==null&&(y=Rn(gt));var xt=a.getDerivedStateFromProps;gt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||at!==y)&&Hm(n,f,o,y),va=!1;var st=n.memoizedState;f.state=st,io(n,o,f,u),no(),at=n.memoizedState,A||st!==at||va?(typeof xt=="function"&&(ef(n,a,xt,o),at=n.memoizedState),(G=va||Fm(n,a,G,o,st,at,y))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=y,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Lu(e,n),y=n.memoizedProps,gt=us(a,y),f.props=gt,xt=n.pendingProps,st=f.context,at=a.contextType,G=Fs,typeof at=="object"&&at!==null&&(G=Rn(at)),A=a.getDerivedStateFromProps,(at=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==xt||st!==G)&&Hm(n,f,o,G),va=!1,st=n.memoizedState,f.state=st,io(n,o,f,u),no();var ft=n.memoizedState;y!==xt||st!==ft||va||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof A=="function"&&(ef(n,a,A,o),ft=n.memoizedState),(gt=va||Fm(n,a,gt,o,st,ft,G)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ft,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ft,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),f.props=o,f.state=ft,f.context=G,o=gt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Cl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ls(n,e.child,null,u),n.child=ls(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Zi(e,n,u),e}function eg(e,n,a,o){return ns(),n.flags|=256,Cn(e,n,a,o),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(e){return{baseLanes:e,cachePool:jp()}}function cf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function ng(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?Sa(n):Ma(),(e=Ye)?(e=u_(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Pp(e),a.return=n,n.child=a,An=n,Ye=null)):e=null,e===null)throw ga(n);return Xf(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ma(),u=n.mode,A=wl({mode:"hidden",children:A},u),o=es(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=lf(a),o.childLanes=cf(e,y,a),n.memoizedState=of,lo(null,o)):(Sa(n),uf(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=ff(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),A=o.fallback,u=n.mode,o=wl({mode:"visible",children:o.children},u),A=es(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,ls(n,e.child,null,a),o=n.child,o.memoizedState=lf(a),o.childLanes=cf(e,y,a),n.memoizedState=of,n=lo(null,o));else if(Sa(n),Xf(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var at=y.dgst;y=at,o=Error(s(419)),o.stack="",o.digest=y,Kr({value:o,source:null,stack:null}),n=ff(e,n,a)}else if(hn||ks(e,n,a,!1),y=(a&e.childLanes)!==0,hn||y){if(y=Xe,y!==null&&(o=Cs(y,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ts(e,o),Xn(y,e,o),sf;jf(A)||Bl(),n=ff(e,n,a)}else jf(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Ye=di(A.nextSibling),An=n,Re=!0,ma=null,fi=!1,e!==null&&Bp(n,e),n=uf(n,o.children),n.flags|=4096);return n}return u?(Ma(),A=o.fallback,u=n.mode,G=e.child,at=G.sibling,o=ki(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,at!==null?A=ki(at,A):(A=es(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,lo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=lf(a):(u=A.cachePool,u!==null?(G=un._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=jp(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=cf(e,y,a),n.memoizedState=of,lo(e.child,o)):(Sa(n),a=e.child,e=a.sibling,a=ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function uf(e,n){return n=wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wl(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function ff(e,n,a){return ls(n,e.child,null,a),e=uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ig(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),bu(e.return,n,a)}function hf(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function ag(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=on.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,Mt(on,y),Cn(e,n,o,a),o=Re?Zr:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ig(e,a,n);else if(e.tag===19)ig(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&_l(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&_l(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}hf(n,!0,a,null,f,o);break;case"together":hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function qx(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),_a(n,un,e.memoizedState.cache),ns();break;case 27:case 5:zt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Iu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ng(e,n,a):(Sa(n),e=Zi(e,n,a),e!==null?e.sibling:null);Sa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ks(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ag(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(on,on.current),o)break;return null;case 22:return n.lanes=0,Km(e,n,a,n.pendingProps);case 24:_a(n,un,e.memoizedState.cache)}return Zi(e,n,a)}function sg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!df(e,a)&&(n.flags&128)===0)return hn=!1,qx(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Re&&(n.flags&1048576)!==0&&Ip(n,Zr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=rs(n.elementType),n.type=e,typeof e=="function")_u(e)?(o=us(e,o),n.tag=1,n=tg(null,n,e,o,a)):(n.tag=0,n=rf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=qm(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=Ym(null,n,e,o,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=us(o,n.pendingProps),tg(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Lu(e,n),io(n,o,null,a);var y=n.memoizedState;if(o=y.cache,_a(n,un,o),o!==f.cache&&Au(n,[un],a,!0),no(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=eg(e,n,o,a);break t}else if(o!==u){u=li(Error(s(424)),n),Kr(u),n=eg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=di(e.firstChild),An=n,Re=!0,ma=null,fi=!0,a=Kp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ns(),o===u){n=Zi(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return Cl(e,n),e===null?(a=g_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=Xl(q.current).createElement(a),o[cn]=n,o[Tn]=e,wn(o,a,e),Tt(o),n.stateNode=o):n.memoizedState=g_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return zt(n),e===null&&Re&&(o=n.stateNode=d_(n.type,n.pendingProps,q.current),An=n,fi=!0,u=Ye,Da(n.type)?(Wf=u,Ye=di(o.firstChild)):Ye=u),Cn(e,n,n.pendingProps.children,a),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=o=Ye)&&(o=Ey(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,An=n,Ye=di(o.firstChild),fi=!1,u=!0):u=!1),u||ga(n)),zt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Gf(u,f)?o=null:y!==null&&Gf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Fu(e,n,Bx,null,null,a),To._currentValue=u),Cl(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=Ye)&&(a=Ty(a,n.pendingProps,fi),a!==null?(n.stateNode=a,An=n,Ye=null,e=!0):e=!1),e||ga(n)),null;case 13:return ng(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ls(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return qm(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,as(n),u=Rn(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return Ym(e,n,n.type,n.pendingProps,a);case 15:return Zm(e,n,n.type,n.pendingProps,a);case 19:return ag(e,n,a);case 31:return Wx(e,n,a);case 22:return Km(e,n,a,n.pendingProps);case 24:return as(n),o=Rn(un),e===null?(u=wu(),u===null&&(u=Xe,f=Ru(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Uu(n),_a(n,un,u)):((e.lanes&a)!==0&&(Lu(e,n),io(n,null,null,a),no()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,un,o)):(o=f.cache,_a(n,un,o),o!==u.cache&&Au(n,[un],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ki(e){e.flags|=4}function pf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Lg())e.flags|=8192;else throw os=dl,Du}else e.flags&=-16777217}function rg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!S_(n))if(Lg())e.flags|=8192;else throw os=dl,Du}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,er|=n)}function co(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Yx(e,n,a){var o=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(un),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vs(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Ki(n),f!==null?(Ze(n),rg(n,f)):(Ze(n),pf(n,u,null,o,a))):f?f!==e.memoizedState?(Ki(n),Ze(n),rg(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ki(n),Ze(n),pf(n,u,e,o,a)),null;case 27:if(Ht(n),a=q.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=rt.current,Vs(n)?Fp(n):(e=d_(u,o,a),n.stateNode=e,Ki(n))}return Ze(n),null;case 5:if(Ht(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=rt.current,Vs(n))Fp(n);else{var y=Xl(q.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[cn]=n,f[Tn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ki(n)}}return Ze(n),pf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=q.current,Vs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||n_(e.nodeValue,a)),e||ga(n,!0)}else e=Xl(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Vs(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Vs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),Ze(n),null);case 4:return Pt(),e===null&&zf(n.stateNode.containerInfo),Ze(n),null;case 10:return Wi(n.type),Ze(n),null;case 19:if(nt(on),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)co(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=_l(e),f!==null){for(n.flags|=128,co(o,!1),e=f.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Op(a,e),a=a.sibling;return Mt(on,on.current&1|2),Re&&ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Pl&&(n.flags|=128,u=!0,co(o,!1),n.lanes=4194304)}else{if(!u)if(e=_l(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Re)return Ze(n),null}else 2*T()-o.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,u=!0,co(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=on.current,Mt(on,u?a&1|2:a&1),Re&&ji(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ti(n),zu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Zx(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(un),Pt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ht(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(on),null;case 4:return Pt(),null;case 10:return Wi(n.type),null;case 22:case 23:return ti(n),zu(),e!==null&&nt(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(un),null;case 25:return null;default:return null}}function og(e,n){switch(Su(n),n.tag){case 3:Wi(un),Pt();break;case 26:case 27:case 5:Ht(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:nt(on);break;case 10:Wi(n.type);break;case 22:case 23:ti(n),zu(),e!==null&&nt(ss);break;case 24:Wi(un)}}function uo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){Be(n,n.return,A)}}function Ea(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var G=a,at=A;try{at()}catch(gt){Be(u,G,gt)}}}o=o.next}while(o!==f)}}catch(gt){Be(n,n.return,gt)}}function lg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Jp(n,a)}catch(o){Be(e,e.return,o)}}}function cg(e,n,a){a.props=us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Ni(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function ug(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function mf(e,n,a){try{var o=e.stateNode;_y(o,e.type,a,n),o[Tn]=n}catch(u){Be(e,e.return,u)}}function fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _f(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi));else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(_f(e,n,a),e=e.sibling;e!==null;)_f(e,n,a),e=e.sibling}function Ul(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,n,a),e=e.sibling;e!==null;)Ul(e,n,a),e=e.sibling}function hg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[cn]=e,n[Tn]=a}catch(f){Be(e,e.return,f)}}var Qi=!1,dn=!1,vf=!1,dg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Kx(e,n){if(e=e.containerInfo,Ff=Jl,e=bp(e),uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,A=-1,G=-1,at=0,gt=0,xt=e,st=null;e:for(;;){for(var ft;xt!==a||u!==0&&xt.nodeType!==3||(A=y+u),xt!==f||o!==0&&xt.nodeType!==3||(G=y+o),xt.nodeType===3&&(y+=xt.nodeValue.length),(ft=xt.firstChild)!==null;)st=xt,xt=ft;for(;;){if(xt===e)break e;if(st===a&&++at===u&&(A=y),st===f&&++gt===o&&(G=y),(ft=xt.nextSibling)!==null)break;xt=st,st=xt.parentNode}xt=ft}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hf={focusedElem:e,selectionRange:a},Jl=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xt=us(a.type,u);e=o.getSnapshotBeforeUpdate(Xt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(le){Be(a,a.return,le)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function pg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),o&4&&uo(5,a);break;case 1:if($i(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Be(a,a.return,y)}else{var u=us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Be(a,a.return,y)}}o&64&&lg(a),o&512&&fo(a,a.return);break;case 3:if($i(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Jp(e,n)}catch(y){Be(a,a.return,y)}}break;case 27:n===null&&o&4&&hg(a);case 26:case 5:$i(e,a),n===null&&o&4&&ug(a),o&512&&fo(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),o&4&&_g(e,a);break;case 13:$i(e,a),o&4&&vg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sy.bind(null,a),by(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||dn,u=Qi;var f=dn;Qi=o,(dn=n)&&!f?ta(e,a,(a.subtreeFlags&8772)!==0):$i(e,a),Qi=u,dn=f}break;case 30:break;default:$i(e,a)}}function mg(e){var n=e.alternate;n!==null&&(e.alternate=null,mg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Gn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)gg(e,n,a),a=a.sibling}function gg(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Dt,a)}catch{}switch(a.tag){case 26:dn||Ni(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Ni(a,n);var o=Je,u=Gn;Da(a.type)&&(Je=a.stateNode,Gn=!1),Ji(e,n,a),So(a.stateNode),Je=o,Gn=u;break;case 5:dn||Ni(a,n);case 6:if(o=Je,u=Gn,Je=null,Ji(e,n,a),Je=o,Gn=u,Je!==null)if(Gn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Je!==null&&(Gn?(e=Je,l_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),cr(e)):l_(Je,a.stateNode));break;case 4:o=Je,u=Gn,Je=a.stateNode.containerInfo,Gn=!0,Ji(e,n,a),Je=o,Gn=u;break;case 0:case 11:case 14:case 15:Ea(2,a,n),dn||Ea(4,a,n),Ji(e,n,a);break;case 1:dn||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&cg(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,Ji(e,n,a),dn=o;break;default:Ji(e,n,a)}}function _g(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cr(e)}catch(a){Be(n,n.return,a)}}}function vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cr(e)}catch(a){Be(n,n.return,a)}}function Qx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new dg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new dg),n;default:throw Error(s(435,e.tag))}}function Ll(e,n){var a=Qx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ry.bind(null,e,o);o.then(u,u)}})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Da(A.type)){Je=A.stateNode,Gn=!1;break t}break;case 5:Je=A.stateNode,Gn=!1;break t;case 3:case 4:Je=A.stateNode.containerInfo,Gn=!0;break t}A=A.return}if(Je===null)throw Error(s(160));gg(f,y,u),Je=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)xg(n,e),n=n.sibling}var yi=null;function xg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),kn(e),o&4&&(Ea(3,e,e.return),uo(3,e),Ea(5,e,e.return));break;case 1:Vn(n,e),kn(e),o&512&&(dn||a===null||Ni(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=yi;if(Vn(n,e),kn(e),o&512&&(dn||a===null||Ni(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Za]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[cn]=e,Tt(f),o=f;break t;case"link":var y=x_("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(f=y[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=x_("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(f=y[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[cn]=e,Tt(f),o=f}e.stateNode=o}else y_(u,e.type,e.stateNode);else e.stateNode=v_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?y_(u,e.type,e.stateNode):v_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&mf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),kn(e),o&512&&(dn||a===null||Ni(a,a.return)),a!==null&&o&4&&mf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),kn(e),o&512&&(dn||a===null||Ni(a,a.return)),e.flags&32){u=e.stateNode;try{Ls(u,"")}catch(Xt){Be(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,mf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(vf=!0);break;case 6:if(Vn(n,e),kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Be(e,e.return,Xt)}}break;case 3:if(Yl=null,u=yi,yi=Wl(n.containerInfo),Vn(n,e),yi=u,kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{cr(n.containerInfo)}catch(Xt){Be(e,e.return,Xt)}vf&&(vf=!1,yg(e));break;case 4:o=yi,yi=Wl(e.stateNode.containerInfo),Vn(n,e),kn(e),yi=o;break;case 12:Vn(n,e),kn(e);break;case 31:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 13:Vn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,at=Qi,gt=dn;if(Qi=at||u,dn=gt||G,Vn(n,e),dn=gt,Qi=at,kn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Qi||dn||fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=G.stateNode;var xt=G.memoizedProps.style,st=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Xt){Be(G,G.return,Xt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Xt){Be(G,G.return,Xt)}}}else if(n.tag===18){if(a===null){G=n;try{var ft=G.stateNode;u?c_(ft,!0):c_(G.stateNode,!1)}catch(Xt){Be(G,G.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ll(e,a))));break;case 19:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 30:break;case 21:break;default:Vn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(fg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=gf(e);Ul(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Ls(y,""),a.flags&=-33);var A=gf(e);Ul(e,A,y);break;case 3:case 4:var G=a.stateNode.containerInfo,at=gf(e);_f(e,at,G);break;default:throw Error(s(161))}}catch(gt){Be(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)pg(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fs(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&cg(n,n.return,a),fs(n);break;case 27:So(n.stateNode);case 26:case 5:Ni(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function ta(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ta(u,f,a),uo(4,f);break;case 1:if(ta(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){Be(o,o.return,at)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Qp(G[u],A)}catch(at){Be(o,o.return,at)}}a&&y&64&&lg(f),fo(f,f.return);break;case 27:hg(f);case 26:case 5:ta(u,f,a),a&&o===null&&y&4&&ug(f),fo(f,f.return);break;case 12:ta(u,f,a);break;case 31:ta(u,f,a),a&&y&4&&_g(u,f);break;case 13:ta(u,f,a),a&&y&4&&vg(u,f);break;case 22:f.memoizedState===null&&ta(u,f,a),fo(f,f.return);break;case 30:break;default:ta(u,f,a)}n=n.sibling}}function xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qr(a))}function yf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e))}function Si(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Sg(e,n,a,o),n=n.sibling}function Sg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,o),u&2048&&uo(9,n);break;case 1:Si(e,n,a,o);break;case 3:Si(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e)));break;case 12:if(u&2048){Si(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,A=f.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Be(n,n.return,G)}}else Si(e,n,a,o);break;case 31:Si(e,n,a,o);break;case 13:Si(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Si(e,n,a,o):ho(e,n):f._visibility&2?Si(e,n,a,o):(f._visibility|=2,Js(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xf(y,n);break;case 24:Si(e,n,a,o),u&2048&&yf(n.alternate,n);break;default:Si(e,n,a,o)}}function Js(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,A=a,G=o,at=y.flags;switch(y.tag){case 0:case 11:case 15:Js(f,y,A,G,u),uo(8,y);break;case 23:break;case 22:var gt=y.stateNode;y.memoizedState!==null?gt._visibility&2?Js(f,y,A,G,u):ho(f,y):(gt._visibility|=2,Js(f,y,A,G,u)),u&&at&2048&&xf(y.alternate,y);break;case 24:Js(f,y,A,G,u),u&&at&2048&&yf(y.alternate,y);break;default:Js(f,y,A,G,u)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ho(a,o),u&2048&&xf(o.alternate,o);break;case 24:ho(a,o),u&2048&&yf(o.alternate,o);break;default:ho(a,o)}n=n.sibling}}var po=8192;function $s(e,n,a){if(e.subtreeFlags&po)for(e=e.child;e!==null;)Mg(e,n,a),e=e.sibling}function Mg(e,n,a){switch(e.tag){case 26:$s(e,n,a),e.flags&po&&e.memoizedState!==null&&Iy(a,yi,e.memoizedState,e.memoizedProps);break;case 5:$s(e,n,a);break;case 3:case 4:var o=yi;yi=Wl(e.stateNode.containerInfo),$s(e,n,a),yi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=po,po=16777216,$s(e,n,a),po=o):$s(e,n,a));break;default:$s(e,n,a)}}function Eg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,bg(o,e)}Eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tg(e),e=e.sibling}function Tg(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):mo(e);break;default:mo(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,bg(o,e)}Eg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function bg(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(mg(o),o===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var Jx={getCacheForType:function(e){var n=Rn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(un).controller.signal}},$x=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,Se=null,be=0,Ie=0,ei=null,Ta=!1,tr=!1,Sf=!1,ea=0,en=0,ba=0,hs=0,Mf=0,ni=0,er=0,go=null,jn=null,Ef=!1,Ol=0,Ag=0,Pl=1/0,zl=null,Aa=null,gn=0,Ra=null,nr=null,na=0,Tf=0,bf=null,Rg=null,_o=0,Af=null;function ii(){return(Ne&2)!==0&&be!==0?be&-be:B.T!==null?Lf():Ya()}function Cg(){if(ni===0)if((be&536870912)===0||Re){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Xn(e,n,a){(e===Xe&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(ir(e,0),Ca(e,be,ni,!1)),On(e,a),((Ne&2)===0||e!==Xe)&&(e===Xe&&((Ne&2)===0&&(hs|=a),en===4&&Ca(e,be,ni,!1)),Oi(e))}function wg(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||jt(e,n),u=o?ny(e,n):Cf(e,n,!0),f=o;do{if(u===0){tr&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ty(a)){u=Cf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=go;var G=A.current.memoizedState.isDehydrated;if(G&&(ir(A,y).flags|=256),y=Cf(A,y,!1),y!==2){if(Sf&&!G){A.errorRecoveryDisabledLanes|=f,hs|=f,u=4;break t}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){ir(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,ni,!Ta);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ol+300-T(),10<u)){if(Ca(o,n,ni,!Ta),vt(o,0,!0)!==0)break t;na=n,o.timeoutHandle=r_(Dg.bind(null,o,a,jn,zl,Ef,n,ni,hs,er,Ta,f,"Throttled",-0,0),u);break t}Dg(o,a,jn,zl,Ef,n,ni,hs,er,Ta,f,null,-0,0)}}break}while(!0);Oi(e)}function Dg(e,n,a,o,u,f,y,A,G,at,gt,xt,st,ft){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},Mg(n,f,xt);var Xt=(f&62914560)===f?Ol-T():(f&4194048)===f?Ag-T():0;if(Xt=By(xt,Xt),Xt!==null){na=f,e.cancelPendingCommit=Xt(Bg.bind(null,e,n,f,a,o,u,y,A,G,gt,xt,null,st,ft)),Ca(e,f,y,!at);return}}Bg(e,n,f,a,o,u,y,A,G)}function ty(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~Mf,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Gt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&Ir(e,a,n)}function Il(){return(Ne&6)===0?(vo(0),!1):!0}function Rf(){if(Se!==null){if(Ie===0)var e=Se.return;else e=Se,Xi=is=null,Vu(e),qs=null,$r=0,e=Se;for(;e!==null;)og(e.alternate,e),e=e.return;Se=null}}function ir(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,Rf(),Xe=e,Se=a=ki(e.current,null),be=n,Ie=0,ei=null,Ta=!1,tr=jt(e,n),Sf=!1,er=ni=Mf=hs=ba=en=0,jn=go=null,Ef=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Gt(o),f=1<<u;n|=e[u],o&=~f}return ea=n,al(),a}function Ug(e,n){de=null,B.H=oo,n===Ws||n===hl?(n=qp(),Ie=3):n===Du?(n=qp(),Ie=4):Ie=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,Se===null&&(en=1,Al(e,li(n,e.current)))}function Lg(){var e=$n.current;return e===null?!0:(be&4194048)===be?hi===null:(be&62914560)===be||(be&536870912)!==0?e===hi:!1}function Ng(){var e=B.H;return B.H=oo,e===null?oo:e}function Og(){var e=B.A;return B.A=Jx,e}function Bl(){en=4,Ta||(be&4194048)!==be&&$n.current!==null||(tr=!0),(ba&134217727)===0&&(hs&134217727)===0||Xe===null||Ca(Xe,be,ni,!1)}function Cf(e,n,a){var o=Ne;Ne|=2;var u=Ng(),f=Og();(Xe!==e||be!==n)&&(zl=null,ir(e,n)),n=!1;var y=en;t:do try{if(Ie!==0&&Se!==null){var A=Se,G=ei;switch(Ie){case 8:Rf(),y=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var at=Ie;if(Ie=0,ei=null,ar(e,A,G,at),a&&tr){y=0;break t}break;default:at=Ie,Ie=0,ei=null,ar(e,A,G,at)}}ey(),y=en;break}catch(gt){Ug(e,gt)}while(!0);return n&&e.shellSuspendCounter++,Xi=is=null,Ne=o,B.H=u,B.A=f,Se===null&&(Xe=null,be=0,al()),y}function ey(){for(;Se!==null;)Pg(Se)}function ny(e,n){var a=Ne;Ne|=2;var o=Ng(),u=Og();Xe!==e||be!==n?(zl=null,Pl=T()+500,ir(e,n)):tr=jt(e,n);t:do try{if(Ie!==0&&Se!==null){n=Se;var f=ei;e:switch(Ie){case 1:Ie=0,ei=null,ar(e,n,f,1);break;case 2:case 9:if(Xp(f)){Ie=0,ei=null,zg(n);break}n=function(){Ie!==2&&Ie!==9||Xe!==e||(Ie=7),Oi(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Xp(f)?(Ie=0,ei=null,zg(n)):(Ie=0,ei=null,ar(e,n,f,7));break;case 5:var y=null;switch(Se.tag){case 26:y=Se.memoizedState;case 5:case 27:var A=Se;if(y?S_(y):A.stateNode.complete){Ie=0,ei=null;var G=A.sibling;if(G!==null)Se=G;else{var at=A.return;at!==null?(Se=at,Fl(at)):Se=null}break e}}Ie=0,ei=null,ar(e,n,f,5);break;case 6:Ie=0,ei=null,ar(e,n,f,6);break;case 8:Rf(),en=6;break t;default:throw Error(s(462))}}iy();break}catch(gt){Ug(e,gt)}while(!0);return Xi=is=null,B.H=o,B.A=u,Ne=a,Se!==null?0:(Xe=null,be=0,al(),en)}function iy(){for(;Se!==null&&!qe();)Pg(Se)}function Pg(e){var n=sg(e.alternate,e,ea);e.memoizedProps=e.pendingProps,n===null?Fl(e):Se=n}function zg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=$m(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=$m(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Vu(n);default:og(a,n),n=Se=Op(n,ea),n=sg(a,n,ea)}e.memoizedProps=e.pendingProps,n===null?Fl(e):Se=n}function ar(e,n,a,o){Xi=is=null,Vu(n),qs=null,$r=0;var u=n.return;try{if(Xx(e,u,n,a,be)){en=1,Al(e,li(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;en=1,Al(e,li(a,e.current)),Se=null;return}n.flags&32768?(Re||o===1?e=!0:tr||(be&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ig(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){Ig(n,Ta);return}e=n.return;var a=Yx(n.alternate,n,ea);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);en===0&&(en=5)}function Ig(e,n){do{var a=Zx(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);en=6,Se=null}function Bg(e,n,a,o,u,f,y,A,G){e.cancelPendingCommit=null;do Hl();while(gn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=mu,ri(e,a,f,y,A,G),e===Xe&&(Se=Xe=null,be=0),nr=n,Ra=e,na=a,Tf=f,bf=u,Rg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,oy(pt,function(){return kg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=$.p,$.p=2,y=Ne,Ne|=4;try{Kx(e,n,a)}finally{Ne=y,$.p=u,B.T=o}}gn=1,Fg(),Hg(),Gg()}}function Fg(){if(gn===1){gn=0;var e=Ra,n=nr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=$.p;$.p=2;var u=Ne;Ne|=4;try{xg(n,e);var f=Hf,y=bp(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(y!==A&&A&&A.ownerDocument&&Tp(A.ownerDocument.documentElement,A)){if(G!==null&&uu(A)){var at=G.start,gt=G.end;if(gt===void 0&&(gt=at),"selectionStart"in A)A.selectionStart=at,A.selectionEnd=Math.min(gt,A.value.length);else{var xt=A.ownerDocument||document,st=xt&&xt.defaultView||window;if(st.getSelection){var ft=st.getSelection(),Xt=A.textContent.length,le=Math.min(G.start,Xt),Ge=G.end===void 0?le:Math.min(G.end,Xt);!ft.extend&&le>Ge&&(y=Ge,Ge=le,le=y);var K=Ep(A,le),j=Ep(A,Ge);if(K&&j&&(ft.rangeCount!==1||ft.anchorNode!==K.node||ft.anchorOffset!==K.offset||ft.focusNode!==j.node||ft.focusOffset!==j.offset)){var it=xt.createRange();it.setStart(K.node,K.offset),ft.removeAllRanges(),le>Ge?(ft.addRange(it),ft.extend(j.node,j.offset)):(it.setEnd(j.node,j.offset),ft.addRange(it))}}}}for(xt=[],ft=A;ft=ft.parentNode;)ft.nodeType===1&&xt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var _t=xt[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Jl=!!Ff,Hf=Ff=null}finally{Ne=u,$.p=o,B.T=a}}e.current=n,gn=2}}function Hg(){if(gn===2){gn=0;var e=Ra,n=nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=$.p;$.p=2;var u=Ne;Ne|=4;try{pg(e,n.alternate,n)}finally{Ne=u,$.p=o,B.T=a}}gn=3}}function Gg(){if(gn===4||gn===3){gn=0,O();var e=Ra,n=nr,a=na,o=Rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,nr=Ra=null,Vg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),Ds(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=$.p,$.p=2,B.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];f(A.value,{componentStack:A.stack})}}finally{B.T=n,$.p=u}}(na&3)!==0&&Hl(),Oi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Af?_o++:(_o=0,Af=e):_o=0,vo(0)}}function Vg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qr(n)))}function Hl(){return Fg(),Hg(),Gg(),kg()}function kg(){if(gn!==5)return!1;var e=Ra,n=Tf;Tf=0;var a=Ds(na),o=B.T,u=$.p;try{$.p=32>a?32:a,B.T=null,a=bf,bf=null;var f=Ra,y=na;if(gn=0,nr=Ra=null,na=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,Tg(f.current),Sg(f,f.current,y,a),Ne=A,vo(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Dt,f)}catch{}return!0}finally{$.p=u,B.T=o,Vg(e,n)}}function jg(e,n,a){n=li(a,n),n=af(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(On(e,2),Oi(e))}function Be(e,n,a){if(e.tag===3)jg(e,e,a);else for(;n!==null;){if(n.tag===3){jg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=li(a,e),a=Xm(2),o=ya(n,a,2),o!==null&&(Wm(a,o,n,e),On(o,2),Oi(o));break}}n=n.return}}function wf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new $x;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Sf=!0,u.add(a),e=ay.bind(null,e,n,a),n.then(e,e))}function ay(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(be&a)===a&&(en===4||en===3&&(be&62914560)===be&&300>T()-Ol?(Ne&2)===0&&ir(e,0):Mf|=a,er===be&&(er=0)),Oi(e)}function Xg(e,n){n===0&&(n=ze()),e=ts(e,n),e!==null&&(On(e,n),Oi(e))}function sy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Xg(e,a)}function ry(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Xg(e,a)}function oy(e,n){return te(e,n)}var Gl=null,sr=null,Df=!1,Vl=!1,Uf=!1,wa=0;function Oi(e){e!==sr&&e.next===null&&(sr===null?Gl=sr=e:sr=sr.next=e),Vl=!0,Df||(Df=!0,cy())}function vo(e,n){if(!Uf&&Vl){Uf=!0;do for(var a=!1,o=Gl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Gt(42|e)+1)-1,f&=u&~(y&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Zg(o,f))}else f=be,f=vt(o,o===Xe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||jt(o,f)||(a=!0,Zg(o,f));o=o.next}while(a);Uf=!1}}function ly(){Wg()}function Wg(){Vl=Df=!1;var e=0;wa!==0&&xy()&&(e=wa);for(var n=T(),a=null,o=Gl;o!==null;){var u=o.next,f=qg(o,n);f===0?(o.next=null,a===null?Gl=u:a.next=u,u===null&&(sr=a)):(a=o,(e!==0||(f&3)!==0)&&(Vl=!0)),o=u}gn!==0&&gn!==5||vo(e),wa!==0&&(wa=0)}function qg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Gt(f),A=1<<y,G=u[y];G===-1?((A&a)===0||(A&o)!==0)&&(u[y]=ue(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=Xe,a=be,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Qe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Qe(o),Ds(a)){case 2:case 8:a=Et;break;case 32:a=pt;break;case 268435456:a=Lt;break;default:a=pt}return o=Yg.bind(null,e),a=te(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Qe(o),e.callbackPriority=2,e.callbackNode=null,2}function Yg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hl()&&e.callbackNode!==a)return null;var o=be;return o=vt(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(wg(e,o,n),qg(e,T()),e.callbackNode!=null&&e.callbackNode===a?Yg.bind(null,e):null)}function Zg(e,n){if(Hl())return null;wg(e,n,!0)}function cy(){Sy(function(){(Ne&6)!==0?te(mt,ly):Wg()})}function Lf(){if(wa===0){var e=js;e===0&&(e=yt,yt<<=1,(yt&261888)===0&&(yt=256)),wa=e}return wa}function Kg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ko(""+e)}function Qg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function uy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Kg((u[Tn]||null).action),y=o.submitter;y&&(n=(n=y[Tn]||null)?Kg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new tl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(wa!==0){var G=y?Qg(u,y):new FormData(u);Qu(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=y?Qg(u,y):new FormData(u),Qu(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Nf=0;Nf<pu.length;Nf++){var Of=pu[Nf],fy=Of.toLowerCase(),hy=Of[0].toUpperCase()+Of.slice(1);xi(fy,"on"+hy)}xi(Cp,"onAnimationEnd"),xi(wp,"onAnimationIteration"),xi(Dp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Cx,"onTransitionRun"),xi(wx,"onTransitionStart"),xi(Dx,"onTransitionCancel"),xi(Up,"onTransitionEnd"),ne("onMouseEnter",["mouseout","mouseover"]),ne("onMouseLeave",["mouseout","mouseover"]),ne("onPointerEnter",["pointerout","pointerover"]),ne("onPointerLeave",["pointerout","pointerover"]),Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Jg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],G=A.instance,at=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=at;try{f(u)}catch(gt){il(gt)}u.currentTarget=null,f=G}else for(y=0;y<o.length;y++){if(A=o[y],G=A.instance,at=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=at;try{f(u)}catch(gt){il(gt)}u.currentTarget=null,f=G}}}}function Me(e,n){var a=n[Fr];a===void 0&&(a=n[Fr]=new Set);var o=e+"__bubble";a.has(o)||($g(n,e,2,!1),a.add(o))}function Pf(e,n,a){var o=0;n&&(o|=4),$g(a,e,o,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function zf(e){if(!e[kl]){e[kl]=!0,Bt.forEach(function(a){a!=="selectionchange"&&(dy.has(a)||Pf(a,!1,e),Pf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,Pf("selectionchange",!1,n))}}function $g(e,n,a,o){switch(C_(n)){case 2:var u=Gy;break;case 8:u=Vy;break;default:u=Qf}a=u.bind(null,n,a,e),u=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function If(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=Z(A),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){o=f=y;continue t}A=A.parentNode}}o=o.return}ap(function(){var at=f,gt=$c(a),xt=[];t:{var st=Lp.get(e);if(st!==void 0){var ft=tl,Xt=e;switch(e){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":ft=rx;break;case"focusin":Xt="focus",ft=su;break;case"focusout":Xt="blur",ft=su;break;case"beforeblur":case"afterblur":ft=su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=cx;break;case Cp:case wp:case Dp:ft=Qv;break;case Up:ft=fx;break;case"scroll":case"scrollend":ft=Wv;break;case"wheel":ft=dx;break;case"copy":case"cut":case"paste":ft=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=cp;break;case"toggle":case"beforetoggle":ft=mx}var le=(n&4)!==0,Ge=!le&&(e==="scroll"||e==="scrollend"),K=le?st!==null?st+"Capture":null:st;le=[];for(var j=at,it;j!==null;){var _t=j;if(it=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||it===null||K===null||(_t=Hr(j,K),_t!=null&&le.push(yo(j,_t,it))),Ge)break;j=j.return}0<le.length&&(st=new ft(st,Xt,null,a,gt),xt.push({event:st,listeners:le}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",st&&a!==Jc&&(Xt=a.relatedTarget||a.fromElement)&&(Z(Xt)||Xt[ha]))break t;if((ft||st)&&(st=gt.window===gt?gt:(st=gt.ownerDocument)?st.defaultView||st.parentWindow:window,ft?(Xt=a.relatedTarget||a.toElement,ft=at,Xt=Xt?Z(Xt):null,Xt!==null&&(Ge=c(Xt),le=Xt.tag,Xt!==Ge||le!==5&&le!==27&&le!==6)&&(Xt=null)):(ft=null,Xt=at),ft!==Xt)){if(le=op,_t="onMouseLeave",K="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(le=cp,_t="onPointerLeave",K="onPointerEnter",j="pointer"),Ge=ft==null?st:ct(ft),it=Xt==null?st:ct(Xt),st=new le(_t,j+"leave",ft,a,gt),st.target=Ge,st.relatedTarget=it,_t=null,Z(gt)===at&&(le=new le(K,j+"enter",Xt,a,gt),le.target=it,le.relatedTarget=Ge,_t=le),Ge=_t,ft&&Xt)e:{for(le=py,K=ft,j=Xt,it=0,_t=K;_t;_t=le(_t))it++;_t=0;for(var ae=j;ae;ae=le(ae))_t++;for(;0<it-_t;)K=le(K),it--;for(;0<_t-it;)j=le(j),_t--;for(;it--;){if(K===j||j!==null&&K===j.alternate){le=K;break e}K=le(K),j=le(j)}le=null}else le=null;ft!==null&&t_(xt,st,ft,le,!1),Xt!==null&&Ge!==null&&t_(xt,Ge,Xt,le,!0)}}t:{if(st=at?ct(at):window,ft=st.nodeName&&st.nodeName.toLowerCase(),ft==="select"||ft==="input"&&st.type==="file")var De=_p;else if(mp(st))if(vp)De=bx;else{De=Ex;var Jt=Mx}else ft=st.nodeName,!ft||ft.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?at&&Qc(at.elementType)&&(De=_p):De=Tx;if(De&&(De=De(e,at))){gp(xt,De,a,gt);break t}Jt&&Jt(e,st,at),e==="focusout"&&at&&st.type==="number"&&at.memoizedProps.value!=null&&mn(st,"number",st.value)}switch(Jt=at?ct(at):window,e){case"focusin":(mp(Jt)||Jt.contentEditable==="true")&&(zs=Jt,fu=at,Yr=null);break;case"focusout":Yr=fu=zs=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Ap(xt,a,gt);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":Ap(xt,a,gt)}var pe;if(ou)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Ps?dp(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(up&&a.locale!=="ko"&&(Ps||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ps&&(pe=sp()):(da=gt,nu="value"in da?da.value:da.textContent,Ps=!0)),Jt=jl(at,Ae),0<Jt.length&&(Ae=new lp(Ae,e,null,a,gt),xt.push({event:Ae,listeners:Jt}),pe?Ae.data=pe:(pe=pp(a),pe!==null&&(Ae.data=pe)))),(pe=_x?vx(e,a):xx(e,a))&&(Ae=jl(at,"onBeforeInput"),0<Ae.length&&(Jt=new lp("onBeforeInput","beforeinput",null,a,gt),xt.push({event:Jt,listeners:Ae}),Jt.data=pe)),uy(xt,e,at,a,gt)}Jg(xt,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Hr(e,a),u!=null&&o.unshift(yo(e,u,f)),u=Hr(e,n),u!=null&&o.push(yo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function py(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function t_(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var A=a,G=A.alternate,at=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||at===null||(G=at,u?(at=Hr(a,f),at!=null&&y.unshift(yo(a,at,G))):u||(at=Hr(a,f),at!=null&&y.push(yo(a,at,G)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function e_(e){return(typeof e=="string"?e:""+e).replace(my,`
`).replace(gy,"")}function n_(e,n){return n=e_(n),e_(e)===n}function He(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ls(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ls(e,""+o);break;case"className":Pe(e,"class",o);break;case"tabIndex":Pe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(e,a,o);break;case"style":np(e,o,f);break;case"data":if(n!=="object"){Pe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Gi);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ko(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),je(e,"popover",o);break;case"xlinkActuate":ye(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ye(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ye(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ye(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ye(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ye(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ye(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ye(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ye(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":je(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=jv.get(a)||a,je(e,a,o))}}function Bf(e,n,a,o,u,f){switch(a){case"style":np(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ls(e,o):(typeof o=="number"||typeof o=="bigint")&&Ls(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):je(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,f,y,a,null)}}u&&He(e,n,"srcSet",a.srcSet,a,null),o&&He(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=f=y=u=null,G=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":y=gt;break;case"checked":G=gt;break;case"defaultChecked":at=gt;break;case"value":f=gt;break;case"defaultValue":A=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:He(e,n,o,gt,a,null)}}Pn(e,f,A,G,at,y,u,!1);return;case"select":Me("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:He(e,n,u,A,a,null)}n=f,a=y,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):a!=null&&rn(e,!!o,a,!0);return;case"textarea":Me("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:He(e,n,y,A,a,null)}Di(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:He(e,n,G,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<xo.length;o++)Me(xo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,at,o,a,null)}return;default:if(Qc(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&Bf(e,n,gt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&He(e,n,A,o,a,null))}function _y(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,A=null,G=null,at=null,gt=null;for(ft in a){var xt=a[ft];if(a.hasOwnProperty(ft)&&xt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=xt;default:o.hasOwnProperty(ft)||He(e,n,ft,null,o,xt)}}for(var st in o){var ft=o[st];if(xt=a[st],o.hasOwnProperty(st)&&(ft!=null||xt!=null))switch(st){case"type":f=ft;break;case"name":u=ft;break;case"checked":at=ft;break;case"defaultChecked":gt=ft;break;case"value":y=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==xt&&He(e,n,st,ft,o,xt)}}Dn(e,y,A,G,at,gt,f,u);return;case"select":ft=y=A=st=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ft=G;default:o.hasOwnProperty(f)||He(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":y=f;default:f!==G&&He(e,n,u,f,o,G)}n=A,a=y,o=ft,st!=null?rn(e,!!a,st,!1):!!o!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":ft=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,n,A,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":st=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&He(e,n,y,u,o,f)}Us(e,st,ft);return;case"option":for(var Xt in a)if(st=a[Xt],a.hasOwnProperty(Xt)&&st!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:He(e,n,Xt,null,o,st)}for(G in o)if(st=o[G],ft=a[G],o.hasOwnProperty(G)&&st!==ft&&(st!=null||ft!=null))switch(G){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:He(e,n,G,st,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)st=a[le],a.hasOwnProperty(le)&&st!=null&&!o.hasOwnProperty(le)&&He(e,n,le,null,o,st);for(at in o)if(st=o[at],ft=a[at],o.hasOwnProperty(at)&&st!==ft&&(st!=null||ft!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:He(e,n,at,st,o,ft)}return;default:if(Qc(n)){for(var Ge in a)st=a[Ge],a.hasOwnProperty(Ge)&&st!==void 0&&!o.hasOwnProperty(Ge)&&Bf(e,n,Ge,void 0,o,st);for(gt in o)st=o[gt],ft=a[gt],!o.hasOwnProperty(gt)||st===ft||st===void 0&&ft===void 0||Bf(e,n,gt,st,o,ft);return}}for(var K in a)st=a[K],a.hasOwnProperty(K)&&st!=null&&!o.hasOwnProperty(K)&&He(e,n,K,null,o,st);for(xt in o)st=o[xt],ft=a[xt],!o.hasOwnProperty(xt)||st===ft||st==null&&ft==null||He(e,n,xt,st,o,ft)}function i_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,A=u.duration;if(f&&A&&i_(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],at=G.startTime;if(at>A)break;var gt=G.transferSize,xt=G.initiatorType;gt&&i_(xt)&&(G=G.responseEnd,y+=gt*(G<A?1:(A-at)/(G-at)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ff=null,Hf=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function a_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function xy(){var e=window.event;return e&&e.type==="popstate"?e===Vf?!1:(Vf=e,!0):(Vf=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,yy=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(e){return o_.resolve(null).then(e).catch(My)}:r_;function My(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function l_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),cr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")So(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,So(a);for(var f=a.firstChild;f;){var y=f.nextSibling,A=f.nodeName;f[Za]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&So(e.ownerDocument.body);a=u}while(a);cr(n)}function c_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ey(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function Ty(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function u_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=di(e.nextSibling),e===null))return null;return e}function jf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function by(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Wf=null;function f_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return di(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function h_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function d_(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var pi=new Map,p_=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=$.d;$.d={f:Ay,r:Ry,D:Cy,C:wy,L:Dy,m:Uy,X:Ny,S:Ly,M:Oy};function Ay(){var e=ia.f(),n=Il();return e||n}function Ry(e){var n=ot(e);n!==null&&n.tag===5&&n.type==="form"?Um(n):ia.r(e)}var rr=typeof document>"u"?null:document;function m_(e,n,a){var o=rr;if(o&&typeof n=="string"&&n){var u=Te(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),p_.has(u)||(p_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),Tt(n),o.head.appendChild(n)))}}function Cy(e){ia.D(e),m_("dns-prefetch",e,null)}function wy(e,n){ia.C(e,n),m_("preconnect",e,n)}function Dy(e,n,a){ia.L(e,n,a);var o=rr;if(o&&e&&n){var u='link[rel="preload"][as="'+Te(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Te(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Te(a.imageSizes)+'"]')):u+='[href="'+Te(e)+'"]';var f=u;switch(n){case"style":f=or(e);break;case"script":f=lr(e)}pi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Mo(f))||n==="script"&&o.querySelector(Eo(f))||(n=o.createElement("link"),wn(n,"link",e),Tt(n),o.head.appendChild(n)))}}function Uy(e,n){ia.m(e,n);var a=rr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Te(o)+'"][href="'+Te(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=lr(e)}if(!pi.has(f)&&(e=g({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}o=a.createElement("link"),wn(o,"link",e),Tt(o),a.head.appendChild(o)}}}function Ly(e,n,a){ia.S(e,n,a);var o=rr;if(o&&e){var u=Q(o).hoistableStyles,f=or(e);n=n||"default";var y=u.get(f);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Mo(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&qf(e,a);var G=y=o.createElement("link");Tt(G),wn(G,"link",e),G._p=new Promise(function(at,gt){G.onload=at,G.onerror=gt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ql(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(f,y)}}}function Ny(e,n){ia.X(e,n);var a=rr;if(a&&e){var o=Q(a).hoistableScripts,u=lr(e),f=o.get(u);f||(f=a.querySelector(Eo(u)),f||(e=g({src:e,async:!0},n),(n=pi.get(u))&&Yf(e,n),f=a.createElement("script"),Tt(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Oy(e,n){ia.M(e,n);var a=rr;if(a&&e){var o=Q(a).hoistableScripts,u=lr(e),f=o.get(u);f||(f=a.querySelector(Eo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&Yf(e,n),f=a.createElement("script"),Tt(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function g_(e,n,a,o){var u=(u=q.current)?Wl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=or(a.href),a=Q(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=or(a.href);var f=Q(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Mo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||Py(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=lr(a),a=Q(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function or(e){return'href="'+Te(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function __(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Py(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),Tt(n),e.head.appendChild(n))}function lr(e){return'[src="'+Te(e)+'"]'}function Eo(e){return"script[async]"+e}function v_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Te(a.href)+'"]');if(o)return n.instance=o,Tt(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Tt(o),wn(o,"style",u),ql(o,a.precedence,e),n.instance=o;case"stylesheet":u=or(a.href);var f=e.querySelector(Mo(u));if(f)return n.state.loading|=4,n.instance=f,Tt(f),f;o=__(a),(u=pi.get(u))&&qf(o,u),f=(e.ownerDocument||e).createElement("link"),Tt(f);var y=f;return y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),wn(f,"link",o),n.state.loading|=4,ql(f,a.precedence,e),n.instance=f;case"script":return f=lr(a.src),(u=e.querySelector(Eo(f)))?(n.instance=u,Tt(u),u):(o=a,(u=pi.get(f))&&(o=g({},a),Yf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Tt(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ql(o,a.precedence,e));return n.instance}function ql(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yl=null;function x_(e,n,a){if(Yl===null){var o=new Map,u=Yl=new Map;u.set(a,o)}else u=Yl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Za]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(f):o.set(y,[f])}}return o}function y_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function zy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function S_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Iy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=or(o.href),f=n.querySelector(Mo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Tt(f);return}f=n.ownerDocument||n,o=__(o),(u=pi.get(u))&&qf(o,u),f=f.createElement("link"),Tt(f);var y=f;y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),wn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zf=0;function By(e,n){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Zf===0&&(Zf=62500*vy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Zf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(Fy,e),Kl=null,Zl.call(e))}function Fy(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var o=a.get(null);else{a=new Map,Kl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=Zl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var To={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Hy(e,n,a,o,u,f,y,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function M_(e,n,a,o,u,f,y,A,G,at,gt,xt){return e=new Hy(e,n,a,y,G,at,gt,xt,A),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=Ru(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Uu(f),e}function E_(e){return e?(e=Fs,e):Fs}function T_(e,n,a,o,u,f){u=E_(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ya(e,o,n),a!==null&&(Xn(a,e,n),eo(a,e,n))}function b_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Kf(e,n){b_(e,n),(e=e.alternate)&&b_(e,n)}function A_(e){if(e.tag===13||e.tag===31){var n=ts(e,67108864);n!==null&&Xn(n,e,67108864),Kf(e,67108864)}}function R_(e){if(e.tag===13||e.tag===31){var n=ii();n=ws(n);var a=ts(e,n);a!==null&&Xn(a,e,n),Kf(e,n)}}var Jl=!0;function Gy(e,n,a,o){var u=B.T;B.T=null;var f=$.p;try{$.p=2,Qf(e,n,a,o)}finally{$.p=f,B.T=u}}function Vy(e,n,a,o){var u=B.T;B.T=null;var f=$.p;try{$.p=8,Qf(e,n,a,o)}finally{$.p=f,B.T=u}}function Qf(e,n,a,o){if(Jl){var u=Jf(o);if(u===null)If(e,n,o,$l,a),w_(e,o);else if(jy(u,e,n,a,o))o.stopPropagation();else if(w_(e,o),n&4&&-1<ky.indexOf(e)){for(;u!==null;){var f=ot(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=At(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var G=1<<31-Gt(y);A.entanglements[1]|=G,y&=~G}Oi(f),(Ne&6)===0&&(Pl=T()+500,vo(0))}}break;case 31:case 13:A=ts(f,2),A!==null&&Xn(A,f,2),Il(),Kf(f,2)}if(f=Jf(o),f===null&&If(e,n,o,$l,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else If(e,n,o,null,a)}}function Jf(e){return e=$c(e),$f(e)}var $l=null;function $f(e){if($l=null,e=Z(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function C_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(et()){case mt:return 2;case Et:return 8;case pt:case $t:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var th=!1,Ua=null,La=null,Na=null,bo=new Map,Ao=new Map,Oa=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w_(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ot(n),n!==null&&A_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function jy(e,n,a,o,u){switch(n){case"focusin":return Ua=Ro(Ua,e,n,a,o,u),!0;case"dragenter":return La=Ro(La,e,n,a,o,u),!0;case"mouseover":return Na=Ro(Na,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return bo.set(f,Ro(bo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ao.set(f,Ro(Ao.get(f)||null,e,n,a,o,u)),!0}return!1}function D_(e){var n=Z(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Br(e.priority,function(){R_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Br(e.priority,function(){R_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Jc=o,a.target.dispatchEvent(o),Jc=null}else return n=ot(a),n!==null&&A_(n),e.blockedOn=a,!1;n.shift()}return!0}function U_(e,n,a){tc(e)&&a.delete(n)}function Xy(){th=!1,Ua!==null&&tc(Ua)&&(Ua=null),La!==null&&tc(La)&&(La=null),Na!==null&&tc(Na)&&(Na=null),bo.forEach(U_),Ao.forEach(U_)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,th||(th=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Xy)))}var nc=null;function L_(e){nc!==e&&(nc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if($f(o||a)===null)continue;break}var f=ot(a);f!==null&&(e.splice(n,3),n-=3,Qu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function cr(e){function n(G){return ec(G,e)}Ua!==null&&ec(Ua,e),La!==null&&ec(La,e),Na!==null&&ec(Na,e),bo.forEach(n),Ao.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)D_(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[Tn]||null;if(typeof f=="function")y||L_(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Tn]||null)A=y.formAction;else if($f(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),L_(a)}}}function N_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function eh(e){this._internalRoot=e}ic.prototype.render=eh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ii();T_(a,o,e,n,null,null)},ic.prototype.unmount=eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;T_(e.current,2,null,e,null,null),Il(),n[ha]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ya();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&D_(e)}};var O_=t.version;if(O_!=="19.2.8")throw Error(s(527,O_,"19.2.8"));$.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Wy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Dt=ac.inject(Wy),wt=ac}catch{}}return wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Gm,f=Vm,y=km;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=M_(e,1,!1,null,null,a,o,null,u,f,y,N_),e[ha]=n.current,zf(e),new eh(n)},wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Gm,y=Vm,A=km,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=M_(e,1,!0,n,a??null,o,u,G,f,y,A,N_),n.context=E_(null),a=n.current,o=ii(),o=ws(o),u=xa(o),u.callback=null,ya(a,u,o),a=o,n.current.lanes=a,On(n,a),Oi(n),e[ha]=n.current,zf(e),new ic(n)},wo.version="19.2.8",wo}var j_;function iS(){if(j_)return ah.exports;j_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ah.exports=nS(),ah.exports}var aS=iS();const sS=rv(aS);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ov=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=se.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>se.createElement("svg",{ref:m,...oS,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:ov("lucide",l),...d},[...h.map(([p,v])=>se.createElement(p,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(r,t)=>{const i=se.forwardRef(({className:s,...l},c)=>se.createElement(lS,{ref:c,iconNode:t,className:ov(`lucide-${rS(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=Ke("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=Ke("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=Ke("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=Ke("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Ke("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=Ke("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=Ke("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=Ke("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=Ke("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=Ke("FileVideo",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Ke("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Ke("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Ke("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Ke("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=Ke("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=Ke("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Ke("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=Ke("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=Ke("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=Ke("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Ke("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=Ke("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Ke("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=Ke("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=Ke("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="180",Ar={ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TS=0,K_=1,bS=2,lv=1,AS=2,ca=3,Wa=0,Yn=1,bi=2,ja=0,Rr=1,Q_=2,J_=3,$_=4,RS=5,ys=100,CS=101,wS=102,DS=103,US=104,LS=200,NS=201,OS=202,PS=203,qh=204,Yh=205,zS=206,IS=207,BS=208,FS=209,HS=210,GS=211,VS=212,kS=213,jS=214,Zh=0,Kh=1,Qh=2,wr=3,Jh=4,$h=5,td=6,ed=7,cv=0,XS=1,WS=2,Xa=0,qS=1,YS=2,ZS=3,KS=4,QS=5,JS=6,$S=7,uv=300,Dr=301,Ur=302,nd=303,id=304,Xc=306,ad=1e3,Ms=1001,sd=1002,Ci=1003,tM=1004,oc=1005,zi=1006,fh=1007,Es=1008,Bi=1009,fv=1010,hv=1011,Ho=1012,Fd=1013,Ts=1014,ua=1015,Xo=1016,Hd=1017,Gd=1018,Go=1020,dv=35902,pv=35899,mv=1021,gv=1022,Ri=1023,Vo=1026,ko=1027,_v=1028,Vd=1029,vv=1030,kd=1031,jd=1033,Lc=33776,Nc=33777,Oc=33778,Pc=33779,rd=35840,od=35841,ld=35842,cd=35843,ud=36196,fd=37492,hd=37496,dd=37808,pd=37809,md=37810,gd=37811,_d=37812,vd=37813,xd=37814,yd=37815,Sd=37816,Md=37817,Ed=37818,Td=37819,bd=37820,Ad=37821,Rd=36492,Cd=36494,wd=36495,Dd=36283,Ud=36284,Ld=36285,Nd=36286,eM=3200,nM=3201,xv=0,iM=1,ka="",gi="srgb",Lr="srgb-linear",Bc="linear",Ve="srgb",ur=7680,t0=519,aM=512,sM=513,rM=514,yv=515,oM=516,lM=517,cM=518,uM=519,e0=35044,n0="300 es",Ii=2e3,Fc=2001;class Rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=Math.PI/180,Od=180/Math.PI;function Wo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Ee(r,t,i){return Math.max(t,Math.min(i,r))}function fM(r,t){return(r%t+t)%t}function hh(r,t,i){return(1-i)*r+i*t}function Do(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hM={DEG2RAD:zc};class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3];const x=c[h+0],S=c[h+1],E=c[h+2],b=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(g!==b||m!==x||p!==S||v!==E){let M=1-d;const _=m*x+p*S+v*E+g*b,H=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const V=Math.sqrt(L),N=Math.atan2(V,_*H);M=Math.sin(M*N)/V,d=Math.sin(d*N)/V}const D=d*H;if(m=m*M+x*D,p=p*M+S*D,v=v*M+E*D,g=g*M+b*D,M===1-d){const V=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=V,p*=V,v*=V,g*=V}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[h],x=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+v*g+m*S-p*x,t[i+1]=m*E+v*x+p*g-d*S,t[i+2]=p*E+v*S+d*x-m*g,t[i+3]=v*E-d*g-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(c/2),x=m(s/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*v*g+p*S*E,this._y=p*S*g-x*v*E,this._z=p*v*E+x*S*g,this._w=p*v*g-x*S*E;break;case"YXZ":this._x=x*v*g+p*S*E,this._y=p*S*g-x*v*E,this._z=p*v*E-x*S*g,this._w=p*v*g+x*S*E;break;case"ZXY":this._x=x*v*g-p*S*E,this._y=p*S*g+x*v*E,this._z=p*v*E+x*S*g,this._w=p*v*g-x*S*E;break;case"ZYX":this._x=x*v*g-p*S*E,this._y=p*S*g+x*v*E,this._z=p*v*E-x*S*g,this._w=p*v*g+x*S*E;break;case"YZX":this._x=x*v*g+p*S*E,this._y=p*S*g+x*v*E,this._z=p*v*E-x*S*g,this._w=p*v*g-x*S*E;break;case"XZY":this._x=x*v*g-p*S*E,this._y=p*S*g-x*v*E,this._z=p*v*E+x*S*g,this._w=p*v*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=s+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(v-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=h*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(i0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(i0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*v,this.y=s+m*v+d*p-c*g,this.z=l+m*g+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return dh.copy(this).projectOnVector(t),this.sub(dh)}reflect(t){return this.sub(dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dh=new tt,i0=new bs;class me{constructor(t,i,s,l,c,h,d,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],x=s[2],S=s[5],E=s[8],b=l[0],M=l[3],_=l[6],H=l[1],L=l[4],D=l[7],V=l[2],N=l[5],I=l[8];return c[0]=h*b+d*H+m*V,c[3]=h*M+d*L+m*N,c[6]=h*_+d*D+m*I,c[1]=p*b+v*H+g*V,c[4]=p*M+v*L+g*N,c[7]=p*_+v*D+g*I,c[2]=x*b+S*H+E*V,c[5]=x*M+S*L+E*N,c[8]=x*_+S*D+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*h-d*p,x=d*m-v*c,S=p*c-h*m,E=i*g+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=g*b,t[1]=(l*p-v*s)*b,t[2]=(d*s-l*h)*b,t[3]=x*b,t[4]=(v*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=S*b,t[7]=(s*m-p*i)*b,t[8]=(h*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ph.makeScale(t,i)),this}rotate(t){return this.premultiply(ph.makeRotation(-t)),this}translate(t,i){return this.premultiply(ph.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new me;function Sv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Hc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dM(){const r=Hc("canvas");return r.style.display="block",r}const a0={};function jo(r){r in a0||(a0[r]=!0,console.warn(r))}function pM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const s0=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r0=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mM(){const r={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return jo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return jo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Lr]:{primaries:t,whitePoint:s,transfer:Bc,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const Le=mM();function fa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fr;class gM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{fr===void 0&&(fr=Hc("canvas")),fr.width=t.width,fr.height=t.height;const l=fr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=fr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=fa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _M=0;class Xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(mh(l[h].image)):c.push(mh(l[h]))}else c=mh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function mh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vM=0;const gh=new tt;class Zn extends Rs{constructor(t=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,s=Ms,l=Ms,c=zi,h=Es,d=Ri,m=Bi,p=Zn.DEFAULT_ANISOTROPY,v=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Wo(),this.name="",this.source=new Xd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ad:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ad:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=uv;Zn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],x=m[1],S=m[5],E=m[9],b=m[2],M=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+b)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(S+1)/2,V=(_+1)/2,N=(v+x)/4,I=(g+b)/4,X=(E+M)/4;return L>D&&L>V?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=N/s,c=I/s):D>V?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=N/l,c=X/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=I/c,l=X/c),this.set(s,l,c,i),this}let H=Math.sqrt((M-E)*(M-E)+(g-b)*(g-b)+(x-v)*(x-v));return Math.abs(H)<.001&&(H=1),this.x=(M-E)/H,this.y=(g-b)/H,this.z=(x-v)/H,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends Rs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Zn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Xd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends xM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Mv extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yM extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Mi):Mi.fromBufferAttribute(c,h),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lc.copy(s.boundingBox)),lc.applyMatrix4(t.matrixWorld),this.union(lc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),cc.subVectors(this.max,Uo),hr.subVectors(t.a,Uo),dr.subVectors(t.b,Uo),pr.subVectors(t.c,Uo),za.subVectors(dr,hr),Ia.subVectors(pr,dr),ds.subVectors(hr,pr);let i=[0,-za.z,za.y,0,-Ia.z,Ia.y,0,-ds.z,ds.y,za.z,0,-za.x,Ia.z,0,-Ia.x,ds.z,0,-ds.x,-za.y,za.x,0,-Ia.y,Ia.x,0,-ds.y,ds.x,0];return!_h(i,hr,dr,pr,cc)||(i=[1,0,0,0,1,0,0,0,1],!_h(i,hr,dr,pr,cc))?!1:(uc.crossVectors(za,Ia),i=[uc.x,uc.y,uc.z],_h(i,hr,dr,pr,cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const aa=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Mi=new tt,lc=new qo,hr=new tt,dr=new tt,pr=new tt,za=new tt,Ia=new tt,ds=new tt,Uo=new tt,cc=new tt,uc=new tt,ps=new tt;function _h(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ps.fromArray(r,c);const d=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),m=t.dot(ps),p=i.dot(ps),v=s.dot(ps);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const SM=new qo,Lo=new tt,vh=new tt;class Wc{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):SM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(vh)),this.expandByPoint(Lo.copy(t.center).sub(vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sa=new tt,xh=new tt,fc=new tt,Ba=new tt,yh=new tt,hc=new tt,Sh=new tt;class Wd{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){xh.copy(t).add(i).multiplyScalar(.5),fc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(xh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(fc),d=Ba.dot(this.direction),m=-Ba.dot(fc),p=Ba.lengthSq(),v=Math.abs(1-h*h);let g,x,S,E;if(v>0)if(g=h*m-d,x=h*d-m,E=c*v,g>=0)if(x>=-E)if(x<=E){const b=1/v;g*=b,x*=b,S=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-h*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(g=Math.max(0,-(h*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p);else x=h>0?-c:c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(xh).addScaledVector(fc,x),S}intersectSphere(t,i){sa.subVectors(t.center,this.origin);const s=sa.dot(this.direction),l=sa.dot(sa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(c=(t.min.y-x.y)*v,h=(t.max.y-x.y)*v):(c=(t.max.y-x.y)*v,h=(t.min.y-x.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,sa)!==null}intersectTriangle(t,i,s,l,c){yh.subVectors(i,t),hc.subVectors(s,t),Sh.crossVectors(yh,hc);let h=this.direction.dot(Sh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(hc.crossVectors(Ba,hc));if(m<0)return null;const p=d*this.direction.dot(yh.cross(Ba));if(p<0||m+p>h)return null;const v=-d*Ba.dot(Sh);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,i,s,l,c,h,d,m,p,v,g,x,S,E,b,M){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,g,x,S,E,b,M)}set(t,i,s,l,c,h,d,m,p,v,g,x,S,E,b,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=S,_[7]=E,_[11]=b,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/mr.setFromMatrixColumn(t,0).length(),c=1/mr.setFromMatrixColumn(t,1).length(),h=1/mr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=h*v,S=h*g,E=d*v,b=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*v,S=m*g,E=p*v,b=p*g;i[0]=x+b*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=b+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*v,S=m*g,E=p*v,b=p*g;i[0]=x-b*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=b-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*v,S=h*g,E=d*v,b=d*g;i[0]=m*v,i[4]=E*p-S,i[8]=x*p+b,i[1]=m*g,i[5]=b*p+x,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,S=h*p,E=d*m,b=d*p;i[0]=m*v,i[4]=b-x*g,i[8]=E*g+S,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=S*g+E,i[10]=x-b*g}else if(t.order==="XZY"){const x=h*m,S=h*p,E=d*m,b=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+b,i[5]=h*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*v,i[10]=b*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MM,t,EM)}lookAt(t,i,s){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Fa.crossVectors(s,ai),Fa.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Fa.crossVectors(s,ai)),Fa.normalize(),dc.crossVectors(ai,Fa),l[0]=Fa.x,l[4]=dc.x,l[8]=ai.x,l[1]=Fa.y,l[5]=dc.y,l[9]=ai.y,l[2]=Fa.z,l[6]=dc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],x=s[9],S=s[13],E=s[2],b=s[6],M=s[10],_=s[14],H=s[3],L=s[7],D=s[11],V=s[15],N=l[0],I=l[4],X=l[8],U=l[12],w=l[1],k=l[5],J=l[9],lt=l[13],ht=l[2],dt=l[6],B=l[10],$=l[14],W=l[3],St=l[7],Ct=l[11],P=l[15];return c[0]=h*N+d*w+m*ht+p*W,c[4]=h*I+d*k+m*dt+p*St,c[8]=h*X+d*J+m*B+p*Ct,c[12]=h*U+d*lt+m*$+p*P,c[1]=v*N+g*w+x*ht+S*W,c[5]=v*I+g*k+x*dt+S*St,c[9]=v*X+g*J+x*B+S*Ct,c[13]=v*U+g*lt+x*$+S*P,c[2]=E*N+b*w+M*ht+_*W,c[6]=E*I+b*k+M*dt+_*St,c[10]=E*X+b*J+M*B+_*Ct,c[14]=E*U+b*lt+M*$+_*P,c[3]=H*N+L*w+D*ht+V*W,c[7]=H*I+L*k+D*dt+V*St,c[11]=H*X+L*J+D*B+V*Ct,c[15]=H*U+L*lt+D*$+V*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],x=t[10],S=t[14],E=t[3],b=t[7],M=t[11],_=t[15];return E*(+c*m*g-l*p*g-c*d*x+s*p*x+l*d*S-s*m*S)+b*(+i*m*S-i*p*x+c*h*x-l*h*S+l*p*v-c*m*v)+M*(+i*p*g-i*d*S-c*h*g+s*h*S+c*d*v-s*p*v)+_*(-l*d*v-i*m*g+i*d*x+l*h*g-s*h*x+s*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],x=t[10],S=t[11],E=t[12],b=t[13],M=t[14],_=t[15],H=g*M*p-b*x*p+b*m*S-d*M*S-g*m*_+d*x*_,L=E*x*p-v*M*p-E*m*S+h*M*S+v*m*_-h*x*_,D=v*b*p-E*g*p+E*d*S-h*b*S-v*d*_+h*g*_,V=E*g*m-v*b*m-E*d*x+h*b*x+v*d*M-h*g*M,N=i*H+s*L+l*D+c*V;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return t[0]=H*I,t[1]=(b*x*c-g*M*c-b*l*S+s*M*S+g*l*_-s*x*_)*I,t[2]=(d*M*c-b*m*c+b*l*p-s*M*p-d*l*_+s*m*_)*I,t[3]=(g*m*c-d*x*c-g*l*p+s*x*p+d*l*S-s*m*S)*I,t[4]=L*I,t[5]=(v*M*c-E*x*c+E*l*S-i*M*S-v*l*_+i*x*_)*I,t[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*_-i*m*_)*I,t[7]=(h*x*c-v*m*c+v*l*p-i*x*p-h*l*S+i*m*S)*I,t[8]=D*I,t[9]=(E*g*c-v*b*c-E*s*S+i*b*S+v*s*_-i*g*_)*I,t[10]=(h*b*c-E*d*c+E*s*p-i*b*p-h*s*_+i*d*_)*I,t[11]=(v*d*c-h*g*c-v*s*p+i*g*p+h*s*S-i*d*S)*I,t[12]=V*I,t[13]=(v*b*l-E*g*l+E*s*x-i*b*x-v*s*M+i*g*M)*I,t[14]=(E*d*l-h*b*l-E*s*m+i*b*m+h*s*M-i*d*M)*I,t[15]=(h*g*l-v*d*l+v*s*m-i*g*m-h*s*x+i*d*x)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,g=d+d,x=c*p,S=c*v,E=c*g,b=h*v,M=h*g,_=d*g,H=m*p,L=m*v,D=m*g,V=s.x,N=s.y,I=s.z;return l[0]=(1-(b+_))*V,l[1]=(S+D)*V,l[2]=(E-L)*V,l[3]=0,l[4]=(S-D)*N,l[5]=(1-(x+_))*N,l[6]=(M+H)*N,l[7]=0,l[8]=(E+L)*I,l[9]=(M-H)*I,l[10]=(1-(x+b))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=mr.set(l[0],l[1],l[2]).length();const h=mr.set(l[4],l[5],l[6]).length(),d=mr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,v=1/h,g=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,i.setFromRotationMatrix(Ei),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Ii,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(s-l),x=(i+t)/(i-t),S=(s+l)/(s-l);let E,b;if(m)E=c/(h-c),b=h*c/(h-c);else if(d===Ii)E=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===Fc)E=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ii,m=!1){const p=this.elements,v=2/(i-t),g=2/(s-l),x=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,b;if(m)E=1/(h-c),b=h/(h-c);else if(d===Ii)E=-2/(h-c),b=-(h+c)/(h-c);else if(d===Fc)E=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const mr=new tt,Ei=new sn,MM=new tt(0,0,0),EM=new tt(1,1,1),Fa=new tt,dc=new tt,ai=new tt,o0=new sn,l0=new bs;class Fi{constructor(t=0,i=0,s=0,l=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return o0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(o0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return l0.setFromEuler(this),this.setFromQuaternion(l0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Ev{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let TM=0;const c0=new tt,gr=new bs,ra=new sn,pc=new tt,No=new tt,bM=new tt,AM=new bs,u0=new tt(1,0,0),f0=new tt(0,1,0),h0=new tt(0,0,1),d0={type:"added"},RM={type:"removed"},_r={type:"childadded",child:null},Mh={type:"childremoved",child:null};class En extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new tt,i=new Fi,s=new bs,l=new tt(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new me}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(u0,t)}rotateY(t){return this.rotateOnAxis(f0,t)}rotateZ(t){return this.rotateOnAxis(h0,t)}translateOnAxis(t,i){return c0.copy(t).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(u0,t)}translateY(t){return this.translateOnAxis(f0,t)}translateZ(t){return this.translateOnAxis(h0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?pc.copy(t):pc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(No,pc,this.up):ra.lookAt(pc,No,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),gr.setFromRotationMatrix(ra),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(d0),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(RM),Mh.child=t,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(d0),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,bM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,AM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),g=h(t.shapes),x=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new tt(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new tt,oa=new tt,Eh=new tt,la=new tt,vr=new tt,xr=new tt,p0=new tt,Th=new tt,bh=new tt,Ah=new tt,Rh=new an,Ch=new an,wh=new an;class Ai{constructor(t=new tt,i=new tt,s=new tt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ti.subVectors(l,i),oa.subVectors(s,i),Eh.subVectors(t,i);const h=Ti.dot(Ti),d=Ti.dot(oa),m=Ti.dot(Eh),p=oa.dot(oa),v=oa.dot(Eh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,S=(p*m-d*v)*x,E=(h*v-d*m)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,la.x),m.addScaledVector(h,la.y),m.addScaledVector(d,la.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Rh.setScalar(0),Ch.setScalar(0),wh.setScalar(0),Rh.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,s),wh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Rh,c.x),h.addScaledVector(Ch,c.y),h.addScaledVector(wh,c.z),h}static isFrontFacing(t,i,s,l){return Ti.subVectors(s,i),oa.subVectors(t,i),Ti.cross(oa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ti.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;vr.subVectors(l,s),xr.subVectors(c,s),Th.subVectors(t,s);const m=vr.dot(Th),p=xr.dot(Th);if(m<=0&&p<=0)return i.copy(s);bh.subVectors(t,l);const v=vr.dot(bh),g=xr.dot(bh);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(vr,h);Ah.subVectors(t,c);const S=vr.dot(Ah),E=xr.dot(Ah);if(E>=0&&S<=E)return i.copy(c);const b=S*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(xr,d);const M=v*E-S*g;if(M<=0&&g-v>=0&&S-E>=0)return p0.subVectors(c,l),d=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(p0,d);const _=1/(M+b+x);return h=b*_,d=x*_,i.copy(s).addScaledVector(vr,h).addScaledVector(xr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Dh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class _e{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=fM(t,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Dh(h,c,t+1/3),this.g=Dh(h,c,t),this.b=Dh(h,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const s=Tv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Le.workingToColorSpace(Nn.copy(this),t),Math.round(Ee(Nn.r*255,0,255))*65536+Math.round(Ee(Nn.g*255,0,255))*256+Math.round(Ee(Nn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=gi){Le.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(mc);const s=hh(Ha.h,mc.h,i),l=hh(Ha.s,mc.s,i),c=hh(Ha.l,mc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new _e;_e.NAMES=Tv;let CM=0;class Pr extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Rr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Yh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==qh&&(s.blendSrc=this.blendSrc),this.blendDst!==Yh&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fo extends Pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new tt,gc=new fe;let wM=0;class vi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=e0,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(t),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Do(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==e0&&(t.usage=this.usage),t}}class bv extends vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Av extends vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class $e extends vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let DM=0;const mi=new sn,Uh=new En,yr=new tt,si=new qo,Oo=new qo,Mn=new tt;class Fn extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sv(t)?Av:bv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new me().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,s){return mi.makeTranslation(t,i,s),this.applyMatrix4(mi),this}scale(t,i,s){return mi.makeScale(t,i,s),this.applyMatrix4(mi),this}lookAt(t){return Uh.lookAt(t),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new $e(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(si.min,Oo.min),si.expandByPoint(Mn),Mn.addVectors(si.max,Oo.max),si.expandByPoint(Mn)):(si.expandByPoint(Oo.min),si.expandByPoint(Oo.max))}si.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Mn.fromBufferAttribute(d,p),m&&(yr.fromBufferAttribute(t,p),Mn.add(yr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new tt,m[X]=new tt;const p=new tt,v=new tt,g=new tt,x=new fe,S=new fe,E=new fe,b=new tt,M=new tt;function _(X,U,w){p.fromBufferAttribute(s,X),v.fromBufferAttribute(s,U),g.fromBufferAttribute(s,w),x.fromBufferAttribute(c,X),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,w),v.sub(p),g.sub(p),S.sub(x),E.sub(x);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(k),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(k),d[X].add(b),d[U].add(b),d[w].add(b),m[X].add(M),m[U].add(M),m[w].add(M))}let H=this.groups;H.length===0&&(H=[{start:0,count:t.count}]);for(let X=0,U=H.length;X<U;++X){const w=H[X],k=w.start,J=w.count;for(let lt=k,ht=k+J;lt<ht;lt+=3)_(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const L=new tt,D=new tt,V=new tt,N=new tt;function I(X){V.fromBufferAttribute(l,X),N.copy(V);const U=d[X];L.copy(U),L.sub(V.multiplyScalar(V.dot(U))).normalize(),D.crossVectors(N,U);const k=D.dot(m[X])<0?-1:1;h.setXYZW(X,L.x,L.y,L.z,k)}for(let X=0,U=H.length;X<U;++X){const w=H[X],k=w.start,J=w.count;for(let lt=k,ht=k+J;lt<ht;lt+=3)I(t.getX(lt+0)),I(t.getX(lt+1)),I(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new tt,c=new tt,h=new tt,d=new tt,m=new tt,p=new tt,v=new tt,g=new tt;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),b=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let S=0,E=0;for(let b=0,M=m.length;b<M;b++){d.isInterleavedBufferAttribute?S=m[b]*d.data.stride+d.offset:S=m[b]*v;for(let _=0;_<v;_++)x[E++]=p[S++]}return new vi(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],S=t(x,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];v.push(S.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m0=new sn,ms=new Wd,_c=new Wc,g0=new tt,vc=new tt,xc=new tt,yc=new tt,Lh=new tt,Sc=new tt,_0=new tt,Mc=new tt;class Bn extends En{constructor(t=new Fn,i=new Fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Sc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(Lh.fromBufferAttribute(g,t),h?Sc.addScaledVector(Lh,v):Sc.addScaledVector(Lh.sub(i),v))}i.add(Sc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(c),ms.copy(t.ray).recast(t.near),!(_c.containsPoint(ms.origin)===!1&&(ms.intersectSphere(_c,g0)===null||ms.origin.distanceToSquared(g0)>(t.far-t.near)**2))&&(m0.copy(c).invert(),ms.copy(t.ray).applyMatrix4(m0),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ms)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const M=x[E],_=h[M.materialIndex],H=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let D=H,V=L;D<V;D+=3){const N=d.getX(D),I=d.getX(D+1),X=d.getX(D+2);l=Ec(this,_,t,s,p,v,g,N,I,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=E,_=b;M<_;M+=3){const H=d.getX(M),L=d.getX(M+1),D=d.getX(M+2);l=Ec(this,h,t,s,p,v,g,H,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const M=x[E],_=h[M.materialIndex],H=Math.max(M.start,S.start),L=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=H,V=L;D<V;D+=3){const N=D,I=D+1,X=D+2;l=Ec(this,_,t,s,p,v,g,N,I,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let M=E,_=b;M<_;M+=3){const H=M,L=M+1,D=M+2;l=Ec(this,h,t,s,p,v,g,H,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function UM(r,t,i,s,l,c,h,d){let m;if(t.side===Yn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Wa,d),m===null)return null;Mc.copy(d),Mc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Mc);return p<i.near||p>i.far?null:{distance:p,point:Mc.clone(),object:r}}function Ec(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,vc),r.getVertexPosition(m,xc),r.getVertexPosition(p,yc);const v=UM(r,t,i,s,vc,xc,yc,_0);if(v){const g=new tt;Ai.getBarycoord(_0,vc,xc,yc,g),l&&(v.uv=Ai.getInterpolatedAttribute(l,d,m,p,g,new fe)),c&&(v.uv1=Ai.getInterpolatedAttribute(c,d,m,p,g,new fe)),h&&(v.normal=Ai.getInterpolatedAttribute(h,d,m,p,g,new tt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new tt,materialIndex:0};Ai.getNormal(vc,xc,yc,x.normal),v.face=x,v.barycoord=g}return v}class Yo extends Fn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(g,2));function E(b,M,_,H,L,D,V,N,I,X,U){const w=D/I,k=V/X,J=D/2,lt=V/2,ht=N/2,dt=I+1,B=X+1;let $=0,W=0;const St=new tt;for(let Ct=0;Ct<B;Ct++){const P=Ct*k-lt;for(let nt=0;nt<dt;nt++){const Mt=nt*w-J;St[b]=Mt*H,St[M]=P*L,St[_]=ht,p.push(St.x,St.y,St.z),St[b]=0,St[M]=0,St[_]=N>0?1:-1,v.push(St.x,St.y,St.z),g.push(nt/I),g.push(1-Ct/X),$+=1}}for(let Ct=0;Ct<X;Ct++)for(let P=0;P<I;P++){const nt=x+P+dt*Ct,Mt=x+P+dt*(Ct+1),rt=x+(P+1)+dt*(Ct+1),Rt=x+(P+1)+dt*Ct;m.push(nt,Mt,Rt),m.push(Mt,rt,Rt),W+=6}d.addGroup(S,W,U),S+=W,x+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function In(r){const t={};for(let i=0;i<r.length;i++){const s=Nr(r[i]);for(const l in s)t[l]=s[l]}return t}function LM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Rv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const NM={clone:Nr,merge:In};var OM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OM,this.fragmentShader=PM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=LM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Cv extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new tt,v0=new fe,x0=new fe;class _i extends Cv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,v0,x0),i.subVectors(x0,v0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(zc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Sr=-90,Mr=1;class zM extends En{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Sr,Mr,t,i);l.layers=this.layers,this.add(l);const c=new _i(Sr,Mr,t,i);c.layers=this.layers,this.add(c);const h=new _i(Sr,Mr,t,i);h.layers=this.layers,this.add(h);const d=new _i(Sr,Mr,t,i);d.layers=this.layers,this.add(d);const m=new _i(Sr,Mr,t,i);m.layers=this.layers,this.add(m);const p=new _i(Sr,Mr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,x,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class wv extends Zn{constructor(t=[],i=Dr,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class IM extends As{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yo(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:ja});c.uniforms.tEquirect.value=i;const h=new Bn(l,c),d=i.minFilter;return i.minFilter===Es&&(i.minFilter=zi),new zM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Io extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,s),_=this._getHandJoint(p,b);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Io;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class qd{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new _e(t),this.near=i,this.far=s}clone(){return new qd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class FM extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oh=new tt,HM=new tt,GM=new me;class Va{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Oh.subVectors(s,i).cross(HM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Oh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||GM.getNormalMatrix(t),l=this.coplanarPoint(Oh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Wc,VM=new fe(.5,.5),Tc=new tt;class Yd{constructor(t=new Va,i=new Va,s=new Va,l=new Va,c=new Va,h=new Va){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ii,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],S=c[7],E=c[8],b=c[9],M=c[10],_=c[11],H=c[12],L=c[13],D=c[14],V=c[15];if(l[0].setComponents(p-h,S-v,_-E,V-H).normalize(),l[1].setComponents(p+h,S+v,_+E,V+H).normalize(),l[2].setComponents(p+d,S+g,_+b,V+L).normalize(),l[3].setComponents(p-d,S-g,_-b,V-L).normalize(),s)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,S-x,_-M,V-D).normalize();else if(l[4].setComponents(p-m,S-x,_-M,V-D).normalize(),i===Ii)l[5].setComponents(p+m,S+x,_+M,V+D).normalize();else if(i===Fc)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const i=VM.distanceTo(t.center);return gs.radius=.7071067811865476+i,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Tc.x=l.normal.x>0?t.max.x:t.min.x,Tc.y=l.normal.y>0?t.max.y:t.min.y,Tc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zd extends Pr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gc=new tt,Vc=new tt,y0=new sn,Po=new Wd,bc=new Wc,Ph=new tt,S0=new tt;class kM extends En{constructor(t=new Fn,i=new Zd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Gc.fromBufferAttribute(i,l-1),Vc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Gc.distanceTo(Vc);t.setAttribute("lineDistance",new $e(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(l),bc.radius+=c,t.ray.intersectsSphere(bc)===!1)return;y0.copy(l).invert(),Po.copy(t.ray).applyMatrix4(y0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const S=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=p){const _=v.getX(b),H=v.getX(b+1),L=Ac(this,t,Po,m,_,H,b);L&&i.push(L)}if(this.isLineLoop){const b=v.getX(E-1),M=v.getX(S),_=Ac(this,t,Po,m,b,M,E-1);_&&i.push(_)}}else{const S=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=p){const _=Ac(this,t,Po,m,b,b+1,b);_&&i.push(_)}if(this.isLineLoop){const b=Ac(this,t,Po,m,E-1,S,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ac(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(Gc.fromBufferAttribute(d,l),Vc.fromBufferAttribute(d,c),i.distanceSqToSegment(Gc,Vc,Ph,S0)>s)return;Ph.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ph);if(!(p<t.near||p>t.far))return{distance:p,point:S0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const M0=new tt,E0=new tt;class Dv extends kM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)M0.fromBufferAttribute(i,l),E0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+M0.distanceTo(E0);t.setAttribute("lineDistance",new $e(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uv extends Zn{constructor(t,i,s=Ts,l,c,h,d=Ci,m=Ci,p,v=Vo,g=1){if(v!==Vo&&v!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lv extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Kd extends Fn{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],h=[],d=[],m=[],p=new tt,v=new fe;h.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let g=0,x=3;g<=i;g++,x+=3){const S=s+g/i*l;p.x=t*Math.cos(S),p.y=t*Math.sin(S),h.push(p.x,p.y,p.z),d.push(0,0,1),v.x=(h[x]/t+1)/2,v.y=(h[x+1]/t+1)/2,m.push(v.x,v.y)}for(let g=1;g<=i;g++)c.push(g,g+1,0);this.setIndex(c),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kd(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qd extends Fn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],x=[],S=[];let E=0;const b=[],M=s/2;let _=0;H(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(S,2));function H(){const D=new tt,V=new tt;let N=0;const I=(i-t)/s;for(let X=0;X<=c;X++){const U=[],w=X/c,k=w*(i-t)+t;for(let J=0;J<=l;J++){const lt=J/l,ht=lt*m+d,dt=Math.sin(ht),B=Math.cos(ht);V.x=k*dt,V.y=-w*s+M,V.z=k*B,g.push(V.x,V.y,V.z),D.set(dt,I,B).normalize(),x.push(D.x,D.y,D.z),S.push(lt,1-w),U.push(E++)}b.push(U)}for(let X=0;X<l;X++)for(let U=0;U<c;U++){const w=b[U][X],k=b[U+1][X],J=b[U+1][X+1],lt=b[U][X+1];(t>0||U!==0)&&(v.push(w,k,lt),N+=3),(i>0||U!==c-1)&&(v.push(k,J,lt),N+=3)}p.addGroup(_,N,0),_+=N}function L(D){const V=E,N=new fe,I=new tt;let X=0;const U=D===!0?t:i,w=D===!0?1:-1;for(let J=1;J<=l;J++)g.push(0,M*w,0),x.push(0,w,0),S.push(.5,.5),E++;const k=E;for(let J=0;J<=l;J++){const ht=J/l*m+d,dt=Math.cos(ht),B=Math.sin(ht);I.x=U*B,I.y=M*w,I.z=U*dt,g.push(I.x,I.y,I.z),x.push(0,w,0),N.x=dt*.5+.5,N.y=B*.5*w+.5,S.push(N.x,N.y),E++}for(let J=0;J<l;J++){const lt=V+J,ht=k+J;D===!0?v.push(ht,ht+1,lt):v.push(ht+1,ht,lt),X+=3}p.addGroup(_,X,D===!0?1:2),_+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qc extends Fn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=t/d,x=i/m,S=[],E=[],b=[],M=[];for(let _=0;_<v;_++){const H=_*x-h;for(let L=0;L<p;L++){const D=L*g-c;E.push(D,-H,0),b.push(0,0,1),M.push(L/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let H=0;H<d;H++){const L=H+p*_,D=H+p*(_+1),V=H+1+p*(_+1),N=H+1+p*_;S.push(L,D,N),S.push(D,V,N)}this.setIndex(S),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jd extends Fn{constructor(t=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],v=[];let g=t;const x=(i-t)/l,S=new tt,E=new fe;for(let b=0;b<=l;b++){for(let M=0;M<=s;M++){const _=c+M/s*h;S.x=g*Math.cos(_),S.y=g*Math.sin(_),m.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,v.push(E.x,E.y)}g+=x}for(let b=0;b<l;b++){const M=b*(s+1);for(let _=0;_<s;_++){const H=_+M,L=H,D=H+s+1,V=H+s+2,N=H+1;d.push(L,D,N),d.push(D,V,N)}}this.setIndex(d),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class kc extends Fn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],g=new tt,x=new tt,S=[],E=[],b=[],M=[];for(let _=0;_<=s;_++){const H=[],L=_/s;let D=0;_===0&&h===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let V=0;V<=i;V++){const N=V/i;g.x=-t*Math.cos(l+N*c)*Math.sin(h+L*d),g.y=t*Math.cos(h+L*d),g.z=t*Math.sin(l+N*c)*Math.sin(h+L*d),E.push(g.x,g.y,g.z),x.copy(g).normalize(),b.push(x.x,x.y,x.z),M.push(N+D,1-L),H.push(p++)}v.push(H)}for(let _=0;_<s;_++)for(let H=0;H<i;H++){const L=v[_][H+1],D=v[_][H],V=v[_+1][H],N=v[_+1][H+1];(_!==0||h>0)&&S.push(L,D,N),(_!==s-1||m<Math.PI)&&S.push(D,V,N)}this.setIndex(S),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rc extends Pr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xv,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jM extends Pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XM extends Pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nv extends En{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class WM extends Nv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const zh=new sn,T0=new tt,b0=new tt;class qM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yd,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;T0.setFromMatrixPosition(t.matrixWorld),i.position.copy(T0),b0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(b0),i.updateMatrixWorld(),zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ov extends Cv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class YM extends qM{constructor(){super(new Ov(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZM extends Nv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new YM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class KM extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class A0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class QM extends Dv{constructor(t=10,i=10,s=4473924,l=8947848){s=new _e(s),l=new _e(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,S=0,E=-d;x<=i;x++,E+=h){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const b=x===c?s:l;b.toArray(p,S),S+=3,b.toArray(p,S),S+=3,b.toArray(p,S),S+=3,b.toArray(p,S),S+=3}const v=new Fn;v.setAttribute("position",new $e(m,3)),v.setAttribute("color",new $e(p,3));const g=new Zd({vertexColors:!0,toneMapped:!1});super(v,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class JM extends Rs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function R0(r,t,i,s){const l=$M(s);switch(i){case mv:return r*t;case _v:return r*t/l.components*l.byteLength;case Vd:return r*t/l.components*l.byteLength;case vv:return r*t*2/l.components*l.byteLength;case kd:return r*t*2/l.components*l.byteLength;case gv:return r*t*3/l.components*l.byteLength;case Ri:return r*t*4/l.components*l.byteLength;case jd:return r*t*4/l.components*l.byteLength;case Lc:case Nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case od:case cd:return Math.max(r,16)*Math.max(t,8)/4;case rd:case ld:return Math.max(r,8)*Math.max(t,8)/2;case ud:case fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case hd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case md:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _d:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case vd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case xd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case yd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Sd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Md:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Td:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case bd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ad:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Rd:case Cd:case wd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Dd:case Ud:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ld:case Nd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $M(r){switch(r){case Bi:case fv:return{byteLength:1,components:1};case Ho:case hv:case Xo:return{byteLength:2,components:1};case Hd:case Gd:return{byteLength:2,components:4};case Ts:case Fd:case ua:return{byteLength:4,components:1};case dv:case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function tE(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,v),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,v);else{g.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<g.length;S++){const E=g[x],b=g[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,g[x]=b)}g.length=x+1;for(let S=0,E=g.length;S<E;S++){const b=g[S];r.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var eE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nE=`#ifdef USE_ALPHAHASH
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
#endif`,iE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oE=`#ifdef USE_AOMAP
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
#endif`,lE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cE=`#ifdef USE_BATCHING
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
#endif`,uE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pE=`#ifdef USE_IRIDESCENCE
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
#endif`,mE=`#ifdef USE_BUMPMAP
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
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,TE=`#define PI 3.141592653589793
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
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AE=`vec3 transformedNormal = objectNormal;
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
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",LE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VE=`#ifdef USE_GRADIENTMAP
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
}`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
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
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JE=`PhysicalMaterial material;
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
#endif`,$E=`struct PhysicalMaterial {
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
}`,tT=`
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
#endif`,eT=`#if defined( RE_IndirectDiffuse )
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
#endif`,nT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uT=`#if defined( USE_POINTS_UV )
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
#endif`,fT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`#ifdef USE_MORPHTARGETS
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
#endif`,_T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ET=`#ifdef USE_NORMALMAP
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
#endif`,TT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FT=`float getShadowMask() {
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
}`,HT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,VT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kT=`#ifdef USE_SKINNING
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
#endif`,jT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YT=`#ifdef USE_TRANSMISSION
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
#endif`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eb=`uniform sampler2D t2D;
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`#include <common>
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
}`,ob=`#if DEPTH_PACKING == 3200
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
}`,lb=`#define DISTANCE
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
}`,cb=`#define DISTANCE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`uniform float scale;
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
}`,db=`uniform vec3 diffuse;
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
}`,pb=`#include <common>
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#define LAMBERT
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
}`,_b=`#define LAMBERT
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
}`,vb=`#define MATCAP
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
}`,xb=`#define MATCAP
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
}`,yb=`#define NORMAL
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
}`,Sb=`#define NORMAL
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
}`,Mb=`#define PHONG
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
}`,Eb=`#define PHONG
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
}`,Tb=`#define STANDARD
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
}`,bb=`#define STANDARD
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
}`,Ab=`#define TOON
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
}`,Rb=`#define TOON
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
}`,Cb=`uniform float size;
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
}`,wb=`uniform vec3 diffuse;
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
}`,Db=`#include <common>
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
}`,Ub=`uniform vec3 color;
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
}`,Lb=`uniform float rotation;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:eE,alphahash_pars_fragment:nE,alphamap_fragment:iE,alphamap_pars_fragment:aE,alphatest_fragment:sE,alphatest_pars_fragment:rE,aomap_fragment:oE,aomap_pars_fragment:lE,batching_pars_vertex:cE,batching_vertex:uE,begin_vertex:fE,beginnormal_vertex:hE,bsdfs:dE,iridescence_fragment:pE,bumpmap_pars_fragment:mE,clipping_planes_fragment:gE,clipping_planes_pars_fragment:_E,clipping_planes_pars_vertex:vE,clipping_planes_vertex:xE,color_fragment:yE,color_pars_fragment:SE,color_pars_vertex:ME,color_vertex:EE,common:TE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:AE,displacementmap_pars_vertex:RE,displacementmap_vertex:CE,emissivemap_fragment:wE,emissivemap_pars_fragment:DE,colorspace_fragment:UE,colorspace_pars_fragment:LE,envmap_fragment:NE,envmap_common_pars_fragment:OE,envmap_pars_fragment:PE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:qE,envmap_vertex:IE,fog_vertex:BE,fog_pars_vertex:FE,fog_fragment:HE,fog_pars_fragment:GE,gradientmap_pars_fragment:VE,lightmap_pars_fragment:kE,lights_lambert_fragment:jE,lights_lambert_pars_fragment:XE,lights_pars_begin:WE,lights_toon_fragment:YE,lights_toon_pars_fragment:ZE,lights_phong_fragment:KE,lights_phong_pars_fragment:QE,lights_physical_fragment:JE,lights_physical_pars_fragment:$E,lights_fragment_begin:tT,lights_fragment_maps:eT,lights_fragment_end:nT,logdepthbuf_fragment:iT,logdepthbuf_pars_fragment:aT,logdepthbuf_pars_vertex:sT,logdepthbuf_vertex:rT,map_fragment:oT,map_pars_fragment:lT,map_particle_fragment:cT,map_particle_pars_fragment:uT,metalnessmap_fragment:fT,metalnessmap_pars_fragment:hT,morphinstance_vertex:dT,morphcolor_vertex:pT,morphnormal_vertex:mT,morphtarget_pars_vertex:gT,morphtarget_vertex:_T,normal_fragment_begin:vT,normal_fragment_maps:xT,normal_pars_fragment:yT,normal_pars_vertex:ST,normal_vertex:MT,normalmap_pars_fragment:ET,clearcoat_normal_fragment_begin:TT,clearcoat_normal_fragment_maps:bT,clearcoat_pars_fragment:AT,iridescence_pars_fragment:RT,opaque_fragment:CT,packing:wT,premultiplied_alpha_fragment:DT,project_vertex:UT,dithering_fragment:LT,dithering_pars_fragment:NT,roughnessmap_fragment:OT,roughnessmap_pars_fragment:PT,shadowmap_pars_fragment:zT,shadowmap_pars_vertex:IT,shadowmap_vertex:BT,shadowmask_pars_fragment:FT,skinbase_vertex:HT,skinning_pars_vertex:GT,skinning_vertex:VT,skinnormal_vertex:kT,specularmap_fragment:jT,specularmap_pars_fragment:XT,tonemapping_fragment:WT,tonemapping_pars_fragment:qT,transmission_fragment:YT,transmission_pars_fragment:ZT,uv_pars_fragment:KT,uv_pars_vertex:QT,uv_vertex:JT,worldpos_vertex:$T,background_vert:tb,background_frag:eb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:ab,cube_frag:sb,depth_vert:rb,depth_frag:ob,distanceRGBA_vert:lb,distanceRGBA_frag:cb,equirect_vert:ub,equirect_frag:fb,linedashed_vert:hb,linedashed_frag:db,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:gb,meshlambert_frag:_b,meshmatcap_vert:vb,meshmatcap_frag:xb,meshnormal_vert:yb,meshnormal_frag:Sb,meshphong_vert:Mb,meshphong_frag:Eb,meshphysical_vert:Tb,meshphysical_frag:bb,meshtoon_vert:Ab,meshtoon_frag:Rb,points_vert:Cb,points_frag:wb,shadow_vert:Db,shadow_frag:Ub,sprite_vert:Lb,sprite_frag:Nb},Ft={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Pi={basic:{uniforms:In([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:In([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:In([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:In([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:In([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new _e(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:In([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:In([Ft.points,Ft.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:In([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:In([Ft.common,Ft.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:In([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:In([Ft.sprite,Ft.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:In([Ft.common,Ft.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:In([Ft.lights,Ft.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Pi.physical={uniforms:In([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Cc={r:0,b:0,g:0},_s=new Fi,Ob=new sn;function Pb(r,t,i,s,l,c,h){const d=new _e(0);let m=c===!0?0:1,p,v,g=null,x=0,S=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function b(L){let D=!1;const V=E(L);V===null?_(d,m):V&&V.isColor&&(_(V,1),D=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,h):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,D){const V=E(D);V&&(V.isCubeTexture||V.mapping===Xc)?(v===void 0&&(v=new Bn(new Yo(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Nr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(N,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),_s.copy(D.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),v.material.uniforms.envMap.value=V,v.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(_s)),v.material.toneMapped=Le.getTransfer(V.colorSpace)!==Ve,(g!==V||x!==V.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,g=V,x=V.version,S=r.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Bn(new qc(2,2),new qa({name:"BackgroundMaterial",uniforms:Nr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Le.getTransfer(V.colorSpace)!==Ve,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||x!==V.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=V,x=V.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(Cc,Rv(r)),s.buffers.color.setClear(Cc.r,Cc.g,Cc.b,D,h)}function H(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:b,addToRenderList:M,dispose:H}}function zb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(w,k,J,lt,ht){let dt=!1;const B=g(lt,J,k);c!==B&&(c=B,p(c.object)),dt=S(w,lt,J,ht),dt&&E(w,lt,J,ht),ht!==null&&t.update(ht,r.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,D(w,k,J,lt),ht!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function v(w){return r.deleteVertexArray(w)}function g(w,k,J){const lt=J.wireframe===!0;let ht=s[w.id];ht===void 0&&(ht={},s[w.id]=ht);let dt=ht[k.id];dt===void 0&&(dt={},ht[k.id]=dt);let B=dt[lt];return B===void 0&&(B=x(m()),dt[lt]=B),B}function x(w){const k=[],J=[],lt=[];for(let ht=0;ht<i;ht++)k[ht]=0,J[ht]=0,lt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:lt,object:w,attributes:{},index:null}}function S(w,k,J,lt){const ht=c.attributes,dt=k.attributes;let B=0;const $=J.getAttributes();for(const W in $)if($[W].location>=0){const Ct=ht[W];let P=dt[W];if(P===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(P=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(P=w.instanceColor)),Ct===void 0||Ct.attribute!==P||P&&Ct.data!==P.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function E(w,k,J,lt){const ht={},dt=k.attributes;let B=0;const $=J.getAttributes();for(const W in $)if($[W].location>=0){let Ct=dt[W];Ct===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Ct=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Ct=w.instanceColor));const P={};P.attribute=Ct,Ct&&Ct.data&&(P.data=Ct.data),ht[W]=P,B++}c.attributes=ht,c.attributesNum=B,c.index=lt}function b(){const w=c.newAttributes;for(let k=0,J=w.length;k<J;k++)w[k]=0}function M(w){_(w,0)}function _(w,k){const J=c.newAttributes,lt=c.enabledAttributes,ht=c.attributeDivisors;J[w]=1,lt[w]===0&&(r.enableVertexAttribArray(w),lt[w]=1),ht[w]!==k&&(r.vertexAttribDivisor(w,k),ht[w]=k)}function H(){const w=c.newAttributes,k=c.enabledAttributes;for(let J=0,lt=k.length;J<lt;J++)k[J]!==w[J]&&(r.disableVertexAttribArray(J),k[J]=0)}function L(w,k,J,lt,ht,dt,B){B===!0?r.vertexAttribIPointer(w,k,J,ht,dt):r.vertexAttribPointer(w,k,J,lt,ht,dt)}function D(w,k,J,lt){b();const ht=lt.attributes,dt=J.getAttributes(),B=k.defaultAttributeValues;for(const $ in dt){const W=dt[$];if(W.location>=0){let St=ht[$];if(St===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const Ct=St.normalized,P=St.itemSize,nt=t.get(St);if(nt===void 0)continue;const Mt=nt.buffer,rt=nt.type,Rt=nt.bytesPerElement,q=rt===r.INT||rt===r.UNSIGNED_INT||St.gpuType===Fd;if(St.isInterleavedBufferAttribute){const ut=St.data,Ut=ut.stride,Pt=St.offset;if(ut.isInstancedInterleavedBuffer){for(let zt=0;zt<W.locationSize;zt++)_(W.location+zt,ut.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let zt=0;zt<W.locationSize;zt++)M(W.location+zt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let zt=0;zt<W.locationSize;zt++)L(W.location+zt,P/W.locationSize,rt,Ct,Ut*Rt,(Pt+P/W.locationSize*zt)*Rt,q)}else{if(St.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)_(W.location+ut,St.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ut=0;ut<W.locationSize;ut++)M(W.location+ut);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let ut=0;ut<W.locationSize;ut++)L(W.location+ut,P/W.locationSize,rt,Ct,P*Rt,P/W.locationSize*ut*Rt,q)}}else if(B!==void 0){const Ct=B[$];if(Ct!==void 0)switch(Ct.length){case 2:r.vertexAttrib2fv(W.location,Ct);break;case 3:r.vertexAttrib3fv(W.location,Ct);break;case 4:r.vertexAttrib4fv(W.location,Ct);break;default:r.vertexAttrib1fv(W.location,Ct)}}}}H()}function V(){X();for(const w in s){const k=s[w];for(const J in k){const lt=k[J];for(const ht in lt)v(lt[ht].object),delete lt[ht];delete k[J]}delete s[w]}}function N(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const J in k){const lt=k[J];for(const ht in lt)v(lt[ht].object),delete lt[ht];delete k[J]}delete s[w.id]}function I(w){for(const k in s){const J=s[k];if(J[w.id]===void 0)continue;const lt=J[w.id];for(const ht in lt)v(lt[ht].object),delete lt[ht];delete J[w.id]}}function X(){U(),h=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:U,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:M,disableUnusedAttributes:H}}function Ib(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,s,1)}function m(p,v,g,x){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],v[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,v,0,x,0,g);let E=0;for(let b=0;b<g;b++)E+=v[b]*x[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Bb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Ri&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===Xo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Bi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ua&&!X)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),H=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:H,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:V,maxSamples:N}}function Fb(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Va,d=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||s!==0||l;return l=x,s=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,S){const E=g.clippingPlanes,b=g.clipIntersection,M=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):p();else{const H=c?0:s,L=H*4;let D=_.clippingState||null;m.value=D,D=v(E,x,L,S);for(let V=0;V!==L;++V)D[V]=i[V];_.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=H}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,x,S,E){const b=g!==null?g.length:0;let M=null;if(b!==0){if(M=m.value,E!==!0||M===null){const _=S+b*4,H=x.matrixWorldInverse;d.getNormalMatrix(H),(M===null||M.length<_)&&(M=new Float32Array(_));for(let L=0,D=S;L!==b;++L,D+=4)h.copy(g[L]).applyMatrix4(H,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function Hb(r){let t=new WeakMap;function i(h,d){return d===nd?h.mapping=Dr:d===id&&(h.mapping=Ur),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===nd||d===id)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new IM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const br=4,C0=[.125,.215,.35,.446,.526,.582],Ss=20,Ih=new Ov,w0=new _e;let Bh=null,Fh=0,Hh=0,Gh=!1;const xs=(1+Math.sqrt(5))/2,Er=1/xs,D0=[new tt(-xs,Er,0),new tt(xs,Er,0),new tt(-Er,0,xs),new tt(Er,0,xs),new tt(0,xs,-Er),new tt(0,xs,Er),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],Gb=new tt;class U0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=Gb}=c;Bh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bh,Fh,Hh),this._renderer.xr.enabled=Gh,t.scissorTest=!1,wc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Dr||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:Xo,format:Ri,colorSpace:Lr,depthBuffer:!1},l=L0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vb(c)),this._blurMaterial=kb(c,t,i)}return l}_compileMaterial(t){const i=new Bn(this._lodPlanes[0],t);this._renderer.compile(i,Ih)}_sceneToCubeUV(t,i,s,l,c){const m=new _i(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(w0),g.toneMapping=Xa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const b=new Fo({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new Bn(new Yo,b);let _=!1;const H=t.background;H?H.isColor&&(b.color.copy(H),t.background=null,_=!0):(b.color.copy(w0),_=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const V=this._cubeSize;wc(l,D*V,L>2?V:0,V,V),g.setRenderTarget(l),_&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=x,t.background=H}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Dr||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=O0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Bn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;wc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ih)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=D0[(l-c-1)%D0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Bn(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ss-1),b=c/E,M=isFinite(c)?1+Math.floor(v*b):Ss;M>Ss&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ss}`);const _=[];let H=0;for(let I=0;I<Ss;++I){const X=I/b,U=Math.exp(-X*X/2);_.push(U),I===0?H+=U:I<M&&(H+=2*U)}for(let I=0;I<_.length;I++)_[I]=_[I]/H;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const D=this._sizeLods[l],V=3*D*(l>L-br?l-L+br:0),N=4*(this._cubeSize-D);wc(i,V,N,3*D,2*D),m.setRenderTarget(i),m.render(g,Ih)}}function Vb(r){const t=[],i=[],s=[];let l=r;const c=r-br+1+C0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-br?m=C0[h-r+br-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,b=3,M=2,_=1,H=new Float32Array(b*E*S),L=new Float32Array(M*E*S),D=new Float32Array(_*E*S);for(let N=0;N<S;N++){const I=N%3*2/3-1,X=N>2?0:-1,U=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];H.set(U,b*E*N),L.set(x,M*E*N);const w=[N,N,N,N,N,N];D.set(w,_*E*N)}const V=new Fn;V.setAttribute("position",new vi(H,b)),V.setAttribute("uv",new vi(L,M)),V.setAttribute("faceIndex",new vi(D,_)),t.push(V),l>br&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function L0(r,t,i){const s=new As(r,t,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function kb(r,t,i){const s=new Float32Array(Ss),l=new tt(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$d(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function N0(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function O0(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}function jb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===nd||m===id,v=m===Dr||m===Ur;if(p||v){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new U0(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new U0(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Xb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Wb(r,t,i,s){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function p(g){const x=[],S=g.index,E=g.attributes.position;let b=0;if(S!==null){const H=S.array;b=S.version;for(let L=0,D=H.length;L<D;L+=3){const V=H[L+0],N=H[L+1],I=H[L+2];x.push(V,N,N,I,I,V)}}else if(E!==void 0){const H=E.array;b=E.version;for(let L=0,D=H.length/3-1;L<D;L+=3){const V=L+0,N=L+1,I=L+2;x.push(V,N,N,I,I,V)}}else return;const M=new(Sv(x)?Av:bv)(x,1);M.version=b;const _=c.get(g);_&&t.remove(_),c.set(g,M)}function v(g){const x=c.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function qb(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,S){r.drawElements(s,S,c,x*h),i.update(S,s,1)}function p(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,x*h,E),i.update(S,s,E))}function v(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let M=0;for(let _=0;_<E;_++)M+=S[_];i.update(M,s,1)}function g(x,S,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/h,S[_],b[_]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,b,0,E);let _=0;for(let H=0;H<E;H++)_+=S[H]*b[H];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function Yb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Zb(r,t,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let U=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",U)};x!==void 0&&x.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],H=d.morphAttributes.color||[];let L=0;S===!0&&(L=1),E===!0&&(L=2),b===!0&&(L=3);let D=d.attributes.position.count*L,V=1;D>t.maxTextureSize&&(V=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const N=new Float32Array(D*V*4*g),I=new Mv(N,D,V,g);I.type=ua,I.needsUpdate=!0;const X=L*4;for(let w=0;w<g;w++){const k=M[w],J=_[w],lt=H[w],ht=D*V*4*w;for(let dt=0;dt<k.count;dt++){const B=dt*X;S===!0&&(l.fromBufferAttribute(k,dt),N[ht+B+0]=l.x,N[ht+B+1]=l.y,N[ht+B+2]=l.z,N[ht+B+3]=0),E===!0&&(l.fromBufferAttribute(J,dt),N[ht+B+4]=l.x,N[ht+B+5]=l.y,N[ht+B+6]=l.z,N[ht+B+7]=0),b===!0&&(l.fromBufferAttribute(lt,dt),N[ht+B+8]=l.x,N[ht+B+9]=l.y,N[ht+B+10]=l.z,N[ht+B+11]=lt.itemSize===4?l.w:1)}}x={count:g,texture:I,size:new fe(D,V)},s.set(d,x),d.addEventListener("dispose",U)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let S=0;for(let b=0;b<p.length;b++)S+=p[b];const E=d.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function Kb(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const zv=new Zn,P0=new Uv(1,1),Iv=new Mv,Bv=new yM,Fv=new wv,z0=[],I0=[],B0=new Float32Array(16),F0=new Float32Array(9),H0=new Float32Array(4);function zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=z0[l];if(c===void 0&&(c=new Float32Array(l),z0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Yc(r,t){let i=I0[t];i===void 0&&(i=new Int32Array(t),I0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Qb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Jb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function $b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function t1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function e1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;H0.set(s),r.uniformMatrix2fv(this.addr,!1,H0),xn(i,s)}}function n1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;F0.set(s),r.uniformMatrix3fv(this.addr,!1,F0),xn(i,s)}}function i1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;B0.set(s),r.uniformMatrix4fv(this.addr,!1,B0),xn(i,s)}}function a1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function s1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function r1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function o1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function l1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function c1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function u1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function f1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function h1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(P0.compareFunction=yv,c=P0):c=zv,i.setTexture2D(t||c,l)}function d1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Bv,l)}function p1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Fv,l)}function m1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Iv,l)}function g1(r){switch(r){case 5126:return Qb;case 35664:return Jb;case 35665:return $b;case 35666:return t1;case 35674:return e1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return a1;case 35667:case 35671:return s1;case 35668:case 35672:return r1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}function _1(r,t){r.uniform1fv(this.addr,t)}function v1(r,t){const i=zr(t,this.size,2);r.uniform2fv(this.addr,i)}function x1(r,t){const i=zr(t,this.size,3);r.uniform3fv(this.addr,i)}function y1(r,t){const i=zr(t,this.size,4);r.uniform4fv(this.addr,i)}function S1(r,t){const i=zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function M1(r,t){const i=zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function E1(r,t){const i=zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function T1(r,t){r.uniform1iv(this.addr,t)}function b1(r,t){r.uniform2iv(this.addr,t)}function A1(r,t){r.uniform3iv(this.addr,t)}function R1(r,t){r.uniform4iv(this.addr,t)}function C1(r,t){r.uniform1uiv(this.addr,t)}function w1(r,t){r.uniform2uiv(this.addr,t)}function D1(r,t){r.uniform3uiv(this.addr,t)}function U1(r,t){r.uniform4uiv(this.addr,t)}function L1(r,t,i){const s=this.cache,l=t.length,c=Yc(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||zv,c[h])}function N1(r,t,i){const s=this.cache,l=t.length,c=Yc(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Bv,c[h])}function O1(r,t,i){const s=this.cache,l=t.length,c=Yc(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Fv,c[h])}function P1(r,t,i){const s=this.cache,l=t.length,c=Yc(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Iv,c[h])}function z1(r){switch(r){case 5126:return _1;case 35664:return v1;case 35665:return x1;case 35666:return y1;case 35674:return S1;case 35675:return M1;case 35676:return E1;case 5124:case 35670:return T1;case 35667:case 35671:return b1;case 35668:case 35672:return A1;case 35669:case 35673:return R1;case 5125:return C1;case 36294:return w1;case 36295:return D1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return P1}}class I1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=g1(i.type)}}class B1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=z1(i.type)}}class F1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function G0(r,t){r.seq.push(t),r.map[t.id]=t}function H1(r,t,i){const s=r.name,l=s.length;for(Vh.lastIndex=0;;){const c=Vh.exec(s),h=Vh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){G0(i,p===void 0?new I1(d,r,t):new B1(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new F1(d),G0(i,g)),i=g}}}class Ic{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);H1(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function V0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const G1=37297;let V1=0;function k1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const k0=new me;function j1(r){Le._getMatrix(k0,Le.workingColorSpace,r);const t=`mat3( ${k0.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case Bc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function j0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+k1(r.getShaderSource(t),d)}else return c}function X1(r,t){const i=j1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function W1(r,t){let i;switch(t){case qS:i="Linear";break;case YS:i="Reinhard";break;case ZS:i="Cineon";break;case KS:i="ACESFilmic";break;case JS:i="AgX";break;case $S:i="Neutral";break;case QS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new tt;function q1(){Le.getLuminanceCoefficients(Dc);const r=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Z1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function K1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Bo(r){return r!==""}function X0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function W0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(r){return r.replace(Q1,$1)}const J1=new Map;function $1(r,t){let i=ge[t];if(i===void 0){const s=J1.get(t);if(s!==void 0)i=ge[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Pd(i)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q0(r){return r.replace(tA,eA)}function eA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Y0(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function nA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===lv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===AS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function iA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Dr:case Ur:t="ENVMAP_TYPE_CUBE";break;case Xc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function aA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ur:t="ENVMAP_MODE_REFRACTION";break}return t}function sA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cv:t="ENVMAP_BLENDING_MULTIPLY";break;case XS:t="ENVMAP_BLENDING_MIX";break;case WS:t="ENVMAP_BLENDING_ADD";break}return t}function rA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function oA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=nA(i),p=iA(i),v=aA(i),g=sA(i),x=rA(i),S=Y1(i),E=Z1(c),b=l.createProgram();let M,_,H=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),_.length>0&&(_+=`
`)):(M=[Y0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),_=[Y0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?ge.tonemapping_pars_fragment:"",i.toneMapping!==Xa?W1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,X1("linearToOutputTexel",i.outputColorSpace),q1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=Pd(h),h=X0(h,i),h=W0(h,i),d=Pd(d),d=X0(d,i),d=W0(d,i),h=q0(h),d=q0(d),i.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=H+M+h,D=H+_+d,V=V0(l,l.VERTEX_SHADER,L),N=V0(l,l.FRAGMENT_SHADER,D);l.attachShader(b,V),l.attachShader(b,N),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function I(k){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(b)||"",lt=l.getShaderInfoLog(V)||"",ht=l.getShaderInfoLog(N)||"",dt=J.trim(),B=lt.trim(),$=ht.trim();let W=!0,St=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,V,N);else{const Ct=j0(l,V,"vertex"),P=j0(l,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+dt+`
`+Ct+`
`+P)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(B===""||$==="")&&(St=!1);St&&(k.diagnostics={runnable:W,programLog:dt,vertexShader:{log:B,prefix:M},fragmentShader:{log:$,prefix:_}})}l.deleteShader(V),l.deleteShader(N),X=new Ic(l,b),U=K1(l,b)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(b,G1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=V1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=V,this.fragmentShader=N,this}let lA=0;class cA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new uA(t),i.set(t,s)),s}}class uA{constructor(t){this.id=lA++,this.code=t,this.usedTimes=0}}function fA(r,t,i,s,l,c,h){const d=new Ev,m=new cA,p=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return p.add(U),U===0?"uv":`uv${U}`}function M(U,w,k,J,lt){const ht=J.fog,dt=lt.geometry,B=U.isMeshStandardMaterial?J.environment:null,$=(U.isMeshStandardMaterial?i:t).get(U.envMap||B),W=$&&$.mapping===Xc?$.image.height:null,St=E[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const Ct=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,P=Ct!==void 0?Ct.length:0;let nt=0;dt.morphAttributes.position!==void 0&&(nt=1),dt.morphAttributes.normal!==void 0&&(nt=2),dt.morphAttributes.color!==void 0&&(nt=3);let Mt,rt,Rt,q;if(St){const Ce=Pi[St];Mt=Ce.vertexShader,rt=Ce.fragmentShader}else Mt=U.vertexShader,rt=U.fragmentShader,m.update(U),Rt=m.getVertexShaderID(U),q=m.getFragmentShaderID(U);const ut=r.getRenderTarget(),Ut=r.state.buffers.depth.getReversed(),Pt=lt.isInstancedMesh===!0,zt=lt.isBatchedMesh===!0,Ht=!!U.map,re=!!U.matcap,z=!!$,oe=!!U.aoMap,ee=!!U.lightMap,Zt=!!U.bumpMap,kt=!!U.normalMap,xe=!!U.displacementMap,Ot=!!U.emissiveMap,te=!!U.metalnessMap,Qe=!!U.roughnessMap,qe=U.anisotropy>0,O=U.clearcoat>0,T=U.dispersion>0,et=U.iridescence>0,mt=U.sheen>0,Et=U.transmission>0,pt=qe&&!!U.anisotropyMap,$t=O&&!!U.clearcoatMap,Lt=O&&!!U.clearcoatNormalMap,Kt=O&&!!U.clearcoatRoughnessMap,Qt=et&&!!U.iridescenceMap,Dt=et&&!!U.iridescenceThicknessMap,wt=mt&&!!U.sheenColorMap,Wt=mt&&!!U.sheenRoughnessMap,Gt=!!U.specularMap,It=!!U.specularColorMap,Y=!!U.specularIntensityMap,F=Et&&!!U.transmissionMap,yt=Et&&!!U.thicknessMap,bt=!!U.gradientMap,Nt=!!U.alphaMap,At=U.alphaTest>0,vt=!!U.alphaHash,jt=!!U.extensions;let ue=Xa;U.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ue=r.toneMapping);const ze={shaderID:St,shaderType:U.type,shaderName:U.name,vertexShader:Mt,fragmentShader:rt,defines:U.defines,customVertexShaderID:Rt,customFragmentShaderID:q,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:zt,batchingColor:zt&&lt._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&lt.instanceColor!==null,instancingMorph:Pt&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Lr,alphaToCoverage:!!U.alphaToCoverage,map:Ht,matcap:re,envMap:z,envMapMode:z&&$.mapping,envMapCubeUVHeight:W,aoMap:oe,lightMap:ee,bumpMap:Zt,normalMap:kt,displacementMap:x&&xe,emissiveMap:Ot,normalMapObjectSpace:kt&&U.normalMapType===iM,normalMapTangentSpace:kt&&U.normalMapType===xv,metalnessMap:te,roughnessMap:Qe,anisotropy:qe,anisotropyMap:pt,clearcoat:O,clearcoatMap:$t,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Kt,dispersion:T,iridescence:et,iridescenceMap:Qt,iridescenceThicknessMap:Dt,sheen:mt,sheenColorMap:wt,sheenRoughnessMap:Wt,specularMap:Gt,specularColorMap:It,specularIntensityMap:Y,transmission:Et,transmissionMap:F,thicknessMap:yt,gradientMap:bt,opaque:U.transparent===!1&&U.blending===Rr&&U.alphaToCoverage===!1,alphaMap:Nt,alphaTest:At,alphaHash:vt,combine:U.combine,mapUv:Ht&&b(U.map.channel),aoMapUv:oe&&b(U.aoMap.channel),lightMapUv:ee&&b(U.lightMap.channel),bumpMapUv:Zt&&b(U.bumpMap.channel),normalMapUv:kt&&b(U.normalMap.channel),displacementMapUv:xe&&b(U.displacementMap.channel),emissiveMapUv:Ot&&b(U.emissiveMap.channel),metalnessMapUv:te&&b(U.metalnessMap.channel),roughnessMapUv:Qe&&b(U.roughnessMap.channel),anisotropyMapUv:pt&&b(U.anisotropyMap.channel),clearcoatMapUv:$t&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&b(U.sheenRoughnessMap.channel),specularMapUv:Gt&&b(U.specularMap.channel),specularColorMapUv:It&&b(U.specularColorMap.channel),specularIntensityMapUv:Y&&b(U.specularIntensityMap.channel),transmissionMapUv:F&&b(U.transmissionMap.channel),thicknessMapUv:yt&&b(U.thicknessMap.channel),alphaMapUv:Nt&&b(U.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(kt||qe),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!dt.attributes.uv&&(Ht||Nt),fog:!!ht,useFog:U.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ut,skinning:lt.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ht&&U.map.isVideoTexture===!0&&Le.getTransfer(U.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ot&&U.emissiveMap.isVideoTexture===!0&&Le.getTransfer(U.emissiveMap.colorSpace)===Ve,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===bi,flipSided:U.side===Yn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:jt&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&U.extensions.multiDraw===!0||zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function _(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const k in U.defines)w.push(k),w.push(U.defines[k]);return U.isRawShaderMaterial===!1&&(H(w,U),L(w,U),w.push(r.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function H(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function L(U,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),U.push(d.mask)}function D(U){const w=E[U.type];let k;if(w){const J=Pi[w];k=NM.clone(J.uniforms)}else k=U.uniforms;return k}function V(U,w){let k;for(let J=0,lt=v.length;J<lt;J++){const ht=v[J];if(ht.cacheKey===w){k=ht,++k.usedTimes;break}}return k===void 0&&(k=new oA(r,w,U,c),v.push(k)),k}function N(U){if(--U.usedTimes===0){const w=v.indexOf(U);v[w]=v[v.length-1],v.pop(),U.destroy()}}function I(U){m.remove(U)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:V,releaseProgram:N,releaseShaderCache:I,programs:v,dispose:X}}function hA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function dA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Z0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function K0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,x,S,E,b,M){let _=r[t];return _===void 0?(_={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:b,group:M},r[t]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=b,_.group=M),t++,_}function d(g,x,S,E,b,M){const _=h(g,x,S,E,b,M);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(g,x,S,E,b,M){const _=h(g,x,S,E,b,M);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||dA),s.length>1&&s.sort(x||Z0),l.length>1&&l.sort(x||Z0)}function v(){for(let g=t,x=r.length;g<x;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function pA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new K0,r.set(s,[h])):l>=c.length?(h=new K0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function mA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new _e};break;case"SpotLight":i={position:new tt,direction:new tt,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new _e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":i={color:new _e,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return r[t.id]=i,i}}}function gA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let _A=0;function vA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function xA(r){const t=new mA,i=gA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new tt);const l=new tt,c=new sn,h=new sn;function d(p){let v=0,g=0,x=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let S=0,E=0,b=0,M=0,_=0,H=0,L=0,D=0,V=0,N=0,I=0;p.sort(vA);for(let U=0,w=p.length;U<w;U++){const k=p[U],J=k.color,lt=k.intensity,ht=k.distance,dt=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=J.r*lt,g+=J.g*lt,x+=J.b*lt;else if(k.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(k.sh.coefficients[B],lt);I++}else if(k.isDirectionalLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const $=k.shadow,W=i.get(k);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,s.directionalShadow[S]=W,s.directionalShadowMap[S]=dt,s.directionalShadowMatrix[S]=k.shadow.matrix,H++}s.directional[S]=B,S++}else if(k.isSpotLight){const B=t.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(J).multiplyScalar(lt),B.distance=ht,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,s.spot[b]=B;const $=k.shadow;if(k.map&&(s.spotLightMap[V]=k.map,V++,$.updateMatrices(k),k.castShadow&&N++),s.spotLightMatrix[b]=$.matrix,k.castShadow){const W=i.get(k);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,s.spotShadow[b]=W,s.spotShadowMap[b]=dt,D++}b++}else if(k.isRectAreaLight){const B=t.get(k);B.color.copy(J).multiplyScalar(lt),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=B,M++}else if(k.isPointLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const $=k.shadow,W=i.get(k);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,s.pointShadow[E]=W,s.pointShadowMap[E]=dt,s.pointShadowMatrix[E]=k.shadow.matrix,L++}s.point[E]=B,E++}else if(k.isHemisphereLight){const B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(lt),B.groundColor.copy(k.groundColor).multiplyScalar(lt),s.hemi[_]=B,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==b||X.rectAreaLength!==M||X.hemiLength!==_||X.numDirectionalShadows!==H||X.numPointShadows!==L||X.numSpotShadows!==D||X.numSpotMaps!==V||X.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=H,s.directionalShadowMap.length=H,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=H,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+V-N,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=I,X.directionalLength=S,X.pointLength=E,X.spotLength=b,X.rectAreaLength=M,X.hemiLength=_,X.numDirectionalShadows=H,X.numPointShadows=L,X.numSpotShadows=D,X.numSpotMaps=V,X.numLightProbes=I,s.version=_A++)}function m(p,v){let g=0,x=0,S=0,E=0,b=0;const M=v.matrixWorldInverse;for(let _=0,H=p.length;_<H;_++){const L=p[_];if(L.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),g++}else if(L.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const D=s.hemi[b];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),b++}}}return{setup:d,setupView:m,state:s}}function Q0(r){const t=new xA(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function yA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Q0(r),t.set(l,[d])):c>=h.length?(d=new Q0(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
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
}`;function EA(r,t,i){let s=new Yd;const l=new fe,c=new fe,h=new an,d=new jM({depthPacking:nM}),m=new XM,p={},v=i.maxTextureSize,g={[Wa]:Yn,[Yn]:Wa,[bi]:bi},x=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:SA,fragmentShader:MA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Fn;E.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Bn(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lv;let _=this.type;this.render=function(N,I,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;const U=r.getRenderTarget(),w=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),J=r.state;J.setBlending(ja),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const lt=_!==ca&&this.type===ca,ht=_===ca&&this.type!==ca;for(let dt=0,B=N.length;dt<B;dt++){const $=N[dt],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const St=W.getFrameExtents();if(l.multiply(St),c.copy(W.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/St.x),l.x=c.x*St.x,W.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/St.y),l.y=c.y*St.y,W.mapSize.y=c.y)),W.map===null||lt===!0||ht===!0){const P=this.type!==ca?{minFilter:Ci,magFilter:Ci}:{};W.map!==null&&W.map.dispose(),W.map=new As(l.x,l.y,P),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const Ct=W.getViewportCount();for(let P=0;P<Ct;P++){const nt=W.getViewport(P);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),J.viewport(h),W.updateMatrices($,P),s=W.getFrustum(),D(I,X,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===ca&&H(W,X),W.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(U,w,k)};function H(N,I){const X=t.update(b);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new As(l.x,l.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(I,null,X,x,b,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(I,null,X,S,b,null)}function L(N,I,X,U){let w=null;const k=X.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)w=k;else if(w=X.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const J=w.uuid,lt=I.uuid;let ht=p[J];ht===void 0&&(ht={},p[J]=ht);let dt=ht[lt];dt===void 0&&(dt=w.clone(),ht[lt]=dt,I.addEventListener("dispose",V)),w=dt}if(w.visible=I.visible,w.wireframe=I.wireframe,U===ca?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:g[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const J=r.properties.get(w);J.light=X}return w}function D(N,I,X,U,w){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&w===ca)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,N.matrixWorld);const lt=t.update(N),ht=N.material;if(Array.isArray(ht)){const dt=lt.groups;for(let B=0,$=dt.length;B<$;B++){const W=dt[B],St=ht[W.materialIndex];if(St&&St.visible){const Ct=L(N,St,U,w);N.onBeforeShadow(r,N,I,X,lt,Ct,W),r.renderBufferDirect(X,null,lt,Ct,N,W),N.onAfterShadow(r,N,I,X,lt,Ct,W)}}}else if(ht.visible){const dt=L(N,ht,U,w);N.onBeforeShadow(r,N,I,X,lt,dt,null),r.renderBufferDirect(X,null,lt,dt,N,null),N.onAfterShadow(r,N,I,X,lt,dt,null)}}const J=N.children;for(let lt=0,ht=J.length;lt<ht;lt++)D(J[lt],I,X,U,w)}function V(N){N.target.removeEventListener("dispose",V);for(const X in p){const U=p[X],w=N.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}const TA={[Zh]:Kh,[Qh]:td,[Jh]:ed,[wr]:$h,[Kh]:Zh,[td]:Qh,[ed]:Jh,[$h]:wr};function bA(r,t){function i(){let F=!1;const yt=new an;let bt=null;const Nt=new an(0,0,0,0);return{setMask:function(At){bt!==At&&!F&&(r.colorMask(At,At,At,At),bt=At)},setLocked:function(At){F=At},setClear:function(At,vt,jt,ue,ze){ze===!0&&(At*=ue,vt*=ue,jt*=ue),yt.set(At,vt,jt,ue),Nt.equals(yt)===!1&&(r.clearColor(At,vt,jt,ue),Nt.copy(yt))},reset:function(){F=!1,bt=null,Nt.set(-1,0,0,0)}}}function s(){let F=!1,yt=!1,bt=null,Nt=null,At=null;return{setReversed:function(vt){if(yt!==vt){const jt=t.get("EXT_clip_control");vt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),yt=vt;const ue=At;At=null,this.setClear(ue)}},getReversed:function(){return yt},setTest:function(vt){vt?ut(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(vt){bt!==vt&&!F&&(r.depthMask(vt),bt=vt)},setFunc:function(vt){if(yt&&(vt=TA[vt]),Nt!==vt){switch(vt){case Zh:r.depthFunc(r.NEVER);break;case Kh:r.depthFunc(r.ALWAYS);break;case Qh:r.depthFunc(r.LESS);break;case wr:r.depthFunc(r.LEQUAL);break;case Jh:r.depthFunc(r.EQUAL);break;case $h:r.depthFunc(r.GEQUAL);break;case td:r.depthFunc(r.GREATER);break;case ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Nt=vt}},setLocked:function(vt){F=vt},setClear:function(vt){At!==vt&&(yt&&(vt=1-vt),r.clearDepth(vt),At=vt)},reset:function(){F=!1,bt=null,Nt=null,At=null,yt=!1}}}function l(){let F=!1,yt=null,bt=null,Nt=null,At=null,vt=null,jt=null,ue=null,ze=null;return{setTest:function(Ce){F||(Ce?ut(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(Ce){yt!==Ce&&!F&&(r.stencilMask(Ce),yt=Ce)},setFunc:function(Ce,On,ri){(bt!==Ce||Nt!==On||At!==ri)&&(r.stencilFunc(Ce,On,ri),bt=Ce,Nt=On,At=ri)},setOp:function(Ce,On,ri){(vt!==Ce||jt!==On||ue!==ri)&&(r.stencilOp(Ce,On,ri),vt=Ce,jt=On,ue=ri)},setLocked:function(Ce){F=Ce},setClear:function(Ce){ze!==Ce&&(r.clearStencil(Ce),ze=Ce)},reset:function(){F=!1,yt=null,bt=null,Nt=null,At=null,vt=null,jt=null,ue=null,ze=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,S=[],E=null,b=!1,M=null,_=null,H=null,L=null,D=null,V=null,N=null,I=new _e(0,0,0),X=0,U=!1,w=null,k=null,J=null,lt=null,ht=null;const dt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=$>=2);let St=null,Ct={};const P=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),Mt=new an().fromArray(P),rt=new an().fromArray(nt);function Rt(F,yt,bt,Nt){const At=new Uint8Array(4),vt=r.createTexture();r.bindTexture(F,vt),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let jt=0;jt<bt;jt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(yt,0,r.RGBA,1,1,Nt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(yt+jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return vt}const q={};q[r.TEXTURE_2D]=Rt(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=Rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=Rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=Rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(r.DEPTH_TEST),h.setFunc(wr),Zt(!1),kt(K_),ut(r.CULL_FACE),oe(ja);function ut(F){v[F]!==!0&&(r.enable(F),v[F]=!0)}function Ut(F){v[F]!==!1&&(r.disable(F),v[F]=!1)}function Pt(F,yt){return g[F]!==yt?(r.bindFramebuffer(F,yt),g[F]=yt,F===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=yt),F===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=yt),!0):!1}function zt(F,yt){let bt=S,Nt=!1;if(F){bt=x.get(yt),bt===void 0&&(bt=[],x.set(yt,bt));const At=F.textures;if(bt.length!==At.length||bt[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,jt=At.length;vt<jt;vt++)bt[vt]=r.COLOR_ATTACHMENT0+vt;bt.length=At.length,Nt=!0}}else bt[0]!==r.BACK&&(bt[0]=r.BACK,Nt=!0);Nt&&r.drawBuffers(bt)}function Ht(F){return E!==F?(r.useProgram(F),E=F,!0):!1}const re={[ys]:r.FUNC_ADD,[CS]:r.FUNC_SUBTRACT,[wS]:r.FUNC_REVERSE_SUBTRACT};re[DS]=r.MIN,re[US]=r.MAX;const z={[LS]:r.ZERO,[NS]:r.ONE,[OS]:r.SRC_COLOR,[qh]:r.SRC_ALPHA,[HS]:r.SRC_ALPHA_SATURATE,[BS]:r.DST_COLOR,[zS]:r.DST_ALPHA,[PS]:r.ONE_MINUS_SRC_COLOR,[Yh]:r.ONE_MINUS_SRC_ALPHA,[FS]:r.ONE_MINUS_DST_COLOR,[IS]:r.ONE_MINUS_DST_ALPHA,[GS]:r.CONSTANT_COLOR,[VS]:r.ONE_MINUS_CONSTANT_COLOR,[kS]:r.CONSTANT_ALPHA,[jS]:r.ONE_MINUS_CONSTANT_ALPHA};function oe(F,yt,bt,Nt,At,vt,jt,ue,ze,Ce){if(F===ja){b===!0&&(Ut(r.BLEND),b=!1);return}if(b===!1&&(ut(r.BLEND),b=!0),F!==RS){if(F!==M||Ce!==U){if((_!==ys||D!==ys)&&(r.blendEquation(r.FUNC_ADD),_=ys,D=ys),Ce)switch(F){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Q_:r.blendFunc(r.ONE,r.ONE);break;case J_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Q_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case J_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}H=null,L=null,V=null,N=null,I.set(0,0,0),X=0,M=F,U=Ce}return}At=At||yt,vt=vt||bt,jt=jt||Nt,(yt!==_||At!==D)&&(r.blendEquationSeparate(re[yt],re[At]),_=yt,D=At),(bt!==H||Nt!==L||vt!==V||jt!==N)&&(r.blendFuncSeparate(z[bt],z[Nt],z[vt],z[jt]),H=bt,L=Nt,V=vt,N=jt),(ue.equals(I)===!1||ze!==X)&&(r.blendColor(ue.r,ue.g,ue.b,ze),I.copy(ue),X=ze),M=F,U=!1}function ee(F,yt){F.side===bi?Ut(r.CULL_FACE):ut(r.CULL_FACE);let bt=F.side===Yn;yt&&(bt=!bt),Zt(bt),F.blending===Rr&&F.transparent===!1?oe(ja):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),h.setFunc(F.depthFunc),h.setTest(F.depthTest),h.setMask(F.depthWrite),c.setMask(F.colorWrite);const Nt=F.stencilWrite;d.setTest(Nt),Nt&&(d.setMask(F.stencilWriteMask),d.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),d.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(F){w!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),w=F)}function kt(F){F!==TS?(ut(r.CULL_FACE),F!==k&&(F===K_?r.cullFace(r.BACK):F===bS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),k=F}function xe(F){F!==J&&(B&&r.lineWidth(F),J=F)}function Ot(F,yt,bt){F?(ut(r.POLYGON_OFFSET_FILL),(lt!==yt||ht!==bt)&&(r.polygonOffset(yt,bt),lt=yt,ht=bt)):Ut(r.POLYGON_OFFSET_FILL)}function te(F){F?ut(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function Qe(F){F===void 0&&(F=r.TEXTURE0+dt-1),St!==F&&(r.activeTexture(F),St=F)}function qe(F,yt,bt){bt===void 0&&(St===null?bt=r.TEXTURE0+dt-1:bt=St);let Nt=Ct[bt];Nt===void 0&&(Nt={type:void 0,texture:void 0},Ct[bt]=Nt),(Nt.type!==F||Nt.texture!==yt)&&(St!==bt&&(r.activeTexture(bt),St=bt),r.bindTexture(F,yt||q[F]),Nt.type=F,Nt.texture=yt)}function O(){const F=Ct[St];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qt(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(F){Mt.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Mt.copy(F))}function Wt(F){rt.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),rt.copy(F))}function Gt(F,yt){let bt=p.get(yt);bt===void 0&&(bt=new WeakMap,p.set(yt,bt));let Nt=bt.get(F);Nt===void 0&&(Nt=r.getUniformBlockIndex(yt,F.name),bt.set(F,Nt))}function It(F,yt){const Nt=p.get(yt).get(F);m.get(yt)!==Nt&&(r.uniformBlockBinding(yt,Nt,F.__bindingPointIndex),m.set(yt,Nt))}function Y(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},St=null,Ct={},g={},x=new WeakMap,S=[],E=null,b=!1,M=null,_=null,H=null,L=null,D=null,V=null,N=null,I=new _e(0,0,0),X=0,U=!1,w=null,k=null,J=null,lt=null,ht=null,Mt.set(0,0,r.canvas.width,r.canvas.height),rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ut,disable:Ut,bindFramebuffer:Pt,drawBuffers:zt,useProgram:Ht,setBlending:oe,setMaterial:ee,setFlipSided:Zt,setCullFace:kt,setLineWidth:xe,setPolygonOffset:Ot,setScissorTest:te,activeTexture:Qe,bindTexture:qe,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:Qt,texImage3D:Dt,updateUBOMapping:Gt,uniformBlockBinding:It,texStorage2D:Lt,texStorage3D:Kt,texSubImage2D:mt,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:$t,scissor:wt,viewport:Wt,reset:Y}}function AA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new fe,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return S?new OffscreenCanvas(O,T):Hc("canvas")}function b(O,T,et){let mt=1;const Et=qe(O);if((Et.width>et||Et.height>et)&&(mt=et/Math.max(Et.width,Et.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pt=Math.floor(mt*Et.width),$t=Math.floor(mt*Et.height);g===void 0&&(g=E(pt,$t));const Lt=T?E(pt,$t):g;return Lt.width=pt,Lt.height=$t,Lt.getContext("2d").drawImage(O,0,0,pt,$t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+pt+"x"+$t+")."),Lt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),O;return O}function M(O){return O.generateMipmaps}function _(O){r.generateMipmap(O)}function H(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(O,T,et,mt,Et=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pt=T;if(T===r.RED&&(et===r.FLOAT&&(pt=r.R32F),et===r.HALF_FLOAT&&(pt=r.R16F),et===r.UNSIGNED_BYTE&&(pt=r.R8)),T===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.R8UI),et===r.UNSIGNED_SHORT&&(pt=r.R16UI),et===r.UNSIGNED_INT&&(pt=r.R32UI),et===r.BYTE&&(pt=r.R8I),et===r.SHORT&&(pt=r.R16I),et===r.INT&&(pt=r.R32I)),T===r.RG&&(et===r.FLOAT&&(pt=r.RG32F),et===r.HALF_FLOAT&&(pt=r.RG16F),et===r.UNSIGNED_BYTE&&(pt=r.RG8)),T===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RG8UI),et===r.UNSIGNED_SHORT&&(pt=r.RG16UI),et===r.UNSIGNED_INT&&(pt=r.RG32UI),et===r.BYTE&&(pt=r.RG8I),et===r.SHORT&&(pt=r.RG16I),et===r.INT&&(pt=r.RG32I)),T===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),et===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),et===r.UNSIGNED_INT&&(pt=r.RGB32UI),et===r.BYTE&&(pt=r.RGB8I),et===r.SHORT&&(pt=r.RGB16I),et===r.INT&&(pt=r.RGB32I)),T===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),et===r.UNSIGNED_INT&&(pt=r.RGBA32UI),et===r.BYTE&&(pt=r.RGBA8I),et===r.SHORT&&(pt=r.RGBA16I),et===r.INT&&(pt=r.RGBA32I)),T===r.RGB&&(et===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),et===r.UNSIGNED_INT_10F_11F_11F_REV&&(pt=r.R11F_G11F_B10F)),T===r.RGBA){const $t=Et?Bc:Le.getTransfer(mt);et===r.FLOAT&&(pt=r.RGBA32F),et===r.HALF_FLOAT&&(pt=r.RGBA16F),et===r.UNSIGNED_BYTE&&(pt=$t===Ve?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(O,T){let et;return O?T===null||T===Ts||T===Go?et=r.DEPTH24_STENCIL8:T===ua?et=r.DEPTH32F_STENCIL8:T===Ho&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ts||T===Go?et=r.DEPTH_COMPONENT24:T===ua?et=r.DEPTH_COMPONENT32F:T===Ho&&(et=r.DEPTH_COMPONENT16),et}function V(O,T){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ci&&O.minFilter!==zi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function N(O){const T=O.target;T.removeEventListener("dispose",N),X(T),T.isVideoTexture&&v.delete(T)}function I(O){const T=O.target;T.removeEventListener("dispose",I),w(T)}function X(O){const T=s.get(O);if(T.__webglInit===void 0)return;const et=O.source,mt=x.get(et);if(mt){const Et=mt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&U(O),Object.keys(mt).length===0&&x.delete(et)}s.remove(O)}function U(O){const T=s.get(O);r.deleteTexture(T.__webglTexture);const et=O.source,mt=x.get(et);delete mt[T.__cacheKey],h.memory.textures--}function w(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let Et=0;Et<T.__webglFramebuffer[mt].length;Et++)r.deleteFramebuffer(T.__webglFramebuffer[mt][Et]);else r.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[mt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=O.textures;for(let mt=0,Et=et.length;mt<Et;mt++){const pt=s.get(et[mt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(et[mt])}s.remove(O)}let k=0;function J(){k=0}function lt(){const O=k;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),k+=1,O}function ht(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function dt(O,T){const et=s.get(O);if(O.isVideoTexture&&te(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&et.__version!==O.version){const mt=O.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(et,O,T);return}}else O.isExternalTexture&&(et.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+T)}function B(O,T){const et=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){q(et,O,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+T)}function $(O,T){const et=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){q(et,O,T);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+T)}function W(O,T){const et=s.get(O);if(O.version>0&&et.__version!==O.version){ut(et,O,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+T)}const St={[ad]:r.REPEAT,[Ms]:r.CLAMP_TO_EDGE,[sd]:r.MIRRORED_REPEAT},Ct={[Ci]:r.NEAREST,[tM]:r.NEAREST_MIPMAP_NEAREST,[oc]:r.NEAREST_MIPMAP_LINEAR,[zi]:r.LINEAR,[fh]:r.LINEAR_MIPMAP_NEAREST,[Es]:r.LINEAR_MIPMAP_LINEAR},P={[aM]:r.NEVER,[uM]:r.ALWAYS,[sM]:r.LESS,[yv]:r.LEQUAL,[rM]:r.EQUAL,[cM]:r.GEQUAL,[oM]:r.GREATER,[lM]:r.NOTEQUAL};function nt(O,T){if(T.type===ua&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===zi||T.magFilter===fh||T.magFilter===oc||T.magFilter===Es||T.minFilter===zi||T.minFilter===fh||T.minFilter===oc||T.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,St[T.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,St[T.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,St[T.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Ct[T.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Ct[T.minFilter]),T.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ci||T.minFilter!==oc&&T.minFilter!==Es||T.type===ua&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(O,T){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",N));const mt=T.source;let Et=x.get(mt);Et===void 0&&(Et={},x.set(mt,Et));const pt=ht(T);if(pt!==O.__cacheKey){Et[pt]===void 0&&(Et[pt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Et[pt].usedTimes++;const $t=Et[O.__cacheKey];$t!==void 0&&(Et[O.__cacheKey].usedTimes--,$t.usedTimes===0&&U(T)),O.__cacheKey=pt,O.__webglTexture=Et[pt].texture}return et}function rt(O,T,et){return Math.floor(Math.floor(O/et)/T)}function Rt(O,T,et,mt){const pt=O.updateRanges;if(pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,et,mt,T.data);else{pt.sort((Dt,wt)=>Dt.start-wt.start);let $t=0;for(let Dt=1;Dt<pt.length;Dt++){const wt=pt[$t],Wt=pt[Dt],Gt=wt.start+wt.count,It=rt(Wt.start,T.width,4),Y=rt(wt.start,T.width,4);Wt.start<=Gt+1&&It===Y&&rt(Wt.start+Wt.count-1,T.width,4)===It?wt.count=Math.max(wt.count,Wt.start+Wt.count-wt.start):(++$t,pt[$t]=Wt)}pt.length=$t+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),Kt=r.getParameter(r.UNPACK_SKIP_PIXELS),Qt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Dt=0,wt=pt.length;Dt<wt;Dt++){const Wt=pt[Dt],Gt=Math.floor(Wt.start/4),It=Math.ceil(Wt.count/4),Y=Gt%T.width,F=Math.floor(Gt/T.width),yt=It,bt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Y),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),i.texSubImage2D(r.TEXTURE_2D,0,Y,F,yt,bt,et,mt,T.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qt)}}function q(O,T,et){let mt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=r.TEXTURE_3D);const Et=Mt(O,T),pt=T.source;i.bindTexture(mt,O.__webglTexture,r.TEXTURE0+et);const $t=s.get(pt);if(pt.version!==$t.__version||Et===!0){i.activeTexture(r.TEXTURE0+et);const Lt=Le.getPrimaries(Le.workingColorSpace),Kt=T.colorSpace===ka?null:Le.getPrimaries(T.colorSpace),Qt=T.colorSpace===ka||Lt===Kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Dt=b(T.image,!1,l.maxTextureSize);Dt=Qe(T,Dt);const wt=c.convert(T.format,T.colorSpace),Wt=c.convert(T.type);let Gt=L(T.internalFormat,wt,Wt,T.colorSpace,T.isVideoTexture);nt(mt,T);let It;const Y=T.mipmaps,F=T.isVideoTexture!==!0,yt=$t.__version===void 0||Et===!0,bt=pt.dataReady,Nt=V(T,Dt);if(T.isDepthTexture)Gt=D(T.format===ko,T.type),yt&&(F?i.texStorage2D(r.TEXTURE_2D,1,Gt,Dt.width,Dt.height):i.texImage2D(r.TEXTURE_2D,0,Gt,Dt.width,Dt.height,0,wt,Wt,null));else if(T.isDataTexture)if(Y.length>0){F&&yt&&i.texStorage2D(r.TEXTURE_2D,Nt,Gt,Y[0].width,Y[0].height);for(let At=0,vt=Y.length;At<vt;At++)It=Y[At],F?bt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,It.width,It.height,wt,Wt,It.data):i.texImage2D(r.TEXTURE_2D,At,Gt,It.width,It.height,0,wt,Wt,It.data);T.generateMipmaps=!1}else F?(yt&&i.texStorage2D(r.TEXTURE_2D,Nt,Gt,Dt.width,Dt.height),bt&&Rt(T,Dt,wt,Wt)):i.texImage2D(r.TEXTURE_2D,0,Gt,Dt.width,Dt.height,0,wt,Wt,Dt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&yt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Gt,Y[0].width,Y[0].height,Dt.depth);for(let At=0,vt=Y.length;At<vt;At++)if(It=Y[At],T.format!==Ri)if(wt!==null)if(F){if(bt)if(T.layerUpdates.size>0){const jt=R0(It.width,It.height,T.format,T.type);for(const ue of T.layerUpdates){const ze=It.data.subarray(ue*jt/It.data.BYTES_PER_ELEMENT,(ue+1)*jt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,ue,It.width,It.height,1,wt,ze)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,It.width,It.height,Dt.depth,wt,It.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Gt,It.width,It.height,Dt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?bt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,It.width,It.height,Dt.depth,wt,Wt,It.data):i.texImage3D(r.TEXTURE_2D_ARRAY,At,Gt,It.width,It.height,Dt.depth,0,wt,Wt,It.data)}else{F&&yt&&i.texStorage2D(r.TEXTURE_2D,Nt,Gt,Y[0].width,Y[0].height);for(let At=0,vt=Y.length;At<vt;At++)It=Y[At],T.format!==Ri?wt!==null?F?bt&&i.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,It.width,It.height,wt,It.data):i.compressedTexImage2D(r.TEXTURE_2D,At,Gt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?bt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,It.width,It.height,wt,Wt,It.data):i.texImage2D(r.TEXTURE_2D,At,Gt,It.width,It.height,0,wt,Wt,It.data)}else if(T.isDataArrayTexture)if(F){if(yt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Gt,Dt.width,Dt.height,Dt.depth),bt)if(T.layerUpdates.size>0){const At=R0(Dt.width,Dt.height,T.format,T.type);for(const vt of T.layerUpdates){const jt=Dt.data.subarray(vt*At/Dt.data.BYTES_PER_ELEMENT,(vt+1)*At/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Dt.width,Dt.height,1,wt,Wt,jt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,wt,Wt,Dt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Gt,Dt.width,Dt.height,Dt.depth,0,wt,Wt,Dt.data);else if(T.isData3DTexture)F?(yt&&i.texStorage3D(r.TEXTURE_3D,Nt,Gt,Dt.width,Dt.height,Dt.depth),bt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,wt,Wt,Dt.data)):i.texImage3D(r.TEXTURE_3D,0,Gt,Dt.width,Dt.height,Dt.depth,0,wt,Wt,Dt.data);else if(T.isFramebufferTexture){if(yt)if(F)i.texStorage2D(r.TEXTURE_2D,Nt,Gt,Dt.width,Dt.height);else{let At=Dt.width,vt=Dt.height;for(let jt=0;jt<Nt;jt++)i.texImage2D(r.TEXTURE_2D,jt,Gt,At,vt,0,wt,Wt,null),At>>=1,vt>>=1}}else if(Y.length>0){if(F&&yt){const At=qe(Y[0]);i.texStorage2D(r.TEXTURE_2D,Nt,Gt,At.width,At.height)}for(let At=0,vt=Y.length;At<vt;At++)It=Y[At],F?bt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,wt,Wt,It):i.texImage2D(r.TEXTURE_2D,At,Gt,wt,Wt,It);T.generateMipmaps=!1}else if(F){if(yt){const At=qe(Dt);i.texStorage2D(r.TEXTURE_2D,Nt,Gt,At.width,At.height)}bt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Wt,Dt)}else i.texImage2D(r.TEXTURE_2D,0,Gt,wt,Wt,Dt);M(T)&&_(mt),$t.__version=pt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ut(O,T,et){if(T.image.length!==6)return;const mt=Mt(O,T),Et=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+et);const pt=s.get(Et);if(Et.version!==pt.__version||mt===!0){i.activeTexture(r.TEXTURE0+et);const $t=Le.getPrimaries(Le.workingColorSpace),Lt=T.colorSpace===ka?null:Le.getPrimaries(T.colorSpace),Kt=T.colorSpace===ka||$t===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,Dt=T.image[0]&&T.image[0].isDataTexture,wt=[];for(let vt=0;vt<6;vt++)!Qt&&!Dt?wt[vt]=b(T.image[vt],!0,l.maxCubemapSize):wt[vt]=Dt?T.image[vt].image:T.image[vt],wt[vt]=Qe(T,wt[vt]);const Wt=wt[0],Gt=c.convert(T.format,T.colorSpace),It=c.convert(T.type),Y=L(T.internalFormat,Gt,It,T.colorSpace),F=T.isVideoTexture!==!0,yt=pt.__version===void 0||mt===!0,bt=Et.dataReady;let Nt=V(T,Wt);nt(r.TEXTURE_CUBE_MAP,T);let At;if(Qt){F&&yt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,Y,Wt.width,Wt.height);for(let vt=0;vt<6;vt++){At=wt[vt].mipmaps;for(let jt=0;jt<At.length;jt++){const ue=At[jt];T.format!==Ri?Gt!==null?F?bt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,jt,0,0,ue.width,ue.height,Gt,ue.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,jt,Y,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,jt,0,0,ue.width,ue.height,Gt,It,ue.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,jt,Y,ue.width,ue.height,0,Gt,It,ue.data)}}}else{if(At=T.mipmaps,F&&yt){At.length>0&&Nt++;const vt=qe(wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,Y,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Dt){F?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,wt[vt].width,wt[vt].height,Gt,It,wt[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Y,wt[vt].width,wt[vt].height,0,Gt,It,wt[vt].data);for(let jt=0;jt<At.length;jt++){const ze=At[jt].image[vt].image;F?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,jt+1,0,0,ze.width,ze.height,Gt,It,ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,jt+1,Y,ze.width,ze.height,0,Gt,It,ze.data)}}else{F?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Gt,It,wt[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Y,Gt,It,wt[vt]);for(let jt=0;jt<At.length;jt++){const ue=At[jt];F?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,jt+1,0,0,Gt,It,ue.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,jt+1,Y,Gt,It,ue.image[vt])}}}M(T)&&_(r.TEXTURE_CUBE_MAP),pt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ut(O,T,et,mt,Et,pt){const $t=c.convert(et.format,et.colorSpace),Lt=c.convert(et.type),Kt=L(et.internalFormat,$t,Lt,et.colorSpace),Qt=s.get(T),Dt=s.get(et);if(Dt.__renderTarget=T,!Qt.__hasExternalTextures){const wt=Math.max(1,T.width>>pt),Wt=Math.max(1,T.height>>pt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,pt,Kt,wt,Wt,T.depth,0,$t,Lt,null):i.texImage2D(Et,pt,Kt,wt,Wt,0,$t,Lt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),Ot(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,Et,Dt.__webglTexture,0,xe(T)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,Et,Dt.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(O,T,et){if(r.bindRenderbuffer(r.RENDERBUFFER,O),T.depthBuffer){const mt=T.depthTexture,Et=mt&&mt.isDepthTexture?mt.type:null,pt=D(T.stencilBuffer,Et),$t=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=xe(T);Ot(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt,pt,T.width,T.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$t,r.RENDERBUFFER,O)}else{const mt=T.textures;for(let Et=0;Et<mt.length;Et++){const pt=mt[Et],$t=c.convert(pt.format,pt.colorSpace),Lt=c.convert(pt.type),Kt=L(pt.internalFormat,$t,Lt,pt.colorSpace),Qt=xe(T);et&&Ot(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,Kt,T.width,T.height):Ot(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt,Kt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Kt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const Et=mt.__webglTexture,pt=xe(T);if(T.depthTexture.format===Vo)Ot(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0);else if(T.depthTexture.format===ko)Ot(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Ht(O){const T=s.get(O),et=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",Et)};mt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=mt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const mt=O.texture.mipmaps;mt&&mt.length>0?zt(T.__webglFramebuffer[0],O):zt(T.__webglFramebuffer,O)}else if(et){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=r.createRenderbuffer(),Pt(T.__webglDepthbuffer[mt],O,!1);else{const Et=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,pt)}}else{const mt=O.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Pt(T.__webglDepthbuffer,O,!1);else{const Et=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function re(O,T,et){const mt=s.get(O);T!==void 0&&Ut(mt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&Ht(O)}function z(O){const T=O.texture,et=s.get(O),mt=s.get(T);O.addEventListener("dispose",I);const Et=O.textures,pt=O.isWebGLCubeRenderTarget===!0,$t=Et.length>1;if($t||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=T.version,h.memory.textures++),pt){et.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Lt]=[];for(let Kt=0;Kt<T.mipmaps.length;Kt++)et.__webglFramebuffer[Lt][Kt]=r.createFramebuffer()}else et.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)et.__webglFramebuffer[Lt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if($t)for(let Lt=0,Kt=Et.length;Lt<Kt;Lt++){const Qt=s.get(Et[Lt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=r.createTexture(),h.memory.textures++)}if(O.samples>0&&Ot(O)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Et.length;Lt++){const Kt=Et[Lt];et.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Lt]);const Qt=c.convert(Kt.format,Kt.colorSpace),Dt=c.convert(Kt.type),wt=L(Kt.internalFormat,Qt,Dt,Kt.colorSpace,O.isXRRenderTarget===!0),Wt=xe(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,wt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,et.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),nt(r.TEXTURE_CUBE_MAP,T);for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)Ut(et.__webglFramebuffer[Lt][Kt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Kt);else Ut(et.__webglFramebuffer[Lt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(T)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if($t){for(let Lt=0,Kt=Et.length;Lt<Kt;Lt++){const Qt=Et[Lt],Dt=s.get(Qt);let wt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,Dt.__webglTexture),nt(wt,Qt),Ut(et.__webglFramebuffer,O,Qt,r.COLOR_ATTACHMENT0+Lt,wt,0),M(Qt)&&_(wt)}i.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,mt.__webglTexture),nt(Lt,T),T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)Ut(et.__webglFramebuffer[Kt],O,T,r.COLOR_ATTACHMENT0,Lt,Kt);else Ut(et.__webglFramebuffer,O,T,r.COLOR_ATTACHMENT0,Lt,0);M(T)&&_(Lt),i.unbindTexture()}O.depthBuffer&&Ht(O)}function oe(O){const T=O.textures;for(let et=0,mt=T.length;et<mt;et++){const Et=T[et];if(M(Et)){const pt=H(O),$t=s.get(Et).__webglTexture;i.bindTexture(pt,$t),_(pt),i.unbindTexture()}}}const ee=[],Zt=[];function kt(O){if(O.samples>0){if(Ot(O)===!1){const T=O.textures,et=O.width,mt=O.height;let Et=r.COLOR_BUFFER_BIT;const pt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$t=s.get(O),Lt=T.length>1;if(Lt)for(let Qt=0;Qt<T.length;Qt++)i.bindFramebuffer(r.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,$t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer);const Kt=O.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let Qt=0;Qt<T.length;Qt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$t.__webglColorRenderbuffer[Qt]);const Dt=s.get(T[Qt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Dt,0)}r.blitFramebuffer(0,0,et,mt,0,0,et,mt,Et,r.NEAREST),m===!0&&(ee.length=0,Zt.length=0,ee.push(r.COLOR_ATTACHMENT0+Qt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ee.push(pt),Zt.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let Qt=0;Qt<T.length;Qt++){i.bindFramebuffer(r.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.RENDERBUFFER,$t.__webglColorRenderbuffer[Qt]);const Dt=s.get(T[Qt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,$t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qt,r.TEXTURE_2D,Dt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function xe(O){return Math.min(l.maxSamples,O.samples)}function Ot(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function te(O){const T=h.render.frame;v.get(O)!==T&&(v.set(O,T),O.update())}function Qe(O,T){const et=O.colorSpace,mt=O.format,Et=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Lr&&et!==ka&&(Le.getTransfer(et)===Ve?(mt!==Ri||Et!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=J,this.setTexture2D=dt,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=re,this.setupRenderTarget=z,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ot}function RA(r,t){function i(s,l=ka){let c;const h=Le.getTransfer(l);if(s===Bi)return r.UNSIGNED_BYTE;if(s===Hd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Gd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===dv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===pv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===fv)return r.BYTE;if(s===hv)return r.SHORT;if(s===Ho)return r.UNSIGNED_SHORT;if(s===Fd)return r.INT;if(s===Ts)return r.UNSIGNED_INT;if(s===ua)return r.FLOAT;if(s===Xo)return r.HALF_FLOAT;if(s===mv)return r.ALPHA;if(s===gv)return r.RGB;if(s===Ri)return r.RGBA;if(s===Vo)return r.DEPTH_COMPONENT;if(s===ko)return r.DEPTH_STENCIL;if(s===_v)return r.RED;if(s===Vd)return r.RED_INTEGER;if(s===vv)return r.RG;if(s===kd)return r.RG_INTEGER;if(s===jd)return r.RGBA_INTEGER;if(s===Lc||s===Nc||s===Oc||s===Pc)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rd||s===od||s===ld||s===cd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===rd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===od)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ld)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ud||s===fd||s===hd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ud||s===fd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===hd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===Td||s===bd||s===Ad)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===dd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_d)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ed)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Td)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ad)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rd||s===Cd||s===wd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Rd)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dd||s===Ud||s===Ld||s===Nd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Dd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Go?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wA=`
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

}`;class DA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Lv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qa({vertexShader:CA,fragmentShader:wA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bn(new qc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UA extends Rs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,S=null,E=null;const b=typeof XRWebGLBinding<"u",M=new DA,_={},H=i.getContextAttributes();let L=null,D=null;const V=[],N=[],I=new fe;let X=null;const U=new _i;U.viewport=new an;const w=new _i;w.viewport=new an;const k=[U,w],J=new KM;let lt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ut=V[q];return ut===void 0&&(ut=new Nh,V[q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(q){let ut=V[q];return ut===void 0&&(ut=new Nh,V[q]=ut),ut.getGripSpace()},this.getHand=function(q){let ut=V[q];return ut===void 0&&(ut=new Nh,V[q]=ut),ut.getHandSpace()};function dt(q){const ut=N.indexOf(q.inputSource);if(ut===-1)return;const Ut=V[ut];Ut!==void 0&&(Ut.update(q.inputSource,q.frame,p||h),Ut.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){l.removeEventListener("select",dt),l.removeEventListener("selectstart",dt),l.removeEventListener("selectend",dt),l.removeEventListener("squeeze",dt),l.removeEventListener("squeezestart",dt),l.removeEventListener("squeezeend",dt),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",$);for(let q=0;q<V.length;q++){const ut=N[q];ut!==null&&(N[q]=null,V[q].disconnect(ut))}lt=null,ht=null,M.reset();for(const q in _)delete _[q];t.setRenderTarget(L),S=null,x=null,g=null,l=null,D=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",dt),l.addEventListener("selectstart",dt),l.addEventListener("selectend",dt),l.addEventListener("squeeze",dt),l.addEventListener("squeezestart",dt),l.addEventListener("squeezeend",dt),l.addEventListener("end",B),l.addEventListener("inputsourceschange",$),H.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Pt=null,zt=null;H.depth&&(zt=H.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=H.stencil?ko:Vo,Pt=H.stencil?Go:Ts);const Ht={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(Ht),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new As(x.textureWidth,x.textureHeight,{format:Ri,type:Bi,depthTexture:new Uv(x.textureWidth,x.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:H.stencil,colorSpace:t.outputColorSpace,samples:H.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ut={antialias:H.antialias,alpha:!0,depth:H.depth,stencil:H.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new As(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:H.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(q){for(let ut=0;ut<q.removed.length;ut++){const Ut=q.removed[ut],Pt=N.indexOf(Ut);Pt>=0&&(N[Pt]=null,V[Pt].disconnect(Ut))}for(let ut=0;ut<q.added.length;ut++){const Ut=q.added[ut];let Pt=N.indexOf(Ut);if(Pt===-1){for(let Ht=0;Ht<V.length;Ht++)if(Ht>=N.length){N.push(Ut),Pt=Ht;break}else if(N[Ht]===null){N[Ht]=Ut,Pt=Ht;break}if(Pt===-1)break}const zt=V[Pt];zt&&zt.connect(Ut)}}const W=new tt,St=new tt;function Ct(q,ut,Ut){W.setFromMatrixPosition(ut.matrixWorld),St.setFromMatrixPosition(Ut.matrixWorld);const Pt=W.distanceTo(St),zt=ut.projectionMatrix.elements,Ht=Ut.projectionMatrix.elements,re=zt[14]/(zt[10]-1),z=zt[14]/(zt[10]+1),oe=(zt[9]+1)/zt[5],ee=(zt[9]-1)/zt[5],Zt=(zt[8]-1)/zt[0],kt=(Ht[8]+1)/Ht[0],xe=re*Zt,Ot=re*kt,te=Pt/(-Zt+kt),Qe=te*-Zt;if(ut.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qe),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),zt[10]===-1)q.projectionMatrix.copy(ut.projectionMatrix),q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qe=re+te,O=z+te,T=xe-Qe,et=Ot+(Pt-Qe),mt=oe*z/O*qe,Et=ee*z/O*qe;q.projectionMatrix.makePerspective(T,et,mt,Et,qe,O),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function P(q,ut){ut===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ut.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let ut=q.near,Ut=q.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(Ut=M.depthFar)),J.near=w.near=U.near=ut,J.far=w.far=U.far=Ut,(lt!==J.near||ht!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),lt=J.near,ht=J.far),J.layers.mask=q.layers.mask|6,U.layers.mask=J.layers.mask&3,w.layers.mask=J.layers.mask&5;const Pt=q.parent,zt=J.cameras;P(J,Pt);for(let Ht=0;Ht<zt.length;Ht++)P(zt[Ht],Pt);zt.length===2?Ct(J,U,w):J.projectionMatrix.copy(U.projectionMatrix),nt(q,J,Pt)};function nt(q,ut,Ut){Ut===null?q.matrix.copy(ut.matrixWorld):(q.matrix.copy(Ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(ut.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ut.projectionMatrix),q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Od*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(q){m=q,x!==null&&(x.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(q){return _[q]};let Mt=null;function rt(q,ut){if(v=ut.getViewerPose(p||h),E=ut,v!==null){const Ut=v.views;S!==null&&(t.setRenderTargetFramebuffer(D,S.framebuffer),t.setRenderTarget(D));let Pt=!1;Ut.length!==J.cameras.length&&(J.cameras.length=0,Pt=!0);for(let z=0;z<Ut.length;z++){const oe=Ut[z];let ee=null;if(S!==null)ee=S.getViewport(oe);else{const kt=g.getViewSubImage(x,oe);ee=kt.viewport,z===0&&(t.setRenderTargetTextures(D,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(D))}let Zt=k[z];Zt===void 0&&(Zt=new _i,Zt.layers.enable(z),Zt.viewport=new an,k[z]=Zt),Zt.matrix.fromArray(oe.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(oe.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(ee.x,ee.y,ee.width,ee.height),z===0&&(J.matrix.copy(Zt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Pt===!0&&J.cameras.push(Zt)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){g=s.getBinding();const z=g.getDepthInformation(Ut[0]);z&&z.isValid&&z.texture&&M.init(z,l.renderState)}if(zt&&zt.includes("camera-access")&&b){t.state.unbindTexture(),g=s.getBinding();for(let z=0;z<Ut.length;z++){const oe=Ut[z].camera;if(oe){let ee=_[oe];ee||(ee=new Lv,_[oe]=ee);const Zt=g.getCameraImage(oe);ee.sourceTexture=Zt}}}}for(let Ut=0;Ut<V.length;Ut++){const Pt=N[Ut],zt=V[Ut];Pt!==null&&zt!==void 0&&zt.update(Pt,ut,p||h)}Mt&&Mt(q,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),E=null}const Rt=new Pv;Rt.setAnimationLoop(rt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const vs=new Fi,LA=new sn;function NA(r,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,Rv(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,H,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),v(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&S(M,_,D)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),b(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,H,L):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Yn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Yn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const H=t.get(_),L=H.envMap,D=H.envMapRotation;L&&(M.envMap.value=L,vs.copy(D),vs.x*=-1,vs.y*=-1,vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),M.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(vs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,H,L){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*H,M.scale.value=L*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,H){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=H.texture,M.transmissionSamplerSize.value.set(H.width,H.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function b(M,_){const H=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(H.matrixWorld),M.nearDistance.value=H.shadow.camera.near,M.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function OA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(H,L){const D=L.program;s.uniformBlockBinding(H,D)}function p(H,L){let D=l[H.id];D===void 0&&(E(H),D=v(H),l[H.id]=D,H.addEventListener("dispose",M));const V=L.program;s.updateUBOMapping(H,V);const N=t.render.frame;c[H.id]!==N&&(x(H),c[H.id]=N)}function v(H){const L=g();H.__bindingPointIndex=L;const D=r.createBuffer(),V=H.__size,N=H.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,V,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function g(){for(let H=0;H<d;H++)if(h.indexOf(H)===-1)return h.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(H){const L=l[H.id],D=H.uniforms,V=H.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,I=D.length;N<I;N++){const X=Array.isArray(D[N])?D[N]:[D[N]];for(let U=0,w=X.length;U<w;U++){const k=X[U];if(S(k,N,U,V)===!0){const J=k.__offset,lt=Array.isArray(k.value)?k.value:[k.value];let ht=0;for(let dt=0;dt<lt.length;dt++){const B=lt[dt],$=b(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,J+ht,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,ht),ht+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(H,L,D,V){const N=H.value,I=L+"_"+D;if(V[I]===void 0)return typeof N=="number"||typeof N=="boolean"?V[I]=N:V[I]=N.clone(),!0;{const X=V[I];if(typeof N=="number"||typeof N=="boolean"){if(X!==N)return V[I]=N,!0}else if(X.equals(N)===!1)return X.copy(N),!0}return!1}function E(H){const L=H.uniforms;let D=0;const V=16;for(let I=0,X=L.length;I<X;I++){const U=Array.isArray(L[I])?L[I]:[L[I]];for(let w=0,k=U.length;w<k;w++){const J=U[w],lt=Array.isArray(J.value)?J.value:[J.value];for(let ht=0,dt=lt.length;ht<dt;ht++){const B=lt[ht],$=b(B),W=D%V,St=W%$.boundary,Ct=W+St;D+=St,Ct!==0&&V-Ct<$.storage&&(D+=V-Ct),J.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=$.storage}}}const N=D%V;return N>0&&(D+=V-N),H.__size=D,H.__cache={},this}function b(H){const L={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(L.boundary=4,L.storage=4):H.isVector2?(L.boundary=8,L.storage=8):H.isVector3||H.isColor?(L.boundary=16,L.storage=12):H.isVector4?(L.boundary=16,L.storage=16):H.isMatrix3?(L.boundary=48,L.storage=48):H.isMatrix4?(L.boundary=64,L.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),L}function M(H){const L=H.target;L.removeEventListener("dispose",M);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const H in l)r.deleteBuffer(l[H]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class PA{constructor(t={}){const{canvas:i=dM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,_=null;const H=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let V=!1;this._outputColorSpace=gi;let N=0,I=0,X=null,U=-1,w=null;const k=new an,J=new an;let lt=null;const ht=new _e(0);let dt=0,B=i.width,$=i.height,W=1,St=null,Ct=null;const P=new an(0,0,B,$),nt=new an(0,0,B,$);let Mt=!1;const rt=new Yd;let Rt=!1,q=!1;const ut=new sn,Ut=new tt,Pt=new an,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function re(){return X===null?W:1}let z=s;function oe(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bd}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",At,!1),z===null){const Z="webgl2";if(z=oe(Z,R),z===null)throw oe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ee,Zt,kt,xe,Ot,te,Qe,qe,O,T,et,mt,Et,pt,$t,Lt,Kt,Qt,Dt,wt,Wt,Gt,It,Y;function F(){ee=new Xb(z),ee.init(),Gt=new RA(z,ee),Zt=new Bb(z,ee,t,Gt),kt=new bA(z,ee),Zt.reversedDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),xe=new Yb(z),Ot=new hA,te=new AA(z,ee,kt,Ot,Zt,Gt,xe),Qe=new Hb(D),qe=new jb(D),O=new tE(z),It=new zb(z,O),T=new Wb(z,O,xe,It),et=new Kb(z,T,O,xe),Dt=new Zb(z,Zt,te),Lt=new Fb(Ot),mt=new fA(D,Qe,qe,ee,Zt,It,Lt),Et=new NA(D,Ot),pt=new pA,$t=new yA(ee),Qt=new Pb(D,Qe,qe,kt,et,S,m),Kt=new EA(D,et,Zt),Y=new OA(z,xe,Zt,kt),wt=new Ib(z,ee,xe),Wt=new qb(z,ee,xe),xe.programs=mt.programs,D.capabilities=Zt,D.extensions=ee,D.properties=Ot,D.renderLists=pt,D.shadowMap=Kt,D.state=kt,D.info=xe}F();const yt=new UA(D,z);this.xr=yt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(B,$,!1))},this.getSize=function(R){return R.set(B,$)},this.setSize=function(R,Z,ot=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,$=Z,i.width=Math.floor(R*W),i.height=Math.floor(Z*W),ot===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(B*W,$*W).floor()},this.setDrawingBufferSize=function(R,Z,ot){B=R,$=Z,W=ot,i.width=Math.floor(R*ot),i.height=Math.floor(Z*ot),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,Z,ot,ct){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,Z,ot,ct),kt.viewport(k.copy(P).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,Z,ot,ct){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,Z,ot,ct),kt.scissor(J.copy(nt).multiplyScalar(W).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){kt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){Ct=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ot=!0){let ct=0;if(R){let Q=!1;if(X!==null){const Tt=X.texture.format;Q=Tt===jd||Tt===kd||Tt===Vd}if(Q){const Tt=X.texture.type,Bt=Tt===Bi||Tt===Ts||Tt===Ho||Tt===Go||Tt===Hd||Tt===Gd,qt=Qt.getClearColor(),Vt=Qt.getClearAlpha(),ne=qt.r,ce=qt.g,ie=qt.b;Bt?(E[0]=ne,E[1]=ce,E[2]=ie,E[3]=Vt,z.clearBufferuiv(z.COLOR,0,E)):(b[0]=ne,b[1]=ce,b[2]=ie,b[3]=Vt,z.clearBufferiv(z.COLOR,0,b))}else ct|=z.COLOR_BUFFER_BIT}Z&&(ct|=z.DEPTH_BUFFER_BIT),ot&&(ct|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Qt.dispose(),pt.dispose(),$t.dispose(),Ot.dispose(),Qe.dispose(),qe.dispose(),et.dispose(),It.dispose(),Y.dispose(),mt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",ri),yt.removeEventListener("sessionend",Ir),wi.stop()};function bt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const R=xe.autoReset,Z=Kt.enabled,ot=Kt.autoUpdate,ct=Kt.needsUpdate,Q=Kt.type;F(),xe.autoReset=R,Kt.enabled=Z,Kt.autoUpdate=ot,Kt.needsUpdate=ct,Kt.type=Q}function At(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const Z=R.target;Z.removeEventListener("dispose",vt),jt(Z)}function jt(R){ue(R),Ot.remove(R)}function ue(R){const Z=Ot.get(R).programs;Z!==void 0&&(Z.forEach(function(ot){mt.releaseProgram(ot)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ot,ct,Q,Tt){Z===null&&(Z=zt);const Bt=Q.isMesh&&Q.matrixWorld.determinant()<0,qt=ha(R,Z,ot,ct,Q);kt.setMaterial(ct,Bt);let Vt=ot.index,ne=1;if(ct.wireframe===!0){if(Vt=T.getWireframeAttribute(ot),Vt===void 0)return;ne=2}const ce=ot.drawRange,ie=ot.attributes.position;let ve=ce.start*ne,Oe=(ce.start+ce.count)*ne;Tt!==null&&(ve=Math.max(ve,Tt.start*ne),Oe=Math.min(Oe,(Tt.start+Tt.count)*ne)),Vt!==null?(ve=Math.max(ve,0),Oe=Math.min(Oe,Vt.count)):ie!=null&&(ve=Math.max(ve,0),Oe=Math.min(Oe,ie.count));const je=Oe-ve;if(je<0||je===1/0)return;It.setup(Q,ct,qt,ot,Vt);let Pe,ye=wt;if(Vt!==null&&(Pe=O.get(Vt),ye=Wt,ye.setIndex(Pe)),Q.isMesh)ct.wireframe===!0?(kt.setLineWidth(ct.wireframeLinewidth*re()),ye.setMode(z.LINES)):ye.setMode(z.TRIANGLES);else if(Q.isLine){let Yt=ct.linewidth;Yt===void 0&&(Yt=1),kt.setLineWidth(Yt*re()),Q.isLineSegments?ye.setMode(z.LINES):Q.isLineLoop?ye.setMode(z.LINE_LOOP):ye.setMode(z.LINE_STRIP)}else Q.isPoints?ye.setMode(z.POINTS):Q.isSprite&&ye.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)jo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ye.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Yt=Q._multiDrawStarts,We=Q._multiDrawCounts,we=Q._multiDrawCount,bn=Vt?O.get(Vt).bytesPerElement:1,Hi=Ot.get(ct).currentProgram.getUniforms();for(let yn=0;yn<we;yn++)Hi.setValue(z,"_gl_DrawID",yn),ye.render(Yt[yn]/bn,We[yn])}else if(Q.isInstancedMesh)ye.renderInstances(ve,je,Q.count);else if(ot.isInstancedBufferGeometry){const Yt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,We=Math.min(ot.instanceCount,Yt);ye.renderInstances(ve,je,We)}else ye.render(ve,je)};function ze(R,Z,ot){R.transparent===!0&&R.side===bi&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,Kn(R,Z,ot),R.side=Wa,R.needsUpdate=!0,Kn(R,Z,ot),R.side=bi):Kn(R,Z,ot)}this.compile=function(R,Z,ot=null){ot===null&&(ot=R),_=$t.get(ot),_.init(Z),L.push(_),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),R!==ot&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const ct=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Bt=0;Bt<Tt.length;Bt++){const qt=Tt[Bt];ze(qt,ot,Q),ct.add(qt)}else ze(Tt,ot,Q),ct.add(Tt)}),_=L.pop(),ct},this.compileAsync=function(R,Z,ot=null){const ct=this.compile(R,Z,ot);return new Promise(Q=>{function Tt(){if(ct.forEach(function(Bt){Ot.get(Bt).currentProgram.isReady()&&ct.delete(Bt)}),ct.size===0){Q(R);return}setTimeout(Tt,10)}ee.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ce=null;function On(R){Ce&&Ce(R)}function ri(){wi.stop()}function Ir(){wi.start()}const wi=new Pv;wi.setAnimationLoop(On),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){Ce=R,yt.setAnimationLoop(R),R===null?wi.stop():wi.start()},yt.addEventListener("sessionstart",ri),yt.addEventListener("sessionend",Ir),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(Z),Z=yt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Z,X),_=$t.get(R,L.length),_.init(Z),L.push(_),ut.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),rt.setFromProjectionMatrix(ut,Ii,Z.reversedDepth),q=this.localClippingEnabled,Rt=Lt.init(this.clippingPlanes,q),M=pt.get(R,H.length),M.init(),H.push(M),yt.enabled===!0&&yt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Cs(Tt,Z,-1/0,D.sortObjects)}Cs(R,Z,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(St,Ct),Ht=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Ht&&Qt.addToRenderList(M,R),this.info.render.frame++,Rt===!0&&Lt.beginShadows();const ot=_.state.shadowsArray;Kt.render(ot,R,Z),Rt===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=M.opaque,Q=M.transmissive;if(_.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(Q.length>0)for(let Bt=0,qt=Tt.length;Bt<qt;Bt++){const Vt=Tt[Bt];Ds(ct,Q,R,Vt)}Ht&&Qt.render(R);for(let Bt=0,qt=Tt.length;Bt<qt;Bt++){const Vt=Tt[Bt];ws(M,R,Vt,Vt.viewport)}}else Q.length>0&&Ds(ct,Q,R,Z),Ht&&Qt.render(R),ws(M,R,Z);X!==null&&I===0&&(te.updateMultisampleRenderTarget(X),te.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(D,R,Z),It.resetDefaultState(),U=-1,w=null,L.pop(),L.length>0?(_=L[L.length-1],Rt===!0&&Lt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,H.pop(),H.length>0?M=H[H.length-1]:M=null};function Cs(R,Z,ot,ct){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||rt.intersectsSprite(R)){ct&&Pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ut);const Bt=et.update(R),qt=R.material;qt.visible&&M.push(R,Bt,qt,ot,Pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||rt.intersectsObject(R))){const Bt=et.update(R),qt=R.material;if(ct&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pt.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Pt.copy(Bt.boundingSphere.center)),Pt.applyMatrix4(R.matrixWorld).applyMatrix4(ut)),Array.isArray(qt)){const Vt=Bt.groups;for(let ne=0,ce=Vt.length;ne<ce;ne++){const ie=Vt[ne],ve=qt[ie.materialIndex];ve&&ve.visible&&M.push(R,Bt,ve,ot,Pt.z,ie)}}else qt.visible&&M.push(R,Bt,qt,ot,Pt.z,null)}}const Tt=R.children;for(let Bt=0,qt=Tt.length;Bt<qt;Bt++)Cs(Tt[Bt],Z,ot,ct)}function ws(R,Z,ot,ct){const Q=R.opaque,Tt=R.transmissive,Bt=R.transparent;_.setupLightsView(ot),Rt===!0&&Lt.setGlobalState(D.clippingPlanes,ot),ct&&kt.viewport(k.copy(ct)),Q.length>0&&Ya(Q,Z,ot),Tt.length>0&&Ya(Tt,Z,ot),Bt.length>0&&Ya(Bt,Z,ot),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ds(R,Z,ot,ct){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ct.id]===void 0&&(_.state.transmissionRenderTarget[ct.id]=new As(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Xo:Bi,minFilter:Es,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[ct.id],Bt=ct.viewport||k;Tt.setSize(Bt.z*D.transmissionResolutionScale,Bt.w*D.transmissionResolutionScale);const qt=D.getRenderTarget(),Vt=D.getActiveCubeFace(),ne=D.getActiveMipmapLevel();D.setRenderTarget(Tt),D.getClearColor(ht),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),Ht&&Qt.render(ot);const ce=D.toneMapping;D.toneMapping=Xa;const ie=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),_.setupLightsView(ct),Rt===!0&&Lt.setGlobalState(D.clippingPlanes,ct),Ya(R,ot,ct),te.updateMultisampleRenderTarget(Tt),te.updateRenderTargetMipmap(Tt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Oe=0,je=Z.length;Oe<je;Oe++){const Pe=Z[Oe],ye=Pe.object,Yt=Pe.geometry,We=Pe.material,we=Pe.group;if(We.side===bi&&ye.layers.test(ct.layers)){const bn=We.side;We.side=Yn,We.needsUpdate=!0,Br(ye,ot,ct,Yt,We,we),We.side=bn,We.needsUpdate=!0,ve=!0}}ve===!0&&(te.updateMultisampleRenderTarget(Tt),te.updateRenderTargetMipmap(Tt))}D.setRenderTarget(qt,Vt,ne),D.setClearColor(ht,dt),ie!==void 0&&(ct.viewport=ie),D.toneMapping=ce}function Ya(R,Z,ot){const ct=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Tt=R.length;Q<Tt;Q++){const Bt=R[Q],qt=Bt.object,Vt=Bt.geometry,ne=Bt.group;let ce=Bt.material;ce.allowOverride===!0&&ct!==null&&(ce=ct),qt.layers.test(ot.layers)&&Br(qt,Z,ot,Vt,ce,ne)}}function Br(R,Z,ot,ct,Q,Tt){R.onBeforeRender(D,Z,ot,ct,Q,Tt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(D,Z,ot,ct,R,Tt),Q.transparent===!0&&Q.side===bi&&Q.forceSinglePass===!1?(Q.side=Yn,Q.needsUpdate=!0,D.renderBufferDirect(ot,Z,ct,Q,R,Tt),Q.side=Wa,Q.needsUpdate=!0,D.renderBufferDirect(ot,Z,ct,Q,R,Tt),Q.side=bi):D.renderBufferDirect(ot,Z,ct,Q,R,Tt),R.onAfterRender(D,Z,ot,ct,Q,Tt)}function Kn(R,Z,ot){Z.isScene!==!0&&(Z=zt);const ct=Ot.get(R),Q=_.state.lights,Tt=_.state.shadowsArray,Bt=Q.state.version,qt=mt.getParameters(R,Q.state,Tt,Z,ot),Vt=mt.getProgramCacheKey(qt);let ne=ct.programs;ct.environment=R.isMeshStandardMaterial?Z.environment:null,ct.fog=Z.fog,ct.envMap=(R.isMeshStandardMaterial?qe:Qe).get(R.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",vt),ne=new Map,ct.programs=ne);let ce=ne.get(Vt);if(ce!==void 0){if(ct.currentProgram===ce&&ct.lightsStateVersion===Bt)return Tn(R,qt),ce}else qt.uniforms=mt.getUniforms(R),R.onBeforeCompile(qt,D),ce=mt.acquireProgram(qt,Vt),ne.set(Vt,ce),ct.uniforms=qt.uniforms;const ie=ct.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ie.clippingPlanes=Lt.uniform),Tn(R,qt),ct.needsLights=Zc(R),ct.lightsStateVersion=Bt,ct.needsLights&&(ie.ambientLightColor.value=Q.state.ambient,ie.lightProbe.value=Q.state.probe,ie.directionalLights.value=Q.state.directional,ie.directionalLightShadows.value=Q.state.directionalShadow,ie.spotLights.value=Q.state.spot,ie.spotLightShadows.value=Q.state.spotShadow,ie.rectAreaLights.value=Q.state.rectArea,ie.ltc_1.value=Q.state.rectAreaLTC1,ie.ltc_2.value=Q.state.rectAreaLTC2,ie.pointLights.value=Q.state.point,ie.pointLightShadows.value=Q.state.pointShadow,ie.hemisphereLights.value=Q.state.hemi,ie.directionalShadowMap.value=Q.state.directionalShadowMap,ie.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ie.spotShadowMap.value=Q.state.spotShadowMap,ie.spotLightMatrix.value=Q.state.spotLightMatrix,ie.spotLightMap.value=Q.state.spotLightMap,ie.pointShadowMap.value=Q.state.pointShadowMap,ie.pointShadowMatrix.value=Q.state.pointShadowMatrix),ct.currentProgram=ce,ct.uniformsList=null,ce}function cn(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Ic.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Tn(R,Z){const ot=Ot.get(R);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function ha(R,Z,ot,ct,Q){Z.isScene!==!0&&(Z=zt),te.resetTextureUnits();const Tt=Z.fog,Bt=ct.isMeshStandardMaterial?Z.environment:null,qt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Lr,Vt=(ct.isMeshStandardMaterial?qe:Qe).get(ct.envMap||Bt),ne=ct.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ce=!!ot.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),ie=!!ot.morphAttributes.position,ve=!!ot.morphAttributes.normal,Oe=!!ot.morphAttributes.color;let je=Xa;ct.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(je=D.toneMapping);const Pe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ye=Pe!==void 0?Pe.length:0,Yt=Ot.get(ct),We=_.state.lights;if(Rt===!0&&(q===!0||R!==w)){const mn=R===w&&ct.id===U;Lt.setState(ct,R,mn)}let we=!1;ct.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==We.state.version||Yt.outputColorSpace!==qt||Q.isBatchedMesh&&Yt.batching===!1||!Q.isBatchedMesh&&Yt.batching===!0||Q.isBatchedMesh&&Yt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Yt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Yt.instancing===!1||!Q.isInstancedMesh&&Yt.instancing===!0||Q.isSkinnedMesh&&Yt.skinning===!1||!Q.isSkinnedMesh&&Yt.skinning===!0||Q.isInstancedMesh&&Yt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Yt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Yt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Yt.instancingMorph===!1&&Q.morphTexture!==null||Yt.envMap!==Vt||ct.fog===!0&&Yt.fog!==Tt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Lt.numPlanes||Yt.numIntersection!==Lt.numIntersection)||Yt.vertexAlphas!==ne||Yt.vertexTangents!==ce||Yt.morphTargets!==ie||Yt.morphNormals!==ve||Yt.morphColors!==Oe||Yt.toneMapping!==je||Yt.morphTargetsCount!==ye)&&(we=!0):(we=!0,Yt.__version=ct.version);let bn=Yt.currentProgram;we===!0&&(bn=Kn(ct,Z,Q));let Hi=!1,yn=!1,Ka=!1;const Te=bn.getUniforms(),Dn=Yt.uniforms;if(kt.useProgram(bn.program)&&(Hi=!0,yn=!0,Ka=!0),ct.id!==U&&(U=ct.id,yn=!0),Hi||w!==R){kt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Te.setValue(z,"projectionMatrix",R.projectionMatrix),Te.setValue(z,"viewMatrix",R.matrixWorldInverse);const rn=Te.map.cameraPosition;rn!==void 0&&rn.setValue(z,Ut.setFromMatrixPosition(R.matrixWorld)),Zt.logarithmicDepthBuffer&&Te.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Te.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,yn=!0,Ka=!0)}if(Q.isSkinnedMesh){Te.setOptional(z,Q,"bindMatrix"),Te.setOptional(z,Q,"bindMatrixInverse");const mn=Q.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Te.setValue(z,"boneTexture",mn.boneTexture,te))}Q.isBatchedMesh&&(Te.setOptional(z,Q,"batchingTexture"),Te.setValue(z,"batchingTexture",Q._matricesTexture,te),Te.setOptional(z,Q,"batchingIdTexture"),Te.setValue(z,"batchingIdTexture",Q._indirectTexture,te),Te.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Te.setValue(z,"batchingColorTexture",Q._colorsTexture,te));const Pn=ot.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Dt.update(Q,ot,bn),(yn||Yt.receiveShadow!==Q.receiveShadow)&&(Yt.receiveShadow=Q.receiveShadow,Te.setValue(z,"receiveShadow",Q.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Dn.envMap.value=Vt,Dn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Z.environment!==null&&(Dn.envMapIntensity.value=Z.environmentIntensity),yn&&(Te.setValue(z,"toneMappingExposure",D.toneMappingExposure),Yt.needsLights&&Fr(Dn,Ka),Tt&&ct.fog===!0&&Et.refreshFogUniforms(Dn,Tt),Et.refreshMaterialUniforms(Dn,ct,W,$,_.state.transmissionRenderTarget[R.id]),Ic.upload(z,cn(Yt),Dn,te)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Ic.upload(z,cn(Yt),Dn,te),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Te.setValue(z,"center",Q.center),Te.setValue(z,"modelViewMatrix",Q.modelViewMatrix),Te.setValue(z,"normalMatrix",Q.normalMatrix),Te.setValue(z,"modelMatrix",Q.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const mn=ct.uniformsGroups;for(let rn=0,Us=mn.length;rn<Us;rn++){const Di=mn[rn];Y.update(Di,bn),Y.bind(Di,bn)}}return bn}function Fr(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Zc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Z,ot){const ct=Ot.get(R);ct.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Ot.get(R.texture).__webglTexture=Z,Ot.get(R.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ot,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const ot=Ot.get(R);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};const Kc=z.createFramebuffer();this.setRenderTarget=function(R,Z=0,ot=0){X=R,N=Z,I=ot;let ct=!0,Q=null,Tt=!1,Bt=!1;if(R){const Vt=Ot.get(R);if(Vt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(z.FRAMEBUFFER,null),ct=!1;else if(Vt.__webglFramebuffer===void 0)te.setupRenderTarget(R);else if(Vt.__hasExternalTextures)te.rebindTextures(R,Ot.get(R.texture).__webglTexture,Ot.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ie=R.depthTexture;if(Vt.__boundDepthTexture!==ie){if(ie!==null&&Ot.has(ie)&&(R.width!==ie.image.width||R.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(R)}}const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Bt=!0);const ce=Ot.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ce[Z])?Q=ce[Z][ot]:Q=ce[Z],Tt=!0):R.samples>0&&te.useMultisampledRTT(R)===!1?Q=Ot.get(R).__webglMultisampledFramebuffer:Array.isArray(ce)?Q=ce[ot]:Q=ce,k.copy(R.viewport),J.copy(R.scissor),lt=R.scissorTest}else k.copy(P).multiplyScalar(W).floor(),J.copy(nt).multiplyScalar(W).floor(),lt=Mt;if(ot!==0&&(Q=Kc),kt.bindFramebuffer(z.FRAMEBUFFER,Q)&&ct&&kt.drawBuffers(R,Q),kt.viewport(k),kt.scissor(J),kt.setScissorTest(lt),Tt){const Vt=Ot.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Vt.__webglTexture,ot)}else if(Bt){const Vt=Z;for(let ne=0;ne<R.textures.length;ne++){const ce=Ot.get(R.textures[ne]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ne,ce.__webglTexture,ot,Vt)}}else if(R!==null&&ot!==0){const Vt=Ot.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Vt.__webglTexture,ot)}U=-1},this.readRenderTargetPixels=function(R,Z,ot,ct,Q,Tt,Bt,qt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt){kt.bindFramebuffer(z.FRAMEBUFFER,Vt);try{const ne=R.textures[qt],ce=ne.format,ie=ne.type;if(!Zt.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ct&&ot>=0&&ot<=R.height-Q&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+qt),z.readPixels(Z,ot,ct,Q,Gt.convert(ce),Gt.convert(ie),Tt))}finally{const ne=X!==null?Ot.get(X).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ot,ct,Q,Tt,Bt,qt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt)if(Z>=0&&Z<=R.width-ct&&ot>=0&&ot<=R.height-Q){kt.bindFramebuffer(z.FRAMEBUFFER,Vt);const ne=R.textures[qt],ce=ne.format,ie=ne.type;if(!Zt.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ve),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+qt),z.readPixels(Z,ot,ct,Q,Gt.convert(ce),Gt.convert(ie),0);const Oe=X!==null?Ot.get(X).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,Oe);const je=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await pM(z,je,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ve),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(ve),z.deleteSync(je),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ot=0){const ct=Math.pow(2,-ot),Q=Math.floor(R.image.width*ct),Tt=Math.floor(R.image.height*ct),Bt=Z!==null?Z.x:0,qt=Z!==null?Z.y:0;te.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,Bt,qt,Q,Tt),kt.unbindTexture()};const Zo=z.createFramebuffer(),Za=z.createFramebuffer();this.copyTextureToTexture=function(R,Z,ot=null,ct=null,Q=0,Tt=null){Tt===null&&(Q!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Bt,qt,Vt,ne,ce,ie,ve,Oe,je;const Pe=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(ot!==null)Bt=ot.max.x-ot.min.x,qt=ot.max.y-ot.min.y,Vt=ot.isBox3?ot.max.z-ot.min.z:1,ne=ot.min.x,ce=ot.min.y,ie=ot.isBox3?ot.min.z:0;else{const Pn=Math.pow(2,-Q);Bt=Math.floor(Pe.width*Pn),qt=Math.floor(Pe.height*Pn),R.isDataArrayTexture?Vt=Pe.depth:R.isData3DTexture?Vt=Math.floor(Pe.depth*Pn):Vt=1,ne=0,ce=0,ie=0}ct!==null?(ve=ct.x,Oe=ct.y,je=ct.z):(ve=0,Oe=0,je=0);const ye=Gt.convert(Z.format),Yt=Gt.convert(Z.type);let We;Z.isData3DTexture?(te.setTexture3D(Z,0),We=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(te.setTexture2DArray(Z,0),We=z.TEXTURE_2D_ARRAY):(te.setTexture2D(Z,0),We=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const we=z.getParameter(z.UNPACK_ROW_LENGTH),bn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Hi=z.getParameter(z.UNPACK_SKIP_PIXELS),yn=z.getParameter(z.UNPACK_SKIP_ROWS),Ka=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ne),z.pixelStorei(z.UNPACK_SKIP_ROWS,ce),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ie);const Te=R.isDataArrayTexture||R.isData3DTexture,Dn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Pn=Ot.get(R),mn=Ot.get(Z),rn=Ot.get(Pn.__renderTarget),Us=Ot.get(mn.__renderTarget);kt.bindFramebuffer(z.READ_FRAMEBUFFER,rn.__webglFramebuffer),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let Di=0;Di<Vt;Di++)Te&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.get(R).__webglTexture,Q,ie+Di),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.get(Z).__webglTexture,Tt,je+Di)),z.blitFramebuffer(ne,ce,Bt,qt,ve,Oe,Bt,qt,z.DEPTH_BUFFER_BIT,z.NEAREST);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Ot.has(R)){const Pn=Ot.get(R),mn=Ot.get(Z);kt.bindFramebuffer(z.READ_FRAMEBUFFER,Zo),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Za);for(let rn=0;rn<Vt;rn++)Te?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pn.__webglTexture,Q,ie+rn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Pn.__webglTexture,Q),Dn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,mn.__webglTexture,Tt,je+rn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,mn.__webglTexture,Tt),Q!==0?z.blitFramebuffer(ne,ce,Bt,qt,ve,Oe,Bt,qt,z.COLOR_BUFFER_BIT,z.NEAREST):Dn?z.copyTexSubImage3D(We,Tt,ve,Oe,je+rn,ne,ce,Bt,qt):z.copyTexSubImage2D(We,Tt,ve,Oe,ne,ce,Bt,qt);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Dn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(We,Tt,ve,Oe,je,Bt,qt,Vt,ye,Yt,Pe.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(We,Tt,ve,Oe,je,Bt,qt,Vt,ye,Pe.data):z.texSubImage3D(We,Tt,ve,Oe,je,Bt,qt,Vt,ye,Yt,Pe):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,ve,Oe,Bt,qt,ye,Yt,Pe.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,ve,Oe,Pe.width,Pe.height,ye,Pe.data):z.texSubImage2D(z.TEXTURE_2D,Tt,ve,Oe,Bt,qt,ye,Yt,Pe);z.pixelStorei(z.UNPACK_ROW_LENGTH,we),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Hi),z.pixelStorei(z.UNPACK_SKIP_ROWS,yn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ka),Tt===0&&Z.generateMipmaps&&z.generateMipmap(We),kt.unbindTexture()},this.initRenderTarget=function(R){Ot.get(R).__webglFramebuffer===void 0&&te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?te.setTextureCube(R,0):R.isData3DTexture?te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?te.setTexture2DArray(R,0):te.setTexture2D(R,0),kt.unbindTexture()},this.resetState=function(){N=0,I=0,X=null,kt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const J0={type:"change"},tp={type:"start"},Hv={type:"end"},Uc=new Wd,$0=new Va,zA=Math.cos(70*hM.DEG2RAD),_n=new tt,qn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kh=1e-6;class IA extends JM{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new bs,this._lastTargetPosition=new tt,this._quat=new bs().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new A0,this._sphericalDelta=new A0,this._scale=1,this._panOffset=new tt,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new tt,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=FA.bind(this),this._onPointerDown=BA.bind(this),this._onPointerUp=HA.bind(this),this._onContextMenu=qA.bind(this),this._onMouseWheel=kA.bind(this),this._onKeyDown=jA.bind(this),this._onTouchStart=XA.bind(this),this._onTouchMove=WA.bind(this),this._onMouseDown=GA.bind(this),this._onMouseMove=VA.bind(this),this._interceptControlDown=YA.bind(this),this._interceptControlUp=ZA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(J0),this.update(),this.state=ke.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=qn:s>Math.PI&&(s-=qn),l<-Math.PI?l+=qn:l>Math.PI&&(l-=qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new tt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new tt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Uc.origin.copy(this.object.position),Uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uc.direction))<zA?this.object.lookAt(this.target):($0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uc.intersectPlane($0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>kh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kh||this._lastTargetPosition.distanceToSquared(this.target)>kh?(this.dispatchEvent(J0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qn/60*this.autoRotateSpeed*t:qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new fe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function BA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function FA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function HA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hv),this.state=ke.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function GA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ke.DOLLY;break;case Ar.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}break;case Ar.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(tp)}function VA(r){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function kA(r){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(r.preventDefault(),this.dispatchEvent(tp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Hv))}function jA(r){this.enabled!==!1&&this._handleKeyDown(r)}function XA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ke.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ke.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(tp)}function WA(r){switch(this._trackPointer(r),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ke.NONE}}function qA(r){this.enabled!==!1&&r.preventDefault()}function YA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ZA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zd=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,29],[29,31],[27,31],[28,30],[30,32],[28,32]],Or={knee:{label:"膝関節の屈曲",triples:{left:[23,25,27],right:[24,26,28]}},hip:{label:"股関節の屈曲（近似）",triples:{left:[11,23,25],right:[12,24,26]}},elbow:{label:"肘関節の屈曲",triples:{left:[11,13,15],right:[12,14,16]}},abduction:{label:"股関節の外転／内転（概算）",triples:{left:[11,23,25],right:[12,24,26]}}},Gv={knee:[0,180],hip:[0,180],elbow:[0,180],abduction:[-90,90]};function nn(r){return!!r&&Number.isFinite(r.x+r.y+r.z)&&r.visibility>=.5&&(r.presence??1)>=.5}function KA(r,t,i){if(![r,t,i].every(nn))return null;const s=[r.x-t.x,r.y-t.y,r.z-t.z],l=[i.x-t.x,i.y-t.y,i.z-t.z],c=Math.hypot(...s)*Math.hypot(...l);return c<1e-8?null:Math.acos(Math.max(-1,Math.min(1,s.reduce((h,d,m)=>h+d*l[m],0)/c)))*180/Math.PI}const tv=(r,t)=>({x:(r.x+t.x)/2,y:(r.y+t.y)/2,z:(r.z+t.z)/2}),jh=(r,t)=>({x:r.x-t.x,y:r.y-t.y,z:r.z-t.z}),QA=(r,t)=>r.x*t.x+r.y*t.y+r.z*t.z,ev=(r,t)=>({x:r.y*t.z-r.z*t.y,y:r.z*t.x-r.x*t.z,z:r.x*t.y-r.y*t.x}),zo=r=>{const t=Math.hypot(r.x,r.y,r.z);return t<1e-8?null:{x:r.x/t,y:r.y/t,z:r.z/t}};function JA(r,t){if(!(r!=null&&r.world))return null;const[i,s,l,c,h,d]=[11,12,23,24,25,26].map(M=>r.world[M]);if(![i,s,l,c,h,d].every(nn))return null;const m=zo(jh(tv(i,s),tv(l,c))),p=zo(jh(c,l));if(!m||!p)return null;const v=zo(ev(m,p));if(!v)return null;const g=zo(ev(v,m));if(!g)return null;const E=zo(jh(t==="left"?h:d,t==="left"?l:c));if(!E)return null;const b=QA(E,g)*(t==="left"?-1:1);return Math.asin(Math.max(-1,Math.min(1,b)))*180/Math.PI}function jc(r,t,i){if(t==="abduction")return JA(r,i);if(!(r!=null&&r.world))return null;const[s,l,c]=Or[t].triples[i].map(d=>r.world[d]);if(!s||!l||!c)return null;const h=KA(s,l,c);return h===null?null:180-h}function $A(r,t){return r!=null&&r.frames.length?r.frames[Math.min(r.frames.length-1,Math.max(0,Math.round(t*r.fps)))]??null:null}function t2(r){return r.map((t,i)=>{var s;return{...t,world:((s=t.world)==null?void 0:s.map((l,c)=>{var m,p,v,g;if(!nn(l))return l;const d=[(p=(m=r[i-1])==null?void 0:m.world)==null?void 0:p[c],l,(g=(v=r[i+1])==null?void 0:v.world)==null?void 0:g[c]].filter(x=>nn(x));return{...l,x:d.reduce((x,S)=>x+S.x,0)/d.length,y:d.reduce((x,S)=>x+S.y,0)/d.length,z:d.reduce((x,S)=>x+S.z,0)/d.length}}))??null}})}function Vv(r){const t=[11,12,13,14,15,16,23,24,25,26,27,28];return r!=null&&r.landmarks?t.reduce((i,s)=>i+r.landmarks[s].visibility,0)/t.length:0}function e2(r){const t=[];for(const c of r){if(!c.world||!c.landmarks)continue;const[h,d,m,p]=[11,12,23,24].map(M=>c.landmarks[M]),[v,g,x,S]=[11,12,23,24].map(M=>c.world[M]);if(![h,d,m,p].every(nn)||![v,g,x,S].every(nn))continue;const E=Math.hypot((h.x+d.x)/2-(m.x+p.x)/2,(h.y+d.y)/2-(m.y+p.y)/2),b=Math.hypot((v.x+g.x)/2-(x.x+S.x)/2,(v.y+g.y)/2-(x.y+S.y)/2,(v.z+g.z)/2-(x.z+S.z)/2);E>1e-4&&b>1e-4&&t.push(b/E)}if(!t.length)return r.map(()=>null);t.sort((c,h)=>c-h);const i=t[Math.floor(t.length/2)];let s=null,l=null;return r.map(c=>{if(c.world&&c.landmarks){const[h,d]=[23,24].map(m=>c.landmarks[m]);if(nn(h)&&nn(d)){const m={x:(h.x+d.x)/2,y:(h.y+d.y)/2};s??(s=m),l={x:(m.x-s.x)*i,y:-(m.y-s.y)*i}}}return l})}const nv={knee:"knee_flexion_deg",hip:"hip_approx_deg",elbow:"elbow_flexion_deg",abduction:"hip_abduction_approx_deg"};function n2(r){const t=["knee","hip","elbow","abduction"];return[["time_seconds","pose_detected",r.engine==="rtmpose-motionbert"?"mean_2d_detection_score":"mean_visibility",...t.flatMap(s=>[`left_${nv[s]}`,`right_${nv[s]}`])].join(","),...r.frames.map(s=>[s.time.toFixed(4),s.world?1:0,Vv(s).toFixed(4),...t.flatMap(l=>["left","right"].map(c=>{var h;return((h=jc(s,l,c))==null?void 0:h.toFixed(2))??""}))].join(","))].join(`
`)}const i2={11:.06,12:.06,23:.07,24:.07,13:.05,14:.05,25:.06,26:.06,15:.04,16:.04,27:.045,28:.045},a2=r=>i2[r]??.028,s2={1:.045,3:.045,2:.035,4:.035,8:.065,10:.065,9:.05,11:.05},r2=r=>s2[r]??.02,o2=[5,6,7];function l2(r){var c;const t=se.useRef(null),i=se.useRef(r),[s,l]=se.useState(!1);return i.current=r,se.useEffect(()=>{const h=t.current;let d;try{d=new PA({antialias:!0,alpha:!0})}catch{l(!0);return}d.setPixelRatio(Math.min(devicePixelRatio,2)),d.setClearColor(1250847,1),h.appendChild(d.domElement);const m=new FM;m.fog=new qd(1250847,5,14);const p=new _i(36,1,.01,40);p.position.set(2,1.2,4.2);const v=new IA(p,d.domElement);v.target.set(0,-.05,0),v.enableDamping=!0,v.minDistance=1.5,v.maxDistance=9,v.maxPolarAngle=Math.PI*.85,m.add(new WM(15263999,4014690,2.5));const g=new ZM(16777215,3);g.position.set(3,5,4),m.add(g);const x=new QM(16,52,4276565,2369846);x.position.y=-1,m.add(x);const S=new Bn(new Jd(.63,.635,80),new Fo({color:7958927,side:bi,transparent:!0,opacity:.6}));S.rotation.x=-Math.PI/2,S.position.y=-.995,m.add(S);const E=[new Rc({color:10787839,roughness:.4}),new Rc({color:12906385,roughness:.4}),new Rc({color:13422044,roughness:.45}),new Rc({color:16169576,emissive:7819296,roughness:.32})],b=new Io;m.add(b);const M=new Map,_=rt=>{const Rt=Math.round(rt*1e3);let q=M.get(Rt);return q||(q=new kc(rt,16,14),M.set(Rt,q)),q},H=Array.from({length:33},(rt,Rt)=>{const q=new Bn(_(a2(Rt)),E[Rt%2===1?0:1]);return b.add(q),q}),L=new Map,D=rt=>{const Rt=Math.round(rt*1e3);let q=L.get(Rt);return q||(q=new Qd(rt,rt,1,12),L.set(Rt,q)),q},V=zd.map(([rt,Rt],q)=>{if(o2.includes(q))return null;const ut=new Bn(D(r2(q)),E[rt%2===1&&Rt%2===1?0:rt%2===0&&Rt%2===0?1:2]);return b.add(ut),ut}),N=new kc(.1,24,20),I=new Bn(N,E[2]);b.add(I);const X=new Fn;X.setAttribute("position",new vi(new Float32Array(12),3)),X.setAttribute("color",new vi(new Float32Array([...new _e(10787839).toArray(),...new _e(12906385).toArray(),...new _e(12906385).toArray(),...new _e(10787839).toArray()]),3)),X.setIndex([0,1,2,0,2,3]);const U=new Fo({vertexColors:!0,transparent:!0,opacity:.5,side:bi}),w=new Bn(X,U);b.add(w);const k=new Kd(.1,20),J=()=>new Fo({color:329226,transparent:!0,opacity:0}),lt=[J(),J()].map(rt=>{const Rt=new Bn(k,rt);return Rt.rotation.x=-Math.PI/2,Rt.position.y=-.999,m.add(Rt),Rt}),ht=new Fn,dt=new Zd({color:12906385,transparent:!0,opacity:.55}),B=new Dv(ht,dt);m.add(B);let $=0,W="",St=null;const Ct=()=>{const{width:rt,height:Rt}=h.getBoundingClientRect();d.setSize(rt,Rt),p.aspect=rt/Math.max(1,Rt),p.updateProjectionMatrix()},P=new ResizeObserver(Ct);P.observe(h),Ct();function nt(rt,Rt){var z;const q=rt.world[Rt],ut=rt.world[23],Ut=rt.world[24],Pt=(z=i.current.rootOffsets)==null?void 0:z.get(rt),zt=q.x-(ut.x+Ut.x)/2+((Pt==null?void 0:Pt.x)??0),Ht=-q.y+(ut.y+Ut.y)/2+((Pt==null?void 0:Pt.y)??0),re=-q.z+(ut.z+Ut.z)/2;return new tt(zt,Ht,re).multiplyScalar(i.current.displayScale??1)}const Mt=()=>{var Pt;$=requestAnimationFrame(Mt);const{frame:rt,metric:Rt,view:q,trails:ut,history:Ut}=i.current;if(q!==W){const zt={free:[2,1.2,4.2],front:[0,.2,4.5],side:[4.5,.2,0],top:[0,4.5,.01]};p.position.fromArray(zt[q]??zt.free),v.target.set(0,-.05,0),W=q}if(b.visible=!!(rt!=null&&rt.world),lt.forEach(zt=>zt.visible=!!(rt!=null&&rt.world)),rt!=null&&rt.world){const zt=[Or[Rt].triples.left[1],Or[Rt].triples.right[1]];if(H.forEach((Ht,re)=>{Ht.visible=re>=11&&nn(rt.world[re]),Ht.visible&&(Ht.position.copy(nt(rt,re)),Ht.material=zt.includes(re)?E[3]:E[re%2===1?0:1],Ht.scale.setScalar(zt.includes(re)?1.45:1))}),V.forEach((Ht,re)=>{if(!Ht)return;const[z,oe]=zd[re];if(Ht.visible=nn(rt.world[z])&&nn(rt.world[oe]),Ht.visible){const ee=nt(rt,z),Zt=nt(rt,oe),kt=Zt.clone().sub(ee);Ht.position.copy(ee.add(Zt).multiplyScalar(.5)),Ht.scale.y=kt.length(),Ht.quaternion.setFromUnitVectors(new tt(0,1,0),kt.normalize())}}),rt.head){I.visible=nn(rt.head);const Ht=rt.head,re=rt.world[23],z=rt.world[24],oe=(Pt=i.current.rootOffsets)==null?void 0:Pt.get(rt);I.position.set(Ht.x-(re.x+z.x)/2+((oe==null?void 0:oe.x)??0),-Ht.y+(re.y+z.y)/2+((oe==null?void 0:oe.y)??0),-Ht.z+(re.z+z.z)/2).multiplyScalar(i.current.displayScale??1)}else I.visible=nn(rt.world[7])&&nn(rt.world[8]),I.visible&&I.position.copy(nt(rt,7).add(nt(rt,8)).multiplyScalar(.5));if(w.visible=[11,12,23,24].every(Ht=>nn(rt.world[Ht])),w.visible){const Ht=X.attributes.position;[11,12,24,23].forEach((re,z)=>{const oe=nt(rt,re);Ht.setXYZ(z,oe.x,oe.y,oe.z)}),Ht.needsUpdate=!0}[[27,29],[28,30]].forEach(([Ht,re],z)=>{const oe=nn(rt.world[Ht])?Ht:nn(rt.world[re])?re:-1,ee=lt[z].material;if(oe<0){ee.opacity=0;return}const Zt=nt(rt,oe);lt[z].position.set(Zt.x,-.999,Zt.z),ee.opacity=Math.max(.04,Math.min(.42,.42-(Zt.y+.995)*1.1))})}if(B.visible=ut,Ut!==St){const zt=[];for(let Ht=1;Ht<Ut.length;Ht++){const re=Ut[Ht-1],z=Ut[Ht];re.world&&z.world&&nn(re.world[28])&&nn(z.world[28])&&zt.push(...nt(re,28).toArray(),...nt(z,28).toArray())}ht.setAttribute("position",new $e(zt,3)),St=Ut}v.update(),d.render(m,p)};return Mt(),()=>{cancelAnimationFrame($),P.disconnect(),v.dispose(),M.forEach(rt=>rt.dispose()),L.forEach(rt=>rt.dispose()),N.dispose(),X.dispose(),U.dispose(),k.dispose(),lt.forEach(rt=>rt.material.dispose()),E.forEach(rt=>rt.dispose()),x.geometry.dispose(),x.material.dispose(),S.geometry.dispose(),S.material.dispose(),ht.dispose(),dt.dispose(),d.dispose(),h.removeChild(d.domElement)}},[]),C.jsxs("div",{className:"scene-host",ref:t,children:[s&&C.jsx("p",{className:"scene-empty",children:"3D表示にはWebGL対応ブラウザが必要です。"}),!((c=r.frame)!=null&&c.world)&&!s&&C.jsxs("div",{className:"scene-empty",children:[C.jsx("span",{className:"empty-orbit",children:"◎"}),C.jsx("p",{children:r.frame?"このフレームは姿勢を検出できません":"3Dモーションを待っています"}),C.jsx("small",{children:r.frame?"コマ送りで前後のフレームを確認してください":"動画を解析すると、ここに動きを再現します"})]})]})}function c2({analysis:r,selected:t,time:i,onSeek:s}){const l=se.useRef(null),[c,h]=se.useState(900);se.useEffect(()=>{const N=l.current,I=new ResizeObserver(()=>h(Math.max(260,N.clientWidth-24)));return I.observe(N),()=>I.disconnect()},[]);const d=150,m=38,p=15,v=12,g=25,x=c-m-p,S=d-v-g,E=(r==null?void 0:r.duration)??3.45,[b,M]=Gv[t],_=Array.from({length:5},(N,I)=>b+(M-b)*I/4),H=N=>m+N/E*x,L=N=>v+S-(N-b)/(M-b)*S,D=N=>{let I=!1;return(r==null?void 0:r.frames.map(X=>{const U=jc(X,t,N);if(U===null)return I=!1,"";const w=I?"L":"M";return I=!0,`${w}${H(X.time).toFixed(1)},${L(U).toFixed(1)}`}).join(" "))??""},V=N=>{const I=N.currentTarget.getBoundingClientRect();s(Math.max(0,Math.min(E,((N.clientX-I.left)/I.width*c-m)/x*E)))};return C.jsxs("div",{className:"chart-wrap",ref:l,children:[C.jsxs("svg",{viewBox:`0 0 ${c} ${d}`,role:"img","aria-label":`${Or[t].label}の時系列。グラフをクリックして再生位置を変更`,onPointerDown:V,children:[_.map(N=>C.jsxs("g",{children:[C.jsx("line",{x1:m,y1:L(N),x2:c-p,y2:L(N),stroke:"#2a2d38",strokeDasharray:"3 5"}),C.jsxs("text",{x:m-10,y:L(N)+4,textAnchor:"end",fill:"#787e90",fontSize:"10",children:[Math.round(N),"°"]})]},N)),Array.from({length:7},(N,I)=>E*I/6).map(N=>C.jsxs("text",{x:H(N),y:d-5,textAnchor:"middle",fill:"#787e90",fontSize:"10",children:[N.toFixed(1),"s"]},N)),C.jsx("path",{d:D("left"),fill:"none",stroke:"#aa9bf7",strokeWidth:"2.4"}),C.jsx("path",{d:D("right"),fill:"none",stroke:"#c1e990",strokeWidth:"2.4"}),r&&C.jsxs(C.Fragment,{children:[C.jsx("line",{x1:H(i),x2:H(i),y1:v,y2:v+S,stroke:"#f0f0f3",strokeWidth:"1"}),C.jsx("circle",{cx:H(i),cy:v,r:"3",fill:"#f0f0f3"})]})]}),!r&&C.jsx("span",{className:"chart-placeholder",children:"解析後に関節角度の変化が表示されます"})]})}function iv(r,t,i){return new Promise((s,l)=>{const c=setTimeout(()=>p(new Error("動画の読み込みがタイムアウトしました。H.264形式のMP4で再試行してください。")),15e3),h=()=>p(),d=()=>p(new Error("この動画形式をブラウザで読み込めません。H.264形式のMP4に変換してください。")),m=()=>p(new DOMException("中止しました","AbortError"));function p(v){clearTimeout(c),r.removeEventListener(t,h),r.removeEventListener("error",d),i.removeEventListener("abort",m),v?l(v):s()}r.addEventListener(t,h,{once:!0}),r.addEventListener("error",d,{once:!0}),i.addEventListener("abort",m,{once:!0}),i.aborted&&m()})}async function u2(r,t,i,s,l){const c=document.createElement("video");c.muted=!0,c.preload="auto",c.playsInline=!0;const h=new Worker("/stride-motion-lab/pose-worker.js"),d=(m,p=[])=>new Promise((v,g)=>{const x=setTimeout(()=>M(new Error("推定処理がタイムアウトしました。ページを再読み込みして再試行してください。")),9e4),S=()=>M(new DOMException("中止しました","AbortError")),E=_=>M(new Error(_.message||"推定モデルを読み込めませんでした。npm run setup を実行してください。")),b=({data:_})=>_.type==="error"?M(new Error(_.message)):M(void 0,_);function M(_,H){clearTimeout(x),h.removeEventListener("message",b),h.removeEventListener("error",E),s.removeEventListener("abort",S),_?g(_):v(H)}h.addEventListener("message",b),h.addEventListener("error",E),s.addEventListener("abort",S,{once:!0}),s.aborted?S():h.postMessage(m,p)});try{l(0,"推定モデルを準備しています");const m=iv(c,"loadeddata",s);if(c.src=r,await m,!Number.isFinite(c.duration)||c.duration<=0||c.duration>120)throw new Error("解析できる動画は2分以内です。短く切り出して読み込んでください。");await d({type:"init"});const p=c.duration,v=[],g=Math.ceil(p*i),x=document.createElement("canvas"),S=Math.min(1,1280/c.videoWidth);x.width=Math.round(c.videoWidth*S),x.height=Math.round(c.videoHeight*S);const E=x.getContext("2d");for(let b=0;b<g;b++){if(s.aborted)throw new DOMException("中止しました","AbortError");const M=b/i;if(Math.abs(c.currentTime-M)>1e-4){const L=iv(c,"seeked",s);c.currentTime=M,await L}E.drawImage(c,0,0,x.width,x.height);const _=await createImageBitmap(x),H=await d({type:"frame",bitmap:_,time:M},[_]);v.push(H.frame),l((b+1)/g,`姿勢を推定しています · ${b+1} / ${g} フレーム`)}if(!v.some(b=>b.world))throw new Error("人物を検出できませんでした。全身が大きく写った、明るい動画を使用してください。");return{version:1,name:t,duration:p,fps:i,frames:v,createdAt:new Date().toISOString()}}finally{h.terminate(),c.removeAttribute("src"),c.load()}}function av(r,t,i){return new Promise((s,l)=>{const c=setTimeout(()=>p(new Error("動画の読み込みがタイムアウトしました。H.264形式のMP4で再試行してください。")),15e3),h=()=>p(),d=()=>p(new Error("この動画形式をブラウザで読み込めません。H.264形式のMP4に変換してください。")),m=()=>p(new DOMException("中止しました","AbortError"));function p(v){clearTimeout(c),r.removeEventListener(t,h),r.removeEventListener("error",d),i.removeEventListener("abort",m),v?l(v):s()}r.addEventListener(t,h,{once:!0}),r.addEventListener("error",d,{once:!0}),i.addEventListener("abort",m,{once:!0}),i.aborted&&m()})}async function f2(r,t,i,s,l,c){const h=document.createElement("video");h.muted=!0,h.preload="auto",h.playsInline=!0;const d=new Worker(new URL("/stride-motion-lab/assets/precision-worker-AWofUjOK.js",import.meta.url),{type:"module"});let m=null;const p=()=>{m&&d.removeEventListener("message",m),d.terminate()},v=(g,x,S,E,b)=>new Promise((M,_)=>{const H=setTimeout(()=>N(new Error(b)),E),L=()=>N(new DOMException("中止しました","AbortError")),D=I=>N(new Error(I.message||"モデルの読み込みに失敗しました。ページを再読み込みして再試行してください。")),V=I=>{const X=I.data;if(X.type==="error"){N(new Error(X.message));return}S(X)&&N(void 0,X)};function N(I,X){clearTimeout(H),d.removeEventListener("message",V),d.removeEventListener("error",D),l.removeEventListener("abort",L),I?_(I):M(X)}d.addEventListener("message",V),d.addEventListener("error",D),l.addEventListener("abort",L,{once:!0}),l.aborted?L():d.postMessage(g,x)});try{c(0,"ブラウザ内でRTMPose + MotionBERTを準備しています（初回はモデルのダウンロードに時間がかかります）");const g=av(h,"loadeddata",l);if(h.src=r,await g,!Number.isFinite(h.duration)||h.duration<=0||h.duration>120)throw new Error("解析できる動画は2分以内です。短く切り出して読み込んでください。");m=L=>{const D=L.data;D.type==="progress"&&(D.phase==="download"?c(D.fraction*.5,`モデルをダウンロードしています ${Math.round(D.fraction*100)}%（初回のみ・以降はブラウザにキャッシュされます）`):D.phase==="compile"&&c(.5,"モデルを読み込んでいます"))},d.addEventListener("message",m),await v({type:"init",poseSize:s},[],L=>L.type==="ready",6e5,"モデルの読み込みがタイムアウトしました。回線を確認して再試行してください。"),d.removeEventListener("message",m),m=null;const x=h.duration,S=Math.ceil(x*i),E=document.createElement("canvas");E.width=h.videoWidth,E.height=h.videoHeight;const b=E.getContext("2d");for(let L=0;L<S;L++){if(l.aborted)throw new DOMException("中止しました","AbortError");const D=L/i;if(Math.abs(h.currentTime-D)>1e-4){const N=av(h,"seeked",l);h.currentTime=D,await N}b.drawImage(h,0,0);const V=await createImageBitmap(E);await v({type:"frame",bitmap:V,index:L},[V],N=>N.type==="frameDone"&&N.index===L,6e4,"推定処理がタイムアウトしました。ページを再読み込みして再試行してください。"),c(.55+(L+1)/S*.35,`RTMPose · 元解像度から人物を推定 ${L+1} / ${S}`)}m=L=>{const D=L.data;D.type==="progress"&&D.phase==="motionbert"&&c(.9+D.fraction*.09,"MotionBERT · 前後フレームから3Dを推定")},d.addEventListener("message",m);const H=(await v({type:"finalize",fps:i,name:t,duration:x,nativeFps:0},[],L=>L.type==="result",18e4,"3D推定の仕上げ処理がタイムアウトしました。")).result;if(!H.frames.some(L=>L.world))throw new Error("人物を検出できませんでした。全身が大きく写った、明るい動画を使用してください。");return c(1,"RTMPose + MotionBERT の解析が完了しました（ブラウザ内で処理）"),H}finally{p(),h.removeAttribute("src"),h.load()}}async function h2(r,t,i,s,l){const c=new FormData;if(c.append("fps",String(i)),l(0,"元解像度の動画をローカル推定エンジンへ読み込んでいます"),r==="/stride-motion-lab/sample/hurdle.mp4")c.append("sample","true");else{const m=await(await fetch(r,{signal:s})).blob();c.append("file",m,t)}let h;const d=()=>{h&&fetch(`/api/precision/jobs/${h}`,{method:"DELETE",headers:{"x-stride-client":"1"}}).catch(()=>{})};s.addEventListener("abort",d,{once:!0});try{const m=await fetch("/api/precision/jobs",{method:"POST",headers:{"x-stride-client":"1"},body:c,signal:s}),p=await m.json();if(!m.ok)throw new Error(p.detail??"解析を開始できませんでした");if(h=p.id,s.aborted)throw d(),new DOMException("中止しました","AbortError");const v=Date.now()+1800*1e3;for(;Date.now()<v;){const g=await fetch(`/api/precision/jobs/${h}`,{signal:s}),x=await g.json();if(!g.ok)throw new Error(x.detail??"解析状態を読み込めませんでした");if(l(x.progress,x.message),x.state==="complete")return x.result;if(x.state==="error")throw new Error(x.message);if(x.state==="cancelled")throw new DOMException("中止しました","AbortError");await new Promise((S,E)=>{const b=()=>{clearTimeout(M),E(new DOMException("中止しました","AbortError"))},M=setTimeout(()=>{s.removeEventListener("abort",b),S()},500);s.addEventListener("abort",b,{once:!0}),s.aborted&&b()})}throw d(),new Error("解析がタイムアウトしました。短い区間に切り出して再試行してください。")}finally{s.removeEventListener("abort",d)}}async function d2(r,t,i,s,l){const c=await fetch("/api/precision/health",{signal:s}).catch(()=>null);return c!=null&&c.ok&&(await c.json()).ready?h2(r,t,i,s,l):f2(r,t,i,"m",s,l)}const Xh="/stride-motion-lab/sample/hurdle.mp4",p2="/stride-motion-lab/sample/poster.jpg",m2="/stride-motion-lab/sample/analysis.json",g2="/stride-motion-lab/sample/analysis-precision.json",Wh=r=>r===null?"—":Math.round(r).toString();function sv(r,t,i){const s=URL.createObjectURL(new Blob([r],{type:i})),l=document.createElement("a");l.href=s,l.download=t,l.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function _2(){var It;const[r,t]=se.useState("rtmpose-motionbert"),i=se.useRef({}),[s,l]=se.useState(""),[c,h]=se.useState(""),[d,m]=se.useState(0),[p,v]=se.useState({width:1280,height:720}),[g,x]=se.useState(null),[S,E]=se.useState(0),[b,M]=se.useState(!1),[_,H]=se.useState(.5),[L,D]=se.useState(!1),[V,N]=se.useState(0),[I,X]=se.useState(""),[U,w]=se.useState(""),[k,J]=se.useState("knee"),[lt,ht]=se.useState("free"),[dt,B]=se.useState(!0),[$,W]=se.useState(!0),[St,Ct]=se.useState(!1),[P,nt]=se.useState(30),[Mt,rt]=se.useState(!1),[Rt,q]=se.useState(!1),[ut,Ut]=se.useState(!1),[Pt,zt]=se.useState(!1),[Ht,re]=se.useState(""),z=se.useRef(null),oe=se.useRef(null),ee=se.useRef(null),Zt=se.useRef(null),kt=se.useRef(null),xe=se.useRef(0),Ot=se.useMemo(()=>g?{...g,frames:$?t2(g.frames):g.frames}:null,[g,$]),te=$A(Ot,S),Qe=se.useMemo(()=>(Ot==null?void 0:Ot.frames.filter(Y=>Y.time<=S&&Y.time>S-.5))??[],[Ot,S]),qe=se.useMemo(()=>{if(!Mt||!Ot)return null;const Y=e2(Ot.frames),F=new Map;return Ot.frames.forEach((yt,bt)=>{Y[bt]&&F.set(yt,Y[bt])}),F},[Mt,Ot]),O=(g==null?void 0:g.frames.filter(Y=>Y.world).length)??0,T=Vv(te),et=(g==null?void 0:g.engine)==="rtmpose-motionbert",mt=et?String(((It=g==null?void 0:g.method)==null?void 0:It.pose2d)??"").includes("client-side"):!0;se.useEffect(()=>{},[]),se.useEffect(()=>()=>{var Y;(Y=Zt.current)==null||Y.abort(),kt.current&&URL.revokeObjectURL(kt.current)},[]),se.useEffect(()=>{z.current&&(z.current.playbackRate=_)},[_,s]),se.useEffect(()=>{let Y;const F=()=>{z.current&&!z.current.paused&&E(z.current.currentTime),Y=requestAnimationFrame(F)};return Y=requestAnimationFrame(F),()=>cancelAnimationFrame(Y)},[]),se.useEffect(()=>{const Y=oe.current;if(!Y)return;const F=Y.getContext("2d");if(F.clearRect(0,0,Y.width,Y.height),!dt||!(te!=null&&te.landmarks))return;const yt=te.landmarks;F.lineWidth=3,F.lineCap="round",zd.forEach(([bt,Nt])=>{!nn(yt[bt])||!nn(yt[Nt])||(F.strokeStyle=bt%2?"#b5a3ff":"#c3f291",F.beginPath(),F.moveTo(yt[bt].x*Y.width,yt[bt].y*Y.height),F.lineTo(yt[Nt].x*Y.width,yt[Nt].y*Y.height),F.stroke())}),yt.forEach((bt,Nt)=>{Nt<11||!nn(bt)||(F.fillStyle=Nt%2?"#c7baff":"#d4ffa7",F.beginPath(),F.arc(bt.x*Y.width,bt.y*Y.height,4,0,Math.PI*2),F.fill())})},[te,dt,p]);const Et=Y=>{const F=Math.max(0,Math.min(d,Y));z.current&&(z.current.currentTime=F),E(F)},pt=()=>{const Y=z.current;Y&&(Y.paused?(Y.ended&&Et(0),Y.play().catch(()=>w("動画を再生できません。別形式のMP4をお試しください。"))):Y.pause())},$t=(Y,F)=>{var yt,bt;xe.current++,(yt=Zt.current)==null||yt.abort(),(bt=z.current)==null||bt.pause(),D(!1),l(Y),h(F),x(null),i.current={},E(0),M(!1),w(""),re(""),m(0)},Lt=Y=>{if(!Y.type.startsWith("video/")&&!/\.(mp4|mov|webm|m4v)$/i.test(Y.name)){w("MP4、MOV、WebM形式の動画を選んでください。");return}if(Y.size>500*1024*1024){w("動画は500MB以下にしてください。");return}kt.current&&URL.revokeObjectURL(kt.current),kt.current=URL.createObjectURL(Y),$t(kt.current,Y.name)},Kt=async Y=>{if(xe.current++,t(Y),w(""),re(""),x(i.current[Y]??null),s===Xh&&!i.current[Y]){const F=xe.current;try{const bt=await(await fetch(Y==="mediapipe"?m2:g2)).json();F===xe.current&&bt.version===1&&(i.current[Y]=bt,x(bt))}catch{}}},Qt=async()=>{var yt,bt;if(L)return;xe.current++;const Y=xe.current;(yt=z.current)==null||yt.pause();const F=new AbortController;Zt.current=F,D(!0),N(0),w(""),re("");try{const Nt=await(r==="rtmpose-motionbert"?d2:u2)(s,c,P,F.signal,(At,vt)=>{Y===xe.current&&(N(At),X(vt))});Y===xe.current&&(x(Nt),i.current[r]=Nt,Et(((bt=Nt.frames.find(At=>At.world))==null?void 0:bt.time)??0),re(`${Nt.frames.filter(At=>At.world).length} / ${Nt.frames.length} フレームの姿勢を推定しました`))}catch(Nt){Y===xe.current&&(Nt instanceof DOMException&&Nt.name==="AbortError"?re("解析を中止しました"):w(Nt instanceof Error?Nt.message:String(Nt)))}finally{Y===xe.current&&D(!1)}},Dt=Y=>{if(!g)return;const F=Ot,yt=c.replace(/\.[^.]+$/,"");Y==="csv"?sv("\uFEFF"+n2(F),`${yt}-angles${$?"-smoothed":""}.csv`,"text/csv;charset=utf-8"):sv(JSON.stringify({...g,coordinates:et?"MotionBERT H36M17: hip-centered, relative units, x right / y down / z away; displayScale is visualization only":"MediaPipe world landmarks: hip-centered, meters, x right / y down / z away from camera",smoothing:"none (raw inference)"},null,2),`${yt}-3d.json`,"application/json"),Ut(!1)},wt=se.useMemo(()=>{if(!Ot)return null;const Y=Ot.frames.map(F=>jc(F,k,"left")).filter(F=>F!==null);return Y.length?{min:Math.min(...Y),max:Math.max(...Y)}:null},[Ot,k]),[Wt,Gt]=Gv[k];return C.jsxs("div",{className:"app-shell",children:[C.jsxs("aside",{className:"sidebar",children:[C.jsxs("a",{className:"brand",href:"#","aria-label":"STRIDE ホーム",children:[C.jsx(sc,{size:25,strokeWidth:2.5}),C.jsxs("span",{children:["STRIDE",C.jsx("span",{className:"brand-dot",children:"."})]})]}),C.jsx("div",{className:"workspace-label",children:"MOTION WORKSPACE"}),C.jsxs("button",{className:"nav-item active",onClick:()=>{var Y;return(Y=document.getElementById("workspace"))==null?void 0:Y.scrollIntoView({behavior:"smooth"})},children:[C.jsx(X_,{size:18}),"モーション解析",C.jsx("span",{className:"nav-indicator"})]}),C.jsxs("button",{className:"nav-item",onClick:()=>{var Y;return(Y=ee.current)==null?void 0:Y.click()},children:[C.jsx(mS,{size:18}),"動画を読み込む"]}),C.jsxs("button",{className:"nav-item",onClick:()=>q(!0),children:[C.jsx(ch,{size:18}),"使い方ガイド"]}),C.jsx("div",{className:"sidebar-divider"}),!1,C.jsxs("div",{className:"sidebar-bottom",children:[C.jsxs("div",{className:"local-badge",children:[C.jsx("span",{}),C.jsxs("span",{children:[mt?"ブラウザ内で解析":"共有サーバーで解析",C.jsx("small",{children:mt?"動画はどこにも送信されません":"RTMPoseは解析後に動画を削除"})]}),C.jsx(Y_,{size:17})]}),C.jsxs("div",{className:"profile",children:[C.jsx("span",{className:"avatar",children:"S"}),C.jsxs("span",{children:["Personal workspace",C.jsx("small",{children:"3D Motion Lab"})]})]})]})]}),C.jsxs("main",{id:"workspace",children:[C.jsxs("header",{className:"topbar",children:[C.jsxs("div",{className:"breadcrumb",children:["ワークスペース ",C.jsx("span",{children:"/"})," ",C.jsx("strong",{children:"モーション解析"})]}),C.jsx("span",{className:"version-badge",children:"BETA 1.0"}),C.jsx("button",{className:"icon-button","aria-label":"使い方",onClick:()=>q(!0),children:C.jsx(ch,{size:18})})]}),C.jsxs("div",{className:"main-content",children:[C.jsxs("div",{className:"page-heading",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"eyebrow",children:[C.jsx("span",{})," VIDEO TO MOVEMENT"]}),C.jsx("h1",{children:"動きを、立体で読み解く。"}),C.jsx("p",{children:"動画から身体の動きを3Dで再現。見えなかった一瞬を、解析する。"})]}),C.jsxs("button",{className:"primary upload-top",onClick:()=>{var Y;return(Y=ee.current)==null?void 0:Y.click()},disabled:L,children:[C.jsx(xS,{size:17}),"動画をアップロード"]})]}),C.jsx("input",{ref:ee,type:"file",accept:"video/*,.mov,.mp4,.webm",hidden:!0,onChange:Y=>{var F;(F=Y.target.files)!=null&&F[0]&&Lt(Y.target.files[0]),Y.target.value=""}}),C.jsxs("div",{className:"workflow",children:[C.jsxs("span",{className:`workflow-step ${s?"complete":"current"}`,children:[C.jsx("span",{children:s?C.jsx(lh,{size:12}):1}),"動画をアップロード"]}),C.jsx("div",{}),C.jsxs("span",{className:`workflow-step ${g?"complete":s?"current":""}`,children:[C.jsx("span",{children:g?C.jsx(lh,{size:12}):2}),"3D姿勢を推定"]}),C.jsx("div",{}),C.jsxs("span",{className:`workflow-step ${g?"current":""}`,children:[C.jsx("span",{children:"3"}),"動作を解析"]}),C.jsxs("span",{className:"workflow-note",children:[C.jsx(Y_,{size:13}),mt?"動画は送信されません":"動画は解析後に削除"]})]}),C.jsxs("section",{className:"engine-bar","aria-label":"推定方式を選択",children:[C.jsxs("div",{children:[C.jsx("span",{className:"eyebrow",children:"POSE ENGINE"}),C.jsx("strong",{children:"同じ動きを、モデルで見比べる"})]}),C.jsxs("div",{className:"engine-options",children:[C.jsxs("button",{className:r==="rtmpose-motionbert"?"selected":"",disabled:L,onClick:()=>void Kt("rtmpose-motionbert"),children:[C.jsx(Z_,{size:14}),C.jsxs("span",{children:["RTMPose + MotionBERT",C.jsx("small",{children:"人物を切り出し · 前後フレームで3D推定"})]})]}),C.jsxs("button",{className:r==="mediapipe"?"selected":"",disabled:L,onClick:()=>void Kt("mediapipe"),children:[C.jsx(sc,{size:14}),C.jsxs("span",{children:["MediaPipe",C.jsx("small",{children:"従来の推定と比較"})]})]})]}),C.jsxs("p",{children:[r==="rtmpose-motionbert"?`${mt?"ブラウザ内で処理":"共有の推定サーバーで処理"}。2D検出26点 → 3D骨格17点。`:"ブラウザ内で処理。33点を各フレームから推定。",et&&(g!=null&&g.sourceWidth)?` 入力 ${g.sourceWidth} × ${g.sourceHeight}`:""]})]}),C.jsxs("section",{className:`source-bar ${Pt?"dragging":""}`,onDragOver:Y=>{Y.preventDefault(),zt(!0)},onDragLeave:()=>zt(!1),onDrop:Y=>{Y.preventDefault(),zt(!1),!L&&Y.dataTransfer.files[0]&&Lt(Y.dataTransfer.files[0])},children:[C.jsxs("div",{className:"file-thumbnail",children:[s===Xh?C.jsx("img",{src:p2,alt:"ハードル走の動画サムネイル"}):C.jsx(dS,{size:25}),C.jsx("span",{children:C.jsx(q_,{size:9,fill:"currentColor"})})]}),C.jsxs("div",{className:"file-info",children:[C.jsx("strong",{children:c||"動画が選択されていません"}),C.jsxs("span",{children:[s?d?`${d.toFixed(2)} 秒`:"読み込み中":"動画をアップロードしてください",C.jsx("b",{children:"·"}),s===Xh?"ハードル走 / 参考動画":s?"アップロード動画":"MP4 / MOV / WebM",C.jsx("b",{children:"·"}),mt?"ブラウザ内で処理":"RTMPoseは共有サーバーで処理"]})]}),C.jsxs("button",{className:"text-button replace",onClick:()=>{var Y;return(Y=ee.current)==null?void 0:Y.click()},disabled:L,children:[C.jsx(ES,{size:14}),"変更"]}),C.jsx("div",{className:"source-divider"}),C.jsxs("label",{className:"fps-select",children:[C.jsx("span",{children:"解析フレームレート"}),C.jsxs("select",{value:P,onChange:Y=>nt(Number(Y.target.value)),disabled:L,children:[C.jsx("option",{value:15,children:"15 fps"}),C.jsx("option",{value:30,children:"30 fps"}),C.jsx("option",{value:60,children:"60 fps"})]})]}),C.jsxs("button",{className:"primary analyze-button",onClick:Qt,disabled:L||!d||d>120,children:[L?C.jsx(W_,{size:16,className:"spin"}):C.jsx(Z_,{size:16})," ",L?"解析中…":g?"再解析する":"3D推定を開始",!L&&C.jsx(rc,{size:15})]})]}),L&&C.jsxs("div",{className:"progress-panel",role:"status",children:[C.jsxs("div",{children:[C.jsx(W_,{size:15,className:"spin"}),I,C.jsxs("strong",{children:[Math.round(V*100),"%"]}),C.jsx("button",{onClick:()=>{var Y;return(Y=Zt.current)==null?void 0:Y.abort()},children:"中止"})]}),C.jsx("progress",{max:1,value:V})]}),U&&C.jsxs("div",{className:"message error",role:"alert",children:[U,C.jsx("button",{"aria-label":"エラーを閉じる",onClick:()=>w(""),children:C.jsx(uh,{size:15})})]}),Ht&&C.jsxs("div",{className:"message success",role:"status",children:[C.jsx(lh,{size:15}),Ht,C.jsx("button",{"aria-label":"通知を閉じる",onClick:()=>re(""),children:C.jsx(uh,{size:15})})]}),C.jsxs("div",{className:"analysis-layout",children:[C.jsxs("div",{className:"visuals",children:[C.jsxs("section",{className:"panel video-panel",children:[C.jsxs("div",{className:"panel-header",children:[C.jsxs("h2",{children:[C.jsx(pS,{size:16}),"オリジナル動画"]}),C.jsx("span",{className:"panel-tag",children:"SOURCE"})]}),C.jsxs("div",{className:"video-stage",children:[C.jsxs("div",{className:"video-inner",children:[C.jsx("video",{ref:z,src:s||void 0,playsInline:!0,muted:!0,preload:"auto",onLoadedMetadata:Y=>{const F=Y.currentTarget;m(F.duration),F.playbackRate=_,v({width:F.videoWidth,height:F.videoHeight})},onTimeUpdate:Y=>E(Y.currentTarget.currentTime),onSeeked:Y=>E(Y.currentTarget.currentTime),onPlay:()=>M(!0),onPause:()=>M(!1),onEnded:()=>M(!1),onError:()=>w("動画を読み込めません。MOVが再生できない場合はH.264形式のMP4に変換してください。")}),C.jsx("canvas",{ref:oe,className:"pose-overlay",width:p.width,height:p.height})]}),C.jsxs("span",{className:"stage-label",children:[C.jsx("span",{className:g?"green-dot":"gray-dot"}),g?"POSE OVERLAY":"ORIGINAL VIDEO"]}),C.jsx("button",{className:"stage-expand","aria-label":"動画を全画面表示",onClick:()=>{var Y;return(Y=z.current)==null?void 0:Y.requestFullscreen().catch(()=>re("このブラウザでは全画面表示を利用できません"))},children:C.jsx(_S,{size:15})}),C.jsxs("span",{className:"time-badge",children:[S.toFixed(2)," s"]})]}),C.jsxs("div",{className:"panel-footer",children:[C.jsxs("span",{children:[C.jsx("span",{className:"legend-dot purple"}),"左半身",C.jsx("span",{className:"legend-dot lime"}),"右半身"]}),C.jsxs("label",{className:"toggle-label",children:["骨格を重ねる",C.jsx("input",{type:"checkbox",checked:dt,onChange:Y=>B(Y.target.checked)}),C.jsx("i",{})]})]})]}),C.jsxs("section",{className:"panel model-panel",children:[C.jsxs("div",{className:"panel-header",children:[C.jsxs("h2",{children:[C.jsx(X_,{size:16}),"3Dモーション"]}),C.jsx("span",{className:"panel-tag accent",children:Mt?"GROUND TRACKED":"HIP-CENTERED"})]}),C.jsxs("div",{className:"model-stage",children:[C.jsx(l2,{frame:te,metric:k,view:lt,trails:St,history:Qe,displayScale:Ot==null?void 0:Ot.displayScale,rootOffsets:qe}),C.jsx("div",{className:"view-switch",children:[["free","自由"],["front","正面"],["side","側面"],["top","上面"]].map(([Y,F])=>C.jsx("button",{className:lt===Y?"selected":"",onClick:()=>ht(Y),children:F},Y))}),C.jsxs("span",{className:"axis-label",children:[C.jsx("span",{children:"Y"}),C.jsx("span",{children:"Z"}),C.jsx("span",{children:"X"})]}),C.jsx("span",{className:"model-hint",children:"ドラッグで回転 · スクロールで拡大"})]}),C.jsxs("div",{className:"panel-footer",children:[C.jsxs("span",{children:[C.jsx(hS,{size:13}),Mt?"固定カメラの移動を表示（概算）":"腰中心の相対座標"]}),C.jsxs("label",{className:"toggle-label",children:["足首の軌跡",C.jsx("input",{type:"checkbox",checked:St,onChange:Y=>Ct(Y.target.checked)}),C.jsx("i",{})]}),C.jsxs("label",{className:"toggle-label",title:"カメラが動いていない動画でのみ有効にしてください。追いかけ動画で使うと、カメラの動きを身体の移動として誤表示します。",children:["固定カメラで撮影",C.jsx("input",{type:"checkbox",checked:Mt,onChange:Y=>rt(Y.target.checked)}),C.jsx("i",{})]})]})]}),C.jsxs("section",{className:"playback panel",children:[C.jsxs("div",{className:"transport",children:[C.jsx("button",{className:"icon-button","aria-label":"先頭に戻る",onClick:()=>Et(0),children:C.jsx(MS,{size:16})}),C.jsx("button",{className:"icon-button","aria-label":"1フレーム戻る",onClick:()=>{var Y;(Y=z.current)==null||Y.pause(),Et(S-1/((g==null?void 0:g.fps)??P))},children:C.jsx(uS,{size:15})}),C.jsx("button",{className:"play-button","aria-label":b?"一時停止":"再生",onClick:pt,children:b?C.jsx(vS,{size:17,fill:"currentColor"}):C.jsx(q_,{size:17,fill:"currentColor"})}),C.jsx("button",{className:"icon-button","aria-label":"1フレーム進む",onClick:()=>{var Y;(Y=z.current)==null||Y.pause(),Et(S+1/((g==null?void 0:g.fps)??P))},children:C.jsx(rc,{size:15})}),C.jsxs("span",{className:"transport-time",children:[S.toFixed(2),C.jsxs("small",{children:[" / ",d.toFixed(2)," s"]})]}),C.jsx("label",{className:"speed-label",children:C.jsxs("select",{"aria-label":"再生速度",value:_,onChange:Y=>H(Number(Y.target.value)),children:[C.jsx("option",{value:.25,children:"0.25×"}),C.jsx("option",{value:.5,children:"0.5×"}),C.jsx("option",{value:1,children:"1×"}),C.jsx("option",{value:2,children:"2×"})]})}),C.jsxs("span",{className:"sync-label",children:[C.jsx("span",{}),"同期再生"]})]}),C.jsx("input",{className:"timeline",type:"range",min:0,max:d||1,step:.001,value:S,onChange:Y=>Et(Number(Y.target.value)),"aria-label":"再生位置",style:{"--progress":`${S/(d||1)*100}%`}}),C.jsxs("div",{className:"timeline-ticks",children:[C.jsx("span",{children:"0.00s"}),C.jsxs("span",{children:[(d*.25).toFixed(2),"s"]}),C.jsxs("span",{children:[(d*.5).toFixed(2),"s"]}),C.jsxs("span",{children:[(d*.75).toFixed(2),"s"]}),C.jsxs("span",{children:[d.toFixed(2),"s"]})]})]}),C.jsxs("section",{className:"panel chart-panel",children:[C.jsxs("div",{className:"panel-header",children:[C.jsxs("h2",{children:[C.jsx(sc,{size:16}),"関節角度の変化"]}),C.jsxs("div",{className:"chart-legend",children:[C.jsxs("span",{children:[C.jsx("i",{className:"legend-dot purple"}),"左"]}),C.jsxs("span",{children:[C.jsx("i",{className:"legend-dot lime"}),"右"]}),C.jsx("span",{className:"chart-unit",children:k==="abduction"?"外転(+) / 内転(−) / °":"屈曲角度 / °"})]})]}),C.jsxs("div",{className:"chart-tabs",children:[Object.keys(Or).map(Y=>C.jsx("button",{className:k===Y?"selected":"",onClick:()=>J(Y),children:Y==="knee"?"膝関節":Y==="hip"?"股関節":Y==="elbow"?"肘関節":"股関節（外転）"},Y)),C.jsx("span",{children:"グラフをクリックして、その瞬間へ"})]}),C.jsx(c2,{analysis:Ot,selected:k,time:S,onSeek:Et})]})]}),C.jsxs("aside",{className:"inspector",children:[C.jsxs("section",{className:"panel metrics-panel",children:[C.jsxs("div",{className:"panel-header",children:[C.jsxs("h2",{children:[C.jsx(yS,{size:16}),"動作インサイト"]}),C.jsx("span",{className:"live-dot"})]}),C.jsxs("div",{className:"inspector-content",children:[C.jsxs("div",{className:"current-frame",children:[C.jsx("span",{children:"CURRENT FRAME"}),C.jsxs("strong",{children:[S.toFixed(2),C.jsx("small",{children:"s"})]})]}),C.jsxs("div",{className:"joint-select",children:[C.jsx("label",{htmlFor:"joint",children:"注目する関節"}),C.jsx("select",{id:"joint",value:k,onChange:Y=>J(Y.target.value),children:Object.entries(Or).map(([Y,F])=>C.jsx("option",{value:Y,children:F.label},Y))})]}),C.jsx("div",{className:"angle-values",children:["left","right"].map(Y=>{const F=jc(te,k,Y);return C.jsxs("div",{children:[C.jsxs("span",{children:[C.jsx("i",{className:`legend-dot ${Y==="left"?"purple":"lime"}`}),Y==="left"?"左":"右",k==="knee"?"膝":k==="hip"?"股関節":k==="elbow"?"肘":"股関節"]}),C.jsxs("strong",{className:Y,children:[Wh(F),C.jsx("small",{children:"°"})]}),C.jsx("span",{className:"angle-caption",children:F===null?"未検出 / 遮蔽":k==="abduction"?F>=0?"外転（外側へ・概算）":"内転（内側へ・概算）":"屈曲角度"})]},Y)})}),C.jsxs("div",{className:"range-summary",children:[C.jsxs("span",{children:["左側の可動範囲 ",C.jsx("small",{children:"全区間"})]}),C.jsx("strong",{children:wt?`${Wh(wt.min)}° — ${Wh(wt.max)}°`:"—"}),C.jsx("div",{children:C.jsx("i",{style:{left:`${(((wt==null?void 0:wt.min)??Wt)-Wt)/(Gt-Wt)*100}%`,width:`${(((wt==null?void 0:wt.max)??Wt)-((wt==null?void 0:wt.min)??Wt))/(Gt-Wt)*100}%`}})})]}),C.jsxs("div",{className:"confidence-section",children:[C.jsxs("div",{children:[C.jsx("span",{children:et?"2D関節の検出スコア":"関節の見えやすさ"}),C.jsx("strong",{children:te!=null&&te.landmarks?`${Math.round(T*100)}%`:"—"})]}),C.jsx("div",{className:"confidence-bar",children:C.jsx("i",{style:{width:`${T*100}%`}})}),C.jsxs("p",{children:[te!=null&&te.landmarks?T>.8?"主要な関節が見えています":"遮蔽のある関節は角度を表示しません":g?"このフレームは人物を検出できませんでした":"解析後にフレームごとの値を表示します",C.jsx("br",{}),et?"RTMPoseの2Dスコア平均。3Dの精度ではありません。":"モデルの visibility 平均。精度の保証値ではありません。"]})]}),C.jsxs("label",{className:"toggle-label smoothing",children:[C.jsxs("span",{children:[C.jsx(SS,{size:14}),"動きをなめらかにする"]}),C.jsx("input",{type:"checkbox",checked:$,onChange:Y=>W(Y.target.checked)}),C.jsx("i",{})]})]})]}),C.jsxs("section",{className:"panel session-card",children:[C.jsxs("div",{className:"mini-heading",children:[C.jsx(gS,{size:15}),"解析サマリー"]}),C.jsxs("dl",{children:[C.jsxs("div",{children:[C.jsx("dt",{children:"推定点"}),C.jsx("dd",{children:et?"26点（2D） / 17点（3D）":"33 ランドマーク"})]}),C.jsxs("div",{children:[C.jsx("dt",{children:"解析フレーム"}),C.jsx("dd",{children:g?`${O} / ${g.frames.length}`:"—"})]}),C.jsxs("div",{children:[C.jsx("dt",{children:"解析間隔"}),C.jsx("dd",{children:g?`${g.fps} fps`:"—"})]}),C.jsxs("div",{children:[C.jsx("dt",{children:"座標"}),C.jsx("dd",{children:et?"腰中心・相対スケール":"腰中心・3D"})]})]}),C.jsxs("div",{className:"export-area",children:[C.jsxs("button",{className:"secondary export-button",disabled:!g,onClick:()=>Ut(!ut),children:[C.jsx(cS,{size:15}),"解析データを出力",C.jsx(fS,{size:13})]}),ut&&C.jsxs("div",{className:"export-menu",children:[C.jsx("button",{onClick:()=>Dt("csv"),children:"関節角度を CSV で保存"}),C.jsx("button",{onClick:()=>Dt("json"),children:"3D座標を JSON で保存"})]})]})]}),C.jsxs("div",{className:"info-note",children:[C.jsx(ch,{size:15}),C.jsxs("p",{children:["単眼動画からの推定です。カメラ移動や身体の遮蔽により誤差が生じます。移動距離・速度・筋力は算出しません。",C.jsxs("button",{onClick:()=>q(!0),children:["解析について ",C.jsx(rc,{size:12})]})]})]})]})]}),C.jsxs("footer",{className:"page-footer",children:[C.jsxs("span",{children:[C.jsx(sc,{size:12})," STRIDE MOTION LAB"]}),C.jsx("span",{children:"ひとつの動画から、動きの理解を深める。"})]})]})]}),Rt&&C.jsx("div",{className:"modal-backdrop",onClick:()=>q(!1),children:C.jsxs("section",{className:"help-modal",role:"dialog","aria-modal":"true","aria-label":"使い方と解析について",onClick:Y=>Y.stopPropagation(),children:[C.jsx("button",{className:"modal-close icon-button",onClick:()=>q(!1),"aria-label":"ガイドを閉じる",children:C.jsx(uh,{size:19})}),C.jsx("div",{className:"eyebrow",children:"GETTING STARTED"}),C.jsx("h2",{children:"動作を、いろいろな角度から。"}),C.jsxs("ol",{children:[C.jsxs("li",{children:[C.jsx("strong",{children:"動画を選ぶ"}),C.jsx("p",{children:"2分・500MB以内の動画を読み込みます。全身が写った1人の動画を推奨します。付属のハードル動画でも試せます。"})]}),C.jsxs("li",{children:[C.jsx("strong",{children:"3D推定を開始"}),C.jsx("p",{children:"各フレームを端末内で解析します。15 / 30 / 60 fpsを選べます。複数人の場合は最初に大きく写った人物を追跡しますが、交差時には入れ替わる可能性があります。"})]}),C.jsxs("li",{children:[C.jsx("strong",{children:"同期再生で確認"}),C.jsx("p",{children:"動画と3D骨格、関節角度が連動します。スロー再生、コマ送り、グラフのクリックで気になる瞬間を確認できます。"})]})]}),C.jsxs("div",{className:"help-detail",children:[C.jsx("h3",{children:"数値と3D表示の読み方"}),C.jsx("p",{children:"膝・肘は3点間の角度から屈曲角を計算し、伸びた状態を0°とします。股関節（屈曲・近似）は肩・腰・膝を使う近似値で、外転や体幹の動きも含んだ1つの数値です。"}),C.jsx("p",{children:"「股関節（外転）」は肩・腰の位置から体幹基準の矢状面を近似し、大腿がその面からどれだけ横に外れているかを±90°の範囲で表す概算値です。前後の屈曲量に関わらず定義され、股関節が深く曲がっている局面でも数値は破綻しません。前後の屈曲成分自体は含みません。単一カメラのため肩と腰から近似した体幹の向きに基づいており、体幹が大きく前傾・回旋する局面では実際の骨盤の傾きとのずれが乗ります。肩・反対側の腰が遮蔽されているフレームは欠測になります。"}),C.jsx("p",{children:"3Dは腰中心の相対座標です。RTMPoseは26点の2D検出を行い、MotionBERTが前後最大243フレームから17点の3D骨格を推定します。この3D座標は未校正の相対スケールで、表示サイズの調整は関節角度に影響しません。MediaPipeとの切り替えで同じ時刻を比較できます。地面の格子は表示の目安で、実際の地面や跳躍高を測定してはいません。"}),C.jsx("p",{children:"3D表示は既定では腰を原点に固定するため、追いかけ動画・定点動画のどちらでも身体はその場で動いているように見えます。「固定カメラで撮影」を有効にすると、肩・腰の画面上の動きから横方向・上下方向の実際の移動を概算し、腰を原点に固定せず前後左右に動かします（奥行き方向の移動は推定していません）。この機能はカメラが動いていない動画専用です。追いかけ動画で有効にすると、カメラ自身の動きを身体の移動として誤表示します。足首の軌跡は、この設定に関わらず腰を基準にした相対的な動きです。"}),C.jsx("p",{children:"なめらか表示は前後1フレームの平均です。関節のvisibilityまたはRTMPoseの2Dスコアが0.5未満の角度は欠測です。MotionBERT入力の欠測は一時補間しますが、該当点の低スコアは出力に引き継ぎます。CSVは表示中の補正設定、JSONは生の推定座標を出力します。"}),C.jsx("p",{children:"MediaPipeはブラウザ内で処理し、動画を送信しません。RTMPose + MotionBERTは、対応するサーバーが用意されていればそこで処理し、なければMediaPipeと同じくブラウザ内で処理します（このサイトでは通常ブラウザ内で処理します）。サーバーを使った場合、アップロードした動画は解析の完了・中止・エラー時に削除し、それ以外の目的には使用しません。個別に読み込んだ動画と解析結果は再読み込みで消えるため、必要な結果は出力してください。"}),C.jsx("a",{href:"https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker",target:"_blank",rel:"noreferrer",children:"MediaPipe Pose Landmarker 公式ドキュメント ↗"})]}),C.jsxs("button",{className:"primary",onClick:()=>q(!1),children:["解析をはじめる ",C.jsx(rc,{size:15})]})]})})]})}sS.createRoot(document.getElementById("root")).render(C.jsx(Qy.StrictMode,{children:C.jsx(_2,{})}));
